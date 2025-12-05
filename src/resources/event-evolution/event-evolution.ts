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
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EventEvolution extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single EventEvolution object as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.eventEvolution.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   eventId: 'EVENT_ID',
   *   source: 'Bluestaq',
   *   startTime: '2021-12-02T16:00:00.123Z',
   *   summary: 'Example summary of the event.',
   * });
   * ```
   */
  create(body: EventEvolutionCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/eventevolution', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single EventEvolution by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const eventEvolutionFull =
   *   await client.eventEvolution.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: EventEvolutionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.EventEvolutionFull> {
    return this._client.get(path`/udl/eventevolution/${id}`, { query, ...options });
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
   * for await (const eventEvolutionListResponse of client.eventEvolution.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EventEvolutionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EventEvolutionListResponsesOffsetPage, EventEvolutionListResponse> {
    return this._client.getAPIList('/udl/eventevolution', OffsetPage<EventEvolutionListResponse>, {
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
   * const response = await client.eventEvolution.count();
   * ```
   */
  count(
    query: EventEvolutionCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/eventevolution/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * EventEvolution records as a POST body and ingest into the database. Requires
   * specific roles, please contact the UDL team to gain access. This operation is
   * not intended to be used for automated feeds into UDL...data providers should
   * contact the UDL team for instructions on setting up a permanent feed through an
   * alternate mechanism.
   *
   * @example
   * ```ts
   * await client.eventEvolution.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       eventId: 'EVENT_ID',
   *       source: 'Bluestaq',
   *       startTime: '2021-12-02T16:00:00.123Z',
   *       summary: 'Example summary of the event.',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: EventEvolutionCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/eventevolution/createBulk', {
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
   * const response = await client.eventEvolution.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<EventEvolutionQueryhelpResponse> {
    return this._client.get('/udl/eventevolution/queryhelp', options);
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
   * const eventEvolutionFulls =
   *   await client.eventEvolution.tuple({ columns: 'columns' });
   * ```
   */
  tuple(query: EventEvolutionTupleParams, options?: RequestOptions): APIPromise<EventEvolutionTupleResponse> {
    return this._client.get('/udl/eventevolution/tuple', { query, ...options });
  }

  /**
   * Service operation to take a list of EventEvolution records as a POST body and
   * ingest into the database. Requires a specific role, please contact the UDL team
   * to gain access. This operation is intended to be used for automated feeds into
   * UDL.
   *
   * @example
   * ```ts
   * await client.eventEvolution.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       eventId: 'EVENT_ID',
   *       source: 'Bluestaq',
   *       startTime: '2021-12-02T16:00:00.123Z',
   *       summary: 'Example summary of the event.',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(
    params: EventEvolutionUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-eventevolution', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type EventEvolutionListResponsesOffsetPage = OffsetPage<EventEvolutionListResponse>;

/**
 * Event Evolution is a unique service supporting the association of UDL records of
 * various data types to a common event or activity. The associations may be a one
 * time summary, aggregating sources of a past event, or of an ongoing activity
 * that evolves over a period of time.
 */
export interface EventEvolutionListResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * User-provided unique identifier of this activity or event. This ID should remain
   * the same on subsequent updates in order to associate all records pertaining to
   * the activity or event.
   */
  eventId: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The actual or estimated start time of the activity or event, in ISO 8601 UTC
   * format.
   */
  startTime: string;

  /**
   * Summary or description of the activity or event.
   */
  summary: string;

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
   * Type of region as projected on the ground.
   */
  atype?: string;

  /**
   * The activity or event type associated with this record (e.g. BREAKUP, DIRECT
   * FIRE, IED, LAUNCH, PROTEST, etc.). For Significant Activities, recommended but
   * not constrained to, CAMEO.Manual.1.1b3 Chapter 6. Note that the evolution of an
   * event may incorporate records of various types, for example, a LAUNCH event may
   * evolve into a BREAKUP event.
   */
  category?: string;

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
   * Optional description of the relationship between the records provided in the
   * srcTyps/srcIds and the activity or event.
   */
  dataDescription?: string;

  /**
   * The actual or estimated start time of the activity or event, in ISO 8601 UTC
   * format.
   */
  endTime?: string;

  /**
   * Administrative boundaries of the first sub-national level. Level 1 is simply the
   * largest demarcation under whatever demarcation criteria has been determined by
   * the governing body. For example this may be the state/province in which a
   * terrestrial event takes place, or with which the event is attributed for
   * non-localized or non-terrestrial activity.
   */
  geoAdminLevel1?: string;

  /**
   * Administrative boundaries of the second sub-national level. Level 2 is simply
   * the second largest demarcation under whatever demarcation criteria has been
   * determined by the governing body. For example this may be the city/district in
   * which a terrestrial event takes place, or with which the event is attributed for
   * non-localized or non-terrestrial activity.
   */
  geoAdminLevel2?: string;

  /**
   * Administrative boundaries of the third sub-national level. Level 3 is simply the
   * third largest demarcation under whatever demarcation criteria has been
   * determined by the governing body.
   */
  geoAdminLevel3?: string;

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
   * Flag indicating that this record is for the purpose of redacting one or more
   * previously specified records from association with this activity or event. If
   * this flag is set then all records indicated in srcTyps/srcIds should be removed
   * from event association.
   */
  redact?: boolean;

  /**
   * Array of UUIDs of the UDL data records that are related to the determination of
   * this activity or event. See the associated 'srcTyps' array for the specific
   * types of data, positionally corresponding to the UUIDs in this array. The
   * 'srcTyps' and 'srcIds' arrays must match in size. See the corresponding srcTyps
   * array element for the data type of the UUID and use the appropriate API
   * operation to retrieve that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (AIS, CONJUNCTION, DOA, ELSET, EO, ESID, GROUNDIMAGE,
   * POI, MANEUVER, MTI, NOTIFICATION, RADAR, RF, SIGACT, SKYIMAGE, SV, TRACK) that
   * are related to this activity or event. See the associated 'srcIds' array for the
   * record UUIDs, positionally corresponding to the record types in this array. The
   * 'srcTyps' and 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * The status of this activity or event. (ACTIVE, CONCLUDED, UNKNOWN).
   */
  status?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * List of URLs to before/after images of this point of interest entity.
   */
  url?: Array<string>;
}

