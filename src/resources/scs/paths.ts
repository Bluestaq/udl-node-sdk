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
    params: PathCreateWithFileParams,
    options?: RequestOptions,
  ): APIPromise<string> {
    const { id, classificationMarking, deleteAfter, description, overwrite, sendNotification, tags } = params;
    return this._client.post('/scs/path', {
      body: fileContent,
      query: { id, classificationMarking, deleteAfter, description, overwrite, sendNotification, tags },
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/octet-stream' }, options?.headers]),
    });
  }
}

export type PathCreateWithFileResponse = string;

export interface PathCreateWithFileParams {
  /**
   * Query param: The full path to create, including path and file name
   */
  id: string;

  /**
   * Query param: Classification (ex. U//FOUO)
   */
  classificationMarking: string;

  /**
   * Query param: Length of time after which to automatically delete the file.
   */
  deleteAfter?: string;

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
   * Query param: Whether or not to send a notification that this file was uploaded.
   */
  sendNotification?: boolean;

  /**
   * Query param: Tags
   */
  tags?: string;
}

export declare namespace Paths {
  export {
    type PathCreateWithFileResponse as PathCreateWithFileResponse,
    type PathCreateWithFileParams as PathCreateWithFileParams,
  };
}
