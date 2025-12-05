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
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class AnalyticImagery extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to get a single AnalyticImagery record by its unique ID passed
   * as a path parameter. AnalyticImagery represents metadata about an image, as well
   * as the actual binary image data.
   */
  retrieve(
    id: string,
    query: AnalyticImageryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.AnalyticImageryFull> {
    return this._client.get(path`/udl/analyticimagery/${id}`, { query, ...options });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: AnalyticImageryListParams,
    options?: RequestOptions,
  ): PagePromise<AnalyticImageryAbridgedsOffsetPage, AnalyticImageryAbridged> {
    return this._client.getAPIList('/udl/analyticimagery', OffsetPage<AnalyticImageryAbridged>, {
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
  count(query: AnalyticImageryCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/analyticimagery/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single AnalyticImagery binary image by its unique ID
   * passed as a path parameter. The image is returned as an attachment
   * Content-Disposition.
   */
  fileGet(
    id: string,
    query: AnalyticImageryFileGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/udl/analyticimagery/getFile/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<AnalyticImageryQueryhelpResponse> {
    return this._client.get('/udl/analyticimagery/queryhelp', options);
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
    query: AnalyticImageryTupleParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticImageryTupleResponse> {
    return this._client.get('/udl/analyticimagery/tuple', { query, ...options });
  }

  /**
   * Upload a new image with its metadata.
   *
   * The request body requires a zip file containing exactly two files:\
   * 1\) A file with the `.json` file extension whose content conforms to the `AnalyticImagery_Ingest`
   * schema.\
   * 2\) A binary image file of the allowed types for this service.
   *
   * The JSON and image files will be associated with each other via the `id` field.
   * Query the metadata via `GET /udl/analyticimagery` and use
   * `GET /udl/analyticimagery/getFile/{id}` to retrieve the binary image file.
   *
   * This operation only accepts application/zip media. The application/json request
   * body is documented to provide a convenient reference to the ingest schema.
   *
   * This operation is intended to be used for automated feeds into UDL. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   */
  unvalidatedPublish(
    body: AnalyticImageryUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(
      '/filedrop/udl-analyticimagery',
      multipartFormRequestOptions(
        {
          body,
          defaultBaseURL: 'https://imagery.unifieddatalibrary.com',
          ...options,
          headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
        },
        this._client,
      ),
    );
  }
}

export type AnalyticImageryAbridgedsOffsetPage = OffsetPage<AnalyticImageryAbridged>;

/**
 * The analytic imagery schema supports data plots and graphics of various types.
 * The records contain general file information, allows for annotations to
 * user-defined areas of interest on the graphics, and supports keyword searching.
 */
export interface AnalyticImageryAbridged {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * General type of content of this image (CONTOUR, DIAGRAM, HEATMAP, HISTOGRAM,
   * PLOT, SCREENSHOT).
   */
  content: string;

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
  dataMode: 'REAL' | 'TEST' | 'EXERCISE' | 'SIMULATED';

  /**
   * Description of the image content and utility.
   */
  description: string;

  /**
   * The image file name.
   */
  filename: string;

  /**
   * The image file size, in bytes. The maximum file size for this service is
   * 40,000,000 bytes (40MB). Files exceeding the maximum size will be rejected.
   */
  filesize: number;

  /**
   * The type of image associated with this record (GIF, JPG, PNG, TIF).
   */
  imageType: string;

  /**
   * The message time of this image record, in ISO8601 UTC format with millisecond
   * precision.
   */
  msgTime: string;

  /**
   * Source of the data.
   */
  source: string;

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
   * Rectangular annotation limits, specified in pixels, as an array of arrays of the
   * coordinates [ [UL1x, UL1y], [UR1x, UR1y], [LR1x, LR1y], [LL1x, LL1y] ],
   * indicating the corners of a rectangle beginning with the Upper Left (UL) and
   * moving clockwise. Allows the image provider to highlight one or more rectangular
   * area(s) of interest. The array must contain Nx4 two-element arrays, where N is
   * the number of rectangles of interest. The associated annotation(s) should be
   * included in the annText array.
   */
  annLims?: Array<Array<number>>;

  /**
   * Annotation text, a string array of annotation(s) corresponding to the
   * rectangular areas specified in annLims. This array contains the annotation text
   * associated with the areas of interest indicated in annLims, in order. This array
   * should contain one annotation per four values of the area (annLims) array.
   */
  annText?: Array<string>;

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
   * MD5 checksum value of the file. The ingest/create operation will automatically
   * generate the value.
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
   * The start time, in ISO8601 UTC format with millisecond precision, of the data
   * used in the analysis or composition of the image content, when applicable.
   */
  dataStart?: string;

  /**
   * The stop time, in ISO8601 UTC format with millisecond precision, of the data
   * used in the analysis or composition of the image content, when applicable.
   */
  dataStop?: string;

  /**
   * Unique identifier of the reporting sensor.
   */
  idSensor?: string;

  /**
   * User-defined set ID of a sequence of images. Used to associate related analytic
   * image records.
   */
  imageSetId?: string;

  /**
   * The number of images in an image set.
   */
  imageSetLength?: number;

  /**
   * The image height (vertical), in pixels.
   */
  imgHeight?: number;

  /**
   * The image width (horizontal), in pixels.
   */
  imgWidth?: number;

  /**
   * Array of searchable keywords for this analytic imagery record.
   */
  keywords?: Array<string>;

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
   * Optional identifier provided by the source to indicate the sensor for this
   * collection. This may be an internal identifier and not necessarily a valid
   * sensor ID.
   */
  origSensorId?: string;

  /**
   * Assessed satellite ID (NORAD RSO object number). The 'satId' and 'satIdConf'
   * arrays must match in size.
   */
  satId?: Array<string>;

  /**
   * Assessed satellite confidence corresponding to an assessment ID. Values are
   * between 0.0 and 1.0. The 'satId' and 'satIdConf' arrays must match in size.
   */
  satIdConf?: Array<number>;

  /**
   * The sequence number of an image within an image set. If null, then it is assumed
   * that the order of images in an imageSet is not relevant.
   */
  sequenceId?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Array of UUIDs of the UDL data records that are related to this image. See the
   * associated 'srcTyps' array for the specific types of data, positionally
   * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
   * match in size. See the corresponding srcTyps array element for the data type of
   * the UUID and use the appropriate API operation to retrieve that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (AIS, CONJUNCTION, DOA, ELSET, EO, ESID, GROUNDIMAGE,
   * POI, MANEUVER, MTI, NOTIFICATION, RADAR, RF, SIGACT, SKYIMAGE, SV, TRACK) that
   * are related to this image. See the associated 'srcIds' array for the record
   * UUIDs, positionally corresponding to the record types in this array. The
   * 'srcTyps' and 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * Optional field indicating the units that apply to the x-axis of the attached
   * image, when applicable.
   */
  xUnits?: string;

  /**
   * Optional field indicating the units that apply to the y-axis of the attached
   * image, when applicable.
   */
  yUnits?: string;

  /**
   * Optional field indicating the units that apply to the z-axis of the attached
   * image, when applicable.
   */
  zUnits?: string;
}

export type AnalyticImageryCountResponse = string;

export interface AnalyticImageryQueryhelpResponse {
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

export type AnalyticImageryTupleResponse = Array<AnalyticImageryAbridged>;

export interface AnalyticImageryRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AnalyticImageryListParams extends OffsetPageParams {
  /**
   * The message time of this image record, in ISO8601 UTC format with millisecond
   * precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgTime: string;
}

export interface AnalyticImageryCountParams {
  /**
   * The message time of this image record, in ISO8601 UTC format with millisecond
   * precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface AnalyticImageryFileGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AnalyticImageryTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The message time of this image record, in ISO8601 UTC format with millisecond
   * precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface AnalyticImageryUnvalidatedPublishParams {
  /**
   * Zip file containing files described in the specification
   */
  file: Uploadable;
}

AnalyticImagery.History = History;

export declare namespace AnalyticImagery {
  export {
    type AnalyticImageryAbridged as AnalyticImageryAbridged,
    type AnalyticImageryCountResponse as AnalyticImageryCountResponse,
    type AnalyticImageryQueryhelpResponse as AnalyticImageryQueryhelpResponse,
    type AnalyticImageryTupleResponse as AnalyticImageryTupleResponse,
    type AnalyticImageryAbridgedsOffsetPage as AnalyticImageryAbridgedsOffsetPage,
    type AnalyticImageryRetrieveParams as AnalyticImageryRetrieveParams,
    type AnalyticImageryListParams as AnalyticImageryListParams,
    type AnalyticImageryCountParams as AnalyticImageryCountParams,
    type AnalyticImageryFileGetParams as AnalyticImageryFileGetParams,
    type AnalyticImageryTupleParams as AnalyticImageryTupleParams,
    type AnalyticImageryUnvalidatedPublishParams as AnalyticImageryUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
