// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History, SitestatusFull } from './history';

export class Sitestatus extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Sitestatus.History = History;

export declare namespace Sitestatus {
  export { History as History, type SitestatusFull as SitestatusFull };
}
