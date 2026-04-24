// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * These services provide operations for querying and manipulation of Signal time and frequency difference of arrival (TDOA/FDOA) information obtained by using passive RF based sensor phenomenologies and sensor triangulation. The J2000 coordinate frame is the preferred frame for all observations, but in some cases observations may be in another frame depending on the provider.
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
    return this._client.get('/udl/diffofarrival/history/count', { query, ...options, headers: buildHeaders([{Accept: 'text/plain'}, options?.headers]) });
  }
}

export type HistoryCountResponse = string

export interface HistoryCountParams {
  /**
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export declare namespace History {
  export {
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryCountParams as HistoryCountParams
  };
}
