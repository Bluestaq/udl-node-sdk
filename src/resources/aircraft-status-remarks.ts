// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AircraftStatusRemarks extends APIResource {
  /**
   * Service operation to take a single Aircraft Status Remark record as a POST body
   * and ingest into the database. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.aircraftStatusRemarks.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idAircraftStatus: '388b1f64-ccff-4113-b049-3cf5542c2a42',
   *   source: 'Bluestaq',
   *   text: 'Remark text',
   * });
   * ```
   */
  create(body: AircraftStatusRemarkCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/aircraftstatusremark', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Aircraft Status Remark record by its unique ID
   * passed as a path parameter.
   *
   * @example
   * ```ts
   * const aircraftstatusremarkFull =
   *   await client.aircraftStatusRemarks.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: AircraftStatusRemarkRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AircraftstatusremarkFull> {
    return this._client.get(path`/udl/aircraftstatusremark/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single Aircraft Status Remark record. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   *
   * @example
   * ```ts
   * await client.aircraftStatusRemarks.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idAircraftStatus: '388b1f64-ccff-4113-b049-3cf5542c2a42',
   *   source: 'Bluestaq',
   *   text: 'Remark text',
   * });
   * ```
   */
  update(pathID: string, body: AircraftStatusRemarkUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/aircraftstatusremark/${pathID}`, {
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
   * for await (const aircraftstatusremarkAbridged of client.aircraftStatusRemarks.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AircraftStatusRemarkListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AircraftstatusremarkAbridgedsOffsetPage, AircraftstatusremarkAbridged> {
    return this._client.getAPIList('/udl/aircraftstatusremark', OffsetPage<AircraftstatusremarkAbridged>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a single Aircraft Status Remark record specified by
   * the passed ID path parameter. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.aircraftStatusRemarks.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/aircraftstatusremark/${id}`, {
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
   * const response = await client.aircraftStatusRemarks.count();
   * ```
   */
  count(
    query: AircraftStatusRemarkCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/aircraftstatusremark/count', {
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
   * await client.aircraftStatusRemarks.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/aircraftstatusremark/queryhelp', {
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
   * const aircraftstatusremarkFulls =
   *   await client.aircraftStatusRemarks.tuple({
   *     columns: 'columns',
   *   });
   * ```
   */
  tuple(
    query: AircraftStatusRemarkTupleParams,
    options?: RequestOptions,
  ): APIPromise<AircraftStatusRemarkTupleResponse> {
    return this._client.get('/udl/aircraftstatusremark/tuple', { query, ...options });
  }
}

export type AircraftstatusremarkAbridgedsOffsetPage = OffsetPage<AircraftstatusremarkAbridged>;

/**
 * Properties and characteristics of a remark that is associated with an aircraft
 * status.
 */
export interface AircraftstatusremarkAbridged {
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
   * The ID of the Aircraft Status to which this remark applies.
   */
  idAircraftStatus: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The text of the remark.
   */
  text: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Unique identifier of the Aircraft Status Remark record from the originating
   * system.
   */
  altRmkId?: string;

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
   * Time the remark was last updated in the originating system in ISO 8601 UTC
   * format with millisecond precision.
   */
  lastUpdatedAt?: string;

  /**
   * The name or ID of the external user that updated this remark in the originating
   * system.
   */
  lastUpdatedBy?: string;

  /**
   * The name of the remark.
   */
  name?: string;

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
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Time the remark was created in the originating system in ISO 8601 UTC format
   * with millisecond precision.
   */
  timestamp?: string;
}

/**
 * Properties and characteristics of a remark that is associated with an aircraft
 * status.
 */
export interface AircraftstatusremarkFull {
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
   * The ID of the Aircraft Status to which this remark applies.
   */
  idAircraftStatus: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The text of the remark.
   */
  text: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Unique identifier of the Aircraft Status Remark record from the originating
   * system.
   */
  altRmkId?: string;

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
   * Time the remark was last updated in the originating system in ISO 8601 UTC
   * format with millisecond precision.
   */
  lastUpdatedAt?: string;

  /**
   * The name or ID of the external user that updated this remark in the originating
   * system.
   */
  lastUpdatedBy?: string;

  /**
   * The name of the remark.
   */
  name?: string;

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
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Time the remark was created in the originating system in ISO 8601 UTC format
   * with millisecond precision.
   */
  timestamp?: string;

  /**
   * Time the row was updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

export type AircraftStatusRemarkCountResponse = string;

export type AircraftStatusRemarkTupleResponse = Array<AircraftstatusremarkFull>;

export interface AircraftStatusRemarkCreateParams {
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
   * The ID of the Aircraft Status to which this remark applies.
   */
  idAircraftStatus: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The text of the remark.
   */
  text: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Unique identifier of the Aircraft Status Remark record from the originating
   * system.
   */
  altRmkId?: string;

  /**
   * Time the remark was last updated in the originating system in ISO 8601 UTC
   * format with millisecond precision.
   */
  lastUpdatedAt?: string;

  /**
   * The name or ID of the external user that updated this remark in the originating
   * system.
   */
  lastUpdatedBy?: string;

  /**
   * The name of the remark.
   */
  name?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Time the remark was created in the originating system in ISO 8601 UTC format
   * with millisecond precision.
   */
  timestamp?: string;
}

export interface AircraftStatusRemarkRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AircraftStatusRemarkUpdateParams {
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
   * The ID of the Aircraft Status to which this remark applies.
   */
  idAircraftStatus: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The text of the remark.
   */
  text: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  body_id?: string;

  /**
   * Unique identifier of the Aircraft Status Remark record from the originating
   * system.
   */
  altRmkId?: string;

  /**
   * Time the remark was last updated in the originating system in ISO 8601 UTC
   * format with millisecond precision.
   */
  lastUpdatedAt?: string;

  /**
   * The name or ID of the external user that updated this remark in the originating
   * system.
   */
  lastUpdatedBy?: string;

  /**
   * The name of the remark.
   */
  name?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Time the remark was created in the originating system in ISO 8601 UTC format
   * with millisecond precision.
   */
  timestamp?: string;
}

export interface AircraftStatusRemarkListParams extends OffsetPageParams {}

export interface AircraftStatusRemarkCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AircraftStatusRemarkTupleParams {
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

export declare namespace AircraftStatusRemarks {
  export {
    type AircraftstatusremarkAbridged as AircraftstatusremarkAbridged,
    type AircraftstatusremarkFull as AircraftstatusremarkFull,
    type AircraftStatusRemarkCountResponse as AircraftStatusRemarkCountResponse,
    type AircraftStatusRemarkTupleResponse as AircraftStatusRemarkTupleResponse,
    type AircraftstatusremarkAbridgedsOffsetPage as AircraftstatusremarkAbridgedsOffsetPage,
    type AircraftStatusRemarkCreateParams as AircraftStatusRemarkCreateParams,
    type AircraftStatusRemarkRetrieveParams as AircraftStatusRemarkRetrieveParams,
    type AircraftStatusRemarkUpdateParams as AircraftStatusRemarkUpdateParams,
    type AircraftStatusRemarkListParams as AircraftStatusRemarkListParams,
    type AircraftStatusRemarkCountParams as AircraftStatusRemarkCountParams,
    type AircraftStatusRemarkTupleParams as AircraftStatusRemarkTupleParams,
  };
}
