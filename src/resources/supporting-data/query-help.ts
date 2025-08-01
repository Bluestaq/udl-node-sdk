// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
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

  parameters?: Array<Shared.ParamDescriptor>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export declare namespace QueryHelp {
  export { type QueryHelpRetrieveResponse as QueryHelpRetrieveResponse };
}
