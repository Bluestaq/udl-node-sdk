// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SurfaceObstruction extends APIResource {
  /**
   * Service operation to take a single surfaceobstruction record as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: SurfaceObstructionCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/surfaceobstruction', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single surfaceobstruction record. A specific role
   * is required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  update(pathID: string, body: SurfaceObstructionUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/surfaceobstruction/${pathID}`, {
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
   */
  list(
    query: SurfaceObstructionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SurfaceObstructionListResponsesOffsetPage, SurfaceObstructionListResponse> {
    return this._client.getAPIList('/udl/surfaceobstruction', OffsetPage<SurfaceObstructionListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a surfaceobstruction record specified by the passed
   * ID path parameter. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/surfaceobstruction/${id}`, {
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
   */
  count(
    query: SurfaceObstructionCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/surfaceobstruction/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single surfaceobstruction record by its unique ID
   * passed as a path parameter.
   */
  get(
    id: string,
    query: SurfaceObstructionGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SurfaceObstructionGetResponse> {
    return this._client.get(path`/udl/surfaceobstruction/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/surfaceobstruction/queryhelp', {
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
   */
  tuple(
    query: SurfaceObstructionTupleParams,
    options?: RequestOptions,
  ): APIPromise<SurfaceObstructionTupleResponse> {
    return this._client.get('/udl/surfaceobstruction/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple surfaceobstruction records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  unvalidatedPublish(
    params: SurfaceObstructionUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-surfaceobstruction', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type SurfaceObstructionListResponsesOffsetPage = OffsetPage<SurfaceObstructionListResponse>;

export interface SurfaceObstructionListResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The unique identifier of the associated surface record. This field is required
   * when posting, updating, or deleting a SurfaceObstruction record.
   */
  idSurface: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Array of all vehicles that are affected by this obstruction at the surface
   * end-point, and require an advisory for usage.
   */
  advisoryRequired?: Array<string>;

  /**
   * Array of all vehicles that are affected by this obstruction at the surface
   * end-point, and require an approval for usage.
   */
  approvalRequired?: Array<string>;

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
   * The distance from the surface center line to this obstruction, in feet.
   */
  distanceFromCenterLine?: number;

  /**
   * The distance from the surface edge to this obstruction, in feet.
   */
  distanceFromEdge?: number;

  /**
   * The distance from the surface threshold to this obstruction, in feet.
   */
  distanceFromThreshold?: number;

  /**
   * The unique identifier of the associated NavigationalObstruction record.
   */
  idNavigationalObstruction?: string;

  /**
   * Description of this surface obstruction.
   */
  obstructionDesc?: string;

  /**
   * The height above ground level of the surface obstruction, in feet.
   */
  obstructionHeight?: number;

  /**
   * A code that indicates which side of the surface end is affected by this
   * obstruction.
   */
  obstructionSideCode?: string;

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
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;
}

export type SurfaceObstructionCountResponse = string;

export interface SurfaceObstructionGetResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The unique identifier of the associated surface record. This field is required
   * when posting, updating, or deleting a SurfaceObstruction record.
   */
  idSurface: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Array of all vehicles that are affected by this obstruction at the surface
   * end-point, and require an advisory for usage.
   */
  advisoryRequired?: Array<string>;

  /**
   * Array of all vehicles that are affected by this obstruction at the surface
   * end-point, and require an approval for usage.
   */
  approvalRequired?: Array<string>;

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
   * The distance from the surface center line to this obstruction, in feet.
   */
  distanceFromCenterLine?: number;

  /**
   * The distance from the surface edge to this obstruction, in feet.
   */
  distanceFromEdge?: number;

  /**
   * The distance from the surface threshold to this obstruction, in feet.
   */
  distanceFromThreshold?: number;

  /**
   * The unique identifier of the associated NavigationalObstruction record.
   */
  idNavigationalObstruction?: string;

  /**
   * Description of this surface obstruction.
   */
  obstructionDesc?: string;

  /**
   * The height above ground level of the surface obstruction, in feet.
   */
  obstructionHeight?: number;

  /**
   * A code that indicates which side of the surface end is affected by this
   * obstruction.
   */
  obstructionSideCode?: string;

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
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

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

export type SurfaceObstructionTupleResponse =
  Array<SurfaceObstructionTupleResponse.SurfaceObstructionTupleResponseItem>;

export namespace SurfaceObstructionTupleResponse {
  export interface SurfaceObstructionTupleResponseItem {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * The unique identifier of the associated surface record. This field is required
     * when posting, updating, or deleting a SurfaceObstruction record.
     */
    idSurface: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Array of all vehicles that are affected by this obstruction at the surface
     * end-point, and require an advisory for usage.
     */
    advisoryRequired?: Array<string>;

    /**
     * Array of all vehicles that are affected by this obstruction at the surface
     * end-point, and require an approval for usage.
     */
    approvalRequired?: Array<string>;

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
     * The distance from the surface center line to this obstruction, in feet.
     */
    distanceFromCenterLine?: number;

    /**
     * The distance from the surface edge to this obstruction, in feet.
     */
    distanceFromEdge?: number;

    /**
     * The distance from the surface threshold to this obstruction, in feet.
     */
    distanceFromThreshold?: number;

    /**
     * The unique identifier of the associated NavigationalObstruction record.
     */
    idNavigationalObstruction?: string;

    /**
     * Description of this surface obstruction.
     */
    obstructionDesc?: string;

    /**
     * The height above ground level of the surface obstruction, in feet.
     */
    obstructionHeight?: number;

    /**
     * A code that indicates which side of the surface end is affected by this
     * obstruction.
     */
    obstructionSideCode?: string;

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
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

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

export interface SurfaceObstructionCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The unique identifier of the associated surface record. This field is required
   * when posting, updating, or deleting a SurfaceObstruction record.
   */
  idSurface: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Array of all vehicles that are affected by this obstruction at the surface
   * end-point, and require an advisory for usage.
   */
  advisoryRequired?: Array<string>;

  /**
   * Array of all vehicles that are affected by this obstruction at the surface
   * end-point, and require an approval for usage.
   */
  approvalRequired?: Array<string>;

  /**
   * The distance from the surface center line to this obstruction, in feet.
   */
  distanceFromCenterLine?: number;

  /**
   * The distance from the surface edge to this obstruction, in feet.
   */
  distanceFromEdge?: number;

  /**
   * The distance from the surface threshold to this obstruction, in feet.
   */
  distanceFromThreshold?: number;

  /**
   * The unique identifier of the associated NavigationalObstruction record.
   */
  idNavigationalObstruction?: string;

  /**
   * Description of this surface obstruction.
   */
  obstructionDesc?: string;

  /**
   * The height above ground level of the surface obstruction, in feet.
   */
  obstructionHeight?: number;

  /**
   * A code that indicates which side of the surface end is affected by this
   * obstruction.
   */
  obstructionSideCode?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface SurfaceObstructionUpdateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The unique identifier of the associated surface record. This field is required
   * when posting, updating, or deleting a SurfaceObstruction record.
   */
  idSurface: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Array of all vehicles that are affected by this obstruction at the surface
   * end-point, and require an advisory for usage.
   */
  advisoryRequired?: Array<string>;

  /**
   * Array of all vehicles that are affected by this obstruction at the surface
   * end-point, and require an approval for usage.
   */
  approvalRequired?: Array<string>;

  /**
   * The distance from the surface center line to this obstruction, in feet.
   */
  distanceFromCenterLine?: number;

  /**
   * The distance from the surface edge to this obstruction, in feet.
   */
  distanceFromEdge?: number;

  /**
   * The distance from the surface threshold to this obstruction, in feet.
   */
  distanceFromThreshold?: number;

  /**
   * The unique identifier of the associated NavigationalObstruction record.
   */
  idNavigationalObstruction?: string;

  /**
   * Description of this surface obstruction.
   */
  obstructionDesc?: string;

  /**
   * The height above ground level of the surface obstruction, in feet.
   */
  obstructionHeight?: number;

  /**
   * A code that indicates which side of the surface end is affected by this
   * obstruction.
   */
  obstructionSideCode?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface SurfaceObstructionListParams extends OffsetPageParams {}

export interface SurfaceObstructionCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SurfaceObstructionGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SurfaceObstructionTupleParams {
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

export interface SurfaceObstructionUnvalidatedPublishParams {
  body: Array<SurfaceObstructionUnvalidatedPublishParams.Body>;
}

export namespace SurfaceObstructionUnvalidatedPublishParams {
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * The unique identifier of the associated surface record. This field is required
     * when posting, updating, or deleting a SurfaceObstruction record.
     */
    idSurface: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Array of all vehicles that are affected by this obstruction at the surface
     * end-point, and require an advisory for usage.
     */
    advisoryRequired?: Array<string>;

    /**
     * Array of all vehicles that are affected by this obstruction at the surface
     * end-point, and require an approval for usage.
     */
    approvalRequired?: Array<string>;

    /**
     * The distance from the surface center line to this obstruction, in feet.
     */
    distanceFromCenterLine?: number;

    /**
     * The distance from the surface edge to this obstruction, in feet.
     */
    distanceFromEdge?: number;

    /**
     * The distance from the surface threshold to this obstruction, in feet.
     */
    distanceFromThreshold?: number;

    /**
     * The unique identifier of the associated NavigationalObstruction record.
     */
    idNavigationalObstruction?: string;

    /**
     * Description of this surface obstruction.
     */
    obstructionDesc?: string;

    /**
     * The height above ground level of the surface obstruction, in feet.
     */
    obstructionHeight?: number;

    /**
     * A code that indicates which side of the surface end is affected by this
     * obstruction.
     */
    obstructionSideCode?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;
  }
}

export declare namespace SurfaceObstruction {
  export {
    type SurfaceObstructionListResponse as SurfaceObstructionListResponse,
    type SurfaceObstructionCountResponse as SurfaceObstructionCountResponse,
    type SurfaceObstructionGetResponse as SurfaceObstructionGetResponse,
    type SurfaceObstructionTupleResponse as SurfaceObstructionTupleResponse,
    type SurfaceObstructionListResponsesOffsetPage as SurfaceObstructionListResponsesOffsetPage,
    type SurfaceObstructionCreateParams as SurfaceObstructionCreateParams,
    type SurfaceObstructionUpdateParams as SurfaceObstructionUpdateParams,
    type SurfaceObstructionListParams as SurfaceObstructionListParams,
    type SurfaceObstructionCountParams as SurfaceObstructionCountParams,
    type SurfaceObstructionGetParams as SurfaceObstructionGetParams,
    type SurfaceObstructionTupleParams as SurfaceObstructionTupleParams,
    type SurfaceObstructionUnvalidatedPublishParams as SurfaceObstructionUnvalidatedPublishParams,
  };
}
