// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class LaunchDetection extends APIResource {
  /**
   * Service operation to take a single launch detection as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchDetection.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   messageType: 'Example-Msg-Type',
   *   observationLatitude: 45.23,
   *   observationLongitude: 1.23,
   *   observationTime: '2018-01-01T16:00:00.123Z',
   *   sequenceNumber: 5,
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: LaunchDetectionCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/launchdetection', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single launch detection. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.launchDetection.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   messageType: 'Example-Msg-Type',
   *   observationLatitude: 45.23,
   *   observationLongitude: 1.23,
   *   observationTime: '2018-01-01T16:00:00.123Z',
   *   sequenceNumber: 5,
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: LaunchDetectionUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/launchdetection/${pathID}`, {
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
   * for await (const launchDetectionListResponse of client.launchDetection.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: LaunchDetectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<LaunchDetectionListResponsesOffsetPage, LaunchDetectionListResponse> {
    return this._client.getAPIList('/udl/launchdetection', OffsetPage<LaunchDetectionListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a launch detection object specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.launchDetection.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/launchdetection/${id}`, {
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
   * const response = await client.launchDetection.count();
   * ```
   */
  count(
    query: LaunchDetectionCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/launchdetection/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single launch detection record by its unique ID
   * passed as a path parameter.
   *
   * @example
   * ```ts
   * const launchDetection = await client.launchDetection.get(
   *   'id',
   * );
   * ```
   */
  get(
    id: string,
    query: LaunchDetectionGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LaunchDetectionGetResponse> {
    return this._client.get(path`/udl/launchdetection/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.launchDetection.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<LaunchDetectionQueryhelpResponse> {
    return this._client.get('/udl/launchdetection/queryhelp', options);
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
   * const response = await client.launchDetection.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(
    query: LaunchDetectionTupleParams,
    options?: RequestOptions,
  ): APIPromise<LaunchDetectionTupleResponse> {
    return this._client.get('/udl/launchdetection/tuple', { query, ...options });
  }
}

export type LaunchDetectionListResponsesOffsetPage = OffsetPage<LaunchDetectionListResponse>;

/**
 * Data to analyze launch detections.
 */
export interface LaunchDetectionListResponse {
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
   * Type of message for the data.
   */
  messageType: string;

  /**
   * Latitude of launch vehicle at observation time (in Degrees). -90 to 90 degrees
   * (negative values south of equator).
   */
  observationLatitude: number;

  /**
   * Longitude of launch vehicle at observation time (in Degrees).
   */
  observationLongitude: number;

  /**
   * Time of observation.
   */
  observationTime: string;

  /**
   * Integer indicating how messages should be sequenced for a specific event.
   */
  sequenceNumber: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Id to be able to correlate different messages to a specific event.
   */
  eventId?: string;

  /**
   * Flag indicating that the Launch azimuth is uncertain due to near vertical flight
   * path.
   */
  highZenithAzimuth?: boolean;

  /**
   * Orbit Inclination (in Degrees).
   */
  inclination?: number;

  /**
   * Angle measured clockwise from North for the launch heading (in Degrees).
   */
  launchAzimuth?: number;

  /**
   * Geodetic Latitude of launch origin (in Degrees). -90 to 90 degrees (negative
   * values south of equator).
   */
  launchLatitude?: number;

  /**
   * Geodetic Longitude of launch origin (in Degrees). -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  launchLongitude?: number;

  /**
   * Time of Launch.
   */
  launchTime?: string;

  /**
   * Altitude of launch vehicle at observation time (in KM).
   */
  observationAltitude?: number;

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
   * Orbit Right Ascension of Ascending Node (in Degrees).
   */
  raan?: number;

  /**
   * Flag indicating multiple observers were used.
   */
  stereoFlag?: boolean;

  /**
   * Read-only time the row was updated in the database, set automatically by the
   * system on update.
   */
  updatedAt?: string;

  /**
   * Application user who last updated the row in the database, set by the system
   * automatically and ignored on create/edit operations.
   */
  updatedBy?: string;
}

export type LaunchDetectionCountResponse = string;

/**
 * Data to analyze launch detections.
 */
export interface LaunchDetectionGetResponse {
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
   * Type of message for the data.
   */
  messageType: string;

  /**
   * Latitude of launch vehicle at observation time (in Degrees). -90 to 90 degrees
   * (negative values south of equator).
   */
  observationLatitude: number;

  /**
   * Longitude of launch vehicle at observation time (in Degrees).
   */
  observationLongitude: number;

  /**
   * Time of observation.
   */
  observationTime: string;

  /**
   * Integer indicating how messages should be sequenced for a specific event.
   */
  sequenceNumber: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Id to be able to correlate different messages to a specific event.
   */
  eventId?: string;

  /**
   * Flag indicating that the Launch azimuth is uncertain due to near vertical flight
   * path.
   */
  highZenithAzimuth?: boolean;

  /**
   * Orbit Inclination (in Degrees).
   */
  inclination?: number;

  /**
   * Angle measured clockwise from North for the launch heading (in Degrees).
   */
  launchAzimuth?: number;

  /**
   * Geodetic Latitude of launch origin (in Degrees). -90 to 90 degrees (negative
   * values south of equator).
   */
  launchLatitude?: number;

  /**
   * Geodetic Longitude of launch origin (in Degrees). -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  launchLongitude?: number;

  /**
   * Time of Launch.
   */
  launchTime?: string;

  /**
   * Altitude of launch vehicle at observation time (in KM).
   */
  observationAltitude?: number;

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
   * Orbit Right Ascension of Ascending Node (in Degrees).
   */
  raan?: number;

  /**
   * Flag indicating multiple observers were used.
   */
  stereoFlag?: boolean;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Read-only time the row was updated in the database, set automatically by the
   * system on update.
   */
  updatedAt?: string;

  /**
   * Application user who last updated the row in the database, set by the system
   * automatically and ignored on create/edit operations.
   */
  updatedBy?: string;
}

export interface LaunchDetectionQueryhelpResponse {
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

export type LaunchDetectionTupleResponse =
  Array<LaunchDetectionTupleResponse.LaunchDetectionTupleResponseItem>;

export namespace LaunchDetectionTupleResponse {
  /**
   * Data to analyze launch detections.
   */
  export interface LaunchDetectionTupleResponseItem {
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
     * Type of message for the data.
     */
    messageType: string;

    /**
     * Latitude of launch vehicle at observation time (in Degrees). -90 to 90 degrees
     * (negative values south of equator).
     */
    observationLatitude: number;

    /**
     * Longitude of launch vehicle at observation time (in Degrees).
     */
    observationLongitude: number;

    /**
     * Time of observation.
     */
    observationTime: string;

    /**
     * Integer indicating how messages should be sequenced for a specific event.
     */
    sequenceNumber: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Time the row was created in the database.
     */
    createdAt?: string;

    /**
     * Application user who created the row in the database.
     */
    createdBy?: string;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * Id to be able to correlate different messages to a specific event.
     */
    eventId?: string;

    /**
     * Flag indicating that the Launch azimuth is uncertain due to near vertical flight
     * path.
     */
    highZenithAzimuth?: boolean;

    /**
     * Orbit Inclination (in Degrees).
     */
    inclination?: number;

    /**
     * Angle measured clockwise from North for the launch heading (in Degrees).
     */
    launchAzimuth?: number;

    /**
     * Geodetic Latitude of launch origin (in Degrees). -90 to 90 degrees (negative
     * values south of equator).
     */
    launchLatitude?: number;

    /**
     * Geodetic Longitude of launch origin (in Degrees). -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    launchLongitude?: number;

    /**
     * Time of Launch.
     */
    launchTime?: string;

    /**
     * Altitude of launch vehicle at observation time (in KM).
     */
    observationAltitude?: number;

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
     * Orbit Right Ascension of Ascending Node (in Degrees).
     */
    raan?: number;

    /**
     * Flag indicating multiple observers were used.
     */
    stereoFlag?: boolean;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Read-only time the row was updated in the database, set automatically by the
     * system on update.
     */
    updatedAt?: string;

    /**
     * Application user who last updated the row in the database, set by the system
     * automatically and ignored on create/edit operations.
     */
    updatedBy?: string;
  }
}

export interface LaunchDetectionCreateParams {
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
   * Type of message for the data.
   */
  messageType: string;

  /**
   * Latitude of launch vehicle at observation time (in Degrees). -90 to 90 degrees
   * (negative values south of equator).
   */
  observationLatitude: number;

  /**
   * Longitude of launch vehicle at observation time (in Degrees).
   */
  observationLongitude: number;

  /**
   * Time of observation.
   */
  observationTime: string;

  /**
   * Integer indicating how messages should be sequenced for a specific event.
   */
  sequenceNumber: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Id to be able to correlate different messages to a specific event.
   */
  eventId?: string;

  /**
   * Flag indicating that the Launch azimuth is uncertain due to near vertical flight
   * path.
   */
  highZenithAzimuth?: boolean;

  /**
   * Orbit Inclination (in Degrees).
   */
  inclination?: number;

  /**
   * Angle measured clockwise from North for the launch heading (in Degrees).
   */
  launchAzimuth?: number;

  /**
   * Geodetic Latitude of launch origin (in Degrees). -90 to 90 degrees (negative
   * values south of equator).
   */
  launchLatitude?: number;

  /**
   * Geodetic Longitude of launch origin (in Degrees). -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  launchLongitude?: number;

  /**
   * Time of Launch.
   */
  launchTime?: string;

  /**
   * Altitude of launch vehicle at observation time (in KM).
   */
  observationAltitude?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Orbit Right Ascension of Ascending Node (in Degrees).
   */
  raan?: number;

  /**
   * Flag indicating multiple observers were used.
   */
  stereoFlag?: boolean;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;
}

export interface LaunchDetectionUpdateParams {
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
   * Type of message for the data.
   */
  messageType: string;

  /**
   * Latitude of launch vehicle at observation time (in Degrees). -90 to 90 degrees
   * (negative values south of equator).
   */
  observationLatitude: number;

  /**
   * Longitude of launch vehicle at observation time (in Degrees).
   */
  observationLongitude: number;

  /**
   * Time of observation.
   */
  observationTime: string;

  /**
   * Integer indicating how messages should be sequenced for a specific event.
   */
  sequenceNumber: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Id to be able to correlate different messages to a specific event.
   */
  eventId?: string;

  /**
   * Flag indicating that the Launch azimuth is uncertain due to near vertical flight
   * path.
   */
  highZenithAzimuth?: boolean;

  /**
   * Orbit Inclination (in Degrees).
   */
  inclination?: number;

  /**
   * Angle measured clockwise from North for the launch heading (in Degrees).
   */
  launchAzimuth?: number;

  /**
   * Geodetic Latitude of launch origin (in Degrees). -90 to 90 degrees (negative
   * values south of equator).
   */
  launchLatitude?: number;

  /**
   * Geodetic Longitude of launch origin (in Degrees). -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  launchLongitude?: number;

  /**
   * Time of Launch.
   */
  launchTime?: string;

  /**
   * Altitude of launch vehicle at observation time (in KM).
   */
  observationAltitude?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Orbit Right Ascension of Ascending Node (in Degrees).
   */
  raan?: number;

  /**
   * Flag indicating multiple observers were used.
   */
  stereoFlag?: boolean;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;
}

export interface LaunchDetectionListParams extends OffsetPageParams {}

export interface LaunchDetectionCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface LaunchDetectionGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface LaunchDetectionTupleParams {
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

export declare namespace LaunchDetection {
  export {
    type LaunchDetectionListResponse as LaunchDetectionListResponse,
    type LaunchDetectionCountResponse as LaunchDetectionCountResponse,
    type LaunchDetectionGetResponse as LaunchDetectionGetResponse,
    type LaunchDetectionQueryhelpResponse as LaunchDetectionQueryhelpResponse,
    type LaunchDetectionTupleResponse as LaunchDetectionTupleResponse,
    type LaunchDetectionListResponsesOffsetPage as LaunchDetectionListResponsesOffsetPage,
    type LaunchDetectionCreateParams as LaunchDetectionCreateParams,
    type LaunchDetectionUpdateParams as LaunchDetectionUpdateParams,
    type LaunchDetectionListParams as LaunchDetectionListParams,
    type LaunchDetectionCountParams as LaunchDetectionCountParams,
    type LaunchDetectionGetParams as LaunchDetectionGetParams,
    type LaunchDetectionTupleParams as LaunchDetectionTupleParams,
  };
}
