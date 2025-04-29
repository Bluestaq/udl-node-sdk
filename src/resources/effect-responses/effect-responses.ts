// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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

export class EffectResponses extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single EffectResponse as a POST body and ingest into
   * the database. This operation is not intended to be used for automated feeds into
   * UDL. Data providers should contact the UDL team for specific role assignments
   * and for instructions on setting up a permanent feed through an alternate
   * mechanism.
   */
  create(body: EffectResponseCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/effectresponse', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single EffectResponse by its unique ID passed as a
   * path parameter.
   */
  retrieve(
    id: string,
    query: EffectResponseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EffectResponseRetrieveResponse> {
    return this._client.get(path`/udl/effectresponse/${id}`, { query, ...options });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(query: EffectResponseListParams, options?: RequestOptions): APIPromise<EffectResponseListResponse> {
    return this._client.get('/udl/effectresponse', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: EffectResponseCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/effectresponse/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * EffectResponse records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   */
  createBulk(params: EffectResponseCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/effectresponse/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryHelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/effectresponse/queryhelp', {
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
  tuple(query: EffectResponseTupleParams, options?: RequestOptions): APIPromise<EffectResponseTupleResponse> {
    return this._client.get('/udl/effectresponse/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple EffectResponses as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  unvalidatedPublish(
    params: EffectResponseUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-effectresponse', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * A response for various effects on a target.
 */
export interface EffectResponseRetrieveResponse {
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
   * Source of the data.
   */
  source: string;

  /**
   * The type of response in this record (e.g. COA, SCORECARD, etc.).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * List of actions associated with this effect response.
   */
  actionsList?: Array<EffectResponseRetrieveResponse.ActionsList>;

  /**
   * The record ID, depending on the type identified in actorSrcType, of the
   * requested asset.
   */
  actorSrcId?: string;

  /**
   * The source type of the asset/actor identifier (AIRCRAFT, LANDCRAFT, SEACRAFT,
   * TRACK).
   */
  actorSrcType?: string;

  /**
   * List of COA metrics associated with this effect response.
   */
  coaMetrics?: Array<EffectResponseRetrieveResponse.CoaMetric>;

  /**
   * The collateral damage estimate (CDE) of the munition being fired.
   */
  collateralDamageEst?: number;

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
   * The deadline time to accept this COA before it's no longer valid, in ISO8601 UTC
   * format.
   */
  decisionDeadline?: string;

  /**
   * List of external actions to be executed as part of this task.
   */
  externalActions?: Array<string>;

  /**
   * The external system identifier of the associated effect request. A human
   * readable unique id.
   */
  externalRequestId?: string;

  /**
   * Unique identifier of the EffectRequest associated with this response.
   */
  idEffectRequest?: string;

  /**
   * Unique identifier of the munition.
   */
  munitionId?: string;

  /**
   * The type of munition being fired.
   */
  munitionType?: string;

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
   * The probability of kill (0-1) of the target being destroyed.
   */
  probabilityOfKill?: number;

  /**
   * The record ID, depending on the type identified in redTargetSrcType, of the red
   * force target. If the redTargetSrcType is POI or TRACK, then this identifier
   * corresponds to either poi.poiid or track.trkId from their respective schemas.
   */
  redTargetSrcId?: string;

  /**
   * The source type of the targetId identifier (POI, SITE, TRACK).
   */
  redTargetSrcType?: string;

  /**
   * The time to overhead for the red force to be over their target, in ISO8601 UTC
   * format.
   */
  redTimeToOverhead?: string;

  /**
   * The number of shots required to destroy target.
   */
  shotsRequired?: number;
}

export namespace EffectResponseRetrieveResponse {
  export interface ActionsList {
    /**
     * The record ID, depending on the type identified in actorSrcType, of the
     * requested asset/actor.
     */
    actionActorSrcId?: string;

    /**
     * The source type of the asset/actor identifier (AIRCRAFT, LANDCRAFT, SEACRAFT,
     * TRACK).
     */
    actionActorSrcType?: string;

    /**
     * The desired end time of this task, in ISO8601 UTC format.
     */
    actionEndTime?: string;

    /**
     * Identifier of this action.
     */
    actionId?: string;

    /**
     * List of metrics associated with this action.
     */
    actionMetrics?: Array<ActionsList.ActionMetric>;

    /**
     * The desired start time of this task, in ISO8601 UTC format.
     */
    actionStartTime?: string;

    /**
     * The WGS-84 altitude of the asset/actor location at weapon launch, in meters.
     */
    actorInterceptAlt?: number;

    /**
     * The WGS-84 latitude of the asset/actor location at weapon launch, in degrees.
     * -90 to 90 degrees (negative values south of equator).
     */
    actorInterceptLat?: number;

    /**
     * The WGS-84 longitude of the asset/actor location at weapon launch, in degrees.
     * -180 to 180 degrees (negative values west of Prime Meridian).
     */
    actorInterceptLon?: number;

    /**
     * The type of munition or sensor used by this asset/actor.
     */
    effector?: string;

    /**
     * A summary string describing different aspects of the action.
     */
    summary?: string;

    /**
     * The POI or TRACK ID, depending on the type identified in targetSrcType, of the
     * requested target. This identifier corresponds to either poi.poiid or track.trkId
     * from their respective schemas.
     */
    targetSrcId?: string;

    /**
     * The source type of the targetId identifier (POI, TRACK).
     */
    targetSrcType?: string;

    /**
     * The end time of the asset TOT (time over target), in ISO8601 UTC format.
     */
    totEndTime?: string;

    /**
     * The start time of the asset TOT (time over target), in ISO8601 UTC format.
     */
    totStartTime?: string;

    /**
     * The WGS-84 altitude of the weapon destination location, in meters.
     */
    weaponInterceptAlt?: number;

    /**
     * The WGS-84 latitude of the weapon destination location, in degrees. -90 to 90
     * degrees (negative values south of equator).
     */
    weaponInterceptLat?: number;

    /**
     * The WGS-84 longitude of the weapon destination location, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian).
     */
    weaponInterceptLon?: number;
  }

  export namespace ActionsList {
    export interface ActionMetric {
      /**
       * The metric score specific to its domain.
       */
      domainValue?: number;

      /**
       * The type of the metric (e.g. CollateralDamage, GoalAchievement, OpportunityCost,
       * Timeliness, Unavailable, etc.).
       */
      metricType?: string;

      /**
       * The metric that was used to score this task.
       */
      provenance?: string;

      /**
       * The metric score adjusted to be relative and comparable to other domains.
       */
      relativeValue?: number;
    }
  }

  export interface CoaMetric {
    /**
     * The metric score specific to its domain.
     */
    domainValue?: number;

    /**
     * The type of the metric (e.g. CollateralDamage, GoalAchievement, OpportunityCost,
     * Timeliness, Unavailable, etc.).
     */
    metricType?: string;

    /**
     * The metric that was used to score this task.
     */
    provenance?: string;

    /**
     * The metric score adjusted to be relative and comparable to other domains.
     */
    relativeValue?: number;
  }
}

export type EffectResponseListResponse = Array<EffectResponseListResponse.EffectResponseListResponseItem>;

export namespace EffectResponseListResponse {
  /**
   * A response for various effects on a target.
   */
  export interface EffectResponseListResponseItem {
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
     * Source of the data.
     */
    source: string;

    /**
     * The type of response in this record (e.g. COA, SCORECARD, etc.).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * List of actions associated with this effect response.
     */
    actionsList?: Array<EffectResponseListResponseItem.ActionsList>;

    /**
     * The record ID, depending on the type identified in actorSrcType, of the
     * requested asset.
     */
    actorSrcId?: string;

    /**
     * The source type of the asset/actor identifier (AIRCRAFT, LANDCRAFT, SEACRAFT,
     * TRACK).
     */
    actorSrcType?: string;

    /**
     * List of COA metrics associated with this effect response.
     */
    coaMetrics?: Array<EffectResponseListResponseItem.CoaMetric>;

    /**
     * The collateral damage estimate (CDE) of the munition being fired.
     */
    collateralDamageEst?: number;

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
     * The deadline time to accept this COA before it's no longer valid, in ISO8601 UTC
     * format.
     */
    decisionDeadline?: string;

    /**
     * List of external actions to be executed as part of this task.
     */
    externalActions?: Array<string>;

    /**
     * The external system identifier of the associated effect request. A human
     * readable unique id.
     */
    externalRequestId?: string;

    /**
     * Unique identifier of the EffectRequest associated with this response.
     */
    idEffectRequest?: string;

    /**
     * Unique identifier of the munition.
     */
    munitionId?: string;

    /**
     * The type of munition being fired.
     */
    munitionType?: string;

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
     * The probability of kill (0-1) of the target being destroyed.
     */
    probabilityOfKill?: number;

    /**
     * The record ID, depending on the type identified in redTargetSrcType, of the red
     * force target. If the redTargetSrcType is POI or TRACK, then this identifier
     * corresponds to either poi.poiid or track.trkId from their respective schemas.
     */
    redTargetSrcId?: string;

    /**
     * The source type of the targetId identifier (POI, SITE, TRACK).
     */
    redTargetSrcType?: string;

    /**
     * The time to overhead for the red force to be over their target, in ISO8601 UTC
     * format.
     */
    redTimeToOverhead?: string;

    /**
     * The number of shots required to destroy target.
     */
    shotsRequired?: number;
  }

  export namespace EffectResponseListResponseItem {
    export interface ActionsList {
      /**
       * The record ID, depending on the type identified in actorSrcType, of the
       * requested asset/actor.
       */
      actionActorSrcId?: string;

      /**
       * The source type of the asset/actor identifier (AIRCRAFT, LANDCRAFT, SEACRAFT,
       * TRACK).
       */
      actionActorSrcType?: string;

      /**
       * The desired end time of this task, in ISO8601 UTC format.
       */
      actionEndTime?: string;

      /**
       * Identifier of this action.
       */
      actionId?: string;

      /**
       * List of metrics associated with this action.
       */
      actionMetrics?: Array<ActionsList.ActionMetric>;

      /**
       * The desired start time of this task, in ISO8601 UTC format.
       */
      actionStartTime?: string;

      /**
       * The WGS-84 altitude of the asset/actor location at weapon launch, in meters.
       */
      actorInterceptAlt?: number;

      /**
       * The WGS-84 latitude of the asset/actor location at weapon launch, in degrees.
       * -90 to 90 degrees (negative values south of equator).
       */
      actorInterceptLat?: number;

      /**
       * The WGS-84 longitude of the asset/actor location at weapon launch, in degrees.
       * -180 to 180 degrees (negative values west of Prime Meridian).
       */
      actorInterceptLon?: number;

      /**
       * The type of munition or sensor used by this asset/actor.
       */
      effector?: string;

      /**
       * A summary string describing different aspects of the action.
       */
      summary?: string;

      /**
       * The POI or TRACK ID, depending on the type identified in targetSrcType, of the
       * requested target. This identifier corresponds to either poi.poiid or track.trkId
       * from their respective schemas.
       */
      targetSrcId?: string;

      /**
       * The source type of the targetId identifier (POI, TRACK).
       */
      targetSrcType?: string;

      /**
       * The end time of the asset TOT (time over target), in ISO8601 UTC format.
       */
      totEndTime?: string;

      /**
       * The start time of the asset TOT (time over target), in ISO8601 UTC format.
       */
      totStartTime?: string;

      /**
       * The WGS-84 altitude of the weapon destination location, in meters.
       */
      weaponInterceptAlt?: number;

      /**
       * The WGS-84 latitude of the weapon destination location, in degrees. -90 to 90
       * degrees (negative values south of equator).
       */
      weaponInterceptLat?: number;

      /**
       * The WGS-84 longitude of the weapon destination location, in degrees. -180 to 180
       * degrees (negative values west of Prime Meridian).
       */
      weaponInterceptLon?: number;
    }

    export namespace ActionsList {
      export interface ActionMetric {
        /**
         * The metric score specific to its domain.
         */
        domainValue?: number;

        /**
         * The type of the metric (e.g. CollateralDamage, GoalAchievement, OpportunityCost,
         * Timeliness, Unavailable, etc.).
         */
        metricType?: string;

        /**
         * The metric that was used to score this task.
         */
        provenance?: string;

        /**
         * The metric score adjusted to be relative and comparable to other domains.
         */
        relativeValue?: number;
      }
    }

    export interface CoaMetric {
      /**
       * The metric score specific to its domain.
       */
      domainValue?: number;

      /**
       * The type of the metric (e.g. CollateralDamage, GoalAchievement, OpportunityCost,
       * Timeliness, Unavailable, etc.).
       */
      metricType?: string;

      /**
       * The metric that was used to score this task.
       */
      provenance?: string;

      /**
       * The metric score adjusted to be relative and comparable to other domains.
       */
      relativeValue?: number;
    }
  }
}

export type EffectResponseCountResponse = string;

export type EffectResponseTupleResponse = Array<EffectResponseTupleResponse.EffectResponseTupleResponseItem>;

export namespace EffectResponseTupleResponse {
  /**
   * A response for various effects on a target.
   */
  export interface EffectResponseTupleResponseItem {
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
     * Source of the data.
     */
    source: string;

    /**
     * The type of response in this record (e.g. COA, SCORECARD, etc.).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * List of actions associated with this effect response.
     */
    actionsList?: Array<EffectResponseTupleResponseItem.ActionsList>;

    /**
     * The record ID, depending on the type identified in actorSrcType, of the
     * requested asset.
     */
    actorSrcId?: string;

    /**
     * The source type of the asset/actor identifier (AIRCRAFT, LANDCRAFT, SEACRAFT,
     * TRACK).
     */
    actorSrcType?: string;

    /**
     * List of COA metrics associated with this effect response.
     */
    coaMetrics?: Array<EffectResponseTupleResponseItem.CoaMetric>;

    /**
     * The collateral damage estimate (CDE) of the munition being fired.
     */
    collateralDamageEst?: number;

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
     * The deadline time to accept this COA before it's no longer valid, in ISO8601 UTC
     * format.
     */
    decisionDeadline?: string;

    /**
     * List of external actions to be executed as part of this task.
     */
    externalActions?: Array<string>;

    /**
     * The external system identifier of the associated effect request. A human
     * readable unique id.
     */
    externalRequestId?: string;

    /**
     * Unique identifier of the EffectRequest associated with this response.
     */
    idEffectRequest?: string;

    /**
     * Unique identifier of the munition.
     */
    munitionId?: string;

    /**
     * The type of munition being fired.
     */
    munitionType?: string;

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
     * The probability of kill (0-1) of the target being destroyed.
     */
    probabilityOfKill?: number;

    /**
     * The record ID, depending on the type identified in redTargetSrcType, of the red
     * force target. If the redTargetSrcType is POI or TRACK, then this identifier
     * corresponds to either poi.poiid or track.trkId from their respective schemas.
     */
    redTargetSrcId?: string;

    /**
     * The source type of the targetId identifier (POI, SITE, TRACK).
     */
    redTargetSrcType?: string;

    /**
     * The time to overhead for the red force to be over their target, in ISO8601 UTC
     * format.
     */
    redTimeToOverhead?: string;

    /**
     * The number of shots required to destroy target.
     */
    shotsRequired?: number;
  }

  export namespace EffectResponseTupleResponseItem {
    export interface ActionsList {
      /**
       * The record ID, depending on the type identified in actorSrcType, of the
       * requested asset/actor.
       */
      actionActorSrcId?: string;

      /**
       * The source type of the asset/actor identifier (AIRCRAFT, LANDCRAFT, SEACRAFT,
       * TRACK).
       */
      actionActorSrcType?: string;

      /**
       * The desired end time of this task, in ISO8601 UTC format.
       */
      actionEndTime?: string;

      /**
       * Identifier of this action.
       */
      actionId?: string;

      /**
       * List of metrics associated with this action.
       */
      actionMetrics?: Array<ActionsList.ActionMetric>;

      /**
       * The desired start time of this task, in ISO8601 UTC format.
       */
      actionStartTime?: string;

      /**
       * The WGS-84 altitude of the asset/actor location at weapon launch, in meters.
       */
      actorInterceptAlt?: number;

      /**
       * The WGS-84 latitude of the asset/actor location at weapon launch, in degrees.
       * -90 to 90 degrees (negative values south of equator).
       */
      actorInterceptLat?: number;

      /**
       * The WGS-84 longitude of the asset/actor location at weapon launch, in degrees.
       * -180 to 180 degrees (negative values west of Prime Meridian).
       */
      actorInterceptLon?: number;

      /**
       * The type of munition or sensor used by this asset/actor.
       */
      effector?: string;

      /**
       * A summary string describing different aspects of the action.
       */
      summary?: string;

      /**
       * The POI or TRACK ID, depending on the type identified in targetSrcType, of the
       * requested target. This identifier corresponds to either poi.poiid or track.trkId
       * from their respective schemas.
       */
      targetSrcId?: string;

      /**
       * The source type of the targetId identifier (POI, TRACK).
       */
      targetSrcType?: string;

      /**
       * The end time of the asset TOT (time over target), in ISO8601 UTC format.
       */
      totEndTime?: string;

      /**
       * The start time of the asset TOT (time over target), in ISO8601 UTC format.
       */
      totStartTime?: string;

      /**
       * The WGS-84 altitude of the weapon destination location, in meters.
       */
      weaponInterceptAlt?: number;

      /**
       * The WGS-84 latitude of the weapon destination location, in degrees. -90 to 90
       * degrees (negative values south of equator).
       */
      weaponInterceptLat?: number;

      /**
       * The WGS-84 longitude of the weapon destination location, in degrees. -180 to 180
       * degrees (negative values west of Prime Meridian).
       */
      weaponInterceptLon?: number;
    }

    export namespace ActionsList {
      export interface ActionMetric {
        /**
         * The metric score specific to its domain.
         */
        domainValue?: number;

        /**
         * The type of the metric (e.g. CollateralDamage, GoalAchievement, OpportunityCost,
         * Timeliness, Unavailable, etc.).
         */
        metricType?: string;

        /**
         * The metric that was used to score this task.
         */
        provenance?: string;

        /**
         * The metric score adjusted to be relative and comparable to other domains.
         */
        relativeValue?: number;
      }
    }

    export interface CoaMetric {
      /**
       * The metric score specific to its domain.
       */
      domainValue?: number;

      /**
       * The type of the metric (e.g. CollateralDamage, GoalAchievement, OpportunityCost,
       * Timeliness, Unavailable, etc.).
       */
      metricType?: string;

      /**
       * The metric that was used to score this task.
       */
      provenance?: string;

      /**
       * The metric score adjusted to be relative and comparable to other domains.
       */
      relativeValue?: number;
    }
  }
}

export interface EffectResponseCreateParams {
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
   * Source of the data.
   */
  source: string;

  /**
   * The type of response in this record (e.g. COA, SCORECARD, etc.).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * List of actions associated with this effect response.
   */
  actionsList?: Array<EffectResponseCreateParams.ActionsList>;

  /**
   * The record ID, depending on the type identified in actorSrcType, of the
   * requested asset.
   */
  actorSrcId?: string;

  /**
   * The source type of the asset/actor identifier (AIRCRAFT, LANDCRAFT, SEACRAFT,
   * TRACK).
   */
  actorSrcType?: string;

  /**
   * List of COA metrics associated with this effect response.
   */
  coaMetrics?: Array<EffectResponseCreateParams.CoaMetric>;

  /**
   * The collateral damage estimate (CDE) of the munition being fired.
   */
  collateralDamageEst?: number;

  /**
   * The deadline time to accept this COA before it's no longer valid, in ISO8601 UTC
   * format.
   */
  decisionDeadline?: string;

  /**
   * List of external actions to be executed as part of this task.
   */
  externalActions?: Array<string>;

  /**
   * The external system identifier of the associated effect request. A human
   * readable unique id.
   */
  externalRequestId?: string;

  /**
   * Unique identifier of the EffectRequest associated with this response.
   */
  idEffectRequest?: string;

  /**
   * Unique identifier of the munition.
   */
  munitionId?: string;

  /**
   * The type of munition being fired.
   */
  munitionType?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The probability of kill (0-1) of the target being destroyed.
   */
  probabilityOfKill?: number;

  /**
   * The record ID, depending on the type identified in redTargetSrcType, of the red
   * force target. If the redTargetSrcType is POI or TRACK, then this identifier
   * corresponds to either poi.poiid or track.trkId from their respective schemas.
   */
  redTargetSrcId?: string;

  /**
   * The source type of the targetId identifier (POI, SITE, TRACK).
   */
  redTargetSrcType?: string;

  /**
   * The time to overhead for the red force to be over their target, in ISO8601 UTC
   * format.
   */
  redTimeToOverhead?: string;

  /**
   * The number of shots required to destroy target.
   */
  shotsRequired?: number;
}

export namespace EffectResponseCreateParams {
  export interface ActionsList {
    /**
     * The record ID, depending on the type identified in actorSrcType, of the
     * requested asset/actor.
     */
    actionActorSrcId?: string;

    /**
     * The source type of the asset/actor identifier (AIRCRAFT, LANDCRAFT, SEACRAFT,
     * TRACK).
     */
    actionActorSrcType?: string;

    /**
     * The desired end time of this task, in ISO8601 UTC format.
     */
    actionEndTime?: string;

    /**
     * Identifier of this action.
     */
    actionId?: string;

    /**
     * List of metrics associated with this action.
     */
    actionMetrics?: Array<ActionsList.ActionMetric>;

    /**
     * The desired start time of this task, in ISO8601 UTC format.
     */
    actionStartTime?: string;

    /**
     * The WGS-84 altitude of the asset/actor location at weapon launch, in meters.
     */
    actorInterceptAlt?: number;

    /**
     * The WGS-84 latitude of the asset/actor location at weapon launch, in degrees.
     * -90 to 90 degrees (negative values south of equator).
     */
    actorInterceptLat?: number;

    /**
     * The WGS-84 longitude of the asset/actor location at weapon launch, in degrees.
     * -180 to 180 degrees (negative values west of Prime Meridian).
     */
    actorInterceptLon?: number;

    /**
     * The type of munition or sensor used by this asset/actor.
     */
    effector?: string;

    /**
     * A summary string describing different aspects of the action.
     */
    summary?: string;

    /**
     * The POI or TRACK ID, depending on the type identified in targetSrcType, of the
     * requested target. This identifier corresponds to either poi.poiid or track.trkId
     * from their respective schemas.
     */
    targetSrcId?: string;

    /**
     * The source type of the targetId identifier (POI, TRACK).
     */
    targetSrcType?: string;

    /**
     * The end time of the asset TOT (time over target), in ISO8601 UTC format.
     */
    totEndTime?: string;

    /**
     * The start time of the asset TOT (time over target), in ISO8601 UTC format.
     */
    totStartTime?: string;

    /**
     * The WGS-84 altitude of the weapon destination location, in meters.
     */
    weaponInterceptAlt?: number;

    /**
     * The WGS-84 latitude of the weapon destination location, in degrees. -90 to 90
     * degrees (negative values south of equator).
     */
    weaponInterceptLat?: number;

    /**
     * The WGS-84 longitude of the weapon destination location, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian).
     */
    weaponInterceptLon?: number;
  }

  export namespace ActionsList {
    export interface ActionMetric {
      /**
       * The metric score specific to its domain.
       */
      domainValue?: number;

      /**
       * The type of the metric (e.g. CollateralDamage, GoalAchievement, OpportunityCost,
       * Timeliness, Unavailable, etc.).
       */
      metricType?: string;

      /**
       * The metric that was used to score this task.
       */
      provenance?: string;

      /**
       * The metric score adjusted to be relative and comparable to other domains.
       */
      relativeValue?: number;
    }
  }

  export interface CoaMetric {
    /**
     * The metric score specific to its domain.
     */
    domainValue?: number;

    /**
     * The type of the metric (e.g. CollateralDamage, GoalAchievement, OpportunityCost,
     * Timeliness, Unavailable, etc.).
     */
    metricType?: string;

    /**
     * The metric that was used to score this task.
     */
    provenance?: string;

    /**
     * The metric score adjusted to be relative and comparable to other domains.
     */
    relativeValue?: number;
  }
}

export interface EffectResponseRetrieveParams {
  firstResult?: number;

  maxResult?: number;
}

export interface EffectResponseListParams {
  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;

  firstResult?: number;

  maxResult?: number;
}

export interface EffectResponseCountParams {
  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;

  firstResult?: number;

  maxResult?: number;
}

export interface EffectResponseCreateBulkParams {
  body: Array<EffectResponseCreateBulkParams.Body>;
}

export namespace EffectResponseCreateBulkParams {
  /**
   * A response for various effects on a target.
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
     * Source of the data.
     */
    source: string;

    /**
     * The type of response in this record (e.g. COA, SCORECARD, etc.).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * List of actions associated with this effect response.
     */
    actionsList?: Array<Body.ActionsList>;

    /**
     * The record ID, depending on the type identified in actorSrcType, of the
     * requested asset.
     */
    actorSrcId?: string;

    /**
     * The source type of the asset/actor identifier (AIRCRAFT, LANDCRAFT, SEACRAFT,
     * TRACK).
     */
    actorSrcType?: string;

    /**
     * List of COA metrics associated with this effect response.
     */
    coaMetrics?: Array<Body.CoaMetric>;

    /**
     * The collateral damage estimate (CDE) of the munition being fired.
     */
    collateralDamageEst?: number;

    /**
     * The deadline time to accept this COA before it's no longer valid, in ISO8601 UTC
     * format.
     */
    decisionDeadline?: string;

    /**
     * List of external actions to be executed as part of this task.
     */
    externalActions?: Array<string>;

    /**
     * The external system identifier of the associated effect request. A human
     * readable unique id.
     */
    externalRequestId?: string;

    /**
     * Unique identifier of the EffectRequest associated with this response.
     */
    idEffectRequest?: string;

    /**
     * Unique identifier of the munition.
     */
    munitionId?: string;

    /**
     * The type of munition being fired.
     */
    munitionType?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The probability of kill (0-1) of the target being destroyed.
     */
    probabilityOfKill?: number;

    /**
     * The record ID, depending on the type identified in redTargetSrcType, of the red
     * force target. If the redTargetSrcType is POI or TRACK, then this identifier
     * corresponds to either poi.poiid or track.trkId from their respective schemas.
     */
    redTargetSrcId?: string;

    /**
     * The source type of the targetId identifier (POI, SITE, TRACK).
     */
    redTargetSrcType?: string;

    /**
     * The time to overhead for the red force to be over their target, in ISO8601 UTC
     * format.
     */
    redTimeToOverhead?: string;

    /**
     * The number of shots required to destroy target.
     */
    shotsRequired?: number;
  }

  export namespace Body {
    export interface ActionsList {
      /**
       * The record ID, depending on the type identified in actorSrcType, of the
       * requested asset/actor.
       */
      actionActorSrcId?: string;

      /**
       * The source type of the asset/actor identifier (AIRCRAFT, LANDCRAFT, SEACRAFT,
       * TRACK).
       */
      actionActorSrcType?: string;

      /**
       * The desired end time of this task, in ISO8601 UTC format.
       */
      actionEndTime?: string;

      /**
       * Identifier of this action.
       */
      actionId?: string;

      /**
       * List of metrics associated with this action.
       */
      actionMetrics?: Array<ActionsList.ActionMetric>;

      /**
       * The desired start time of this task, in ISO8601 UTC format.
       */
      actionStartTime?: string;

      /**
       * The WGS-84 altitude of the asset/actor location at weapon launch, in meters.
       */
      actorInterceptAlt?: number;

      /**
       * The WGS-84 latitude of the asset/actor location at weapon launch, in degrees.
       * -90 to 90 degrees (negative values south of equator).
       */
      actorInterceptLat?: number;

      /**
       * The WGS-84 longitude of the asset/actor location at weapon launch, in degrees.
       * -180 to 180 degrees (negative values west of Prime Meridian).
       */
      actorInterceptLon?: number;

      /**
       * The type of munition or sensor used by this asset/actor.
       */
      effector?: string;

      /**
       * A summary string describing different aspects of the action.
       */
      summary?: string;

      /**
       * The POI or TRACK ID, depending on the type identified in targetSrcType, of the
       * requested target. This identifier corresponds to either poi.poiid or track.trkId
       * from their respective schemas.
       */
      targetSrcId?: string;

      /**
       * The source type of the targetId identifier (POI, TRACK).
       */
      targetSrcType?: string;

      /**
       * The end time of the asset TOT (time over target), in ISO8601 UTC format.
       */
      totEndTime?: string;

      /**
       * The start time of the asset TOT (time over target), in ISO8601 UTC format.
       */
      totStartTime?: string;

      /**
       * The WGS-84 altitude of the weapon destination location, in meters.
       */
      weaponInterceptAlt?: number;

      /**
       * The WGS-84 latitude of the weapon destination location, in degrees. -90 to 90
       * degrees (negative values south of equator).
       */
      weaponInterceptLat?: number;

      /**
       * The WGS-84 longitude of the weapon destination location, in degrees. -180 to 180
       * degrees (negative values west of Prime Meridian).
       */
      weaponInterceptLon?: number;
    }

    export namespace ActionsList {
      export interface ActionMetric {
        /**
         * The metric score specific to its domain.
         */
        domainValue?: number;

        /**
         * The type of the metric (e.g. CollateralDamage, GoalAchievement, OpportunityCost,
         * Timeliness, Unavailable, etc.).
         */
        metricType?: string;

        /**
         * The metric that was used to score this task.
         */
        provenance?: string;

        /**
         * The metric score adjusted to be relative and comparable to other domains.
         */
        relativeValue?: number;
      }
    }

    export interface CoaMetric {
      /**
       * The metric score specific to its domain.
       */
      domainValue?: number;

      /**
       * The type of the metric (e.g. CollateralDamage, GoalAchievement, OpportunityCost,
       * Timeliness, Unavailable, etc.).
       */
      metricType?: string;

      /**
       * The metric that was used to score this task.
       */
      provenance?: string;

      /**
       * The metric score adjusted to be relative and comparable to other domains.
       */
      relativeValue?: number;
    }
  }
}

export interface EffectResponseTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;

  firstResult?: number;

  maxResult?: number;
}

export interface EffectResponseUnvalidatedPublishParams {
  body: Array<EffectResponseUnvalidatedPublishParams.Body>;
}

export namespace EffectResponseUnvalidatedPublishParams {
  /**
   * A response for various effects on a target.
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
     * Source of the data.
     */
    source: string;

    /**
     * The type of response in this record (e.g. COA, SCORECARD, etc.).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * List of actions associated with this effect response.
     */
    actionsList?: Array<Body.ActionsList>;

    /**
     * The record ID, depending on the type identified in actorSrcType, of the
     * requested asset.
     */
    actorSrcId?: string;

    /**
     * The source type of the asset/actor identifier (AIRCRAFT, LANDCRAFT, SEACRAFT,
     * TRACK).
     */
    actorSrcType?: string;

    /**
     * List of COA metrics associated with this effect response.
     */
    coaMetrics?: Array<Body.CoaMetric>;

    /**
     * The collateral damage estimate (CDE) of the munition being fired.
     */
    collateralDamageEst?: number;

    /**
     * The deadline time to accept this COA before it's no longer valid, in ISO8601 UTC
     * format.
     */
    decisionDeadline?: string;

    /**
     * List of external actions to be executed as part of this task.
     */
    externalActions?: Array<string>;

    /**
     * The external system identifier of the associated effect request. A human
     * readable unique id.
     */
    externalRequestId?: string;

    /**
     * Unique identifier of the EffectRequest associated with this response.
     */
    idEffectRequest?: string;

    /**
     * Unique identifier of the munition.
     */
    munitionId?: string;

    /**
     * The type of munition being fired.
     */
    munitionType?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The probability of kill (0-1) of the target being destroyed.
     */
    probabilityOfKill?: number;

    /**
     * The record ID, depending on the type identified in redTargetSrcType, of the red
     * force target. If the redTargetSrcType is POI or TRACK, then this identifier
     * corresponds to either poi.poiid or track.trkId from their respective schemas.
     */
    redTargetSrcId?: string;

    /**
     * The source type of the targetId identifier (POI, SITE, TRACK).
     */
    redTargetSrcType?: string;

    /**
     * The time to overhead for the red force to be over their target, in ISO8601 UTC
     * format.
     */
    redTimeToOverhead?: string;

    /**
     * The number of shots required to destroy target.
     */
    shotsRequired?: number;
  }

  export namespace Body {
    export interface ActionsList {
      /**
       * The record ID, depending on the type identified in actorSrcType, of the
       * requested asset/actor.
       */
      actionActorSrcId?: string;

      /**
       * The source type of the asset/actor identifier (AIRCRAFT, LANDCRAFT, SEACRAFT,
       * TRACK).
       */
      actionActorSrcType?: string;

      /**
       * The desired end time of this task, in ISO8601 UTC format.
       */
      actionEndTime?: string;

      /**
       * Identifier of this action.
       */
      actionId?: string;

      /**
       * List of metrics associated with this action.
       */
      actionMetrics?: Array<ActionsList.ActionMetric>;

      /**
       * The desired start time of this task, in ISO8601 UTC format.
       */
      actionStartTime?: string;

      /**
       * The WGS-84 altitude of the asset/actor location at weapon launch, in meters.
       */
      actorInterceptAlt?: number;

      /**
       * The WGS-84 latitude of the asset/actor location at weapon launch, in degrees.
       * -90 to 90 degrees (negative values south of equator).
       */
      actorInterceptLat?: number;

      /**
       * The WGS-84 longitude of the asset/actor location at weapon launch, in degrees.
       * -180 to 180 degrees (negative values west of Prime Meridian).
       */
      actorInterceptLon?: number;

      /**
       * The type of munition or sensor used by this asset/actor.
       */
      effector?: string;

      /**
       * A summary string describing different aspects of the action.
       */
      summary?: string;

      /**
       * The POI or TRACK ID, depending on the type identified in targetSrcType, of the
       * requested target. This identifier corresponds to either poi.poiid or track.trkId
       * from their respective schemas.
       */
      targetSrcId?: string;

      /**
       * The source type of the targetId identifier (POI, TRACK).
       */
      targetSrcType?: string;

      /**
       * The end time of the asset TOT (time over target), in ISO8601 UTC format.
       */
      totEndTime?: string;

      /**
       * The start time of the asset TOT (time over target), in ISO8601 UTC format.
       */
      totStartTime?: string;

      /**
       * The WGS-84 altitude of the weapon destination location, in meters.
       */
      weaponInterceptAlt?: number;

      /**
       * The WGS-84 latitude of the weapon destination location, in degrees. -90 to 90
       * degrees (negative values south of equator).
       */
      weaponInterceptLat?: number;

      /**
       * The WGS-84 longitude of the weapon destination location, in degrees. -180 to 180
       * degrees (negative values west of Prime Meridian).
       */
      weaponInterceptLon?: number;
    }

    export namespace ActionsList {
      export interface ActionMetric {
        /**
         * The metric score specific to its domain.
         */
        domainValue?: number;

        /**
         * The type of the metric (e.g. CollateralDamage, GoalAchievement, OpportunityCost,
         * Timeliness, Unavailable, etc.).
         */
        metricType?: string;

        /**
         * The metric that was used to score this task.
         */
        provenance?: string;

        /**
         * The metric score adjusted to be relative and comparable to other domains.
         */
        relativeValue?: number;
      }
    }

    export interface CoaMetric {
      /**
       * The metric score specific to its domain.
       */
      domainValue?: number;

      /**
       * The type of the metric (e.g. CollateralDamage, GoalAchievement, OpportunityCost,
       * Timeliness, Unavailable, etc.).
       */
      metricType?: string;

      /**
       * The metric that was used to score this task.
       */
      provenance?: string;

      /**
       * The metric score adjusted to be relative and comparable to other domains.
       */
      relativeValue?: number;
    }
  }
}

EffectResponses.History = History;

export declare namespace EffectResponses {
  export {
    type EffectResponseRetrieveResponse as EffectResponseRetrieveResponse,
    type EffectResponseListResponse as EffectResponseListResponse,
    type EffectResponseCountResponse as EffectResponseCountResponse,
    type EffectResponseTupleResponse as EffectResponseTupleResponse,
    type EffectResponseCreateParams as EffectResponseCreateParams,
    type EffectResponseRetrieveParams as EffectResponseRetrieveParams,
    type EffectResponseListParams as EffectResponseListParams,
    type EffectResponseCountParams as EffectResponseCountParams,
    type EffectResponseCreateBulkParams as EffectResponseCreateBulkParams,
    type EffectResponseTupleParams as EffectResponseTupleParams,
    type EffectResponseUnvalidatedPublishParams as EffectResponseUnvalidatedPublishParams,
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
