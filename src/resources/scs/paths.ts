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
   * const path = await client.scs.paths.create({
   *   id: 'id',
   *   classificationMarking: 'classificationMarking',
   *   body: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  create(params: PathCreateParams, options?: RequestOptions): APIPromise<string> {
    const { id, classificationMarking, body, description, overwrite, tags } = params;
    return this._client.post('/scs/path', {
      query: { id, classificationMarking, description, overwrite, tags },
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/octet-stream' }, options?.headers]),
    });
  }
}

export type PathCreateResponse = string;

export interface PathCreateParams {
  /**
   * Query param: The full path to create, including path and file name
   */
  id: string;

  /**
   * Query param: Classification (ex. U//FOUO)
   */
  classificationMarking: string;

  /**
   * Body param:
   */
  body: string | ArrayBuffer | ArrayBufferView | Blob | DataView;

  /**
   * Query param: Description
   */
  description?: string;

  /**
   * Query param: Whether or not to overwrite a file with the same name and path, if
   * one exists.
   */
  overwrite?: boolean;

  /**
   * Query param: Tags
   */
  tags?: string;
}

export declare namespace Paths {
  export { type PathCreateResponse as PathCreateResponse, type PathCreateParams as PathCreateParams };
}
