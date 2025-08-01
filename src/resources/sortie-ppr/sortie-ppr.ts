// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import {
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

export class SortiePpr extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single sortieppr record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sortiePpr.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: SortiePprCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/sortieppr', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single sortieppr record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.sortiePpr.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: SortiePprUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/sortieppr/${pathID}`, {
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
   * for await (const sortiePprListResponse of client.sortiePpr.list(
   *   { idSortie: 'idSortie' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SortiePprListParams,
    options?: RequestOptions,
  ): PagePromise<SortiePprListResponsesOffsetPage, SortiePprListResponse> {
    return this._client.getAPIList('/udl/sortieppr', OffsetPage<SortiePprListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a sortieppr record specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sortiePpr.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/sortieppr/${id}`, {
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
   * const response = await client.sortiePpr.count({
   *   idSortie: 'idSortie',
   * });
   * ```
   */
  count(query: SortiePprCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/sortieppr/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * SortiePPR records as a POST body and ingest into the database. This operation is
   * not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.sortiePpr.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: SortiePprCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/sortieppr/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single sortieppr record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const sortiePprFull = await client.sortiePpr.get('id');
   * ```
   */
  get(
    id: string,
    query: SortiePprGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.SortiePprFull> {
    return this._client.get(path`/udl/sortieppr/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.sortiePpr.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<SortiePprQueryhelpResponse> {
    return this._client.get('/udl/sortieppr/queryhelp', options);
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
   * const sortiePprFulls = await client.sortiePpr.tuple({
   *   columns: 'columns',
   *   idSortie: 'idSortie',
   * });
   * ```
   */
  tuple(query: SortiePprTupleParams, options?: RequestOptions): APIPromise<SortiePprTupleResponse> {
    return this._client.get('/udl/sortieppr/tuple', { query, ...options });
  }

  /**
   * Service operation to take SortiePPR as a POST body and ingest into the database.
   * This operation is intended to be used for automated feeds into UDL. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   *
   * @example
   * ```ts
   * await client.sortiePpr.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       idSortie: '4ef3d1e8-ab08-ab70-498f-edc479734e5c',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(params: SortiePprUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-sortieppr', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type SortiePprListResponsesOffsetPage = OffsetPage<SortiePprListResponse>;

/**
 * SortiePPR is a regulatory requirement where operators must obtain permissions to
 * full operational access to a runway, taxiway, or airport service.
 */
export interface SortiePprListResponse {
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
   * Unique identifier of the Aircraft Sortie associated with this prior permission
   * required (PPR) record.
   */
  idSortie: string;

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
   * Time the prior permission required (PPR) valid window ends, in ISO 8601 UTC
   * format with millisecond precision.
   */
  endTime?: string;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * Identifier of the prior permission required (PPR) grantor.
   */
  grantor?: string;

  /**
   * The prior permission required (PPR) number issued by the airfield for a sortie.
   */
  number?: string;

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
   * Remarks concerning the prior permission required (PPR) for a sortie.
   */
  remarks?: string;

  /**
   * The username of the prior permission required (PPR) requestor.
   */
  requestor?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Time the prior permission required (PPR) valid window begins, in ISO 8601 UTC
   * format with millisecond precision.
   */
  startTime?: string;

  /**
   * Type of prior permission required (PPR) for a sortie (M - Military or C -
   * Civilian). Enum: [M, C].
   */
  type?: 'M' | 'C';
}

export type SortiePprCountResponse = string;

export interface SortiePprQueryhelpResponse {
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

export type SortiePprTupleResponse = Array<Shared.SortiePprFull>;

export interface SortiePprCreateParams {
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
   * Unique identifier of the Aircraft Sortie associated with this prior permission
   * required (PPR) record.
   */
  idSortie: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Time the prior permission required (PPR) valid window ends, in ISO 8601 UTC
   * format with millisecond precision.
   */
  endTime?: string;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * Identifier of the prior permission required (PPR) grantor.
   */
  grantor?: string;

  /**
   * The prior permission required (PPR) number issued by the airfield for a sortie.
   */
  number?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Remarks concerning the prior permission required (PPR) for a sortie.
   */
  remarks?: string;

  /**
   * The username of the prior permission required (PPR) requestor.
   */
  requestor?: string;

  /**
   * Time the prior permission required (PPR) valid window begins, in ISO 8601 UTC
   * format with millisecond precision.
   */
  startTime?: string;

  /**
   * Type of prior permission required (PPR) for a sortie (M - Military or C -
   * Civilian). Enum: [M, C].
   */
  type?: 'M' | 'C';
}

export interface SortiePprUpdateParams {
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
   * Unique identifier of the Aircraft Sortie associated with this prior permission
   * required (PPR) record.
   */
  idSortie: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Time the prior permission required (PPR) valid window ends, in ISO 8601 UTC
   * format with millisecond precision.
   */
  endTime?: string;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * Identifier of the prior permission required (PPR) grantor.
   */
  grantor?: string;

  /**
   * The prior permission required (PPR) number issued by the airfield for a sortie.
   */
  number?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Remarks concerning the prior permission required (PPR) for a sortie.
   */
  remarks?: string;

  /**
   * The username of the prior permission required (PPR) requestor.
   */
  requestor?: string;

  /**
   * Time the prior permission required (PPR) valid window begins, in ISO 8601 UTC
   * format with millisecond precision.
   */
  startTime?: string;

  /**
   * Type of prior permission required (PPR) for a sortie (M - Military or C -
   * Civilian). Enum: [M, C].
   */
  type?: 'M' | 'C';
}

export interface SortiePprListParams extends OffsetPageParams {
  /**
   * Unique identifier of the Aircraft Sortie associated with this prior permission
   * required (PPR) record.
   */
  idSortie: string;
}

export interface SortiePprCountParams {
  /**
   * Unique identifier of the Aircraft Sortie associated with this prior permission
   * required (PPR) record.
   */
  idSortie: string;

  firstResult?: number;

  maxResults?: number;
}

export interface SortiePprCreateBulkParams {
  body: Array<SortiePprCreateBulkParams.Body>;
}

export namespace SortiePprCreateBulkParams {
  /**
   * SortiePPR is a regulatory requirement where operators must obtain permissions to
   * full operational access to a runway, taxiway, or airport service.
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
     * Unique identifier of the Aircraft Sortie associated with this prior permission
     * required (PPR) record.
     */
    idSortie: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Time the prior permission required (PPR) valid window ends, in ISO 8601 UTC
     * format with millisecond precision.
     */
    endTime?: string;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * Identifier of the prior permission required (PPR) grantor.
     */
    grantor?: string;

    /**
     * The prior permission required (PPR) number issued by the airfield for a sortie.
     */
    number?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Remarks concerning the prior permission required (PPR) for a sortie.
     */
    remarks?: string;

    /**
     * The username of the prior permission required (PPR) requestor.
     */
    requestor?: string;

    /**
     * Time the prior permission required (PPR) valid window begins, in ISO 8601 UTC
     * format with millisecond precision.
     */
    startTime?: string;

    /**
     * Type of prior permission required (PPR) for a sortie (M - Military or C -
     * Civilian). Enum: [M, C].
     */
    type?: 'M' | 'C';
  }
}

export interface SortiePprGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SortiePprTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Unique identifier of the Aircraft Sortie associated with this prior permission
   * required (PPR) record.
   */
  idSortie: string;

  firstResult?: number;

  maxResults?: number;
}

export interface SortiePprUnvalidatedPublishParams {
  body: Array<SortiePprUnvalidatedPublishParams.Body>;
}

export namespace SortiePprUnvalidatedPublishParams {
  /**
   * SortiePPR is a regulatory requirement where operators must obtain permissions to
   * full operational access to a runway, taxiway, or airport service.
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
     * Unique identifier of the Aircraft Sortie associated with this prior permission
     * required (PPR) record.
     */
    idSortie: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Time the prior permission required (PPR) valid window ends, in ISO 8601 UTC
     * format with millisecond precision.
     */
    endTime?: string;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * Identifier of the prior permission required (PPR) grantor.
     */
    grantor?: string;

    /**
     * The prior permission required (PPR) number issued by the airfield for a sortie.
     */
    number?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Remarks concerning the prior permission required (PPR) for a sortie.
     */
    remarks?: string;

    /**
     * The username of the prior permission required (PPR) requestor.
     */
    requestor?: string;

    /**
     * Time the prior permission required (PPR) valid window begins, in ISO 8601 UTC
     * format with millisecond precision.
     */
    startTime?: string;

    /**
     * Type of prior permission required (PPR) for a sortie (M - Military or C -
     * Civilian). Enum: [M, C].
     */
    type?: 'M' | 'C';
  }
}

SortiePpr.History = History;

export declare namespace SortiePpr {
  export {
    type SortiePprListResponse as SortiePprListResponse,
    type SortiePprCountResponse as SortiePprCountResponse,
    type SortiePprQueryhelpResponse as SortiePprQueryhelpResponse,
    type SortiePprTupleResponse as SortiePprTupleResponse,
    type SortiePprListResponsesOffsetPage as SortiePprListResponsesOffsetPage,
    type SortiePprCreateParams as SortiePprCreateParams,
    type SortiePprUpdateParams as SortiePprUpdateParams,
    type SortiePprListParams as SortiePprListParams,
    type SortiePprCountParams as SortiePprCountParams,
    type SortiePprCreateBulkParams as SortiePprCreateBulkParams,
    type SortiePprGetParams as SortiePprGetParams,
    type SortiePprTupleParams as SortiePprTupleParams,
    type SortiePprUnvalidatedPublishParams as SortiePprUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
