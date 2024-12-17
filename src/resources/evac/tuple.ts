// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Tuple extends APIResource {
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
  list(params: TupleListParams, options?: Core.RequestOptions): Core.APIPromise<TupleListResponse> {
    const { columns, reqTime } = params;
    return this._client.get('/udl/evac/tuple', options);
  }
}

export type TupleListResponse = Array<Shared.EvacFull>;

export interface TupleListParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the �queryhelp� operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The request time, in ISO 8601 UTC format. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reqTime: string;
}

export declare namespace Tuple {
  export { type TupleListResponse as TupleListResponse, type TupleListParams as TupleListParams };
}
