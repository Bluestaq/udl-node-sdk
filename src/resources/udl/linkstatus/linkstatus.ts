// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import { History, LinkStatusFull } from './history';

export class Linkstatus extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Linkstatus.History = History;

export declare namespace Linkstatus {
  export { History as History, type LinkStatusFull as LinkStatusFull };
}
