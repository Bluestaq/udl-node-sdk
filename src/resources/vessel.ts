// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EntitiesAPI from './entities';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Vessel extends APIResource {
  /**
   * Service operation to take a single vessel record as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.vessel.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: VesselCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/vessel', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single vessel record. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.vessel.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: VesselUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/vessel/${pathID}`, {
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
   * for await (const vesselListResponse of client.vessel.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: VesselListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VesselListResponsesOffsetPage, VesselListResponse> {
    return this._client.getAPIList('/udl/vessel', OffsetPage<VesselListResponse>, { query, ...options });
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
   * const response = await client.vessel.count();
   * ```
   */
  count(query: VesselCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/vessel/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * vessel records as a POST body and ingest into the database. This operation is
   * not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.vessel.createBulk({
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
  createBulk(params: VesselCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/vessel/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single vessel record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const vessel = await client.vessel.get('id');
   * ```
   */
  get(
    id: string,
    query: VesselGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VesselGetResponse> {
    return this._client.get(path`/udl/vessel/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.vessel.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<VesselQueryhelpResponse> {
    return this._client.get('/udl/vessel/queryhelp', options);
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
   * const response = await client.vessel.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: VesselTupleParams, options?: RequestOptions): APIPromise<VesselTupleResponse> {
    return this._client.get('/udl/vessel/tuple', { query, ...options });
  }
}

export type VesselListResponsesOffsetPage = OffsetPage<VesselListResponse>;

/**
 * This service provides operations for manipulation and querying of maritime
 * Vessel data. Vessel contains the static data of the specific vessel: mmsi,
 * cruise speed, max speed, etc.
 */
export interface VesselListResponse {
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
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The original source Id for this vessel.
   */
  altVesselId?: string;

  /**
   * A uniquely designated identifier for the vessel's transmitter station. All radio
   * transmissions must be individually identified by the call sign. Merchant and
   * naval vessels are assigned call signs by their national licensing authorities.
   */
  callsign?: string;

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
   * The date this vessel was first seen.
   */
  firstSeen?: string;

  /**
   * The vessel hull number designation of this maritime vessel. The hull number is a
   * 1-6 character alphanumeric entry assigned to a ship and painted on the hull.
   */
  hullNum?: string;

  /**
   * Unique identifier of the parent entity. idEntity is required for Put.
   */
  idEntity?: string;

  /**
   * The UDL ID of the organization that owns the vessel.
   */
  idOrganization?: string;

  /**
   * The International Maritime Organization Number of the vessel. IMON is a
   * seven-digit number that uniquely identifies the vessel.
   */
  imon?: number;

  /**
   * The overall length of the vessel, in meters. A value of 511 indicates a vessel
   * length of 511 meters or greater.
   */
  length?: number;

  /**
   * The maximum static draught, in meters, of the vessel defined as the distance
   * between the ship’s keel and the waterline of the vessel.
   */
  maxDraught?: number;

  /**
   * The maximum possible speed of this vessel in meters per second.
   */
  maxSpeed?: number;

  /**
   * The Maritime Mobile Service Identity of the vessel. MMSI is a nine-digit number
   * that identifies the transmitter station of the vessel.
   */
  mmsi?: string;

  /**
   * The number of blades per shaft for this vessel.
   */
  numBlades?: number;

  /**
   * The number of shafts on this vessel.
   */
  numShafts?: number;

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
   * The type of propulsion employed by this vessel.
   */
  propType?: string;

  /**
   * The Ship Control Number (SCONUM) is a naval vessel identification number
   * (alphanumeric code) assigned by the Office of Naval Intelligence. SCONUM is
   * sometimes referred to as NOIC ID. SCONUMs are typically of the form A#####,
   * where A is an alpha character and # is numerical.
   */
  sconum?: string;

  /**
   * The status of this vessel.
   */
  status?: string;

  /**
   * The stern type code (Counter, Cruiser) associated with this vessel.
   */
  sternType?: string;

  /**
   * The shipbuilder who built this vessel.
   */
  vesselBuilder?: string;

  /**
   * The common name for a group of ships with similar design, usually named for the
   * first vessel of the class.
   */
  vesselClass?: string;

  /**
   * Further description or explanation of the vessel or type.
   */
  vesselDescription?: string;

  /**
   * The flag of the subject vessel.
   */
  vesselFlag?: string;

  /**
   * The name of this vessel. Vessel names that exceed the AIS 20 character are
   * shortened (not truncated) to 15 character-spaces, followed by an underscore and
   * the last 4 characters-spaces of the vessel full name.
   */
  vesselName?: string;

  /**
   * The reported ship type (e.g. Passenger, Tanker, Cargo, Other, etc.).
   */
  vesselType?: string;

  /**
   * The weight in tons, of this vessel.
   */
  vslWt?: number;

  /**
   * The breadth of the vessel, in meters. A value of 63 indicates a vessel breadth
   * of 63 meters or greater.
   */
  width?: number;

  /**
   * Year the vessel went into service.
   */
  yearBuilt?: string;
}

export type VesselCountResponse = string;

/**
 * This service provides operations for manipulation and querying of maritime
 * Vessel data. Vessel contains the static data of the specific vessel: mmsi,
 * cruise speed, max speed, etc.
 */
export interface VesselGetResponse {
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
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The original source Id for this vessel.
   */
  altVesselId?: string;

  /**
   * A uniquely designated identifier for the vessel's transmitter station. All radio
   * transmissions must be individually identified by the call sign. Merchant and
   * naval vessels are assigned call signs by their national licensing authorities.
   */
  callsign?: string;

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
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityFull;

  /**
   * The date this vessel was first seen.
   */
  firstSeen?: string;

  /**
   * The vessel hull number designation of this maritime vessel. The hull number is a
   * 1-6 character alphanumeric entry assigned to a ship and painted on the hull.
   */
  hullNum?: string;

  /**
   * Unique identifier of the parent entity. idEntity is required for Put.
   */
  idEntity?: string;

  /**
   * The UDL ID of the organization that owns the vessel.
   */
  idOrganization?: string;

  /**
   * The International Maritime Organization Number of the vessel. IMON is a
   * seven-digit number that uniquely identifies the vessel.
   */
  imon?: number;

  /**
   * The overall length of the vessel, in meters. A value of 511 indicates a vessel
   * length of 511 meters or greater.
   */
  length?: number;

  /**
   * The maximum static draught, in meters, of the vessel defined as the distance
   * between the ship’s keel and the waterline of the vessel.
   */
  maxDraught?: number;

  /**
   * The maximum possible speed of this vessel in meters per second.
   */
  maxSpeed?: number;

  /**
   * The Maritime Mobile Service Identity of the vessel. MMSI is a nine-digit number
   * that identifies the transmitter station of the vessel.
   */
  mmsi?: string;

  /**
   * The number of blades per shaft for this vessel.
   */
  numBlades?: number;

  /**
   * The number of shafts on this vessel.
   */
  numShafts?: number;

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
   * The type of propulsion employed by this vessel.
   */
  propType?: string;

  /**
   * The Ship Control Number (SCONUM) is a naval vessel identification number
   * (alphanumeric code) assigned by the Office of Naval Intelligence. SCONUM is
   * sometimes referred to as NOIC ID. SCONUMs are typically of the form A#####,
   * where A is an alpha character and # is numerical.
   */
  sconum?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The status of this vessel.
   */
  status?: string;

  /**
   * The stern type code (Counter, Cruiser) associated with this vessel.
   */
  sternType?: string;

  /**
   * Time the row was updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;

  /**
   * The shipbuilder who built this vessel.
   */
  vesselBuilder?: string;

  /**
   * The common name for a group of ships with similar design, usually named for the
   * first vessel of the class.
   */
  vesselClass?: string;

  /**
   * Further description or explanation of the vessel or type.
   */
  vesselDescription?: string;

  /**
   * The flag of the subject vessel.
   */
  vesselFlag?: string;

  /**
   * The name of this vessel. Vessel names that exceed the AIS 20 character are
   * shortened (not truncated) to 15 character-spaces, followed by an underscore and
   * the last 4 characters-spaces of the vessel full name.
   */
  vesselName?: string;

  /**
   * The reported ship type (e.g. Passenger, Tanker, Cargo, Other, etc.).
   */
  vesselType?: string;

  /**
   * The weight in tons, of this vessel.
   */
  vslWt?: number;

  /**
   * The breadth of the vessel, in meters. A value of 63 indicates a vessel breadth
   * of 63 meters or greater.
   */
  width?: number;

  /**
   * Year the vessel went into service.
   */
  yearBuilt?: string;
}

export interface VesselQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<VesselQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace VesselQueryhelpResponse {
  export interface Parameter {
    classificationMarking?: string;

    derived?: boolean;

    description?: string;

    elemMatch?: boolean;

    format?: string;

    histQuerySupported?: boolean;

    histTupleSupported?: boolean;

    name?: string;

    required?: boolean;

    restQuerySupported?: boolean;

    restTupleSupported?: boolean;

    type?: string;

    unitOfMeasure?: string;

    utcDate?: boolean;
  }
}

export type VesselTupleResponse = Array<VesselTupleResponse.VesselTupleResponseItem>;

export namespace VesselTupleResponse {
  /**
   * This service provides operations for manipulation and querying of maritime
   * Vessel data. Vessel contains the static data of the specific vessel: mmsi,
   * cruise speed, max speed, etc.
   */
  export interface VesselTupleResponseItem {
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
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The original source Id for this vessel.
     */
    altVesselId?: string;

    /**
     * A uniquely designated identifier for the vessel's transmitter station. All radio
     * transmissions must be individually identified by the call sign. Merchant and
     * naval vessels are assigned call signs by their national licensing authorities.
     */
    callsign?: string;

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
     * An entity is a generic representation of any object within a space/SSA system
     * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
     * entity can have an operating unit, a location (if terrestrial), and statuses.
     */
    entity?: EntitiesAPI.EntityFull;

    /**
     * The date this vessel was first seen.
     */
    firstSeen?: string;

    /**
     * The vessel hull number designation of this maritime vessel. The hull number is a
     * 1-6 character alphanumeric entry assigned to a ship and painted on the hull.
     */
    hullNum?: string;

    /**
     * Unique identifier of the parent entity. idEntity is required for Put.
     */
    idEntity?: string;

    /**
     * The UDL ID of the organization that owns the vessel.
     */
    idOrganization?: string;

    /**
     * The International Maritime Organization Number of the vessel. IMON is a
     * seven-digit number that uniquely identifies the vessel.
     */
    imon?: number;

    /**
     * The overall length of the vessel, in meters. A value of 511 indicates a vessel
     * length of 511 meters or greater.
     */
    length?: number;

    /**
     * The maximum static draught, in meters, of the vessel defined as the distance
     * between the ship’s keel and the waterline of the vessel.
     */
    maxDraught?: number;

    /**
     * The maximum possible speed of this vessel in meters per second.
     */
    maxSpeed?: number;

    /**
     * The Maritime Mobile Service Identity of the vessel. MMSI is a nine-digit number
     * that identifies the transmitter station of the vessel.
     */
    mmsi?: string;

    /**
     * The number of blades per shaft for this vessel.
     */
    numBlades?: number;

    /**
     * The number of shafts on this vessel.
     */
    numShafts?: number;

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
     * The type of propulsion employed by this vessel.
     */
    propType?: string;

    /**
     * The Ship Control Number (SCONUM) is a naval vessel identification number
     * (alphanumeric code) assigned by the Office of Naval Intelligence. SCONUM is
     * sometimes referred to as NOIC ID. SCONUMs are typically of the form A#####,
     * where A is an alpha character and # is numerical.
     */
    sconum?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * The status of this vessel.
     */
    status?: string;

    /**
     * The stern type code (Counter, Cruiser) associated with this vessel.
     */
    sternType?: string;

    /**
     * Time the row was updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;

    /**
     * The shipbuilder who built this vessel.
     */
    vesselBuilder?: string;

    /**
     * The common name for a group of ships with similar design, usually named for the
     * first vessel of the class.
     */
    vesselClass?: string;

    /**
     * Further description or explanation of the vessel or type.
     */
    vesselDescription?: string;

    /**
     * The flag of the subject vessel.
     */
    vesselFlag?: string;

    /**
     * The name of this vessel. Vessel names that exceed the AIS 20 character are
     * shortened (not truncated) to 15 character-spaces, followed by an underscore and
     * the last 4 characters-spaces of the vessel full name.
     */
    vesselName?: string;

    /**
     * The reported ship type (e.g. Passenger, Tanker, Cargo, Other, etc.).
     */
    vesselType?: string;

    /**
     * The weight in tons, of this vessel.
     */
    vslWt?: number;

    /**
     * The breadth of the vessel, in meters. A value of 63 indicates a vessel breadth
     * of 63 meters or greater.
     */
    width?: number;

    /**
     * Year the vessel went into service.
     */
    yearBuilt?: string;
  }
}

export interface VesselCreateParams {
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
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The original source Id for this vessel.
   */
  altVesselId?: string;

  /**
   * A uniquely designated identifier for the vessel's transmitter station. All radio
   * transmissions must be individually identified by the call sign. Merchant and
   * naval vessels are assigned call signs by their national licensing authorities.
   */
  callsign?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityIngest;

  /**
   * The date this vessel was first seen.
   */
  firstSeen?: string;

  /**
   * The vessel hull number designation of this maritime vessel. The hull number is a
   * 1-6 character alphanumeric entry assigned to a ship and painted on the hull.
   */
  hullNum?: string;

  /**
   * Unique identifier of the parent entity. idEntity is required for Put.
   */
  idEntity?: string;

  /**
   * The UDL ID of the organization that owns the vessel.
   */
  idOrganization?: string;

  /**
   * The International Maritime Organization Number of the vessel. IMON is a
   * seven-digit number that uniquely identifies the vessel.
   */
  imon?: number;

  /**
   * The overall length of the vessel, in meters. A value of 511 indicates a vessel
   * length of 511 meters or greater.
   */
  length?: number;

  /**
   * The maximum static draught, in meters, of the vessel defined as the distance
   * between the ship’s keel and the waterline of the vessel.
   */
  maxDraught?: number;

  /**
   * The maximum possible speed of this vessel in meters per second.
   */
  maxSpeed?: number;

  /**
   * The Maritime Mobile Service Identity of the vessel. MMSI is a nine-digit number
   * that identifies the transmitter station of the vessel.
   */
  mmsi?: string;

  /**
   * The number of blades per shaft for this vessel.
   */
  numBlades?: number;

  /**
   * The number of shafts on this vessel.
   */
  numShafts?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The type of propulsion employed by this vessel.
   */
  propType?: string;

  /**
   * The Ship Control Number (SCONUM) is a naval vessel identification number
   * (alphanumeric code) assigned by the Office of Naval Intelligence. SCONUM is
   * sometimes referred to as NOIC ID. SCONUMs are typically of the form A#####,
   * where A is an alpha character and # is numerical.
   */
  sconum?: string;

  /**
   * The status of this vessel.
   */
  status?: string;

  /**
   * The stern type code (Counter, Cruiser) associated with this vessel.
   */
  sternType?: string;

  /**
   * The shipbuilder who built this vessel.
   */
  vesselBuilder?: string;

  /**
   * The common name for a group of ships with similar design, usually named for the
   * first vessel of the class.
   */
  vesselClass?: string;

  /**
   * Further description or explanation of the vessel or type.
   */
  vesselDescription?: string;

  /**
   * The flag of the subject vessel.
   */
  vesselFlag?: string;

  /**
   * The name of this vessel. Vessel names that exceed the AIS 20 character are
   * shortened (not truncated) to 15 character-spaces, followed by an underscore and
   * the last 4 characters-spaces of the vessel full name.
   */
  vesselName?: string;

  /**
   * The reported ship type (e.g. Passenger, Tanker, Cargo, Other, etc.).
   */
  vesselType?: string;

  /**
   * The weight in tons, of this vessel.
   */
  vslWt?: number;

  /**
   * The breadth of the vessel, in meters. A value of 63 indicates a vessel breadth
   * of 63 meters or greater.
   */
  width?: number;

  /**
   * Year the vessel went into service.
   */
  yearBuilt?: string;
}

export interface VesselUpdateParams {
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
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * The original source Id for this vessel.
   */
  altVesselId?: string;

  /**
   * A uniquely designated identifier for the vessel's transmitter station. All radio
   * transmissions must be individually identified by the call sign. Merchant and
   * naval vessels are assigned call signs by their national licensing authorities.
   */
  callsign?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityIngest;

  /**
   * The date this vessel was first seen.
   */
  firstSeen?: string;

  /**
   * The vessel hull number designation of this maritime vessel. The hull number is a
   * 1-6 character alphanumeric entry assigned to a ship and painted on the hull.
   */
  hullNum?: string;

  /**
   * Unique identifier of the parent entity. idEntity is required for Put.
   */
  idEntity?: string;

  /**
   * The UDL ID of the organization that owns the vessel.
   */
  idOrganization?: string;

  /**
   * The International Maritime Organization Number of the vessel. IMON is a
   * seven-digit number that uniquely identifies the vessel.
   */
  imon?: number;

  /**
   * The overall length of the vessel, in meters. A value of 511 indicates a vessel
   * length of 511 meters or greater.
   */
  length?: number;

  /**
   * The maximum static draught, in meters, of the vessel defined as the distance
   * between the ship’s keel and the waterline of the vessel.
   */
  maxDraught?: number;

  /**
   * The maximum possible speed of this vessel in meters per second.
   */
  maxSpeed?: number;

  /**
   * The Maritime Mobile Service Identity of the vessel. MMSI is a nine-digit number
   * that identifies the transmitter station of the vessel.
   */
  mmsi?: string;

  /**
   * The number of blades per shaft for this vessel.
   */
  numBlades?: number;

  /**
   * The number of shafts on this vessel.
   */
  numShafts?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The type of propulsion employed by this vessel.
   */
  propType?: string;

  /**
   * The Ship Control Number (SCONUM) is a naval vessel identification number
   * (alphanumeric code) assigned by the Office of Naval Intelligence. SCONUM is
   * sometimes referred to as NOIC ID. SCONUMs are typically of the form A#####,
   * where A is an alpha character and # is numerical.
   */
  sconum?: string;

  /**
   * The status of this vessel.
   */
  status?: string;

  /**
   * The stern type code (Counter, Cruiser) associated with this vessel.
   */
  sternType?: string;

  /**
   * The shipbuilder who built this vessel.
   */
  vesselBuilder?: string;

  /**
   * The common name for a group of ships with similar design, usually named for the
   * first vessel of the class.
   */
  vesselClass?: string;

  /**
   * Further description or explanation of the vessel or type.
   */
  vesselDescription?: string;

  /**
   * The flag of the subject vessel.
   */
  vesselFlag?: string;

  /**
   * The name of this vessel. Vessel names that exceed the AIS 20 character are
   * shortened (not truncated) to 15 character-spaces, followed by an underscore and
   * the last 4 characters-spaces of the vessel full name.
   */
  vesselName?: string;

  /**
   * The reported ship type (e.g. Passenger, Tanker, Cargo, Other, etc.).
   */
  vesselType?: string;

  /**
   * The weight in tons, of this vessel.
   */
  vslWt?: number;

  /**
   * The breadth of the vessel, in meters. A value of 63 indicates a vessel breadth
   * of 63 meters or greater.
   */
  width?: number;

  /**
   * Year the vessel went into service.
   */
  yearBuilt?: string;
}

export interface VesselListParams extends OffsetPageParams {}

export interface VesselCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface VesselCreateBulkParams {
  body: Array<VesselCreateBulkParams.Body>;
}

export namespace VesselCreateBulkParams {
  /**
   * This service provides operations for manipulation and querying of maritime
   * Vessel data. Vessel contains the static data of the specific vessel: mmsi,
   * cruise speed, max speed, etc.
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
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The original source Id for this vessel.
     */
    altVesselId?: string;

    /**
     * A uniquely designated identifier for the vessel's transmitter station. All radio
     * transmissions must be individually identified by the call sign. Merchant and
     * naval vessels are assigned call signs by their national licensing authorities.
     */
    callsign?: string;

    /**
     * An entity is a generic representation of any object within a space/SSA system
     * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
     * entity can have an operating unit, a location (if terrestrial), and statuses.
     */
    entity?: EntitiesAPI.EntityIngest;

    /**
     * The date this vessel was first seen.
     */
    firstSeen?: string;

    /**
     * The vessel hull number designation of this maritime vessel. The hull number is a
     * 1-6 character alphanumeric entry assigned to a ship and painted on the hull.
     */
    hullNum?: string;

    /**
     * Unique identifier of the parent entity. idEntity is required for Put.
     */
    idEntity?: string;

    /**
     * The UDL ID of the organization that owns the vessel.
     */
    idOrganization?: string;

    /**
     * The International Maritime Organization Number of the vessel. IMON is a
     * seven-digit number that uniquely identifies the vessel.
     */
    imon?: number;

    /**
     * The overall length of the vessel, in meters. A value of 511 indicates a vessel
     * length of 511 meters or greater.
     */
    length?: number;

    /**
     * The maximum static draught, in meters, of the vessel defined as the distance
     * between the ship’s keel and the waterline of the vessel.
     */
    maxDraught?: number;

    /**
     * The maximum possible speed of this vessel in meters per second.
     */
    maxSpeed?: number;

    /**
     * The Maritime Mobile Service Identity of the vessel. MMSI is a nine-digit number
     * that identifies the transmitter station of the vessel.
     */
    mmsi?: string;

    /**
     * The number of blades per shaft for this vessel.
     */
    numBlades?: number;

    /**
     * The number of shafts on this vessel.
     */
    numShafts?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The type of propulsion employed by this vessel.
     */
    propType?: string;

    /**
     * The Ship Control Number (SCONUM) is a naval vessel identification number
     * (alphanumeric code) assigned by the Office of Naval Intelligence. SCONUM is
     * sometimes referred to as NOIC ID. SCONUMs are typically of the form A#####,
     * where A is an alpha character and # is numerical.
     */
    sconum?: string;

    /**
     * The status of this vessel.
     */
    status?: string;

    /**
     * The stern type code (Counter, Cruiser) associated with this vessel.
     */
    sternType?: string;

    /**
     * The shipbuilder who built this vessel.
     */
    vesselBuilder?: string;

    /**
     * The common name for a group of ships with similar design, usually named for the
     * first vessel of the class.
     */
    vesselClass?: string;

    /**
     * Further description or explanation of the vessel or type.
     */
    vesselDescription?: string;

    /**
     * The flag of the subject vessel.
     */
    vesselFlag?: string;

    /**
     * The name of this vessel. Vessel names that exceed the AIS 20 character are
     * shortened (not truncated) to 15 character-spaces, followed by an underscore and
     * the last 4 characters-spaces of the vessel full name.
     */
    vesselName?: string;

    /**
     * The reported ship type (e.g. Passenger, Tanker, Cargo, Other, etc.).
     */
    vesselType?: string;

    /**
     * The weight in tons, of this vessel.
     */
    vslWt?: number;

    /**
     * The breadth of the vessel, in meters. A value of 63 indicates a vessel breadth
     * of 63 meters or greater.
     */
    width?: number;

    /**
     * Year the vessel went into service.
     */
    yearBuilt?: string;
  }
}

export interface VesselGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface VesselTupleParams {
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

export declare namespace Vessel {
  export {
    type VesselListResponse as VesselListResponse,
    type VesselCountResponse as VesselCountResponse,
    type VesselGetResponse as VesselGetResponse,
    type VesselQueryhelpResponse as VesselQueryhelpResponse,
    type VesselTupleResponse as VesselTupleResponse,
    type VesselListResponsesOffsetPage as VesselListResponsesOffsetPage,
    type VesselCreateParams as VesselCreateParams,
    type VesselUpdateParams as VesselUpdateParams,
    type VesselListParams as VesselListParams,
    type VesselCountParams as VesselCountParams,
    type VesselCreateBulkParams as VesselCreateBulkParams,
    type VesselGetParams as VesselGetParams,
    type VesselTupleParams as VesselTupleParams,
  };
}
