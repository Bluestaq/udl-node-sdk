// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History, SigactFull } from './history';

export class Sigact extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Sigact.History = History;

export declare namespace Sigact {
  export { History as History, type SigactFull as SigactFull };
}
