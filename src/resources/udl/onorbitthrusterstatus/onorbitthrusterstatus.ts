// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History, HistoryListParams, HistoryListResponse, OnorbitthrusterstatusFull } from './history';

export class Onorbitthrusterstatus extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Onorbitthrusterstatus.History = History;

export declare namespace Onorbitthrusterstatus {
  export {
    History as History,
    type OnorbitthrusterstatusFull as OnorbitthrusterstatusFull,
    type HistoryListResponse as HistoryListResponse,
    type HistoryListParams as HistoryListParams,
  };
}
