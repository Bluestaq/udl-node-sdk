// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import { History, HistoryAodrParams, HistoryListParams } from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class AIs extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(query: AIListParams, options?: RequestOptions): PagePromise<AIsAbridgedsOffsetPage, AIsAbridged> {
    return this._client.getAPIList('/udl/ais', OffsetPage<AIsAbridged>, { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: AICountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/ais/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of AIS
   * records as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   */
  createBulk(params: AICreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/ais/createBulk', {
      body: body,
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
  historyCount(query: AIHistoryCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/ais/history/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<AIQueryhelpResponse> {
    return this._client.get('/udl/ais/queryhelp', options);
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
  tuple(query: AITupleParams, options?: RequestOptions): APIPromise<AITupleResponse> {
    return this._client.get('/udl/ais/tuple', { query, ...options });
  }
}

export type AIsAbridgedsOffsetPage = OffsetPage<AIsAbridged>;

/**
 * Self-reported information obtained from Automatic Identification System (AIS)
 * equipment. This contains information such as unique identification, status,
 * position, course, and speed. The AIS is an automatic tracking system that uses
 * transceivers on ships and is used by vessel traffic services. Although
 * technically and operationally distinct, the AIS system is analogous to ADS-B
 * that performs a similar function for aircraft. AIS is intended to assist a
 * vessel's watchstanding officers and allow maritime authorities to track and
 * monitor vessel movements. AIS integrates a standardized VHF transceiver with a
 * positioning system such as Global Positioning System receiver, with other
 * electronic navigation sensors, such as gyrocompass or rate of turn indicator.
 * Vessels fitted with AIS transceivers can be tracked by AIS base stations located
 * along coast lines or, when out of range of terrestrial networks, through a
 * growing number of satellites that are fitted with special AIS receivers which
 * are capable of deconflicting a large number of signatures.
 */
export interface AIsAbridged {
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
   * The timestamp that the vessel position was recorded, in ISO 8601 UTC format.
   */
  ts: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The reference dimensions of the vessel, reported as [A, B, C, D], in meters.
   * Where the array values represent the distance fore (A), aft (B), to port (C),
   * and to starboard (D) of the navigation antenna. Array with values A = C = 0 and
   * B, D > 0 indicate the length (B) and width (D) of the vessel without antenna
   * position reference.
   */
  antennaRefDimensions?: Array<number>;

  /**
   * The average speed, in kilometers/hour, calculated for the subject vessel during
   * the latest voyage (port to port).
   */
  avgSpeed?: number;

  /**
   * A uniquely designated identifier for the vessel's transmitter station.
   */
  callSign?: string;

  /**
   * The reported cargo type. Intended as, but not constrained to, the USCG NAVCEN
   * AIS cargo definitions. Users should refer to USCG Navigation Center
   * documentation for specific definitions associated with ship and cargo types.
   * USCG NAVCEN documentation may be found at https://www.navcen.uscg.gov.
   */
  cargoType?: string;

  /**
   * The course-over-ground reported by the vessel, in degrees.
   */
  course?: number;

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
   * The US Geographic Unique Identifier of the current port hosting the vessel.
   */
  currentPortGUID?: string;

  /**
   * The UN Location Code of the current port hosting the vessel.
   */
  currentPortLOCODE?: string;

  /**
   * The destination of the vessel according to the AIS transmission.
   */
  destination?: string;

  /**
   * The Estimated Time of Arrival of the vessel at the destination, in ISO 8601 UTC
   * format.
   */
  destinationETA?: string;

  /**
   * The remaining distance, in kilometers, for the vessel to reach the reported
   * destination.
   */
  distanceToGo?: number;

  /**
   * The distance, in kilometers, that the vessel has travelled since departing the
   * last port.
   */
  distanceTravelled?: number;

  /**
   * The maximum static draught, in meters, of the vessel according to the AIS
   * transmission.
   */
  draught?: number;

  /**
   * The activity that the vessel is engaged in. This entry applies only when the
   * shipType = Other.
   */
  engagedIn?: string;

  /**
   * The Estimated Time of Arrival of the vessel at the destination port, according
   * to MarineTraffic calculations, in ISO 8601 UTC format.
   */
  etaCalculated?: string;

  /**
   * The date and time that the ETA was calculated by MarineTraffic, in ISO 8601 UTC
   * format.
   */
  etaUpdated?: string;

  /**
   * Unique identifier of the Track.
   */
  idTrack?: string;

  /**
   * Unique identifier of the vessel.
   */
  idVessel?: string;

  /**
   * The International Maritime Organization Number of the vessel. IMON is a
   * seven-digit number that uniquely identifies the vessel.
   */
  imon?: number;

  /**
   * The US Geographic Unique Identifier of the last port visited by the vessel.
   */
  lastPortGUID?: string;

  /**
   * The UN Location Code of the last port visited by the vessel.
   */
  lastPortLOCODE?: string;

  /**
   * WGS-84 latitude of the vessel position, in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  lat?: number;

  /**
   * The overall length of the vessel, in meters. A value of 511 indicates a vessel
   * length of 511 meters or greater.
   */
  length?: number;

  /**
   * WGS-84 longitude of the vessel position, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  lon?: number;

  /**
   * The maximum speed, in kilometers/hour, reported by the subject vessel during the
   * latest voyage (port to port).
   */
  maxSpeed?: number;

  /**
   * The Maritime Mobile Service Identity of the vessel. MMSI is a nine-digit number
   * that identifies the transmitter station of the vessel.
   */
  mmsi?: number;

  /**
   * The AIS Navigational Status of the vessel (e.g. Underway Using Engine, Moored,
   * Aground, etc.). Intended as, but not constrained to, the USCG NAVCEN navigation
   * status definitions. Users should refer to USCG Navigation Center documentation
   * for specific definitions associated with navigation status. USCG NAVCEN
   * documentation may be found at https://www.navcen.uscg.gov.
   */
  navStatus?: string;

  /**
   * The US Geographic Unique Identifier of the next destination port of the vessel.
   */
  nextPortGUID?: string;

  /**
   * The UN Location Code of the next destination port of the vessel.
   */
  nextPortLOCODE?: string;

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
   * The type of electronic position fixing device (e.g. GPS, GLONASS, etc.).
   * Intended as, but not constrained to, the USCG NAVCEN electronic position fixing
   * device definitions. Users should refer to USCG Navigation Center documentation
   * for specific device type information. USCG NAVCEN documentation may be found at
   * https://www.navcen.uscg.gov.
   */
  posDeviceType?: string;

  /**
   * Flag indicating high reported position accuracy (less than or equal to 10
   * meters). A value of 0/false indicates low accuracy (greater than 10 meters).
   */
  posHiAccuracy?: boolean;

  /**
   * Flag indicating high reported position latency (greater than 5 seconds). A value
   * of 0/false indicates low latency (less than 5 seconds).
   */
  posHiLatency?: boolean;

  /**
   * The Rate-of-Turn for the vessel, in degrees/minute. Positive value indicates
   * that the vessel is turning right.
   */
  rateOfTurn?: number;

  /**
   * Further description or explanation of the vessel or type.
   */
  shipDescription?: string;

  /**
   * The name of the vessel. Vessel names that exceed the AIS 20 character are
   * shortened (not truncated) to 15 character-spaces, followed by an underscore and
   * the last 4 characters-spaces of the vessel full name.
   */
  shipName?: string;

  /**
   * The reported ship type (e.g. Passenger, Tanker, Cargo, Other, etc.). See the
   * engagedIn and specialCraft entries for additional information on certain types
   * of vessels.
   */
  shipType?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The type of special craft designation of the vessel. This entry applies only
   * when the shipType = Special Craft.
   */
  specialCraft?: string;

  /**
   * Flag indicating that the vessel is engaged in a special maneuver (e.g. Waterway
   * Navigation).
   */
  specialManeuver?: boolean;

  /**
   * The speed-over-ground reported by the vessel, in kilometers/hour.
   */
  speed?: number;

  /**
   * The true heading reported by the vessel, in degrees.
   */
  trueHeading?: number;

  /**
   * The flag of the subject vessel according to AIS transmission.
   */
  vesselFlag?: string;

  /**
   * The breadth of the vessel, in meters. A value of 63 indicates a vessel breadth
   * of 63 meters or greater.
   */
  width?: number;
}

export type AICountResponse = string;

export type AIHistoryCountResponse = string;

export interface AIQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<AIQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace AIQueryhelpResponse {
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

export type AITupleResponse = Array<Shared.AIsFull>;

export interface AIListParams extends OffsetPageParams {
  /**
   * The timestamp that the vessel position was recorded, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;
}

export interface AICountParams {
  /**
   * The timestamp that the vessel position was recorded, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface AICreateBulkParams {
  body: Array<AICreateBulkParams.Body>;
}

export namespace AICreateBulkParams {
  /**
   * Self-reported information obtained from Automatic Identification System (AIS)
   * equipment. This contains information such as unique identification, status,
   * position, course, and speed. The AIS is an automatic tracking system that uses
   * transceivers on ships and is used by vessel traffic services. Although
   * technically and operationally distinct, the AIS system is analogous to ADS-B
   * that performs a similar function for aircraft. AIS is intended to assist a
   * vessel's watchstanding officers and allow maritime authorities to track and
   * monitor vessel movements. AIS integrates a standardized VHF transceiver with a
   * positioning system such as Global Positioning System receiver, with other
   * electronic navigation sensors, such as gyrocompass or rate of turn indicator.
   * Vessels fitted with AIS transceivers can be tracked by AIS base stations located
   * along coast lines or, when out of range of terrestrial networks, through a
   * growing number of satellites that are fitted with special AIS receivers which
   * are capable of deconflicting a large number of signatures.
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
     * The timestamp that the vessel position was recorded, in ISO 8601 UTC format.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The reference dimensions of the vessel, reported as [A, B, C, D], in meters.
     * Where the array values represent the distance fore (A), aft (B), to port (C),
     * and to starboard (D) of the navigation antenna. Array with values A = C = 0 and
     * B, D > 0 indicate the length (B) and width (D) of the vessel without antenna
     * position reference.
     */
    antennaRefDimensions?: Array<number>;

    /**
     * The average speed, in kilometers/hour, calculated for the subject vessel during
     * the latest voyage (port to port).
     */
    avgSpeed?: number;

    /**
     * A uniquely designated identifier for the vessel's transmitter station.
     */
    callSign?: string;

    /**
     * The reported cargo type. Intended as, but not constrained to, the USCG NAVCEN
     * AIS cargo definitions. Users should refer to USCG Navigation Center
     * documentation for specific definitions associated with ship and cargo types.
     * USCG NAVCEN documentation may be found at https://www.navcen.uscg.gov.
     */
    cargoType?: string;

    /**
     * The course-over-ground reported by the vessel, in degrees.
     */
    course?: number;

    /**
     * The US Geographic Unique Identifier of the current port hosting the vessel.
     */
    currentPortGUID?: string;

    /**
     * The UN Location Code of the current port hosting the vessel.
     */
    currentPortLOCODE?: string;

    /**
     * The destination of the vessel according to the AIS transmission.
     */
    destination?: string;

    /**
     * The Estimated Time of Arrival of the vessel at the destination, in ISO 8601 UTC
     * format.
     */
    destinationETA?: string;

    /**
     * The remaining distance, in kilometers, for the vessel to reach the reported
     * destination.
     */
    distanceToGo?: number;

    /**
     * The distance, in kilometers, that the vessel has travelled since departing the
     * last port.
     */
    distanceTravelled?: number;

    /**
     * The maximum static draught, in meters, of the vessel according to the AIS
     * transmission.
     */
    draught?: number;

    /**
     * The activity that the vessel is engaged in. This entry applies only when the
     * shipType = Other.
     */
    engagedIn?: string;

    /**
     * The Estimated Time of Arrival of the vessel at the destination port, according
     * to MarineTraffic calculations, in ISO 8601 UTC format.
     */
    etaCalculated?: string;

    /**
     * The date and time that the ETA was calculated by MarineTraffic, in ISO 8601 UTC
     * format.
     */
    etaUpdated?: string;

    /**
     * Unique identifier of the Track.
     */
    idTrack?: string;

    /**
     * Unique identifier of the vessel.
     */
    idVessel?: string;

    /**
     * The International Maritime Organization Number of the vessel. IMON is a
     * seven-digit number that uniquely identifies the vessel.
     */
    imon?: number;

    /**
     * The US Geographic Unique Identifier of the last port visited by the vessel.
     */
    lastPortGUID?: string;

    /**
     * The UN Location Code of the last port visited by the vessel.
     */
    lastPortLOCODE?: string;

    /**
     * WGS-84 latitude of the vessel position, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    lat?: number;

    /**
     * The overall length of the vessel, in meters. A value of 511 indicates a vessel
     * length of 511 meters or greater.
     */
    length?: number;

    /**
     * WGS-84 longitude of the vessel position, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    lon?: number;

    /**
     * The maximum speed, in kilometers/hour, reported by the subject vessel during the
     * latest voyage (port to port).
     */
    maxSpeed?: number;

    /**
     * The Maritime Mobile Service Identity of the vessel. MMSI is a nine-digit number
     * that identifies the transmitter station of the vessel.
     */
    mmsi?: number;

    /**
     * The AIS Navigational Status of the vessel (e.g. Underway Using Engine, Moored,
     * Aground, etc.). Intended as, but not constrained to, the USCG NAVCEN navigation
     * status definitions. Users should refer to USCG Navigation Center documentation
     * for specific definitions associated with navigation status. USCG NAVCEN
     * documentation may be found at https://www.navcen.uscg.gov.
     */
    navStatus?: string;

    /**
     * The US Geographic Unique Identifier of the next destination port of the vessel.
     */
    nextPortGUID?: string;

    /**
     * The UN Location Code of the next destination port of the vessel.
     */
    nextPortLOCODE?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The type of electronic position fixing device (e.g. GPS, GLONASS, etc.).
     * Intended as, but not constrained to, the USCG NAVCEN electronic position fixing
     * device definitions. Users should refer to USCG Navigation Center documentation
     * for specific device type information. USCG NAVCEN documentation may be found at
     * https://www.navcen.uscg.gov.
     */
    posDeviceType?: string;

    /**
     * Flag indicating high reported position accuracy (less than or equal to 10
     * meters). A value of 0/false indicates low accuracy (greater than 10 meters).
     */
    posHiAccuracy?: boolean;

    /**
     * Flag indicating high reported position latency (greater than 5 seconds). A value
     * of 0/false indicates low latency (less than 5 seconds).
     */
    posHiLatency?: boolean;

    /**
     * The Rate-of-Turn for the vessel, in degrees/minute. Positive value indicates
     * that the vessel is turning right.
     */
    rateOfTurn?: number;

    /**
     * Further description or explanation of the vessel or type.
     */
    shipDescription?: string;

    /**
     * The name of the vessel. Vessel names that exceed the AIS 20 character are
     * shortened (not truncated) to 15 character-spaces, followed by an underscore and
     * the last 4 characters-spaces of the vessel full name.
     */
    shipName?: string;

    /**
     * The reported ship type (e.g. Passenger, Tanker, Cargo, Other, etc.). See the
     * engagedIn and specialCraft entries for additional information on certain types
     * of vessels.
     */
    shipType?: string;

    /**
     * The type of special craft designation of the vessel. This entry applies only
     * when the shipType = Special Craft.
     */
    specialCraft?: string;

    /**
     * Flag indicating that the vessel is engaged in a special maneuver (e.g. Waterway
     * Navigation).
     */
    specialManeuver?: boolean;

    /**
     * The speed-over-ground reported by the vessel, in kilometers/hour.
     */
    speed?: number;

    /**
     * The true heading reported by the vessel, in degrees.
     */
    trueHeading?: number;

    /**
     * The flag of the subject vessel according to AIS transmission.
     */
    vesselFlag?: string;

    /**
     * The breadth of the vessel, in meters. A value of 63 indicates a vessel breadth
     * of 63 meters or greater.
     */
    width?: number;
  }
}

export interface AIHistoryCountParams {
  /**
   * The timestamp that the vessel position was recorded, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface AITupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The timestamp that the vessel position was recorded, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

AIs.History = History;

export declare namespace AIs {
  export {
    type AIsAbridged as AIsAbridged,
    type AICountResponse as AICountResponse,
    type AIHistoryCountResponse as AIHistoryCountResponse,
    type AIQueryhelpResponse as AIQueryhelpResponse,
    type AITupleResponse as AITupleResponse,
    type AIsAbridgedsOffsetPage as AIsAbridgedsOffsetPage,
    type AIListParams as AIListParams,
    type AICountParams as AICountParams,
    type AICreateBulkParams as AICreateBulkParams,
    type AIHistoryCountParams as AIHistoryCountParams,
    type AITupleParams as AITupleParams,
  };

  export {
    History as History,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
  };
}
