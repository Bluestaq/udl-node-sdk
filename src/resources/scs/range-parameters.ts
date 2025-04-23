// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class RangeParameters extends APIResource {
  /**
   * Returns a set of File Metadata that can be used for search endpoint.
   */
  list(options?: RequestOptions): APIPromise<RangeParameterListResponse> {
    return this._client.get('/scs/listRangeParameters', options);
  }
}

export type RangeParameterListResponse = Array<string>;

export declare namespace RangeParameters {
  export { type RangeParameterListResponse as RangeParameterListResponse };
}
