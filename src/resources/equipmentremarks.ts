// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Equipmentremarks extends APIResource {
  /**
   * Service operation to take a single equipmentremark record as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: EquipmentremarkCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/equipmentremark', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single equipmentremark record by its unique ID passed
   * as a path parameter.
   */
  retrieve(
    id: string,
    query: EquipmentremarkRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EquipmentRemarkFull> {
    return this._client.get(path`/udl/equipmentremark/${id}`, { query, ...options });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: EquipmentremarkListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EquipmentremarkListResponse> {
    return this._client.get('/udl/equipmentremark', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(
    query: EquipmentremarkCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/equipmentremark/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * equipmentremark records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   */
  createBulk(params: EquipmentremarkCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/equipmentremark/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryHelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/equipmentremark/queryhelp', {
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
    query: EquipmentremarkTupleParams,
    options?: RequestOptions,
  ): APIPromise<EquipmentremarkTupleResponse> {
    return this._client.get('/udl/equipmentremark/tuple', { query, ...options });
  }
}

/**
 * Remarks contain amplifying information for a specific service. The information
 * may contain context and interpretations for consumer use.
 */
export interface EquipmentRemarkAbridged {
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
   * The ID of the Equipment to which this remark applies.
   */
  idEquipment: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The text of the remark.
   */
  text: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Unique identifier of the Equipment Remark record from the originating system.
   */
  altRmkId?: string;

  /**
   * The remark type identifier. For example, the Mobility Air Forces (MAF) remark
   * code, defined in the Airfield Suitability and Restriction Report (ASRR).
   */
  code?: string;

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
   * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
   */
  type?: string;
}

/**
 * Remarks contain amplifying information for a specific service. The information
 * may contain context and interpretations for consumer use.
 */
export interface EquipmentRemarkFull {
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
   * The ID of the Equipment to which this remark applies.
   */
  idEquipment: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The text of the remark.
   */
  text: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Unique identifier of the Equipment Remark record from the originating system.
   */
  altRmkId?: string;

  /**
   * The remark type identifier. For example, the Mobility Air Forces (MAF) remark
   * code, defined in the Airfield Suitability and Restriction Report (ASRR).
   */
  code?: string;

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
   * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
   */
  type?: string;

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

export type EquipmentremarkListResponse = Array<EquipmentRemarkAbridged>;

export type EquipmentremarkCountResponse = string;

export type EquipmentremarkTupleResponse = Array<EquipmentRemarkFull>;

export interface EquipmentremarkCreateParams {
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
   * The ID of the Equipment to which this remark applies.
   */
  idEquipment: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The text of the remark.
   */
  text: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Unique identifier of the Equipment Remark record from the originating system.
   */
  altRmkId?: string;

  /**
   * The remark type identifier. For example, the Mobility Air Forces (MAF) remark
   * code, defined in the Airfield Suitability and Restriction Report (ASRR).
   */
  code?: string;

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
   * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
   */
  type?: string;
}

export interface EquipmentremarkRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface EquipmentremarkListParams {
  firstResult?: number;

  maxResults?: number;
}

export interface EquipmentremarkCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface EquipmentremarkCreateBulkParams {
  body: Array<EquipmentremarkCreateBulkParams.Body>;
}

export namespace EquipmentremarkCreateBulkParams {
  /**
   * Remarks contain amplifying information for a specific service. The information
   * may contain context and interpretations for consumer use.
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
     * The ID of the Equipment to which this remark applies.
     */
    idEquipment: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The text of the remark.
     */
    text: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Unique identifier of the Equipment Remark record from the originating system.
     */
    altRmkId?: string;

    /**
     * The remark type identifier. For example, the Mobility Air Forces (MAF) remark
     * code, defined in the Airfield Suitability and Restriction Report (ASRR).
     */
    code?: string;

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
     * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
     */
    type?: string;
  }
}

export interface EquipmentremarkTupleParams {
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

export declare namespace Equipmentremarks {
  export {
    type EquipmentRemarkAbridged as EquipmentRemarkAbridged,
    type EquipmentRemarkFull as EquipmentRemarkFull,
    type EquipmentremarkListResponse as EquipmentremarkListResponse,
    type EquipmentremarkCountResponse as EquipmentremarkCountResponse,
    type EquipmentremarkTupleResponse as EquipmentremarkTupleResponse,
    type EquipmentremarkCreateParams as EquipmentremarkCreateParams,
    type EquipmentremarkRetrieveParams as EquipmentremarkRetrieveParams,
    type EquipmentremarkListParams as EquipmentremarkListParams,
    type EquipmentremarkCountParams as EquipmentremarkCountParams,
    type EquipmentremarkCreateBulkParams as EquipmentremarkCreateBulkParams,
    type EquipmentremarkTupleParams as EquipmentremarkTupleParams,
  };
}
