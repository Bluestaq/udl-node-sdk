// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as EoObservationsAPI from '../eo-observations/eo-observations';
import * as AntennaDetailsAPI from './antenna-details';
import {
  AntennaDetailCreateParams,
  AntennaDetailListParams,
  AntennaDetailListResponse,
  AntennaDetailRetrieveParams,
  AntennaDetailUpdateParams,
  AntennaDetails,
  AntennaDetailsAbridged,
  AntennaDetailsFull,
} from './antenna-details';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Onorbit extends APIResource {
  antennaDetails: AntennaDetailsAPI.AntennaDetails = new AntennaDetailsAPI.AntennaDetails(this._client);

  /**
   * Service operation to take a single onorbit object as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  create(body: OnorbitCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/onorbit', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single OnOrbit object. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   */
  update(id: string, body: OnorbitUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/onorbit/${id}`, {
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
   */
  list(
    query: OnorbitListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OnorbitListResponse> {
    return this._client.get('/udl/onorbit', { query, ...options });
  }

  /**
   * Service operation to delete an OnOrbit object specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/onorbit/${id}`, {
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
   */
  count(query: OnorbitCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/onorbit/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single OnOrbit object by its unique ID passed as a
   * path parameter.
   */
  get(
    id: string,
    query: OnorbitGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.OnorbitFull> {
    return this._client.get(path`/udl/onorbit/${id}`, { query, ...options });
  }

  /**
   * This service queries common information across Radar, EO, and RF observations.
   */
  getSignature(
    query: OnorbitGetSignatureParams,
    options?: RequestOptions,
  ): APIPromise<OnorbitGetSignatureResponse> {
    return this._client.get('/udl/onorbit/getSignature', { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/onorbit/queryhelp', {
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
  tuple(query: OnorbitTupleParams, options?: RequestOptions): APIPromise<OnorbitTupleResponse> {
    return this._client.get('/udl/onorbit/tuple', { query, ...options });
  }
}

/**
 * Model object representing on-orbit objects or satellites in the system.
 */
export interface OnorbitIngest {
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
   * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
   * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
   * Heliocentric, Interplanetary, Lagrangian, Docked).
   */
  category?:
    | 'Unknown'
    | 'On-Orbit'
    | 'Decayed'
    | 'Cataloged Without State'
    | 'Launch Nominal'
    | 'Analyst Satellite'
    | 'Cislunar'
    | 'Lunar'
    | 'Hyperbolic'
    | 'Heliocentric'
    | 'Interplanetary'
    | 'Lagrangian'
    | 'Docked';

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
   * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
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
  objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

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
}

export type OnorbitListResponse = Array<OnorbitListResponse.OnorbitListResponseItem>;

export namespace OnorbitListResponse {
  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  export interface OnorbitListResponseItem {
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
     * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
     * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
     * Heliocentric, Interplanetary, Lagrangian, Docked).
     */
    category?:
      | 'Unknown'
      | 'On-Orbit'
      | 'Decayed'
      | 'Cataloged Without State'
      | 'Launch Nominal'
      | 'Analyst Satellite'
      | 'Cislunar'
      | 'Lunar'
      | 'Hyperbolic'
      | 'Heliocentric'
      | 'Interplanetary'
      | 'Lagrangian'
      | 'Docked';

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
     * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
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
    objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

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
  }
}

export type OnorbitCountResponse = string;

/**
 * Contains a list of common information across both Radar and EO observations.
 */
export interface OnorbitGetSignatureResponse {
  /**
   * Model representation of observation data for electro-optical based sensor
   * phenomenologies. ECI J2K is the preferred reference frame for EOObservations,
   * however, several user-specified reference frames are accommodated. Users should
   * check the EOObservation record as well as the 'Discover' tab in the storefront
   * to confirm the coordinate frames used by the data provider.
   */
  eoObservation?: EoObservationsAPI.EoObservationAbridged;

  /**
   * Model representation of observation data for radar based sensor phenomenologies.
   * J2000 is the preferred coordinate frame for all observations, but in some cases
   * observations may be in another frame depending on the provider. Please see the
   * 'Discover' tab in the storefront to confirm coordinate frames by data provider.
   */
  radarObservation?: OnorbitGetSignatureResponse.RadarObservation;

  /**
   * Model representation of observation data for active/passive radio frequency (RF)
   * based sensor phenomenologies. J2000 is the preferred coordinate frame for all
   * observations, but in some cases observations may be in another frame depending
   * on the provider. Please see the 'Discover' tab in the storefront to confirm
   * coordinate frames by data provider. RF observations include several optional
   * ordered arrays which are used to provide detailed information on recorded
   * signals such as power spectral density lists or active signals (code taps/fills,
   * etc). In these cases, the sizes of the arrays must match and can be assumed to
   * have consistent indexing across arrays (e.g. powers[0] is the measured power at
   * frequencies[0]).
   */
  rfObservation?: OnorbitGetSignatureResponse.RfObservation;
}

export namespace OnorbitGetSignatureResponse {
  /**
   * Model representation of observation data for radar based sensor phenomenologies.
   * J2000 is the preferred coordinate frame for all observations, but in some cases
   * observations may be in another frame depending on the provider. Please see the
   * 'Discover' tab in the storefront to confirm coordinate frames by data provider.
   */
  export interface RadarObservation {
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
     * Ob detection time in ISO 8601 UTC with microsecond precision.
     */
    obTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * azimuth angle in degrees and topocentric frame.
     */
    azimuth?: number;

    /**
     * Sensor azimuth angle bias in degrees.
     */
    azimuthBias?: number;

    /**
     * Optional flag indicating whether the azimuth value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    azimuthMeasured?: boolean;

    /**
     * Rate of change of the line of sight azimuth in degrees per second.
     */
    azimuthRate?: number;

    /**
     * One sigma uncertainty in the line of sight azimuth angle measurement, in
     * degrees.
     */
    azimuthUnc?: number;

    /**
     * ID of the beam that produced this observation.
     */
    beam?: number;

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
     * Line of sight declination angle in degrees and J2000 coordinate frame.
     */
    declination?: number;

    /**
     * Optional flag indicating whether the declination value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    declinationMeasured?: boolean;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Corrected doppler measurement in meters per second.
     */
    doppler?: number;

    /**
     * One sigma uncertainty in the corrected doppler measurement, in meters/second.
     */
    dopplerUnc?: number;

    /**
     * Line of sight elevation in degrees and topocentric frame.
     */
    elevation?: number;

    /**
     * Sensor elevation bias in degrees.
     */
    elevationBias?: number;

    /**
     * Optional flag indicating whether the elevation value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    elevationMeasured?: boolean;

    /**
     * Rate of change of the line of sight elevation in degrees per second.
     */
    elevationRate?: number;

    /**
     * One sigma uncertainty in the line of sight elevation angle measurement, in
     * degrees.
     */
    elevationUnc?: number;

    /**
     * Unique identifier of the target on-orbit object, if correlated.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * The position of this observation within a track (FENCE, FIRST, IN, LAST,
     * SINGLE). This identifier is optional and, if null, no assumption should be made
     * regarding whether other observations may or may not exist to compose a track.
     */
    obPosition?: string;

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
     * Optional identifier provided by observation source to indicate the target
     * onorbit object of this observation. This may be an internal identifier and not
     * necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by observation source to indicate the sensor
     * identifier which produced this observation. This may be an internal identifier
     * and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Radar cross section in meters squared for orthogonal polarization.
     */
    orthogonalRcs?: number;

    /**
     * one sigma uncertainty in orthogonal polarization Radar Cross Section, in
     * meters^2.
     */
    orthogonalRcsUnc?: number;

    /**
     * Line of sight right ascension in degrees and J2000 coordinate frame.
     */
    ra?: number;

    /**
     * Optional flag indicating whether the ra value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    raMeasured?: boolean;

    /**
     * Target range in km.
     */
    range?: number;

    /**
     * Range accelaration in km/s2.
     */
    rangeAccel?: number;

    /**
     * One sigma uncertainty in the range acceleration measurement, in
     * kilometers/(second^2).
     */
    rangeAccelUnc?: number;

    /**
     * Sensor range bias in km.
     */
    rangeBias?: number;

    /**
     * Optional flag indicating whether the range value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    rangeMeasured?: boolean;

    /**
     * Rate of change of the line of sight range in km/sec.
     */
    rangeRate?: number;

    /**
     * Optional flag indicating whether the rangeRate value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    rangeRateMeasured?: boolean;

    /**
     * One sigma uncertainty in the range rate measurement, in kilometers/second.
     */
    rangeRateUnc?: number;

    /**
     * One sigma uncertainty in the range measurement, in kilometers.
     */
    rangeUnc?: number;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * Radar cross section in meters squared for polarization principal.
     */
    rcs?: number;

    /**
     * one sigma uncertainty in principal polarization Radar Cross Section, in
     * meters^2.
     */
    rcsUnc?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * The reference frame of the observing sensor state. If the senReferenceFrame is
     * null it is assumed to be J2000.
     */
    senReferenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * Sensor x position in km at obTime (if mobile/onorbit) in the specified
     * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
     */
    senx?: number;

    /**
     * Sensor y position in km at obTime (if mobile/onorbit) in the specified
     * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
     */
    seny?: number;

    /**
     * Sensor z position in km at obTime (if mobile/onorbit) in the specified
     * senReferenceFrame. If senReferenceFrame is null then J2000 should be assumed.
     */
    senz?: number;

    /**
     * Signal to noise ratio, in dB.
     */
    snr?: number;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Optional identifier to indicate the specific tasking which produced this
     * observation.
     */
    taskId?: string;

    /**
     * Sensor timing bias in seconds.
     */
    timingBias?: number;

    /**
     * Optional identifier of the track to which this observation belongs.
     */
    trackId?: string;

    /**
     * The beam type (or tracking state) in use at the time of collection of this
     * observation. Values include:
     *
     * INIT ACQ WITH INIT VALUES: Initial acquisition based on predefined initial
     * values such as position, velocity, or other specific parameters.
     *
     * INIT ACQ: Initial acquisition when no prior information or initial values such
     * as position or velocity are available.
     *
     * TRACKING SINGLE BEAM: Continuously tracks and monitors a single target using one
     * specific radar beam.
     *
     * TRACKING SEQUENTIAL ROVING: Sequentially tracks different targets or areas by
     * "roving" from one sector to the next in a systematic order.
     *
     * SELF ACQ WITH INIT VALUES: Autonomously acquires targets using predefined
     * starting parameters or initial values.
     *
     * SELF ACQ: Automatically detects and locks onto targets without the need for
     * predefined initial settings.
     *
     * NON-TRACKING: Non-tracking.
     */
    trackingState?: string;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Read only enumeration specifying the type of observation (e.g. OPTICAL, RADAR,
     * RF, etc).
     */
    type?: string;

    /**
     * Boolean indicating this observation is part of an uncorrelated track or was
     * unable to be correlated to a known object. This flag should only be set to true
     * by data providers after an attempt to correlate to an on-orbit object was made
     * and failed. If unable to correlate, the 'origObjectId' field may be populated
     * with an internal data provider specific identifier.
     */
    uct?: boolean;

    /**
     * X position of target in km in J2000 coordinate frame.
     */
    x?: number;

    /**
     * X velocity of target in km/sec in J2000 coordinate frame.
     */
    xvel?: number;

    /**
     * Y position of target in km in J2000 coordinate frame.
     */
    y?: number;

    /**
     * Y velocity of target in km/sec in J2000 coordinate frame.
     */
    yvel?: number;

    /**
     * Z position of target in km in J2000 coordinate frame.
     */
    z?: number;

    /**
     * Z velocity of target in km/sec in J2000 coordinate frame.
     */
    zvel?: number;
  }

  /**
   * Model representation of observation data for active/passive radio frequency (RF)
   * based sensor phenomenologies. J2000 is the preferred coordinate frame for all
   * observations, but in some cases observations may be in another frame depending
   * on the provider. Please see the 'Discover' tab in the storefront to confirm
   * coordinate frames by data provider. RF observations include several optional
   * ordered arrays which are used to provide detailed information on recorded
   * signals such as power spectral density lists or active signals (code taps/fills,
   * etc). In these cases, the sizes of the arrays must match and can be assumed to
   * have consistent indexing across arrays (e.g. powers[0] is the measured power at
   * frequencies[0]).
   */
  export interface RfObservation {
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
     * Ob detection time in ISO 8601 UTC with microsecond precision.
     */
    obTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Type of RF ob (e.g. RF, RF-SOSI, PSD, RFI, SPOOF, etc).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Antenna name of the RFObservation record.
     */
    antennaName?: string;

    /**
     * azimuth angle in degrees and J2000 coordinate frame.
     */
    azimuth?: number;

    /**
     * Optional flag indicating whether the azimuth value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    azimuthMeasured?: boolean;

    /**
     * Rate of change of the azimuth in degrees per second.
     */
    azimuthRate?: number;

    /**
     * One sigma uncertainty in the azimuth angle measurement, in degrees.
     */
    azimuthUnc?: number;

    /**
     * Measured bandwidth in Hz.
     */
    bandwidth?: number;

    /**
     * Baud rate is the number of symbol changes, waveform changes, or signaling
     * events, across the transmission medium per second.
     */
    baudRate?: number;

    /**
     * The ratio of bit errors per number of received bits.
     */
    bitErrorRate?: number;

    /**
     * Carrier standard (e.g. DVB-S2, 802.11g, etc.).
     */
    carrierStandard?: string;

    /**
     * Channel of the RFObservation record.
     */
    channel?: number;

    /**
     * Collection mode (e.g. SURVEY, SPOT_SEARCH, NEIGHBORHOOD_WATCH, DIRECTED_SEARCH,
     * MANUAL, etc).
     */
    collectionMode?: string;

    /**
     * Confidence in the signal and its measurements and characterization.
     */
    confidence?: number;

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
     * Detection status (e.g. DETECTED, CARRIER_ACQUIRING, CARRIER_DETECTED,
     * NOT_DETECTED, etc).
     */
    detectionStatus?: string;

    /**
     * Measured Equivalent Isotopically Radiated Power in dBW.
     */
    eirp?: number;

    /**
     * elevation in degrees and J2000 coordinate frame.
     */
    elevation?: number;

    /**
     * Optional flag indicating whether the elevation value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    elevationMeasured?: boolean;

    /**
     * Rate of change of the elevation in degrees per second.
     */
    elevationRate?: number;

    /**
     * One sigma uncertainty in the elevation angle measurement, in degrees.
     */
    elevationUnc?: number;

    /**
     * ELINT notation.
     */
    elnot?: string;

    /**
     * End carrier frequency in Hz.
     */
    endFrequency?: number;

    /**
     * Center carrier frequency in Hz.
     */
    frequency?: number;

    /**
     * Frequency Shift of the RFObservation record.
     */
    frequencyShift?: number;

    /**
     * Unique identifier of the target on-orbit object, if correlated.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * True if the signal is incoming, false if outgoing.
     */
    incoming?: boolean;

    /**
     * Inner forward error correction rate: 0 = Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 =
     * 5/6, 5 = 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
     */
    innerCodingRate?: number;

    /**
     * Maximum measured PSD value of the trace in dBW.
     */
    maxPSD?: number;

    /**
     * Minimum measured PSD value of the trace in dBW.
     */
    minPSD?: number;

    /**
     * Transponder modulation (e.g. Auto, QPSK, 8PSK, etc).
     */
    modulation?: string;

    /**
     * Noise power density, in dBW-Hz.
     */
    noisePwrDensity?: number;

    /**
     * Expected bandwidth in Hz.
     */
    nominalBandwidth?: number;

    /**
     * Expected Equivalent Isotopically Radiated Power in dBW.
     */
    nominalEirp?: number;

    /**
     * Nominal or expected center carrier frequency in Hz.
     */
    nominalFrequency?: number;

    /**
     * Expected carrier power over noise (dBW/Hz).
     */
    nominalPowerOverNoise?: number;

    /**
     * Nominal or expected signal to noise ratio, in dB.
     */
    nominalSnr?: number;

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
     * Optional identifier provided by observation source to indicate the target
     * onorbit object of this observation. This may be an internal identifier and not
     * necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by observation source to indicate the sensor
     * identifier which produced this observation. This may be an internal identifier
     * and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Outer forward error correction rate: 0 = Auto, 1 = 1/2, 2 = 2/3, 3 = 3/4, 4 =
     * 5/6, 5 = 7/8, 6 = 8/9, 7 = 3/5, 8 = 4/5, 9 = 9/10, 15 = None.
     */
    outerCodingRate?: number;

    /**
     * Peak of the RFObservation record.
     */
    peak?: boolean;

    /**
     * A pulse group repetition interval (PGRI) is a pulse train in which there are
     * groups of closely spaced pulses separated by much longer times between these
     * pulse groups.
     */
    pgri?: number;

    /**
     * The antenna pointing dependent polarizer angle, in degrees.
     */
    polarity?: number;

    /**
     * Transponder polarization e.g. H - (Horizontally Polarized) Perpendicular to
     * Earth's surface, V - (Vertically Polarized) Parallel to Earth's surface, L -
     * (Left Hand Circularly Polarized) Rotating left relative to the earth's surface,
     * R - (Right Hand Circularly Polarized) Rotating right relative to the earth's
     * surface.
     */
    polarityType?: 'H' | 'V' | 'R' | 'L';

    /**
     * Measured carrier power over noise (dBW/Hz).
     */
    powerOverNoise?: number;

    /**
     * Target range in km.
     */
    range?: number;

    /**
     * Optional flag indicating whether the range value is measured (true) or computed
     * (false). If null, consumers may consult the data provider for information
     * regarding whether the corresponding value is computed or measured.
     */
    rangeMeasured?: boolean;

    /**
     * Rate of change of the range in km/sec.
     */
    rangeRate?: number;

    /**
     * Optional flag indicating whether the rangeRate value is measured (true) or
     * computed (false). If null, consumers may consult the data provider for
     * information regarding whether the corresponding value is computed or measured.
     */
    rangeRateMeasured?: boolean;

    /**
     * One sigma uncertainty in the range rate measurement, in kilometers/second.
     */
    rangeRateUnc?: number;

    /**
     * One sigma uncertainty in the range measurement, in kilometers.
     */
    rangeUnc?: number;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * Reference signal level, in dBW.
     */
    referenceLevel?: number;

    /**
     * Measured power of the center carrier frequency in dBW.
     */
    relativeCarrierPower?: number;

    /**
     * The measure of the signal created from the sum of all the noise sources and
     * unwanted signals within the measurement system, in dBW.
     */
    relativeNoiseFloor?: number;

    /**
     * Resolution bandwidth in Hz.
     */
    resolutionBandwidth?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Sensor altitude at obTime (if mobile/onorbit) in km. If null, can be obtained
     * from sensor info.
     */
    senalt?: number;

    /**
     * Sensor WGS84 latitude at obTime (if mobile/onorbit) in degrees. If null, can be
     * obtained from sensor info. -90 to 90 degrees (negative values south of equator).
     */
    senlat?: number;

    /**
     * Sensor WGS84 longitude at obTime (if mobile/onorbit) in degrees. If null, can be
     * obtained from sensor info. -180 to 180 degrees (negative values west of Prime
     * Meridian).
     */
    senlon?: number;

    /**
     * Signal to noise ratio, in dB.
     */
    snr?: number;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Measured spectrum analyzer power of the center carrier frequency in dBW.
     */
    spectrumAnalyzerPower?: number;

    /**
     * Start carrier frequency in Hz.
     */
    startFrequency?: number;

    /**
     * Switch Point of the RFObservation record.
     */
    switchPoint?: number;

    /**
     * Symbol to noise ratio, in dB.
     */
    symbolToNoiseRatio?: number;

    /**
     * Optional identifier to indicate the specific tasking which produced this
     * observation.
     */
    taskId?: string;

    /**
     * Optional identifier of the track to which this observation belongs.
     */
    trackId?: string;

    /**
     * Target track or apparent range in km.
     */
    trackRange?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Transmit pulse shaping filter roll-off value.
     */
    transmitFilterRollOff?: number;

    /**
     * Transmit pulse shaping filter typ (e.g. RRC).
     */
    transmitFilterType?: string;

    /**
     * Optional identifier provided by observation source to indicate the transponder
     * used for this measurement.
     */
    transponder?: string;

    /**
     * Boolean indicating this observation is part of an uncorrelated track or was
     * unable to be correlated to a known object. This flag should only be set to true
     * by data providers after an attempt to correlate to an on-orbit object was made
     * and failed. If unable to correlate, the 'origObjectId' field may be populated
     * with an internal data provider specific identifier.
     */
    uct?: boolean;

    /**
     * Optional URL containing additional information on this observation.
     */
    url?: string;

    /**
     * Video bandwidth in Hz.
     */
    videoBandwidth?: number;
  }
}

export type OnorbitTupleResponse = Array<Shared.OnorbitFull>;

export interface OnorbitCreateParams {
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
   * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
   * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
   * Heliocentric, Interplanetary, Lagrangian, Docked).
   */
  category?:
    | 'Unknown'
    | 'On-Orbit'
    | 'Decayed'
    | 'Cataloged Without State'
    | 'Launch Nominal'
    | 'Analyst Satellite'
    | 'Cislunar'
    | 'Lunar'
    | 'Hyperbolic'
    | 'Heliocentric'
    | 'Interplanetary'
    | 'Lagrangian'
    | 'Docked';

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
   * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
   * ISO Alpha-3 code, or alternate code values that exist for the specified country
   * code.
   */
  countryCode?: string;

  /**
   * Date of decay.
   */
  decayDate?: string;

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
  objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface OnorbitUpdateParams {
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
   * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
   * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
   * Heliocentric, Interplanetary, Lagrangian, Docked).
   */
  category?:
    | 'Unknown'
    | 'On-Orbit'
    | 'Decayed'
    | 'Cataloged Without State'
    | 'Launch Nominal'
    | 'Analyst Satellite'
    | 'Cislunar'
    | 'Lunar'
    | 'Hyperbolic'
    | 'Heliocentric'
    | 'Interplanetary'
    | 'Lagrangian'
    | 'Docked';

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
   * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
   * ISO Alpha-3 code, or alternate code values that exist for the specified country
   * code.
   */
  countryCode?: string;

  /**
   * Date of decay.
   */
  decayDate?: string;

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
  objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface OnorbitListParams {
  firstResult?: number;

  maxResult?: number;
}

export interface OnorbitCountParams {
  firstResult?: number;

  maxResult?: number;
}

export interface OnorbitGetParams {
  firstResult?: number;

  maxResult?: number;
}

export interface OnorbitGetSignatureParams {
  /**
   * ID of the Onorbit object.
   */
  idOnOrbit: string;

  firstResult?: number;

  maxResult?: number;
}

export interface OnorbitTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  firstResult?: number;

  maxResult?: number;
}

Onorbit.AntennaDetails = AntennaDetails;

export declare namespace Onorbit {
  export {
    type OnorbitIngest as OnorbitIngest,
    type OnorbitListResponse as OnorbitListResponse,
    type OnorbitCountResponse as OnorbitCountResponse,
    type OnorbitGetSignatureResponse as OnorbitGetSignatureResponse,
    type OnorbitTupleResponse as OnorbitTupleResponse,
    type OnorbitCreateParams as OnorbitCreateParams,
    type OnorbitUpdateParams as OnorbitUpdateParams,
    type OnorbitListParams as OnorbitListParams,
    type OnorbitCountParams as OnorbitCountParams,
    type OnorbitGetParams as OnorbitGetParams,
    type OnorbitGetSignatureParams as OnorbitGetSignatureParams,
    type OnorbitTupleParams as OnorbitTupleParams,
  };

  export {
    AntennaDetails as AntennaDetails,
    type AntennaDetailsAbridged as AntennaDetailsAbridged,
    type AntennaDetailsFull as AntennaDetailsFull,
    type AntennaDetailListResponse as AntennaDetailListResponse,
    type AntennaDetailCreateParams as AntennaDetailCreateParams,
    type AntennaDetailRetrieveParams as AntennaDetailRetrieveParams,
    type AntennaDetailUpdateParams as AntennaDetailUpdateParams,
    type AntennaDetailListParams as AntennaDetailListParams,
  };
}
