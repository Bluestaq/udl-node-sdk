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

export class PassiveRadarObservation extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single PassiveRadarObservation as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.observations.passiveRadarObservation.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   obTime: '2023-01-24T23:35:26.518152Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: PassiveRadarObservationCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/passiveradarobservation', {
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
   * for await (const passiveRadarObservationListResponse of client.observations.passiveRadarObservation.list(
   *   { obTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PassiveRadarObservationListParams,
    options?: RequestOptions,
  ): PagePromise<PassiveRadarObservationListResponsesOffsetPage, PassiveRadarObservationListResponse> {
    return this._client.getAPIList(
      '/udl/passiveradarobservation',
      OffsetPage<PassiveRadarObservationListResponse>,
      { query, ...options },
    );
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
   *   await client.observations.passiveRadarObservation.count({
   *     obTime: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  count(query: PassiveRadarObservationCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/passiveradarobservation/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * PassiveRadarObservation records as a POST body and ingest into the database.
   * This operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.observations.passiveRadarObservation.createBulk(
   *   {
   *     body: [
   *       {
   *         classificationMarking: 'U',
   *         dataMode: 'TEST',
   *         obTime: '2023-01-24T23:35:26.518152Z',
   *         source: 'Bluestaq',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  createBulk(params: PassiveRadarObservationCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/passiveradarobservation/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to take multiple PassiveRadarObservation records as a POST
   * body and ingest into the database. This operation is intended to be used for
   * automated feeds into UDL. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.observations.passiveRadarObservation.fileCreate(
   *   {
   *     body: [
   *       {
   *         classificationMarking: 'U',
   *         dataMode: 'TEST',
   *         obTime: '2023-01-24T23:35:26.518152Z',
   *         source: 'Bluestaq',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  fileCreate(params: PassiveRadarObservationFileCreateParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-passiveradar', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single PassiveRadarObservation record by its unique
   * ID passed as a path parameter.
   *
   * @example
   * ```ts
   * const passiveRadarObservation =
   *   await client.observations.passiveRadarObservation.get(
   *     'id',
   *   );
   * ```
   */
  get(
    id: string,
    query: PassiveRadarObservationGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PassiveRadarObservationGetResponse> {
    return this._client.get(path`/udl/passiveradarobservation/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.observations.passiveRadarObservation.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<PassiveRadarObservationQueryhelpResponse> {
    return this._client.get('/udl/passiveradarobservation/queryhelp', options);
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
   *   await client.observations.passiveRadarObservation.tuple({
   *     columns: 'columns',
   *     obTime: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  tuple(
    query: PassiveRadarObservationTupleParams,
    options?: RequestOptions,
  ): APIPromise<PassiveRadarObservationTupleResponse> {
    return this._client.get('/udl/passiveradarobservation/tuple', { query, ...options });
  }
}

export type PassiveRadarObservationListResponsesOffsetPage = OffsetPage<PassiveRadarObservationListResponse>;

/**
 * Model representation of observation data for passive radar based sensor
 * phenomenologies. Passive radar is a form of radar that instead of using a
 * dedicated transmitter, as is the case for traditional radar, utilizes radio
 * frequency (RF) energy already in the environment. With an abundance of existing
 * energy available from geographically diverse sources, passive radar offers wide
 * field of view coverage and long observation times. A passive radar system is
 * comprised of separately located transmitter (for example, FM radio stations), a
 * reference receiver, and a surveillance sensor. The transmitted signal
 * illuminates multiple targets over a broad angular extent as well as providing a
 * signal at the reference site. The reflected energy is received at the
 * surveillance site for processing with the reference signal. The long observation
 * durations that are possible with this technology enables an accurate orbit to be
 * determined within a single pass.
 */
export interface PassiveRadarObservationListResponse {
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
   * The target Acceleration measurement in kilometers/sec^2 for this observation.
   */
  accel?: number;

  /**
   * The target Acceleration uncertainty measurement in kilometers/sec^2 for this
   * observation.
   */
  accelUnc?: number;

  /**
   * The target altitude relative to WGS-84 ellipsoid, in kilometers for this
   * observation.
   */
  alt?: number;

  /**
   * Line of sight azimuth angle in degrees and topocentric frame.
   */
  azimuth?: number;

  /**
   * Sensor azimuth angle bias in degrees.
   */
  azimuthBias?: number;

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
   * Target bistatic path distance in kilometers. This is the
   * transmitter-to-target-to-surveillance site distance.
   */
  bistaticRange?: number;

  /**
   * Bistatic range acceleration in kilometers/sec^2.
   */
  bistaticRangeAccel?: number;

  /**
   * One sigma uncertainty in the bistatic range acceleration measurement, in
   * kilometers/sec^2.
   */
  bistaticRangeAccelUnc?: number;

  /**
   * Sensor bistatic range bias in kilometers.
   */
  bistaticRangeBias?: number;

  /**
   * Rate of change of the bistatic path in kilometers/sec.
   */
  bistaticRangeRate?: number;

  /**
   * One sigma uncertainty in rate of change of the bistatic path in kilometers/sec.
   */
  bistaticRangeRateUnc?: number;

  /**
   * One sigma uncertainty in bistatic range in kilometers.
   */
  bistaticRangeUnc?: number;

  /**
   * Coning angle in degrees.
   */
  coning?: number;

  /**
   * One sigma uncertainty in the coning angle measurement, in degrees.
   */
  coningUnc?: number;

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
   * The time difference, in seconds, between the signal collected at the
   * surveillance site (after being reflected from the target) and the reference site
   * (direct path line-of-sight signal).
   */
  delay?: number;

  /**
   * Delay bias in seconds.
   */
  delayBias?: number;

  /**
   * One sigma uncertainty in the delay measurement, in seconds.
   */
  delayUnc?: number;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Doppler measurement in hertz.
   */
  doppler?: number;

  /**
   * One sigma uncertainty in the Doppler measurement in hertz.
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
   * Rate of change of the line of sight elevation in degrees per second.
   */
  elevationRate?: number;

  /**
   * One sigma uncertainty in the line of sight elevation angle measurement, in
   * degrees.
   */
  elevationUnc?: number;

  /**
   * Optional external observation identifier provided by the source.
   */
  extObservationId?: string;

  /**
   * Unique identifier of the target satellite on-orbit object. This ID can be used
   * to obtain additional information on an OnOrbit object using the 'get by ID'
   * operation (e.g. /udl/onorbit/{id}). For example, the OnOrbit with idOnOrbit =
   * 25544 would be queried as /udl/onorbit/25544.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the transmitter. This ID can be used to obtain additional
   * information on an RFEmitter using the 'get by ID' operation (e.g.
   * /udl/rfemitter/{id}). For example, the RFEmitter with idRFEmitter = abc would be
   * queried as /udl/rfemitter/abc.
   */
  idRFEmitter?: string;

  /**
   * Unique identifier of the reporting surveillance sensor. This ID can be used to
   * obtain additional information on a sensor using the 'get by ID' operation (e.g.
   * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
   * as /udl/sensor/abc.
   */
  idSensor?: string;

  /**
   * Unique identifier of the reference receiver sensor. This ID can be used to
   * obtain additional information on a sensor using the 'get by ID' operation (e.g.
   * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
   * as /udl/sensor/abc.
   */
  idSensorRefReceiver?: string;

  /**
   * WGS-84 target latitude sub-point at observation time (obTime), represented as
   * -90 to 90 degrees (negative values south of equator).
   */
  lat?: number;

  /**
   * WGS-84 target longitude sub-point at observation time (obTime), represented as
   * -180 to 180 degrees (negative values west of Prime Meridian).
   */
  lon?: number;

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
   * One sigma uncertainty in orthogonal polarization Radar Cross Section, in
   * meters^2.
   */
  orthogonalRcsUnc?: number;

  /**
   * Line of sight right ascension in degrees and J2000 coordinate frame.
   */
  ra?: number;

  /**
   * Radar cross section in meters squared for polarization principal.
   */
  rcs?: number;

  /**
   * One sigma uncertainty in principal polarization Radar Cross Section, in
   * meters^2.
   */
  rcsUnc?: number;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

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
   * Time of flight (TOF) in seconds. This is the calculated propagation time from
   * transmitter-to-target-to-surveillance site.
   */
  tof?: number;

  /**
   * The Time of Flight (TOF) bias in seconds.
   */
  tofBias?: number;

  /**
   * One sigma uncertainty in time of flight in seconds.
   */
  tofUnc?: number;

  /**
   * Unique identifier of a track that represents a tracklet for this observation.
   */
  trackId?: string;

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
   * X velocity of target in kilometers/sec in J2000 coordinate frame.
   */
  xvel?: number;

  /**
   * Y velocity of target in kilometers/sec in J2000 coordinate frame.
   */
  yvel?: number;

  /**
   * Z velocity of target in kilometers/sec in J2000 coordinate frame.
   */
  zvel?: number;
}

export type PassiveRadarObservationCountResponse = string;

/**
 * Model representation of observation data for passive radar based sensor
 * phenomenologies. Passive radar is a form of radar that instead of using a
 * dedicated transmitter, as is the case for traditional radar, utilizes radio
 * frequency (RF) energy already in the environment. With an abundance of existing
 * energy available from geographically diverse sources, passive radar offers wide
 * field of view coverage and long observation times. A passive radar system is
 * comprised of separately located transmitter (for example, FM radio stations), a
 * reference receiver, and a surveillance sensor. The transmitted signal
 * illuminates multiple targets over a broad angular extent as well as providing a
 * signal at the reference site. The reflected energy is received at the
 * surveillance site for processing with the reference signal. The long observation
 * durations that are possible with this technology enables an accurate orbit to be
 * determined within a single pass.
 */
export interface PassiveRadarObservationGetResponse {
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
   * The target Acceleration measurement in kilometers/sec^2 for this observation.
   */
  accel?: number;

  /**
   * The target Acceleration uncertainty measurement in kilometers/sec^2 for this
   * observation.
   */
  accelUnc?: number;

  /**
   * The target altitude relative to WGS-84 ellipsoid, in kilometers for this
   * observation.
   */
  alt?: number;

  /**
   * Line of sight azimuth angle in degrees and topocentric frame.
   */
  azimuth?: number;

  /**
   * Sensor azimuth angle bias in degrees.
   */
  azimuthBias?: number;

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
   * Target bistatic path distance in kilometers. This is the
   * transmitter-to-target-to-surveillance site distance.
   */
  bistaticRange?: number;

  /**
   * Bistatic range acceleration in kilometers/sec^2.
   */
  bistaticRangeAccel?: number;

  /**
   * One sigma uncertainty in the bistatic range acceleration measurement, in
   * kilometers/sec^2.
   */
  bistaticRangeAccelUnc?: number;

  /**
   * Sensor bistatic range bias in kilometers.
   */
  bistaticRangeBias?: number;

  /**
   * Rate of change of the bistatic path in kilometers/sec.
   */
  bistaticRangeRate?: number;

  /**
   * One sigma uncertainty in rate of change of the bistatic path in kilometers/sec.
   */
  bistaticRangeRateUnc?: number;

  /**
   * One sigma uncertainty in bistatic range in kilometers.
   */
  bistaticRangeUnc?: number;

  /**
   * Coning angle in degrees.
   */
  coning?: number;

  /**
   * One sigma uncertainty in the coning angle measurement, in degrees.
   */
  coningUnc?: number;

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
   * The time difference, in seconds, between the signal collected at the
   * surveillance site (after being reflected from the target) and the reference site
   * (direct path line-of-sight signal).
   */
  delay?: number;

  /**
   * Delay bias in seconds.
   */
  delayBias?: number;

  /**
   * One sigma uncertainty in the delay measurement, in seconds.
   */
  delayUnc?: number;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Doppler measurement in hertz.
   */
  doppler?: number;

  /**
   * One sigma uncertainty in the Doppler measurement in hertz.
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
   * Rate of change of the line of sight elevation in degrees per second.
   */
  elevationRate?: number;

  /**
   * One sigma uncertainty in the line of sight elevation angle measurement, in
   * degrees.
   */
  elevationUnc?: number;

  /**
   * Optional external observation identifier provided by the source.
   */
  extObservationId?: string;

  /**
   * Unique identifier of the target satellite on-orbit object. This ID can be used
   * to obtain additional information on an OnOrbit object using the 'get by ID'
   * operation (e.g. /udl/onorbit/{id}). For example, the OnOrbit with idOnOrbit =
   * 25544 would be queried as /udl/onorbit/25544.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the transmitter. This ID can be used to obtain additional
   * information on an RFEmitter using the 'get by ID' operation (e.g.
   * /udl/rfemitter/{id}). For example, the RFEmitter with idRFEmitter = abc would be
   * queried as /udl/rfemitter/abc.
   */
  idRFEmitter?: string;

  /**
   * Unique identifier of the reporting surveillance sensor. This ID can be used to
   * obtain additional information on a sensor using the 'get by ID' operation (e.g.
   * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
   * as /udl/sensor/abc.
   */
  idSensor?: string;

  /**
   * Unique identifier of the reference receiver sensor. This ID can be used to
   * obtain additional information on a sensor using the 'get by ID' operation (e.g.
   * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
   * as /udl/sensor/abc.
   */
  idSensorRefReceiver?: string;

  /**
   * WGS-84 target latitude sub-point at observation time (obTime), represented as
   * -90 to 90 degrees (negative values south of equator).
   */
  lat?: number;

  /**
   * WGS-84 target longitude sub-point at observation time (obTime), represented as
   * -180 to 180 degrees (negative values west of Prime Meridian).
   */
  lon?: number;

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
   * One sigma uncertainty in orthogonal polarization Radar Cross Section, in
   * meters^2.
   */
  orthogonalRcsUnc?: number;

  /**
   * Line of sight right ascension in degrees and J2000 coordinate frame.
   */
  ra?: number;

  /**
   * Radar cross section in meters squared for polarization principal.
   */
  rcs?: number;

  /**
   * One sigma uncertainty in principal polarization Radar Cross Section, in
   * meters^2.
   */
  rcsUnc?: number;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

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
   * Time of flight (TOF) in seconds. This is the calculated propagation time from
   * transmitter-to-target-to-surveillance site.
   */
  tof?: number;

  /**
   * The Time of Flight (TOF) bias in seconds.
   */
  tofBias?: number;

  /**
   * One sigma uncertainty in time of flight in seconds.
   */
  tofUnc?: number;

  /**
   * Unique identifier of a track that represents a tracklet for this observation.
   */
  trackId?: string;

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
   * X velocity of target in kilometers/sec in J2000 coordinate frame.
   */
  xvel?: number;

  /**
   * Y velocity of target in kilometers/sec in J2000 coordinate frame.
   */
  yvel?: number;

  /**
   * Z velocity of target in kilometers/sec in J2000 coordinate frame.
   */
  zvel?: number;
}

export interface PassiveRadarObservationQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<PassiveRadarObservationQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace PassiveRadarObservationQueryhelpResponse {
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

export type PassiveRadarObservationTupleResponse =
  Array<PassiveRadarObservationTupleResponse.PassiveRadarObservationTupleResponseItem>;

export namespace PassiveRadarObservationTupleResponse {
  /**
   * Model representation of observation data for passive radar based sensor
   * phenomenologies. Passive radar is a form of radar that instead of using a
   * dedicated transmitter, as is the case for traditional radar, utilizes radio
   * frequency (RF) energy already in the environment. With an abundance of existing
   * energy available from geographically diverse sources, passive radar offers wide
   * field of view coverage and long observation times. A passive radar system is
   * comprised of separately located transmitter (for example, FM radio stations), a
   * reference receiver, and a surveillance sensor. The transmitted signal
   * illuminates multiple targets over a broad angular extent as well as providing a
   * signal at the reference site. The reflected energy is received at the
   * surveillance site for processing with the reference signal. The long observation
   * durations that are possible with this technology enables an accurate orbit to be
   * determined within a single pass.
   */
  export interface PassiveRadarObservationTupleResponseItem {
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
     * The target Acceleration measurement in kilometers/sec^2 for this observation.
     */
    accel?: number;

    /**
     * The target Acceleration uncertainty measurement in kilometers/sec^2 for this
     * observation.
     */
    accelUnc?: number;

    /**
     * The target altitude relative to WGS-84 ellipsoid, in kilometers for this
     * observation.
     */
    alt?: number;

    /**
     * Line of sight azimuth angle in degrees and topocentric frame.
     */
    azimuth?: number;

    /**
     * Sensor azimuth angle bias in degrees.
     */
    azimuthBias?: number;

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
     * Target bistatic path distance in kilometers. This is the
     * transmitter-to-target-to-surveillance site distance.
     */
    bistaticRange?: number;

    /**
     * Bistatic range acceleration in kilometers/sec^2.
     */
    bistaticRangeAccel?: number;

    /**
     * One sigma uncertainty in the bistatic range acceleration measurement, in
     * kilometers/sec^2.
     */
    bistaticRangeAccelUnc?: number;

    /**
     * Sensor bistatic range bias in kilometers.
     */
    bistaticRangeBias?: number;

    /**
     * Rate of change of the bistatic path in kilometers/sec.
     */
    bistaticRangeRate?: number;

    /**
     * One sigma uncertainty in rate of change of the bistatic path in kilometers/sec.
     */
    bistaticRangeRateUnc?: number;

    /**
     * One sigma uncertainty in bistatic range in kilometers.
     */
    bistaticRangeUnc?: number;

    /**
     * Coning angle in degrees.
     */
    coning?: number;

    /**
     * One sigma uncertainty in the coning angle measurement, in degrees.
     */
    coningUnc?: number;

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
     * The time difference, in seconds, between the signal collected at the
     * surveillance site (after being reflected from the target) and the reference site
     * (direct path line-of-sight signal).
     */
    delay?: number;

    /**
     * Delay bias in seconds.
     */
    delayBias?: number;

    /**
     * One sigma uncertainty in the delay measurement, in seconds.
     */
    delayUnc?: number;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Doppler measurement in hertz.
     */
    doppler?: number;

    /**
     * One sigma uncertainty in the Doppler measurement in hertz.
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
     * Rate of change of the line of sight elevation in degrees per second.
     */
    elevationRate?: number;

    /**
     * One sigma uncertainty in the line of sight elevation angle measurement, in
     * degrees.
     */
    elevationUnc?: number;

    /**
     * Optional external observation identifier provided by the source.
     */
    extObservationId?: string;

    /**
     * Unique identifier of the target satellite on-orbit object. This ID can be used
     * to obtain additional information on an OnOrbit object using the 'get by ID'
     * operation (e.g. /udl/onorbit/{id}). For example, the OnOrbit with idOnOrbit =
     * 25544 would be queried as /udl/onorbit/25544.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the transmitter. This ID can be used to obtain additional
     * information on an RFEmitter using the 'get by ID' operation (e.g.
     * /udl/rfemitter/{id}). For example, the RFEmitter with idRFEmitter = abc would be
     * queried as /udl/rfemitter/abc.
     */
    idRFEmitter?: string;

    /**
     * Unique identifier of the reporting surveillance sensor. This ID can be used to
     * obtain additional information on a sensor using the 'get by ID' operation (e.g.
     * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
     * as /udl/sensor/abc.
     */
    idSensor?: string;

    /**
     * Unique identifier of the reference receiver sensor. This ID can be used to
     * obtain additional information on a sensor using the 'get by ID' operation (e.g.
     * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
     * as /udl/sensor/abc.
     */
    idSensorRefReceiver?: string;

    /**
     * WGS-84 target latitude sub-point at observation time (obTime), represented as
     * -90 to 90 degrees (negative values south of equator).
     */
    lat?: number;

    /**
     * WGS-84 target longitude sub-point at observation time (obTime), represented as
     * -180 to 180 degrees (negative values west of Prime Meridian).
     */
    lon?: number;

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
     * One sigma uncertainty in orthogonal polarization Radar Cross Section, in
     * meters^2.
     */
    orthogonalRcsUnc?: number;

    /**
     * Line of sight right ascension in degrees and J2000 coordinate frame.
     */
    ra?: number;

    /**
     * Radar cross section in meters squared for polarization principal.
     */
    rcs?: number;

    /**
     * One sigma uncertainty in principal polarization Radar Cross Section, in
     * meters^2.
     */
    rcsUnc?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

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
     * Time of flight (TOF) in seconds. This is the calculated propagation time from
     * transmitter-to-target-to-surveillance site.
     */
    tof?: number;

    /**
     * The Time of Flight (TOF) bias in seconds.
     */
    tofBias?: number;

    /**
     * One sigma uncertainty in time of flight in seconds.
     */
    tofUnc?: number;

    /**
     * Unique identifier of a track that represents a tracklet for this observation.
     */
    trackId?: string;

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
     * X velocity of target in kilometers/sec in J2000 coordinate frame.
     */
    xvel?: number;

    /**
     * Y velocity of target in kilometers/sec in J2000 coordinate frame.
     */
    yvel?: number;

    /**
     * Z velocity of target in kilometers/sec in J2000 coordinate frame.
     */
    zvel?: number;
  }
}

export interface PassiveRadarObservationCreateParams {
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
   * The target Acceleration measurement in kilometers/sec^2 for this observation.
   */
  accel?: number;

  /**
   * The target Acceleration uncertainty measurement in kilometers/sec^2 for this
   * observation.
   */
  accelUnc?: number;

  /**
   * The target altitude relative to WGS-84 ellipsoid, in kilometers for this
   * observation.
   */
  alt?: number;

  /**
   * Line of sight azimuth angle in degrees and topocentric frame.
   */
  azimuth?: number;

  /**
   * Sensor azimuth angle bias in degrees.
   */
  azimuthBias?: number;

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
   * Target bistatic path distance in kilometers. This is the
   * transmitter-to-target-to-surveillance site distance.
   */
  bistaticRange?: number;

  /**
   * Bistatic range acceleration in kilometers/sec^2.
   */
  bistaticRangeAccel?: number;

  /**
   * One sigma uncertainty in the bistatic range acceleration measurement, in
   * kilometers/sec^2.
   */
  bistaticRangeAccelUnc?: number;

  /**
   * Sensor bistatic range bias in kilometers.
   */
  bistaticRangeBias?: number;

  /**
   * Rate of change of the bistatic path in kilometers/sec.
   */
  bistaticRangeRate?: number;

  /**
   * One sigma uncertainty in rate of change of the bistatic path in kilometers/sec.
   */
  bistaticRangeRateUnc?: number;

  /**
   * One sigma uncertainty in bistatic range in kilometers.
   */
  bistaticRangeUnc?: number;

  /**
   * Coning angle in degrees.
   */
  coning?: number;

  /**
   * One sigma uncertainty in the coning angle measurement, in degrees.
   */
  coningUnc?: number;

  /**
   * Line of sight declination angle in degrees and J2000 coordinate frame.
   */
  declination?: number;

  /**
   * The time difference, in seconds, between the signal collected at the
   * surveillance site (after being reflected from the target) and the reference site
   * (direct path line-of-sight signal).
   */
  delay?: number;

  /**
   * Delay bias in seconds.
   */
  delayBias?: number;

  /**
   * One sigma uncertainty in the delay measurement, in seconds.
   */
  delayUnc?: number;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Doppler measurement in hertz.
   */
  doppler?: number;

  /**
   * One sigma uncertainty in the Doppler measurement in hertz.
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
   * Rate of change of the line of sight elevation in degrees per second.
   */
  elevationRate?: number;

  /**
   * One sigma uncertainty in the line of sight elevation angle measurement, in
   * degrees.
   */
  elevationUnc?: number;

  /**
   * Optional external observation identifier provided by the source.
   */
  extObservationId?: string;

  /**
   * Unique identifier of the transmitter. This ID can be used to obtain additional
   * information on an RFEmitter using the 'get by ID' operation (e.g.
   * /udl/rfemitter/{id}). For example, the RFEmitter with idRFEmitter = abc would be
   * queried as /udl/rfemitter/abc.
   */
  idRFEmitter?: string;

  /**
   * Unique identifier of the reporting surveillance sensor. This ID can be used to
   * obtain additional information on a sensor using the 'get by ID' operation (e.g.
   * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
   * as /udl/sensor/abc.
   */
  idSensor?: string;

  /**
   * Unique identifier of the reference receiver sensor. This ID can be used to
   * obtain additional information on a sensor using the 'get by ID' operation (e.g.
   * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
   * as /udl/sensor/abc.
   */
  idSensorRefReceiver?: string;

  /**
   * WGS-84 target latitude sub-point at observation time (obTime), represented as
   * -90 to 90 degrees (negative values south of equator).
   */
  lat?: number;

  /**
   * WGS-84 target longitude sub-point at observation time (obTime), represented as
   * -180 to 180 degrees (negative values west of Prime Meridian).
   */
  lon?: number;

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
   * One sigma uncertainty in orthogonal polarization Radar Cross Section, in
   * meters^2.
   */
  orthogonalRcsUnc?: number;

  /**
   * Line of sight right ascension in degrees and J2000 coordinate frame.
   */
  ra?: number;

  /**
   * Radar cross section in meters squared for polarization principal.
   */
  rcs?: number;

  /**
   * One sigma uncertainty in principal polarization Radar Cross Section, in
   * meters^2.
   */
  rcsUnc?: number;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

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
   * Time of flight (TOF) in seconds. This is the calculated propagation time from
   * transmitter-to-target-to-surveillance site.
   */
  tof?: number;

  /**
   * The Time of Flight (TOF) bias in seconds.
   */
  tofBias?: number;

  /**
   * One sigma uncertainty in time of flight in seconds.
   */
  tofUnc?: number;

  /**
   * Unique identifier of a track that represents a tracklet for this observation.
   */
  trackId?: string;

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
   * X velocity of target in kilometers/sec in J2000 coordinate frame.
   */
  xvel?: number;

  /**
   * Y velocity of target in kilometers/sec in J2000 coordinate frame.
   */
  yvel?: number;

  /**
   * Z velocity of target in kilometers/sec in J2000 coordinate frame.
   */
  zvel?: number;
}

export interface PassiveRadarObservationListParams extends OffsetPageParams {
  /**
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;
}

export interface PassiveRadarObservationCountParams {
  /**
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface PassiveRadarObservationCreateBulkParams {
  body: Array<PassiveRadarObservationCreateBulkParams.Body>;
}

export namespace PassiveRadarObservationCreateBulkParams {
  /**
   * Model representation of observation data for passive radar based sensor
   * phenomenologies. Passive radar is a form of radar that instead of using a
   * dedicated transmitter, as is the case for traditional radar, utilizes radio
   * frequency (RF) energy already in the environment. With an abundance of existing
   * energy available from geographically diverse sources, passive radar offers wide
   * field of view coverage and long observation times. A passive radar system is
   * comprised of separately located transmitter (for example, FM radio stations), a
   * reference receiver, and a surveillance sensor. The transmitted signal
   * illuminates multiple targets over a broad angular extent as well as providing a
   * signal at the reference site. The reflected energy is received at the
   * surveillance site for processing with the reference signal. The long observation
   * durations that are possible with this technology enables an accurate orbit to be
   * determined within a single pass.
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
     * The target Acceleration measurement in kilometers/sec^2 for this observation.
     */
    accel?: number;

    /**
     * The target Acceleration uncertainty measurement in kilometers/sec^2 for this
     * observation.
     */
    accelUnc?: number;

    /**
     * The target altitude relative to WGS-84 ellipsoid, in kilometers for this
     * observation.
     */
    alt?: number;

    /**
     * Line of sight azimuth angle in degrees and topocentric frame.
     */
    azimuth?: number;

    /**
     * Sensor azimuth angle bias in degrees.
     */
    azimuthBias?: number;

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
     * Target bistatic path distance in kilometers. This is the
     * transmitter-to-target-to-surveillance site distance.
     */
    bistaticRange?: number;

    /**
     * Bistatic range acceleration in kilometers/sec^2.
     */
    bistaticRangeAccel?: number;

    /**
     * One sigma uncertainty in the bistatic range acceleration measurement, in
     * kilometers/sec^2.
     */
    bistaticRangeAccelUnc?: number;

    /**
     * Sensor bistatic range bias in kilometers.
     */
    bistaticRangeBias?: number;

    /**
     * Rate of change of the bistatic path in kilometers/sec.
     */
    bistaticRangeRate?: number;

    /**
     * One sigma uncertainty in rate of change of the bistatic path in kilometers/sec.
     */
    bistaticRangeRateUnc?: number;

    /**
     * One sigma uncertainty in bistatic range in kilometers.
     */
    bistaticRangeUnc?: number;

    /**
     * Coning angle in degrees.
     */
    coning?: number;

    /**
     * One sigma uncertainty in the coning angle measurement, in degrees.
     */
    coningUnc?: number;

    /**
     * Line of sight declination angle in degrees and J2000 coordinate frame.
     */
    declination?: number;

    /**
     * The time difference, in seconds, between the signal collected at the
     * surveillance site (after being reflected from the target) and the reference site
     * (direct path line-of-sight signal).
     */
    delay?: number;

    /**
     * Delay bias in seconds.
     */
    delayBias?: number;

    /**
     * One sigma uncertainty in the delay measurement, in seconds.
     */
    delayUnc?: number;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Doppler measurement in hertz.
     */
    doppler?: number;

    /**
     * One sigma uncertainty in the Doppler measurement in hertz.
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
     * Rate of change of the line of sight elevation in degrees per second.
     */
    elevationRate?: number;

    /**
     * One sigma uncertainty in the line of sight elevation angle measurement, in
     * degrees.
     */
    elevationUnc?: number;

    /**
     * Optional external observation identifier provided by the source.
     */
    extObservationId?: string;

    /**
     * Unique identifier of the transmitter. This ID can be used to obtain additional
     * information on an RFEmitter using the 'get by ID' operation (e.g.
     * /udl/rfemitter/{id}). For example, the RFEmitter with idRFEmitter = abc would be
     * queried as /udl/rfemitter/abc.
     */
    idRFEmitter?: string;

    /**
     * Unique identifier of the reporting surveillance sensor. This ID can be used to
     * obtain additional information on a sensor using the 'get by ID' operation (e.g.
     * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
     * as /udl/sensor/abc.
     */
    idSensor?: string;

    /**
     * Unique identifier of the reference receiver sensor. This ID can be used to
     * obtain additional information on a sensor using the 'get by ID' operation (e.g.
     * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
     * as /udl/sensor/abc.
     */
    idSensorRefReceiver?: string;

    /**
     * WGS-84 target latitude sub-point at observation time (obTime), represented as
     * -90 to 90 degrees (negative values south of equator).
     */
    lat?: number;

    /**
     * WGS-84 target longitude sub-point at observation time (obTime), represented as
     * -180 to 180 degrees (negative values west of Prime Meridian).
     */
    lon?: number;

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
     * One sigma uncertainty in orthogonal polarization Radar Cross Section, in
     * meters^2.
     */
    orthogonalRcsUnc?: number;

    /**
     * Line of sight right ascension in degrees and J2000 coordinate frame.
     */
    ra?: number;

    /**
     * Radar cross section in meters squared for polarization principal.
     */
    rcs?: number;

    /**
     * One sigma uncertainty in principal polarization Radar Cross Section, in
     * meters^2.
     */
    rcsUnc?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

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
     * Time of flight (TOF) in seconds. This is the calculated propagation time from
     * transmitter-to-target-to-surveillance site.
     */
    tof?: number;

    /**
     * The Time of Flight (TOF) bias in seconds.
     */
    tofBias?: number;

    /**
     * One sigma uncertainty in time of flight in seconds.
     */
    tofUnc?: number;

    /**
     * Unique identifier of a track that represents a tracklet for this observation.
     */
    trackId?: string;

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
     * X velocity of target in kilometers/sec in J2000 coordinate frame.
     */
    xvel?: number;

    /**
     * Y velocity of target in kilometers/sec in J2000 coordinate frame.
     */
    yvel?: number;

    /**
     * Z velocity of target in kilometers/sec in J2000 coordinate frame.
     */
    zvel?: number;
  }
}

export interface PassiveRadarObservationFileCreateParams {
  body: Array<PassiveRadarObservationFileCreateParams.Body>;
}

export namespace PassiveRadarObservationFileCreateParams {
  /**
   * Model representation of observation data for passive radar based sensor
   * phenomenologies. Passive radar is a form of radar that instead of using a
   * dedicated transmitter, as is the case for traditional radar, utilizes radio
   * frequency (RF) energy already in the environment. With an abundance of existing
   * energy available from geographically diverse sources, passive radar offers wide
   * field of view coverage and long observation times. A passive radar system is
   * comprised of separately located transmitter (for example, FM radio stations), a
   * reference receiver, and a surveillance sensor. The transmitted signal
   * illuminates multiple targets over a broad angular extent as well as providing a
   * signal at the reference site. The reflected energy is received at the
   * surveillance site for processing with the reference signal. The long observation
   * durations that are possible with this technology enables an accurate orbit to be
   * determined within a single pass.
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
     * The target Acceleration measurement in kilometers/sec^2 for this observation.
     */
    accel?: number;

    /**
     * The target Acceleration uncertainty measurement in kilometers/sec^2 for this
     * observation.
     */
    accelUnc?: number;

    /**
     * The target altitude relative to WGS-84 ellipsoid, in kilometers for this
     * observation.
     */
    alt?: number;

    /**
     * Line of sight azimuth angle in degrees and topocentric frame.
     */
    azimuth?: number;

    /**
     * Sensor azimuth angle bias in degrees.
     */
    azimuthBias?: number;

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
     * Target bistatic path distance in kilometers. This is the
     * transmitter-to-target-to-surveillance site distance.
     */
    bistaticRange?: number;

    /**
     * Bistatic range acceleration in kilometers/sec^2.
     */
    bistaticRangeAccel?: number;

    /**
     * One sigma uncertainty in the bistatic range acceleration measurement, in
     * kilometers/sec^2.
     */
    bistaticRangeAccelUnc?: number;

    /**
     * Sensor bistatic range bias in kilometers.
     */
    bistaticRangeBias?: number;

    /**
     * Rate of change of the bistatic path in kilometers/sec.
     */
    bistaticRangeRate?: number;

    /**
     * One sigma uncertainty in rate of change of the bistatic path in kilometers/sec.
     */
    bistaticRangeRateUnc?: number;

    /**
     * One sigma uncertainty in bistatic range in kilometers.
     */
    bistaticRangeUnc?: number;

    /**
     * Coning angle in degrees.
     */
    coning?: number;

    /**
     * One sigma uncertainty in the coning angle measurement, in degrees.
     */
    coningUnc?: number;

    /**
     * Line of sight declination angle in degrees and J2000 coordinate frame.
     */
    declination?: number;

    /**
     * The time difference, in seconds, between the signal collected at the
     * surveillance site (after being reflected from the target) and the reference site
     * (direct path line-of-sight signal).
     */
    delay?: number;

    /**
     * Delay bias in seconds.
     */
    delayBias?: number;

    /**
     * One sigma uncertainty in the delay measurement, in seconds.
     */
    delayUnc?: number;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Doppler measurement in hertz.
     */
    doppler?: number;

    /**
     * One sigma uncertainty in the Doppler measurement in hertz.
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
     * Rate of change of the line of sight elevation in degrees per second.
     */
    elevationRate?: number;

    /**
     * One sigma uncertainty in the line of sight elevation angle measurement, in
     * degrees.
     */
    elevationUnc?: number;

    /**
     * Optional external observation identifier provided by the source.
     */
    extObservationId?: string;

    /**
     * Unique identifier of the transmitter. This ID can be used to obtain additional
     * information on an RFEmitter using the 'get by ID' operation (e.g.
     * /udl/rfemitter/{id}). For example, the RFEmitter with idRFEmitter = abc would be
     * queried as /udl/rfemitter/abc.
     */
    idRFEmitter?: string;

    /**
     * Unique identifier of the reporting surveillance sensor. This ID can be used to
     * obtain additional information on a sensor using the 'get by ID' operation (e.g.
     * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
     * as /udl/sensor/abc.
     */
    idSensor?: string;

    /**
     * Unique identifier of the reference receiver sensor. This ID can be used to
     * obtain additional information on a sensor using the 'get by ID' operation (e.g.
     * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
     * as /udl/sensor/abc.
     */
    idSensorRefReceiver?: string;

    /**
     * WGS-84 target latitude sub-point at observation time (obTime), represented as
     * -90 to 90 degrees (negative values south of equator).
     */
    lat?: number;

    /**
     * WGS-84 target longitude sub-point at observation time (obTime), represented as
     * -180 to 180 degrees (negative values west of Prime Meridian).
     */
    lon?: number;

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
     * One sigma uncertainty in orthogonal polarization Radar Cross Section, in
     * meters^2.
     */
    orthogonalRcsUnc?: number;

    /**
     * Line of sight right ascension in degrees and J2000 coordinate frame.
     */
    ra?: number;

    /**
     * Radar cross section in meters squared for polarization principal.
     */
    rcs?: number;

    /**
     * One sigma uncertainty in principal polarization Radar Cross Section, in
     * meters^2.
     */
    rcsUnc?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

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
     * Time of flight (TOF) in seconds. This is the calculated propagation time from
     * transmitter-to-target-to-surveillance site.
     */
    tof?: number;

    /**
     * The Time of Flight (TOF) bias in seconds.
     */
    tofBias?: number;

    /**
     * One sigma uncertainty in time of flight in seconds.
     */
    tofUnc?: number;

    /**
     * Unique identifier of a track that represents a tracklet for this observation.
     */
    trackId?: string;

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
     * X velocity of target in kilometers/sec in J2000 coordinate frame.
     */
    xvel?: number;

    /**
     * Y velocity of target in kilometers/sec in J2000 coordinate frame.
     */
    yvel?: number;

    /**
     * Z velocity of target in kilometers/sec in J2000 coordinate frame.
     */
    zvel?: number;
  }
}

export interface PassiveRadarObservationGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface PassiveRadarObservationTupleParams {
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

PassiveRadarObservation.History = History;

export declare namespace PassiveRadarObservation {
  export {
    type PassiveRadarObservationListResponse as PassiveRadarObservationListResponse,
    type PassiveRadarObservationCountResponse as PassiveRadarObservationCountResponse,
    type PassiveRadarObservationGetResponse as PassiveRadarObservationGetResponse,
    type PassiveRadarObservationQueryhelpResponse as PassiveRadarObservationQueryhelpResponse,
    type PassiveRadarObservationTupleResponse as PassiveRadarObservationTupleResponse,
    type PassiveRadarObservationListResponsesOffsetPage as PassiveRadarObservationListResponsesOffsetPage,
    type PassiveRadarObservationCreateParams as PassiveRadarObservationCreateParams,
    type PassiveRadarObservationListParams as PassiveRadarObservationListParams,
    type PassiveRadarObservationCountParams as PassiveRadarObservationCountParams,
    type PassiveRadarObservationCreateBulkParams as PassiveRadarObservationCreateBulkParams,
    type PassiveRadarObservationFileCreateParams as PassiveRadarObservationFileCreateParams,
    type PassiveRadarObservationGetParams as PassiveRadarObservationGetParams,
    type PassiveRadarObservationTupleParams as PassiveRadarObservationTupleParams,
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
