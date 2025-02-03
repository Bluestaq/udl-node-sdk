// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History, SensormaintenanceFull } from './history';

export class Sensormaintenance extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Sensormaintenance.History = History;

export declare namespace Sensormaintenance {
  export { History as History, type SensormaintenanceFull as SensormaintenanceFull };
}
