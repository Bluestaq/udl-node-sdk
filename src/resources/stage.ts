// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Stage extends APIResource {
  /**
   * Service operation to take a single Stage as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance. A Stage represents various stages of a
   * particular launch vehicle, compiled by a particular source. A vehicle may have
   * multiple stage records.
   *
   * @example
   * ```ts
   * await client.stage.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idEngine: 'ENGINE-ID',
   *   idLaunchVehicle: 'LAUNCHVEHICLE-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: StageCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/stage', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single Stage. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance. A
   * Stage represents various stages of a particular launch vehicle, compiled by a
   * particular source. A vehicle may have multiple stage records.
   *
   * @example
   * ```ts
   * await client.stage.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idEngine: 'ENGINE-ID',
   *   idLaunchVehicle: 'LAUNCHVEHICLE-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: StageUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/stage/${pathID}`, {
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
   * for await (const stageListResponse of client.stage.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: StageListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<StageListResponsesOffsetPage, StageListResponse> {
    return this._client.getAPIList('/udl/stage', OffsetPage<StageListResponse>, { query, ...options });
  }

  /**
   * Service operation to delete a Stage object specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance. A Stage represents various stages of a
   * particular launch vehicle, compiled by a particular source. A vehicle may have
   * multiple stage records.
   *
   * @example
   * ```ts
   * await client.stage.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/stage/${id}`, {
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
   * const response = await client.stage.count();
   * ```
   */
  count(query: StageCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/stage/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Stage record by its unique ID passed as a path
   * parameter. A Stage represents various stages of a particular launch vehicle,
   * compiled by a particular source. A vehicle may have multiple stage records.
   *
   * @example
   * ```ts
   * const stage = await client.stage.get('id');
   * ```
   */
  get(
    id: string,
    query: StageGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StageGetResponse> {
    return this._client.get(path`/udl/stage/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.stage.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<StageQueryhelpResponse> {
    return this._client.get('/udl/stage/queryhelp', options);
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
   * const response = await client.stage.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: StageTupleParams, options?: RequestOptions): APIPromise<StageTupleResponse> {
    return this._client.get('/udl/stage/tuple', { query, ...options });
  }
}

export type StageListResponsesOffsetPage = OffsetPage<StageListResponse>;

/**
 * Launch stage information for a particular launch vehicle. A launch vehicle can
 * have several stages, each with 1 to many engines.
 */
export interface StageListResponse {
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

export type StageCountResponse = string;

/**
 * Launch stage information for a particular launch vehicle. A launch vehicle can
 * have several stages, each with 1 to many engines.
 */
export interface StageGetResponse {
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

export interface StageQueryhelpResponse {
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

export type StageTupleResponse = Array<StageTupleResponse.StageTupleResponseItem>;

export namespace StageTupleResponse {
  /**
   * Launch stage information for a particular launch vehicle. A launch vehicle can
   * have several stages, each with 1 to many engines.
   */
  export interface StageTupleResponseItem {
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

export interface StageCreateParams {
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
   * Stage maximum external diameter in meters.
   */
  diameter?: number;

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

export interface StageUpdateParams {
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
  body_id?: string;

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
   * Stage maximum external diameter in meters.
   */
  diameter?: number;

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

export interface StageListParams extends OffsetPageParams {}

export interface StageCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface StageGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface StageTupleParams {
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

export declare namespace Stage {
  export {
    type StageListResponse as StageListResponse,
    type StageCountResponse as StageCountResponse,
    type StageGetResponse as StageGetResponse,
    type StageQueryhelpResponse as StageQueryhelpResponse,
    type StageTupleResponse as StageTupleResponse,
    type StageListResponsesOffsetPage as StageListResponsesOffsetPage,
    type StageCreateParams as StageCreateParams,
    type StageUpdateParams as StageUpdateParams,
    type StageListParams as StageListParams,
    type StageCountParams as StageCountParams,
    type StageGetParams as StageGetParams,
    type StageTupleParams as StageTupleParams,
  };
}
