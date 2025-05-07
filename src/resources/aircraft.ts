// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EntitiesAPI from './entities';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Aircraft extends APIResource {
  /**
   * Service operation to take a single Aircraft as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.aircraft.create({
   *   aircraftMDS: 'E-2C HAWKEYE',
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: AircraftCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/aircraft', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Aircraft record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const aircraftFull = await client.aircraft.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: AircraftRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AircraftFull> {
    return this._client.get(path`/udl/aircraft/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single Aircraft. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.aircraft.update('id', {
   *   aircraftMDS: 'E-2C HAWKEYE',
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: AircraftUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/aircraft/${pathID}`, {
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
   * for await (const aircraftAbridged of client.aircraft.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AircraftListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AircraftAbridgedsOffsetPage, AircraftAbridged> {
    return this._client.getAPIList('/udl/aircraft', OffsetPage<AircraftAbridged>, { query, ...options });
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
   * const response = await client.aircraft.count();
   * ```
   */
  count(query: AircraftCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/aircraft/count', {
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
   * await client.aircraft.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/aircraft/queryhelp', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
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
   *
   * @example
   * ```ts
   * const aircraftFulls = await client.aircraft.tupleQuery({
   *   columns: 'columns',
   * });
   * ```
   */
  tupleQuery(
    query: AircraftTupleQueryParams,
    options?: RequestOptions,
  ): APIPromise<AircraftTupleQueryResponse> {
    return this._client.get('/udl/aircraft/tuple', { query, ...options });
  }
}

export type AircraftAbridgedsOffsetPage = OffsetPage<AircraftAbridged>;

/**
 * General aircraft designation, characteristics, and capabilities. The aircraft
 * schema contains static data of specific aircraft, including tail number, cruise
 * speed, max speed, and minimum required runway length, etc.
 */
export interface AircraftAbridged {
  /**
   * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
   * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
   * to, MIL-STD-6016 environment dependent specific type designations.
   */
  aircraftMDS: string;

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
   * The category of aircraft (e.g. M = Military, C = Commercial).
   */
  category?: string;

  /**
   * The Air Force major command (MAJCOM) overseeing the aircraft.
   */
  command?: string;

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
   * The cruise speed of the aircraft, in kilometers/hour.
   */
  cruiseSpeed?: number;

  /**
   * Military data network data transfer device ID for this aircraft.
   */
  dtd?: string;

  /**
   * ID of the parent entity for this aircraft.
   */
  idEntity?: string;

  /**
   * The maximum air speed of the aircraft, in kilometers/hour.
   */
  maxSpeed?: number;

  /**
   * The minimum length of runway required to land this aircraft, in feet. Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  minReqRunwayFt?: number;

  /**
   * The minimum length of runway required to land this aircraft, in meters. Note:
   * The corresponding equivalent field is not converted by the UDL and may or may
   * not be supplied by the provider. The provider/consumer is responsible for all
   * unit conversions.
   */
  minReqRunwayM?: number;

  /**
   * The nominal turnaround time for this aircraft, in minutes.
   */
  nominalTATime?: number;

  /**
   * Optional notes/comments for this aircraft.
   */
  notes?: string;

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
   * The wing or unit that owns the aircraft.
   */
  owner?: string;

  /**
   * Full serial number of the aircraft.
   */
  serialNumber?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The tail number of this aircraft.
   */
  tailNumber?: string;
}

/**
 * General aircraft designation, characteristics, and capabilities. The aircraft
 * schema contains static data of specific aircraft, including tail number, cruise
 * speed, max speed, and minimum required runway length, etc.
 */
export interface AircraftFull {
  /**
   * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
   * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
   * to, MIL-STD-6016 environment dependent specific type designations.
   */
  aircraftMDS: string;

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
   * The category of aircraft (e.g. M = Military, C = Commercial).
   */
  category?: string;

  /**
   * The Air Force major command (MAJCOM) overseeing the aircraft.
   */
  command?: string;

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
   * The cruise speed of the aircraft, in kilometers/hour.
   */
  cruiseSpeed?: number;

  /**
   * Military data network data transfer device ID for this aircraft.
   */
  dtd?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityFull;

  /**
   * ID of the parent entity for this aircraft.
   */
  idEntity?: string;

  /**
   * The maximum air speed of the aircraft, in kilometers/hour.
   */
  maxSpeed?: number;

  /**
   * The minimum length of runway required to land this aircraft, in feet. Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  minReqRunwayFt?: number;

  /**
   * The minimum length of runway required to land this aircraft, in meters. Note:
   * The corresponding equivalent field is not converted by the UDL and may or may
   * not be supplied by the provider. The provider/consumer is responsible for all
   * unit conversions.
   */
  minReqRunwayM?: number;

