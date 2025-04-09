// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as StatevectorAPI from './statevector';

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
   */
  list(options?: Core.RequestOptions): Core.APIPromise<CurrentListResponse> {
    return this._client.get('/udl/statevector/current', options);
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
   */
  tuple(query: CurrentTupleParams, options?: Core.RequestOptions): Core.APIPromise<CurrentTupleResponse> {
    return this._client.get('/udl/statevector/current/tuple', { query, ...options });
  }
}

export type CurrentListResponse = Array<StatevectorAPI.StateVectorAbridged>;

export type CurrentTupleResponse = Array<StatevectorAPI.StateVectorFull>;

export interface CurrentTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

export declare namespace Current {
  export {
    type CurrentListResponse as CurrentListResponse,
    type CurrentTupleResponse as CurrentTupleResponse,
    type CurrentTupleParams as CurrentTupleParams,
  };
}
