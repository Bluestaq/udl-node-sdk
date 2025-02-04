// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Status extends APIResource {
  /**
   * Service operation to take a single Status as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  create(body: StatusCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/status', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to update a single Status. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   */
  update(id1: string, body: StatusUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/udl/status/${id1}`, {
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
  list(options?: Core.RequestOptions): Core.APIPromise<StatusListResponse> {
    return this._client.get('/udl/status', options);
  }

  /**
   * Service operation to delete a Status object specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/status/${id}`, {
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
    return this._client.get('/udl/status/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single Status record by its unique ID passed as a
   * path parameter.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<StatusGetResponse> {
    return this._client.get(`/udl/status/${id}`, options);
  }

  /**
   * Service operation to get all statuses related to a particular entity.
   */
  getByEntityId(
    idEntity: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusGetByEntityIDResponse> {
    return this._client.get(`/udl/status/byIdEntity/${idEntity}`, options);
  }

  /**
   * Service operation to get all statuses related to a particular entity type.
   */
  getByEntityType(
    entityType: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusGetByEntityTypeResponse> {
    return this._client.get(`/udl/status/byEntityType/${entityType}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/status/queryhelp', {
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
  tuple(query: StatusTupleParams, options?: Core.RequestOptions): Core.APIPromise<StatusTupleResponse> {
    return this._client.get('/udl/status/tuple', { query, ...options });
  }
}

export type StatusListResponse = Array<StatusListResponse.StatusListResponseItem>;

export namespace StatusListResponse {
  /**
   * Status for a particular Entity. An entity may have multiple status records
   * collected by various sources.
   */
  export interface StatusListResponseItem {
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
     * Unique identifier of the parent entity.
     */
    idEntity: string;

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
     * The declassification date of this data, in ISO 8601 UTC format.
     */
    declassificationDate?: string;

    /**
     * Declassification string of this data.
     */
    declassificationString?: string;

    /**
     * The sources or SCG references from which the classification of this data is
     * derived.
     */
    derivedFrom?: string;

    /**
     * Comments describing the status creation and or updates to an entity.
     */
    notes?: string;

    /**
     * Operation capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
     */
    opsCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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
     * Overall state of the entity, if applicable (e.g. UNKNOWN, DEAD, ACTIVE, RF
     * ACTIVE, STANDBY).
     */
    state?: 'UNKNOWN' | 'DEAD' | 'ACTIVE' | 'RF ACTIVE' | 'STANDBY';

    subStatusCollection?: Array<StatusListResponseItem.SubStatusCollection>;

    /**
     * System capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
     */
    sysCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';
  }

  export namespace StatusListResponseItem {
    /**
     * Additional sub-system or capability status for the parent entity.
     */
    export interface SubStatusCollection {
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
  }
}

export type StatusCountResponse = string;

/**
 * Status for a particular Entity. An entity may have multiple status records
 * collected by various sources.
 */
export interface StatusGetResponse {
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
   * Unique identifier of the parent entity.
   */
  idEntity: string;

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
   * The declassification date of this data, in ISO 8601 UTC format.
   */
  declassificationDate?: string;

  /**
   * Declassification string of this data.
   */
  declassificationString?: string;

  /**
   * The sources or SCG references from which the classification of this data is
   * derived.
   */
  derivedFrom?: string;

  /**
   * Comments describing the status creation and or updates to an entity.
   */
  notes?: string;

  /**
   * Operation capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
   */
  opsCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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
   * Overall state of the entity, if applicable (e.g. UNKNOWN, DEAD, ACTIVE, RF
   * ACTIVE, STANDBY).
   */
  state?: 'UNKNOWN' | 'DEAD' | 'ACTIVE' | 'RF ACTIVE' | 'STANDBY';

  subStatusCollection?: Array<StatusGetResponse.SubStatusCollection>;

  /**
   * System capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
   */
  sysCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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

export namespace StatusGetResponse {
  /**
   * Additional sub-system or capability status for the parent entity.
   */
  export interface SubStatusCollection {
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
}

export type StatusGetByEntityIDResponse = Array<StatusGetByEntityIDResponse.StatusGetByEntityIDResponseItem>;

export namespace StatusGetByEntityIDResponse {
  /**
   * Status for a particular Entity. An entity may have multiple status records
   * collected by various sources.
   */
  export interface StatusGetByEntityIDResponseItem {
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
     * Unique identifier of the parent entity.
     */
    idEntity: string;

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
     * The declassification date of this data, in ISO 8601 UTC format.
     */
    declassificationDate?: string;

    /**
     * Declassification string of this data.
     */
    declassificationString?: string;

    /**
     * The sources or SCG references from which the classification of this data is
     * derived.
     */
    derivedFrom?: string;

    /**
     * Comments describing the status creation and or updates to an entity.
     */
    notes?: string;

    /**
     * Operation capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
     */
    opsCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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
     * Overall state of the entity, if applicable (e.g. UNKNOWN, DEAD, ACTIVE, RF
     * ACTIVE, STANDBY).
     */
    state?: 'UNKNOWN' | 'DEAD' | 'ACTIVE' | 'RF ACTIVE' | 'STANDBY';

    subStatusCollection?: Array<StatusGetByEntityIDResponseItem.SubStatusCollection>;

    /**
     * System capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
     */
    sysCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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

  export namespace StatusGetByEntityIDResponseItem {
    /**
     * Additional sub-system or capability status for the parent entity.
     */
    export interface SubStatusCollection {
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
  }
}

export type StatusGetByEntityTypeResponse =
  Array<StatusGetByEntityTypeResponse.StatusGetByEntityTypeResponseItem>;

export namespace StatusGetByEntityTypeResponse {
  /**
   * Status for a particular Entity. An entity may have multiple status records
   * collected by various sources.
   */
  export interface StatusGetByEntityTypeResponseItem {
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
     * Unique identifier of the parent entity.
     */
    idEntity: string;

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
     * The declassification date of this data, in ISO 8601 UTC format.
     */
    declassificationDate?: string;

    /**
     * Declassification string of this data.
     */
    declassificationString?: string;

    /**
     * The sources or SCG references from which the classification of this data is
     * derived.
     */
    derivedFrom?: string;

    /**
     * Comments describing the status creation and or updates to an entity.
     */
    notes?: string;

    /**
     * Operation capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
     */
    opsCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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
     * Overall state of the entity, if applicable (e.g. UNKNOWN, DEAD, ACTIVE, RF
     * ACTIVE, STANDBY).
     */
    state?: 'UNKNOWN' | 'DEAD' | 'ACTIVE' | 'RF ACTIVE' | 'STANDBY';

    subStatusCollection?: Array<StatusGetByEntityTypeResponseItem.SubStatusCollection>;

    /**
     * System capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
     */
    sysCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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

  export namespace StatusGetByEntityTypeResponseItem {
    /**
     * Additional sub-system or capability status for the parent entity.
     */
    export interface SubStatusCollection {
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
  }
}

export type StatusTupleResponse = Array<StatusTupleResponse.StatusTupleResponseItem>;

export namespace StatusTupleResponse {
  /**
   * Status for a particular Entity. An entity may have multiple status records
   * collected by various sources.
   */
  export interface StatusTupleResponseItem {
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
     * Unique identifier of the parent entity.
     */
    idEntity: string;

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
     * The declassification date of this data, in ISO 8601 UTC format.
     */
    declassificationDate?: string;

    /**
     * Declassification string of this data.
     */
    declassificationString?: string;

    /**
     * The sources or SCG references from which the classification of this data is
     * derived.
     */
    derivedFrom?: string;

    /**
     * Comments describing the status creation and or updates to an entity.
     */
    notes?: string;

    /**
     * Operation capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
     */
    opsCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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
     * Overall state of the entity, if applicable (e.g. UNKNOWN, DEAD, ACTIVE, RF
     * ACTIVE, STANDBY).
     */
    state?: 'UNKNOWN' | 'DEAD' | 'ACTIVE' | 'RF ACTIVE' | 'STANDBY';

    subStatusCollection?: Array<StatusTupleResponseItem.SubStatusCollection>;

    /**
     * System capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
     */
    sysCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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

  export namespace StatusTupleResponseItem {
    /**
     * Additional sub-system or capability status for the parent entity.
     */
    export interface SubStatusCollection {
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
  }
}

export interface StatusCreateParams {
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
   * Unique identifier of the parent entity.
   */
  idEntity: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The declassification date of this data, in ISO 8601 UTC format.
   */
  declassificationDate?: string;

  /**
   * Declassification string of this data.
   */
  declassificationString?: string;

  /**
   * The sources or SCG references from which the classification of this data is
   * derived.
   */
  derivedFrom?: string;

  /**
   * Comments describing the status creation and or updates to an entity.
   */
  notes?: string;

  /**
   * Operation capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
   */
  opsCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Overall state of the entity, if applicable (e.g. UNKNOWN, DEAD, ACTIVE, RF
   * ACTIVE, STANDBY).
   */
  state?: 'UNKNOWN' | 'DEAD' | 'ACTIVE' | 'RF ACTIVE' | 'STANDBY';

  subStatusCollection?: Array<StatusCreateParams.SubStatusCollection>;

  /**
   * System capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
   */
  sysCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';
}

export namespace StatusCreateParams {
  /**
   * Additional sub-system or capability status for the parent entity.
   */
  export interface SubStatusCollection {
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
}

export interface StatusUpdateParams {
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
   * Unique identifier of the parent entity.
   */
  idEntity: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The declassification date of this data, in ISO 8601 UTC format.
   */
  declassificationDate?: string;

  /**
   * Declassification string of this data.
   */
  declassificationString?: string;

  /**
   * The sources or SCG references from which the classification of this data is
   * derived.
   */
  derivedFrom?: string;

  /**
   * Comments describing the status creation and or updates to an entity.
   */
  notes?: string;

  /**
   * Operation capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
   */
  opsCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Overall state of the entity, if applicable (e.g. UNKNOWN, DEAD, ACTIVE, RF
   * ACTIVE, STANDBY).
   */
  state?: 'UNKNOWN' | 'DEAD' | 'ACTIVE' | 'RF ACTIVE' | 'STANDBY';

  subStatusCollection?: Array<StatusUpdateParams.SubStatusCollection>;

  /**
   * System capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
   */
  sysCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';
}

export namespace StatusUpdateParams {
  /**
   * Additional sub-system or capability status for the parent entity.
   */
  export interface SubStatusCollection {
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
}

export interface StatusTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

export declare namespace Status {
  export {
    type StatusListResponse as StatusListResponse,
    type StatusCountResponse as StatusCountResponse,
    type StatusGetResponse as StatusGetResponse,
    type StatusGetByEntityIDResponse as StatusGetByEntityIDResponse,
    type StatusGetByEntityTypeResponse as StatusGetByEntityTypeResponse,
    type StatusTupleResponse as StatusTupleResponse,
    type StatusCreateParams as StatusCreateParams,
    type StatusUpdateParams as StatusUpdateParams,
    type StatusTupleParams as StatusTupleParams,
  };
}
