// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Rfemitterdetails extends APIResource {
  /**
   * Service operation to take a single RFEmitterDetails as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: RfemitterdetailCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/rfemitterdetails', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to update an RFEmitterDetails. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   */
  update(
    pathId: string,
    body: RfemitterdetailUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/udl/rfemitterdetails/${pathId}`, {
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
  list(options?: Core.RequestOptions): Core.APIPromise<RfemitterdetailListResponse> {
    return this._client.get('/udl/rfemitterdetails', options);
  }

  /**
   * Service operation to delete an RFEmitterDetails specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/rfemitterdetails/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/rfemitterdetails/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single RFEmitterDetails by its unique ID passed as a
   * path parameter.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<RfemitterdetailGetResponse> {
    return this._client.get(`/udl/rfemitterdetails/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/rfemitterdetails/queryhelp', {
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
    query: RfemitterdetailTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RfemitterdetailTupleResponse> {
    return this._client.get('/udl/rfemitterdetails/tuple', { query, ...options });
  }
}

export type RfemitterdetailListResponse = Array<RfemitterdetailListResponse.RfemitterdetailListResponseItem>;

export namespace RfemitterdetailListResponse {
  /**
   * Details for a particular RF Emitter, collected by a particular source. An RF
   * Emitter may have multiple details records from various sources.
   */
  export interface RfemitterdetailListResponseItem {
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
}

export type RfemitterdetailCountResponse = string;

/**
 * Details for a particular RF Emitter, collected by a particular source. An RF
 * Emitter may have multiple details records from various sources.
 */
export interface RfemitterdetailGetResponse {
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
  manufacturerOrg?: RfemitterdetailGetResponse.ManufacturerOrg;

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
  productionFacilityLocation?: RfemitterdetailGetResponse.ProductionFacilityLocation;

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

export namespace RfemitterdetailGetResponse {
  /**
   * An organization such as a corporation, manufacturer, consortium, government,
   * etc. An organization may have parent and child organizations as well as link to
   * a former organization if this org previously existed as another organization.
   */
  export interface ManufacturerOrg {
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
     * Organization name.
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Type of organization (e.g. GOVERNMENT, CORPORATION, CONSORTIUM, ACADEMIC).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Boolean indicating if this organization is currently active.
     */
    active?: boolean;

    /**
     * Subtype or category of the organization (e.g. Private company, stock market
     * quoted company, subsidiary, goverment department/agency, etc).
     */
    category?: string;

    /**
     * Country of the physical location of the organization. This value is typically
     * the ISO 3166 Alpha-2 two-character country code. However, it can also represent
     * various consortiums that do not appear in the ISO document. The code must
     * correspond to an existing country in the UDL’s country API. Call
     * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
     * alternate code values that exist for the specified country code.
     */
    countryCode?: string;

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
     * Organization description.
     */
    description?: string;

    /**
     * Optional externally provided identifier for this row.
     */
    externalId?: string;

    /**
     * Country of registration or ownership of the organization. This value is
     * typically the ISO 3166 Alpha-2 two-character country code, however it can also
     * represent various consortiums that do not appear in the ISO document. The code
     * must correspond to an existing country in the UDL’s country API. Call
     * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
     * alternate code values that exist for the specified country code.
     */
    nationality?: string;

    /**
     * Read-only collection of additional OrganizationDetails by various sources for
     * this organization, ignored on create/update. These details must be created
     * separately via the /udl/organizationdetails operations.
     */
    organizationDetails?: Array<ManufacturerOrg.OrganizationDetail>;

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
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }

  export namespace ManufacturerOrg {
    /**
     * Model representation of additional detailed organization data as collected by a
     * particular source.
     */
    export interface OrganizationDetail {
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
       * Unique identifier of the parent organization.
       */
      idOrganization: string;

      /**
       * Organization details name.
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
       * Street number of the organization.
       */
      address1?: string;

      /**
       * Field for additional organization address information such as PO Box and unit
       * number.
       */
      address2?: string;

