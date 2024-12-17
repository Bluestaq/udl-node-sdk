// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HistoryAPI from './history';
import { History, HistoryAodrParams, HistoryListParams, HistoryListResponse } from './history';
import * as EffectRequestsEffectRequestsAPI from '../mission-ops/effect-requests/effect-requests';

export class EffectRequests extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to get a single EffectRequest by its unique ID passed as a
   * path parameter.
   */
  retrieve(
    params: EffectRequestRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EffectRequestsEffectRequestsAPI.EffectRequest> {
    const { path_id, body_id } = params;
    return this._client.get(`/udl/effectrequest/${path_id}`, options);
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(params: EffectRequestCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { createdAt } = params;
    return this._client.get('/udl/effectrequest/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * EffectRequest records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   */
  createBulk(body: EffectRequestCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/effectrequest/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  historyCount(
    params: EffectRequestHistoryCountParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    const { createdAt } = params;
    return this._client.get('/udl/effectrequest/history/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryHelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/effectrequest/queryhelp', {
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
    params: EffectRequestTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EffectRequestTupleResponse> {
    const { columns, createdAt } = params;
    return this._client.get('/udl/effectrequest/tuple', options);
  }
}

export type EffectRequestCountResponse = string;

export type EffectRequestHistoryCountResponse = string;

export type EffectRequestTupleResponse = Array<EffectRequestsEffectRequestsAPI.EffectRequest>;

export interface EffectRequestRetrieveParams {
  /**
   * Path param:
   */
  path_id: string;

  /**
   * Body param: The ID of the EffectRequest to retrieve.
   */
  body_id: string;
}

export interface EffectRequestCountParams {
  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;
}

export type EffectRequestCreateBulkParams = Array<EffectRequestCreateBulkParams.Body>;

export namespace EffectRequestCreateBulkParams {
  /**
   * A request for various effects on a target.
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
     * List of effects to be achieved on the target (e.g. COVER, DECEIVE, DEGRADE,
     * DENY, DESTROY, DISRUPT, DIVERSION, DIVERT, FIX, INSPECT, INTERCEPT, ISOLATE,
     * MANIPULATE, NEUTRALIZE, SHADOW, SUPPRESS, etc.). The effects included in this
     * list are connected by implied AND.
     */
    effectList: Array<string>;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Specific descriptive instantiation of the effect, e.g., playbook to be used.
     */
    context?: string;

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
     * The indicator of deadline of the bid request (e.g. BETWEEN, IMMEDIATE,
     * NOEARLIERTHAN, NOLATERTHAN, etc.): BETWEEN:&nbsp;Produce effect any time between
     * the given start and end times, equal penalty for being early or late
     * IMMEDIATE:&nbsp;Start as soon as possible, earlier is always better
     * NOEARLIERTHAN:&nbsp;Produce effect at this time or later. Large penalty for
     * being earlier, no reward for being later NOLATERTHAN:&nbsp;Produce effect no
     * later than the given startTime. Large penalty for being later, no reward for
     * being even earlier as long as the effect starts by the given time.
     */
    deadlineType?: string;

    /**
     * The time the effect should end, in ISO8601 UTC format.
     */
    endTime?: string;

    /**
     * The extenal system identifier of this request. A human readable unique id.
     */
    externalRequestId?: string;

    /**
     * Array of the the metric classes to be evaluated (e.g. Cost, GoalAchievement,
     * OpportunityCost, Risk, Timeliness, Unavailable, etc.). See the associated
     * 'metricWeights' array for the weighting values, positionally corresponding to
     * these types. The 'metricTypes' and 'metricWeights' arrays must match in size.
     */
    metricTypes?: Array<string>;

    /**
     * Array of the weights for the metric in the final evaluation score. Normalized (0
     * to 1). See the associated 'metricTypes' array for the metric classes,
     * positionally corresponding to these values. The 'metricTypes' and
     * 'metricWeights' arrays must match in size.
     */
    metricWeights?: Array<number>;

    /**
     * The type or class of the preference model used to evaluate this offer.
     */
    modelClass?: string;

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
     * The priority (LOW, MEDIUM, HIGH) of this request.
     */
    priority?: string;

    /**
     * The time the effect should start, in ISO8601 UTC format.
     */
    startTime?: string;

    /**
     * State of this effect request (e.g. CREATED, UPDATED, DELETED, etc.).
     */
    state?: string;

    /**
     * The record ID, depending on the type identified in targetSrcType, of the
     * requested target. This identifier corresponds to either poi.poiid or track.trkId
     * from their respective schemas.
     */
    targetSrcId?: string;

    /**
     * The source type of the targetId identifier (POI, TRACK).
     */
    targetSrcType?: string;
  }
}

export interface EffectRequestHistoryCountParams {
  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;
}

export interface EffectRequestTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the �queryhelp� operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;
}

EffectRequests.History = History;

export declare namespace EffectRequests {
  export {
    type EffectRequestCountResponse as EffectRequestCountResponse,
    type EffectRequestHistoryCountResponse as EffectRequestHistoryCountResponse,
    type EffectRequestTupleResponse as EffectRequestTupleResponse,
    type EffectRequestRetrieveParams as EffectRequestRetrieveParams,
    type EffectRequestCountParams as EffectRequestCountParams,
    type EffectRequestCreateBulkParams as EffectRequestCreateBulkParams,
    type EffectRequestHistoryCountParams as EffectRequestHistoryCountParams,
    type EffectRequestTupleParams as EffectRequestTupleParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
  };
}
