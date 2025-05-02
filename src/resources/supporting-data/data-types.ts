// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class DataTypes extends APIResource {
  /**
   * Retrieves all distinct data owner types.
   */
  list(
    query: DataTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DataTypeListResponsesOffsetPage, DataTypeListResponse> {
    return this._client.getAPIList('/udl/dataowner/getDataTypes', OffsetPage<DataTypeListResponse>, {
      query,
      ...options,
    });
  }
}

export type DataTypeListResponsesOffsetPage = OffsetPage<DataTypeListResponse>;

export type DataTypeListResponse = string;

export interface DataTypeListParams extends OffsetPageParams {}

export declare namespace DataTypes {
  export {
    type DataTypeListResponse as DataTypeListResponse,
    type DataTypeListResponsesOffsetPage as DataTypeListResponsesOffsetPage,
    type DataTypeListParams as DataTypeListParams,
  };
}
