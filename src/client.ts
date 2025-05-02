// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
import { type Logger, type LogLevel, parseLogLevel } from './internal/utils/log';
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
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
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
  AirEventTupleParams,
  AirEventTupleResponse,
  AirEventUnvalidatedPublishParams,
  AirEventUpdateParams,
  AirEvents,
} from './resources/air-events';
import {
  AirLoadPlanCountParams,
  AirLoadPlanCountResponse,
  AirLoadPlanCreateParams,
  AirLoadPlanListParams,
  AirLoadPlanRetrieveParams,
  AirLoadPlanTupleParams,
  AirLoadPlanTupleResponse,
  AirLoadPlans,
  AirloadplanAbridged,
  AirloadplanAbridgedsOffsetPage,
  AirloadplanFull,
} from './resources/air-load-plans';
import {
  AirTaskingOrderCountParams,
  AirTaskingOrderCountResponse,
  AirTaskingOrderCreateParams,
  AirTaskingOrderFull,
  AirTaskingOrderRetrieveParams,
  AirTaskingOrderTupleParams,
  AirTaskingOrderTupleResponse,
  AirTaskingOrders,
} from './resources/air-tasking-orders';
import {
  Aircraft,
  AircraftAbridged,
  AircraftAbridgedsOffsetPage,
  AircraftCountParams,
  AircraftCountResponse,
  AircraftCreateParams,
  AircraftFull,
  AircraftListParams,
  AircraftRetrieveParams,
  AircraftTupleQueryParams,
  AircraftTupleQueryResponse,
  AircraftUpdateParams,
} from './resources/aircraft';
import {
  AircraftSorties,
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
  AircraftStatusRemarkRetrieveParams,
  AircraftStatusRemarkTupleParams,
  AircraftStatusRemarkTupleResponse,
  AircraftStatusRemarks,
  AircraftstatusremarkAbridged,
  AircraftstatusremarkAbridgedsOffsetPage,
  AircraftstatusremarkFull,
} from './resources/aircraft-status-remarks';
import { Aircraftstatusremark, AircraftstatusremarkUpdateParams } from './resources/aircraftstatusremark';
import {
  AirfieldSlotCreateParams,
  AirfieldSlotListParams,
  AirfieldSlots,
  AirfieldslotAbridged,
  AirfieldslotAbridgedsOffsetPage,
  AirfieldslotFull,
} from './resources/airfield-slots';
import {
  AirfieldStatus,
  AirfieldStatusRetrieveParams,
  AirfieldStatusTupleParams,
  AirfieldStatusTupleResponse,
  AirfieldStatusUpdateParams,
} from './resources/airfield-status';
import {
  AirfieldAbridged,
  AirfieldAbridgedsOffsetPage,
  AirfieldCountParams,
  AirfieldCountResponse,
  AirfieldCreateParams,
  AirfieldFull,
  AirfieldListParams,
  AirfieldRetrieveParams,
  AirfieldTupleParams,
  AirfieldTupleResponse,
  AirfieldUpdateParams,
  Airfields,
} from './resources/airfields';
import {
  AirfieldslotconsumptionAbridged,
  AirfieldslotconsumptionAbridgedsOffsetPage,
  AirfieldslotconsumptionCountParams,
  AirfieldslotconsumptionCountResponse,
  AirfieldslotconsumptionCreateParams,
  AirfieldslotconsumptionFull,
  AirfieldslotconsumptionListParams,
  AirfieldslotconsumptionRetrieveParams,
  AirfieldslotconsumptionTupleParams,
  AirfieldslotconsumptionTupleResponse,
  AirfieldslotconsumptionUpdateParams,
  Airfieldslotconsumptions,
} from './resources/airfieldslotconsumptions';
import {
  AirfieldslotCountParams,
  AirfieldslotCountResponse,
  AirfieldslotRetrieveParams,
  AirfieldslotTupleParams,
  AirfieldslotTupleResponse,
  AirfieldslotUpdateParams,
  Airfieldslots,
} from './resources/airfieldslots';
import { AirloadplanUpdateParams, Airloadplans } from './resources/airloadplans';
import {
  AirspaceControlOrderCountParams,
  AirspaceControlOrderCountResponse,
  AirspaceControlOrderCreateBulkParams,
  AirspaceControlOrderCreateParams,
  AirspaceControlOrderListParams,
  AirspaceControlOrderRetrieveParams,
  AirspaceControlOrderTupleParams,
  AirspaceControlOrderTupleResponse,
  AirspaceControlOrders,
  AirspacecontrolorderAbridged,
  AirspacecontrolorderAbridgedsOffsetPage,
  AirspacecontrolorderFull,
} from './resources/airspace-control-orders';
import {
  AirtaskingorderAbridged,
  AirtaskingorderAbridgedsOffsetPage,
  AirtaskingorderListParams,
  Airtaskingorders,
} from './resources/airtaskingorders';
import { AIsObjectUnvalidatedPublishParams, AIsObjects } from './resources/ais-objects';
import {
  AnalyticImagery,
  AnalyticImageryAbridged,
  AnalyticImageryAbridgedsOffsetPage,
  AnalyticImageryCountParams,
  AnalyticImageryCountResponse,
  AnalyticImageryFileGetParams,
  AnalyticImageryFull,
  AnalyticImageryHistoryAodrParams,
  AnalyticImageryHistoryCountParams,
  AnalyticImageryHistoryCountResponse,
  AnalyticImageryHistoryParams,
  AnalyticImageryHistoryResponse,
  AnalyticImageryListParams,
  AnalyticImageryRetrieveParams,
  AnalyticImageryTupleParams,
  AnalyticImageryTupleResponse,
  AnalyticImageryUnvalidatedPublishParams,
} from './resources/analytic-imagery';
import {
  AntennaAbridged,
  AntennaAbridgedsOffsetPage,
  AntennaCountParams,
  AntennaCountResponse,
  AntennaCreateParams,
  AntennaFull,
  AntennaListParams,
  AntennaRetrieveParams,
  AntennaTupleParams,
  AntennaTupleResponse,
  AntennaUpdateParams,
  Antennas,
} from './resources/antennas';
import {
  AttitudeData,
  AttitudeDataTupleParams,
  AttitudeDataTupleResponse,
  AttitudedataFull,
} from './resources/attitude-data';
import { AttitudesetRetrieveParams, Attitudesets } from './resources/attitudesets';
import {
  Aviationriskmanagement,
  AviationriskmanagementCountParams,
  AviationriskmanagementCountResponse,
  AviationriskmanagementCreateBulkParams,
  AviationriskmanagementCreateParams,
  AviationriskmanagementQueryParams,
  AviationriskmanagementQueryResponse,
  AviationriskmanagementRetrieveParams,
  AviationriskmanagementRetrieveResponse,
  AviationriskmanagementTupleParams,
  AviationriskmanagementTupleResponse,
  AviationriskmanagementUnvalidatedPublishParams,
  AviationriskmanagementUpdateParams,
} from './resources/aviationriskmanagement';
import {
  Batteries,
  BatteryAbridged,
  BatteryAbridgedsOffsetPage,
  BatteryCountParams,
  BatteryCountResponse,
  BatteryCreateParams,
  BatteryFull,
  BatteryListParams,
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
  BatterydetailsFull,
} from './resources/batterydetails';
import {
  Beam,
  BeamAbridged,
  BeamAbridgedsOffsetPage,
  BeamCountParams,
  BeamCountResponse,
  BeamCreateParams,
  BeamFull,
  BeamListParams,
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
  BeamContourRetrieveParams,
  BeamContourTupleParams,
  BeamContourTupleResponse,
  BeamContourUpdateParams,
  BeamContours,
  BeamcontourAbridged,
  BeamcontourAbridgedsOffsetPage,
  BeamcontourFull,
} from './resources/beam-contours';
import {
  BusAbridged,
  BusAbridgedsOffsetPage,
  BusCountParams,
  BusCountResponse,
  BusCreateParams,
  BusFull,
  BusListParams,
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
  ChannelFull,
  ChannelListParams,
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
  CommFull,
  CommListParams,
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
  CountryFull,
  CountryListParams,
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
  CrewFull,
  CrewListParams,
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
  DropzoneQueryParams,
  DropzoneQueryResponse,
  DropzoneRetrieveParams,
  DropzoneRetrieveResponse,
  DropzoneTupleParams,
  DropzoneTupleResponse,
  DropzoneUnvalidatedPublishParams,
  DropzoneUpdateParams,
} from './resources/dropzone';
import { Ecpsdr, EcpsdrUnvalidatedPublishParams } from './resources/ecpsdr';
import {
  Emittergeolocation,
  EmittergeolocationCountParams,
  EmittergeolocationCountResponse,
  EmittergeolocationCreateBulkParams,
  EmittergeolocationCreateParams,
  EmittergeolocationQueryParams,
  EmittergeolocationQueryResponse,
  EmittergeolocationRetrieveParams,
  EmittergeolocationRetrieveResponse,
  EmittergeolocationTupleParams,
  EmittergeolocationTupleResponse,
  EmittergeolocationUnvalidatedPublishParams,
} from './resources/emittergeolocation';
import {
  EngineDetailCreateParams,
  EngineDetailRetrieveParams,
  EngineDetailUpdateParams,
  EngineDetails,
  EngineDetailsFull,
} from './resources/engine-details';
import {
  EngineDetailsAbridged,
  EngineDetailsAbridgedsOffsetPage,
  EnginedetailListParams,
  Enginedetails,
} from './resources/enginedetails';
import {
  Engine,
  EngineAbridged,
  EngineAbridgedsOffsetPage,
  EngineCountParams,
  EngineCountResponse,
  EngineCreateParams,
  EngineListParams,
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
  EntityFull,
  EntityGetAllTypesParams,
  EntityGetAllTypesResponse,
  EntityIngest,
  EntityListParams,
  EntityRetrieveParams,
  EntityTupleParams,
  EntityTupleResponse,
  EntityUpdateParams,
} from './resources/entities';
import {
  EoobservationRetrieveParams,
  EoobservationTupleParams,
  EoobservationTupleResponse,
  Eoobservations,
} from './resources/eoobservations';
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
  EquipmentRetrieveParams,
  EquipmentTupleParams,
  EquipmentTupleResponse,
  EquipmentUpdateParams,
} from './resources/equipment';
import {
  EquipmentRemarkAbridged,
  EquipmentRemarkAbridgedsOffsetPage,
  EquipmentRemarkFull,
  EquipmentremarkCountParams,
  EquipmentremarkCountResponse,
  EquipmentremarkCreateBulkParams,
  EquipmentremarkCreateParams,
  EquipmentremarkListParams,
  EquipmentremarkRetrieveParams,
  EquipmentremarkTupleParams,
  EquipmentremarkTupleResponse,
  Equipmentremarks,
} from './resources/equipmentremarks';
import {
  FlightPlanAbridged,
  FlightPlanAbridgedsOffsetPage,
  Flightplan,
  FlightplanCountParams,
  FlightplanCountResponse,
  FlightplanCreateParams,
  FlightplanListParams,
  FlightplanRetrieveParams,
  FlightplanTupleParams,
  FlightplanTupleResponse,
  FlightplanUnvalidatedPublishParams,
  FlightplanUpdateParams,
} from './resources/flightplan';
import {
  Geostatus,
  GeostatusCountParams,
  GeostatusCountResponse,
  GeostatusCreateBulkParams,
  GeostatusCreateParams,
  GeostatusGetParams,
  GeostatusListParams,
  GeostatusListResponse,
  GeostatusListResponsesOffsetPage,
  GeostatusTupleParams,
  GeostatusTupleResponse,
} from './resources/geostatus';
import {
  Gnssobservationset,
  GnssobservationsetCountParams,
  GnssobservationsetCountResponse,
  GnssobservationsetCreateBulkParams,
  GnssobservationsetListParams,
  GnssobservationsetListResponse,
  GnssobservationsetListResponsesOffsetPage,
  GnssobservationsetTupleParams,
  GnssobservationsetTupleResponse,
  GnssobservationsetUnvalidatedPublishParams,
} from './resources/gnssobservationset';
import {
  Gnssrawif,
  GnssrawifCountParams,
  GnssrawifCountResponse,
  GnssrawifFileGetParams,
  GnssrawifGetParams,
  GnssrawifListParams,
  GnssrawifListResponse,
  GnssrawifListResponsesOffsetPage,
  GnssrawifTupleParams,
  GnssrawifTupleResponse,
  GnssrawifUploadZipParams,
} from './resources/gnssrawif';
import {
  Groundimagery,
  GroundimageryCountParams,
  GroundimageryCountResponse,
  GroundimageryCreateParams,
  GroundimageryGetFileParams,
  GroundimageryGetParams,
  GroundimageryListParams,
  GroundimageryListResponse,
  GroundimageryListResponsesOffsetPage,
  GroundimageryTupleParams,
  GroundimageryTupleResponse,
} from './resources/groundimagery';
import {
  H3geohexcell,
  H3geohexcellCountParams,
  H3geohexcellCountResponse,
  H3geohexcellListParams,
  H3geohexcellListResponse,
  H3geohexcellListResponsesOffsetPage,
  H3geohexcellTupleParams,
  H3geohexcellTupleResponse,
} from './resources/h3geohexcell';
import {
  Ionoobservation,
  IonoobservationCountParams,
  IonoobservationCountResponse,
  IonoobservationCreateBulkParams,
  IonoobservationListParams,
  IonoobservationListResponse,
  IonoobservationListResponsesOffsetPage,
  IonoobservationTupleParams,
  IonoobservationTupleResponse,
  IonoobservationUnvalidatedPublishParams,
} from './resources/ionoobservation';
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
  ItemTupleParams,
  ItemTupleResponse,
  ItemUnvalidatedPublishParams,
  ItemUpdateParams,
} from './resources/item';
import {
  Launchdetection,
  LaunchdetectionCountParams,
  LaunchdetectionCountResponse,
  LaunchdetectionCreateParams,
  LaunchdetectionGetParams,
  LaunchdetectionGetResponse,
  LaunchdetectionListParams,
  LaunchdetectionListResponse,
  LaunchdetectionListResponsesOffsetPage,
  LaunchdetectionTupleParams,
  LaunchdetectionTupleResponse,
  LaunchdetectionUpdateParams,
} from './resources/launchdetection';
import {
  Launchevent,
  LauncheventCountParams,
  LauncheventCountResponse,
  LauncheventCreateBulkParams,
  LauncheventCreateParams,
  LauncheventGetParams,
  LauncheventGetResponse,
  LauncheventListParams,
  LauncheventListResponse,
  LauncheventListResponsesOffsetPage,
  LauncheventTupleParams,
  LauncheventTupleResponse,
  LauncheventUnvalidatedPublishParams,
} from './resources/launchevent';
import {
  Launchsite,
  LaunchsiteCountParams,
  LaunchsiteCountResponse,
  LaunchsiteCreateParams,
  LaunchsiteGetParams,
  LaunchsiteGetResponse,
  LaunchsiteListParams,
  LaunchsiteListResponse,
  LaunchsiteListResponsesOffsetPage,
  LaunchsiteTupleParams,
  LaunchsiteTupleResponse,
  LaunchsiteUpdateParams,
} from './resources/launchsite';
import {
  LaunchsitedetailCreateParams,
  LaunchsitedetailFindBySourceParams,
  LaunchsitedetailFindBySourceResponse,
  LaunchsitedetailGetParams,
  LaunchsitedetailGetResponse,
  LaunchsitedetailListParams,
  LaunchsitedetailListResponse,
  LaunchsitedetailListResponsesOffsetPage,
  LaunchsitedetailUpdateParams,
  Launchsitedetails,
} from './resources/launchsitedetails';
import {
  Launchvehicle,
  LaunchvehicleCountParams,
  LaunchvehicleCountResponse,
  LaunchvehicleCreateParams,
  LaunchvehicleGetParams,
  LaunchvehicleGetResponse,
  LaunchvehicleListParams,
  LaunchvehicleListResponse,
  LaunchvehicleListResponsesOffsetPage,
  LaunchvehicleTupleParams,
  LaunchvehicleTupleResponse,
  LaunchvehicleUpdateParams,
} from './resources/launchvehicle';
import {
  LaunchvehicledetailCreateParams,
  LaunchvehicledetailGetParams,
  LaunchvehicledetailGetResponse,
  LaunchvehicledetailListParams,
  LaunchvehicledetailListResponse,
  LaunchvehicledetailListResponsesOffsetPage,
  LaunchvehicledetailUpdateParams,
  Launchvehicledetails,
} from './resources/launchvehicledetails';
import {
  Location,
  LocationCountParams,
  LocationCountResponse,
  LocationCreateParams,
  LocationFull,
  LocationGetParams,
  LocationIngest,
  LocationListParams,
  LocationListResponse,
  LocationListResponsesOffsetPage,
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
  ManifoldelsetTupleParams,
  ManifoldelsetTupleResponse,
  ManifoldelsetUpdateParams,
} from './resources/manifoldelset';
import {
  Monoradar,
  MonoradarCountParams,
  MonoradarCountResponse,
  MonoradarCreateBulkParams,
  MonoradarListParams,
  MonoradarListResponse,
  MonoradarListResponsesOffsetPage,
  MonoradarTupleParams,
  MonoradarTupleResponse,
} from './resources/monoradar';
import {
  Mti,
  MtiCountParams,
  MtiCountResponse,
  MtiCreateBulkParams,
  MtiListParams,
  MtiListResponse,
  MtiListResponsesOffsetPage,
  MtiTupleParams,
  MtiTupleResponse,
  MtiUnvalidatedPublishParams,
} from './resources/mti';
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
  NavigationTupleParams,
  NavigationTupleResponse,
  NavigationUpdateParams,
} from './resources/navigation';
import {
  Navigationalobstruction,
  NavigationalobstructionCountParams,
  NavigationalobstructionCountResponse,
  NavigationalobstructionCreateBulkParams,
  NavigationalobstructionCreateParams,
  NavigationalobstructionGetParams,
  NavigationalobstructionGetResponse,
  NavigationalobstructionListParams,
  NavigationalobstructionListResponse,
  NavigationalobstructionListResponsesOffsetPage,
  NavigationalobstructionTupleParams,
  NavigationalobstructionTupleResponse,
  NavigationalobstructionUpdateParams,
} from './resources/navigationalobstruction';
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
  NotificationTupleParams,
  NotificationTupleResponse,
} from './resources/notification';
import {
  Objectofinterest,
  ObjectofinterestCountParams,
  ObjectofinterestCountResponse,
  ObjectofinterestCreateParams,
  ObjectofinterestGetParams,
  ObjectofinterestGetResponse,
  ObjectofinterestListParams,
  ObjectofinterestListResponse,
  ObjectofinterestListResponsesOffsetPage,
  ObjectofinterestTupleParams,
  ObjectofinterestTupleResponse,
  ObjectofinterestUpdateParams,
} from './resources/objectofinterest';
import {
  Onboardnavigation,
  OnboardnavigationCountParams,
  OnboardnavigationCountResponse,
  OnboardnavigationCreateBulkParams,
  OnboardnavigationListParams,
  OnboardnavigationListResponse,
  OnboardnavigationListResponsesOffsetPage,
  OnboardnavigationTupleParams,
  OnboardnavigationTupleResponse,
  OnboardnavigationUnvalidatedPublishParams,
} from './resources/onboardnavigation';
import {
  Onorbitantenna,
  OnorbitantennaCreateParams,
  OnorbitantennaGetParams,
  OnorbitantennaGetResponse,
  OnorbitantennaListParams,
  OnorbitantennaListResponse,
  OnorbitantennaListResponsesOffsetPage,
  OnorbitantennaUpdateParams,
} from './resources/onorbitantenna';
import {
  Onorbitbattery,
  OnorbitbatteryCreateParams,
  OnorbitbatteryGetParams,
  OnorbitbatteryGetResponse,
  OnorbitbatteryListParams,
  OnorbitbatteryListResponse,
  OnorbitbatteryListResponsesOffsetPage,
  OnorbitbatteryUpdateParams,
} from './resources/onorbitbattery';
import {
  OnorbitdetailCreateParams,
  OnorbitdetailGetParams,
  OnorbitdetailGetResponse,
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
  OnorbitlistTupleParams,
  OnorbitlistTupleResponse,
  OnorbitlistUpdateParams,
} from './resources/onorbitlist';
import {
  Onorbitsolararray,
  OnorbitsolararrayCreateParams,
  OnorbitsolararrayGetParams,
  OnorbitsolararrayGetResponse,
  OnorbitsolararrayListParams,
  OnorbitsolararrayListResponse,
  OnorbitsolararrayListResponsesOffsetPage,
  OnorbitsolararrayUpdateParams,
} from './resources/onorbitsolararray';
import {
  Onorbitthruster,
  OnorbitthrusterCreateParams,
  OnorbitthrusterGetParams,
  OnorbitthrusterGetResponse,
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
  OperatingunitGetResponse,
  OperatingunitListParams,
  OperatingunitListResponse,
  OperatingunitListResponsesOffsetPage,
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
  OperatingunitremarkGetResponse,
  OperatingunitremarkListParams,
  OperatingunitremarkListResponse,
  OperatingunitremarkListResponsesOffsetPage,
  OperatingunitremarkTupleParams,
  OperatingunitremarkTupleResponse,
} from './resources/operatingunitremark';
import {
  Organization,
  OrganizationCountParams,
  OrganizationCountResponse,
  OrganizationCreateParams,
  OrganizationFull,
  OrganizationGetOrganizationCategoriesParams,
  OrganizationGetOrganizationCategoriesResponse,
  OrganizationGetOrganizationTypesParams,
  OrganizationGetOrganizationTypesResponse,
  OrganizationGetParams,
  OrganizationListParams,
  OrganizationListResponse,
  OrganizationListResponsesOffsetPage,
  OrganizationTupleParams,
  OrganizationTupleResponse,
  OrganizationUpdateParams,
} from './resources/organization';
import {
  OrganizationDetailsFull,
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
  PoiListParams,
  PoiListResponse,
  PoiListResponsesOffsetPage,
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
  PortTupleParams,
  PortTupleResponse,
  PortUpdateParams,
} from './resources/port';
import {
  Radarobservation,
  RadarobservationCountParams,
  RadarobservationCountResponse,
  RadarobservationCreateBulkParams,
  RadarobservationCreateParams,
  RadarobservationGetParams,
  RadarobservationListParams,
  RadarobservationListResponse,
  RadarobservationListResponsesOffsetPage,
  RadarobservationTupleParams,
  RadarobservationTupleResponse,
  RadarobservationUnvalidatedPublishParams,
} from './resources/radarobservation';
import {
  Rfband,
  RfbandCountParams,
  RfbandCountResponse,
  RfbandCreateParams,
  RfbandGetParams,
  RfbandGetResponse,
  RfbandListParams,
  RfbandListResponse,
  RfbandListResponsesOffsetPage,
  RfbandTupleParams,
  RfbandTupleResponse,
  RfbandUpdateParams,
} from './resources/rfband';
import {
  Rfbandtype,
  RfbandtypeCountParams,
  RfbandtypeCountResponse,
  RfbandtypeCreateParams,
  RfbandtypeGetParams,
  RfbandtypeGetResponse,
  RfbandtypeListParams,
  RfbandtypeListResponse,
  RfbandtypeListResponsesOffsetPage,
  RfbandtypeTupleParams,
  RfbandtypeTupleResponse,
  RfbandtypeUpdateParams,
} from './resources/rfbandtype';
import {
  Rfemitter,
  RfemitterCountParams,
  RfemitterCountResponse,
  RfemitterCreateParams,
  RfemitterGetParams,
  RfemitterGetResponse,
  RfemitterListParams,
  RfemitterListResponse,
  RfemitterListResponsesOffsetPage,
  RfemitterTupleParams,
  RfemitterTupleResponse,
  RfemitterUpdateParams,
} from './resources/rfemitter';
import {
  RfemitterdetailCountParams,
  RfemitterdetailCountResponse,
  RfemitterdetailCreateParams,
  RfemitterdetailGetParams,
  RfemitterdetailGetResponse,
  RfemitterdetailListParams,
  RfemitterdetailListResponse,
  RfemitterdetailListResponsesOffsetPage,
  RfemitterdetailTupleParams,
  RfemitterdetailTupleResponse,
  RfemitterdetailUpdateParams,
  Rfemitterdetails,
} from './resources/rfemitterdetails';
import {
  RoutestatCountParams,
  RoutestatCountResponse,
  RoutestatCreateBulkParams,
  RoutestatCreateParams,
  RoutestatQueryParams,
  RoutestatQueryResponse,
  RoutestatRetrieveParams,
  RoutestatRetrieveResponse,
  RoutestatTupleParams,
  RoutestatTupleResponse,
  RoutestatUnvalidatedPublishParams,
  RoutestatUpdateParams,
  Routestats,
} from './resources/routestats';
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
  ScientificTupleParams,
  ScientificTupleResponse,
  ScientificUpdateParams,
} from './resources/scientific';
import { ScsViewRetrieveParams, ScsViews } from './resources/scs-views';
import {
  SecureMessaging,
  SecureMessagingDescribeTopicParams,
  SecureMessagingGetLatestOffsetParams,
  SecureMessagingGetMessagesParams,
  SecureMessagingListTopicsResponse,
  TopicDetails,
} from './resources/secure-messaging';
import {
  Sensorobservationtype,
  SensorobservationtypeGetParams,
  SensorobservationtypeGetResponse,
  SensorobservationtypeListParams,
  SensorobservationtypeListResponse,
  SensorobservationtypeListResponsesOffsetPage,
} from './resources/sensorobservationtype';
import {
  Sensortype,
  SensortypeGetParams,
  SensortypeGetResponse,
  SensortypeListParams,
  SensortypeListResponse,
  SensortypeListResponsesOffsetPage,
} from './resources/sensortype';
import {
  SeradatacommdetailCountParams,
  SeradatacommdetailCountResponse,
  SeradatacommdetailCreateParams,
  SeradatacommdetailGetParams,
  SeradatacommdetailGetResponse,
  SeradatacommdetailListParams,
  SeradatacommdetailListResponse,
  SeradatacommdetailListResponsesOffsetPage,
  SeradatacommdetailTupleParams,
  SeradatacommdetailTupleResponse,
  SeradatacommdetailUpdateParams,
  Seradatacommdetails,
} from './resources/seradatacommdetails';
import {
  Seradataearlywarning,
  SeradataearlywarningCountParams,
  SeradataearlywarningCountResponse,
  SeradataearlywarningCreateParams,
  SeradataearlywarningGetParams,
  SeradataearlywarningGetResponse,
  SeradataearlywarningListParams,
  SeradataearlywarningListResponse,
  SeradataearlywarningListResponsesOffsetPage,
  SeradataearlywarningTupleParams,
  SeradataearlywarningTupleResponse,
  SeradataearlywarningUpdateParams,
} from './resources/seradataearlywarning';
import {
  Seradatanavigation,
  SeradatanavigationCountParams,
  SeradatanavigationCountResponse,
  SeradatanavigationCreateParams,
  SeradatanavigationGetParams,
  SeradatanavigationGetResponse,
  SeradatanavigationListParams,
  SeradatanavigationListResponse,
  SeradatanavigationListResponsesOffsetPage,
  SeradatanavigationTupleParams,
  SeradatanavigationTupleResponse,
  SeradatanavigationUpdateParams,
} from './resources/seradatanavigation';
import {
  Seradataopticalpayload,
  SeradataopticalpayloadCountParams,
  SeradataopticalpayloadCountResponse,
  SeradataopticalpayloadCreateParams,
  SeradataopticalpayloadGetParams,
  SeradataopticalpayloadGetResponse,
  SeradataopticalpayloadListParams,
  SeradataopticalpayloadListResponse,
  SeradataopticalpayloadListResponsesOffsetPage,
  SeradataopticalpayloadTupleParams,
  SeradataopticalpayloadTupleResponse,
  SeradataopticalpayloadUpdateParams,
} from './resources/seradataopticalpayload';
import {
  Seradataradarpayload,
  SeradataradarpayloadCountParams,
  SeradataradarpayloadCountResponse,
  SeradataradarpayloadCreateParams,
  SeradataradarpayloadGetParams,
  SeradataradarpayloadGetResponse,
  SeradataradarpayloadListParams,
  SeradataradarpayloadListResponse,
  SeradataradarpayloadListResponsesOffsetPage,
  SeradataradarpayloadTupleParams,
  SeradataradarpayloadTupleResponse,
  SeradataradarpayloadUpdateParams,
} from './resources/seradataradarpayload';
import {
  Seradatasigintpayload,
  SeradatasigintpayloadCountParams,
  SeradatasigintpayloadCountResponse,
  SeradatasigintpayloadCreateParams,
  SeradatasigintpayloadGetParams,
  SeradatasigintpayloadGetResponse,
  SeradatasigintpayloadListParams,
  SeradatasigintpayloadListResponse,
  SeradatasigintpayloadListResponsesOffsetPage,
  SeradatasigintpayloadTupleParams,
  SeradatasigintpayloadTupleResponse,
  SeradatasigintpayloadUpdateParams,
} from './resources/seradatasigintpayload';
import {
  SeradataspacecraftdetailCountParams,
  SeradataspacecraftdetailCountResponse,
  SeradataspacecraftdetailCreateParams,
  SeradataspacecraftdetailGetParams,
  SeradataspacecraftdetailGetResponse,
  SeradataspacecraftdetailListParams,
  SeradataspacecraftdetailListResponse,
  SeradataspacecraftdetailListResponsesOffsetPage,
  SeradataspacecraftdetailTupleParams,
  SeradataspacecraftdetailTupleResponse,
  SeradataspacecraftdetailUpdateParams,
  Seradataspacecraftdetails,
} from './resources/seradataspacecraftdetails';
import {
  Siteremark,
  SiteremarkCountParams,
  SiteremarkCountResponse,
  SiteremarkCreateParams,
  SiteremarkGetParams,
  SiteremarkGetResponse,
  SiteremarkListParams,
  SiteremarkListResponse,
  SiteremarkListResponsesOffsetPage,
  SiteremarkTupleParams,
  SiteremarkTupleResponse,
} from './resources/siteremark';
import {
  Solararray,
  SolararrayCountParams,
  SolararrayCountResponse,
  SolararrayCreateParams,
  SolararrayGetParams,
  SolararrayGetResponse,
  SolararrayListParams,
  SolararrayListResponse,
  SolararrayListResponsesOffsetPage,
  SolararrayTupleParams,
  SolararrayTupleResponse,
  SolararrayUpdateParams,
} from './resources/solararray';
import {
  SolarArrayDetailsFull,
  SolararraydetailCreateParams,
  SolararraydetailGetParams,
  SolararraydetailListParams,
  SolararraydetailListResponse,
  SolararraydetailListResponsesOffsetPage,
  SolararraydetailUpdateParams,
  Solararraydetails,
} from './resources/solararraydetails';
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
  StatusGetResponse,
  StatusListParams,
  StatusListResponse,
  StatusListResponsesOffsetPage,
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
  SubstatusGetResponse,
  SubstatusListParams,
  SubstatusListResponse,
  SubstatusListResponsesOffsetPage,
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
  SurfaceTupleParams,
  SurfaceTupleResponse,
  SurfaceUpdateParams,
} from './resources/surface';
import {
  Surfaceobstruction,
  SurfaceobstructionCountParams,
  SurfaceobstructionCountResponse,
  SurfaceobstructionCreateParams,
  SurfaceobstructionGetParams,
  SurfaceobstructionGetResponse,
  SurfaceobstructionListParams,
  SurfaceobstructionListResponse,
  SurfaceobstructionListResponsesOffsetPage,
  SurfaceobstructionTupleParams,
  SurfaceobstructionTupleResponse,
  SurfaceobstructionUnvalidatedPublishParams,
  SurfaceobstructionUpdateParams,
} from './resources/surfaceobstruction';
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
  TransponderTupleParams,
  TransponderTupleResponse,
  TransponderUpdateParams,
} from './resources/transponder';
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
  VesselTupleParams,
  VesselTupleResponse,
  VesselUpdateParams,
} from './resources/vessel';
import { toBase64 } from './internal/utils/base64';
import { readEnv } from './internal/utils/env';
import { formatRequestDetails, loggerFor } from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';
import { AirOperations } from './resources/air-operations/air-operations';
import {
  AirTransportMissionAbridged,
  AirTransportMissionAbridgedsOffsetPage,
  AirTransportMissionCountParams,
  AirTransportMissionCountResponse,
  AirTransportMissionCreateParams,
  AirTransportMissionListParams,
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
  AircraftStatusRetrieveParams,
  AircraftStatusTupleParams,
  AircraftStatusTupleResponse,
  AircraftStatusUpdateParams,
  AircraftStatuses,
  AircraftstatusAbridged,
  AircraftstatusAbridgedsOffsetPage,
} from './resources/aircraft-statuses/aircraft-statuses';
import {
  Airfieldstatus,
  AirfieldstatusAbridged,
  AirfieldstatusAbridgedsOffsetPage,
  AirfieldstatusCountParams,
  AirfieldstatusCountResponse,
  AirfieldstatusCreateParams,
  AirfieldstatusFull,
  AirfieldstatusListParams,
} from './resources/airfieldstatus/airfieldstatus';
import {
  AICountParams,
  AICountResponse,
  AICreateBulkParams,
  AIHistoryCountParams,
  AIHistoryCountResponse,
  AIListParams,
  AITupleParams,
  AITupleResponse,
  AIs,
  AIsAbridged,
  AIsAbridgedsOffsetPage,
} from './resources/ais/ais';
import {
  AttitudeSetCountParams,
  AttitudeSetCountResponse,
  AttitudeSetCreateParams,
  AttitudeSetListParams,
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
  ConjunctionFull,
  ConjunctionGetHistoryParams,
  ConjunctionGetHistoryResponse,
  ConjunctionListParams,
  ConjunctionRetrieveParams,
  ConjunctionTupleParams,
  ConjunctionTupleResponse,
  ConjunctionUnvalidatedPublishParams,
  ConjunctionUploadConjunctionDataMessageParams,
  Conjunctions,
} from './resources/conjunctions/conjunctions';
import {
  Diffofarrival,
  DiffofarrivalRetrieveParams,
  DiffofarrivalTupleParams,
  DiffofarrivalTupleResponse,
  DiffofarrivalUnvalidatedPublishParams,
} from './resources/diffofarrival/diffofarrival';
import {
  DiplomaticClearance,
  DiplomaticClearanceCountParams,
  DiplomaticClearanceCountResponse,
  DiplomaticClearanceCreateBulkParams,
  DiplomaticClearanceCreateParams,
  DiplomaticClearanceListParams,
  DiplomaticClearanceRetrieveParams,
  DiplomaticClearanceTupleParams,
  DiplomaticClearanceTupleResponse,
  DiplomaticClearanceUpdateParams,
} from './resources/diplomatic-clearance/diplomatic-clearance';
import {
  EffectRequestCountParams,
  EffectRequestCountResponse,
  EffectRequestCreateBulkParams,
  EffectRequestCreateParams,
  EffectRequestListParams,
  EffectRequestListResponse,
  EffectRequestListResponsesOffsetPage,
  EffectRequestRetrieveParams,
  EffectRequestRetrieveResponse,
  EffectRequestTupleParams,
  EffectRequestTupleResponse,
  EffectRequestUnvalidatedPublishParams,
  EffectRequests,
} from './resources/effect-requests/effect-requests';
import {
  EffectResponseCountParams,
  EffectResponseCountResponse,
  EffectResponseCreateBulkParams,
  EffectResponseCreateParams,
  EffectResponseListParams,
  EffectResponseListResponse,
  EffectResponseListResponsesOffsetPage,
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
  ElsetRetrieveParams,
  ElsetTupleParams,
  ElsetTupleResponse,
  ElsetUnvalidatedPublishParams,
  Elsets,
} from './resources/elsets/elsets';
import {
  EoObservationAbridged,
  EoObservationAbridgedsOffsetPage,
  EoObservationCountParams,
  EoObservationCountResponse,
  EoObservationCreateBulkParams,
  EoObservationCreateParams,
  EoObservationListParams,
  EoObservationUnvalidatedPublishParams,
  EoObservations,
} from './resources/eo-observations/eo-observations';
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
  EventEvolutionRetrieveParams,
  EventEvolutionTupleParams,
  EventEvolutionTupleResponse,
  EventEvolutionUnvalidatedPublishParams,
} from './resources/event-evolution/event-evolution';
import {
  Featureassessment,
  FeatureassessmentCountParams,
  FeatureassessmentCountResponse,
  FeatureassessmentCreateBulkParams,
  FeatureassessmentCreateParams,
  FeatureassessmentQueryParams,
  FeatureassessmentQueryResponse,
  FeatureassessmentRetrieveParams,
  FeatureassessmentRetrieveResponse,
  FeatureassessmentTupleParams,
  FeatureassessmentTupleResponse,
  FeatureassessmentUnvalidatedPublishParams,
} from './resources/featureassessment/featureassessment';
import {
  Globalatmosphericmodel,
  GlobalatmosphericmodelCountParams,
  GlobalatmosphericmodelCountResponse,
  GlobalatmosphericmodelGetFileParams,
  GlobalatmosphericmodelQueryParams,
  GlobalatmosphericmodelQueryResponse,
  GlobalatmosphericmodelRetrieveParams,
  GlobalatmosphericmodelRetrieveResponse,
  GlobalatmosphericmodelTupleParams,
  GlobalatmosphericmodelTupleResponse,
  GlobalatmosphericmodelUnvalidatedPublishParams,
} from './resources/globalatmosphericmodel/globalatmosphericmodel';
import { GnssObservations } from './resources/gnss-observations/gnss-observations';
import { GnssRawIf } from './resources/gnss-raw-if/gnss-raw-if';
import {
  GroundImagery,
  GroundImageryHistoryAodrParams,
  GroundImageryUploadZipParams,
} from './resources/ground-imagery/ground-imagery';
import {
  H3geo,
  H3geoCountParams,
  H3geoCountResponse,
  H3geoCreateParams,
  H3geoGetParams,
  H3geoGetResponse,
  H3geoListParams,
  H3geoListResponse,
  H3geoListResponsesOffsetPage,
  H3geoTupleParams,
  H3geoTupleResponse,
} from './resources/h3geo/h3geo';
import {
  Hazard,
  HazardCountParams,
  HazardCountResponse,
  HazardCreateBulkParams,
  HazardCreateParams,
  HazardGetParams,
  HazardListParams,
  HazardListResponse,
  HazardListResponsesOffsetPage,
  HazardTupleParams,
  HazardTupleResponse,
} from './resources/hazard/hazard';
import { IonoObservation } from './resources/iono-observation/iono-observation';
import {
  IsrCollectionCountParams,
  IsrCollectionCountResponse,
  IsrCollectionCreateBulkParams,
  IsrCollectionListParams,
  IsrCollectionListResponse,
  IsrCollectionListResponsesOffsetPage,
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
  ItemTrackingListParams,
  ItemTrackingListResponse,
  ItemTrackingListResponsesOffsetPage,
  ItemTrackingTupleParams,
  ItemTrackingTupleResponse,
  ItemTrackingUnvalidatedPublishParams,
  ItemTrackings,
} from './resources/item-trackings/item-trackings';
import { LaunchEvent, LaunchEventUnvalidatedPublishParams } from './resources/launch-event/launch-event';
import {
  LinkStatus,
  LinkStatusCountParams,
  LinkStatusCountResponse,
  LinkStatusCreateParams,
  LinkStatusGetParams,
  LinkStatusListParams,
  LinkStatusListResponse,
  LinkStatusListResponsesOffsetPage,
  LinkStatusTupleParams,
  LinkStatusTupleResponse,
} from './resources/link-status/link-status';
import {
  LogisticsRemarksFull,
  Logisticssupport,
  LogisticssupportCountParams,
  LogisticssupportCountResponse,
  LogisticssupportCreateBulkParams,
  LogisticssupportCreateParams,
  LogisticssupportGetParams,
  LogisticssupportGetResponse,
  LogisticssupportListParams,
  LogisticssupportListResponse,
  LogisticssupportListResponsesOffsetPage,
  LogisticssupportTupleParams,
  LogisticssupportTupleResponse,
  LogisticssupportUnvalidatedPublishParams,
  LogisticssupportUpdateParams,
} from './resources/logisticssupport/logisticssupport';
import {
  ManeuverCountParams,
  ManeuverCountResponse,
  ManeuverCreateBulkParams,
  ManeuverCreateParams,
  ManeuverGetParams,
  ManeuverListParams,
  ManeuverListResponse,
  ManeuverListResponsesOffsetPage,
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
  MissileTrackTupleParams,
  MissileTrackTupleResponse,
  MissileTrackUnvalidatedPublishParams,
  MissileTracks,
} from './resources/missile-tracks/missile-tracks';
import {
  Missionassignment,
  MissionassignmentCountParams,
  MissionassignmentCountResponse,
  MissionassignmentCreateBulkParams,
  MissionassignmentCreateParams,
  MissionassignmentGetParams,
  MissionassignmentListParams,
  MissionassignmentListResponse,
  MissionassignmentListResponsesOffsetPage,
  MissionassignmentTupleParams,
  MissionassignmentTupleResponse,
  MissionassignmentUpdateParams,
} from './resources/missionassignment/missionassignment';
import { Observations } from './resources/observations/observations';
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
  OnorbitTupleParams,
  OnorbitTupleResponse,
  OnorbitUpdateParams,
} from './resources/onorbit/onorbit';
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
  OrbitdeterminationListParams,
  OrbitdeterminationListResponse,
  OrbitdeterminationListResponsesOffsetPage,
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
  OrbittrackTupleParams,
  OrbittrackTupleResponse,
  OrbittrackUnvalidatedPublishParams,
} from './resources/orbittrack/orbittrack';
import {
  Passiveradarobservation,
  PassiveradarobservationCountParams,
  PassiveradarobservationCountResponse,
  PassiveradarobservationCreateBulkParams,
  PassiveradarobservationCreateParams,
  PassiveradarobservationFileCreateParams,
  PassiveradarobservationGetParams,
  PassiveradarobservationListParams,
  PassiveradarobservationListResponse,
  PassiveradarobservationListResponsesOffsetPage,
  PassiveradarobservationTupleParams,
  PassiveradarobservationTupleResponse,
} from './resources/passiveradarobservation/passiveradarobservation';
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
  PersonnelrecoveryTupleParams,
  PersonnelrecoveryTupleResponse,
} from './resources/personnelrecovery/personnelrecovery';
import { ReportAndActivity } from './resources/report-and-activity/report-and-activity';
import {
  Rfobservation,
  RfobservationCountParams,
  RfobservationCountResponse,
  RfobservationCreateBulkParams,
  RfobservationCreateParams,
  RfobservationGetParams,
  RfobservationListParams,
  RfobservationListResponse,
  RfobservationListResponsesOffsetPage,
  RfobservationTupleParams,
  RfobservationTupleResponse,
  RfobservationUnvalidatedPublishParams,
} from './resources/rfobservation/rfobservation';
import {
  Sarobservation,
  SarobservationCountParams,
  SarobservationCountResponse,
  SarobservationCreateBulkParams,
  SarobservationCreateParams,
  SarobservationGetParams,
  SarobservationListParams,
  SarobservationListResponse,
  SarobservationListResponsesOffsetPage,
  SarobservationTupleParams,
  SarobservationTupleResponse,
  SarobservationUnvalidatedPublishParams,
} from './resources/sarobservation/sarobservation';
import {
  ScAggregateDocTypeResponse,
  ScAllowableFileExtensionsResponse,
  ScAllowableFileMimesResponse,
  ScCopyParams,
  ScCopyResponse,
  ScDeleteParams,
  ScDownloadParams,
  ScFileDownloadParams,
  ScFileUploadParams,
  ScFileUploadResponse,
  ScMoveParams,
  ScMoveResponse,
  ScRenameParams,
  ScSearchParams,
  ScSearchResponse,
  ScUpdateTagsParams,
  Scs,
} from './resources/scs/scs';
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
  SensorTupleParams,
  SensorTupleResponse,
  SensorUpdateParams,
} from './resources/sensor/sensor';
import {
  Sensormaintenance,
  SensormaintenanceCountParams,
  SensormaintenanceCountResponse,
  SensormaintenanceCreateBulkParams,
  SensormaintenanceCreateParams,
  SensormaintenanceCurrentParams,
  SensormaintenanceCurrentResponse,
  SensormaintenanceGetParams,
  SensormaintenanceListParams,
  SensormaintenanceListResponse,
  SensormaintenanceListResponsesOffsetPage,
  SensormaintenanceTupleParams,
  SensormaintenanceTupleResponse,
  SensormaintenanceUpdateParams,
} from './resources/sensormaintenance/sensormaintenance';
import {
  Sensorplan,
  SensorplanCountParams,
  SensorplanCountResponse,
  SensorplanCreateParams,
  SensorplanGetParams,
  SensorplanListParams,
  SensorplanListResponse,
  SensorplanListResponsesOffsetPage,
  SensorplanTupleParams,
  SensorplanTupleResponse,
  SensorplanUnvalidatedPublishParams,
  SensorplanUpdateParams,
} from './resources/sensorplan/sensorplan';
import {
  Sgi,
  SgiCountParams,
  SgiCountResponse,
  SgiCreateBulkParams,
  SgiCreateParams,
  SgiGetDataByEffectiveAsOfDateParams,
  SgiGetParams,
  SgiListParams,
  SgiListResponse,
  SgiListResponsesOffsetPage,
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
  SigactTupleParams,
  SigactTupleResponse,
  SigactUploadZipParams,
} from './resources/sigact/sigact';
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
  SiteTupleParams,
  SiteTupleResponse,
  SiteUpdateParams,
} from './resources/site/site';
import {
  Sitestatus,
  SitestatusCountParams,
  SitestatusCountResponse,
  SitestatusCreateParams,
  SitestatusGetParams,
  SitestatusListParams,
  SitestatusListResponse,
  SitestatusListResponsesOffsetPage,
  SitestatusTupleParams,
  SitestatusTupleResponse,
  SitestatusUpdateParams,
} from './resources/sitestatus/sitestatus';
import {
  Skyimagery,
  SkyimageryCountParams,
  SkyimageryCountResponse,
  SkyimageryFileGetParams,
  SkyimageryGetParams,
  SkyimageryListParams,
  SkyimageryListResponse,
  SkyimageryListResponsesOffsetPage,
  SkyimageryTupleParams,
  SkyimageryTupleResponse,
  SkyimageryUploadZipParams,
} from './resources/skyimagery/skyimagery';
import {
  Soiobservationset,
  SoiobservationsetCountParams,
  SoiobservationsetCountResponse,
  SoiobservationsetCreateBulkParams,
  SoiobservationsetCreateParams,
  SoiobservationsetGetParams,
  SoiobservationsetListParams,
  SoiobservationsetListResponse,
  SoiobservationsetListResponsesOffsetPage,
  SoiobservationsetTupleParams,
  SoiobservationsetTupleResponse,
  SoiobservationsetUnvalidatedPublishParams,
} from './resources/soiobservationset/soiobservationset';
import {
  Sortieppr,
  SortiepprCountParams,
  SortiepprCountResponse,
  SortiepprCreateBulkParams,
  SortiepprCreateParams,
  SortiepprGetParams,
  SortiepprListParams,
  SortiepprListResponse,
  SortiepprListResponsesOffsetPage,
  SortiepprTupleParams,
  SortiepprTupleResponse,
  SortiepprUnvalidatedPublishParams,
  SortiepprUpdateParams,
} from './resources/sortieppr/sortieppr';
import {
  Spaceenvobservation,
  SpaceenvobservationCountParams,
  SpaceenvobservationCountResponse,
  SpaceenvobservationCreateBulkParams,
  SpaceenvobservationListParams,
  SpaceenvobservationListResponse,
  SpaceenvobservationListResponsesOffsetPage,
  SpaceenvobservationTupleParams,
  SpaceenvobservationTupleResponse,
  SpaceenvobservationUnvalidatedPublishParams,
} from './resources/spaceenvobservation/spaceenvobservation';
import {
  Starcatalog,
  StarcatalogCountParams,
  StarcatalogCountResponse,
  StarcatalogCreateBulkParams,
  StarcatalogCreateParams,
  StarcatalogGetParams,
  StarcatalogGetResponse,
  StarcatalogListParams,
  StarcatalogListResponse,
  StarcatalogListResponsesOffsetPage,
  StarcatalogTupleParams,
  StarcatalogTupleResponse,
  StarcatalogUnvalidatedPublishParams,
  StarcatalogUpdateParams,
} from './resources/starcatalog/starcatalog';
import {
  StateVectorAbridged,
  StateVectorAbridgedsOffsetPage,
  StateVectorFull,
  StateVectorIngest,
  Statevector,
  StatevectorCountParams,
  StatevectorCountResponse,
  StatevectorCreateBulkParams,
  StatevectorCreateParams,
  StatevectorGetParams,
  StatevectorListParams,
  StatevectorTupleParams,
  StatevectorTupleResponse,
  StatevectorUnvalidatedPublishParams,
} from './resources/statevector/statevector';
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
  SwirTupleParams,
  SwirTupleResponse,
} from './resources/swir/swir';
import {
  Taiutc,
  TaiutcCountParams,
  TaiutcCountResponse,
  TaiutcCreateParams,
  TaiutcGetParams,
  TaiutcListParams,
  TaiutcListResponse,
  TaiutcListResponsesOffsetPage,
  TaiutcTupleParams,
  TaiutcTupleResponse,
  TaiutcUpdateParams,
} from './resources/taiutc/taiutc';
import { TdoaFdoa } from './resources/tdoa-fdoa/tdoa-fdoa';
import {
  Track,
  TrackCountParams,
  TrackCountResponse,
  TrackCreateBulkParams,
  TrackListParams,
  TrackListResponse,
  TrackListResponsesOffsetPage,
  TrackTupleParams,
  TrackTupleResponse,
  TrackUnvalidatedPublishParams,
} from './resources/track/track';
import {
  TrackdetailCountParams,
  TrackdetailCountResponse,
  TrackdetailCreateBulkParams,
  TrackdetailListParams,
  TrackdetailListResponse,
  TrackdetailListResponsesOffsetPage,
  TrackdetailTupleParams,
  TrackdetailTupleResponse,
  Trackdetails,
} from './resources/trackdetails/trackdetails';
import {
  Trackroute,
  TrackrouteCountParams,
  TrackrouteCountResponse,
  TrackrouteCreateBulkParams,
  TrackrouteCreateParams,
  TrackrouteGetParams,
  TrackrouteListParams,
  TrackrouteListResponse,
  TrackrouteListResponsesOffsetPage,
  TrackrouteTupleParams,
  TrackrouteTupleResponse,
  TrackrouteUnvalidatedPublishParams,
  TrackrouteUpdateParams,
} from './resources/trackroute/trackroute';
import { Udl } from './resources/udl/udl';
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
  VideoTupleParams,
  VideoTupleResponse,
} from './resources/video/video';
import {
  Weatherdata,
  WeatherdataCountParams,
  WeatherdataCountResponse,
  WeatherdataCreateBulkParams,
  WeatherdataCreateParams,
  WeatherdataGetParams,
  WeatherdataListParams,
  WeatherdataListResponse,
  WeatherdataListResponsesOffsetPage,
  WeatherdataTupleParams,
  WeatherdataTupleResponse,
  WeatherdataUnvalidatedPublishParams,
} from './resources/weatherdata/weatherdata';
import {
  Weatherreport,
  WeatherreportCountParams,
  WeatherreportCountResponse,
  WeatherreportCreateParams,
  WeatherreportGetParams,
  WeatherreportListParams,
  WeatherreportListResponse,
  WeatherreportListResponsesOffsetPage,
  WeatherreportTupleParams,
  WeatherreportTupleResponse,
  WeatherreportUnvalidatedPublishParams,
} from './resources/weatherreport/weatherreport';

