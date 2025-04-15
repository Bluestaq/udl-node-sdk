// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as GeostatusAPI from './geostatus/geostatus';
import { Geostatus } from './geostatus/geostatus';
import * as GnssobservationsetAPI from './gnssobservationset/gnssobservationset';
import { Gnssobservationset } from './gnssobservationset/gnssobservationset';
import * as GnssrawifAPI from './gnssrawif/gnssrawif';
import { Gnssrawif } from './gnssrawif/gnssrawif';
import * as GroundimageryAPI from './groundimagery/groundimagery';
import { Groundimagery } from './groundimagery/groundimagery';
import * as HazardAPI from './hazard/hazard';
import { Hazard } from './hazard/hazard';
import * as IonoobservationAPI from './ionoobservation/ionoobservation';
import { Ionoobservation } from './ionoobservation/ionoobservation';
import * as IsrcollectionAPI from './isrcollection/isrcollection';
import { Isrcollection } from './isrcollection/isrcollection';
import * as ItemtrackingAPI from './itemtracking/itemtracking';
import { Itemtracking } from './itemtracking/itemtracking';
import * as LinkstatusAPI from './linkstatus/linkstatus';
import { Linkstatus } from './linkstatus/linkstatus';
import * as ManeuverAPI from './maneuver/maneuver';
import { Maneuver } from './maneuver/maneuver';
import * as MissiletrackAPI from './missiletrack/missiletrack';
import { Missiletrack } from './missiletrack/missiletrack';
import * as MissionassignmentAPI from './missionassignment/missionassignment';
import { Missionassignment } from './missionassignment/missionassignment';
import * as MonoradarAPI from './monoradar/monoradar';
import { Monoradar } from './monoradar/monoradar';
import * as MtiAPI from './mti/mti';
import { Mti } from './mti/mti';
import * as NotificationAPI from './notification/notification';
import { Notification } from './notification/notification';
import * as OnboardnavigationAPI from './onboardnavigation/onboardnavigation';
import { Onboardnavigation } from './onboardnavigation/onboardnavigation';
import * as OnorbitthrusterstatusAPI from './onorbitthrusterstatus/onorbitthrusterstatus';
import { Onorbitthrusterstatus } from './onorbitthrusterstatus/onorbitthrusterstatus';
import * as OrbitdeterminationAPI from './orbitdetermination/orbitdetermination';
import { Orbitdetermination } from './orbitdetermination/orbitdetermination';
import * as OrbittrackAPI from './orbittrack/orbittrack';
import { Orbittrack } from './orbittrack/orbittrack';
import * as PassiveradarobservationAPI from './passiveradarobservation/passiveradarobservation';
import { Passiveradarobservation } from './passiveradarobservation/passiveradarobservation';
import * as PoiAPI from './poi/poi';
import { Poi } from './poi/poi';
import * as RadarobservationAPI from './radarobservation/radarobservation';
import { Radarobservation } from './radarobservation/radarobservation';
import * as RfobservationAPI from './rfobservation/rfobservation';
import { Rfobservation } from './rfobservation/rfobservation';
import * as SarobservationAPI from './sarobservation/sarobservation';
import { Sarobservation } from './sarobservation/sarobservation';
import * as SensormaintenanceAPI from './sensormaintenance/sensormaintenance';
import { Sensormaintenance } from './sensormaintenance/sensormaintenance';
import * as SensorplanAPI from './sensorplan/sensorplan';
import { Sensorplan } from './sensorplan/sensorplan';
import * as SgiAPI from './sgi/sgi';
import { Sgi } from './sgi/sgi';
import * as SigactAPI from './sigact/sigact';
import { Sigact } from './sigact/sigact';
import * as SitestatusAPI from './sitestatus/sitestatus';
import { Sitestatus } from './sitestatus/sitestatus';
import * as SkyimageryAPI from './skyimagery/skyimagery';
import { Skyimagery } from './skyimagery/skyimagery';

