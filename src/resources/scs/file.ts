// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { FileDataOffsetPage } from '../shared';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class File extends APIResource {
  /**
   * Returns a FileData object representing the file with the given ID that is
   * visible to the calling user.
   *
   * @example
   * ```ts
   * const fileData = await client.scs.file.retrieve({
   *   id: 'id',
   * });
   * ```
   */
  retrieve(query: FileRetrieveParams, options?: RequestOptions): APIPromise<Shared.FileData> {
    return this._client.get('/scs/file', { query, ...options });
  }

  /**
   * operation to update files metadata. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.scs.file.update({
   *   fileDataList: [
   *     {
   *       id: '/example/folder/example_file.txt',
   *       attributes: {
   *         classification: 'U',
   *         description: 'A new Example description',
   *         tags: null,
   *         metaInfo: 'A new Example metaInfo',
   *       },
   *     },
   *   ],
   * });
   * ```
   */
  update(body: FileUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch('/scs/file', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns a non-recursive list of FileData objects representing the files and
   * subdirectories in the passed-in path directory that are visible to the calling
   * user.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const fileData of client.scs.file.list({
   *   path: 'path',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(query: FileListParams, options?: RequestOptions): PagePromise<FileDataOffsetPage, Shared.FileData> {
    return this._client.getAPIList('/scs/list', OffsetPage<Shared.FileData>, { query, ...options });
  }
}

export interface FileRetrieveParams {
  /**
   * The file ID to view
   */
  id: string;

  firstResult?: number;

  maxResults?: number;
}

export interface FileUpdateParams {
  fileDataList?: Array<Shared.FileData>;
}

export interface FileListParams extends OffsetPageParams {
  /**
   * The base path to list
   */
  path: string;

  /**
   * Number of items per page
   */
  count?: number;

  /**
   * First result to return
   */
  offset?: number;
}

export declare namespace File {
  export {
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
  };
}

export { type FileDataOffsetPage };
