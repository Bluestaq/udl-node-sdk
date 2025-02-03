// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HistoryAPI from './history';
import { History, HistoryCountResponse, HistoryListParams, HistoryListResponse } from './history';
import * as SitestatusHistoryAPI from '../udl/sitestatus/history';

export class Sitestatus extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single SiteStatus object as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: SitestatusCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/sitestatus', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to update a single SiteStatus object. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  update(params: SitestatusUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/udl/sitestatus/${path_id}`, {
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
  list(options?: Core.RequestOptions): Core.APIPromise<SitestatusListResponse> {
    return this._client.get('/udl/sitestatus', options);
  }

  /**
   * Service operation to delete an SiteStatus object specified by the passed ID path
   * parameter. Note, delete operations do not remove data from historical or
   * publish/subscribe stores. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/sitestatus/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/sitestatus/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single SiteStatus record by its unique ID passed as a
   * path parameter.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<SitestatusHistoryAPI.SitestatusFull> {
    return this._client.get(`/udl/sitestatus/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/sitestatus/queryhelp', {
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
    query: SitestatusTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SitestatusTupleResponse> {
    return this._client.get('/udl/sitestatus/tuple', { query, ...options });
  }
}

export type SitestatusListResponse = Array<SitestatusListResponse.SitestatusListResponseItem>;

export namespace SitestatusListResponse {
  export interface SitestatusListResponseItem {
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
     * The ID of the site, if this status is associated with a fixed site or platform.
     */
    idSite: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Crisis Action Team (CAT).
     *
     * COLD - Not in use.
     *
     * WARM - Facility prepped/possible skeleton crew.
     *
     * HOT - Fully active.
     */
    cat?: 'COLD' | 'WARM' | 'HOT';

    /**
     * Estimated number of cold missiles of all types remaining in weapons system
     * inventory.
     */
    coldInventory?: number;

    /**
     * The communications component causing the platform or system to be less than
     * fully operational.
     */
    commImpairment?: string;

    /**
     * Cyberspace Protection Condition (CPCON).
     *
     * 1 - VERY HIGH - Critical functions.
     *
     * 2 - HIGH - Critical and essential functions.
     *
     * 3 - MEDIUM - Critical, essential, and support functions.
     *
     * 4 - LOW - All functions.
     *
     * 5 - VERY LOW - All functions.
     */
    cpcon?: '1' | '2' | '3' | '4' | '5';

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
     * Emergency Operations Center (EOC) status.
     *
     * COLD - Not in use.
     *
     * WARM - Facility prepped/possible skeleton crew.
     *
     * HOT - Fully active.
     */
    eoc?: 'COLD' | 'WARM' | 'HOT';

    /**
     * Force Protection Condition (FPCON).
     *
     * NORMAL - Applies when a general global threat of possible terrorist activity
     * exists and warrants a routine security posture.
     *
     * ALPHA - Applies when an increased general threat of possible terrorist activity
     * against personnel or facilities. Nature and extent of threat are unpredictable.
     *
     * BRAVO - Applies when an increased or predictable threat of terrorist activity
     * exists.
     *
     * CHARLIE - Applies when an incident occurs or intelligence is received indicating
     * some form of terrorist action against personnel and facilities is imminent.
     *
     * DELTA - Applies in the immediate area where an attack has occurred or when
     * intelligence is received indicating terrorist action against a location is
     * imminent.
     */
    fpcon?: 'NORMAL' | 'ALPHA' | 'BRAVO' | 'CHARLIE' | 'DELTA';

    /**
     * Estimated number of hot missiles of all types remaining in weapons system
     * inventory.
     */
    hotInventory?: number;

    /**
     * Health Protection Condition (HPCON).
     *
     * 0 - Routine, no community transmission.
     *
     * ALPHA - Limited, community transmission beginning.
     *
     * BRAVO - Moderate, increased community transmission.
     *
     * CHARLIE - Substantial, sustained community transmission.
     *
     * DELTA - Severe, widespread community transmission.
     */
    hpcon?: '0' | 'ALPHA' | 'BRAVO' | 'CHARLIE' | 'DELTA';

    /**
     * The status of the installation.
     *
     * FMC - Fully Mission Capable
     *
     * PMC - Partially Mission Capable
     *
     * NMC - Non Mission Capable
     *
     * UNK - Unknown.
     */
    instStatus?: 'FMC' | 'PMC' | 'NMC' | 'UNK';

    /**
     * Array of Link item(s) for which status is available and reported (ATDL, IJMS,
     * LINK-1, LINK-11, LINK-11B, LINK-16). This array must be the same length as the
     * linkStatus array.
     */
    link?: Array<string>;

    /**
     * Array of the status (AVAILABLE, DEGRADED, NOT AVAILABLE, etc.) for each links in
     * the link array. This array must be the same length as the link array, and the
     * status must correspond to the appropriate position index in the link array.
     */
    linkStatus?: Array<string>;

    /**
     * Array of specific missile types for which an estimated inventory count is
     * available (e.g. GMD TYPE A, HARPOON, TOMAHAWK, etc.). This array must be the
     * same length as the missileInventory array.
     */
    missile?: Array<string>;

    /**
     * Array of the quantity of each of the missile items. This array must be the same
     * length as the missile array, and the values must correspond to appropriate
     * position index in the missile array.
     */
    missileInventory?: Array<number>;

    /**
     * Alternate Identifier for a mobile or transportable platform provided by source.
     */
    mobileAltId?: string;

    /**
     * The operational status of the platform (e.g. Fully Operational, Partially
     * Operational, Not Operational, etc.).
     */
    opsCapability?: string;

    /**
     * The primary component degrading the operational capability of the platform or
     * system.
     */
    opsImpairment?: string;

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
     * Position Engagement Status flag, Indicating whether this platform is initiating
     * multiple simultaneous engagements. A value of 1/True indicates the platform is
     * initiating multiple simultaneous engagements.
     */
    pes?: boolean;

    /**
     * The POI (point of interest) ID related to this platform, if available.
     */
    poiid?: string;

    /**
     * Array of the status (NON-OPERATIONAL, OPERATIONAL, OFF) for each radar system in
     * the radarSystem array. This array must be the same length as the radarSystem
     * array, and the status must correspond to the appropriate position index in the
     * radarSystem array.
     */
    radarStatus?: Array<string>;

    /**
     * Array of radar system(s) for which status is available and reported
     * (ACQUISITION, IFFSIF, ILLUMINATING, MODE-4, PRIMARY SURVEILLANCE, SECONDARY
     * SURVEILLANCE, TERTIARY SURVEILLANCE). This array must be the same length as the
     * radarStatus array.
     */
    radarSystem?: Array<string>;

    /**
     * SAM sensor radar surveillance mode (Active, Passive, Off).
     */
    radiateMode?: string;

    /**
     * Time of report, in ISO8601 UTC format.
     */
    reportTime?: string;

    /**
     * The state of a SAM unit (e.g. Initialization, Standby, Reorientation, etc.).
     */
    samMode?: string;

    /**
     * Optional site type or further detail of type. Intended for, but not limited to,
     * Link-16 site type specifications (e.g. ADOC, GACC, SOC, TACC, etc.).
     */
    siteType?: string;

    /**
     * Description of the time function associated with the reportTime (e.g.
     * Activation, Deactivation, Arrival, Departure, etc.), if applicable.
     */
    timeFunction?: string;

    /**
     * The track ID related to this platform (if mobile or transportable), if
     * available.
     */
    trackId?: string;

    /**
     * Link-16 specific reference track number.
     */
    trackRefL16?: string;

    /**
     * Description of the current weather conditions over a site.
     */
    weatherMessage?: string;
  }
}

