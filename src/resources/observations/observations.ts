// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EcpsdrAPI from './ecpsdr';
import {
  Ecpsdr,
  EcpsdrAbridged,
  EcpsdrAbridgedsOffsetPage,
  EcpsdrCountParams,
  EcpsdrCountResponse,
  EcpsdrCreateBulkParams,
  EcpsdrCreateParams,
  EcpsdrListParams,
  EcpsdrQueryHelpResponse,
  EcpsdrResource,
  EcpsdrRetrieveParams,
  EcpsdrTupleParams,
  EcpsdrTupleResponse,
  EcpsdrUnvalidatedPublishParams,
} from './ecpsdr';
import * as SwirAPI from './swir';
import { Swir, SwirUnvalidatedPublishParams } from './swir';
import * as EoObservationsAPI from './eo-observations/eo-observations';
import {
  EoObservationAbridged,
  EoObservationAbridgedsOffsetPage,
  EoObservationCountParams,
  EoObservationCountResponse,
  EoObservationCreateBulkParams,
  EoObservationCreateParams,
  EoObservationListParams,
  EoObservationQueryhelpResponse,
  EoObservationRetrieveParams,
  EoObservationTupleParams,
  EoObservationTupleResponse,
  EoObservationUnvalidatedPublishParams,
  EoObservations,
} from './eo-observations/eo-observations';
import * as MonoradarAPI from './monoradar/monoradar';
import {
  Monoradar,
  MonoradarCountParams,
  MonoradarCountResponse,
  MonoradarCreateBulkParams,
  MonoradarListParams,
  MonoradarListResponse,
  MonoradarListResponsesOffsetPage,
  MonoradarQueryhelpResponse,
  MonoradarTupleParams,
  MonoradarTupleResponse,
  MonoradarUnvalidatedPublishParams,
} from './monoradar/monoradar';
import * as ObscorrelationAPI from './obscorrelation/obscorrelation';
import {
  Obscorrelation,
  ObscorrelationCountParams,
  ObscorrelationCountResponse,
  ObscorrelationCreateBulkParams,
  ObscorrelationCreateParams,
  ObscorrelationListParams,
  ObscorrelationListResponse,
  ObscorrelationListResponsesOffsetPage,
  ObscorrelationQueryHelpResponse,
  ObscorrelationRetrieveParams,
  ObscorrelationRetrieveResponse,
  ObscorrelationTupleParams,
  ObscorrelationTupleResponse,
  ObscorrelationUnvalidatedPublishParams,
} from './obscorrelation/obscorrelation';
import * as PassiveRadarObservationAPI from './passive-radar-observation/passive-radar-observation';
import {
  PassiveRadarObservation,
  PassiveRadarObservationCountParams,
  PassiveRadarObservationCountResponse,
  PassiveRadarObservationCreateBulkParams,
  PassiveRadarObservationCreateParams,
  PassiveRadarObservationFileCreateParams,
  PassiveRadarObservationGetParams,
  PassiveRadarObservationGetResponse,
  PassiveRadarObservationListParams,
  PassiveRadarObservationListResponse,
  PassiveRadarObservationListResponsesOffsetPage,
  PassiveRadarObservationQueryhelpResponse,
  PassiveRadarObservationTupleParams,
  PassiveRadarObservationTupleResponse,
} from './passive-radar-observation/passive-radar-observation';
import * as RadarobservationAPI from './radarobservation/radarobservation';
import {
  Radarobservation,
  RadarobservationCountParams,
  RadarobservationCountResponse,
  RadarobservationCreateBulkParams,
  RadarobservationCreateParams,
  RadarobservationGetParams,
  RadarobservationGetResponse,
  RadarobservationListParams,
  RadarobservationListResponse,
  RadarobservationListResponsesOffsetPage,
  RadarobservationQueryhelpResponse,
  RadarobservationTupleParams,
  RadarobservationTupleResponse,
  RadarobservationUnvalidatedPublishParams,
} from './radarobservation/radarobservation';
import * as RfObservationAPI from './rf-observation/rf-observation';
import {
  RfObservation,
  RfObservationCountParams,
  RfObservationCountResponse,
  RfObservationCreateBulkParams,
  RfObservationCreateParams,
  RfObservationGetParams,
  RfObservationGetResponse,
  RfObservationListParams,
  RfObservationListResponse,
  RfObservationListResponsesOffsetPage,
  RfObservationQueryhelpResponse,
  RfObservationTupleParams,
  RfObservationTupleResponse,
  RfObservationUnvalidatedPublishParams,
} from './rf-observation/rf-observation';

