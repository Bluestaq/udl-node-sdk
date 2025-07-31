// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as Shared from 'bluestaq@unified-data-library/resources/shared';
import * as HistoryAPI from 'bluestaq@unified-data-library/resources/launch-event/history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
  HistoryListResponsesOffsetPage,
} from 'bluestaq@unified-data-library/resources/launch-event/history';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class LaunchEvent extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single LaunchEvent as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchEvent.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   msgCreateDate: '2020-01-01T00:00:00.123Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: LaunchEventCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/launchevent', {
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
   * for await (const launchEventListResponse of client.launchEvent.list(
   *   { msgCreateDate: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LaunchEventListParams,
    options?: RequestOptions,
  ): PagePromise<LaunchEventListResponsesOffsetPage, LaunchEventListResponse> {
    return this._client.getAPIList('/udl/launchevent', OffsetPage<LaunchEventListResponse>, {
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
   * const response = await client.launchEvent.count({
   *   msgCreateDate: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: LaunchEventCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/launchevent/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * LaunchEvent as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.launchEvent.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       msgCreateDate: '2020-01-01T00:00:00.123Z',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: LaunchEventCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/launchevent/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single LaunchEvent record by its unique ID passed as
   * a path parameter.
   *
   * @example
   * ```ts
   * const launchEvent = await client.launchEvent.get('id');
   * ```
   */
  get(
    id: string,
    query: LaunchEventGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LaunchEventGetResponse> {
    return this._client.get(path`/udl/launchevent/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.launchEvent.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<LaunchEventQueryhelpResponse> {
    return this._client.get('/udl/launchevent/queryhelp', options);
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
   * const response = await client.launchEvent.tuple({
   *   columns: 'columns',
   *   msgCreateDate: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: LaunchEventTupleParams, options?: RequestOptions): APIPromise<LaunchEventTupleResponse> {
    return this._client.get('/udl/launchevent/tuple', { query, ...options });
  }

  /**
   * Service operation to take LaunchEvent entries as a POST body and ingest into the
   * database. This operation is intended to be used for automated feeds into UDL. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchEvent.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       msgCreateDate: '2020-01-01T00:00:00.123Z',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(
    params: LaunchEventUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-launchevent', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type LaunchEventListResponsesOffsetPage = OffsetPage<LaunchEventListResponse>;

/**
 * Information on known launch events.
 */
export interface LaunchEventListResponse {
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
   * Timestamp of the originating message in ISO8601 UTC format.
   */
  msgCreateDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The Basic Encyclopedia Number, if applicable.
   */
  beNumber?: string;

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
   * The declassification date of this data, in ISO 8601 UTC format.
   */
  declassificationDate?: string;

  /**
   * Declassification string of this data.
   */
  declassificationString?: string;

  /**
   * The sources or SCG references from which the classification of this data is
   * derived.
   */
  derivedFrom?: string;

  /**
   * Unique identifier of the target on-orbit object, if correlated.
   */
  idOnOrbit?: string;

  /**
   * The launch date, in ISO8601 UTC format.
   */
  launchDate?: string;

  /**
   * The Launch facility name.
   */
  launchFacilityName?: string;

  /**
   * The DISOB launch Failure Code, if applicable.
   */
  launchFailureCode?: string;

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
   * Optional target-id, if missing in UDL.
   */
  origObjectId?: string;

  /**
   * The OSuffix, if applicable.
   */
  oSuffix?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;
}

export type LaunchEventCountResponse = string;

/**
 * Information on known launch events.
 */
export interface LaunchEventGetResponse {
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
   * Timestamp of the originating message in ISO8601 UTC format.
   */
  msgCreateDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The Basic Encyclopedia Number, if applicable.
   */
  beNumber?: string;

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
   * The declassification date of this data, in ISO 8601 UTC format.
   */
  declassificationDate?: string;

  /**
   * Declassification string of this data.
   */
  declassificationString?: string;

  /**
   * The sources or SCG references from which the classification of this data is
   * derived.
   */
  derivedFrom?: string;

  /**
   * Unique identifier of the target on-orbit object, if correlated.
   */
  idOnOrbit?: string;

  /**
   * The launch date, in ISO8601 UTC format.
   */
  launchDate?: string;

  /**
   * The Launch facility name.
   */
  launchFacilityName?: string;

  /**
   * The DISOB launch Failure Code, if applicable.
   */
  launchFailureCode?: string;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: Shared.OnorbitFull;

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
   * Optional target-id, if missing in UDL.
   */
  origObjectId?: string;

  /**
   * The OSuffix, if applicable.
   */
  oSuffix?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;
}

export interface LaunchEventQueryhelpResponse {
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

export type LaunchEventTupleResponse = Array<LaunchEventTupleResponse.LaunchEventTupleResponseItem>;

export namespace LaunchEventTupleResponse {
  /**
   * Information on known launch events.
   */
  export interface LaunchEventTupleResponseItem {
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
     * Timestamp of the originating message in ISO8601 UTC format.
     */
    msgCreateDate: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The Basic Encyclopedia Number, if applicable.
     */
    beNumber?: string;

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
     * The declassification date of this data, in ISO 8601 UTC format.
     */
    declassificationDate?: string;

    /**
     * Declassification string of this data.
     */
    declassificationString?: string;

    /**
     * The sources or SCG references from which the classification of this data is
     * derived.
     */
    derivedFrom?: string;

    /**
     * Unique identifier of the target on-orbit object, if correlated.
     */
    idOnOrbit?: string;

    /**
     * The launch date, in ISO8601 UTC format.
     */
    launchDate?: string;

    /**
     * The Launch facility name.
     */
    launchFacilityName?: string;

    /**
     * The DISOB launch Failure Code, if applicable.
     */
    launchFailureCode?: string;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Shared.OnorbitFull;

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
     * Optional target-id, if missing in UDL.
     */
    origObjectId?: string;

    /**
     * The OSuffix, if applicable.
     */
    oSuffix?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;
  }
}

export interface LaunchEventCreateParams {
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
   * Timestamp of the originating message in ISO8601 UTC format.
   */
  msgCreateDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The Basic Encyclopedia Number, if applicable.
   */
  beNumber?: string;

  /**
   * The declassification date of this data, in ISO 8601 UTC format.
   */
  declassificationDate?: string;

  /**
   * Declassification string of this data.
   */
  declassificationString?: string;

  /**
   * The sources or SCG references from which the classification of this data is
   * derived.
   */
  derivedFrom?: string;

  /**
   * The launch date, in ISO8601 UTC format.
   */
  launchDate?: string;

  /**
   * The Launch facility name.
   */
  launchFacilityName?: string;

  /**
   * The DISOB launch Failure Code, if applicable.
   */
  launchFailureCode?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional target-id, if missing in UDL.
   */
  origObjectId?: string;

  /**
   * The OSuffix, if applicable.
   */
  oSuffix?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;
}

export interface LaunchEventListParams extends OffsetPageParams {
  /**
   * Timestamp of the originating message in ISO8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgCreateDate: string;
}

export interface LaunchEventCountParams {
  /**
   * Timestamp of the originating message in ISO8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgCreateDate: string;

  firstResult?: number;

  maxResults?: number;
}

export interface LaunchEventCreateBulkParams {
  body: Array<LaunchEventCreateBulkParams.Body>;
}

export namespace LaunchEventCreateBulkParams {
  /**
   * Information on known launch events.
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
     * Timestamp of the originating message in ISO8601 UTC format.
     */
    msgCreateDate: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The Basic Encyclopedia Number, if applicable.
     */
    beNumber?: string;

    /**
     * The declassification date of this data, in ISO 8601 UTC format.
     */
    declassificationDate?: string;

    /**
     * Declassification string of this data.
     */
    declassificationString?: string;

    /**
     * The sources or SCG references from which the classification of this data is
     * derived.
     */
    derivedFrom?: string;

    /**
     * The launch date, in ISO8601 UTC format.
     */
    launchDate?: string;

    /**
     * The Launch facility name.
     */
    launchFacilityName?: string;

    /**
     * The DISOB launch Failure Code, if applicable.
     */
    launchFailureCode?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional target-id, if missing in UDL.
     */
    origObjectId?: string;

    /**
     * The OSuffix, if applicable.
     */
    oSuffix?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;
  }
}

export interface LaunchEventGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface LaunchEventTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Timestamp of the originating message in ISO8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgCreateDate: string;

  firstResult?: number;

  maxResults?: number;
}

export interface LaunchEventUnvalidatedPublishParams {
  body: Array<LaunchEventUnvalidatedPublishParams.Body>;
}

export namespace LaunchEventUnvalidatedPublishParams {
  /**
   * Information on known launch events.
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
     * Timestamp of the originating message in ISO8601 UTC format.
     */
    msgCreateDate: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The Basic Encyclopedia Number, if applicable.
     */
    beNumber?: string;

    /**
     * The declassification date of this data, in ISO 8601 UTC format.
     */
    declassificationDate?: string;

    /**
     * Declassification string of this data.
     */
    declassificationString?: string;

    /**
     * The sources or SCG references from which the classification of this data is
     * derived.
     */
    derivedFrom?: string;

    /**
     * The launch date, in ISO8601 UTC format.
     */
    launchDate?: string;

    /**
     * The Launch facility name.
     */
    launchFacilityName?: string;

    /**
     * The DISOB launch Failure Code, if applicable.
     */
    launchFailureCode?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional target-id, if missing in UDL.
     */
    origObjectId?: string;

    /**
     * The OSuffix, if applicable.
     */
    oSuffix?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;
  }
}

LaunchEvent.History = History;

export declare namespace LaunchEvent {
  export {
    type LaunchEventListResponse as LaunchEventListResponse,
    type LaunchEventCountResponse as LaunchEventCountResponse,
    type LaunchEventGetResponse as LaunchEventGetResponse,
    type LaunchEventQueryhelpResponse as LaunchEventQueryhelpResponse,
    type LaunchEventTupleResponse as LaunchEventTupleResponse,
    type LaunchEventListResponsesOffsetPage as LaunchEventListResponsesOffsetPage,
    type LaunchEventCreateParams as LaunchEventCreateParams,
    type LaunchEventListParams as LaunchEventListParams,
    type LaunchEventCountParams as LaunchEventCountParams,
    type LaunchEventCreateBulkParams as LaunchEventCreateBulkParams,
    type LaunchEventGetParams as LaunchEventGetParams,
    type LaunchEventTupleParams as LaunchEventTupleParams,
    type LaunchEventUnvalidatedPublishParams as LaunchEventUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListResponsesOffsetPage as HistoryListResponsesOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
