// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { CollectResponseFullsOffsetPage } from '../shared';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Tuple extends APIResource {
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
  list(
    query: TupleListParams,
    options?: RequestOptions,
  ): PagePromise<CollectResponseFullsOffsetPage, Shared.CollectResponseFull> {
    return this._client.getAPIList('/udl/collectresponse/tuple', OffsetPage<Shared.CollectResponseFull>, {
      query,
      ...options,
    });
  }
}

export interface TupleListParams extends OffsetPageParams {
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
}

export declare namespace Tuple {
  export { type TupleListParams as TupleListParams };
}

export { type CollectResponseFullsOffsetPage };
