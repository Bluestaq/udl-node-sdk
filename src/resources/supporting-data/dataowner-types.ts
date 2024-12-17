// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class DataownerTypes extends APIResource {
  /**
   * Retrieves all distinct data owner types.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<DataownerTypeListResponse> {
    return this._client.get('/udl/dataowner/getDataOwnerTypes', options);
  }
}

export type DataownerTypeListResponse = Array<string>;

export declare namespace DataownerTypes {
  export { type DataownerTypeListResponse as DataownerTypeListResponse };
}
