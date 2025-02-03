// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History, SgiFull } from './history';

export class Sgi extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Sgi.History = History;

export declare namespace Sgi {
  export { History as History, type SgiFull as SgiFull };
}
