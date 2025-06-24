// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ClassificationMarkingsAPI from './classification-markings';
import { ClassificationMarkingListResponse, ClassificationMarkings } from './classification-markings';
import * as FileAPI from './file';
import { File, FileListParams, FileRetrieveParams, FileUpdateParams } from './file';
import * as FileMetadataAPI from './file-metadata';
import { FileMetadata, FileMetadataListResponse } from './file-metadata';
import * as FoldersAPI from './folders';
import {
  FolderCreateParams,
  FolderCreateResponse,
  FolderRetrieveParams,
  FolderUpdateParams,
  Folders,
} from './folders';
import * as GroupsAPI from './groups';
import { GroupListResponse, Groups } from './groups';
import * as PathsAPI from './paths';
import { PathCreateParams, PathCreateResponse, Paths } from './paths';
import * as RangeParametersAPI from './range-parameters';
import { RangeParameterListResponse, RangeParameters } from './range-parameters';
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
  V2UpdateParams,
} from './v2';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Scs extends APIResource {
  folders: FoldersAPI.Folders = new FoldersAPI.Folders(this._client);
  classificationMarkings: ClassificationMarkingsAPI.ClassificationMarkings =
    new ClassificationMarkingsAPI.ClassificationMarkings(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
  fileMetadata: FileMetadataAPI.FileMetadata = new FileMetadataAPI.FileMetadata(this._client);
  rangeParameters: RangeParametersAPI.RangeParameters = new RangeParametersAPI.RangeParameters(this._client);
  paths: PathsAPI.Paths = new PathsAPI.Paths(this._client);
  v2: V2API.V2 = new V2API.V2(this._client);
  file: FileAPI.File = new FileAPI.File(this._client);

  /**
   * Deletes the requested file or folder in the passed path directory that is
   * visible to the calling user. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.scs.delete({ id: 'id' });
   * ```
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
   * Returns a map of document types and counts in root folder.
   *
   * @example
   * ```ts
   * const response = await client.scs.aggregateDocType();
   * ```
   */
  aggregateDocType(options?: RequestOptions): APIPromise<ScAggregateDocTypeResponse> {
    return this._client.get('/scs/aggregateDocType', options);
  }

  /**
   * Returns a list of allowable file extensions for upload.
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
   * Returns a list of allowable file mime types for upload.
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
   * @example
   * ```ts
   * const response = await client.scs.copy({
   *   id: 'id',
   *   targetPath: 'targetPath',
   * });
   * ```
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
   *   body: [
   *     '/processPalantirXml/media/PT_MEDIA6831731772984708680',
   *     '/processPalantirXml/media/PT_MEDIA7297147303810886654',
   *   ],
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
   * @example
   * ```ts
   * const response = await client.scs.fileUpload({
   *   classificationMarking: 'classificationMarking',
   *   fileName: 'fileName',
   *   path: 'path',
   *   body: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  fileUpload(params: ScFileUploadParams, options?: RequestOptions): APIPromise<string> {
    const {
      classificationMarking,
      fileName,
      path,
      body,
      deleteAfter,
      description,
      overwrite,
      sendNotification,
      tags,
    } = params;
    return this._client.post('/scs/file', {
      query: {
        classificationMarking,
        fileName,
        path,
        deleteAfter,
        description,
        overwrite,
        sendNotification,
        tags,
      },
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/octet-stream' }, options?.headers]),
    });
  }

  /**
   * operation to move folders or files. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * const response = await client.scs.move({
   *   id: 'id',
   *   targetPath: 'targetPath',
   * });
   * ```
   */
  move(params: ScMoveParams, options?: RequestOptions): APIPromise<string> {
    const { id, targetPath } = params;
    return this._client.put('/scs/move', { query: { id, targetPath }, ...options });
  }

  /**
   * Operation to rename folders or files. A specific role is required to perform
   * this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.scs.rename({ id: 'id', newName: 'newName' });
   * ```
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
   * @example
   * ```ts
   * const fileData = await client.scs.search({
   *   path: 'path',
   *   metaDataCriteria: {
   *     CREATED_AT: ['< 2022-06-14T07:48:11.302Z'],
   *   },
   * });
   * ```
   */
  search(params: ScSearchParams, options?: RequestOptions): APIPromise<ScSearchResponse> {
    const { path, count, offset, ...body } = params;
    return this._client.post('/scs/search', { query: { path, count, offset }, body, ...options });
  }

  /**
   * Updates tags for given folder.
   *
   * @example
   * ```ts
   * await client.scs.updateTags({
   *   folder: 'folder',
   *   tags: 'tags',
   * });
   * ```
   */
  updateTags(params: ScUpdateTagsParams, options?: RequestOptions): APIPromise<void> {
    const { folder, tags } = params;
    return this._client.put('/scs/updateTagsForFilesInFolder', {
      query: { folder, tags },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ScAggregateDocTypeResponse = Array<string>;

export type ScAllowableFileExtensionsResponse = Array<string>;

export type ScAllowableFileMimesResponse = Array<string>;

export type ScCopyResponse = string;

export type ScFileUploadResponse = string;

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
   * Query param: Classification (ex. U//FOUO)
   */
  classificationMarking: string;

  /**
   * Query param: FileName (ex. dog.jpg)
   */
  fileName: string;

  /**
   * Query param: The base path to upload file (ex. images)
   */
  path: string;

  /**
   * Body param:
   */
  body: string | ArrayBuffer | ArrayBufferView | Blob | DataView;

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

export interface ScMoveParams {
  /**
   * The path of the item to copy
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

export interface ScUpdateTagsParams {
  /**
   * The base path to folder
   */
  folder: string;

  /**
   * The new tag
   */
  tags: string;
}

Scs.Folders = Folders;
Scs.ClassificationMarkings = ClassificationMarkings;
Scs.Groups = Groups;
Scs.FileMetadata = FileMetadata;
Scs.RangeParameters = RangeParameters;
Scs.Paths = Paths;
Scs.V2 = V2;
Scs.File = File;

export declare namespace Scs {
  export {
    type ScAggregateDocTypeResponse as ScAggregateDocTypeResponse,
    type ScAllowableFileExtensionsResponse as ScAllowableFileExtensionsResponse,
    type ScAllowableFileMimesResponse as ScAllowableFileMimesResponse,
    type ScCopyResponse as ScCopyResponse,
    type ScFileUploadResponse as ScFileUploadResponse,
    type ScMoveResponse as ScMoveResponse,
    type ScSearchResponse as ScSearchResponse,
    type ScDeleteParams as ScDeleteParams,
    type ScCopyParams as ScCopyParams,
    type ScDownloadParams as ScDownloadParams,
    type ScFileDownloadParams as ScFileDownloadParams,
    type ScFileUploadParams as ScFileUploadParams,
    type ScMoveParams as ScMoveParams,
    type ScRenameParams as ScRenameParams,
    type ScSearchParams as ScSearchParams,
    type ScUpdateTagsParams as ScUpdateTagsParams,
  };

  export {
    Folders as Folders,
    type FolderCreateResponse as FolderCreateResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderRetrieveParams as FolderRetrieveParams,
    type FolderUpdateParams as FolderUpdateParams,
  };

  export {
    ClassificationMarkings as ClassificationMarkings,
    type ClassificationMarkingListResponse as ClassificationMarkingListResponse,
  };

  export { Groups as Groups, type GroupListResponse as GroupListResponse };

  export { FileMetadata as FileMetadata, type FileMetadataListResponse as FileMetadataListResponse };

  export {
    RangeParameters as RangeParameters,
    type RangeParameterListResponse as RangeParameterListResponse,
  };

  export {
    Paths as Paths,
    type PathCreateResponse as PathCreateResponse,
    type PathCreateParams as PathCreateParams,
  };

  export {
    V2 as V2,
    type Attachment as Attachment,
    type ScsEntity as ScsEntity,
    type ScsEntitiesOffsetPage as ScsEntitiesOffsetPage,
    type V2UpdateParams as V2UpdateParams,
    type V2ListParams as V2ListParams,
    type V2DeleteParams as V2DeleteParams,
    type V2CopyParams as V2CopyParams,
    type V2FileUploadParams as V2FileUploadParams,
    type V2FolderCreateParams as V2FolderCreateParams,
    type V2MoveParams as V2MoveParams,
  };

  export {
    File as File,
    type FileRetrieveParams as FileRetrieveParams,
    type FileUpdateParams as FileUpdateParams,
    type FileListParams as FileListParams,
  };
}
