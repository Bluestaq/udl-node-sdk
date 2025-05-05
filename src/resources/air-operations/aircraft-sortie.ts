// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CrewAPI from '../crew';
import * as HistoryAPI from '../sortie-ppr/history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class AircraftSortie extends APIResource {
  /**
   * Service operation to take a single AircraftSortie as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  create(body: AircraftSortieCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/aircraftsortie', {
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
   */
  list(
    query: AircraftSortieListParams,
    options?: RequestOptions,
  ): PagePromise<AircraftsortieAbridgedsOffsetPage, AircraftsortieAbridged> {
    return this._client.getAPIList('/udl/aircraftsortie', OffsetPage<AircraftsortieAbridged>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: AircraftSortieCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/aircraftsortie/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * AircraftSorties as a POST body and ingest into the database. This operation is
   * not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   */
  createBulk(params: AircraftSortieCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/aircraftsortie/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation, then write that data to the
   * Secure Content Store. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  historyAodr(query: AircraftSortieHistoryAodrParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/aircraftsortie/history/aodr', {
      query,
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
   */
  historyCount(query: AircraftSortieHistoryCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/aircraftsortie/history/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  historyQuery(
    query: AircraftSortieHistoryQueryParams,
    options?: RequestOptions,
  ): APIPromise<AircraftSortieHistoryQueryResponse> {
    return this._client.get('/udl/aircraftsortie/history', { query, ...options });
  }
}

export type AircraftsortieAbridgedsOffsetPage = OffsetPage<AircraftsortieAbridged>;

/**
 * Information related to the planning, load, status, and deployment or dispatch of
 * one aircraft to carry out a mission.
 */
export interface AircraftsortieAbridged {
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
   * The scheduled time that the Aircraft sortie is planned to depart, in ISO 8601
   * UTC format with millisecond precision.
   */
  plannedDepTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The actual arrival time, in ISO 8601 UTC format with millisecond precision.
   */
  actualArrTime?: string;

  /**
   * The actual time the Aircraft comes to a complete stop in its parking position,
   * in ISO 8601 UTC format with millisecond precision.
   */
  actualBlockInTime?: string;

  /**
   * The actual time the Aircraft begins to taxi from its parking position, in ISO
   * 8601 UTC format with millisecond precision.
   */
  actualBlockOutTime?: string;

  /**
   * The actual departure time, in ISO 8601 UTC format.
   */
  actualDepTime?: string;

  /**
   * The Automatic Dependent Surveillance-Broadcast (ADS-B) device identifier.
   */
  aircraftADSB?: string;

  /**
   * Alternate Aircraft Identifier provided by source.
   */
  aircraftAltId?: string;

  /**
   * Aircraft event text.
   */
  aircraftEvent?: string;

  /**
   * The aircraft Model Design Series designation assigned to this sortie.
   */
  aircraftMDS?: string;

  /**
   * Remarks concerning the aircraft.
   */
  aircraftRemarks?: string;

  /**
   * The amount of time allowed between launch order and takeoff, in seconds.
   */
  alertStatus?: number;

  /**
   * The Alert Status code.
   */
  alertStatusCode?: string;

  /**
   * The Air Mobility Command (AMC) mission number of the sortie.
   */
  amcMsnNum?: string;

  /**
   * The type of mission (e.g. SAAM, CHNL, etc.).
   */
  amcMsnType?: string;

  /**
   * The arrival Federal Aviation Administration (FAA) code of this sortie.
   */
  arrFAA?: string;

  /**
   * The arrival International Aviation Transport Association (IATA) code of this
   * sortie.
   */
  arrIATA?: string;

  /**
   * The arrival International Civil Aviation Organization (ICAO) of this sortie.
   */
  arrICAO?: string;

  /**
   * The itinerary identifier of the arrival location.
   */
  arrItinerary?: number;

  /**
   * Purpose code at the arrival location of this sortie.
   */
  arrPurposeCode?: string;

  /**
   * The call sign assigned to the aircraft on this sortie.
   */
  callSign?: string;

  /**
   * Description of the cargo configuration (e.g. C-1, C-2, C-3, DV-1, DV-2, AE-1,
   * etc.) currently on board the aircraft. Configuration meanings are determined by
   * the data source.
   */
  cargoConfig?: string;

  /**
   * The last name of the aircraft commander.
   */
  commanderName?: string;

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
   * The current state of this sortie.
   */
  currentState?: string;

  /**
   * The primary delay code.
   */
  delayCode?: string;

  /**
   * The departure Federal Aviation Administration (FAA) code of this sortie.
   */
  depFAA?: string;

  /**
   * The departure International Aviation Transport Association (IATA) code of this
   * sortie.
   */
  depIATA?: string;

  /**
   * The departure International Civil Aviation Organization (ICAO) of this sortie.
   */
  depICAO?: string;

  /**
   * The itinerary identifier of the departure location.
   */
  depItinerary?: number;

  /**
   * Purpose code at the departure location of this sortie.
   */
  depPurposeCode?: string;

  /**
   * Due home date by which the aircraft must return to its home station, in ISO 8601
   * UTC format with millisecond precision.
   */
  dhd?: string;

  /**
   * Reason the aircraft must return to home station by its due home date.
   */
  dhdReason?: string;

  /**
   * The current estimated time that the Aircraft is planned to arrive, in ISO 8601
   * UTC format with millisecond precision.
   */
  estArrTime?: string;

  /**
   * The estimated time the Aircraft will come to a complete stop in its parking
   * position, in ISO 8601 UTC format with millisecond precision.
   */
  estBlockInTime?: string;

  /**
   * The estimated time the Aircraft will begin to taxi from its parking position, in
   * ISO 8601 UTC format with millisecond precision.
   */
  estBlockOutTime?: string;

  /**
   * The current estimated time that the Aircraft is planned to depart, in ISO 8601
   * UTC format with millisecond precision.
   */
  estDepTime?: string;

  /**
   * Name of the uploaded PDF.
   */
  filename?: string;

  /**
   * Size of the supporting PDF, in bytes.
   */
  filesize?: number;

  /**
   * The planned flight time for this sortie, in minutes.
   */
  flightTime?: number;

  /**
   * Desk phone number of the flight manager assigned to the sortie. Null when no
   * flight manager is assigned.
   */
  fmDeskNum?: string;

  /**
   * Last name of the flight manager assigned to the sortie. Null when no flight
   * manager is assigned.
   */
  fmName?: string;

  /**
   * Mass of fuel required for this leg of the sortie, in kilograms.
   */
  fuelReq?: number;

  /**
   * Scheduled ground time, in minutes.
   */
  gndTime?: number;

  /**
   * Unique identifier of the aircraft.
   */
  idAircraft?: string;

  /**
   * The unique identifier of the mission to which this sortie is assigned.
   */
  idMission?: string;

  /**
   * Joint Chiefs of Staff priority of this sortie.
   */
  jcsPriority?: string;

  /**
   * The leg number of this sortie.
   */
  legNum?: number;

  /**
   * The external system line number of this sortie.
   */
  lineNumber?: number;

  /**
   * The mission ID according to the source system.
   */
  missionId?: string;

  /**
   * Time the associated mission data was last updated in relation to the aircraft
   * assignment, in ISO 8601 UTC format with millisecond precision. If this time is
   * coming from an external system, it may not sync with the latest mission time
   * associated to this record.
   */
  missionUpdate?: string;

  /**
   * Remarks concerning the sortie objective.
   */
  objectiveRemarks?: string;

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
   * The sortie identifier provided by the originating source.
   */
  origSortieId?: string;

  /**
   * Liquid oxygen onboard the aircraft for the crew compartment, in liters.
   */
  oxyOnCrew?: number;

  /**
   * Liquid oxygen onboard the aircraft for the troop compartment, in liters.
   */
  oxyOnPax?: number;

  /**
   * Liquid oxygen required on the aircraft for the crew compartment, in liters.
   */
  oxyReqCrew?: number;

  /**
   * Liquid oxygen required on the aircraft for the troop compartment, in liters.
   */
  oxyReqPax?: number;

  /**
   * The status of the supporting document.
   */
  paperStatus?: 'PUBLISHED' | 'DELETED' | 'UPDATED' | 'READ';

  /**
   * The version number of the crew paper.
   */
  papersVersion?: string;

  /**
   * The POI parking location.
   */
  parkingLoc?: string;

  /**
   * The number of passengers tasked for this sortie.
   */
  passengers?: number;

  /**
   * The scheduled time that the Aircraft sortie is planned to arrive, in ISO 8601
   * UTC format with millisecond precision.
   */
  plannedArrTime?: string;

  /**
   * The prior permission required (PPR) status.
   */
  pprStatus?: 'NOT REQUIRED' | 'REQUIRED NOT REQUESTED' | 'GRANTED' | 'PENDING';

  /**
   * The planned primary Standard Conventional Load of the aircraft for this sortie.
   */
  primarySCL?: string;

  /**
   * When crew papers are associated to this sortie, the system updates this value.
   * This field is the URI location in the document repository of that raw file. To
   * download the raw file, prepend https://udl-hostname/scs/download?id= to this
   * field's value.
   */
  rawFileURI?: string;

  /**
   * Aircraft configuration required for the mission.
   */
  reqConfig?: string;

  /**
   * Remarks concerning the results of this sortie.
   */
  resultRemarks?: string;

  /**
   * Type of Ravens required for this sortie (N - None, R - Raven (Security Team)
   * required, C6 - Consider ravens (Ground time over 6 hours), R6 - Ravens required
   * (Ground time over 6 hours)).
   */
  rvnReq?: 'N' | 'R' | 'C6' | 'R6';

  /**
   * Remarks concerning the schedule.
   */
  scheduleRemarks?: string;

  /**
   * The planned secondary Standard Conventional Load of the aircraft for this
   * sortie.
   */
  secondarySCL?: string;

  /**
   * Indicates the group responsible for recording the completion time of the next
   * event in the sequence of events assigned to this sortie (e.g. OPS - Operations,
   * MX - Maintenance, TR - Transportation, etc.).
   */
  soe?: string;

  /**
   * The scheduled UTC date for this sortie, in ISO 8601 date-only format (ex.
   * YYYY-MM-DD).
   */
  sortieDate?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The tail number of the aircraft assigned to this sortie.
   */
  tailNumber?: string;
}

/**
 * Information related to the planning, load, status, and deployment or dispatch of
 * one aircraft to carry out a mission.
 */
export interface AircraftsortieFull {
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
   * The scheduled time that the Aircraft sortie is planned to depart, in ISO 8601
   * UTC format with millisecond precision.
   */
  plannedDepTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The actual arrival time, in ISO 8601 UTC format with millisecond precision.
   */
  actualArrTime?: string;

  /**
   * The actual time the Aircraft comes to a complete stop in its parking position,
   * in ISO 8601 UTC format with millisecond precision.
   */
  actualBlockInTime?: string;

  /**
   * The actual time the Aircraft begins to taxi from its parking position, in ISO
   * 8601 UTC format with millisecond precision.
   */
  actualBlockOutTime?: string;

  /**
   * The actual departure time, in ISO 8601 UTC format.
   */
  actualDepTime?: string;

  /**
   * The Automatic Dependent Surveillance-Broadcast (ADS-B) device identifier.
   */
  aircraftADSB?: string;

  /**
   * Alternate Aircraft Identifier provided by source.
   */
  aircraftAltId?: string;

  /**
   * Aircraft event text.
   */
  aircraftEvent?: string;

  /**
   * The aircraft Model Design Series designation assigned to this sortie.
   */
  aircraftMDS?: string;

  /**
   * Remarks concerning the aircraft.
   */
  aircraftRemarks?: string;

  /**
   * The amount of time allowed between launch order and takeoff, in seconds.
   */
  alertStatus?: number;

  /**
   * The Alert Status code.
   */
  alertStatusCode?: string;

  /**
   * The Air Mobility Command (AMC) mission number of the sortie.
   */
  amcMsnNum?: string;

  /**
   * The type of mission (e.g. SAAM, CHNL, etc.).
   */
  amcMsnType?: string;

  /**
   * The arrival Federal Aviation Administration (FAA) code of this sortie.
   */
  arrFAA?: string;

  /**
   * The arrival International Aviation Transport Association (IATA) code of this
   * sortie.
   */
  arrIATA?: string;

  /**
   * The arrival International Civil Aviation Organization (ICAO) of this sortie.
   */
  arrICAO?: string;

  /**
   * The itinerary identifier of the arrival location.
   */
  arrItinerary?: number;

  /**
   * Purpose code at the arrival location of this sortie.
   */
  arrPurposeCode?: string;

  /**
   * The call sign assigned to the aircraft on this sortie.
   */
  callSign?: string;

  /**
   * Description of the cargo configuration (e.g. C-1, C-2, C-3, DV-1, DV-2, AE-1,
   * etc.) currently on board the aircraft. Configuration meanings are determined by
   * the data source.
   */
  cargoConfig?: string;

  /**
   * The last name of the aircraft commander.
   */
  commanderName?: string;

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
   * Crew Services.
   */
  crew?: CrewAPI.CrewFull;

  /**
   * The current state of this sortie.
   */
  currentState?: string;

  /**
   * The primary delay code.
   */
  delayCode?: string;

  /**
   * The departure Federal Aviation Administration (FAA) code of this sortie.
   */
  depFAA?: string;

  /**
   * The departure International Aviation Transport Association (IATA) code of this
   * sortie.
   */
  depIATA?: string;

  /**
   * The departure International Civil Aviation Organization (ICAO) of this sortie.
   */
  depICAO?: string;

  /**
   * The itinerary identifier of the departure location.
   */
  depItinerary?: number;

  /**
   * Purpose code at the departure location of this sortie.
   */
  depPurposeCode?: string;

  /**
   * Due home date by which the aircraft must return to its home station, in ISO 8601
   * UTC format with millisecond precision.
   */
  dhd?: string;

  /**
   * Reason the aircraft must return to home station by its due home date.
   */
  dhdReason?: string;

  /**
   * The current estimated time that the Aircraft is planned to arrive, in ISO 8601
   * UTC format with millisecond precision.
   */
  estArrTime?: string;

  /**
   * The estimated time the Aircraft will come to a complete stop in its parking
   * position, in ISO 8601 UTC format with millisecond precision.
   */
  estBlockInTime?: string;

  /**
   * The estimated time the Aircraft will begin to taxi from its parking position, in
   * ISO 8601 UTC format with millisecond precision.
   */
  estBlockOutTime?: string;

  /**
   * The current estimated time that the Aircraft is planned to depart, in ISO 8601
   * UTC format with millisecond precision.
   */
  estDepTime?: string;

  /**
   * Name of the uploaded PDF.
   */
  filename?: string;

  /**
   * Size of the supporting PDF, in bytes.
   */
  filesize?: number;

  /**
   * The planned flight time for this sortie, in minutes.
   */
  flightTime?: number;

  /**
   * Desk phone number of the flight manager assigned to the sortie. Null when no
   * flight manager is assigned.
   */
  fmDeskNum?: string;

  /**
   * Last name of the flight manager assigned to the sortie. Null when no flight
   * manager is assigned.
   */
  fmName?: string;

  /**
   * Mass of fuel required for this leg of the sortie, in kilograms.
   */
  fuelReq?: number;

  /**
   * Scheduled ground time, in minutes.
   */
  gndTime?: number;

  /**
   * Unique identifier of the aircraft.
   */
  idAircraft?: string;

  /**
   * The unique identifier of the mission to which this sortie is assigned.
   */
  idMission?: string;

  /**
   * Joint Chiefs of Staff priority of this sortie.
   */
  jcsPriority?: string;

  /**
   * The leg number of this sortie.
   */
  legNum?: number;

  /**
   * The external system line number of this sortie.
   */
  lineNumber?: number;

  /**
   * The mission ID according to the source system.
   */
  missionId?: string;

  /**
   * Time the associated mission data was last updated in relation to the aircraft
   * assignment, in ISO 8601 UTC format with millisecond precision. If this time is
   * coming from an external system, it may not sync with the latest mission time
   * associated to this record.
   */
  missionUpdate?: string;

  /**
   * Remarks concerning the sortie objective.
   */
  objectiveRemarks?: string;

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
   * The sortie identifier provided by the originating source.
   */
  origSortieId?: string;

  /**
   * Liquid oxygen onboard the aircraft for the crew compartment, in liters.
   */
  oxyOnCrew?: number;

  /**
   * Liquid oxygen onboard the aircraft for the troop compartment, in liters.
   */
  oxyOnPax?: number;

  /**
   * Liquid oxygen required on the aircraft for the crew compartment, in liters.
   */
  oxyReqCrew?: number;

  /**
   * Liquid oxygen required on the aircraft for the troop compartment, in liters.
   */
  oxyReqPax?: number;

  /**
   * The status of the supporting document.
   */
  paperStatus?: 'PUBLISHED' | 'DELETED' | 'UPDATED' | 'READ';

  /**
   * The version number of the crew paper.
   */
  papersVersion?: string;

  /**
   * The POI parking location.
   */
  parkingLoc?: string;

  /**
   * The number of passengers tasked for this sortie.
   */
  passengers?: number;

  /**
   * The scheduled time that the Aircraft sortie is planned to arrive, in ISO 8601
   * UTC format with millisecond precision.
   */
  plannedArrTime?: string;

  /**
   * The prior permission required (PPR) status.
   */
  pprStatus?: 'NOT REQUIRED' | 'REQUIRED NOT REQUESTED' | 'GRANTED' | 'PENDING';

  /**
   * The planned primary Standard Conventional Load of the aircraft for this sortie.
   */
  primarySCL?: string;

  /**
   * When crew papers are associated to this sortie, the system updates this value.
   * This field is the URI location in the document repository of that raw file. To
   * download the raw file, prepend https://udl-hostname/scs/download?id= to this
   * field's value.
   */
  rawFileURI?: string;

  /**
   * Aircraft configuration required for the mission.
   */
  reqConfig?: string;

  /**
   * Remarks concerning the results of this sortie.
   */
  resultRemarks?: string;

  /**
   * Type of Ravens required for this sortie (N - None, R - Raven (Security Team)
   * required, C6 - Consider ravens (Ground time over 6 hours), R6 - Ravens required
   * (Ground time over 6 hours)).
   */
  rvnReq?: 'N' | 'R' | 'C6' | 'R6';

  /**
   * Remarks concerning the schedule.
   */
  scheduleRemarks?: string;

  /**
   * The planned secondary Standard Conventional Load of the aircraft for this
   * sortie.
   */
  secondarySCL?: string;

  /**
   * Indicates the group responsible for recording the completion time of the next
   * event in the sequence of events assigned to this sortie (e.g. OPS - Operations,
   * MX - Maintenance, TR - Transportation, etc.).
   */
  soe?: string;

  /**
   * The scheduled UTC date for this sortie, in ISO 8601 date-only format (ex.
   * YYYY-MM-DD).
   */
  sortieDate?: string;

  sortiePPR?: Array<HistoryAPI.SortiePprFull>;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The tail number of the aircraft assigned to this sortie.
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

export type AircraftSortieCountResponse = string;

export type AircraftSortieHistoryCountResponse = string;

export type AircraftSortieHistoryQueryResponse = Array<AircraftsortieFull>;

export interface AircraftSortieCreateParams {
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
   * The scheduled time that the Aircraft sortie is planned to depart, in ISO 8601
   * UTC format with millisecond precision.
   */
  plannedDepTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The actual arrival time, in ISO 8601 UTC format with millisecond precision.
   */
  actualArrTime?: string;

  /**
   * The actual time the Aircraft comes to a complete stop in its parking position,
   * in ISO 8601 UTC format with millisecond precision.
   */
  actualBlockInTime?: string;

  /**
   * The actual time the Aircraft begins to taxi from its parking position, in ISO
   * 8601 UTC format with millisecond precision.
   */
  actualBlockOutTime?: string;

  /**
   * The actual departure time, in ISO 8601 UTC format.
   */
  actualDepTime?: string;

  /**
   * The Automatic Dependent Surveillance-Broadcast (ADS-B) device identifier.
   */
  aircraftADSB?: string;

  /**
   * Alternate Aircraft Identifier provided by source.
   */
  aircraftAltId?: string;

  /**
   * Aircraft event text.
   */
  aircraftEvent?: string;

  /**
   * The aircraft Model Design Series designation assigned to this sortie.
   */
  aircraftMDS?: string;

  /**
   * Remarks concerning the aircraft.
   */
  aircraftRemarks?: string;

  /**
   * The amount of time allowed between launch order and takeoff, in seconds.
   */
  alertStatus?: number;

  /**
   * The Alert Status code.
   */
  alertStatusCode?: string;

  /**
   * The Air Mobility Command (AMC) mission number of the sortie.
   */
  amcMsnNum?: string;

  /**
   * The type of mission (e.g. SAAM, CHNL, etc.).
   */
  amcMsnType?: string;

  /**
   * The arrival Federal Aviation Administration (FAA) code of this sortie.
   */
  arrFAA?: string;

  /**
   * The arrival International Aviation Transport Association (IATA) code of this
   * sortie.
   */
  arrIATA?: string;

  /**
   * The arrival International Civil Aviation Organization (ICAO) of this sortie.
   */
  arrICAO?: string;

  /**
   * The itinerary identifier of the arrival location.
   */
  arrItinerary?: number;

  /**
   * Purpose code at the arrival location of this sortie.
   */
  arrPurposeCode?: string;

  /**
   * The call sign assigned to the aircraft on this sortie.
   */
  callSign?: string;

  /**
   * Description of the cargo configuration (e.g. C-1, C-2, C-3, DV-1, DV-2, AE-1,
   * etc.) currently on board the aircraft. Configuration meanings are determined by
   * the data source.
   */
  cargoConfig?: string;

  /**
   * The last name of the aircraft commander.
   */
  commanderName?: string;

  /**
   * The current state of this sortie.
   */
  currentState?: string;

  /**
   * The primary delay code.
   */
  delayCode?: string;

  /**
   * The departure Federal Aviation Administration (FAA) code of this sortie.
   */
  depFAA?: string;

  /**
   * The departure International Aviation Transport Association (IATA) code of this
   * sortie.
   */
  depIATA?: string;

  /**
   * The departure International Civil Aviation Organization (ICAO) of this sortie.
   */
  depICAO?: string;

  /**
   * The itinerary identifier of the departure location.
   */
  depItinerary?: number;

  /**
   * Purpose code at the departure location of this sortie.
   */
  depPurposeCode?: string;

  /**
   * Due home date by which the aircraft must return to its home station, in ISO 8601
   * UTC format with millisecond precision.
   */
  dhd?: string;

  /**
   * Reason the aircraft must return to home station by its due home date.
   */
  dhdReason?: string;

  /**
   * The current estimated time that the Aircraft is planned to arrive, in ISO 8601
   * UTC format with millisecond precision.
   */
  estArrTime?: string;

  /**
   * The estimated time the Aircraft will come to a complete stop in its parking
   * position, in ISO 8601 UTC format with millisecond precision.
   */
  estBlockInTime?: string;

  /**
   * The estimated time the Aircraft will begin to taxi from its parking position, in
   * ISO 8601 UTC format with millisecond precision.
   */
  estBlockOutTime?: string;

  /**
   * The current estimated time that the Aircraft is planned to depart, in ISO 8601
   * UTC format with millisecond precision.
   */
  estDepTime?: string;

  /**
   * The planned flight time for this sortie, in minutes.
   */
  flightTime?: number;

  /**
   * Desk phone number of the flight manager assigned to the sortie. Null when no
   * flight manager is assigned.
   */
  fmDeskNum?: string;

  /**
   * Last name of the flight manager assigned to the sortie. Null when no flight
   * manager is assigned.
   */
  fmName?: string;

  /**
   * Mass of fuel required for this leg of the sortie, in kilograms.
   */
  fuelReq?: number;

  /**
   * Scheduled ground time, in minutes.
   */
  gndTime?: number;

  /**
   * Unique identifier of the aircraft.
   */
  idAircraft?: string;

  /**
   * The unique identifier of the mission to which this sortie is assigned.
   */
  idMission?: string;

  /**
   * Joint Chiefs of Staff priority of this sortie.
   */
  jcsPriority?: string;

  /**
   * The leg number of this sortie.
   */
  legNum?: number;

  /**
   * The external system line number of this sortie.
   */
  lineNumber?: number;

  /**
   * The mission ID according to the source system.
   */
  missionId?: string;

  /**
   * Time the associated mission data was last updated in relation to the aircraft
   * assignment, in ISO 8601 UTC format with millisecond precision. If this time is
   * coming from an external system, it may not sync with the latest mission time
   * associated to this record.
   */
  missionUpdate?: string;

  /**
   * Remarks concerning the sortie objective.
   */
  objectiveRemarks?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The sortie identifier provided by the originating source.
   */
  origSortieId?: string;

  /**
   * Liquid oxygen onboard the aircraft for the crew compartment, in liters.
   */
  oxyOnCrew?: number;

  /**
   * Liquid oxygen onboard the aircraft for the troop compartment, in liters.
   */
  oxyOnPax?: number;

  /**
   * Liquid oxygen required on the aircraft for the crew compartment, in liters.
   */
  oxyReqCrew?: number;

  /**
   * Liquid oxygen required on the aircraft for the troop compartment, in liters.
   */
  oxyReqPax?: number;

  /**
   * The POI parking location.
   */
  parkingLoc?: string;

  /**
   * The number of passengers tasked for this sortie.
   */
  passengers?: number;

  /**
   * The scheduled time that the Aircraft sortie is planned to arrive, in ISO 8601
   * UTC format with millisecond precision.
   */
  plannedArrTime?: string;

  /**
   * The prior permission required (PPR) status.
   */
  pprStatus?: 'NOT REQUIRED' | 'REQUIRED NOT REQUESTED' | 'GRANTED' | 'PENDING';

  /**
   * The planned primary Standard Conventional Load of the aircraft for this sortie.
   */
  primarySCL?: string;

  /**
   * Aircraft configuration required for the mission.
   */
  reqConfig?: string;

  /**
   * Remarks concerning the results of this sortie.
   */
  resultRemarks?: string;

  /**
   * Type of Ravens required for this sortie (N - None, R - Raven (Security Team)
   * required, C6 - Consider ravens (Ground time over 6 hours), R6 - Ravens required
   * (Ground time over 6 hours)).
   */
  rvnReq?: 'N' | 'R' | 'C6' | 'R6';

  /**
   * Remarks concerning the schedule.
   */
  scheduleRemarks?: string;

  /**
   * The planned secondary Standard Conventional Load of the aircraft for this
   * sortie.
   */
  secondarySCL?: string;

  /**
   * Indicates the group responsible for recording the completion time of the next
   * event in the sequence of events assigned to this sortie (e.g. OPS - Operations,
   * MX - Maintenance, TR - Transportation, etc.).
   */
  soe?: string;

  /**
   * The scheduled UTC date for this sortie, in ISO 8601 date-only format (ex.
   * YYYY-MM-DD).
   */
  sortieDate?: string;

  /**
   * The tail number of the aircraft assigned to this sortie.
   */
  tailNumber?: string;
}

export interface AircraftSortieListParams extends OffsetPageParams {
  /**
   * The scheduled time that the Aircraft sortie is planned to depart, in ISO 8601
   * UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  plannedDepTime: string;
}

export interface AircraftSortieCountParams {
  /**
   * The scheduled time that the Aircraft sortie is planned to depart, in ISO 8601
   * UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  plannedDepTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface AircraftSortieCreateBulkParams {
  body: Array<AircraftSortieCreateBulkParams.Body>;
}

export namespace AircraftSortieCreateBulkParams {
  /**
   * Information related to the planning, load, status, and deployment or dispatch of
   * one aircraft to carry out a mission.
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
     * The scheduled time that the Aircraft sortie is planned to depart, in ISO 8601
     * UTC format with millisecond precision.
     */
    plannedDepTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The actual arrival time, in ISO 8601 UTC format with millisecond precision.
     */
    actualArrTime?: string;

    /**
     * The actual time the Aircraft comes to a complete stop in its parking position,
     * in ISO 8601 UTC format with millisecond precision.
     */
    actualBlockInTime?: string;

    /**
     * The actual time the Aircraft begins to taxi from its parking position, in ISO
     * 8601 UTC format with millisecond precision.
     */
    actualBlockOutTime?: string;

    /**
     * The actual departure time, in ISO 8601 UTC format.
     */
    actualDepTime?: string;

    /**
     * The Automatic Dependent Surveillance-Broadcast (ADS-B) device identifier.
     */
    aircraftADSB?: string;

    /**
     * Alternate Aircraft Identifier provided by source.
     */
    aircraftAltId?: string;

    /**
     * Aircraft event text.
     */
    aircraftEvent?: string;

    /**
     * The aircraft Model Design Series designation assigned to this sortie.
     */
    aircraftMDS?: string;

    /**
     * Remarks concerning the aircraft.
     */
    aircraftRemarks?: string;

    /**
     * The amount of time allowed between launch order and takeoff, in seconds.
     */
    alertStatus?: number;

    /**
     * The Alert Status code.
     */
    alertStatusCode?: string;

    /**
     * The Air Mobility Command (AMC) mission number of the sortie.
     */
    amcMsnNum?: string;

    /**
     * The type of mission (e.g. SAAM, CHNL, etc.).
     */
    amcMsnType?: string;

    /**
     * The arrival Federal Aviation Administration (FAA) code of this sortie.
     */
    arrFAA?: string;

    /**
     * The arrival International Aviation Transport Association (IATA) code of this
     * sortie.
     */
    arrIATA?: string;

    /**
     * The arrival International Civil Aviation Organization (ICAO) of this sortie.
     */
    arrICAO?: string;

    /**
     * The itinerary identifier of the arrival location.
     */
    arrItinerary?: number;

    /**
     * Purpose code at the arrival location of this sortie.
     */
    arrPurposeCode?: string;

    /**
     * The call sign assigned to the aircraft on this sortie.
     */
    callSign?: string;

    /**
     * Description of the cargo configuration (e.g. C-1, C-2, C-3, DV-1, DV-2, AE-1,
     * etc.) currently on board the aircraft. Configuration meanings are determined by
     * the data source.
     */
    cargoConfig?: string;

    /**
     * The last name of the aircraft commander.
     */
    commanderName?: string;

    /**
     * The current state of this sortie.
     */
    currentState?: string;

    /**
     * The primary delay code.
     */
    delayCode?: string;

    /**
     * The departure Federal Aviation Administration (FAA) code of this sortie.
     */
    depFAA?: string;

    /**
     * The departure International Aviation Transport Association (IATA) code of this
     * sortie.
     */
    depIATA?: string;

    /**
     * The departure International Civil Aviation Organization (ICAO) of this sortie.
     */
    depICAO?: string;

    /**
     * The itinerary identifier of the departure location.
     */
    depItinerary?: number;

    /**
     * Purpose code at the departure location of this sortie.
     */
    depPurposeCode?: string;

    /**
     * Due home date by which the aircraft must return to its home station, in ISO 8601
     * UTC format with millisecond precision.
     */
    dhd?: string;

    /**
     * Reason the aircraft must return to home station by its due home date.
     */
    dhdReason?: string;

    /**
     * The current estimated time that the Aircraft is planned to arrive, in ISO 8601
     * UTC format with millisecond precision.
     */
    estArrTime?: string;

    /**
     * The estimated time the Aircraft will come to a complete stop in its parking
     * position, in ISO 8601 UTC format with millisecond precision.
     */
    estBlockInTime?: string;

    /**
     * The estimated time the Aircraft will begin to taxi from its parking position, in
     * ISO 8601 UTC format with millisecond precision.
     */
    estBlockOutTime?: string;

    /**
     * The current estimated time that the Aircraft is planned to depart, in ISO 8601
     * UTC format with millisecond precision.
     */
    estDepTime?: string;

    /**
     * The planned flight time for this sortie, in minutes.
     */
    flightTime?: number;

    /**
     * Desk phone number of the flight manager assigned to the sortie. Null when no
     * flight manager is assigned.
     */
    fmDeskNum?: string;

    /**
     * Last name of the flight manager assigned to the sortie. Null when no flight
     * manager is assigned.
     */
    fmName?: string;

    /**
     * Mass of fuel required for this leg of the sortie, in kilograms.
     */
    fuelReq?: number;

    /**
     * Scheduled ground time, in minutes.
     */
    gndTime?: number;

    /**
     * Unique identifier of the aircraft.
     */
    idAircraft?: string;

    /**
     * The unique identifier of the mission to which this sortie is assigned.
     */
    idMission?: string;

    /**
     * Joint Chiefs of Staff priority of this sortie.
     */
    jcsPriority?: string;

    /**
     * The leg number of this sortie.
     */
    legNum?: number;

    /**
     * The external system line number of this sortie.
     */
    lineNumber?: number;

    /**
     * The mission ID according to the source system.
     */
    missionId?: string;

    /**
     * Time the associated mission data was last updated in relation to the aircraft
     * assignment, in ISO 8601 UTC format with millisecond precision. If this time is
     * coming from an external system, it may not sync with the latest mission time
     * associated to this record.
     */
    missionUpdate?: string;

    /**
     * Remarks concerning the sortie objective.
     */
    objectiveRemarks?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The sortie identifier provided by the originating source.
     */
    origSortieId?: string;

    /**
     * Liquid oxygen onboard the aircraft for the crew compartment, in liters.
     */
    oxyOnCrew?: number;

    /**
     * Liquid oxygen onboard the aircraft for the troop compartment, in liters.
     */
    oxyOnPax?: number;

    /**
     * Liquid oxygen required on the aircraft for the crew compartment, in liters.
     */
    oxyReqCrew?: number;

    /**
     * Liquid oxygen required on the aircraft for the troop compartment, in liters.
     */
    oxyReqPax?: number;

    /**
     * The POI parking location.
     */
    parkingLoc?: string;

    /**
     * The number of passengers tasked for this sortie.
     */
    passengers?: number;

    /**
     * The scheduled time that the Aircraft sortie is planned to arrive, in ISO 8601
     * UTC format with millisecond precision.
     */
    plannedArrTime?: string;

    /**
     * The prior permission required (PPR) status.
     */
    pprStatus?: 'NOT REQUIRED' | 'REQUIRED NOT REQUESTED' | 'GRANTED' | 'PENDING';

    /**
     * The planned primary Standard Conventional Load of the aircraft for this sortie.
     */
    primarySCL?: string;

    /**
     * Aircraft configuration required for the mission.
     */
    reqConfig?: string;

    /**
     * Remarks concerning the results of this sortie.
     */
    resultRemarks?: string;

    /**
     * Type of Ravens required for this sortie (N - None, R - Raven (Security Team)
     * required, C6 - Consider ravens (Ground time over 6 hours), R6 - Ravens required
     * (Ground time over 6 hours)).
     */
    rvnReq?: 'N' | 'R' | 'C6' | 'R6';

    /**
     * Remarks concerning the schedule.
     */
    scheduleRemarks?: string;

    /**
     * The planned secondary Standard Conventional Load of the aircraft for this
     * sortie.
     */
    secondarySCL?: string;

    /**
     * Indicates the group responsible for recording the completion time of the next
     * event in the sequence of events assigned to this sortie (e.g. OPS - Operations,
     * MX - Maintenance, TR - Transportation, etc.).
     */
    soe?: string;

    /**
     * The scheduled UTC date for this sortie, in ISO 8601 date-only format (ex.
     * YYYY-MM-DD).
     */
    sortieDate?: string;

    /**
     * The tail number of the aircraft assigned to this sortie.
     */
    tailNumber?: string;
  }
}

export interface AircraftSortieHistoryAodrParams {
  /**
   * The scheduled time that the Aircraft sortie is planned to depart, in ISO 8601
   * UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  plannedDepTime: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * optional, notification method for the created file link. When omitted, EMAIL is
   * assumed. Current valid values are: EMAIL, SMS.
   */
  notification?: string;

  /**
   * optional, field delimiter when the created file is not JSON. Must be a single
   * character chosen from this set: (',', ';', ':', '|'). When omitted, "," is used.
   * It is strongly encouraged that your field delimiter be a character unlikely to
   * occur within the data.
   */
  outputDelimiter?: string;

  /**
   * optional, output format for the file. When omitted, JSON is assumed. Current
   * valid values are: JSON and CSV.
   */
  outputFormat?: string;
}

export interface AircraftSortieHistoryCountParams {
  /**
   * The scheduled time that the Aircraft sortie is planned to depart, in ISO 8601
   * UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  plannedDepTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface AircraftSortieHistoryQueryParams {
  /**
   * The scheduled time that the Aircraft sortie is planned to depart, in ISO 8601
   * UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  plannedDepTime: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  firstResult?: number;

  maxResults?: number;
}

export declare namespace AircraftSortie {
  export {
    type AircraftsortieAbridged as AircraftsortieAbridged,
    type AircraftsortieFull as AircraftsortieFull,
    type AircraftSortieCountResponse as AircraftSortieCountResponse,
    type AircraftSortieHistoryCountResponse as AircraftSortieHistoryCountResponse,
    type AircraftSortieHistoryQueryResponse as AircraftSortieHistoryQueryResponse,
    type AircraftsortieAbridgedsOffsetPage as AircraftsortieAbridgedsOffsetPage,
    type AircraftSortieCreateParams as AircraftSortieCreateParams,
    type AircraftSortieListParams as AircraftSortieListParams,
    type AircraftSortieCountParams as AircraftSortieCountParams,
    type AircraftSortieCreateBulkParams as AircraftSortieCreateBulkParams,
    type AircraftSortieHistoryAodrParams as AircraftSortieHistoryAodrParams,
    type AircraftSortieHistoryCountParams as AircraftSortieHistoryCountParams,
    type AircraftSortieHistoryQueryParams as AircraftSortieHistoryQueryParams,
  };
}
