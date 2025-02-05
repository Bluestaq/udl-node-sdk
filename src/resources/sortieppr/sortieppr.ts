// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
  SortiePprFull,
} from './history';

export class Sortieppr extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single sortieppr record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: SortiepprCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/sortieppr', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to update a single sortieppr record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  update(pathId: string, body: SortiepprUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/udl/sortieppr/${pathId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(query: SortiepprListParams, options?: Core.RequestOptions): Core.APIPromise<SortiepprListResponse> {
    return this._client.get('/udl/sortieppr', { query, ...options });
  }

  /**
   * Service operation to delete a sortieppr record specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/sortieppr/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: SortiepprCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/sortieppr/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * SortiePPR records as a POST body and ingest into the database. This operation is
   * not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   */
  createBulk(body: SortiepprCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/sortieppr/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to take SortiePPR as a POST body and ingest into the database.
   * This operation is intended to be used for automated feeds into UDL. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   */
  fileCreate(body: SortiepprFileCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/filedrop/udl-sortieppr', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single sortieppr record by its unique ID passed as a
   * path parameter.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<HistoryAPI.SortiePprFull> {
    return this._client.get(`/udl/sortieppr/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/sortieppr/queryhelp', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
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
  tuple(query: SortiepprTupleParams, options?: Core.RequestOptions): Core.APIPromise<SortiepprTupleResponse> {
    return this._client.get('/udl/sortieppr/tuple', { query, ...options });
  }
}

export type SortiepprListResponse = Array<SortiepprListResponse.SortiepprListResponseItem>;

export namespace SortiepprListResponse {
  /**
   * SortiePPR is a regulatory requirement where operators must obtain permissions to
   * full operational access to a runway, taxiway, or airport service.
   */
  export interface SortiepprListResponseItem {
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
     * Unique identifier of the Aircraft Sortie associated with this prior permission
     * required (PPR) record.
     */
    idSortie: string;

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
     * Time the prior permission required (PPR) valid window ends, in ISO 8601 UTC
     * format with millisecond precision.
     */
    endTime?: string;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * Identifier of the prior permission required (PPR) grantor.
     */
    grantor?: string;

    /**
     * The prior permission required (PPR) number issued by the airfield for a sortie.
     */
    number?: string;

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
     * Remarks concerning the prior permission required (PPR) for a sortie.
     */
    remarks?: string;

    /**
     * The username of the prior permission required (PPR) requestor.
     */
    requestor?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Time the prior permission required (PPR) valid window begins, in ISO 8601 UTC
     * format with millisecond precision.
     */
    startTime?: string;

    /**
     * Type of prior permission required (PPR) for a sortie (M - Military or C -
     * Civilian). Enum: [M, C].
     */
    type?: 'M' | 'C';
  }
}

export type SortiepprCountResponse = string;

export type SortiepprTupleResponse = Array<HistoryAPI.SortiePprFull>;

export interface SortiepprCreateParams {
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
   * Unique identifier of the Aircraft Sortie associated with this prior permission
   * required (PPR) record.
   */
  idSortie: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Time the prior permission required (PPR) valid window ends, in ISO 8601 UTC
   * format with millisecond precision.
   */
  endTime?: string;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * Identifier of the prior permission required (PPR) grantor.
   */
  grantor?: string;

  /**
   * The prior permission required (PPR) number issued by the airfield for a sortie.
   */
  number?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Remarks concerning the prior permission required (PPR) for a sortie.
   */
  remarks?: string;

  /**
   * The username of the prior permission required (PPR) requestor.
   */
  requestor?: string;

  /**
   * Time the prior permission required (PPR) valid window begins, in ISO 8601 UTC
   * format with millisecond precision.
   */
  startTime?: string;

  /**
   * Type of prior permission required (PPR) for a sortie (M - Military or C -
   * Civilian). Enum: [M, C].
   */
  type?: 'M' | 'C';
}

export interface SortiepprUpdateParams {
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
   * Unique identifier of the Aircraft Sortie associated with this prior permission
   * required (PPR) record.
   */
  idSortie: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Time the prior permission required (PPR) valid window ends, in ISO 8601 UTC
   * format with millisecond precision.
   */
  endTime?: string;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * Identifier of the prior permission required (PPR) grantor.
   */
  grantor?: string;

  /**
   * The prior permission required (PPR) number issued by the airfield for a sortie.
   */
  number?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Remarks concerning the prior permission required (PPR) for a sortie.
   */
  remarks?: string;

  /**
   * The username of the prior permission required (PPR) requestor.
   */
  requestor?: string;

  /**
   * Time the prior permission required (PPR) valid window begins, in ISO 8601 UTC
   * format with millisecond precision.
   */
  startTime?: string;

  /**
   * Type of prior permission required (PPR) for a sortie (M - Military or C -
   * Civilian). Enum: [M, C].
   */
  type?: 'M' | 'C';
}

export interface SortiepprListParams {
  /**
   * Unique identifier of the Aircraft Sortie associated with this prior permission
   * required (PPR) record.
   */
  idSortie: string;
}

export interface SortiepprCountParams {
  /**
   * Unique identifier of the Aircraft Sortie associated with this prior permission
   * required (PPR) record.
   */
  idSortie: string;
}

export type SortiepprCreateBulkParams = Array<SortiepprCreateBulkParams.Body>;

export namespace SortiepprCreateBulkParams {
  /**
   * SortiePPR is a regulatory requirement where operators must obtain permissions to
   * full operational access to a runway, taxiway, or airport service.
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
     * Unique identifier of the Aircraft Sortie associated with this prior permission
     * required (PPR) record.
     */
    idSortie: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Time the prior permission required (PPR) valid window ends, in ISO 8601 UTC
     * format with millisecond precision.
     */
    endTime?: string;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * Identifier of the prior permission required (PPR) grantor.
     */
    grantor?: string;

    /**
     * The prior permission required (PPR) number issued by the airfield for a sortie.
     */
    number?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Remarks concerning the prior permission required (PPR) for a sortie.
     */
    remarks?: string;

    /**
     * The username of the prior permission required (PPR) requestor.
     */
    requestor?: string;

    /**
     * Time the prior permission required (PPR) valid window begins, in ISO 8601 UTC
     * format with millisecond precision.
     */
    startTime?: string;

    /**
     * Type of prior permission required (PPR) for a sortie (M - Military or C -
     * Civilian). Enum: [M, C].
     */
    type?: 'M' | 'C';
  }
}

export type SortiepprFileCreateParams = Array<SortiepprFileCreateParams.Body>;

export namespace SortiepprFileCreateParams {
  /**
   * SortiePPR is a regulatory requirement where operators must obtain permissions to
   * full operational access to a runway, taxiway, or airport service.
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
     * Unique identifier of the Aircraft Sortie associated with this prior permission
     * required (PPR) record.
     */
    idSortie: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Time the prior permission required (PPR) valid window ends, in ISO 8601 UTC
     * format with millisecond precision.
     */
    endTime?: string;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * Identifier of the prior permission required (PPR) grantor.
     */
    grantor?: string;

    /**
     * The prior permission required (PPR) number issued by the airfield for a sortie.
     */
    number?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Remarks concerning the prior permission required (PPR) for a sortie.
     */
    remarks?: string;

    /**
     * The username of the prior permission required (PPR) requestor.
     */
    requestor?: string;

    /**
     * Time the prior permission required (PPR) valid window begins, in ISO 8601 UTC
     * format with millisecond precision.
     */
    startTime?: string;

    /**
     * Type of prior permission required (PPR) for a sortie (M - Military or C -
     * Civilian). Enum: [M, C].
     */
    type?: 'M' | 'C';
  }
}

export interface SortiepprTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Unique identifier of the Aircraft Sortie associated with this prior permission
   * required (PPR) record.
   */
  idSortie: string;
}

Sortieppr.History = History;

export declare namespace Sortieppr {
  export {
    type SortiepprListResponse as SortiepprListResponse,
    type SortiepprCountResponse as SortiepprCountResponse,
    type SortiepprTupleResponse as SortiepprTupleResponse,
    type SortiepprCreateParams as SortiepprCreateParams,
    type SortiepprUpdateParams as SortiepprUpdateParams,
    type SortiepprListParams as SortiepprListParams,
    type SortiepprCountParams as SortiepprCountParams,
    type SortiepprCreateBulkParams as SortiepprCreateBulkParams,
    type SortiepprFileCreateParams as SortiepprFileCreateParams,
    type SortiepprTupleParams as SortiepprTupleParams,
  };

  export {
    History as History,
    type SortiePprFull as SortiePprFull,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
