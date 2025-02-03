// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
} from './history';

export class AirTransportMissions extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single AirTransportMission object as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: AirTransportMissionCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/airtransportmission', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single Air Transport Mission record by its unique ID
   * passed as a path parameter.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<Shared.AirTransportMissionFull> {
    return this._client.get(`/udl/airtransportmission/${id}`, options);
  }

  /**
   * Service operation to update a single AirTransportMission record. A specific role
   * is required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  update(params: AirTransportMissionUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/udl/airtransportmission/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: AirTransportMissionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AirTransportMissionListResponse> {
    return this._client.get('/udl/airtransportmission', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: AirTransportMissionCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/airtransportmission/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/airtransportmission/queryhelp', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to dynamically query data and only return specified
   * columns/fields. Requested columns are specified by the 'columns' query parameter
   * and should be a comma separated list of valid fields for the specified data
   * type. classificationMarking is always returned. See the queryhelp operation
   * (/udl/<datatype>/queryhelp) for more details on valid/required query parameter
   * information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5
   * hours would return the satNo and period of elsets with an epoch greater than 5
   * hours ago.
   */
  tuple(
    query: AirTransportMissionTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AirTransportMissionTupleResponse> {
    return this._client.get('/udl/airtransportmission/tuple', { query, ...options });
  }
}

/**
 * The information in an Air Transport Mission contains unique identification,
 * description of the mission objective, aircraft and crew assignments, mission
 * alias, embarkation/debarkation cargo locations, priority, and other mission
 * characteristics.
 */
export interface AirTransportMissionAbridged {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Mission alias.
   */
  alias?: string;

  /**
   * The unit the mission is allocated to.
   */
  allocatedUnit?: string;

  /**
   * Air Mobility Command (AMC) mission identifier according to Mobility Air Forces
   * (MAF) Encode/Decode procedures.
   */
  amcMissionId?: string;

  /**
   * The Aircraft and Personnel Automated Clearance System (APACS) system identifier
   * used to process and approve clearance requests.
   */
  apacsId?: string;

  /**
   * The call sign for this mission.
   */
  callSign?: string;

  /**
   * Time the row was created in the database, auto-populated by the system.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  /**
   * Flag indicating this is a close watch mission.
   */
  cw?: boolean;

  /**
   * Identifier of the Diplomatic Clearance Worksheet used to coordinate aircraft
   * clearance requests.
   */
  dipWorksheetName?: string;

  /**
   * The International Civil Aviation Organization (ICAO) site code of first cargo
   * pick up.
   */
  firstPickUp?: string;

  /**
   * Global Decision Support System (GDSS) mission unique identifier.
   */
  gdssMissionId?: string;

  /**
   * Collection of Hazardous Material information associated with this Air Transport
   * Mission.
   */
  hazMat?: Array<AirTransportMissionAbridged.HazMat>;

  /**
   * Highest Joint Chiefs of Staff priority of this mission.
   */
  jcsPriority?: string;

  /**
   * The International Civil Aviation Organization (ICAO) site code of last cargo
   * drop off.
   */
  lastDropOff?: string;

  /**
   * Load type of this mission (e.g. CARGO, MIXED, PASSENGER).
   */
  loadCategoryType?: string;

  /**
   * Numbered Air Force (NAF) organization that owns the mission.
   */
  naf?: string;

  /**
   * Air Mobility Command (AMC) mission identifier of the next air transport mission.
   * Provides a method for AMC to link air transport missions together
   * chronologically for tasking and planning purposes.
   */
  nextAMCMissionId?: string;

  /**
   * Unique identifier of the next mission provided by the originating source.
   * Provides a method for the data provider to link air transport missions together
   * chronologically for tasking and planning purposes.
   */
  nextMissionId?: string;

  /**
   * A description of this mission's objective.
   */
  objective?: string;

  /**
   * The name of the operation that this mission supports.
   */
  operation?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The mission identifier provided by the originating source.
   */
  origMissionId?: string;

  /**
   * The originating source network on which this record was created, auto-populated
   * by the system.
   */
  origNetwork?: string;

