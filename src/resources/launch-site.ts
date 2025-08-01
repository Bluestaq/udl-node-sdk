// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LaunchSite extends APIResource {
  /**
   * Service operation to take a single launch site as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchSite.create({
   *   classificationMarking: 'U',
   *   code: 'SAN MARCO',
   *   dataMode: 'TEST',
   *   name: 'Example launch site name',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: LaunchSiteCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/launchsite', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a launch. A specific role is required to perform
   * this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchSite.update('id', {
   *   classificationMarking: 'U',
   *   code: 'SAN MARCO',
   *   dataMode: 'TEST',
   *   name: 'Example launch site name',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: LaunchSiteUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/launchsite/${pathID}`, {
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
   * for await (const launchSiteListResponse of client.launchSite.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LaunchSiteListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LaunchSiteListResponsesOffsetPage, LaunchSiteListResponse> {
    return this._client.getAPIList('/udl/launchsite', OffsetPage<LaunchSiteListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a launch site specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchSite.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/launchsite/${id}`, {
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
   * const response = await client.launchSite.count();
   * ```
   */
  count(query: LaunchSiteCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/launchsite/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single launch site by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const launchSite = await client.launchSite.get('id');
   * ```
   */
  get(
    id: string,
    query: LaunchSiteGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LaunchSiteGetResponse> {
    return this._client.get(path`/udl/launchsite/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.launchSite.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<LaunchSiteQueryhelpResponse> {
    return this._client.get('/udl/launchsite/queryhelp', options);
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
   * const response = await client.launchSite.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: LaunchSiteTupleParams, options?: RequestOptions): APIPromise<LaunchSiteTupleResponse> {
    return this._client.get('/udl/launchsite/tuple', { query, ...options });
  }
}

export type LaunchSiteListResponsesOffsetPage = OffsetPage<LaunchSiteListResponse>;

/**
 * Model representation of known launch sites.
 */
export interface LaunchSiteListResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Launch site code.
   */
  code: string;

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
   * Launch site name.
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
   * Alternate launch site code.
   */
  altCode?: string;

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
   * Unique identifier of the parent site associated with this launch site.
   */
  idSite?: string;

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
   * Abbreviated short name for the launch site.
   */
  shortCode?: string;
}

export type LaunchSiteCountResponse = string;

/**
 * Model representation of known launch sites.
 */
export interface LaunchSiteGetResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Launch site code.
   */
  code: string;

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
   * Launch site name.
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
   * Alternate launch site code.
   */
  altCode?: string;

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
   * Unique identifier of the parent site associated with this launch site.
   */
  idSite?: string;

  /**
   * Read-only collection of additional LaunchSiteDetails by various sources for this
   * launch site, ignored on create/update. These details must be created separately
   * via the /udl/launchsitedetails operations.
   */
  launchSiteDetails?: Array<LaunchSiteGetResponse.LaunchSiteDetail>;

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
   * Abbreviated short name for the launch site.
   */
  shortCode?: string;

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

export namespace LaunchSiteGetResponse {
  /**
   * Model representation of details compiled/collected on a launch site by a
   * particular source. A launch site may have several details records.
   */
  export interface LaunchSiteDetail {
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
     * Identifier of the parent launch site record.
     */
    idLaunchSite: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Array of supported launch inclinations known for this site. The array is always
     * sized as a multiple of two and includes start/end values to support ranges. For
     * example, if a site support inclinations of 10 and 12-14, the array would have
     * the following values: [10,10, 12,14].
     */
    availableInclinations?: Array<number>;

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
     * Notes/description of the launch site.
     */
    description?: string;

    /**
     * ID of the location data for the launch site, or null if mobile (e.g. sea launch
     * platform in international waters).
     */
    idLocation?: string;

    /**
     * Launch site group name. Multiple launch sites may be colocated within a launch
     * ''group''.
     */
    launchGroup?: string;

