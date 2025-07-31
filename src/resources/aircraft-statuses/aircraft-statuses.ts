// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as Shared from 'bluestaq@unified-data-library/resources/shared';
import * as HistoryAPI from 'bluestaq@unified-data-library/resources/aircraft-statuses/history';
import {
  History,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
} from 'bluestaq@unified-data-library/resources/aircraft-statuses/history';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class AircraftStatuses extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single AircraftStatus as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.aircraftStatuses.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idAircraft: '29232269-e4c2-45c9-aa21-039a33209340',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: AircraftStatusCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/aircraftstatus', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single AircraftStatus record by its unique ID passed
   * as a path parameter.
   *
   * @example
   * ```ts
   * const aircraftstatusFull =
   *   await client.aircraftStatuses.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: AircraftStatusRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.AircraftstatusFull> {
    return this._client.get(path`/udl/aircraftstatus/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single AircraftStatus. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.aircraftStatuses.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idAircraft: '29232269-e4c2-45c9-aa21-039a33209340',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: AircraftStatusUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/aircraftstatus/${pathID}`, {
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
   * for await (const aircraftstatusAbridged of client.aircraftStatuses.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AircraftStatusListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AircraftstatusAbridgedsOffsetPage, AircraftstatusAbridged> {
    return this._client.getAPIList('/udl/aircraftstatus', OffsetPage<AircraftstatusAbridged>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a Status object specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.aircraftStatuses.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/aircraftstatus/${id}`, {
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
   * const response = await client.aircraftStatuses.count();
   * ```
   */
  count(
    query: AircraftStatusCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/aircraftstatus/count', {
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
   * const response = await client.aircraftStatuses.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<AircraftStatusQueryhelpResponse> {
    return this._client.get('/udl/aircraftstatus/queryhelp', options);
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
   * const aircraftstatusFulls =
   *   await client.aircraftStatuses.tuple({
   *     columns: 'columns',
   *   });
   * ```
   */
  tuple(query: AircraftStatusTupleParams, options?: RequestOptions): APIPromise<AircraftStatusTupleResponse> {
    return this._client.get('/udl/aircraftstatus/tuple', { query, ...options });
  }
}

export type AircraftstatusAbridgedsOffsetPage = OffsetPage<AircraftstatusAbridged>;

/**
 * Aircraft readiness and status data. Contains the dynamic data associated with
 * the specific aircraft status, either in-flight or on-ground, including remaining
 * fuel, mission readiness, and inventory, etc.
 */
export interface AircraftstatusAbridged {
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
   * Unique identifier of the aircraft.
   */
  idAircraft: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * List of additional operational systems on this aircraft beyond what is normally
   * available.
   */
  additionalSys?: Array<string>;

  /**
   * The status of the air-to-air weapon release system (OPERATIONAL,
   * NON-OPERATIONAL, OFF).
   */
  airToAirStatus?: 'OPERATIONAL' | 'NON-OPERATIONAL' | 'OFF';

  /**
   * The status of the air-to-ground weapon release system (OPERATIONAL,
   * NON-OPERATIONAL, OFF).
   */
  airToGroundStatus?: 'OPERATIONAL' | 'NON-OPERATIONAL' | 'OFF';

  /**
   * Aircraft alpha status code that indicates the aircraft maintenance status
   * estimated by the pilot.
   */
  alphaStatusCode?: string;

  /**
   * Alternate Aircraft Identifier provided by source.
   */
  altAircraftId?: string;

  /**
   * The contamination status of the aircraft (e.g. CLEAR, CONTAMINATED,
   * DECONTAMINATED, UNKNOWN, etc.).
   */
  contaminationStatus?: string;

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
   * The International Civil Aviation Organization (ICAO) code at which this aircraft
   * is currently located or has most recently departed, if airborne.
   */
  currentICAO?: string;

  /**
   * The current readiness state of the aircraft (e.g. AIRBORNE, ALERTCOCKED,
   * AVAILABLE, BATTLESTATION, RUNWAY ALERT, SUITUP).
   */
  currentState?: string;

  /**
   * The earliest time that turnaround of the aircraft may complete, in ISO 8601 UTC
   * format with millisecond precision.
   */
  earliestTAEndTime?: string;

  /**
   * The Expected Time in Commission (ETIC) for this aircraft, in ISO 8601 UTC format
   * with millisecond precision. This is the estimated time when the issue will be
   * resolved.
   */
  etic?: string;

  /**
   * Current flight phase (e.g. AIR REFUELING, GROUND, LANDING, etc.) of the
   * aircraft.
   */
  flightPhase?: string;

