// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HistoryAPI from './history';
import {
  GeoStatusFull,
  GeoStatusFullsOffsetPage,
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GeoStatus extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single GEOStatus record as a POST body and ingest
   * into the database. This operation is not intended to be used for automated feeds
   * into UDL. Data providers should contact the UDL team for specific role
   * assignments and for instructions on setting up a permanent feed through an
   * alternate mechanism.
   *
   * @example
   * ```ts
   * await client.geoStatus.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: GeoStatusCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/geostatus', {
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
   * for await (const geoStatusListResponse of client.geoStatus.list(
   *   { createdAt: '2019-12-27' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: GeoStatusListParams,
    options?: RequestOptions,
  ): PagePromise<GeoStatusListResponsesOffsetPage, GeoStatusListResponse> {
    return this._client.getAPIList('/udl/geostatus', OffsetPage<GeoStatusListResponse>, {
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
   * const response = await client.geoStatus.count({
   *   createdAt: '2019-12-27',
   * });
   * ```
   */
  count(query: GeoStatusCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/geostatus/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * GEOStatus records as a POST body and ingest into the database. This operation is
   * not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.geoStatus.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: GeoStatusCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/geostatus/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single GEOStatus record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const geoStatusFull = await client.geoStatus.get('id');
   * ```
   */
  get(
    id: string,
    query: GeoStatusGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryAPI.GeoStatusFull> {
    return this._client.get(path`/udl/geostatus/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * await client.geoStatus.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/geostatus/queryhelp', {
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
   * const geoStatusFulls = await client.geoStatus.tuple({
   *   columns: 'columns',
   *   createdAt: '2019-12-27',
   * });
   * ```
   */
  tuple(query: GeoStatusTupleParams, options?: RequestOptions): APIPromise<GeoStatusTupleResponse> {
    return this._client.get('/udl/geostatus/tuple', { query, ...options });
  }
}

export type GeoStatusListResponsesOffsetPage = OffsetPage<GeoStatusListResponse>;

/**
 * Information for the specified on-orbit GEO spacecraft, including status,
 * expected longitude limits, and drift rates.
 */
export interface GeoStatusListResponse {
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
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Indicates the confidence level in the entry. (Low, Medium, High).
   */
  confidenceLevel?: string;

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
   * Unique identifier of the object on-orbit object.
   */
  idOnOrbit?: string;

  /**
   * Maximum longitude for this object. WGS-84 longitude of the spacecraft position,
   * in degrees. 0 to 360 degrees.
   */
  longitudeMax?: number;

  /**
   * Minimum longitude for this object. WGS-84 longitude of the spacecraft position,
   * in degrees. 0 to 360 degrees.
   */
  longitudeMin?: number;

  /**
   * Corrective or overriding long term trend for longitudinal change in degrees/day.
   */
  longitudeRate?: number;

  /**
   * Lost space object indicator. (True or False).
   */
  lostFlag?: boolean;

  /**
   * Space object status. (Active, Dead, Unknown).
   */
  objectStatus?: string;

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
   * Optional identifier provided to indicate the target onorbit. This may be an
   * internal identifier and not necessarily map to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Geosynchronous plane changing status. (Current, Never, Former, Future).
   */
  planeChangeStatus?: string;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * Objects displacement from geostationary orbit in deg^2/day^2.
   */
  relativeEnergy?: number;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Sine of inclination times the cosine of right ascension.
   */
  sc?: number;

  /**
   * Semi-annual correction. (True or False).
   */
  semiAnnualCorrFlag?: boolean;

  /**
   * Sine of inclination times the sine of right ascension.
   */
  ss?: number;

  /**
   * Indicates the trough (gravity well) or drift direction of a space object:
   *
   * 255 - Influenced by 255° longitude trough.
   *
   * 75 - Influenced by 75° longitude trough.
   *
   * Both - Oscillating between both 255 and 75 troughs.
   *
   * East - Drifting eastward; large relative energy and a period less than 1436.1
   * minutes.
   *
   * West - Drifting westward; large relative energy and a period greater than 1436.2
   * minutes.
   */
  troughType?: string;
}

export type GeoStatusCountResponse = string;

export type GeoStatusTupleResponse = Array<HistoryAPI.GeoStatusFull>;

export interface GeoStatusCreateParams {
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
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Indicates the confidence level in the entry. (Low, Medium, High).
   */
  confidenceLevel?: string;

  /**
   * Maximum longitude for this object. WGS-84 longitude of the spacecraft position,
   * in degrees. 0 to 360 degrees.
   */
  longitudeMax?: number;

  /**
   * Minimum longitude for this object. WGS-84 longitude of the spacecraft position,
   * in degrees. 0 to 360 degrees.
   */
  longitudeMin?: number;

  /**
   * Corrective or overriding long term trend for longitudinal change in degrees/day.
   */
  longitudeRate?: number;

  /**
   * Lost space object indicator. (True or False).
   */
  lostFlag?: boolean;

  /**
   * Space object status. (Active, Dead, Unknown).
   */
  objectStatus?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided to indicate the target onorbit. This may be an
   * internal identifier and not necessarily map to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Geosynchronous plane changing status. (Current, Never, Former, Future).
   */
  planeChangeStatus?: string;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * Objects displacement from geostationary orbit in deg^2/day^2.
   */
  relativeEnergy?: number;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Sine of inclination times the cosine of right ascension.
   */
  sc?: number;

  /**
   * Semi-annual correction. (True or False).
   */
  semiAnnualCorrFlag?: boolean;

  /**
   * Sine of inclination times the sine of right ascension.
   */
  ss?: number;

  /**
   * Indicates the trough (gravity well) or drift direction of a space object:
   *
   * 255 - Influenced by 255° longitude trough.
   *
   * 75 - Influenced by 75° longitude trough.
   *
   * Both - Oscillating between both 255 and 75 troughs.
   *
   * East - Drifting eastward; large relative energy and a period less than 1436.1
   * minutes.
   *
   * West - Drifting westward; large relative energy and a period greater than 1436.2
   * minutes.
   */
  troughType?: string;
}

export interface GeoStatusListParams extends OffsetPageParams {
  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;
}

export interface GeoStatusCountParams {
  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;

  firstResult?: number;

  maxResults?: number;
}

export interface GeoStatusCreateBulkParams {
  body: Array<GeoStatusCreateBulkParams.Body>;
}

export namespace GeoStatusCreateBulkParams {
  /**
   * Information for the specified on-orbit GEO spacecraft, including status,
   * expected longitude limits, and drift rates.
   */
  export interface Body {
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
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Indicates the confidence level in the entry. (Low, Medium, High).
     */
    confidenceLevel?: string;

    /**
     * Maximum longitude for this object. WGS-84 longitude of the spacecraft position,
     * in degrees. 0 to 360 degrees.
     */
    longitudeMax?: number;

    /**
     * Minimum longitude for this object. WGS-84 longitude of the spacecraft position,
     * in degrees. 0 to 360 degrees.
     */
    longitudeMin?: number;

    /**
     * Corrective or overriding long term trend for longitudinal change in degrees/day.
     */
    longitudeRate?: number;

    /**
     * Lost space object indicator. (True or False).
     */
    lostFlag?: boolean;

    /**
     * Space object status. (Active, Dead, Unknown).
     */
    objectStatus?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided to indicate the target onorbit. This may be an
     * internal identifier and not necessarily map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Geosynchronous plane changing status. (Current, Never, Former, Future).
     */
    planeChangeStatus?: string;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * Objects displacement from geostationary orbit in deg^2/day^2.
     */
    relativeEnergy?: number;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Sine of inclination times the cosine of right ascension.
     */
    sc?: number;

    /**
     * Semi-annual correction. (True or False).
     */
    semiAnnualCorrFlag?: boolean;

    /**
     * Sine of inclination times the sine of right ascension.
     */
    ss?: number;

    /**
     * Indicates the trough (gravity well) or drift direction of a space object:
     *
     * 255 - Influenced by 255° longitude trough.
     *
     * 75 - Influenced by 75° longitude trough.
     *
     * Both - Oscillating between both 255 and 75 troughs.
     *
     * East - Drifting eastward; large relative energy and a period less than 1436.1
     * minutes.
     *
     * West - Drifting westward; large relative energy and a period greater than 1436.2
     * minutes.
     */
    troughType?: string;
  }
}

export interface GeoStatusGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface GeoStatusTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;

  firstResult?: number;

  maxResults?: number;
}

GeoStatus.History = History;

export declare namespace GeoStatus {
  export {
    type GeoStatusListResponse as GeoStatusListResponse,
    type GeoStatusCountResponse as GeoStatusCountResponse,
    type GeoStatusTupleResponse as GeoStatusTupleResponse,
    type GeoStatusListResponsesOffsetPage as GeoStatusListResponsesOffsetPage,
    type GeoStatusCreateParams as GeoStatusCreateParams,
    type GeoStatusListParams as GeoStatusListParams,
    type GeoStatusCountParams as GeoStatusCountParams,
    type GeoStatusCreateBulkParams as GeoStatusCreateBulkParams,
    type GeoStatusGetParams as GeoStatusGetParams,
    type GeoStatusTupleParams as GeoStatusTupleParams,
  };

  export {
    History as History,
    type GeoStatusFull as GeoStatusFull,
    type HistoryCountResponse as HistoryCountResponse,
    type GeoStatusFullsOffsetPage as GeoStatusFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
