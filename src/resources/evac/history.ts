// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class History extends APIResource {
  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(params: HistoryListParams, options?: Core.RequestOptions): Core.APIPromise<HistoryListResponse> {
    const { reqTime, columns } = params;
    return this._client.get('/udl/evac/history', options);
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(params: HistoryCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { reqTime } = params;
    return this._client.get('/udl/evac/history/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type HistoryListResponse = Array<Shared.EvacFull>;

export type HistoryCountResponse = string;

export interface HistoryListParams {
  /**
   * The request time, in ISO 8601 UTC format. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reqTime: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;
}

export interface HistoryCountParams {
  /**
   * The request time, in ISO 8601 UTC format. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reqTime: string;
}

export declare namespace History {
  export {
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
