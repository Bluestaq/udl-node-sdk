// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EffectRequestsAPI from './effect-requests/effect-requests';
import {
  EffectRequest,
  EffectRequestAbridged,
  EffectRequestCreateParams,
  EffectRequestListParams,
  EffectRequestListResponse,
  EffectRequests,
} from './effect-requests/effect-requests';
import * as EffectResponsesAPI from './effect-responses/effect-responses';
import { EffectResponse, EffectResponseAbridged, EffectResponses } from './effect-responses/effect-responses';

export class MissionOps extends APIResource {
  effectRequests: EffectRequestsAPI.EffectRequests = new EffectRequestsAPI.EffectRequests(this._client);
  effectResponses: EffectResponsesAPI.EffectResponses = new EffectResponsesAPI.EffectResponses(this._client);
}

MissionOps.EffectRequests = EffectRequests;
MissionOps.EffectResponses = EffectResponses;

export declare namespace MissionOps {
  export {
    EffectRequests as EffectRequests,
    type EffectRequest as EffectRequest,
    type EffectRequestAbridged as EffectRequestAbridged,
    type EffectRequestListResponse as EffectRequestListResponse,
    type EffectRequestCreateParams as EffectRequestCreateParams,
    type EffectRequestListParams as EffectRequestListParams,
  };

  export {
    EffectResponses as EffectResponses,
    type EffectResponse as EffectResponse,
    type EffectResponseAbridged as EffectResponseAbridged,
  };
}