export class Observations extends APIResource {
  ecpsdr: EcpsdrAPI.EcpsdrResource = new EcpsdrAPI.EcpsdrResource(this._client);
  eoObservations: EoObservationsAPI.EoObservations = new EoObservationsAPI.EoObservations(this._client);
  monoradar: MonoradarAPI.Monoradar = new MonoradarAPI.Monoradar(this._client);
  obscorrelation: ObscorrelationAPI.Obscorrelation = new ObscorrelationAPI.Obscorrelation(this._client);
  passiveRadarObservation: PassiveRadarObservationAPI.PassiveRadarObservation =
    new PassiveRadarObservationAPI.PassiveRadarObservation(this._client);
  radarobservation: RadarobservationAPI.Radarobservation = new RadarobservationAPI.Radarobservation(
    this._client,
  );
  rfObservation: RfObservationAPI.RfObservation = new RfObservationAPI.RfObservation(this._client);
  swir: SwirAPI.Swir = new SwirAPI.Swir(this._client);
}

Observations.EcpsdrResource = EcpsdrResource;
Observations.EoObservations = EoObservations;
Observations.Monoradar = Monoradar;
Observations.Obscorrelation = Obscorrelation;
Observations.PassiveRadarObservation = PassiveRadarObservation;
Observations.Radarobservation = Radarobservation;
Observations.RfObservation = RfObservation;
Observations.Swir = Swir;

export declare namespace Observations {
  export {
    EcpsdrResource as EcpsdrResource,
    type Ecpsdr as Ecpsdr,
    type EcpsdrAbridged as EcpsdrAbridged,
    type EcpsdrCountResponse as EcpsdrCountResponse,
    type EcpsdrQueryHelpResponse as EcpsdrQueryHelpResponse,
    type EcpsdrTupleResponse as EcpsdrTupleResponse,
    type EcpsdrAbridgedsOffsetPage as EcpsdrAbridgedsOffsetPage,
    type EcpsdrCreateParams as EcpsdrCreateParams,
    type EcpsdrRetrieveParams as EcpsdrRetrieveParams,
    type EcpsdrListParams as EcpsdrListParams,
    type EcpsdrCountParams as EcpsdrCountParams,
    type EcpsdrCreateBulkParams as EcpsdrCreateBulkParams,
    type EcpsdrTupleParams as EcpsdrTupleParams,
    type EcpsdrUnvalidatedPublishParams as EcpsdrUnvalidatedPublishParams,
  };

  export {
    EoObservations as EoObservations,
    type EoObservationAbridged as EoObservationAbridged,
    type EoObservationCountResponse as EoObservationCountResponse,
    type EoObservationQueryhelpResponse as EoObservationQueryhelpResponse,
    type EoObservationTupleResponse as EoObservationTupleResponse,
    type EoObservationAbridgedsOffsetPage as EoObservationAbridgedsOffsetPage,
    type EoObservationCreateParams as EoObservationCreateParams,
    type EoObservationRetrieveParams as EoObservationRetrieveParams,
    type EoObservationListParams as EoObservationListParams,
    type EoObservationCountParams as EoObservationCountParams,
    type EoObservationCreateBulkParams as EoObservationCreateBulkParams,
    type EoObservationTupleParams as EoObservationTupleParams,
    type EoObservationUnvalidatedPublishParams as EoObservationUnvalidatedPublishParams,
  };

  export {
    Monoradar as Monoradar,
    type MonoradarListResponse as MonoradarListResponse,
    type MonoradarCountResponse as MonoradarCountResponse,
    type MonoradarQueryhelpResponse as MonoradarQueryhelpResponse,
    type MonoradarTupleResponse as MonoradarTupleResponse,
    type MonoradarListResponsesOffsetPage as MonoradarListResponsesOffsetPage,
    type MonoradarListParams as MonoradarListParams,
    type MonoradarCountParams as MonoradarCountParams,
    type MonoradarCreateBulkParams as MonoradarCreateBulkParams,
    type MonoradarTupleParams as MonoradarTupleParams,
    type MonoradarUnvalidatedPublishParams as MonoradarUnvalidatedPublishParams,
  };

