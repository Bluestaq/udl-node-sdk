// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
} from './history';
import * as SkyimageryHistoryAPI from '../udl/skyimagery/history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Skyimagery extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: SkyimageryListParams,
    options?: RequestOptions,
  ): PagePromise<SkyimageryListResponsesOffsetPage, SkyimageryListResponse> {
    return this._client.getAPIList('/udl/skyimagery', OffsetPage<SkyimageryListResponse>, {
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
   */
  count(query: SkyimageryCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/skyimagery/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single SkyImagery binary image by its unique ID
   * passed as a path parameter. The image is returned as an attachment
   * Content-Disposition.
   */
  fileGet(
    id: string,
    query: SkyimageryFileGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/udl/skyimagery/getFile/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Service operation to get a single SkyImagery record by its unique ID passed as a
   * path parameter. SkyImagery represents metadata about a sky image, as well as the
   * actual binary image data.
   */
  get(
    id: string,
    query: SkyimageryGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SkyimageryHistoryAPI.SkyimageryFull> {
    return this._client.get(path`/udl/skyimagery/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/skyimagery/queryhelp', {
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
  tuple(query: SkyimageryTupleParams, options?: RequestOptions): APIPromise<SkyimageryTupleResponse> {
    return this._client.get('/udl/skyimagery/tuple', { query, ...options });
  }

  /**
   * Upload a new image with its metadata.
   *
   * The request body requires a zip file containing exactly two files:\
   * 1\) A file with the `.json` file extension whose content conforms to the `SkyImagery_Ingest`
   * schema.\
   * 2\) A binary image file of the allowed types for this service.
   *
   * The JSON and image files will be associated with each other via the `id` field.
   * Query the metadata via `GET /udl/skyimagery` and use
   * `GET /udl/skyimagery/getFile/{id}` to retrieve the binary image file.
   *
   * This operation only accepts application/zip media. The application/json request
   * body is documented to provide a convenient reference to the ingest schema.
   *
   * This operation is intended to be used for automated feeds into UDL. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   */
  uploadZip(body: SkyimageryUploadZipParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/filedrop/udl-skyimagery',
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }
}

export type SkyimageryListResponsesOffsetPage = OffsetPage<SkyimageryListResponse>;

/**
 * Model representation of sky imagery data. Sky imagery is ground or space based
 * telescope imagery of RSO's and includes metadata on the image (time, source,
 * etc) as well as binary image content (e.g. FITS, EOSSA, EOCHIP, MP4). Binary
 * content must be downloaded individually by ID using the 'getFile' operation.
 */
export interface SkyimageryListResponse {
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
   * Start time of the exposure, in ISO 8601 UTC format with microsecond precision.
   */
  expStartTime: string;

  /**
   * The type of image associated with this record (e.g. FITS, EOSSA, EOCHIP, MP4).
   */
  imageType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Reference to an annotation document associated with this image.
   */
  annotationKey?: string;

  /**
   * Reference to a calibration document associated with this image.
   */
  calibrationKey?: string;

  /**
   * MD5 value of the file. The ingest/create operation will automatically generate
   * the value.
   */
  checksumValue?: string;

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
   * Optional name/description associated with this image.
   */
  description?: string;

  /**
   * End time of the exposure, in ISO 8601 UTC format with microsecond precision.
   */
  expEndTime?: string;

  /**
   * Name of the uploaded image file.
   */
  filename?: string;

  /**
   * Size of the image file, in bytes.
   */
  filesize?: number;

  /**
   * Field Of View frame height, in degrees.
   */
  frameFOVHeight?: number;

  /**
   * Field Of View frame width, in degrees.
   */
  frameFOVWidth?: number;

  /**
   * Frame height of the image, in number of pixels.
   */
  frameHeightPixels?: number;

  /**
   * Frame width of the image, in number of pixels.
   */
  frameWidthPixels?: number;

  /**
   * Optional identifier of the AttitudeSet data record describing the orientation of
   * an object body.
   */
  idAttitudeSet?: string;

  /**
   * Optional identifier of the target on-orbit object, if correlated.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * Optional unique identifier of the SOI Observation Set associated with this
   * image.
   */
  idSOISet?: string;

  /**
   * The user-defined set ID of a sequence of images.
   */
  imageSetId?: string;

  /**
   * The number of images in an image set.
   */
  imageSetLength?: number;

  /**
   * String that uniquely identifies the data source.
   */
  imageSourceInfo?: string;

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
   * Optional identifier provided by the imaging source to indicate the target
   * onorbit object of this image. This may be an internal identifier and not
   * necessarily a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the imaging source to indicate the sensor
   * identifier which produced this image. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Bit depth of the image, in number of pixels.
   */
  pixelBitDepth?: number;

  /**
   * Field Of View pixel height, in degrees.
   */
  pixelFOVHeight?: number;

  /**
   * Field Of View pixel width, in degrees.
   */
  pixelFOVWidth?: number;

  /**
   * Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Sensor altitude at exposure start epoch, in km. If null, can be obtained from
   * sensor info.
   */
  senalt?: number;

  /**
   * Sensor latitude at exposure start epoch, in degrees. If null, can be obtained
   * from sensor info. -90 to 90 degrees (negative values south of equator).
   */
  senlat?: number;

  /**
   * Sensor longitude at exposure start epoch, in degrees. If null, can be obtained
   * from sensor info. -180 to 180 degrees (negative values west of Prime Meridian).
   */
  senlon?: number;

  /**
   * The quaternion describing the rotation of the body-fixed frame used for this
   * system into the local geodetic frame, at exposure start epoch (expStartTime).
   * The array element order convention is scalar component first, followed by the
   * three vector components. For a vector u in the body-fixed frame, the
   * corresponding vector u' in the geodetic frame should satisfy u' = quq\*, where q
   * is this quaternion.
   */
  senQuat?: Array<number>;

  /**
   * The derivative of the quaternion describing the rotation of the body-fixed frame
   * used for this system into the local geodetic frame, exposure start epoch
   * (expStartTime). The array element order convention is scalar component first,
   * followed by the three vector components. For a vector u in the body-fixed frame,
   * the corresponding vector u' in the geodetic frame should satisfy u' = quq\*,
   * where q is this quaternion.
   */
  senQuatDot?: Array<number>;

  /**
   * Sensor x position at exposure start epoch, in km (if mobile/onorbit) in J2000
   * coordinate frame.
   */
  senx?: number;

  /**
   * Sensor y position at exposure start epoch, in km (if mobile/onorbit) in J2000
   * coordinate frame.
   */
  seny?: number;

  /**
   * Sensor z position at exposure start epoch, in km (if mobile/onorbit) in J2000
   * coordinate frame.
   */
  senz?: number;

  /**
   * The sequence ID of an image within an image set.
   */
  sequenceId?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * The telescope pointing azimuth, in degrees, at the exposure start epoch.
   */
  topLeftStartAz?: number;

  /**
   * The telescope pointing elevation, in degrees, at the exposure start epoch.
   */
  topLeftStartEl?: number;

  /**
   * The telescope pointing azimuth, in degrees, at the exposure stop epoch.
   */
  topLeftStopAz?: number;

  /**
   * The telescope pointing elevation, in degrees, at the exposure stop epoch.
   */
  topLeftStopEl?: number;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;
}

export type SkyimageryCountResponse = string;

export type SkyimageryTupleResponse = Array<SkyimageryHistoryAPI.SkyimageryFull>;

export interface SkyimageryListParams extends OffsetPageParams {
  /**
   * Start time of the exposure, in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  expStartTime: string;
}

export interface SkyimageryCountParams {
  /**
   * Start time of the exposure, in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  expStartTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface SkyimageryFileGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SkyimageryGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SkyimageryTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Start time of the exposure, in ISO 8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  expStartTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface SkyimageryUploadZipParams {
  /**
   * Zip file containing files described in the specification
   */
  file: Uploadable;
}

Skyimagery.History = History;

export declare namespace Skyimagery {
  export {
    type SkyimageryListResponse as SkyimageryListResponse,
    type SkyimageryCountResponse as SkyimageryCountResponse,
    type SkyimageryTupleResponse as SkyimageryTupleResponse,
    type SkyimageryListResponsesOffsetPage as SkyimageryListResponsesOffsetPage,
    type SkyimageryListParams as SkyimageryListParams,
    type SkyimageryCountParams as SkyimageryCountParams,
    type SkyimageryFileGetParams as SkyimageryFileGetParams,
    type SkyimageryGetParams as SkyimageryGetParams,
    type SkyimageryTupleParams as SkyimageryTupleParams,
    type SkyimageryUploadZipParams as SkyimageryUploadZipParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
