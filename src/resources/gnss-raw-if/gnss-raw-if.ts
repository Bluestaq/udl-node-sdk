// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAdorParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryQueryParams,
  HistoryQueryResponse,
} from './history';

export class GnssRawIf extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

GnssRawIf.History = History;

export declare namespace GnssRawIf {
  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryQueryResponse as HistoryQueryResponse,
    type HistoryAdorParams as HistoryAdorParams,
    type HistoryCountParams as HistoryCountParams,
    type HistoryQueryParams as HistoryQueryParams,
  };
}
