// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { DiplomaticclearanceFullsOffsetPage } from '../shared';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * These services provide operations for manipulating and querying Aircraft Sortie, Aircraft Mission, Item Tracking, Flight Plan, Air Event, Sortie Prior Permission Required (PPR), Diplomatic Clearance, Diplomatic Clearance Country, Airspace Control Order, Air Tasking Order, Navigational Obstruction, Logistics Support, Track Route, Air Load Plan, and Aviation Risk Management data. Aircraft Sortie information contains static and dynamic aircraft assignments, departure and arrival times, and remarks. Aircraft Mission information contains static data for mission planning to include assigned aircraft and crews, cargo pickup and dropoff locations, unique identifiers, and prioritization. Item Tracking information contains data for tracking an item from its origin to destination and how it may be configured during transport. Flight Plan information contains schedule and route details. Air Event provides information concerning various aerial events such as fuel transfer and air drops, as well as the associated aircraft involved. Sortie PPR information contains details on operational access to a runway, taxiway, or airport service. Diplomatic Clearance information contains details on the issuance and coordination of aircraft clearance requests. Diplomatic Clearance Country provides information such as entry/exit points, requirements, and points of contact for countries diplomatic clearances are being created for. Airspace Control Order provides information concerning the allocation, restriction, and deconfliction of airspace. Air Tasking Order information contains details on the coordination of air missions and their tasks, resources, and timelines. Navigational Obstruction provides the locations, characteristics, and boundaries of obstacles and structures that can restrict or interfere with navigation. Logistics Support contains information regarding the transport and maintenance of resources and equipment to sustain air operations. Track Route information defines specific flight paths used by aircraft during the transport of fuel and other resources. Air Load Plan information provides mission actuals concerning the loading and air transport of cargo and passengers. Aviation Risk Management information help aid in mission planning by accounting for factors such as mission complexity and crew fatigue.
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
   * for await (const diplomaticclearanceFull of client.diplomaticClearance.history.list(
   *   { firstDepDate: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: HistoryListParams,
    options?: RequestOptions,
  ): PagePromise<DiplomaticclearanceFullsOffsetPage, Shared.DiplomaticclearanceFull> {
    return this._client.getAPIList(
      '/udl/diplomaticclearance/history',
      OffsetPage<Shared.DiplomaticclearanceFull>,
      { query, ...options },
    );
  }

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation, then write that data to the
   * Secure Content Store. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   *
   * @example
   * ```ts
   * await client.diplomaticClearance.history.aodr({
   *   firstDepDate: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  aodr(query: HistoryAodrParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/diplomaticclearance/history/aodr', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
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
   *   await client.diplomaticClearance.history.count({
   *     firstDepDate: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  count(query: HistoryCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/diplomaticclearance/history/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type HistoryCountResponse = string;

export interface HistoryListParams extends OffsetPageParams {
  /**
   * The First Departure Date (FDD) the mission is scheduled for departure, in ISO
   * 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  firstDepDate: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;
}

export interface HistoryAodrParams {
  /**
   * The First Departure Date (FDD) the mission is scheduled for departure, in ISO
   * 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  firstDepDate: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * optional, notification method for the created file link. When omitted, EMAIL is
   * assumed. Current valid values are: EMAIL, SMS.
   */
  notification?: string;

  /**
   * optional, field delimiter when the created file is not JSON. Must be a single
   * character chosen from this set: (',', ';', ':', '|'). When omitted, "," is used.
   * It is strongly encouraged that your field delimiter be a character unlikely to
   * occur within the data.
   */
  outputDelimiter?: string;

  /**
   * optional, output format for the file. When omitted, JSON is assumed. Current
   * valid values are: JSON and CSV.
   */
  outputFormat?: string;
}

export interface HistoryCountParams {
  /**
   * The First Departure Date (FDD) the mission is scheduled for departure, in ISO
   * 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  firstDepDate: string;

  firstResult?: number;

  maxResults?: number;
}

export declare namespace History {
  export {
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}

export { type DiplomaticclearanceFullsOffsetPage };
