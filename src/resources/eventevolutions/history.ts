// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class History extends APIResource {
  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(params?: HistoryListParams, options?: Core.RequestOptions): Core.APIPromise<HistoryListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<HistoryListResponse>;
  list(
    params: HistoryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoryListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { columns, eventId, startTime } = params;
    return this._client.get('/udl/eventevolution/history', options);
  }

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation, then write that data to the
   * Secure Content Store. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  aodr(params?: HistoryAodrParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  aodr(options?: Core.RequestOptions): Core.APIPromise<void>;
  aodr(
    params: HistoryAodrParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.aodr({}, params);
    }
    const { columns, eventId, notification, outputDelimiter, outputFormat, startTime } = params;
    return this._client.get('/udl/eventevolution/history/aodr', {
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
  count(params?: HistoryCountParams, options?: Core.RequestOptions): Core.APIPromise<string>;
  count(options?: Core.RequestOptions): Core.APIPromise<string>;
  count(
    params: HistoryCountParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    if (isRequestOptions(params)) {
      return this.count({}, params);
    }
    const { eventId, startTime } = params;
    return this._client.get('/udl/eventevolution/history/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type HistoryListResponse = Array<Shared.EventEvolutionFull>;

export type HistoryCountResponse = string;

export interface HistoryListParams {
  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  /**
   * (One or more of fields 'eventId, startTime' are required.) User-provided unique
   * identifier of this activity or event. This ID should remain the same on
   * subsequent updates in order to associate all records pertaining to the activity
   * or event.
   */
  eventId?: string;

  /**
   * (One or more of fields 'eventId, startTime' are required.) The actual or
   * estimated start time of the activity or event, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime?: string;
}

export interface HistoryAodrParams {
  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  /**
   * (One or more of fields 'eventId, startTime' are required.) User-provided unique
   * identifier of this activity or event. This ID should remain the same on
   * subsequent updates in order to associate all records pertaining to the activity
   * or event.
   */
  eventId?: string;

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
   * (One or more of fields 'eventId, startTime' are required.) The actual or
   * estimated start time of the activity or event, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime?: string;
}

export interface HistoryCountParams {
  /**
   * (One or more of fields 'eventId, startTime' are required.) User-provided unique
   * identifier of this activity or event. This ID should remain the same on
   * subsequent updates in order to associate all records pertaining to the activity
   * or event.
   */
  eventId?: string;

  /**
   * (One or more of fields 'eventId, startTime' are required.) The actual or
   * estimated start time of the activity or event, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime?: string;
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
