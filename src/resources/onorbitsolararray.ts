// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as Shared from 'bluestaq@unified-data-library/resources/shared';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class Onorbitsolararray extends APIResource {
  /**
   * Service operation to take a single OnorbitSolarArray as a POST body and ingest
   * into the database. An OnorbitSolarArray is the association between on-orbit
   * spacecraft SolarArrays and a particular on-orbit spacecraft. A SolarArray type
   * may be associated with many different on-orbit spacecraft. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.onorbitsolararray.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idOnOrbit: 'ONORBIT-ID',
   *   idSolarArray: 'SOLARARRAY-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: OnorbitsolararrayCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/onorbitsolararray', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single OnorbitSolarArray. An OnorbitSolarArray is
   * the association between on-orbit spacecraft SolarArrays and a particular
   * on-orbit spacecraft. A SolarArray type may be associated with many different
   * on-orbit spacecraft. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitsolararray.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idOnOrbit: 'ONORBIT-ID',
   *   idSolarArray: 'SOLARARRAY-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: OnorbitsolararrayUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/onorbitsolararray/${pathID}`, {
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
   * for await (const onorbitsolararrayListResponse of client.onorbitsolararray.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OnorbitsolararrayListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OnorbitsolararrayListResponsesOffsetPage, OnorbitsolararrayListResponse> {
    return this._client.getAPIList('/udl/onorbitsolararray', OffsetPage<OnorbitsolararrayListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a OnorbitSolarArray object specified by the passed
   * ID path parameter. An OnorbitSolarArray is the association between on-orbit
   * spacecraft SolarArrays and a particular on-orbit spacecraft. A SolarArray type
   * may be associated with many different on-orbit spacecraft. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.onorbitsolararray.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/onorbitsolararray/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single OnorbitSolarArray record by its unique ID
   * passed as a path parameter. An OnorbitSolarArray is the association between
   * on-orbit spacecraft SolarArrays and a particular on-orbit spacecraft. A
   * SolarArray type may be associated with many different on-orbit spacecraft.
   *
   * @example
   * ```ts
   * const onorbitsolararray =
   *   await client.onorbitsolararray.get('id');
   * ```
   */
  get(
    id: string,
    query: OnorbitsolararrayGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OnorbitsolararrayGetResponse> {
    return this._client.get(path`/udl/onorbitsolararray/${id}`, { query, ...options });
  }
}

export type OnorbitsolararrayListResponsesOffsetPage = OffsetPage<OnorbitsolararrayListResponse>;

export interface OnorbitsolararrayListResponse {
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
   * ID of the on-orbit object.
   */
  idOnOrbit: string;

  /**
   * ID of the SolarArray.
   */
  idSolarArray: string;

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
   * The number of solar arrays on the spacecraft of the type identified by
   * idSolarArray.
   */
  quantity?: number;

  /**
   * Model representation of information on on-orbit/spacecraft solar arrays. A
   * spacecraft may have multiple solar arrays and each solar array can have multiple
   * 'details' records compiled by different sources.
   */
  solarArray?: OnorbitsolararrayListResponse.SolarArray;
}

export namespace OnorbitsolararrayListResponse {
  /**
   * Model representation of information on on-orbit/spacecraft solar arrays. A
   * spacecraft may have multiple solar arrays and each solar array can have multiple
   * 'details' records compiled by different sources.
   */
  export interface SolarArray {
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
     * Solar Array name.
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
}

export interface OnorbitsolararrayGetResponse {
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
   * ID of the on-orbit object.
   */
  idOnOrbit: string;

  /**
   * ID of the SolarArray.
   */
  idSolarArray: string;

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
   * The number of solar arrays on the spacecraft of the type identified by
   * idSolarArray.
   */
  quantity?: number;

  /**
   * Model representation of information on on-orbit/spacecraft solar arrays. A
   * spacecraft may have multiple solar arrays and each solar array can have multiple
   * 'details' records compiled by different sources.
   */
  solarArray?: OnorbitsolararrayGetResponse.SolarArray;

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

export namespace OnorbitsolararrayGetResponse {
  /**
   * Model representation of information on on-orbit/spacecraft solar arrays. A
   * spacecraft may have multiple solar arrays and each solar array can have multiple
   * 'details' records compiled by different sources.
   */
  export interface SolarArray {
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
     * Solar Array name.
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
     * Read-only collection of additional SolarArrayDetails by various sources for this
     * organization, ignored on create/update. These details must be created separately
     * via the /udl/solararraydetails operations.
     */
    solarArrayDetails?: Array<Shared.SolarArrayDetailsFull>;

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

export interface OnorbitsolararrayCreateParams {
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
   * ID of the on-orbit object.
   */
  idOnOrbit: string;

  /**
   * ID of the SolarArray.
   */
  idSolarArray: string;

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
   * The number of solar arrays on the spacecraft of the type identified by
   * idSolarArray.
   */
  quantity?: number;

  /**
   * Model representation of information on on-orbit/spacecraft solar arrays. A
   * spacecraft may have multiple solar arrays and each solar array can have multiple
   * 'details' records compiled by different sources.
   */
  solarArray?: OnorbitsolararrayCreateParams.SolarArray;
}

export namespace OnorbitsolararrayCreateParams {
  /**
   * Model representation of information on on-orbit/spacecraft solar arrays. A
   * spacecraft may have multiple solar arrays and each solar array can have multiple
   * 'details' records compiled by different sources.
   */
  export interface SolarArray {
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
     * Solar Array name.
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

export interface OnorbitsolararrayUpdateParams {
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
   * ID of the on-orbit object.
   */
  idOnOrbit: string;

  /**
   * ID of the SolarArray.
   */
  idSolarArray: string;

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
   * The number of solar arrays on the spacecraft of the type identified by
   * idSolarArray.
   */
  quantity?: number;

  /**
   * Model representation of information on on-orbit/spacecraft solar arrays. A
   * spacecraft may have multiple solar arrays and each solar array can have multiple
   * 'details' records compiled by different sources.
   */
  solarArray?: OnorbitsolararrayUpdateParams.SolarArray;
}

export namespace OnorbitsolararrayUpdateParams {
  /**
   * Model representation of information on on-orbit/spacecraft solar arrays. A
   * spacecraft may have multiple solar arrays and each solar array can have multiple
   * 'details' records compiled by different sources.
   */
  export interface SolarArray {
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
     * Solar Array name.
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

export interface OnorbitsolararrayListParams extends OffsetPageParams {}

export interface OnorbitsolararrayGetParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace Onorbitsolararray {
  export {
    type OnorbitsolararrayListResponse as OnorbitsolararrayListResponse,
    type OnorbitsolararrayGetResponse as OnorbitsolararrayGetResponse,
    type OnorbitsolararrayListResponsesOffsetPage as OnorbitsolararrayListResponsesOffsetPage,
    type OnorbitsolararrayCreateParams as OnorbitsolararrayCreateParams,
    type OnorbitsolararrayUpdateParams as OnorbitsolararrayUpdateParams,
    type OnorbitsolararrayListParams as OnorbitsolararrayListParams,
    type OnorbitsolararrayGetParams as OnorbitsolararrayGetParams,
  };
}
