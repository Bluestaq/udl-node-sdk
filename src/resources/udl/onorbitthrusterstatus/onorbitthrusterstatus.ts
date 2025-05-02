// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryListParams,
  OnorbitthrusterstatusFull,
  OnorbitthrusterstatusFullsOffsetPage,
} from './history';

export class Onorbitthrusterstatus extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Onorbitthrusterstatus.History = History;

export declare namespace Onorbitthrusterstatus {
  export {
    History as History,
    type OnorbitthrusterstatusFull as OnorbitthrusterstatusFull,
    type OnorbitthrusterstatusFullsOffsetPage as OnorbitthrusterstatusFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
  };
}
