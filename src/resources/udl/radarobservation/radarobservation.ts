// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History, RadarobservationFull } from './history';

export class Radarobservation extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Radarobservation.History = History;

export declare namespace Radarobservation {
  export { History as History, type RadarobservationFull as RadarobservationFull };
}
