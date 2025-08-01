// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SiteRemark extends APIResource {
  /**
   * Service operation to take a single remark record as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.siteRemark.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idSite: 'SITE-ID',
   *   source: 'Bluestaq',
   *   text: 'This is a remark',
   * });
   * ```
   */
  create(body: SiteRemarkCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/siteremark', {
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
   * for await (const siteRemarkListResponse of client.siteRemark.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SiteRemarkListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SiteRemarkListResponsesOffsetPage, SiteRemarkListResponse> {
    return this._client.getAPIList('/udl/siteremark', OffsetPage<SiteRemarkListResponse>, {
      query,
      ...options,
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
   * const response = await client.siteRemark.count();
   * ```
   */
  count(query: SiteRemarkCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/siteremark/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single remark record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const siteRemark = await client.siteRemark.get('id');
   * ```
   */
  get(
    id: string,
    query: SiteRemarkGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SiteRemarkGetResponse> {
    return this._client.get(path`/udl/siteremark/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.siteRemark.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<SiteRemarkQueryhelpResponse> {
    return this._client.get('/udl/siteremark/queryhelp', options);
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
   * const response = await client.siteRemark.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: SiteRemarkTupleParams, options?: RequestOptions): APIPromise<SiteRemarkTupleResponse> {
    return this._client.get('/udl/siteremark/tuple', { query, ...options });
  }
}

export type SiteRemarkListResponsesOffsetPage = OffsetPage<SiteRemarkListResponse>;

/**
 * Remarks contain amplifying information for a specific service. The information
 * may contain context and interpretations for consumer use.
 */
export interface SiteRemarkListResponse {
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
   * The ID of the site to which this remark applies.
   */
  idSite: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The text of the remark.
   */
  text: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The remark type identifier. For example, the Mobility Air Forces (MAF) remark
   * code, defined in the Airfield Suitability and Restriction Report (ASRR).
   */
  code?: string;

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
   * The name of the remark.
   */
  name?: string;

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
   * Unique identifier of the Site Remark record from the originating system.
   */
  origRmkId?: string;

  /**
   * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
   */
  type?: string;
}

export type SiteRemarkCountResponse = string;

/**
 * Remarks contain amplifying information for a specific service. The information
 * may contain context and interpretations for consumer use.
 */
export interface SiteRemarkGetResponse {
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
   * The ID of the site to which this remark applies.
   */
  idSite: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The text of the remark.
   */
  text: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The remark type identifier. For example, the Mobility Air Forces (MAF) remark
   * code, defined in the Airfield Suitability and Restriction Report (ASRR).
   */
  code?: string;

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
   * The name of the remark.
   */
  name?: string;

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
   * Unique identifier of the Site Remark record from the originating system.
   */
  origRmkId?: string;

  /**
   * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
   */
  type?: string;
}

export interface SiteRemarkQueryhelpResponse {
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

export type SiteRemarkTupleResponse = Array<SiteRemarkTupleResponse.SiteRemarkTupleResponseItem>;

export namespace SiteRemarkTupleResponse {
  /**
   * Remarks contain amplifying information for a specific service. The information
   * may contain context and interpretations for consumer use.
   */
  export interface SiteRemarkTupleResponseItem {
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
     * The ID of the site to which this remark applies.
     */
    idSite: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The text of the remark.
     */
    text: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The remark type identifier. For example, the Mobility Air Forces (MAF) remark
     * code, defined in the Airfield Suitability and Restriction Report (ASRR).
     */
    code?: string;

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
     * The name of the remark.
     */
    name?: string;

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
     * Unique identifier of the Site Remark record from the originating system.
     */
    origRmkId?: string;

    /**
     * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
     */
    type?: string;
  }
}

export interface SiteRemarkCreateParams {
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
   * The ID of the site to which this remark applies.
   */
  idSite: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The text of the remark.
   */
  text: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The remark type identifier. For example, the Mobility Air Forces (MAF) remark
   * code, defined in the Airfield Suitability and Restriction Report (ASRR).
   */
  code?: string;

  /**
   * The name of the remark.
   */
  name?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Unique identifier of the Site Remark record from the originating system.
   */
  origRmkId?: string;

  /**
   * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
   */
  type?: string;
}

export interface SiteRemarkListParams extends OffsetPageParams {}

export interface SiteRemarkCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SiteRemarkGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SiteRemarkTupleParams {
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

export declare namespace SiteRemark {
  export {
    type SiteRemarkListResponse as SiteRemarkListResponse,
    type SiteRemarkCountResponse as SiteRemarkCountResponse,
    type SiteRemarkGetResponse as SiteRemarkGetResponse,
    type SiteRemarkQueryhelpResponse as SiteRemarkQueryhelpResponse,
    type SiteRemarkTupleResponse as SiteRemarkTupleResponse,
    type SiteRemarkListResponsesOffsetPage as SiteRemarkListResponsesOffsetPage,
    type SiteRemarkCreateParams as SiteRemarkCreateParams,
    type SiteRemarkListParams as SiteRemarkListParams,
    type SiteRemarkCountParams as SiteRemarkCountParams,
    type SiteRemarkGetParams as SiteRemarkGetParams,
    type SiteRemarkTupleParams as SiteRemarkTupleParams,
  };
}