export type SitestatusCountResponse = string;

export type SitestatusTupleResponse = Array<SitestatusHistoryAPI.SitestatusFull>;

export interface SitestatusCreateParams {
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
   * The ID of the site, if this status is associated with a fixed site or platform.
   */
  idSite: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Crisis Action Team (CAT).
   *
   * COLD - Not in use.
   *
   * WARM - Facility prepped/possible skeleton crew.
   *
   * HOT - Fully active.
   */
  cat?: 'COLD' | 'WARM' | 'HOT';

  /**
   * Estimated number of cold missiles of all types remaining in weapons system
   * inventory.
   */
  coldInventory?: number;

  /**
   * The communications component causing the platform or system to be less than
   * fully operational.
   */
  commImpairment?: string;

  /**
   * Cyberspace Protection Condition (CPCON).
   *
   * 1 - VERY HIGH - Critical functions.
   *
   * 2 - HIGH - Critical and essential functions.
   *
   * 3 - MEDIUM - Critical, essential, and support functions.
   *
   * 4 - LOW - All functions.
   *
   * 5 - VERY LOW - All functions.
   */
  cpcon?: '1' | '2' | '3' | '4' | '5';

  /**
   * Emergency Operations Center (EOC) status.
   *
   * COLD - Not in use.
   *
   * WARM - Facility prepped/possible skeleton crew.
   *
   * HOT - Fully active.
   */
  eoc?: 'COLD' | 'WARM' | 'HOT';

