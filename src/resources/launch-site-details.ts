// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as LocationAPI from 'bluestaq@unified-data-library/resources/location';
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

export class LaunchSiteDetails extends APIResource {
  /**
   * Service operation to take a single LaunchSiteDetails as a POST body and ingest
   * into the database. A LaunchSiteDetails represents details compiled/collected on
   * a launch site by a particular source. A launch site may have several details
   * records. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchSiteDetails.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idLaunchSite: 'LAUNCHSITE-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: LaunchSiteDetailCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/launchsitedetails', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a LaunchSiteDetails. A LaunchSiteDetails represents
   * details compiled/collected on a launch site by a particular source. A launch
   * site may have several details records. A specific role is required to perform
   * this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchSiteDetails.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idLaunchSite: 'LAUNCHSITE-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: LaunchSiteDetailUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/launchsitedetails/${pathID}`, {
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
   * for await (const launchSiteDetailListResponse of client.launchSiteDetails.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LaunchSiteDetailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LaunchSiteDetailListResponsesOffsetPage, LaunchSiteDetailListResponse> {
    return this._client.getAPIList('/udl/launchsitedetails', OffsetPage<LaunchSiteDetailListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a LaunchSiteDetails specified by the passed ID path
   * parameter. A LaunchSiteDetails represents details compiled/collected on a launch
   * site by a particular source. A launch site may have several details records. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchSiteDetails.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/launchsitedetails/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single LaunchSiteDetails by a source passed as a
   * query parameter. A LaunchSiteDetails represents details compiled/collected on a
   * launch site by a particular source. A launch site may have several details
   * records.
   *
   * @example
   * ```ts
   * const response =
   *   await client.launchSiteDetails.findBySource({
   *     source: 'source',
   *   });
   * ```
   */
  findBySource(
    query: LaunchSiteDetailFindBySourceParams,
    options?: RequestOptions,
  ): APIPromise<LaunchSiteDetailFindBySourceResponse> {
    return this._client.get('/udl/launchsitedetails/findBySource', { query, ...options });
  }

  /**
   * Service operation to get a single LaunchSiteDetails by its unique ID passed as a
   * path parameter. A LaunchSiteDetails represents details compiled/collected on a
   * launch site by a particular source. A launch site may have several details
   * records.
   *
   * @example
   * ```ts
   * const launchSiteDetail = await client.launchSiteDetails.get(
   *   'id',
   * );
   * ```
   */
  get(
    id: string,
    query: LaunchSiteDetailGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LaunchSiteDetailGetResponse> {
    return this._client.get(path`/udl/launchsitedetails/${id}`, { query, ...options });
  }
}

export type LaunchSiteDetailListResponsesOffsetPage = OffsetPage<LaunchSiteDetailListResponse>;

/**
 * Model representation of details compiled/collected on a launch site by a
 * particular source. A launch site may have several details records.
 */
export interface LaunchSiteDetailListResponse {
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
  location?: Shared.LocationAbridged;

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

export type LaunchSiteDetailFindBySourceResponse =
  Array<LaunchSiteDetailFindBySourceResponse.LaunchSiteDetailFindBySourceResponseItem>;

export namespace LaunchSiteDetailFindBySourceResponse {
  /**
   * Model representation of details compiled/collected on a launch site by a
   * particular source. A launch site may have several details records.
   */
  export interface LaunchSiteDetailFindBySourceResponseItem {
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
    location?: Shared.LocationAbridged;

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

/**
 * Model representation of details compiled/collected on a launch site by a
 * particular source. A launch site may have several details records.
 */
export interface LaunchSiteDetailGetResponse {
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

export interface LaunchSiteDetailCreateParams {
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
  location?: LocationAPI.LocationIngest;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface LaunchSiteDetailUpdateParams {
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
  body_id?: string;

  /**
   * Array of supported launch inclinations known for this site. The array is always
   * sized as a multiple of two and includes start/end values to support ranges. For
   * example, if a site support inclinations of 10 and 12-14, the array would have
   * the following values: [10,10, 12,14].
   */
  availableInclinations?: Array<number>;

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
  location?: LocationAPI.LocationIngest;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface LaunchSiteDetailListParams extends OffsetPageParams {}

export interface LaunchSiteDetailFindBySourceParams {
  /**
   * The source of the LaunchSiteDetails records to find.
   */
  source: string;

  firstResult?: number;

  maxResults?: number;
}

export interface LaunchSiteDetailGetParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace LaunchSiteDetails {
  export {
    type LaunchSiteDetailListResponse as LaunchSiteDetailListResponse,
    type LaunchSiteDetailFindBySourceResponse as LaunchSiteDetailFindBySourceResponse,
    type LaunchSiteDetailGetResponse as LaunchSiteDetailGetResponse,
    type LaunchSiteDetailListResponsesOffsetPage as LaunchSiteDetailListResponsesOffsetPage,
    type LaunchSiteDetailCreateParams as LaunchSiteDetailCreateParams,
    type LaunchSiteDetailUpdateParams as LaunchSiteDetailUpdateParams,
    type LaunchSiteDetailListParams as LaunchSiteDetailListParams,
    type LaunchSiteDetailFindBySourceParams as LaunchSiteDetailFindBySourceParams,
    type LaunchSiteDetailGetParams as LaunchSiteDetailGetParams,
  };
}
