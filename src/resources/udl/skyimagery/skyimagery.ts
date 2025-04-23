// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import { History, SkyimageryFull } from './history';

export class Skyimagery extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Skyimagery.History = History;

export declare namespace Skyimagery {
  export { History as History, type SkyimageryFull as SkyimageryFull };
}
