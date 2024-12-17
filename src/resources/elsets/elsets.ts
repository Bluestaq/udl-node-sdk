// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AntennasAPI from '../antennas';
import * as BatteriesAPI from '../batteries';
import * as EnginesAPI from '../engines';
import * as EntitiesAPI from '../entities';
import * as Shared from '../shared';
import * as CurrentAPI from './current';
import { Current, CurrentListResponse, CurrentTupleParams, CurrentTupleResponse } from './current';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
} from './history';

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
  create(body: ElsetCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/elset', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single elset by its unique ID passed as a path
   * parameter.
   */
  retrieve(params: ElsetRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Shared.ElsetFull> {
    const { path_id, body_id } = params;
    return this._client.get(`/udl/elset/${path_id}`, options);
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(params: ElsetListParams, options?: Core.RequestOptions): Core.APIPromise<ElsetListResponse> {
    const { epoch } = params;
    return this._client.get('/udl/elset', options);
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(params: ElsetCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { epoch } = params;
    return this._client.get('/udl/elset/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
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
  createBulk(params: ElsetCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/elset/createBulk', {
      body: body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to take a multiple TLEs as a POST body and ingest into the
   * database. This operation is not intended to be used for automated feeds into
   * UDL. Data providers should contact the UDL team for specific role assignments
   * and for instructions on setting up a permanent feed through an alternate
   * mechanism.
   */
  createBulkFromTle(
    params: ElsetCreateBulkFromTleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/elset/createBulkFromTLE', {
      body: body,
      ...options,
      headers: { 'Content-Type': 'text/plain', Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/elset/queryhelp', {
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
  tuple(params: ElsetTupleParams, options?: Core.RequestOptions): Core.APIPromise<ElsetTupleResponse> {
    const { columns, epoch } = params;
    return this._client.get('/udl/elset/tuple', options);
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
  dataMode: string;

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
  onOrbit?: Elset.OnOrbit;

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
  sourcedDataTypes?: Array<string>;

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

export namespace Elset {
  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  export interface OnOrbit {
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
    dataMode: string;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Alternate name of the on-orbit object.
     */
    altName?: string;

    /**
     * Read-only collection of antennas on this on-orbit object.
     */
    antennas?: Array<OnOrbit.Antenna>;

    /**
     * Read-only collection of batteries on this on-orbit object.
     */
    batteries?: Array<OnOrbit.Battery>;

    /**
     * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
     * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
     * Heliocentric, Interplanetary, Lagrangian, Docked).
     */
    category?: string;

    /**
     * Common name of the on-orbit object.
     */
    commonName?: string;

    /**
     * Constellation to which this satellite belongs.
     */
    constellation?: string;

    /**
     * The country code. This value is typically the ISO 3166 Alpha-2 two-character
     * country code, however it can also represent various consortiums that do not
     * appear in the ISO document. The code must correspond to an existing country in
     * the UDL�s country API. Call udl/country/{code} to get any associated FIPS code,
     * ISO Alpha-3 code, or alternate code values that exist for the specified country
     * code.
     */
    countryCode?: string;

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
     * Date of decay.
     */
    decayDate?: string;

    entityCollection?: Array<EntitiesAPI.EntityFull>;

    /**
     * For the public catalog, the idOnOrbit is typically the satellite number as a
     * string, but may be a UUID for analyst or other unknown or untracked satellites,
     * auto-generated by the system.
     */
    idOnOrbit?: string;

    /**
     * International Designator, typically of the format YYYYLLLAAA, where YYYY is the
     * launch year, LLL is the sequential launch number of that year, and AAA is an
     * optional launch piece designator for the launch.
     */
    intlDes?: string;

    /**
     * Date of launch.
     */
    launchDate?: string;

    /**
     * Id of the associated launchSite entity.
     */
    launchSiteId?: string;

    /**
     * Estimated lifetime of the on-orbit payload, if known.
     */
    lifetimeYears?: number;

    /**
     * Mission number of the on-orbit object.
     */
    missionNumber?: string;

    /**
     * Type of on-orbit object: ROCKET BODY, DEBRIS, PAYLOAD, PLATFORM, MANNED,
     * UNKNOWN.
     */
    objectType?: string;

    /**
     * Read-only collection of details for this on-orbit object.
     */
    onorbitDetails?: Array<OnOrbit.OnorbitDetail>;

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
     * Read-only collection of solar arrays on this on-orbit object.
     */
    solarArrays?: Array<OnOrbit.SolarArray>;

    /**
     * Read-only collection of thrusters (engines) on this on-orbit object.
     */
    thrusters?: Array<OnOrbit.Thruster>;

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

  export namespace OnOrbit {
    /**
     * Read-only collection of antennas on this on-orbit object.
     */
    export interface Antenna {
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
      dataMode: string;

      /**
       * ID of the antenna.
       */
      idAntenna: string;

      /**
       * ID of the on-orbit object.
       */
      idOnOrbit: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Model representation of information on on-orbit/spacecraft communication
       * antennas. A spacecraft may have multiple antennas and each antenna can have
       * multiple 'details' records compiled by different sources.
       */
      antenna?: AntennasAPI.AntennaFull;

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
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }

    /**
     * Read-only collection of batteries on this on-orbit object.
     */
    export interface Battery {
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
      dataMode: string;

      /**
       * ID of the battery.
       */
      idBattery: string;

      /**
       * ID of the on-orbit object.
       */
      idOnOrbit: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Model representation of specific spacecraft battery types.
       */
      battery?: BatteriesAPI.BatteryFull;

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
       * The number of batteries on the spacecraft of the type identified by idBattery.
       */
      quantity?: number;

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

    /**
     * Contains details of the OnOrbit object.
     */
    export interface OnorbitDetail {
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
      dataMode: string;

      /**
       * UUID of the parent Onorbit record.
       */
      idOnOrbit: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Mass of fuel and disposables at launch time in kilograms.
       */
      additionalMass?: number;

      /**
       * The radius used for long-term debris environment projection analyses that is not
       * as conservative as COLA Radius, in meters.
       */
      adeptRadius?: number;

      /**
       * The total beginning of life delta V of the spacecraft, in meters per second.
       */
      bolDeltaV?: number;

      /**
       * Spacecraft beginning of life fuel mass, in orbit, in kilograms.
       */
      bolFuelMass?: number;

      /**
       * Average cross sectional area of the bus in meters squared.
       */
      busCrossSection?: number;

      /**
       * Type of the bus on the spacecraft.
       */
      busType?: string;

      /**
       * Maximum dimension of the box circumscribing the spacecraft (d = sqrt(a*a + b*b +
       * c\*c) where a is the tip-to-tip dimension, b and c are perpendicular to that.)
       * in meters.
       */
      colaRadius?: number;

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
       * Average cross sectional area in meters squared.
       */
      crossSection?: number;

      /**
       * The estimated total current mass of the spacecraft, in kilograms.
       */
      currentMass?: number;

      /**
       * The 1-sigma uncertainty of the total spacecraft delta V, in meters per second.
       */
      deltaVUnc?: number;

      /**
       * Array of the estimated mass of each deployable object, in kilograms. Must
       * contain the same number of elements as the value of numDeployable.
       */
      depEstMasses?: Array<number>;

      /**
       * Array of the 1-sigma uncertainty of the mass for each deployable object, in
       * kilograms. Must contain the same number of elements as the value of
       * numDeployable.
       */
      depMassUncs?: Array<number>;

      /**
       * Array of satellite deployable objects. Must contain the same number of elements
       * as the value of numDeployable.
       */
      depNames?: Array<string>;

      /**
       * GEO drift rate, if applicable in degrees per day.
       */
      driftRate?: number;

      /**
       * Spacecraft dry mass (without fuel or disposables) in kilograms.
       */
      dryMass?: number;

      /**
       * Estimated maximum burn duration for the object, in seconds.
       */
      estDeltaVDuration?: number;

      /**
       * Estimated remaining fuel for the object in kilograms.
       */
      fuelRemaining?: number;

      /**
       * GEO slot if applicable, in degrees. -180 (West of Prime Meridian) to 180 degrees
       * (East of Prime Meridian). Prime Meridian is 0.
       */
      geoSlot?: number;

      /**
       * The name of the source who last provided an observation for this idOnOrbit.
       */
      lastObSource?: string;

      /**
       * Time of last reported observation for this object in ISO 8601 UTC with
       * microsecond precision.
       */
      lastObTime?: string;

      /**
       * Nominal mass of spacecraft and fuel at launch time, in kilograms.
       */
      launchMass?: number;

      /**
       * Maximum (estimated) mass of spacecraft and fuel at launch time, in kilograms.
       */
      launchMassMax?: number;

      /**
       * Minimum (estimated) mass of spacecraft and fuel at launch time, in kilograms.
       */
      launchMassMin?: number;

      /**
       * Boolean indicating whether a spacecraft is maneuverable. Note that a spacecraft
       * may have propulsion capability but may not be maneuverable due to lack of fuel,
       * anomalous condition, or other operational constraints.
       */
      maneuverable?: boolean;

      /**
       * Maximum delta V available for this on-orbit spacecraft, in meters per second.
       */
      maxDeltaV?: number;

      /**
       * Maximum dimension across the spacecraft (e.g., tip-to-tip across the solar panel
       * arrays) in meters.
       */
      maxRadius?: number;

      /**
       * Array of the type of missions the spacecraft performs. Must contain the same
       * number of elements as the value of numMission.
       */
      missionTypes?: Array<string>;

      /**
       * The number of sub-satellites or deployable objects on the spacecraft.
       */
      numDeployable?: number;

      /**
       * The number of distinct missions the spacecraft performs.
       */
      numMission?: number;

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
       * Current/latest radar cross section in meters squared.
       */
      rcs?: number;

      /**
       * Maximum radar cross section in meters squared.
       */
      rcsMax?: number;

      /**
       * Mean radar cross section in meters squared.
       */
      rcsMean?: number;

      /**
       * Minimum radar cross section in meters squared.
       */
      rcsMin?: number;

      /**
       * The reference source, sources, or URL from which the data in this record was
       * obtained.
       */
      refSource?: string;

      /**
       * Spacecraft deployed area of solar array in meters squared.
       */
      solarArrayArea?: number;

      /**
       * The 1-sigma uncertainty of the total spacecraft mass, in kilograms.
       */
      totalMassUnc?: number;

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
       * Current/latest visual magnitude in M.
       */
      vismag?: number;

      /**
       * Maximum visual magnitude in M.
       */
      vismagMax?: number;

      /**
       * Mean visual magnitude in M.
       */
      vismagMean?: number;

      /**
       * Minimum visual magnitude in M.
       */
      vismagMin?: number;
    }

    /**
     * Read-only collection of solar arrays on this on-orbit object.
     */
    export interface SolarArray {
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
      dataMode: string;

      /**
       * ID of the on-orbit object.
       */
      idOnOrbit: string;

      /**
       * ID of the SolarArray.
       */
      idSolarArray: string;

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
       * The number of solar arrays on the spacecraft of the type identified by
       * idSolarArray.
       */
      quantity?: number;

      /**
       * Model representation of information on on-orbit/spacecraft solar arrays. A
       * spacecraft may have multiple solar arrays and each solar array can have multiple
       * 'details' records compiled by different sources.
       */
      solarArray?: SolarArray.SolarArray;

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

    export namespace SolarArray {
      /**
       * Model representation of information on on-orbit/spacecraft solar arrays. A
       * spacecraft may have multiple solar arrays and each solar array can have multiple
       * 'details' records compiled by different sources.
       */
      export interface SolarArray {
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
        dataMode: string;

        /**
         * Solar Array name.
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
         * Read-only collection of additional SolarArrayDetails by various sources for this
         * organization, ignored on create/update. These details must be created separately
         * via the /udl/solararraydetails operations.
         */
        solarArrayDetails?: Array<SolarArray.SolarArrayDetail>;

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

      export namespace SolarArray {
        /**
         * Model representation of Information on spacecraft SolarArrayDetails. A
         * SolarArray may have multiple details records compiled by various sources.
         */
        export interface SolarArrayDetail {
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
          dataMode: string;

          /**
           * Unique identifier of the parent SolarArray.
           */
          idSolarArray: string;

          /**
           * Source of the data.
           */
          source: string;

          /**
           * Unique identifier of the record, auto-generated by the system.
           */
          id?: string;

          /**
           * Solar Array area in square meters.
           */
          area?: number;

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
           * Solar array description/notes.
           */
          description?: string;

          /**
           * Solar array junction technology (e.g. Triple).
           */
          junctionTechnology?: string;

          /**
           * An organization such as a corporation, manufacturer, consortium, government,
           * etc. An organization may have parent and child organizations as well as link to
           * a former organization if this org previously existed as another organization.
           */
          manufacturerOrg?: SolarArrayDetail.ManufacturerOrg;

          /**
           * Unique identifier of the organization that manufactures the solar array.
           */
          manufacturerOrgId?: string;

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
           * Solar Array span in meters.
           */
          span?: number;

          /**
           * Optional array of provider/source specific tags for this data, where each
           * element is no longer than 32 characters, used for implementing data owner
           * conditional access controls to restrict access to the data. Should be left null
           * by data providers unless conditional access controls are coordinated with the
           * UDL team.
           */
          tags?: Array<string>;

          /**
           * Solar array technology (e.g. Ga-As).
           */
          technology?: string;

          /**
           * Type of solar array (e.g. U Shaped).
           */
          type?: string;

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

        export namespace SolarArrayDetail {
          /**
           * An organization such as a corporation, manufacturer, consortium, government,
           * etc. An organization may have parent and child organizations as well as link to
           * a former organization if this org previously existed as another organization.
           */
          export interface ManufacturerOrg {
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
            dataMode: string;

            /**
             * Organization name.
             */
            name: string;

            /**
             * Source of the data.
             */
            source: string;

            /**
             * Type of organization (e.g. GOVERNMENT, CORPORATION, CONSORTIUM, ACADEMIC).
             */
            type: string;

            /**
             * Unique identifier of the record, auto-generated by the system.
             */
            id?: string;

            /**
             * Boolean indicating if this organization is currently active.
             */
            active?: boolean;

            /**
             * Subtype or category of the organization (e.g. Private company, stock market
             * quoted company, subsidiary, goverment department/agency, etc).
             */
            category?: string;

            /**
             * Country of the physical location of the organization. This value is typically
             * the ISO 3166 Alpha-2 two-character country code. However, it can also represent
             * various consortiums that do not appear in the ISO document. The code must
             * correspond to an existing country in the UDL�s country API. Call
             * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
             * alternate code values that exist for the specified country code.
             */
            countryCode?: string;

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
             * Organization description.
             */
            description?: string;

            /**
             * Optional externally provided identifier for this row.
             */
            externalId?: string;

            /**
             * Country of registration or ownership of the organization. This value is
             * typically the ISO 3166 Alpha-2 two-character country code, however it can also
             * represent various consortiums that do not appear in the ISO document. The code
             * must correspond to an existing country in the UDL�s country API. Call
             * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
             * alternate code values that exist for the specified country code.
             */
            nationality?: string;

            /**
             * Read-only collection of additional OrganizationDetails by various sources for
             * this organization, ignored on create/update. These details must be created
             * separately via the /udl/organizationdetails operations.
             */
            organizationDetails?: Array<ManufacturerOrg.OrganizationDetail>;

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
             * Time the row was last updated in the database, auto-populated by the system.
             */
            updatedAt?: string;

            /**
             * Application user who updated the row in the database, auto-populated by the
             * system.
             */
            updatedBy?: string;
          }

          export namespace ManufacturerOrg {
            /**
             * Model representation of additional detailed organization data as collected by a
             * particular source.
             */
            export interface OrganizationDetail {
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
              dataMode: string;

              /**
               * Unique identifier of the parent organization.
               */
              idOrganization: string;

              /**
               * Organization details name.
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
               * Street number of the organization.
               */
              address1?: string;

              /**
               * Field for additional organization address information such as PO Box and unit
               * number.
               */
              address2?: string;

              /**
               * Contains the third line of address information for an organization.
               */
              address3?: string;

              /**
               * Designated broker for this organization.
               */
              broker?: string;

              /**
               * For organizations of type CORPORATION, the name of the Chief Executive Officer.
               */
              ceo?: string;

              /**
               * For organizations of type CORPORATION, the name of the Chief Financial Officer.
               */
              cfo?: string;

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
               * For organizations of type CORPORATION, the name of the Chief Technology Officer.
               */
              cto?: string;

              /**
               * Organization description.
               */
              description?: string;

              /**
               * For organizations of type CORPORATION, the company EBITDA value as of
               * financialYearEndDate in US Dollars.
               */
              ebitda?: number;

              /**
               * Listed contact email address for the organization.
               */
              email?: string;

              /**
               * For organizations of type CORPORATION, notes on company financials.
               */
              financialNotes?: string;

              /**
               * For organizations of type CORPORATION, the effective financial year end date for
               * revenue, EBITDA, and profit values.
               */
              financialYearEndDate?: string;

              /**
               * Satellite fleet planning notes for this organization.
               */
              fleetPlanNotes?: string;

              /**
               * Former organization ID (if this organization previously existed as another
               * organization).
               */
              formerOrgId?: string;

              /**
               * Total number of FTEs in this organization.
               */
              ftes?: number;

              /**
               * Administrative boundaries of the first sub-national level. Level 1 is simply the
               * largest demarcation under whatever demarcation criteria has been determined by
               * the governing body. For example, this may be a state or province.
               */
              geoAdminLevel1?: string;

              /**
               * Administrative boundaries of the second sub-national level. Level 2 is simply
               * the second largest demarcation under whatever demarcation criteria has been
               * determined by the governing body. For example, this may be a county or district.
               */
              geoAdminLevel2?: string;

              /**
               * Administrative boundaries of the third sub-national level. Level 3 is simply the
               * third largest demarcation under whatever demarcation criteria has been
               * determined by the governing body. For example, this may be a city or township.
               */
              geoAdminLevel3?: string;

              /**
               * Mass ranking for this organization.
               */
              massRanking?: number;

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
               * Parent organization ID of this organization if it is a child organization.
               */
              parentOrgId?: string;

              /**
               * A postal code, such as PIN or ZIP Code, is a series of letters or digits or both
               * included in the postal address of the organization.
               */
              postalCode?: string;

              /**
               * For organizations of type CORPORATION, total annual profit as of
               * financialYearEndDate in US Dollars.
               */
              profit?: number;

              /**
               * For organizations of type CORPORATION, total annual revenue as of
               * financialYearEndDate in US Dollars.
               */
              revenue?: number;

              /**
               * Revenue ranking for this organization.
               */
              revenueRanking?: number;

              /**
               * The name of the risk manager for the organization.
               */
              riskManager?: string;

              /**
               * Notes on the services provided by the organization.
               */
              servicesNotes?: string;

              /**
               * Optional array of provider/source specific tags for this data, where each
               * element is no longer than 32 characters, used for implementing data owner
               * conditional access controls to restrict access to the data. Should be left null
               * by data providers unless conditional access controls are coordinated with the
               * UDL team.
               */
              tags?: Array<string>;

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
          }
        }
      }
    }

    /**
     * Read-only collection of thrusters (engines) on this on-orbit object.
     */
    export interface Thruster {
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
      dataMode: string;

      /**
       * ID of the Engine.
       */
      idEngine: string;

      /**
       * ID of the on-orbit object.
       */
      idOnOrbit: string;

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
       * Known launch vehicle engines and their performance characteristics and limits. A
       * launch vehicle has 1 to many engines per stage.
       */
      engine?: EnginesAPI.Engine;

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
       * The number of engines/thrusters on the spacecraft of the type identified by
       * idEngine.
       */
      quantity?: number;

      /**
       * The type of thruster associated with this record (e.g. LAE, Hydrazine REA,
       * etc.).
       */
      type?: string;

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
  }
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
  dataMode: string;

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

export type ElsetTupleResponse = Array<Shared.ElsetFull>;

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
  dataMode: string;

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
  sourcedDataTypes?: Array<string>;

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

export interface ElsetRetrieveParams {
  /**
   * Path param:
   */
  path_id: string;

  /**
   * Body param: The ID of the elset to retrieve.
   */
  body_id: string;
}

export interface ElsetListParams {
  /**
   * Elset epoch time in ISO 8601 UTC format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  epoch: string;
}

export interface ElsetCountParams {
  /**
   * Elset epoch time in ISO 8601 UTC format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  epoch: string;
}

export interface ElsetCreateBulkParams {
  body: Array<ElsetCreateBulkParams.Body>;

  /**
   * Boolean indicating if these elsets should be checked for duplicates, default is
   * not to.
   */
  dupeCheck?: boolean;
}

export namespace ElsetCreateBulkParams {
  /**
   * An element set is a collection of Keplerian orbital elements describing an orbit
   * of a particular satellite. The data is used along with an orbit propagator in
   * order to predict the motion of a satellite. The element set, or elset for short,
   * consists of identification data, the classical elements and drag parameters.
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
    dataMode: string;

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
    sourcedDataTypes?: Array<string>;

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
}

export interface ElsetCreateBulkFromTleParams {
  body: string;

  /**
   * Data mode of the passed elsets (REAL, TEST, etc).
   */
  dataMode: string;

  /**
   * Boolean indicating if these elsets should be set as the 'current' for their
   * corresponding on-orbit/satellite numbers.
   */
  makeCurrent: boolean;

  /**
   * Source of the elset data.
   */
  source: string;

  /**
   * Boolean indicating if a shell Onorbit/satellite should be created if the passed
   * satellite number doesn't exist.
   */
  autoCreateSats?: boolean;

  /**
   * Dissemination control of the passed elsets (e.g. to support tagging with
   * proprietary markings).
   */
  control?: string;

  /**
   * Origin of the elset data.
   */
  origin?: string;

  /**
   * Optional comma-delineated list of provider/source specific tags for this data,
   * where each element is no longer than 32 characters, used for implementing data
   * owner conditional access controls to restrict access to the data. Should be left
   * null by data providers unless conditional access controls are coordinated with
   * the UDL team.
   */
  tags?: string;
}

export interface ElsetTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the �queryhelp� operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Elset epoch time in ISO 8601 UTC format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  epoch: string;
}

Elsets.Current = Current;
Elsets.History = History;

export declare namespace Elsets {
  export {
    type Elset as Elset,
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
  };

  export {
    Current as Current,
    type CurrentListResponse as CurrentListResponse,
    type CurrentTupleResponse as CurrentTupleResponse,
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
