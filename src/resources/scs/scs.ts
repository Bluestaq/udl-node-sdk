// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as FileAPI from './file';
import { File, FileListParams, FileRetrieveParams, FileUpdateParams } from './file';
import * as FoldersAPI from './folders';
import {
  FolderCreateParams,
  FolderCreateResponse,
  FolderRetrieveParams,
  FolderUpdateParams,
  Folders,
} from './folders';
import * as PathsAPI from './paths';
import { PathCreateWithFileParams, PathCreateWithFileResponse, Paths } from './paths';
import * as V2API from './v2';
import {
  Attachment,
  ScsEntitiesOffsetPage,
  ScsEntity,
  V2,
  V2CopyParams,
  V2DeleteParams,
  V2FileUploadParams,
  V2FolderCreateParams,
  V2ListParams,
  V2MoveParams,
  V2SearchParams,
  V2SearchResponse,
  V2UpdateParams,
} from './v2';
import * as ViewAPI from './view';
import { View, ViewGetParams } from './view';
import * as NotificationsAPI from './notifications/notifications';
import {
  NotificationListParams,
  NotificationListResponse,
  NotificationListResponsesOffsetPage,
  Notifications,
} from './notifications/notifications';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Scs extends APIResource {
  notifications: NotificationsAPI.Notifications = new NotificationsAPI.Notifications(this._client);
  file: FileAPI.File = new FileAPI.File(this._client);
  folders: FoldersAPI.Folders = new FoldersAPI.Folders(this._client);
  paths: PathsAPI.Paths = new PathsAPI.Paths(this._client);
  view: ViewAPI.View = new ViewAPI.View(this._client);
  v2: V2API.V2 = new V2API.V2(this._client);

  /**
   * Deletes the requested file or folder in the passed path directory that is
   * visible to the calling user. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @deprecated
   */
  delete(params: ScDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { id } = params;
    return this._client.delete('/scs/delete', {
      query: { id },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns a list of the allowed filename extensions.
   *
   * @example
   * ```ts
   * const response = await client.scs.allowableFileExtensions();
   * ```
   */
  allowableFileExtensions(options?: RequestOptions): APIPromise<ScAllowableFileExtensionsResponse> {
    return this._client.get('/scs/allowableFileExtensions', options);
  }

  /**
   * Returns a list of the allowed file upload mime types.
   *
   * @example
   * ```ts
   * const response = await client.scs.allowableFileMimes();
   * ```
   */
  allowableFileMimes(options?: RequestOptions): APIPromise<ScAllowableFileMimesResponse> {
    return this._client.get('/scs/allowableFileMimes', options);
  }

  /**
   * operation to copy folders or files. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @deprecated
   */
  copy(params: ScCopyParams, options?: RequestOptions): APIPromise<string> {
    const { id, targetPath } = params;
    return this._client.post('/scs/copy', { query: { id, targetPath }, ...options });
  }

  /**
   * Downloads a zip of one or more files and/or folders.
   *
   * @example
   * ```ts
   * const response = await client.scs.download({
   *   body: ['/MyFolderToDownload/'],
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(params: ScDownloadParams, options?: RequestOptions): APIPromise<Response> {
    const { body } = params;
    return this._client.post('/scs/download', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Download a single file from SCS.
   *
   * @example
   * ```ts
   * const response = await client.scs.fileDownload({
   *   id: 'id',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  fileDownload(query: ScFileDownloadParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.get('/scs/download', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Operation to upload a file. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @deprecated
   */
  fileUpload(
    fileContent: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    params: ScFileUploadParams,
    options?: RequestOptions,
  ): APIPromise<string> {
    const {
      classificationMarking,
      fileName,
      path: path_,
      deleteAfter,
      description,
      overwrite,
      sendNotification,
      tags,
    } = params;
    return this._client.post('/scs/file', {
      body: fileContent,
      query: {
        classificationMarking,
        fileName,
        path: path_,
        deleteAfter,
        description,
        overwrite,
        sendNotification,
        tags,
      },
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/octet-stream' }, options?.headers]),
    });
  }

  /**
   * Returns true if a user has write access to the specified folder.
   *
   * @example
   * ```ts
   * const response = await client.scs.hasWriteAccess({
   *   path: 'path',
   * });
   * ```
   */
  hasWriteAccess(
    query: ScHasWriteAccessParams,
    options?: RequestOptions,
  ): APIPromise<ScHasWriteAccessResponse> {
    return this._client.get('/scs/userHasWriteAccess', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * operation to move folders or files. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @deprecated
   */
  move(params: ScMoveParams, options?: RequestOptions): APIPromise<string> {
    const { id, targetPath } = params;
    return this._client.put('/scs/move', { query: { id, targetPath }, ...options });
  }

  /**
   * Operation to rename folders or files. A specific role is required to perform
   * this service operation. Please contact the UDL team for assistance.
   *
   * @deprecated
   */
  rename(params: ScRenameParams, options?: RequestOptions): APIPromise<void> {
    const { id, newName } = params;
    return this._client.put('/scs/rename', {
      query: { id, newName },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Search for files by metadata and/or text in file content.
   *
   * @deprecated
   */
  search(params: ScSearchParams, options?: RequestOptions): APIPromise<ScSearchResponse> {
    const { path: path_, count, offset, ...body } = params;
    return this._client.post('/scs/search', { query: { path: path_, count, offset }, body, ...options });
  }
}

/**
 * A search criterion, which can be a simple field comparison or a logical
 * combination of other criteria.
 */
export type SearchCriterion = SearchCriterion.ScsSearchFieldCriterion | SearchLogicalCriterion;

export namespace SearchCriterion {
  /**
   * A search on a specific field with a given value and operator.
   */
  export interface ScsSearchFieldCriterion {
    /**
     * The field to search on (e.g., attachment.content, createdBy).
     */
    field?: string;

    /**
     * Supported search operators
     */
    operator?: 'EXACT_MATCH' | 'WILDCARD' | 'FUZZY' | 'GTE' | 'LTE' | 'GT' | 'LT';

    /**
     * The value to compare against (e.g., The Great Gatsby)
     */
    value?: string;
  }
}

/**
 * Combines multiple search criteria with a logical operator (AND, OR, NOT).
 */
export interface SearchLogicalCriterion {
  /**
   * List of search criteria to combine
   */
  criteria?: Array<SearchCriterion>;

  /**
   * Supported search operators
   */
  operator?: 'AND' | 'OR' | 'NOT';
}

export type ScAllowableFileExtensionsResponse = Array<string>;

export type ScAllowableFileMimesResponse = Array<string>;

export type ScCopyResponse = string;

export type ScFileUploadResponse = string;

export type ScHasWriteAccessResponse = boolean;

export type ScMoveResponse = string;

export type ScSearchResponse = Array<Shared.FileData>;

export interface ScDeleteParams {
  /**
   * The id of the item to delete
   */
  id: string;
}

export interface ScCopyParams {
  /**
   * The path of the item to copy
   */
  id: string;

  /**
   * The path to copy to
   */
  targetPath: string;
}

export interface ScDownloadParams {
  body: Array<string>;
}

export interface ScFileDownloadParams {
  /**
   * The complete path and filename of the file to download.
   */
  id: string;

  firstResult?: number;

  maxResults?: number;
}

export interface ScFileUploadParams {
  /**
   * Query param: Classification marking of the file being uploaded.
   */
  classificationMarking: string;

  /**
   * Query param: Name of the file to upload.
   */
  fileName: string;

  /**
   * Query param: The base path to upload file
   */
  path: string;

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

export interface ScHasWriteAccessParams {
  /**
   * Folder path for which to check user write access.
   */
  path: string;

  firstResult?: number;

  maxResults?: number;
}

export interface ScMoveParams {
  /**
   * The path of the item to move
   */
  id: string;

  /**
   * The path to copy to
   */
  targetPath: string;
}

export interface ScRenameParams {
  /**
   * The path of the item to rename.
   */
  id: string;

  /**
   * The new name for the file or folder. Do not include the path.
   */
  newName: string;
}

export interface ScSearchParams {
  /**
   * Query param: The path to search from
   */
  path: string;

  /**
   * Query param: Number of items per page
   */
  count?: number;

  /**
   * Query param: First result to return
   */
  offset?: number;

  /**
   * Body param:
   */
  contentCriteria?: string;

  /**
   * Body param:
   */
  metaDataCriteria?: { [key: string]: Array<string> };

  /**
   * Body param:
   */
  nonRangeCriteria?: { [key: string]: Array<string> };

  /**
   * Body param:
   */
  rangeCriteria?: { [key: string]: Array<string> };

  /**
   * Body param:
   */
  searchAfter?: string;
}

Scs.Notifications = Notifications;
Scs.File = File;
Scs.Folders = Folders;
Scs.Paths = Paths;
Scs.View = View;
Scs.V2 = V2;

export declare namespace Scs {
  export {
    type SearchCriterion as SearchCriterion,
    type SearchLogicalCriterion as SearchLogicalCriterion,
    type ScAllowableFileExtensionsResponse as ScAllowableFileExtensionsResponse,
    type ScAllowableFileMimesResponse as ScAllowableFileMimesResponse,
    type ScCopyResponse as ScCopyResponse,
    type ScFileUploadResponse as ScFileUploadResponse,
    type ScHasWriteAccessResponse as ScHasWriteAccessResponse,
    type ScMoveResponse as ScMoveResponse,
    type ScSearchResponse as ScSearchResponse,
    type ScDeleteParams as ScDeleteParams,
    type ScCopyParams as ScCopyParams,
    type ScDownloadParams as ScDownloadParams,
    type ScFileDownloadParams as ScFileDownloadParams,
    type ScFileUploadParams as ScFileUploadParams,
    type ScHasWriteAccessParams as ScHasWriteAccessParams,
    type ScMoveParams as ScMoveParams,
    type ScRenameParams as ScRenameParams,
    type ScSearchParams as ScSearchParams,
  };

  export {
    Notifications as Notifications,
    type NotificationListResponse as NotificationListResponse,
    type NotificationListResponsesOffsetPage as NotificationListResponsesOffsetPage,
    type NotificationListParams as NotificationListParams,
  };

  export {
    File as File,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
  };

  export {
    Folders as Folders,
    type FolderCreateResponse as FolderCreateResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderRetrieveParams as FolderRetrieveParams,
    type FolderUpdateParams as FolderUpdateParams,
  };

  export {
    Paths as Paths,
    type PathCreateWithFileResponse as PathCreateWithFileResponse,
    type PathCreateWithFileParams as PathCreateWithFileParams,
  };

  export { View as View, type ViewGetParams as ViewGetParams };

  export {
    V2 as V2,
    type Attachment as Attachment,
    type ScsEntity as ScsEntity,
    type V2SearchResponse as V2SearchResponse,
    type ScsEntitiesOffsetPage as ScsEntitiesOffsetPage,
    type V2UpdateParams as V2UpdateParams,
    type V2ListParams as V2ListParams,
    type V2DeleteParams as V2DeleteParams,
    type V2CopyParams as V2CopyParams,
    type V2FileUploadParams as V2FileUploadParams,
    type V2FolderCreateParams as V2FolderCreateParams,
    type V2MoveParams as V2MoveParams,
    type V2SearchParams as V2SearchParams,
  };
}
