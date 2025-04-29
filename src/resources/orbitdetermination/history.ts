// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrbitdeterminationHistoryAPI from '../udl/orbitdetermination/history';
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
    return this._client.get('/udl/orbitdetermination/history', { query, ...options });
  }

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation, then write that data to the
   * Secure Content Store. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  aodr(query: HistoryAodrParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/orbitdetermination/history/aodr', {
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
    return this._client.get('/udl/orbitdetermination/history/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type HistoryListResponse = Array<OrbitdeterminationHistoryAPI.OrbitdeterminationFull>;

export type HistoryCountResponse = string;

export interface HistoryListParams {
  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  firstResult?: number;

  /**
   * (One or more of fields 'idOnOrbit, startTime' are required.) Unique identifier
   * of the target satellite on-orbit object. This ID can be used to obtain
   * additional information on an OnOrbit object using the 'get by ID' operation
   * (e.g. /udl/onorbit/{id}). For example, the OnOrbit with idOnOrbit = 25544 would
   * be queried as /udl/onorbit/25544.
   */
  idOnOrbit?: string;

  maxResult?: number;

  /**
   * (One or more of fields 'idOnOrbit, startTime' are required.) Start time for OD
   * solution in ISO 8601 UTC datetime format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
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

  firstResult?: number;

  /**
   * (One or more of fields 'idOnOrbit, startTime' are required.) Unique identifier
   * of the target satellite on-orbit object. This ID can be used to obtain
   * additional information on an OnOrbit object using the 'get by ID' operation
   * (e.g. /udl/onorbit/{id}). For example, the OnOrbit with idOnOrbit = 25544 would
   * be queried as /udl/onorbit/25544.
   */
  idOnOrbit?: string;

  maxResult?: number;

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
   * (One or more of fields 'idOnOrbit, startTime' are required.) Start time for OD
   * solution in ISO 8601 UTC datetime format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime?: string;
}

export interface HistoryCountParams {
  firstResult?: number;

  /**
   * (One or more of fields 'idOnOrbit, startTime' are required.) Unique identifier
   * of the target satellite on-orbit object. This ID can be used to obtain
   * additional information on an OnOrbit object using the 'get by ID' operation
   * (e.g. /udl/onorbit/{id}). For example, the OnOrbit with idOnOrbit = 25544 would
   * be queried as /udl/onorbit/25544.
   */
  idOnOrbit?: string;

  maxResult?: number;

  /**
   * (One or more of fields 'idOnOrbit, startTime' are required.) Start time for OD
   * solution in ISO 8601 UTC datetime format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
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
