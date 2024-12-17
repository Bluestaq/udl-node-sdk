// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class DataTypes extends APIResource {
  /**
   * Retrieves all distinct data owner types.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<DataTypeListResponse> {
    return this._client.get('/udl/dataowner/getDataTypes', options);
  }
}

export type DataTypeListResponse = Array<string>;

export declare namespace DataTypes {
  export { type DataTypeListResponse as DataTypeListResponse };
}
