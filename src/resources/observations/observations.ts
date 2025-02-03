// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as EcpsdrAPI from './ecpsdr';
import {
  Ecpsdr,
  EcpsdrAbridged,
  EcpsdrCountParams,
  EcpsdrCountResponse,
  EcpsdrCreateBulkParams,
  EcpsdrCreateParams,
  EcpsdrListParams,
  EcpsdrListResponse,
  EcpsdrResource,
  EcpsdrTupleParams,
  EcpsdrTupleResponse,
} from './ecpsdr';
import * as EoAPI from './eo';
import { Eo } from './eo';
import * as GnssobservationsAPI from './gnssobservations';
import { Gnssobservations } from './gnssobservations';
import * as SwirAPI from './swir';
import { Swir, SwirCreateParams } from './swir';
import * as MonoradarAPI from './monoradar/monoradar';
import { Monoradar, MonoradarCreateParams } from './monoradar/monoradar';
import * as RadarobservationAPI from './radarobservation/radarobservation';
import { Radarobservation } from './radarobservation/radarobservation';
import * as RfobservationAPI from './rfobservation/rfobservation';
import { Rfobservation } from './rfobservation/rfobservation';

export class Observations extends APIResource {
  ecpsdr: EcpsdrAPI.EcpsdrResource = new EcpsdrAPI.EcpsdrResource(this._client);
  eo: EoAPI.Eo = new EoAPI.Eo(this._client);
  gnssobservations: GnssobservationsAPI.Gnssobservations = new GnssobservationsAPI.Gnssobservations(
    this._client,
  );
  monoradar: MonoradarAPI.Monoradar = new MonoradarAPI.Monoradar(this._client);
  swir: SwirAPI.Swir = new SwirAPI.Swir(this._client);
  radarobservation: RadarobservationAPI.Radarobservation = new RadarobservationAPI.Radarobservation(
    this._client,
  );
  rfobservation: RfobservationAPI.Rfobservation = new RfobservationAPI.Rfobservation(this._client);
}

Observations.EcpsdrResource = EcpsdrResource;
Observations.Eo = Eo;
Observations.Gnssobservations = Gnssobservations;
Observations.Monoradar = Monoradar;
Observations.Swir = Swir;
Observations.Radarobservation = Radarobservation;
Observations.Rfobservation = Rfobservation;

export declare namespace Observations {
  export {
    EcpsdrResource as EcpsdrResource,
    type Ecpsdr as Ecpsdr,
    type EcpsdrAbridged as EcpsdrAbridged,
    type EcpsdrListResponse as EcpsdrListResponse,
    type EcpsdrCountResponse as EcpsdrCountResponse,
    type EcpsdrTupleResponse as EcpsdrTupleResponse,
    type EcpsdrCreateParams as EcpsdrCreateParams,
    type EcpsdrListParams as EcpsdrListParams,
    type EcpsdrCountParams as EcpsdrCountParams,
    type EcpsdrCreateBulkParams as EcpsdrCreateBulkParams,
    type EcpsdrTupleParams as EcpsdrTupleParams,
  };

  export { Eo as Eo };

  export { Gnssobservations as Gnssobservations };

  export { Monoradar as Monoradar, type MonoradarCreateParams as MonoradarCreateParams };

  export { Swir as Swir, type SwirCreateParams as SwirCreateParams };

  export { Radarobservation as Radarobservation };

  export { Rfobservation as Rfobservation };
}
