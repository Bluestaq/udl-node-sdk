// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAdorParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryQueryParams,
  HistoryQueryResponse,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class H3Geo extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single H3Geo record as a POST body and ingest into
   * the database. This operation does not persist any H3GeoHexCell points that may
   * be present in the body of the request. This operation is not intended to be used
   * for automated feeds into UDL. Data providers should contact the UDL team for
   * specific role assignments and for instructions on setting up a permanent feed
   * through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.h3Geo.create({
   *   cells: [
   *     {
   *       cellId: '830b90fffffffff',
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       source: 'Bluestaq',
   *     },
   *   ],
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   numCells: 1,
   *   source: 'Bluestaq',
   *   startTime: '2024-07-02T00:00:00.123Z',
   * });
   * ```
   */
  create(body: H3GeoCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/h3geo', {
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
   * for await (const h3GeoListResponse of client.h3Geo.list({
   *   startTime: '2019-12-27T18:11:19.117Z',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    query: H3GeoListParams,
    options?: RequestOptions,
  ): PagePromise<H3GeoListResponsesOffsetPage, H3GeoListResponse> {
    return this._client.getAPIList('/udl/h3geo', OffsetPage<H3GeoListResponse>, { query, ...options });
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
   * const response = await client.h3Geo.count({
   *   startTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: H3GeoCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/h3geo/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single RF geolocation by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const h3Geo = await client.h3Geo.get('id');
   * ```
   */
  get(
    id: string,
    query: H3GeoGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<H3GeoGetResponse> {
    return this._client.get(path`/udl/h3geo/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.h3Geo.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<H3GeoQueryhelpResponse> {
    return this._client.get('/udl/h3geo/queryhelp', options);
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
   * const response = await client.h3Geo.tuple({
   *   columns: 'columns',
   *   startTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: H3GeoTupleParams, options?: RequestOptions): APIPromise<H3GeoTupleResponse> {
    return this._client.get('/udl/h3geo/tuple', { query, ...options });
  }
}

export type H3GeoListResponsesOffsetPage = OffsetPage<H3GeoListResponse>;

/**
 * H3 Geospatial Binning is a discrete global grid system for indexing geographies
 * into a hexagonal grid. The H3 schema is a collection of hexagonal cells that
 * contain data for producing geospatial maps over a specified time span.
 */
export interface H3GeoListResponse {
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
   * The number of cells associated with this H3 Geo data set. At this time, UDL
   * supports up to 50,000 cells.
   */
  numCells: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Start time for this H3 Geo data set in ISO 8601 UTC with millisecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The center frequency of this H3 Geo data set measured in megahertz.
   */
  centerFreq?: number;

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
   * End time for this H3 Geo data set in ISO 8601 UTC with millisecond precision.
   */
  endTime?: string;

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
   * H3 resolution (0 – 15) for the data set. At this time, UDL supports a resolution
   * of 3 or less.
   */
  resolution?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * An optional field containing the type of data that is represented by this H3 Geo
   * data set.
   */
  type?: string;
}

export type H3GeoCountResponse = string;

/**
 * H3 Geospatial Binning is a discrete global grid system for indexing geographies
 * into a hexagonal grid. The H3 schema is a collection of hexagonal cells that
 * contain data for producing geospatial maps over a specified time span.
 */
export interface H3GeoGetResponse {
  /**
   * The collection of hex cells contained in this H3 data set. The number of cells
   * is a function of the specified resolution.
   */
  cells: Array<H3GeoGetResponse.Cell>;

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
   * The number of cells associated with this H3 Geo data set. At this time, UDL
   * supports up to 50,000 cells.
   */
  numCells: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Start time for this H3 Geo data set in ISO 8601 UTC with millisecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The center frequency of this H3 Geo data set measured in megahertz.
   */
  centerFreq?: number;

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
   * End time for this H3 Geo data set in ISO 8601 UTC with millisecond precision.
   */
  endTime?: string;

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
   * H3 resolution (0 – 15) for the data set. At this time, UDL supports a resolution
   * of 3 or less.
   */
  resolution?: number;

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
   * An optional field containing the type of data that is represented by this H3 Geo
   * data set.
   */
  type?: string;
}

export namespace H3GeoGetResponse {
  /**
   * Model representation of a hex cell array containing data for a set of
   * observations.
   */
  export interface Cell {
    /**
     * The H3 index represented as a 16 character hexadecimal string.
     */
    cellId: string;

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
     * The mean altitude of the set of observations within this cell, measured in
     * kilometers.
     */
    altMean?: number;

    /**
     * The standard deviation of alttitude in the set of observations within this cell,
     * measured in kilometers.
     */
    altSigma?: number;

    /**
     * The anomaly score for probable manufactured interference or RF interference;
     * calculated as a ratio of #anomalous obs / #total obs or coverage.
     */
    anomScoreInterference?: number;

    /**
     * The anomaly score for probable spoofing; calculated as a ratio of #anomalous obs
     * / #total obs or coverage.
     */
    anomScoreSpoofing?: number;

    /**
     * The percentage degree of change in the aggregated observables for a particular
     * H3 bin.
     */
    changeScore?: number;

    /**
     * The total number of available observations in the H3 cell during the start/end
     * times.
     */
    coverage?: number;

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
     * Unique identifier of the parent H3 Geo record containing this hex cell.
     */
    idH3Geo?: string;

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
     * The max received power monitor (RPM) output value for the set of data contained
     * within this cell.
     */
    rpmMax?: number;

    /**
     * The mean received power monitor (RPM) output value for the set of data contained
     * within this cell.
     */
    rpmMean?: number;

    /**
     * The median received power monitor (RPM) output value for the set of data
     * contained within this cell.
     */
    rpmMedian?: number;

    /**
     * The min received power monitor (RPM) output value for the set of data contained
     * within this cell.
     */
    rpmMin?: number;

    /**
     * The standard deviation of the received power monitor (RPM) output value for the
     * set of data contained within this cell.
     */
    rpmSigma?: number;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;
  }
}

export interface H3GeoQueryhelpResponse {
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

export type H3GeoTupleResponse = Array<H3GeoTupleResponse.H3GeoTupleResponseItem>;

export namespace H3GeoTupleResponse {
  /**
   * H3 Geospatial Binning is a discrete global grid system for indexing geographies
   * into a hexagonal grid. The H3 schema is a collection of hexagonal cells that
   * contain data for producing geospatial maps over a specified time span.
   */
  export interface H3GeoTupleResponseItem {
    /**
     * The collection of hex cells contained in this H3 data set. The number of cells
     * is a function of the specified resolution.
     */
    cells: Array<H3GeoTupleResponseItem.Cell>;

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
     * The number of cells associated with this H3 Geo data set. At this time, UDL
     * supports up to 50,000 cells.
     */
    numCells: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Start time for this H3 Geo data set in ISO 8601 UTC with millisecond precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The center frequency of this H3 Geo data set measured in megahertz.
     */
    centerFreq?: number;

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
     * End time for this H3 Geo data set in ISO 8601 UTC with millisecond precision.
     */
    endTime?: string;

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
     * H3 resolution (0 – 15) for the data set. At this time, UDL supports a resolution
     * of 3 or less.
     */
    resolution?: number;

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
     * An optional field containing the type of data that is represented by this H3 Geo
     * data set.
     */
    type?: string;
  }

  export namespace H3GeoTupleResponseItem {
    /**
     * Model representation of a hex cell array containing data for a set of
     * observations.
     */
    export interface Cell {
      /**
       * The H3 index represented as a 16 character hexadecimal string.
       */
      cellId: string;

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
       * The mean altitude of the set of observations within this cell, measured in
       * kilometers.
       */
      altMean?: number;

      /**
       * The standard deviation of alttitude in the set of observations within this cell,
       * measured in kilometers.
       */
      altSigma?: number;

      /**
       * The anomaly score for probable manufactured interference or RF interference;
       * calculated as a ratio of #anomalous obs / #total obs or coverage.
       */
      anomScoreInterference?: number;

      /**
       * The anomaly score for probable spoofing; calculated as a ratio of #anomalous obs
       * / #total obs or coverage.
       */
      anomScoreSpoofing?: number;

      /**
       * The percentage degree of change in the aggregated observables for a particular
       * H3 bin.
       */
      changeScore?: number;

      /**
       * The total number of available observations in the H3 cell during the start/end
       * times.
       */
      coverage?: number;

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
       * Unique identifier of the parent H3 Geo record containing this hex cell.
       */
      idH3Geo?: string;

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
       * The max received power monitor (RPM) output value for the set of data contained
       * within this cell.
       */
      rpmMax?: number;

      /**
       * The mean received power monitor (RPM) output value for the set of data contained
       * within this cell.
       */
      rpmMean?: number;

      /**
       * The median received power monitor (RPM) output value for the set of data
       * contained within this cell.
       */
      rpmMedian?: number;

      /**
       * The min received power monitor (RPM) output value for the set of data contained
       * within this cell.
       */
      rpmMin?: number;

      /**
       * The standard deviation of the received power monitor (RPM) output value for the
       * set of data contained within this cell.
       */
      rpmSigma?: number;

      /**
       * The source data library from which this record was received. This could be a
       * remote or tactical UDL or another data library. If null, the record should be
       * assumed to have originated from the primary Enterprise UDL.
       */
      sourceDL?: string;
    }
  }
}

export interface H3GeoCreateParams {
  /**
   * The collection of hex cells contained in this H3 data set. The number of cells
   * is a function of the specified resolution.
   */
  cells: Array<H3GeoCreateParams.Cell>;

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
   * The number of cells associated with this H3 Geo data set. At this time, UDL
   * supports up to 50,000 cells.
   */
  numCells: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Start time for this H3 Geo data set in ISO 8601 UTC with millisecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The center frequency of this H3 Geo data set measured in megahertz.
   */
  centerFreq?: number;

  /**
   * End time for this H3 Geo data set in ISO 8601 UTC with millisecond precision.
   */
  endTime?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * H3 resolution (0 – 15) for the data set. At this time, UDL supports a resolution
   * of 3 or less.
   */
  resolution?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * An optional field containing the type of data that is represented by this H3 Geo
   * data set.
   */
  type?: string;
}

export namespace H3GeoCreateParams {
  /**
   * Model representation of a hex cell array containing data for a set of
   * observations.
   */
  export interface Cell {
    /**
     * The H3 index represented as a 16 character hexadecimal string.
     */
    cellId: string;

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
     * The mean altitude of the set of observations within this cell, measured in
     * kilometers.
     */
    altMean?: number;

    /**
     * The standard deviation of alttitude in the set of observations within this cell,
     * measured in kilometers.
     */
    altSigma?: number;

    /**
     * The anomaly score for probable manufactured interference or RF interference;
     * calculated as a ratio of #anomalous obs / #total obs or coverage.
     */
    anomScoreInterference?: number;

    /**
     * The anomaly score for probable spoofing; calculated as a ratio of #anomalous obs
     * / #total obs or coverage.
     */
    anomScoreSpoofing?: number;

    /**
     * The percentage degree of change in the aggregated observables for a particular
     * H3 bin.
     */
    changeScore?: number;

    /**
     * The total number of available observations in the H3 cell during the start/end
     * times.
     */
    coverage?: number;

    /**
     * Unique identifier of the parent H3 Geo record containing this hex cell.
     */
    idH3Geo?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The max received power monitor (RPM) output value for the set of data contained
     * within this cell.
     */
    rpmMax?: number;

    /**
     * The mean received power monitor (RPM) output value for the set of data contained
     * within this cell.
     */
    rpmMean?: number;

    /**
     * The median received power monitor (RPM) output value for the set of data
     * contained within this cell.
     */
    rpmMedian?: number;

    /**
     * The min received power monitor (RPM) output value for the set of data contained
     * within this cell.
     */
    rpmMin?: number;

    /**
     * The standard deviation of the received power monitor (RPM) output value for the
     * set of data contained within this cell.
     */
    rpmSigma?: number;
  }
}

export interface H3GeoListParams extends OffsetPageParams {
  /**
   * Start time for this H3 Geo data set in ISO 8601 UTC with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime: string;
}

export interface H3GeoCountParams {
  /**
   * Start time for this H3 Geo data set in ISO 8601 UTC with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface H3GeoGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface H3GeoTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Start time for this H3 Geo data set in ISO 8601 UTC with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

H3Geo.History = History;

export declare namespace H3Geo {
  export {
    type H3GeoListResponse as H3GeoListResponse,
    type H3GeoCountResponse as H3GeoCountResponse,
    type H3GeoGetResponse as H3GeoGetResponse,
    type H3GeoQueryhelpResponse as H3GeoQueryhelpResponse,
    type H3GeoTupleResponse as H3GeoTupleResponse,
    type H3GeoListResponsesOffsetPage as H3GeoListResponsesOffsetPage,
    type H3GeoCreateParams as H3GeoCreateParams,
    type H3GeoListParams as H3GeoListParams,
    type H3GeoCountParams as H3GeoCountParams,
    type H3GeoGetParams as H3GeoGetParams,
    type H3GeoTupleParams as H3GeoTupleParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryQueryResponse as HistoryQueryResponse,
    type HistoryAdorParams as HistoryAdorParams,
    type HistoryCountParams as HistoryCountParams,
    type HistoryQueryParams as HistoryQueryParams,
  };
}
