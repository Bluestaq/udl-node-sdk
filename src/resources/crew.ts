// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Crew extends APIResource {
  /**
   * Service operation to take a single Crew object as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  create(body: CrewCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/crew', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Crew record by its unique ID passed as a path
   * parameter.
   */
  retrieve(
    id: string,
    query: CrewRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CrewFull> {
    return this._client.get(path`/udl/crew/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single Crew record. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   */
  update(pathID: string, body: CrewUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/crew/${pathID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: CrewListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CrewListResponse> {
    return this._client.get('/udl/crew', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: CrewCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/crew/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/crew/queryhelp', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
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
  tuple(query: CrewTupleParams, options?: RequestOptions): APIPromise<CrewTupleResponse> {
    return this._client.get('/udl/crew/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple Crew objects as a POST body and ingest into
   * the database. This operation is intended to be used for automated feeds into
   * UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  unvalidatedPublish(params: CrewUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-crew', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Crew Services.
 */
export interface CrewAbridged {
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
   * Unique identifier of the formed crew provided by the originating source.
   * Provided for systems that require tracking of an internal system generated ID.
   */
  origCrewId: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Adjusted return time, in ISO 8601 UTC format with millisecond precision.
   */
  adjReturnTime?: string;

  /**
   * Last name of the adjusted return time approver.
   */
  adjReturnTimeApprover?: string;

  /**
   * The aircraft Model Design Series designation assigned for this crew.
   */
  aircraftMDS?: string;

  /**
   * Time the crew was alerted, in ISO 8601 UTC format with millisecond precision.
   */
  alertedTime?: string;

  /**
   * Type of alert for the crew (e.g., ALPHA for maximum readiness, BRAVO for
   * standby, etc.).
   */
  alertType?: string;

  /**
   * The crew's Aviation Resource Management System (ARMS) unit. If multiple units
   * exist, use the Aircraft Commander's Unit.
   */
  armsCrewUnit?: string;

  /**
   * Array of qualification codes assigned to this crew (e.g., AL for Aircraft
   * Leader, CS for Combat Systems Operator, etc.).
   */
  assignedQualCode?: Array<string>;

  /**
   * Unique identifier of the crew commander assigned by the originating source.
   */
  commanderId?: string;

  /**
   * Last four digits of the crew commander's social security number.
   */
  commanderLast4SSN?: string;

  /**
   * The name of the crew commander.
   */
  commanderName?: string;

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
   * Flag indicating whether this crew task takes the crew home and out of the stage.
   */
  crewHome?: boolean;

  /**
   * CrewMembers Collection.
   */
  crewMembers?: Array<CrewAbridged.CrewMember>;

  /**
   * Name of the formed crew.
   */
  crewName?: string;

  /**
   * The resource management system managing and reporting data on this crew.
   */
  crewRMS?: string;

  /**
   * The crew's role on the mission (e.g., DEADHEAD, MEDICAL, PRIMARY).
   */
  crewRole?: string;

  /**
   * The military component that comprises the crew (e.g., ACTIVE, RESERVE, GUARD,
   * MIXED, UNKNOWN, etc.).
   */
  crewSource?: string;

  /**
   * The squadron the crew serves.
   */
  crewSquadron?: string;

  /**
   * The type of crew required to meet mission objectives (e.g., AIRDROP, AIRLAND,
   * AIR REFUELING, etc.).
   */
  crewType?: string;

  /**
   * The crew's squadron as identified in its resource management system. If the crew
   * is composed of members from multiple units, then the Crew Commander's unit
   * should be indicated as the crew unit.
   */
  crewUnit?: string;

  /**
   * The wing the crew serves.
   */
  crewWing?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of the airfield at
   * which the crew is currently located.
   */
  currentICAO?: string;

  /**
   * Crew Flight Duty Period (FDP) eligibility type.
   */
  fdpEligType?: string;

  /**
   * Flight Duty Period (FDP) type.
   */
  fdpType?: string;

  /**
   * The number of female enlisted crew members.
   */
  femaleEnlistedQty?: number;

  /**
   * The number of female officer crew members.
   */
  femaleOfficerQty?: number;

  /**
   * Authorization number used on the flight order.
   */
  fltAuthNum?: string;

  /**
   * Unique identifier of the Site at which the crew is currently located. This ID
   * can be used to obtain additional information on a Site using the 'get by ID'
   * operation (e.g. /udl/site/{id}). For example, the Site object with idSite = abc
   * would be queried as /udl/site/abc.
   */
  idSiteCurrent?: string;

  /**
   * Unique identifier of the Aircraft Sortie associated with this crew record.
   */
  idSortie?: string;

  /**
   * Initial start time of the crew's linked task that was delinked due to mission
   * closure, in ISO 8601 UTC format with millisecond precision.
   */
  initStartTime?: string;

  /**
   * The last time the crew can be alerted, in ISO 8601 UTC format with millisecond
   * precision.
   */
  lastAlertTime?: string;

  /**
   * Time the crew is legal for alert, in ISO 8601 UTC format with millisecond
   * precision.
   */
  legalAlertTime?: string;

  /**
   * Time the crew is legally authorized or scheduled to remain on standby for duty,
   * in ISO 8601 UTC format with millisecond precision.
   */
  legalBravoTime?: string;

  /**
   * Flag indicating whether this crew is part of a linked flying task.
   */
  linkedTask?: boolean;

  /**
   * The number of male enlisted crew members.
   */
  maleEnlistedQty?: number;

  /**
   * The number of male officer crew members.
   */
  maleOfficerQty?: number;

  /**
   * User-defined alias designation for the mission.
   */
  missionAlias?: string;

  /**
   * The mission ID the crew is supporting according to the source system.
   */
  missionId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The originating source network on which this record was created, auto-populated
   * by the system.
   */
  origNetwork?: string;

  /**
   * The type of personnel that comprises the crew (e.g., AIRCREW, MEDCREW, etc.).
   */
  personnelType?: string;

  /**
   * Time the crew will be picked up from lodging, in ISO 8601 UTC format with
   * millisecond precision.
   */
  pickupTime?: string;

  /**
   * Flag indicating whether post-mission crew rest is applied to the last sortie of
   * a crew's task.
   */
  postRestApplied?: boolean;

  /**
   * End time of the crew rest period after the mission, in ISO 8601 UTC format with
   * millisecond precision.
   */
  postRestEnd?: string;

  /**
   * The scheduled delay or adjustment in the start time of a crew's rest period
   * after a mission, expressed as +/-HH:MM.
   */
  postRestOffset?: string;

  /**
   * Flag indicating whether pre-mission crew rest is applied to the first sortie of
   * a crew's task.
   */
  preRestApplied?: boolean;

  /**
   * Start time of the crew rest period before the mission, in ISO 8601 UTC format
   * with millisecond precision.
   */
  preRestStart?: string;

  /**
   * Array of qualification codes required for this crew (e.g., AL for Aircraft
   * Leader, CS for Combat Systems Operator, etc.).
   */
  reqQualCode?: Array<string>;

  /**
   * Scheduled return time, in ISO 8601 UTC format with millisecond precision.
   */
  returnTime?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The stage 1 qualifications the crew must have for a mission, such as having
   * basic knowledge of crew operations and aircraft systems.
   */
  stage1Qual?: string;

  /**
   * The stage 2 qualifications the crew must have for a mission, such as completion
   * of advanced mission-specific training.
   */
  stage2Qual?: string;

  /**
   * The stage 3 qualifications the crew must have for a mission, such as full
   * mission-ready certification and the capability of leading complex operations.
   */
  stage3Qual?: string;

  /**
   * Stage name for the crew. A stage is a pool of crews supporting a given operation
   * plan.
   */
  stageName?: string;

  /**
   * Time the crew entered the stage, in ISO 8601 UTC format with millisecond
   * precision.
   */
  stageTime?: string;

  /**
   * Crew status (e.g. NEEDCREW, ASSIGNED, APPROVED, NOTIFIED, PARTIAL, UNKNOWN,
   * etc.).
   */
  status?: string;

  /**
   * Flag indicating that one or more crew members requires transportation to the
   * departure location.
   */
  transportReq?: boolean;

  /**
   * Identifies the trip kit needed by the crew. A trip kit contains charts,
   * regulations, maps, etc. carried by the crew during missions.
   */
  tripKit?: string;

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

export namespace CrewAbridged {
  /**
   * Schema for Crew Member data.
   */
  export interface CrewMember {
    /**
     * Flag indicating whether this crew member has been alerted of the associated
     * task.
     */
    alerted?: boolean;

    /**
     * Flag indicating this crew member is assigned to all sorties of the crew
     * itinerary.
     */
    allSortie?: boolean;

    /**
     * Flag indicating whether this crew member has been approved for the associated
     * task.
     */
    approved?: boolean;

    /**
     * Flag indicating whether this crew member is attached to his/her squadron. Crew
     * members that are not attached are considered assigned.
     */
    attached?: boolean;

    /**
     * The military branch assignment of the crew member.
     */
    branch?: string;

    /**
     * Flag indicating this crew member is a civilian or non-military person.
     */
    civilian?: boolean;

    /**
     * Flag indicating this person is the aircraft commander.
     */
    commander?: boolean;

    /**
     * The crew position of the crew member.
     */
    crewPosition?: string;

    /**
     * The crew member's 10-digit DoD ID number.
     */
    dodID?: string;

    /**
     * The duty position of the crew member.
     */
    dutyPosition?: string;

    /**
     * The current duty status code of this crew member (e.g., AGR for Active Guard and
     * Reserve, IDT for Inactive Duty Training, etc.).
     */
    dutyStatus?: string;

    /**
     * Flag indicating whether this crew member has been notified of an event by email.
     */
    emailed?: boolean;

    /**
     * Flag indicating whether this crew member requires an additional amount of time
     * to report for duty.
     */
    extraTime?: boolean;

    /**
     * The first name of the crew member.
     */
    firstName?: string;

    /**
     * The earliest flying currency expiration date for this crew member, in ISO 8601
     * UTC format with millisecond precision.
     */
    fltCurrencyExp?: string;

    /**
     * The training task identifier associated with the flying currency expiration date
     * for this crew member.
     */
    fltCurrencyExpId?: string;

    /**
     * The date this crew member's records review was completed, in ISO 8601 UTC format
     * with millisecond precision.
     */
    fltRecDate?: string;

    /**
     * The date this crew member's records review is due, in ISO 8601 UTC format with
     * millisecond precision.
     */
    fltRecDue?: string;

    /**
     * The flying squadron assignment of the crew member.
     */
    flySquadron?: string;

    /**
     * Flag indicating whether this crew member is funded.
     */
    funded?: boolean;

    /**
     * Gender of the crew member.
     */
    gender?: string;

    /**
     * The earliest ground currency expiration date for this crew member, in ISO 8601
     * UTC format with millisecond precision.
     */
    gndCurrencyExp?: string;

    /**
     * The training task identifier associated with the ground currency expiration date
     * for this crew member.
     */
    gndCurrencyExpId?: string;

    /**
     * Flag indicating whether this crew member is grounded (i.e., his/her duties do
     * not include flying).
     */
    grounded?: boolean;

    /**
     * Date when this crew member starts acting as guest help for the squadron, in ISO
     * 8601 UTC format with millisecond precision.
     */
    guestStart?: string;

    /**
     * Date when this crew member stops acting as guest help for the squadron, in ISO
     * 8601 UTC format with millisecond precision.
     */
    guestStop?: string;

    /**
     * Last four digits of the crew member's social security number.
     */
    last4SSN?: string;

    /**
     * Date of the last flight for this crew member, in ISO 8601 UTC format with
     * millisecond precision.
     */
    lastFltDate?: string;

    /**
     * The last name of the crew member.
     */
    lastName?: string;

    /**
     * The squadron the crew member has been temporarily loaned to.
     */
    loanedTo?: string;

    /**
     * Crew member lodging location.
     */
    lodging?: string;

    /**
     * Time this crew member was actually alerted for the mission, in ISO 8601 UTC
     * format with millisecond precision.
     */
    memberActualAlertTime?: string;

    /**
     * Adjusted return time for the crew member, in ISO 8601 UTC format with
     * millisecond precision.
     */
    memberAdjReturnTime?: string;

    /**
     * Last name of the crew member's adjusted return time approver.
     */
    memberAdjReturnTimeApprover?: string;

    /**
     * Unique identifier of the crew member assigned by the originating source.
     */
    memberId?: string;

    /**
     * Initial start time of the crew member's linked task that was delinked due to
     * mission closure, in ISO 8601 UTC format with millisecond precision.
     */
    memberInitStartTime?: string;

    /**
     * The latest possible time the crew member can legally be alerted for a task, in
     * ISO 8601 UTC format with millisecond precision.
     */
    memberLastAlertTime?: string;

    /**
     * Time this crew member becomes eligible to be alerted for the mission, in ISO
     * 8601 UTC format with millisecond precision.
     */
    memberLegalAlertTime?: string;

    /**
     * Time this crew member will be picked up from lodging, in ISO 8601 UTC format
     * with millisecond precision.
     */
    memberPickupTime?: string;

    /**
     * The scheduled delay or adjustment in the start time of a crew member's rest
     * period after a mission, expressed as +/-HH:MM.
     */
    memberPostRestOffset?: string;

    /**
     * End time of this crew member's rest period after the mission, in ISO 8601 UTC
     * format with millisecond precision.
     */
    memberPostRestTime?: string;

    /**
     * Start time of this crew member's rest period before the mission, in ISO 8601 UTC
     * format with millisecond precision.
     */
    memberPreRestTime?: string;

    /**
     * Remarks concerning the crew member.
     */
    memberRemarks?: string;

    /**
     * Scheduled return time for this crew member, in ISO 8601 UTC format with
     * millisecond precision.
     */
    memberReturnTime?: string;

    /**
     * Time this crew member is scheduled to be alerted for the mission, in ISO 8601
     * UTC format with millisecond precision.
     */
    memberSchedAlertTime?: string;

    /**
     * The military component for the crew member (e.g., ACTIVE, RESERVE, GUARD,
     * UNKNOWN, etc.).
     */
    memberSource?: string;

    /**
     * Stage name for the crew member. A stage is a pool of crews supporting a given
     * operation plan.
     */
    memberStageName?: string;

    /**
     * Flag indicating whether this crew member needs transportation to the departure
     * location.
     */
    memberTransportReq?: boolean;

    /**
     * Amplifying details about the crew member type (e.g. RAVEN, FCC, COMCAM, AIRCREW,
     * MEP, OTHER, etc.).
     */
    memberType?: string;

    /**
     * The middle initial of the crew member.
     */
    middleInitial?: string;

    /**
     * Flag indicating whether this crew member has been notified of an event.
     */
    notified?: boolean;

    /**
     * Crew member lodging phone number.
     */
    phoneNumber?: string;

    /**
     * Code indicating a crew member's current physical fitness status and whether they
     * are medically cleared to fly (e.g., D for Duties Not Including Flying, E for
     * Physical Overdue, etc.).
     */
    physAvCode?: string;

    /**
     * Code indicating a crew member's physical availabiility status (e.g.,
     * DISQUALIFIED, OVERDUE, etc.).
     */
    physAvStatus?: string;

    /**
     * Due date for the crew member's physical, in ISO 8601 UTC format with millisecond
     * precision.
     */
    physDue?: string;

    /**
     * The rank of the crew member.
     */
    rank?: string;

    /**
     * Remark code used to designate attributes of this crew member. For more
     * information, contact the provider source.
     */
    remarkCode?: string;

    /**
     * The primary aircraft type for the crew member according to the personnel
     * resource management system indicated in the crewRMS field.
     */
    rmsMDS?: string;

    /**
     * Time this crew member is required to report for duty before this flight/mission,
     * in ISO 8601 UTC format with millisecond precision.
     */
    showTime?: string;

    /**
     * The squadron the crew member serves.
     */
    squadron?: string;

    /**
     * The date this crew member accomplished physiological or altitude chamber
     * training, in ISO 8601 UTC format with millisecond precision.
     */
    trainingDate?: string;

    /**
     * The Mattermost username of this crew member.
     */
    username?: string;

    /**
     * The wing the crew member serves.
     */
    wing?: string;
  }
}

/**
 * Crew Services.
 */
export interface CrewFull {
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
   * Unique identifier of the formed crew provided by the originating source.
   * Provided for systems that require tracking of an internal system generated ID.
   */
  origCrewId: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Adjusted return time, in ISO 8601 UTC format with millisecond precision.
   */
  adjReturnTime?: string;

  /**
   * Last name of the adjusted return time approver.
   */
  adjReturnTimeApprover?: string;

  /**
   * The aircraft Model Design Series designation assigned for this crew.
   */
  aircraftMDS?: string;

  /**
   * Time the crew was alerted, in ISO 8601 UTC format with millisecond precision.
   */
  alertedTime?: string;

  /**
   * Type of alert for the crew (e.g., ALPHA for maximum readiness, BRAVO for
   * standby, etc.).
   */
  alertType?: string;

  /**
   * The crew's Aviation Resource Management System (ARMS) unit. If multiple units
   * exist, use the Aircraft Commander's Unit.
   */
  armsCrewUnit?: string;

  /**
   * Array of qualification codes assigned to this crew (e.g., AL for Aircraft
   * Leader, CS for Combat Systems Operator, etc.).
   */
  assignedQualCode?: Array<string>;

  /**
   * Unique identifier of the crew commander assigned by the originating source.
   */
  commanderId?: string;

  /**
   * Last four digits of the crew commander's social security number.
   */
  commanderLast4SSN?: string;

  /**
   * The name of the crew commander.
   */
  commanderName?: string;

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
   * Flag indicating whether this crew task takes the crew home and out of the stage.
   */
  crewHome?: boolean;

  /**
   * CrewMembers Collection.
   */
  crewMembers?: Array<CrewFull.CrewMember>;

  /**
   * Name of the formed crew.
   */
  crewName?: string;

  /**
   * The resource management system managing and reporting data on this crew.
   */
  crewRMS?: string;

  /**
   * The crew's role on the mission (e.g., DEADHEAD, MEDICAL, PRIMARY).
   */
  crewRole?: string;

  /**
   * The military component that comprises the crew (e.g., ACTIVE, RESERVE, GUARD,
   * MIXED, UNKNOWN, etc.).
   */
  crewSource?: string;

  /**
   * The squadron the crew serves.
   */
  crewSquadron?: string;

  /**
   * The type of crew required to meet mission objectives (e.g., AIRDROP, AIRLAND,
   * AIR REFUELING, etc.).
   */
  crewType?: string;

  /**
   * The crew's squadron as identified in its resource management system. If the crew
   * is composed of members from multiple units, then the Crew Commander's unit
   * should be indicated as the crew unit.
   */
  crewUnit?: string;

  /**
   * The wing the crew serves.
   */
  crewWing?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of the airfield at
   * which the crew is currently located.
   */
  currentICAO?: string;

  /**
   * Crew Flight Duty Period (FDP) eligibility type.
   */
  fdpEligType?: string;

  /**
   * Flight Duty Period (FDP) type.
   */
  fdpType?: string;

  /**
   * The number of female enlisted crew members.
   */
  femaleEnlistedQty?: number;

  /**
   * The number of female officer crew members.
   */
  femaleOfficerQty?: number;

  /**
   * Authorization number used on the flight order.
   */
  fltAuthNum?: string;

  /**
   * Unique identifier of the Site at which the crew is currently located. This ID
   * can be used to obtain additional information on a Site using the 'get by ID'
   * operation (e.g. /udl/site/{id}). For example, the Site object with idSite = abc
   * would be queried as /udl/site/abc.
   */
  idSiteCurrent?: string;

  /**
   * Unique identifier of the Aircraft Sortie associated with this crew record.
   */
  idSortie?: string;

  /**
   * Initial start time of the crew's linked task that was delinked due to mission
   * closure, in ISO 8601 UTC format with millisecond precision.
   */
  initStartTime?: string;

  /**
   * The last time the crew can be alerted, in ISO 8601 UTC format with millisecond
   * precision.
   */
  lastAlertTime?: string;

  /**
   * Time the crew is legal for alert, in ISO 8601 UTC format with millisecond
   * precision.
   */
  legalAlertTime?: string;

  /**
   * Time the crew is legally authorized or scheduled to remain on standby for duty,
   * in ISO 8601 UTC format with millisecond precision.
   */
  legalBravoTime?: string;

  /**
   * Flag indicating whether this crew is part of a linked flying task.
   */
  linkedTask?: boolean;

  /**
   * The number of male enlisted crew members.
   */
  maleEnlistedQty?: number;

  /**
   * The number of male officer crew members.
   */
  maleOfficerQty?: number;

  /**
   * User-defined alias designation for the mission.
   */
  missionAlias?: string;

  /**
   * The mission ID the crew is supporting according to the source system.
   */
  missionId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The originating source network on which this record was created, auto-populated
   * by the system.
   */
  origNetwork?: string;

  /**
   * The type of personnel that comprises the crew (e.g., AIRCREW, MEDCREW, etc.).
   */
  personnelType?: string;

  /**
   * Time the crew will be picked up from lodging, in ISO 8601 UTC format with
   * millisecond precision.
   */
  pickupTime?: string;

  /**
   * Flag indicating whether post-mission crew rest is applied to the last sortie of
   * a crew's task.
   */
  postRestApplied?: boolean;

  /**
   * End time of the crew rest period after the mission, in ISO 8601 UTC format with
   * millisecond precision.
   */
  postRestEnd?: string;

  /**
   * The scheduled delay or adjustment in the start time of a crew's rest period
   * after a mission, expressed as +/-HH:MM.
   */
  postRestOffset?: string;

  /**
   * Flag indicating whether pre-mission crew rest is applied to the first sortie of
   * a crew's task.
   */
  preRestApplied?: boolean;

  /**
   * Start time of the crew rest period before the mission, in ISO 8601 UTC format
   * with millisecond precision.
   */
  preRestStart?: string;

  /**
   * Array of qualification codes required for this crew (e.g., AL for Aircraft
   * Leader, CS for Combat Systems Operator, etc.).
   */
  reqQualCode?: Array<string>;

  /**
   * Scheduled return time, in ISO 8601 UTC format with millisecond precision.
   */
  returnTime?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The stage 1 qualifications the crew must have for a mission, such as having
   * basic knowledge of crew operations and aircraft systems.
   */
  stage1Qual?: string;

  /**
   * The stage 2 qualifications the crew must have for a mission, such as completion
   * of advanced mission-specific training.
   */
  stage2Qual?: string;

  /**
   * The stage 3 qualifications the crew must have for a mission, such as full
   * mission-ready certification and the capability of leading complex operations.
   */
  stage3Qual?: string;

  /**
   * Stage name for the crew. A stage is a pool of crews supporting a given operation
   * plan.
   */
  stageName?: string;

  /**
   * Time the crew entered the stage, in ISO 8601 UTC format with millisecond
   * precision.
   */
  stageTime?: string;

  /**
   * Crew status (e.g. NEEDCREW, ASSIGNED, APPROVED, NOTIFIED, PARTIAL, UNKNOWN,
   * etc.).
   */
  status?: string;

  /**
   * Flag indicating that one or more crew members requires transportation to the
   * departure location.
   */
  transportReq?: boolean;

  /**
   * Identifies the trip kit needed by the crew. A trip kit contains charts,
   * regulations, maps, etc. carried by the crew during missions.
   */
  tripKit?: string;

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

export namespace CrewFull {
  /**
   * Schema for Crew Member data.
   */
  export interface CrewMember {
    /**
     * Flag indicating whether this crew member has been alerted of the associated
     * task.
     */
    alerted?: boolean;

    /**
     * Flag indicating this crew member is assigned to all sorties of the crew
     * itinerary.
     */
    allSortie?: boolean;

    /**
     * Flag indicating whether this crew member has been approved for the associated
     * task.
     */
    approved?: boolean;

    /**
     * Flag indicating whether this crew member is attached to his/her squadron. Crew
     * members that are not attached are considered assigned.
     */
    attached?: boolean;

    /**
     * The military branch assignment of the crew member.
     */
    branch?: string;

    /**
     * Flag indicating this crew member is a civilian or non-military person.
     */
    civilian?: boolean;

    /**
     * Flag indicating this person is the aircraft commander.
     */
    commander?: boolean;

    /**
     * The crew position of the crew member.
     */
    crewPosition?: string;

    /**
     * The crew member's 10-digit DoD ID number.
     */
    dodID?: string;

    /**
     * The duty position of the crew member.
     */
    dutyPosition?: string;

    /**
     * The current duty status code of this crew member (e.g., AGR for Active Guard and
     * Reserve, IDT for Inactive Duty Training, etc.).
     */
    dutyStatus?: string;

    /**
     * Flag indicating whether this crew member has been notified of an event by email.
     */
    emailed?: boolean;

    /**
     * Flag indicating whether this crew member requires an additional amount of time
     * to report for duty.
     */
    extraTime?: boolean;

    /**
     * The first name of the crew member.
     */
    firstName?: string;

    /**
     * The earliest flying currency expiration date for this crew member, in ISO 8601
     * UTC format with millisecond precision.
     */
    fltCurrencyExp?: string;

    /**
     * The training task identifier associated with the flying currency expiration date
     * for this crew member.
     */
    fltCurrencyExpId?: string;

    /**
     * The date this crew member's records review was completed, in ISO 8601 UTC format
     * with millisecond precision.
     */
    fltRecDate?: string;

    /**
     * The date this crew member's records review is due, in ISO 8601 UTC format with
     * millisecond precision.
     */
    fltRecDue?: string;

    /**
     * The flying squadron assignment of the crew member.
     */
    flySquadron?: string;

    /**
     * Flag indicating whether this crew member is funded.
     */
    funded?: boolean;

    /**
     * Gender of the crew member.
     */
    gender?: string;

    /**
     * The earliest ground currency expiration date for this crew member, in ISO 8601
     * UTC format with millisecond precision.
     */
    gndCurrencyExp?: string;

    /**
     * The training task identifier associated with the ground currency expiration date
     * for this crew member.
     */
    gndCurrencyExpId?: string;

    /**
     * Flag indicating whether this crew member is grounded (i.e., his/her duties do
     * not include flying).
     */
    grounded?: boolean;

    /**
     * Date when this crew member starts acting as guest help for the squadron, in ISO
     * 8601 UTC format with millisecond precision.
     */
    guestStart?: string;

    /**
     * Date when this crew member stops acting as guest help for the squadron, in ISO
     * 8601 UTC format with millisecond precision.
     */
    guestStop?: string;

    /**
     * Last four digits of the crew member's social security number.
     */
    last4SSN?: string;

    /**
     * Date of the last flight for this crew member, in ISO 8601 UTC format with
     * millisecond precision.
     */
    lastFltDate?: string;

    /**
     * The last name of the crew member.
     */
    lastName?: string;

    /**
     * The squadron the crew member has been temporarily loaned to.
     */
    loanedTo?: string;

    /**
     * Crew member lodging location.
     */
    lodging?: string;

    /**
     * Time this crew member was actually alerted for the mission, in ISO 8601 UTC
     * format with millisecond precision.
     */
    memberActualAlertTime?: string;

    /**
     * Adjusted return time for the crew member, in ISO 8601 UTC format with
     * millisecond precision.
     */
    memberAdjReturnTime?: string;

    /**
     * Last name of the crew member's adjusted return time approver.
     */
    memberAdjReturnTimeApprover?: string;

    /**
     * Unique identifier of the crew member assigned by the originating source.
     */
    memberId?: string;

    /**
     * Initial start time of the crew member's linked task that was delinked due to
     * mission closure, in ISO 8601 UTC format with millisecond precision.
     */
    memberInitStartTime?: string;

    /**
     * The latest possible time the crew member can legally be alerted for a task, in
     * ISO 8601 UTC format with millisecond precision.
     */
    memberLastAlertTime?: string;

    /**
     * Time this crew member becomes eligible to be alerted for the mission, in ISO
     * 8601 UTC format with millisecond precision.
     */
    memberLegalAlertTime?: string;

    /**
     * Time this crew member will be picked up from lodging, in ISO 8601 UTC format
     * with millisecond precision.
     */
    memberPickupTime?: string;

    /**
     * The scheduled delay or adjustment in the start time of a crew member's rest
     * period after a mission, expressed as +/-HH:MM.
     */
    memberPostRestOffset?: string;

    /**
     * End time of this crew member's rest period after the mission, in ISO 8601 UTC
     * format with millisecond precision.
     */
    memberPostRestTime?: string;

    /**
     * Start time of this crew member's rest period before the mission, in ISO 8601 UTC
     * format with millisecond precision.
     */
    memberPreRestTime?: string;

    /**
     * Remarks concerning the crew member.
     */
    memberRemarks?: string;

    /**
     * Scheduled return time for this crew member, in ISO 8601 UTC format with
     * millisecond precision.
     */
    memberReturnTime?: string;

    /**
     * Time this crew member is scheduled to be alerted for the mission, in ISO 8601
     * UTC format with millisecond precision.
     */
    memberSchedAlertTime?: string;

    /**
     * The military component for the crew member (e.g., ACTIVE, RESERVE, GUARD,
     * UNKNOWN, etc.).
     */
    memberSource?: string;

    /**
     * Stage name for the crew member. A stage is a pool of crews supporting a given
     * operation plan.
     */
    memberStageName?: string;

    /**
     * Flag indicating whether this crew member needs transportation to the departure
     * location.
     */
    memberTransportReq?: boolean;

    /**
     * Amplifying details about the crew member type (e.g. RAVEN, FCC, COMCAM, AIRCREW,
     * MEP, OTHER, etc.).
     */
    memberType?: string;

    /**
     * The middle initial of the crew member.
     */
    middleInitial?: string;

    /**
     * Flag indicating whether this crew member has been notified of an event.
     */
    notified?: boolean;

    /**
     * Crew member lodging phone number.
     */
    phoneNumber?: string;

    /**
     * Code indicating a crew member's current physical fitness status and whether they
     * are medically cleared to fly (e.g., D for Duties Not Including Flying, E for
     * Physical Overdue, etc.).
     */
    physAvCode?: string;

    /**
     * Code indicating a crew member's physical availabiility status (e.g.,
     * DISQUALIFIED, OVERDUE, etc.).
     */
    physAvStatus?: string;

    /**
     * Due date for the crew member's physical, in ISO 8601 UTC format with millisecond
     * precision.
     */
    physDue?: string;

    /**
     * The rank of the crew member.
     */
    rank?: string;

    /**
     * Remark code used to designate attributes of this crew member. For more
     * information, contact the provider source.
     */
    remarkCode?: string;

    /**
     * The primary aircraft type for the crew member according to the personnel
     * resource management system indicated in the crewRMS field.
     */
    rmsMDS?: string;

    /**
     * Time this crew member is required to report for duty before this flight/mission,
     * in ISO 8601 UTC format with millisecond precision.
     */
    showTime?: string;

    /**
     * The squadron the crew member serves.
     */
    squadron?: string;

    /**
     * The date this crew member accomplished physiological or altitude chamber
     * training, in ISO 8601 UTC format with millisecond precision.
     */
    trainingDate?: string;

    /**
     * The Mattermost username of this crew member.
     */
    username?: string;

    /**
     * The wing the crew member serves.
     */
    wing?: string;
  }
}

export type CrewListResponse = Array<CrewAbridged>;

export type CrewCountResponse = string;

export type CrewTupleResponse = Array<CrewFull>;

export interface CrewCreateParams {
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
   * Unique identifier of the formed crew provided by the originating source.
   * Provided for systems that require tracking of an internal system generated ID.
   */
  origCrewId: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Adjusted return time, in ISO 8601 UTC format with millisecond precision.
   */
  adjReturnTime?: string;

  /**
   * Last name of the adjusted return time approver.
   */
  adjReturnTimeApprover?: string;

  /**
   * The aircraft Model Design Series designation assigned for this crew.
   */
  aircraftMDS?: string;

  /**
   * Time the crew was alerted, in ISO 8601 UTC format with millisecond precision.
   */
  alertedTime?: string;

  /**
   * Type of alert for the crew (e.g., ALPHA for maximum readiness, BRAVO for
   * standby, etc.).
   */
  alertType?: string;

  /**
   * The crew's Aviation Resource Management System (ARMS) unit. If multiple units
   * exist, use the Aircraft Commander's Unit.
   */
  armsCrewUnit?: string;

  /**
   * Array of qualification codes assigned to this crew (e.g., AL for Aircraft
   * Leader, CS for Combat Systems Operator, etc.).
   */
  assignedQualCode?: Array<string>;

  /**
   * Unique identifier of the crew commander assigned by the originating source.
   */
  commanderId?: string;

  /**
   * Last four digits of the crew commander's social security number.
   */
  commanderLast4SSN?: string;

  /**
   * The name of the crew commander.
   */
  commanderName?: string;

  /**
   * Flag indicating whether this crew task takes the crew home and out of the stage.
   */
  crewHome?: boolean;

  /**
   * CrewMembers Collection.
   */
  crewMembers?: Array<CrewCreateParams.CrewMember>;

  /**
   * Name of the formed crew.
   */
  crewName?: string;

  /**
   * The resource management system managing and reporting data on this crew.
   */
  crewRMS?: string;

  /**
   * The crew's role on the mission (e.g., DEADHEAD, MEDICAL, PRIMARY).
   */
  crewRole?: string;

  /**
   * The military component that comprises the crew (e.g., ACTIVE, RESERVE, GUARD,
   * MIXED, UNKNOWN, etc.).
   */
  crewSource?: string;

  /**
   * The squadron the crew serves.
   */
  crewSquadron?: string;

  /**
   * The type of crew required to meet mission objectives (e.g., AIRDROP, AIRLAND,
   * AIR REFUELING, etc.).
   */
  crewType?: string;

  /**
   * The crew's squadron as identified in its resource management system. If the crew
   * is composed of members from multiple units, then the Crew Commander's unit
   * should be indicated as the crew unit.
   */
  crewUnit?: string;

  /**
   * The wing the crew serves.
   */
  crewWing?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of the airfield at
   * which the crew is currently located.
   */
  currentICAO?: string;

  /**
   * Crew Flight Duty Period (FDP) eligibility type.
   */
  fdpEligType?: string;

  /**
   * Flight Duty Period (FDP) type.
   */
  fdpType?: string;

  /**
   * The number of female enlisted crew members.
   */
  femaleEnlistedQty?: number;

  /**
   * The number of female officer crew members.
   */
  femaleOfficerQty?: number;

  /**
   * Authorization number used on the flight order.
   */
  fltAuthNum?: string;

  /**
   * Unique identifier of the Site at which the crew is currently located. This ID
   * can be used to obtain additional information on a Site using the 'get by ID'
   * operation (e.g. /udl/site/{id}). For example, the Site object with idSite = abc
   * would be queried as /udl/site/abc.
   */
  idSiteCurrent?: string;

  /**
   * Unique identifier of the Aircraft Sortie associated with this crew record.
   */
  idSortie?: string;

  /**
   * Initial start time of the crew's linked task that was delinked due to mission
   * closure, in ISO 8601 UTC format with millisecond precision.
   */
  initStartTime?: string;

  /**
   * The last time the crew can be alerted, in ISO 8601 UTC format with millisecond
   * precision.
   */
  lastAlertTime?: string;

  /**
   * Time the crew is legal for alert, in ISO 8601 UTC format with millisecond
   * precision.
   */
  legalAlertTime?: string;

  /**
   * Time the crew is legally authorized or scheduled to remain on standby for duty,
   * in ISO 8601 UTC format with millisecond precision.
   */
  legalBravoTime?: string;

  /**
   * Flag indicating whether this crew is part of a linked flying task.
   */
  linkedTask?: boolean;

  /**
   * The number of male enlisted crew members.
   */
  maleEnlistedQty?: number;

  /**
   * The number of male officer crew members.
   */
  maleOfficerQty?: number;

  /**
   * User-defined alias designation for the mission.
   */
  missionAlias?: string;

  /**
   * The mission ID the crew is supporting according to the source system.
   */
  missionId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The type of personnel that comprises the crew (e.g., AIRCREW, MEDCREW, etc.).
   */
  personnelType?: string;

  /**
   * Time the crew will be picked up from lodging, in ISO 8601 UTC format with
   * millisecond precision.
   */
  pickupTime?: string;

  /**
   * Flag indicating whether post-mission crew rest is applied to the last sortie of
   * a crew's task.
   */
  postRestApplied?: boolean;

  /**
   * End time of the crew rest period after the mission, in ISO 8601 UTC format with
   * millisecond precision.
   */
  postRestEnd?: string;

  /**
   * The scheduled delay or adjustment in the start time of a crew's rest period
   * after a mission, expressed as +/-HH:MM.
   */
  postRestOffset?: string;

  /**
   * Flag indicating whether pre-mission crew rest is applied to the first sortie of
   * a crew's task.
   */
  preRestApplied?: boolean;

  /**
   * Start time of the crew rest period before the mission, in ISO 8601 UTC format
   * with millisecond precision.
   */
  preRestStart?: string;

  /**
   * Array of qualification codes required for this crew (e.g., AL for Aircraft
   * Leader, CS for Combat Systems Operator, etc.).
   */
  reqQualCode?: Array<string>;

  /**
   * Scheduled return time, in ISO 8601 UTC format with millisecond precision.
   */
  returnTime?: string;

  /**
   * The stage 1 qualifications the crew must have for a mission, such as having
   * basic knowledge of crew operations and aircraft systems.
   */
  stage1Qual?: string;

  /**
   * The stage 2 qualifications the crew must have for a mission, such as completion
   * of advanced mission-specific training.
   */
  stage2Qual?: string;

  /**
   * The stage 3 qualifications the crew must have for a mission, such as full
   * mission-ready certification and the capability of leading complex operations.
   */
  stage3Qual?: string;

  /**
   * Stage name for the crew. A stage is a pool of crews supporting a given operation
   * plan.
   */
  stageName?: string;

  /**
   * Time the crew entered the stage, in ISO 8601 UTC format with millisecond
   * precision.
   */
  stageTime?: string;

  /**
   * Crew status (e.g. NEEDCREW, ASSIGNED, APPROVED, NOTIFIED, PARTIAL, UNKNOWN,
   * etc.).
   */
  status?: string;

  /**
   * Flag indicating that one or more crew members requires transportation to the
   * departure location.
   */
  transportReq?: boolean;

  /**
   * Identifies the trip kit needed by the crew. A trip kit contains charts,
   * regulations, maps, etc. carried by the crew during missions.
   */
  tripKit?: string;
}

export namespace CrewCreateParams {
  /**
   * Schema for Crew Member data.
   */
  export interface CrewMember {
    /**
     * Flag indicating whether this crew member has been alerted of the associated
     * task.
     */
    alerted?: boolean;

    /**
     * Flag indicating this crew member is assigned to all sorties of the crew
     * itinerary.
     */
    allSortie?: boolean;

    /**
     * Flag indicating whether this crew member has been approved for the associated
     * task.
     */
    approved?: boolean;

    /**
     * Flag indicating whether this crew member is attached to his/her squadron. Crew
     * members that are not attached are considered assigned.
     */
    attached?: boolean;

    /**
     * The military branch assignment of the crew member.
     */
    branch?: string;

    /**
     * Flag indicating this crew member is a civilian or non-military person.
     */
    civilian?: boolean;

    /**
     * Flag indicating this person is the aircraft commander.
     */
    commander?: boolean;

    /**
     * The crew position of the crew member.
     */
    crewPosition?: string;

    /**
     * The crew member's 10-digit DoD ID number.
     */
    dodID?: string;

    /**
     * The duty position of the crew member.
     */
    dutyPosition?: string;

    /**
     * The current duty status code of this crew member (e.g., AGR for Active Guard and
     * Reserve, IDT for Inactive Duty Training, etc.).
     */
    dutyStatus?: string;

    /**
     * Flag indicating whether this crew member has been notified of an event by email.
     */
    emailed?: boolean;

    /**
     * Flag indicating whether this crew member requires an additional amount of time
     * to report for duty.
     */
    extraTime?: boolean;

    /**
     * The first name of the crew member.
     */
    firstName?: string;

    /**
     * The earliest flying currency expiration date for this crew member, in ISO 8601
     * UTC format with millisecond precision.
     */
    fltCurrencyExp?: string;

    /**
     * The training task identifier associated with the flying currency expiration date
     * for this crew member.
     */
    fltCurrencyExpId?: string;

    /**
     * The date this crew member's records review was completed, in ISO 8601 UTC format
     * with millisecond precision.
     */
    fltRecDate?: string;

    /**
     * The date this crew member's records review is due, in ISO 8601 UTC format with
     * millisecond precision.
     */
    fltRecDue?: string;

    /**
     * The flying squadron assignment of the crew member.
     */
    flySquadron?: string;

    /**
     * Flag indicating whether this crew member is funded.
     */
    funded?: boolean;

    /**
     * Gender of the crew member.
     */
    gender?: string;

    /**
     * The earliest ground currency expiration date for this crew member, in ISO 8601
     * UTC format with millisecond precision.
     */
    gndCurrencyExp?: string;

    /**
     * The training task identifier associated with the ground currency expiration date
     * for this crew member.
     */
    gndCurrencyExpId?: string;

    /**
     * Flag indicating whether this crew member is grounded (i.e., his/her duties do
     * not include flying).
     */
    grounded?: boolean;

    /**
     * Date when this crew member starts acting as guest help for the squadron, in ISO
     * 8601 UTC format with millisecond precision.
     */
    guestStart?: string;

    /**
     * Date when this crew member stops acting as guest help for the squadron, in ISO
     * 8601 UTC format with millisecond precision.
     */
    guestStop?: string;

    /**
     * Last four digits of the crew member's social security number.
     */
    last4SSN?: string;

    /**
     * Date of the last flight for this crew member, in ISO 8601 UTC format with
     * millisecond precision.
     */
    lastFltDate?: string;

    /**
     * The last name of the crew member.
     */
    lastName?: string;

    /**
     * The squadron the crew member has been temporarily loaned to.
     */
    loanedTo?: string;

    /**
     * Crew member lodging location.
     */
    lodging?: string;

    /**
     * Time this crew member was actually alerted for the mission, in ISO 8601 UTC
     * format with millisecond precision.
     */
    memberActualAlertTime?: string;

    /**
     * Adjusted return time for the crew member, in ISO 8601 UTC format with
     * millisecond precision.
     */
    memberAdjReturnTime?: string;

    /**
     * Last name of the crew member's adjusted return time approver.
     */
    memberAdjReturnTimeApprover?: string;

    /**
     * Unique identifier of the crew member assigned by the originating source.
     */
    memberId?: string;

    /**
     * Initial start time of the crew member's linked task that was delinked due to
     * mission closure, in ISO 8601 UTC format with millisecond precision.
     */
    memberInitStartTime?: string;

    /**
     * The latest possible time the crew member can legally be alerted for a task, in
     * ISO 8601 UTC format with millisecond precision.
     */
    memberLastAlertTime?: string;

    /**
     * Time this crew member becomes eligible to be alerted for the mission, in ISO
     * 8601 UTC format with millisecond precision.
     */
    memberLegalAlertTime?: string;

    /**
     * Time this crew member will be picked up from lodging, in ISO 8601 UTC format
     * with millisecond precision.
     */
    memberPickupTime?: string;

    /**
     * The scheduled delay or adjustment in the start time of a crew member's rest
     * period after a mission, expressed as +/-HH:MM.
     */
    memberPostRestOffset?: string;

    /**
     * End time of this crew member's rest period after the mission, in ISO 8601 UTC
     * format with millisecond precision.
     */
    memberPostRestTime?: string;

    /**
     * Start time of this crew member's rest period before the mission, in ISO 8601 UTC
     * format with millisecond precision.
     */
    memberPreRestTime?: string;

    /**
     * Remarks concerning the crew member.
     */
    memberRemarks?: string;

    /**
     * Scheduled return time for this crew member, in ISO 8601 UTC format with
     * millisecond precision.
     */
    memberReturnTime?: string;

    /**
     * Time this crew member is scheduled to be alerted for the mission, in ISO 8601
     * UTC format with millisecond precision.
     */
    memberSchedAlertTime?: string;

    /**
     * The military component for the crew member (e.g., ACTIVE, RESERVE, GUARD,
     * UNKNOWN, etc.).
     */
    memberSource?: string;

    /**
     * Stage name for the crew member. A stage is a pool of crews supporting a given
     * operation plan.
     */
    memberStageName?: string;

    /**
     * Flag indicating whether this crew member needs transportation to the departure
     * location.
     */
    memberTransportReq?: boolean;

    /**
     * Amplifying details about the crew member type (e.g. RAVEN, FCC, COMCAM, AIRCREW,
     * MEP, OTHER, etc.).
     */
    memberType?: string;

    /**
     * The middle initial of the crew member.
     */
    middleInitial?: string;

    /**
     * Flag indicating whether this crew member has been notified of an event.
     */
    notified?: boolean;

    /**
     * Crew member lodging phone number.
     */
    phoneNumber?: string;

    /**
     * Code indicating a crew member's current physical fitness status and whether they
     * are medically cleared to fly (e.g., D for Duties Not Including Flying, E for
     * Physical Overdue, etc.).
     */
    physAvCode?: string;

    /**
     * Code indicating a crew member's physical availabiility status (e.g.,
     * DISQUALIFIED, OVERDUE, etc.).
     */
    physAvStatus?: string;

    /**
     * Due date for the crew member's physical, in ISO 8601 UTC format with millisecond
     * precision.
     */
    physDue?: string;

    /**
     * The rank of the crew member.
     */
    rank?: string;

    /**
     * Remark code used to designate attributes of this crew member. For more
     * information, contact the provider source.
     */
    remarkCode?: string;

    /**
     * The primary aircraft type for the crew member according to the personnel
     * resource management system indicated in the crewRMS field.
     */
    rmsMDS?: string;

    /**
     * Time this crew member is required to report for duty before this flight/mission,
     * in ISO 8601 UTC format with millisecond precision.
     */
    showTime?: string;

    /**
     * The squadron the crew member serves.
     */
    squadron?: string;

    /**
     * The date this crew member accomplished physiological or altitude chamber
     * training, in ISO 8601 UTC format with millisecond precision.
     */
    trainingDate?: string;

    /**
     * The Mattermost username of this crew member.
     */
    username?: string;

    /**
     * The wing the crew member serves.
     */
    wing?: string;
  }
}

export interface CrewRetrieveParams {
  firstResult?: number;

  maxResult?: number;
}

export interface CrewUpdateParams {
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
   * Unique identifier of the formed crew provided by the originating source.
   * Provided for systems that require tracking of an internal system generated ID.
   */
  origCrewId: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Adjusted return time, in ISO 8601 UTC format with millisecond precision.
   */
  adjReturnTime?: string;

  /**
   * Last name of the adjusted return time approver.
   */
  adjReturnTimeApprover?: string;

  /**
   * The aircraft Model Design Series designation assigned for this crew.
   */
  aircraftMDS?: string;

  /**
   * Time the crew was alerted, in ISO 8601 UTC format with millisecond precision.
   */
  alertedTime?: string;

  /**
   * Type of alert for the crew (e.g., ALPHA for maximum readiness, BRAVO for
   * standby, etc.).
   */
  alertType?: string;

  /**
   * The crew's Aviation Resource Management System (ARMS) unit. If multiple units
   * exist, use the Aircraft Commander's Unit.
   */
  armsCrewUnit?: string;

  /**
   * Array of qualification codes assigned to this crew (e.g., AL for Aircraft
   * Leader, CS for Combat Systems Operator, etc.).
   */
  assignedQualCode?: Array<string>;

  /**
   * Unique identifier of the crew commander assigned by the originating source.
   */
  commanderId?: string;

  /**
   * Last four digits of the crew commander's social security number.
   */
  commanderLast4SSN?: string;

  /**
   * The name of the crew commander.
   */
  commanderName?: string;

  /**
   * Flag indicating whether this crew task takes the crew home and out of the stage.
   */
  crewHome?: boolean;

  /**
   * CrewMembers Collection.
   */
  crewMembers?: Array<CrewUpdateParams.CrewMember>;

  /**
   * Name of the formed crew.
   */
  crewName?: string;

  /**
   * The resource management system managing and reporting data on this crew.
   */
  crewRMS?: string;

  /**
   * The crew's role on the mission (e.g., DEADHEAD, MEDICAL, PRIMARY).
   */
  crewRole?: string;

  /**
   * The military component that comprises the crew (e.g., ACTIVE, RESERVE, GUARD,
   * MIXED, UNKNOWN, etc.).
   */
  crewSource?: string;

  /**
   * The squadron the crew serves.
   */
  crewSquadron?: string;

  /**
   * The type of crew required to meet mission objectives (e.g., AIRDROP, AIRLAND,
   * AIR REFUELING, etc.).
   */
  crewType?: string;

  /**
   * The crew's squadron as identified in its resource management system. If the crew
   * is composed of members from multiple units, then the Crew Commander's unit
   * should be indicated as the crew unit.
   */
  crewUnit?: string;

  /**
   * The wing the crew serves.
   */
  crewWing?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of the airfield at
   * which the crew is currently located.
   */
  currentICAO?: string;

  /**
   * Crew Flight Duty Period (FDP) eligibility type.
   */
  fdpEligType?: string;

  /**
   * Flight Duty Period (FDP) type.
   */
  fdpType?: string;

  /**
   * The number of female enlisted crew members.
   */
  femaleEnlistedQty?: number;

  /**
   * The number of female officer crew members.
   */
  femaleOfficerQty?: number;

  /**
   * Authorization number used on the flight order.
   */
  fltAuthNum?: string;

  /**
   * Unique identifier of the Site at which the crew is currently located. This ID
   * can be used to obtain additional information on a Site using the 'get by ID'
   * operation (e.g. /udl/site/{id}). For example, the Site object with idSite = abc
   * would be queried as /udl/site/abc.
   */
  idSiteCurrent?: string;

  /**
   * Unique identifier of the Aircraft Sortie associated with this crew record.
   */
  idSortie?: string;

  /**
   * Initial start time of the crew's linked task that was delinked due to mission
   * closure, in ISO 8601 UTC format with millisecond precision.
   */
  initStartTime?: string;

  /**
   * The last time the crew can be alerted, in ISO 8601 UTC format with millisecond
   * precision.
   */
  lastAlertTime?: string;

  /**
   * Time the crew is legal for alert, in ISO 8601 UTC format with millisecond
   * precision.
   */
  legalAlertTime?: string;

  /**
   * Time the crew is legally authorized or scheduled to remain on standby for duty,
   * in ISO 8601 UTC format with millisecond precision.
   */
  legalBravoTime?: string;

  /**
   * Flag indicating whether this crew is part of a linked flying task.
   */
  linkedTask?: boolean;

  /**
   * The number of male enlisted crew members.
   */
  maleEnlistedQty?: number;

  /**
   * The number of male officer crew members.
   */
  maleOfficerQty?: number;

  /**
   * User-defined alias designation for the mission.
   */
  missionAlias?: string;

  /**
   * The mission ID the crew is supporting according to the source system.
   */
  missionId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The type of personnel that comprises the crew (e.g., AIRCREW, MEDCREW, etc.).
   */
  personnelType?: string;

  /**
   * Time the crew will be picked up from lodging, in ISO 8601 UTC format with
   * millisecond precision.
   */
  pickupTime?: string;

  /**
   * Flag indicating whether post-mission crew rest is applied to the last sortie of
   * a crew's task.
   */
  postRestApplied?: boolean;

  /**
   * End time of the crew rest period after the mission, in ISO 8601 UTC format with
   * millisecond precision.
   */
  postRestEnd?: string;

  /**
   * The scheduled delay or adjustment in the start time of a crew's rest period
   * after a mission, expressed as +/-HH:MM.
   */
  postRestOffset?: string;

  /**
   * Flag indicating whether pre-mission crew rest is applied to the first sortie of
   * a crew's task.
   */
  preRestApplied?: boolean;

  /**
   * Start time of the crew rest period before the mission, in ISO 8601 UTC format
   * with millisecond precision.
   */
  preRestStart?: string;

  /**
   * Array of qualification codes required for this crew (e.g., AL for Aircraft
   * Leader, CS for Combat Systems Operator, etc.).
   */
  reqQualCode?: Array<string>;

  /**
   * Scheduled return time, in ISO 8601 UTC format with millisecond precision.
   */
  returnTime?: string;

  /**
   * The stage 1 qualifications the crew must have for a mission, such as having
   * basic knowledge of crew operations and aircraft systems.
   */
  stage1Qual?: string;

  /**
   * The stage 2 qualifications the crew must have for a mission, such as completion
   * of advanced mission-specific training.
   */
  stage2Qual?: string;

  /**
   * The stage 3 qualifications the crew must have for a mission, such as full
   * mission-ready certification and the capability of leading complex operations.
   */
  stage3Qual?: string;

  /**
   * Stage name for the crew. A stage is a pool of crews supporting a given operation
   * plan.
   */
  stageName?: string;

  /**
   * Time the crew entered the stage, in ISO 8601 UTC format with millisecond
   * precision.
   */
  stageTime?: string;

  /**
   * Crew status (e.g. NEEDCREW, ASSIGNED, APPROVED, NOTIFIED, PARTIAL, UNKNOWN,
   * etc.).
   */
  status?: string;

  /**
   * Flag indicating that one or more crew members requires transportation to the
   * departure location.
   */
  transportReq?: boolean;

  /**
   * Identifies the trip kit needed by the crew. A trip kit contains charts,
   * regulations, maps, etc. carried by the crew during missions.
   */
  tripKit?: string;
}

export namespace CrewUpdateParams {
  /**
   * Schema for Crew Member data.
   */
  export interface CrewMember {
    /**
     * Flag indicating whether this crew member has been alerted of the associated
     * task.
     */
    alerted?: boolean;

    /**
     * Flag indicating this crew member is assigned to all sorties of the crew
     * itinerary.
     */
    allSortie?: boolean;

    /**
     * Flag indicating whether this crew member has been approved for the associated
     * task.
     */
    approved?: boolean;

    /**
     * Flag indicating whether this crew member is attached to his/her squadron. Crew
     * members that are not attached are considered assigned.
     */
    attached?: boolean;

    /**
     * The military branch assignment of the crew member.
     */
    branch?: string;

    /**
     * Flag indicating this crew member is a civilian or non-military person.
     */
    civilian?: boolean;

    /**
     * Flag indicating this person is the aircraft commander.
     */
    commander?: boolean;

    /**
     * The crew position of the crew member.
     */
    crewPosition?: string;

    /**
     * The crew member's 10-digit DoD ID number.
     */
    dodID?: string;

    /**
     * The duty position of the crew member.
     */
    dutyPosition?: string;

    /**
     * The current duty status code of this crew member (e.g., AGR for Active Guard and
     * Reserve, IDT for Inactive Duty Training, etc.).
     */
    dutyStatus?: string;

    /**
     * Flag indicating whether this crew member has been notified of an event by email.
     */
    emailed?: boolean;

    /**
     * Flag indicating whether this crew member requires an additional amount of time
     * to report for duty.
     */
    extraTime?: boolean;

    /**
     * The first name of the crew member.
     */
    firstName?: string;

    /**
     * The earliest flying currency expiration date for this crew member, in ISO 8601
     * UTC format with millisecond precision.
     */
    fltCurrencyExp?: string;

    /**
     * The training task identifier associated with the flying currency expiration date
     * for this crew member.
     */
    fltCurrencyExpId?: string;

    /**
     * The date this crew member's records review was completed, in ISO 8601 UTC format
     * with millisecond precision.
     */
    fltRecDate?: string;

    /**
     * The date this crew member's records review is due, in ISO 8601 UTC format with
     * millisecond precision.
     */
    fltRecDue?: string;

    /**
     * The flying squadron assignment of the crew member.
     */
    flySquadron?: string;

    /**
     * Flag indicating whether this crew member is funded.
     */
    funded?: boolean;

    /**
     * Gender of the crew member.
     */
    gender?: string;

    /**
     * The earliest ground currency expiration date for this crew member, in ISO 8601
     * UTC format with millisecond precision.
     */
    gndCurrencyExp?: string;

    /**
     * The training task identifier associated with the ground currency expiration date
     * for this crew member.
     */
    gndCurrencyExpId?: string;

    /**
     * Flag indicating whether this crew member is grounded (i.e., his/her duties do
     * not include flying).
     */
    grounded?: boolean;

    /**
     * Date when this crew member starts acting as guest help for the squadron, in ISO
     * 8601 UTC format with millisecond precision.
     */
    guestStart?: string;

    /**
     * Date when this crew member stops acting as guest help for the squadron, in ISO
     * 8601 UTC format with millisecond precision.
     */
    guestStop?: string;

    /**
     * Last four digits of the crew member's social security number.
     */
    last4SSN?: string;

    /**
     * Date of the last flight for this crew member, in ISO 8601 UTC format with
     * millisecond precision.
     */
    lastFltDate?: string;

    /**
     * The last name of the crew member.
     */
    lastName?: string;

    /**
     * The squadron the crew member has been temporarily loaned to.
     */
    loanedTo?: string;

    /**
     * Crew member lodging location.
     */
    lodging?: string;

    /**
     * Time this crew member was actually alerted for the mission, in ISO 8601 UTC
     * format with millisecond precision.
     */
    memberActualAlertTime?: string;

    /**
     * Adjusted return time for the crew member, in ISO 8601 UTC format with
     * millisecond precision.
     */
    memberAdjReturnTime?: string;

    /**
     * Last name of the crew member's adjusted return time approver.
     */
    memberAdjReturnTimeApprover?: string;

    /**
     * Unique identifier of the crew member assigned by the originating source.
     */
    memberId?: string;

    /**
     * Initial start time of the crew member's linked task that was delinked due to
     * mission closure, in ISO 8601 UTC format with millisecond precision.
     */
    memberInitStartTime?: string;

    /**
     * The latest possible time the crew member can legally be alerted for a task, in
     * ISO 8601 UTC format with millisecond precision.
     */
    memberLastAlertTime?: string;

    /**
     * Time this crew member becomes eligible to be alerted for the mission, in ISO
     * 8601 UTC format with millisecond precision.
     */
    memberLegalAlertTime?: string;

    /**
     * Time this crew member will be picked up from lodging, in ISO 8601 UTC format
     * with millisecond precision.
     */
    memberPickupTime?: string;

    /**
     * The scheduled delay or adjustment in the start time of a crew member's rest
     * period after a mission, expressed as +/-HH:MM.
     */
    memberPostRestOffset?: string;

    /**
     * End time of this crew member's rest period after the mission, in ISO 8601 UTC
     * format with millisecond precision.
     */
    memberPostRestTime?: string;

    /**
     * Start time of this crew member's rest period before the mission, in ISO 8601 UTC
     * format with millisecond precision.
     */
    memberPreRestTime?: string;

    /**
     * Remarks concerning the crew member.
     */
    memberRemarks?: string;

    /**
     * Scheduled return time for this crew member, in ISO 8601 UTC format with
     * millisecond precision.
     */
    memberReturnTime?: string;

    /**
     * Time this crew member is scheduled to be alerted for the mission, in ISO 8601
     * UTC format with millisecond precision.
     */
    memberSchedAlertTime?: string;

    /**
     * The military component for the crew member (e.g., ACTIVE, RESERVE, GUARD,
     * UNKNOWN, etc.).
     */
    memberSource?: string;

    /**
     * Stage name for the crew member. A stage is a pool of crews supporting a given
     * operation plan.
     */
    memberStageName?: string;

    /**
     * Flag indicating whether this crew member needs transportation to the departure
     * location.
     */
    memberTransportReq?: boolean;

    /**
     * Amplifying details about the crew member type (e.g. RAVEN, FCC, COMCAM, AIRCREW,
     * MEP, OTHER, etc.).
     */
    memberType?: string;

    /**
     * The middle initial of the crew member.
     */
    middleInitial?: string;

    /**
     * Flag indicating whether this crew member has been notified of an event.
     */
    notified?: boolean;

    /**
     * Crew member lodging phone number.
     */
    phoneNumber?: string;

    /**
     * Code indicating a crew member's current physical fitness status and whether they
     * are medically cleared to fly (e.g., D for Duties Not Including Flying, E for
     * Physical Overdue, etc.).
     */
    physAvCode?: string;

    /**
     * Code indicating a crew member's physical availabiility status (e.g.,
     * DISQUALIFIED, OVERDUE, etc.).
     */
    physAvStatus?: string;

    /**
     * Due date for the crew member's physical, in ISO 8601 UTC format with millisecond
     * precision.
     */
    physDue?: string;

    /**
     * The rank of the crew member.
     */
    rank?: string;

    /**
     * Remark code used to designate attributes of this crew member. For more
     * information, contact the provider source.
     */
    remarkCode?: string;

    /**
     * The primary aircraft type for the crew member according to the personnel
     * resource management system indicated in the crewRMS field.
     */
    rmsMDS?: string;

    /**
     * Time this crew member is required to report for duty before this flight/mission,
     * in ISO 8601 UTC format with millisecond precision.
     */
    showTime?: string;

    /**
     * The squadron the crew member serves.
     */
    squadron?: string;

    /**
     * The date this crew member accomplished physiological or altitude chamber
     * training, in ISO 8601 UTC format with millisecond precision.
     */
    trainingDate?: string;

    /**
     * The Mattermost username of this crew member.
     */
    username?: string;

    /**
     * The wing the crew member serves.
     */
    wing?: string;
  }
}

export interface CrewListParams {
  firstResult?: number;

  maxResult?: number;
}

export interface CrewCountParams {
  firstResult?: number;

  maxResult?: number;
}

export interface CrewTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  firstResult?: number;

  maxResult?: number;
}

export interface CrewUnvalidatedPublishParams {
  body: Array<CrewUnvalidatedPublishParams.Body>;
}

export namespace CrewUnvalidatedPublishParams {
  /**
   * Crew Services.
   */
  export interface Body {
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
     * Unique identifier of the formed crew provided by the originating source.
     * Provided for systems that require tracking of an internal system generated ID.
     */
    origCrewId: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Adjusted return time, in ISO 8601 UTC format with millisecond precision.
     */
    adjReturnTime?: string;

    /**
     * Last name of the adjusted return time approver.
     */
    adjReturnTimeApprover?: string;

    /**
     * The aircraft Model Design Series designation assigned for this crew.
     */
    aircraftMDS?: string;

    /**
     * Time the crew was alerted, in ISO 8601 UTC format with millisecond precision.
     */
    alertedTime?: string;

    /**
     * Type of alert for the crew (e.g., ALPHA for maximum readiness, BRAVO for
     * standby, etc.).
     */
    alertType?: string;

    /**
     * The crew's Aviation Resource Management System (ARMS) unit. If multiple units
     * exist, use the Aircraft Commander's Unit.
     */
    armsCrewUnit?: string;

    /**
     * Array of qualification codes assigned to this crew (e.g., AL for Aircraft
     * Leader, CS for Combat Systems Operator, etc.).
     */
    assignedQualCode?: Array<string>;

    /**
     * Unique identifier of the crew commander assigned by the originating source.
     */
    commanderId?: string;

    /**
     * Last four digits of the crew commander's social security number.
     */
    commanderLast4SSN?: string;

    /**
     * The name of the crew commander.
     */
    commanderName?: string;

    /**
     * Flag indicating whether this crew task takes the crew home and out of the stage.
     */
    crewHome?: boolean;

    /**
     * CrewMembers Collection.
     */
    crewMembers?: Array<Body.CrewMember>;

    /**
     * Name of the formed crew.
     */
    crewName?: string;

    /**
     * The resource management system managing and reporting data on this crew.
     */
    crewRMS?: string;

    /**
     * The crew's role on the mission (e.g., DEADHEAD, MEDICAL, PRIMARY).
     */
    crewRole?: string;

    /**
     * The military component that comprises the crew (e.g., ACTIVE, RESERVE, GUARD,
     * MIXED, UNKNOWN, etc.).
     */
    crewSource?: string;

    /**
     * The squadron the crew serves.
     */
    crewSquadron?: string;

    /**
     * The type of crew required to meet mission objectives (e.g., AIRDROP, AIRLAND,
     * AIR REFUELING, etc.).
     */
    crewType?: string;

    /**
     * The crew's squadron as identified in its resource management system. If the crew
     * is composed of members from multiple units, then the Crew Commander's unit
     * should be indicated as the crew unit.
     */
    crewUnit?: string;

    /**
     * The wing the crew serves.
     */
    crewWing?: string;

    /**
     * The International Civil Aviation Organization (ICAO) code of the airfield at
     * which the crew is currently located.
     */
    currentICAO?: string;

    /**
     * Crew Flight Duty Period (FDP) eligibility type.
     */
    fdpEligType?: string;

    /**
     * Flight Duty Period (FDP) type.
     */
    fdpType?: string;

    /**
     * The number of female enlisted crew members.
     */
    femaleEnlistedQty?: number;

    /**
     * The number of female officer crew members.
     */
    femaleOfficerQty?: number;

    /**
     * Authorization number used on the flight order.
     */
    fltAuthNum?: string;

    /**
     * Unique identifier of the Site at which the crew is currently located. This ID
     * can be used to obtain additional information on a Site using the 'get by ID'
     * operation (e.g. /udl/site/{id}). For example, the Site object with idSite = abc
     * would be queried as /udl/site/abc.
     */
    idSiteCurrent?: string;

    /**
     * Unique identifier of the Aircraft Sortie associated with this crew record.
     */
    idSortie?: string;

    /**
     * Initial start time of the crew's linked task that was delinked due to mission
     * closure, in ISO 8601 UTC format with millisecond precision.
     */
    initStartTime?: string;

    /**
     * The last time the crew can be alerted, in ISO 8601 UTC format with millisecond
     * precision.
     */
    lastAlertTime?: string;

    /**
     * Time the crew is legal for alert, in ISO 8601 UTC format with millisecond
     * precision.
     */
    legalAlertTime?: string;

    /**
     * Time the crew is legally authorized or scheduled to remain on standby for duty,
     * in ISO 8601 UTC format with millisecond precision.
     */
    legalBravoTime?: string;

    /**
     * Flag indicating whether this crew is part of a linked flying task.
     */
    linkedTask?: boolean;

    /**
     * The number of male enlisted crew members.
     */
    maleEnlistedQty?: number;

    /**
     * The number of male officer crew members.
     */
    maleOfficerQty?: number;

    /**
     * User-defined alias designation for the mission.
     */
    missionAlias?: string;

    /**
     * The mission ID the crew is supporting according to the source system.
     */
    missionId?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The type of personnel that comprises the crew (e.g., AIRCREW, MEDCREW, etc.).
     */
    personnelType?: string;

    /**
     * Time the crew will be picked up from lodging, in ISO 8601 UTC format with
     * millisecond precision.
     */
    pickupTime?: string;

    /**
     * Flag indicating whether post-mission crew rest is applied to the last sortie of
     * a crew's task.
     */
    postRestApplied?: boolean;

    /**
     * End time of the crew rest period after the mission, in ISO 8601 UTC format with
     * millisecond precision.
     */
    postRestEnd?: string;

    /**
     * The scheduled delay or adjustment in the start time of a crew's rest period
     * after a mission, expressed as +/-HH:MM.
     */
    postRestOffset?: string;

    /**
     * Flag indicating whether pre-mission crew rest is applied to the first sortie of
     * a crew's task.
     */
    preRestApplied?: boolean;

    /**
     * Start time of the crew rest period before the mission, in ISO 8601 UTC format
     * with millisecond precision.
     */
    preRestStart?: string;

    /**
     * Array of qualification codes required for this crew (e.g., AL for Aircraft
     * Leader, CS for Combat Systems Operator, etc.).
     */
    reqQualCode?: Array<string>;

    /**
     * Scheduled return time, in ISO 8601 UTC format with millisecond precision.
     */
    returnTime?: string;

    /**
     * The stage 1 qualifications the crew must have for a mission, such as having
     * basic knowledge of crew operations and aircraft systems.
     */
    stage1Qual?: string;

    /**
     * The stage 2 qualifications the crew must have for a mission, such as completion
     * of advanced mission-specific training.
     */
    stage2Qual?: string;

    /**
     * The stage 3 qualifications the crew must have for a mission, such as full
     * mission-ready certification and the capability of leading complex operations.
     */
    stage3Qual?: string;

    /**
     * Stage name for the crew. A stage is a pool of crews supporting a given operation
     * plan.
     */
    stageName?: string;

    /**
     * Time the crew entered the stage, in ISO 8601 UTC format with millisecond
     * precision.
     */
    stageTime?: string;

    /**
     * Crew status (e.g. NEEDCREW, ASSIGNED, APPROVED, NOTIFIED, PARTIAL, UNKNOWN,
     * etc.).
     */
    status?: string;

    /**
     * Flag indicating that one or more crew members requires transportation to the
     * departure location.
     */
    transportReq?: boolean;

    /**
     * Identifies the trip kit needed by the crew. A trip kit contains charts,
     * regulations, maps, etc. carried by the crew during missions.
     */
    tripKit?: string;
  }

  export namespace Body {
    /**
     * Schema for Crew Member data.
     */
    export interface CrewMember {
      /**
       * Flag indicating whether this crew member has been alerted of the associated
       * task.
       */
      alerted?: boolean;

      /**
       * Flag indicating this crew member is assigned to all sorties of the crew
       * itinerary.
       */
      allSortie?: boolean;

      /**
       * Flag indicating whether this crew member has been approved for the associated
       * task.
       */
      approved?: boolean;

      /**
       * Flag indicating whether this crew member is attached to his/her squadron. Crew
       * members that are not attached are considered assigned.
       */
      attached?: boolean;

      /**
       * The military branch assignment of the crew member.
       */
      branch?: string;

      /**
       * Flag indicating this crew member is a civilian or non-military person.
       */
      civilian?: boolean;

      /**
       * Flag indicating this person is the aircraft commander.
       */
      commander?: boolean;

      /**
       * The crew position of the crew member.
       */
      crewPosition?: string;

      /**
       * The crew member's 10-digit DoD ID number.
       */
      dodID?: string;

      /**
       * The duty position of the crew member.
       */
      dutyPosition?: string;

      /**
       * The current duty status code of this crew member (e.g., AGR for Active Guard and
       * Reserve, IDT for Inactive Duty Training, etc.).
       */
      dutyStatus?: string;

      /**
       * Flag indicating whether this crew member has been notified of an event by email.
       */
      emailed?: boolean;

      /**
       * Flag indicating whether this crew member requires an additional amount of time
       * to report for duty.
       */
      extraTime?: boolean;

      /**
       * The first name of the crew member.
       */
      firstName?: string;

      /**
       * The earliest flying currency expiration date for this crew member, in ISO 8601
       * UTC format with millisecond precision.
       */
      fltCurrencyExp?: string;

      /**
       * The training task identifier associated with the flying currency expiration date
       * for this crew member.
       */
      fltCurrencyExpId?: string;

      /**
       * The date this crew member's records review was completed, in ISO 8601 UTC format
       * with millisecond precision.
       */
      fltRecDate?: string;

      /**
       * The date this crew member's records review is due, in ISO 8601 UTC format with
       * millisecond precision.
       */
      fltRecDue?: string;

      /**
       * The flying squadron assignment of the crew member.
       */
      flySquadron?: string;

      /**
       * Flag indicating whether this crew member is funded.
       */
      funded?: boolean;

      /**
       * Gender of the crew member.
       */
      gender?: string;

      /**
       * The earliest ground currency expiration date for this crew member, in ISO 8601
       * UTC format with millisecond precision.
       */
      gndCurrencyExp?: string;

      /**
       * The training task identifier associated with the ground currency expiration date
       * for this crew member.
       */
      gndCurrencyExpId?: string;

      /**
       * Flag indicating whether this crew member is grounded (i.e., his/her duties do
       * not include flying).
       */
      grounded?: boolean;

      /**
       * Date when this crew member starts acting as guest help for the squadron, in ISO
       * 8601 UTC format with millisecond precision.
       */
      guestStart?: string;

      /**
       * Date when this crew member stops acting as guest help for the squadron, in ISO
       * 8601 UTC format with millisecond precision.
       */
      guestStop?: string;

      /**
       * Last four digits of the crew member's social security number.
       */
      last4SSN?: string;

      /**
       * Date of the last flight for this crew member, in ISO 8601 UTC format with
       * millisecond precision.
       */
      lastFltDate?: string;

      /**
       * The last name of the crew member.
       */
      lastName?: string;

      /**
       * The squadron the crew member has been temporarily loaned to.
       */
      loanedTo?: string;

      /**
       * Crew member lodging location.
       */
      lodging?: string;

      /**
       * Time this crew member was actually alerted for the mission, in ISO 8601 UTC
       * format with millisecond precision.
       */
      memberActualAlertTime?: string;

      /**
       * Adjusted return time for the crew member, in ISO 8601 UTC format with
       * millisecond precision.
       */
      memberAdjReturnTime?: string;

      /**
       * Last name of the crew member's adjusted return time approver.
       */
      memberAdjReturnTimeApprover?: string;

      /**
       * Unique identifier of the crew member assigned by the originating source.
       */
      memberId?: string;

      /**
       * Initial start time of the crew member's linked task that was delinked due to
       * mission closure, in ISO 8601 UTC format with millisecond precision.
       */
      memberInitStartTime?: string;

      /**
       * The latest possible time the crew member can legally be alerted for a task, in
       * ISO 8601 UTC format with millisecond precision.
       */
      memberLastAlertTime?: string;

      /**
       * Time this crew member becomes eligible to be alerted for the mission, in ISO
       * 8601 UTC format with millisecond precision.
       */
      memberLegalAlertTime?: string;

      /**
       * Time this crew member will be picked up from lodging, in ISO 8601 UTC format
       * with millisecond precision.
       */
      memberPickupTime?: string;

      /**
       * The scheduled delay or adjustment in the start time of a crew member's rest
       * period after a mission, expressed as +/-HH:MM.
       */
      memberPostRestOffset?: string;

      /**
       * End time of this crew member's rest period after the mission, in ISO 8601 UTC
       * format with millisecond precision.
       */
      memberPostRestTime?: string;

      /**
       * Start time of this crew member's rest period before the mission, in ISO 8601 UTC
       * format with millisecond precision.
       */
      memberPreRestTime?: string;

      /**
       * Remarks concerning the crew member.
       */
      memberRemarks?: string;

      /**
       * Scheduled return time for this crew member, in ISO 8601 UTC format with
       * millisecond precision.
       */
      memberReturnTime?: string;

      /**
       * Time this crew member is scheduled to be alerted for the mission, in ISO 8601
       * UTC format with millisecond precision.
       */
      memberSchedAlertTime?: string;

      /**
       * The military component for the crew member (e.g., ACTIVE, RESERVE, GUARD,
       * UNKNOWN, etc.).
       */
      memberSource?: string;

      /**
       * Stage name for the crew member. A stage is a pool of crews supporting a given
       * operation plan.
       */
      memberStageName?: string;

      /**
       * Flag indicating whether this crew member needs transportation to the departure
       * location.
       */
      memberTransportReq?: boolean;

      /**
       * Amplifying details about the crew member type (e.g. RAVEN, FCC, COMCAM, AIRCREW,
       * MEP, OTHER, etc.).
       */
      memberType?: string;

      /**
       * The middle initial of the crew member.
       */
      middleInitial?: string;

      /**
       * Flag indicating whether this crew member has been notified of an event.
       */
      notified?: boolean;

      /**
       * Crew member lodging phone number.
       */
      phoneNumber?: string;

      /**
       * Code indicating a crew member's current physical fitness status and whether they
       * are medically cleared to fly (e.g., D for Duties Not Including Flying, E for
       * Physical Overdue, etc.).
       */
      physAvCode?: string;

      /**
       * Code indicating a crew member's physical availabiility status (e.g.,
       * DISQUALIFIED, OVERDUE, etc.).
       */
      physAvStatus?: string;

      /**
       * Due date for the crew member's physical, in ISO 8601 UTC format with millisecond
       * precision.
       */
      physDue?: string;

      /**
       * The rank of the crew member.
       */
      rank?: string;

      /**
       * Remark code used to designate attributes of this crew member. For more
       * information, contact the provider source.
       */
      remarkCode?: string;

      /**
       * The primary aircraft type for the crew member according to the personnel
       * resource management system indicated in the crewRMS field.
       */
      rmsMDS?: string;

      /**
       * Time this crew member is required to report for duty before this flight/mission,
       * in ISO 8601 UTC format with millisecond precision.
       */
      showTime?: string;

      /**
       * The squadron the crew member serves.
       */
      squadron?: string;

      /**
       * The date this crew member accomplished physiological or altitude chamber
       * training, in ISO 8601 UTC format with millisecond precision.
       */
      trainingDate?: string;

      /**
       * The Mattermost username of this crew member.
       */
      username?: string;

      /**
       * The wing the crew member serves.
       */
      wing?: string;
    }
  }
}

export declare namespace Crew {
  export {
    type CrewAbridged as CrewAbridged,
    type CrewFull as CrewFull,
    type CrewListResponse as CrewListResponse,
    type CrewCountResponse as CrewCountResponse,
    type CrewTupleResponse as CrewTupleResponse,
    type CrewCreateParams as CrewCreateParams,
    type CrewRetrieveParams as CrewRetrieveParams,
    type CrewUpdateParams as CrewUpdateParams,
    type CrewListParams as CrewListParams,
    type CrewCountParams as CrewCountParams,
    type CrewTupleParams as CrewTupleParams,
    type CrewUnvalidatedPublishParams as CrewUnvalidatedPublishParams,
  };
}
