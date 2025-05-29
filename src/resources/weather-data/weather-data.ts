// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  WeatherDataFull,
  WeatherDataFullsOffsetPage,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class WeatherData extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single WeatherData as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.weatherData.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   obTime: '2018-01-01T16:00:00.123456Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: WeatherDataCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/weatherdata', {
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
   * for await (const weatherDataListResponse of client.weatherData.list(
   *   { obTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: WeatherDataListParams,
    options?: RequestOptions,
  ): PagePromise<WeatherDataListResponsesOffsetPage, WeatherDataListResponse> {
    return this._client.getAPIList('/udl/weatherdata', OffsetPage<WeatherDataListResponse>, {
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
   * const response = await client.weatherData.count({
   *   obTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: WeatherDataCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/weatherdata/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to take multiple WeatherData as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.weatherData.createBulk({
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
  createBulk(params: WeatherDataCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/weatherdata/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single WeatherData by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const weatherDataFull = await client.weatherData.get('id');
   * ```
   */
  get(
    id: string,
    query: WeatherDataGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryAPI.WeatherDataFull> {
    return this._client.get(path`/udl/weatherdata/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.weatherData.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<WeatherDataQueryhelpResponse> {
    return this._client.get('/udl/weatherdata/queryhelp', options);
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
   * const weatherDataFulls = await client.weatherData.tuple({
   *   columns: 'columns',
   *   obTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: WeatherDataTupleParams, options?: RequestOptions): APIPromise<WeatherDataTupleResponse> {
    return this._client.get('/udl/weatherdata/tuple', { query, ...options });
  }

  /**
   * Service operation to take a list of WeatherData as a POST body and ingest into
   * the database. This operation is intended to be used for automated feeds into
   * UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.weatherData.unvalidatedPublish({
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
  unvalidatedPublish(
    params: WeatherDataUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-weatherdata', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type WeatherDataListResponsesOffsetPage = OffsetPage<WeatherDataListResponse>;

/**
 * These services provide for posting and querying Weather Data. Weather Data
 * integrates dynamic data measured by Doppler/CG such as signal power and noise
 * levels, to produce useful weather information.
 */
export interface WeatherDataListResponse {
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
   * Datetime of the weather observation in ISO 8601 UTC datetime format with
   * microsecond precision.
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
   * Angle of orientation of the 50% positional confidence ellipse, in degrees
   * clockwise from true north.
   */
  angleOrientation?: number;

  /**
   * Average power of the reflected signal received by the radar, in Watts.
   */
  avgRefPwr?: number;

  /**
   * Average transmitted power of the radar, in kilowatts.
   */
  avgTxPwr?: number;

  /**
   * Checksum value for the data.
   */
  checksum?: number;

  /**
   * Array of the number(s) of measurements used in coherent integrations used for
   * radar data processing. Users should consult the data provider for information on
   * the coherent integrations array structure.
   */
  coIntegs?: Array<number>;

  /**
   * Array of the number(s) of records in consensus for a radar beam. Users should
   * consult the data provider for information on the consensus records array
   * structure.
   */
  consRecs?: Array<number>;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * Array of full scale Nyquist Doppler velocities measured by radar, in meters per
   * second. Nyquist velocity refers to the maximum velocity magnitude that the radar
   * system can unambiguously detect. Doppler velocities with absolute values
   * exceeding the Nyquist threshold suffer from aliasing at the time of collection.
   * Users should consult the data provider for information on the doppler velocities
   * array structure.
   */
  doppVels?: Array<number>;

  /**
   * Datetime the system files were created.
   */
  fileCreation?: string;

  /**
   * Array of average maximum number(s) of consecutive instances in which the same
   * first guess velocity is used in radar data processing to estimate wind speed.
   * Users should consult the data provider for information on the first guess
   * averages array structure.
   */
  firstGuessAvgs?: Array<number>;

  /**
   * Unique identifier of the sensor making the weather measurement.
   */
  idSensor?: string;

  /**
   * Array of the elapsed time(s) from the beginning of one pulse to the beginning of
   * the next pulse for a radar beam, in microseconds. Users should consult the data
   * provider for information on the interpulse periods array structure.
   */
  interpulsePeriods?: Array<number>;

  /**
   * Array of sensor(s) that participated in the lightning event location
   * determination.
   */
  lightDetSensors?: Array<number>;

  /**
   * Number of sensors used in the lightning event location solution.
   */
  lightEventNum?: number;

  /**
   * Array of noise level(s) measured by radar, in decibels. Users should consult the
   * data provider for information on the noise levels array structure.
   */
  noiseLvls?: Array<number>;

  /**
   * Number of antennas across all sectors within the radar coverage area.
   */
  numElements?: number;

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
   * Optional identifier provided by the record source. This may be an internal
   * identifier and not necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * The positional confidence of the calculated lightning event location using the
   * chi-square statistical method.
   */
  posConfidence?: number;

  /**
   * Quality control flag value, as defined by the data provider.
   */
  qcValue?: number;

  /**
   * Number of sectors within the radar coverage area, each containing a number of
   * antennas.
   */
  sectorNum?: number;

  /**
   * Semi-major axis of the 50% positional confidence ellipse, in kilometers.
   */
  semiMajorAxis?: number;

  /**
   * Semi-minor axis of the 50% positional confidence ellipse, in kilometers.
   */
  semiMinorAxis?: number;

  /**
   * Array of signal power(s) measured by the sensor, in decibels. Users should
   * consult the data provider for information on the signal powers array structure.
   */
  sigPwrs?: Array<number>;

  /**
   * Signal strength of the electromagnetic energy received due to a lightning event,
   * in kiloamps.
   */
  sigStrength?: number;

  /**
   * Array of signal to noise ratio(s) for a radar beam, in decibels. Users should
   * consult the data provider for information on the signal to noise ratios array
   * structure.
   */
  snrs?: Array<number>;

  /**
   * Array of the number(s) of spectral averages used in radar data processing. Users
   * should consult the data provider for information on the spectral averages array
   * structure.
   */
  specAvgs?: Array<number>;

  /**
   * Array of width(s) of the distribution in Doppler velocity measured by radar, in
   * meters/second. Spectral width depends on the particle size distribution, the
   * wind shear across the radar beam, and turbulence. Users should consult the data
   * provider for information on the spectral widths array structure.
   */
  specWidths?: Array<number>;

  /**
   * Array of UUID(s) of the UDL data record(s) that are related to this WeatherData
   * record. See the associated 'srcTyps' array for the specific types of data,
   * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size. See the corresponding srcTyps array element
   * for the data type of the UUID and use the appropriate API operation to retrieve
   * that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (SENSOR, WEATHERREPORT) that are related to this
   * WeatherData record. See the associated 'srcIds' array for the record UUIDs,
   * positionally corresponding to the record types in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * Array of the number(s) of radar samples used in time domain averaging for radar
   * data processing. Time domain averaging improves the quality of the measured
   * signal by reducing random noise and enhancing the signal-to-noise ratio. Users
   * should consult the data provider for information on the time domain sample
   * numbers array structure.
   */
  tdAvgSampleNums?: Array<number>;

  /**
   * Last altitude with recorded measurements in this record, in meters.
   */
  termAlt?: number;
}

export type WeatherDataCountResponse = string;

export interface WeatherDataQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<WeatherDataQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace WeatherDataQueryhelpResponse {
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

export type WeatherDataTupleResponse = Array<HistoryAPI.WeatherDataFull>;

export interface WeatherDataCreateParams {
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
   * Datetime of the weather observation in ISO 8601 UTC datetime format with
   * microsecond precision.
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
   * Angle of orientation of the 50% positional confidence ellipse, in degrees
   * clockwise from true north.
   */
  angleOrientation?: number;

  /**
   * Average power of the reflected signal received by the radar, in Watts.
   */
  avgRefPwr?: number;

  /**
   * Average transmitted power of the radar, in kilowatts.
   */
  avgTxPwr?: number;

  /**
   * Checksum value for the data.
   */
  checksum?: number;

  /**
   * Array of the number(s) of measurements used in coherent integrations used for
   * radar data processing. Users should consult the data provider for information on
   * the coherent integrations array structure.
   */
  coIntegs?: Array<number>;

  /**
   * Array of the number(s) of records in consensus for a radar beam. Users should
   * consult the data provider for information on the consensus records array
   * structure.
   */
  consRecs?: Array<number>;

  /**
   * Array of full scale Nyquist Doppler velocities measured by radar, in meters per
   * second. Nyquist velocity refers to the maximum velocity magnitude that the radar
   * system can unambiguously detect. Doppler velocities with absolute values
   * exceeding the Nyquist threshold suffer from aliasing at the time of collection.
   * Users should consult the data provider for information on the doppler velocities
   * array structure.
   */
  doppVels?: Array<number>;

  /**
   * Datetime the system files were created.
   */
  fileCreation?: string;

  /**
   * Array of average maximum number(s) of consecutive instances in which the same
   * first guess velocity is used in radar data processing to estimate wind speed.
   * Users should consult the data provider for information on the first guess
   * averages array structure.
   */
  firstGuessAvgs?: Array<number>;

  /**
   * Unique identifier of the sensor making the weather measurement.
   */
  idSensor?: string;

  /**
   * Array of the elapsed time(s) from the beginning of one pulse to the beginning of
   * the next pulse for a radar beam, in microseconds. Users should consult the data
   * provider for information on the interpulse periods array structure.
   */
  interpulsePeriods?: Array<number>;

  /**
   * Array of sensor(s) that participated in the lightning event location
   * determination.
   */
  lightDetSensors?: Array<number>;

  /**
   * Number of sensors used in the lightning event location solution.
   */
  lightEventNum?: number;

  /**
   * Array of noise level(s) measured by radar, in decibels. Users should consult the
   * data provider for information on the noise levels array structure.
   */
  noiseLvls?: Array<number>;

  /**
   * Number of antennas across all sectors within the radar coverage area.
   */
  numElements?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by the record source. This may be an internal
   * identifier and not necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * The positional confidence of the calculated lightning event location using the
   * chi-square statistical method.
   */
  posConfidence?: number;

  /**
   * Quality control flag value, as defined by the data provider.
   */
  qcValue?: number;

  /**
   * Number of sectors within the radar coverage area, each containing a number of
   * antennas.
   */
  sectorNum?: number;

  /**
   * Semi-major axis of the 50% positional confidence ellipse, in kilometers.
   */
  semiMajorAxis?: number;

  /**
   * Semi-minor axis of the 50% positional confidence ellipse, in kilometers.
   */
  semiMinorAxis?: number;

  /**
   * Array of signal power(s) measured by the sensor, in decibels. Users should
   * consult the data provider for information on the signal powers array structure.
   */
  sigPwrs?: Array<number>;

  /**
   * Signal strength of the electromagnetic energy received due to a lightning event,
   * in kiloamps.
   */
  sigStrength?: number;

  /**
   * Array of signal to noise ratio(s) for a radar beam, in decibels. Users should
   * consult the data provider for information on the signal to noise ratios array
   * structure.
   */
  snrs?: Array<number>;

  /**
   * Array of the number(s) of spectral averages used in radar data processing. Users
   * should consult the data provider for information on the spectral averages array
   * structure.
   */
  specAvgs?: Array<number>;

  /**
   * Array of width(s) of the distribution in Doppler velocity measured by radar, in
   * meters/second. Spectral width depends on the particle size distribution, the
   * wind shear across the radar beam, and turbulence. Users should consult the data
   * provider for information on the spectral widths array structure.
   */
  specWidths?: Array<number>;

  /**
   * Array of UUID(s) of the UDL data record(s) that are related to this WeatherData
   * record. See the associated 'srcTyps' array for the specific types of data,
   * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size. See the corresponding srcTyps array element
   * for the data type of the UUID and use the appropriate API operation to retrieve
   * that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (SENSOR, WEATHERREPORT) that are related to this
   * WeatherData record. See the associated 'srcIds' array for the record UUIDs,
   * positionally corresponding to the record types in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * Array of the number(s) of radar samples used in time domain averaging for radar
   * data processing. Time domain averaging improves the quality of the measured
   * signal by reducing random noise and enhancing the signal-to-noise ratio. Users
   * should consult the data provider for information on the time domain sample
   * numbers array structure.
   */
  tdAvgSampleNums?: Array<number>;

  /**
   * Last altitude with recorded measurements in this record, in meters.
   */
  termAlt?: number;
}

export interface WeatherDataListParams extends OffsetPageParams {
  /**
   * Datetime of the weather observation in ISO 8601 UTC datetime format with
   * microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;
}

export interface WeatherDataCountParams {
  /**
   * Datetime of the weather observation in ISO 8601 UTC datetime format with
   * microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface WeatherDataCreateBulkParams {
  body: Array<WeatherDataCreateBulkParams.Body>;
}

export namespace WeatherDataCreateBulkParams {
  /**
   * These services provide for posting and querying Weather Data. Weather Data
   * integrates dynamic data measured by Doppler/CG such as signal power and noise
   * levels, to produce useful weather information.
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
     * Datetime of the weather observation in ISO 8601 UTC datetime format with
     * microsecond precision.
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
     * Angle of orientation of the 50% positional confidence ellipse, in degrees
     * clockwise from true north.
     */
    angleOrientation?: number;

    /**
     * Average power of the reflected signal received by the radar, in Watts.
     */
    avgRefPwr?: number;

    /**
     * Average transmitted power of the radar, in kilowatts.
     */
    avgTxPwr?: number;

    /**
     * Checksum value for the data.
     */
    checksum?: number;

    /**
     * Array of the number(s) of measurements used in coherent integrations used for
     * radar data processing. Users should consult the data provider for information on
     * the coherent integrations array structure.
     */
    coIntegs?: Array<number>;

    /**
     * Array of the number(s) of records in consensus for a radar beam. Users should
     * consult the data provider for information on the consensus records array
     * structure.
     */
    consRecs?: Array<number>;

    /**
     * Array of full scale Nyquist Doppler velocities measured by radar, in meters per
     * second. Nyquist velocity refers to the maximum velocity magnitude that the radar
     * system can unambiguously detect. Doppler velocities with absolute values
     * exceeding the Nyquist threshold suffer from aliasing at the time of collection.
     * Users should consult the data provider for information on the doppler velocities
     * array structure.
     */
    doppVels?: Array<number>;

    /**
     * Datetime the system files were created.
     */
    fileCreation?: string;

    /**
     * Array of average maximum number(s) of consecutive instances in which the same
     * first guess velocity is used in radar data processing to estimate wind speed.
     * Users should consult the data provider for information on the first guess
     * averages array structure.
     */
    firstGuessAvgs?: Array<number>;

    /**
     * Unique identifier of the sensor making the weather measurement.
     */
    idSensor?: string;

    /**
     * Array of the elapsed time(s) from the beginning of one pulse to the beginning of
     * the next pulse for a radar beam, in microseconds. Users should consult the data
     * provider for information on the interpulse periods array structure.
     */
    interpulsePeriods?: Array<number>;

    /**
     * Array of sensor(s) that participated in the lightning event location
     * determination.
     */
    lightDetSensors?: Array<number>;

    /**
     * Number of sensors used in the lightning event location solution.
     */
    lightEventNum?: number;

    /**
     * Array of noise level(s) measured by radar, in decibels. Users should consult the
     * data provider for information on the noise levels array structure.
     */
    noiseLvls?: Array<number>;

    /**
     * Number of antennas across all sectors within the radar coverage area.
     */
    numElements?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the record source. This may be an internal
     * identifier and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * The positional confidence of the calculated lightning event location using the
     * chi-square statistical method.
     */
    posConfidence?: number;

    /**
     * Quality control flag value, as defined by the data provider.
     */
    qcValue?: number;

    /**
     * Number of sectors within the radar coverage area, each containing a number of
     * antennas.
     */
    sectorNum?: number;

    /**
     * Semi-major axis of the 50% positional confidence ellipse, in kilometers.
     */
    semiMajorAxis?: number;

    /**
     * Semi-minor axis of the 50% positional confidence ellipse, in kilometers.
     */
    semiMinorAxis?: number;

    /**
     * Array of signal power(s) measured by the sensor, in decibels. Users should
     * consult the data provider for information on the signal powers array structure.
     */
    sigPwrs?: Array<number>;

    /**
     * Signal strength of the electromagnetic energy received due to a lightning event,
     * in kiloamps.
     */
    sigStrength?: number;

    /**
     * Array of signal to noise ratio(s) for a radar beam, in decibels. Users should
     * consult the data provider for information on the signal to noise ratios array
     * structure.
     */
    snrs?: Array<number>;

    /**
     * Array of the number(s) of spectral averages used in radar data processing. Users
     * should consult the data provider for information on the spectral averages array
     * structure.
     */
    specAvgs?: Array<number>;

    /**
     * Array of width(s) of the distribution in Doppler velocity measured by radar, in
     * meters/second. Spectral width depends on the particle size distribution, the
     * wind shear across the radar beam, and turbulence. Users should consult the data
     * provider for information on the spectral widths array structure.
     */
    specWidths?: Array<number>;

    /**
     * Array of UUID(s) of the UDL data record(s) that are related to this WeatherData
     * record. See the associated 'srcTyps' array for the specific types of data,
     * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
     * 'srcIds' arrays must match in size. See the corresponding srcTyps array element
     * for the data type of the UUID and use the appropriate API operation to retrieve
     * that object.
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (SENSOR, WEATHERREPORT) that are related to this
     * WeatherData record. See the associated 'srcIds' array for the record UUIDs,
     * positionally corresponding to the record types in this array. The 'srcTyps' and
     * 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * Array of the number(s) of radar samples used in time domain averaging for radar
     * data processing. Time domain averaging improves the quality of the measured
     * signal by reducing random noise and enhancing the signal-to-noise ratio. Users
     * should consult the data provider for information on the time domain sample
     * numbers array structure.
     */
    tdAvgSampleNums?: Array<number>;

    /**
     * Last altitude with recorded measurements in this record, in meters.
     */
    termAlt?: number;
  }
}

export interface WeatherDataGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface WeatherDataTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Datetime of the weather observation in ISO 8601 UTC datetime format with
   * microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface WeatherDataUnvalidatedPublishParams {
  body: Array<WeatherDataUnvalidatedPublishParams.Body>;
}

export namespace WeatherDataUnvalidatedPublishParams {
  /**
   * These services provide for posting and querying Weather Data. Weather Data
   * integrates dynamic data measured by Doppler/CG such as signal power and noise
   * levels, to produce useful weather information.
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
     * Datetime of the weather observation in ISO 8601 UTC datetime format with
     * microsecond precision.
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
     * Angle of orientation of the 50% positional confidence ellipse, in degrees
     * clockwise from true north.
     */
    angleOrientation?: number;

    /**
     * Average power of the reflected signal received by the radar, in Watts.
     */
    avgRefPwr?: number;

    /**
     * Average transmitted power of the radar, in kilowatts.
     */
    avgTxPwr?: number;

    /**
     * Checksum value for the data.
     */
    checksum?: number;

    /**
     * Array of the number(s) of measurements used in coherent integrations used for
     * radar data processing. Users should consult the data provider for information on
     * the coherent integrations array structure.
     */
    coIntegs?: Array<number>;

    /**
     * Array of the number(s) of records in consensus for a radar beam. Users should
     * consult the data provider for information on the consensus records array
     * structure.
     */
    consRecs?: Array<number>;

    /**
     * Array of full scale Nyquist Doppler velocities measured by radar, in meters per
     * second. Nyquist velocity refers to the maximum velocity magnitude that the radar
     * system can unambiguously detect. Doppler velocities with absolute values
     * exceeding the Nyquist threshold suffer from aliasing at the time of collection.
     * Users should consult the data provider for information on the doppler velocities
     * array structure.
     */
    doppVels?: Array<number>;

    /**
     * Datetime the system files were created.
     */
    fileCreation?: string;

    /**
     * Array of average maximum number(s) of consecutive instances in which the same
     * first guess velocity is used in radar data processing to estimate wind speed.
     * Users should consult the data provider for information on the first guess
     * averages array structure.
     */
    firstGuessAvgs?: Array<number>;

    /**
     * Unique identifier of the sensor making the weather measurement.
     */
    idSensor?: string;

    /**
     * Array of the elapsed time(s) from the beginning of one pulse to the beginning of
     * the next pulse for a radar beam, in microseconds. Users should consult the data
     * provider for information on the interpulse periods array structure.
     */
    interpulsePeriods?: Array<number>;

    /**
     * Array of sensor(s) that participated in the lightning event location
     * determination.
     */
    lightDetSensors?: Array<number>;

    /**
     * Number of sensors used in the lightning event location solution.
     */
    lightEventNum?: number;

    /**
     * Array of noise level(s) measured by radar, in decibels. Users should consult the
     * data provider for information on the noise levels array structure.
     */
    noiseLvls?: Array<number>;

    /**
     * Number of antennas across all sectors within the radar coverage area.
     */
    numElements?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the record source. This may be an internal
     * identifier and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * The positional confidence of the calculated lightning event location using the
     * chi-square statistical method.
     */
    posConfidence?: number;

    /**
     * Quality control flag value, as defined by the data provider.
     */
    qcValue?: number;

    /**
     * Number of sectors within the radar coverage area, each containing a number of
     * antennas.
     */
    sectorNum?: number;

    /**
     * Semi-major axis of the 50% positional confidence ellipse, in kilometers.
     */
    semiMajorAxis?: number;

    /**
     * Semi-minor axis of the 50% positional confidence ellipse, in kilometers.
     */
    semiMinorAxis?: number;

    /**
     * Array of signal power(s) measured by the sensor, in decibels. Users should
     * consult the data provider for information on the signal powers array structure.
     */
    sigPwrs?: Array<number>;

    /**
     * Signal strength of the electromagnetic energy received due to a lightning event,
     * in kiloamps.
     */
    sigStrength?: number;

    /**
     * Array of signal to noise ratio(s) for a radar beam, in decibels. Users should
     * consult the data provider for information on the signal to noise ratios array
     * structure.
     */
    snrs?: Array<number>;

    /**
     * Array of the number(s) of spectral averages used in radar data processing. Users
     * should consult the data provider for information on the spectral averages array
     * structure.
     */
    specAvgs?: Array<number>;

    /**
     * Array of width(s) of the distribution in Doppler velocity measured by radar, in
     * meters/second. Spectral width depends on the particle size distribution, the
     * wind shear across the radar beam, and turbulence. Users should consult the data
     * provider for information on the spectral widths array structure.
     */
    specWidths?: Array<number>;

    /**
     * Array of UUID(s) of the UDL data record(s) that are related to this WeatherData
     * record. See the associated 'srcTyps' array for the specific types of data,
     * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
     * 'srcIds' arrays must match in size. See the corresponding srcTyps array element
     * for the data type of the UUID and use the appropriate API operation to retrieve
     * that object.
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (SENSOR, WEATHERREPORT) that are related to this
     * WeatherData record. See the associated 'srcIds' array for the record UUIDs,
     * positionally corresponding to the record types in this array. The 'srcTyps' and
     * 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * Array of the number(s) of radar samples used in time domain averaging for radar
     * data processing. Time domain averaging improves the quality of the measured
     * signal by reducing random noise and enhancing the signal-to-noise ratio. Users
     * should consult the data provider for information on the time domain sample
     * numbers array structure.
     */
    tdAvgSampleNums?: Array<number>;

    /**
     * Last altitude with recorded measurements in this record, in meters.
     */
    termAlt?: number;
  }
}

WeatherData.History = History;

export declare namespace WeatherData {
  export {
    type WeatherDataListResponse as WeatherDataListResponse,
    type WeatherDataCountResponse as WeatherDataCountResponse,
    type WeatherDataQueryhelpResponse as WeatherDataQueryhelpResponse,
    type WeatherDataTupleResponse as WeatherDataTupleResponse,
    type WeatherDataListResponsesOffsetPage as WeatherDataListResponsesOffsetPage,
    type WeatherDataCreateParams as WeatherDataCreateParams,
    type WeatherDataListParams as WeatherDataListParams,
    type WeatherDataCountParams as WeatherDataCountParams,
    type WeatherDataCreateBulkParams as WeatherDataCreateBulkParams,
    type WeatherDataGetParams as WeatherDataGetParams,
    type WeatherDataTupleParams as WeatherDataTupleParams,
    type WeatherDataUnvalidatedPublishParams as WeatherDataUnvalidatedPublishParams,
  };

  export {
    History as History,
    type WeatherDataFull as WeatherDataFull,
    type HistoryCountResponse as HistoryCountResponse,
    type WeatherDataFullsOffsetPage as WeatherDataFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