export type EventEvolutionCountResponse = string;

export interface EventEvolutionQueryhelpResponse {
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

export type EventEvolutionTupleResponse = Array<Shared.EventEvolutionFull>;

export interface EventEvolutionCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * User-provided unique identifier of this activity or event. This ID should remain
   * the same on subsequent updates in order to associate all records pertaining to
   * the activity or event.
   */
  eventId: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The actual or estimated start time of the activity or event, in ISO 8601 UTC
   * format.
   */
  startTime: string;

  /**
   * Summary or description of the activity or event.
   */
  summary: string;

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
   * the point of interest as projected on the ground.
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
   * The activity or event type associated with this record (e.g. BREAKUP, DIRECT
   * FIRE, IED, LAUNCH, PROTEST, etc.). For Significant Activities, recommended but
   * not constrained to, CAMEO.Manual.1.1b3 Chapter 6. Note that the evolution of an
   * event may incorporate records of various types, for example, a LAUNCH event may
   * evolve into a BREAKUP event.
   */
  category?: string;

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
   * Optional description of the relationship between the records provided in the
   * srcTyps/srcIds and the activity or event.
   */
  dataDescription?: string;

  /**
   * The actual or estimated start time of the activity or event, in ISO 8601 UTC
   * format.
   */
  endTime?: string;

  /**
   * Administrative boundaries of the first sub-national level. Level 1 is simply the
   * largest demarcation under whatever demarcation criteria has been determined by
   * the governing body. For example this may be the state/province in which a
   * terrestrial event takes place, or with which the event is attributed for
   * non-localized or non-terrestrial activity.
   */
  geoAdminLevel1?: string;

  /**
   * Administrative boundaries of the second sub-national level. Level 2 is simply
   * the second largest demarcation under whatever demarcation criteria has been
   * determined by the governing body. For example this may be the city/district in
   * which a terrestrial event takes place, or with which the event is attributed for
   * non-localized or non-terrestrial activity.
   */
  geoAdminLevel2?: string;

  /**
   * Administrative boundaries of the third sub-national level. Level 3 is simply the
   * third largest demarcation under whatever demarcation criteria has been
   * determined by the governing body.
   */
  geoAdminLevel3?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Flag indicating that this record is for the purpose of redacting one or more
   * previously specified records from association with this activity or event. If
   * this flag is set then all records indicated in srcTyps/srcIds should be removed
   * from event association.
   */
  redact?: boolean;

  /**
   * Array of UUIDs of the UDL data records that are related to the determination of
   * this activity or event. See the associated 'srcTyps' array for the specific
   * types of data, positionally corresponding to the UUIDs in this array. The
   * 'srcTyps' and 'srcIds' arrays must match in size. See the corresponding srcTyps
   * array element for the data type of the UUID and use the appropriate API
   * operation to retrieve that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (AIS, CONJUNCTION, DOA, ELSET, EO, ESID, GROUNDIMAGE,
   * POI, MANEUVER, MTI, NOTIFICATION, RADAR, RF, SIGACT, SKYIMAGE, SV, TRACK) that
   * are related to this activity or event. See the associated 'srcIds' array for the
   * record UUIDs, positionally corresponding to the record types in this array. The
   * 'srcTyps' and 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * The status of this activity or event. (ACTIVE, CONCLUDED, UNKNOWN).
   */
  status?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * List of URLs to before/after images of this point of interest entity.
   */
  url?: Array<string>;
}

