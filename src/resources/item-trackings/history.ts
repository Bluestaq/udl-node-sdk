// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ItemtrackingHistoryAPI from '../udl/itemtracking/history';
import { ItemTrackingFullsOffsetPage } from '../udl/itemtracking/history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class History extends APIResource {
  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: HistoryListParams,
    options?: RequestOptions,
  ): PagePromise<ItemTrackingFullsOffsetPage, ItemtrackingHistoryAPI.ItemTrackingFull> {
    return this._client.getAPIList(
      '/udl/itemtracking/history',
      OffsetPage<ItemtrackingHistoryAPI.ItemTrackingFull>,
      { query, ...options },
    );
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: HistoryCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/itemtracking/history/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type HistoryCountResponse = string;

export interface HistoryListParams extends OffsetPageParams {
  /**
   * The timestamp of the scan, in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  ts: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;
}

export interface HistoryCountParams {
  /**
   * The timestamp of the scan, in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export declare namespace History {
  export {
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };
}

export { type ItemTrackingFullsOffsetPage };
