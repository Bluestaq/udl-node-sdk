// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as HistoryAPI from './udl/notification/history';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Notification extends APIResource {
  /**
   * Service operation to push a generic Notification/Alert JSON message into the
   * UDL. This operation accepts a UDL-formatted Notification JSON notification/alert
   * message. See the Notification schema for required fields such as
   * classificationMarking, msgType, etc. Messages pushed through this service may be
   * pulled via Secure Messaging and historical REST services. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  create(body: NotificationCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/notification', {
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
  list(query: NotificationListParams, options?: RequestOptions): APIPromise<NotificationListResponse> {
    return this._client.get('/udl/notification', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: NotificationCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/notification/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to push a Notification/Alert message into the UDL. This
   * operation uses query parameters to pass UDL-required fields such as
   * classificationMarking, msgType, etc and takes a raw string payload which can be
   * XML, JSON, or plain text. The preferred mechanism for posting notifications is
   * to use the standard POST which takes the proper UDL JSON Notification schema as
   * this service may convert the message in an undesirable manner. The service will
   * wrap the passed payload with the appropriate UDL JSON schema, using escape
   * characters as necessary for the payload to produce a valid JSON document. XML
   * payloads (not recommended) are automatically converted to JSON. Messages pushed
   * through this service may be pulled via Secure Messaging and historical REST
   * services. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  createRaw(params: NotificationCreateRawParams, options?: RequestOptions): APIPromise<void> {
    const { classificationMarking, dataMode, msgType, origin, source, body, msgId, tags } = params;
    return this._client.post('/udl/notification/createRaw', {
      query: { classificationMarking, dataMode, msgType, origin, source, msgId, tags },
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'text/plain', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single notification by its unique ID passed as a path
   * parameter.
   */
  get(id: string, options?: RequestOptions): APIPromise<HistoryAPI.NotificationFull> {
    return this._client.get(path`/udl/notification/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/notification/queryhelp', {
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
  tuple(query: NotificationTupleParams, options?: RequestOptions): APIPromise<NotificationTupleResponse> {
    return this._client.get('/udl/notification/tuple', { query, ...options });
  }
}

export type NotificationListResponse = Array<NotificationListResponse.NotificationListResponseItem>;

export namespace NotificationListResponse {
  /**
   * Model representation of client generated notification data. Contains a message
   * type and message body field to store notification information.
   */
  export interface NotificationListResponseItem {
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
     * The message body content as a text string, XML, JSON, etc. If JSON is used for
     * the msgBody, it should be 'inline' with the notification message JSON (without
     * quotation marks or escape characters). Size of the msg body cannot be over 1MB.
     */
    msgBody: string;

    /**
     * Source provided message type.
     */
    msgType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The date and time the notification was created, auto-generated by the system.
     */
    createdAt?: string;

    /**
     * The user that created the notification.
     */
    createdBy?: string;

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
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Optional array of provider/source specific tags for this data, used for
     * implementing data owner conditional access controls to restrict access to the
     * data.
     */
    tags?: Array<string>;
  }
}

export type NotificationCountResponse = string;

export type NotificationTupleResponse = Array<HistoryAPI.NotificationFull>;

export interface NotificationCreateParams {
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
   * The message body content as a text string, XML, JSON, etc. If JSON is used for
   * the msgBody, it should be 'inline' with the notification message JSON (without
   * quotation marks or escape characters). Size of the msg body cannot be over 1MB.
   */
  msgBody: string;

  /**
   * Source provided message type.
   */
  msgType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional array of provider/source specific tags for this data, used for
   * implementing data owner conditional access controls to restrict access to the
   * data.
   */
  tags?: Array<string>;
}

export interface NotificationListParams {
  /**
   * Time the row was created in the database. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;
}

export interface NotificationCountParams {
  /**
   * Time the row was created in the database. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;
}

export interface NotificationCreateRawParams {
  /**
   * Query param: Classification marking of the data in IC/CAPCO Portion-marked
   * format.
   */
  classificationMarking: string;

  /**
   * Query param: Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST
   * data:
   *
   * EXERCISE: Data pertaining to a government or military exercise. The data may
   * include both real and simulated data.
   *
   * REAL: Data collected or produced that pertains to real-world objects, events,
   * and analysis.
   *
   * SIMULATED: Synthetic data generated by a model to mimic real-world datasets.
   *
   * TEST: Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   */
  dataMode: string;

  /**
   * Query param: Source provided message type.
   */
  msgType: string;

  /**
   * Query param: Origin of the data.
   */
  origin: string;

  /**
   * Query param: Source of the data.
   */
  source: string;

  /**
   * Body param:
   */
  body: string;

  /**
   * Query param: Optional message identifier...if not provided an id will be
   * automatically created.
   */
  msgId?: string;

  /**
   * Query param: Optional list of provider/source specific tags for this data.
   */
  tags?: Array<string>;
}

export interface NotificationTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Time the row was created in the database. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  createdAt: string;
}

export declare namespace Notification {
  export {
    type NotificationListResponse as NotificationListResponse,
    type NotificationCountResponse as NotificationCountResponse,
    type NotificationTupleResponse as NotificationTupleResponse,
    type NotificationCreateParams as NotificationCreateParams,
    type NotificationListParams as NotificationListParams,
    type NotificationCountParams as NotificationCountParams,
    type NotificationCreateRawParams as NotificationCreateRawParams,
    type NotificationTupleParams as NotificationTupleParams,
  };
}
