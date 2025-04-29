// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryQueryParams,
  HistoryQueryResponse,
  HistoryWriteAodrParams,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Globalatmosphericmodel extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to get a single GlobalAtmosphericModel record by its unique ID
   * passed as a path parameter.
   */
  retrieve(
    id: string,
    query: GlobalatmosphericmodelRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GlobalatmosphericmodelRetrieveResponse> {
    return this._client.get(path`/udl/globalatmosphericmodel/${id}`, { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: GlobalatmosphericmodelCountParams, options?: RequestOptions): APIPromise<string> {
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
   */
  getFile(
    id: string,
    query: GlobalatmosphericmodelGetFileParams | null | undefined = {},
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
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  query(
    query: GlobalatmosphericmodelQueryParams,
    options?: RequestOptions,
  ): APIPromise<GlobalatmosphericmodelQueryResponse> {
    return this._client.get('/udl/globalatmosphericmodel', { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryHelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/globalatmosphericmodel/queryhelp', {
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
  tuple(
    query: GlobalatmosphericmodelTupleParams,
    options?: RequestOptions,
  ): APIPromise<GlobalatmosphericmodelTupleResponse> {
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
   */
  unvalidatedPublish(
    body: GlobalatmosphericmodelUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post('/filedrop/udl-globalatmosphericmodel', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * The GlobalAtmosphericModel service provides atmospheric model output data for
 * use in space situational awareness such as the Global Total Electron Content
 * (2D) data, Global Total Electron Density (3D) data, etc.
 */
export interface GlobalatmosphericmodelRetrieveResponse {
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

export type GlobalatmosphericmodelCountResponse = string;

export type GlobalatmosphericmodelQueryResponse =
  Array<GlobalatmosphericmodelQueryResponse.GlobalatmosphericmodelQueryResponseItem>;

export namespace GlobalatmosphericmodelQueryResponse {
  /**
   * The GlobalAtmosphericModel service provides atmospheric model output data for
   * use in space situational awareness such as the Global Total Electron Content
   * (2D) data, Global Total Electron Density (3D) data, etc.
   */
  export interface GlobalatmosphericmodelQueryResponseItem {
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

export type GlobalatmosphericmodelTupleResponse =
  Array<GlobalatmosphericmodelTupleResponse.GlobalatmosphericmodelTupleResponseItem>;

export namespace GlobalatmosphericmodelTupleResponse {
  /**
   * The GlobalAtmosphericModel service provides atmospheric model output data for
   * use in space situational awareness such as the Global Total Electron Content
   * (2D) data, Global Total Electron Density (3D) data, etc.
   */
  export interface GlobalatmosphericmodelTupleResponseItem {
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

export interface GlobalatmosphericmodelRetrieveParams {
  firstResult?: number;

  maxResult?: number;
}

export interface GlobalatmosphericmodelCountParams {
  /**
   * Target time of the model in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  ts: string;

  firstResult?: number;

  maxResult?: number;
}

export interface GlobalatmosphericmodelGetFileParams {
  firstResult?: number;

  maxResult?: number;
}

export interface GlobalatmosphericmodelQueryParams {
  /**
   * Target time of the model in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  ts: string;

  firstResult?: number;

  maxResult?: number;
}

export interface GlobalatmosphericmodelTupleParams {
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

  maxResult?: number;
}

export interface GlobalatmosphericmodelUnvalidatedPublishParams {
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

Globalatmosphericmodel.History = History;

export declare namespace Globalatmosphericmodel {
  export {
    type GlobalatmosphericmodelRetrieveResponse as GlobalatmosphericmodelRetrieveResponse,
    type GlobalatmosphericmodelCountResponse as GlobalatmosphericmodelCountResponse,
    type GlobalatmosphericmodelQueryResponse as GlobalatmosphericmodelQueryResponse,
    type GlobalatmosphericmodelTupleResponse as GlobalatmosphericmodelTupleResponse,
    type GlobalatmosphericmodelRetrieveParams as GlobalatmosphericmodelRetrieveParams,
    type GlobalatmosphericmodelCountParams as GlobalatmosphericmodelCountParams,
    type GlobalatmosphericmodelGetFileParams as GlobalatmosphericmodelGetFileParams,
    type GlobalatmosphericmodelQueryParams as GlobalatmosphericmodelQueryParams,
    type GlobalatmosphericmodelTupleParams as GlobalatmosphericmodelTupleParams,
    type GlobalatmosphericmodelUnvalidatedPublishParams as GlobalatmosphericmodelUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryQueryResponse as HistoryQueryResponse,
    type HistoryCountParams as HistoryCountParams,
    type HistoryQueryParams as HistoryQueryParams,
    type HistoryWriteAodrParams as HistoryWriteAodrParams,
  };
}
