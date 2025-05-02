// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { DriftHistoryAbridgedsOffsetPage } from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DriftHistory extends APIResource {
  /**
   * Service operation to get a single DriftHistory record by its unique ID passed as
   * a path parameter. DriftHistory represents historical drift rates for GEO Onorbit
   * objects resulting from updates to OnorbitDetails driftRate values.
   */
  retrieve(
    id: string,
    query: DriftHistoryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.DriftHistoryFull> {
    return this._client.get(path`/udl/drifthistory/${id}`, { query, ...options });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: DriftHistoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DriftHistoryAbridgedsOffsetPage, Shared.DriftHistoryAbridged> {
    return this._client.getAPIList('/udl/drifthistory', OffsetPage<Shared.DriftHistoryAbridged>, {
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
   */
  count(
    query: DriftHistoryCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/drifthistory/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/drifthistory/queryhelp', {
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
  tuple(query: DriftHistoryTupleParams, options?: RequestOptions): APIPromise<DriftHistoryTupleResponse> {
    return this._client.get('/udl/drifthistory/tuple', { query, ...options });
  }
}

export type DriftHistoryCountResponse = string;

export type DriftHistoryTupleResponse = Array<Shared.DriftHistoryFull>;

export interface DriftHistoryRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface DriftHistoryListParams extends OffsetPageParams {}

export interface DriftHistoryCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface DriftHistoryTupleParams {
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

export declare namespace DriftHistory {
  export {
    type DriftHistoryCountResponse as DriftHistoryCountResponse,
    type DriftHistoryTupleResponse as DriftHistoryTupleResponse,
    type DriftHistoryRetrieveParams as DriftHistoryRetrieveParams,
    type DriftHistoryListParams as DriftHistoryListParams,
    type DriftHistoryCountParams as DriftHistoryCountParams,
    type DriftHistoryTupleParams as DriftHistoryTupleParams,
  };
}

export { type DriftHistoryAbridgedsOffsetPage };