  /**
   * Force Protection Condition (FPCON).
   *
   * NORMAL - Applies when a general global threat of possible terrorist activity
   * exists and warrants a routine security posture.
   *
   * ALPHA - Applies when an increased general threat of possible terrorist activity
   * against personnel or facilities. Nature and extent of threat are unpredictable.
   *
   * BRAVO - Applies when an increased or predictable threat of terrorist activity
   * exists.
   *
   * CHARLIE - Applies when an incident occurs or intelligence is received indicating
   * some form of terrorist action against personnel and facilities is imminent.
   *
   * DELTA - Applies in the immediate area where an attack has occurred or when
   * intelligence is received indicating terrorist action against a location is
   * imminent.
   */
  fpcon?: 'NORMAL' | 'ALPHA' | 'BRAVO' | 'CHARLIE' | 'DELTA';

  /**
   * Estimated number of hot missiles of all types remaining in weapons system
   * inventory.
   */
  hotInventory?: number;

  /**
   * Health Protection Condition (HPCON).
   *
   * 0 - Routine, no community transmission.
   *
   * ALPHA - Limited, community transmission beginning.
   *
   * BRAVO - Moderate, increased community transmission.
   *
   * CHARLIE - Substantial, sustained community transmission.
   *
   * DELTA - Severe, widespread community transmission.
   */
  hpcon?: '0' | 'ALPHA' | 'BRAVO' | 'CHARLIE' | 'DELTA';

  /**
   * The status of the installation.
   *
   * FMC - Fully Mission Capable
   *
   * PMC - Partially Mission Capable
   *
   * NMC - Non Mission Capable
   *
   * UNK - Unknown.
   */
  instStatus?: 'FMC' | 'PMC' | 'NMC' | 'UNK';

  /**
   * Array of Link item(s) for which status is available and reported (ATDL, IJMS,
   * LINK-1, LINK-11, LINK-11B, LINK-16). This array must be the same length as the
   * linkStatus array.
   */
  link?: Array<string>;

  /**
   * Array of the status (AVAILABLE, DEGRADED, NOT AVAILABLE, etc.) for each links in
   * the link array. This array must be the same length as the link array, and the
   * status must correspond to the appropriate position index in the link array.
   */
  linkStatus?: Array<string>;

  /**
   * Array of specific missile types for which an estimated inventory count is
   * available (e.g. GMD TYPE A, HARPOON, TOMAHAWK, etc.). This array must be the
   * same length as the missileInventory array.
   */
  missile?: Array<string>;

  /**
   * Array of the quantity of each of the missile items. This array must be the same
   * length as the missile array, and the values must correspond to appropriate
   * position index in the missile array.
   */
  missileInventory?: Array<number>;

  /**
   * Alternate Identifier for a mobile or transportable platform provided by source.
   */
  mobileAltId?: string;

  /**
   * The operational status of the platform (e.g. Fully Operational, Partially
   * Operational, Not Operational, etc.).
   */
  opsCapability?: string;

  /**
   * The primary component degrading the operational capability of the platform or
   * system.
   */
  opsImpairment?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Position Engagement Status flag, Indicating whether this platform is initiating
   * multiple simultaneous engagements. A value of 1/True indicates the platform is
   * initiating multiple simultaneous engagements.
   */
  pes?: boolean;

  /**
   * The POI (point of interest) ID related to this platform, if available.
   */
  poiid?: string;

  /**
   * Array of the status (NON-OPERATIONAL, OPERATIONAL, OFF) for each radar system in
   * the radarSystem array. This array must be the same length as the radarSystem
   * array, and the status must correspond to the appropriate position index in the
   * radarSystem array.
   */
  radarStatus?: Array<string>;

  /**
   * Array of radar system(s) for which status is available and reported
   * (ACQUISITION, IFFSIF, ILLUMINATING, MODE-4, PRIMARY SURVEILLANCE, SECONDARY
   * SURVEILLANCE, TERTIARY SURVEILLANCE). This array must be the same length as the
   * radarStatus array.
   */
  radarSystem?: Array<string>;

