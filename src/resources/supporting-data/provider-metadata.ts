// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DataownerAPI from './dataowner';

export class ProviderMetadata extends APIResource {
  retrieve(options?: Core.RequestOptions): Core.APIPromise<ProviderMetadataRetrieveResponse> {
    return this._client.get('/udl/dataowner/providerMetadata', options);
  }
}

export type ProviderMetadataRetrieveResponse = Array<DataownerAPI.DataownerAbridged>;

export declare namespace ProviderMetadata {
  export { type ProviderMetadataRetrieveResponse as ProviderMetadataRetrieveResponse };
}
