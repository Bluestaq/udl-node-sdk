// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import {
  GnssObservationSetFull,
  History,
  HistoryAodrParams,
  HistoryListParams,
  HistoryListResponse,
} from './history';

export class Gnssobservationset extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Gnssobservationset.History = History;

export declare namespace Gnssobservationset {
  export {
    History as History,
    type GnssObservationSetFull as GnssObservationSetFull,
    type HistoryListResponse as HistoryListResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
  };
}