  /**
   * The mass of fuel remaining on the aircraft, in kilograms.
   */
  fuel?: number;

  /**
   * Used in conjunction with the fuel field to indicate either burnable or offload
   * fuel.
   */
  fuelFunction?: string;

  /**
   * The state of the aircraft fuel status (e.g. DELIVERED, DUMPED, EMPTY, FULL,
   * OTHER, REQUESTED, etc.).
   */
  fuelStatus?: string;

  /**
   * US Air Force geographic location code of the airfield where the aircraft is
   * located.
   */
  geoLoc?: string;

  /**
   * The ground status of the aircraft (e.g. ALERT, CREW READY, ENGINE START, HANGAR,
   * etc.).
   */
  groundStatus?: string;

  /**
   * Flag indicating that the aircraft is capable of making at least one gun pass.
   */
  gunCapable?: boolean;

  /**
   * The upper bound of the estimated number of gun rounds available.
   */
  gunRdsMax?: number;

  /**
   * The lower bound of the estimated number of gun rounds available.
   */
  gunRdsMin?: number;

  /**
   * The type of gun rounds available (e.g. 7.62 MM, 20 MM, 25 MM, etc.).
   */
  gunRdsType?: string;

  /**
   * If not airborne, the unique identifier of the installation currently hosting the
   * aircraft.
   */
  idAirfield?: string;

  /**
   * Unique identifier of the Point of Interest (POI) record related to this aircraft
   * status. This will generally represent the location of an aircraft on the ground.
   */
  idPOI?: string;

  /**
   * Array of inventory item(s) for which estimate(s) are available (e.g. AIM-9
   * SIDEWINDER, AIM-120 AMRAAM, AIM-92 STINGER, CHAFF DECOY, FLARE TP 400, etc.).
   * Intended as, but not constrained to, MIL-STD-6016 environment dependent
   * specific/store type designations. This array must be the same length as
   * inventoryMin and inventoryMax.
   */
  inventory?: Array<string>;

  /**
   * Array of the upper bound quantity for each of the inventory items. The values in
   * this array must correspond to position index in the inventory array. This array
   * must be the same length as inventory and inventoryMin.
   */
  inventoryMax?: Array<number>;

  /**
   * Array of the lower bound quantity for each of the inventory items. The values in
   * this array must correspond to position index in the inventory array. This array
   * must be the same length as inventory and inventoryMax.
   */
  inventoryMin?: Array<number>;

  /**
   * Date when the military aircraft inspection was last performed, in ISO 8601 UTC
   * format with millisecond precision.
   */
  lastInspectionDate?: string;

  /**
   * The name or ID of the external user that updated this status.
   */
  lastUpdatedBy?: string;

  /**
   * Military aircraft maintenance point of contact for this aircraft.
   */
  maintPoc?: string;

  /**
   * Indicates the priority of the maintenance effort.
   */
  maintPriority?: string;

  /**
   * The maintenance status of the aircraft.
   */
  maintStatus?: string;

  /**
   * Indicates the maintenance discrepancy that drives the current maintenance
   * status.
   */
  maintStatusDriver?: string;

  /**
   * The time of the last maintenance status update, in ISO 8601 UTC format with
   * millisecond precision.
   */
  maintStatusUpdate?: string;

  /**
   * The Operational Capability of the reported aircraft (ABLE, LOFUEL, UNABLE).
   */
  missionReadiness?: string;

  /**
   * Maintenance pacing remarks assocociated with this aircraft.
   */
  mxRemark?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of the next
   * destination of this aircraft.
   */
  nextICAO?: string;

  /**
   * Optional notes/comments concerning this aircraft status.
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
   * The parking location of this aircraft.
   */
  parkLocation?: string;

  /**
   * The system that designated the parking location (e.g. EMOC, GDSS, PEX, etc.).
   */
  parkLocationSystem?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code at which this aircraft
   * was previously located.
   */
  previousICAO?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The turnaround start time, in ISO 8601 UTC format with millisecond precision.
   */
  taStartTime?: string;

  /**
   * Estimated Time for Completion (ETIC) of an aircraft issue, in ISO 8601 UTC
   * format with millisecond precision. This is the estimated time when the course of
   * action to resolve the issue will be determined.
   */
  troubleshootEtic?: string;

  /**
   * List of unavailable systems that would normally be on this aircraft.
   */
  unavailableSys?: Array<string>;
}

export type AircraftStatusCountResponse = string;

export interface AircraftStatusQueryhelpResponse {
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

export type AircraftStatusTupleResponse = Array<Shared.AircraftstatusFull>;

export interface AircraftStatusCreateParams {
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
   * Unique identifier of the aircraft.
   */
  idAircraft: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * List of additional operational systems on this aircraft beyond what is normally
   * available.
   */
  additionalSys?: Array<string>;