  /**
   * The nominal turnaround time for this aircraft, in minutes.
   */
  nominalTATime?: number;

  /**
   * Optional notes/comments for this aircraft.
   */
  notes?: string;

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
   * The wing or unit that owns the aircraft.
   */
  owner?: string;

  /**
   * Full serial number of the aircraft.
   */
  serialNumber?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The tail number of this aircraft.
   */
  tailNumber?: string;

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

export type AircraftCountResponse = string;

export type AircraftTupleQueryResponse = Array<AircraftFull>;

export interface AircraftCreateParams {
  /**
   * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
   * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
   * to, MIL-STD-6016 environment dependent specific type designations.
   */
  aircraftMDS: string;

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
   * The category of aircraft (e.g. M = Military, C = Commercial).
   */
  category?: string;

  /**
   * The Air Force major command (MAJCOM) overseeing the aircraft.
   */
  command?: string;

  /**
   * The cruise speed of the aircraft, in kilometers/hour.
   */
  cruiseSpeed?: number;

  /**
   * Military data network data transfer device ID for this aircraft.
   */
  dtd?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityIngest;

  /**
   * ID of the parent entity for this aircraft.
   */
  idEntity?: string;

  /**
   * The maximum air speed of the aircraft, in kilometers/hour.
   */
  maxSpeed?: number;

  /**
   * The minimum length of runway required to land this aircraft, in feet. Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  minReqRunwayFt?: number;

  /**
   * The minimum length of runway required to land this aircraft, in meters. Note:
   * The corresponding equivalent field is not converted by the UDL and may or may
   * not be supplied by the provider. The provider/consumer is responsible for all
   * unit conversions.
   */
  minReqRunwayM?: number;

  /**
   * The nominal turnaround time for this aircraft, in minutes.
   */
  nominalTATime?: number;

  /**
   * Optional notes/comments for this aircraft.
   */
  notes?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The wing or unit that owns the aircraft.
   */
  owner?: string;

  /**
   * Full serial number of the aircraft.
   */
  serialNumber?: string;

  /**
   * The tail number of this aircraft.
   */
  tailNumber?: string;
}

export interface AircraftRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AircraftUpdateParams {
  /**
   * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
   * EAGLE, KC-130 HERCULES, etc.) of this aircraft. Intended as, but not constrained
   * to, MIL-STD-6016 environment dependent specific type designations.
   */
  aircraftMDS: string;

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
   * The category of aircraft (e.g. M = Military, C = Commercial).
   */
  category?: string;

  /**
   * The Air Force major command (MAJCOM) overseeing the aircraft.
   */
  command?: string;

  /**
   * The cruise speed of the aircraft, in kilometers/hour.
   */
  cruiseSpeed?: number;

  /**
   * Military data network data transfer device ID for this aircraft.
   */
  dtd?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityIngest;

  /**
   * ID of the parent entity for this aircraft.
   */
  idEntity?: string;

  /**
   * The maximum air speed of the aircraft, in kilometers/hour.
   */
  maxSpeed?: number;

  /**
   * The minimum length of runway required to land this aircraft, in feet. Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  minReqRunwayFt?: number;

  /**
   * The minimum length of runway required to land this aircraft, in meters. Note:
   * The corresponding equivalent field is not converted by the UDL and may or may
   * not be supplied by the provider. The provider/consumer is responsible for all
   * unit conversions.
   */
  minReqRunwayM?: number;

  /**
   * The nominal turnaround time for this aircraft, in minutes.
   */
  nominalTATime?: number;

  /**
   * Optional notes/comments for this aircraft.
   */
  notes?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The wing or unit that owns the aircraft.
   */
  owner?: string;

  /**
   * Full serial number of the aircraft.
   */
  serialNumber?: string;

  /**
   * The tail number of this aircraft.
   */
  tailNumber?: string;
}

export interface AircraftListParams extends OffsetPageParams {}

export interface AircraftCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AircraftTupleQueryParams {
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

export declare namespace Aircraft {
  export {
    type AircraftAbridged as AircraftAbridged,
    type AircraftFull as AircraftFull,
    type AircraftCountResponse as AircraftCountResponse,
    type AircraftTupleQueryResponse as AircraftTupleQueryResponse,
    type AircraftAbridgedsOffsetPage as AircraftAbridgedsOffsetPage,
    type AircraftCreateParams as AircraftCreateParams,
    type AircraftRetrieveParams as AircraftRetrieveParams,
    type AircraftUpdateParams as AircraftUpdateParams,
    type AircraftListParams as AircraftListParams,
    type AircraftCountParams as AircraftCountParams,
    type AircraftTupleQueryParams as AircraftTupleQueryParams,
  };
}
