// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Folders extends APIResource {
  /**
   * Creates a new folder that is passed as part of the path. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  create(params: FolderCreateParams, options?: RequestOptions): APIPromise<string> {
    const { id, classificationMarking, description, read, tags, write } = params;
    return this._client.post('/scs/folder', {
      query: { id, classificationMarking, description, read, tags, write },
      ...options,
    });
  }

  /**
   * Returns a FileData object representing the folder ID that is visible to the
   * calling user.
   */
  retrieve(query: FolderRetrieveParams, options?: RequestOptions): APIPromise<Shared.FileData> {
    return this._client.get('/scs/folder', { query, ...options });
  }

  /**
   * operation to update folders metadata. A specific role is required to perform
   * this service operation. Please contact the UDL team for assistance.
   */
  update(body: FolderUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch('/scs/folder', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type FolderCreateResponse = string;

export interface FolderCreateParams {
  /**
   * Path to create folder.
   */
  id: string;

  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Optional description to include on folder.
   */
  description?: string;

  /**
   * Comma separated list of user ids who can read contents of the folder.
   */
  read?: string;

  /**
   * Comma separated list of tags to add to the folder.
   */
  tags?: string;

  /**
   * Comma separated list of user ids who can write to the folder.
   */
  write?: string;
}

export interface FolderRetrieveParams {
  /**
   * The folder ID
   */
  id: string;

  firstResult?: number;

  maxResult?: number;
}

export interface FolderUpdateParams {
  id?: string;

  attributes?: FolderUpdateParams.Attributes;

  contentAction?: 'UPDATE' | 'COPY' | 'MOVE';

  targetName?: string;

  targetPath?: string;

  type?: 'file' | 'folder' | 'summary';
}

export namespace FolderUpdateParams {
  export interface Attributes {
    id?: string;

    classification?: string;

    classificationMarking?: string;

    createdBy?: string;

    createdDate?: string;

    description?: string;

    docTitle?: string;

    docType?: string;

    doi?: Array<string>;

    ellipseLat?: number;

    ellipseLon?: number;

    fileName?: string;

    intrinsicTitle?: string;

    keywords?: string;

    mediaTitle?: string;

    metaInfo?: string;

    milgrid?: string;

    milgridLat?: number;

    milgridLon?: number;

    modifiedBy?: string;

    modifiedDate?: string;

    name?: string;

    path?: string;

    read?: string;

    searchable?: boolean;

    searchAfter?: string;

    serialNumber?: string;

    size?: number;

    tags?: Array<string>;

    write?: string;
  }
}

export declare namespace Folders {
  export {
    type FolderCreateResponse as FolderCreateResponse,
    type FolderCreateParams as FolderCreateParams,
    type FolderRetrieveParams as FolderRetrieveParams,
    type FolderUpdateParams as FolderUpdateParams,
  };
}
