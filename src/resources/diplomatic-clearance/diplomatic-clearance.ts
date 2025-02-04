// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DiplomaticClearanceAPI from '../air-operations/diplomatic-clearance';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
} from './history';

export class DiplomaticClearance extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single diplomatic clearance record as a POST body
   * and ingest into the database. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   */
  create(body: DiplomaticClearanceCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/diplomaticclearance', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single diplomatic clearance record by its unique ID
   * passed as a path parameter.
   */
  retrieve(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DiplomaticClearanceAPI.DiplomaticclearanceFull> {
    return this._client.get(`/udl/diplomaticclearance/${id}`, options);
  }

  /**
   * Service operation to update a single diplomatic clearance record. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   */
  update(
    id1: string,
    body: DiplomaticClearanceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.put(`/udl/diplomaticclearance/${id1}`, {
      body,
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
    query: DiplomaticClearanceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DiplomaticClearanceListResponse> {
    return this._client.get('/udl/diplomaticclearance', { query, ...options });
  }

  /**
   * Service operation to delete a diplomatic clearance record specified by the
   * passed ID path parameter. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/diplomaticclearance/${id}`, {
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
  count(query: DiplomaticClearanceCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/diplomaticclearance/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * diplomaticclearance records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   */
  createBulk(
    body: DiplomaticClearanceCreateBulkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/udl/diplomaticclearance/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/diplomaticclearance/queryhelp', {
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
    query: DiplomaticClearanceTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DiplomaticClearanceTupleResponse> {
    return this._client.get('/udl/diplomaticclearance/tuple', { query, ...options });
  }
}

export type DiplomaticClearanceListResponse = Array<DiplomaticClearanceAPI.DiplomaticclearanceAbridged>;

export type DiplomaticClearanceCountResponse = string;

export type DiplomaticClearanceTupleResponse = Array<DiplomaticClearanceAPI.DiplomaticclearanceFull>;

export interface DiplomaticClearanceCreateParams {
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
     * Specifies an alternate country code if the data provider code is not part of an
     * official Country Code standard such as ISO-3166 or FIPS. This field will be set
     * to the value provided by the source and should be used for all Queries
     * specifying a Country Code.
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

export interface DiplomaticClearanceUpdateParams {
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
     * Specifies an alternate country code if the data provider code is not part of an
     * official Country Code standard such as ISO-3166 or FIPS. This field will be set
     * to the value provided by the source and should be used for all Queries
     * specifying a Country Code.
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

export interface DiplomaticClearanceListParams {
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
}

export type DiplomaticClearanceCreateBulkParams = Array<DiplomaticClearanceCreateBulkParams.Body>;

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
       * Specifies an alternate country code if the data provider code is not part of an
       * official Country Code standard such as ISO-3166 or FIPS. This field will be set
       * to the value provided by the source and should be used for all Queries
       * specifying a Country Code.
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
}

DiplomaticClearance.History = History;

export declare namespace DiplomaticClearance {
  export {
    type DiplomaticClearanceListResponse as DiplomaticClearanceListResponse,
    type DiplomaticClearanceCountResponse as DiplomaticClearanceCountResponse,
    type DiplomaticClearanceTupleResponse as DiplomaticClearanceTupleResponse,
    type DiplomaticClearanceCreateParams as DiplomaticClearanceCreateParams,
    type DiplomaticClearanceUpdateParams as DiplomaticClearanceUpdateParams,
    type DiplomaticClearanceListParams as DiplomaticClearanceListParams,
    type DiplomaticClearanceCountParams as DiplomaticClearanceCountParams,
    type DiplomaticClearanceCreateBulkParams as DiplomaticClearanceCreateBulkParams,
    type DiplomaticClearanceTupleParams as DiplomaticClearanceTupleParams,
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
