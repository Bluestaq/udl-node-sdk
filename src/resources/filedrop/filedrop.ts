// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EffectrequestsAPI from './effectrequests';
import { EffectrequestCreateParams, Effectrequests } from './effectrequests';
import * as EffectresponsesAPI from './effectresponses';
import { EffectresponseCreateParams, Effectresponses } from './effectresponses';
import * as ElsetsAPI from './elsets';
import { ElsetCreateParams, Elsets } from './elsets';
import * as EoAPI from './eo';
import { Eo, EoCreateParams } from './eo';
import * as EphemerisAPI from './ephemeris';
import { Ephemeris, EphemerisCreateParams } from './ephemeris';
import * as EvacAPI from './evac';
import { Evac, EvacCreateParams } from './evac';
import * as EventevolutionsAPI from './eventevolutions';
import { EventevolutionCreateParams, Eventevolutions } from './eventevolutions';
import * as FlightplansAPI from './flightplans';
import { FlightplanCreateParams, Flightplans } from './flightplans';
import * as GnssobservationsAPI from './gnssobservations';
import { GnssobservationCreateParams, Gnssobservations } from './gnssobservations';
import * as GnssrawifAPI from './gnssrawif';
import { Gnssrawif, GnssrawifCreateParams } from './gnssrawif';
import * as MtiAPI from './mti';
import { Mti, MtiCreateParams } from './mti';
import * as OrbitDeterminationAPI from './orbit-determination';
import { OrbitDetermination, OrbitDeterminationCreateParams } from './orbit-determination';
import * as StateVectorsAPI from './state-vectors';
import { StateVectorCreateParams, StateVectors } from './state-vectors';
import * as SurfaceobstructionsAPI from './surfaceobstructions';
import { SurfaceobstructionCreateParams, Surfaceobstructions } from './surfaceobstructions';
import * as TrackroutesAPI from './trackroutes';
import { TrackrouteCreateParams, Trackroutes } from './trackroutes';
import * as TracksAPI from './tracks';
import { TrackCreateParams, Tracks } from './tracks';
import * as WeatherDataAPI from './weather-data';
import { WeatherData, WeatherDataCreateParams } from './weather-data';
import * as WeatherReportsAPI from './weather-reports';
import { WeatherReportCreateParams, WeatherReports } from './weather-reports';
import * as MissionOpsAPI from './mission-ops/mission-ops';
import { MissionOps } from './mission-ops/mission-ops';
import * as ObservationAPI from './observation/observation';
import { Observation } from './observation/observation';
import * as ReportAndActivityAPI from './report-and-activity/report-and-activity';
import { ReportAndActivity } from './report-and-activity/report-and-activity';
import * as TrackAPI from './track/track';
import { Track } from './track/track';

export class Filedrop extends APIResource {
  effectrequests: EffectrequestsAPI.Effectrequests = new EffectrequestsAPI.Effectrequests(this._client);
  effectresponses: EffectresponsesAPI.Effectresponses = new EffectresponsesAPI.Effectresponses(this._client);
  elsets: ElsetsAPI.Elsets = new ElsetsAPI.Elsets(this._client);
  eo: EoAPI.Eo = new EoAPI.Eo(this._client);
  ephemeris: EphemerisAPI.Ephemeris = new EphemerisAPI.Ephemeris(this._client);
  evac: EvacAPI.Evac = new EvacAPI.Evac(this._client);
  eventevolutions: EventevolutionsAPI.Eventevolutions = new EventevolutionsAPI.Eventevolutions(this._client);
  flightplans: FlightplansAPI.Flightplans = new FlightplansAPI.Flightplans(this._client);
  gnssobservations: GnssobservationsAPI.Gnssobservations = new GnssobservationsAPI.Gnssobservations(
    this._client,
  );
  gnssrawif: GnssrawifAPI.Gnssrawif = new GnssrawifAPI.Gnssrawif(this._client);
  mti: MtiAPI.Mti = new MtiAPI.Mti(this._client);
  observation: ObservationAPI.Observation = new ObservationAPI.Observation(this._client);
  orbitDetermination: OrbitDeterminationAPI.OrbitDetermination = new OrbitDeterminationAPI.OrbitDetermination(
    this._client,
  );
  track: TrackAPI.Track = new TrackAPI.Track(this._client);
  missionOps: MissionOpsAPI.MissionOps = new MissionOpsAPI.MissionOps(this._client);
  reportAndActivity: ReportAndActivityAPI.ReportAndActivity = new ReportAndActivityAPI.ReportAndActivity(
    this._client,
  );
  surfaceobstructions: SurfaceobstructionsAPI.Surfaceobstructions =
    new SurfaceobstructionsAPI.Surfaceobstructions(this._client);
  stateVectors: StateVectorsAPI.StateVectors = new StateVectorsAPI.StateVectors(this._client);
  trackroutes: TrackroutesAPI.Trackroutes = new TrackroutesAPI.Trackroutes(this._client);
  tracks: TracksAPI.Tracks = new TracksAPI.Tracks(this._client);
  weatherData: WeatherDataAPI.WeatherData = new WeatherDataAPI.WeatherData(this._client);
  weatherReports: WeatherReportsAPI.WeatherReports = new WeatherReportsAPI.WeatherReports(this._client);
}

