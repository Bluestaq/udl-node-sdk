// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AntennasAPI from '../antennas';
import * as BatteriesAPI from '../batteries';
import * as EnginesAPI from '../engines';
import * as EntitiesAPI from '../entities';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
} from './history';
import { type Response } from '../../_shims/index';

export class EphemerisSets extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation intended for initial integration only. Takes a single
   * EphemerisSet as a POST body and ingest into the database. This operation does
   * not persist any Ephemeris Points that may be present in the body of the request.
   * This operation is not intended to be used for automated feeds into UDL.A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * The following rules apply to this operation:
   *
   * <h3>
   *  * Ephemeris Set numPoints value must correspond exactly to the number of Ephemeris states associated with that Ephemeris Set.  The numPoints value is checked against the actual posted number of states and mismatch will result in the post being rejected.
   *  * Ephemeris Set pointStartTime and pointEndTime must correspond to the earliest and latest state times, respectively, of the associated Ephemeris states.
   *  * Either satNo, idOnOrbit, or origObjectId must be provided.  The preferred option is to post with satNo for a cataloged object, and with (only) origObjectId for an unknown, uncatalogued, or internal/test object.  There are several cases for the logic associated with these fields:
   *    + If satNo is provided and correlates to a known UDL sat number then the idOnOrbit will be populated appropriately in addition to the satNo.
   *    + If satNo is provided and does not correlate to a known UDL sat number then the provided satNo value will be moved to the origObjectId field and satNo left null.
   *    + If origObjectId and a valid satNo or idOnOrbit are provided then both the satNo/idOnOrbit and origObjectId will maintain the provided values.
   *    + If only origObjectId is provided then origObjectId will be populated with the posted value.  In this case, no checks are made against existing UDL sat numbers.
   * </h3>
   */
  create(body: EphemerisSetCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/ephemerisset', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single Ephemeris Set by its unique ID passed as a
   * path parameter.
   */
  retrieve(
    params: EphemerisSetRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.EphemerisSetFull> {
    const { path_id, body_id } = params;
    return this._client.get(`/udl/ephemerisset/${path_id}`, options);
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    params?: EphemerisSetListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EphemerisSetListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<EphemerisSetListResponse>;
  list(
    params: EphemerisSetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EphemerisSetListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { pointEndTime, pointStartTime } = params;
    return this._client.get('/udl/ephemerisset', options);
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(params?: EphemerisSetCountParams, options?: Core.RequestOptions): Core.APIPromise<string>;
  count(options?: Core.RequestOptions): Core.APIPromise<string>;
  count(
    params: EphemerisSetCountParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    if (isRequestOptions(params)) {
      return this.count({}, params);
    }
    const { pointEndTime, pointStartTime } = params;
    return this._client.get('/udl/ephemerisset/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to get the original raw flat file, if any, associated with the
   * EphemerisSet. The file is returned as an attachment Content-Disposition.
   */
  fileRetrieve(
    params: EphemerisSetFileRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    const { path_id, body_id } = params;
    return this._client.get(`/udl/ephemerisset/getFile/${path_id}`, { ...options, __binaryResponse: true });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/ephemerisset/queryhelp', {
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
  tuple(
    params: EphemerisSetTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EphemerisSetTupleResponse> {
    const { columns, pointEndTime, pointStartTime } = params;
    return this._client.get('/udl/ephemerisset/tuple', options);
  }
}

/**
 * EphemerisSet represents a wrapper or collection of Ephemeris 'points' and meta
 * data indicating the specifics of the propagation of an on-orbit object.
 * Ephemeris is typically distributed in a flat file containing details of the
 * ephemeris generation as well as a large collection of individual points at
 * varying time steps. EphemerisSet is analogous to this flat file.
 */
export interface EphemerisSet {
  /**
   * The source category of the ephemeris (e.g. OWNER_OPERATOR, ANALYST, EXTERNAL).
   */
  category: string;

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
   * Number of points contained in the ephemeris.
   */
  numPoints: number;

  /**
   * End time/last time point of the ephemeris, in ISO 8601 UTC format.
   */
  pointEndTime: string;

  /**
   * Start time/first time point of the ephemeris, in ISO 8601 UTC format.
   */
  pointStartTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type/purpose of the ephemeris (e.g., CALIBRATION, LAUNCH, MNVR_PLAN,
   * ROUTINE, SCREENING).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * First derivative of ballistic coefficient (m^2/kg-s).
   */
  bDot?: number;

  /**
   * The Central Body of the ephemeris. Assumed to be Earth, unless otherwise
   * indicated.
   */
  centBody?: string;

  /**
   * Additional source provided comments associated with the ephemeris.
   */
  comments?: string;

  /**
   * The reference frame of the covariance matrix elements. If the covReferenceFrame
   * is null it is assumed to be J2000.
   */
  covReferenceFrame?: string;

  /**
   * Time the row was created in the database, in UTC.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * Notes/description of the provided ephemeris. A value of DSTOP signifies the
   * ephemeris were generated using the last observation available.
   */
  description?: string;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Drag model used in ephemeris generation (e.g. JAC70, MSIS90, NONE, etc.).
   */
  dragModel?: string;

  /**
   * Model parameter value for energy dissipation rate (EDR), expressed in w/kg.
   */
  edr?: number;

  /**
   * The list of ephemeris states belonging to the EphemerisSet. Each ephemeris point
   * is associated with a parent Ephemeris Set via the EphemerisSet ID (esId).
   */
  ephemerisList?: Array<Shared.EphemerisFull>;

  /**
   * Filename of the raw file used to provide the ephemeris data including filetype
   * extension, if applicable. This file may be retrieved using the 'getFile'
   * operation as specified in the 'EphemerisSet' OpenAPI docs.
   */
  filename?: string;

  /**
   * Geopotential model used in ephemeris generation (e.g. EGM-96, WGS-84, WGS-72,
   * JGM-2, GEM-T3), including mm degree zonals, nn degree/order tesserals (e.g.
   * EGM-96 24Z,24T).
   */
  geopotentialModel?: string;

  /**
   * Boolean indicating whether acceleration data is provided with the ephemeris.
   */
  hasAccel?: boolean;

  /**
   * Boolean indicating whether covariance data is provided with the ephemeris.
   */
  hasCov?: boolean;

  /**
   * Boolean indicating whether maneuver(s) are incorporated into the ephemeris.
   */
  hasMnvr?: boolean;

  /**
   * Array of the maneuver IDs of all maneuvers incorporated in the ephemeris.
   */
  idManeuvers?: Array<string>;

  /**
   * Unique identifier of the primary satellite on-orbit object.
   */
  idOnOrbit?: string;

  /**
   * ID of the State Vector used to generate the ephemeris.
   */
  idStateVector?: string;

  /**
   * Integrator used in ephemeris generation (e.g. RK7(8), RK8(9), COWELL, TWO-BODY).
   */
  integrator?: string;

  /**
   * The recommended interpolation method for the ephemeris data.
   */
  interpolation?: string;

  /**
   * The recommended interpolation degree for the ephemeris data.
   */
  interpolationDegree?: number;

  /**
   * Boolean indicating use of lunar/solar data in ephemeris generation.
   */
  lunarSolar?: boolean;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: EphemerisSet.OnOrbit;

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
   * Optional identifier provided by ephemeris source to indicate the target object
   * of this ephemeris. This may be an internal identifier and not necessarily map to
   * a valid satellite number.
   */
  origObjectId?: string;

  /**
   * The pedigree of the ephemeris or source data used for ephemeris generation (e.g.
   * DOPPLER, GPS, HYBRID, PROPAGATED, RANGING, SLR).
   */
  pedigree?: string;

  /**
   * The reference frame of the cartesian orbital states. If the referenceFrame is
   * null it is assumed to be J2000.
   */
  referenceFrame?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Boolean indicating use of solid earth tide data in ephemeris generation.
   */
  solidEarthTides?: boolean;

  /**
   * This service provides operations for querying and manipulation of state vectors
   * for OnOrbit objects. State vectors are cartesian vectors of position (r) and
   * velocity (v) that, together with their time (epoch) (t), uniquely determine the
   * trajectory of the orbiting body in space. J2000 is the preferred coordinate
   * frame for all state vector positions/velocities in UDL, but in some cases data
   * may be in another frame depending on the provider and/or datatype. Please see
   * the 'Discover' tab in the storefront to confirm coordinate frames by data
   * provider.
   */
  stateVector?: EphemerisSet.StateVector;

  /**
   * Ephemeris step size, in seconds.
   */
  stepSize?: number;

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
   * Optional end time of the usable time span for the ephemeris data, in ISO 8601
   * UTC format with microsecond precision.
   */
  usableEndTime?: string;

  /**
   * Optional start time of the usable time span for the ephemeris data, in ISO 8601
   * UTC format with microsecond precision.
   */
  usableStartTime?: string;
}

export namespace EphemerisSet {
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

  /**
   * This service provides operations for querying and manipulation of state vectors
   * for OnOrbit objects. State vectors are cartesian vectors of position (r) and
   * velocity (v) that, together with their time (epoch) (t), uniquely determine the
   * trajectory of the orbiting body in space. J2000 is the preferred coordinate
   * frame for all state vector positions/velocities in UDL, but in some cases data
   * may be in another frame depending on the provider and/or datatype. Please see
   * the 'Discover' tab in the storefront to confirm coordinate frames by data
   * provider.
   */
  export interface StateVector {
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
     * Time of validity for state vector in ISO 8601 UTC datetime format, with
     * microsecond precision.
     */
    epoch: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The actual time span used for the OD of the object, expressed in days.
     */
    actualODSpan?: number;

    /**
     * Optional algorithm used to produce this record.
     */
    algorithm?: string;

    /**
     * The reference frame of the alternate1 (Alt1) cartesian orbital state.
     */
    alt1ReferenceFrame?: string;

    /**
     * The reference frame of the alternate2 (Alt2) cartesian orbital state.
     */
    alt2ReferenceFrame?: string;

    /**
     * The actual area of the object at it's largest cross-section, expressed in
     * meters^2.
     */
    area?: number;

    /**
     * First derivative of drag/ballistic coefficient (m2/kg-s).
     */
    bDot?: number;

    /**
     * Model parameter value for center of mass offset (m).
     */
    cmOffset?: number;

    /**
     * Covariance matrix, in kilometer and second based units, in the specified
     * covReferenceFrame. If the covReferenceFrame is null it is assumed to be J2000.
     * The array values (1-21) represent the lower triangular half of the
     * position-velocity covariance matrix. The size of the covariance matrix is
     * dynamic, depending on whether the covariance for position only or position &
     * velocity. The covariance elements are position dependent within the array with
     * values ordered as follows:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR&nbsp;&nbsp;
     *
     * x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
     *
     * y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3
     *
     * z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;6
     *
     * x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;&nbsp;10
     *
     * y'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11&nbsp;&nbsp;12&nbsp;&nbsp;13&nbsp;&nbsp;14&nbsp;&nbsp;15
     *
     * z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;17&nbsp;&nbsp;18&nbsp;&nbsp;19&nbsp;&nbsp;20&nbsp;&nbsp;&nbsp;21&nbsp;
     *
     * The cov array should contain only the lower left triangle values from top left
     * down to bottom right, in order.
     *
     * If additional covariance terms are included for DRAG, SRP, and/or THRUST, the
     * matrix can be extended with the following order of elements:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR
     *
     * DRG&nbsp;&nbsp;&nbsp;22&nbsp;&nbsp;23&nbsp;&nbsp;24&nbsp;&nbsp;25&nbsp;&nbsp;26&nbsp;&nbsp;&nbsp;27&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28&nbsp;&nbsp;
     *
     * SRP&nbsp;&nbsp;&nbsp;29&nbsp;&nbsp;30&nbsp;&nbsp;31&nbsp;&nbsp;32&nbsp;&nbsp;33&nbsp;&nbsp;&nbsp;34&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36&nbsp;&nbsp;
     *
     * THR&nbsp;&nbsp;&nbsp;37&nbsp;&nbsp;38&nbsp;&nbsp;39&nbsp;&nbsp;40&nbsp;&nbsp;41&nbsp;&nbsp;&nbsp;42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45&nbsp;
     */
    cov?: Array<number>;

    /**
     * The method used to generate the covariance during the orbit determination (OD)
     * that produced the state vector, or whether an arbitrary, non-calculated default
     * value was used (CALCULATED, DEFAULT).
     */
    covMethod?: string;

    /**
     * The reference frame of the covariance matrix elements. If the covReferenceFrame
     * is null it is assumed to be J2000.
     */
    covReferenceFrame?: string;

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
     * The effective area of the object exposed to atmospheric drag, expressed in
     * meters^2.
     */
    dragArea?: number;

    /**
     * Area-to-mass ratio coefficient for atmospheric ballistic drag (m2/kg).
     */
    dragCoeff?: number;

    /**
     * The Drag Model used for this vector (e.g. HARRIS-PRIESTER, JAC70, JBH09, MSIS90,
     * NONE, etc.).
     */
    dragModel?: string;

    /**
     * Model parameter value for energy dissipation rate (EDR) (w/kg).
     */
    edr?: number;

    /**
     * Start time at which this state vector was the 'current' state vector for its
     * satellite.
     */
    effectiveFrom?: string;

    /**
     * End time at which this state vector was no longer the 'current' state vector for
     * its satellite.
     */
    effectiveUntil?: string;

    /**
     * The covariance matrix values represent the lower triangular half of the
     * covariance matrix in terms of equinoctial elements.&nbsp; The size of the
     * covariance matrix is dynamic.&nbsp; The values are outputted in order across
     * each row, i.e.:
     *
     * 1&nbsp;&nbsp; 2&nbsp;&nbsp; 3&nbsp;&nbsp; 4&nbsp;&nbsp; 5
     *
     * 6&nbsp;&nbsp; 7&nbsp;&nbsp; 8&nbsp;&nbsp; 9&nbsp; 10
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * 51&nbsp; 52&nbsp; 53&nbsp; 54&nbsp; 55
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * The ordering of values is as follows:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Af&nbsp;&nbsp;
     * Ag&nbsp;&nbsp; L&nbsp;&nbsp;&nbsp; N&nbsp;&nbsp; Chi&nbsp; Psi&nbsp;&nbsp;
     * B&nbsp;&nbsp; BDOT AGOM&nbsp; T&nbsp;&nbsp; C1&nbsp;&nbsp; C2&nbsp; ...
     *
     * Af&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1
     *
     * Ag&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp; 3
     *
     * L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     * 4&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp;&nbsp; 6
     *
     * N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     * 7&nbsp;&nbsp;&nbsp; 8&nbsp;&nbsp;&nbsp; 9&nbsp;&nbsp; 10
     *
     * Chi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11&nbsp;&nbsp; 12&nbsp;&nbsp;
     * 13&nbsp;&nbsp; 14&nbsp;&nbsp; 15
     *
     * Psi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16&nbsp;&nbsp; 17&nbsp;&nbsp;
     * 18&nbsp;&nbsp; 19&nbsp;&nbsp; 20&nbsp;&nbsp; 21
     *
     * B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22&nbsp;&nbsp;
     * 23&nbsp;&nbsp; 24 &nbsp;&nbsp;25&nbsp;&nbsp; 26&nbsp;&nbsp; 27&nbsp;&nbsp; 28
     *
     * BDOT&nbsp;&nbsp; 29&nbsp;&nbsp; 30&nbsp;&nbsp; 31&nbsp;&nbsp; 32&nbsp;&nbsp;
     * 33&nbsp;&nbsp; 34&nbsp;&nbsp; 35&nbsp;&nbsp; 36
     *
     * AGOM&nbsp; 37&nbsp;&nbsp; 38&nbsp;&nbsp; 39&nbsp;&nbsp; 40&nbsp;&nbsp;
     * 41&nbsp;&nbsp; 42&nbsp;&nbsp; 43&nbsp;&nbsp; 44&nbsp;&nbsp; 45
     *
     * T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 46&nbsp;&nbsp;
     * 47&nbsp;&nbsp; 48&nbsp;&nbsp; 49&nbsp;&nbsp; 50&nbsp;&nbsp; 51&nbsp;&nbsp;
     * 52&nbsp;&nbsp; 53&nbsp;&nbsp; 54&nbsp;&nbsp; 55
     *
     * C1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 56&nbsp;&nbsp; 57&nbsp;&nbsp;
     * 58&nbsp;&nbsp; 59&nbsp;&nbsp; 60&nbsp;&nbsp; 61&nbsp;&nbsp; 62&nbsp;&nbsp;
     * 63&nbsp;&nbsp; 64&nbsp;&nbsp; 65&nbsp;&nbsp; 66
     *
     * C2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 67&nbsp;&nbsp; 68&nbsp;&nbsp;
     * 69&nbsp;&nbsp; 70&nbsp;&nbsp; 71&nbsp; &nbsp;72&nbsp;&nbsp; 73&nbsp;&nbsp;
     * 74&nbsp;&nbsp; 75&nbsp;&nbsp; 76&nbsp;&nbsp; 77&nbsp;&nbsp; 78
     *
     * :
     *
     * :
     *
     * where C1, C2, etc, are the "consider parameters" that may be added to the
     * covariance matrix.&nbsp; The covariance matrix will be as large as the last
     * element/model parameter needed.&nbsp; In other words, if the DC solved for all 6
     * elements plus AGOM, the covariance matrix will be 9x9 (and the rows for B and
     * BDOT will be all zeros).&nbsp; If the covariance matrix is unavailable, the size
     * will be set to 0x0, and no data will follow.&nbsp; The cov field should contain
     * only the lower left triangle values from top left down to bottom right, in
     * order.
     */
    eqCov?: Array<number>;

    /**
     * Integrator error control.
     */
    errorControl?: number;

    /**
     * Boolean indicating use of fixed step size for this vector.
     */
    fixedStep?: boolean;

    /**
     * Geopotential model used for this vector (e.g. EGM-96, WGS-84, WGS-72, JGM-2, or
     * GEM-T3), including mm degree zonals, nn degree/order tesserals. E.g. EGM-96
     * 24Z,24T.
     */
    geopotentialModel?: string;

    /**
     * Number of terms used in the IAU 1980 nutation model (4, 50, or 106).
     */
    iau1980Terms?: number;

    /**
     * Unique identifier of the satellite on-orbit object, if correlated. For the
     * public catalog, the idOnOrbit is typically the satellite number as a string, but
     * may be a UUID for analyst or other unknown or untracked satellites.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the OD solution record that produced this state vector.
     * This ID can be used to obtain additional information on an OrbitDetermination
     * object using the 'get by ID' operation (e.g. /udl/orbitdetermination/{id}). For
     * example, the OrbitDetermination with idOrbitDetermination = abc would be queries
     * as /udl/orbitdetermination/abc.
     */
    idOrbitDetermination?: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    idStateVector?: string;

    /**
     * Integrator Mode.
     */
    integratorMode?: string;

    /**
     * Boolean indicating use of in-track thrust perturbations for this vector.
     */
    inTrackThrust?: boolean;

    /**
     * The end of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC format with microsecond precision. For an exact
     * observation time, the firstObTime and lastObTime are the same.
     */
    lastObEnd?: string;

    /**
     * The start of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC format with microsecond precision. For an exact
     * observation time, the firstObTime and lastObTime are the same.
     */
    lastObStart?: string;

    /**
     * Time of the next leap second after epoch in ISO 8601 UTC time. If the next leap
     * second is not known, the time of the previous leap second is used.
     */
    leapSecondTime?: string;

    /**
     * Boolean indicating use of lunar/solar perturbations for this vector.
     */
    lunarSolar?: boolean;

    /**
     * The mass of the object, in kilograms.
     */
    mass?: number;

    /**
     * The number of observations available for the OD of the object.
     */
    obsAvailable?: number;

    /**
     * The number of observations accepted for the OD of the object.
     */
    obsUsed?: number;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: StateVector.OnOrbit;

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
     * Optional identifier provided by state vector source to indicate the target
     * onorbit object of this state vector. This may be an internal identifier and not
     * necessarily map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Type of partial derivatives used (ANALYTIC, FULL NUM, or FAST NUM).
     */
    partials?: string;

    /**
     * The pedigree of state vector, or methods used for its generation to include
     * state update/orbit determination, propagation from another state, or a state
     * from a calibration satellite (e.g. ORBIT_UPDATE, PROPAGATION, CALIBRATION,
     * CONJUNCTION, FLIGHT_PLAN).
     */
    pedigree?: string;

    /**
     * Polar Wander Motion X (arc seconds).
     */
    polarMotionX?: number;

    /**
     * Polar Wander Motion Y (arc seconds).
     */
    polarMotionY?: number;

    /**
     * One sigma position uncertainty, in kilometers.
     */
    posUnc?: number;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * The recommended OD time span calculated for the object, expressed in days.
     */
    recODSpan?: number;

    /**
     * The reference frame of the cartesian orbital states. If the referenceFrame is
     * null it is assumed to be J2000.
     */
    referenceFrame?: string;

    /**
     * The percentage of residuals accepted in the OD of the object.
     */
    residualsAcc?: number;

    /**
     * Epoch revolution number.
     */
    revNo?: number;

    /**
     * The Weighted Root Mean Squared (RMS) of the differential correction on the
     * target object that produced this vector. WRMS is a quality indicator of the
     * state vector update, with a value of 1.00 being optimal. WRMS applies to Batch
     * Least Squares (BLS) processes.
     */
    rms?: number;

    /**
     * Satellite/Catalog number of the target OnOrbit object.
     */
    satNo?: number;

    /**
     * Array containing the standard deviation of error in target object position, U, V
     * and W direction respectively (km).
     */
    sigmaPosUVW?: Array<number>;

    /**
     * Array containing the standard deviation of error in target object velocity, U, V
     * and W direction respectively (km/sec).
     */
    sigmaVelUVW?: Array<number>;

    /**
     * Average solar flux geomagnetic index.
     */
    solarFluxAPAvg?: number;

    /**
     * F10 (10.7 cm) solar flux value.
     */
    solarFluxF10?: number;

    /**
     * F10 (10.7 cm) solar flux 81-day average value.
     */
    solarFluxF10Avg?: number;

    /**
     * Boolean indicating use of solar radiation pressure perturbations for this
     * vector.
     */
    solarRadPress?: boolean;

    /**
     * Area-to-mass ratio coefficient for solar radiation pressure.
     */
    solarRadPressCoeff?: number;

    /**
     * Boolean indicating use of solid earth tide perturbations for this vector.
     */
    solidEarthTides?: boolean;

    /**
     * Optional array of UDL data (observation) UUIDs used to build this state vector.
     * See the associated sourcedDataTypes array for the specific types of observations
     * for the positionally corresponding UUIDs in this array (the two arrays must
     * match in size).
     */
    sourcedData?: Array<string>;

    /**
     * Optional array of UDL observation data types used to build this state vector
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
     * The effective area of the object exposed to solar radiation pressure, expressed
     * in meters^2.
     */
    srpArea?: number;

    /**
     * Integrator step mode (AUTO, TIME, or S).
     */
    stepMode?: string;

    /**
     * Initial integration step size (seconds).
     */
    stepSize?: number;

    /**
     * Initial step size selection (AUTO or MANUAL).
     */
    stepSizeSelection?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * TAI (Temps Atomique International) minus UTC (Universal Time Coordinates) offset
     * in seconds.
     */
    taiUtc?: number;

    /**
     * Model parameter value for thrust acceleration (m/s2).
     */
    thrustAccel?: number;

    /**
     * The number of sensor tracks available for the OD of the object.
     */
    tracksAvail?: number;

    /**
     * The number of sensor tracks accepted for the OD of the object.
     */
    tracksUsed?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Boolean indicating this state vector was unable to be correlated to a known
     * object. This flag should only be set to true by data providers after an attempt
     * to correlate to an OnOrbit object was made and failed. If unable to correlate,
     * the 'origObjectId' field may be populated with an internal data provider
     * specific identifier.
     */
    uct?: boolean;

    /**
     * Rate of change of UT1 (milliseconds/day) - first derivative of ut1Utc.
     */
    ut1Rate?: number;

    /**
     * Universal Time-1 (UT1) minus UTC offset, in seconds.
     */
    ut1Utc?: number;

    /**
     * One sigma velocity uncertainty, in kilometers/second.
     */
    velUnc?: number;

    /**
     * Cartesian X acceleration of target, in kilometers/second^2, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xaccel?: number;

    /**
     * Cartesian X position of the target, in kilometers, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xpos?: number;

    /**
     * Cartesian X position of the target, in kilometers, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xposAlt1?: number;

    /**
     * Cartesian X position of the target, in kilometers, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xposAlt2?: number;

    /**
     * Cartesian X velocity of target, in kilometers/second, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xvel?: number;

    /**
     * Cartesian X velocity of the target, in kilometers/second, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xvelAlt1?: number;

    /**
     * Cartesian X velocity of the target, in kilometers/second, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xvelAlt2?: number;

    /**
     * Cartesian Y acceleration of target, in kilometers/second^2, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    yaccel?: number;

    /**
     * Cartesian Y position of the target, in kilometers, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    ypos?: number;

    /**
     * Cartesian Y position of the target, in kilometers, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yposAlt1?: number;

    /**
     * Cartesian Y position of the target, in kilometers, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yposAlt2?: number;

    /**
     * Cartesian Y velocity of target, in kilometers/second, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    yvel?: number;

    /**
     * Cartesian Y velocity of the target, in kilometers/second, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yvelAlt1?: number;

    /**
     * Cartesian Y velocity of the target, in kilometers/second, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yvelAlt2?: number;

    /**
     * Cartesian Z acceleration of target, in kilometers/second^2, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zaccel?: number;

    /**
     * Cartesian Z position of the target, in kilometers, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zpos?: number;

    /**
     * Cartesian Z position of the target, in kilometers, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zposAlt1?: number;

    /**
     * Cartesian Z position of the target, in kilometers, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zposAlt2?: number;

    /**
     * Cartesian Z velocity of target, in kilometers/second, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zvel?: number;

    /**
     * Cartesian Z velocity of the target, in kilometers/second, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zvelAlt1?: number;

    /**
     * Cartesian Z velocity of the target, in kilometers/second, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zvelAlt2?: number;
  }

  export namespace StateVector {
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
}

/**
 * EphemerisSet represents a wrapper or collection of Ephemeris 'points' and meta
 * data indicating the specifics of the propagation of an on-orbit object.
 * Ephemeris is typically distributed in a flat file containing details of the
 * ephemeris generation as well as a large collection of individual points at
 * varying time steps. EphemerisSet is analogous to this flat file.
 */
export interface EphemerisSetAbridged {
  /**
   * The source category of the ephemeris (e.g. OWNER_OPERATOR, ANALYST, EXTERNAL).
   */
  category: string;

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
   * Number of points contained in the ephemeris.
   */
  numPoints: number;

  /**
   * End time/last time point of the ephemeris, in ISO 8601 UTC format.
   */
  pointEndTime: string;

  /**
   * Start time/first time point of the ephemeris, in ISO 8601 UTC format.
   */
  pointStartTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type/purpose of the ephemeris (e.g., CALIBRATION, LAUNCH, MNVR_PLAN,
   * ROUTINE, SCREENING).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * First derivative of ballistic coefficient (m^2/kg-s).
   */
  bDot?: number;

  /**
   * The Central Body of the ephemeris. Assumed to be Earth, unless otherwise
   * indicated.
   */
  centBody?: string;

  /**
   * Additional source provided comments associated with the ephemeris.
   */
  comments?: string;

  /**
   * The reference frame of the covariance matrix elements. If the covReferenceFrame
   * is null it is assumed to be J2000.
   */
  covReferenceFrame?: string;

  /**
   * Time the row was created in the database, in UTC.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * Notes/description of the provided ephemeris. A value of DSTOP signifies the
   * ephemeris were generated using the last observation available.
   */
  description?: string;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Drag model used in ephemeris generation (e.g. JAC70, MSIS90, NONE, etc.).
   */
  dragModel?: string;

  /**
   * Model parameter value for energy dissipation rate (EDR), expressed in w/kg.
   */
  edr?: number;

  /**
   * Filename of the raw file used to provide the ephemeris data including filetype
   * extension, if applicable. This file may be retrieved using the 'getFile'
   * operation as specified in the 'EphemerisSet' OpenAPI docs.
   */
  filename?: string;

  /**
   * Geopotential model used in ephemeris generation (e.g. EGM-96, WGS-84, WGS-72,
   * JGM-2, GEM-T3), including mm degree zonals, nn degree/order tesserals (e.g.
   * EGM-96 24Z,24T).
   */
  geopotentialModel?: string;

  /**
   * Boolean indicating whether acceleration data is provided with the ephemeris.
   */
  hasAccel?: boolean;

  /**
   * Boolean indicating whether covariance data is provided with the ephemeris.
   */
  hasCov?: boolean;

  /**
   * Boolean indicating whether maneuver(s) are incorporated into the ephemeris.
   */
  hasMnvr?: boolean;

  /**
   * Array of the maneuver IDs of all maneuvers incorporated in the ephemeris.
   */
  idManeuvers?: Array<string>;

  /**
   * Unique identifier of the primary satellite on-orbit object.
   */
  idOnOrbit?: string;

  /**
   * ID of the State Vector used to generate the ephemeris.
   */
  idStateVector?: string;

  /**
   * Integrator used in ephemeris generation (e.g. RK7(8), RK8(9), COWELL, TWO-BODY).
   */
  integrator?: string;

  /**
   * The recommended interpolation method for the ephemeris data.
   */
  interpolation?: string;

  /**
   * The recommended interpolation degree for the ephemeris data.
   */
  interpolationDegree?: number;

  /**
   * Boolean indicating use of lunar/solar data in ephemeris generation.
   */
  lunarSolar?: boolean;

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
   * Optional identifier provided by ephemeris source to indicate the target object
   * of this ephemeris. This may be an internal identifier and not necessarily map to
   * a valid satellite number.
   */
  origObjectId?: string;

  /**
   * The pedigree of the ephemeris or source data used for ephemeris generation (e.g.
   * DOPPLER, GPS, HYBRID, PROPAGATED, RANGING, SLR).
   */
  pedigree?: string;

  /**
   * The reference frame of the cartesian orbital states. If the referenceFrame is
   * null it is assumed to be J2000.
   */
  referenceFrame?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Boolean indicating use of solid earth tide data in ephemeris generation.
   */
  solidEarthTides?: boolean;

  /**
   * Ephemeris step size, in seconds.
   */
  stepSize?: number;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Optional end time of the usable time span for the ephemeris data, in ISO 8601
   * UTC format with microsecond precision.
   */
  usableEndTime?: string;

  /**
   * Optional start time of the usable time span for the ephemeris data, in ISO 8601
   * UTC format with microsecond precision.
   */
  usableStartTime?: string;
}

export type EphemerisSetListResponse = Array<EphemerisSetAbridged>;

export type EphemerisSetCountResponse = string;

export type EphemerisSetTupleResponse = Array<Shared.EphemerisSetFull>;

export interface EphemerisSetCreateParams {
  /**
   * The source category of the ephemeris (e.g. OWNER_OPERATOR, ANALYST, EXTERNAL).
   */
  category: string;

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
   * Number of points contained in the ephemeris.
   */
  numPoints: number;

  /**
   * End time/last time point of the ephemeris, in ISO 8601 UTC format.
   */
  pointEndTime: string;

  /**
   * Start time/first time point of the ephemeris, in ISO 8601 UTC format.
   */
  pointStartTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type/purpose of the ephemeris (e.g., CALIBRATION, LAUNCH, MNVR_PLAN,
   * ROUTINE, SCREENING).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * First derivative of ballistic coefficient (m^2/kg-s).
   */
  bDot?: number;

  /**
   * The Central Body of the ephemeris. Assumed to be Earth, unless otherwise
   * indicated.
   */
  centBody?: string;

  /**
   * Additional source provided comments associated with the ephemeris.
   */
  comments?: string;

  /**
   * The reference frame of the covariance matrix elements. If the covReferenceFrame
   * is null it is assumed to be J2000.
   */
  covReferenceFrame?: string;

  /**
   * Time the row was created in the database, in UTC.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * Notes/description of the provided ephemeris. A value of DSTOP signifies the
   * ephemeris were generated using the last observation available.
   */
  description?: string;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Drag model used in ephemeris generation (e.g. JAC70, MSIS90, NONE, etc.).
   */
  dragModel?: string;

  /**
   * Model parameter value for energy dissipation rate (EDR), expressed in w/kg.
   */
  edr?: number;

  /**
   * The list of ephemeris states belonging to the EphemerisSet. Each ephemeris point
   * is associated with a parent Ephemeris Set via the EphemerisSet ID (esId).
   */
  ephemerisList?: Array<EphemerisSetCreateParams.EphemerisList>;

  /**
   * Filename of the raw file used to provide the ephemeris data including filetype
   * extension, if applicable. This file may be retrieved using the 'getFile'
   * operation as specified in the 'EphemerisSet' OpenAPI docs.
   */
  filename?: string;

  /**
   * Geopotential model used in ephemeris generation (e.g. EGM-96, WGS-84, WGS-72,
   * JGM-2, GEM-T3), including mm degree zonals, nn degree/order tesserals (e.g.
   * EGM-96 24Z,24T).
   */
  geopotentialModel?: string;

  /**
   * Boolean indicating whether acceleration data is provided with the ephemeris.
   */
  hasAccel?: boolean;

  /**
   * Boolean indicating whether covariance data is provided with the ephemeris.
   */
  hasCov?: boolean;

  /**
   * Boolean indicating whether maneuver(s) are incorporated into the ephemeris.
   */
  hasMnvr?: boolean;

  /**
   * Array of the maneuver IDs of all maneuvers incorporated in the ephemeris.
   */
  idManeuvers?: Array<string>;

  /**
   * Unique identifier of the primary satellite on-orbit object.
   */
  idOnOrbit?: string;

  /**
   * ID of the State Vector used to generate the ephemeris.
   */
  idStateVector?: string;

  /**
   * Integrator used in ephemeris generation (e.g. RK7(8), RK8(9), COWELL, TWO-BODY).
   */
  integrator?: string;

  /**
   * The recommended interpolation method for the ephemeris data.
   */
  interpolation?: string;

  /**
   * The recommended interpolation degree for the ephemeris data.
   */
  interpolationDegree?: number;

  /**
   * Boolean indicating use of lunar/solar data in ephemeris generation.
   */
  lunarSolar?: boolean;

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
   * Optional identifier provided by ephemeris source to indicate the target object
   * of this ephemeris. This may be an internal identifier and not necessarily map to
   * a valid satellite number.
   */
  origObjectId?: string;

  /**
   * The pedigree of the ephemeris or source data used for ephemeris generation (e.g.
   * DOPPLER, GPS, HYBRID, PROPAGATED, RANGING, SLR).
   */
  pedigree?: string;

  /**
   * The reference frame of the cartesian orbital states. If the referenceFrame is
   * null it is assumed to be J2000.
   */
  referenceFrame?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Boolean indicating use of solid earth tide data in ephemeris generation.
   */
  solidEarthTides?: boolean;

  /**
   * Ephemeris step size, in seconds.
   */
  stepSize?: number;

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
   * Optional end time of the usable time span for the ephemeris data, in ISO 8601
   * UTC format with microsecond precision.
   */
  usableEndTime?: string;

  /**
   * Optional start time of the usable time span for the ephemeris data, in ISO 8601
   * UTC format with microsecond precision.
   */
  usableStartTime?: string;
}

export namespace EphemerisSetCreateParams {
  /**
   * An ephemeris record is a position and velocity vector identifying the location
   * and trajectory of an on-orbit object at a specified time. Ephemeris points,
   * including covariance, are in kilometer and second based units in a user
   * specified reference frame, with ECI J2K being preferred. The EphemerisSet ID
   * (esId) links all points associated with an ephemeris set. The 'EphemerisSet'
   * record contains details of the underlying data and propagation models used in
   * the generation of the ephemeris. Ephemeris points must be retrieved by
   * specifying the parent EphemerisSet ID (esId).
   */
  export interface EphemerisList {
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
     * Source of the data.
     */
    source: string;

    /**
     * Time associated with the Ephemeris Point, in ISO8601 UTC format.
     */
    ts: string;

    /**
     * Cartesian X position of target, in km, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xpos: number;

    /**
     * Cartesian X velocity of target, in km/sec, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xvel: number;

    /**
     * Cartesian Y position of target, in km, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    ypos: number;

    /**
     * Cartesian Y velocity of target, in km/sec, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    yvel: number;

    /**
     * Cartesian Z position of target, in km, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zpos: number;

    /**
     * Cartesian Z velocity of target, in km/sec, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zvel: number;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Covariance matrix, in kilometer and second based units, in the specified
     * Ephemeris Set covReferenceFrame. If the covReferenceFrame from the EphemerisSet
     * table is null it is assumed to be J2000. The array values represent the lower
     * triangular half of the position-velocity covariance matrix. The size of the
     * covariance matrix is dynamic, depending on whether the covariance for position
     * only or position & velocity. The covariance elements are position dependent
     * within the array with values ordered as follows:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;y&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;y'&nbsp;z'&nbsp;&nbsp;
     *
     * x&nbsp;&nbsp;&nbsp;&nbsp;1
     *
     * y&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;3
     *
     * z&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;6
     *
     * x'&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;10
     *
     * y'&nbsp;&nbsp;11&nbsp;&nbsp;12&nbsp;&nbsp;13&nbsp;&nbsp;14&nbsp;&nbsp;15
     *
     * z'&nbsp;&nbsp;16&nbsp;&nbsp;17&nbsp;&nbsp;18&nbsp;&nbsp;19&nbsp;&nbsp;20&nbsp;&nbsp;
     * 21
     *
     * The array containing the covariance matrix elements will be of length 6 for
     * position only covariance, or length 21 for position-velocity covariance. The cov
     * array should contain only the lower left triangle values from top left down to
     * bottom right, in order.
     */
    cov?: Array<number>;

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
     * Unique identifier of the parent EphemerisSet, auto-generated by the system. The
     * esId (ephemerisSet id) is used to identify all individual ephemeris states
     * associated with a parent ephemerisSet.
     */
    esId?: string;

    /**
     * Unique identifier of the on-orbit satellite object.
     */
    idOnOrbit?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by ephemeris source to indicate the target object
     * of this ephemeris. This may be an internal identifier and not necessarily map to
     * a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Cartesian X acceleration of target, in km/sec^2, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xaccel?: number;

    /**
     * Cartesian Y acceleration of target, in km/sec^2, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    yaccel?: number;

    /**
     * Cartesian Z acceleration of target, in km/sec^2, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zaccel?: number;
  }
}

export interface EphemerisSetRetrieveParams {
  /**
   * Path param:
   */
  path_id: string;

  /**
   * Body param: The ID of the Ephemeris Set to retrieve.
   */
  body_id: string;
}

export interface EphemerisSetListParams {
  /**
   * (One or more of fields 'pointEndTime, pointStartTime' are required.) End
   * time/last time point of the ephemeris, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  pointEndTime?: string;

  /**
   * (One or more of fields 'pointEndTime, pointStartTime' are required.) Start
   * time/first time point of the ephemeris, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  pointStartTime?: string;
}

export interface EphemerisSetCountParams {
  /**
   * (One or more of fields 'pointEndTime, pointStartTime' are required.) End
   * time/last time point of the ephemeris, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  pointEndTime?: string;

  /**
   * (One or more of fields 'pointEndTime, pointStartTime' are required.) Start
   * time/first time point of the ephemeris, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  pointStartTime?: string;
}

export interface EphemerisSetFileRetrieveParams {
  /**
   * Path param:
   */
  path_id: string;

  /**
   * Body param: The ID of the EphemerisSet.
   */
  body_id: string;
}

export interface EphemerisSetTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the �queryhelp� operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * (One or more of fields 'pointEndTime, pointStartTime' are required.) End
   * time/last time point of the ephemeris, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  pointEndTime?: string;

  /**
   * (One or more of fields 'pointEndTime, pointStartTime' are required.) Start
   * time/first time point of the ephemeris, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  pointStartTime?: string;
}

EphemerisSets.History = History;

export declare namespace EphemerisSets {
  export {
    type EphemerisSet as EphemerisSet,
    type EphemerisSetAbridged as EphemerisSetAbridged,
    type EphemerisSetListResponse as EphemerisSetListResponse,
    type EphemerisSetCountResponse as EphemerisSetCountResponse,
    type EphemerisSetTupleResponse as EphemerisSetTupleResponse,
    type EphemerisSetCreateParams as EphemerisSetCreateParams,
    type EphemerisSetRetrieveParams as EphemerisSetRetrieveParams,
    type EphemerisSetListParams as EphemerisSetListParams,
    type EphemerisSetCountParams as EphemerisSetCountParams,
    type EphemerisSetFileRetrieveParams as EphemerisSetFileRetrieveParams,
    type EphemerisSetTupleParams as EphemerisSetTupleParams,
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
