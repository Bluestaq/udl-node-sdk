// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
   */
  update(params: V2UpdateParams, options?: RequestOptions): APIPromise<void> {
    const { path, ...body } = params;
    return this._client.patch('/scs/v2/update', {
      query: { path },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns a list of ScsEntity objects, each directly nested under the provided
   * path.
   */
  list(query: V2ListParams, options?: RequestOptions): PagePromise<ScsEntitiesOffsetPage, ScsEntity> {
    return this._client.getAPIList('/scs/v2/list', OffsetPage<ScsEntity>, { query, ...options });
  }

  /**
   * Operation to delete a folder or file. A specific role is required to perform
   * this service operation. Please contact the UDL team for assistance.
   */
  delete(params: V2DeleteParams, options?: RequestOptions): APIPromise<void> {
    const { path } = params;
    return this._client.delete('/scs/v2/delete', {
      query: { path },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Operation to copy a folder or file. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
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
   */
  fileUpload(params: V2FileUploadParams, options?: RequestOptions): APIPromise<void> {
    const { classificationMarking, path, body, description, overwrite, tags } = params;
    return this._client.post('/scs/v2/file', {
      query: { classificationMarking, path, description, overwrite, tags },
      body: body,
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
   */
  folderCreate(params: V2FolderCreateParams, options?: RequestOptions): APIPromise<void> {
    const { path, ...body } = params;
    return this._client.post('/scs/v2/folder', {
      query: { path },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Operation to move or rename a folder or file. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   */
  move(params: V2MoveParams, options?: RequestOptions): APIPromise<void> {
    const { fromPath, toPath } = params;
    return this._client.put('/scs/v2/move', {
      query: { fromPath, toPath },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ScsEntitiesOffsetPage = OffsetPage<ScsEntity>;

export interface Attachment {
  author?: string;

  content?: string;

  content_length?: number;

  content_type?: string;

  date?: string;

  keywords?: string;

  language?: string;

  title?: string;
}

/**
 * An SCS file or folder.
 */
export interface ScsEntity {
  id?: string;

  attachment?: Attachment;

  /**
   * Classification marking of the folder or file in IC/CAPCO portion-marked format.
   */
  classificationMarking?: string;

  createdAt?: string;

  createdBy?: string;

  data?: string;

  /**
   * Optional description for the file or folder.
   */
  description?: string;

  fileName?: string;

  filePath?: string;

  keywords?: string;

  parentPath?: string;

  pathType?: string;

  /**
   * For folders only. Comma separated list of user and group ids that should have
   * read access on this folder and the items nested in it.
   */
  readAcl?: string;

  size?: number;

  /**
   * Array of provider/source specific tags for this data, used for implementing data
   * owner conditional access controls to restrict access to the data.
   */
  tags?: Array<string>;

  updatedAt?: string;

  updatedBy?: string;

  /**
   * For folders only. Comma separated list of user and group ids that should have
   * write access on this folder and the items nested in it.
   */
  writeAcl?: string;
}

export interface V2UpdateParams {
  /**
   * Query param: The complete path for the object to be updated.
   */
  path: string;

  /**
   * Body param: Classification marking of the folder or file in IC/CAPCO
   * portion-marked format.
   */
  classificationMarking?: string;

  /**
   * Body param: Optional description for the file or folder.
   */
  description?: string;

  /**
   * Body param: For folders only. Comma separated list of user and group ids that
   * should have read access on this folder and the items nested in it.
   */
  readAcl?: string;

  /**
   * Body param: Array of provider/source specific tags for this data, used for
   * implementing data owner conditional access controls to restrict access to the
   * data.
   */
  tags?: Array<string>;

  /**
   * Body param: For folders only. Comma separated list of user and group ids that
   * should have write access on this folder and the items nested in it.
   */
  writeAcl?: string;
}

export interface V2ListParams extends OffsetPageParams {
  /**
   * The base path to list
   */
  path: string;
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
   * Body param:
   */
  body: string | ArrayBuffer | ArrayBufferView | Blob | DataView;

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
   * Body param: Classification marking of the folder or file in IC/CAPCO
   * portion-marked format.
   */
  classificationMarking?: string;

  /**
   * Body param: Optional description for the file or folder.
   */
  description?: string;

  /**
   * Body param: For folders only. Comma separated list of user and group ids that
   * should have read access on this folder and the items nested in it.
   */
  readAcl?: string;

  /**
   * Body param: Array of provider/source specific tags for this data, used for
   * implementing data owner conditional access controls to restrict access to the
   * data.
   */
  tags?: Array<string>;

  /**
   * Body param: For folders only. Comma separated list of user and group ids that
   * should have write access on this folder and the items nested in it.
   */
  writeAcl?: string;
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

export declare namespace V2 {
  export {
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
}
