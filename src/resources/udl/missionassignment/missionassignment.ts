// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import { History, MissionAssignmentFull } from './history';

export class Missionassignment extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Missionassignment.History = History;

export declare namespace Missionassignment {
  export { History as History, type MissionAssignmentFull as MissionAssignmentFull };
}
