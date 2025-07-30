// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';

export class DataownerTypes extends APIResource {
  /**
   * Retrieves all distinct data owner types.
   */
  list(
    query: DataownerTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DataownerTypeListResponsesOffsetPage, DataownerTypeListResponse> {
    return this._client.getAPIList(
      '/udl/dataowner/getDataOwnerTypes',
      OffsetPage<DataownerTypeListResponse>,
      { query, ...options },
    );
  }
}

export type DataownerTypeListResponsesOffsetPage = OffsetPage<DataownerTypeListResponse>;

export type DataownerTypeListResponse = string;

export interface DataownerTypeListParams extends OffsetPageParams {}

export declare namespace DataownerTypes {
  export {
    type DataownerTypeListResponse as DataownerTypeListResponse,
    type DataownerTypeListResponsesOffsetPage as DataownerTypeListResponsesOffsetPage,
    type DataownerTypeListParams as DataownerTypeListParams,
  };
}
