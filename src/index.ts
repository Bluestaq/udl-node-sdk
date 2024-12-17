// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { AirEventDeleteParams, AirEvents } from './resources/air-events';
import {
  AirLoadPlanCountParams,
  AirLoadPlanCountResponse,
  AirLoadPlanCreateParams,
  AirLoadPlanListParams,
  AirLoadPlanListResponse,
  AirLoadPlanRetrieveParams,
  AirLoadPlanTupleParams,
  AirLoadPlanTupleResponse,
  AirLoadPlans,
  AirloadplanAbridged,
  AirloadplanFull,
} from './resources/air-load-plans';
import {
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
  AircraftCountResponse,
  AircraftCreateParams,
  AircraftFull,
  AircraftListResponse,
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
  AircraftStatus,
  AircraftStatusDeleteParams,
  AircraftStatusRetrieveParams,
  AircraftStatusTupleParams,
  AircraftStatusTupleResponse,
  AircraftStatusUpdateParams,
} from './resources/aircraft-status';
import {
  AircraftStatusRemarkCountResponse,
  AircraftStatusRemarkCreateParams,
  AircraftStatusRemarkListResponse,
  AircraftStatusRemarkRetrieveParams,
  AircraftStatusRemarkTupleParams,
  AircraftStatusRemarkTupleResponse,
  AircraftStatusRemarks,
  AircraftstatusremarkAbridged,
  AircraftstatusremarkFull,
} from './resources/aircraft-status-remarks';
import {
  AirfieldSlotCreateParams,
  AirfieldSlotListResponse,
  AirfieldSlots,
  AirfieldslotAbridged,
  AirfieldslotFull,
} from './resources/airfield-slots';
import {
  AirfieldStatus,
  AirfieldStatusDeleteParams,
  AirfieldStatusRetrieveParams,
  AirfieldStatusTupleParams,
  AirfieldStatusTupleResponse,
  AirfieldStatusUpdateParams,
} from './resources/airfield-status';
import {
  AirfieldAbridged,
  AirfieldCountResponse,
  AirfieldCreateParams,
  AirfieldFull,
  AirfieldListResponse,
  AirfieldRetrieveParams,
  AirfieldTupleParams,
  AirfieldTupleResponse,
  AirfieldUpdateParams,
  Airfields,
} from './resources/airfields';
import {
  Airfieldslotconsumption,
  AirfieldslotconsumptionDeleteParams,
  AirfieldslotconsumptionRetrieveParams,
  AirfieldslotconsumptionTupleParams,
  AirfieldslotconsumptionTupleResponse,
  AirfieldslotconsumptionUpdateParams,
} from './resources/airfieldslotconsumption';
import {
  AirfieldslotconsumptionAbridged,
  AirfieldslotconsumptionCountResponse,
  AirfieldslotconsumptionCreateParams,
  AirfieldslotconsumptionFull,
  AirfieldslotconsumptionListResponse,
  Airfieldslotconsumptions,
} from './resources/airfieldslotconsumptions';
import {
  AirfieldslotCountResponse,
  AirfieldslotDeleteParams,
  AirfieldslotRetrieveParams,
  AirfieldslotTupleParams,
  AirfieldslotTupleResponse,
  AirfieldslotUpdateParams,
  Airfieldslots,
} from './resources/airfieldslots';
import { AirloadplanDeleteParams, AirloadplanUpdateParams, Airloadplans } from './resources/airloadplans';
import {
  AirspaceControlOrderCountResponse,
  AirspaceControlOrderCreateBulkParams,
  AirspaceControlOrderCreateParams,
  AirspaceControlOrderListResponse,
  AirspaceControlOrderRetrieveParams,
  AirspaceControlOrderTupleParams,
  AirspaceControlOrderTupleResponse,
  AirspaceControlOrders,
  AirspacecontrolorderAbridged,
  AirspacecontrolorderFull,
} from './resources/airspace-control-orders';
import {
  AirtaskingorderAbridged,
  AirtaskingorderListResponse,
  Airtaskingorders,
} from './resources/airtaskingorders';
import { AIsObjectCreateParams, AIsObjects } from './resources/ais-objects';
import {
  AnalyticImagery,
  AnalyticImageryAbridged,
  AnalyticImageryCountParams,
  AnalyticImageryCountResponse,
  AnalyticImageryCreateParams,
  AnalyticImageryFull,
  AnalyticImageryHistoryAodrParams,
  AnalyticImageryHistoryCountParams,
  AnalyticImageryHistoryCountResponse,
  AnalyticImageryHistoryParams,
  AnalyticImageryHistoryResponse,
  AnalyticImageryListParams,
  AnalyticImageryListResponse,
  AnalyticImageryRetrieveParams,
  AnalyticImageryTupleParams,
  AnalyticImageryTupleResponse,
} from './resources/analytic-imagery';
import {
  AntennaAbridged,
  AntennaCountResponse,
  AntennaCreateParams,
  AntennaDeleteParams,
  AntennaFull,
  AntennaListResponse,
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
import { Attitudeset, AttitudesetCreateParams } from './resources/attitudeset';
import { AttitudesetRetrieveParams, Attitudesets } from './resources/attitudesets';
import {
  Batteries,
  BatteryAbridged,
  BatteryCountResponse,
  BatteryCreateParams,
  BatteryDeleteParams,
  BatteryFull,
  BatteryListResponse,
  BatteryRetrieveParams,
  BatteryTupleParams,
  BatteryTupleResponse,
  BatteryUpdateParams,
} from './resources/batteries';
import {
  BatterydetailCreateParams,
  BatterydetailDeleteParams,
  BatterydetailListResponse,
  BatterydetailRetrieveParams,
  BatterydetailUpdateParams,
  Batterydetails,
  BatterydetailsAbridged,
  BatterydetailsFull,
} from './resources/batterydetails';
import {
  Beam,
  BeamAbridged,
  BeamCountResponse,
  BeamCreateParams,
  BeamFull,
  BeamListResponse,
  BeamRetrieveParams,
  BeamTupleParams,
  BeamTupleResponse,
} from './resources/beam';
import {
  BeamContourCountParams,
  BeamContourCountResponse,
  BeamContourCreateBulkParams,
  BeamContourCreateParams,
  BeamContourDeleteParams,
  BeamContourListParams,
  BeamContourListResponse,
  BeamContourRetrieveParams,
  BeamContourTupleParams,
  BeamContourTupleResponse,
  BeamContourUpdateParams,
  BeamContours,
  BeamcontourAbridged,
  BeamcontourFull,
} from './resources/beam-contours';
import { BeamDeleteParams, BeamUpdateParams, Beams } from './resources/beams';
import {
  BusAbridged,
  BusCountResponse,
  BusCreateParams,
  BusDeleteParams,
  BusFull,
  BusListResponse,
  BusRetrieveParams,
  BusTupleParams,
  BusTupleResponse,
  BusUpdateParams,
  Buses,
} from './resources/buses';
import {
  ChannelAbridged,
  ChannelCountResponse,
  ChannelCreateParams,
  ChannelDeleteParams,
  ChannelFull,
  ChannelListResponse,
  ChannelRetrieveParams,
  ChannelTupleParams,
  ChannelTupleResponse,
  ChannelUpdateParams,
  Channels,
} from './resources/channels';
import {
  Comm,
  CommAbridged,
  CommDeleteParams,
  CommFull,
  CommRetrieveParams,
  CommTupleParams,
  CommTupleResponse,
  CommUpdateParams,
} from './resources/comm';
import { CommCountResponse, CommCreateParams, CommListResponse, Comms } from './resources/comms';
import {
  Conjunction,
  ConjunctionCountParams,
  ConjunctionCountResponse,
  ConjunctionCreateBulkParams,
  ConjunctionCreateParams,
  ConjunctionHistoryParams,
  ConjunctionHistoryResponse,
  ConjunctionListParams,
  ConjunctionListResponse,
} from './resources/conjunction';
import { CotCreateParams, Cots } from './resources/cots';
import {
  Countries,
  CountryAbridged,
  CountryCountResponse,
  CountryCreateParams,
  CountryDeleteParams,
  CountryFull,
  CountryListResponse,
  CountryRetrieveParams,
  CountryTupleParams,
  CountryTupleResponse,
  CountryUpdateParams,
} from './resources/countries';
import {
  Crew,
  CrewAbridged,
  CrewCountResponse,
  CrewCreateParams,
  CrewFull,
  CrewListResponse,
  CrewRetrieveParams,
  CrewTupleParams,
  CrewTupleResponse,
  CrewUpdateParams,
} from './resources/crew';
import { DatalinkCreateParams, Datalinks } from './resources/datalinks';
import { DiplomaticClearanceCreateParams, DiplomaticClearances } from './resources/diplomatic-clearances';
import { DriftHistories, DriftHistory, DriftHistoryRetrieveParams } from './resources/drift-histories';
import {
  DriftHistory as DriftHistoryAPIDriftHistory,
  DriftHistoryCountResponse,
  DriftHistoryListResponse,
  DriftHistoryTupleParams,
  DriftHistoryTupleResponse,
} from './resources/drift-history';
import { Ecpsdr, EcpsdrCreateParams } from './resources/ecpsdr';
import { Elset } from './resources/elset';
import {
  EngineDetailCreateParams,
  EngineDetailDeleteParams,
  EngineDetailRetrieveParams,
  EngineDetailUpdateParams,
  EngineDetails,
  EngineDetailsFull,
} from './resources/engine-details';
import { EngineDetailsAbridged, EnginedetailListResponse, Enginedetails } from './resources/enginedetails';
import {
  Engine,
  EngineAbridged,
  EngineCountResponse,
  EngineCreateParams,
  EngineDeleteParams,
  EngineListResponse,
  EngineRetrieveParams,
  EngineTupleParams,
  EngineTupleResponse,
  EngineUpdateParams,
  Engines,
} from './resources/engines';
import {
  Entities,
  EntityAbridged,
  EntityCountResponse,
  EntityCreateParams,
  EntityDeleteParams,
  EntityFull,
  EntityGetAllTypesResponse,
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
  EopDeleteParams,
  EopListParams,
  EopListResponse,
  EopRetrieveParams,
  EopUpdateParams,
  Eops,
} from './resources/eops';
import { EphemerideCreateParams, Ephemerides } from './resources/ephemerides';
import {
  Equipment,
  EquipmentAbridged,
  EquipmentCountResponse,
  EquipmentCreateBulkParams,
  EquipmentCreateParams,
  EquipmentDeleteParams,
  EquipmentFull,
  EquipmentListResponse,
  EquipmentRetrieveParams,
  EquipmentTupleParams,
  EquipmentTupleResponse,
  EquipmentUpdateParams,
} from './resources/equipment';
import {
  EquipmentRemarkAbridged,
  EquipmentRemarkFull,
  EquipmentremarkCountResponse,
  EquipmentremarkCreateBulkParams,
  EquipmentremarkCreateParams,
  EquipmentremarkListResponse,
  EquipmentremarkRetrieveParams,
  EquipmentremarkTupleParams,
  EquipmentremarkTupleResponse,
  Equipmentremarks,
} from './resources/equipmentremarks';
import {
  EventEvolution,
  EventEvolutionCountParams,
  EventEvolutionCountResponse,
  EventEvolutionCreateBulkParams,
  EventEvolutionCreateParams,
  EventEvolutionListParams,
  EventEvolutionListResponse,
} from './resources/event-evolution';
import { GroundImagery, GroundImageryCreateParams } from './resources/ground-imagery';
import { H3geo, H3geoCreateParams } from './resources/h3geo';
import { IonoObservationCreateParams, IonoObservations } from './resources/iono-observations';
import { IsrCollectionCreateParams, IsrCollections } from './resources/isr-collections';
import { ItemTrackingCreateParams, ItemTrackings } from './resources/item-trackings';
import { ItemCreateParams, Items } from './resources/items';
import { LaunchEventCreateParams, LaunchEvents } from './resources/launch-events';
import { LogisticsSupportCreateParams, LogisticsSupports } from './resources/logistics-supports';
import { ManeuverCreateParams, Maneuvers } from './resources/maneuvers';
import { MissileTrackCreateParams, MissileTracks } from './resources/missile-tracks';
import { UdlSar, UdlSarCreateParams } from './resources/udl-sar';
import { UdlSensorplan, UdlSensorplanCreateParams } from './resources/udl-sensorplan';
import { UdlSgi, UdlSgiCreateParams } from './resources/udl-sgi';
import { UdlSigact, UdlSigactCreateParams } from './resources/udl-sigact';
import { UdlSigactText, UdlSigactTextCreateParams } from './resources/udl-sigact-text';
import { UdlSkyimagery, UdlSkyimageryCreateParams } from './resources/udl-skyimagery';
import { UdlSoiobservationset, UdlSoiobservationsetCreateParams } from './resources/udl-soiobservationset';
import { UdlSortieppr, UdlSortiepprCreateParams } from './resources/udl-sortieppr';
import { UdlSpaceenvobCreateParams, UdlSpaceenvobs } from './resources/udl-spaceenvobs';
import { UdlStarcatalog, UdlStarcatalogCreateParams } from './resources/udl-starcatalog';
import { AirOperations } from './resources/air-operations/air-operations';
import {
  AirTransportMissionAbridged,
  AirTransportMissionCountParams,
  AirTransportMissionCountResponse,
  AirTransportMissionCreateParams,
  AirTransportMissionListParams,
  AirTransportMissionListResponse,
  AirTransportMissionRetrieveParams,
  AirTransportMissionTupleParams,
  AirTransportMissionTupleResponse,
  AirTransportMissionUpdateParams,
  AirTransportMissions,
} from './resources/air-transport-missions/air-transport-missions';
import {
  AircraftStatusCountResponse,
  AircraftStatusCreateParams,
  AircraftStatusListResponse,
  AircraftStatuses,
  AircraftstatusAbridged,
} from './resources/aircraft-statuses/aircraft-statuses';
import {
  Airfieldstatus,
  AirfieldstatusAbridged,
  AirfieldstatusCountResponse,
  AirfieldstatusCreateParams,
  AirfieldstatusFull,
  AirfieldstatusListResponse,
} from './resources/airfieldstatus/airfieldstatus';
import {
  AICountParams,
  AICountResponse,
  AICreateBulkParams,
  AIHistoryCountParams,
  AIHistoryCountResponse,
  AIListParams,
  AIListResponse,
  AITupleParams,
  AITupleResponse,
  AIs,
  AIsAbridged,
} from './resources/ais/ais';
import {
  AttitudeSetCountParams,
  AttitudeSetCountResponse,
  AttitudeSetCreateParams,
  AttitudeSetListParams,
  AttitudeSetListResponse,
  AttitudeSetTupleParams,
  AttitudeSetTupleResponse,
  AttitudeSets,
  AttitudesetAbridged,
} from './resources/attitude-sets/attitude-sets';
import {
  CollectRequestAbridged,
  CollectRequestCountParams,
  CollectRequestCountResponse,
  CollectRequestCreateBulkParams,
  CollectRequestCreateParams,
  CollectRequestListParams,
  CollectRequestListResponse,
  CollectRequestRetrieveParams,
  CollectRequestTupleParams,
  CollectRequestTupleResponse,
  CollectRequests,
} from './resources/collect-requests/collect-requests';
import {
  CollectResponseAbridged,
  CollectResponseCountParams,
  CollectResponseCountResponse,
  CollectResponseCreateBulkParams,
  CollectResponseCreateParams,
  CollectResponseListParams,
  CollectResponseListResponse,
  CollectResponseRetrieveParams,
  CollectResponses,
} from './resources/collect-responses/collect-responses';
import {
  ConjunctionAbridged,
  ConjunctionCreateParams as ConjunctionsAPIConjunctionCreateParams,
  ConjunctionFull,
  ConjunctionRetrieveParams,
  ConjunctionTupleParams,
  ConjunctionTupleResponse,
  Conjunctions,
} from './resources/conjunctions/conjunctions';
import {
  Diffofarrival,
  DiffofarrivalCreateParams,
  DiffofarrivalRetrieveParams,
  DiffofarrivalTupleParams,
  DiffofarrivalTupleResponse,
} from './resources/diffofarrival/diffofarrival';
import {
  DiplomaticClearance,
  DiplomaticClearanceCountParams,
  DiplomaticClearanceCountResponse,
  DiplomaticClearanceCreateBulkParams,
  DiplomaticClearanceCreateParams as DiplomaticClearanceAPIDiplomaticClearanceCreateParams,
  DiplomaticClearanceDeleteParams,
  DiplomaticClearanceListParams,
  DiplomaticClearanceListResponse,
  DiplomaticClearanceRetrieveParams,
  DiplomaticClearanceTupleParams,
  DiplomaticClearanceTupleResponse,
  DiplomaticClearanceUpdateParams,
} from './resources/diplomatic-clearance/diplomatic-clearance';
import {
  EffectRequestCountParams,
  EffectRequestCountResponse,
  EffectRequestCreateBulkParams,
  EffectRequestHistoryCountParams,
  EffectRequestHistoryCountResponse,
  EffectRequestRetrieveParams,
  EffectRequestTupleParams,
  EffectRequestTupleResponse,
  EffectRequests,
} from './resources/effect-requests/effect-requests';
import {
  EffectResponseCountParams,
  EffectResponseCountResponse,
  EffectResponseCreateBulkParams,
  EffectResponseCreateParams,
  EffectResponseListParams,
  EffectResponseListResponse,
  EffectResponseRetrieveParams,
  EffectResponseTupleParams,
  EffectResponseTupleResponse,
  EffectResponses,
} from './resources/effect-responses/effect-responses';
import {
  Elset as ElsetsAPIElset,
  ElsetAbridged,
  ElsetCountParams,
  ElsetCountResponse,
  ElsetCreateBulkFromTleParams,
  ElsetCreateBulkParams,
  ElsetCreateParams,
  ElsetListParams,
  ElsetListResponse,
  ElsetRetrieveParams,
  ElsetTupleParams,
  ElsetTupleResponse,
  Elsets,
} from './resources/elsets/elsets';
import {
  EoObservationAbridged,
  EoObservationCountParams,
  EoObservationCountResponse,
  EoObservationCreateBulkParams,
  EoObservationCreateParams,
  EoObservationListParams,
  EoObservationListResponse,
  EoObservations,
} from './resources/eo-observations/eo-observations';
import {
  Eop,
  EopAbridged,
  EopCountParams,
  EopCountResponse,
  EopCreateParams,
  EopListParams as EopAPIEopListParams,
  EopListResponse as EopAPIEopListResponse,
} from './resources/eop/eop';
import {
  EphemerisSet,
  EphemerisSetAbridged,
  EphemerisSetCountParams,
  EphemerisSetCountResponse,
  EphemerisSetCreateParams,
  EphemerisSetFileRetrieveParams,
  EphemerisSetListParams,
  EphemerisSetListResponse,
  EphemerisSetRetrieveParams,
  EphemerisSetTupleParams,
  EphemerisSetTupleResponse,
  EphemerisSets,
} from './resources/ephemeris-sets/ephemeris-sets';
import {
  Ephemeris,
  EphemerisAbridged,
  EphemerisCountParams,
  EphemerisCountResponse,
  EphemerisListParams,
  EphemerisListResponse,
} from './resources/ephemeris/ephemeris';
import {
  Evac,
  EvacAbridged,
  EvacCountParams,
  EvacCountResponse,
  EvacCreateBulkParams,
  EvacCreateParams,
  EvacListParams,
  EvacListResponse,
  EvacRetrieveParams,
} from './resources/evac/evac';
import {
  EventEvolutionAbridged,
  EventevolutionRetrieveParams,
  EventevolutionTupleParams,
  EventevolutionTupleResponse,
  Eventevolutions,
} from './resources/eventevolutions/eventevolutions';
import { Filedrop } from './resources/filedrop/filedrop';
import {
  FlightPlanAbridged,
  FlightplanCountResponse,
  FlightplanCreateParams,
  FlightplanListResponse,
  Flightplans,
} from './resources/flightplans/flightplans';
import { LinkStatus } from './resources/link-status/link-status';
import { MissionOps } from './resources/mission-ops/mission-ops';
import { Observations } from './resources/observations/observations';
import { Onorbit } from './resources/onorbit/onorbit';
import { SupportingData } from './resources/supporting-data/supporting-data';
import { TdoaFdoa } from './resources/tdoa-fdoa/tdoa-fdoa';

export interface ClientOptions {
  /**
   * Username for HTTP Basic Authentication
   */
  username?: string | undefined;

  /**
   * Password for HTTP Basic Authentication
   */
  password?: string | undefined;

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
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Unifieddatalibrary API.
 */
export class Unifieddatalibrary extends Core.APIClient {
  username: string;
  password: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Unifieddatalibrary API.
   *
   * @param {string | undefined} [opts.username=process.env['HTTP_BASIC_AUTH_USERNAME'] ?? undefined]
   * @param {string | undefined} [opts.password=process.env['HTTP_BASIC_AUTH_PASSWORD'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['UNIFIEDDATALIBRARY_BASE_URL'] ?? https://unifieddatalibrary.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('UNIFIEDDATALIBRARY_BASE_URL'),
    username = Core.readEnv('HTTP_BASIC_AUTH_USERNAME'),
    password = Core.readEnv('HTTP_BASIC_AUTH_PASSWORD'),
    ...opts
  }: ClientOptions = {}) {
    if (username === undefined) {
      throw new Errors.UnifieddatalibraryError(
        "The HTTP_BASIC_AUTH_USERNAME environment variable is missing or empty; either provide it, or instantiate the Unifieddatalibrary client with an username option, like new Unifieddatalibrary({ username: 'My Username' }).",
      );
    }
    if (password === undefined) {
      throw new Errors.UnifieddatalibraryError(
        "The HTTP_BASIC_AUTH_PASSWORD environment variable is missing or empty; either provide it, or instantiate the Unifieddatalibrary client with an password option, like new Unifieddatalibrary({ password: 'My Password' }).",
      );
    }

    const options: ClientOptions = {
      username,
      password,
      ...opts,
      baseURL: baseURL || `https://unifieddatalibrary.com`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.username = username;
    this.password = password;
  }

  conjunctions: API.Conjunctions = new API.Conjunctions(this);
  airOperations: API.AirOperations = new API.AirOperations(this);
  ephemerides: API.Ephemerides = new API.Ephemerides(this);
  observations: API.Observations = new API.Observations(this);
  aisObjects: API.AIsObjects = new API.AIsObjects(this);
  analyticImagery: API.AnalyticImagery = new API.AnalyticImagery(this);
  attitudeset: API.Attitudeset = new API.Attitudeset(this);
  collectRequests: API.CollectRequests = new API.CollectRequests(this);
  collectResponses: API.CollectResponses = new API.CollectResponses(this);
  crew: API.Crew = new API.Crew(this);
  datalinks: API.Datalinks = new API.Datalinks(this);
  diffofarrival: API.Diffofarrival = new API.Diffofarrival(this);
  diplomaticClearances: API.DiplomaticClearances = new API.DiplomaticClearances(this);
  ecpsdr: API.Ecpsdr = new API.Ecpsdr(this);
  filedrop: API.Filedrop = new API.Filedrop(this);
  groundImagery: API.GroundImagery = new API.GroundImagery(this);
  h3geo: API.H3geo = new API.H3geo(this);
  ionoObservations: API.IonoObservations = new API.IonoObservations(this);
  isrCollections: API.IsrCollections = new API.IsrCollections(this);
  items: API.Items = new API.Items(this);
  itemTrackings: API.ItemTrackings = new API.ItemTrackings(this);
  launchEvents: API.LaunchEvents = new API.LaunchEvents(this);
  logisticsSupports: API.LogisticsSupports = new API.LogisticsSupports(this);
  maneuvers: API.Maneuvers = new API.Maneuvers(this);
  missileTracks: API.MissileTracks = new API.MissileTracks(this);
  udlSar: API.UdlSar = new API.UdlSar(this);
  udlSensorplan: API.UdlSensorplan = new API.UdlSensorplan(this);
  udlSgi: API.UdlSgi = new API.UdlSgi(this);
  udlSigact: API.UdlSigact = new API.UdlSigact(this);
  udlSigactText: API.UdlSigactText = new API.UdlSigactText(this);
  udlSkyimagery: API.UdlSkyimagery = new API.UdlSkyimagery(this);
  udlSoiobservationset: API.UdlSoiobservationset = new API.UdlSoiobservationset(this);
  udlSortieppr: API.UdlSortieppr = new API.UdlSortieppr(this);
  udlSpaceenvobs: API.UdlSpaceenvobs = new API.UdlSpaceenvobs(this);
  udlStarcatalog: API.UdlStarcatalog = new API.UdlStarcatalog(this);
  aircraft: API.Aircraft = new API.Aircraft(this);
  aircraftSorties: API.AircraftSorties = new API.AircraftSorties(this);
  aircraftStatuses: API.AircraftStatuses = new API.AircraftStatuses(this);
  aircraftStatus: API.AircraftStatus = new API.AircraftStatus(this);
  aircraftStatusRemarks: API.AircraftStatusRemarks = new API.AircraftStatusRemarks(this);
  airEvents: API.AirEvents = new API.AirEvents(this);
  airfields: API.Airfields = new API.Airfields(this);
  airfieldSlots: API.AirfieldSlots = new API.AirfieldSlots(this);
  airfieldslots: API.Airfieldslots = new API.Airfieldslots(this);
  airfieldslotconsumptions: API.Airfieldslotconsumptions = new API.Airfieldslotconsumptions(this);
  airfieldslotconsumption: API.Airfieldslotconsumption = new API.Airfieldslotconsumption(this);
  airfieldstatus: API.Airfieldstatus = new API.Airfieldstatus(this);
  airfieldStatus: API.AirfieldStatus = new API.AirfieldStatus(this);
  airLoadPlans: API.AirLoadPlans = new API.AirLoadPlans(this);
  airloadplans: API.Airloadplans = new API.Airloadplans(this);
  airspaceControlOrders: API.AirspaceControlOrders = new API.AirspaceControlOrders(this);
  airtaskingorders: API.Airtaskingorders = new API.Airtaskingorders(this);
  airTaskingOrders: API.AirTaskingOrders = new API.AirTaskingOrders(this);
  airTransportMissions: API.AirTransportMissions = new API.AirTransportMissions(this);
  ais: API.AIs = new API.AIs(this);
  antennas: API.Antennas = new API.Antennas(this);
  onorbit: API.Onorbit = new API.Onorbit(this);
  ephemeris: API.Ephemeris = new API.Ephemeris(this);
  attitudeData: API.AttitudeData = new API.AttitudeData(this);
  attitudeSets: API.AttitudeSets = new API.AttitudeSets(this);
  attitudesets: API.Attitudesets = new API.Attitudesets(this);
  batteries: API.Batteries = new API.Batteries(this);
  batterydetails: API.Batterydetails = new API.Batterydetails(this);
  beam: API.Beam = new API.Beam(this);
  beams: API.Beams = new API.Beams(this);
  beamContours: API.BeamContours = new API.BeamContours(this);
  buses: API.Buses = new API.Buses(this);
  channels: API.Channels = new API.Channels(this);
  comms: API.Comms = new API.Comms(this);
  comm: API.Comm = new API.Comm(this);
  conjunction: API.Conjunction = new API.Conjunction(this);
  cots: API.Cots = new API.Cots(this);
  countries: API.Countries = new API.Countries(this);
  elset: API.Elset = new API.Elset(this);
  linkStatus: API.LinkStatus = new API.LinkStatus(this);
  supportingData: API.SupportingData = new API.SupportingData(this);
  tdoaFdoa: API.TdoaFdoa = new API.TdoaFdoa(this);
  diplomaticClearance: API.DiplomaticClearance = new API.DiplomaticClearance(this);
  driftHistory: API.DriftHistory = new API.DriftHistory(this);
  driftHistories: API.DriftHistories = new API.DriftHistories(this);
  missionOps: API.MissionOps = new API.MissionOps(this);
  effectRequests: API.EffectRequests = new API.EffectRequests(this);
  effectResponses: API.EffectResponses = new API.EffectResponses(this);
  elsets: API.Elsets = new API.Elsets(this);
  engines: API.Engines = new API.Engines(this);
  enginedetails: API.Enginedetails = new API.Enginedetails(this);
  engineDetails: API.EngineDetails = new API.EngineDetails(this);
  entities: API.Entities = new API.Entities(this);
  eoObservations: API.EoObservations = new API.EoObservations(this);
  eoobservations: API.Eoobservations = new API.Eoobservations(this);
  eop: API.Eop = new API.Eop(this);
  eops: API.Eops = new API.Eops(this);
  ephemerisSets: API.EphemerisSets = new API.EphemerisSets(this);
  equipment: API.Equipment = new API.Equipment(this);
  equipmentremarks: API.Equipmentremarks = new API.Equipmentremarks(this);
  evac: API.Evac = new API.Evac(this);
  eventEvolution: API.EventEvolution = new API.EventEvolution(this);
  eventevolutions: API.Eventevolutions = new API.Eventevolutions(this);
  flightplans: API.Flightplans = new API.Flightplans(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    if (!this.username) {
      return {};
    }

    if (!this.password) {
      return {};
    }

    const credentials = `${this.username}:${this.password}`;
    const Authorization = `Basic ${Core.toBase64(credentials)}`;
    return { Authorization };
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
  static fileFromPath = Uploads.fileFromPath;
}

Unifieddatalibrary.Conjunctions = Conjunctions;
Unifieddatalibrary.AirOperations = AirOperations;
Unifieddatalibrary.Ephemerides = Ephemerides;
Unifieddatalibrary.Observations = Observations;
Unifieddatalibrary.AIsObjects = AIsObjects;
Unifieddatalibrary.AnalyticImagery = AnalyticImagery;
Unifieddatalibrary.Attitudeset = Attitudeset;
Unifieddatalibrary.CollectRequests = CollectRequests;
Unifieddatalibrary.CollectResponses = CollectResponses;
Unifieddatalibrary.Crew = Crew;
Unifieddatalibrary.Datalinks = Datalinks;
Unifieddatalibrary.Diffofarrival = Diffofarrival;
Unifieddatalibrary.DiplomaticClearances = DiplomaticClearances;
Unifieddatalibrary.Ecpsdr = Ecpsdr;
Unifieddatalibrary.Filedrop = Filedrop;
Unifieddatalibrary.GroundImagery = GroundImagery;
Unifieddatalibrary.H3geo = H3geo;
Unifieddatalibrary.IonoObservations = IonoObservations;
Unifieddatalibrary.IsrCollections = IsrCollections;
Unifieddatalibrary.Items = Items;
Unifieddatalibrary.ItemTrackings = ItemTrackings;
Unifieddatalibrary.LaunchEvents = LaunchEvents;
Unifieddatalibrary.LogisticsSupports = LogisticsSupports;
Unifieddatalibrary.Maneuvers = Maneuvers;
Unifieddatalibrary.MissileTracks = MissileTracks;
Unifieddatalibrary.UdlSar = UdlSar;
Unifieddatalibrary.UdlSensorplan = UdlSensorplan;
Unifieddatalibrary.UdlSgi = UdlSgi;
Unifieddatalibrary.UdlSigact = UdlSigact;
Unifieddatalibrary.UdlSigactText = UdlSigactText;
Unifieddatalibrary.UdlSkyimagery = UdlSkyimagery;
Unifieddatalibrary.UdlSoiobservationset = UdlSoiobservationset;
Unifieddatalibrary.UdlSortieppr = UdlSortieppr;
Unifieddatalibrary.UdlSpaceenvobs = UdlSpaceenvobs;
Unifieddatalibrary.UdlStarcatalog = UdlStarcatalog;
Unifieddatalibrary.Aircraft = Aircraft;
Unifieddatalibrary.AircraftSorties = AircraftSorties;
Unifieddatalibrary.AircraftStatuses = AircraftStatuses;
Unifieddatalibrary.AircraftStatus = AircraftStatus;
Unifieddatalibrary.AircraftStatusRemarks = AircraftStatusRemarks;
Unifieddatalibrary.AirEvents = AirEvents;
Unifieddatalibrary.Airfields = Airfields;
Unifieddatalibrary.AirfieldSlots = AirfieldSlots;
Unifieddatalibrary.Airfieldslots = Airfieldslots;
Unifieddatalibrary.Airfieldslotconsumptions = Airfieldslotconsumptions;
Unifieddatalibrary.Airfieldslotconsumption = Airfieldslotconsumption;
Unifieddatalibrary.Airfieldstatus = Airfieldstatus;
Unifieddatalibrary.AirfieldStatus = AirfieldStatus;
Unifieddatalibrary.AirLoadPlans = AirLoadPlans;
Unifieddatalibrary.Airloadplans = Airloadplans;
Unifieddatalibrary.AirspaceControlOrders = AirspaceControlOrders;
Unifieddatalibrary.Airtaskingorders = Airtaskingorders;
Unifieddatalibrary.AirTaskingOrders = AirTaskingOrders;
Unifieddatalibrary.AirTransportMissions = AirTransportMissions;
Unifieddatalibrary.AIs = AIs;
Unifieddatalibrary.Antennas = Antennas;
Unifieddatalibrary.Onorbit = Onorbit;
Unifieddatalibrary.Ephemeris = Ephemeris;
Unifieddatalibrary.AttitudeData = AttitudeData;
Unifieddatalibrary.AttitudeSets = AttitudeSets;
Unifieddatalibrary.Attitudesets = Attitudesets;
Unifieddatalibrary.Batteries = Batteries;
Unifieddatalibrary.Batterydetails = Batterydetails;
Unifieddatalibrary.Beam = Beam;
Unifieddatalibrary.Beams = Beams;
Unifieddatalibrary.BeamContours = BeamContours;
Unifieddatalibrary.Buses = Buses;
Unifieddatalibrary.Channels = Channels;
Unifieddatalibrary.Comms = Comms;
Unifieddatalibrary.Comm = Comm;
Unifieddatalibrary.Conjunction = Conjunction;
Unifieddatalibrary.Cots = Cots;
Unifieddatalibrary.Countries = Countries;
Unifieddatalibrary.Elset = Elset;
Unifieddatalibrary.LinkStatus = LinkStatus;
Unifieddatalibrary.SupportingData = SupportingData;
Unifieddatalibrary.TdoaFdoa = TdoaFdoa;
Unifieddatalibrary.DiplomaticClearance = DiplomaticClearance;
Unifieddatalibrary.DriftHistory = DriftHistoryAPIDriftHistory;
Unifieddatalibrary.DriftHistories = DriftHistories;
Unifieddatalibrary.MissionOps = MissionOps;
Unifieddatalibrary.EffectRequests = EffectRequests;
Unifieddatalibrary.EffectResponses = EffectResponses;
Unifieddatalibrary.Elsets = Elsets;
Unifieddatalibrary.Engines = Engines;
Unifieddatalibrary.Enginedetails = Enginedetails;
Unifieddatalibrary.EngineDetails = EngineDetails;
Unifieddatalibrary.Entities = Entities;
Unifieddatalibrary.EoObservations = EoObservations;
Unifieddatalibrary.Eoobservations = Eoobservations;
Unifieddatalibrary.Eop = Eop;
Unifieddatalibrary.Eops = Eops;
Unifieddatalibrary.EphemerisSets = EphemerisSets;
Unifieddatalibrary.Equipment = Equipment;
Unifieddatalibrary.Equipmentremarks = Equipmentremarks;
Unifieddatalibrary.Evac = Evac;
Unifieddatalibrary.EventEvolution = EventEvolution;
Unifieddatalibrary.Eventevolutions = Eventevolutions;
Unifieddatalibrary.Flightplans = Flightplans;
export declare namespace Unifieddatalibrary {
  export type RequestOptions = Core.RequestOptions;

  export {
    Conjunctions as Conjunctions,
    type ConjunctionAbridged as ConjunctionAbridged,
    type ConjunctionFull as ConjunctionFull,
    type ConjunctionTupleResponse as ConjunctionTupleResponse,
    type ConjunctionsAPIConjunctionCreateParams as ConjunctionCreateParams,
    type ConjunctionRetrieveParams as ConjunctionRetrieveParams,
    type ConjunctionTupleParams as ConjunctionTupleParams,
  };

  export { AirOperations as AirOperations };

  export { Ephemerides as Ephemerides, type EphemerideCreateParams as EphemerideCreateParams };

  export { Observations as Observations };

  export { AIsObjects as AIsObjects, type AIsObjectCreateParams as AIsObjectCreateParams };

  export {
    AnalyticImagery as AnalyticImagery,
    type AnalyticImageryAbridged as AnalyticImageryAbridged,
    type AnalyticImageryFull as AnalyticImageryFull,
    type AnalyticImageryListResponse as AnalyticImageryListResponse,
    type AnalyticImageryCountResponse as AnalyticImageryCountResponse,
    type AnalyticImageryHistoryResponse as AnalyticImageryHistoryResponse,
    type AnalyticImageryHistoryCountResponse as AnalyticImageryHistoryCountResponse,
    type AnalyticImageryTupleResponse as AnalyticImageryTupleResponse,
    type AnalyticImageryCreateParams as AnalyticImageryCreateParams,
    type AnalyticImageryRetrieveParams as AnalyticImageryRetrieveParams,
    type AnalyticImageryListParams as AnalyticImageryListParams,
    type AnalyticImageryCountParams as AnalyticImageryCountParams,
    type AnalyticImageryHistoryParams as AnalyticImageryHistoryParams,
    type AnalyticImageryHistoryAodrParams as AnalyticImageryHistoryAodrParams,
    type AnalyticImageryHistoryCountParams as AnalyticImageryHistoryCountParams,
    type AnalyticImageryTupleParams as AnalyticImageryTupleParams,
  };

  export { Attitudeset as Attitudeset, type AttitudesetCreateParams as AttitudesetCreateParams };

  export {
    CollectRequests as CollectRequests,
    type CollectRequestAbridged as CollectRequestAbridged,
    type CollectRequestListResponse as CollectRequestListResponse,
    type CollectRequestCountResponse as CollectRequestCountResponse,
    type CollectRequestTupleResponse as CollectRequestTupleResponse,
    type CollectRequestCreateParams as CollectRequestCreateParams,
    type CollectRequestRetrieveParams as CollectRequestRetrieveParams,
    type CollectRequestListParams as CollectRequestListParams,
    type CollectRequestCountParams as CollectRequestCountParams,
    type CollectRequestCreateBulkParams as CollectRequestCreateBulkParams,
    type CollectRequestTupleParams as CollectRequestTupleParams,
  };

  export {
    CollectResponses as CollectResponses,
    type CollectResponseAbridged as CollectResponseAbridged,
    type CollectResponseListResponse as CollectResponseListResponse,
    type CollectResponseCountResponse as CollectResponseCountResponse,
    type CollectResponseCreateParams as CollectResponseCreateParams,
    type CollectResponseRetrieveParams as CollectResponseRetrieveParams,
    type CollectResponseListParams as CollectResponseListParams,
    type CollectResponseCountParams as CollectResponseCountParams,
    type CollectResponseCreateBulkParams as CollectResponseCreateBulkParams,
  };

  export {
    Crew as Crew,
    type CrewAbridged as CrewAbridged,
    type CrewFull as CrewFull,
    type CrewListResponse as CrewListResponse,
    type CrewCountResponse as CrewCountResponse,
    type CrewTupleResponse as CrewTupleResponse,
    type CrewCreateParams as CrewCreateParams,
    type CrewRetrieveParams as CrewRetrieveParams,
    type CrewUpdateParams as CrewUpdateParams,
    type CrewTupleParams as CrewTupleParams,
  };

  export { Datalinks as Datalinks, type DatalinkCreateParams as DatalinkCreateParams };

  export {
    Diffofarrival as Diffofarrival,
    type DiffofarrivalTupleResponse as DiffofarrivalTupleResponse,
    type DiffofarrivalCreateParams as DiffofarrivalCreateParams,
    type DiffofarrivalRetrieveParams as DiffofarrivalRetrieveParams,
    type DiffofarrivalTupleParams as DiffofarrivalTupleParams,
  };

  export {
    DiplomaticClearances as DiplomaticClearances,
    type DiplomaticClearanceCreateParams as DiplomaticClearanceCreateParams,
  };

  export { Ecpsdr as Ecpsdr, type EcpsdrCreateParams as EcpsdrCreateParams };

  export { Filedrop as Filedrop };

  export { GroundImagery as GroundImagery, type GroundImageryCreateParams as GroundImageryCreateParams };

  export { H3geo as H3geo, type H3geoCreateParams as H3geoCreateParams };

  export {
    IonoObservations as IonoObservations,
    type IonoObservationCreateParams as IonoObservationCreateParams,
  };

  export { IsrCollections as IsrCollections, type IsrCollectionCreateParams as IsrCollectionCreateParams };

  export { Items as Items, type ItemCreateParams as ItemCreateParams };

  export { ItemTrackings as ItemTrackings, type ItemTrackingCreateParams as ItemTrackingCreateParams };

  export { LaunchEvents as LaunchEvents, type LaunchEventCreateParams as LaunchEventCreateParams };

  export {
    LogisticsSupports as LogisticsSupports,
    type LogisticsSupportCreateParams as LogisticsSupportCreateParams,
  };

  export { Maneuvers as Maneuvers, type ManeuverCreateParams as ManeuverCreateParams };

  export { MissileTracks as MissileTracks, type MissileTrackCreateParams as MissileTrackCreateParams };

  export { UdlSar as UdlSar, type UdlSarCreateParams as UdlSarCreateParams };

  export { UdlSensorplan as UdlSensorplan, type UdlSensorplanCreateParams as UdlSensorplanCreateParams };

  export { UdlSgi as UdlSgi, type UdlSgiCreateParams as UdlSgiCreateParams };

  export { UdlSigact as UdlSigact, type UdlSigactCreateParams as UdlSigactCreateParams };

  export { UdlSigactText as UdlSigactText, type UdlSigactTextCreateParams as UdlSigactTextCreateParams };

  export { UdlSkyimagery as UdlSkyimagery, type UdlSkyimageryCreateParams as UdlSkyimageryCreateParams };

  export {
    UdlSoiobservationset as UdlSoiobservationset,
    type UdlSoiobservationsetCreateParams as UdlSoiobservationsetCreateParams,
  };

  export { UdlSortieppr as UdlSortieppr, type UdlSortiepprCreateParams as UdlSortiepprCreateParams };

  export { UdlSpaceenvobs as UdlSpaceenvobs, type UdlSpaceenvobCreateParams as UdlSpaceenvobCreateParams };

  export { UdlStarcatalog as UdlStarcatalog, type UdlStarcatalogCreateParams as UdlStarcatalogCreateParams };

  export {
    Aircraft as Aircraft,
    type AircraftAbridged as AircraftAbridged,
    type AircraftFull as AircraftFull,
    type AircraftListResponse as AircraftListResponse,
    type AircraftCountResponse as AircraftCountResponse,
    type AircraftTupleQueryResponse as AircraftTupleQueryResponse,
    type AircraftCreateParams as AircraftCreateParams,
    type AircraftRetrieveParams as AircraftRetrieveParams,
    type AircraftUpdateParams as AircraftUpdateParams,
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
    AircraftStatuses as AircraftStatuses,
    type AircraftstatusAbridged as AircraftstatusAbridged,
    type AircraftStatusListResponse as AircraftStatusListResponse,
    type AircraftStatusCountResponse as AircraftStatusCountResponse,
    type AircraftStatusCreateParams as AircraftStatusCreateParams,
  };

  export {
    AircraftStatus as AircraftStatus,
    type AircraftStatusTupleResponse as AircraftStatusTupleResponse,
    type AircraftStatusRetrieveParams as AircraftStatusRetrieveParams,
    type AircraftStatusUpdateParams as AircraftStatusUpdateParams,
    type AircraftStatusDeleteParams as AircraftStatusDeleteParams,
    type AircraftStatusTupleParams as AircraftStatusTupleParams,
  };

  export {
    AircraftStatusRemarks as AircraftStatusRemarks,
    type AircraftstatusremarkAbridged as AircraftstatusremarkAbridged,
    type AircraftstatusremarkFull as AircraftstatusremarkFull,
    type AircraftStatusRemarkListResponse as AircraftStatusRemarkListResponse,
    type AircraftStatusRemarkCountResponse as AircraftStatusRemarkCountResponse,
    type AircraftStatusRemarkTupleResponse as AircraftStatusRemarkTupleResponse,
    type AircraftStatusRemarkCreateParams as AircraftStatusRemarkCreateParams,
    type AircraftStatusRemarkRetrieveParams as AircraftStatusRemarkRetrieveParams,
    type AircraftStatusRemarkTupleParams as AircraftStatusRemarkTupleParams,
  };

  export { AirEvents as AirEvents, type AirEventDeleteParams as AirEventDeleteParams };

  export {
    Airfields as Airfields,
    type AirfieldAbridged as AirfieldAbridged,
    type AirfieldFull as AirfieldFull,
    type AirfieldListResponse as AirfieldListResponse,
    type AirfieldCountResponse as AirfieldCountResponse,
    type AirfieldTupleResponse as AirfieldTupleResponse,
    type AirfieldCreateParams as AirfieldCreateParams,
    type AirfieldRetrieveParams as AirfieldRetrieveParams,
    type AirfieldUpdateParams as AirfieldUpdateParams,
    type AirfieldTupleParams as AirfieldTupleParams,
  };

  export {
    AirfieldSlots as AirfieldSlots,
    type AirfieldslotAbridged as AirfieldslotAbridged,
    type AirfieldslotFull as AirfieldslotFull,
    type AirfieldSlotListResponse as AirfieldSlotListResponse,
    type AirfieldSlotCreateParams as AirfieldSlotCreateParams,
  };

  export {
    Airfieldslots as Airfieldslots,
    type AirfieldslotCountResponse as AirfieldslotCountResponse,
    type AirfieldslotTupleResponse as AirfieldslotTupleResponse,
    type AirfieldslotRetrieveParams as AirfieldslotRetrieveParams,
    type AirfieldslotUpdateParams as AirfieldslotUpdateParams,
    type AirfieldslotDeleteParams as AirfieldslotDeleteParams,
    type AirfieldslotTupleParams as AirfieldslotTupleParams,
  };

  export {
    Airfieldslotconsumptions as Airfieldslotconsumptions,
    type AirfieldslotconsumptionAbridged as AirfieldslotconsumptionAbridged,
    type AirfieldslotconsumptionFull as AirfieldslotconsumptionFull,
    type AirfieldslotconsumptionListResponse as AirfieldslotconsumptionListResponse,
    type AirfieldslotconsumptionCountResponse as AirfieldslotconsumptionCountResponse,
    type AirfieldslotconsumptionCreateParams as AirfieldslotconsumptionCreateParams,
  };

  export {
    Airfieldslotconsumption as Airfieldslotconsumption,
    type AirfieldslotconsumptionTupleResponse as AirfieldslotconsumptionTupleResponse,
    type AirfieldslotconsumptionRetrieveParams as AirfieldslotconsumptionRetrieveParams,
    type AirfieldslotconsumptionUpdateParams as AirfieldslotconsumptionUpdateParams,
    type AirfieldslotconsumptionDeleteParams as AirfieldslotconsumptionDeleteParams,
    type AirfieldslotconsumptionTupleParams as AirfieldslotconsumptionTupleParams,
  };

  export {
    Airfieldstatus as Airfieldstatus,
    type AirfieldstatusAbridged as AirfieldstatusAbridged,
    type AirfieldstatusFull as AirfieldstatusFull,
    type AirfieldstatusListResponse as AirfieldstatusListResponse,
    type AirfieldstatusCountResponse as AirfieldstatusCountResponse,
    type AirfieldstatusCreateParams as AirfieldstatusCreateParams,
  };

  export {
    AirfieldStatus as AirfieldStatus,
    type AirfieldStatusTupleResponse as AirfieldStatusTupleResponse,
    type AirfieldStatusRetrieveParams as AirfieldStatusRetrieveParams,
    type AirfieldStatusUpdateParams as AirfieldStatusUpdateParams,
    type AirfieldStatusDeleteParams as AirfieldStatusDeleteParams,
    type AirfieldStatusTupleParams as AirfieldStatusTupleParams,
  };

  export {
    AirLoadPlans as AirLoadPlans,
    type AirloadplanAbridged as AirloadplanAbridged,
    type AirloadplanFull as AirloadplanFull,
    type AirLoadPlanListResponse as AirLoadPlanListResponse,
    type AirLoadPlanCountResponse as AirLoadPlanCountResponse,
    type AirLoadPlanTupleResponse as AirLoadPlanTupleResponse,
    type AirLoadPlanCreateParams as AirLoadPlanCreateParams,
    type AirLoadPlanRetrieveParams as AirLoadPlanRetrieveParams,
    type AirLoadPlanListParams as AirLoadPlanListParams,
    type AirLoadPlanCountParams as AirLoadPlanCountParams,
    type AirLoadPlanTupleParams as AirLoadPlanTupleParams,
  };

  export {
    Airloadplans as Airloadplans,
    type AirloadplanUpdateParams as AirloadplanUpdateParams,
    type AirloadplanDeleteParams as AirloadplanDeleteParams,
  };

  export {
    AirspaceControlOrders as AirspaceControlOrders,
    type AirspacecontrolorderAbridged as AirspacecontrolorderAbridged,
    type AirspacecontrolorderFull as AirspacecontrolorderFull,
    type AirspaceControlOrderListResponse as AirspaceControlOrderListResponse,
    type AirspaceControlOrderCountResponse as AirspaceControlOrderCountResponse,
    type AirspaceControlOrderTupleResponse as AirspaceControlOrderTupleResponse,
    type AirspaceControlOrderCreateParams as AirspaceControlOrderCreateParams,
    type AirspaceControlOrderRetrieveParams as AirspaceControlOrderRetrieveParams,
    type AirspaceControlOrderCreateBulkParams as AirspaceControlOrderCreateBulkParams,
    type AirspaceControlOrderTupleParams as AirspaceControlOrderTupleParams,
  };

  export {
    Airtaskingorders as Airtaskingorders,
    type AirtaskingorderAbridged as AirtaskingorderAbridged,
    type AirtaskingorderListResponse as AirtaskingorderListResponse,
  };

  export {
    AirTaskingOrders as AirTaskingOrders,
    type AirTaskingOrderFull as AirTaskingOrderFull,
    type AirTaskingOrderCountResponse as AirTaskingOrderCountResponse,
    type AirTaskingOrderTupleResponse as AirTaskingOrderTupleResponse,
    type AirTaskingOrderCreateParams as AirTaskingOrderCreateParams,
    type AirTaskingOrderRetrieveParams as AirTaskingOrderRetrieveParams,
    type AirTaskingOrderTupleParams as AirTaskingOrderTupleParams,
  };

  export {
    AirTransportMissions as AirTransportMissions,
    type AirTransportMissionAbridged as AirTransportMissionAbridged,
    type AirTransportMissionListResponse as AirTransportMissionListResponse,
    type AirTransportMissionCountResponse as AirTransportMissionCountResponse,
    type AirTransportMissionTupleResponse as AirTransportMissionTupleResponse,
    type AirTransportMissionCreateParams as AirTransportMissionCreateParams,
    type AirTransportMissionRetrieveParams as AirTransportMissionRetrieveParams,
    type AirTransportMissionUpdateParams as AirTransportMissionUpdateParams,
    type AirTransportMissionListParams as AirTransportMissionListParams,
    type AirTransportMissionCountParams as AirTransportMissionCountParams,
    type AirTransportMissionTupleParams as AirTransportMissionTupleParams,
  };

  export {
    AIs as AIs,
    type AIsAbridged as AIsAbridged,
    type AIListResponse as AIListResponse,
    type AICountResponse as AICountResponse,
    type AIHistoryCountResponse as AIHistoryCountResponse,
    type AITupleResponse as AITupleResponse,
    type AIListParams as AIListParams,
    type AICountParams as AICountParams,
    type AICreateBulkParams as AICreateBulkParams,
    type AIHistoryCountParams as AIHistoryCountParams,
    type AITupleParams as AITupleParams,
  };

  export {
    Antennas as Antennas,
    type AntennaAbridged as AntennaAbridged,
    type AntennaFull as AntennaFull,
    type AntennaListResponse as AntennaListResponse,
    type AntennaCountResponse as AntennaCountResponse,
    type AntennaTupleResponse as AntennaTupleResponse,
    type AntennaCreateParams as AntennaCreateParams,
    type AntennaRetrieveParams as AntennaRetrieveParams,
    type AntennaUpdateParams as AntennaUpdateParams,
    type AntennaDeleteParams as AntennaDeleteParams,
    type AntennaTupleParams as AntennaTupleParams,
  };

  export { Onorbit as Onorbit };

  export {
    Ephemeris as Ephemeris,
    type EphemerisAbridged as EphemerisAbridged,
    type EphemerisListResponse as EphemerisListResponse,
    type EphemerisCountResponse as EphemerisCountResponse,
    type EphemerisListParams as EphemerisListParams,
    type EphemerisCountParams as EphemerisCountParams,
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
    type AttitudeSetListResponse as AttitudeSetListResponse,
    type AttitudeSetCountResponse as AttitudeSetCountResponse,
    type AttitudeSetTupleResponse as AttitudeSetTupleResponse,
    type AttitudeSetCreateParams as AttitudeSetCreateParams,
    type AttitudeSetListParams as AttitudeSetListParams,
    type AttitudeSetCountParams as AttitudeSetCountParams,
    type AttitudeSetTupleParams as AttitudeSetTupleParams,
  };

  export { Attitudesets as Attitudesets, type AttitudesetRetrieveParams as AttitudesetRetrieveParams };

  export {
    Batteries as Batteries,
    type BatteryAbridged as BatteryAbridged,
    type BatteryFull as BatteryFull,
    type BatteryListResponse as BatteryListResponse,
    type BatteryCountResponse as BatteryCountResponse,
    type BatteryTupleResponse as BatteryTupleResponse,
    type BatteryCreateParams as BatteryCreateParams,
    type BatteryRetrieveParams as BatteryRetrieveParams,
    type BatteryUpdateParams as BatteryUpdateParams,
    type BatteryDeleteParams as BatteryDeleteParams,
    type BatteryTupleParams as BatteryTupleParams,
  };

  export {
    Batterydetails as Batterydetails,
    type BatterydetailsAbridged as BatterydetailsAbridged,
    type BatterydetailsFull as BatterydetailsFull,
    type BatterydetailListResponse as BatterydetailListResponse,
    type BatterydetailCreateParams as BatterydetailCreateParams,
    type BatterydetailRetrieveParams as BatterydetailRetrieveParams,
    type BatterydetailUpdateParams as BatterydetailUpdateParams,
    type BatterydetailDeleteParams as BatterydetailDeleteParams,
  };

  export {
    Beam as Beam,
    type BeamAbridged as BeamAbridged,
    type BeamFull as BeamFull,
    type BeamListResponse as BeamListResponse,
    type BeamCountResponse as BeamCountResponse,
    type BeamTupleResponse as BeamTupleResponse,
    type BeamCreateParams as BeamCreateParams,
    type BeamRetrieveParams as BeamRetrieveParams,
    type BeamTupleParams as BeamTupleParams,
  };

  export {
    Beams as Beams,
    type BeamUpdateParams as BeamUpdateParams,
    type BeamDeleteParams as BeamDeleteParams,
  };

  export {
    BeamContours as BeamContours,
    type BeamcontourAbridged as BeamcontourAbridged,
    type BeamcontourFull as BeamcontourFull,
    type BeamContourListResponse as BeamContourListResponse,
    type BeamContourCountResponse as BeamContourCountResponse,
    type BeamContourTupleResponse as BeamContourTupleResponse,
    type BeamContourCreateParams as BeamContourCreateParams,
    type BeamContourRetrieveParams as BeamContourRetrieveParams,
    type BeamContourUpdateParams as BeamContourUpdateParams,
    type BeamContourListParams as BeamContourListParams,
    type BeamContourDeleteParams as BeamContourDeleteParams,
    type BeamContourCountParams as BeamContourCountParams,
    type BeamContourCreateBulkParams as BeamContourCreateBulkParams,
    type BeamContourTupleParams as BeamContourTupleParams,
  };

  export {
    Buses as Buses,
    type BusAbridged as BusAbridged,
    type BusFull as BusFull,
    type BusListResponse as BusListResponse,
    type BusCountResponse as BusCountResponse,
    type BusTupleResponse as BusTupleResponse,
    type BusCreateParams as BusCreateParams,
    type BusRetrieveParams as BusRetrieveParams,
    type BusUpdateParams as BusUpdateParams,
    type BusDeleteParams as BusDeleteParams,
    type BusTupleParams as BusTupleParams,
  };

  export {
    Channels as Channels,
    type ChannelAbridged as ChannelAbridged,
    type ChannelFull as ChannelFull,
    type ChannelListResponse as ChannelListResponse,
    type ChannelCountResponse as ChannelCountResponse,
    type ChannelTupleResponse as ChannelTupleResponse,
    type ChannelCreateParams as ChannelCreateParams,
    type ChannelRetrieveParams as ChannelRetrieveParams,
    type ChannelUpdateParams as ChannelUpdateParams,
    type ChannelDeleteParams as ChannelDeleteParams,
    type ChannelTupleParams as ChannelTupleParams,
  };

  export {
    Comms as Comms,
    type CommListResponse as CommListResponse,
    type CommCountResponse as CommCountResponse,
    type CommCreateParams as CommCreateParams,
  };

  export {
    Comm as Comm,
    type CommAbridged as CommAbridged,
    type CommFull as CommFull,
    type CommTupleResponse as CommTupleResponse,
    type CommRetrieveParams as CommRetrieveParams,
    type CommUpdateParams as CommUpdateParams,
    type CommDeleteParams as CommDeleteParams,
    type CommTupleParams as CommTupleParams,
  };

  export {
    Conjunction as Conjunction,
    type ConjunctionListResponse as ConjunctionListResponse,
    type ConjunctionCountResponse as ConjunctionCountResponse,
    type ConjunctionHistoryResponse as ConjunctionHistoryResponse,
    type ConjunctionCreateParams as ConjunctionCreateParams,
    type ConjunctionListParams as ConjunctionListParams,
    type ConjunctionCountParams as ConjunctionCountParams,
    type ConjunctionCreateBulkParams as ConjunctionCreateBulkParams,
    type ConjunctionHistoryParams as ConjunctionHistoryParams,
  };

  export { Cots as Cots, type CotCreateParams as CotCreateParams };

  export {
    Countries as Countries,
    type CountryAbridged as CountryAbridged,
    type CountryFull as CountryFull,
    type CountryListResponse as CountryListResponse,
    type CountryCountResponse as CountryCountResponse,
    type CountryTupleResponse as CountryTupleResponse,
    type CountryCreateParams as CountryCreateParams,
    type CountryRetrieveParams as CountryRetrieveParams,
    type CountryUpdateParams as CountryUpdateParams,
    type CountryDeleteParams as CountryDeleteParams,
    type CountryTupleParams as CountryTupleParams,
  };

  export { Elset as Elset };

  export { LinkStatus as LinkStatus };

  export { SupportingData as SupportingData };

  export { TdoaFdoa as TdoaFdoa };

  export {
    DiplomaticClearance as DiplomaticClearance,
    type DiplomaticClearanceListResponse as DiplomaticClearanceListResponse,
    type DiplomaticClearanceCountResponse as DiplomaticClearanceCountResponse,
    type DiplomaticClearanceTupleResponse as DiplomaticClearanceTupleResponse,
    type DiplomaticClearanceAPIDiplomaticClearanceCreateParams as DiplomaticClearanceCreateParams,
    type DiplomaticClearanceRetrieveParams as DiplomaticClearanceRetrieveParams,
    type DiplomaticClearanceUpdateParams as DiplomaticClearanceUpdateParams,
    type DiplomaticClearanceListParams as DiplomaticClearanceListParams,
    type DiplomaticClearanceDeleteParams as DiplomaticClearanceDeleteParams,
    type DiplomaticClearanceCountParams as DiplomaticClearanceCountParams,
    type DiplomaticClearanceCreateBulkParams as DiplomaticClearanceCreateBulkParams,
    type DiplomaticClearanceTupleParams as DiplomaticClearanceTupleParams,
  };

  export {
    DriftHistoryAPIDriftHistory as DriftHistory,
    type DriftHistoryListResponse as DriftHistoryListResponse,
    type DriftHistoryCountResponse as DriftHistoryCountResponse,
    type DriftHistoryTupleResponse as DriftHistoryTupleResponse,
    type DriftHistoryTupleParams as DriftHistoryTupleParams,
  };

  export {
    DriftHistories as DriftHistories,
    type DriftHistory as DriftHistory,
    type DriftHistoryRetrieveParams as DriftHistoryRetrieveParams,
  };

  export { MissionOps as MissionOps };

  export {
    EffectRequests as EffectRequests,
    type EffectRequestCountResponse as EffectRequestCountResponse,
    type EffectRequestHistoryCountResponse as EffectRequestHistoryCountResponse,
    type EffectRequestTupleResponse as EffectRequestTupleResponse,
    type EffectRequestRetrieveParams as EffectRequestRetrieveParams,
    type EffectRequestCountParams as EffectRequestCountParams,
    type EffectRequestCreateBulkParams as EffectRequestCreateBulkParams,
    type EffectRequestHistoryCountParams as EffectRequestHistoryCountParams,
    type EffectRequestTupleParams as EffectRequestTupleParams,
  };

  export {
    EffectResponses as EffectResponses,
    type EffectResponseListResponse as EffectResponseListResponse,
    type EffectResponseCountResponse as EffectResponseCountResponse,
    type EffectResponseTupleResponse as EffectResponseTupleResponse,
    type EffectResponseCreateParams as EffectResponseCreateParams,
    type EffectResponseRetrieveParams as EffectResponseRetrieveParams,
    type EffectResponseListParams as EffectResponseListParams,
    type EffectResponseCountParams as EffectResponseCountParams,
    type EffectResponseCreateBulkParams as EffectResponseCreateBulkParams,
    type EffectResponseTupleParams as EffectResponseTupleParams,
  };

  export {
    Elsets as Elsets,
    type ElsetsAPIElset as Elset,
    type ElsetAbridged as ElsetAbridged,
    type ElsetListResponse as ElsetListResponse,
    type ElsetCountResponse as ElsetCountResponse,
    type ElsetTupleResponse as ElsetTupleResponse,
    type ElsetCreateParams as ElsetCreateParams,
    type ElsetRetrieveParams as ElsetRetrieveParams,
    type ElsetListParams as ElsetListParams,
    type ElsetCountParams as ElsetCountParams,
    type ElsetCreateBulkParams as ElsetCreateBulkParams,
    type ElsetCreateBulkFromTleParams as ElsetCreateBulkFromTleParams,
    type ElsetTupleParams as ElsetTupleParams,
  };

  export {
    Engines as Engines,
    type Engine as Engine,
    type EngineAbridged as EngineAbridged,
    type EngineListResponse as EngineListResponse,
    type EngineCountResponse as EngineCountResponse,
    type EngineTupleResponse as EngineTupleResponse,
    type EngineCreateParams as EngineCreateParams,
    type EngineRetrieveParams as EngineRetrieveParams,
    type EngineUpdateParams as EngineUpdateParams,
    type EngineDeleteParams as EngineDeleteParams,
    type EngineTupleParams as EngineTupleParams,
  };

  export {
    Enginedetails as Enginedetails,
    type EngineDetailsAbridged as EngineDetailsAbridged,
    type EnginedetailListResponse as EnginedetailListResponse,
  };

  export {
    EngineDetails as EngineDetails,
    type EngineDetailsFull as EngineDetailsFull,
    type EngineDetailCreateParams as EngineDetailCreateParams,
    type EngineDetailRetrieveParams as EngineDetailRetrieveParams,
    type EngineDetailUpdateParams as EngineDetailUpdateParams,
    type EngineDetailDeleteParams as EngineDetailDeleteParams,
  };

  export {
    Entities as Entities,
    type EntityAbridged as EntityAbridged,
    type EntityFull as EntityFull,
    type EntityCountResponse as EntityCountResponse,
    type EntityGetAllTypesResponse as EntityGetAllTypesResponse,
    type EntityTupleResponse as EntityTupleResponse,
    type EntityCreateParams as EntityCreateParams,
    type EntityRetrieveParams as EntityRetrieveParams,
    type EntityUpdateParams as EntityUpdateParams,
    type EntityDeleteParams as EntityDeleteParams,
    type EntityTupleParams as EntityTupleParams,
  };

  export {
    EoObservations as EoObservations,
    type EoObservationAbridged as EoObservationAbridged,
    type EoObservationListResponse as EoObservationListResponse,
    type EoObservationCountResponse as EoObservationCountResponse,
    type EoObservationCreateParams as EoObservationCreateParams,
    type EoObservationListParams as EoObservationListParams,
    type EoObservationCountParams as EoObservationCountParams,
    type EoObservationCreateBulkParams as EoObservationCreateBulkParams,
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
    type EopAPIEopListResponse as EopListResponse,
    type EopCountResponse as EopCountResponse,
    type EopCreateParams as EopCreateParams,
    type EopAPIEopListParams as EopListParams,
    type EopCountParams as EopCountParams,
  };

  export {
    Eops as Eops,
    type EopListResponse as EopListResponse,
    type EopRetrieveParams as EopRetrieveParams,
    type EopUpdateParams as EopUpdateParams,
    type EopListParams as EopListParams,
    type EopDeleteParams as EopDeleteParams,
  };

  export {
    EphemerisSets as EphemerisSets,
    type EphemerisSet as EphemerisSet,
    type EphemerisSetAbridged as EphemerisSetAbridged,
    type EphemerisSetListResponse as EphemerisSetListResponse,
    type EphemerisSetCountResponse as EphemerisSetCountResponse,
    type EphemerisSetTupleResponse as EphemerisSetTupleResponse,
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
    type EquipmentListResponse as EquipmentListResponse,
    type EquipmentCountResponse as EquipmentCountResponse,
    type EquipmentTupleResponse as EquipmentTupleResponse,
    type EquipmentCreateParams as EquipmentCreateParams,
    type EquipmentRetrieveParams as EquipmentRetrieveParams,
    type EquipmentUpdateParams as EquipmentUpdateParams,
    type EquipmentDeleteParams as EquipmentDeleteParams,
    type EquipmentCreateBulkParams as EquipmentCreateBulkParams,
    type EquipmentTupleParams as EquipmentTupleParams,
  };

  export {
    Equipmentremarks as Equipmentremarks,
    type EquipmentRemarkAbridged as EquipmentRemarkAbridged,
    type EquipmentRemarkFull as EquipmentRemarkFull,
    type EquipmentremarkListResponse as EquipmentremarkListResponse,
    type EquipmentremarkCountResponse as EquipmentremarkCountResponse,
    type EquipmentremarkTupleResponse as EquipmentremarkTupleResponse,
    type EquipmentremarkCreateParams as EquipmentremarkCreateParams,
    type EquipmentremarkRetrieveParams as EquipmentremarkRetrieveParams,
    type EquipmentremarkCreateBulkParams as EquipmentremarkCreateBulkParams,
    type EquipmentremarkTupleParams as EquipmentremarkTupleParams,
  };

  export {
    Evac as Evac,
    type EvacAbridged as EvacAbridged,
    type EvacListResponse as EvacListResponse,
    type EvacCountResponse as EvacCountResponse,
    type EvacCreateParams as EvacCreateParams,
    type EvacRetrieveParams as EvacRetrieveParams,
    type EvacListParams as EvacListParams,
    type EvacCountParams as EvacCountParams,
    type EvacCreateBulkParams as EvacCreateBulkParams,
  };

  export {
    EventEvolution as EventEvolution,
    type EventEvolutionListResponse as EventEvolutionListResponse,
    type EventEvolutionCountResponse as EventEvolutionCountResponse,
    type EventEvolutionCreateParams as EventEvolutionCreateParams,
    type EventEvolutionListParams as EventEvolutionListParams,
    type EventEvolutionCountParams as EventEvolutionCountParams,
    type EventEvolutionCreateBulkParams as EventEvolutionCreateBulkParams,
  };

  export {
    Eventevolutions as Eventevolutions,
    type EventEvolutionAbridged as EventEvolutionAbridged,
    type EventevolutionTupleResponse as EventevolutionTupleResponse,
    type EventevolutionRetrieveParams as EventevolutionRetrieveParams,
    type EventevolutionTupleParams as EventevolutionTupleParams,
  };

  export {
    Flightplans as Flightplans,
    type FlightPlanAbridged as FlightPlanAbridged,
    type FlightplanListResponse as FlightplanListResponse,
    type FlightplanCountResponse as FlightplanCountResponse,
    type FlightplanCreateParams as FlightplanCreateParams,
  };

  export type AirTransportMissionFull = API.AirTransportMissionFull;
  export type AircraftstatusFull = API.AircraftstatusFull;
  export type AIsFull = API.AIsFull;
  export type AttitudeDataFull = API.AttitudeDataFull;
  export type AttitudesetFull = API.AttitudesetFull;
  export type CollectRequestFull = API.CollectRequestFull;
  export type CollectResponseFull = API.CollectResponseFull;
  export type ElsetFull = API.ElsetFull;
  export type EopFull = API.EopFull;
  export type EphemerisFull = API.EphemerisFull;
  export type EphemerisSetFull = API.EphemerisSetFull;
  export type EvacFull = API.EvacFull;
  export type EventEvolutionFull = API.EventEvolutionFull;
  export type FlightPlanFull = API.FlightPlanFull;
}

export { toFile, fileFromPath } from './uploads';
export {
  UnifieddatalibraryError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Unifieddatalibrary;
