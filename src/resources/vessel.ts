// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EntitiesAPI from './entities';

export class Vessel extends APIResource {
  /**
   * Service operation to take a single vessel record as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  create(body: VesselCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/vessel', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to update a single vessel record. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   */
  update(id1: string, body: VesselUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/udl/vessel/${id1}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<VesselListResponse> {
    return this._client.get('/udl/vessel', options);
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/vessel/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * vessel records as a POST body and ingest into the database. This operation is
   * not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   */
  createBulk(body: VesselCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/vessel/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single vessel record by its unique ID passed as a
   * path parameter.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<VesselGetResponse> {
    return this._client.get(`/udl/vessel/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/vessel/queryhelp', {
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
  tuple(query: VesselTupleParams, options?: Core.RequestOptions): Core.APIPromise<VesselTupleResponse> {
    return this._client.get('/udl/vessel/tuple', { query, ...options });
  }
}

export type VesselListResponse = Array<VesselListResponse.VesselListResponseItem>;

export namespace VesselListResponse {
  /**
   * This service provides operations for manipulation and querying of maritime
   * Vessel data. Vessel contains the static data of the specific vessel: mmsi,
   * cruise speed, max speed, etc.
   */
  export interface VesselListResponseItem {
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
  entity?: VesselCreateParams.Entity;

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

export namespace VesselCreateParams {
  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  export interface Entity {
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
     * Unique entity name.
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The type of entity represented by this record (AIRCRAFT, BUS, COMM, IR,
     * NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
     */
    type:
      | 'AIRCRAFT'
      | 'BUS'
      | 'COMM'
      | 'IR'
      | 'NAVIGATION'
      | 'ONORBIT'
      | 'RFEMITTER'
      | 'SCIENTIFIC'
      | 'SENSOR'
      | 'SITE'
      | 'VESSEL';

    /**
     * The country code. This value is typically the ISO 3166 Alpha-2 two-character
     * country code, however it can also represent various consortiums that do not
     * appear in the ISO document. The code must correspond to an existing country in
     * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
     * ISO Alpha-3 code, or alternate code values that exist for the specified country
     * code.
     */
    countryCode?: string;

    /**
     * Unique identifier of the record.
     */
    idEntity?: string;

    /**
     * Unique identifier of the entity location, if terrestrial/fixed.
     */
    idLocation?: string;

    /**
     * Onorbit identifier if this entity is part of an on-orbit object. For the public
     * catalog, the idOnOrbit is typically the satellite number as a string, but may be
     * a UUID for analyst or other unknown or untracked satellites.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the associated operating unit object.
     */
    idOperatingUnit?: string;

    /**
     * Model representation of a location, which is a specific fixed point on the earth
     * and is used to denote the locations of fixed sensors, operating units, etc.
     */
    location?: Entity.Location;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Entity.OnOrbit;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Type of organization which owns this entity (e.g. Commercial, Government,
     * Academic, Consortium, etc).
     */
    ownerType?: 'Commercial' | 'Government' | 'Academic' | 'Consortium' | 'Other';

    /**
     * Boolean indicating if this entity is taskable.
     */
    taskable?: boolean;

    /**
     * List of URLs to additional details/documents for this entity.
     */
    urls?: Array<string>;
  }

  export namespace Entity {
    /**
     * Model representation of a location, which is a specific fixed point on the earth
     * and is used to denote the locations of fixed sensors, operating units, etc.
     */
    export interface Location {
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
       * Location name.
       */
      name: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Altitude of the location, in kilometers.
       */
      altitude?: number;

      /**
       * The country code. This value is typically the ISO 3166 Alpha-2 two-character
       * country code, however it can also represent various consortiums that do not
       * appear in the ISO document. The code must correspond to an existing country in
       * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
       * ISO Alpha-3 code, or alternate code values that exist for the specified country
       * code.
       */
      countryCode?: string;

      /**
       * Unique identifier of the location, auto-generated by the system.
       */
      idLocation?: string;

      /**
       * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
       * south of equator).
       */
      lat?: number;

      /**
       * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
       * values west of Prime Meridian).
       */
      lon?: number;

      /**
       * Originating system or organization which produced the data, if different from
       * the source. The origin may be different than the source if the source was a
       * mediating system which forwarded the data on behalf of the origin system. If
       * null, the source may be assumed to be the origin.
       */
      origin?: string;
    }

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    export interface OnOrbit {
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
       * Satellite/Catalog number of the target on-orbit object.
       */
      satNo: number;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Alternate name of the on-orbit object.
       */
      altName?: string;

      /**
       * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
       * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
       * Heliocentric, Interplanetary, Lagrangian, Docked).
       */
      category?:
        | 'Unknown'
        | 'On-Orbit'
        | 'Decayed'
        | 'Cataloged Without State'
        | 'Launch Nominal'
        | 'Analyst Satellite'
        | 'Cislunar'
        | 'Lunar'
        | 'Hyperbolic'
        | 'Heliocentric'
        | 'Interplanetary'
        | 'Lagrangian'
        | 'Docked';

      /**
       * Common name of the on-orbit object.
       */
      commonName?: string;

      /**
       * Constellation to which this satellite belongs.
       */
      constellation?: string;

      /**
       * The country code. This value is typically the ISO 3166 Alpha-2 two-character
       * country code, however it can also represent various consortiums that do not
       * appear in the ISO document. The code must correspond to an existing country in
       * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
       * ISO Alpha-3 code, or alternate code values that exist for the specified country
       * code.
       */
      countryCode?: string;

      /**
       * Date of decay.
       */
      decayDate?: string;

      /**
       * For the public catalog, the idOnOrbit is typically the satellite number as a
       * string, but may be a UUID for analyst or other unknown or untracked satellites,
       * auto-generated by the system.
       */
      idOnOrbit?: string;

      /**
       * International Designator, typically of the format YYYYLLLAAA, where YYYY is the
       * launch year, LLL is the sequential launch number of that year, and AAA is an
       * optional launch piece designator for the launch.
       */
      intlDes?: string;

      /**
       * Date of launch.
       */
      launchDate?: string;

      /**
       * Id of the associated launchSite entity.
       */
      launchSiteId?: string;

      /**
       * Estimated lifetime of the on-orbit payload, if known.
       */
      lifetimeYears?: number;

      /**
       * Mission number of the on-orbit object.
       */
      missionNumber?: string;

      /**
       * Type of on-orbit object: ROCKET BODY, DEBRIS, PAYLOAD, PLATFORM, MANNED,
       * UNKNOWN.
       */
      objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

      /**
       * Originating system or organization which produced the data, if different from
       * the source. The origin may be different than the source if the source was a
       * mediating system which forwarded the data on behalf of the origin system. If
       * null, the source may be assumed to be the origin.
       */
      origin?: string;
    }
  }
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
  entity?: VesselUpdateParams.Entity;

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

export namespace VesselUpdateParams {
  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  export interface Entity {
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
     * Unique entity name.
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The type of entity represented by this record (AIRCRAFT, BUS, COMM, IR,
     * NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
     */
    type:
      | 'AIRCRAFT'
      | 'BUS'
      | 'COMM'
      | 'IR'
      | 'NAVIGATION'
      | 'ONORBIT'
      | 'RFEMITTER'
      | 'SCIENTIFIC'
      | 'SENSOR'
      | 'SITE'
      | 'VESSEL';

    /**
     * The country code. This value is typically the ISO 3166 Alpha-2 two-character
     * country code, however it can also represent various consortiums that do not
     * appear in the ISO document. The code must correspond to an existing country in
     * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
     * ISO Alpha-3 code, or alternate code values that exist for the specified country
     * code.
     */
    countryCode?: string;

    /**
     * Unique identifier of the record.
     */
    idEntity?: string;

    /**
     * Unique identifier of the entity location, if terrestrial/fixed.
     */
    idLocation?: string;

    /**
     * Onorbit identifier if this entity is part of an on-orbit object. For the public
     * catalog, the idOnOrbit is typically the satellite number as a string, but may be
     * a UUID for analyst or other unknown or untracked satellites.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the associated operating unit object.
     */
    idOperatingUnit?: string;

    /**
     * Model representation of a location, which is a specific fixed point on the earth
     * and is used to denote the locations of fixed sensors, operating units, etc.
     */
    location?: Entity.Location;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Entity.OnOrbit;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Type of organization which owns this entity (e.g. Commercial, Government,
     * Academic, Consortium, etc).
     */
    ownerType?: 'Commercial' | 'Government' | 'Academic' | 'Consortium' | 'Other';

    /**
     * Boolean indicating if this entity is taskable.
     */
    taskable?: boolean;

    /**
     * List of URLs to additional details/documents for this entity.
     */
    urls?: Array<string>;
  }

  export namespace Entity {
    /**
     * Model representation of a location, which is a specific fixed point on the earth
     * and is used to denote the locations of fixed sensors, operating units, etc.
     */
    export interface Location {
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
       * Location name.
       */
      name: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Altitude of the location, in kilometers.
       */
      altitude?: number;

      /**
       * The country code. This value is typically the ISO 3166 Alpha-2 two-character
       * country code, however it can also represent various consortiums that do not
       * appear in the ISO document. The code must correspond to an existing country in
       * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
       * ISO Alpha-3 code, or alternate code values that exist for the specified country
       * code.
       */
      countryCode?: string;

      /**
       * Unique identifier of the location, auto-generated by the system.
       */
      idLocation?: string;

      /**
       * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
       * south of equator).
       */
      lat?: number;

      /**
       * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
       * values west of Prime Meridian).
       */
      lon?: number;

      /**
       * Originating system or organization which produced the data, if different from
       * the source. The origin may be different than the source if the source was a
       * mediating system which forwarded the data on behalf of the origin system. If
       * null, the source may be assumed to be the origin.
       */
      origin?: string;
    }

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    export interface OnOrbit {
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
       * Satellite/Catalog number of the target on-orbit object.
       */
      satNo: number;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Alternate name of the on-orbit object.
       */
      altName?: string;

      /**
       * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
       * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
       * Heliocentric, Interplanetary, Lagrangian, Docked).
       */
      category?:
        | 'Unknown'
        | 'On-Orbit'
        | 'Decayed'
        | 'Cataloged Without State'
        | 'Launch Nominal'
        | 'Analyst Satellite'
        | 'Cislunar'
        | 'Lunar'
        | 'Hyperbolic'
        | 'Heliocentric'
        | 'Interplanetary'
        | 'Lagrangian'
        | 'Docked';

      /**
       * Common name of the on-orbit object.
       */
      commonName?: string;

      /**
       * Constellation to which this satellite belongs.
       */
      constellation?: string;

      /**
       * The country code. This value is typically the ISO 3166 Alpha-2 two-character
       * country code, however it can also represent various consortiums that do not
       * appear in the ISO document. The code must correspond to an existing country in
       * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
       * ISO Alpha-3 code, or alternate code values that exist for the specified country
       * code.
       */
      countryCode?: string;

      /**
       * Date of decay.
       */
      decayDate?: string;

      /**
       * For the public catalog, the idOnOrbit is typically the satellite number as a
       * string, but may be a UUID for analyst or other unknown or untracked satellites,
       * auto-generated by the system.
       */
      idOnOrbit?: string;

      /**
       * International Designator, typically of the format YYYYLLLAAA, where YYYY is the
       * launch year, LLL is the sequential launch number of that year, and AAA is an
       * optional launch piece designator for the launch.
       */
      intlDes?: string;

      /**
       * Date of launch.
       */
      launchDate?: string;

      /**
       * Id of the associated launchSite entity.
       */
      launchSiteId?: string;

      /**
       * Estimated lifetime of the on-orbit payload, if known.
       */
      lifetimeYears?: number;

      /**
       * Mission number of the on-orbit object.
       */
      missionNumber?: string;

      /**
       * Type of on-orbit object: ROCKET BODY, DEBRIS, PAYLOAD, PLATFORM, MANNED,
       * UNKNOWN.
       */
      objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

      /**
       * Originating system or organization which produced the data, if different from
       * the source. The origin may be different than the source if the source was a
       * mediating system which forwarded the data on behalf of the origin system. If
       * null, the source may be assumed to be the origin.
       */
      origin?: string;
    }
  }
}

export type VesselCreateBulkParams = Array<VesselCreateBulkParams.Body>;

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
    entity?: Body.Entity;

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

  export namespace Body {
    /**
     * An entity is a generic representation of any object within a space/SSA system
     * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
     * entity can have an operating unit, a location (if terrestrial), and statuses.
     */
    export interface Entity {
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
       * Unique entity name.
       */
      name: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * The type of entity represented by this record (AIRCRAFT, BUS, COMM, IR,
       * NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
       */
      type:
        | 'AIRCRAFT'
        | 'BUS'
        | 'COMM'
        | 'IR'
        | 'NAVIGATION'
        | 'ONORBIT'
        | 'RFEMITTER'
        | 'SCIENTIFIC'
        | 'SENSOR'
        | 'SITE'
        | 'VESSEL';

      /**
       * The country code. This value is typically the ISO 3166 Alpha-2 two-character
       * country code, however it can also represent various consortiums that do not
       * appear in the ISO document. The code must correspond to an existing country in
       * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
       * ISO Alpha-3 code, or alternate code values that exist for the specified country
       * code.
       */
      countryCode?: string;

      /**
       * Unique identifier of the record.
       */
      idEntity?: string;

      /**
       * Unique identifier of the entity location, if terrestrial/fixed.
       */
      idLocation?: string;

      /**
       * Onorbit identifier if this entity is part of an on-orbit object. For the public
       * catalog, the idOnOrbit is typically the satellite number as a string, but may be
       * a UUID for analyst or other unknown or untracked satellites.
       */
      idOnOrbit?: string;

      /**
       * Unique identifier of the associated operating unit object.
       */
      idOperatingUnit?: string;

      /**
       * Model representation of a location, which is a specific fixed point on the earth
       * and is used to denote the locations of fixed sensors, operating units, etc.
       */
      location?: Entity.Location;

      /**
       * Model object representing on-orbit objects or satellites in the system.
       */
      onOrbit?: Entity.OnOrbit;

      /**
       * Originating system or organization which produced the data, if different from
       * the source. The origin may be different than the source if the source was a
       * mediating system which forwarded the data on behalf of the origin system. If
       * null, the source may be assumed to be the origin.
       */
      origin?: string;

      /**
       * Type of organization which owns this entity (e.g. Commercial, Government,
       * Academic, Consortium, etc).
       */
      ownerType?: 'Commercial' | 'Government' | 'Academic' | 'Consortium' | 'Other';

      /**
       * Boolean indicating if this entity is taskable.
       */
      taskable?: boolean;

      /**
       * List of URLs to additional details/documents for this entity.
       */
      urls?: Array<string>;
    }

    export namespace Entity {
      /**
       * Model representation of a location, which is a specific fixed point on the earth
       * and is used to denote the locations of fixed sensors, operating units, etc.
       */
      export interface Location {
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
         * Location name.
         */
        name: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Altitude of the location, in kilometers.
         */
        altitude?: number;

        /**
         * The country code. This value is typically the ISO 3166 Alpha-2 two-character
         * country code, however it can also represent various consortiums that do not
         * appear in the ISO document. The code must correspond to an existing country in
         * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
         * ISO Alpha-3 code, or alternate code values that exist for the specified country
         * code.
         */
        countryCode?: string;

        /**
         * Unique identifier of the location, auto-generated by the system.
         */
        idLocation?: string;

        /**
         * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
         * south of equator).
         */
        lat?: number;

        /**
         * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
         * values west of Prime Meridian).
         */
        lon?: number;

        /**
         * Originating system or organization which produced the data, if different from
         * the source. The origin may be different than the source if the source was a
         * mediating system which forwarded the data on behalf of the origin system. If
         * null, the source may be assumed to be the origin.
         */
        origin?: string;
      }

      /**
       * Model object representing on-orbit objects or satellites in the system.
       */
      export interface OnOrbit {
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
         * Satellite/Catalog number of the target on-orbit object.
         */
        satNo: number;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Alternate name of the on-orbit object.
         */
        altName?: string;

        /**
         * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
         * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
         * Heliocentric, Interplanetary, Lagrangian, Docked).
         */
        category?:
          | 'Unknown'
          | 'On-Orbit'
          | 'Decayed'
          | 'Cataloged Without State'
          | 'Launch Nominal'
          | 'Analyst Satellite'
          | 'Cislunar'
          | 'Lunar'
          | 'Hyperbolic'
          | 'Heliocentric'
          | 'Interplanetary'
          | 'Lagrangian'
          | 'Docked';

        /**
         * Common name of the on-orbit object.
         */
        commonName?: string;

        /**
         * Constellation to which this satellite belongs.
         */
        constellation?: string;

        /**
         * The country code. This value is typically the ISO 3166 Alpha-2 two-character
         * country code, however it can also represent various consortiums that do not
         * appear in the ISO document. The code must correspond to an existing country in
         * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
         * ISO Alpha-3 code, or alternate code values that exist for the specified country
         * code.
         */
        countryCode?: string;

        /**
         * Date of decay.
         */
        decayDate?: string;

        /**
         * For the public catalog, the idOnOrbit is typically the satellite number as a
         * string, but may be a UUID for analyst or other unknown or untracked satellites,
         * auto-generated by the system.
         */
        idOnOrbit?: string;

        /**
         * International Designator, typically of the format YYYYLLLAAA, where YYYY is the
         * launch year, LLL is the sequential launch number of that year, and AAA is an
         * optional launch piece designator for the launch.
         */
        intlDes?: string;

        /**
         * Date of launch.
         */
        launchDate?: string;

        /**
         * Id of the associated launchSite entity.
         */
        launchSiteId?: string;

        /**
         * Estimated lifetime of the on-orbit payload, if known.
         */
        lifetimeYears?: number;

        /**
         * Mission number of the on-orbit object.
         */
        missionNumber?: string;

        /**
         * Type of on-orbit object: ROCKET BODY, DEBRIS, PAYLOAD, PLATFORM, MANNED,
         * UNKNOWN.
         */
        objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

        /**
         * Originating system or organization which produced the data, if different from
         * the source. The origin may be different than the source if the source was a
         * mediating system which forwarded the data on behalf of the origin system. If
         * null, the source may be assumed to be the origin.
         */
        origin?: string;
      }
    }
  }
}

export interface VesselTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

export declare namespace Vessel {
  export {
    type VesselListResponse as VesselListResponse,
    type VesselCountResponse as VesselCountResponse,
    type VesselGetResponse as VesselGetResponse,
    type VesselTupleResponse as VesselTupleResponse,
    type VesselCreateParams as VesselCreateParams,
    type VesselUpdateParams as VesselUpdateParams,
    type VesselCreateBulkParams as VesselCreateBulkParams,
    type VesselTupleParams as VesselTupleParams,
  };
}
