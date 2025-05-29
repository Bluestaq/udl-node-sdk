// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Country extends APIResource {
  /**
   * Service operation to take a single diplomaticclearancecountry record as a POST
   * body and ingest into the database. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.diplomaticClearance.country.create({
   *   classificationMarking: 'U',
   *   countryCode: 'NL',
   *   dataMode: 'TEST',
   *   lastChangedDate: '2024-01-01T16:00:00.123Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: CountryCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/diplomaticclearancecountry', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single diplomaticclearancecountry record by its
   * unique ID passed as a path parameter.
   *
   * @example
   * ```ts
   * const country =
   *   await client.diplomaticClearance.country.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: CountryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CountryRetrieveResponse> {
    return this._client.get(path`/udl/diplomaticclearancecountry/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single diplomaticclearancecountry record. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.diplomaticClearance.country.update('id', {
   *   classificationMarking: 'U',
   *   countryCode: 'NL',
   *   dataMode: 'TEST',
   *   lastChangedDate: '2024-01-01T16:00:00.123Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: CountryUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/diplomaticclearancecountry/${pathID}`, {
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const countryListResponse of client.diplomaticClearance.country.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CountryListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CountryListResponsesOffsetPage, CountryListResponse> {
    return this._client.getAPIList('/udl/diplomaticclearancecountry', OffsetPage<CountryListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a diplomaticclearancecountry record specified by the
   * passed ID path parameter. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.diplomaticClearance.country.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/diplomaticclearancecountry/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   *
   * @example
   * ```ts
   * const response =
   *   await client.diplomaticClearance.country.count();
   * ```
   */
  count(query: CountryCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/diplomaticclearancecountry/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * diplomaticclearancecountry records as a POST body and ingest into the database.
   * This operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.diplomaticClearance.country.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       countryCode: 'NL',
   *       dataMode: 'TEST',
   *       lastChangedDate: '2024-01-01T16:00:00.123Z',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: CountryCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/diplomaticclearancecountry/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.diplomaticClearance.country.queryHelp();
   * ```
   */
  queryHelp(options?: RequestOptions): APIPromise<CountryQueryHelpResponse> {
    return this._client.get('/udl/diplomaticclearancecountry/queryhelp', options);
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
   *
   * @example
   * ```ts
   * const response =
   *   await client.diplomaticClearance.country.tuple({
   *     columns: 'columns',
   *   });
   * ```
   */
  tuple(query: CountryTupleParams, options?: RequestOptions): APIPromise<CountryTupleResponse> {
    return this._client.get('/udl/diplomaticclearancecountry/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple diplomaticclearancecountry records as a POST
   * body and ingest into the database. This operation is intended to be used for
   * automated feeds into UDL. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.diplomaticClearance.country.unvalidatedPublish(
   *   {
   *     body: [
   *       {
   *         classificationMarking: 'U',
   *         countryCode: 'NL',
   *         dataMode: 'TEST',
   *         lastChangedDate: '2024-01-01T16:00:00.123Z',
   *         source: 'Bluestaq',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  unvalidatedPublish(params: CountryUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-diplomaticclearancecountry', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type CountryListResponsesOffsetPage = OffsetPage<CountryListResponse>;

/**
 * Diplomatic Clearance Country provides information such as entry/exit points,
 * requirements, and points of contact for countries diplomatic clearances are
 * being created for.
 */
export interface CountryRetrieveResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The DoD Standard Country Code designator for the country for which the
   * diplomatic clearance will be issued. This field should be set to "OTHR" if the
   * source value does not match a UDL country code value (ISO-3166-ALPHA-2).
   */
  countryCode: string;

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
   * Last time this country's diplomatic clearance profile information was updated,
   * in ISO 8601 UTC format with millisecond precision.
   */
  lastChangedDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages using the Defense Message System (DMS).
   */
  acceptsDMS?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages via email.
   */
  acceptsEmail?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages via fax.
   */
  acceptsFax?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages via SIPRNet.
   */
  acceptsSIPRNet?: boolean;

  /**
   * The source agency of the diplomatic clearance country data.
   */
  agency?: string;

  /**
   * Specifies an alternate country code if the data provider code does not match a
   * UDL Country code value (ISO-3166-ALPHA-2). This field will be set to the value
   * provided by the source and should be used for all Queries specifying a Country
   * Code.
   */
  altCountryCode?: string;

  /**
   * Zulu closing time of this country's diplomatic clearance office expressed in
   * HH:MM format.
   */
  closeTime?: string;

  /**
   * System generated code used to identify a country.
   */
  countryId?: string;

  /**
   * Name of the country for which the diplomatic clearance will be issued.
   */
  countryName?: string;

  /**
   * Remarks concerning the country for which the diplomatic clearance will be
   * issued.
   */
  countryRemark?: string;

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
   * Collection of diplomatic clearance profile information for this country.
   */
  diplomaticClearanceCountryContacts?: Array<CountryRetrieveResponse.DiplomaticClearanceCountryContact>;

  /**
   * Collection of diplomatic clearance profile information for this country.
   */
  diplomaticClearanceCountryEntryExitPoints?: Array<CountryRetrieveResponse.DiplomaticClearanceCountryEntryExitPoint>;

  /**
   * Collection of diplomatic clearance profile information for this country.
   */
  diplomaticClearanceCountryProfiles?: Array<CountryRetrieveResponse.DiplomaticClearanceCountryProfile>;

  /**
   * Flag indicating whether a diplomatic clearance profile exists for this country.
   */
  existingProfile?: boolean;

  /**
   * Time difference between the location of the country for which the diplomatic
   * clearance will be issued and the Greenwich Mean Time (GMT), expressed as
   * +/-HH:MM. Time zones east of Greenwich have positive offsets and time zones west
   * of Greenwich are negative.
   */
  gmtOffset?: string;

  /**
   * Name of this country's diplomatic clearance office.
   */
  officeName?: string;

  /**
   * Name of the point of contact for this country's diplomatic clearance office.
   */
  officePOC?: string;

  /**
   * Remarks concerning this country's diplomatic clearance office.
   */
  officeRemark?: string;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Friday.
   */
  openFri?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Monday.
   */
  openMon?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Saturday.
   */
  openSat?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Sunday.
   */
  openSun?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Thursday.
   */
  openThu?: boolean;

  /**
   * Zulu opening time of this country's diplomatic clearance office expressed in
   * HH:MM format.
   */
  openTime?: string;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Tuesday.
   */
  openTue?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Wednesday.
   */
  openWed?: boolean;

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
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

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

export namespace CountryRetrieveResponse {
  /**
   * Collection of contact information for this country.
   */
  export interface DiplomaticClearanceCountryContact {
    /**
     * Phone number for this contact after regular business hours.
     */
    ahNum?: string;

    /**
     * Speed dial code for this contact after regular business hours.
     */
    ahSpdDialCode?: string;

    /**
     * Commercial phone number for this contact.
     */
    commNum?: string;

    /**
     * Commercial speed dial code for this contact.
     */
    commSpdDialCode?: string;

    /**
     * Identifier of the contact for this country.
     */
    contactId?: string;

    /**
     * Name of the contact for this country.
     */
    contactName?: string;

    /**
     * Remarks about this contact.
     */
    contactRemark?: string;

    /**
     * Defense Switched Network (DSN) phone number for this contact.
     */
    dsnNum?: string;

    /**
     * Defense Switched Network (DSN) speed dial code for this contact.
     */
    dsnSpdDialCode?: string;

    /**
     * Fax number for this contact.
     */
    faxNum?: string;

    /**
     * Phone number to contact the Diplomatic Attache Office (DAO) for this country
     * over a secure NIPR line.
     */
    niprNum?: string;

    /**
     * Phone number to contact the Diplomatic Attache Office (DAO) for this country
     * over a secure SIPR line.
     */
    siprNum?: string;
  }

  /**
   * Collection of entry and exit points for this country.
   */
  export interface DiplomaticClearanceCountryEntryExitPoint {
    /**
     * Flag indicating whether this is a point of entry for this country.
     */
    isEntry?: boolean;

    /**
     * Flag indicating whether this is a point of exit for this country.
     */
    isExit?: boolean;

    /**
     * Name of this entry/exit point.
     */
    pointName?: string;
  }

  /**
   * Collection of diplomatic clearance profile information for this country.
   */
  export interface DiplomaticClearanceCountryProfile {
    /**
     * Remarks concerning aircraft cargo and passenger information for this country
     * profile.
     */
    cargoPaxRemark?: string;

    /**
     * Identifier of the associated diplomatic clearance issued by the host country.
     */
    clearanceId?: string;

    /**
     * Remarks concerning crew information for this country profile.
     */
    crewInfoRemark?: string;

    /**
     * Code denoting the status of the default diplomatic clearance (e.g., A for
     * Approved via APACS, E for Requested via email, etc.).
     */
    defClearanceStatus?: string;

    /**
     * Remarks concerning the default entry point for this country.
     */
    defEntryRemark?: string;

    /**
     * Zulu default entry time for this country expressed in HH:MM format.
     */
    defEntryTime?: string;

    /**
     * Remarks concerning the default exit point for this country.
     */
    defExitRemark?: string;

    /**
     * Zulu default exit time for this country expressed in HH:MM format.
     */
    defExitTime?: string;

    /**
     * Remarks concerning flight information for this country profile.
     */
    fltInfoRemark?: string;

    /**
     * Remarks concerning hazardous material information for this country profile.
     */
    hazInfoRemark?: string;

    /**
     * Flag indicating whether this is the default landing profile for this country.
     */
    landDefProf?: boolean;

    /**
     * Amount of lead time required for an aircraft to land in this country. Units need
     * to be specified in the landLeadTimeUnit field.
     */
    landLeadTime?: number;

    /**
     * Remarks concerning the landing lead time required for this country.
     */
    landLeadTimeRemark?: string;

    /**
     * Unit of time specified for the landLeadTime field to indicate the landing lead
     * time required for this country.
     */
    landLeadTimeUnit?: string;

    /**
     * Amount of time before the landing valid period that an aircraft is allowed to
     * land in this country for this profile. The unit of time should be specified in
     * the landValidPeriodUnit field.
     */
    landValidPeriodMinus?: number;

    /**
     * Amount of time after the landing valid period that an aircraft is allowed to
     * land in this country for this profile. The unit of time should be specified in
     * the landValidPeriodUnit field.
     */
    landValidPeriodPlus?: number;

    /**
     * Remarks concerning the valid landing time period for this country.
     */
    landValidPeriodRemark?: string;

    /**
     * Unit of time specified for the landValidPeriodPlus and landValidPeriodMinus
     * fields to indicate the valid landing period for this country.
     */
    landValidPeriodUnit?: string;

    /**
     * Flag indicating whether this is the default overfly profile for this country.
     */
    overflyDefProf?: boolean;

    /**
     * Amount of lead time required for an aircraft to enter and fly over the airspace
     * of this country. Units need to be specified in the overflyLeadTimeUnit field.
     */
    overflyLeadTime?: number;

    /**
     * Remarks concerning the overfly lead time required for this country.
     */
    overflyLeadTimeRemark?: string;

    /**
     * Unit of time specified for the overflyLeadTime field to indicate the overfly
     * lead time required for this country.
     */
    overflyLeadTimeUnit?: string;

    /**
     * Amount of time before the overfly valid period that an aircraft is allowed to
     * fly over this country for this profile. The unit of time should be specified in
     * the overflyValidPeriodUnit field.
     */
    overflyValidPeriodMinus?: number;

    /**
     * Amount of time after the overfly valid period that an aircraft is allowed to fly
     * over this country for this profile. The unit of time should be specified in the
     * overflyValidPeriodUnit field.
     */
    overflyValidPeriodPlus?: number;

    /**
     * Remarks concerning the valid overfly time period for this country.
     */
    overflyValidPeriodRemark?: string;

    /**
     * Unit of time specified for the overflyValidPeriodPlus and
     * overflyValidPeriodMinus fields to indicate the valid overfly period for this
     * country.
     */
    overflyValidPeriodUnit?: string;

    /**
     * The diplomatic clearance profile name used within clearance management systems.
     */
    profile?: string;

    /**
     * The agency to which this profile applies.
     */
    profileAgency?: string;

    /**
     * Identifier of the diplomatic clearance country profile.
     */
    profileId?: string;

    /**
     * Remarks concerning this country profile.
     */
    profileRemark?: string;

    /**
     * Flag indicating whether alternate aircraft names are required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqACAltName?: boolean;

    /**
     * Flag indicating whether all hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqAllHazInfo?: boolean;

    /**
     * Flag indicating whether standard AMC information is required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqAMCStdInfo?: boolean;

    /**
     * Flag indicating whether a cargo list is required to be reported to the country
     * using this diplomatic clearance profile.
     */
    reqCargoList?: boolean;

    /**
     * Flag indicating whether aircraft cargo and passenger information is required to
     * be reported to the country using this diplomatic clearance profile.
     */
    reqCargoPax?: boolean;

    /**
     * Flag indicating whether Class 1 hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqClass1Info?: boolean;

    /**
     * Flag indicating whether Class 9 hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqClass9Info?: boolean;

    /**
     * Flag indicating whether the number of crew members on a flight is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqCrewComp?: boolean;

    /**
     * Flag indicating whether the names, ranks, and positions of crew members are
     * required to be reported to the country using this diplomatic clearance profile.
     */
    reqCrewDetail?: boolean;

    /**
     * Flag indicating whether crew information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqCrewInfo?: boolean;

    /**
     * Flag indicating whether Division 1.1 hazardous material information is required
     * to be reported to the country using this diplomatic clearance profile.
     */
    reqDiv1Info?: boolean;

    /**
     * Flag indicating whether distinguished visitors are required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqDV?: boolean;

    /**
     * Flag indicating whether entry/exit coordinates need to be specified for this
     * diplomatic clearance profile.
     */
    reqEntryExitCoord?: boolean;

    /**
     * Flag indicating whether flight information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqFltInfo?: boolean;

    /**
     * Flag indicating whether a flight plan route is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqFltPlanRoute?: boolean;

    /**
     * Flag indicating whether aviation funding sources are required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqFundSource?: boolean;

    /**
     * Flag indicating whether hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqHazInfo?: boolean;

    /**
     * Flag indicating whether this diplomatic clearance profile applies to specific
     * ICAO(s). These specific ICAO(s) should be clarified in the fltInfoRemark field.
     */
    reqICAO?: boolean;

    /**
     * Flag indicating whether passport information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqPassportInfo?: boolean;

    /**
     * Flag indicating whether ravens are required to be reported to the country using
     * this diplomatic clearance profile.
     */
    reqRaven?: boolean;

    /**
     * Flag indicating whether changes are required to be reported to the country using
     * this diplomatic clearance profile.
     */
    reqRepChange?: boolean;

    /**
     * Flag indicating whether an aircraft tail number is required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqTailNum?: boolean;

    /**
     * Flag indicating whether weapons information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqWeaponsInfo?: boolean;

    /**
     * Flag indicating whether crew reporting is undefined for the country using this
     * diplomatic clearance profile.
     */
    undefinedCrewReporting?: boolean;
  }
}

/**
 * Diplomatic Clearance Country provides information such as entry/exit points,
 * requirements, and points of contact for countries diplomatic clearances are
 * being created for.
 */
export interface CountryListResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The DoD Standard Country Code designator for the country for which the
   * diplomatic clearance will be issued. This field should be set to "OTHR" if the
   * source value does not match a UDL country code value (ISO-3166-ALPHA-2).
   */
  countryCode: string;

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
   * Last time this country's diplomatic clearance profile information was updated,
   * in ISO 8601 UTC format with millisecond precision.
   */
  lastChangedDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages using the Defense Message System (DMS).
   */
  acceptsDMS?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages via email.
   */
  acceptsEmail?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages via fax.
   */
  acceptsFax?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages via SIPRNet.
   */
  acceptsSIPRNet?: boolean;

  /**
   * The source agency of the diplomatic clearance country data.
   */
  agency?: string;

  /**
   * Specifies an alternate country code if the data provider code does not match a
   * UDL Country code value (ISO-3166-ALPHA-2). This field will be set to the value
   * provided by the source and should be used for all Queries specifying a Country
   * Code.
   */
  altCountryCode?: string;

  /**
   * Zulu closing time of this country's diplomatic clearance office expressed in
   * HH:MM format.
   */
  closeTime?: string;

  /**
   * System generated code used to identify a country.
   */
  countryId?: string;

  /**
   * Name of the country for which the diplomatic clearance will be issued.
   */
  countryName?: string;

  /**
   * Remarks concerning the country for which the diplomatic clearance will be
   * issued.
   */
  countryRemark?: string;

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
   * Collection of diplomatic clearance profile information for this country.
   */
  diplomaticClearanceCountryContacts?: Array<CountryListResponse.DiplomaticClearanceCountryContact>;

  /**
   * Collection of diplomatic clearance profile information for this country.
   */
  diplomaticClearanceCountryEntryExitPoints?: Array<CountryListResponse.DiplomaticClearanceCountryEntryExitPoint>;

  /**
   * Collection of diplomatic clearance profile information for this country.
   */
  diplomaticClearanceCountryProfiles?: Array<CountryListResponse.DiplomaticClearanceCountryProfile>;

  /**
   * Flag indicating whether a diplomatic clearance profile exists for this country.
   */
  existingProfile?: boolean;

  /**
   * Time difference between the location of the country for which the diplomatic
   * clearance will be issued and the Greenwich Mean Time (GMT), expressed as
   * +/-HH:MM. Time zones east of Greenwich have positive offsets and time zones west
   * of Greenwich are negative.
   */
  gmtOffset?: string;

  /**
   * Name of this country's diplomatic clearance office.
   */
  officeName?: string;

  /**
   * Name of the point of contact for this country's diplomatic clearance office.
   */
  officePOC?: string;

  /**
   * Remarks concerning this country's diplomatic clearance office.
   */
  officeRemark?: string;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Friday.
   */
  openFri?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Monday.
   */
  openMon?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Saturday.
   */
  openSat?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Sunday.
   */
  openSun?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Thursday.
   */
  openThu?: boolean;

  /**
   * Zulu opening time of this country's diplomatic clearance office expressed in
   * HH:MM format.
   */
  openTime?: string;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Tuesday.
   */
  openTue?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Wednesday.
   */
  openWed?: boolean;

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
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

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

export namespace CountryListResponse {
  /**
   * Collection of contact information for this country.
   */
  export interface DiplomaticClearanceCountryContact {
    /**
     * Phone number for this contact after regular business hours.
     */
    ahNum?: string;

    /**
     * Speed dial code for this contact after regular business hours.
     */
    ahSpdDialCode?: string;

    /**
     * Commercial phone number for this contact.
     */
    commNum?: string;

    /**
     * Commercial speed dial code for this contact.
     */
    commSpdDialCode?: string;

    /**
     * Identifier of the contact for this country.
     */
    contactId?: string;

    /**
     * Name of the contact for this country.
     */
    contactName?: string;

    /**
     * Remarks about this contact.
     */
    contactRemark?: string;

    /**
     * Defense Switched Network (DSN) phone number for this contact.
     */
    dsnNum?: string;

    /**
     * Defense Switched Network (DSN) speed dial code for this contact.
     */
    dsnSpdDialCode?: string;

    /**
     * Fax number for this contact.
     */
    faxNum?: string;

    /**
     * Phone number to contact the Diplomatic Attache Office (DAO) for this country
     * over a secure NIPR line.
     */
    niprNum?: string;

    /**
     * Phone number to contact the Diplomatic Attache Office (DAO) for this country
     * over a secure SIPR line.
     */
    siprNum?: string;
  }

  /**
   * Collection of entry and exit points for this country.
   */
  export interface DiplomaticClearanceCountryEntryExitPoint {
    /**
     * Flag indicating whether this is a point of entry for this country.
     */
    isEntry?: boolean;

    /**
     * Flag indicating whether this is a point of exit for this country.
     */
    isExit?: boolean;

    /**
     * Name of this entry/exit point.
     */
    pointName?: string;
  }

  /**
   * Collection of diplomatic clearance profile information for this country.
   */
  export interface DiplomaticClearanceCountryProfile {
    /**
     * Remarks concerning aircraft cargo and passenger information for this country
     * profile.
     */
    cargoPaxRemark?: string;

    /**
     * Identifier of the associated diplomatic clearance issued by the host country.
     */
    clearanceId?: string;

    /**
     * Remarks concerning crew information for this country profile.
     */
    crewInfoRemark?: string;

    /**
     * Code denoting the status of the default diplomatic clearance (e.g., A for
     * Approved via APACS, E for Requested via email, etc.).
     */
    defClearanceStatus?: string;

    /**
     * Remarks concerning the default entry point for this country.
     */
    defEntryRemark?: string;

    /**
     * Zulu default entry time for this country expressed in HH:MM format.
     */
    defEntryTime?: string;

    /**
     * Remarks concerning the default exit point for this country.
     */
    defExitRemark?: string;

    /**
     * Zulu default exit time for this country expressed in HH:MM format.
     */
    defExitTime?: string;

    /**
     * Remarks concerning flight information for this country profile.
     */
    fltInfoRemark?: string;

    /**
     * Remarks concerning hazardous material information for this country profile.
     */
    hazInfoRemark?: string;

    /**
     * Flag indicating whether this is the default landing profile for this country.
     */
    landDefProf?: boolean;

    /**
     * Amount of lead time required for an aircraft to land in this country. Units need
     * to be specified in the landLeadTimeUnit field.
     */
    landLeadTime?: number;

    /**
     * Remarks concerning the landing lead time required for this country.
     */
    landLeadTimeRemark?: string;

    /**
     * Unit of time specified for the landLeadTime field to indicate the landing lead
     * time required for this country.
     */
    landLeadTimeUnit?: string;

    /**
     * Amount of time before the landing valid period that an aircraft is allowed to
     * land in this country for this profile. The unit of time should be specified in
     * the landValidPeriodUnit field.
     */
    landValidPeriodMinus?: number;

    /**
     * Amount of time after the landing valid period that an aircraft is allowed to
     * land in this country for this profile. The unit of time should be specified in
     * the landValidPeriodUnit field.
     */
    landValidPeriodPlus?: number;

    /**
     * Remarks concerning the valid landing time period for this country.
     */
    landValidPeriodRemark?: string;

    /**
     * Unit of time specified for the landValidPeriodPlus and landValidPeriodMinus
     * fields to indicate the valid landing period for this country.
     */
    landValidPeriodUnit?: string;

    /**
     * Flag indicating whether this is the default overfly profile for this country.
     */
    overflyDefProf?: boolean;

    /**
     * Amount of lead time required for an aircraft to enter and fly over the airspace
     * of this country. Units need to be specified in the overflyLeadTimeUnit field.
     */
    overflyLeadTime?: number;

    /**
     * Remarks concerning the overfly lead time required for this country.
     */
    overflyLeadTimeRemark?: string;

    /**
     * Unit of time specified for the overflyLeadTime field to indicate the overfly
     * lead time required for this country.
     */
    overflyLeadTimeUnit?: string;

    /**
     * Amount of time before the overfly valid period that an aircraft is allowed to
     * fly over this country for this profile. The unit of time should be specified in
     * the overflyValidPeriodUnit field.
     */
    overflyValidPeriodMinus?: number;

    /**
     * Amount of time after the overfly valid period that an aircraft is allowed to fly
     * over this country for this profile. The unit of time should be specified in the
     * overflyValidPeriodUnit field.
     */
    overflyValidPeriodPlus?: number;

    /**
     * Remarks concerning the valid overfly time period for this country.
     */
    overflyValidPeriodRemark?: string;

    /**
     * Unit of time specified for the overflyValidPeriodPlus and
     * overflyValidPeriodMinus fields to indicate the valid overfly period for this
     * country.
     */
    overflyValidPeriodUnit?: string;

    /**
     * The diplomatic clearance profile name used within clearance management systems.
     */
    profile?: string;

    /**
     * The agency to which this profile applies.
     */
    profileAgency?: string;

    /**
     * Identifier of the diplomatic clearance country profile.
     */
    profileId?: string;

    /**
     * Remarks concerning this country profile.
     */
    profileRemark?: string;

    /**
     * Flag indicating whether alternate aircraft names are required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqACAltName?: boolean;

    /**
     * Flag indicating whether all hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqAllHazInfo?: boolean;

    /**
     * Flag indicating whether standard AMC information is required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqAMCStdInfo?: boolean;

    /**
     * Flag indicating whether a cargo list is required to be reported to the country
     * using this diplomatic clearance profile.
     */
    reqCargoList?: boolean;

    /**
     * Flag indicating whether aircraft cargo and passenger information is required to
     * be reported to the country using this diplomatic clearance profile.
     */
    reqCargoPax?: boolean;

    /**
     * Flag indicating whether Class 1 hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqClass1Info?: boolean;

    /**
     * Flag indicating whether Class 9 hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqClass9Info?: boolean;

    /**
     * Flag indicating whether the number of crew members on a flight is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqCrewComp?: boolean;

    /**
     * Flag indicating whether the names, ranks, and positions of crew members are
     * required to be reported to the country using this diplomatic clearance profile.
     */
    reqCrewDetail?: boolean;

    /**
     * Flag indicating whether crew information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqCrewInfo?: boolean;

    /**
     * Flag indicating whether Division 1.1 hazardous material information is required
     * to be reported to the country using this diplomatic clearance profile.
     */
    reqDiv1Info?: boolean;

    /**
     * Flag indicating whether distinguished visitors are required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqDV?: boolean;

    /**
     * Flag indicating whether entry/exit coordinates need to be specified for this
     * diplomatic clearance profile.
     */
    reqEntryExitCoord?: boolean;

    /**
     * Flag indicating whether flight information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqFltInfo?: boolean;

    /**
     * Flag indicating whether a flight plan route is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqFltPlanRoute?: boolean;

    /**
     * Flag indicating whether aviation funding sources are required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqFundSource?: boolean;

    /**
     * Flag indicating whether hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqHazInfo?: boolean;

    /**
     * Flag indicating whether this diplomatic clearance profile applies to specific
     * ICAO(s). These specific ICAO(s) should be clarified in the fltInfoRemark field.
     */
    reqICAO?: boolean;

    /**
     * Flag indicating whether passport information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqPassportInfo?: boolean;

    /**
     * Flag indicating whether ravens are required to be reported to the country using
     * this diplomatic clearance profile.
     */
    reqRaven?: boolean;

    /**
     * Flag indicating whether changes are required to be reported to the country using
     * this diplomatic clearance profile.
     */
    reqRepChange?: boolean;

    /**
     * Flag indicating whether an aircraft tail number is required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqTailNum?: boolean;

    /**
     * Flag indicating whether weapons information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqWeaponsInfo?: boolean;

    /**
     * Flag indicating whether crew reporting is undefined for the country using this
     * diplomatic clearance profile.
     */
    undefinedCrewReporting?: boolean;
  }
}

export type CountryCountResponse = string;

export interface CountryQueryHelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<CountryQueryHelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace CountryQueryHelpResponse {
  export interface Parameter {
    classificationMarking?: string;

    derived?: boolean;

    description?: string;

    elemMatch?: boolean;

    format?: string;

    histQuerySupported?: boolean;

    histTupleSupported?: boolean;

    name?: string;

    required?: boolean;

    restQuerySupported?: boolean;

    restTupleSupported?: boolean;

    type?: string;

    unitOfMeasure?: string;

    utcDate?: boolean;
  }
}

export type CountryTupleResponse = Array<CountryTupleResponse.CountryTupleResponseItem>;

export namespace CountryTupleResponse {
  /**
   * Diplomatic Clearance Country provides information such as entry/exit points,
   * requirements, and points of contact for countries diplomatic clearances are
   * being created for.
   */
  export interface CountryTupleResponseItem {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * The DoD Standard Country Code designator for the country for which the
     * diplomatic clearance will be issued. This field should be set to "OTHR" if the
     * source value does not match a UDL country code value (ISO-3166-ALPHA-2).
     */
    countryCode: string;

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
     * Last time this country's diplomatic clearance profile information was updated,
     * in ISO 8601 UTC format with millisecond precision.
     */
    lastChangedDate: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Flag indicating whether this country's diplomatic clearance office can receive
     * messages using the Defense Message System (DMS).
     */
    acceptsDMS?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office can receive
     * messages via email.
     */
    acceptsEmail?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office can receive
     * messages via fax.
     */
    acceptsFax?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office can receive
     * messages via SIPRNet.
     */
    acceptsSIPRNet?: boolean;

    /**
     * The source agency of the diplomatic clearance country data.
     */
    agency?: string;

    /**
     * Specifies an alternate country code if the data provider code does not match a
     * UDL Country code value (ISO-3166-ALPHA-2). This field will be set to the value
     * provided by the source and should be used for all Queries specifying a Country
     * Code.
     */
    altCountryCode?: string;

    /**
     * Zulu closing time of this country's diplomatic clearance office expressed in
     * HH:MM format.
     */
    closeTime?: string;

    /**
     * System generated code used to identify a country.
     */
    countryId?: string;

    /**
     * Name of the country for which the diplomatic clearance will be issued.
     */
    countryName?: string;

    /**
     * Remarks concerning the country for which the diplomatic clearance will be
     * issued.
     */
    countryRemark?: string;

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
     * Collection of diplomatic clearance profile information for this country.
     */
    diplomaticClearanceCountryContacts?: Array<CountryTupleResponseItem.DiplomaticClearanceCountryContact>;

    /**
     * Collection of diplomatic clearance profile information for this country.
     */
    diplomaticClearanceCountryEntryExitPoints?: Array<CountryTupleResponseItem.DiplomaticClearanceCountryEntryExitPoint>;

    /**
     * Collection of diplomatic clearance profile information for this country.
     */
    diplomaticClearanceCountryProfiles?: Array<CountryTupleResponseItem.DiplomaticClearanceCountryProfile>;

    /**
     * Flag indicating whether a diplomatic clearance profile exists for this country.
     */
    existingProfile?: boolean;

    /**
     * Time difference between the location of the country for which the diplomatic
     * clearance will be issued and the Greenwich Mean Time (GMT), expressed as
     * +/-HH:MM. Time zones east of Greenwich have positive offsets and time zones west
     * of Greenwich are negative.
     */
    gmtOffset?: string;

    /**
     * Name of this country's diplomatic clearance office.
     */
    officeName?: string;

    /**
     * Name of the point of contact for this country's diplomatic clearance office.
     */
    officePOC?: string;

    /**
     * Remarks concerning this country's diplomatic clearance office.
     */
    officeRemark?: string;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Friday.
     */
    openFri?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Monday.
     */
    openMon?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Saturday.
     */
    openSat?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Sunday.
     */
    openSun?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Thursday.
     */
    openThu?: boolean;

    /**
     * Zulu opening time of this country's diplomatic clearance office expressed in
     * HH:MM format.
     */
    openTime?: string;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Tuesday.
     */
    openTue?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Wednesday.
     */
    openWed?: boolean;

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
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

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

  export namespace CountryTupleResponseItem {
    /**
     * Collection of contact information for this country.
     */
    export interface DiplomaticClearanceCountryContact {
      /**
       * Phone number for this contact after regular business hours.
       */
      ahNum?: string;

      /**
       * Speed dial code for this contact after regular business hours.
       */
      ahSpdDialCode?: string;

      /**
       * Commercial phone number for this contact.
       */
      commNum?: string;

      /**
       * Commercial speed dial code for this contact.
       */
      commSpdDialCode?: string;

      /**
       * Identifier of the contact for this country.
       */
      contactId?: string;

      /**
       * Name of the contact for this country.
       */
      contactName?: string;

      /**
       * Remarks about this contact.
       */
      contactRemark?: string;

      /**
       * Defense Switched Network (DSN) phone number for this contact.
       */
      dsnNum?: string;

      /**
       * Defense Switched Network (DSN) speed dial code for this contact.
       */
      dsnSpdDialCode?: string;

      /**
       * Fax number for this contact.
       */
      faxNum?: string;

      /**
       * Phone number to contact the Diplomatic Attache Office (DAO) for this country
       * over a secure NIPR line.
       */
      niprNum?: string;

      /**
       * Phone number to contact the Diplomatic Attache Office (DAO) for this country
       * over a secure SIPR line.
       */
      siprNum?: string;
    }

    /**
     * Collection of entry and exit points for this country.
     */
    export interface DiplomaticClearanceCountryEntryExitPoint {
      /**
       * Flag indicating whether this is a point of entry for this country.
       */
      isEntry?: boolean;

      /**
       * Flag indicating whether this is a point of exit for this country.
       */
      isExit?: boolean;

      /**
       * Name of this entry/exit point.
       */
      pointName?: string;
    }

    /**
     * Collection of diplomatic clearance profile information for this country.
     */
    export interface DiplomaticClearanceCountryProfile {
      /**
       * Remarks concerning aircraft cargo and passenger information for this country
       * profile.
       */
      cargoPaxRemark?: string;

      /**
       * Identifier of the associated diplomatic clearance issued by the host country.
       */
      clearanceId?: string;

      /**
       * Remarks concerning crew information for this country profile.
       */
      crewInfoRemark?: string;

      /**
       * Code denoting the status of the default diplomatic clearance (e.g., A for
       * Approved via APACS, E for Requested via email, etc.).
       */
      defClearanceStatus?: string;

      /**
       * Remarks concerning the default entry point for this country.
       */
      defEntryRemark?: string;

      /**
       * Zulu default entry time for this country expressed in HH:MM format.
       */
      defEntryTime?: string;

      /**
       * Remarks concerning the default exit point for this country.
       */
      defExitRemark?: string;

      /**
       * Zulu default exit time for this country expressed in HH:MM format.
       */
      defExitTime?: string;

      /**
       * Remarks concerning flight information for this country profile.
       */
      fltInfoRemark?: string;

      /**
       * Remarks concerning hazardous material information for this country profile.
       */
      hazInfoRemark?: string;

      /**
       * Flag indicating whether this is the default landing profile for this country.
       */
      landDefProf?: boolean;

      /**
       * Amount of lead time required for an aircraft to land in this country. Units need
       * to be specified in the landLeadTimeUnit field.
       */
      landLeadTime?: number;

      /**
       * Remarks concerning the landing lead time required for this country.
       */
      landLeadTimeRemark?: string;

      /**
       * Unit of time specified for the landLeadTime field to indicate the landing lead
       * time required for this country.
       */
      landLeadTimeUnit?: string;

      /**
       * Amount of time before the landing valid period that an aircraft is allowed to
       * land in this country for this profile. The unit of time should be specified in
       * the landValidPeriodUnit field.
       */
      landValidPeriodMinus?: number;

      /**
       * Amount of time after the landing valid period that an aircraft is allowed to
       * land in this country for this profile. The unit of time should be specified in
       * the landValidPeriodUnit field.
       */
      landValidPeriodPlus?: number;

      /**
       * Remarks concerning the valid landing time period for this country.
       */
      landValidPeriodRemark?: string;

      /**
       * Unit of time specified for the landValidPeriodPlus and landValidPeriodMinus
       * fields to indicate the valid landing period for this country.
       */
      landValidPeriodUnit?: string;

      /**
       * Flag indicating whether this is the default overfly profile for this country.
       */
      overflyDefProf?: boolean;

      /**
       * Amount of lead time required for an aircraft to enter and fly over the airspace
       * of this country. Units need to be specified in the overflyLeadTimeUnit field.
       */
      overflyLeadTime?: number;

      /**
       * Remarks concerning the overfly lead time required for this country.
       */
      overflyLeadTimeRemark?: string;

      /**
       * Unit of time specified for the overflyLeadTime field to indicate the overfly
       * lead time required for this country.
       */
      overflyLeadTimeUnit?: string;

      /**
       * Amount of time before the overfly valid period that an aircraft is allowed to
       * fly over this country for this profile. The unit of time should be specified in
       * the overflyValidPeriodUnit field.
       */
      overflyValidPeriodMinus?: number;

      /**
       * Amount of time after the overfly valid period that an aircraft is allowed to fly
       * over this country for this profile. The unit of time should be specified in the
       * overflyValidPeriodUnit field.
       */
      overflyValidPeriodPlus?: number;

      /**
       * Remarks concerning the valid overfly time period for this country.
       */
      overflyValidPeriodRemark?: string;

      /**
       * Unit of time specified for the overflyValidPeriodPlus and
       * overflyValidPeriodMinus fields to indicate the valid overfly period for this
       * country.
       */
      overflyValidPeriodUnit?: string;

      /**
       * The diplomatic clearance profile name used within clearance management systems.
       */
      profile?: string;

      /**
       * The agency to which this profile applies.
       */
      profileAgency?: string;

      /**
       * Identifier of the diplomatic clearance country profile.
       */
      profileId?: string;

      /**
       * Remarks concerning this country profile.
       */
      profileRemark?: string;

      /**
       * Flag indicating whether alternate aircraft names are required to be reported to
       * the country using this diplomatic clearance profile.
       */
      reqACAltName?: boolean;

      /**
       * Flag indicating whether all hazardous material information is required to be
       * reported to the country using this diplomatic clearance profile.
       */
      reqAllHazInfo?: boolean;

      /**
       * Flag indicating whether standard AMC information is required to be reported to
       * the country using this diplomatic clearance profile.
       */
      reqAMCStdInfo?: boolean;

      /**
       * Flag indicating whether a cargo list is required to be reported to the country
       * using this diplomatic clearance profile.
       */
      reqCargoList?: boolean;

      /**
       * Flag indicating whether aircraft cargo and passenger information is required to
       * be reported to the country using this diplomatic clearance profile.
       */
      reqCargoPax?: boolean;

      /**
       * Flag indicating whether Class 1 hazardous material information is required to be
       * reported to the country using this diplomatic clearance profile.
       */
      reqClass1Info?: boolean;

      /**
       * Flag indicating whether Class 9 hazardous material information is required to be
       * reported to the country using this diplomatic clearance profile.
       */
      reqClass9Info?: boolean;

      /**
       * Flag indicating whether the number of crew members on a flight is required to be
       * reported to the country using this diplomatic clearance profile.
       */
      reqCrewComp?: boolean;

      /**
       * Flag indicating whether the names, ranks, and positions of crew members are
       * required to be reported to the country using this diplomatic clearance profile.
       */
      reqCrewDetail?: boolean;

      /**
       * Flag indicating whether crew information is required to be reported to the
       * country using this diplomatic clearance profile.
       */
      reqCrewInfo?: boolean;

      /**
       * Flag indicating whether Division 1.1 hazardous material information is required
       * to be reported to the country using this diplomatic clearance profile.
       */
      reqDiv1Info?: boolean;

      /**
       * Flag indicating whether distinguished visitors are required to be reported to
       * the country using this diplomatic clearance profile.
       */
      reqDV?: boolean;

      /**
       * Flag indicating whether entry/exit coordinates need to be specified for this
       * diplomatic clearance profile.
       */
      reqEntryExitCoord?: boolean;

      /**
       * Flag indicating whether flight information is required to be reported to the
       * country using this diplomatic clearance profile.
       */
      reqFltInfo?: boolean;

      /**
       * Flag indicating whether a flight plan route is required to be reported to the
       * country using this diplomatic clearance profile.
       */
      reqFltPlanRoute?: boolean;

      /**
       * Flag indicating whether aviation funding sources are required to be reported to
       * the country using this diplomatic clearance profile.
       */
      reqFundSource?: boolean;

      /**
       * Flag indicating whether hazardous material information is required to be
       * reported to the country using this diplomatic clearance profile.
       */
      reqHazInfo?: boolean;

      /**
       * Flag indicating whether this diplomatic clearance profile applies to specific
       * ICAO(s). These specific ICAO(s) should be clarified in the fltInfoRemark field.
       */
      reqICAO?: boolean;

      /**
       * Flag indicating whether passport information is required to be reported to the
       * country using this diplomatic clearance profile.
       */
      reqPassportInfo?: boolean;

      /**
       * Flag indicating whether ravens are required to be reported to the country using
       * this diplomatic clearance profile.
       */
      reqRaven?: boolean;

      /**
       * Flag indicating whether changes are required to be reported to the country using
       * this diplomatic clearance profile.
       */
      reqRepChange?: boolean;

      /**
       * Flag indicating whether an aircraft tail number is required to be reported to
       * the country using this diplomatic clearance profile.
       */
      reqTailNum?: boolean;

      /**
       * Flag indicating whether weapons information is required to be reported to the
       * country using this diplomatic clearance profile.
       */
      reqWeaponsInfo?: boolean;

      /**
       * Flag indicating whether crew reporting is undefined for the country using this
       * diplomatic clearance profile.
       */
      undefinedCrewReporting?: boolean;
    }
  }
}

export interface CountryCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The DoD Standard Country Code designator for the country for which the
   * diplomatic clearance will be issued. This field should be set to "OTHR" if the
   * source value does not match a UDL country code value (ISO-3166-ALPHA-2).
   */
  countryCode: string;

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
   * Last time this country's diplomatic clearance profile information was updated,
   * in ISO 8601 UTC format with millisecond precision.
   */
  lastChangedDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages using the Defense Message System (DMS).
   */
  acceptsDMS?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages via email.
   */
  acceptsEmail?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages via fax.
   */
  acceptsFax?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages via SIPRNet.
   */
  acceptsSIPRNet?: boolean;

  /**
   * The source agency of the diplomatic clearance country data.
   */
  agency?: string;

  /**
   * Specifies an alternate country code if the data provider code does not match a
   * UDL Country code value (ISO-3166-ALPHA-2). This field will be set to the value
   * provided by the source and should be used for all Queries specifying a Country
   * Code.
   */
  altCountryCode?: string;

  /**
   * Zulu closing time of this country's diplomatic clearance office expressed in
   * HH:MM format.
   */
  closeTime?: string;

  /**
   * System generated code used to identify a country.
   */
  countryId?: string;

  /**
   * Name of the country for which the diplomatic clearance will be issued.
   */
  countryName?: string;

  /**
   * Remarks concerning the country for which the diplomatic clearance will be
   * issued.
   */
  countryRemark?: string;

  /**
   * Collection of diplomatic clearance profile information for this country.
   */
  diplomaticClearanceCountryContacts?: Array<CountryCreateParams.DiplomaticClearanceCountryContact>;

  /**
   * Collection of diplomatic clearance profile information for this country.
   */
  diplomaticClearanceCountryEntryExitPoints?: Array<CountryCreateParams.DiplomaticClearanceCountryEntryExitPoint>;

  /**
   * Collection of diplomatic clearance profile information for this country.
   */
  diplomaticClearanceCountryProfiles?: Array<CountryCreateParams.DiplomaticClearanceCountryProfile>;

  /**
   * Flag indicating whether a diplomatic clearance profile exists for this country.
   */
  existingProfile?: boolean;

  /**
   * Time difference between the location of the country for which the diplomatic
   * clearance will be issued and the Greenwich Mean Time (GMT), expressed as
   * +/-HH:MM. Time zones east of Greenwich have positive offsets and time zones west
   * of Greenwich are negative.
   */
  gmtOffset?: string;

  /**
   * Name of this country's diplomatic clearance office.
   */
  officeName?: string;

  /**
   * Name of the point of contact for this country's diplomatic clearance office.
   */
  officePOC?: string;

  /**
   * Remarks concerning this country's diplomatic clearance office.
   */
  officeRemark?: string;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Friday.
   */
  openFri?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Monday.
   */
  openMon?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Saturday.
   */
  openSat?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Sunday.
   */
  openSun?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Thursday.
   */
  openThu?: boolean;

  /**
   * Zulu opening time of this country's diplomatic clearance office expressed in
   * HH:MM format.
   */
  openTime?: string;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Tuesday.
   */
  openTue?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Wednesday.
   */
  openWed?: boolean;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export namespace CountryCreateParams {
  /**
   * Collection of contact information for this country.
   */
  export interface DiplomaticClearanceCountryContact {
    /**
     * Phone number for this contact after regular business hours.
     */
    ahNum?: string;

    /**
     * Speed dial code for this contact after regular business hours.
     */
    ahSpdDialCode?: string;

    /**
     * Commercial phone number for this contact.
     */
    commNum?: string;

    /**
     * Commercial speed dial code for this contact.
     */
    commSpdDialCode?: string;

    /**
     * Identifier of the contact for this country.
     */
    contactId?: string;

    /**
     * Name of the contact for this country.
     */
    contactName?: string;

    /**
     * Remarks about this contact.
     */
    contactRemark?: string;

    /**
     * Defense Switched Network (DSN) phone number for this contact.
     */
    dsnNum?: string;

    /**
     * Defense Switched Network (DSN) speed dial code for this contact.
     */
    dsnSpdDialCode?: string;

    /**
     * Fax number for this contact.
     */
    faxNum?: string;

    /**
     * Phone number to contact the Diplomatic Attache Office (DAO) for this country
     * over a secure NIPR line.
     */
    niprNum?: string;

    /**
     * Phone number to contact the Diplomatic Attache Office (DAO) for this country
     * over a secure SIPR line.
     */
    siprNum?: string;
  }

  /**
   * Collection of entry and exit points for this country.
   */
  export interface DiplomaticClearanceCountryEntryExitPoint {
    /**
     * Flag indicating whether this is a point of entry for this country.
     */
    isEntry?: boolean;

    /**
     * Flag indicating whether this is a point of exit for this country.
     */
    isExit?: boolean;

    /**
     * Name of this entry/exit point.
     */
    pointName?: string;
  }

  /**
   * Collection of diplomatic clearance profile information for this country.
   */
  export interface DiplomaticClearanceCountryProfile {
    /**
     * Remarks concerning aircraft cargo and passenger information for this country
     * profile.
     */
    cargoPaxRemark?: string;

    /**
     * Identifier of the associated diplomatic clearance issued by the host country.
     */
    clearanceId?: string;

    /**
     * Remarks concerning crew information for this country profile.
     */
    crewInfoRemark?: string;

    /**
     * Code denoting the status of the default diplomatic clearance (e.g., A for
     * Approved via APACS, E for Requested via email, etc.).
     */
    defClearanceStatus?: string;

    /**
     * Remarks concerning the default entry point for this country.
     */
    defEntryRemark?: string;

    /**
     * Zulu default entry time for this country expressed in HH:MM format.
     */
    defEntryTime?: string;

    /**
     * Remarks concerning the default exit point for this country.
     */
    defExitRemark?: string;

    /**
     * Zulu default exit time for this country expressed in HH:MM format.
     */
    defExitTime?: string;

    /**
     * Remarks concerning flight information for this country profile.
     */
    fltInfoRemark?: string;

    /**
     * Remarks concerning hazardous material information for this country profile.
     */
    hazInfoRemark?: string;

    /**
     * Flag indicating whether this is the default landing profile for this country.
     */
    landDefProf?: boolean;

    /**
     * Amount of lead time required for an aircraft to land in this country. Units need
     * to be specified in the landLeadTimeUnit field.
     */
    landLeadTime?: number;

    /**
     * Remarks concerning the landing lead time required for this country.
     */
    landLeadTimeRemark?: string;

    /**
     * Unit of time specified for the landLeadTime field to indicate the landing lead
     * time required for this country.
     */
    landLeadTimeUnit?: string;

    /**
     * Amount of time before the landing valid period that an aircraft is allowed to
     * land in this country for this profile. The unit of time should be specified in
     * the landValidPeriodUnit field.
     */
    landValidPeriodMinus?: number;

    /**
     * Amount of time after the landing valid period that an aircraft is allowed to
     * land in this country for this profile. The unit of time should be specified in
     * the landValidPeriodUnit field.
     */
    landValidPeriodPlus?: number;

    /**
     * Remarks concerning the valid landing time period for this country.
     */
    landValidPeriodRemark?: string;

    /**
     * Unit of time specified for the landValidPeriodPlus and landValidPeriodMinus
     * fields to indicate the valid landing period for this country.
     */
    landValidPeriodUnit?: string;

    /**
     * Flag indicating whether this is the default overfly profile for this country.
     */
    overflyDefProf?: boolean;

    /**
     * Amount of lead time required for an aircraft to enter and fly over the airspace
     * of this country. Units need to be specified in the overflyLeadTimeUnit field.
     */
    overflyLeadTime?: number;

    /**
     * Remarks concerning the overfly lead time required for this country.
     */
    overflyLeadTimeRemark?: string;

    /**
     * Unit of time specified for the overflyLeadTime field to indicate the overfly
     * lead time required for this country.
     */
    overflyLeadTimeUnit?: string;

    /**
     * Amount of time before the overfly valid period that an aircraft is allowed to
     * fly over this country for this profile. The unit of time should be specified in
     * the overflyValidPeriodUnit field.
     */
    overflyValidPeriodMinus?: number;

    /**
     * Amount of time after the overfly valid period that an aircraft is allowed to fly
     * over this country for this profile. The unit of time should be specified in the
     * overflyValidPeriodUnit field.
     */
    overflyValidPeriodPlus?: number;

    /**
     * Remarks concerning the valid overfly time period for this country.
     */
    overflyValidPeriodRemark?: string;

    /**
     * Unit of time specified for the overflyValidPeriodPlus and
     * overflyValidPeriodMinus fields to indicate the valid overfly period for this
     * country.
     */
    overflyValidPeriodUnit?: string;

    /**
     * The diplomatic clearance profile name used within clearance management systems.
     */
    profile?: string;

    /**
     * The agency to which this profile applies.
     */
    profileAgency?: string;

    /**
     * Identifier of the diplomatic clearance country profile.
     */
    profileId?: string;

    /**
     * Remarks concerning this country profile.
     */
    profileRemark?: string;

    /**
     * Flag indicating whether alternate aircraft names are required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqACAltName?: boolean;

    /**
     * Flag indicating whether all hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqAllHazInfo?: boolean;

    /**
     * Flag indicating whether standard AMC information is required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqAMCStdInfo?: boolean;

    /**
     * Flag indicating whether a cargo list is required to be reported to the country
     * using this diplomatic clearance profile.
     */
    reqCargoList?: boolean;

    /**
     * Flag indicating whether aircraft cargo and passenger information is required to
     * be reported to the country using this diplomatic clearance profile.
     */
    reqCargoPax?: boolean;

    /**
     * Flag indicating whether Class 1 hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqClass1Info?: boolean;

    /**
     * Flag indicating whether Class 9 hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqClass9Info?: boolean;

    /**
     * Flag indicating whether the number of crew members on a flight is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqCrewComp?: boolean;

    /**
     * Flag indicating whether the names, ranks, and positions of crew members are
     * required to be reported to the country using this diplomatic clearance profile.
     */
    reqCrewDetail?: boolean;

    /**
     * Flag indicating whether crew information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqCrewInfo?: boolean;

    /**
     * Flag indicating whether Division 1.1 hazardous material information is required
     * to be reported to the country using this diplomatic clearance profile.
     */
    reqDiv1Info?: boolean;

    /**
     * Flag indicating whether distinguished visitors are required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqDV?: boolean;

    /**
     * Flag indicating whether entry/exit coordinates need to be specified for this
     * diplomatic clearance profile.
     */
    reqEntryExitCoord?: boolean;

    /**
     * Flag indicating whether flight information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqFltInfo?: boolean;

    /**
     * Flag indicating whether a flight plan route is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqFltPlanRoute?: boolean;

    /**
     * Flag indicating whether aviation funding sources are required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqFundSource?: boolean;

    /**
     * Flag indicating whether hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqHazInfo?: boolean;

    /**
     * Flag indicating whether this diplomatic clearance profile applies to specific
     * ICAO(s). These specific ICAO(s) should be clarified in the fltInfoRemark field.
     */
    reqICAO?: boolean;

    /**
     * Flag indicating whether passport information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqPassportInfo?: boolean;

    /**
     * Flag indicating whether ravens are required to be reported to the country using
     * this diplomatic clearance profile.
     */
    reqRaven?: boolean;

    /**
     * Flag indicating whether changes are required to be reported to the country using
     * this diplomatic clearance profile.
     */
    reqRepChange?: boolean;

    /**
     * Flag indicating whether an aircraft tail number is required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqTailNum?: boolean;

    /**
     * Flag indicating whether weapons information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqWeaponsInfo?: boolean;

    /**
     * Flag indicating whether crew reporting is undefined for the country using this
     * diplomatic clearance profile.
     */
    undefinedCrewReporting?: boolean;
  }
}

export interface CountryRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface CountryUpdateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The DoD Standard Country Code designator for the country for which the
   * diplomatic clearance will be issued. This field should be set to "OTHR" if the
   * source value does not match a UDL country code value (ISO-3166-ALPHA-2).
   */
  countryCode: string;

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
   * Last time this country's diplomatic clearance profile information was updated,
   * in ISO 8601 UTC format with millisecond precision.
   */
  lastChangedDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages using the Defense Message System (DMS).
   */
  acceptsDMS?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages via email.
   */
  acceptsEmail?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages via fax.
   */
  acceptsFax?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office can receive
   * messages via SIPRNet.
   */
  acceptsSIPRNet?: boolean;

  /**
   * The source agency of the diplomatic clearance country data.
   */
  agency?: string;

  /**
   * Specifies an alternate country code if the data provider code does not match a
   * UDL Country code value (ISO-3166-ALPHA-2). This field will be set to the value
   * provided by the source and should be used for all Queries specifying a Country
   * Code.
   */
  altCountryCode?: string;

  /**
   * Zulu closing time of this country's diplomatic clearance office expressed in
   * HH:MM format.
   */
  closeTime?: string;

  /**
   * System generated code used to identify a country.
   */
  countryId?: string;

  /**
   * Name of the country for which the diplomatic clearance will be issued.
   */
  countryName?: string;

  /**
   * Remarks concerning the country for which the diplomatic clearance will be
   * issued.
   */
  countryRemark?: string;

  /**
   * Collection of diplomatic clearance profile information for this country.
   */
  diplomaticClearanceCountryContacts?: Array<CountryUpdateParams.DiplomaticClearanceCountryContact>;

  /**
   * Collection of diplomatic clearance profile information for this country.
   */
  diplomaticClearanceCountryEntryExitPoints?: Array<CountryUpdateParams.DiplomaticClearanceCountryEntryExitPoint>;

  /**
   * Collection of diplomatic clearance profile information for this country.
   */
  diplomaticClearanceCountryProfiles?: Array<CountryUpdateParams.DiplomaticClearanceCountryProfile>;

  /**
   * Flag indicating whether a diplomatic clearance profile exists for this country.
   */
  existingProfile?: boolean;

  /**
   * Time difference between the location of the country for which the diplomatic
   * clearance will be issued and the Greenwich Mean Time (GMT), expressed as
   * +/-HH:MM. Time zones east of Greenwich have positive offsets and time zones west
   * of Greenwich are negative.
   */
  gmtOffset?: string;

  /**
   * Name of this country's diplomatic clearance office.
   */
  officeName?: string;

  /**
   * Name of the point of contact for this country's diplomatic clearance office.
   */
  officePOC?: string;

  /**
   * Remarks concerning this country's diplomatic clearance office.
   */
  officeRemark?: string;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Friday.
   */
  openFri?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Monday.
   */
  openMon?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Saturday.
   */
  openSat?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Sunday.
   */
  openSun?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Thursday.
   */
  openThu?: boolean;

  /**
   * Zulu opening time of this country's diplomatic clearance office expressed in
   * HH:MM format.
   */
  openTime?: string;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Tuesday.
   */
  openTue?: boolean;

  /**
   * Flag indicating whether this country's diplomatic clearance office is open on
   * Wednesday.
   */
  openWed?: boolean;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export namespace CountryUpdateParams {
  /**
   * Collection of contact information for this country.
   */
  export interface DiplomaticClearanceCountryContact {
    /**
     * Phone number for this contact after regular business hours.
     */
    ahNum?: string;

    /**
     * Speed dial code for this contact after regular business hours.
     */
    ahSpdDialCode?: string;

    /**
     * Commercial phone number for this contact.
     */
    commNum?: string;

    /**
     * Commercial speed dial code for this contact.
     */
    commSpdDialCode?: string;

    /**
     * Identifier of the contact for this country.
     */
    contactId?: string;

    /**
     * Name of the contact for this country.
     */
    contactName?: string;

    /**
     * Remarks about this contact.
     */
    contactRemark?: string;

    /**
     * Defense Switched Network (DSN) phone number for this contact.
     */
    dsnNum?: string;

    /**
     * Defense Switched Network (DSN) speed dial code for this contact.
     */
    dsnSpdDialCode?: string;

    /**
     * Fax number for this contact.
     */
    faxNum?: string;

    /**
     * Phone number to contact the Diplomatic Attache Office (DAO) for this country
     * over a secure NIPR line.
     */
    niprNum?: string;

    /**
     * Phone number to contact the Diplomatic Attache Office (DAO) for this country
     * over a secure SIPR line.
     */
    siprNum?: string;
  }

  /**
   * Collection of entry and exit points for this country.
   */
  export interface DiplomaticClearanceCountryEntryExitPoint {
    /**
     * Flag indicating whether this is a point of entry for this country.
     */
    isEntry?: boolean;

    /**
     * Flag indicating whether this is a point of exit for this country.
     */
    isExit?: boolean;

    /**
     * Name of this entry/exit point.
     */
    pointName?: string;
  }

  /**
   * Collection of diplomatic clearance profile information for this country.
   */
  export interface DiplomaticClearanceCountryProfile {
    /**
     * Remarks concerning aircraft cargo and passenger information for this country
     * profile.
     */
    cargoPaxRemark?: string;

    /**
     * Identifier of the associated diplomatic clearance issued by the host country.
     */
    clearanceId?: string;

    /**
     * Remarks concerning crew information for this country profile.
     */
    crewInfoRemark?: string;

    /**
     * Code denoting the status of the default diplomatic clearance (e.g., A for
     * Approved via APACS, E for Requested via email, etc.).
     */
    defClearanceStatus?: string;

    /**
     * Remarks concerning the default entry point for this country.
     */
    defEntryRemark?: string;

    /**
     * Zulu default entry time for this country expressed in HH:MM format.
     */
    defEntryTime?: string;

    /**
     * Remarks concerning the default exit point for this country.
     */
    defExitRemark?: string;

    /**
     * Zulu default exit time for this country expressed in HH:MM format.
     */
    defExitTime?: string;

    /**
     * Remarks concerning flight information for this country profile.
     */
    fltInfoRemark?: string;

    /**
     * Remarks concerning hazardous material information for this country profile.
     */
    hazInfoRemark?: string;

    /**
     * Flag indicating whether this is the default landing profile for this country.
     */
    landDefProf?: boolean;

    /**
     * Amount of lead time required for an aircraft to land in this country. Units need
     * to be specified in the landLeadTimeUnit field.
     */
    landLeadTime?: number;

    /**
     * Remarks concerning the landing lead time required for this country.
     */
    landLeadTimeRemark?: string;

    /**
     * Unit of time specified for the landLeadTime field to indicate the landing lead
     * time required for this country.
     */
    landLeadTimeUnit?: string;

    /**
     * Amount of time before the landing valid period that an aircraft is allowed to
     * land in this country for this profile. The unit of time should be specified in
     * the landValidPeriodUnit field.
     */
    landValidPeriodMinus?: number;

    /**
     * Amount of time after the landing valid period that an aircraft is allowed to
     * land in this country for this profile. The unit of time should be specified in
     * the landValidPeriodUnit field.
     */
    landValidPeriodPlus?: number;

    /**
     * Remarks concerning the valid landing time period for this country.
     */
    landValidPeriodRemark?: string;

    /**
     * Unit of time specified for the landValidPeriodPlus and landValidPeriodMinus
     * fields to indicate the valid landing period for this country.
     */
    landValidPeriodUnit?: string;

    /**
     * Flag indicating whether this is the default overfly profile for this country.
     */
    overflyDefProf?: boolean;

    /**
     * Amount of lead time required for an aircraft to enter and fly over the airspace
     * of this country. Units need to be specified in the overflyLeadTimeUnit field.
     */
    overflyLeadTime?: number;

    /**
     * Remarks concerning the overfly lead time required for this country.
     */
    overflyLeadTimeRemark?: string;

    /**
     * Unit of time specified for the overflyLeadTime field to indicate the overfly
     * lead time required for this country.
     */
    overflyLeadTimeUnit?: string;

    /**
     * Amount of time before the overfly valid period that an aircraft is allowed to
     * fly over this country for this profile. The unit of time should be specified in
     * the overflyValidPeriodUnit field.
     */
    overflyValidPeriodMinus?: number;

    /**
     * Amount of time after the overfly valid period that an aircraft is allowed to fly
     * over this country for this profile. The unit of time should be specified in the
     * overflyValidPeriodUnit field.
     */
    overflyValidPeriodPlus?: number;

    /**
     * Remarks concerning the valid overfly time period for this country.
     */
    overflyValidPeriodRemark?: string;

    /**
     * Unit of time specified for the overflyValidPeriodPlus and
     * overflyValidPeriodMinus fields to indicate the valid overfly period for this
     * country.
     */
    overflyValidPeriodUnit?: string;

    /**
     * The diplomatic clearance profile name used within clearance management systems.
     */
    profile?: string;

    /**
     * The agency to which this profile applies.
     */
    profileAgency?: string;

    /**
     * Identifier of the diplomatic clearance country profile.
     */
    profileId?: string;

    /**
     * Remarks concerning this country profile.
     */
    profileRemark?: string;

    /**
     * Flag indicating whether alternate aircraft names are required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqACAltName?: boolean;

    /**
     * Flag indicating whether all hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqAllHazInfo?: boolean;

    /**
     * Flag indicating whether standard AMC information is required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqAMCStdInfo?: boolean;

    /**
     * Flag indicating whether a cargo list is required to be reported to the country
     * using this diplomatic clearance profile.
     */
    reqCargoList?: boolean;

    /**
     * Flag indicating whether aircraft cargo and passenger information is required to
     * be reported to the country using this diplomatic clearance profile.
     */
    reqCargoPax?: boolean;

    /**
     * Flag indicating whether Class 1 hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqClass1Info?: boolean;

    /**
     * Flag indicating whether Class 9 hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqClass9Info?: boolean;

    /**
     * Flag indicating whether the number of crew members on a flight is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqCrewComp?: boolean;

    /**
     * Flag indicating whether the names, ranks, and positions of crew members are
     * required to be reported to the country using this diplomatic clearance profile.
     */
    reqCrewDetail?: boolean;

    /**
     * Flag indicating whether crew information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqCrewInfo?: boolean;

    /**
     * Flag indicating whether Division 1.1 hazardous material information is required
     * to be reported to the country using this diplomatic clearance profile.
     */
    reqDiv1Info?: boolean;

    /**
     * Flag indicating whether distinguished visitors are required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqDV?: boolean;

    /**
     * Flag indicating whether entry/exit coordinates need to be specified for this
     * diplomatic clearance profile.
     */
    reqEntryExitCoord?: boolean;

    /**
     * Flag indicating whether flight information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqFltInfo?: boolean;

    /**
     * Flag indicating whether a flight plan route is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqFltPlanRoute?: boolean;

    /**
     * Flag indicating whether aviation funding sources are required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqFundSource?: boolean;

    /**
     * Flag indicating whether hazardous material information is required to be
     * reported to the country using this diplomatic clearance profile.
     */
    reqHazInfo?: boolean;

    /**
     * Flag indicating whether this diplomatic clearance profile applies to specific
     * ICAO(s). These specific ICAO(s) should be clarified in the fltInfoRemark field.
     */
    reqICAO?: boolean;

    /**
     * Flag indicating whether passport information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqPassportInfo?: boolean;

    /**
     * Flag indicating whether ravens are required to be reported to the country using
     * this diplomatic clearance profile.
     */
    reqRaven?: boolean;

    /**
     * Flag indicating whether changes are required to be reported to the country using
     * this diplomatic clearance profile.
     */
    reqRepChange?: boolean;

    /**
     * Flag indicating whether an aircraft tail number is required to be reported to
     * the country using this diplomatic clearance profile.
     */
    reqTailNum?: boolean;

    /**
     * Flag indicating whether weapons information is required to be reported to the
     * country using this diplomatic clearance profile.
     */
    reqWeaponsInfo?: boolean;

    /**
     * Flag indicating whether crew reporting is undefined for the country using this
     * diplomatic clearance profile.
     */
    undefinedCrewReporting?: boolean;
  }
}

export interface CountryListParams extends OffsetPageParams {}

export interface CountryCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface CountryCreateBulkParams {
  body: Array<CountryCreateBulkParams.Body>;
}

export namespace CountryCreateBulkParams {
  /**
   * Diplomatic Clearance Country provides information such as entry/exit points,
   * requirements, and points of contact for countries diplomatic clearances are
   * being created for.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * The DoD Standard Country Code designator for the country for which the
     * diplomatic clearance will be issued. This field should be set to "OTHR" if the
     * source value does not match a UDL country code value (ISO-3166-ALPHA-2).
     */
    countryCode: string;

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
     * Last time this country's diplomatic clearance profile information was updated,
     * in ISO 8601 UTC format with millisecond precision.
     */
    lastChangedDate: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Flag indicating whether this country's diplomatic clearance office can receive
     * messages using the Defense Message System (DMS).
     */
    acceptsDMS?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office can receive
     * messages via email.
     */
    acceptsEmail?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office can receive
     * messages via fax.
     */
    acceptsFax?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office can receive
     * messages via SIPRNet.
     */
    acceptsSIPRNet?: boolean;

    /**
     * The source agency of the diplomatic clearance country data.
     */
    agency?: string;

    /**
     * Specifies an alternate country code if the data provider code does not match a
     * UDL Country code value (ISO-3166-ALPHA-2). This field will be set to the value
     * provided by the source and should be used for all Queries specifying a Country
     * Code.
     */
    altCountryCode?: string;

    /**
     * Zulu closing time of this country's diplomatic clearance office expressed in
     * HH:MM format.
     */
    closeTime?: string;

    /**
     * System generated code used to identify a country.
     */
    countryId?: string;

    /**
     * Name of the country for which the diplomatic clearance will be issued.
     */
    countryName?: string;

    /**
     * Remarks concerning the country for which the diplomatic clearance will be
     * issued.
     */
    countryRemark?: string;

    /**
     * Collection of diplomatic clearance profile information for this country.
     */
    diplomaticClearanceCountryContacts?: Array<Body.DiplomaticClearanceCountryContact>;

    /**
     * Collection of diplomatic clearance profile information for this country.
     */
    diplomaticClearanceCountryEntryExitPoints?: Array<Body.DiplomaticClearanceCountryEntryExitPoint>;

    /**
     * Collection of diplomatic clearance profile information for this country.
     */
    diplomaticClearanceCountryProfiles?: Array<Body.DiplomaticClearanceCountryProfile>;

    /**
     * Flag indicating whether a diplomatic clearance profile exists for this country.
     */
    existingProfile?: boolean;

    /**
     * Time difference between the location of the country for which the diplomatic
     * clearance will be issued and the Greenwich Mean Time (GMT), expressed as
     * +/-HH:MM. Time zones east of Greenwich have positive offsets and time zones west
     * of Greenwich are negative.
     */
    gmtOffset?: string;

    /**
     * Name of this country's diplomatic clearance office.
     */
    officeName?: string;

    /**
     * Name of the point of contact for this country's diplomatic clearance office.
     */
    officePOC?: string;

    /**
     * Remarks concerning this country's diplomatic clearance office.
     */
    officeRemark?: string;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Friday.
     */
    openFri?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Monday.
     */
    openMon?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Saturday.
     */
    openSat?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Sunday.
     */
    openSun?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Thursday.
     */
    openThu?: boolean;

    /**
     * Zulu opening time of this country's diplomatic clearance office expressed in
     * HH:MM format.
     */
    openTime?: string;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Tuesday.
     */
    openTue?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Wednesday.
     */
    openWed?: boolean;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;
  }

  export namespace Body {
    /**
     * Collection of contact information for this country.
     */
    export interface DiplomaticClearanceCountryContact {
      /**
       * Phone number for this contact after regular business hours.
       */
      ahNum?: string;

      /**
       * Speed dial code for this contact after regular business hours.
       */
      ahSpdDialCode?: string;

      /**
       * Commercial phone number for this contact.
       */
      commNum?: string;

      /**
       * Commercial speed dial code for this contact.
       */
      commSpdDialCode?: string;

      /**
       * Identifier of the contact for this country.
       */
      contactId?: string;

      /**
       * Name of the contact for this country.
       */
      contactName?: string;

      /**
       * Remarks about this contact.
       */
      contactRemark?: string;

      /**
       * Defense Switched Network (DSN) phone number for this contact.
       */
      dsnNum?: string;

      /**
       * Defense Switched Network (DSN) speed dial code for this contact.
       */
      dsnSpdDialCode?: string;

      /**
       * Fax number for this contact.
       */
      faxNum?: string;

      /**
       * Phone number to contact the Diplomatic Attache Office (DAO) for this country
       * over a secure NIPR line.
       */
      niprNum?: string;

      /**
       * Phone number to contact the Diplomatic Attache Office (DAO) for this country
       * over a secure SIPR line.
       */
      siprNum?: string;
    }

    /**
     * Collection of entry and exit points for this country.
     */
    export interface DiplomaticClearanceCountryEntryExitPoint {
      /**
       * Flag indicating whether this is a point of entry for this country.
       */
      isEntry?: boolean;

      /**
       * Flag indicating whether this is a point of exit for this country.
       */
      isExit?: boolean;

      /**
       * Name of this entry/exit point.
       */
      pointName?: string;
    }

    /**
     * Collection of diplomatic clearance profile information for this country.
     */
    export interface DiplomaticClearanceCountryProfile {
      /**
       * Remarks concerning aircraft cargo and passenger information for this country
       * profile.
       */
      cargoPaxRemark?: string;

      /**
       * Identifier of the associated diplomatic clearance issued by the host country.
       */
      clearanceId?: string;

      /**
       * Remarks concerning crew information for this country profile.
       */
      crewInfoRemark?: string;

      /**
       * Code denoting the status of the default diplomatic clearance (e.g., A for
       * Approved via APACS, E for Requested via email, etc.).
       */
      defClearanceStatus?: string;

      /**
       * Remarks concerning the default entry point for this country.
       */
      defEntryRemark?: string;

      /**
       * Zulu default entry time for this country expressed in HH:MM format.
       */
      defEntryTime?: string;

      /**
       * Remarks concerning the default exit point for this country.
       */
      defExitRemark?: string;

      /**
       * Zulu default exit time for this country expressed in HH:MM format.
       */
      defExitTime?: string;

      /**
       * Remarks concerning flight information for this country profile.
       */
      fltInfoRemark?: string;

      /**
       * Remarks concerning hazardous material information for this country profile.
       */
      hazInfoRemark?: string;

      /**
       * Flag indicating whether this is the default landing profile for this country.
       */
      landDefProf?: boolean;

      /**
       * Amount of lead time required for an aircraft to land in this country. Units need
       * to be specified in the landLeadTimeUnit field.
       */
      landLeadTime?: number;

      /**
       * Remarks concerning the landing lead time required for this country.
       */
      landLeadTimeRemark?: string;

      /**
       * Unit of time specified for the landLeadTime field to indicate the landing lead
       * time required for this country.
       */
      landLeadTimeUnit?: string;

      /**
       * Amount of time before the landing valid period that an aircraft is allowed to
       * land in this country for this profile. The unit of time should be specified in
       * the landValidPeriodUnit field.
       */
      landValidPeriodMinus?: number;

      /**
       * Amount of time after the landing valid period that an aircraft is allowed to
       * land in this country for this profile. The unit of time should be specified in
       * the landValidPeriodUnit field.
       */
      landValidPeriodPlus?: number;

      /**
       * Remarks concerning the valid landing time period for this country.
       */
      landValidPeriodRemark?: string;

      /**
       * Unit of time specified for the landValidPeriodPlus and landValidPeriodMinus
       * fields to indicate the valid landing period for this country.
       */
      landValidPeriodUnit?: string;

      /**
       * Flag indicating whether this is the default overfly profile for this country.
       */
      overflyDefProf?: boolean;

      /**
       * Amount of lead time required for an aircraft to enter and fly over the airspace
       * of this country. Units need to be specified in the overflyLeadTimeUnit field.
       */
      overflyLeadTime?: number;

      /**
       * Remarks concerning the overfly lead time required for this country.
       */
      overflyLeadTimeRemark?: string;

      /**
       * Unit of time specified for the overflyLeadTime field to indicate the overfly
       * lead time required for this country.
       */
      overflyLeadTimeUnit?: string;

      /**
       * Amount of time before the overfly valid period that an aircraft is allowed to
       * fly over this country for this profile. The unit of time should be specified in
       * the overflyValidPeriodUnit field.
       */
      overflyValidPeriodMinus?: number;

      /**
       * Amount of time after the overfly valid period that an aircraft is allowed to fly
       * over this country for this profile. The unit of time should be specified in the
       * overflyValidPeriodUnit field.
       */
      overflyValidPeriodPlus?: number;

      /**
       * Remarks concerning the valid overfly time period for this country.
       */
      overflyValidPeriodRemark?: string;

      /**
       * Unit of time specified for the overflyValidPeriodPlus and
       * overflyValidPeriodMinus fields to indicate the valid overfly period for this
       * country.
       */
      overflyValidPeriodUnit?: string;

      /**
       * The diplomatic clearance profile name used within clearance management systems.
       */
      profile?: string;

      /**
       * The agency to which this profile applies.
       */
      profileAgency?: string;

      /**
       * Identifier of the diplomatic clearance country profile.
       */
      profileId?: string;

      /**
       * Remarks concerning this country profile.
       */
      profileRemark?: string;

      /**
       * Flag indicating whether alternate aircraft names are required to be reported to
       * the country using this diplomatic clearance profile.
       */
      reqACAltName?: boolean;

      /**
       * Flag indicating whether all hazardous material information is required to be
       * reported to the country using this diplomatic clearance profile.
       */
      reqAllHazInfo?: boolean;

      /**
       * Flag indicating whether standard AMC information is required to be reported to
       * the country using this diplomatic clearance profile.
       */
      reqAMCStdInfo?: boolean;

      /**
       * Flag indicating whether a cargo list is required to be reported to the country
       * using this diplomatic clearance profile.
       */
      reqCargoList?: boolean;

      /**
       * Flag indicating whether aircraft cargo and passenger information is required to
       * be reported to the country using this diplomatic clearance profile.
       */
      reqCargoPax?: boolean;

      /**
       * Flag indicating whether Class 1 hazardous material information is required to be
       * reported to the country using this diplomatic clearance profile.
       */
      reqClass1Info?: boolean;

      /**
       * Flag indicating whether Class 9 hazardous material information is required to be
       * reported to the country using this diplomatic clearance profile.
       */
      reqClass9Info?: boolean;

      /**
       * Flag indicating whether the number of crew members on a flight is required to be
       * reported to the country using this diplomatic clearance profile.
       */
      reqCrewComp?: boolean;

      /**
       * Flag indicating whether the names, ranks, and positions of crew members are
       * required to be reported to the country using this diplomatic clearance profile.
       */
      reqCrewDetail?: boolean;

      /**
       * Flag indicating whether crew information is required to be reported to the
       * country using this diplomatic clearance profile.
       */
      reqCrewInfo?: boolean;

      /**
       * Flag indicating whether Division 1.1 hazardous material information is required
       * to be reported to the country using this diplomatic clearance profile.
       */
      reqDiv1Info?: boolean;

      /**
       * Flag indicating whether distinguished visitors are required to be reported to
       * the country using this diplomatic clearance profile.
       */
      reqDV?: boolean;

      /**
       * Flag indicating whether entry/exit coordinates need to be specified for this
       * diplomatic clearance profile.
       */
      reqEntryExitCoord?: boolean;

      /**
       * Flag indicating whether flight information is required to be reported to the
       * country using this diplomatic clearance profile.
       */
      reqFltInfo?: boolean;

      /**
       * Flag indicating whether a flight plan route is required to be reported to the
       * country using this diplomatic clearance profile.
       */
      reqFltPlanRoute?: boolean;

      /**
       * Flag indicating whether aviation funding sources are required to be reported to
       * the country using this diplomatic clearance profile.
       */
      reqFundSource?: boolean;

      /**
       * Flag indicating whether hazardous material information is required to be
       * reported to the country using this diplomatic clearance profile.
       */
      reqHazInfo?: boolean;

      /**
       * Flag indicating whether this diplomatic clearance profile applies to specific
       * ICAO(s). These specific ICAO(s) should be clarified in the fltInfoRemark field.
       */
      reqICAO?: boolean;

      /**
       * Flag indicating whether passport information is required to be reported to the
       * country using this diplomatic clearance profile.
       */
      reqPassportInfo?: boolean;

      /**
       * Flag indicating whether ravens are required to be reported to the country using
       * this diplomatic clearance profile.
       */
      reqRaven?: boolean;

      /**
       * Flag indicating whether changes are required to be reported to the country using
       * this diplomatic clearance profile.
       */
      reqRepChange?: boolean;

      /**
       * Flag indicating whether an aircraft tail number is required to be reported to
       * the country using this diplomatic clearance profile.
       */
      reqTailNum?: boolean;

      /**
       * Flag indicating whether weapons information is required to be reported to the
       * country using this diplomatic clearance profile.
       */
      reqWeaponsInfo?: boolean;

      /**
       * Flag indicating whether crew reporting is undefined for the country using this
       * diplomatic clearance profile.
       */
      undefinedCrewReporting?: boolean;
    }
  }
}

export interface CountryTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  firstResult?: number;

  maxResults?: number;
}

export interface CountryUnvalidatedPublishParams {
  body: Array<CountryUnvalidatedPublishParams.Body>;
}

export namespace CountryUnvalidatedPublishParams {
  /**
   * Diplomatic Clearance Country provides information such as entry/exit points,
   * requirements, and points of contact for countries diplomatic clearances are
   * being created for.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * The DoD Standard Country Code designator for the country for which the
     * diplomatic clearance will be issued. This field should be set to "OTHR" if the
     * source value does not match a UDL country code value (ISO-3166-ALPHA-2).
     */
    countryCode: string;

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
     * Last time this country's diplomatic clearance profile information was updated,
     * in ISO 8601 UTC format with millisecond precision.
     */
    lastChangedDate: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Flag indicating whether this country's diplomatic clearance office can receive
     * messages using the Defense Message System (DMS).
     */
    acceptsDMS?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office can receive
     * messages via email.
     */
    acceptsEmail?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office can receive
     * messages via fax.
     */
    acceptsFax?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office can receive
     * messages via SIPRNet.
     */
    acceptsSIPRNet?: boolean;

    /**
     * The source agency of the diplomatic clearance country data.
     */
    agency?: string;

    /**
     * Specifies an alternate country code if the data provider code does not match a
     * UDL Country code value (ISO-3166-ALPHA-2). This field will be set to the value
     * provided by the source and should be used for all Queries specifying a Country
     * Code.
     */
    altCountryCode?: string;

    /**
     * Zulu closing time of this country's diplomatic clearance office expressed in
     * HH:MM format.
     */
    closeTime?: string;

    /**
     * System generated code used to identify a country.
     */
    countryId?: string;

    /**
     * Name of the country for which the diplomatic clearance will be issued.
     */
    countryName?: string;

    /**
     * Remarks concerning the country for which the diplomatic clearance will be
     * issued.
     */
    countryRemark?: string;

    /**
     * Collection of diplomatic clearance profile information for this country.
     */
    diplomaticClearanceCountryContacts?: Array<Body.DiplomaticClearanceCountryContact>;

    /**
     * Collection of diplomatic clearance profile information for this country.
     */
    diplomaticClearanceCountryEntryExitPoints?: Array<Body.DiplomaticClearanceCountryEntryExitPoint>;

    /**
     * Collection of diplomatic clearance profile information for this country.
     */
    diplomaticClearanceCountryProfiles?: Array<Body.DiplomaticClearanceCountryProfile>;

    /**
     * Flag indicating whether a diplomatic clearance profile exists for this country.
     */
    existingProfile?: boolean;

    /**
     * Time difference between the location of the country for which the diplomatic
     * clearance will be issued and the Greenwich Mean Time (GMT), expressed as
     * +/-HH:MM. Time zones east of Greenwich have positive offsets and time zones west
     * of Greenwich are negative.
     */
    gmtOffset?: string;

    /**
     * Name of this country's diplomatic clearance office.
     */
    officeName?: string;

    /**
     * Name of the point of contact for this country's diplomatic clearance office.
     */
    officePOC?: string;

    /**
     * Remarks concerning this country's diplomatic clearance office.
     */
    officeRemark?: string;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Friday.
     */
    openFri?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Monday.
     */
    openMon?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Saturday.
     */
    openSat?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Sunday.
     */
    openSun?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Thursday.
     */
    openThu?: boolean;

    /**
     * Zulu opening time of this country's diplomatic clearance office expressed in
     * HH:MM format.
     */
    openTime?: string;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Tuesday.
     */
    openTue?: boolean;

    /**
     * Flag indicating whether this country's diplomatic clearance office is open on
     * Wednesday.
     */
    openWed?: boolean;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;
  }

  export namespace Body {
    /**
     * Collection of contact information for this country.
     */
    export interface DiplomaticClearanceCountryContact {
      /**
       * Phone number for this contact after regular business hours.
       */
      ahNum?: string;

      /**
       * Speed dial code for this contact after regular business hours.
       */
      ahSpdDialCode?: string;

      /**
       * Commercial phone number for this contact.
       */
      commNum?: string;

      /**
       * Commercial speed dial code for this contact.
       */
      commSpdDialCode?: string;

      /**
       * Identifier of the contact for this country.
       */
      contactId?: string;

      /**
       * Name of the contact for this country.
       */
      contactName?: string;

      /**
       * Remarks about this contact.
       */
      contactRemark?: string;

      /**
       * Defense Switched Network (DSN) phone number for this contact.
       */
      dsnNum?: string;

      /**
       * Defense Switched Network (DSN) speed dial code for this contact.
       */
      dsnSpdDialCode?: string;

      /**
       * Fax number for this contact.
       */
      faxNum?: string;

      /**
       * Phone number to contact the Diplomatic Attache Office (DAO) for this country
       * over a secure NIPR line.
       */
      niprNum?: string;

      /**
       * Phone number to contact the Diplomatic Attache Office (DAO) for this country
       * over a secure SIPR line.
       */
      siprNum?: string;
    }

    /**
     * Collection of entry and exit points for this country.
     */
    export interface DiplomaticClearanceCountryEntryExitPoint {
      /**
       * Flag indicating whether this is a point of entry for this country.
       */
      isEntry?: boolean;

      /**
       * Flag indicating whether this is a point of exit for this country.
       */
      isExit?: boolean;

      /**
       * Name of this entry/exit point.
       */
      pointName?: string;
    }

    /**
     * Collection of diplomatic clearance profile information for this country.
     */
    export interface DiplomaticClearanceCountryProfile {
      /**
       * Remarks concerning aircraft cargo and passenger information for this country
       * profile.
       */
      cargoPaxRemark?: string;

      /**
       * Identifier of the associated diplomatic clearance issued by the host country.
       */
      clearanceId?: string;

      /**
       * Remarks concerning crew information for this country profile.
       */
      crewInfoRemark?: string;

      /**
       * Code denoting the status of the default diplomatic clearance (e.g., A for
       * Approved via APACS, E for Requested via email, etc.).
       */
      defClearanceStatus?: string;

      /**
       * Remarks concerning the default entry point for this country.
       */
      defEntryRemark?: string;

      /**
       * Zulu default entry time for this country expressed in HH:MM format.
       */
      defEntryTime?: string;

      /**
       * Remarks concerning the default exit point for this country.
       */
      defExitRemark?: string;

      /**
       * Zulu default exit time for this country expressed in HH:MM format.
       */
      defExitTime?: string;

      /**
       * Remarks concerning flight information for this country profile.
       */
      fltInfoRemark?: string;

      /**
       * Remarks concerning hazardous material information for this country profile.
       */
      hazInfoRemark?: string;

      /**
       * Flag indicating whether this is the default landing profile for this country.
       */
      landDefProf?: boolean;

      /**
       * Amount of lead time required for an aircraft to land in this country. Units need
       * to be specified in the landLeadTimeUnit field.
       */
      landLeadTime?: number;

      /**
       * Remarks concerning the landing lead time required for this country.
       */
      landLeadTimeRemark?: string;

      /**
       * Unit of time specified for the landLeadTime field to indicate the landing lead
       * time required for this country.
       */
      landLeadTimeUnit?: string;

      /**
       * Amount of time before the landing valid period that an aircraft is allowed to
       * land in this country for this profile. The unit of time should be specified in
       * the landValidPeriodUnit field.
       */
      landValidPeriodMinus?: number;

      /**
       * Amount of time after the landing valid period that an aircraft is allowed to
       * land in this country for this profile. The unit of time should be specified in
       * the landValidPeriodUnit field.
       */
      landValidPeriodPlus?: number;

      /**
       * Remarks concerning the valid landing time period for this country.
       */
      landValidPeriodRemark?: string;

      /**
       * Unit of time specified for the landValidPeriodPlus and landValidPeriodMinus
       * fields to indicate the valid landing period for this country.
       */
      landValidPeriodUnit?: string;

      /**
       * Flag indicating whether this is the default overfly profile for this country.
       */
      overflyDefProf?: boolean;

      /**
       * Amount of lead time required for an aircraft to enter and fly over the airspace
       * of this country. Units need to be specified in the overflyLeadTimeUnit field.
       */
      overflyLeadTime?: number;

      /**
       * Remarks concerning the overfly lead time required for this country.
       */
      overflyLeadTimeRemark?: string;

      /**
       * Unit of time specified for the overflyLeadTime field to indicate the overfly
       * lead time required for this country.
       */
      overflyLeadTimeUnit?: string;

      /**
       * Amount of time before the overfly valid period that an aircraft is allowed to
       * fly over this country for this profile. The unit of time should be specified in
       * the overflyValidPeriodUnit field.
       */
      overflyValidPeriodMinus?: number;

      /**
       * Amount of time after the overfly valid period that an aircraft is allowed to fly
       * over this country for this profile. The unit of time should be specified in the
       * overflyValidPeriodUnit field.
       */
      overflyValidPeriodPlus?: number;

      /**
       * Remarks concerning the valid overfly time period for this country.
       */
      overflyValidPeriodRemark?: string;

      /**
       * Unit of time specified for the overflyValidPeriodPlus and
       * overflyValidPeriodMinus fields to indicate the valid overfly period for this
       * country.
       */
      overflyValidPeriodUnit?: string;

      /**
       * The diplomatic clearance profile name used within clearance management systems.
       */
      profile?: string;

      /**
       * The agency to which this profile applies.
       */
      profileAgency?: string;

      /**
       * Identifier of the diplomatic clearance country profile.
       */
      profileId?: string;

      /**
       * Remarks concerning this country profile.
       */
      profileRemark?: string;

      /**
       * Flag indicating whether alternate aircraft names are required to be reported to
       * the country using this diplomatic clearance profile.
       */
      reqACAltName?: boolean;

      /**
       * Flag indicating whether all hazardous material information is required to be
       * reported to the country using this diplomatic clearance profile.
       */
      reqAllHazInfo?: boolean;

      /**
       * Flag indicating whether standard AMC information is required to be reported to
       * the country using this diplomatic clearance profile.
       */
      reqAMCStdInfo?: boolean;

      /**
       * Flag indicating whether a cargo list is required to be reported to the country
       * using this diplomatic clearance profile.
       */
      reqCargoList?: boolean;

      /**
       * Flag indicating whether aircraft cargo and passenger information is required to
       * be reported to the country using this diplomatic clearance profile.
       */
      reqCargoPax?: boolean;

      /**
       * Flag indicating whether Class 1 hazardous material information is required to be
       * reported to the country using this diplomatic clearance profile.
       */
      reqClass1Info?: boolean;

      /**
       * Flag indicating whether Class 9 hazardous material information is required to be
       * reported to the country using this diplomatic clearance profile.
       */
      reqClass9Info?: boolean;

      /**
       * Flag indicating whether the number of crew members on a flight is required to be
       * reported to the country using this diplomatic clearance profile.
       */
      reqCrewComp?: boolean;

      /**
       * Flag indicating whether the names, ranks, and positions of crew members are
       * required to be reported to the country using this diplomatic clearance profile.
       */
      reqCrewDetail?: boolean;

      /**
       * Flag indicating whether crew information is required to be reported to the
       * country using this diplomatic clearance profile.
       */
      reqCrewInfo?: boolean;

      /**
       * Flag indicating whether Division 1.1 hazardous material information is required
       * to be reported to the country using this diplomatic clearance profile.
       */
      reqDiv1Info?: boolean;

      /**
       * Flag indicating whether distinguished visitors are required to be reported to
       * the country using this diplomatic clearance profile.
       */
      reqDV?: boolean;

      /**
       * Flag indicating whether entry/exit coordinates need to be specified for this
       * diplomatic clearance profile.
       */
      reqEntryExitCoord?: boolean;

      /**
       * Flag indicating whether flight information is required to be reported to the
       * country using this diplomatic clearance profile.
       */
      reqFltInfo?: boolean;

      /**
       * Flag indicating whether a flight plan route is required to be reported to the
       * country using this diplomatic clearance profile.
       */
      reqFltPlanRoute?: boolean;

      /**
       * Flag indicating whether aviation funding sources are required to be reported to
       * the country using this diplomatic clearance profile.
       */
      reqFundSource?: boolean;

      /**
       * Flag indicating whether hazardous material information is required to be
       * reported to the country using this diplomatic clearance profile.
       */
      reqHazInfo?: boolean;

      /**
       * Flag indicating whether this diplomatic clearance profile applies to specific
       * ICAO(s). These specific ICAO(s) should be clarified in the fltInfoRemark field.
       */
      reqICAO?: boolean;

      /**
       * Flag indicating whether passport information is required to be reported to the
       * country using this diplomatic clearance profile.
       */
      reqPassportInfo?: boolean;

      /**
       * Flag indicating whether ravens are required to be reported to the country using
       * this diplomatic clearance profile.
       */
      reqRaven?: boolean;

      /**
       * Flag indicating whether changes are required to be reported to the country using
       * this diplomatic clearance profile.
       */
      reqRepChange?: boolean;

      /**
       * Flag indicating whether an aircraft tail number is required to be reported to
       * the country using this diplomatic clearance profile.
       */
      reqTailNum?: boolean;

      /**
       * Flag indicating whether weapons information is required to be reported to the
       * country using this diplomatic clearance profile.
       */
      reqWeaponsInfo?: boolean;

      /**
       * Flag indicating whether crew reporting is undefined for the country using this
       * diplomatic clearance profile.
       */
      undefinedCrewReporting?: boolean;
    }
  }
}

export declare namespace Country {
  export {
    type CountryRetrieveResponse as CountryRetrieveResponse,
    type CountryListResponse as CountryListResponse,
    type CountryCountResponse as CountryCountResponse,
    type CountryQueryHelpResponse as CountryQueryHelpResponse,
    type CountryTupleResponse as CountryTupleResponse,
    type CountryListResponsesOffsetPage as CountryListResponsesOffsetPage,
    type CountryCreateParams as CountryCreateParams,
    type CountryRetrieveParams as CountryRetrieveParams,
    type CountryUpdateParams as CountryUpdateParams,
    type CountryListParams as CountryListParams,
    type CountryCountParams as CountryCountParams,
    type CountryCreateBulkParams as CountryCreateBulkParams,
    type CountryTupleParams as CountryTupleParams,
    type CountryUnvalidatedPublishParams as CountryUnvalidatedPublishParams,
  };
}
