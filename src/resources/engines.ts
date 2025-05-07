// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EngineDetailsAPI from './engine-details';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Engines extends APIResource {
  /**
   * Service operation to take a single Engine as a POST body and ingest into the
   * database. An Engine represents launch engine/booster information to include
   * performance characteristics and limits. A launch vehicle has 1 to many engines
   * per stage. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.engines.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'ENGINE_VARIANT1',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: EngineCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/engine', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Engine record by its unique ID passed as a
   * path parameter. An Engine represents launch engine/booster information to
   * include performance characteristics and limits. A launch vehicle has 1 to many
   * engines per stage.
   *
   * @example
   * ```ts
   * const engine = await client.engines.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: EngineRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Engine> {
    return this._client.get(path`/udl/engine/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single Engine. An Engine represents launch
   * engine/booster information to include performance characteristics and limits. A
   * launch vehicle has 1 to many engines per stage. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.engines.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'ENGINE_VARIANT1',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: EngineUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/engine/${pathID}`, {
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
   * for await (const engineAbridged of client.engines.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EngineListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EngineAbridgedsOffsetPage, EngineAbridged> {
    return this._client.getAPIList('/udl/engine', OffsetPage<EngineAbridged>, { query, ...options });
  }

  /**
   * Service operation to delete a Engine object specified by the passed ID path
   * parameter. An Engine represents launch engine/booster information to include
   * performance characteristics and limits. A launch vehicle has 1 to many engines
   * per stage. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.engines.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/engine/${id}`, {
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
   * const response = await client.engines.count();
   * ```
   */
  count(query: EngineCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/engine/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * await client.engines.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/engine/queryhelp', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
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
   *
   * @example
   * ```ts
   * const engines = await client.engines.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: EngineTupleParams, options?: RequestOptions): APIPromise<EngineTupleResponse> {
    return this._client.get('/udl/engine/tuple', { query, ...options });
  }
}

export type EngineAbridgedsOffsetPage = OffsetPage<EngineAbridged>;

/**
 * Known launch vehicle engines and their performance characteristics and limits. A
 * launch vehicle has 1 to many engines per stage.
 */
export interface Engine {
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
   * Engine name/variant.
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
   * Read-only collection of additional EngineDetails by various sources for this
   * engine, ignored on create/update. These details must be created separately via
   * the /udl/enginedetails operations.
   */
  engineDetails?: Array<EngineDetailsAPI.EngineDetailsFull>;

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

/**
 * Known launch vehicle engines and their performance characteristics and limits. A
 * launch vehicle has 1 to many engines per stage.
 */
export interface EngineAbridged {
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
   * Engine name/variant.
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
}

export type EngineCountResponse = string;

export type EngineTupleResponse = Array<Engine>;

export interface EngineCreateParams {
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
   * Engine name/variant.
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
}

export interface EngineRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface EngineUpdateParams {
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
   * Engine name/variant.
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
}

export interface EngineListParams extends OffsetPageParams {}

export interface EngineCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface EngineTupleParams {
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

export declare namespace Engines {
  export {
    type Engine as Engine,
    type EngineAbridged as EngineAbridged,
    type EngineCountResponse as EngineCountResponse,
    type EngineTupleResponse as EngineTupleResponse,
    type EngineAbridgedsOffsetPage as EngineAbridgedsOffsetPage,
    type EngineCreateParams as EngineCreateParams,
    type EngineRetrieveParams as EngineRetrieveParams,
    type EngineUpdateParams as EngineUpdateParams,
    type EngineListParams as EngineListParams,
    type EngineCountParams as EngineCountParams,
    type EngineTupleParams as EngineTupleParams,
  };
}
