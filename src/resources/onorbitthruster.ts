// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EnginesAPI from './engines';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Onorbitthruster extends APIResource {
  /**
   * Service operation to take a single OnorbitThruster as a POST body and ingest
   * into the database. An OnorbitThruster is the association between an on-orbit
   * spacecraft's engine and a particular on-orbit spacecraft. An Engine type may be
   * associated with many different on-orbit spacecraft. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitthruster.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idEngine: 'ENGINE-ID',
   *   idOnOrbit: 'ONORBIT-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: OnorbitthrusterCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/onorbitthruster', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single OnorbitThruster. An OnorbitThruster is the
   * association between an on-orbit spacecraft's engine and a particular on-orbit
   * spacecraft. An Engine type may be associated with many different on-orbit
   * spacecraft. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitthruster.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idEngine: 'ENGINE-ID',
   *   idOnOrbit: 'ONORBIT-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: OnorbitthrusterUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/onorbitthruster/${pathID}`, {
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
   * for await (const onorbitthrusterListResponse of client.onorbitthruster.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OnorbitthrusterListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OnorbitthrusterListResponsesOffsetPage, OnorbitthrusterListResponse> {
    return this._client.getAPIList('/udl/onorbitthruster', OffsetPage<OnorbitthrusterListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a OnorbitThruster object specified by the passed ID
   * path parameter. An OnorbitThruster is the association between an on-orbit
   * spacecraft's engine and a particular on-orbit spacecraft. An Engine type may be
   * associated with many different on-orbit spacecraft. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitthruster.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/onorbitthruster/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single OnorbitThruster record by its unique ID passed
   * as a path parameter. An OnorbitThruster is the association between an on-orbit
   * spacecraft's engine and a particular on-orbit spacecraft. An Engine type may be
   * associated with many different on-orbit spacecraft.
   *
   * @example
   * ```ts
   * const onorbitThrusterFull =
   *   await client.onorbitthruster.get('id');
   * ```
   */
  get(
    id: string,
    query: OnorbitthrusterGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.OnorbitThrusterFull> {
    return this._client.get(path`/udl/onorbitthruster/${id}`, { query, ...options });
  }
}

export type OnorbitthrusterListResponsesOffsetPage = OffsetPage<OnorbitthrusterListResponse>;

export interface OnorbitthrusterListResponse {
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
   * ID of the Engine.
   */
  idEngine: string;

  /**
   * ID of the on-orbit object.
   */
  idOnOrbit: string;

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
   * Known launch vehicle engines and their performance characteristics and limits. A
   * launch vehicle has 1 to many engines per stage.
   */
  engine?: EnginesAPI.EngineAbridged;

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
   * The number of engines/thrusters on the spacecraft of the type identified by
   * idEngine.
   */
  quantity?: number;

  /**
   * The type of thruster associated with this record (e.g. LAE, Hydrazine REA,
   * etc.).
   */
  type?: string;
}

export interface OnorbitthrusterCreateParams {
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
   * ID of the Engine.
   */
  idEngine: string;

  /**
   * ID of the on-orbit object.
   */
  idOnOrbit: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Known launch vehicle engines and their performance characteristics and limits. A
   * launch vehicle has 1 to many engines per stage.
   */
  engine?: Shared.EngineIngest;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The number of engines/thrusters on the spacecraft of the type identified by
   * idEngine.
   */
  quantity?: number;

  /**
   * The type of thruster associated with this record (e.g. LAE, Hydrazine REA,
   * etc.).
   */
  type?: string;
}

export interface OnorbitthrusterUpdateParams {
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
   * ID of the Engine.
   */
  idEngine: string;

  /**
   * ID of the on-orbit object.
   */
  idOnOrbit: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Known launch vehicle engines and their performance characteristics and limits. A
   * launch vehicle has 1 to many engines per stage.
   */
  engine?: Shared.EngineIngest;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The number of engines/thrusters on the spacecraft of the type identified by
   * idEngine.
   */
  quantity?: number;

  /**
   * The type of thruster associated with this record (e.g. LAE, Hydrazine REA,
   * etc.).
   */
  type?: string;
}

export interface OnorbitthrusterListParams extends OffsetPageParams {}

export interface OnorbitthrusterGetParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace Onorbitthruster {
  export {
    type OnorbitthrusterListResponse as OnorbitthrusterListResponse,
    type OnorbitthrusterListResponsesOffsetPage as OnorbitthrusterListResponsesOffsetPage,
    type OnorbitthrusterCreateParams as OnorbitthrusterCreateParams,
    type OnorbitthrusterUpdateParams as OnorbitthrusterUpdateParams,
    type OnorbitthrusterListParams as OnorbitthrusterListParams,
    type OnorbitthrusterGetParams as OnorbitthrusterGetParams,
  };
}
