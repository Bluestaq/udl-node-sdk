// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as RfobservationHistoryAPI from '../../udl/rfobservation/history';

export class History extends APIResource {
  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(query: HistoryListParams, options?: Core.RequestOptions): Core.APIPromise<HistoryListResponse> {
    return this._client.get('/udl/rfobservation/history', { query, ...options });
  }

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation, then write that data to the
   * Secure Content Store. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  aodr(query: HistoryAodrParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/rfobservation/history/aodr', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type HistoryListResponse = Array<RfobservationHistoryAPI.RfobservationdetailsFull>;

export interface HistoryListParams {
  /**
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;
}

export interface HistoryAodrParams {
  /**
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;

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

export declare namespace History {
  export {
    type HistoryListResponse as HistoryListResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
  };
}
