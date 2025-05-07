// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AntennaDetailsAPI from './onorbit/antenna-details';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Antennas extends APIResource {
  /**
   * Service operation to take a single Antenna as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.antennas.create({
   *   dataMode: 'TEST',
   *   name: 'IRIDIUM NEXT 121-ANTENNA-10075',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: AntennaCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/antenna', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Antenna record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const antennaFull = await client.antennas.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: AntennaRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AntennaFull> {
    return this._client.get(path`/udl/antenna/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single Antenna. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.antennas.update('id', {
   *   dataMode: 'TEST',
   *   name: 'IRIDIUM NEXT 121-ANTENNA-10075',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: AntennaUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/antenna/${pathID}`, {
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
   * for await (const antennaAbridged of client.antennas.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AntennaListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AntennaAbridgedsOffsetPage, AntennaAbridged> {
    return this._client.getAPIList('/udl/antenna', OffsetPage<AntennaAbridged>, { query, ...options });
  }

  /**
   * Service operation to delete a Antenna object specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.antennas.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/antenna/${id}`, {
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
   * const response = await client.antennas.count();
   * ```
   */
  count(query: AntennaCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/antenna/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * await client.antennas.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/antenna/queryhelp', {
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
   *
   * @example
   * ```ts
   * const antennaFulls = await client.antennas.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: AntennaTupleParams, options?: RequestOptions): APIPromise<AntennaTupleResponse> {
    return this._client.get('/udl/antenna/tuple', { query, ...options });
  }
}

export type AntennaAbridgedsOffsetPage = OffsetPage<AntennaAbridged>;

/**
 * Model representation of information on on-orbit/spacecraft communication
 * antennas. A spacecraft may have multiple antennas and each antenna can have
 * multiple 'details' records compiled by different sources.
 */
export interface AntennaAbridged {
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
   * Antenna name.
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
}

/**
 * Model representation of information on on-orbit/spacecraft communication
 * antennas. A spacecraft may have multiple antennas and each antenna can have
 * multiple 'details' records compiled by different sources.
 */
export interface AntennaFull {
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
   * Antenna name.
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

  /**
   * Read-only collection of additional AntennaDetails by various sources for this
   * organization, ignored on create/update. These details must be created separately
   * via the /udl/antennadetails operations.
   */
  antennaDetails?: Array<AntennaDetailsAPI.AntennaDetailsFull>;

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
   * Time the row was last updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

export type AntennaCountResponse = string;

export type AntennaTupleResponse = Array<AntennaFull>;

export interface AntennaCreateParams {
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
   * Antenna name.
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

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface AntennaRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AntennaUpdateParams {
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
   * Antenna name.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface AntennaListParams extends OffsetPageParams {}

export interface AntennaCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AntennaTupleParams {
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

export declare namespace Antennas {
  export {
    type AntennaAbridged as AntennaAbridged,
    type AntennaFull as AntennaFull,
    type AntennaCountResponse as AntennaCountResponse,
    type AntennaTupleResponse as AntennaTupleResponse,
    type AntennaAbridgedsOffsetPage as AntennaAbridgedsOffsetPage,
    type AntennaCreateParams as AntennaCreateParams,
    type AntennaRetrieveParams as AntennaRetrieveParams,
    type AntennaUpdateParams as AntennaUpdateParams,
    type AntennaListParams as AntennaListParams,
    type AntennaCountParams as AntennaCountParams,
    type AntennaTupleParams as AntennaTupleParams,
  };
}
