// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ElsetsAPI from './elsets';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Current extends APIResource {
  /**
   * Service operation to dynamically query/filter current elsets within the system
   * by a variety of query parameters not specified in this API documentation. A
   * current elset is the currently active, latest elset for an on-orbit object.
   * Current elsets are tracked by source and a source should be provided as a query
   * parameter to this service operation to view the 'current' catalog for a
   * particular provider. If source is not provided, it will be defaulted to '18th
   * SPCS'. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more
   * details on additional query parameter information.
   */
  list(
    query: CurrentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CurrentListResponse> {
    return this._client.get('/udl/elset/current', { query, ...options });
  }

  /**
   * Service operation to dynamically query/filter current elsets within the system
   * by a variety of query parameters not specified in this API documentation. A
   * current elset is the currently active, latest elset for an on-orbit object.
   * Current elsets are tracked by source and a source should be provided as a query
   * parameter to this service operation to view the 'current' catalog for a
   * particular provider. If source is not provided, it will be defaulted to '18th
   * SPCS'. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more
   * details on additional query parameter information.
   */
  tuple(query: CurrentTupleParams, options?: RequestOptions): APIPromise<CurrentTupleResponse> {
    return this._client.get('/udl/elset/current/tuple', { query, ...options });
  }
}

export type CurrentListResponse = Array<ElsetsAPI.ElsetAbridged>;

export type CurrentTupleResponse = Array<ElsetsAPI.Elset>;

export interface CurrentListParams {
  firstResult?: number;

  maxResult?: number;
}

export interface CurrentTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  firstResult?: number;

  maxResult?: number;
}

export declare namespace Current {
  export {
    type CurrentListResponse as CurrentListResponse,
    type CurrentTupleResponse as CurrentTupleResponse,
    type CurrentListParams as CurrentListParams,
    type CurrentTupleParams as CurrentTupleParams,
  };
}
