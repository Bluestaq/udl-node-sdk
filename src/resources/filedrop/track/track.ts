// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as OrbitTrackAPI from './orbit-track';
import { OrbitTrack, OrbitTrackCreateParams } from './orbit-track';

export class Track extends APIResource {
  orbitTrack: OrbitTrackAPI.OrbitTrack = new OrbitTrackAPI.OrbitTrack(this._client);
}

Track.OrbitTrack = OrbitTrack;

export declare namespace Track {
  export { OrbitTrack as OrbitTrack, type OrbitTrackCreateParams as OrbitTrackCreateParams };
}
