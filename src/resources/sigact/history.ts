// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SigactHistoryAPI from '../udl/sigact/history';

export class History extends APIResource {
  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(query: HistoryListParams, options?: Core.RequestOptions): Core.APIPromise<HistoryListResponse> {
    return this._client.get('/udl/sigact/history', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: HistoryCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/sigact/history/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type HistoryListResponse = Array<SigactHistoryAPI.SigactFull>;

export type HistoryCountResponse = string;

export interface HistoryListParams {
  /**
   * Date of the report or filing. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reportDate: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;
}

export interface HistoryCountParams {
  /**
   * Date of the report or filing. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reportDate: string;
}

export declare namespace History {
  export {
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
