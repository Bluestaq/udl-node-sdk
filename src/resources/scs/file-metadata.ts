// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';

export class FileMetadata extends APIResource {
  /**
   * Returns a set of File Metadata that can be used for search endpoint.
   *
   * @example
   * ```ts
   * const fileMetadata = await client.scs.fileMetadata.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<FileMetadataListResponse> {
    return this._client.get('/scs/listFileMetadata', options);
  }
}

export type FileMetadataListResponse = Array<string>;

export declare namespace FileMetadata {
  export { type FileMetadataListResponse as FileMetadataListResponse };
}
