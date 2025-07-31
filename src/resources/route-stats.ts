// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as Shared from 'bluestaq@unified-data-library/resources/shared';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class RouteStats extends APIResource {
  /**
   * Service operation to take a single routeStats record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.routeStats.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   locationEnd: 'KCOS',
   *   locationStart: 'KDEN',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: RouteStatCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/routestats', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single routeStats record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const routeStat = await client.routeStats.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: RouteStatRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RouteStatRetrieveResponse> {
    return this._client.get(path`/udl/routestats/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single RouteStats. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.routeStats.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   locationEnd: 'KCOS',
   *   locationStart: 'KDEN',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: RouteStatUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/routestats/${pathID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to delete a routeStats record specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.routeStats.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/routestats/${id}`, {
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
   * const response = await client.routeStats.count();
   * ```
   */
  count(query: RouteStatCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/routestats/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * RouteStats as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.routeStats.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       locationEnd: 'KCOS',
   *       locationStart: 'KDEN',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: RouteStatCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/routestats/createBulk', {
      body: body,
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
   * const response = await client.routeStats.query();
   * ```
   */
  query(
    query: RouteStatQueryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RouteStatQueryResponse> {
    return this._client.get('/udl/routestats', { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.routeStats.queryHelp();
   * ```
   */
  queryHelp(options?: RequestOptions): APIPromise<RouteStatQueryHelpResponse> {
    return this._client.get('/udl/routestats/queryhelp', options);
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
   * const response = await client.routeStats.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: RouteStatTupleParams, options?: RequestOptions): APIPromise<RouteStatTupleResponse> {
    return this._client.get('/udl/routestats/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple routestats records as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.routeStats.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       locationEnd: 'KCOS',
   *       locationStart: 'KDEN',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(params: RouteStatUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-routestats', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * General statistics applying to navigation routes utilized by vessels, aircraft,
 * ground vehicles, etc.
 */
export interface RouteStatRetrieveResponse {
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
   * End location of the vehicle.
   */
  locationEnd: string;

  /**
   * Starting location of the vehicle.
   */
  locationStart: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Average travel duration for the indicated distance and type of vehicle in hours.
   */
  avgDuration?: number;

  /**
   * Average speed during travel in the indicated unit of measurement, speedUnit.
   */
  avgSpeed?: number;

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
   * The number of data points used in this travel duration calculation.
   */
  dataPtsUsed?: number;

  /**
   * Distance between the departure and arrival locations in the indicated unit of
   * measurement, distUnit.
   */
  distance?: number;

  /**
   * The unit of measurement used for distance in this calculation.
   */
  distUnit?: string;

  /**
   * Date of the first data point used in this calculation, in ISO8601 UTC format
   * with millisecond precision.
   */
  firstPt?: string;

  /**
   * Description of the portion of travel used to estimate the value of the
   * idealDuration field.
   */
  idealDesc?: string;

  /**
   * Estimated ideal travel duration in hours for the full distance using the
   * indicated vehicle type. The field "idealDesc" should be used to describe the
   * ideal travel route.
   */
  idealDuration?: number;

  /**
   * Unique identifier of the Site at the route's end location. This ID can be used
   * to obtain additional information on a Site using the 'get by ID' operation (e.g.
   * /udl/site/{id}). For example, the Site object with idSite = abc would be queried
   * as /udl/site/abc.
   */
  idSiteEnd?: string;

  /**
   * Unique identifier of the Site at the route's starting location. This ID can be
   * used to obtain additional information on a Site using the 'get by ID' operation
   * (e.g. /udl/site/{id}). For example, the Site object with idSite = abc would be
   * queried as /udl/site/abc.
   */
  idSiteStart?: string;

  /**
   * Date of the last data point used in this calculation, in ISO8601 UTC format with
   * millisecond precision.
   */
  lastPt?: string;

  /**
   * Type of location used for route start and end points (e.g., ICAO, PORT, etc.).
   */
  locationType?: string;

  /**
   * Maximum travel duration for the indicated distance and type of vehicle in hours.
   */
  maxDuration?: number;

  /**
   * Maximum speed during travel in the indicated unit of measurement, speedUnit.
   */
  maxSpeed?: number;

  /**
   * Minimum travel duration for the indicated distance and type of vehicle in hours.
   */
  minDuration?: number;

  /**
   * Minimum speed during travel in the indicated unit of measurement, speedUnit.
   */
  minSpeed?: number;

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
   * Description of the portion of travel used to estimate the value of the
   * partialDuration field.
   */
  partialDesc?: string;

  /**
   * Estimated ideal travel duration in hours for a partial distance using the
   * indicated vehicle type. The field "partialDesc" should be used to specify the
   * intended portion of travel.
   */
  partialDuration?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The unit of measurement used for speed in this calculation.
   */
  speedUnit?: string;

  /**
   * The time period this data was collected.
   */
  timePeriod?: string;

  /**
   * Time the row was updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;

  /**
   * The vehicle category that is the subject of this calculation (e.g., AIRCRAFT,
   * CAR, BOAT, etc.).
   */
  vehicleCategory?: string;

  /**
   * The vehicle type that is the subject of this calculation (e.g., C-17, F-15,
   * etc.).
   */
  vehicleType?: string;
}

export type RouteStatCountResponse = string;

export type RouteStatQueryResponse = Array<RouteStatQueryResponse.RouteStatQueryResponseItem>;

export namespace RouteStatQueryResponse {
  /**
   * General statistics applying to navigation routes utilized by vessels, aircraft,
   * ground vehicles, etc.
   */
  export interface RouteStatQueryResponseItem {
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
     * End location of the vehicle.
     */
    locationEnd: string;

    /**
     * Starting location of the vehicle.
     */
    locationStart: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Average travel duration for the indicated distance and type of vehicle in hours.
     */
    avgDuration?: number;

    /**
     * Average speed during travel in the indicated unit of measurement, speedUnit.
     */
    avgSpeed?: number;

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
     * The number of data points used in this travel duration calculation.
     */
    dataPtsUsed?: number;

    /**
     * Distance between the departure and arrival locations in the indicated unit of
     * measurement, distUnit.
     */
    distance?: number;

    /**
     * The unit of measurement used for distance in this calculation.
     */
    distUnit?: string;

    /**
     * Date of the first data point used in this calculation, in ISO8601 UTC format
     * with millisecond precision.
     */
    firstPt?: string;

    /**
     * Description of the portion of travel used to estimate the value of the
     * idealDuration field.
     */
    idealDesc?: string;

    /**
     * Estimated ideal travel duration in hours for the full distance using the
     * indicated vehicle type. The field "idealDesc" should be used to describe the
     * ideal travel route.
     */
    idealDuration?: number;

    /**
     * Unique identifier of the Site at the route's end location. This ID can be used
     * to obtain additional information on a Site using the 'get by ID' operation (e.g.
     * /udl/site/{id}). For example, the Site object with idSite = abc would be queried
     * as /udl/site/abc.
     */
    idSiteEnd?: string;

    /**
     * Unique identifier of the Site at the route's starting location. This ID can be
     * used to obtain additional information on a Site using the 'get by ID' operation
     * (e.g. /udl/site/{id}). For example, the Site object with idSite = abc would be
     * queried as /udl/site/abc.
     */
    idSiteStart?: string;

    /**
     * Date of the last data point used in this calculation, in ISO8601 UTC format with
     * millisecond precision.
     */
    lastPt?: string;

    /**
     * Type of location used for route start and end points (e.g., ICAO, PORT, etc.).
     */
    locationType?: string;

    /**
     * Maximum travel duration for the indicated distance and type of vehicle in hours.
     */
    maxDuration?: number;

    /**
     * Maximum speed during travel in the indicated unit of measurement, speedUnit.
     */
    maxSpeed?: number;

    /**
     * Minimum travel duration for the indicated distance and type of vehicle in hours.
     */
    minDuration?: number;

    /**
     * Minimum speed during travel in the indicated unit of measurement, speedUnit.
     */
    minSpeed?: number;

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
     * Description of the portion of travel used to estimate the value of the
     * partialDuration field.
     */
    partialDesc?: string;

    /**
     * Estimated ideal travel duration in hours for a partial distance using the
     * indicated vehicle type. The field "partialDesc" should be used to specify the
     * intended portion of travel.
     */
    partialDuration?: number;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * The unit of measurement used for speed in this calculation.
     */
    speedUnit?: string;

    /**
     * The time period this data was collected.
     */
    timePeriod?: string;

    /**
     * The vehicle category that is the subject of this calculation (e.g., AIRCRAFT,
     * CAR, BOAT, etc.).
     */
    vehicleCategory?: string;

    /**
     * The vehicle type that is the subject of this calculation (e.g., C-17, F-15,
     * etc.).
     */
    vehicleType?: string;
  }
}

export interface RouteStatQueryHelpResponse {
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

export type RouteStatTupleResponse = Array<RouteStatTupleResponse.RouteStatTupleResponseItem>;

export namespace RouteStatTupleResponse {
  /**
   * General statistics applying to navigation routes utilized by vessels, aircraft,
   * ground vehicles, etc.
   */
  export interface RouteStatTupleResponseItem {
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
     * End location of the vehicle.
     */
    locationEnd: string;

    /**
     * Starting location of the vehicle.
     */
    locationStart: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Average travel duration for the indicated distance and type of vehicle in hours.
     */
    avgDuration?: number;

    /**
     * Average speed during travel in the indicated unit of measurement, speedUnit.
     */
    avgSpeed?: number;

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
     * The number of data points used in this travel duration calculation.
     */
    dataPtsUsed?: number;

    /**
     * Distance between the departure and arrival locations in the indicated unit of
     * measurement, distUnit.
     */
    distance?: number;

    /**
     * The unit of measurement used for distance in this calculation.
     */
    distUnit?: string;

    /**
     * Date of the first data point used in this calculation, in ISO8601 UTC format
     * with millisecond precision.
     */
    firstPt?: string;

    /**
     * Description of the portion of travel used to estimate the value of the
     * idealDuration field.
     */
    idealDesc?: string;

    /**
     * Estimated ideal travel duration in hours for the full distance using the
     * indicated vehicle type. The field "idealDesc" should be used to describe the
     * ideal travel route.
     */
    idealDuration?: number;

    /**
     * Unique identifier of the Site at the route's end location. This ID can be used
     * to obtain additional information on a Site using the 'get by ID' operation (e.g.
     * /udl/site/{id}). For example, the Site object with idSite = abc would be queried
     * as /udl/site/abc.
     */
    idSiteEnd?: string;

    /**
     * Unique identifier of the Site at the route's starting location. This ID can be
     * used to obtain additional information on a Site using the 'get by ID' operation
     * (e.g. /udl/site/{id}). For example, the Site object with idSite = abc would be
     * queried as /udl/site/abc.
     */
    idSiteStart?: string;

    /**
     * Date of the last data point used in this calculation, in ISO8601 UTC format with
     * millisecond precision.
     */
    lastPt?: string;

    /**
     * Type of location used for route start and end points (e.g., ICAO, PORT, etc.).
     */
    locationType?: string;

    /**
     * Maximum travel duration for the indicated distance and type of vehicle in hours.
     */
    maxDuration?: number;

    /**
     * Maximum speed during travel in the indicated unit of measurement, speedUnit.
     */
    maxSpeed?: number;

    /**
     * Minimum travel duration for the indicated distance and type of vehicle in hours.
     */
    minDuration?: number;

    /**
     * Minimum speed during travel in the indicated unit of measurement, speedUnit.
     */
    minSpeed?: number;

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
     * Description of the portion of travel used to estimate the value of the
     * partialDuration field.
     */
    partialDesc?: string;

    /**
     * Estimated ideal travel duration in hours for a partial distance using the
     * indicated vehicle type. The field "partialDesc" should be used to specify the
     * intended portion of travel.
     */
    partialDuration?: number;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * The unit of measurement used for speed in this calculation.
     */
    speedUnit?: string;

    /**
     * The time period this data was collected.
     */
    timePeriod?: string;

    /**
     * Time the row was updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;

    /**
     * The vehicle category that is the subject of this calculation (e.g., AIRCRAFT,
     * CAR, BOAT, etc.).
     */
    vehicleCategory?: string;

    /**
     * The vehicle type that is the subject of this calculation (e.g., C-17, F-15,
     * etc.).
     */
    vehicleType?: string;
  }
}

export interface RouteStatCreateParams {
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
   * End location of the vehicle.
   */
  locationEnd: string;

  /**
   * Starting location of the vehicle.
   */
  locationStart: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Average travel duration for the indicated distance and type of vehicle in hours.
   */
  avgDuration?: number;

  /**
   * Average speed during travel in the indicated unit of measurement, speedUnit.
   */
  avgSpeed?: number;

  /**
   * The number of data points used in this travel duration calculation.
   */
  dataPtsUsed?: number;

  /**
   * Distance between the departure and arrival locations in the indicated unit of
   * measurement, distUnit.
   */
  distance?: number;

  /**
   * The unit of measurement used for distance in this calculation.
   */
  distUnit?: string;

  /**
   * Date of the first data point used in this calculation, in ISO8601 UTC format
   * with millisecond precision.
   */
  firstPt?: string;

  /**
   * Description of the portion of travel used to estimate the value of the
   * idealDuration field.
   */
  idealDesc?: string;

  /**
   * Estimated ideal travel duration in hours for the full distance using the
   * indicated vehicle type. The field "idealDesc" should be used to describe the
   * ideal travel route.
   */
  idealDuration?: number;

  /**
   * Unique identifier of the Site at the route's end location. This ID can be used
   * to obtain additional information on a Site using the 'get by ID' operation (e.g.
   * /udl/site/{id}). For example, the Site object with idSite = abc would be queried
   * as /udl/site/abc.
   */
  idSiteEnd?: string;

  /**
   * Unique identifier of the Site at the route's starting location. This ID can be
   * used to obtain additional information on a Site using the 'get by ID' operation
   * (e.g. /udl/site/{id}). For example, the Site object with idSite = abc would be
   * queried as /udl/site/abc.
   */
  idSiteStart?: string;

  /**
   * Date of the last data point used in this calculation, in ISO8601 UTC format with
   * millisecond precision.
   */
  lastPt?: string;

  /**
   * Type of location used for route start and end points (e.g., ICAO, PORT, etc.).
   */
  locationType?: string;

  /**
   * Maximum travel duration for the indicated distance and type of vehicle in hours.
   */
  maxDuration?: number;

  /**
   * Maximum speed during travel in the indicated unit of measurement, speedUnit.
   */
  maxSpeed?: number;

  /**
   * Minimum travel duration for the indicated distance and type of vehicle in hours.
   */
  minDuration?: number;

  /**
   * Minimum speed during travel in the indicated unit of measurement, speedUnit.
   */
  minSpeed?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Description of the portion of travel used to estimate the value of the
   * partialDuration field.
   */
  partialDesc?: string;

  /**
   * Estimated ideal travel duration in hours for a partial distance using the
   * indicated vehicle type. The field "partialDesc" should be used to specify the
   * intended portion of travel.
   */
  partialDuration?: number;

  /**
   * The unit of measurement used for speed in this calculation.
   */
  speedUnit?: string;

  /**
   * The time period this data was collected.
   */
  timePeriod?: string;

  /**
   * The vehicle category that is the subject of this calculation (e.g., AIRCRAFT,
   * CAR, BOAT, etc.).
   */
  vehicleCategory?: string;

  /**
   * The vehicle type that is the subject of this calculation (e.g., C-17, F-15,
   * etc.).
   */
  vehicleType?: string;
}

export interface RouteStatRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface RouteStatUpdateParams {
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
   * End location of the vehicle.
   */
  locationEnd: string;

  /**
   * Starting location of the vehicle.
   */
  locationStart: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Average travel duration for the indicated distance and type of vehicle in hours.
   */
  avgDuration?: number;

  /**
   * Average speed during travel in the indicated unit of measurement, speedUnit.
   */
  avgSpeed?: number;

  /**
   * The number of data points used in this travel duration calculation.
   */
  dataPtsUsed?: number;

  /**
   * Distance between the departure and arrival locations in the indicated unit of
   * measurement, distUnit.
   */
  distance?: number;

  /**
   * The unit of measurement used for distance in this calculation.
   */
  distUnit?: string;

  /**
   * Date of the first data point used in this calculation, in ISO8601 UTC format
   * with millisecond precision.
   */
  firstPt?: string;

  /**
   * Description of the portion of travel used to estimate the value of the
   * idealDuration field.
   */
  idealDesc?: string;

  /**
   * Estimated ideal travel duration in hours for the full distance using the
   * indicated vehicle type. The field "idealDesc" should be used to describe the
   * ideal travel route.
   */
  idealDuration?: number;

  /**
   * Unique identifier of the Site at the route's end location. This ID can be used
   * to obtain additional information on a Site using the 'get by ID' operation (e.g.
   * /udl/site/{id}). For example, the Site object with idSite = abc would be queried
   * as /udl/site/abc.
   */
  idSiteEnd?: string;

  /**
   * Unique identifier of the Site at the route's starting location. This ID can be
   * used to obtain additional information on a Site using the 'get by ID' operation
   * (e.g. /udl/site/{id}). For example, the Site object with idSite = abc would be
   * queried as /udl/site/abc.
   */
  idSiteStart?: string;

  /**
   * Date of the last data point used in this calculation, in ISO8601 UTC format with
   * millisecond precision.
   */
  lastPt?: string;

  /**
   * Type of location used for route start and end points (e.g., ICAO, PORT, etc.).
   */
  locationType?: string;

  /**
   * Maximum travel duration for the indicated distance and type of vehicle in hours.
   */
  maxDuration?: number;

  /**
   * Maximum speed during travel in the indicated unit of measurement, speedUnit.
   */
  maxSpeed?: number;

  /**
   * Minimum travel duration for the indicated distance and type of vehicle in hours.
   */
  minDuration?: number;

  /**
   * Minimum speed during travel in the indicated unit of measurement, speedUnit.
   */
  minSpeed?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Description of the portion of travel used to estimate the value of the
   * partialDuration field.
   */
  partialDesc?: string;

  /**
   * Estimated ideal travel duration in hours for a partial distance using the
   * indicated vehicle type. The field "partialDesc" should be used to specify the
   * intended portion of travel.
   */
  partialDuration?: number;

  /**
   * The unit of measurement used for speed in this calculation.
   */
  speedUnit?: string;

  /**
   * The time period this data was collected.
   */
  timePeriod?: string;

  /**
   * The vehicle category that is the subject of this calculation (e.g., AIRCRAFT,
   * CAR, BOAT, etc.).
   */
  vehicleCategory?: string;

  /**
   * The vehicle type that is the subject of this calculation (e.g., C-17, F-15,
   * etc.).
   */
  vehicleType?: string;
}

export interface RouteStatCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface RouteStatCreateBulkParams {
  body: Array<RouteStatCreateBulkParams.Body>;
}

export namespace RouteStatCreateBulkParams {
  /**
   * General statistics applying to navigation routes utilized by vessels, aircraft,
   * ground vehicles, etc.
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
     * End location of the vehicle.
     */
    locationEnd: string;

    /**
     * Starting location of the vehicle.
     */
    locationStart: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Average travel duration for the indicated distance and type of vehicle in hours.
     */
    avgDuration?: number;

    /**
     * Average speed during travel in the indicated unit of measurement, speedUnit.
     */
    avgSpeed?: number;

    /**
     * The number of data points used in this travel duration calculation.
     */
    dataPtsUsed?: number;

    /**
     * Distance between the departure and arrival locations in the indicated unit of
     * measurement, distUnit.
     */
    distance?: number;

    /**
     * The unit of measurement used for distance in this calculation.
     */
    distUnit?: string;

    /**
     * Date of the first data point used in this calculation, in ISO8601 UTC format
     * with millisecond precision.
     */
    firstPt?: string;

    /**
     * Description of the portion of travel used to estimate the value of the
     * idealDuration field.
     */
    idealDesc?: string;

    /**
     * Estimated ideal travel duration in hours for the full distance using the
     * indicated vehicle type. The field "idealDesc" should be used to describe the
     * ideal travel route.
     */
    idealDuration?: number;

    /**
     * Unique identifier of the Site at the route's end location. This ID can be used
     * to obtain additional information on a Site using the 'get by ID' operation (e.g.
     * /udl/site/{id}). For example, the Site object with idSite = abc would be queried
     * as /udl/site/abc.
     */
    idSiteEnd?: string;

    /**
     * Unique identifier of the Site at the route's starting location. This ID can be
     * used to obtain additional information on a Site using the 'get by ID' operation
     * (e.g. /udl/site/{id}). For example, the Site object with idSite = abc would be
     * queried as /udl/site/abc.
     */
    idSiteStart?: string;

    /**
     * Date of the last data point used in this calculation, in ISO8601 UTC format with
     * millisecond precision.
     */
    lastPt?: string;

    /**
     * Type of location used for route start and end points (e.g., ICAO, PORT, etc.).
     */
    locationType?: string;

    /**
     * Maximum travel duration for the indicated distance and type of vehicle in hours.
     */
    maxDuration?: number;

    /**
     * Maximum speed during travel in the indicated unit of measurement, speedUnit.
     */
    maxSpeed?: number;

    /**
     * Minimum travel duration for the indicated distance and type of vehicle in hours.
     */
    minDuration?: number;

    /**
     * Minimum speed during travel in the indicated unit of measurement, speedUnit.
     */
    minSpeed?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Description of the portion of travel used to estimate the value of the
     * partialDuration field.
     */
    partialDesc?: string;

    /**
     * Estimated ideal travel duration in hours for a partial distance using the
     * indicated vehicle type. The field "partialDesc" should be used to specify the
     * intended portion of travel.
     */
    partialDuration?: number;

    /**
     * The unit of measurement used for speed in this calculation.
     */
    speedUnit?: string;

    /**
     * The time period this data was collected.
     */
    timePeriod?: string;

    /**
     * The vehicle category that is the subject of this calculation (e.g., AIRCRAFT,
     * CAR, BOAT, etc.).
     */
    vehicleCategory?: string;

    /**
     * The vehicle type that is the subject of this calculation (e.g., C-17, F-15,
     * etc.).
     */
    vehicleType?: string;
  }
}

export interface RouteStatQueryParams {
  firstResult?: number;

  maxResults?: number;
}

export interface RouteStatTupleParams {
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

export interface RouteStatUnvalidatedPublishParams {
  body: Array<RouteStatUnvalidatedPublishParams.Body>;
}

export namespace RouteStatUnvalidatedPublishParams {
  /**
   * General statistics applying to navigation routes utilized by vessels, aircraft,
   * ground vehicles, etc.
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
     * End location of the vehicle.
     */
    locationEnd: string;

    /**
     * Starting location of the vehicle.
     */
    locationStart: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Average travel duration for the indicated distance and type of vehicle in hours.
     */
    avgDuration?: number;

    /**
     * Average speed during travel in the indicated unit of measurement, speedUnit.
     */
    avgSpeed?: number;

    /**
     * The number of data points used in this travel duration calculation.
     */
    dataPtsUsed?: number;

    /**
     * Distance between the departure and arrival locations in the indicated unit of
     * measurement, distUnit.
     */
    distance?: number;

    /**
     * The unit of measurement used for distance in this calculation.
     */
    distUnit?: string;

    /**
     * Date of the first data point used in this calculation, in ISO8601 UTC format
     * with millisecond precision.
     */
    firstPt?: string;

    /**
     * Description of the portion of travel used to estimate the value of the
     * idealDuration field.
     */
    idealDesc?: string;

    /**
     * Estimated ideal travel duration in hours for the full distance using the
     * indicated vehicle type. The field "idealDesc" should be used to describe the
     * ideal travel route.
     */
    idealDuration?: number;

    /**
     * Unique identifier of the Site at the route's end location. This ID can be used
     * to obtain additional information on a Site using the 'get by ID' operation (e.g.
     * /udl/site/{id}). For example, the Site object with idSite = abc would be queried
     * as /udl/site/abc.
     */
    idSiteEnd?: string;

    /**
     * Unique identifier of the Site at the route's starting location. This ID can be
     * used to obtain additional information on a Site using the 'get by ID' operation
     * (e.g. /udl/site/{id}). For example, the Site object with idSite = abc would be
     * queried as /udl/site/abc.
     */
    idSiteStart?: string;

    /**
     * Date of the last data point used in this calculation, in ISO8601 UTC format with
     * millisecond precision.
     */
    lastPt?: string;

    /**
     * Type of location used for route start and end points (e.g., ICAO, PORT, etc.).
     */
    locationType?: string;

    /**
     * Maximum travel duration for the indicated distance and type of vehicle in hours.
     */
    maxDuration?: number;

    /**
     * Maximum speed during travel in the indicated unit of measurement, speedUnit.
     */
    maxSpeed?: number;

    /**
     * Minimum travel duration for the indicated distance and type of vehicle in hours.
     */
    minDuration?: number;

    /**
     * Minimum speed during travel in the indicated unit of measurement, speedUnit.
     */
    minSpeed?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Description of the portion of travel used to estimate the value of the
     * partialDuration field.
     */
    partialDesc?: string;

    /**
     * Estimated ideal travel duration in hours for a partial distance using the
     * indicated vehicle type. The field "partialDesc" should be used to specify the
     * intended portion of travel.
     */
    partialDuration?: number;

    /**
     * The unit of measurement used for speed in this calculation.
     */
    speedUnit?: string;

    /**
     * The time period this data was collected.
     */
    timePeriod?: string;

    /**
     * The vehicle category that is the subject of this calculation (e.g., AIRCRAFT,
     * CAR, BOAT, etc.).
     */
    vehicleCategory?: string;

    /**
     * The vehicle type that is the subject of this calculation (e.g., C-17, F-15,
     * etc.).
     */
    vehicleType?: string;
  }
}

export declare namespace RouteStats {
  export {
    type RouteStatRetrieveResponse as RouteStatRetrieveResponse,
    type RouteStatCountResponse as RouteStatCountResponse,
    type RouteStatQueryResponse as RouteStatQueryResponse,
    type RouteStatQueryHelpResponse as RouteStatQueryHelpResponse,
    type RouteStatTupleResponse as RouteStatTupleResponse,
    type RouteStatCreateParams as RouteStatCreateParams,
    type RouteStatRetrieveParams as RouteStatRetrieveParams,
    type RouteStatUpdateParams as RouteStatUpdateParams,
    type RouteStatCountParams as RouteStatCountParams,
    type RouteStatCreateBulkParams as RouteStatCreateBulkParams,
    type RouteStatQueryParams as RouteStatQueryParams,
    type RouteStatTupleParams as RouteStatTupleParams,
    type RouteStatUnvalidatedPublishParams as RouteStatUnvalidatedPublishParams,
  };
}
