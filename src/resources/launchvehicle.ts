// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EnginesAPI from './engines';

export class Launchvehicle extends APIResource {
  /**
   * Service operation to take a single LaunchVehicle as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  create(body: LaunchvehicleCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/launchvehicle', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to update a single LaunchVehicle. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   */
  update(id1: string, body: LaunchvehicleUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/udl/launchvehicle/${id1}`, {
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
  list(options?: Core.RequestOptions): Core.APIPromise<LaunchvehicleListResponse> {
    return this._client.get('/udl/launchvehicle', options);
  }

  /**
   * Service operation to delete a LaunchVehicle object specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/launchvehicle/${id}`, {
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
    return this._client.get('/udl/launchvehicle/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single LaunchVehicle record by its unique ID passed
   * as a path parameter.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<LaunchvehicleGetResponse> {
    return this._client.get(`/udl/launchvehicle/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/launchvehicle/queryhelp', {
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
    query: LaunchvehicleTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LaunchvehicleTupleResponse> {
    return this._client.get('/udl/launchvehicle/tuple', { query, ...options });
  }
}

export type LaunchvehicleListResponse = Array<LaunchvehicleListResponse.LaunchvehicleListResponseItem>;

export namespace LaunchvehicleListResponse {
  /**
   * Model representation of basic information about known launch vehicles. A launch
   * vehicle may have several details records including characteristics and
   * information compiled by a particular source.
   */
  export interface LaunchvehicleListResponseItem {
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
     * Launch vehicle name.
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
     * Vehicle type.
     */
    type?: string;
  }
}

export type LaunchvehicleCountResponse = string;

/**
 * Model representation of basic information about known launch vehicles. A launch
 * vehicle may have several details records including characteristics and
 * information compiled by a particular source.
 */
export interface LaunchvehicleGetResponse {
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
   * Launch vehicle name.
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
   * Read-only collection of additional LaunchVehicleDetails by various sources for
   * this launch vehicle, ignored on create/update. These details must be created
   * separately via the /udl/launchvehicledetails operations.
   */
  launchVehicleDetails?: Array<LaunchvehicleGetResponse.LaunchVehicleDetail>;

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
   * Read-only collection of stages for this launch vehicle, ignored on
   * create/update.
   */
  stages?: Array<LaunchvehicleGetResponse.Stage>;

  /**
   * Vehicle type.
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

export namespace LaunchvehicleGetResponse {
  /**
   * Model representation of launch vehicle details and characteristics, compiled by
   * a particular source. A vehicle may have multiple details records from various
   * sources.
   */
  export interface LaunchVehicleDetail {
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
     * Identifier of the parent launch vehicle record.
     */
    idLaunchVehicle: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Launch vehicle attitude accuracy (degrees).
     */
    attitudeAccuracy?: number;

    /**
     * Vehicle category.
     */
    category?: string;

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
     * Launch vehicle deployment rotation rate in RPM.
     */
    deploymentRotationRate?: number;

    /**
     * Vehicle diameter in meters.
     */
    diameter?: number;

    /**
     * Launch vehicle estimated launch price in US dollars.
     */
    estLaunchPrice?: number;

    /**
     * Launch vehicle typical estimated launch price in US dollars.
     */
    estLaunchPriceTypical?: number;

    /**
     * Vehicle fairing maximum external diameter in meters.
     */
    fairingExternalDiameter?: number;

    /**
     * Vehicle fairing maximum internal diameter in meters.
     */
    fairingInternalDiameter?: number;

    /**
     * Vehicle fairing length in meters.
     */
    fairingLength?: number;

    /**
     * Vehicle fairing mass in kg.
     */
    fairingMass?: number;

    /**
     * Fairing material.
     */
    fairingMaterial?: string;

    /**
     * Name of the fairing.
     */
    fairingName?: string;

    /**
     * Notes/Description of the launch vehicle fairing.
     */
    fairingNotes?: string;

    /**
     * Vehicle family.
     */
    family?: string;

    /**
     * Maximum vehicle payload mass to GEO orbit in kg.
     */
    geoPayloadMass?: number;

    /**
     * Launch vehicle GTO Injection 3 Sigma Accuracy Apogee Margin (degrees).
     */
    gtoInj3SigAccuracyApogeeMargin?: number;

    /**
     * Launch vehicle GTO Injection 3 Sigma Accuracy Apogee Target (degrees).
     */
    gtoInj3SigAccuracyApogeeTarget?: number;

    /**
     * Launch vehicle GTO Injection 3 Sigma Accuracy Inclination Margin (degrees).
     */
    gtoInj3SigAccuracyInclinationMargin?: number;

    /**
     * Launch vehicle GTO Injection 3 Sigma Accuracy Inclination Target (degrees).
     */
    gtoInj3SigAccuracyInclinationTarget?: number;

    /**
     * Launch vehicle GTO Injection 3 Sigma Accuracy Perigee Margin (degrees).
     */
    gtoInj3SigAccuracyPerigeeMargin?: number;

    /**
     * Launch vehicle GTO Injection 3 Sigma Accuracy Perigee Target (degrees).
     */
    gtoInj3SigAccuracyPerigeeTarget?: number;

    /**
     * Max vehicle payload mass to Geo-Transfer Orbit in kg.
     */
    gtoPayloadMass?: number;

    /**
     * Vehicle total mass at launch time in kg (including all boosters).
     */
    launchMass?: number;

    /**
     * Vehicle launch prefix.
     */
    launchPrefix?: string;

    /**
     * Vehicle length in meters.
     */
    length?: number;

    /**
     * Max vehicle payload mass to LEO orbit in kg.
     */
    leoPayloadMass?: number;

    /**
     * An organization such as a corporation, manufacturer, consortium, government,
     * etc. An organization may have parent and child organizations as well as link to
     * a former organization if this org previously existed as another organization.
     */
    manufacturerOrg?: LaunchVehicleDetail.ManufacturerOrg;

    /**
     * ID of the organization that manufactures the launch vehicle.
     */
    manufacturerOrgId?: string;

    /**
     * Vehicle maximum acceleration load in g.
     */
    maxAccelLoad?: number;

    /**
     * Vehicle maximum acoustic level in dB.
     */
    maxAcousticLevel?: number;

    /**
     * Vehicle maximum acoustic level range in Hz.
     */
    maxAcousticLevelRange?: number;

    /**
     * Vehicle fairing maximum pressure change in kPa/sec.
     */
    maxFairingPressureChange?: number;

    /**
     * Vehicle maximum flight shock force in g.
     */
    maxFlightShockForce?: number;

    /**
     * Vehicle maximum flight shock frequency in Hz.
     */
    maxFlightShockFreq?: number;

    /**
     * Vehicle maximum payload lateral frequency in Hz.
     */
    maxPayloadFreqLat?: number;

    /**
     * Vehicle maximum payload longitudinal frequency in Hz.
     */
    maxPayloadFreqLon?: number;

    /**
     * Vehicle minor variant.
     */
    minorVariant?: string;

    /**
     * Notes/Description of the launch vehicle.
     */
    notes?: string;

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
     * Oxidizer type.
     */
    oxidizer?: string;

    /**
     * Notes/Description of the launch vehicle payload.
     */
    payloadNotes?: string;

    /**
     * Launch vehicle payload separation rate in m/s.
     */
    payloadSeparationRate?: number;

    /**
     * Propellant type.
     */
    propellant?: string;

    /**
     * Vehicle overall sound pressure level in dB.
     */
    soundPressureLevel?: number;

    /**
     * Optional URL for additional information on the vehicle.
     */
    sourceURL?: string;

    /**
     * Max vehicle payload mass to Sun-Synchronous Orbit in kg.
     */
    ssoPayloadMass?: number;

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

    /**
     * Vehicle variant.
     */
    variant?: string;
  }

  export namespace LaunchVehicleDetail {
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
  }

  /**
   * Launch stage information for a particular launch vehicle. A launch vehicle can
   * have several stages, each with 1 to many engines.
   */
  export interface Stage {
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
     * Identifier of the Engine record for this stage.
     */
    idEngine: string;

    /**
     * Identifier of the launch vehicle record for this stage.
     */
    idLaunchVehicle: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Description/notes of the stage avionics.
     */
    avionicsNotes?: string;

    /**
     * Total burn time of the stage engines in seconds.
     */
    burnTime?: number;

    /**
     * Control thruster 1 type.
     */
    controlThruster1?: string;

    /**
     * Control thruster 2 type.
     */
    controlThruster2?: string;

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
     * Stage maximum external diameter in meters.
     */
    diameter?: number;

    /**
     * Known launch vehicle engines and their performance characteristics and limits. A
     * launch vehicle has 1 to many engines per stage.
     */
    engine?: EnginesAPI.Engine;

    /**
     * Stage length in meters.
     */
    length?: number;

    /**
     * Thrust of the stage main engine at sea level in kN.
     */
    mainEngineThrustSeaLevel?: number;

    /**
     * Thrust of the stage main engine in a vacuum in kN.
     */
    mainEngineThrustVacuum?: number;

    /**
     * ID of the organization that manufactures this launch stage.
     */
    manufacturerOrgId?: string;

    /**
     * Stage gross mass in kg.
     */
    mass?: number;

    /**
     * Description/notes of the stage.
     */
    notes?: string;

    /**
     * Number of burns for the stage engines.
     */
    numBurns?: number;

    /**
     * Number of type control thruster 1.
     */
    numControlThruster1?: number;

    /**
     * Number of type control thruster 2.
     */
    numControlThruster2?: number;

    /**
     * The number of the specified engines on this launch stage.
     */
    numEngines?: number;

    /**
     * Number of launch stage elements used in this stage.
     */
    numStageElements?: number;

    /**
     * Number of vernier or additional engines.
     */
    numVernier?: number;

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
     * Array of URLs of photos of the stage.
     */
    photoURLs?: Array<string>;

    /**
     * Boolean indicating if this launch stage can be restarted.
     */
    restartable?: boolean;

    /**
     * Boolean indicating if this launch stage is reusable.
     */
    reusable?: boolean;

    /**
     * The stage number of this launch stage.
     */
    stageNumber?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Total thrust of the stage at sea level in kN.
     */
    thrustSeaLevel?: number;

    /**
     * Total thrust of the stage in a vacuum in kN.
     */
    thrustVacuum?: number;

    /**
     * Engine cycle type (e.g. Electrostatic Ion, Pressure Fed, Hall, Catalytic
     * Decomposition, etc.).
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

    /**
     * Engine vernier or additional engine type.
     */
    vernier?: string;

    /**
     * Total burn time of the vernier or additional stage engines in seconds.
     */
    vernierBurnTime?: number;

    /**
     * Total number of burns of the vernier or additional stage engines.
     */
    vernierNumBurns?: number;

    /**
     * Total thrust of one of the vernier or additional engines at sea level in kN.
     */
    vernierThrustSeaLevel?: number;

    /**
     * Total thrust of one of the vernier or additional engines in a vacuum in kN.
     */
    vernierThrustVacuum?: number;
  }
}

export type LaunchvehicleTupleResponse = Array<LaunchvehicleTupleResponse.LaunchvehicleTupleResponseItem>;

export namespace LaunchvehicleTupleResponse {
  /**
   * Model representation of basic information about known launch vehicles. A launch
   * vehicle may have several details records including characteristics and
   * information compiled by a particular source.
   */
  export interface LaunchvehicleTupleResponseItem {
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
     * Launch vehicle name.
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
     * Read-only collection of additional LaunchVehicleDetails by various sources for
     * this launch vehicle, ignored on create/update. These details must be created
     * separately via the /udl/launchvehicledetails operations.
     */
    launchVehicleDetails?: Array<LaunchvehicleTupleResponseItem.LaunchVehicleDetail>;

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
     * Read-only collection of stages for this launch vehicle, ignored on
     * create/update.
     */
    stages?: Array<LaunchvehicleTupleResponseItem.Stage>;

    /**
     * Vehicle type.
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

  export namespace LaunchvehicleTupleResponseItem {
    /**
     * Model representation of launch vehicle details and characteristics, compiled by
     * a particular source. A vehicle may have multiple details records from various
     * sources.
     */
    export interface LaunchVehicleDetail {
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
       * Identifier of the parent launch vehicle record.
       */
      idLaunchVehicle: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Launch vehicle attitude accuracy (degrees).
       */
      attitudeAccuracy?: number;

      /**
       * Vehicle category.
       */
      category?: string;

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
       * Launch vehicle deployment rotation rate in RPM.
       */
      deploymentRotationRate?: number;

      /**
       * Vehicle diameter in meters.
       */
      diameter?: number;

      /**
       * Launch vehicle estimated launch price in US dollars.
       */
      estLaunchPrice?: number;

      /**
       * Launch vehicle typical estimated launch price in US dollars.
       */
      estLaunchPriceTypical?: number;

      /**
       * Vehicle fairing maximum external diameter in meters.
       */
      fairingExternalDiameter?: number;

      /**
       * Vehicle fairing maximum internal diameter in meters.
       */
      fairingInternalDiameter?: number;

      /**
       * Vehicle fairing length in meters.
       */
      fairingLength?: number;

      /**
       * Vehicle fairing mass in kg.
       */
      fairingMass?: number;

      /**
       * Fairing material.
       */
      fairingMaterial?: string;

      /**
       * Name of the fairing.
       */
      fairingName?: string;

      /**
       * Notes/Description of the launch vehicle fairing.
       */
      fairingNotes?: string;

      /**
       * Vehicle family.
       */
      family?: string;

      /**
       * Maximum vehicle payload mass to GEO orbit in kg.
       */
      geoPayloadMass?: number;

      /**
       * Launch vehicle GTO Injection 3 Sigma Accuracy Apogee Margin (degrees).
       */
      gtoInj3SigAccuracyApogeeMargin?: number;

      /**
       * Launch vehicle GTO Injection 3 Sigma Accuracy Apogee Target (degrees).
       */
      gtoInj3SigAccuracyApogeeTarget?: number;

      /**
       * Launch vehicle GTO Injection 3 Sigma Accuracy Inclination Margin (degrees).
       */
      gtoInj3SigAccuracyInclinationMargin?: number;

      /**
       * Launch vehicle GTO Injection 3 Sigma Accuracy Inclination Target (degrees).
       */
      gtoInj3SigAccuracyInclinationTarget?: number;

      /**
       * Launch vehicle GTO Injection 3 Sigma Accuracy Perigee Margin (degrees).
       */
      gtoInj3SigAccuracyPerigeeMargin?: number;

      /**
       * Launch vehicle GTO Injection 3 Sigma Accuracy Perigee Target (degrees).
       */
      gtoInj3SigAccuracyPerigeeTarget?: number;

      /**
       * Max vehicle payload mass to Geo-Transfer Orbit in kg.
       */
      gtoPayloadMass?: number;

      /**
       * Vehicle total mass at launch time in kg (including all boosters).
       */
      launchMass?: number;

      /**
       * Vehicle launch prefix.
       */
      launchPrefix?: string;

      /**
       * Vehicle length in meters.
       */
      length?: number;

      /**
       * Max vehicle payload mass to LEO orbit in kg.
       */
      leoPayloadMass?: number;

      /**
       * An organization such as a corporation, manufacturer, consortium, government,
       * etc. An organization may have parent and child organizations as well as link to
       * a former organization if this org previously existed as another organization.
       */
      manufacturerOrg?: LaunchVehicleDetail.ManufacturerOrg;

      /**
       * ID of the organization that manufactures the launch vehicle.
       */
      manufacturerOrgId?: string;

      /**
       * Vehicle maximum acceleration load in g.
       */
      maxAccelLoad?: number;

      /**
       * Vehicle maximum acoustic level in dB.
       */
      maxAcousticLevel?: number;

      /**
       * Vehicle maximum acoustic level range in Hz.
       */
      maxAcousticLevelRange?: number;

      /**
       * Vehicle fairing maximum pressure change in kPa/sec.
       */
      maxFairingPressureChange?: number;

      /**
       * Vehicle maximum flight shock force in g.
       */
      maxFlightShockForce?: number;

      /**
       * Vehicle maximum flight shock frequency in Hz.
       */
      maxFlightShockFreq?: number;

      /**
       * Vehicle maximum payload lateral frequency in Hz.
       */
      maxPayloadFreqLat?: number;

      /**
       * Vehicle maximum payload longitudinal frequency in Hz.
       */
      maxPayloadFreqLon?: number;

      /**
       * Vehicle minor variant.
       */
      minorVariant?: string;

      /**
       * Notes/Description of the launch vehicle.
       */
      notes?: string;

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
       * Oxidizer type.
       */
      oxidizer?: string;

      /**
       * Notes/Description of the launch vehicle payload.
       */
      payloadNotes?: string;

      /**
       * Launch vehicle payload separation rate in m/s.
       */
      payloadSeparationRate?: number;

      /**
       * Propellant type.
       */
      propellant?: string;

      /**
       * Vehicle overall sound pressure level in dB.
       */
      soundPressureLevel?: number;

      /**
       * Optional URL for additional information on the vehicle.
       */
      sourceURL?: string;

      /**
       * Max vehicle payload mass to Sun-Synchronous Orbit in kg.
       */
      ssoPayloadMass?: number;

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

      /**
       * Vehicle variant.
       */
      variant?: string;
    }

    export namespace LaunchVehicleDetail {
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
    }

    /**
     * Launch stage information for a particular launch vehicle. A launch vehicle can
     * have several stages, each with 1 to many engines.
     */
    export interface Stage {
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
       * Identifier of the Engine record for this stage.
       */
      idEngine: string;

      /**
       * Identifier of the launch vehicle record for this stage.
       */
      idLaunchVehicle: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Description/notes of the stage avionics.
       */
      avionicsNotes?: string;

      /**
       * Total burn time of the stage engines in seconds.
       */
      burnTime?: number;

      /**
       * Control thruster 1 type.
       */
      controlThruster1?: string;

      /**
       * Control thruster 2 type.
       */
      controlThruster2?: string;

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
       * Stage maximum external diameter in meters.
       */
      diameter?: number;

      /**
       * Known launch vehicle engines and their performance characteristics and limits. A
       * launch vehicle has 1 to many engines per stage.
       */
      engine?: EnginesAPI.Engine;

      /**
       * Stage length in meters.
       */
      length?: number;

      /**
       * Thrust of the stage main engine at sea level in kN.
       */
      mainEngineThrustSeaLevel?: number;

      /**
       * Thrust of the stage main engine in a vacuum in kN.
       */
      mainEngineThrustVacuum?: number;

      /**
       * ID of the organization that manufactures this launch stage.
       */
      manufacturerOrgId?: string;

      /**
       * Stage gross mass in kg.
       */
      mass?: number;

      /**
       * Description/notes of the stage.
       */
      notes?: string;

      /**
       * Number of burns for the stage engines.
       */
      numBurns?: number;

      /**
       * Number of type control thruster 1.
       */
      numControlThruster1?: number;

      /**
       * Number of type control thruster 2.
       */
      numControlThruster2?: number;

      /**
       * The number of the specified engines on this launch stage.
       */
      numEngines?: number;

      /**
       * Number of launch stage elements used in this stage.
       */
      numStageElements?: number;

      /**
       * Number of vernier or additional engines.
       */
      numVernier?: number;

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
       * Array of URLs of photos of the stage.
       */
      photoURLs?: Array<string>;

      /**
       * Boolean indicating if this launch stage can be restarted.
       */
      restartable?: boolean;

      /**
       * Boolean indicating if this launch stage is reusable.
       */
      reusable?: boolean;

      /**
       * The stage number of this launch stage.
       */
      stageNumber?: number;

      /**
       * Optional array of provider/source specific tags for this data, where each
       * element is no longer than 32 characters, used for implementing data owner
       * conditional access controls to restrict access to the data. Should be left null
       * by data providers unless conditional access controls are coordinated with the
       * UDL team.
       */
      tags?: Array<string>;

      /**
       * Total thrust of the stage at sea level in kN.
       */
      thrustSeaLevel?: number;

      /**
       * Total thrust of the stage in a vacuum in kN.
       */
      thrustVacuum?: number;

      /**
       * Engine cycle type (e.g. Electrostatic Ion, Pressure Fed, Hall, Catalytic
       * Decomposition, etc.).
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

      /**
       * Engine vernier or additional engine type.
       */
      vernier?: string;

      /**
       * Total burn time of the vernier or additional stage engines in seconds.
       */
      vernierBurnTime?: number;

      /**
       * Total number of burns of the vernier or additional stage engines.
       */
      vernierNumBurns?: number;

      /**
       * Total thrust of one of the vernier or additional engines at sea level in kN.
       */
      vernierThrustSeaLevel?: number;

      /**
       * Total thrust of one of the vernier or additional engines in a vacuum in kN.
       */
      vernierThrustVacuum?: number;
    }
  }
}

export interface LaunchvehicleCreateParams {
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
   * Launch vehicle name.
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
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Vehicle type.
   */
  type?: string;
}

export interface LaunchvehicleUpdateParams {
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
   * Launch vehicle name.
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
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Vehicle type.
   */
  type?: string;
}

export interface LaunchvehicleTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

export declare namespace Launchvehicle {
  export {
    type LaunchvehicleListResponse as LaunchvehicleListResponse,
    type LaunchvehicleCountResponse as LaunchvehicleCountResponse,
    type LaunchvehicleGetResponse as LaunchvehicleGetResponse,
    type LaunchvehicleTupleResponse as LaunchvehicleTupleResponse,
    type LaunchvehicleCreateParams as LaunchvehicleCreateParams,
    type LaunchvehicleUpdateParams as LaunchvehicleUpdateParams,
    type LaunchvehicleTupleParams as LaunchvehicleTupleParams,
  };
}
