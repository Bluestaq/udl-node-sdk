// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HistoryAPI from './history';
import { History } from './history';

export class Video extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Video.History = History;

export declare namespace Video {
  export { History as History };
}
