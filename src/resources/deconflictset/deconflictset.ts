// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
  HistoryListResponsesOffsetPage,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Deconflictset extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single DeconflictSet record as a POST body and
   * ingest into the database. This operation does not persist any DeconflictWindow
   * datatypes that may be present in the body of the request. This operation is not
   * intended to be used for automated feeds into UDL. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.deconflictset.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   eventStartTime: '2023-09-27T20:49:37.812Z',
   *   numWindows: 250001,
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: DeconflictsetCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/deconflictset', {
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
   * for await (const deconflictsetListResponse of client.deconflictset.list(
   *   { eventStartTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DeconflictsetListParams,
    options?: RequestOptions,
  ): PagePromise<DeconflictsetListResponsesOffsetPage, DeconflictsetListResponse> {
    return this._client.getAPIList('/udl/deconflictset', OffsetPage<DeconflictsetListResponse>, {
      query,
      ...options,
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
   * const response = await client.deconflictset.count({
   *   eventStartTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: DeconflictsetCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/deconflictset/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single DeconflictSet record by its unique ID passed
   * as a path parameter.
   *
   * @example
   * ```ts
   * const deconflictset = await client.deconflictset.get('id');
   * ```
   */
  get(
    id: string,
    query: DeconflictsetGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeconflictsetGetResponse> {
    return this._client.get(path`/udl/deconflictset/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.deconflictset.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<DeconflictsetQueryhelpResponse> {
    return this._client.get('/udl/deconflictset/queryhelp', options);
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
   * const response = await client.deconflictset.tuple({
   *   columns: 'columns',
   *   eventStartTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: DeconflictsetTupleParams, options?: RequestOptions): APIPromise<DeconflictsetTupleResponse> {
    return this._client.get('/udl/deconflictset/tuple', { query, ...options });
  }

  /**
   * Service operation to take a single DeconflictSet record as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.deconflictset.unvalidatedPublish({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   eventStartTime: '2023-09-27T20:49:37.812Z',
   *   numWindows: 250001,
   *   source: 'Bluestaq',
   * });
   * ```
   */
  unvalidatedPublish(
    body: DeconflictsetUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/filedrop/udl-deconflictset', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type DeconflictsetListResponsesOffsetPage = OffsetPage<DeconflictsetListResponse>;

/**
 * The DeconflictSet service provides access to a set of DeconflictWindows and
 * metadata about those data. A DeconflictWindow describes a time window during
 * which an action, such as target engagement, may either occur or is prohibited
 * from occurring. The DeconflictWindow model includes information about the
 * spatial details for specific target types. A flag is provided to specify whether
 * the window should be associated with taking action (OPEN), or if no action
 * should occur (CLOSED).
 */
export interface DeconflictsetListResponse {
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
   * The start time of the event associated with the set of DeconflictWindow records,
   * in ISO 8601 UTC format with millisecond precision.
   */
  eventStartTime: string;

  /**
   * The number of windows provided by this DeconflictSet record.
   */
  numWindows: number;

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
   * The time at which the window calculations completed, in ISO 8601 UTC format with
   * millisecond precision.
   */
  calculationEndTime?: string;

  /**
   * The algorithm execution id associated with the generation of this DeconflictSet.
   */
  calculationId?: string;

  /**
   * The time at which the window calculations started, in ISO 8601 UTC format with
   * millisecond precision.
   */
  calculationStartTime?: string;

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
   * Array of error messages that potentially contain information about the reasons
   * this deconflict response calculation may be inaccurate, or why it failed.
   */
  errors?: Array<string>;

  /**
   * The end time of the event associated with the set of DeconflictWindow records,
   * in ISO 8601 UTC format with millisecond precision.
   */
  eventEndTime?: string;

  /**
   * The type of event associated with this DeconflictSet record.
   */
  eventType?: string;

  /**
   * The id of the LaserDeconflictRequest record used as input in the generation of
   * this DeconflictSet, if applicable.
   */
  idLaserDeconflictRequest?: string;

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
   * The reference frame of the cartesian orbital states. If the referenceFrame is
   * null it is assumed to be J2000.
   */
  referenceFrame?: string;

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
   * Array of warning messages that potentially contain information about the reasons
   * this deconflict response calculation may be inaccurate, or why it failed.
   */
  warnings?: Array<string>;
}

export type DeconflictsetCountResponse = string;

/**
 * The DeconflictSet service provides access to a set of DeconflictWindows and
 * metadata about those data. A DeconflictWindow describes a time window during
 * which an action, such as target engagement, may either occur or is prohibited
 * from occurring. The DeconflictWindow model includes information about the
 * spatial details for specific target types. A flag is provided to specify whether
 * the window should be associated with taking action (OPEN), or if no action
 * should occur (CLOSED).
 */
export interface DeconflictsetGetResponse {
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
   * The start time of the event associated with the set of DeconflictWindow records,
   * in ISO 8601 UTC format with millisecond precision.
   */
  eventStartTime: string;

  /**
   * The number of windows provided by this DeconflictSet record.
   */
  numWindows: number;

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
   * The time at which the window calculations completed, in ISO 8601 UTC format with
   * millisecond precision.
   */
  calculationEndTime?: string;

  /**
   * The algorithm execution id associated with the generation of this DeconflictSet.
   */
  calculationId?: string;

  /**
   * The time at which the window calculations started, in ISO 8601 UTC format with
   * millisecond precision.
   */
  calculationStartTime?: string;

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
   * Array of DeconflictWindow records associated with this DeconflictSet.
   */
  deconflictWindows?: Array<DeconflictsetGetResponse.DeconflictWindow>;

  /**
   * Array of error messages that potentially contain information about the reasons
   * this deconflict response calculation may be inaccurate, or why it failed.
   */
  errors?: Array<string>;

  /**
   * The end time of the event associated with the set of DeconflictWindow records,
   * in ISO 8601 UTC format with millisecond precision.
   */
  eventEndTime?: string;

  /**
   * The type of event associated with this DeconflictSet record.
   */
  eventType?: string;

  /**
   * The id of the LaserDeconflictRequest record used as input in the generation of
   * this DeconflictSet, if applicable.
   */
  idLaserDeconflictRequest?: string;

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
   * The reference frame of the cartesian orbital states. If the referenceFrame is
   * null it is assumed to be J2000.
   */
  referenceFrame?: string;

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
   * Array of warning messages that potentially contain information about the reasons
   * this deconflict response calculation may be inaccurate, or why it failed.
   */
  warnings?: Array<string>;
}

export namespace DeconflictsetGetResponse {
  /**
   * A DeconflictWindow describes a time window during which an action, such as
   * target engagement, may either occur or is prohibited from occurring. The
   * DeconflictWindow model includes information about the spatial details for
   * specific target types. A flag is provided to specify whether the window should
   * be associated with taking action (OPEN), or if no action should occur (CLOSED).
   */
  export interface DeconflictWindow {
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
     * The start time of the event associated with the set of DeconflictWindow records,
     * in ISO 8601 UTC format with millisecond precision.
     */
    eventStartTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The window start time, in ISO 8601 UTC format with millisecond precision.
     */
    startTime: string;

    /**
     * The window stop time, in ISO 8601 UTC format with millisecond precision.
     */
    stopTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * The angle at which the victim enters the target zone in reference to the emitter
     * source location, in degrees.
     */
    angleOfEntry?: number;

    /**
     * The angle at which the victim exits the target zone in reference to the emitter
     * source location, in degrees.
     */
    angleOfExit?: number;

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
     * The X, Y, Z coordinates of entry, in the reference frame specified by the parent
     * DeconflictSet record, in meters.
     */
    entryCoords?: Array<number>;

    /**
     * The type of event associated with the window status.
     */
    eventType?: string;

    /**
     * The X, Y, Z coordinates of exit, in the reference frame specified by the parent
     * DeconflictSet record, in meters.
     */
    exitCoords?: Array<number>;

    /**
     * Unique identifier of the parent DeconflictSet, auto-generated by the system. The
     * idDeconflictSet is used to identify all individual windows associated with a
     * parent DeconflictSet record.
     */
    idDeconflictSet?: string;

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
     * The target identifier. If the target is a satellite, the target is the
     * satellite/catalog number of the target on-orbit object.
     */
    target?: string;

    /**
     * The target type associated with this window (e.g. VICTIM, EARTH, etc.).
     */
    targetType?: string;

    /**
     * The victim identifier associated with this window. If the victim is a satellite,
     * the victim is the satellite/catalog number of the target on-orbit object.
     */
    victim?: string;

    /**
     * The window status indicating whether possibility of action may occur. In other
     * words, OPEN is akin to a "green light," during which taking action is warranted
     * or authorized (though not necessarily required) over this timeframe, while
     * CLOSED represents a "red light," meaning that absolutely no action is warranted
     * or authorized to take place during this timeframe.
     */
    windowType?: string;
  }
}

export interface DeconflictsetQueryhelpResponse {
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

export type DeconflictsetTupleResponse = Array<DeconflictsetTupleResponse.DeconflictsetTupleResponseItem>;

export namespace DeconflictsetTupleResponse {
  /**
   * The DeconflictSet service provides access to a set of DeconflictWindows and
   * metadata about those data. A DeconflictWindow describes a time window during
   * which an action, such as target engagement, may either occur or is prohibited
   * from occurring. The DeconflictWindow model includes information about the
   * spatial details for specific target types. A flag is provided to specify whether
   * the window should be associated with taking action (OPEN), or if no action
   * should occur (CLOSED).
   */
  export interface DeconflictsetTupleResponseItem {
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
     * The start time of the event associated with the set of DeconflictWindow records,
     * in ISO 8601 UTC format with millisecond precision.
     */
    eventStartTime: string;

    /**
     * The number of windows provided by this DeconflictSet record.
     */
    numWindows: number;

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
     * The time at which the window calculations completed, in ISO 8601 UTC format with
     * millisecond precision.
     */
    calculationEndTime?: string;

    /**
     * The algorithm execution id associated with the generation of this DeconflictSet.
     */
    calculationId?: string;

    /**
     * The time at which the window calculations started, in ISO 8601 UTC format with
     * millisecond precision.
     */
    calculationStartTime?: string;

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
     * Array of DeconflictWindow records associated with this DeconflictSet.
     */
    deconflictWindows?: Array<DeconflictsetTupleResponseItem.DeconflictWindow>;

    /**
     * Array of error messages that potentially contain information about the reasons
     * this deconflict response calculation may be inaccurate, or why it failed.
     */
    errors?: Array<string>;

    /**
     * The end time of the event associated with the set of DeconflictWindow records,
     * in ISO 8601 UTC format with millisecond precision.
     */
    eventEndTime?: string;

    /**
     * The type of event associated with this DeconflictSet record.
     */
    eventType?: string;

    /**
     * The id of the LaserDeconflictRequest record used as input in the generation of
     * this DeconflictSet, if applicable.
     */
    idLaserDeconflictRequest?: string;

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
     * The reference frame of the cartesian orbital states. If the referenceFrame is
     * null it is assumed to be J2000.
     */
    referenceFrame?: string;

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
     * Array of warning messages that potentially contain information about the reasons
     * this deconflict response calculation may be inaccurate, or why it failed.
     */
    warnings?: Array<string>;
  }

  export namespace DeconflictsetTupleResponseItem {
    /**
     * A DeconflictWindow describes a time window during which an action, such as
     * target engagement, may either occur or is prohibited from occurring. The
     * DeconflictWindow model includes information about the spatial details for
     * specific target types. A flag is provided to specify whether the window should
     * be associated with taking action (OPEN), or if no action should occur (CLOSED).
     */
    export interface DeconflictWindow {
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
       * The start time of the event associated with the set of DeconflictWindow records,
       * in ISO 8601 UTC format with millisecond precision.
       */
      eventStartTime: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * The window start time, in ISO 8601 UTC format with millisecond precision.
       */
      startTime: string;

      /**
       * The window stop time, in ISO 8601 UTC format with millisecond precision.
       */
      stopTime: string;

      /**
       * Unique identifier of the record, auto-generated by the system if not provided on
       * create operations.
       */
      id?: string;

      /**
       * The angle at which the victim enters the target zone in reference to the emitter
       * source location, in degrees.
       */
      angleOfEntry?: number;

      /**
       * The angle at which the victim exits the target zone in reference to the emitter
       * source location, in degrees.
       */
      angleOfExit?: number;

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
       * The X, Y, Z coordinates of entry, in the reference frame specified by the parent
       * DeconflictSet record, in meters.
       */
      entryCoords?: Array<number>;

      /**
       * The type of event associated with the window status.
       */
      eventType?: string;

      /**
       * The X, Y, Z coordinates of exit, in the reference frame specified by the parent
       * DeconflictSet record, in meters.
       */
      exitCoords?: Array<number>;

      /**
       * Unique identifier of the parent DeconflictSet, auto-generated by the system. The
       * idDeconflictSet is used to identify all individual windows associated with a
       * parent DeconflictSet record.
       */
      idDeconflictSet?: string;

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
       * The target identifier. If the target is a satellite, the target is the
       * satellite/catalog number of the target on-orbit object.
       */
      target?: string;

      /**
       * The target type associated with this window (e.g. VICTIM, EARTH, etc.).
       */
      targetType?: string;

      /**
       * The victim identifier associated with this window. If the victim is a satellite,
       * the victim is the satellite/catalog number of the target on-orbit object.
       */
      victim?: string;

      /**
       * The window status indicating whether possibility of action may occur. In other
       * words, OPEN is akin to a "green light," during which taking action is warranted
       * or authorized (though not necessarily required) over this timeframe, while
       * CLOSED represents a "red light," meaning that absolutely no action is warranted
       * or authorized to take place during this timeframe.
       */
      windowType?: string;
    }
  }
}

export interface DeconflictsetCreateParams {
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
   * The start time of the event associated with the set of DeconflictWindow records,
   * in ISO 8601 UTC format with millisecond precision.
   */
  eventStartTime: string;

  /**
   * The number of windows provided by this DeconflictSet record.
   */
  numWindows: number;

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
   * The time at which the window calculations completed, in ISO 8601 UTC format with
   * millisecond precision.
   */
  calculationEndTime?: string;

  /**
   * The algorithm execution id associated with the generation of this DeconflictSet.
   */
  calculationId?: string;

  /**
   * The time at which the window calculations started, in ISO 8601 UTC format with
   * millisecond precision.
   */
  calculationStartTime?: string;

  /**
   * Array of DeconflictWindow records associated with this DeconflictSet.
   */
  deconflictWindows?: Array<DeconflictsetCreateParams.DeconflictWindow>;

  /**
   * Array of error messages that potentially contain information about the reasons
   * this deconflict response calculation may be inaccurate, or why it failed.
   */
  errors?: Array<string>;

  /**
   * The end time of the event associated with the set of DeconflictWindow records,
   * in ISO 8601 UTC format with millisecond precision.
   */
  eventEndTime?: string;

  /**
   * The type of event associated with this DeconflictSet record.
   */
  eventType?: string;

  /**
   * The id of the LaserDeconflictRequest record used as input in the generation of
   * this DeconflictSet, if applicable.
   */
  idLaserDeconflictRequest?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The reference frame of the cartesian orbital states. If the referenceFrame is
   * null it is assumed to be J2000.
   */
  referenceFrame?: string;

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
   * Array of warning messages that potentially contain information about the reasons
   * this deconflict response calculation may be inaccurate, or why it failed.
   */
  warnings?: Array<string>;
}

export namespace DeconflictsetCreateParams {
  /**
   * A DeconflictWindow describes a time window during which an action, such as
   * target engagement, may either occur or is prohibited from occurring. The
   * DeconflictWindow model includes information about the spatial details for
   * specific target types. A flag is provided to specify whether the window should
   * be associated with taking action (OPEN), or if no action should occur (CLOSED).
   */
  export interface DeconflictWindow {
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
     * The start time of the event associated with the set of DeconflictWindow records,
     * in ISO 8601 UTC format with millisecond precision.
     */
    eventStartTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The window start time, in ISO 8601 UTC format with millisecond precision.
     */
    startTime: string;

    /**
     * The window stop time, in ISO 8601 UTC format with millisecond precision.
     */
    stopTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * The angle at which the victim enters the target zone in reference to the emitter
     * source location, in degrees.
     */
    angleOfEntry?: number;

    /**
     * The angle at which the victim exits the target zone in reference to the emitter
     * source location, in degrees.
     */
    angleOfExit?: number;

    /**
     * The X, Y, Z coordinates of entry, in the reference frame specified by the parent
     * DeconflictSet record, in meters.
     */
    entryCoords?: Array<number>;

    /**
     * The type of event associated with the window status.
     */
    eventType?: string;

    /**
     * The X, Y, Z coordinates of exit, in the reference frame specified by the parent
     * DeconflictSet record, in meters.
     */
    exitCoords?: Array<number>;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The target identifier. If the target is a satellite, the target is the
     * satellite/catalog number of the target on-orbit object.
     */
    target?: string;

    /**
     * The target type associated with this window (e.g. VICTIM, EARTH, etc.).
     */
    targetType?: string;

    /**
     * The victim identifier associated with this window. If the victim is a satellite,
     * the victim is the satellite/catalog number of the target on-orbit object.
     */
    victim?: string;

    /**
     * The window status indicating whether possibility of action may occur. In other
     * words, OPEN is akin to a "green light," during which taking action is warranted
     * or authorized (though not necessarily required) over this timeframe, while
     * CLOSED represents a "red light," meaning that absolutely no action is warranted
     * or authorized to take place during this timeframe.
     */
    windowType?: string;
  }
}

export interface DeconflictsetListParams extends OffsetPageParams {
  /**
   * The start time of the event associated with the set of DeconflictWindow records,
   * in ISO 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  eventStartTime: string;
}

export interface DeconflictsetCountParams {
  /**
   * The start time of the event associated with the set of DeconflictWindow records,
   * in ISO 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  eventStartTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface DeconflictsetGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface DeconflictsetTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The start time of the event associated with the set of DeconflictWindow records,
   * in ISO 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  eventStartTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface DeconflictsetUnvalidatedPublishParams {
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
   * The start time of the event associated with the set of DeconflictWindow records,
   * in ISO 8601 UTC format with millisecond precision.
   */
  eventStartTime: string;

  /**
   * The number of windows provided by this DeconflictSet record.
   */
  numWindows: number;

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
   * The time at which the window calculations completed, in ISO 8601 UTC format with
   * millisecond precision.
   */
  calculationEndTime?: string;

  /**
   * The algorithm execution id associated with the generation of this DeconflictSet.
   */
  calculationId?: string;

  /**
   * The time at which the window calculations started, in ISO 8601 UTC format with
   * millisecond precision.
   */
  calculationStartTime?: string;

  /**
   * Array of DeconflictWindow records associated with this DeconflictSet.
   */
  deconflictWindows?: Array<DeconflictsetUnvalidatedPublishParams.DeconflictWindow>;

  /**
   * Array of error messages that potentially contain information about the reasons
   * this deconflict response calculation may be inaccurate, or why it failed.
   */
  errors?: Array<string>;

  /**
   * The end time of the event associated with the set of DeconflictWindow records,
   * in ISO 8601 UTC format with millisecond precision.
   */
  eventEndTime?: string;

  /**
   * The type of event associated with this DeconflictSet record.
   */
  eventType?: string;

  /**
   * The id of the LaserDeconflictRequest record used as input in the generation of
   * this DeconflictSet, if applicable.
   */
  idLaserDeconflictRequest?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The reference frame of the cartesian orbital states. If the referenceFrame is
   * null it is assumed to be J2000.
   */
  referenceFrame?: string;

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
   * Array of warning messages that potentially contain information about the reasons
   * this deconflict response calculation may be inaccurate, or why it failed.
   */
  warnings?: Array<string>;
}

export namespace DeconflictsetUnvalidatedPublishParams {
  /**
   * A DeconflictWindow describes a time window during which an action, such as
   * target engagement, may either occur or is prohibited from occurring. The
   * DeconflictWindow model includes information about the spatial details for
   * specific target types. A flag is provided to specify whether the window should
   * be associated with taking action (OPEN), or if no action should occur (CLOSED).
   */
  export interface DeconflictWindow {
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
     * The start time of the event associated with the set of DeconflictWindow records,
     * in ISO 8601 UTC format with millisecond precision.
     */
    eventStartTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The window start time, in ISO 8601 UTC format with millisecond precision.
     */
    startTime: string;

    /**
     * The window stop time, in ISO 8601 UTC format with millisecond precision.
     */
    stopTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * The angle at which the victim enters the target zone in reference to the emitter
     * source location, in degrees.
     */
    angleOfEntry?: number;

    /**
     * The angle at which the victim exits the target zone in reference to the emitter
     * source location, in degrees.
     */
    angleOfExit?: number;

    /**
     * The X, Y, Z coordinates of entry, in the reference frame specified by the parent
     * DeconflictSet record, in meters.
     */
    entryCoords?: Array<number>;

    /**
     * The type of event associated with the window status.
     */
    eventType?: string;

    /**
     * The X, Y, Z coordinates of exit, in the reference frame specified by the parent
     * DeconflictSet record, in meters.
     */
    exitCoords?: Array<number>;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The target identifier. If the target is a satellite, the target is the
     * satellite/catalog number of the target on-orbit object.
     */
    target?: string;

    /**
     * The target type associated with this window (e.g. VICTIM, EARTH, etc.).
     */
    targetType?: string;

    /**
     * The victim identifier associated with this window. If the victim is a satellite,
     * the victim is the satellite/catalog number of the target on-orbit object.
     */
    victim?: string;

    /**
     * The window status indicating whether possibility of action may occur. In other
     * words, OPEN is akin to a "green light," during which taking action is warranted
     * or authorized (though not necessarily required) over this timeframe, while
     * CLOSED represents a "red light," meaning that absolutely no action is warranted
     * or authorized to take place during this timeframe.
     */
    windowType?: string;
  }
}

Deconflictset.History = History;

export declare namespace Deconflictset {
  export {
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
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListResponsesOffsetPage as HistoryListResponsesOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
