// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as OnboardnavigationAPI from './onboardnavigation';
import { Onboardnavigation, OnboardnavigationCreateParams } from './onboardnavigation';
import * as PassiveRadarAPI from './passive-radar';
import { PassiveRadar, PassiveRadarCreateParams } from './passive-radar';
import * as RadarAPI from './radar';
import { Radar, RadarCreateParams } from './radar';
import * as RfAPI from './rf';
import { Rf, RfCreateParams } from './rf';

export class Observation extends APIResource {
  onboardnavigation: OnboardnavigationAPI.Onboardnavigation = new OnboardnavigationAPI.Onboardnavigation(
    this._client,
  );
  passiveRadar: PassiveRadarAPI.PassiveRadar = new PassiveRadarAPI.PassiveRadar(this._client);
  radar: RadarAPI.Radar = new RadarAPI.Radar(this._client);
  rf: RfAPI.Rf = new RfAPI.Rf(this._client);
}

Observation.Onboardnavigation = Onboardnavigation;
Observation.PassiveRadar = PassiveRadar;
Observation.Radar = Radar;
Observation.Rf = Rf;

export declare namespace Observation {
  export {
    Onboardnavigation as Onboardnavigation,
    type OnboardnavigationCreateParams as OnboardnavigationCreateParams,
  };

  export { PassiveRadar as PassiveRadar, type PassiveRadarCreateParams as PassiveRadarCreateParams };

  export { Radar as Radar, type RadarCreateParams as RadarCreateParams };

  export { Rf as Rf, type RfCreateParams as RfCreateParams };
}