Filedrop.Effectrequests = Effectrequests;
Filedrop.Effectresponses = Effectresponses;
Filedrop.Elsets = Elsets;
Filedrop.Eo = Eo;
Filedrop.Ephemeris = Ephemeris;
Filedrop.Evac = Evac;
Filedrop.Eventevolutions = Eventevolutions;
Filedrop.Flightplans = Flightplans;
Filedrop.Gnssobservations = Gnssobservations;
Filedrop.Gnssrawif = Gnssrawif;
Filedrop.Mti = Mti;
Filedrop.Observation = Observation;
Filedrop.OrbitDetermination = OrbitDetermination;
Filedrop.Track = Track;
Filedrop.MissionOps = MissionOps;
Filedrop.ReportAndActivity = ReportAndActivity;
Filedrop.Surfaceobstructions = Surfaceobstructions;
Filedrop.StateVectors = StateVectors;
Filedrop.Trackroutes = Trackroutes;
Filedrop.Tracks = Tracks;
Filedrop.WeatherData = WeatherData;
Filedrop.WeatherReports = WeatherReports;

export declare namespace Filedrop {
  export { Effectrequests as Effectrequests, type EffectrequestCreateParams as EffectrequestCreateParams };

  export {
    Effectresponses as Effectresponses,
    type EffectresponseCreateParams as EffectresponseCreateParams,
  };

  export { Elsets as Elsets, type ElsetCreateParams as ElsetCreateParams };

  export { Eo as Eo, type EoCreateParams as EoCreateParams };

  export { Ephemeris as Ephemeris, type EphemerisCreateParams as EphemerisCreateParams };

  export { Evac as Evac, type EvacCreateParams as EvacCreateParams };

  export {
    Eventevolutions as Eventevolutions,
    type EventevolutionCreateParams as EventevolutionCreateParams,
  };

  export { Flightplans as Flightplans, type FlightplanCreateParams as FlightplanCreateParams };

  export {
    Gnssobservations as Gnssobservations,
    type GnssobservationCreateParams as GnssobservationCreateParams,
  };

  export { Gnssrawif as Gnssrawif, type GnssrawifCreateParams as GnssrawifCreateParams };

  export { Mti as Mti, type MtiCreateParams as MtiCreateParams };

  export { Observation as Observation };

  export {
    OrbitDetermination as OrbitDetermination,
    type OrbitDeterminationCreateParams as OrbitDeterminationCreateParams,
  };

  export { Track as Track };

  export { MissionOps as MissionOps };

  export { ReportAndActivity as ReportAndActivity };

  export {
    Surfaceobstructions as Surfaceobstructions,
    type SurfaceobstructionCreateParams as SurfaceobstructionCreateParams,
  };

  export { StateVectors as StateVectors, type StateVectorCreateParams as StateVectorCreateParams };

  export { Trackroutes as Trackroutes, type TrackrouteCreateParams as TrackrouteCreateParams };

  export { Tracks as Tracks, type TrackCreateParams as TrackCreateParams };

  export { WeatherData as WeatherData, type WeatherDataCreateParams as WeatherDataCreateParams };

  export { WeatherReports as WeatherReports, type WeatherReportCreateParams as WeatherReportCreateParams };
}
