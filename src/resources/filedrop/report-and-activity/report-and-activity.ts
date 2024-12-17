// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as PoiAPI from './poi';
import { Poi, PoiCreateParams } from './poi';
import * as RfGeolocationAPI from './rf-geolocation';
import { RfGeolocation, RfGeolocationCreateParams } from './rf-geolocation';

export class ReportAndActivity extends APIResource {
  poi: PoiAPI.Poi = new PoiAPI.Poi(this._client);
  rfGeolocation: RfGeolocationAPI.RfGeolocation = new RfGeolocationAPI.RfGeolocation(this._client);
}

ReportAndActivity.Poi = Poi;
ReportAndActivity.RfGeolocation = RfGeolocation;

export declare namespace ReportAndActivity {
  export { Poi as Poi, type PoiCreateParams as PoiCreateParams };

  export { RfGeolocation as RfGeolocation, type RfGeolocationCreateParams as RfGeolocationCreateParams };
}
