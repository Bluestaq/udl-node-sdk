// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * This collection of services provides operations for querying and manipulation of electro-optical (EO), radar, radio frequency (RF), Global Navigation Satellite Systems (GNSS), Ionospheric (IONO), Infrared (SWIR), and Space Environment observation data. The J2000 coordinate frame is the preferred frame for all observations, as applicable, but in some cases observations may be in an alternate frame depending on the provider and/or datatype.
 */
export class History extends APIResource {
  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (`/udl/<datatype>/queryhelp`) for more details on
   * valid/required query parameter information.
   */
  count(query: HistoryCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/gnssobservationset/history/count', { query, ...options, headers: buildHeaders([{Accept: 'text/plain'}, options?.headers]) });
  }
}

export type HistoryCountResponse = string

export interface HistoryCountParams {
  /**
   * Observation Time, in ISO8601 UTC format with microsecond precision. This
   * timestamp applies to all observations within the set.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export declare namespace History {
  export {
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryCountParams as HistoryCountParams
  };
}
