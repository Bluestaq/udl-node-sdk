// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import { History, IonoObservationFull } from './history';

export class Ionoobservation extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Ionoobservation.History = History;

export declare namespace Ionoobservation {
  export { History as History, type IonoObservationFull as IonoObservationFull };
}
