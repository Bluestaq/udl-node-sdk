// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SgiHistoryAPI from '../udl/sgi/history';
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
    return this._client.get('/udl/sgi/history', { query, ...options });
  }

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation, then write that data to the
   * Secure Content Store. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  aodr(query: HistoryAodrParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/sgi/history/aodr', {
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
    return this._client.get('/udl/sgi/history/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type HistoryListResponse = Array<SgiHistoryAPI.SgiFull>;

export type HistoryCountResponse = string;

export interface HistoryListParams {
  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  /**
   * (One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time
   * the data was received and processed from the source. Typically a source provides
   * solar data for a date window with each transmission including past, present, and
   * future predicted values. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  effectiveDate?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * (One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time
   * of the index value. This could be a past, current, or future predicted value.
   * Note: sgiDate defines the start time of the time window for this data record.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  sgiDate?: string;
}

export interface HistoryAodrParams {
  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  /**
   * (One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time
   * the data was received and processed from the source. Typically a source provides
   * solar data for a date window with each transmission including past, present, and
   * future predicted values. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  effectiveDate?: string;

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

  /**
   * (One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time
   * of the index value. This could be a past, current, or future predicted value.
   * Note: sgiDate defines the start time of the time window for this data record.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  sgiDate?: string;
}

export interface HistoryCountParams {
  /**
   * (One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time
   * the data was received and processed from the source. Typically a source provides
   * solar data for a date window with each transmission including past, present, and
   * future predicted values. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  effectiveDate?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * (One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time
   * of the index value. This could be a past, current, or future predicted value.
   * Note: sgiDate defines the start time of the time window for this data record.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  sgiDate?: string;
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
