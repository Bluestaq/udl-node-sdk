// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as StateVectorAPI from './state-vector';
import { StateVectorAbridgedsOffsetPage } from './state-vector';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Current extends APIResource {
  /**
   * Service operation to dynamically query/filter current StateVector data within
   * the system by a variety of query parameters not specified in this API
   * documentation. A current StateVector is the currently active, latest StateVector
   * for an on-orbit object. Current state vectors are tracked by source and a source
   * should be provided as a query parameter to this service operation to view the
   * 'current' catalog for a particular provider. Default current state vector
   * sources may vary by UDL environment. Please contact the UDL help desk for more
   * information, or explicitly specify the desired source. See the queryhelp
   * operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required
   * query parameter information.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const stateVectorAbridged of client.stateVector.current.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CurrentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<StateVectorAbridgedsOffsetPage, StateVectorAPI.StateVectorAbridged> {
    return this._client.getAPIList(
      '/udl/statevector/current',
      OffsetPage<StateVectorAPI.StateVectorAbridged>,
      { query, ...options },
    );
  }

  /**
   * Service operation to dynamically query/filter current StateVector data within
   * the system by a variety of query parameters not specified in this API
   * documentation. A current StateVector is the currently active, latest StateVector
   * for an on-orbit object. Current state vectors are tracked by source and a source
   * should be provided as a query parameter to this service operation to view the
   * 'current' catalog for a particular provider. Default current state vector
   * sources may vary by UDL environment. Please contact the UDL help desk for more
   * information, or explicitly specify the desired source. See the queryhelp
   * operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required
   * query parameter information.
   *
   * @example
   * ```ts
   * const stateVectorFulls =
   *   await client.stateVector.current.tuple({
   *     columns: 'columns',
   *   });
   * ```
   */
  tuple(query: CurrentTupleParams, options?: RequestOptions): APIPromise<CurrentTupleResponse> {
    return this._client.get('/udl/statevector/current/tuple', { query, ...options });
  }
}

export type CurrentTupleResponse = Array<Shared.StateVectorFull>;

export interface CurrentListParams extends OffsetPageParams {}

export interface CurrentTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  firstResult?: number;

  maxResults?: number;
}

export declare namespace Current {
  export {
    type CurrentTupleResponse as CurrentTupleResponse,
    type CurrentListParams as CurrentListParams,
    type CurrentTupleParams as CurrentTupleParams,
  };
}

export { type StateVectorAbridgedsOffsetPage };
