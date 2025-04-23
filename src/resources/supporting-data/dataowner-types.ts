// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class DataownerTypes extends APIResource {
  /**
   * Retrieves all distinct data owner types.
   */
  list(options?: RequestOptions): APIPromise<DataownerTypeListResponse> {
    return this._client.get('/udl/dataowner/getDataOwnerTypes', options);
  }
}

export type DataownerTypeListResponse = Array<string>;

export declare namespace DataownerTypes {
  export { type DataownerTypeListResponse as DataownerTypeListResponse };
}