  /**
   * SAM sensor radar surveillance mode (Active, Passive, Off).
   */
  radiateMode?: string;

  /**
   * Time of report, in ISO8601 UTC format.
   */
  reportTime?: string;

  /**
   * The state of a SAM unit (e.g. Initialization, Standby, Reorientation, etc.).
   */
  samMode?: string;

  /**
   * Optional site type or further detail of type. Intended for, but not limited to,
   * Link-16 site type specifications (e.g. ADOC, GACC, SOC, TACC, etc.).
   */
  siteType?: string;

  /**
   * Description of the time function associated with the reportTime (e.g.
   * Activation, Deactivation, Arrival, Departure, etc.), if applicable.
   */
  timeFunction?: string;

  /**
   * The track ID related to this platform (if mobile or transportable), if
   * available.
   */
  trackId?: string;

  /**
   * Link-16 specific reference track number.
   */
  trackRefL16?: string;

  /**
   * Description of the current weather conditions over a site.
   */
  weatherMessage?: string;
}

export interface SitestatusUpdateParams {
  /**
   * Path param: The ID of the SiteStatus to update.
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
   * Body param: The ID of the site, if this status is associated with a fixed site
   * or platform.
   */
  idSite: string;

  /**
   * Body param: Source of the data.
   */
  source: string;

  /**
   * Body param: Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Body param: Crisis Action Team (CAT).
   *
   * COLD - Not in use.
   *
   * WARM - Facility prepped/possible skeleton crew.
   *
   * HOT - Fully active.
   */
  cat?: 'COLD' | 'WARM' | 'HOT';

  /**
   * Body param: Estimated number of cold missiles of all types remaining in weapons
   * system inventory.
   */
  coldInventory?: number;

  /**
   * Body param: The communications component causing the platform or system to be
   * less than fully operational.
   */
  commImpairment?: string;

  /**
   * Body param: Cyberspace Protection Condition (CPCON).
   *
   * 1 - VERY HIGH - Critical functions.
   *
   * 2 - HIGH - Critical and essential functions.
   *
   * 3 - MEDIUM - Critical, essential, and support functions.
   *
   * 4 - LOW - All functions.
   *
   * 5 - VERY LOW - All functions.
   */
  cpcon?: '1' | '2' | '3' | '4' | '5';

  /**
   * Body param: Emergency Operations Center (EOC) status.
   *
   * COLD - Not in use.
   *
   * WARM - Facility prepped/possible skeleton crew.
   *
   * HOT - Fully active.
   */
  eoc?: 'COLD' | 'WARM' | 'HOT';

  /**
   * Body param: Force Protection Condition (FPCON).
   *
   * NORMAL - Applies when a general global threat of possible terrorist activity
   * exists and warrants a routine security posture.
   *
   * ALPHA - Applies when an increased general threat of possible terrorist activity
   * against personnel or facilities. Nature and extent of threat are unpredictable.
   *
   * BRAVO - Applies when an increased or predictable threat of terrorist activity
   * exists.
   *
   * CHARLIE - Applies when an incident occurs or intelligence is received indicating
   * some form of terrorist action against personnel and facilities is imminent.
   *
   * DELTA - Applies in the immediate area where an attack has occurred or when
   * intelligence is received indicating terrorist action against a location is
   * imminent.
   */
  fpcon?: 'NORMAL' | 'ALPHA' | 'BRAVO' | 'CHARLIE' | 'DELTA';

  /**
   * Body param: Estimated number of hot missiles of all types remaining in weapons
   * system inventory.
   */
  hotInventory?: number;

  /**
   * Body param: Health Protection Condition (HPCON).
   *
   * 0 - Routine, no community transmission.
   *
   * ALPHA - Limited, community transmission beginning.
   *
   * BRAVO - Moderate, increased community transmission.
   *
   * CHARLIE - Substantial, sustained community transmission.
   *
   * DELTA - Severe, widespread community transmission.
   */
  hpcon?: '0' | 'ALPHA' | 'BRAVO' | 'CHARLIE' | 'DELTA';

  /**
   * Body param: The status of the installation.
   *
   * FMC - Fully Mission Capable
   *
   * PMC - Partially Mission Capable
   *
   * NMC - Non Mission Capable
   *
   * UNK - Unknown.
   */
  instStatus?: 'FMC' | 'PMC' | 'NMC' | 'UNK';

