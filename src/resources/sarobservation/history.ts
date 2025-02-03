// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SarobservationHistoryAPI from '../udl/sarobservation/history';

export class History extends APIResource {
  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  retrieve(
    query: HistoryRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoryRetrieveResponse> {
    return this._client.get('/udl/sarobservation/history', { query, ...options });
  }

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation, then write that data to the
   * Secure Content Store. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  aodr(query: HistoryAodrParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/sarobservation/history/aodr', {
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
    return this._client.get('/udl/sarobservation/history/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type HistoryRetrieveResponse = Array<SarobservationHistoryAPI.SarobservationFull>;

export type HistoryCountResponse = string;

export interface HistoryRetrieveParams {
  /**
   * Collection start time in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  collectionStart: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;
}

export interface HistoryAodrParams {
  /**
   * Collection start time in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  collectionStart: string;

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
   * Collection start time in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  collectionStart: string;
}

export declare namespace History {
  export {
    type HistoryRetrieveResponse as HistoryRetrieveResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryRetrieveParams as HistoryRetrieveParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
