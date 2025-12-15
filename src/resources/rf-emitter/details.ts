// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Details extends APIResource {
  /**
   * Service operation to take a single RFEmitterDetails as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.rfEmitter.details.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idRFEmitter: 'RFEMITTER-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: DetailCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/rfemitterdetails', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single RFEmitterDetails record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.rfEmitter.details.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idRFEmitter: 'RFEMITTER-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: DetailUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/rfemitterdetails/${pathID}`, {
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
   * for await (const detailListResponse of client.rfEmitter.details.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DetailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DetailListResponsesOffsetPage, DetailListResponse> {
    return this._client.getAPIList('/udl/rfemitterdetails', OffsetPage<DetailListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a single RFEmitterDetails record specified by the
   * passed ID path parameter. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.rfEmitter.details.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/rfemitterdetails/${id}`, {
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
   * const response = await client.rfEmitter.details.count();
   * ```
   */
  count(query: DetailCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/rfemitterdetails/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single RFEmitterDetails record by its unique ID
   * passed as a path parameter.
   *
   * @example
   * ```ts
   * const detail = await client.rfEmitter.details.get('id');
   * ```
   */
  get(
    id: string,
    query: DetailGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DetailGetResponse> {
    return this._client.get(path`/udl/rfemitterdetails/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.rfEmitter.details.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<DetailQueryhelpResponse> {
    return this._client.get('/udl/rfemitterdetails/queryhelp', options);
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
   * const response = await client.rfEmitter.details.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: DetailTupleParams, options?: RequestOptions): APIPromise<DetailTupleResponse> {
    return this._client.get('/udl/rfemitterdetails/tuple', { query, ...options });
  }
}

export type DetailListResponsesOffsetPage = OffsetPage<DetailListResponse>;

/**
 * Details for a particular RF Emitter, collected by a particular source. An RF
 * Emitter may have multiple details records from various sources.
 */
export interface DetailListResponse {
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
   * An RF Amplifier associated with an RF Emitter Details.
   */
  amplifier?: DetailListResponse.Amplifier;

  /**
   * The set of antennas hosted on this EW Emitter system.
   */
  antennas?: Array<DetailListResponse.Antenna>;

  /**
   * Barrage noise bandwidth, in megahertz.
   */
  barrageNoiseBandwidth?: number;

  /**
   * The length of time, in seconds, for the RF Emitter built-in test to run to
   * completion.
   */
  bitRunTime?: number;

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
   * Doppler noise value, in megahertz.
   */
  dopplerNoise?: number;

  /**
   * Digital Form Radio Memory instantaneous bandwidth in megahertz.
   */
  drfmInstantaneousBandwidth?: number;

  /**
   * Family of this RF Emitter type.
   */
  family?: string;

  /**
   * A fixed attenuation value to be set on the SRF Emitter HPA when commanding an
   * Electronic Attack/Techniques Tactics and Procedures task, in decibels.
   */
  fixedAttenuation?: number;

  /**
   * Unique identifier of the organization which manufactured this RF Emitter.
   */
  idManufacturerOrg?: string;

  /**
   * Unique identifier of the location of the production facility for this RF
   * Emitter.
   */
  idProductionFacilityLocation?: string;

  /**
   * COCOM that has temporary responsibility for scheduling and management of the RF
   * Emitter (e.g. SPACEFOR-CENT, SPACEFOR-EURAF, SPACEFOR-INDOPAC, SPACEFOR-KOR,
   * SPACEFOR-STRATNORTH, SPACESOC, NONE).
   */
  loanedToCocom?: string;

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
   * A set of system/frequency band adjustments to the power offset commanded in an
   * EA/TTP task.
   */
  powerOffsets?: Array<DetailListResponse.PowerOffset>;

  /**
   * The length of time, in seconds, for the RF Emitter to prepare for a task,
   * including sufficient time to slew the antenna and configure the equipment.
   */
  prepTime?: number;

  /**
   * Primary COCOM that is responsible for scheduling and management of the RF
   * Emitter (e.g. SPACEFOR-CENT, SPACEFOR-EURAF, SPACEFOR-INDOPAC, SPACEFOR-KOR,
   * SPACEFOR-STRATNORTH, SPACESOC, NONE).
   */
  primaryCocom?: string;

  /**
   * Name of the production facility for this RF Emitter.
   */
  productionFacilityName?: string;

  /**
   * Type or name of receiver.
   */
  receiverType?: string;

  /**
   * Secondary notes on the RF Emitter.
   */
  secondaryNotes?: string;

  /**
   * The set of software services running on this EW Emitter system.
   */
  services?: Array<DetailListResponse.Service>;

  /**
   * Receiver sensitivity is the lowest power level at which the receiver can detect
   * an RF signal and demodulate data. Sensitivity is purely a receiver specification
   * and is independent of the transmitter. End sensitivity range, in
   * decibel-milliwatts.
   */
  systemSensitivityEnd?: number;

  /**
   * Receiver sensitivity is the lowest power level at which the receiver can detect
   * an RF signal and demodulate data. Sensitivity is purely a receiver specification
   * and is independent of the transmitter. Start sensitivity range, in
   * decibel-milliwatts.
   */
  systemSensitivityStart?: number;

  /**
   * The set of EA/TTP techniques that are supported by this EW Emitter system.
   */
  ttps?: Array<DetailListResponse.Ttp>;

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

export namespace DetailListResponse {
  /**
   * An RF Amplifier associated with an RF Emitter Details.
   */
  export interface Amplifier {
    /**
     * The device identifier of the amplifier.
     */
    deviceIdentifier?: string;

    /**
     * The manufacturer of the amplifier.
     */
    manufacturer?: string;

    /**
     * The model name of the amplifier.
     */
    modelName?: string;

    /**
     * The amplifier power level, in watts.
     */
    power?: number;
  }

  /**
   * An RF Antenna associated with an RF Emitter Details.
   */
  export interface Antenna {
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
     * A flag to indicate whether the antenna points at a fixed azimuth/elevation.
     */
    azElFixed?: boolean;

    /**
     * The set of antenna feeds for this antenna.
     */
    feeds?: Array<Antenna.Feed>;

    /**
     * Antenna azimuth, in degrees clockwise from true North, for a fixed antenna.
     */
    fixedAzimuth?: number;

    /**
     * Antenna elevation, in degrees, for a fixed antenna.
     */
    fixedElevation?: number;

    /**
     * Array of maximum azimuths, in degrees.
     */
    maxAzimuths?: Array<number>;

    /**
     * Maximum elevation, in degrees.
     */
    maxElevation?: number;

    /**
     * Array of minimum azimuths, in degrees.
     */
    minAzimuths?: Array<number>;

    /**
     * Minimum elevation, in degrees.
     */
    minElevation?: number;

    /**
     * The name of the antenna.
     */
    name?: string;

    /**
     * The set of receiver channels for this antenna.
     */
    receiverChannels?: Array<Antenna.ReceiverChannel>;

    /**
     * The set of transmit channels for this antenna.
     */
    transmitChannels?: Array<Antenna.TransmitChannel>;
  }

  export namespace Antenna {
    /**
     * An RF Antenna Feed associated with an RF Antenna.
     */
    export interface Feed {
      /**
       * Maximum frequency, in megahertz.
       */
      freqMax?: number;

      /**
       * Minimum frequency, in megahertz.
       */
      freqMin?: number;

      /**
       * The feed name.
       */
      name?: string;

      /**
       * The antenna feed linear/circular polarization (e.g. HORIZONTAL, VERTICAL,
       * LEFT_HAND_CIRCULAR, RIGHT_HAND_CIRCULAR).
       */
      polarization?: string;
    }

    /**
     * An RF Antenna Receiver Channel associated with an RF Antenna.
     */
    export interface ReceiverChannel {
      /**
       * The receiver bandwidth, in megahertz, must satisfy the constraint: minBandwidth
       * ≤ bandwidth ≤ maxBandwidth.
       */
      bandwidth?: number;

      /**
       * The receive channel number.
       */
      channelNum?: string;

      /**
       * The receive channel device identifier.
       */
      deviceIdentifier?: string;

      /**
       * Maximum frequency, in megahertz.
       */
      freqMax?: number;

      /**
       * Minimum frequency, in megahertz.
       */
      freqMin?: number;

      /**
       * The maximum receiver bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      maxBandwidth?: number;

      /**
       * The receiver bandwidth, in megahertz, must satisfy the constraint: minBandwidth
       * ≤ bandwidth ≤ maxBandwidth.
       */
      minBandwidth?: number;

      /**
       * Receiver sensitivity, in decibel-milliwatts.
       */
      sensitivity?: number;
    }

    /**
     * An RF Antenna Transmit Channel associated with an RF Antenna.
     */
    export interface TransmitChannel {
      /**
       * Transmit power, in watts.
       */
      power: number;

      /**
       * The transmitter bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      bandwidth?: number;

      /**
       * The transmit channel number.
       */
      channelNum?: string;

      /**
       * The transmit channel device identifier.
       */
      deviceIdentifier?: string;

      /**
       * The transmitter frequency, in megahertz, must satisfy the constraint: freqMin <=
       * freq <= freqMax.
       */
      freq?: number;

      /**
       * The maximum transmitter frequency, in megahertz, must satisfy the constraint:
       * freqMin ≤ freq ≤ freqMax.
       */
      freqMax?: number;

      /**
       * The minimum transmitter frequency, in megahertz, must satisfy the constraint:
       * freqMin ≤ freq ≤ freqMax.
       */
      freqMin?: number;

      /**
       * The hardware sample rate, in bits per second for this transmit channel.
       */
      hardwareSampleRate?: number;

      /**
       * The maximum transmitter bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      maxBandwidth?: number;

      /**
       * Maximum gain, in decibels.
       */
      maxGain?: number;

      /**
       * The minimum transmitter bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      minBandwidth?: number;

      /**
       * Minimum gain, in decibels.
       */
      minGain?: number;

      /**
       * The set of sample rates supported by this transmit channel, in bits per second.
       */
      sampleRates?: Array<number>;
    }
  }

  /**
   * An RF Emitter Power Offset associated with an RF Emitter Details.
   */
  export interface PowerOffset {
    /**
     * The RF frequency band (e.g. HF, VHF, P, UHF, L, S, C, X, KU, K, KA, V, W, MM).
     */
    frequencyBand?: string;

    /**
     * Power offset, in decibels.
     */
    powerOffset?: number;
  }

  /**
   * An RF Emitter SW Service associated with an RF Emitter Details.
   */
  export interface Service {
    /**
     * The name for this software service.
     */
    name?: string;

    /**
     * The version for this software service.
     */
    version?: string;
  }

  /**
   * An RF Emitter TTP associated with an RF Emitter Details.
   */
  export interface Ttp {
    /**
     * The name of the output signal.
     */
    outputSignalName?: string;

    /**
     * The set of TTPs affected by this signal.
     */
    techniqueDefinitions?: Array<Ttp.TechniqueDefinition>;
  }

  export namespace Ttp {
    /**
     * An RF Emitter Technique Definition associated with an RF Emitter TTP.
     */
    export interface TechniqueDefinition {
      /**
       * The EW Emitter system technique name.
       */
      name?: string;

      /**
       * The set of required/optional parameters for this technique.
       */
      paramDefinitions?: Array<TechniqueDefinition.ParamDefinition>;
    }

    export namespace TechniqueDefinition {
      /**
       * An RF Emitter Technique Parameter Definition associated with an RF Emitter
       * Technique Definition.
       */
      export interface ParamDefinition {
        /**
         * Default parameter value used if not overridden in a SEW task definition.
         */
        defaultValue?: string;

        /**
         * Maximum allowable value for a numeric parameter.
         */
        max?: number;

        /**
         * Minimum allowable value for a numeric parameter.
         */
        min?: number;

        /**
         * The name of the parameter.
         */
        name?: string;

        /**
         * A flag to specify that a parameter is optional.
         */
        optional?: boolean;

        /**
         * The type of parameter (e.g. STRING, DOUBLE, INT, LIST).
         */
        type?: string;

        /**
         * Units (degrees, seconds, decibels, etc.) for a numeric parameter.
         */
        units?: string;

        /**
         * Valid values for strictly defined parameters.
         */
        validValues?: Array<string>;
      }
    }
  }
}

export type DetailCountResponse = string;

/**
 * Details for a particular RF Emitter, collected by a particular source. An RF
 * Emitter may have multiple details records from various sources.
 */
export interface DetailGetResponse {
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
   * An RF Amplifier associated with an RF Emitter Details.
   */
  amplifier?: DetailGetResponse.Amplifier;

  /**
   * The set of antennas hosted on this EW Emitter system.
   */
  antennas?: Array<DetailGetResponse.Antenna>;

  /**
   * Barrage noise bandwidth, in megahertz.
   */
  barrageNoiseBandwidth?: number;

  /**
   * The length of time, in seconds, for the RF Emitter built-in test to run to
   * completion.
   */
  bitRunTime?: number;

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
   * Doppler noise value, in megahertz.
   */
  dopplerNoise?: number;

  /**
   * Digital Form Radio Memory instantaneous bandwidth in megahertz.
   */
  drfmInstantaneousBandwidth?: number;

  /**
   * Family of this RF Emitter type.
   */
  family?: string;

  /**
   * A fixed attenuation value to be set on the SRF Emitter HPA when commanding an
   * Electronic Attack/Techniques Tactics and Procedures task, in decibels.
   */
  fixedAttenuation?: number;

  /**
   * Unique identifier of the organization which manufactured this RF Emitter.
   */
  idManufacturerOrg?: string;

  /**
   * Unique identifier of the location of the production facility for this RF
   * Emitter.
   */
  idProductionFacilityLocation?: string;

  /**
   * COCOM that has temporary responsibility for scheduling and management of the RF
   * Emitter (e.g. SPACEFOR-CENT, SPACEFOR-EURAF, SPACEFOR-INDOPAC, SPACEFOR-KOR,
   * SPACEFOR-STRATNORTH, SPACESOC, NONE).
   */
  loanedToCocom?: string;

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
   * A set of system/frequency band adjustments to the power offset commanded in an
   * EA/TTP task.
   */
  powerOffsets?: Array<DetailGetResponse.PowerOffset>;

  /**
   * The length of time, in seconds, for the RF Emitter to prepare for a task,
   * including sufficient time to slew the antenna and configure the equipment.
   */
  prepTime?: number;

  /**
   * Primary COCOM that is responsible for scheduling and management of the RF
   * Emitter (e.g. SPACEFOR-CENT, SPACEFOR-EURAF, SPACEFOR-INDOPAC, SPACEFOR-KOR,
   * SPACEFOR-STRATNORTH, SPACESOC, NONE).
   */
  primaryCocom?: string;

  /**
   * Name of the production facility for this RF Emitter.
   */
  productionFacilityName?: string;

  /**
   * Type or name of receiver.
   */
  receiverType?: string;

  /**
   * Secondary notes on the RF Emitter.
   */
  secondaryNotes?: string;

  /**
   * The set of software services running on this EW Emitter system.
   */
  services?: Array<DetailGetResponse.Service>;

  /**
   * Receiver sensitivity is the lowest power level at which the receiver can detect
   * an RF signal and demodulate data. Sensitivity is purely a receiver specification
   * and is independent of the transmitter. End sensitivity range, in
   * decibel-milliwatts.
   */
  systemSensitivityEnd?: number;

  /**
   * Receiver sensitivity is the lowest power level at which the receiver can detect
   * an RF signal and demodulate data. Sensitivity is purely a receiver specification
   * and is independent of the transmitter. Start sensitivity range, in
   * decibel-milliwatts.
   */
  systemSensitivityStart?: number;

  /**
   * The set of EA/TTP techniques that are supported by this EW Emitter system.
   */
  ttps?: Array<DetailGetResponse.Ttp>;

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

export namespace DetailGetResponse {
  /**
   * An RF Amplifier associated with an RF Emitter Details.
   */
  export interface Amplifier {
    /**
     * The device identifier of the amplifier.
     */
    deviceIdentifier?: string;

    /**
     * The manufacturer of the amplifier.
     */
    manufacturer?: string;

    /**
     * The model name of the amplifier.
     */
    modelName?: string;

    /**
     * The amplifier power level, in watts.
     */
    power?: number;
  }

  /**
   * An RF Antenna associated with an RF Emitter Details.
   */
  export interface Antenna {
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
     * A flag to indicate whether the antenna points at a fixed azimuth/elevation.
     */
    azElFixed?: boolean;

    /**
     * The set of antenna feeds for this antenna.
     */
    feeds?: Array<Antenna.Feed>;

    /**
     * Antenna azimuth, in degrees clockwise from true North, for a fixed antenna.
     */
    fixedAzimuth?: number;

    /**
     * Antenna elevation, in degrees, for a fixed antenna.
     */
    fixedElevation?: number;

    /**
     * Array of maximum azimuths, in degrees.
     */
    maxAzimuths?: Array<number>;

    /**
     * Maximum elevation, in degrees.
     */
    maxElevation?: number;

    /**
     * Array of minimum azimuths, in degrees.
     */
    minAzimuths?: Array<number>;

    /**
     * Minimum elevation, in degrees.
     */
    minElevation?: number;

    /**
     * The name of the antenna.
     */
    name?: string;

    /**
     * The set of receiver channels for this antenna.
     */
    receiverChannels?: Array<Antenna.ReceiverChannel>;

    /**
     * The set of transmit channels for this antenna.
     */
    transmitChannels?: Array<Antenna.TransmitChannel>;
  }

  export namespace Antenna {
    /**
     * An RF Antenna Feed associated with an RF Antenna.
     */
    export interface Feed {
      /**
       * Maximum frequency, in megahertz.
       */
      freqMax?: number;

      /**
       * Minimum frequency, in megahertz.
       */
      freqMin?: number;

      /**
       * The feed name.
       */
      name?: string;

      /**
       * The antenna feed linear/circular polarization (e.g. HORIZONTAL, VERTICAL,
       * LEFT_HAND_CIRCULAR, RIGHT_HAND_CIRCULAR).
       */
      polarization?: string;
    }

    /**
     * An RF Antenna Receiver Channel associated with an RF Antenna.
     */
    export interface ReceiverChannel {
      /**
       * The receiver bandwidth, in megahertz, must satisfy the constraint: minBandwidth
       * ≤ bandwidth ≤ maxBandwidth.
       */
      bandwidth?: number;

      /**
       * The receive channel number.
       */
      channelNum?: string;

      /**
       * The receive channel device identifier.
       */
      deviceIdentifier?: string;

      /**
       * Maximum frequency, in megahertz.
       */
      freqMax?: number;

      /**
       * Minimum frequency, in megahertz.
       */
      freqMin?: number;

      /**
       * The maximum receiver bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      maxBandwidth?: number;

      /**
       * The receiver bandwidth, in megahertz, must satisfy the constraint: minBandwidth
       * ≤ bandwidth ≤ maxBandwidth.
       */
      minBandwidth?: number;

      /**
       * Receiver sensitivity, in decibel-milliwatts.
       */
      sensitivity?: number;
    }

    /**
     * An RF Antenna Transmit Channel associated with an RF Antenna.
     */
    export interface TransmitChannel {
      /**
       * Transmit power, in watts.
       */
      power: number;

      /**
       * The transmitter bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      bandwidth?: number;

      /**
       * The transmit channel number.
       */
      channelNum?: string;

      /**
       * The transmit channel device identifier.
       */
      deviceIdentifier?: string;

      /**
       * The transmitter frequency, in megahertz, must satisfy the constraint: freqMin <=
       * freq <= freqMax.
       */
      freq?: number;

      /**
       * The maximum transmitter frequency, in megahertz, must satisfy the constraint:
       * freqMin ≤ freq ≤ freqMax.
       */
      freqMax?: number;

      /**
       * The minimum transmitter frequency, in megahertz, must satisfy the constraint:
       * freqMin ≤ freq ≤ freqMax.
       */
      freqMin?: number;

      /**
       * The hardware sample rate, in bits per second for this transmit channel.
       */
      hardwareSampleRate?: number;

      /**
       * The maximum transmitter bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      maxBandwidth?: number;

      /**
       * Maximum gain, in decibels.
       */
      maxGain?: number;

      /**
       * The minimum transmitter bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      minBandwidth?: number;

      /**
       * Minimum gain, in decibels.
       */
      minGain?: number;

      /**
       * The set of sample rates supported by this transmit channel, in bits per second.
       */
      sampleRates?: Array<number>;
    }
  }

  /**
   * An RF Emitter Power Offset associated with an RF Emitter Details.
   */
  export interface PowerOffset {
    /**
     * The RF frequency band (e.g. HF, VHF, P, UHF, L, S, C, X, KU, K, KA, V, W, MM).
     */
    frequencyBand?: string;

    /**
     * Power offset, in decibels.
     */
    powerOffset?: number;
  }

  /**
   * An RF Emitter SW Service associated with an RF Emitter Details.
   */
  export interface Service {
    /**
     * The name for this software service.
     */
    name?: string;

    /**
     * The version for this software service.
     */
    version?: string;
  }

  /**
   * An RF Emitter TTP associated with an RF Emitter Details.
   */
  export interface Ttp {
    /**
     * The name of the output signal.
     */
    outputSignalName?: string;

    /**
     * The set of TTPs affected by this signal.
     */
    techniqueDefinitions?: Array<Ttp.TechniqueDefinition>;
  }

  export namespace Ttp {
    /**
     * An RF Emitter Technique Definition associated with an RF Emitter TTP.
     */
    export interface TechniqueDefinition {
      /**
       * The EW Emitter system technique name.
       */
      name?: string;

      /**
       * The set of required/optional parameters for this technique.
       */
      paramDefinitions?: Array<TechniqueDefinition.ParamDefinition>;
    }

    export namespace TechniqueDefinition {
      /**
       * An RF Emitter Technique Parameter Definition associated with an RF Emitter
       * Technique Definition.
       */
      export interface ParamDefinition {
        /**
         * Default parameter value used if not overridden in a SEW task definition.
         */
        defaultValue?: string;

        /**
         * Maximum allowable value for a numeric parameter.
         */
        max?: number;

        /**
         * Minimum allowable value for a numeric parameter.
         */
        min?: number;

        /**
         * The name of the parameter.
         */
        name?: string;

        /**
         * A flag to specify that a parameter is optional.
         */
        optional?: boolean;

        /**
         * The type of parameter (e.g. STRING, DOUBLE, INT, LIST).
         */
        type?: string;

        /**
         * Units (degrees, seconds, decibels, etc.) for a numeric parameter.
         */
        units?: string;

        /**
         * Valid values for strictly defined parameters.
         */
        validValues?: Array<string>;
      }
    }
  }
}

export interface DetailQueryhelpResponse {
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

export type DetailTupleResponse = Array<DetailTupleResponse.DetailTupleResponseItem>;

export namespace DetailTupleResponse {
  /**
   * Details for a particular RF Emitter, collected by a particular source. An RF
   * Emitter may have multiple details records from various sources.
   */
  export interface DetailTupleResponseItem {
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
     * An RF Amplifier associated with an RF Emitter Details.
     */
    amplifier?: DetailTupleResponseItem.Amplifier;

    /**
     * The set of antennas hosted on this EW Emitter system.
     */
    antennas?: Array<DetailTupleResponseItem.Antenna>;

    /**
     * Barrage noise bandwidth, in megahertz.
     */
    barrageNoiseBandwidth?: number;

    /**
     * The length of time, in seconds, for the RF Emitter built-in test to run to
     * completion.
     */
    bitRunTime?: number;

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
     * Doppler noise value, in megahertz.
     */
    dopplerNoise?: number;

    /**
     * Digital Form Radio Memory instantaneous bandwidth in megahertz.
     */
    drfmInstantaneousBandwidth?: number;

    /**
     * Family of this RF Emitter type.
     */
    family?: string;

    /**
     * A fixed attenuation value to be set on the SRF Emitter HPA when commanding an
     * Electronic Attack/Techniques Tactics and Procedures task, in decibels.
     */
    fixedAttenuation?: number;

    /**
     * Unique identifier of the organization which manufactured this RF Emitter.
     */
    idManufacturerOrg?: string;

    /**
     * Unique identifier of the location of the production facility for this RF
     * Emitter.
     */
    idProductionFacilityLocation?: string;

    /**
     * COCOM that has temporary responsibility for scheduling and management of the RF
     * Emitter (e.g. SPACEFOR-CENT, SPACEFOR-EURAF, SPACEFOR-INDOPAC, SPACEFOR-KOR,
     * SPACEFOR-STRATNORTH, SPACESOC, NONE).
     */
    loanedToCocom?: string;

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
     * A set of system/frequency band adjustments to the power offset commanded in an
     * EA/TTP task.
     */
    powerOffsets?: Array<DetailTupleResponseItem.PowerOffset>;

    /**
     * The length of time, in seconds, for the RF Emitter to prepare for a task,
     * including sufficient time to slew the antenna and configure the equipment.
     */
    prepTime?: number;

    /**
     * Primary COCOM that is responsible for scheduling and management of the RF
     * Emitter (e.g. SPACEFOR-CENT, SPACEFOR-EURAF, SPACEFOR-INDOPAC, SPACEFOR-KOR,
     * SPACEFOR-STRATNORTH, SPACESOC, NONE).
     */
    primaryCocom?: string;

    /**
     * Name of the production facility for this RF Emitter.
     */
    productionFacilityName?: string;

    /**
     * Type or name of receiver.
     */
    receiverType?: string;

    /**
     * Secondary notes on the RF Emitter.
     */
    secondaryNotes?: string;

    /**
     * The set of software services running on this EW Emitter system.
     */
    services?: Array<DetailTupleResponseItem.Service>;

    /**
     * Receiver sensitivity is the lowest power level at which the receiver can detect
     * an RF signal and demodulate data. Sensitivity is purely a receiver specification
     * and is independent of the transmitter. End sensitivity range, in
     * decibel-milliwatts.
     */
    systemSensitivityEnd?: number;

    /**
     * Receiver sensitivity is the lowest power level at which the receiver can detect
     * an RF signal and demodulate data. Sensitivity is purely a receiver specification
     * and is independent of the transmitter. Start sensitivity range, in
     * decibel-milliwatts.
     */
    systemSensitivityStart?: number;

    /**
     * The set of EA/TTP techniques that are supported by this EW Emitter system.
     */
    ttps?: Array<DetailTupleResponseItem.Ttp>;

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

  export namespace DetailTupleResponseItem {
    /**
     * An RF Amplifier associated with an RF Emitter Details.
     */
    export interface Amplifier {
      /**
       * The device identifier of the amplifier.
       */
      deviceIdentifier?: string;

      /**
       * The manufacturer of the amplifier.
       */
      manufacturer?: string;

      /**
       * The model name of the amplifier.
       */
      modelName?: string;

      /**
       * The amplifier power level, in watts.
       */
      power?: number;
    }

    /**
     * An RF Antenna associated with an RF Emitter Details.
     */
    export interface Antenna {
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
       * A flag to indicate whether the antenna points at a fixed azimuth/elevation.
       */
      azElFixed?: boolean;

      /**
       * The set of antenna feeds for this antenna.
       */
      feeds?: Array<Antenna.Feed>;

      /**
       * Antenna azimuth, in degrees clockwise from true North, for a fixed antenna.
       */
      fixedAzimuth?: number;

      /**
       * Antenna elevation, in degrees, for a fixed antenna.
       */
      fixedElevation?: number;

      /**
       * Array of maximum azimuths, in degrees.
       */
      maxAzimuths?: Array<number>;

      /**
       * Maximum elevation, in degrees.
       */
      maxElevation?: number;

      /**
       * Array of minimum azimuths, in degrees.
       */
      minAzimuths?: Array<number>;

      /**
       * Minimum elevation, in degrees.
       */
      minElevation?: number;

      /**
       * The name of the antenna.
       */
      name?: string;

      /**
       * The set of receiver channels for this antenna.
       */
      receiverChannels?: Array<Antenna.ReceiverChannel>;

      /**
       * The set of transmit channels for this antenna.
       */
      transmitChannels?: Array<Antenna.TransmitChannel>;
    }

    export namespace Antenna {
      /**
       * An RF Antenna Feed associated with an RF Antenna.
       */
      export interface Feed {
        /**
         * Maximum frequency, in megahertz.
         */
        freqMax?: number;

        /**
         * Minimum frequency, in megahertz.
         */
        freqMin?: number;

        /**
         * The feed name.
         */
        name?: string;

        /**
         * The antenna feed linear/circular polarization (e.g. HORIZONTAL, VERTICAL,
         * LEFT_HAND_CIRCULAR, RIGHT_HAND_CIRCULAR).
         */
        polarization?: string;
      }

      /**
       * An RF Antenna Receiver Channel associated with an RF Antenna.
       */
      export interface ReceiverChannel {
        /**
         * The receiver bandwidth, in megahertz, must satisfy the constraint: minBandwidth
         * ≤ bandwidth ≤ maxBandwidth.
         */
        bandwidth?: number;

        /**
         * The receive channel number.
         */
        channelNum?: string;

        /**
         * The receive channel device identifier.
         */
        deviceIdentifier?: string;

        /**
         * Maximum frequency, in megahertz.
         */
        freqMax?: number;

        /**
         * Minimum frequency, in megahertz.
         */
        freqMin?: number;

        /**
         * The maximum receiver bandwidth, in megahertz, must satisfy the constraint:
         * minBandwidth ≤ bandwidth ≤ maxBandwidth.
         */
        maxBandwidth?: number;

        /**
         * The receiver bandwidth, in megahertz, must satisfy the constraint: minBandwidth
         * ≤ bandwidth ≤ maxBandwidth.
         */
        minBandwidth?: number;

        /**
         * Receiver sensitivity, in decibel-milliwatts.
         */
        sensitivity?: number;
      }

      /**
       * An RF Antenna Transmit Channel associated with an RF Antenna.
       */
      export interface TransmitChannel {
        /**
         * Transmit power, in watts.
         */
        power: number;

        /**
         * The transmitter bandwidth, in megahertz, must satisfy the constraint:
         * minBandwidth ≤ bandwidth ≤ maxBandwidth.
         */
        bandwidth?: number;

        /**
         * The transmit channel number.
         */
        channelNum?: string;

        /**
         * The transmit channel device identifier.
         */
        deviceIdentifier?: string;

        /**
         * The transmitter frequency, in megahertz, must satisfy the constraint: freqMin <=
         * freq <= freqMax.
         */
        freq?: number;

        /**
         * The maximum transmitter frequency, in megahertz, must satisfy the constraint:
         * freqMin ≤ freq ≤ freqMax.
         */
        freqMax?: number;

        /**
         * The minimum transmitter frequency, in megahertz, must satisfy the constraint:
         * freqMin ≤ freq ≤ freqMax.
         */
        freqMin?: number;

        /**
         * The hardware sample rate, in bits per second for this transmit channel.
         */
        hardwareSampleRate?: number;

        /**
         * The maximum transmitter bandwidth, in megahertz, must satisfy the constraint:
         * minBandwidth ≤ bandwidth ≤ maxBandwidth.
         */
        maxBandwidth?: number;

        /**
         * Maximum gain, in decibels.
         */
        maxGain?: number;

        /**
         * The minimum transmitter bandwidth, in megahertz, must satisfy the constraint:
         * minBandwidth ≤ bandwidth ≤ maxBandwidth.
         */
        minBandwidth?: number;

        /**
         * Minimum gain, in decibels.
         */
        minGain?: number;

        /**
         * The set of sample rates supported by this transmit channel, in bits per second.
         */
        sampleRates?: Array<number>;
      }
    }

    /**
     * An RF Emitter Power Offset associated with an RF Emitter Details.
     */
    export interface PowerOffset {
      /**
       * The RF frequency band (e.g. HF, VHF, P, UHF, L, S, C, X, KU, K, KA, V, W, MM).
       */
      frequencyBand?: string;

      /**
       * Power offset, in decibels.
       */
      powerOffset?: number;
    }

    /**
     * An RF Emitter SW Service associated with an RF Emitter Details.
     */
    export interface Service {
      /**
       * The name for this software service.
       */
      name?: string;

      /**
       * The version for this software service.
       */
      version?: string;
    }

    /**
     * An RF Emitter TTP associated with an RF Emitter Details.
     */
    export interface Ttp {
      /**
       * The name of the output signal.
       */
      outputSignalName?: string;

      /**
       * The set of TTPs affected by this signal.
       */
      techniqueDefinitions?: Array<Ttp.TechniqueDefinition>;
    }

    export namespace Ttp {
      /**
       * An RF Emitter Technique Definition associated with an RF Emitter TTP.
       */
      export interface TechniqueDefinition {
        /**
         * The EW Emitter system technique name.
         */
        name?: string;

        /**
         * The set of required/optional parameters for this technique.
         */
        paramDefinitions?: Array<TechniqueDefinition.ParamDefinition>;
      }

      export namespace TechniqueDefinition {
        /**
         * An RF Emitter Technique Parameter Definition associated with an RF Emitter
         * Technique Definition.
         */
        export interface ParamDefinition {
          /**
           * Default parameter value used if not overridden in a SEW task definition.
           */
          defaultValue?: string;

          /**
           * Maximum allowable value for a numeric parameter.
           */
          max?: number;

          /**
           * Minimum allowable value for a numeric parameter.
           */
          min?: number;

          /**
           * The name of the parameter.
           */
          name?: string;

          /**
           * A flag to specify that a parameter is optional.
           */
          optional?: boolean;

          /**
           * The type of parameter (e.g. STRING, DOUBLE, INT, LIST).
           */
          type?: string;

          /**
           * Units (degrees, seconds, decibels, etc.) for a numeric parameter.
           */
          units?: string;

          /**
           * Valid values for strictly defined parameters.
           */
          validValues?: Array<string>;
        }
      }
    }
  }
}

export interface DetailCreateParams {
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
   * An RF Amplifier associated with an RF Emitter Details.
   */
  amplifier?: DetailCreateParams.Amplifier;

  /**
   * The set of antennas hosted on this EW Emitter system.
   */
  antennas?: Array<DetailCreateParams.Antenna>;

  /**
   * Barrage noise bandwidth, in megahertz.
   */
  barrageNoiseBandwidth?: number;

  /**
   * The length of time, in seconds, for the RF Emitter built-in test to run to
   * completion.
   */
  bitRunTime?: number;

  /**
   * Detailed description of the RF Emitter.
   */
  description?: string;

  /**
   * Designator of this RF Emitter.
   */
  designator?: string;

  /**
   * Doppler noise value, in megahertz.
   */
  dopplerNoise?: number;

  /**
   * Digital Form Radio Memory instantaneous bandwidth in megahertz.
   */
  drfmInstantaneousBandwidth?: number;

  /**
   * Family of this RF Emitter type.
   */
  family?: string;

  /**
   * A fixed attenuation value to be set on the SRF Emitter HPA when commanding an
   * Electronic Attack/Techniques Tactics and Procedures task, in decibels.
   */
  fixedAttenuation?: number;

  /**
   * Unique identifier of the organization which manufactured this RF Emitter.
   */
  idManufacturerOrg?: string;

  /**
   * Unique identifier of the location of the production facility for this RF
   * Emitter.
   */
  idProductionFacilityLocation?: string;

  /**
   * COCOM that has temporary responsibility for scheduling and management of the RF
   * Emitter (e.g. SPACEFOR-CENT, SPACEFOR-EURAF, SPACEFOR-INDOPAC, SPACEFOR-KOR,
   * SPACEFOR-STRATNORTH, SPACESOC, NONE).
   */
  loanedToCocom?: string;

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
   * A set of system/frequency band adjustments to the power offset commanded in an
   * EA/TTP task.
   */
  powerOffsets?: Array<DetailCreateParams.PowerOffset>;

  /**
   * The length of time, in seconds, for the RF Emitter to prepare for a task,
   * including sufficient time to slew the antenna and configure the equipment.
   */
  prepTime?: number;

  /**
   * Primary COCOM that is responsible for scheduling and management of the RF
   * Emitter (e.g. SPACEFOR-CENT, SPACEFOR-EURAF, SPACEFOR-INDOPAC, SPACEFOR-KOR,
   * SPACEFOR-STRATNORTH, SPACESOC, NONE).
   */
  primaryCocom?: string;

  /**
   * Name of the production facility for this RF Emitter.
   */
  productionFacilityName?: string;

  /**
   * Type or name of receiver.
   */
  receiverType?: string;

  /**
   * Secondary notes on the RF Emitter.
   */
  secondaryNotes?: string;

  /**
   * The set of software services running on this EW Emitter system.
   */
  services?: Array<DetailCreateParams.Service>;

  /**
   * Receiver sensitivity is the lowest power level at which the receiver can detect
   * an RF signal and demodulate data. Sensitivity is purely a receiver specification
   * and is independent of the transmitter. End sensitivity range, in
   * decibel-milliwatts.
   */
  systemSensitivityEnd?: number;

  /**
   * Receiver sensitivity is the lowest power level at which the receiver can detect
   * an RF signal and demodulate data. Sensitivity is purely a receiver specification
   * and is independent of the transmitter. Start sensitivity range, in
   * decibel-milliwatts.
   */
  systemSensitivityStart?: number;

  /**
   * The set of EA/TTP techniques that are supported by this EW Emitter system.
   */
  ttps?: Array<DetailCreateParams.Ttp>;

  /**
   * Array of URLs containing additional information on this RF Emitter.
   */
  urls?: Array<string>;
}

export namespace DetailCreateParams {
  /**
   * An RF Amplifier associated with an RF Emitter Details.
   */
  export interface Amplifier {
    /**
     * The device identifier of the amplifier.
     */
    deviceIdentifier?: string;

    /**
     * The manufacturer of the amplifier.
     */
    manufacturer?: string;

    /**
     * The model name of the amplifier.
     */
    modelName?: string;

    /**
     * The amplifier power level, in watts.
     */
    power?: number;
  }

  /**
   * An RF Antenna associated with an RF Emitter Details.
   */
  export interface Antenna {
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
     * A flag to indicate whether the antenna points at a fixed azimuth/elevation.
     */
    azElFixed?: boolean;

    /**
     * The set of antenna feeds for this antenna.
     */
    feeds?: Array<Antenna.Feed>;

    /**
     * Antenna azimuth, in degrees clockwise from true North, for a fixed antenna.
     */
    fixedAzimuth?: number;

    /**
     * Antenna elevation, in degrees, for a fixed antenna.
     */
    fixedElevation?: number;

    /**
     * Array of maximum azimuths, in degrees.
     */
    maxAzimuths?: Array<number>;

    /**
     * Maximum elevation, in degrees.
     */
    maxElevation?: number;

    /**
     * Array of minimum azimuths, in degrees.
     */
    minAzimuths?: Array<number>;

    /**
     * Minimum elevation, in degrees.
     */
    minElevation?: number;

    /**
     * The name of the antenna.
     */
    name?: string;

    /**
     * The set of receiver channels for this antenna.
     */
    receiverChannels?: Array<Antenna.ReceiverChannel>;

    /**
     * The set of transmit channels for this antenna.
     */
    transmitChannels?: Array<Antenna.TransmitChannel>;
  }

  export namespace Antenna {
    /**
     * An RF Antenna Feed associated with an RF Antenna.
     */
    export interface Feed {
      /**
       * Maximum frequency, in megahertz.
       */
      freqMax?: number;

      /**
       * Minimum frequency, in megahertz.
       */
      freqMin?: number;

      /**
       * The feed name.
       */
      name?: string;

      /**
       * The antenna feed linear/circular polarization (e.g. HORIZONTAL, VERTICAL,
       * LEFT_HAND_CIRCULAR, RIGHT_HAND_CIRCULAR).
       */
      polarization?: string;
    }

    /**
     * An RF Antenna Receiver Channel associated with an RF Antenna.
     */
    export interface ReceiverChannel {
      /**
       * The receiver bandwidth, in megahertz, must satisfy the constraint: minBandwidth
       * ≤ bandwidth ≤ maxBandwidth.
       */
      bandwidth?: number;

      /**
       * The receive channel number.
       */
      channelNum?: string;

      /**
       * The receive channel device identifier.
       */
      deviceIdentifier?: string;

      /**
       * Maximum frequency, in megahertz.
       */
      freqMax?: number;

      /**
       * Minimum frequency, in megahertz.
       */
      freqMin?: number;

      /**
       * The maximum receiver bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      maxBandwidth?: number;

      /**
       * The receiver bandwidth, in megahertz, must satisfy the constraint: minBandwidth
       * ≤ bandwidth ≤ maxBandwidth.
       */
      minBandwidth?: number;

      /**
       * Receiver sensitivity, in decibel-milliwatts.
       */
      sensitivity?: number;
    }

    /**
     * An RF Antenna Transmit Channel associated with an RF Antenna.
     */
    export interface TransmitChannel {
      /**
       * Transmit power, in watts.
       */
      power: number;

      /**
       * The transmitter bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      bandwidth?: number;

      /**
       * The transmit channel number.
       */
      channelNum?: string;

      /**
       * The transmit channel device identifier.
       */
      deviceIdentifier?: string;

      /**
       * The transmitter frequency, in megahertz, must satisfy the constraint: freqMin <=
       * freq <= freqMax.
       */
      freq?: number;

      /**
       * The maximum transmitter frequency, in megahertz, must satisfy the constraint:
       * freqMin ≤ freq ≤ freqMax.
       */
      freqMax?: number;

      /**
       * The minimum transmitter frequency, in megahertz, must satisfy the constraint:
       * freqMin ≤ freq ≤ freqMax.
       */
      freqMin?: number;

      /**
       * The hardware sample rate, in bits per second for this transmit channel.
       */
      hardwareSampleRate?: number;

      /**
       * The maximum transmitter bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      maxBandwidth?: number;

      /**
       * Maximum gain, in decibels.
       */
      maxGain?: number;

      /**
       * The minimum transmitter bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      minBandwidth?: number;

      /**
       * Minimum gain, in decibels.
       */
      minGain?: number;

      /**
       * The set of sample rates supported by this transmit channel, in bits per second.
       */
      sampleRates?: Array<number>;
    }
  }

  /**
   * An RF Emitter Power Offset associated with an RF Emitter Details.
   */
  export interface PowerOffset {
    /**
     * The RF frequency band (e.g. HF, VHF, P, UHF, L, S, C, X, KU, K, KA, V, W, MM).
     */
    frequencyBand?: string;

    /**
     * Power offset, in decibels.
     */
    powerOffset?: number;
  }

  /**
   * An RF Emitter SW Service associated with an RF Emitter Details.
   */
  export interface Service {
    /**
     * The name for this software service.
     */
    name?: string;

    /**
     * The version for this software service.
     */
    version?: string;
  }

  /**
   * An RF Emitter TTP associated with an RF Emitter Details.
   */
  export interface Ttp {
    /**
     * The name of the output signal.
     */
    outputSignalName?: string;

    /**
     * The set of TTPs affected by this signal.
     */
    techniqueDefinitions?: Array<Ttp.TechniqueDefinition>;
  }

  export namespace Ttp {
    /**
     * An RF Emitter Technique Definition associated with an RF Emitter TTP.
     */
    export interface TechniqueDefinition {
      /**
       * The EW Emitter system technique name.
       */
      name?: string;

      /**
       * The set of required/optional parameters for this technique.
       */
      paramDefinitions?: Array<TechniqueDefinition.ParamDefinition>;
    }

    export namespace TechniqueDefinition {
      /**
       * An RF Emitter Technique Parameter Definition associated with an RF Emitter
       * Technique Definition.
       */
      export interface ParamDefinition {
        /**
         * Default parameter value used if not overridden in a SEW task definition.
         */
        defaultValue?: string;

        /**
         * Maximum allowable value for a numeric parameter.
         */
        max?: number;

        /**
         * Minimum allowable value for a numeric parameter.
         */
        min?: number;

        /**
         * The name of the parameter.
         */
        name?: string;

        /**
         * A flag to specify that a parameter is optional.
         */
        optional?: boolean;

        /**
         * The type of parameter (e.g. STRING, DOUBLE, INT, LIST).
         */
        type?: string;

        /**
         * Units (degrees, seconds, decibels, etc.) for a numeric parameter.
         */
        units?: string;

        /**
         * Valid values for strictly defined parameters.
         */
        validValues?: Array<string>;
      }
    }
  }
}

export interface DetailUpdateParams {
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
  body_id?: string;

  /**
   * Alternate facility name for this RF Emitter.
   */
  alternateFacilityName?: string;

  /**
   * Optional alternate name or alias for this RF Emitter.
   */
  altName?: string;

  /**
   * An RF Amplifier associated with an RF Emitter Details.
   */
  amplifier?: DetailUpdateParams.Amplifier;

  /**
   * The set of antennas hosted on this EW Emitter system.
   */
  antennas?: Array<DetailUpdateParams.Antenna>;

  /**
   * Barrage noise bandwidth, in megahertz.
   */
  barrageNoiseBandwidth?: number;

  /**
   * The length of time, in seconds, for the RF Emitter built-in test to run to
   * completion.
   */
  bitRunTime?: number;

  /**
   * Detailed description of the RF Emitter.
   */
  description?: string;

  /**
   * Designator of this RF Emitter.
   */
  designator?: string;

  /**
   * Doppler noise value, in megahertz.
   */
  dopplerNoise?: number;

  /**
   * Digital Form Radio Memory instantaneous bandwidth in megahertz.
   */
  drfmInstantaneousBandwidth?: number;

  /**
   * Family of this RF Emitter type.
   */
  family?: string;

  /**
   * A fixed attenuation value to be set on the SRF Emitter HPA when commanding an
   * Electronic Attack/Techniques Tactics and Procedures task, in decibels.
   */
  fixedAttenuation?: number;

  /**
   * Unique identifier of the organization which manufactured this RF Emitter.
   */
  idManufacturerOrg?: string;

  /**
   * Unique identifier of the location of the production facility for this RF
   * Emitter.
   */
  idProductionFacilityLocation?: string;

  /**
   * COCOM that has temporary responsibility for scheduling and management of the RF
   * Emitter (e.g. SPACEFOR-CENT, SPACEFOR-EURAF, SPACEFOR-INDOPAC, SPACEFOR-KOR,
   * SPACEFOR-STRATNORTH, SPACESOC, NONE).
   */
  loanedToCocom?: string;

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
   * A set of system/frequency band adjustments to the power offset commanded in an
   * EA/TTP task.
   */
  powerOffsets?: Array<DetailUpdateParams.PowerOffset>;

  /**
   * The length of time, in seconds, for the RF Emitter to prepare for a task,
   * including sufficient time to slew the antenna and configure the equipment.
   */
  prepTime?: number;

  /**
   * Primary COCOM that is responsible for scheduling and management of the RF
   * Emitter (e.g. SPACEFOR-CENT, SPACEFOR-EURAF, SPACEFOR-INDOPAC, SPACEFOR-KOR,
   * SPACEFOR-STRATNORTH, SPACESOC, NONE).
   */
  primaryCocom?: string;

  /**
   * Name of the production facility for this RF Emitter.
   */
  productionFacilityName?: string;

  /**
   * Type or name of receiver.
   */
  receiverType?: string;

  /**
   * Secondary notes on the RF Emitter.
   */
  secondaryNotes?: string;

  /**
   * The set of software services running on this EW Emitter system.
   */
  services?: Array<DetailUpdateParams.Service>;

  /**
   * Receiver sensitivity is the lowest power level at which the receiver can detect
   * an RF signal and demodulate data. Sensitivity is purely a receiver specification
   * and is independent of the transmitter. End sensitivity range, in
   * decibel-milliwatts.
   */
  systemSensitivityEnd?: number;

  /**
   * Receiver sensitivity is the lowest power level at which the receiver can detect
   * an RF signal and demodulate data. Sensitivity is purely a receiver specification
   * and is independent of the transmitter. Start sensitivity range, in
   * decibel-milliwatts.
   */
  systemSensitivityStart?: number;

  /**
   * The set of EA/TTP techniques that are supported by this EW Emitter system.
   */
  ttps?: Array<DetailUpdateParams.Ttp>;

  /**
   * Array of URLs containing additional information on this RF Emitter.
   */
  urls?: Array<string>;
}

export namespace DetailUpdateParams {
  /**
   * An RF Amplifier associated with an RF Emitter Details.
   */
  export interface Amplifier {
    /**
     * The device identifier of the amplifier.
     */
    deviceIdentifier?: string;

    /**
     * The manufacturer of the amplifier.
     */
    manufacturer?: string;

    /**
     * The model name of the amplifier.
     */
    modelName?: string;

    /**
     * The amplifier power level, in watts.
     */
    power?: number;
  }

  /**
   * An RF Antenna associated with an RF Emitter Details.
   */
  export interface Antenna {
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
     * A flag to indicate whether the antenna points at a fixed azimuth/elevation.
     */
    azElFixed?: boolean;

    /**
     * The set of antenna feeds for this antenna.
     */
    feeds?: Array<Antenna.Feed>;

    /**
     * Antenna azimuth, in degrees clockwise from true North, for a fixed antenna.
     */
    fixedAzimuth?: number;

    /**
     * Antenna elevation, in degrees, for a fixed antenna.
     */
    fixedElevation?: number;

    /**
     * Array of maximum azimuths, in degrees.
     */
    maxAzimuths?: Array<number>;

    /**
     * Maximum elevation, in degrees.
     */
    maxElevation?: number;

    /**
     * Array of minimum azimuths, in degrees.
     */
    minAzimuths?: Array<number>;

    /**
     * Minimum elevation, in degrees.
     */
    minElevation?: number;

    /**
     * The name of the antenna.
     */
    name?: string;

    /**
     * The set of receiver channels for this antenna.
     */
    receiverChannels?: Array<Antenna.ReceiverChannel>;

    /**
     * The set of transmit channels for this antenna.
     */
    transmitChannels?: Array<Antenna.TransmitChannel>;
  }

  export namespace Antenna {
    /**
     * An RF Antenna Feed associated with an RF Antenna.
     */
    export interface Feed {
      /**
       * Maximum frequency, in megahertz.
       */
      freqMax?: number;

      /**
       * Minimum frequency, in megahertz.
       */
      freqMin?: number;

      /**
       * The feed name.
       */
      name?: string;

      /**
       * The antenna feed linear/circular polarization (e.g. HORIZONTAL, VERTICAL,
       * LEFT_HAND_CIRCULAR, RIGHT_HAND_CIRCULAR).
       */
      polarization?: string;
    }

    /**
     * An RF Antenna Receiver Channel associated with an RF Antenna.
     */
    export interface ReceiverChannel {
      /**
       * The receiver bandwidth, in megahertz, must satisfy the constraint: minBandwidth
       * ≤ bandwidth ≤ maxBandwidth.
       */
      bandwidth?: number;

      /**
       * The receive channel number.
       */
      channelNum?: string;

      /**
       * The receive channel device identifier.
       */
      deviceIdentifier?: string;

      /**
       * Maximum frequency, in megahertz.
       */
      freqMax?: number;

      /**
       * Minimum frequency, in megahertz.
       */
      freqMin?: number;

      /**
       * The maximum receiver bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      maxBandwidth?: number;

      /**
       * The receiver bandwidth, in megahertz, must satisfy the constraint: minBandwidth
       * ≤ bandwidth ≤ maxBandwidth.
       */
      minBandwidth?: number;

      /**
       * Receiver sensitivity, in decibel-milliwatts.
       */
      sensitivity?: number;
    }

    /**
     * An RF Antenna Transmit Channel associated with an RF Antenna.
     */
    export interface TransmitChannel {
      /**
       * Transmit power, in watts.
       */
      power: number;

      /**
       * The transmitter bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      bandwidth?: number;

      /**
       * The transmit channel number.
       */
      channelNum?: string;

      /**
       * The transmit channel device identifier.
       */
      deviceIdentifier?: string;

      /**
       * The transmitter frequency, in megahertz, must satisfy the constraint: freqMin <=
       * freq <= freqMax.
       */
      freq?: number;

      /**
       * The maximum transmitter frequency, in megahertz, must satisfy the constraint:
       * freqMin ≤ freq ≤ freqMax.
       */
      freqMax?: number;

      /**
       * The minimum transmitter frequency, in megahertz, must satisfy the constraint:
       * freqMin ≤ freq ≤ freqMax.
       */
      freqMin?: number;

      /**
       * The hardware sample rate, in bits per second for this transmit channel.
       */
      hardwareSampleRate?: number;

      /**
       * The maximum transmitter bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      maxBandwidth?: number;

      /**
       * Maximum gain, in decibels.
       */
      maxGain?: number;

      /**
       * The minimum transmitter bandwidth, in megahertz, must satisfy the constraint:
       * minBandwidth ≤ bandwidth ≤ maxBandwidth.
       */
      minBandwidth?: number;

      /**
       * Minimum gain, in decibels.
       */
      minGain?: number;

      /**
       * The set of sample rates supported by this transmit channel, in bits per second.
       */
      sampleRates?: Array<number>;
    }
  }

  /**
   * An RF Emitter Power Offset associated with an RF Emitter Details.
   */
  export interface PowerOffset {
    /**
     * The RF frequency band (e.g. HF, VHF, P, UHF, L, S, C, X, KU, K, KA, V, W, MM).
     */
    frequencyBand?: string;

    /**
     * Power offset, in decibels.
     */
    powerOffset?: number;
  }

  /**
   * An RF Emitter SW Service associated with an RF Emitter Details.
   */
  export interface Service {
    /**
     * The name for this software service.
     */
    name?: string;

    /**
     * The version for this software service.
     */
    version?: string;
  }

  /**
   * An RF Emitter TTP associated with an RF Emitter Details.
   */
  export interface Ttp {
    /**
     * The name of the output signal.
     */
    outputSignalName?: string;

    /**
     * The set of TTPs affected by this signal.
     */
    techniqueDefinitions?: Array<Ttp.TechniqueDefinition>;
  }

  export namespace Ttp {
    /**
     * An RF Emitter Technique Definition associated with an RF Emitter TTP.
     */
    export interface TechniqueDefinition {
      /**
       * The EW Emitter system technique name.
       */
      name?: string;

      /**
       * The set of required/optional parameters for this technique.
       */
      paramDefinitions?: Array<TechniqueDefinition.ParamDefinition>;
    }

    export namespace TechniqueDefinition {
      /**
       * An RF Emitter Technique Parameter Definition associated with an RF Emitter
       * Technique Definition.
       */
      export interface ParamDefinition {
        /**
         * Default parameter value used if not overridden in a SEW task definition.
         */
        defaultValue?: string;

        /**
         * Maximum allowable value for a numeric parameter.
         */
        max?: number;

        /**
         * Minimum allowable value for a numeric parameter.
         */
        min?: number;

        /**
         * The name of the parameter.
         */
        name?: string;

        /**
         * A flag to specify that a parameter is optional.
         */
        optional?: boolean;

        /**
         * The type of parameter (e.g. STRING, DOUBLE, INT, LIST).
         */
        type?: string;

        /**
         * Units (degrees, seconds, decibels, etc.) for a numeric parameter.
         */
        units?: string;

        /**
         * Valid values for strictly defined parameters.
         */
        validValues?: Array<string>;
      }
    }
  }
}

export interface DetailListParams extends OffsetPageParams {}

export interface DetailCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface DetailGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface DetailTupleParams {
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

export declare namespace Details {
  export {
    type DetailListResponse as DetailListResponse,
    type DetailCountResponse as DetailCountResponse,
    type DetailGetResponse as DetailGetResponse,
    type DetailQueryhelpResponse as DetailQueryhelpResponse,
    type DetailTupleResponse as DetailTupleResponse,
    type DetailListResponsesOffsetPage as DetailListResponsesOffsetPage,
    type DetailCreateParams as DetailCreateParams,
    type DetailUpdateParams as DetailUpdateParams,
    type DetailListParams as DetailListParams,
    type DetailCountParams as DetailCountParams,
    type DetailGetParams as DetailGetParams,
    type DetailTupleParams as DetailTupleParams,
  };
}
