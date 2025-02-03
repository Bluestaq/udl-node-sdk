// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { HazardFull, History } from './history';

export class Hazard extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Hazard.History = History;

export declare namespace Hazard {
  export { History as History, type HazardFull as HazardFull };
}