      /**
       * Contains the third line of address information for an organization.
       */
      address3?: string;

      /**
       * Designated broker for this organization.
       */
      broker?: string;

      /**
       * For organizations of type CORPORATION, the name of the Chief Executive Officer.
       */
      ceo?: string;

      /**
       * For organizations of type CORPORATION, the name of the Chief Financial Officer.
       */
      cfo?: string;

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
       * For organizations of type CORPORATION, the name of the Chief Technology Officer.
       */
      cto?: string;

      /**
       * Organization description.
       */
      description?: string;

      /**
       * For organizations of type CORPORATION, the company EBITDA value as of
       * financialYearEndDate in US Dollars.
       */
      ebitda?: number;

      /**
       * Listed contact email address for the organization.
       */
      email?: string;

      /**
       * For organizations of type CORPORATION, notes on company financials.
       */
      financialNotes?: string;

      /**
       * For organizations of type CORPORATION, the effective financial year end date for
       * revenue, EBITDA, and profit values.
       */
      financialYearEndDate?: string;

      /**
       * Satellite fleet planning notes for this organization.
       */
      fleetPlanNotes?: string;

      /**
       * Former organization ID (if this organization previously existed as another
       * organization).
       */
      formerOrgId?: string;

      /**
       * Total number of FTEs in this organization.
       */
      ftes?: number;

      /**
       * Administrative boundaries of the first sub-national level. Level 1 is simply the
       * largest demarcation under whatever demarcation criteria has been determined by
       * the governing body. For example, this may be a state or province.
       */
      geoAdminLevel1?: string;

      /**
       * Administrative boundaries of the second sub-national level. Level 2 is simply
       * the second largest demarcation under whatever demarcation criteria has been
       * determined by the governing body. For example, this may be a county or district.
       */
      geoAdminLevel2?: string;

      /**
       * Administrative boundaries of the third sub-national level. Level 3 is simply the
       * third largest demarcation under whatever demarcation criteria has been
       * determined by the governing body. For example, this may be a city or township.
       */
      geoAdminLevel3?: string;

      /**
       * Mass ranking for this organization.
       */
      massRanking?: number;

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
       * Parent organization ID of this organization if it is a child organization.
       */
      parentOrgId?: string;

      /**
       * A postal code, such as PIN or ZIP Code, is a series of letters or digits or both
       * included in the postal address of the organization.
       */
      postalCode?: string;

      /**
       * For organizations of type CORPORATION, total annual profit as of
       * financialYearEndDate in US Dollars.
       */
      profit?: number;

      /**
       * For organizations of type CORPORATION, total annual revenue as of
       * financialYearEndDate in US Dollars.
       */
      revenue?: number;

      /**
       * Revenue ranking for this organization.
       */
      revenueRanking?: number;

      /**
       * The name of the risk manager for the organization.
       */
      riskManager?: string;

      /**
       * Notes on the services provided by the organization.
       */
      servicesNotes?: string;

      /**
       * Optional array of provider/source specific tags for this data, where each
       * element is no longer than 32 characters, used for implementing data owner
       * conditional access controls to restrict access to the data. Should be left null
       * by data providers unless conditional access controls are coordinated with the
       * UDL team.
       */
      tags?: Array<string>;

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
  }

  /**
   * Model representation of a location, which is a specific fixed point on the earth
   * and is used to denote the locations of fixed sensors, operating units, etc.
   */
  export interface ProductionFacilityLocation {
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
     * Location name.
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Altitude of the location, in kilometers.
     */
    altitude?: number;

    /**
     * The country code. This value is typically the ISO 3166 Alpha-2 two-character
     * country code, however it can also represent various consortiums that do not
     * appear in the ISO document. The code must correspond to an existing country in
     * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
     * ISO Alpha-3 code, or alternate code values that exist for the specified country
     * code.
     */
    countryCode?: string;

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
     * Unique identifier of the location, auto-generated by the system.
     */
    idLocation?: string;

