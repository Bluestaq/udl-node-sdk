// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  SoiObservationSetFull,
  SoiObservationSetFullsOffsetPage,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SoiObservationSet extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single SOIObservationSet record as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.soiObservationSet.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   numObs: 1,
   *   source: 'Bluestaq',
   *   startTime: '2018-01-01T16:00:00.123456Z',
   *   type: 'OPTICAL',
   * });
   * ```
   */
  create(body: SoiObservationSetCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/soiobservationset', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters.
   * The query will return the SOI Observation Sets and not the associated SOI
   * Observations. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for
   * more details on valid/required query parameter information.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const soiObservationSetListResponse of client.soiObservationSet.list(
   *   { startTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SoiObservationSetListParams,
    options?: RequestOptions,
  ): PagePromise<SoiObservationSetListResponsesOffsetPage, SoiObservationSetListResponse> {
    return this._client.getAPIList('/udl/soiobservationset', OffsetPage<SoiObservationSetListResponse>, {
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
   * const response = await client.soiObservationSet.count({
   *   startTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: SoiObservationSetCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/soiobservationset/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * SOIObservationSet records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.soiObservationSet.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       numObs: 1,
   *       source: 'Bluestaq',
   *       startTime: '2018-01-01T16:00:00.123456Z',
   *       type: 'OPTICAL',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: SoiObservationSetCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/soiobservationset/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single SOIObservationSet by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const soiObservationSetFull =
   *   await client.soiObservationSet.get('id');
   * ```
   */
  get(
    id: string,
    query: SoiObservationSetGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryAPI.SoiObservationSetFull> {
    return this._client.get(path`/udl/soiobservationset/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.soiObservationSet.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<SoiObservationSetQueryhelpResponse> {
    return this._client.get('/udl/soiobservationset/queryhelp', options);
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
   * const soiObservationSetFulls =
   *   await client.soiObservationSet.tuple({
   *     columns: 'columns',
   *     startTime: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  tuple(
    query: SoiObservationSetTupleParams,
    options?: RequestOptions,
  ): APIPromise<SoiObservationSetTupleResponse> {
    return this._client.get('/udl/soiobservationset/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple SOIObservationSet records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.soiObservationSet.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       numObs: 1,
   *       source: 'Bluestaq',
   *       startTime: '2018-01-01T16:00:00.123456Z',
   *       type: 'OPTICAL',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(
    params: SoiObservationSetUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-soiobservationset', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type SoiObservationSetListResponsesOffsetPage = OffsetPage<SoiObservationSetListResponse>;

/**
 * These services provide operations for posting space object idenfification
 * observation sets.
 */
export interface SoiObservationSetListResponse {
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
   * The number of observation records in the set.
   */
  numObs: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Observation set detection start time in ISO 8601 UTC with microsecond precision.
   */
  startTime: string;

  /**
   * Observation type (OPTICAL, RADAR).
   */
  type: 'OPTICAL' | 'RADAR';

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The number of pixels binned horizontally.
   */
  binningHoriz?: number;

  /**
   * The number of pixels binned vertically.
   */
  binningVert?: number;

  /**
   * Boolean indicating if a brightness variance change event was detected, based on
   * historical collection data for the object.
   */
  brightnessVarianceChangeDetected?: boolean;

  /**
   * Array of SOI Calibrations associated with this SOIObservationSet.
   */
  calibrations?: Array<SoiObservationSetListResponse.Calibration>;

  /**
   * Type of calibration used by the Sensor (e.g. ALL SKY, DIFFERENTIAL, DEFAULT,
   * NONE).
   */
  calibrationType?: string;

  /**
   * Overall qualitative confidence assessment of change detection results (e.g.
   * HIGH, MEDIUM, LOW).
   */
  changeConf?: string;

  /**
   * Boolean indicating if any change event was detected, based on historical
   * collection data for the object.
   */
  changeDetected?: boolean;

  /**
   * Qualitative Collection Density assessment, with respect to confidence of
   * detecting a change event (e.g. HIGH, MEDIUM, LOW).
   */
  collectionDensityConf?: string;

  /**
   * Universally Unique collection ID. Mechanism to correlate Single Point Photometry
   * (SPP) JSON files to images.
   */
  collectionId?: string;

  /**
   * Mode indicating telescope movement during collection (AUTOTRACK, MANUAL
   * AUTOTRACK, MANUAL RATE TRACK, MANUAL SIDEREAL, SIDEREAL, RATE TRACK).
   */
  collectionMode?: string;

  /**
   * Object Correlation Quality value. Measures how close the observed object's orbit
   * is to matching an object in the catalog. The scale of this field may vary
   * depending on provider. Users should consult the data provider to verify the
   * meaning of the value (e.g. A value of 0.0 indicates a high/strong correlation,
   * while a value closer to 1.0 indicates low/weak correlation).
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
   * Observation set detection end time in ISO 8601 UTC with microsecond precision.
   */
  endTime?: string;

  /**
   * The gain used during the collection, in units of photoelectrons per
   * analog-to-digital unit (e-/ADU). If no gain is used, the value = 1.
   */
  gain?: number;

  /**
   * ID of the UDL Elset of the Space Object under observation.
   */
  idElset?: string;

  /**
   * Unique identifier of the target on-orbit object, if correlated.
   */
  idOnOrbit?: string;

  /**
   * ID of the observing sensor.
   */
  idSensor?: string;

  /**
   * Line of sight declination at observation set detection end time. Specified in
   * degrees, in the specified referenceFrame. If referenceFrame is null then J2K
   * should be assumed (e.g -30 to 130.0).
   */
  losDeclinationEnd?: number;

  /**
   * Line of sight declination at observation set detection start time. Specified in
   * degrees, in the specified referenceFrame. If referenceFrame is null then J2K
   * should be assumed (e.g -30 to 130.0).
   */
  losDeclinationStart?: number;

  /**
   * SOI msgCreateDate time in ISO 8601 UTC time, with millisecond precision.
   */
  msgCreateDate?: string;

  /**
   * The value is the number of spectral filters used.
   */
  numSpectralFilters?: number;

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
   * Optional identifier provided by the record source to indicate the sensor
   * identifier to which this attitude set applies if this set is reporting a single
   * sensor orientation. This may be an internal identifier and not necessarily a
   * valid sensor ID.
   */
  origSensorId?: string;

  /**
   * A threshold for percent of pixels that make up object signal that are beyond the
   * saturation point for the sensor that are removed in the EOSSA file, in range of
   * 0 to 1.
   */
  percentSatThreshold?: number;

  /**
   * Boolean indicating if a periodicity change event was detected, based on
   * historical collection data for the object.
   */
  periodicityChangeDetected?: boolean;

  /**
   * Qualitative assessment of the periodicity detection results from the Attitude
   * and Shape Retrieval (ASR) Periodicity Assessment (PA) Tool (e.g. HIGH, MEDIUM,
   * LOW).
   */
  periodicityDetectionConf?: string;

  /**
   * Qualitative Periodicity Sampling assessment, with respect to confidence of
   * detecting a change event (e.g. HIGH, MEDIUM, LOW).
   */
  periodicitySamplingConf?: string;

  /**
   * Pixel array size (height) in pixels.
   */
  pixelArrayHeight?: number;

  /**
   * Pixel array size (width) in pixels.
   */
  pixelArrayWidth?: number;

  /**
   * The maximum valid pixel value.
   */
  pixelMax?: number;

  /**
   * The minimum valid pixel value.
   */
  pixelMin?: number;

  /**
   * Pointing angle of the Azimuth gimbal/mount at observation set detection end
   * time. Specified in degrees.
   */
  pointingAngleAzEnd?: number;

  /**
   * Pointing angle of the Azimuth gimbal/mount at observation set detection start
   * time. Specified in degrees.
   */
  pointingAngleAzStart?: number;

  /**
   * Pointing angle of the Elevation gimbal/mount at observation set detection end
   * time. Specified in degrees.
   */
  pointingAngleElEnd?: number;

  /**
   * Pointing angle of the Elevation gimbal/mount at observation set detection start
   * time. Specified in degrees.
   */
  pointingAngleElStart?: number;

  /**
   * Polar angle of the gimbal/mount at observation set detection end time in
   * degrees.
   */
  polarAngleEnd?: number;

  /**
   * Polar angle of the gimbal/mount at observation set detection start time in
   * degrees.
   */
  polarAngleStart?: number;

  /**
   * The reference frame of the observation measurements. If the referenceFrame is
   * null it is assumed to be J2000.
   */
  referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

  /**
   * Name of the target satellite.
   */
  satelliteName?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Sensor altitude at startTime (if mobile/onorbit) in kilometers.
   */
  senalt?: number;

  /**
   * Sensor WGS84 latitude at startTime (if mobile/onorbit) in degrees. If null, can
   * be obtained from sensor info. -90 to 90 degrees (negative values south of
   * equator).
   */
  senlat?: number;

  /**
   * Sensor WGS84 longitude at startTime (if mobile/onorbit) in degrees. If null, can
   * be obtained from sensor info. -180 to 180 degrees (negative values south of
   * equator).
   */
  senlon?: number;

  /**
   * The reference frame of the observing sensor state. If the senReferenceFrame is
   * null it is assumed to be J2000.
   */
  senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

  /**
   * ID of the AttitudeSet record for the observing sensor.
   */
  sensorAsId?: string;

  /**
   * Cartesian X velocity of the observing mobile/onorbit sensor at startTime, in
   * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
   * is null then J2K should be assumed.
   */
  senvelx?: number;

  /**
   * Cartesian Y velocity of the observing mobile/onorbit sensor at startTime, in
   * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
   * is null then J2K should be assumed.
   */
  senvely?: number;

  /**
   * Cartesian Z velocity of the observing mobile/onorbit sensor at startTime, in
   * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
   * is null then J2K should be assumed.
   */
  senvelz?: number;

  /**
   * Cartesian X position of the observing mobile/onorbit sensor at startTime, in
   * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
   * then J2K should be assumed.
   */
  senx?: number;

  /**
   * Cartesian Y position of the observing mobile/onorbit sensor at startTime, in
   * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
   * then J2K should be assumed.
   */
  seny?: number;

  /**
   * Cartesian Z position of the observing mobile/onorbit sensor at startTime, in
   * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
   * then J2K should be assumed.
   */
  senz?: number;

  /**
   * Software Version used to Capture, Process, and Deliver the data.
   */
  softwareVersion?: string;

  /**
   * The in-band solar magnitude at 1 A.U.
   */
  solarMag?: number;

  /**
   * Boolean indicating if a solar phase angle brightness change event was detected,
   * based on historical collection data for the object.
   */
  solarPhaseAngleBrightnessChangeDetected?: boolean;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Array of the SpectralFilters keywords, must be present for all values n=1 to
   * numSpectralFilters, in incrementing order of n, and for no other values of n.
   */
  spectralFilters?: Array<string>;

  /**
   * Name of the Star Catalog used for photometry and astrometry.
   */
  starCatName?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Boolean indicating whether the target object was unable to be correlated to a
   * known object. This flag should only be set to true by data providers after an
   * attempt to correlate to an OnOrbit object was made and failed. If unable to
   * correlate, the 'origObjectId' field may be populated with an internal data
   * provider specific identifier.
   */
  uct?: boolean;

  /**
   * Key to indicate which, if any of, the pre/post photometer calibrations are valid
   * for use when generating data for the EOSSA file. If the field is not populated,
   * then the provided calibration data will be used when generating the EOSSA file
   * (e.g. PRE, POST, BOTH, NONE).
   */
  validCalibrations?: string;
}

export namespace SoiObservationSetListResponse {
  /**
   * Schema for SOI Calibration data.
   */
  export interface Calibration {
    /**
     * Background intensity, at calibration, specified in kilowatts per steradian per
     * micrometer.
     */
    calBgIntensity?: number;

    /**
     * Coefficient value for how much signal would be lost to atmospheric attenuation
     * for a star at zenith, in magnitudes per air mass.
     */
    calExtinctionCoeff?: number;

    /**
     * Maximum extinction coefficient uncertainty in magnitudes, at calibration (e.g.
     * -5.0 to 30.0).
     */
    calExtinctionCoeffMaxUnc?: number;

    /**
     * Extinction coefficient uncertainty in magnitudes, at calibration, which
     * represents the difference between the measured brightness and predicted
     * brightness of the star with the extinction removed, making it exo-atmospheric
     * (e.g. -5.0 to 30.0).
     */
    calExtinctionCoeffUnc?: number;

    /**
     * Number of correlated stars in the FOV with the target object, at calibration.
     * Can be 0 for narrow FOV sensors.
     */
    calNumCorrelatedStars?: number;

    /**
     * Number of detected stars in the FOV with the target object, at calibration.
     * Helps identify frames with clouds.
     */
    calNumDetectedStars?: number;

    /**
     * Average Sky Background signals in magnitudes, at calibration. Sky Background
     * refers to the incoming light from an apparently empty part of the night sky.
     */
    calSkyBg?: number;

    /**
     * In-band solar magnitudes at 1 A.U, at calibration (e.g. -5.0 to 30.0).
     */
    calSpectralFilterSolarMag?: number;

    /**
     * Start time of calibration in ISO 8601 UTC time, with millisecond precision.
     */
    calTime?: string;

    /**
     * Type of calibration (e.g. PRE, MID, POST).
     */
    calType?: string;

    /**
     * Value representing the difference between the catalog magnitude and instrumental
     * magnitude for a set of standard stars, at calibration (e.g. -5.0 to 30.0).
     */
    calZeroPoint?: number;
  }
}

export type SoiObservationSetCountResponse = string;

export interface SoiObservationSetQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<SoiObservationSetQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace SoiObservationSetQueryhelpResponse {
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

export type SoiObservationSetTupleResponse = Array<HistoryAPI.SoiObservationSetFull>;

export interface SoiObservationSetCreateParams {
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
   * The number of observation records in the set.
   */
  numObs: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Observation set detection start time in ISO 8601 UTC with microsecond precision.
   */
  startTime: string;

  /**
   * Observation type (OPTICAL, RADAR).
   */
  type: 'OPTICAL' | 'RADAR';

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The number of pixels binned horizontally.
   */
  binningHoriz?: number;

  /**
   * The number of pixels binned vertically.
   */
  binningVert?: number;

  /**
   * Boolean indicating if a brightness variance change event was detected, based on
   * historical collection data for the object.
   */
  brightnessVarianceChangeDetected?: boolean;

  /**
   * Array of SOI Calibrations associated with this SOIObservationSet.
   */
  calibrations?: Array<SoiObservationSetCreateParams.Calibration>;

  /**
   * Type of calibration used by the Sensor (e.g. ALL SKY, DIFFERENTIAL, DEFAULT,
   * NONE).
   */
  calibrationType?: string;

  /**
   * Overall qualitative confidence assessment of change detection results (e.g.
   * HIGH, MEDIUM, LOW).
   */
  changeConf?: string;

  /**
   * Boolean indicating if any change event was detected, based on historical
   * collection data for the object.
   */
  changeDetected?: boolean;

  /**
   * Qualitative Collection Density assessment, with respect to confidence of
   * detecting a change event (e.g. HIGH, MEDIUM, LOW).
   */
  collectionDensityConf?: string;

  /**
   * Universally Unique collection ID. Mechanism to correlate Single Point Photometry
   * (SPP) JSON files to images.
   */
  collectionId?: string;

  /**
   * Mode indicating telescope movement during collection (AUTOTRACK, MANUAL
   * AUTOTRACK, MANUAL RATE TRACK, MANUAL SIDEREAL, SIDEREAL, RATE TRACK).
   */
  collectionMode?: string;

  /**
   * Object Correlation Quality value. Measures how close the observed object's orbit
   * is to matching an object in the catalog. The scale of this field may vary
   * depending on provider. Users should consult the data provider to verify the
   * meaning of the value (e.g. A value of 0.0 indicates a high/strong correlation,
   * while a value closer to 1.0 indicates low/weak correlation).
   */
  corrQuality?: number;

  /**
   * Observation set detection end time in ISO 8601 UTC with microsecond precision.
   */
  endTime?: string;

  /**
   * The gain used during the collection, in units of photoelectrons per
   * analog-to-digital unit (e-/ADU). If no gain is used, the value = 1.
   */
  gain?: number;

  /**
   * ID of the UDL Elset of the Space Object under observation.
   */
  idElset?: string;

  /**
   * ID of the observing sensor.
   */
  idSensor?: string;

  /**
   * Line of sight declination at observation set detection end time. Specified in
   * degrees, in the specified referenceFrame. If referenceFrame is null then J2K
   * should be assumed (e.g -30 to 130.0).
   */
  losDeclinationEnd?: number;

  /**
   * Line of sight declination at observation set detection start time. Specified in
   * degrees, in the specified referenceFrame. If referenceFrame is null then J2K
   * should be assumed (e.g -30 to 130.0).
   */
  losDeclinationStart?: number;

  /**
   * SOI msgCreateDate time in ISO 8601 UTC time, with millisecond precision.
   */
  msgCreateDate?: string;

  /**
   * The value is the number of spectral filters used.
   */
  numSpectralFilters?: number;

  /**
   * OpticalSOIObservations associated with this SOIObservationSet.
   */
  opticalSOIObservationList?: Array<SoiObservationSetCreateParams.OpticalSoiObservationList>;

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
   * Optional identifier provided by the record source to indicate the sensor
   * identifier to which this attitude set applies if this set is reporting a single
   * sensor orientation. This may be an internal identifier and not necessarily a
   * valid sensor ID.
   */
  origSensorId?: string;

  /**
   * A threshold for percent of pixels that make up object signal that are beyond the
   * saturation point for the sensor that are removed in the EOSSA file, in range of
   * 0 to 1.
   */
  percentSatThreshold?: number;

  /**
   * Boolean indicating if a periodicity change event was detected, based on
   * historical collection data for the object.
   */
  periodicityChangeDetected?: boolean;

  /**
   * Qualitative assessment of the periodicity detection results from the Attitude
   * and Shape Retrieval (ASR) Periodicity Assessment (PA) Tool (e.g. HIGH, MEDIUM,
   * LOW).
   */
  periodicityDetectionConf?: string;

  /**
   * Qualitative Periodicity Sampling assessment, with respect to confidence of
   * detecting a change event (e.g. HIGH, MEDIUM, LOW).
   */
  periodicitySamplingConf?: string;

  /**
   * Pixel array size (height) in pixels.
   */
  pixelArrayHeight?: number;

  /**
   * Pixel array size (width) in pixels.
   */
  pixelArrayWidth?: number;

  /**
   * The maximum valid pixel value.
   */
  pixelMax?: number;

  /**
   * The minimum valid pixel value.
   */
  pixelMin?: number;

  /**
   * Pointing angle of the Azimuth gimbal/mount at observation set detection end
   * time. Specified in degrees.
   */
  pointingAngleAzEnd?: number;

  /**
   * Pointing angle of the Azimuth gimbal/mount at observation set detection start
   * time. Specified in degrees.
   */
  pointingAngleAzStart?: number;

  /**
   * Pointing angle of the Elevation gimbal/mount at observation set detection end
   * time. Specified in degrees.
   */
  pointingAngleElEnd?: number;

  /**
   * Pointing angle of the Elevation gimbal/mount at observation set detection start
   * time. Specified in degrees.
   */
  pointingAngleElStart?: number;

  /**
   * Polar angle of the gimbal/mount at observation set detection end time in
   * degrees.
   */
  polarAngleEnd?: number;

  /**
   * Polar angle of the gimbal/mount at observation set detection start time in
   * degrees.
   */
  polarAngleStart?: number;

  /**
   * RadarSOIObservations associated with this RadarSOIObservationSet.
   */
  radarSOIObservationList?: Array<SoiObservationSetCreateParams.RadarSoiObservationList>;

  /**
   * The reference frame of the observation measurements. If the referenceFrame is
   * null it is assumed to be J2000.
   */
  referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

  /**
   * Name of the target satellite.
   */
  satelliteName?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Sensor altitude at startTime (if mobile/onorbit) in kilometers.
   */
  senalt?: number;

  /**
   * Sensor WGS84 latitude at startTime (if mobile/onorbit) in degrees. If null, can
   * be obtained from sensor info. -90 to 90 degrees (negative values south of
   * equator).
   */
  senlat?: number;

  /**
   * Sensor WGS84 longitude at startTime (if mobile/onorbit) in degrees. If null, can
   * be obtained from sensor info. -180 to 180 degrees (negative values south of
   * equator).
   */
  senlon?: number;

  /**
   * The reference frame of the observing sensor state. If the senReferenceFrame is
   * null it is assumed to be J2000.
   */
  senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

  /**
   * ID of the AttitudeSet record for the observing sensor.
   */
  sensorAsId?: string;

  /**
   * Cartesian X velocity of the observing mobile/onorbit sensor at startTime, in
   * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
   * is null then J2K should be assumed.
   */
  senvelx?: number;

  /**
   * Cartesian Y velocity of the observing mobile/onorbit sensor at startTime, in
   * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
   * is null then J2K should be assumed.
   */
  senvely?: number;

  /**
   * Cartesian Z velocity of the observing mobile/onorbit sensor at startTime, in
   * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
   * is null then J2K should be assumed.
   */
  senvelz?: number;

  /**
   * Cartesian X position of the observing mobile/onorbit sensor at startTime, in
   * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
   * then J2K should be assumed.
   */
  senx?: number;

  /**
   * Cartesian Y position of the observing mobile/onorbit sensor at startTime, in
   * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
   * then J2K should be assumed.
   */
  seny?: number;

  /**
   * Cartesian Z position of the observing mobile/onorbit sensor at startTime, in
   * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
   * then J2K should be assumed.
   */
  senz?: number;

  /**
   * Software Version used to Capture, Process, and Deliver the data.
   */
  softwareVersion?: string;

  /**
   * The in-band solar magnitude at 1 A.U.
   */
  solarMag?: number;

  /**
   * Boolean indicating if a solar phase angle brightness change event was detected,
   * based on historical collection data for the object.
   */
  solarPhaseAngleBrightnessChangeDetected?: boolean;

  /**
   * Array of the SpectralFilters keywords, must be present for all values n=1 to
   * numSpectralFilters, in incrementing order of n, and for no other values of n.
   */
  spectralFilters?: Array<string>;

  /**
   * Name of the Star Catalog used for photometry and astrometry.
   */
  starCatName?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Boolean indicating whether the target object was unable to be correlated to a
   * known object. This flag should only be set to true by data providers after an
   * attempt to correlate to an OnOrbit object was made and failed. If unable to
   * correlate, the 'origObjectId' field may be populated with an internal data
   * provider specific identifier.
   */
  uct?: boolean;

  /**
   * Key to indicate which, if any of, the pre/post photometer calibrations are valid
   * for use when generating data for the EOSSA file. If the field is not populated,
   * then the provided calibration data will be used when generating the EOSSA file
   * (e.g. PRE, POST, BOTH, NONE).
   */
  validCalibrations?: string;
}

export namespace SoiObservationSetCreateParams {
  /**
   * Schema for SOI Calibration data.
   */
  export interface Calibration {
    /**
     * Background intensity, at calibration, specified in kilowatts per steradian per
     * micrometer.
     */
    calBgIntensity?: number;

    /**
     * Coefficient value for how much signal would be lost to atmospheric attenuation
     * for a star at zenith, in magnitudes per air mass.
     */
    calExtinctionCoeff?: number;

    /**
     * Maximum extinction coefficient uncertainty in magnitudes, at calibration (e.g.
     * -5.0 to 30.0).
     */
    calExtinctionCoeffMaxUnc?: number;

    /**
     * Extinction coefficient uncertainty in magnitudes, at calibration, which
     * represents the difference between the measured brightness and predicted
     * brightness of the star with the extinction removed, making it exo-atmospheric
     * (e.g. -5.0 to 30.0).
     */
    calExtinctionCoeffUnc?: number;

    /**
     * Number of correlated stars in the FOV with the target object, at calibration.
     * Can be 0 for narrow FOV sensors.
     */
    calNumCorrelatedStars?: number;

    /**
     * Number of detected stars in the FOV with the target object, at calibration.
     * Helps identify frames with clouds.
     */
    calNumDetectedStars?: number;

    /**
     * Average Sky Background signals in magnitudes, at calibration. Sky Background
     * refers to the incoming light from an apparently empty part of the night sky.
     */
    calSkyBg?: number;

    /**
     * In-band solar magnitudes at 1 A.U, at calibration (e.g. -5.0 to 30.0).
     */
    calSpectralFilterSolarMag?: number;

    /**
     * Start time of calibration in ISO 8601 UTC time, with millisecond precision.
     */
    calTime?: string;

    /**
     * Type of calibration (e.g. PRE, MID, POST).
     */
    calType?: string;

    /**
     * Value representing the difference between the catalog magnitude and instrumental
     * magnitude for a set of standard stars, at calibration (e.g. -5.0 to 30.0).
     */
    calZeroPoint?: number;
  }

  /**
   * An Optical SOI record contains observation information taken from a sensor about
   * a Space Object.
   */
  export interface OpticalSoiObservationList {
    /**
     * Observation detection start time in ISO 8601 UTC with microsecond precision.
     */
    obStartTime: string;

    /**
     * The reference number, x, where x ranges from 1 to n, where n is the number
     * specified in spectralFilters that corresponds to the spectral filter used.
     */
    currentSpectralFilterNum?: number;

    /**
     * Array of declination values, in degrees, of the Target object from the frame of
     * reference of the sensor. A value is provided for each element in the intensities
     * field, at the middle of the frame’s exposure time.
     */
    declinations?: Array<number>;

    /**
     * Image exposure duration in seconds.
     */
    expDuration?: number;

    /**
     * Array of coefficients for how much signal would be lost to atmospheric
     * attenuation for a star at zenith for each element in intensities, in magnitudes
     * per air mass.
     */
    extinctionCoeffs?: Array<number>;

    /**
     * Array of extinction coefficient uncertainties for each element in intensities.
     * Each value represents the difference between the measured brightness and
     * predicted brightness of the star with the extinction removed, making it
     * exo-atmospheric (e.g. -5.0 to 30.0).
     */
    extinctionCoeffsUnc?: Array<number>;

    /**
     * Array of intensities of the Space Object for observations, in kilowatts per
     * steradian per micrometer.
     */
    intensities?: Array<number>;

    /**
     * Array of start times for each intensity measurement. The 1st value in the array
     * will match obStartTime.
     */
    intensityTimes?: Array<string>;

    /**
     * Array of local average Sky Background signals, in magnitudes, with a value
     * corresponding to the time of each intensity measurement. Sky Background refers
     * to the incoming light from an apparently empty part of the night sky.
     */
    localSkyBgs?: Array<number>;

    /**
     * Array of uncertainty of the local average Sky Background signal, in magnitudes,
     * with a value corresponding to the time of each intensity measurement.
     */
    localSkyBgsUnc?: Array<number>;

    /**
     * Array of the number of correlated stars in the FOV with a value for each element
     * in the intensities field.
     */
    numCorrelatedStars?: Array<number>;

    /**
     * Array of the number of detected stars in the FOV with a value for each element
     * in the intensities field.
     */
    numDetectedStars?: Array<number>;

    /**
     * Array of values giving the percent of pixels that make up the object signal that
     * are beyond the saturation point for the sensor, with a value for each element in
     * the intensities field.
     */
    percentSats?: Array<number>;

    /**
     * Array of right ascension rate values, in degrees per second, measuring the rate
     * the telescope is moving to track the Target object from the frame of reference
     * of the sensor, for each element in the intensities field, at the middle of the
     * frame’s exposure time.
     */
    raRates?: Array<number>;

    /**
     * Array of right ascension values, in degrees, of the Target object from the frame
     * of reference of the sensor. A value is provided for each element in the
     * intensities field.
     */
    ras?: Array<number>;

    /**
     * Array of average Sky Background signals, in magnitudes, with a value
     * corresponding to the time of each intensity measurement. Sky Background refers
     * to the incoming light from an apparently empty part of the night sky.
     */
    skyBgs?: Array<number>;

    /**
     * Array of values for the zero-point in magnitudes, calculated at the time of each
     * intensity measurement. It is the difference between the catalog mag and
     * instrumental mag for a set of standard stars (e.g. -5.0 to 30.0).
     */
    zeroPoints?: Array<number>;
  }

  /**
   * A Radar SOI record contains observation information taken from a sensor about a
   * Space Object.
   */
  export interface RadarSoiObservationList {
    /**
     * Observation detection start time in ISO 8601 UTC format with microsecond
     * precision.
     */
    obStartTime: string;

    /**
     * Array of the aspect angle at the center of the image in degrees. The 'tovs' and
     * 'aspectAngles' arrays must match in size, if 'aspectAngles' is provided.
     */
    aspectAngles?: Array<number>;

    /**
     * Array of sensor azimuth angle biases in degrees. The 'tovs' and 'azimuthBiases'
     * arrays must match in size, if 'azimuthBiases' is provided.
     */
    azimuthBiases?: Array<number>;

    /**
     * Array of the azimuth rate of target at image center in degrees per second. The
     * 'tovs' and 'azimuthRates' arrays must match in size, if 'azimuthRates' is
     * provided. If there is an associated image the azimuth rate is assumed to be at
     * image center.
     */
    azimuthRates?: Array<number>;

    /**
     * Array of the azimuth angle to target at image center in degrees. The 'tovs' and
     * 'azimuths' arrays must match in size, if 'azimuths' is provided. If there is an
     * associated image the azimuth angle is assumed to be at image center.
     */
    azimuths?: Array<number>;

    /**
     * Beta angle (between target and radar-image frame z axis) in degrees.
     */
    beta?: number;

    /**
     * Radar center frequency of the radar in hertz.
     */
    centerFrequency?: number;

    /**
     * Array of cross-range resolutions (accounting for weighting function) in
     * kilometers. The 'tovs' and 'crossRangeRes' arrays must match in size, if
     * 'crossRangeRes' is provided.
     */
    crossRangeRes?: Array<number>;

    /**
     * Array of average Interpulse spacing in seconds. The 'tovs' and 'deltaTimes'
     * arrays must match in size, if 'deltaTimes' is provided.
     */
    deltaTimes?: Array<number>;

    /**
     * Array of conversion factors between Doppler in hertz and cross-range in meters.
     * The 'tovs' and 'doppler2XRs' arrays must match in size, if 'doppler2XRs' is
     * provided.
     */
    doppler2XRs?: Array<number>;

    /**
     * Array of sensor elevation biases in degrees. The 'tovs' and 'elevationBiases'
     * arrays must match in size, if 'elevationBiases' is provided.
     */
    elevationBiases?: Array<number>;

    /**
     * Array of the elevation rate of target at image center in degrees per second. The
     * 'tovs' and 'elevationRates' arrays must match in size, if 'elevationRates' is
     * provided. If there is an associated image the elevation rate is assumed to be at
     * image center.
     */
    elevationRates?: Array<number>;

    /**
     * Array of the elevation angle to target at image center in degrees. The 'tovs'
     * and 'elevations' arrays must match in size, if 'elevations' is provided. If
     * there is an associated image the elevation angle is assumed to be at image
     * center.
     */
    elevations?: Array<number>;

    /**
     * Optional id of assumed AttitudeSet of object being observed.
     */
    idAttitudeSet?: string;

    /**
     * Optional id of assumed StateVector of object being observed.
     */
    idStateVector?: string;

    /**
     * Array of Integration angles in degrees. The 'tovs' and 'integrationAngles'
     * arrays must match in size, if 'integrationAngles' is provided.
     */
    integrationAngles?: Array<number>;

    /**
     * Kappa angle (between radar-line-of-sight and target-frame x axis) in degrees.
     */
    kappa?: number;

    /**
     * Array of the peak pixel amplitude for each image in decibels. The 'tovs' and
     * 'peakAmplitudes' arrays must match in size, if 'peakAmplitudes' is provided.
     */
    peakAmplitudes?: Array<number>;

    /**
     * Array of sensor polarizations when collecting the data. Polarization is a
     * property of electromagnetic waves that describes the orientation of their
     * oscillations. Possible values are H - (Horizontally Polarized) Perpendicular to
     * Earth's surface, V - (Vertically Polarized) Parallel to Earth's surface, L -
     * (Left Hand Circularly Polarized) Rotating left relative to the Earth's surface,
     * R - (Right Hand Circularly Polarized) Rotating right relative to the Earth's
     * surface.
     */
    polarizations?: Array<string>;

    /**
     * Array of the component of target angular velocity observable by radar in radians
     * per second. The 'tovs' and 'projAngVels' arrays must match in size, if
     * 'projAngVels' is provided.
     */
    projAngVels?: Array<number>;

    /**
     * Bandwidth of radar pulse in hertz.
     */
    pulseBandwidth?: number;

    /**
     * Array of the range acceleratons of target in kilometers per second squared. The
     * 'tovs' and 'rangeAccels' arrays must match in size, if 'rangeAccels' is
     * provided. If there is an associated image the range acceleration is assumed to
     * be at image center.
     */
    rangeAccels?: Array<number>;

    /**
     * Array of sensor range biases in kilometers. The 'tovs' and 'rangeBiases' arrays
     * must match in size, if 'rangeBiases' is provided.
     */
    rangeBiases?: Array<number>;

    /**
     * Array of the range rate of target at image center in kilometers per second. The
     * 'tovs' and 'rangeRates' arrays must match in size, if 'rangeRates' is provided.
     * If there is an associated image the range rate is assumed to be at image center.
     */
    rangeRates?: Array<number>;

    /**
     * Array of the range to target at image center in kilometers. The 'tovs' and
     * 'ranges' arrays must match in size, if 'ranges' is provided. If there is an
     * associated image the range is assumed to be at image center.
     */
    ranges?: Array<number>;

    /**
     * Array of error estimates of RCS values, in square meters.
     */
    rcsErrorEsts?: Array<number>;

    /**
     * Array of observed radar cross section (RCS) values, in square meters.
     */
    rcsValues?: Array<number>;

    /**
     * Array of range sample spacing in meters. The 'tovs' and 'rspaces' arrays must
     * match in size, if 'rspaces' is provided.
     */
    rspaces?: Array<number>;

    /**
     * Array of spectral widths, in hertz. The spectral width of a satellite can help
     * determine if an object is stable or tumbling which is often useful to
     * distinguish a rocket body from an active stabilized payload or to deduce a
     * rotational period of slowly tumbling objects at GEO.
     */
    spectralWidths?: Array<number>;

    /**
     * Array of the times of validity in ISO 8601 UTC format with microsecond
     * precision.
     */
    tovs?: Array<string>;

    /**
     * Array of the cartesian X accelerations, in kilometers per second squared, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     * The 'tovs' and 'xaccel' arrays must match in size, if 'xaccel' is provided.
     */
    xaccel?: Array<number>;

    /**
     * Array of the cartesian X positions of the target, in kilometers, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     * The 'tovs' and 'xpos' arrays must match in size, if 'xpos' is provided.
     */
    xpos?: Array<number>;

    /**
     * Array of cross-range sample spacing in meters. The 'tovs' and 'xspaces' arrays
     * must match in size, if 'xspaces' is provided.
     */
    xspaces?: Array<number>;

    /**
     * Array of the cartesian X velocities of target, in kilometers per second, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     * The 'tovs' and 'xvel' arrays must match in size, if 'xvel' is provided.
     */
    xvel?: Array<number>;

    /**
     * Array of the cartesian Y accelerations, in kilometers per second squared, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     * The 'tovs' and 'yaccel' arrays must match in size, if 'yaccel' is provided.
     */
    yaccel?: Array<number>;

    /**
     * Array of the cartesian Y positions of the target, in kilometers, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     * The 'tovs' and 'ypos' arrays must match in size, if 'ypos' is provided.
     */
    ypos?: Array<number>;

    /**
     * Array of the cartesian Y velocities of target, in kilometers per second, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     * The 'tovs' and 'yvel' arrays must match in size, if 'yvel' is provided.
     */
    yvel?: Array<number>;

    /**
     * Array of the cartesian Z accelerations, in kilometers per second squared, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     * The 'tovs' and 'zaccel' arrays must match in size, if 'zaccel' is provided.
     */
    zaccel?: Array<number>;

    /**
     * Array of the cartesian Z positions of the target, in kilometers, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     * The 'tovs' and 'zpos' arrays must match in size, if 'zpos' is provided.
     */
    zpos?: Array<number>;

    /**
     * Array of the cartesian Z velocities of target, in kilometers per second, in the
     * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
     * The 'tovs' and 'zvel' arrays must match in size, if 'zvel' is provided.
     */
    zvel?: Array<number>;
  }
}

export interface SoiObservationSetListParams extends OffsetPageParams {
  /**
   * Observation set detection start time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;
}

export interface SoiObservationSetCountParams {
  /**
   * Observation set detection start time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface SoiObservationSetCreateBulkParams {
  body: Array<SoiObservationSetCreateBulkParams.Body>;
}

export namespace SoiObservationSetCreateBulkParams {
  /**
   * These services provide operations for posting space object idenfification
   * observation sets.
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
     * The number of observation records in the set.
     */
    numObs: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Observation set detection start time in ISO 8601 UTC with microsecond precision.
     */
    startTime: string;

    /**
     * Observation type (OPTICAL, RADAR).
     */
    type: 'OPTICAL' | 'RADAR';

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The number of pixels binned horizontally.
     */
    binningHoriz?: number;

    /**
     * The number of pixels binned vertically.
     */
    binningVert?: number;

    /**
     * Boolean indicating if a brightness variance change event was detected, based on
     * historical collection data for the object.
     */
    brightnessVarianceChangeDetected?: boolean;

    /**
     * Array of SOI Calibrations associated with this SOIObservationSet.
     */
    calibrations?: Array<Body.Calibration>;

    /**
     * Type of calibration used by the Sensor (e.g. ALL SKY, DIFFERENTIAL, DEFAULT,
     * NONE).
     */
    calibrationType?: string;

    /**
     * Overall qualitative confidence assessment of change detection results (e.g.
     * HIGH, MEDIUM, LOW).
     */
    changeConf?: string;

    /**
     * Boolean indicating if any change event was detected, based on historical
     * collection data for the object.
     */
    changeDetected?: boolean;

    /**
     * Qualitative Collection Density assessment, with respect to confidence of
     * detecting a change event (e.g. HIGH, MEDIUM, LOW).
     */
    collectionDensityConf?: string;

    /**
     * Universally Unique collection ID. Mechanism to correlate Single Point Photometry
     * (SPP) JSON files to images.
     */
    collectionId?: string;

    /**
     * Mode indicating telescope movement during collection (AUTOTRACK, MANUAL
     * AUTOTRACK, MANUAL RATE TRACK, MANUAL SIDEREAL, SIDEREAL, RATE TRACK).
     */
    collectionMode?: string;

    /**
     * Object Correlation Quality value. Measures how close the observed object's orbit
     * is to matching an object in the catalog. The scale of this field may vary
     * depending on provider. Users should consult the data provider to verify the
     * meaning of the value (e.g. A value of 0.0 indicates a high/strong correlation,
     * while a value closer to 1.0 indicates low/weak correlation).
     */
    corrQuality?: number;

    /**
     * Observation set detection end time in ISO 8601 UTC with microsecond precision.
     */
    endTime?: string;

    /**
     * The gain used during the collection, in units of photoelectrons per
     * analog-to-digital unit (e-/ADU). If no gain is used, the value = 1.
     */
    gain?: number;

    /**
     * ID of the UDL Elset of the Space Object under observation.
     */
    idElset?: string;

    /**
     * ID of the observing sensor.
     */
    idSensor?: string;

    /**
     * Line of sight declination at observation set detection end time. Specified in
     * degrees, in the specified referenceFrame. If referenceFrame is null then J2K
     * should be assumed (e.g -30 to 130.0).
     */
    losDeclinationEnd?: number;

    /**
     * Line of sight declination at observation set detection start time. Specified in
     * degrees, in the specified referenceFrame. If referenceFrame is null then J2K
     * should be assumed (e.g -30 to 130.0).
     */
    losDeclinationStart?: number;

    /**
     * SOI msgCreateDate time in ISO 8601 UTC time, with millisecond precision.
     */
    msgCreateDate?: string;

    /**
     * The value is the number of spectral filters used.
     */
    numSpectralFilters?: number;

    /**
     * OpticalSOIObservations associated with this SOIObservationSet.
     */
    opticalSOIObservationList?: Array<Body.OpticalSoiObservationList>;

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
     * Optional identifier provided by the record source to indicate the sensor
     * identifier to which this attitude set applies if this set is reporting a single
     * sensor orientation. This may be an internal identifier and not necessarily a
     * valid sensor ID.
     */
    origSensorId?: string;

    /**
     * A threshold for percent of pixels that make up object signal that are beyond the
     * saturation point for the sensor that are removed in the EOSSA file, in range of
     * 0 to 1.
     */
    percentSatThreshold?: number;

    /**
     * Boolean indicating if a periodicity change event was detected, based on
     * historical collection data for the object.
     */
    periodicityChangeDetected?: boolean;

    /**
     * Qualitative assessment of the periodicity detection results from the Attitude
     * and Shape Retrieval (ASR) Periodicity Assessment (PA) Tool (e.g. HIGH, MEDIUM,
     * LOW).
     */
    periodicityDetectionConf?: string;

    /**
     * Qualitative Periodicity Sampling assessment, with respect to confidence of
     * detecting a change event (e.g. HIGH, MEDIUM, LOW).
     */
    periodicitySamplingConf?: string;

    /**
     * Pixel array size (height) in pixels.
     */
    pixelArrayHeight?: number;

    /**
     * Pixel array size (width) in pixels.
     */
    pixelArrayWidth?: number;

    /**
     * The maximum valid pixel value.
     */
    pixelMax?: number;

    /**
     * The minimum valid pixel value.
     */
    pixelMin?: number;

    /**
     * Pointing angle of the Azimuth gimbal/mount at observation set detection end
     * time. Specified in degrees.
     */
    pointingAngleAzEnd?: number;

    /**
     * Pointing angle of the Azimuth gimbal/mount at observation set detection start
     * time. Specified in degrees.
     */
    pointingAngleAzStart?: number;

    /**
     * Pointing angle of the Elevation gimbal/mount at observation set detection end
     * time. Specified in degrees.
     */
    pointingAngleElEnd?: number;

    /**
     * Pointing angle of the Elevation gimbal/mount at observation set detection start
     * time. Specified in degrees.
     */
    pointingAngleElStart?: number;

    /**
     * Polar angle of the gimbal/mount at observation set detection end time in
     * degrees.
     */
    polarAngleEnd?: number;

    /**
     * Polar angle of the gimbal/mount at observation set detection start time in
     * degrees.
     */
    polarAngleStart?: number;

    /**
     * RadarSOIObservations associated with this RadarSOIObservationSet.
     */
    radarSOIObservationList?: Array<Body.RadarSoiObservationList>;

    /**
     * The reference frame of the observation measurements. If the referenceFrame is
     * null it is assumed to be J2000.
     */
    referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * Name of the target satellite.
     */
    satelliteName?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Sensor altitude at startTime (if mobile/onorbit) in kilometers.
     */
    senalt?: number;

    /**
     * Sensor WGS84 latitude at startTime (if mobile/onorbit) in degrees. If null, can
     * be obtained from sensor info. -90 to 90 degrees (negative values south of
     * equator).
     */
    senlat?: number;

    /**
     * Sensor WGS84 longitude at startTime (if mobile/onorbit) in degrees. If null, can
     * be obtained from sensor info. -180 to 180 degrees (negative values south of
     * equator).
     */
    senlon?: number;

    /**
     * The reference frame of the observing sensor state. If the senReferenceFrame is
     * null it is assumed to be J2000.
     */
    senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * ID of the AttitudeSet record for the observing sensor.
     */
    sensorAsId?: string;

    /**
     * Cartesian X velocity of the observing mobile/onorbit sensor at startTime, in
     * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
     * is null then J2K should be assumed.
     */
    senvelx?: number;

    /**
     * Cartesian Y velocity of the observing mobile/onorbit sensor at startTime, in
     * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
     * is null then J2K should be assumed.
     */
    senvely?: number;

    /**
     * Cartesian Z velocity of the observing mobile/onorbit sensor at startTime, in
     * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
     * is null then J2K should be assumed.
     */
    senvelz?: number;

    /**
     * Cartesian X position of the observing mobile/onorbit sensor at startTime, in
     * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
     * then J2K should be assumed.
     */
    senx?: number;

    /**
     * Cartesian Y position of the observing mobile/onorbit sensor at startTime, in
     * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
     * then J2K should be assumed.
     */
    seny?: number;

    /**
     * Cartesian Z position of the observing mobile/onorbit sensor at startTime, in
     * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
     * then J2K should be assumed.
     */
    senz?: number;

    /**
     * Software Version used to Capture, Process, and Deliver the data.
     */
    softwareVersion?: string;

    /**
     * The in-band solar magnitude at 1 A.U.
     */
    solarMag?: number;

    /**
     * Boolean indicating if a solar phase angle brightness change event was detected,
     * based on historical collection data for the object.
     */
    solarPhaseAngleBrightnessChangeDetected?: boolean;

    /**
     * Array of the SpectralFilters keywords, must be present for all values n=1 to
     * numSpectralFilters, in incrementing order of n, and for no other values of n.
     */
    spectralFilters?: Array<string>;

    /**
     * Name of the Star Catalog used for photometry and astrometry.
     */
    starCatName?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Boolean indicating whether the target object was unable to be correlated to a
     * known object. This flag should only be set to true by data providers after an
     * attempt to correlate to an OnOrbit object was made and failed. If unable to
     * correlate, the 'origObjectId' field may be populated with an internal data
     * provider specific identifier.
     */
    uct?: boolean;

    /**
     * Key to indicate which, if any of, the pre/post photometer calibrations are valid
     * for use when generating data for the EOSSA file. If the field is not populated,
     * then the provided calibration data will be used when generating the EOSSA file
     * (e.g. PRE, POST, BOTH, NONE).
     */
    validCalibrations?: string;
  }

  export namespace Body {
    /**
     * Schema for SOI Calibration data.
     */
    export interface Calibration {
      /**
       * Background intensity, at calibration, specified in kilowatts per steradian per
       * micrometer.
       */
      calBgIntensity?: number;

      /**
       * Coefficient value for how much signal would be lost to atmospheric attenuation
       * for a star at zenith, in magnitudes per air mass.
       */
      calExtinctionCoeff?: number;

      /**
       * Maximum extinction coefficient uncertainty in magnitudes, at calibration (e.g.
       * -5.0 to 30.0).
       */
      calExtinctionCoeffMaxUnc?: number;

      /**
       * Extinction coefficient uncertainty in magnitudes, at calibration, which
       * represents the difference between the measured brightness and predicted
       * brightness of the star with the extinction removed, making it exo-atmospheric
       * (e.g. -5.0 to 30.0).
       */
      calExtinctionCoeffUnc?: number;

      /**
       * Number of correlated stars in the FOV with the target object, at calibration.
       * Can be 0 for narrow FOV sensors.
       */
      calNumCorrelatedStars?: number;

      /**
       * Number of detected stars in the FOV with the target object, at calibration.
       * Helps identify frames with clouds.
       */
      calNumDetectedStars?: number;

      /**
       * Average Sky Background signals in magnitudes, at calibration. Sky Background
       * refers to the incoming light from an apparently empty part of the night sky.
       */
      calSkyBg?: number;

      /**
       * In-band solar magnitudes at 1 A.U, at calibration (e.g. -5.0 to 30.0).
       */
      calSpectralFilterSolarMag?: number;

      /**
       * Start time of calibration in ISO 8601 UTC time, with millisecond precision.
       */
      calTime?: string;

      /**
       * Type of calibration (e.g. PRE, MID, POST).
       */
      calType?: string;

      /**
       * Value representing the difference between the catalog magnitude and instrumental
       * magnitude for a set of standard stars, at calibration (e.g. -5.0 to 30.0).
       */
      calZeroPoint?: number;
    }

    /**
     * An Optical SOI record contains observation information taken from a sensor about
     * a Space Object.
     */
    export interface OpticalSoiObservationList {
      /**
       * Observation detection start time in ISO 8601 UTC with microsecond precision.
       */
      obStartTime: string;

      /**
       * The reference number, x, where x ranges from 1 to n, where n is the number
       * specified in spectralFilters that corresponds to the spectral filter used.
       */
      currentSpectralFilterNum?: number;

      /**
       * Array of declination values, in degrees, of the Target object from the frame of
       * reference of the sensor. A value is provided for each element in the intensities
       * field, at the middle of the frame’s exposure time.
       */
      declinations?: Array<number>;

      /**
       * Image exposure duration in seconds.
       */
      expDuration?: number;

      /**
       * Array of coefficients for how much signal would be lost to atmospheric
       * attenuation for a star at zenith for each element in intensities, in magnitudes
       * per air mass.
       */
      extinctionCoeffs?: Array<number>;

      /**
       * Array of extinction coefficient uncertainties for each element in intensities.
       * Each value represents the difference between the measured brightness and
       * predicted brightness of the star with the extinction removed, making it
       * exo-atmospheric (e.g. -5.0 to 30.0).
       */
      extinctionCoeffsUnc?: Array<number>;

      /**
       * Array of intensities of the Space Object for observations, in kilowatts per
       * steradian per micrometer.
       */
      intensities?: Array<number>;

      /**
       * Array of start times for each intensity measurement. The 1st value in the array
       * will match obStartTime.
       */
      intensityTimes?: Array<string>;

      /**
       * Array of local average Sky Background signals, in magnitudes, with a value
       * corresponding to the time of each intensity measurement. Sky Background refers
       * to the incoming light from an apparently empty part of the night sky.
       */
      localSkyBgs?: Array<number>;

      /**
       * Array of uncertainty of the local average Sky Background signal, in magnitudes,
       * with a value corresponding to the time of each intensity measurement.
       */
      localSkyBgsUnc?: Array<number>;

      /**
       * Array of the number of correlated stars in the FOV with a value for each element
       * in the intensities field.
       */
      numCorrelatedStars?: Array<number>;

      /**
       * Array of the number of detected stars in the FOV with a value for each element
       * in the intensities field.
       */
      numDetectedStars?: Array<number>;

      /**
       * Array of values giving the percent of pixels that make up the object signal that
       * are beyond the saturation point for the sensor, with a value for each element in
       * the intensities field.
       */
      percentSats?: Array<number>;

      /**
       * Array of right ascension rate values, in degrees per second, measuring the rate
       * the telescope is moving to track the Target object from the frame of reference
       * of the sensor, for each element in the intensities field, at the middle of the
       * frame’s exposure time.
       */
      raRates?: Array<number>;

      /**
       * Array of right ascension values, in degrees, of the Target object from the frame
       * of reference of the sensor. A value is provided for each element in the
       * intensities field.
       */
      ras?: Array<number>;

      /**
       * Array of average Sky Background signals, in magnitudes, with a value
       * corresponding to the time of each intensity measurement. Sky Background refers
       * to the incoming light from an apparently empty part of the night sky.
       */
      skyBgs?: Array<number>;

      /**
       * Array of values for the zero-point in magnitudes, calculated at the time of each
       * intensity measurement. It is the difference between the catalog mag and
       * instrumental mag for a set of standard stars (e.g. -5.0 to 30.0).
       */
      zeroPoints?: Array<number>;
    }

    /**
     * A Radar SOI record contains observation information taken from a sensor about a
     * Space Object.
     */
    export interface RadarSoiObservationList {
      /**
       * Observation detection start time in ISO 8601 UTC format with microsecond
       * precision.
       */
      obStartTime: string;

      /**
       * Array of the aspect angle at the center of the image in degrees. The 'tovs' and
       * 'aspectAngles' arrays must match in size, if 'aspectAngles' is provided.
       */
      aspectAngles?: Array<number>;

      /**
       * Array of sensor azimuth angle biases in degrees. The 'tovs' and 'azimuthBiases'
       * arrays must match in size, if 'azimuthBiases' is provided.
       */
      azimuthBiases?: Array<number>;

      /**
       * Array of the azimuth rate of target at image center in degrees per second. The
       * 'tovs' and 'azimuthRates' arrays must match in size, if 'azimuthRates' is
       * provided. If there is an associated image the azimuth rate is assumed to be at
       * image center.
       */
      azimuthRates?: Array<number>;

      /**
       * Array of the azimuth angle to target at image center in degrees. The 'tovs' and
       * 'azimuths' arrays must match in size, if 'azimuths' is provided. If there is an
       * associated image the azimuth angle is assumed to be at image center.
       */
      azimuths?: Array<number>;

      /**
       * Beta angle (between target and radar-image frame z axis) in degrees.
       */
      beta?: number;

      /**
       * Radar center frequency of the radar in hertz.
       */
      centerFrequency?: number;

      /**
       * Array of cross-range resolutions (accounting for weighting function) in
       * kilometers. The 'tovs' and 'crossRangeRes' arrays must match in size, if
       * 'crossRangeRes' is provided.
       */
      crossRangeRes?: Array<number>;

      /**
       * Array of average Interpulse spacing in seconds. The 'tovs' and 'deltaTimes'
       * arrays must match in size, if 'deltaTimes' is provided.
       */
      deltaTimes?: Array<number>;

      /**
       * Array of conversion factors between Doppler in hertz and cross-range in meters.
       * The 'tovs' and 'doppler2XRs' arrays must match in size, if 'doppler2XRs' is
       * provided.
       */
      doppler2XRs?: Array<number>;

      /**
       * Array of sensor elevation biases in degrees. The 'tovs' and 'elevationBiases'
       * arrays must match in size, if 'elevationBiases' is provided.
       */
      elevationBiases?: Array<number>;

      /**
       * Array of the elevation rate of target at image center in degrees per second. The
       * 'tovs' and 'elevationRates' arrays must match in size, if 'elevationRates' is
       * provided. If there is an associated image the elevation rate is assumed to be at
       * image center.
       */
      elevationRates?: Array<number>;

      /**
       * Array of the elevation angle to target at image center in degrees. The 'tovs'
       * and 'elevations' arrays must match in size, if 'elevations' is provided. If
       * there is an associated image the elevation angle is assumed to be at image
       * center.
       */
      elevations?: Array<number>;

      /**
       * Optional id of assumed AttitudeSet of object being observed.
       */
      idAttitudeSet?: string;

      /**
       * Optional id of assumed StateVector of object being observed.
       */
      idStateVector?: string;

      /**
       * Array of Integration angles in degrees. The 'tovs' and 'integrationAngles'
       * arrays must match in size, if 'integrationAngles' is provided.
       */
      integrationAngles?: Array<number>;

      /**
       * Kappa angle (between radar-line-of-sight and target-frame x axis) in degrees.
       */
      kappa?: number;

      /**
       * Array of the peak pixel amplitude for each image in decibels. The 'tovs' and
       * 'peakAmplitudes' arrays must match in size, if 'peakAmplitudes' is provided.
       */
      peakAmplitudes?: Array<number>;

      /**
       * Array of sensor polarizations when collecting the data. Polarization is a
       * property of electromagnetic waves that describes the orientation of their
       * oscillations. Possible values are H - (Horizontally Polarized) Perpendicular to
       * Earth's surface, V - (Vertically Polarized) Parallel to Earth's surface, L -
       * (Left Hand Circularly Polarized) Rotating left relative to the Earth's surface,
       * R - (Right Hand Circularly Polarized) Rotating right relative to the Earth's
       * surface.
       */
      polarizations?: Array<string>;

      /**
       * Array of the component of target angular velocity observable by radar in radians
       * per second. The 'tovs' and 'projAngVels' arrays must match in size, if
       * 'projAngVels' is provided.
       */
      projAngVels?: Array<number>;

      /**
       * Bandwidth of radar pulse in hertz.
       */
      pulseBandwidth?: number;

      /**
       * Array of the range acceleratons of target in kilometers per second squared. The
       * 'tovs' and 'rangeAccels' arrays must match in size, if 'rangeAccels' is
       * provided. If there is an associated image the range acceleration is assumed to
       * be at image center.
       */
      rangeAccels?: Array<number>;

      /**
       * Array of sensor range biases in kilometers. The 'tovs' and 'rangeBiases' arrays
       * must match in size, if 'rangeBiases' is provided.
       */
      rangeBiases?: Array<number>;

      /**
       * Array of the range rate of target at image center in kilometers per second. The
       * 'tovs' and 'rangeRates' arrays must match in size, if 'rangeRates' is provided.
       * If there is an associated image the range rate is assumed to be at image center.
       */
      rangeRates?: Array<number>;

      /**
       * Array of the range to target at image center in kilometers. The 'tovs' and
       * 'ranges' arrays must match in size, if 'ranges' is provided. If there is an
       * associated image the range is assumed to be at image center.
       */
      ranges?: Array<number>;

      /**
       * Array of error estimates of RCS values, in square meters.
       */
      rcsErrorEsts?: Array<number>;

      /**
       * Array of observed radar cross section (RCS) values, in square meters.
       */
      rcsValues?: Array<number>;

      /**
       * Array of range sample spacing in meters. The 'tovs' and 'rspaces' arrays must
       * match in size, if 'rspaces' is provided.
       */
      rspaces?: Array<number>;

      /**
       * Array of spectral widths, in hertz. The spectral width of a satellite can help
       * determine if an object is stable or tumbling which is often useful to
       * distinguish a rocket body from an active stabilized payload or to deduce a
       * rotational period of slowly tumbling objects at GEO.
       */
      spectralWidths?: Array<number>;

      /**
       * Array of the times of validity in ISO 8601 UTC format with microsecond
       * precision.
       */
      tovs?: Array<string>;

      /**
       * Array of the cartesian X accelerations, in kilometers per second squared, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'xaccel' arrays must match in size, if 'xaccel' is provided.
       */
      xaccel?: Array<number>;

      /**
       * Array of the cartesian X positions of the target, in kilometers, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'xpos' arrays must match in size, if 'xpos' is provided.
       */
      xpos?: Array<number>;

      /**
       * Array of cross-range sample spacing in meters. The 'tovs' and 'xspaces' arrays
       * must match in size, if 'xspaces' is provided.
       */
      xspaces?: Array<number>;

      /**
       * Array of the cartesian X velocities of target, in kilometers per second, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'xvel' arrays must match in size, if 'xvel' is provided.
       */
      xvel?: Array<number>;

      /**
       * Array of the cartesian Y accelerations, in kilometers per second squared, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'yaccel' arrays must match in size, if 'yaccel' is provided.
       */
      yaccel?: Array<number>;

      /**
       * Array of the cartesian Y positions of the target, in kilometers, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'ypos' arrays must match in size, if 'ypos' is provided.
       */
      ypos?: Array<number>;

      /**
       * Array of the cartesian Y velocities of target, in kilometers per second, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'yvel' arrays must match in size, if 'yvel' is provided.
       */
      yvel?: Array<number>;

      /**
       * Array of the cartesian Z accelerations, in kilometers per second squared, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'zaccel' arrays must match in size, if 'zaccel' is provided.
       */
      zaccel?: Array<number>;

      /**
       * Array of the cartesian Z positions of the target, in kilometers, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'zpos' arrays must match in size, if 'zpos' is provided.
       */
      zpos?: Array<number>;

      /**
       * Array of the cartesian Z velocities of target, in kilometers per second, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'zvel' arrays must match in size, if 'zvel' is provided.
       */
      zvel?: Array<number>;
    }
  }
}

export interface SoiObservationSetGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SoiObservationSetTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Observation set detection start time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface SoiObservationSetUnvalidatedPublishParams {
  body: Array<SoiObservationSetUnvalidatedPublishParams.Body>;
}

export namespace SoiObservationSetUnvalidatedPublishParams {
  /**
   * These services provide operations for posting space object idenfification
   * observation sets.
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
     * The number of observation records in the set.
     */
    numObs: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Observation set detection start time in ISO 8601 UTC with microsecond precision.
     */
    startTime: string;

    /**
     * Observation type (OPTICAL, RADAR).
     */
    type: 'OPTICAL' | 'RADAR';

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The number of pixels binned horizontally.
     */
    binningHoriz?: number;

    /**
     * The number of pixels binned vertically.
     */
    binningVert?: number;

    /**
     * Boolean indicating if a brightness variance change event was detected, based on
     * historical collection data for the object.
     */
    brightnessVarianceChangeDetected?: boolean;

    /**
     * Array of SOI Calibrations associated with this SOIObservationSet.
     */
    calibrations?: Array<Body.Calibration>;

    /**
     * Type of calibration used by the Sensor (e.g. ALL SKY, DIFFERENTIAL, DEFAULT,
     * NONE).
     */
    calibrationType?: string;

    /**
     * Overall qualitative confidence assessment of change detection results (e.g.
     * HIGH, MEDIUM, LOW).
     */
    changeConf?: string;

    /**
     * Boolean indicating if any change event was detected, based on historical
     * collection data for the object.
     */
    changeDetected?: boolean;

    /**
     * Qualitative Collection Density assessment, with respect to confidence of
     * detecting a change event (e.g. HIGH, MEDIUM, LOW).
     */
    collectionDensityConf?: string;

    /**
     * Universally Unique collection ID. Mechanism to correlate Single Point Photometry
     * (SPP) JSON files to images.
     */
    collectionId?: string;

    /**
     * Mode indicating telescope movement during collection (AUTOTRACK, MANUAL
     * AUTOTRACK, MANUAL RATE TRACK, MANUAL SIDEREAL, SIDEREAL, RATE TRACK).
     */
    collectionMode?: string;

    /**
     * Object Correlation Quality value. Measures how close the observed object's orbit
     * is to matching an object in the catalog. The scale of this field may vary
     * depending on provider. Users should consult the data provider to verify the
     * meaning of the value (e.g. A value of 0.0 indicates a high/strong correlation,
     * while a value closer to 1.0 indicates low/weak correlation).
     */
    corrQuality?: number;

    /**
     * Observation set detection end time in ISO 8601 UTC with microsecond precision.
     */
    endTime?: string;

    /**
     * The gain used during the collection, in units of photoelectrons per
     * analog-to-digital unit (e-/ADU). If no gain is used, the value = 1.
     */
    gain?: number;

    /**
     * ID of the UDL Elset of the Space Object under observation.
     */
    idElset?: string;

    /**
     * ID of the observing sensor.
     */
    idSensor?: string;

    /**
     * Line of sight declination at observation set detection end time. Specified in
     * degrees, in the specified referenceFrame. If referenceFrame is null then J2K
     * should be assumed (e.g -30 to 130.0).
     */
    losDeclinationEnd?: number;

    /**
     * Line of sight declination at observation set detection start time. Specified in
     * degrees, in the specified referenceFrame. If referenceFrame is null then J2K
     * should be assumed (e.g -30 to 130.0).
     */
    losDeclinationStart?: number;

    /**
     * SOI msgCreateDate time in ISO 8601 UTC time, with millisecond precision.
     */
    msgCreateDate?: string;

    /**
     * The value is the number of spectral filters used.
     */
    numSpectralFilters?: number;

    /**
     * OpticalSOIObservations associated with this SOIObservationSet.
     */
    opticalSOIObservationList?: Array<Body.OpticalSoiObservationList>;

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
     * Optional identifier provided by the record source to indicate the sensor
     * identifier to which this attitude set applies if this set is reporting a single
     * sensor orientation. This may be an internal identifier and not necessarily a
     * valid sensor ID.
     */
    origSensorId?: string;

    /**
     * A threshold for percent of pixels that make up object signal that are beyond the
     * saturation point for the sensor that are removed in the EOSSA file, in range of
     * 0 to 1.
     */
    percentSatThreshold?: number;

    /**
     * Boolean indicating if a periodicity change event was detected, based on
     * historical collection data for the object.
     */
    periodicityChangeDetected?: boolean;

    /**
     * Qualitative assessment of the periodicity detection results from the Attitude
     * and Shape Retrieval (ASR) Periodicity Assessment (PA) Tool (e.g. HIGH, MEDIUM,
     * LOW).
     */
    periodicityDetectionConf?: string;

    /**
     * Qualitative Periodicity Sampling assessment, with respect to confidence of
     * detecting a change event (e.g. HIGH, MEDIUM, LOW).
     */
    periodicitySamplingConf?: string;

    /**
     * Pixel array size (height) in pixels.
     */
    pixelArrayHeight?: number;

    /**
     * Pixel array size (width) in pixels.
     */
    pixelArrayWidth?: number;

    /**
     * The maximum valid pixel value.
     */
    pixelMax?: number;

    /**
     * The minimum valid pixel value.
     */
    pixelMin?: number;

    /**
     * Pointing angle of the Azimuth gimbal/mount at observation set detection end
     * time. Specified in degrees.
     */
    pointingAngleAzEnd?: number;

    /**
     * Pointing angle of the Azimuth gimbal/mount at observation set detection start
     * time. Specified in degrees.
     */
    pointingAngleAzStart?: number;

    /**
     * Pointing angle of the Elevation gimbal/mount at observation set detection end
     * time. Specified in degrees.
     */
    pointingAngleElEnd?: number;

    /**
     * Pointing angle of the Elevation gimbal/mount at observation set detection start
     * time. Specified in degrees.
     */
    pointingAngleElStart?: number;

    /**
     * Polar angle of the gimbal/mount at observation set detection end time in
     * degrees.
     */
    polarAngleEnd?: number;

    /**
     * Polar angle of the gimbal/mount at observation set detection start time in
     * degrees.
     */
    polarAngleStart?: number;

    /**
     * RadarSOIObservations associated with this RadarSOIObservationSet.
     */
    radarSOIObservationList?: Array<Body.RadarSoiObservationList>;

    /**
     * The reference frame of the observation measurements. If the referenceFrame is
     * null it is assumed to be J2000.
     */
    referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * Name of the target satellite.
     */
    satelliteName?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Sensor altitude at startTime (if mobile/onorbit) in kilometers.
     */
    senalt?: number;

    /**
     * Sensor WGS84 latitude at startTime (if mobile/onorbit) in degrees. If null, can
     * be obtained from sensor info. -90 to 90 degrees (negative values south of
     * equator).
     */
    senlat?: number;

    /**
     * Sensor WGS84 longitude at startTime (if mobile/onorbit) in degrees. If null, can
     * be obtained from sensor info. -180 to 180 degrees (negative values south of
     * equator).
     */
    senlon?: number;

    /**
     * The reference frame of the observing sensor state. If the senReferenceFrame is
     * null it is assumed to be J2000.
     */
    senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * ID of the AttitudeSet record for the observing sensor.
     */
    sensorAsId?: string;

    /**
     * Cartesian X velocity of the observing mobile/onorbit sensor at startTime, in
     * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
     * is null then J2K should be assumed.
     */
    senvelx?: number;

    /**
     * Cartesian Y velocity of the observing mobile/onorbit sensor at startTime, in
     * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
     * is null then J2K should be assumed.
     */
    senvely?: number;

    /**
     * Cartesian Z velocity of the observing mobile/onorbit sensor at startTime, in
     * kilometers per second, in the specified senReferenceFrame. If senReferenceFrame
     * is null then J2K should be assumed.
     */
    senvelz?: number;

    /**
     * Cartesian X position of the observing mobile/onorbit sensor at startTime, in
     * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
     * then J2K should be assumed.
     */
    senx?: number;

    /**
     * Cartesian Y position of the observing mobile/onorbit sensor at startTime, in
     * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
     * then J2K should be assumed.
     */
    seny?: number;

    /**
     * Cartesian Z position of the observing mobile/onorbit sensor at startTime, in
     * kilometers, in the specified senReferenceFrame. If senReferenceFrame is null
     * then J2K should be assumed.
     */
    senz?: number;

    /**
     * Software Version used to Capture, Process, and Deliver the data.
     */
    softwareVersion?: string;

    /**
     * The in-band solar magnitude at 1 A.U.
     */
    solarMag?: number;

    /**
     * Boolean indicating if a solar phase angle brightness change event was detected,
     * based on historical collection data for the object.
     */
    solarPhaseAngleBrightnessChangeDetected?: boolean;

    /**
     * Array of the SpectralFilters keywords, must be present for all values n=1 to
     * numSpectralFilters, in incrementing order of n, and for no other values of n.
     */
    spectralFilters?: Array<string>;

    /**
     * Name of the Star Catalog used for photometry and astrometry.
     */
    starCatName?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Boolean indicating whether the target object was unable to be correlated to a
     * known object. This flag should only be set to true by data providers after an
     * attempt to correlate to an OnOrbit object was made and failed. If unable to
     * correlate, the 'origObjectId' field may be populated with an internal data
     * provider specific identifier.
     */
    uct?: boolean;

    /**
     * Key to indicate which, if any of, the pre/post photometer calibrations are valid
     * for use when generating data for the EOSSA file. If the field is not populated,
     * then the provided calibration data will be used when generating the EOSSA file
     * (e.g. PRE, POST, BOTH, NONE).
     */
    validCalibrations?: string;
  }

  export namespace Body {
    /**
     * Schema for SOI Calibration data.
     */
    export interface Calibration {
      /**
       * Background intensity, at calibration, specified in kilowatts per steradian per
       * micrometer.
       */
      calBgIntensity?: number;

      /**
       * Coefficient value for how much signal would be lost to atmospheric attenuation
       * for a star at zenith, in magnitudes per air mass.
       */
      calExtinctionCoeff?: number;

      /**
       * Maximum extinction coefficient uncertainty in magnitudes, at calibration (e.g.
       * -5.0 to 30.0).
       */
      calExtinctionCoeffMaxUnc?: number;

      /**
       * Extinction coefficient uncertainty in magnitudes, at calibration, which
       * represents the difference between the measured brightness and predicted
       * brightness of the star with the extinction removed, making it exo-atmospheric
       * (e.g. -5.0 to 30.0).
       */
      calExtinctionCoeffUnc?: number;

      /**
       * Number of correlated stars in the FOV with the target object, at calibration.
       * Can be 0 for narrow FOV sensors.
       */
      calNumCorrelatedStars?: number;

      /**
       * Number of detected stars in the FOV with the target object, at calibration.
       * Helps identify frames with clouds.
       */
      calNumDetectedStars?: number;

      /**
       * Average Sky Background signals in magnitudes, at calibration. Sky Background
       * refers to the incoming light from an apparently empty part of the night sky.
       */
      calSkyBg?: number;

      /**
       * In-band solar magnitudes at 1 A.U, at calibration (e.g. -5.0 to 30.0).
       */
      calSpectralFilterSolarMag?: number;

      /**
       * Start time of calibration in ISO 8601 UTC time, with millisecond precision.
       */
      calTime?: string;

      /**
       * Type of calibration (e.g. PRE, MID, POST).
       */
      calType?: string;

      /**
       * Value representing the difference between the catalog magnitude and instrumental
       * magnitude for a set of standard stars, at calibration (e.g. -5.0 to 30.0).
       */
      calZeroPoint?: number;
    }

    /**
     * An Optical SOI record contains observation information taken from a sensor about
     * a Space Object.
     */
    export interface OpticalSoiObservationList {
      /**
       * Observation detection start time in ISO 8601 UTC with microsecond precision.
       */
      obStartTime: string;

      /**
       * The reference number, x, where x ranges from 1 to n, where n is the number
       * specified in spectralFilters that corresponds to the spectral filter used.
       */
      currentSpectralFilterNum?: number;

      /**
       * Array of declination values, in degrees, of the Target object from the frame of
       * reference of the sensor. A value is provided for each element in the intensities
       * field, at the middle of the frame’s exposure time.
       */
      declinations?: Array<number>;

      /**
       * Image exposure duration in seconds.
       */
      expDuration?: number;

      /**
       * Array of coefficients for how much signal would be lost to atmospheric
       * attenuation for a star at zenith for each element in intensities, in magnitudes
       * per air mass.
       */
      extinctionCoeffs?: Array<number>;

      /**
       * Array of extinction coefficient uncertainties for each element in intensities.
       * Each value represents the difference between the measured brightness and
       * predicted brightness of the star with the extinction removed, making it
       * exo-atmospheric (e.g. -5.0 to 30.0).
       */
      extinctionCoeffsUnc?: Array<number>;

      /**
       * Array of intensities of the Space Object for observations, in kilowatts per
       * steradian per micrometer.
       */
      intensities?: Array<number>;

      /**
       * Array of start times for each intensity measurement. The 1st value in the array
       * will match obStartTime.
       */
      intensityTimes?: Array<string>;

      /**
       * Array of local average Sky Background signals, in magnitudes, with a value
       * corresponding to the time of each intensity measurement. Sky Background refers
       * to the incoming light from an apparently empty part of the night sky.
       */
      localSkyBgs?: Array<number>;

      /**
       * Array of uncertainty of the local average Sky Background signal, in magnitudes,
       * with a value corresponding to the time of each intensity measurement.
       */
      localSkyBgsUnc?: Array<number>;

      /**
       * Array of the number of correlated stars in the FOV with a value for each element
       * in the intensities field.
       */
      numCorrelatedStars?: Array<number>;

      /**
       * Array of the number of detected stars in the FOV with a value for each element
       * in the intensities field.
       */
      numDetectedStars?: Array<number>;

      /**
       * Array of values giving the percent of pixels that make up the object signal that
       * are beyond the saturation point for the sensor, with a value for each element in
       * the intensities field.
       */
      percentSats?: Array<number>;

      /**
       * Array of right ascension rate values, in degrees per second, measuring the rate
       * the telescope is moving to track the Target object from the frame of reference
       * of the sensor, for each element in the intensities field, at the middle of the
       * frame’s exposure time.
       */
      raRates?: Array<number>;

      /**
       * Array of right ascension values, in degrees, of the Target object from the frame
       * of reference of the sensor. A value is provided for each element in the
       * intensities field.
       */
      ras?: Array<number>;

      /**
       * Array of average Sky Background signals, in magnitudes, with a value
       * corresponding to the time of each intensity measurement. Sky Background refers
       * to the incoming light from an apparently empty part of the night sky.
       */
      skyBgs?: Array<number>;

      /**
       * Array of values for the zero-point in magnitudes, calculated at the time of each
       * intensity measurement. It is the difference between the catalog mag and
       * instrumental mag for a set of standard stars (e.g. -5.0 to 30.0).
       */
      zeroPoints?: Array<number>;
    }

    /**
     * A Radar SOI record contains observation information taken from a sensor about a
     * Space Object.
     */
    export interface RadarSoiObservationList {
      /**
       * Observation detection start time in ISO 8601 UTC format with microsecond
       * precision.
       */
      obStartTime: string;

      /**
       * Array of the aspect angle at the center of the image in degrees. The 'tovs' and
       * 'aspectAngles' arrays must match in size, if 'aspectAngles' is provided.
       */
      aspectAngles?: Array<number>;

      /**
       * Array of sensor azimuth angle biases in degrees. The 'tovs' and 'azimuthBiases'
       * arrays must match in size, if 'azimuthBiases' is provided.
       */
      azimuthBiases?: Array<number>;

      /**
       * Array of the azimuth rate of target at image center in degrees per second. The
       * 'tovs' and 'azimuthRates' arrays must match in size, if 'azimuthRates' is
       * provided. If there is an associated image the azimuth rate is assumed to be at
       * image center.
       */
      azimuthRates?: Array<number>;

      /**
       * Array of the azimuth angle to target at image center in degrees. The 'tovs' and
       * 'azimuths' arrays must match in size, if 'azimuths' is provided. If there is an
       * associated image the azimuth angle is assumed to be at image center.
       */
      azimuths?: Array<number>;

      /**
       * Beta angle (between target and radar-image frame z axis) in degrees.
       */
      beta?: number;

      /**
       * Radar center frequency of the radar in hertz.
       */
      centerFrequency?: number;

      /**
       * Array of cross-range resolutions (accounting for weighting function) in
       * kilometers. The 'tovs' and 'crossRangeRes' arrays must match in size, if
       * 'crossRangeRes' is provided.
       */
      crossRangeRes?: Array<number>;

      /**
       * Array of average Interpulse spacing in seconds. The 'tovs' and 'deltaTimes'
       * arrays must match in size, if 'deltaTimes' is provided.
       */
      deltaTimes?: Array<number>;

      /**
       * Array of conversion factors between Doppler in hertz and cross-range in meters.
       * The 'tovs' and 'doppler2XRs' arrays must match in size, if 'doppler2XRs' is
       * provided.
       */
      doppler2XRs?: Array<number>;

      /**
       * Array of sensor elevation biases in degrees. The 'tovs' and 'elevationBiases'
       * arrays must match in size, if 'elevationBiases' is provided.
       */
      elevationBiases?: Array<number>;

      /**
       * Array of the elevation rate of target at image center in degrees per second. The
       * 'tovs' and 'elevationRates' arrays must match in size, if 'elevationRates' is
       * provided. If there is an associated image the elevation rate is assumed to be at
       * image center.
       */
      elevationRates?: Array<number>;

      /**
       * Array of the elevation angle to target at image center in degrees. The 'tovs'
       * and 'elevations' arrays must match in size, if 'elevations' is provided. If
       * there is an associated image the elevation angle is assumed to be at image
       * center.
       */
      elevations?: Array<number>;

      /**
       * Optional id of assumed AttitudeSet of object being observed.
       */
      idAttitudeSet?: string;

      /**
       * Optional id of assumed StateVector of object being observed.
       */
      idStateVector?: string;

      /**
       * Array of Integration angles in degrees. The 'tovs' and 'integrationAngles'
       * arrays must match in size, if 'integrationAngles' is provided.
       */
      integrationAngles?: Array<number>;

      /**
       * Kappa angle (between radar-line-of-sight and target-frame x axis) in degrees.
       */
      kappa?: number;

      /**
       * Array of the peak pixel amplitude for each image in decibels. The 'tovs' and
       * 'peakAmplitudes' arrays must match in size, if 'peakAmplitudes' is provided.
       */
      peakAmplitudes?: Array<number>;

      /**
       * Array of sensor polarizations when collecting the data. Polarization is a
       * property of electromagnetic waves that describes the orientation of their
       * oscillations. Possible values are H - (Horizontally Polarized) Perpendicular to
       * Earth's surface, V - (Vertically Polarized) Parallel to Earth's surface, L -
       * (Left Hand Circularly Polarized) Rotating left relative to the Earth's surface,
       * R - (Right Hand Circularly Polarized) Rotating right relative to the Earth's
       * surface.
       */
      polarizations?: Array<string>;

      /**
       * Array of the component of target angular velocity observable by radar in radians
       * per second. The 'tovs' and 'projAngVels' arrays must match in size, if
       * 'projAngVels' is provided.
       */
      projAngVels?: Array<number>;

      /**
       * Bandwidth of radar pulse in hertz.
       */
      pulseBandwidth?: number;

      /**
       * Array of the range acceleratons of target in kilometers per second squared. The
       * 'tovs' and 'rangeAccels' arrays must match in size, if 'rangeAccels' is
       * provided. If there is an associated image the range acceleration is assumed to
       * be at image center.
       */
      rangeAccels?: Array<number>;

      /**
       * Array of sensor range biases in kilometers. The 'tovs' and 'rangeBiases' arrays
       * must match in size, if 'rangeBiases' is provided.
       */
      rangeBiases?: Array<number>;

      /**
       * Array of the range rate of target at image center in kilometers per second. The
       * 'tovs' and 'rangeRates' arrays must match in size, if 'rangeRates' is provided.
       * If there is an associated image the range rate is assumed to be at image center.
       */
      rangeRates?: Array<number>;

      /**
       * Array of the range to target at image center in kilometers. The 'tovs' and
       * 'ranges' arrays must match in size, if 'ranges' is provided. If there is an
       * associated image the range is assumed to be at image center.
       */
      ranges?: Array<number>;

      /**
       * Array of error estimates of RCS values, in square meters.
       */
      rcsErrorEsts?: Array<number>;

      /**
       * Array of observed radar cross section (RCS) values, in square meters.
       */
      rcsValues?: Array<number>;

      /**
       * Array of range sample spacing in meters. The 'tovs' and 'rspaces' arrays must
       * match in size, if 'rspaces' is provided.
       */
      rspaces?: Array<number>;

      /**
       * Array of spectral widths, in hertz. The spectral width of a satellite can help
       * determine if an object is stable or tumbling which is often useful to
       * distinguish a rocket body from an active stabilized payload or to deduce a
       * rotational period of slowly tumbling objects at GEO.
       */
      spectralWidths?: Array<number>;

      /**
       * Array of the times of validity in ISO 8601 UTC format with microsecond
       * precision.
       */
      tovs?: Array<string>;

      /**
       * Array of the cartesian X accelerations, in kilometers per second squared, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'xaccel' arrays must match in size, if 'xaccel' is provided.
       */
      xaccel?: Array<number>;

      /**
       * Array of the cartesian X positions of the target, in kilometers, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'xpos' arrays must match in size, if 'xpos' is provided.
       */
      xpos?: Array<number>;

      /**
       * Array of cross-range sample spacing in meters. The 'tovs' and 'xspaces' arrays
       * must match in size, if 'xspaces' is provided.
       */
      xspaces?: Array<number>;

      /**
       * Array of the cartesian X velocities of target, in kilometers per second, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'xvel' arrays must match in size, if 'xvel' is provided.
       */
      xvel?: Array<number>;

      /**
       * Array of the cartesian Y accelerations, in kilometers per second squared, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'yaccel' arrays must match in size, if 'yaccel' is provided.
       */
      yaccel?: Array<number>;

      /**
       * Array of the cartesian Y positions of the target, in kilometers, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'ypos' arrays must match in size, if 'ypos' is provided.
       */
      ypos?: Array<number>;

      /**
       * Array of the cartesian Y velocities of target, in kilometers per second, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'yvel' arrays must match in size, if 'yvel' is provided.
       */
      yvel?: Array<number>;

      /**
       * Array of the cartesian Z accelerations, in kilometers per second squared, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'zaccel' arrays must match in size, if 'zaccel' is provided.
       */
      zaccel?: Array<number>;

      /**
       * Array of the cartesian Z positions of the target, in kilometers, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'zpos' arrays must match in size, if 'zpos' is provided.
       */
      zpos?: Array<number>;

      /**
       * Array of the cartesian Z velocities of target, in kilometers per second, in the
       * specified referenceFrame. If referenceFrame is null then J2K should be assumed.
       * The 'tovs' and 'zvel' arrays must match in size, if 'zvel' is provided.
       */
      zvel?: Array<number>;
    }
  }
}

SoiObservationSet.History = History;

export declare namespace SoiObservationSet {
  export {
    type SoiObservationSetListResponse as SoiObservationSetListResponse,
    type SoiObservationSetCountResponse as SoiObservationSetCountResponse,
    type SoiObservationSetQueryhelpResponse as SoiObservationSetQueryhelpResponse,
    type SoiObservationSetTupleResponse as SoiObservationSetTupleResponse,
    type SoiObservationSetListResponsesOffsetPage as SoiObservationSetListResponsesOffsetPage,
    type SoiObservationSetCreateParams as SoiObservationSetCreateParams,
    type SoiObservationSetListParams as SoiObservationSetListParams,
    type SoiObservationSetCountParams as SoiObservationSetCountParams,
    type SoiObservationSetCreateBulkParams as SoiObservationSetCreateBulkParams,
    type SoiObservationSetGetParams as SoiObservationSetGetParams,
    type SoiObservationSetTupleParams as SoiObservationSetTupleParams,
    type SoiObservationSetUnvalidatedPublishParams as SoiObservationSetUnvalidatedPublishParams,
  };

  export {
    History as History,
    type SoiObservationSetFull as SoiObservationSetFull,
    type HistoryCountResponse as HistoryCountResponse,
    type SoiObservationSetFullsOffsetPage as SoiObservationSetFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
