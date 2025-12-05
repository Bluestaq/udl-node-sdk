// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SolarArrayDetails extends APIResource {
  /**
   * Service operation to take a single SolarArrayDetails as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance. A SolarArray may have
   * multiple details records compiled by various sources.
   *
   * @example
   * ```ts
   * await client.solarArrayDetails.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idSolarArray: 'SOLARARRAY-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: SolarArrayDetailCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/solararraydetails', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single SolarArrayDetails. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance. A SolarArray may have multiple details records compiled by various
   * sources.
   *
   * @example
   * ```ts
   * await client.solarArrayDetails.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idSolarArray: 'SOLARARRAY-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: SolarArrayDetailUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/solararraydetails/${pathID}`, {
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
   * for await (const solarArrayDetailListResponse of client.solarArrayDetails.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SolarArrayDetailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SolarArrayDetailListResponsesOffsetPage, SolarArrayDetailListResponse> {
    return this._client.getAPIList('/udl/solararraydetails', OffsetPage<SolarArrayDetailListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a SolarArrayDetails object specified by the passed
   * ID path parameter. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance. A SolarArray may have
   * multiple details records compiled by various sources.
   *
   * @example
   * ```ts
   * await client.solarArrayDetails.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/solararraydetails/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single SolarArrayDetails record by its unique ID
   * passed as a path parameter. A SolarArray may have multiple details records
   * compiled by various sources.
   *
   * @example
   * ```ts
   * const solarArrayDetailsFull =
   *   await client.solarArrayDetails.get('id');
   * ```
   */
  get(
    id: string,
    query: SolarArrayDetailGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.SolarArrayDetailsFull> {
    return this._client.get(path`/udl/solararraydetails/${id}`, { query, ...options });
  }
}

export type SolarArrayDetailListResponsesOffsetPage = OffsetPage<SolarArrayDetailListResponse>;

/**
 * Model representation of Information on spacecraft SolarArrayDetails. A
 * SolarArray may have multiple details records compiled by various sources.
 */
export interface SolarArrayDetailListResponse {
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
   * Unique identifier of the parent SolarArray.
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
   * Solar Array area in square meters.
   */
  area?: number;

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
   * Solar array description/notes.
   */
  description?: string;

  /**
   * Solar array junction technology (e.g. Triple).
   */
  junctionTechnology?: string;

  /**
   * Unique identifier of the organization that manufactures the solar array.
   */
  manufacturerOrgId?: string;

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
   * Solar Array span in meters.
   */
  span?: number;

  /**
   * Solar array technology (e.g. Ga-As).
   */
  technology?: string;

  /**
   * Type of solar array (e.g. U Shaped).
   */
  type?: string;
}

export interface SolarArrayDetailCreateParams {
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
   * Unique identifier of the parent SolarArray.
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
   * Solar Array area in square meters.
   */
  area?: number;

  /**
   * Solar array description/notes.
   */
  description?: string;

  /**
   * Solar array junction technology (e.g. Triple).
   */
  junctionTechnology?: string;

  /**
   * Unique identifier of the organization that manufactures the solar array.
   */
  manufacturerOrgId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Solar Array span in meters.
   */
  span?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Solar array technology (e.g. Ga-As).
   */
  technology?: string;

  /**
   * Type of solar array (e.g. U Shaped).
   */
  type?: string;
}

export interface SolarArrayDetailUpdateParams {
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
   * Unique identifier of the parent SolarArray.
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
   * Solar Array area in square meters.
   */
  area?: number;

  /**
   * Solar array description/notes.
   */
  description?: string;

  /**
   * Solar array junction technology (e.g. Triple).
   */
  junctionTechnology?: string;

  /**
   * Unique identifier of the organization that manufactures the solar array.
   */
  manufacturerOrgId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Solar Array span in meters.
   */
  span?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Solar array technology (e.g. Ga-As).
   */
  technology?: string;

  /**
   * Type of solar array (e.g. U Shaped).
   */
  type?: string;
}

export interface SolarArrayDetailListParams extends OffsetPageParams {
  /**
   * (One or more of fields 'classificationMarking, dataMode, source' are required.)
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking?: string;

  /**
   * (One or more of fields 'classificationMarking, dataMode, source' are required.)
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data. (REAL,
   * TEST, EXERCISE, or SIMULATED)
   */
  dataMode?: string;

  /**
   * (One or more of fields 'classificationMarking, dataMode, source' are required.)
   * Source of the data.
   */
  source?: string;
}

export interface SolarArrayDetailGetParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace SolarArrayDetails {
  export {
    type SolarArrayDetailListResponse as SolarArrayDetailListResponse,
    type SolarArrayDetailListResponsesOffsetPage as SolarArrayDetailListResponsesOffsetPage,
    type SolarArrayDetailCreateParams as SolarArrayDetailCreateParams,
    type SolarArrayDetailUpdateParams as SolarArrayDetailUpdateParams,
    type SolarArrayDetailListParams as SolarArrayDetailListParams,
    type SolarArrayDetailGetParams as SolarArrayDetailGetParams,
  };
}
