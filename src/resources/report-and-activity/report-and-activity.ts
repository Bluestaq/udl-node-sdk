// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as UdlH3geoAPI from './udl-h3geo';
import { UdlH3geo, UdlH3geoUnvalidatedPublishParams } from './udl-h3geo';
import * as UdlSigactAPI from './udl-sigact';
import { UdlSigact, UdlSigactUnvalidatedPublishParams } from './udl-sigact';
import * as PoiAPI from './poi/poi';
import { Poi } from './poi/poi';

export class ReportAndActivity extends APIResource {
  poi: PoiAPI.Poi = new PoiAPI.Poi(this._client);
  udlH3geo: UdlH3geoAPI.UdlH3geo = new UdlH3geoAPI.UdlH3geo(this._client);
  udlSigact: UdlSigactAPI.UdlSigact = new UdlSigactAPI.UdlSigact(this._client);
}

ReportAndActivity.Poi = Poi;
ReportAndActivity.UdlH3geo = UdlH3geo;
ReportAndActivity.UdlSigact = UdlSigact;

export declare namespace ReportAndActivity {
  export { Poi as Poi };

  export { UdlH3geo as UdlH3geo, type UdlH3geoUnvalidatedPublishParams as UdlH3geoUnvalidatedPublishParams };

  export {
    UdlSigact as UdlSigact,
    type UdlSigactUnvalidatedPublishParams as UdlSigactUnvalidatedPublishParams,
  };
}