  /**
   * Air Mobility Command (AMC) mission identifier of the previous air transport
   * mission. Provides a method for AMC to link air transport missions together
   * chronologically for tasking and planning purposes.
   */
  prevAMCMissionId?: string;

  /**
   * Unique identifier of the previous air transport mission provided by the
   * originating source. Provides a method for the data provider to link air
   * transport missions together chronologically for tasking and planning purposes.
   */
  prevMissionId?: string;

  /**
   * A description of this mission's purpose (e.g. why this mission needs to happen,
   * what is the mission supporting, etc.).
   */
  purpose?: string;

  /**
   * Information related to the planning, load, status, and deployment or dispatch of
   * one aircraft to carry out a mission.
   */
  remarks?: Array<AirTransportMissionAbridged.Remark>;

  /**
   * Information related to the planning, load, status, and deployment or dispatch of
   * one aircraft to carry out a mission.
   */
  requirements?: Array<AirTransportMissionAbridged.Requirement>;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The number of minutes a mission is off schedule based on the source system's
   * business rules. Positive numbers are early, negative numbers are late.
   */
  sourceSysDeviation?: number;

  /**
   * Current state of the mission.
   */
  state?: string;

  /**
   * The type of mission (e.g. SAAM, CHNL, etc.).
   */
  type?: string;

  /**
   * Time the row was updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

export namespace AirTransportMissionAbridged {
  /**
   * Collection of Hazardous Material information associated with this Air Transport
   * Mission.
   */
  export interface HazMat {
    /**
     * Comma delimited list of Note IDs for Item Class Segregation groups, specific to
     * GDSS systems.
     */
    applicableNotes?: string;

    /**
     * Compatibility group code used to specify the controls for the transportation and
     * storage of hazardous materials according to the Hazardous Materials Regulations
     * issued by the U.S. Department of Transportation.
     */
    cgc?: string;

    /**
     * Comma delimited list of Note IDs for compatibility groups, specific to GDSS
     * systems.
     */
    cgn?: string;

    /**
     * Class and division of the hazardous material according to the Hazardous
     * Materials Regulations issued by the U.S. Department of Transportation.
     */
    classDiv?: number;

    /**
     * The hazMat identifier provided by the originating source.
     */
    extHazMatId?: string;

    /**
     * United Nations proper shipping name of the hazardous material according to the
     * Hazardous Materials Regulations issued by the U.S. Department of Transportation.
     */
    itemName?: string;

    /**
     * Net explosive weight of the hazardous material, in kilograms.
     */
    netExpWt?: number;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * hazardous material is unloaded.
     */
    offICAO?: string;

    /**
     * Itinerary number that identifies where the hazardous material is unloaded.
     */
    offItin?: number;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * hazardous material is loaded.
     */
    onICAO?: string;

    /**
     * Itinerary number that identifies where the hazardous material is loaded.
     */
    onItin?: number;

    /**
     * Number of pieces of hazardous cargo.
     */
    pieces?: number;

    /**
     * Flag indicating if hazardous material is associated with this air transport
     * mission. Possible values are P (planned to be associated with the mission) or A
     * (actually associated with the mission). Enum: [P, A].
     */
    planned?: string;

    /**
     * United Nations number or North America number that identifies hazardous
     * materials according to the Hazardous Materials Regulations issued by the U.S.
     * Department of Transportation.
     */
    unNum?: string;

    /**
     * Total weight of hazardous cargo, including non-explosive parts, in kilograms.
     */
    weight?: number;
  }

  /**
   * Collection of Remarks associated with this Air Transport Mission.
   */
  export interface Remark {
    /**
     * Date the remark was published, in ISO 8601 UTC format, with millisecond
     * precision.
     */
    date?: string;

    /**
     * Global Decision Support System (GDSS) remark identifier.
     */
    gdssRemarkId?: string;

    /**
     * If the remark is sortie specific, this is the number of the sortie it applies
     * to.
     */
    itineraryNum?: number;

    /**
     * Text of the remark.
     */
    text?: string;

