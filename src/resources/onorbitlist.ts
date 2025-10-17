// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Onorbitlist extends APIResource {
  /**
   * Service operation to take a single OnOrbitList as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitlist.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'HRR-SATELLITES',
   *   onOrbitListItems: [{}],
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: OnorbitlistCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/onorbitlist', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single OnOrbitList record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.onorbitlist.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'HRR-SATELLITES',
   *   onOrbitListItems: [{}],
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: OnorbitlistUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/onorbitlist/${pathID}`, {
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
   * for await (const onorbitlistListResponse of client.onorbitlist.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OnorbitlistListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OnorbitlistListResponsesOffsetPage, OnorbitlistListResponse> {
    return this._client.getAPIList('/udl/onorbitlist', OffsetPage<OnorbitlistListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a single OnOrbitList record specified by the passed
   * ID path parameter. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitlist.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/onorbitlist/${id}`, {
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
   * const response = await client.onorbitlist.count();
   * ```
   */
  count(query: OnorbitlistCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/onorbitlist/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single OnOrbitList record by its unique ID passed as
   * a path parameter.
   *
   * @example
   * ```ts
   * const onorbitlist = await client.onorbitlist.get('id');
   * ```
   */
  get(
    id: string,
    query: OnorbitlistGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OnorbitlistGetResponse> {
    return this._client.get(path`/udl/onorbitlist/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.onorbitlist.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<OnorbitlistQueryhelpResponse> {
    return this._client.get('/udl/onorbitlist/queryhelp', options);
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
   * const response = await client.onorbitlist.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: OnorbitlistTupleParams, options?: RequestOptions): APIPromise<OnorbitlistTupleResponse> {
    return this._client.get('/udl/onorbitlist/tuple', { query, ...options });
  }
}

export type OnorbitlistListResponsesOffsetPage = OffsetPage<OnorbitlistListResponse>;

/**
 * Table for maintaining generic lists of OnOrbit objects (e.g. Favorites, HIO,
 * SHIO, HVA, etc).
 */
export interface OnorbitlistListResponse {
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
   * Unique name of the list.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

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
   * Default revisit rate in minutes for all objects in this list.
   */
  defaultRevisitRateMins?: number;

  /**
   * Description of the list.
   */
  description?: string;

  /**
   * Numerical priority of this orbit list relative to other orbit lists; lower
   * values indicate higher priority. Decimal values allowed for fine granularity.
   * Consumers should contact the provider for details on the priority.
   */
  listPriority?: number;

  /**
   * Defined naming system that ensures each satellite or space object has a unique
   * and unambiguous identifier within the name space (e.g. JCO, 18SDS). If null, it
   * is assumed to be 18th Space Defense Squadron (18SDS).
   */
  namespace?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Time the row was last updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

export type OnorbitlistCountResponse = string;

/**
 * Table for maintaining generic lists of OnOrbit objects (e.g. Favorites, HIO,
 * SHIO, HVA, etc).
 */
export interface OnorbitlistGetResponse {
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
   * Unique name of the list.
   */
  name: string;

  /**
   * This is a list of onOrbitListItems that will be related one-to-one with an
   * onOrbit entry.
   */
  onOrbitListItems: Array<OnorbitlistGetResponse.OnOrbitListItem>;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

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
   * Default revisit rate in minutes for all objects in this list.
   */
  defaultRevisitRateMins?: number;

  /**
   * Description of the list.
   */
  description?: string;

  /**
   * Numerical priority of this orbit list relative to other orbit lists; lower
   * values indicate higher priority. Decimal values allowed for fine granularity.
   * Consumers should contact the provider for details on the priority.
   */
  listPriority?: number;

  /**
   * Defined naming system that ensures each satellite or space object has a unique
   * and unambiguous identifier within the name space (e.g. JCO, 18SDS). If null, it
   * is assumed to be 18th Space Defense Squadron (18SDS).
   */
  namespace?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Time the row was last updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

export namespace OnorbitlistGetResponse {
  /**
   * Items associated with this onOrbitList record.
   */
  export interface OnOrbitListItem {
    /**
     * Height of a box, in degrees, volume expected to be cleared by sensor providers,
     * if CLEARING is selected.
     */
    clearingBoxCrossTrack?: number;

    /**
     * Width of a box volume, in degrees, expected to be cleared by sensor providers,
     * if CLEARING is selected.
     */
    clearingBoxInTrack?: number;

    /**
     * Radius, in degrees, of a spherical volume expected to be cleared by sensor
     * providers, if CLEARING is selected.
     */
    clearingRadius?: number;

    /**
     * Common name of the onorbit object.
     */
    commonName?: string;

    /**
     * This value is typically the ISO 3166 Alpha-3 three-character country code,
     * however it can also represent various consortiums that do not appear in the ISO
     * document.
     */
    countryCode?: string;

    /**
     * Datetime expiration of a satellite on this list, allowing for the maintenance of
     * a history of when satellites entered and when they exited the list in ISO 8601
     * UTC datetime format with millisecond precision.
     */
    expiredOn?: string;

    /**
     * Frequency of additional routine, in minutes, tasking identified in and
     * corresponding to the monitoringType array.
     */
    freqMins?: number;

    /**
     * Routine tasking that should be applied to this object. REVISIT_RATE allows users
     * to define custom revisit rates for individual satellites, HVA_CLEARING allows
     * users to define custom volumes that are expected to be clear of unknown objects,
     * and POL would be collects on a specified increment in support of collecting data
     * that feeds into Pattern of Life (PoL) assessments.
     */
    monitoringType?: string;

    /**
     * Unique identifier of the on-orbit object. This is typically the USSF 18th SDS
     * satellite number (also sometimes referred to as NORAD ID/number) but could be an
     * identifier from another satellite catalog namespace. See the ‘namespace’ field
     * for the appropriate identifier namespace. If namespace is null, 18SDS satellite
     * number is assumed.
     */
    objectId?: string;

    /**
     * Orbit Regime refers to a classification of a satellite's orbit based on its
     * altitude, inclination, and other orbital characteristics. Common orbit regimes
     * include Low Earth Orbit (LEO), Medium Earth Orbit (MEO), Geostationary Orbit
     * (GEO), and Highly Elliptical Orbit (HEO).
     */
    orbitRegime?: string;

    /**
     * Optional identifier indicates the on-orbit object being referenced. This may be
     * an internal system identifier and not necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Payload priority based on the type of payload that has been identified or that
     * is suspected. Priority of the payload as a number. (1=highest priority).
     */
    payloadPriority?: number;

    /**
     * Rank refers to the assigned position or level of priority given to a satellite
     * based on its relative importance, urgency, or operational relevance as
     * determined by the applicable operations unit.
     */
    rank?: number;

    /**
     * Tasking urgency, typically will be on a 1-10 scale. Urgency as a number.
     * (1=highest priority).
     */
    urgency?: number;
  }
}

export interface OnorbitlistQueryhelpResponse {
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

export type OnorbitlistTupleResponse = Array<OnorbitlistTupleResponse.OnorbitlistTupleResponseItem>;

export namespace OnorbitlistTupleResponse {
  /**
   * Table for maintaining generic lists of OnOrbit objects (e.g. Favorites, HIO,
   * SHIO, HVA, etc).
   */
  export interface OnorbitlistTupleResponseItem {
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
     * Unique name of the list.
     */
    name: string;

    /**
     * This is a list of onOrbitListItems that will be related one-to-one with an
     * onOrbit entry.
     */
    onOrbitListItems: Array<OnorbitlistTupleResponseItem.OnOrbitListItem>;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

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
     * Default revisit rate in minutes for all objects in this list.
     */
    defaultRevisitRateMins?: number;

    /**
     * Description of the list.
     */
    description?: string;

    /**
     * Numerical priority of this orbit list relative to other orbit lists; lower
     * values indicate higher priority. Decimal values allowed for fine granularity.
     * Consumers should contact the provider for details on the priority.
     */
    listPriority?: number;

    /**
     * Defined naming system that ensures each satellite or space object has a unique
     * and unambiguous identifier within the name space (e.g. JCO, 18SDS). If null, it
     * is assumed to be 18th Space Defense Squadron (18SDS).
     */
    namespace?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }

  export namespace OnorbitlistTupleResponseItem {
    /**
     * Items associated with this onOrbitList record.
     */
    export interface OnOrbitListItem {
      /**
       * Height of a box, in degrees, volume expected to be cleared by sensor providers,
       * if CLEARING is selected.
       */
      clearingBoxCrossTrack?: number;

      /**
       * Width of a box volume, in degrees, expected to be cleared by sensor providers,
       * if CLEARING is selected.
       */
      clearingBoxInTrack?: number;

      /**
       * Radius, in degrees, of a spherical volume expected to be cleared by sensor
       * providers, if CLEARING is selected.
       */
      clearingRadius?: number;

      /**
       * Common name of the onorbit object.
       */
      commonName?: string;

      /**
       * This value is typically the ISO 3166 Alpha-3 three-character country code,
       * however it can also represent various consortiums that do not appear in the ISO
       * document.
       */
      countryCode?: string;

      /**
       * Datetime expiration of a satellite on this list, allowing for the maintenance of
       * a history of when satellites entered and when they exited the list in ISO 8601
       * UTC datetime format with millisecond precision.
       */
      expiredOn?: string;

      /**
       * Frequency of additional routine, in minutes, tasking identified in and
       * corresponding to the monitoringType array.
       */
      freqMins?: number;

      /**
       * Routine tasking that should be applied to this object. REVISIT_RATE allows users
       * to define custom revisit rates for individual satellites, HVA_CLEARING allows
       * users to define custom volumes that are expected to be clear of unknown objects,
       * and POL would be collects on a specified increment in support of collecting data
       * that feeds into Pattern of Life (PoL) assessments.
       */
      monitoringType?: string;

      /**
       * Unique identifier of the on-orbit object. This is typically the USSF 18th SDS
       * satellite number (also sometimes referred to as NORAD ID/number) but could be an
       * identifier from another satellite catalog namespace. See the ‘namespace’ field
       * for the appropriate identifier namespace. If namespace is null, 18SDS satellite
       * number is assumed.
       */
      objectId?: string;

      /**
       * Orbit Regime refers to a classification of a satellite's orbit based on its
       * altitude, inclination, and other orbital characteristics. Common orbit regimes
       * include Low Earth Orbit (LEO), Medium Earth Orbit (MEO), Geostationary Orbit
       * (GEO), and Highly Elliptical Orbit (HEO).
       */
      orbitRegime?: string;

      /**
       * Optional identifier indicates the on-orbit object being referenced. This may be
       * an internal system identifier and not necessarily a valid satellite number.
       */
      origObjectId?: string;

      /**
       * Payload priority based on the type of payload that has been identified or that
       * is suspected. Priority of the payload as a number. (1=highest priority).
       */
      payloadPriority?: number;

      /**
       * Rank refers to the assigned position or level of priority given to a satellite
       * based on its relative importance, urgency, or operational relevance as
       * determined by the applicable operations unit.
       */
      rank?: number;

      /**
       * Tasking urgency, typically will be on a 1-10 scale. Urgency as a number.
       * (1=highest priority).
       */
      urgency?: number;
    }
  }
}

export interface OnorbitlistCreateParams {
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
   * Unique name of the list.
   */
  name: string;

  /**
   * This is a list of onOrbitListItems that will be related one-to-one with an
   * onOrbit entry.
   */
  onOrbitListItems: Array<OnorbitlistCreateParams.OnOrbitListItem>;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Default revisit rate in minutes for all objects in this list.
   */
  defaultRevisitRateMins?: number;

  /**
   * Description of the list.
   */
  description?: string;

  /**
   * Numerical priority of this orbit list relative to other orbit lists; lower
   * values indicate higher priority. Decimal values allowed for fine granularity.
   * Consumers should contact the provider for details on the priority.
   */
  listPriority?: number;

  /**
   * Defined naming system that ensures each satellite or space object has a unique
   * and unambiguous identifier within the name space (e.g. JCO, 18SDS). If null, it
   * is assumed to be 18th Space Defense Squadron (18SDS).
   */
  namespace?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;
}

export namespace OnorbitlistCreateParams {
  /**
   * Items associated with this onOrbitList record.
   */
  export interface OnOrbitListItem {
    /**
     * Height of a box, in degrees, volume expected to be cleared by sensor providers,
     * if CLEARING is selected.
     */
    clearingBoxCrossTrack?: number;

    /**
     * Width of a box volume, in degrees, expected to be cleared by sensor providers,
     * if CLEARING is selected.
     */
    clearingBoxInTrack?: number;

    /**
     * Radius, in degrees, of a spherical volume expected to be cleared by sensor
     * providers, if CLEARING is selected.
     */
    clearingRadius?: number;

    /**
     * Common name of the onorbit object.
     */
    commonName?: string;

    /**
     * This value is typically the ISO 3166 Alpha-3 three-character country code,
     * however it can also represent various consortiums that do not appear in the ISO
     * document.
     */
    countryCode?: string;

    /**
     * Datetime expiration of a satellite on this list, allowing for the maintenance of
     * a history of when satellites entered and when they exited the list in ISO 8601
     * UTC datetime format with millisecond precision.
     */
    expiredOn?: string;

    /**
     * Frequency of additional routine, in minutes, tasking identified in and
     * corresponding to the monitoringType array.
     */
    freqMins?: number;

    /**
     * Routine tasking that should be applied to this object. REVISIT_RATE allows users
     * to define custom revisit rates for individual satellites, HVA_CLEARING allows
     * users to define custom volumes that are expected to be clear of unknown objects,
     * and POL would be collects on a specified increment in support of collecting data
     * that feeds into Pattern of Life (PoL) assessments.
     */
    monitoringType?: string;

    /**
     * Unique identifier of the on-orbit object. This is typically the USSF 18th SDS
     * satellite number (also sometimes referred to as NORAD ID/number) but could be an
     * identifier from another satellite catalog namespace. See the ‘namespace’ field
     * for the appropriate identifier namespace. If namespace is null, 18SDS satellite
     * number is assumed.
     */
    objectId?: string;

    /**
     * Orbit Regime refers to a classification of a satellite's orbit based on its
     * altitude, inclination, and other orbital characteristics. Common orbit regimes
     * include Low Earth Orbit (LEO), Medium Earth Orbit (MEO), Geostationary Orbit
     * (GEO), and Highly Elliptical Orbit (HEO).
     */
    orbitRegime?: string;

    /**
     * Optional identifier indicates the on-orbit object being referenced. This may be
     * an internal system identifier and not necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Payload priority based on the type of payload that has been identified or that
     * is suspected. Priority of the payload as a number. (1=highest priority).
     */
    payloadPriority?: number;

    /**
     * Rank refers to the assigned position or level of priority given to a satellite
     * based on its relative importance, urgency, or operational relevance as
     * determined by the applicable operations unit.
     */
    rank?: number;

    /**
     * Tasking urgency, typically will be on a 1-10 scale. Urgency as a number.
     * (1=highest priority).
     */
    urgency?: number;
  }
}

export interface OnorbitlistUpdateParams {
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
   * Unique name of the list.
   */
  name: string;

  /**
   * This is a list of onOrbitListItems that will be related one-to-one with an
   * onOrbit entry.
   */
  onOrbitListItems: Array<OnorbitlistUpdateParams.OnOrbitListItem>;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Default revisit rate in minutes for all objects in this list.
   */
  defaultRevisitRateMins?: number;

  /**
   * Description of the list.
   */
  description?: string;

  /**
   * Numerical priority of this orbit list relative to other orbit lists; lower
   * values indicate higher priority. Decimal values allowed for fine granularity.
   * Consumers should contact the provider for details on the priority.
   */
  listPriority?: number;

  /**
   * Defined naming system that ensures each satellite or space object has a unique
   * and unambiguous identifier within the name space (e.g. JCO, 18SDS). If null, it
   * is assumed to be 18th Space Defense Squadron (18SDS).
   */
  namespace?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;
}

export namespace OnorbitlistUpdateParams {
  /**
   * Items associated with this onOrbitList record.
   */
  export interface OnOrbitListItem {
    /**
     * Height of a box, in degrees, volume expected to be cleared by sensor providers,
     * if CLEARING is selected.
     */
    clearingBoxCrossTrack?: number;

    /**
     * Width of a box volume, in degrees, expected to be cleared by sensor providers,
     * if CLEARING is selected.
     */
    clearingBoxInTrack?: number;

    /**
     * Radius, in degrees, of a spherical volume expected to be cleared by sensor
     * providers, if CLEARING is selected.
     */
    clearingRadius?: number;

    /**
     * Common name of the onorbit object.
     */
    commonName?: string;

    /**
     * This value is typically the ISO 3166 Alpha-3 three-character country code,
     * however it can also represent various consortiums that do not appear in the ISO
     * document.
     */
    countryCode?: string;

    /**
     * Datetime expiration of a satellite on this list, allowing for the maintenance of
     * a history of when satellites entered and when they exited the list in ISO 8601
     * UTC datetime format with millisecond precision.
     */
    expiredOn?: string;

    /**
     * Frequency of additional routine, in minutes, tasking identified in and
     * corresponding to the monitoringType array.
     */
    freqMins?: number;

    /**
     * Routine tasking that should be applied to this object. REVISIT_RATE allows users
     * to define custom revisit rates for individual satellites, HVA_CLEARING allows
     * users to define custom volumes that are expected to be clear of unknown objects,
     * and POL would be collects on a specified increment in support of collecting data
     * that feeds into Pattern of Life (PoL) assessments.
     */
    monitoringType?: string;

    /**
     * Unique identifier of the on-orbit object. This is typically the USSF 18th SDS
     * satellite number (also sometimes referred to as NORAD ID/number) but could be an
     * identifier from another satellite catalog namespace. See the ‘namespace’ field
     * for the appropriate identifier namespace. If namespace is null, 18SDS satellite
     * number is assumed.
     */
    objectId?: string;

    /**
     * Orbit Regime refers to a classification of a satellite's orbit based on its
     * altitude, inclination, and other orbital characteristics. Common orbit regimes
     * include Low Earth Orbit (LEO), Medium Earth Orbit (MEO), Geostationary Orbit
     * (GEO), and Highly Elliptical Orbit (HEO).
     */
    orbitRegime?: string;

    /**
     * Optional identifier indicates the on-orbit object being referenced. This may be
     * an internal system identifier and not necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Payload priority based on the type of payload that has been identified or that
     * is suspected. Priority of the payload as a number. (1=highest priority).
     */
    payloadPriority?: number;

    /**
     * Rank refers to the assigned position or level of priority given to a satellite
     * based on its relative importance, urgency, or operational relevance as
     * determined by the applicable operations unit.
     */
    rank?: number;

    /**
     * Tasking urgency, typically will be on a 1-10 scale. Urgency as a number.
     * (1=highest priority).
     */
    urgency?: number;
  }
}

export interface OnorbitlistListParams extends OffsetPageParams {}

export interface OnorbitlistCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface OnorbitlistGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface OnorbitlistTupleParams {
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

export declare namespace Onorbitlist {
  export {
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
}
