// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import * as AodrAPI from './aodr';
import { Aodr, AodrListParams } from './aodr';

export class History extends APIResource {
  aodr: AodrAPI.Aodr = new AodrAPI.Aodr(this._client);

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(params: HistoryListParams, options?: Core.RequestOptions): Core.APIPromise<HistoryListResponse> {
    const { createdAt, columns } = params;
    return this._client.get('/udl/collectresponse/history', options);
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(params: HistoryCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { createdAt } = params;
    return this._client.get('/udl/collectresponse/history/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type HistoryListResponse = Array<Shared.CollectResponseFull>;

export type HistoryCountResponse = string;

export interface HistoryListParams {
  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;
}

export interface HistoryCountParams {
  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;
}

History.Aodr = Aodr;

export declare namespace History {
  export {
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };

  export { Aodr as Aodr, type AodrListParams as AodrListParams };
}
