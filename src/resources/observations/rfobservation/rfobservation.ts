// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import { History, HistoryAodrParams, HistoryListParams, HistoryListResponse } from './history';

export class Rfobservation extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Rfobservation.History = History;

export declare namespace Rfobservation {
  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
  };
}
