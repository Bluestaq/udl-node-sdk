// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Paths extends APIResource {
  /**
   * Creates the path and uploads file that is passed. If folder exist it will only
   * create folders that are missing. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * const response = await client.scs.paths.createWithFile(
   *   fs.createReadStream('path/to/file'),
   *   {
   *     id: 'id',
   *     classificationMarking: 'classificationMarking',
   *   },
   * );
   * ```
   */
  createWithFile(
    fileContent: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.post('/scs/path', {
      body: fileContent,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/octet-stream' }, options?.headers]),
    });
  }
}

export type PathCreateWithFileResponse = string;

export declare namespace Paths {
  export { type PathCreateWithFileResponse as PathCreateWithFileResponse };
}
