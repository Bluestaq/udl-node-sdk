// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Countries extends APIResource {
  /**
   * Service operation to take a single Country as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.countries.create({
   *   code: 'US',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: CountryCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/country', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Country record by its unique code passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const countryFull = await client.countries.retrieve('code');
   * ```
   */
  retrieve(
    code: string,
    query: CountryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CountryFull> {
    return this._client.get(path`/udl/country/${code}`, { query, ...options });
  }

  /**
   * Service operation to update a single Country. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.countries.update('code', {
   *   body_code: 'US',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathCode: string, body: CountryUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/country/${pathCode}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const countryAbridged of client.countries.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CountryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CountryAbridgedsOffsetPage, CountryAbridged> {
    return this._client.getAPIList('/udl/country', OffsetPage<CountryAbridged>, { query, ...options });
  }

  /**
   * Service operation to delete a Country object specified by the passed code path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.countries.delete('code');
   * ```
   */
  delete(code: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/country/${code}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   *
   * @example
   * ```ts
   * const response = await client.countries.count();
   * ```
   */
  count(query: CountryCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/country/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.countries.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<CountryQueryhelpResponse> {
    return this._client.get('/udl/country/queryhelp', options);
  }

  /**
   * Service operation to dynamically query data and only return specified
   * columns/fields. Requested columns are specified by the 'columns' query parameter
   * and should be a comma separated list of valid fields for the specified data
   * type. classificationMarking is always returned. See the queryhelp operation
   * (/udl/<datatype>/queryhelp) for more details on valid/required query parameter
   * information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5
   * hours would return the satNo and period of elsets with an epoch greater than 5
   * hours ago.
   *
   * @example
   * ```ts
   * const countryFulls = await client.countries.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: CountryTupleParams, options?: RequestOptions): APIPromise<CountryTupleResponse> {
    return this._client.get('/udl/country/tuple', { query, ...options });
  }
}

export type CountryAbridgedsOffsetPage = OffsetPage<CountryAbridged>;

/**
 * A Country may represent countries, multi-national consortiums, and international
 * organizations.
 */
export interface CountryAbridged {
  /**
   * The country code. Optimally, this value is the ISO 3166 Alpha-2-two-character
   * country code, however it can represent various consortiums that do not appear in
   * the ISO document.
   */
  code: string;

  /**
   * Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Source of the data.
   */
  source: string;

  /**
   * 3 Digit or other alternate country code.
   */
  codeAlt?: string;

  /**
   * Time the row was created in the database, auto-populated by the system.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  /**
   * Federal Information Processing Standard (FIPS) two-character country code. This
   * field is used when the country code for FIPS differs from the country code for
   * ISO-3166 value. For example, the ISO-3166 Alpha-2-country code for Vanuatu is
   * VU, whereas Vanuatu's FIPS equivalent country code is NH.
   */
  fipsCode?: string;

  /**
   * ISO 3166 Alpha-3 country code. This is a three-character code that represents a
   * country name, which may be more closely related to the country name than its
   * corresponding Alpha-2 code.
   */
  iso3Code?: string;

  /**
   * Country name.
   */
  name?: string;

  /**
   * The originating source network on which this record was created, auto-populated
   * by the system.
   */
  origNetwork?: string;
}

/**
 * A Country may represent countries, multi-national consortiums, and international
 * organizations.
 */
export interface CountryFull {
  /**
   * The country code. Optimally, this value is the ISO 3166 Alpha-2-two-character
   * country code, however it can represent various consortiums that do not appear in
   * the ISO document.
   */
  code: string;

  /**
   * Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Source of the data.
   */
  source: string;

  /**
   * 3 Digit or other alternate country code.
   */
  codeAlt?: string;

  /**
   * Time the row was created in the database, auto-populated by the system.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  /**
   * Federal Information Processing Standard (FIPS) two-character country code. This
   * field is used when the country code for FIPS differs from the country code for
   * ISO-3166 value. For example, the ISO-3166 Alpha-2-country code for Vanuatu is
   * VU, whereas Vanuatu's FIPS equivalent country code is NH.
   */
  fipsCode?: string;

  /**
   * ISO 3166 Alpha-3 country code. This is a three-character code that represents a
   * country name, which may be more closely related to the country name than its
   * corresponding Alpha-2 code.
   */
  iso3Code?: string;

  /**
   * Country name.
   */
  name?: string;

  /**
   * The originating source network on which this record was created, auto-populated
   * by the system.
   */
  origNetwork?: string;

  /**
   * Time the row was last updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

export type CountryCountResponse = string;

export interface CountryQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<CountryQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace CountryQueryhelpResponse {
  export interface Parameter {
    classificationMarking?: string;

    derived?: boolean;

    description?: string;

    elemMatch?: boolean;

    format?: string;

    histQuerySupported?: boolean;

    histTupleSupported?: boolean;

    name?: string;

    required?: boolean;

    restQuerySupported?: boolean;

    restTupleSupported?: boolean;

    type?: string;

    unitOfMeasure?: string;

    utcDate?: boolean;
  }
}

export type CountryTupleResponse = Array<CountryFull>;

export interface CountryCreateParams {
  /**
   * The country code. Optimally, this value is the ISO 3166 Alpha-2-two-character
   * country code, however it can represent various consortiums that do not appear in
   * the ISO document.
   */
  code: string;

  /**
   * Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Source of the data.
   */
  source: string;

  /**
   * 3 Digit or other alternate country code.
   */
  codeAlt?: string;

  /**
   * Federal Information Processing Standard (FIPS) two-character country code. This
   * field is used when the country code for FIPS differs from the country code for
   * ISO-3166 value. For example, the ISO-3166 Alpha-2-country code for Vanuatu is
   * VU, whereas Vanuatu's FIPS equivalent country code is NH.
   */
  fipsCode?: string;

  /**
   * ISO 3166 Alpha-3 country code. This is a three-character code that represents a
   * country name, which may be more closely related to the country name than its
   * corresponding Alpha-2 code.
   */
  iso3Code?: string;

  /**
   * Country name.
   */
  name?: string;
}

export interface CountryRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface CountryUpdateParams {
  /**
   * The country code. Optimally, this value is the ISO 3166 Alpha-2-two-character
   * country code, however it can represent various consortiums that do not appear in
   * the ISO document.
   */
  body_code: string;

  /**
   * Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Source of the data.
   */
  source: string;

  /**
   * 3 Digit or other alternate country code.
   */
  codeAlt?: string;

  /**
   * Federal Information Processing Standard (FIPS) two-character country code. This
   * field is used when the country code for FIPS differs from the country code for
   * ISO-3166 value. For example, the ISO-3166 Alpha-2-country code for Vanuatu is
   * VU, whereas Vanuatu's FIPS equivalent country code is NH.
   */
  fipsCode?: string;

  /**
   * ISO 3166 Alpha-3 country code. This is a three-character code that represents a
   * country name, which may be more closely related to the country name than its
   * corresponding Alpha-2 code.
   */
  iso3Code?: string;

  /**
   * Country name.
   */
  name?: string;
}

export interface CountryListParams extends OffsetPageParams {}

export interface CountryCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface CountryTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  firstResult?: number;

  maxResults?: number;
}

export declare namespace Countries {
  export {
    type CountryAbridged as CountryAbridged,
    type CountryFull as CountryFull,
    type CountryCountResponse as CountryCountResponse,
    type CountryQueryhelpResponse as CountryQueryhelpResponse,
    type CountryTupleResponse as CountryTupleResponse,
    type CountryAbridgedsOffsetPage as CountryAbridgedsOffsetPage,
    type CountryCreateParams as CountryCreateParams,
    type CountryRetrieveParams as CountryRetrieveParams,
    type CountryUpdateParams as CountryUpdateParams,
    type CountryListParams as CountryListParams,
    type CountryCountParams as CountryCountParams,
    type CountryTupleParams as CountryTupleParams,
  };
}
