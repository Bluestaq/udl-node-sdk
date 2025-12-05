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

export class Calibration extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single SensorCalibration as a POST body and ingest
   * into the database. This operation is not intended to be used for automated feeds
   * into UDL. Data providers should contact the UDL team for specific role
   * assignments and for instructions on setting up a permanent feed through an
   * alternate mechanism.
   *
   * @example
   * ```ts
   * await client.sensor.calibration.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idSensor: '09f2c68c-5e24-4b72-9cc8-ba9b1efa82f0',
   *   source: 'Bluestaq',
   *   startTime: '2018-01-01T16:00:00.123Z',
   * });
   * ```
   */
  create(body: CalibrationCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/sensorcalibration', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single SensorCalibration by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const calibration =
   *   await client.sensor.calibration.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: CalibrationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CalibrationRetrieveResponse> {
    return this._client.get(path`/udl/sensorcalibration/${id}`, { query, ...options });
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
   * for await (const calibrationListResponse of client.sensor.calibration.list(
   *   { startTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CalibrationListParams,
    options?: RequestOptions,
  ): PagePromise<CalibrationListResponsesOffsetPage, CalibrationListResponse> {
    return this._client.getAPIList('/udl/sensorcalibration', OffsetPage<CalibrationListResponse>, {
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
   * const response = await client.sensor.calibration.count({
   *   startTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: CalibrationCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/sensorcalibration/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * SensorCalibrations as a POST body and ingest into the database. This operation
   * is not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.sensor.calibration.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       idSensor: '09f2c68c-5e24-4b72-9cc8-ba9b1efa82f0',
   *       source: 'Bluestaq',
   *       startTime: '2018-01-01T16:00:00.123Z',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: CalibrationCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/sensorcalibration/createBulk', {
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
   *   await client.sensor.calibration.queryHelp();
   * ```
   */
  queryHelp(options?: RequestOptions): APIPromise<CalibrationQueryHelpResponse> {
    return this._client.get('/udl/sensorcalibration/queryhelp', options);
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
   * const response = await client.sensor.calibration.tuple({
   *   columns: 'columns',
   *   startTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: CalibrationTupleParams, options?: RequestOptions): APIPromise<CalibrationTupleResponse> {
    return this._client.get('/udl/sensorcalibration/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple sensorcalibration records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sensor.calibration.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       idSensor: '09f2c68c-5e24-4b72-9cc8-ba9b1efa82f0',
   *       source: 'Bluestaq',
   *       startTime: '2018-01-01T16:00:00.123Z',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(
    params: CalibrationUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-sensorcalibration', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type CalibrationListResponsesOffsetPage = OffsetPage<CalibrationListResponse>;

/**
 * The Sensor Calibration service records data about a sensor's overall accuracy
 * and is used to adjust sensor settings to achieve and maintain that accuracy in
 * reported sensor observations. Calibration occurs periodically when needed to
 * maintain sensor accuracy or on-demand to adjust a sensor for a specific reading.
 */
export interface CalibrationRetrieveResponse {
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
   * Unique identifier of the sensor to which this calibration data applies. This ID
   * can be used to obtain additional information on a sensor using the 'get by ID'
   * operation (e.g. /udl/sensor/{id}). For example, the sensor with idSensor = abc
   * would be queried as /udl/sensor/abc.
   */
  idSensor: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Calibration data span start time in ISO 8601 UTC format with millisecond
   * precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Sensor azimuth/right-ascension acceleration bias, in degrees per second squared.
   */
  azRaAccelBias?: number;

  /**
   * The standard deviation of the azimuth/right ascension acceleration residuals, in
   * degrees, used to determine the sensor azimuth/right-ascension acceleration bias.
   */
  azRaAccelSigma?: number;

  /**
   * Sensor azimuth/right-ascension bias, in degrees.
   */
  azRaBias?: number;

  /**
   * Sensor azimuth/right-ascension rate bias, in degrees per second.
   */
  azRaRateBias?: number;

  /**
   * The standard deviation of the azimuth/right ascension rate residuals, in
   * degrees, used to determine the sensor azimuth/right-ascension rate bias.
   */
  azRaRateSigma?: number;

  /**
   * The root mean square of the azimuth/right-ascension residuals, in degrees, used
   * to determine the sensor azimuth/right-ascension bias.
   */
  azRaRms?: number;

  /**
   * The standard deviation of the azimuth/right ascension residuals, in degrees,
   * used to determine the sensor azimuth/right-ascension bias.
   */
  azRaSigma?: number;

  /**
   * Specifies the calibration reference angle set for this calibration data set.
   * Azimuth and Elevation (AZEL) or Right Ascension and Declination (RADEC).
   */
  calAngleRef?: string;

  /**
   * Specifies that the calibration data are from INTRA_TRACK or INTER_TRACK
   * residuals.
   */
  calTrackMode?: string;

  /**
   * The basis of calibration values contained in this record (COMPUTED,
   * OPERATIONAL).
   */
  calType?: string;

  /**
   * The confidence noise bias of the duration span.
   */
  confidenceNoiseBias?: number;

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
   * Duration of the sensor calibration data which produced these values, measured in
   * days.
   */
  duration?: number;

  /**
   * Three element array, expressing the sensor location in Earth Centered Rotating
   * (ECR) coordinates, in kilometers. The array element order is [x, y, z].
   */
  ecr?: Array<number>;

  /**
   * Sensor elevation/declination acceleration bias, in degrees per second squared.
   */
  elDecAccelBias?: number;

  /**
   * The standard deviation of the elevation/declination acceleration residuals, in
   * degrees, used to determine the sensor elevation/declination acceleration bias.
   */
  elDecAccelSigma?: number;

  /**
   * Sensor elevation/declination bias, in degrees.
   */
  elDecBias?: number;

  /**
   * Sensor elevation/declination rate bias, in degrees per second.
   */
  elDecRateBias?: number;

  /**
   * The standard deviation of the elevation/declination rate residuals, in degrees,
   * used to determine the sensor elevation/declination rate bias.
   */
  elDecRateSigma?: number;

  /**
   * The root mean square of the elevation/declination residuals, in degrees, used to
   * determine the sensor elevation/declination bias.
   */
  elDecRms?: number;

  /**
   * The standard deviation of the elevation/declination residuals, in degrees, used
   * to determine the sensor elevation/declination bias.
   */
  elDecSigma?: number;

  /**
   * Calibration data span end time in ISO 8601 UTC format with millisecond
   * precision. If provided, the endTime must be greater than or equal to the
   * startTime in the SensorCalibration record.
   */
  endTime?: string;

  /**
   * The number of observables used in determining the azimuth or right-ascension
   * calibration values.
   */
  numAzRaObs?: number;

  /**
   * The number of observables used in determining the elevation or declination
   * calibration values.
   */
  numElDecObs?: number;

  /**
   * The total number of observables available over the calibration span.
   */
  numObs?: number;

  /**
   * The number of observables used in determining the photometric calibration
   * values.
   */
  numPhotoObs?: number;

  /**
   * The number of observables used in determining the range calibration values.
   */
  numRangeObs?: number;

  /**
   * The number of observables used in determining the range rate calibration values.
   */
  numRangeRateObs?: number;

  /**
   * The number of observables used in determining the radar cross section (RCS)
   * calibration values.
   */
  numRcsObs?: number;

  /**
   * The number of observables used in determining the time calibration values.
   */
  numTimeObs?: number;

  /**
   * The total number of tracks available over the calibration span.
   */
  numTracks?: number;

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
   * The sensor photometric observation magnitude bias, in visual magnitude.
   */
  photoBias?: number;

  /**
   * The standard deviation of the magnitude residuals, in visual magnitude, used to
   * determine the photometric bias.
   */
  photoSigma?: number;

  /**
   * Sensor range rate acceleration bias, in kilometers per second squared.
   */
  rangeAccelBias?: number;

  /**
   * The standard deviation of the range acceleration residuals, in kilometers per
   * second squared, used to determine the sensor range acceleration bias.
   */
  rangeAccelSigma?: number;

  /**
   * Sensor range bias, in kilometers.
   */
  rangeBias?: number;

  /**
   * Sensor range rate bias, in kilometers per second.
   */
  rangeRateBias?: number;

  /**
   * The root mean square of the range rate residuals, in kilometers per second, used
   * to determine the sensor range rate bias.
   */
  rangeRateRms?: number;

  /**
   * The standard deviation of the range rate residuals, in kilometers per second,
   * used to determine the sensor range rate bias.
   */
  rangeRateSigma?: number;

  /**
   * The root mean square of the range residuals, in kilometers, used to determine
   * the sensor range bias.
   */
  rangeRms?: number;

  /**
   * The standard deviation of the range residuals, in kilometers, used to determine
   * the sensor range bias.
   */
  rangeSigma?: number;

  /**
   * The sensor radar cross section (RCS) observation bias, in square meters.
   */
  rcsBias?: number;

  /**
   * The standard deviation of the radar cross section residuals, in square meters,
   * used to determine the radar cross section bias.
   */
  rcsSigma?: number;

  /**
   * Array of the catalog IDs of the reference targets used in the calibration.
   */
  refTargets?: Array<string>;

  /**
   * The reference type used in the calibration.
   */
  refType?: string;

  /**
   * The sensor type (MECHANICAL, OPTICAL, PHASED ARRAY, RF).
   */
  senType?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Sensor time bias, in seconds.
   */
  timeBias?: number;

  /**
   * The standard deviation of the time residuals, in seconds, used to determine the
   * sensor time bias.
   */
  timeBiasSigma?: number;
}

/**
 * The Sensor Calibration service records data about a sensor's overall accuracy
 * and is used to adjust sensor settings to achieve and maintain that accuracy in
 * reported sensor observations. Calibration occurs periodically when needed to
 * maintain sensor accuracy or on-demand to adjust a sensor for a specific reading.
 */
export interface CalibrationListResponse {
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
   * Unique identifier of the sensor to which this calibration data applies. This ID
   * can be used to obtain additional information on a sensor using the 'get by ID'
   * operation (e.g. /udl/sensor/{id}). For example, the sensor with idSensor = abc
   * would be queried as /udl/sensor/abc.
   */
  idSensor: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Calibration data span start time in ISO 8601 UTC format with millisecond
   * precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Sensor azimuth/right-ascension acceleration bias, in degrees per second squared.
   */
  azRaAccelBias?: number;

  /**
   * The standard deviation of the azimuth/right ascension acceleration residuals, in
   * degrees, used to determine the sensor azimuth/right-ascension acceleration bias.
   */
  azRaAccelSigma?: number;

  /**
   * Sensor azimuth/right-ascension bias, in degrees.
   */
  azRaBias?: number;

  /**
   * Sensor azimuth/right-ascension rate bias, in degrees per second.
   */
  azRaRateBias?: number;

  /**
   * The standard deviation of the azimuth/right ascension rate residuals, in
   * degrees, used to determine the sensor azimuth/right-ascension rate bias.
   */
  azRaRateSigma?: number;

  /**
   * The root mean square of the azimuth/right-ascension residuals, in degrees, used
   * to determine the sensor azimuth/right-ascension bias.
   */
  azRaRms?: number;

  /**
   * The standard deviation of the azimuth/right ascension residuals, in degrees,
   * used to determine the sensor azimuth/right-ascension bias.
   */
  azRaSigma?: number;

  /**
   * Specifies the calibration reference angle set for this calibration data set.
   * Azimuth and Elevation (AZEL) or Right Ascension and Declination (RADEC).
   */
  calAngleRef?: string;

  /**
   * Specifies that the calibration data are from INTRA_TRACK or INTER_TRACK
   * residuals.
   */
  calTrackMode?: string;

  /**
   * The basis of calibration values contained in this record (COMPUTED,
   * OPERATIONAL).
   */
  calType?: string;

  /**
   * The confidence noise bias of the duration span.
   */
  confidenceNoiseBias?: number;

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
   * Duration of the sensor calibration data which produced these values, measured in
   * days.
   */
  duration?: number;

  /**
   * Three element array, expressing the sensor location in Earth Centered Rotating
   * (ECR) coordinates, in kilometers. The array element order is [x, y, z].
   */
  ecr?: Array<number>;

  /**
   * Sensor elevation/declination acceleration bias, in degrees per second squared.
   */
  elDecAccelBias?: number;

  /**
   * The standard deviation of the elevation/declination acceleration residuals, in
   * degrees, used to determine the sensor elevation/declination acceleration bias.
   */
  elDecAccelSigma?: number;

  /**
   * Sensor elevation/declination bias, in degrees.
   */
  elDecBias?: number;

  /**
   * Sensor elevation/declination rate bias, in degrees per second.
   */
  elDecRateBias?: number;

  /**
   * The standard deviation of the elevation/declination rate residuals, in degrees,
   * used to determine the sensor elevation/declination rate bias.
   */
  elDecRateSigma?: number;

  /**
   * The root mean square of the elevation/declination residuals, in degrees, used to
   * determine the sensor elevation/declination bias.
   */
  elDecRms?: number;

  /**
   * The standard deviation of the elevation/declination residuals, in degrees, used
   * to determine the sensor elevation/declination bias.
   */
  elDecSigma?: number;

  /**
   * Calibration data span end time in ISO 8601 UTC format with millisecond
   * precision. If provided, the endTime must be greater than or equal to the
   * startTime in the SensorCalibration record.
   */
  endTime?: string;

  /**
   * The number of observables used in determining the azimuth or right-ascension
   * calibration values.
   */
  numAzRaObs?: number;

  /**
   * The number of observables used in determining the elevation or declination
   * calibration values.
   */
  numElDecObs?: number;

  /**
   * The total number of observables available over the calibration span.
   */
  numObs?: number;

  /**
   * The number of observables used in determining the photometric calibration
   * values.
   */
  numPhotoObs?: number;

  /**
   * The number of observables used in determining the range calibration values.
   */
  numRangeObs?: number;

  /**
   * The number of observables used in determining the range rate calibration values.
   */
  numRangeRateObs?: number;

  /**
   * The number of observables used in determining the radar cross section (RCS)
   * calibration values.
   */
  numRcsObs?: number;

  /**
   * The number of observables used in determining the time calibration values.
   */
  numTimeObs?: number;

  /**
   * The total number of tracks available over the calibration span.
   */
  numTracks?: number;

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
   * The sensor photometric observation magnitude bias, in visual magnitude.
   */
  photoBias?: number;

  /**
   * The standard deviation of the magnitude residuals, in visual magnitude, used to
   * determine the photometric bias.
   */
  photoSigma?: number;

  /**
   * Sensor range rate acceleration bias, in kilometers per second squared.
   */
  rangeAccelBias?: number;

  /**
   * The standard deviation of the range acceleration residuals, in kilometers per
   * second squared, used to determine the sensor range acceleration bias.
   */
  rangeAccelSigma?: number;

  /**
   * Sensor range bias, in kilometers.
   */
  rangeBias?: number;

  /**
   * Sensor range rate bias, in kilometers per second.
   */
  rangeRateBias?: number;

  /**
   * The root mean square of the range rate residuals, in kilometers per second, used
   * to determine the sensor range rate bias.
   */
  rangeRateRms?: number;

  /**
   * The standard deviation of the range rate residuals, in kilometers per second,
   * used to determine the sensor range rate bias.
   */
  rangeRateSigma?: number;

  /**
   * The root mean square of the range residuals, in kilometers, used to determine
   * the sensor range bias.
   */
  rangeRms?: number;

  /**
   * The standard deviation of the range residuals, in kilometers, used to determine
   * the sensor range bias.
   */
  rangeSigma?: number;

  /**
   * The sensor radar cross section (RCS) observation bias, in square meters.
   */
  rcsBias?: number;

  /**
   * The standard deviation of the radar cross section residuals, in square meters,
   * used to determine the radar cross section bias.
   */
  rcsSigma?: number;

  /**
   * Array of the catalog IDs of the reference targets used in the calibration.
   */
  refTargets?: Array<string>;

  /**
   * The reference type used in the calibration.
   */
  refType?: string;

  /**
   * The sensor type (MECHANICAL, OPTICAL, PHASED ARRAY, RF).
   */
  senType?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Sensor time bias, in seconds.
   */
  timeBias?: number;

  /**
   * The standard deviation of the time residuals, in seconds, used to determine the
   * sensor time bias.
   */
  timeBiasSigma?: number;
}

export type CalibrationCountResponse = string;

export interface CalibrationQueryHelpResponse {
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

export type CalibrationTupleResponse = Array<CalibrationTupleResponse.CalibrationTupleResponseItem>;

export namespace CalibrationTupleResponse {
  /**
   * The Sensor Calibration service records data about a sensor's overall accuracy
   * and is used to adjust sensor settings to achieve and maintain that accuracy in
   * reported sensor observations. Calibration occurs periodically when needed to
   * maintain sensor accuracy or on-demand to adjust a sensor for a specific reading.
   */
  export interface CalibrationTupleResponseItem {
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
     * Unique identifier of the sensor to which this calibration data applies. This ID
     * can be used to obtain additional information on a sensor using the 'get by ID'
     * operation (e.g. /udl/sensor/{id}). For example, the sensor with idSensor = abc
     * would be queried as /udl/sensor/abc.
     */
    idSensor: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Calibration data span start time in ISO 8601 UTC format with millisecond
     * precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Sensor azimuth/right-ascension acceleration bias, in degrees per second squared.
     */
    azRaAccelBias?: number;

    /**
     * The standard deviation of the azimuth/right ascension acceleration residuals, in
     * degrees, used to determine the sensor azimuth/right-ascension acceleration bias.
     */
    azRaAccelSigma?: number;

    /**
     * Sensor azimuth/right-ascension bias, in degrees.
     */
    azRaBias?: number;

    /**
     * Sensor azimuth/right-ascension rate bias, in degrees per second.
     */
    azRaRateBias?: number;

    /**
     * The standard deviation of the azimuth/right ascension rate residuals, in
     * degrees, used to determine the sensor azimuth/right-ascension rate bias.
     */
    azRaRateSigma?: number;

    /**
     * The root mean square of the azimuth/right-ascension residuals, in degrees, used
     * to determine the sensor azimuth/right-ascension bias.
     */
    azRaRms?: number;

    /**
     * The standard deviation of the azimuth/right ascension residuals, in degrees,
     * used to determine the sensor azimuth/right-ascension bias.
     */
    azRaSigma?: number;

    /**
     * Specifies the calibration reference angle set for this calibration data set.
     * Azimuth and Elevation (AZEL) or Right Ascension and Declination (RADEC).
     */
    calAngleRef?: string;

    /**
     * Specifies that the calibration data are from INTRA_TRACK or INTER_TRACK
     * residuals.
     */
    calTrackMode?: string;

    /**
     * The basis of calibration values contained in this record (COMPUTED,
     * OPERATIONAL).
     */
    calType?: string;

    /**
     * The confidence noise bias of the duration span.
     */
    confidenceNoiseBias?: number;

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
     * Duration of the sensor calibration data which produced these values, measured in
     * days.
     */
    duration?: number;

    /**
     * Three element array, expressing the sensor location in Earth Centered Rotating
     * (ECR) coordinates, in kilometers. The array element order is [x, y, z].
     */
    ecr?: Array<number>;

    /**
     * Sensor elevation/declination acceleration bias, in degrees per second squared.
     */
    elDecAccelBias?: number;

    /**
     * The standard deviation of the elevation/declination acceleration residuals, in
     * degrees, used to determine the sensor elevation/declination acceleration bias.
     */
    elDecAccelSigma?: number;

    /**
     * Sensor elevation/declination bias, in degrees.
     */
    elDecBias?: number;

    /**
     * Sensor elevation/declination rate bias, in degrees per second.
     */
    elDecRateBias?: number;

    /**
     * The standard deviation of the elevation/declination rate residuals, in degrees,
     * used to determine the sensor elevation/declination rate bias.
     */
    elDecRateSigma?: number;

    /**
     * The root mean square of the elevation/declination residuals, in degrees, used to
     * determine the sensor elevation/declination bias.
     */
    elDecRms?: number;

    /**
     * The standard deviation of the elevation/declination residuals, in degrees, used
     * to determine the sensor elevation/declination bias.
     */
    elDecSigma?: number;

    /**
     * Calibration data span end time in ISO 8601 UTC format with millisecond
     * precision. If provided, the endTime must be greater than or equal to the
     * startTime in the SensorCalibration record.
     */
    endTime?: string;

    /**
     * The number of observables used in determining the azimuth or right-ascension
     * calibration values.
     */
    numAzRaObs?: number;

    /**
     * The number of observables used in determining the elevation or declination
     * calibration values.
     */
    numElDecObs?: number;

    /**
     * The total number of observables available over the calibration span.
     */
    numObs?: number;

    /**
     * The number of observables used in determining the photometric calibration
     * values.
     */
    numPhotoObs?: number;

    /**
     * The number of observables used in determining the range calibration values.
     */
    numRangeObs?: number;

    /**
     * The number of observables used in determining the range rate calibration values.
     */
    numRangeRateObs?: number;

    /**
     * The number of observables used in determining the radar cross section (RCS)
     * calibration values.
     */
    numRcsObs?: number;

    /**
     * The number of observables used in determining the time calibration values.
     */
    numTimeObs?: number;

    /**
     * The total number of tracks available over the calibration span.
     */
    numTracks?: number;

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
     * The sensor photometric observation magnitude bias, in visual magnitude.
     */
    photoBias?: number;

    /**
     * The standard deviation of the magnitude residuals, in visual magnitude, used to
     * determine the photometric bias.
     */
    photoSigma?: number;

    /**
     * Sensor range rate acceleration bias, in kilometers per second squared.
     */
    rangeAccelBias?: number;

    /**
     * The standard deviation of the range acceleration residuals, in kilometers per
     * second squared, used to determine the sensor range acceleration bias.
     */
    rangeAccelSigma?: number;

    /**
     * Sensor range bias, in kilometers.
     */
    rangeBias?: number;

    /**
     * Sensor range rate bias, in kilometers per second.
     */
    rangeRateBias?: number;

    /**
     * The root mean square of the range rate residuals, in kilometers per second, used
     * to determine the sensor range rate bias.
     */
    rangeRateRms?: number;

    /**
     * The standard deviation of the range rate residuals, in kilometers per second,
     * used to determine the sensor range rate bias.
     */
    rangeRateSigma?: number;

    /**
     * The root mean square of the range residuals, in kilometers, used to determine
     * the sensor range bias.
     */
    rangeRms?: number;

    /**
     * The standard deviation of the range residuals, in kilometers, used to determine
     * the sensor range bias.
     */
    rangeSigma?: number;

    /**
     * The sensor radar cross section (RCS) observation bias, in square meters.
     */
    rcsBias?: number;

    /**
     * The standard deviation of the radar cross section residuals, in square meters,
     * used to determine the radar cross section bias.
     */
    rcsSigma?: number;

    /**
     * Array of the catalog IDs of the reference targets used in the calibration.
     */
    refTargets?: Array<string>;

    /**
     * The reference type used in the calibration.
     */
    refType?: string;

    /**
     * The sensor type (MECHANICAL, OPTICAL, PHASED ARRAY, RF).
     */
    senType?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Sensor time bias, in seconds.
     */
    timeBias?: number;

    /**
     * The standard deviation of the time residuals, in seconds, used to determine the
     * sensor time bias.
     */
    timeBiasSigma?: number;
  }
}

export interface CalibrationCreateParams {
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
   * Unique identifier of the sensor to which this calibration data applies. This ID
   * can be used to obtain additional information on a sensor using the 'get by ID'
   * operation (e.g. /udl/sensor/{id}). For example, the sensor with idSensor = abc
   * would be queried as /udl/sensor/abc.
   */
  idSensor: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Calibration data span start time in ISO 8601 UTC format with millisecond
   * precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Sensor azimuth/right-ascension acceleration bias, in degrees per second squared.
   */
  azRaAccelBias?: number;

  /**
   * The standard deviation of the azimuth/right ascension acceleration residuals, in
   * degrees, used to determine the sensor azimuth/right-ascension acceleration bias.
   */
  azRaAccelSigma?: number;

  /**
   * Sensor azimuth/right-ascension bias, in degrees.
   */
  azRaBias?: number;

  /**
   * Sensor azimuth/right-ascension rate bias, in degrees per second.
   */
  azRaRateBias?: number;

  /**
   * The standard deviation of the azimuth/right ascension rate residuals, in
   * degrees, used to determine the sensor azimuth/right-ascension rate bias.
   */
  azRaRateSigma?: number;

  /**
   * The root mean square of the azimuth/right-ascension residuals, in degrees, used
   * to determine the sensor azimuth/right-ascension bias.
   */
  azRaRms?: number;

  /**
   * The standard deviation of the azimuth/right ascension residuals, in degrees,
   * used to determine the sensor azimuth/right-ascension bias.
   */
  azRaSigma?: number;

  /**
   * Specifies the calibration reference angle set for this calibration data set.
   * Azimuth and Elevation (AZEL) or Right Ascension and Declination (RADEC).
   */
  calAngleRef?: string;

  /**
   * Specifies that the calibration data are from INTRA_TRACK or INTER_TRACK
   * residuals.
   */
  calTrackMode?: string;

  /**
   * The basis of calibration values contained in this record (COMPUTED,
   * OPERATIONAL).
   */
  calType?: string;

  /**
   * The confidence noise bias of the duration span.
   */
  confidenceNoiseBias?: number;

  /**
   * Duration of the sensor calibration data which produced these values, measured in
   * days.
   */
  duration?: number;

  /**
   * Three element array, expressing the sensor location in Earth Centered Rotating
   * (ECR) coordinates, in kilometers. The array element order is [x, y, z].
   */
  ecr?: Array<number>;

  /**
   * Sensor elevation/declination acceleration bias, in degrees per second squared.
   */
  elDecAccelBias?: number;

  /**
   * The standard deviation of the elevation/declination acceleration residuals, in
   * degrees, used to determine the sensor elevation/declination acceleration bias.
   */
  elDecAccelSigma?: number;

  /**
   * Sensor elevation/declination bias, in degrees.
   */
  elDecBias?: number;

  /**
   * Sensor elevation/declination rate bias, in degrees per second.
   */
  elDecRateBias?: number;

  /**
   * The standard deviation of the elevation/declination rate residuals, in degrees,
   * used to determine the sensor elevation/declination rate bias.
   */
  elDecRateSigma?: number;

  /**
   * The root mean square of the elevation/declination residuals, in degrees, used to
   * determine the sensor elevation/declination bias.
   */
  elDecRms?: number;

  /**
   * The standard deviation of the elevation/declination residuals, in degrees, used
   * to determine the sensor elevation/declination bias.
   */
  elDecSigma?: number;

  /**
   * Calibration data span end time in ISO 8601 UTC format with millisecond
   * precision. If provided, the endTime must be greater than or equal to the
   * startTime in the SensorCalibration record.
   */
  endTime?: string;

  /**
   * The number of observables used in determining the azimuth or right-ascension
   * calibration values.
   */
  numAzRaObs?: number;

  /**
   * The number of observables used in determining the elevation or declination
   * calibration values.
   */
  numElDecObs?: number;

  /**
   * The total number of observables available over the calibration span.
   */
  numObs?: number;

  /**
   * The number of observables used in determining the photometric calibration
   * values.
   */
  numPhotoObs?: number;

  /**
   * The number of observables used in determining the range calibration values.
   */
  numRangeObs?: number;

  /**
   * The number of observables used in determining the range rate calibration values.
   */
  numRangeRateObs?: number;

  /**
   * The number of observables used in determining the radar cross section (RCS)
   * calibration values.
   */
  numRcsObs?: number;

  /**
   * The number of observables used in determining the time calibration values.
   */
  numTimeObs?: number;

  /**
   * The total number of tracks available over the calibration span.
   */
  numTracks?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The sensor photometric observation magnitude bias, in visual magnitude.
   */
  photoBias?: number;

  /**
   * The standard deviation of the magnitude residuals, in visual magnitude, used to
   * determine the photometric bias.
   */
  photoSigma?: number;

  /**
   * Sensor range rate acceleration bias, in kilometers per second squared.
   */
  rangeAccelBias?: number;

  /**
   * The standard deviation of the range acceleration residuals, in kilometers per
   * second squared, used to determine the sensor range acceleration bias.
   */
  rangeAccelSigma?: number;

  /**
   * Sensor range bias, in kilometers.
   */
  rangeBias?: number;

  /**
   * Sensor range rate bias, in kilometers per second.
   */
  rangeRateBias?: number;

  /**
   * The root mean square of the range rate residuals, in kilometers per second, used
   * to determine the sensor range rate bias.
   */
  rangeRateRms?: number;

  /**
   * The standard deviation of the range rate residuals, in kilometers per second,
   * used to determine the sensor range rate bias.
   */
  rangeRateSigma?: number;

  /**
   * The root mean square of the range residuals, in kilometers, used to determine
   * the sensor range bias.
   */
  rangeRms?: number;

  /**
   * The standard deviation of the range residuals, in kilometers, used to determine
   * the sensor range bias.
   */
  rangeSigma?: number;

  /**
   * The sensor radar cross section (RCS) observation bias, in square meters.
   */
  rcsBias?: number;

  /**
   * The standard deviation of the radar cross section residuals, in square meters,
   * used to determine the radar cross section bias.
   */
  rcsSigma?: number;

  /**
   * Array of the catalog IDs of the reference targets used in the calibration.
   */
  refTargets?: Array<string>;

  /**
   * The reference type used in the calibration.
   */
  refType?: string;

  /**
   * The sensor type (MECHANICAL, OPTICAL, PHASED ARRAY, RF).
   */
  senType?: string;

  /**
   * Sensor time bias, in seconds.
   */
  timeBias?: number;

  /**
   * The standard deviation of the time residuals, in seconds, used to determine the
   * sensor time bias.
   */
  timeBiasSigma?: number;
}

export interface CalibrationRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface CalibrationListParams extends OffsetPageParams {
  /**
   * Calibration data span start time in ISO 8601 UTC format with millisecond
   * precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime: string;
}

export interface CalibrationCountParams {
  /**
   * Calibration data span start time in ISO 8601 UTC format with millisecond
   * precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface CalibrationCreateBulkParams {
  body: Array<CalibrationCreateBulkParams.Body>;
}

export namespace CalibrationCreateBulkParams {
  /**
   * The Sensor Calibration service records data about a sensor's overall accuracy
   * and is used to adjust sensor settings to achieve and maintain that accuracy in
   * reported sensor observations. Calibration occurs periodically when needed to
   * maintain sensor accuracy or on-demand to adjust a sensor for a specific reading.
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
     * Unique identifier of the sensor to which this calibration data applies. This ID
     * can be used to obtain additional information on a sensor using the 'get by ID'
     * operation (e.g. /udl/sensor/{id}). For example, the sensor with idSensor = abc
     * would be queried as /udl/sensor/abc.
     */
    idSensor: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Calibration data span start time in ISO 8601 UTC format with millisecond
     * precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Sensor azimuth/right-ascension acceleration bias, in degrees per second squared.
     */
    azRaAccelBias?: number;

    /**
     * The standard deviation of the azimuth/right ascension acceleration residuals, in
     * degrees, used to determine the sensor azimuth/right-ascension acceleration bias.
     */
    azRaAccelSigma?: number;

    /**
     * Sensor azimuth/right-ascension bias, in degrees.
     */
    azRaBias?: number;

    /**
     * Sensor azimuth/right-ascension rate bias, in degrees per second.
     */
    azRaRateBias?: number;

    /**
     * The standard deviation of the azimuth/right ascension rate residuals, in
     * degrees, used to determine the sensor azimuth/right-ascension rate bias.
     */
    azRaRateSigma?: number;

    /**
     * The root mean square of the azimuth/right-ascension residuals, in degrees, used
     * to determine the sensor azimuth/right-ascension bias.
     */
    azRaRms?: number;

    /**
     * The standard deviation of the azimuth/right ascension residuals, in degrees,
     * used to determine the sensor azimuth/right-ascension bias.
     */
    azRaSigma?: number;

    /**
     * Specifies the calibration reference angle set for this calibration data set.
     * Azimuth and Elevation (AZEL) or Right Ascension and Declination (RADEC).
     */
    calAngleRef?: string;

    /**
     * Specifies that the calibration data are from INTRA_TRACK or INTER_TRACK
     * residuals.
     */
    calTrackMode?: string;

    /**
     * The basis of calibration values contained in this record (COMPUTED,
     * OPERATIONAL).
     */
    calType?: string;

    /**
     * The confidence noise bias of the duration span.
     */
    confidenceNoiseBias?: number;

    /**
     * Duration of the sensor calibration data which produced these values, measured in
     * days.
     */
    duration?: number;

    /**
     * Three element array, expressing the sensor location in Earth Centered Rotating
     * (ECR) coordinates, in kilometers. The array element order is [x, y, z].
     */
    ecr?: Array<number>;

    /**
     * Sensor elevation/declination acceleration bias, in degrees per second squared.
     */
    elDecAccelBias?: number;

    /**
     * The standard deviation of the elevation/declination acceleration residuals, in
     * degrees, used to determine the sensor elevation/declination acceleration bias.
     */
    elDecAccelSigma?: number;

    /**
     * Sensor elevation/declination bias, in degrees.
     */
    elDecBias?: number;

    /**
     * Sensor elevation/declination rate bias, in degrees per second.
     */
    elDecRateBias?: number;

    /**
     * The standard deviation of the elevation/declination rate residuals, in degrees,
     * used to determine the sensor elevation/declination rate bias.
     */
    elDecRateSigma?: number;

    /**
     * The root mean square of the elevation/declination residuals, in degrees, used to
     * determine the sensor elevation/declination bias.
     */
    elDecRms?: number;

    /**
     * The standard deviation of the elevation/declination residuals, in degrees, used
     * to determine the sensor elevation/declination bias.
     */
    elDecSigma?: number;

    /**
     * Calibration data span end time in ISO 8601 UTC format with millisecond
     * precision. If provided, the endTime must be greater than or equal to the
     * startTime in the SensorCalibration record.
     */
    endTime?: string;

    /**
     * The number of observables used in determining the azimuth or right-ascension
     * calibration values.
     */
    numAzRaObs?: number;

    /**
     * The number of observables used in determining the elevation or declination
     * calibration values.
     */
    numElDecObs?: number;

    /**
     * The total number of observables available over the calibration span.
     */
    numObs?: number;

    /**
     * The number of observables used in determining the photometric calibration
     * values.
     */
    numPhotoObs?: number;

    /**
     * The number of observables used in determining the range calibration values.
     */
    numRangeObs?: number;

    /**
     * The number of observables used in determining the range rate calibration values.
     */
    numRangeRateObs?: number;

    /**
     * The number of observables used in determining the radar cross section (RCS)
     * calibration values.
     */
    numRcsObs?: number;

    /**
     * The number of observables used in determining the time calibration values.
     */
    numTimeObs?: number;

    /**
     * The total number of tracks available over the calibration span.
     */
    numTracks?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The sensor photometric observation magnitude bias, in visual magnitude.
     */
    photoBias?: number;

    /**
     * The standard deviation of the magnitude residuals, in visual magnitude, used to
     * determine the photometric bias.
     */
    photoSigma?: number;

    /**
     * Sensor range rate acceleration bias, in kilometers per second squared.
     */
    rangeAccelBias?: number;

    /**
     * The standard deviation of the range acceleration residuals, in kilometers per
     * second squared, used to determine the sensor range acceleration bias.
     */
    rangeAccelSigma?: number;

    /**
     * Sensor range bias, in kilometers.
     */
    rangeBias?: number;

    /**
     * Sensor range rate bias, in kilometers per second.
     */
    rangeRateBias?: number;

    /**
     * The root mean square of the range rate residuals, in kilometers per second, used
     * to determine the sensor range rate bias.
     */
    rangeRateRms?: number;

    /**
     * The standard deviation of the range rate residuals, in kilometers per second,
     * used to determine the sensor range rate bias.
     */
    rangeRateSigma?: number;

    /**
     * The root mean square of the range residuals, in kilometers, used to determine
     * the sensor range bias.
     */
    rangeRms?: number;

    /**
     * The standard deviation of the range residuals, in kilometers, used to determine
     * the sensor range bias.
     */
    rangeSigma?: number;

    /**
     * The sensor radar cross section (RCS) observation bias, in square meters.
     */
    rcsBias?: number;

    /**
     * The standard deviation of the radar cross section residuals, in square meters,
     * used to determine the radar cross section bias.
     */
    rcsSigma?: number;

    /**
     * Array of the catalog IDs of the reference targets used in the calibration.
     */
    refTargets?: Array<string>;

    /**
     * The reference type used in the calibration.
     */
    refType?: string;

    /**
     * The sensor type (MECHANICAL, OPTICAL, PHASED ARRAY, RF).
     */
    senType?: string;

    /**
     * Sensor time bias, in seconds.
     */
    timeBias?: number;

    /**
     * The standard deviation of the time residuals, in seconds, used to determine the
     * sensor time bias.
     */
    timeBiasSigma?: number;
  }
}

export interface CalibrationTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Calibration data span start time in ISO 8601 UTC format with millisecond
   * precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface CalibrationUnvalidatedPublishParams {
  body: Array<CalibrationUnvalidatedPublishParams.Body>;
}

export namespace CalibrationUnvalidatedPublishParams {
  /**
   * The Sensor Calibration service records data about a sensor's overall accuracy
   * and is used to adjust sensor settings to achieve and maintain that accuracy in
   * reported sensor observations. Calibration occurs periodically when needed to
   * maintain sensor accuracy or on-demand to adjust a sensor for a specific reading.
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
     * Unique identifier of the sensor to which this calibration data applies. This ID
     * can be used to obtain additional information on a sensor using the 'get by ID'
     * operation (e.g. /udl/sensor/{id}). For example, the sensor with idSensor = abc
     * would be queried as /udl/sensor/abc.
     */
    idSensor: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Calibration data span start time in ISO 8601 UTC format with millisecond
     * precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Sensor azimuth/right-ascension acceleration bias, in degrees per second squared.
     */
    azRaAccelBias?: number;

    /**
     * The standard deviation of the azimuth/right ascension acceleration residuals, in
     * degrees, used to determine the sensor azimuth/right-ascension acceleration bias.
     */
    azRaAccelSigma?: number;

    /**
     * Sensor azimuth/right-ascension bias, in degrees.
     */
    azRaBias?: number;

    /**
     * Sensor azimuth/right-ascension rate bias, in degrees per second.
     */
    azRaRateBias?: number;

    /**
     * The standard deviation of the azimuth/right ascension rate residuals, in
     * degrees, used to determine the sensor azimuth/right-ascension rate bias.
     */
    azRaRateSigma?: number;

    /**
     * The root mean square of the azimuth/right-ascension residuals, in degrees, used
     * to determine the sensor azimuth/right-ascension bias.
     */
    azRaRms?: number;

    /**
     * The standard deviation of the azimuth/right ascension residuals, in degrees,
     * used to determine the sensor azimuth/right-ascension bias.
     */
    azRaSigma?: number;

    /**
     * Specifies the calibration reference angle set for this calibration data set.
     * Azimuth and Elevation (AZEL) or Right Ascension and Declination (RADEC).
     */
    calAngleRef?: string;

    /**
     * Specifies that the calibration data are from INTRA_TRACK or INTER_TRACK
     * residuals.
     */
    calTrackMode?: string;

    /**
     * The basis of calibration values contained in this record (COMPUTED,
     * OPERATIONAL).
     */
    calType?: string;

    /**
     * The confidence noise bias of the duration span.
     */
    confidenceNoiseBias?: number;

    /**
     * Duration of the sensor calibration data which produced these values, measured in
     * days.
     */
    duration?: number;

    /**
     * Three element array, expressing the sensor location in Earth Centered Rotating
     * (ECR) coordinates, in kilometers. The array element order is [x, y, z].
     */
    ecr?: Array<number>;

    /**
     * Sensor elevation/declination acceleration bias, in degrees per second squared.
     */
    elDecAccelBias?: number;

    /**
     * The standard deviation of the elevation/declination acceleration residuals, in
     * degrees, used to determine the sensor elevation/declination acceleration bias.
     */
    elDecAccelSigma?: number;

    /**
     * Sensor elevation/declination bias, in degrees.
     */
    elDecBias?: number;

    /**
     * Sensor elevation/declination rate bias, in degrees per second.
     */
    elDecRateBias?: number;

    /**
     * The standard deviation of the elevation/declination rate residuals, in degrees,
     * used to determine the sensor elevation/declination rate bias.
     */
    elDecRateSigma?: number;

    /**
     * The root mean square of the elevation/declination residuals, in degrees, used to
     * determine the sensor elevation/declination bias.
     */
    elDecRms?: number;

    /**
     * The standard deviation of the elevation/declination residuals, in degrees, used
     * to determine the sensor elevation/declination bias.
     */
    elDecSigma?: number;

    /**
     * Calibration data span end time in ISO 8601 UTC format with millisecond
     * precision. If provided, the endTime must be greater than or equal to the
     * startTime in the SensorCalibration record.
     */
    endTime?: string;

    /**
     * The number of observables used in determining the azimuth or right-ascension
     * calibration values.
     */
    numAzRaObs?: number;

    /**
     * The number of observables used in determining the elevation or declination
     * calibration values.
     */
    numElDecObs?: number;

    /**
     * The total number of observables available over the calibration span.
     */
    numObs?: number;

    /**
     * The number of observables used in determining the photometric calibration
     * values.
     */
    numPhotoObs?: number;

    /**
     * The number of observables used in determining the range calibration values.
     */
    numRangeObs?: number;

    /**
     * The number of observables used in determining the range rate calibration values.
     */
    numRangeRateObs?: number;

    /**
     * The number of observables used in determining the radar cross section (RCS)
     * calibration values.
     */
    numRcsObs?: number;

    /**
     * The number of observables used in determining the time calibration values.
     */
    numTimeObs?: number;

    /**
     * The total number of tracks available over the calibration span.
     */
    numTracks?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The sensor photometric observation magnitude bias, in visual magnitude.
     */
    photoBias?: number;

    /**
     * The standard deviation of the magnitude residuals, in visual magnitude, used to
     * determine the photometric bias.
     */
    photoSigma?: number;

    /**
     * Sensor range rate acceleration bias, in kilometers per second squared.
     */
    rangeAccelBias?: number;

    /**
     * The standard deviation of the range acceleration residuals, in kilometers per
     * second squared, used to determine the sensor range acceleration bias.
     */
    rangeAccelSigma?: number;

    /**
     * Sensor range bias, in kilometers.
     */
    rangeBias?: number;

    /**
     * Sensor range rate bias, in kilometers per second.
     */
    rangeRateBias?: number;

    /**
     * The root mean square of the range rate residuals, in kilometers per second, used
     * to determine the sensor range rate bias.
     */
    rangeRateRms?: number;

    /**
     * The standard deviation of the range rate residuals, in kilometers per second,
     * used to determine the sensor range rate bias.
     */
    rangeRateSigma?: number;

    /**
     * The root mean square of the range residuals, in kilometers, used to determine
     * the sensor range bias.
     */
    rangeRms?: number;

    /**
     * The standard deviation of the range residuals, in kilometers, used to determine
     * the sensor range bias.
     */
    rangeSigma?: number;

    /**
     * The sensor radar cross section (RCS) observation bias, in square meters.
     */
    rcsBias?: number;

    /**
     * The standard deviation of the radar cross section residuals, in square meters,
     * used to determine the radar cross section bias.
     */
    rcsSigma?: number;

    /**
     * Array of the catalog IDs of the reference targets used in the calibration.
     */
    refTargets?: Array<string>;

    /**
     * The reference type used in the calibration.
     */
    refType?: string;

    /**
     * The sensor type (MECHANICAL, OPTICAL, PHASED ARRAY, RF).
     */
    senType?: string;

    /**
     * Sensor time bias, in seconds.
     */
    timeBias?: number;

    /**
     * The standard deviation of the time residuals, in seconds, used to determine the
     * sensor time bias.
     */
    timeBiasSigma?: number;
  }
}

Calibration.History = History;

export declare namespace Calibration {
  export {
    type CalibrationRetrieveResponse as CalibrationRetrieveResponse,
    type CalibrationListResponse as CalibrationListResponse,
    type CalibrationCountResponse as CalibrationCountResponse,
    type CalibrationQueryHelpResponse as CalibrationQueryHelpResponse,
    type CalibrationTupleResponse as CalibrationTupleResponse,
    type CalibrationListResponsesOffsetPage as CalibrationListResponsesOffsetPage,
    type CalibrationCreateParams as CalibrationCreateParams,
    type CalibrationRetrieveParams as CalibrationRetrieveParams,
    type CalibrationListParams as CalibrationListParams,
    type CalibrationCountParams as CalibrationCountParams,
    type CalibrationCreateBulkParams as CalibrationCreateBulkParams,
    type CalibrationTupleParams as CalibrationTupleParams,
    type CalibrationUnvalidatedPublishParams as CalibrationUnvalidatedPublishParams,
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
