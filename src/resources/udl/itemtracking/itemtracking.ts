// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History, ItemTrackingFull } from './history';

export class Itemtracking extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Itemtracking.History = History;

export declare namespace Itemtracking {
  export { History as History, type ItemTrackingFull as ItemTrackingFull };
}
