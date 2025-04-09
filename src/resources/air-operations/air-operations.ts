// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AirTaskingOrdersAPI from './air-tasking-orders';
import { AirTaskingOrderCreateBulkV2Params, AirTaskingOrders } from './air-tasking-orders';
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
  AircraftSortieListResponse,
  AircraftsortieAbridged,
  AircraftsortieFull,
} from './aircraft-sortie';
import * as AircraftSortiesAPI from './aircraft-sorties';
import { AircraftSorties, AircraftSortyCreateBulkV2Params } from './aircraft-sorties';
import * as AirspaceControlOrdersAPI from './airspace-control-orders';
import { AirspaceControlOrderCreateBulkV2Params, AirspaceControlOrders } from './airspace-control-orders';
import * as CrewpapersAPI from './crewpapers';
import { CrewpaperUnpublishParams, CrewpaperUploadPdfParams, Crewpapers } from './crewpapers';
import * as DiplomaticClearanceAPI from './diplomatic-clearance';
import {
  DiplomaticClearance,
  DiplomaticClearanceCreateBulkV2Params,
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
    type AirTaskingOrderCreateBulkV2Params as AirTaskingOrderCreateBulkV2Params,
  };

  export {
    AircraftSortie as AircraftSortie,
    type AircraftsortieAbridged as AircraftsortieAbridged,
    type AircraftsortieFull as AircraftsortieFull,
    type AircraftSortieListResponse as AircraftSortieListResponse,
    type AircraftSortieCountResponse as AircraftSortieCountResponse,
    type AircraftSortieHistoryCountResponse as AircraftSortieHistoryCountResponse,
    type AircraftSortieHistoryQueryResponse as AircraftSortieHistoryQueryResponse,
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
    type AircraftSortyCreateBulkV2Params as AircraftSortyCreateBulkV2Params,
  };

  export {
    AirspaceControlOrders as AirspaceControlOrders,
    type AirspaceControlOrderCreateBulkV2Params as AirspaceControlOrderCreateBulkV2Params,
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
    type DiplomaticClearanceCreateBulkV2Params as DiplomaticClearanceCreateBulkV2Params,
  };
}
