// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SeradataOpticalPayload extends APIResource {
  /**
   * Service operation to take a single SeradataOpticalPayload as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.seradataOpticalPayload.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   *   spacecraftId: 'spacecraftId',
   * });
   * ```
   */
  create(body: SeradataOpticalPayloadCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/seradataopticalpayload', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update an SeradataOpticalPayload. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.seradataOpticalPayload.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   *   spacecraftId: 'spacecraftId',
   * });
   * ```
   */
  update(
    pathID: string,
    body: SeradataOpticalPayloadUpdateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/udl/seradataopticalpayload/${pathID}`, {
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
   * for await (const seradataOpticalPayloadListResponse of client.seradataOpticalPayload.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SeradataOpticalPayloadListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SeradataOpticalPayloadListResponsesOffsetPage, SeradataOpticalPayloadListResponse> {
    return this._client.getAPIList(
      '/udl/seradataopticalpayload',
      OffsetPage<SeradataOpticalPayloadListResponse>,
      { query, ...options },
    );
  }

  /**
   * Service operation to delete an SeradataOpticalPayload specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.seradataOpticalPayload.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/seradataopticalpayload/${id}`, {
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
   * const response =
   *   await client.seradataOpticalPayload.count();
   * ```
   */
  count(
    query: SeradataOpticalPayloadCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/seradataopticalpayload/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single SeradataOpticalPayload by its unique ID passed
   * as a path parameter.
   *
   * @example
   * ```ts
   * const seradataOpticalPayload =
   *   await client.seradataOpticalPayload.get('id');
   * ```
   */
  get(
    id: string,
    query: SeradataOpticalPayloadGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeradataOpticalPayloadGetResponse> {
    return this._client.get(path`/udl/seradataopticalpayload/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.seradataOpticalPayload.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<SeradataOpticalPayloadQueryhelpResponse> {
    return this._client.get('/udl/seradataopticalpayload/queryhelp', options);
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
   * const response = await client.seradataOpticalPayload.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(
    query: SeradataOpticalPayloadTupleParams,
    options?: RequestOptions,
  ): APIPromise<SeradataOpticalPayloadTupleResponse> {
    return this._client.get('/udl/seradataopticalpayload/tuple', { query, ...options });
  }
}

export type SeradataOpticalPayloadListResponsesOffsetPage = OffsetPage<SeradataOpticalPayloadListResponse>;

/**
 * Details for an optical payload from Seradata.
 */
export interface SeradataOpticalPayloadListResponse {
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
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Best resolution.
   */
  bestResolution?: number;

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
   * Field of regard of this radar in degrees.
   */
  fieldOfRegard?: number;

  /**
   * Field of view of this radar in kilometers.
   */
  fieldOfView?: number;

  /**
   * Ground Station Locations for this payload.
   */
  groundStationLocations?: string;

  /**
   * Ground Station info for this payload.
   */
  groundStations?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the Sensor record.
   */
  idSensor?: string;

  /**
   * Imaging category for this payload, e.g. Multispectral, Infrared, Panchromatic.
   */
  imagingPayloadCategory?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Sensor name from Seradata, e.g. TOURNESOL, MESSR (Multispectral Self-Scanning
   * Radiometer), AWFI, etc.
   */
  name?: string;

  /**
   * Payload notes.
   */
  notes?: string;

  /**
   * Number of film return canisters.
   */
  numberOfFilmReturnCanisters?: number;

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
   * Point method for this radar, e.g. Spacecraft.
   */
  pointingMethod?: string;

  /**
   * Recorder size.
   */
  recorderSize?: string;

  /**
   * Spectral Band supported by this payload, e.g. Green, Red, Mid-wave infrared,
   * etc.
   */
  spectralBand?: string;

  /**
   * Frequency limit for this payload, e.g. 0.51 - 0.59.
   */
  spectralFrequencyLimits?: string;

  /**
   * Swath width in kilometers.
   */
  swathWidth?: number;
}

export type SeradataOpticalPayloadCountResponse = string;

/**
 * Details for an optical payload from Seradata.
 */
export interface SeradataOpticalPayloadGetResponse {
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
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Best resolution.
   */
  bestResolution?: number;

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
   * Field of regard of this radar in degrees.
   */
  fieldOfRegard?: number;

  /**
   * Field of view of this radar in kilometers.
   */
  fieldOfView?: number;

  /**
   * Ground Station Locations for this payload.
   */
  groundStationLocations?: string;

  /**
   * Ground Station info for this payload.
   */
  groundStations?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the Sensor record.
   */
  idSensor?: string;

  /**
   * Imaging category for this payload, e.g. Multispectral, Infrared, Panchromatic.
   */
  imagingPayloadCategory?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Sensor name from Seradata, e.g. TOURNESOL, MESSR (Multispectral Self-Scanning
   * Radiometer), AWFI, etc.
   */
  name?: string;

  /**
   * Payload notes.
   */
  notes?: string;

  /**
   * Number of film return canisters.
   */
  numberOfFilmReturnCanisters?: number;

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
   * Point method for this radar, e.g. Spacecraft.
   */
  pointingMethod?: string;

  /**
   * Recorder size.
   */
  recorderSize?: string;

  /**
   * Spectral Band supported by this payload, e.g. Green, Red, Mid-wave infrared,
   * etc.
   */
  spectralBand?: string;

  /**
   * Frequency limit for this payload, e.g. 0.51 - 0.59.
   */
  spectralFrequencyLimits?: string;

  /**
   * Swath width in kilometers.
   */
  swathWidth?: number;

  /**
   * Time the row was last updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

export interface SeradataOpticalPayloadQueryhelpResponse {
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

export type SeradataOpticalPayloadTupleResponse =
  Array<SeradataOpticalPayloadTupleResponse.SeradataOpticalPayloadTupleResponseItem>;

export namespace SeradataOpticalPayloadTupleResponse {
  /**
   * Details for an optical payload from Seradata.
   */
  export interface SeradataOpticalPayloadTupleResponseItem {
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
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    spacecraftId: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Best resolution.
     */
    bestResolution?: number;

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
     * Field of regard of this radar in degrees.
     */
    fieldOfRegard?: number;

    /**
     * Field of view of this radar in kilometers.
     */
    fieldOfView?: number;

    /**
     * Ground Station Locations for this payload.
     */
    groundStationLocations?: string;

    /**
     * Ground Station info for this payload.
     */
    groundStations?: string;

    /**
     * Hosted for company/Organization Id.
     */
    hostedForCompanyOrgId?: string;

    /**
     * UUID of the Sensor record.
     */
    idSensor?: string;

    /**
     * Imaging category for this payload, e.g. Multispectral, Infrared, Panchromatic.
     */
    imagingPayloadCategory?: string;

    /**
     * Manufacturer Organization Id.
     */
    manufacturerOrgId?: string;

    /**
     * Sensor name from Seradata, e.g. TOURNESOL, MESSR (Multispectral Self-Scanning
     * Radiometer), AWFI, etc.
     */
    name?: string;

    /**
     * Payload notes.
     */
    notes?: string;

    /**
     * Number of film return canisters.
     */
    numberOfFilmReturnCanisters?: number;

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
     * Point method for this radar, e.g. Spacecraft.
     */
    pointingMethod?: string;

    /**
     * Recorder size.
     */
    recorderSize?: string;

    /**
     * Spectral Band supported by this payload, e.g. Green, Red, Mid-wave infrared,
     * etc.
     */
    spectralBand?: string;

    /**
     * Frequency limit for this payload, e.g. 0.51 - 0.59.
     */
    spectralFrequencyLimits?: string;

    /**
     * Swath width in kilometers.
     */
    swathWidth?: number;

    /**
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }
}

export interface SeradataOpticalPayloadCreateParams {
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
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Best resolution.
   */
  bestResolution?: number;

  /**
   * Field of regard of this radar in degrees.
   */
  fieldOfRegard?: number;

  /**
   * Field of view of this radar in kilometers.
   */
  fieldOfView?: number;

  /**
   * Ground Station Locations for this payload.
   */
  groundStationLocations?: string;

  /**
   * Ground Station info for this payload.
   */
  groundStations?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the Sensor record.
   */
  idSensor?: string;

  /**
   * Imaging category for this payload, e.g. Multispectral, Infrared, Panchromatic.
   */
  imagingPayloadCategory?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Sensor name from Seradata, e.g. TOURNESOL, MESSR (Multispectral Self-Scanning
   * Radiometer), AWFI, etc.
   */
  name?: string;

  /**
   * Payload notes.
   */
  notes?: string;

  /**
   * Number of film return canisters.
   */
  numberOfFilmReturnCanisters?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Point method for this radar, e.g. Spacecraft.
   */
  pointingMethod?: string;

  /**
   * Recorder size.
   */
  recorderSize?: string;

  /**
   * Spectral Band supported by this payload, e.g. Green, Red, Mid-wave infrared,
   * etc.
   */
  spectralBand?: string;

  /**
   * Frequency limit for this payload, e.g. 0.51 - 0.59.
   */
  spectralFrequencyLimits?: string;

  /**
   * Swath width in kilometers.
   */
  swathWidth?: number;
}

export interface SeradataOpticalPayloadUpdateParams {
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
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Best resolution.
   */
  bestResolution?: number;

  /**
   * Field of regard of this radar in degrees.
   */
  fieldOfRegard?: number;

  /**
   * Field of view of this radar in kilometers.
   */
  fieldOfView?: number;

  /**
   * Ground Station Locations for this payload.
   */
  groundStationLocations?: string;

  /**
   * Ground Station info for this payload.
   */
  groundStations?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the Sensor record.
   */
  idSensor?: string;

  /**
   * Imaging category for this payload, e.g. Multispectral, Infrared, Panchromatic.
   */
  imagingPayloadCategory?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Sensor name from Seradata, e.g. TOURNESOL, MESSR (Multispectral Self-Scanning
   * Radiometer), AWFI, etc.
   */
  name?: string;

  /**
   * Payload notes.
   */
  notes?: string;

  /**
   * Number of film return canisters.
   */
  numberOfFilmReturnCanisters?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Point method for this radar, e.g. Spacecraft.
   */
  pointingMethod?: string;

  /**
   * Recorder size.
   */
  recorderSize?: string;

  /**
   * Spectral Band supported by this payload, e.g. Green, Red, Mid-wave infrared,
   * etc.
   */
  spectralBand?: string;

  /**
   * Frequency limit for this payload, e.g. 0.51 - 0.59.
   */
  spectralFrequencyLimits?: string;

  /**
   * Swath width in kilometers.
   */
  swathWidth?: number;
}

export interface SeradataOpticalPayloadListParams extends OffsetPageParams {}

export interface SeradataOpticalPayloadCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeradataOpticalPayloadGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeradataOpticalPayloadTupleParams {
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

export declare namespace SeradataOpticalPayload {
  export {
    type SeradataOpticalPayloadListResponse as SeradataOpticalPayloadListResponse,
    type SeradataOpticalPayloadCountResponse as SeradataOpticalPayloadCountResponse,
    type SeradataOpticalPayloadGetResponse as SeradataOpticalPayloadGetResponse,
    type SeradataOpticalPayloadQueryhelpResponse as SeradataOpticalPayloadQueryhelpResponse,
    type SeradataOpticalPayloadTupleResponse as SeradataOpticalPayloadTupleResponse,
    type SeradataOpticalPayloadListResponsesOffsetPage as SeradataOpticalPayloadListResponsesOffsetPage,
    type SeradataOpticalPayloadCreateParams as SeradataOpticalPayloadCreateParams,
    type SeradataOpticalPayloadUpdateParams as SeradataOpticalPayloadUpdateParams,
    type SeradataOpticalPayloadListParams as SeradataOpticalPayloadListParams,
    type SeradataOpticalPayloadCountParams as SeradataOpticalPayloadCountParams,
    type SeradataOpticalPayloadGetParams as SeradataOpticalPayloadGetParams,
    type SeradataOpticalPayloadTupleParams as SeradataOpticalPayloadTupleParams,
  };
}
