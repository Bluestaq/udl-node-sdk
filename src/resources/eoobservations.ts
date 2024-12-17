// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as HistoryAPI from './eo-observations/history';

export class Eoobservations extends APIResource {
  /**
   * Service operation to get a single EO observation by its unique ID passed as a
   * path parameter.
   */
  retrieve(
    params: EoobservationRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HistoryAPI.EoObservationFull> {
    const { path_id, body_id } = params;
    return this._client.get(`/udl/eoobservation/${path_id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/eoobservation/queryhelp', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to dynamically query data and only return specified
   * columns/fields. Requested columns are specified by the 'columns' query parameter
   * and should be a comma separated list of valid fields for the specified data
   * type. classificationMarking is always returned. See the queryhelp operation
   * (/udl/<datatype>/queryhelp) for more details on valid/required query parameter
   * information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5
   * hours would return the satNo and period of elsets with an epoch greater than 5
   * hours ago.
   */
  tuple(
    params: EoobservationTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EoobservationTupleResponse> {
    const { columns, obTime } = params;
    return this._client.get('/udl/eoobservation/tuple', options);
  }
}

export type EoobservationTupleResponse = Array<HistoryAPI.EoObservationFull>;

export interface EoobservationRetrieveParams {
  /**
   * Path param:
   */
  path_id: string;

  /**
   * Body param: The ID of the observation to retrieve.
   */
  body_id: string;
}

export interface EoobservationTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the �queryhelp� operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;
}

export declare namespace Eoobservations {
  export {
    type EoobservationTupleResponse as EoobservationTupleResponse,
    type EoobservationRetrieveParams as EoobservationRetrieveParams,
    type EoobservationTupleParams as EoobservationTupleParams,
  };
}
