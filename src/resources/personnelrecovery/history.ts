// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as PersonnelrecoveryAPI from './personnelrecovery';

export class History extends APIResource {
  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(query: HistoryListParams, options?: Core.RequestOptions): Core.APIPromise<HistoryListResponse> {
    return this._client.get('/udl/personnelrecovery/history', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: HistoryCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/personnelrecovery/history/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type HistoryListResponse = Array<PersonnelrecoveryAPI.PersonnelRecoveryFullL>;

export type HistoryCountResponse = string;

export interface HistoryListParams {
  /**
   * Time stamp of the original personnel recovery message, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgTime: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;
}

export interface HistoryCountParams {
  /**
   * Time stamp of the original personnel recovery message, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgTime: string;
}

export declare namespace History {
  export {
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
