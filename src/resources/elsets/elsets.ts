// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as CurrentAPI from './current';
import {
  Current,
  CurrentListParams,
  CurrentListResponse,
  CurrentTupleParams,
  CurrentTupleResponse,
} from './current';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Elsets extends APIResource {
  current: CurrentAPI.Current = new CurrentAPI.Current(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single elset as a POST body and ingest into the
   * database. This operation is not intended to be used for automated feeds into
   * UDL. Data providers should contact the UDL team for specific role assignments
   * and for instructions on setting up a permanent feed through an alternate
   * mechanism.
   */
  create(body: ElsetCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/elset', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single elset by its unique ID passed as a path
   * parameter.
   */
  retrieve(
    id: string,
    query: ElsetRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Elset> {
    return this._client.get(path`/udl/elset/${id}`, { query, ...options });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(query: ElsetListParams, options?: RequestOptions): APIPromise<ElsetListResponse> {
    return this._client.get('/udl/elset', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: ElsetCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/elset/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * elsets as a POST body and ingest into the database with or without dupe
   * detection. Default is no dupe checking. This operation is not intended to be
   * used for automated feeds into UDL. Data providers should contact the UDL team
   * for specific role assignments and for instructions on setting up a permanent
   * feed through an alternate mechanism.
   */
  createBulk(params: ElsetCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body, dupeCheck } = params;
    return this._client.post('/udl/elset/createBulk', {
      query: { dupeCheck },
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to take a multiple TLEs as a POST body and ingest into the
   * database. This operation is not intended to be used for automated feeds into
   * UDL. Data providers should contact the UDL team for specific role assignments
   * and for instructions on setting up a permanent feed through an alternate
   * mechanism.
   */
  createBulkFromTle(params: ElsetCreateBulkFromTleParams, options?: RequestOptions): APIPromise<void> {
    const { dataMode, makeCurrent, source, body, autoCreateSats, control, origin, tags } = params;
    return this._client.post('/udl/elset/createBulkFromTLE', {
      query: { dataMode, makeCurrent, source, autoCreateSats, control, origin, tags },
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'text/plain', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryCurrentElsetHelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/currentelset/queryhelp', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/elset/queryhelp', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
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
  tuple(query: ElsetTupleParams, options?: RequestOptions): APIPromise<ElsetTupleResponse> {
    return this._client.get('/udl/elset/tuple', { query, ...options });
  }

  /**
   * Service operation to take elsets as a POST body and ingest into the database
   * with or without dupe detection. Default is no dupe checking. This operation is
   * intended to be used for automated feeds into UDL.
   */
  unvalidatedPublish(params: ElsetUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-elset', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * An element set is a collection of Keplerian orbital elements describing an orbit
 * of a particular satellite. The data is used along with an orbit propagator in
 * order to predict the motion of a satellite. The element set, or elset for short,
 * consists of identification data, the classical elements and drag parameters.
 */
export interface Elset {
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
   * Source of the data.
   */
  source: string;

  /**
   * AGOM, expressed in m^2/kg, is the value of the (averaged) object Area times the
   * solar radiation pressure coefficient(Gamma) over the object Mass. Applicable
   * only with ephemType4.
   */
  agom?: number;

  /**
   * Optional algorithm used to produce this record.
   */
  algorithm?: string;

  /**
   * The orbit point furthest from the center of the earth in kilometers. If not
   * provided, apogee will be computed from the TLE according to the following. Using
   * mu, the standard gravitational parameter for the earth (398600.4418), semi-major
   * axis A = (mu/(n _ 2 _ pi/(24*3600))^2)(1/3). Using semi-major axis A,
   * eccentricity E, apogee = (A * (1 + E)) in km. Note that the calculations are for
   * computing the apogee radius from the center of the earth, to compute apogee
   * altitude the radius of the earth should be subtracted (6378.135 km).
   */
  apogee?: number;

  /**
   * The argument of perigee is the angle in degrees formed between the perigee and
   * the ascending node. If the perigee would occur at the ascending node, the
   * argument of perigee would be 0.
   */
  argOfPerigee?: number;

  /**
   * Ballistic coefficient, in m^2/kg. Applicable only with ephemType4.
   */
  ballisticCoeff?: number;

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
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * The orbital eccentricity of an astronomical object is a parameter that
   * determines the amount by which its orbit around another body deviates from a
   * perfect circle. A value of 0 is a circular orbit, values between 0 and 1 form an
   * elliptic orbit, 1 is a parabolic escape orbit, and greater than 1 is a
   * hyperbolic escape orbit.
   */
  eccentricity?: number;

  /**
   * Read-only start time at which this elset was the 'current' elset for its
   * satellite. This field and is set by the system automatically and ignored on
   * create/edit operations.
   */
  effectiveFrom?: string;

  /**
   * Read-only end time at which this elset was no longer the 'current' elset for its
   * satellite. This field and is set by the system automatically and ignored on
   * create/edit operations.
   */
  effectiveUntil?: string;

  /**
   * The ephemeris type associated with this TLE:
   *
   * 0:&nbsp;SGP (or SGP4 with Kozai mean motion)
   *
   * 1:&nbsp;SGP (Kozai mean motion)
   *
   * 2:&nbsp;SGP4 (Brouver mean motion)
   *
   * 3:&nbsp;SDP4
   *
   * 4:&nbsp;SGP4-XP
   *
   * 5:&nbsp;SDP8
   *
   * 6:&nbsp;SP (osculating mean motion)
   */
  ephemType?: number;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  idElset?: string;

  /**
   * Unique identifier of the satellite on-orbit object, if correlated. For the
   * public catalog, the idOnOrbit is typically the satellite number as a string, but
   * may be a UUID for analyst or other unknown or untracked satellites.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the OD solution record that produced this elset. This ID
   * can be used to obtain additional information on an OrbitDetermination object
   * using the 'get by ID' operation (e.g. /udl/orbitdetermination/{id}). For
   * example, the OrbitDetermination with idOrbitDetermination = abc would be queried
   * as /udl/orbitdetermination/abc.
   */
  idOrbitDetermination?: string;

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
   * Mean motion is the angular speed required for a body to complete one orbit,
   * assuming constant speed in a circular orbit which completes in the same time as
   * the variable speed, elliptical orbit of the actual body. Measured in revolutions
   * per day.
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
   * Optional identifier provided by elset source to indicate the target onorbit
   * object of this elset. This may be an internal identifier and not necessarily map
   * to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * The orbit point nearest to the center of the earth in kilometers. If not
   * provided, perigee will be computed from the TLE according to the following.
   * Using mu, the standard gravitational parameter for the earth (398600.4418),
   * semi-major axis A = (mu/(n _ 2 _ pi/(24*3600))^2)(1/3). Using semi-major axis A,
   * eccentricity E, perigee = (A * (1 - E)) in km. Note that the calculations are
   * for computing the perigee radius from the center of the earth, to compute
   * perigee altitude the radius of the earth should be subtracted (6378.135 km).
   */
  perigee?: number;

  /**
   * Period of the orbit equal to inverse of mean motion, in minutes.
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
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The current revolution number. The value is incremented when a satellite crosses
   * the equator on an ascending pass.
   */
  revNo?: number;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * The sum of the periapsis and apoapsis distances divided by two. For circular
   * orbits, the semimajor axis is the distance between the centers of the bodies,
   * not the distance of the bodies from the center of mass. Units are kilometers.
   */
  semiMajorAxis?: number;

  /**
   * Optional array of UDL data (observation) UUIDs used to build this element set.
   * See the associated sourcedDataTypes array for the specific types of observations
   * for the positionally corresponding UUIDs in this array (the two arrays must
   * match in size).
   */
  sourcedData?: Array<string>;

  /**
   * Optional array of UDL observation data types used to build this element set
   * (e.g. EO, RADAR, RF, DOA). See the associated sourcedData array for the specific
   * UUIDs of observations for the positionally corresponding data types in this
   * array (the two arrays must match in size).
   */
  sourcedDataTypes?: Array<'EO' | 'RADAR' | 'RF' | 'DOA' | 'ELSET' | 'SV'>;

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
   * Boolean indicating this Elset was unable to be correlated to a known object.
   * This flag should only be set to true by data providers after an attempt to
   * correlate to an on-orbit object was made and failed. If unable to correlate, the
   * 'origObjectId' field may be populated with an internal data provider specific
   * identifier.
   */
  uct?: boolean;
}

/**
 * An element set is a collection of Keplerian orbital elements describing an orbit
 * of a particular satellite. The data is used along with an orbit propagator in
 * order to predict the motion of a satellite. The element set, or elset for short,
 * consists of identification data, the classical elements and drag parameters.
 */
export interface ElsetIngest {
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
   * Source of the data.
   */
  source: string;

  /**
   * AGOM, expressed in m^2/kg, is the value of the (averaged) object Area times the
   * solar radiation pressure coefficient(Gamma) over the object Mass. Applicable
   * only with ephemType4.
   */
  agom?: number;

  /**
   * Optional algorithm used to produce this record.
   */
  algorithm?: string;

  /**
   * The orbit point furthest from the center of the earth in kilometers. If not
   * provided, apogee will be computed from the TLE according to the following. Using
   * mu, the standard gravitational parameter for the earth (398600.4418), semi-major
   * axis A = (mu/(n _ 2 _ pi/(24*3600))^2)(1/3). Using semi-major axis A,
   * eccentricity E, apogee = (A * (1 + E)) in km. Note that the calculations are for
   * computing the apogee radius from the center of the earth, to compute apogee
   * altitude the radius of the earth should be subtracted (6378.135 km).
   */
  apogee?: number;

  /**
   * The argument of perigee is the angle in degrees formed between the perigee and
   * the ascending node. If the perigee would occur at the ascending node, the
   * argument of perigee would be 0.
   */
  argOfPerigee?: number;

  /**
   * Ballistic coefficient, in m^2/kg. Applicable only with ephemType4.
   */
  ballisticCoeff?: number;

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
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * The orbital eccentricity of an astronomical object is a parameter that
   * determines the amount by which its orbit around another body deviates from a
   * perfect circle. A value of 0 is a circular orbit, values between 0 and 1 form an
   * elliptic orbit, 1 is a parabolic escape orbit, and greater than 1 is a
   * hyperbolic escape orbit.
   */
  eccentricity?: number;

  /**
   * The ephemeris type associated with this TLE:
   *
   * 0:&nbsp;SGP (or SGP4 with Kozai mean motion)
   *
   * 1:&nbsp;SGP (Kozai mean motion)
   *
   * 2:&nbsp;SGP4 (Brouver mean motion)
   *
   * 3:&nbsp;SDP4
   *
   * 4:&nbsp;SGP4-XP
   *
   * 5:&nbsp;SDP8
   *
   * 6:&nbsp;SP (osculating mean motion)
   */
  ephemType?: number;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  idElset?: string;

  /**
   * Unique identifier of the satellite on-orbit object, if correlated. For the
   * public catalog, the idOnOrbit is typically the satellite number as a string, but
   * may be a UUID for analyst or other unknown or untracked satellites.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the OD solution record that produced this elset. This ID
   * can be used to obtain additional information on an OrbitDetermination object
   * using the 'get by ID' operation (e.g. /udl/orbitdetermination/{id}). For
   * example, the OrbitDetermination with idOrbitDetermination = abc would be queried
   * as /udl/orbitdetermination/abc.
   */
  idOrbitDetermination?: string;

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
   * Mean motion is the angular speed required for a body to complete one orbit,
   * assuming constant speed in a circular orbit which completes in the same time as
   * the variable speed, elliptical orbit of the actual body. Measured in revolutions
   * per day.
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
   * Optional identifier provided by elset source to indicate the target onorbit
   * object of this elset. This may be an internal identifier and not necessarily map
   * to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * The orbit point nearest to the center of the earth in kilometers. If not
   * provided, perigee will be computed from the TLE according to the following.
   * Using mu, the standard gravitational parameter for the earth (398600.4418),
   * semi-major axis A = (mu/(n _ 2 _ pi/(24*3600))^2)(1/3). Using semi-major axis A,
   * eccentricity E, perigee = (A * (1 - E)) in km. Note that the calculations are
   * for computing the perigee radius from the center of the earth, to compute
   * perigee altitude the radius of the earth should be subtracted (6378.135 km).
   */
  perigee?: number;

  /**
   * Period of the orbit equal to inverse of mean motion, in minutes.
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
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The current revolution number. The value is incremented when a satellite crosses
   * the equator on an ascending pass.
   */
  revNo?: number;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * The sum of the periapsis and apoapsis distances divided by two. For circular
   * orbits, the semimajor axis is the distance between the centers of the bodies,
   * not the distance of the bodies from the center of mass. Units are kilometers.
   */
  semiMajorAxis?: number;

  /**
   * Optional array of UDL data (observation) UUIDs used to build this element set.
   * See the associated sourcedDataTypes array for the specific types of observations
   * for the positionally corresponding UUIDs in this array (the two arrays must
   * match in size).
   */
  sourcedData?: Array<string>;

  /**
   * Optional array of UDL observation data types used to build this element set
   * (e.g. EO, RADAR, RF, DOA). See the associated sourcedData array for the specific
   * UUIDs of observations for the positionally corresponding data types in this
   * array (the two arrays must match in size).
   */
  sourcedDataTypes?: Array<'EO' | 'RADAR' | 'RF' | 'DOA' | 'ELSET' | 'SV'>;

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
   * Boolean indicating this Elset was unable to be correlated to a known object.
   * This flag should only be set to true by data providers after an attempt to
   * correlate to an on-orbit object was made and failed. If unable to correlate, the
   * 'origObjectId' field may be populated with an internal data provider specific
   * identifier.
   */
  uct?: boolean;
}

/**
 * An element set is a collection of Keplerian orbital elements describing an orbit
 * of a particular satellite. The data is used along with an orbit propagator in
 * order to predict the motion of a satellite. The element set, or elset for short,
 * consists of identification data, the classical elements and drag parameters.
 */
export interface ElsetAbridged {
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
   * Source of the data.
   */
  source: string;

  /**
   * AGOM, expressed in m^2/kg, is the value of the (averaged) object Area times the
   * solar radiation pressure coefficient(Gamma) over the object Mass. Applicable
   * only with ephemType4.
   */
  agom?: number;

  /**
   * Optional algorithm used to produce this record.
   */
  algorithm?: string;

  /**
   * The orbit point furthest from the center of the earth in kilometers. If not
   * provided, apogee will be computed from the TLE according to the following. Using
   * mu, the standard gravitational parameter for the earth (398600.4418), semi-major
   * axis A = (mu/(n _ 2 _ pi/(24*3600))^2)(1/3). Using semi-major axis A,
   * eccentricity E, apogee = (A * (1 + E)) in km. Note that the calculations are for
   * computing the apogee radius from the center of the earth, to compute apogee
   * altitude the radius of the earth should be subtracted (6378.135 km).
   */
  apogee?: number;

  /**
   * The argument of perigee is the angle in degrees formed between the perigee and
   * the ascending node. If the perigee would occur at the ascending node, the
   * argument of perigee would be 0.
   */
  argOfPerigee?: number;

  /**
   * Ballistic coefficient, in m^2/kg. Applicable only with ephemType4.
   */
  ballisticCoeff?: number;

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
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * The orbital eccentricity of an astronomical object is a parameter that
   * determines the amount by which its orbit around another body deviates from a
   * perfect circle. A value of 0 is a circular orbit, values between 0 and 1 form an
   * elliptic orbit, 1 is a parabolic escape orbit, and greater than 1 is a
   * hyperbolic escape orbit.
   */
  eccentricity?: number;

  /**
   * The ephemeris type associated with this TLE:
   *
   * 0:&nbsp;SGP (or SGP4 with Kozai mean motion)
   *
   * 1:&nbsp;SGP (Kozai mean motion)
   *
   * 2:&nbsp;SGP4 (Brouver mean motion)
   *
   * 3:&nbsp;SDP4
   *
   * 4:&nbsp;SGP4-XP
   *
   * 5:&nbsp;SDP8
   *
   * 6:&nbsp;SP (osculating mean motion)
   */
  ephemType?: number;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  idElset?: string;

  /**
   * Unique identifier of the satellite on-orbit object, if correlated. For the
   * public catalog, the idOnOrbit is typically the satellite number as a string, but
   * may be a UUID for analyst or other unknown or untracked satellites.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the OD solution record that produced this elset. This ID
   * can be used to obtain additional information on an OrbitDetermination object
   * using the 'get by ID' operation (e.g. /udl/orbitdetermination/{id}). For
   * example, the OrbitDetermination with idOrbitDetermination = abc would be queried
   * as /udl/orbitdetermination/abc.
   */
  idOrbitDetermination?: string;

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
   * Mean motion is the angular speed required for a body to complete one orbit,
   * assuming constant speed in a circular orbit which completes in the same time as
   * the variable speed, elliptical orbit of the actual body. Measured in revolutions
   * per day.
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
   * Optional identifier provided by elset source to indicate the target onorbit
   * object of this elset. This may be an internal identifier and not necessarily map
   * to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * The orbit point nearest to the center of the earth in kilometers. If not
   * provided, perigee will be computed from the TLE according to the following.
   * Using mu, the standard gravitational parameter for the earth (398600.4418),
   * semi-major axis A = (mu/(n _ 2 _ pi/(24*3600))^2)(1/3). Using semi-major axis A,
   * eccentricity E, perigee = (A * (1 - E)) in km. Note that the calculations are
   * for computing the perigee radius from the center of the earth, to compute
   * perigee altitude the radius of the earth should be subtracted (6378.135 km).
   */
  perigee?: number;

  /**
   * Period of the orbit equal to inverse of mean motion, in minutes.
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
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * The sum of the periapsis and apoapsis distances divided by two. For circular
   * orbits, the semimajor axis is the distance between the centers of the bodies,
   * not the distance of the bodies from the center of mass. Units are kilometers.
   */
  semiMajorAxis?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Boolean indicating this Elset was unable to be correlated to a known object.
   * This flag should only be set to true by data providers after an attempt to
   * correlate to an on-orbit object was made and failed. If unable to correlate, the
   * 'origObjectId' field may be populated with an internal data provider specific
   * identifier.
   */
  uct?: boolean;
}

export type ElsetListResponse = Array<ElsetAbridged>;

export type ElsetCountResponse = string;

export type ElsetTupleResponse = Array<Elset>;

export interface ElsetCreateParams {
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
   * Source of the data.
   */
  source: string;

  /**
   * AGOM, expressed in m^2/kg, is the value of the (averaged) object Area times the
   * solar radiation pressure coefficient(Gamma) over the object Mass. Applicable
   * only with ephemType4.
   */
  agom?: number;

  /**
   * Optional algorithm used to produce this record.
   */
  algorithm?: string;

  /**
   * The orbit point furthest from the center of the earth in kilometers. If not
   * provided, apogee will be computed from the TLE according to the following. Using
   * mu, the standard gravitational parameter for the earth (398600.4418), semi-major
   * axis A = (mu/(n _ 2 _ pi/(24*3600))^2)(1/3). Using semi-major axis A,
   * eccentricity E, apogee = (A * (1 + E)) in km. Note that the calculations are for
   * computing the apogee radius from the center of the earth, to compute apogee
   * altitude the radius of the earth should be subtracted (6378.135 km).
   */
  apogee?: number;

  /**
   * The argument of perigee is the angle in degrees formed between the perigee and
   * the ascending node. If the perigee would occur at the ascending node, the
   * argument of perigee would be 0.
   */
  argOfPerigee?: number;

  /**
   * Ballistic coefficient, in m^2/kg. Applicable only with ephemType4.
   */
  ballisticCoeff?: number;

  /**
   * The drag term for SGP4 orbital model, used for calculating decay constants for
   * altitude, eccentricity etc, measured in inverse earth radii.
   */
  bStar?: number;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * The orbital eccentricity of an astronomical object is a parameter that
   * determines the amount by which its orbit around another body deviates from a
   * perfect circle. A value of 0 is a circular orbit, values between 0 and 1 form an
   * elliptic orbit, 1 is a parabolic escape orbit, and greater than 1 is a
   * hyperbolic escape orbit.
   */
  eccentricity?: number;

  /**
   * The ephemeris type associated with this TLE:
   *
   * 0:&nbsp;SGP (or SGP4 with Kozai mean motion)
   *
   * 1:&nbsp;SGP (Kozai mean motion)
   *
   * 2:&nbsp;SGP4 (Brouver mean motion)
   *
   * 3:&nbsp;SDP4
   *
   * 4:&nbsp;SGP4-XP
   *
   * 5:&nbsp;SDP8
   *
   * 6:&nbsp;SP (osculating mean motion)
   */
  ephemType?: number;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  idElset?: string;

  /**
   * Unique identifier of the OD solution record that produced this elset. This ID
   * can be used to obtain additional information on an OrbitDetermination object
   * using the 'get by ID' operation (e.g. /udl/orbitdetermination/{id}). For
   * example, the OrbitDetermination with idOrbitDetermination = abc would be queried
   * as /udl/orbitdetermination/abc.
   */
  idOrbitDetermination?: string;

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
   * Mean motion is the angular speed required for a body to complete one orbit,
   * assuming constant speed in a circular orbit which completes in the same time as
   * the variable speed, elliptical orbit of the actual body. Measured in revolutions
   * per day.
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
   * Optional identifier provided by elset source to indicate the target onorbit
   * object of this elset. This may be an internal identifier and not necessarily map
   * to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * The orbit point nearest to the center of the earth in kilometers. If not
   * provided, perigee will be computed from the TLE according to the following.
   * Using mu, the standard gravitational parameter for the earth (398600.4418),
   * semi-major axis A = (mu/(n _ 2 _ pi/(24*3600))^2)(1/3). Using semi-major axis A,
   * eccentricity E, perigee = (A * (1 - E)) in km. Note that the calculations are
   * for computing the perigee radius from the center of the earth, to compute
   * perigee altitude the radius of the earth should be subtracted (6378.135 km).
   */
  perigee?: number;

  /**
   * Period of the orbit equal to inverse of mean motion, in minutes.
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
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * The current revolution number. The value is incremented when a satellite crosses
   * the equator on an ascending pass.
   */
  revNo?: number;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * The sum of the periapsis and apoapsis distances divided by two. For circular
   * orbits, the semimajor axis is the distance between the centers of the bodies,
   * not the distance of the bodies from the center of mass. Units are kilometers.
   */
  semiMajorAxis?: number;

  /**
   * Optional array of UDL data (observation) UUIDs used to build this element set.
   * See the associated sourcedDataTypes array for the specific types of observations
   * for the positionally corresponding UUIDs in this array (the two arrays must
   * match in size).
   */
  sourcedData?: Array<string>;

  /**
   * Optional array of UDL observation data types used to build this element set
   * (e.g. EO, RADAR, RF, DOA). See the associated sourcedData array for the specific
   * UUIDs of observations for the positionally corresponding data types in this
   * array (the two arrays must match in size).
   */
  sourcedDataTypes?: Array<'EO' | 'RADAR' | 'RF' | 'DOA' | 'ELSET' | 'SV'>;

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
   * Boolean indicating this Elset was unable to be correlated to a known object.
   * This flag should only be set to true by data providers after an attempt to
   * correlate to an on-orbit object was made and failed. If unable to correlate, the
   * 'origObjectId' field may be populated with an internal data provider specific
   * identifier.
   */
  uct?: boolean;
}

export interface ElsetRetrieveParams {
  firstResult?: number;

  maxResult?: number;
}

export interface ElsetListParams {
  /**
   * Elset epoch time in ISO 8601 UTC format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  epoch: string;

  firstResult?: number;

  maxResult?: number;
}

export interface ElsetCountParams {
  /**
   * Elset epoch time in ISO 8601 UTC format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  epoch: string;

  firstResult?: number;

  maxResult?: number;
}

export interface ElsetCreateBulkParams {
  /**
   * Body param:
   */
  body: Array<ElsetIngest>;

  /**
   * Query param: Boolean indicating if these elsets should be checked for
   * duplicates, default is not to.
   */
  dupeCheck?: boolean;
}

export interface ElsetCreateBulkFromTleParams {
  /**
   * Query param: Data mode of the passed elsets (REAL, TEST, etc).
   */
  dataMode: string;

  /**
   * Query param: Boolean indicating if these elsets should be set as the 'current'
   * for their corresponding on-orbit/satellite numbers.
   */
  makeCurrent: boolean;

  /**
   * Query param: Source of the elset data.
   */
  source: string;

  /**
   * Body param:
   */
  body: string;

  /**
   * Query param: Boolean indicating if a shell Onorbit/satellite should be created
   * if the passed satellite number doesn't exist.
   */
  autoCreateSats?: boolean;

  /**
   * Query param: Dissemination control of the passed elsets (e.g. to support tagging
   * with proprietary markings).
   */
  control?: string;

  /**
   * Query param: Origin of the elset data.
   */
  origin?: string;

  /**
   * Query param: Optional comma-delineated list of provider/source specific tags for
   * this data, where each element is no longer than 32 characters, used for
   * implementing data owner conditional access controls to restrict access to the
   * data. Should be left null by data providers unless conditional access controls
   * are coordinated with the UDL team.
   */
  tags?: string;
}

export interface ElsetTupleParams {
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

  maxResult?: number;
}

export interface ElsetUnvalidatedPublishParams {
  body: Array<ElsetIngest>;
}

Elsets.Current = Current;
Elsets.History = History;

export declare namespace Elsets {
  export {
    type Elset as Elset,
    type ElsetIngest as ElsetIngest,
    type ElsetAbridged as ElsetAbridged,
    type ElsetListResponse as ElsetListResponse,
    type ElsetCountResponse as ElsetCountResponse,
    type ElsetTupleResponse as ElsetTupleResponse,
    type ElsetCreateParams as ElsetCreateParams,
    type ElsetRetrieveParams as ElsetRetrieveParams,
    type ElsetListParams as ElsetListParams,
    type ElsetCountParams as ElsetCountParams,
    type ElsetCreateBulkParams as ElsetCreateBulkParams,
    type ElsetCreateBulkFromTleParams as ElsetCreateBulkFromTleParams,
    type ElsetTupleParams as ElsetTupleParams,
    type ElsetUnvalidatedPublishParams as ElsetUnvalidatedPublishParams,
  };

  export {
    Current as Current,
    type CurrentListResponse as CurrentListResponse,
    type CurrentTupleResponse as CurrentTupleResponse,
    type CurrentListParams as CurrentListParams,
    type CurrentTupleParams as CurrentTupleParams,
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
