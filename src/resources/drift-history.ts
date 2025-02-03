// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class DriftHistory extends APIResource {
  /**
   * Service operation to get a single DriftHistory record by its unique ID passed as
   * a path parameter. DriftHistory represents historical drift rates for GEO Onorbit
   * objects resulting from updates to OnorbitDetails driftRate values.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.DriftHistory> {
    return this._client.get(`/udl/drifthistory/${id}`, options);
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<DriftHistoryListResponse> {
    return this._client.get('/udl/drifthistory', options);
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/drifthistory/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/drifthistory/queryhelp', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
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
    query: DriftHistoryTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DriftHistoryTupleResponse> {
    return this._client.get('/udl/drifthistory/tuple', { query, ...options });
  }
}

export type DriftHistoryListResponse = Array<Shared.DrifthistoryAbridged>;

export type DriftHistoryCountResponse = string;

export type DriftHistoryTupleResponse = Array<Shared.DriftHistory>;

export interface DriftHistoryTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

export declare namespace DriftHistory {
  export {
    type DriftHistoryListResponse as DriftHistoryListResponse,
    type DriftHistoryCountResponse as DriftHistoryCountResponse,
    type DriftHistoryTupleResponse as DriftHistoryTupleResponse,
    type DriftHistoryTupleParams as DriftHistoryTupleParams,
  };
}
