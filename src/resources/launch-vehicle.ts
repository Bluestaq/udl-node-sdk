// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LaunchVehicle extends APIResource {
  /**
   * Service operation to take a single LaunchVehicle as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchVehicle.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'Example-name',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: LaunchVehicleCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/launchvehicle', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single LaunchVehicle. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchVehicle.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'Example-name',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: LaunchVehicleUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/launchvehicle/${pathID}`, {
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
   * for await (const launchVehicleListResponse of client.launchVehicle.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LaunchVehicleListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LaunchVehicleListResponsesOffsetPage, LaunchVehicleListResponse> {
    return this._client.getAPIList('/udl/launchvehicle', OffsetPage<LaunchVehicleListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a LaunchVehicle object specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchVehicle.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/launchvehicle/${id}`, {
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
   * const response = await client.launchVehicle.count();
   * ```
   */
  count(
    query: LaunchVehicleCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/launchvehicle/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single LaunchVehicle record by its unique ID passed
   * as a path parameter.
   *
   * @example
   * ```ts
   * const launchVehicle = await client.launchVehicle.get('id');
   * ```
   */
  get(
    id: string,
    query: LaunchVehicleGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LaunchVehicleGetResponse> {
    return this._client.get(path`/udl/launchvehicle/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.launchVehicle.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<LaunchVehicleQueryhelpResponse> {
    return this._client.get('/udl/launchvehicle/queryhelp', options);
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
   * const response = await client.launchVehicle.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: LaunchVehicleTupleParams, options?: RequestOptions): APIPromise<LaunchVehicleTupleResponse> {
    return this._client.get('/udl/launchvehicle/tuple', { query, ...options });
  }
}

export type LaunchVehicleListResponsesOffsetPage = OffsetPage<LaunchVehicleListResponse>;

/**
 * Model representation of basic information about known launch vehicles. A launch
 * vehicle may have several details records including characteristics and
 * information compiled by a particular source.
 */
export interface LaunchVehicleListResponse {
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

export type LaunchVehicleCountResponse = string;

/**
 * Model representation of basic information about known launch vehicles. A launch
 * vehicle may have several details records including characteristics and
 * information compiled by a particular source.
 */
export interface LaunchVehicleGetResponse {
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
  launchVehicleDetails?: Array<LaunchVehicleGetResponse.LaunchVehicleDetail>;

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
  stages?: Array<LaunchVehicleGetResponse.Stage>;

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

export namespace LaunchVehicleGetResponse {
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
    manufacturerOrg?: Shared.OrganizationFull;

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
    engine?: Shared.Engine;

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

export interface LaunchVehicleQueryhelpResponse {
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

export type LaunchVehicleTupleResponse = Array<LaunchVehicleTupleResponse.LaunchVehicleTupleResponseItem>;

export namespace LaunchVehicleTupleResponse {
  /**
   * Model representation of basic information about known launch vehicles. A launch
   * vehicle may have several details records including characteristics and
   * information compiled by a particular source.
   */
  export interface LaunchVehicleTupleResponseItem {
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
    launchVehicleDetails?: Array<LaunchVehicleTupleResponseItem.LaunchVehicleDetail>;

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
    stages?: Array<LaunchVehicleTupleResponseItem.Stage>;

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

  export namespace LaunchVehicleTupleResponseItem {
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
      manufacturerOrg?: Shared.OrganizationFull;

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
      engine?: Shared.Engine;

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

export interface LaunchVehicleCreateParams {
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

export interface LaunchVehicleUpdateParams {
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
  body_id?: string;

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

export interface LaunchVehicleListParams extends OffsetPageParams {}

export interface LaunchVehicleCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface LaunchVehicleGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface LaunchVehicleTupleParams {
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

export declare namespace LaunchVehicle {
  export {
    type LaunchVehicleListResponse as LaunchVehicleListResponse,
    type LaunchVehicleCountResponse as LaunchVehicleCountResponse,
    type LaunchVehicleGetResponse as LaunchVehicleGetResponse,
    type LaunchVehicleQueryhelpResponse as LaunchVehicleQueryhelpResponse,
    type LaunchVehicleTupleResponse as LaunchVehicleTupleResponse,
    type LaunchVehicleListResponsesOffsetPage as LaunchVehicleListResponsesOffsetPage,
    type LaunchVehicleCreateParams as LaunchVehicleCreateParams,
    type LaunchVehicleUpdateParams as LaunchVehicleUpdateParams,
    type LaunchVehicleListParams as LaunchVehicleListParams,
    type LaunchVehicleCountParams as LaunchVehicleCountParams,
    type LaunchVehicleGetParams as LaunchVehicleGetParams,
    type LaunchVehicleTupleParams as LaunchVehicleTupleParams,
  };
}
