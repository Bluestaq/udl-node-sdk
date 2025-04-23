// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as GroundimageryHistoryAPI from '../udl/groundimagery/history';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class History extends APIResource {
  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: HistoryCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/groundimagery/history/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  query(query: HistoryQueryParams, options?: RequestOptions): APIPromise<HistoryQueryResponse> {
    return this._client.get('/udl/groundimagery/history', { query, ...options });
  }
}

export type HistoryCountResponse = string;

export type HistoryQueryResponse = Array<GroundimageryHistoryAPI.GroundImageryFull>;

export interface HistoryCountParams {
  /**
   * Timestamp the image was captured/produced. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  imageTime: string;
}

export interface HistoryQueryParams {
  /**
   * Timestamp the image was captured/produced. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  imageTime: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;
}

export declare namespace History {
  export {
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryQueryResponse as HistoryQueryResponse,
    type HistoryCountParams as HistoryCountParams,
    type HistoryQueryParams as HistoryQueryParams,
  };
}
