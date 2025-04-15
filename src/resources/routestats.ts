// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Routestats extends APIResource {
  /**
   * Service operation to take a single routeStats record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: RoutestatCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/routestats', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single routeStats record by its unique ID passed as a
   * path parameter.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<RoutestatRetrieveResponse> {
    return this._client.get(`/udl/routestats/${id}`, options);
  }

  /**
   * Service operation to update a single RouteStats. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   */
  update(pathId: string, body: RoutestatUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/udl/routestats/${pathId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to delete a routeStats record specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/routestats/${id}`, {
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
    return this._client.get('/udl/routestats/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * RouteStats as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   */
  createBulk(body: RoutestatCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/routestats/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to take multiple routestats records as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  createBulkV2(body: RoutestatCreateBulkV2Params, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/filedrop/udl-routestats', {
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
  query(options?: Core.RequestOptions): Core.APIPromise<RoutestatQueryResponse> {
    return this._client.get('/udl/routestats', options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryHelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/routestats/queryhelp', {
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
  tuple(query: RoutestatTupleParams, options?: Core.RequestOptions): Core.APIPromise<RoutestatTupleResponse> {
    return this._client.get('/udl/routestats/tuple', { query, ...options });
  }
}

/**
 * General statistics applying to navigation routes utilized by vessels, aircraft,
 * ground vehicles, etc.
 */
export interface RoutestatRetrieveResponse {
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

export type RoutestatCountResponse = string;

export type RoutestatQueryResponse = Array<RoutestatQueryResponse.RoutestatQueryResponseItem>;

export namespace RoutestatQueryResponse {
  /**
   * General statistics applying to navigation routes utilized by vessels, aircraft,
   * ground vehicles, etc.
   */
  export interface RoutestatQueryResponseItem {
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

export type RoutestatTupleResponse = Array<RoutestatTupleResponse.RoutestatTupleResponseItem>;

export namespace RoutestatTupleResponse {
  /**
   * General statistics applying to navigation routes utilized by vessels, aircraft,
   * ground vehicles, etc.
   */
  export interface RoutestatTupleResponseItem {
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

export interface RoutestatCreateParams {
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

export interface RoutestatUpdateParams {
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

export type RoutestatCreateBulkParams = Array<RoutestatCreateBulkParams.Body>;

export namespace RoutestatCreateBulkParams {
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

export type RoutestatCreateBulkV2Params = Array<RoutestatCreateBulkV2Params.Body>;

export namespace RoutestatCreateBulkV2Params {
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

export interface RoutestatTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

export declare namespace Routestats {
  export {
    type RoutestatRetrieveResponse as RoutestatRetrieveResponse,
    type RoutestatCountResponse as RoutestatCountResponse,
    type RoutestatQueryResponse as RoutestatQueryResponse,
    type RoutestatTupleResponse as RoutestatTupleResponse,
    type RoutestatCreateParams as RoutestatCreateParams,
    type RoutestatUpdateParams as RoutestatUpdateParams,
    type RoutestatCreateBulkParams as RoutestatCreateBulkParams,
    type RoutestatCreateBulkV2Params as RoutestatCreateBulkV2Params,
    type RoutestatTupleParams as RoutestatTupleParams,
  };
}
