// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as TupleAPI from './tuple';
import { Tuple, TupleListParams, TupleListResponse } from './tuple';
import * as HistoryAPI from './history/history';
import {
  History,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
} from './history/history';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CollectResponses extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  tuple: TupleAPI.Tuple = new TupleAPI.Tuple(this._client);

  /**
   * Service operation to take a single Collect Response object as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: CollectResponseCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/collectresponse', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Collect Response record by its unique ID
   * passed as a path parameter.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.CollectResponseFull> {
    return this._client.get(path`/udl/collectresponse/${id}`, options);
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(query: CollectResponseListParams, options?: RequestOptions): APIPromise<CollectResponseListResponse> {
    return this._client.get('/udl/collectresponse', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: CollectResponseCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/collectresponse/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * Collect Response objects as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   */
  createBulk(params: CollectResponseCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/collectresponse/createBulk', {
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
    return this._client.get('/udl/collectresponse/queryhelp', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to take a list of CollectResponse as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  unvalidatedPublish(
    params: CollectResponseUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-collectresponse', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Collect response supports the response and status of individual collect
 * requests. Each response is referenced by the UUID of the request, and contains
 * information including the status of the request, collection times and types, and
 * reference(s) to the observations collected. There may be multiple responses
 * associated with a request, either from multiple collectors or to relay status
 * changes prior to completion and delivery.
 */
export interface CollectResponseAbridged {
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
   * Unique identifier of the request associated with this response.
   */
  idRequest: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The actual end time of the collect or contact, in ISO 8601 UTC format.
   */
  actualEndTime?: string;

  /**
   * The actual start time of the collect or contact, in ISO 8601 UTC format.
   */
  actualStartTime?: string;

  /**
   * Proposed alternative end time, in ISO 8601 UTC format.
   */
  altEndTime?: string;

  /**
   * Proposed alternative start time, in ISO 8601 UTC format.
   */
  altStartTime?: string;

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
   * Error code associated with this request/response.
   */
  errCode?: string;

  /**
   * UUID from external systems. This field has no meaning within UDL and is provided
   * as a convenience for systems that require tracking of internal system generated
   * ID.
   */
  externalId?: string;

  /**
   * Unique identifier of the target on-orbit object associated with this response.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the parent plan or schedule associated with the
   * request/response.
   */
  idPlan?: string;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * Notes or comments associated with this response.
   */
  notes?: string;

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
   * Optional identifier provided by data source to indicate the target object of
   * this response. This may be an internal identifier and not necessarily a valid
   * satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the collection source to indicate the sensor
   * identifier responding to this collect or contact. This may be an internal
   * identifier and not necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Array of UUIDs of the UDL data record(s) collected in response to the associated
   * request. See the associated 'srcTyps' array for the specific types of data,
   * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size. The appropriate API operation can be used to
   * retrieve the specified object(s) (e.g. /udl/rfobservation/{uuid}).
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record type(s) (DOA, ELSET, EO, RADAR, RF, SV) collected or
   * produced in response to the associated request. See the associated 'srcIds'
   * array for the record UUIDs, positionally corresponding to the record types in
   * this array. The 'srcTyps' and 'srcIds' arrays must match in size. The
   * appropriate API operation can be used to retrieve the specified object(s) (e.g.
   * /udl/rfobservation/{uuid}).
   */
  srcTyps?: Array<string>;

  /**
   * The status of the request (ACCEPTED, CANCELLED, COLLECTED, COMPLETED, DELIVERED,
   * FAILED, PARTIAL, PROPOSED, REJECTED, SCHEDULED):
   *
   * ACCEPTED: The collect or contact request has been received and accepted.
   *
   * CANCELLED: A previously scheduled collect or contact whose execution was
   * cancelled.
   *
   * COLLECTED: The collect has been accomplished. A collected state implies that
   * additional activity is required for delivery/completion.
   *
   * COMPLETED: The collect or contact has been completed. For many systems completed
   * and delivered constitute an equivalent successful end state.
   *
   * DELIVERED: The collected observation(s) have been delivered to the requestor.
   * For many systems completed and delivered constitute an equivalent successful end
   * state. A DELIVERED state is typically used for systems that exhibit a delay
   * between collect and delivery, such as with space-based systems which require
   * ground contact to deliver observations.
   *
   * FAILED: The collect or contact was attempted and failed, or the delivery of the
   * collected observation(s) failed. A FAILED status may be accompanied by an error
   * code (errCode), if available.
   *
   * PARTIAL: A PARTIAL state indicates that a part of a multi-track request has been
   * accomplished, but the full request is incomplete. A PARTIAL status should
   * ultimately be resolved to an end state.
   *
   * PROPOSED: Indicates that the request was received and alternate collect or
   * contact time(s) (altStartTime, altEndTime) have been proposed. If an alternate
   * is accepted by the requestor the current request should be cancelled and a new
   * request created.
   *
   * REJECTED: The request has been received and rejected by the provider. A REJECTED
   * status may be accompanied by an explanation (notes) of the reason that the
   * request was rejected.
   *
   * SCHEDULED: The request was received and has been scheduled for execution.
   */
  status?: string;

  /**
   * Optional task ID associated with the request/response.
   */
  taskId?: string;
}

export type CollectResponseListResponse = Array<CollectResponseAbridged>;

export type CollectResponseCountResponse = string;

export interface CollectResponseCreateParams {
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
   * Unique identifier of the request associated with this response.
   */
  idRequest: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The actual end time of the collect or contact, in ISO 8601 UTC format.
   */
  actualEndTime?: string;

  /**
   * The actual start time of the collect or contact, in ISO 8601 UTC format.
   */
  actualStartTime?: string;

  /**
   * Proposed alternative end time, in ISO 8601 UTC format.
   */
  altEndTime?: string;

  /**
   * Proposed alternative start time, in ISO 8601 UTC format.
   */
  altStartTime?: string;

  /**
   * Error code associated with this request/response.
   */
  errCode?: string;

  /**
   * UUID from external systems. This field has no meaning within UDL and is provided
   * as a convenience for systems that require tracking of internal system generated
   * ID.
   */
  externalId?: string;

  /**
   * Unique identifier of the parent plan or schedule associated with the
   * request/response.
   */
  idPlan?: string;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * Notes or comments associated with this response.
   */
  notes?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by data source to indicate the target object of
   * this response. This may be an internal identifier and not necessarily a valid
   * satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the collection source to indicate the sensor
   * identifier responding to this collect or contact. This may be an internal
   * identifier and not necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Array of UUIDs of the UDL data record(s) collected in response to the associated
   * request. See the associated 'srcTyps' array for the specific types of data,
   * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size. The appropriate API operation can be used to
   * retrieve the specified object(s) (e.g. /udl/rfobservation/{uuid}).
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record type(s) (DOA, ELSET, EO, RADAR, RF, SV) collected or
   * produced in response to the associated request. See the associated 'srcIds'
   * array for the record UUIDs, positionally corresponding to the record types in
   * this array. The 'srcTyps' and 'srcIds' arrays must match in size. The
   * appropriate API operation can be used to retrieve the specified object(s) (e.g.
   * /udl/rfobservation/{uuid}).
   */
  srcTyps?: Array<string>;

  /**
   * The status of the request (ACCEPTED, CANCELLED, COLLECTED, COMPLETED, DELIVERED,
   * FAILED, PARTIAL, PROPOSED, REJECTED, SCHEDULED):
   *
   * ACCEPTED: The collect or contact request has been received and accepted.
   *
   * CANCELLED: A previously scheduled collect or contact whose execution was
   * cancelled.
   *
   * COLLECTED: The collect has been accomplished. A collected state implies that
   * additional activity is required for delivery/completion.
   *
   * COMPLETED: The collect or contact has been completed. For many systems completed
   * and delivered constitute an equivalent successful end state.
   *
   * DELIVERED: The collected observation(s) have been delivered to the requestor.
   * For many systems completed and delivered constitute an equivalent successful end
   * state. A DELIVERED state is typically used for systems that exhibit a delay
   * between collect and delivery, such as with space-based systems which require
   * ground contact to deliver observations.
   *
   * FAILED: The collect or contact was attempted and failed, or the delivery of the
   * collected observation(s) failed. A FAILED status may be accompanied by an error
   * code (errCode), if available.
   *
   * PARTIAL: A PARTIAL state indicates that a part of a multi-track request has been
   * accomplished, but the full request is incomplete. A PARTIAL status should
   * ultimately be resolved to an end state.
   *
   * PROPOSED: Indicates that the request was received and alternate collect or
   * contact time(s) (altStartTime, altEndTime) have been proposed. If an alternate
   * is accepted by the requestor the current request should be cancelled and a new
   * request created.
   *
   * REJECTED: The request has been received and rejected by the provider. A REJECTED
   * status may be accompanied by an explanation (notes) of the reason that the
   * request was rejected.
   *
   * SCHEDULED: The request was received and has been scheduled for execution.
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
   * Optional task ID associated with the request/response.
   */
  taskId?: string;
}

export interface CollectResponseListParams {
  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;
}

export interface CollectResponseCountParams {
  /**
   * Time the row was created in the database, auto-populated by the system.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;
}

export interface CollectResponseCreateBulkParams {
  body: Array<CollectResponseCreateBulkParams.Body>;
}

export namespace CollectResponseCreateBulkParams {
  /**
   * Collect response supports the response and status of individual collect
   * requests. Each response is referenced by the UUID of the request, and contains
   * information including the status of the request, collection times and types, and
   * reference(s) to the observations collected. There may be multiple responses
   * associated with a request, either from multiple collectors or to relay status
   * changes prior to completion and delivery.
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
     * Unique identifier of the request associated with this response.
     */
    idRequest: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The actual end time of the collect or contact, in ISO 8601 UTC format.
     */
    actualEndTime?: string;

    /**
     * The actual start time of the collect or contact, in ISO 8601 UTC format.
     */
    actualStartTime?: string;

    /**
     * Proposed alternative end time, in ISO 8601 UTC format.
     */
    altEndTime?: string;

    /**
     * Proposed alternative start time, in ISO 8601 UTC format.
     */
    altStartTime?: string;

    /**
     * Error code associated with this request/response.
     */
    errCode?: string;

    /**
     * UUID from external systems. This field has no meaning within UDL and is provided
     * as a convenience for systems that require tracking of internal system generated
     * ID.
     */
    externalId?: string;

    /**
     * Unique identifier of the parent plan or schedule associated with the
     * request/response.
     */
    idPlan?: string;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * Notes or comments associated with this response.
     */
    notes?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by data source to indicate the target object of
     * this response. This may be an internal identifier and not necessarily a valid
     * satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by the collection source to indicate the sensor
     * identifier responding to this collect or contact. This may be an internal
     * identifier and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Array of UUIDs of the UDL data record(s) collected in response to the associated
     * request. See the associated 'srcTyps' array for the specific types of data,
     * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
     * 'srcIds' arrays must match in size. The appropriate API operation can be used to
     * retrieve the specified object(s) (e.g. /udl/rfobservation/{uuid}).
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record type(s) (DOA, ELSET, EO, RADAR, RF, SV) collected or
     * produced in response to the associated request. See the associated 'srcIds'
     * array for the record UUIDs, positionally corresponding to the record types in
     * this array. The 'srcTyps' and 'srcIds' arrays must match in size. The
     * appropriate API operation can be used to retrieve the specified object(s) (e.g.
     * /udl/rfobservation/{uuid}).
     */
    srcTyps?: Array<string>;

    /**
     * The status of the request (ACCEPTED, CANCELLED, COLLECTED, COMPLETED, DELIVERED,
     * FAILED, PARTIAL, PROPOSED, REJECTED, SCHEDULED):
     *
     * ACCEPTED: The collect or contact request has been received and accepted.
     *
     * CANCELLED: A previously scheduled collect or contact whose execution was
     * cancelled.
     *
     * COLLECTED: The collect has been accomplished. A collected state implies that
     * additional activity is required for delivery/completion.
     *
     * COMPLETED: The collect or contact has been completed. For many systems completed
     * and delivered constitute an equivalent successful end state.
     *
     * DELIVERED: The collected observation(s) have been delivered to the requestor.
     * For many systems completed and delivered constitute an equivalent successful end
     * state. A DELIVERED state is typically used for systems that exhibit a delay
     * between collect and delivery, such as with space-based systems which require
     * ground contact to deliver observations.
     *
     * FAILED: The collect or contact was attempted and failed, or the delivery of the
     * collected observation(s) failed. A FAILED status may be accompanied by an error
     * code (errCode), if available.
     *
     * PARTIAL: A PARTIAL state indicates that a part of a multi-track request has been
     * accomplished, but the full request is incomplete. A PARTIAL status should
     * ultimately be resolved to an end state.
     *
     * PROPOSED: Indicates that the request was received and alternate collect or
     * contact time(s) (altStartTime, altEndTime) have been proposed. If an alternate
     * is accepted by the requestor the current request should be cancelled and a new
     * request created.
     *
     * REJECTED: The request has been received and rejected by the provider. A REJECTED
     * status may be accompanied by an explanation (notes) of the reason that the
     * request was rejected.
     *
     * SCHEDULED: The request was received and has been scheduled for execution.
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
     * Optional task ID associated with the request/response.
     */
    taskId?: string;
  }
}

export interface CollectResponseUnvalidatedPublishParams {
  body: Array<CollectResponseUnvalidatedPublishParams.Body>;
}

export namespace CollectResponseUnvalidatedPublishParams {
  /**
   * Collect response supports the response and status of individual collect
   * requests. Each response is referenced by the UUID of the request, and contains
   * information including the status of the request, collection times and types, and
   * reference(s) to the observations collected. There may be multiple responses
   * associated with a request, either from multiple collectors or to relay status
   * changes prior to completion and delivery.
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
     * Unique identifier of the request associated with this response.
     */
    idRequest: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The actual end time of the collect or contact, in ISO 8601 UTC format.
     */
    actualEndTime?: string;

    /**
     * The actual start time of the collect or contact, in ISO 8601 UTC format.
     */
    actualStartTime?: string;

    /**
     * Proposed alternative end time, in ISO 8601 UTC format.
     */
    altEndTime?: string;

    /**
     * Proposed alternative start time, in ISO 8601 UTC format.
     */
    altStartTime?: string;

    /**
     * Error code associated with this request/response.
     */
    errCode?: string;

    /**
     * UUID from external systems. This field has no meaning within UDL and is provided
     * as a convenience for systems that require tracking of internal system generated
     * ID.
     */
    externalId?: string;

    /**
     * Unique identifier of the parent plan or schedule associated with the
     * request/response.
     */
    idPlan?: string;

    /**
     * Unique identifier of the reporting sensor.
     */
    idSensor?: string;

    /**
     * Notes or comments associated with this response.
     */
    notes?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by data source to indicate the target object of
     * this response. This may be an internal identifier and not necessarily a valid
     * satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by the collection source to indicate the sensor
     * identifier responding to this collect or contact. This may be an internal
     * identifier and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Array of UUIDs of the UDL data record(s) collected in response to the associated
     * request. See the associated 'srcTyps' array for the specific types of data,
     * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
     * 'srcIds' arrays must match in size. The appropriate API operation can be used to
     * retrieve the specified object(s) (e.g. /udl/rfobservation/{uuid}).
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record type(s) (DOA, ELSET, EO, RADAR, RF, SV) collected or
     * produced in response to the associated request. See the associated 'srcIds'
     * array for the record UUIDs, positionally corresponding to the record types in
     * this array. The 'srcTyps' and 'srcIds' arrays must match in size. The
     * appropriate API operation can be used to retrieve the specified object(s) (e.g.
     * /udl/rfobservation/{uuid}).
     */
    srcTyps?: Array<string>;

    /**
     * The status of the request (ACCEPTED, CANCELLED, COLLECTED, COMPLETED, DELIVERED,
     * FAILED, PARTIAL, PROPOSED, REJECTED, SCHEDULED):
     *
     * ACCEPTED: The collect or contact request has been received and accepted.
     *
     * CANCELLED: A previously scheduled collect or contact whose execution was
     * cancelled.
     *
     * COLLECTED: The collect has been accomplished. A collected state implies that
     * additional activity is required for delivery/completion.
     *
     * COMPLETED: The collect or contact has been completed. For many systems completed
     * and delivered constitute an equivalent successful end state.
     *
     * DELIVERED: The collected observation(s) have been delivered to the requestor.
     * For many systems completed and delivered constitute an equivalent successful end
     * state. A DELIVERED state is typically used for systems that exhibit a delay
     * between collect and delivery, such as with space-based systems which require
     * ground contact to deliver observations.
     *
     * FAILED: The collect or contact was attempted and failed, or the delivery of the
     * collected observation(s) failed. A FAILED status may be accompanied by an error
     * code (errCode), if available.
     *
     * PARTIAL: A PARTIAL state indicates that a part of a multi-track request has been
     * accomplished, but the full request is incomplete. A PARTIAL status should
     * ultimately be resolved to an end state.
     *
     * PROPOSED: Indicates that the request was received and alternate collect or
     * contact time(s) (altStartTime, altEndTime) have been proposed. If an alternate
     * is accepted by the requestor the current request should be cancelled and a new
     * request created.
     *
     * REJECTED: The request has been received and rejected by the provider. A REJECTED
     * status may be accompanied by an explanation (notes) of the reason that the
     * request was rejected.
     *
     * SCHEDULED: The request was received and has been scheduled for execution.
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
     * Optional task ID associated with the request/response.
     */
    taskId?: string;
  }
}

CollectResponses.History = History;
CollectResponses.Tuple = Tuple;

export declare namespace CollectResponses {
  export {
    type CollectResponseAbridged as CollectResponseAbridged,
    type CollectResponseListResponse as CollectResponseListResponse,
    type CollectResponseCountResponse as CollectResponseCountResponse,
    type CollectResponseCreateParams as CollectResponseCreateParams,
    type CollectResponseListParams as CollectResponseListParams,
    type CollectResponseCountParams as CollectResponseCountParams,
    type CollectResponseCreateBulkParams as CollectResponseCreateBulkParams,
    type CollectResponseUnvalidatedPublishParams as CollectResponseUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };

  export {
    Tuple as Tuple,
    type TupleListResponse as TupleListResponse,
    type TupleListParams as TupleListParams,
  };
}