    /**
     * Remark type.
     */
    type?: string;

    /**
     * User who published the remark.
     */
    user?: string;
  }

  /**
   * Collection of Requirements associated with this Air Transport Mission.
   */
  export interface Requirement {
    /**
     * Total weight of the bulk cargo, in kilograms.
     */
    bulkWeight?: number;

    /**
     * Earliest available date the cargo can be picked up.
     */
    ead?: string;

    /**
     * Global Decision Support System (GDSS) mission requirement identifier.
     */
    gdssReqId?: string;

    /**
     * Latest available date the cargo may be delivered.
     */
    lad?: string;

    /**
     * Number of ambulatory patients tasked for the mission.
     */
    numAmbulatory?: number;

    /**
     * Number of attendants tasked for the mission.
     */
    numAttendant?: number;

    /**
     * Number of litter patients tasked for the mission.
     */
    numLitter?: number;

    /**
     * Number of passengers associated with the mission.
     */
    numPax?: number;

    /**
     * Identifier of the offload itinerary location.
     */
    offloadId?: number;

    /**
     * Offload location code.
     */
    offloadLOCode?: string;

    /**
     * Identifier of the onload itinerary location.
     */
    onloadId?: number;

    /**
     * Onload location code.
     */
    onloadLOCode?: string;

    /**
     * Identification number of the Operation Plan (OPLAN) associated with this
     * mission.
     */
    oplan?: string;

    /**
     * Total weight of the outsize cargo, in kilograms.
     */
    outsizeWeight?: number;

    /**
     * Total weight of the oversized cargo, in kilograms.
     */
    oversizeWeight?: number;

    /**
     * Project name.
     */
    projName?: string;

    /**
     * Transportation requirement number.
     */
    transReqNum?: string;

    /**
     * Unit line number.
     */
    uln?: string;
  }
}

export type AirTransportMissionListResponse = Array<AirTransportMissionAbridged>;

export type AirTransportMissionCountResponse = string;

export type AirTransportMissionTupleResponse = Array<Shared.AirTransportMissionFull>;

export interface AirTransportMissionCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Mission alias.
   */
  alias?: string;

  /**
   * The unit the mission is allocated to.
   */
  allocatedUnit?: string;

  /**
   * Air Mobility Command (AMC) mission identifier according to Mobility Air Forces
   * (MAF) Encode/Decode procedures.
   */
  amcMissionId?: string;

  /**
   * The Aircraft and Personnel Automated Clearance System (APACS) system identifier
   * used to process and approve clearance requests.
   */
  apacsId?: string;

  /**
   * The call sign for this mission.
   */
  callSign?: string;

  /**
   * Flag indicating this is a close watch mission.
   */
  cw?: boolean;

  /**
   * Identifier of the Diplomatic Clearance Worksheet used to coordinate aircraft
   * clearance requests.
   */
  dipWorksheetName?: string;

  /**
   * The International Civil Aviation Organization (ICAO) site code of first cargo
   * pick up.
   */
  firstPickUp?: string;

  /**
   * Global Decision Support System (GDSS) mission unique identifier.
   */
  gdssMissionId?: string;

  /**
   * Collection of Hazardous Material information associated with this Air Transport
   * Mission.
   */
  hazMat?: Array<AirTransportMissionCreateParams.HazMat>;

  /**
   * Highest Joint Chiefs of Staff priority of this mission.
   */
  jcsPriority?: string;

  /**
   * The International Civil Aviation Organization (ICAO) site code of last cargo
   * drop off.
   */
  lastDropOff?: string;

  /**
   * Load type of this mission (e.g. CARGO, MIXED, PASSENGER).
   */
  loadCategoryType?: string;

  /**
   * Numbered Air Force (NAF) organization that owns the mission.
   */
  naf?: string;

  /**
   * Air Mobility Command (AMC) mission identifier of the next air transport mission.
   * Provides a method for AMC to link air transport missions together
   * chronologically for tasking and planning purposes.
   */
  nextAMCMissionId?: string;

  /**
   * Unique identifier of the next mission provided by the originating source.
   * Provides a method for the data provider to link air transport missions together
   * chronologically for tasking and planning purposes.
   */
  nextMissionId?: string;

  /**
   * A description of this mission's objective.
   */
  objective?: string;

  /**
   * The name of the operation that this mission supports.
   */
  operation?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The mission identifier provided by the originating source.
   */
  origMissionId?: string;

  /**
   * Air Mobility Command (AMC) mission identifier of the previous air transport
   * mission. Provides a method for AMC to link air transport missions together
   * chronologically for tasking and planning purposes.
   */
  prevAMCMissionId?: string;

  /**
   * Unique identifier of the previous air transport mission provided by the
   * originating source. Provides a method for the data provider to link air
   * transport missions together chronologically for tasking and planning purposes.
   */
  prevMissionId?: string;

  /**
   * A description of this mission's purpose (e.g. why this mission needs to happen,
   * what is the mission supporting, etc.).
   */
  purpose?: string;

  /**
   * Information related to the planning, load, status, and deployment or dispatch of
   * one aircraft to carry out a mission.
   */
  remarks?: Array<AirTransportMissionCreateParams.Remark>;

  /**
   * Information related to the planning, load, status, and deployment or dispatch of
   * one aircraft to carry out a mission.
   */
  requirements?: Array<AirTransportMissionCreateParams.Requirement>;

  /**
   * The number of minutes a mission is off schedule based on the source system's
   * business rules. Positive numbers are early, negative numbers are late.
   */
  sourceSysDeviation?: number;

  /**
   * Current state of the mission.
   */
  state?: string;

  /**
   * The type of mission (e.g. SAAM, CHNL, etc.).
   */
  type?: string;
}

