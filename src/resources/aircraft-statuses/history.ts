// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { AircraftstatusFullsOffsetPage } from '../shared';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * This service provides operations for manipulation and querying of Aircraft and Aircraft Status data. Aircraft contains the static data of the specific aircraft: tail number, cruise speed, max speed, minimum required runway length, etc. The Aircraft Status contains the dynamic data associated with the specific aircraft: remaining fuel, mission readiness, and inventory for example.
 */
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
   * for await (const aircraftstatusFull of client.aircraftStatuses.history.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: HistoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AircraftstatusFullsOffsetPage, Shared.AircraftstatusFull> {
    return this._client.getAPIList('/udl/aircraftstatus/history', OffsetPage<Shared.AircraftstatusFull>, {
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
   *
   * @example
   * ```ts
   * const response =
   *   await client.aircraftStatuses.history.count();
   * ```
   */
  count(query: HistoryCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/aircraftstatus/history/count', {
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
}

export interface HistoryCountParams {
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

export { type AircraftstatusFullsOffsetPage };
