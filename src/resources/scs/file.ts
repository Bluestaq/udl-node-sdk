// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class File extends APIResource {
  /**
   * Returns a FileData object representing the file with the given ID that is
   * visible to the calling user.
   */
  retrieve(query: FileRetrieveParams, options?: RequestOptions): APIPromise<Shared.FileData> {
    return this._client.get('/scs/file', { query, ...options });
  }

  /**
   * operation to update files metadata. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
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
   */
  list(query: FileListParams, options?: RequestOptions): APIPromise<FileListResponse> {
    return this._client.get('/scs/list', { query, ...options });
  }
}

export type FileListResponse = Array<Shared.FileData>;

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

export interface FileListParams {
  /**
   * The base path to list
   */
  path: string;

  /**
   * Number of items per page
   */
  count?: number;

  firstResult?: number;

  maxResults?: number;

  /**
   * First result to return
   */
  offset?: number;
}

export declare namespace File {
  export {
    type FileListResponse as FileListResponse,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
  };
}
