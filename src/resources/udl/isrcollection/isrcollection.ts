// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History, IsrCollectionFull } from './history';

export class Isrcollection extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Isrcollection.History = History;

export declare namespace Isrcollection {
  export { History as History, type IsrCollectionFull as IsrCollectionFull };
}
