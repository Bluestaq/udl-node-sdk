// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as HistoryAPI from './history';
import { History, HistoryAodrParams, HistoryListParams } from './history';
import { APIPromise } from '../../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';

export class Diffofarrival extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single TDOA/FDOA record as a POST body and ingest
   * into the database. This operation is not intended to be used for automated feeds
   * into UDL. Data providers should contact the UDL team for specific role
   * assignments and for instructions on setting up a permanent feed through an
   * alternate mechanism.
   *
   * @example
   * ```ts
   * await client.tdoaFdoa.diffofarrival.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   obTime: '2018-01-01T16:00:00.123456Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: DiffofarrivalCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/diffofarrival', {
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
   * for await (const diffofarrivalAbridged of client.tdoaFdoa.diffofarrival.list(
   *   { obTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DiffofarrivalListParams,
    options?: RequestOptions,
  ): PagePromise<DiffofarrivalAbridgedsOffsetPage, DiffofarrivalAbridged> {
    return this._client.getAPIList('/udl/diffofarrival', OffsetPage<DiffofarrivalAbridged>, {
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
   * const response = await client.tdoaFdoa.diffofarrival.count({
   *   obTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: DiffofarrivalCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/diffofarrival/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * TDOA/FDOA records as a POST body and ingest into the database. This operation is
   * not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.tdoaFdoa.diffofarrival.createBulk({
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
  createBulk(params: DiffofarrivalCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/diffofarrival/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type DiffofarrivalAbridgedsOffsetPage = OffsetPage<DiffofarrivalAbridged>;

export type DiffofarrivalFullsOffsetPage = OffsetPage<DiffofarrivalFull>;

/**
 * Model representation of Signal time and frequency difference of arrival
 * (TDOA/FDOA) information obtained by using passive RF based sensor
 * phenomenologies and sensor triangulation.
 */
export interface DiffofarrivalAbridged {
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
   * Bandwidth of the signal in Hz.
   */
  bandwidth?: number;

  /**
   * Collection mode (e.g. SURVEY, SPOT_SEARCH, NEIGHBORHOOD_WATCH, DIRECTED_SEARCH,
   * MANUAL, etc).
   */
  collectionMode?: string;

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
   * Delta range, in km. Delta range calculation convention is (sensor2 - sensor1).
   */
  deltaRange?: number;

  /**
   * Delta range rate, in km/sec. Delta range rate calculation convention is
   * (sensor2 - sensor1).
   */
  deltaRangeRate?: number;

  /**
   * One sigma uncertainty in the delta range rate, in km/sec.
   */
  deltaRangeRateUnc?: number;

  /**
   * One sigma uncertainty in delta range, in km.
   */
  deltaRangeUnc?: number;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Frequency difference of arrival of the center frequency signal, in Hz. FDOA
   * calculation convention is (sensor2 - sensor1).
   */
  fdoa?: number;

  /**
   * One sigma uncertainty in frequency difference of arrival of the center frequency
   * signal, in Hz.
   */
  fdoaUnc?: number;

  /**
   * Center frequency of the collect in Hz.
   */
  frequency?: number;

  /**
   * Unique identifier of the target on-orbit object, if correlated.
   */
  idOnOrbit?: string;

  /**
   * Sensor ID of the primary/1st sensor used for this measurement.
   */
  idSensor1?: string;

  /**
   * Sensor ID of the secondary/2nd sensor used for this measurement.
   */
  idSensor2?: string;

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
   * Optional identifier provided by DOA source to indicate the primary/1st sensor
   * identifier used for this measurement. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId1?: string;

  /**
   * Optional identifier provided by DOA source to indicate the secondary/2nd sensor
   * identifier used for this this observation. This may be an internal identifier
   * and not necessarily a valid sensor ID.
   */
  origSensorId2?: string;

  /**
   * Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Sensor 2 altitude at obTime (if mobile/onorbit) in km. If null, can be obtained
   * from sensor info.
   */
  sen2alt?: number;

  /**
   * Sensor 2 WGS84 latitude at obTime (if mobile/onorbit) in degrees. If null, can
   * be obtained from sensor info.
   */
  sen2lat?: number;

  /**
   * Sensor 2 WGS84 longitude at obTime (if mobile/onorbit) in degrees. If null, can
   * be obtained from sensor info.
   */
  sen2lon?: number;

  /**
   * Sensor altitude at obTime (if mobile/onorbit) in km. If null, can be obtained
   * from sensor info.
   */
  senalt?: number;

  /**
   * Sensor WGS84 latitude at obTime (if mobile/onorbit) in degrees. If null, can be
   * obtained from sensor info. -90 to 90 degrees (negative values south of equator).
   */
  senlat?: number;

  /**
   * Sensor WGS84 longitude at obTime (if mobile/onorbit) in degrees. If null, can be
   * obtained from sensor info. -180 to 180 degrees (negative values west of Prime
   * Meridian).
   */
  senlon?: number;

  /**
   * The signal arrival delay relative to sensor 1 in seconds.
   */
  sensor1Delay?: number;

  /**
   * The signal arrival delay relative to sensor 2 in seconds.
   */
  sensor2Delay?: number;

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
   * Time difference of arrival of the center frequency signal, in seconds. TDOA
   * calculation convention is (sensor2 - sensor1).
   */
  tdoa?: number;

  /**
   * One sigma uncertainty in time difference of arrival of the center frequency
   * signal, in seconds.
   */
  tdoaUnc?: number;

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
}

/**
 * Model representation of Signal time and frequency difference of arrival
 * (TDOA/FDOA) information obtained by using passive RF based sensor
 * phenomenologies and sensor triangulation.
 */
export interface DiffofarrivalFull {
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
   * Bandwidth of the signal in Hz.
   */
  bandwidth?: number;

  /**
   * Collection mode (e.g. SURVEY, SPOT_SEARCH, NEIGHBORHOOD_WATCH, DIRECTED_SEARCH,
   * MANUAL, etc).
   */
  collectionMode?: string;

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
   * Delta range, in km. Delta range calculation convention is (sensor2 - sensor1).
   */
  deltaRange?: number;

  /**
   * Delta range rate, in km/sec. Delta range rate calculation convention is
   * (sensor2 - sensor1).
   */
  deltaRangeRate?: number;

  /**
   * One sigma uncertainty in the delta range rate, in km/sec.
   */
  deltaRangeRateUnc?: number;

  /**
   * One sigma uncertainty in delta range, in km.
   */
  deltaRangeUnc?: number;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Frequency difference of arrival of the center frequency signal, in Hz. FDOA
   * calculation convention is (sensor2 - sensor1).
   */
  fdoa?: number;

  /**
   * One sigma uncertainty in frequency difference of arrival of the center frequency
   * signal, in Hz.
   */
  fdoaUnc?: number;

  /**
   * Center frequency of the collect in Hz.
   */
  frequency?: number;

  /**
   * Unique identifier of the target on-orbit object, if correlated.
   */
  idOnOrbit?: string;

  /**
   * Sensor ID of the primary/1st sensor used for this measurement.
   */
  idSensor1?: string;

  /**
   * Sensor ID of the secondary/2nd sensor used for this measurement.
   */
  idSensor2?: string;

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
   * Optional identifier provided by DOA source to indicate the primary/1st sensor
   * identifier used for this measurement. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId1?: string;

  /**
   * Optional identifier provided by DOA source to indicate the secondary/2nd sensor
   * identifier used for this this observation. This may be an internal identifier
   * and not necessarily a valid sensor ID.
   */
  origSensorId2?: string;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Sensor 2 altitude at obTime (if mobile/onorbit) in km. If null, can be obtained
   * from sensor info.
   */
  sen2alt?: number;

  /**
   * Sensor 2 WGS84 latitude at obTime (if mobile/onorbit) in degrees. If null, can
   * be obtained from sensor info.
   */
  sen2lat?: number;

  /**
   * Sensor 2 WGS84 longitude at obTime (if mobile/onorbit) in degrees. If null, can
   * be obtained from sensor info.
   */
  sen2lon?: number;

  /**
   * Sensor altitude at obTime (if mobile/onorbit) in km. If null, can be obtained
   * from sensor info.
   */
  senalt?: number;

  /**
   * Sensor WGS84 latitude at obTime (if mobile/onorbit) in degrees. If null, can be
   * obtained from sensor info. -90 to 90 degrees (negative values south of equator).
   */
  senlat?: number;

  /**
   * Sensor WGS84 longitude at obTime (if mobile/onorbit) in degrees. If null, can be
   * obtained from sensor info. -180 to 180 degrees (negative values west of Prime
   * Meridian).
   */
  senlon?: number;

  /**
   * The signal arrival delay relative to sensor 1 in seconds.
   */
  sensor1Delay?: number;

  /**
   * The signal arrival delay relative to sensor 2 in seconds.
   */
  sensor2Delay?: number;

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
   * Time difference of arrival of the center frequency signal, in seconds. TDOA
   * calculation convention is (sensor2 - sensor1).
   */
  tdoa?: number;

  /**
   * One sigma uncertainty in time difference of arrival of the center frequency
   * signal, in seconds.
   */
  tdoaUnc?: number;

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
}

export type DiffofarrivalCountResponse = string;

export interface DiffofarrivalCreateParams {
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
   * Bandwidth of the signal in Hz.
   */
  bandwidth?: number;

  /**
   * Collection mode (e.g. SURVEY, SPOT_SEARCH, NEIGHBORHOOD_WATCH, DIRECTED_SEARCH,
   * MANUAL, etc).
   */
  collectionMode?: string;

  /**
   * Delta range, in km. Delta range calculation convention is (sensor2 - sensor1).
   */
  deltaRange?: number;

  /**
   * Delta range rate, in km/sec. Delta range rate calculation convention is
   * (sensor2 - sensor1).
   */
  deltaRangeRate?: number;

  /**
   * One sigma uncertainty in the delta range rate, in km/sec.
   */
  deltaRangeRateUnc?: number;

  /**
   * One sigma uncertainty in delta range, in km.
   */
  deltaRangeUnc?: number;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Frequency difference of arrival of the center frequency signal, in Hz. FDOA
   * calculation convention is (sensor2 - sensor1).
   */
  fdoa?: number;

  /**
   * One sigma uncertainty in frequency difference of arrival of the center frequency
   * signal, in Hz.
   */
  fdoaUnc?: number;

  /**
   * Center frequency of the collect in Hz.
   */
  frequency?: number;

  /**
   * Sensor ID of the primary/1st sensor used for this measurement.
   */
  idSensor1?: string;

  /**
   * Sensor ID of the secondary/2nd sensor used for this measurement.
   */
  idSensor2?: string;

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
   * Optional identifier provided by DOA source to indicate the primary/1st sensor
   * identifier used for this measurement. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId1?: string;

  /**
   * Optional identifier provided by DOA source to indicate the secondary/2nd sensor
   * identifier used for this this observation. This may be an internal identifier
   * and not necessarily a valid sensor ID.
   */
  origSensorId2?: string;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Sensor 2 altitude at obTime (if mobile/onorbit) in km. If null, can be obtained
   * from sensor info.
   */
  sen2alt?: number;

  /**
   * Sensor 2 WGS84 latitude at obTime (if mobile/onorbit) in degrees. If null, can
   * be obtained from sensor info.
   */
  sen2lat?: number;

  /**
   * Sensor 2 WGS84 longitude at obTime (if mobile/onorbit) in degrees. If null, can
   * be obtained from sensor info.
   */
  sen2lon?: number;

  /**
   * Sensor altitude at obTime (if mobile/onorbit) in km. If null, can be obtained
   * from sensor info.
   */
  senalt?: number;

  /**
   * Sensor WGS84 latitude at obTime (if mobile/onorbit) in degrees. If null, can be
   * obtained from sensor info. -90 to 90 degrees (negative values south of equator).
   */
  senlat?: number;

  /**
   * Sensor WGS84 longitude at obTime (if mobile/onorbit) in degrees. If null, can be
   * obtained from sensor info. -180 to 180 degrees (negative values west of Prime
   * Meridian).
   */
  senlon?: number;

  /**
   * The signal arrival delay relative to sensor 1 in seconds.
   */
  sensor1Delay?: number;

  /**
   * The signal arrival delay relative to sensor 2 in seconds.
   */
  sensor2Delay?: number;

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
   * Time difference of arrival of the center frequency signal, in seconds. TDOA
   * calculation convention is (sensor2 - sensor1).
   */
  tdoa?: number;

  /**
   * One sigma uncertainty in time difference of arrival of the center frequency
   * signal, in seconds.
   */
  tdoaUnc?: number;

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
}

export interface DiffofarrivalListParams extends OffsetPageParams {
  /**
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;
}

export interface DiffofarrivalCountParams {
  /**
   * Ob detection time in ISO 8601 UTC with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface DiffofarrivalCreateBulkParams {
  body: Array<DiffofarrivalCreateBulkParams.Body>;
}

export namespace DiffofarrivalCreateBulkParams {
  /**
   * Model representation of Signal time and frequency difference of arrival
   * (TDOA/FDOA) information obtained by using passive RF based sensor
   * phenomenologies and sensor triangulation.
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
     * Bandwidth of the signal in Hz.
     */
    bandwidth?: number;

    /**
     * Collection mode (e.g. SURVEY, SPOT_SEARCH, NEIGHBORHOOD_WATCH, DIRECTED_SEARCH,
     * MANUAL, etc).
     */
    collectionMode?: string;

    /**
     * Delta range, in km. Delta range calculation convention is (sensor2 - sensor1).
     */
    deltaRange?: number;

    /**
     * Delta range rate, in km/sec. Delta range rate calculation convention is
     * (sensor2 - sensor1).
     */
    deltaRangeRate?: number;

    /**
     * One sigma uncertainty in the delta range rate, in km/sec.
     */
    deltaRangeRateUnc?: number;

    /**
     * One sigma uncertainty in delta range, in km.
     */
    deltaRangeUnc?: number;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Frequency difference of arrival of the center frequency signal, in Hz. FDOA
     * calculation convention is (sensor2 - sensor1).
     */
    fdoa?: number;

    /**
     * One sigma uncertainty in frequency difference of arrival of the center frequency
     * signal, in Hz.
     */
    fdoaUnc?: number;

    /**
     * Center frequency of the collect in Hz.
     */
    frequency?: number;

    /**
     * Sensor ID of the primary/1st sensor used for this measurement.
     */
    idSensor1?: string;

    /**
     * Sensor ID of the secondary/2nd sensor used for this measurement.
     */
    idSensor2?: string;

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
     * Optional identifier provided by DOA source to indicate the primary/1st sensor
     * identifier used for this measurement. This may be an internal identifier and not
     * necessarily a valid sensor ID.
     */
    origSensorId1?: string;

    /**
     * Optional identifier provided by DOA source to indicate the secondary/2nd sensor
     * identifier used for this this observation. This may be an internal identifier
     * and not necessarily a valid sensor ID.
     */
    origSensorId2?: string;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Sensor 2 altitude at obTime (if mobile/onorbit) in km. If null, can be obtained
     * from sensor info.
     */
    sen2alt?: number;

    /**
     * Sensor 2 WGS84 latitude at obTime (if mobile/onorbit) in degrees. If null, can
     * be obtained from sensor info.
     */
    sen2lat?: number;

    /**
     * Sensor 2 WGS84 longitude at obTime (if mobile/onorbit) in degrees. If null, can
     * be obtained from sensor info.
     */
    sen2lon?: number;

    /**
     * Sensor altitude at obTime (if mobile/onorbit) in km. If null, can be obtained
     * from sensor info.
     */
    senalt?: number;

    /**
     * Sensor WGS84 latitude at obTime (if mobile/onorbit) in degrees. If null, can be
     * obtained from sensor info. -90 to 90 degrees (negative values south of equator).
     */
    senlat?: number;

    /**
     * Sensor WGS84 longitude at obTime (if mobile/onorbit) in degrees. If null, can be
     * obtained from sensor info. -180 to 180 degrees (negative values west of Prime
     * Meridian).
     */
    senlon?: number;

    /**
     * The signal arrival delay relative to sensor 1 in seconds.
     */
    sensor1Delay?: number;

    /**
     * The signal arrival delay relative to sensor 2 in seconds.
     */
    sensor2Delay?: number;

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
     * Time difference of arrival of the center frequency signal, in seconds. TDOA
     * calculation convention is (sensor2 - sensor1).
     */
    tdoa?: number;

    /**
     * One sigma uncertainty in time difference of arrival of the center frequency
     * signal, in seconds.
     */
    tdoaUnc?: number;

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
  }
}

Diffofarrival.History = History;

export declare namespace Diffofarrival {
  export {
    type DiffofarrivalAbridged as DiffofarrivalAbridged,
    type DiffofarrivalFull as DiffofarrivalFull,
    type DiffofarrivalCountResponse as DiffofarrivalCountResponse,
    type DiffofarrivalAbridgedsOffsetPage as DiffofarrivalAbridgedsOffsetPage,
    type DiffofarrivalCreateParams as DiffofarrivalCreateParams,
    type DiffofarrivalListParams as DiffofarrivalListParams,
    type DiffofarrivalCountParams as DiffofarrivalCountParams,
    type DiffofarrivalCreateBulkParams as DiffofarrivalCreateBulkParams,
  };

  export {
    History as History,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
  };
}
