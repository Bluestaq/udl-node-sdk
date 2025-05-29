// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class QueryHelp extends APIResource {
  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  retrieve(options?: RequestOptions): APIPromise<QueryHelpRetrieveResponse> {
    return this._client.get('/udl/dataowner/queryhelp', options);
  }
}

export interface QueryHelpRetrieveResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<QueryHelpRetrieveResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace QueryHelpRetrieveResponse {
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

export declare namespace QueryHelp {
  export { type QueryHelpRetrieveResponse as QueryHelpRetrieveResponse };
}
