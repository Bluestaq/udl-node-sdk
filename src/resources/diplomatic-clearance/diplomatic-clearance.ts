// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as DiplomaticClearanceAPI from '../air-operations/diplomatic-clearance';
import { DiplomaticclearanceAbridgedsOffsetPage } from '../air-operations/diplomatic-clearance';
import * as CountryAPI from './country';
import {
  Country,
  CountryCountParams,
  CountryCountResponse,
  CountryCreateBulkParams,
  CountryCreateParams,
  CountryListParams,
  CountryListResponse,
  CountryListResponsesOffsetPage,
  CountryQueryHelpResponse,
  CountryRetrieveParams,
  CountryRetrieveResponse,
  CountryTupleParams,
  CountryTupleResponse,
  CountryUnvalidatedPublishParams,
  CountryUpdateParams,
} from './country';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class DiplomaticClearance extends APIResource {
  country: CountryAPI.Country = new CountryAPI.Country(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single diplomatic clearance record as a POST body
   * and ingest into the database. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.diplomaticClearance.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   firstDepDate: '2024-01-01T01:01:01.123Z',
   *   idMission: '0dba1363-2d09-49fa-a784-4bb4cbb1674a',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: DiplomaticClearanceCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/diplomaticclearance', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single diplomatic clearance record by its unique ID
   * passed as a path parameter.
   *
   * @example
   * ```ts
   * const diplomaticclearanceFull =
   *   await client.diplomaticClearance.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: DiplomaticClearanceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.DiplomaticclearanceFull> {
    return this._client.get(path`/udl/diplomaticclearance/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single diplomatic clearance record. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   *
   * @example
   * ```ts
   * await client.diplomaticClearance.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   firstDepDate: '2024-01-01T01:01:01.123Z',
   *   idMission: '0dba1363-2d09-49fa-a784-4bb4cbb1674a',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: DiplomaticClearanceUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/diplomaticclearance/${pathID}`, {
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
   * for await (const diplomaticclearanceAbridged of client.diplomaticClearance.list(
   *   { firstDepDate: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DiplomaticClearanceListParams,
    options?: RequestOptions,
  ): PagePromise<DiplomaticclearanceAbridgedsOffsetPage, DiplomaticClearanceAPI.DiplomaticclearanceAbridged> {
    return this._client.getAPIList(
      '/udl/diplomaticclearance',
      OffsetPage<DiplomaticClearanceAPI.DiplomaticclearanceAbridged>,
      { query, ...options },
    );
  }

  /**
   * Service operation to delete a diplomatic clearance record specified by the
   * passed ID path parameter. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.diplomaticClearance.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/diplomaticclearance/${id}`, {
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
   * const response = await client.diplomaticClearance.count({
   *   firstDepDate: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: DiplomaticClearanceCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/diplomaticclearance/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * diplomaticclearance records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.diplomaticClearance.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       firstDepDate: '2024-01-01T01:01:01.123Z',
   *       idMission: '0dba1363-2d09-49fa-a784-4bb4cbb1674a',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: DiplomaticClearanceCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/diplomaticclearance/createBulk', {
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
   *   await client.diplomaticClearance.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<DiplomaticClearanceQueryhelpResponse> {
    return this._client.get('/udl/diplomaticclearance/queryhelp', options);
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
   * const diplomaticclearanceFulls =
   *   await client.diplomaticClearance.tuple({
   *     columns: 'columns',
   *     firstDepDate: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  tuple(
    query: DiplomaticClearanceTupleParams,
    options?: RequestOptions,
  ): APIPromise<DiplomaticClearanceTupleResponse> {
    return this._client.get('/udl/diplomaticclearance/tuple', { query, ...options });
  }
}

export type DiplomaticClearanceCountResponse = string;

export interface DiplomaticClearanceQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<Shared.ParamDescriptor>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export type DiplomaticClearanceTupleResponse = Array<Shared.DiplomaticclearanceFull>;

export interface DiplomaticClearanceCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The First Departure Date (FDD) the mission is scheduled for departure, in ISO
   * 8601 UTC format with millisecond precision.
   */
  firstDepDate: string;

  /**
   * Unique identifier of the Mission associated with this diplomatic clearance
   * record.
   */
  idMission: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * The Aircraft and Personnel Automated Clearance System (APACS) system identifier
   * used to process and approve this clearance request.
   */
  apacsId?: string;

  /**
   * Collection of diplomatic clearance details.
   */
  diplomaticClearanceDetails?: Array<DiplomaticClearanceCreateParams.DiplomaticClearanceDetail>;

  /**
   * Collection of diplomatic clearance remarks.
   */
  diplomaticClearanceRemarks?: Array<DiplomaticClearanceCreateParams.DiplomaticClearanceRemark>;

  /**
   * Identifier of the Diplomatic Clearance Worksheet used to coordinate aircraft
   * clearance requests.
   */
  dipWorksheetName?: string;

  /**
   * Suspense date for the diplomatic clearance worksheet to be worked, in ISO 8601
   * UTC format with millisecond precision.
   */
  docDeadline?: string;

  /**
   * Optional diplomatic clearance worksheet ID from external systems. This field has
   * no meaning within UDL and is provided as a convenience for systems that require
   * tracking of an internal system generated ID.
   */
  externalWorksheetId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export namespace DiplomaticClearanceCreateParams {
  /**
   * Collection of diplomatic clearance details.
   */
  export interface DiplomaticClearanceDetail {
    /**
     * The type of action the aircraft can take with this diplomatic clearance (e.g. O
     * for Overfly, L for Land, etc.).
     */
    action?: string;

    /**
     * Specifies an alternate country code if the data provider code does not match a
     * UDL Country code value (ISO-3166-ALPHA-2). This field will be set to the value
     * provided by the source and should be used for all Queries specifying a Country
     * Code.
     */
    altCountryCode?: string;

    /**
     * Identifier of this diplomatic clearance issued by the host country.
     */
    clearanceId?: string;

    /**
     * Remarks concerning this diplomatic clearance.
     */
    clearanceRemark?: string;

    /**
     * The call sign of the sortie cleared with this diplomatic clearance.
     */
    clearedCallSign?: string;

    /**
     * The DoD Standard Country Code designator for the country issuing the diplomatic
     * clearance. This field will be set to "OTHR" if the source value does not match a
     * UDL Country code value (ISO-3166-ALPHA-2).
     */
    countryCode?: string;

    /**
     * Name of the country issuing this diplomatic clearance.
     */
    countryName?: string;

    /**
     * Earliest time the aircraft may enter the country, in ISO 8601 UTC format with
     * millisecond precision.
     */
    entryNET?: string;

    /**
     * The navigation point name where the aircraft must enter the country.
     */
    entryPoint?: string;

    /**
     * Latest time the aircraft may exit the country, in ISO 8601 UTC format with
     * millisecond precision.
     */
    exitNLT?: string;

    /**
     * The navigation point name where the aircraft must exit the country.
     */
    exitPoint?: string;

    /**
     * Optional clearance ID from external systems. This field has no meaning within
     * UDL and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalClearanceId?: string;

    /**
     * Unique identifier of the Aircraft Sortie associated with this diplomatic
     * clearance record.
     */
    idSortie?: string;

    /**
     * Identifies the Itinerary point of a sortie where an air event occurs.
     */
    legNum?: number;

    /**
     * The diplomatic clearance profile name used within clearance management systems.
     */
    profile?: string;

    /**
     * Flag indicating whether the clearance request requires ICAO specific
     * information.
     */
    reqICAO?: boolean;

    /**
     * Flag indicating whether entry/exit points are required for clearances.
     */
    reqPoint?: boolean;

    /**
     * The 1801 fileable route of flight string associated with this diplomatic
     * clearance. The route of flight string contains route designators, significant
     * points, change of speed/altitude, change of flight rules, and cruise climbs.
     */
    routeString?: string;

    /**
     * The placement of this diplomatic clearance within a sequence of clearances used
     * on a sortie. For example, a sequence value of 3 means that it is the third
     * diplomatic clearance the aircraft will use.
     */
    sequenceNum?: number;

    /**
     * Indicates the current status of the diplomatic clearance request.
     */
    status?: string;

    /**
     * Description of when this diplomatic clearance is valid.
     */
    validDesc?: string;

    /**
     * The end time of the validity of this diplomatic clearance, in ISO 8601 UTC
     * format with millisecond precision.
     */
    validEndTime?: string;

    /**
     * The start time of the validity of this diplomatic clearance, in ISO 8601 UTC
     * format with millisecond precision.
     */
    validStartTime?: string;

    /**
     * Remarks concerning the valid diplomatic clearance window.
     */
    windowRemark?: string;
  }

  /**
   * Collection of diplomatic clearance remarks.
   */
  export interface DiplomaticClearanceRemark {
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
     * Text of the remark.
     */
    text?: string;

    /**
     * User who published the remark.
     */
    user?: string;
  }
}

export interface DiplomaticClearanceRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface DiplomaticClearanceUpdateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The First Departure Date (FDD) the mission is scheduled for departure, in ISO
   * 8601 UTC format with millisecond precision.
   */
  firstDepDate: string;

  /**
   * Unique identifier of the Mission associated with this diplomatic clearance
   * record.
   */
  idMission: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  body_id?: string;

  /**
   * The Aircraft and Personnel Automated Clearance System (APACS) system identifier
   * used to process and approve this clearance request.
   */
  apacsId?: string;

  /**
   * Collection of diplomatic clearance details.
   */
  diplomaticClearanceDetails?: Array<DiplomaticClearanceUpdateParams.DiplomaticClearanceDetail>;

  /**
   * Collection of diplomatic clearance remarks.
   */
  diplomaticClearanceRemarks?: Array<DiplomaticClearanceUpdateParams.DiplomaticClearanceRemark>;

  /**
   * Identifier of the Diplomatic Clearance Worksheet used to coordinate aircraft
   * clearance requests.
   */
  dipWorksheetName?: string;

  /**
   * Suspense date for the diplomatic clearance worksheet to be worked, in ISO 8601
   * UTC format with millisecond precision.
   */
  docDeadline?: string;

  /**
   * Optional diplomatic clearance worksheet ID from external systems. This field has
   * no meaning within UDL and is provided as a convenience for systems that require
   * tracking of an internal system generated ID.
   */
  externalWorksheetId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export namespace DiplomaticClearanceUpdateParams {
  /**
   * Collection of diplomatic clearance details.
   */
  export interface DiplomaticClearanceDetail {
    /**
     * The type of action the aircraft can take with this diplomatic clearance (e.g. O
     * for Overfly, L for Land, etc.).
     */
    action?: string;

    /**
     * Specifies an alternate country code if the data provider code does not match a
     * UDL Country code value (ISO-3166-ALPHA-2). This field will be set to the value
     * provided by the source and should be used for all Queries specifying a Country
     * Code.
     */
    altCountryCode?: string;

    /**
     * Identifier of this diplomatic clearance issued by the host country.
     */
    clearanceId?: string;

    /**
     * Remarks concerning this diplomatic clearance.
     */
    clearanceRemark?: string;

    /**
     * The call sign of the sortie cleared with this diplomatic clearance.
     */
    clearedCallSign?: string;

    /**
     * The DoD Standard Country Code designator for the country issuing the diplomatic
     * clearance. This field will be set to "OTHR" if the source value does not match a
     * UDL Country code value (ISO-3166-ALPHA-2).
     */
    countryCode?: string;

    /**
     * Name of the country issuing this diplomatic clearance.
     */
    countryName?: string;

    /**
     * Earliest time the aircraft may enter the country, in ISO 8601 UTC format with
     * millisecond precision.
     */
    entryNET?: string;

    /**
     * The navigation point name where the aircraft must enter the country.
     */
    entryPoint?: string;

    /**
     * Latest time the aircraft may exit the country, in ISO 8601 UTC format with
     * millisecond precision.
     */
    exitNLT?: string;

    /**
     * The navigation point name where the aircraft must exit the country.
     */
    exitPoint?: string;

    /**
     * Optional clearance ID from external systems. This field has no meaning within
     * UDL and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalClearanceId?: string;

    /**
     * Unique identifier of the Aircraft Sortie associated with this diplomatic
     * clearance record.
     */
    idSortie?: string;

    /**
     * Identifies the Itinerary point of a sortie where an air event occurs.
     */
    legNum?: number;

    /**
     * The diplomatic clearance profile name used within clearance management systems.
     */
    profile?: string;

    /**
     * Flag indicating whether the clearance request requires ICAO specific
     * information.
     */
    reqICAO?: boolean;

    /**
     * Flag indicating whether entry/exit points are required for clearances.
     */
    reqPoint?: boolean;

    /**
     * The 1801 fileable route of flight string associated with this diplomatic
     * clearance. The route of flight string contains route designators, significant
     * points, change of speed/altitude, change of flight rules, and cruise climbs.
     */
    routeString?: string;

    /**
     * The placement of this diplomatic clearance within a sequence of clearances used
     * on a sortie. For example, a sequence value of 3 means that it is the third
     * diplomatic clearance the aircraft will use.
     */
    sequenceNum?: number;

    /**
     * Indicates the current status of the diplomatic clearance request.
     */
    status?: string;

    /**
     * Description of when this diplomatic clearance is valid.
     */
    validDesc?: string;

    /**
     * The end time of the validity of this diplomatic clearance, in ISO 8601 UTC
     * format with millisecond precision.
     */
    validEndTime?: string;

    /**
     * The start time of the validity of this diplomatic clearance, in ISO 8601 UTC
     * format with millisecond precision.
     */
    validStartTime?: string;

    /**
     * Remarks concerning the valid diplomatic clearance window.
     */
    windowRemark?: string;
  }

  /**
   * Collection of diplomatic clearance remarks.
   */
  export interface DiplomaticClearanceRemark {
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
     * Text of the remark.
     */
    text?: string;

    /**
     * User who published the remark.
     */
    user?: string;
  }
}

export interface DiplomaticClearanceListParams extends OffsetPageParams {
  /**
   * The First Departure Date (FDD) the mission is scheduled for departure, in ISO
   * 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  firstDepDate: string;
}

export interface DiplomaticClearanceCountParams {
  /**
   * The First Departure Date (FDD) the mission is scheduled for departure, in ISO
   * 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  firstDepDate: string;

  firstResult?: number;

  maxResults?: number;
}

export interface DiplomaticClearanceCreateBulkParams {
  body: Array<DiplomaticClearanceCreateBulkParams.Body>;
}

export namespace DiplomaticClearanceCreateBulkParams {
  /**
   * A diplomatic clearance is an authorization for an aircraft to traverse or land
   * within a specified country.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * The First Departure Date (FDD) the mission is scheduled for departure, in ISO
     * 8601 UTC format with millisecond precision.
     */
    firstDepDate: string;

    /**
     * Unique identifier of the Mission associated with this diplomatic clearance
     * record.
     */
    idMission: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * The Aircraft and Personnel Automated Clearance System (APACS) system identifier
     * used to process and approve this clearance request.
     */
    apacsId?: string;

    /**
     * Collection of diplomatic clearance details.
     */
    diplomaticClearanceDetails?: Array<Body.DiplomaticClearanceDetail>;

    /**
     * Collection of diplomatic clearance remarks.
     */
    diplomaticClearanceRemarks?: Array<Body.DiplomaticClearanceRemark>;

    /**
     * Identifier of the Diplomatic Clearance Worksheet used to coordinate aircraft
     * clearance requests.
     */
    dipWorksheetName?: string;

    /**
     * Suspense date for the diplomatic clearance worksheet to be worked, in ISO 8601
     * UTC format with millisecond precision.
     */
    docDeadline?: string;

    /**
     * Optional diplomatic clearance worksheet ID from external systems. This field has
     * no meaning within UDL and is provided as a convenience for systems that require
     * tracking of an internal system generated ID.
     */
    externalWorksheetId?: string;

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
     * Collection of diplomatic clearance details.
     */
    export interface DiplomaticClearanceDetail {
      /**
       * The type of action the aircraft can take with this diplomatic clearance (e.g. O
       * for Overfly, L for Land, etc.).
       */
      action?: string;

      /**
       * Specifies an alternate country code if the data provider code does not match a
       * UDL Country code value (ISO-3166-ALPHA-2). This field will be set to the value
       * provided by the source and should be used for all Queries specifying a Country
       * Code.
       */
      altCountryCode?: string;

      /**
       * Identifier of this diplomatic clearance issued by the host country.
       */
      clearanceId?: string;

      /**
       * Remarks concerning this diplomatic clearance.
       */
      clearanceRemark?: string;

      /**
       * The call sign of the sortie cleared with this diplomatic clearance.
       */
      clearedCallSign?: string;

      /**
       * The DoD Standard Country Code designator for the country issuing the diplomatic
       * clearance. This field will be set to "OTHR" if the source value does not match a
       * UDL Country code value (ISO-3166-ALPHA-2).
       */
      countryCode?: string;

      /**
       * Name of the country issuing this diplomatic clearance.
       */
      countryName?: string;

      /**
       * Earliest time the aircraft may enter the country, in ISO 8601 UTC format with
       * millisecond precision.
       */
      entryNET?: string;

      /**
       * The navigation point name where the aircraft must enter the country.
       */
      entryPoint?: string;

      /**
       * Latest time the aircraft may exit the country, in ISO 8601 UTC format with
       * millisecond precision.
       */
      exitNLT?: string;

      /**
       * The navigation point name where the aircraft must exit the country.
       */
      exitPoint?: string;

      /**
       * Optional clearance ID from external systems. This field has no meaning within
       * UDL and is provided as a convenience for systems that require tracking of an
       * internal system generated ID.
       */
      externalClearanceId?: string;

      /**
       * Unique identifier of the Aircraft Sortie associated with this diplomatic
       * clearance record.
       */
      idSortie?: string;

      /**
       * Identifies the Itinerary point of a sortie where an air event occurs.
       */
      legNum?: number;

      /**
       * The diplomatic clearance profile name used within clearance management systems.
       */
      profile?: string;

      /**
       * Flag indicating whether the clearance request requires ICAO specific
       * information.
       */
      reqICAO?: boolean;

      /**
       * Flag indicating whether entry/exit points are required for clearances.
       */
      reqPoint?: boolean;

      /**
       * The 1801 fileable route of flight string associated with this diplomatic
       * clearance. The route of flight string contains route designators, significant
       * points, change of speed/altitude, change of flight rules, and cruise climbs.
       */
      routeString?: string;

      /**
       * The placement of this diplomatic clearance within a sequence of clearances used
       * on a sortie. For example, a sequence value of 3 means that it is the third
       * diplomatic clearance the aircraft will use.
       */
      sequenceNum?: number;

      /**
       * Indicates the current status of the diplomatic clearance request.
       */
      status?: string;

      /**
       * Description of when this diplomatic clearance is valid.
       */
      validDesc?: string;

      /**
       * The end time of the validity of this diplomatic clearance, in ISO 8601 UTC
       * format with millisecond precision.
       */
      validEndTime?: string;

      /**
       * The start time of the validity of this diplomatic clearance, in ISO 8601 UTC
       * format with millisecond precision.
       */
      validStartTime?: string;

      /**
       * Remarks concerning the valid diplomatic clearance window.
       */
      windowRemark?: string;
    }

    /**
     * Collection of diplomatic clearance remarks.
     */
    export interface DiplomaticClearanceRemark {
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
       * Text of the remark.
       */
      text?: string;

      /**
       * User who published the remark.
       */
      user?: string;
    }
  }
}

export interface DiplomaticClearanceTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The First Departure Date (FDD) the mission is scheduled for departure, in ISO
   * 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  firstDepDate: string;

  firstResult?: number;

  maxResults?: number;
}

DiplomaticClearance.Country = Country;
DiplomaticClearance.History = History;

export declare namespace DiplomaticClearance {
  export {
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
    Country as Country,
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

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}

export { type DiplomaticclearanceAbridgedsOffsetPage };