  /**
   * The status of the air-to-air weapon release system (OPERATIONAL,
   * NON-OPERATIONAL, OFF).
   */
  airToAirStatus?: 'OPERATIONAL' | 'NON-OPERATIONAL' | 'OFF';

  /**
   * The status of the air-to-ground weapon release system (OPERATIONAL,
   * NON-OPERATIONAL, OFF).
   */
  airToGroundStatus?: 'OPERATIONAL' | 'NON-OPERATIONAL' | 'OFF';

  /**
   * Aircraft alpha status code that indicates the aircraft maintenance status
   * estimated by the pilot.
   */
  alphaStatusCode?: string;

  /**
   * Alternate Aircraft Identifier provided by source.
   */
  altAircraftId?: string;

  /**
   * The contamination status of the aircraft (e.g. CLEAR, CONTAMINATED,
   * DECONTAMINATED, UNKNOWN, etc.).
   */
  contaminationStatus?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code at which this aircraft
   * is currently located or has most recently departed, if airborne.
   */
  currentICAO?: string;

  /**
   * The current readiness state of the aircraft (e.g. AIRBORNE, ALERTCOCKED,
   * AVAILABLE, BATTLESTATION, RUNWAY ALERT, SUITUP).
   */
  currentState?: string;

  /**
   * The earliest time that turnaround of the aircraft may complete, in ISO 8601 UTC
   * format with millisecond precision.
   */
  earliestTAEndTime?: string;

  /**
   * The Expected Time in Commission (ETIC) for this aircraft, in ISO 8601 UTC format
   * with millisecond precision. This is the estimated time when the issue will be
   * resolved.
   */
  etic?: string;

  /**
   * Current flight phase (e.g. AIR REFUELING, GROUND, LANDING, etc.) of the
   * aircraft.
   */
  flightPhase?: string;

  /**
   * The mass of fuel remaining on the aircraft, in kilograms.
   */
  fuel?: number;

  /**
   * Used in conjunction with the fuel field to indicate either burnable or offload
   * fuel.
   */
  fuelFunction?: string;

  /**
   * The state of the aircraft fuel status (e.g. DELIVERED, DUMPED, EMPTY, FULL,
   * OTHER, REQUESTED, etc.).
   */
  fuelStatus?: string;

  /**
   * US Air Force geographic location code of the airfield where the aircraft is
   * located.
   */
  geoLoc?: string;

  /**
   * The ground status of the aircraft (e.g. ALERT, CREW READY, ENGINE START, HANGAR,
   * etc.).
   */
  groundStatus?: string;

  /**
   * Flag indicating that the aircraft is capable of making at least one gun pass.
   */
  gunCapable?: boolean;

  /**
   * The upper bound of the estimated number of gun rounds available.
   */
  gunRdsMax?: number;

  /**
   * The lower bound of the estimated number of gun rounds available.
   */
  gunRdsMin?: number;

  /**
   * The type of gun rounds available (e.g. 7.62 MM, 20 MM, 25 MM, etc.).
   */
  gunRdsType?: string;

  /**
   * If not airborne, the unique identifier of the installation currently hosting the
   * aircraft.
   */
  idAirfield?: string;

  /**
   * Unique identifier of the Point of Interest (POI) record related to this aircraft
   * status. This will generally represent the location of an aircraft on the ground.
   */
  idPOI?: string;

  /**
   * Array of inventory item(s) for which estimate(s) are available (e.g. AIM-9
   * SIDEWINDER, AIM-120 AMRAAM, AIM-92 STINGER, CHAFF DECOY, FLARE TP 400, etc.).
   * Intended as, but not constrained to, MIL-STD-6016 environment dependent
   * specific/store type designations. This array must be the same length as
   * inventoryMin and inventoryMax.
   */
  inventory?: Array<string>;

  /**
   * Array of the upper bound quantity for each of the inventory items. The values in
   * this array must correspond to position index in the inventory array. This array
   * must be the same length as inventory and inventoryMin.
   */
  inventoryMax?: Array<number>;

  /**
   * Array of the lower bound quantity for each of the inventory items. The values in
   * this array must correspond to position index in the inventory array. This array
   * must be the same length as inventory and inventoryMax.
   */
  inventoryMin?: Array<number>;

  /**
   * Date when the military aircraft inspection was last performed, in ISO 8601 UTC
   * format with millisecond precision.
   */
  lastInspectionDate?: string;

  /**
   * The name or ID of the external user that updated this status.
   */
  lastUpdatedBy?: string;

