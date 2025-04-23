// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import { GroundImageryFull, History } from './history';

export class Groundimagery extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Groundimagery.History = History;

export declare namespace Groundimagery {
  export { History as History, type GroundImageryFull as GroundImageryFull };
}