    /**
     * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
     * south of equator).
     */
    lat?: number;

    /**
     * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon?: number;

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
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }
}

export type RfemitterdetailTupleResponse =
  Array<RfemitterdetailTupleResponse.RfemitterdetailTupleResponseItem>;

export namespace RfemitterdetailTupleResponse {
  /**
   * Details for a particular RF Emitter, collected by a particular source. An RF
   * Emitter may have multiple details records from various sources.
   */
  export interface RfemitterdetailTupleResponseItem {
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
    manufacturerOrg?: RfemitterdetailTupleResponseItem.ManufacturerOrg;

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
    productionFacilityLocation?: RfemitterdetailTupleResponseItem.ProductionFacilityLocation;

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

  export namespace RfemitterdetailTupleResponseItem {
    /**
     * An organization such as a corporation, manufacturer, consortium, government,
     * etc. An organization may have parent and child organizations as well as link to
     * a former organization if this org previously existed as another organization.
     */
    export interface ManufacturerOrg {
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
       * Organization name.
       */
      name: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Type of organization (e.g. GOVERNMENT, CORPORATION, CONSORTIUM, ACADEMIC).
       */
      type: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Boolean indicating if this organization is currently active.
       */
      active?: boolean;

      /**
       * Subtype or category of the organization (e.g. Private company, stock market
       * quoted company, subsidiary, goverment department/agency, etc).
       */
      category?: string;

      /**
       * Country of the physical location of the organization. This value is typically
       * the ISO 3166 Alpha-2 two-character country code. However, it can also represent
       * various consortiums that do not appear in the ISO document. The code must
       * correspond to an existing country in the UDL’s country API. Call
       * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
       * alternate code values that exist for the specified country code.
       */
      countryCode?: string;

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
       * Organization description.
       */
      description?: string;

      /**
       * Optional externally provided identifier for this row.
       */
      externalId?: string;

      /**
       * Country of registration or ownership of the organization. This value is
       * typically the ISO 3166 Alpha-2 two-character country code, however it can also
       * represent various consortiums that do not appear in the ISO document. The code
       * must correspond to an existing country in the UDL’s country API. Call
       * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
       * alternate code values that exist for the specified country code.
       */
      nationality?: string;

      /**
       * Read-only collection of additional OrganizationDetails by various sources for
       * this organization, ignored on create/update. These details must be created
       * separately via the /udl/organizationdetails operations.
       */
      organizationDetails?: Array<ManufacturerOrg.OrganizationDetail>;

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
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }

    export namespace ManufacturerOrg {
      /**
       * Model representation of additional detailed organization data as collected by a
       * particular source.
       */
      export interface OrganizationDetail {
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
         * Unique identifier of the parent organization.
         */
        idOrganization: string;

        /**
         * Organization details name.
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
         * Street number of the organization.
         */
        address1?: string;

        /**
         * Field for additional organization address information such as PO Box and unit
         * number.
         */
        address2?: string;

        /**
         * Contains the third line of address information for an organization.
         */
        address3?: string;

        /**
         * Designated broker for this organization.
         */
        broker?: string;

        /**
         * For organizations of type CORPORATION, the name of the Chief Executive Officer.
         */
        ceo?: string;

        /**
         * For organizations of type CORPORATION, the name of the Chief Financial Officer.
         */
        cfo?: string;

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
         * For organizations of type CORPORATION, the name of the Chief Technology Officer.
         */
        cto?: string;

        /**
         * Organization description.
         */
        description?: string;

        /**
         * For organizations of type CORPORATION, the company EBITDA value as of
         * financialYearEndDate in US Dollars.
         */
        ebitda?: number;

        /**
         * Listed contact email address for the organization.
         */
        email?: string;

        /**
         * For organizations of type CORPORATION, notes on company financials.
         */
        financialNotes?: string;