  export {
    Obscorrelation as Obscorrelation,
    type ObscorrelationRetrieveResponse as ObscorrelationRetrieveResponse,
    type ObscorrelationListResponse as ObscorrelationListResponse,
    type ObscorrelationCountResponse as ObscorrelationCountResponse,
    type ObscorrelationQueryHelpResponse as ObscorrelationQueryHelpResponse,
    type ObscorrelationTupleResponse as ObscorrelationTupleResponse,
    type ObscorrelationListResponsesOffsetPage as ObscorrelationListResponsesOffsetPage,
    type ObscorrelationCreateParams as ObscorrelationCreateParams,
    type ObscorrelationRetrieveParams as ObscorrelationRetrieveParams,
    type ObscorrelationListParams as ObscorrelationListParams,
    type ObscorrelationCountParams as ObscorrelationCountParams,
    type ObscorrelationCreateBulkParams as ObscorrelationCreateBulkParams,
    type ObscorrelationTupleParams as ObscorrelationTupleParams,
    type ObscorrelationUnvalidatedPublishParams as ObscorrelationUnvalidatedPublishParams,
  };

  export {
    PassiveRadarObservation as PassiveRadarObservation,
    type PassiveRadarObservationListResponse as PassiveRadarObservationListResponse,
    type PassiveRadarObservationCountResponse as PassiveRadarObservationCountResponse,
    type PassiveRadarObservationGetResponse as PassiveRadarObservationGetResponse,
    type PassiveRadarObservationQueryhelpResponse as PassiveRadarObservationQueryhelpResponse,
    type PassiveRadarObservationTupleResponse as PassiveRadarObservationTupleResponse,
    type PassiveRadarObservationListResponsesOffsetPage as PassiveRadarObservationListResponsesOffsetPage,
    type PassiveRadarObservationCreateParams as PassiveRadarObservationCreateParams,
    type PassiveRadarObservationListParams as PassiveRadarObservationListParams,
    type PassiveRadarObservationCountParams as PassiveRadarObservationCountParams,
    type PassiveRadarObservationCreateBulkParams as PassiveRadarObservationCreateBulkParams,
    type PassiveRadarObservationFileCreateParams as PassiveRadarObservationFileCreateParams,
    type PassiveRadarObservationGetParams as PassiveRadarObservationGetParams,
    type PassiveRadarObservationTupleParams as PassiveRadarObservationTupleParams,
  };

  export {
    Radarobservation as Radarobservation,
    type RadarobservationListResponse as RadarobservationListResponse,
    type RadarobservationCountResponse as RadarobservationCountResponse,
    type RadarobservationGetResponse as RadarobservationGetResponse,
    type RadarobservationQueryhelpResponse as RadarobservationQueryhelpResponse,
    type RadarobservationTupleResponse as RadarobservationTupleResponse,
    type RadarobservationListResponsesOffsetPage as RadarobservationListResponsesOffsetPage,
    type RadarobservationCreateParams as RadarobservationCreateParams,
    type RadarobservationListParams as RadarobservationListParams,
    type RadarobservationCountParams as RadarobservationCountParams,
    type RadarobservationCreateBulkParams as RadarobservationCreateBulkParams,
    type RadarobservationGetParams as RadarobservationGetParams,
    type RadarobservationTupleParams as RadarobservationTupleParams,
    type RadarobservationUnvalidatedPublishParams as RadarobservationUnvalidatedPublishParams,
  };

  export {
    RfObservation as RfObservation,
    type RfObservationListResponse as RfObservationListResponse,
    type RfObservationCountResponse as RfObservationCountResponse,
    type RfObservationGetResponse as RfObservationGetResponse,
    type RfObservationQueryhelpResponse as RfObservationQueryhelpResponse,
    type RfObservationTupleResponse as RfObservationTupleResponse,
    type RfObservationListResponsesOffsetPage as RfObservationListResponsesOffsetPage,
    type RfObservationCreateParams as RfObservationCreateParams,
    type RfObservationListParams as RfObservationListParams,
    type RfObservationCountParams as RfObservationCountParams,
    type RfObservationCreateBulkParams as RfObservationCreateBulkParams,
    type RfObservationGetParams as RfObservationGetParams,
    type RfObservationTupleParams as RfObservationTupleParams,
    type RfObservationUnvalidatedPublishParams as RfObservationUnvalidatedPublishParams,
  };

  export { Swir as Swir, type SwirUnvalidatedPublishParams as SwirUnvalidatedPublishParams };
}
