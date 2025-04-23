// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DataTypesAPI from './data-types';
import { DataTypeListResponse, DataTypes } from './data-types';
import * as DataownerAPI from './dataowner';
import { Dataowner, DataownerAbridged, DataownerCountResponse, DataownerRetrieveResponse } from './dataowner';
import * as DataownerTypesAPI from './dataowner-types';
import { DataownerTypeListResponse, DataownerTypes } from './dataowner-types';
import * as ProviderMetadataAPI from './provider-metadata';
import { ProviderMetadata, ProviderMetadataRetrieveResponse } from './provider-metadata';
import * as QueryHelpAPI from './query-help';
import { QueryHelp } from './query-help';

export class SupportingData extends APIResource {
  dataTypes: DataTypesAPI.DataTypes = new DataTypesAPI.DataTypes(this._client);
  dataowner: DataownerAPI.Dataowner = new DataownerAPI.Dataowner(this._client);
  dataownerTypes: DataownerTypesAPI.DataownerTypes = new DataownerTypesAPI.DataownerTypes(this._client);
  providerMetadata: ProviderMetadataAPI.ProviderMetadata = new ProviderMetadataAPI.ProviderMetadata(
    this._client,
  );
  queryHelp: QueryHelpAPI.QueryHelp = new QueryHelpAPI.QueryHelp(this._client);
}

SupportingData.DataTypes = DataTypes;
SupportingData.Dataowner = Dataowner;
SupportingData.DataownerTypes = DataownerTypes;
SupportingData.ProviderMetadata = ProviderMetadata;
SupportingData.QueryHelp = QueryHelp;

export declare namespace SupportingData {
  export { DataTypes as DataTypes, type DataTypeListResponse as DataTypeListResponse };

  export {
    Dataowner as Dataowner,
    type DataownerAbridged as DataownerAbridged,
    type DataownerRetrieveResponse as DataownerRetrieveResponse,
    type DataownerCountResponse as DataownerCountResponse,
  };

  export { DataownerTypes as DataownerTypes, type DataownerTypeListResponse as DataownerTypeListResponse };

  export {
    ProviderMetadata as ProviderMetadata,
    type ProviderMetadataRetrieveResponse as ProviderMetadataRetrieveResponse,
  };

  export { QueryHelp as QueryHelp };
}
