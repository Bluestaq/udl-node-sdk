// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History, HistoryAodrParams, HistoryCountResponse } from './history';

export class Flightplan extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Flightplan.History = History;

export declare namespace Flightplan {
  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryAodrParams as HistoryAodrParams,
  };
}
