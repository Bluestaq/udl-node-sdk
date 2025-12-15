// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
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
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Ecpedr extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single ECPEDR record as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.ecpedr.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   ecpedrMeasurements: [
   *     { obType: 'FLUX', obUoM: '#/MeV/cm^2/sr/s' },
   *   ],
   *   obTime: '2025-03-13T17:00:00.123456Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: EcpedrCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/ecpedr', {
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
   * for await (const ecpedrListResponse of client.ecpedr.list({
   *   obTime: '2019-12-27T18:11:19.117Z',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EcpedrListParams,
    options?: RequestOptions,
  ): PagePromise<EcpedrListResponsesOffsetPage, EcpedrListResponse> {
    return this._client.getAPIList('/udl/ecpedr', OffsetPage<EcpedrListResponse>, { query, ...options });
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
   * const response = await client.ecpedr.count({
   *   obTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: EcpedrCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/ecpedr/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * ECPEDR records as a POST body and ingest into the database. This operation is
   * not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.ecpedr.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       ecpedrMeasurements: [
   *         { obType: 'FLUX', obUoM: '#/MeV/cm^2/sr/s' },
   *       ],
   *       obTime: '2025-03-13T17:00:00.123456Z',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: EcpedrCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/ecpedr/createBulk', {
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
   * const response = await client.ecpedr.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<EcpedrQueryhelpResponse> {
    return this._client.get('/udl/ecpedr/queryhelp', options);
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
   * const response = await client.ecpedr.tuple({
   *   columns: 'columns',
   *   obTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: EcpedrTupleParams, options?: RequestOptions): APIPromise<EcpedrTupleResponse> {
    return this._client.get('/udl/ecpedr/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple ECPEDR records as a POST body and ingest into
   * the database. This operation is intended to be used for automated feeds into
   * UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.ecpedr.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       ecpedrMeasurements: [
   *         { obType: 'FLUX', obUoM: '#/MeV/cm^2/sr/s' },
   *       ],
   *       obTime: '2025-03-13T17:00:00.123456Z',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(params: EcpedrUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-ecpedr', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type EcpedrListResponsesOffsetPage = OffsetPage<EcpedrListResponse>;

/**
 * Energetic Charged Particles (ECP) Environmental Data Records (EDRs).
 */
export interface EcpedrListResponse {
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
   * Collection of measurements associated with this ECP EDR record.
   */
  ecpedrMeasurements: Array<EcpedrListResponse.EcpedrMeasurement>;

  /**
   * Time of the observation, in ISO 8601 UTC format with microsecond precision.
   */
  obTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

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
   * System which generated the message.
   */
  genSystem?: string;

  /**
   * Time when message was generated in ISO 8601 UTC format with millisecond
   * precision.
   */
  genTime?: string;

  /**
   * Unique identifier of the on-orbit satellite hosting the sensor.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the reporting sensor. This ID can be used to obtain
   * additional information on a sensor using the 'get by ID' operation (e.g.
   * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
   * as /udl/sensor/abc.
   */
  idSensor?: string;

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
   * Optional identifier provided by the record source to indicate the satellite
   * hosting the sensor. This may be an internal identifier and not necessarily map
   * to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the observation source to indicate the sensor
   * which produced this observation. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Satellite/catalog number of the on-orbit satellite hosting the sensor.
   */
  satNo?: number;

  /**
   * Three element array, expressing the observing spacecraft/sensor position vector
   * components at observation time, in kilometers, in the specified
   * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
   * The array element order is [xpos, ypos, zpos].
   */
  senPos?: Array<number>;

  /**
   * The reference frame of the observing sensor state. If the senReferenceFrame is
   * null it is assumed to be J2000.
   */
  senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

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
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;
}

export namespace EcpedrListResponse {
  /**
   * Collection of measurements associated with this ECP EDR record.
   */
  export interface EcpedrMeasurement {
    /**
     * The type of observation associated with this record. (e.g., FLUX, CHARGE, etc.).
     */
    obType: string;

    /**
     * The Unit of Measure associated with this observation. If there are no physical
     * units associated with the measurement, a value of NONE should be specified.
     */
    obUoM: string;

    /**
     * Higher energy threshold of the channel for event detection and data collection.
     */
    chanEnergyHigh?: number;

    /**
     * Lower energy threshold of the channel for event detection and data collection.
     */
    chanEnergyLow?: number;

    /**
     * Identifier of the channel based on energy levels and particle species.
     */
    chanId?: string;

    /**
     * Type of channel based on the measurement method (e.g., INTEGRAL, DIFFERENTIAL,
     * etc.).
     */
    chanType?: string;

    /**
     * Units used for defining channel energy boundaries (e.g., eV, keV, MeV, etc.).
     */
    chanUnit?: string;

    /**
     * Designates a specific group of measurements made.
     */
    msgNumber?: number;

    /**
     * A single observation value expressed in the specified unit of measure (obUoM).
     */
    obValue?: number;

    /**
     * Type of particle species being measured by a channel (e.g., ELECTRON, PROTON,
     * etc.).
     */
    species?: string;
  }
}

export type EcpedrCountResponse = string;

export interface EcpedrQueryhelpResponse {
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

export type EcpedrTupleResponse = Array<EcpedrTupleResponse.EcpedrTupleResponseItem>;

export namespace EcpedrTupleResponse {
  /**
   * Energetic Charged Particles (ECP) Environmental Data Records (EDRs).
   */
  export interface EcpedrTupleResponseItem {
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
     * Collection of measurements associated with this ECP EDR record.
     */
    ecpedrMeasurements: Array<EcpedrTupleResponseItem.EcpedrMeasurement>;

    /**
     * Time of the observation, in ISO 8601 UTC format with microsecond precision.
     */
    obTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

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
     * System which generated the message.
     */
    genSystem?: string;

    /**
     * Time when message was generated in ISO 8601 UTC format with millisecond
     * precision.
     */
    genTime?: string;

    /**
     * Unique identifier of the on-orbit satellite hosting the sensor.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the reporting sensor. This ID can be used to obtain
     * additional information on a sensor using the 'get by ID' operation (e.g.
     * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
     * as /udl/sensor/abc.
     */
    idSensor?: string;

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
     * Optional identifier provided by the record source to indicate the satellite
     * hosting the sensor. This may be an internal identifier and not necessarily map
     * to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by the observation source to indicate the sensor
     * which produced this observation. This may be an internal identifier and not
     * necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Satellite/catalog number of the on-orbit satellite hosting the sensor.
     */
    satNo?: number;

    /**
     * Three element array, expressing the observing spacecraft/sensor position vector
     * components at observation time, in kilometers, in the specified
     * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
     * The array element order is [xpos, ypos, zpos].
     */
    senPos?: Array<number>;

    /**
     * The reference frame of the observing sensor state. If the senReferenceFrame is
     * null it is assumed to be J2000.
     */
    senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

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
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;
  }

  export namespace EcpedrTupleResponseItem {
    /**
     * Collection of measurements associated with this ECP EDR record.
     */
    export interface EcpedrMeasurement {
      /**
       * The type of observation associated with this record. (e.g., FLUX, CHARGE, etc.).
       */
      obType: string;

      /**
       * The Unit of Measure associated with this observation. If there are no physical
       * units associated with the measurement, a value of NONE should be specified.
       */
      obUoM: string;

      /**
       * Higher energy threshold of the channel for event detection and data collection.
       */
      chanEnergyHigh?: number;

      /**
       * Lower energy threshold of the channel for event detection and data collection.
       */
      chanEnergyLow?: number;

      /**
       * Identifier of the channel based on energy levels and particle species.
       */
      chanId?: string;

      /**
       * Type of channel based on the measurement method (e.g., INTEGRAL, DIFFERENTIAL,
       * etc.).
       */
      chanType?: string;

      /**
       * Units used for defining channel energy boundaries (e.g., eV, keV, MeV, etc.).
       */
      chanUnit?: string;

      /**
       * Designates a specific group of measurements made.
       */
      msgNumber?: number;

      /**
       * A single observation value expressed in the specified unit of measure (obUoM).
       */
      obValue?: number;

      /**
       * Type of particle species being measured by a channel (e.g., ELECTRON, PROTON,
       * etc.).
       */
      species?: string;
    }
  }
}

export interface EcpedrCreateParams {
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
   * Collection of measurements associated with this ECP EDR record.
   */
  ecpedrMeasurements: Array<EcpedrCreateParams.EcpedrMeasurement>;

  /**
   * Time of the observation, in ISO 8601 UTC format with microsecond precision.
   */
  obTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * System which generated the message.
   */
  genSystem?: string;

  /**
   * Time when message was generated in ISO 8601 UTC format with millisecond
   * precision.
   */
  genTime?: string;

  /**
   * Unique identifier of the reporting sensor. This ID can be used to obtain
   * additional information on a sensor using the 'get by ID' operation (e.g.
   * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
   * as /udl/sensor/abc.
   */
  idSensor?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by the record source to indicate the satellite
   * hosting the sensor. This may be an internal identifier and not necessarily map
   * to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the observation source to indicate the sensor
   * which produced this observation. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Satellite/catalog number of the on-orbit satellite hosting the sensor.
   */
  satNo?: number;

  /**
   * Three element array, expressing the observing spacecraft/sensor position vector
   * components at observation time, in kilometers, in the specified
   * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
   * The array element order is [xpos, ypos, zpos].
   */
  senPos?: Array<number>;

  /**
   * The reference frame of the observing sensor state. If the senReferenceFrame is
   * null it is assumed to be J2000.
   */
  senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

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
}

export namespace EcpedrCreateParams {
  /**
   * Collection of measurements associated with this ECP EDR record.
   */
  export interface EcpedrMeasurement {
    /**
     * The type of observation associated with this record. (e.g., FLUX, CHARGE, etc.).
     */
    obType: string;

    /**
     * The Unit of Measure associated with this observation. If there are no physical
     * units associated with the measurement, a value of NONE should be specified.
     */
    obUoM: string;

    /**
     * Higher energy threshold of the channel for event detection and data collection.
     */
    chanEnergyHigh?: number;

    /**
     * Lower energy threshold of the channel for event detection and data collection.
     */
    chanEnergyLow?: number;

    /**
     * Identifier of the channel based on energy levels and particle species.
     */
    chanId?: string;

    /**
     * Type of channel based on the measurement method (e.g., INTEGRAL, DIFFERENTIAL,
     * etc.).
     */
    chanType?: string;

    /**
     * Units used for defining channel energy boundaries (e.g., eV, keV, MeV, etc.).
     */
    chanUnit?: string;

    /**
     * Designates a specific group of measurements made.
     */
    msgNumber?: number;

    /**
     * A single observation value expressed in the specified unit of measure (obUoM).
     */
    obValue?: number;

    /**
     * Type of particle species being measured by a channel (e.g., ELECTRON, PROTON,
     * etc.).
     */
    species?: string;
  }
}

export interface EcpedrListParams extends OffsetPageParams {
  /**
   * Time of the observation, in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;
}

export interface EcpedrCountParams {
  /**
   * Time of the observation, in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface EcpedrCreateBulkParams {
  body: Array<EcpedrCreateBulkParams.Body>;
}

export namespace EcpedrCreateBulkParams {
  /**
   * Energetic Charged Particles (ECP) Environmental Data Records (EDRs).
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
     * Collection of measurements associated with this ECP EDR record.
     */
    ecpedrMeasurements: Array<Body.EcpedrMeasurement>;

    /**
     * Time of the observation, in ISO 8601 UTC format with microsecond precision.
     */
    obTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * System which generated the message.
     */
    genSystem?: string;

    /**
     * Time when message was generated in ISO 8601 UTC format with millisecond
     * precision.
     */
    genTime?: string;

    /**
     * Unique identifier of the reporting sensor. This ID can be used to obtain
     * additional information on a sensor using the 'get by ID' operation (e.g.
     * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
     * as /udl/sensor/abc.
     */
    idSensor?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the record source to indicate the satellite
     * hosting the sensor. This may be an internal identifier and not necessarily map
     * to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by the observation source to indicate the sensor
     * which produced this observation. This may be an internal identifier and not
     * necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Satellite/catalog number of the on-orbit satellite hosting the sensor.
     */
    satNo?: number;

    /**
     * Three element array, expressing the observing spacecraft/sensor position vector
     * components at observation time, in kilometers, in the specified
     * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
     * The array element order is [xpos, ypos, zpos].
     */
    senPos?: Array<number>;

    /**
     * The reference frame of the observing sensor state. If the senReferenceFrame is
     * null it is assumed to be J2000.
     */
    senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

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
  }

  export namespace Body {
    /**
     * Collection of measurements associated with this ECP EDR record.
     */
    export interface EcpedrMeasurement {
      /**
       * The type of observation associated with this record. (e.g., FLUX, CHARGE, etc.).
       */
      obType: string;

      /**
       * The Unit of Measure associated with this observation. If there are no physical
       * units associated with the measurement, a value of NONE should be specified.
       */
      obUoM: string;

      /**
       * Higher energy threshold of the channel for event detection and data collection.
       */
      chanEnergyHigh?: number;

      /**
       * Lower energy threshold of the channel for event detection and data collection.
       */
      chanEnergyLow?: number;

      /**
       * Identifier of the channel based on energy levels and particle species.
       */
      chanId?: string;

      /**
       * Type of channel based on the measurement method (e.g., INTEGRAL, DIFFERENTIAL,
       * etc.).
       */
      chanType?: string;

      /**
       * Units used for defining channel energy boundaries (e.g., eV, keV, MeV, etc.).
       */
      chanUnit?: string;

      /**
       * Designates a specific group of measurements made.
       */
      msgNumber?: number;

      /**
       * A single observation value expressed in the specified unit of measure (obUoM).
       */
      obValue?: number;

      /**
       * Type of particle species being measured by a channel (e.g., ELECTRON, PROTON,
       * etc.).
       */
      species?: string;
    }
  }
}

export interface EcpedrTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Time of the observation, in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  obTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface EcpedrUnvalidatedPublishParams {
  body: Array<EcpedrUnvalidatedPublishParams.Body>;
}

export namespace EcpedrUnvalidatedPublishParams {
  /**
   * Energetic Charged Particles (ECP) Environmental Data Records (EDRs).
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
     * Collection of measurements associated with this ECP EDR record.
     */
    ecpedrMeasurements: Array<Body.EcpedrMeasurement>;

    /**
     * Time of the observation, in ISO 8601 UTC format with microsecond precision.
     */
    obTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * System which generated the message.
     */
    genSystem?: string;

    /**
     * Time when message was generated in ISO 8601 UTC format with millisecond
     * precision.
     */
    genTime?: string;

    /**
     * Unique identifier of the reporting sensor. This ID can be used to obtain
     * additional information on a sensor using the 'get by ID' operation (e.g.
     * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
     * as /udl/sensor/abc.
     */
    idSensor?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the record source to indicate the satellite
     * hosting the sensor. This may be an internal identifier and not necessarily map
     * to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by the observation source to indicate the sensor
     * which produced this observation. This may be an internal identifier and not
     * necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Satellite/catalog number of the on-orbit satellite hosting the sensor.
     */
    satNo?: number;

    /**
     * Three element array, expressing the observing spacecraft/sensor position vector
     * components at observation time, in kilometers, in the specified
     * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
     * The array element order is [xpos, ypos, zpos].
     */
    senPos?: Array<number>;

    /**
     * The reference frame of the observing sensor state. If the senReferenceFrame is
     * null it is assumed to be J2000.
     */
    senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

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
  }

  export namespace Body {
    /**
     * Collection of measurements associated with this ECP EDR record.
     */
    export interface EcpedrMeasurement {
      /**
       * The type of observation associated with this record. (e.g., FLUX, CHARGE, etc.).
       */
      obType: string;

      /**
       * The Unit of Measure associated with this observation. If there are no physical
       * units associated with the measurement, a value of NONE should be specified.
       */
      obUoM: string;

      /**
       * Higher energy threshold of the channel for event detection and data collection.
       */
      chanEnergyHigh?: number;

      /**
       * Lower energy threshold of the channel for event detection and data collection.
       */
      chanEnergyLow?: number;

      /**
       * Identifier of the channel based on energy levels and particle species.
       */
      chanId?: string;

      /**
       * Type of channel based on the measurement method (e.g., INTEGRAL, DIFFERENTIAL,
       * etc.).
       */
      chanType?: string;

      /**
       * Units used for defining channel energy boundaries (e.g., eV, keV, MeV, etc.).
       */
      chanUnit?: string;

      /**
       * Designates a specific group of measurements made.
       */
      msgNumber?: number;

      /**
       * A single observation value expressed in the specified unit of measure (obUoM).
       */
      obValue?: number;

      /**
       * Type of particle species being measured by a channel (e.g., ELECTRON, PROTON,
       * etc.).
       */
      species?: string;
    }
  }
}

Ecpedr.History = History;

export declare namespace Ecpedr {
  export {
    type EcpedrListResponse as EcpedrListResponse,
    type EcpedrCountResponse as EcpedrCountResponse,
    type EcpedrQueryhelpResponse as EcpedrQueryhelpResponse,
    type EcpedrTupleResponse as EcpedrTupleResponse,
    type EcpedrListResponsesOffsetPage as EcpedrListResponsesOffsetPage,
    type EcpedrCreateParams as EcpedrCreateParams,
    type EcpedrListParams as EcpedrListParams,
    type EcpedrCountParams as EcpedrCountParams,
    type EcpedrCreateBulkParams as EcpedrCreateBulkParams,
    type EcpedrTupleParams as EcpedrTupleParams,
    type EcpedrUnvalidatedPublishParams as EcpedrUnvalidatedPublishParams,
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
