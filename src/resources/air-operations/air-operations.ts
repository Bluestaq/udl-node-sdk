// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AirEventsAPI from './air-events';
import { AirEventCreateParams, AirEvents } from './air-events';
import * as AirTaskingOrdersAPI from './air-tasking-orders';
import { AirTaskingOrderCreateParams, AirTaskingOrders } from './air-tasking-orders';
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
import { AircraftSorties, AircraftSortyCreateParams } from './aircraft-sorties';
import * as AirspaceControlOrdersAPI from './airspace-control-orders';
import { AirspaceControlOrderCreateParams, AirspaceControlOrders } from './airspace-control-orders';
import * as CrewpapersAPI from './crewpapers';
import { CrewpaperCreateParams, CrewpaperUnpublishParams, Crewpapers } from './crewpapers';
import * as DiplomaticClearancesAPI from './diplomatic-clearances';
import { DiplomaticClearances } from './diplomatic-clearances';
import * as FlightplansAPI from './flightplans';
import { Flightplans } from './flightplans';
import * as LogisticsSupportsAPI from './logistics-supports';
import { LogisticsSupports } from './logistics-supports';
import * as DiplomaticClearanceAPI from './diplomatic-clearance/diplomatic-clearance';
import {
  DiplomaticClearance,
  DiplomaticclearanceAbridged,
  DiplomaticclearanceFull,
} from './diplomatic-clearance/diplomatic-clearance';

export class AirOperations extends APIResource {
  crewpapers: CrewpapersAPI.Crewpapers = new CrewpapersAPI.Crewpapers(this._client);
  aircraftSorties: AircraftSortiesAPI.AircraftSorties = new AircraftSortiesAPI.AircraftSorties(this._client);
  airEvents: AirEventsAPI.AirEvents = new AirEventsAPI.AirEvents(this._client);
  airspaceControlOrders: AirspaceControlOrdersAPI.AirspaceControlOrders =
    new AirspaceControlOrdersAPI.AirspaceControlOrders(this._client);
  airTaskingOrders: AirTaskingOrdersAPI.AirTaskingOrders = new AirTaskingOrdersAPI.AirTaskingOrders(
    this._client,
  );
  aircraftSortie: AircraftSortieAPI.AircraftSortie = new AircraftSortieAPI.AircraftSortie(this._client);
  diplomaticClearances: DiplomaticClearancesAPI.DiplomaticClearances =
    new DiplomaticClearancesAPI.DiplomaticClearances(this._client);
  flightplans: FlightplansAPI.Flightplans = new FlightplansAPI.Flightplans(this._client);
  logisticsSupports: LogisticsSupportsAPI.LogisticsSupports = new LogisticsSupportsAPI.LogisticsSupports(
    this._client,
  );
  diplomaticClearance: DiplomaticClearanceAPI.DiplomaticClearance =
    new DiplomaticClearanceAPI.DiplomaticClearance(this._client);
}

AirOperations.Crewpapers = Crewpapers;
AirOperations.AircraftSorties = AircraftSorties;
AirOperations.AirEvents = AirEvents;
AirOperations.AirspaceControlOrders = AirspaceControlOrders;
AirOperations.AirTaskingOrders = AirTaskingOrders;
AirOperations.AircraftSortie = AircraftSortie;
AirOperations.DiplomaticClearances = DiplomaticClearances;
AirOperations.Flightplans = Flightplans;
AirOperations.LogisticsSupports = LogisticsSupports;
AirOperations.DiplomaticClearance = DiplomaticClearance;

export declare namespace AirOperations {
  export {
    Crewpapers as Crewpapers,
    type CrewpaperCreateParams as CrewpaperCreateParams,
    type CrewpaperUnpublishParams as CrewpaperUnpublishParams,
  };

  export { AircraftSorties as AircraftSorties, type AircraftSortyCreateParams as AircraftSortyCreateParams };

  export { AirEvents as AirEvents, type AirEventCreateParams as AirEventCreateParams };

  export {
    AirspaceControlOrders as AirspaceControlOrders,
    type AirspaceControlOrderCreateParams as AirspaceControlOrderCreateParams,
  };

  export {
    AirTaskingOrders as AirTaskingOrders,
    type AirTaskingOrderCreateParams as AirTaskingOrderCreateParams,
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

  export { DiplomaticClearances as DiplomaticClearances };

  export { Flightplans as Flightplans };

  export { LogisticsSupports as LogisticsSupports };

  export {
    DiplomaticClearance as DiplomaticClearance,
    type DiplomaticclearanceAbridged as DiplomaticclearanceAbridged,
    type DiplomaticclearanceFull as DiplomaticclearanceFull,
  };
}