        /**
         * For organizations of type CORPORATION, the effective financial year end date for
         * revenue, EBITDA, and profit values.
         */
        financialYearEndDate?: string;

        /**
         * Satellite fleet planning notes for this organization.
         */
        fleetPlanNotes?: string;

        /**
         * Former organization ID (if this organization previously existed as another
         * organization).
         */
        formerOrgId?: string;

        /**
         * Total number of FTEs in this organization.
         */
        ftes?: number;

        /**
         * Administrative boundaries of the first sub-national level. Level 1 is simply the
         * largest demarcation under whatever demarcation criteria has been determined by
         * the governing body. For example, this may be a state or province.
         */
        geoAdminLevel1?: string;

        /**
         * Administrative boundaries of the second sub-national level. Level 2 is simply
         * the second largest demarcation under whatever demarcation criteria has been
         * determined by the governing body. For example, this may be a county or district.
         */
        geoAdminLevel2?: string;

        /**
         * Administrative boundaries of the third sub-national level. Level 3 is simply the
         * third largest demarcation under whatever demarcation criteria has been
         * determined by the governing body. For example, this may be a city or township.
         */
        geoAdminLevel3?: string;

        /**
         * Mass ranking for this organization.
         */
        massRanking?: number;

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
         * Parent organization ID of this organization if it is a child organization.
         */
        parentOrgId?: string;

        /**
         * A postal code, such as PIN or ZIP Code, is a series of letters or digits or both
         * included in the postal address of the organization.
         */
        postalCode?: string;

        /**
         * For organizations of type CORPORATION, total annual profit as of
         * financialYearEndDate in US Dollars.
         */
        profit?: number;

        /**
         * For organizations of type CORPORATION, total annual revenue as of
         * financialYearEndDate in US Dollars.
         */
        revenue?: number;

        /**
         * Revenue ranking for this organization.
         */
        revenueRanking?: number;

        /**
         * The name of the risk manager for the organization.
         */
        riskManager?: string;

        /**
         * Notes on the services provided by the organization.
         */
        servicesNotes?: string;

        /**
         * Optional array of provider/source specific tags for this data, where each
         * element is no longer than 32 characters, used for implementing data owner
         * conditional access controls to restrict access to the data. Should be left null
         * by data providers unless conditional access controls are coordinated with the
         * UDL team.
         */
        tags?: Array<string>;

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
    }

    /**
     * Model representation of a location, which is a specific fixed point on the earth
     * and is used to denote the locations of fixed sensors, operating units, etc.
     */
    export interface ProductionFacilityLocation {
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
       * Location name.
       */
      name: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Altitude of the location, in kilometers.
       */
      altitude?: number;

      /**
       * The country code. This value is typically the ISO 3166 Alpha-2 two-character
       * country code, however it can also represent various consortiums that do not
       * appear in the ISO document. The code must correspond to an existing country in
       * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
       * ISO Alpha-3 code, or alternate code values that exist for the specified country
       * code.
       */
      countryCode?: string;

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
       * Unique identifier of the location, auto-generated by the system.
       */
      idLocation?: string;

      /**
       * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
       * south of equator).
       */
      lat?: number;

      /**
       * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
       * values west of Prime Meridian).
       */
      lon?: number;

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
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }
  }
}

export interface RfemitterdetailCreateParams {
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

export interface RfemitterdetailUpdateParams {
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

export interface RfemitterdetailTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

export declare namespace Rfemitterdetails {
  export {
    type RfemitterdetailListResponse as RfemitterdetailListResponse,
    type RfemitterdetailCountResponse as RfemitterdetailCountResponse,
    type RfemitterdetailGetResponse as RfemitterdetailGetResponse,
    type RfemitterdetailTupleResponse as RfemitterdetailTupleResponse,
    type RfemitterdetailCreateParams as RfemitterdetailCreateParams,
    type RfemitterdetailUpdateParams as RfemitterdetailUpdateParams,
    type RfemitterdetailTupleParams as RfemitterdetailTupleParams,
  };
}
