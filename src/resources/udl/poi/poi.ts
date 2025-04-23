// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import { History, PoiFull } from './history';

export class Poi extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Poi.History = History;

export declare namespace Poi {
  export { History as History, type PoiFull as PoiFull };
}
