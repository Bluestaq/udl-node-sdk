// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
  WeatherDataFull,
} from './history';

export class Weatherdata extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single WeatherData as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  create(body: WeatherdataCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/weatherdata', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: WeatherdataListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WeatherdataListResponse> {
    return this._client.get('/udl/weatherdata', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: WeatherdataCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/weatherdata/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to take multiple WeatherData as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  createBulk(body: WeatherdataCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/weatherdata/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single WeatherData by its unique ID passed as a path
   * parameter.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<HistoryAPI.WeatherDataFull> {
    return this._client.get(`/udl/weatherdata/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/weatherdata/queryhelp', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
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
    query: WeatherdataTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WeatherdataTupleResponse> {
    return this._client.get('/udl/weatherdata/tuple', { query, ...options });
  }

  /**
   * Service operation to take a list of WeatherData as a POST body and ingest into
   * the database. This operation is intended to be used for automated feeds into
   * UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  unvalidatedPublish(
    body: WeatherdataUnvalidatedPublishParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/filedrop/udl-weatherdata', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type WeatherdataListResponse = Array<WeatherdataListResponse.WeatherdataListResponseItem>;

export namespace WeatherdataListResponse {
  /**
   * These services provide for posting and querying Weather Data. Weather Data
   * integrates dynamic data measured by Doppler/CG such as signal power and noise
   * levels, to produce useful weather information.
   */
  export interface WeatherdataListResponseItem {
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
}

export type WeatherdataCountResponse = string;

export type WeatherdataTupleResponse = Array<HistoryAPI.WeatherDataFull>;

export interface WeatherdataCreateParams {
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

export interface WeatherdataListParams {
  /**
   * Datetime of the weather observation in ISO 8601 UTC datetime format with
   * microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;
}

export interface WeatherdataCountParams {
  /**
   * Datetime of the weather observation in ISO 8601 UTC datetime format with
   * microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;
}

export type WeatherdataCreateBulkParams = Array<WeatherdataCreateBulkParams.Body>;

export namespace WeatherdataCreateBulkParams {
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

export interface WeatherdataTupleParams {
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
}

export type WeatherdataUnvalidatedPublishParams = Array<WeatherdataUnvalidatedPublishParams.Body>;

export namespace WeatherdataUnvalidatedPublishParams {
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

Weatherdata.History = History;

export declare namespace Weatherdata {
  export {
    type WeatherdataListResponse as WeatherdataListResponse,
    type WeatherdataCountResponse as WeatherdataCountResponse,
    type WeatherdataTupleResponse as WeatherdataTupleResponse,
    type WeatherdataCreateParams as WeatherdataCreateParams,
    type WeatherdataListParams as WeatherdataListParams,
    type WeatherdataCountParams as WeatherdataCountParams,
    type WeatherdataCreateBulkParams as WeatherdataCreateBulkParams,
    type WeatherdataTupleParams as WeatherdataTupleParams,
    type WeatherdataUnvalidatedPublishParams as WeatherdataUnvalidatedPublishParams,
  };

  export {
    History as History,
    type WeatherDataFull as WeatherDataFull,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
