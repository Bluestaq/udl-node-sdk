// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class DataownerTypes extends APIResource {
  /**
   * Retrieves all distinct data owner types.
   */
  list(
    query: DataownerTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataownerTypeListResponse> {
    return this._client.get('/udl/dataowner/getDataOwnerTypes', { query, ...options });
  }
}

export type DataownerTypeListResponse = Array<string>;

export interface DataownerTypeListParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace DataownerTypes {
  export {
    type DataownerTypeListResponse as DataownerTypeListResponse,
    type DataownerTypeListParams as DataownerTypeListParams,
  };
}
