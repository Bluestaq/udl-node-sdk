// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class EmitterGeolocation extends APIResource {
  /**
   * Service operation to take a single RF geolocation as a POST body and ingest into
   * the database. This operation is not intended to be used for automated feeds into
   * UDL. Data providers should contact the UDL team for specific role assignments
   * and for instructions on setting up a permanent feed through an alternate
   * mechanism.
   *
   * @example
   * ```ts
   * await client.emitterGeolocation.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   signalOfInterestType: 'RF',
   *   source: 'Bluestaq',
   *   startTime: '2024-05-31T21:12:12.123456Z',
   * });
   * ```
   */
  create(body: EmitterGeolocationCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/emittergeolocation', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single RF geolocation by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const emitterGeolocation =
   *   await client.emitterGeolocation.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: EmitterGeolocationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmitterGeolocationRetrieveResponse> {
    return this._client.get(path`/udl/emittergeolocation/${id}`, { query, ...options });
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
   * for await (const emitterGeolocationListResponse of client.emitterGeolocation.list(
   *   { startTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EmitterGeolocationListParams,
    options?: RequestOptions,
  ): PagePromise<EmitterGeolocationListResponsesOffsetPage, EmitterGeolocationListResponse> {
    return this._client.getAPIList('/udl/emittergeolocation', OffsetPage<EmitterGeolocationListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a RF geolocation specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance. Note, delete operations do not remove data
   * from historical or publish/subscribe stores.
   *
   * @example
   * ```ts
   * await client.emitterGeolocation.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/emittergeolocation/${id}`, {
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
   * const response = await client.emitterGeolocation.count({
   *   startTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: EmitterGeolocationCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/emittergeolocation/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of RF
   * geolocations as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.emitterGeolocation.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       signalOfInterestType: 'RF',
   *       source: 'Bluestaq',
   *       startTime: '2024-05-31T21:12:12.123456Z',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: EmitterGeolocationCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/emittergeolocation/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emitterGeolocation.queryHelp();
   * ```
   */
  queryHelp(options?: RequestOptions): APIPromise<EmitterGeolocationQueryHelpResponse> {
    return this._client.get('/udl/emittergeolocation/queryhelp', options);
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
   * const response = await client.emitterGeolocation.tuple({
   *   columns: 'columns',
   *   startTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(
    query: EmitterGeolocationTupleParams,
    options?: RequestOptions,
  ): APIPromise<EmitterGeolocationTupleResponse> {
    return this._client.get('/udl/emittergeolocation/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple emittergeolocation records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.emitterGeolocation.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       signalOfInterestType: 'RF',
   *       source: 'Bluestaq',
   *       startTime: '2024-05-31T21:12:12.123456Z',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(
    params: EmitterGeolocationUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-emittergeolocation', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type EmitterGeolocationListResponsesOffsetPage = OffsetPage<EmitterGeolocationListResponse>;

/**
 * Model representation of Emitter geolocation data for a signal of interest.
 */
export interface EmitterGeolocationRetrieveResponse {
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
   * Type of the signal of interest of this Emitter Geo Location (e.g. RF).
   */
  signalOfInterestType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The start time for this Emitter Geo Location data set in ISO 8601 UTC with
   * microsecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the image as projected on the
   * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
   * or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  agjson?: string;

  /**
   * The EmitterGeo algorithm type and version used in Emitter geolocation
   * calculations.
   */
  algVersion?: string;

  /**
   * Number of dimensions of the geometry depicted by region.
   */
  andims?: number;

  /**
   * Geographical spatial_ref_sys for region.
   */
  asrid?: number;

  /**
   * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
   * Text representation of the geometry/geography, of the image as projected on the
   * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
   * if included with a POST or PUT request that also specifies a valid 'area' field.
   */
  atext?: string;

  /**
   * Type of region as projected on the ground.
   */
  atype?: string;

  /**
   * Average pulse repetition frequency of the emitter, measured in hertz. PRF is the
   * number of pulses transmitted per second. This is the reciprocal of the avgPRI
   * (Pulse Repetition Interval) value.
   */
  avgPRF?: number;

  /**
   * Average pulse repetition interval of the emitter, measured in microseconds. The
   * interval between the start of one pulse and the start of another.
   */
  avgPRI?: number;

  /**
   * Average pulse width of the emitter, measured in nanoseconds. This is the average
   * duration of the pulse.
   */
  avgPW?: number;

  /**
   * The detected signal frequency in megahertz.
   */
  centerFreq?: number;

  /**
   * The name(s) of the subset of constellation spacecraft that made this detection.
   */
  cluster?: string;

  /**
   * The area of the confidence ellipse specified in meters squared to contain the
   * emitter with a 95% probability.
   */
  confArea?: number;

  /**
   * The name of the satellite constellation.
   */
  constellation?: string;

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
   * Specifies the creation time associated with the order in ISO 8601 UTC with
   * microsecond precision.
   */
  createdTs?: string;

  /**
   * The altitude relative to WGS-84 ellipsoid, in meters.
   */
  detectAlt?: number;

  /**
   * WGS-84 latitude of the most likely emitter location coordinate point, in
   * degrees. -90 to 90 degrees (negative values south of equator).
   */
  detectLat?: number;

  /**
   * WGS-84 longitude of the most likely emitter location coordinate point, in
   * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
   */
  detectLon?: number;

  /**
   * The end time for this Emitter Geo Location data set in ISO 8601 UTC with
   * microsecond precision.
   */
  endTime?: string;

  /**
   * Confidence ellipsoid about the detection location [semi-major axis (meters),
   * semi-minor axis (meters), orientation (degrees) measured clockwise (0-360 from
   * true north)].
   */
  errEllp?: Array<number>;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * Unique identifier of the satellite used to identify and geolocate Emitter
   * signals of interest. This ID can be used to obtain additional information on an
   * OnOrbit object using the 'get by ID' operation (e.g. /udl/onorbit/{id}). For
   * example, the onorbit object with idOnOrbit = abc would be queried as
   * /udl/onorbit/abc. Used when Emitter geolocation is done by a single satellite.
   */
  idOnOrbit?: string;

  /**
   * Optional identifier of the geolocated signal of interest RF Emitter for this
   * observation. This ID can be used to obtain additional information on an RF
   * Emitter object using the 'get by ID' operation (e.g. /udl/rfemitter/{id}). For
   * example, the rfemitter object with idRFEmitter = abc would be queried as
   * /udl/rfemitter/abc.
   */
  idRFEmitter?: string;

  /**
   * Unique identifier of the reporting sensor. This ID can be used to obtain
   * additional information on a sensor using the 'get by ID' operation (e.g.
   * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
   * as /udl/sensor/abc. Used when Emitter geolocation is done by a single sensor.
   */
  idSensor?: string;

  /**
   * The maximum detected frequency in megahertz.
   */
  maxFreq?: number;

  /**
   * Maximum pulse repetition frequency of the emitter, measured in hertz. PRF is the
   * number of pulses transmitted per second. This is the reciprocal of the minPRI
   * (Pulse Repetition Interval) value.
   */
  maxPRF?: number;

  /**
   * Maximum pulse repetition interval of the emitter, measured in microseconds. The
   * interval between the start of one pulse and the start of another.
   */
  maxPRI?: number;

  /**
   * Maximum pulse width of the emitter, measured in nanoseconds. This is the maximum
   * duration of the pulse.
   */
  maxPW?: number;

  /**
   * The minimum detected frequency in megahertz.
   */
  minFreq?: number;

  /**
   * Minimum pulse repetition frequency of the emitter, measured in hertz. PRF is the
   * number of pulses transmitted per second. This is the reciprocal of the maxPRI
   * (Pulse Repetition Interval) value.
   */
  minPRF?: number;

  /**
   * Minimum pulse repetition interval of the emitter, measured in microseconds. The
   * interval between the start of one pulse and the start of another.
   */
  minPRI?: number;

  /**
   * Minimum pulse width of the emitter, measured in nanoseconds. This is the minimum
   * duration of the pulse.
   */
  minPW?: number;

  /**
   * The count of single-burst observations used for this geolocation observation.
   */
  numBursts?: number;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: Shared.OnorbitFull;

  /**
   * The order identifier for this Emitter Geo Location data set.
   */
  orderId?: string;

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
   * Optional identifier of the satellite used to identify and geolocate Emitter
   * signals of interest of this observation. This may be an internal identifier and
   * not necessarily a valid satellite number. Used when Emitter geolocation is done
   * by a single satellite.
   */
  origObjectId?: string;

  /**
   * Optional identifier of the emitter of interest for this observation. This may be
   * an internal identifier and not necessarily a valid emitter Id.
   */
  origRFEmitterId?: string;

  /**
   * Optional identifier provided by observation source to indicate the sensor
   * identifier which produced this Emitter Geo Location. This may be an internal
   * identifier and not necessarily a valid sensor ID. Used when Emitter geolocation
   * is done by a single sensor.
   */
  origSensorId?: string;

  /**
   * Optional external identifier referencing the entity used in the calculation of
   * the geolocation.
   */
  passGroupId?: string;

  /**
   * Describes the form of the emitted pulse and how its signal varies within the
   * pulse duration (e.g. GAUSSIAN, RECTANGULAR, TRAPEZOIDAL, etc.).
   */
  pulseShape?: string;

  /**
   * The time representing the mean of the constituent single-burst observations in
   * ISO 8601 UTC with microsecond precision.
   */
  receivedTs?: string;

  /**
   * Satellite/catalog number of the on-orbit spacecraft used to identify and
   * geolocate Emitter signals of interest of this detection. Used when Emitter
   * geolocation is done by a single satellite.
   */
  satNo?: number;

  /**
   * The name of the signal of interest.
   */
  signalOfInterest?: string;

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
}

/**
 * Model representation of Emitter geolocation data for a signal of interest.
 */
export interface EmitterGeolocationListResponse {
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
   * Type of the signal of interest of this Emitter Geo Location (e.g. RF).
   */
  signalOfInterestType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The start time for this Emitter Geo Location data set in ISO 8601 UTC with
   * microsecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the image as projected on the
   * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
   * or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  agjson?: string;

  /**
   * The EmitterGeo algorithm type and version used in Emitter geolocation
   * calculations.
   */
  algVersion?: string;

  /**
   * Number of dimensions of the geometry depicted by region.
   */
  andims?: number;

  /**
   * Geographical spatial_ref_sys for region.
   */
  asrid?: number;

  /**
   * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
   * Text representation of the geometry/geography, of the image as projected on the
   * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
   * if included with a POST or PUT request that also specifies a valid 'area' field.
   */
  atext?: string;

  /**
   * Type of region as projected on the ground.
   */
  atype?: string;

  /**
   * Average pulse repetition frequency of the emitter, measured in hertz. PRF is the
   * number of pulses transmitted per second. This is the reciprocal of the avgPRI
   * (Pulse Repetition Interval) value.
   */
  avgPRF?: number;

  /**
   * Average pulse repetition interval of the emitter, measured in microseconds. The
   * interval between the start of one pulse and the start of another.
   */
  avgPRI?: number;

  /**
   * Average pulse width of the emitter, measured in nanoseconds. This is the average
   * duration of the pulse.
   */
  avgPW?: number;

  /**
   * The detected signal frequency in megahertz.
   */
  centerFreq?: number;

  /**
   * The name(s) of the subset of constellation spacecraft that made this detection.
   */
  cluster?: string;

  /**
   * The area of the confidence ellipse specified in meters squared to contain the
   * emitter with a 95% probability.
   */
  confArea?: number;

  /**
   * The name of the satellite constellation.
   */
  constellation?: string;

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
   * Specifies the creation time associated with the order in ISO 8601 UTC with
   * microsecond precision.
   */
  createdTs?: string;

  /**
   * The altitude relative to WGS-84 ellipsoid, in meters.
   */
  detectAlt?: number;

  /**
   * WGS-84 latitude of the most likely emitter location coordinate point, in
   * degrees. -90 to 90 degrees (negative values south of equator).
   */
  detectLat?: number;

  /**
   * WGS-84 longitude of the most likely emitter location coordinate point, in
   * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
   */
  detectLon?: number;

  /**
   * The end time for this Emitter Geo Location data set in ISO 8601 UTC with
   * microsecond precision.
   */
  endTime?: string;

  /**
   * Confidence ellipsoid about the detection location [semi-major axis (meters),
   * semi-minor axis (meters), orientation (degrees) measured clockwise (0-360 from
   * true north)].
   */
  errEllp?: Array<number>;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * Unique identifier of the satellite used to identify and geolocate Emitter
   * signals of interest. This ID can be used to obtain additional information on an
   * OnOrbit object using the 'get by ID' operation (e.g. /udl/onorbit/{id}). For
   * example, the onorbit object with idOnOrbit = abc would be queried as
   * /udl/onorbit/abc. Used when Emitter geolocation is done by a single satellite.
   */
  idOnOrbit?: string;

  /**
   * Optional identifier of the geolocated signal of interest RF Emitter for this
   * observation. This ID can be used to obtain additional information on an RF
   * Emitter object using the 'get by ID' operation (e.g. /udl/rfemitter/{id}). For
   * example, the rfemitter object with idRFEmitter = abc would be queried as
   * /udl/rfemitter/abc.
   */
  idRFEmitter?: string;

  /**
   * Unique identifier of the reporting sensor. This ID can be used to obtain
   * additional information on a sensor using the 'get by ID' operation (e.g.
   * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
   * as /udl/sensor/abc. Used when Emitter geolocation is done by a single sensor.
   */
  idSensor?: string;

  /**
   * The maximum detected frequency in megahertz.
   */
  maxFreq?: number;

  /**
   * Maximum pulse repetition frequency of the emitter, measured in hertz. PRF is the
   * number of pulses transmitted per second. This is the reciprocal of the minPRI
   * (Pulse Repetition Interval) value.
   */
  maxPRF?: number;

  /**
   * Maximum pulse repetition interval of the emitter, measured in microseconds. The
   * interval between the start of one pulse and the start of another.
   */
  maxPRI?: number;

  /**
   * Maximum pulse width of the emitter, measured in nanoseconds. This is the maximum
   * duration of the pulse.
   */
  maxPW?: number;

  /**
   * The minimum detected frequency in megahertz.
   */
  minFreq?: number;

  /**
   * Minimum pulse repetition frequency of the emitter, measured in hertz. PRF is the
   * number of pulses transmitted per second. This is the reciprocal of the maxPRI
   * (Pulse Repetition Interval) value.
   */
  minPRF?: number;

  /**
   * Minimum pulse repetition interval of the emitter, measured in microseconds. The
   * interval between the start of one pulse and the start of another.
   */
  minPRI?: number;

  /**
   * Minimum pulse width of the emitter, measured in nanoseconds. This is the minimum
   * duration of the pulse.
   */
  minPW?: number;

  /**
   * The count of single-burst observations used for this geolocation observation.
   */
  numBursts?: number;

  /**
   * The order identifier for this Emitter Geo Location data set.
   */
  orderId?: string;

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
   * Optional identifier of the satellite used to identify and geolocate Emitter
   * signals of interest of this observation. This may be an internal identifier and
   * not necessarily a valid satellite number. Used when Emitter geolocation is done
   * by a single satellite.
   */
  origObjectId?: string;

  /**
   * Optional identifier of the emitter of interest for this observation. This may be
   * an internal identifier and not necessarily a valid emitter Id.
   */
  origRFEmitterId?: string;

  /**
   * Optional identifier provided by observation source to indicate the sensor
   * identifier which produced this Emitter Geo Location. This may be an internal
   * identifier and not necessarily a valid sensor ID. Used when Emitter geolocation
   * is done by a single sensor.
   */
  origSensorId?: string;

  /**
   * Optional external identifier referencing the entity used in the calculation of
   * the geolocation.
   */
  passGroupId?: string;

  /**
   * Describes the form of the emitted pulse and how its signal varies within the
   * pulse duration (e.g. GAUSSIAN, RECTANGULAR, TRAPEZOIDAL, etc.).
   */
  pulseShape?: string;

  /**
   * The time representing the mean of the constituent single-burst observations in
   * ISO 8601 UTC with microsecond precision.
   */
  receivedTs?: string;

  /**
   * Satellite/catalog number of the on-orbit spacecraft used to identify and
   * geolocate Emitter signals of interest of this detection. Used when Emitter
   * geolocation is done by a single satellite.
   */
  satNo?: number;

  /**
   * The name of the signal of interest.
   */
  signalOfInterest?: string;

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
}

export type EmitterGeolocationCountResponse = string;

export interface EmitterGeolocationQueryHelpResponse {
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

export type EmitterGeolocationTupleResponse =
  Array<EmitterGeolocationTupleResponse.EmitterGeolocationTupleResponseItem>;

export namespace EmitterGeolocationTupleResponse {
  /**
   * Model representation of Emitter geolocation data for a signal of interest.
   */
  export interface EmitterGeolocationTupleResponseItem {
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
     * Type of the signal of interest of this Emitter Geo Location (e.g. RF).
     */
    signalOfInterestType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The start time for this Emitter Geo Location data set in ISO 8601 UTC with
     * microsecond precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the image as projected on the
     * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
     * or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    agjson?: string;

    /**
     * The EmitterGeo algorithm type and version used in Emitter geolocation
     * calculations.
     */
    algVersion?: string;

    /**
     * Number of dimensions of the geometry depicted by region.
     */
    andims?: number;

    /**
     * Geographical spatial_ref_sys for region.
     */
    asrid?: number;

    /**
     * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
     * Text representation of the geometry/geography, of the image as projected on the
     * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
     * if included with a POST or PUT request that also specifies a valid 'area' field.
     */
    atext?: string;

    /**
     * Type of region as projected on the ground.
     */
    atype?: string;

    /**
     * Average pulse repetition frequency of the emitter, measured in hertz. PRF is the
     * number of pulses transmitted per second. This is the reciprocal of the avgPRI
     * (Pulse Repetition Interval) value.
     */
    avgPRF?: number;

    /**
     * Average pulse repetition interval of the emitter, measured in microseconds. The
     * interval between the start of one pulse and the start of another.
     */
    avgPRI?: number;

    /**
     * Average pulse width of the emitter, measured in nanoseconds. This is the average
     * duration of the pulse.
     */
    avgPW?: number;

    /**
     * The detected signal frequency in megahertz.
     */
    centerFreq?: number;

    /**
     * The name(s) of the subset of constellation spacecraft that made this detection.
     */
    cluster?: string;

    /**
     * The area of the confidence ellipse specified in meters squared to contain the
     * emitter with a 95% probability.
     */
    confArea?: number;

    /**
     * The name of the satellite constellation.
     */
    constellation?: string;

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
     * Specifies the creation time associated with the order in ISO 8601 UTC with
     * microsecond precision.
     */
    createdTs?: string;

    /**
     * The altitude relative to WGS-84 ellipsoid, in meters.
     */
    detectAlt?: number;

    /**
     * WGS-84 latitude of the most likely emitter location coordinate point, in
     * degrees. -90 to 90 degrees (negative values south of equator).
     */
    detectLat?: number;

    /**
     * WGS-84 longitude of the most likely emitter location coordinate point, in
     * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
     */
    detectLon?: number;

    /**
     * The end time for this Emitter Geo Location data set in ISO 8601 UTC with
     * microsecond precision.
     */
    endTime?: string;

    /**
     * Confidence ellipsoid about the detection location [semi-major axis (meters),
     * semi-minor axis (meters), orientation (degrees) measured clockwise (0-360 from
     * true north)].
     */
    errEllp?: Array<number>;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * Unique identifier of the satellite used to identify and geolocate Emitter
     * signals of interest. This ID can be used to obtain additional information on an
     * OnOrbit object using the 'get by ID' operation (e.g. /udl/onorbit/{id}). For
     * example, the onorbit object with idOnOrbit = abc would be queried as
     * /udl/onorbit/abc. Used when Emitter geolocation is done by a single satellite.
     */
    idOnOrbit?: string;

    /**
     * Optional identifier of the geolocated signal of interest RF Emitter for this
     * observation. This ID can be used to obtain additional information on an RF
     * Emitter object using the 'get by ID' operation (e.g. /udl/rfemitter/{id}). For
     * example, the rfemitter object with idRFEmitter = abc would be queried as
     * /udl/rfemitter/abc.
     */
    idRFEmitter?: string;

    /**
     * Unique identifier of the reporting sensor. This ID can be used to obtain
     * additional information on a sensor using the 'get by ID' operation (e.g.
     * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
     * as /udl/sensor/abc. Used when Emitter geolocation is done by a single sensor.
     */
    idSensor?: string;

    /**
     * The maximum detected frequency in megahertz.
     */
    maxFreq?: number;

    /**
     * Maximum pulse repetition frequency of the emitter, measured in hertz. PRF is the
     * number of pulses transmitted per second. This is the reciprocal of the minPRI
     * (Pulse Repetition Interval) value.
     */
    maxPRF?: number;

    /**
     * Maximum pulse repetition interval of the emitter, measured in microseconds. The
     * interval between the start of one pulse and the start of another.
     */
    maxPRI?: number;

    /**
     * Maximum pulse width of the emitter, measured in nanoseconds. This is the maximum
     * duration of the pulse.
     */
    maxPW?: number;

    /**
     * The minimum detected frequency in megahertz.
     */
    minFreq?: number;

    /**
     * Minimum pulse repetition frequency of the emitter, measured in hertz. PRF is the
     * number of pulses transmitted per second. This is the reciprocal of the maxPRI
     * (Pulse Repetition Interval) value.
     */
    minPRF?: number;

    /**
     * Minimum pulse repetition interval of the emitter, measured in microseconds. The
     * interval between the start of one pulse and the start of another.
     */
    minPRI?: number;

    /**
     * Minimum pulse width of the emitter, measured in nanoseconds. This is the minimum
     * duration of the pulse.
     */
    minPW?: number;

    /**
     * The count of single-burst observations used for this geolocation observation.
     */
    numBursts?: number;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Shared.OnorbitFull;

    /**
     * The order identifier for this Emitter Geo Location data set.
     */
    orderId?: string;

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
     * Optional identifier of the satellite used to identify and geolocate Emitter
     * signals of interest of this observation. This may be an internal identifier and
     * not necessarily a valid satellite number. Used when Emitter geolocation is done
     * by a single satellite.
     */
    origObjectId?: string;

    /**
     * Optional identifier of the emitter of interest for this observation. This may be
     * an internal identifier and not necessarily a valid emitter Id.
     */
    origRFEmitterId?: string;

    /**
     * Optional identifier provided by observation source to indicate the sensor
     * identifier which produced this Emitter Geo Location. This may be an internal
     * identifier and not necessarily a valid sensor ID. Used when Emitter geolocation
     * is done by a single sensor.
     */
    origSensorId?: string;

    /**
     * Optional external identifier referencing the entity used in the calculation of
     * the geolocation.
     */
    passGroupId?: string;

    /**
     * Describes the form of the emitted pulse and how its signal varies within the
     * pulse duration (e.g. GAUSSIAN, RECTANGULAR, TRAPEZOIDAL, etc.).
     */
    pulseShape?: string;

    /**
     * The time representing the mean of the constituent single-burst observations in
     * ISO 8601 UTC with microsecond precision.
     */
    receivedTs?: string;

    /**
     * Satellite/catalog number of the on-orbit spacecraft used to identify and
     * geolocate Emitter signals of interest of this detection. Used when Emitter
     * geolocation is done by a single satellite.
     */
    satNo?: number;

    /**
     * The name of the signal of interest.
     */
    signalOfInterest?: string;

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
  }
}

export interface EmitterGeolocationCreateParams {
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
   * Type of the signal of interest of this Emitter Geo Location (e.g. RF).
   */
  signalOfInterestType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The start time for this Emitter Geo Location data set in ISO 8601 UTC with
   * microsecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the image as projected on the
   * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
   * or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  agjson?: string;

  /**
   * The EmitterGeo algorithm type and version used in Emitter geolocation
   * calculations.
   */
  algVersion?: string;

  /**
   * Number of dimensions of the geometry depicted by region.
   */
  andims?: number;

  /**
   * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
   * the Point of Interest as projected on the ground.
   */
  area?: string;

  /**
   * Geographical spatial_ref_sys for region.
   */
  asrid?: number;

  /**
   * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
   * Text representation of the geometry/geography, of the image as projected on the
   * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
   * if included with a POST or PUT request that also specifies a valid 'area' field.
   */
  atext?: string;

  /**
   * Type of region as projected on the ground.
   */
  atype?: string;

  /**
   * Average pulse repetition frequency of the emitter, measured in hertz. PRF is the
   * number of pulses transmitted per second. This is the reciprocal of the avgPRI
   * (Pulse Repetition Interval) value.
   */
  avgPRF?: number;

  /**
   * Average pulse repetition interval of the emitter, measured in microseconds. The
   * interval between the start of one pulse and the start of another.
   */
  avgPRI?: number;

  /**
   * Average pulse width of the emitter, measured in nanoseconds. This is the average
   * duration of the pulse.
   */
  avgPW?: number;

  /**
   * The detected signal frequency in megahertz.
   */
  centerFreq?: number;

  /**
   * The name(s) of the subset of constellation spacecraft that made this detection.
   */
  cluster?: string;

  /**
   * The area of the confidence ellipse specified in meters squared to contain the
   * emitter with a 95% probability.
   */
  confArea?: number;

  /**
   * The name of the satellite constellation.
   */
  constellation?: string;

  /**
   * Specifies the creation time associated with the order in ISO 8601 UTC with
   * microsecond precision.
   */
  createdTs?: string;

  /**
   * The altitude relative to WGS-84 ellipsoid, in meters.
   */
  detectAlt?: number;

  /**
   * WGS-84 latitude of the most likely emitter location coordinate point, in
   * degrees. -90 to 90 degrees (negative values south of equator).
   */
  detectLat?: number;

  /**
   * WGS-84 longitude of the most likely emitter location coordinate point, in
   * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
   */
  detectLon?: number;

  /**
   * The end time for this Emitter Geo Location data set in ISO 8601 UTC with
   * microsecond precision.
   */
  endTime?: string;

  /**
   * Confidence ellipsoid about the detection location [semi-major axis (meters),
   * semi-minor axis (meters), orientation (degrees) measured clockwise (0-360 from
   * true north)].
   */
  errEllp?: Array<number>;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * Optional identifier of the geolocated signal of interest RF Emitter for this
   * observation. This ID can be used to obtain additional information on an RF
   * Emitter object using the 'get by ID' operation (e.g. /udl/rfemitter/{id}). For
   * example, the rfemitter object with idRFEmitter = abc would be queried as
   * /udl/rfemitter/abc.
   */
  idRFEmitter?: string;

  /**
   * Unique identifier of the reporting sensor. This ID can be used to obtain
   * additional information on a sensor using the 'get by ID' operation (e.g.
   * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
   * as /udl/sensor/abc. Used when Emitter geolocation is done by a single sensor.
   */
  idSensor?: string;

  /**
   * The maximum detected frequency in megahertz.
   */
  maxFreq?: number;

  /**
   * Maximum pulse repetition frequency of the emitter, measured in hertz. PRF is the
   * number of pulses transmitted per second. This is the reciprocal of the minPRI
   * (Pulse Repetition Interval) value.
   */
  maxPRF?: number;

  /**
   * Maximum pulse repetition interval of the emitter, measured in microseconds. The
   * interval between the start of one pulse and the start of another.
   */
  maxPRI?: number;

  /**
   * Maximum pulse width of the emitter, measured in nanoseconds. This is the maximum
   * duration of the pulse.
   */
  maxPW?: number;

  /**
   * The minimum detected frequency in megahertz.
   */
  minFreq?: number;

  /**
   * Minimum pulse repetition frequency of the emitter, measured in hertz. PRF is the
   * number of pulses transmitted per second. This is the reciprocal of the maxPRI
   * (Pulse Repetition Interval) value.
   */
  minPRF?: number;

  /**
   * Minimum pulse repetition interval of the emitter, measured in microseconds. The
   * interval between the start of one pulse and the start of another.
   */
  minPRI?: number;

  /**
   * Minimum pulse width of the emitter, measured in nanoseconds. This is the minimum
   * duration of the pulse.
   */
  minPW?: number;

  /**
   * The count of single-burst observations used for this geolocation observation.
   */
  numBursts?: number;

  /**
   * The order identifier for this Emitter Geo Location data set.
   */
  orderId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier of the satellite used to identify and geolocate Emitter
   * signals of interest of this observation. This may be an internal identifier and
   * not necessarily a valid satellite number. Used when Emitter geolocation is done
   * by a single satellite.
   */
  origObjectId?: string;

  /**
   * Optional identifier of the emitter of interest for this observation. This may be
   * an internal identifier and not necessarily a valid emitter Id.
   */
  origRFEmitterId?: string;

  /**
   * Optional identifier provided by observation source to indicate the sensor
   * identifier which produced this Emitter Geo Location. This may be an internal
   * identifier and not necessarily a valid sensor ID. Used when Emitter geolocation
   * is done by a single sensor.
   */
  origSensorId?: string;

  /**
   * Optional external identifier referencing the entity used in the calculation of
   * the geolocation.
   */
  passGroupId?: string;

  /**
   * Describes the form of the emitted pulse and how its signal varies within the
   * pulse duration (e.g. GAUSSIAN, RECTANGULAR, TRAPEZOIDAL, etc.).
   */
  pulseShape?: string;

  /**
   * The time representing the mean of the constituent single-burst observations in
   * ISO 8601 UTC with microsecond precision.
   */
  receivedTs?: string;

  /**
   * Satellite/catalog number of the on-orbit spacecraft used to identify and
   * geolocate Emitter signals of interest of this detection. Used when Emitter
   * geolocation is done by a single satellite.
   */
  satNo?: number;

  /**
   * The name of the signal of interest.
   */
  signalOfInterest?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;
}

export interface EmitterGeolocationRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface EmitterGeolocationListParams extends OffsetPageParams {
  /**
   * The start time for this Emitter Geo Location data set in ISO 8601 UTC with
   * microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;
}

export interface EmitterGeolocationCountParams {
  /**
   * The start time for this Emitter Geo Location data set in ISO 8601 UTC with
   * microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface EmitterGeolocationCreateBulkParams {
  body: Array<EmitterGeolocationCreateBulkParams.Body>;
}

export namespace EmitterGeolocationCreateBulkParams {
  /**
   * Model representation of Emitter geolocation data for a signal of interest.
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
     * Type of the signal of interest of this Emitter Geo Location (e.g. RF).
     */
    signalOfInterestType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The start time for this Emitter Geo Location data set in ISO 8601 UTC with
     * microsecond precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the image as projected on the
     * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
     * or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    agjson?: string;

    /**
     * The EmitterGeo algorithm type and version used in Emitter geolocation
     * calculations.
     */
    algVersion?: string;

    /**
     * Number of dimensions of the geometry depicted by region.
     */
    andims?: number;

    /**
     * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
     * the Point of Interest as projected on the ground.
     */
    area?: string;

    /**
     * Geographical spatial_ref_sys for region.
     */
    asrid?: number;

    /**
     * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
     * Text representation of the geometry/geography, of the image as projected on the
     * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
     * if included with a POST or PUT request that also specifies a valid 'area' field.
     */
    atext?: string;

    /**
     * Type of region as projected on the ground.
     */
    atype?: string;

    /**
     * Average pulse repetition frequency of the emitter, measured in hertz. PRF is the
     * number of pulses transmitted per second. This is the reciprocal of the avgPRI
     * (Pulse Repetition Interval) value.
     */
    avgPRF?: number;

    /**
     * Average pulse repetition interval of the emitter, measured in microseconds. The
     * interval between the start of one pulse and the start of another.
     */
    avgPRI?: number;

    /**
     * Average pulse width of the emitter, measured in nanoseconds. This is the average
     * duration of the pulse.
     */
    avgPW?: number;

    /**
     * The detected signal frequency in megahertz.
     */
    centerFreq?: number;

    /**
     * The name(s) of the subset of constellation spacecraft that made this detection.
     */
    cluster?: string;

    /**
     * The area of the confidence ellipse specified in meters squared to contain the
     * emitter with a 95% probability.
     */
    confArea?: number;

    /**
     * The name of the satellite constellation.
     */
    constellation?: string;

    /**
     * Specifies the creation time associated with the order in ISO 8601 UTC with
     * microsecond precision.
     */
    createdTs?: string;

    /**
     * The altitude relative to WGS-84 ellipsoid, in meters.
     */
    detectAlt?: number;

    /**
     * WGS-84 latitude of the most likely emitter location coordinate point, in
     * degrees. -90 to 90 degrees (negative values south of equator).
     */
    detectLat?: number;

    /**
     * WGS-84 longitude of the most likely emitter location coordinate point, in
     * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
     */
    detectLon?: number;

    /**
     * The end time for this Emitter Geo Location data set in ISO 8601 UTC with
     * microsecond precision.
     */
    endTime?: string;

    /**
     * Confidence ellipsoid about the detection location [semi-major axis (meters),
     * semi-minor axis (meters), orientation (degrees) measured clockwise (0-360 from
     * true north)].
     */
    errEllp?: Array<number>;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * Optional identifier of the geolocated signal of interest RF Emitter for this
     * observation. This ID can be used to obtain additional information on an RF
     * Emitter object using the 'get by ID' operation (e.g. /udl/rfemitter/{id}). For
     * example, the rfemitter object with idRFEmitter = abc would be queried as
     * /udl/rfemitter/abc.
     */
    idRFEmitter?: string;

    /**
     * Unique identifier of the reporting sensor. This ID can be used to obtain
     * additional information on a sensor using the 'get by ID' operation (e.g.
     * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
     * as /udl/sensor/abc. Used when Emitter geolocation is done by a single sensor.
     */
    idSensor?: string;

    /**
     * The maximum detected frequency in megahertz.
     */
    maxFreq?: number;

    /**
     * Maximum pulse repetition frequency of the emitter, measured in hertz. PRF is the
     * number of pulses transmitted per second. This is the reciprocal of the minPRI
     * (Pulse Repetition Interval) value.
     */
    maxPRF?: number;

    /**
     * Maximum pulse repetition interval of the emitter, measured in microseconds. The
     * interval between the start of one pulse and the start of another.
     */
    maxPRI?: number;

    /**
     * Maximum pulse width of the emitter, measured in nanoseconds. This is the maximum
     * duration of the pulse.
     */
    maxPW?: number;

    /**
     * The minimum detected frequency in megahertz.
     */
    minFreq?: number;

    /**
     * Minimum pulse repetition frequency of the emitter, measured in hertz. PRF is the
     * number of pulses transmitted per second. This is the reciprocal of the maxPRI
     * (Pulse Repetition Interval) value.
     */
    minPRF?: number;

    /**
     * Minimum pulse repetition interval of the emitter, measured in microseconds. The
     * interval between the start of one pulse and the start of another.
     */
    minPRI?: number;

    /**
     * Minimum pulse width of the emitter, measured in nanoseconds. This is the minimum
     * duration of the pulse.
     */
    minPW?: number;

    /**
     * The count of single-burst observations used for this geolocation observation.
     */
    numBursts?: number;

    /**
     * The order identifier for this Emitter Geo Location data set.
     */
    orderId?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier of the satellite used to identify and geolocate Emitter
     * signals of interest of this observation. This may be an internal identifier and
     * not necessarily a valid satellite number. Used when Emitter geolocation is done
     * by a single satellite.
     */
    origObjectId?: string;

    /**
     * Optional identifier of the emitter of interest for this observation. This may be
     * an internal identifier and not necessarily a valid emitter Id.
     */
    origRFEmitterId?: string;

    /**
     * Optional identifier provided by observation source to indicate the sensor
     * identifier which produced this Emitter Geo Location. This may be an internal
     * identifier and not necessarily a valid sensor ID. Used when Emitter geolocation
     * is done by a single sensor.
     */
    origSensorId?: string;

    /**
     * Optional external identifier referencing the entity used in the calculation of
     * the geolocation.
     */
    passGroupId?: string;

    /**
     * Describes the form of the emitted pulse and how its signal varies within the
     * pulse duration (e.g. GAUSSIAN, RECTANGULAR, TRAPEZOIDAL, etc.).
     */
    pulseShape?: string;

    /**
     * The time representing the mean of the constituent single-burst observations in
     * ISO 8601 UTC with microsecond precision.
     */
    receivedTs?: string;

    /**
     * Satellite/catalog number of the on-orbit spacecraft used to identify and
     * geolocate Emitter signals of interest of this detection. Used when Emitter
     * geolocation is done by a single satellite.
     */
    satNo?: number;

    /**
     * The name of the signal of interest.
     */
    signalOfInterest?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;
  }
}

export interface EmitterGeolocationTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The start time for this Emitter Geo Location data set in ISO 8601 UTC with
   * microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface EmitterGeolocationUnvalidatedPublishParams {
  body: Array<EmitterGeolocationUnvalidatedPublishParams.Body>;
}

export namespace EmitterGeolocationUnvalidatedPublishParams {
  /**
   * Model representation of Emitter geolocation data for a signal of interest.
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
     * Type of the signal of interest of this Emitter Geo Location (e.g. RF).
     */
    signalOfInterestType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The start time for this Emitter Geo Location data set in ISO 8601 UTC with
     * microsecond precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the image as projected on the
     * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
     * or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    agjson?: string;

    /**
     * The EmitterGeo algorithm type and version used in Emitter geolocation
     * calculations.
     */
    algVersion?: string;

    /**
     * Number of dimensions of the geometry depicted by region.
     */
    andims?: number;

    /**
     * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
     * the Point of Interest as projected on the ground.
     */
    area?: string;

    /**
     * Geographical spatial_ref_sys for region.
     */
    asrid?: number;

    /**
     * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
     * Text representation of the geometry/geography, of the image as projected on the
     * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
     * if included with a POST or PUT request that also specifies a valid 'area' field.
     */
    atext?: string;

    /**
     * Type of region as projected on the ground.
     */
    atype?: string;

    /**
     * Average pulse repetition frequency of the emitter, measured in hertz. PRF is the
     * number of pulses transmitted per second. This is the reciprocal of the avgPRI
     * (Pulse Repetition Interval) value.
     */
    avgPRF?: number;

    /**
     * Average pulse repetition interval of the emitter, measured in microseconds. The
     * interval between the start of one pulse and the start of another.
     */
    avgPRI?: number;

    /**
     * Average pulse width of the emitter, measured in nanoseconds. This is the average
     * duration of the pulse.
     */
    avgPW?: number;

    /**
     * The detected signal frequency in megahertz.
     */
    centerFreq?: number;

    /**
     * The name(s) of the subset of constellation spacecraft that made this detection.
     */
    cluster?: string;

    /**
     * The area of the confidence ellipse specified in meters squared to contain the
     * emitter with a 95% probability.
     */
    confArea?: number;

    /**
     * The name of the satellite constellation.
     */
    constellation?: string;

    /**
     * Specifies the creation time associated with the order in ISO 8601 UTC with
     * microsecond precision.
     */
    createdTs?: string;

    /**
     * The altitude relative to WGS-84 ellipsoid, in meters.
     */
    detectAlt?: number;

    /**
     * WGS-84 latitude of the most likely emitter location coordinate point, in
     * degrees. -90 to 90 degrees (negative values south of equator).
     */
    detectLat?: number;

    /**
     * WGS-84 longitude of the most likely emitter location coordinate point, in
     * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
     */
    detectLon?: number;

    /**
     * The end time for this Emitter Geo Location data set in ISO 8601 UTC with
     * microsecond precision.
     */
    endTime?: string;

    /**
     * Confidence ellipsoid about the detection location [semi-major axis (meters),
     * semi-minor axis (meters), orientation (degrees) measured clockwise (0-360 from
     * true north)].
     */
    errEllp?: Array<number>;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * Optional identifier of the geolocated signal of interest RF Emitter for this
     * observation. This ID can be used to obtain additional information on an RF
     * Emitter object using the 'get by ID' operation (e.g. /udl/rfemitter/{id}). For
     * example, the rfemitter object with idRFEmitter = abc would be queried as
     * /udl/rfemitter/abc.
     */
    idRFEmitter?: string;

    /**
     * Unique identifier of the reporting sensor. This ID can be used to obtain
     * additional information on a sensor using the 'get by ID' operation (e.g.
     * /udl/sensor/{id}). For example, the sensor with idSensor = abc would be queried
     * as /udl/sensor/abc. Used when Emitter geolocation is done by a single sensor.
     */
    idSensor?: string;

    /**
     * The maximum detected frequency in megahertz.
     */
    maxFreq?: number;

    /**
     * Maximum pulse repetition frequency of the emitter, measured in hertz. PRF is the
     * number of pulses transmitted per second. This is the reciprocal of the minPRI
     * (Pulse Repetition Interval) value.
     */
    maxPRF?: number;

    /**
     * Maximum pulse repetition interval of the emitter, measured in microseconds. The
     * interval between the start of one pulse and the start of another.
     */
    maxPRI?: number;

    /**
     * Maximum pulse width of the emitter, measured in nanoseconds. This is the maximum
     * duration of the pulse.
     */
    maxPW?: number;

    /**
     * The minimum detected frequency in megahertz.
     */
    minFreq?: number;

    /**
     * Minimum pulse repetition frequency of the emitter, measured in hertz. PRF is the
     * number of pulses transmitted per second. This is the reciprocal of the maxPRI
     * (Pulse Repetition Interval) value.
     */
    minPRF?: number;

    /**
     * Minimum pulse repetition interval of the emitter, measured in microseconds. The
     * interval between the start of one pulse and the start of another.
     */
    minPRI?: number;

    /**
     * Minimum pulse width of the emitter, measured in nanoseconds. This is the minimum
     * duration of the pulse.
     */
    minPW?: number;

    /**
     * The count of single-burst observations used for this geolocation observation.
     */
    numBursts?: number;

    /**
     * The order identifier for this Emitter Geo Location data set.
     */
    orderId?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier of the satellite used to identify and geolocate Emitter
     * signals of interest of this observation. This may be an internal identifier and
     * not necessarily a valid satellite number. Used when Emitter geolocation is done
     * by a single satellite.
     */
    origObjectId?: string;

    /**
     * Optional identifier of the emitter of interest for this observation. This may be
     * an internal identifier and not necessarily a valid emitter Id.
     */
    origRFEmitterId?: string;

    /**
     * Optional identifier provided by observation source to indicate the sensor
     * identifier which produced this Emitter Geo Location. This may be an internal
     * identifier and not necessarily a valid sensor ID. Used when Emitter geolocation
     * is done by a single sensor.
     */
    origSensorId?: string;

    /**
     * Optional external identifier referencing the entity used in the calculation of
     * the geolocation.
     */
    passGroupId?: string;

    /**
     * Describes the form of the emitted pulse and how its signal varies within the
     * pulse duration (e.g. GAUSSIAN, RECTANGULAR, TRAPEZOIDAL, etc.).
     */
    pulseShape?: string;

    /**
     * The time representing the mean of the constituent single-burst observations in
     * ISO 8601 UTC with microsecond precision.
     */
    receivedTs?: string;

    /**
     * Satellite/catalog number of the on-orbit spacecraft used to identify and
     * geolocate Emitter signals of interest of this detection. Used when Emitter
     * geolocation is done by a single satellite.
     */
    satNo?: number;

    /**
     * The name of the signal of interest.
     */
    signalOfInterest?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;
  }
}

export declare namespace EmitterGeolocation {
  export {
    type EmitterGeolocationRetrieveResponse as EmitterGeolocationRetrieveResponse,
    type EmitterGeolocationListResponse as EmitterGeolocationListResponse,
    type EmitterGeolocationCountResponse as EmitterGeolocationCountResponse,
    type EmitterGeolocationQueryHelpResponse as EmitterGeolocationQueryHelpResponse,
    type EmitterGeolocationTupleResponse as EmitterGeolocationTupleResponse,
    type EmitterGeolocationListResponsesOffsetPage as EmitterGeolocationListResponsesOffsetPage,
    type EmitterGeolocationCreateParams as EmitterGeolocationCreateParams,
    type EmitterGeolocationRetrieveParams as EmitterGeolocationRetrieveParams,
    type EmitterGeolocationListParams as EmitterGeolocationListParams,
    type EmitterGeolocationCountParams as EmitterGeolocationCountParams,
    type EmitterGeolocationCreateBulkParams as EmitterGeolocationCreateBulkParams,
    type EmitterGeolocationTupleParams as EmitterGeolocationTupleParams,
    type EmitterGeolocationUnvalidatedPublishParams as EmitterGeolocationUnvalidatedPublishParams,
  };
}
