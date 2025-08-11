// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AirTaskingOrdersAPI from './air-tasking-orders';
import {
  AirTaskingOrderCountParams,
  AirTaskingOrderCountResponse,
  AirTaskingOrderCreateParams,
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
import * as AircraftSortiesAPI from './aircraft-sorties';
import {
  AircraftSorties,
  AircraftSortyCountParams,
  AircraftSortyCountResponse,
  AircraftSortyCreateBulkParams,
  AircraftSortyCreateParams,
  AircraftSortyHistoryAodrParams,
  AircraftSortyHistoryCountParams,
  AircraftSortyHistoryCountResponse,
  AircraftSortyHistoryQueryParams,
  AircraftSortyHistoryQueryResponse,
  AircraftSortyListParams,
  AircraftSortyUnvalidatedPublishParams,
  AircraftsortieAbridged,
  AircraftsortieAbridgedsOffsetPage,
} from './aircraft-sorties';
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
} from './diplomatic-clearance';

export class AirOperations extends APIResource {
  airTaskingOrders: AirTaskingOrdersAPI.AirTaskingOrders = new AirTaskingOrdersAPI.AirTaskingOrders(
    this._client,
  );
  aircraftSorties: AircraftSortiesAPI.AircraftSorties = new AircraftSortiesAPI.AircraftSorties(this._client);
  airspaceControlOrders: AirspaceControlOrdersAPI.AirspaceControlOrders =
    new AirspaceControlOrdersAPI.AirspaceControlOrders(this._client);
  crewpapers: CrewpapersAPI.Crewpapers = new CrewpapersAPI.Crewpapers(this._client);
  diplomaticClearance: DiplomaticClearanceAPI.DiplomaticClearance =
    new DiplomaticClearanceAPI.DiplomaticClearance(this._client);
}

AirOperations.AirTaskingOrders = AirTaskingOrders;
AirOperations.AircraftSorties = AircraftSorties;
AirOperations.AirspaceControlOrders = AirspaceControlOrders;
AirOperations.Crewpapers = Crewpapers;
AirOperations.DiplomaticClearance = DiplomaticClearance;

export declare namespace AirOperations {
  export {
    AirTaskingOrders as AirTaskingOrders,
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
    AircraftSorties as AircraftSorties,
    type AircraftsortieAbridged as AircraftsortieAbridged,
    type AircraftSortyCountResponse as AircraftSortyCountResponse,
    type AircraftSortyHistoryCountResponse as AircraftSortyHistoryCountResponse,
    type AircraftSortyHistoryQueryResponse as AircraftSortyHistoryQueryResponse,
    type AircraftsortieAbridgedsOffsetPage as AircraftsortieAbridgedsOffsetPage,
    type AircraftSortyCreateParams as AircraftSortyCreateParams,
    type AircraftSortyListParams as AircraftSortyListParams,
    type AircraftSortyCountParams as AircraftSortyCountParams,
    type AircraftSortyCreateBulkParams as AircraftSortyCreateBulkParams,
    type AircraftSortyHistoryAodrParams as AircraftSortyHistoryAodrParams,
    type AircraftSortyHistoryCountParams as AircraftSortyHistoryCountParams,
    type AircraftSortyHistoryQueryParams as AircraftSortyHistoryQueryParams,
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
    type DiplomaticClearanceUnvalidatedPublishParams as DiplomaticClearanceUnvalidatedPublishParams,
  };
}