export namespace AirTransportMissionCreateParams {
  /**
   * Collection of Hazardous Material information associated with this Air Transport
   * Mission.
   */
  export interface HazMat {
    /**
     * Comma delimited list of Note IDs for Item Class Segregation groups, specific to
     * GDSS systems.
     */
    applicableNotes?: string;

    /**
     * Compatibility group code used to specify the controls for the transportation and
     * storage of hazardous materials according to the Hazardous Materials Regulations
     * issued by the U.S. Department of Transportation.
     */
    cgc?: string;

    /**
     * Comma delimited list of Note IDs for compatibility groups, specific to GDSS
     * systems.
     */
    cgn?: string;

    /**
     * Class and division of the hazardous material according to the Hazardous
     * Materials Regulations issued by the U.S. Department of Transportation.
     */
    classDiv?: number;

    /**
     * The hazMat identifier provided by the originating source.
     */
    extHazMatId?: string;

    /**
     * United Nations proper shipping name of the hazardous material according to the
     * Hazardous Materials Regulations issued by the U.S. Department of Transportation.
     */
    itemName?: string;

    /**
     * Net explosive weight of the hazardous material, in kilograms.
     */
    netExpWt?: number;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * hazardous material is unloaded.
     */
    offICAO?: string;

    /**
     * Itinerary number that identifies where the hazardous material is unloaded.
     */
    offItin?: number;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * hazardous material is loaded.
     */
    onICAO?: string;

    /**
     * Itinerary number that identifies where the hazardous material is loaded.
     */
    onItin?: number;

    /**
     * Number of pieces of hazardous cargo.
     */
    pieces?: number;

    /**
     * Flag indicating if hazardous material is associated with this air transport
     * mission. Possible values are P (planned to be associated with the mission) or A
     * (actually associated with the mission). Enum: [P, A].
     */
    planned?: string;

    /**
     * United Nations number or North America number that identifies hazardous
     * materials according to the Hazardous Materials Regulations issued by the U.S.
     * Department of Transportation.
     */
    unNum?: string;

    /**
     * Total weight of hazardous cargo, including non-explosive parts, in kilograms.
     */
    weight?: number;
  }

  /**
   * Collection of Remarks associated with this Air Transport Mission.
   */
  export interface Remark {
    /**
     * Date the remark was published, in ISO 8601 UTC format, with millisecond
     * precision.
     */
    date?: string;

