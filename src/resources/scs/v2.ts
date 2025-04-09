// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { type BlobLike } from '../../uploads';

export class V2 extends APIResource {
  /**
   * Update folders and files. For a folder, you may update description, writeAcl,
   * readAcl, classificationMarking, and tags. For a file, you may update
   * description, classificationMarking, and tags. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   */
  update(params: V2UpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path, ...body } = params;
    return this._client.patch('/scs/v2/update', {
      query: { path },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a list of ScsEntity objects, each directly nested under the provided
   * path.
   */
  list(query: V2ListParams, options?: Core.RequestOptions): Core.APIPromise<V2ListResponse> {
    return this._client.get('/scs/v2/list', { query, ...options });
  }

  /**
   * Operation to delete a folder or file. A specific role is required to perform
   * this service operation. Please contact the UDL team for assistance.
   */
  delete(params: V2DeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path } = params;
    return this._client.delete('/scs/v2/delete', {
      query: { path },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Operation to copy a folder or file. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   */
  copy(params: V2CopyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { fromPath, toPath } = params;
    return this._client.post('/scs/v2/copy', {
      query: { fromPath, toPath },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Operation to upload a file. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  fileUpload(params: V2FileUploadParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { classificationMarking, path, body, description, tags } = params;
    return this._client.post('/scs/v2/file', {
      query: { classificationMarking, path, description, tags },
      body: body,
      ...options,
      headers: { 'Content-Type': 'application/octet-stream', Accept: '*/*', ...options?.headers },
      __binaryRequest: true,
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
  folderCreate(params: V2FolderCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path, ...body } = params;
    return this._client.post('/scs/v2/folder', {
      query: { path },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Operation to move or rename a folder or file. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   */
  move(params: V2MoveParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { fromPath, toPath } = params;
    return this._client.put('/scs/v2/move', {
      query: { fromPath, toPath },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

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

export type V2ListResponse = Array<ScsEntity>;

export interface V2UpdateParams {
  /**
   * Query param: The complete path for the object to be updated.
   */
  path: string;

  /**
   * Body param:
   */
  id?: string;

  /**
   * Body param:
   */
  attachment?: Attachment;

  /**
   * Body param: Classification marking of the folder or file in IC/CAPCO
   * portion-marked format.
   */
  classificationMarking?: string;

  /**
   * Body param:
   */
  createdAt?: string;

  /**
   * Body param:
   */
  createdBy?: string;

  /**
   * Body param:
   */
  data?: string;

  /**
   * Body param: Optional description for the file or folder.
   */
  description?: string;

  /**
   * Body param:
   */
  fileName?: string;

  /**
   * Body param:
   */
  filePath?: string;

  /**
   * Body param:
   */
  keywords?: string;

  /**
   * Body param:
   */
  parentPath?: string;

  /**
   * Body param:
   */
  pathType?: string;

  /**
   * Body param: For folders only. Comma separated list of user and group ids that
   * should have read access on this folder and the items nested in it.
   */
  readAcl?: string;

  /**
   * Body param:
   */
  size?: number;

  /**
   * Body param: Array of provider/source specific tags for this data, used for
   * implementing data owner conditional access controls to restrict access to the
   * data.
   */
  tags?: Array<string>;

  /**
   * Body param:
   */
  updatedAt?: string;

  /**
   * Body param:
   */
  updatedBy?: string;

  /**
   * Body param: For folders only. Comma separated list of user and group ids that
   * should have write access on this folder and the items nested in it.
   */
  writeAcl?: string;
}

export interface V2ListParams {
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
  body: string | ArrayBufferView | ArrayBuffer | BlobLike;

  /**
   * Query param: Optional description of uploaded document.
   */
  description?: string;

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
   * Body param:
   */
  id?: string;

  /**
   * Body param:
   */
  attachment?: Attachment;

  /**
   * Body param: Classification marking of the folder or file in IC/CAPCO
   * portion-marked format.
   */
  classificationMarking?: string;

  /**
   * Body param:
   */
  createdAt?: string;

  /**
   * Body param:
   */
  createdBy?: string;

  /**
   * Body param:
   */
  data?: string;

  /**
   * Body param: Optional description for the file or folder.
   */
  description?: string;

  /**
   * Body param:
   */
  fileName?: string;

  /**
   * Body param:
   */
  filePath?: string;

  /**
   * Body param:
   */
  keywords?: string;

  /**
   * Body param:
   */
  parentPath?: string;

  /**
   * Body param:
   */
  pathType?: string;

  /**
   * Body param: For folders only. Comma separated list of user and group ids that
   * should have read access on this folder and the items nested in it.
   */
  readAcl?: string;

  /**
   * Body param:
   */
  size?: number;

  /**
   * Body param: Array of provider/source specific tags for this data, used for
   * implementing data owner conditional access controls to restrict access to the
   * data.
   */
  tags?: Array<string>;

  /**
   * Body param:
   */
  updatedAt?: string;

  /**
   * Body param:
   */
  updatedBy?: string;

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
    type V2ListResponse as V2ListResponse,
    type V2UpdateParams as V2UpdateParams,
    type V2ListParams as V2ListParams,
    type V2DeleteParams as V2DeleteParams,
    type V2CopyParams as V2CopyParams,
    type V2FileUploadParams as V2FileUploadParams,
    type V2FolderCreateParams as V2FolderCreateParams,
    type V2MoveParams as V2MoveParams,
  };
}
