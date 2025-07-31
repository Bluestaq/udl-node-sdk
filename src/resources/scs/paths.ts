// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';

export class Paths extends APIResource {
  /**
   * Creates the path and uploads file that is passed. If folder exist it will only
   * create folders that are missing. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * const path = await client.scs.paths.create(
   *   fs.createReadStream('path/to/file'),
   *   {
   *     id: 'id',
   *     classificationMarking: 'classificationMarking',
   *   },
   * );
   * ```
   */
  create(
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    options?: RequestOptions,
  ): APIPromise<string> {
    const { id, classificationMarking, deleteAfter, description, overwrite, sendNotification, tags } = params;
    return this._client.post('/scs/path', {
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/octet-stream' }, options?.headers]),
    });
  }
}

export type PathCreateResponse = string;

export declare namespace Paths {
  export { type PathCreateResponse as PathCreateResponse };
}
