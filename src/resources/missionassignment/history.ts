// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as MissionassignmentHistoryAPI from '../udl/missionassignment/history';

export class History extends APIResource {
  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation, then write that data to the
   * Secure Content Store. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  aodr(query: HistoryAodrParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/missionassignment/history/aodr', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: HistoryCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/missionassignment/history/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  query(query: HistoryQueryParams, options?: Core.RequestOptions): Core.APIPromise<HistoryQueryResponse> {
    return this._client.get('/udl/missionassignment/history', { query, ...options });
  }
}

export type HistoryCountResponse = string;

export type HistoryQueryResponse = Array<MissionassignmentHistoryAPI.MissionAssignmentFull>;

export interface HistoryAodrParams {
  /**
   * the timestamp of the mission data, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

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
   * the timestamp of the mission data, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;
}

export interface HistoryQueryParams {
  /**
   * the timestamp of the mission data, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

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
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
    type HistoryQueryParams as HistoryQueryParams,
  };
}
