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
  HistoryListResponse,
  HistoryListResponsesOffsetPage,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Closelyspacedobjects extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single CloselySpacedObjects (CSO) as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.closelyspacedobjects.create({
   *   classificationMarking: 'U',
   *   csoState: 'POSSIBLE',
   *   dataMode: 'TEST',
   *   eventStartTime: '2019-12-27T18:11:19.117Z',
   *   eventType: 'RENDEZVOUS',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: CloselyspacedobjectCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/closelyspacedobjects', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single CloselySpacedObjects (CSO) record by its
   * unique ID passed as a path parameter.
   *
   * @example
   * ```ts
   * const closelyspacedobject =
   *   await client.closelyspacedobjects.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: CloselyspacedobjectRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CloselyspacedobjectRetrieveResponse> {
    return this._client.get(path`/udl/closelyspacedobjects/${id}`, { query, ...options });
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
   * for await (const closelyspacedobjectsAbridged of client.closelyspacedobjects.list(
   *   { eventStartTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CloselyspacedobjectListParams,
    options?: RequestOptions,
  ): PagePromise<CloselyspacedobjectsAbridgedsOffsetPage, CloselyspacedobjectsAbridged> {
    return this._client.getAPIList('/udl/closelyspacedobjects', OffsetPage<CloselyspacedobjectsAbridged>, {
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
   * const response = await client.closelyspacedobjects.count({
   *   eventStartTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: CloselyspacedobjectCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/closelyspacedobjects/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * CloselySpacedObjects (CSO) records as a POST body and ingest into the database.
   * This operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.closelyspacedobjects.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       csoState: 'POSSIBLE',
   *       dataMode: 'TEST',
   *       eventStartTime: '2019-12-27T18:11:19.117Z',
   *       eventType: 'RENDEZVOUS',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: CloselyspacedobjectCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/closelyspacedobjects/createBulk', {
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
   *   await client.closelyspacedobjects.queryHelp();
   * ```
   */
  queryHelp(options?: RequestOptions): APIPromise<CloselyspacedobjectQueryHelpResponse> {
    return this._client.get('/udl/closelyspacedobjects/queryhelp', options);
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
   * const response = await client.closelyspacedobjects.tuple({
   *   columns: 'columns',
   *   eventStartTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(
    query: CloselyspacedobjectTupleParams,
    options?: RequestOptions,
  ): APIPromise<CloselyspacedobjectTupleResponse> {
    return this._client.get('/udl/closelyspacedobjects/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple CloselySpacedObjects (CSO) records as a POST
   * body and ingest into the database. This operation is intended to be used for
   * automated feeds into UDL. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.closelyspacedobjects.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       csoState: 'POSSIBLE',
   *       dataMode: 'TEST',
   *       eventStartTime: '2019-12-27T18:11:19.117Z',
   *       eventType: 'RENDEZVOUS',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(
    params: CloselyspacedobjectUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-closelyspacedobjects', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type CloselyspacedobjectsAbridgedsOffsetPage = OffsetPage<CloselyspacedobjectsAbridged>;

/**
 * This collection of services provides operations for manipulating and querying of
 * closely spaced objects (on orbit) operations including docking, rendezvous,
 * proximity and reporting of payload zone engagements observed and characterized
 * over a period of time.
 */
export interface CloselyspacedobjectsAbridged {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicates the current state that characterizes Closely Spaced Objects (CSO)
   * analysis steps and conclusions. Values include: ACTIVE, ACTUAL, CANCELED,
   * CLOSED, COMPLETED, DETECTED, INDICATED, PENDING, PLANNED, POSSIBLE, PREDICTED,
   * SEPARATED, UPDATED.
   */
  csoState: string;

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
   * Timestamp representing the events start time in ISO 8601 UTC format with
   * millisecond precision.
   */
  eventStartTime: string;

  /**
   * The type of event associated with this record. Values include: DOCK, UNDOCK,
   * SEPARATION, RENDEZVOUS, PROXIMITY, PEZ, WEZ.
   */
  eventType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * State vector epoch time of the actor satellite in ISO 8601 UTC format with
   * millisecond precision.
   */
  actorSVEpoch?: string;

  /**
   * Timespan of the rendezvous analysis in seconds.
   */
  analysisDuration?: number;

  /**
   * Epoch time of the beginning of the analysis period in ISO 8601 UTC format with
   * millisecond precision.
   */
  analysisEpoch?: string;

  /**
   * Computation type, values (e.g. PLANARALIGNMENT, LONGITUDE).
   */
  compType?: string;

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
   * A collection of orbital metrics for the event at the start and end times, and
   * the mean values of the primary and secondary objects, as well as the deltas
   * between the primary and secondary objects.
   */
  csoDetails?: Array<CloselyspacedobjectsAbridged.CsoDetail>;

  /**
   * The tolerance value for the DeltaV, in kilometers per second.
   */
  deltaVTol?: number;

  /**
   * The threshold of the event duration in seconds.
   */
  durationThreshold?: number;

  /**
   * Timestamp representing the events end time in ISO 8601 UTC format with
   * millisecond precision.
   */
  eventEndTime?: string;

  /**
   * Percentage of the event interval that is within the plane tolerance specified as
   * a percent value between 0 and 100.
   */
  eventIntervalCoverage?: number;

  /**
   * Unique identifier of the record from the originating system. This field has no
   * meaning within UDL and is provided as a convenience for systems that require
   * tracking of an internal system generated ID.
   */
  extId?: string;

  /**
   * The Hohmann DeltaV (kilometers per second) is the minimum delta velocity for the
   * in-plane orbit change. The in-plane maneuvers change the semi-major axis
   * (perigee and/or apogee). It is the minimum assuming two maneuvers; a lower delta
   * velocity is possible with bi-elliptic transfers involving three maneuvers.
   */
  hohmannDeltaV?: number;

  /**
   * Optional ID of the UDL State Vector at epoch time of the actor satellite. When
   * performing a create, this id will be ignored in favor of the UDL generated id of
   * the actor state vector.
   */
  idActorSV?: string;

  /**
   * Unique identifier of the primary satellite on-orbit object, if correlated. For
   * rendezvous and proximity operations, this is the target on-orbit object. When
   * the secondary object is on the rendezvous capable list, this can be any object.
   */
  idOnOrbit1?: string;

  /**
   * Unique identifier of the secondary satellite on-orbit object, if correlated. For
   * rendezvous and proximity operations, this is the actor. When the primary object
   * is a satellite being protected on the neighborhood watch list (NWL), this can be
   * any object encroaching on the primary.
   */
  idOnOrbit2?: string;

  /**
   * Optional ID of the UDL State Vector at epoch time of the target satellite. When
   * performing a create, this id will be ignored in favor of the UDL generated id of
   * the target state vector.
   */
  idTargetSV?: string;

  /**
   * The Inclination DeltaV is the minimum delta velocity for the out-of-plane
   * change, assuming alignment of the right ascensions measured in kilometers per
   * second.
   */
  inclinationDeltaV?: number;

  /**
   * Identifies the source of the indication, if the latest event info was manually
   * input, not computed.
   */
  indicationSource?: string;

  /**
   * The tolerance value for the longitude in degrees.
   */
  lonTol?: number;

  /**
   * Maximum range (apogee and perigee differences) within the event interval
   * measured in kilometers.
   */
  maxRange?: number;

  /**
   * Minimum angle between the target's position and the projection of the actor's
   * position into the target's nominal orbit plane over the event interval measured
   * in degrees.
   */
  minPlaneSepAngle?: number;

  /**
   * Epoch time of the minimum in-plane separation angle occurrence in ISO 8601 UTC
   * format with millisecond precision.
   */
  minPlaneSepEpoch?: string;

  /**
   * Minimum range (apogee and perigee differences) within the event interval
   * measured in kilometers.
   */
  minRange?: number;

  /**
   * Timespan of satellites within the range tolerance in seconds.
   */
  minRangeAnalysisDuration?: number;

  /**
   * Epoch time of the minimum range occurrence in ISO 8601 UTC format with
   * millisecond precision.
   */
  minRangeEpoch?: string;

  /**
   * Contains other descriptive information associated with an indicated event.
   */
  notes?: string;

  /**
   * The number of oscillations within the event interval which are within the plane
   * tolerance.
   */
  numSubIntervals?: number;

  /**
   * The change in angle between the angular momentum vectors between the actor and
   * target relative to plane orientation in degrees.
   */
  orbitAlignDel?: number;

  /**
   * The tolerance value for the difference in the orbital plane measured in degrees.
   */
  orbitPlaneTol?: number;

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
   * Optional place holder for an OnOrbit ID that does not exist in UDL.
   */
  origObjectId1?: string;

  /**
   * Optional place holder for an OnOrbit ID that does not exist in UDL.
   */
  origObjectId2?: string;

  /**
   * The threshold of the event range in kilometers.
   */
  rangeThreshold?: number;

  /**
   * The tolerance value for the range in kilometers.
   */
  rangeTol?: number;

  /**
   * Indicates the relative position vector of the event occurrence measured in
   * kilometers.
   */
  relPos?: Array<number>;

  /**
   * Range of closest approach: relative position magnitude, in kilometers, of the
   * difference in the physical position between the actor and target objects.
   */
  relPosMag?: number;

  /**
   * Indicates the closure rate specified as a relative velocity magnitude in
   * kilometers per second of the difference in the velocities between the actor and
   * target objects.
   */
  relSpeedMag?: number;

  /**
   * Indicates the relative velocity vector of the event occurrence measured in
   * kilometers per second.
   */
  relVel?: Array<number>;

  /**
   * Satellite/catalog number of the target on-orbit primary object.
   */
  satNo1?: number;

  /**
   * Satellite/catalog number of the target on-orbit secondary object.
   */
  satNo2?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The tolerance value for the optimal longitude for station-keeping in degrees.
   */
  stationLimLonTol?: number;

  /**
   * State vector epoch time of the target satellite in ISO 8601 UTC format with
   * millisecond precision.
   */
  targetSVEpoch?: string;

  /**
   * The Total DeltaV is the sum of the Hohmann and Inclination DeltaVs measured in
   * kilometers per second.
   */
  totalDeltaV?: number;
}

export namespace CloselyspacedobjectsAbridged {
  /**
   * A collection of orbital metrics for the event at the start and end times, and
   * the mean values of the primary and secondary objects, as well as the deltas
   * between the primary and secondary objects.
   */
  export interface CsoDetail {
    /**
     * The type of object event the metrics apply. Values consist of START, END, MEAN.
     */
    objectEvent: string;

    /**
     * The type of the object for which the metrics apply. Values include PRIMARY,
     * SECONDARY, DELTA.
     */
    objectType: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The orbit point furthest from the center of the earth in kilometers.
     */
    apogee?: number;

    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking?: string;

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
    dataMode?: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * Unique identifier of the parent CSO record, auto-populated by the system.
     */
    idCSO?: string;

    /**
     * The angle between the equator and the orbit when looking from the center of the
     * Earth in degrees from 0 to 180.
     */
    inclination?: number;

    /**
     * The longitude degree of the object measured in degrees from -180 to 180.
     */
    longitude?: number;

    /**
     * The orbit point nearest to the center of the earth in kilometers.
     */
    perigee?: number;
  }
}

/**
 * This collection of services provides operations for manipulating and querying of
 * closely spaced objects (on orbit) operations including docking, rendezvous,
 * proximity and reporting of payload zone engagements observed and characterized
 * over a period of time.
 */
export interface CloselyspacedobjectRetrieveResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicates the current state that characterizes Closely Spaced Objects (CSO)
   * analysis steps and conclusions. Values include: ACTIVE, ACTUAL, CANCELED,
   * CLOSED, COMPLETED, DETECTED, INDICATED, PENDING, PLANNED, POSSIBLE, PREDICTED,
   * SEPARATED, UPDATED.
   */
  csoState: string;

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
   * Timestamp representing the events start time in ISO 8601 UTC format with
   * millisecond precision.
   */
  eventStartTime: string;

  /**
   * The type of event associated with this record. Values include: DOCK, UNDOCK,
   * SEPARATION, RENDEZVOUS, PROXIMITY, PEZ, WEZ.
   */
  eventType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * State vector epoch time of the actor satellite in ISO 8601 UTC format with
   * millisecond precision.
   */
  actorSVEpoch?: string;

  /**
   * Timespan of the rendezvous analysis in seconds.
   */
  analysisDuration?: number;

  /**
   * Epoch time of the beginning of the analysis period in ISO 8601 UTC format with
   * millisecond precision.
   */
  analysisEpoch?: string;

  /**
   * Computation type, values (e.g. PLANARALIGNMENT, LONGITUDE).
   */
  compType?: string;

  /**
   * An optional string array containing additional data (keys) representing relevant
   * items for context of fields not specifically defined in this schema. This array
   * is paired with the contextValues string array and must contain the same number
   * of items. Please note these fields are intended for contextual use only and do
   * not pertain to core schema information. To ensure proper integration and avoid
   * misuse, coordination of how these fields are populated and consumed is required
   * during onboarding.
   */
  contextKeys?: Array<string>;

  /**
   * An optional string array containing the values associated with the contextKeys
   * array. This array is paired with the contextKeys string array and must contain
   * the same number of items. Please note these fields are intended for contextual
   * use only and do not pertain to core schema information. To ensure proper
   * integration and avoid misuse, coordination of how these fields are populated and
   * consumed is required during onboarding.
   */
  contextValues?: Array<string>;

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
   * A collection of orbital metrics for the event at the start and end times, and
   * the mean values of the primary and secondary objects, as well as the deltas
   * between the primary and secondary objects.
   */
  csoDetails?: Array<CloselyspacedobjectRetrieveResponse.CsoDetail>;

  /**
   * The tolerance value for the DeltaV, in kilometers per second.
   */
  deltaVTol?: number;

  /**
   * The threshold of the event duration in seconds.
   */
  durationThreshold?: number;

  /**
   * Timestamp representing the events end time in ISO 8601 UTC format with
   * millisecond precision.
   */
  eventEndTime?: string;

  /**
   * Percentage of the event interval that is within the plane tolerance specified as
   * a percent value between 0 and 100.
   */
  eventIntervalCoverage?: number;

  /**
   * Unique identifier of the record from the originating system. This field has no
   * meaning within UDL and is provided as a convenience for systems that require
   * tracking of an internal system generated ID.
   */
  extId?: string;

  /**
   * The Hohmann DeltaV (kilometers per second) is the minimum delta velocity for the
   * in-plane orbit change. The in-plane maneuvers change the semi-major axis
   * (perigee and/or apogee). It is the minimum assuming two maneuvers; a lower delta
   * velocity is possible with bi-elliptic transfers involving three maneuvers.
   */
  hohmannDeltaV?: number;

  /**
   * Optional ID of the UDL State Vector at epoch time of the actor satellite. When
   * performing a create, this id will be ignored in favor of the UDL generated id of
   * the actor state vector.
   */
  idActorSV?: string;

  /**
   * Unique identifier of the primary satellite on-orbit object, if correlated. For
   * rendezvous and proximity operations, this is the target on-orbit object. When
   * the secondary object is on the rendezvous capable list, this can be any object.
   */
  idOnOrbit1?: string;

  /**
   * Unique identifier of the secondary satellite on-orbit object, if correlated. For
   * rendezvous and proximity operations, this is the actor. When the primary object
   * is a satellite being protected on the neighborhood watch list (NWL), this can be
   * any object encroaching on the primary.
   */
  idOnOrbit2?: string;

  /**
   * Optional ID of the UDL State Vector at epoch time of the target satellite. When
   * performing a create, this id will be ignored in favor of the UDL generated id of
   * the target state vector.
   */
  idTargetSV?: string;

  /**
   * The Inclination DeltaV is the minimum delta velocity for the out-of-plane
   * change, assuming alignment of the right ascensions measured in kilometers per
   * second.
   */
  inclinationDeltaV?: number;

  /**
   * Identifies the source of the indication, if the latest event info was manually
   * input, not computed.
   */
  indicationSource?: string;

  /**
   * The tolerance value for the longitude in degrees.
   */
  lonTol?: number;

  /**
   * Maximum range (apogee and perigee differences) within the event interval
   * measured in kilometers.
   */
  maxRange?: number;

  /**
   * Minimum angle between the target's position and the projection of the actor's
   * position into the target's nominal orbit plane over the event interval measured
   * in degrees.
   */
  minPlaneSepAngle?: number;

  /**
   * Epoch time of the minimum in-plane separation angle occurrence in ISO 8601 UTC
   * format with millisecond precision.
   */
  minPlaneSepEpoch?: string;

  /**
   * Minimum range (apogee and perigee differences) within the event interval
   * measured in kilometers.
   */
  minRange?: number;

  /**
   * Timespan of satellites within the range tolerance in seconds.
   */
  minRangeAnalysisDuration?: number;

  /**
   * Epoch time of the minimum range occurrence in ISO 8601 UTC format with
   * millisecond precision.
   */
  minRangeEpoch?: string;

  /**
   * Contains other descriptive information associated with an indicated event.
   */
  notes?: string;

  /**
   * The number of oscillations within the event interval which are within the plane
   * tolerance.
   */
  numSubIntervals?: number;

  /**
   * The change in angle between the angular momentum vectors between the actor and
   * target relative to plane orientation in degrees.
   */
  orbitAlignDel?: number;

  /**
   * The tolerance value for the difference in the orbital plane measured in degrees.
   */
  orbitPlaneTol?: number;

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
   * Optional place holder for an OnOrbit ID that does not exist in UDL.
   */
  origObjectId1?: string;

  /**
   * Optional place holder for an OnOrbit ID that does not exist in UDL.
   */
  origObjectId2?: string;

  /**
   * The threshold of the event range in kilometers.
   */
  rangeThreshold?: number;

  /**
   * The tolerance value for the range in kilometers.
   */
  rangeTol?: number;

  /**
   * Indicates the relative position vector of the event occurrence measured in
   * kilometers.
   */
  relPos?: Array<number>;

  /**
   * Range of closest approach: relative position magnitude, in kilometers, of the
   * difference in the physical position between the actor and target objects.
   */
  relPosMag?: number;

  /**
   * Indicates the closure rate specified as a relative velocity magnitude in
   * kilometers per second of the difference in the velocities between the actor and
   * target objects.
   */
  relSpeedMag?: number;

  /**
   * Indicates the relative velocity vector of the event occurrence measured in
   * kilometers per second.
   */
  relVel?: Array<number>;

  /**
   * Satellite/catalog number of the target on-orbit primary object.
   */
  satNo1?: number;

  /**
   * Satellite/catalog number of the target on-orbit secondary object.
   */
  satNo2?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The tolerance value for the optimal longitude for station-keeping in degrees.
   */
  stationLimLonTol?: number;

  /**
   * State vector epoch time of the target satellite in ISO 8601 UTC format with
   * millisecond precision.
   */
  targetSVEpoch?: string;

  /**
   * The Total DeltaV is the sum of the Hohmann and Inclination DeltaVs measured in
   * kilometers per second.
   */
  totalDeltaV?: number;
}

export namespace CloselyspacedobjectRetrieveResponse {
  /**
   * A collection of orbital metrics for the event at the start and end times, and
   * the mean values of the primary and secondary objects, as well as the deltas
   * between the primary and secondary objects.
   */
  export interface CsoDetail {
    /**
     * The type of object event the metrics apply. Values consist of START, END, MEAN.
     */
    objectEvent: string;

    /**
     * The type of the object for which the metrics apply. Values include PRIMARY,
     * SECONDARY, DELTA.
     */
    objectType: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The orbit point furthest from the center of the earth in kilometers.
     */
    apogee?: number;

    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking?: string;

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
    dataMode?: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * Unique identifier of the parent CSO record, auto-populated by the system.
     */
    idCSO?: string;

    /**
     * The angle between the equator and the orbit when looking from the center of the
     * Earth in degrees from 0 to 180.
     */
    inclination?: number;

    /**
     * The longitude degree of the object measured in degrees from -180 to 180.
     */
    longitude?: number;

    /**
     * The orbit point nearest to the center of the earth in kilometers.
     */
    perigee?: number;
  }
}

export type CloselyspacedobjectCountResponse = string;

export interface CloselyspacedobjectQueryHelpResponse {
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

export type CloselyspacedobjectTupleResponse =
  Array<CloselyspacedobjectTupleResponse.CloselyspacedobjectTupleResponseItem>;

export namespace CloselyspacedobjectTupleResponse {
  /**
   * This collection of services provides operations for manipulating and querying of
   * closely spaced objects (on orbit) operations including docking, rendezvous,
   * proximity and reporting of payload zone engagements observed and characterized
   * over a period of time.
   */
  export interface CloselyspacedobjectTupleResponseItem {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicates the current state that characterizes Closely Spaced Objects (CSO)
     * analysis steps and conclusions. Values include: ACTIVE, ACTUAL, CANCELED,
     * CLOSED, COMPLETED, DETECTED, INDICATED, PENDING, PLANNED, POSSIBLE, PREDICTED,
     * SEPARATED, UPDATED.
     */
    csoState: string;

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
     * Timestamp representing the events start time in ISO 8601 UTC format with
     * millisecond precision.
     */
    eventStartTime: string;

    /**
     * The type of event associated with this record. Values include: DOCK, UNDOCK,
     * SEPARATION, RENDEZVOUS, PROXIMITY, PEZ, WEZ.
     */
    eventType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * State vector epoch time of the actor satellite in ISO 8601 UTC format with
     * millisecond precision.
     */
    actorSVEpoch?: string;

    /**
     * Timespan of the rendezvous analysis in seconds.
     */
    analysisDuration?: number;

    /**
     * Epoch time of the beginning of the analysis period in ISO 8601 UTC format with
     * millisecond precision.
     */
    analysisEpoch?: string;

    /**
     * Computation type, values (e.g. PLANARALIGNMENT, LONGITUDE).
     */
    compType?: string;

    /**
     * An optional string array containing additional data (keys) representing relevant
     * items for context of fields not specifically defined in this schema. This array
     * is paired with the contextValues string array and must contain the same number
     * of items. Please note these fields are intended for contextual use only and do
     * not pertain to core schema information. To ensure proper integration and avoid
     * misuse, coordination of how these fields are populated and consumed is required
     * during onboarding.
     */
    contextKeys?: Array<string>;

    /**
     * An optional string array containing the values associated with the contextKeys
     * array. This array is paired with the contextKeys string array and must contain
     * the same number of items. Please note these fields are intended for contextual
     * use only and do not pertain to core schema information. To ensure proper
     * integration and avoid misuse, coordination of how these fields are populated and
     * consumed is required during onboarding.
     */
    contextValues?: Array<string>;

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
     * A collection of orbital metrics for the event at the start and end times, and
     * the mean values of the primary and secondary objects, as well as the deltas
     * between the primary and secondary objects.
     */
    csoDetails?: Array<CloselyspacedobjectTupleResponseItem.CsoDetail>;

    /**
     * The tolerance value for the DeltaV, in kilometers per second.
     */
    deltaVTol?: number;

    /**
     * The threshold of the event duration in seconds.
     */
    durationThreshold?: number;

    /**
     * Timestamp representing the events end time in ISO 8601 UTC format with
     * millisecond precision.
     */
    eventEndTime?: string;

    /**
     * Percentage of the event interval that is within the plane tolerance specified as
     * a percent value between 0 and 100.
     */
    eventIntervalCoverage?: number;

    /**
     * Unique identifier of the record from the originating system. This field has no
     * meaning within UDL and is provided as a convenience for systems that require
     * tracking of an internal system generated ID.
     */
    extId?: string;

    /**
     * The Hohmann DeltaV (kilometers per second) is the minimum delta velocity for the
     * in-plane orbit change. The in-plane maneuvers change the semi-major axis
     * (perigee and/or apogee). It is the minimum assuming two maneuvers; a lower delta
     * velocity is possible with bi-elliptic transfers involving three maneuvers.
     */
    hohmannDeltaV?: number;

    /**
     * Optional ID of the UDL State Vector at epoch time of the actor satellite. When
     * performing a create, this id will be ignored in favor of the UDL generated id of
     * the actor state vector.
     */
    idActorSV?: string;

    /**
     * Unique identifier of the primary satellite on-orbit object, if correlated. For
     * rendezvous and proximity operations, this is the target on-orbit object. When
     * the secondary object is on the rendezvous capable list, this can be any object.
     */
    idOnOrbit1?: string;

    /**
     * Unique identifier of the secondary satellite on-orbit object, if correlated. For
     * rendezvous and proximity operations, this is the actor. When the primary object
     * is a satellite being protected on the neighborhood watch list (NWL), this can be
     * any object encroaching on the primary.
     */
    idOnOrbit2?: string;

    /**
     * Optional ID of the UDL State Vector at epoch time of the target satellite. When
     * performing a create, this id will be ignored in favor of the UDL generated id of
     * the target state vector.
     */
    idTargetSV?: string;

    /**
     * The Inclination DeltaV is the minimum delta velocity for the out-of-plane
     * change, assuming alignment of the right ascensions measured in kilometers per
     * second.
     */
    inclinationDeltaV?: number;

    /**
     * Identifies the source of the indication, if the latest event info was manually
     * input, not computed.
     */
    indicationSource?: string;

    /**
     * The tolerance value for the longitude in degrees.
     */
    lonTol?: number;

    /**
     * Maximum range (apogee and perigee differences) within the event interval
     * measured in kilometers.
     */
    maxRange?: number;

    /**
     * Minimum angle between the target's position and the projection of the actor's
     * position into the target's nominal orbit plane over the event interval measured
     * in degrees.
     */
    minPlaneSepAngle?: number;

    /**
     * Epoch time of the minimum in-plane separation angle occurrence in ISO 8601 UTC
     * format with millisecond precision.
     */
    minPlaneSepEpoch?: string;

    /**
     * Minimum range (apogee and perigee differences) within the event interval
     * measured in kilometers.
     */
    minRange?: number;

    /**
     * Timespan of satellites within the range tolerance in seconds.
     */
    minRangeAnalysisDuration?: number;

    /**
     * Epoch time of the minimum range occurrence in ISO 8601 UTC format with
     * millisecond precision.
     */
    minRangeEpoch?: string;

    /**
     * Contains other descriptive information associated with an indicated event.
     */
    notes?: string;

    /**
     * The number of oscillations within the event interval which are within the plane
     * tolerance.
     */
    numSubIntervals?: number;

    /**
     * The change in angle between the angular momentum vectors between the actor and
     * target relative to plane orientation in degrees.
     */
    orbitAlignDel?: number;

    /**
     * The tolerance value for the difference in the orbital plane measured in degrees.
     */
    orbitPlaneTol?: number;

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
     * Optional place holder for an OnOrbit ID that does not exist in UDL.
     */
    origObjectId1?: string;

    /**
     * Optional place holder for an OnOrbit ID that does not exist in UDL.
     */
    origObjectId2?: string;

    /**
     * The threshold of the event range in kilometers.
     */
    rangeThreshold?: number;

    /**
     * The tolerance value for the range in kilometers.
     */
    rangeTol?: number;

    /**
     * Indicates the relative position vector of the event occurrence measured in
     * kilometers.
     */
    relPos?: Array<number>;

    /**
     * Range of closest approach: relative position magnitude, in kilometers, of the
     * difference in the physical position between the actor and target objects.
     */
    relPosMag?: number;

    /**
     * Indicates the closure rate specified as a relative velocity magnitude in
     * kilometers per second of the difference in the velocities between the actor and
     * target objects.
     */
    relSpeedMag?: number;

    /**
     * Indicates the relative velocity vector of the event occurrence measured in
     * kilometers per second.
     */
    relVel?: Array<number>;

    /**
     * Satellite/catalog number of the target on-orbit primary object.
     */
    satNo1?: number;

    /**
     * Satellite/catalog number of the target on-orbit secondary object.
     */
    satNo2?: number;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * The tolerance value for the optimal longitude for station-keeping in degrees.
     */
    stationLimLonTol?: number;

    /**
     * State vector epoch time of the target satellite in ISO 8601 UTC format with
     * millisecond precision.
     */
    targetSVEpoch?: string;

    /**
     * The Total DeltaV is the sum of the Hohmann and Inclination DeltaVs measured in
     * kilometers per second.
     */
    totalDeltaV?: number;
  }

  export namespace CloselyspacedobjectTupleResponseItem {
    /**
     * A collection of orbital metrics for the event at the start and end times, and
     * the mean values of the primary and secondary objects, as well as the deltas
     * between the primary and secondary objects.
     */
    export interface CsoDetail {
      /**
       * The type of object event the metrics apply. Values consist of START, END, MEAN.
       */
      objectEvent: string;

      /**
       * The type of the object for which the metrics apply. Values include PRIMARY,
       * SECONDARY, DELTA.
       */
      objectType: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * The orbit point furthest from the center of the earth in kilometers.
       */
      apogee?: number;

      /**
       * Classification marking of the data in IC/CAPCO Portion-marked format.
       */
      classificationMarking?: string;

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
      dataMode?: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

      /**
       * Unique identifier of the parent CSO record, auto-populated by the system.
       */
      idCSO?: string;

      /**
       * The angle between the equator and the orbit when looking from the center of the
       * Earth in degrees from 0 to 180.
       */
      inclination?: number;

      /**
       * The longitude degree of the object measured in degrees from -180 to 180.
       */
      longitude?: number;

      /**
       * The orbit point nearest to the center of the earth in kilometers.
       */
      perigee?: number;
    }
  }
}

export interface CloselyspacedobjectCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicates the current state that characterizes Closely Spaced Objects (CSO)
   * analysis steps and conclusions. Values include: ACTIVE, ACTUAL, CANCELED,
   * CLOSED, COMPLETED, DETECTED, INDICATED, PENDING, PLANNED, POSSIBLE, PREDICTED,
   * SEPARATED, UPDATED.
   */
  csoState: string;

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
   * Timestamp representing the events start time in ISO 8601 UTC format with
   * millisecond precision.
   */
  eventStartTime: string;

  /**
   * The type of event associated with this record. Values include: DOCK, UNDOCK,
   * SEPARATION, RENDEZVOUS, PROXIMITY, PEZ, WEZ.
   */
  eventType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * State vector epoch time of the actor satellite in ISO 8601 UTC format with
   * millisecond precision.
   */
  actorSVEpoch?: string;

  /**
   * Timespan of the rendezvous analysis in seconds.
   */
  analysisDuration?: number;

  /**
   * Epoch time of the beginning of the analysis period in ISO 8601 UTC format with
   * millisecond precision.
   */
  analysisEpoch?: string;

  /**
   * Computation type, values (e.g. PLANARALIGNMENT, LONGITUDE).
   */
  compType?: string;

  /**
   * An optional string array containing additional data (keys) representing relevant
   * items for context of fields not specifically defined in this schema. This array
   * is paired with the contextValues string array and must contain the same number
   * of items. Please note these fields are intended for contextual use only and do
   * not pertain to core schema information. To ensure proper integration and avoid
   * misuse, coordination of how these fields are populated and consumed is required
   * during onboarding.
   */
  contextKeys?: Array<string>;

  /**
   * An optional string array containing the values associated with the contextKeys
   * array. This array is paired with the contextKeys string array and must contain
   * the same number of items. Please note these fields are intended for contextual
   * use only and do not pertain to core schema information. To ensure proper
   * integration and avoid misuse, coordination of how these fields are populated and
   * consumed is required during onboarding.
   */
  contextValues?: Array<string>;

  /**
   * A collection of orbital metrics for the event at the start and end times, and
   * the mean values of the primary and secondary objects, as well as the deltas
   * between the primary and secondary objects.
   */
  csoDetails?: Array<CloselyspacedobjectCreateParams.CsoDetail>;

  /**
   * The tolerance value for the DeltaV, in kilometers per second.
   */
  deltaVTol?: number;

  /**
   * The threshold of the event duration in seconds.
   */
  durationThreshold?: number;

  /**
   * Timestamp representing the events end time in ISO 8601 UTC format with
   * millisecond precision.
   */
  eventEndTime?: string;

  /**
   * Percentage of the event interval that is within the plane tolerance specified as
   * a percent value between 0 and 100.
   */
  eventIntervalCoverage?: number;

  /**
   * Unique identifier of the record from the originating system. This field has no
   * meaning within UDL and is provided as a convenience for systems that require
   * tracking of an internal system generated ID.
   */
  extId?: string;

  /**
   * The Hohmann DeltaV (kilometers per second) is the minimum delta velocity for the
   * in-plane orbit change. The in-plane maneuvers change the semi-major axis
   * (perigee and/or apogee). It is the minimum assuming two maneuvers; a lower delta
   * velocity is possible with bi-elliptic transfers involving three maneuvers.
   */
  hohmannDeltaV?: number;

  /**
   * Optional ID of the UDL State Vector at epoch time of the actor satellite. When
   * performing a create, this id will be ignored in favor of the UDL generated id of
   * the actor state vector.
   */
  idActorSV?: string;

  /**
   * Unique identifier of the primary satellite on-orbit object, if correlated. For
   * rendezvous and proximity operations, this is the target on-orbit object. When
   * the secondary object is on the rendezvous capable list, this can be any object.
   */
  idOnOrbit1?: string;

  /**
   * Unique identifier of the secondary satellite on-orbit object, if correlated. For
   * rendezvous and proximity operations, this is the actor. When the primary object
   * is a satellite being protected on the neighborhood watch list (NWL), this can be
   * any object encroaching on the primary.
   */
  idOnOrbit2?: string;

  /**
   * Optional ID of the UDL State Vector at epoch time of the target satellite. When
   * performing a create, this id will be ignored in favor of the UDL generated id of
   * the target state vector.
   */
  idTargetSV?: string;

  /**
   * The Inclination DeltaV is the minimum delta velocity for the out-of-plane
   * change, assuming alignment of the right ascensions measured in kilometers per
   * second.
   */
  inclinationDeltaV?: number;

  /**
   * Identifies the source of the indication, if the latest event info was manually
   * input, not computed.
   */
  indicationSource?: string;

  /**
   * The tolerance value for the longitude in degrees.
   */
  lonTol?: number;

  /**
   * Maximum range (apogee and perigee differences) within the event interval
   * measured in kilometers.
   */
  maxRange?: number;

  /**
   * Minimum angle between the target's position and the projection of the actor's
   * position into the target's nominal orbit plane over the event interval measured
   * in degrees.
   */
  minPlaneSepAngle?: number;

  /**
   * Epoch time of the minimum in-plane separation angle occurrence in ISO 8601 UTC
   * format with millisecond precision.
   */
  minPlaneSepEpoch?: string;

  /**
   * Minimum range (apogee and perigee differences) within the event interval
   * measured in kilometers.
   */
  minRange?: number;

  /**
   * Timespan of satellites within the range tolerance in seconds.
   */
  minRangeAnalysisDuration?: number;

  /**
   * Epoch time of the minimum range occurrence in ISO 8601 UTC format with
   * millisecond precision.
   */
  minRangeEpoch?: string;

  /**
   * Contains other descriptive information associated with an indicated event.
   */
  notes?: string;

  /**
   * The number of oscillations within the event interval which are within the plane
   * tolerance.
   */
  numSubIntervals?: number;

  /**
   * The change in angle between the angular momentum vectors between the actor and
   * target relative to plane orientation in degrees.
   */
  orbitAlignDel?: number;

  /**
   * The tolerance value for the difference in the orbital plane measured in degrees.
   */
  orbitPlaneTol?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional place holder for an OnOrbit ID that does not exist in UDL.
   */
  origObjectId1?: string;

  /**
   * Optional place holder for an OnOrbit ID that does not exist in UDL.
   */
  origObjectId2?: string;

  /**
   * The threshold of the event range in kilometers.
   */
  rangeThreshold?: number;

  /**
   * The tolerance value for the range in kilometers.
   */
  rangeTol?: number;

  /**
   * Indicates the relative position vector of the event occurrence measured in
   * kilometers.
   */
  relPos?: Array<number>;

  /**
   * Range of closest approach: relative position magnitude, in kilometers, of the
   * difference in the physical position between the actor and target objects.
   */
  relPosMag?: number;

  /**
   * Indicates the closure rate specified as a relative velocity magnitude in
   * kilometers per second of the difference in the velocities between the actor and
   * target objects.
   */
  relSpeedMag?: number;

  /**
   * Indicates the relative velocity vector of the event occurrence measured in
   * kilometers per second.
   */
  relVel?: Array<number>;

  /**
   * Satellite/catalog number of the target on-orbit primary object.
   */
  satNo1?: number;

  /**
   * Satellite/catalog number of the target on-orbit secondary object.
   */
  satNo2?: number;

  /**
   * The tolerance value for the optimal longitude for station-keeping in degrees.
   */
  stationLimLonTol?: number;

  /**
   * State vector epoch time of the target satellite in ISO 8601 UTC format with
   * millisecond precision.
   */
  targetSVEpoch?: string;

  /**
   * The Total DeltaV is the sum of the Hohmann and Inclination DeltaVs measured in
   * kilometers per second.
   */
  totalDeltaV?: number;
}

export namespace CloselyspacedobjectCreateParams {
  /**
   * A collection of orbital metrics for the event at the start and end times, and
   * the mean values of the primary and secondary objects, as well as the deltas
   * between the primary and secondary objects.
   */
  export interface CsoDetail {
    /**
     * The type of object event the metrics apply. Values consist of START, END, MEAN.
     */
    objectEvent: string;

    /**
     * The type of the object for which the metrics apply. Values include PRIMARY,
     * SECONDARY, DELTA.
     */
    objectType: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The orbit point furthest from the center of the earth in kilometers.
     */
    apogee?: number;

    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking?: string;

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
    dataMode?: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * Unique identifier of the parent CSO record, auto-populated by the system.
     */
    idCSO?: string;

    /**
     * The angle between the equator and the orbit when looking from the center of the
     * Earth in degrees from 0 to 180.
     */
    inclination?: number;

    /**
     * The longitude degree of the object measured in degrees from -180 to 180.
     */
    longitude?: number;

    /**
     * The orbit point nearest to the center of the earth in kilometers.
     */
    perigee?: number;
  }
}

export interface CloselyspacedobjectRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface CloselyspacedobjectListParams extends OffsetPageParams {
  /**
   * Timestamp representing the events start time in ISO 8601 UTC format with
   * millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  eventStartTime: string;
}

export interface CloselyspacedobjectCountParams {
  /**
   * Timestamp representing the events start time in ISO 8601 UTC format with
   * millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  eventStartTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface CloselyspacedobjectCreateBulkParams {
  body: Array<CloselyspacedobjectCreateBulkParams.Body>;
}

export namespace CloselyspacedobjectCreateBulkParams {
  /**
   * This collection of services provides operations for manipulating and querying of
   * closely spaced objects (on orbit) operations including docking, rendezvous,
   * proximity and reporting of payload zone engagements observed and characterized
   * over a period of time.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicates the current state that characterizes Closely Spaced Objects (CSO)
     * analysis steps and conclusions. Values include: ACTIVE, ACTUAL, CANCELED,
     * CLOSED, COMPLETED, DETECTED, INDICATED, PENDING, PLANNED, POSSIBLE, PREDICTED,
     * SEPARATED, UPDATED.
     */
    csoState: string;

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
     * Timestamp representing the events start time in ISO 8601 UTC format with
     * millisecond precision.
     */
    eventStartTime: string;

    /**
     * The type of event associated with this record. Values include: DOCK, UNDOCK,
     * SEPARATION, RENDEZVOUS, PROXIMITY, PEZ, WEZ.
     */
    eventType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * State vector epoch time of the actor satellite in ISO 8601 UTC format with
     * millisecond precision.
     */
    actorSVEpoch?: string;

    /**
     * Timespan of the rendezvous analysis in seconds.
     */
    analysisDuration?: number;

    /**
     * Epoch time of the beginning of the analysis period in ISO 8601 UTC format with
     * millisecond precision.
     */
    analysisEpoch?: string;

    /**
     * Computation type, values (e.g. PLANARALIGNMENT, LONGITUDE).
     */
    compType?: string;

    /**
     * An optional string array containing additional data (keys) representing relevant
     * items for context of fields not specifically defined in this schema. This array
     * is paired with the contextValues string array and must contain the same number
     * of items. Please note these fields are intended for contextual use only and do
     * not pertain to core schema information. To ensure proper integration and avoid
     * misuse, coordination of how these fields are populated and consumed is required
     * during onboarding.
     */
    contextKeys?: Array<string>;

    /**
     * An optional string array containing the values associated with the contextKeys
     * array. This array is paired with the contextKeys string array and must contain
     * the same number of items. Please note these fields are intended for contextual
     * use only and do not pertain to core schema information. To ensure proper
     * integration and avoid misuse, coordination of how these fields are populated and
     * consumed is required during onboarding.
     */
    contextValues?: Array<string>;

    /**
     * A collection of orbital metrics for the event at the start and end times, and
     * the mean values of the primary and secondary objects, as well as the deltas
     * between the primary and secondary objects.
     */
    csoDetails?: Array<Body.CsoDetail>;

    /**
     * The tolerance value for the DeltaV, in kilometers per second.
     */
    deltaVTol?: number;

    /**
     * The threshold of the event duration in seconds.
     */
    durationThreshold?: number;

    /**
     * Timestamp representing the events end time in ISO 8601 UTC format with
     * millisecond precision.
     */
    eventEndTime?: string;

    /**
     * Percentage of the event interval that is within the plane tolerance specified as
     * a percent value between 0 and 100.
     */
    eventIntervalCoverage?: number;

    /**
     * Unique identifier of the record from the originating system. This field has no
     * meaning within UDL and is provided as a convenience for systems that require
     * tracking of an internal system generated ID.
     */
    extId?: string;

    /**
     * The Hohmann DeltaV (kilometers per second) is the minimum delta velocity for the
     * in-plane orbit change. The in-plane maneuvers change the semi-major axis
     * (perigee and/or apogee). It is the minimum assuming two maneuvers; a lower delta
     * velocity is possible with bi-elliptic transfers involving three maneuvers.
     */
    hohmannDeltaV?: number;

    /**
     * Optional ID of the UDL State Vector at epoch time of the actor satellite. When
     * performing a create, this id will be ignored in favor of the UDL generated id of
     * the actor state vector.
     */
    idActorSV?: string;

    /**
     * Unique identifier of the primary satellite on-orbit object, if correlated. For
     * rendezvous and proximity operations, this is the target on-orbit object. When
     * the secondary object is on the rendezvous capable list, this can be any object.
     */
    idOnOrbit1?: string;

    /**
     * Unique identifier of the secondary satellite on-orbit object, if correlated. For
     * rendezvous and proximity operations, this is the actor. When the primary object
     * is a satellite being protected on the neighborhood watch list (NWL), this can be
     * any object encroaching on the primary.
     */
    idOnOrbit2?: string;

    /**
     * Optional ID of the UDL State Vector at epoch time of the target satellite. When
     * performing a create, this id will be ignored in favor of the UDL generated id of
     * the target state vector.
     */
    idTargetSV?: string;

    /**
     * The Inclination DeltaV is the minimum delta velocity for the out-of-plane
     * change, assuming alignment of the right ascensions measured in kilometers per
     * second.
     */
    inclinationDeltaV?: number;

    /**
     * Identifies the source of the indication, if the latest event info was manually
     * input, not computed.
     */
    indicationSource?: string;

    /**
     * The tolerance value for the longitude in degrees.
     */
    lonTol?: number;

    /**
     * Maximum range (apogee and perigee differences) within the event interval
     * measured in kilometers.
     */
    maxRange?: number;

    /**
     * Minimum angle between the target's position and the projection of the actor's
     * position into the target's nominal orbit plane over the event interval measured
     * in degrees.
     */
    minPlaneSepAngle?: number;

    /**
     * Epoch time of the minimum in-plane separation angle occurrence in ISO 8601 UTC
     * format with millisecond precision.
     */
    minPlaneSepEpoch?: string;

    /**
     * Minimum range (apogee and perigee differences) within the event interval
     * measured in kilometers.
     */
    minRange?: number;

    /**
     * Timespan of satellites within the range tolerance in seconds.
     */
    minRangeAnalysisDuration?: number;

    /**
     * Epoch time of the minimum range occurrence in ISO 8601 UTC format with
     * millisecond precision.
     */
    minRangeEpoch?: string;

    /**
     * Contains other descriptive information associated with an indicated event.
     */
    notes?: string;

    /**
     * The number of oscillations within the event interval which are within the plane
     * tolerance.
     */
    numSubIntervals?: number;

    /**
     * The change in angle between the angular momentum vectors between the actor and
     * target relative to plane orientation in degrees.
     */
    orbitAlignDel?: number;

    /**
     * The tolerance value for the difference in the orbital plane measured in degrees.
     */
    orbitPlaneTol?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional place holder for an OnOrbit ID that does not exist in UDL.
     */
    origObjectId1?: string;

    /**
     * Optional place holder for an OnOrbit ID that does not exist in UDL.
     */
    origObjectId2?: string;

    /**
     * The threshold of the event range in kilometers.
     */
    rangeThreshold?: number;

    /**
     * The tolerance value for the range in kilometers.
     */
    rangeTol?: number;

    /**
     * Indicates the relative position vector of the event occurrence measured in
     * kilometers.
     */
    relPos?: Array<number>;

    /**
     * Range of closest approach: relative position magnitude, in kilometers, of the
     * difference in the physical position between the actor and target objects.
     */
    relPosMag?: number;

    /**
     * Indicates the closure rate specified as a relative velocity magnitude in
     * kilometers per second of the difference in the velocities between the actor and
     * target objects.
     */
    relSpeedMag?: number;

    /**
     * Indicates the relative velocity vector of the event occurrence measured in
     * kilometers per second.
     */
    relVel?: Array<number>;

    /**
     * Satellite/catalog number of the target on-orbit primary object.
     */
    satNo1?: number;

    /**
     * Satellite/catalog number of the target on-orbit secondary object.
     */
    satNo2?: number;

    /**
     * The tolerance value for the optimal longitude for station-keeping in degrees.
     */
    stationLimLonTol?: number;

    /**
     * State vector epoch time of the target satellite in ISO 8601 UTC format with
     * millisecond precision.
     */
    targetSVEpoch?: string;

    /**
     * The Total DeltaV is the sum of the Hohmann and Inclination DeltaVs measured in
     * kilometers per second.
     */
    totalDeltaV?: number;
  }

  export namespace Body {
    /**
     * A collection of orbital metrics for the event at the start and end times, and
     * the mean values of the primary and secondary objects, as well as the deltas
     * between the primary and secondary objects.
     */
    export interface CsoDetail {
      /**
       * The type of object event the metrics apply. Values consist of START, END, MEAN.
       */
      objectEvent: string;

      /**
       * The type of the object for which the metrics apply. Values include PRIMARY,
       * SECONDARY, DELTA.
       */
      objectType: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * The orbit point furthest from the center of the earth in kilometers.
       */
      apogee?: number;

      /**
       * Classification marking of the data in IC/CAPCO Portion-marked format.
       */
      classificationMarking?: string;

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
      dataMode?: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

      /**
       * Unique identifier of the parent CSO record, auto-populated by the system.
       */
      idCSO?: string;

      /**
       * The angle between the equator and the orbit when looking from the center of the
       * Earth in degrees from 0 to 180.
       */
      inclination?: number;

      /**
       * The longitude degree of the object measured in degrees from -180 to 180.
       */
      longitude?: number;

      /**
       * The orbit point nearest to the center of the earth in kilometers.
       */
      perigee?: number;
    }
  }
}

export interface CloselyspacedobjectTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Timestamp representing the events start time in ISO 8601 UTC format with
   * millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  eventStartTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface CloselyspacedobjectUnvalidatedPublishParams {
  body: Array<CloselyspacedobjectUnvalidatedPublishParams.Body>;
}

export namespace CloselyspacedobjectUnvalidatedPublishParams {
  /**
   * This collection of services provides operations for manipulating and querying of
   * closely spaced objects (on orbit) operations including docking, rendezvous,
   * proximity and reporting of payload zone engagements observed and characterized
   * over a period of time.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicates the current state that characterizes Closely Spaced Objects (CSO)
     * analysis steps and conclusions. Values include: ACTIVE, ACTUAL, CANCELED,
     * CLOSED, COMPLETED, DETECTED, INDICATED, PENDING, PLANNED, POSSIBLE, PREDICTED,
     * SEPARATED, UPDATED.
     */
    csoState: string;

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
     * Timestamp representing the events start time in ISO 8601 UTC format with
     * millisecond precision.
     */
    eventStartTime: string;

    /**
     * The type of event associated with this record. Values include: DOCK, UNDOCK,
     * SEPARATION, RENDEZVOUS, PROXIMITY, PEZ, WEZ.
     */
    eventType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * State vector epoch time of the actor satellite in ISO 8601 UTC format with
     * millisecond precision.
     */
    actorSVEpoch?: string;

    /**
     * Timespan of the rendezvous analysis in seconds.
     */
    analysisDuration?: number;

    /**
     * Epoch time of the beginning of the analysis period in ISO 8601 UTC format with
     * millisecond precision.
     */
    analysisEpoch?: string;

    /**
     * Computation type, values (e.g. PLANARALIGNMENT, LONGITUDE).
     */
    compType?: string;

    /**
     * An optional string array containing additional data (keys) representing relevant
     * items for context of fields not specifically defined in this schema. This array
     * is paired with the contextValues string array and must contain the same number
     * of items. Please note these fields are intended for contextual use only and do
     * not pertain to core schema information. To ensure proper integration and avoid
     * misuse, coordination of how these fields are populated and consumed is required
     * during onboarding.
     */
    contextKeys?: Array<string>;

    /**
     * An optional string array containing the values associated with the contextKeys
     * array. This array is paired with the contextKeys string array and must contain
     * the same number of items. Please note these fields are intended for contextual
     * use only and do not pertain to core schema information. To ensure proper
     * integration and avoid misuse, coordination of how these fields are populated and
     * consumed is required during onboarding.
     */
    contextValues?: Array<string>;

    /**
     * A collection of orbital metrics for the event at the start and end times, and
     * the mean values of the primary and secondary objects, as well as the deltas
     * between the primary and secondary objects.
     */
    csoDetails?: Array<Body.CsoDetail>;

    /**
     * The tolerance value for the DeltaV, in kilometers per second.
     */
    deltaVTol?: number;

    /**
     * The threshold of the event duration in seconds.
     */
    durationThreshold?: number;

    /**
     * Timestamp representing the events end time in ISO 8601 UTC format with
     * millisecond precision.
     */
    eventEndTime?: string;

    /**
     * Percentage of the event interval that is within the plane tolerance specified as
     * a percent value between 0 and 100.
     */
    eventIntervalCoverage?: number;

    /**
     * Unique identifier of the record from the originating system. This field has no
     * meaning within UDL and is provided as a convenience for systems that require
     * tracking of an internal system generated ID.
     */
    extId?: string;

    /**
     * The Hohmann DeltaV (kilometers per second) is the minimum delta velocity for the
     * in-plane orbit change. The in-plane maneuvers change the semi-major axis
     * (perigee and/or apogee). It is the minimum assuming two maneuvers; a lower delta
     * velocity is possible with bi-elliptic transfers involving three maneuvers.
     */
    hohmannDeltaV?: number;

    /**
     * Optional ID of the UDL State Vector at epoch time of the actor satellite. When
     * performing a create, this id will be ignored in favor of the UDL generated id of
     * the actor state vector.
     */
    idActorSV?: string;

    /**
     * Unique identifier of the primary satellite on-orbit object, if correlated. For
     * rendezvous and proximity operations, this is the target on-orbit object. When
     * the secondary object is on the rendezvous capable list, this can be any object.
     */
    idOnOrbit1?: string;

    /**
     * Unique identifier of the secondary satellite on-orbit object, if correlated. For
     * rendezvous and proximity operations, this is the actor. When the primary object
     * is a satellite being protected on the neighborhood watch list (NWL), this can be
     * any object encroaching on the primary.
     */
    idOnOrbit2?: string;

    /**
     * Optional ID of the UDL State Vector at epoch time of the target satellite. When
     * performing a create, this id will be ignored in favor of the UDL generated id of
     * the target state vector.
     */
    idTargetSV?: string;

    /**
     * The Inclination DeltaV is the minimum delta velocity for the out-of-plane
     * change, assuming alignment of the right ascensions measured in kilometers per
     * second.
     */
    inclinationDeltaV?: number;

    /**
     * Identifies the source of the indication, if the latest event info was manually
     * input, not computed.
     */
    indicationSource?: string;

    /**
     * The tolerance value for the longitude in degrees.
     */
    lonTol?: number;

    /**
     * Maximum range (apogee and perigee differences) within the event interval
     * measured in kilometers.
     */
    maxRange?: number;

    /**
     * Minimum angle between the target's position and the projection of the actor's
     * position into the target's nominal orbit plane over the event interval measured
     * in degrees.
     */
    minPlaneSepAngle?: number;

    /**
     * Epoch time of the minimum in-plane separation angle occurrence in ISO 8601 UTC
     * format with millisecond precision.
     */
    minPlaneSepEpoch?: string;

    /**
     * Minimum range (apogee and perigee differences) within the event interval
     * measured in kilometers.
     */
    minRange?: number;

    /**
     * Timespan of satellites within the range tolerance in seconds.
     */
    minRangeAnalysisDuration?: number;

    /**
     * Epoch time of the minimum range occurrence in ISO 8601 UTC format with
     * millisecond precision.
     */
    minRangeEpoch?: string;

    /**
     * Contains other descriptive information associated with an indicated event.
     */
    notes?: string;

    /**
     * The number of oscillations within the event interval which are within the plane
     * tolerance.
     */
    numSubIntervals?: number;

    /**
     * The change in angle between the angular momentum vectors between the actor and
     * target relative to plane orientation in degrees.
     */
    orbitAlignDel?: number;

    /**
     * The tolerance value for the difference in the orbital plane measured in degrees.
     */
    orbitPlaneTol?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional place holder for an OnOrbit ID that does not exist in UDL.
     */
    origObjectId1?: string;

    /**
     * Optional place holder for an OnOrbit ID that does not exist in UDL.
     */
    origObjectId2?: string;

    /**
     * The threshold of the event range in kilometers.
     */
    rangeThreshold?: number;

    /**
     * The tolerance value for the range in kilometers.
     */
    rangeTol?: number;

    /**
     * Indicates the relative position vector of the event occurrence measured in
     * kilometers.
     */
    relPos?: Array<number>;

    /**
     * Range of closest approach: relative position magnitude, in kilometers, of the
     * difference in the physical position between the actor and target objects.
     */
    relPosMag?: number;

    /**
     * Indicates the closure rate specified as a relative velocity magnitude in
     * kilometers per second of the difference in the velocities between the actor and
     * target objects.
     */
    relSpeedMag?: number;

    /**
     * Indicates the relative velocity vector of the event occurrence measured in
     * kilometers per second.
     */
    relVel?: Array<number>;

    /**
     * Satellite/catalog number of the target on-orbit primary object.
     */
    satNo1?: number;

    /**
     * Satellite/catalog number of the target on-orbit secondary object.
     */
    satNo2?: number;

    /**
     * The tolerance value for the optimal longitude for station-keeping in degrees.
     */
    stationLimLonTol?: number;

    /**
     * State vector epoch time of the target satellite in ISO 8601 UTC format with
     * millisecond precision.
     */
    targetSVEpoch?: string;

    /**
     * The Total DeltaV is the sum of the Hohmann and Inclination DeltaVs measured in
     * kilometers per second.
     */
    totalDeltaV?: number;
  }

  export namespace Body {
    /**
     * A collection of orbital metrics for the event at the start and end times, and
     * the mean values of the primary and secondary objects, as well as the deltas
     * between the primary and secondary objects.
     */
    export interface CsoDetail {
      /**
       * The type of object event the metrics apply. Values consist of START, END, MEAN.
       */
      objectEvent: string;

      /**
       * The type of the object for which the metrics apply. Values include PRIMARY,
       * SECONDARY, DELTA.
       */
      objectType: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * The orbit point furthest from the center of the earth in kilometers.
       */
      apogee?: number;

      /**
       * Classification marking of the data in IC/CAPCO Portion-marked format.
       */
      classificationMarking?: string;

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
      dataMode?: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

      /**
       * Unique identifier of the parent CSO record, auto-populated by the system.
       */
      idCSO?: string;

      /**
       * The angle between the equator and the orbit when looking from the center of the
       * Earth in degrees from 0 to 180.
       */
      inclination?: number;

      /**
       * The longitude degree of the object measured in degrees from -180 to 180.
       */
      longitude?: number;

      /**
       * The orbit point nearest to the center of the earth in kilometers.
       */
      perigee?: number;
    }
  }
}

Closelyspacedobjects.History = History;

export declare namespace Closelyspacedobjects {
  export {
    type CloselyspacedobjectsAbridged as CloselyspacedobjectsAbridged,
    type CloselyspacedobjectRetrieveResponse as CloselyspacedobjectRetrieveResponse,
    type CloselyspacedobjectCountResponse as CloselyspacedobjectCountResponse,
    type CloselyspacedobjectQueryHelpResponse as CloselyspacedobjectQueryHelpResponse,
    type CloselyspacedobjectTupleResponse as CloselyspacedobjectTupleResponse,
    type CloselyspacedobjectsAbridgedsOffsetPage as CloselyspacedobjectsAbridgedsOffsetPage,
    type CloselyspacedobjectCreateParams as CloselyspacedobjectCreateParams,
    type CloselyspacedobjectRetrieveParams as CloselyspacedobjectRetrieveParams,
    type CloselyspacedobjectListParams as CloselyspacedobjectListParams,
    type CloselyspacedobjectCountParams as CloselyspacedobjectCountParams,
    type CloselyspacedobjectCreateBulkParams as CloselyspacedobjectCreateBulkParams,
    type CloselyspacedobjectTupleParams as CloselyspacedobjectTupleParams,
    type CloselyspacedobjectUnvalidatedPublishParams as CloselyspacedobjectUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListResponsesOffsetPage as HistoryListResponsesOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
