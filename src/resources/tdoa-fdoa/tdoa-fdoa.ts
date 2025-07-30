// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as DiffofarrivalAPI from 'bluestaq@unified-data-library/resources/tdoa-fdoa/diffofarrival/diffofarrival';
import {
  Diffofarrival,
  DiffofarrivalAbridged,
  DiffofarrivalAbridgedsOffsetPage,
  DiffofarrivalCountParams,
  DiffofarrivalCountResponse,
  DiffofarrivalCreateBulkParams,
  DiffofarrivalCreateParams,
  DiffofarrivalFull,
  DiffofarrivalListParams,
} from 'bluestaq@unified-data-library/resources/tdoa-fdoa/diffofarrival/diffofarrival';

export class TdoaFdoa extends APIResource {
  diffofarrival: DiffofarrivalAPI.Diffofarrival = new DiffofarrivalAPI.Diffofarrival(this._client);
}

TdoaFdoa.Diffofarrival = Diffofarrival;

export declare namespace TdoaFdoa {
  export {
    Diffofarrival as Diffofarrival,
    type DiffofarrivalAbridged as DiffofarrivalAbridged,
    type DiffofarrivalFull as DiffofarrivalFull,
    type DiffofarrivalCountResponse as DiffofarrivalCountResponse,
    type DiffofarrivalAbridgedsOffsetPage as DiffofarrivalAbridgedsOffsetPage,
    type DiffofarrivalCreateParams as DiffofarrivalCreateParams,
    type DiffofarrivalListParams as DiffofarrivalListParams,
    type DiffofarrivalCountParams as DiffofarrivalCountParams,
    type DiffofarrivalCreateBulkParams as DiffofarrivalCreateBulkParams,
  };
}
