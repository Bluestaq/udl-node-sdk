/**
 * A dynamic query builder that generates field-based filter methods at runtime.
 * 
 * This utility enables fluent query construction for TypeScript interfaces by dynamically
 * creating methods based on interface properties and supported query operators.
 * 
 * Example:
 * ```typescript
 * interface User {
 *   id: number;
 *   name: string;
 * }
 * 
 * const query = createQuery<User>();
 * query.name_like("Rob").id_gte(100);
 * const params = query.toParams();
 * // Result: {"name": "*Rob*", "id": ">=100"}
 * ```
 */

// Define supported query operators
type QueryOperator = '_eq' | '_gte' | '_lte' | '_like' | '_not' | '_between';

// Define the operator symbols
const OPERATORS: Record<QueryOperator, string> = {
  '_eq': '',
  '_gte': '>=',
  '_lte': '<=',
  '_like': 'like',
  '_not': 'not',
  '_between': 'between',
};

// Type for the query methods that will be dynamically generated
type QueryMethod<T> = (value: any) => Query<T>;

// Type for the query object with dynamically generated methods
type Query<T> = {
  [K in keyof T as `${string & K}${QueryOperator}`]: QueryMethod<T>;
} & {
  toParams(): Record<string, string>;
};

/**
 * Creates a query builder for a given interface type.
 * 
 * @template T - The interface type to create a query builder for
 * @returns A query object with dynamically generated filter methods
 */
export function createQuery<T>(): Query<T> {
  const filters: Record<string, string> = {};

  // Create a proxy that intercepts method calls
  const query = new Proxy({} as Query<T>, {
    get(target, prop: string) {
      // Handle the toParams method
      if (prop === 'toParams') {
        return () => ({ ...filters });
      }

      // Check if the property name matches our pattern: fieldName_operator
      const match = prop.match(/^(.+?)(_eq|_gte|_lte|_like|_not|_between)$/);
      if (!match) {
        return undefined;
      }

      const [, fieldName, operator] = match;
      
      // Return a method that adds the filter
      return (value: any) => {
        if (fieldName && operator) {
          addFilter(fieldName, operator as QueryOperator, value);
        }
        return query;
      };
    }
  });

  /**
   * Adds a filter to the internal filter store using the specified operator and value.
   * 
   * @param fieldName - The name of the model field to filter
   * @param operator - The operation symbol (e.g., '>=', 'like', 'not')
   * @param value - The value to compare against. For 'between', this must be a 2-tuple
   */
  function addFilter(fieldName: string, operator: QueryOperator, value: any): void {
    const operatorSymbol = OPERATORS[operator];

    if (operator === '_between') {
      if (!Array.isArray(value) || value.length !== 2) {
        throw new Error("'between' requires an array with exactly two values.");
      }
      filters[fieldName] = `${value[0]}..${value[1]}`;
    } else if (operator === '_not') {
      filters[fieldName] = `~${value}`;
    } else if (operator === '_like') {
      filters[fieldName] = `*${value}*`;
    } else {
      filters[fieldName] = `${operatorSymbol}${value}`;
    }
  }

  return query;
}

/**
 * Type helper to extract the interface type from a query builder.
 * 
 * @template T - The interface type
 * @returns The interface type T
 */
export type QueryType<T> = T;

/**
 * Utility type to create query parameter types for a given interface.
 * 
 * @template T - The interface type
 * @returns A type representing all possible query parameters for the interface
 */
export type QueryParams<T> = {
  [K in keyof T as `${string & K}${QueryOperator}`]?: any;
};

