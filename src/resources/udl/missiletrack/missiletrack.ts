// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import { History, MissileTrackFull } from './history';

export class Missiletrack extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Missiletrack.History = History;

export declare namespace Missiletrack {
  export { History as History, type MissileTrackFull as MissileTrackFull };
}
