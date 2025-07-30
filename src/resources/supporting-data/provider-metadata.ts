// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as DataownerAPI from 'bluestaq@unified-data-library/resources/supporting-data/dataowner';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';

export class ProviderMetadata extends APIResource {
  retrieve(
    query: ProviderMetadataRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProviderMetadataRetrieveResponse> {
    return this._client.get('/udl/dataowner/providerMetadata', { query, ...options });
  }
}

export type ProviderMetadataRetrieveResponse = Array<DataownerAPI.DataownerAbridged>;

export interface ProviderMetadataRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace ProviderMetadata {
  export {
    type ProviderMetadataRetrieveResponse as ProviderMetadataRetrieveResponse,
    type ProviderMetadataRetrieveParams as ProviderMetadataRetrieveParams,
  };
}
