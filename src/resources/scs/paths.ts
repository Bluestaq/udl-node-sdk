// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { type BlobLike } from '../../uploads';

export class Paths extends APIResource {
  /**
   * Creates the path and uploads file that is passed. If folder exist it will only
   * create folders that are missing. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   */
  create(params: PathCreateParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { id, classificationMarking, body, description, tags } = params;
    return this._client.post('/scs/path', {
      query: { id, classificationMarking, description, tags },
      body: body,
      ...options,
      headers: { 'Content-Type': 'application/octet-stream', ...options?.headers },
      __binaryRequest: true,
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
  body: string | ArrayBufferView | ArrayBuffer | BlobLike;

  /**
   * Query param: Description
   */
  description?: string;

  /**
   * Query param: Tags
   */
  tags?: string;
}

export declare namespace Paths {
  export { type PathCreateResponse as PathCreateResponse, type PathCreateParams as PathCreateParams };
}
