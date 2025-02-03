// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HistoryAPI from './history';
import { History, OrbitdeterminationFull } from './history';

export class Orbitdetermination extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Orbitdetermination.History = History;

export declare namespace Orbitdetermination {
  export { History as History, type OrbitdeterminationFull as OrbitdeterminationFull };
}
