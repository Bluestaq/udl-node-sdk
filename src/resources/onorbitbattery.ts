// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BatteriesAPI from './batteries';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Onorbitbattery extends APIResource {
  /**
   * Service operation to take a single OnorbitBattery as a POST body and ingest into
   * the database. OnorbitBattery is the association between on-orbit spacecraft
   * batteries and a particular on-orbit spacecraft. A Battery may be associated with
   * many different on-orbit spacecraft. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitbattery.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idBattery: 'BATTERY-ID',
   *   idOnOrbit: 'ONORBIT-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: OnorbitbatteryCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/onorbitbattery', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single OnorbitBattery. OnorbitBattery is the
   * association between on-orbit spacecraft batteries and a particular on-orbit
   * spacecraft. A Battery may be associated with many different on-orbit spacecraft.
   * A specific role is required to perform this service operation. Please contact
   * the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitbattery.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idBattery: 'BATTERY-ID',
   *   idOnOrbit: 'ONORBIT-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: OnorbitbatteryUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/onorbitbattery/${pathID}`, {
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
   * for await (const onorbitbatteryListResponse of client.onorbitbattery.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OnorbitbatteryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OnorbitbatteryListResponsesOffsetPage, OnorbitbatteryListResponse> {
    return this._client.getAPIList('/udl/onorbitbattery', OffsetPage<OnorbitbatteryListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a OnorbitBattery object specified by the passed ID
   * path parameter. OnorbitBattery is the association between on-orbit spacecraft
   * batteries and a particular on-orbit spacecraft. A Battery may be associated with
   * many different on-orbit spacecraft. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitbattery.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/onorbitbattery/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single OnorbitBattery record by its unique ID passed
   * as a path parameter. OnorbitBattery is the association between on-orbit
   * spacecraft batteries and a particular on-orbit spacecraft. A Battery may be
   * associated with many different on-orbit spacecraft.
   *
   * @example
   * ```ts
   * const onorbitBatteryFull = await client.onorbitbattery.get(
   *   'id',
   * );
   * ```
   */
  get(
    id: string,
    query: OnorbitbatteryGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.OnorbitBatteryFull> {
    return this._client.get(path`/udl/onorbitbattery/${id}`, { query, ...options });
  }
}

export type OnorbitbatteryListResponsesOffsetPage = OffsetPage<OnorbitbatteryListResponse>;

export interface OnorbitbatteryListResponse {
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
   * ID of the battery.
   */
  idBattery: string;

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
   * Model representation of specific spacecraft battery types.
   */
  battery?: BatteriesAPI.BatteryAbridged;

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
   * The number of batteries on the spacecraft of the type identified by idBattery.
   */
  quantity?: number;
}

export interface OnorbitbatteryCreateParams {
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
   * ID of the battery.
   */
  idBattery: string;

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
   * Model representation of specific spacecraft battery types.
   */
  battery?: OnorbitbatteryCreateParams.Battery;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The number of batteries on the spacecraft of the type identified by idBattery.
   */
  quantity?: number;
}

export namespace OnorbitbatteryCreateParams {
  /**
   * Model representation of specific spacecraft battery types.
   */
  export interface Battery {
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
     * Battery name.
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
}

export interface OnorbitbatteryUpdateParams {
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
   * ID of the battery.
   */
  idBattery: string;

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
   * Model representation of specific spacecraft battery types.
   */
  battery?: OnorbitbatteryUpdateParams.Battery;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The number of batteries on the spacecraft of the type identified by idBattery.
   */
  quantity?: number;
}

export namespace OnorbitbatteryUpdateParams {
  /**
   * Model representation of specific spacecraft battery types.
   */
  export interface Battery {
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
     * Battery name.
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
}

export interface OnorbitbatteryListParams extends OffsetPageParams {}

export interface OnorbitbatteryGetParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace Onorbitbattery {
  export {
    type OnorbitbatteryListResponse as OnorbitbatteryListResponse,
    type OnorbitbatteryListResponsesOffsetPage as OnorbitbatteryListResponsesOffsetPage,
    type OnorbitbatteryCreateParams as OnorbitbatteryCreateParams,
    type OnorbitbatteryUpdateParams as OnorbitbatteryUpdateParams,
    type OnorbitbatteryListParams as OnorbitbatteryListParams,
    type OnorbitbatteryGetParams as OnorbitbatteryGetParams,
  };
}
