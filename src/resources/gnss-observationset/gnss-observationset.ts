// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import {
  GnssObservationSetFull,
  GnssObservationSetFullsOffsetPage,
  History,
  HistoryAodrParams,
  HistoryListParams,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class GnssObservationset extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: GnssObservationsetListParams,
    options?: RequestOptions,
  ): PagePromise<GnssObservationsetListResponsesOffsetPage, GnssObservationsetListResponse> {
    return this._client.getAPIList('/udl/gnssobservationset', OffsetPage<GnssObservationsetListResponse>, {
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
  count(query: GnssObservationsetCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/gnssobservationset/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of Track
   * Details records as a POST body and ingest into the database. This operation is
   * not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   */
  createBulk(params: GnssObservationsetCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/gnssobservationset/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<GnssObservationsetQueryhelpResponse> {
    return this._client.get('/udl/gnssobservationset/queryhelp', options);
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
  tuple(
    query: GnssObservationsetTupleParams,
    options?: RequestOptions,
  ): APIPromise<GnssObservationsetTupleResponse> {
    return this._client.get('/udl/gnssobservationset/tuple', { query, ...options });
  }

  /**
   * Service operation to accept one or more GNSSObservationSet(s) and associated
   * GNSS Observation(s) as a POST body and ingest into the database. This operation
   * is intended to be used for automated feeds into UDL. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   */
  unvalidatedPublish(
    params: GnssObservationsetUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-gnssobset', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type GnssObservationsetListResponsesOffsetPage = OffsetPage<GnssObservationsetListResponse>;

/**
 * Set of GNSSObservation data.
 */
export interface GnssObservationsetListResponse {
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
   * Observation Time, in ISO8601 UTC format with microsecond precision. This
   * timestamp applies to all observations within the set.
   */
  ts: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * GNSS Automatic Gain Control State.
   */
  agcState?: number;

  /**
   * Spacecraft altitude at observation time (ts), expressed in kilometers above
   * WGS-84 ellipsoid.
   */
  alt?: number;

  /**
   * unit vector of the outward facing direction of the receiver boresight in a
   * body-fixed coordinate system.
   */
  boresight?: Array<number>;

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
   * Unique identifier of the parent Ephemeris Set, if this data is correlated with
   * an Ephemeris. If reporting for a spacecraft with multiple onboard GNSS
   * receivers, this ID may be associated with multiple GNSS Observation records if
   * each receiver is synced to the ephemeris points.
   */
  esId?: string;

  /**
   * Optional source-provided identifier for this collection event. This field can be
   * used to associate records related to the same event.
   */
  eventId?: string;

  /**
   * Geometric Dilution of Precision.
   */
  gDop?: number;

  /**
   * GNSSObservations associated with this GNSSObservationSet.
   */
  gnssObservationList?: Array<GnssObservationsetListResponse.GnssObservationList>;

  /**
   * Horizontal Dilution of Precision.
   */
  hDop?: number;

  /**
   * Unique identifier of the primary satellite on-orbit object.
   */
  idOnOrbit?: string;

  /**
   * WGS-84 spacecraft latitude sub-point at observation time (ts), represented as
   * -90 to 90 degrees (negative values south of equator).
   */
  lat?: number;

  /**
   * WGS-84 spacecraft longitude sub-point at observation time (ts), represented as
   * -180 to 180 degrees (negative values west of Prime Meridian).
   */
  lon?: number;

  /**
   * The marker type of the observing receiver (AIRBORNE, ANIMAL, BALLISTIC, FIXED
   * BUOY, FLOATING BUOY, FLOATING ICE, GEODETIC, GLACIER, GROUNDCRAFT, HUMAN, NON
   * GEODETIC, NON PHYSICAL, SPACEBORNE, WATERCRAFT). Reference RINEX 3+ for further
   * information concerning marker types.
   */
  markerType?: string;

  /**
   * The current navigation status as defined by the data source. In general the
   * navigation status specifies whether the signal is normal, degraded, or
   * unavailable. For status value definitions please reach out to data source
   * provider.
   */
  navigationStatus?: string;

  /**
   * Array of the strings containing the individual observation code sets that are
   * contained within this GNSS Observation set. Each string is a three-character
   * representation of the measurement type, the channel, and the coding, in
   * compliance with the RINEX 3+ standard (Pseudorange (C), Carrier Phase (L),
   * Doppler (D), Signal Strength C/No (S), or Channel Number (X)). See the GNSS
   * Observation ob field for the units of measure associated with each observation
   * type.
   */
  obsCodes?: Array<string>;

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
   * Optional identifier provided by ephemeris source to indicate the target object
   * of this ephemeris. This may be an internal identifier and not necessarily map to
   * a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Time, in seconds, that the receiver has been unable to compute a GNSS fix.
   */
  outage?: number;

  /**
   * Position Dilution of Precision.
   */
  pDop?: number;

  /**
   * The quaternion describing the rotation of the body-fixed frame used for this
   * system into the local geodetic frame, at observation time (ts). The array
   * element order convention is scalar component first, followed by the three vector
   * components. For a vector u in the body-fixed frame, the corresponding vector u'
   * in the geodetic frame should satisfy u' = quq\*, where q is this quaternion.
   */
  quat?: Array<number>;

  /**
   * The number or ID of the GNSS receiver associated with this data. Each GNSS
   * Observation Set is associated with only one receiver. If reporting for multiple
   * receivers a separate set should be generated for each. A null value is assumed
   * to indicate that only one receiver is present, or reported.
   */
  receiver?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Three element array, expressing the ECI J2K spacecraft position components, in
   * kilometers, at observation time (ts). The array element order is [x, y, z].
   */
  satPosition?: Array<number>;

  /**
   * Three element array, expressing the ECI J2K spacecraft velocity components, in
   * km/second, at observation time (ts). The array element order is [xvel, yvel,
   * zvel].
   */
  satVelocity?: Array<number>;

  /**
   * Array of UUIDs of the UDL data records that are related to this GNSS Observation
   * Set. See the associated 'srcTyps' array for the specific types of data,
   * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size. See the corresponding srcTyps array element
   * for the data type of the UUID and use the appropriate API operation to retrieve
   * that object (e.g. /udl/statevector/{uuid}).
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (AIS, CONJUNCTION, DOA, ELSET, EO, ESID, GROUNDIMAGE,
   * POI, MANEUVER, MTI, NOTIFICATION, RADAR, RF, SIGACT, SKYIMAGE, SV, TRACK) that
   * are related to this GNSS Observation Set. See the associated 'srcIds' array for
   * the record UUIDs, positionally corresponding to the record types in this array.
   * The 'srcTyps' and 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Time Dilution of Precision.
   */
  tDop?: number;

  /**
   * Status of the GNSS receiver signal. Status options are 0, 1 or 2 (0 being the
   * best).
   */
  trackingStatus?: number;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Vertical Dilution of Precision.
   */
  vDop?: number;
}

export namespace GnssObservationsetListResponse {
  /**
   * Information for Global Navigation Satellite Systems (GNSS) Observations
   * collected from GNSS receivers, including the specific GNSS sat from which each
   * signal was received, and the observation codes of each observation in the
   * record. Each GNSS Observation is associated with a GNSS Observation Set record
   * containing data which applies to all observations in the set, including
   * observation time, receiver location, and Dilution of Precision (DOP) values.
   * Users can Reference RINEX 3+ documentation for further information concerning
   * many of the standards and conventions for GNSS observations.
   */
  export interface GnssObservationList {
    /**
     * GNSS Automatic Gain Control State.
     */
    agcState?: number;

    /**
     * RINEX 3+ compliant GNSS System and Satellite Identifier (represented as SNN,
     * where S is the system code, and NN is the satellite identifier) associated with
     * this observation:
     *
     * G - GPS (NN = PRN)
     *
     * R - GLONASS (NN = Slot Number)
     *
     * S - SBAS Payload (NN = PRN-100)
     *
     * E - Galileo (NN = PRN)
     *
     * C - BeiDou (NN = PRN)
     *
     * J - QZSS (NN = PRN - 1923)
     *
     * I - IRNSS (NN = PRN)
     */
    gnssSatId?: string;

    /**
     * Array of observation(s). The ob array must be the same length as the obsCodeSet.
     * Pseudorange (C) is expressed meters, carrier phase (L) in cycles, doppler (D) in
     * Hz where + values indicate approaching sats, and signal strength C/No (S) in
     * dB-Hz.
     */
    ob?: Array<number>;

    /**
     * The observation code set that applies to this observation record. Reference
     * RINEX 3+ for further information concerning observation code set conventions.
     */
    obsCodeSet?: Array<string>;

    /**
     * Status of the GNSS receiver signal. Status options are 0, 1 or 2 (0 being the
     * best).
     */
    trackingStatus?: number;
  }
}

export type GnssObservationsetCountResponse = string;

export interface GnssObservationsetQueryhelpResponse {
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

export type GnssObservationsetTupleResponse = Array<HistoryAPI.GnssObservationSetFull>;

export interface GnssObservationsetListParams extends OffsetPageParams {
  /**
   * Observation Time, in ISO8601 UTC format with microsecond precision. This
   * timestamp applies to all observations within the set.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;
}

export interface GnssObservationsetCountParams {
  /**
   * Observation Time, in ISO8601 UTC format with microsecond precision. This
   * timestamp applies to all observations within the set.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface GnssObservationsetCreateBulkParams {
  body: Array<GnssObservationsetCreateBulkParams.Body>;
}

export namespace GnssObservationsetCreateBulkParams {
  /**
   * Set of GNSSObservation data.
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
     * Observation Time, in ISO8601 UTC format with microsecond precision. This
     * timestamp applies to all observations within the set.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * GNSS Automatic Gain Control State.
     */
    agcState?: number;

    /**
     * Spacecraft altitude at observation time (ts), expressed in kilometers above
     * WGS-84 ellipsoid.
     */
    alt?: number;

    /**
     * unit vector of the outward facing direction of the receiver boresight in a
     * body-fixed coordinate system.
     */
    boresight?: Array<number>;

    /**
     * Unique identifier of the parent Ephemeris Set, if this data is correlated with
     * an Ephemeris. If reporting for a spacecraft with multiple onboard GNSS
     * receivers, this ID may be associated with multiple GNSS Observation records if
     * each receiver is synced to the ephemeris points.
     */
    esId?: string;

    /**
     * Optional source-provided identifier for this collection event. This field can be
     * used to associate records related to the same event.
     */
    eventId?: string;

    /**
     * Geometric Dilution of Precision.
     */
    gDop?: number;

    /**
     * GNSSObservations associated with this GNSSObservationSet.
     */
    gnssObservationList?: Array<Body.GnssObservationList>;

    /**
     * Horizontal Dilution of Precision.
     */
    hDop?: number;

    /**
     * WGS-84 spacecraft latitude sub-point at observation time (ts), represented as
     * -90 to 90 degrees (negative values south of equator).
     */
    lat?: number;

    /**
     * WGS-84 spacecraft longitude sub-point at observation time (ts), represented as
     * -180 to 180 degrees (negative values west of Prime Meridian).
     */
    lon?: number;

    /**
     * The marker type of the observing receiver (AIRBORNE, ANIMAL, BALLISTIC, FIXED
     * BUOY, FLOATING BUOY, FLOATING ICE, GEODETIC, GLACIER, GROUNDCRAFT, HUMAN, NON
     * GEODETIC, NON PHYSICAL, SPACEBORNE, WATERCRAFT). Reference RINEX 3+ for further
     * information concerning marker types.
     */
    markerType?: string;

    /**
     * The current navigation status as defined by the data source. In general the
     * navigation status specifies whether the signal is normal, degraded, or
     * unavailable. For status value definitions please reach out to data source
     * provider.
     */
    navigationStatus?: string;

    /**
     * Array of the strings containing the individual observation code sets that are
     * contained within this GNSS Observation set. Each string is a three-character
     * representation of the measurement type, the channel, and the coding, in
     * compliance with the RINEX 3+ standard (Pseudorange (C), Carrier Phase (L),
     * Doppler (D), Signal Strength C/No (S), or Channel Number (X)). See the GNSS
     * Observation ob field for the units of measure associated with each observation
     * type.
     */
    obsCodes?: Array<string>;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by ephemeris source to indicate the target object
     * of this ephemeris. This may be an internal identifier and not necessarily map to
     * a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Time, in seconds, that the receiver has been unable to compute a GNSS fix.
     */
    outage?: number;

    /**
     * Position Dilution of Precision.
     */
    pDop?: number;

    /**
     * The quaternion describing the rotation of the body-fixed frame used for this
     * system into the local geodetic frame, at observation time (ts). The array
     * element order convention is scalar component first, followed by the three vector
     * components. For a vector u in the body-fixed frame, the corresponding vector u'
     * in the geodetic frame should satisfy u' = quq\*, where q is this quaternion.
     */
    quat?: Array<number>;

    /**
     * The number or ID of the GNSS receiver associated with this data. Each GNSS
     * Observation Set is associated with only one receiver. If reporting for multiple
     * receivers a separate set should be generated for each. A null value is assumed
     * to indicate that only one receiver is present, or reported.
     */
    receiver?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Three element array, expressing the ECI J2K spacecraft position components, in
     * kilometers, at observation time (ts). The array element order is [x, y, z].
     */
    satPosition?: Array<number>;

    /**
     * Three element array, expressing the ECI J2K spacecraft velocity components, in
     * km/second, at observation time (ts). The array element order is [xvel, yvel,
     * zvel].
     */
    satVelocity?: Array<number>;

    /**
     * Array of UUIDs of the UDL data records that are related to this GNSS Observation
     * Set. See the associated 'srcTyps' array for the specific types of data,
     * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
     * 'srcIds' arrays must match in size. See the corresponding srcTyps array element
     * for the data type of the UUID and use the appropriate API operation to retrieve
     * that object (e.g. /udl/statevector/{uuid}).
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (AIS, CONJUNCTION, DOA, ELSET, EO, ESID, GROUNDIMAGE,
     * POI, MANEUVER, MTI, NOTIFICATION, RADAR, RF, SIGACT, SKYIMAGE, SV, TRACK) that
     * are related to this GNSS Observation Set. See the associated 'srcIds' array for
     * the record UUIDs, positionally corresponding to the record types in this array.
     * The 'srcTyps' and 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Time Dilution of Precision.
     */
    tDop?: number;

    /**
     * Status of the GNSS receiver signal. Status options are 0, 1 or 2 (0 being the
     * best).
     */
    trackingStatus?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Vertical Dilution of Precision.
     */
    vDop?: number;
  }

  export namespace Body {
    /**
     * Information for Global Navigation Satellite Systems (GNSS) Observations
     * collected from GNSS receivers, including the specific GNSS sat from which each
     * signal was received, and the observation codes of each observation in the
     * record. Each GNSS Observation is associated with a GNSS Observation Set record
     * containing data which applies to all observations in the set, including
     * observation time, receiver location, and Dilution of Precision (DOP) values.
     * Users can Reference RINEX 3+ documentation for further information concerning
     * many of the standards and conventions for GNSS observations.
     */
    export interface GnssObservationList {
      /**
       * GNSS Automatic Gain Control State.
       */
      agcState?: number;

      /**
       * RINEX 3+ compliant GNSS System and Satellite Identifier (represented as SNN,
       * where S is the system code, and NN is the satellite identifier) associated with
       * this observation:
       *
       * G - GPS (NN = PRN)
       *
       * R - GLONASS (NN = Slot Number)
       *
       * S - SBAS Payload (NN = PRN-100)
       *
       * E - Galileo (NN = PRN)
       *
       * C - BeiDou (NN = PRN)
       *
       * J - QZSS (NN = PRN - 1923)
       *
       * I - IRNSS (NN = PRN)
       */
      gnssSatId?: string;

      /**
       * Array of observation(s). The ob array must be the same length as the obsCodeSet.
       * Pseudorange (C) is expressed meters, carrier phase (L) in cycles, doppler (D) in
       * Hz where + values indicate approaching sats, and signal strength C/No (S) in
       * dB-Hz.
       */
      ob?: Array<number>;

      /**
       * The observation code set that applies to this observation record. Reference
       * RINEX 3+ for further information concerning observation code set conventions.
       */
      obsCodeSet?: Array<string>;

      /**
       * Status of the GNSS receiver signal. Status options are 0, 1 or 2 (0 being the
       * best).
       */
      trackingStatus?: number;
    }
  }
}

export interface GnssObservationsetTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Observation Time, in ISO8601 UTC format with microsecond precision. This
   * timestamp applies to all observations within the set.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface GnssObservationsetUnvalidatedPublishParams {
  body: Array<GnssObservationsetUnvalidatedPublishParams.Body>;
}

export namespace GnssObservationsetUnvalidatedPublishParams {
  /**
   * Set of GNSSObservation data.
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
     * Observation Time, in ISO8601 UTC format with microsecond precision. This
     * timestamp applies to all observations within the set.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * GNSS Automatic Gain Control State.
     */
    agcState?: number;

    /**
     * Spacecraft altitude at observation time (ts), expressed in kilometers above
     * WGS-84 ellipsoid.
     */
    alt?: number;

    /**
     * unit vector of the outward facing direction of the receiver boresight in a
     * body-fixed coordinate system.
     */
    boresight?: Array<number>;

    /**
     * Unique identifier of the parent Ephemeris Set, if this data is correlated with
     * an Ephemeris. If reporting for a spacecraft with multiple onboard GNSS
     * receivers, this ID may be associated with multiple GNSS Observation records if
     * each receiver is synced to the ephemeris points.
     */
    esId?: string;

    /**
     * Optional source-provided identifier for this collection event. This field can be
     * used to associate records related to the same event.
     */
    eventId?: string;

    /**
     * Geometric Dilution of Precision.
     */
    gDop?: number;

    /**
     * GNSSObservations associated with this GNSSObservationSet.
     */
    gnssObservationList?: Array<Body.GnssObservationList>;

    /**
     * Horizontal Dilution of Precision.
     */
    hDop?: number;

    /**
     * WGS-84 spacecraft latitude sub-point at observation time (ts), represented as
     * -90 to 90 degrees (negative values south of equator).
     */
    lat?: number;

    /**
     * WGS-84 spacecraft longitude sub-point at observation time (ts), represented as
     * -180 to 180 degrees (negative values west of Prime Meridian).
     */
    lon?: number;

    /**
     * The marker type of the observing receiver (AIRBORNE, ANIMAL, BALLISTIC, FIXED
     * BUOY, FLOATING BUOY, FLOATING ICE, GEODETIC, GLACIER, GROUNDCRAFT, HUMAN, NON
     * GEODETIC, NON PHYSICAL, SPACEBORNE, WATERCRAFT). Reference RINEX 3+ for further
     * information concerning marker types.
     */
    markerType?: string;

    /**
     * The current navigation status as defined by the data source. In general the
     * navigation status specifies whether the signal is normal, degraded, or
     * unavailable. For status value definitions please reach out to data source
     * provider.
     */
    navigationStatus?: string;

    /**
     * Array of the strings containing the individual observation code sets that are
     * contained within this GNSS Observation set. Each string is a three-character
     * representation of the measurement type, the channel, and the coding, in
     * compliance with the RINEX 3+ standard (Pseudorange (C), Carrier Phase (L),
     * Doppler (D), Signal Strength C/No (S), or Channel Number (X)). See the GNSS
     * Observation ob field for the units of measure associated with each observation
     * type.
     */
    obsCodes?: Array<string>;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by ephemeris source to indicate the target object
     * of this ephemeris. This may be an internal identifier and not necessarily map to
     * a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Time, in seconds, that the receiver has been unable to compute a GNSS fix.
     */
    outage?: number;

    /**
     * Position Dilution of Precision.
     */
    pDop?: number;

    /**
     * The quaternion describing the rotation of the body-fixed frame used for this
     * system into the local geodetic frame, at observation time (ts). The array
     * element order convention is scalar component first, followed by the three vector
     * components. For a vector u in the body-fixed frame, the corresponding vector u'
     * in the geodetic frame should satisfy u' = quq\*, where q is this quaternion.
     */
    quat?: Array<number>;

    /**
     * The number or ID of the GNSS receiver associated with this data. Each GNSS
     * Observation Set is associated with only one receiver. If reporting for multiple
     * receivers a separate set should be generated for each. A null value is assumed
     * to indicate that only one receiver is present, or reported.
     */
    receiver?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Three element array, expressing the ECI J2K spacecraft position components, in
     * kilometers, at observation time (ts). The array element order is [x, y, z].
     */
    satPosition?: Array<number>;

    /**
     * Three element array, expressing the ECI J2K spacecraft velocity components, in
     * km/second, at observation time (ts). The array element order is [xvel, yvel,
     * zvel].
     */
    satVelocity?: Array<number>;

    /**
     * Array of UUIDs of the UDL data records that are related to this GNSS Observation
     * Set. See the associated 'srcTyps' array for the specific types of data,
     * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
     * 'srcIds' arrays must match in size. See the corresponding srcTyps array element
     * for the data type of the UUID and use the appropriate API operation to retrieve
     * that object (e.g. /udl/statevector/{uuid}).
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (AIS, CONJUNCTION, DOA, ELSET, EO, ESID, GROUNDIMAGE,
     * POI, MANEUVER, MTI, NOTIFICATION, RADAR, RF, SIGACT, SKYIMAGE, SV, TRACK) that
     * are related to this GNSS Observation Set. See the associated 'srcIds' array for
     * the record UUIDs, positionally corresponding to the record types in this array.
     * The 'srcTyps' and 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Time Dilution of Precision.
     */
    tDop?: number;

    /**
     * Status of the GNSS receiver signal. Status options are 0, 1 or 2 (0 being the
     * best).
     */
    trackingStatus?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Vertical Dilution of Precision.
     */
    vDop?: number;
  }

  export namespace Body {
    /**
     * Information for Global Navigation Satellite Systems (GNSS) Observations
     * collected from GNSS receivers, including the specific GNSS sat from which each
     * signal was received, and the observation codes of each observation in the
     * record. Each GNSS Observation is associated with a GNSS Observation Set record
     * containing data which applies to all observations in the set, including
     * observation time, receiver location, and Dilution of Precision (DOP) values.
     * Users can Reference RINEX 3+ documentation for further information concerning
     * many of the standards and conventions for GNSS observations.
     */
    export interface GnssObservationList {
      /**
       * GNSS Automatic Gain Control State.
       */
      agcState?: number;

      /**
       * RINEX 3+ compliant GNSS System and Satellite Identifier (represented as SNN,
       * where S is the system code, and NN is the satellite identifier) associated with
       * this observation:
       *
       * G - GPS (NN = PRN)
       *
       * R - GLONASS (NN = Slot Number)
       *
       * S - SBAS Payload (NN = PRN-100)
       *
       * E - Galileo (NN = PRN)
       *
       * C - BeiDou (NN = PRN)
       *
       * J - QZSS (NN = PRN - 1923)
       *
       * I - IRNSS (NN = PRN)
       */
      gnssSatId?: string;

      /**
       * Array of observation(s). The ob array must be the same length as the obsCodeSet.
       * Pseudorange (C) is expressed meters, carrier phase (L) in cycles, doppler (D) in
       * Hz where + values indicate approaching sats, and signal strength C/No (S) in
       * dB-Hz.
       */
      ob?: Array<number>;

      /**
       * The observation code set that applies to this observation record. Reference
       * RINEX 3+ for further information concerning observation code set conventions.
       */
      obsCodeSet?: Array<string>;

      /**
       * Status of the GNSS receiver signal. Status options are 0, 1 or 2 (0 being the
       * best).
       */
      trackingStatus?: number;
    }
  }
}

GnssObservationset.History = History;

export declare namespace GnssObservationset {
  export {
    type GnssObservationsetListResponse as GnssObservationsetListResponse,
    type GnssObservationsetCountResponse as GnssObservationsetCountResponse,
    type GnssObservationsetQueryhelpResponse as GnssObservationsetQueryhelpResponse,
    type GnssObservationsetTupleResponse as GnssObservationsetTupleResponse,
    type GnssObservationsetListResponsesOffsetPage as GnssObservationsetListResponsesOffsetPage,
    type GnssObservationsetListParams as GnssObservationsetListParams,
    type GnssObservationsetCountParams as GnssObservationsetCountParams,
    type GnssObservationsetCreateBulkParams as GnssObservationsetCreateBulkParams,
    type GnssObservationsetTupleParams as GnssObservationsetTupleParams,
    type GnssObservationsetUnvalidatedPublishParams as GnssObservationsetUnvalidatedPublishParams,
  };

  export {
    History as History,
    type GnssObservationSetFull as GnssObservationSetFull,
    type GnssObservationSetFullsOffsetPage as GnssObservationSetFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
  };
}
