// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History, SensorplanFull } from './history';

export class Sensorplan extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Sensorplan.History = History;

export declare namespace Sensorplan {
  export { History as History, type SensorplanFull as SensorplanFull };
}
