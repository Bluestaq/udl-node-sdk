// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import { History, SarobservationFull } from './history';

export class Sarobservation extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Sarobservation.History = History;

export declare namespace Sarobservation {
  export { History as History, type SarobservationFull as SarobservationFull };
}
