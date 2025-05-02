// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  NotificationFull,
  NotificationFullsOffsetPage,
} from './history';

export class Notification extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Notification.History = History;

export declare namespace Notification {
  export {
    History as History,
    type NotificationFull as NotificationFull,
    type HistoryCountResponse as HistoryCountResponse,
    type NotificationFullsOffsetPage as NotificationFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
