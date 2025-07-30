// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as Shared from 'bluestaq@unified-data-library/resources/shared';
import { EvacFullsOffsetPage } from 'bluestaq@unified-data-library/resources/shared';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';

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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const evacFull of client.evac.tuple.list({
   *   columns: 'columns',
   *   reqTime: '2019-12-27T18:11:19.117Z',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(query: TupleListParams, options?: RequestOptions): PagePromise<EvacFullsOffsetPage, Shared.EvacFull> {
    return this._client.getAPIList('/udl/evac/tuple', OffsetPage<Shared.EvacFull>, { query, ...options });
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
   * The request time, in ISO 8601 UTC format. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reqTime: string;
}

export declare namespace Tuple {
  export { type TupleListParams as TupleListParams };
}

export { type EvacFullsOffsetPage };
