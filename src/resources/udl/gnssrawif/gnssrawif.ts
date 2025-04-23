// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import { GnssRawIfFull, History } from './history';

export class Gnssrawif extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Gnssrawif.History = History;

export declare namespace Gnssrawif {
  export { History as History, type GnssRawIfFull as GnssRawIfFull };
}
