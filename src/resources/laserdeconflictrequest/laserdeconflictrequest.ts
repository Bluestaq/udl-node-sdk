// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LaserdeconflictrequestAPI from './laserdeconflictrequest';
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

export class Laserdeconflictrequest extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single LaserDeconflictRequest record as a POST body
   * and ingest into the database. This operation does not persist any
   * LaserDeconflictTarget datatypes that may be present in the body of the request.
   * This operation is not intended to be used for automated feeds into UDL. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.laserdeconflictrequest.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   endDate: '2023-07-20T00:00:00.123Z',
   *   idLaserEmitters: [
   *     '2346c0a0-585f-4232-af5d-93bad320fdc0',
   *     '4446c0a0-585f-4232-af5d-93bad320fbb1',
   *   ],
   *   numTargets: 25,
   *   requestId: '3856c0a0-585f-4232-af5d-93bad320fac6',
   *   requestTs: '2023-07-15T12:30:30.123Z',
   *   source: 'Bluestaq',
   *   startDate: '2023-07-19T00:00:00.123Z',
   * });
   * ```
   */
  create(body: LaserdeconflictrequestCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/laserdeconflictrequest', {
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
   * for await (const laserdeconflictrequestListResponse of client.laserdeconflictrequest.list(
   *   { startDate: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LaserdeconflictrequestListParams,
    options?: RequestOptions,
  ): PagePromise<LaserdeconflictrequestListResponsesOffsetPage, LaserdeconflictrequestListResponse> {
    return this._client.getAPIList(
      '/udl/laserdeconflictrequest',
      OffsetPage<LaserdeconflictrequestListResponse>,
      { query, ...options },
    );
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
   * const response = await client.laserdeconflictrequest.count({
   *   startDate: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: LaserdeconflictrequestCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/laserdeconflictrequest/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single LaserDeconflictRequest record by its unique ID
   * passed as a path parameter.
   *
   * @example
   * ```ts
   * const laserdeconflictrequest =
   *   await client.laserdeconflictrequest.get('id');
   * ```
   */
  get(
    id: string,
    query: LaserdeconflictrequestGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LaserdeconflictrequestGetResponse> {
    return this._client.get(path`/udl/laserdeconflictrequest/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.laserdeconflictrequest.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<LaserdeconflictrequestQueryhelpResponse> {
    return this._client.get('/udl/laserdeconflictrequest/queryhelp', options);
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
   * const response = await client.laserdeconflictrequest.tuple({
   *   columns: 'columns',
   *   startDate: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(
    query: LaserdeconflictrequestTupleParams,
    options?: RequestOptions,
  ): APIPromise<LaserdeconflictrequestTupleResponse> {
    return this._client.get('/udl/laserdeconflictrequest/tuple', { query, ...options });
  }

  /**
   * Service operation to take a single LaserDeconflictRequest record as a POST body
   * and ingest into the database. This operation is intended to be used for
   * automated feeds into UDL. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.laserdeconflictrequest.unvalidatedPublish({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   endDate: '2023-07-20T00:00:00.123Z',
   *   idLaserEmitters: [
   *     '2346c0a0-585f-4232-af5d-93bad320fdc0',
   *     '4446c0a0-585f-4232-af5d-93bad320fbb1',
   *   ],
   *   numTargets: 25,
   *   requestId: '3856c0a0-585f-4232-af5d-93bad320fac6',
   *   requestTs: '2023-07-15T12:30:30.123Z',
   *   source: 'Bluestaq',
   *   startDate: '2023-07-19T00:00:00.123Z',
   * });
   * ```
   */
  unvalidatedPublish(
    body: LaserdeconflictrequestUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/filedrop/udl-laserdeconflictrequest', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type LaserdeconflictrequestListResponsesOffsetPage = OffsetPage<LaserdeconflictrequestListResponse>;

export interface FixedPointFull {
  /**
   * WGS84 latitude of a point, in degrees. -90 to 90 degrees (negative values south
   * of equator).
   */
  latitude: number;

  /**
   * WGS84 longitude of a point, in degrees. -180 to 180 degrees (negative values
   * west of Prime Meridian).
   */
  longitude: number;

  /**
   * Point height as measured from sea level, ranging from -300 to 1000 kilometers.
   */
  height?: number;
}

/**
 * The LaserDeconflictionRequest service is designed to process and manage requests
 * related to the safe operation of high-powered lasers, ensuring that laser
 * systems do not interfere with other critical operations, such as satellite based
 * activities. The service facilitates real-time coordination between different
 * entities to prevent accidental exposure to laser hazards, ensuring compliance
 * with safety protocols and regulations.
 */
export interface LaserdeconflictrequestListResponse {
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
   * End date of the time windows associated with this LaserDeconflictRequest, in ISO
   * 8601 UTC format with millisecond precision.
   */
  endDate: string;

  /**
   * A list containing the id strings of the LaserEmitter records in UDL detailing
   * the physical parameters of each laser/emitter operationally involved with this
   * request. All laser/emitter components must be accurately described using the
   * LaserEmitter schema and ingested into the UDL LaserEmitter service before
   * creating a LaserDeconflictRequest. Users should create new LaserEmitter records
   * for non-existent emitters and update existing records for any modifications.
   */
  idLaserEmitters: Array<string>;

  /**
   * The number of targets included in this request.
   */
  numTargets: number;

  /**
   * External identifier for this LaserDeconflictRequest record.
   */
  requestId: string;

  /**
   * The datetime that this LaserDeconflictRequest record was created, in ISO 8601
   * UTC format with millisecond precision.
   */
  requestTs: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Start date of the time windows associated with this LaserDeconflictRequest, in
   * ISO 8601 UTC format with millisecond precision.
   */
  startDate: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * The azimuth angle of the centerline of the geospatial box that confines
   * positions of the laser platform, in degrees.
   */
  centerlineAzimuth?: number;

  /**
   * The elevation angle of the centerline of the geospatial box that confines the
   * positions of the laser platform, in degrees.
   */
  centerlineElevation?: number;

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
   * The half-angle of the safety cone of the laser beam, in degrees.
   */
  defaultCHA?: number;

  /**
   * Boolean enabling Dynamic Satellite Susceptibility (DSS) algorithms.
   */
  enableDSS?: boolean;

  /**
   * A collection of latitude, longitude, and altitude fields which can be used to
   * specify the geometry of the coordinate space in which the laser platform(s) will
   * be operational for this request. For example, a BOX_2_WAYPOINTS would include
   * two data points, while a BOX_4_SURFACE_POINTS would include four data points.
   */
  fixedPoints?: Array<LaserdeconflictrequestListResponse.FixedPoint>;

  /**
   * Indicates the geopotential model used in the propagation calculation for this
   * request (e.g. EGM-96, WGS-84, WGS-72, WGS66, WGS60, JGM-2, or GEM-T3).
   */
  geopotentialModel?: string;

  /**
   * Unique identifier of the on-orbit laser platform.
   */
  idOnOrbit?: string;

  /**
   * The name of the laser/beam director system. The Laser Clearinghouse will append
   * identifiers to the name using standard conventions.
   */
  laserSystemName?: string;

  /**
   * The length of the centerline that passes through the center point of the
   * geospatial box that confines the positions of the laser platform, in kilometers.
   */
  lengthCenterline?: number;

  /**
   * Specifies the length of the horizontal dimension of the geospatial box that
   * confines the positions of the laser platform, in kilometers.
   */
  lengthLeftRight?: number;

  /**
   * Specifies the length of the vertical dimension of the geospatial box that
   * confines the positions of the laser platform, in kilometers.
   */
  lengthUpDown?: number;

  /**
   * The maximum laser operating altitude specified as the height above/below the
   * WGS84 ellipsoid where the laser is omitted from, in kilometers.
   */
  maximumHeight?: number;

  /**
   * The minimum laser operating altitude specified as the height above/below the
   * WGS84 ellipsoid where the laser is omitted from, in kilometers.
   */
  minimumHeight?: number;

  /**
   * The name of the mission with which this LaserDeconflictRequest is associated.
   */
  missionName?: string;

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
   * Optional identifier provided by the source provider to indicate the on-orbit
   * laser platform. This may be an internal identifier and not necessarily map to a
   * valid satellite number.
   */
  origObjectId?: string;

  /**
   * The name of the laser platform.
   */
  platformLocationName?: string;

  /**
   * Indicates the type of location(s) the laser platform will be operational for
   * this request (BOX_2_WAYPOINTS, BOX_4_SURFACE_POINTS, BOX_CENTER_POINT_LINE,
   * EXTERNAL_EPHEMERIS, FIXED_POINT, SATELLITE).
   */
  platformLocationType?: string;

  /**
   * External identifier for the program that is responsible for this
   * LaserDeconflictRequest.
   */
  programId?: string;

  /**
   * The type of propagator utilized in the deconfliction/predictive avoidance
   * calculation.
   */
  propagator?: string;

  /**
   * A list of satellite/catalog numbers that should be protected from any and all
   * incidence of laser illumination for the duration of this request.
   */
  protectList?: Array<number>;

  /**
   * The satellite/catalog number of the on-orbit laser platform.
   */
  satNo?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Boolean indicating whether error growth of the laser beam is enabled for this
   * request.
   */
  sourceEnabled?: boolean;

  /**
   * Status of this request (APPROVED, COMPLETE_WITH_ERRORS, COMPLETE_WITH_WARNINGS,
   * FAILURE, IN_PROGRESS, REQUESTED, SUCCESS).
   */
  status?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Boolean indicating whether target error growth is enabled for this request.
   */
  targetEnabled?: boolean;

  /**
   * The target type that concerns this request (BOX_2_WAYPOINTS,
   * BOX_4_SURFACE_POINTS, BOX_CENTER_POINT_LINE, EXTERNAL_EPHEMERIS, FIXED_POINT,
   * SATELLITE).
   */
  targetType?: string;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Indicates the treatment of earth (INVISIBLE, VICTIM, SHIELD) for this
   * LaserDeconflictRequest record.
   */
  treatEarthAs?: string;

  /**
   * Boolean indicating that, for deconfliction events in which the potential target
   * is an optical imaging satellite, line of sight computation between target and
   * source is ensured when the source emitter is contained within the field of
   * regard (field of view) of the satellite's optical telescope.
   */
  useFieldOfRegard?: boolean;

  /**
   * Boolean indicating whether victim error growth is enabled as input to the
   * deconfliction calculations for this request.
   */
  victimEnabled?: boolean;
}

export namespace LaserdeconflictrequestListResponse {
  export interface FixedPoint {
    /**
     * WGS84 latitude of a point, in degrees. -90 to 90 degrees (negative values south
     * of equator).
     */
    latitude: number;

    /**
     * WGS84 longitude of a point, in degrees. -180 to 180 degrees (negative values
     * west of Prime Meridian).
     */
    longitude: number;

    /**
     * Point height as measured from sea level, ranging from -300 to 1000 kilometers.
     */
    height?: number;
  }
}

export type LaserdeconflictrequestCountResponse = string;

/**
 * The LaserDeconflictionRequest service is designed to process and manage requests
 * related to the safe operation of high-powered lasers, ensuring that laser
 * systems do not interfere with other critical operations, such as satellite based
 * activities. The service facilitates real-time coordination between different
 * entities to prevent accidental exposure to laser hazards, ensuring compliance
 * with safety protocols and regulations.
 */
export interface LaserdeconflictrequestGetResponse {
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
   * End date of the time windows associated with this LaserDeconflictRequest, in ISO
   * 8601 UTC format with millisecond precision.
   */
  endDate: string;

  /**
   * A list containing the id strings of the LaserEmitter records in UDL detailing
   * the physical parameters of each laser/emitter operationally involved with this
   * request. All laser/emitter components must be accurately described using the
   * LaserEmitter schema and ingested into the UDL LaserEmitter service before
   * creating a LaserDeconflictRequest. Users should create new LaserEmitter records
   * for non-existent emitters and update existing records for any modifications.
   */
  idLaserEmitters: Array<string>;

  /**
   * The number of targets included in this request.
   */
  numTargets: number;

  /**
   * External identifier for this LaserDeconflictRequest record.
   */
  requestId: string;

  /**
   * The datetime that this LaserDeconflictRequest record was created, in ISO 8601
   * UTC format with millisecond precision.
   */
  requestTs: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Start date of the time windows associated with this LaserDeconflictRequest, in
   * ISO 8601 UTC format with millisecond precision.
   */
  startDate: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * The azimuth angle of the centerline of the geospatial box that confines
   * positions of the laser platform, in degrees.
   */
  centerlineAzimuth?: number;

  /**
   * The elevation angle of the centerline of the geospatial box that confines the
   * positions of the laser platform, in degrees.
   */
  centerlineElevation?: number;

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
   * The half-angle of the safety cone of the laser beam, in degrees.
   */
  defaultCHA?: number;

  /**
   * Boolean enabling Dynamic Satellite Susceptibility (DSS) algorithms.
   */
  enableDSS?: boolean;

  /**
   * A collection of latitude, longitude, and altitude fields which can be used to
   * specify the geometry of the coordinate space in which the laser platform(s) will
   * be operational for this request. For example, a BOX_2_WAYPOINTS would include
   * two data points, while a BOX_4_SURFACE_POINTS would include four data points.
   */
  fixedPoints?: Array<FixedPointFull>;

  /**
   * Indicates the geopotential model used in the propagation calculation for this
   * request (e.g. EGM-96, WGS-84, WGS-72, WGS66, WGS60, JGM-2, or GEM-T3).
   */
  geopotentialModel?: string;

  /**
   * Unique identifier of the on-orbit laser platform.
   */
  idOnOrbit?: string;

  /**
   * A list containing all laser illumination target object specifications for which
   * deconflictions must be calculated, as planned for this request.
   */
  laserDeconflictTargets?: Array<LaserdeconflictrequestGetResponse.LaserDeconflictTarget>;

  /**
   * The name of the laser/beam director system. The Laser Clearinghouse will append
   * identifiers to the name using standard conventions.
   */
  laserSystemName?: string;

  /**
   * The length of the centerline that passes through the center point of the
   * geospatial box that confines the positions of the laser platform, in kilometers.
   */
  lengthCenterline?: number;

  /**
   * Specifies the length of the horizontal dimension of the geospatial box that
   * confines the positions of the laser platform, in kilometers.
   */
  lengthLeftRight?: number;

  /**
   * Specifies the length of the vertical dimension of the geospatial box that
   * confines the positions of the laser platform, in kilometers.
   */
  lengthUpDown?: number;

  /**
   * The maximum laser operating altitude specified as the height above/below the
   * WGS84 ellipsoid where the laser is omitted from, in kilometers.
   */
  maximumHeight?: number;

  /**
   * The minimum laser operating altitude specified as the height above/below the
   * WGS84 ellipsoid where the laser is omitted from, in kilometers.
   */
  minimumHeight?: number;

  /**
   * The name of the mission with which this LaserDeconflictRequest is associated.
   */
  missionName?: string;

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
   * Optional identifier provided by the source provider to indicate the on-orbit
   * laser platform. This may be an internal identifier and not necessarily map to a
   * valid satellite number.
   */
  origObjectId?: string;

  /**
   * The name of the laser platform.
   */
  platformLocationName?: string;

  /**
   * Indicates the type of location(s) the laser platform will be operational for
   * this request (BOX_2_WAYPOINTS, BOX_4_SURFACE_POINTS, BOX_CENTER_POINT_LINE,
   * EXTERNAL_EPHEMERIS, FIXED_POINT, SATELLITE).
   */
  platformLocationType?: string;

  /**
   * External identifier for the program that is responsible for this
   * LaserDeconflictRequest.
   */
  programId?: string;

  /**
   * The type of propagator utilized in the deconfliction/predictive avoidance
   * calculation.
   */
  propagator?: string;

  /**
   * A list of satellite/catalog numbers that should be protected from any and all
   * incidence of laser illumination for the duration of this request.
   */
  protectList?: Array<number>;

  /**
   * The satellite/catalog number of the on-orbit laser platform.
   */
  satNo?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Boolean indicating whether error growth of the laser beam is enabled for this
   * request.
   */
  sourceEnabled?: boolean;

  /**
   * Status of this request (APPROVED, COMPLETE_WITH_ERRORS, COMPLETE_WITH_WARNINGS,
   * FAILURE, IN_PROGRESS, REQUESTED, SUCCESS).
   */
  status?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Boolean indicating whether target error growth is enabled for this request.
   */
  targetEnabled?: boolean;

  /**
   * The target type that concerns this request (BOX_2_WAYPOINTS,
   * BOX_4_SURFACE_POINTS, BOX_CENTER_POINT_LINE, EXTERNAL_EPHEMERIS, FIXED_POINT,
   * SATELLITE).
   */
  targetType?: string;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Indicates the treatment of earth (INVISIBLE, VICTIM, SHIELD) for this
   * LaserDeconflictRequest record.
   */
  treatEarthAs?: string;

  /**
   * Boolean indicating that, for deconfliction events in which the potential target
   * is an optical imaging satellite, line of sight computation between target and
   * source is ensured when the source emitter is contained within the field of
   * regard (field of view) of the satellite's optical telescope.
   */
  useFieldOfRegard?: boolean;

  /**
   * Boolean indicating whether victim error growth is enabled as input to the
   * deconfliction calculations for this request.
   */
  victimEnabled?: boolean;
}

export namespace LaserdeconflictrequestGetResponse {
  /**
   * Model representation which can be used for the specification of target object
   * for a laser operation. The specification of various target types common across
   * space-to-space, space-to-ground, and ground-to-space laser operations are
   * supported by this model.
   */
  export interface LaserDeconflictTarget {
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
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The expected or directed azimuth angle of this target, in degrees.
     */
    azimuth?: number;

    /**
     * The secondary azimuth angle specifying the end of the azimuthal range that
     * defines this target area, in degrees.
     */
    azimuthEnd?: number;

    /**
     * The incremental change in angle over the given azimuthal range at which the
     * target area will be engaged, in degrees.
     */
    azimuthIncrement?: number;

    /**
     * The initial azimuth angle specifying the start of the azimuthal range that
     * defines this target area, in degrees.
     */
    azimuthStart?: number;

    /**
     * The azimuth angle of the centerline of the geospatial box that confines
     * positions of the target, in degrees.
     */
    centerlineAzimuth?: number;

    /**
     * The elevation angle of the centerline of the geospatial box that confines the
     * positions of the target, in degrees.
     */
    centerlineElevation?: number;

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
     * The expected or directed declination angle of this target, in degrees.
     */
    declination?: number;

    /**
     * The expected or directed elevation angle of this target, in degrees.
     */
    elevation?: number;

    /**
     * The secondary elevation angle specifying the end of the elevation range that
     * defines this target area, in degrees.
     */
    elevationEnd?: number;

    /**
     * The incremental change in angle across the given elevation range at which the
     * target area will be engaged, in degrees.
     */
    elevationIncrement?: number;

    /**
     * The initial elevation angle specifying the start of the elevation range that
     * defines this target area, in degrees.
     */
    elevationStart?: number;

    /**
     * A collection of latitude, longitude, and altitude fields which can be used to
     * specify the geometry of the coordinate space of this target. For example, a
     * BOX_2_WAYPOINTS would include two data points, while a BOX_4_SURFACE_POINTS
     * would include four data points.
     */
    fixedPoints?: Array<LaserdeconflictrequestAPI.FixedPointFull>;

    /**
     * Unique identifier of the parent LaserDeconflictRequest record containing this
     * target.
     */
    idLaserDeconflictRequest?: string;

    /**
     * The length of the centerline that passes through the center point of the
     * geospatial box that confines the positions of the target, in kilometers.
     */
    lengthCenterline?: number;

    /**
     * Specifies the length of the horizontal dimension of the geospatial box that
     * confines the positions of the target, in kilometers.
     */
    lengthLeftRight?: number;

    /**
     * Specifies the length of the vertical dimension of the geospatial box that
     * confines the positions of the target, in kilometers.
     */
    lengthUpDown?: number;

    /**
     * The maximum target altitude specified as the height above/below the WGS84
     * ellipsoid, in kilometers.
     */
    maximumHeight?: number;

    /**
     * The minimum target altitude specified as the height above/below the WGS84
     * ellipsoid, in kilometers.
     */
    minimumHeight?: number;

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
     * The expected or directed right ascension angle of this target, in degrees.
     */
    ra?: number;

    /**
     * The name of the target celestial body in Earth's solar system (JUPITER, MARS,
     * MERCURY, MOON, NEPTUNE, PLUTO, SATURN, SUN, URANUS, VENUS).
     */
    solarSystemBody?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * The reference number of the target star.
     */
    starNumber?: number;

    /**
     * Start date of the time windows associated with this LaserDeconflictRequest, in
     * ISO 8601 UTC format with millisecond precision.
     */
    startDate?: string;

    /**
     * The number assigned to this target instance for a request.
     */
    targetNumber?: number;

    /**
     * Optional target identifier provided by the source provider. This may be an
     * internal identifier and not necessarily map to UDL entities.
     */
    targetObjectId?: string;

    /**
     * If this is an on-orbit target, this is the satellite/catalog number.
     */
    targetObjectNo?: number;
  }
}

export interface LaserdeconflictrequestQueryhelpResponse {
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

export type LaserdeconflictrequestTupleResponse =
  Array<LaserdeconflictrequestTupleResponse.LaserdeconflictrequestTupleResponseItem>;

export namespace LaserdeconflictrequestTupleResponse {
  /**
   * The LaserDeconflictionRequest service is designed to process and manage requests
   * related to the safe operation of high-powered lasers, ensuring that laser
   * systems do not interfere with other critical operations, such as satellite based
   * activities. The service facilitates real-time coordination between different
   * entities to prevent accidental exposure to laser hazards, ensuring compliance
   * with safety protocols and regulations.
   */
  export interface LaserdeconflictrequestTupleResponseItem {
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
     * End date of the time windows associated with this LaserDeconflictRequest, in ISO
     * 8601 UTC format with millisecond precision.
     */
    endDate: string;

    /**
     * A list containing the id strings of the LaserEmitter records in UDL detailing
     * the physical parameters of each laser/emitter operationally involved with this
     * request. All laser/emitter components must be accurately described using the
     * LaserEmitter schema and ingested into the UDL LaserEmitter service before
     * creating a LaserDeconflictRequest. Users should create new LaserEmitter records
     * for non-existent emitters and update existing records for any modifications.
     */
    idLaserEmitters: Array<string>;

    /**
     * The number of targets included in this request.
     */
    numTargets: number;

    /**
     * External identifier for this LaserDeconflictRequest record.
     */
    requestId: string;

    /**
     * The datetime that this LaserDeconflictRequest record was created, in ISO 8601
     * UTC format with millisecond precision.
     */
    requestTs: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Start date of the time windows associated with this LaserDeconflictRequest, in
     * ISO 8601 UTC format with millisecond precision.
     */
    startDate: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * The azimuth angle of the centerline of the geospatial box that confines
     * positions of the laser platform, in degrees.
     */
    centerlineAzimuth?: number;

    /**
     * The elevation angle of the centerline of the geospatial box that confines the
     * positions of the laser platform, in degrees.
     */
    centerlineElevation?: number;

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
     * The half-angle of the safety cone of the laser beam, in degrees.
     */
    defaultCHA?: number;

    /**
     * Boolean enabling Dynamic Satellite Susceptibility (DSS) algorithms.
     */
    enableDSS?: boolean;

    /**
     * A collection of latitude, longitude, and altitude fields which can be used to
     * specify the geometry of the coordinate space in which the laser platform(s) will
     * be operational for this request. For example, a BOX_2_WAYPOINTS would include
     * two data points, while a BOX_4_SURFACE_POINTS would include four data points.
     */
    fixedPoints?: Array<LaserdeconflictrequestAPI.FixedPointFull>;

    /**
     * Indicates the geopotential model used in the propagation calculation for this
     * request (e.g. EGM-96, WGS-84, WGS-72, WGS66, WGS60, JGM-2, or GEM-T3).
     */
    geopotentialModel?: string;

    /**
     * Unique identifier of the on-orbit laser platform.
     */
    idOnOrbit?: string;

    /**
     * A list containing all laser illumination target object specifications for which
     * deconflictions must be calculated, as planned for this request.
     */
    laserDeconflictTargets?: Array<LaserdeconflictrequestTupleResponseItem.LaserDeconflictTarget>;

    /**
     * The name of the laser/beam director system. The Laser Clearinghouse will append
     * identifiers to the name using standard conventions.
     */
    laserSystemName?: string;

    /**
     * The length of the centerline that passes through the center point of the
     * geospatial box that confines the positions of the laser platform, in kilometers.
     */
    lengthCenterline?: number;

    /**
     * Specifies the length of the horizontal dimension of the geospatial box that
     * confines the positions of the laser platform, in kilometers.
     */
    lengthLeftRight?: number;

    /**
     * Specifies the length of the vertical dimension of the geospatial box that
     * confines the positions of the laser platform, in kilometers.
     */
    lengthUpDown?: number;

    /**
     * The maximum laser operating altitude specified as the height above/below the
     * WGS84 ellipsoid where the laser is omitted from, in kilometers.
     */
    maximumHeight?: number;

    /**
     * The minimum laser operating altitude specified as the height above/below the
     * WGS84 ellipsoid where the laser is omitted from, in kilometers.
     */
    minimumHeight?: number;

    /**
     * The name of the mission with which this LaserDeconflictRequest is associated.
     */
    missionName?: string;

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
     * Optional identifier provided by the source provider to indicate the on-orbit
     * laser platform. This may be an internal identifier and not necessarily map to a
     * valid satellite number.
     */
    origObjectId?: string;

    /**
     * The name of the laser platform.
     */
    platformLocationName?: string;

    /**
     * Indicates the type of location(s) the laser platform will be operational for
     * this request (BOX_2_WAYPOINTS, BOX_4_SURFACE_POINTS, BOX_CENTER_POINT_LINE,
     * EXTERNAL_EPHEMERIS, FIXED_POINT, SATELLITE).
     */
    platformLocationType?: string;

    /**
     * External identifier for the program that is responsible for this
     * LaserDeconflictRequest.
     */
    programId?: string;

    /**
     * The type of propagator utilized in the deconfliction/predictive avoidance
     * calculation.
     */
    propagator?: string;

    /**
     * A list of satellite/catalog numbers that should be protected from any and all
     * incidence of laser illumination for the duration of this request.
     */
    protectList?: Array<number>;

    /**
     * The satellite/catalog number of the on-orbit laser platform.
     */
    satNo?: number;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Boolean indicating whether error growth of the laser beam is enabled for this
     * request.
     */
    sourceEnabled?: boolean;

    /**
     * Status of this request (APPROVED, COMPLETE_WITH_ERRORS, COMPLETE_WITH_WARNINGS,
     * FAILURE, IN_PROGRESS, REQUESTED, SUCCESS).
     */
    status?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Boolean indicating whether target error growth is enabled for this request.
     */
    targetEnabled?: boolean;

    /**
     * The target type that concerns this request (BOX_2_WAYPOINTS,
     * BOX_4_SURFACE_POINTS, BOX_CENTER_POINT_LINE, EXTERNAL_EPHEMERIS, FIXED_POINT,
     * SATELLITE).
     */
    targetType?: string;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Indicates the treatment of earth (INVISIBLE, VICTIM, SHIELD) for this
     * LaserDeconflictRequest record.
     */
    treatEarthAs?: string;

    /**
     * Boolean indicating that, for deconfliction events in which the potential target
     * is an optical imaging satellite, line of sight computation between target and
     * source is ensured when the source emitter is contained within the field of
     * regard (field of view) of the satellite's optical telescope.
     */
    useFieldOfRegard?: boolean;

    /**
     * Boolean indicating whether victim error growth is enabled as input to the
     * deconfliction calculations for this request.
     */
    victimEnabled?: boolean;
  }

  export namespace LaserdeconflictrequestTupleResponseItem {
    /**
     * Model representation which can be used for the specification of target object
     * for a laser operation. The specification of various target types common across
     * space-to-space, space-to-ground, and ground-to-space laser operations are
     * supported by this model.
     */
    export interface LaserDeconflictTarget {
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
       * Source of the data.
       */
      source: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * The expected or directed azimuth angle of this target, in degrees.
       */
      azimuth?: number;

      /**
       * The secondary azimuth angle specifying the end of the azimuthal range that
       * defines this target area, in degrees.
       */
      azimuthEnd?: number;

      /**
       * The incremental change in angle over the given azimuthal range at which the
       * target area will be engaged, in degrees.
       */
      azimuthIncrement?: number;

      /**
       * The initial azimuth angle specifying the start of the azimuthal range that
       * defines this target area, in degrees.
       */
      azimuthStart?: number;

      /**
       * The azimuth angle of the centerline of the geospatial box that confines
       * positions of the target, in degrees.
       */
      centerlineAzimuth?: number;

      /**
       * The elevation angle of the centerline of the geospatial box that confines the
       * positions of the target, in degrees.
       */
      centerlineElevation?: number;

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
       * The expected or directed declination angle of this target, in degrees.
       */
      declination?: number;

      /**
       * The expected or directed elevation angle of this target, in degrees.
       */
      elevation?: number;

      /**
       * The secondary elevation angle specifying the end of the elevation range that
       * defines this target area, in degrees.
       */
      elevationEnd?: number;

      /**
       * The incremental change in angle across the given elevation range at which the
       * target area will be engaged, in degrees.
       */
      elevationIncrement?: number;

      /**
       * The initial elevation angle specifying the start of the elevation range that
       * defines this target area, in degrees.
       */
      elevationStart?: number;

      /**
       * A collection of latitude, longitude, and altitude fields which can be used to
       * specify the geometry of the coordinate space of this target. For example, a
       * BOX_2_WAYPOINTS would include two data points, while a BOX_4_SURFACE_POINTS
       * would include four data points.
       */
      fixedPoints?: Array<LaserdeconflictrequestAPI.FixedPointFull>;

      /**
       * Unique identifier of the parent LaserDeconflictRequest record containing this
       * target.
       */
      idLaserDeconflictRequest?: string;

      /**
       * The length of the centerline that passes through the center point of the
       * geospatial box that confines the positions of the target, in kilometers.
       */
      lengthCenterline?: number;

      /**
       * Specifies the length of the horizontal dimension of the geospatial box that
       * confines the positions of the target, in kilometers.
       */
      lengthLeftRight?: number;

      /**
       * Specifies the length of the vertical dimension of the geospatial box that
       * confines the positions of the target, in kilometers.
       */
      lengthUpDown?: number;

      /**
       * The maximum target altitude specified as the height above/below the WGS84
       * ellipsoid, in kilometers.
       */
      maximumHeight?: number;

      /**
       * The minimum target altitude specified as the height above/below the WGS84
       * ellipsoid, in kilometers.
       */
      minimumHeight?: number;

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
       * The expected or directed right ascension angle of this target, in degrees.
       */
      ra?: number;

      /**
       * The name of the target celestial body in Earth's solar system (JUPITER, MARS,
       * MERCURY, MOON, NEPTUNE, PLUTO, SATURN, SUN, URANUS, VENUS).
       */
      solarSystemBody?: string;

      /**
       * The source data library from which this record was received. This could be a
       * remote or tactical UDL or another data library. If null, the record should be
       * assumed to have originated from the primary Enterprise UDL.
       */
      sourceDL?: string;

      /**
       * The reference number of the target star.
       */
      starNumber?: number;

      /**
       * Start date of the time windows associated with this LaserDeconflictRequest, in
       * ISO 8601 UTC format with millisecond precision.
       */
      startDate?: string;

      /**
       * The number assigned to this target instance for a request.
       */
      targetNumber?: number;

      /**
       * Optional target identifier provided by the source provider. This may be an
       * internal identifier and not necessarily map to UDL entities.
       */
      targetObjectId?: string;

      /**
       * If this is an on-orbit target, this is the satellite/catalog number.
       */
      targetObjectNo?: number;
    }
  }
}

export interface LaserdeconflictrequestCreateParams {
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
   * End date of the time windows associated with this LaserDeconflictRequest, in ISO
   * 8601 UTC format with millisecond precision.
   */
  endDate: string;

  /**
   * A list containing the id strings of the LaserEmitter records in UDL detailing
   * the physical parameters of each laser/emitter operationally involved with this
   * request. All laser/emitter components must be accurately described using the
   * LaserEmitter schema and ingested into the UDL LaserEmitter service before
   * creating a LaserDeconflictRequest. Users should create new LaserEmitter records
   * for non-existent emitters and update existing records for any modifications.
   */
  idLaserEmitters: Array<string>;

  /**
   * The number of targets included in this request.
   */
  numTargets: number;

  /**
   * External identifier for this LaserDeconflictRequest record.
   */
  requestId: string;

  /**
   * The datetime that this LaserDeconflictRequest record was created, in ISO 8601
   * UTC format with millisecond precision.
   */
  requestTs: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Start date of the time windows associated with this LaserDeconflictRequest, in
   * ISO 8601 UTC format with millisecond precision.
   */
  startDate: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * The azimuth angle of the centerline of the geospatial box that confines
   * positions of the laser platform, in degrees.
   */
  centerlineAzimuth?: number;

  /**
   * The elevation angle of the centerline of the geospatial box that confines the
   * positions of the laser platform, in degrees.
   */
  centerlineElevation?: number;

  /**
   * The half-angle of the safety cone of the laser beam, in degrees.
   */
  defaultCHA?: number;

  /**
   * Boolean enabling Dynamic Satellite Susceptibility (DSS) algorithms.
   */
  enableDSS?: boolean;

  /**
   * A collection of latitude, longitude, and altitude fields which can be used to
   * specify the geometry of the coordinate space in which the laser platform(s) will
   * be operational for this request. For example, a BOX_2_WAYPOINTS would include
   * two data points, while a BOX_4_SURFACE_POINTS would include four data points.
   */
  fixedPoints?: Array<LaserdeconflictrequestCreateParams.FixedPoint>;

  /**
   * Indicates the geopotential model used in the propagation calculation for this
   * request (e.g. EGM-96, WGS-84, WGS-72, WGS66, WGS60, JGM-2, or GEM-T3).
   */
  geopotentialModel?: string;

  /**
   * A list containing all laser illumination target object specifications for which
   * deconflictions must be calculated, as planned for this request.
   */
  laserDeconflictTargets?: Array<LaserdeconflictrequestCreateParams.LaserDeconflictTarget>;

  /**
   * The name of the laser/beam director system. The Laser Clearinghouse will append
   * identifiers to the name using standard conventions.
   */
  laserSystemName?: string;

  /**
   * The length of the centerline that passes through the center point of the
   * geospatial box that confines the positions of the laser platform, in kilometers.
   */
  lengthCenterline?: number;

  /**
   * Specifies the length of the horizontal dimension of the geospatial box that
   * confines the positions of the laser platform, in kilometers.
   */
  lengthLeftRight?: number;

  /**
   * Specifies the length of the vertical dimension of the geospatial box that
   * confines the positions of the laser platform, in kilometers.
   */
  lengthUpDown?: number;

  /**
   * The maximum laser operating altitude specified as the height above/below the
   * WGS84 ellipsoid where the laser is omitted from, in kilometers.
   */
  maximumHeight?: number;

  /**
   * The minimum laser operating altitude specified as the height above/below the
   * WGS84 ellipsoid where the laser is omitted from, in kilometers.
   */
  minimumHeight?: number;

  /**
   * The name of the mission with which this LaserDeconflictRequest is associated.
   */
  missionName?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by the source provider to indicate the on-orbit
   * laser platform. This may be an internal identifier and not necessarily map to a
   * valid satellite number.
   */
  origObjectId?: string;

  /**
   * The name of the laser platform.
   */
  platformLocationName?: string;

  /**
   * Indicates the type of location(s) the laser platform will be operational for
   * this request (BOX_2_WAYPOINTS, BOX_4_SURFACE_POINTS, BOX_CENTER_POINT_LINE,
   * EXTERNAL_EPHEMERIS, FIXED_POINT, SATELLITE).
   */
  platformLocationType?: string;

  /**
   * External identifier for the program that is responsible for this
   * LaserDeconflictRequest.
   */
  programId?: string;

  /**
   * The type of propagator utilized in the deconfliction/predictive avoidance
   * calculation.
   */
  propagator?: string;

  /**
   * A list of satellite/catalog numbers that should be protected from any and all
   * incidence of laser illumination for the duration of this request.
   */
  protectList?: Array<number>;

  /**
   * The satellite/catalog number of the on-orbit laser platform.
   */
  satNo?: number;

  /**
   * Boolean indicating whether error growth of the laser beam is enabled for this
   * request.
   */
  sourceEnabled?: boolean;

  /**
   * Status of this request (APPROVED, COMPLETE_WITH_ERRORS, COMPLETE_WITH_WARNINGS,
   * FAILURE, IN_PROGRESS, REQUESTED, SUCCESS).
   */
  status?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Boolean indicating whether target error growth is enabled for this request.
   */
  targetEnabled?: boolean;

  /**
   * The target type that concerns this request (BOX_2_WAYPOINTS,
   * BOX_4_SURFACE_POINTS, BOX_CENTER_POINT_LINE, EXTERNAL_EPHEMERIS, FIXED_POINT,
   * SATELLITE).
   */
  targetType?: string;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Indicates the treatment of earth (INVISIBLE, VICTIM, SHIELD) for this
   * LaserDeconflictRequest record.
   */
  treatEarthAs?: string;

  /**
   * Boolean indicating that, for deconfliction events in which the potential target
   * is an optical imaging satellite, line of sight computation between target and
   * source is ensured when the source emitter is contained within the field of
   * regard (field of view) of the satellite's optical telescope.
   */
  useFieldOfRegard?: boolean;

  /**
   * Boolean indicating whether victim error growth is enabled as input to the
   * deconfliction calculations for this request.
   */
  victimEnabled?: boolean;
}

export namespace LaserdeconflictrequestCreateParams {
  export interface FixedPoint {
    /**
     * WGS84 latitude of a point, in degrees. -90 to 90 degrees (negative values south
     * of equator).
     */
    latitude: number;

    /**
     * WGS84 longitude of a point, in degrees. -180 to 180 degrees (negative values
     * west of Prime Meridian).
     */
    longitude: number;

    /**
     * Point height as measured from sea level, ranging from -300 to 1000 kilometers.
     */
    height?: number;
  }

  /**
   * Model representation which can be used for the specification of target object
   * for a laser operation. The specification of various target types common across
   * space-to-space, space-to-ground, and ground-to-space laser operations are
   * supported by this model.
   */
  export interface LaserDeconflictTarget {
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
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The expected or directed azimuth angle of this target, in degrees.
     */
    azimuth?: number;

    /**
     * The secondary azimuth angle specifying the end of the azimuthal range that
     * defines this target area, in degrees.
     */
    azimuthEnd?: number;

    /**
     * The incremental change in angle over the given azimuthal range at which the
     * target area will be engaged, in degrees.
     */
    azimuthIncrement?: number;

    /**
     * The initial azimuth angle specifying the start of the azimuthal range that
     * defines this target area, in degrees.
     */
    azimuthStart?: number;

    /**
     * The azimuth angle of the centerline of the geospatial box that confines
     * positions of the target, in degrees.
     */
    centerlineAzimuth?: number;

    /**
     * The elevation angle of the centerline of the geospatial box that confines the
     * positions of the target, in degrees.
     */
    centerlineElevation?: number;

    /**
     * The expected or directed declination angle of this target, in degrees.
     */
    declination?: number;

    /**
     * The expected or directed elevation angle of this target, in degrees.
     */
    elevation?: number;

    /**
     * The secondary elevation angle specifying the end of the elevation range that
     * defines this target area, in degrees.
     */
    elevationEnd?: number;

    /**
     * The incremental change in angle across the given elevation range at which the
     * target area will be engaged, in degrees.
     */
    elevationIncrement?: number;

    /**
     * The initial elevation angle specifying the start of the elevation range that
     * defines this target area, in degrees.
     */
    elevationStart?: number;

    /**
     * A collection of latitude, longitude, and altitude fields which can be used to
     * specify the geometry of the coordinate space of this target. For example, a
     * BOX_2_WAYPOINTS would include two data points, while a BOX_4_SURFACE_POINTS
     * would include four data points.
     */
    fixedPoints?: Array<LaserDeconflictTarget.FixedPoint>;

    /**
     * Unique identifier of the parent LaserDeconflictRequest record containing this
     * target.
     */
    idLaserDeconflictRequest?: string;

    /**
     * The length of the centerline that passes through the center point of the
     * geospatial box that confines the positions of the target, in kilometers.
     */
    lengthCenterline?: number;

    /**
     * Specifies the length of the horizontal dimension of the geospatial box that
     * confines the positions of the target, in kilometers.
     */
    lengthLeftRight?: number;

    /**
     * Specifies the length of the vertical dimension of the geospatial box that
     * confines the positions of the target, in kilometers.
     */
    lengthUpDown?: number;

    /**
     * The maximum target altitude specified as the height above/below the WGS84
     * ellipsoid, in kilometers.
     */
    maximumHeight?: number;

    /**
     * The minimum target altitude specified as the height above/below the WGS84
     * ellipsoid, in kilometers.
     */
    minimumHeight?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The expected or directed right ascension angle of this target, in degrees.
     */
    ra?: number;

    /**
     * The name of the target celestial body in Earth's solar system (JUPITER, MARS,
     * MERCURY, MOON, NEPTUNE, PLUTO, SATURN, SUN, URANUS, VENUS).
     */
    solarSystemBody?: string;

    /**
     * The reference number of the target star.
     */
    starNumber?: number;

    /**
     * The number assigned to this target instance for a request.
     */
    targetNumber?: number;

    /**
     * If this is an on-orbit target, this is the satellite/catalog number.
     */
    targetObjectNo?: number;
  }

  export namespace LaserDeconflictTarget {
    export interface FixedPoint {
      /**
       * WGS84 latitude of a point, in degrees. -90 to 90 degrees (negative values south
       * of equator).
       */
      latitude: number;

      /**
       * WGS84 longitude of a point, in degrees. -180 to 180 degrees (negative values
       * west of Prime Meridian).
       */
      longitude: number;

      /**
       * Point height as measured from sea level, ranging from -300 to 1000 kilometers.
       */
      height?: number;
    }
  }
}

export interface LaserdeconflictrequestListParams extends OffsetPageParams {
  /**
   * Start date of the time windows associated with this LaserDeconflictRequest, in
   * ISO 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startDate: string;
}

export interface LaserdeconflictrequestCountParams {
  /**
   * Start date of the time windows associated with this LaserDeconflictRequest, in
   * ISO 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startDate: string;

  firstResult?: number;

  maxResults?: number;
}

export interface LaserdeconflictrequestGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface LaserdeconflictrequestTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Start date of the time windows associated with this LaserDeconflictRequest, in
   * ISO 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startDate: string;

  firstResult?: number;

  maxResults?: number;
}

export interface LaserdeconflictrequestUnvalidatedPublishParams {
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
   * End date of the time windows associated with this LaserDeconflictRequest, in ISO
   * 8601 UTC format with millisecond precision.
   */
  endDate: string;

  /**
   * A list containing the id strings of the LaserEmitter records in UDL detailing
   * the physical parameters of each laser/emitter operationally involved with this
   * request. All laser/emitter components must be accurately described using the
   * LaserEmitter schema and ingested into the UDL LaserEmitter service before
   * creating a LaserDeconflictRequest. Users should create new LaserEmitter records
   * for non-existent emitters and update existing records for any modifications.
   */
  idLaserEmitters: Array<string>;

  /**
   * The number of targets included in this request.
   */
  numTargets: number;

  /**
   * External identifier for this LaserDeconflictRequest record.
   */
  requestId: string;

  /**
   * The datetime that this LaserDeconflictRequest record was created, in ISO 8601
   * UTC format with millisecond precision.
   */
  requestTs: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Start date of the time windows associated with this LaserDeconflictRequest, in
   * ISO 8601 UTC format with millisecond precision.
   */
  startDate: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * The azimuth angle of the centerline of the geospatial box that confines
   * positions of the laser platform, in degrees.
   */
  centerlineAzimuth?: number;

  /**
   * The elevation angle of the centerline of the geospatial box that confines the
   * positions of the laser platform, in degrees.
   */
  centerlineElevation?: number;

  /**
   * The half-angle of the safety cone of the laser beam, in degrees.
   */
  defaultCHA?: number;

  /**
   * Boolean enabling Dynamic Satellite Susceptibility (DSS) algorithms.
   */
  enableDSS?: boolean;

  /**
   * A collection of latitude, longitude, and altitude fields which can be used to
   * specify the geometry of the coordinate space in which the laser platform(s) will
   * be operational for this request. For example, a BOX_2_WAYPOINTS would include
   * two data points, while a BOX_4_SURFACE_POINTS would include four data points.
   */
  fixedPoints?: Array<LaserdeconflictrequestUnvalidatedPublishParams.FixedPoint>;

  /**
   * Indicates the geopotential model used in the propagation calculation for this
   * request (e.g. EGM-96, WGS-84, WGS-72, WGS66, WGS60, JGM-2, or GEM-T3).
   */
  geopotentialModel?: string;

  /**
   * A list containing all laser illumination target object specifications for which
   * deconflictions must be calculated, as planned for this request.
   */
  laserDeconflictTargets?: Array<LaserdeconflictrequestUnvalidatedPublishParams.LaserDeconflictTarget>;

  /**
   * The name of the laser/beam director system. The Laser Clearinghouse will append
   * identifiers to the name using standard conventions.
   */
  laserSystemName?: string;

  /**
   * The length of the centerline that passes through the center point of the
   * geospatial box that confines the positions of the laser platform, in kilometers.
   */
  lengthCenterline?: number;

  /**
   * Specifies the length of the horizontal dimension of the geospatial box that
   * confines the positions of the laser platform, in kilometers.
   */
  lengthLeftRight?: number;

  /**
   * Specifies the length of the vertical dimension of the geospatial box that
   * confines the positions of the laser platform, in kilometers.
   */
  lengthUpDown?: number;

  /**
   * The maximum laser operating altitude specified as the height above/below the
   * WGS84 ellipsoid where the laser is omitted from, in kilometers.
   */
  maximumHeight?: number;

  /**
   * The minimum laser operating altitude specified as the height above/below the
   * WGS84 ellipsoid where the laser is omitted from, in kilometers.
   */
  minimumHeight?: number;

  /**
   * The name of the mission with which this LaserDeconflictRequest is associated.
   */
  missionName?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by the source provider to indicate the on-orbit
   * laser platform. This may be an internal identifier and not necessarily map to a
   * valid satellite number.
   */
  origObjectId?: string;

  /**
   * The name of the laser platform.
   */
  platformLocationName?: string;

  /**
   * Indicates the type of location(s) the laser platform will be operational for
   * this request (BOX_2_WAYPOINTS, BOX_4_SURFACE_POINTS, BOX_CENTER_POINT_LINE,
   * EXTERNAL_EPHEMERIS, FIXED_POINT, SATELLITE).
   */
  platformLocationType?: string;

  /**
   * External identifier for the program that is responsible for this
   * LaserDeconflictRequest.
   */
  programId?: string;

  /**
   * The type of propagator utilized in the deconfliction/predictive avoidance
   * calculation.
   */
  propagator?: string;

  /**
   * A list of satellite/catalog numbers that should be protected from any and all
   * incidence of laser illumination for the duration of this request.
   */
  protectList?: Array<number>;

  /**
   * The satellite/catalog number of the on-orbit laser platform.
   */
  satNo?: number;

  /**
   * Boolean indicating whether error growth of the laser beam is enabled for this
   * request.
   */
  sourceEnabled?: boolean;

  /**
   * Status of this request (APPROVED, COMPLETE_WITH_ERRORS, COMPLETE_WITH_WARNINGS,
   * FAILURE, IN_PROGRESS, REQUESTED, SUCCESS).
   */
  status?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Boolean indicating whether target error growth is enabled for this request.
   */
  targetEnabled?: boolean;

  /**
   * The target type that concerns this request (BOX_2_WAYPOINTS,
   * BOX_4_SURFACE_POINTS, BOX_CENTER_POINT_LINE, EXTERNAL_EPHEMERIS, FIXED_POINT,
   * SATELLITE).
   */
  targetType?: string;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Indicates the treatment of earth (INVISIBLE, VICTIM, SHIELD) for this
   * LaserDeconflictRequest record.
   */
  treatEarthAs?: string;

  /**
   * Boolean indicating that, for deconfliction events in which the potential target
   * is an optical imaging satellite, line of sight computation between target and
   * source is ensured when the source emitter is contained within the field of
   * regard (field of view) of the satellite's optical telescope.
   */
  useFieldOfRegard?: boolean;

  /**
   * Boolean indicating whether victim error growth is enabled as input to the
   * deconfliction calculations for this request.
   */
  victimEnabled?: boolean;
}

export namespace LaserdeconflictrequestUnvalidatedPublishParams {
  export interface FixedPoint {
    /**
     * WGS84 latitude of a point, in degrees. -90 to 90 degrees (negative values south
     * of equator).
     */
    latitude: number;

    /**
     * WGS84 longitude of a point, in degrees. -180 to 180 degrees (negative values
     * west of Prime Meridian).
     */
    longitude: number;

    /**
     * Point height as measured from sea level, ranging from -300 to 1000 kilometers.
     */
    height?: number;
  }

  /**
   * Model representation which can be used for the specification of target object
   * for a laser operation. The specification of various target types common across
   * space-to-space, space-to-ground, and ground-to-space laser operations are
   * supported by this model.
   */
  export interface LaserDeconflictTarget {
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
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The expected or directed azimuth angle of this target, in degrees.
     */
    azimuth?: number;

    /**
     * The secondary azimuth angle specifying the end of the azimuthal range that
     * defines this target area, in degrees.
     */
    azimuthEnd?: number;

    /**
     * The incremental change in angle over the given azimuthal range at which the
     * target area will be engaged, in degrees.
     */
    azimuthIncrement?: number;

    /**
     * The initial azimuth angle specifying the start of the azimuthal range that
     * defines this target area, in degrees.
     */
    azimuthStart?: number;

    /**
     * The azimuth angle of the centerline of the geospatial box that confines
     * positions of the target, in degrees.
     */
    centerlineAzimuth?: number;

    /**
     * The elevation angle of the centerline of the geospatial box that confines the
     * positions of the target, in degrees.
     */
    centerlineElevation?: number;

    /**
     * The expected or directed declination angle of this target, in degrees.
     */
    declination?: number;

    /**
     * The expected or directed elevation angle of this target, in degrees.
     */
    elevation?: number;

    /**
     * The secondary elevation angle specifying the end of the elevation range that
     * defines this target area, in degrees.
     */
    elevationEnd?: number;

    /**
     * The incremental change in angle across the given elevation range at which the
     * target area will be engaged, in degrees.
     */
    elevationIncrement?: number;

    /**
     * The initial elevation angle specifying the start of the elevation range that
     * defines this target area, in degrees.
     */
    elevationStart?: number;

    /**
     * A collection of latitude, longitude, and altitude fields which can be used to
     * specify the geometry of the coordinate space of this target. For example, a
     * BOX_2_WAYPOINTS would include two data points, while a BOX_4_SURFACE_POINTS
     * would include four data points.
     */
    fixedPoints?: Array<LaserDeconflictTarget.FixedPoint>;

    /**
     * Unique identifier of the parent LaserDeconflictRequest record containing this
     * target.
     */
    idLaserDeconflictRequest?: string;

    /**
     * The length of the centerline that passes through the center point of the
     * geospatial box that confines the positions of the target, in kilometers.
     */
    lengthCenterline?: number;

    /**
     * Specifies the length of the horizontal dimension of the geospatial box that
     * confines the positions of the target, in kilometers.
     */
    lengthLeftRight?: number;

    /**
     * Specifies the length of the vertical dimension of the geospatial box that
     * confines the positions of the target, in kilometers.
     */
    lengthUpDown?: number;

    /**
     * The maximum target altitude specified as the height above/below the WGS84
     * ellipsoid, in kilometers.
     */
    maximumHeight?: number;

    /**
     * The minimum target altitude specified as the height above/below the WGS84
     * ellipsoid, in kilometers.
     */
    minimumHeight?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The expected or directed right ascension angle of this target, in degrees.
     */
    ra?: number;

    /**
     * The name of the target celestial body in Earth's solar system (JUPITER, MARS,
     * MERCURY, MOON, NEPTUNE, PLUTO, SATURN, SUN, URANUS, VENUS).
     */
    solarSystemBody?: string;

    /**
     * The reference number of the target star.
     */
    starNumber?: number;

    /**
     * The number assigned to this target instance for a request.
     */
    targetNumber?: number;

    /**
     * If this is an on-orbit target, this is the satellite/catalog number.
     */
    targetObjectNo?: number;
  }

  export namespace LaserDeconflictTarget {
    export interface FixedPoint {
      /**
       * WGS84 latitude of a point, in degrees. -90 to 90 degrees (negative values south
       * of equator).
       */
      latitude: number;

      /**
       * WGS84 longitude of a point, in degrees. -180 to 180 degrees (negative values
       * west of Prime Meridian).
       */
      longitude: number;

      /**
       * Point height as measured from sea level, ranging from -300 to 1000 kilometers.
       */
      height?: number;
    }
  }
}

Laserdeconflictrequest.History = History;

export declare namespace Laserdeconflictrequest {
  export {
    type FixedPointFull as FixedPointFull,
    type LaserdeconflictrequestListResponse as LaserdeconflictrequestListResponse,
    type LaserdeconflictrequestCountResponse as LaserdeconflictrequestCountResponse,
    type LaserdeconflictrequestGetResponse as LaserdeconflictrequestGetResponse,
    type LaserdeconflictrequestQueryhelpResponse as LaserdeconflictrequestQueryhelpResponse,
    type LaserdeconflictrequestTupleResponse as LaserdeconflictrequestTupleResponse,
    type LaserdeconflictrequestListResponsesOffsetPage as LaserdeconflictrequestListResponsesOffsetPage,
    type LaserdeconflictrequestCreateParams as LaserdeconflictrequestCreateParams,
    type LaserdeconflictrequestListParams as LaserdeconflictrequestListParams,
    type LaserdeconflictrequestCountParams as LaserdeconflictrequestCountParams,
    type LaserdeconflictrequestGetParams as LaserdeconflictrequestGetParams,
    type LaserdeconflictrequestTupleParams as LaserdeconflictrequestTupleParams,
    type LaserdeconflictrequestUnvalidatedPublishParams as LaserdeconflictrequestUnvalidatedPublishParams,
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
