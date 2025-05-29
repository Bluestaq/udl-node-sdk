// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryRetrieveParams,
  HistoryRetrieveResponse,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SarObservation extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single SAR observation as a POST body and ingest
   * into the database. This operation is not intended to be used for automated feeds
   * into UDL. Data providers should contact the UDL team for specific role
   * assignments and for instructions on setting up a permanent feed through an
   * alternate mechanism.
   *
   * @example
   * ```ts
   * await client.sarObservation.create({
   *   classificationMarking: 'U',
   *   collectionEnd: '2023-04-22T17:38:10.201770Z',
   *   collectionStart: '2023-04-22T17:35:00.123456Z',
   *   dataMode: 'TEST',
   *   sarMode: 'SPOTLIGHT',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: SarObservationCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/sarobservation', {
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
   * for await (const sarObservationListResponse of client.sarObservation.list(
   *   { collectionStart: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SarObservationListParams,
    options?: RequestOptions,
  ): PagePromise<SarObservationListResponsesOffsetPage, SarObservationListResponse> {
    return this._client.getAPIList('/udl/sarobservation', OffsetPage<SarObservationListResponse>, {
      query,
      ...options,
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
   * const response = await client.sarObservation.count({
   *   collectionStart: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: SarObservationCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/sarobservation/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of SAR
   * observations as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.sarObservation.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       collectionEnd: '2023-04-22T17:38:10.201770Z',
   *       collectionStart: '2023-04-22T17:35:00.123456Z',
   *       dataMode: 'TEST',
   *       sarMode: 'SPOTLIGHT',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: SarObservationCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/sarobservation/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single SAR observations by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const sarObservation = await client.sarObservation.get(
   *   'id',
   * );
   * ```
   */
  get(
    id: string,
    query: SarObservationGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SarObservationGetResponse> {
    return this._client.get(path`/udl/sarobservation/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.sarObservation.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<SarObservationQueryhelpResponse> {
    return this._client.get('/udl/sarobservation/queryhelp', options);
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
   * const response = await client.sarObservation.tuple({
   *   collectionStart: '2019-12-27T18:11:19.117Z',
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: SarObservationTupleParams, options?: RequestOptions): APIPromise<SarObservationTupleResponse> {
    return this._client.get('/udl/sarobservation/tuple', { query, ...options });
  }

  /**
   * Service operation to take SAR observations as a POST body and ingest into the
   * database. This operation is intended to be used for automated feeds into UDL. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sarObservation.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       collectionEnd: '2023-04-22T17:38:10.201770Z',
   *       collectionStart: '2023-04-22T17:35:00.123456Z',
   *       dataMode: 'TEST',
   *       sarMode: 'SPOTLIGHT',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(
    params: SarObservationUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-sar', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type SarObservationListResponsesOffsetPage = OffsetPage<SarObservationListResponse>;

/**
 * Model representation of observation data for SAR based sensor phenomenologies.
 * J2000 is the preferred coordinate frame for all observations, but in some cases
 * observations may be in another frame depending on the provider. Please see the
 * 'Discover' tab in the storefront to confirm coordinate frames by data provider.
 */
export interface SarObservationListResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Collection end time in ISO 8601 UTC format with microsecond precision.
   */
  collectionEnd: string;

  /**
   * Collection start time in ISO 8601 UTC format with microsecond precision.
   */
  collectionStart: string;

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
   * Collection mode setting for this collection (e.g. AREA, SPOTLIGHT, STRIP, etc.).
   */
  sarMode: string;

  /**
   * Source of the data.
   */
  source: string;

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
   * Type of region as projected on the ground (POLYGON, POINT, LINE).
   */
  atype?: string;

  /**
   * The azimuth angle, in degrees, of the SAR satellite nadir subpoint measured
   * clockwise from true north at the subpoint.
   */
  azimuthAngle?: number;

  /**
   * The datetime at the center point of the collection in ISO 8601 UTC format with
   * microsecond precision.
   */
  centerTime?: string;

  /**
   * Optional identifier to indicate the specific collection tasking which produced
   * this observation.
   */
  collectionId?: string;

  /**
   * Required sweep angle for the continuous spot scene in degrees.
   */
  continuousSpotAngle?: number;

  /**
   * The coordinate system used for the sensor velocity and target position vectors
   * for the collection.
   */
  coordSys?: string;

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
   * The detection end time in ISO 8601 UTC format, with microsecond precision.
   */
  detectionEnd?: string;

  /**
   * Identifier of the specific detection within a collection which produced this
   * observation.
   */
  detectionId?: string;

  /**
   * The detection start time in ISO 8601 UTC format, with microsecond precision.
   */
  detectionStart?: string;

  /**
   * The duration, in seconds, of this detection.
   */
  dwellTime?: number;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * Specifies the farthest range, in kilometers, from the flight path to target
   * during the collection.
   */
  farRange?: number;

  /**
   * The graze angle (also referred to as look angle) for the collection in degrees.
   */
  grazeAngle?: number;

  /**
   * Distance between independent measurements, representing the physical dimension
   * that represents a pixel of the image.
   */
  groundResolutionProjection?: number;

  /**
   * Unique identifier of the spacecraft hosting the sensor associated with this
   * collection.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * The center incidence angle in degrees.
   */
  incidenceAngle?: number;

  /**
   * The number of looks in the azimuth direction.
   */
  looksAzimuth?: number;

  /**
   * The number of looks in the range direction.
   */
  looksRange?: number;

  /**
   * Averages the input synthetic aperture radar (SAR) data by looks in range and
   * azimuth to approximate square pixels, mitigates speckle, and reduces SAR tool
   * processing time.
   */
  multilookNumber?: number;

  /**
   * Specifies the closest range, in kilometers, from the flight path to target
   * during the collection.
   */
  nearRange?: number;

  /**
   * The antenna pointing direction (LEFT, RIGHT).
   */
  obDirection?: string;

  /**
   * Name of the band containing operating frequency for the collection (e.g. C, E,
   * EHF, HF, K, Ka, Ku, L, Q, S, SHF, UNK, UHF, V, VHF, VLF, W, X). See RFBandType
   * for more details and descriptions of each band name.
   */
  operatingBand?: string;

  /**
   * The operating frequency, in Mhz, for the collection.
   */
  operatingFreq?: number;

  /**
   * The orbital direction (ASCENDING, DESCENDING) of the platform during the
   * collection.
   */
  orbitState?: string;

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
   * Optional identifier provided by the source to indicate the onorbit object
   * hosting the sensor associated with this collection. This may be an internal
   * identifier and not necessarily a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the source to indicate the sensor for this
   * collection. This may be an internal identifier and not necessarily a valid
   * sensor ID.
   */
  origSensorId?: string;

  /**
   * The bandwidth frequency of the pulse in Mhz.
   */
  pulseBandwidth?: number;

  /**
   * The duration of a pulse in seconds.
   */
  pulseDuration?: number;

  /**
   * The resolution in the azimuth direction measured in meters.
   */
  resolutionAzimuth?: number;

  /**
   * The resolution in the range direction measured in meters.
   */
  resolutionRange?: number;

  /**
   * Receive polarization e.g. H - (Horizontally Polarized) Perpendicular to Earth's
   * surface, V - (Vertically Polarized) Parallel to Earth's surface, L - (Left Hand
   * Circularly Polarized) Rotating left relative to the earth's surface, R - (Right
   * Hand Circularly Polarized) Rotating right relative to the earth's surface.
   */
  rxPolarization?: string;

  /**
   * Satellite/Catalog number of the spacecraft hosting the sensor associated with
   * this collection.
   */
  satNo?: number;

  /**
   * Sensor altitude during collection in kilometers.
   */
  senalt?: number;

  /**
   * WGS-84 sensor latitude sub-point at collect end time (collectionEnd),
   * represented as -90 to 90 degrees (negative values south of equator).
   */
  senlatEnd?: number;

  /**
   * WGS-84 sensor latitude sub-point at collect start time (collectionStart),
   * represented as -90 to 90 degrees (negative values south of equator).
   */
  senlatStart?: number;

  /**
   * WGS-84 sensor longitude sub-point at collect end time (collectionEnd),
   * represented as -180 to 180 degrees (negative values west of Prime Meridian).
   */
  senlonEnd?: number;

  /**
   * WGS-84 sensor longitude sub-point at collect start time (collectionStart),
   * represented as -180 to 180 degrees (negative values west of Prime Meridian).
   */
  senlonStart?: number;

  /**
   * Sensor platform X-velocity during collection in kilometers/second.
   */
  senvelx?: number;

  /**
   * Sensor platform Y-velocity during collection in kilometers/second.
   */
  senvely?: number;

  /**
   * Sensor platform Z-velocity during collection in kilometers/second.
   */
  senvelz?: number;

  /**
   * Slant distance from sensor to center point of imaging event in kilometers.
   */
  slantRange?: number;

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
   * The pixel spacing in the azimuth direction measured in meters.
   */
  spacingAzimuth?: number;

  /**
   * The pixel spacing in the range direction measured in meters.
   */
  spacingRange?: number;

  /**
   * The squint angle for the collection in degrees.
   */
  squintAngle?: number;

  /**
   * Array of UUIDs of the UDL data records that are related to the SAR Observation.
   * See the associated 'srcTyps' array for the specific types of data, positionally
   * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
   * match in size. See the corresponding srcTyps array element for the data type of
   * the UUID and use the appropriate API operation to retrieve that object (e.g.
   * /udl/sarobservation/{uuid}).
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (e.g. ANALYTICMAGERY, ESID, GROUNDIMAGE, NOTIFICATION,
   * POI, SV, TRACK) that are related to the SAR Observation. See the associated
   * 'srcIds' array for the record UUIDs, positionally corresponding to the record
   * types in this array. The 'srcTyps' and 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * The length of the collection as projected on the ground in kilometers.
   */
  swathLength?: number;

  /**
   * The collection target X position in kilometers.
   */
  targetposx?: number;

  /**
   * The collection target Y position in kilometers.
   */
  targetposy?: number;

  /**
   * The collection target Z position in kilometers.
   */
  targetposz?: number;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Transmit polarization e.g. H - (Horizontally Polarized) Perpendicular to Earth's
   * surface, V - (Vertically Polarized) Parallel to Earth's surface, L - (Left Hand
   * Circularly Polarized) Rotating left relative to the earth's surface, R - (Right
   * Hand Circularly Polarized) Rotating right relative to the earth's surface.
   */
  txPolarization?: string;
}

export type SarObservationCountResponse = string;

/**
 * Model representation of observation data for SAR based sensor phenomenologies.
 * J2000 is the preferred coordinate frame for all observations, but in some cases
 * observations may be in another frame depending on the provider. Please see the
 * 'Discover' tab in the storefront to confirm coordinate frames by data provider.
 */
export interface SarObservationGetResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Collection end time in ISO 8601 UTC format with microsecond precision.
   */
  collectionEnd: string;

  /**
   * Collection start time in ISO 8601 UTC format with microsecond precision.
   */
  collectionStart: string;

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
   * Collection mode setting for this collection (e.g. AREA, SPOTLIGHT, STRIP, etc.).
   */
  sarMode: string;

  /**
   * Source of the data.
   */
  source: string;

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
   * Number of dimensions of the geometry depicted by region.
   */
  andims?: number;

  /**
   * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
   * the image event as projected on the ground.
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
   * Type of region as projected on the ground (POLYGON, POINT, LINE).
   */
  atype?: string;

  /**
   * The azimuth angle, in degrees, of the SAR satellite nadir subpoint measured
   * clockwise from true north at the subpoint.
   */
  azimuthAngle?: number;

  /**
   * The datetime at the center point of the collection in ISO 8601 UTC format with
   * microsecond precision.
   */
  centerTime?: string;

  /**
   * Optional identifier to indicate the specific collection tasking which produced
   * this observation.
   */
  collectionId?: string;

  /**
   * Required sweep angle for the continuous spot scene in degrees.
   */
  continuousSpotAngle?: number;

  /**
   * The coordinate system used for the sensor velocity and target position vectors
   * for the collection.
   */
  coordSys?: string;

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
   * The detection end time in ISO 8601 UTC format, with microsecond precision.
   */
  detectionEnd?: string;

  /**
   * Identifier of the specific detection within a collection which produced this
   * observation.
   */
  detectionId?: string;

  /**
   * The detection start time in ISO 8601 UTC format, with microsecond precision.
   */
  detectionStart?: string;

  /**
   * The duration, in seconds, of this detection.
   */
  dwellTime?: number;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * Specifies the farthest range, in kilometers, from the flight path to target
   * during the collection.
   */
  farRange?: number;

  /**
   * The graze angle (also referred to as look angle) for the collection in degrees.
   */
  grazeAngle?: number;

  /**
   * Distance between independent measurements, representing the physical dimension
   * that represents a pixel of the image.
   */
  groundResolutionProjection?: number;

  /**
   * Unique identifier of the spacecraft hosting the sensor associated with this
   * collection.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * The center incidence angle in degrees.
   */
  incidenceAngle?: number;

  /**
   * The number of looks in the azimuth direction.
   */
  looksAzimuth?: number;

  /**
   * The number of looks in the range direction.
   */
  looksRange?: number;

  /**
   * Averages the input synthetic aperture radar (SAR) data by looks in range and
   * azimuth to approximate square pixels, mitigates speckle, and reduces SAR tool
   * processing time.
   */
  multilookNumber?: number;

  /**
   * Specifies the closest range, in kilometers, from the flight path to target
   * during the collection.
   */
  nearRange?: number;

  /**
   * The antenna pointing direction (LEFT, RIGHT).
   */
  obDirection?: string;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: Shared.OnorbitFull;

  /**
   * Name of the band containing operating frequency for the collection (e.g. C, E,
   * EHF, HF, K, Ka, Ku, L, Q, S, SHF, UNK, UHF, V, VHF, VLF, W, X). See RFBandType
   * for more details and descriptions of each band name.
   */
  operatingBand?: string;

  /**
   * The operating frequency, in Mhz, for the collection.
   */
  operatingFreq?: number;

  /**
   * The orbital direction (ASCENDING, DESCENDING) of the platform during the
   * collection.
   */
  orbitState?: string;

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
   * Optional identifier provided by the source to indicate the onorbit object
   * hosting the sensor associated with this collection. This may be an internal
   * identifier and not necessarily a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the source to indicate the sensor for this
   * collection. This may be an internal identifier and not necessarily a valid
   * sensor ID.
   */
  origSensorId?: string;

  /**
   * The bandwidth frequency of the pulse in Mhz.
   */
  pulseBandwidth?: number;

  /**
   * The duration of a pulse in seconds.
   */
  pulseDuration?: number;

  /**
   * The resolution in the azimuth direction measured in meters.
   */
  resolutionAzimuth?: number;

  /**
   * The resolution in the range direction measured in meters.
   */
  resolutionRange?: number;

  /**
   * Receive polarization e.g. H - (Horizontally Polarized) Perpendicular to Earth's
   * surface, V - (Vertically Polarized) Parallel to Earth's surface, L - (Left Hand
   * Circularly Polarized) Rotating left relative to the earth's surface, R - (Right
   * Hand Circularly Polarized) Rotating right relative to the earth's surface.
   */
  rxPolarization?: string;

  /**
   * Satellite/Catalog number of the spacecraft hosting the sensor associated with
   * this collection.
   */
  satNo?: number;

  /**
   * Sensor altitude during collection in kilometers.
   */
  senalt?: number;

  /**
   * WGS-84 sensor latitude sub-point at collect end time (collectionEnd),
   * represented as -90 to 90 degrees (negative values south of equator).
   */
  senlatEnd?: number;

  /**
   * WGS-84 sensor latitude sub-point at collect start time (collectionStart),
   * represented as -90 to 90 degrees (negative values south of equator).
   */
  senlatStart?: number;

  /**
   * WGS-84 sensor longitude sub-point at collect end time (collectionEnd),
   * represented as -180 to 180 degrees (negative values west of Prime Meridian).
   */
  senlonEnd?: number;

  /**
   * WGS-84 sensor longitude sub-point at collect start time (collectionStart),
   * represented as -180 to 180 degrees (negative values west of Prime Meridian).
   */
  senlonStart?: number;

  /**
   * Sensor platform X-velocity during collection in kilometers/second.
   */
  senvelx?: number;

  /**
   * Sensor platform Y-velocity during collection in kilometers/second.
   */
  senvely?: number;

  /**
   * Sensor platform Z-velocity during collection in kilometers/second.
   */
  senvelz?: number;

  /**
   * Slant distance from sensor to center point of imaging event in kilometers.
   */
  slantRange?: number;

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
   * The pixel spacing in the azimuth direction measured in meters.
   */
  spacingAzimuth?: number;

  /**
   * The pixel spacing in the range direction measured in meters.
   */
  spacingRange?: number;

  /**
   * The squint angle for the collection in degrees.
   */
  squintAngle?: number;

  /**
   * Array of UUIDs of the UDL data records that are related to the SAR Observation.
   * See the associated 'srcTyps' array for the specific types of data, positionally
   * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
   * match in size. See the corresponding srcTyps array element for the data type of
   * the UUID and use the appropriate API operation to retrieve that object (e.g.
   * /udl/sarobservation/{uuid}).
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (e.g. ANALYTICMAGERY, ESID, GROUNDIMAGE, NOTIFICATION,
   * POI, SV, TRACK) that are related to the SAR Observation. See the associated
   * 'srcIds' array for the record UUIDs, positionally corresponding to the record
   * types in this array. The 'srcTyps' and 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * The length of the collection as projected on the ground in kilometers.
   */
  swathLength?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * The collection target X position in kilometers.
   */
  targetposx?: number;

  /**
   * The collection target Y position in kilometers.
   */
  targetposy?: number;

  /**
   * The collection target Z position in kilometers.
   */
  targetposz?: number;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Transmit polarization e.g. H - (Horizontally Polarized) Perpendicular to Earth's
   * surface, V - (Vertically Polarized) Parallel to Earth's surface, L - (Left Hand
   * Circularly Polarized) Rotating left relative to the earth's surface, R - (Right
   * Hand Circularly Polarized) Rotating right relative to the earth's surface.
   */
  txPolarization?: string;
}

export interface SarObservationQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<SarObservationQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace SarObservationQueryhelpResponse {
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

export type SarObservationTupleResponse = Array<SarObservationTupleResponse.SarObservationTupleResponseItem>;

export namespace SarObservationTupleResponse {
  /**
   * Model representation of observation data for SAR based sensor phenomenologies.
   * J2000 is the preferred coordinate frame for all observations, but in some cases
   * observations may be in another frame depending on the provider. Please see the
   * 'Discover' tab in the storefront to confirm coordinate frames by data provider.
   */
  export interface SarObservationTupleResponseItem {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Collection end time in ISO 8601 UTC format with microsecond precision.
     */
    collectionEnd: string;

    /**
     * Collection start time in ISO 8601 UTC format with microsecond precision.
     */
    collectionStart: string;

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
     * Collection mode setting for this collection (e.g. AREA, SPOTLIGHT, STRIP, etc.).
     */
    sarMode: string;

    /**
     * Source of the data.
     */
    source: string;

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
     * Number of dimensions of the geometry depicted by region.
     */
    andims?: number;

    /**
     * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
     * the image event as projected on the ground.
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
     * Type of region as projected on the ground (POLYGON, POINT, LINE).
     */
    atype?: string;

    /**
     * The azimuth angle, in degrees, of the SAR satellite nadir subpoint measured
     * clockwise from true north at the subpoint.
     */
    azimuthAngle?: number;

    /**
     * The datetime at the center point of the collection in ISO 8601 UTC format with
     * microsecond precision.
     */
    centerTime?: string;

    /**
     * Optional identifier to indicate the specific collection tasking which produced
     * this observation.
     */
    collectionId?: string;

    /**
     * Required sweep angle for the continuous spot scene in degrees.
     */
    continuousSpotAngle?: number;

    /**
     * The coordinate system used for the sensor velocity and target position vectors
     * for the collection.
     */
    coordSys?: string;

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
     * The detection end time in ISO 8601 UTC format, with microsecond precision.
     */
    detectionEnd?: string;

    /**
     * Identifier of the specific detection within a collection which produced this
     * observation.
     */
    detectionId?: string;

    /**
     * The detection start time in ISO 8601 UTC format, with microsecond precision.
     */
    detectionStart?: string;

    /**
     * The duration, in seconds, of this detection.
     */
    dwellTime?: number;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * Specifies the farthest range, in kilometers, from the flight path to target
     * during the collection.
     */
    farRange?: number;

    /**
     * The graze angle (also referred to as look angle) for the collection in degrees.
     */
    grazeAngle?: number;

    /**
     * Distance between independent measurements, representing the physical dimension
     * that represents a pixel of the image.
     */
    groundResolutionProjection?: number;

    /**
     * Unique identifier of the spacecraft hosting the sensor associated with this
     * collection.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * The center incidence angle in degrees.
     */
    incidenceAngle?: number;

    /**
     * The number of looks in the azimuth direction.
     */
    looksAzimuth?: number;

    /**
     * The number of looks in the range direction.
     */
    looksRange?: number;

    /**
     * Averages the input synthetic aperture radar (SAR) data by looks in range and
     * azimuth to approximate square pixels, mitigates speckle, and reduces SAR tool
     * processing time.
     */
    multilookNumber?: number;

    /**
     * Specifies the closest range, in kilometers, from the flight path to target
     * during the collection.
     */
    nearRange?: number;

    /**
     * The antenna pointing direction (LEFT, RIGHT).
     */
    obDirection?: string;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Shared.OnorbitFull;

    /**
     * Name of the band containing operating frequency for the collection (e.g. C, E,
     * EHF, HF, K, Ka, Ku, L, Q, S, SHF, UNK, UHF, V, VHF, VLF, W, X). See RFBandType
     * for more details and descriptions of each band name.
     */
    operatingBand?: string;

    /**
     * The operating frequency, in Mhz, for the collection.
     */
    operatingFreq?: number;

    /**
     * The orbital direction (ASCENDING, DESCENDING) of the platform during the
     * collection.
     */
    orbitState?: string;

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
     * Optional identifier provided by the source to indicate the onorbit object
     * hosting the sensor associated with this collection. This may be an internal
     * identifier and not necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by the source to indicate the sensor for this
     * collection. This may be an internal identifier and not necessarily a valid
     * sensor ID.
     */
    origSensorId?: string;

    /**
     * The bandwidth frequency of the pulse in Mhz.
     */
    pulseBandwidth?: number;

    /**
     * The duration of a pulse in seconds.
     */
    pulseDuration?: number;

    /**
     * The resolution in the azimuth direction measured in meters.
     */
    resolutionAzimuth?: number;

    /**
     * The resolution in the range direction measured in meters.
     */
    resolutionRange?: number;

    /**
     * Receive polarization e.g. H - (Horizontally Polarized) Perpendicular to Earth's
     * surface, V - (Vertically Polarized) Parallel to Earth's surface, L - (Left Hand
     * Circularly Polarized) Rotating left relative to the earth's surface, R - (Right
     * Hand Circularly Polarized) Rotating right relative to the earth's surface.
     */
    rxPolarization?: string;

    /**
     * Satellite/Catalog number of the spacecraft hosting the sensor associated with
     * this collection.
     */
    satNo?: number;

    /**
     * Sensor altitude during collection in kilometers.
     */
    senalt?: number;

    /**
     * WGS-84 sensor latitude sub-point at collect end time (collectionEnd),
     * represented as -90 to 90 degrees (negative values south of equator).
     */
    senlatEnd?: number;

    /**
     * WGS-84 sensor latitude sub-point at collect start time (collectionStart),
     * represented as -90 to 90 degrees (negative values south of equator).
     */
    senlatStart?: number;

    /**
     * WGS-84 sensor longitude sub-point at collect end time (collectionEnd),
     * represented as -180 to 180 degrees (negative values west of Prime Meridian).
     */
    senlonEnd?: number;

    /**
     * WGS-84 sensor longitude sub-point at collect start time (collectionStart),
     * represented as -180 to 180 degrees (negative values west of Prime Meridian).
     */
    senlonStart?: number;

    /**
     * Sensor platform X-velocity during collection in kilometers/second.
     */
    senvelx?: number;

    /**
     * Sensor platform Y-velocity during collection in kilometers/second.
     */
    senvely?: number;

    /**
     * Sensor platform Z-velocity during collection in kilometers/second.
     */
    senvelz?: number;

    /**
     * Slant distance from sensor to center point of imaging event in kilometers.
     */
    slantRange?: number;

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
     * The pixel spacing in the azimuth direction measured in meters.
     */
    spacingAzimuth?: number;

    /**
     * The pixel spacing in the range direction measured in meters.
     */
    spacingRange?: number;

    /**
     * The squint angle for the collection in degrees.
     */
    squintAngle?: number;

    /**
     * Array of UUIDs of the UDL data records that are related to the SAR Observation.
     * See the associated 'srcTyps' array for the specific types of data, positionally
     * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
     * match in size. See the corresponding srcTyps array element for the data type of
     * the UUID and use the appropriate API operation to retrieve that object (e.g.
     * /udl/sarobservation/{uuid}).
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (e.g. ANALYTICMAGERY, ESID, GROUNDIMAGE, NOTIFICATION,
     * POI, SV, TRACK) that are related to the SAR Observation. See the associated
     * 'srcIds' array for the record UUIDs, positionally corresponding to the record
     * types in this array. The 'srcTyps' and 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * The length of the collection as projected on the ground in kilometers.
     */
    swathLength?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * The collection target X position in kilometers.
     */
    targetposx?: number;

    /**
     * The collection target Y position in kilometers.
     */
    targetposy?: number;

    /**
     * The collection target Z position in kilometers.
     */
    targetposz?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Transmit polarization e.g. H - (Horizontally Polarized) Perpendicular to Earth's
     * surface, V - (Vertically Polarized) Parallel to Earth's surface, L - (Left Hand
     * Circularly Polarized) Rotating left relative to the earth's surface, R - (Right
     * Hand Circularly Polarized) Rotating right relative to the earth's surface.
     */
    txPolarization?: string;
  }
}

export interface SarObservationCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Collection end time in ISO 8601 UTC format with microsecond precision.
   */
  collectionEnd: string;

  /**
   * Collection start time in ISO 8601 UTC format with microsecond precision.
   */
  collectionStart: string;

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
   * Collection mode setting for this collection (e.g. AREA, SPOTLIGHT, STRIP, etc.).
   */
  sarMode: string;

  /**
   * Source of the data.
   */
  source: string;

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
   * Number of dimensions of the geometry depicted by region.
   */
  andims?: number;

  /**
   * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
   * the image event as projected on the ground.
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
   * Type of region as projected on the ground (POLYGON, POINT, LINE).
   */
  atype?: string;

  /**
   * The azimuth angle, in degrees, of the SAR satellite nadir subpoint measured
   * clockwise from true north at the subpoint.
   */
  azimuthAngle?: number;

  /**
   * The datetime at the center point of the collection in ISO 8601 UTC format with
   * microsecond precision.
   */
  centerTime?: string;

  /**
   * Optional identifier to indicate the specific collection tasking which produced
   * this observation.
   */
  collectionId?: string;

  /**
   * Required sweep angle for the continuous spot scene in degrees.
   */
  continuousSpotAngle?: number;

  /**
   * The coordinate system used for the sensor velocity and target position vectors
   * for the collection.
   */
  coordSys?: string;

  /**
   * The detection end time in ISO 8601 UTC format, with microsecond precision.
   */
  detectionEnd?: string;

  /**
   * Identifier of the specific detection within a collection which produced this
   * observation.
   */
  detectionId?: string;

  /**
   * The detection start time in ISO 8601 UTC format, with microsecond precision.
   */
  detectionStart?: string;

  /**
   * The duration, in seconds, of this detection.
   */
  dwellTime?: number;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * Specifies the farthest range, in kilometers, from the flight path to target
   * during the collection.
   */
  farRange?: number;

  /**
   * The graze angle (also referred to as look angle) for the collection in degrees.
   */
  grazeAngle?: number;

  /**
   * Distance between independent measurements, representing the physical dimension
   * that represents a pixel of the image.
   */
  groundResolutionProjection?: number;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * The center incidence angle in degrees.
   */
  incidenceAngle?: number;

  /**
   * The number of looks in the azimuth direction.
   */
  looksAzimuth?: number;

  /**
   * The number of looks in the range direction.
   */
  looksRange?: number;

  /**
   * Averages the input synthetic aperture radar (SAR) data by looks in range and
   * azimuth to approximate square pixels, mitigates speckle, and reduces SAR tool
   * processing time.
   */
  multilookNumber?: number;

  /**
   * Specifies the closest range, in kilometers, from the flight path to target
   * during the collection.
   */
  nearRange?: number;

  /**
   * The antenna pointing direction (LEFT, RIGHT).
   */
  obDirection?: string;

  /**
   * Name of the band containing operating frequency for the collection (e.g. C, E,
   * EHF, HF, K, Ka, Ku, L, Q, S, SHF, UNK, UHF, V, VHF, VLF, W, X). See RFBandType
   * for more details and descriptions of each band name.
   */
  operatingBand?: string;

  /**
   * The operating frequency, in Mhz, for the collection.
   */
  operatingFreq?: number;

  /**
   * The orbital direction (ASCENDING, DESCENDING) of the platform during the
   * collection.
   */
  orbitState?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by the source to indicate the onorbit object
   * hosting the sensor associated with this collection. This may be an internal
   * identifier and not necessarily a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the source to indicate the sensor for this
   * collection. This may be an internal identifier and not necessarily a valid
   * sensor ID.
   */
  origSensorId?: string;

  /**
   * The bandwidth frequency of the pulse in Mhz.
   */
  pulseBandwidth?: number;

  /**
   * The duration of a pulse in seconds.
   */
  pulseDuration?: number;

  /**
   * The resolution in the azimuth direction measured in meters.
   */
  resolutionAzimuth?: number;

  /**
   * The resolution in the range direction measured in meters.
   */
  resolutionRange?: number;

  /**
   * Receive polarization e.g. H - (Horizontally Polarized) Perpendicular to Earth's
   * surface, V - (Vertically Polarized) Parallel to Earth's surface, L - (Left Hand
   * Circularly Polarized) Rotating left relative to the earth's surface, R - (Right
   * Hand Circularly Polarized) Rotating right relative to the earth's surface.
   */
  rxPolarization?: string;

  /**
   * Satellite/Catalog number of the spacecraft hosting the sensor associated with
   * this collection.
   */
  satNo?: number;

  /**
   * Sensor altitude during collection in kilometers.
   */
  senalt?: number;

  /**
   * WGS-84 sensor latitude sub-point at collect end time (collectionEnd),
   * represented as -90 to 90 degrees (negative values south of equator).
   */
  senlatEnd?: number;

  /**
   * WGS-84 sensor latitude sub-point at collect start time (collectionStart),
   * represented as -90 to 90 degrees (negative values south of equator).
   */
  senlatStart?: number;

  /**
   * WGS-84 sensor longitude sub-point at collect end time (collectionEnd),
   * represented as -180 to 180 degrees (negative values west of Prime Meridian).
   */
  senlonEnd?: number;

  /**
   * WGS-84 sensor longitude sub-point at collect start time (collectionStart),
   * represented as -180 to 180 degrees (negative values west of Prime Meridian).
   */
  senlonStart?: number;

  /**
   * Sensor platform X-velocity during collection in kilometers/second.
   */
  senvelx?: number;

  /**
   * Sensor platform Y-velocity during collection in kilometers/second.
   */
  senvely?: number;

  /**
   * Sensor platform Z-velocity during collection in kilometers/second.
   */
  senvelz?: number;

  /**
   * Slant distance from sensor to center point of imaging event in kilometers.
   */
  slantRange?: number;

  /**
   * Signal to noise ratio, in dB.
   */
  snr?: number;

  /**
   * The pixel spacing in the azimuth direction measured in meters.
   */
  spacingAzimuth?: number;

  /**
   * The pixel spacing in the range direction measured in meters.
   */
  spacingRange?: number;

  /**
   * The squint angle for the collection in degrees.
   */
  squintAngle?: number;

  /**
   * Array of UUIDs of the UDL data records that are related to the SAR Observation.
   * See the associated 'srcTyps' array for the specific types of data, positionally
   * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
   * match in size. See the corresponding srcTyps array element for the data type of
   * the UUID and use the appropriate API operation to retrieve that object (e.g.
   * /udl/sarobservation/{uuid}).
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (e.g. ANALYTICMAGERY, ESID, GROUNDIMAGE, NOTIFICATION,
   * POI, SV, TRACK) that are related to the SAR Observation. See the associated
   * 'srcIds' array for the record UUIDs, positionally corresponding to the record
   * types in this array. The 'srcTyps' and 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * The length of the collection as projected on the ground in kilometers.
   */
  swathLength?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * The collection target X position in kilometers.
   */
  targetposx?: number;

  /**
   * The collection target Y position in kilometers.
   */
  targetposy?: number;

  /**
   * The collection target Z position in kilometers.
   */
  targetposz?: number;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Transmit polarization e.g. H - (Horizontally Polarized) Perpendicular to Earth's
   * surface, V - (Vertically Polarized) Parallel to Earth's surface, L - (Left Hand
   * Circularly Polarized) Rotating left relative to the earth's surface, R - (Right
   * Hand Circularly Polarized) Rotating right relative to the earth's surface.
   */
  txPolarization?: string;
}

export interface SarObservationListParams extends OffsetPageParams {
  /**
   * Collection start time in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  collectionStart: string;
}

export interface SarObservationCountParams {
  /**
   * Collection start time in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  collectionStart: string;

  firstResult?: number;

  maxResults?: number;
}

export interface SarObservationCreateBulkParams {
  body: Array<SarObservationCreateBulkParams.Body>;
}

export namespace SarObservationCreateBulkParams {
  /**
   * Model representation of observation data for SAR based sensor phenomenologies.
   * J2000 is the preferred coordinate frame for all observations, but in some cases
   * observations may be in another frame depending on the provider. Please see the
   * 'Discover' tab in the storefront to confirm coordinate frames by data provider.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Collection end time in ISO 8601 UTC format with microsecond precision.
     */
    collectionEnd: string;

    /**
     * Collection start time in ISO 8601 UTC format with microsecond precision.
     */
    collectionStart: string;

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
     * Collection mode setting for this collection (e.g. AREA, SPOTLIGHT, STRIP, etc.).
     */
    sarMode: string;

    /**
     * Source of the data.
     */
    source: string;

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
     * Number of dimensions of the geometry depicted by region.
     */
    andims?: number;

    /**
     * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
     * the image event as projected on the ground.
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
     * Type of region as projected on the ground (POLYGON, POINT, LINE).
     */
    atype?: string;

    /**
     * The azimuth angle, in degrees, of the SAR satellite nadir subpoint measured
     * clockwise from true north at the subpoint.
     */
    azimuthAngle?: number;

    /**
     * The datetime at the center point of the collection in ISO 8601 UTC format with
     * microsecond precision.
     */
    centerTime?: string;

    /**
     * Optional identifier to indicate the specific collection tasking which produced
     * this observation.
     */
    collectionId?: string;

    /**
     * Required sweep angle for the continuous spot scene in degrees.
     */
    continuousSpotAngle?: number;

    /**
     * The coordinate system used for the sensor velocity and target position vectors
     * for the collection.
     */
    coordSys?: string;

    /**
     * The detection end time in ISO 8601 UTC format, with microsecond precision.
     */
    detectionEnd?: string;

    /**
     * Identifier of the specific detection within a collection which produced this
     * observation.
     */
    detectionId?: string;

    /**
     * The detection start time in ISO 8601 UTC format, with microsecond precision.
     */
    detectionStart?: string;

    /**
     * The duration, in seconds, of this detection.
     */
    dwellTime?: number;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * Specifies the farthest range, in kilometers, from the flight path to target
     * during the collection.
     */
    farRange?: number;

    /**
     * The graze angle (also referred to as look angle) for the collection in degrees.
     */
    grazeAngle?: number;

    /**
     * Distance between independent measurements, representing the physical dimension
     * that represents a pixel of the image.
     */
    groundResolutionProjection?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * The center incidence angle in degrees.
     */
    incidenceAngle?: number;

    /**
     * The number of looks in the azimuth direction.
     */
    looksAzimuth?: number;

    /**
     * The number of looks in the range direction.
     */
    looksRange?: number;

    /**
     * Averages the input synthetic aperture radar (SAR) data by looks in range and
     * azimuth to approximate square pixels, mitigates speckle, and reduces SAR tool
     * processing time.
     */
    multilookNumber?: number;

    /**
     * Specifies the closest range, in kilometers, from the flight path to target
     * during the collection.
     */
    nearRange?: number;

    /**
     * The antenna pointing direction (LEFT, RIGHT).
     */
    obDirection?: string;

    /**
     * Name of the band containing operating frequency for the collection (e.g. C, E,
     * EHF, HF, K, Ka, Ku, L, Q, S, SHF, UNK, UHF, V, VHF, VLF, W, X). See RFBandType
     * for more details and descriptions of each band name.
     */
    operatingBand?: string;

    /**
     * The operating frequency, in Mhz, for the collection.
     */
    operatingFreq?: number;

    /**
     * The orbital direction (ASCENDING, DESCENDING) of the platform during the
     * collection.
     */
    orbitState?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the source to indicate the onorbit object
     * hosting the sensor associated with this collection. This may be an internal
     * identifier and not necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by the source to indicate the sensor for this
     * collection. This may be an internal identifier and not necessarily a valid
     * sensor ID.
     */
    origSensorId?: string;

    /**
     * The bandwidth frequency of the pulse in Mhz.
     */
    pulseBandwidth?: number;

    /**
     * The duration of a pulse in seconds.
     */
    pulseDuration?: number;

    /**
     * The resolution in the azimuth direction measured in meters.
     */
    resolutionAzimuth?: number;

    /**
     * The resolution in the range direction measured in meters.
     */
    resolutionRange?: number;

    /**
     * Receive polarization e.g. H - (Horizontally Polarized) Perpendicular to Earth's
     * surface, V - (Vertically Polarized) Parallel to Earth's surface, L - (Left Hand
     * Circularly Polarized) Rotating left relative to the earth's surface, R - (Right
     * Hand Circularly Polarized) Rotating right relative to the earth's surface.
     */
    rxPolarization?: string;

    /**
     * Satellite/Catalog number of the spacecraft hosting the sensor associated with
     * this collection.
     */
    satNo?: number;

    /**
     * Sensor altitude during collection in kilometers.
     */
    senalt?: number;

    /**
     * WGS-84 sensor latitude sub-point at collect end time (collectionEnd),
     * represented as -90 to 90 degrees (negative values south of equator).
     */
    senlatEnd?: number;

    /**
     * WGS-84 sensor latitude sub-point at collect start time (collectionStart),
     * represented as -90 to 90 degrees (negative values south of equator).
     */
    senlatStart?: number;

    /**
     * WGS-84 sensor longitude sub-point at collect end time (collectionEnd),
     * represented as -180 to 180 degrees (negative values west of Prime Meridian).
     */
    senlonEnd?: number;

    /**
     * WGS-84 sensor longitude sub-point at collect start time (collectionStart),
     * represented as -180 to 180 degrees (negative values west of Prime Meridian).
     */
    senlonStart?: number;

    /**
     * Sensor platform X-velocity during collection in kilometers/second.
     */
    senvelx?: number;

    /**
     * Sensor platform Y-velocity during collection in kilometers/second.
     */
    senvely?: number;

    /**
     * Sensor platform Z-velocity during collection in kilometers/second.
     */
    senvelz?: number;

    /**
     * Slant distance from sensor to center point of imaging event in kilometers.
     */
    slantRange?: number;

    /**
     * Signal to noise ratio, in dB.
     */
    snr?: number;

    /**
     * The pixel spacing in the azimuth direction measured in meters.
     */
    spacingAzimuth?: number;

    /**
     * The pixel spacing in the range direction measured in meters.
     */
    spacingRange?: number;

    /**
     * The squint angle for the collection in degrees.
     */
    squintAngle?: number;

    /**
     * Array of UUIDs of the UDL data records that are related to the SAR Observation.
     * See the associated 'srcTyps' array for the specific types of data, positionally
     * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
     * match in size. See the corresponding srcTyps array element for the data type of
     * the UUID and use the appropriate API operation to retrieve that object (e.g.
     * /udl/sarobservation/{uuid}).
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (e.g. ANALYTICMAGERY, ESID, GROUNDIMAGE, NOTIFICATION,
     * POI, SV, TRACK) that are related to the SAR Observation. See the associated
     * 'srcIds' array for the record UUIDs, positionally corresponding to the record
     * types in this array. The 'srcTyps' and 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * The length of the collection as projected on the ground in kilometers.
     */
    swathLength?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * The collection target X position in kilometers.
     */
    targetposx?: number;

    /**
     * The collection target Y position in kilometers.
     */
    targetposy?: number;

    /**
     * The collection target Z position in kilometers.
     */
    targetposz?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Transmit polarization e.g. H - (Horizontally Polarized) Perpendicular to Earth's
     * surface, V - (Vertically Polarized) Parallel to Earth's surface, L - (Left Hand
     * Circularly Polarized) Rotating left relative to the earth's surface, R - (Right
     * Hand Circularly Polarized) Rotating right relative to the earth's surface.
     */
    txPolarization?: string;
  }
}

export interface SarObservationGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SarObservationTupleParams {
  /**
   * Collection start time in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  collectionStart: string;

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

export interface SarObservationUnvalidatedPublishParams {
  body: Array<SarObservationUnvalidatedPublishParams.Body>;
}

export namespace SarObservationUnvalidatedPublishParams {
  /**
   * Model representation of observation data for SAR based sensor phenomenologies.
   * J2000 is the preferred coordinate frame for all observations, but in some cases
   * observations may be in another frame depending on the provider. Please see the
   * 'Discover' tab in the storefront to confirm coordinate frames by data provider.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Collection end time in ISO 8601 UTC format with microsecond precision.
     */
    collectionEnd: string;

    /**
     * Collection start time in ISO 8601 UTC format with microsecond precision.
     */
    collectionStart: string;

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
     * Collection mode setting for this collection (e.g. AREA, SPOTLIGHT, STRIP, etc.).
     */
    sarMode: string;

    /**
     * Source of the data.
     */
    source: string;

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
     * Number of dimensions of the geometry depicted by region.
     */
    andims?: number;

    /**
     * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
     * the image event as projected on the ground.
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
     * Type of region as projected on the ground (POLYGON, POINT, LINE).
     */
    atype?: string;

    /**
     * The azimuth angle, in degrees, of the SAR satellite nadir subpoint measured
     * clockwise from true north at the subpoint.
     */
    azimuthAngle?: number;

    /**
     * The datetime at the center point of the collection in ISO 8601 UTC format with
     * microsecond precision.
     */
    centerTime?: string;

    /**
     * Optional identifier to indicate the specific collection tasking which produced
     * this observation.
     */
    collectionId?: string;

    /**
     * Required sweep angle for the continuous spot scene in degrees.
     */
    continuousSpotAngle?: number;

    /**
     * The coordinate system used for the sensor velocity and target position vectors
     * for the collection.
     */
    coordSys?: string;

    /**
     * The detection end time in ISO 8601 UTC format, with microsecond precision.
     */
    detectionEnd?: string;

    /**
     * Identifier of the specific detection within a collection which produced this
     * observation.
     */
    detectionId?: string;

    /**
     * The detection start time in ISO 8601 UTC format, with microsecond precision.
     */
    detectionStart?: string;

    /**
     * The duration, in seconds, of this detection.
     */
    dwellTime?: number;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * Specifies the farthest range, in kilometers, from the flight path to target
     * during the collection.
     */
    farRange?: number;

    /**
     * The graze angle (also referred to as look angle) for the collection in degrees.
     */
    grazeAngle?: number;

    /**
     * Distance between independent measurements, representing the physical dimension
     * that represents a pixel of the image.
     */
    groundResolutionProjection?: number;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * The center incidence angle in degrees.
     */
    incidenceAngle?: number;

    /**
     * The number of looks in the azimuth direction.
     */
    looksAzimuth?: number;

    /**
     * The number of looks in the range direction.
     */
    looksRange?: number;

    /**
     * Averages the input synthetic aperture radar (SAR) data by looks in range and
     * azimuth to approximate square pixels, mitigates speckle, and reduces SAR tool
     * processing time.
     */
    multilookNumber?: number;

    /**
     * Specifies the closest range, in kilometers, from the flight path to target
     * during the collection.
     */
    nearRange?: number;

    /**
     * The antenna pointing direction (LEFT, RIGHT).
     */
    obDirection?: string;

    /**
     * Name of the band containing operating frequency for the collection (e.g. C, E,
     * EHF, HF, K, Ka, Ku, L, Q, S, SHF, UNK, UHF, V, VHF, VLF, W, X). See RFBandType
     * for more details and descriptions of each band name.
     */
    operatingBand?: string;

    /**
     * The operating frequency, in Mhz, for the collection.
     */
    operatingFreq?: number;

    /**
     * The orbital direction (ASCENDING, DESCENDING) of the platform during the
     * collection.
     */
    orbitState?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the source to indicate the onorbit object
     * hosting the sensor associated with this collection. This may be an internal
     * identifier and not necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by the source to indicate the sensor for this
     * collection. This may be an internal identifier and not necessarily a valid
     * sensor ID.
     */
    origSensorId?: string;

    /**
     * The bandwidth frequency of the pulse in Mhz.
     */
    pulseBandwidth?: number;

    /**
     * The duration of a pulse in seconds.
     */
    pulseDuration?: number;

    /**
     * The resolution in the azimuth direction measured in meters.
     */
    resolutionAzimuth?: number;

    /**
     * The resolution in the range direction measured in meters.
     */
    resolutionRange?: number;

    /**
     * Receive polarization e.g. H - (Horizontally Polarized) Perpendicular to Earth's
     * surface, V - (Vertically Polarized) Parallel to Earth's surface, L - (Left Hand
     * Circularly Polarized) Rotating left relative to the earth's surface, R - (Right
     * Hand Circularly Polarized) Rotating right relative to the earth's surface.
     */
    rxPolarization?: string;

    /**
     * Satellite/Catalog number of the spacecraft hosting the sensor associated with
     * this collection.
     */
    satNo?: number;

    /**
     * Sensor altitude during collection in kilometers.
     */
    senalt?: number;

    /**
     * WGS-84 sensor latitude sub-point at collect end time (collectionEnd),
     * represented as -90 to 90 degrees (negative values south of equator).
     */
    senlatEnd?: number;

    /**
     * WGS-84 sensor latitude sub-point at collect start time (collectionStart),
     * represented as -90 to 90 degrees (negative values south of equator).
     */
    senlatStart?: number;

    /**
     * WGS-84 sensor longitude sub-point at collect end time (collectionEnd),
     * represented as -180 to 180 degrees (negative values west of Prime Meridian).
     */
    senlonEnd?: number;

    /**
     * WGS-84 sensor longitude sub-point at collect start time (collectionStart),
     * represented as -180 to 180 degrees (negative values west of Prime Meridian).
     */
    senlonStart?: number;

    /**
     * Sensor platform X-velocity during collection in kilometers/second.
     */
    senvelx?: number;

    /**
     * Sensor platform Y-velocity during collection in kilometers/second.
     */
    senvely?: number;

    /**
     * Sensor platform Z-velocity during collection in kilometers/second.
     */
    senvelz?: number;

    /**
     * Slant distance from sensor to center point of imaging event in kilometers.
     */
    slantRange?: number;

    /**
     * Signal to noise ratio, in dB.
     */
    snr?: number;

    /**
     * The pixel spacing in the azimuth direction measured in meters.
     */
    spacingAzimuth?: number;

    /**
     * The pixel spacing in the range direction measured in meters.
     */
    spacingRange?: number;

    /**
     * The squint angle for the collection in degrees.
     */
    squintAngle?: number;

    /**
     * Array of UUIDs of the UDL data records that are related to the SAR Observation.
     * See the associated 'srcTyps' array for the specific types of data, positionally
     * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
     * match in size. See the corresponding srcTyps array element for the data type of
     * the UUID and use the appropriate API operation to retrieve that object (e.g.
     * /udl/sarobservation/{uuid}).
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (e.g. ANALYTICMAGERY, ESID, GROUNDIMAGE, NOTIFICATION,
     * POI, SV, TRACK) that are related to the SAR Observation. See the associated
     * 'srcIds' array for the record UUIDs, positionally corresponding to the record
     * types in this array. The 'srcTyps' and 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * The length of the collection as projected on the ground in kilometers.
     */
    swathLength?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * The collection target X position in kilometers.
     */
    targetposx?: number;

    /**
     * The collection target Y position in kilometers.
     */
    targetposy?: number;

    /**
     * The collection target Z position in kilometers.
     */
    targetposz?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Transmit polarization e.g. H - (Horizontally Polarized) Perpendicular to Earth's
     * surface, V - (Vertically Polarized) Parallel to Earth's surface, L - (Left Hand
     * Circularly Polarized) Rotating left relative to the earth's surface, R - (Right
     * Hand Circularly Polarized) Rotating right relative to the earth's surface.
     */
    txPolarization?: string;
  }
}

SarObservation.History = History;

export declare namespace SarObservation {
  export {
    type SarObservationListResponse as SarObservationListResponse,
    type SarObservationCountResponse as SarObservationCountResponse,
    type SarObservationGetResponse as SarObservationGetResponse,
    type SarObservationQueryhelpResponse as SarObservationQueryhelpResponse,
    type SarObservationTupleResponse as SarObservationTupleResponse,
    type SarObservationListResponsesOffsetPage as SarObservationListResponsesOffsetPage,
    type SarObservationCreateParams as SarObservationCreateParams,
    type SarObservationListParams as SarObservationListParams,
    type SarObservationCountParams as SarObservationCountParams,
    type SarObservationCreateBulkParams as SarObservationCreateBulkParams,
    type SarObservationGetParams as SarObservationGetParams,
    type SarObservationTupleParams as SarObservationTupleParams,
    type SarObservationUnvalidatedPublishParams as SarObservationUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryRetrieveResponse as HistoryRetrieveResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryRetrieveParams as HistoryRetrieveParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
