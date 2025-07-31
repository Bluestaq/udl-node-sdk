// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as Shared from 'bluestaq@unified-data-library/resources/shared';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';

export class AttitudeData extends APIResource {
  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryHelp(options?: RequestOptions): APIPromise<AttitudeDataQueryHelpResponse> {
    return this._client.get('/udl/attitudedata/queryhelp', options);
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
  tuple(query: AttitudeDataTupleParams, options?: RequestOptions): APIPromise<AttitudeDataTupleResponse> {
    return this._client.get('/udl/attitudedata/tuple', { query, ...options });
  }
}

export interface AttitudeDataQueryHelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<Shared.ParamDescriptor>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export type AttitudeDataTupleResponse = Array<Shared.AttitudedataFull>;

export interface AttitudeDataTupleParams {
  /**
   * Unique identifier of the parent AttitudeSet associated with this record. (uuid)
   */
  asId: string;

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

export declare namespace AttitudeData {
  export {
    type AttitudeDataQueryHelpResponse as AttitudeDataQueryHelpResponse,
    type AttitudeDataTupleResponse as AttitudeDataTupleResponse,
    type AttitudeDataTupleParams as AttitudeDataTupleParams,
  };
}
