// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as HistoryAPI from 'bluestaq@unified-data-library/resources/gnss-raw-if/history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryQueryParams,
  HistoryQueryResponse,
} from 'bluestaq@unified-data-library/resources/gnss-raw-if/history';

export class GnssRawIf extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

GnssRawIf.History = History;

export declare namespace GnssRawIf {
  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryQueryResponse as HistoryQueryResponse,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
    type HistoryQueryParams as HistoryQueryParams,
  };
}
