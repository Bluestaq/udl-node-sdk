// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as HistoryAPI from './udl/groundimagery/history';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Groundimagery extends APIResource {
  /**
   * Service operation to take a single GroundImagery object as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: GroundimageryCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/groundimagery', {
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
  list(query: GroundimageryListParams, options?: RequestOptions): APIPromise<GroundimageryListResponse> {
    return this._client.get('/udl/groundimagery', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: GroundimageryCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/groundimagery/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single GroundImagery record by its unique ID passed
   * as a path parameter. GroundImagery represents metadata about a ground image, as
   * well as the actual binary image data.
   */
  get(
    id: string,
    query: GroundimageryGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryAPI.GroundImageryFull> {
    return this._client.get(path`/udl/groundimagery/${id}`, { query, ...options });
  }

  /**
   * Service operation to get a single GroundImagery binary image by its unique ID
   * passed as a path parameter. The image is returned as an attachment
   * Content-Disposition.
   */
  getFile(
    id: string,
    query: GroundimageryGetFileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/udl/groundimagery/getFile/${id}`, {
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
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/groundimagery/queryhelp', {
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
  tuple(query: GroundimageryTupleParams, options?: RequestOptions): APIPromise<GroundimageryTupleResponse> {
    return this._client.get('/udl/groundimagery/tuple', { query, ...options });
  }
}

export type GroundimageryListResponse = Array<GroundimageryListResponse.GroundimageryListResponseItem>;

export namespace GroundimageryListResponse {
  /**
   * Imagery of terrestrial regions from on-orbit, air, and other sensors.
   */
  export interface GroundimageryListResponseItem {
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
     * Name of the image file.
     */
    filename: string;

    /**
     * Timestamp the image was captured/produced.
     */
    imageTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

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
     * Size of the image file. Units in bytes. If filesize is provided without an
     * associated file, it defaults to 0.
     */
    filesize?: number;

    /**
     * Optional, field indicating type of image, NITF, PNG, etc.
     */
    format?: string;

    /**
     * Optional ID of the sensor that produced this ground image.
     */
    idSensor?: string;

    /**
     * Optional name/description associated with this image.
     */
    name?: string;

    /**
     * Description and notes of the image.
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
     * Optional identifier provided by source to indicate the sensor identifier used to
     * detect this event. This may be an internal identifier and not necessarily a
     * valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the image as projected on the
     * ground. Reference: https://geojson.org/. Ignored if included with a create
     * operation that also specifies a valid region or regionText.
     */
    regionGeoJSON?: string;

    /**
     * Number of dimensions of the geometry depicted by region.
     */
    regionNDims?: number;

    /**
     * Geographical spatial_ref_sys for region.
     */
    regionSRid?: number;

    /**
     * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
     * Text representation of the geometry/geography, of the image as projected on the
     * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
     * if included with a create operation that also specifies a valid region.
     */
    regionText?: string;

    /**
     * Type of region as projected on the ground.
     */
    regionType?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Optional identifier of the subject/target of the image, useful for correlating
     * multiple images of the same subject.
     */
    subjectId?: string;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;
  }
}

export type GroundimageryCountResponse = string;

export type GroundimageryTupleResponse = Array<HistoryAPI.GroundImageryFull>;

export interface GroundimageryCreateParams {
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
   * Name of the image file.
   */
  filename: string;

  /**
   * Timestamp the image was captured/produced.
   */
  imageTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * MD5 value of the file. The ingest/create operation will automatically generate
   * the value.
   */
  checksumValue?: string;

  /**
   * Size of the image file. Units in bytes. If filesize is provided without an
   * associated file, it defaults to 0.
   */
  filesize?: number;

  /**
   * Optional, field indicating type of image, NITF, PNG, etc.
   */
  format?: string;

  /**
   * Optional ID of the sensor that produced this ground image.
   */
  idSensor?: string;

  /**
   * Optional array of keywords for this image.
   */
  keywords?: Array<string>;

  /**
   * Optional name/description associated with this image.
   */
  name?: string;

  /**
   * Description and notes of the image.
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
   * Optional identifier provided by source to indicate the sensor identifier used to
   * detect this event. This may be an internal identifier and not necessarily a
   * valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Geographical region or polygon (lon/lat pairs) of the image as projected on the
   * ground in geoJSON or geoText format. This is an optional convenience field only
   * used for create operations. The system will auto-detect the format (Well Known
   * Text or GeoJSON) and populate both regionText and regionGeoJSON fields
   * appropriately. When omitted, regionText or regionGeoJSON is expected.
   */
  region?: string;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the image as projected on the
   * ground. Reference: https://geojson.org/. Ignored if included with a create
   * operation that also specifies a valid region or regionText.
   */
  regionGeoJSON?: string;

  /**
   * Number of dimensions of the geometry depicted by region.
   */
  regionNDims?: number;

  /**
   * Geographical spatial_ref_sys for region.
   */
  regionSRid?: number;

  /**
   * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
   * Text representation of the geometry/geography, of the image as projected on the
   * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
   * if included with a create operation that also specifies a valid region.
   */
  regionText?: string;

  /**
   * Type of region as projected on the ground.
   */
  regionType?: string;

  /**
   * Optional identifier of the subject/target of the image, useful for correlating
   * multiple images of the same subject.
   */
  subjectId?: string;

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
}

export interface GroundimageryListParams {
  /**
   * Timestamp the image was captured/produced. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  imageTime: string;

  firstResult?: number;

  maxResult?: number;
}

export interface GroundimageryCountParams {
  /**
   * Timestamp the image was captured/produced. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  imageTime: string;

  firstResult?: number;

  maxResult?: number;
}

export interface GroundimageryGetParams {
  firstResult?: number;

  maxResult?: number;
}

export interface GroundimageryGetFileParams {
  firstResult?: number;

  maxResult?: number;
}

export interface GroundimageryTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Timestamp the image was captured/produced. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  imageTime: string;

  firstResult?: number;

  maxResult?: number;
}

export declare namespace Groundimagery {
  export {
    type GroundimageryListResponse as GroundimageryListResponse,
    type GroundimageryCountResponse as GroundimageryCountResponse,
    type GroundimageryTupleResponse as GroundimageryTupleResponse,
    type GroundimageryCreateParams as GroundimageryCreateParams,
    type GroundimageryListParams as GroundimageryListParams,
    type GroundimageryCountParams as GroundimageryCountParams,
    type GroundimageryGetParams as GroundimageryGetParams,
    type GroundimageryGetFileParams as GroundimageryGetFileParams,
    type GroundimageryTupleParams as GroundimageryTupleParams,
  };
}