export interface EventEvolutionRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface EventEvolutionListParams extends OffsetPageParams {
  /**
   * (One or more of fields 'eventId, startTime' are required.) User-provided unique
   * identifier of this activity or event. This ID should remain the same on
   * subsequent updates in order to associate all records pertaining to the activity
   * or event.
   */
  eventId?: string;

  /**
   * (One or more of fields 'eventId, startTime' are required.) The actual or
   * estimated start time of the activity or event, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime?: string;
}

export interface EventEvolutionCountParams {
  /**
   * (One or more of fields 'eventId, startTime' are required.) User-provided unique
   * identifier of this activity or event. This ID should remain the same on
   * subsequent updates in order to associate all records pertaining to the activity
   * or event.
   */
  eventId?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * (One or more of fields 'eventId, startTime' are required.) The actual or
   * estimated start time of the activity or event, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime?: string;
}

export interface EventEvolutionCreateBulkParams {
  body: Array<EventEvolutionCreateBulkParams.Body>;
}

export namespace EventEvolutionCreateBulkParams {
  /**
   * Event Evolution is a unique service supporting the association of UDL records of
   * various data types to a common event or activity. The associations may be a one
   * time summary, aggregating sources of a past event, or of an ongoing activity
   * that evolves over a period of time.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * User-provided unique identifier of this activity or event. This ID should remain
     * the same on subsequent updates in order to associate all records pertaining to
     * the activity or event.
     */
    eventId: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The actual or estimated start time of the activity or event, in ISO 8601 UTC
     * format.
     */
    startTime: string;

    /**
     * Summary or description of the activity or event.
     */
    summary: string;

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
     * the point of interest as projected on the ground.
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
     * The activity or event type associated with this record (e.g. BREAKUP, DIRECT
     * FIRE, IED, LAUNCH, PROTEST, etc.). For Significant Activities, recommended but
     * not constrained to, CAMEO.Manual.1.1b3 Chapter 6. Note that the evolution of an
     * event may incorporate records of various types, for example, a LAUNCH event may
     * evolve into a BREAKUP event.
     */
    category?: string;

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
     * Optional description of the relationship between the records provided in the
     * srcTyps/srcIds and the activity or event.
     */
    dataDescription?: string;

    /**
     * The actual or estimated start time of the activity or event, in ISO 8601 UTC
     * format.
     */
    endTime?: string;

    /**
     * Administrative boundaries of the first sub-national level. Level 1 is simply the
     * largest demarcation under whatever demarcation criteria has been determined by
     * the governing body. For example this may be the state/province in which a
     * terrestrial event takes place, or with which the event is attributed for
     * non-localized or non-terrestrial activity.
     */
    geoAdminLevel1?: string;

    /**
     * Administrative boundaries of the second sub-national level. Level 2 is simply
     * the second largest demarcation under whatever demarcation criteria has been
     * determined by the governing body. For example this may be the city/district in
     * which a terrestrial event takes place, or with which the event is attributed for
     * non-localized or non-terrestrial activity.
     */
    geoAdminLevel2?: string;

    /**
     * Administrative boundaries of the third sub-national level. Level 3 is simply the
     * third largest demarcation under whatever demarcation criteria has been
     * determined by the governing body.
     */
    geoAdminLevel3?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Flag indicating that this record is for the purpose of redacting one or more
     * previously specified records from association with this activity or event. If
     * this flag is set then all records indicated in srcTyps/srcIds should be removed
     * from event association.
     */
    redact?: boolean;

    /**
     * Array of UUIDs of the UDL data records that are related to the determination of
     * this activity or event. See the associated 'srcTyps' array for the specific
     * types of data, positionally corresponding to the UUIDs in this array. The
     * 'srcTyps' and 'srcIds' arrays must match in size. See the corresponding srcTyps
     * array element for the data type of the UUID and use the appropriate API
     * operation to retrieve that object.
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (AIS, CONJUNCTION, DOA, ELSET, EO, ESID, GROUNDIMAGE,
     * POI, MANEUVER, MTI, NOTIFICATION, RADAR, RF, SIGACT, SKYIMAGE, SV, TRACK) that
     * are related to this activity or event. See the associated 'srcIds' array for the
     * record UUIDs, positionally corresponding to the record types in this array. The
     * 'srcTyps' and 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * The status of this activity or event. (ACTIVE, CONCLUDED, UNKNOWN).
     */
    status?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * List of URLs to before/after images of this point of interest entity.
     */
    url?: Array<string>;
  }
}

export interface EventEvolutionTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * (One or more of fields 'eventId, startTime' are required.) User-provided unique
   * identifier of this activity or event. This ID should remain the same on
   * subsequent updates in order to associate all records pertaining to the activity
   * or event.
   */
  eventId?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * (One or more of fields 'eventId, startTime' are required.) The actual or
   * estimated start time of the activity or event, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime?: string;
}