    /**
     * Global Decision Support System (GDSS) remark identifier.
     */
    gdssRemarkId?: string;

    /**
     * If the remark is sortie specific, this is the number of the sortie it applies
     * to.
     */
    itineraryNum?: number;

    /**
     * Text of the remark.
     */
    text?: string;

    /**
     * Remark type.
     */
    type?: string;

    /**
     * User who published the remark.
     */
    user?: string;
  }

  /**
   * Collection of Requirements associated with this Air Transport Mission.
   */
  export interface Requirement {
    /**
     * Total weight of the bulk cargo, in kilograms.
     */
    bulkWeight?: number;

    /**
     * Earliest available date the cargo can be picked up.
     */
    ead?: string;

    /**
     * Global Decision Support System (GDSS) mission requirement identifier.
     */
    gdssReqId?: string;

    /**
     * Latest available date the cargo may be delivered.
     */
    lad?: string;

    /**
     * Number of ambulatory patients tasked for the mission.
     */
    numAmbulatory?: number;

    /**
     * Number of attendants tasked for the mission.
     */
    numAttendant?: number;

    /**
     * Number of litter patients tasked for the mission.
     */
    numLitter?: number;

    /**
     * Number of passengers associated with the mission.
     */
    numPax?: number;

    /**
     * Identifier of the offload itinerary location.
     */
    offloadId?: number;

    /**
     * Offload location code.
     */
    offloadLOCode?: string;

    /**
     * Identifier of the onload itinerary location.
     */
    onloadId?: number;

    /**
     * Onload location code.
     */
    onloadLOCode?: string;

    /**
     * Identification number of the Operation Plan (OPLAN) associated with this
     * mission.
     */
    oplan?: string;

    /**
     * Total weight of the outsize cargo, in kilograms.
     */
    outsizeWeight?: number;

    /**
     * Total weight of the oversized cargo, in kilograms.
     */
    oversizeWeight?: number;

    /**
     * Project name.
     */
    projName?: string;

    /**
     * Transportation requirement number.
     */
    transReqNum?: string;

    /**
     * Unit line number.
     */
    uln?: string;
  }
}

export interface AirTransportMissionUpdateParams {
  /**
   * Path param: The ID of the AirTransportMission to update.
   */
  path_id: string;

  /**
   * Body param: Classification marking of the data in IC/CAPCO Portion-marked
   * format.
   */
  classificationMarking: string;

  /**
   * Body param: Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST
   * data:
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Body param: Source of the data.
   */
  source: string;

  /**
   * Body param: Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Body param: Mission alias.
   */
  alias?: string;

  /**
   * Body param: The unit the mission is allocated to.
   */
  allocatedUnit?: string;

  /**
   * Body param: Air Mobility Command (AMC) mission identifier according to Mobility
   * Air Forces (MAF) Encode/Decode procedures.
   */
  amcMissionId?: string;

  /**
   * Body param: The Aircraft and Personnel Automated Clearance System (APACS) system
   * identifier used to process and approve clearance requests.
   */
  apacsId?: string;

  /**
   * Body param: The call sign for this mission.
   */
  callSign?: string;

  /**
   * Body param: Flag indicating this is a close watch mission.
   */
  cw?: boolean;

  /**
   * Body param: Identifier of the Diplomatic Clearance Worksheet used to coordinate
   * aircraft clearance requests.
   */
  dipWorksheetName?: string;

  /**
   * Body param: The International Civil Aviation Organization (ICAO) site code of
   * first cargo pick up.
   */
  firstPickUp?: string;

  /**
   * Body param: Global Decision Support System (GDSS) mission unique identifier.
   */
  gdssMissionId?: string;

  /**
   * Body param: Collection of Hazardous Material information associated with this
   * Air Transport Mission.
   */
  hazMat?: Array<AirTransportMissionUpdateParams.HazMat>;

  /**
   * Body param: Highest Joint Chiefs of Staff priority of this mission.
   */
  jcsPriority?: string;

