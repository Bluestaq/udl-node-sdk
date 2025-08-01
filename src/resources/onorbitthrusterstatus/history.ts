// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { OnorbitthrusterstatusFullsOffsetPage } from '../shared';
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const onorbitthrusterstatusFull of client.onorbitthrusterstatus.history.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: HistoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OnorbitthrusterstatusFullsOffsetPage, Shared.OnorbitthrusterstatusFull> {
    return this._client.getAPIList(
      '/udl/onorbitthrusterstatus/history',
      OffsetPage<Shared.OnorbitthrusterstatusFull>,
      { query, ...options },
    );
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   *
   * @example
   * ```ts
   * const response =
   *   await client.onorbitthrusterstatus.history.count();
   * ```
   */
  count(query: HistoryCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/onorbitthrusterstatus/history/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type HistoryCountResponse = string;

export interface HistoryListParams extends OffsetPageParams {
  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  /**
   * (One or more of fields 'idOnorbitThruster, statusTime' are required.) ID of the
   * associated OnorbitThruster record. This ID can be used to obtain additional
   * information on an onorbit thruster object using the 'get by ID' operation (e.g.
   * /udl/onorbitthruster/{id}). For example, the OnorbitThruster object with
   * idOnorbitThruster = abc would be queried as /udl/onorbitthruster/abc.
   */
  idOnorbitThruster?: string;

  /**
   * (One or more of fields 'idOnorbitThruster, statusTime' are required.) Datetime
   * of the thruster status observation in ISO 8601 UTC datetime format with
   * millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  statusTime?: string;
}

export interface HistoryCountParams {
  firstResult?: number;

  /**
   * (One or more of fields 'idOnorbitThruster, statusTime' are required.) ID of the
   * associated OnorbitThruster record. This ID can be used to obtain additional
   * information on an onorbit thruster object using the 'get by ID' operation (e.g.
   * /udl/onorbitthruster/{id}). For example, the OnorbitThruster object with
   * idOnorbitThruster = abc would be queried as /udl/onorbitthruster/abc.
   */
  idOnorbitThruster?: string;

  maxResults?: number;

  /**
   * (One or more of fields 'idOnorbitThruster, statusTime' are required.) Datetime
   * of the thruster status observation in ISO 8601 UTC datetime format with
   * millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  statusTime?: string;
}

export declare namespace History {
  export {
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };
}

export { type OnorbitthrusterstatusFullsOffsetPage };
