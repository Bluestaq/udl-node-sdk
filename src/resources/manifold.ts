// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Manifold extends APIResource {
  /**
   * Service operation to take a single Manifold as a POST body and ingest into the
   * database. A manifold represents a set of possible/theoretical orbits for an
   * object of interest based on a delta V and delta T. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   */
  create(body: ManifoldCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/manifold', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to update a single Manifold. A manifold represents a set of
   * possible/theoretical orbits for an object of interest based on a delta V and
   * delta T. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  update(params: ManifoldUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/udl/manifold/${path_id}`, {
      body: { id: body_id, ...body },
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
  list(options?: Core.RequestOptions): Core.APIPromise<ManifoldListResponse> {
    return this._client.get('/udl/manifold', options);
  }

  /**
   * Service operation to delete a Manifold object specified by the passed ID path
   * parameter. A manifold represents a set of possible/theoretical orbits for an
   * object of interest based on a delta V and delta T. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/manifold/${id}`, {
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
  count(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/manifold/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to take multiple Manifolds as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  createBulk(body: ManifoldCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/manifold/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single Manifold record by its unique ID passed as a
   * path parameter. A manifold represents a set of possible/theoretical orbits for
   * an object of interest based on a delta V and delta T.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<ManifoldGetResponse> {
    return this._client.get(`/udl/manifold/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/manifold/queryhelp', {
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
  tuple(query: ManifoldTupleParams, options?: Core.RequestOptions): Core.APIPromise<ManifoldTupleResponse> {
    return this._client.get('/udl/manifold/tuple', { query, ...options });
  }
}

export type ManifoldListResponse = Array<ManifoldListResponse.ManifoldListResponseItem>;

export namespace ManifoldListResponse {
  /**
   * A manifold represents a set of possible/theoretical orbits for an object of
   * interest based on a delta V and delta T.
   */
  export interface ManifoldListResponseItem {
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
     * ID of the parent object of interest.
     */
    idObjectOfInterest: string;

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
     * Applied delta V duration for this manifold's calculations in seconds.
     */
    deltaT?: number;

    /**
     * Applied delta V for this manifold's calculations, in km/sec.
     */
    deltaV?: number;

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
     * Status of the manifold and its associated ManifoldElsets (e.g. PENDING,
     * COMPLETE). PENDING status means element set generation is in progress and
     * COMPLETE indicates all ManifoldElsets have been generated.
     */
    status?: string;

    /**
     * Weight or probability of this manifold for prioritization purposes, between 0
     * and 1.
     */
    weight?: number;
  }
}

export type ManifoldCountResponse = string;

/**
 * A manifold represents a set of possible/theoretical orbits for an object of
 * interest based on a delta V and delta T.
 */
export interface ManifoldGetResponse {
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
   * ID of the parent object of interest.
   */
  idObjectOfInterest: string;

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
   * Applied delta V duration for this manifold's calculations in seconds.
   */
  deltaT?: number;

  /**
   * Applied delta V for this manifold's calculations, in km/sec.
   */
  deltaV?: number;

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
   * Status of the manifold and its associated ManifoldElsets (e.g. PENDING,
   * COMPLETE). PENDING status means element set generation is in progress and
   * COMPLETE indicates all ManifoldElsets have been generated.
   */
  status?: string;

  /**
   * Read-only time the row was updated in the database, set automatically by the
   * system on update.
   */
  updatedAt?: string;

  /**
   * Application user who last updated the row in the database, set by the system
   * automatically and ignored on create/edit operations.
   */
  updatedBy?: string;

  /**
   * Weight or probability of this manifold for prioritization purposes, between 0
   * and 1.
   */
  weight?: number;
}

export type ManifoldTupleResponse = Array<ManifoldTupleResponse.ManifoldTupleResponseItem>;

export namespace ManifoldTupleResponse {
  /**
   * A manifold represents a set of possible/theoretical orbits for an object of
   * interest based on a delta V and delta T.
   */
  export interface ManifoldTupleResponseItem {
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
     * ID of the parent object of interest.
     */
    idObjectOfInterest: string;

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
     * Applied delta V duration for this manifold's calculations in seconds.
     */
    deltaT?: number;

    /**
     * Applied delta V for this manifold's calculations, in km/sec.
     */
    deltaV?: number;

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
     * Status of the manifold and its associated ManifoldElsets (e.g. PENDING,
     * COMPLETE). PENDING status means element set generation is in progress and
     * COMPLETE indicates all ManifoldElsets have been generated.
     */
    status?: string;

    /**
     * Read-only time the row was updated in the database, set automatically by the
     * system on update.
     */
    updatedAt?: string;

    /**
     * Application user who last updated the row in the database, set by the system
     * automatically and ignored on create/edit operations.
     */
    updatedBy?: string;

    /**
     * Weight or probability of this manifold for prioritization purposes, between 0
     * and 1.
     */
    weight?: number;
  }
}

export interface ManifoldCreateParams {
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
   * ID of the parent object of interest.
   */
  idObjectOfInterest: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Applied delta V duration for this manifold's calculations in seconds.
   */
  deltaT?: number;

  /**
   * Applied delta V for this manifold's calculations, in km/sec.
   */
  deltaV?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Status of the manifold and its associated ManifoldElsets (e.g. PENDING,
   * COMPLETE). PENDING status means element set generation is in progress and
   * COMPLETE indicates all ManifoldElsets have been generated.
   */
  status?: string;

  /**
   * Weight or probability of this manifold for prioritization purposes, between 0
   * and 1.
   */
  weight?: number;
}

export interface ManifoldUpdateParams {
  /**
   * Path param: The ID of the Manifold to update.
   */
  path_id: string;

  /**
   * Body param: Classification marking of the data in IC/CAPCO Portion-marked
   * format.
   */
  classificationMarking: string;

  /**
   * Body param: Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST
   * data:
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
   * Body param: ID of the parent object of interest.
   */
  idObjectOfInterest: string;

  /**
   * Body param: Source of the data.
   */
  source: string;

  /**
   * Body param: Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Body param: Applied delta V duration for this manifold's calculations in
   * seconds.
   */
  deltaT?: number;

  /**
   * Body param: Applied delta V for this manifold's calculations, in km/sec.
   */
  deltaV?: number;

  /**
   * Body param: Originating system or organization which produced the data, if
   * different from the source. The origin may be different than the source if the
   * source was a mediating system which forwarded the data on behalf of the origin
   * system. If null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Body param: Status of the manifold and its associated ManifoldElsets (e.g.
   * PENDING, COMPLETE). PENDING status means element set generation is in progress
   * and COMPLETE indicates all ManifoldElsets have been generated.
   */
  status?: string;

  /**
   * Body param: Weight or probability of this manifold for prioritization purposes,
   * between 0 and 1.
   */
  weight?: number;
}

export type ManifoldCreateBulkParams = Array<ManifoldCreateBulkParams.Body>;

export namespace ManifoldCreateBulkParams {
  /**
   * A manifold represents a set of possible/theoretical orbits for an object of
   * interest based on a delta V and delta T.
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
     * ID of the parent object of interest.
     */
    idObjectOfInterest: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Applied delta V duration for this manifold's calculations in seconds.
     */
    deltaT?: number;

    /**
     * Applied delta V for this manifold's calculations, in km/sec.
     */
    deltaV?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Status of the manifold and its associated ManifoldElsets (e.g. PENDING,
     * COMPLETE). PENDING status means element set generation is in progress and
     * COMPLETE indicates all ManifoldElsets have been generated.
     */
    status?: string;

    /**
     * Weight or probability of this manifold for prioritization purposes, between 0
     * and 1.
     */
    weight?: number;
  }
}

export interface ManifoldTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

export declare namespace Manifold {
  export {
    type ManifoldListResponse as ManifoldListResponse,
    type ManifoldCountResponse as ManifoldCountResponse,
    type ManifoldGetResponse as ManifoldGetResponse,
    type ManifoldTupleResponse as ManifoldTupleResponse,
    type ManifoldCreateParams as ManifoldCreateParams,
    type ManifoldUpdateParams as ManifoldUpdateParams,
    type ManifoldCreateBulkParams as ManifoldCreateBulkParams,
    type ManifoldTupleParams as ManifoldTupleParams,
  };
}