  /**
   * Body param: The International Civil Aviation Organization (ICAO) site code of
   * last cargo drop off.
   */
  lastDropOff?: string;

  /**
   * Body param: Load type of this mission (e.g. CARGO, MIXED, PASSENGER).
   */
  loadCategoryType?: string;

  /**
   * Body param: Numbered Air Force (NAF) organization that owns the mission.
   */
  naf?: string;

  /**
   * Body param: Air Mobility Command (AMC) mission identifier of the next air
   * transport mission. Provides a method for AMC to link air transport missions
   * together chronologically for tasking and planning purposes.
   */
  nextAMCMissionId?: string;

  /**
   * Body param: Unique identifier of the next mission provided by the originating
   * source. Provides a method for the data provider to link air transport missions
   * together chronologically for tasking and planning purposes.
   */
  nextMissionId?: string;

  /**
   * Body param: A description of this mission's objective.
   */
  objective?: string;

  /**
   * Body param: The name of the operation that this mission supports.
   */
  operation?: string;

  /**
   * Body param: Originating system or organization which produced the data, if
   * different from the source. The origin may be different than the source if the
   * source was a mediating system which forwarded the data on behalf of the origin
   * system. If null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Body param: The mission identifier provided by the originating source.
   */
  origMissionId?: string;

  /**
   * Body param: Air Mobility Command (AMC) mission identifier of the previous air
   * transport mission. Provides a method for AMC to link air transport missions
   * together chronologically for tasking and planning purposes.
   */
  prevAMCMissionId?: string;

  /**
   * Body param: Unique identifier of the previous air transport mission provided by
   * the originating source. Provides a method for the data provider to link air
   * transport missions together chronologically for tasking and planning purposes.
   */
  prevMissionId?: string;

  /**
   * Body param: A description of this mission's purpose (e.g. why this mission needs
   * to happen, what is the mission supporting, etc.).
   */
  purpose?: string;

  /**
   * Body param: Information related to the planning, load, status, and deployment or
   * dispatch of one aircraft to carry out a mission.
   */
  remarks?: Array<AirTransportMissionUpdateParams.Remark>;

  /**
   * Body param: Information related to the planning, load, status, and deployment or
   * dispatch of one aircraft to carry out a mission.
   */
  requirements?: Array<AirTransportMissionUpdateParams.Requirement>;

  /**
   * Body param: The number of minutes a mission is off schedule based on the source
   * system's business rules. Positive numbers are early, negative numbers are late.
   */
  sourceSysDeviation?: number;

  /**
   * Body param: Current state of the mission.
   */
  state?: string;

  /**
   * Body param: The type of mission (e.g. SAAM, CHNL, etc.).
   */
  type?: string;
}

export namespace AirTransportMissionUpdateParams {
  /**
   * Collection of Hazardous Material information associated with this Air Transport
   * Mission.
   */
  export interface HazMat {
    /**
     * Comma delimited list of Note IDs for Item Class Segregation groups, specific to
     * GDSS systems.
     */
    applicableNotes?: string;

    /**
     * Compatibility group code used to specify the controls for the transportation and
     * storage of hazardous materials according to the Hazardous Materials Regulations
     * issued by the U.S. Department of Transportation.
     */
    cgc?: string;

    /**
     * Comma delimited list of Note IDs for compatibility groups, specific to GDSS
     * systems.
     */
    cgn?: string;

    /**
     * Class and division of the hazardous material according to the Hazardous
     * Materials Regulations issued by the U.S. Department of Transportation.
     */
    classDiv?: number;

    /**
     * The hazMat identifier provided by the originating source.
     */
    extHazMatId?: string;

    /**
     * United Nations proper shipping name of the hazardous material according to the
     * Hazardous Materials Regulations issued by the U.S. Department of Transportation.
     */
    itemName?: string;

    /**
     * Net explosive weight of the hazardous material, in kilograms.
     */
    netExpWt?: number;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * hazardous material is unloaded.
     */
    offICAO?: string;

    /**
     * Itinerary number that identifies where the hazardous material is unloaded.
     */
    offItin?: number;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * hazardous material is loaded.
     */
    onICAO?: string;

