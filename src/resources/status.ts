// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Status extends APIResource {
  /**
   * Service operation to take a single Status as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.status.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idEntity: 'ENTITY-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: StatusCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/status', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single Status. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.status.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idEntity: 'ENTITY-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: StatusUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/status/${pathID}`, {
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
   * for await (const statusListResponse of client.status.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: StatusListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<StatusListResponsesOffsetPage, StatusListResponse> {
    return this._client.getAPIList('/udl/status', OffsetPage<StatusListResponse>, { query, ...options });
  }

  /**
   * Service operation to delete a Status object specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.status.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/status/${id}`, {
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
   * const response = await client.status.count();
   * ```
   */
  count(query: StatusCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/status/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Status record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const statusFull = await client.status.get('id');
   * ```
   */
  get(
    id: string,
    query: StatusGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.StatusFull> {
    return this._client.get(path`/udl/status/${id}`, { query, ...options });
  }

  /**
   * Service operation to get all statuses related to a particular entity.
   *
   * @example
   * ```ts
   * const statusFulls = await client.status.getByEntityID(
   *   'idEntity',
   * );
   * ```
   */
  getByEntityID(
    idEntity: string,
    query: StatusGetByEntityIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StatusGetByEntityIDResponse> {
    return this._client.get(path`/udl/status/byIdEntity/${idEntity}`, { query, ...options });
  }

  /**
   * Service operation to get all statuses related to a particular entity type.
   *
   * @example
   * ```ts
   * const statusFulls = await client.status.getByEntityType(
   *   'entityType',
   * );
   * ```
   */
  getByEntityType(
    entityType: string,
    query: StatusGetByEntityTypeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StatusGetByEntityTypeResponse> {
    return this._client.get(path`/udl/status/byEntityType/${entityType}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.status.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<StatusQueryhelpResponse> {
    return this._client.get('/udl/status/queryhelp', options);
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
   * const statusFulls = await client.status.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: StatusTupleParams, options?: RequestOptions): APIPromise<StatusTupleResponse> {
    return this._client.get('/udl/status/tuple', { query, ...options });
  }
}

export type StatusListResponsesOffsetPage = OffsetPage<StatusListResponse>;

/**
 * Status for a particular Entity. An entity may have multiple status records
 * collected by various sources.
 */
export interface StatusListResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Unique identifier of the parent entity.
   */
  idEntity: string;

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
   * The declassification date of this data, in ISO 8601 UTC format.
   */
  declassificationDate?: string;

  /**
   * Declassification string of this data.
   */
  declassificationString?: string;

  /**
   * The sources or SCG references from which the classification of this data is
   * derived.
   */
  derivedFrom?: string;

  /**
   * Comments describing the status creation and or updates to an entity.
   */
  notes?: string;

  /**
   * Operation capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
   */
  opsCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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

  /**
   * Overall state of the entity, if applicable (e.g. UNKNOWN, DEAD, ACTIVE, RF
   * ACTIVE, STANDBY).
   */
  state?: 'UNKNOWN' | 'DEAD' | 'ACTIVE' | 'RF ACTIVE' | 'STANDBY';

  subStatusCollection?: Array<StatusListResponse.SubStatusCollection>;

  /**
   * System capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
   */
  sysCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';
}

export namespace StatusListResponse {
  /**
   * Additional sub-system or capability status for the parent entity.
   */
  export interface SubStatusCollection {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * Descriptions and/or comments associated with the sub-status.
     */
    notes: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Status of the sub-system/capability, e.g. FMC, NMC, PMC, UNK.
     */
    status: 'FMC' | 'NMC' | 'PMC' | 'UNK';

    /**
     * Id of the parent status.
     */
    statusId: string;

    /**
     * Parent entity's sub-system or capability status: mwCap, mdCap, ssCap, etc.
     */
    type: 'mwCap' | 'ssCap' | 'mdCap';

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
}

export type StatusCountResponse = string;

export type StatusGetByEntityIDResponse = Array<Shared.StatusFull>;

export type StatusGetByEntityTypeResponse = Array<Shared.StatusFull>;

export interface StatusQueryhelpResponse {
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

export type StatusTupleResponse = Array<Shared.StatusFull>;

export interface StatusCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Unique identifier of the parent entity.
   */
  idEntity: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The declassification date of this data, in ISO 8601 UTC format.
   */
  declassificationDate?: string;

  /**
   * Declassification string of this data.
   */
  declassificationString?: string;

  /**
   * The sources or SCG references from which the classification of this data is
   * derived.
   */
  derivedFrom?: string;

  /**
   * Comments describing the status creation and or updates to an entity.
   */
  notes?: string;

  /**
   * Operation capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
   */
  opsCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Overall state of the entity, if applicable (e.g. UNKNOWN, DEAD, ACTIVE, RF
   * ACTIVE, STANDBY).
   */
  state?: 'UNKNOWN' | 'DEAD' | 'ACTIVE' | 'RF ACTIVE' | 'STANDBY';

  subStatusCollection?: Array<Shared.SubStatusIngest>;

  /**
   * System capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
   */
  sysCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';
}

export interface StatusUpdateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Unique identifier of the parent entity.
   */
  idEntity: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * The declassification date of this data, in ISO 8601 UTC format.
   */
  declassificationDate?: string;

  /**
   * Declassification string of this data.
   */
  declassificationString?: string;

  /**
   * The sources or SCG references from which the classification of this data is
   * derived.
   */
  derivedFrom?: string;

  /**
   * Comments describing the status creation and or updates to an entity.
   */
  notes?: string;

  /**
   * Operation capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
   */
  opsCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Overall state of the entity, if applicable (e.g. UNKNOWN, DEAD, ACTIVE, RF
   * ACTIVE, STANDBY).
   */
  state?: 'UNKNOWN' | 'DEAD' | 'ACTIVE' | 'RF ACTIVE' | 'STANDBY';

  subStatusCollection?: Array<Shared.SubStatusIngest>;

  /**
   * System capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
   */
  sysCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';
}

export interface StatusListParams extends OffsetPageParams {}

export interface StatusCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface StatusGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface StatusGetByEntityIDParams {
  firstResult?: number;

  maxResults?: number;
}

export interface StatusGetByEntityTypeParams {
  firstResult?: number;

  maxResults?: number;
}

export interface StatusTupleParams {
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

export declare namespace Status {
  export {
    type StatusListResponse as StatusListResponse,
    type StatusCountResponse as StatusCountResponse,
    type StatusGetByEntityIDResponse as StatusGetByEntityIDResponse,
    type StatusGetByEntityTypeResponse as StatusGetByEntityTypeResponse,
    type StatusQueryhelpResponse as StatusQueryhelpResponse,
    type StatusTupleResponse as StatusTupleResponse,
    type StatusListResponsesOffsetPage as StatusListResponsesOffsetPage,
    type StatusCreateParams as StatusCreateParams,
    type StatusUpdateParams as StatusUpdateParams,
    type StatusListParams as StatusListParams,
    type StatusCountParams as StatusCountParams,
    type StatusGetParams as StatusGetParams,
    type StatusGetByEntityIDParams as StatusGetByEntityIDParams,
    type StatusGetByEntityTypeParams as StatusGetByEntityTypeParams,
    type StatusTupleParams as StatusTupleParams,
  };
}
