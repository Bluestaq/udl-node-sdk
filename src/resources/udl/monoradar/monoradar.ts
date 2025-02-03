// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History, MonoRadarFull } from './history';

export class Monoradar extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Monoradar.History = History;

export declare namespace Monoradar {
  export { History as History, type MonoRadarFull as MonoRadarFull };
}
