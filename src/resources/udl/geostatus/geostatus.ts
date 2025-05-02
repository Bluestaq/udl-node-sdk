// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import {
  GeoStatusFull,
  GeoStatusFullsOffsetPage,
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
} from './history';

export class Geostatus extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Geostatus.History = History;

export declare namespace Geostatus {
  export {
    History as History,
    type GeoStatusFull as GeoStatusFull,
    type HistoryCountResponse as HistoryCountResponse,
    type GeoStatusFullsOffsetPage as GeoStatusFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