  /**
   * Military aircraft maintenance point of contact for this aircraft.
   */
  maintPoc?: string;

  /**
   * Indicates the priority of the maintenance effort.
   */
  maintPriority?: string;

  /**
   * The maintenance status of the aircraft.
   */
  maintStatus?: string;

  /**
   * Indicates the maintenance discrepancy that drives the current maintenance
   * status.
   */
  maintStatusDriver?: string;

  /**
   * The time of the last maintenance status update, in ISO 8601 UTC format with
   * millisecond precision.
   */
  maintStatusUpdate?: string;

  /**
   * The Operational Capability of the reported aircraft (ABLE, LOFUEL, UNABLE).
   */
  missionReadiness?: string;

  /**
   * Maintenance pacing remarks assocociated with this aircraft.
   */
  mxRemark?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of the next
   * destination of this aircraft.
   */
  nextICAO?: string;

  /**
   * Optional notes/comments concerning this aircraft status.
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
   * The parking location of this aircraft.
   */
  parkLocation?: string;

  /**
   * The system that designated the parking location (e.g. EMOC, GDSS, PEX, etc.).
   */
  parkLocationSystem?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code at which this aircraft
   * was previously located.
   */
  previousICAO?: string;

  /**
   * The turnaround start time, in ISO 8601 UTC format with millisecond precision.
   */
  taStartTime?: string;

  /**
   * Estimated Time for Completion (ETIC) of an aircraft issue, in ISO 8601 UTC
   * format with millisecond precision. This is the estimated time when the course of
   * action to resolve the issue will be determined.
   */
  troubleshootEtic?: string;

  /**
   * List of unavailable systems that would normally be on this aircraft.
   */
  unavailableSys?: Array<string>;
}

export interface AircraftStatusRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AircraftStatusUpdateParams {
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
   * Unique identifier of the aircraft.
   */
  idAircraft: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * List of additional operational systems on this aircraft beyond what is normally
   * available.
   */
  additionalSys?: Array<string>;

  /**
   * The status of the air-to-air weapon release system (OPERATIONAL,
   * NON-OPERATIONAL, OFF).
   */
  airToAirStatus?: 'OPERATIONAL' | 'NON-OPERATIONAL' | 'OFF';

  /**
   * The status of the air-to-ground weapon release system (OPERATIONAL,
   * NON-OPERATIONAL, OFF).
   */
  airToGroundStatus?: 'OPERATIONAL' | 'NON-OPERATIONAL' | 'OFF';

  /**
   * Aircraft alpha status code that indicates the aircraft maintenance status
   * estimated by the pilot.
   */
  alphaStatusCode?: string;

  /**
   * Alternate Aircraft Identifier provided by source.
   */
  altAircraftId?: string;

  /**
   * The contamination status of the aircraft (e.g. CLEAR, CONTAMINATED,
   * DECONTAMINATED, UNKNOWN, etc.).
   */
  contaminationStatus?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code at which this aircraft
   * is currently located or has most recently departed, if airborne.
   */
  currentICAO?: string;

  /**
   * The current readiness state of the aircraft (e.g. AIRBORNE, ALERTCOCKED,
   * AVAILABLE, BATTLESTATION, RUNWAY ALERT, SUITUP).
   */
  currentState?: string;

  /**
   * The earliest time that turnaround of the aircraft may complete, in ISO 8601 UTC
   * format with millisecond precision.
   */
  earliestTAEndTime?: string;

  /**
   * The Expected Time in Commission (ETIC) for this aircraft, in ISO 8601 UTC format
   * with millisecond precision. This is the estimated time when the issue will be
   * resolved.
   */
  etic?: string;

  /**
   * Current flight phase (e.g. AIR REFUELING, GROUND, LANDING, etc.) of the
   * aircraft.
   */
  flightPhase?: string;

  /**
   * The mass of fuel remaining on the aircraft, in kilograms.
   */
  fuel?: number;

  /**
   * Used in conjunction with the fuel field to indicate either burnable or offload
   * fuel.
   */
  fuelFunction?: string;

  /**
   * The state of the aircraft fuel status (e.g. DELIVERED, DUMPED, EMPTY, FULL,
   * OTHER, REQUESTED, etc.).
   */
  fuelStatus?: string;

  /**
   * US Air Force geographic location code of the airfield where the aircraft is
   * located.
   */
  geoLoc?: string;

  /**
   * The ground status of the aircraft (e.g. ALERT, CREW READY, ENGINE START, HANGAR,
   * etc.).
   */
  groundStatus?: string;

  /**
   * Flag indicating that the aircraft is capable of making at least one gun pass.
   */
  gunCapable?: boolean;

