// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Port extends APIResource {
  /**
   * Service operation to take a single port record as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.port.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: PortCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/port', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single port record. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.port.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: PortUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/port/${pathID}`, {
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
   * for await (const portListResponse of client.port.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PortListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PortListResponsesOffsetPage, PortListResponse> {
    return this._client.getAPIList('/udl/port', OffsetPage<PortListResponse>, { query, ...options });
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
   * const response = await client.port.count();
   * ```
   */
  count(query: PortCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/port/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of port
   * records as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.port.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: PortCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/port/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single port record by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const port = await client.port.get('id');
   * ```
   */
  get(
    id: string,
    query: PortGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PortGetResponse> {
    return this._client.get(path`/udl/port/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.port.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<PortQueryhelpResponse> {
    return this._client.get('/udl/port/queryhelp', options);
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
   * const response = await client.port.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: PortTupleParams, options?: RequestOptions): APIPromise<PortTupleResponse> {
    return this._client.get('/udl/port/tuple', { query, ...options });
  }
}

export type PortListResponsesOffsetPage = OffsetPage<PortListResponse>;

/**
 * Properties and characteristics of a maritime port, which includes location, port
 * identifiers, and remarks.
 */
export interface PortListResponse {
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
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Average time for a vessel at this port in hours.
   */
  avgDuration?: number;

  /**
   * The country where this port is located.
   */
  countryCode?: string;

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
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * The size of the harbor for this port measured in square kilometers.
   */
  harborSize?: number;

  /**
   * The type of harbor for this port. The harbor type refers to how a port is
   * physically positioned.
   *
   * COASTAL BREAKWATER (CB)
   *
   * COASTAL NATURAL (CN)
   *
   * COASTAL TIDE GATE (CT)
   *
   * LAKE OR CANAL (LC)
   *
   * OPEN ROADSTEAD (OR)
   *
   * RIVER BASIN (RB)
   *
   * RIVER NATURAL (RN)
   *
   * RIVER TIDE GATE (RT)
   *
   * TYPHOON HARBOR (TH).
   */
  harborType?: string;

  /**
   * Unique identifier of the Site Entity associated with the Port record.
   */
  idSite?: string;

  /**
   * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * The five-character United Nations Code for Trade and Transport Locations
   * (UN/LOCODE) of this port. The first two letters of the code contains the ISO
   * 3166-1 alpha-2 country designation of the port country. The three remaining
   * characters identify a location within that country. Letters are preferred, but
   * if necessary digits 2 through 9 may be used, excluding "0" and "1" to avoid
   * confusion with the letters "O" and "I" respectively.
   */
  locode?: string;

  /**
   * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

  /**
   * Maximum allowed vessel draught. Draught is the principal dimensions of any
   * waterborne vessel defined as the distance between the ship’s keel and the
   * waterline of the vessel measured in meters.
   */
  maxDraught?: number;

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
   * Flag indicating whether a pilot is required at this port.
   */
  pilotReqd?: boolean;

  /**
   * The name of this port.
   */
  portName?: string;

  /**
   * The shelter afforded from wind, sea, and swell refers to the area where normal
   * port operations are conducted, usually the wharf area. Shelter afforded by the
   * anchorage area may be given for ports where cargo is handled by lighters. Values
   * given are EXCELLENT, FAIR, GOOD, POOR, or NONE.
   */
  shelter?: string;

  /**
   * The tide range of this port in meters.
   */
  tideRange?: number;
}

export type PortCountResponse = string;

/**
 * Properties and characteristics of a maritime port, which includes location, port
 * identifiers, and remarks.
 */
export interface PortGetResponse {
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
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Average time for a vessel at this port in hours.
   */
  avgDuration?: number;

  /**
   * The country where this port is located.
   */
  countryCode?: string;

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
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * The size of the harbor for this port measured in square kilometers.
   */
  harborSize?: number;

