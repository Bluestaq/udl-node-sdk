// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class DataTypes extends APIResource {
  /**
   * Retrieves all distinct data owner types.
   */
  list(
    query: DataTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataTypeListResponse> {
    return this._client.get('/udl/dataowner/getDataTypes', { query, ...options });
  }
}

export type DataTypeListResponse = Array<string>;

export interface DataTypeListParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace DataTypes {
  export { type DataTypeListResponse as DataTypeListResponse, type DataTypeListParams as DataTypeListParams };
}
