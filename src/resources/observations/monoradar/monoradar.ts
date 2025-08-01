// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryQueryParams,
  HistoryQueryResponse,
} from './history';
import { APIPromise } from '../../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Monoradar extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const monoradarListResponse of client.observations.monoradar.list(
   *   { ts: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MonoradarListParams,
    options?: RequestOptions,
  ): PagePromise<MonoradarListResponsesOffsetPage, MonoradarListResponse> {
    return this._client.getAPIList('/udl/monoradar', OffsetPage<MonoradarListResponse>, {
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
   *
   * @example
   * ```ts
   * const response = await client.observations.monoradar.count({
   *   ts: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: MonoradarCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/monoradar/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * MonoRadar records as a POST body and ingest into the database. This operation is
   * not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.observations.monoradar.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       msgfmt: 'CAT48',
   *       msgts: '2021-01-01T01:01:01.123456Z',
   *       msgtyp: 'BCN',
   *       source: 'Bluestaq',
   *       ts: '2021-01-01T01:01:01.123456Z',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: MonoradarCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/monoradar/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.observations.monoradar.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<MonoradarQueryhelpResponse> {
    return this._client.get('/udl/monoradar/queryhelp', options);
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
   * const response = await client.observations.monoradar.tuple({
   *   columns: 'columns',
   *   ts: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: MonoradarTupleParams, options?: RequestOptions): APIPromise<MonoradarTupleResponse> {
    return this._client.get('/udl/monoradar/tuple', { query, ...options });
  }

  /**
   * Service operation to take a list of MonoRadar records as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.observations.monoradar.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       msgfmt: 'CAT48',
   *       msgts: '2021-01-01T01:01:01.123456Z',
   *       msgtyp: 'BCN',
   *       source: 'Bluestaq',
   *       ts: '2021-01-01T01:01:01.123456Z',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(params: MonoradarUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/monoradar', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type MonoradarListResponsesOffsetPage = OffsetPage<MonoradarListResponse>;

/**
 * A monoradar record contains the raw, and in some cases, processed target reports
 * from primary and secondary air surveillance radars. All target positions for
 * monoradar reports are recorded as range and azimuth from geographical North
 * relative to the detecting radar site. In the case of secondary surveillance
 * radars, interrogation response codes are provided as well as quality and
 * validation characteristics, when available in the particular record type used to
 * generate the record.
 */
export interface MonoradarListResponse {
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
   * Message format received (i.e. 'ASR9', 'CAT48', 'TPS70', etc..).
   */
  msgfmt: string;

  /**
   * Message time, in ISO 8601 UTC format with microsecond precision. This is the
   * time that the data message was released from the site.
   */
  msgts: string;

  /**
   * Message report type received (i.e. 'SRCH', 'BCN', 'REINF', 'BRTQC', 'PSR',
   * etc..).
   */
  msgtyp: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Target detection time, in ISO 8601 UTC format with microsecond precision.
   */
  ts: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Azimuth Change Pulse count at target detection.
   */
  acp?: number;

  /**
   * Aircraft address (24-bits Mode S address) assigned uniquely to each aircraft.
   */
  addr?: string;

  /**
   * Flag indicating military message.
   */
  af?: boolean;

  /**
   * Flag indicating whether AIMS present.
   */
  aims?: boolean;

  /**
   * Measured height of the target, in km. (for 3D radars).
   */
  alt3d?: number;

  /**
   * ARTS quality.
   */
  artsqual?: string;

  /**
   * Target azimuth, measured from the observing site, in degrees from true North. If
   * Azimuth Change Pulse (acp) count is provided, az represents the computed angle.
   */
  az?: number;

  /**
   * Target azimuth delta between PSR and SSR (reference PSR-SSR), in degrees.
   */
  azdelt?: number;

  /**
   * Number of beacon hits received on the target.
   */
  bcnhits?: number;

  /**
   * Array of local 2d-cartesian [x, y] coordinates of target, in km.
   */
  cartpos?: Array<number>;

  /**
   * Climbing/Descending mode indicator.
   */
  cdm?: string;

  /**
   * 7500 squawk present (hijack).
   */
  code7500?: boolean;

  /**
   * 7600 squawk present (loss of comm).
   */
  code7600?: boolean;

  /**
   * 7700 squawk present (general emergency).
   */
  code7700?: boolean;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * Flag indicating FAA/Civ message.
   */
  faa?: boolean;

  /**
   * Target ground speed, in meters/second.
   */
  grndspd?: number;

  /**
   * Target heading, in degrees from true North at the target position.
   */
  hdng?: number;

  /**
   * ID of the radar site or station providing the data.
   */
  idSensor?: string;

  /**
   * Mode-1 interrogation response (mission code).
   */
  m1?: string;

  /**
   * Indicator that the mode-1 response was garbled.
   */
  m1g?: boolean;

  /**
   * Status of the mode-1 validity bit.
   */
  m1v?: string;

  /**
   * Mode-2 interrogation response (military identification code).
   */
  m2?: string;

  /**
   * Indicator that the mode-2 response was garbled.
   */
  m2g?: boolean;

  /**
   * Status of the mode-2 validity bit.
   */
  m2v?: string;

  /**
   * Status of the mode-2 X-Pulse response validation.
   */
  m2xv?: string;

  /**
   * Mode-3/A interrogation response (aircraft identification).
   */
  m3a?: string;

  /**
   * Indicator that the mode-3/A response was garbled.
   */
  m3ag?: boolean;

  /**
   * Status of the mode-3/A validity bit.
   */
  m3av?: string;

  /**
   * Status of the mode-3 X-Pulse response validation.
   */
  m3axv?: string;

  /**
   * Mode-4 interrogation response (Identification Friend/Foe).
   */
  m4?: string;

  /**
   * Mode-4 D1 & D2 response status.
   */
  m4d1d2?: string;

  /**
   * Status of the mode-4 validity bit.
   */
  m4v?: string;

  /**
   * Indication of Horizontal Maneuver detection.
   */
  mah?: string;

  /**
   * Mode-C altitude (uncorrected pressure altitude), in km.
   */
  mc?: number;

  /**
   * Indicator that the mode-C response was garbled.
   */
  mcg?: boolean;

  /**
   * Status of the mode-C validity bit.
   */
  mcv?: string;

  /**
   * Flag indicating military emergency.
   */
  milemrgcy?: boolean;

  /**
   * Flag indicating report separated from different responses at same range. Azimuth
   * may have larger than normal error when present.
   */
  mrgrpt?: boolean;

  /**
   * Mode-S Comm B message data.
   */
  mscommb?: string;

  /**
   * Flag indicating that target was detected using data from an MTI receiver.
   */
  mti?: boolean;

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
   * Optional identifier provided by observation source to indicate the sensor
   * identifier which produced this observation.This may be an internal identifier
   * and not necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Runlength of the primary surveillance radar track, in degrees.
   */
  psrrl?: number;

  /**
   * Type of sensor(s) maintaining track.
   */
  rad?: string;

  /**
   * Measured slant range to target from the observing site, in km.
   */
  rng?: number;

  /**
   * Target range delta between PSR and SSR (reference PSR-SSR), in km.
   */
  rngdelt?: number;

  /**
   * System Area Code.
   */
  sac?: number;

  /**
   * Sensor altitude, in kilometers, at time of observation (ts).
   */
  senalt?: number;

  /**
   * Sensor WGS84 latitude, in degrees, at time of observation (ts). -90 to 90
   * degrees (negative values south of equator).
   */
  senlat?: number;

  /**
   * Sensor WGS84 longitude, in degrees, at time of observation (ts). -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  senlon?: number;

  /**
   * System Identification Code.
   */
  sic?: number;

  /**
   * Flag indicating whether Special Position Indicator (SPI) present in
   * interrogation response.
   */
  spi?: boolean;

  /**
   * Runlength of the secondary surveillance radar track, in degrees.
   */
  ssrl?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Target confidence.
   */
  tgtconf?: string;

  /**
   * Target correlation flag.
   */
  tgtcorr?: string;

  /**
   * Aircraft identification from an aircraft equipped with a Mode S transponder.
   */
  tgtid?: string;

  /**
   * Data time-in-storage, in seconds. This is the amount of time elapsed between
   * target detection and message transmission.
   */
  tis?: number;

  /**
   * Track eligibility flag.
   */
  trkelig?: string;

  /**
   * Value representing a unique reference to a track record within a particular
   * track file. Included when the radar station outputs tracks.
   */
  trknum?: number;

  /**
   * Test target indicator.
   */
  tti?: string;

  /**
   * Warning/Error Conditions and Target Classification.
   */
  wectc?: Array<string>;
}

export type MonoradarCountResponse = string;

export interface MonoradarQueryhelpResponse {
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

export type MonoradarTupleResponse = Array<MonoradarTupleResponse.MonoradarTupleResponseItem>;

export namespace MonoradarTupleResponse {
  /**
   * A monoradar record contains the raw, and in some cases, processed target reports
   * from primary and secondary air surveillance radars. All target positions for
   * monoradar reports are recorded as range and azimuth from geographical North
   * relative to the detecting radar site. In the case of secondary surveillance
   * radars, interrogation response codes are provided as well as quality and
   * validation characteristics, when available in the particular record type used to
   * generate the record.
   */
  export interface MonoradarTupleResponseItem {
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
     * Message format received (i.e. 'ASR9', 'CAT48', 'TPS70', etc..).
     */
    msgfmt: string;

    /**
     * Message time, in ISO 8601 UTC format with microsecond precision. This is the
     * time that the data message was released from the site.
     */
    msgts: string;

    /**
     * Message report type received (i.e. 'SRCH', 'BCN', 'REINF', 'BRTQC', 'PSR',
     * etc..).
     */
    msgtyp: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Target detection time, in ISO 8601 UTC format with microsecond precision.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Azimuth Change Pulse count at target detection.
     */
    acp?: number;

    /**
     * Aircraft address (24-bits Mode S address) assigned uniquely to each aircraft.
     */
    addr?: string;

    /**
     * Flag indicating military message.
     */
    af?: boolean;

    /**
     * Flag indicating whether AIMS present.
     */
    aims?: boolean;

    /**
     * Measured height of the target, in km. (for 3D radars).
     */
    alt3d?: number;

    /**
     * ARTS quality.
     */
    artsqual?: string;

    /**
     * Target azimuth, measured from the observing site, in degrees from true North. If
     * Azimuth Change Pulse (acp) count is provided, az represents the computed angle.
     */
    az?: number;

    /**
     * Target azimuth delta between PSR and SSR (reference PSR-SSR), in degrees.
     */
    azdelt?: number;

    /**
     * Number of beacon hits received on the target.
     */
    bcnhits?: number;

    /**
     * Array of local 2d-cartesian [x, y] coordinates of target, in km.
     */
    cartpos?: Array<number>;

    /**
     * Climbing/Descending mode indicator.
     */
    cdm?: string;

    /**
     * 7500 squawk present (hijack).
     */
    code7500?: boolean;

    /**
     * 7600 squawk present (loss of comm).
     */
    code7600?: boolean;

    /**
     * 7700 squawk present (general emergency).
     */
    code7700?: boolean;

    /**
     * Time the row was created in the database.
     */
    createdAt?: string;

    /**
     * Application user who created the row in the database.
     */
    createdBy?: string;

    /**
     * Flag indicating FAA/Civ message.
     */
    faa?: boolean;

    /**
     * Target ground speed, in meters/second.
     */
    grndspd?: number;

    /**
     * Target heading, in degrees from true North at the target position.
     */
    hdng?: number;

    /**
     * ID of the radar site or station providing the data.
     */
    idSensor?: string;

    /**
     * Mode-1 interrogation response (mission code).
     */
    m1?: string;

    /**
     * Indicator that the mode-1 response was garbled.
     */
    m1g?: boolean;

    /**
     * Status of the mode-1 validity bit.
     */
    m1v?: string;

    /**
     * Mode-2 interrogation response (military identification code).
     */
    m2?: string;

    /**
     * Indicator that the mode-2 response was garbled.
     */
    m2g?: boolean;

    /**
     * Status of the mode-2 validity bit.
     */
    m2v?: string;

    /**
     * Status of the mode-2 X-Pulse response validation.
     */
    m2xv?: string;

    /**
     * Mode-3/A interrogation response (aircraft identification).
     */
    m3a?: string;

    /**
     * Indicator that the mode-3/A response was garbled.
     */
    m3ag?: boolean;

    /**
     * Status of the mode-3/A validity bit.
     */
    m3av?: string;

    /**
     * Status of the mode-3 X-Pulse response validation.
     */
    m3axv?: string;

    /**
     * Mode-4 interrogation response (Identification Friend/Foe).
     */
    m4?: string;

    /**
     * Mode-4 D1 & D2 response status.
     */
    m4d1d2?: string;

    /**
     * Status of the mode-4 validity bit.
     */
    m4v?: string;

    /**
     * Indication of Horizontal Maneuver detection.
     */
    mah?: string;

    /**
     * Mode-C altitude (uncorrected pressure altitude), in km.
     */
    mc?: number;

    /**
     * Indicator that the mode-C response was garbled.
     */
    mcg?: boolean;

    /**
     * Status of the mode-C validity bit.
     */
    mcv?: string;

    /**
     * Flag indicating military emergency.
     */
    milemrgcy?: boolean;

    /**
     * Flag indicating report separated from different responses at same range. Azimuth
     * may have larger than normal error when present.
     */
    mrgrpt?: boolean;

    /**
     * Mode-S Comm B message data.
     */
    mscommb?: string;

    /**
     * Flag indicating that target was detected using data from an MTI receiver.
     */
    mti?: boolean;

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
     * Optional identifier provided by observation source to indicate the sensor
     * identifier which produced this observation.This may be an internal identifier
     * and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Runlength of the primary surveillance radar track, in degrees.
     */
    psrrl?: number;

    /**
     * Type of sensor(s) maintaining track.
     */
    rad?: string;

    /**
     * Measured slant range to target from the observing site, in km.
     */
    rng?: number;

    /**
     * Target range delta between PSR and SSR (reference PSR-SSR), in km.
     */
    rngdelt?: number;

    /**
     * System Area Code.
     */
    sac?: number;

    /**
     * Sensor altitude, in kilometers, at time of observation (ts).
     */
    senalt?: number;

    /**
     * Sensor WGS84 latitude, in degrees, at time of observation (ts). -90 to 90
     * degrees (negative values south of equator).
     */
    senlat?: number;

    /**
     * Sensor WGS84 longitude, in degrees, at time of observation (ts). -180 to 180
     * degrees (negative values west of Prime Meridian).
     */
    senlon?: number;

    /**
     * System Identification Code.
     */
    sic?: number;

    /**
     * Flag indicating whether Special Position Indicator (SPI) present in
     * interrogation response.
     */
    spi?: boolean;

    /**
     * Runlength of the secondary surveillance radar track, in degrees.
     */
    ssrl?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Target confidence.
     */
    tgtconf?: string;

    /**
     * Target correlation flag.
     */
    tgtcorr?: string;

    /**
     * Aircraft identification from an aircraft equipped with a Mode S transponder.
     */
    tgtid?: string;

    /**
     * Data time-in-storage, in seconds. This is the amount of time elapsed between
     * target detection and message transmission.
     */
    tis?: number;

    /**
     * Track eligibility flag.
     */
    trkelig?: string;

    /**
     * Value representing a unique reference to a track record within a particular
     * track file. Included when the radar station outputs tracks.
     */
    trknum?: number;

    /**
     * Test target indicator.
     */
    tti?: string;

    /**
     * Warning/Error Conditions and Target Classification.
     */
    wectc?: Array<string>;
  }
}

export interface MonoradarListParams extends OffsetPageParams {
  /**
   * Target detection time, in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;
}

export interface MonoradarCountParams {
  /**
   * Target detection time, in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface MonoradarCreateBulkParams {
  body: Array<MonoradarCreateBulkParams.Body>;
}

export namespace MonoradarCreateBulkParams {
  /**
   * A monoradar record contains the raw, and in some cases, processed target reports
   * from primary and secondary air surveillance radars. All target positions for
   * monoradar reports are recorded as range and azimuth from geographical North
   * relative to the detecting radar site. In the case of secondary surveillance
   * radars, interrogation response codes are provided as well as quality and
   * validation characteristics, when available in the particular record type used to
   * generate the record.
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
     * Message format received (i.e. 'ASR9', 'CAT48', 'TPS70', etc..).
     */
    msgfmt: string;

    /**
     * Message time, in ISO 8601 UTC format with microsecond precision. This is the
     * time that the data message was released from the site.
     */
    msgts: string;

    /**
     * Message report type received (i.e. 'SRCH', 'BCN', 'REINF', 'BRTQC', 'PSR',
     * etc..).
     */
    msgtyp: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Target detection time, in ISO 8601 UTC format with microsecond precision.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Azimuth Change Pulse count at target detection.
     */
    acp?: number;

    /**
     * Aircraft address (24-bits Mode S address) assigned uniquely to each aircraft.
     */
    addr?: string;

    /**
     * Flag indicating military message.
     */
    af?: boolean;

    /**
     * Flag indicating whether AIMS present.
     */
    aims?: boolean;

    /**
     * Measured height of the target, in km. (for 3D radars).
     */
    alt3d?: number;

    /**
     * ARTS quality.
     */
    artsqual?: string;

    /**
     * Target azimuth, measured from the observing site, in degrees from true North. If
     * Azimuth Change Pulse (acp) count is provided, az represents the computed angle.
     */
    az?: number;

    /**
     * Target azimuth delta between PSR and SSR (reference PSR-SSR), in degrees.
     */
    azdelt?: number;

    /**
     * Number of beacon hits received on the target.
     */
    bcnhits?: number;

    /**
     * Array of local 2d-cartesian [x, y] coordinates of target, in km.
     */
    cartpos?: Array<number>;

    /**
     * Climbing/Descending mode indicator.
     */
    cdm?: string;

    /**
     * 7500 squawk present (hijack).
     */
    code7500?: boolean;

    /**
     * 7600 squawk present (loss of comm).
     */
    code7600?: boolean;

    /**
     * 7700 squawk present (general emergency).
     */
    code7700?: boolean;

    /**
     * Flag indicating FAA/Civ message.
     */
    faa?: boolean;

    /**
     * Target ground speed, in meters/second.
     */
    grndspd?: number;

    /**
     * Target heading, in degrees from true North at the target position.
     */
    hdng?: number;

    /**
     * ID of the radar site or station providing the data.
     */
    idSensor?: string;

    /**
     * Mode-1 interrogation response (mission code).
     */
    m1?: string;

    /**
     * Indicator that the mode-1 response was garbled.
     */
    m1g?: boolean;

    /**
     * Status of the mode-1 validity bit.
     */
    m1v?: string;

    /**
     * Mode-2 interrogation response (military identification code).
     */
    m2?: string;

    /**
     * Indicator that the mode-2 response was garbled.
     */
    m2g?: boolean;

    /**
     * Status of the mode-2 validity bit.
     */
    m2v?: string;

    /**
     * Status of the mode-2 X-Pulse response validation.
     */
    m2xv?: string;

    /**
     * Mode-3/A interrogation response (aircraft identification).
     */
    m3a?: string;

    /**
     * Indicator that the mode-3/A response was garbled.
     */
    m3ag?: boolean;

    /**
     * Status of the mode-3/A validity bit.
     */
    m3av?: string;

    /**
     * Status of the mode-3 X-Pulse response validation.
     */
    m3axv?: string;

    /**
     * Mode-4 interrogation response (Identification Friend/Foe).
     */
    m4?: string;

    /**
     * Mode-4 D1 & D2 response status.
     */
    m4d1d2?: string;

    /**
     * Status of the mode-4 validity bit.
     */
    m4v?: string;

    /**
     * Indication of Horizontal Maneuver detection.
     */
    mah?: string;

    /**
     * Mode-C altitude (uncorrected pressure altitude), in km.
     */
    mc?: number;

    /**
     * Indicator that the mode-C response was garbled.
     */
    mcg?: boolean;

    /**
     * Status of the mode-C validity bit.
     */
    mcv?: string;

    /**
     * Flag indicating military emergency.
     */
    milemrgcy?: boolean;

    /**
     * Flag indicating report separated from different responses at same range. Azimuth
     * may have larger than normal error when present.
     */
    mrgrpt?: boolean;

    /**
     * Mode-S Comm B message data.
     */
    mscommb?: string;

    /**
     * Flag indicating that target was detected using data from an MTI receiver.
     */
    mti?: boolean;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by observation source to indicate the sensor
     * identifier which produced this observation.This may be an internal identifier
     * and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Runlength of the primary surveillance radar track, in degrees.
     */
    psrrl?: number;

    /**
     * Type of sensor(s) maintaining track.
     */
    rad?: string;

    /**
     * Measured slant range to target from the observing site, in km.
     */
    rng?: number;

    /**
     * Target range delta between PSR and SSR (reference PSR-SSR), in km.
     */
    rngdelt?: number;

    /**
     * System Area Code.
     */
    sac?: number;

    /**
     * Sensor altitude, in kilometers, at time of observation (ts).
     */
    senalt?: number;

    /**
     * Sensor WGS84 latitude, in degrees, at time of observation (ts). -90 to 90
     * degrees (negative values south of equator).
     */
    senlat?: number;

    /**
     * Sensor WGS84 longitude, in degrees, at time of observation (ts). -180 to 180
     * degrees (negative values west of Prime Meridian).
     */
    senlon?: number;

    /**
     * System Identification Code.
     */
    sic?: number;

    /**
     * Flag indicating whether Special Position Indicator (SPI) present in
     * interrogation response.
     */
    spi?: boolean;

    /**
     * Runlength of the secondary surveillance radar track, in degrees.
     */
    ssrl?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Target confidence.
     */
    tgtconf?: string;

    /**
     * Target correlation flag.
     */
    tgtcorr?: string;

    /**
     * Aircraft identification from an aircraft equipped with a Mode S transponder.
     */
    tgtid?: string;

    /**
     * Data time-in-storage, in seconds. This is the amount of time elapsed between
     * target detection and message transmission.
     */
    tis?: number;

    /**
     * Track eligibility flag.
     */
    trkelig?: string;

    /**
     * Value representing a unique reference to a track record within a particular
     * track file. Included when the radar station outputs tracks.
     */
    trknum?: number;

    /**
     * Test target indicator.
     */
    tti?: string;

    /**
     * Warning/Error Conditions and Target Classification.
     */
    wectc?: Array<string>;
  }
}

export interface MonoradarTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Target detection time, in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface MonoradarUnvalidatedPublishParams {
  body: Array<MonoradarUnvalidatedPublishParams.Body>;
}

export namespace MonoradarUnvalidatedPublishParams {
  /**
   * A monoradar record contains the raw, and in some cases, processed target reports
   * from primary and secondary air surveillance radars. All target positions for
   * monoradar reports are recorded as range and azimuth from geographical North
   * relative to the detecting radar site. In the case of secondary surveillance
   * radars, interrogation response codes are provided as well as quality and
   * validation characteristics, when available in the particular record type used to
   * generate the record.
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
     * Message format received (i.e. 'ASR9', 'CAT48', 'TPS70', etc..).
     */
    msgfmt: string;

    /**
     * Message time, in ISO 8601 UTC format with microsecond precision. This is the
     * time that the data message was released from the site.
     */
    msgts: string;

    /**
     * Message report type received (i.e. 'SRCH', 'BCN', 'REINF', 'BRTQC', 'PSR',
     * etc..).
     */
    msgtyp: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Target detection time, in ISO 8601 UTC format with microsecond precision.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Azimuth Change Pulse count at target detection.
     */
    acp?: number;

    /**
     * Aircraft address (24-bits Mode S address) assigned uniquely to each aircraft.
     */
    addr?: string;

    /**
     * Flag indicating military message.
     */
    af?: boolean;

    /**
     * Flag indicating whether AIMS present.
     */
    aims?: boolean;

    /**
     * Measured height of the target, in km. (for 3D radars).
     */
    alt3d?: number;

    /**
     * ARTS quality.
     */
    artsqual?: string;

    /**
     * Target azimuth, measured from the observing site, in degrees from true North. If
     * Azimuth Change Pulse (acp) count is provided, az represents the computed angle.
     */
    az?: number;

    /**
     * Target azimuth delta between PSR and SSR (reference PSR-SSR), in degrees.
     */
    azdelt?: number;

    /**
     * Number of beacon hits received on the target.
     */
    bcnhits?: number;

    /**
     * Array of local 2d-cartesian [x, y] coordinates of target, in km.
     */
    cartpos?: Array<number>;

    /**
     * Climbing/Descending mode indicator.
     */
    cdm?: string;

    /**
     * 7500 squawk present (hijack).
     */
    code7500?: boolean;

    /**
     * 7600 squawk present (loss of comm).
     */
    code7600?: boolean;

    /**
     * 7700 squawk present (general emergency).
     */
    code7700?: boolean;

    /**
     * Flag indicating FAA/Civ message.
     */
    faa?: boolean;

    /**
     * Target ground speed, in meters/second.
     */
    grndspd?: number;

    /**
     * Target heading, in degrees from true North at the target position.
     */
    hdng?: number;

    /**
     * ID of the radar site or station providing the data.
     */
    idSensor?: string;

    /**
     * Mode-1 interrogation response (mission code).
     */
    m1?: string;

    /**
     * Indicator that the mode-1 response was garbled.
     */
    m1g?: boolean;

    /**
     * Status of the mode-1 validity bit.
     */
    m1v?: string;

    /**
     * Mode-2 interrogation response (military identification code).
     */
    m2?: string;

    /**
     * Indicator that the mode-2 response was garbled.
     */
    m2g?: boolean;

    /**
     * Status of the mode-2 validity bit.
     */
    m2v?: string;

    /**
     * Status of the mode-2 X-Pulse response validation.
     */
    m2xv?: string;

    /**
     * Mode-3/A interrogation response (aircraft identification).
     */
    m3a?: string;

    /**
     * Indicator that the mode-3/A response was garbled.
     */
    m3ag?: boolean;

    /**
     * Status of the mode-3/A validity bit.
     */
    m3av?: string;

    /**
     * Status of the mode-3 X-Pulse response validation.
     */
    m3axv?: string;

    /**
     * Mode-4 interrogation response (Identification Friend/Foe).
     */
    m4?: string;

    /**
     * Mode-4 D1 & D2 response status.
     */
    m4d1d2?: string;

    /**
     * Status of the mode-4 validity bit.
     */
    m4v?: string;

    /**
     * Indication of Horizontal Maneuver detection.
     */
    mah?: string;

    /**
     * Mode-C altitude (uncorrected pressure altitude), in km.
     */
    mc?: number;

    /**
     * Indicator that the mode-C response was garbled.
     */
    mcg?: boolean;

    /**
     * Status of the mode-C validity bit.
     */
    mcv?: string;

    /**
     * Flag indicating military emergency.
     */
    milemrgcy?: boolean;

    /**
     * Flag indicating report separated from different responses at same range. Azimuth
     * may have larger than normal error when present.
     */
    mrgrpt?: boolean;

    /**
     * Mode-S Comm B message data.
     */
    mscommb?: string;

    /**
     * Flag indicating that target was detected using data from an MTI receiver.
     */
    mti?: boolean;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by observation source to indicate the sensor
     * identifier which produced this observation.This may be an internal identifier
     * and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Runlength of the primary surveillance radar track, in degrees.
     */
    psrrl?: number;

    /**
     * Type of sensor(s) maintaining track.
     */
    rad?: string;

    /**
     * Measured slant range to target from the observing site, in km.
     */
    rng?: number;

    /**
     * Target range delta between PSR and SSR (reference PSR-SSR), in km.
     */
    rngdelt?: number;

    /**
     * System Area Code.
     */
    sac?: number;

    /**
     * Sensor altitude, in kilometers, at time of observation (ts).
     */
    senalt?: number;

    /**
     * Sensor WGS84 latitude, in degrees, at time of observation (ts). -90 to 90
     * degrees (negative values south of equator).
     */
    senlat?: number;

    /**
     * Sensor WGS84 longitude, in degrees, at time of observation (ts). -180 to 180
     * degrees (negative values west of Prime Meridian).
     */
    senlon?: number;

    /**
     * System Identification Code.
     */
    sic?: number;

    /**
     * Flag indicating whether Special Position Indicator (SPI) present in
     * interrogation response.
     */
    spi?: boolean;

    /**
     * Runlength of the secondary surveillance radar track, in degrees.
     */
    ssrl?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Target confidence.
     */
    tgtconf?: string;

    /**
     * Target correlation flag.
     */
    tgtcorr?: string;

    /**
     * Aircraft identification from an aircraft equipped with a Mode S transponder.
     */
    tgtid?: string;

    /**
     * Data time-in-storage, in seconds. This is the amount of time elapsed between
     * target detection and message transmission.
     */
    tis?: number;

    /**
     * Track eligibility flag.
     */
    trkelig?: string;

    /**
     * Value representing a unique reference to a track record within a particular
     * track file. Included when the radar station outputs tracks.
     */
    trknum?: number;

    /**
     * Test target indicator.
     */
    tti?: string;

    /**
     * Warning/Error Conditions and Target Classification.
     */
    wectc?: Array<string>;
  }
}

Monoradar.History = History;

export declare namespace Monoradar {
  export {
    type MonoradarListResponse as MonoradarListResponse,
    type MonoradarCountResponse as MonoradarCountResponse,
    type MonoradarQueryhelpResponse as MonoradarQueryhelpResponse,
    type MonoradarTupleResponse as MonoradarTupleResponse,
    type MonoradarListResponsesOffsetPage as MonoradarListResponsesOffsetPage,
    type MonoradarListParams as MonoradarListParams,
    type MonoradarCountParams as MonoradarCountParams,
    type MonoradarCreateBulkParams as MonoradarCreateBulkParams,
    type MonoradarTupleParams as MonoradarTupleParams,
    type MonoradarUnvalidatedPublishParams as MonoradarUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryQueryResponse as HistoryQueryResponse,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
    type HistoryQueryParams as HistoryQueryParams,
  };
}
