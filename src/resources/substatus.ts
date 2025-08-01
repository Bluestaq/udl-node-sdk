// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Substatus extends APIResource {
  /**
   * Service operation to take a single Sub Status record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.substatus.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   notes: 'Sample Notes',
   *   source: 'Bluestaq',
   *   status: 'FMC',
   *   statusId: 'REF-STATUS-ID',
   *   type: 'mdCap',
   * });
   * ```
   */
  create(body: SubstatusCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/substatus', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single Sub Status record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.substatus.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   notes: 'Sample Notes',
   *   source: 'Bluestaq',
   *   status: 'FMC',
   *   statusId: 'REF-STATUS-ID',
   *   type: 'mdCap',
   * });
   * ```
   */
  update(pathID: string, body: SubstatusUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/substatus/${pathID}`, {
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
   * for await (const substatusListResponse of client.substatus.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SubstatusListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SubstatusListResponsesOffsetPage, SubstatusListResponse> {
    return this._client.getAPIList('/udl/substatus', OffsetPage<SubstatusListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a Sub Status record specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.substatus.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/substatus/${id}`, {
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
   * const response = await client.substatus.count();
   * ```
   */
  count(query: SubstatusCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/substatus/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Sub Status record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const subStatusFull = await client.substatus.get('id');
   * ```
   */
  get(
    id: string,
    query: SubstatusGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.SubStatusFull> {
    return this._client.get(path`/udl/substatus/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.substatus.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<SubstatusQueryhelpResponse> {
    return this._client.get('/udl/substatus/queryhelp', options);
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
   * const subStatusFulls = await client.substatus.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: SubstatusTupleParams, options?: RequestOptions): APIPromise<SubstatusTupleResponse> {
    return this._client.get('/udl/substatus/tuple', { query, ...options });
  }
}

export type SubstatusListResponsesOffsetPage = OffsetPage<SubstatusListResponse>;

/**
 * Additional sub-system or capability status for the parent entity.
 */
export interface SubstatusListResponse {
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
   * Descriptions and/or comments associated with the sub-status.
   */
  notes: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Status of the sub-system/capability, e.g. FMC, NMC, PMC, UNK.
   */
  status: 'FMC' | 'NMC' | 'PMC' | 'UNK';

  /**
   * Id of the parent status.
   */
  statusId: string;

  /**
   * Parent entity's sub-system or capability status: mwCap, mdCap, ssCap, etc.
   */
  type: 'mwCap' | 'ssCap' | 'mdCap';

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

export type SubstatusCountResponse = string;

export interface SubstatusQueryhelpResponse {
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

export type SubstatusTupleResponse = Array<Shared.SubStatusFull>;

export interface SubstatusCreateParams {
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
   * Descriptions and/or comments associated with the sub-status.
   */
  notes: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Status of the sub-system/capability, e.g. FMC, NMC, PMC, UNK.
   */
  status: 'FMC' | 'NMC' | 'PMC' | 'UNK';

  /**
   * Id of the parent status.
   */
  statusId: string;

  /**
   * Parent entity's sub-system or capability status: mwCap, mdCap, ssCap, etc.
   */
  type: 'mwCap' | 'ssCap' | 'mdCap';

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

export interface SubstatusUpdateParams {
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
   * Descriptions and/or comments associated with the sub-status.
   */
  notes: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Status of the sub-system/capability, e.g. FMC, NMC, PMC, UNK.
   */
  status: 'FMC' | 'NMC' | 'PMC' | 'UNK';

  /**
   * Id of the parent status.
   */
  statusId: string;

  /**
   * Parent entity's sub-system or capability status: mwCap, mdCap, ssCap, etc.
   */
  type: 'mwCap' | 'ssCap' | 'mdCap';

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

export interface SubstatusListParams extends OffsetPageParams {}

export interface SubstatusCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SubstatusGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SubstatusTupleParams {
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

export declare namespace Substatus {
  export {
    type SubstatusListResponse as SubstatusListResponse,
    type SubstatusCountResponse as SubstatusCountResponse,
    type SubstatusQueryhelpResponse as SubstatusQueryhelpResponse,
    type SubstatusTupleResponse as SubstatusTupleResponse,
    type SubstatusListResponsesOffsetPage as SubstatusListResponsesOffsetPage,
    type SubstatusCreateParams as SubstatusCreateParams,
    type SubstatusUpdateParams as SubstatusUpdateParams,
    type SubstatusListParams as SubstatusListParams,
    type SubstatusCountParams as SubstatusCountParams,
    type SubstatusGetParams as SubstatusGetParams,
    type SubstatusTupleParams as SubstatusTupleParams,
  };
}
