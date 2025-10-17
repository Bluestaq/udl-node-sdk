// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ScsAPI from './scs';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class V2 extends APIResource {
  /**
   * Update folders and files. For a folder, you may update description, writeAcl,
   * readAcl, classificationMarking, and tags. For a file, you may update
   * description, classificationMarking, and tags. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.scs.v2.update({
   *   path: 'path',
   *   classificationMarking: 'U',
   *   description: 'A description of the updated folder.',
   *   readAcl: 'user.id1,group.id1',
   *   tags: ['TAG1', 'TAG2'],
   *   writeAcl: 'user.id1,group.id1',
   * });
   * ```
   */
  update(params: V2UpdateParams, options?: RequestOptions): APIPromise<void> {
    const { path: path_, sendNotification, ...body } = params;
    return this._client.patch('/scs/v2/update', {
      query: { path: path_, sendNotification },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns a list of ScsEntity objects, each directly nested under the provided
   * path.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const scsEntity of client.scs.v2.list({
   *   path: 'path',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(query: V2ListParams, options?: RequestOptions): PagePromise<ScsEntitiesOffsetPage, ScsEntity> {
    return this._client.getAPIList('/scs/v2/list', OffsetPage<ScsEntity>, { query, ...options });
  }

  /**
   * Operation to delete a folder or file. A specific role is required to perform
   * this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.scs.v2.delete({ path: 'path' });
   * ```
   */
  delete(params: V2DeleteParams, options?: RequestOptions): APIPromise<void> {
    const { path: path_ } = params;
    return this._client.delete('/scs/v2/delete', {
      query: { path: path_ },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Operation to copy a folder or file. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.scs.v2.copy({
   *   fromPath: 'fromPath',
   *   toPath: 'toPath',
   * });
   * ```
   */
  copy(params: V2CopyParams, options?: RequestOptions): APIPromise<void> {
    const { fromPath, toPath } = params;
    return this._client.post('/scs/v2/copy', {
      query: { fromPath, toPath },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Operation to upload a file. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.scs.v2.fileUpload(
   *   fs.createReadStream('path/to/file'),
   *   {
   *     classificationMarking: 'classificationMarking',
   *     path: 'path',
   *   },
   * );
   * ```
   */
  fileUpload(
    fileContent: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    params: V2FileUploadParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const {
      classificationMarking,
      path: path_,
      deleteAfter,
      description,
      overwrite,
      sendNotification,
      tags,
    } = params;
    return this._client.post('/scs/v2/file', {
      body: fileContent,
      query: {
        classificationMarking,
        path: path_,
        deleteAfter,
        description,
        overwrite,
        sendNotification,
        tags,
      },
      ...options,
      headers: buildHeaders([
        { 'Content-Type': 'application/octet-stream', Accept: '*/*' },
        options?.headers,
      ]),
    });
  }

  /**
   * Creates all folders in provided path that don't exist. Can be used to create a
   * single folder or a new folder structure. Provided classificationMarking,
   * description, writeAcl, readAcl, and tags are applied to the deepest folder in
   * the provided path. If parent folders are created by this request, each parent
   * folder will be created with the same classificationMarking and tags. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   *
   * @example
   * ```ts
   * await client.scs.v2.folderCreate({
   *   path: 'path',
   *   classificationMarking: 'U',
   *   description: 'My first folder',
   *   readAcl: 'user.id1,group.id1',
   *   tags: ['TAG1', 'TAG2'],
   *   writeAcl: 'user.id1,group.id1',
   * });
   * ```
   */
  folderCreate(params: V2FolderCreateParams, options?: RequestOptions): APIPromise<void> {
    const { path: path_, sendNotification, ...body } = params;
    return this._client.post('/scs/v2/folder', {
      query: { path: path_, sendNotification },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Operation to move or rename a folder or file. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.scs.v2.move({
   *   fromPath: 'fromPath',
   *   toPath: 'toPath',
   * });
   * ```
   */
  move(params: V2MoveParams, options?: RequestOptions): APIPromise<void> {
    const { fromPath, toPath } = params;
    return this._client.put('/scs/v2/move', {
      query: { fromPath, toPath },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Operation to search for files in the Secure Content Store.
   *
   * @example
   * ```ts
   * const scsEntities = await client.scs.v2.search({
   *   query: {
   *     field: 'attachment.content',
   *     operator: 'EXACT_MATCH',
   *     value: 'This is a very cool file.',
   *   },
   * });
   * ```
   */
  search(params: V2SearchParams, options?: RequestOptions): APIPromise<V2SearchResponse> {
    const { order, searchAfter, size, sort, ...body } = params;
    return this._client.post('/scs/v2/search', {
      query: { order, searchAfter, size, sort },
      body,
      ...options,
    });
  }
}

export type ScsEntitiesOffsetPage = OffsetPage<ScsEntity>;

export interface Attachment {
  /**
   * The creator of this document. Can be a person or a software entity.
   */
  author?: string;

  /**
   * The length of the document, in bytes.
   */
  content_length?: number;

  /**
   * The document's MIME-type (if applicable).
   */
  content_type?: string;

  /**
   * The time at which this attachment was created, represented in UTC ISO format.
   */
  date?: string;

  /**
   * Any keywords associated with this document. Only applicable to files whose
   * contents are indexed (e.g. text files, PDFs).
   */
  keywords?: string;

  /**
   * The human language of the document, if discernible.
   */
  language?: string;

  /**
   * The title of the document.
   */
  title?: string;
}

/**
 * An SCS file or folder.
 */
export interface ScsEntity {
  /**
   * Unique identifier for document.
   */
  id?: string;

  /**
   * Additional metadata associated with this document.
   */
  attachment?: Attachment;

  /**
   * Classification marking of the folder or file in IC/CAPCO portion-marked format.
   */
  classificationMarking?: string;

  /**
   * The time at which this document was created, represented in UTC ISO format.
   */
  createdAt?: string;

  /**
   * The creator of this document. Can be a person or a software entity.
   */
  createdBy?: string;

  /**
   * Time at which this document should be automatically deleted. Represented in
   * milliseconds since Unix epoch.
   */
  deleteOn?: number;

  /**
   * Optional description for the file or folder.
   */
  description?: string;

  /**
   * The name of this document. Applicable to files and folders.
   */
  filename?: string;

  /**
   * The absolute path to this document.
   */
  filePath?: string;

  /**
   * Optional. Any keywords associated with this document. Only applicable to files
   * whose contents are indexed (e.g. text files, PDFs).
   */
  keywords?: string;

  /**
   * The parent folder of this document. If this document is a root-level folder then
   * the parent path is "/".
   */
  parentPath?: string;

  /**
   * The type of this document.
   */
  pathType?: 'file' | 'folder';

  /**
   * For folders only. Comma separated list of user and group ids that should have
   * read access on this folder and the items nested in it.
   */
  readAcl?: string;

  /**
   * Size of this document in bytes.
   */
  size?: number;

  /**
   * Array of provider/source specific tags for this data, used for implementing data
   * owner conditional access controls to restrict access to the data.
   */
  tags?: Array<string>;

  /**
   * The time at which this document was most recently updated, represented in UTC
   * ISO format.
   */
  updatedAt?: string;

  /**
   * The person or software entity who updated this document most recently.
   */
  updatedBy?: string;

  /**
   * For folders only. Comma separated list of user and group ids that should have
   * write access on this folder and the items nested in it.
   */
  writeAcl?: string;
}

export type V2SearchResponse = Array<ScsEntity>;

export interface V2UpdateParams {
  /**
   * Query param: The complete path for the object to be updated.
   */
  path: string;

  /**
   * Query param: Whether or not to send a notification that the target file/folder
   * was updated.
   */
  sendNotification?: boolean;

  /**
   * Body param: Unique identifier for document.
   */
  id?: string;

  /**
   * Body param: Additional metadata associated with this document.
   */
  attachment?: V2UpdateParams.Attachment;

  /**
   * Body param: Classification marking of the folder or file in IC/CAPCO
   * portion-marked format.
   */
  classificationMarking?: string;

  /**
   * Body param: The time at which this document was created, represented in UTC ISO
   * format.
   */
  createdAt?: string;

  /**
   * Body param: The creator of this document. Can be a person or a software entity.
   */
  createdBy?: string;

  /**
   * Body param: Time at which this document should be automatically deleted.
   * Represented in milliseconds since Unix epoch.
   */
  deleteOn?: number;

  /**
   * Body param: Optional description for the file or folder.
   */
  description?: string;

  /**
   * Body param: The name of this document. Applicable to files and folders.
   */
  filename?: string;

  /**
   * Body param: The absolute path to this document.
   */
  filePath?: string;

  /**
   * Body param: Optional. Any keywords associated with this document. Only
   * applicable to files whose contents are indexed (e.g. text files, PDFs).
   */
  keywords?: string;

  /**
   * Body param: The parent folder of this document. If this document is a root-level
   * folder then the parent path is "/".
   */
  parentPath?: string;

  /**
   * Body param: The type of this document.
   */
  pathType?: 'file' | 'folder';

  /**
   * Body param: For folders only. Comma separated list of user and group ids that
   * should have read access on this folder and the items nested in it.
   */
  readAcl?: string;

  /**
   * Body param: Size of this document in bytes.
   */
  size?: number;

  /**
   * Body param: Array of provider/source specific tags for this data, used for
   * implementing data owner conditional access controls to restrict access to the
   * data.
   */
  tags?: Array<string>;

  /**
   * Body param: The time at which this document was most recently updated,
   * represented in UTC ISO format.
   */
  updatedAt?: string;

  /**
   * Body param: The person or software entity who updated this document most
   * recently.
   */
  updatedBy?: string;

  /**
   * Body param: For folders only. Comma separated list of user and group ids that
   * should have write access on this folder and the items nested in it.
   */
  writeAcl?: string;
}

export namespace V2UpdateParams {
  /**
   * Additional metadata associated with this document.
   */
  export interface Attachment {
    /**
     * The creator of this document. Can be a person or a software entity.
     */
    author?: string;

    /**
     * The length of the document, in bytes.
     */
    content_length?: number;

    /**
     * The document's MIME-type (if applicable).
     */
    content_type?: string;

    /**
     * The time at which this attachment was created, represented in UTC ISO format.
     */
    date?: string;

    /**
     * Any keywords associated with this document. Only applicable to files whose
     * contents are indexed (e.g. text files, PDFs).
     */
    keywords?: string;

    /**
     * The human language of the document, if discernible.
     */
    language?: string;

    /**
     * The title of the document.
     */
    title?: string;
  }
}

export interface V2ListParams extends OffsetPageParams {
  /**
   * The base path to list.
   */
  path: string;

  /**
   * The order in which entries should be sorted.
   */
  order?: string;

  /**
   * The starting point for pagination results, usually set to the value of the
   * SEARCH_AFTER header returned in the previous request.
   */
  searchAfter?: string;

  /**
   * The number of results to retrieve.
   */
  size?: number;

  /**
   * The field on which to sort entries.
   */
  sort?: string;
}

export interface V2DeleteParams {
  /**
   * The complete path for the object to be deleted. Must start with '/'.
   */
  path: string;
}

export interface V2CopyParams {
  /**
   * The path of the file or folder to copy. Must start with '/'.
   */
  fromPath: string;

  /**
   * The destination path to copy to. Must start with '/'.
   */
  toPath: string;
}

export interface V2FileUploadParams {
  /**
   * Query param: Classification marking of uploaded document. If folders are
   * created, they will also have this classification marking.
   */
  classificationMarking: string;

  /**
   * Query param: The complete path for the upload including filename. Will attempt
   * to create folders in path if necessary. Must start with '/'.
   */
  path: string;

  /**
   * Query param: Length of time after which to automatically delete the file.
   */
  deleteAfter?: string;

  /**
   * Query param: Optional description of uploaded document.
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
   * Query param: Optional array of provider/source specific tags for this data, used
   * for implementing data owner conditional access controls to restrict access to
   * the data.
   */
  tags?: string;
}

export interface V2FolderCreateParams {
  /**
   * Query param: Path to create. Will attempt to create all folders in the path that
   * do not exist. Must start and end with '/'.
   */
  path: string;

  /**
   * Query param: Whether or not to send a notification that this folder was created.
   */
  sendNotification?: boolean;

  /**
   * Body param: Unique identifier for document.
   */
  id?: string;

  /**
   * Body param: Additional metadata associated with this document.
   */
  attachment?: V2FolderCreateParams.Attachment;

  /**
   * Body param: Classification marking of the folder or file in IC/CAPCO
   * portion-marked format.
   */
  classificationMarking?: string;

  /**
   * Body param: The time at which this document was created, represented in UTC ISO
   * format.
   */
  createdAt?: string;

  /**
   * Body param: The creator of this document. Can be a person or a software entity.
   */
  createdBy?: string;

  /**
   * Body param: Time at which this document should be automatically deleted.
   * Represented in milliseconds since Unix epoch.
   */
  deleteOn?: number;

  /**
   * Body param: Optional description for the file or folder.
   */
  description?: string;

  /**
   * Body param: The name of this document. Applicable to files and folders.
   */
  filename?: string;

  /**
   * Body param: The absolute path to this document.
   */
  filePath?: string;

  /**
   * Body param: Optional. Any keywords associated with this document. Only
   * applicable to files whose contents are indexed (e.g. text files, PDFs).
   */
  keywords?: string;

  /**
   * Body param: The parent folder of this document. If this document is a root-level
   * folder then the parent path is "/".
   */
  parentPath?: string;

  /**
   * Body param: The type of this document.
   */
  pathType?: 'file' | 'folder';

  /**
   * Body param: For folders only. Comma separated list of user and group ids that
   * should have read access on this folder and the items nested in it.
   */
  readAcl?: string;

  /**
   * Body param: Size of this document in bytes.
   */
  size?: number;

  /**
   * Body param: Array of provider/source specific tags for this data, used for
   * implementing data owner conditional access controls to restrict access to the
   * data.
   */
  tags?: Array<string>;

  /**
   * Body param: The time at which this document was most recently updated,
   * represented in UTC ISO format.
   */
  updatedAt?: string;

  /**
   * Body param: The person or software entity who updated this document most
   * recently.
   */
  updatedBy?: string;

  /**
   * Body param: For folders only. Comma separated list of user and group ids that
   * should have write access on this folder and the items nested in it.
   */
  writeAcl?: string;
}

export namespace V2FolderCreateParams {
  /**
   * Additional metadata associated with this document.
   */
  export interface Attachment {
    /**
     * The creator of this document. Can be a person or a software entity.
     */
    author?: string;

    /**
     * The length of the document, in bytes.
     */
    content_length?: number;

    /**
     * The document's MIME-type (if applicable).
     */
    content_type?: string;

    /**
     * The time at which this attachment was created, represented in UTC ISO format.
     */
    date?: string;

    /**
     * Any keywords associated with this document. Only applicable to files whose
     * contents are indexed (e.g. text files, PDFs).
     */
    keywords?: string;

    /**
     * The human language of the document, if discernible.
     */
    language?: string;

    /**
     * The title of the document.
     */
    title?: string;
  }
}

export interface V2MoveParams {
  /**
   * The path of the file or folder to move or rename. Must start with '/'.
   */
  fromPath: string;

  /**
   * The destination path of the file or folder after moving or renaming. Must start
   * with '/'.
   */
  toPath: string;
}

export interface V2SearchParams {
  /**
   * Query param: The order in which entries should be sorted.
   */
  order?: string;

  /**
   * Query param: The starting point for pagination results, usually set to the value
   * of the SEARCH_AFTER header returned in the previous request.
   */
  searchAfter?: string;

  /**
   * Query param: The number of results to retrieve.
   */
  size?: number;

  /**
   * Query param: The field on which to sort entries.
   */
  sort?: string;

  /**
   * Body param: A search criterion, which can be a simple field comparison or a
   * logical combination of other criteria.
   */
  query?: ScsAPI.SearchCriterion;
}

export declare namespace V2 {
  export {
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
