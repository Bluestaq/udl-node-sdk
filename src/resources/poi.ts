// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Poi extends APIResource {
  /**
   * Service operation to take a single POI as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.poi.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'POI_NAME',
   *   poiid: 'POI-ID',
   *   source: 'Bluestaq',
   *   ts: '2020-01-01T16:00:00.123456Z',
   * });
   * ```
   */
  create(body: PoiCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/poi', {
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
   * for await (const poiListResponse of client.poi.list({
   *   ts: '2019-12-27T18:11:19.117Z',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PoiListParams,
    options?: RequestOptions,
  ): PagePromise<PoiListResponsesOffsetPage, PoiListResponse> {
    return this._client.getAPIList('/udl/poi', OffsetPage<PoiListResponse>, { query, ...options });
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
   * const response = await client.poi.count({
   *   ts: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: PoiCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/poi/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of POIs
   * as a POST body and ingest into the database. This operation is not intended to
   * be used for automated feeds into UDL. Data providers should contact the UDL team
   * for specific role assignments and for instructions on setting up a permanent
   * feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.poi.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       name: 'POI_NAME',
   *       poiid: 'POI-ID',
   *       source: 'Bluestaq',
   *       ts: '2020-01-01T16:00:00.123456Z',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: PoiCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/poi/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single POI by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const poi = await client.poi.get('id');
   * ```
   */
  get(
    id: string,
    query: PoiGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PoiGetResponse> {
    return this._client.get(path`/udl/poi/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.poi.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<PoiQueryhelpResponse> {
    return this._client.get('/udl/poi/queryhelp', options);
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
   * const response = await client.poi.tuple({
   *   columns: 'columns',
   *   ts: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: PoiTupleParams, options?: RequestOptions): APIPromise<PoiTupleResponse> {
    return this._client.get('/udl/poi/tuple', { query, ...options });
  }

  /**
   * Service operation to take a list of POIs as a POST body and ingest into the
   * database. This operation is intended to be used for automated feeds into UDL. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.poi.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       name: 'POI_NAME',
   *       poiid: 'POI-ID',
   *       source: 'Bluestaq',
   *       ts: '2020-01-01T16:00:00.123456Z',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(params: PoiUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-poi', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type PoiListResponsesOffsetPage = OffsetPage<PoiListResponse>;

/**
 * A Point of Interest is loosely based on the MITRE CoT (Cursor on Target) schema
 * (https://www.mitre.org/publications/technical-papers/cursorontarget-message-router-users-guide)
 * and provides a simple way to specify a point on the earth for a variety of
 * purposes (tasking, targeting, etc).
 */
export interface PoiListResponse {
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
   * Name of the POI target object.
   */
  name: string;

  /**
   * Identifier of the actual Point of Interest or target object, which should remain
   * the same on subsequent POI records of the same Point of Interest.
   */
  poiid: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Activity/POI timestamp in ISO8601 UTC format.
   */
  ts: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The activity in which the POI subject is engaged. Intended as, but not
   * constrained to, MIL-STD-6016 environment dependent activity designations. The
   * activity can be reported as either a combination of the code and environment
   * (e.g. 30/LAND) or as the descriptive enumeration (e.g. TRAINING), which are
   * equivalent.
   */
  activity?: string;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the image as projected on the
   * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
   * or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  agjson?: string;

  /**
   * Point height above ellipsoid (WGS-84), in meters.
   */
  alt?: number;

  /**
   * Number of dimensions of the geometry depicted by region.
   */
  andims?: number;

  /**
   * Geographical spatial_ref_sys for region.
   */
  asrid?: number;

  /**
   * ID/name of the platform or entity providing the POI data.
   */
  asset?: string;

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
   * Target object pointing azimuth angle, in degrees (for target with sensing or
   * emitting capability).
   */
  az?: number;

  /**
   * The Basic Encyclopedia Number associated with the POI, if applicable.
   */
  beNumber?: string;

  /**
   * Radius of circular area about lat/lon point, in meters (1-sigma, if representing
   * error).
   */
  ce?: number;

  /**
   * Contact information for assets reporting PPLI (Precise Participant Location and
   * Identification). PPLI is a Link 16 message that is used by units to transmit
   * complete location, identification, and limited status information.
   */
  cntct?: string;

  /**
   * POI confidence estimate (not standardized, but typically a value between 0 and
   * 1, with 0 indicating lowest confidence.
   */
  conf?: number;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * Description of the POI target object.
   */
  desc?: string;

  /**
   * Target object pointing elevation angle, in degrees (for target with sensing or
   * emitting capability).
   */
  el?: number;

  /**
   * Elliptical area about the lat/lon point, specified as [semi-major axis (m),
   * semi-minor axis (m), orientation (deg) off true North at POI].
   */
  elle?: Array<number>;

  /**
   * POI environment type (e.g., LAND, SURFACE, SUBSURFACE, UNKNOWN, etc.).
   */
  env?: string;

  /**
   * Optional array of groups used when a POI msg originates from a TAK server. Each
   * group must be no longer than 256 characters. Groups identify a set of users
   * targeted by the cot/poi msg.
   */
  groups?: Array<string>;

  /**
   * How the event point was generated, in CoT object heirarchy notation (optional,
   * CoT).
   */
  how?: string;

  /**
   * Estimated identity of the point/object (e.g., FRIEND, HOSTILE, SUSPECT,
   * ASSUMED_FRIEND, UNKNOWN, etc.).
   */
  ident?: string;

  /**
   * Array of one or more unique identifiers of weather records associated with this
   * POI. Each element in array must be 36 characters or less in length.
   */
  idWeatherReport?: Array<string>;

  /**
   * WGS-84 latitude of the POI, in degrees (+N, -S), -90 to 90.
   */
  lat?: number;

  /**
   * Height above lat/lon point, in meters (1-sigma, if representing linear error).
   */
  le?: number;

  /**
   * WGS-84 longitude of the POI, in degrees (+E, -W), -180 to 180.
   */
  lon?: number;

  /**
   * Optional mission ID related to the POI.
   */
  msnid?: string;

  /**
   * The orientation of a vehicle, platform or other entity described by the POI. The
   * orientation is defined as the pointing direction of the front/nose of the object
   * in degrees clockwise from true North at the object point.
   */
  orientation?: number;

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
   * POI/object platform type (e.g., 14/GROUND, COMBAT_VEHICLE, etc.).
   */
  plat?: string;

  /**
   * The purpose of this Point of Interest record (e.g., BDA, EQPT, EVENT, GEOL,
   * HZRD, PPLI, SHOTBOX, SURVL, TGT, TSK, WTHR).
   */
  pps?: string;

  /**
   * Priority of the POI target object.
   */
  pri?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Specific point/object type (e.g., 82/GROUND, LIGHT_TANK, etc.).
   */
  spec?: string;

  /**
   * Stale timestamp (optional), in ISO8601 UTC format.
   */
  stale?: string;

  /**
   * Start time of event validity (optional), in ISO8601 UTC format.
   */
  start?: string;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Optional ID of an associated track related to the POI object, if applicable.
   * This track ID should correlate the Point of Interest to a track from the Track
   * service.
   */
  trkid?: string;

  /**
   * Event type, in CoT object heirarchy notation (optional, CoT).
   */
  type?: string;

  /**
   * List of URLs to before/after images of this Point of Interest entity.
   */
  urls?: Array<string>;
}

export type PoiCountResponse = string;

/**
 * A Point of Interest is loosely based on the MITRE CoT (Cursor on Target) schema
 * (https://www.mitre.org/publications/technical-papers/cursorontarget-message-router-users-guide)
 * and provides a simple way to specify a point on the earth for a variety of
 * purposes (tasking, targeting, etc).
 */
export interface PoiGetResponse {
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
   * Name of the POI target object.
   */
  name: string;

  /**
   * Identifier of the actual Point of Interest or target object, which should remain
   * the same on subsequent POI records of the same Point of Interest.
   */
  poiid: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Activity/POI timestamp in ISO8601 UTC format.
   */
  ts: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The activity in which the POI subject is engaged. Intended as, but not
   * constrained to, MIL-STD-6016 environment dependent activity designations. The
   * activity can be reported as either a combination of the code and environment
   * (e.g. 30/LAND) or as the descriptive enumeration (e.g. TRAINING), which are
   * equivalent.
   */
  activity?: string;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the image as projected on the
   * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
   * or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  agjson?: string;

  /**
   * Point height above ellipsoid (WGS-84), in meters.
   */
  alt?: number;

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
   * ID/name of the platform or entity providing the POI data.
   */
  asset?: string;

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
   * Target object pointing azimuth angle, in degrees (for target with sensing or
   * emitting capability).
   */
  az?: number;

  /**
   * The Basic Encyclopedia Number associated with the POI, if applicable.
   */
  beNumber?: string;

  /**
   * Radius of circular area about lat/lon point, in meters (1-sigma, if representing
   * error).
   */
  ce?: number;

  /**
   * Contact information for assets reporting PPLI (Precise Participant Location and
   * Identification). PPLI is a Link 16 message that is used by units to transmit
   * complete location, identification, and limited status information.
   */
  cntct?: string;

  /**
   * POI confidence estimate (not standardized, but typically a value between 0 and
   * 1, with 0 indicating lowest confidence.
   */
  conf?: number;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * Description of the POI target object.
   */
  desc?: string;

  /**
   * Target object pointing elevation angle, in degrees (for target with sensing or
   * emitting capability).
   */
  el?: number;

  /**
   * Elliptical area about the lat/lon point, specified as [semi-major axis (m),
   * semi-minor axis (m), orientation (deg) off true North at POI].
   */
  elle?: Array<number>;

  /**
   * POI environment type (e.g., LAND, SURFACE, SUBSURFACE, UNKNOWN, etc.).
   */
  env?: string;

  /**
   * Optional array of groups used when a POI msg originates from a TAK server. Each
   * group must be no longer than 256 characters. Groups identify a set of users
   * targeted by the cot/poi msg.
   */
  groups?: Array<string>;

  /**
   * How the event point was generated, in CoT object heirarchy notation (optional,
   * CoT).
   */
  how?: string;

  /**
   * Estimated identity of the point/object (e.g., FRIEND, HOSTILE, SUSPECT,
   * ASSUMED_FRIEND, UNKNOWN, etc.).
   */
  ident?: string;

  /**
   * Array of one or more unique identifiers of weather records associated with this
   * POI. Each element in array must be 36 characters or less in length.
   */
  idWeatherReport?: Array<string>;

  /**
   * WGS-84 latitude of the POI, in degrees (+N, -S), -90 to 90.
   */
  lat?: number;

  /**
   * Height above lat/lon point, in meters (1-sigma, if representing linear error).
   */
  le?: number;

  /**
   * WGS-84 longitude of the POI, in degrees (+E, -W), -180 to 180.
   */
  lon?: number;

  /**
   * Optional mission ID related to the POI.
   */
  msnid?: string;

  /**
   * The orientation of a vehicle, platform or other entity described by the POI. The
   * orientation is defined as the pointing direction of the front/nose of the object
   * in degrees clockwise from true North at the object point.
   */
  orientation?: number;

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
   * POI/object platform type (e.g., 14/GROUND, COMBAT_VEHICLE, etc.).
   */
  plat?: string;

  /**
   * The purpose of this Point of Interest record (e.g., BDA, EQPT, EVENT, GEOL,
   * HZRD, PPLI, SHOTBOX, SURVL, TGT, TSK, WTHR).
   */
  pps?: string;

  /**
   * Priority of the POI target object.
   */
  pri?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Specific point/object type (e.g., 82/GROUND, LIGHT_TANK, etc.).
   */
  spec?: string;

  /**
   * Array of UUIDs of the UDL data records that are related to the determination of
   * this Point of Interest. See the associated 'srcTyps' array for the specific
   * types of data, positionally corresponding to the UUIDs in this array. The
   * 'srcTyps' and 'srcIds' arrays must match in size. See the corresponding srcTyps
   * array element for the data type of the UUID and use the appropriate API
   * operation to retrieve that object (e.g. /udl/rfobservation/{uuid}).
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (GROUNDIMAGE, RFOBS) that are related to the
   * determination of this Point of Interest. See the associated 'srcIds' array for
   * the record UUIDs, positionally corresponding to the record types in this array.
   * The 'srcTyps' and 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * Stale timestamp (optional), in ISO8601 UTC format.
   */
  stale?: string;

  /**
   * Start time of event validity (optional), in ISO8601 UTC format.
   */
  start?: string;

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
   * Optional ID of an associated track related to the POI object, if applicable.
   * This track ID should correlate the Point of Interest to a track from the Track
   * service.
   */
  trkid?: string;

  /**
   * Event type, in CoT object heirarchy notation (optional, CoT).
   */
  type?: string;

  /**
   * List of URLs to before/after images of this Point of Interest entity.
   */
  urls?: Array<string>;
}

export interface PoiQueryhelpResponse {
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

export type PoiTupleResponse = Array<PoiTupleResponse.PoiTupleResponseItem>;

export namespace PoiTupleResponse {
  /**
   * A Point of Interest is loosely based on the MITRE CoT (Cursor on Target) schema
   * (https://www.mitre.org/publications/technical-papers/cursorontarget-message-router-users-guide)
   * and provides a simple way to specify a point on the earth for a variety of
   * purposes (tasking, targeting, etc).
   */
  export interface PoiTupleResponseItem {
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
     * Name of the POI target object.
     */
    name: string;

    /**
     * Identifier of the actual Point of Interest or target object, which should remain
     * the same on subsequent POI records of the same Point of Interest.
     */
    poiid: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Activity/POI timestamp in ISO8601 UTC format.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The activity in which the POI subject is engaged. Intended as, but not
     * constrained to, MIL-STD-6016 environment dependent activity designations. The
     * activity can be reported as either a combination of the code and environment
     * (e.g. 30/LAND) or as the descriptive enumeration (e.g. TRAINING), which are
     * equivalent.
     */
    activity?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the image as projected on the
     * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
     * or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    agjson?: string;

    /**
     * Point height above ellipsoid (WGS-84), in meters.
     */
    alt?: number;

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
     * ID/name of the platform or entity providing the POI data.
     */
    asset?: string;

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
     * Target object pointing azimuth angle, in degrees (for target with sensing or
     * emitting capability).
     */
    az?: number;

    /**
     * The Basic Encyclopedia Number associated with the POI, if applicable.
     */
    beNumber?: string;

    /**
     * Radius of circular area about lat/lon point, in meters (1-sigma, if representing
     * error).
     */
    ce?: number;

    /**
     * Contact information for assets reporting PPLI (Precise Participant Location and
     * Identification). PPLI is a Link 16 message that is used by units to transmit
     * complete location, identification, and limited status information.
     */
    cntct?: string;

    /**
     * POI confidence estimate (not standardized, but typically a value between 0 and
     * 1, with 0 indicating lowest confidence.
     */
    conf?: number;

    /**
     * Time the row was created in the database.
     */
    createdAt?: string;

    /**
     * Application user who created the row in the database.
     */
    createdBy?: string;

    /**
     * Description of the POI target object.
     */
    desc?: string;

    /**
     * Target object pointing elevation angle, in degrees (for target with sensing or
     * emitting capability).
     */
    el?: number;

    /**
     * Elliptical area about the lat/lon point, specified as [semi-major axis (m),
     * semi-minor axis (m), orientation (deg) off true North at POI].
     */
    elle?: Array<number>;

    /**
     * POI environment type (e.g., LAND, SURFACE, SUBSURFACE, UNKNOWN, etc.).
     */
    env?: string;

    /**
     * Optional array of groups used when a POI msg originates from a TAK server. Each
     * group must be no longer than 256 characters. Groups identify a set of users
     * targeted by the cot/poi msg.
     */
    groups?: Array<string>;

    /**
     * How the event point was generated, in CoT object heirarchy notation (optional,
     * CoT).
     */
    how?: string;

    /**
     * Estimated identity of the point/object (e.g., FRIEND, HOSTILE, SUSPECT,
     * ASSUMED_FRIEND, UNKNOWN, etc.).
     */
    ident?: string;

    /**
     * Array of one or more unique identifiers of weather records associated with this
     * POI. Each element in array must be 36 characters or less in length.
     */
    idWeatherReport?: Array<string>;

    /**
     * WGS-84 latitude of the POI, in degrees (+N, -S), -90 to 90.
     */
    lat?: number;

    /**
     * Height above lat/lon point, in meters (1-sigma, if representing linear error).
     */
    le?: number;

    /**
     * WGS-84 longitude of the POI, in degrees (+E, -W), -180 to 180.
     */
    lon?: number;

    /**
     * Optional mission ID related to the POI.
     */
    msnid?: string;

    /**
     * The orientation of a vehicle, platform or other entity described by the POI. The
     * orientation is defined as the pointing direction of the front/nose of the object
     * in degrees clockwise from true North at the object point.
     */
    orientation?: number;

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
     * POI/object platform type (e.g., 14/GROUND, COMBAT_VEHICLE, etc.).
     */
    plat?: string;

    /**
     * The purpose of this Point of Interest record (e.g., BDA, EQPT, EVENT, GEOL,
     * HZRD, PPLI, SHOTBOX, SURVL, TGT, TSK, WTHR).
     */
    pps?: string;

    /**
     * Priority of the POI target object.
     */
    pri?: number;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Specific point/object type (e.g., 82/GROUND, LIGHT_TANK, etc.).
     */
    spec?: string;

    /**
     * Array of UUIDs of the UDL data records that are related to the determination of
     * this Point of Interest. See the associated 'srcTyps' array for the specific
     * types of data, positionally corresponding to the UUIDs in this array. The
     * 'srcTyps' and 'srcIds' arrays must match in size. See the corresponding srcTyps
     * array element for the data type of the UUID and use the appropriate API
     * operation to retrieve that object (e.g. /udl/rfobservation/{uuid}).
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (GROUNDIMAGE, RFOBS) that are related to the
     * determination of this Point of Interest. See the associated 'srcIds' array for
     * the record UUIDs, positionally corresponding to the record types in this array.
     * The 'srcTyps' and 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * Stale timestamp (optional), in ISO8601 UTC format.
     */
    stale?: string;

    /**
     * Start time of event validity (optional), in ISO8601 UTC format.
     */
    start?: string;

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
     * Optional ID of an associated track related to the POI object, if applicable.
     * This track ID should correlate the Point of Interest to a track from the Track
     * service.
     */
    trkid?: string;

    /**
     * Event type, in CoT object heirarchy notation (optional, CoT).
     */
    type?: string;

    /**
     * List of URLs to before/after images of this Point of Interest entity.
     */
    urls?: Array<string>;
  }
}

export interface PoiCreateParams {
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
   * Name of the POI target object.
   */
  name: string;

  /**
   * Identifier of the actual Point of Interest or target object, which should remain
   * the same on subsequent POI records of the same Point of Interest.
   */
  poiid: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Activity/POI timestamp in ISO8601 UTC format.
   */
  ts: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The activity in which the POI subject is engaged. Intended as, but not
   * constrained to, MIL-STD-6016 environment dependent activity designations. The
   * activity can be reported as either a combination of the code and environment
   * (e.g. 30/LAND) or as the descriptive enumeration (e.g. TRAINING), which are
   * equivalent.
   */
  activity?: string;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the image as projected on the
   * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
   * or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  agjson?: string;

  /**
   * Point height above ellipsoid (WGS-84), in meters.
   */
  alt?: number;

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
   * ID/name of the platform or entity providing the POI data.
   */
  asset?: string;

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
   * Target object pointing azimuth angle, in degrees (for target with sensing or
   * emitting capability).
   */
  az?: number;

  /**
   * The Basic Encyclopedia Number associated with the POI, if applicable.
   */
  beNumber?: string;

  /**
   * Radius of circular area about lat/lon point, in meters (1-sigma, if representing
   * error).
   */
  ce?: number;

  /**
   * Contact information for assets reporting PPLI (Precise Participant Location and
   * Identification). PPLI is a Link 16 message that is used by units to transmit
   * complete location, identification, and limited status information.
   */
  cntct?: string;

  /**
   * POI confidence estimate (not standardized, but typically a value between 0 and
   * 1, with 0 indicating lowest confidence.
   */
  conf?: number;

  /**
   * Description of the POI target object.
   */
  desc?: string;

  /**
   * Target object pointing elevation angle, in degrees (for target with sensing or
   * emitting capability).
   */
  el?: number;

  /**
   * Elliptical area about the lat/lon point, specified as [semi-major axis (m),
   * semi-minor axis (m), orientation (deg) off true North at POI].
   */
  elle?: Array<number>;

  /**
   * POI environment type (e.g., LAND, SURFACE, SUBSURFACE, UNKNOWN, etc.).
   */
  env?: string;

  /**
   * Optional array of groups used when a POI msg originates from a TAK server. Each
   * group must be no longer than 256 characters. Groups identify a set of users
   * targeted by the cot/poi msg.
   */
  groups?: Array<string>;

  /**
   * How the event point was generated, in CoT object heirarchy notation (optional,
   * CoT).
   */
  how?: string;

  /**
   * Estimated identity of the point/object (e.g., FRIEND, HOSTILE, SUSPECT,
   * ASSUMED_FRIEND, UNKNOWN, etc.).
   */
  ident?: string;

  /**
   * Array of one or more unique identifiers of weather records associated with this
   * POI. Each element in array must be 36 characters or less in length.
   */
  idWeatherReport?: Array<string>;

  /**
   * WGS-84 latitude of the POI, in degrees (+N, -S), -90 to 90.
   */
  lat?: number;

  /**
   * Height above lat/lon point, in meters (1-sigma, if representing linear error).
   */
  le?: number;

  /**
   * WGS-84 longitude of the POI, in degrees (+E, -W), -180 to 180.
   */
  lon?: number;

  /**
   * Optional mission ID related to the POI.
   */
  msnid?: string;

  /**
   * The orientation of a vehicle, platform or other entity described by the POI. The
   * orientation is defined as the pointing direction of the front/nose of the object
   * in degrees clockwise from true North at the object point.
   */
  orientation?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * POI/object platform type (e.g., 14/GROUND, COMBAT_VEHICLE, etc.).
   */
  plat?: string;

  /**
   * The purpose of this Point of Interest record (e.g., BDA, EQPT, EVENT, GEOL,
   * HZRD, PPLI, SHOTBOX, SURVL, TGT, TSK, WTHR).
   */
  pps?: string;

  /**
   * Priority of the POI target object.
   */
  pri?: number;

  /**
   * Specific point/object type (e.g., 82/GROUND, LIGHT_TANK, etc.).
   */
  spec?: string;

  /**
   * Array of UUIDs of the UDL data records that are related to the determination of
   * this Point of Interest. See the associated 'srcTyps' array for the specific
   * types of data, positionally corresponding to the UUIDs in this array. The
   * 'srcTyps' and 'srcIds' arrays must match in size. See the corresponding srcTyps
   * array element for the data type of the UUID and use the appropriate API
   * operation to retrieve that object (e.g. /udl/rfobservation/{uuid}).
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (GROUNDIMAGE, RFOBS) that are related to the
   * determination of this Point of Interest. See the associated 'srcIds' array for
   * the record UUIDs, positionally corresponding to the record types in this array.
   * The 'srcTyps' and 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * Stale timestamp (optional), in ISO8601 UTC format.
   */
  stale?: string;

  /**
   * Start time of event validity (optional), in ISO8601 UTC format.
   */
  start?: string;

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
   * Optional ID of an associated track related to the POI object, if applicable.
   * This track ID should correlate the Point of Interest to a track from the Track
   * service.
   */
  trkid?: string;

  /**
   * Event type, in CoT object heirarchy notation (optional, CoT).
   */
  type?: string;

  /**
   * List of URLs to before/after images of this Point of Interest entity.
   */
  urls?: Array<string>;
}

export interface PoiListParams extends OffsetPageParams {
  /**
   * Activity/POI timestamp in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;
}

export interface PoiCountParams {
  /**
   * Activity/POI timestamp in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface PoiCreateBulkParams {
  body: Array<PoiCreateBulkParams.Body>;
}

export namespace PoiCreateBulkParams {
  /**
   * A Point of Interest is loosely based on the MITRE CoT (Cursor on Target) schema
   * (https://www.mitre.org/publications/technical-papers/cursorontarget-message-router-users-guide)
   * and provides a simple way to specify a point on the earth for a variety of
   * purposes (tasking, targeting, etc).
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
     * Name of the POI target object.
     */
    name: string;

    /**
     * Identifier of the actual Point of Interest or target object, which should remain
     * the same on subsequent POI records of the same Point of Interest.
     */
    poiid: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Activity/POI timestamp in ISO8601 UTC format.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The activity in which the POI subject is engaged. Intended as, but not
     * constrained to, MIL-STD-6016 environment dependent activity designations. The
     * activity can be reported as either a combination of the code and environment
     * (e.g. 30/LAND) or as the descriptive enumeration (e.g. TRAINING), which are
     * equivalent.
     */
    activity?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the image as projected on the
     * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
     * or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    agjson?: string;

    /**
     * Point height above ellipsoid (WGS-84), in meters.
     */
    alt?: number;

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
     * ID/name of the platform or entity providing the POI data.
     */
    asset?: string;

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
     * Target object pointing azimuth angle, in degrees (for target with sensing or
     * emitting capability).
     */
    az?: number;

    /**
     * The Basic Encyclopedia Number associated with the POI, if applicable.
     */
    beNumber?: string;

    /**
     * Radius of circular area about lat/lon point, in meters (1-sigma, if representing
     * error).
     */
    ce?: number;

    /**
     * Contact information for assets reporting PPLI (Precise Participant Location and
     * Identification). PPLI is a Link 16 message that is used by units to transmit
     * complete location, identification, and limited status information.
     */
    cntct?: string;

    /**
     * POI confidence estimate (not standardized, but typically a value between 0 and
     * 1, with 0 indicating lowest confidence.
     */
    conf?: number;

    /**
     * Description of the POI target object.
     */
    desc?: string;

    /**
     * Target object pointing elevation angle, in degrees (for target with sensing or
     * emitting capability).
     */
    el?: number;

    /**
     * Elliptical area about the lat/lon point, specified as [semi-major axis (m),
     * semi-minor axis (m), orientation (deg) off true North at POI].
     */
    elle?: Array<number>;

    /**
     * POI environment type (e.g., LAND, SURFACE, SUBSURFACE, UNKNOWN, etc.).
     */
    env?: string;

    /**
     * Optional array of groups used when a POI msg originates from a TAK server. Each
     * group must be no longer than 256 characters. Groups identify a set of users
     * targeted by the cot/poi msg.
     */
    groups?: Array<string>;

    /**
     * How the event point was generated, in CoT object heirarchy notation (optional,
     * CoT).
     */
    how?: string;

    /**
     * Estimated identity of the point/object (e.g., FRIEND, HOSTILE, SUSPECT,
     * ASSUMED_FRIEND, UNKNOWN, etc.).
     */
    ident?: string;

    /**
     * Array of one or more unique identifiers of weather records associated with this
     * POI. Each element in array must be 36 characters or less in length.
     */
    idWeatherReport?: Array<string>;

    /**
     * WGS-84 latitude of the POI, in degrees (+N, -S), -90 to 90.
     */
    lat?: number;

    /**
     * Height above lat/lon point, in meters (1-sigma, if representing linear error).
     */
    le?: number;

    /**
     * WGS-84 longitude of the POI, in degrees (+E, -W), -180 to 180.
     */
    lon?: number;

    /**
     * Optional mission ID related to the POI.
     */
    msnid?: string;

    /**
     * The orientation of a vehicle, platform or other entity described by the POI. The
     * orientation is defined as the pointing direction of the front/nose of the object
     * in degrees clockwise from true North at the object point.
     */
    orientation?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * POI/object platform type (e.g., 14/GROUND, COMBAT_VEHICLE, etc.).
     */
    plat?: string;

    /**
     * The purpose of this Point of Interest record (e.g., BDA, EQPT, EVENT, GEOL,
     * HZRD, PPLI, SHOTBOX, SURVL, TGT, TSK, WTHR).
     */
    pps?: string;

    /**
     * Priority of the POI target object.
     */
    pri?: number;

    /**
     * Specific point/object type (e.g., 82/GROUND, LIGHT_TANK, etc.).
     */
    spec?: string;

    /**
     * Array of UUIDs of the UDL data records that are related to the determination of
     * this Point of Interest. See the associated 'srcTyps' array for the specific
     * types of data, positionally corresponding to the UUIDs in this array. The
     * 'srcTyps' and 'srcIds' arrays must match in size. See the corresponding srcTyps
     * array element for the data type of the UUID and use the appropriate API
     * operation to retrieve that object (e.g. /udl/rfobservation/{uuid}).
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (GROUNDIMAGE, RFOBS) that are related to the
     * determination of this Point of Interest. See the associated 'srcIds' array for
     * the record UUIDs, positionally corresponding to the record types in this array.
     * The 'srcTyps' and 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * Stale timestamp (optional), in ISO8601 UTC format.
     */
    stale?: string;

    /**
     * Start time of event validity (optional), in ISO8601 UTC format.
     */
    start?: string;

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
     * Optional ID of an associated track related to the POI object, if applicable.
     * This track ID should correlate the Point of Interest to a track from the Track
     * service.
     */
    trkid?: string;

    /**
     * Event type, in CoT object heirarchy notation (optional, CoT).
     */
    type?: string;

    /**
     * List of URLs to before/after images of this Point of Interest entity.
     */
    urls?: Array<string>;
  }
}

export interface PoiGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface PoiTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Activity/POI timestamp in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface PoiUnvalidatedPublishParams {
  body: Array<PoiUnvalidatedPublishParams.Body>;
}

export namespace PoiUnvalidatedPublishParams {
  /**
   * A Point of Interest is loosely based on the MITRE CoT (Cursor on Target) schema
   * (https://www.mitre.org/publications/technical-papers/cursorontarget-message-router-users-guide)
   * and provides a simple way to specify a point on the earth for a variety of
   * purposes (tasking, targeting, etc).
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
     * Name of the POI target object.
     */
    name: string;

    /**
     * Identifier of the actual Point of Interest or target object, which should remain
     * the same on subsequent POI records of the same Point of Interest.
     */
    poiid: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Activity/POI timestamp in ISO8601 UTC format.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The activity in which the POI subject is engaged. Intended as, but not
     * constrained to, MIL-STD-6016 environment dependent activity designations. The
     * activity can be reported as either a combination of the code and environment
     * (e.g. 30/LAND) or as the descriptive enumeration (e.g. TRAINING), which are
     * equivalent.
     */
    activity?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the image as projected on the
     * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
     * or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    agjson?: string;

    /**
     * Point height above ellipsoid (WGS-84), in meters.
     */
    alt?: number;

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
     * ID/name of the platform or entity providing the POI data.
     */
    asset?: string;

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
     * Target object pointing azimuth angle, in degrees (for target with sensing or
     * emitting capability).
     */
    az?: number;

    /**
     * The Basic Encyclopedia Number associated with the POI, if applicable.
     */
    beNumber?: string;

    /**
     * Radius of circular area about lat/lon point, in meters (1-sigma, if representing
     * error).
     */
    ce?: number;

    /**
     * Contact information for assets reporting PPLI (Precise Participant Location and
     * Identification). PPLI is a Link 16 message that is used by units to transmit
     * complete location, identification, and limited status information.
     */
    cntct?: string;

    /**
     * POI confidence estimate (not standardized, but typically a value between 0 and
     * 1, with 0 indicating lowest confidence.
     */
    conf?: number;

    /**
     * Description of the POI target object.
     */
    desc?: string;

    /**
     * Target object pointing elevation angle, in degrees (for target with sensing or
     * emitting capability).
     */
    el?: number;

    /**
     * Elliptical area about the lat/lon point, specified as [semi-major axis (m),
     * semi-minor axis (m), orientation (deg) off true North at POI].
     */
    elle?: Array<number>;

    /**
     * POI environment type (e.g., LAND, SURFACE, SUBSURFACE, UNKNOWN, etc.).
     */
    env?: string;

    /**
     * Optional array of groups used when a POI msg originates from a TAK server. Each
     * group must be no longer than 256 characters. Groups identify a set of users
     * targeted by the cot/poi msg.
     */
    groups?: Array<string>;

    /**
     * How the event point was generated, in CoT object heirarchy notation (optional,
     * CoT).
     */
    how?: string;

    /**
     * Estimated identity of the point/object (e.g., FRIEND, HOSTILE, SUSPECT,
     * ASSUMED_FRIEND, UNKNOWN, etc.).
     */
    ident?: string;

    /**
     * Array of one or more unique identifiers of weather records associated with this
     * POI. Each element in array must be 36 characters or less in length.
     */
    idWeatherReport?: Array<string>;

    /**
     * WGS-84 latitude of the POI, in degrees (+N, -S), -90 to 90.
     */
    lat?: number;

    /**
     * Height above lat/lon point, in meters (1-sigma, if representing linear error).
     */
    le?: number;

    /**
     * WGS-84 longitude of the POI, in degrees (+E, -W), -180 to 180.
     */
    lon?: number;

    /**
     * Optional mission ID related to the POI.
     */
    msnid?: string;

    /**
     * The orientation of a vehicle, platform or other entity described by the POI. The
     * orientation is defined as the pointing direction of the front/nose of the object
     * in degrees clockwise from true North at the object point.
     */
    orientation?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * POI/object platform type (e.g., 14/GROUND, COMBAT_VEHICLE, etc.).
     */
    plat?: string;

    /**
     * The purpose of this Point of Interest record (e.g., BDA, EQPT, EVENT, GEOL,
     * HZRD, PPLI, SHOTBOX, SURVL, TGT, TSK, WTHR).
     */
    pps?: string;

    /**
     * Priority of the POI target object.
     */
    pri?: number;

    /**
     * Specific point/object type (e.g., 82/GROUND, LIGHT_TANK, etc.).
     */
    spec?: string;

    /**
     * Array of UUIDs of the UDL data records that are related to the determination of
     * this Point of Interest. See the associated 'srcTyps' array for the specific
     * types of data, positionally corresponding to the UUIDs in this array. The
     * 'srcTyps' and 'srcIds' arrays must match in size. See the corresponding srcTyps
     * array element for the data type of the UUID and use the appropriate API
     * operation to retrieve that object (e.g. /udl/rfobservation/{uuid}).
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (GROUNDIMAGE, RFOBS) that are related to the
     * determination of this Point of Interest. See the associated 'srcIds' array for
     * the record UUIDs, positionally corresponding to the record types in this array.
     * The 'srcTyps' and 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * Stale timestamp (optional), in ISO8601 UTC format.
     */
    stale?: string;

    /**
     * Start time of event validity (optional), in ISO8601 UTC format.
     */
    start?: string;

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
     * Optional ID of an associated track related to the POI object, if applicable.
     * This track ID should correlate the Point of Interest to a track from the Track
     * service.
     */
    trkid?: string;

    /**
     * Event type, in CoT object heirarchy notation (optional, CoT).
     */
    type?: string;

    /**
     * List of URLs to before/after images of this Point of Interest entity.
     */
    urls?: Array<string>;
  }
}

export declare namespace Poi {
  export {
    type PoiListResponse as PoiListResponse,
    type PoiCountResponse as PoiCountResponse,
    type PoiGetResponse as PoiGetResponse,
    type PoiQueryhelpResponse as PoiQueryhelpResponse,
    type PoiTupleResponse as PoiTupleResponse,
    type PoiListResponsesOffsetPage as PoiListResponsesOffsetPage,
    type PoiCreateParams as PoiCreateParams,
    type PoiListParams as PoiListParams,
    type PoiCountParams as PoiCountParams,
    type PoiCreateBulkParams as PoiCreateBulkParams,
    type PoiGetParams as PoiGetParams,
    type PoiTupleParams as PoiTupleParams,
    type PoiUnvalidatedPublishParams as PoiUnvalidatedPublishParams,
  };
}