    /**
     * Itinerary number that identifies where the hazardous material is loaded.
     */
    onItin?: number;

    /**
     * Number of pieces of hazardous cargo.
     */
    pieces?: number;

    /**
     * Flag indicating if hazardous material is associated with this air transport
     * mission. Possible values are P (planned to be associated with the mission) or A
     * (actually associated with the mission). Enum: [P, A].
     */
    planned?: string;

    /**
     * United Nations number or North America number that identifies hazardous
     * materials according to the Hazardous Materials Regulations issued by the U.S.
     * Department of Transportation.
     */
    unNum?: string;

    /**
     * Total weight of hazardous cargo, including non-explosive parts, in kilograms.
     */
    weight?: number;
  }

  /**
   * Collection of Remarks associated with this Air Transport Mission.
   */
  export interface Remark {
    /**
     * Date the remark was published, in ISO 8601 UTC format, with millisecond
     * precision.
     */
    date?: string;

    /**
     * Global Decision Support System (GDSS) remark identifier.
     */
    gdssRemarkId?: string;

    /**
     * If the remark is sortie specific, this is the number of the sortie it applies
     * to.
     */
    itineraryNum?: number;

    /**
     * Text of the remark.
     */
    text?: string;

    /**
     * Remark type.
     */
    type?: string;

    /**
     * User who published the remark.
     */
    user?: string;
  }

  /**
   * Collection of Requirements associated with this Air Transport Mission.
   */
  export interface Requirement {
    /**
     * Total weight of the bulk cargo, in kilograms.
     */
    bulkWeight?: number;

    /**
     * Earliest available date the cargo can be picked up.
     */
    ead?: string;

    /**
     * Global Decision Support System (GDSS) mission requirement identifier.
     */
    gdssReqId?: string;

    /**
     * Latest available date the cargo may be delivered.
     */
    lad?: string;

    /**
     * Number of ambulatory patients tasked for the mission.
     */
    numAmbulatory?: number;

    /**
     * Number of attendants tasked for the mission.
     */
    numAttendant?: number;

    /**
     * Number of litter patients tasked for the mission.
     */
    numLitter?: number;

    /**
     * Number of passengers associated with the mission.
     */
    numPax?: number;

    /**
     * Identifier of the offload itinerary location.
     */
    offloadId?: number;

    /**
     * Offload location code.
     */
    offloadLOCode?: string;

    /**
     * Identifier of the onload itinerary location.
     */
    onloadId?: number;

    /**
     * Onload location code.
     */
    onloadLOCode?: string;

    /**
     * Identification number of the Operation Plan (OPLAN) associated with this
     * mission.
     */
    oplan?: string;

    /**
     * Total weight of the outsize cargo, in kilograms.
     */
    outsizeWeight?: number;

    /**
     * Total weight of the oversized cargo, in kilograms.
     */
    oversizeWeight?: number;

    /**
     * Project name.
     */
    projName?: string;

    /**
     * Transportation requirement number.
     */
    transReqNum?: string;

    /**
     * Unit line number.
     */
    uln?: string;
  }
}

export interface AirTransportMissionListParams {
  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;
}

export interface AirTransportMissionCountParams {
  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;
}

export interface AirTransportMissionTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;
}

AirTransportMissions.History = History;

export declare namespace AirTransportMissions {
  export {
    type AirTransportMissionAbridged as AirTransportMissionAbridged,
    type AirTransportMissionListResponse as AirTransportMissionListResponse,
    type AirTransportMissionCountResponse as AirTransportMissionCountResponse,
    type AirTransportMissionTupleResponse as AirTransportMissionTupleResponse,
    type AirTransportMissionCreateParams as AirTransportMissionCreateParams,
    type AirTransportMissionUpdateParams as AirTransportMissionUpdateParams,
    type AirTransportMissionListParams as AirTransportMissionListParams,
    type AirTransportMissionCountParams as AirTransportMissionCountParams,
    type AirTransportMissionTupleParams as AirTransportMissionTupleParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
