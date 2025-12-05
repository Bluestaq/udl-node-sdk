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
} from './history';
import { APIPromise } from '../../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class EoObservations extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single EO observation as a POST body and ingest into
   * the database. This operation is not intended to be used for automated feeds into
   * UDL. Data providers should contact the UDL team for specific role assignments
   * and for instructions on setting up a permanent feed through an alternate
   * mechanism.
   *
   * @example
   * ```ts
   * await client.observations.eoObservations.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   obTime: '2018-01-01T16:00:00.123456Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: EoObservationCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/eoobservation', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single EO observation by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const eoObservationFull =
   *   await client.observations.eoObservations.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: EoObservationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.EoObservationFull> {
    return this._client.get(path`/udl/eoobservation/${id}`, { query, ...options });
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
   * for await (const eoObservationAbridged of client.observations.eoObservations.list(
   *   { obTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EoObservationListParams,
    options?: RequestOptions,
  ): PagePromise<EoObservationAbridgedsOffsetPage, EoObservationAbridged> {
    return this._client.getAPIList('/udl/eoobservation', OffsetPage<EoObservationAbridged>, {
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
   *   await client.observations.eoObservations.count({
   *     obTime: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  count(query: EoObservationCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/eoobservation/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of EO
   * observations as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.observations.eoObservations.createBulk({
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
  createBulk(params: EoObservationCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body, convertToJ2K } = params;
    return this._client.post('/udl/eoobservation/createBulk', {
      query: { convertToJ2K },
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
   *   await client.observations.eoObservations.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<EoObservationQueryhelpResponse> {
    return this._client.get('/udl/eoobservation/queryhelp', options);
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
   * const eoObservationFulls =
   *   await client.observations.eoObservations.tuple({
   *     columns: 'columns',
   *     obTime: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  tuple(query: EoObservationTupleParams, options?: RequestOptions): APIPromise<EoObservationTupleResponse> {
    return this._client.get('/udl/eoobservation/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple EO observations as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.observations.eoObservations.unvalidatedPublish(
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
    params: EoObservationUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-eo', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type EoObservationAbridgedsOffsetPage = OffsetPage<EoObservationAbridged>;

/**
 * Model representation of observation data for electro-optical based sensor
 * phenomenologies. ECI J2K is the preferred reference frame for EOObservations,
 * however, several user-specified reference frames are accommodated. Users should
 * check the EOObservation record as well as the 'Discover' tab in the storefront
 * to confirm the coordinate frames used by the data provider.
 */
export interface EoObservationAbridged {
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
   * Ob detection time in ISO 8601 UTC, up to microsecond precision. Consumers should
   * contact the provider for details on their obTime specifications.
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
   * Line of sight azimuth angle in degrees and topocentric frame. Reported value
   * should include all applicable corrections as specified on the source provider
   * data card. If uncertain, consumers should contact the provider for details on
   * the applied corrections.
   */
  azimuth?: number;

  /**
   * Sensor line of sight azimuth angle bias in degrees.
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
   * One sigma uncertainty in the line of sight azimuth angle, in degrees.
   */
  azimuthUnc?: number;

  /**
   * Background intensity for IR observations, in kilowatt per steradian per
   * micrometer.
   */
  bgIntensity?: number;

  /**
   * Method indicating telescope movement during collection (AUTOTRACK, MANUAL
   * AUTOTRACK, MANUAL RATE TRACK, MANUAL SIDEREAL, SIDEREAL, RATE TRACK).
   */
  collectMethod?: string;

  /**
   * Object Correlation Quality score of the observation when compared to a known
   * orbit state (non-standardized). Users should consult data providers regarding
   * the expected range of values.
   */
  corrQuality?: number;

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
   * Line of sight declination, in degrees, in the specified referenceFrame. If
   * referenceFrame is null then J2K should be assumed. Reported value should include
   * all applicable corrections as specified on the source provider data card. If
   * uncertain, consumers should contact the provider for details on the applied
   * corrections.
   */
  declination?: number;

  /**
   * Sensor line of sight declination angle bias, in degrees.
   */
  declinationBias?: number;

  /**
   * Optional flag indicating whether the declination value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  declinationMeasured?: boolean;

  /**
   * Line of sight declination rate of change, in degrees per second, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  declinationRate?: number;

  /**
   * One sigma uncertainty in the line of sight declination angle, in degrees.
   */
  declinationUnc?: number;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Line of sight elevation in degrees and topocentric frame. Reported value should
   * include all applicable corrections as specified on the source provider data
   * card. If uncertain, consumers should contact the provider for details on the
   * applied corrections.
   */
  elevation?: number;

  /**
   * Sensor line of sight elevation bias, in degrees.
   */
  elevationBias?: number;

  /**
   * Optional flag indicating whether the elevation value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  elevationMeasured?: boolean;

  /**
   * Rate of change of the line of sight elevation, in degrees per second.
   */
  elevationRate?: number;

  /**
   * One sigma uncertainty in the line of sight elevation angle, in degrees.
   */
  elevationUnc?: number;

  /**
   * Image exposure duration in seconds. For observations performed using frame
   * stacking or synthetic tracking methods, the exposure duration should be the
   * total integration time. This field is highly recommended / required if the
   * observations are going to be used for photometric processing.
   */
  expDuration?: number;

  /**
   * The number of RSOs detected in the sensor field of view.
   */
  fovCount?: number;

  /**
   * The number of uncorrelated tracks in the field of view.
   */
  fovCountUCT?: number;

  /**
   * For GEO detections, the altitude, in kilometers.
   */
  geoalt?: number;

  /**
   * For GEO detections, the latitude in degrees north.
   */
  geolat?: number;

  /**
   * For GEO detections, the longitude in degrees east.
   */
  geolon?: number;

  /**
   * For GEO detections, the range, in kilometers.
   */
  georange?: number;

  /**
   * Unique identifier of the target on-orbit object, if correlated.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * Unique identifier of the Sky Imagery record associated with this observation, if
   * applicable.
   */
  idSkyImagery?: string;

  /**
   * Intensity of the target for IR observations, in kilowatt per steradian per
   * micrometer.
   */
  intensity?: number;

  /**
   * One sigma uncertainty in the line of sight pointing in micro-radians.
   */
  losUnc?: number;

  /**
   * Line-of-sight cartesian X position of the target, in kilometers, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  losx?: number;

  /**
   * Line-of-sight cartesian X velocity of target, in kilometers per second, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  losxvel?: number;

  /**
   * Line-of-sight cartesian Y position of the target, in kilometers, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  losy?: number;

  /**
   * Line-of-sight cartesian Y velocity of target, in kilometers per second, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  losyvel?: number;

  /**
   * Line-of-sight cartesian Z position of the target, in kilometers, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  losz?: number;

  /**
   * Line-of-sight cartesian Z velocity of target, in kilometers per second, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  loszvel?: number;

  /**
   * Measure of observed brightness calibrated against the Gaia G-band in units of
   * magnitudes.
   */
  mag?: number;

  /**
   * Formula: mag - 5.0 \* log_10(geo_range / 1000000.0).
   */
  magNormRange?: number;

  /**
   * Uncertainty of the observed brightness in units of magnitudes.
   */
  magUnc?: number;

  /**
   * Net object signature = counts / expDuration.
   */
  netObjSig?: number;

  /**
   * Net object signature uncertainty = counts uncertainty / expDuration.
   */
  netObjSigUnc?: number;

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
   * Boolean indicating that the target object was in a penumbral eclipse at the time
   * of this observation.
   */
  penumbra?: boolean;

  /**
   * Primary Extinction Coefficient, in magnitudes. Primary Extinction is the
   * coefficient applied to the airmass to determine how much the observed visual
   * magnitude has been attenuated by the atmosphere. Extinction, in general,
   * describes the absorption and scattering of electromagnetic radiation by dust and
   * gas between an emitting astronomical object and the observer. See the
   * EOObservationDetails API for specification of extinction coefficients for
   * multiple spectral filters.
   */
  primaryExtinction?: number;

  /**
   * Primary Extinction Coefficient Uncertainty, in magnitudes.
   */
  primaryExtinctionUnc?: number;

  /**
   * Line of sight right ascension, in degrees, in the specified referenceFrame. If
   * referenceFrame is null then J2K should be assumed. Reported value should include
   * all applicable corrections as specified on the source provider data card. If
   * uncertain, consumers should contact the provider for details on the applied
   * corrections.
   */
  ra?: number;

  /**
   * Sensor line of sight right ascension bias, in degrees.
   */
  raBias?: number;

  /**
   * Optional flag indicating whether the ra value is measured (true) or computed
   * (false). If null, consumers may consult the data provider for information
   * regarding whether the corresponding value is computed or measured.
   */
  raMeasured?: boolean;

  /**
   * Line of sight range, in kilometers. Reported value should include all applicable
   * corrections as specified on the source provider data card. If uncertain,
   * consumers should contact the provider for details on the applied corrections.
   */
  range?: number;

  /**
   * Sensor line of sight range bias, in kilometers.
   */
  rangeBias?: number;

  /**
   * Optional flag indicating whether the range value is measured (true) or computed
   * (false). If null, consumers may consult the data provider for information
   * regarding whether the corresponding value is computed or measured.
   */
  rangeMeasured?: boolean;

  /**
   * Range rate in kilometers per second. Reported value should include all
   * applicable corrections as specified on the source provider data card. If
   * uncertain, consumers should contact the provider for details on the applied
   * corrections.
   */
  rangeRate?: number;

  /**
   * Optional flag indicating whether the rangeRate value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  rangeRateMeasured?: boolean;

  /**
   * One sigma uncertainty in the line of sight range rate, in kilometers per second.
   */
  rangeRateUnc?: number;

  /**
   * One sigma uncertainty in the line of sight range, in kilometers.
   */
  rangeUnc?: number;

  /**
   * Line of sight right ascension rate of change, in degrees per second, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  raRate?: number;

  /**
   * One sigma uncertainty in the line of sight right ascension angle, in degrees.
   */
  raUnc?: number;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The reference frame of the EOObservation measurements. If the referenceFrame is
   * null it is assumed to be J2000.
   */
  referenceFrame?: 'J2000' | 'GCRF' | 'ITRF' | 'TEME';

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Sensor altitude at obTime (if mobile/onorbit), in kilometers.
   */
  senalt?: number;

  /**
   * Sensor WGS84 latitude at obTime (if mobile/onorbit), in degrees. If null, can be
   * obtained from sensor info. -90 to 90 degrees (negative values south of equator).
   */
  senlat?: number;

  /**
   * Sensor WGS84 longitude at obTime (if mobile/onorbit), in degrees. If null, can
   * be obtained from sensor info. -180 to 180 degrees (negative values west of Prime
   * Meridian).
   */
  senlon?: number;

  /**
   * The quaternion describing the rotation of the sensor in relation to the
   * body-fixed frame used for this system into the local geodetic frame, at
   * observation time (obTime). The array element order convention is scalar
   * component first, followed by the three vector components (qc, q1, q2, q3).
   */
  senQuat?: Array<number>;

  /**
   * The reference frame of the observing sensor state. If the senReferenceFrame is
   * null it is assumed to be J2000.
   */
  senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

  /**
   * Cartesian X velocity of the observing mobile/onorbit sensor at obTime, in
   * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
   * is null then J2K should be assumed.
   */
  senvelx?: number;

  /**
   * Cartesian Y velocity of the observing mobile/onorbit sensor at obTime, in
   * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
   * is null then J2K should be assumed.
   */
  senvely?: number;

  /**
   * Cartesian Z velocity of the observing mobile/onorbit sensor at obTime, in
   * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
   * is null then J2K should be assumed.
   */
  senvelz?: number;

  /**
   * Cartesian X position of the observing mobile/onorbit sensor at obTime, in
   * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
   * then J2K should be assumed.
   */
  senx?: number;

  /**
   * Cartesian Y position of the observing mobile/onorbit sensor at obTime, in
   * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
   * then J2K should be assumed.
   */
  seny?: number;

  /**
   * Cartesian Z position of the observing mobile/onorbit sensor at obTime, in
   * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
   * then J2K should be assumed.
   */
  senz?: number;

  /**
   * Shutter delay in seconds.
   */
  shutterDelay?: number;

  /**
   * Average Sky Background signal, in magnitudes. Sky Background refers to the
   * incoming light from an apparently empty part of the night sky.
   */
  skyBkgrnd?: number;

  /**
   * Angle from the sun to the equatorial plane, in degrees.
   */
  solarDecAngle?: number;

  /**
   * The angle, in degrees, between the projections of the target-to-observer vector
   * and the target-to-sun vector onto the equatorial plane. The angle is represented
   * as negative when closing (i.e. before the opposition) and positive when opening
   * (after the opposition).
   */
  solarEqPhaseAngle?: number;

  /**
   * The angle, in degrees, between the target-to-observer vector and the
   * target-to-sun vector.
   */
  solarPhaseAngle?: number;

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
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Read only field specifying the type of observation (e.g. OPTICAL, OPTICAL_IR,
   * LASER_RANGING, etc).
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
   * Boolean indicating that the target object was in umbral eclipse at the time of
   * this observation.
   */
  umbra?: boolean;

  /**
   * Formula: 2.5 \* log_10 (zero_mag_counts / expDuration).
   */
  zeroptd?: number;

  /**
   * This is the uncertainty in the zero point for the filter used for this
   * observation/row in units of mag. For use with differential photometry.
   */
  zeroPtdUnc?: number;
}

export type EoObservationCountResponse = string;

export interface EoObservationQueryhelpResponse {
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

export type EoObservationTupleResponse = Array<Shared.EoObservationFull>;

export interface EoObservationCreateParams {
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
   * Ob detection time in ISO 8601 UTC, up to microsecond precision. Consumers should
   * contact the provider for details on their obTime specifications.
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
   * Line of sight azimuth angle in degrees and topocentric frame. Reported value
   * should include all applicable corrections as specified on the source provider
   * data card. If uncertain, consumers should contact the provider for details on
   * the applied corrections.
   */
  azimuth?: number;

  /**
   * Sensor line of sight azimuth angle bias in degrees.
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
   * One sigma uncertainty in the line of sight azimuth angle, in degrees.
   */
  azimuthUnc?: number;

  /**
   * Background intensity for IR observations, in kilowatt per steradian per
   * micrometer.
   */
  bgIntensity?: number;

  /**
   * Method indicating telescope movement during collection (AUTOTRACK, MANUAL
   * AUTOTRACK, MANUAL RATE TRACK, MANUAL SIDEREAL, SIDEREAL, RATE TRACK).
   */
  collectMethod?: string;

  /**
   * Object Correlation Quality score of the observation when compared to a known
   * orbit state (non-standardized). Users should consult data providers regarding
   * the expected range of values.
   */
  corrQuality?: number;

  /**
   * Line of sight declination, in degrees, in the specified referenceFrame. If
   * referenceFrame is null then J2K should be assumed. Reported value should include
   * all applicable corrections as specified on the source provider data card. If
   * uncertain, consumers should contact the provider for details on the applied
   * corrections.
   */
  declination?: number;

  /**
   * Sensor line of sight declination angle bias, in degrees.
   */
  declinationBias?: number;

  /**
   * Optional flag indicating whether the declination value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  declinationMeasured?: boolean;

  /**
   * Line of sight declination rate of change, in degrees per second, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  declinationRate?: number;

  /**
   * One sigma uncertainty in the line of sight declination angle, in degrees.
   */
  declinationUnc?: number;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Line of sight elevation in degrees and topocentric frame. Reported value should
   * include all applicable corrections as specified on the source provider data
   * card. If uncertain, consumers should contact the provider for details on the
   * applied corrections.
   */
  elevation?: number;

  /**
   * Sensor line of sight elevation bias, in degrees.
   */
  elevationBias?: number;

  /**
   * Optional flag indicating whether the elevation value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  elevationMeasured?: boolean;

  /**
   * Rate of change of the line of sight elevation, in degrees per second.
   */
  elevationRate?: number;

  /**
   * One sigma uncertainty in the line of sight elevation angle, in degrees.
   */
  elevationUnc?: number;

  /**
   * Model representation of additional detailed observation data for electro-optical
   * based sensor phenomenologies.
   */
  eoobservationDetails?: EoObservationCreateParams.EoobservationDetails;

  /**
   * Image exposure duration in seconds. For observations performed using frame
   * stacking or synthetic tracking methods, the exposure duration should be the
   * total integration time. This field is highly recommended / required if the
   * observations are going to be used for photometric processing.
   */
  expDuration?: number;

  /**
   * The number of RSOs detected in the sensor field of view.
   */
  fovCount?: number;

  /**
   * The number of uncorrelated tracks in the field of view.
   */
  fovCountUCT?: number;

  /**
   * For GEO detections, the altitude, in kilometers.
   */
  geoalt?: number;

  /**
   * For GEO detections, the latitude in degrees north.
   */
  geolat?: number;

  /**
   * For GEO detections, the longitude in degrees east.
   */
  geolon?: number;

  /**
   * For GEO detections, the range, in kilometers.
   */
  georange?: number;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * Unique identifier of the Sky Imagery record associated with this observation, if
   * applicable.
   */
  idSkyImagery?: string;

  /**
   * Intensity of the target for IR observations, in kilowatt per steradian per
   * micrometer.
   */
  intensity?: number;

  /**
   * One sigma uncertainty in the line of sight pointing in micro-radians.
   */
  losUnc?: number;

  /**
   * Line-of-sight cartesian X position of the target, in kilometers, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  losx?: number;

  /**
   * Line-of-sight cartesian X velocity of target, in kilometers per second, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  losxvel?: number;

  /**
   * Line-of-sight cartesian Y position of the target, in kilometers, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  losy?: number;

  /**
   * Line-of-sight cartesian Y velocity of target, in kilometers per second, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  losyvel?: number;

  /**
   * Line-of-sight cartesian Z position of the target, in kilometers, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  losz?: number;

  /**
   * Line-of-sight cartesian Z velocity of target, in kilometers per second, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  loszvel?: number;

  /**
   * Measure of observed brightness calibrated against the Gaia G-band in units of
   * magnitudes.
   */
  mag?: number;

  /**
   * Formula: mag - 5.0 \* log_10(geo_range / 1000000.0).
   */
  magNormRange?: number;

  /**
   * Uncertainty of the observed brightness in units of magnitudes.
   */
  magUnc?: number;

  /**
   * Net object signature = counts / expDuration.
   */
  netObjSig?: number;

  /**
   * Net object signature uncertainty = counts uncertainty / expDuration.
   */
  netObjSigUnc?: number;

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
   * Boolean indicating that the target object was in a penumbral eclipse at the time
   * of this observation.
   */
  penumbra?: boolean;

  /**
   * Primary Extinction Coefficient, in magnitudes. Primary Extinction is the
   * coefficient applied to the airmass to determine how much the observed visual
   * magnitude has been attenuated by the atmosphere. Extinction, in general,
   * describes the absorption and scattering of electromagnetic radiation by dust and
   * gas between an emitting astronomical object and the observer. See the
   * EOObservationDetails API for specification of extinction coefficients for
   * multiple spectral filters.
   */
  primaryExtinction?: number;

  /**
   * Primary Extinction Coefficient Uncertainty, in magnitudes.
   */
  primaryExtinctionUnc?: number;

  /**
   * Line of sight right ascension, in degrees, in the specified referenceFrame. If
   * referenceFrame is null then J2K should be assumed. Reported value should include
   * all applicable corrections as specified on the source provider data card. If
   * uncertain, consumers should contact the provider for details on the applied
   * corrections.
   */
  ra?: number;

  /**
   * Sensor line of sight right ascension bias, in degrees.
   */
  raBias?: number;

  /**
   * Optional flag indicating whether the ra value is measured (true) or computed
   * (false). If null, consumers may consult the data provider for information
   * regarding whether the corresponding value is computed or measured.
   */
  raMeasured?: boolean;

  /**
   * Line of sight range, in kilometers. Reported value should include all applicable
   * corrections as specified on the source provider data card. If uncertain,
   * consumers should contact the provider for details on the applied corrections.
   */
  range?: number;

  /**
   * Sensor line of sight range bias, in kilometers.
   */
  rangeBias?: number;

  /**
   * Optional flag indicating whether the range value is measured (true) or computed
   * (false). If null, consumers may consult the data provider for information
   * regarding whether the corresponding value is computed or measured.
   */
  rangeMeasured?: boolean;

  /**
   * Range rate in kilometers per second. Reported value should include all
   * applicable corrections as specified on the source provider data card. If
   * uncertain, consumers should contact the provider for details on the applied
   * corrections.
   */
  rangeRate?: number;

  /**
   * Optional flag indicating whether the rangeRate value is measured (true) or
   * computed (false). If null, consumers may consult the data provider for
   * information regarding whether the corresponding value is computed or measured.
   */
  rangeRateMeasured?: boolean;

  /**
   * One sigma uncertainty in the line of sight range rate, in kilometers per second.
   */
  rangeRateUnc?: number;

  /**
   * One sigma uncertainty in the line of sight range, in kilometers.
   */
  rangeUnc?: number;

  /**
   * Line of sight right ascension rate of change, in degrees per second, in the
   * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  raRate?: number;

  /**
   * One sigma uncertainty in the line of sight right ascension angle, in degrees.
   */
  raUnc?: number;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The reference frame of the EOObservation measurements. If the referenceFrame is
   * null it is assumed to be J2000.
   */
  referenceFrame?: 'J2000' | 'GCRF' | 'ITRF' | 'TEME';

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Sensor altitude at obTime (if mobile/onorbit), in kilometers.
   */
  senalt?: number;

  /**
   * Sensor WGS84 latitude at obTime (if mobile/onorbit), in degrees. If null, can be
   * obtained from sensor info. -90 to 90 degrees (negative values south of equator).
   */
  senlat?: number;

  /**
   * Sensor WGS84 longitude at obTime (if mobile/onorbit), in degrees. If null, can
   * be obtained from sensor info. -180 to 180 degrees (negative values west of Prime
   * Meridian).
   */
  senlon?: number;

  /**
   * The quaternion describing the rotation of the sensor in relation to the
   * body-fixed frame used for this system into the local geodetic frame, at
   * observation time (obTime). The array element order convention is scalar
   * component first, followed by the three vector components (qc, q1, q2, q3).
   */
  senQuat?: Array<number>;

  /**
   * The reference frame of the observing sensor state. If the senReferenceFrame is
   * null it is assumed to be J2000.
   */
  senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

  /**
   * Cartesian X velocity of the observing mobile/onorbit sensor at obTime, in
   * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
   * is null then J2K should be assumed.
   */
  senvelx?: number;

  /**
   * Cartesian Y velocity of the observing mobile/onorbit sensor at obTime, in
   * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
   * is null then J2K should be assumed.
   */
  senvely?: number;

  /**
   * Cartesian Z velocity of the observing mobile/onorbit sensor at obTime, in
   * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
   * is null then J2K should be assumed.
   */
  senvelz?: number;

  /**
   * Cartesian X position of the observing mobile/onorbit sensor at obTime, in
   * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
   * then J2K should be assumed.
   */
  senx?: number;

  /**
   * Cartesian Y position of the observing mobile/onorbit sensor at obTime, in
   * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
   * then J2K should be assumed.
   */
  seny?: number;

  /**
   * Cartesian Z position of the observing mobile/onorbit sensor at obTime, in
   * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
   * then J2K should be assumed.
   */
  senz?: number;

  /**
   * Shutter delay in seconds.
   */
  shutterDelay?: number;

  /**
   * Average Sky Background signal, in magnitudes. Sky Background refers to the
   * incoming light from an apparently empty part of the night sky.
   */
  skyBkgrnd?: number;

  /**
   * Angle from the sun to the equatorial plane, in degrees.
   */
  solarDecAngle?: number;

  /**
   * The angle, in degrees, between the projections of the target-to-observer vector
   * and the target-to-sun vector onto the equatorial plane. The angle is represented
   * as negative when closing (i.e. before the opposition) and positive when opening
   * (after the opposition).
   */
  solarEqPhaseAngle?: number;

  /**
   * The angle, in degrees, between the target-to-observer vector and the
   * target-to-sun vector.
   */
  solarPhaseAngle?: number;

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
   * Boolean indicating that the target object was in umbral eclipse at the time of
   * this observation.
   */
  umbra?: boolean;

  /**
   * Formula: 2.5 \* log_10 (zero_mag_counts / expDuration).
   */
  zeroptd?: number;

  /**
   * This is the uncertainty in the zero point for the filter used for this
   * observation/row in units of mag. For use with differential photometry.
   */
  zeroPtdUnc?: number;
}

export namespace EoObservationCreateParams {
  /**
   * Model representation of additional detailed observation data for electro-optical
   * based sensor phenomenologies.
   */
  export interface EoobservationDetails {
    /**
     * World Coordinate System (WCS) X pixel origin in astrometric fit.
     */
    acalCrPixX?: number;

    /**
     * World Coordinate System (WCS) Y pixel origin in astrometric fit.
     */
    acalCrPixY?: number;

    /**
     * World Coordinate System (WCS) equatorial coordinate X origin corresponding to
     * CRPIX in astrometric fit in degrees.
     */
    acalCrValX?: number;

    /**
     * World Coordinate System (WCS) equatorial coordinate Y origin corresponding to
     * CRPIX in astrometric fit in degrees.
     */
    acalCrValY?: number;

    /**
     * Number of stars used in astrometric fit.
     */
    acalNumStars?: number;

    /**
     * This is the background signal at or in the vicinity of the radiometric source
     * position. Specifically, this is the average background count level in digital
     * number per pixel divided by the exposure time in seconds of the background
     * pixels used in the photometric extraction. Units are digital number per pixel
     * per second.
     */
    backgroundSignal?: number;

    /**
     * Estimated 1-sigma uncertainty in the background signal at or in the vicinity of
     * the radiometric source position. Units are digital number per pixel per second.
     */
    backgroundSignalUnc?: number;

    /**
     * The number of pixels binned horizontally.
     */
    binningHoriz?: number;

    /**
     * The number of pixels binned vertically.
     */
    binningVert?: number;

    /**
     * The x centroid position on the CCD of the target object, in pixels.
     */
    ccdObjPosX?: number;

    /**
     * The y centroid position on the CCD of the target object, in pixels.
     */
    ccdObjPosY?: number;

    /**
     * This is the pixel width of the target. This is either a frame-by-frame
     * measurement or a constant point spread function or synthetic aperture used in
     * the extraction.
     */
    ccdObjWidth?: number;

    /**
     * Operating temperature, in kelvin, of CCD recorded during exposure or measured
     * during calibrations.
     */
    ccdTemp?: number;

    /**
     * Observed centroid column number on the focal plane in pixels (0 is left edge,
     * 0.5 is center of pixels along left of image).
     */
    centroidColumn?: number;

    /**
     * Observed centroid row number on the focal plane in pixels (0 is top edge, 0.5 is
     * center of pixels along top of image).
     */
    centroidRow?: number;

    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format, will be
     * set to EOObservation classificationMarking if blank.
     */
    classificationMarking?: string;

    /**
     * Color coefficient for filter n for a space-based sensor where there is no
     * atmospheric extinction. Must be present for all values n=1 to
     * numSpectralFilters, in incrementing order of n, and for no other values of n.
     */
    colorCoeffs?: Array<number>;

    /**
     * Spatial variance of image distribution in horizontal direction measured in
     * pixels squared.
     */
    columnVariance?: number;

    /**
     * The reference number n, in neutralDensityFilters for the currently used neutral
     * density filter.
     */
    currentNeutralDensityFilterNum?: number;

    /**
     * The reference number, x, where x ranges from 1 to n, where n is the number
     * specified in numSpectralFilters that corresponds to the spectral filter given in
     * the corresponding spectralFilters.
     */
    currentSpectralFilterNum?: number;

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
    dataMode?: 'REAL' | 'TEST' | 'EXERCISE' | 'SIMULATED';

    /**
     * Covariance (Y^2) in measured declination (Y) in degrees squared.
     */
    declinationCov?: number;

    /**
     * An array of measurements that correspond to the distance from the streak center
     * measured from the optical image in pixels that show change over an interval of
     * time. The array length is dependent on the length of the streak. The
     * distFromStreakCenter, surfBrightness, and surfBrightnessUnc arrays will match in
     * size.
     */
    distFromStreakCenter?: Array<number>;

    /**
     * Angle off element set reported in degrees.
     */
    does?: number;

    /**
     * The extinction coefficient computed for the nth filter. Must be present for all
     * values n=1 to numSpectralFilters, in incrementing order of n, and for no other
     * values of n. Units = magnitudes per air mass.
     */
    extinctionCoeffs?: Array<number>;

    /**
     * The uncertainty in the extinction coefficient for the nth filter. Must be
     * present for all values n=1 to numSpectralFilters, in incrementing order of n,
     * and for no other values of n. -9999 for space-based sensors. Units = magnitudes
     * per air mass.
     */
    extinctionCoeffsUnc?: Array<number>;

    /**
     * Some sensors have gain settings. This value is the gain used during the
     * observation in units of electrons per analog-to-digital unit. If no gain is
     * used, the value = 1.
     */
    gain?: number;

    /**
     * Unique identifier of the parent EOObservation.
     */
    idEOObservation?: string;

    /**
     * Sensor instantaneous field of view (ratio of pixel pitch to focal length), in
     * microradians.
     */
    ifov?: number;

    /**
     * Array of values for the right ascension and declination of the image center, in
     * degrees, in the specified referenceFrame. If referenceFrame is null then J2K
     * should be assumed.
     */
    imageBoreRaDec?: Array<number>;

    /**
     * The line of sight vector extending from the sensor toward the center of the
     * image in the specified referenceFrame. Typically aligned with the optical
     * boresight. If referenceFrame is null then J2K should be assumed.
     */
    imageBoreVector?: Array<number>;

    /**
     * Array of four two-element arrays consisting of right ascension (RA) and
     * declination (DEC) values, in degrees, in the specified referenceFrame. If
     * referenceFrame is null then J2K should be assumed. These coordinate pairs
     * indicate the four corners of the image beginning with the Upper Left (UL) and
     * moving clockwise to Upper Right (UR), Lower Right (LR), and ending with the
     * Lower Left (LL): [ [UL RA, UL DEC], [UR RA, UR DEC], [LR RA, LR DEC], [LL RA, LL
     * DEC] ].
     */
    imageCorners?: Array<Array<number>>;

    /**
     * Height of the image field of view, in degrees.
     */
    imageFOVHeight?: number;

    /**
     * Width of the image field of view, in degrees.
     */
    imageFOVWidth?: number;

    /**
     * Unit vector of the horizontal (x) axis of the image plane in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    imageHorizVector?: Array<number>;

    /**
     * Unit vector of the vertical (y) axis of the image plane, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    imageVertVector?: Array<number>;

    /**
     * Instrumental magnitude of a sensor before corrections are applied for atmosphere
     * or to transform to standard magnitude scale.
     */
    magInstrumental?: number;

    /**
     * Uncertainty in the instrumental magnitude.
     */
    magInstrumentalUnc?: number;

    /**
     * Must be present for all values n=1 to numNeutralDensityFilters, in incrementing
     * order of n, and for no other values of n.
     */
    neutralDensityFilterNames?: Array<string>;

    /**
     * The transmission of the nth neutral density filter. Must be present for all
     * values n=1 to numNeutralDensityFilters, in incrementing order of n, and for no
     * other values of n.
     */
    neutralDensityFilterTransmissions?: Array<number>;

    /**
     * The uncertainty in the transmission for the nth filter. Must be present for all
     * values n=1 to numNeutralDensityFilters, in incrementing order of n, and for no
     * other values of n.
     */
    neutralDensityFilterTransmissionsUnc?: Array<number>;

    /**
     * Number of catalog stars in the detector field of view (FOV) with the target
     * object. Can be 0 for narrow FOV sensors.
     */
    numCatalogStars?: number;

    /**
     * Number of correlated stars in the FOV with the target object. Can be 0 for
     * narrow FOV sensors.
     */
    numCorrelatedStars?: number;

    /**
     * Number of detected stars in the FOV with the target object. Helps identify
     * frames with clouds.
     */
    numDetectedStars?: number;

    /**
     * The number of neutral density filters used.
     */
    numNeutralDensityFilters?: number;

    /**
     * The value is the number of spectral filters used.
     */
    numSpectralFilters?: number;

    /**
     * Distance from the target object to the sun during the observation in meters.
     */
    objSunRange?: number;

    /**
     * Ob detection time in ISO 8601 UTC with microsecond precision, will be set to
     * EOObservation obTime if blank.
     */
    obTime?: string;

    /**
     * Optical Cross Section computed in meters squared per steradian.
     */
    opticalCrossSection?: number;

    /**
     * Uncertainty in Optical Cross Section computed in meters squared per steradian.
     */
    opticalCrossSectionUnc?: number;

    /**
     * Number of stars used in photometric fit count.
     */
    pcalNumStars?: number;

    /**
     * Peak Aperture Raw Counts is the value of the peak pixel in the real or synthetic
     * aperture containing the target signal.
     */
    peakApertureCount?: number;

    /**
     * Peak Background Raw Counts is the largest pixel value used in background signal.
     */
    peakBackgroundCount?: number;

    /**
     * Solar phase angle bisector vector. The vector that bisects the solar phase
     * angle. The phase angle bisector is the angle that is half of the value of the
     * Solar Phase Angle. Then calculate the point on the RA/DEC (ECI J2000.0) sphere
     * that a vector at this angle would intersect.
     */
    phaseAngBisect?: number;

    /**
     * Pixel array size (height) in pixels.
     */
    pixelArrayHeight?: number;

    /**
     * Pixel array size (width) in pixels.
     */
    pixelArrayWidth?: number;

    /**
     * Maximum valid pixel value, this is defined as 2^(number of bits per pixel). For
     * example, a CCD with 16-bitpixels, would have a maximum valid pixel value of 2^16
     * = 65536. This can represent the saturation value of the detector, but some
     * sensors will saturate at a value significantly lower than full well depth. This
     * is the analog-to-digital conversion (ADC) saturation value.
     */
    pixelMax?: number;

    /**
     * Minimum valid pixel value, this is typically 0.
     */
    pixelMin?: number;

    /**
     * Predicted Azimuth angle of the target object from a ground-based sensor (no
     * atmospheric refraction correction required) in degrees. AZ_EL implies apparent
     * topocentric place in true of date reference frame as seen from the observer with
     * aberration due to the observer velocity and light travel time applied.
     */
    predictedAzimuth?: number;

    /**
     * Predicted Declination of the Target object from the frame of reference of the
     * sensor (J2000, geocentric velocity aberration), in degrees. SGP4 and VCMs
     * produce geocentric origin and velocity aberration and subtracting the sensor
     * geocentric position of the sensor places in its reference frame.
     */
    predictedDeclination?: number;

    /**
     * Uncertainty of Predicted Declination of the Target object from the frame of
     * reference of the sensor (J2000, geocentric velocity aberration). SGP4 and VCMs
     * produce geocentric origin and velocity aberration and subtracting the sensor
     * geocentric position of the sensor places in its reference frame.
     */
    predictedDeclinationUnc?: number;

    /**
     * Predicted elevation angle of the target object from a ground-based sensor (no
     * atmospheric refraction correction required) in degrees. AZ_EL implies apparent
     * topocentric place in true of date reference frame as seen from the observer with
     * aberration due to the observer velocity and light travel time applied.
     */
    predictedElevation?: number;

    /**
     * Predicted Right Ascension of the Target object from the frame of reference of
     * the sensor (J2000, geocentric velocity aberration), in degrees. SGP4 and VCMs
     * produce geocentric origin and velocity aberration and subtracting the sensor
     * geocentric position of the sensor places in its reference frame.
     */
    predictedRa?: number;

    /**
     * Uncertainty of predicted Right Ascension of the Target object from the frame of
     * reference of the sensor (J2000, geocentric velocity aberration). SGP4 and VCMs
     * produce geocentric origin and velocity aberration and subtracting the sensor
     * geocentric position of the sensor places in its reference frame.
     */
    predictedRaUnc?: number;

    /**
     * Covariance (x^2) in measured Right Ascension (X) in degrees squared.
     */
    raCov?: number;

    /**
     * Covariance (XY) in measured Right Ascension/declination (XY) in degrees squared.
     */
    raDeclinationCov?: number;

    /**
     * Spatial covariance of image distribution across horizontal and vertical
     * directions measured in pixels squared.
     */
    rowColCov?: number;

    /**
     * Spatial variance of image distribution in vertical direction measured in pixels
     * squared.
     */
    rowVariance?: number;

    /**
     * Estimated signal-to-noise ratio (SNR) for the total radiometric signal. Under
     * some algorithms, this can be a constant per target (not per observation). Note:
     * this SNR applies to the total signal of the radiometric source (i.e.,
     * Net_Obj_Sig with units digital number per second), not to be confused with the
     * SNR of the signal in the peak pixel (i.e., digital number per pixel per second).
     */
    snrEst?: number;

    /**
     * Fraction of the sun that is illuminating the target object. This indicates if
     * the target is in the Earth's penumbra or umbra. It is 0 when object is in umbra
     * and 1 when object is fully illuminated.
     */
    solarDiskFrac?: number;

    /**
     * Source of the data, will be set to EOObservation source if blank.
     */
    source?: string;

    /**
     * Array of the SpectralFilters keywords, must be present for all values n=1 to
     * numSpectralFilters, in incrementing order of n, and for no other values of n.
     */
    spectralFilters?: Array<string>;

    /**
     * The in-band solar magnitude at 1 A.U. Must be present for all values n=1 to
     * numSpectralFilters, in incrementing order of n, and for no other values of n.
     * Units = magnitude.
     */
    spectralFilterSolarMag?: Array<number>;

    /**
     * The in-band average irradiance of a 0th mag source. Must be present for all
     * values n=1 to numSpectralFilters, in incrementing order of n, and for no other
     * values of n. Units = watts per meters squared per nanometer.
     */
    spectralZMFL?: Array<number>;

    /**
     * Azimuth angle of the sun from a ground-based telescope (no atmospheric
     * refraction correction required) the observer with aberration due to the observer
     * velocity and light travel time applied in degrees.
     */
    sunAzimuth?: number;

    /**
     * Elevation angle of the sun from a ground-based telescope (no atmospheric
     * refraction correction required) in degrees.
     */
    sunElevation?: number;

    /**
     * X-position component of the sun state vector in ECI J2000 coordinate frame, in
     * kilometers.
     */
    sunStatePosX?: number;

    /**
     * Y-position component of the sun state vector in ECI J2000 coordinate frame, in
     * kilometers.
     */
    sunStatePosY?: number;

    /**
     * Z-position component of the sun state vector in ECI J2000 coordinate frame, in
     * kilometers.
     */
    sunStatePosZ?: number;

    /**
     * X-velocity component of the sun state vector in ECI J2000 coordinate frame, in
     * kilometers per second.
     */
    sunStateVelX?: number;

    /**
     * Y-velocity component of the sun state vector in ECI J2000 coordinate frame, in
     * kilometers per second.
     */
    sunStateVelY?: number;

    /**
     * Z-velocity component of the sun state vector in ECI J2000 coordinate frame, in
     * kilometers per second.
     */
    sunStateVelZ?: number;

    /**
     * An array of surface brightness measurements in magnitudes per square arcsecond
     * from the optical image that show change over an interval of time. The array
     * length is dependent on the length of the streak. The distFromStreakCenter,
     * surfBrightness, and surfBrightnessUnc arrays will match in size.
     */
    surfBrightness?: Array<number>;

    /**
     * An array of surface brightness uncertainty measurements in magnitudes per square
     * arcsecond from the optical image that show change over an interval of time. The
     * array length is dependent on the length of the streak. The distFromStreakCenter,
     * surfBrightness, and surfBrightnessUnc arrays will match in size.
     */
    surfBrightnessUnc?: Array<number>;

    /**
     * Uncertainty in the times reported in UTC in seconds.
     */
    timesUnc?: number;

    /**
     * Time off element set reported in seconds.
     */
    toes?: number;

    /**
     * The value for the zero-point calculated for each filter denoted in
     * spectralFilters. It is the difference between the catalog mag and instrumental
     * mag for a set of standard stars. For use with All Sky photometry. Must be
     * present for all values n=1 to numSpectralFilters, in incrementing order of n,
     * and for no other values of n.
     */
    zeroPoints?: Array<number>;

    /**
     * The uncertainty in the zero point for the filter denoted in spectralFilters. For
     * use with All Sky photometry. Must be present for all values n=1 to
     * numSpectralFilters, in incrementing order of n, and for no other values of n.
     */
    zeroPointsUnc?: Array<number>;
  }
}

export interface EoObservationRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface EoObservationListParams extends OffsetPageParams {
  /**
   * Ob detection time in ISO 8601 UTC, up to microsecond precision. Consumers should
   * contact the provider for details on their obTime specifications.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;
}

export interface EoObservationCountParams {
  /**
   * Ob detection time in ISO 8601 UTC, up to microsecond precision. Consumers should
   * contact the provider for details on their obTime specifications.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface EoObservationCreateBulkParams {
  /**
   * Body param:
   */
  body: Array<EoObservationCreateBulkParams.Body>;

  /**
   * Query param: Flag to convert observation reference frame into J2000.
   */
  convertToJ2K?: boolean;
}

export namespace EoObservationCreateBulkParams {
  /**
   * Model representation of observation data for electro-optical based sensor
   * phenomenologies. ECI J2K is the preferred reference frame for EOObservations,
   * however, several user-specified reference frames are accommodated. Users should
   * check the EOObservation record as well as the 'Discover' tab in the storefront
   * to confirm the coordinate frames used by the data provider.
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
     * Ob detection time in ISO 8601 UTC, up to microsecond precision. Consumers should
     * contact the provider for details on their obTime specifications.
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
     * Line of sight azimuth angle in degrees and topocentric frame. Reported value
     * should include all applicable corrections as specified on the source provider
     * data card. If uncertain, consumers should contact the provider for details on
     * the applied corrections.
     */
    azimuth?: number;

    /**
     * Sensor line of sight azimuth angle bias in degrees.
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
     * One sigma uncertainty in the line of sight azimuth angle, in degrees.
     */
    azimuthUnc?: number;

    /**
     * Background intensity for IR observations, in kilowatt per steradian per
     * micrometer.
     */
    bgIntensity?: number;

    /**
     * Method indicating telescope movement during collection (AUTOTRACK, MANUAL
     * AUTOTRACK, MANUAL RATE TRACK, MANUAL SIDEREAL, SIDEREAL, RATE TRACK).
     */
    collectMethod?: string;

    /**
     * Object Correlation Quality score of the observation when compared to a known
     * orbit state (non-standardized). Users should consult data providers regarding
     * the expected range of values.
     */
    corrQuality?: number;

    /**
     * Line of sight declination, in degrees, in the specified referenceFrame. If
     * referenceFrame is null then J2K should be assumed. Reported value should include
     * all applicable corrections as specified on the source provider data card. If
     * uncertain, consumers should contact the provider for details on the applied
     * corrections.
     */
    declination?: number;

    /**
     * Sensor line of sight declination angle bias, in degrees.
     */
    declinationBias?: number;

    /**
     * Optional flag indicating whether the declination value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    declinationMeasured?: boolean;

    /**
     * Line of sight declination rate of change, in degrees per second, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    declinationRate?: number;

    /**
     * One sigma uncertainty in the line of sight declination angle, in degrees.
     */
    declinationUnc?: number;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Line of sight elevation in degrees and topocentric frame. Reported value should
     * include all applicable corrections as specified on the source provider data
     * card. If uncertain, consumers should contact the provider for details on the
     * applied corrections.
     */
    elevation?: number;

    /**
     * Sensor line of sight elevation bias, in degrees.
     */
    elevationBias?: number;

    /**
     * Optional flag indicating whether the elevation value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    elevationMeasured?: boolean;

    /**
     * Rate of change of the line of sight elevation, in degrees per second.
     */
    elevationRate?: number;

    /**
     * One sigma uncertainty in the line of sight elevation angle, in degrees.
     */
    elevationUnc?: number;

    /**
     * Model representation of additional detailed observation data for electro-optical
     * based sensor phenomenologies.
     */
    eoobservationDetails?: Body.EoobservationDetails;

    /**
     * Image exposure duration in seconds. For observations performed using frame
     * stacking or synthetic tracking methods, the exposure duration should be the
     * total integration time. This field is highly recommended / required if the
     * observations are going to be used for photometric processing.
     */
    expDuration?: number;

    /**
     * The number of RSOs detected in the sensor field of view.
     */
    fovCount?: number;

    /**
     * The number of uncorrelated tracks in the field of view.
     */
    fovCountUCT?: number;

    /**
     * For GEO detections, the altitude, in kilometers.
     */
    geoalt?: number;

    /**
     * For GEO detections, the latitude in degrees north.
     */
    geolat?: number;

    /**
     * For GEO detections, the longitude in degrees east.
     */
    geolon?: number;

    /**
     * For GEO detections, the range, in kilometers.
     */
    georange?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * Unique identifier of the Sky Imagery record associated with this observation, if
     * applicable.
     */
    idSkyImagery?: string;

    /**
     * Intensity of the target for IR observations, in kilowatt per steradian per
     * micrometer.
     */
    intensity?: number;

    /**
     * One sigma uncertainty in the line of sight pointing in micro-radians.
     */
    losUnc?: number;

    /**
     * Line-of-sight cartesian X position of the target, in kilometers, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    losx?: number;

    /**
     * Line-of-sight cartesian X velocity of target, in kilometers per second, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    losxvel?: number;

    /**
     * Line-of-sight cartesian Y position of the target, in kilometers, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    losy?: number;

    /**
     * Line-of-sight cartesian Y velocity of target, in kilometers per second, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    losyvel?: number;

    /**
     * Line-of-sight cartesian Z position of the target, in kilometers, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    losz?: number;

    /**
     * Line-of-sight cartesian Z velocity of target, in kilometers per second, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    loszvel?: number;

    /**
     * Measure of observed brightness calibrated against the Gaia G-band in units of
     * magnitudes.
     */
    mag?: number;

    /**
     * Formula: mag - 5.0 \* log_10(geo_range / 1000000.0).
     */
    magNormRange?: number;

    /**
     * Uncertainty of the observed brightness in units of magnitudes.
     */
    magUnc?: number;

    /**
     * Net object signature = counts / expDuration.
     */
    netObjSig?: number;

    /**
     * Net object signature uncertainty = counts uncertainty / expDuration.
     */
    netObjSigUnc?: number;

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
     * Boolean indicating that the target object was in a penumbral eclipse at the time
     * of this observation.
     */
    penumbra?: boolean;

    /**
     * Primary Extinction Coefficient, in magnitudes. Primary Extinction is the
     * coefficient applied to the airmass to determine how much the observed visual
     * magnitude has been attenuated by the atmosphere. Extinction, in general,
     * describes the absorption and scattering of electromagnetic radiation by dust and
     * gas between an emitting astronomical object and the observer. See the
     * EOObservationDetails API for specification of extinction coefficients for
     * multiple spectral filters.
     */
    primaryExtinction?: number;

    /**
     * Primary Extinction Coefficient Uncertainty, in magnitudes.
     */
    primaryExtinctionUnc?: number;

    /**
     * Line of sight right ascension, in degrees, in the specified referenceFrame. If
     * referenceFrame is null then J2K should be assumed. Reported value should include
     * all applicable corrections as specified on the source provider data card. If
     * uncertain, consumers should contact the provider for details on the applied
     * corrections.
     */
    ra?: number;

    /**
     * Sensor line of sight right ascension bias, in degrees.
     */
    raBias?: number;

    /**
     * Optional flag indicating whether the ra value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    raMeasured?: boolean;

    /**
     * Line of sight range, in kilometers. Reported value should include all applicable
     * corrections as specified on the source provider data card. If uncertain,
     * consumers should contact the provider for details on the applied corrections.
     */
    range?: number;

    /**
     * Sensor line of sight range bias, in kilometers.
     */
    rangeBias?: number;

    /**
     * Optional flag indicating whether the range value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    rangeMeasured?: boolean;

    /**
     * Range rate in kilometers per second. Reported value should include all
     * applicable corrections as specified on the source provider data card. If
     * uncertain, consumers should contact the provider for details on the applied
     * corrections.
     */
    rangeRate?: number;

    /**
     * Optional flag indicating whether the rangeRate value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    rangeRateMeasured?: boolean;

    /**
     * One sigma uncertainty in the line of sight range rate, in kilometers per second.
     */
    rangeRateUnc?: number;

    /**
     * One sigma uncertainty in the line of sight range, in kilometers.
     */
    rangeUnc?: number;

    /**
     * Line of sight right ascension rate of change, in degrees per second, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    raRate?: number;

    /**
     * One sigma uncertainty in the line of sight right ascension angle, in degrees.
     */
    raUnc?: number;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * The reference frame of the EOObservation measurements. If the referenceFrame is
     * null it is assumed to be J2000.
     */
    referenceFrame?: 'J2000' | 'GCRF' | 'ITRF' | 'TEME';

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Sensor altitude at obTime (if mobile/onorbit), in kilometers.
     */
    senalt?: number;

    /**
     * Sensor WGS84 latitude at obTime (if mobile/onorbit), in degrees. If null, can be
     * obtained from sensor info. -90 to 90 degrees (negative values south of equator).
     */
    senlat?: number;

    /**
     * Sensor WGS84 longitude at obTime (if mobile/onorbit), in degrees. If null, can
     * be obtained from sensor info. -180 to 180 degrees (negative values west of Prime
     * Meridian).
     */
    senlon?: number;

    /**
     * The quaternion describing the rotation of the sensor in relation to the
     * body-fixed frame used for this system into the local geodetic frame, at
     * observation time (obTime). The array element order convention is scalar
     * component first, followed by the three vector components (qc, q1, q2, q3).
     */
    senQuat?: Array<number>;

    /**
     * The reference frame of the observing sensor state. If the senReferenceFrame is
     * null it is assumed to be J2000.
     */
    senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * Cartesian X velocity of the observing mobile/onorbit sensor at obTime, in
     * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
     * is null then J2K should be assumed.
     */
    senvelx?: number;

    /**
     * Cartesian Y velocity of the observing mobile/onorbit sensor at obTime, in
     * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
     * is null then J2K should be assumed.
     */
    senvely?: number;

    /**
     * Cartesian Z velocity of the observing mobile/onorbit sensor at obTime, in
     * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
     * is null then J2K should be assumed.
     */
    senvelz?: number;

    /**
     * Cartesian X position of the observing mobile/onorbit sensor at obTime, in
     * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
     * then J2K should be assumed.
     */
    senx?: number;

    /**
     * Cartesian Y position of the observing mobile/onorbit sensor at obTime, in
     * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
     * then J2K should be assumed.
     */
    seny?: number;

    /**
     * Cartesian Z position of the observing mobile/onorbit sensor at obTime, in
     * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
     * then J2K should be assumed.
     */
    senz?: number;

    /**
     * Shutter delay in seconds.
     */
    shutterDelay?: number;

    /**
     * Average Sky Background signal, in magnitudes. Sky Background refers to the
     * incoming light from an apparently empty part of the night sky.
     */
    skyBkgrnd?: number;

    /**
     * Angle from the sun to the equatorial plane, in degrees.
     */
    solarDecAngle?: number;

    /**
     * The angle, in degrees, between the projections of the target-to-observer vector
     * and the target-to-sun vector onto the equatorial plane. The angle is represented
     * as negative when closing (i.e. before the opposition) and positive when opening
     * (after the opposition).
     */
    solarEqPhaseAngle?: number;

    /**
     * The angle, in degrees, between the target-to-observer vector and the
     * target-to-sun vector.
     */
    solarPhaseAngle?: number;

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
     * Boolean indicating that the target object was in umbral eclipse at the time of
     * this observation.
     */
    umbra?: boolean;

    /**
     * Formula: 2.5 \* log_10 (zero_mag_counts / expDuration).
     */
    zeroptd?: number;

    /**
     * This is the uncertainty in the zero point for the filter used for this
     * observation/row in units of mag. For use with differential photometry.
     */
    zeroPtdUnc?: number;
  }

  export namespace Body {
    /**
     * Model representation of additional detailed observation data for electro-optical
     * based sensor phenomenologies.
     */
    export interface EoobservationDetails {
      /**
       * World Coordinate System (WCS) X pixel origin in astrometric fit.
       */
      acalCrPixX?: number;

      /**
       * World Coordinate System (WCS) Y pixel origin in astrometric fit.
       */
      acalCrPixY?: number;

      /**
       * World Coordinate System (WCS) equatorial coordinate X origin corresponding to
       * CRPIX in astrometric fit in degrees.
       */
      acalCrValX?: number;

      /**
       * World Coordinate System (WCS) equatorial coordinate Y origin corresponding to
       * CRPIX in astrometric fit in degrees.
       */
      acalCrValY?: number;

      /**
       * Number of stars used in astrometric fit.
       */
      acalNumStars?: number;

      /**
       * This is the background signal at or in the vicinity of the radiometric source
       * position. Specifically, this is the average background count level in digital
       * number per pixel divided by the exposure time in seconds of the background
       * pixels used in the photometric extraction. Units are digital number per pixel
       * per second.
       */
      backgroundSignal?: number;

      /**
       * Estimated 1-sigma uncertainty in the background signal at or in the vicinity of
       * the radiometric source position. Units are digital number per pixel per second.
       */
      backgroundSignalUnc?: number;

      /**
       * The number of pixels binned horizontally.
       */
      binningHoriz?: number;

      /**
       * The number of pixels binned vertically.
       */
      binningVert?: number;

      /**
       * The x centroid position on the CCD of the target object, in pixels.
       */
      ccdObjPosX?: number;

      /**
       * The y centroid position on the CCD of the target object, in pixels.
       */
      ccdObjPosY?: number;

      /**
       * This is the pixel width of the target. This is either a frame-by-frame
       * measurement or a constant point spread function or synthetic aperture used in
       * the extraction.
       */
      ccdObjWidth?: number;

      /**
       * Operating temperature, in kelvin, of CCD recorded during exposure or measured
       * during calibrations.
       */
      ccdTemp?: number;

      /**
       * Observed centroid column number on the focal plane in pixels (0 is left edge,
       * 0.5 is center of pixels along left of image).
       */
      centroidColumn?: number;

      /**
       * Observed centroid row number on the focal plane in pixels (0 is top edge, 0.5 is
       * center of pixels along top of image).
       */
      centroidRow?: number;

      /**
       * Classification marking of the data in IC/CAPCO Portion-marked format, will be
       * set to EOObservation classificationMarking if blank.
       */
      classificationMarking?: string;

      /**
       * Color coefficient for filter n for a space-based sensor where there is no
       * atmospheric extinction. Must be present for all values n=1 to
       * numSpectralFilters, in incrementing order of n, and for no other values of n.
       */
      colorCoeffs?: Array<number>;

      /**
       * Spatial variance of image distribution in horizontal direction measured in
       * pixels squared.
       */
      columnVariance?: number;

      /**
       * The reference number n, in neutralDensityFilters for the currently used neutral
       * density filter.
       */
      currentNeutralDensityFilterNum?: number;

      /**
       * The reference number, x, where x ranges from 1 to n, where n is the number
       * specified in numSpectralFilters that corresponds to the spectral filter given in
       * the corresponding spectralFilters.
       */
      currentSpectralFilterNum?: number;

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
      dataMode?: 'REAL' | 'TEST' | 'EXERCISE' | 'SIMULATED';

      /**
       * Covariance (Y^2) in measured declination (Y) in degrees squared.
       */
      declinationCov?: number;

      /**
       * An array of measurements that correspond to the distance from the streak center
       * measured from the optical image in pixels that show change over an interval of
       * time. The array length is dependent on the length of the streak. The
       * distFromStreakCenter, surfBrightness, and surfBrightnessUnc arrays will match in
       * size.
       */
      distFromStreakCenter?: Array<number>;

      /**
       * Angle off element set reported in degrees.
       */
      does?: number;

      /**
       * The extinction coefficient computed for the nth filter. Must be present for all
       * values n=1 to numSpectralFilters, in incrementing order of n, and for no other
       * values of n. Units = magnitudes per air mass.
       */
      extinctionCoeffs?: Array<number>;

      /**
       * The uncertainty in the extinction coefficient for the nth filter. Must be
       * present for all values n=1 to numSpectralFilters, in incrementing order of n,
       * and for no other values of n. -9999 for space-based sensors. Units = magnitudes
       * per air mass.
       */
      extinctionCoeffsUnc?: Array<number>;

      /**
       * Some sensors have gain settings. This value is the gain used during the
       * observation in units of electrons per analog-to-digital unit. If no gain is
       * used, the value = 1.
       */
      gain?: number;

      /**
       * Unique identifier of the parent EOObservation.
       */
      idEOObservation?: string;

      /**
       * Sensor instantaneous field of view (ratio of pixel pitch to focal length), in
       * microradians.
       */
      ifov?: number;

      /**
       * Array of values for the right ascension and declination of the image center, in
       * degrees, in the specified referenceFrame. If referenceFrame is null then J2K
       * should be assumed.
       */
      imageBoreRaDec?: Array<number>;

      /**
       * The line of sight vector extending from the sensor toward the center of the
       * image in the specified referenceFrame. Typically aligned with the optical
       * boresight. If referenceFrame is null then J2K should be assumed.
       */
      imageBoreVector?: Array<number>;

      /**
       * Array of four two-element arrays consisting of right ascension (RA) and
       * declination (DEC) values, in degrees, in the specified referenceFrame. If
       * referenceFrame is null then J2K should be assumed. These coordinate pairs
       * indicate the four corners of the image beginning with the Upper Left (UL) and
       * moving clockwise to Upper Right (UR), Lower Right (LR), and ending with the
       * Lower Left (LL): [ [UL RA, UL DEC], [UR RA, UR DEC], [LR RA, LR DEC], [LL RA, LL
       * DEC] ].
       */
      imageCorners?: Array<Array<number>>;

      /**
       * Height of the image field of view, in degrees.
       */
      imageFOVHeight?: number;

      /**
       * Width of the image field of view, in degrees.
       */
      imageFOVWidth?: number;

      /**
       * Unit vector of the horizontal (x) axis of the image plane in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      imageHorizVector?: Array<number>;

      /**
       * Unit vector of the vertical (y) axis of the image plane, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      imageVertVector?: Array<number>;

      /**
       * Instrumental magnitude of a sensor before corrections are applied for atmosphere
       * or to transform to standard magnitude scale.
       */
      magInstrumental?: number;

      /**
       * Uncertainty in the instrumental magnitude.
       */
      magInstrumentalUnc?: number;

      /**
       * Must be present for all values n=1 to numNeutralDensityFilters, in incrementing
       * order of n, and for no other values of n.
       */
      neutralDensityFilterNames?: Array<string>;

      /**
       * The transmission of the nth neutral density filter. Must be present for all
       * values n=1 to numNeutralDensityFilters, in incrementing order of n, and for no
       * other values of n.
       */
      neutralDensityFilterTransmissions?: Array<number>;

      /**
       * The uncertainty in the transmission for the nth filter. Must be present for all
       * values n=1 to numNeutralDensityFilters, in incrementing order of n, and for no
       * other values of n.
       */
      neutralDensityFilterTransmissionsUnc?: Array<number>;

      /**
       * Number of catalog stars in the detector field of view (FOV) with the target
       * object. Can be 0 for narrow FOV sensors.
       */
      numCatalogStars?: number;

      /**
       * Number of correlated stars in the FOV with the target object. Can be 0 for
       * narrow FOV sensors.
       */
      numCorrelatedStars?: number;

      /**
       * Number of detected stars in the FOV with the target object. Helps identify
       * frames with clouds.
       */
      numDetectedStars?: number;

      /**
       * The number of neutral density filters used.
       */
      numNeutralDensityFilters?: number;

      /**
       * The value is the number of spectral filters used.
       */
      numSpectralFilters?: number;

      /**
       * Distance from the target object to the sun during the observation in meters.
       */
      objSunRange?: number;

      /**
       * Ob detection time in ISO 8601 UTC with microsecond precision, will be set to
       * EOObservation obTime if blank.
       */
      obTime?: string;

      /**
       * Optical Cross Section computed in meters squared per steradian.
       */
      opticalCrossSection?: number;

      /**
       * Uncertainty in Optical Cross Section computed in meters squared per steradian.
       */
      opticalCrossSectionUnc?: number;

      /**
       * Number of stars used in photometric fit count.
       */
      pcalNumStars?: number;

      /**
       * Peak Aperture Raw Counts is the value of the peak pixel in the real or synthetic
       * aperture containing the target signal.
       */
      peakApertureCount?: number;

      /**
       * Peak Background Raw Counts is the largest pixel value used in background signal.
       */
      peakBackgroundCount?: number;

      /**
       * Solar phase angle bisector vector. The vector that bisects the solar phase
       * angle. The phase angle bisector is the angle that is half of the value of the
       * Solar Phase Angle. Then calculate the point on the RA/DEC (ECI J2000.0) sphere
       * that a vector at this angle would intersect.
       */
      phaseAngBisect?: number;

      /**
       * Pixel array size (height) in pixels.
       */
      pixelArrayHeight?: number;

      /**
       * Pixel array size (width) in pixels.
       */
      pixelArrayWidth?: number;

      /**
       * Maximum valid pixel value, this is defined as 2^(number of bits per pixel). For
       * example, a CCD with 16-bitpixels, would have a maximum valid pixel value of 2^16
       * = 65536. This can represent the saturation value of the detector, but some
       * sensors will saturate at a value significantly lower than full well depth. This
       * is the analog-to-digital conversion (ADC) saturation value.
       */
      pixelMax?: number;

      /**
       * Minimum valid pixel value, this is typically 0.
       */
      pixelMin?: number;

      /**
       * Predicted Azimuth angle of the target object from a ground-based sensor (no
       * atmospheric refraction correction required) in degrees. AZ_EL implies apparent
       * topocentric place in true of date reference frame as seen from the observer with
       * aberration due to the observer velocity and light travel time applied.
       */
      predictedAzimuth?: number;

      /**
       * Predicted Declination of the Target object from the frame of reference of the
       * sensor (J2000, geocentric velocity aberration), in degrees. SGP4 and VCMs
       * produce geocentric origin and velocity aberration and subtracting the sensor
       * geocentric position of the sensor places in its reference frame.
       */
      predictedDeclination?: number;

      /**
       * Uncertainty of Predicted Declination of the Target object from the frame of
       * reference of the sensor (J2000, geocentric velocity aberration). SGP4 and VCMs
       * produce geocentric origin and velocity aberration and subtracting the sensor
       * geocentric position of the sensor places in its reference frame.
       */
      predictedDeclinationUnc?: number;

      /**
       * Predicted elevation angle of the target object from a ground-based sensor (no
       * atmospheric refraction correction required) in degrees. AZ_EL implies apparent
       * topocentric place in true of date reference frame as seen from the observer with
       * aberration due to the observer velocity and light travel time applied.
       */
      predictedElevation?: number;

      /**
       * Predicted Right Ascension of the Target object from the frame of reference of
       * the sensor (J2000, geocentric velocity aberration), in degrees. SGP4 and VCMs
       * produce geocentric origin and velocity aberration and subtracting the sensor
       * geocentric position of the sensor places in its reference frame.
       */
      predictedRa?: number;

      /**
       * Uncertainty of predicted Right Ascension of the Target object from the frame of
       * reference of the sensor (J2000, geocentric velocity aberration). SGP4 and VCMs
       * produce geocentric origin and velocity aberration and subtracting the sensor
       * geocentric position of the sensor places in its reference frame.
       */
      predictedRaUnc?: number;

      /**
       * Covariance (x^2) in measured Right Ascension (X) in degrees squared.
       */
      raCov?: number;

      /**
       * Covariance (XY) in measured Right Ascension/declination (XY) in degrees squared.
       */
      raDeclinationCov?: number;

      /**
       * Spatial covariance of image distribution across horizontal and vertical
       * directions measured in pixels squared.
       */
      rowColCov?: number;

      /**
       * Spatial variance of image distribution in vertical direction measured in pixels
       * squared.
       */
      rowVariance?: number;

      /**
       * Estimated signal-to-noise ratio (SNR) for the total radiometric signal. Under
       * some algorithms, this can be a constant per target (not per observation). Note:
       * this SNR applies to the total signal of the radiometric source (i.e.,
       * Net_Obj_Sig with units digital number per second), not to be confused with the
       * SNR of the signal in the peak pixel (i.e., digital number per pixel per second).
       */
      snrEst?: number;

      /**
       * Fraction of the sun that is illuminating the target object. This indicates if
       * the target is in the Earth's penumbra or umbra. It is 0 when object is in umbra
       * and 1 when object is fully illuminated.
       */
      solarDiskFrac?: number;

      /**
       * Source of the data, will be set to EOObservation source if blank.
       */
      source?: string;

      /**
       * Array of the SpectralFilters keywords, must be present for all values n=1 to
       * numSpectralFilters, in incrementing order of n, and for no other values of n.
       */
      spectralFilters?: Array<string>;

      /**
       * The in-band solar magnitude at 1 A.U. Must be present for all values n=1 to
       * numSpectralFilters, in incrementing order of n, and for no other values of n.
       * Units = magnitude.
       */
      spectralFilterSolarMag?: Array<number>;

      /**
       * The in-band average irradiance of a 0th mag source. Must be present for all
       * values n=1 to numSpectralFilters, in incrementing order of n, and for no other
       * values of n. Units = watts per meters squared per nanometer.
       */
      spectralZMFL?: Array<number>;

      /**
       * Azimuth angle of the sun from a ground-based telescope (no atmospheric
       * refraction correction required) the observer with aberration due to the observer
       * velocity and light travel time applied in degrees.
       */
      sunAzimuth?: number;

      /**
       * Elevation angle of the sun from a ground-based telescope (no atmospheric
       * refraction correction required) in degrees.
       */
      sunElevation?: number;

      /**
       * X-position component of the sun state vector in ECI J2000 coordinate frame, in
       * kilometers.
       */
      sunStatePosX?: number;

      /**
       * Y-position component of the sun state vector in ECI J2000 coordinate frame, in
       * kilometers.
       */
      sunStatePosY?: number;

      /**
       * Z-position component of the sun state vector in ECI J2000 coordinate frame, in
       * kilometers.
       */
      sunStatePosZ?: number;

      /**
       * X-velocity component of the sun state vector in ECI J2000 coordinate frame, in
       * kilometers per second.
       */
      sunStateVelX?: number;

      /**
       * Y-velocity component of the sun state vector in ECI J2000 coordinate frame, in
       * kilometers per second.
       */
      sunStateVelY?: number;

      /**
       * Z-velocity component of the sun state vector in ECI J2000 coordinate frame, in
       * kilometers per second.
       */
      sunStateVelZ?: number;

      /**
       * An array of surface brightness measurements in magnitudes per square arcsecond
       * from the optical image that show change over an interval of time. The array
       * length is dependent on the length of the streak. The distFromStreakCenter,
       * surfBrightness, and surfBrightnessUnc arrays will match in size.
       */
      surfBrightness?: Array<number>;

      /**
       * An array of surface brightness uncertainty measurements in magnitudes per square
       * arcsecond from the optical image that show change over an interval of time. The
       * array length is dependent on the length of the streak. The distFromStreakCenter,
       * surfBrightness, and surfBrightnessUnc arrays will match in size.
       */
      surfBrightnessUnc?: Array<number>;

      /**
       * Uncertainty in the times reported in UTC in seconds.
       */
      timesUnc?: number;

      /**
       * Time off element set reported in seconds.
       */
      toes?: number;

      /**
       * The value for the zero-point calculated for each filter denoted in
       * spectralFilters. It is the difference between the catalog mag and instrumental
       * mag for a set of standard stars. For use with All Sky photometry. Must be
       * present for all values n=1 to numSpectralFilters, in incrementing order of n,
       * and for no other values of n.
       */
      zeroPoints?: Array<number>;

      /**
       * The uncertainty in the zero point for the filter denoted in spectralFilters. For
       * use with All Sky photometry. Must be present for all values n=1 to
       * numSpectralFilters, in incrementing order of n, and for no other values of n.
       */
      zeroPointsUnc?: Array<number>;
    }
  }
}

export interface EoObservationTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Ob detection time in ISO 8601 UTC, up to microsecond precision. Consumers should
   * contact the provider for details on their obTime specifications.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface EoObservationUnvalidatedPublishParams {
  body: Array<EoObservationUnvalidatedPublishParams.Body>;
}

export namespace EoObservationUnvalidatedPublishParams {
  /**
   * Model representation of observation data for electro-optical based sensor
   * phenomenologies. ECI J2K is the preferred reference frame for EOObservations,
   * however, several user-specified reference frames are accommodated. Users should
   * check the EOObservation record as well as the 'Discover' tab in the storefront
   * to confirm the coordinate frames used by the data provider.
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
     * Ob detection time in ISO 8601 UTC, up to microsecond precision. Consumers should
     * contact the provider for details on their obTime specifications.
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
     * Line of sight azimuth angle in degrees and topocentric frame. Reported value
     * should include all applicable corrections as specified on the source provider
     * data card. If uncertain, consumers should contact the provider for details on
     * the applied corrections.
     */
    azimuth?: number;

    /**
     * Sensor line of sight azimuth angle bias in degrees.
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
     * One sigma uncertainty in the line of sight azimuth angle, in degrees.
     */
    azimuthUnc?: number;

    /**
     * Background intensity for IR observations, in kilowatt per steradian per
     * micrometer.
     */
    bgIntensity?: number;

    /**
     * Method indicating telescope movement during collection (AUTOTRACK, MANUAL
     * AUTOTRACK, MANUAL RATE TRACK, MANUAL SIDEREAL, SIDEREAL, RATE TRACK).
     */
    collectMethod?: string;

    /**
     * Object Correlation Quality score of the observation when compared to a known
     * orbit state (non-standardized). Users should consult data providers regarding
     * the expected range of values.
     */
    corrQuality?: number;

    /**
     * Line of sight declination, in degrees, in the specified referenceFrame. If
     * referenceFrame is null then J2K should be assumed. Reported value should include
     * all applicable corrections as specified on the source provider data card. If
     * uncertain, consumers should contact the provider for details on the applied
     * corrections.
     */
    declination?: number;

    /**
     * Sensor line of sight declination angle bias, in degrees.
     */
    declinationBias?: number;

    /**
     * Optional flag indicating whether the declination value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    declinationMeasured?: boolean;

    /**
     * Line of sight declination rate of change, in degrees per second, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    declinationRate?: number;

    /**
     * One sigma uncertainty in the line of sight declination angle, in degrees.
     */
    declinationUnc?: number;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Line of sight elevation in degrees and topocentric frame. Reported value should
     * include all applicable corrections as specified on the source provider data
     * card. If uncertain, consumers should contact the provider for details on the
     * applied corrections.
     */
    elevation?: number;

    /**
     * Sensor line of sight elevation bias, in degrees.
     */
    elevationBias?: number;

    /**
     * Optional flag indicating whether the elevation value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    elevationMeasured?: boolean;

    /**
     * Rate of change of the line of sight elevation, in degrees per second.
     */
    elevationRate?: number;

    /**
     * One sigma uncertainty in the line of sight elevation angle, in degrees.
     */
    elevationUnc?: number;

    /**
     * Model representation of additional detailed observation data for electro-optical
     * based sensor phenomenologies.
     */
    eoobservationDetails?: Body.EoobservationDetails;

    /**
     * Image exposure duration in seconds. For observations performed using frame
     * stacking or synthetic tracking methods, the exposure duration should be the
     * total integration time. This field is highly recommended / required if the
     * observations are going to be used for photometric processing.
     */
    expDuration?: number;

    /**
     * The number of RSOs detected in the sensor field of view.
     */
    fovCount?: number;

    /**
     * The number of uncorrelated tracks in the field of view.
     */
    fovCountUCT?: number;

    /**
     * For GEO detections, the altitude, in kilometers.
     */
    geoalt?: number;

    /**
     * For GEO detections, the latitude in degrees north.
     */
    geolat?: number;

    /**
     * For GEO detections, the longitude in degrees east.
     */
    geolon?: number;

    /**
     * For GEO detections, the range, in kilometers.
     */
    georange?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * Unique identifier of the Sky Imagery record associated with this observation, if
     * applicable.
     */
    idSkyImagery?: string;

    /**
     * Intensity of the target for IR observations, in kilowatt per steradian per
     * micrometer.
     */
    intensity?: number;

    /**
     * One sigma uncertainty in the line of sight pointing in micro-radians.
     */
    losUnc?: number;

    /**
     * Line-of-sight cartesian X position of the target, in kilometers, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    losx?: number;

    /**
     * Line-of-sight cartesian X velocity of target, in kilometers per second, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    losxvel?: number;

    /**
     * Line-of-sight cartesian Y position of the target, in kilometers, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    losy?: number;

    /**
     * Line-of-sight cartesian Y velocity of target, in kilometers per second, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    losyvel?: number;

    /**
     * Line-of-sight cartesian Z position of the target, in kilometers, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    losz?: number;

    /**
     * Line-of-sight cartesian Z velocity of target, in kilometers per second, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    loszvel?: number;

    /**
     * Measure of observed brightness calibrated against the Gaia G-band in units of
     * magnitudes.
     */
    mag?: number;

    /**
     * Formula: mag - 5.0 \* log_10(geo_range / 1000000.0).
     */
    magNormRange?: number;

    /**
     * Uncertainty of the observed brightness in units of magnitudes.
     */
    magUnc?: number;

    /**
     * Net object signature = counts / expDuration.
     */
    netObjSig?: number;

    /**
     * Net object signature uncertainty = counts uncertainty / expDuration.
     */
    netObjSigUnc?: number;

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
     * Boolean indicating that the target object was in a penumbral eclipse at the time
     * of this observation.
     */
    penumbra?: boolean;

    /**
     * Primary Extinction Coefficient, in magnitudes. Primary Extinction is the
     * coefficient applied to the airmass to determine how much the observed visual
     * magnitude has been attenuated by the atmosphere. Extinction, in general,
     * describes the absorption and scattering of electromagnetic radiation by dust and
     * gas between an emitting astronomical object and the observer. See the
     * EOObservationDetails API for specification of extinction coefficients for
     * multiple spectral filters.
     */
    primaryExtinction?: number;

    /**
     * Primary Extinction Coefficient Uncertainty, in magnitudes.
     */
    primaryExtinctionUnc?: number;

    /**
     * Line of sight right ascension, in degrees, in the specified referenceFrame. If
     * referenceFrame is null then J2K should be assumed. Reported value should include
     * all applicable corrections as specified on the source provider data card. If
     * uncertain, consumers should contact the provider for details on the applied
     * corrections.
     */
    ra?: number;

    /**
     * Sensor line of sight right ascension bias, in degrees.
     */
    raBias?: number;

    /**
     * Optional flag indicating whether the ra value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    raMeasured?: boolean;

    /**
     * Line of sight range, in kilometers. Reported value should include all applicable
     * corrections as specified on the source provider data card. If uncertain,
     * consumers should contact the provider for details on the applied corrections.
     */
    range?: number;

    /**
     * Sensor line of sight range bias, in kilometers.
     */
    rangeBias?: number;

    /**
     * Optional flag indicating whether the range value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    rangeMeasured?: boolean;

    /**
     * Range rate in kilometers per second. Reported value should include all
     * applicable corrections as specified on the source provider data card. If
     * uncertain, consumers should contact the provider for details on the applied
     * corrections.
     */
    rangeRate?: number;

    /**
     * Optional flag indicating whether the rangeRate value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    rangeRateMeasured?: boolean;

    /**
     * One sigma uncertainty in the line of sight range rate, in kilometers per second.
     */
    rangeRateUnc?: number;

    /**
     * One sigma uncertainty in the line of sight range, in kilometers.
     */
    rangeUnc?: number;

    /**
     * Line of sight right ascension rate of change, in degrees per second, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    raRate?: number;

    /**
     * One sigma uncertainty in the line of sight right ascension angle, in degrees.
     */
    raUnc?: number;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * The reference frame of the EOObservation measurements. If the referenceFrame is
     * null it is assumed to be J2000.
     */
    referenceFrame?: 'J2000' | 'GCRF' | 'ITRF' | 'TEME';

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Sensor altitude at obTime (if mobile/onorbit), in kilometers.
     */
    senalt?: number;

    /**
     * Sensor WGS84 latitude at obTime (if mobile/onorbit), in degrees. If null, can be
     * obtained from sensor info. -90 to 90 degrees (negative values south of equator).
     */
    senlat?: number;

    /**
     * Sensor WGS84 longitude at obTime (if mobile/onorbit), in degrees. If null, can
     * be obtained from sensor info. -180 to 180 degrees (negative values west of Prime
     * Meridian).
     */
    senlon?: number;

    /**
     * The quaternion describing the rotation of the sensor in relation to the
     * body-fixed frame used for this system into the local geodetic frame, at
     * observation time (obTime). The array element order convention is scalar
     * component first, followed by the three vector components (qc, q1, q2, q3).
     */
    senQuat?: Array<number>;

    /**
     * The reference frame of the observing sensor state. If the senReferenceFrame is
     * null it is assumed to be J2000.
     */
    senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * Cartesian X velocity of the observing mobile/onorbit sensor at obTime, in
     * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
     * is null then J2K should be assumed.
     */
    senvelx?: number;

    /**
     * Cartesian Y velocity of the observing mobile/onorbit sensor at obTime, in
     * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
     * is null then J2K should be assumed.
     */
    senvely?: number;

    /**
     * Cartesian Z velocity of the observing mobile/onorbit sensor at obTime, in
     * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
     * is null then J2K should be assumed.
     */
    senvelz?: number;

    /**
     * Cartesian X position of the observing mobile/onorbit sensor at obTime, in
     * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
     * then J2K should be assumed.
     */
    senx?: number;

    /**
     * Cartesian Y position of the observing mobile/onorbit sensor at obTime, in
     * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
     * then J2K should be assumed.
     */
    seny?: number;

    /**
     * Cartesian Z position of the observing mobile/onorbit sensor at obTime, in
     * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
     * then J2K should be assumed.
     */
    senz?: number;

    /**
     * Shutter delay in seconds.
     */
    shutterDelay?: number;

    /**
     * Average Sky Background signal, in magnitudes. Sky Background refers to the
     * incoming light from an apparently empty part of the night sky.
     */
    skyBkgrnd?: number;

    /**
     * Angle from the sun to the equatorial plane, in degrees.
     */
    solarDecAngle?: number;

    /**
     * The angle, in degrees, between the projections of the target-to-observer vector
     * and the target-to-sun vector onto the equatorial plane. The angle is represented
     * as negative when closing (i.e. before the opposition) and positive when opening
     * (after the opposition).
     */
    solarEqPhaseAngle?: number;

    /**
     * The angle, in degrees, between the target-to-observer vector and the
     * target-to-sun vector.
     */
    solarPhaseAngle?: number;

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
     * Boolean indicating that the target object was in umbral eclipse at the time of
     * this observation.
     */
    umbra?: boolean;

    /**
     * Formula: 2.5 \* log_10 (zero_mag_counts / expDuration).
     */
    zeroptd?: number;

    /**
     * This is the uncertainty in the zero point for the filter used for this
     * observation/row in units of mag. For use with differential photometry.
     */
    zeroPtdUnc?: number;
  }

  export namespace Body {
    /**
     * Model representation of additional detailed observation data for electro-optical
     * based sensor phenomenologies.
     */
    export interface EoobservationDetails {
      /**
       * World Coordinate System (WCS) X pixel origin in astrometric fit.
       */
      acalCrPixX?: number;

      /**
       * World Coordinate System (WCS) Y pixel origin in astrometric fit.
       */
      acalCrPixY?: number;

      /**
       * World Coordinate System (WCS) equatorial coordinate X origin corresponding to
       * CRPIX in astrometric fit in degrees.
       */
      acalCrValX?: number;

      /**
       * World Coordinate System (WCS) equatorial coordinate Y origin corresponding to
       * CRPIX in astrometric fit in degrees.
       */
      acalCrValY?: number;

      /**
       * Number of stars used in astrometric fit.
       */
      acalNumStars?: number;

      /**
       * This is the background signal at or in the vicinity of the radiometric source
       * position. Specifically, this is the average background count level in digital
       * number per pixel divided by the exposure time in seconds of the background
       * pixels used in the photometric extraction. Units are digital number per pixel
       * per second.
       */
      backgroundSignal?: number;

      /**
       * Estimated 1-sigma uncertainty in the background signal at or in the vicinity of
       * the radiometric source position. Units are digital number per pixel per second.
       */
      backgroundSignalUnc?: number;

      /**
       * The number of pixels binned horizontally.
       */
      binningHoriz?: number;

      /**
       * The number of pixels binned vertically.
       */
      binningVert?: number;

      /**
       * The x centroid position on the CCD of the target object, in pixels.
       */
      ccdObjPosX?: number;

      /**
       * The y centroid position on the CCD of the target object, in pixels.
       */
      ccdObjPosY?: number;

      /**
       * This is the pixel width of the target. This is either a frame-by-frame
       * measurement or a constant point spread function or synthetic aperture used in
       * the extraction.
       */
      ccdObjWidth?: number;

      /**
       * Operating temperature, in kelvin, of CCD recorded during exposure or measured
       * during calibrations.
       */
      ccdTemp?: number;

      /**
       * Observed centroid column number on the focal plane in pixels (0 is left edge,
       * 0.5 is center of pixels along left of image).
       */
      centroidColumn?: number;

      /**
       * Observed centroid row number on the focal plane in pixels (0 is top edge, 0.5 is
       * center of pixels along top of image).
       */
      centroidRow?: number;

      /**
       * Classification marking of the data in IC/CAPCO Portion-marked format, will be
       * set to EOObservation classificationMarking if blank.
       */
      classificationMarking?: string;

      /**
       * Color coefficient for filter n for a space-based sensor where there is no
       * atmospheric extinction. Must be present for all values n=1 to
       * numSpectralFilters, in incrementing order of n, and for no other values of n.
       */
      colorCoeffs?: Array<number>;

      /**
       * Spatial variance of image distribution in horizontal direction measured in
       * pixels squared.
       */
      columnVariance?: number;

      /**
       * The reference number n, in neutralDensityFilters for the currently used neutral
       * density filter.
       */
      currentNeutralDensityFilterNum?: number;

      /**
       * The reference number, x, where x ranges from 1 to n, where n is the number
       * specified in numSpectralFilters that corresponds to the spectral filter given in
       * the corresponding spectralFilters.
       */
      currentSpectralFilterNum?: number;

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
      dataMode?: 'REAL' | 'TEST' | 'EXERCISE' | 'SIMULATED';

      /**
       * Covariance (Y^2) in measured declination (Y) in degrees squared.
       */
      declinationCov?: number;

      /**
       * An array of measurements that correspond to the distance from the streak center
       * measured from the optical image in pixels that show change over an interval of
       * time. The array length is dependent on the length of the streak. The
       * distFromStreakCenter, surfBrightness, and surfBrightnessUnc arrays will match in
       * size.
       */
      distFromStreakCenter?: Array<number>;

      /**
       * Angle off element set reported in degrees.
       */
      does?: number;

      /**
       * The extinction coefficient computed for the nth filter. Must be present for all
       * values n=1 to numSpectralFilters, in incrementing order of n, and for no other
       * values of n. Units = magnitudes per air mass.
       */
      extinctionCoeffs?: Array<number>;

      /**
       * The uncertainty in the extinction coefficient for the nth filter. Must be
       * present for all values n=1 to numSpectralFilters, in incrementing order of n,
       * and for no other values of n. -9999 for space-based sensors. Units = magnitudes
       * per air mass.
       */
      extinctionCoeffsUnc?: Array<number>;

      /**
       * Some sensors have gain settings. This value is the gain used during the
       * observation in units of electrons per analog-to-digital unit. If no gain is
       * used, the value = 1.
       */
      gain?: number;

      /**
       * Unique identifier of the parent EOObservation.
       */
      idEOObservation?: string;

      /**
       * Sensor instantaneous field of view (ratio of pixel pitch to focal length), in
       * microradians.
       */
      ifov?: number;

      /**
       * Array of values for the right ascension and declination of the image center, in
       * degrees, in the specified referenceFrame. If referenceFrame is null then J2K
       * should be assumed.
       */
      imageBoreRaDec?: Array<number>;

      /**
       * The line of sight vector extending from the sensor toward the center of the
       * image in the specified referenceFrame. Typically aligned with the optical
       * boresight. If referenceFrame is null then J2K should be assumed.
       */
      imageBoreVector?: Array<number>;

      /**
       * Array of four two-element arrays consisting of right ascension (RA) and
       * declination (DEC) values, in degrees, in the specified referenceFrame. If
       * referenceFrame is null then J2K should be assumed. These coordinate pairs
       * indicate the four corners of the image beginning with the Upper Left (UL) and
       * moving clockwise to Upper Right (UR), Lower Right (LR), and ending with the
       * Lower Left (LL): [ [UL RA, UL DEC], [UR RA, UR DEC], [LR RA, LR DEC], [LL RA, LL
       * DEC] ].
       */
      imageCorners?: Array<Array<number>>;

      /**
       * Height of the image field of view, in degrees.
       */
      imageFOVHeight?: number;

      /**
       * Width of the image field of view, in degrees.
       */
      imageFOVWidth?: number;

      /**
       * Unit vector of the horizontal (x) axis of the image plane in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      imageHorizVector?: Array<number>;

      /**
       * Unit vector of the vertical (y) axis of the image plane, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      imageVertVector?: Array<number>;

      /**
       * Instrumental magnitude of a sensor before corrections are applied for atmosphere
       * or to transform to standard magnitude scale.
       */
      magInstrumental?: number;

      /**
       * Uncertainty in the instrumental magnitude.
       */
      magInstrumentalUnc?: number;

      /**
       * Must be present for all values n=1 to numNeutralDensityFilters, in incrementing
       * order of n, and for no other values of n.
       */
      neutralDensityFilterNames?: Array<string>;

      /**
       * The transmission of the nth neutral density filter. Must be present for all
       * values n=1 to numNeutralDensityFilters, in incrementing order of n, and for no
       * other values of n.
       */
      neutralDensityFilterTransmissions?: Array<number>;

      /**
       * The uncertainty in the transmission for the nth filter. Must be present for all
       * values n=1 to numNeutralDensityFilters, in incrementing order of n, and for no
       * other values of n.
       */
      neutralDensityFilterTransmissionsUnc?: Array<number>;

      /**
       * Number of catalog stars in the detector field of view (FOV) with the target
       * object. Can be 0 for narrow FOV sensors.
       */
      numCatalogStars?: number;

      /**
       * Number of correlated stars in the FOV with the target object. Can be 0 for
       * narrow FOV sensors.
       */
      numCorrelatedStars?: number;

      /**
       * Number of detected stars in the FOV with the target object. Helps identify
       * frames with clouds.
       */
      numDetectedStars?: number;

      /**
       * The number of neutral density filters used.
       */
      numNeutralDensityFilters?: number;

      /**
       * The value is the number of spectral filters used.
       */
      numSpectralFilters?: number;

      /**
       * Distance from the target object to the sun during the observation in meters.
       */
      objSunRange?: number;

      /**
       * Ob detection time in ISO 8601 UTC with microsecond precision, will be set to
       * EOObservation obTime if blank.
       */
      obTime?: string;

      /**
       * Optical Cross Section computed in meters squared per steradian.
       */
      opticalCrossSection?: number;

      /**
       * Uncertainty in Optical Cross Section computed in meters squared per steradian.
       */
      opticalCrossSectionUnc?: number;

      /**
       * Number of stars used in photometric fit count.
       */
      pcalNumStars?: number;

      /**
       * Peak Aperture Raw Counts is the value of the peak pixel in the real or synthetic
       * aperture containing the target signal.
       */
      peakApertureCount?: number;

      /**
       * Peak Background Raw Counts is the largest pixel value used in background signal.
       */
      peakBackgroundCount?: number;

      /**
       * Solar phase angle bisector vector. The vector that bisects the solar phase
       * angle. The phase angle bisector is the angle that is half of the value of the
       * Solar Phase Angle. Then calculate the point on the RA/DEC (ECI J2000.0) sphere
       * that a vector at this angle would intersect.
       */
      phaseAngBisect?: number;

      /**
       * Pixel array size (height) in pixels.
       */
      pixelArrayHeight?: number;

      /**
       * Pixel array size (width) in pixels.
       */
      pixelArrayWidth?: number;

      /**
       * Maximum valid pixel value, this is defined as 2^(number of bits per pixel). For
       * example, a CCD with 16-bitpixels, would have a maximum valid pixel value of 2^16
       * = 65536. This can represent the saturation value of the detector, but some
       * sensors will saturate at a value significantly lower than full well depth. This
       * is the analog-to-digital conversion (ADC) saturation value.
       */
      pixelMax?: number;

      /**
       * Minimum valid pixel value, this is typically 0.
       */
      pixelMin?: number;

      /**
       * Predicted Azimuth angle of the target object from a ground-based sensor (no
       * atmospheric refraction correction required) in degrees. AZ_EL implies apparent
       * topocentric place in true of date reference frame as seen from the observer with
       * aberration due to the observer velocity and light travel time applied.
       */
      predictedAzimuth?: number;

      /**
       * Predicted Declination of the Target object from the frame of reference of the
       * sensor (J2000, geocentric velocity aberration), in degrees. SGP4 and VCMs
       * produce geocentric origin and velocity aberration and subtracting the sensor
       * geocentric position of the sensor places in its reference frame.
       */
      predictedDeclination?: number;

      /**
       * Uncertainty of Predicted Declination of the Target object from the frame of
       * reference of the sensor (J2000, geocentric velocity aberration). SGP4 and VCMs
       * produce geocentric origin and velocity aberration and subtracting the sensor
       * geocentric position of the sensor places in its reference frame.
       */
      predictedDeclinationUnc?: number;

      /**
       * Predicted elevation angle of the target object from a ground-based sensor (no
       * atmospheric refraction correction required) in degrees. AZ_EL implies apparent
       * topocentric place in true of date reference frame as seen from the observer with
       * aberration due to the observer velocity and light travel time applied.
       */
      predictedElevation?: number;

      /**
       * Predicted Right Ascension of the Target object from the frame of reference of
       * the sensor (J2000, geocentric velocity aberration), in degrees. SGP4 and VCMs
       * produce geocentric origin and velocity aberration and subtracting the sensor
       * geocentric position of the sensor places in its reference frame.
       */
      predictedRa?: number;

      /**
       * Uncertainty of predicted Right Ascension of the Target object from the frame of
       * reference of the sensor (J2000, geocentric velocity aberration). SGP4 and VCMs
       * produce geocentric origin and velocity aberration and subtracting the sensor
       * geocentric position of the sensor places in its reference frame.
       */
      predictedRaUnc?: number;

      /**
       * Covariance (x^2) in measured Right Ascension (X) in degrees squared.
       */
      raCov?: number;

      /**
       * Covariance (XY) in measured Right Ascension/declination (XY) in degrees squared.
       */
      raDeclinationCov?: number;

      /**
       * Spatial covariance of image distribution across horizontal and vertical
       * directions measured in pixels squared.
       */
      rowColCov?: number;

      /**
       * Spatial variance of image distribution in vertical direction measured in pixels
       * squared.
       */
      rowVariance?: number;

      /**
       * Estimated signal-to-noise ratio (SNR) for the total radiometric signal. Under
       * some algorithms, this can be a constant per target (not per observation). Note:
       * this SNR applies to the total signal of the radiometric source (i.e.,
       * Net_Obj_Sig with units digital number per second), not to be confused with the
       * SNR of the signal in the peak pixel (i.e., digital number per pixel per second).
       */
      snrEst?: number;

      /**
       * Fraction of the sun that is illuminating the target object. This indicates if
       * the target is in the Earth's penumbra or umbra. It is 0 when object is in umbra
       * and 1 when object is fully illuminated.
       */
      solarDiskFrac?: number;

      /**
       * Source of the data, will be set to EOObservation source if blank.
       */
      source?: string;

      /**
       * Array of the SpectralFilters keywords, must be present for all values n=1 to
       * numSpectralFilters, in incrementing order of n, and for no other values of n.
       */
      spectralFilters?: Array<string>;

      /**
       * The in-band solar magnitude at 1 A.U. Must be present for all values n=1 to
       * numSpectralFilters, in incrementing order of n, and for no other values of n.
       * Units = magnitude.
       */
      spectralFilterSolarMag?: Array<number>;

      /**
       * The in-band average irradiance of a 0th mag source. Must be present for all
       * values n=1 to numSpectralFilters, in incrementing order of n, and for no other
       * values of n. Units = watts per meters squared per nanometer.
       */
      spectralZMFL?: Array<number>;

      /**
       * Azimuth angle of the sun from a ground-based telescope (no atmospheric
       * refraction correction required) the observer with aberration due to the observer
       * velocity and light travel time applied in degrees.
       */
      sunAzimuth?: number;

      /**
       * Elevation angle of the sun from a ground-based telescope (no atmospheric
       * refraction correction required) in degrees.
       */
      sunElevation?: number;

      /**
       * X-position component of the sun state vector in ECI J2000 coordinate frame, in
       * kilometers.
       */
      sunStatePosX?: number;

      /**
       * Y-position component of the sun state vector in ECI J2000 coordinate frame, in
       * kilometers.
       */
      sunStatePosY?: number;

      /**
       * Z-position component of the sun state vector in ECI J2000 coordinate frame, in
       * kilometers.
       */
      sunStatePosZ?: number;

      /**
       * X-velocity component of the sun state vector in ECI J2000 coordinate frame, in
       * kilometers per second.
       */
      sunStateVelX?: number;

      /**
       * Y-velocity component of the sun state vector in ECI J2000 coordinate frame, in
       * kilometers per second.
       */
      sunStateVelY?: number;

      /**
       * Z-velocity component of the sun state vector in ECI J2000 coordinate frame, in
       * kilometers per second.
       */
      sunStateVelZ?: number;

      /**
       * An array of surface brightness measurements in magnitudes per square arcsecond
       * from the optical image that show change over an interval of time. The array
       * length is dependent on the length of the streak. The distFromStreakCenter,
       * surfBrightness, and surfBrightnessUnc arrays will match in size.
       */
      surfBrightness?: Array<number>;

      /**
       * An array of surface brightness uncertainty measurements in magnitudes per square
       * arcsecond from the optical image that show change over an interval of time. The
       * array length is dependent on the length of the streak. The distFromStreakCenter,
       * surfBrightness, and surfBrightnessUnc arrays will match in size.
       */
      surfBrightnessUnc?: Array<number>;

      /**
       * Uncertainty in the times reported in UTC in seconds.
       */
      timesUnc?: number;

      /**
       * Time off element set reported in seconds.
       */
      toes?: number;

      /**
       * The value for the zero-point calculated for each filter denoted in
       * spectralFilters. It is the difference between the catalog mag and instrumental
       * mag for a set of standard stars. For use with All Sky photometry. Must be
       * present for all values n=1 to numSpectralFilters, in incrementing order of n,
       * and for no other values of n.
       */
      zeroPoints?: Array<number>;

      /**
       * The uncertainty in the zero point for the filter denoted in spectralFilters. For
       * use with All Sky photometry. Must be present for all values n=1 to
       * numSpectralFilters, in incrementing order of n, and for no other values of n.
       */
      zeroPointsUnc?: Array<number>;
    }
  }
}

EoObservations.History = History;

export declare namespace EoObservations {
  export {
    type EoObservationAbridged as EoObservationAbridged,
    type EoObservationCountResponse as EoObservationCountResponse,
    type EoObservationQueryhelpResponse as EoObservationQueryhelpResponse,
    type EoObservationTupleResponse as EoObservationTupleResponse,
    type EoObservationAbridgedsOffsetPage as EoObservationAbridgedsOffsetPage,
    type EoObservationCreateParams as EoObservationCreateParams,
    type EoObservationRetrieveParams as EoObservationRetrieveParams,
    type EoObservationListParams as EoObservationListParams,
    type EoObservationCountParams as EoObservationCountParams,
    type EoObservationCreateBulkParams as EoObservationCreateBulkParams,
    type EoObservationTupleParams as EoObservationTupleParams,
    type EoObservationUnvalidatedPublishParams as EoObservationUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
