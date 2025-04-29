// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ScsViews extends APIResource {
  /**
   * Return a single file to view in browser.
   */
  retrieve(
    id: string,
    query: ScsViewRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/scs/view/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface ScsViewRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace ScsViews {
  export { type ScsViewRetrieveParams as ScsViewRetrieveParams };
}
