// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EntitiesAPI from './entities';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RfEmitter extends APIResource {
  /**
   * Service operation to take a single RFEmitter as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.rfEmitter.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'RF_NAME',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: RfEmitterCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/rfemitter', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update an RFEmitter. A specific role is required to perform
   * this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.rfEmitter.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'RF_NAME',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: RfEmitterUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/rfemitter/${pathID}`, {
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
   * for await (const rfEmitterListResponse of client.rfEmitter.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: RfEmitterListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RfEmitterListResponsesOffsetPage, RfEmitterListResponse> {
    return this._client.getAPIList('/udl/rfemitter', OffsetPage<RfEmitterListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete an RFEmitter specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.rfEmitter.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/rfemitter/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
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
   * const response = await client.rfEmitter.count();
   * ```
   */
  count(query: RfEmitterCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/rfemitter/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single RFEmitter by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const rfEmitter = await client.rfEmitter.get('id');
   * ```
   */
  get(
    id: string,
    query: RfEmitterGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RfEmitterGetResponse> {
    return this._client.get(path`/udl/rfemitter/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.rfEmitter.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<RfEmitterQueryhelpResponse> {
    return this._client.get('/udl/rfemitter/queryhelp', options);
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
   * const response = await client.rfEmitter.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: RfEmitterTupleParams, options?: RequestOptions): APIPromise<RfEmitterTupleResponse> {
    return this._client.get('/udl/rfemitter/tuple', { query, ...options });
  }
}

export type RfEmitterListResponsesOffsetPage = OffsetPage<RfEmitterListResponse>;

/**
 * An RF Emitter is a source of active Radio Frequency (RF) signals which could
 * potentially interfere with other RF receivers.
 */
export interface RfEmitterListResponse {
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
   * Unique name of this RF Emitter.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
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
   * ID of the parent entity for this rfemitter.
   */
  idEntity?: string;

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
   * Type of this RF Emitter.
   */
  type?: string;
}

export type RfEmitterCountResponse = string;

/**
 * An RF Emitter is a source of active Radio Frequency (RF) signals which could
 * potentially interfere with other RF receivers.
 */
export interface RfEmitterGetResponse {
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
   * Unique name of this RF Emitter.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
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
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: Shared.EntityFull;

  /**
   * ID of the parent entity for this rfemitter.
   */
  idEntity?: string;

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
   * Read-only details for this RFEmitter.
   */
  rfEmitterDetails?: Array<RfEmitterGetResponse.RfEmitterDetail>;

  /**
   * Type of this RF Emitter.
   */
  type?: string;

  /**
   * Time the row was last updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

export namespace RfEmitterGetResponse {
  /**
   * Details for a particular RF Emitter, collected by a particular source. An RF
   * Emitter may have multiple details records from various sources.
   */
  export interface RfEmitterDetail {
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
     * Unique identifier of the parent RF Emitter.
     */
    idRFEmitter: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Alternate facility name for this RF Emitter.
     */
    alternateFacilityName?: string;

    /**
     * Optional alternate name or alias for this RF Emitter.
     */
    altName?: string;

    /**
     * For parabolic/dish antennas, the diameter of the antenna in meters.
     */
    antennaDiameter?: number;

    /**
     * Array with 1-2 values specifying the length and width (for rectangular) and just
     * length for dipole antennas in meters.
     */
    antennaSize?: Array<number>;

    /**
     * Barrage noise bandwidth in Mhz.
     */
    barrageNoiseBandwidth?: number;

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
     * Detailed description of the RF Emitter.
     */
    description?: string;

    /**
     * Designator of this RF Emitter.
     */
    designator?: string;

    /**
     * Doppler noise value in Mhz.
     */
    dopplerNoise?: number;

    /**
     * Digital Form Radio Memory instantaneous bandwidth in Mhz.
     */
    drfmInstantaneousBandwidth?: number;

    /**
     * Family of this RF Emitter type.
     */
    family?: string;

    /**
     * An organization such as a corporation, manufacturer, consortium, government,
     * etc. An organization may have parent and child organizations as well as link to
     * a former organization if this org previously existed as another organization.
     */
    manufacturerOrg?: Shared.OrganizationFull;

