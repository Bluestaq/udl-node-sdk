// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class History extends APIResource {
  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation, then write that data to the
   * Secure Content Store. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  aodr(query: HistoryAodrParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/starcatalog/history/aodr', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface HistoryAodrParams {
  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  /**
   * (One or more of fields 'dec, ra' are required.) Barycentric declination of the
   * source in International Celestial Reference System (ICRS) at the reference
   * epoch, in degrees.
   */
  dec?: number;

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
   * (One or more of fields 'dec, ra' are required.) Barycentric right ascension of
   * the source in the International Celestial Reference System (ICRS) frame at the
   * reference epoch, in degrees.
   */
  ra?: number;
}

export declare namespace History {
  export { type HistoryAodrParams as HistoryAodrParams };
}
