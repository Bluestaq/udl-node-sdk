// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { EopFullsOffsetPage } from '../shared';
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
   * for await (const eopFull of client.eop.history.list({
   *   eopDate: '2019-12-27T18:11:19.117Z',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(query: HistoryListParams, options?: RequestOptions): PagePromise<EopFullsOffsetPage, Shared.EopFull> {
    return this._client.getAPIList('/udl/eop/history', OffsetPage<Shared.EopFull>, { query, ...options });
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
   * await client.eop.history.aodr({
   *   eopDate: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  aodr(query: HistoryAodrParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/eop/history/aodr', {
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
   * const response = await client.eop.history.count({
   *   eopDate: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: HistoryCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/eop/history/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type HistoryCountResponse = string;

export interface HistoryListParams extends OffsetPageParams {
  /**
   * Effective date/time for the EOP values in ISO8601 UTC format. The values could
   * be current or predicted. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  eopDate: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;
}

export interface HistoryAodrParams {
  /**
   * Effective date/time for the EOP values in ISO8601 UTC format. The values could
   * be current or predicted. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  eopDate: string;

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
   * Effective date/time for the EOP values in ISO8601 UTC format. The values could
   * be current or predicted. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  eopDate: string;

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

export { type EopFullsOffsetPage };
