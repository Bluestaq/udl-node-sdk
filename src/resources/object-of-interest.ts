// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as Shared from 'bluestaq@unified-data-library/resources/shared';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class ObjectOfInterest extends APIResource {
  /**
   * Service operation to take a single ObjectOfInterest as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.objectOfInterest.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idOnOrbit: 'REF-ONORBIT-ID',
   *   sensorTaskingStartTime: '2021-01-01T01:01:01.123Z',
   *   source: 'Bluestaq',
   *   statusDate: '2021-01-01T01:01:01.123Z',
   * });
   * ```
   */
  create(body: ObjectOfInterestCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/objectofinterest', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single ObjectOfInterest. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.objectOfInterest.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idOnOrbit: 'REF-ONORBIT-ID',
   *   sensorTaskingStartTime: '2021-01-01T01:01:01.123Z',
   *   source: 'Bluestaq',
   *   statusDate: '2021-01-01T01:01:01.123Z',
   * });
   * ```
   */
  update(pathID: string, body: ObjectOfInterestUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/objectofinterest/${pathID}`, {
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
   * for await (const objectOfInterestListResponse of client.objectOfInterest.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ObjectOfInterestListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ObjectOfInterestListResponsesOffsetPage, ObjectOfInterestListResponse> {
    return this._client.getAPIList('/udl/objectofinterest', OffsetPage<ObjectOfInterestListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a ObjectOfInterest object specified by the passed ID
   * path parameter. A ObjectOfInterest is an on-orbit ObjectOfInterestunications
   * payload, including supporting data such as transponders and channels, etc. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.objectOfInterest.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/objectofinterest/${id}`, {
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
   * const response = await client.objectOfInterest.count();
   * ```
   */
  count(
    query: ObjectOfInterestCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/objectofinterest/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single ObjectOfInterest record by its unique ID
   * passed as a path parameter.
   *
   * @example
   * ```ts
   * const objectOfInterest = await client.objectOfInterest.get(
   *   'id',
   * );
   * ```
   */
  get(
    id: string,
    query: ObjectOfInterestGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectOfInterestGetResponse> {
    return this._client.get(path`/udl/objectofinterest/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.objectOfInterest.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<ObjectOfInterestQueryhelpResponse> {
    return this._client.get('/udl/objectofinterest/queryhelp', options);
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
   * const response = await client.objectOfInterest.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(
    query: ObjectOfInterestTupleParams,
    options?: RequestOptions,
  ): APIPromise<ObjectOfInterestTupleResponse> {
    return this._client.get('/udl/objectofinterest/tuple', { query, ...options });
  }
}

export type ObjectOfInterestListResponsesOffsetPage = OffsetPage<ObjectOfInterestListResponse>;

/**
 * OnOrbit objects of interest, which include information about the last known
 * state of the object.
 */
export interface ObjectOfInterestListResponse {
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
   * UUID of the parent Onorbit record.
   */
  idOnOrbit: string;

  /**
   * Sensor tasking start time for object of interest.
   */
  sensorTaskingStartTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Time of last status change of the object of interest event.
   */
  statusDate: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Last reported apogee. The Orbit point furthest from the center of the earth in
   * kilometers.
   */
  apogee?: number;

  /**
   * Last reported argument of perigee. The argument of perigee is the angle in
   * degrees formed between the perigee and the ascending node. If the perigee would
   * occur at the ascending node, the argument of perigee would be 0.
   */
  argOfPerigee?: number;

  /**
   * Last reported drag term for SGP4 orbital model, used for calculating decay
   * constants for altitude, eccentricity etc, measured in inverse earth radii.
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
   * Possible delta time applications for the object of interest, in seconds.
   */
  deltaTs?: Array<number>;

  /**
   * Possible delta V applications for the object of interest, in km/sec.
   */
  deltaVs?: Array<number>;

  /**
   * Description of the object of interest event.
   */
  description?: string;

  /**
   * Last reported eccentricity of the object. The orbital eccentricity of an
   * astronomical object is a parameter that determines the amount by which its orbit
   * around another body deviates from a perfect circle. A value of 0 is a circular
   * orbit, values between 0 and 1 form an elliptic orbit, 1 is a parabolic escape
   * orbit, and greater than 1 is a hyperbolic escape orbit.
   */
  eccentricity?: number;

  /**
   * Last reported elset epoch time in ISO 8601 UTC time, with microsecond precision.
   */
  elsetEpoch?: string;

  /**
   * Last reported inclination of the object. Inclination is the angle between the
   * equator and the orbit when looking from the center of the Earth. If the orbit
   * went exactly around the equator from left to right, then the inclination would
   * be 0. The inclination ranges from 0 to 180 degrees.
   */
  inclination?: number;

  /**
   * Last reported observation time in ISO 8601 UTC time, with microsecond precision.
   */
  lastObTime?: string;

  /**
   * Last reported meanAnomaly. Mean anomoly is where the satellite is in its orbital
   * path. The mean anomaly ranges from 0 to 360 degrees. The mean anomaly is
   * referenced to the perigee. If the satellite were at the perigee, the mean
   * anomaly would be 0.
   */
  meanAnomaly?: number;

  /**
   * Last reported mean motion of the object. Mean motion is the angular speed
   * required for a body to complete one orbit, assuming constant speed in a circular
   * orbit which completes in the same time as the variable speed, elliptical orbit
   * of the actual body. Measured in revolutions per day.
   */
  meanMotion?: number;

  /**
   * Last reported 2nd derivative of the mean motion with respect to time. Units are
   * revolutions per day cubed.
   */
  meanMotionDDot?: number;

  /**
   * Last reported 1st derivative of the mean motion with respect to time. Units are
   * revolutions per day squared.
   */
  meanMotionDot?: number;

  /**
   * The time at which an attempted observation of the object of interest noticed it
   * was missing, in ISO 8601 UTC time, with microsecond precision.
   */
  missedObTime?: string;

  /**
   * Unique name of the object of interest event.
   */
  name?: string;

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
   * Last reported perigee. The orbit point nearest to the center of the earth in
   * kilometers.
   */
  perigee?: number;

  /**
   * Last reported orbit period. Period of the orbit is equal to inverse of mean
   * motion.
   */
  period?: number;

  /**
   * Priority of the object of interest as an integer (1=highest priority).
   */
  priority?: number;

  /**
   * Last reported raan. Right ascension of the ascending node, or RAAN is the angle
   * as measured in degrees eastwards (or, as seen from the north, counterclockwise)
   * from the First Point of Aries to the ascending node, which is where the orbit
   * crosses the equator when traveling north.
   */
  raan?: number;

  /**
   * The last reported revolution number. The value is incremented when a satellite
   * crosses the equator on an ascending pass.
   */
  revNo?: number;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Last reported semi major axis, which is the sum of the periapsis and apoapsis
   * distances divided by two. For circular orbits, the semimajor axis is the
   * distance between the centers of the bodies, not the distance of the bodies from
   * the center of mass.
   */
  semiMajorAxis?: number;

  /**
   * Sensor tasking stop time for object of interest.
   */
  sensorTaskingStopTime?: string;

  /**
   * Status of the object of interest event (e.g. OPEN, CLOSED, CANCELLED).
   */
  status?: string;

  /**
   * Last reported state vector epoch time in ISO 8601 UTC time, with microsecond
   * precision.
   */
  svEpoch?: string;

  /**
   * Last reported x position of the object in km, in J2000 coordinates.
   */
  x?: number;

  /**
   * Last reported x velocity of the object in km/sec, in J2000 coordinates.
   */
  xvel?: number;

  /**
   * Last reported y position of the object in km, in J2000 coordinates.
   */
  y?: number;

  /**
   * Last reported y velocity of the object in km/sec, in J2000 coordinates.
   */
  yvel?: number;

  /**
   * Last reported z position of the object in km, in J2000 coordinates.
   */
  z?: number;

  /**
   * Last reported z velocity of the object in km/sec, in J2000 coordinates.
   */
  zvel?: number;
}

export type ObjectOfInterestCountResponse = string;

/**
 * OnOrbit objects of interest, which include information about the last known
 * state of the object.
 */
export interface ObjectOfInterestGetResponse {
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
   * UUID of the parent Onorbit record.
   */
  idOnOrbit: string;

  /**
   * Sensor tasking start time for object of interest.
   */
  sensorTaskingStartTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Time of last status change of the object of interest event.
   */
  statusDate: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Optional array of Onorbit IDs (idOnOrbit) representing satellites potentially
   * affected by this object of interest.
   */
  affectedObjects?: Array<string>;

  /**
   * Last reported apogee. The Orbit point furthest from the center of the earth in
   * kilometers.
   */
  apogee?: number;

  /**
   * Last reported argument of perigee. The argument of perigee is the angle in
   * degrees formed between the perigee and the ascending node. If the perigee would
   * occur at the ascending node, the argument of perigee would be 0.
   */
  argOfPerigee?: number;

  /**
   * Last reported drag term for SGP4 orbital model, used for calculating decay
   * constants for altitude, eccentricity etc, measured in inverse earth radii.
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
   * Possible delta time applications for the object of interest, in seconds.
   */
  deltaTs?: Array<number>;

  /**
   * Possible delta V applications for the object of interest, in km/sec.
   */
  deltaVs?: Array<number>;

  /**
   * Description of the object of interest event.
   */
  description?: string;

  /**
   * Last reported eccentricity of the object. The orbital eccentricity of an
   * astronomical object is a parameter that determines the amount by which its orbit
   * around another body deviates from a perfect circle. A value of 0 is a circular
   * orbit, values between 0 and 1 form an elliptic orbit, 1 is a parabolic escape
   * orbit, and greater than 1 is a hyperbolic escape orbit.
   */
  eccentricity?: number;

  /**
   * Last reported elset epoch time in ISO 8601 UTC time, with microsecond precision.
   */
  elsetEpoch?: string;

  /**
   * Last reported inclination of the object. Inclination is the angle between the
   * equator and the orbit when looking from the center of the Earth. If the orbit
   * went exactly around the equator from left to right, then the inclination would
   * be 0. The inclination ranges from 0 to 180 degrees.
   */
  inclination?: number;

  /**
   * Last reported observation time in ISO 8601 UTC time, with microsecond precision.
   */
  lastObTime?: string;

  /**
   * Manifolds associated with this object of interest.
   */
  manifolds?: Array<ObjectOfInterestGetResponse.Manifold>;

  /**
   * Last reported meanAnomaly. Mean anomoly is where the satellite is in its orbital
   * path. The mean anomaly ranges from 0 to 360 degrees. The mean anomaly is
   * referenced to the perigee. If the satellite were at the perigee, the mean
   * anomaly would be 0.
   */
  meanAnomaly?: number;

  /**
   * Last reported mean motion of the object. Mean motion is the angular speed
   * required for a body to complete one orbit, assuming constant speed in a circular
   * orbit which completes in the same time as the variable speed, elliptical orbit
   * of the actual body. Measured in revolutions per day.
   */
  meanMotion?: number;

  /**
   * Last reported 2nd derivative of the mean motion with respect to time. Units are
   * revolutions per day cubed.
   */
  meanMotionDDot?: number;

  /**
   * Last reported 1st derivative of the mean motion with respect to time. Units are
   * revolutions per day squared.
   */
  meanMotionDot?: number;

  /**
   * The time at which an attempted observation of the object of interest noticed it
   * was missing, in ISO 8601 UTC time, with microsecond precision.
   */
  missedObTime?: string;

  /**
   * Unique name of the object of interest event.
   */
  name?: string;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: Shared.OnorbitFull;

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
   * Last reported perigee. The orbit point nearest to the center of the earth in
   * kilometers.
   */
  perigee?: number;

  /**
   * Last reported orbit period. Period of the orbit is equal to inverse of mean
   * motion.
   */
  period?: number;

  /**
   * Priority of the object of interest as an integer (1=highest priority).
   */
  priority?: number;

  /**
   * Last reported raan. Right ascension of the ascending node, or RAAN is the angle
   * as measured in degrees eastwards (or, as seen from the north, counterclockwise)
   * from the First Point of Aries to the ascending node, which is where the orbit
   * crosses the equator when traveling north.
   */
  raan?: number;

  /**
   * The last reported revolution number. The value is incremented when a satellite
   * crosses the equator on an ascending pass.
   */
  revNo?: number;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Last reported semi major axis, which is the sum of the periapsis and apoapsis
   * distances divided by two. For circular orbits, the semimajor axis is the
   * distance between the centers of the bodies, not the distance of the bodies from
   * the center of mass.
   */
  semiMajorAxis?: number;

  /**
   * Sensor tasking stop time for object of interest.
   */
  sensorTaskingStopTime?: string;

  /**
   * Status of the object of interest event (e.g. OPEN, CLOSED, CANCELLED).
   */
  status?: string;

  /**
   * Last reported state vector epoch time in ISO 8601 UTC time, with microsecond
   * precision.
   */
  svEpoch?: string;

  /**
   * Time the row was last updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;

  /**
   * Last reported x position of the object in km, in J2000 coordinates.
   */
  x?: number;

  /**
   * Last reported x velocity of the object in km/sec, in J2000 coordinates.
   */
  xvel?: number;

  /**
   * Last reported y position of the object in km, in J2000 coordinates.
   */
  y?: number;

  /**
   * Last reported y velocity of the object in km/sec, in J2000 coordinates.
   */
  yvel?: number;

  /**
   * Last reported z position of the object in km, in J2000 coordinates.
   */
  z?: number;

  /**
   * Last reported z velocity of the object in km/sec, in J2000 coordinates.
   */
  zvel?: number;
}

export namespace ObjectOfInterestGetResponse {
  /**
   * A manifold represents a set of possible/theoretical orbits for an object of
   * interest based on a delta V and delta T.
   */
  export interface Manifold {
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
     * ID of the parent object of interest.
     */
    idObjectOfInterest: string;

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
     * Applied delta V duration for this manifold's calculations in seconds.
     */
    deltaT?: number;

    /**
     * Applied delta V for this manifold's calculations, in km/sec.
     */
    deltaV?: number;

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
     * Status of the manifold and its associated ManifoldElsets (e.g. PENDING,
     * COMPLETE). PENDING status means element set generation is in progress and
     * COMPLETE indicates all ManifoldElsets have been generated.
     */
    status?: string;

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

    /**
     * Weight or probability of this manifold for prioritization purposes, between 0
     * and 1.
     */
    weight?: number;
  }
}

export interface ObjectOfInterestQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<ObjectOfInterestQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace ObjectOfInterestQueryhelpResponse {
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

export type ObjectOfInterestTupleResponse =
  Array<ObjectOfInterestTupleResponse.ObjectOfInterestTupleResponseItem>;

export namespace ObjectOfInterestTupleResponse {
  /**
   * OnOrbit objects of interest, which include information about the last known
   * state of the object.
   */
  export interface ObjectOfInterestTupleResponseItem {
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
     * UUID of the parent Onorbit record.
     */
    idOnOrbit: string;

    /**
     * Sensor tasking start time for object of interest.
     */
    sensorTaskingStartTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Time of last status change of the object of interest event.
     */
    statusDate: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Optional array of Onorbit IDs (idOnOrbit) representing satellites potentially
     * affected by this object of interest.
     */
    affectedObjects?: Array<string>;

    /**
     * Last reported apogee. The Orbit point furthest from the center of the earth in
     * kilometers.
     */
    apogee?: number;

    /**
     * Last reported argument of perigee. The argument of perigee is the angle in
     * degrees formed between the perigee and the ascending node. If the perigee would
     * occur at the ascending node, the argument of perigee would be 0.
     */
    argOfPerigee?: number;

    /**
     * Last reported drag term for SGP4 orbital model, used for calculating decay
     * constants for altitude, eccentricity etc, measured in inverse earth radii.
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
     * Possible delta time applications for the object of interest, in seconds.
     */
    deltaTs?: Array<number>;

    /**
     * Possible delta V applications for the object of interest, in km/sec.
     */
    deltaVs?: Array<number>;

    /**
     * Description of the object of interest event.
     */
    description?: string;

    /**
     * Last reported eccentricity of the object. The orbital eccentricity of an
     * astronomical object is a parameter that determines the amount by which its orbit
     * around another body deviates from a perfect circle. A value of 0 is a circular
     * orbit, values between 0 and 1 form an elliptic orbit, 1 is a parabolic escape
     * orbit, and greater than 1 is a hyperbolic escape orbit.
     */
    eccentricity?: number;

    /**
     * Last reported elset epoch time in ISO 8601 UTC time, with microsecond precision.
     */
    elsetEpoch?: string;

    /**
     * Last reported inclination of the object. Inclination is the angle between the
     * equator and the orbit when looking from the center of the Earth. If the orbit
     * went exactly around the equator from left to right, then the inclination would
     * be 0. The inclination ranges from 0 to 180 degrees.
     */
    inclination?: number;

    /**
     * Last reported observation time in ISO 8601 UTC time, with microsecond precision.
     */
    lastObTime?: string;

    /**
     * Manifolds associated with this object of interest.
     */
    manifolds?: Array<ObjectOfInterestTupleResponseItem.Manifold>;

    /**
     * Last reported meanAnomaly. Mean anomoly is where the satellite is in its orbital
     * path. The mean anomaly ranges from 0 to 360 degrees. The mean anomaly is
     * referenced to the perigee. If the satellite were at the perigee, the mean
     * anomaly would be 0.
     */
    meanAnomaly?: number;

    /**
     * Last reported mean motion of the object. Mean motion is the angular speed
     * required for a body to complete one orbit, assuming constant speed in a circular
     * orbit which completes in the same time as the variable speed, elliptical orbit
     * of the actual body. Measured in revolutions per day.
     */
    meanMotion?: number;

    /**
     * Last reported 2nd derivative of the mean motion with respect to time. Units are
     * revolutions per day cubed.
     */
    meanMotionDDot?: number;

    /**
     * Last reported 1st derivative of the mean motion with respect to time. Units are
     * revolutions per day squared.
     */
    meanMotionDot?: number;

    /**
     * The time at which an attempted observation of the object of interest noticed it
     * was missing, in ISO 8601 UTC time, with microsecond precision.
     */
    missedObTime?: string;

    /**
     * Unique name of the object of interest event.
     */
    name?: string;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Shared.OnorbitFull;

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
     * Last reported perigee. The orbit point nearest to the center of the earth in
     * kilometers.
     */
    perigee?: number;

    /**
     * Last reported orbit period. Period of the orbit is equal to inverse of mean
     * motion.
     */
    period?: number;

    /**
     * Priority of the object of interest as an integer (1=highest priority).
     */
    priority?: number;

    /**
     * Last reported raan. Right ascension of the ascending node, or RAAN is the angle
     * as measured in degrees eastwards (or, as seen from the north, counterclockwise)
     * from the First Point of Aries to the ascending node, which is where the orbit
     * crosses the equator when traveling north.
     */
    raan?: number;

    /**
     * The last reported revolution number. The value is incremented when a satellite
     * crosses the equator on an ascending pass.
     */
    revNo?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Last reported semi major axis, which is the sum of the periapsis and apoapsis
     * distances divided by two. For circular orbits, the semimajor axis is the
     * distance between the centers of the bodies, not the distance of the bodies from
     * the center of mass.
     */
    semiMajorAxis?: number;

    /**
     * Sensor tasking stop time for object of interest.
     */
    sensorTaskingStopTime?: string;

    /**
     * Status of the object of interest event (e.g. OPEN, CLOSED, CANCELLED).
     */
    status?: string;

    /**
     * Last reported state vector epoch time in ISO 8601 UTC time, with microsecond
     * precision.
     */
    svEpoch?: string;

    /**
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;

    /**
     * Last reported x position of the object in km, in J2000 coordinates.
     */
    x?: number;

    /**
     * Last reported x velocity of the object in km/sec, in J2000 coordinates.
     */
    xvel?: number;

    /**
     * Last reported y position of the object in km, in J2000 coordinates.
     */
    y?: number;

    /**
     * Last reported y velocity of the object in km/sec, in J2000 coordinates.
     */
    yvel?: number;

    /**
     * Last reported z position of the object in km, in J2000 coordinates.
     */
    z?: number;

    /**
     * Last reported z velocity of the object in km/sec, in J2000 coordinates.
     */
    zvel?: number;
  }

  export namespace ObjectOfInterestTupleResponseItem {
    /**
     * A manifold represents a set of possible/theoretical orbits for an object of
     * interest based on a delta V and delta T.
     */
    export interface Manifold {
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
       * ID of the parent object of interest.
       */
      idObjectOfInterest: string;

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
       * Applied delta V duration for this manifold's calculations in seconds.
       */
      deltaT?: number;

      /**
       * Applied delta V for this manifold's calculations, in km/sec.
       */
      deltaV?: number;

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
       * Status of the manifold and its associated ManifoldElsets (e.g. PENDING,
       * COMPLETE). PENDING status means element set generation is in progress and
       * COMPLETE indicates all ManifoldElsets have been generated.
       */
      status?: string;

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

      /**
       * Weight or probability of this manifold for prioritization purposes, between 0
       * and 1.
       */
      weight?: number;
    }
  }
}

export interface ObjectOfInterestCreateParams {
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
   * UUID of the parent Onorbit record.
   */
  idOnOrbit: string;

  /**
   * Sensor tasking start time for object of interest.
   */
  sensorTaskingStartTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Time of last status change of the object of interest event.
   */
  statusDate: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Optional array of Onorbit IDs (idOnOrbit) representing satellites potentially
   * affected by this object of interest.
   */
  affectedObjects?: Array<string>;

  /**
   * Last reported apogee. The Orbit point furthest from the center of the earth in
   * kilometers.
   */
  apogee?: number;

  /**
   * Last reported argument of perigee. The argument of perigee is the angle in
   * degrees formed between the perigee and the ascending node. If the perigee would
   * occur at the ascending node, the argument of perigee would be 0.
   */
  argOfPerigee?: number;

  /**
   * Last reported drag term for SGP4 orbital model, used for calculating decay
   * constants for altitude, eccentricity etc, measured in inverse earth radii.
   */
  bStar?: number;

  /**
   * Possible delta time applications for the object of interest, in seconds.
   */
  deltaTs?: Array<number>;

  /**
   * Possible delta V applications for the object of interest, in km/sec.
   */
  deltaVs?: Array<number>;

  /**
   * Description of the object of interest event.
   */
  description?: string;

  /**
   * Last reported eccentricity of the object. The orbital eccentricity of an
   * astronomical object is a parameter that determines the amount by which its orbit
   * around another body deviates from a perfect circle. A value of 0 is a circular
   * orbit, values between 0 and 1 form an elliptic orbit, 1 is a parabolic escape
   * orbit, and greater than 1 is a hyperbolic escape orbit.
   */
  eccentricity?: number;

  /**
   * Last reported elset epoch time in ISO 8601 UTC time, with microsecond precision.
   */
  elsetEpoch?: string;

  /**
   * Last reported inclination of the object. Inclination is the angle between the
   * equator and the orbit when looking from the center of the Earth. If the orbit
   * went exactly around the equator from left to right, then the inclination would
   * be 0. The inclination ranges from 0 to 180 degrees.
   */
  inclination?: number;

  /**
   * Last reported observation time in ISO 8601 UTC time, with microsecond precision.
   */
  lastObTime?: string;

  /**
   * Last reported meanAnomaly. Mean anomoly is where the satellite is in its orbital
   * path. The mean anomaly ranges from 0 to 360 degrees. The mean anomaly is
   * referenced to the perigee. If the satellite were at the perigee, the mean
   * anomaly would be 0.
   */
  meanAnomaly?: number;

  /**
   * Last reported mean motion of the object. Mean motion is the angular speed
   * required for a body to complete one orbit, assuming constant speed in a circular
   * orbit which completes in the same time as the variable speed, elliptical orbit
   * of the actual body. Measured in revolutions per day.
   */
  meanMotion?: number;

  /**
   * Last reported 2nd derivative of the mean motion with respect to time. Units are
   * revolutions per day cubed.
   */
  meanMotionDDot?: number;

  /**
   * Last reported 1st derivative of the mean motion with respect to time. Units are
   * revolutions per day squared.
   */
  meanMotionDot?: number;

  /**
   * The time at which an attempted observation of the object of interest noticed it
   * was missing, in ISO 8601 UTC time, with microsecond precision.
   */
  missedObTime?: string;

  /**
   * Unique name of the object of interest event.
   */
  name?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Last reported perigee. The orbit point nearest to the center of the earth in
   * kilometers.
   */
  perigee?: number;

  /**
   * Last reported orbit period. Period of the orbit is equal to inverse of mean
   * motion.
   */
  period?: number;

  /**
   * Priority of the object of interest as an integer (1=highest priority).
   */
  priority?: number;

  /**
   * Last reported raan. Right ascension of the ascending node, or RAAN is the angle
   * as measured in degrees eastwards (or, as seen from the north, counterclockwise)
   * from the First Point of Aries to the ascending node, which is where the orbit
   * crosses the equator when traveling north.
   */
  raan?: number;

  /**
   * The last reported revolution number. The value is incremented when a satellite
   * crosses the equator on an ascending pass.
   */
  revNo?: number;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Last reported semi major axis, which is the sum of the periapsis and apoapsis
   * distances divided by two. For circular orbits, the semimajor axis is the
   * distance between the centers of the bodies, not the distance of the bodies from
   * the center of mass.
   */
  semiMajorAxis?: number;

  /**
   * Sensor tasking stop time for object of interest.
   */
  sensorTaskingStopTime?: string;

  /**
   * Status of the object of interest event (e.g. OPEN, CLOSED, CANCELLED).
   */
  status?: string;

  /**
   * Last reported state vector epoch time in ISO 8601 UTC time, with microsecond
   * precision.
   */
  svEpoch?: string;

  /**
   * Last reported x position of the object in km, in J2000 coordinates.
   */
  x?: number;

  /**
   * Last reported x velocity of the object in km/sec, in J2000 coordinates.
   */
  xvel?: number;

  /**
   * Last reported y position of the object in km, in J2000 coordinates.
   */
  y?: number;

  /**
   * Last reported y velocity of the object in km/sec, in J2000 coordinates.
   */
  yvel?: number;

  /**
   * Last reported z position of the object in km, in J2000 coordinates.
   */
  z?: number;

  /**
   * Last reported z velocity of the object in km/sec, in J2000 coordinates.
   */
  zvel?: number;
}

export interface ObjectOfInterestUpdateParams {
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
   * UUID of the parent Onorbit record.
   */
  idOnOrbit: string;

  /**
   * Sensor tasking start time for object of interest.
   */
  sensorTaskingStartTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Time of last status change of the object of interest event.
   */
  statusDate: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Optional array of Onorbit IDs (idOnOrbit) representing satellites potentially
   * affected by this object of interest.
   */
  affectedObjects?: Array<string>;

  /**
   * Last reported apogee. The Orbit point furthest from the center of the earth in
   * kilometers.
   */
  apogee?: number;

  /**
   * Last reported argument of perigee. The argument of perigee is the angle in
   * degrees formed between the perigee and the ascending node. If the perigee would
   * occur at the ascending node, the argument of perigee would be 0.
   */
  argOfPerigee?: number;

  /**
   * Last reported drag term for SGP4 orbital model, used for calculating decay
   * constants for altitude, eccentricity etc, measured in inverse earth radii.
   */
  bStar?: number;

  /**
   * Possible delta time applications for the object of interest, in seconds.
   */
  deltaTs?: Array<number>;

  /**
   * Possible delta V applications for the object of interest, in km/sec.
   */
  deltaVs?: Array<number>;

  /**
   * Description of the object of interest event.
   */
  description?: string;

  /**
   * Last reported eccentricity of the object. The orbital eccentricity of an
   * astronomical object is a parameter that determines the amount by which its orbit
   * around another body deviates from a perfect circle. A value of 0 is a circular
   * orbit, values between 0 and 1 form an elliptic orbit, 1 is a parabolic escape
   * orbit, and greater than 1 is a hyperbolic escape orbit.
   */
  eccentricity?: number;

  /**
   * Last reported elset epoch time in ISO 8601 UTC time, with microsecond precision.
   */
  elsetEpoch?: string;

  /**
   * Last reported inclination of the object. Inclination is the angle between the
   * equator and the orbit when looking from the center of the Earth. If the orbit
   * went exactly around the equator from left to right, then the inclination would
   * be 0. The inclination ranges from 0 to 180 degrees.
   */
  inclination?: number;

  /**
   * Last reported observation time in ISO 8601 UTC time, with microsecond precision.
   */
  lastObTime?: string;

  /**
   * Last reported meanAnomaly. Mean anomoly is where the satellite is in its orbital
   * path. The mean anomaly ranges from 0 to 360 degrees. The mean anomaly is
   * referenced to the perigee. If the satellite were at the perigee, the mean
   * anomaly would be 0.
   */
  meanAnomaly?: number;

  /**
   * Last reported mean motion of the object. Mean motion is the angular speed
   * required for a body to complete one orbit, assuming constant speed in a circular
   * orbit which completes in the same time as the variable speed, elliptical orbit
   * of the actual body. Measured in revolutions per day.
   */
  meanMotion?: number;

  /**
   * Last reported 2nd derivative of the mean motion with respect to time. Units are
   * revolutions per day cubed.
   */
  meanMotionDDot?: number;

  /**
   * Last reported 1st derivative of the mean motion with respect to time. Units are
   * revolutions per day squared.
   */
  meanMotionDot?: number;

  /**
   * The time at which an attempted observation of the object of interest noticed it
   * was missing, in ISO 8601 UTC time, with microsecond precision.
   */
  missedObTime?: string;

  /**
   * Unique name of the object of interest event.
   */
  name?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Last reported perigee. The orbit point nearest to the center of the earth in
   * kilometers.
   */
  perigee?: number;

  /**
   * Last reported orbit period. Period of the orbit is equal to inverse of mean
   * motion.
   */
  period?: number;

  /**
   * Priority of the object of interest as an integer (1=highest priority).
   */
  priority?: number;

  /**
   * Last reported raan. Right ascension of the ascending node, or RAAN is the angle
   * as measured in degrees eastwards (or, as seen from the north, counterclockwise)
   * from the First Point of Aries to the ascending node, which is where the orbit
   * crosses the equator when traveling north.
   */
  raan?: number;

  /**
   * The last reported revolution number. The value is incremented when a satellite
   * crosses the equator on an ascending pass.
   */
  revNo?: number;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Last reported semi major axis, which is the sum of the periapsis and apoapsis
   * distances divided by two. For circular orbits, the semimajor axis is the
   * distance between the centers of the bodies, not the distance of the bodies from
   * the center of mass.
   */
  semiMajorAxis?: number;

  /**
   * Sensor tasking stop time for object of interest.
   */
  sensorTaskingStopTime?: string;

  /**
   * Status of the object of interest event (e.g. OPEN, CLOSED, CANCELLED).
   */
  status?: string;

  /**
   * Last reported state vector epoch time in ISO 8601 UTC time, with microsecond
   * precision.
   */
  svEpoch?: string;

  /**
   * Last reported x position of the object in km, in J2000 coordinates.
   */
  x?: number;

  /**
   * Last reported x velocity of the object in km/sec, in J2000 coordinates.
   */
  xvel?: number;

  /**
   * Last reported y position of the object in km, in J2000 coordinates.
   */
  y?: number;

  /**
   * Last reported y velocity of the object in km/sec, in J2000 coordinates.
   */
  yvel?: number;

  /**
   * Last reported z position of the object in km, in J2000 coordinates.
   */
  z?: number;

  /**
   * Last reported z velocity of the object in km/sec, in J2000 coordinates.
   */
  zvel?: number;
}

export interface ObjectOfInterestListParams extends OffsetPageParams {}

export interface ObjectOfInterestCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface ObjectOfInterestGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface ObjectOfInterestTupleParams {
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

export declare namespace ObjectOfInterest {
  export {
    type ObjectOfInterestListResponse as ObjectOfInterestListResponse,
    type ObjectOfInterestCountResponse as ObjectOfInterestCountResponse,
    type ObjectOfInterestGetResponse as ObjectOfInterestGetResponse,
    type ObjectOfInterestQueryhelpResponse as ObjectOfInterestQueryhelpResponse,
    type ObjectOfInterestTupleResponse as ObjectOfInterestTupleResponse,
    type ObjectOfInterestListResponsesOffsetPage as ObjectOfInterestListResponsesOffsetPage,
    type ObjectOfInterestCreateParams as ObjectOfInterestCreateParams,
    type ObjectOfInterestUpdateParams as ObjectOfInterestUpdateParams,
    type ObjectOfInterestListParams as ObjectOfInterestListParams,
    type ObjectOfInterestCountParams as ObjectOfInterestCountParams,
    type ObjectOfInterestGetParams as ObjectOfInterestGetParams,
    type ObjectOfInterestTupleParams as ObjectOfInterestTupleParams,
  };
}