export interface EventEvolutionUnvalidatedPublishParams {
  body: Array<EventEvolutionUnvalidatedPublishParams.Body>;
}

export namespace EventEvolutionUnvalidatedPublishParams {
  /**
   * Event Evolution is a unique service supporting the association of UDL records of
   * various data types to a common event or activity. The associations may be a one
   * time summary, aggregating sources of a past event, or of an ongoing activity
   * that evolves over a period of time.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * User-provided unique identifier of this activity or event. This ID should remain
     * the same on subsequent updates in order to associate all records pertaining to
     * the activity or event.
     */
    eventId: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The actual or estimated start time of the activity or event, in ISO 8601 UTC
     * format.
     */
    startTime: string;

    /**
     * Summary or description of the activity or event.
     */
    summary: string;

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
     * the point of interest as projected on the ground.
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
     * The activity or event type associated with this record (e.g. BREAKUP, DIRECT
     * FIRE, IED, LAUNCH, PROTEST, etc.). For Significant Activities, recommended but
     * not constrained to, CAMEO.Manual.1.1b3 Chapter 6. Note that the evolution of an
     * event may incorporate records of various types, for example, a LAUNCH event may
     * evolve into a BREAKUP event.
     */
    category?: string;

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
     * Optional description of the relationship between the records provided in the
     * srcTyps/srcIds and the activity or event.
     */
    dataDescription?: string;

    /**
     * The actual or estimated start time of the activity or event, in ISO 8601 UTC
     * format.
     */
    endTime?: string;

    /**
     * Administrative boundaries of the first sub-national level. Level 1 is simply the
     * largest demarcation under whatever demarcation criteria has been determined by
     * the governing body. For example this may be the state/province in which a
     * terrestrial event takes place, or with which the event is attributed for
     * non-localized or non-terrestrial activity.
     */
    geoAdminLevel1?: string;

    /**
     * Administrative boundaries of the second sub-national level. Level 2 is simply
     * the second largest demarcation under whatever demarcation criteria has been
     * determined by the governing body. For example this may be the city/district in
     * which a terrestrial event takes place, or with which the event is attributed for
     * non-localized or non-terrestrial activity.
     */
    geoAdminLevel2?: string;

    /**
     * Administrative boundaries of the third sub-national level. Level 3 is simply the
     * third largest demarcation under whatever demarcation criteria has been
     * determined by the governing body.
     */
    geoAdminLevel3?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Flag indicating that this record is for the purpose of redacting one or more
     * previously specified records from association with this activity or event. If
     * this flag is set then all records indicated in srcTyps/srcIds should be removed
     * from event association.
     */
    redact?: boolean;

    /**
     * Array of UUIDs of the UDL data records that are related to the determination of
     * this activity or event. See the associated 'srcTyps' array for the specific
     * types of data, positionally corresponding to the UUIDs in this array. The
     * 'srcTyps' and 'srcIds' arrays must match in size. See the corresponding srcTyps
     * array element for the data type of the UUID and use the appropriate API
     * operation to retrieve that object.
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (AIS, CONJUNCTION, DOA, ELSET, EO, ESID, GROUNDIMAGE,
     * POI, MANEUVER, MTI, NOTIFICATION, RADAR, RF, SIGACT, SKYIMAGE, SV, TRACK) that
     * are related to this activity or event. See the associated 'srcIds' array for the
     * record UUIDs, positionally corresponding to the record types in this array. The
     * 'srcTyps' and 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * The status of this activity or event. (ACTIVE, CONCLUDED, UNKNOWN).
     */
    status?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * List of URLs to before/after images of this point of interest entity.
     */
    url?: Array<string>;
  }
}

EventEvolution.History = History;

export declare namespace EventEvolution {
  export {
    type EventEvolutionListResponse as EventEvolutionListResponse,
    type EventEvolutionCountResponse as EventEvolutionCountResponse,
    type EventEvolutionQueryhelpResponse as EventEvolutionQueryhelpResponse,
    type EventEvolutionTupleResponse as EventEvolutionTupleResponse,
    type EventEvolutionListResponsesOffsetPage as EventEvolutionListResponsesOffsetPage,
    type EventEvolutionCreateParams as EventEvolutionCreateParams,
    type EventEvolutionRetrieveParams as EventEvolutionRetrieveParams,
    type EventEvolutionListParams as EventEvolutionListParams,
    type EventEvolutionCountParams as EventEvolutionCountParams,
    type EventEvolutionCreateBulkParams as EventEvolutionCreateBulkParams,
    type EventEvolutionTupleParams as EventEvolutionTupleParams,
    type EventEvolutionUnvalidatedPublishParams as EventEvolutionUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
