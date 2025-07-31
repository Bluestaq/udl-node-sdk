// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as Shared from 'bluestaq@unified-data-library/resources/shared';
import * as HistoryAPI from 'bluestaq@unified-data-library/resources/ground-imagery/history';
import {
  History,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryQueryParams,
  HistoryQueryResponse,
} from 'bluestaq@unified-data-library/resources/ground-imagery/history';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { type Uploadable } from 'bluestaq@unified-data-library/core/uploads';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { multipartFormRequestOptions } from 'bluestaq@unified-data-library/internal/uploads';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class GroundImagery extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single GroundImagery object as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.groundImagery.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   filename: 'Example file name',
   *   imageTime: '2021-01-01T01:01:01.123456Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: GroundImageryCreateParams, options?: RequestOptions): APIPromise<void> {
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const groundImageryListResponse of client.groundImagery.list(
   *   { imageTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: GroundImageryListParams,
    options?: RequestOptions,
  ): PagePromise<GroundImageryListResponsesOffsetPage, GroundImageryListResponse> {
    return this._client.getAPIList('/udl/groundimagery', OffsetPage<GroundImageryListResponse>, {
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
   *
   * @example
   * ```ts
   * const response = await client.groundImagery.count({
   *   imageTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: GroundImageryCountParams, options?: RequestOptions): APIPromise<string> {
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
   *
   * @example
   * ```ts
   * const groundImagery = await client.groundImagery.get('id');
   * ```
   */
  get(
    id: string,
    query: GroundImageryGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroundImageryGetResponse> {
    return this._client.get(path`/udl/groundimagery/${id}`, { query, ...options });
  }

  /**
   * Service operation to get a single GroundImagery binary image by its unique ID
   * passed as a path parameter. The image is returned as an attachment
   * Content-Disposition.
   *
   * @example
   * ```ts
   * const response = await client.groundImagery.getFile('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  getFile(
    id: string,
    query: GroundImageryGetFileParams | null | undefined = {},
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
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation, then write that data to the
   * Secure Content Store. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   *
   * @example
   * ```ts
   * await client.groundImagery.historyAodr({
   *   imageTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  historyAodr(query: GroundImageryHistoryAodrParams, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/groundimagery/history/aodr', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.groundImagery.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<GroundImageryQueryhelpResponse> {
    return this._client.get('/udl/groundimagery/queryhelp', options);
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
   * const response = await client.groundImagery.tuple({
   *   columns: 'columns',
   *   imageTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: GroundImageryTupleParams, options?: RequestOptions): APIPromise<GroundImageryTupleResponse> {
    return this._client.get('/udl/groundimagery/tuple', { query, ...options });
  }

  /**
   * Upload a new image with its metadata.
   *
   * The request body requires a zip file containing exactly two files:\
   * 1\) A file with the `.json` file extension whose content conforms to the `GroundImagery_Ingest`
   * schema. 2\) A binary image file of the allowed types for this service.
   *
   * The JSON and image files will be associated with each other via the `id` field.
   * Query the metadata via `GET /udl/groundimagery` and use
   * `GET /udl/groundimagery/getFile/{id}` to retrieve the binary image file.
   *
   * This operation only accepts application/zip media. The application/json request
   * body is documented to provide a convenient reference to the ingest schema.
   *
   * This operation is intended to be used for automated feeds into UDL. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   *
   * @example
   * ```ts
   * await client.groundImagery.uploadZip({
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  uploadZip(body: GroundImageryUploadZipParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(
      '/filedrop/udl-groundimagery',
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

export type GroundImageryListResponsesOffsetPage = OffsetPage<GroundImageryListResponse>;

/**
 * Imagery of terrestrial regions from on-orbit, air, and other sensors.
 */
export interface GroundImageryListResponse {
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

export type GroundImageryCountResponse = string;

/**
 * Imagery of terrestrial regions from on-orbit, air, and other sensors.
 */
export interface GroundImageryGetResponse {
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

export interface GroundImageryQueryhelpResponse {
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

export type GroundImageryTupleResponse = Array<GroundImageryTupleResponse.GroundImageryTupleResponseItem>;

export namespace GroundImageryTupleResponse {
  /**
   * Imagery of terrestrial regions from on-orbit, air, and other sensors.
   */
  export interface GroundImageryTupleResponseItem {
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

export interface GroundImageryCreateParams {
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

export interface GroundImageryListParams extends OffsetPageParams {
  /**
   * Timestamp the image was captured/produced. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  imageTime: string;
}

export interface GroundImageryCountParams {
  /**
   * Timestamp the image was captured/produced. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  imageTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface GroundImageryGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface GroundImageryGetFileParams {
  firstResult?: number;

  maxResults?: number;
}

export interface GroundImageryHistoryAodrParams {
  /**
   * Timestamp the image was captured/produced. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  imageTime: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * optional, notification method for the created file link. When omitted, EMAIL is
   * assumed. Current valid values are: EMAIL, SMS.
   */
  notification?: string;

  /**
   * optional, field delimiter when the created file is not JSON. Must be a single
   * character chosen from this set: (',', ';', ':', '|'). When omitted, "," is used.
   * It is strongly encouraged that your field delimiter be a character unlikely to
   * occur within the data.
   */
  outputDelimiter?: string;

  /**
   * optional, output format for the file. When omitted, JSON is assumed. Current
   * valid values are: JSON and CSV.
   */
  outputFormat?: string;
}

export interface GroundImageryTupleParams {
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

  maxResults?: number;
}

export interface GroundImageryUploadZipParams {
  /**
   * Zip file containing files described in the specification
   */
  file: Uploadable;
}

GroundImagery.History = History;

export declare namespace GroundImagery {
  export {
    type GroundImageryListResponse as GroundImageryListResponse,
    type GroundImageryCountResponse as GroundImageryCountResponse,
    type GroundImageryGetResponse as GroundImageryGetResponse,
    type GroundImageryQueryhelpResponse as GroundImageryQueryhelpResponse,
    type GroundImageryTupleResponse as GroundImageryTupleResponse,
    type GroundImageryListResponsesOffsetPage as GroundImageryListResponsesOffsetPage,
    type GroundImageryCreateParams as GroundImageryCreateParams,
    type GroundImageryListParams as GroundImageryListParams,
    type GroundImageryCountParams as GroundImageryCountParams,
    type GroundImageryGetParams as GroundImageryGetParams,
    type GroundImageryGetFileParams as GroundImageryGetFileParams,
    type GroundImageryHistoryAodrParams as GroundImageryHistoryAodrParams,
    type GroundImageryTupleParams as GroundImageryTupleParams,
    type GroundImageryUploadZipParams as GroundImageryUploadZipParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryQueryResponse as HistoryQueryResponse,
    type HistoryCountParams as HistoryCountParams,
    type HistoryQueryParams as HistoryQueryParams,
  };
}