  /**
   * The type of harbor for this port. The harbor type refers to how a port is
   * physically positioned.
   *
   * COASTAL BREAKWATER (CB)
   *
   * COASTAL NATURAL (CN)
   *
   * COASTAL TIDE GATE (CT)
   *
   * LAKE OR CANAL (LC)
   *
   * OPEN ROADSTEAD (OR)
   *
   * RIVER BASIN (RB)
   *
   * RIVER NATURAL (RN)
   *
   * RIVER TIDE GATE (RT)
   *
   * TYPHOON HARBOR (TH).
   */
  harborType?: string;

  /**
   * Unique identifier of the Site Entity associated with the Port record.
   */
  idSite?: string;

  /**
   * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * The five-character United Nations Code for Trade and Transport Locations
   * (UN/LOCODE) of this port. The first two letters of the code contains the ISO
   * 3166-1 alpha-2 country designation of the port country. The three remaining
   * characters identify a location within that country. Letters are preferred, but
   * if necessary digits 2 through 9 may be used, excluding "0" and "1" to avoid
   * confusion with the letters "O" and "I" respectively.
   */
  locode?: string;

  /**
   * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

  /**
   * Maximum allowed vessel draught. Draught is the principal dimensions of any
   * waterborne vessel defined as the distance between the ship’s keel and the
   * waterline of the vessel measured in meters.
   */
  maxDraught?: number;

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
   * Flag indicating whether a pilot is required at this port.
   */
  pilotReqd?: boolean;

  /**
   * The name of this port.
   */
  portName?: string;

  /**
   * The shelter afforded from wind, sea, and swell refers to the area where normal
   * port operations are conducted, usually the wharf area. Shelter afforded by the
   * anchorage area may be given for ports where cargo is handled by lighters. Values
   * given are EXCELLENT, FAIR, GOOD, POOR, or NONE.
   */
  shelter?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The tide range of this port in meters.
   */
  tideRange?: number;

  /**
   * Time the row was updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

export interface PortQueryhelpResponse {
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

export type PortTupleResponse = Array<PortTupleResponse.PortTupleResponseItem>;

export namespace PortTupleResponse {
  /**
   * Properties and characteristics of a maritime port, which includes location, port
   * identifiers, and remarks.
   */
  export interface PortTupleResponseItem {
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
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Average time for a vessel at this port in hours.
     */
    avgDuration?: number;

    /**
     * The country where this port is located.
     */
    countryCode?: string;

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
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * The size of the harbor for this port measured in square kilometers.
     */
    harborSize?: number;

    /**
     * The type of harbor for this port. The harbor type refers to how a port is
     * physically positioned.
     *
     * COASTAL BREAKWATER (CB)
     *
     * COASTAL NATURAL (CN)
     *
     * COASTAL TIDE GATE (CT)
     *
     * LAKE OR CANAL (LC)
     *
     * OPEN ROADSTEAD (OR)
     *
     * RIVER BASIN (RB)
     *
     * RIVER NATURAL (RN)
     *
     * RIVER TIDE GATE (RT)
     *
     * TYPHOON HARBOR (TH).
     */
    harborType?: string;

    /**
     * Unique identifier of the Site Entity associated with the Port record.
     */
    idSite?: string;

    /**
     * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
     * south of equator).
     */
    lat?: number;

    /**
     * The five-character United Nations Code for Trade and Transport Locations
     * (UN/LOCODE) of this port. The first two letters of the code contains the ISO
     * 3166-1 alpha-2 country designation of the port country. The three remaining
     * characters identify a location within that country. Letters are preferred, but
     * if necessary digits 2 through 9 may be used, excluding "0" and "1" to avoid
     * confusion with the letters "O" and "I" respectively.
     */
    locode?: string;

    /**
     * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon?: number;

    /**
     * Maximum allowed vessel draught. Draught is the principal dimensions of any
     * waterborne vessel defined as the distance between the ship’s keel and the
     * waterline of the vessel measured in meters.
     */
    maxDraught?: number;

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
     * Flag indicating whether a pilot is required at this port.
     */
    pilotReqd?: boolean;

    /**
     * The name of this port.
     */
    portName?: string;

