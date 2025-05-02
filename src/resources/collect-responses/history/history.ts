// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { CollectResponseFullsOffsetPage } from '../../shared';
import * as AodrAPI from './aodr';
import { Aodr, AodrListParams } from './aodr';
import { APIPromise } from '../../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class History extends APIResource {
  aodr: AodrAPI.Aodr = new AodrAPI.Aodr(this._client);

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: HistoryListParams,
    options?: RequestOptions,
  ): PagePromise<CollectResponseFullsOffsetPage, Shared.CollectResponseFull> {
    return this._client.getAPIList('/udl/collectresponse/history', OffsetPage<Shared.CollectResponseFull>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: HistoryCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/collectresponse/history/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type HistoryCountResponse = string;

export interface HistoryListParams extends OffsetPageParams {
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

  firstResult?: number;

  maxResults?: number;
}

History.Aodr = Aodr;

export declare namespace History {
  export {
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };

  export { Aodr as Aodr, type AodrListParams as AodrListParams };
}

export { type CollectResponseFullsOffsetPage };
