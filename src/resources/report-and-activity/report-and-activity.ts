// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as UdlH3geoAPI from 'bluestaq@unified-data-library/resources/report-and-activity/udl-h3geo';
import {
  UdlH3geo,
  UdlH3geoUnvalidatedPublishParams,
} from 'bluestaq@unified-data-library/resources/report-and-activity/udl-h3geo';
import * as UdlSigactAPI from 'bluestaq@unified-data-library/resources/report-and-activity/udl-sigact';
import {
  UdlSigact,
  UdlSigactFileGetParams,
  UdlSigactUnvalidatedPublishParams,
} from 'bluestaq@unified-data-library/resources/report-and-activity/udl-sigact';
import * as PoiAPI from 'bluestaq@unified-data-library/resources/report-and-activity/poi/poi';
import { Poi } from 'bluestaq@unified-data-library/resources/report-and-activity/poi/poi';

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
    type UdlSigactFileGetParams as UdlSigactFileGetParams,
    type UdlSigactUnvalidatedPublishParams as UdlSigactUnvalidatedPublishParams,
  };
}
