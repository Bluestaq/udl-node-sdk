// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  OnboardnavigationFull,
  OnboardnavigationFullsOffsetPage,
} from './history';

export class Onboardnavigation extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Onboardnavigation.History = History;

export declare namespace Onboardnavigation {
  export {
    History as History,
    type OnboardnavigationFull as OnboardnavigationFull,
    type HistoryCountResponse as HistoryCountResponse,
    type OnboardnavigationFullsOffsetPage as OnboardnavigationFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
