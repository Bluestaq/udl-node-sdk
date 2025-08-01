// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  TrackRouteFull,
  TrackRouteFullsOffsetPage,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TrackRoute extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single trackroute record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.trackRoute.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   lastUpdateDate: '2024-09-17T16:00:00.123Z',
   *   source: 'Bluestaq',
   *   type: 'AIR REFUELING',
   * });
   * ```
   */
  create(body: TrackRouteCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/trackroute', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single trackroute record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.trackRoute.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   lastUpdateDate: '2024-09-17T16:00:00.123Z',
   *   source: 'Bluestaq',
   *   type: 'AIR REFUELING',
   * });
   * ```
   */
  update(pathID: string, body: TrackRouteUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/trackroute/${pathID}`, {
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
   * for await (const trackRouteListResponse of client.trackRoute.list(
   *   { lastUpdateDate: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TrackRouteListParams,
    options?: RequestOptions,
  ): PagePromise<TrackRouteListResponsesOffsetPage, TrackRouteListResponse> {
    return this._client.getAPIList('/udl/trackroute', OffsetPage<TrackRouteListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a trackroute record specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.trackRoute.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/trackroute/${id}`, {
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
   * const response = await client.trackRoute.count({
   *   lastUpdateDate: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: TrackRouteCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/trackroute/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * trackroute records as a POST body and ingest into the database. This operation
   * is not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.trackRoute.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       lastUpdateDate: '2024-09-17T16:00:00.123Z',
   *       source: 'Bluestaq',
   *       type: 'AIR REFUELING',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: TrackRouteCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/trackroute/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single trackroute record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const trackRouteFull = await client.trackRoute.get('id');
   * ```
   */
  get(
    id: string,
    query: TrackRouteGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryAPI.TrackRouteFull> {
    return this._client.get(path`/udl/trackroute/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.trackRoute.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<TrackRouteQueryhelpResponse> {
    return this._client.get('/udl/trackroute/queryhelp', options);
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
   * const trackRouteFulls = await client.trackRoute.tuple({
   *   columns: 'columns',
   *   lastUpdateDate: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: TrackRouteTupleParams, options?: RequestOptions): APIPromise<TrackRouteTupleResponse> {
    return this._client.get('/udl/trackroute/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple trackroute records as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.trackRoute.unvalidatedPublish({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   lastUpdateDate: '2024-09-17T16:00:00.123Z',
   *   source: 'Bluestaq',
   *   type: 'AIR REFUELING',
   * });
   * ```
   */
  unvalidatedPublish(body: TrackRouteUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/filedrop/udl-trackroute', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type TrackRouteListResponsesOffsetPage = OffsetPage<TrackRouteListResponse>;

/**
 * A track route is a prescribed route for performing training events or operations
 * such as air refueling.
 */
export interface TrackRouteListResponse {
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
   * The last updated date of the track route in ISO 8601 UTC format with millisecond
   * precision.
   */
  lastUpdateDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The track route type represented by this record (ex. AIR REFUELING).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Minimum and maximum altitude bounds for the track.
   */
  altitudeBlocks?: Array<TrackRouteListResponse.AltitudeBlock>;

  /**
   * The APN radar code sent and received by the aircraft for identification.
   */
  apnSetting?: string;

  /**
   * The APX radar code sent and received by the aircraft for identification.
   */
  apxBeaconCode?: string;

  /**
   * Air Refueling Track Control Center message.
   */
  artccMessage?: string;

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
   * The name of the creating organization of the track route.
   */
  creatingOrg?: string;

  /**
   * The principal compass direction (cardinal or ordinal) of the track route.
   */
  direction?: string;

  /**
   * The date which the DAFIF track was last updated/validated in ISO 8601 UTC format
   * with millisecond precision.
   */
  effectiveDate?: string;

  /**
   * Optional air refueling track ID from external systems. This field has no meaning
   * within UDL and is provided as a convenience for systems that require tracking of
   * an internal system generated ID.
   */
  externalId?: string;

  /**
   * Used to show last time the track route was added to an itinerary in ISO 8601 UTC
   * format with millisecond precision.
   */
  lastUsedDate?: string;

  /**
   * Track location ID.
   */
  locationTrackId?: string;

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
   * Point of contacts for scheduling or modifying the route.
   */
  poc?: Array<TrackRouteListResponse.Poc>;

  /**
   * The primary UHF radio frequency used for the track route in megahertz.
   */
  priFreq?: number;

  /**
   * The receiver tanker channel identifer for air refueling tracks.
   */
  receiverTankerCHCode?: string;

  /**
   * Region code indicating where the track resides as determined by the data source.
   */
  regionCode?: string;

  /**
   * Region where the track resides.
   */
  regionName?: string;

  /**
   * Date the track needs to be reviewed for accuracy or deletion in ISO 8601 UTC
   * format with millisecond precision.
   */
  reviewDate?: string;

  /**
   * Points identified within the route.
   */
  routePoints?: Array<TrackRouteListResponse.RoutePoint>;

  /**
   * Point of contact for the air refueling track route scheduler.
   */
  schedulerOrgName?: string;

  /**
   * The unit responsible for scheduling the track route.
   */
  schedulerOrgUnit?: string;

  /**
   * The secondary UHF radio frequency used for the track route in megahertz.
   */
  secFreq?: number;

  /**
   * Abbreviated name of the track.
   */
  shortName?: string;

  /**
   * Standard Indicator Code of the air refueling track.
   */
  sic?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Identifier of the track.
   */
  trackId?: string;

  /**
   * Name of the track.
   */
  trackName?: string;

  /**
   * Type of process used by AMC to schedule an air refueling event. Possible values
   * are A (Matched Long Range), F (Matched AMC Short Notice), N (Unmatched Theater
   * Operation Short Notice (Theater Assets)), R, Unmatched Long Range, S (Soft Air
   * Refueling), T (Matched Theater Operation Short Notice (Theater Assets)), V
   * (Unmatched AMC Short Notice), X (Unmatched Theater Operation Short Notice (AMC
   * Assets)), Y (Matched Theater Operation Short Notice (AMC Assets)), Z (Other Air
   * Refueling).
   */
  typeCode?: string;

  /**
   * Time the row was updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

export namespace TrackRouteListResponse {
  /**
   * Minimum and maximum altitude bounds for the track.
   */
  export interface AltitudeBlock {
    /**
     * Sequencing field for the altitude block.
     */
    altitudeSequenceId?: string;

    /**
     * Lowest altitude of the track route altitude block above mean sea level in feet.
     */
    lowerAltitude?: number;

    /**
     * Highest altitude of the track route altitude block above mean sea level in feet.
     */
    upperAltitude?: number;
  }

  /**
   * Point of contacts for scheduling or modifying the route.
   */
  export interface Poc {
    /**
     * Office name for which the contact belongs.
     */
    office?: string;

    /**
     * Phone number of the contact.
     */
    phone?: string;

    /**
     * The name of the contact.
     */
    pocName?: string;

    /**
     * Organization name for which the contact belongs.
     */
    pocOrg?: string;

    /**
     * Sequencing field for point of contact.
     */
    pocSequenceId?: number;

    /**
     * A code or name that represents the contact's role in association to the track
     * route (ex. Originator, Scheduler, Maintainer, etc.).
     */
    pocTypeName?: string;

    /**
     * The rank of contact.
     */
    rank?: string;

    /**
     * Text of the remark.
     */
    remark?: string;

    /**
     * The username of the contact.
     */
    username?: string;
  }

  /**
   * Points identified within the route.
   */
  export interface RoutePoint {
    /**
     * Specifies an alternate country code if the data provider code is not part of an
     * official NAVAID Country Code standard such as ISO-3166 or FIPS. This field will
     * be set to the value provided by the source and should be used for all Queries
     * specifying a Country Code.
     */
    altCountryCode?: string;

    /**
     * The DoD Standard Country Code designator for the country where the route point
     * resides. This field should be set to "OTHR" if the source value does not match a
     * UDL country code value (ISO-3166-ALPHA-2).
     */
    countryCode?: string;

    /**
     * Flag indicating this is a Digital Aeronautical Flight Information File (DAFIF)
     * point.
     */
    dafifPt?: boolean;

    /**
     * The magnetic declination/variation of the route point location from true north,
     * in degrees. Positive values east of true north and negative values west of true
     * north.
     */
    magDec?: number;

    /**
     * Navigational Aid (NAVAID) identification code.
     */
    navaid?: string;

    /**
     * The length of the course from the Navigational Aid (NAVAID) in nautical miles.
     */
    navaidLength?: number;

    /**
     * The NAVAID type of this route point (ex. VOR, VORTAC, TACAN, etc.).
     */
    navaidType?: string;

    /**
     * WGS84 latitude of the point location, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    ptLat?: number;

    /**
     * WGS84 longitude of the point location, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    ptLon?: number;

    /**
     * Sequencing field for the track route. This is the identifier representing the
     * sequence of waypoints associated to the track route.
     */
    ptSequenceId?: number;

    /**
     * Code representation of the point within the track route (ex. EP, EX, CP, IP,
     * etc.).
     */
    ptTypeCode?: string;

    /**
     * The name that represents the point within the track route (ex. ENTRY POINT, EXIT
     * POINT, CONTROL POINT, INITIAL POINT, etc.).
     */
    ptTypeName?: string;

    /**
     * Name of a waypoint which identifies the location of the point.
     */
    waypointName?: string;
  }
}

export type TrackRouteCountResponse = string;

export interface TrackRouteQueryhelpResponse {
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

export type TrackRouteTupleResponse = Array<HistoryAPI.TrackRouteFull>;

export interface TrackRouteCreateParams {
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
   * The last updated date of the track route in ISO 8601 UTC format with millisecond
   * precision.
   */
  lastUpdateDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The track route type represented by this record (ex. AIR REFUELING).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Minimum and maximum altitude bounds for the track.
   */
  altitudeBlocks?: Array<TrackRouteCreateParams.AltitudeBlock>;

  /**
   * The APN radar code sent and received by the aircraft for identification.
   */
  apnSetting?: string;

  /**
   * The APX radar code sent and received by the aircraft for identification.
   */
  apxBeaconCode?: string;

  /**
   * Air Refueling Track Control Center message.
   */
  artccMessage?: string;

  /**
   * The name of the creating organization of the track route.
   */
  creatingOrg?: string;

  /**
   * The principal compass direction (cardinal or ordinal) of the track route.
   */
  direction?: string;

  /**
   * The date which the DAFIF track was last updated/validated in ISO 8601 UTC format
   * with millisecond precision.
   */
  effectiveDate?: string;

  /**
   * Optional air refueling track ID from external systems. This field has no meaning
   * within UDL and is provided as a convenience for systems that require tracking of
   * an internal system generated ID.
   */
  externalId?: string;

  /**
   * Used to show last time the track route was added to an itinerary in ISO 8601 UTC
   * format with millisecond precision.
   */
  lastUsedDate?: string;

  /**
   * Track location ID.
   */
  locationTrackId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Point of contacts for scheduling or modifying the route.
   */
  poc?: Array<TrackRouteCreateParams.Poc>;

  /**
   * The primary UHF radio frequency used for the track route in megahertz.
   */
  priFreq?: number;

  /**
   * The receiver tanker channel identifer for air refueling tracks.
   */
  receiverTankerCHCode?: string;

  /**
   * Region code indicating where the track resides as determined by the data source.
   */
  regionCode?: string;

  /**
   * Region where the track resides.
   */
  regionName?: string;

  /**
   * Date the track needs to be reviewed for accuracy or deletion in ISO 8601 UTC
   * format with millisecond precision.
   */
  reviewDate?: string;

  /**
   * Points identified within the route.
   */
  routePoints?: Array<TrackRouteCreateParams.RoutePoint>;

  /**
   * Point of contact for the air refueling track route scheduler.
   */
  schedulerOrgName?: string;

  /**
   * The unit responsible for scheduling the track route.
   */
  schedulerOrgUnit?: string;

  /**
   * The secondary UHF radio frequency used for the track route in megahertz.
   */
  secFreq?: number;

  /**
   * Abbreviated name of the track.
   */
  shortName?: string;

  /**
   * Standard Indicator Code of the air refueling track.
   */
  sic?: string;

  /**
   * Identifier of the track.
   */
  trackId?: string;

  /**
   * Name of the track.
   */
  trackName?: string;

  /**
   * Type of process used by AMC to schedule an air refueling event. Possible values
   * are A (Matched Long Range), F (Matched AMC Short Notice), N (Unmatched Theater
   * Operation Short Notice (Theater Assets)), R, Unmatched Long Range, S (Soft Air
   * Refueling), T (Matched Theater Operation Short Notice (Theater Assets)), V
   * (Unmatched AMC Short Notice), X (Unmatched Theater Operation Short Notice (AMC
   * Assets)), Y (Matched Theater Operation Short Notice (AMC Assets)), Z (Other Air
   * Refueling).
   */
  typeCode?: string;
}

export namespace TrackRouteCreateParams {
  /**
   * Minimum and maximum altitude bounds for the track.
   */
  export interface AltitudeBlock {
    /**
     * Sequencing field for the altitude block.
     */
    altitudeSequenceId?: string;

    /**
     * Lowest altitude of the track route altitude block above mean sea level in feet.
     */
    lowerAltitude?: number;

    /**
     * Highest altitude of the track route altitude block above mean sea level in feet.
     */
    upperAltitude?: number;
  }

  /**
   * Point of contacts for scheduling or modifying the route.
   */
  export interface Poc {
    /**
     * Office name for which the contact belongs.
     */
    office?: string;

    /**
     * Phone number of the contact.
     */
    phone?: string;

    /**
     * The name of the contact.
     */
    pocName?: string;

    /**
     * Organization name for which the contact belongs.
     */
    pocOrg?: string;

    /**
     * Sequencing field for point of contact.
     */
    pocSequenceId?: number;

    /**
     * A code or name that represents the contact's role in association to the track
     * route (ex. Originator, Scheduler, Maintainer, etc.).
     */
    pocTypeName?: string;

    /**
     * The rank of contact.
     */
    rank?: string;

    /**
     * Text of the remark.
     */
    remark?: string;

    /**
     * The username of the contact.
     */
    username?: string;
  }

  /**
   * Points identified within the route.
   */
  export interface RoutePoint {
    /**
     * Specifies an alternate country code if the data provider code is not part of an
     * official NAVAID Country Code standard such as ISO-3166 or FIPS. This field will
     * be set to the value provided by the source and should be used for all Queries
     * specifying a Country Code.
     */
    altCountryCode?: string;

    /**
     * The DoD Standard Country Code designator for the country where the route point
     * resides. This field should be set to "OTHR" if the source value does not match a
     * UDL country code value (ISO-3166-ALPHA-2).
     */
    countryCode?: string;

    /**
     * Flag indicating this is a Digital Aeronautical Flight Information File (DAFIF)
     * point.
     */
    dafifPt?: boolean;

    /**
     * The magnetic declination/variation of the route point location from true north,
     * in degrees. Positive values east of true north and negative values west of true
     * north.
     */
    magDec?: number;

    /**
     * Navigational Aid (NAVAID) identification code.
     */
    navaid?: string;

    /**
     * The length of the course from the Navigational Aid (NAVAID) in nautical miles.
     */
    navaidLength?: number;

    /**
     * The NAVAID type of this route point (ex. VOR, VORTAC, TACAN, etc.).
     */
    navaidType?: string;

    /**
     * WGS84 latitude of the point location, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    ptLat?: number;

    /**
     * WGS84 longitude of the point location, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    ptLon?: number;

    /**
     * Sequencing field for the track route. This is the identifier representing the
     * sequence of waypoints associated to the track route.
     */
    ptSequenceId?: number;

    /**
     * Code representation of the point within the track route (ex. EP, EX, CP, IP,
     * etc.).
     */
    ptTypeCode?: string;

    /**
     * The name that represents the point within the track route (ex. ENTRY POINT, EXIT
     * POINT, CONTROL POINT, INITIAL POINT, etc.).
     */
    ptTypeName?: string;

    /**
     * Name of a waypoint which identifies the location of the point.
     */
    waypointName?: string;
  }
}

export interface TrackRouteUpdateParams {
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
   * The last updated date of the track route in ISO 8601 UTC format with millisecond
   * precision.
   */
  lastUpdateDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The track route type represented by this record (ex. AIR REFUELING).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Minimum and maximum altitude bounds for the track.
   */
  altitudeBlocks?: Array<TrackRouteUpdateParams.AltitudeBlock>;

  /**
   * The APN radar code sent and received by the aircraft for identification.
   */
  apnSetting?: string;

  /**
   * The APX radar code sent and received by the aircraft for identification.
   */
  apxBeaconCode?: string;

  /**
   * Air Refueling Track Control Center message.
   */
  artccMessage?: string;

  /**
   * The name of the creating organization of the track route.
   */
  creatingOrg?: string;

  /**
   * The principal compass direction (cardinal or ordinal) of the track route.
   */
  direction?: string;

  /**
   * The date which the DAFIF track was last updated/validated in ISO 8601 UTC format
   * with millisecond precision.
   */
  effectiveDate?: string;

  /**
   * Optional air refueling track ID from external systems. This field has no meaning
   * within UDL and is provided as a convenience for systems that require tracking of
   * an internal system generated ID.
   */
  externalId?: string;

  /**
   * Used to show last time the track route was added to an itinerary in ISO 8601 UTC
   * format with millisecond precision.
   */
  lastUsedDate?: string;

  /**
   * Track location ID.
   */
  locationTrackId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Point of contacts for scheduling or modifying the route.
   */
  poc?: Array<TrackRouteUpdateParams.Poc>;

  /**
   * The primary UHF radio frequency used for the track route in megahertz.
   */
  priFreq?: number;

  /**
   * The receiver tanker channel identifer for air refueling tracks.
   */
  receiverTankerCHCode?: string;

  /**
   * Region code indicating where the track resides as determined by the data source.
   */
  regionCode?: string;

  /**
   * Region where the track resides.
   */
  regionName?: string;

  /**
   * Date the track needs to be reviewed for accuracy or deletion in ISO 8601 UTC
   * format with millisecond precision.
   */
  reviewDate?: string;

  /**
   * Points identified within the route.
   */
  routePoints?: Array<TrackRouteUpdateParams.RoutePoint>;

  /**
   * Point of contact for the air refueling track route scheduler.
   */
  schedulerOrgName?: string;

  /**
   * The unit responsible for scheduling the track route.
   */
  schedulerOrgUnit?: string;

  /**
   * The secondary UHF radio frequency used for the track route in megahertz.
   */
  secFreq?: number;

  /**
   * Abbreviated name of the track.
   */
  shortName?: string;

  /**
   * Standard Indicator Code of the air refueling track.
   */
  sic?: string;

  /**
   * Identifier of the track.
   */
  trackId?: string;

  /**
   * Name of the track.
   */
  trackName?: string;

  /**
   * Type of process used by AMC to schedule an air refueling event. Possible values
   * are A (Matched Long Range), F (Matched AMC Short Notice), N (Unmatched Theater
   * Operation Short Notice (Theater Assets)), R, Unmatched Long Range, S (Soft Air
   * Refueling), T (Matched Theater Operation Short Notice (Theater Assets)), V
   * (Unmatched AMC Short Notice), X (Unmatched Theater Operation Short Notice (AMC
   * Assets)), Y (Matched Theater Operation Short Notice (AMC Assets)), Z (Other Air
   * Refueling).
   */
  typeCode?: string;
}

export namespace TrackRouteUpdateParams {
  /**
   * Minimum and maximum altitude bounds for the track.
   */
  export interface AltitudeBlock {
    /**
     * Sequencing field for the altitude block.
     */
    altitudeSequenceId?: string;

    /**
     * Lowest altitude of the track route altitude block above mean sea level in feet.
     */
    lowerAltitude?: number;

    /**
     * Highest altitude of the track route altitude block above mean sea level in feet.
     */
    upperAltitude?: number;
  }

  /**
   * Point of contacts for scheduling or modifying the route.
   */
  export interface Poc {
    /**
     * Office name for which the contact belongs.
     */
    office?: string;

    /**
     * Phone number of the contact.
     */
    phone?: string;

    /**
     * The name of the contact.
     */
    pocName?: string;

    /**
     * Organization name for which the contact belongs.
     */
    pocOrg?: string;

    /**
     * Sequencing field for point of contact.
     */
    pocSequenceId?: number;

    /**
     * A code or name that represents the contact's role in association to the track
     * route (ex. Originator, Scheduler, Maintainer, etc.).
     */
    pocTypeName?: string;

    /**
     * The rank of contact.
     */
    rank?: string;

    /**
     * Text of the remark.
     */
    remark?: string;

    /**
     * The username of the contact.
     */
    username?: string;
  }

  /**
   * Points identified within the route.
   */
  export interface RoutePoint {
    /**
     * Specifies an alternate country code if the data provider code is not part of an
     * official NAVAID Country Code standard such as ISO-3166 or FIPS. This field will
     * be set to the value provided by the source and should be used for all Queries
     * specifying a Country Code.
     */
    altCountryCode?: string;

    /**
     * The DoD Standard Country Code designator for the country where the route point
     * resides. This field should be set to "OTHR" if the source value does not match a
     * UDL country code value (ISO-3166-ALPHA-2).
     */
    countryCode?: string;

    /**
     * Flag indicating this is a Digital Aeronautical Flight Information File (DAFIF)
     * point.
     */
    dafifPt?: boolean;

    /**
     * The magnetic declination/variation of the route point location from true north,
     * in degrees. Positive values east of true north and negative values west of true
     * north.
     */
    magDec?: number;

    /**
     * Navigational Aid (NAVAID) identification code.
     */
    navaid?: string;

    /**
     * The length of the course from the Navigational Aid (NAVAID) in nautical miles.
     */
    navaidLength?: number;

    /**
     * The NAVAID type of this route point (ex. VOR, VORTAC, TACAN, etc.).
     */
    navaidType?: string;

    /**
     * WGS84 latitude of the point location, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    ptLat?: number;

    /**
     * WGS84 longitude of the point location, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    ptLon?: number;

    /**
     * Sequencing field for the track route. This is the identifier representing the
     * sequence of waypoints associated to the track route.
     */
    ptSequenceId?: number;

    /**
     * Code representation of the point within the track route (ex. EP, EX, CP, IP,
     * etc.).
     */
    ptTypeCode?: string;

    /**
     * The name that represents the point within the track route (ex. ENTRY POINT, EXIT
     * POINT, CONTROL POINT, INITIAL POINT, etc.).
     */
    ptTypeName?: string;

    /**
     * Name of a waypoint which identifies the location of the point.
     */
    waypointName?: string;
  }
}

export interface TrackRouteListParams extends OffsetPageParams {
  /**
   * The last updated date of the track route in ISO 8601 UTC format with millisecond
   * precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  lastUpdateDate: string;
}

export interface TrackRouteCountParams {
  /**
   * The last updated date of the track route in ISO 8601 UTC format with millisecond
   * precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  lastUpdateDate: string;

  firstResult?: number;

  maxResults?: number;
}

export interface TrackRouteCreateBulkParams {
  body: Array<TrackRouteCreateBulkParams.Body>;
}

export namespace TrackRouteCreateBulkParams {
  /**
   * A track route is a prescribed route for performing training events or operations
   * such as air refueling.
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
     * The last updated date of the track route in ISO 8601 UTC format with millisecond
     * precision.
     */
    lastUpdateDate: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The track route type represented by this record (ex. AIR REFUELING).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Minimum and maximum altitude bounds for the track.
     */
    altitudeBlocks?: Array<Body.AltitudeBlock>;

    /**
     * The APN radar code sent and received by the aircraft for identification.
     */
    apnSetting?: string;

    /**
     * The APX radar code sent and received by the aircraft for identification.
     */
    apxBeaconCode?: string;

    /**
     * Air Refueling Track Control Center message.
     */
    artccMessage?: string;

    /**
     * The name of the creating organization of the track route.
     */
    creatingOrg?: string;

    /**
     * The principal compass direction (cardinal or ordinal) of the track route.
     */
    direction?: string;

    /**
     * The date which the DAFIF track was last updated/validated in ISO 8601 UTC format
     * with millisecond precision.
     */
    effectiveDate?: string;

    /**
     * Optional air refueling track ID from external systems. This field has no meaning
     * within UDL and is provided as a convenience for systems that require tracking of
     * an internal system generated ID.
     */
    externalId?: string;

    /**
     * Used to show last time the track route was added to an itinerary in ISO 8601 UTC
     * format with millisecond precision.
     */
    lastUsedDate?: string;

    /**
     * Track location ID.
     */
    locationTrackId?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Point of contacts for scheduling or modifying the route.
     */
    poc?: Array<Body.Poc>;

    /**
     * The primary UHF radio frequency used for the track route in megahertz.
     */
    priFreq?: number;

    /**
     * The receiver tanker channel identifer for air refueling tracks.
     */
    receiverTankerCHCode?: string;

    /**
     * Region code indicating where the track resides as determined by the data source.
     */
    regionCode?: string;

    /**
     * Region where the track resides.
     */
    regionName?: string;

    /**
     * Date the track needs to be reviewed for accuracy or deletion in ISO 8601 UTC
     * format with millisecond precision.
     */
    reviewDate?: string;

    /**
     * Points identified within the route.
     */
    routePoints?: Array<Body.RoutePoint>;

    /**
     * Point of contact for the air refueling track route scheduler.
     */
    schedulerOrgName?: string;

    /**
     * The unit responsible for scheduling the track route.
     */
    schedulerOrgUnit?: string;

    /**
     * The secondary UHF radio frequency used for the track route in megahertz.
     */
    secFreq?: number;

    /**
     * Abbreviated name of the track.
     */
    shortName?: string;

    /**
     * Standard Indicator Code of the air refueling track.
     */
    sic?: string;

    /**
     * Identifier of the track.
     */
    trackId?: string;

    /**
     * Name of the track.
     */
    trackName?: string;

    /**
     * Type of process used by AMC to schedule an air refueling event. Possible values
     * are A (Matched Long Range), F (Matched AMC Short Notice), N (Unmatched Theater
     * Operation Short Notice (Theater Assets)), R, Unmatched Long Range, S (Soft Air
     * Refueling), T (Matched Theater Operation Short Notice (Theater Assets)), V
     * (Unmatched AMC Short Notice), X (Unmatched Theater Operation Short Notice (AMC
     * Assets)), Y (Matched Theater Operation Short Notice (AMC Assets)), Z (Other Air
     * Refueling).
     */
    typeCode?: string;
  }

  export namespace Body {
    /**
     * Minimum and maximum altitude bounds for the track.
     */
    export interface AltitudeBlock {
      /**
       * Sequencing field for the altitude block.
       */
      altitudeSequenceId?: string;

      /**
       * Lowest altitude of the track route altitude block above mean sea level in feet.
       */
      lowerAltitude?: number;

      /**
       * Highest altitude of the track route altitude block above mean sea level in feet.
       */
      upperAltitude?: number;
    }

    /**
     * Point of contacts for scheduling or modifying the route.
     */
    export interface Poc {
      /**
       * Office name for which the contact belongs.
       */
      office?: string;

      /**
       * Phone number of the contact.
       */
      phone?: string;

      /**
       * The name of the contact.
       */
      pocName?: string;

      /**
       * Organization name for which the contact belongs.
       */
      pocOrg?: string;

      /**
       * Sequencing field for point of contact.
       */
      pocSequenceId?: number;

      /**
       * A code or name that represents the contact's role in association to the track
       * route (ex. Originator, Scheduler, Maintainer, etc.).
       */
      pocTypeName?: string;

      /**
       * The rank of contact.
       */
      rank?: string;

      /**
       * Text of the remark.
       */
      remark?: string;

      /**
       * The username of the contact.
       */
      username?: string;
    }

    /**
     * Points identified within the route.
     */
    export interface RoutePoint {
      /**
       * Specifies an alternate country code if the data provider code is not part of an
       * official NAVAID Country Code standard such as ISO-3166 or FIPS. This field will
       * be set to the value provided by the source and should be used for all Queries
       * specifying a Country Code.
       */
      altCountryCode?: string;

      /**
       * The DoD Standard Country Code designator for the country where the route point
       * resides. This field should be set to "OTHR" if the source value does not match a
       * UDL country code value (ISO-3166-ALPHA-2).
       */
      countryCode?: string;

      /**
       * Flag indicating this is a Digital Aeronautical Flight Information File (DAFIF)
       * point.
       */
      dafifPt?: boolean;

      /**
       * The magnetic declination/variation of the route point location from true north,
       * in degrees. Positive values east of true north and negative values west of true
       * north.
       */
      magDec?: number;

      /**
       * Navigational Aid (NAVAID) identification code.
       */
      navaid?: string;

      /**
       * The length of the course from the Navigational Aid (NAVAID) in nautical miles.
       */
      navaidLength?: number;

      /**
       * The NAVAID type of this route point (ex. VOR, VORTAC, TACAN, etc.).
       */
      navaidType?: string;

      /**
       * WGS84 latitude of the point location, in degrees. -90 to 90 degrees (negative
       * values south of equator).
       */
      ptLat?: number;

      /**
       * WGS84 longitude of the point location, in degrees. -180 to 180 degrees (negative
       * values west of Prime Meridian).
       */
      ptLon?: number;

      /**
       * Sequencing field for the track route. This is the identifier representing the
       * sequence of waypoints associated to the track route.
       */
      ptSequenceId?: number;

      /**
       * Code representation of the point within the track route (ex. EP, EX, CP, IP,
       * etc.).
       */
      ptTypeCode?: string;

      /**
       * The name that represents the point within the track route (ex. ENTRY POINT, EXIT
       * POINT, CONTROL POINT, INITIAL POINT, etc.).
       */
      ptTypeName?: string;

      /**
       * Name of a waypoint which identifies the location of the point.
       */
      waypointName?: string;
    }
  }
}

export interface TrackRouteGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface TrackRouteTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The last updated date of the track route in ISO 8601 UTC format with millisecond
   * precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  lastUpdateDate: string;

  firstResult?: number;

  maxResults?: number;
}

export interface TrackRouteUnvalidatedPublishParams {
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
   * The last updated date of the track route in ISO 8601 UTC format with millisecond
   * precision.
   */
  lastUpdateDate: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The track route type represented by this record (ex. AIR REFUELING).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Minimum and maximum altitude bounds for the track.
   */
  altitudeBlocks?: Array<TrackRouteUnvalidatedPublishParams.AltitudeBlock>;

  /**
   * The APN radar code sent and received by the aircraft for identification.
   */
  apnSetting?: string;

  /**
   * The APX radar code sent and received by the aircraft for identification.
   */
  apxBeaconCode?: string;

  /**
   * Air Refueling Track Control Center message.
   */
  artccMessage?: string;

  /**
   * The name of the creating organization of the track route.
   */
  creatingOrg?: string;

  /**
   * The principal compass direction (cardinal or ordinal) of the track route.
   */
  direction?: string;

  /**
   * The date which the DAFIF track was last updated/validated in ISO 8601 UTC format
   * with millisecond precision.
   */
  effectiveDate?: string;

  /**
   * Optional air refueling track ID from external systems. This field has no meaning
   * within UDL and is provided as a convenience for systems that require tracking of
   * an internal system generated ID.
   */
  externalId?: string;

  /**
   * Used to show last time the track route was added to an itinerary in ISO 8601 UTC
   * format with millisecond precision.
   */
  lastUsedDate?: string;

  /**
   * Track location ID.
   */
  locationTrackId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Point of contacts for scheduling or modifying the route.
   */
  poc?: Array<TrackRouteUnvalidatedPublishParams.Poc>;

  /**
   * The primary UHF radio frequency used for the track route in megahertz.
   */
  priFreq?: number;

  /**
   * The receiver tanker channel identifer for air refueling tracks.
   */
  receiverTankerCHCode?: string;

  /**
   * Region code indicating where the track resides as determined by the data source.
   */
  regionCode?: string;

  /**
   * Region where the track resides.
   */
  regionName?: string;

  /**
   * Date the track needs to be reviewed for accuracy or deletion in ISO 8601 UTC
   * format with millisecond precision.
   */
  reviewDate?: string;

  /**
   * Points identified within the route.
   */
  routePoints?: Array<TrackRouteUnvalidatedPublishParams.RoutePoint>;

  /**
   * Point of contact for the air refueling track route scheduler.
   */
  schedulerOrgName?: string;

  /**
   * The unit responsible for scheduling the track route.
   */
  schedulerOrgUnit?: string;

  /**
   * The secondary UHF radio frequency used for the track route in megahertz.
   */
  secFreq?: number;

  /**
   * Abbreviated name of the track.
   */
  shortName?: string;

  /**
   * Standard Indicator Code of the air refueling track.
   */
  sic?: string;

  /**
   * Identifier of the track.
   */
  trackId?: string;

  /**
   * Name of the track.
   */
  trackName?: string;

  /**
   * Type of process used by AMC to schedule an air refueling event. Possible values
   * are A (Matched Long Range), F (Matched AMC Short Notice), N (Unmatched Theater
   * Operation Short Notice (Theater Assets)), R, Unmatched Long Range, S (Soft Air
   * Refueling), T (Matched Theater Operation Short Notice (Theater Assets)), V
   * (Unmatched AMC Short Notice), X (Unmatched Theater Operation Short Notice (AMC
   * Assets)), Y (Matched Theater Operation Short Notice (AMC Assets)), Z (Other Air
   * Refueling).
   */
  typeCode?: string;
}

export namespace TrackRouteUnvalidatedPublishParams {
  /**
   * Minimum and maximum altitude bounds for the track.
   */
  export interface AltitudeBlock {
    /**
     * Sequencing field for the altitude block.
     */
    altitudeSequenceId?: string;

    /**
     * Lowest altitude of the track route altitude block above mean sea level in feet.
     */
    lowerAltitude?: number;

    /**
     * Highest altitude of the track route altitude block above mean sea level in feet.
     */
    upperAltitude?: number;
  }

  /**
   * Point of contacts for scheduling or modifying the route.
   */
  export interface Poc {
    /**
     * Office name for which the contact belongs.
     */
    office?: string;

    /**
     * Phone number of the contact.
     */
    phone?: string;

    /**
     * The name of the contact.
     */
    pocName?: string;

    /**
     * Organization name for which the contact belongs.
     */
    pocOrg?: string;

    /**
     * Sequencing field for point of contact.
     */
    pocSequenceId?: number;

    /**
     * A code or name that represents the contact's role in association to the track
     * route (ex. Originator, Scheduler, Maintainer, etc.).
     */
    pocTypeName?: string;

    /**
     * The rank of contact.
     */
    rank?: string;

    /**
     * Text of the remark.
     */
    remark?: string;

    /**
     * The username of the contact.
     */
    username?: string;
  }

  /**
   * Points identified within the route.
   */
  export interface RoutePoint {
    /**
     * Specifies an alternate country code if the data provider code is not part of an
     * official NAVAID Country Code standard such as ISO-3166 or FIPS. This field will
     * be set to the value provided by the source and should be used for all Queries
     * specifying a Country Code.
     */
    altCountryCode?: string;

    /**
     * The DoD Standard Country Code designator for the country where the route point
     * resides. This field should be set to "OTHR" if the source value does not match a
     * UDL country code value (ISO-3166-ALPHA-2).
     */
    countryCode?: string;

    /**
     * Flag indicating this is a Digital Aeronautical Flight Information File (DAFIF)
     * point.
     */
    dafifPt?: boolean;

    /**
     * The magnetic declination/variation of the route point location from true north,
     * in degrees. Positive values east of true north and negative values west of true
     * north.
     */
    magDec?: number;

    /**
     * Navigational Aid (NAVAID) identification code.
     */
    navaid?: string;

    /**
     * The length of the course from the Navigational Aid (NAVAID) in nautical miles.
     */
    navaidLength?: number;

    /**
     * The NAVAID type of this route point (ex. VOR, VORTAC, TACAN, etc.).
     */
    navaidType?: string;

    /**
     * WGS84 latitude of the point location, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    ptLat?: number;

    /**
     * WGS84 longitude of the point location, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    ptLon?: number;

    /**
     * Sequencing field for the track route. This is the identifier representing the
     * sequence of waypoints associated to the track route.
     */
    ptSequenceId?: number;

    /**
     * Code representation of the point within the track route (ex. EP, EX, CP, IP,
     * etc.).
     */
    ptTypeCode?: string;

    /**
     * The name that represents the point within the track route (ex. ENTRY POINT, EXIT
     * POINT, CONTROL POINT, INITIAL POINT, etc.).
     */
    ptTypeName?: string;

    /**
     * Name of a waypoint which identifies the location of the point.
     */
    waypointName?: string;
  }
}

TrackRoute.History = History;

export declare namespace TrackRoute {
  export {
    type TrackRouteListResponse as TrackRouteListResponse,
    type TrackRouteCountResponse as TrackRouteCountResponse,
    type TrackRouteQueryhelpResponse as TrackRouteQueryhelpResponse,
    type TrackRouteTupleResponse as TrackRouteTupleResponse,
    type TrackRouteListResponsesOffsetPage as TrackRouteListResponsesOffsetPage,
    type TrackRouteCreateParams as TrackRouteCreateParams,
    type TrackRouteUpdateParams as TrackRouteUpdateParams,
    type TrackRouteListParams as TrackRouteListParams,
    type TrackRouteCountParams as TrackRouteCountParams,
    type TrackRouteCreateBulkParams as TrackRouteCreateBulkParams,
    type TrackRouteGetParams as TrackRouteGetParams,
    type TrackRouteTupleParams as TrackRouteTupleParams,
    type TrackRouteUnvalidatedPublishParams as TrackRouteUnvalidatedPublishParams,
  };

  export {
    History as History,
    type TrackRouteFull as TrackRouteFull,
    type HistoryCountResponse as HistoryCountResponse,
    type TrackRouteFullsOffsetPage as TrackRouteFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
