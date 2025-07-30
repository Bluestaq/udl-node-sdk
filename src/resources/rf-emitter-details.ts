// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as LocationAPI from 'bluestaq@unified-data-library/resources/location';
import * as OrganizationAPI from 'bluestaq@unified-data-library/resources/organization';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class RfEmitterDetails extends APIResource {
  /**
   * Service operation to take a single RFEmitterDetails as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.rfEmitterDetails.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idRFEmitter: 'RFEMITTER-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: RfEmitterDetailCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/rfemitterdetails', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update an RFEmitterDetails. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.rfEmitterDetails.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idRFEmitter: 'RFEMITTER-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: RfEmitterDetailUpdateParams, options?: RequestOptions): APIPromise<void> {
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
   * for await (const rfEmitterDetailListResponse of client.rfEmitterDetails.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: RfEmitterDetailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RfEmitterDetailListResponsesOffsetPage, RfEmitterDetailListResponse> {
    return this._client.getAPIList('/udl/rfemitterdetails', OffsetPage<RfEmitterDetailListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete an RFEmitterDetails specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.rfEmitterDetails.delete('id');
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
   * const response = await client.rfEmitterDetails.count();
   * ```
   */
  count(
    query: RfEmitterDetailCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/rfemitterdetails/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single RFEmitterDetails by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const rfEmitterDetail = await client.rfEmitterDetails.get(
   *   'id',
   * );
   * ```
   */
  get(
    id: string,
    query: RfEmitterDetailGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RfEmitterDetailGetResponse> {
    return this._client.get(path`/udl/rfemitterdetails/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.rfEmitterDetails.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<RfEmitterDetailQueryhelpResponse> {
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
   * const response = await client.rfEmitterDetails.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(
    query: RfEmitterDetailTupleParams,
    options?: RequestOptions,
  ): APIPromise<RfEmitterDetailTupleResponse> {
    return this._client.get('/udl/rfemitterdetails/tuple', { query, ...options });
  }
}

export type RfEmitterDetailListResponsesOffsetPage = OffsetPage<RfEmitterDetailListResponse>;

/**
 * Details for a particular RF Emitter, collected by a particular source. An RF
 * Emitter may have multiple details records from various sources.
 */
export interface RfEmitterDetailListResponse {
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
   * Array of URLs containing additional information on this RF Emitter.
   */
  urls?: Array<string>;
}

export type RfEmitterDetailCountResponse = string;

/**
 * Details for a particular RF Emitter, collected by a particular source. An RF
 * Emitter may have multiple details records from various sources.
 */
export interface RfEmitterDetailGetResponse {
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
  manufacturerOrg?: OrganizationAPI.OrganizationFull;

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
  productionFacilityLocation?: LocationAPI.LocationFull;

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

export interface RfEmitterDetailQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<RfEmitterDetailQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace RfEmitterDetailQueryhelpResponse {
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

export type RfEmitterDetailTupleResponse =
  Array<RfEmitterDetailTupleResponse.RfEmitterDetailTupleResponseItem>;

export namespace RfEmitterDetailTupleResponse {
  /**
   * Details for a particular RF Emitter, collected by a particular source. An RF
   * Emitter may have multiple details records from various sources.
   */
  export interface RfEmitterDetailTupleResponseItem {
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
    manufacturerOrg?: OrganizationAPI.OrganizationFull;

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
    productionFacilityLocation?: LocationAPI.LocationFull;

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

export interface RfEmitterDetailCreateParams {
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
   * Array of URLs containing additional information on this RF Emitter.
   */
  urls?: Array<string>;
}

export interface RfEmitterDetailUpdateParams {
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
   * Array of URLs containing additional information on this RF Emitter.
   */
  urls?: Array<string>;
}

export interface RfEmitterDetailListParams extends OffsetPageParams {}

export interface RfEmitterDetailCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface RfEmitterDetailGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface RfEmitterDetailTupleParams {
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

export declare namespace RfEmitterDetails {
  export {
    type RfEmitterDetailListResponse as RfEmitterDetailListResponse,
    type RfEmitterDetailCountResponse as RfEmitterDetailCountResponse,
    type RfEmitterDetailGetResponse as RfEmitterDetailGetResponse,
    type RfEmitterDetailQueryhelpResponse as RfEmitterDetailQueryhelpResponse,
    type RfEmitterDetailTupleResponse as RfEmitterDetailTupleResponse,
    type RfEmitterDetailListResponsesOffsetPage as RfEmitterDetailListResponsesOffsetPage,
    type RfEmitterDetailCreateParams as RfEmitterDetailCreateParams,
    type RfEmitterDetailUpdateParams as RfEmitterDetailUpdateParams,
    type RfEmitterDetailListParams as RfEmitterDetailListParams,
    type RfEmitterDetailCountParams as RfEmitterDetailCountParams,
    type RfEmitterDetailGetParams as RfEmitterDetailGetParams,
    type RfEmitterDetailTupleParams as RfEmitterDetailTupleParams,
  };
}
