// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EntitiesAPI from './entities';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Comm extends APIResource {
  /**
   * Service operation to take a single Comm as a POST body and ingest into the
   * database. A Comm is an on-orbit communications payload, including supporting
   * data such as transponders and channels, etc. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.comm.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'DSCS II C-7-COMM Payload',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: CommCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/comm', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Comm record by its unique ID passed as a path
   * parameter. A Comm is an on-orbit communications payload, including supporting
   * data such as transponders and channels, etc.
   *
   * @example
   * ```ts
   * const commFull = await client.comm.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: CommRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.CommFull> {
    return this._client.get(path`/udl/comm/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single Comm. A Comm is an on-orbit communications
   * payload, including supporting data such as transponders and channels, etc. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.comm.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'DSCS II C-7-COMM Payload',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: CommUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/comm/${pathID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const commAbridged of client.comm.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CommListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CommAbridgedsOffsetPage, CommAbridged> {
    return this._client.getAPIList('/udl/comm', OffsetPage<CommAbridged>, { query, ...options });
  }

  /**
   * Service operation to delete a Comm object specified by the passed ID path
   * parameter. A Comm is an on-orbit communications payload, including supporting
   * data such as transponders and channels, etc. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.comm.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/comm/${id}`, {
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
   *
   * @example
   * ```ts
   * const response = await client.comm.count();
   * ```
   */
  count(query: CommCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/comm/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.comm.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<CommQueryhelpResponse> {
    return this._client.get('/udl/comm/queryhelp', options);
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
   *
   * @example
   * ```ts
   * const commFulls = await client.comm.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: CommTupleParams, options?: RequestOptions): APIPromise<CommTupleResponse> {
    return this._client.get('/udl/comm/tuple', { query, ...options });
  }
}

export type CommAbridgedsOffsetPage = OffsetPage<CommAbridged>;

/**
 * Comm represents communications entities (e.g. on-orbit communications satellite
 * payloads) within the SSA environment.
 */
export interface CommAbridged {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Name of the Comm entity.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Time the row was created in the database, auto-populated by the system.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  /**
   * Description of the comm entity.
   */
  description?: string;

  /**
   * Unique identifier of the parent entity. idEntity is required for Put.
   */
  idEntity?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The originating source network on which this record was created, auto-populated
   * by the system.
   */
  origNetwork?: string;
}

export type CommCountResponse = string;

export interface CommQueryhelpResponse {
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

export type CommTupleResponse = Array<Shared.CommFull>;

export interface CommCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Name of the Comm entity.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Description of the comm entity.
   */
  description?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityIngest;

  /**
   * Unique identifier of the parent entity. idEntity is required for Put.
   */
  idEntity?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface CommRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface CommUpdateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Name of the Comm entity.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Description of the comm entity.
   */
  description?: string;

  /**
   * Unique identifier of the parent entity. idEntity is required for Put.
   */
  idEntity?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface CommListParams extends OffsetPageParams {}

export interface CommCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface CommTupleParams {
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

export declare namespace Comm {
  export {
    type CommAbridged as CommAbridged,
    type CommCountResponse as CommCountResponse,
    type CommQueryhelpResponse as CommQueryhelpResponse,
    type CommTupleResponse as CommTupleResponse,
    type CommAbridgedsOffsetPage as CommAbridgedsOffsetPage,
    type CommCreateParams as CommCreateParams,
    type CommRetrieveParams as CommRetrieveParams,
    type CommUpdateParams as CommUpdateParams,
    type CommListParams as CommListParams,
    type CommCountParams as CommCountParams,
    type CommTupleParams as CommTupleParams,
  };
}
