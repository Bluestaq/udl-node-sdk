// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AirTaskingOrdersAPI from './air-tasking-orders';
import {
  AirTaskingOrderCountParams,
  AirTaskingOrderCountResponse,
  AirTaskingOrderCreateParams,
  AirTaskingOrderFull,
  AirTaskingOrderListParams,
  AirTaskingOrderQueryHelpResponse,
  AirTaskingOrderRetrieveParams,
  AirTaskingOrderTupleParams,
  AirTaskingOrderTupleResponse,
  AirTaskingOrderUnvalidatedPublishParams,
  AirTaskingOrders,
  AirtaskingorderAbridged,
  AirtaskingorderAbridgedsOffsetPage,
} from './air-tasking-orders';
import * as AircraftSortieAPI from './aircraft-sortie';
import {
  AircraftSortie,
  AircraftSortieCountParams,
  AircraftSortieCountResponse,
  AircraftSortieCreateBulkParams,
  AircraftSortieCreateParams,
  AircraftSortieHistoryAodrParams,
  AircraftSortieHistoryCountParams,
  AircraftSortieHistoryCountResponse,
  AircraftSortieHistoryQueryParams,
  AircraftSortieHistoryQueryResponse,
  AircraftSortieListParams,
  AircraftsortieAbridged,
  AircraftsortieAbridgedsOffsetPage,
  AircraftsortieFull,
} from './aircraft-sortie';
import * as AircraftSortiesAPI from './aircraft-sorties';
import { AircraftSorties, AircraftSortyUnvalidatedPublishParams } from './aircraft-sorties';
import * as AirspaceControlOrdersAPI from './airspace-control-orders';
import {
  AirspaceControlOrderUnvalidatedPublishParams,
  AirspaceControlOrders,
} from './airspace-control-orders';
import * as CrewpapersAPI from './crewpapers';
import { CrewpaperUnpublishParams, CrewpaperUploadPdfParams, Crewpapers } from './crewpapers';
import * as DiplomaticClearanceAPI from './diplomatic-clearance';
import {
  DiplomaticClearance,
  DiplomaticClearanceUnvalidatedPublishParams,
  DiplomaticclearanceAbridged,
  DiplomaticclearanceFull,
} from './diplomatic-clearance';

export class AirOperations extends APIResource {
  airTaskingOrders: AirTaskingOrdersAPI.AirTaskingOrders = new AirTaskingOrdersAPI.AirTaskingOrders(
    this._client,
  );
  aircraftSortie: AircraftSortieAPI.AircraftSortie = new AircraftSortieAPI.AircraftSortie(this._client);
  aircraftSorties: AircraftSortiesAPI.AircraftSorties = new AircraftSortiesAPI.AircraftSorties(this._client);
  airspaceControlOrders: AirspaceControlOrdersAPI.AirspaceControlOrders =
    new AirspaceControlOrdersAPI.AirspaceControlOrders(this._client);
  crewpapers: CrewpapersAPI.Crewpapers = new CrewpapersAPI.Crewpapers(this._client);
  diplomaticClearance: DiplomaticClearanceAPI.DiplomaticClearance =
    new DiplomaticClearanceAPI.DiplomaticClearance(this._client);
}

AirOperations.AirTaskingOrders = AirTaskingOrders;
AirOperations.AircraftSortie = AircraftSortie;
AirOperations.AircraftSorties = AircraftSorties;
AirOperations.AirspaceControlOrders = AirspaceControlOrders;
AirOperations.Crewpapers = Crewpapers;
AirOperations.DiplomaticClearance = DiplomaticClearance;

export declare namespace AirOperations {
  export {
    AirTaskingOrders as AirTaskingOrders,
    type AirTaskingOrderFull as AirTaskingOrderFull,
    type AirtaskingorderAbridged as AirtaskingorderAbridged,
    type AirTaskingOrderCountResponse as AirTaskingOrderCountResponse,
    type AirTaskingOrderQueryHelpResponse as AirTaskingOrderQueryHelpResponse,
    type AirTaskingOrderTupleResponse as AirTaskingOrderTupleResponse,
    type AirtaskingorderAbridgedsOffsetPage as AirtaskingorderAbridgedsOffsetPage,
    type AirTaskingOrderCreateParams as AirTaskingOrderCreateParams,
    type AirTaskingOrderRetrieveParams as AirTaskingOrderRetrieveParams,
    type AirTaskingOrderListParams as AirTaskingOrderListParams,
    type AirTaskingOrderCountParams as AirTaskingOrderCountParams,
    type AirTaskingOrderTupleParams as AirTaskingOrderTupleParams,
    type AirTaskingOrderUnvalidatedPublishParams as AirTaskingOrderUnvalidatedPublishParams,
  };

  export {
    AircraftSortie as AircraftSortie,
    type AircraftsortieAbridged as AircraftsortieAbridged,
    type AircraftsortieFull as AircraftsortieFull,
    type AircraftSortieCountResponse as AircraftSortieCountResponse,
    type AircraftSortieHistoryCountResponse as AircraftSortieHistoryCountResponse,
    type AircraftSortieHistoryQueryResponse as AircraftSortieHistoryQueryResponse,
    type AircraftsortieAbridgedsOffsetPage as AircraftsortieAbridgedsOffsetPage,
    type AircraftSortieCreateParams as AircraftSortieCreateParams,
    type AircraftSortieListParams as AircraftSortieListParams,
    type AircraftSortieCountParams as AircraftSortieCountParams,
    type AircraftSortieCreateBulkParams as AircraftSortieCreateBulkParams,
    type AircraftSortieHistoryAodrParams as AircraftSortieHistoryAodrParams,
    type AircraftSortieHistoryCountParams as AircraftSortieHistoryCountParams,
    type AircraftSortieHistoryQueryParams as AircraftSortieHistoryQueryParams,
  };

  export {
    AircraftSorties as AircraftSorties,
    type AircraftSortyUnvalidatedPublishParams as AircraftSortyUnvalidatedPublishParams,
  };

  export {
    AirspaceControlOrders as AirspaceControlOrders,
    type AirspaceControlOrderUnvalidatedPublishParams as AirspaceControlOrderUnvalidatedPublishParams,
  };

  export {
    Crewpapers as Crewpapers,
    type CrewpaperUnpublishParams as CrewpaperUnpublishParams,
    type CrewpaperUploadPdfParams as CrewpaperUploadPdfParams,
  };

  export {
    DiplomaticClearance as DiplomaticClearance,
    type DiplomaticclearanceAbridged as DiplomaticclearanceAbridged,
    type DiplomaticclearanceFull as DiplomaticclearanceFull,
    type DiplomaticClearanceUnvalidatedPublishParams as DiplomaticClearanceUnvalidatedPublishParams,
  };
}
