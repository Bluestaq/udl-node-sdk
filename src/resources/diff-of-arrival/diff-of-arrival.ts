// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import { History, HistoryCountParams, HistoryCountResponse } from './history';
import * as DiffofarrivalAPI from '../tdoa-fdoa/diffofarrival/diffofarrival';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DiffOfArrival extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to get a single TDOA/FDOA record by its unique ID passed as a
   * path parameter.
   */
  retrieve(
    id: string,
    query: DiffOfArrivalRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DiffofarrivalAPI.DiffofarrivalFull> {
    return this._client.get(path`/udl/diffofarrival/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<DiffOfArrivalQueryhelpResponse> {
    return this._client.get('/udl/diffofarrival/queryhelp', options);
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
  tuple(query: DiffOfArrivalTupleParams, options?: RequestOptions): APIPromise<DiffOfArrivalTupleResponse> {
    return this._client.get('/udl/diffofarrival/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple TDOA/FDOA records as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  unvalidatedPublish(
    params: DiffOfArrivalUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-diffofarrival', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DiffOfArrivalQueryhelpResponse {
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

export type DiffOfArrivalTupleResponse = Array<DiffofarrivalAPI.DiffofarrivalFull>;

export interface DiffOfArrivalRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface DiffOfArrivalTupleParams {
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

export interface DiffOfArrivalUnvalidatedPublishParams {
  body: Array<DiffOfArrivalUnvalidatedPublishParams.Body>;
}

export namespace DiffOfArrivalUnvalidatedPublishParams {
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

DiffOfArrival.History = History;

export declare namespace DiffOfArrival {
  export {
    type DiffOfArrivalQueryhelpResponse as DiffOfArrivalQueryhelpResponse,
    type DiffOfArrivalTupleResponse as DiffOfArrivalTupleResponse,
    type DiffOfArrivalRetrieveParams as DiffOfArrivalRetrieveParams,
    type DiffOfArrivalTupleParams as DiffOfArrivalTupleParams,
    type DiffOfArrivalUnvalidatedPublishParams as DiffOfArrivalUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryCountParams as HistoryCountParams,
  };
}
