// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Pagination from './core/pagination';
import { AbstractPage, type OffsetPageParams, OffsetPageResponse } from './core/pagination';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  AirEventCountParams,
  AirEventCountResponse,
  AirEventCreateBulkParams,
  AirEventCreateParams,
  AirEventGetParams,
  AirEventGetResponse,
  AirEventListParams,
  AirEventListResponse,
  AirEventListResponsesOffsetPage,
  AirEventQueryhelpResponse,
  AirEventTupleParams,
  AirEventTupleResponse,
  AirEventUnvalidatedPublishParams,
  AirEventUpdateParams,
  AirEvents,
} from './resources/air-events';
import {
  Aircraft,
  AircraftAbridged,
  AircraftAbridgedsOffsetPage,
  AircraftCountParams,
  AircraftCountResponse,
  AircraftCreateParams,
  AircraftListParams,
  AircraftQueryhelpResponse,
  AircraftRetrieveParams,
  AircraftTupleParams,
  AircraftTupleResponse,
  AircraftUpdateParams,
} from './resources/aircraft';
import {
  AircraftSorties,
  AircraftSortyQueryhelpResponse,
  AircraftSortyRetrieveParams,
  AircraftSortyTupleParams,
  AircraftSortyTupleResponse,
  AircraftSortyUpdateParams,
} from './resources/aircraft-sorties';
import {
  AircraftStatusRemarkCountParams,
  AircraftStatusRemarkCountResponse,
  AircraftStatusRemarkCreateParams,
  AircraftStatusRemarkListParams,
  AircraftStatusRemarkQueryhelpResponse,
  AircraftStatusRemarkRetrieveParams,
  AircraftStatusRemarkTupleParams,
  AircraftStatusRemarkTupleResponse,
  AircraftStatusRemarkUpdateParams,
  AircraftStatusRemarks,
  AircraftstatusremarkAbridged,
  AircraftstatusremarkAbridgedsOffsetPage,
} from './resources/aircraft-status-remarks';
import {
  AirfieldSlotConsumptionCountParams,
  AirfieldSlotConsumptionCountResponse,
  AirfieldSlotConsumptionCreateParams,
  AirfieldSlotConsumptionListParams,
  AirfieldSlotConsumptionQueryhelpResponse,
  AirfieldSlotConsumptionRetrieveParams,
  AirfieldSlotConsumptionTupleParams,
  AirfieldSlotConsumptionTupleResponse,
  AirfieldSlotConsumptionUpdateParams,
  AirfieldSlotConsumptions,
  AirfieldslotconsumptionAbridged,
  AirfieldslotconsumptionAbridgedsOffsetPage,
} from './resources/airfield-slot-consumptions';
import {
  AirfieldSlotCountParams,
  AirfieldSlotCountResponse,
  AirfieldSlotCreateParams,
  AirfieldSlotListParams,
  AirfieldSlotQueryhelpResponse,
  AirfieldSlotRetrieveParams,
  AirfieldSlotTupleParams,
  AirfieldSlotTupleResponse,
  AirfieldSlotUpdateParams,
  AirfieldSlots,
  AirfieldslotAbridged,
  AirfieldslotAbridgedsOffsetPage,
} from './resources/airfield-slots';
import {
  AirfieldAbridged,
  AirfieldAbridgedsOffsetPage,
  AirfieldCountParams,
  AirfieldCountResponse,
  AirfieldCreateParams,
  AirfieldListParams,
  AirfieldQueryhelpResponse,
  AirfieldRetrieveParams,
  AirfieldTupleParams,
  AirfieldTupleResponse,
  AirfieldUpdateParams,
  Airfields,
} from './resources/airfields';
import {
  AirloadPlanCountParams,
  AirloadPlanCountResponse,
  AirloadPlanCreateParams,
  AirloadPlanListParams,
  AirloadPlanQueryhelpResponse,
  AirloadPlanRetrieveParams,
  AirloadPlanTupleParams,
  AirloadPlanTupleResponse,
  AirloadPlanUpdateParams,
  AirloadPlans,
  AirloadplanAbridged,
  AirloadplanAbridgedsOffsetPage,
} from './resources/airload-plans';
import {
  AirspaceControlOrderCountParams,
  AirspaceControlOrderCountResponse,
  AirspaceControlOrderCreateBulkParams,
  AirspaceControlOrderCreateParams,
  AirspaceControlOrderListParams,
  AirspaceControlOrderQueryHelpResponse,
  AirspaceControlOrderRetrieveParams,
  AirspaceControlOrderTupleParams,
  AirspaceControlOrderTupleResponse,
  AirspaceControlOrders,
  AirspacecontrolorderAbridged,
  AirspacecontrolorderAbridgedsOffsetPage,
} from './resources/airspace-control-orders';
import { AIsObjectUnvalidatedPublishParams, AIsObjects } from './resources/ais-objects';
import {
  AntennaAbridged,
  AntennaAbridgedsOffsetPage,
  AntennaCountParams,
  AntennaCountResponse,
  AntennaCreateParams,
  AntennaListParams,
  AntennaQueryhelpResponse,
  AntennaRetrieveParams,
  AntennaTupleParams,
  AntennaTupleResponse,
  AntennaUpdateParams,
  Antennas,
} from './resources/antennas';
import {
  AttitudeData,
  AttitudeDataQueryHelpResponse,
  AttitudeDataTupleParams,
  AttitudeDataTupleResponse,
} from './resources/attitude-data';
import {
  AviationRiskManagement,
  AviationRiskManagementCountParams,
  AviationRiskManagementCountResponse,
  AviationRiskManagementCreateBulkParams,
  AviationRiskManagementCreateParams,
  AviationRiskManagementListParams,
  AviationRiskManagementListResponse,
  AviationRiskManagementListResponsesOffsetPage,
  AviationRiskManagementQueryHelpResponse,
  AviationRiskManagementRetrieveParams,
  AviationRiskManagementRetrieveResponse,
  AviationRiskManagementTupleParams,
  AviationRiskManagementTupleResponse,
  AviationRiskManagementUnvalidatedPublishParams,
  AviationRiskManagementUpdateParams,
} from './resources/aviation-risk-management';
import {
  Batteries,
  BatteryAbridged,
  BatteryAbridgedsOffsetPage,
  BatteryCountParams,
  BatteryCountResponse,
  BatteryCreateParams,
  BatteryListParams,
  BatteryQueryhelpResponse,
  BatteryRetrieveParams,
  BatteryTupleParams,
  BatteryTupleResponse,
  BatteryUpdateParams,
} from './resources/batteries';
import {
  BatterydetailCreateParams,
  BatterydetailListParams,
  BatterydetailRetrieveParams,
  BatterydetailUpdateParams,
  Batterydetails,
  BatterydetailsAbridged,
  BatterydetailsAbridgedsOffsetPage,
} from './resources/batterydetails';
import {
  Beam,
  BeamAbridged,
  BeamAbridgedsOffsetPage,
  BeamCountParams,
  BeamCountResponse,
  BeamCreateParams,
  BeamListParams,
  BeamQueryHelpResponse,
  BeamRetrieveParams,
  BeamTupleParams,
  BeamTupleResponse,
  BeamUpdateParams,
} from './resources/beam';
import {
  BeamContourCountParams,
  BeamContourCountResponse,
  BeamContourCreateBulkParams,
  BeamContourCreateParams,
  BeamContourListParams,
  BeamContourQueryHelpResponse,
  BeamContourRetrieveParams,
  BeamContourTupleParams,
  BeamContourTupleResponse,
  BeamContourUpdateParams,
  BeamContours,
  BeamcontourAbridged,
  BeamcontourAbridgedsOffsetPage,
} from './resources/beam-contours';
import {
  BusAbridged,
  BusAbridgedsOffsetPage,
  BusCountParams,
  BusCountResponse,
  BusCreateParams,
  BusListParams,
  BusQueryHelpResponse,
  BusRetrieveParams,
  BusTupleParams,
  BusTupleResponse,
  BusUpdateParams,
  Buses,
} from './resources/buses';
import {
  ChannelAbridged,
  ChannelAbridgedsOffsetPage,
  ChannelCountParams,
  ChannelCountResponse,
  ChannelCreateParams,
  ChannelListParams,
  ChannelQueryhelpResponse,
  ChannelRetrieveParams,
  ChannelTupleParams,
  ChannelTupleResponse,
  ChannelUpdateParams,
  Channels,
} from './resources/channels';
import {
  Comm,
  CommAbridged,
  CommAbridgedsOffsetPage,
  CommCountParams,
  CommCountResponse,
  CommCreateParams,
  CommListParams,
  CommQueryhelpResponse,
  CommRetrieveParams,
  CommTupleParams,
  CommTupleResponse,
  CommUpdateParams,
} from './resources/comm';
import { CotCreateParams, Cots } from './resources/cots';
import {
  Countries,
  CountryAbridged,
  CountryAbridgedsOffsetPage,
  CountryCountParams,
  CountryCountResponse,
  CountryCreateParams,
  CountryListParams,
  CountryQueryhelpResponse,
  CountryRetrieveParams,
  CountryTupleParams,
  CountryTupleResponse,
  CountryUpdateParams,
} from './resources/countries';
import {
  Crew,
  CrewAbridged,
  CrewAbridgedsOffsetPage,
  CrewCountParams,
  CrewCountResponse,
  CrewCreateParams,
  CrewListParams,
  CrewQueryhelpResponse,
  CrewRetrieveParams,
  CrewTupleParams,
  CrewTupleResponse,
  CrewUnvalidatedPublishParams,
  CrewUpdateParams,
} from './resources/crew';
import {
  DriftHistory,
  DriftHistoryCountParams,
  DriftHistoryCountResponse,
  DriftHistoryListParams,
  DriftHistoryQueryhelpResponse,
  DriftHistoryRetrieveParams,
  DriftHistoryTupleParams,
  DriftHistoryTupleResponse,
} from './resources/drift-history';
import {
  Dropzone,
  DropzoneCountParams,
  DropzoneCountResponse,
  DropzoneCreateBulkParams,
  DropzoneCreateParams,
  DropzoneListParams,
  DropzoneListResponse,
  DropzoneListResponsesOffsetPage,
  DropzoneQueryHelpResponse,
  DropzoneRetrieveParams,
  DropzoneRetrieveResponse,
  DropzoneTupleParams,
  DropzoneTupleResponse,
  DropzoneUnvalidatedPublishParams,
  DropzoneUpdateParams,
} from './resources/dropzone';
import {
  EmitterGeolocation,
  EmitterGeolocationCountParams,
  EmitterGeolocationCountResponse,
  EmitterGeolocationCreateBulkParams,
  EmitterGeolocationCreateParams,
  EmitterGeolocationListParams,
  EmitterGeolocationListResponse,
  EmitterGeolocationListResponsesOffsetPage,
  EmitterGeolocationQueryHelpResponse,
  EmitterGeolocationRetrieveParams,
  EmitterGeolocationRetrieveResponse,
  EmitterGeolocationTupleParams,
  EmitterGeolocationTupleResponse,
  EmitterGeolocationUnvalidatedPublishParams,
} from './resources/emitter-geolocation';
import {
  EngineDetailCreateParams,
  EngineDetailListParams,
  EngineDetailRetrieveParams,
  EngineDetailUpdateParams,
  EngineDetails,
  EngineDetailsAbridged,
  EngineDetailsAbridgedsOffsetPage,
} from './resources/engine-details';
import {
  EngineAbridged,
  EngineAbridgedsOffsetPage,
  EngineCountParams,
  EngineCountResponse,
  EngineCreateParams,
  EngineListParams,
  EngineQueryhelpResponse,
  EngineRetrieveParams,
  EngineTupleParams,
  EngineTupleResponse,
  EngineUpdateParams,
  Engines,
} from './resources/engines';
import {
  Entities,
  EntityAbridged,
  EntityAbridgedsOffsetPage,
  EntityCountParams,
  EntityCountResponse,
  EntityCreateParams,
  EntityGetAllTypesParams,
  EntityGetAllTypesResponse,
  EntityIngest,
  EntityListParams,
  EntityQueryHelpResponse,
  EntityRetrieveParams,
  EntityTupleParams,
  EntityTupleResponse,
  EntityUpdateParams,
} from './resources/entities';
import {
  Equipment,
  EquipmentAbridged,
  EquipmentAbridgedsOffsetPage,
  EquipmentCountParams,
  EquipmentCountResponse,
  EquipmentCreateBulkParams,
  EquipmentCreateParams,
  EquipmentFull,
  EquipmentListParams,
  EquipmentQueryHelpResponse,
  EquipmentRetrieveParams,
  EquipmentTupleParams,
  EquipmentTupleResponse,
  EquipmentUpdateParams,
} from './resources/equipment';
import {
  EquipmentRemarkAbridged,
  EquipmentRemarkAbridgedsOffsetPage,
  EquipmentRemarkCountParams,
  EquipmentRemarkCountResponse,
  EquipmentRemarkCreateBulkParams,
  EquipmentRemarkCreateParams,
  EquipmentRemarkFull,
  EquipmentRemarkListParams,
  EquipmentRemarkQueryHelpResponse,
  EquipmentRemarkRetrieveParams,
  EquipmentRemarkTupleParams,
  EquipmentRemarkTupleResponse,
  EquipmentRemarks,
} from './resources/equipment-remarks';
import {
  FlightPlanAbridged,
  FlightPlanAbridgedsOffsetPage,
  Flightplan,
  FlightplanCountParams,
  FlightplanCountResponse,
  FlightplanCreateParams,
  FlightplanListParams,
  FlightplanQueryhelpResponse,
  FlightplanRetrieveParams,
  FlightplanTupleParams,
  FlightplanTupleResponse,
  FlightplanUnvalidatedPublishParams,
  FlightplanUpdateParams,
} from './resources/flightplan';
import {
  H3GeoHexCell,
  H3GeoHexCellCountParams,
  H3GeoHexCellCountResponse,
  H3GeoHexCellListParams,
  H3GeoHexCellListResponse,
  H3GeoHexCellListResponsesOffsetPage,
  H3GeoHexCellQueryhelpResponse,
  H3GeoHexCellTupleParams,
  H3GeoHexCellTupleResponse,
} from './resources/h3-geo-hex-cell';
import {
  Ir,
  IrCountParams,
  IrCountResponse,
  IrCreateParams,
  IrGetParams,
  IrGetResponse,
  IrListParams,
  IrListResponse,
  IrListResponsesOffsetPage,
  IrQueryhelpResponse,
  IrTupleParams,
  IrTupleResponse,
  IrUpdateParams,
} from './resources/ir';
import {
  Item,
  ItemCountParams,
  ItemCountResponse,
  ItemCreateParams,
  ItemGetParams,
  ItemGetResponse,
  ItemListParams,
  ItemListResponse,
  ItemListResponsesOffsetPage,
  ItemQueryhelpResponse,
  ItemTupleParams,
  ItemTupleResponse,
  ItemUnvalidatedPublishParams,
  ItemUpdateParams,
} from './resources/item';
import {
  LaunchDetection,
  LaunchDetectionCountParams,
  LaunchDetectionCountResponse,
  LaunchDetectionCreateParams,
  LaunchDetectionGetParams,
  LaunchDetectionGetResponse,
  LaunchDetectionListParams,
  LaunchDetectionListResponse,
  LaunchDetectionListResponsesOffsetPage,
  LaunchDetectionQueryhelpResponse,
  LaunchDetectionTupleParams,
  LaunchDetectionTupleResponse,
  LaunchDetectionUpdateParams,
} from './resources/launch-detection';
import {
  LaunchSite,
  LaunchSiteCountParams,
  LaunchSiteCountResponse,
  LaunchSiteCreateParams,
  LaunchSiteGetParams,
  LaunchSiteGetResponse,
  LaunchSiteListParams,
  LaunchSiteListResponse,
  LaunchSiteListResponsesOffsetPage,
  LaunchSiteQueryhelpResponse,
  LaunchSiteTupleParams,
  LaunchSiteTupleResponse,
  LaunchSiteUpdateParams,
} from './resources/launch-site';
import {
  LaunchSiteDetailCreateParams,
  LaunchSiteDetailFindBySourceParams,
  LaunchSiteDetailFindBySourceResponse,
  LaunchSiteDetailGetParams,
  LaunchSiteDetailGetResponse,
  LaunchSiteDetailListParams,
  LaunchSiteDetailListResponse,
  LaunchSiteDetailListResponsesOffsetPage,
  LaunchSiteDetailUpdateParams,
  LaunchSiteDetails,
} from './resources/launch-site-details';
import {
  LaunchVehicle,
  LaunchVehicleCountParams,
  LaunchVehicleCountResponse,
  LaunchVehicleCreateParams,
  LaunchVehicleGetParams,
  LaunchVehicleGetResponse,
  LaunchVehicleListParams,
  LaunchVehicleListResponse,
  LaunchVehicleListResponsesOffsetPage,
  LaunchVehicleQueryhelpResponse,
  LaunchVehicleTupleParams,
  LaunchVehicleTupleResponse,
  LaunchVehicleUpdateParams,
} from './resources/launch-vehicle';
import {
  LaunchVehicleDetailCreateParams,
  LaunchVehicleDetailGetParams,
  LaunchVehicleDetailGetResponse,
  LaunchVehicleDetailListParams,
  LaunchVehicleDetailListResponse,
  LaunchVehicleDetailListResponsesOffsetPage,
  LaunchVehicleDetailUpdateParams,
  LaunchVehicleDetails,
} from './resources/launch-vehicle-details';
import { Linkstatus, LinkstatusUpdateParams } from './resources/linkstatus';
import {
  Location,
  LocationCountParams,
  LocationCountResponse,
  LocationCreateParams,
  LocationGetParams,
  LocationIngest,
  LocationListParams,
  LocationQueryhelpResponse,
  LocationTupleParams,
  LocationTupleResponse,
  LocationUpdateParams,
} from './resources/location';
import {
  Manifold,
  ManifoldCountParams,
  ManifoldCountResponse,
  ManifoldCreateBulkParams,
  ManifoldCreateParams,
  ManifoldGetParams,
  ManifoldGetResponse,
  ManifoldListParams,
  ManifoldListResponse,
  ManifoldListResponsesOffsetPage,
  ManifoldQueryhelpResponse,
  ManifoldTupleParams,
  ManifoldTupleResponse,
  ManifoldUpdateParams,
} from './resources/manifold';
import {
  Manifoldelset,
  ManifoldelsetCountParams,
  ManifoldelsetCountResponse,
  ManifoldelsetCreateBulkParams,
  ManifoldelsetCreateParams,
  ManifoldelsetGetParams,
  ManifoldelsetGetResponse,
  ManifoldelsetListParams,
  ManifoldelsetListResponse,
  ManifoldelsetListResponsesOffsetPage,
  ManifoldelsetQueryhelpResponse,
  ManifoldelsetTupleParams,
  ManifoldelsetTupleResponse,
  ManifoldelsetUpdateParams,
} from './resources/manifoldelset';
import {
  Navigation,
  NavigationCountParams,
  NavigationCountResponse,
  NavigationCreateParams,
  NavigationGetParams,
  NavigationGetResponse,
  NavigationListParams,
  NavigationListResponse,
  NavigationListResponsesOffsetPage,
  NavigationQueryhelpResponse,
  NavigationTupleParams,
  NavigationTupleResponse,
  NavigationUpdateParams,
} from './resources/navigation';
import {
  NavigationalObstruction,
  NavigationalObstructionCountParams,
  NavigationalObstructionCountResponse,
  NavigationalObstructionCreateBulkParams,
  NavigationalObstructionCreateParams,
  NavigationalObstructionGetParams,
  NavigationalObstructionGetResponse,
  NavigationalObstructionListParams,
  NavigationalObstructionListResponse,
  NavigationalObstructionListResponsesOffsetPage,
  NavigationalObstructionQueryhelpResponse,
  NavigationalObstructionTupleParams,
  NavigationalObstructionTupleResponse,
  NavigationalObstructionUpdateParams,
} from './resources/navigational-obstruction';
import {
  ObjectOfInterest,
  ObjectOfInterestCountParams,
  ObjectOfInterestCountResponse,
  ObjectOfInterestCreateParams,
  ObjectOfInterestGetParams,
  ObjectOfInterestGetResponse,
  ObjectOfInterestListParams,
  ObjectOfInterestListResponse,
  ObjectOfInterestListResponsesOffsetPage,
  ObjectOfInterestQueryhelpResponse,
  ObjectOfInterestTupleParams,
  ObjectOfInterestTupleResponse,
  ObjectOfInterestUpdateParams,
} from './resources/object-of-interest';
import {
  Onorbitantenna,
  OnorbitantennaCreateParams,
  OnorbitantennaGetParams,
  OnorbitantennaListParams,
  OnorbitantennaListResponse,
  OnorbitantennaListResponsesOffsetPage,
  OnorbitantennaUpdateParams,
} from './resources/onorbitantenna';
import {
  Onorbitbattery,
  OnorbitbatteryCreateParams,
  OnorbitbatteryGetParams,
  OnorbitbatteryListParams,
  OnorbitbatteryListResponse,
  OnorbitbatteryListResponsesOffsetPage,
  OnorbitbatteryUpdateParams,
} from './resources/onorbitbattery';
import {
  OnorbitdetailCreateParams,
  OnorbitdetailGetParams,
  OnorbitdetailListParams,
  OnorbitdetailListResponse,
  OnorbitdetailListResponsesOffsetPage,
  OnorbitdetailUpdateParams,
  Onorbitdetails,
} from './resources/onorbitdetails';
import {
  Onorbitevent,
  OnorbiteventCountParams,
  OnorbiteventCountResponse,
  OnorbiteventCreateParams,
  OnorbiteventGetParams,
  OnorbiteventGetResponse,
  OnorbiteventListParams,
  OnorbiteventListResponse,
  OnorbiteventListResponsesOffsetPage,
  OnorbiteventQueryhelpResponse,
  OnorbiteventTupleParams,
  OnorbiteventTupleResponse,
  OnorbiteventUpdateParams,
} from './resources/onorbitevent';
import {
  Onorbitlist,
  OnorbitlistCountParams,
  OnorbitlistCountResponse,
  OnorbitlistCreateParams,
  OnorbitlistGetParams,
  OnorbitlistGetResponse,
  OnorbitlistListParams,
  OnorbitlistListResponse,
  OnorbitlistListResponsesOffsetPage,
  OnorbitlistQueryhelpResponse,
  OnorbitlistTupleParams,
  OnorbitlistTupleResponse,
  OnorbitlistUpdateParams,
} from './resources/onorbitlist';
import {
  Onorbitsolararray,
  OnorbitsolararrayCreateParams,
  OnorbitsolararrayGetParams,
  OnorbitsolararrayListParams,
  OnorbitsolararrayListResponse,
  OnorbitsolararrayListResponsesOffsetPage,
  OnorbitsolararrayUpdateParams,
} from './resources/onorbitsolararray';
import {
  Onorbitthruster,
  OnorbitthrusterCreateParams,
  OnorbitthrusterGetParams,
  OnorbitthrusterListParams,
  OnorbitthrusterListResponse,
  OnorbitthrusterListResponsesOffsetPage,
  OnorbitthrusterUpdateParams,
} from './resources/onorbitthruster';
import {
  Operatingunit,
  OperatingunitCountParams,
  OperatingunitCountResponse,
  OperatingunitCreateParams,
  OperatingunitGetParams,
  OperatingunitListParams,
  OperatingunitListResponse,
  OperatingunitListResponsesOffsetPage,
  OperatingunitQueryhelpResponse,
  OperatingunitTupleParams,
  OperatingunitTupleResponse,
  OperatingunitUpdateParams,
} from './resources/operatingunit';
import {
  Operatingunitremark,
  OperatingunitremarkCountParams,
  OperatingunitremarkCountResponse,
  OperatingunitremarkCreateBulkParams,
  OperatingunitremarkCreateParams,
  OperatingunitremarkGetParams,
  OperatingunitremarkListParams,
  OperatingunitremarkListResponse,
  OperatingunitremarkListResponsesOffsetPage,
  OperatingunitremarkQueryhelpResponse,
  OperatingunitremarkTupleParams,
  OperatingunitremarkTupleResponse,
} from './resources/operatingunitremark';
import {
  Organization,
  OrganizationCountParams,
  OrganizationCountResponse,
  OrganizationCreateParams,
  OrganizationGetOrganizationCategoriesParams,
  OrganizationGetOrganizationCategoriesResponse,
  OrganizationGetOrganizationTypesParams,
  OrganizationGetOrganizationTypesResponse,
  OrganizationGetParams,
  OrganizationListParams,
  OrganizationListResponse,
  OrganizationListResponsesOffsetPage,
  OrganizationQueryhelpResponse,
  OrganizationTupleParams,
  OrganizationTupleResponse,
  OrganizationUpdateParams,
} from './resources/organization';
import {
  OrganizationdetailCreateParams,
  OrganizationdetailFindBySourceParams,
  OrganizationdetailFindBySourceResponse,
  OrganizationdetailGetParams,
  OrganizationdetailListParams,
  OrganizationdetailListResponse,
  OrganizationdetailListResponsesOffsetPage,
  OrganizationdetailUpdateParams,
  Organizationdetails,
} from './resources/organizationdetails';
import {
  Poi,
  PoiCountParams,
  PoiCountResponse,
  PoiCreateBulkParams,
  PoiCreateParams,
  PoiGetParams,
  PoiGetResponse,
  PoiListParams,
  PoiListResponse,
  PoiListResponsesOffsetPage,
  PoiQueryhelpResponse,
  PoiTupleParams,
  PoiTupleResponse,
  PoiUnvalidatedPublishParams,
} from './resources/poi';
import {
  Port,
  PortCountParams,
  PortCountResponse,
  PortCreateBulkParams,
  PortCreateParams,
  PortGetParams,
  PortGetResponse,
  PortListParams,
  PortListResponse,
  PortListResponsesOffsetPage,
  PortQueryhelpResponse,
  PortTupleParams,
  PortTupleResponse,
  PortUpdateParams,
} from './resources/port';
import {
  RfBand,
  RfBandCountParams,
  RfBandCountResponse,
  RfBandCreateParams,
  RfBandGetParams,
  RfBandListParams,
  RfBandListResponse,
  RfBandListResponsesOffsetPage,
  RfBandQueryhelpResponse,
  RfBandTupleParams,
  RfBandTupleResponse,
  RfBandUpdateParams,
} from './resources/rf-band';
import {
  RfBandType,
  RfBandTypeCountParams,
  RfBandTypeCountResponse,
  RfBandTypeCreateParams,
  RfBandTypeGetParams,
  RfBandTypeGetResponse,
  RfBandTypeListParams,
  RfBandTypeListResponse,
  RfBandTypeListResponsesOffsetPage,
  RfBandTypeQueryhelpResponse,
  RfBandTypeTupleParams,
  RfBandTypeTupleResponse,
  RfBandTypeUpdateParams,
} from './resources/rf-band-type';
import {
  RouteStatCountParams,
  RouteStatCountResponse,
  RouteStatCreateBulkParams,
  RouteStatCreateParams,
  RouteStatListParams,
  RouteStatListResponse,
  RouteStatListResponsesOffsetPage,
  RouteStatQueryHelpResponse,
  RouteStatRetrieveParams,
  RouteStatRetrieveResponse,
  RouteStatTupleParams,
  RouteStatTupleResponse,
  RouteStatUnvalidatedPublishParams,
  RouteStatUpdateParams,
  RouteStats,
} from './resources/route-stats';
import {
  Scientific,
  ScientificCountParams,
  ScientificCountResponse,
  ScientificCreateParams,
  ScientificGetParams,
  ScientificGetResponse,
  ScientificListParams,
  ScientificListResponse,
  ScientificListResponsesOffsetPage,
  ScientificQueryhelpResponse,
  ScientificTupleParams,
  ScientificTupleResponse,
  ScientificUpdateParams,
} from './resources/scientific';
import {
  SecureMessaging,
  SecureMessagingDescribeTopicParams,
  SecureMessagingGetLatestOffsetParams,
  SecureMessagingGetMessagesParams,
  SecureMessagingListTopicsResponse,
  TopicDetails,
} from './resources/secure-messaging';
import {
  SensorObservationType,
  SensorObservationTypeGetParams,
  SensorObservationTypeGetResponse,
  SensorObservationTypeListParams,
  SensorObservationTypeListResponse,
  SensorObservationTypeListResponsesOffsetPage,
} from './resources/sensor-observation-type';
import {
  SensorStating,
  SensorStatingCreateBulkParams,
  SensorStatingCreateParams,
  SensorStatingGetParams,
  SensorStatingGetResponse,
  SensorStatingListParams,
  SensorStatingListResponse,
  SensorStatingListResponsesOffsetPage,
  SensorStatingQueryhelpResponse,
  SensorStatingUpdateParams,
} from './resources/sensor-stating';
import {
  SensorType,
  SensorTypeGetParams,
  SensorTypeGetResponse,
  SensorTypeListParams,
  SensorTypeListResponse,
  SensorTypeListResponsesOffsetPage,
} from './resources/sensor-type';
import {
  SeraDataCommDetailCountParams,
  SeraDataCommDetailCountResponse,
  SeraDataCommDetailCreateParams,
  SeraDataCommDetailGetParams,
  SeraDataCommDetailGetResponse,
  SeraDataCommDetailListParams,
  SeraDataCommDetailListResponse,
  SeraDataCommDetailListResponsesOffsetPage,
  SeraDataCommDetailQueryhelpResponse,
  SeraDataCommDetailTupleParams,
  SeraDataCommDetailTupleResponse,
  SeraDataCommDetailUpdateParams,
  SeraDataCommDetails,
} from './resources/sera-data-comm-details';
import {
  SeraDataEarlyWarning,
  SeraDataEarlyWarningCountParams,
  SeraDataEarlyWarningCountResponse,
  SeraDataEarlyWarningCreateParams,
  SeraDataEarlyWarningGetParams,
  SeraDataEarlyWarningGetResponse,
  SeraDataEarlyWarningListParams,
  SeraDataEarlyWarningListResponse,
  SeraDataEarlyWarningListResponsesOffsetPage,
  SeraDataEarlyWarningQueryhelpResponse,
  SeraDataEarlyWarningTupleParams,
  SeraDataEarlyWarningTupleResponse,
  SeraDataEarlyWarningUpdateParams,
} from './resources/sera-data-early-warning';
import {
  SeraDataNavigation,
  SeraDataNavigationCountParams,
  SeraDataNavigationCountResponse,
  SeraDataNavigationCreateParams,
  SeraDataNavigationGetParams,
  SeraDataNavigationGetResponse,
  SeraDataNavigationListParams,
  SeraDataNavigationListResponse,
  SeraDataNavigationListResponsesOffsetPage,
  SeraDataNavigationQueryhelpResponse,
  SeraDataNavigationTupleParams,
  SeraDataNavigationTupleResponse,
  SeraDataNavigationUpdateParams,
} from './resources/sera-data-navigation';
import {
  SeradataOpticalPayload,
  SeradataOpticalPayloadCountParams,
  SeradataOpticalPayloadCountResponse,
  SeradataOpticalPayloadCreateParams,
  SeradataOpticalPayloadGetParams,
  SeradataOpticalPayloadGetResponse,
  SeradataOpticalPayloadListParams,
  SeradataOpticalPayloadListResponse,
  SeradataOpticalPayloadListResponsesOffsetPage,
  SeradataOpticalPayloadQueryhelpResponse,
  SeradataOpticalPayloadTupleParams,
  SeradataOpticalPayloadTupleResponse,
  SeradataOpticalPayloadUpdateParams,
} from './resources/seradata-optical-payload';
import {
  SeradataRadarPayload,
  SeradataRadarPayloadCountParams,
  SeradataRadarPayloadCountResponse,
  SeradataRadarPayloadCreateParams,
  SeradataRadarPayloadGetParams,
  SeradataRadarPayloadGetResponse,
  SeradataRadarPayloadListParams,
  SeradataRadarPayloadListResponse,
  SeradataRadarPayloadListResponsesOffsetPage,
  SeradataRadarPayloadQueryhelpResponse,
  SeradataRadarPayloadTupleParams,
  SeradataRadarPayloadTupleResponse,
  SeradataRadarPayloadUpdateParams,
} from './resources/seradata-radar-payload';
import {
  SeradataSigintPayload,
  SeradataSigintPayloadCountParams,
  SeradataSigintPayloadCountResponse,
  SeradataSigintPayloadCreateParams,
  SeradataSigintPayloadGetParams,
  SeradataSigintPayloadGetResponse,
  SeradataSigintPayloadListParams,
  SeradataSigintPayloadListResponse,
  SeradataSigintPayloadListResponsesOffsetPage,
  SeradataSigintPayloadQueryhelpResponse,
  SeradataSigintPayloadTupleParams,
  SeradataSigintPayloadTupleResponse,
  SeradataSigintPayloadUpdateParams,
} from './resources/seradata-sigint-payload';
import {
  SeradataSpacecraftDetailCountParams,
  SeradataSpacecraftDetailCountResponse,
  SeradataSpacecraftDetailCreateParams,
  SeradataSpacecraftDetailGetParams,
  SeradataSpacecraftDetailGetResponse,
  SeradataSpacecraftDetailListParams,
  SeradataSpacecraftDetailListResponse,
  SeradataSpacecraftDetailListResponsesOffsetPage,
  SeradataSpacecraftDetailQueryhelpResponse,
  SeradataSpacecraftDetailTupleParams,
  SeradataSpacecraftDetailTupleResponse,
  SeradataSpacecraftDetailUpdateParams,
  SeradataSpacecraftDetails,
} from './resources/seradata-spacecraft-details';
import {
  SiteRemark,
  SiteRemarkCountParams,
  SiteRemarkCountResponse,
  SiteRemarkCreateParams,
  SiteRemarkGetParams,
  SiteRemarkGetResponse,
  SiteRemarkListParams,
  SiteRemarkListResponse,
  SiteRemarkListResponsesOffsetPage,
  SiteRemarkQueryhelpResponse,
  SiteRemarkTupleParams,
  SiteRemarkTupleResponse,
} from './resources/site-remark';
import {
  SolarArray,
  SolarArrayCountParams,
  SolarArrayCountResponse,
  SolarArrayCreateParams,
  SolarArrayGetParams,
  SolarArrayListParams,
  SolarArrayListResponse,
  SolarArrayListResponsesOffsetPage,
  SolarArrayQueryhelpResponse,
  SolarArrayTupleParams,
  SolarArrayTupleResponse,
  SolarArrayUpdateParams,
} from './resources/solar-array';
import {
  SolarArrayDetailCreateParams,
  SolarArrayDetailGetParams,
  SolarArrayDetailListParams,
  SolarArrayDetailListResponse,
  SolarArrayDetailListResponsesOffsetPage,
  SolarArrayDetailUpdateParams,
  SolarArrayDetails,
} from './resources/solar-array-details';
import {
  Stage,
  StageCountParams,
  StageCountResponse,
  StageCreateParams,
  StageGetParams,
  StageGetResponse,
  StageListParams,
  StageListResponse,
  StageListResponsesOffsetPage,
  StageQueryhelpResponse,
  StageTupleParams,
  StageTupleResponse,
  StageUpdateParams,
} from './resources/stage';
import {
  Status,
  StatusCountParams,
  StatusCountResponse,
  StatusCreateParams,
  StatusGetByEntityIDParams,
  StatusGetByEntityIDResponse,
  StatusGetByEntityTypeParams,
  StatusGetByEntityTypeResponse,
  StatusGetParams,
  StatusListParams,
  StatusListResponse,
  StatusListResponsesOffsetPage,
  StatusQueryhelpResponse,
  StatusTupleParams,
  StatusTupleResponse,
  StatusUpdateParams,
} from './resources/status';
import {
  Substatus,
  SubstatusCountParams,
  SubstatusCountResponse,
  SubstatusCreateParams,
  SubstatusGetParams,
  SubstatusListParams,
  SubstatusListResponse,
  SubstatusListResponsesOffsetPage,
  SubstatusQueryhelpResponse,
  SubstatusTupleParams,
  SubstatusTupleResponse,
  SubstatusUpdateParams,
} from './resources/substatus';
import {
  Surface,
  SurfaceCountParams,
  SurfaceCountResponse,
  SurfaceCreateParams,
  SurfaceGetParams,
  SurfaceGetResponse,
  SurfaceListParams,
  SurfaceListResponse,
  SurfaceListResponsesOffsetPage,
  SurfaceQueryhelpResponse,
  SurfaceTupleParams,
  SurfaceTupleResponse,
  SurfaceUpdateParams,
} from './resources/surface';
import {
  SurfaceObstruction,
  SurfaceObstructionCountParams,
  SurfaceObstructionCountResponse,
  SurfaceObstructionCreateParams,
  SurfaceObstructionGetParams,
  SurfaceObstructionGetResponse,
  SurfaceObstructionListParams,
  SurfaceObstructionListResponse,
  SurfaceObstructionListResponsesOffsetPage,
  SurfaceObstructionQueryhelpResponse,
  SurfaceObstructionTupleParams,
  SurfaceObstructionTupleResponse,
  SurfaceObstructionUnvalidatedPublishParams,
  SurfaceObstructionUpdateParams,
} from './resources/surface-obstruction';
import {
  Transponder,
  TransponderCountParams,
  TransponderCountResponse,
  TransponderCreateParams,
  TransponderGetParams,
  TransponderGetResponse,
  TransponderListParams,
  TransponderListResponse,
  TransponderListResponsesOffsetPage,
  TransponderQueryhelpResponse,
  TransponderTupleParams,
  TransponderTupleResponse,
  TransponderUpdateParams,
} from './resources/transponder';
import { User, UserAuthResponse } from './resources/user';
import {
  Vessel,
  VesselCountParams,
  VesselCountResponse,
  VesselCreateBulkParams,
  VesselCreateParams,
  VesselGetParams,
  VesselGetResponse,
  VesselListParams,
  VesselListResponse,
  VesselListResponsesOffsetPage,
  VesselQueryhelpResponse,
  VesselTupleParams,
  VesselTupleResponse,
  VesselUpdateParams,
} from './resources/vessel';
import { AirOperations } from './resources/air-operations/air-operations';
import {
  AirTransportMissionAbridged,
  AirTransportMissionAbridgedsOffsetPage,
  AirTransportMissionCountParams,
  AirTransportMissionCountResponse,
  AirTransportMissionCreateParams,
  AirTransportMissionListParams,
  AirTransportMissionQueryhelpResponse,
  AirTransportMissionRetrieveParams,
  AirTransportMissionTupleParams,
  AirTransportMissionTupleResponse,
  AirTransportMissionUpdateParams,
  AirTransportMissions,
} from './resources/air-transport-missions/air-transport-missions';
import {
  AircraftStatusCountParams,
  AircraftStatusCountResponse,
  AircraftStatusCreateParams,
  AircraftStatusListParams,
  AircraftStatusQueryhelpResponse,
  AircraftStatusRetrieveParams,
  AircraftStatusTupleParams,
  AircraftStatusTupleResponse,
  AircraftStatusUpdateParams,
  AircraftStatuses,
  AircraftstatusAbridged,
  AircraftstatusAbridgedsOffsetPage,
} from './resources/aircraft-statuses/aircraft-statuses';
import {
  AirfieldStatus,
  AirfieldStatusCountParams,
  AirfieldStatusCountResponse,
  AirfieldStatusCreateParams,
  AirfieldStatusListParams,
  AirfieldStatusQueryhelpResponse,
  AirfieldStatusRetrieveParams,
  AirfieldStatusTupleParams,
  AirfieldStatusTupleResponse,
  AirfieldStatusUpdateParams,
  AirfieldstatusAbridged,
  AirfieldstatusAbridgedsOffsetPage,
} from './resources/airfield-status/airfield-status';
import {
  AICountParams,
  AICountResponse,
  AICreateBulkParams,
  AIListParams,
  AIQueryhelpResponse,
  AITupleParams,
  AITupleResponse,
  AIs,
  AIsAbridged,
  AIsAbridgedsOffsetPage,
} from './resources/ais/ais';
import {
  AnalyticImagery,
  AnalyticImageryAbridged,
  AnalyticImageryAbridgedsOffsetPage,
  AnalyticImageryCountParams,
  AnalyticImageryCountResponse,
  AnalyticImageryFileGetParams,
  AnalyticImageryListParams,
  AnalyticImageryQueryhelpResponse,
  AnalyticImageryRetrieveParams,
  AnalyticImageryTupleParams,
  AnalyticImageryTupleResponse,
  AnalyticImageryUnvalidatedPublishParams,
} from './resources/analytic-imagery/analytic-imagery';
import {
  AttitudeSetCountParams,
  AttitudeSetCountResponse,
  AttitudeSetCreateParams,
  AttitudeSetListParams,
  AttitudeSetQueryHelpResponse,
  AttitudeSetRetrieveParams,
  AttitudeSetTupleParams,
  AttitudeSetTupleResponse,
  AttitudeSetUnvalidatedPublishParams,
  AttitudeSets,
  AttitudesetAbridged,
  AttitudesetAbridgedsOffsetPage,
} from './resources/attitude-sets/attitude-sets';
import {
  CollectRequestAbridged,
  CollectRequestAbridgedsOffsetPage,
  CollectRequestCountParams,
  CollectRequestCountResponse,
  CollectRequestCreateBulkParams,
  CollectRequestCreateParams,
  CollectRequestListParams,
  CollectRequestQueryHelpResponse,
  CollectRequestRetrieveParams,
  CollectRequestTupleParams,
  CollectRequestTupleResponse,
  CollectRequestUnvalidatedPublishParams,
  CollectRequests,
} from './resources/collect-requests/collect-requests';
import {
  CollectResponseAbridged,
  CollectResponseAbridgedsOffsetPage,
  CollectResponseCountParams,
  CollectResponseCountResponse,
  CollectResponseCreateBulkParams,
  CollectResponseCreateParams,
  CollectResponseListParams,
  CollectResponseQueryHelpResponse,
  CollectResponseRetrieveParams,
  CollectResponseUnvalidatedPublishParams,
  CollectResponses,
} from './resources/collect-responses/collect-responses';
import {
  ConjunctionAbridged,
  ConjunctionAbridgedsOffsetPage,
  ConjunctionCountParams,
  ConjunctionCountResponse,
  ConjunctionCreateBulkParams,
  ConjunctionCreateUdlParams,
  ConjunctionGetHistoryParams,
  ConjunctionGetHistoryResponse,
  ConjunctionListParams,
  ConjunctionQueryhelpResponse,
  ConjunctionRetrieveParams,
  ConjunctionTupleParams,
  ConjunctionTupleResponse,
  ConjunctionUnvalidatedPublishParams,
  ConjunctionUploadConjunctionDataMessageParams,
  Conjunctions,
} from './resources/conjunctions/conjunctions';
import {
  Deconflictset,
  DeconflictsetCountParams,
  DeconflictsetCountResponse,
  DeconflictsetCreateParams,
  DeconflictsetGetParams,
  DeconflictsetGetResponse,
  DeconflictsetListParams,
  DeconflictsetListResponse,
  DeconflictsetListResponsesOffsetPage,
  DeconflictsetQueryhelpResponse,
  DeconflictsetTupleParams,
  DeconflictsetTupleResponse,
  DeconflictsetUnvalidatedPublishParams,
} from './resources/deconflictset/deconflictset';
import {
  DiffOfArrival,
  DiffOfArrivalQueryhelpResponse,
  DiffOfArrivalRetrieveParams,
  DiffOfArrivalTupleParams,
  DiffOfArrivalTupleResponse,
  DiffOfArrivalUnvalidatedPublishParams,
} from './resources/diff-of-arrival/diff-of-arrival';
import {
  DiplomaticClearance,
  DiplomaticClearanceCountParams,
  DiplomaticClearanceCountResponse,
  DiplomaticClearanceCreateBulkParams,
  DiplomaticClearanceCreateParams,
  DiplomaticClearanceListParams,
  DiplomaticClearanceQueryhelpResponse,
  DiplomaticClearanceRetrieveParams,
  DiplomaticClearanceTupleParams,
  DiplomaticClearanceTupleResponse,
  DiplomaticClearanceUpdateParams,
} from './resources/diplomatic-clearance/diplomatic-clearance';
import {
  Ecpedr,
  EcpedrCountParams,
  EcpedrCountResponse,
  EcpedrCreateBulkParams,
  EcpedrCreateParams,
  EcpedrListParams,
  EcpedrListResponse,
  EcpedrListResponsesOffsetPage,
  EcpedrQueryhelpResponse,
  EcpedrTupleParams,
  EcpedrTupleResponse,
  EcpedrUnvalidatedPublishParams,
} from './resources/ecpedr/ecpedr';
import {
  EffectRequestCountParams,
  EffectRequestCountResponse,
  EffectRequestCreateBulkParams,
  EffectRequestCreateParams,
  EffectRequestListParams,
  EffectRequestListResponse,
  EffectRequestListResponsesOffsetPage,
  EffectRequestQueryHelpResponse,
  EffectRequestRetrieveParams,
  EffectRequestRetrieveResponse,
  EffectRequestTupleParams,
  EffectRequestTupleResponse,
  EffectRequestUnvalidatedPublishParams,
  EffectRequests,
} from './resources/effect-requests/effect-requests';
import {
  EffectResponseActionsListFull,
  EffectResponseCountParams,
  EffectResponseCountResponse,
  EffectResponseCreateBulkParams,
  EffectResponseCreateParams,
  EffectResponseListParams,
  EffectResponseListResponse,
  EffectResponseListResponsesOffsetPage,
  EffectResponseMetricsFull,
  EffectResponseQueryHelpResponse,
  EffectResponseRetrieveParams,
  EffectResponseRetrieveResponse,
  EffectResponseTupleParams,
  EffectResponseTupleResponse,
  EffectResponseUnvalidatedPublishParams,
  EffectResponses,
} from './resources/effect-responses/effect-responses';
import {
  Elset,
  ElsetAbridged,
  ElsetAbridgedsOffsetPage,
  ElsetCountParams,
  ElsetCountResponse,
  ElsetCreateBulkFromTleParams,
  ElsetCreateBulkParams,
  ElsetCreateParams,
  ElsetIngest,
  ElsetListParams,
  ElsetQueryCurrentElsetHelpResponse,
  ElsetQueryhelpResponse,
  ElsetRetrieveParams,
  ElsetTupleParams,
  ElsetTupleResponse,
  ElsetUnvalidatedPublishParams,
  Elsets,
} from './resources/elsets/elsets';
import {
  Emireport,
  EmireportCountParams,
  EmireportCountResponse,
  EmireportCreateBulkParams,
  EmireportCreateParams,
  EmireportGetParams,
  EmireportGetResponse,
  EmireportListParams,
  EmireportListResponse,
  EmireportListResponsesOffsetPage,
  EmireportQueryhelpResponse,
  EmireportTupleParams,
  EmireportTupleResponse,
  EmireportUnvalidatedPublishParams,
} from './resources/emireport/emireport';
import {
  Eop,
  EopAbridged,
  EopAbridgedsOffsetPage,
  EopCountParams,
  EopCountResponse,
  EopCreateParams,
  EopListParams,
  EopListTupleParams,
  EopListTupleResponse,
  EopQueryhelpResponse,
  EopRetrieveParams,
  EopUpdateParams,
} from './resources/eop/eop';
import {
  EphemerisSet,
  EphemerisSetAbridged,
  EphemerisSetAbridgedsOffsetPage,
  EphemerisSetCountParams,
  EphemerisSetCountResponse,
  EphemerisSetCreateParams,
  EphemerisSetFileRetrieveParams,
  EphemerisSetListParams,
  EphemerisSetQueryhelpResponse,
  EphemerisSetRetrieveParams,
  EphemerisSetTupleParams,
  EphemerisSetTupleResponse,
  EphemerisSets,
} from './resources/ephemeris-sets/ephemeris-sets';
import {
  Ephemeris,
  EphemerisAbridged,
  EphemerisAbridgedsOffsetPage,
  EphemerisCountParams,
  EphemerisCountResponse,
  EphemerisFileUploadParams,
  EphemerisListParams,
  EphemerisQueryhelpResponse,
  EphemerisTupleParams,
  EphemerisTupleResponse,
  EphemerisUnvalidatedPublishParams,
} from './resources/ephemeris/ephemeris';
import {
  Evac,
  EvacAbridged,
  EvacAbridgedsOffsetPage,
  EvacCountParams,
  EvacCountResponse,
  EvacCreateBulkParams,
  EvacCreateParams,
  EvacListParams,
  EvacQueryHelpResponse,
  EvacRetrieveParams,
  EvacUnvalidatedPublishParams,
} from './resources/evac/evac';
import {
  EventEvolution,
  EventEvolutionCountParams,
  EventEvolutionCountResponse,
  EventEvolutionCreateBulkParams,
  EventEvolutionCreateParams,
  EventEvolutionListParams,
  EventEvolutionListResponse,
  EventEvolutionListResponsesOffsetPage,
  EventEvolutionQueryhelpResponse,
  EventEvolutionRetrieveParams,
  EventEvolutionTupleParams,
  EventEvolutionTupleResponse,
  EventEvolutionUnvalidatedPublishParams,
} from './resources/event-evolution/event-evolution';
import {
  FeatureAssessment,
  FeatureAssessmentCountParams,
  FeatureAssessmentCountResponse,
  FeatureAssessmentCreateBulkParams,
  FeatureAssessmentCreateParams,
  FeatureAssessmentListParams,
  FeatureAssessmentListResponse,
  FeatureAssessmentListResponsesOffsetPage,
  FeatureAssessmentQueryHelpResponse,
  FeatureAssessmentRetrieveParams,
  FeatureAssessmentRetrieveResponse,
  FeatureAssessmentTupleParams,
  FeatureAssessmentTupleResponse,
  FeatureAssessmentUnvalidatedPublishParams,
} from './resources/feature-assessment/feature-assessment';
import {
  GeoStatus,
  GeoStatusCountParams,
  GeoStatusCountResponse,
  GeoStatusCreateBulkParams,
  GeoStatusCreateParams,
  GeoStatusGetParams,
  GeoStatusListParams,
  GeoStatusListResponse,
  GeoStatusListResponsesOffsetPage,
  GeoStatusQueryhelpResponse,
  GeoStatusTupleParams,
  GeoStatusTupleResponse,
} from './resources/geo-status/geo-status';
import {
  GlobalAtmosphericModel,
  GlobalAtmosphericModelCountParams,
  GlobalAtmosphericModelCountResponse,
  GlobalAtmosphericModelGetFileParams,
  GlobalAtmosphericModelListParams,
  GlobalAtmosphericModelListResponse,
  GlobalAtmosphericModelListResponsesOffsetPage,
  GlobalAtmosphericModelQueryHelpResponse,
  GlobalAtmosphericModelRetrieveParams,
  GlobalAtmosphericModelRetrieveResponse,
  GlobalAtmosphericModelTupleParams,
  GlobalAtmosphericModelTupleResponse,
  GlobalAtmosphericModelUnvalidatedPublishParams,
} from './resources/global-atmospheric-model/global-atmospheric-model';
import { GnssObservations } from './resources/gnss-observations/gnss-observations';
import {
  GnssObservationset,
  GnssObservationsetCountParams,
  GnssObservationsetCountResponse,
  GnssObservationsetCreateBulkParams,
  GnssObservationsetListParams,
  GnssObservationsetListResponse,
  GnssObservationsetListResponsesOffsetPage,
  GnssObservationsetQueryhelpResponse,
  GnssObservationsetTupleParams,
  GnssObservationsetTupleResponse,
  GnssObservationsetUnvalidatedPublishParams,
} from './resources/gnss-observationset/gnss-observationset';
import {
  GnssRawIf,
  GnssRawIfCountParams,
  GnssRawIfCountResponse,
  GnssRawIfFileGetParams,
  GnssRawIfGetParams,
  GnssRawIfGetResponse,
  GnssRawIfListParams,
  GnssRawIfListResponse,
  GnssRawIfListResponsesOffsetPage,
  GnssRawIfQueryhelpResponse,
  GnssRawIfTupleParams,
  GnssRawIfTupleResponse,
  GnssRawIfUploadZipParams,
} from './resources/gnss-raw-if/gnss-raw-if';
import {
  GroundImagery,
  GroundImageryAodrParams,
  GroundImageryCountParams,
  GroundImageryCountResponse,
  GroundImageryCreateParams,
  GroundImageryGetFileParams,
  GroundImageryGetParams,
  GroundImageryGetResponse,
  GroundImageryListParams,
  GroundImageryListResponse,
  GroundImageryListResponsesOffsetPage,
  GroundImageryQueryhelpResponse,
  GroundImageryTupleParams,
  GroundImageryTupleResponse,
  GroundImageryUploadZipParams,
} from './resources/ground-imagery/ground-imagery';
import {
  H3Geo,
  H3GeoCountParams,
  H3GeoCountResponse,
  H3GeoCreateParams,
  H3GeoGetParams,
  H3GeoGetResponse,
  H3GeoListParams,
  H3GeoListResponse,
  H3GeoListResponsesOffsetPage,
  H3GeoQueryhelpResponse,
  H3GeoTupleParams,
  H3GeoTupleResponse,
} from './resources/h3-geo/h3-geo';
import {
  Hazard,
  HazardCountParams,
  HazardCountResponse,
  HazardCreateBulkParams,
  HazardCreateParams,
  HazardGetParams,
  HazardGetResponse,
  HazardListParams,
  HazardListResponse,
  HazardListResponsesOffsetPage,
  HazardQueryhelpResponse,
  HazardTupleParams,
  HazardTupleResponse,
} from './resources/hazard/hazard';
import {
  IonoObservationCountParams,
  IonoObservationCountResponse,
  IonoObservationCreateBulkParams,
  IonoObservationListParams,
  IonoObservationListResponse,
  IonoObservationListResponsesOffsetPage,
  IonoObservationQueryhelpResponse,
  IonoObservationTupleParams,
  IonoObservationTupleResponse,
  IonoObservationUnvalidatedPublishParams,
  IonoObservations,
} from './resources/iono-observations/iono-observations';
import {
  IsrCollectionCountParams,
  IsrCollectionCountResponse,
  IsrCollectionCreateBulkParams,
  IsrCollectionCriticalTimesFull,
  IsrCollectionExploitationRequirementFull,
  IsrCollectionListParams,
  IsrCollectionListResponse,
  IsrCollectionListResponsesOffsetPage,
  IsrCollectionPocFull,
  IsrCollectionQueryhelpResponse,
  IsrCollectionRequirementsFull,
  IsrCollectionTupleParams,
  IsrCollectionTupleResponse,
  IsrCollectionUnvalidatedPublishParams,
  IsrCollections,
} from './resources/isr-collections/isr-collections';
import {
  ItemTrackingCountParams,
  ItemTrackingCountResponse,
  ItemTrackingCreateParams,
  ItemTrackingGetParams,
  ItemTrackingGetResponse,
  ItemTrackingListParams,
  ItemTrackingListResponse,
  ItemTrackingListResponsesOffsetPage,
  ItemTrackingQueryhelpResponse,
  ItemTrackingTupleParams,
  ItemTrackingTupleResponse,
  ItemTrackingUnvalidatedPublishParams,
  ItemTrackings,
} from './resources/item-trackings/item-trackings';
import {
  FixedPointFull,
  Laserdeconflictrequest,
  LaserdeconflictrequestCountParams,
  LaserdeconflictrequestCountResponse,
  LaserdeconflictrequestCreateParams,
  LaserdeconflictrequestGetParams,
  LaserdeconflictrequestGetResponse,
  LaserdeconflictrequestListParams,
  LaserdeconflictrequestListResponse,
  LaserdeconflictrequestListResponsesOffsetPage,
  LaserdeconflictrequestQueryhelpResponse,
  LaserdeconflictrequestTupleParams,
  LaserdeconflictrequestTupleResponse,
  LaserdeconflictrequestUnvalidatedPublishParams,
} from './resources/laserdeconflictrequest/laserdeconflictrequest';
import {
  Laseremitter,
  LaseremitterCountParams,
  LaseremitterCountResponse,
  LaseremitterCreateParams,
  LaseremitterGetParams,
  LaseremitterGetResponse,
  LaseremitterListParams,
  LaseremitterListResponse,
  LaseremitterListResponsesOffsetPage,
  LaseremitterQueryhelpResponse,
  LaseremitterTupleParams,
  LaseremitterTupleResponse,
  LaseremitterUpdateParams,
} from './resources/laseremitter/laseremitter';
import {
  LaunchEvent,
  LaunchEventCountParams,
  LaunchEventCountResponse,
  LaunchEventCreateBulkParams,
  LaunchEventCreateParams,
  LaunchEventGetParams,
  LaunchEventGetResponse,
  LaunchEventListParams,
  LaunchEventListResponse,
  LaunchEventListResponsesOffsetPage,
  LaunchEventQueryhelpResponse,
  LaunchEventTupleParams,
  LaunchEventTupleResponse,
  LaunchEventUnvalidatedPublishParams,
} from './resources/launch-event/launch-event';
import {
  LinkStatus,
  LinkStatusCountParams,
  LinkStatusCountResponse,
  LinkStatusCreateParams,
  LinkStatusGetParams,
  LinkStatusGetResponse,
  LinkStatusListParams,
  LinkStatusListResponse,
  LinkStatusListResponsesOffsetPage,
  LinkStatusQueryhelpResponse,
  LinkStatusTupleParams,
  LinkStatusTupleResponse,
} from './resources/link-status/link-status';
import {
  LogisticsDiscrepancyInfosFull,
  LogisticsPartsFull,
  LogisticsRemarksAbridged,
  LogisticsRemarksFull,
  LogisticsRemarksIngest,
  LogisticsSegmentsFull,
  LogisticsSpecialtiesFull,
  LogisticsStocksFull,
  LogisticsSupport,
  LogisticsSupportCountParams,
  LogisticsSupportCountResponse,
  LogisticsSupportCreateBulkParams,
  LogisticsSupportCreateParams,
  LogisticsSupportGetParams,
  LogisticsSupportGetResponse,
  LogisticsSupportItemsFull,
  LogisticsSupportListParams,
  LogisticsSupportListResponse,
  LogisticsSupportListResponsesOffsetPage,
  LogisticsSupportQueryhelpResponse,
  LogisticsSupportTupleParams,
  LogisticsSupportTupleResponse,
  LogisticsSupportUnvalidatedPublishParams,
  LogisticsSupportUpdateParams,
  LogisticsTransportationPlansFull,
} from './resources/logistics-support/logistics-support';
import {
  ManeuverCountParams,
  ManeuverCountResponse,
  ManeuverCreateBulkParams,
  ManeuverCreateParams,
  ManeuverGetParams,
  ManeuverGetResponse,
  ManeuverListParams,
  ManeuverListResponse,
  ManeuverListResponsesOffsetPage,
  ManeuverQueryhelpResponse,
  ManeuverTupleParams,
  ManeuverTupleResponse,
  ManeuverUnvalidatedPublishParams,
  Maneuvers,
} from './resources/maneuvers/maneuvers';
import {
  MissileTrackCountParams,
  MissileTrackCountResponse,
  MissileTrackCreateBulkParams,
  MissileTrackListParams,
  MissileTrackListResponse,
  MissileTrackListResponsesOffsetPage,
  MissileTrackQueryhelpResponse,
  MissileTrackTupleParams,
  MissileTrackTupleResponse,
  MissileTrackUnvalidatedPublishParams,
  MissileTracks,
} from './resources/missile-tracks/missile-tracks';
import {
  MissionAssignment,
  MissionAssignmentCountParams,
  MissionAssignmentCountResponse,
  MissionAssignmentCreateBulkParams,
  MissionAssignmentCreateParams,
  MissionAssignmentGetParams,
  MissionAssignmentGetResponse,
  MissionAssignmentListParams,
  MissionAssignmentListResponse,
  MissionAssignmentListResponsesOffsetPage,
  MissionAssignmentQueryhelpResponse,
  MissionAssignmentTupleParams,
  MissionAssignmentTupleResponse,
  MissionAssignmentUpdateParams,
} from './resources/mission-assignment/mission-assignment';
import {
  Mti,
  MtiCountParams,
  MtiCountResponse,
  MtiCreateBulkParams,
  MtiListParams,
  MtiListResponse,
  MtiListResponsesOffsetPage,
  MtiQueryhelpResponse,
  MtiTupleParams,
  MtiTupleResponse,
  MtiUnvalidatedPublishParams,
} from './resources/mti/mti';
import {
  Notification,
  NotificationCountParams,
  NotificationCountResponse,
  NotificationCreateParams,
  NotificationCreateRawParams,
  NotificationGetParams,
  NotificationListParams,
  NotificationListResponse,
  NotificationListResponsesOffsetPage,
  NotificationQueryhelpResponse,
  NotificationTupleParams,
  NotificationTupleResponse,
} from './resources/notification/notification';
import { Observations } from './resources/observations/observations';
import {
  Onboardnavigation,
  OnboardnavigationCountParams,
  OnboardnavigationCountResponse,
  OnboardnavigationCreateBulkParams,
  OnboardnavigationListParams,
  OnboardnavigationListResponse,
  OnboardnavigationListResponsesOffsetPage,
  OnboardnavigationQueryhelpResponse,
  OnboardnavigationTupleParams,
  OnboardnavigationTupleResponse,
  OnboardnavigationUnvalidatedPublishParams,
} from './resources/onboardnavigation/onboardnavigation';
import {
  Onorbit,
  OnorbitCountParams,
  OnorbitCountResponse,
  OnorbitCreateParams,
  OnorbitGetParams,
  OnorbitGetSignatureParams,
  OnorbitGetSignatureResponse,
  OnorbitIngest,
  OnorbitListParams,
  OnorbitListResponse,
  OnorbitListResponsesOffsetPage,
  OnorbitQueryhelpResponse,
  OnorbitTupleParams,
  OnorbitTupleResponse,
  OnorbitUpdateParams,
} from './resources/onorbit/onorbit';
import {
  Onorbitassessment,
  OnorbitassessmentCountParams,
  OnorbitassessmentCountResponse,
  OnorbitassessmentCreateBulkParams,
  OnorbitassessmentCreateParams,
  OnorbitassessmentGetParams,
  OnorbitassessmentGetResponse,
  OnorbitassessmentListParams,
  OnorbitassessmentListResponse,
  OnorbitassessmentListResponsesOffsetPage,
  OnorbitassessmentQueryhelpResponse,
  OnorbitassessmentTupleParams,
  OnorbitassessmentTupleResponse,
  OnorbitassessmentUnvalidatedPublishParams,
} from './resources/onorbitassessment/onorbitassessment';
import {
  Onorbitthrusterstatus,
  OnorbitthrusterstatusCountParams,
  OnorbitthrusterstatusCountResponse,
  OnorbitthrusterstatusCreateBulkParams,
  OnorbitthrusterstatusCreateParams,
  OnorbitthrusterstatusGetParams,
  OnorbitthrusterstatusListParams,
  OnorbitthrusterstatusListResponse,
  OnorbitthrusterstatusListResponsesOffsetPage,
  OnorbitthrusterstatusQueryhelpResponse,
  OnorbitthrusterstatusTupleParams,
  OnorbitthrusterstatusTupleResponse,
} from './resources/onorbitthrusterstatus/onorbitthrusterstatus';
import {
  Orbitdetermination,
  OrbitdeterminationCountParams,
  OrbitdeterminationCountResponse,
  OrbitdeterminationCreateBulkParams,
  OrbitdeterminationCreateParams,
  OrbitdeterminationGetParams,
  OrbitdeterminationGetResponse,
  OrbitdeterminationListParams,
  OrbitdeterminationListResponse,
  OrbitdeterminationListResponsesOffsetPage,
  OrbitdeterminationQueryhelpResponse,
  OrbitdeterminationTupleParams,
  OrbitdeterminationTupleResponse,
  OrbitdeterminationUnvalidatedPublishParams,
} from './resources/orbitdetermination/orbitdetermination';
import {
  Orbittrack,
  OrbittrackCountParams,
  OrbittrackCountResponse,
  OrbittrackCreateBulkParams,
  OrbittrackListParams,
  OrbittrackListResponse,
  OrbittrackListResponsesOffsetPage,
  OrbittrackQueryhelpResponse,
  OrbittrackTupleParams,
  OrbittrackTupleResponse,
  OrbittrackUnvalidatedPublishParams,
} from './resources/orbittrack/orbittrack';
import {
  PersonnelRecoveryFullL,
  Personnelrecovery,
  PersonnelrecoveryCountParams,
  PersonnelrecoveryCountResponse,
  PersonnelrecoveryCreateBulkParams,
  PersonnelrecoveryCreateParams,
  PersonnelrecoveryFileCreateParams,
  PersonnelrecoveryGetParams,
  PersonnelrecoveryListParams,
  PersonnelrecoveryListResponse,
  PersonnelrecoveryListResponsesOffsetPage,
  PersonnelrecoveryQueryhelpResponse,
  PersonnelrecoveryTupleParams,
  PersonnelrecoveryTupleResponse,
} from './resources/personnelrecovery/personnelrecovery';
import { ReportAndActivities } from './resources/report-and-activities/report-and-activities';
import {
  RfEmitter,
  RfEmitterCountParams,
  RfEmitterCountResponse,
  RfEmitterCreateParams,
  RfEmitterGetParams,
  RfEmitterGetResponse,
  RfEmitterListParams,
  RfEmitterListResponse,
  RfEmitterListResponsesOffsetPage,
  RfEmitterQueryhelpResponse,
  RfEmitterTupleParams,
  RfEmitterTupleResponse,
  RfEmitterUpdateParams,
} from './resources/rf-emitter/rf-emitter';
import {
  SarObservation,
  SarObservationCountParams,
  SarObservationCountResponse,
  SarObservationCreateBulkParams,
  SarObservationCreateParams,
  SarObservationGetParams,
  SarObservationGetResponse,
  SarObservationListParams,
  SarObservationListResponse,
  SarObservationListResponsesOffsetPage,
  SarObservationQueryhelpResponse,
  SarObservationTupleParams,
  SarObservationTupleResponse,
  SarObservationUnvalidatedPublishParams,
} from './resources/sar-observation/sar-observation';
import {
  ScAllowableFileExtensionsResponse,
  ScAllowableFileMimesResponse,
  ScCopyParams,
  ScCopyResponse,
  ScDeleteParams,
  ScDownloadParams,
  ScFileDownloadParams,
  ScFileUploadParams,
  ScFileUploadResponse,
  ScHasWriteAccessParams,
  ScHasWriteAccessResponse,
  ScMoveParams,
  ScMoveResponse,
  ScRenameParams,
  ScSearchParams,
  ScSearchResponse,
  Scs,
  SearchCriterion,
  SearchLogicalCriterion,
} from './resources/scs/scs';
import {
  SensorMaintenance,
  SensorMaintenanceCountParams,
  SensorMaintenanceCountResponse,
  SensorMaintenanceCreateBulkParams,
  SensorMaintenanceCreateParams,
  SensorMaintenanceGetParams,
  SensorMaintenanceGetResponse,
  SensorMaintenanceListCurrentParams,
  SensorMaintenanceListCurrentResponse,
  SensorMaintenanceListCurrentResponsesOffsetPage,
  SensorMaintenanceListParams,
  SensorMaintenanceListResponse,
  SensorMaintenanceListResponsesOffsetPage,
  SensorMaintenanceQueryHelpResponse,
  SensorMaintenanceTupleParams,
  SensorMaintenanceTupleResponse,
  SensorMaintenanceUpdateParams,
} from './resources/sensor-maintenance/sensor-maintenance';
import {
  SensorPlan,
  SensorPlanCountParams,
  SensorPlanCountResponse,
  SensorPlanCreateParams,
  SensorPlanGetParams,
  SensorPlanGetResponse,
  SensorPlanListParams,
  SensorPlanListResponse,
  SensorPlanListResponsesOffsetPage,
  SensorPlanQueryhelpResponse,
  SensorPlanTupleParams,
  SensorPlanTupleResponse,
  SensorPlanUnvalidatedPublishParams,
  SensorPlanUpdateParams,
} from './resources/sensor-plan/sensor-plan';
import {
  Sensor,
  SensorCountParams,
  SensorCountResponse,
  SensorCreateParams,
  SensorGetParams,
  SensorGetResponse,
  SensorListParams,
  SensorListResponse,
  SensorListResponsesOffsetPage,
  SensorQueryhelpResponse,
  SensorTupleParams,
  SensorTupleResponse,
  SensorUpdateParams,
} from './resources/sensor/sensor';
import {
  Sgi,
  SgiCountParams,
  SgiCountResponse,
  SgiCreateBulkParams,
  SgiCreateParams,
  SgiGetDataByEffectiveAsOfDateParams,
  SgiGetDataByEffectiveAsOfDateResponse,
  SgiGetParams,
  SgiGetResponse,
  SgiListParams,
  SgiListResponse,
  SgiListResponsesOffsetPage,
  SgiQueryhelpResponse,
  SgiTupleParams,
  SgiTupleResponse,
  SgiUnvalidatedPublishParams,
  SgiUpdateParams,
} from './resources/sgi/sgi';
import {
  Sigact,
  SigactCountParams,
  SigactCountResponse,
  SigactCreateBulkParams,
  SigactListParams,
  SigactListResponse,
  SigactListResponsesOffsetPage,
  SigactQueryhelpResponse,
  SigactTupleParams,
  SigactTupleResponse,
  SigactUploadZipParams,
} from './resources/sigact/sigact';
import {
  SiteStatus,
  SiteStatusCountParams,
  SiteStatusCountResponse,
  SiteStatusCreateParams,
  SiteStatusGetParams,
  SiteStatusGetResponse,
  SiteStatusListParams,
  SiteStatusListResponse,
  SiteStatusListResponsesOffsetPage,
  SiteStatusQueryhelpResponse,
  SiteStatusTupleParams,
  SiteStatusTupleResponse,
  SiteStatusUpdateParams,
} from './resources/site-status/site-status';
import {
  Site,
  SiteCountParams,
  SiteCountResponse,
  SiteCreateParams,
  SiteGetParams,
  SiteGetResponse,
  SiteListParams,
  SiteListResponse,
  SiteListResponsesOffsetPage,
  SiteQueryhelpResponse,
  SiteTupleParams,
  SiteTupleResponse,
  SiteUpdateParams,
} from './resources/site/site';
import {
  SkyImagery,
  SkyImageryCountParams,
  SkyImageryCountResponse,
  SkyImageryFileGetParams,
  SkyImageryGetParams,
  SkyImageryGetResponse,
  SkyImageryListParams,
  SkyImageryListResponse,
  SkyImageryListResponsesOffsetPage,
  SkyImageryQueryhelpResponse,
  SkyImageryTupleParams,
  SkyImageryTupleResponse,
  SkyImageryUploadZipParams,
} from './resources/sky-imagery/sky-imagery';
import {
  SoiObservationSet,
  SoiObservationSetCountParams,
  SoiObservationSetCountResponse,
  SoiObservationSetCreateBulkParams,
  SoiObservationSetCreateParams,
  SoiObservationSetGetParams,
  SoiObservationSetListParams,
  SoiObservationSetListResponse,
  SoiObservationSetListResponsesOffsetPage,
  SoiObservationSetQueryhelpResponse,
  SoiObservationSetTupleParams,
  SoiObservationSetTupleResponse,
  SoiObservationSetUnvalidatedPublishParams,
} from './resources/soi-observation-set/soi-observation-set';
import {
  SortiePpr,
  SortiePprCountParams,
  SortiePprCountResponse,
  SortiePprCreateBulkParams,
  SortiePprCreateParams,
  SortiePprGetParams,
  SortiePprListParams,
  SortiePprListResponse,
  SortiePprListResponsesOffsetPage,
  SortiePprQueryhelpResponse,
  SortiePprTupleParams,
  SortiePprTupleResponse,
  SortiePprUnvalidatedPublishParams,
  SortiePprUpdateParams,
} from './resources/sortie-ppr/sortie-ppr';
import {
  SpaceEnvObservation,
  SpaceEnvObservationCountParams,
  SpaceEnvObservationCountResponse,
  SpaceEnvObservationCreateBulkParams,
  SpaceEnvObservationListParams,
  SpaceEnvObservationListResponse,
  SpaceEnvObservationListResponsesOffsetPage,
  SpaceEnvObservationQueryhelpResponse,
  SpaceEnvObservationTupleParams,
  SpaceEnvObservationTupleResponse,
  SpaceEnvObservationUnvalidatedPublishParams,
} from './resources/space-env-observation/space-env-observation';
import {
  StarCatalog,
  StarCatalogCountParams,
  StarCatalogCountResponse,
  StarCatalogCreateBulkParams,
  StarCatalogCreateParams,
  StarCatalogGetParams,
  StarCatalogGetResponse,
  StarCatalogListParams,
  StarCatalogListResponse,
  StarCatalogListResponsesOffsetPage,
  StarCatalogQueryhelpResponse,
  StarCatalogTupleParams,
  StarCatalogTupleResponse,
  StarCatalogUnvalidatedPublishParams,
  StarCatalogUpdateParams,
} from './resources/star-catalog/star-catalog';
import {
  StateVector,
  StateVectorAbridged,
  StateVectorAbridgedsOffsetPage,
  StateVectorCountParams,
  StateVectorCountResponse,
  StateVectorCreateBulkParams,
  StateVectorCreateParams,
  StateVectorGetParams,
  StateVectorIngest,
  StateVectorListParams,
  StateVectorQueryhelpResponse,
  StateVectorTupleParams,
  StateVectorTupleResponse,
  StateVectorUnvalidatedPublishParams,
} from './resources/state-vector/state-vector';
import { SupportingData } from './resources/supporting-data/supporting-data';
import {
  Swir,
  SwirCountParams,
  SwirCountResponse,
  SwirCreateBulkParams,
  SwirCreateParams,
  SwirGetParams,
  SwirListParams,
  SwirListResponse,
  SwirListResponsesOffsetPage,
  SwirQueryhelpResponse,
  SwirTupleParams,
  SwirTupleResponse,
} from './resources/swir/swir';
import {
  TaiUtc,
  TaiUtcCountParams,
  TaiUtcCountResponse,
  TaiUtcCreateParams,
  TaiUtcGetParams,
  TaiUtcListParams,
  TaiUtcListResponse,
  TaiUtcListResponsesOffsetPage,
  TaiUtcQueryhelpResponse,
  TaiUtcTupleParams,
  TaiUtcTupleResponse,
  TaiUtcUpdateParams,
} from './resources/tai-utc/tai-utc';
import { TdoaFdoa } from './resources/tdoa-fdoa/tdoa-fdoa';
import {
  TrackDetailCountParams,
  TrackDetailCountResponse,
  TrackDetailCreateBulkParams,
  TrackDetailListParams,
  TrackDetailListResponse,
  TrackDetailListResponsesOffsetPage,
  TrackDetailQueryhelpResponse,
  TrackDetailTupleParams,
  TrackDetailTupleResponse,
  TrackDetails,
} from './resources/track-details/track-details';
import {
  AltitudeBlocksIngest,
  PointOfContactIngest,
  RoutePointsIngest,
  TrackRoute,
  TrackRouteCountParams,
  TrackRouteCountResponse,
  TrackRouteCreateBulkParams,
  TrackRouteCreateParams,
  TrackRouteGetParams,
  TrackRouteIngest,
  TrackRouteListParams,
  TrackRouteListResponse,
  TrackRouteListResponsesOffsetPage,
  TrackRouteQueryhelpResponse,
  TrackRouteTupleParams,
  TrackRouteTupleResponse,
  TrackRouteUnvalidatedPublishParams,
  TrackRouteUpdateParams,
} from './resources/track-route/track-route';
import {
  Track,
  TrackCountParams,
  TrackCountResponse,
  TrackCreateBulkParams,
  TrackListParams,
  TrackListResponse,
  TrackListResponsesOffsetPage,
  TrackQueryhelpResponse,
  TrackTupleParams,
  TrackTupleResponse,
  TrackUnvalidatedPublishParams,
} from './resources/track/track';
import {
  Video,
  VideoCountParams,
  VideoCountResponse,
  VideoCreateParams,
  VideoGetParams,
  VideoGetPlayerStreamingInfoParams,
  VideoGetPlayerStreamingInfoResponse,
  VideoGetPublisherStreamingInfoParams,
  VideoGetPublisherStreamingInfoResponse,
  VideoGetStreamFileParams,
  VideoGetStreamFileResponse,
  VideoListParams,
  VideoListResponse,
  VideoListResponsesOffsetPage,
  VideoQueryhelpResponse,
  VideoTupleParams,
  VideoTupleResponse,
} from './resources/video/video';
import {
  WeatherData,
  WeatherDataCountParams,
  WeatherDataCountResponse,
  WeatherDataCreateBulkParams,
  WeatherDataCreateParams,
  WeatherDataGetParams,
  WeatherDataListParams,
  WeatherDataListResponse,
  WeatherDataListResponsesOffsetPage,
  WeatherDataQueryhelpResponse,
  WeatherDataTupleParams,
  WeatherDataTupleResponse,
  WeatherDataUnvalidatedPublishParams,
} from './resources/weather-data/weather-data';
import {
  WeatherReport,
  WeatherReportCountParams,
  WeatherReportCountResponse,
  WeatherReportCreateParams,
  WeatherReportGetParams,
  WeatherReportListParams,
  WeatherReportListResponse,
  WeatherReportListResponsesOffsetPage,
  WeatherReportQueryhelpResponse,
  WeatherReportTupleParams,
  WeatherReportTupleResponse,
  WeatherReportUnvalidatedPublishParams,
} from './resources/weather-report/weather-report';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { toBase64 } from './internal/utils/base64';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Access token for Bearer Authentication
   */
  accessToken?: string | null | undefined;

  /**
   * Password for HTTP Basic Authentication
   */
  password?: string | null | undefined;

  /**
   * Username for HTTP Basic Authentication
   */
  username?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['UNIFIEDDATALIBRARY_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['UNIFIEDDATALIBRARY_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Unifieddatalibrary API.
 */
export class Unifieddatalibrary {
  accessToken: string | null;
  password: string | null;
  username: string | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger | undefined;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Unifieddatalibrary API.
   *
   * @param {string | null | undefined} [opts.accessToken=process.env['UDL_ACCESS_TOKEN'] ?? null]
   * @param {string | null | undefined} [opts.password=process.env['UDL_AUTH_PASSWORD'] ?? null]
   * @param {string | null | undefined} [opts.username=process.env['UDL_AUTH_USERNAME'] ?? null]
   * @param {string} [opts.baseURL=process.env['UNIFIEDDATALIBRARY_BASE_URL'] ?? https://unifieddatalibrary.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('UNIFIEDDATALIBRARY_BASE_URL'),
    accessToken = readEnv('UDL_ACCESS_TOKEN') ?? null,
    password = readEnv('UDL_AUTH_PASSWORD') ?? null,
    username = readEnv('UDL_AUTH_USERNAME') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      accessToken,
      password,
      username,
      ...opts,
      baseURL: baseURL || `https://unifieddatalibrary.com`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? Unifieddatalibrary.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('UNIFIEDDATALIBRARY_LOG'), "process.env['UNIFIEDDATALIBRARY_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.accessToken = accessToken;
    this.password = password;
    this.username = username;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      accessToken: this.accessToken,
      password: this.password,
      username: this.username,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://unifieddatalibrary.com';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    if (this.username && this.password && values.get('authorization')) {
      return;
    }
    if (nulls.has('authorization')) {
      return;
    }

    if (this.accessToken && values.get('authorization')) {
      return;
    }
    if (nulls.has('authorization')) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected either username, password or accessToken to be set. Or for one of the "Authorization" or "Authorization" headers to be explicitly omitted',
    );
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    return buildHeaders([await this.basicAuth(opts), await this.bearerAuth(opts)]);
  }

  protected async basicAuth(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    if (!this.username) {
      return undefined;
    }

    if (!this.password) {
      return undefined;
    }

    const credentials = `${this.username}:${this.password}`;
    const Authorization = `Basic ${toBase64(credentials)}`;
    return buildHeaders([{ Authorization }]);
  }

  protected async bearerAuth(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    if (this.accessToken == null) {
      return undefined;
    }
    return buildHeaders([{ Authorization: `Bearer ${this.accessToken}` }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  getAPIList<Item, PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>>(
    path: string,
    Page: new (...args: any[]) => PageClass,
    opts?: RequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    return this.requestAPIList(Page, { method: 'get', path, ...opts });
  }

  requestAPIList<
    Item = unknown,
    PageClass extends Pagination.AbstractPage<Item> = Pagination.AbstractPage<Item>,
  >(
    Page: new (...args: ConstructorParameters<typeof Pagination.AbstractPage>) => PageClass,
    options: FinalRequestOptions,
  ): Pagination.PagePromise<PageClass, Item> {
    const request = this.makeRequest(options, null, undefined);
    return new Pagination.PagePromise<PageClass, Item>(this as any as Unifieddatalibrary, request, Page);
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static Unifieddatalibrary = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static UnifieddatalibraryError = Errors.UnifieddatalibraryError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  airEvents: API.AirEvents = new API.AirEvents(this);
  airOperations: API.AirOperations = new API.AirOperations(this);
  airTransportMissions: API.AirTransportMissions = new API.AirTransportMissions(this);
  aircraft: API.Aircraft = new API.Aircraft(this);
  aircraftSorties: API.AircraftSorties = new API.AircraftSorties(this);
  aircraftStatusRemarks: API.AircraftStatusRemarks = new API.AircraftStatusRemarks(this);
  aircraftStatuses: API.AircraftStatuses = new API.AircraftStatuses(this);
  airfieldSlotConsumptions: API.AirfieldSlotConsumptions = new API.AirfieldSlotConsumptions(this);
  airfieldSlots: API.AirfieldSlots = new API.AirfieldSlots(this);
  airfieldStatus: API.AirfieldStatus = new API.AirfieldStatus(this);
  airfields: API.Airfields = new API.Airfields(this);
  airloadPlans: API.AirloadPlans = new API.AirloadPlans(this);
  airspaceControlOrders: API.AirspaceControlOrders = new API.AirspaceControlOrders(this);
  ais: API.AIs = new API.AIs(this);
  aisObjects: API.AIsObjects = new API.AIsObjects(this);
  analyticImagery: API.AnalyticImagery = new API.AnalyticImagery(this);
  antennas: API.Antennas = new API.Antennas(this);
  attitudeData: API.AttitudeData = new API.AttitudeData(this);
  attitudeSets: API.AttitudeSets = new API.AttitudeSets(this);
  aviationRiskManagement: API.AviationRiskManagement = new API.AviationRiskManagement(this);
  batteries: API.Batteries = new API.Batteries(this);
  batterydetails: API.Batterydetails = new API.Batterydetails(this);
  beam: API.Beam = new API.Beam(this);
  beamContours: API.BeamContours = new API.BeamContours(this);
  buses: API.Buses = new API.Buses(this);
  channels: API.Channels = new API.Channels(this);
  collectRequests: API.CollectRequests = new API.CollectRequests(this);
  collectResponses: API.CollectResponses = new API.CollectResponses(this);
  comm: API.Comm = new API.Comm(this);
  conjunctions: API.Conjunctions = new API.Conjunctions(this);
  cots: API.Cots = new API.Cots(this);
  countries: API.Countries = new API.Countries(this);
  crew: API.Crew = new API.Crew(this);
  deconflictset: API.Deconflictset = new API.Deconflictset(this);
  diffOfArrival: API.DiffOfArrival = new API.DiffOfArrival(this);
  diplomaticClearance: API.DiplomaticClearance = new API.DiplomaticClearance(this);
  driftHistory: API.DriftHistory = new API.DriftHistory(this);
  dropzone: API.Dropzone = new API.Dropzone(this);
  ecpedr: API.Ecpedr = new API.Ecpedr(this);
  effectRequests: API.EffectRequests = new API.EffectRequests(this);
  effectResponses: API.EffectResponses = new API.EffectResponses(this);
  elsets: API.Elsets = new API.Elsets(this);
  emireport: API.Emireport = new API.Emireport(this);
  emitterGeolocation: API.EmitterGeolocation = new API.EmitterGeolocation(this);
  engineDetails: API.EngineDetails = new API.EngineDetails(this);
  engines: API.Engines = new API.Engines(this);
  entities: API.Entities = new API.Entities(this);
  eop: API.Eop = new API.Eop(this);
  ephemeris: API.Ephemeris = new API.Ephemeris(this);
  ephemerisSets: API.EphemerisSets = new API.EphemerisSets(this);
  equipment: API.Equipment = new API.Equipment(this);
  equipmentRemarks: API.EquipmentRemarks = new API.EquipmentRemarks(this);
  evac: API.Evac = new API.Evac(this);
  eventEvolution: API.EventEvolution = new API.EventEvolution(this);
  featureAssessment: API.FeatureAssessment = new API.FeatureAssessment(this);
  flightplan: API.Flightplan = new API.Flightplan(this);
  geoStatus: API.GeoStatus = new API.GeoStatus(this);
  globalAtmosphericModel: API.GlobalAtmosphericModel = new API.GlobalAtmosphericModel(this);
  gnssObservations: API.GnssObservations = new API.GnssObservations(this);
  gnssObservationset: API.GnssObservationset = new API.GnssObservationset(this);
  gnssRawIf: API.GnssRawIf = new API.GnssRawIf(this);
  groundImagery: API.GroundImagery = new API.GroundImagery(this);
  h3Geo: API.H3Geo = new API.H3Geo(this);
  h3GeoHexCell: API.H3GeoHexCell = new API.H3GeoHexCell(this);
  hazard: API.Hazard = new API.Hazard(this);
  ionoObservations: API.IonoObservations = new API.IonoObservations(this);
  ir: API.Ir = new API.Ir(this);
  isrCollections: API.IsrCollections = new API.IsrCollections(this);
  item: API.Item = new API.Item(this);
  itemTrackings: API.ItemTrackings = new API.ItemTrackings(this);
  laserdeconflictrequest: API.Laserdeconflictrequest = new API.Laserdeconflictrequest(this);
  laseremitter: API.Laseremitter = new API.Laseremitter(this);
  launchDetection: API.LaunchDetection = new API.LaunchDetection(this);
  launchEvent: API.LaunchEvent = new API.LaunchEvent(this);
  launchSite: API.LaunchSite = new API.LaunchSite(this);
  launchSiteDetails: API.LaunchSiteDetails = new API.LaunchSiteDetails(this);
  launchVehicle: API.LaunchVehicle = new API.LaunchVehicle(this);
  launchVehicleDetails: API.LaunchVehicleDetails = new API.LaunchVehicleDetails(this);
  linkStatus: API.LinkStatus = new API.LinkStatus(this);
  linkstatus: API.Linkstatus = new API.Linkstatus(this);
  location: API.Location = new API.Location(this);
  logisticsSupport: API.LogisticsSupport = new API.LogisticsSupport(this);
  maneuvers: API.Maneuvers = new API.Maneuvers(this);
  manifold: API.Manifold = new API.Manifold(this);
  manifoldelset: API.Manifoldelset = new API.Manifoldelset(this);
  missileTracks: API.MissileTracks = new API.MissileTracks(this);
  missionAssignment: API.MissionAssignment = new API.MissionAssignment(this);
  mti: API.Mti = new API.Mti(this);
  navigation: API.Navigation = new API.Navigation(this);
  navigationalObstruction: API.NavigationalObstruction = new API.NavigationalObstruction(this);
  notification: API.Notification = new API.Notification(this);
  objectOfInterest: API.ObjectOfInterest = new API.ObjectOfInterest(this);
  observations: API.Observations = new API.Observations(this);
  onboardnavigation: API.Onboardnavigation = new API.Onboardnavigation(this);
  onorbit: API.Onorbit = new API.Onorbit(this);
  onorbitantenna: API.Onorbitantenna = new API.Onorbitantenna(this);
  onorbitbattery: API.Onorbitbattery = new API.Onorbitbattery(this);
  onorbitdetails: API.Onorbitdetails = new API.Onorbitdetails(this);
  onorbitevent: API.Onorbitevent = new API.Onorbitevent(this);
  onorbitlist: API.Onorbitlist = new API.Onorbitlist(this);
  onorbitsolararray: API.Onorbitsolararray = new API.Onorbitsolararray(this);
  onorbitthruster: API.Onorbitthruster = new API.Onorbitthruster(this);
  onorbitthrusterstatus: API.Onorbitthrusterstatus = new API.Onorbitthrusterstatus(this);
  onorbitassessment: API.Onorbitassessment = new API.Onorbitassessment(this);
  operatingunit: API.Operatingunit = new API.Operatingunit(this);
  operatingunitremark: API.Operatingunitremark = new API.Operatingunitremark(this);
  orbitdetermination: API.Orbitdetermination = new API.Orbitdetermination(this);
  orbittrack: API.Orbittrack = new API.Orbittrack(this);
  organization: API.Organization = new API.Organization(this);
  organizationdetails: API.Organizationdetails = new API.Organizationdetails(this);
  personnelrecovery: API.Personnelrecovery = new API.Personnelrecovery(this);
  poi: API.Poi = new API.Poi(this);
  port: API.Port = new API.Port(this);
  reportAndActivities: API.ReportAndActivities = new API.ReportAndActivities(this);
  rfBand: API.RfBand = new API.RfBand(this);
  rfBandType: API.RfBandType = new API.RfBandType(this);
  rfEmitter: API.RfEmitter = new API.RfEmitter(this);
  routeStats: API.RouteStats = new API.RouteStats(this);
  sarObservation: API.SarObservation = new API.SarObservation(this);
  scientific: API.Scientific = new API.Scientific(this);
  scs: API.Scs = new API.Scs(this);
  secureMessaging: API.SecureMessaging = new API.SecureMessaging(this);
  sensor: API.Sensor = new API.Sensor(this);
  sensorStating: API.SensorStating = new API.SensorStating(this);
  sensorMaintenance: API.SensorMaintenance = new API.SensorMaintenance(this);
  sensorObservationType: API.SensorObservationType = new API.SensorObservationType(this);
  sensorPlan: API.SensorPlan = new API.SensorPlan(this);
  sensorType: API.SensorType = new API.SensorType(this);
  seraDataCommDetails: API.SeraDataCommDetails = new API.SeraDataCommDetails(this);
  seraDataEarlyWarning: API.SeraDataEarlyWarning = new API.SeraDataEarlyWarning(this);
  seraDataNavigation: API.SeraDataNavigation = new API.SeraDataNavigation(this);
  seradataOpticalPayload: API.SeradataOpticalPayload = new API.SeradataOpticalPayload(this);
  seradataRadarPayload: API.SeradataRadarPayload = new API.SeradataRadarPayload(this);
  seradataSigintPayload: API.SeradataSigintPayload = new API.SeradataSigintPayload(this);
  seradataSpacecraftDetails: API.SeradataSpacecraftDetails = new API.SeradataSpacecraftDetails(this);
  sgi: API.Sgi = new API.Sgi(this);
  sigact: API.Sigact = new API.Sigact(this);
  site: API.Site = new API.Site(this);
  siteRemark: API.SiteRemark = new API.SiteRemark(this);
  siteStatus: API.SiteStatus = new API.SiteStatus(this);
  skyImagery: API.SkyImagery = new API.SkyImagery(this);
  soiObservationSet: API.SoiObservationSet = new API.SoiObservationSet(this);
  solarArray: API.SolarArray = new API.SolarArray(this);
  solarArrayDetails: API.SolarArrayDetails = new API.SolarArrayDetails(this);
  sortiePpr: API.SortiePpr = new API.SortiePpr(this);
  spaceEnvObservation: API.SpaceEnvObservation = new API.SpaceEnvObservation(this);
  stage: API.Stage = new API.Stage(this);
  starCatalog: API.StarCatalog = new API.StarCatalog(this);
  stateVector: API.StateVector = new API.StateVector(this);
  status: API.Status = new API.Status(this);
  substatus: API.Substatus = new API.Substatus(this);
  supportingData: API.SupportingData = new API.SupportingData(this);
  surface: API.Surface = new API.Surface(this);
  surfaceObstruction: API.SurfaceObstruction = new API.SurfaceObstruction(this);
  swir: API.Swir = new API.Swir(this);
  taiUtc: API.TaiUtc = new API.TaiUtc(this);
  tdoaFdoa: API.TdoaFdoa = new API.TdoaFdoa(this);
  track: API.Track = new API.Track(this);
  trackDetails: API.TrackDetails = new API.TrackDetails(this);
  trackRoute: API.TrackRoute = new API.TrackRoute(this);
  transponder: API.Transponder = new API.Transponder(this);
  user: API.User = new API.User(this);
  vessel: API.Vessel = new API.Vessel(this);
  video: API.Video = new API.Video(this);
  weatherData: API.WeatherData = new API.WeatherData(this);
  weatherReport: API.WeatherReport = new API.WeatherReport(this);
}

Unifieddatalibrary.AirEvents = AirEvents;
Unifieddatalibrary.AirOperations = AirOperations;
Unifieddatalibrary.AirTransportMissions = AirTransportMissions;
Unifieddatalibrary.Aircraft = Aircraft;
Unifieddatalibrary.AircraftSorties = AircraftSorties;
Unifieddatalibrary.AircraftStatusRemarks = AircraftStatusRemarks;
Unifieddatalibrary.AircraftStatuses = AircraftStatuses;
Unifieddatalibrary.AirfieldSlotConsumptions = AirfieldSlotConsumptions;
Unifieddatalibrary.AirfieldSlots = AirfieldSlots;
Unifieddatalibrary.AirfieldStatus = AirfieldStatus;
Unifieddatalibrary.Airfields = Airfields;
Unifieddatalibrary.AirloadPlans = AirloadPlans;
Unifieddatalibrary.AirspaceControlOrders = AirspaceControlOrders;
Unifieddatalibrary.AIs = AIs;
Unifieddatalibrary.AIsObjects = AIsObjects;
Unifieddatalibrary.AnalyticImagery = AnalyticImagery;
Unifieddatalibrary.Antennas = Antennas;
Unifieddatalibrary.AttitudeData = AttitudeData;
Unifieddatalibrary.AttitudeSets = AttitudeSets;
Unifieddatalibrary.AviationRiskManagement = AviationRiskManagement;
Unifieddatalibrary.Batteries = Batteries;
Unifieddatalibrary.Batterydetails = Batterydetails;
Unifieddatalibrary.Beam = Beam;
Unifieddatalibrary.BeamContours = BeamContours;
Unifieddatalibrary.Buses = Buses;
Unifieddatalibrary.Channels = Channels;
Unifieddatalibrary.CollectRequests = CollectRequests;
Unifieddatalibrary.CollectResponses = CollectResponses;
Unifieddatalibrary.Comm = Comm;
Unifieddatalibrary.Conjunctions = Conjunctions;
Unifieddatalibrary.Cots = Cots;
Unifieddatalibrary.Countries = Countries;
Unifieddatalibrary.Crew = Crew;
Unifieddatalibrary.Deconflictset = Deconflictset;
Unifieddatalibrary.DiffOfArrival = DiffOfArrival;
Unifieddatalibrary.DiplomaticClearance = DiplomaticClearance;
Unifieddatalibrary.DriftHistory = DriftHistory;
Unifieddatalibrary.Dropzone = Dropzone;
Unifieddatalibrary.Ecpedr = Ecpedr;
Unifieddatalibrary.EffectRequests = EffectRequests;
Unifieddatalibrary.EffectResponses = EffectResponses;
Unifieddatalibrary.Elsets = Elsets;
Unifieddatalibrary.Emireport = Emireport;
Unifieddatalibrary.EmitterGeolocation = EmitterGeolocation;
Unifieddatalibrary.EngineDetails = EngineDetails;
Unifieddatalibrary.Engines = Engines;
Unifieddatalibrary.Entities = Entities;
Unifieddatalibrary.Eop = Eop;
Unifieddatalibrary.Ephemeris = Ephemeris;
Unifieddatalibrary.EphemerisSets = EphemerisSets;
Unifieddatalibrary.Equipment = Equipment;
Unifieddatalibrary.EquipmentRemarks = EquipmentRemarks;
Unifieddatalibrary.Evac = Evac;
Unifieddatalibrary.EventEvolution = EventEvolution;
Unifieddatalibrary.FeatureAssessment = FeatureAssessment;
Unifieddatalibrary.Flightplan = Flightplan;
Unifieddatalibrary.GeoStatus = GeoStatus;
Unifieddatalibrary.GlobalAtmosphericModel = GlobalAtmosphericModel;
Unifieddatalibrary.GnssObservations = GnssObservations;
Unifieddatalibrary.GnssObservationset = GnssObservationset;
Unifieddatalibrary.GnssRawIf = GnssRawIf;
Unifieddatalibrary.GroundImagery = GroundImagery;
Unifieddatalibrary.H3Geo = H3Geo;
Unifieddatalibrary.H3GeoHexCell = H3GeoHexCell;
Unifieddatalibrary.Hazard = Hazard;
Unifieddatalibrary.IonoObservations = IonoObservations;
Unifieddatalibrary.Ir = Ir;
Unifieddatalibrary.IsrCollections = IsrCollections;
Unifieddatalibrary.Item = Item;
Unifieddatalibrary.ItemTrackings = ItemTrackings;
Unifieddatalibrary.Laserdeconflictrequest = Laserdeconflictrequest;
Unifieddatalibrary.Laseremitter = Laseremitter;
Unifieddatalibrary.LaunchDetection = LaunchDetection;
Unifieddatalibrary.LaunchEvent = LaunchEvent;
Unifieddatalibrary.LaunchSite = LaunchSite;
Unifieddatalibrary.LaunchSiteDetails = LaunchSiteDetails;
Unifieddatalibrary.LaunchVehicle = LaunchVehicle;
Unifieddatalibrary.LaunchVehicleDetails = LaunchVehicleDetails;
Unifieddatalibrary.LinkStatus = LinkStatus;
Unifieddatalibrary.Linkstatus = Linkstatus;
Unifieddatalibrary.Location = Location;
Unifieddatalibrary.LogisticsSupport = LogisticsSupport;
Unifieddatalibrary.Maneuvers = Maneuvers;
Unifieddatalibrary.Manifold = Manifold;
Unifieddatalibrary.Manifoldelset = Manifoldelset;
Unifieddatalibrary.MissileTracks = MissileTracks;
Unifieddatalibrary.MissionAssignment = MissionAssignment;
Unifieddatalibrary.Mti = Mti;
Unifieddatalibrary.Navigation = Navigation;
Unifieddatalibrary.NavigationalObstruction = NavigationalObstruction;
Unifieddatalibrary.Notification = Notification;
Unifieddatalibrary.ObjectOfInterest = ObjectOfInterest;
Unifieddatalibrary.Observations = Observations;
Unifieddatalibrary.Onboardnavigation = Onboardnavigation;
Unifieddatalibrary.Onorbit = Onorbit;
Unifieddatalibrary.Onorbitantenna = Onorbitantenna;
Unifieddatalibrary.Onorbitbattery = Onorbitbattery;
Unifieddatalibrary.Onorbitdetails = Onorbitdetails;
Unifieddatalibrary.Onorbitevent = Onorbitevent;
Unifieddatalibrary.Onorbitlist = Onorbitlist;
Unifieddatalibrary.Onorbitsolararray = Onorbitsolararray;
Unifieddatalibrary.Onorbitthruster = Onorbitthruster;
Unifieddatalibrary.Onorbitthrusterstatus = Onorbitthrusterstatus;
Unifieddatalibrary.Onorbitassessment = Onorbitassessment;
Unifieddatalibrary.Operatingunit = Operatingunit;
Unifieddatalibrary.Operatingunitremark = Operatingunitremark;
Unifieddatalibrary.Orbitdetermination = Orbitdetermination;
Unifieddatalibrary.Orbittrack = Orbittrack;
Unifieddatalibrary.Organization = Organization;
Unifieddatalibrary.Organizationdetails = Organizationdetails;
Unifieddatalibrary.Personnelrecovery = Personnelrecovery;
Unifieddatalibrary.Poi = Poi;
Unifieddatalibrary.Port = Port;
Unifieddatalibrary.ReportAndActivities = ReportAndActivities;
Unifieddatalibrary.RfBand = RfBand;
Unifieddatalibrary.RfBandType = RfBandType;
Unifieddatalibrary.RfEmitter = RfEmitter;
Unifieddatalibrary.RouteStats = RouteStats;
Unifieddatalibrary.SarObservation = SarObservation;
Unifieddatalibrary.Scientific = Scientific;
Unifieddatalibrary.Scs = Scs;
Unifieddatalibrary.SecureMessaging = SecureMessaging;
Unifieddatalibrary.Sensor = Sensor;
Unifieddatalibrary.SensorStating = SensorStating;
Unifieddatalibrary.SensorMaintenance = SensorMaintenance;
Unifieddatalibrary.SensorObservationType = SensorObservationType;
Unifieddatalibrary.SensorPlan = SensorPlan;
Unifieddatalibrary.SensorType = SensorType;
Unifieddatalibrary.SeraDataCommDetails = SeraDataCommDetails;
Unifieddatalibrary.SeraDataEarlyWarning = SeraDataEarlyWarning;
Unifieddatalibrary.SeraDataNavigation = SeraDataNavigation;
Unifieddatalibrary.SeradataOpticalPayload = SeradataOpticalPayload;
Unifieddatalibrary.SeradataRadarPayload = SeradataRadarPayload;
Unifieddatalibrary.SeradataSigintPayload = SeradataSigintPayload;
Unifieddatalibrary.SeradataSpacecraftDetails = SeradataSpacecraftDetails;
Unifieddatalibrary.Sgi = Sgi;
Unifieddatalibrary.Sigact = Sigact;
Unifieddatalibrary.Site = Site;
Unifieddatalibrary.SiteRemark = SiteRemark;
Unifieddatalibrary.SiteStatus = SiteStatus;
Unifieddatalibrary.SkyImagery = SkyImagery;
Unifieddatalibrary.SoiObservationSet = SoiObservationSet;
Unifieddatalibrary.SolarArray = SolarArray;
Unifieddatalibrary.SolarArrayDetails = SolarArrayDetails;
Unifieddatalibrary.SortiePpr = SortiePpr;
Unifieddatalibrary.SpaceEnvObservation = SpaceEnvObservation;
Unifieddatalibrary.Stage = Stage;
Unifieddatalibrary.StarCatalog = StarCatalog;
Unifieddatalibrary.StateVector = StateVector;
Unifieddatalibrary.Status = Status;
Unifieddatalibrary.Substatus = Substatus;
Unifieddatalibrary.SupportingData = SupportingData;
Unifieddatalibrary.Surface = Surface;
Unifieddatalibrary.SurfaceObstruction = SurfaceObstruction;
Unifieddatalibrary.Swir = Swir;
Unifieddatalibrary.TaiUtc = TaiUtc;
Unifieddatalibrary.TdoaFdoa = TdoaFdoa;
Unifieddatalibrary.Track = Track;
Unifieddatalibrary.TrackDetails = TrackDetails;
Unifieddatalibrary.TrackRoute = TrackRoute;
Unifieddatalibrary.Transponder = Transponder;
Unifieddatalibrary.User = User;
Unifieddatalibrary.Vessel = Vessel;
Unifieddatalibrary.Video = Video;
Unifieddatalibrary.WeatherData = WeatherData;
Unifieddatalibrary.WeatherReport = WeatherReport;

export declare namespace Unifieddatalibrary {
  export type RequestOptions = Opts.RequestOptions;

  export import OffsetPage = Pagination.OffsetPage;
  export { type OffsetPageParams as OffsetPageParams, type OffsetPageResponse as OffsetPageResponse };

  export {
    AirEvents as AirEvents,
    type AirEventListResponse as AirEventListResponse,
    type AirEventCountResponse as AirEventCountResponse,
    type AirEventGetResponse as AirEventGetResponse,
    type AirEventQueryhelpResponse as AirEventQueryhelpResponse,
    type AirEventTupleResponse as AirEventTupleResponse,
    type AirEventListResponsesOffsetPage as AirEventListResponsesOffsetPage,
    type AirEventCreateParams as AirEventCreateParams,
    type AirEventUpdateParams as AirEventUpdateParams,
    type AirEventListParams as AirEventListParams,
    type AirEventCountParams as AirEventCountParams,
    type AirEventCreateBulkParams as AirEventCreateBulkParams,
    type AirEventGetParams as AirEventGetParams,
    type AirEventTupleParams as AirEventTupleParams,
    type AirEventUnvalidatedPublishParams as AirEventUnvalidatedPublishParams,
  };

  export { AirOperations as AirOperations };

  export {
    AirTransportMissions as AirTransportMissions,
    type AirTransportMissionAbridged as AirTransportMissionAbridged,
    type AirTransportMissionCountResponse as AirTransportMissionCountResponse,
    type AirTransportMissionQueryhelpResponse as AirTransportMissionQueryhelpResponse,
    type AirTransportMissionTupleResponse as AirTransportMissionTupleResponse,
    type AirTransportMissionAbridgedsOffsetPage as AirTransportMissionAbridgedsOffsetPage,
    type AirTransportMissionCreateParams as AirTransportMissionCreateParams,
    type AirTransportMissionRetrieveParams as AirTransportMissionRetrieveParams,
    type AirTransportMissionUpdateParams as AirTransportMissionUpdateParams,
    type AirTransportMissionListParams as AirTransportMissionListParams,
    type AirTransportMissionCountParams as AirTransportMissionCountParams,
    type AirTransportMissionTupleParams as AirTransportMissionTupleParams,
  };

  export {
    Aircraft as Aircraft,
    type AircraftAbridged as AircraftAbridged,
    type AircraftCountResponse as AircraftCountResponse,
    type AircraftQueryhelpResponse as AircraftQueryhelpResponse,
    type AircraftTupleResponse as AircraftTupleResponse,
    type AircraftAbridgedsOffsetPage as AircraftAbridgedsOffsetPage,
    type AircraftCreateParams as AircraftCreateParams,
    type AircraftRetrieveParams as AircraftRetrieveParams,
    type AircraftUpdateParams as AircraftUpdateParams,
    type AircraftListParams as AircraftListParams,
    type AircraftCountParams as AircraftCountParams,
    type AircraftTupleParams as AircraftTupleParams,
  };

  export {
    AircraftSorties as AircraftSorties,
    type AircraftSortyQueryhelpResponse as AircraftSortyQueryhelpResponse,
    type AircraftSortyTupleResponse as AircraftSortyTupleResponse,
    type AircraftSortyRetrieveParams as AircraftSortyRetrieveParams,
    type AircraftSortyUpdateParams as AircraftSortyUpdateParams,
    type AircraftSortyTupleParams as AircraftSortyTupleParams,
  };

  export {
    AircraftStatusRemarks as AircraftStatusRemarks,
    type AircraftstatusremarkAbridged as AircraftstatusremarkAbridged,
    type AircraftStatusRemarkCountResponse as AircraftStatusRemarkCountResponse,
    type AircraftStatusRemarkQueryhelpResponse as AircraftStatusRemarkQueryhelpResponse,
    type AircraftStatusRemarkTupleResponse as AircraftStatusRemarkTupleResponse,
    type AircraftstatusremarkAbridgedsOffsetPage as AircraftstatusremarkAbridgedsOffsetPage,
    type AircraftStatusRemarkCreateParams as AircraftStatusRemarkCreateParams,
    type AircraftStatusRemarkRetrieveParams as AircraftStatusRemarkRetrieveParams,
    type AircraftStatusRemarkUpdateParams as AircraftStatusRemarkUpdateParams,
    type AircraftStatusRemarkListParams as AircraftStatusRemarkListParams,
    type AircraftStatusRemarkCountParams as AircraftStatusRemarkCountParams,
    type AircraftStatusRemarkTupleParams as AircraftStatusRemarkTupleParams,
  };

  export {
    AircraftStatuses as AircraftStatuses,
    type AircraftstatusAbridged as AircraftstatusAbridged,
    type AircraftStatusCountResponse as AircraftStatusCountResponse,
    type AircraftStatusQueryhelpResponse as AircraftStatusQueryhelpResponse,
    type AircraftStatusTupleResponse as AircraftStatusTupleResponse,
    type AircraftstatusAbridgedsOffsetPage as AircraftstatusAbridgedsOffsetPage,
    type AircraftStatusCreateParams as AircraftStatusCreateParams,
    type AircraftStatusRetrieveParams as AircraftStatusRetrieveParams,
    type AircraftStatusUpdateParams as AircraftStatusUpdateParams,
    type AircraftStatusListParams as AircraftStatusListParams,
    type AircraftStatusCountParams as AircraftStatusCountParams,
    type AircraftStatusTupleParams as AircraftStatusTupleParams,
  };

  export {
    AirfieldSlotConsumptions as AirfieldSlotConsumptions,
    type AirfieldslotconsumptionAbridged as AirfieldslotconsumptionAbridged,
    type AirfieldSlotConsumptionCountResponse as AirfieldSlotConsumptionCountResponse,
    type AirfieldSlotConsumptionQueryhelpResponse as AirfieldSlotConsumptionQueryhelpResponse,
    type AirfieldSlotConsumptionTupleResponse as AirfieldSlotConsumptionTupleResponse,
    type AirfieldslotconsumptionAbridgedsOffsetPage as AirfieldslotconsumptionAbridgedsOffsetPage,
    type AirfieldSlotConsumptionCreateParams as AirfieldSlotConsumptionCreateParams,
    type AirfieldSlotConsumptionRetrieveParams as AirfieldSlotConsumptionRetrieveParams,
    type AirfieldSlotConsumptionUpdateParams as AirfieldSlotConsumptionUpdateParams,
    type AirfieldSlotConsumptionListParams as AirfieldSlotConsumptionListParams,
    type AirfieldSlotConsumptionCountParams as AirfieldSlotConsumptionCountParams,
    type AirfieldSlotConsumptionTupleParams as AirfieldSlotConsumptionTupleParams,
  };

  export {
    AirfieldSlots as AirfieldSlots,
    type AirfieldslotAbridged as AirfieldslotAbridged,
    type AirfieldSlotCountResponse as AirfieldSlotCountResponse,
    type AirfieldSlotQueryhelpResponse as AirfieldSlotQueryhelpResponse,
    type AirfieldSlotTupleResponse as AirfieldSlotTupleResponse,
    type AirfieldslotAbridgedsOffsetPage as AirfieldslotAbridgedsOffsetPage,
    type AirfieldSlotCreateParams as AirfieldSlotCreateParams,
    type AirfieldSlotRetrieveParams as AirfieldSlotRetrieveParams,
    type AirfieldSlotUpdateParams as AirfieldSlotUpdateParams,
    type AirfieldSlotListParams as AirfieldSlotListParams,
    type AirfieldSlotCountParams as AirfieldSlotCountParams,
    type AirfieldSlotTupleParams as AirfieldSlotTupleParams,
  };

  export {
    AirfieldStatus as AirfieldStatus,
    type AirfieldstatusAbridged as AirfieldstatusAbridged,
    type AirfieldStatusCountResponse as AirfieldStatusCountResponse,
    type AirfieldStatusQueryhelpResponse as AirfieldStatusQueryhelpResponse,
    type AirfieldStatusTupleResponse as AirfieldStatusTupleResponse,
    type AirfieldstatusAbridgedsOffsetPage as AirfieldstatusAbridgedsOffsetPage,
    type AirfieldStatusCreateParams as AirfieldStatusCreateParams,
    type AirfieldStatusRetrieveParams as AirfieldStatusRetrieveParams,
    type AirfieldStatusUpdateParams as AirfieldStatusUpdateParams,
    type AirfieldStatusListParams as AirfieldStatusListParams,
    type AirfieldStatusCountParams as AirfieldStatusCountParams,
    type AirfieldStatusTupleParams as AirfieldStatusTupleParams,
  };

  export {
    Airfields as Airfields,
    type AirfieldAbridged as AirfieldAbridged,
    type AirfieldCountResponse as AirfieldCountResponse,
    type AirfieldQueryhelpResponse as AirfieldQueryhelpResponse,
    type AirfieldTupleResponse as AirfieldTupleResponse,
    type AirfieldAbridgedsOffsetPage as AirfieldAbridgedsOffsetPage,
    type AirfieldCreateParams as AirfieldCreateParams,
    type AirfieldRetrieveParams as AirfieldRetrieveParams,
    type AirfieldUpdateParams as AirfieldUpdateParams,
    type AirfieldListParams as AirfieldListParams,
    type AirfieldCountParams as AirfieldCountParams,
    type AirfieldTupleParams as AirfieldTupleParams,
  };

  export {
    AirloadPlans as AirloadPlans,
    type AirloadplanAbridged as AirloadplanAbridged,
    type AirloadPlanCountResponse as AirloadPlanCountResponse,
    type AirloadPlanQueryhelpResponse as AirloadPlanQueryhelpResponse,
    type AirloadPlanTupleResponse as AirloadPlanTupleResponse,
    type AirloadplanAbridgedsOffsetPage as AirloadplanAbridgedsOffsetPage,
    type AirloadPlanCreateParams as AirloadPlanCreateParams,
    type AirloadPlanRetrieveParams as AirloadPlanRetrieveParams,
    type AirloadPlanUpdateParams as AirloadPlanUpdateParams,
    type AirloadPlanListParams as AirloadPlanListParams,
    type AirloadPlanCountParams as AirloadPlanCountParams,
    type AirloadPlanTupleParams as AirloadPlanTupleParams,
  };

  export {
    AirspaceControlOrders as AirspaceControlOrders,
    type AirspacecontrolorderAbridged as AirspacecontrolorderAbridged,
    type AirspaceControlOrderCountResponse as AirspaceControlOrderCountResponse,
    type AirspaceControlOrderQueryHelpResponse as AirspaceControlOrderQueryHelpResponse,
    type AirspaceControlOrderTupleResponse as AirspaceControlOrderTupleResponse,
    type AirspacecontrolorderAbridgedsOffsetPage as AirspacecontrolorderAbridgedsOffsetPage,
    type AirspaceControlOrderCreateParams as AirspaceControlOrderCreateParams,
    type AirspaceControlOrderRetrieveParams as AirspaceControlOrderRetrieveParams,
    type AirspaceControlOrderListParams as AirspaceControlOrderListParams,
    type AirspaceControlOrderCountParams as AirspaceControlOrderCountParams,
    type AirspaceControlOrderCreateBulkParams as AirspaceControlOrderCreateBulkParams,
    type AirspaceControlOrderTupleParams as AirspaceControlOrderTupleParams,
  };

  export {
    AIs as AIs,
    type AIsAbridged as AIsAbridged,
    type AICountResponse as AICountResponse,
    type AIQueryhelpResponse as AIQueryhelpResponse,
    type AITupleResponse as AITupleResponse,
    type AIsAbridgedsOffsetPage as AIsAbridgedsOffsetPage,
    type AIListParams as AIListParams,
    type AICountParams as AICountParams,
    type AICreateBulkParams as AICreateBulkParams,
    type AITupleParams as AITupleParams,
  };

  export {
    AIsObjects as AIsObjects,
    type AIsObjectUnvalidatedPublishParams as AIsObjectUnvalidatedPublishParams,
  };

  export {
    AnalyticImagery as AnalyticImagery,
    type AnalyticImageryAbridged as AnalyticImageryAbridged,
    type AnalyticImageryCountResponse as AnalyticImageryCountResponse,
    type AnalyticImageryQueryhelpResponse as AnalyticImageryQueryhelpResponse,
    type AnalyticImageryTupleResponse as AnalyticImageryTupleResponse,
    type AnalyticImageryAbridgedsOffsetPage as AnalyticImageryAbridgedsOffsetPage,
    type AnalyticImageryRetrieveParams as AnalyticImageryRetrieveParams,
    type AnalyticImageryListParams as AnalyticImageryListParams,
    type AnalyticImageryCountParams as AnalyticImageryCountParams,
    type AnalyticImageryFileGetParams as AnalyticImageryFileGetParams,
    type AnalyticImageryTupleParams as AnalyticImageryTupleParams,
    type AnalyticImageryUnvalidatedPublishParams as AnalyticImageryUnvalidatedPublishParams,
  };

  export {
    Antennas as Antennas,
    type AntennaAbridged as AntennaAbridged,
    type AntennaCountResponse as AntennaCountResponse,
    type AntennaQueryhelpResponse as AntennaQueryhelpResponse,
    type AntennaTupleResponse as AntennaTupleResponse,
    type AntennaAbridgedsOffsetPage as AntennaAbridgedsOffsetPage,
    type AntennaCreateParams as AntennaCreateParams,
    type AntennaRetrieveParams as AntennaRetrieveParams,
    type AntennaUpdateParams as AntennaUpdateParams,
    type AntennaListParams as AntennaListParams,
    type AntennaCountParams as AntennaCountParams,
    type AntennaTupleParams as AntennaTupleParams,
  };

  export {
    AttitudeData as AttitudeData,
    type AttitudeDataQueryHelpResponse as AttitudeDataQueryHelpResponse,
    type AttitudeDataTupleResponse as AttitudeDataTupleResponse,
    type AttitudeDataTupleParams as AttitudeDataTupleParams,
  };

  export {
    AttitudeSets as AttitudeSets,
    type AttitudesetAbridged as AttitudesetAbridged,
    type AttitudeSetCountResponse as AttitudeSetCountResponse,
    type AttitudeSetQueryHelpResponse as AttitudeSetQueryHelpResponse,
    type AttitudeSetTupleResponse as AttitudeSetTupleResponse,
    type AttitudesetAbridgedsOffsetPage as AttitudesetAbridgedsOffsetPage,
    type AttitudeSetCreateParams as AttitudeSetCreateParams,
    type AttitudeSetRetrieveParams as AttitudeSetRetrieveParams,
    type AttitudeSetListParams as AttitudeSetListParams,
    type AttitudeSetCountParams as AttitudeSetCountParams,
    type AttitudeSetTupleParams as AttitudeSetTupleParams,
    type AttitudeSetUnvalidatedPublishParams as AttitudeSetUnvalidatedPublishParams,
  };

  export {
    AviationRiskManagement as AviationRiskManagement,
    type AviationRiskManagementRetrieveResponse as AviationRiskManagementRetrieveResponse,
    type AviationRiskManagementListResponse as AviationRiskManagementListResponse,
    type AviationRiskManagementCountResponse as AviationRiskManagementCountResponse,
    type AviationRiskManagementQueryHelpResponse as AviationRiskManagementQueryHelpResponse,
    type AviationRiskManagementTupleResponse as AviationRiskManagementTupleResponse,
    type AviationRiskManagementListResponsesOffsetPage as AviationRiskManagementListResponsesOffsetPage,
    type AviationRiskManagementCreateParams as AviationRiskManagementCreateParams,
    type AviationRiskManagementRetrieveParams as AviationRiskManagementRetrieveParams,
    type AviationRiskManagementUpdateParams as AviationRiskManagementUpdateParams,
    type AviationRiskManagementListParams as AviationRiskManagementListParams,
    type AviationRiskManagementCountParams as AviationRiskManagementCountParams,
    type AviationRiskManagementCreateBulkParams as AviationRiskManagementCreateBulkParams,
    type AviationRiskManagementTupleParams as AviationRiskManagementTupleParams,
    type AviationRiskManagementUnvalidatedPublishParams as AviationRiskManagementUnvalidatedPublishParams,
  };

  export {
    Batteries as Batteries,
    type BatteryAbridged as BatteryAbridged,
    type BatteryCountResponse as BatteryCountResponse,
    type BatteryQueryhelpResponse as BatteryQueryhelpResponse,
    type BatteryTupleResponse as BatteryTupleResponse,
    type BatteryAbridgedsOffsetPage as BatteryAbridgedsOffsetPage,
    type BatteryCreateParams as BatteryCreateParams,
    type BatteryRetrieveParams as BatteryRetrieveParams,
    type BatteryUpdateParams as BatteryUpdateParams,
    type BatteryListParams as BatteryListParams,
    type BatteryCountParams as BatteryCountParams,
    type BatteryTupleParams as BatteryTupleParams,
  };

  export {
    Batterydetails as Batterydetails,
    type BatterydetailsAbridged as BatterydetailsAbridged,
    type BatterydetailsAbridgedsOffsetPage as BatterydetailsAbridgedsOffsetPage,
    type BatterydetailCreateParams as BatterydetailCreateParams,
    type BatterydetailRetrieveParams as BatterydetailRetrieveParams,
    type BatterydetailUpdateParams as BatterydetailUpdateParams,
    type BatterydetailListParams as BatterydetailListParams,
  };

  export {
    Beam as Beam,
    type BeamAbridged as BeamAbridged,
    type BeamCountResponse as BeamCountResponse,
    type BeamQueryHelpResponse as BeamQueryHelpResponse,
    type BeamTupleResponse as BeamTupleResponse,
    type BeamAbridgedsOffsetPage as BeamAbridgedsOffsetPage,
    type BeamCreateParams as BeamCreateParams,
    type BeamRetrieveParams as BeamRetrieveParams,
    type BeamUpdateParams as BeamUpdateParams,
    type BeamListParams as BeamListParams,
    type BeamCountParams as BeamCountParams,
    type BeamTupleParams as BeamTupleParams,
  };

  export {
    BeamContours as BeamContours,
    type BeamcontourAbridged as BeamcontourAbridged,
    type BeamContourCountResponse as BeamContourCountResponse,
    type BeamContourQueryHelpResponse as BeamContourQueryHelpResponse,
    type BeamContourTupleResponse as BeamContourTupleResponse,
    type BeamcontourAbridgedsOffsetPage as BeamcontourAbridgedsOffsetPage,
    type BeamContourCreateParams as BeamContourCreateParams,
    type BeamContourRetrieveParams as BeamContourRetrieveParams,
    type BeamContourUpdateParams as BeamContourUpdateParams,
    type BeamContourListParams as BeamContourListParams,
    type BeamContourCountParams as BeamContourCountParams,
    type BeamContourCreateBulkParams as BeamContourCreateBulkParams,
    type BeamContourTupleParams as BeamContourTupleParams,
  };

  export {
    Buses as Buses,
    type BusAbridged as BusAbridged,
    type BusCountResponse as BusCountResponse,
    type BusQueryHelpResponse as BusQueryHelpResponse,
    type BusTupleResponse as BusTupleResponse,
    type BusAbridgedsOffsetPage as BusAbridgedsOffsetPage,
    type BusCreateParams as BusCreateParams,
    type BusRetrieveParams as BusRetrieveParams,
    type BusUpdateParams as BusUpdateParams,
    type BusListParams as BusListParams,
    type BusCountParams as BusCountParams,
    type BusTupleParams as BusTupleParams,
  };

  export {
    Channels as Channels,
    type ChannelAbridged as ChannelAbridged,
    type ChannelCountResponse as ChannelCountResponse,
    type ChannelQueryhelpResponse as ChannelQueryhelpResponse,
    type ChannelTupleResponse as ChannelTupleResponse,
    type ChannelAbridgedsOffsetPage as ChannelAbridgedsOffsetPage,
    type ChannelCreateParams as ChannelCreateParams,
    type ChannelRetrieveParams as ChannelRetrieveParams,
    type ChannelUpdateParams as ChannelUpdateParams,
    type ChannelListParams as ChannelListParams,
    type ChannelCountParams as ChannelCountParams,
    type ChannelTupleParams as ChannelTupleParams,
  };

  export {
    CollectRequests as CollectRequests,
    type CollectRequestAbridged as CollectRequestAbridged,
    type CollectRequestCountResponse as CollectRequestCountResponse,
    type CollectRequestQueryHelpResponse as CollectRequestQueryHelpResponse,
    type CollectRequestTupleResponse as CollectRequestTupleResponse,
    type CollectRequestAbridgedsOffsetPage as CollectRequestAbridgedsOffsetPage,
    type CollectRequestCreateParams as CollectRequestCreateParams,
    type CollectRequestRetrieveParams as CollectRequestRetrieveParams,
    type CollectRequestListParams as CollectRequestListParams,
    type CollectRequestCountParams as CollectRequestCountParams,
    type CollectRequestCreateBulkParams as CollectRequestCreateBulkParams,
    type CollectRequestTupleParams as CollectRequestTupleParams,
    type CollectRequestUnvalidatedPublishParams as CollectRequestUnvalidatedPublishParams,
  };

  export {
    CollectResponses as CollectResponses,
    type CollectResponseAbridged as CollectResponseAbridged,
    type CollectResponseCountResponse as CollectResponseCountResponse,
    type CollectResponseQueryHelpResponse as CollectResponseQueryHelpResponse,
    type CollectResponseAbridgedsOffsetPage as CollectResponseAbridgedsOffsetPage,
    type CollectResponseCreateParams as CollectResponseCreateParams,
    type CollectResponseRetrieveParams as CollectResponseRetrieveParams,
    type CollectResponseListParams as CollectResponseListParams,
    type CollectResponseCountParams as CollectResponseCountParams,
    type CollectResponseCreateBulkParams as CollectResponseCreateBulkParams,
    type CollectResponseUnvalidatedPublishParams as CollectResponseUnvalidatedPublishParams,
  };

  export {
    Comm as Comm,
    type CommAbridged as CommAbridged,
    type CommCountResponse as CommCountResponse,
    type CommQueryhelpResponse as CommQueryhelpResponse,
    type CommTupleResponse as CommTupleResponse,
    type CommAbridgedsOffsetPage as CommAbridgedsOffsetPage,
    type CommCreateParams as CommCreateParams,
    type CommRetrieveParams as CommRetrieveParams,
    type CommUpdateParams as CommUpdateParams,
    type CommListParams as CommListParams,
    type CommCountParams as CommCountParams,
    type CommTupleParams as CommTupleParams,
  };

  export {
    Conjunctions as Conjunctions,
    type ConjunctionAbridged as ConjunctionAbridged,
    type ConjunctionCountResponse as ConjunctionCountResponse,
    type ConjunctionGetHistoryResponse as ConjunctionGetHistoryResponse,
    type ConjunctionQueryhelpResponse as ConjunctionQueryhelpResponse,
    type ConjunctionTupleResponse as ConjunctionTupleResponse,
    type ConjunctionAbridgedsOffsetPage as ConjunctionAbridgedsOffsetPage,
    type ConjunctionRetrieveParams as ConjunctionRetrieveParams,
    type ConjunctionListParams as ConjunctionListParams,
    type ConjunctionCountParams as ConjunctionCountParams,
    type ConjunctionCreateUdlParams as ConjunctionCreateUdlParams,
    type ConjunctionCreateBulkParams as ConjunctionCreateBulkParams,
    type ConjunctionGetHistoryParams as ConjunctionGetHistoryParams,
    type ConjunctionTupleParams as ConjunctionTupleParams,
    type ConjunctionUnvalidatedPublishParams as ConjunctionUnvalidatedPublishParams,
    type ConjunctionUploadConjunctionDataMessageParams as ConjunctionUploadConjunctionDataMessageParams,
  };

  export { Cots as Cots, type CotCreateParams as CotCreateParams };

  export {
    Countries as Countries,
    type CountryAbridged as CountryAbridged,
    type CountryCountResponse as CountryCountResponse,
    type CountryQueryhelpResponse as CountryQueryhelpResponse,
    type CountryTupleResponse as CountryTupleResponse,
    type CountryAbridgedsOffsetPage as CountryAbridgedsOffsetPage,
    type CountryCreateParams as CountryCreateParams,
    type CountryRetrieveParams as CountryRetrieveParams,
    type CountryUpdateParams as CountryUpdateParams,
    type CountryListParams as CountryListParams,
    type CountryCountParams as CountryCountParams,
    type CountryTupleParams as CountryTupleParams,
  };

  export {
    Crew as Crew,
    type CrewAbridged as CrewAbridged,
    type CrewCountResponse as CrewCountResponse,
    type CrewQueryhelpResponse as CrewQueryhelpResponse,
    type CrewTupleResponse as CrewTupleResponse,
    type CrewAbridgedsOffsetPage as CrewAbridgedsOffsetPage,
    type CrewCreateParams as CrewCreateParams,
    type CrewRetrieveParams as CrewRetrieveParams,
    type CrewUpdateParams as CrewUpdateParams,
    type CrewListParams as CrewListParams,
    type CrewCountParams as CrewCountParams,
    type CrewTupleParams as CrewTupleParams,
    type CrewUnvalidatedPublishParams as CrewUnvalidatedPublishParams,
  };

  export {
    Deconflictset as Deconflictset,
    type DeconflictsetListResponse as DeconflictsetListResponse,
    type DeconflictsetCountResponse as DeconflictsetCountResponse,
    type DeconflictsetGetResponse as DeconflictsetGetResponse,
    type DeconflictsetQueryhelpResponse as DeconflictsetQueryhelpResponse,
    type DeconflictsetTupleResponse as DeconflictsetTupleResponse,
    type DeconflictsetListResponsesOffsetPage as DeconflictsetListResponsesOffsetPage,
    type DeconflictsetCreateParams as DeconflictsetCreateParams,
    type DeconflictsetListParams as DeconflictsetListParams,
    type DeconflictsetCountParams as DeconflictsetCountParams,
    type DeconflictsetGetParams as DeconflictsetGetParams,
    type DeconflictsetTupleParams as DeconflictsetTupleParams,
    type DeconflictsetUnvalidatedPublishParams as DeconflictsetUnvalidatedPublishParams,
  };

  export {
    DiffOfArrival as DiffOfArrival,
    type DiffOfArrivalQueryhelpResponse as DiffOfArrivalQueryhelpResponse,
    type DiffOfArrivalTupleResponse as DiffOfArrivalTupleResponse,
    type DiffOfArrivalRetrieveParams as DiffOfArrivalRetrieveParams,
    type DiffOfArrivalTupleParams as DiffOfArrivalTupleParams,
    type DiffOfArrivalUnvalidatedPublishParams as DiffOfArrivalUnvalidatedPublishParams,
  };

  export {
    DiplomaticClearance as DiplomaticClearance,
    type DiplomaticClearanceCountResponse as DiplomaticClearanceCountResponse,
    type DiplomaticClearanceQueryhelpResponse as DiplomaticClearanceQueryhelpResponse,
    type DiplomaticClearanceTupleResponse as DiplomaticClearanceTupleResponse,
    type DiplomaticClearanceCreateParams as DiplomaticClearanceCreateParams,
    type DiplomaticClearanceRetrieveParams as DiplomaticClearanceRetrieveParams,
    type DiplomaticClearanceUpdateParams as DiplomaticClearanceUpdateParams,
    type DiplomaticClearanceListParams as DiplomaticClearanceListParams,
    type DiplomaticClearanceCountParams as DiplomaticClearanceCountParams,
    type DiplomaticClearanceCreateBulkParams as DiplomaticClearanceCreateBulkParams,
    type DiplomaticClearanceTupleParams as DiplomaticClearanceTupleParams,
  };

  export {
    DriftHistory as DriftHistory,
    type DriftHistoryCountResponse as DriftHistoryCountResponse,
    type DriftHistoryQueryhelpResponse as DriftHistoryQueryhelpResponse,
    type DriftHistoryTupleResponse as DriftHistoryTupleResponse,
    type DriftHistoryRetrieveParams as DriftHistoryRetrieveParams,
    type DriftHistoryListParams as DriftHistoryListParams,
    type DriftHistoryCountParams as DriftHistoryCountParams,
    type DriftHistoryTupleParams as DriftHistoryTupleParams,
  };

  export {
    Dropzone as Dropzone,
    type DropzoneRetrieveResponse as DropzoneRetrieveResponse,
    type DropzoneListResponse as DropzoneListResponse,
    type DropzoneCountResponse as DropzoneCountResponse,
    type DropzoneQueryHelpResponse as DropzoneQueryHelpResponse,
    type DropzoneTupleResponse as DropzoneTupleResponse,
    type DropzoneListResponsesOffsetPage as DropzoneListResponsesOffsetPage,
    type DropzoneCreateParams as DropzoneCreateParams,
    type DropzoneRetrieveParams as DropzoneRetrieveParams,
    type DropzoneUpdateParams as DropzoneUpdateParams,
    type DropzoneListParams as DropzoneListParams,
    type DropzoneCountParams as DropzoneCountParams,
    type DropzoneCreateBulkParams as DropzoneCreateBulkParams,
    type DropzoneTupleParams as DropzoneTupleParams,
    type DropzoneUnvalidatedPublishParams as DropzoneUnvalidatedPublishParams,
  };

  export {
    Ecpedr as Ecpedr,
    type EcpedrListResponse as EcpedrListResponse,
    type EcpedrCountResponse as EcpedrCountResponse,
    type EcpedrQueryhelpResponse as EcpedrQueryhelpResponse,
    type EcpedrTupleResponse as EcpedrTupleResponse,
    type EcpedrListResponsesOffsetPage as EcpedrListResponsesOffsetPage,
    type EcpedrCreateParams as EcpedrCreateParams,
    type EcpedrListParams as EcpedrListParams,
    type EcpedrCountParams as EcpedrCountParams,
    type EcpedrCreateBulkParams as EcpedrCreateBulkParams,
    type EcpedrTupleParams as EcpedrTupleParams,
    type EcpedrUnvalidatedPublishParams as EcpedrUnvalidatedPublishParams,
  };

  export {
    EffectRequests as EffectRequests,
    type EffectRequestRetrieveResponse as EffectRequestRetrieveResponse,
    type EffectRequestListResponse as EffectRequestListResponse,
    type EffectRequestCountResponse as EffectRequestCountResponse,
    type EffectRequestQueryHelpResponse as EffectRequestQueryHelpResponse,
    type EffectRequestTupleResponse as EffectRequestTupleResponse,
    type EffectRequestListResponsesOffsetPage as EffectRequestListResponsesOffsetPage,
    type EffectRequestCreateParams as EffectRequestCreateParams,
    type EffectRequestRetrieveParams as EffectRequestRetrieveParams,
    type EffectRequestListParams as EffectRequestListParams,
    type EffectRequestCountParams as EffectRequestCountParams,
    type EffectRequestCreateBulkParams as EffectRequestCreateBulkParams,
    type EffectRequestTupleParams as EffectRequestTupleParams,
    type EffectRequestUnvalidatedPublishParams as EffectRequestUnvalidatedPublishParams,
  };

  export {
    EffectResponses as EffectResponses,
    type EffectResponseActionsListFull as EffectResponseActionsListFull,
    type EffectResponseMetricsFull as EffectResponseMetricsFull,
    type EffectResponseRetrieveResponse as EffectResponseRetrieveResponse,
    type EffectResponseListResponse as EffectResponseListResponse,
    type EffectResponseCountResponse as EffectResponseCountResponse,
    type EffectResponseQueryHelpResponse as EffectResponseQueryHelpResponse,
    type EffectResponseTupleResponse as EffectResponseTupleResponse,
    type EffectResponseListResponsesOffsetPage as EffectResponseListResponsesOffsetPage,
    type EffectResponseCreateParams as EffectResponseCreateParams,
    type EffectResponseRetrieveParams as EffectResponseRetrieveParams,
    type EffectResponseListParams as EffectResponseListParams,
    type EffectResponseCountParams as EffectResponseCountParams,
    type EffectResponseCreateBulkParams as EffectResponseCreateBulkParams,
    type EffectResponseTupleParams as EffectResponseTupleParams,
    type EffectResponseUnvalidatedPublishParams as EffectResponseUnvalidatedPublishParams,
  };

  export {
    Elsets as Elsets,
    type Elset as Elset,
    type ElsetIngest as ElsetIngest,
    type ElsetAbridged as ElsetAbridged,
    type ElsetCountResponse as ElsetCountResponse,
    type ElsetQueryCurrentElsetHelpResponse as ElsetQueryCurrentElsetHelpResponse,
    type ElsetQueryhelpResponse as ElsetQueryhelpResponse,
    type ElsetTupleResponse as ElsetTupleResponse,
    type ElsetAbridgedsOffsetPage as ElsetAbridgedsOffsetPage,
    type ElsetCreateParams as ElsetCreateParams,
    type ElsetRetrieveParams as ElsetRetrieveParams,
    type ElsetListParams as ElsetListParams,
    type ElsetCountParams as ElsetCountParams,
    type ElsetCreateBulkParams as ElsetCreateBulkParams,
    type ElsetCreateBulkFromTleParams as ElsetCreateBulkFromTleParams,
    type ElsetTupleParams as ElsetTupleParams,
    type ElsetUnvalidatedPublishParams as ElsetUnvalidatedPublishParams,
  };

  export {
    Emireport as Emireport,
    type EmireportListResponse as EmireportListResponse,
    type EmireportCountResponse as EmireportCountResponse,
    type EmireportGetResponse as EmireportGetResponse,
    type EmireportQueryhelpResponse as EmireportQueryhelpResponse,
    type EmireportTupleResponse as EmireportTupleResponse,
    type EmireportListResponsesOffsetPage as EmireportListResponsesOffsetPage,
    type EmireportCreateParams as EmireportCreateParams,
    type EmireportListParams as EmireportListParams,
    type EmireportCountParams as EmireportCountParams,
    type EmireportCreateBulkParams as EmireportCreateBulkParams,
    type EmireportGetParams as EmireportGetParams,
    type EmireportTupleParams as EmireportTupleParams,
    type EmireportUnvalidatedPublishParams as EmireportUnvalidatedPublishParams,
  };

  export {
    EmitterGeolocation as EmitterGeolocation,
    type EmitterGeolocationRetrieveResponse as EmitterGeolocationRetrieveResponse,
    type EmitterGeolocationListResponse as EmitterGeolocationListResponse,
    type EmitterGeolocationCountResponse as EmitterGeolocationCountResponse,
    type EmitterGeolocationQueryHelpResponse as EmitterGeolocationQueryHelpResponse,
    type EmitterGeolocationTupleResponse as EmitterGeolocationTupleResponse,
    type EmitterGeolocationListResponsesOffsetPage as EmitterGeolocationListResponsesOffsetPage,
    type EmitterGeolocationCreateParams as EmitterGeolocationCreateParams,
    type EmitterGeolocationRetrieveParams as EmitterGeolocationRetrieveParams,
    type EmitterGeolocationListParams as EmitterGeolocationListParams,
    type EmitterGeolocationCountParams as EmitterGeolocationCountParams,
    type EmitterGeolocationCreateBulkParams as EmitterGeolocationCreateBulkParams,
    type EmitterGeolocationTupleParams as EmitterGeolocationTupleParams,
    type EmitterGeolocationUnvalidatedPublishParams as EmitterGeolocationUnvalidatedPublishParams,
  };

  export {
    EngineDetails as EngineDetails,
    type EngineDetailsAbridged as EngineDetailsAbridged,
    type EngineDetailsAbridgedsOffsetPage as EngineDetailsAbridgedsOffsetPage,
    type EngineDetailCreateParams as EngineDetailCreateParams,
    type EngineDetailRetrieveParams as EngineDetailRetrieveParams,
    type EngineDetailUpdateParams as EngineDetailUpdateParams,
    type EngineDetailListParams as EngineDetailListParams,
  };

  export {
    Engines as Engines,
    type EngineAbridged as EngineAbridged,
    type EngineCountResponse as EngineCountResponse,
    type EngineQueryhelpResponse as EngineQueryhelpResponse,
    type EngineTupleResponse as EngineTupleResponse,
    type EngineAbridgedsOffsetPage as EngineAbridgedsOffsetPage,
    type EngineCreateParams as EngineCreateParams,
    type EngineRetrieveParams as EngineRetrieveParams,
    type EngineUpdateParams as EngineUpdateParams,
    type EngineListParams as EngineListParams,
    type EngineCountParams as EngineCountParams,
    type EngineTupleParams as EngineTupleParams,
  };

  export {
    Entities as Entities,
    type EntityAbridged as EntityAbridged,
    type EntityIngest as EntityIngest,
    type EntityCountResponse as EntityCountResponse,
    type EntityGetAllTypesResponse as EntityGetAllTypesResponse,
    type EntityQueryHelpResponse as EntityQueryHelpResponse,
    type EntityTupleResponse as EntityTupleResponse,
    type EntityAbridgedsOffsetPage as EntityAbridgedsOffsetPage,
    type EntityCreateParams as EntityCreateParams,
    type EntityRetrieveParams as EntityRetrieveParams,
    type EntityUpdateParams as EntityUpdateParams,
    type EntityListParams as EntityListParams,
    type EntityCountParams as EntityCountParams,
    type EntityGetAllTypesParams as EntityGetAllTypesParams,
    type EntityTupleParams as EntityTupleParams,
  };

  export {
    Eop as Eop,
    type EopAbridged as EopAbridged,
    type EopCountResponse as EopCountResponse,
    type EopListTupleResponse as EopListTupleResponse,
    type EopQueryhelpResponse as EopQueryhelpResponse,
    type EopAbridgedsOffsetPage as EopAbridgedsOffsetPage,
    type EopCreateParams as EopCreateParams,
    type EopRetrieveParams as EopRetrieveParams,
    type EopUpdateParams as EopUpdateParams,
    type EopListParams as EopListParams,
    type EopCountParams as EopCountParams,
    type EopListTupleParams as EopListTupleParams,
  };

  export {
    Ephemeris as Ephemeris,
    type EphemerisAbridged as EphemerisAbridged,
    type EphemerisCountResponse as EphemerisCountResponse,
    type EphemerisQueryhelpResponse as EphemerisQueryhelpResponse,
    type EphemerisTupleResponse as EphemerisTupleResponse,
    type EphemerisAbridgedsOffsetPage as EphemerisAbridgedsOffsetPage,
    type EphemerisListParams as EphemerisListParams,
    type EphemerisCountParams as EphemerisCountParams,
    type EphemerisFileUploadParams as EphemerisFileUploadParams,
    type EphemerisTupleParams as EphemerisTupleParams,
    type EphemerisUnvalidatedPublishParams as EphemerisUnvalidatedPublishParams,
  };

  export {
    EphemerisSets as EphemerisSets,
    type EphemerisSet as EphemerisSet,
    type EphemerisSetAbridged as EphemerisSetAbridged,
    type EphemerisSetCountResponse as EphemerisSetCountResponse,
    type EphemerisSetQueryhelpResponse as EphemerisSetQueryhelpResponse,
    type EphemerisSetTupleResponse as EphemerisSetTupleResponse,
    type EphemerisSetAbridgedsOffsetPage as EphemerisSetAbridgedsOffsetPage,
    type EphemerisSetCreateParams as EphemerisSetCreateParams,
    type EphemerisSetRetrieveParams as EphemerisSetRetrieveParams,
    type EphemerisSetListParams as EphemerisSetListParams,
    type EphemerisSetCountParams as EphemerisSetCountParams,
    type EphemerisSetFileRetrieveParams as EphemerisSetFileRetrieveParams,
    type EphemerisSetTupleParams as EphemerisSetTupleParams,
  };

  export {
    Equipment as Equipment,
    type EquipmentAbridged as EquipmentAbridged,
    type EquipmentFull as EquipmentFull,
    type EquipmentCountResponse as EquipmentCountResponse,
    type EquipmentQueryHelpResponse as EquipmentQueryHelpResponse,
    type EquipmentTupleResponse as EquipmentTupleResponse,
    type EquipmentAbridgedsOffsetPage as EquipmentAbridgedsOffsetPage,
    type EquipmentCreateParams as EquipmentCreateParams,
    type EquipmentRetrieveParams as EquipmentRetrieveParams,
    type EquipmentUpdateParams as EquipmentUpdateParams,
    type EquipmentListParams as EquipmentListParams,
    type EquipmentCountParams as EquipmentCountParams,
    type EquipmentCreateBulkParams as EquipmentCreateBulkParams,
    type EquipmentTupleParams as EquipmentTupleParams,
  };

  export {
    EquipmentRemarks as EquipmentRemarks,
    type EquipmentRemarkAbridged as EquipmentRemarkAbridged,
    type EquipmentRemarkFull as EquipmentRemarkFull,
    type EquipmentRemarkCountResponse as EquipmentRemarkCountResponse,
    type EquipmentRemarkQueryHelpResponse as EquipmentRemarkQueryHelpResponse,
    type EquipmentRemarkTupleResponse as EquipmentRemarkTupleResponse,
    type EquipmentRemarkAbridgedsOffsetPage as EquipmentRemarkAbridgedsOffsetPage,
    type EquipmentRemarkCreateParams as EquipmentRemarkCreateParams,
    type EquipmentRemarkRetrieveParams as EquipmentRemarkRetrieveParams,
    type EquipmentRemarkListParams as EquipmentRemarkListParams,
    type EquipmentRemarkCountParams as EquipmentRemarkCountParams,
    type EquipmentRemarkCreateBulkParams as EquipmentRemarkCreateBulkParams,
    type EquipmentRemarkTupleParams as EquipmentRemarkTupleParams,
  };

  export {
    Evac as Evac,
    type EvacAbridged as EvacAbridged,
    type EvacCountResponse as EvacCountResponse,
    type EvacQueryHelpResponse as EvacQueryHelpResponse,
    type EvacAbridgedsOffsetPage as EvacAbridgedsOffsetPage,
    type EvacCreateParams as EvacCreateParams,
    type EvacRetrieveParams as EvacRetrieveParams,
    type EvacListParams as EvacListParams,
    type EvacCountParams as EvacCountParams,
    type EvacCreateBulkParams as EvacCreateBulkParams,
    type EvacUnvalidatedPublishParams as EvacUnvalidatedPublishParams,
  };

  export {
    EventEvolution as EventEvolution,
    type EventEvolutionListResponse as EventEvolutionListResponse,
    type EventEvolutionCountResponse as EventEvolutionCountResponse,
    type EventEvolutionQueryhelpResponse as EventEvolutionQueryhelpResponse,
    type EventEvolutionTupleResponse as EventEvolutionTupleResponse,
    type EventEvolutionListResponsesOffsetPage as EventEvolutionListResponsesOffsetPage,
    type EventEvolutionCreateParams as EventEvolutionCreateParams,
    type EventEvolutionRetrieveParams as EventEvolutionRetrieveParams,
    type EventEvolutionListParams as EventEvolutionListParams,
    type EventEvolutionCountParams as EventEvolutionCountParams,
    type EventEvolutionCreateBulkParams as EventEvolutionCreateBulkParams,
    type EventEvolutionTupleParams as EventEvolutionTupleParams,
    type EventEvolutionUnvalidatedPublishParams as EventEvolutionUnvalidatedPublishParams,
  };

  export {
    FeatureAssessment as FeatureAssessment,
    type FeatureAssessmentRetrieveResponse as FeatureAssessmentRetrieveResponse,
    type FeatureAssessmentListResponse as FeatureAssessmentListResponse,
    type FeatureAssessmentCountResponse as FeatureAssessmentCountResponse,
    type FeatureAssessmentQueryHelpResponse as FeatureAssessmentQueryHelpResponse,
    type FeatureAssessmentTupleResponse as FeatureAssessmentTupleResponse,
    type FeatureAssessmentListResponsesOffsetPage as FeatureAssessmentListResponsesOffsetPage,
    type FeatureAssessmentCreateParams as FeatureAssessmentCreateParams,
    type FeatureAssessmentRetrieveParams as FeatureAssessmentRetrieveParams,
    type FeatureAssessmentListParams as FeatureAssessmentListParams,
    type FeatureAssessmentCountParams as FeatureAssessmentCountParams,
    type FeatureAssessmentCreateBulkParams as FeatureAssessmentCreateBulkParams,
    type FeatureAssessmentTupleParams as FeatureAssessmentTupleParams,
    type FeatureAssessmentUnvalidatedPublishParams as FeatureAssessmentUnvalidatedPublishParams,
  };

  export {
    Flightplan as Flightplan,
    type FlightPlanAbridged as FlightPlanAbridged,
    type FlightplanCountResponse as FlightplanCountResponse,
    type FlightplanQueryhelpResponse as FlightplanQueryhelpResponse,
    type FlightplanTupleResponse as FlightplanTupleResponse,
    type FlightPlanAbridgedsOffsetPage as FlightPlanAbridgedsOffsetPage,
    type FlightplanCreateParams as FlightplanCreateParams,
    type FlightplanRetrieveParams as FlightplanRetrieveParams,
    type FlightplanUpdateParams as FlightplanUpdateParams,
    type FlightplanListParams as FlightplanListParams,
    type FlightplanCountParams as FlightplanCountParams,
    type FlightplanTupleParams as FlightplanTupleParams,
    type FlightplanUnvalidatedPublishParams as FlightplanUnvalidatedPublishParams,
  };

  export {
    GeoStatus as GeoStatus,
    type GeoStatusListResponse as GeoStatusListResponse,
    type GeoStatusCountResponse as GeoStatusCountResponse,
    type GeoStatusQueryhelpResponse as GeoStatusQueryhelpResponse,
    type GeoStatusTupleResponse as GeoStatusTupleResponse,
    type GeoStatusListResponsesOffsetPage as GeoStatusListResponsesOffsetPage,
    type GeoStatusCreateParams as GeoStatusCreateParams,
    type GeoStatusListParams as GeoStatusListParams,
    type GeoStatusCountParams as GeoStatusCountParams,
    type GeoStatusCreateBulkParams as GeoStatusCreateBulkParams,
    type GeoStatusGetParams as GeoStatusGetParams,
    type GeoStatusTupleParams as GeoStatusTupleParams,
  };

  export {
    GlobalAtmosphericModel as GlobalAtmosphericModel,
    type GlobalAtmosphericModelRetrieveResponse as GlobalAtmosphericModelRetrieveResponse,
    type GlobalAtmosphericModelListResponse as GlobalAtmosphericModelListResponse,
    type GlobalAtmosphericModelCountResponse as GlobalAtmosphericModelCountResponse,
    type GlobalAtmosphericModelQueryHelpResponse as GlobalAtmosphericModelQueryHelpResponse,
    type GlobalAtmosphericModelTupleResponse as GlobalAtmosphericModelTupleResponse,
    type GlobalAtmosphericModelListResponsesOffsetPage as GlobalAtmosphericModelListResponsesOffsetPage,
    type GlobalAtmosphericModelRetrieveParams as GlobalAtmosphericModelRetrieveParams,
    type GlobalAtmosphericModelListParams as GlobalAtmosphericModelListParams,
    type GlobalAtmosphericModelCountParams as GlobalAtmosphericModelCountParams,
    type GlobalAtmosphericModelGetFileParams as GlobalAtmosphericModelGetFileParams,
    type GlobalAtmosphericModelTupleParams as GlobalAtmosphericModelTupleParams,
    type GlobalAtmosphericModelUnvalidatedPublishParams as GlobalAtmosphericModelUnvalidatedPublishParams,
  };

  export { GnssObservations as GnssObservations };

  export {
    GnssObservationset as GnssObservationset,
    type GnssObservationsetListResponse as GnssObservationsetListResponse,
    type GnssObservationsetCountResponse as GnssObservationsetCountResponse,
    type GnssObservationsetQueryhelpResponse as GnssObservationsetQueryhelpResponse,
    type GnssObservationsetTupleResponse as GnssObservationsetTupleResponse,
    type GnssObservationsetListResponsesOffsetPage as GnssObservationsetListResponsesOffsetPage,
    type GnssObservationsetListParams as GnssObservationsetListParams,
    type GnssObservationsetCountParams as GnssObservationsetCountParams,
    type GnssObservationsetCreateBulkParams as GnssObservationsetCreateBulkParams,
    type GnssObservationsetTupleParams as GnssObservationsetTupleParams,
    type GnssObservationsetUnvalidatedPublishParams as GnssObservationsetUnvalidatedPublishParams,
  };

  export {
    GnssRawIf as GnssRawIf,
    type GnssRawIfListResponse as GnssRawIfListResponse,
    type GnssRawIfCountResponse as GnssRawIfCountResponse,
    type GnssRawIfGetResponse as GnssRawIfGetResponse,
    type GnssRawIfQueryhelpResponse as GnssRawIfQueryhelpResponse,
    type GnssRawIfTupleResponse as GnssRawIfTupleResponse,
    type GnssRawIfListResponsesOffsetPage as GnssRawIfListResponsesOffsetPage,
    type GnssRawIfListParams as GnssRawIfListParams,
    type GnssRawIfCountParams as GnssRawIfCountParams,
    type GnssRawIfFileGetParams as GnssRawIfFileGetParams,
    type GnssRawIfGetParams as GnssRawIfGetParams,
    type GnssRawIfTupleParams as GnssRawIfTupleParams,
    type GnssRawIfUploadZipParams as GnssRawIfUploadZipParams,
  };

  export {
    GroundImagery as GroundImagery,
    type GroundImageryListResponse as GroundImageryListResponse,
    type GroundImageryCountResponse as GroundImageryCountResponse,
    type GroundImageryGetResponse as GroundImageryGetResponse,
    type GroundImageryQueryhelpResponse as GroundImageryQueryhelpResponse,
    type GroundImageryTupleResponse as GroundImageryTupleResponse,
    type GroundImageryListResponsesOffsetPage as GroundImageryListResponsesOffsetPage,
    type GroundImageryCreateParams as GroundImageryCreateParams,
    type GroundImageryListParams as GroundImageryListParams,
    type GroundImageryAodrParams as GroundImageryAodrParams,
    type GroundImageryCountParams as GroundImageryCountParams,
    type GroundImageryGetParams as GroundImageryGetParams,
    type GroundImageryGetFileParams as GroundImageryGetFileParams,
    type GroundImageryTupleParams as GroundImageryTupleParams,
    type GroundImageryUploadZipParams as GroundImageryUploadZipParams,
  };

  export {
    H3Geo as H3Geo,
    type H3GeoListResponse as H3GeoListResponse,
    type H3GeoCountResponse as H3GeoCountResponse,
    type H3GeoGetResponse as H3GeoGetResponse,
    type H3GeoQueryhelpResponse as H3GeoQueryhelpResponse,
    type H3GeoTupleResponse as H3GeoTupleResponse,
    type H3GeoListResponsesOffsetPage as H3GeoListResponsesOffsetPage,
    type H3GeoCreateParams as H3GeoCreateParams,
    type H3GeoListParams as H3GeoListParams,
    type H3GeoCountParams as H3GeoCountParams,
    type H3GeoGetParams as H3GeoGetParams,
    type H3GeoTupleParams as H3GeoTupleParams,
  };

  export {
    H3GeoHexCell as H3GeoHexCell,
    type H3GeoHexCellListResponse as H3GeoHexCellListResponse,
    type H3GeoHexCellCountResponse as H3GeoHexCellCountResponse,
    type H3GeoHexCellQueryhelpResponse as H3GeoHexCellQueryhelpResponse,
    type H3GeoHexCellTupleResponse as H3GeoHexCellTupleResponse,
    type H3GeoHexCellListResponsesOffsetPage as H3GeoHexCellListResponsesOffsetPage,
    type H3GeoHexCellListParams as H3GeoHexCellListParams,
    type H3GeoHexCellCountParams as H3GeoHexCellCountParams,
    type H3GeoHexCellTupleParams as H3GeoHexCellTupleParams,
  };

  export {
    Hazard as Hazard,
    type HazardListResponse as HazardListResponse,
    type HazardCountResponse as HazardCountResponse,
    type HazardGetResponse as HazardGetResponse,
    type HazardQueryhelpResponse as HazardQueryhelpResponse,
    type HazardTupleResponse as HazardTupleResponse,
    type HazardListResponsesOffsetPage as HazardListResponsesOffsetPage,
    type HazardCreateParams as HazardCreateParams,
    type HazardListParams as HazardListParams,
    type HazardCountParams as HazardCountParams,
    type HazardCreateBulkParams as HazardCreateBulkParams,
    type HazardGetParams as HazardGetParams,
    type HazardTupleParams as HazardTupleParams,
  };

  export {
    IonoObservations as IonoObservations,
    type IonoObservationListResponse as IonoObservationListResponse,
    type IonoObservationCountResponse as IonoObservationCountResponse,
    type IonoObservationQueryhelpResponse as IonoObservationQueryhelpResponse,
    type IonoObservationTupleResponse as IonoObservationTupleResponse,
    type IonoObservationListResponsesOffsetPage as IonoObservationListResponsesOffsetPage,
    type IonoObservationListParams as IonoObservationListParams,
    type IonoObservationCountParams as IonoObservationCountParams,
    type IonoObservationCreateBulkParams as IonoObservationCreateBulkParams,
    type IonoObservationTupleParams as IonoObservationTupleParams,
    type IonoObservationUnvalidatedPublishParams as IonoObservationUnvalidatedPublishParams,
  };

  export {
    Ir as Ir,
    type IrListResponse as IrListResponse,
    type IrCountResponse as IrCountResponse,
    type IrGetResponse as IrGetResponse,
    type IrQueryhelpResponse as IrQueryhelpResponse,
    type IrTupleResponse as IrTupleResponse,
    type IrListResponsesOffsetPage as IrListResponsesOffsetPage,
    type IrCreateParams as IrCreateParams,
    type IrUpdateParams as IrUpdateParams,
    type IrListParams as IrListParams,
    type IrCountParams as IrCountParams,
    type IrGetParams as IrGetParams,
    type IrTupleParams as IrTupleParams,
  };

  export {
    IsrCollections as IsrCollections,
    type IsrCollectionCriticalTimesFull as IsrCollectionCriticalTimesFull,
    type IsrCollectionExploitationRequirementFull as IsrCollectionExploitationRequirementFull,
    type IsrCollectionPocFull as IsrCollectionPocFull,
    type IsrCollectionRequirementsFull as IsrCollectionRequirementsFull,
    type IsrCollectionListResponse as IsrCollectionListResponse,
    type IsrCollectionCountResponse as IsrCollectionCountResponse,
    type IsrCollectionQueryhelpResponse as IsrCollectionQueryhelpResponse,
    type IsrCollectionTupleResponse as IsrCollectionTupleResponse,
    type IsrCollectionListResponsesOffsetPage as IsrCollectionListResponsesOffsetPage,
    type IsrCollectionListParams as IsrCollectionListParams,
    type IsrCollectionCountParams as IsrCollectionCountParams,
    type IsrCollectionCreateBulkParams as IsrCollectionCreateBulkParams,
    type IsrCollectionTupleParams as IsrCollectionTupleParams,
    type IsrCollectionUnvalidatedPublishParams as IsrCollectionUnvalidatedPublishParams,
  };

  export {
    Item as Item,
    type ItemListResponse as ItemListResponse,
    type ItemCountResponse as ItemCountResponse,
    type ItemGetResponse as ItemGetResponse,
    type ItemQueryhelpResponse as ItemQueryhelpResponse,
    type ItemTupleResponse as ItemTupleResponse,
    type ItemListResponsesOffsetPage as ItemListResponsesOffsetPage,
    type ItemCreateParams as ItemCreateParams,
    type ItemUpdateParams as ItemUpdateParams,
    type ItemListParams as ItemListParams,
    type ItemCountParams as ItemCountParams,
    type ItemGetParams as ItemGetParams,
    type ItemTupleParams as ItemTupleParams,
    type ItemUnvalidatedPublishParams as ItemUnvalidatedPublishParams,
  };

  export {
    ItemTrackings as ItemTrackings,
    type ItemTrackingListResponse as ItemTrackingListResponse,
    type ItemTrackingCountResponse as ItemTrackingCountResponse,
    type ItemTrackingGetResponse as ItemTrackingGetResponse,
    type ItemTrackingQueryhelpResponse as ItemTrackingQueryhelpResponse,
    type ItemTrackingTupleResponse as ItemTrackingTupleResponse,
    type ItemTrackingListResponsesOffsetPage as ItemTrackingListResponsesOffsetPage,
    type ItemTrackingCreateParams as ItemTrackingCreateParams,
    type ItemTrackingListParams as ItemTrackingListParams,
    type ItemTrackingCountParams as ItemTrackingCountParams,
    type ItemTrackingGetParams as ItemTrackingGetParams,
    type ItemTrackingTupleParams as ItemTrackingTupleParams,
    type ItemTrackingUnvalidatedPublishParams as ItemTrackingUnvalidatedPublishParams,
  };

  export {
    Laserdeconflictrequest as Laserdeconflictrequest,
    type FixedPointFull as FixedPointFull,
    type LaserdeconflictrequestListResponse as LaserdeconflictrequestListResponse,
    type LaserdeconflictrequestCountResponse as LaserdeconflictrequestCountResponse,
    type LaserdeconflictrequestGetResponse as LaserdeconflictrequestGetResponse,
    type LaserdeconflictrequestQueryhelpResponse as LaserdeconflictrequestQueryhelpResponse,
    type LaserdeconflictrequestTupleResponse as LaserdeconflictrequestTupleResponse,
    type LaserdeconflictrequestListResponsesOffsetPage as LaserdeconflictrequestListResponsesOffsetPage,
    type LaserdeconflictrequestCreateParams as LaserdeconflictrequestCreateParams,
    type LaserdeconflictrequestListParams as LaserdeconflictrequestListParams,
    type LaserdeconflictrequestCountParams as LaserdeconflictrequestCountParams,
    type LaserdeconflictrequestGetParams as LaserdeconflictrequestGetParams,
    type LaserdeconflictrequestTupleParams as LaserdeconflictrequestTupleParams,
    type LaserdeconflictrequestUnvalidatedPublishParams as LaserdeconflictrequestUnvalidatedPublishParams,
  };

  export {
    Laseremitter as Laseremitter,
    type LaseremitterListResponse as LaseremitterListResponse,
    type LaseremitterCountResponse as LaseremitterCountResponse,
    type LaseremitterGetResponse as LaseremitterGetResponse,
    type LaseremitterQueryhelpResponse as LaseremitterQueryhelpResponse,
    type LaseremitterTupleResponse as LaseremitterTupleResponse,
    type LaseremitterListResponsesOffsetPage as LaseremitterListResponsesOffsetPage,
    type LaseremitterCreateParams as LaseremitterCreateParams,
    type LaseremitterUpdateParams as LaseremitterUpdateParams,
    type LaseremitterListParams as LaseremitterListParams,
    type LaseremitterCountParams as LaseremitterCountParams,
    type LaseremitterGetParams as LaseremitterGetParams,
    type LaseremitterTupleParams as LaseremitterTupleParams,
  };

  export {
    LaunchDetection as LaunchDetection,
    type LaunchDetectionListResponse as LaunchDetectionListResponse,
    type LaunchDetectionCountResponse as LaunchDetectionCountResponse,
    type LaunchDetectionGetResponse as LaunchDetectionGetResponse,
    type LaunchDetectionQueryhelpResponse as LaunchDetectionQueryhelpResponse,
    type LaunchDetectionTupleResponse as LaunchDetectionTupleResponse,
    type LaunchDetectionListResponsesOffsetPage as LaunchDetectionListResponsesOffsetPage,
    type LaunchDetectionCreateParams as LaunchDetectionCreateParams,
    type LaunchDetectionUpdateParams as LaunchDetectionUpdateParams,
    type LaunchDetectionListParams as LaunchDetectionListParams,
    type LaunchDetectionCountParams as LaunchDetectionCountParams,
    type LaunchDetectionGetParams as LaunchDetectionGetParams,
    type LaunchDetectionTupleParams as LaunchDetectionTupleParams,
  };

  export {
    LaunchEvent as LaunchEvent,
    type LaunchEventListResponse as LaunchEventListResponse,
    type LaunchEventCountResponse as LaunchEventCountResponse,
    type LaunchEventGetResponse as LaunchEventGetResponse,
    type LaunchEventQueryhelpResponse as LaunchEventQueryhelpResponse,
    type LaunchEventTupleResponse as LaunchEventTupleResponse,
    type LaunchEventListResponsesOffsetPage as LaunchEventListResponsesOffsetPage,
    type LaunchEventCreateParams as LaunchEventCreateParams,
    type LaunchEventListParams as LaunchEventListParams,
    type LaunchEventCountParams as LaunchEventCountParams,
    type LaunchEventCreateBulkParams as LaunchEventCreateBulkParams,
    type LaunchEventGetParams as LaunchEventGetParams,
    type LaunchEventTupleParams as LaunchEventTupleParams,
    type LaunchEventUnvalidatedPublishParams as LaunchEventUnvalidatedPublishParams,
  };

  export {
    LaunchSite as LaunchSite,
    type LaunchSiteListResponse as LaunchSiteListResponse,
    type LaunchSiteCountResponse as LaunchSiteCountResponse,
    type LaunchSiteGetResponse as LaunchSiteGetResponse,
    type LaunchSiteQueryhelpResponse as LaunchSiteQueryhelpResponse,
    type LaunchSiteTupleResponse as LaunchSiteTupleResponse,
    type LaunchSiteListResponsesOffsetPage as LaunchSiteListResponsesOffsetPage,
    type LaunchSiteCreateParams as LaunchSiteCreateParams,
    type LaunchSiteUpdateParams as LaunchSiteUpdateParams,
    type LaunchSiteListParams as LaunchSiteListParams,
    type LaunchSiteCountParams as LaunchSiteCountParams,
    type LaunchSiteGetParams as LaunchSiteGetParams,
    type LaunchSiteTupleParams as LaunchSiteTupleParams,
  };

  export {
    LaunchSiteDetails as LaunchSiteDetails,
    type LaunchSiteDetailListResponse as LaunchSiteDetailListResponse,
    type LaunchSiteDetailFindBySourceResponse as LaunchSiteDetailFindBySourceResponse,
    type LaunchSiteDetailGetResponse as LaunchSiteDetailGetResponse,
    type LaunchSiteDetailListResponsesOffsetPage as LaunchSiteDetailListResponsesOffsetPage,
    type LaunchSiteDetailCreateParams as LaunchSiteDetailCreateParams,
    type LaunchSiteDetailUpdateParams as LaunchSiteDetailUpdateParams,
    type LaunchSiteDetailListParams as LaunchSiteDetailListParams,
    type LaunchSiteDetailFindBySourceParams as LaunchSiteDetailFindBySourceParams,
    type LaunchSiteDetailGetParams as LaunchSiteDetailGetParams,
  };

  export {
    LaunchVehicle as LaunchVehicle,
    type LaunchVehicleListResponse as LaunchVehicleListResponse,
    type LaunchVehicleCountResponse as LaunchVehicleCountResponse,
    type LaunchVehicleGetResponse as LaunchVehicleGetResponse,
    type LaunchVehicleQueryhelpResponse as LaunchVehicleQueryhelpResponse,
    type LaunchVehicleTupleResponse as LaunchVehicleTupleResponse,
    type LaunchVehicleListResponsesOffsetPage as LaunchVehicleListResponsesOffsetPage,
    type LaunchVehicleCreateParams as LaunchVehicleCreateParams,
    type LaunchVehicleUpdateParams as LaunchVehicleUpdateParams,
    type LaunchVehicleListParams as LaunchVehicleListParams,
    type LaunchVehicleCountParams as LaunchVehicleCountParams,
    type LaunchVehicleGetParams as LaunchVehicleGetParams,
    type LaunchVehicleTupleParams as LaunchVehicleTupleParams,
  };

  export {
    LaunchVehicleDetails as LaunchVehicleDetails,
    type LaunchVehicleDetailListResponse as LaunchVehicleDetailListResponse,
    type LaunchVehicleDetailGetResponse as LaunchVehicleDetailGetResponse,
    type LaunchVehicleDetailListResponsesOffsetPage as LaunchVehicleDetailListResponsesOffsetPage,
    type LaunchVehicleDetailCreateParams as LaunchVehicleDetailCreateParams,
    type LaunchVehicleDetailUpdateParams as LaunchVehicleDetailUpdateParams,
    type LaunchVehicleDetailListParams as LaunchVehicleDetailListParams,
    type LaunchVehicleDetailGetParams as LaunchVehicleDetailGetParams,
  };

  export {
    LinkStatus as LinkStatus,
    type LinkStatusListResponse as LinkStatusListResponse,
    type LinkStatusCountResponse as LinkStatusCountResponse,
    type LinkStatusGetResponse as LinkStatusGetResponse,
    type LinkStatusQueryhelpResponse as LinkStatusQueryhelpResponse,
    type LinkStatusTupleResponse as LinkStatusTupleResponse,
    type LinkStatusListResponsesOffsetPage as LinkStatusListResponsesOffsetPage,
    type LinkStatusCreateParams as LinkStatusCreateParams,
    type LinkStatusListParams as LinkStatusListParams,
    type LinkStatusCountParams as LinkStatusCountParams,
    type LinkStatusGetParams as LinkStatusGetParams,
    type LinkStatusTupleParams as LinkStatusTupleParams,
  };

  export { Linkstatus as Linkstatus, type LinkstatusUpdateParams as LinkstatusUpdateParams };

  export {
    Location as Location,
    type LocationIngest as LocationIngest,
    type LocationCountResponse as LocationCountResponse,
    type LocationQueryhelpResponse as LocationQueryhelpResponse,
    type LocationTupleResponse as LocationTupleResponse,
    type LocationCreateParams as LocationCreateParams,
    type LocationUpdateParams as LocationUpdateParams,
    type LocationListParams as LocationListParams,
    type LocationCountParams as LocationCountParams,
    type LocationGetParams as LocationGetParams,
    type LocationTupleParams as LocationTupleParams,
  };

  export {
    LogisticsSupport as LogisticsSupport,
    type LogisticsDiscrepancyInfosFull as LogisticsDiscrepancyInfosFull,
    type LogisticsPartsFull as LogisticsPartsFull,
    type LogisticsRemarksAbridged as LogisticsRemarksAbridged,
    type LogisticsRemarksFull as LogisticsRemarksFull,
    type LogisticsRemarksIngest as LogisticsRemarksIngest,
    type LogisticsSegmentsFull as LogisticsSegmentsFull,
    type LogisticsSpecialtiesFull as LogisticsSpecialtiesFull,
    type LogisticsStocksFull as LogisticsStocksFull,
    type LogisticsSupportItemsFull as LogisticsSupportItemsFull,
    type LogisticsTransportationPlansFull as LogisticsTransportationPlansFull,
    type LogisticsSupportListResponse as LogisticsSupportListResponse,
    type LogisticsSupportCountResponse as LogisticsSupportCountResponse,
    type LogisticsSupportGetResponse as LogisticsSupportGetResponse,
    type LogisticsSupportQueryhelpResponse as LogisticsSupportQueryhelpResponse,
    type LogisticsSupportTupleResponse as LogisticsSupportTupleResponse,
    type LogisticsSupportListResponsesOffsetPage as LogisticsSupportListResponsesOffsetPage,
    type LogisticsSupportCreateParams as LogisticsSupportCreateParams,
    type LogisticsSupportUpdateParams as LogisticsSupportUpdateParams,
    type LogisticsSupportListParams as LogisticsSupportListParams,
    type LogisticsSupportCountParams as LogisticsSupportCountParams,
    type LogisticsSupportCreateBulkParams as LogisticsSupportCreateBulkParams,
    type LogisticsSupportGetParams as LogisticsSupportGetParams,
    type LogisticsSupportTupleParams as LogisticsSupportTupleParams,
    type LogisticsSupportUnvalidatedPublishParams as LogisticsSupportUnvalidatedPublishParams,
  };

  export {
    Maneuvers as Maneuvers,
    type ManeuverListResponse as ManeuverListResponse,
    type ManeuverCountResponse as ManeuverCountResponse,
    type ManeuverGetResponse as ManeuverGetResponse,
    type ManeuverQueryhelpResponse as ManeuverQueryhelpResponse,
    type ManeuverTupleResponse as ManeuverTupleResponse,
    type ManeuverListResponsesOffsetPage as ManeuverListResponsesOffsetPage,
    type ManeuverCreateParams as ManeuverCreateParams,
    type ManeuverListParams as ManeuverListParams,
    type ManeuverCountParams as ManeuverCountParams,
    type ManeuverCreateBulkParams as ManeuverCreateBulkParams,
    type ManeuverGetParams as ManeuverGetParams,
    type ManeuverTupleParams as ManeuverTupleParams,
    type ManeuverUnvalidatedPublishParams as ManeuverUnvalidatedPublishParams,
  };

  export {
    Manifold as Manifold,
    type ManifoldListResponse as ManifoldListResponse,
    type ManifoldCountResponse as ManifoldCountResponse,
    type ManifoldGetResponse as ManifoldGetResponse,
    type ManifoldQueryhelpResponse as ManifoldQueryhelpResponse,
    type ManifoldTupleResponse as ManifoldTupleResponse,
    type ManifoldListResponsesOffsetPage as ManifoldListResponsesOffsetPage,
    type ManifoldCreateParams as ManifoldCreateParams,
    type ManifoldUpdateParams as ManifoldUpdateParams,
    type ManifoldListParams as ManifoldListParams,
    type ManifoldCountParams as ManifoldCountParams,
    type ManifoldCreateBulkParams as ManifoldCreateBulkParams,
    type ManifoldGetParams as ManifoldGetParams,
    type ManifoldTupleParams as ManifoldTupleParams,
  };

  export {
    Manifoldelset as Manifoldelset,
    type ManifoldelsetListResponse as ManifoldelsetListResponse,
    type ManifoldelsetCountResponse as ManifoldelsetCountResponse,
    type ManifoldelsetGetResponse as ManifoldelsetGetResponse,
    type ManifoldelsetQueryhelpResponse as ManifoldelsetQueryhelpResponse,
    type ManifoldelsetTupleResponse as ManifoldelsetTupleResponse,
    type ManifoldelsetListResponsesOffsetPage as ManifoldelsetListResponsesOffsetPage,
    type ManifoldelsetCreateParams as ManifoldelsetCreateParams,
    type ManifoldelsetUpdateParams as ManifoldelsetUpdateParams,
    type ManifoldelsetListParams as ManifoldelsetListParams,
    type ManifoldelsetCountParams as ManifoldelsetCountParams,
    type ManifoldelsetCreateBulkParams as ManifoldelsetCreateBulkParams,
    type ManifoldelsetGetParams as ManifoldelsetGetParams,
    type ManifoldelsetTupleParams as ManifoldelsetTupleParams,
  };

  export {
    MissileTracks as MissileTracks,
    type MissileTrackListResponse as MissileTrackListResponse,
    type MissileTrackCountResponse as MissileTrackCountResponse,
    type MissileTrackQueryhelpResponse as MissileTrackQueryhelpResponse,
    type MissileTrackTupleResponse as MissileTrackTupleResponse,
    type MissileTrackListResponsesOffsetPage as MissileTrackListResponsesOffsetPage,
    type MissileTrackListParams as MissileTrackListParams,
    type MissileTrackCountParams as MissileTrackCountParams,
    type MissileTrackCreateBulkParams as MissileTrackCreateBulkParams,
    type MissileTrackTupleParams as MissileTrackTupleParams,
    type MissileTrackUnvalidatedPublishParams as MissileTrackUnvalidatedPublishParams,
  };

  export {
    MissionAssignment as MissionAssignment,
    type MissionAssignmentListResponse as MissionAssignmentListResponse,
    type MissionAssignmentCountResponse as MissionAssignmentCountResponse,
    type MissionAssignmentGetResponse as MissionAssignmentGetResponse,
    type MissionAssignmentQueryhelpResponse as MissionAssignmentQueryhelpResponse,
    type MissionAssignmentTupleResponse as MissionAssignmentTupleResponse,
    type MissionAssignmentListResponsesOffsetPage as MissionAssignmentListResponsesOffsetPage,
    type MissionAssignmentCreateParams as MissionAssignmentCreateParams,
    type MissionAssignmentUpdateParams as MissionAssignmentUpdateParams,
    type MissionAssignmentListParams as MissionAssignmentListParams,
    type MissionAssignmentCountParams as MissionAssignmentCountParams,
    type MissionAssignmentCreateBulkParams as MissionAssignmentCreateBulkParams,
    type MissionAssignmentGetParams as MissionAssignmentGetParams,
    type MissionAssignmentTupleParams as MissionAssignmentTupleParams,
  };

  export {
    Mti as Mti,
    type MtiListResponse as MtiListResponse,
    type MtiCountResponse as MtiCountResponse,
    type MtiQueryhelpResponse as MtiQueryhelpResponse,
    type MtiTupleResponse as MtiTupleResponse,
    type MtiListResponsesOffsetPage as MtiListResponsesOffsetPage,
    type MtiListParams as MtiListParams,
    type MtiCountParams as MtiCountParams,
    type MtiCreateBulkParams as MtiCreateBulkParams,
    type MtiTupleParams as MtiTupleParams,
    type MtiUnvalidatedPublishParams as MtiUnvalidatedPublishParams,
  };

  export {
    Navigation as Navigation,
    type NavigationListResponse as NavigationListResponse,
    type NavigationCountResponse as NavigationCountResponse,
    type NavigationGetResponse as NavigationGetResponse,
    type NavigationQueryhelpResponse as NavigationQueryhelpResponse,
    type NavigationTupleResponse as NavigationTupleResponse,
    type NavigationListResponsesOffsetPage as NavigationListResponsesOffsetPage,
    type NavigationCreateParams as NavigationCreateParams,
    type NavigationUpdateParams as NavigationUpdateParams,
    type NavigationListParams as NavigationListParams,
    type NavigationCountParams as NavigationCountParams,
    type NavigationGetParams as NavigationGetParams,
    type NavigationTupleParams as NavigationTupleParams,
  };

  export {
    NavigationalObstruction as NavigationalObstruction,
    type NavigationalObstructionListResponse as NavigationalObstructionListResponse,
    type NavigationalObstructionCountResponse as NavigationalObstructionCountResponse,
    type NavigationalObstructionGetResponse as NavigationalObstructionGetResponse,
    type NavigationalObstructionQueryhelpResponse as NavigationalObstructionQueryhelpResponse,
    type NavigationalObstructionTupleResponse as NavigationalObstructionTupleResponse,
    type NavigationalObstructionListResponsesOffsetPage as NavigationalObstructionListResponsesOffsetPage,
    type NavigationalObstructionCreateParams as NavigationalObstructionCreateParams,
    type NavigationalObstructionUpdateParams as NavigationalObstructionUpdateParams,
    type NavigationalObstructionListParams as NavigationalObstructionListParams,
    type NavigationalObstructionCountParams as NavigationalObstructionCountParams,
    type NavigationalObstructionCreateBulkParams as NavigationalObstructionCreateBulkParams,
    type NavigationalObstructionGetParams as NavigationalObstructionGetParams,
    type NavigationalObstructionTupleParams as NavigationalObstructionTupleParams,
  };

  export {
    Notification as Notification,
    type NotificationListResponse as NotificationListResponse,
    type NotificationCountResponse as NotificationCountResponse,
    type NotificationQueryhelpResponse as NotificationQueryhelpResponse,
    type NotificationTupleResponse as NotificationTupleResponse,
    type NotificationListResponsesOffsetPage as NotificationListResponsesOffsetPage,
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationListParams as NotificationListParams,
    type NotificationCountParams as NotificationCountParams,
    type NotificationCreateRawParams as NotificationCreateRawParams,
    type NotificationGetParams as NotificationGetParams,
    type NotificationTupleParams as NotificationTupleParams,
  };

  export {
    ObjectOfInterest as ObjectOfInterest,
    type ObjectOfInterestListResponse as ObjectOfInterestListResponse,
    type ObjectOfInterestCountResponse as ObjectOfInterestCountResponse,
    type ObjectOfInterestGetResponse as ObjectOfInterestGetResponse,
    type ObjectOfInterestQueryhelpResponse as ObjectOfInterestQueryhelpResponse,
    type ObjectOfInterestTupleResponse as ObjectOfInterestTupleResponse,
    type ObjectOfInterestListResponsesOffsetPage as ObjectOfInterestListResponsesOffsetPage,
    type ObjectOfInterestCreateParams as ObjectOfInterestCreateParams,
    type ObjectOfInterestUpdateParams as ObjectOfInterestUpdateParams,
    type ObjectOfInterestListParams as ObjectOfInterestListParams,
    type ObjectOfInterestCountParams as ObjectOfInterestCountParams,
    type ObjectOfInterestGetParams as ObjectOfInterestGetParams,
    type ObjectOfInterestTupleParams as ObjectOfInterestTupleParams,
  };

  export { Observations as Observations };

  export {
    Onboardnavigation as Onboardnavigation,
    type OnboardnavigationListResponse as OnboardnavigationListResponse,
    type OnboardnavigationCountResponse as OnboardnavigationCountResponse,
    type OnboardnavigationQueryhelpResponse as OnboardnavigationQueryhelpResponse,
    type OnboardnavigationTupleResponse as OnboardnavigationTupleResponse,
    type OnboardnavigationListResponsesOffsetPage as OnboardnavigationListResponsesOffsetPage,
    type OnboardnavigationListParams as OnboardnavigationListParams,
    type OnboardnavigationCountParams as OnboardnavigationCountParams,
    type OnboardnavigationCreateBulkParams as OnboardnavigationCreateBulkParams,
    type OnboardnavigationTupleParams as OnboardnavigationTupleParams,
    type OnboardnavigationUnvalidatedPublishParams as OnboardnavigationUnvalidatedPublishParams,
  };

  export {
    Onorbit as Onorbit,
    type OnorbitIngest as OnorbitIngest,
    type OnorbitListResponse as OnorbitListResponse,
    type OnorbitCountResponse as OnorbitCountResponse,
    type OnorbitGetSignatureResponse as OnorbitGetSignatureResponse,
    type OnorbitQueryhelpResponse as OnorbitQueryhelpResponse,
    type OnorbitTupleResponse as OnorbitTupleResponse,
    type OnorbitListResponsesOffsetPage as OnorbitListResponsesOffsetPage,
    type OnorbitCreateParams as OnorbitCreateParams,
    type OnorbitUpdateParams as OnorbitUpdateParams,
    type OnorbitListParams as OnorbitListParams,
    type OnorbitCountParams as OnorbitCountParams,
    type OnorbitGetParams as OnorbitGetParams,
    type OnorbitGetSignatureParams as OnorbitGetSignatureParams,
    type OnorbitTupleParams as OnorbitTupleParams,
  };

  export {
    Onorbitantenna as Onorbitantenna,
    type OnorbitantennaListResponse as OnorbitantennaListResponse,
    type OnorbitantennaListResponsesOffsetPage as OnorbitantennaListResponsesOffsetPage,
    type OnorbitantennaCreateParams as OnorbitantennaCreateParams,
    type OnorbitantennaUpdateParams as OnorbitantennaUpdateParams,
    type OnorbitantennaListParams as OnorbitantennaListParams,
    type OnorbitantennaGetParams as OnorbitantennaGetParams,
  };

  export {
    Onorbitbattery as Onorbitbattery,
    type OnorbitbatteryListResponse as OnorbitbatteryListResponse,
    type OnorbitbatteryListResponsesOffsetPage as OnorbitbatteryListResponsesOffsetPage,
    type OnorbitbatteryCreateParams as OnorbitbatteryCreateParams,
    type OnorbitbatteryUpdateParams as OnorbitbatteryUpdateParams,
    type OnorbitbatteryListParams as OnorbitbatteryListParams,
    type OnorbitbatteryGetParams as OnorbitbatteryGetParams,
  };

  export {
    Onorbitdetails as Onorbitdetails,
    type OnorbitdetailListResponse as OnorbitdetailListResponse,
    type OnorbitdetailListResponsesOffsetPage as OnorbitdetailListResponsesOffsetPage,
    type OnorbitdetailCreateParams as OnorbitdetailCreateParams,
    type OnorbitdetailUpdateParams as OnorbitdetailUpdateParams,
    type OnorbitdetailListParams as OnorbitdetailListParams,
    type OnorbitdetailGetParams as OnorbitdetailGetParams,
  };

  export {
    Onorbitevent as Onorbitevent,
    type OnorbiteventListResponse as OnorbiteventListResponse,
    type OnorbiteventCountResponse as OnorbiteventCountResponse,
    type OnorbiteventGetResponse as OnorbiteventGetResponse,
    type OnorbiteventQueryhelpResponse as OnorbiteventQueryhelpResponse,
    type OnorbiteventTupleResponse as OnorbiteventTupleResponse,
    type OnorbiteventListResponsesOffsetPage as OnorbiteventListResponsesOffsetPage,
    type OnorbiteventCreateParams as OnorbiteventCreateParams,
    type OnorbiteventUpdateParams as OnorbiteventUpdateParams,
    type OnorbiteventListParams as OnorbiteventListParams,
    type OnorbiteventCountParams as OnorbiteventCountParams,
    type OnorbiteventGetParams as OnorbiteventGetParams,
    type OnorbiteventTupleParams as OnorbiteventTupleParams,
  };

  export {
    Onorbitlist as Onorbitlist,
    type OnorbitlistListResponse as OnorbitlistListResponse,
    type OnorbitlistCountResponse as OnorbitlistCountResponse,
    type OnorbitlistGetResponse as OnorbitlistGetResponse,
    type OnorbitlistQueryhelpResponse as OnorbitlistQueryhelpResponse,
    type OnorbitlistTupleResponse as OnorbitlistTupleResponse,
    type OnorbitlistListResponsesOffsetPage as OnorbitlistListResponsesOffsetPage,
    type OnorbitlistCreateParams as OnorbitlistCreateParams,
    type OnorbitlistUpdateParams as OnorbitlistUpdateParams,
    type OnorbitlistListParams as OnorbitlistListParams,
    type OnorbitlistCountParams as OnorbitlistCountParams,
    type OnorbitlistGetParams as OnorbitlistGetParams,
    type OnorbitlistTupleParams as OnorbitlistTupleParams,
  };

  export {
    Onorbitsolararray as Onorbitsolararray,
    type OnorbitsolararrayListResponse as OnorbitsolararrayListResponse,
    type OnorbitsolararrayListResponsesOffsetPage as OnorbitsolararrayListResponsesOffsetPage,
    type OnorbitsolararrayCreateParams as OnorbitsolararrayCreateParams,
    type OnorbitsolararrayUpdateParams as OnorbitsolararrayUpdateParams,
    type OnorbitsolararrayListParams as OnorbitsolararrayListParams,
    type OnorbitsolararrayGetParams as OnorbitsolararrayGetParams,
  };

  export {
    Onorbitthruster as Onorbitthruster,
    type OnorbitthrusterListResponse as OnorbitthrusterListResponse,
    type OnorbitthrusterListResponsesOffsetPage as OnorbitthrusterListResponsesOffsetPage,
    type OnorbitthrusterCreateParams as OnorbitthrusterCreateParams,
    type OnorbitthrusterUpdateParams as OnorbitthrusterUpdateParams,
    type OnorbitthrusterListParams as OnorbitthrusterListParams,
    type OnorbitthrusterGetParams as OnorbitthrusterGetParams,
  };

  export {
    Onorbitthrusterstatus as Onorbitthrusterstatus,
    type OnorbitthrusterstatusListResponse as OnorbitthrusterstatusListResponse,
    type OnorbitthrusterstatusCountResponse as OnorbitthrusterstatusCountResponse,
    type OnorbitthrusterstatusQueryhelpResponse as OnorbitthrusterstatusQueryhelpResponse,
    type OnorbitthrusterstatusTupleResponse as OnorbitthrusterstatusTupleResponse,
    type OnorbitthrusterstatusListResponsesOffsetPage as OnorbitthrusterstatusListResponsesOffsetPage,
    type OnorbitthrusterstatusCreateParams as OnorbitthrusterstatusCreateParams,
    type OnorbitthrusterstatusListParams as OnorbitthrusterstatusListParams,
    type OnorbitthrusterstatusCountParams as OnorbitthrusterstatusCountParams,
    type OnorbitthrusterstatusCreateBulkParams as OnorbitthrusterstatusCreateBulkParams,
    type OnorbitthrusterstatusGetParams as OnorbitthrusterstatusGetParams,
    type OnorbitthrusterstatusTupleParams as OnorbitthrusterstatusTupleParams,
  };

  export {
    Onorbitassessment as Onorbitassessment,
    type OnorbitassessmentListResponse as OnorbitassessmentListResponse,
    type OnorbitassessmentCountResponse as OnorbitassessmentCountResponse,
    type OnorbitassessmentGetResponse as OnorbitassessmentGetResponse,
    type OnorbitassessmentQueryhelpResponse as OnorbitassessmentQueryhelpResponse,
    type OnorbitassessmentTupleResponse as OnorbitassessmentTupleResponse,
    type OnorbitassessmentListResponsesOffsetPage as OnorbitassessmentListResponsesOffsetPage,
    type OnorbitassessmentCreateParams as OnorbitassessmentCreateParams,
    type OnorbitassessmentListParams as OnorbitassessmentListParams,
    type OnorbitassessmentCountParams as OnorbitassessmentCountParams,
    type OnorbitassessmentCreateBulkParams as OnorbitassessmentCreateBulkParams,
    type OnorbitassessmentGetParams as OnorbitassessmentGetParams,
    type OnorbitassessmentTupleParams as OnorbitassessmentTupleParams,
    type OnorbitassessmentUnvalidatedPublishParams as OnorbitassessmentUnvalidatedPublishParams,
  };

  export {
    Operatingunit as Operatingunit,
    type OperatingunitListResponse as OperatingunitListResponse,
    type OperatingunitCountResponse as OperatingunitCountResponse,
    type OperatingunitQueryhelpResponse as OperatingunitQueryhelpResponse,
    type OperatingunitTupleResponse as OperatingunitTupleResponse,
    type OperatingunitListResponsesOffsetPage as OperatingunitListResponsesOffsetPage,
    type OperatingunitCreateParams as OperatingunitCreateParams,
    type OperatingunitUpdateParams as OperatingunitUpdateParams,
    type OperatingunitListParams as OperatingunitListParams,
    type OperatingunitCountParams as OperatingunitCountParams,
    type OperatingunitGetParams as OperatingunitGetParams,
    type OperatingunitTupleParams as OperatingunitTupleParams,
  };

  export {
    Operatingunitremark as Operatingunitremark,
    type OperatingunitremarkListResponse as OperatingunitremarkListResponse,
    type OperatingunitremarkCountResponse as OperatingunitremarkCountResponse,
    type OperatingunitremarkQueryhelpResponse as OperatingunitremarkQueryhelpResponse,
    type OperatingunitremarkTupleResponse as OperatingunitremarkTupleResponse,
    type OperatingunitremarkListResponsesOffsetPage as OperatingunitremarkListResponsesOffsetPage,
    type OperatingunitremarkCreateParams as OperatingunitremarkCreateParams,
    type OperatingunitremarkListParams as OperatingunitremarkListParams,
    type OperatingunitremarkCountParams as OperatingunitremarkCountParams,
    type OperatingunitremarkCreateBulkParams as OperatingunitremarkCreateBulkParams,
    type OperatingunitremarkGetParams as OperatingunitremarkGetParams,
    type OperatingunitremarkTupleParams as OperatingunitremarkTupleParams,
  };

  export {
    Orbitdetermination as Orbitdetermination,
    type OrbitdeterminationListResponse as OrbitdeterminationListResponse,
    type OrbitdeterminationCountResponse as OrbitdeterminationCountResponse,
    type OrbitdeterminationGetResponse as OrbitdeterminationGetResponse,
    type OrbitdeterminationQueryhelpResponse as OrbitdeterminationQueryhelpResponse,
    type OrbitdeterminationTupleResponse as OrbitdeterminationTupleResponse,
    type OrbitdeterminationListResponsesOffsetPage as OrbitdeterminationListResponsesOffsetPage,
    type OrbitdeterminationCreateParams as OrbitdeterminationCreateParams,
    type OrbitdeterminationListParams as OrbitdeterminationListParams,
    type OrbitdeterminationCountParams as OrbitdeterminationCountParams,
    type OrbitdeterminationCreateBulkParams as OrbitdeterminationCreateBulkParams,
    type OrbitdeterminationGetParams as OrbitdeterminationGetParams,
    type OrbitdeterminationTupleParams as OrbitdeterminationTupleParams,
    type OrbitdeterminationUnvalidatedPublishParams as OrbitdeterminationUnvalidatedPublishParams,
  };

  export {
    Orbittrack as Orbittrack,
    type OrbittrackListResponse as OrbittrackListResponse,
    type OrbittrackCountResponse as OrbittrackCountResponse,
    type OrbittrackQueryhelpResponse as OrbittrackQueryhelpResponse,
    type OrbittrackTupleResponse as OrbittrackTupleResponse,
    type OrbittrackListResponsesOffsetPage as OrbittrackListResponsesOffsetPage,
    type OrbittrackListParams as OrbittrackListParams,
    type OrbittrackCountParams as OrbittrackCountParams,
    type OrbittrackCreateBulkParams as OrbittrackCreateBulkParams,
    type OrbittrackTupleParams as OrbittrackTupleParams,
    type OrbittrackUnvalidatedPublishParams as OrbittrackUnvalidatedPublishParams,
  };

  export {
    Organization as Organization,
    type OrganizationListResponse as OrganizationListResponse,
    type OrganizationCountResponse as OrganizationCountResponse,
    type OrganizationGetOrganizationCategoriesResponse as OrganizationGetOrganizationCategoriesResponse,
    type OrganizationGetOrganizationTypesResponse as OrganizationGetOrganizationTypesResponse,
    type OrganizationQueryhelpResponse as OrganizationQueryhelpResponse,
    type OrganizationTupleResponse as OrganizationTupleResponse,
    type OrganizationListResponsesOffsetPage as OrganizationListResponsesOffsetPage,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
    type OrganizationCountParams as OrganizationCountParams,
    type OrganizationGetParams as OrganizationGetParams,
    type OrganizationGetOrganizationCategoriesParams as OrganizationGetOrganizationCategoriesParams,
    type OrganizationGetOrganizationTypesParams as OrganizationGetOrganizationTypesParams,
    type OrganizationTupleParams as OrganizationTupleParams,
  };

  export {
    Organizationdetails as Organizationdetails,
    type OrganizationdetailListResponse as OrganizationdetailListResponse,
    type OrganizationdetailFindBySourceResponse as OrganizationdetailFindBySourceResponse,
    type OrganizationdetailListResponsesOffsetPage as OrganizationdetailListResponsesOffsetPage,
    type OrganizationdetailCreateParams as OrganizationdetailCreateParams,
    type OrganizationdetailUpdateParams as OrganizationdetailUpdateParams,
    type OrganizationdetailListParams as OrganizationdetailListParams,
    type OrganizationdetailFindBySourceParams as OrganizationdetailFindBySourceParams,
    type OrganizationdetailGetParams as OrganizationdetailGetParams,
  };

  export {
    Personnelrecovery as Personnelrecovery,
    type PersonnelRecoveryFullL as PersonnelRecoveryFullL,
    type PersonnelrecoveryListResponse as PersonnelrecoveryListResponse,
    type PersonnelrecoveryCountResponse as PersonnelrecoveryCountResponse,
    type PersonnelrecoveryQueryhelpResponse as PersonnelrecoveryQueryhelpResponse,
    type PersonnelrecoveryTupleResponse as PersonnelrecoveryTupleResponse,
    type PersonnelrecoveryListResponsesOffsetPage as PersonnelrecoveryListResponsesOffsetPage,
    type PersonnelrecoveryCreateParams as PersonnelrecoveryCreateParams,
    type PersonnelrecoveryListParams as PersonnelrecoveryListParams,
    type PersonnelrecoveryCountParams as PersonnelrecoveryCountParams,
    type PersonnelrecoveryCreateBulkParams as PersonnelrecoveryCreateBulkParams,
    type PersonnelrecoveryFileCreateParams as PersonnelrecoveryFileCreateParams,
    type PersonnelrecoveryGetParams as PersonnelrecoveryGetParams,
    type PersonnelrecoveryTupleParams as PersonnelrecoveryTupleParams,
  };

  export {
    Poi as Poi,
    type PoiListResponse as PoiListResponse,
    type PoiCountResponse as PoiCountResponse,
    type PoiGetResponse as PoiGetResponse,
    type PoiQueryhelpResponse as PoiQueryhelpResponse,
    type PoiTupleResponse as PoiTupleResponse,
    type PoiListResponsesOffsetPage as PoiListResponsesOffsetPage,
    type PoiCreateParams as PoiCreateParams,
    type PoiListParams as PoiListParams,
    type PoiCountParams as PoiCountParams,
    type PoiCreateBulkParams as PoiCreateBulkParams,
    type PoiGetParams as PoiGetParams,
    type PoiTupleParams as PoiTupleParams,
    type PoiUnvalidatedPublishParams as PoiUnvalidatedPublishParams,
  };

  export {
    Port as Port,
    type PortListResponse as PortListResponse,
    type PortCountResponse as PortCountResponse,
    type PortGetResponse as PortGetResponse,
    type PortQueryhelpResponse as PortQueryhelpResponse,
    type PortTupleResponse as PortTupleResponse,
    type PortListResponsesOffsetPage as PortListResponsesOffsetPage,
    type PortCreateParams as PortCreateParams,
    type PortUpdateParams as PortUpdateParams,
    type PortListParams as PortListParams,
    type PortCountParams as PortCountParams,
    type PortCreateBulkParams as PortCreateBulkParams,
    type PortGetParams as PortGetParams,
    type PortTupleParams as PortTupleParams,
  };

  export { ReportAndActivities as ReportAndActivities };

  export {
    RfBand as RfBand,
    type RfBandListResponse as RfBandListResponse,
    type RfBandCountResponse as RfBandCountResponse,
    type RfBandQueryhelpResponse as RfBandQueryhelpResponse,
    type RfBandTupleResponse as RfBandTupleResponse,
    type RfBandListResponsesOffsetPage as RfBandListResponsesOffsetPage,
    type RfBandCreateParams as RfBandCreateParams,
    type RfBandUpdateParams as RfBandUpdateParams,
    type RfBandListParams as RfBandListParams,
    type RfBandCountParams as RfBandCountParams,
    type RfBandGetParams as RfBandGetParams,
    type RfBandTupleParams as RfBandTupleParams,
  };

  export {
    RfBandType as RfBandType,
    type RfBandTypeListResponse as RfBandTypeListResponse,
    type RfBandTypeCountResponse as RfBandTypeCountResponse,
    type RfBandTypeGetResponse as RfBandTypeGetResponse,
    type RfBandTypeQueryhelpResponse as RfBandTypeQueryhelpResponse,
    type RfBandTypeTupleResponse as RfBandTypeTupleResponse,
    type RfBandTypeListResponsesOffsetPage as RfBandTypeListResponsesOffsetPage,
    type RfBandTypeCreateParams as RfBandTypeCreateParams,
    type RfBandTypeUpdateParams as RfBandTypeUpdateParams,
    type RfBandTypeListParams as RfBandTypeListParams,
    type RfBandTypeCountParams as RfBandTypeCountParams,
    type RfBandTypeGetParams as RfBandTypeGetParams,
    type RfBandTypeTupleParams as RfBandTypeTupleParams,
  };

  export {
    RfEmitter as RfEmitter,
    type RfEmitterListResponse as RfEmitterListResponse,
    type RfEmitterCountResponse as RfEmitterCountResponse,
    type RfEmitterGetResponse as RfEmitterGetResponse,
    type RfEmitterQueryhelpResponse as RfEmitterQueryhelpResponse,
    type RfEmitterTupleResponse as RfEmitterTupleResponse,
    type RfEmitterListResponsesOffsetPage as RfEmitterListResponsesOffsetPage,
    type RfEmitterCreateParams as RfEmitterCreateParams,
    type RfEmitterUpdateParams as RfEmitterUpdateParams,
    type RfEmitterListParams as RfEmitterListParams,
    type RfEmitterCountParams as RfEmitterCountParams,
    type RfEmitterGetParams as RfEmitterGetParams,
    type RfEmitterTupleParams as RfEmitterTupleParams,
  };

  export {
    RouteStats as RouteStats,
    type RouteStatRetrieveResponse as RouteStatRetrieveResponse,
    type RouteStatListResponse as RouteStatListResponse,
    type RouteStatCountResponse as RouteStatCountResponse,
    type RouteStatQueryHelpResponse as RouteStatQueryHelpResponse,
    type RouteStatTupleResponse as RouteStatTupleResponse,
    type RouteStatListResponsesOffsetPage as RouteStatListResponsesOffsetPage,
    type RouteStatCreateParams as RouteStatCreateParams,
    type RouteStatRetrieveParams as RouteStatRetrieveParams,
    type RouteStatUpdateParams as RouteStatUpdateParams,
    type RouteStatListParams as RouteStatListParams,
    type RouteStatCountParams as RouteStatCountParams,
    type RouteStatCreateBulkParams as RouteStatCreateBulkParams,
    type RouteStatTupleParams as RouteStatTupleParams,
    type RouteStatUnvalidatedPublishParams as RouteStatUnvalidatedPublishParams,
  };

  export {
    SarObservation as SarObservation,
    type SarObservationListResponse as SarObservationListResponse,
    type SarObservationCountResponse as SarObservationCountResponse,
    type SarObservationGetResponse as SarObservationGetResponse,
    type SarObservationQueryhelpResponse as SarObservationQueryhelpResponse,
    type SarObservationTupleResponse as SarObservationTupleResponse,
    type SarObservationListResponsesOffsetPage as SarObservationListResponsesOffsetPage,
    type SarObservationCreateParams as SarObservationCreateParams,
    type SarObservationListParams as SarObservationListParams,
    type SarObservationCountParams as SarObservationCountParams,
    type SarObservationCreateBulkParams as SarObservationCreateBulkParams,
    type SarObservationGetParams as SarObservationGetParams,
    type SarObservationTupleParams as SarObservationTupleParams,
    type SarObservationUnvalidatedPublishParams as SarObservationUnvalidatedPublishParams,
  };

  export {
    Scientific as Scientific,
    type ScientificListResponse as ScientificListResponse,
    type ScientificCountResponse as ScientificCountResponse,
    type ScientificGetResponse as ScientificGetResponse,
    type ScientificQueryhelpResponse as ScientificQueryhelpResponse,
    type ScientificTupleResponse as ScientificTupleResponse,
    type ScientificListResponsesOffsetPage as ScientificListResponsesOffsetPage,
    type ScientificCreateParams as ScientificCreateParams,
    type ScientificUpdateParams as ScientificUpdateParams,
    type ScientificListParams as ScientificListParams,
    type ScientificCountParams as ScientificCountParams,
    type ScientificGetParams as ScientificGetParams,
    type ScientificTupleParams as ScientificTupleParams,
  };

  export {
    Scs as Scs,
    type SearchCriterion as SearchCriterion,
    type SearchLogicalCriterion as SearchLogicalCriterion,
    type ScAllowableFileExtensionsResponse as ScAllowableFileExtensionsResponse,
    type ScAllowableFileMimesResponse as ScAllowableFileMimesResponse,
    type ScCopyResponse as ScCopyResponse,
    type ScFileUploadResponse as ScFileUploadResponse,
    type ScHasWriteAccessResponse as ScHasWriteAccessResponse,
    type ScMoveResponse as ScMoveResponse,
    type ScSearchResponse as ScSearchResponse,
    type ScDeleteParams as ScDeleteParams,
    type ScCopyParams as ScCopyParams,
    type ScDownloadParams as ScDownloadParams,
    type ScFileDownloadParams as ScFileDownloadParams,
    type ScFileUploadParams as ScFileUploadParams,
    type ScHasWriteAccessParams as ScHasWriteAccessParams,
    type ScMoveParams as ScMoveParams,
    type ScRenameParams as ScRenameParams,
    type ScSearchParams as ScSearchParams,
  };

  export {
    SecureMessaging as SecureMessaging,
    type TopicDetails as TopicDetails,
    type SecureMessagingListTopicsResponse as SecureMessagingListTopicsResponse,
    type SecureMessagingDescribeTopicParams as SecureMessagingDescribeTopicParams,
    type SecureMessagingGetLatestOffsetParams as SecureMessagingGetLatestOffsetParams,
    type SecureMessagingGetMessagesParams as SecureMessagingGetMessagesParams,
  };

  export {
    Sensor as Sensor,
    type SensorListResponse as SensorListResponse,
    type SensorCountResponse as SensorCountResponse,
    type SensorGetResponse as SensorGetResponse,
    type SensorQueryhelpResponse as SensorQueryhelpResponse,
    type SensorTupleResponse as SensorTupleResponse,
    type SensorListResponsesOffsetPage as SensorListResponsesOffsetPage,
    type SensorCreateParams as SensorCreateParams,
    type SensorUpdateParams as SensorUpdateParams,
    type SensorListParams as SensorListParams,
    type SensorCountParams as SensorCountParams,
    type SensorGetParams as SensorGetParams,
    type SensorTupleParams as SensorTupleParams,
  };

  export {
    SensorStating as SensorStating,
    type SensorStatingListResponse as SensorStatingListResponse,
    type SensorStatingGetResponse as SensorStatingGetResponse,
    type SensorStatingQueryhelpResponse as SensorStatingQueryhelpResponse,
    type SensorStatingListResponsesOffsetPage as SensorStatingListResponsesOffsetPage,
    type SensorStatingCreateParams as SensorStatingCreateParams,
    type SensorStatingUpdateParams as SensorStatingUpdateParams,
    type SensorStatingListParams as SensorStatingListParams,
    type SensorStatingCreateBulkParams as SensorStatingCreateBulkParams,
    type SensorStatingGetParams as SensorStatingGetParams,
  };

  export {
    SensorMaintenance as SensorMaintenance,
    type SensorMaintenanceListResponse as SensorMaintenanceListResponse,
    type SensorMaintenanceCountResponse as SensorMaintenanceCountResponse,
    type SensorMaintenanceGetResponse as SensorMaintenanceGetResponse,
    type SensorMaintenanceListCurrentResponse as SensorMaintenanceListCurrentResponse,
    type SensorMaintenanceQueryHelpResponse as SensorMaintenanceQueryHelpResponse,
    type SensorMaintenanceTupleResponse as SensorMaintenanceTupleResponse,
    type SensorMaintenanceListResponsesOffsetPage as SensorMaintenanceListResponsesOffsetPage,
    type SensorMaintenanceListCurrentResponsesOffsetPage as SensorMaintenanceListCurrentResponsesOffsetPage,
    type SensorMaintenanceCreateParams as SensorMaintenanceCreateParams,
    type SensorMaintenanceUpdateParams as SensorMaintenanceUpdateParams,
    type SensorMaintenanceListParams as SensorMaintenanceListParams,
    type SensorMaintenanceCountParams as SensorMaintenanceCountParams,
    type SensorMaintenanceCreateBulkParams as SensorMaintenanceCreateBulkParams,
    type SensorMaintenanceGetParams as SensorMaintenanceGetParams,
    type SensorMaintenanceListCurrentParams as SensorMaintenanceListCurrentParams,
    type SensorMaintenanceTupleParams as SensorMaintenanceTupleParams,
  };

  export {
    SensorObservationType as SensorObservationType,
    type SensorObservationTypeListResponse as SensorObservationTypeListResponse,
    type SensorObservationTypeGetResponse as SensorObservationTypeGetResponse,
    type SensorObservationTypeListResponsesOffsetPage as SensorObservationTypeListResponsesOffsetPage,
    type SensorObservationTypeListParams as SensorObservationTypeListParams,
    type SensorObservationTypeGetParams as SensorObservationTypeGetParams,
  };

  export {
    SensorPlan as SensorPlan,
    type SensorPlanListResponse as SensorPlanListResponse,
    type SensorPlanCountResponse as SensorPlanCountResponse,
    type SensorPlanGetResponse as SensorPlanGetResponse,
    type SensorPlanQueryhelpResponse as SensorPlanQueryhelpResponse,
    type SensorPlanTupleResponse as SensorPlanTupleResponse,
    type SensorPlanListResponsesOffsetPage as SensorPlanListResponsesOffsetPage,
    type SensorPlanCreateParams as SensorPlanCreateParams,
    type SensorPlanUpdateParams as SensorPlanUpdateParams,
    type SensorPlanListParams as SensorPlanListParams,
    type SensorPlanCountParams as SensorPlanCountParams,
    type SensorPlanGetParams as SensorPlanGetParams,
    type SensorPlanTupleParams as SensorPlanTupleParams,
    type SensorPlanUnvalidatedPublishParams as SensorPlanUnvalidatedPublishParams,
  };

  export {
    SensorType as SensorType,
    type SensorTypeListResponse as SensorTypeListResponse,
    type SensorTypeGetResponse as SensorTypeGetResponse,
    type SensorTypeListResponsesOffsetPage as SensorTypeListResponsesOffsetPage,
    type SensorTypeListParams as SensorTypeListParams,
    type SensorTypeGetParams as SensorTypeGetParams,
  };

  export {
    SeraDataCommDetails as SeraDataCommDetails,
    type SeraDataCommDetailListResponse as SeraDataCommDetailListResponse,
    type SeraDataCommDetailCountResponse as SeraDataCommDetailCountResponse,
    type SeraDataCommDetailGetResponse as SeraDataCommDetailGetResponse,
    type SeraDataCommDetailQueryhelpResponse as SeraDataCommDetailQueryhelpResponse,
    type SeraDataCommDetailTupleResponse as SeraDataCommDetailTupleResponse,
    type SeraDataCommDetailListResponsesOffsetPage as SeraDataCommDetailListResponsesOffsetPage,
    type SeraDataCommDetailCreateParams as SeraDataCommDetailCreateParams,
    type SeraDataCommDetailUpdateParams as SeraDataCommDetailUpdateParams,
    type SeraDataCommDetailListParams as SeraDataCommDetailListParams,
    type SeraDataCommDetailCountParams as SeraDataCommDetailCountParams,
    type SeraDataCommDetailGetParams as SeraDataCommDetailGetParams,
    type SeraDataCommDetailTupleParams as SeraDataCommDetailTupleParams,
  };

  export {
    SeraDataEarlyWarning as SeraDataEarlyWarning,
    type SeraDataEarlyWarningListResponse as SeraDataEarlyWarningListResponse,
    type SeraDataEarlyWarningCountResponse as SeraDataEarlyWarningCountResponse,
    type SeraDataEarlyWarningGetResponse as SeraDataEarlyWarningGetResponse,
    type SeraDataEarlyWarningQueryhelpResponse as SeraDataEarlyWarningQueryhelpResponse,
    type SeraDataEarlyWarningTupleResponse as SeraDataEarlyWarningTupleResponse,
    type SeraDataEarlyWarningListResponsesOffsetPage as SeraDataEarlyWarningListResponsesOffsetPage,
    type SeraDataEarlyWarningCreateParams as SeraDataEarlyWarningCreateParams,
    type SeraDataEarlyWarningUpdateParams as SeraDataEarlyWarningUpdateParams,
    type SeraDataEarlyWarningListParams as SeraDataEarlyWarningListParams,
    type SeraDataEarlyWarningCountParams as SeraDataEarlyWarningCountParams,
    type SeraDataEarlyWarningGetParams as SeraDataEarlyWarningGetParams,
    type SeraDataEarlyWarningTupleParams as SeraDataEarlyWarningTupleParams,
  };

  export {
    SeraDataNavigation as SeraDataNavigation,
    type SeraDataNavigationListResponse as SeraDataNavigationListResponse,
    type SeraDataNavigationCountResponse as SeraDataNavigationCountResponse,
    type SeraDataNavigationGetResponse as SeraDataNavigationGetResponse,
    type SeraDataNavigationQueryhelpResponse as SeraDataNavigationQueryhelpResponse,
    type SeraDataNavigationTupleResponse as SeraDataNavigationTupleResponse,
    type SeraDataNavigationListResponsesOffsetPage as SeraDataNavigationListResponsesOffsetPage,
    type SeraDataNavigationCreateParams as SeraDataNavigationCreateParams,
    type SeraDataNavigationUpdateParams as SeraDataNavigationUpdateParams,
    type SeraDataNavigationListParams as SeraDataNavigationListParams,
    type SeraDataNavigationCountParams as SeraDataNavigationCountParams,
    type SeraDataNavigationGetParams as SeraDataNavigationGetParams,
    type SeraDataNavigationTupleParams as SeraDataNavigationTupleParams,
  };

  export {
    SeradataOpticalPayload as SeradataOpticalPayload,
    type SeradataOpticalPayloadListResponse as SeradataOpticalPayloadListResponse,
    type SeradataOpticalPayloadCountResponse as SeradataOpticalPayloadCountResponse,
    type SeradataOpticalPayloadGetResponse as SeradataOpticalPayloadGetResponse,
    type SeradataOpticalPayloadQueryhelpResponse as SeradataOpticalPayloadQueryhelpResponse,
    type SeradataOpticalPayloadTupleResponse as SeradataOpticalPayloadTupleResponse,
    type SeradataOpticalPayloadListResponsesOffsetPage as SeradataOpticalPayloadListResponsesOffsetPage,
    type SeradataOpticalPayloadCreateParams as SeradataOpticalPayloadCreateParams,
    type SeradataOpticalPayloadUpdateParams as SeradataOpticalPayloadUpdateParams,
    type SeradataOpticalPayloadListParams as SeradataOpticalPayloadListParams,
    type SeradataOpticalPayloadCountParams as SeradataOpticalPayloadCountParams,
    type SeradataOpticalPayloadGetParams as SeradataOpticalPayloadGetParams,
    type SeradataOpticalPayloadTupleParams as SeradataOpticalPayloadTupleParams,
  };

  export {
    SeradataRadarPayload as SeradataRadarPayload,
    type SeradataRadarPayloadListResponse as SeradataRadarPayloadListResponse,
    type SeradataRadarPayloadCountResponse as SeradataRadarPayloadCountResponse,
    type SeradataRadarPayloadGetResponse as SeradataRadarPayloadGetResponse,
    type SeradataRadarPayloadQueryhelpResponse as SeradataRadarPayloadQueryhelpResponse,
    type SeradataRadarPayloadTupleResponse as SeradataRadarPayloadTupleResponse,
    type SeradataRadarPayloadListResponsesOffsetPage as SeradataRadarPayloadListResponsesOffsetPage,
    type SeradataRadarPayloadCreateParams as SeradataRadarPayloadCreateParams,
    type SeradataRadarPayloadUpdateParams as SeradataRadarPayloadUpdateParams,
    type SeradataRadarPayloadListParams as SeradataRadarPayloadListParams,
    type SeradataRadarPayloadCountParams as SeradataRadarPayloadCountParams,
    type SeradataRadarPayloadGetParams as SeradataRadarPayloadGetParams,
    type SeradataRadarPayloadTupleParams as SeradataRadarPayloadTupleParams,
  };

  export {
    SeradataSigintPayload as SeradataSigintPayload,
    type SeradataSigintPayloadListResponse as SeradataSigintPayloadListResponse,
    type SeradataSigintPayloadCountResponse as SeradataSigintPayloadCountResponse,
    type SeradataSigintPayloadGetResponse as SeradataSigintPayloadGetResponse,
    type SeradataSigintPayloadQueryhelpResponse as SeradataSigintPayloadQueryhelpResponse,
    type SeradataSigintPayloadTupleResponse as SeradataSigintPayloadTupleResponse,
    type SeradataSigintPayloadListResponsesOffsetPage as SeradataSigintPayloadListResponsesOffsetPage,
    type SeradataSigintPayloadCreateParams as SeradataSigintPayloadCreateParams,
    type SeradataSigintPayloadUpdateParams as SeradataSigintPayloadUpdateParams,
    type SeradataSigintPayloadListParams as SeradataSigintPayloadListParams,
    type SeradataSigintPayloadCountParams as SeradataSigintPayloadCountParams,
    type SeradataSigintPayloadGetParams as SeradataSigintPayloadGetParams,
    type SeradataSigintPayloadTupleParams as SeradataSigintPayloadTupleParams,
  };

  export {
    SeradataSpacecraftDetails as SeradataSpacecraftDetails,
    type SeradataSpacecraftDetailListResponse as SeradataSpacecraftDetailListResponse,
    type SeradataSpacecraftDetailCountResponse as SeradataSpacecraftDetailCountResponse,
    type SeradataSpacecraftDetailGetResponse as SeradataSpacecraftDetailGetResponse,
    type SeradataSpacecraftDetailQueryhelpResponse as SeradataSpacecraftDetailQueryhelpResponse,
    type SeradataSpacecraftDetailTupleResponse as SeradataSpacecraftDetailTupleResponse,
    type SeradataSpacecraftDetailListResponsesOffsetPage as SeradataSpacecraftDetailListResponsesOffsetPage,
    type SeradataSpacecraftDetailCreateParams as SeradataSpacecraftDetailCreateParams,
    type SeradataSpacecraftDetailUpdateParams as SeradataSpacecraftDetailUpdateParams,
    type SeradataSpacecraftDetailListParams as SeradataSpacecraftDetailListParams,
    type SeradataSpacecraftDetailCountParams as SeradataSpacecraftDetailCountParams,
    type SeradataSpacecraftDetailGetParams as SeradataSpacecraftDetailGetParams,
    type SeradataSpacecraftDetailTupleParams as SeradataSpacecraftDetailTupleParams,
  };

  export {
    Sgi as Sgi,
    type SgiListResponse as SgiListResponse,
    type SgiCountResponse as SgiCountResponse,
    type SgiGetResponse as SgiGetResponse,
    type SgiGetDataByEffectiveAsOfDateResponse as SgiGetDataByEffectiveAsOfDateResponse,
    type SgiQueryhelpResponse as SgiQueryhelpResponse,
    type SgiTupleResponse as SgiTupleResponse,
    type SgiListResponsesOffsetPage as SgiListResponsesOffsetPage,
    type SgiCreateParams as SgiCreateParams,
    type SgiUpdateParams as SgiUpdateParams,
    type SgiListParams as SgiListParams,
    type SgiCountParams as SgiCountParams,
    type SgiCreateBulkParams as SgiCreateBulkParams,
    type SgiGetParams as SgiGetParams,
    type SgiGetDataByEffectiveAsOfDateParams as SgiGetDataByEffectiveAsOfDateParams,
    type SgiTupleParams as SgiTupleParams,
    type SgiUnvalidatedPublishParams as SgiUnvalidatedPublishParams,
  };

  export {
    Sigact as Sigact,
    type SigactListResponse as SigactListResponse,
    type SigactCountResponse as SigactCountResponse,
    type SigactQueryhelpResponse as SigactQueryhelpResponse,
    type SigactTupleResponse as SigactTupleResponse,
    type SigactListResponsesOffsetPage as SigactListResponsesOffsetPage,
    type SigactListParams as SigactListParams,
    type SigactCountParams as SigactCountParams,
    type SigactCreateBulkParams as SigactCreateBulkParams,
    type SigactTupleParams as SigactTupleParams,
    type SigactUploadZipParams as SigactUploadZipParams,
  };

  export {
    Site as Site,
    type SiteListResponse as SiteListResponse,
    type SiteCountResponse as SiteCountResponse,
    type SiteGetResponse as SiteGetResponse,
    type SiteQueryhelpResponse as SiteQueryhelpResponse,
    type SiteTupleResponse as SiteTupleResponse,
    type SiteListResponsesOffsetPage as SiteListResponsesOffsetPage,
    type SiteCreateParams as SiteCreateParams,
    type SiteUpdateParams as SiteUpdateParams,
    type SiteListParams as SiteListParams,
    type SiteCountParams as SiteCountParams,
    type SiteGetParams as SiteGetParams,
    type SiteTupleParams as SiteTupleParams,
  };

  export {
    SiteRemark as SiteRemark,
    type SiteRemarkListResponse as SiteRemarkListResponse,
    type SiteRemarkCountResponse as SiteRemarkCountResponse,
    type SiteRemarkGetResponse as SiteRemarkGetResponse,
    type SiteRemarkQueryhelpResponse as SiteRemarkQueryhelpResponse,
    type SiteRemarkTupleResponse as SiteRemarkTupleResponse,
    type SiteRemarkListResponsesOffsetPage as SiteRemarkListResponsesOffsetPage,
    type SiteRemarkCreateParams as SiteRemarkCreateParams,
    type SiteRemarkListParams as SiteRemarkListParams,
    type SiteRemarkCountParams as SiteRemarkCountParams,
    type SiteRemarkGetParams as SiteRemarkGetParams,
    type SiteRemarkTupleParams as SiteRemarkTupleParams,
  };

  export {
    SiteStatus as SiteStatus,
    type SiteStatusListResponse as SiteStatusListResponse,
    type SiteStatusCountResponse as SiteStatusCountResponse,
    type SiteStatusGetResponse as SiteStatusGetResponse,
    type SiteStatusQueryhelpResponse as SiteStatusQueryhelpResponse,
    type SiteStatusTupleResponse as SiteStatusTupleResponse,
    type SiteStatusListResponsesOffsetPage as SiteStatusListResponsesOffsetPage,
    type SiteStatusCreateParams as SiteStatusCreateParams,
    type SiteStatusUpdateParams as SiteStatusUpdateParams,
    type SiteStatusListParams as SiteStatusListParams,
    type SiteStatusCountParams as SiteStatusCountParams,
    type SiteStatusGetParams as SiteStatusGetParams,
    type SiteStatusTupleParams as SiteStatusTupleParams,
  };

  export {
    SkyImagery as SkyImagery,
    type SkyImageryListResponse as SkyImageryListResponse,
    type SkyImageryCountResponse as SkyImageryCountResponse,
    type SkyImageryGetResponse as SkyImageryGetResponse,
    type SkyImageryQueryhelpResponse as SkyImageryQueryhelpResponse,
    type SkyImageryTupleResponse as SkyImageryTupleResponse,
    type SkyImageryListResponsesOffsetPage as SkyImageryListResponsesOffsetPage,
    type SkyImageryListParams as SkyImageryListParams,
    type SkyImageryCountParams as SkyImageryCountParams,
    type SkyImageryFileGetParams as SkyImageryFileGetParams,
    type SkyImageryGetParams as SkyImageryGetParams,
    type SkyImageryTupleParams as SkyImageryTupleParams,
    type SkyImageryUploadZipParams as SkyImageryUploadZipParams,
  };

  export {
    SoiObservationSet as SoiObservationSet,
    type SoiObservationSetListResponse as SoiObservationSetListResponse,
    type SoiObservationSetCountResponse as SoiObservationSetCountResponse,
    type SoiObservationSetQueryhelpResponse as SoiObservationSetQueryhelpResponse,
    type SoiObservationSetTupleResponse as SoiObservationSetTupleResponse,
    type SoiObservationSetListResponsesOffsetPage as SoiObservationSetListResponsesOffsetPage,
    type SoiObservationSetCreateParams as SoiObservationSetCreateParams,
    type SoiObservationSetListParams as SoiObservationSetListParams,
    type SoiObservationSetCountParams as SoiObservationSetCountParams,
    type SoiObservationSetCreateBulkParams as SoiObservationSetCreateBulkParams,
    type SoiObservationSetGetParams as SoiObservationSetGetParams,
    type SoiObservationSetTupleParams as SoiObservationSetTupleParams,
    type SoiObservationSetUnvalidatedPublishParams as SoiObservationSetUnvalidatedPublishParams,
  };

  export {
    SolarArray as SolarArray,
    type SolarArrayListResponse as SolarArrayListResponse,
    type SolarArrayCountResponse as SolarArrayCountResponse,
    type SolarArrayQueryhelpResponse as SolarArrayQueryhelpResponse,
    type SolarArrayTupleResponse as SolarArrayTupleResponse,
    type SolarArrayListResponsesOffsetPage as SolarArrayListResponsesOffsetPage,
    type SolarArrayCreateParams as SolarArrayCreateParams,
    type SolarArrayUpdateParams as SolarArrayUpdateParams,
    type SolarArrayListParams as SolarArrayListParams,
    type SolarArrayCountParams as SolarArrayCountParams,
    type SolarArrayGetParams as SolarArrayGetParams,
    type SolarArrayTupleParams as SolarArrayTupleParams,
  };

  export {
    SolarArrayDetails as SolarArrayDetails,
    type SolarArrayDetailListResponse as SolarArrayDetailListResponse,
    type SolarArrayDetailListResponsesOffsetPage as SolarArrayDetailListResponsesOffsetPage,
    type SolarArrayDetailCreateParams as SolarArrayDetailCreateParams,
    type SolarArrayDetailUpdateParams as SolarArrayDetailUpdateParams,
    type SolarArrayDetailListParams as SolarArrayDetailListParams,
    type SolarArrayDetailGetParams as SolarArrayDetailGetParams,
  };

  export {
    SortiePpr as SortiePpr,
    type SortiePprListResponse as SortiePprListResponse,
    type SortiePprCountResponse as SortiePprCountResponse,
    type SortiePprQueryhelpResponse as SortiePprQueryhelpResponse,
    type SortiePprTupleResponse as SortiePprTupleResponse,
    type SortiePprListResponsesOffsetPage as SortiePprListResponsesOffsetPage,
    type SortiePprCreateParams as SortiePprCreateParams,
    type SortiePprUpdateParams as SortiePprUpdateParams,
    type SortiePprListParams as SortiePprListParams,
    type SortiePprCountParams as SortiePprCountParams,
    type SortiePprCreateBulkParams as SortiePprCreateBulkParams,
    type SortiePprGetParams as SortiePprGetParams,
    type SortiePprTupleParams as SortiePprTupleParams,
    type SortiePprUnvalidatedPublishParams as SortiePprUnvalidatedPublishParams,
  };

  export {
    SpaceEnvObservation as SpaceEnvObservation,
    type SpaceEnvObservationListResponse as SpaceEnvObservationListResponse,
    type SpaceEnvObservationCountResponse as SpaceEnvObservationCountResponse,
    type SpaceEnvObservationQueryhelpResponse as SpaceEnvObservationQueryhelpResponse,
    type SpaceEnvObservationTupleResponse as SpaceEnvObservationTupleResponse,
    type SpaceEnvObservationListResponsesOffsetPage as SpaceEnvObservationListResponsesOffsetPage,
    type SpaceEnvObservationListParams as SpaceEnvObservationListParams,
    type SpaceEnvObservationCountParams as SpaceEnvObservationCountParams,
    type SpaceEnvObservationCreateBulkParams as SpaceEnvObservationCreateBulkParams,
    type SpaceEnvObservationTupleParams as SpaceEnvObservationTupleParams,
    type SpaceEnvObservationUnvalidatedPublishParams as SpaceEnvObservationUnvalidatedPublishParams,
  };

  export {
    Stage as Stage,
    type StageListResponse as StageListResponse,
    type StageCountResponse as StageCountResponse,
    type StageGetResponse as StageGetResponse,
    type StageQueryhelpResponse as StageQueryhelpResponse,
    type StageTupleResponse as StageTupleResponse,
    type StageListResponsesOffsetPage as StageListResponsesOffsetPage,
    type StageCreateParams as StageCreateParams,
    type StageUpdateParams as StageUpdateParams,
    type StageListParams as StageListParams,
    type StageCountParams as StageCountParams,
    type StageGetParams as StageGetParams,
    type StageTupleParams as StageTupleParams,
  };

  export {
    StarCatalog as StarCatalog,
    type StarCatalogListResponse as StarCatalogListResponse,
    type StarCatalogCountResponse as StarCatalogCountResponse,
    type StarCatalogGetResponse as StarCatalogGetResponse,
    type StarCatalogQueryhelpResponse as StarCatalogQueryhelpResponse,
    type StarCatalogTupleResponse as StarCatalogTupleResponse,
    type StarCatalogListResponsesOffsetPage as StarCatalogListResponsesOffsetPage,
    type StarCatalogCreateParams as StarCatalogCreateParams,
    type StarCatalogUpdateParams as StarCatalogUpdateParams,
    type StarCatalogListParams as StarCatalogListParams,
    type StarCatalogCountParams as StarCatalogCountParams,
    type StarCatalogCreateBulkParams as StarCatalogCreateBulkParams,
    type StarCatalogGetParams as StarCatalogGetParams,
    type StarCatalogTupleParams as StarCatalogTupleParams,
    type StarCatalogUnvalidatedPublishParams as StarCatalogUnvalidatedPublishParams,
  };

  export {
    StateVector as StateVector,
    type StateVectorAbridged as StateVectorAbridged,
    type StateVectorIngest as StateVectorIngest,
    type StateVectorCountResponse as StateVectorCountResponse,
    type StateVectorQueryhelpResponse as StateVectorQueryhelpResponse,
    type StateVectorTupleResponse as StateVectorTupleResponse,
    type StateVectorAbridgedsOffsetPage as StateVectorAbridgedsOffsetPage,
    type StateVectorCreateParams as StateVectorCreateParams,
    type StateVectorListParams as StateVectorListParams,
    type StateVectorCountParams as StateVectorCountParams,
    type StateVectorCreateBulkParams as StateVectorCreateBulkParams,
    type StateVectorGetParams as StateVectorGetParams,
    type StateVectorTupleParams as StateVectorTupleParams,
    type StateVectorUnvalidatedPublishParams as StateVectorUnvalidatedPublishParams,
  };

  export {
    Status as Status,
    type StatusListResponse as StatusListResponse,
    type StatusCountResponse as StatusCountResponse,
    type StatusGetByEntityIDResponse as StatusGetByEntityIDResponse,
    type StatusGetByEntityTypeResponse as StatusGetByEntityTypeResponse,
    type StatusQueryhelpResponse as StatusQueryhelpResponse,
    type StatusTupleResponse as StatusTupleResponse,
    type StatusListResponsesOffsetPage as StatusListResponsesOffsetPage,
    type StatusCreateParams as StatusCreateParams,
    type StatusUpdateParams as StatusUpdateParams,
    type StatusListParams as StatusListParams,
    type StatusCountParams as StatusCountParams,
    type StatusGetParams as StatusGetParams,
    type StatusGetByEntityIDParams as StatusGetByEntityIDParams,
    type StatusGetByEntityTypeParams as StatusGetByEntityTypeParams,
    type StatusTupleParams as StatusTupleParams,
  };

  export {
    Substatus as Substatus,
    type SubstatusListResponse as SubstatusListResponse,
    type SubstatusCountResponse as SubstatusCountResponse,
    type SubstatusQueryhelpResponse as SubstatusQueryhelpResponse,
    type SubstatusTupleResponse as SubstatusTupleResponse,
    type SubstatusListResponsesOffsetPage as SubstatusListResponsesOffsetPage,
    type SubstatusCreateParams as SubstatusCreateParams,
    type SubstatusUpdateParams as SubstatusUpdateParams,
    type SubstatusListParams as SubstatusListParams,
    type SubstatusCountParams as SubstatusCountParams,
    type SubstatusGetParams as SubstatusGetParams,
    type SubstatusTupleParams as SubstatusTupleParams,
  };

  export { SupportingData as SupportingData };

  export {
    Surface as Surface,
    type SurfaceListResponse as SurfaceListResponse,
    type SurfaceCountResponse as SurfaceCountResponse,
    type SurfaceGetResponse as SurfaceGetResponse,
    type SurfaceQueryhelpResponse as SurfaceQueryhelpResponse,
    type SurfaceTupleResponse as SurfaceTupleResponse,
    type SurfaceListResponsesOffsetPage as SurfaceListResponsesOffsetPage,
    type SurfaceCreateParams as SurfaceCreateParams,
    type SurfaceUpdateParams as SurfaceUpdateParams,
    type SurfaceListParams as SurfaceListParams,
    type SurfaceCountParams as SurfaceCountParams,
    type SurfaceGetParams as SurfaceGetParams,
    type SurfaceTupleParams as SurfaceTupleParams,
  };

  export {
    SurfaceObstruction as SurfaceObstruction,
    type SurfaceObstructionListResponse as SurfaceObstructionListResponse,
    type SurfaceObstructionCountResponse as SurfaceObstructionCountResponse,
    type SurfaceObstructionGetResponse as SurfaceObstructionGetResponse,
    type SurfaceObstructionQueryhelpResponse as SurfaceObstructionQueryhelpResponse,
    type SurfaceObstructionTupleResponse as SurfaceObstructionTupleResponse,
    type SurfaceObstructionListResponsesOffsetPage as SurfaceObstructionListResponsesOffsetPage,
    type SurfaceObstructionCreateParams as SurfaceObstructionCreateParams,
    type SurfaceObstructionUpdateParams as SurfaceObstructionUpdateParams,
    type SurfaceObstructionListParams as SurfaceObstructionListParams,
    type SurfaceObstructionCountParams as SurfaceObstructionCountParams,
    type SurfaceObstructionGetParams as SurfaceObstructionGetParams,
    type SurfaceObstructionTupleParams as SurfaceObstructionTupleParams,
    type SurfaceObstructionUnvalidatedPublishParams as SurfaceObstructionUnvalidatedPublishParams,
  };

  export {
    Swir as Swir,
    type SwirListResponse as SwirListResponse,
    type SwirCountResponse as SwirCountResponse,
    type SwirQueryhelpResponse as SwirQueryhelpResponse,
    type SwirTupleResponse as SwirTupleResponse,
    type SwirListResponsesOffsetPage as SwirListResponsesOffsetPage,
    type SwirCreateParams as SwirCreateParams,
    type SwirListParams as SwirListParams,
    type SwirCountParams as SwirCountParams,
    type SwirCreateBulkParams as SwirCreateBulkParams,
    type SwirGetParams as SwirGetParams,
    type SwirTupleParams as SwirTupleParams,
  };

  export {
    TaiUtc as TaiUtc,
    type TaiUtcListResponse as TaiUtcListResponse,
    type TaiUtcCountResponse as TaiUtcCountResponse,
    type TaiUtcQueryhelpResponse as TaiUtcQueryhelpResponse,
    type TaiUtcTupleResponse as TaiUtcTupleResponse,
    type TaiUtcListResponsesOffsetPage as TaiUtcListResponsesOffsetPage,
    type TaiUtcCreateParams as TaiUtcCreateParams,
    type TaiUtcUpdateParams as TaiUtcUpdateParams,
    type TaiUtcListParams as TaiUtcListParams,
    type TaiUtcCountParams as TaiUtcCountParams,
    type TaiUtcGetParams as TaiUtcGetParams,
    type TaiUtcTupleParams as TaiUtcTupleParams,
  };

  export { TdoaFdoa as TdoaFdoa };

  export {
    Track as Track,
    type TrackListResponse as TrackListResponse,
    type TrackCountResponse as TrackCountResponse,
    type TrackQueryhelpResponse as TrackQueryhelpResponse,
    type TrackTupleResponse as TrackTupleResponse,
    type TrackListResponsesOffsetPage as TrackListResponsesOffsetPage,
    type TrackListParams as TrackListParams,
    type TrackCountParams as TrackCountParams,
    type TrackCreateBulkParams as TrackCreateBulkParams,
    type TrackTupleParams as TrackTupleParams,
    type TrackUnvalidatedPublishParams as TrackUnvalidatedPublishParams,
  };

  export {
    TrackDetails as TrackDetails,
    type TrackDetailListResponse as TrackDetailListResponse,
    type TrackDetailCountResponse as TrackDetailCountResponse,
    type TrackDetailQueryhelpResponse as TrackDetailQueryhelpResponse,
    type TrackDetailTupleResponse as TrackDetailTupleResponse,
    type TrackDetailListResponsesOffsetPage as TrackDetailListResponsesOffsetPage,
    type TrackDetailListParams as TrackDetailListParams,
    type TrackDetailCountParams as TrackDetailCountParams,
    type TrackDetailCreateBulkParams as TrackDetailCreateBulkParams,
    type TrackDetailTupleParams as TrackDetailTupleParams,
  };

  export {
    TrackRoute as TrackRoute,
    type AltitudeBlocksIngest as AltitudeBlocksIngest,
    type PointOfContactIngest as PointOfContactIngest,
    type RoutePointsIngest as RoutePointsIngest,
    type TrackRouteIngest as TrackRouteIngest,
    type TrackRouteListResponse as TrackRouteListResponse,
    type TrackRouteCountResponse as TrackRouteCountResponse,
    type TrackRouteQueryhelpResponse as TrackRouteQueryhelpResponse,
    type TrackRouteTupleResponse as TrackRouteTupleResponse,
    type TrackRouteListResponsesOffsetPage as TrackRouteListResponsesOffsetPage,
    type TrackRouteCreateParams as TrackRouteCreateParams,
    type TrackRouteUpdateParams as TrackRouteUpdateParams,
    type TrackRouteListParams as TrackRouteListParams,
    type TrackRouteCountParams as TrackRouteCountParams,
    type TrackRouteCreateBulkParams as TrackRouteCreateBulkParams,
    type TrackRouteGetParams as TrackRouteGetParams,
    type TrackRouteTupleParams as TrackRouteTupleParams,
    type TrackRouteUnvalidatedPublishParams as TrackRouteUnvalidatedPublishParams,
  };

  export {
    Transponder as Transponder,
    type TransponderListResponse as TransponderListResponse,
    type TransponderCountResponse as TransponderCountResponse,
    type TransponderGetResponse as TransponderGetResponse,
    type TransponderQueryhelpResponse as TransponderQueryhelpResponse,
    type TransponderTupleResponse as TransponderTupleResponse,
    type TransponderListResponsesOffsetPage as TransponderListResponsesOffsetPage,
    type TransponderCreateParams as TransponderCreateParams,
    type TransponderUpdateParams as TransponderUpdateParams,
    type TransponderListParams as TransponderListParams,
    type TransponderCountParams as TransponderCountParams,
    type TransponderGetParams as TransponderGetParams,
    type TransponderTupleParams as TransponderTupleParams,
  };

  export { User as User, type UserAuthResponse as UserAuthResponse };

  export {
    Vessel as Vessel,
    type VesselListResponse as VesselListResponse,
    type VesselCountResponse as VesselCountResponse,
    type VesselGetResponse as VesselGetResponse,
    type VesselQueryhelpResponse as VesselQueryhelpResponse,
    type VesselTupleResponse as VesselTupleResponse,
    type VesselListResponsesOffsetPage as VesselListResponsesOffsetPage,
    type VesselCreateParams as VesselCreateParams,
    type VesselUpdateParams as VesselUpdateParams,
    type VesselListParams as VesselListParams,
    type VesselCountParams as VesselCountParams,
    type VesselCreateBulkParams as VesselCreateBulkParams,
    type VesselGetParams as VesselGetParams,
    type VesselTupleParams as VesselTupleParams,
  };

  export {
    Video as Video,
    type VideoListResponse as VideoListResponse,
    type VideoCountResponse as VideoCountResponse,
    type VideoGetPlayerStreamingInfoResponse as VideoGetPlayerStreamingInfoResponse,
    type VideoGetPublisherStreamingInfoResponse as VideoGetPublisherStreamingInfoResponse,
    type VideoGetStreamFileResponse as VideoGetStreamFileResponse,
    type VideoQueryhelpResponse as VideoQueryhelpResponse,
    type VideoTupleResponse as VideoTupleResponse,
    type VideoListResponsesOffsetPage as VideoListResponsesOffsetPage,
    type VideoCreateParams as VideoCreateParams,
    type VideoListParams as VideoListParams,
    type VideoCountParams as VideoCountParams,
    type VideoGetParams as VideoGetParams,
    type VideoGetPlayerStreamingInfoParams as VideoGetPlayerStreamingInfoParams,
    type VideoGetPublisherStreamingInfoParams as VideoGetPublisherStreamingInfoParams,
    type VideoGetStreamFileParams as VideoGetStreamFileParams,
    type VideoTupleParams as VideoTupleParams,
  };

  export {
    WeatherData as WeatherData,
    type WeatherDataListResponse as WeatherDataListResponse,
    type WeatherDataCountResponse as WeatherDataCountResponse,
    type WeatherDataQueryhelpResponse as WeatherDataQueryhelpResponse,
    type WeatherDataTupleResponse as WeatherDataTupleResponse,
    type WeatherDataListResponsesOffsetPage as WeatherDataListResponsesOffsetPage,
    type WeatherDataCreateParams as WeatherDataCreateParams,
    type WeatherDataListParams as WeatherDataListParams,
    type WeatherDataCountParams as WeatherDataCountParams,
    type WeatherDataCreateBulkParams as WeatherDataCreateBulkParams,
    type WeatherDataGetParams as WeatherDataGetParams,
    type WeatherDataTupleParams as WeatherDataTupleParams,
    type WeatherDataUnvalidatedPublishParams as WeatherDataUnvalidatedPublishParams,
  };

  export {
    WeatherReport as WeatherReport,
    type WeatherReportListResponse as WeatherReportListResponse,
    type WeatherReportCountResponse as WeatherReportCountResponse,
    type WeatherReportQueryhelpResponse as WeatherReportQueryhelpResponse,
    type WeatherReportTupleResponse as WeatherReportTupleResponse,
    type WeatherReportListResponsesOffsetPage as WeatherReportListResponsesOffsetPage,
    type WeatherReportCreateParams as WeatherReportCreateParams,
    type WeatherReportListParams as WeatherReportListParams,
    type WeatherReportCountParams as WeatherReportCountParams,
    type WeatherReportGetParams as WeatherReportGetParams,
    type WeatherReportTupleParams as WeatherReportTupleParams,
    type WeatherReportUnvalidatedPublishParams as WeatherReportUnvalidatedPublishParams,
  };

  export type AirTaskingOrderFull = API.AirTaskingOrderFull;
  export type AirTransportMissionFull = API.AirTransportMissionFull;
  export type AircraftFull = API.AircraftFull;
  export type AircraftsortieFull = API.AircraftsortieFull;
  export type AircraftstatusFull = API.AircraftstatusFull;
  export type AircraftstatusremarkFull = API.AircraftstatusremarkFull;
  export type AirfieldFull = API.AirfieldFull;
  export type AirfieldslotFull = API.AirfieldslotFull;
  export type AirfieldslotconsumptionFull = API.AirfieldslotconsumptionFull;
  export type AirfieldstatusFull = API.AirfieldstatusFull;
  export type AirloadplanFull = API.AirloadplanFull;
  export type AirspacecontrolorderFull = API.AirspacecontrolorderFull;
  export type AIsFull = API.AIsFull;
  export type AnalyticImageryFull = API.AnalyticImageryFull;
  export type AntennaDetailsFull = API.AntennaDetailsFull;
  export type AntennaFull = API.AntennaFull;
  export type AntennaIngest = API.AntennaIngest;
  export type AttitudedataFull = API.AttitudedataFull;
  export type AttitudesetFull = API.AttitudesetFull;
  export type BatteryFull = API.BatteryFull;
  export type BatteryIngest = API.BatteryIngest;
  export type BatterydetailsFull = API.BatterydetailsFull;
  export type BeamFull = API.BeamFull;
  export type BeamcontourFull = API.BeamcontourFull;
  export type BusFull = API.BusFull;
  export type ChannelFull = API.ChannelFull;
  export type CollectRequestFull = API.CollectRequestFull;
  export type CollectResponseFull = API.CollectResponseFull;
  export type CommFull = API.CommFull;
  export type ConjunctionFull = API.ConjunctionFull;
  export type CountryFull = API.CountryFull;
  export type CrewFull = API.CrewFull;
  export type DailyOperationFull = API.DailyOperationFull;
  export type DiplomaticclearanceFull = API.DiplomaticclearanceFull;
  export type DriftHistoryAbridged = API.DriftHistoryAbridged;
  export type DriftHistoryFull = API.DriftHistoryFull;
  export type Engine = API.Engine;
  export type EngineDetailsFull = API.EngineDetailsFull;
  export type EngineIngest = API.EngineIngest;
  export type EntityFull = API.EntityFull;
  export type EoObservationFull = API.EoObservationFull;
  export type EopFull = API.EopFull;
  export type EphemerisFull = API.EphemerisFull;
  export type EvacFull = API.EvacFull;
  export type EventEvolutionFull = API.EventEvolutionFull;
  export type FileData = API.FileData;
  export type FlightPlanFull = API.FlightPlanFull;
  export type LocationAbridged = API.LocationAbridged;
  export type LocationFull = API.LocationFull;
  export type MaximumOnGroundFull = API.MaximumOnGroundFull;
  export type NotificationFull = API.NotificationFull;
  export type OnboardnavigationFull = API.OnboardnavigationFull;
  export type OnorbitAntennaFull = API.OnorbitAntennaFull;
  export type OnorbitBatteryFull = API.OnorbitBatteryFull;
  export type OnorbitDetailsFull = API.OnorbitDetailsFull;
  export type OnorbitFull = API.OnorbitFull;
  export type OnorbitSolarArrayFull = API.OnorbitSolarArrayFull;
  export type OnorbitThrusterFull = API.OnorbitThrusterFull;
  export type OnorbitthrusterstatusFull = API.OnorbitthrusterstatusFull;
  export type OperatingHoursFull = API.OperatingHoursFull;
  export type OperatingUnitRemarkFull = API.OperatingUnitRemarkFull;
  export type OperatingunitFull = API.OperatingunitFull;
  export type OperationalDeviationFull = API.OperationalDeviationFull;
  export type OperationalPlanningFull = API.OperationalPlanningFull;
  export type OrganizationDetailsFull = API.OrganizationDetailsFull;
  export type OrganizationFull = API.OrganizationFull;
  export type ParamDescriptor = API.ParamDescriptor;
  export type PathwayFull = API.PathwayFull;
  export type RelatedDocumentFull = API.RelatedDocumentFull;
  export type RfBandFull = API.RfBandFull;
  export type SofDataSourceRefFull = API.SofDataSourceRefFull;
  export type SolarArrayDetailsFull = API.SolarArrayDetailsFull;
  export type SolarArrayFull = API.SolarArrayFull;
  export type SolarArrayIngest = API.SolarArrayIngest;
  export type SortiePprFull = API.SortiePprFull;
  export type StateVectorFull = API.StateVectorFull;
  export type StatusFull = API.StatusFull;
  export type SubStatusFull = API.SubStatusFull;
  export type SubStatusIngest = API.SubStatusIngest;
  export type WaiverFull = API.WaiverFull;
}
