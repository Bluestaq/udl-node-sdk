// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Beam extends APIResource {
  /**
   * Service operation to take a single Beam as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.beam.create({
   *   beamName: 'BEAMNAME-ID',
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: BeamCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/beam', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Beam record by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const beamFull = await client.beam.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: BeamRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.BeamFull> {
    return this._client.get(path`/udl/beam/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single Beam. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.beam.update('id', {
   *   beamName: 'BEAMNAME-ID',
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: BeamUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/beam/${pathID}`, {
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
   * for await (const beamAbridged of client.beam.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BeamListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BeamAbridgedsOffsetPage, BeamAbridged> {
    return this._client.getAPIList('/udl/beam', OffsetPage<BeamAbridged>, { query, ...options });
  }

  /**
   * Service operation to delete a Beam object specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.beam.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/beam/${id}`, {
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
   * const response = await client.beam.count();
   * ```
   */
  count(query: BeamCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/beam/count', {
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
   * const response = await client.beam.queryHelp();
   * ```
   */
  queryHelp(options?: RequestOptions): APIPromise<BeamQueryHelpResponse> {
    return this._client.get('/udl/beam/queryhelp', options);
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
   * const beamFulls = await client.beam.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: BeamTupleParams, options?: RequestOptions): APIPromise<BeamTupleResponse> {
    return this._client.get('/udl/beam/tuple', { query, ...options });
  }
}

export type BeamAbridgedsOffsetPage = OffsetPage<BeamAbridged>;

/**
 * Describes a satellite antenna beam.
 */
export interface BeamAbridged {
  /**
   * The antenna beam ID of the particular beam for this channel. beamName is not
   * unique across payloads.
   */
  beamName: string;

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
   * Optional notes/comments on this beam.
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
}

export type BeamCountResponse = string;

export interface BeamQueryHelpResponse {
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

export type BeamTupleResponse = Array<Shared.BeamFull>;

export interface BeamCreateParams {
  /**
   * The antenna beam ID of the particular beam for this channel. beamName is not
   * unique across payloads.
   */
  beamName: string;

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
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Optional notes/comments on this beam.
   */
  notes?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface BeamRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface BeamUpdateParams {
  /**
   * The antenna beam ID of the particular beam for this channel. beamName is not
   * unique across payloads.
   */
  beamName: string;

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
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Optional notes/comments on this beam.
   */
  notes?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface BeamListParams extends OffsetPageParams {}

export interface BeamCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface BeamTupleParams {
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

export declare namespace Beam {
  export {
    type BeamAbridged as BeamAbridged,
    type BeamCountResponse as BeamCountResponse,
    type BeamQueryHelpResponse as BeamQueryHelpResponse,
    type BeamTupleResponse as BeamTupleResponse,
    type BeamAbridgedsOffsetPage as BeamAbridgedsOffsetPage,
    type BeamCreateParams as BeamCreateParams,
    type BeamRetrieveParams as BeamRetrieveParams,
    type BeamUpdateParams as BeamUpdateParams,
    type BeamListParams as BeamListParams,
    type BeamCountParams as BeamCountParams,
    type BeamTupleParams as BeamTupleParams,
  };
}
