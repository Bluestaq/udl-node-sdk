// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History, OrbittrackFull } from './history';

export class Orbittrack extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Orbittrack.History = History;

export declare namespace Orbittrack {
  export { History as History, type OrbittrackFull as OrbittrackFull };
}
