// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History, PassiveradarobservationFull } from './history';

export class Passiveradarobservation extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Passiveradarobservation.History = History;

export declare namespace Passiveradarobservation {
  export { History as History, type PassiveradarobservationFull as PassiveradarobservationFull };
}