export interface ClientOptions {
  /**
   * Password for HTTP Basic Authentication
   */
  password?: string | undefined;

  /**
   * Username for HTTP Basic Authentication
   */
  username?: string | undefined;

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
  password: string;
  username: string;

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
   * @param {string | undefined} [opts.password=process.env['UDL_AUTH_PASSWORD'] ?? undefined]
   * @param {string | undefined} [opts.username=process.env['UDL_AUTH_USERNAME'] ?? undefined]
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
    password = readEnv('UDL_AUTH_PASSWORD'),
    username = readEnv('UDL_AUTH_USERNAME'),
    ...opts
  }: ClientOptions = {}) {
    if (password === undefined) {
      throw new Errors.UnifieddatalibraryError(
        "The UDL_AUTH_PASSWORD environment variable is missing or empty; either provide it, or instantiate the Unifieddatalibrary client with an password option, like new Unifieddatalibrary({ password: 'My Password' }).",
      );
    }
    if (username === undefined) {
      throw new Errors.UnifieddatalibraryError(
        "The UDL_AUTH_USERNAME environment variable is missing or empty; either provide it, or instantiate the Unifieddatalibrary client with an username option, like new Unifieddatalibrary({ username: 'My Username' }).",
      );
    }

    const options: ClientOptions = {
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

    this.password = password;
    this.username = username;
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    return;
  }

  protected authHeaders(opts: FinalRequestOptions): NullableHeaders | undefined {
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

  buildURL(path: string, query: Record<string, unknown> | null | undefined): string {
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(this.baseURL + (this.baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

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

    const { req, url, timeout } = this.buildRequest(options, { retryCount: maxRetries - retriesRemaining });

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

    if (response instanceof Error) {
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
      const shouldRetry = this.shouldRetry(response);
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

  private shouldRetry(response: Response): boolean {
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

  buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): { req: FinalizedRequestInit; url: string; timeout: number } {
    const options = { ...inputOptions };
    const { method, path, query } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

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

  private buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Headers {
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
      this.authHeaders(options),
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
      body instanceof Blob ||
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
  airLoadPlans: API.AirLoadPlans = new API.AirLoadPlans(this);
  airOperations: API.AirOperations = new API.AirOperations(this);
  airTaskingOrders: API.AirTaskingOrders = new API.AirTaskingOrders(this);
  airTransportMissions: API.AirTransportMissions = new API.AirTransportMissions(this);
  aircraft: API.Aircraft = new API.Aircraft(this);
  aircraftSorties: API.AircraftSorties = new API.AircraftSorties(this);
  aircraftStatusRemarks: API.AircraftStatusRemarks = new API.AircraftStatusRemarks(this);
  aircraftStatuses: API.AircraftStatuses = new API.AircraftStatuses(this);
  aircraftstatusremark: API.Aircraftstatusremark = new API.Aircraftstatusremark(this);
  airfieldSlots: API.AirfieldSlots = new API.AirfieldSlots(this);
  airfieldStatus: API.AirfieldStatus = new API.AirfieldStatus(this);
  airfields: API.Airfields = new API.Airfields(this);
  airfieldslotconsumptions: API.Airfieldslotconsumptions = new API.Airfieldslotconsumptions(this);
  airfieldslots: API.Airfieldslots = new API.Airfieldslots(this);
  airfieldstatus: API.Airfieldstatus = new API.Airfieldstatus(this);
  airloadplans: API.Airloadplans = new API.Airloadplans(this);
  airspaceControlOrders: API.AirspaceControlOrders = new API.AirspaceControlOrders(this);
  airtaskingorders: API.Airtaskingorders = new API.Airtaskingorders(this);
  ais: API.AIs = new API.AIs(this);
  aisObjects: API.AIsObjects = new API.AIsObjects(this);
  analyticImagery: API.AnalyticImagery = new API.AnalyticImagery(this);
  antennas: API.Antennas = new API.Antennas(this);
  attitudeData: API.AttitudeData = new API.AttitudeData(this);
  attitudeSets: API.AttitudeSets = new API.AttitudeSets(this);
  attitudesets: API.Attitudesets = new API.Attitudesets(this);
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
  aviationriskmanagement: API.Aviationriskmanagement = new API.Aviationriskmanagement(this);
  dropzone: API.Dropzone = new API.Dropzone(this);
  emittergeolocation: API.Emittergeolocation = new API.Emittergeolocation(this);
  featureassessment: API.Featureassessment = new API.Featureassessment(this);
  globalatmosphericmodel: API.Globalatmosphericmodel = new API.Globalatmosphericmodel(this);
  routestats: API.Routestats = new API.Routestats(this);
  countries: API.Countries = new API.Countries(this);
  crew: API.Crew = new API.Crew(this);
  diffofarrival: API.Diffofarrival = new API.Diffofarrival(this);
  diplomaticClearance: API.DiplomaticClearance = new API.DiplomaticClearance(this);
  driftHistory: API.DriftHistory = new API.DriftHistory(this);
  ecpsdr: API.Ecpsdr = new API.Ecpsdr(this);
  effectRequests: API.EffectRequests = new API.EffectRequests(this);
  effectResponses: API.EffectResponses = new API.EffectResponses(this);
  elsets: API.Elsets = new API.Elsets(this);
  engineDetails: API.EngineDetails = new API.EngineDetails(this);
  enginedetails: API.Enginedetails = new API.Enginedetails(this);
  engines: API.Engines = new API.Engines(this);
  entities: API.Entities = new API.Entities(this);
  eoObservations: API.EoObservations = new API.EoObservations(this);
  eoobservations: API.Eoobservations = new API.Eoobservations(this);
  eop: API.Eop = new API.Eop(this);
  ephemeris: API.Ephemeris = new API.Ephemeris(this);
  ephemerisSets: API.EphemerisSets = new API.EphemerisSets(this);
  equipment: API.Equipment = new API.Equipment(this);
  equipmentremarks: API.Equipmentremarks = new API.Equipmentremarks(this);
  evac: API.Evac = new API.Evac(this);
  eventEvolution: API.EventEvolution = new API.EventEvolution(this);
  flightplan: API.Flightplan = new API.Flightplan(this);
  geostatus: API.Geostatus = new API.Geostatus(this);
  gnssobservationset: API.Gnssobservationset = new API.Gnssobservationset(this);
  gnssrawif: API.Gnssrawif = new API.Gnssrawif(this);
  groundImagery: API.GroundImagery = new API.GroundImagery(this);
  groundimagery: API.Groundimagery = new API.Groundimagery(this);
  h3geo: API.H3geo = new API.H3geo(this);
  h3geohexcell: API.H3geohexcell = new API.H3geohexcell(this);
  hazard: API.Hazard = new API.Hazard(this);
  ionoobservation: API.Ionoobservation = new API.Ionoobservation(this);
  ir: API.Ir = new API.Ir(this);
  isrCollections: API.IsrCollections = new API.IsrCollections(this);
  item: API.Item = new API.Item(this);
  itemTrackings: API.ItemTrackings = new API.ItemTrackings(this);
  launchdetection: API.Launchdetection = new API.Launchdetection(this);
  launchevent: API.Launchevent = new API.Launchevent(this);
  launchsite: API.Launchsite = new API.Launchsite(this);
  launchsitedetails: API.Launchsitedetails = new API.Launchsitedetails(this);
  launchvehicle: API.Launchvehicle = new API.Launchvehicle(this);
  launchvehicledetails: API.Launchvehicledetails = new API.Launchvehicledetails(this);
  linkStatus: API.LinkStatus = new API.LinkStatus(this);
  location: API.Location = new API.Location(this);
  logisticssupport: API.Logisticssupport = new API.Logisticssupport(this);
  maneuvers: API.Maneuvers = new API.Maneuvers(this);
  manifold: API.Manifold = new API.Manifold(this);
  manifoldelset: API.Manifoldelset = new API.Manifoldelset(this);
  missileTracks: API.MissileTracks = new API.MissileTracks(this);
  missionassignment: API.Missionassignment = new API.Missionassignment(this);
  monoradar: API.Monoradar = new API.Monoradar(this);
  mti: API.Mti = new API.Mti(this);
  navigation: API.Navigation = new API.Navigation(this);
  navigationalobstruction: API.Navigationalobstruction = new API.Navigationalobstruction(this);
  notification: API.Notification = new API.Notification(this);
  objectofinterest: API.Objectofinterest = new API.Objectofinterest(this);
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
  operatingunit: API.Operatingunit = new API.Operatingunit(this);
  operatingunitremark: API.Operatingunitremark = new API.Operatingunitremark(this);
  orbitdetermination: API.Orbitdetermination = new API.Orbitdetermination(this);
  orbittrack: API.Orbittrack = new API.Orbittrack(this);
  organization: API.Organization = new API.Organization(this);
  organizationdetails: API.Organizationdetails = new API.Organizationdetails(this);
  passiveradarobservation: API.Passiveradarobservation = new API.Passiveradarobservation(this);
  personnelrecovery: API.Personnelrecovery = new API.Personnelrecovery(this);
  poi: API.Poi = new API.Poi(this);
  port: API.Port = new API.Port(this);
  radarobservation: API.Radarobservation = new API.Radarobservation(this);
  rfband: API.Rfband = new API.Rfband(this);
  rfbandtype: API.Rfbandtype = new API.Rfbandtype(this);
  rfemitter: API.Rfemitter = new API.Rfemitter(this);
  rfemitterdetails: API.Rfemitterdetails = new API.Rfemitterdetails(this);
  rfobservation: API.Rfobservation = new API.Rfobservation(this);
  sarobservation: API.Sarobservation = new API.Sarobservation(this);
  scientific: API.Scientific = new API.Scientific(this);
  sensor: API.Sensor = new API.Sensor(this);
  sensormaintenance: API.Sensormaintenance = new API.Sensormaintenance(this);
  sensorobservationtype: API.Sensorobservationtype = new API.Sensorobservationtype(this);
  sensorplan: API.Sensorplan = new API.Sensorplan(this);
  sensortype: API.Sensortype = new API.Sensortype(this);
  seradatacommdetails: API.Seradatacommdetails = new API.Seradatacommdetails(this);
  seradataearlywarning: API.Seradataearlywarning = new API.Seradataearlywarning(this);
  seradatanavigation: API.Seradatanavigation = new API.Seradatanavigation(this);
  seradataopticalpayload: API.Seradataopticalpayload = new API.Seradataopticalpayload(this);
  seradataradarpayload: API.Seradataradarpayload = new API.Seradataradarpayload(this);
  seradatasigintpayload: API.Seradatasigintpayload = new API.Seradatasigintpayload(this);
  seradataspacecraftdetails: API.Seradataspacecraftdetails = new API.Seradataspacecraftdetails(this);
  sgi: API.Sgi = new API.Sgi(this);
  sigact: API.Sigact = new API.Sigact(this);
  site: API.Site = new API.Site(this);
  siteremark: API.Siteremark = new API.Siteremark(this);
  sitestatus: API.Sitestatus = new API.Sitestatus(this);
  skyimagery: API.Skyimagery = new API.Skyimagery(this);
  soiobservationset: API.Soiobservationset = new API.Soiobservationset(this);
  solararray: API.Solararray = new API.Solararray(this);
  solararraydetails: API.Solararraydetails = new API.Solararraydetails(this);
  sortieppr: API.Sortieppr = new API.Sortieppr(this);
  spaceenvobservation: API.Spaceenvobservation = new API.Spaceenvobservation(this);
  stage: API.Stage = new API.Stage(this);
  starcatalog: API.Starcatalog = new API.Starcatalog(this);
  statevector: API.Statevector = new API.Statevector(this);
  status: API.Status = new API.Status(this);
  substatus: API.Substatus = new API.Substatus(this);
  supportingData: API.SupportingData = new API.SupportingData(this);
  surface: API.Surface = new API.Surface(this);
  surfaceobstruction: API.Surfaceobstruction = new API.Surfaceobstruction(this);
  swir: API.Swir = new API.Swir(this);
  taiutc: API.Taiutc = new API.Taiutc(this);
  tdoaFdoa: API.TdoaFdoa = new API.TdoaFdoa(this);
  track: API.Track = new API.Track(this);
  trackdetails: API.Trackdetails = new API.Trackdetails(this);
  trackroute: API.Trackroute = new API.Trackroute(this);
  transponder: API.Transponder = new API.Transponder(this);
  vessel: API.Vessel = new API.Vessel(this);
  video: API.Video = new API.Video(this);
  weatherdata: API.Weatherdata = new API.Weatherdata(this);
  weatherreport: API.Weatherreport = new API.Weatherreport(this);
  udl: API.Udl = new API.Udl(this);
  gnssObservations: API.GnssObservations = new API.GnssObservations(this);
  gnssRawIf: API.GnssRawIf = new API.GnssRawIf(this);
  ionoObservation: API.IonoObservation = new API.IonoObservation(this);
  launchEvent: API.LaunchEvent = new API.LaunchEvent(this);
  reportAndActivity: API.ReportAndActivity = new API.ReportAndActivity(this);
  secureMessaging: API.SecureMessaging = new API.SecureMessaging(this);
  scs: API.Scs = new API.Scs(this);
  scsViews: API.ScsViews = new API.ScsViews(this);
}
Unifieddatalibrary.AirEvents = AirEvents;
Unifieddatalibrary.AirLoadPlans = AirLoadPlans;
Unifieddatalibrary.AirOperations = AirOperations;
Unifieddatalibrary.AirTaskingOrders = AirTaskingOrders;
Unifieddatalibrary.AirTransportMissions = AirTransportMissions;
Unifieddatalibrary.Aircraft = Aircraft;
Unifieddatalibrary.AircraftSorties = AircraftSorties;
Unifieddatalibrary.AircraftStatusRemarks = AircraftStatusRemarks;
Unifieddatalibrary.AircraftStatuses = AircraftStatuses;
Unifieddatalibrary.Aircraftstatusremark = Aircraftstatusremark;
Unifieddatalibrary.AirfieldSlots = AirfieldSlots;
Unifieddatalibrary.AirfieldStatus = AirfieldStatus;
Unifieddatalibrary.Airfields = Airfields;
Unifieddatalibrary.Airfieldslotconsumptions = Airfieldslotconsumptions;
Unifieddatalibrary.Airfieldslots = Airfieldslots;
Unifieddatalibrary.Airfieldstatus = Airfieldstatus;
Unifieddatalibrary.Airloadplans = Airloadplans;
Unifieddatalibrary.AirspaceControlOrders = AirspaceControlOrders;
Unifieddatalibrary.Airtaskingorders = Airtaskingorders;
Unifieddatalibrary.AIs = AIs;
Unifieddatalibrary.AIsObjects = AIsObjects;
Unifieddatalibrary.AnalyticImagery = AnalyticImagery;
Unifieddatalibrary.Antennas = Antennas;
Unifieddatalibrary.AttitudeData = AttitudeData;
Unifieddatalibrary.AttitudeSets = AttitudeSets;
Unifieddatalibrary.Attitudesets = Attitudesets;
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
Unifieddatalibrary.Aviationriskmanagement = Aviationriskmanagement;
Unifieddatalibrary.Dropzone = Dropzone;
Unifieddatalibrary.Emittergeolocation = Emittergeolocation;
Unifieddatalibrary.Featureassessment = Featureassessment;
Unifieddatalibrary.Globalatmosphericmodel = Globalatmosphericmodel;
Unifieddatalibrary.Routestats = Routestats;
Unifieddatalibrary.Countries = Countries;
Unifieddatalibrary.Crew = Crew;
Unifieddatalibrary.Diffofarrival = Diffofarrival;
Unifieddatalibrary.DiplomaticClearance = DiplomaticClearance;
Unifieddatalibrary.DriftHistory = DriftHistory;
Unifieddatalibrary.Ecpsdr = Ecpsdr;
Unifieddatalibrary.EffectRequests = EffectRequests;
Unifieddatalibrary.EffectResponses = EffectResponses;
Unifieddatalibrary.Elsets = Elsets;
Unifieddatalibrary.EngineDetails = EngineDetails;
Unifieddatalibrary.Enginedetails = Enginedetails;
Unifieddatalibrary.Engines = Engines;
Unifieddatalibrary.Entities = Entities;
Unifieddatalibrary.EoObservations = EoObservations;
Unifieddatalibrary.Eoobservations = Eoobservations;
Unifieddatalibrary.Eop = Eop;
Unifieddatalibrary.Ephemeris = Ephemeris;
Unifieddatalibrary.EphemerisSets = EphemerisSets;
Unifieddatalibrary.Equipment = Equipment;
Unifieddatalibrary.Equipmentremarks = Equipmentremarks;
Unifieddatalibrary.Evac = Evac;
Unifieddatalibrary.EventEvolution = EventEvolution;
Unifieddatalibrary.Flightplan = Flightplan;
Unifieddatalibrary.Geostatus = Geostatus;
Unifieddatalibrary.Gnssobservationset = Gnssobservationset;
Unifieddatalibrary.Gnssrawif = Gnssrawif;
Unifieddatalibrary.GroundImagery = GroundImagery;
Unifieddatalibrary.Groundimagery = Groundimagery;
Unifieddatalibrary.H3geo = H3geo;
Unifieddatalibrary.H3geohexcell = H3geohexcell;
Unifieddatalibrary.Hazard = Hazard;
Unifieddatalibrary.Ionoobservation = Ionoobservation;
Unifieddatalibrary.Ir = Ir;
Unifieddatalibrary.IsrCollections = IsrCollections;
Unifieddatalibrary.Item = Item;
Unifieddatalibrary.ItemTrackings = ItemTrackings;
Unifieddatalibrary.Launchdetection = Launchdetection;
Unifieddatalibrary.Launchevent = Launchevent;
Unifieddatalibrary.Launchsite = Launchsite;
Unifieddatalibrary.Launchsitedetails = Launchsitedetails;
Unifieddatalibrary.Launchvehicle = Launchvehicle;
Unifieddatalibrary.Launchvehicledetails = Launchvehicledetails;
Unifieddatalibrary.LinkStatus = LinkStatus;
Unifieddatalibrary.Location = Location;
Unifieddatalibrary.Logisticssupport = Logisticssupport;
Unifieddatalibrary.Maneuvers = Maneuvers;
Unifieddatalibrary.Manifold = Manifold;
Unifieddatalibrary.Manifoldelset = Manifoldelset;
Unifieddatalibrary.MissileTracks = MissileTracks;
Unifieddatalibrary.Missionassignment = Missionassignment;
Unifieddatalibrary.Monoradar = Monoradar;
Unifieddatalibrary.Mti = Mti;
Unifieddatalibrary.Navigation = Navigation;
Unifieddatalibrary.Navigationalobstruction = Navigationalobstruction;
Unifieddatalibrary.Notification = Notification;
Unifieddatalibrary.Objectofinterest = Objectofinterest;
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
Unifieddatalibrary.Operatingunit = Operatingunit;
Unifieddatalibrary.Operatingunitremark = Operatingunitremark;
Unifieddatalibrary.Orbitdetermination = Orbitdetermination;
Unifieddatalibrary.Orbittrack = Orbittrack;
Unifieddatalibrary.Organization = Organization;
Unifieddatalibrary.Organizationdetails = Organizationdetails;
Unifieddatalibrary.Passiveradarobservation = Passiveradarobservation;
Unifieddatalibrary.Personnelrecovery = Personnelrecovery;
Unifieddatalibrary.Poi = Poi;
Unifieddatalibrary.Port = Port;
Unifieddatalibrary.Radarobservation = Radarobservation;
Unifieddatalibrary.Rfband = Rfband;
Unifieddatalibrary.Rfbandtype = Rfbandtype;
Unifieddatalibrary.Rfemitter = Rfemitter;
Unifieddatalibrary.Rfemitterdetails = Rfemitterdetails;
Unifieddatalibrary.Rfobservation = Rfobservation;
Unifieddatalibrary.Sarobservation = Sarobservation;
Unifieddatalibrary.Scientific = Scientific;
Unifieddatalibrary.Sensor = Sensor;
Unifieddatalibrary.Sensormaintenance = Sensormaintenance;
Unifieddatalibrary.Sensorobservationtype = Sensorobservationtype;
Unifieddatalibrary.Sensorplan = Sensorplan;
Unifieddatalibrary.Sensortype = Sensortype;
Unifieddatalibrary.Seradatacommdetails = Seradatacommdetails;
Unifieddatalibrary.Seradataearlywarning = Seradataearlywarning;
Unifieddatalibrary.Seradatanavigation = Seradatanavigation;
Unifieddatalibrary.Seradataopticalpayload = Seradataopticalpayload;
Unifieddatalibrary.Seradataradarpayload = Seradataradarpayload;
Unifieddatalibrary.Seradatasigintpayload = Seradatasigintpayload;
Unifieddatalibrary.Seradataspacecraftdetails = Seradataspacecraftdetails;
Unifieddatalibrary.Sgi = Sgi;
Unifieddatalibrary.Sigact = Sigact;
Unifieddatalibrary.Site = Site;
Unifieddatalibrary.Siteremark = Siteremark;
Unifieddatalibrary.Sitestatus = Sitestatus;
Unifieddatalibrary.Skyimagery = Skyimagery;
Unifieddatalibrary.Soiobservationset = Soiobservationset;
Unifieddatalibrary.Solararray = Solararray;
Unifieddatalibrary.Solararraydetails = Solararraydetails;
Unifieddatalibrary.Sortieppr = Sortieppr;
Unifieddatalibrary.Spaceenvobservation = Spaceenvobservation;
Unifieddatalibrary.Stage = Stage;
Unifieddatalibrary.Starcatalog = Starcatalog;
Unifieddatalibrary.Statevector = Statevector;
Unifieddatalibrary.Status = Status;
Unifieddatalibrary.Substatus = Substatus;
Unifieddatalibrary.SupportingData = SupportingData;
Unifieddatalibrary.Surface = Surface;
Unifieddatalibrary.Surfaceobstruction = Surfaceobstruction;
Unifieddatalibrary.Swir = Swir;
Unifieddatalibrary.Taiutc = Taiutc;
Unifieddatalibrary.TdoaFdoa = TdoaFdoa;
Unifieddatalibrary.Track = Track;
Unifieddatalibrary.Trackdetails = Trackdetails;
Unifieddatalibrary.Trackroute = Trackroute;
Unifieddatalibrary.Transponder = Transponder;
Unifieddatalibrary.Vessel = Vessel;
Unifieddatalibrary.Video = Video;
Unifieddatalibrary.Weatherdata = Weatherdata;
Unifieddatalibrary.Weatherreport = Weatherreport;
Unifieddatalibrary.Udl = Udl;
Unifieddatalibrary.GnssObservations = GnssObservations;
Unifieddatalibrary.GnssRawIf = GnssRawIf;
Unifieddatalibrary.IonoObservation = IonoObservation;
Unifieddatalibrary.LaunchEvent = LaunchEvent;
Unifieddatalibrary.ReportAndActivity = ReportAndActivity;
Unifieddatalibrary.SecureMessaging = SecureMessaging;
Unifieddatalibrary.Scs = Scs;
Unifieddatalibrary.ScsViews = ScsViews;
export declare namespace Unifieddatalibrary {
  export type RequestOptions = Opts.RequestOptions;

  export import OffsetPage = Pagination.OffsetPage;
  export { type OffsetPageParams as OffsetPageParams, type OffsetPageResponse as OffsetPageResponse };

  export {
    AirEvents as AirEvents,
    type AirEventListResponse as AirEventListResponse,
    type AirEventCountResponse as AirEventCountResponse,
    type AirEventGetResponse as AirEventGetResponse,
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

  export {
    AirLoadPlans as AirLoadPlans,
    type AirloadplanAbridged as AirloadplanAbridged,
    type AirloadplanFull as AirloadplanFull,
    type AirLoadPlanCountResponse as AirLoadPlanCountResponse,
    type AirLoadPlanTupleResponse as AirLoadPlanTupleResponse,
    type AirloadplanAbridgedsOffsetPage as AirloadplanAbridgedsOffsetPage,
    type AirLoadPlanCreateParams as AirLoadPlanCreateParams,
    type AirLoadPlanRetrieveParams as AirLoadPlanRetrieveParams,
    type AirLoadPlanListParams as AirLoadPlanListParams,
    type AirLoadPlanCountParams as AirLoadPlanCountParams,
    type AirLoadPlanTupleParams as AirLoadPlanTupleParams,
  };

  export { AirOperations as AirOperations };

  export {
    AirTaskingOrders as AirTaskingOrders,
    type AirTaskingOrderFull as AirTaskingOrderFull,
    type AirTaskingOrderCountResponse as AirTaskingOrderCountResponse,
    type AirTaskingOrderTupleResponse as AirTaskingOrderTupleResponse,
    type AirTaskingOrderCreateParams as AirTaskingOrderCreateParams,
    type AirTaskingOrderRetrieveParams as AirTaskingOrderRetrieveParams,
    type AirTaskingOrderCountParams as AirTaskingOrderCountParams,
    type AirTaskingOrderTupleParams as AirTaskingOrderTupleParams,
  };

  export {
    AirTransportMissions as AirTransportMissions,
    type AirTransportMissionAbridged as AirTransportMissionAbridged,
    type AirTransportMissionCountResponse as AirTransportMissionCountResponse,
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
    type AircraftFull as AircraftFull,
    type AircraftCountResponse as AircraftCountResponse,
    type AircraftTupleQueryResponse as AircraftTupleQueryResponse,
    type AircraftAbridgedsOffsetPage as AircraftAbridgedsOffsetPage,
    type AircraftCreateParams as AircraftCreateParams,
    type AircraftRetrieveParams as AircraftRetrieveParams,
    type AircraftUpdateParams as AircraftUpdateParams,
    type AircraftListParams as AircraftListParams,
    type AircraftCountParams as AircraftCountParams,
    type AircraftTupleQueryParams as AircraftTupleQueryParams,
  };

  export {
    AircraftSorties as AircraftSorties,
    type AircraftSortyTupleResponse as AircraftSortyTupleResponse,
    type AircraftSortyRetrieveParams as AircraftSortyRetrieveParams,
    type AircraftSortyUpdateParams as AircraftSortyUpdateParams,
    type AircraftSortyTupleParams as AircraftSortyTupleParams,
  };

  export {
    AircraftStatusRemarks as AircraftStatusRemarks,
    type AircraftstatusremarkAbridged as AircraftstatusremarkAbridged,
    type AircraftstatusremarkFull as AircraftstatusremarkFull,
    type AircraftStatusRemarkCountResponse as AircraftStatusRemarkCountResponse,
    type AircraftStatusRemarkTupleResponse as AircraftStatusRemarkTupleResponse,
    type AircraftstatusremarkAbridgedsOffsetPage as AircraftstatusremarkAbridgedsOffsetPage,
    type AircraftStatusRemarkCreateParams as AircraftStatusRemarkCreateParams,
    type AircraftStatusRemarkRetrieveParams as AircraftStatusRemarkRetrieveParams,
    type AircraftStatusRemarkListParams as AircraftStatusRemarkListParams,
    type AircraftStatusRemarkCountParams as AircraftStatusRemarkCountParams,
    type AircraftStatusRemarkTupleParams as AircraftStatusRemarkTupleParams,
  };

  export {
    AircraftStatuses as AircraftStatuses,
    type AircraftstatusAbridged as AircraftstatusAbridged,
    type AircraftStatusCountResponse as AircraftStatusCountResponse,
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
    Aircraftstatusremark as Aircraftstatusremark,
    type AircraftstatusremarkUpdateParams as AircraftstatusremarkUpdateParams,
  };

  export {
    AirfieldSlots as AirfieldSlots,
    type AirfieldslotAbridged as AirfieldslotAbridged,
    type AirfieldslotFull as AirfieldslotFull,
    type AirfieldslotAbridgedsOffsetPage as AirfieldslotAbridgedsOffsetPage,
    type AirfieldSlotCreateParams as AirfieldSlotCreateParams,
    type AirfieldSlotListParams as AirfieldSlotListParams,
  };

  export {
    AirfieldStatus as AirfieldStatus,
    type AirfieldStatusTupleResponse as AirfieldStatusTupleResponse,
    type AirfieldStatusRetrieveParams as AirfieldStatusRetrieveParams,
    type AirfieldStatusUpdateParams as AirfieldStatusUpdateParams,
    type AirfieldStatusTupleParams as AirfieldStatusTupleParams,
  };

  export {
    Airfields as Airfields,
    type AirfieldAbridged as AirfieldAbridged,
    type AirfieldFull as AirfieldFull,
    type AirfieldCountResponse as AirfieldCountResponse,
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
    Airfieldslotconsumptions as Airfieldslotconsumptions,
    type AirfieldslotconsumptionAbridged as AirfieldslotconsumptionAbridged,
    type AirfieldslotconsumptionFull as AirfieldslotconsumptionFull,
    type AirfieldslotconsumptionCountResponse as AirfieldslotconsumptionCountResponse,
    type AirfieldslotconsumptionTupleResponse as AirfieldslotconsumptionTupleResponse,
    type AirfieldslotconsumptionAbridgedsOffsetPage as AirfieldslotconsumptionAbridgedsOffsetPage,
    type AirfieldslotconsumptionCreateParams as AirfieldslotconsumptionCreateParams,
    type AirfieldslotconsumptionRetrieveParams as AirfieldslotconsumptionRetrieveParams,
    type AirfieldslotconsumptionUpdateParams as AirfieldslotconsumptionUpdateParams,
    type AirfieldslotconsumptionListParams as AirfieldslotconsumptionListParams,
    type AirfieldslotconsumptionCountParams as AirfieldslotconsumptionCountParams,
    type AirfieldslotconsumptionTupleParams as AirfieldslotconsumptionTupleParams,
  };

  export {
    Airfieldslots as Airfieldslots,
    type AirfieldslotCountResponse as AirfieldslotCountResponse,
    type AirfieldslotTupleResponse as AirfieldslotTupleResponse,
    type AirfieldslotRetrieveParams as AirfieldslotRetrieveParams,
    type AirfieldslotUpdateParams as AirfieldslotUpdateParams,
    type AirfieldslotCountParams as AirfieldslotCountParams,
    type AirfieldslotTupleParams as AirfieldslotTupleParams,
  };

  export {
    Airfieldstatus as Airfieldstatus,
    type AirfieldstatusAbridged as AirfieldstatusAbridged,
    type AirfieldstatusFull as AirfieldstatusFull,
    type AirfieldstatusCountResponse as AirfieldstatusCountResponse,
    type AirfieldstatusAbridgedsOffsetPage as AirfieldstatusAbridgedsOffsetPage,
    type AirfieldstatusCreateParams as AirfieldstatusCreateParams,
    type AirfieldstatusListParams as AirfieldstatusListParams,
    type AirfieldstatusCountParams as AirfieldstatusCountParams,
  };

  export { Airloadplans as Airloadplans, type AirloadplanUpdateParams as AirloadplanUpdateParams };

  export {
    AirspaceControlOrders as AirspaceControlOrders,
    type AirspacecontrolorderAbridged as AirspacecontrolorderAbridged,
    type AirspacecontrolorderFull as AirspacecontrolorderFull,
    type AirspaceControlOrderCountResponse as AirspaceControlOrderCountResponse,
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
    Airtaskingorders as Airtaskingorders,
    type AirtaskingorderAbridged as AirtaskingorderAbridged,
    type AirtaskingorderAbridgedsOffsetPage as AirtaskingorderAbridgedsOffsetPage,
    type AirtaskingorderListParams as AirtaskingorderListParams,
  };

  export {
    AIs as AIs,
    type AIsAbridged as AIsAbridged,
    type AICountResponse as AICountResponse,
    type AIHistoryCountResponse as AIHistoryCountResponse,
    type AITupleResponse as AITupleResponse,
    type AIsAbridgedsOffsetPage as AIsAbridgedsOffsetPage,
    type AIListParams as AIListParams,
    type AICountParams as AICountParams,
    type AICreateBulkParams as AICreateBulkParams,
    type AIHistoryCountParams as AIHistoryCountParams,
    type AITupleParams as AITupleParams,
  };

  export {
    AIsObjects as AIsObjects,
    type AIsObjectUnvalidatedPublishParams as AIsObjectUnvalidatedPublishParams,
  };

  export {
    AnalyticImagery as AnalyticImagery,
    type AnalyticImageryAbridged as AnalyticImageryAbridged,
    type AnalyticImageryFull as AnalyticImageryFull,
    type AnalyticImageryCountResponse as AnalyticImageryCountResponse,
    type AnalyticImageryHistoryResponse as AnalyticImageryHistoryResponse,
    type AnalyticImageryHistoryCountResponse as AnalyticImageryHistoryCountResponse,
    type AnalyticImageryTupleResponse as AnalyticImageryTupleResponse,
    type AnalyticImageryAbridgedsOffsetPage as AnalyticImageryAbridgedsOffsetPage,
    type AnalyticImageryRetrieveParams as AnalyticImageryRetrieveParams,
    type AnalyticImageryListParams as AnalyticImageryListParams,
    type AnalyticImageryCountParams as AnalyticImageryCountParams,
    type AnalyticImageryFileGetParams as AnalyticImageryFileGetParams,
    type AnalyticImageryHistoryParams as AnalyticImageryHistoryParams,
    type AnalyticImageryHistoryAodrParams as AnalyticImageryHistoryAodrParams,
    type AnalyticImageryHistoryCountParams as AnalyticImageryHistoryCountParams,
    type AnalyticImageryTupleParams as AnalyticImageryTupleParams,
    type AnalyticImageryUnvalidatedPublishParams as AnalyticImageryUnvalidatedPublishParams,
  };

  export {
    Antennas as Antennas,
    type AntennaAbridged as AntennaAbridged,
    type AntennaFull as AntennaFull,
    type AntennaCountResponse as AntennaCountResponse,
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
    type AttitudedataFull as AttitudedataFull,
    type AttitudeDataTupleResponse as AttitudeDataTupleResponse,
    type AttitudeDataTupleParams as AttitudeDataTupleParams,
  };

  export {
    AttitudeSets as AttitudeSets,
    type AttitudesetAbridged as AttitudesetAbridged,
    type AttitudeSetCountResponse as AttitudeSetCountResponse,
    type AttitudeSetTupleResponse as AttitudeSetTupleResponse,
    type AttitudesetAbridgedsOffsetPage as AttitudesetAbridgedsOffsetPage,
    type AttitudeSetCreateParams as AttitudeSetCreateParams,
    type AttitudeSetListParams as AttitudeSetListParams,
    type AttitudeSetCountParams as AttitudeSetCountParams,
    type AttitudeSetTupleParams as AttitudeSetTupleParams,
    type AttitudeSetUnvalidatedPublishParams as AttitudeSetUnvalidatedPublishParams,
  };

  export { Attitudesets as Attitudesets, type AttitudesetRetrieveParams as AttitudesetRetrieveParams };

  export {
    Batteries as Batteries,
    type BatteryAbridged as BatteryAbridged,
    type BatteryFull as BatteryFull,
    type BatteryCountResponse as BatteryCountResponse,
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
    type BatterydetailsFull as BatterydetailsFull,
    type BatterydetailsAbridgedsOffsetPage as BatterydetailsAbridgedsOffsetPage,
    type BatterydetailCreateParams as BatterydetailCreateParams,
    type BatterydetailRetrieveParams as BatterydetailRetrieveParams,
    type BatterydetailUpdateParams as BatterydetailUpdateParams,
    type BatterydetailListParams as BatterydetailListParams,
  };

  export {
    Beam as Beam,
    type BeamAbridged as BeamAbridged,
    type BeamFull as BeamFull,
    type BeamCountResponse as BeamCountResponse,
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
    type BeamcontourFull as BeamcontourFull,
    type BeamContourCountResponse as BeamContourCountResponse,
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
    type BusFull as BusFull,
    type BusCountResponse as BusCountResponse,
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
    type ChannelFull as ChannelFull,
    type ChannelCountResponse as ChannelCountResponse,
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
    type CommFull as CommFull,
    type CommCountResponse as CommCountResponse,
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
    type ConjunctionFull as ConjunctionFull,
    type ConjunctionCountResponse as ConjunctionCountResponse,
    type ConjunctionGetHistoryResponse as ConjunctionGetHistoryResponse,
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
    Aviationriskmanagement as Aviationriskmanagement,
    type AviationriskmanagementRetrieveResponse as AviationriskmanagementRetrieveResponse,
    type AviationriskmanagementCountResponse as AviationriskmanagementCountResponse,
    type AviationriskmanagementQueryResponse as AviationriskmanagementQueryResponse,
    type AviationriskmanagementTupleResponse as AviationriskmanagementTupleResponse,
    type AviationriskmanagementCreateParams as AviationriskmanagementCreateParams,
    type AviationriskmanagementRetrieveParams as AviationriskmanagementRetrieveParams,
    type AviationriskmanagementUpdateParams as AviationriskmanagementUpdateParams,
    type AviationriskmanagementCountParams as AviationriskmanagementCountParams,
    type AviationriskmanagementCreateBulkParams as AviationriskmanagementCreateBulkParams,
    type AviationriskmanagementQueryParams as AviationriskmanagementQueryParams,
    type AviationriskmanagementTupleParams as AviationriskmanagementTupleParams,
    type AviationriskmanagementUnvalidatedPublishParams as AviationriskmanagementUnvalidatedPublishParams,
  };

  export {
    Dropzone as Dropzone,
    type DropzoneRetrieveResponse as DropzoneRetrieveResponse,
    type DropzoneCountResponse as DropzoneCountResponse,
    type DropzoneQueryResponse as DropzoneQueryResponse,
    type DropzoneTupleResponse as DropzoneTupleResponse,
    type DropzoneCreateParams as DropzoneCreateParams,
    type DropzoneRetrieveParams as DropzoneRetrieveParams,
    type DropzoneUpdateParams as DropzoneUpdateParams,
    type DropzoneCountParams as DropzoneCountParams,
    type DropzoneCreateBulkParams as DropzoneCreateBulkParams,
    type DropzoneQueryParams as DropzoneQueryParams,
    type DropzoneTupleParams as DropzoneTupleParams,
    type DropzoneUnvalidatedPublishParams as DropzoneUnvalidatedPublishParams,
  };

  export {
    Emittergeolocation as Emittergeolocation,
    type EmittergeolocationRetrieveResponse as EmittergeolocationRetrieveResponse,
    type EmittergeolocationCountResponse as EmittergeolocationCountResponse,
    type EmittergeolocationQueryResponse as EmittergeolocationQueryResponse,
    type EmittergeolocationTupleResponse as EmittergeolocationTupleResponse,
    type EmittergeolocationCreateParams as EmittergeolocationCreateParams,
    type EmittergeolocationRetrieveParams as EmittergeolocationRetrieveParams,
    type EmittergeolocationCountParams as EmittergeolocationCountParams,
    type EmittergeolocationCreateBulkParams as EmittergeolocationCreateBulkParams,
    type EmittergeolocationQueryParams as EmittergeolocationQueryParams,
    type EmittergeolocationTupleParams as EmittergeolocationTupleParams,
    type EmittergeolocationUnvalidatedPublishParams as EmittergeolocationUnvalidatedPublishParams,
  };

  export {
    Featureassessment as Featureassessment,
    type FeatureassessmentRetrieveResponse as FeatureassessmentRetrieveResponse,
    type FeatureassessmentCountResponse as FeatureassessmentCountResponse,
    type FeatureassessmentQueryResponse as FeatureassessmentQueryResponse,
    type FeatureassessmentTupleResponse as FeatureassessmentTupleResponse,
    type FeatureassessmentCreateParams as FeatureassessmentCreateParams,
    type FeatureassessmentRetrieveParams as FeatureassessmentRetrieveParams,
    type FeatureassessmentCountParams as FeatureassessmentCountParams,
    type FeatureassessmentCreateBulkParams as FeatureassessmentCreateBulkParams,
    type FeatureassessmentQueryParams as FeatureassessmentQueryParams,
    type FeatureassessmentTupleParams as FeatureassessmentTupleParams,
    type FeatureassessmentUnvalidatedPublishParams as FeatureassessmentUnvalidatedPublishParams,
  };

  export {
    Globalatmosphericmodel as Globalatmosphericmodel,
    type GlobalatmosphericmodelRetrieveResponse as GlobalatmosphericmodelRetrieveResponse,
    type GlobalatmosphericmodelCountResponse as GlobalatmosphericmodelCountResponse,
    type GlobalatmosphericmodelQueryResponse as GlobalatmosphericmodelQueryResponse,
    type GlobalatmosphericmodelTupleResponse as GlobalatmosphericmodelTupleResponse,
    type GlobalatmosphericmodelRetrieveParams as GlobalatmosphericmodelRetrieveParams,
    type GlobalatmosphericmodelCountParams as GlobalatmosphericmodelCountParams,
    type GlobalatmosphericmodelGetFileParams as GlobalatmosphericmodelGetFileParams,
    type GlobalatmosphericmodelQueryParams as GlobalatmosphericmodelQueryParams,
    type GlobalatmosphericmodelTupleParams as GlobalatmosphericmodelTupleParams,
    type GlobalatmosphericmodelUnvalidatedPublishParams as GlobalatmosphericmodelUnvalidatedPublishParams,
  };

  export {
    Routestats as Routestats,
    type RoutestatRetrieveResponse as RoutestatRetrieveResponse,
    type RoutestatCountResponse as RoutestatCountResponse,
    type RoutestatQueryResponse as RoutestatQueryResponse,
    type RoutestatTupleResponse as RoutestatTupleResponse,
    type RoutestatCreateParams as RoutestatCreateParams,
    type RoutestatRetrieveParams as RoutestatRetrieveParams,
    type RoutestatUpdateParams as RoutestatUpdateParams,
    type RoutestatCountParams as RoutestatCountParams,
    type RoutestatCreateBulkParams as RoutestatCreateBulkParams,
    type RoutestatQueryParams as RoutestatQueryParams,
    type RoutestatTupleParams as RoutestatTupleParams,
    type RoutestatUnvalidatedPublishParams as RoutestatUnvalidatedPublishParams,
  };

  export {
    Countries as Countries,
    type CountryAbridged as CountryAbridged,
    type CountryFull as CountryFull,
    type CountryCountResponse as CountryCountResponse,
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
    type CrewFull as CrewFull,
    type CrewCountResponse as CrewCountResponse,
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
    Diffofarrival as Diffofarrival,
    type DiffofarrivalTupleResponse as DiffofarrivalTupleResponse,
    type DiffofarrivalRetrieveParams as DiffofarrivalRetrieveParams,
    type DiffofarrivalTupleParams as DiffofarrivalTupleParams,
    type DiffofarrivalUnvalidatedPublishParams as DiffofarrivalUnvalidatedPublishParams,
  };

  export {
    DiplomaticClearance as DiplomaticClearance,
    type DiplomaticClearanceCountResponse as DiplomaticClearanceCountResponse,
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
    type DriftHistoryTupleResponse as DriftHistoryTupleResponse,
    type DriftHistoryRetrieveParams as DriftHistoryRetrieveParams,
    type DriftHistoryListParams as DriftHistoryListParams,
    type DriftHistoryCountParams as DriftHistoryCountParams,
    type DriftHistoryTupleParams as DriftHistoryTupleParams,
  };

  export { Ecpsdr as Ecpsdr, type EcpsdrUnvalidatedPublishParams as EcpsdrUnvalidatedPublishParams };

  export {
    EffectRequests as EffectRequests,
    type EffectRequestRetrieveResponse as EffectRequestRetrieveResponse,
    type EffectRequestListResponse as EffectRequestListResponse,
    type EffectRequestCountResponse as EffectRequestCountResponse,
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
    type EffectResponseRetrieveResponse as EffectResponseRetrieveResponse,
    type EffectResponseListResponse as EffectResponseListResponse,
    type EffectResponseCountResponse as EffectResponseCountResponse,
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
    EngineDetails as EngineDetails,
    type EngineDetailsFull as EngineDetailsFull,
    type EngineDetailCreateParams as EngineDetailCreateParams,
    type EngineDetailRetrieveParams as EngineDetailRetrieveParams,
    type EngineDetailUpdateParams as EngineDetailUpdateParams,
  };

  export {
    Enginedetails as Enginedetails,
    type EngineDetailsAbridged as EngineDetailsAbridged,
    type EngineDetailsAbridgedsOffsetPage as EngineDetailsAbridgedsOffsetPage,
    type EnginedetailListParams as EnginedetailListParams,
  };

  export {
    Engines as Engines,
    type Engine as Engine,
    type EngineAbridged as EngineAbridged,
    type EngineCountResponse as EngineCountResponse,
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
    type EntityFull as EntityFull,
    type EntityIngest as EntityIngest,
    type EntityCountResponse as EntityCountResponse,
    type EntityGetAllTypesResponse as EntityGetAllTypesResponse,
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
    EoObservations as EoObservations,
    type EoObservationAbridged as EoObservationAbridged,
    type EoObservationCountResponse as EoObservationCountResponse,
    type EoObservationAbridgedsOffsetPage as EoObservationAbridgedsOffsetPage,
    type EoObservationCreateParams as EoObservationCreateParams,
    type EoObservationListParams as EoObservationListParams,
    type EoObservationCountParams as EoObservationCountParams,
    type EoObservationCreateBulkParams as EoObservationCreateBulkParams,
    type EoObservationUnvalidatedPublishParams as EoObservationUnvalidatedPublishParams,
  };

  export {
    Eoobservations as Eoobservations,
    type EoobservationTupleResponse as EoobservationTupleResponse,
    type EoobservationRetrieveParams as EoobservationRetrieveParams,
    type EoobservationTupleParams as EoobservationTupleParams,
  };

  export {
    Eop as Eop,
    type EopAbridged as EopAbridged,
    type EopCountResponse as EopCountResponse,
    type EopListTupleResponse as EopListTupleResponse,
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
    Equipmentremarks as Equipmentremarks,
    type EquipmentRemarkAbridged as EquipmentRemarkAbridged,
    type EquipmentRemarkFull as EquipmentRemarkFull,
    type EquipmentremarkCountResponse as EquipmentremarkCountResponse,
    type EquipmentremarkTupleResponse as EquipmentremarkTupleResponse,
    type EquipmentRemarkAbridgedsOffsetPage as EquipmentRemarkAbridgedsOffsetPage,
    type EquipmentremarkCreateParams as EquipmentremarkCreateParams,
    type EquipmentremarkRetrieveParams as EquipmentremarkRetrieveParams,
    type EquipmentremarkListParams as EquipmentremarkListParams,
    type EquipmentremarkCountParams as EquipmentremarkCountParams,
    type EquipmentremarkCreateBulkParams as EquipmentremarkCreateBulkParams,
    type EquipmentremarkTupleParams as EquipmentremarkTupleParams,
  };

  export {
    Evac as Evac,
    type EvacAbridged as EvacAbridged,
    type EvacCountResponse as EvacCountResponse,
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
    Flightplan as Flightplan,
    type FlightPlanAbridged as FlightPlanAbridged,
    type FlightplanCountResponse as FlightplanCountResponse,
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
    Geostatus as Geostatus,
    type GeostatusListResponse as GeostatusListResponse,
    type GeostatusCountResponse as GeostatusCountResponse,
    type GeostatusTupleResponse as GeostatusTupleResponse,
    type GeostatusListResponsesOffsetPage as GeostatusListResponsesOffsetPage,
    type GeostatusCreateParams as GeostatusCreateParams,
    type GeostatusListParams as GeostatusListParams,
    type GeostatusCountParams as GeostatusCountParams,
    type GeostatusCreateBulkParams as GeostatusCreateBulkParams,
    type GeostatusGetParams as GeostatusGetParams,
    type GeostatusTupleParams as GeostatusTupleParams,
  };

  export {
    Gnssobservationset as Gnssobservationset,
    type GnssobservationsetListResponse as GnssobservationsetListResponse,
    type GnssobservationsetCountResponse as GnssobservationsetCountResponse,
    type GnssobservationsetTupleResponse as GnssobservationsetTupleResponse,
    type GnssobservationsetListResponsesOffsetPage as GnssobservationsetListResponsesOffsetPage,
    type GnssobservationsetListParams as GnssobservationsetListParams,
    type GnssobservationsetCountParams as GnssobservationsetCountParams,
    type GnssobservationsetCreateBulkParams as GnssobservationsetCreateBulkParams,
    type GnssobservationsetTupleParams as GnssobservationsetTupleParams,
    type GnssobservationsetUnvalidatedPublishParams as GnssobservationsetUnvalidatedPublishParams,
  };

  export {
    Gnssrawif as Gnssrawif,
    type GnssrawifListResponse as GnssrawifListResponse,
    type GnssrawifCountResponse as GnssrawifCountResponse,
    type GnssrawifTupleResponse as GnssrawifTupleResponse,
    type GnssrawifListResponsesOffsetPage as GnssrawifListResponsesOffsetPage,
    type GnssrawifListParams as GnssrawifListParams,
    type GnssrawifCountParams as GnssrawifCountParams,
    type GnssrawifFileGetParams as GnssrawifFileGetParams,
    type GnssrawifGetParams as GnssrawifGetParams,
    type GnssrawifTupleParams as GnssrawifTupleParams,
    type GnssrawifUploadZipParams as GnssrawifUploadZipParams,
  };

  export {
    GroundImagery as GroundImagery,
    type GroundImageryHistoryAodrParams as GroundImageryHistoryAodrParams,
    type GroundImageryUploadZipParams as GroundImageryUploadZipParams,
  };

  export {
    Groundimagery as Groundimagery,
    type GroundimageryListResponse as GroundimageryListResponse,
    type GroundimageryCountResponse as GroundimageryCountResponse,
    type GroundimageryTupleResponse as GroundimageryTupleResponse,
    type GroundimageryListResponsesOffsetPage as GroundimageryListResponsesOffsetPage,
    type GroundimageryCreateParams as GroundimageryCreateParams,
    type GroundimageryListParams as GroundimageryListParams,
    type GroundimageryCountParams as GroundimageryCountParams,
    type GroundimageryGetParams as GroundimageryGetParams,
    type GroundimageryGetFileParams as GroundimageryGetFileParams,
    type GroundimageryTupleParams as GroundimageryTupleParams,
  };

  export {
    H3geo as H3geo,
    type H3geoListResponse as H3geoListResponse,
    type H3geoCountResponse as H3geoCountResponse,
    type H3geoGetResponse as H3geoGetResponse,
    type H3geoTupleResponse as H3geoTupleResponse,
    type H3geoListResponsesOffsetPage as H3geoListResponsesOffsetPage,
    type H3geoCreateParams as H3geoCreateParams,
    type H3geoListParams as H3geoListParams,
    type H3geoCountParams as H3geoCountParams,
    type H3geoGetParams as H3geoGetParams,
    type H3geoTupleParams as H3geoTupleParams,
  };

  export {
    H3geohexcell as H3geohexcell,
    type H3geohexcellListResponse as H3geohexcellListResponse,
    type H3geohexcellCountResponse as H3geohexcellCountResponse,
    type H3geohexcellTupleResponse as H3geohexcellTupleResponse,
    type H3geohexcellListResponsesOffsetPage as H3geohexcellListResponsesOffsetPage,
    type H3geohexcellListParams as H3geohexcellListParams,
    type H3geohexcellCountParams as H3geohexcellCountParams,
    type H3geohexcellTupleParams as H3geohexcellTupleParams,
  };

  export {
    Hazard as Hazard,
    type HazardListResponse as HazardListResponse,
    type HazardCountResponse as HazardCountResponse,
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
    Ionoobservation as Ionoobservation,
    type IonoobservationListResponse as IonoobservationListResponse,
    type IonoobservationCountResponse as IonoobservationCountResponse,
    type IonoobservationTupleResponse as IonoobservationTupleResponse,
    type IonoobservationListResponsesOffsetPage as IonoobservationListResponsesOffsetPage,
    type IonoobservationListParams as IonoobservationListParams,
    type IonoobservationCountParams as IonoobservationCountParams,
    type IonoobservationCreateBulkParams as IonoobservationCreateBulkParams,
    type IonoobservationTupleParams as IonoobservationTupleParams,
    type IonoobservationUnvalidatedPublishParams as IonoobservationUnvalidatedPublishParams,
  };

  export {
    Ir as Ir,
    type IrListResponse as IrListResponse,
    type IrCountResponse as IrCountResponse,
    type IrGetResponse as IrGetResponse,
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
    type IsrCollectionListResponse as IsrCollectionListResponse,
    type IsrCollectionCountResponse as IsrCollectionCountResponse,
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
    Launchdetection as Launchdetection,
    type LaunchdetectionListResponse as LaunchdetectionListResponse,
    type LaunchdetectionCountResponse as LaunchdetectionCountResponse,
    type LaunchdetectionGetResponse as LaunchdetectionGetResponse,
    type LaunchdetectionTupleResponse as LaunchdetectionTupleResponse,
    type LaunchdetectionListResponsesOffsetPage as LaunchdetectionListResponsesOffsetPage,
    type LaunchdetectionCreateParams as LaunchdetectionCreateParams,
    type LaunchdetectionUpdateParams as LaunchdetectionUpdateParams,
    type LaunchdetectionListParams as LaunchdetectionListParams,
    type LaunchdetectionCountParams as LaunchdetectionCountParams,
    type LaunchdetectionGetParams as LaunchdetectionGetParams,
    type LaunchdetectionTupleParams as LaunchdetectionTupleParams,
  };

  export {
    Launchevent as Launchevent,
    type LauncheventListResponse as LauncheventListResponse,
    type LauncheventCountResponse as LauncheventCountResponse,
    type LauncheventGetResponse as LauncheventGetResponse,
    type LauncheventTupleResponse as LauncheventTupleResponse,
    type LauncheventListResponsesOffsetPage as LauncheventListResponsesOffsetPage,
    type LauncheventCreateParams as LauncheventCreateParams,
    type LauncheventListParams as LauncheventListParams,
    type LauncheventCountParams as LauncheventCountParams,
    type LauncheventCreateBulkParams as LauncheventCreateBulkParams,
    type LauncheventGetParams as LauncheventGetParams,
    type LauncheventTupleParams as LauncheventTupleParams,
    type LauncheventUnvalidatedPublishParams as LauncheventUnvalidatedPublishParams,
  };

  export {
    Launchsite as Launchsite,
    type LaunchsiteListResponse as LaunchsiteListResponse,
    type LaunchsiteCountResponse as LaunchsiteCountResponse,
    type LaunchsiteGetResponse as LaunchsiteGetResponse,
    type LaunchsiteTupleResponse as LaunchsiteTupleResponse,
    type LaunchsiteListResponsesOffsetPage as LaunchsiteListResponsesOffsetPage,
    type LaunchsiteCreateParams as LaunchsiteCreateParams,
    type LaunchsiteUpdateParams as LaunchsiteUpdateParams,
    type LaunchsiteListParams as LaunchsiteListParams,
    type LaunchsiteCountParams as LaunchsiteCountParams,
    type LaunchsiteGetParams as LaunchsiteGetParams,
    type LaunchsiteTupleParams as LaunchsiteTupleParams,
  };

  export {
    Launchsitedetails as Launchsitedetails,
    type LaunchsitedetailListResponse as LaunchsitedetailListResponse,
    type LaunchsitedetailFindBySourceResponse as LaunchsitedetailFindBySourceResponse,
    type LaunchsitedetailGetResponse as LaunchsitedetailGetResponse,
    type LaunchsitedetailListResponsesOffsetPage as LaunchsitedetailListResponsesOffsetPage,
    type LaunchsitedetailCreateParams as LaunchsitedetailCreateParams,
    type LaunchsitedetailUpdateParams as LaunchsitedetailUpdateParams,
    type LaunchsitedetailListParams as LaunchsitedetailListParams,
    type LaunchsitedetailFindBySourceParams as LaunchsitedetailFindBySourceParams,
    type LaunchsitedetailGetParams as LaunchsitedetailGetParams,
  };

  export {
    Launchvehicle as Launchvehicle,
    type LaunchvehicleListResponse as LaunchvehicleListResponse,
    type LaunchvehicleCountResponse as LaunchvehicleCountResponse,
    type LaunchvehicleGetResponse as LaunchvehicleGetResponse,
    type LaunchvehicleTupleResponse as LaunchvehicleTupleResponse,
    type LaunchvehicleListResponsesOffsetPage as LaunchvehicleListResponsesOffsetPage,
    type LaunchvehicleCreateParams as LaunchvehicleCreateParams,
    type LaunchvehicleUpdateParams as LaunchvehicleUpdateParams,
    type LaunchvehicleListParams as LaunchvehicleListParams,
    type LaunchvehicleCountParams as LaunchvehicleCountParams,
    type LaunchvehicleGetParams as LaunchvehicleGetParams,
    type LaunchvehicleTupleParams as LaunchvehicleTupleParams,
  };

  export {
    Launchvehicledetails as Launchvehicledetails,
    type LaunchvehicledetailListResponse as LaunchvehicledetailListResponse,
    type LaunchvehicledetailGetResponse as LaunchvehicledetailGetResponse,
    type LaunchvehicledetailListResponsesOffsetPage as LaunchvehicledetailListResponsesOffsetPage,
    type LaunchvehicledetailCreateParams as LaunchvehicledetailCreateParams,
    type LaunchvehicledetailUpdateParams as LaunchvehicledetailUpdateParams,
    type LaunchvehicledetailListParams as LaunchvehicledetailListParams,
    type LaunchvehicledetailGetParams as LaunchvehicledetailGetParams,
  };

  export {
    LinkStatus as LinkStatus,
    type LinkStatusListResponse as LinkStatusListResponse,
    type LinkStatusCountResponse as LinkStatusCountResponse,
    type LinkStatusTupleResponse as LinkStatusTupleResponse,
    type LinkStatusListResponsesOffsetPage as LinkStatusListResponsesOffsetPage,
    type LinkStatusCreateParams as LinkStatusCreateParams,
    type LinkStatusListParams as LinkStatusListParams,
    type LinkStatusCountParams as LinkStatusCountParams,
    type LinkStatusGetParams as LinkStatusGetParams,
    type LinkStatusTupleParams as LinkStatusTupleParams,
  };

  export {
    Location as Location,
    type LocationFull as LocationFull,
    type LocationIngest as LocationIngest,
    type LocationListResponse as LocationListResponse,
    type LocationCountResponse as LocationCountResponse,
    type LocationTupleResponse as LocationTupleResponse,
    type LocationListResponsesOffsetPage as LocationListResponsesOffsetPage,
    type LocationCreateParams as LocationCreateParams,
    type LocationUpdateParams as LocationUpdateParams,
    type LocationListParams as LocationListParams,
    type LocationCountParams as LocationCountParams,
    type LocationGetParams as LocationGetParams,
    type LocationTupleParams as LocationTupleParams,
  };

  export {
    Logisticssupport as Logisticssupport,
    type LogisticsRemarksFull as LogisticsRemarksFull,
    type LogisticssupportListResponse as LogisticssupportListResponse,
    type LogisticssupportCountResponse as LogisticssupportCountResponse,
    type LogisticssupportGetResponse as LogisticssupportGetResponse,
    type LogisticssupportTupleResponse as LogisticssupportTupleResponse,
    type LogisticssupportListResponsesOffsetPage as LogisticssupportListResponsesOffsetPage,
    type LogisticssupportCreateParams as LogisticssupportCreateParams,
    type LogisticssupportUpdateParams as LogisticssupportUpdateParams,
    type LogisticssupportListParams as LogisticssupportListParams,
    type LogisticssupportCountParams as LogisticssupportCountParams,
    type LogisticssupportCreateBulkParams as LogisticssupportCreateBulkParams,
    type LogisticssupportGetParams as LogisticssupportGetParams,
    type LogisticssupportTupleParams as LogisticssupportTupleParams,
    type LogisticssupportUnvalidatedPublishParams as LogisticssupportUnvalidatedPublishParams,
  };

  export {
    Maneuvers as Maneuvers,
    type ManeuverListResponse as ManeuverListResponse,
    type ManeuverCountResponse as ManeuverCountResponse,
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
    type MissileTrackTupleResponse as MissileTrackTupleResponse,
    type MissileTrackListResponsesOffsetPage as MissileTrackListResponsesOffsetPage,
    type MissileTrackListParams as MissileTrackListParams,
    type MissileTrackCountParams as MissileTrackCountParams,
    type MissileTrackCreateBulkParams as MissileTrackCreateBulkParams,
    type MissileTrackTupleParams as MissileTrackTupleParams,
    type MissileTrackUnvalidatedPublishParams as MissileTrackUnvalidatedPublishParams,
  };

  export {
    Missionassignment as Missionassignment,
    type MissionassignmentListResponse as MissionassignmentListResponse,
    type MissionassignmentCountResponse as MissionassignmentCountResponse,
    type MissionassignmentTupleResponse as MissionassignmentTupleResponse,
    type MissionassignmentListResponsesOffsetPage as MissionassignmentListResponsesOffsetPage,
    type MissionassignmentCreateParams as MissionassignmentCreateParams,
    type MissionassignmentUpdateParams as MissionassignmentUpdateParams,
    type MissionassignmentListParams as MissionassignmentListParams,
    type MissionassignmentCountParams as MissionassignmentCountParams,
    type MissionassignmentCreateBulkParams as MissionassignmentCreateBulkParams,
    type MissionassignmentGetParams as MissionassignmentGetParams,
    type MissionassignmentTupleParams as MissionassignmentTupleParams,
  };

  export {
    Monoradar as Monoradar,
    type MonoradarListResponse as MonoradarListResponse,
    type MonoradarCountResponse as MonoradarCountResponse,
    type MonoradarTupleResponse as MonoradarTupleResponse,
    type MonoradarListResponsesOffsetPage as MonoradarListResponsesOffsetPage,
    type MonoradarListParams as MonoradarListParams,
    type MonoradarCountParams as MonoradarCountParams,
    type MonoradarCreateBulkParams as MonoradarCreateBulkParams,
    type MonoradarTupleParams as MonoradarTupleParams,
  };

  export {
    Mti as Mti,
    type MtiListResponse as MtiListResponse,
    type MtiCountResponse as MtiCountResponse,
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
    Navigationalobstruction as Navigationalobstruction,
    type NavigationalobstructionListResponse as NavigationalobstructionListResponse,
    type NavigationalobstructionCountResponse as NavigationalobstructionCountResponse,
    type NavigationalobstructionGetResponse as NavigationalobstructionGetResponse,
    type NavigationalobstructionTupleResponse as NavigationalobstructionTupleResponse,
    type NavigationalobstructionListResponsesOffsetPage as NavigationalobstructionListResponsesOffsetPage,
    type NavigationalobstructionCreateParams as NavigationalobstructionCreateParams,
    type NavigationalobstructionUpdateParams as NavigationalobstructionUpdateParams,
    type NavigationalobstructionListParams as NavigationalobstructionListParams,
    type NavigationalobstructionCountParams as NavigationalobstructionCountParams,
    type NavigationalobstructionCreateBulkParams as NavigationalobstructionCreateBulkParams,
    type NavigationalobstructionGetParams as NavigationalobstructionGetParams,
    type NavigationalobstructionTupleParams as NavigationalobstructionTupleParams,
  };

  export {
    Notification as Notification,
    type NotificationListResponse as NotificationListResponse,
    type NotificationCountResponse as NotificationCountResponse,
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
    Objectofinterest as Objectofinterest,
    type ObjectofinterestListResponse as ObjectofinterestListResponse,
    type ObjectofinterestCountResponse as ObjectofinterestCountResponse,
    type ObjectofinterestGetResponse as ObjectofinterestGetResponse,
    type ObjectofinterestTupleResponse as ObjectofinterestTupleResponse,
    type ObjectofinterestListResponsesOffsetPage as ObjectofinterestListResponsesOffsetPage,
    type ObjectofinterestCreateParams as ObjectofinterestCreateParams,
    type ObjectofinterestUpdateParams as ObjectofinterestUpdateParams,
    type ObjectofinterestListParams as ObjectofinterestListParams,
    type ObjectofinterestCountParams as ObjectofinterestCountParams,
    type ObjectofinterestGetParams as ObjectofinterestGetParams,
    type ObjectofinterestTupleParams as ObjectofinterestTupleParams,
  };

  export { Observations as Observations };

  export {
    Onboardnavigation as Onboardnavigation,
    type OnboardnavigationListResponse as OnboardnavigationListResponse,
    type OnboardnavigationCountResponse as OnboardnavigationCountResponse,
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
    type OnorbitantennaGetResponse as OnorbitantennaGetResponse,
    type OnorbitantennaListResponsesOffsetPage as OnorbitantennaListResponsesOffsetPage,
    type OnorbitantennaCreateParams as OnorbitantennaCreateParams,
    type OnorbitantennaUpdateParams as OnorbitantennaUpdateParams,
    type OnorbitantennaListParams as OnorbitantennaListParams,
    type OnorbitantennaGetParams as OnorbitantennaGetParams,
  };

  export {
    Onorbitbattery as Onorbitbattery,
    type OnorbitbatteryListResponse as OnorbitbatteryListResponse,
    type OnorbitbatteryGetResponse as OnorbitbatteryGetResponse,
    type OnorbitbatteryListResponsesOffsetPage as OnorbitbatteryListResponsesOffsetPage,
    type OnorbitbatteryCreateParams as OnorbitbatteryCreateParams,
    type OnorbitbatteryUpdateParams as OnorbitbatteryUpdateParams,
    type OnorbitbatteryListParams as OnorbitbatteryListParams,
    type OnorbitbatteryGetParams as OnorbitbatteryGetParams,
  };

  export {
    Onorbitdetails as Onorbitdetails,
    type OnorbitdetailListResponse as OnorbitdetailListResponse,
    type OnorbitdetailGetResponse as OnorbitdetailGetResponse,
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
    type OnorbitsolararrayGetResponse as OnorbitsolararrayGetResponse,
    type OnorbitsolararrayListResponsesOffsetPage as OnorbitsolararrayListResponsesOffsetPage,
    type OnorbitsolararrayCreateParams as OnorbitsolararrayCreateParams,
    type OnorbitsolararrayUpdateParams as OnorbitsolararrayUpdateParams,
    type OnorbitsolararrayListParams as OnorbitsolararrayListParams,
    type OnorbitsolararrayGetParams as OnorbitsolararrayGetParams,
  };

  export {
    Onorbitthruster as Onorbitthruster,
    type OnorbitthrusterListResponse as OnorbitthrusterListResponse,
    type OnorbitthrusterGetResponse as OnorbitthrusterGetResponse,
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
    Operatingunit as Operatingunit,
    type OperatingunitListResponse as OperatingunitListResponse,
    type OperatingunitCountResponse as OperatingunitCountResponse,
    type OperatingunitGetResponse as OperatingunitGetResponse,
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
    type OperatingunitremarkGetResponse as OperatingunitremarkGetResponse,
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
    type OrganizationFull as OrganizationFull,
    type OrganizationListResponse as OrganizationListResponse,
    type OrganizationCountResponse as OrganizationCountResponse,
    type OrganizationGetOrganizationCategoriesResponse as OrganizationGetOrganizationCategoriesResponse,
    type OrganizationGetOrganizationTypesResponse as OrganizationGetOrganizationTypesResponse,
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
    type OrganizationDetailsFull as OrganizationDetailsFull,
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
    Passiveradarobservation as Passiveradarobservation,
    type PassiveradarobservationListResponse as PassiveradarobservationListResponse,
    type PassiveradarobservationCountResponse as PassiveradarobservationCountResponse,
    type PassiveradarobservationTupleResponse as PassiveradarobservationTupleResponse,
    type PassiveradarobservationListResponsesOffsetPage as PassiveradarobservationListResponsesOffsetPage,
    type PassiveradarobservationCreateParams as PassiveradarobservationCreateParams,
    type PassiveradarobservationListParams as PassiveradarobservationListParams,
    type PassiveradarobservationCountParams as PassiveradarobservationCountParams,
    type PassiveradarobservationCreateBulkParams as PassiveradarobservationCreateBulkParams,
    type PassiveradarobservationFileCreateParams as PassiveradarobservationFileCreateParams,
    type PassiveradarobservationGetParams as PassiveradarobservationGetParams,
    type PassiveradarobservationTupleParams as PassiveradarobservationTupleParams,
  };

  export {
    Personnelrecovery as Personnelrecovery,
    type PersonnelRecoveryFullL as PersonnelRecoveryFullL,
    type PersonnelrecoveryListResponse as PersonnelrecoveryListResponse,
    type PersonnelrecoveryCountResponse as PersonnelrecoveryCountResponse,
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

  export {
    Radarobservation as Radarobservation,
    type RadarobservationListResponse as RadarobservationListResponse,
    type RadarobservationCountResponse as RadarobservationCountResponse,
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
    Rfband as Rfband,
    type RfbandListResponse as RfbandListResponse,
    type RfbandCountResponse as RfbandCountResponse,
    type RfbandGetResponse as RfbandGetResponse,
    type RfbandTupleResponse as RfbandTupleResponse,
    type RfbandListResponsesOffsetPage as RfbandListResponsesOffsetPage,
    type RfbandCreateParams as RfbandCreateParams,
    type RfbandUpdateParams as RfbandUpdateParams,
    type RfbandListParams as RfbandListParams,
    type RfbandCountParams as RfbandCountParams,
    type RfbandGetParams as RfbandGetParams,
    type RfbandTupleParams as RfbandTupleParams,
  };

  export {
    Rfbandtype as Rfbandtype,
    type RfbandtypeListResponse as RfbandtypeListResponse,
    type RfbandtypeCountResponse as RfbandtypeCountResponse,
    type RfbandtypeGetResponse as RfbandtypeGetResponse,
    type RfbandtypeTupleResponse as RfbandtypeTupleResponse,
    type RfbandtypeListResponsesOffsetPage as RfbandtypeListResponsesOffsetPage,
    type RfbandtypeCreateParams as RfbandtypeCreateParams,
    type RfbandtypeUpdateParams as RfbandtypeUpdateParams,
    type RfbandtypeListParams as RfbandtypeListParams,
    type RfbandtypeCountParams as RfbandtypeCountParams,
    type RfbandtypeGetParams as RfbandtypeGetParams,
    type RfbandtypeTupleParams as RfbandtypeTupleParams,
  };

  export {
    Rfemitter as Rfemitter,
    type RfemitterListResponse as RfemitterListResponse,
    type RfemitterCountResponse as RfemitterCountResponse,
    type RfemitterGetResponse as RfemitterGetResponse,
    type RfemitterTupleResponse as RfemitterTupleResponse,
    type RfemitterListResponsesOffsetPage as RfemitterListResponsesOffsetPage,
    type RfemitterCreateParams as RfemitterCreateParams,
    type RfemitterUpdateParams as RfemitterUpdateParams,
    type RfemitterListParams as RfemitterListParams,
    type RfemitterCountParams as RfemitterCountParams,
    type RfemitterGetParams as RfemitterGetParams,
    type RfemitterTupleParams as RfemitterTupleParams,
  };

  export {
    Rfemitterdetails as Rfemitterdetails,
    type RfemitterdetailListResponse as RfemitterdetailListResponse,
    type RfemitterdetailCountResponse as RfemitterdetailCountResponse,
    type RfemitterdetailGetResponse as RfemitterdetailGetResponse,
    type RfemitterdetailTupleResponse as RfemitterdetailTupleResponse,
    type RfemitterdetailListResponsesOffsetPage as RfemitterdetailListResponsesOffsetPage,
    type RfemitterdetailCreateParams as RfemitterdetailCreateParams,
    type RfemitterdetailUpdateParams as RfemitterdetailUpdateParams,
    type RfemitterdetailListParams as RfemitterdetailListParams,
    type RfemitterdetailCountParams as RfemitterdetailCountParams,
    type RfemitterdetailGetParams as RfemitterdetailGetParams,
    type RfemitterdetailTupleParams as RfemitterdetailTupleParams,
  };

  export {
    Rfobservation as Rfobservation,
    type RfobservationListResponse as RfobservationListResponse,
    type RfobservationCountResponse as RfobservationCountResponse,
    type RfobservationTupleResponse as RfobservationTupleResponse,
    type RfobservationListResponsesOffsetPage as RfobservationListResponsesOffsetPage,
    type RfobservationCreateParams as RfobservationCreateParams,
    type RfobservationListParams as RfobservationListParams,
    type RfobservationCountParams as RfobservationCountParams,
    type RfobservationCreateBulkParams as RfobservationCreateBulkParams,
    type RfobservationGetParams as RfobservationGetParams,
    type RfobservationTupleParams as RfobservationTupleParams,
    type RfobservationUnvalidatedPublishParams as RfobservationUnvalidatedPublishParams,
  };

  export {
    Sarobservation as Sarobservation,
    type SarobservationListResponse as SarobservationListResponse,
    type SarobservationCountResponse as SarobservationCountResponse,
    type SarobservationTupleResponse as SarobservationTupleResponse,
    type SarobservationListResponsesOffsetPage as SarobservationListResponsesOffsetPage,
    type SarobservationCreateParams as SarobservationCreateParams,
    type SarobservationListParams as SarobservationListParams,
    type SarobservationCountParams as SarobservationCountParams,
    type SarobservationCreateBulkParams as SarobservationCreateBulkParams,
    type SarobservationGetParams as SarobservationGetParams,
    type SarobservationTupleParams as SarobservationTupleParams,
    type SarobservationUnvalidatedPublishParams as SarobservationUnvalidatedPublishParams,
  };

  export {
    Scientific as Scientific,
    type ScientificListResponse as ScientificListResponse,
    type ScientificCountResponse as ScientificCountResponse,
    type ScientificGetResponse as ScientificGetResponse,
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
    Sensor as Sensor,
    type SensorListResponse as SensorListResponse,
    type SensorCountResponse as SensorCountResponse,
    type SensorGetResponse as SensorGetResponse,
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
    Sensormaintenance as Sensormaintenance,
    type SensormaintenanceListResponse as SensormaintenanceListResponse,
    type SensormaintenanceCountResponse as SensormaintenanceCountResponse,
    type SensormaintenanceCurrentResponse as SensormaintenanceCurrentResponse,
    type SensormaintenanceTupleResponse as SensormaintenanceTupleResponse,
    type SensormaintenanceListResponsesOffsetPage as SensormaintenanceListResponsesOffsetPage,
    type SensormaintenanceCreateParams as SensormaintenanceCreateParams,
    type SensormaintenanceUpdateParams as SensormaintenanceUpdateParams,
    type SensormaintenanceListParams as SensormaintenanceListParams,
    type SensormaintenanceCountParams as SensormaintenanceCountParams,
    type SensormaintenanceCreateBulkParams as SensormaintenanceCreateBulkParams,
    type SensormaintenanceCurrentParams as SensormaintenanceCurrentParams,
    type SensormaintenanceGetParams as SensormaintenanceGetParams,
    type SensormaintenanceTupleParams as SensormaintenanceTupleParams,
  };

  export {
    Sensorobservationtype as Sensorobservationtype,
    type SensorobservationtypeListResponse as SensorobservationtypeListResponse,
    type SensorobservationtypeGetResponse as SensorobservationtypeGetResponse,
    type SensorobservationtypeListResponsesOffsetPage as SensorobservationtypeListResponsesOffsetPage,
    type SensorobservationtypeListParams as SensorobservationtypeListParams,
    type SensorobservationtypeGetParams as SensorobservationtypeGetParams,
  };

  export {
    Sensorplan as Sensorplan,
    type SensorplanListResponse as SensorplanListResponse,
    type SensorplanCountResponse as SensorplanCountResponse,
    type SensorplanTupleResponse as SensorplanTupleResponse,
    type SensorplanListResponsesOffsetPage as SensorplanListResponsesOffsetPage,
    type SensorplanCreateParams as SensorplanCreateParams,
    type SensorplanUpdateParams as SensorplanUpdateParams,
    type SensorplanListParams as SensorplanListParams,
    type SensorplanCountParams as SensorplanCountParams,
    type SensorplanGetParams as SensorplanGetParams,
    type SensorplanTupleParams as SensorplanTupleParams,
    type SensorplanUnvalidatedPublishParams as SensorplanUnvalidatedPublishParams,
  };

  export {
    Sensortype as Sensortype,
    type SensortypeListResponse as SensortypeListResponse,
    type SensortypeGetResponse as SensortypeGetResponse,
    type SensortypeListResponsesOffsetPage as SensortypeListResponsesOffsetPage,
    type SensortypeListParams as SensortypeListParams,
    type SensortypeGetParams as SensortypeGetParams,
  };

  export {
    Seradatacommdetails as Seradatacommdetails,
    type SeradatacommdetailListResponse as SeradatacommdetailListResponse,
    type SeradatacommdetailCountResponse as SeradatacommdetailCountResponse,
    type SeradatacommdetailGetResponse as SeradatacommdetailGetResponse,
    type SeradatacommdetailTupleResponse as SeradatacommdetailTupleResponse,
    type SeradatacommdetailListResponsesOffsetPage as SeradatacommdetailListResponsesOffsetPage,
    type SeradatacommdetailCreateParams as SeradatacommdetailCreateParams,
    type SeradatacommdetailUpdateParams as SeradatacommdetailUpdateParams,
    type SeradatacommdetailListParams as SeradatacommdetailListParams,
    type SeradatacommdetailCountParams as SeradatacommdetailCountParams,
    type SeradatacommdetailGetParams as SeradatacommdetailGetParams,
    type SeradatacommdetailTupleParams as SeradatacommdetailTupleParams,
  };

  export {
    Seradataearlywarning as Seradataearlywarning,
    type SeradataearlywarningListResponse as SeradataearlywarningListResponse,
    type SeradataearlywarningCountResponse as SeradataearlywarningCountResponse,
    type SeradataearlywarningGetResponse as SeradataearlywarningGetResponse,
    type SeradataearlywarningTupleResponse as SeradataearlywarningTupleResponse,
    type SeradataearlywarningListResponsesOffsetPage as SeradataearlywarningListResponsesOffsetPage,
    type SeradataearlywarningCreateParams as SeradataearlywarningCreateParams,
    type SeradataearlywarningUpdateParams as SeradataearlywarningUpdateParams,
    type SeradataearlywarningListParams as SeradataearlywarningListParams,
    type SeradataearlywarningCountParams as SeradataearlywarningCountParams,
    type SeradataearlywarningGetParams as SeradataearlywarningGetParams,
    type SeradataearlywarningTupleParams as SeradataearlywarningTupleParams,
  };

  export {
    Seradatanavigation as Seradatanavigation,
    type SeradatanavigationListResponse as SeradatanavigationListResponse,
    type SeradatanavigationCountResponse as SeradatanavigationCountResponse,
    type SeradatanavigationGetResponse as SeradatanavigationGetResponse,
    type SeradatanavigationTupleResponse as SeradatanavigationTupleResponse,
    type SeradatanavigationListResponsesOffsetPage as SeradatanavigationListResponsesOffsetPage,
    type SeradatanavigationCreateParams as SeradatanavigationCreateParams,
    type SeradatanavigationUpdateParams as SeradatanavigationUpdateParams,
    type SeradatanavigationListParams as SeradatanavigationListParams,
    type SeradatanavigationCountParams as SeradatanavigationCountParams,
    type SeradatanavigationGetParams as SeradatanavigationGetParams,
    type SeradatanavigationTupleParams as SeradatanavigationTupleParams,
  };

  export {
    Seradataopticalpayload as Seradataopticalpayload,
    type SeradataopticalpayloadListResponse as SeradataopticalpayloadListResponse,
    type SeradataopticalpayloadCountResponse as SeradataopticalpayloadCountResponse,
    type SeradataopticalpayloadGetResponse as SeradataopticalpayloadGetResponse,
    type SeradataopticalpayloadTupleResponse as SeradataopticalpayloadTupleResponse,
    type SeradataopticalpayloadListResponsesOffsetPage as SeradataopticalpayloadListResponsesOffsetPage,
    type SeradataopticalpayloadCreateParams as SeradataopticalpayloadCreateParams,
    type SeradataopticalpayloadUpdateParams as SeradataopticalpayloadUpdateParams,
    type SeradataopticalpayloadListParams as SeradataopticalpayloadListParams,
    type SeradataopticalpayloadCountParams as SeradataopticalpayloadCountParams,
    type SeradataopticalpayloadGetParams as SeradataopticalpayloadGetParams,
    type SeradataopticalpayloadTupleParams as SeradataopticalpayloadTupleParams,
  };

  export {
    Seradataradarpayload as Seradataradarpayload,
    type SeradataradarpayloadListResponse as SeradataradarpayloadListResponse,
    type SeradataradarpayloadCountResponse as SeradataradarpayloadCountResponse,
    type SeradataradarpayloadGetResponse as SeradataradarpayloadGetResponse,
    type SeradataradarpayloadTupleResponse as SeradataradarpayloadTupleResponse,
    type SeradataradarpayloadListResponsesOffsetPage as SeradataradarpayloadListResponsesOffsetPage,
    type SeradataradarpayloadCreateParams as SeradataradarpayloadCreateParams,
    type SeradataradarpayloadUpdateParams as SeradataradarpayloadUpdateParams,
    type SeradataradarpayloadListParams as SeradataradarpayloadListParams,
    type SeradataradarpayloadCountParams as SeradataradarpayloadCountParams,
    type SeradataradarpayloadGetParams as SeradataradarpayloadGetParams,
    type SeradataradarpayloadTupleParams as SeradataradarpayloadTupleParams,
  };

  export {
    Seradatasigintpayload as Seradatasigintpayload,
    type SeradatasigintpayloadListResponse as SeradatasigintpayloadListResponse,
    type SeradatasigintpayloadCountResponse as SeradatasigintpayloadCountResponse,
    type SeradatasigintpayloadGetResponse as SeradatasigintpayloadGetResponse,
    type SeradatasigintpayloadTupleResponse as SeradatasigintpayloadTupleResponse,
    type SeradatasigintpayloadListResponsesOffsetPage as SeradatasigintpayloadListResponsesOffsetPage,
    type SeradatasigintpayloadCreateParams as SeradatasigintpayloadCreateParams,
    type SeradatasigintpayloadUpdateParams as SeradatasigintpayloadUpdateParams,
    type SeradatasigintpayloadListParams as SeradatasigintpayloadListParams,
    type SeradatasigintpayloadCountParams as SeradatasigintpayloadCountParams,
    type SeradatasigintpayloadGetParams as SeradatasigintpayloadGetParams,
    type SeradatasigintpayloadTupleParams as SeradatasigintpayloadTupleParams,
  };

  export {
    Seradataspacecraftdetails as Seradataspacecraftdetails,
    type SeradataspacecraftdetailListResponse as SeradataspacecraftdetailListResponse,
    type SeradataspacecraftdetailCountResponse as SeradataspacecraftdetailCountResponse,
    type SeradataspacecraftdetailGetResponse as SeradataspacecraftdetailGetResponse,
    type SeradataspacecraftdetailTupleResponse as SeradataspacecraftdetailTupleResponse,
    type SeradataspacecraftdetailListResponsesOffsetPage as SeradataspacecraftdetailListResponsesOffsetPage,
    type SeradataspacecraftdetailCreateParams as SeradataspacecraftdetailCreateParams,
    type SeradataspacecraftdetailUpdateParams as SeradataspacecraftdetailUpdateParams,
    type SeradataspacecraftdetailListParams as SeradataspacecraftdetailListParams,
    type SeradataspacecraftdetailCountParams as SeradataspacecraftdetailCountParams,
    type SeradataspacecraftdetailGetParams as SeradataspacecraftdetailGetParams,
    type SeradataspacecraftdetailTupleParams as SeradataspacecraftdetailTupleParams,
  };

  export {
    Sgi as Sgi,
    type SgiListResponse as SgiListResponse,
    type SgiCountResponse as SgiCountResponse,
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
    Siteremark as Siteremark,
    type SiteremarkListResponse as SiteremarkListResponse,
    type SiteremarkCountResponse as SiteremarkCountResponse,
    type SiteremarkGetResponse as SiteremarkGetResponse,
    type SiteremarkTupleResponse as SiteremarkTupleResponse,
    type SiteremarkListResponsesOffsetPage as SiteremarkListResponsesOffsetPage,
    type SiteremarkCreateParams as SiteremarkCreateParams,
    type SiteremarkListParams as SiteremarkListParams,
    type SiteremarkCountParams as SiteremarkCountParams,
    type SiteremarkGetParams as SiteremarkGetParams,
    type SiteremarkTupleParams as SiteremarkTupleParams,
  };

  export {
    Sitestatus as Sitestatus,
    type SitestatusListResponse as SitestatusListResponse,
    type SitestatusCountResponse as SitestatusCountResponse,
    type SitestatusTupleResponse as SitestatusTupleResponse,
    type SitestatusListResponsesOffsetPage as SitestatusListResponsesOffsetPage,
    type SitestatusCreateParams as SitestatusCreateParams,
    type SitestatusUpdateParams as SitestatusUpdateParams,
    type SitestatusListParams as SitestatusListParams,
    type SitestatusCountParams as SitestatusCountParams,
    type SitestatusGetParams as SitestatusGetParams,
    type SitestatusTupleParams as SitestatusTupleParams,
  };

  export {
    Skyimagery as Skyimagery,
    type SkyimageryListResponse as SkyimageryListResponse,
    type SkyimageryCountResponse as SkyimageryCountResponse,
    type SkyimageryTupleResponse as SkyimageryTupleResponse,
    type SkyimageryListResponsesOffsetPage as SkyimageryListResponsesOffsetPage,
    type SkyimageryListParams as SkyimageryListParams,
    type SkyimageryCountParams as SkyimageryCountParams,
    type SkyimageryFileGetParams as SkyimageryFileGetParams,
    type SkyimageryGetParams as SkyimageryGetParams,
    type SkyimageryTupleParams as SkyimageryTupleParams,
    type SkyimageryUploadZipParams as SkyimageryUploadZipParams,
  };

  export {
    Soiobservationset as Soiobservationset,
    type SoiobservationsetListResponse as SoiobservationsetListResponse,
    type SoiobservationsetCountResponse as SoiobservationsetCountResponse,
    type SoiobservationsetTupleResponse as SoiobservationsetTupleResponse,
    type SoiobservationsetListResponsesOffsetPage as SoiobservationsetListResponsesOffsetPage,
    type SoiobservationsetCreateParams as SoiobservationsetCreateParams,
    type SoiobservationsetListParams as SoiobservationsetListParams,
    type SoiobservationsetCountParams as SoiobservationsetCountParams,
    type SoiobservationsetCreateBulkParams as SoiobservationsetCreateBulkParams,
    type SoiobservationsetGetParams as SoiobservationsetGetParams,
    type SoiobservationsetTupleParams as SoiobservationsetTupleParams,
    type SoiobservationsetUnvalidatedPublishParams as SoiobservationsetUnvalidatedPublishParams,
  };

  export {
    Solararray as Solararray,
    type SolararrayListResponse as SolararrayListResponse,
    type SolararrayCountResponse as SolararrayCountResponse,
    type SolararrayGetResponse as SolararrayGetResponse,
    type SolararrayTupleResponse as SolararrayTupleResponse,
    type SolararrayListResponsesOffsetPage as SolararrayListResponsesOffsetPage,
    type SolararrayCreateParams as SolararrayCreateParams,
    type SolararrayUpdateParams as SolararrayUpdateParams,
    type SolararrayListParams as SolararrayListParams,
    type SolararrayCountParams as SolararrayCountParams,
    type SolararrayGetParams as SolararrayGetParams,
    type SolararrayTupleParams as SolararrayTupleParams,
  };

  export {
    Solararraydetails as Solararraydetails,
    type SolarArrayDetailsFull as SolarArrayDetailsFull,
    type SolararraydetailListResponse as SolararraydetailListResponse,
    type SolararraydetailListResponsesOffsetPage as SolararraydetailListResponsesOffsetPage,
    type SolararraydetailCreateParams as SolararraydetailCreateParams,
    type SolararraydetailUpdateParams as SolararraydetailUpdateParams,
    type SolararraydetailListParams as SolararraydetailListParams,
    type SolararraydetailGetParams as SolararraydetailGetParams,
  };

  export {
    Sortieppr as Sortieppr,
    type SortiepprListResponse as SortiepprListResponse,
    type SortiepprCountResponse as SortiepprCountResponse,
    type SortiepprTupleResponse as SortiepprTupleResponse,
    type SortiepprListResponsesOffsetPage as SortiepprListResponsesOffsetPage,
    type SortiepprCreateParams as SortiepprCreateParams,
    type SortiepprUpdateParams as SortiepprUpdateParams,
    type SortiepprListParams as SortiepprListParams,
    type SortiepprCountParams as SortiepprCountParams,
    type SortiepprCreateBulkParams as SortiepprCreateBulkParams,
    type SortiepprGetParams as SortiepprGetParams,
    type SortiepprTupleParams as SortiepprTupleParams,
    type SortiepprUnvalidatedPublishParams as SortiepprUnvalidatedPublishParams,
  };

  export {
    Spaceenvobservation as Spaceenvobservation,
    type SpaceenvobservationListResponse as SpaceenvobservationListResponse,
    type SpaceenvobservationCountResponse as SpaceenvobservationCountResponse,
    type SpaceenvobservationTupleResponse as SpaceenvobservationTupleResponse,
    type SpaceenvobservationListResponsesOffsetPage as SpaceenvobservationListResponsesOffsetPage,
    type SpaceenvobservationListParams as SpaceenvobservationListParams,
    type SpaceenvobservationCountParams as SpaceenvobservationCountParams,
    type SpaceenvobservationCreateBulkParams as SpaceenvobservationCreateBulkParams,
    type SpaceenvobservationTupleParams as SpaceenvobservationTupleParams,
    type SpaceenvobservationUnvalidatedPublishParams as SpaceenvobservationUnvalidatedPublishParams,
  };

  export {
    Stage as Stage,
    type StageListResponse as StageListResponse,
    type StageCountResponse as StageCountResponse,
    type StageGetResponse as StageGetResponse,
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
    Starcatalog as Starcatalog,
    type StarcatalogListResponse as StarcatalogListResponse,
    type StarcatalogCountResponse as StarcatalogCountResponse,
    type StarcatalogGetResponse as StarcatalogGetResponse,
    type StarcatalogTupleResponse as StarcatalogTupleResponse,
    type StarcatalogListResponsesOffsetPage as StarcatalogListResponsesOffsetPage,
    type StarcatalogCreateParams as StarcatalogCreateParams,
    type StarcatalogUpdateParams as StarcatalogUpdateParams,
    type StarcatalogListParams as StarcatalogListParams,
    type StarcatalogCountParams as StarcatalogCountParams,
    type StarcatalogCreateBulkParams as StarcatalogCreateBulkParams,
    type StarcatalogGetParams as StarcatalogGetParams,
    type StarcatalogTupleParams as StarcatalogTupleParams,
    type StarcatalogUnvalidatedPublishParams as StarcatalogUnvalidatedPublishParams,
  };

  export {
    Statevector as Statevector,
    type StateVectorAbridged as StateVectorAbridged,
    type StateVectorFull as StateVectorFull,
    type StateVectorIngest as StateVectorIngest,
    type StatevectorCountResponse as StatevectorCountResponse,
    type StatevectorTupleResponse as StatevectorTupleResponse,
    type StateVectorAbridgedsOffsetPage as StateVectorAbridgedsOffsetPage,
    type StatevectorCreateParams as StatevectorCreateParams,
    type StatevectorListParams as StatevectorListParams,
    type StatevectorCountParams as StatevectorCountParams,
    type StatevectorCreateBulkParams as StatevectorCreateBulkParams,
    type StatevectorGetParams as StatevectorGetParams,
    type StatevectorTupleParams as StatevectorTupleParams,
    type StatevectorUnvalidatedPublishParams as StatevectorUnvalidatedPublishParams,
  };

  export {
    Status as Status,
    type StatusListResponse as StatusListResponse,
    type StatusCountResponse as StatusCountResponse,
    type StatusGetResponse as StatusGetResponse,
    type StatusGetByEntityIDResponse as StatusGetByEntityIDResponse,
    type StatusGetByEntityTypeResponse as StatusGetByEntityTypeResponse,
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
    type SubstatusGetResponse as SubstatusGetResponse,
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
    Surfaceobstruction as Surfaceobstruction,
    type SurfaceobstructionListResponse as SurfaceobstructionListResponse,
    type SurfaceobstructionCountResponse as SurfaceobstructionCountResponse,
    type SurfaceobstructionGetResponse as SurfaceobstructionGetResponse,
    type SurfaceobstructionTupleResponse as SurfaceobstructionTupleResponse,
    type SurfaceobstructionListResponsesOffsetPage as SurfaceobstructionListResponsesOffsetPage,
    type SurfaceobstructionCreateParams as SurfaceobstructionCreateParams,
    type SurfaceobstructionUpdateParams as SurfaceobstructionUpdateParams,
    type SurfaceobstructionListParams as SurfaceobstructionListParams,
    type SurfaceobstructionCountParams as SurfaceobstructionCountParams,
    type SurfaceobstructionGetParams as SurfaceobstructionGetParams,
    type SurfaceobstructionTupleParams as SurfaceobstructionTupleParams,
    type SurfaceobstructionUnvalidatedPublishParams as SurfaceobstructionUnvalidatedPublishParams,
  };

  export {
    Swir as Swir,
    type SwirListResponse as SwirListResponse,
    type SwirCountResponse as SwirCountResponse,
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
    Taiutc as Taiutc,
    type TaiutcListResponse as TaiutcListResponse,
    type TaiutcCountResponse as TaiutcCountResponse,
    type TaiutcTupleResponse as TaiutcTupleResponse,
    type TaiutcListResponsesOffsetPage as TaiutcListResponsesOffsetPage,
    type TaiutcCreateParams as TaiutcCreateParams,
    type TaiutcUpdateParams as TaiutcUpdateParams,
    type TaiutcListParams as TaiutcListParams,
    type TaiutcCountParams as TaiutcCountParams,
    type TaiutcGetParams as TaiutcGetParams,
    type TaiutcTupleParams as TaiutcTupleParams,
  };

  export { TdoaFdoa as TdoaFdoa };

  export {
    Track as Track,
    type TrackListResponse as TrackListResponse,
    type TrackCountResponse as TrackCountResponse,
    type TrackTupleResponse as TrackTupleResponse,
    type TrackListResponsesOffsetPage as TrackListResponsesOffsetPage,
    type TrackListParams as TrackListParams,
    type TrackCountParams as TrackCountParams,
    type TrackCreateBulkParams as TrackCreateBulkParams,
    type TrackTupleParams as TrackTupleParams,
    type TrackUnvalidatedPublishParams as TrackUnvalidatedPublishParams,
  };

  export {
    Trackdetails as Trackdetails,
    type TrackdetailListResponse as TrackdetailListResponse,
    type TrackdetailCountResponse as TrackdetailCountResponse,
    type TrackdetailTupleResponse as TrackdetailTupleResponse,
    type TrackdetailListResponsesOffsetPage as TrackdetailListResponsesOffsetPage,
    type TrackdetailListParams as TrackdetailListParams,
    type TrackdetailCountParams as TrackdetailCountParams,
    type TrackdetailCreateBulkParams as TrackdetailCreateBulkParams,
    type TrackdetailTupleParams as TrackdetailTupleParams,
  };

  export {
    Trackroute as Trackroute,
    type TrackrouteListResponse as TrackrouteListResponse,
    type TrackrouteCountResponse as TrackrouteCountResponse,
    type TrackrouteTupleResponse as TrackrouteTupleResponse,
    type TrackrouteListResponsesOffsetPage as TrackrouteListResponsesOffsetPage,
    type TrackrouteCreateParams as TrackrouteCreateParams,
    type TrackrouteUpdateParams as TrackrouteUpdateParams,
    type TrackrouteListParams as TrackrouteListParams,
    type TrackrouteCountParams as TrackrouteCountParams,
    type TrackrouteCreateBulkParams as TrackrouteCreateBulkParams,
    type TrackrouteGetParams as TrackrouteGetParams,
    type TrackrouteTupleParams as TrackrouteTupleParams,
    type TrackrouteUnvalidatedPublishParams as TrackrouteUnvalidatedPublishParams,
  };

  export {
    Transponder as Transponder,
    type TransponderListResponse as TransponderListResponse,
    type TransponderCountResponse as TransponderCountResponse,
    type TransponderGetResponse as TransponderGetResponse,
    type TransponderTupleResponse as TransponderTupleResponse,
    type TransponderListResponsesOffsetPage as TransponderListResponsesOffsetPage,
    type TransponderCreateParams as TransponderCreateParams,
    type TransponderUpdateParams as TransponderUpdateParams,
    type TransponderListParams as TransponderListParams,
    type TransponderCountParams as TransponderCountParams,
    type TransponderGetParams as TransponderGetParams,
    type TransponderTupleParams as TransponderTupleParams,
  };

  export {
    Vessel as Vessel,
    type VesselListResponse as VesselListResponse,
    type VesselCountResponse as VesselCountResponse,
    type VesselGetResponse as VesselGetResponse,
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
    Weatherdata as Weatherdata,
    type WeatherdataListResponse as WeatherdataListResponse,
    type WeatherdataCountResponse as WeatherdataCountResponse,
    type WeatherdataTupleResponse as WeatherdataTupleResponse,
    type WeatherdataListResponsesOffsetPage as WeatherdataListResponsesOffsetPage,
    type WeatherdataCreateParams as WeatherdataCreateParams,
    type WeatherdataListParams as WeatherdataListParams,
    type WeatherdataCountParams as WeatherdataCountParams,
    type WeatherdataCreateBulkParams as WeatherdataCreateBulkParams,
    type WeatherdataGetParams as WeatherdataGetParams,
    type WeatherdataTupleParams as WeatherdataTupleParams,
    type WeatherdataUnvalidatedPublishParams as WeatherdataUnvalidatedPublishParams,
  };

  export {
    Weatherreport as Weatherreport,
    type WeatherreportListResponse as WeatherreportListResponse,
    type WeatherreportCountResponse as WeatherreportCountResponse,
    type WeatherreportTupleResponse as WeatherreportTupleResponse,
    type WeatherreportListResponsesOffsetPage as WeatherreportListResponsesOffsetPage,
    type WeatherreportCreateParams as WeatherreportCreateParams,
    type WeatherreportListParams as WeatherreportListParams,
    type WeatherreportCountParams as WeatherreportCountParams,
    type WeatherreportGetParams as WeatherreportGetParams,
    type WeatherreportTupleParams as WeatherreportTupleParams,
    type WeatherreportUnvalidatedPublishParams as WeatherreportUnvalidatedPublishParams,
  };

  export { Udl as Udl };

  export { GnssObservations as GnssObservations };

  export { GnssRawIf as GnssRawIf };

  export { IonoObservation as IonoObservation };

  export {
    LaunchEvent as LaunchEvent,
    type LaunchEventUnvalidatedPublishParams as LaunchEventUnvalidatedPublishParams,
  };

  export { ReportAndActivity as ReportAndActivity };

  export {
    SecureMessaging as SecureMessaging,
    type TopicDetails as TopicDetails,
    type SecureMessagingListTopicsResponse as SecureMessagingListTopicsResponse,
    type SecureMessagingDescribeTopicParams as SecureMessagingDescribeTopicParams,
    type SecureMessagingGetLatestOffsetParams as SecureMessagingGetLatestOffsetParams,
    type SecureMessagingGetMessagesParams as SecureMessagingGetMessagesParams,
  };

  export {
    Scs as Scs,
    type ScAggregateDocTypeResponse as ScAggregateDocTypeResponse,
    type ScAllowableFileExtensionsResponse as ScAllowableFileExtensionsResponse,
    type ScAllowableFileMimesResponse as ScAllowableFileMimesResponse,
    type ScCopyResponse as ScCopyResponse,
    type ScFileUploadResponse as ScFileUploadResponse,
    type ScMoveResponse as ScMoveResponse,
    type ScSearchResponse as ScSearchResponse,
    type ScDeleteParams as ScDeleteParams,
    type ScCopyParams as ScCopyParams,
    type ScDownloadParams as ScDownloadParams,
    type ScFileDownloadParams as ScFileDownloadParams,
    type ScFileUploadParams as ScFileUploadParams,
    type ScMoveParams as ScMoveParams,
    type ScRenameParams as ScRenameParams,
    type ScSearchParams as ScSearchParams,
    type ScUpdateTagsParams as ScUpdateTagsParams,
  };

  export { ScsViews as ScsViews, type ScsViewRetrieveParams as ScsViewRetrieveParams };

  export type AirTransportMissionFull = API.AirTransportMissionFull;
  export type AircraftstatusFull = API.AircraftstatusFull;
  export type AIsFull = API.AIsFull;
  export type AttitudesetFull = API.AttitudesetFull;
  export type CollectRequestFull = API.CollectRequestFull;
  export type CollectResponseFull = API.CollectResponseFull;
  export type DriftHistoryAbridged = API.DriftHistoryAbridged;
  export type DriftHistoryFull = API.DriftHistoryFull;
  export type EopFull = API.EopFull;
  export type EphemerisFull = API.EphemerisFull;
  export type EvacFull = API.EvacFull;
  export type EventEvolutionFull = API.EventEvolutionFull;
  export type FileData = API.FileData;
  export type FlightPlanFull = API.FlightPlanFull;
  export type OnorbitFull = API.OnorbitFull;
}
