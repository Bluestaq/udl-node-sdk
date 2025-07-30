// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as HistoryAPI from 'bluestaq@unified-data-library/resources/gnss-observations/history';
import {
  History,
  HistoryCountParams,
  HistoryCountResponse,
} from 'bluestaq@unified-data-library/resources/gnss-observations/history';

export class GnssObservations extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

GnssObservations.History = History;

export declare namespace GnssObservations {
  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryCountParams as HistoryCountParams,
  };
}
