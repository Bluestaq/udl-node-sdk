// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as Shared from 'bluestaq@unified-data-library/resources/shared';
import * as HistoryAPI from 'bluestaq@unified-data-library/resources/swir/history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  SwirFull,
  SwirFullsOffsetPage,
} from 'bluestaq@unified-data-library/resources/swir/history';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class Swir extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single SWIR record as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.swir.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   *   ts: '2021-01-01T01:01:01.123456Z',
   * });
   * ```
   */
  create(body: SwirCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/swir', {
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
   * for await (const swirListResponse of client.swir.list({
   *   ts: '2019-12-27T18:11:19.117Z',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SwirListParams,
    options?: RequestOptions,
  ): PagePromise<SwirListResponsesOffsetPage, SwirListResponse> {
    return this._client.getAPIList('/udl/swir', OffsetPage<SwirListResponse>, { query, ...options });
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
   * const response = await client.swir.count({
   *   ts: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: SwirCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/swir/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of SWIR
   * records as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.swir.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       source: 'Bluestaq',
   *       ts: '2021-01-01T01:01:01.123456Z',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: SwirCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/swir/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single SWIR record by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const swirFull = await client.swir.get('id');
   * ```
   */
  get(
    id: string,
    query: SwirGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HistoryAPI.SwirFull> {
    return this._client.get(path`/udl/swir/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.swir.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<SwirQueryhelpResponse> {
    return this._client.get('/udl/swir/queryhelp', options);
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
   * const swirFulls = await client.swir.tuple({
   *   columns: 'columns',
   *   ts: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: SwirTupleParams, options?: RequestOptions): APIPromise<SwirTupleResponse> {
    return this._client.get('/udl/swir/tuple', { query, ...options });
  }
}

export type SwirListResponsesOffsetPage = OffsetPage<SwirListResponse>;

/**
 * Data representing observed short wave infrared (SWIR) measurements.
 */
export interface SwirListResponse {
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
   * Data timestamp in ISO8601 UTC format.
   */
  ts: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * User comments concerning sensor or data limitations.
   */
  badWave?: string;

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
   * Unique identifier of the target on-orbit object.
   */
  idOnOrbit?: string;

  /**
   * Spacecraft WGS84 latitude, in degrees at obTime. -90 to 90 degrees (negative
   * values south of equator).
   */
  lat?: number;

  /**
   * Location/name of the observing sensor.
   */
  locationName?: string;

  /**
   * Spacecraft WGS84 longitude at ob time, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

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
   * Original object ID or Catalog Number provided by source.
   */
  origObjectId?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * The angle, in degrees, between the target-to-observer vector and the
   * target-to-sun vector.
   */
  solarPhaseAngle?: number;
}

export type SwirCountResponse = string;

export interface SwirQueryhelpResponse {
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

export type SwirTupleResponse = Array<HistoryAPI.SwirFull>;

export interface SwirCreateParams {
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
   * Data timestamp in ISO8601 UTC format.
   */
  ts: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Array of absolute flux measurement data, in Watts per square centimeter per
   * micron. This array should correspond with the same-sized array of wavelengths.
   */
  absFluxes?: Array<number>;

  /**
   * User comments concerning sensor or data limitations.
   */
  badWave?: string;

  /**
   * Array of flux ratio data. This array should correspond with the same-sized array
   * of ratioWavelengths.
   */
  fluxRatios?: Array<number>;

  /**
   * Spacecraft WGS84 latitude, in degrees at obTime. -90 to 90 degrees (negative
   * values south of equator).
   */
  lat?: number;

  /**
   * Location/name of the observing sensor.
   */
  locationName?: string;

  /**
   * Spacecraft WGS84 longitude at ob time, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Original object ID or Catalog Number provided by source.
   */
  origObjectId?: string;

  /**
   * Array of ratio wavelength data. This array should correspond with the same-sized
   * array of fluxRatios.
   */
  ratioWavelengths?: Array<number>;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * The angle, in degrees, between the target-to-observer vector and the
   * target-to-sun vector.
   */
  solarPhaseAngle?: number;

  /**
   * Array of wavelengths, in microns. This array should correspond with the
   * same-sized array of absFluxes.
   */
  wavelengths?: Array<number>;
}

export interface SwirListParams extends OffsetPageParams {
  /**
   * Data timestamp in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;
}

export interface SwirCountParams {
  /**
   * Data timestamp in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface SwirCreateBulkParams {
  body: Array<SwirCreateBulkParams.Body>;
}

export namespace SwirCreateBulkParams {
  /**
   * Data representing observed short wave infrared (SWIR) measurements.
   */
  export interface Body {
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
     * Data timestamp in ISO8601 UTC format.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Array of absolute flux measurement data, in Watts per square centimeter per
     * micron. This array should correspond with the same-sized array of wavelengths.
     */
    absFluxes?: Array<number>;

    /**
     * User comments concerning sensor or data limitations.
     */
    badWave?: string;

    /**
     * Array of flux ratio data. This array should correspond with the same-sized array
     * of ratioWavelengths.
     */
    fluxRatios?: Array<number>;

    /**
     * Spacecraft WGS84 latitude, in degrees at obTime. -90 to 90 degrees (negative
     * values south of equator).
     */
    lat?: number;

    /**
     * Location/name of the observing sensor.
     */
    locationName?: string;

    /**
     * Spacecraft WGS84 longitude at ob time, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Original object ID or Catalog Number provided by source.
     */
    origObjectId?: string;

    /**
     * Array of ratio wavelength data. This array should correspond with the same-sized
     * array of fluxRatios.
     */
    ratioWavelengths?: Array<number>;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * The angle, in degrees, between the target-to-observer vector and the
     * target-to-sun vector.
     */
    solarPhaseAngle?: number;

    /**
     * Array of wavelengths, in microns. This array should correspond with the
     * same-sized array of absFluxes.
     */
    wavelengths?: Array<number>;
  }
}

export interface SwirGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SwirTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Data timestamp in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

Swir.History = History;

export declare namespace Swir {
  export {
    type SwirListResponse as SwirListResponse,
    type SwirCountResponse as SwirCountResponse,
    type SwirQueryhelpResponse as SwirQueryhelpResponse,
    type SwirTupleResponse as SwirTupleResponse,
    type SwirListResponsesOffsetPage as SwirListResponsesOffsetPage,
    type SwirCreateParams as SwirCreateParams,
    type SwirListParams as SwirListParams,
    type SwirCountParams as SwirCountParams,
    type SwirCreateBulkParams as SwirCreateBulkParams,
    type SwirGetParams as SwirGetParams,
    type SwirTupleParams as SwirTupleParams,
  };

  export {
    History as History,
    type SwirFull as SwirFull,
    type HistoryCountResponse as HistoryCountResponse,
    type SwirFullsOffsetPage as SwirFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
