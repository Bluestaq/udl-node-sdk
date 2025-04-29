// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class History extends APIResource {
  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: HistoryCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/onorbitthrusterstatus/history/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type HistoryCountResponse = string;

export interface HistoryCountParams {
  firstResult?: number;

  /**
   * (One or more of fields 'idOnorbitThruster, statusTime' are required.) ID of the
   * associated OnorbitThruster record. This ID can be used to obtain additional
   * information on an onorbit thruster object using the 'get by ID' operation (e.g.
   * /udl/onorbitthruster/{id}). For example, the OnorbitThruster object with
   * idOnorbitThruster = abc would be queried as /udl/onorbitthruster/abc.
   */
  idOnorbitThruster?: string;

  maxResults?: number;

  /**
   * (One or more of fields 'idOnorbitThruster, statusTime' are required.) Datetime
   * of the thruster status observation in ISO 8601 UTC datetime format with
   * millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  statusTime?: string;
}

export declare namespace History {
  export { type HistoryCountResponse as HistoryCountResponse, type HistoryCountParams as HistoryCountParams };
}
