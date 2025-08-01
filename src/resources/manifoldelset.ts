// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Manifoldelset extends APIResource {
  /**
   * Service operation to take a single ManifoldElset as a POST body and ingest into
   * the database. A ManifoldElset represents theoretical Keplarian orbital elements
   * belonging to an object of interest's manifold describing a possible/theoretical
   * orbit for an object of interest for tasking purposes. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.manifoldelset.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   epoch: '2021-01-01T01:01:01.123456Z',
   *   idManifold: 'REF-MANIFOLD-ID',
   *   source: 'Bluestaq',
   *   tmpSatNo: 10,
   * });
   * ```
   */
  create(body: ManifoldelsetCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/manifoldelset', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single ManifoldElset. A ManifoldElset represents
   * theoretical Keplarian orbital elements belonging to an object of interest's
   * manifold describing a possible/theoretical orbit for an object of interest for
   * tasking purposes. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.manifoldelset.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   epoch: '2021-01-01T01:01:01.123456Z',
   *   idManifold: 'REF-MANIFOLD-ID',
   *   source: 'Bluestaq',
   *   tmpSatNo: 10,
   * });
   * ```
   */
  update(pathID: string, body: ManifoldelsetUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/manifoldelset/${pathID}`, {
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
   * for await (const manifoldelsetListResponse of client.manifoldelset.list(
   *   { epoch: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ManifoldelsetListParams,
    options?: RequestOptions,
  ): PagePromise<ManifoldelsetListResponsesOffsetPage, ManifoldelsetListResponse> {
    return this._client.getAPIList('/udl/manifoldelset', OffsetPage<ManifoldelsetListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a ManifoldElset object specified by the passed ID
   * path parameter. A ManifoldElset represents theoretical Keplarian orbital
   * elements belonging to an object of interest's manifold describing a
   * possible/theoretical orbit for an object of interest for tasking purposes. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.manifoldelset.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/manifoldelset/${id}`, {
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
   * const response = await client.manifoldelset.count({
   *   epoch: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: ManifoldelsetCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/manifoldelset/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to take multiple ManifoldElsets as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.manifoldelset.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       epoch: '2021-01-01T01:01:01.123456Z',
   *       idManifold: 'REF-MANIFOLD-ID',
   *       source: 'Bluestaq',
   *       tmpSatNo: 10,
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: ManifoldelsetCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/manifoldelset/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single ManifoldElset record by its unique ID passed
   * as a path parameter. A ManifoldElset represents theoretical Keplarian orbital
   * elements belonging to an object of interest's manifold describing a
   * possible/theoretical orbit for an object of interest for tasking purposes.
   *
   * @example
   * ```ts
   * const manifoldelset = await client.manifoldelset.get('id');
   * ```
   */
  get(
    id: string,
    query: ManifoldelsetGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ManifoldelsetGetResponse> {
    return this._client.get(path`/udl/manifoldelset/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.manifoldelset.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<ManifoldelsetQueryhelpResponse> {
    return this._client.get('/udl/manifoldelset/queryhelp', options);
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
   * const response = await client.manifoldelset.tuple({
   *   columns: 'columns',
   *   epoch: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: ManifoldelsetTupleParams, options?: RequestOptions): APIPromise<ManifoldelsetTupleResponse> {
    return this._client.get('/udl/manifoldelset/tuple', { query, ...options });
  }
}

export type ManifoldelsetListResponsesOffsetPage = OffsetPage<ManifoldelsetListResponse>;

/**
 * Theoretical Keplarian orbital elements belonging to an object of interest's
 * manifold describing a possible/theoretical orbit for an object of interest for
 * tasking purposes.
 */
export interface ManifoldelsetListResponse {
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
   * Elset epoch time in ISO 8601 UTC format, with microsecond precision.
   */
  epoch: string;

  /**
   * Identifier of the parent Manifold record.
   */
  idManifold: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * A placeholder satellite number and not a true NORAD catalog number.
   */
  tmpSatNo: number;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The Orbit point furthest from the center of the earth in kilometers.
   */
  apogee?: number;

  /**
   * The argument of perigee is the angle in degrees formed between the perigee and
   * the ascending node. If the perigee would occur at the ascending node, the
   * argument of perigee would be 0.
   */
  argOfPerigee?: number;

  /**
   * The drag term for SGP4 orbital model, used for calculating decay constants for
   * altitude, eccentricity etc, measured in inverse earth radii.
   */
  bStar?: number;

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
   * The orbital eccentricity of an astronomical object is a parameter that
   * determines the amount by which its orbit around another body deviates from a
   * perfect circle. A value of 0 is a circular orbit, values between 0 and 1 form an
   * elliptic orbit, 1 is a parabolic escape orbit, and greater than 1 is a
   * hyperbolic escape orbit.
   */
  eccentricity?: number;

  /**
   * The angle between the equator and the orbit when looking from the center of the
   * Earth. If the orbit went exactly around the equator from left to right, then the
   * inclination would be 0. The inclination ranges from 0 to 180 degrees.
   */
  inclination?: number;

  /**
   * Read only derived/generated line1 of a legacy TLE (two line element set) format,
   * ignored on create/edit operations.
   */
  line1?: string;

  /**
   * Read only derived/generated line2 of a legacy TLE (two line element set) format,
   * ignored on create/edit operations.
   */
  line2?: string;

  /**
   * Where the satellite is in its orbital path. The mean anomaly ranges from 0 to
   * 360 degrees. The mean anomaly is referenced to the perigee. If the satellite
   * were at the perigee, the mean anomaly would be 0.
   */
  meanAnomaly?: number;

  /**
   * The constant angular speed required for the body to complete one circular orbit
   * in the same amount of time as the actual elliptical orbit with variable speed.
   * Measured in revolutions per day.
   */
  meanMotion?: number;

  /**
   * 2nd derivative of the mean motion with respect to time. Units are revolutions
   * per day cubed.
   */
  meanMotionDDot?: number;

  /**
   * 1st derivative of the mean motion with respect to time. Units are revolutions
   * per day squared.
   */
  meanMotionDot?: number;

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
   * The orbit point nearest to the center of the earth in kilometers.
   */
  perigee?: number;

  /**
   * Period of the orbit equal to inverse of mean motion.
   */
  period?: number;

  /**
   * Right ascension of the ascending node, or RAAN is the angle as measured in
   * degrees eastwards (or, as seen from the north, counterclockwise) from the First
   * Point of Aries to the ascending node, which is where the orbit crosses the
   * equator when traveling north.
   */
  raan?: number;

  /**
   * The current revolution number. The value is incremented when a satellite crosses
   * the equator on an ascending pass.
   */
  revNo?: number;

  /**
   * The sum of the periapsis and apoapsis distances divided by two. For circular
   * orbits, the semimajor axis is the distance between the centers of the bodies,
   * not the distance of the bodies from the center of mass.
   */
  semiMajorAxis?: number;
}

export type ManifoldelsetCountResponse = string;

/**
 * Theoretical Keplarian orbital elements belonging to an object of interest's
 * manifold describing a possible/theoretical orbit for an object of interest for
 * tasking purposes.
 */
export interface ManifoldelsetGetResponse {
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
   * Elset epoch time in ISO 8601 UTC format, with microsecond precision.
   */
  epoch: string;

  /**
   * Identifier of the parent Manifold record.
   */
  idManifold: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * A placeholder satellite number and not a true NORAD catalog number.
   */
  tmpSatNo: number;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The Orbit point furthest from the center of the earth in kilometers.
   */
  apogee?: number;

  /**
   * The argument of perigee is the angle in degrees formed between the perigee and
   * the ascending node. If the perigee would occur at the ascending node, the
   * argument of perigee would be 0.
   */
  argOfPerigee?: number;

  /**
   * The drag term for SGP4 orbital model, used for calculating decay constants for
   * altitude, eccentricity etc, measured in inverse earth radii.
   */
  bStar?: number;

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
   * The orbital eccentricity of an astronomical object is a parameter that
   * determines the amount by which its orbit around another body deviates from a
   * perfect circle. A value of 0 is a circular orbit, values between 0 and 1 form an
   * elliptic orbit, 1 is a parabolic escape orbit, and greater than 1 is a
   * hyperbolic escape orbit.
   */
  eccentricity?: number;

  /**
   * The angle between the equator and the orbit when looking from the center of the
   * Earth. If the orbit went exactly around the equator from left to right, then the
   * inclination would be 0. The inclination ranges from 0 to 180 degrees.
   */
  inclination?: number;

  /**
   * Read only derived/generated line1 of a legacy TLE (two line element set) format,
   * ignored on create/edit operations.
   */
  line1?: string;

  /**
   * Read only derived/generated line2 of a legacy TLE (two line element set) format,
   * ignored on create/edit operations.
   */
  line2?: string;

  /**
   * Where the satellite is in its orbital path. The mean anomaly ranges from 0 to
   * 360 degrees. The mean anomaly is referenced to the perigee. If the satellite
   * were at the perigee, the mean anomaly would be 0.
   */
  meanAnomaly?: number;

  /**
   * The constant angular speed required for the body to complete one circular orbit
   * in the same amount of time as the actual elliptical orbit with variable speed.
   * Measured in revolutions per day.
   */
  meanMotion?: number;

  /**
   * 2nd derivative of the mean motion with respect to time. Units are revolutions
   * per day cubed.
   */
  meanMotionDDot?: number;

  /**
   * 1st derivative of the mean motion with respect to time. Units are revolutions
   * per day squared.
   */
  meanMotionDot?: number;

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
   * The orbit point nearest to the center of the earth in kilometers.
   */
  perigee?: number;

  /**
   * Period of the orbit equal to inverse of mean motion.
   */
  period?: number;

  /**
   * Right ascension of the ascending node, or RAAN is the angle as measured in
   * degrees eastwards (or, as seen from the north, counterclockwise) from the First
   * Point of Aries to the ascending node, which is where the orbit crosses the
   * equator when traveling north.
   */
  raan?: number;

  /**
   * The current revolution number. The value is incremented when a satellite crosses
   * the equator on an ascending pass.
   */
  revNo?: number;

  /**
   * The sum of the periapsis and apoapsis distances divided by two. For circular
   * orbits, the semimajor axis is the distance between the centers of the bodies,
   * not the distance of the bodies from the center of mass.
   */
  semiMajorAxis?: number;

  /**
   * Read-only time the row was updated in the database, set automatically by the
   * system on update.
   */
  updatedAt?: string;

  /**
   * Application user who last updated the row in the database, set by the system
   * automatically and ignored on create/edit operations.
   */
  updatedBy?: string;
}

export interface ManifoldelsetQueryhelpResponse {
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

export type ManifoldelsetTupleResponse = Array<ManifoldelsetTupleResponse.ManifoldelsetTupleResponseItem>;

export namespace ManifoldelsetTupleResponse {
  /**
   * Theoretical Keplarian orbital elements belonging to an object of interest's
   * manifold describing a possible/theoretical orbit for an object of interest for
   * tasking purposes.
   */
  export interface ManifoldelsetTupleResponseItem {
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
     * Elset epoch time in ISO 8601 UTC format, with microsecond precision.
     */
    epoch: string;

    /**
     * Identifier of the parent Manifold record.
     */
    idManifold: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * A placeholder satellite number and not a true NORAD catalog number.
     */
    tmpSatNo: number;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The Orbit point furthest from the center of the earth in kilometers.
     */
    apogee?: number;

    /**
     * The argument of perigee is the angle in degrees formed between the perigee and
     * the ascending node. If the perigee would occur at the ascending node, the
     * argument of perigee would be 0.
     */
    argOfPerigee?: number;

    /**
     * The drag term for SGP4 orbital model, used for calculating decay constants for
     * altitude, eccentricity etc, measured in inverse earth radii.
     */
    bStar?: number;

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
     * The orbital eccentricity of an astronomical object is a parameter that
     * determines the amount by which its orbit around another body deviates from a
     * perfect circle. A value of 0 is a circular orbit, values between 0 and 1 form an
     * elliptic orbit, 1 is a parabolic escape orbit, and greater than 1 is a
     * hyperbolic escape orbit.
     */
    eccentricity?: number;

    /**
     * The angle between the equator and the orbit when looking from the center of the
     * Earth. If the orbit went exactly around the equator from left to right, then the
     * inclination would be 0. The inclination ranges from 0 to 180 degrees.
     */
    inclination?: number;

    /**
     * Read only derived/generated line1 of a legacy TLE (two line element set) format,
     * ignored on create/edit operations.
     */
    line1?: string;

    /**
     * Read only derived/generated line2 of a legacy TLE (two line element set) format,
     * ignored on create/edit operations.
     */
    line2?: string;

    /**
     * Where the satellite is in its orbital path. The mean anomaly ranges from 0 to
     * 360 degrees. The mean anomaly is referenced to the perigee. If the satellite
     * were at the perigee, the mean anomaly would be 0.
     */
    meanAnomaly?: number;

    /**
     * The constant angular speed required for the body to complete one circular orbit
     * in the same amount of time as the actual elliptical orbit with variable speed.
     * Measured in revolutions per day.
     */
    meanMotion?: number;

    /**
     * 2nd derivative of the mean motion with respect to time. Units are revolutions
     * per day cubed.
     */
    meanMotionDDot?: number;

    /**
     * 1st derivative of the mean motion with respect to time. Units are revolutions
     * per day squared.
     */
    meanMotionDot?: number;

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
     * The orbit point nearest to the center of the earth in kilometers.
     */
    perigee?: number;

    /**
     * Period of the orbit equal to inverse of mean motion.
     */
    period?: number;

    /**
     * Right ascension of the ascending node, or RAAN is the angle as measured in
     * degrees eastwards (or, as seen from the north, counterclockwise) from the First
     * Point of Aries to the ascending node, which is where the orbit crosses the
     * equator when traveling north.
     */
    raan?: number;

    /**
     * The current revolution number. The value is incremented when a satellite crosses
     * the equator on an ascending pass.
     */
    revNo?: number;

    /**
     * The sum of the periapsis and apoapsis distances divided by two. For circular
     * orbits, the semimajor axis is the distance between the centers of the bodies,
     * not the distance of the bodies from the center of mass.
     */
    semiMajorAxis?: number;

    /**
     * Read-only time the row was updated in the database, set automatically by the
     * system on update.
     */
    updatedAt?: string;

    /**
     * Application user who last updated the row in the database, set by the system
     * automatically and ignored on create/edit operations.
     */
    updatedBy?: string;
  }
}

export interface ManifoldelsetCreateParams {
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
   * Elset epoch time in ISO 8601 UTC format, with microsecond precision.
   */
  epoch: string;

  /**
   * Identifier of the parent Manifold record.
   */
  idManifold: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * A placeholder satellite number and not a true NORAD catalog number.
   */
  tmpSatNo: number;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The Orbit point furthest from the center of the earth in kilometers.
   */
  apogee?: number;

  /**
   * The argument of perigee is the angle in degrees formed between the perigee and
   * the ascending node. If the perigee would occur at the ascending node, the
   * argument of perigee would be 0.
   */
  argOfPerigee?: number;

  /**
   * The drag term for SGP4 orbital model, used for calculating decay constants for
   * altitude, eccentricity etc, measured in inverse earth radii.
   */
  bStar?: number;

  /**
   * The orbital eccentricity of an astronomical object is a parameter that
   * determines the amount by which its orbit around another body deviates from a
   * perfect circle. A value of 0 is a circular orbit, values between 0 and 1 form an
   * elliptic orbit, 1 is a parabolic escape orbit, and greater than 1 is a
   * hyperbolic escape orbit.
   */
  eccentricity?: number;

  /**
   * The angle between the equator and the orbit when looking from the center of the
   * Earth. If the orbit went exactly around the equator from left to right, then the
   * inclination would be 0. The inclination ranges from 0 to 180 degrees.
   */
  inclination?: number;

  /**
   * Where the satellite is in its orbital path. The mean anomaly ranges from 0 to
   * 360 degrees. The mean anomaly is referenced to the perigee. If the satellite
   * were at the perigee, the mean anomaly would be 0.
   */
  meanAnomaly?: number;

  /**
   * The constant angular speed required for the body to complete one circular orbit
   * in the same amount of time as the actual elliptical orbit with variable speed.
   * Measured in revolutions per day.
   */
  meanMotion?: number;

  /**
   * 2nd derivative of the mean motion with respect to time. Units are revolutions
   * per day cubed.
   */
  meanMotionDDot?: number;

  /**
   * 1st derivative of the mean motion with respect to time. Units are revolutions
   * per day squared.
   */
  meanMotionDot?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The orbit point nearest to the center of the earth in kilometers.
   */
  perigee?: number;

  /**
   * Period of the orbit equal to inverse of mean motion.
   */
  period?: number;

  /**
   * Right ascension of the ascending node, or RAAN is the angle as measured in
   * degrees eastwards (or, as seen from the north, counterclockwise) from the First
   * Point of Aries to the ascending node, which is where the orbit crosses the
   * equator when traveling north.
   */
  raan?: number;

  /**
   * The current revolution number. The value is incremented when a satellite crosses
   * the equator on an ascending pass.
   */
  revNo?: number;

  /**
   * The sum of the periapsis and apoapsis distances divided by two. For circular
   * orbits, the semimajor axis is the distance between the centers of the bodies,
   * not the distance of the bodies from the center of mass.
   */
  semiMajorAxis?: number;
}

export interface ManifoldelsetUpdateParams {
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
   * Elset epoch time in ISO 8601 UTC format, with microsecond precision.
   */
  epoch: string;

  /**
   * Identifier of the parent Manifold record.
   */
  idManifold: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * A placeholder satellite number and not a true NORAD catalog number.
   */
  tmpSatNo: number;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * The Orbit point furthest from the center of the earth in kilometers.
   */
  apogee?: number;

  /**
   * The argument of perigee is the angle in degrees formed between the perigee and
   * the ascending node. If the perigee would occur at the ascending node, the
   * argument of perigee would be 0.
   */
  argOfPerigee?: number;

  /**
   * The drag term for SGP4 orbital model, used for calculating decay constants for
   * altitude, eccentricity etc, measured in inverse earth radii.
   */
  bStar?: number;

  /**
   * The orbital eccentricity of an astronomical object is a parameter that
   * determines the amount by which its orbit around another body deviates from a
   * perfect circle. A value of 0 is a circular orbit, values between 0 and 1 form an
   * elliptic orbit, 1 is a parabolic escape orbit, and greater than 1 is a
   * hyperbolic escape orbit.
   */
  eccentricity?: number;

  /**
   * The angle between the equator and the orbit when looking from the center of the
   * Earth. If the orbit went exactly around the equator from left to right, then the
   * inclination would be 0. The inclination ranges from 0 to 180 degrees.
   */
  inclination?: number;

  /**
   * Where the satellite is in its orbital path. The mean anomaly ranges from 0 to
   * 360 degrees. The mean anomaly is referenced to the perigee. If the satellite
   * were at the perigee, the mean anomaly would be 0.
   */
  meanAnomaly?: number;

  /**
   * The constant angular speed required for the body to complete one circular orbit
   * in the same amount of time as the actual elliptical orbit with variable speed.
   * Measured in revolutions per day.
   */
  meanMotion?: number;

  /**
   * 2nd derivative of the mean motion with respect to time. Units are revolutions
   * per day cubed.
   */
  meanMotionDDot?: number;

  /**
   * 1st derivative of the mean motion with respect to time. Units are revolutions
   * per day squared.
   */
  meanMotionDot?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The orbit point nearest to the center of the earth in kilometers.
   */
  perigee?: number;

  /**
   * Period of the orbit equal to inverse of mean motion.
   */
  period?: number;

  /**
   * Right ascension of the ascending node, or RAAN is the angle as measured in
   * degrees eastwards (or, as seen from the north, counterclockwise) from the First
   * Point of Aries to the ascending node, which is where the orbit crosses the
   * equator when traveling north.
   */
  raan?: number;

  /**
   * The current revolution number. The value is incremented when a satellite crosses
   * the equator on an ascending pass.
   */
  revNo?: number;

  /**
   * The sum of the periapsis and apoapsis distances divided by two. For circular
   * orbits, the semimajor axis is the distance between the centers of the bodies,
   * not the distance of the bodies from the center of mass.
   */
  semiMajorAxis?: number;
}

export interface ManifoldelsetListParams extends OffsetPageParams {
  /**
   * Elset epoch time in ISO 8601 UTC format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  epoch: string;
}

export interface ManifoldelsetCountParams {
  /**
   * Elset epoch time in ISO 8601 UTC format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  epoch: string;

  firstResult?: number;

  maxResults?: number;
}

export interface ManifoldelsetCreateBulkParams {
  body: Array<ManifoldelsetCreateBulkParams.Body>;
}

export namespace ManifoldelsetCreateBulkParams {
  /**
   * Theoretical Keplarian orbital elements belonging to an object of interest's
   * manifold describing a possible/theoretical orbit for an object of interest for
   * tasking purposes.
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
     * Elset epoch time in ISO 8601 UTC format, with microsecond precision.
     */
    epoch: string;

    /**
     * Identifier of the parent Manifold record.
     */
    idManifold: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * A placeholder satellite number and not a true NORAD catalog number.
     */
    tmpSatNo: number;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The Orbit point furthest from the center of the earth in kilometers.
     */
    apogee?: number;

    /**
     * The argument of perigee is the angle in degrees formed between the perigee and
     * the ascending node. If the perigee would occur at the ascending node, the
     * argument of perigee would be 0.
     */
    argOfPerigee?: number;

    /**
     * The drag term for SGP4 orbital model, used for calculating decay constants for
     * altitude, eccentricity etc, measured in inverse earth radii.
     */
    bStar?: number;

    /**
     * The orbital eccentricity of an astronomical object is a parameter that
     * determines the amount by which its orbit around another body deviates from a
     * perfect circle. A value of 0 is a circular orbit, values between 0 and 1 form an
     * elliptic orbit, 1 is a parabolic escape orbit, and greater than 1 is a
     * hyperbolic escape orbit.
     */
    eccentricity?: number;

    /**
     * The angle between the equator and the orbit when looking from the center of the
     * Earth. If the orbit went exactly around the equator from left to right, then the
     * inclination would be 0. The inclination ranges from 0 to 180 degrees.
     */
    inclination?: number;

    /**
     * Where the satellite is in its orbital path. The mean anomaly ranges from 0 to
     * 360 degrees. The mean anomaly is referenced to the perigee. If the satellite
     * were at the perigee, the mean anomaly would be 0.
     */
    meanAnomaly?: number;

    /**
     * The constant angular speed required for the body to complete one circular orbit
     * in the same amount of time as the actual elliptical orbit with variable speed.
     * Measured in revolutions per day.
     */
    meanMotion?: number;

    /**
     * 2nd derivative of the mean motion with respect to time. Units are revolutions
     * per day cubed.
     */
    meanMotionDDot?: number;

    /**
     * 1st derivative of the mean motion with respect to time. Units are revolutions
     * per day squared.
     */
    meanMotionDot?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The orbit point nearest to the center of the earth in kilometers.
     */
    perigee?: number;

    /**
     * Period of the orbit equal to inverse of mean motion.
     */
    period?: number;

    /**
     * Right ascension of the ascending node, or RAAN is the angle as measured in
     * degrees eastwards (or, as seen from the north, counterclockwise) from the First
     * Point of Aries to the ascending node, which is where the orbit crosses the
     * equator when traveling north.
     */
    raan?: number;

    /**
     * The current revolution number. The value is incremented when a satellite crosses
     * the equator on an ascending pass.
     */
    revNo?: number;

    /**
     * The sum of the periapsis and apoapsis distances divided by two. For circular
     * orbits, the semimajor axis is the distance between the centers of the bodies,
     * not the distance of the bodies from the center of mass.
     */
    semiMajorAxis?: number;
  }
}

export interface ManifoldelsetGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface ManifoldelsetTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Elset epoch time in ISO 8601 UTC format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  epoch: string;

  firstResult?: number;

  maxResults?: number;
}

export declare namespace Manifoldelset {
  export {
    type ManifoldelsetListResponse as ManifoldelsetListResponse,
    type ManifoldelsetCountResponse as ManifoldelsetCountResponse,
    type ManifoldelsetGetResponse as ManifoldelsetGetResponse,
    type ManifoldelsetQueryhelpResponse as ManifoldelsetQueryhelpResponse,
    type ManifoldelsetTupleResponse as ManifoldelsetTupleResponse,
    type ManifoldelsetListResponsesOffsetPage as ManifoldelsetListResponsesOffsetPage,
    type ManifoldelsetCreateParams as ManifoldelsetCreateParams,
    type ManifoldelsetUpdateParams as ManifoldelsetUpdateParams,
    type ManifoldelsetListParams as ManifoldelsetListParams,
    type ManifoldelsetCountParams as ManifoldelsetCountParams,
    type ManifoldelsetCreateBulkParams as ManifoldelsetCreateBulkParams,
    type ManifoldelsetGetParams as ManifoldelsetGetParams,
    type ManifoldelsetTupleParams as ManifoldelsetTupleParams,
  };
}
