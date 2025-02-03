// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History, RfobservationdetailsFull } from './history';

export class Rfobservation extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Rfobservation.History = History;

export declare namespace Rfobservation {
  export { History as History, type RfobservationdetailsFull as RfobservationdetailsFull };
}