    /**
     * The shelter afforded from wind, sea, and swell refers to the area where normal
     * port operations are conducted, usually the wharf area. Shelter afforded by the
     * anchorage area may be given for ports where cargo is handled by lighters. Values
     * given are EXCELLENT, FAIR, GOOD, POOR, or NONE.
     */
    shelter?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * The tide range of this port in meters.
     */
    tideRange?: number;

    /**
     * Time the row was updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }
}

export interface PortCreateParams {
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
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Average time for a vessel at this port in hours.
   */
  avgDuration?: number;

  /**
   * The country where this port is located.
   */
  countryCode?: string;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * The size of the harbor for this port measured in square kilometers.
   */
  harborSize?: number;

  /**
   * The type of harbor for this port. The harbor type refers to how a port is
   * physically positioned.
   *
   * COASTAL BREAKWATER (CB)
   *
   * COASTAL NATURAL (CN)
   *
   * COASTAL TIDE GATE (CT)
   *
   * LAKE OR CANAL (LC)
   *
   * OPEN ROADSTEAD (OR)
   *
   * RIVER BASIN (RB)
   *
   * RIVER NATURAL (RN)
   *
   * RIVER TIDE GATE (RT)
   *
   * TYPHOON HARBOR (TH).
   */
  harborType?: string;

  /**
   * Unique identifier of the Site Entity associated with the Port record.
   */
  idSite?: string;

  /**
   * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * The five-character United Nations Code for Trade and Transport Locations
   * (UN/LOCODE) of this port. The first two letters of the code contains the ISO
   * 3166-1 alpha-2 country designation of the port country. The three remaining
   * characters identify a location within that country. Letters are preferred, but
   * if necessary digits 2 through 9 may be used, excluding "0" and "1" to avoid
   * confusion with the letters "O" and "I" respectively.
   */
  locode?: string;

  /**
   * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

  /**
   * Maximum allowed vessel draught. Draught is the principal dimensions of any
   * waterborne vessel defined as the distance between the ship’s keel and the
   * waterline of the vessel measured in meters.
   */
  maxDraught?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Flag indicating whether a pilot is required at this port.
   */
  pilotReqd?: boolean;

  /**
   * The name of this port.
   */
  portName?: string;

  /**
   * The shelter afforded from wind, sea, and swell refers to the area where normal
   * port operations are conducted, usually the wharf area. Shelter afforded by the
   * anchorage area may be given for ports where cargo is handled by lighters. Values
   * given are EXCELLENT, FAIR, GOOD, POOR, or NONE.
   */
  shelter?: string;

  /**
   * The tide range of this port in meters.
   */
  tideRange?: number;
}

export interface PortUpdateParams {
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
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  body_id?: string;

  /**
   * Average time for a vessel at this port in hours.
   */
  avgDuration?: number;

  /**
   * The country where this port is located.
   */
  countryCode?: string;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * The size of the harbor for this port measured in square kilometers.
   */
  harborSize?: number;

  /**
   * The type of harbor for this port. The harbor type refers to how a port is
   * physically positioned.
   *
   * COASTAL BREAKWATER (CB)
   *
   * COASTAL NATURAL (CN)
   *
   * COASTAL TIDE GATE (CT)
   *
   * LAKE OR CANAL (LC)
   *
   * OPEN ROADSTEAD (OR)
   *
   * RIVER BASIN (RB)
   *
   * RIVER NATURAL (RN)
   *
   * RIVER TIDE GATE (RT)
   *
   * TYPHOON HARBOR (TH).
   */
  harborType?: string;

  /**
   * Unique identifier of the Site Entity associated with the Port record.
   */
  idSite?: string;

  /**
   * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * The five-character United Nations Code for Trade and Transport Locations
   * (UN/LOCODE) of this port. The first two letters of the code contains the ISO
   * 3166-1 alpha-2 country designation of the port country. The three remaining
   * characters identify a location within that country. Letters are preferred, but
   * if necessary digits 2 through 9 may be used, excluding "0" and "1" to avoid
   * confusion with the letters "O" and "I" respectively.
   */
  locode?: string;

