// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AntennasAPI from './antennas';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Onorbitantenna extends APIResource {
  /**
   * Service operation to take a single OnorbitAntenna as a POST body and ingest into
   * the database. An OnorbitAntenna is the association between on-orbit spacecraft
   * antennas and a particular on-orbit spacecraft. An antenna type may be associated
   * with many different on-orbit spacecraft. A specific role is required to perform
   * this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitantenna.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idAntenna: 'ANTENNA-ID',
   *   idOnOrbit: 'ONORBIT-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: OnorbitantennaCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/onorbitantenna', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single OnorbitAntenna. An OnorbitAntenna is the
   * association between on-orbit spacecraft antennas and a particular on-orbit
   * spacecraft. An antenna type may be associated with many different on-orbit
   * spacecraft. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitantenna.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idAntenna: 'ANTENNA-ID',
   *   idOnOrbit: 'ONORBIT-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: OnorbitantennaUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/onorbitantenna/${pathID}`, {
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
   * for await (const onorbitantennaListResponse of client.onorbitantenna.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OnorbitantennaListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OnorbitantennaListResponsesOffsetPage, OnorbitantennaListResponse> {
    return this._client.getAPIList('/udl/onorbitantenna', OffsetPage<OnorbitantennaListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a OnorbitAntenna object specified by the passed ID
   * path parameter. An OnorbitAntenna is the association between on-orbit spacecraft
   * antennas and a particular on-orbit spacecraft. An antenna type may be associated
   * with many different on-orbit spacecraft. A specific role is required to perform
   * this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitantenna.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/onorbitantenna/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single OnorbitAntenna record by its unique ID passed
   * as a path parameter. An OnorbitAntenna is the association between on-orbit
   * spacecraft antennas and a particular on-orbit spacecraft. An antenna type may be
   * associated with many different on-orbit spacecraft.
   *
   * @example
   * ```ts
   * const onorbitAntennaFull = await client.onorbitantenna.get(
   *   'id',
   * );
   * ```
   */
  get(
    id: string,
    query: OnorbitantennaGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.OnorbitAntennaFull> {
    return this._client.get(path`/udl/onorbitantenna/${id}`, { query, ...options });
  }
}

export type OnorbitantennaListResponsesOffsetPage = OffsetPage<OnorbitantennaListResponse>;

export interface OnorbitantennaListResponse {
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
   * ID of the antenna.
   */
  idAntenna: string;

  /**
   * ID of the on-orbit object.
   */
  idOnOrbit: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Model representation of information on on-orbit/spacecraft communication
   * antennas. A spacecraft may have multiple antennas and each antenna can have
   * multiple 'details' records compiled by different sources.
   */
  antenna?: AntennasAPI.AntennaAbridged;

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

export interface OnorbitantennaCreateParams {
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
   * ID of the antenna.
   */
  idAntenna: string;

  /**
   * ID of the on-orbit object.
   */
  idOnOrbit: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Model representation of information on on-orbit/spacecraft communication
   * antennas. A spacecraft may have multiple antennas and each antenna can have
   * multiple 'details' records compiled by different sources.
   */
  antenna?: Shared.AntennaIngest;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface OnorbitantennaUpdateParams {
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
   * ID of the antenna.
   */
  idAntenna: string;

  /**
   * ID of the on-orbit object.
   */
  idOnOrbit: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Model representation of information on on-orbit/spacecraft communication
   * antennas. A spacecraft may have multiple antennas and each antenna can have
   * multiple 'details' records compiled by different sources.
   */
  antenna?: Shared.AntennaIngest;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface OnorbitantennaListParams extends OffsetPageParams {}

export interface OnorbitantennaGetParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace Onorbitantenna {
  export {
    type OnorbitantennaListResponse as OnorbitantennaListResponse,
    type OnorbitantennaListResponsesOffsetPage as OnorbitantennaListResponsesOffsetPage,
    type OnorbitantennaCreateParams as OnorbitantennaCreateParams,
    type OnorbitantennaUpdateParams as OnorbitantennaUpdateParams,
    type OnorbitantennaListParams as OnorbitantennaListParams,
    type OnorbitantennaGetParams as OnorbitantennaGetParams,
  };
}