  /**
   * The upper bound of the estimated number of gun rounds available.
   */
  gunRdsMax?: number;

  /**
   * The lower bound of the estimated number of gun rounds available.
   */
  gunRdsMin?: number;

  /**
   * The type of gun rounds available (e.g. 7.62 MM, 20 MM, 25 MM, etc.).
   */
  gunRdsType?: string;

  /**
   * If not airborne, the unique identifier of the installation currently hosting the
   * aircraft.
   */
  idAirfield?: string;

  /**
   * Unique identifier of the Point of Interest (POI) record related to this aircraft
   * status. This will generally represent the location of an aircraft on the ground.
   */
  idPOI?: string;

  /**
   * Array of inventory item(s) for which estimate(s) are available (e.g. AIM-9
   * SIDEWINDER, AIM-120 AMRAAM, AIM-92 STINGER, CHAFF DECOY, FLARE TP 400, etc.).
   * Intended as, but not constrained to, MIL-STD-6016 environment dependent
   * specific/store type designations. This array must be the same length as
   * inventoryMin and inventoryMax.
   */
  inventory?: Array<string>;

  /**
   * Array of the upper bound quantity for each of the inventory items. The values in
   * this array must correspond to position index in the inventory array. This array
   * must be the same length as inventory and inventoryMin.
   */
  inventoryMax?: Array<number>;

  /**
   * Array of the lower bound quantity for each of the inventory items. The values in
   * this array must correspond to position index in the inventory array. This array
   * must be the same length as inventory and inventoryMax.
   */
  inventoryMin?: Array<number>;

  /**
   * Date when the military aircraft inspection was last performed, in ISO 8601 UTC
   * format with millisecond precision.
   */
  lastInspectionDate?: string;

  /**
   * The name or ID of the external user that updated this status.
   */
  lastUpdatedBy?: string;

  /**
   * Military aircraft maintenance point of contact for this aircraft.
   */
  maintPoc?: string;

  /**
   * Indicates the priority of the maintenance effort.
   */
  maintPriority?: string;

  /**
   * The maintenance status of the aircraft.
   */
  maintStatus?: string;

  /**
   * Indicates the maintenance discrepancy that drives the current maintenance
   * status.
   */
  maintStatusDriver?: string;

  /**
   * The time of the last maintenance status update, in ISO 8601 UTC format with
   * millisecond precision.
   */
  maintStatusUpdate?: string;

  /**
   * The Operational Capability of the reported aircraft (ABLE, LOFUEL, UNABLE).
   */
  missionReadiness?: string;

  /**
   * Maintenance pacing remarks assocociated with this aircraft.
   */
  mxRemark?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of the next
   * destination of this aircraft.
   */
  nextICAO?: string;

  /**
   * Optional notes/comments concerning this aircraft status.
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
   * The parking location of this aircraft.
   */
  parkLocation?: string;

  /**
   * The system that designated the parking location (e.g. EMOC, GDSS, PEX, etc.).
   */
  parkLocationSystem?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code at which this aircraft
   * was previously located.
   */
  previousICAO?: string;

  /**
   * The turnaround start time, in ISO 8601 UTC format with millisecond precision.
   */
  taStartTime?: string;

  /**
   * Estimated Time for Completion (ETIC) of an aircraft issue, in ISO 8601 UTC
   * format with millisecond precision. This is the estimated time when the course of
   * action to resolve the issue will be determined.
   */
  troubleshootEtic?: string;

  /**
   * List of unavailable systems that would normally be on this aircraft.
   */
  unavailableSys?: Array<string>;
}

export interface AircraftStatusListParams extends OffsetPageParams {}

export interface AircraftStatusCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AircraftStatusTupleParams {
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

AircraftStatuses.History = History;

export declare namespace AircraftStatuses {
  export {
    type AircraftstatusAbridged as AircraftstatusAbridged,
    type AircraftStatusCountResponse as AircraftStatusCountResponse,
    type AircraftStatusQueryhelpResponse as AircraftStatusQueryhelpResponse,
    type AircraftStatusTupleResponse as AircraftStatusTupleResponse,
    type AircraftstatusAbridgedsOffsetPage as AircraftstatusAbridgedsOffsetPage,
    type AircraftStatusCreateParams as AircraftStatusCreateParams,
    type AircraftStatusRetrieveParams as AircraftStatusRetrieveParams,
    type AircraftStatusUpdateParams as AircraftStatusUpdateParams,
    type AircraftStatusListParams as AircraftStatusListParams,
    type AircraftStatusCountParams as AircraftStatusCountParams,
    type AircraftStatusTupleParams as AircraftStatusTupleParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