    /**
     * Unique identifier of the organization which manufactures this RF Emitter.
     */
    manufacturerOrgId?: string;

    /**
     * Notes on the RF Emitter.
     */
    notes?: string;

    /**
     * Number of bits.
     */
    numBits?: number;

    /**
     * Number of channels.
     */
    numChannels?: number;

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
     * Model representation of a location, which is a specific fixed point on the earth
     * and is used to denote the locations of fixed sensors, operating units, etc.
     */
    productionFacilityLocation?: Shared.LocationFull;

    /**
     * Unique identifier of the location of the production facility for this RF
     * Emitter.
     */
    productionFacilityLocationId?: string;

    /**
     * Name of the production facility for this RF Emitter.
     */
    productionFacilityName?: string;

    /**
     * Receiver bandwidth in Mhz.
     */
    receiverBandwidth?: number;

    /**
     * Receiver sensitivity in dBm.
     */
    receiverSensitivity?: number;

    /**
     * Type or name of receiver.
     */
    receiverType?: string;

    /**
     * Secondary notes on the RF Emitter.
     */
    secondaryNotes?: string;

    /**
     * Receiver sensitivity is the lowest power level at which the receiver can detect
     * an RF signal and demodulate data. Sensitivity is purely a receiver specification
     * and is independent of the transmitter. End sensitivity range, in dBm.
     */
    systemSensitivityEnd?: number;

    /**
     * Receiver sensitivity is the lowest power level at which the receiver can detect
     * an RF signal and demodulate data. Sensitivity is purely a receiver specification
     * and is independent of the transmitter. Start sensitivity range, in dBm.
     */
    systemSensitivityStart?: number;

    /**
     * Transmit power in Watts.
     */
    transmitPower?: number;

    /**
     * Transmitter bandwidth in Mhz.
     */
    transmitterBandwidth?: number;

    /**
     * Transmitter frequency in Mhz.
     */
    transmitterFrequency?: number;

    /**
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;

    /**
     * Array of URLs containing additional information on this RF Emitter.
     */
    urls?: Array<string>;
  }
}

export interface RfEmitterQueryhelpResponse {
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

export type RfEmitterTupleResponse = Array<RfEmitterTupleResponse.RfEmitterTupleResponseItem>;

export namespace RfEmitterTupleResponse {
  /**
   * An RF Emitter is a source of active Radio Frequency (RF) signals which could
   * potentially interfere with other RF receivers.
   */
  export interface RfEmitterTupleResponseItem {
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
     * Unique name of this RF Emitter.
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
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
     * An entity is a generic representation of any object within a space/SSA system
     * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
     * entity can have an operating unit, a location (if terrestrial), and statuses.
     */
    entity?: Shared.EntityFull;

    /**
     * ID of the parent entity for this rfemitter.
     */
    idEntity?: string;

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
     * Read-only details for this RFEmitter.
     */
    rfEmitterDetails?: Array<RfEmitterTupleResponseItem.RfEmitterDetail>;

    /**
     * Type of this RF Emitter.
     */
    type?: string;

    /**
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }

  export namespace RfEmitterTupleResponseItem {
    /**
     * Details for a particular RF Emitter, collected by a particular source. An RF
     * Emitter may have multiple details records from various sources.
     */
    export interface RfEmitterDetail {
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
       * Unique identifier of the parent RF Emitter.
       */
      idRFEmitter: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Alternate facility name for this RF Emitter.
       */
      alternateFacilityName?: string;

      /**
       * Optional alternate name or alias for this RF Emitter.
       */
      altName?: string;

      /**
       * For parabolic/dish antennas, the diameter of the antenna in meters.
       */
      antennaDiameter?: number;

      /**
       * Array with 1-2 values specifying the length and width (for rectangular) and just
       * length for dipole antennas in meters.
       */
      antennaSize?: Array<number>;

      /**
       * Barrage noise bandwidth in Mhz.
       */
      barrageNoiseBandwidth?: number;

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
       * Detailed description of the RF Emitter.
       */
      description?: string;

      /**
       * Designator of this RF Emitter.
       */
      designator?: string;

      /**
       * Doppler noise value in Mhz.
       */
      dopplerNoise?: number;

