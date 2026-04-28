// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DataTypesAPI from './data-types';
import {
  DataTypeListParams,
  DataTypeListResponse,
  DataTypeListResponsesOffsetPage,
  DataTypes,
} from './data-types';
import * as DataownerAPI from './dataowner';
import {
  Dataowner,
  DataownerAbridged,
  DataownerCountParams,
  DataownerCountResponse,
  DataownerQueryHelpResponse,
  DataownerRetrieveDataOwnerTypesParams,
  DataownerRetrieveDataOwnerTypesResponse,
  DataownerRetrieveParams,
  DataownerRetrieveProviderMetadataParams,
  DataownerRetrieveProviderMetadataResponse,
  DataownerRetrieveResponse,
} from './dataowner';

export class SupportingData extends APIResource {
  dataTypes: DataTypesAPI.DataTypes = new DataTypesAPI.DataTypes(this._client);
  dataowner: DataownerAPI.Dataowner = new DataownerAPI.Dataowner(this._client);
}

SupportingData.DataTypes = DataTypes;
SupportingData.Dataowner = Dataowner;

export declare namespace SupportingData {
  export {
    DataTypes as DataTypes,
    type DataTypeListResponse as DataTypeListResponse,
    type DataTypeListResponsesOffsetPage as DataTypeListResponsesOffsetPage,
    type DataTypeListParams as DataTypeListParams,
  };

  export {
    Dataowner as Dataowner,
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
