// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as DataTypesAPI from 'bluestaq@unified-data-library/resources/supporting-data/data-types';
import {
  DataTypeListParams,
  DataTypeListResponse,
  DataTypeListResponsesOffsetPage,
  DataTypes,
} from 'bluestaq@unified-data-library/resources/supporting-data/data-types';
import * as DataownerAPI from 'bluestaq@unified-data-library/resources/supporting-data/dataowner';
import {
  Dataowner,
  DataownerAbridged,
  DataownerCountParams,
  DataownerCountResponse,
  DataownerRetrieveParams,
  DataownerRetrieveResponse,
} from 'bluestaq@unified-data-library/resources/supporting-data/dataowner';
import * as DataownerTypesAPI from 'bluestaq@unified-data-library/resources/supporting-data/dataowner-types';
import {
  DataownerTypeListParams,
  DataownerTypeListResponse,
  DataownerTypeListResponsesOffsetPage,
  DataownerTypes,
} from 'bluestaq@unified-data-library/resources/supporting-data/dataowner-types';
import * as ProviderMetadataAPI from 'bluestaq@unified-data-library/resources/supporting-data/provider-metadata';
import {
  ProviderMetadata,
  ProviderMetadataRetrieveParams,
  ProviderMetadataRetrieveResponse,
} from 'bluestaq@unified-data-library/resources/supporting-data/provider-metadata';
import * as QueryHelpAPI from 'bluestaq@unified-data-library/resources/supporting-data/query-help';
import {
  QueryHelp,
  QueryHelpRetrieveResponse,
} from 'bluestaq@unified-data-library/resources/supporting-data/query-help';

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
    type DataownerRetrieveParams as DataownerRetrieveParams,
    type DataownerCountParams as DataownerCountParams,
  };

  export {
    DataownerTypes as DataownerTypes,
    type DataownerTypeListResponse as DataownerTypeListResponse,
    type DataownerTypeListResponsesOffsetPage as DataownerTypeListResponsesOffsetPage,
    type DataownerTypeListParams as DataownerTypeListParams,
  };

  export {
    ProviderMetadata as ProviderMetadata,
    type ProviderMetadataRetrieveResponse as ProviderMetadataRetrieveResponse,
    type ProviderMetadataRetrieveParams as ProviderMetadataRetrieveParams,
  };

  export { QueryHelp as QueryHelp, type QueryHelpRetrieveResponse as QueryHelpRetrieveResponse };
}