export class Udl extends APIResource {
  geostatus: GeostatusAPI.Geostatus = new GeostatusAPI.Geostatus(this._client);
  gnssobservationset: GnssobservationsetAPI.Gnssobservationset = new GnssobservationsetAPI.Gnssobservationset(
    this._client,
  );
  mti: MtiAPI.Mti = new MtiAPI.Mti(this._client);
  notification: NotificationAPI.Notification = new NotificationAPI.Notification(this._client);
  onboardnavigation: OnboardnavigationAPI.Onboardnavigation = new OnboardnavigationAPI.Onboardnavigation(
    this._client,
  );
  onorbitthrusterstatus: OnorbitthrusterstatusAPI.Onorbitthrusterstatus =
    new OnorbitthrusterstatusAPI.Onorbitthrusterstatus(this._client);
  gnssrawif: GnssrawifAPI.Gnssrawif = new GnssrawifAPI.Gnssrawif(this._client);
  groundimagery: GroundimageryAPI.Groundimagery = new GroundimageryAPI.Groundimagery(this._client);
  hazard: HazardAPI.Hazard = new HazardAPI.Hazard(this._client);
  ionoobservation: IonoobservationAPI.Ionoobservation = new IonoobservationAPI.Ionoobservation(this._client);
  isrcollection: IsrcollectionAPI.Isrcollection = new IsrcollectionAPI.Isrcollection(this._client);
  itemtracking: ItemtrackingAPI.Itemtracking = new ItemtrackingAPI.Itemtracking(this._client);
  linkstatus: LinkstatusAPI.Linkstatus = new LinkstatusAPI.Linkstatus(this._client);
  maneuver: ManeuverAPI.Maneuver = new ManeuverAPI.Maneuver(this._client);
  missiletrack: MissiletrackAPI.Missiletrack = new MissiletrackAPI.Missiletrack(this._client);
  missionassignment: MissionassignmentAPI.Missionassignment = new MissionassignmentAPI.Missionassignment(
    this._client,
  );
  monoradar: MonoradarAPI.Monoradar = new MonoradarAPI.Monoradar(this._client);
  orbitdetermination: OrbitdeterminationAPI.Orbitdetermination = new OrbitdeterminationAPI.Orbitdetermination(
    this._client,
  );
  orbittrack: OrbittrackAPI.Orbittrack = new OrbittrackAPI.Orbittrack(this._client);
  passiveradarobservation: PassiveradarobservationAPI.Passiveradarobservation =
    new PassiveradarobservationAPI.Passiveradarobservation(this._client);
  poi: PoiAPI.Poi = new PoiAPI.Poi(this._client);
  radarobservation: RadarobservationAPI.Radarobservation = new RadarobservationAPI.Radarobservation(
    this._client,
  );
  rfobservation: RfobservationAPI.Rfobservation = new RfobservationAPI.Rfobservation(this._client);
  sarobservation: SarobservationAPI.Sarobservation = new SarobservationAPI.Sarobservation(this._client);
  sensormaintenance: SensormaintenanceAPI.Sensormaintenance = new SensormaintenanceAPI.Sensormaintenance(
    this._client,
  );
  sensorplan: SensorplanAPI.Sensorplan = new SensorplanAPI.Sensorplan(this._client);
  sgi: SgiAPI.Sgi = new SgiAPI.Sgi(this._client);
  sigact: SigactAPI.Sigact = new SigactAPI.Sigact(this._client);
  sitestatus: SitestatusAPI.Sitestatus = new SitestatusAPI.Sitestatus(this._client);
  skyimagery: SkyimageryAPI.Skyimagery = new SkyimageryAPI.Skyimagery(this._client);
}

Udl.Geostatus = Geostatus;
Udl.Gnssobservationset = Gnssobservationset;
Udl.Mti = Mti;
Udl.Notification = Notification;
Udl.Onboardnavigation = Onboardnavigation;
Udl.Onorbitthrusterstatus = Onorbitthrusterstatus;
Udl.Gnssrawif = Gnssrawif;
Udl.Groundimagery = Groundimagery;
Udl.Hazard = Hazard;
Udl.Ionoobservation = Ionoobservation;
Udl.Isrcollection = Isrcollection;
Udl.Itemtracking = Itemtracking;
Udl.Linkstatus = Linkstatus;
Udl.Maneuver = Maneuver;
Udl.Missiletrack = Missiletrack;
Udl.Missionassignment = Missionassignment;
Udl.Monoradar = Monoradar;
Udl.Orbitdetermination = Orbitdetermination;
Udl.Orbittrack = Orbittrack;
Udl.Passiveradarobservation = Passiveradarobservation;
Udl.Poi = Poi;
Udl.Radarobservation = Radarobservation;
Udl.Rfobservation = Rfobservation;
Udl.Sarobservation = Sarobservation;
Udl.Sensormaintenance = Sensormaintenance;
Udl.Sensorplan = Sensorplan;
Udl.Sgi = Sgi;
Udl.Sigact = Sigact;
Udl.Sitestatus = Sitestatus;
Udl.Skyimagery = Skyimagery;

export declare namespace Udl {
  export { Geostatus as Geostatus };

  export { Gnssobservationset as Gnssobservationset };

  export { Mti as Mti };

  export { Notification as Notification };

  export { Onboardnavigation as Onboardnavigation };

  export { Onorbitthrusterstatus as Onorbitthrusterstatus };

  export { Gnssrawif as Gnssrawif };

  export { Groundimagery as Groundimagery };

  export { Hazard as Hazard };

  export { Ionoobservation as Ionoobservation };

  export { Isrcollection as Isrcollection };

  export { Itemtracking as Itemtracking };

  export { Linkstatus as Linkstatus };

  export { Maneuver as Maneuver };

  export { Missiletrack as Missiletrack };

  export { Missionassignment as Missionassignment };

  export { Monoradar as Monoradar };

  export { Orbitdetermination as Orbitdetermination };

  export { Orbittrack as Orbittrack };

  export { Passiveradarobservation as Passiveradarobservation };

  export { Poi as Poi };

  export { Radarobservation as Radarobservation };

  export { Rfobservation as Rfobservation };

  export { Sarobservation as Sarobservation };

  export { Sensormaintenance as Sensormaintenance };

  export { Sensorplan as Sensorplan };

  export { Sgi as Sgi };

  export { Sigact as Sigact };

  export { Sitestatus as Sitestatus };

  export { Skyimagery as Skyimagery };
}
