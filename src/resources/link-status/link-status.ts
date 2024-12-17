// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DatalinkAPI from './datalink';
import {
  Datalink,
  DatalinkAbridged,
  DatalinkCountParams,
  DatalinkCountResponse,
  DatalinkCreateParams,
  DatalinkFull,
  DatalinkListParams,
  DatalinkListResponse,
  DatalinkTupleParams,
  DatalinkTupleResponse,
} from './datalink';

export class LinkStatus extends APIResource {
  datalink: DatalinkAPI.Datalink = new DatalinkAPI.Datalink(this._client);
}

LinkStatus.Datalink = Datalink;

export declare namespace LinkStatus {
  export {
    Datalink as Datalink,
    type DatalinkAbridged as DatalinkAbridged,
    type DatalinkFull as DatalinkFull,
    type DatalinkListResponse as DatalinkListResponse,
    type DatalinkCountResponse as DatalinkCountResponse,
    type DatalinkTupleResponse as DatalinkTupleResponse,
    type DatalinkCreateParams as DatalinkCreateParams,
    type DatalinkListParams as DatalinkListParams,
    type DatalinkCountParams as DatalinkCountParams,
    type DatalinkTupleParams as DatalinkTupleParams,
  };
}
