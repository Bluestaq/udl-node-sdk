// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
  HistoryListResponsesOffsetPage,
} from './history';
import { APIPromise } from '../../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Radarobservation extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single radar observation as a POST body and ingest
   * into the database. This operation is not intended to be used for automated feeds
   * into UDL. Data providers should contact the UDL team for specific role
   * assignments and for instructions on setting up a permanent feed through an
   * alternate mechanism.
   *
   * @example
   * ```ts
   * await client.observations.radarobservation.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   obTime: '2018-01-01T16:00:00.123456Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: RadarobservationCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/radarobservation', {
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
   * for await (const radarobservationListResponse of client.observations.radarobservation.list(
   *   { obTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: RadarobservationListParams,
    options?: RequestOptions,
  ): PagePromise<RadarobservationListResponsesOffsetPage, RadarobservationListResponse> {
    return this._client.getAPIList('/udl/radarobservation', OffsetPage<RadarobservationListResponse>, {
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
   * const response =
   *   await client.observations.radarobservation.count({
   *     obTime: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  count(query: RadarobservationCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/radarobservation/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of radar
   * observations as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.observations.radarobservation.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       obTime: '2018-01-01T16:00:00.123456Z',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: RadarobservationCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/radarobservation/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single radar observations by its unique ID passed as
   * a path parameter.
   *
   * @example
   * ```ts
   * const radarobservation =
   *   await client.observations.radarobservation.get('id');
   * ```
   */
  get(
    id: string,
    query: RadarobservationGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RadarobservationGetResponse> {
    return this._client.get(path`/udl/radarobservation/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.observations.radarobservation.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<RadarobservationQueryhelpResponse> {
    return this._client.get('/udl/radarobservation/queryhelp', options);
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
   * const response =
   *   await client.observations.radarobservation.tuple({
   *     columns: 'columns',
   *     obTime: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  tuple(
    query: RadarobservationTupleParams,
    options?: RequestOptions,
  ): APIPromise<RadarobservationTupleResponse> {
    return this._client.get('/udl/radarobservation/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple radar observations as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.observations.radarobservation.unvalidatedPublish(
   *   {
   *     body: [
   *       {
   *         classificationMarking: 'U',
   *         dataMode: 'TEST',
   *         obTime: '2018-01-01T16:00:00.123456Z',
   *         source: 'Bluestaq',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  unvalidatedPublish(
    params: RadarobservationUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-radar', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type RadarobservationListResponsesOffsetPage = OffsetPage<RadarobservationListResponse>;

/**
 * Model representation of observation data for radar based sensor phenomenologies.
 * J2000 is the preferred coordinate frame for all observations, but in some cases
 * observations may be in another frame depending on the provider. Please see the
 * 'Discover' tab in the storefront to confirm coordinate frames by data provider.
 */
export interface RadarobservationListResponse {
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
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   */
  obTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * azimuth angle in degrees and topocentric frame.
   */
  azimuth?: number;

  /**
   * Sensor azimuth angle bias in degrees.
   */
  azimuthBias?: number;

  /**
   * Optional flag indicating whether the azimuth value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  azimuthMeasured?: boolean;

  /**
   * Rate of change of the line of sight azimuth in degrees per second.
   */
  azimuthRate?: number;

  /**
   * One sigma uncertainty in the line of sight azimuth angle measurement, in
   * degrees.
   */
  azimuthUnc?: number;

  /**
   * ID of the beam that produced this observation.
   */
  beam?: number;

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
   * Line of sight declination angle in degrees and J2000 coordinate frame.
   */
  declination?: number;

  /**
   * Optional flag indicating whether the declination value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  declinationMeasured?: boolean;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Corrected doppler measurement in meters per second.
   */
  doppler?: number;

  /**
   * One sigma uncertainty in the corrected doppler measurement, in meters/second.
   */
  dopplerUnc?: number;

  /**
   * Line of sight elevation in degrees and topocentric frame.
   */
  elevation?: number;

  /**
   * Sensor elevation bias in degrees.
   */
  elevationBias?: number;

  /**
   * Optional flag indicating whether the elevation value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  elevationMeasured?: boolean;

  /**
   * Rate of change of the line of sight elevation in degrees per second.
   */
  elevationRate?: number;

  /**
   * One sigma uncertainty in the line of sight elevation angle measurement, in
   * degrees.
   */
  elevationUnc?: number;

  /**
   * Unique identifier of the target on-orbit object, if correlated.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * The position of this observation within a track (FENCE, FIRST, IN, LAST,
   * SINGLE). This identifier is optional and, if null, no assumption should be made
   * regarding whether other observations may or may not exist to compose a track.
   */
  obPosition?: string;

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
   * Optional identifier provided by observation source to indicate the target
   * onorbit object of this observation. This may be an internal identifier and not
   * necessarily a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by observation source to indicate the sensor
   * identifier which produced this observation. This may be an internal identifier
   * and not necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Radar cross section in meters squared for orthogonal polarization.
   */
  orthogonalRcs?: number;

  /**
   * one sigma uncertainty in orthogonal polarization Radar Cross Section, in
   * meters^2.
   */
  orthogonalRcsUnc?: number;

  /**
   * Line of sight right ascension in degrees and J2000 coordinate frame.
   */
  ra?: number;

  /**
   * Optional flag indicating whether the ra value is measured (true) or computed
   * (false). If null, consumers may consult the data provider for information
   * regarding whether the corresponding value is computed or measured.
   */
  raMeasured?: boolean;

  /**
   * Target range in km.
   */
  range?: number;

  /**
   * Range accelaration in km/s2.
   */
  rangeAccel?: number;

  /**
   * One sigma uncertainty in the range acceleration measurement, in
   * kilometers/(second^2).
   */
  rangeAccelUnc?: number;

  /**
   * Sensor range bias in km.
   */
  rangeBias?: number;

  /**
   * Optional flag indicating whether the range value is measured (true) or computed
   * (false). If null, consumers may consult the data provider for information
   * regarding whether the corresponding value is computed or measured.
   */
  rangeMeasured?: boolean;

  /**
   * Rate of change of the line of sight range in km/sec.
   */
  rangeRate?: number;

  /**
   * Optional flag indicating whether the rangeRate value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  rangeRateMeasured?: boolean;

  /**
   * One sigma uncertainty in the range rate measurement, in kilometers/second.
   */
  rangeRateUnc?: number;

  /**
   * One sigma uncertainty in the range measurement, in kilometers.
   */
  rangeUnc?: number;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * Radar cross section in meters squared for polarization principal.
   */
  rcs?: number;

  /**
   * one sigma uncertainty in principal polarization Radar Cross Section, in
   * meters^2.
   */
  rcsUnc?: number;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * The reference frame of the observing sensor state. If the senReferenceFrame is
   * null it is assumed to be J2000.
   */
  senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

  /**
   * Sensor x position in km at obTime (if mobile/onorbit) in the specified
   * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
   */
  senx?: number;

  /**
   * Sensor y position in km at obTime (if mobile/onorbit) in the specified
   * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
   */
  seny?: number;

  /**
   * Sensor z position in km at obTime (if mobile/onorbit) in the specified
   * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
   */
  senz?: number;

  /**
   * Signal to noise ratio, in dB.
   */
  snr?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Optional identifier to indicate the specific tasking which produced this
   * observation.
   */
  taskId?: string;

  /**
   * Sensor timing bias in seconds.
   */
  timingBias?: number;

  /**
   * Optional identifier of the track to which this observation belongs.
   */
  trackId?: string;

  /**
   * The beam type (or tracking state) in use at the time of collection of this
   * observation. Values include:
   *
   * INIT ACQ WITH INIT VALUES: Initial acquisition based on predefined initial
   * values such as position, velocity, or other specific parameters.
   *
   * INIT ACQ: Initial acquisition when no prior information or initial values such
   * as position or velocity are available.
   *
   * TRACKING SINGLE BEAM: Continuously tracks and monitors a single target using one
   * specific radar beam.
   *
   * TRACKING SEQUENTIAL ROVING: Sequentially tracks different targets or areas by
   * "roving" from one sector to the next in a systematic order.
   *
   * SELF ACQ WITH INIT VALUES: Autonomously acquires targets using predefined
   * starting parameters or initial values.
   *
   * SELF ACQ: Automatically detects and locks onto targets without the need for
   * predefined initial settings.
   *
   * NON-TRACKING: Non-tracking.
   */
  trackingState?: string;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Read only enumeration specifying the type of observation (e.g. OPTICAL, RADAR,
   * RF, etc).
   */
  type?: string;

  /**
   * Boolean indicating this observation is part of an uncorrelated track or was
   * unable to be correlated to a known object. This flag should only be set to true
   * by data providers after an attempt to correlate to an on-orbit object was made
   * and failed. If unable to correlate, the 'origObjectId' field may be populated
   * with an internal data provider specific identifier.
   */
  uct?: boolean;

  /**
   * X position of target in km in J2000 coordinate frame.
   */
  x?: number;

  /**
   * X velocity of target in km/sec in J2000 coordinate frame.
   */
  xvel?: number;

  /**
   * Y position of target in km in J2000 coordinate frame.
   */
  y?: number;

  /**
   * Y velocity of target in km/sec in J2000 coordinate frame.
   */
  yvel?: number;

  /**
   * Z position of target in km in J2000 coordinate frame.
   */
  z?: number;

  /**
   * Z velocity of target in km/sec in J2000 coordinate frame.
   */
  zvel?: number;
}

export type RadarobservationCountResponse = string;

/**
 * Model representation of observation data for radar based sensor phenomenologies.
 * J2000 is the preferred coordinate frame for all observations, but in some cases
 * observations may be in another frame depending on the provider. Please see the
 * 'Discover' tab in the storefront to confirm coordinate frames by data provider.
 */
export interface RadarobservationGetResponse {
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
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   */
  obTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * azimuth angle in degrees and topocentric frame.
   */
  azimuth?: number;

  /**
   * Sensor azimuth angle bias in degrees.
   */
  azimuthBias?: number;

  /**
   * Optional flag indicating whether the azimuth value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  azimuthMeasured?: boolean;

  /**
   * Rate of change of the line of sight azimuth in degrees per second.
   */
  azimuthRate?: number;

  /**
   * One sigma uncertainty in the line of sight azimuth angle measurement, in
   * degrees.
   */
  azimuthUnc?: number;

  /**
   * ID of the beam that produced this observation.
   */
  beam?: number;

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
   * Line of sight declination angle in degrees and J2000 coordinate frame.
   */
  declination?: number;

  /**
   * Optional flag indicating whether the declination value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  declinationMeasured?: boolean;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Corrected doppler measurement in meters per second.
   */
  doppler?: number;

  /**
   * One sigma uncertainty in the corrected doppler measurement, in meters/second.
   */
  dopplerUnc?: number;

  /**
   * Line of sight elevation in degrees and topocentric frame.
   */
  elevation?: number;

  /**
   * Sensor elevation bias in degrees.
   */
  elevationBias?: number;

  /**
   * Optional flag indicating whether the elevation value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  elevationMeasured?: boolean;

  /**
   * Rate of change of the line of sight elevation in degrees per second.
   */
  elevationRate?: number;

  /**
   * One sigma uncertainty in the line of sight elevation angle measurement, in
   * degrees.
   */
  elevationUnc?: number;

  /**
   * Unique identifier of the target on-orbit object, if correlated.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * The position of this observation within a track (FENCE, FIRST, IN, LAST,
   * SINGLE). This identifier is optional and, if null, no assumption should be made
   * regarding whether other observations may or may not exist to compose a track.
   */
  obPosition?: string;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: Shared.OnorbitFull;

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
   * Optional identifier provided by observation source to indicate the target
   * onorbit object of this observation. This may be an internal identifier and not
   * necessarily a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by observation source to indicate the sensor
   * identifier which produced this observation. This may be an internal identifier
   * and not necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Radar cross section in meters squared for orthogonal polarization.
   */
  orthogonalRcs?: number;

  /**
   * one sigma uncertainty in orthogonal polarization Radar Cross Section, in
   * meters^2.
   */
  orthogonalRcsUnc?: number;

  /**
   * Line of sight right ascension in degrees and J2000 coordinate frame.
   */
  ra?: number;

  /**
   * Optional flag indicating whether the ra value is measured (true) or computed
   * (false). If null, consumers may consult the data provider for information
   * regarding whether the corresponding value is computed or measured.
   */
  raMeasured?: boolean;

  /**
   * Target range in km.
   */
  range?: number;

  /**
   * Range accelaration in km/s2.
   */
  rangeAccel?: number;

  /**
   * One sigma uncertainty in the range acceleration measurement, in
   * kilometers/(second^2).
   */
  rangeAccelUnc?: number;

  /**
   * Sensor range bias in km.
   */
  rangeBias?: number;

  /**
   * Optional flag indicating whether the range value is measured (true) or computed
   * (false). If null, consumers may consult the data provider for information
   * regarding whether the corresponding value is computed or measured.
   */
  rangeMeasured?: boolean;

  /**
   * Rate of change of the line of sight range in km/sec.
   */
  rangeRate?: number;

  /**
   * Optional flag indicating whether the rangeRate value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  rangeRateMeasured?: boolean;

  /**
   * One sigma uncertainty in the range rate measurement, in kilometers/second.
   */
  rangeRateUnc?: number;

  /**
   * One sigma uncertainty in the range measurement, in kilometers.
   */
  rangeUnc?: number;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * Radar cross section in meters squared for polarization principal.
   */
  rcs?: number;

  /**
   * one sigma uncertainty in principal polarization Radar Cross Section, in
   * meters^2.
   */
  rcsUnc?: number;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * The reference frame of the observing sensor state. If the senReferenceFrame is
   * null it is assumed to be J2000.
   */
  senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

  /**
   * Sensor x position in km at obTime (if mobile/onorbit) in the specified
   * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
   */
  senx?: number;

  /**
   * Sensor y position in km at obTime (if mobile/onorbit) in the specified
   * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
   */
  seny?: number;

  /**
   * Sensor z position in km at obTime (if mobile/onorbit) in the specified
   * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
   */
  senz?: number;

  /**
   * Signal to noise ratio, in dB.
   */
  snr?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to indicate the specific tasking which produced this
   * observation.
   */
  taskId?: string;

  /**
   * Sensor timing bias in seconds.
   */
  timingBias?: number;

  /**
   * Optional identifier of the track to which this observation belongs.
   */
  trackId?: string;

  /**
   * The beam type (or tracking state) in use at the time of collection of this
   * observation. Values include:
   *
   * INIT ACQ WITH INIT VALUES: Initial acquisition based on predefined initial
   * values such as position, velocity, or other specific parameters.
   *
   * INIT ACQ: Initial acquisition when no prior information or initial values such
   * as position or velocity are available.
   *
   * TRACKING SINGLE BEAM: Continuously tracks and monitors a single target using one
   * specific radar beam.
   *
   * TRACKING SEQUENTIAL ROVING: Sequentially tracks different targets or areas by
   * "roving" from one sector to the next in a systematic order.
   *
   * SELF ACQ WITH INIT VALUES: Autonomously acquires targets using predefined
   * starting parameters or initial values.
   *
   * SELF ACQ: Automatically detects and locks onto targets without the need for
   * predefined initial settings.
   *
   * NON-TRACKING: Non-tracking.
   */
  trackingState?: string;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Read only enumeration specifying the type of observation (e.g. OPTICAL, RADAR,
   * RF, etc).
   */
  type?: string;

  /**
   * Boolean indicating this observation is part of an uncorrelated track or was
   * unable to be correlated to a known object. This flag should only be set to true
   * by data providers after an attempt to correlate to an on-orbit object was made
   * and failed. If unable to correlate, the 'origObjectId' field may be populated
   * with an internal data provider specific identifier.
   */
  uct?: boolean;

  /**
   * X position of target in km in J2000 coordinate frame.
   */
  x?: number;

  /**
   * X velocity of target in km/sec in J2000 coordinate frame.
   */
  xvel?: number;

  /**
   * Y position of target in km in J2000 coordinate frame.
   */
  y?: number;

  /**
   * Y velocity of target in km/sec in J2000 coordinate frame.
   */
  yvel?: number;

  /**
   * Z position of target in km in J2000 coordinate frame.
   */
  z?: number;

  /**
   * Z velocity of target in km/sec in J2000 coordinate frame.
   */
  zvel?: number;
}

export interface RadarobservationQueryhelpResponse {
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

export type RadarobservationTupleResponse =
  Array<RadarobservationTupleResponse.RadarobservationTupleResponseItem>;

export namespace RadarobservationTupleResponse {
  /**
   * Model representation of observation data for radar based sensor phenomenologies.
   * J2000 is the preferred coordinate frame for all observations, but in some cases
   * observations may be in another frame depending on the provider. Please see the
   * 'Discover' tab in the storefront to confirm coordinate frames by data provider.
   */
  export interface RadarobservationTupleResponseItem {
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
     * Ob detection time in ISO 8601 UTC with microsecond precision.
     */
    obTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * azimuth angle in degrees and topocentric frame.
     */
    azimuth?: number;

    /**
     * Sensor azimuth angle bias in degrees.
     */
    azimuthBias?: number;

    /**
     * Optional flag indicating whether the azimuth value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    azimuthMeasured?: boolean;

    /**
     * Rate of change of the line of sight azimuth in degrees per second.
     */
    azimuthRate?: number;

    /**
     * One sigma uncertainty in the line of sight azimuth angle measurement, in
     * degrees.
     */
    azimuthUnc?: number;

    /**
     * ID of the beam that produced this observation.
     */
    beam?: number;

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
     * Line of sight declination angle in degrees and J2000 coordinate frame.
     */
    declination?: number;

    /**
     * Optional flag indicating whether the declination value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    declinationMeasured?: boolean;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Corrected doppler measurement in meters per second.
     */
    doppler?: number;

    /**
     * One sigma uncertainty in the corrected doppler measurement, in meters/second.
     */
    dopplerUnc?: number;

    /**
     * Line of sight elevation in degrees and topocentric frame.
     */
    elevation?: number;

    /**
     * Sensor elevation bias in degrees.
     */
    elevationBias?: number;

    /**
     * Optional flag indicating whether the elevation value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    elevationMeasured?: boolean;

    /**
     * Rate of change of the line of sight elevation in degrees per second.
     */
    elevationRate?: number;

    /**
     * One sigma uncertainty in the line of sight elevation angle measurement, in
     * degrees.
     */
    elevationUnc?: number;

    /**
     * Unique identifier of the target on-orbit object, if correlated.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * The position of this observation within a track (FENCE, FIRST, IN, LAST,
     * SINGLE). This identifier is optional and, if null, no assumption should be made
     * regarding whether other observations may or may not exist to compose a track.
     */
    obPosition?: string;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Shared.OnorbitFull;

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
     * Optional identifier provided by observation source to indicate the target
     * onorbit object of this observation. This may be an internal identifier and not
     * necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by observation source to indicate the sensor
     * identifier which produced this observation. This may be an internal identifier
     * and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Radar cross section in meters squared for orthogonal polarization.
     */
    orthogonalRcs?: number;

    /**
     * one sigma uncertainty in orthogonal polarization Radar Cross Section, in
     * meters^2.
     */
    orthogonalRcsUnc?: number;

    /**
     * Line of sight right ascension in degrees and J2000 coordinate frame.
     */
    ra?: number;

    /**
     * Optional flag indicating whether the ra value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    raMeasured?: boolean;

    /**
     * Target range in km.
     */
    range?: number;

    /**
     * Range accelaration in km/s2.
     */
    rangeAccel?: number;

    /**
     * One sigma uncertainty in the range acceleration measurement, in
     * kilometers/(second^2).
     */
    rangeAccelUnc?: number;

    /**
     * Sensor range bias in km.
     */
    rangeBias?: number;

    /**
     * Optional flag indicating whether the range value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    rangeMeasured?: boolean;

    /**
     * Rate of change of the line of sight range in km/sec.
     */
    rangeRate?: number;

    /**
     * Optional flag indicating whether the rangeRate value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    rangeRateMeasured?: boolean;

    /**
     * One sigma uncertainty in the range rate measurement, in kilometers/second.
     */
    rangeRateUnc?: number;

    /**
     * One sigma uncertainty in the range measurement, in kilometers.
     */
    rangeUnc?: number;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * Radar cross section in meters squared for polarization principal.
     */
    rcs?: number;

    /**
     * one sigma uncertainty in principal polarization Radar Cross Section, in
     * meters^2.
     */
    rcsUnc?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * The reference frame of the observing sensor state. If the senReferenceFrame is
     * null it is assumed to be J2000.
     */
    senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * Sensor x position in km at obTime (if mobile/onorbit) in the specified
     * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
     */
    senx?: number;

    /**
     * Sensor y position in km at obTime (if mobile/onorbit) in the specified
     * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
     */
    seny?: number;

    /**
     * Sensor z position in km at obTime (if mobile/onorbit) in the specified
     * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
     */
    senz?: number;

    /**
     * Signal to noise ratio, in dB.
     */
    snr?: number;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to indicate the specific tasking which produced this
     * observation.
     */
    taskId?: string;

    /**
     * Sensor timing bias in seconds.
     */
    timingBias?: number;

    /**
     * Optional identifier of the track to which this observation belongs.
     */
    trackId?: string;

    /**
     * The beam type (or tracking state) in use at the time of collection of this
     * observation. Values include:
     *
     * INIT ACQ WITH INIT VALUES: Initial acquisition based on predefined initial
     * values such as position, velocity, or other specific parameters.
     *
     * INIT ACQ: Initial acquisition when no prior information or initial values such
     * as position or velocity are available.
     *
     * TRACKING SINGLE BEAM: Continuously tracks and monitors a single target using one
     * specific radar beam.
     *
     * TRACKING SEQUENTIAL ROVING: Sequentially tracks different targets or areas by
     * "roving" from one sector to the next in a systematic order.
     *
     * SELF ACQ WITH INIT VALUES: Autonomously acquires targets using predefined
     * starting parameters or initial values.
     *
     * SELF ACQ: Automatically detects and locks onto targets without the need for
     * predefined initial settings.
     *
     * NON-TRACKING: Non-tracking.
     */
    trackingState?: string;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Read only enumeration specifying the type of observation (e.g. OPTICAL, RADAR,
     * RF, etc).
     */
    type?: string;

    /**
     * Boolean indicating this observation is part of an uncorrelated track or was
     * unable to be correlated to a known object. This flag should only be set to true
     * by data providers after an attempt to correlate to an on-orbit object was made
     * and failed. If unable to correlate, the 'origObjectId' field may be populated
     * with an internal data provider specific identifier.
     */
    uct?: boolean;

    /**
     * X position of target in km in J2000 coordinate frame.
     */
    x?: number;

    /**
     * X velocity of target in km/sec in J2000 coordinate frame.
     */
    xvel?: number;

    /**
     * Y position of target in km in J2000 coordinate frame.
     */
    y?: number;

    /**
     * Y velocity of target in km/sec in J2000 coordinate frame.
     */
    yvel?: number;

    /**
     * Z position of target in km in J2000 coordinate frame.
     */
    z?: number;

    /**
     * Z velocity of target in km/sec in J2000 coordinate frame.
     */
    zvel?: number;
  }
}

export interface RadarobservationCreateParams {
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
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   */
  obTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * azimuth angle in degrees and topocentric frame.
   */
  azimuth?: number;

  /**
   * Sensor azimuth angle bias in degrees.
   */
  azimuthBias?: number;

  /**
   * Optional flag indicating whether the azimuth value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  azimuthMeasured?: boolean;

  /**
   * Rate of change of the line of sight azimuth in degrees per second.
   */
  azimuthRate?: number;

  /**
   * One sigma uncertainty in the line of sight azimuth angle measurement, in
   * degrees.
   */
  azimuthUnc?: number;

  /**
   * ID of the beam that produced this observation.
   */
  beam?: number;

  /**
   * Line of sight declination angle in degrees and J2000 coordinate frame.
   */
  declination?: number;

  /**
   * Optional flag indicating whether the declination value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  declinationMeasured?: boolean;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Corrected doppler measurement in meters per second.
   */
  doppler?: number;

  /**
   * One sigma uncertainty in the corrected doppler measurement, in meters/second.
   */
  dopplerUnc?: number;

  /**
   * Line of sight elevation in degrees and topocentric frame.
   */
  elevation?: number;

  /**
   * Sensor elevation bias in degrees.
   */
  elevationBias?: number;

  /**
   * Optional flag indicating whether the elevation value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  elevationMeasured?: boolean;

  /**
   * Rate of change of the line of sight elevation in degrees per second.
   */
  elevationRate?: number;

  /**
   * One sigma uncertainty in the line of sight elevation angle measurement, in
   * degrees.
   */
  elevationUnc?: number;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * The position of this observation within a track (FENCE, FIRST, IN, LAST,
   * SINGLE). This identifier is optional and, if null, no assumption should be made
   * regarding whether other observations may or may not exist to compose a track.
   */
  obPosition?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by observation source to indicate the target
   * onorbit object of this observation. This may be an internal identifier and not
   * necessarily a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by observation source to indicate the sensor
   * identifier which produced this observation. This may be an internal identifier
   * and not necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Radar cross section in meters squared for orthogonal polarization.
   */
  orthogonalRcs?: number;

  /**
   * one sigma uncertainty in orthogonal polarization Radar Cross Section, in
   * meters^2.
   */
  orthogonalRcsUnc?: number;

  /**
   * Line of sight right ascension in degrees and J2000 coordinate frame.
   */
  ra?: number;

  /**
   * Optional flag indicating whether the ra value is measured (true) or computed
   * (false). If null, consumers may consult the data provider for information
   * regarding whether the corresponding value is computed or measured.
   */
  raMeasured?: boolean;

  /**
   * Target range in km.
   */
  range?: number;

  /**
   * Range accelaration in km/s2.
   */
  rangeAccel?: number;

  /**
   * One sigma uncertainty in the range acceleration measurement, in
   * kilometers/(second^2).
   */
  rangeAccelUnc?: number;

  /**
   * Sensor range bias in km.
   */
  rangeBias?: number;

  /**
   * Optional flag indicating whether the range value is measured (true) or computed
   * (false). If null, consumers may consult the data provider for information
   * regarding whether the corresponding value is computed or measured.
   */
  rangeMeasured?: boolean;

  /**
   * Rate of change of the line of sight range in km/sec.
   */
  rangeRate?: number;

  /**
   * Optional flag indicating whether the rangeRate value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  rangeRateMeasured?: boolean;

  /**
   * One sigma uncertainty in the range rate measurement, in kilometers/second.
   */
  rangeRateUnc?: number;

  /**
   * One sigma uncertainty in the range measurement, in kilometers.
   */
  rangeUnc?: number;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * Radar cross section in meters squared for polarization principal.
   */
  rcs?: number;

  /**
   * one sigma uncertainty in principal polarization Radar Cross Section, in
   * meters^2.
   */
  rcsUnc?: number;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * The reference frame of the observing sensor state. If the senReferenceFrame is
   * null it is assumed to be J2000.
   */
  senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

  /**
   * Sensor x position in km at obTime (if mobile/onorbit) in the specified
   * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
   */
  senx?: number;

  /**
   * Sensor y position in km at obTime (if mobile/onorbit) in the specified
   * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
   */
  seny?: number;

  /**
   * Sensor z position in km at obTime (if mobile/onorbit) in the specified
   * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
   */
  senz?: number;

  /**
   * Signal to noise ratio, in dB.
   */
  snr?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to indicate the specific tasking which produced this
   * observation.
   */
  taskId?: string;

  /**
   * Sensor timing bias in seconds.
   */
  timingBias?: number;

  /**
   * Optional identifier of the track to which this observation belongs.
   */
  trackId?: string;

  /**
   * The beam type (or tracking state) in use at the time of collection of this
   * observation. Values include:
   *
   * INIT ACQ WITH INIT VALUES: Initial acquisition based on predefined initial
   * values such as position, velocity, or other specific parameters.
   *
   * INIT ACQ: Initial acquisition when no prior information or initial values such
   * as position or velocity are available.
   *
   * TRACKING SINGLE BEAM: Continuously tracks and monitors a single target using one
   * specific radar beam.
   *
   * TRACKING SEQUENTIAL ROVING: Sequentially tracks different targets or areas by
   * "roving" from one sector to the next in a systematic order.
   *
   * SELF ACQ WITH INIT VALUES: Autonomously acquires targets using predefined
   * starting parameters or initial values.
   *
   * SELF ACQ: Automatically detects and locks onto targets without the need for
   * predefined initial settings.
   *
   * NON-TRACKING: Non-tracking.
   */
  trackingState?: string;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Boolean indicating this observation is part of an uncorrelated track or was
   * unable to be correlated to a known object. This flag should only be set to true
   * by data providers after an attempt to correlate to an on-orbit object was made
   * and failed. If unable to correlate, the 'origObjectId' field may be populated
   * with an internal data provider specific identifier.
   */
  uct?: boolean;

  /**
   * X position of target in km in J2000 coordinate frame.
   */
  x?: number;

  /**
   * X velocity of target in km/sec in J2000 coordinate frame.
   */
  xvel?: number;

  /**
   * Y position of target in km in J2000 coordinate frame.
   */
  y?: number;

  /**
   * Y velocity of target in km/sec in J2000 coordinate frame.
   */
  yvel?: number;

  /**
   * Z position of target in km in J2000 coordinate frame.
   */
  z?: number;

  /**
   * Z velocity of target in km/sec in J2000 coordinate frame.
   */
  zvel?: number;
}

export interface RadarobservationListParams extends OffsetPageParams {
  /**
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;
}

export interface RadarobservationCountParams {
  /**
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface RadarobservationCreateBulkParams {
  body: Array<RadarobservationCreateBulkParams.Body>;
}

export namespace RadarobservationCreateBulkParams {
  /**
   * Model representation of observation data for radar based sensor phenomenologies.
   * J2000 is the preferred coordinate frame for all observations, but in some cases
   * observations may be in another frame depending on the provider. Please see the
   * 'Discover' tab in the storefront to confirm coordinate frames by data provider.
   */
  export interface Body {
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
     * Ob detection time in ISO 8601 UTC with microsecond precision.
     */
    obTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * azimuth angle in degrees and topocentric frame.
     */
    azimuth?: number;

    /**
     * Sensor azimuth angle bias in degrees.
     */
    azimuthBias?: number;

    /**
     * Optional flag indicating whether the azimuth value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    azimuthMeasured?: boolean;

    /**
     * Rate of change of the line of sight azimuth in degrees per second.
     */
    azimuthRate?: number;

    /**
     * One sigma uncertainty in the line of sight azimuth angle measurement, in
     * degrees.
     */
    azimuthUnc?: number;

    /**
     * ID of the beam that produced this observation.
     */
    beam?: number;

    /**
     * Line of sight declination angle in degrees and J2000 coordinate frame.
     */
    declination?: number;

    /**
     * Optional flag indicating whether the declination value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    declinationMeasured?: boolean;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Corrected doppler measurement in meters per second.
     */
    doppler?: number;

    /**
     * One sigma uncertainty in the corrected doppler measurement, in meters/second.
     */
    dopplerUnc?: number;

    /**
     * Line of sight elevation in degrees and topocentric frame.
     */
    elevation?: number;

    /**
     * Sensor elevation bias in degrees.
     */
    elevationBias?: number;

    /**
     * Optional flag indicating whether the elevation value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    elevationMeasured?: boolean;

    /**
     * Rate of change of the line of sight elevation in degrees per second.
     */
    elevationRate?: number;

    /**
     * One sigma uncertainty in the line of sight elevation angle measurement, in
     * degrees.
     */
    elevationUnc?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * The position of this observation within a track (FENCE, FIRST, IN, LAST,
     * SINGLE). This identifier is optional and, if null, no assumption should be made
     * regarding whether other observations may or may not exist to compose a track.
     */
    obPosition?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by observation source to indicate the target
     * onorbit object of this observation. This may be an internal identifier and not
     * necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by observation source to indicate the sensor
     * identifier which produced this observation. This may be an internal identifier
     * and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Radar cross section in meters squared for orthogonal polarization.
     */
    orthogonalRcs?: number;

    /**
     * one sigma uncertainty in orthogonal polarization Radar Cross Section, in
     * meters^2.
     */
    orthogonalRcsUnc?: number;

    /**
     * Line of sight right ascension in degrees and J2000 coordinate frame.
     */
    ra?: number;

    /**
     * Optional flag indicating whether the ra value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    raMeasured?: boolean;

    /**
     * Target range in km.
     */
    range?: number;

    /**
     * Range accelaration in km/s2.
     */
    rangeAccel?: number;

    /**
     * One sigma uncertainty in the range acceleration measurement, in
     * kilometers/(second^2).
     */
    rangeAccelUnc?: number;

    /**
     * Sensor range bias in km.
     */
    rangeBias?: number;

    /**
     * Optional flag indicating whether the range value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    rangeMeasured?: boolean;

    /**
     * Rate of change of the line of sight range in km/sec.
     */
    rangeRate?: number;

    /**
     * Optional flag indicating whether the rangeRate value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    rangeRateMeasured?: boolean;

    /**
     * One sigma uncertainty in the range rate measurement, in kilometers/second.
     */
    rangeRateUnc?: number;

    /**
     * One sigma uncertainty in the range measurement, in kilometers.
     */
    rangeUnc?: number;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * Radar cross section in meters squared for polarization principal.
     */
    rcs?: number;

    /**
     * one sigma uncertainty in principal polarization Radar Cross Section, in
     * meters^2.
     */
    rcsUnc?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * The reference frame of the observing sensor state. If the senReferenceFrame is
     * null it is assumed to be J2000.
     */
    senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * Sensor x position in km at obTime (if mobile/onorbit) in the specified
     * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
     */
    senx?: number;

    /**
     * Sensor y position in km at obTime (if mobile/onorbit) in the specified
     * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
     */
    seny?: number;

    /**
     * Sensor z position in km at obTime (if mobile/onorbit) in the specified
     * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
     */
    senz?: number;

    /**
     * Signal to noise ratio, in dB.
     */
    snr?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to indicate the specific tasking which produced this
     * observation.
     */
    taskId?: string;

    /**
     * Sensor timing bias in seconds.
     */
    timingBias?: number;

    /**
     * Optional identifier of the track to which this observation belongs.
     */
    trackId?: string;

    /**
     * The beam type (or tracking state) in use at the time of collection of this
     * observation. Values include:
     *
     * INIT ACQ WITH INIT VALUES: Initial acquisition based on predefined initial
     * values such as position, velocity, or other specific parameters.
     *
     * INIT ACQ: Initial acquisition when no prior information or initial values such
     * as position or velocity are available.
     *
     * TRACKING SINGLE BEAM: Continuously tracks and monitors a single target using one
     * specific radar beam.
     *
     * TRACKING SEQUENTIAL ROVING: Sequentially tracks different targets or areas by
     * "roving" from one sector to the next in a systematic order.
     *
     * SELF ACQ WITH INIT VALUES: Autonomously acquires targets using predefined
     * starting parameters or initial values.
     *
     * SELF ACQ: Automatically detects and locks onto targets without the need for
     * predefined initial settings.
     *
     * NON-TRACKING: Non-tracking.
     */
    trackingState?: string;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Boolean indicating this observation is part of an uncorrelated track or was
     * unable to be correlated to a known object. This flag should only be set to true
     * by data providers after an attempt to correlate to an on-orbit object was made
     * and failed. If unable to correlate, the 'origObjectId' field may be populated
     * with an internal data provider specific identifier.
     */
    uct?: boolean;

    /**
     * X position of target in km in J2000 coordinate frame.
     */
    x?: number;

    /**
     * X velocity of target in km/sec in J2000 coordinate frame.
     */
    xvel?: number;

    /**
     * Y position of target in km in J2000 coordinate frame.
     */
    y?: number;

    /**
     * Y velocity of target in km/sec in J2000 coordinate frame.
     */
    yvel?: number;

    /**
     * Z position of target in km in J2000 coordinate frame.
     */
    z?: number;

    /**
     * Z velocity of target in km/sec in J2000 coordinate frame.
     */
    zvel?: number;
  }
}

export interface RadarobservationGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface RadarobservationTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface RadarobservationUnvalidatedPublishParams {
  body: Array<RadarobservationUnvalidatedPublishParams.Body>;
}

export namespace RadarobservationUnvalidatedPublishParams {
  /**
   * Model representation of observation data for radar based sensor phenomenologies.
   * J2000 is the preferred coordinate frame for all observations, but in some cases
   * observations may be in another frame depending on the provider. Please see the
   * 'Discover' tab in the storefront to confirm coordinate frames by data provider.
   */
  export interface Body {
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
     * Ob detection time in ISO 8601 UTC with microsecond precision.
     */
    obTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * azimuth angle in degrees and topocentric frame.
     */
    azimuth?: number;

    /**
     * Sensor azimuth angle bias in degrees.
     */
    azimuthBias?: number;

    /**
     * Optional flag indicating whether the azimuth value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    azimuthMeasured?: boolean;

    /**
     * Rate of change of the line of sight azimuth in degrees per second.
     */
    azimuthRate?: number;

    /**
     * One sigma uncertainty in the line of sight azimuth angle measurement, in
     * degrees.
     */
    azimuthUnc?: number;

    /**
     * ID of the beam that produced this observation.
     */
    beam?: number;

    /**
     * Line of sight declination angle in degrees and J2000 coordinate frame.
     */
    declination?: number;

    /**
     * Optional flag indicating whether the declination value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    declinationMeasured?: boolean;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Corrected doppler measurement in meters per second.
     */
    doppler?: number;

    /**
     * One sigma uncertainty in the corrected doppler measurement, in meters/second.
     */
    dopplerUnc?: number;

    /**
     * Line of sight elevation in degrees and topocentric frame.
     */
    elevation?: number;

    /**
     * Sensor elevation bias in degrees.
     */
    elevationBias?: number;

    /**
     * Optional flag indicating whether the elevation value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    elevationMeasured?: boolean;

    /**
     * Rate of change of the line of sight elevation in degrees per second.
     */
    elevationRate?: number;

    /**
     * One sigma uncertainty in the line of sight elevation angle measurement, in
     * degrees.
     */
    elevationUnc?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * The position of this observation within a track (FENCE, FIRST, IN, LAST,
     * SINGLE). This identifier is optional and, if null, no assumption should be made
     * regarding whether other observations may or may not exist to compose a track.
     */
    obPosition?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by observation source to indicate the target
     * onorbit object of this observation. This may be an internal identifier and not
     * necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by observation source to indicate the sensor
     * identifier which produced this observation. This may be an internal identifier
     * and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Radar cross section in meters squared for orthogonal polarization.
     */
    orthogonalRcs?: number;

    /**
     * one sigma uncertainty in orthogonal polarization Radar Cross Section, in
     * meters^2.
     */
    orthogonalRcsUnc?: number;

    /**
     * Line of sight right ascension in degrees and J2000 coordinate frame.
     */
    ra?: number;

    /**
     * Optional flag indicating whether the ra value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    raMeasured?: boolean;

    /**
     * Target range in km.
     */
    range?: number;

    /**
     * Range accelaration in km/s2.
     */
    rangeAccel?: number;

    /**
     * One sigma uncertainty in the range acceleration measurement, in
     * kilometers/(second^2).
     */
    rangeAccelUnc?: number;

    /**
     * Sensor range bias in km.
     */
    rangeBias?: number;

    /**
     * Optional flag indicating whether the range value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    rangeMeasured?: boolean;

    /**
     * Rate of change of the line of sight range in km/sec.
     */
    rangeRate?: number;

    /**
     * Optional flag indicating whether the rangeRate value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    rangeRateMeasured?: boolean;

    /**
     * One sigma uncertainty in the range rate measurement, in kilometers/second.
     */
    rangeRateUnc?: number;

    /**
     * One sigma uncertainty in the range measurement, in kilometers.
     */
    rangeUnc?: number;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * Radar cross section in meters squared for polarization principal.
     */
    rcs?: number;

    /**
     * one sigma uncertainty in principal polarization Radar Cross Section, in
     * meters^2.
     */
    rcsUnc?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * The reference frame of the observing sensor state. If the senReferenceFrame is
     * null it is assumed to be J2000.
     */
    senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * Sensor x position in km at obTime (if mobile/onorbit) in the specified
     * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
     */
    senx?: number;

    /**
     * Sensor y position in km at obTime (if mobile/onorbit) in the specified
     * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
     */
    seny?: number;

    /**
     * Sensor z position in km at obTime (if mobile/onorbit) in the specified
     * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
     */
    senz?: number;

    /**
     * Signal to noise ratio, in dB.
     */
    snr?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to indicate the specific tasking which produced this
     * observation.
     */
    taskId?: string;

    /**
     * Sensor timing bias in seconds.
     */
    timingBias?: number;

    /**
     * Optional identifier of the track to which this observation belongs.
     */
    trackId?: string;

    /**
     * The beam type (or tracking state) in use at the time of collection of this
     * observation. Values include:
     *
     * INIT ACQ WITH INIT VALUES: Initial acquisition based on predefined initial
     * values such as position, velocity, or other specific parameters.
     *
     * INIT ACQ: Initial acquisition when no prior information or initial values such
     * as position or velocity are available.
     *
     * TRACKING SINGLE BEAM: Continuously tracks and monitors a single target using one
     * specific radar beam.
     *
     * TRACKING SEQUENTIAL ROVING: Sequentially tracks different targets or areas by
     * "roving" from one sector to the next in a systematic order.
     *
     * SELF ACQ WITH INIT VALUES: Autonomously acquires targets using predefined
     * starting parameters or initial values.
     *
     * SELF ACQ: Automatically detects and locks onto targets without the need for
     * predefined initial settings.
     *
     * NON-TRACKING: Non-tracking.
     */
    trackingState?: string;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Boolean indicating this observation is part of an uncorrelated track or was
     * unable to be correlated to a known object. This flag should only be set to true
     * by data providers after an attempt to correlate to an on-orbit object was made
     * and failed. If unable to correlate, the 'origObjectId' field may be populated
     * with an internal data provider specific identifier.
     */
    uct?: boolean;

    /**
     * X position of target in km in J2000 coordinate frame.
     */
    x?: number;

    /**
     * X velocity of target in km/sec in J2000 coordinate frame.
     */
    xvel?: number;

    /**
     * Y position of target in km in J2000 coordinate frame.
     */
    y?: number;

    /**
     * Y velocity of target in km/sec in J2000 coordinate frame.
     */
    yvel?: number;

    /**
     * Z position of target in km in J2000 coordinate frame.
     */
    z?: number;

    /**
     * Z velocity of target in km/sec in J2000 coordinate frame.
     */
    zvel?: number;
  }
}

Radarobservation.History = History;

export declare namespace Radarobservation {
  export {
    type RadarobservationListResponse as RadarobservationListResponse,
    type RadarobservationCountResponse as RadarobservationCountResponse,
    type RadarobservationGetResponse as RadarobservationGetResponse,
    type RadarobservationQueryhelpResponse as RadarobservationQueryhelpResponse,
    type RadarobservationTupleResponse as RadarobservationTupleResponse,
    type RadarobservationListResponsesOffsetPage as RadarobservationListResponsesOffsetPage,
    type RadarobservationCreateParams as RadarobservationCreateParams,
    type RadarobservationListParams as RadarobservationListParams,
    type RadarobservationCountParams as RadarobservationCountParams,
    type RadarobservationCreateBulkParams as RadarobservationCreateBulkParams,
    type RadarobservationGetParams as RadarobservationGetParams,
    type RadarobservationTupleParams as RadarobservationTupleParams,
    type RadarobservationUnvalidatedPublishParams as RadarobservationUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListResponsesOffsetPage as HistoryListResponsesOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
