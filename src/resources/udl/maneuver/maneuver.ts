// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import { History, ManeuverFull } from './history';

export class Maneuver extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Maneuver.History = History;

export declare namespace Maneuver {
  export { History as History, type ManeuverFull as ManeuverFull };
}
