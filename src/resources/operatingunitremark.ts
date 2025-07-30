// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class Operatingunitremark extends APIResource {
  /**
   * Service operation to take a single operatingunitremark record as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.operatingunitremark.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idOperatingUnit: 'OperatingUnit-ID',
   *   source: 'some.user',
   *   text: 'This is a remark',
   * });
   * ```
   */
  create(body: OperatingunitremarkCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/operatingunitremark', {
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
   * for await (const operatingunitremarkListResponse of client.operatingunitremark.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OperatingunitremarkListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OperatingunitremarkListResponsesOffsetPage, OperatingunitremarkListResponse> {
    return this._client.getAPIList('/udl/operatingunitremark', OffsetPage<OperatingunitremarkListResponse>, {
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
   * const response = await client.operatingunitremark.count();
   * ```
   */
  count(
    query: OperatingunitremarkCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/operatingunitremark/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * operatingunitremark records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.operatingunitremark.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       idOperatingUnit: 'OperatingUnit-ID',
   *       source: 'some.user',
   *       text: 'This is a remark',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: OperatingunitremarkCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/operatingunitremark/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single operatingunitremark record by its unique ID
   * passed as a path parameter.
   *
   * @example
   * ```ts
   * const operatingunitremark =
   *   await client.operatingunitremark.get('id');
   * ```
   */
  get(
    id: string,
    query: OperatingunitremarkGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OperatingunitremarkGetResponse> {
    return this._client.get(path`/udl/operatingunitremark/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.operatingunitremark.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<OperatingunitremarkQueryhelpResponse> {
    return this._client.get('/udl/operatingunitremark/queryhelp', options);
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
   * const response = await client.operatingunitremark.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(
    query: OperatingunitremarkTupleParams,
    options?: RequestOptions,
  ): APIPromise<OperatingunitremarkTupleResponse> {
    return this._client.get('/udl/operatingunitremark/tuple', { query, ...options });
  }
}

export type OperatingunitremarkListResponsesOffsetPage = OffsetPage<OperatingunitremarkListResponse>;

/**
 * Remarks contain amplifying information for a specific service. The information
 * may contain context and interpretations for consumer use.
 */
export interface OperatingunitremarkListResponse {
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
   * The ID of the operating unit to which this remark applies.
   */
  idOperatingUnit: string;

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
   * Unique identifier of the unit remark record from the originating system.
   */
  altRmkId?: string;

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
   * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
   */
  type?: string;
}

export type OperatingunitremarkCountResponse = string;

/**
 * Remarks contain amplifying information for a specific service. The information
 * may contain context and interpretations for consumer use.
 */
export interface OperatingunitremarkGetResponse {
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
   * The ID of the operating unit to which this remark applies.
   */
  idOperatingUnit: string;

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
   * Unique identifier of the unit remark record from the originating system.
   */
  altRmkId?: string;

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
   * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
   */
  type?: string;

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

export interface OperatingunitremarkQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<OperatingunitremarkQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace OperatingunitremarkQueryhelpResponse {
  export interface Parameter {
    classificationMarking?: string;

    derived?: boolean;

    description?: string;

    elemMatch?: boolean;

    format?: string;

    histQuerySupported?: boolean;

    histTupleSupported?: boolean;

    name?: string;

    required?: boolean;

    restQuerySupported?: boolean;

    restTupleSupported?: boolean;

    type?: string;

    unitOfMeasure?: string;

    utcDate?: boolean;
  }
}

export type OperatingunitremarkTupleResponse =
  Array<OperatingunitremarkTupleResponse.OperatingunitremarkTupleResponseItem>;

export namespace OperatingunitremarkTupleResponse {
  /**
   * Remarks contain amplifying information for a specific service. The information
   * may contain context and interpretations for consumer use.
   */
  export interface OperatingunitremarkTupleResponseItem {
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
     * The ID of the operating unit to which this remark applies.
     */
    idOperatingUnit: string;

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
     * Unique identifier of the unit remark record from the originating system.
     */
    altRmkId?: string;

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
     * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
     */
    type?: string;

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

export interface OperatingunitremarkCreateParams {
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
   * The ID of the operating unit to which this remark applies.
   */
  idOperatingUnit: string;

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
   * Unique identifier of the unit remark record from the originating system.
   */
  altRmkId?: string;

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
   * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
   */
  type?: string;
}

export interface OperatingunitremarkListParams extends OffsetPageParams {}

export interface OperatingunitremarkCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface OperatingunitremarkCreateBulkParams {
  body: Array<OperatingunitremarkCreateBulkParams.Body>;
}

export namespace OperatingunitremarkCreateBulkParams {
  /**
   * Remarks contain amplifying information for a specific service. The information
   * may contain context and interpretations for consumer use.
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
     * The ID of the operating unit to which this remark applies.
     */
    idOperatingUnit: string;

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
     * Unique identifier of the unit remark record from the originating system.
     */
    altRmkId?: string;

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
     * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
     */
    type?: string;
  }
}

export interface OperatingunitremarkGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface OperatingunitremarkTupleParams {
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

export declare namespace Operatingunitremark {
  export {
    type OperatingunitremarkListResponse as OperatingunitremarkListResponse,
    type OperatingunitremarkCountResponse as OperatingunitremarkCountResponse,
    type OperatingunitremarkGetResponse as OperatingunitremarkGetResponse,
    type OperatingunitremarkQueryhelpResponse as OperatingunitremarkQueryhelpResponse,
    type OperatingunitremarkTupleResponse as OperatingunitremarkTupleResponse,
    type OperatingunitremarkListResponsesOffsetPage as OperatingunitremarkListResponsesOffsetPage,
    type OperatingunitremarkCreateParams as OperatingunitremarkCreateParams,
    type OperatingunitremarkListParams as OperatingunitremarkListParams,
    type OperatingunitremarkCountParams as OperatingunitremarkCountParams,
    type OperatingunitremarkCreateBulkParams as OperatingunitremarkCreateBulkParams,
    type OperatingunitremarkGetParams as OperatingunitremarkGetParams,
    type OperatingunitremarkTupleParams as OperatingunitremarkTupleParams,
  };
}
