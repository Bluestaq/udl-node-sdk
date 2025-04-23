// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
  VideoStreamsFull,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Video extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single Video Stream record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
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
   */
  list(options?: RequestOptions): APIPromise<VideoListResponse> {
    return this._client.get('/udl/video', options);
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/video/count', {
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Video Stream record by its unique ID passed as
   * a path parameter.
   */
  get(id: string, options?: RequestOptions): APIPromise<HistoryAPI.VideoStreamsFull> {
    return this._client.get(path`/udl/video/${id}`, options);
  }

  /**
   * Service operation to retrieve player URL and token for given stream name and
   * source.
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
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/video/queryhelp', {
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
  tuple(query: VideoTupleParams, options?: RequestOptions): APIPromise<VideoTupleResponse> {
    return this._client.get('/udl/video/tuple', { query, ...options });
  }
}

export type VideoListResponse = Array<VideoListResponse.VideoListResponseItem>;

export namespace VideoListResponse {
  /**
   * The table captures metadata associated with the published videos in UDL.
   */
  export interface VideoListResponseItem {
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

export interface VideoGetPlayerStreamingInfoParams {
  /**
   * The video source name.
   */
  sourceName: string;

  /**
   * The video stream name.
   */
  streamName: string;
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
}

export interface VideoTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

Video.History = History;

export declare namespace Video {
  export {
    type VideoListResponse as VideoListResponse,
    type VideoCountResponse as VideoCountResponse,
    type VideoGetPlayerStreamingInfoResponse as VideoGetPlayerStreamingInfoResponse,
    type VideoGetPublisherStreamingInfoResponse as VideoGetPublisherStreamingInfoResponse,
    type VideoGetStreamFileResponse as VideoGetStreamFileResponse,
    type VideoTupleResponse as VideoTupleResponse,
    type VideoCreateParams as VideoCreateParams,
    type VideoGetPlayerStreamingInfoParams as VideoGetPlayerStreamingInfoParams,
    type VideoGetPublisherStreamingInfoParams as VideoGetPublisherStreamingInfoParams,
    type VideoGetStreamFileParams as VideoGetStreamFileParams,
    type VideoTupleParams as VideoTupleParams,
  };

  export {
    History as History,
    type VideoStreamsFull as VideoStreamsFull,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
  };
}
