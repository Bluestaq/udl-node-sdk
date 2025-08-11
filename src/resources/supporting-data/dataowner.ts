// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Dataowner extends APIResource {
  retrieve(
    query: DataownerRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataownerRetrieveResponse> {
    return this._client.get('/udl/dataowner', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: DataownerCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/dataowner/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryHelp(options?: RequestOptions): APIPromise<DataownerQueryHelpResponse> {
    return this._client.get('/udl/dataowner/queryhelp', options);
  }

  /**
   * Retrieves all distinct data owner types.
   */
  retrieveDataOwnerTypes(
    query: DataownerRetrieveDataOwnerTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataownerRetrieveDataOwnerTypesResponse> {
    return this._client.get('/udl/dataowner/getDataOwnerTypes', { query, ...options });
  }

  retrieveProviderMetadata(
    query: DataownerRetrieveProviderMetadataParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DataownerRetrieveProviderMetadataResponse> {
    return this._client.get('/udl/dataowner/providerMetadata', { query, ...options });
  }
}

/**
 * Information pertaining to UDL data owners.
 */
export interface DataownerAbridged {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Description of this data owner.
   */
  description: string;

  /**
   * The name of the data owner.
   */
  doName: string;

  /**
   * Unique identifier of the contact for this data owner.
   */
  idContact: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Boolean indicating if the data owner is coming soon or not yet available.
   */
  comingSoon?: boolean;

  /**
   * Optional control required to access this data type from this owner.
   */
  control?: string;

  /**
   * The country code. This value is typically the ISO 3166 Alpha-2 two-character
   * country code, however it can also represent various consortiums that do not
   * appear in the ISO document. The code must correspond to an existing country in
   * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
   * ISO Alpha-3 code, or alternate code values that exist for the specified country
   * code.
   */
  countryCode?: string;

  /**
   * Type of data this data owner owns (e.g. EPHEMERIS, IMAGERY, MANEUVER, etc.).
   */
  dataType?: string;

  /**
   * Boolean indicating if the data owner is enabled (if not enabled, they should not
   * appear on the data products screen on the storefront).
   */
  enabled?: boolean;

  /**
   * Type of organization which this data owner belongs to (e.g. Commercial,
   * Government, Academic, Consortium, etc.).
   */
  ownerType?: string;

  /**
   * Organization name for the data provider.
   */
  provider?: string;
}

export type DataownerRetrieveResponse = Array<DataownerAbridged>;

export type DataownerCountResponse = string;

export interface DataownerQueryHelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<Shared.ParamDescriptor>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export type DataownerRetrieveDataOwnerTypesResponse = Array<string>;

export type DataownerRetrieveProviderMetadataResponse = Array<DataownerAbridged>;

export interface DataownerRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface DataownerCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface DataownerRetrieveDataOwnerTypesParams {
  firstResult?: number;

  maxResults?: number;
}

export interface DataownerRetrieveProviderMetadataParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace Dataowner {
  export {
    type DataownerAbridged as DataownerAbridged,
    type DataownerRetrieveResponse as DataownerRetrieveResponse,
    type DataownerCountResponse as DataownerCountResponse,
    type DataownerQueryHelpResponse as DataownerQueryHelpResponse,
    type DataownerRetrieveDataOwnerTypesResponse as DataownerRetrieveDataOwnerTypesResponse,
    type DataownerRetrieveProviderMetadataResponse as DataownerRetrieveProviderMetadataResponse,
    type DataownerRetrieveParams as DataownerRetrieveParams,
    type DataownerCountParams as DataownerCountParams,
    type DataownerRetrieveDataOwnerTypesParams as DataownerRetrieveDataOwnerTypesParams,
    type DataownerRetrieveProviderMetadataParams as DataownerRetrieveProviderMetadataParams,
  };
}