  /**
   * Body param: Array of Link item(s) for which status is available and reported
   * (ATDL, IJMS, LINK-1, LINK-11, LINK-11B, LINK-16). This array must be the same
   * length as the linkStatus array.
   */
  link?: Array<string>;

  /**
   * Body param: Array of the status (AVAILABLE, DEGRADED, NOT AVAILABLE, etc.) for
   * each links in the link array. This array must be the same length as the link
   * array, and the status must correspond to the appropriate position index in the
   * link array.
   */
  linkStatus?: Array<string>;

  /**
   * Body param: Array of specific missile types for which an estimated inventory
   * count is available (e.g. GMD TYPE A, HARPOON, TOMAHAWK, etc.). This array must
   * be the same length as the missileInventory array.
   */
  missile?: Array<string>;

  /**
   * Body param: Array of the quantity of each of the missile items. This array must
   * be the same length as the missile array, and the values must correspond to
   * appropriate position index in the missile array.
   */
  missileInventory?: Array<number>;

  /**
   * Body param: Alternate Identifier for a mobile or transportable platform provided
   * by source.
   */
  mobileAltId?: string;

  /**
   * Body param: The operational status of the platform (e.g. Fully Operational,
   * Partially Operational, Not Operational, etc.).
   */
  opsCapability?: string;

  /**
   * Body param: The primary component degrading the operational capability of the
   * platform or system.
   */
  opsImpairment?: string;

  /**
   * Body param: Originating system or organization which produced the data, if
   * different from the source. The origin may be different than the source if the
   * source was a mediating system which forwarded the data on behalf of the origin
   * system. If null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Body param: Position Engagement Status flag, Indicating whether this platform is
   * initiating multiple simultaneous engagements. A value of 1/True indicates the
   * platform is initiating multiple simultaneous engagements.
   */
  pes?: boolean;

  /**
   * Body param: The POI (point of interest) ID related to this platform, if
   * available.
   */
  poiid?: string;

  /**
   * Body param: Array of the status (NON-OPERATIONAL, OPERATIONAL, OFF) for each
   * radar system in the radarSystem array. This array must be the same length as the
   * radarSystem array, and the status must correspond to the appropriate position
   * index in the radarSystem array.
   */
  radarStatus?: Array<string>;

  /**
   * Body param: Array of radar system(s) for which status is available and reported
   * (ACQUISITION, IFFSIF, ILLUMINATING, MODE-4, PRIMARY SURVEILLANCE, SECONDARY
   * SURVEILLANCE, TERTIARY SURVEILLANCE). This array must be the same length as the
   * radarStatus array.
   */
  radarSystem?: Array<string>;

  /**
   * Body param: SAM sensor radar surveillance mode (Active, Passive, Off).
   */
  radiateMode?: string;

  /**
   * Body param: Time of report, in ISO8601 UTC format.
   */
  reportTime?: string;

  /**
   * Body param: The state of a SAM unit (e.g. Initialization, Standby,
   * Reorientation, etc.).
   */
  samMode?: string;

  /**
   * Body param: Optional site type or further detail of type. Intended for, but not
   * limited to, Link-16 site type specifications (e.g. ADOC, GACC, SOC, TACC, etc.).
   */
  siteType?: string;

  /**
   * Body param: Description of the time function associated with the reportTime
   * (e.g. Activation, Deactivation, Arrival, Departure, etc.), if applicable.
   */
  timeFunction?: string;

  /**
   * Body param: The track ID related to this platform (if mobile or transportable),
   * if available.
   */
  trackId?: string;

  /**
   * Body param: Link-16 specific reference track number.
   */
  trackRefL16?: string;

  /**
   * Body param: Description of the current weather conditions over a site.
   */
  weatherMessage?: string;
}

export interface SitestatusTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

Sitestatus.History = History;

export declare namespace Sitestatus {
  export {
    type SitestatusListResponse as SitestatusListResponse,
    type SitestatusCountResponse as SitestatusCountResponse,
    type SitestatusTupleResponse as SitestatusTupleResponse,
    type SitestatusCreateParams as SitestatusCreateParams,
    type SitestatusUpdateParams as SitestatusUpdateParams,
    type SitestatusTupleParams as SitestatusTupleParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
  };
}
