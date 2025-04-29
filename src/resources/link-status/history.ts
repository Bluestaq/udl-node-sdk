// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LinkstatusHistoryAPI from '../udl/linkstatus/history';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class History extends APIResource {
  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: HistoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryListResponse> {
    return this._client.get('/udl/linkstatus/history', { query, ...options });
  }

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation, then write that data to the
   * Secure Content Store. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  aodr(query: HistoryAodrParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/linkstatus/history/aodr', {
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
   */
  count(query: HistoryCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/linkstatus/history/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type HistoryListResponse = Array<LinkstatusHistoryAPI.LinkStatusFull>;

export type HistoryCountResponse = string;

export interface HistoryListParams {
  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt?: string;

  firstResult?: number;

  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * The link establishment time, or the time that the link becomes available for
   * use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  linkStartTime?: string;

  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * The link termination time, or the time that the link becomes unavailable for
   * use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  linkStopTime?: string;

  maxResults?: number;
}

export interface HistoryAodrParams {
  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt?: string;

  firstResult?: number;

  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * The link establishment time, or the time that the link becomes available for
   * use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  linkStartTime?: string;

  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * The link termination time, or the time that the link becomes unavailable for
   * use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  linkStopTime?: string;

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
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt?: string;

  firstResult?: number;

  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * The link establishment time, or the time that the link becomes available for
   * use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  linkStartTime?: string;

  /**
   * (One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.)
   * The link termination time, or the time that the link becomes unavailable for
   * use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  linkStopTime?: string;

  maxResults?: number;
}

export declare namespace History {
  export {
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
