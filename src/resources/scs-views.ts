// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class ScsViews extends APIResource {
  /**
   * Return a single file to view in browser.
   *
   * @example
   * ```ts
   * const scsView = await client.scsViews.retrieve(
   *   '/Documentation/project.pdf',
   * );
   *
   * const content = await scsView.blob();
   * console.log(content);
   * ```
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