  /**
   * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

  /**
   * Maximum allowed vessel draught. Draught is the principal dimensions of any
   * waterborne vessel defined as the distance between the ship’s keel and the
   * waterline of the vessel measured in meters.
   */
  maxDraught?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Flag indicating whether a pilot is required at this port.
   */
  pilotReqd?: boolean;

  /**
   * The name of this port.
   */
  portName?: string;

  /**
   * The shelter afforded from wind, sea, and swell refers to the area where normal
   * port operations are conducted, usually the wharf area. Shelter afforded by the
   * anchorage area may be given for ports where cargo is handled by lighters. Values
   * given are EXCELLENT, FAIR, GOOD, POOR, or NONE.
   */
  shelter?: string;

  /**
   * The tide range of this port in meters.
   */
  tideRange?: number;
}

export interface PortListParams extends OffsetPageParams {}

export interface PortCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface PortCreateBulkParams {
  body: Array<PortCreateBulkParams.Body>;
}

export namespace PortCreateBulkParams {
  /**
   * Properties and characteristics of a maritime port, which includes location, port
   * identifiers, and remarks.
   */
  export interface Body {
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
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Average time for a vessel at this port in hours.
     */
    avgDuration?: number;

    /**
     * The country where this port is located.
     */
    countryCode?: string;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * The size of the harbor for this port measured in square kilometers.
     */
    harborSize?: number;

    /**
     * The type of harbor for this port. The harbor type refers to how a port is
     * physically positioned.
     *
     * COASTAL BREAKWATER (CB)
     *
     * COASTAL NATURAL (CN)
     *
     * COASTAL TIDE GATE (CT)
     *
     * LAKE OR CANAL (LC)
     *
     * OPEN ROADSTEAD (OR)
     *
     * RIVER BASIN (RB)
     *
     * RIVER NATURAL (RN)
     *
     * RIVER TIDE GATE (RT)
     *
     * TYPHOON HARBOR (TH).
     */
    harborType?: string;

    /**
     * Unique identifier of the Site Entity associated with the Port record.
     */
    idSite?: string;

    /**
     * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
     * south of equator).
     */
    lat?: number;

    /**
     * The five-character United Nations Code for Trade and Transport Locations
     * (UN/LOCODE) of this port. The first two letters of the code contains the ISO
     * 3166-1 alpha-2 country designation of the port country. The three remaining
     * characters identify a location within that country. Letters are preferred, but
     * if necessary digits 2 through 9 may be used, excluding "0" and "1" to avoid
     * confusion with the letters "O" and "I" respectively.
     */
    locode?: string;

    /**
     * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon?: number;

    /**
     * Maximum allowed vessel draught. Draught is the principal dimensions of any
     * waterborne vessel defined as the distance between the ship’s keel and the
     * waterline of the vessel measured in meters.
     */
    maxDraught?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Flag indicating whether a pilot is required at this port.
     */
    pilotReqd?: boolean;

    /**
     * The name of this port.
     */
    portName?: string;

    /**
     * The shelter afforded from wind, sea, and swell refers to the area where normal
     * port operations are conducted, usually the wharf area. Shelter afforded by the
     * anchorage area may be given for ports where cargo is handled by lighters. Values
     * given are EXCELLENT, FAIR, GOOD, POOR, or NONE.
     */
    shelter?: string;

    /**
     * The tide range of this port in meters.
     */
    tideRange?: number;
  }
}

export interface PortGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface PortTupleParams {
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

export declare namespace Port {
  export {
    type PortListResponse as PortListResponse,
    type PortCountResponse as PortCountResponse,
    type PortGetResponse as PortGetResponse,
    type PortQueryhelpResponse as PortQueryhelpResponse,
    type PortTupleResponse as PortTupleResponse,
    type PortListResponsesOffsetPage as PortListResponsesOffsetPage,
    type PortCreateParams as PortCreateParams,
    type PortUpdateParams as PortUpdateParams,
    type PortListParams as PortListParams,
    type PortCountParams as PortCountParams,
    type PortCreateBulkParams as PortCreateBulkParams,
    type PortGetParams as PortGetParams,
    type PortTupleParams as PortTupleParams,
  };
}
