// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class FileMetadata extends APIResource {
  /**
   * Returns a set of File Metadata that can be used for search endpoint.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<FileMetadataListResponse> {
    return this._client.get('/scs/listFileMetadata', options);
  }
}

export type FileMetadataListResponse = Array<string>;

export declare namespace FileMetadata {
  export { type FileMetadataListResponse as FileMetadataListResponse };
}