      /**
       * Digital Form Radio Memory instantaneous bandwidth in Mhz.
       */
      drfmInstantaneousBandwidth?: number;

      /**
       * Family of this RF Emitter type.
       */
      family?: string;

      /**
       * An organization such as a corporation, manufacturer, consortium, government,
       * etc. An organization may have parent and child organizations as well as link to
       * a former organization if this org previously existed as another organization.
       */
      manufacturerOrg?: Shared.OrganizationFull;

      /**
       * Unique identifier of the organization which manufactures this RF Emitter.
       */
      manufacturerOrgId?: string;

      /**
       * Notes on the RF Emitter.
       */
      notes?: string;

      /**
       * Number of bits.
       */
      numBits?: number;

      /**
       * Number of channels.
       */
      numChannels?: number;

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
       * Model representation of a location, which is a specific fixed point on the earth
       * and is used to denote the locations of fixed sensors, operating units, etc.
       */
      productionFacilityLocation?: Shared.LocationFull;

      /**
       * Unique identifier of the location of the production facility for this RF
       * Emitter.
       */
      productionFacilityLocationId?: string;

      /**
       * Name of the production facility for this RF Emitter.
       */
      productionFacilityName?: string;

      /**
       * Receiver bandwidth in Mhz.
       */
      receiverBandwidth?: number;

      /**
       * Receiver sensitivity in dBm.
       */
      receiverSensitivity?: number;

      /**
       * Type or name of receiver.
       */
      receiverType?: string;

      /**
       * Secondary notes on the RF Emitter.
       */
      secondaryNotes?: string;

      /**
       * Receiver sensitivity is the lowest power level at which the receiver can detect
       * an RF signal and demodulate data. Sensitivity is purely a receiver specification
       * and is independent of the transmitter. End sensitivity range, in dBm.
       */
      systemSensitivityEnd?: number;

      /**
       * Receiver sensitivity is the lowest power level at which the receiver can detect
       * an RF signal and demodulate data. Sensitivity is purely a receiver specification
       * and is independent of the transmitter. Start sensitivity range, in dBm.
       */
      systemSensitivityStart?: number;

      /**
       * Transmit power in Watts.
       */
      transmitPower?: number;

      /**
       * Transmitter bandwidth in Mhz.
       */
      transmitterBandwidth?: number;

      /**
       * Transmitter frequency in Mhz.
       */
      transmitterFrequency?: number;

      /**
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;

      /**
       * Array of URLs containing additional information on this RF Emitter.
       */
      urls?: Array<string>;
    }
  }
}

export interface RfEmitterCreateParams {
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
   * Unique name of this RF Emitter.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityIngest;

  /**
   * ID of the parent entity for this rfemitter.
   */
  idEntity?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Type of this RF Emitter.
   */
  type?: string;
}

export interface RfEmitterUpdateParams {
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
   * Unique name of this RF Emitter.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityIngest;

  /**
   * ID of the parent entity for this rfemitter.
   */
  idEntity?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Type of this RF Emitter.
   */
  type?: string;
}

export interface RfEmitterListParams extends OffsetPageParams {}

export interface RfEmitterCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface RfEmitterGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface RfEmitterTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  firstResult?: number;

  maxResults?: number;
}

export declare namespace RfEmitter {
  export {
    type RfEmitterListResponse as RfEmitterListResponse,
    type RfEmitterCountResponse as RfEmitterCountResponse,
    type RfEmitterGetResponse as RfEmitterGetResponse,
    type RfEmitterQueryhelpResponse as RfEmitterQueryhelpResponse,
    type RfEmitterTupleResponse as RfEmitterTupleResponse,
    type RfEmitterListResponsesOffsetPage as RfEmitterListResponsesOffsetPage,
    type RfEmitterCreateParams as RfEmitterCreateParams,
    type RfEmitterUpdateParams as RfEmitterUpdateParams,
    type RfEmitterListParams as RfEmitterListParams,
    type RfEmitterCountParams as RfEmitterCountParams,
    type RfEmitterGetParams as RfEmitterGetParams,
    type RfEmitterTupleParams as RfEmitterTupleParams,
  };
}
