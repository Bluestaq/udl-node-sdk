// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  TaiutcFull,
  TaiutcFullsOffsetPage,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TaiUtc extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single TAIUTC object as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.taiUtc.create({
   *   adjustmentDate: '2017-01-01T00:00:00.123Z',
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: TaiUtcCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/taiutc', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single TAIUTC object. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.taiUtc.update('id', {
   *   adjustmentDate: '2017-01-01T00:00:00.123Z',
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: TaiUtcUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/taiutc/${pathID}`, {
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
   * for await (const taiUtcListResponse of client.taiUtc.list({
   *   adjustmentDate: '2019-12-27T18:11:19.117Z',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TaiUtcListParams,
    options?: RequestOptions,
  ): PagePromise<TaiUtcListResponsesOffsetPage, TaiUtcListResponse> {
    return this._client.getAPIList('/udl/taiutc', OffsetPage<TaiUtcListResponse>, { query, ...options });
  }

  /**
   * Service operation to delete an TAIUTC object specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance. Note, delete operations do not remove data
   * from historical or publish/subscribe stores.
   *
   * @example
   * ```ts
   * await client.taiUtc.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/taiutc/${id}`, {
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
   * const response = await client.taiUtc.count({
   *   adjustmentDate: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: TaiUtcCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/taiutc/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single TAIUTC record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const taiutcFull = await client.taiUtc.get('id');
   * ```
   */
  get(
    id: string,
    query: TaiUtcGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryAPI.TaiutcFull> {
    return this._client.get(path`/udl/taiutc/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.taiUtc.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<TaiUtcQueryhelpResponse> {
    return this._client.get('/udl/taiutc/queryhelp', options);
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
   * const taiutcFulls = await client.taiUtc.tuple({
   *   adjustmentDate: '2019-12-27T18:11:19.117Z',
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: TaiUtcTupleParams, options?: RequestOptions): APIPromise<TaiUtcTupleResponse> {
    return this._client.get('/udl/taiutc/tuple', { query, ...options });
  }
}

export type TaiUtcListResponsesOffsetPage = OffsetPage<TaiUtcListResponse>;

/**
 * International Atomic Time (TAI) is a statistical atomic time scale based on a
 * large number of clocks operating at standards laboratories around the world that
 * is maintained by the Bureau International des Poids et Mesures; its unit
 * interval is exactly one SI second at sea level. The origin of TAI is such that
 * UT1-TAI is approximately 0 (zero) on January 1, 1958. TAI is not adjusted for
 * leap seconds. Coordinated Universal Time (UTC) is defined by the CCIR
 * Recommendation 460-4 (1986). It differs from TAI by the total number of leap
 * seconds, so that UT1-UTC stays smaller than 0.9s in absolute value. The decision
 * to introduce a leap second in UTC is the responsibility of the International
 * Earth Rotation Service (IERS). According to the CCIR Recommendation, first
 * preference is given to the opportunities at the end of December and June, and
 * second preference to those at the end of March and September. Since the system
 * was introduced in 1972, only dates in June and December have been used. TAI is
 * expressed in terms of UTC by the relation TAI = UTC + dAT, where dAT is the
 * total algebraic sum of leap seconds. The first leap second was introduced on
 * June 30, 1972. The historical list of leap seconds can be found in this table.
 */
export interface TaiUtcListResponse {
  /**
   * Effective date/time for the leap second adjustment.
   */
  adjustmentDate: string;

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
   * Time the row was created in the database, auto-populated by the system.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  /**
   * Multiplication factor of the leap second adjustment.
   */
  multiplicationFactor?: number;

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
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * Total/cumulative offset between TAI and UTC time as of adjustmentDate, in
   * seconds.
   */
  taiUTC?: number;
}

export type TaiUtcCountResponse = string;

export interface TaiUtcQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<TaiUtcQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace TaiUtcQueryhelpResponse {
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

export type TaiUtcTupleResponse = Array<HistoryAPI.TaiutcFull>;

export interface TaiUtcCreateParams {
  /**
   * Effective date/time for the leap second adjustment.
   */
  adjustmentDate: string;

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
   * Multiplication factor of the leap second adjustment.
   */
  multiplicationFactor?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * Total/cumulative offset between TAI and UTC time as of adjustmentDate, in
   * seconds.
   */
  taiUTC?: number;
}

export interface TaiUtcUpdateParams {
  /**
   * Effective date/time for the leap second adjustment.
   */
  adjustmentDate: string;

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
  body_id?: string;

  /**
   * Multiplication factor of the leap second adjustment.
   */
  multiplicationFactor?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * Total/cumulative offset between TAI and UTC time as of adjustmentDate, in
   * seconds.
   */
  taiUTC?: number;
}

export interface TaiUtcListParams extends OffsetPageParams {
  /**
   * Effective date/time for the leap second adjustment. Must be a unique value
   * across all TAIUTC datasets. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  adjustmentDate: string;
}

export interface TaiUtcCountParams {
  /**
   * Effective date/time for the leap second adjustment. Must be a unique value
   * across all TAIUTC datasets. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  adjustmentDate: string;

  firstResult?: number;

  maxResults?: number;
}

export interface TaiUtcGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface TaiUtcTupleParams {
  /**
   * Effective date/time for the leap second adjustment. Must be a unique value
   * across all TAIUTC datasets. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  adjustmentDate: string;

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

TaiUtc.History = History;

export declare namespace TaiUtc {
  export {
    type TaiUtcListResponse as TaiUtcListResponse,
    type TaiUtcCountResponse as TaiUtcCountResponse,
    type TaiUtcQueryhelpResponse as TaiUtcQueryhelpResponse,
    type TaiUtcTupleResponse as TaiUtcTupleResponse,
    type TaiUtcListResponsesOffsetPage as TaiUtcListResponsesOffsetPage,
    type TaiUtcCreateParams as TaiUtcCreateParams,
    type TaiUtcUpdateParams as TaiUtcUpdateParams,
    type TaiUtcListParams as TaiUtcListParams,
    type TaiUtcCountParams as TaiUtcCountParams,
    type TaiUtcGetParams as TaiUtcGetParams,
    type TaiUtcTupleParams as TaiUtcTupleParams,
  };

  export {
    History as History,
    type TaiutcFull as TaiutcFull,
    type HistoryCountResponse as HistoryCountResponse,
    type TaiutcFullsOffsetPage as TaiutcFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