    /**
     * Model representation of a location, which is a specific fixed point on the earth
     * and is used to denote the locations of fixed sensors, operating units, etc.
     */
    location?: Shared.LocationFull;

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

export interface LaunchSiteQueryhelpResponse {
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

export type LaunchSiteTupleResponse = Array<LaunchSiteTupleResponse.LaunchSiteTupleResponseItem>;

export namespace LaunchSiteTupleResponse {
  /**
   * Model representation of known launch sites.
   */
  export interface LaunchSiteTupleResponseItem {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Launch site code.
     */
    code: string;

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
     * Launch site name.
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
     * Alternate launch site code.
     */
    altCode?: string;

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
     * Unique identifier of the parent site associated with this launch site.
     */
    idSite?: string;

    /**
     * Read-only collection of additional LaunchSiteDetails by various sources for this
     * launch site, ignored on create/update. These details must be created separately
     * via the /udl/launchsitedetails operations.
     */
    launchSiteDetails?: Array<LaunchSiteTupleResponseItem.LaunchSiteDetail>;

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
     * Abbreviated short name for the launch site.
     */
    shortCode?: string;

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

  export namespace LaunchSiteTupleResponseItem {
    /**
     * Model representation of details compiled/collected on a launch site by a
     * particular source. A launch site may have several details records.
     */
    export interface LaunchSiteDetail {
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
       * Identifier of the parent launch site record.
       */
      idLaunchSite: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Array of supported launch inclinations known for this site. The array is always
       * sized as a multiple of two and includes start/end values to support ranges. For
       * example, if a site support inclinations of 10 and 12-14, the array would have
       * the following values: [10,10, 12,14].
       */
      availableInclinations?: Array<number>;

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
       * Notes/description of the launch site.
       */
      description?: string;

      /**
       * ID of the location data for the launch site, or null if mobile (e.g. sea launch
       * platform in international waters).
       */
      idLocation?: string;

      /**
       * Launch site group name. Multiple launch sites may be colocated within a launch
       * ''group''.
       */
      launchGroup?: string;

      /**
       * Model representation of a location, which is a specific fixed point on the earth
       * and is used to denote the locations of fixed sensors, operating units, etc.
       */
      location?: Shared.LocationFull;

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

export interface LaunchSiteCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Launch site code.
   */
  code: string;

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
   * Launch site name.
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
   * Alternate launch site code.
   */
  altCode?: string;

  /**
   * Unique identifier of the parent site associated with this launch site.
   */
  idSite?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Abbreviated short name for the launch site.
   */
  shortCode?: string;
}

export interface LaunchSiteUpdateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Launch site code.
   */
  code: string;

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
   * Launch site name.
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
   * Alternate launch site code.
   */
  altCode?: string;

  /**
   * Unique identifier of the parent site associated with this launch site.
   */
  idSite?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Abbreviated short name for the launch site.
   */
  shortCode?: string;
}

export interface LaunchSiteListParams extends OffsetPageParams {}

export interface LaunchSiteCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface LaunchSiteGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface LaunchSiteTupleParams {
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

export declare namespace LaunchSite {
  export {
    type LaunchSiteListResponse as LaunchSiteListResponse,
    type LaunchSiteCountResponse as LaunchSiteCountResponse,
    type LaunchSiteGetResponse as LaunchSiteGetResponse,
    type LaunchSiteQueryhelpResponse as LaunchSiteQueryhelpResponse,
    type LaunchSiteTupleResponse as LaunchSiteTupleResponse,
    type LaunchSiteListResponsesOffsetPage as LaunchSiteListResponsesOffsetPage,
    type LaunchSiteCreateParams as LaunchSiteCreateParams,
    type LaunchSiteUpdateParams as LaunchSiteUpdateParams,
    type LaunchSiteListParams as LaunchSiteListParams,
    type LaunchSiteCountParams as LaunchSiteCountParams,
    type LaunchSiteGetParams as LaunchSiteGetParams,
    type LaunchSiteTupleParams as LaunchSiteTupleParams,
  };
}
