// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as Shared from 'bluestaq@unified-data-library/resources/shared';
import * as HistoryAPI from 'bluestaq@unified-data-library/resources/video/history';
import {
  History,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  VideoStreamsFull,
  VideoStreamsFullsOffsetPage,
} from 'bluestaq@unified-data-library/resources/video/history';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class Video extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single Video Stream record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.video.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   description: 'description',
   *   name: 'name',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: VideoCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/video', {
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
   * for await (const videoListResponse of client.video.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: VideoListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VideoListResponsesOffsetPage, VideoListResponse> {
    return this._client.getAPIList('/udl/video', OffsetPage<VideoListResponse>, { query, ...options });
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
   * const response = await client.video.count();
   * ```
   */
  count(query: VideoCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/video/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Video Stream record by its unique ID passed as
   * a path parameter.
   *
   * @example
   * ```ts
   * const videoStreamsFull = await client.video.get('id');
   * ```
   */
  get(
    id: string,
    query: VideoGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryAPI.VideoStreamsFull> {
    return this._client.get(path`/udl/video/${id}`, { query, ...options });
  }

  /**
   * Service operation to retrieve player URL and token for given stream name and
   * source.
   *
   * @example
   * ```ts
   * const response = await client.video.getPlayerStreamingInfo({
   *   sourceName: 'sourceName',
   *   streamName: 'streamName',
   * });
   * ```
   */
  getPlayerStreamingInfo(
    query: VideoGetPlayerStreamingInfoParams,
    options?: RequestOptions,
  ): APIPromise<VideoGetPlayerStreamingInfoResponse> {
    return this._client.get('/udl/video/getPlayerStreamingInfo', { query, ...options });
  }

  /**
   * Service operation to retrieve publisher URL and token for given stream name and
   * source.
   *
   * @example
   * ```ts
   * const response =
   *   await client.video.getPublisherStreamingInfo({
   *     sourceName: 'sourceName',
   *     streamName: 'streamName',
   *   });
   * ```
   */
  getPublisherStreamingInfo(
    query: VideoGetPublisherStreamingInfoParams,
    options?: RequestOptions,
  ): APIPromise<VideoGetPublisherStreamingInfoResponse> {
    return this._client.get('/udl/video/getPublisherStreamingInfo', { query, ...options });
  }

  /**
   * Service operation to retrieve a static pre-configured SRT or UDP streamfile URL
   * for given stream name and source.
   *
   * @example
   * ```ts
   * const response = await client.video.getStreamFile({
   *   sourceName: 'sourceName',
   *   streamName: 'streamName',
   * });
   * ```
   */
  getStreamFile(
    query: VideoGetStreamFileParams,
    options?: RequestOptions,
  ): APIPromise<VideoGetStreamFileResponse> {
    return this._client.get('/udl/video/getStreamFile', { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.video.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<VideoQueryhelpResponse> {
    return this._client.get('/udl/video/queryhelp', options);
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
   * const videoStreamsFulls = await client.video.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: VideoTupleParams, options?: RequestOptions): APIPromise<VideoTupleResponse> {
    return this._client.get('/udl/video/tuple', { query, ...options });
  }
}

export type VideoListResponsesOffsetPage = OffsetPage<VideoListResponse>;

/**
 * The table captures metadata associated with the published videos in UDL.
 */
export interface VideoListResponse {
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
   * Description/notes associated with the video stream.
   */
  description: string;

  /**
   * Name of the video stream.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Video Publisher Token.
   */
  tokenValue: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  origin?: string;

  /**
   * The originating source network on which this record was created, auto-populated
   * by the system.
   */
  origNetwork?: string;

  /**
   * The timestamp when the stream is available from. The unit is ISO 8601 format.
   */
  startTime?: string;

  /**
   * The timestamp when the stream is available until. The unit is ISO 8601 format.
   */
  stopTime?: string;

  /**
   * Video Streaming Support URLs.
   */
  videoUrls?: Array<string>;
}

export type VideoCountResponse = string;

/**
 * The table captures metadata associated with the published videos in UDL.
 */
export interface VideoGetPlayerStreamingInfoResponse {
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
   * Description/notes associated with the video stream.
   */
  description: string;

  /**
   * Name of the video stream.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Video Publisher Token.
   */
  tokenValue: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  origin?: string;

  /**
   * The originating source network on which this record was created, auto-populated
   * by the system.
   */
  origNetwork?: string;

  /**
   * The timestamp when the stream is available from. The unit is ISO 8601 format.
   */
  startTime?: string;

  /**
   * The timestamp when the stream is available until. The unit is ISO 8601 format.
   */
  stopTime?: string;

  /**
   * Video Streaming Support URLs.
   */
  videoUrls?: Array<string>;
}

/**
 * The table captures metadata associated with the published videos in UDL.
 */
export interface VideoGetPublisherStreamingInfoResponse {
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
   * Description/notes associated with the video stream.
   */
  description: string;

  /**
   * Name of the video stream.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Video Publisher Token.
   */
  tokenValue: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  origin?: string;

  /**
   * The originating source network on which this record was created, auto-populated
   * by the system.
   */
  origNetwork?: string;

  /**
   * The timestamp when the stream is available from. The unit is ISO 8601 format.
   */
  startTime?: string;

  /**
   * The timestamp when the stream is available until. The unit is ISO 8601 format.
   */
  stopTime?: string;

  /**
   * Video Streaming Support URLs.
   */
  videoUrls?: Array<string>;
}

/**
 * The table captures metadata associated with the published videos in UDL.
 */
export interface VideoGetStreamFileResponse {
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
   * Description/notes associated with the video stream.
   */
  description: string;

  /**
   * Name of the video stream.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Video Publisher Token.
   */
  tokenValue: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  origin?: string;

  /**
   * The originating source network on which this record was created, auto-populated
   * by the system.
   */
  origNetwork?: string;

  /**
   * The timestamp when the stream is available from. The unit is ISO 8601 format.
   */
  startTime?: string;

  /**
   * The timestamp when the stream is available until. The unit is ISO 8601 format.
   */
  stopTime?: string;

  /**
   * Video Streaming Support URLs.
   */
  videoUrls?: Array<string>;
}

export interface VideoQueryhelpResponse {
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

export type VideoTupleResponse = Array<HistoryAPI.VideoStreamsFull>;

export interface VideoCreateParams {
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
   * Description/notes associated with the video stream.
   */
  description: string;

  /**
   * Name of the video stream.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  origin?: string;

  /**
   * The timestamp when the stream is available from. The unit is ISO 8601 format.
   */
  startTime?: string;

  /**
   * The timestamp when the stream is available until. The unit is ISO 8601 format.
   */
  stopTime?: string;
}

export interface VideoListParams extends OffsetPageParams {}

export interface VideoCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface VideoGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface VideoGetPlayerStreamingInfoParams {
  /**
   * The video source name.
   */
  sourceName: string;

  /**
   * The video stream name.
   */
  streamName: string;

  firstResult?: number;

  maxResults?: number;
}

export interface VideoGetPublisherStreamingInfoParams {
  /**
   * The video source name.
   */
  sourceName: string;

  /**
   * The video stream name.
   */
  streamName: string;

  firstResult?: number;

  maxResults?: number;
}

export interface VideoGetStreamFileParams {
  /**
   * The video source name.
   */
  sourceName: string;

  /**
   * The video stream name.
   */
  streamName: string;

  firstResult?: number;

  maxResults?: number;
}

export interface VideoTupleParams {
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

Video.History = History;

export declare namespace Video {
  export {
    type VideoListResponse as VideoListResponse,
    type VideoCountResponse as VideoCountResponse,
    type VideoGetPlayerStreamingInfoResponse as VideoGetPlayerStreamingInfoResponse,
    type VideoGetPublisherStreamingInfoResponse as VideoGetPublisherStreamingInfoResponse,
    type VideoGetStreamFileResponse as VideoGetStreamFileResponse,
    type VideoQueryhelpResponse as VideoQueryhelpResponse,
    type VideoTupleResponse as VideoTupleResponse,
    type VideoListResponsesOffsetPage as VideoListResponsesOffsetPage,
    type VideoCreateParams as VideoCreateParams,
    type VideoListParams as VideoListParams,
    type VideoCountParams as VideoCountParams,
    type VideoGetParams as VideoGetParams,
    type VideoGetPlayerStreamingInfoParams as VideoGetPlayerStreamingInfoParams,
    type VideoGetPublisherStreamingInfoParams as VideoGetPublisherStreamingInfoParams,
    type VideoGetStreamFileParams as VideoGetStreamFileParams,
    type VideoTupleParams as VideoTupleParams,
  };

  export {
    History as History,
    type VideoStreamsFull as VideoStreamsFull,
    type HistoryCountResponse as HistoryCountResponse,
    type VideoStreamsFullsOffsetPage as VideoStreamsFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
