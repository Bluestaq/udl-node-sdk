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
  HistoryListResponse,
  HistoryListResponsesOffsetPage,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class GlobalAtmosphericModel extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to get a single GlobalAtmosphericModel record by its unique ID
   * passed as a path parameter.
   *
   * @example
   * ```ts
   * const globalAtmosphericModel =
   *   await client.globalAtmosphericModel.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: GlobalAtmosphericModelRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GlobalAtmosphericModelRetrieveResponse> {
    return this._client.get(path`/udl/globalatmosphericmodel/${id}`, { query, ...options });
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
   * for await (const globalAtmosphericModelListResponse of client.globalAtmosphericModel.list(
   *   { ts: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: GlobalAtmosphericModelListParams,
    options?: RequestOptions,
  ): PagePromise<GlobalAtmosphericModelListResponsesOffsetPage, GlobalAtmosphericModelListResponse> {
    return this._client.getAPIList(
      '/udl/globalatmosphericmodel',
      OffsetPage<GlobalAtmosphericModelListResponse>,
      { query, ...options },
    );
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
   * const response = await client.globalAtmosphericModel.count({
   *   ts: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: GlobalAtmosphericModelCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/globalatmosphericmodel/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single GlobalAtmosphericModel compressed data file by
   * its unique ID passed as a path parameter. The compressed data file is returned
   * as an attachment Content-Disposition.
   *
   * @example
   * ```ts
   * const response =
   *   await client.globalAtmosphericModel.getFile('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  getFile(
    id: string,
    query: GlobalAtmosphericModelGetFileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/udl/globalatmosphericmodel/getFile/${id}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.globalAtmosphericModel.queryHelp();
   * ```
   */
  queryHelp(options?: RequestOptions): APIPromise<GlobalAtmosphericModelQueryHelpResponse> {
    return this._client.get('/udl/globalatmosphericmodel/queryhelp', options);
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
   * const response = await client.globalAtmosphericModel.tuple({
   *   columns: 'columns',
   *   ts: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(
    query: GlobalAtmosphericModelTupleParams,
    options?: RequestOptions,
  ): APIPromise<GlobalAtmosphericModelTupleResponse> {
    return this._client.get('/udl/globalatmosphericmodel/tuple', { query, ...options });
  }

  /**
   * Upload a file with its metadata.
   *
   * The request body requires a zip file containing exactly two files:\
   * 1\) A file with the `.json` file extension whose content conforms to the `GlobalAtmosphericModel_Ingest`
   * schema.\
   * 2\) A file with the `.geojson` file extension.
   *
   * The JSON and GEOJSON files will be associated with each other other via the `id`
   * field. Query the metadata via `GET /udl/globalatmosphericmodel` and use
   * `GET /udl/globalatmosphericmodel/getFile/{id}` to retrieve the compressed
   * GEOJSON file as `.gz` extension.
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
   * await client.globalAtmosphericModel.unvalidatedPublish({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   *   ts: '2024-03-01T11:45:00.123Z',
   *   type: 'Global Total Electron Density',
   * });
   * ```
   */
  unvalidatedPublish(
    body: GlobalAtmosphericModelUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/filedrop/udl-globalatmosphericmodel', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type GlobalAtmosphericModelListResponsesOffsetPage = OffsetPage<GlobalAtmosphericModelListResponse>;

/**
 * The GlobalAtmosphericModel service provides atmospheric model output data for
 * use in space situational awareness such as the Global Total Electron Content
 * (2D) data, Global Total Electron Density (3D) data, etc.
 */
export interface GlobalAtmosphericModelRetrieveResponse {
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
   * Source of the data.
   */
  source: string;

  /**
   * Target time of the model in ISO 8601 UTC format with millisecond precision.
   */
  ts: string;

  /**
   * Type of data associated with this record (e.g. Global Total Electron Density,
   * Global Total Electron Content).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Model execution cadence, in minutes.
   */
  cadence?: number;

  /**
   * MD5 value of the data file. If not provided, the ingest/create operation will
   * automatically generate the value.
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
   * A unique identification code or label assigned to a particular source from which
   * atmospheric data originates.
   */
  dataSourceIdentifier?: string;

  /**
   * Ending altitude of model outputs, in kilometers.
   */
  endAlt?: number;

  /**
   * WGS-84 ending latitude of model output, in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  endLat?: number;

  /**
   * WGS-84 ending longitude of model output, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  endLon?: number;

  /**
   * The file name of the uploaded file.
   */
  filename?: string;

  /**
   * The uploaded file size, in bytes. The maximum file size for this service is
   * 104857600 bytes (100MB). Files exceeding the maximum size will be rejected.
   */
  filesize?: number;

  /**
   * Number of altitude points.
   */
  numAlt?: number;

  /**
   * Number of latitude points.
   */
  numLat?: number;

  /**
   * Number of longitude points.
   */
  numLon?: number;

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
   * The time that this record was created, in ISO 8601 UTC format with millisecond
   * precision.
   */
  reportTime?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Starting altitude of model outputs, in kilometers.
   */
  startAlt?: number;

  /**
   * WGS-84 starting latitude of model output, in degrees. -90 to 90 degrees
   * (negative values south of equator).
   */
  startLat?: number;

  /**
   * WGS-84 starting longitude of model output, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  startLon?: number;

  /**
   * State value indicating whether the values in this record are PREDICTED or
   * OBSERVED.
   */
  state?: string;

  /**
   * Separation in latitude between subsequent model outputs, in degrees.
   */
  stepLat?: number;

  /**
   * Separation in longitude between subsequent model outputs, in degrees.
   */
  stepLon?: number;
}

/**
 * The GlobalAtmosphericModel service provides atmospheric model output data for
 * use in space situational awareness such as the Global Total Electron Content
 * (2D) data, Global Total Electron Density (3D) data, etc.
 */
export interface GlobalAtmosphericModelListResponse {
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
   * Source of the data.
   */
  source: string;

  /**
   * Target time of the model in ISO 8601 UTC format with millisecond precision.
   */
  ts: string;

  /**
   * Type of data associated with this record (e.g. Global Total Electron Density,
   * Global Total Electron Content).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Model execution cadence, in minutes.
   */
  cadence?: number;

  /**
   * MD5 value of the data file. If not provided, the ingest/create operation will
   * automatically generate the value.
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
   * A unique identification code or label assigned to a particular source from which
   * atmospheric data originates.
   */
  dataSourceIdentifier?: string;

  /**
   * Ending altitude of model outputs, in kilometers.
   */
  endAlt?: number;

  /**
   * WGS-84 ending latitude of model output, in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  endLat?: number;

  /**
   * WGS-84 ending longitude of model output, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  endLon?: number;

  /**
   * The file name of the uploaded file.
   */
  filename?: string;

  /**
   * The uploaded file size, in bytes. The maximum file size for this service is
   * 104857600 bytes (100MB). Files exceeding the maximum size will be rejected.
   */
  filesize?: number;

  /**
   * Number of altitude points.
   */
  numAlt?: number;

  /**
   * Number of latitude points.
   */
  numLat?: number;

  /**
   * Number of longitude points.
   */
  numLon?: number;

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
   * The time that this record was created, in ISO 8601 UTC format with millisecond
   * precision.
   */
  reportTime?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Starting altitude of model outputs, in kilometers.
   */
  startAlt?: number;

  /**
   * WGS-84 starting latitude of model output, in degrees. -90 to 90 degrees
   * (negative values south of equator).
   */
  startLat?: number;

  /**
   * WGS-84 starting longitude of model output, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  startLon?: number;

  /**
   * State value indicating whether the values in this record are PREDICTED or
   * OBSERVED.
   */
  state?: string;

  /**
   * Separation in latitude between subsequent model outputs, in degrees.
   */
  stepLat?: number;

  /**
   * Separation in longitude between subsequent model outputs, in degrees.
   */
  stepLon?: number;
}

export type GlobalAtmosphericModelCountResponse = string;

export interface GlobalAtmosphericModelQueryHelpResponse {
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

export type GlobalAtmosphericModelTupleResponse =
  Array<GlobalAtmosphericModelTupleResponse.GlobalAtmosphericModelTupleResponseItem>;

export namespace GlobalAtmosphericModelTupleResponse {
  /**
   * The GlobalAtmosphericModel service provides atmospheric model output data for
   * use in space situational awareness such as the Global Total Electron Content
   * (2D) data, Global Total Electron Density (3D) data, etc.
   */
  export interface GlobalAtmosphericModelTupleResponseItem {
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
     * Source of the data.
     */
    source: string;

    /**
     * Target time of the model in ISO 8601 UTC format with millisecond precision.
     */
    ts: string;

    /**
     * Type of data associated with this record (e.g. Global Total Electron Density,
     * Global Total Electron Content).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Model execution cadence, in minutes.
     */
    cadence?: number;

    /**
     * MD5 value of the data file. If not provided, the ingest/create operation will
     * automatically generate the value.
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
     * A unique identification code or label assigned to a particular source from which
     * atmospheric data originates.
     */
    dataSourceIdentifier?: string;

    /**
     * Ending altitude of model outputs, in kilometers.
     */
    endAlt?: number;

    /**
     * WGS-84 ending latitude of model output, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    endLat?: number;

    /**
     * WGS-84 ending longitude of model output, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    endLon?: number;

    /**
     * The file name of the uploaded file.
     */
    filename?: string;

    /**
     * The uploaded file size, in bytes. The maximum file size for this service is
     * 104857600 bytes (100MB). Files exceeding the maximum size will be rejected.
     */
    filesize?: number;

    /**
     * Number of altitude points.
     */
    numAlt?: number;

    /**
     * Number of latitude points.
     */
    numLat?: number;

    /**
     * Number of longitude points.
     */
    numLon?: number;

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
     * The time that this record was created, in ISO 8601 UTC format with millisecond
     * precision.
     */
    reportTime?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Starting altitude of model outputs, in kilometers.
     */
    startAlt?: number;

    /**
     * WGS-84 starting latitude of model output, in degrees. -90 to 90 degrees
     * (negative values south of equator).
     */
    startLat?: number;

    /**
     * WGS-84 starting longitude of model output, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    startLon?: number;

    /**
     * State value indicating whether the values in this record are PREDICTED or
     * OBSERVED.
     */
    state?: string;

    /**
     * Separation in latitude between subsequent model outputs, in degrees.
     */
    stepLat?: number;

    /**
     * Separation in longitude between subsequent model outputs, in degrees.
     */
    stepLon?: number;
  }
}

export interface GlobalAtmosphericModelRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface GlobalAtmosphericModelListParams extends OffsetPageParams {
  /**
   * Target time of the model in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  ts: string;
}

export interface GlobalAtmosphericModelCountParams {
  /**
   * Target time of the model in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface GlobalAtmosphericModelGetFileParams {
  firstResult?: number;

  maxResults?: number;
}

export interface GlobalAtmosphericModelTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Target time of the model in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface GlobalAtmosphericModelUnvalidatedPublishParams {
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
   * Source of the data.
   */
  source: string;

  /**
   * Target time of the model in ISO 8601 UTC format with millisecond precision.
   */
  ts: string;

  /**
   * Type of data associated with this record (e.g. Global Total Electron Density,
   * Global Total Electron Content).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Model execution cadence, in minutes.
   */
  cadence?: number;

  /**
   * A unique identification code or label assigned to a particular source from which
   * atmospheric data originates.
   */
  dataSourceIdentifier?: string;

  /**
   * Ending altitude of model outputs, in kilometers.
   */
  endAlt?: number;

  /**
   * WGS-84 ending latitude of model output, in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  endLat?: number;

  /**
   * WGS-84 ending longitude of model output, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  endLon?: number;

  /**
   * The file name of the uploaded file.
   */
  filename?: string;

  /**
   * The uploaded file size, in bytes. The maximum file size for this service is
   * 104857600 bytes (100MB). Files exceeding the maximum size will be rejected.
   */
  filesize?: number;

  /**
   * Number of altitude points.
   */
  numAlt?: number;

  /**
   * Number of latitude points.
   */
  numLat?: number;

  /**
   * Number of longitude points.
   */
  numLon?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The time that this record was created, in ISO 8601 UTC format with millisecond
   * precision.
   */
  reportTime?: string;

  /**
   * Starting altitude of model outputs, in kilometers.
   */
  startAlt?: number;

  /**
   * WGS-84 starting latitude of model output, in degrees. -90 to 90 degrees
   * (negative values south of equator).
   */
  startLat?: number;

  /**
   * WGS-84 starting longitude of model output, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  startLon?: number;

  /**
   * State value indicating whether the values in this record are PREDICTED or
   * OBSERVED.
   */
  state?: string;

  /**
   * Separation in latitude between subsequent model outputs, in degrees.
   */
  stepLat?: number;

  /**
   * Separation in longitude between subsequent model outputs, in degrees.
   */
  stepLon?: number;
}

GlobalAtmosphericModel.History = History;

export declare namespace GlobalAtmosphericModel {
  export {
    type GlobalAtmosphericModelRetrieveResponse as GlobalAtmosphericModelRetrieveResponse,
    type GlobalAtmosphericModelListResponse as GlobalAtmosphericModelListResponse,
    type GlobalAtmosphericModelCountResponse as GlobalAtmosphericModelCountResponse,
    type GlobalAtmosphericModelQueryHelpResponse as GlobalAtmosphericModelQueryHelpResponse,
    type GlobalAtmosphericModelTupleResponse as GlobalAtmosphericModelTupleResponse,
    type GlobalAtmosphericModelListResponsesOffsetPage as GlobalAtmosphericModelListResponsesOffsetPage,
    type GlobalAtmosphericModelRetrieveParams as GlobalAtmosphericModelRetrieveParams,
    type GlobalAtmosphericModelListParams as GlobalAtmosphericModelListParams,
    type GlobalAtmosphericModelCountParams as GlobalAtmosphericModelCountParams,
    type GlobalAtmosphericModelGetFileParams as GlobalAtmosphericModelGetFileParams,
    type GlobalAtmosphericModelTupleParams as GlobalAtmosphericModelTupleParams,
    type GlobalAtmosphericModelUnvalidatedPublishParams as GlobalAtmosphericModelUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListResponsesOffsetPage as HistoryListResponsesOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
