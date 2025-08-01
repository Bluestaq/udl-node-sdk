// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AviationRiskManagement extends APIResource {
  /**
   * Service operation to take a single Aviation Risk Management record as a POST
   * body and ingest into the database. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.aviationRiskManagement.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idMission: 'fa18d96e-91ea-60da-a7a8-1af6500066c8',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: AviationRiskManagementCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/aviationriskmanagement', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Aviation Risk Management record by its unique
   * ID passed as a path parameter.
   *
   * @example
   * ```ts
   * const aviationRiskManagement =
   *   await client.aviationRiskManagement.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: AviationRiskManagementRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AviationRiskManagementRetrieveResponse> {
    return this._client.get(path`/udl/aviationriskmanagement/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single Aviation Risk Management record. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   *
   * @example
   * ```ts
   * await client.aviationRiskManagement.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idMission: 'fa18d96e-91ea-60da-a7a8-1af6500066c8',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(
    pathID: string,
    body: AviationRiskManagementUpdateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/udl/aviationriskmanagement/${pathID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to delete an Aviation Risk Management record specified by the
   * passed ID path parameter. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.aviationRiskManagement.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/aviationriskmanagement/${id}`, {
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
   * const response = await client.aviationRiskManagement.count({
   *   idMission: 'idMission',
   * });
   * ```
   */
  count(query: AviationRiskManagementCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/aviationriskmanagement/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * Aviation Risk Management records as a POST body and ingest into the database.
   * This operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.aviationRiskManagement.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       idMission: 'fa18d96e-91ea-60da-a7a8-1af6500066c8',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: AviationRiskManagementCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/aviationriskmanagement/createBulk', {
      body: body,
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
   * const response = await client.aviationRiskManagement.query({
   *   idMission: 'idMission',
   * });
   * ```
   */
  query(
    query: AviationRiskManagementQueryParams,
    options?: RequestOptions,
  ): APIPromise<AviationRiskManagementQueryResponse> {
    return this._client.get('/udl/aviationriskmanagement', { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aviationRiskManagement.queryHelp();
   * ```
   */
  queryHelp(options?: RequestOptions): APIPromise<AviationRiskManagementQueryHelpResponse> {
    return this._client.get('/udl/aviationriskmanagement/queryhelp', options);
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
   * const response = await client.aviationRiskManagement.tuple({
   *   columns: 'columns',
   *   idMission: 'idMission',
   * });
   * ```
   */
  tuple(
    query: AviationRiskManagementTupleParams,
    options?: RequestOptions,
  ): APIPromise<AviationRiskManagementTupleResponse> {
    return this._client.get('/udl/aviationriskmanagement/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple Aviation Risk Management records as a POST
   * body and ingest into the database. This operation is intended to be used for
   * automated feeds into UDL. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.aviationRiskManagement.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       idMission: 'fa18d96e-91ea-60da-a7a8-1af6500066c8',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(
    params: AviationRiskManagementUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-aviationriskmanagement', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Aviation Risk Management is used to identify, evaluate, and track risks when
 * mission planning by accounting for factors such as crew fatigue and mission
 * complexity.
 */
export interface AviationRiskManagementRetrieveResponse {
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
   * The unique identifier of the mission to which this risk management record is
   * assigned.
   */
  idMission: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Collection of Aviation Risk Management Worksheet Records.
   */
  aviationRiskManagementWorksheetRecord?: Array<AviationRiskManagementRetrieveResponse.AviationRiskManagementWorksheetRecord>;

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
   * Optional mission ID from external systems. This field has no meaning within UDL
   * and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  extMissionId?: string;

  /**
   * The mission number of the mission associated with this record.
   */
  missionNumber?: string;

  /**
   * Identifier for the organization which this risk management record is evaluated.
   */
  orgId?: string;

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
   * Identifier for the unit which this risk management record is evaluated.
   */
  unitId?: string;

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

export namespace AviationRiskManagementRetrieveResponse {
  /**
   * Collection of Aviation Risk Management Worksheet Records.
   */
  export interface AviationRiskManagementWorksheetRecord {
    /**
     * Date of the mission in ISO 8601 date-only format (YYYY-MM-DD).
     */
    missionDate: string;

    /**
     * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
     * EAGLE, KC-130 HERCULES, etc.) of the aircraft associated with this risk
     * management worksheet record. Intended as, but not constrained to, MIL-STD-6016
     * environment dependent specific type designations.
     */
    aircraftMDS?: string;

    /**
     * Flag indicating the worksheet record is pending approval.
     */
    approvalPending?: boolean;

    /**
     * Flag indicating the worksheet record is approved.
     */
    approved?: boolean;

    /**
     * Collection of Aviation Risk Management worksheet record scores.
     */
    aviationRiskManagementWorksheetScore?: Array<AviationRiskManagementWorksheetRecord.AviationRiskManagementWorksheetScore>;

    /**
     * Comment(s) explaining why the worksheet record has been approved or disapproved.
     */
    dispositionComments?: string;

    /**
     * Optional identifier of the worksheet record provided by the data source. This
     * field has no meaning within UDL and is provided as a convenience for systems
     * that require tracking of an internal system generated ID.
     */
    extRecordId?: string;

    /**
     * Sequential order of itinerary locations associated for the mission.
     */
    itinerary?: string;

    /**
     * Timestamp the worksheet record was updated, in ISO 8601 UTC format with
     * millisecond precision.
     */
    lastUpdatedAt?: string;

    /**
     * Remarks and/or comments regarding the worksheet record.
     */
    remarks?: string;

    /**
     * Numeric assignment for the worksheet record severity. 0 - LOW; 1 - MODERATE; 2 -
     * HIGH; 3 - SEVERE.
     */
    severityLevel?: number;

    /**
     * Timestamp the worksheet record was submitted, in ISO 8601 UTC format with
     * millisecond precision.
     */
    submissionDate?: string;

    /**
     * Tier number which the mission is being scored as determined by the data source.
     * For example, Tier 1 may indicate mission planners, Tier 2 may indicate
     * operations personnel, Tier 3 may indicate squadron leadership, and Tier 4 may
     * indicate the aircrew.
     */
    tierNumber?: number;

    /**
     * Total score for the worksheet record as defined by the data source. Larger
     * values indicate a higher risk level. For example, values between 0-10 may
     * indicate a low risk level, where values greater then 40 indicate a severe risk
     * level.
     */
    totalScore?: number;

    /**
     * User identifier associated to the worksheet record.
     */
    userId?: string;
  }

  export namespace AviationRiskManagementWorksheetRecord {
    /**
     * Collection of Aviation Risk Management worksheet record scores.
     */
    export interface AviationRiskManagementWorksheetScore {
      /**
       * Timestamp the worksheet record score was approval or disapproval, in ISO 8601
       * UTC format with millisecond precision.
       */
      approvalDate?: string;

      /**
       * Name of the individual who approved or disapproved of the score.
       */
      approvedBy?: string;

      /**
       * Numeric assignment used to determine score approval. 0 - APPROVAL PENDING (used
       * when score value is 2 or 3); 1 - APPROVED (used when score value is 2 or 3); 2 -
       * DISAPPROVED.
       */
      approvedCode?: number;

      /**
       * Collection of aviation risk management worksheet record score aircraft sorties.
       */
      aviationRiskManagementSortie?: Array<AviationRiskManagementWorksheetScore.AviationRiskManagementSortie>;

      /**
       * Optional identifier of the worksheet record score provided by the data source.
       * This field has no meaning within UDL and is provided as a convenience for
       * systems that require tracking of an internal system generated ID.
       */
      extScoreId?: string;

      /**
       * The category of the risk factor.
       */
      riskCategory?: string;

      /**
       * Description of the risk factor.
       */
      riskDescription?: string;

      /**
       * Code or identifier of the risk factor category as defined by the data source.
       */
      riskKey?: string;

      /**
       * Name of the risk factor.
       */
      riskName?: string;

      /**
       * Score of the worksheet record risk factor. Value ranges from 0 to 3, where a
       * value of 0 indicates a low and a value of 3 indicates severe. A value of -1
       * indicates no score.
       */
      score?: number;

      /**
       * Remarks and/or comments regarding the worksheet score.
       */
      scoreRemark?: string;
    }

    export namespace AviationRiskManagementWorksheetScore {
      /**
       * Collection of aviation risk management worksheet record score aircraft sorties.
       */
      export interface AviationRiskManagementSortie {
        /**
         * Optional aircraft sortie ID from external systems. This field has no meaning
         * within UDL and is provided as a convenience for systems that require tracking of
         * an internal system generated ID.
         */
        extSortieId?: string;

        /**
         * Unique identifier of an associated Aircraft Sortie that is assigned to this risk
         * management record.
         */
        idSortie?: string;

        /**
         * The leg number of the sortie.
         */
        legNum?: number;

        /**
         * The score of the associated aircraft sortie as defined by the data source. Value
         * ranges from 0 to 3, where a value of 0 indicates a low and a value of 3
         * indicates severe. A value of -1 indicates no score.
         */
        sortieScore?: number;
      }
    }
  }
}

export type AviationRiskManagementCountResponse = string;

export type AviationRiskManagementQueryResponse =
  Array<AviationRiskManagementQueryResponse.AviationRiskManagementQueryResponseItem>;

export namespace AviationRiskManagementQueryResponse {
  /**
   * Aviation Risk Management is used to identify, evaluate, and track risks when
   * mission planning by accounting for factors such as crew fatigue and mission
   * complexity.
   */
  export interface AviationRiskManagementQueryResponseItem {
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
     * The unique identifier of the mission to which this risk management record is
     * assigned.
     */
    idMission: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Collection of Aviation Risk Management Worksheet Records.
     */
    aviationRiskManagementWorksheetRecord?: Array<AviationRiskManagementQueryResponseItem.AviationRiskManagementWorksheetRecord>;

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
     * Optional mission ID from external systems. This field has no meaning within UDL
     * and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    extMissionId?: string;

    /**
     * The mission number of the mission associated with this record.
     */
    missionNumber?: string;

    /**
     * Identifier for the organization which this risk management record is evaluated.
     */
    orgId?: string;

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
     * Identifier for the unit which this risk management record is evaluated.
     */
    unitId?: string;

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

  export namespace AviationRiskManagementQueryResponseItem {
    /**
     * Collection of Aviation Risk Management Worksheet Records.
     */
    export interface AviationRiskManagementWorksheetRecord {
      /**
       * Date of the mission in ISO 8601 date-only format (YYYY-MM-DD).
       */
      missionDate: string;

      /**
       * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
       * EAGLE, KC-130 HERCULES, etc.) of the aircraft associated with this risk
       * management worksheet record. Intended as, but not constrained to, MIL-STD-6016
       * environment dependent specific type designations.
       */
      aircraftMDS?: string;

      /**
       * Flag indicating the worksheet record is pending approval.
       */
      approvalPending?: boolean;

      /**
       * Flag indicating the worksheet record is approved.
       */
      approved?: boolean;

      /**
       * Collection of Aviation Risk Management worksheet record scores.
       */
      aviationRiskManagementWorksheetScore?: Array<AviationRiskManagementWorksheetRecord.AviationRiskManagementWorksheetScore>;

      /**
       * Comment(s) explaining why the worksheet record has been approved or disapproved.
       */
      dispositionComments?: string;

      /**
       * Optional identifier of the worksheet record provided by the data source. This
       * field has no meaning within UDL and is provided as a convenience for systems
       * that require tracking of an internal system generated ID.
       */
      extRecordId?: string;

      /**
       * Sequential order of itinerary locations associated for the mission.
       */
      itinerary?: string;

      /**
       * Timestamp the worksheet record was updated, in ISO 8601 UTC format with
       * millisecond precision.
       */
      lastUpdatedAt?: string;

      /**
       * Remarks and/or comments regarding the worksheet record.
       */
      remarks?: string;

      /**
       * Numeric assignment for the worksheet record severity. 0 - LOW; 1 - MODERATE; 2 -
       * HIGH; 3 - SEVERE.
       */
      severityLevel?: number;

      /**
       * Timestamp the worksheet record was submitted, in ISO 8601 UTC format with
       * millisecond precision.
       */
      submissionDate?: string;

      /**
       * Tier number which the mission is being scored as determined by the data source.
       * For example, Tier 1 may indicate mission planners, Tier 2 may indicate
       * operations personnel, Tier 3 may indicate squadron leadership, and Tier 4 may
       * indicate the aircrew.
       */
      tierNumber?: number;

      /**
       * Total score for the worksheet record as defined by the data source. Larger
       * values indicate a higher risk level. For example, values between 0-10 may
       * indicate a low risk level, where values greater then 40 indicate a severe risk
       * level.
       */
      totalScore?: number;

      /**
       * User identifier associated to the worksheet record.
       */
      userId?: string;
    }

    export namespace AviationRiskManagementWorksheetRecord {
      /**
       * Collection of Aviation Risk Management worksheet record scores.
       */
      export interface AviationRiskManagementWorksheetScore {
        /**
         * Timestamp the worksheet record score was approval or disapproval, in ISO 8601
         * UTC format with millisecond precision.
         */
        approvalDate?: string;

        /**
         * Name of the individual who approved or disapproved of the score.
         */
        approvedBy?: string;

        /**
         * Numeric assignment used to determine score approval. 0 - APPROVAL PENDING (used
         * when score value is 2 or 3); 1 - APPROVED (used when score value is 2 or 3); 2 -
         * DISAPPROVED.
         */
        approvedCode?: number;

        /**
         * Collection of aviation risk management worksheet record score aircraft sorties.
         */
        aviationRiskManagementSortie?: Array<AviationRiskManagementWorksheetScore.AviationRiskManagementSortie>;

        /**
         * Optional identifier of the worksheet record score provided by the data source.
         * This field has no meaning within UDL and is provided as a convenience for
         * systems that require tracking of an internal system generated ID.
         */
        extScoreId?: string;

        /**
         * The category of the risk factor.
         */
        riskCategory?: string;

        /**
         * Description of the risk factor.
         */
        riskDescription?: string;

        /**
         * Code or identifier of the risk factor category as defined by the data source.
         */
        riskKey?: string;

        /**
         * Name of the risk factor.
         */
        riskName?: string;

        /**
         * Score of the worksheet record risk factor. Value ranges from 0 to 3, where a
         * value of 0 indicates a low and a value of 3 indicates severe. A value of -1
         * indicates no score.
         */
        score?: number;

        /**
         * Remarks and/or comments regarding the worksheet score.
         */
        scoreRemark?: string;
      }

      export namespace AviationRiskManagementWorksheetScore {
        /**
         * Collection of aviation risk management worksheet record score aircraft sorties.
         */
        export interface AviationRiskManagementSortie {
          /**
           * Optional aircraft sortie ID from external systems. This field has no meaning
           * within UDL and is provided as a convenience for systems that require tracking of
           * an internal system generated ID.
           */
          extSortieId?: string;

          /**
           * Unique identifier of an associated Aircraft Sortie that is assigned to this risk
           * management record.
           */
          idSortie?: string;

          /**
           * The leg number of the sortie.
           */
          legNum?: number;

          /**
           * The score of the associated aircraft sortie as defined by the data source. Value
           * ranges from 0 to 3, where a value of 0 indicates a low and a value of 3
           * indicates severe. A value of -1 indicates no score.
           */
          sortieScore?: number;
        }
      }
    }
  }
}

export interface AviationRiskManagementQueryHelpResponse {
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

export type AviationRiskManagementTupleResponse =
  Array<AviationRiskManagementTupleResponse.AviationRiskManagementTupleResponseItem>;

export namespace AviationRiskManagementTupleResponse {
  /**
   * Aviation Risk Management is used to identify, evaluate, and track risks when
   * mission planning by accounting for factors such as crew fatigue and mission
   * complexity.
   */
  export interface AviationRiskManagementTupleResponseItem {
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
     * The unique identifier of the mission to which this risk management record is
     * assigned.
     */
    idMission: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Collection of Aviation Risk Management Worksheet Records.
     */
    aviationRiskManagementWorksheetRecord?: Array<AviationRiskManagementTupleResponseItem.AviationRiskManagementWorksheetRecord>;

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
     * Optional mission ID from external systems. This field has no meaning within UDL
     * and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    extMissionId?: string;

    /**
     * The mission number of the mission associated with this record.
     */
    missionNumber?: string;

    /**
     * Identifier for the organization which this risk management record is evaluated.
     */
    orgId?: string;

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
     * Identifier for the unit which this risk management record is evaluated.
     */
    unitId?: string;

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

  export namespace AviationRiskManagementTupleResponseItem {
    /**
     * Collection of Aviation Risk Management Worksheet Records.
     */
    export interface AviationRiskManagementWorksheetRecord {
      /**
       * Date of the mission in ISO 8601 date-only format (YYYY-MM-DD).
       */
      missionDate: string;

      /**
       * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
       * EAGLE, KC-130 HERCULES, etc.) of the aircraft associated with this risk
       * management worksheet record. Intended as, but not constrained to, MIL-STD-6016
       * environment dependent specific type designations.
       */
      aircraftMDS?: string;

      /**
       * Flag indicating the worksheet record is pending approval.
       */
      approvalPending?: boolean;

      /**
       * Flag indicating the worksheet record is approved.
       */
      approved?: boolean;

      /**
       * Collection of Aviation Risk Management worksheet record scores.
       */
      aviationRiskManagementWorksheetScore?: Array<AviationRiskManagementWorksheetRecord.AviationRiskManagementWorksheetScore>;

      /**
       * Comment(s) explaining why the worksheet record has been approved or disapproved.
       */
      dispositionComments?: string;

      /**
       * Optional identifier of the worksheet record provided by the data source. This
       * field has no meaning within UDL and is provided as a convenience for systems
       * that require tracking of an internal system generated ID.
       */
      extRecordId?: string;

      /**
       * Sequential order of itinerary locations associated for the mission.
       */
      itinerary?: string;

      /**
       * Timestamp the worksheet record was updated, in ISO 8601 UTC format with
       * millisecond precision.
       */
      lastUpdatedAt?: string;

      /**
       * Remarks and/or comments regarding the worksheet record.
       */
      remarks?: string;

      /**
       * Numeric assignment for the worksheet record severity. 0 - LOW; 1 - MODERATE; 2 -
       * HIGH; 3 - SEVERE.
       */
      severityLevel?: number;

      /**
       * Timestamp the worksheet record was submitted, in ISO 8601 UTC format with
       * millisecond precision.
       */
      submissionDate?: string;

      /**
       * Tier number which the mission is being scored as determined by the data source.
       * For example, Tier 1 may indicate mission planners, Tier 2 may indicate
       * operations personnel, Tier 3 may indicate squadron leadership, and Tier 4 may
       * indicate the aircrew.
       */
      tierNumber?: number;

      /**
       * Total score for the worksheet record as defined by the data source. Larger
       * values indicate a higher risk level. For example, values between 0-10 may
       * indicate a low risk level, where values greater then 40 indicate a severe risk
       * level.
       */
      totalScore?: number;

      /**
       * User identifier associated to the worksheet record.
       */
      userId?: string;
    }

    export namespace AviationRiskManagementWorksheetRecord {
      /**
       * Collection of Aviation Risk Management worksheet record scores.
       */
      export interface AviationRiskManagementWorksheetScore {
        /**
         * Timestamp the worksheet record score was approval or disapproval, in ISO 8601
         * UTC format with millisecond precision.
         */
        approvalDate?: string;

        /**
         * Name of the individual who approved or disapproved of the score.
         */
        approvedBy?: string;

        /**
         * Numeric assignment used to determine score approval. 0 - APPROVAL PENDING (used
         * when score value is 2 or 3); 1 - APPROVED (used when score value is 2 or 3); 2 -
         * DISAPPROVED.
         */
        approvedCode?: number;

        /**
         * Collection of aviation risk management worksheet record score aircraft sorties.
         */
        aviationRiskManagementSortie?: Array<AviationRiskManagementWorksheetScore.AviationRiskManagementSortie>;

        /**
         * Optional identifier of the worksheet record score provided by the data source.
         * This field has no meaning within UDL and is provided as a convenience for
         * systems that require tracking of an internal system generated ID.
         */
        extScoreId?: string;

        /**
         * The category of the risk factor.
         */
        riskCategory?: string;

        /**
         * Description of the risk factor.
         */
        riskDescription?: string;

        /**
         * Code or identifier of the risk factor category as defined by the data source.
         */
        riskKey?: string;

        /**
         * Name of the risk factor.
         */
        riskName?: string;

        /**
         * Score of the worksheet record risk factor. Value ranges from 0 to 3, where a
         * value of 0 indicates a low and a value of 3 indicates severe. A value of -1
         * indicates no score.
         */
        score?: number;

        /**
         * Remarks and/or comments regarding the worksheet score.
         */
        scoreRemark?: string;
      }

      export namespace AviationRiskManagementWorksheetScore {
        /**
         * Collection of aviation risk management worksheet record score aircraft sorties.
         */
        export interface AviationRiskManagementSortie {
          /**
           * Optional aircraft sortie ID from external systems. This field has no meaning
           * within UDL and is provided as a convenience for systems that require tracking of
           * an internal system generated ID.
           */
          extSortieId?: string;

          /**
           * Unique identifier of an associated Aircraft Sortie that is assigned to this risk
           * management record.
           */
          idSortie?: string;

          /**
           * The leg number of the sortie.
           */
          legNum?: number;

          /**
           * The score of the associated aircraft sortie as defined by the data source. Value
           * ranges from 0 to 3, where a value of 0 indicates a low and a value of 3
           * indicates severe. A value of -1 indicates no score.
           */
          sortieScore?: number;
        }
      }
    }
  }
}

export interface AviationRiskManagementCreateParams {
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
   * The unique identifier of the mission to which this risk management record is
   * assigned.
   */
  idMission: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Collection of Aviation Risk Management Worksheet Records.
   */
  aviationRiskManagementWorksheetRecord?: Array<AviationRiskManagementCreateParams.AviationRiskManagementWorksheetRecord>;

  /**
   * Optional mission ID from external systems. This field has no meaning within UDL
   * and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  extMissionId?: string;

  /**
   * The mission number of the mission associated with this record.
   */
  missionNumber?: string;

  /**
   * Identifier for the organization which this risk management record is evaluated.
   */
  orgId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Identifier for the unit which this risk management record is evaluated.
   */
  unitId?: string;
}

export namespace AviationRiskManagementCreateParams {
  /**
   * Collection of Aviation Risk Management Worksheet Records.
   */
  export interface AviationRiskManagementWorksheetRecord {
    /**
     * Date of the mission in ISO 8601 date-only format (YYYY-MM-DD).
     */
    missionDate: string;

    /**
     * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
     * EAGLE, KC-130 HERCULES, etc.) of the aircraft associated with this risk
     * management worksheet record. Intended as, but not constrained to, MIL-STD-6016
     * environment dependent specific type designations.
     */
    aircraftMDS?: string;

    /**
     * Flag indicating the worksheet record is pending approval.
     */
    approvalPending?: boolean;

    /**
     * Flag indicating the worksheet record is approved.
     */
    approved?: boolean;

    /**
     * Collection of Aviation Risk Management worksheet record scores.
     */
    aviationRiskManagementWorksheetScore?: Array<AviationRiskManagementWorksheetRecord.AviationRiskManagementWorksheetScore>;

    /**
     * Comment(s) explaining why the worksheet record has been approved or disapproved.
     */
    dispositionComments?: string;

    /**
     * Optional identifier of the worksheet record provided by the data source. This
     * field has no meaning within UDL and is provided as a convenience for systems
     * that require tracking of an internal system generated ID.
     */
    extRecordId?: string;

    /**
     * Sequential order of itinerary locations associated for the mission.
     */
    itinerary?: string;

    /**
     * Timestamp the worksheet record was updated, in ISO 8601 UTC format with
     * millisecond precision.
     */
    lastUpdatedAt?: string;

    /**
     * Remarks and/or comments regarding the worksheet record.
     */
    remarks?: string;

    /**
     * Numeric assignment for the worksheet record severity. 0 - LOW; 1 - MODERATE; 2 -
     * HIGH; 3 - SEVERE.
     */
    severityLevel?: number;

    /**
     * Timestamp the worksheet record was submitted, in ISO 8601 UTC format with
     * millisecond precision.
     */
    submissionDate?: string;

    /**
     * Tier number which the mission is being scored as determined by the data source.
     * For example, Tier 1 may indicate mission planners, Tier 2 may indicate
     * operations personnel, Tier 3 may indicate squadron leadership, and Tier 4 may
     * indicate the aircrew.
     */
    tierNumber?: number;

    /**
     * Total score for the worksheet record as defined by the data source. Larger
     * values indicate a higher risk level. For example, values between 0-10 may
     * indicate a low risk level, where values greater then 40 indicate a severe risk
     * level.
     */
    totalScore?: number;

    /**
     * User identifier associated to the worksheet record.
     */
    userId?: string;
  }

  export namespace AviationRiskManagementWorksheetRecord {
    /**
     * Collection of Aviation Risk Management worksheet record scores.
     */
    export interface AviationRiskManagementWorksheetScore {
      /**
       * Timestamp the worksheet record score was approval or disapproval, in ISO 8601
       * UTC format with millisecond precision.
       */
      approvalDate?: string;

      /**
       * Name of the individual who approved or disapproved of the score.
       */
      approvedBy?: string;

      /**
       * Numeric assignment used to determine score approval. 0 - APPROVAL PENDING (used
       * when score value is 2 or 3); 1 - APPROVED (used when score value is 2 or 3); 2 -
       * DISAPPROVED.
       */
      approvedCode?: number;

      /**
       * Collection of aviation risk management worksheet record score aircraft sorties.
       */
      aviationRiskManagementSortie?: Array<AviationRiskManagementWorksheetScore.AviationRiskManagementSortie>;

      /**
       * Optional identifier of the worksheet record score provided by the data source.
       * This field has no meaning within UDL and is provided as a convenience for
       * systems that require tracking of an internal system generated ID.
       */
      extScoreId?: string;

      /**
       * The category of the risk factor.
       */
      riskCategory?: string;

      /**
       * Description of the risk factor.
       */
      riskDescription?: string;

      /**
       * Code or identifier of the risk factor category as defined by the data source.
       */
      riskKey?: string;

      /**
       * Name of the risk factor.
       */
      riskName?: string;

      /**
       * Score of the worksheet record risk factor. Value ranges from 0 to 3, where a
       * value of 0 indicates a low and a value of 3 indicates severe. A value of -1
       * indicates no score.
       */
      score?: number;

      /**
       * Remarks and/or comments regarding the worksheet score.
       */
      scoreRemark?: string;
    }

    export namespace AviationRiskManagementWorksheetScore {
      /**
       * Collection of aviation risk management worksheet record score aircraft sorties.
       */
      export interface AviationRiskManagementSortie {
        /**
         * Optional aircraft sortie ID from external systems. This field has no meaning
         * within UDL and is provided as a convenience for systems that require tracking of
         * an internal system generated ID.
         */
        extSortieId?: string;

        /**
         * Unique identifier of an associated Aircraft Sortie that is assigned to this risk
         * management record.
         */
        idSortie?: string;

        /**
         * The leg number of the sortie.
         */
        legNum?: number;

        /**
         * The score of the associated aircraft sortie as defined by the data source. Value
         * ranges from 0 to 3, where a value of 0 indicates a low and a value of 3
         * indicates severe. A value of -1 indicates no score.
         */
        sortieScore?: number;
      }
    }
  }
}

export interface AviationRiskManagementRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AviationRiskManagementUpdateParams {
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
   * The unique identifier of the mission to which this risk management record is
   * assigned.
   */
  idMission: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  body_id?: string;

  /**
   * Collection of Aviation Risk Management Worksheet Records.
   */
  aviationRiskManagementWorksheetRecord?: Array<AviationRiskManagementUpdateParams.AviationRiskManagementWorksheetRecord>;

  /**
   * Optional mission ID from external systems. This field has no meaning within UDL
   * and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  extMissionId?: string;

  /**
   * The mission number of the mission associated with this record.
   */
  missionNumber?: string;

  /**
   * Identifier for the organization which this risk management record is evaluated.
   */
  orgId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Identifier for the unit which this risk management record is evaluated.
   */
  unitId?: string;
}

export namespace AviationRiskManagementUpdateParams {
  /**
   * Collection of Aviation Risk Management Worksheet Records.
   */
  export interface AviationRiskManagementWorksheetRecord {
    /**
     * Date of the mission in ISO 8601 date-only format (YYYY-MM-DD).
     */
    missionDate: string;

    /**
     * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
     * EAGLE, KC-130 HERCULES, etc.) of the aircraft associated with this risk
     * management worksheet record. Intended as, but not constrained to, MIL-STD-6016
     * environment dependent specific type designations.
     */
    aircraftMDS?: string;

    /**
     * Flag indicating the worksheet record is pending approval.
     */
    approvalPending?: boolean;

    /**
     * Flag indicating the worksheet record is approved.
     */
    approved?: boolean;

    /**
     * Collection of Aviation Risk Management worksheet record scores.
     */
    aviationRiskManagementWorksheetScore?: Array<AviationRiskManagementWorksheetRecord.AviationRiskManagementWorksheetScore>;

    /**
     * Comment(s) explaining why the worksheet record has been approved or disapproved.
     */
    dispositionComments?: string;

    /**
     * Optional identifier of the worksheet record provided by the data source. This
     * field has no meaning within UDL and is provided as a convenience for systems
     * that require tracking of an internal system generated ID.
     */
    extRecordId?: string;

    /**
     * Sequential order of itinerary locations associated for the mission.
     */
    itinerary?: string;

    /**
     * Timestamp the worksheet record was updated, in ISO 8601 UTC format with
     * millisecond precision.
     */
    lastUpdatedAt?: string;

    /**
     * Remarks and/or comments regarding the worksheet record.
     */
    remarks?: string;

    /**
     * Numeric assignment for the worksheet record severity. 0 - LOW; 1 - MODERATE; 2 -
     * HIGH; 3 - SEVERE.
     */
    severityLevel?: number;

    /**
     * Timestamp the worksheet record was submitted, in ISO 8601 UTC format with
     * millisecond precision.
     */
    submissionDate?: string;

    /**
     * Tier number which the mission is being scored as determined by the data source.
     * For example, Tier 1 may indicate mission planners, Tier 2 may indicate
     * operations personnel, Tier 3 may indicate squadron leadership, and Tier 4 may
     * indicate the aircrew.
     */
    tierNumber?: number;

    /**
     * Total score for the worksheet record as defined by the data source. Larger
     * values indicate a higher risk level. For example, values between 0-10 may
     * indicate a low risk level, where values greater then 40 indicate a severe risk
     * level.
     */
    totalScore?: number;

    /**
     * User identifier associated to the worksheet record.
     */
    userId?: string;
  }

  export namespace AviationRiskManagementWorksheetRecord {
    /**
     * Collection of Aviation Risk Management worksheet record scores.
     */
    export interface AviationRiskManagementWorksheetScore {
      /**
       * Timestamp the worksheet record score was approval or disapproval, in ISO 8601
       * UTC format with millisecond precision.
       */
      approvalDate?: string;

      /**
       * Name of the individual who approved or disapproved of the score.
       */
      approvedBy?: string;

      /**
       * Numeric assignment used to determine score approval. 0 - APPROVAL PENDING (used
       * when score value is 2 or 3); 1 - APPROVED (used when score value is 2 or 3); 2 -
       * DISAPPROVED.
       */
      approvedCode?: number;

      /**
       * Collection of aviation risk management worksheet record score aircraft sorties.
       */
      aviationRiskManagementSortie?: Array<AviationRiskManagementWorksheetScore.AviationRiskManagementSortie>;

      /**
       * Optional identifier of the worksheet record score provided by the data source.
       * This field has no meaning within UDL and is provided as a convenience for
       * systems that require tracking of an internal system generated ID.
       */
      extScoreId?: string;

      /**
       * The category of the risk factor.
       */
      riskCategory?: string;

      /**
       * Description of the risk factor.
       */
      riskDescription?: string;

      /**
       * Code or identifier of the risk factor category as defined by the data source.
       */
      riskKey?: string;

      /**
       * Name of the risk factor.
       */
      riskName?: string;

      /**
       * Score of the worksheet record risk factor. Value ranges from 0 to 3, where a
       * value of 0 indicates a low and a value of 3 indicates severe. A value of -1
       * indicates no score.
       */
      score?: number;

      /**
       * Remarks and/or comments regarding the worksheet score.
       */
      scoreRemark?: string;
    }

    export namespace AviationRiskManagementWorksheetScore {
      /**
       * Collection of aviation risk management worksheet record score aircraft sorties.
       */
      export interface AviationRiskManagementSortie {
        /**
         * Optional aircraft sortie ID from external systems. This field has no meaning
         * within UDL and is provided as a convenience for systems that require tracking of
         * an internal system generated ID.
         */
        extSortieId?: string;

        /**
         * Unique identifier of an associated Aircraft Sortie that is assigned to this risk
         * management record.
         */
        idSortie?: string;

        /**
         * The leg number of the sortie.
         */
        legNum?: number;

        /**
         * The score of the associated aircraft sortie as defined by the data source. Value
         * ranges from 0 to 3, where a value of 0 indicates a low and a value of 3
         * indicates severe. A value of -1 indicates no score.
         */
        sortieScore?: number;
      }
    }
  }
}

export interface AviationRiskManagementCountParams {
  /**
   * The unique identifier of the mission to which this risk management record is
   * assigned.
   */
  idMission: string;

  firstResult?: number;

  maxResults?: number;
}

export interface AviationRiskManagementCreateBulkParams {
  body: Array<AviationRiskManagementCreateBulkParams.Body>;
}

export namespace AviationRiskManagementCreateBulkParams {
  /**
   * Aviation Risk Management is used to identify, evaluate, and track risks when
   * mission planning by accounting for factors such as crew fatigue and mission
   * complexity.
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
     * The unique identifier of the mission to which this risk management record is
     * assigned.
     */
    idMission: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Collection of Aviation Risk Management Worksheet Records.
     */
    aviationRiskManagementWorksheetRecord?: Array<Body.AviationRiskManagementWorksheetRecord>;

    /**
     * Optional mission ID from external systems. This field has no meaning within UDL
     * and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    extMissionId?: string;

    /**
     * The mission number of the mission associated with this record.
     */
    missionNumber?: string;

    /**
     * Identifier for the organization which this risk management record is evaluated.
     */
    orgId?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Identifier for the unit which this risk management record is evaluated.
     */
    unitId?: string;
  }

  export namespace Body {
    /**
     * Collection of Aviation Risk Management Worksheet Records.
     */
    export interface AviationRiskManagementWorksheetRecord {
      /**
       * Date of the mission in ISO 8601 date-only format (YYYY-MM-DD).
       */
      missionDate: string;

      /**
       * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
       * EAGLE, KC-130 HERCULES, etc.) of the aircraft associated with this risk
       * management worksheet record. Intended as, but not constrained to, MIL-STD-6016
       * environment dependent specific type designations.
       */
      aircraftMDS?: string;

      /**
       * Flag indicating the worksheet record is pending approval.
       */
      approvalPending?: boolean;

      /**
       * Flag indicating the worksheet record is approved.
       */
      approved?: boolean;

      /**
       * Collection of Aviation Risk Management worksheet record scores.
       */
      aviationRiskManagementWorksheetScore?: Array<AviationRiskManagementWorksheetRecord.AviationRiskManagementWorksheetScore>;

      /**
       * Comment(s) explaining why the worksheet record has been approved or disapproved.
       */
      dispositionComments?: string;

      /**
       * Optional identifier of the worksheet record provided by the data source. This
       * field has no meaning within UDL and is provided as a convenience for systems
       * that require tracking of an internal system generated ID.
       */
      extRecordId?: string;

      /**
       * Sequential order of itinerary locations associated for the mission.
       */
      itinerary?: string;

      /**
       * Timestamp the worksheet record was updated, in ISO 8601 UTC format with
       * millisecond precision.
       */
      lastUpdatedAt?: string;

      /**
       * Remarks and/or comments regarding the worksheet record.
       */
      remarks?: string;

      /**
       * Numeric assignment for the worksheet record severity. 0 - LOW; 1 - MODERATE; 2 -
       * HIGH; 3 - SEVERE.
       */
      severityLevel?: number;

      /**
       * Timestamp the worksheet record was submitted, in ISO 8601 UTC format with
       * millisecond precision.
       */
      submissionDate?: string;

      /**
       * Tier number which the mission is being scored as determined by the data source.
       * For example, Tier 1 may indicate mission planners, Tier 2 may indicate
       * operations personnel, Tier 3 may indicate squadron leadership, and Tier 4 may
       * indicate the aircrew.
       */
      tierNumber?: number;

      /**
       * Total score for the worksheet record as defined by the data source. Larger
       * values indicate a higher risk level. For example, values between 0-10 may
       * indicate a low risk level, where values greater then 40 indicate a severe risk
       * level.
       */
      totalScore?: number;

      /**
       * User identifier associated to the worksheet record.
       */
      userId?: string;
    }

    export namespace AviationRiskManagementWorksheetRecord {
      /**
       * Collection of Aviation Risk Management worksheet record scores.
       */
      export interface AviationRiskManagementWorksheetScore {
        /**
         * Timestamp the worksheet record score was approval or disapproval, in ISO 8601
         * UTC format with millisecond precision.
         */
        approvalDate?: string;

        /**
         * Name of the individual who approved or disapproved of the score.
         */
        approvedBy?: string;

        /**
         * Numeric assignment used to determine score approval. 0 - APPROVAL PENDING (used
         * when score value is 2 or 3); 1 - APPROVED (used when score value is 2 or 3); 2 -
         * DISAPPROVED.
         */
        approvedCode?: number;

        /**
         * Collection of aviation risk management worksheet record score aircraft sorties.
         */
        aviationRiskManagementSortie?: Array<AviationRiskManagementWorksheetScore.AviationRiskManagementSortie>;

        /**
         * Optional identifier of the worksheet record score provided by the data source.
         * This field has no meaning within UDL and is provided as a convenience for
         * systems that require tracking of an internal system generated ID.
         */
        extScoreId?: string;

        /**
         * The category of the risk factor.
         */
        riskCategory?: string;

        /**
         * Description of the risk factor.
         */
        riskDescription?: string;

        /**
         * Code or identifier of the risk factor category as defined by the data source.
         */
        riskKey?: string;

        /**
         * Name of the risk factor.
         */
        riskName?: string;

        /**
         * Score of the worksheet record risk factor. Value ranges from 0 to 3, where a
         * value of 0 indicates a low and a value of 3 indicates severe. A value of -1
         * indicates no score.
         */
        score?: number;

        /**
         * Remarks and/or comments regarding the worksheet score.
         */
        scoreRemark?: string;
      }

      export namespace AviationRiskManagementWorksheetScore {
        /**
         * Collection of aviation risk management worksheet record score aircraft sorties.
         */
        export interface AviationRiskManagementSortie {
          /**
           * Optional aircraft sortie ID from external systems. This field has no meaning
           * within UDL and is provided as a convenience for systems that require tracking of
           * an internal system generated ID.
           */
          extSortieId?: string;

          /**
           * Unique identifier of an associated Aircraft Sortie that is assigned to this risk
           * management record.
           */
          idSortie?: string;

          /**
           * The leg number of the sortie.
           */
          legNum?: number;

          /**
           * The score of the associated aircraft sortie as defined by the data source. Value
           * ranges from 0 to 3, where a value of 0 indicates a low and a value of 3
           * indicates severe. A value of -1 indicates no score.
           */
          sortieScore?: number;
        }
      }
    }
  }
}

export interface AviationRiskManagementQueryParams {
  /**
   * The unique identifier of the mission to which this risk management record is
   * assigned.
   */
  idMission: string;

  firstResult?: number;

  maxResults?: number;
}

export interface AviationRiskManagementTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The unique identifier of the mission to which this risk management record is
   * assigned.
   */
  idMission: string;

  firstResult?: number;

  maxResults?: number;
}

export interface AviationRiskManagementUnvalidatedPublishParams {
  body: Array<AviationRiskManagementUnvalidatedPublishParams.Body>;
}

export namespace AviationRiskManagementUnvalidatedPublishParams {
  /**
   * Aviation Risk Management is used to identify, evaluate, and track risks when
   * mission planning by accounting for factors such as crew fatigue and mission
   * complexity.
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
     * The unique identifier of the mission to which this risk management record is
     * assigned.
     */
    idMission: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Collection of Aviation Risk Management Worksheet Records.
     */
    aviationRiskManagementWorksheetRecord?: Array<Body.AviationRiskManagementWorksheetRecord>;

    /**
     * Optional mission ID from external systems. This field has no meaning within UDL
     * and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    extMissionId?: string;

    /**
     * The mission number of the mission associated with this record.
     */
    missionNumber?: string;

    /**
     * Identifier for the organization which this risk management record is evaluated.
     */
    orgId?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Identifier for the unit which this risk management record is evaluated.
     */
    unitId?: string;
  }

  export namespace Body {
    /**
     * Collection of Aviation Risk Management Worksheet Records.
     */
    export interface AviationRiskManagementWorksheetRecord {
      /**
       * Date of the mission in ISO 8601 date-only format (YYYY-MM-DD).
       */
      missionDate: string;

      /**
       * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
       * EAGLE, KC-130 HERCULES, etc.) of the aircraft associated with this risk
       * management worksheet record. Intended as, but not constrained to, MIL-STD-6016
       * environment dependent specific type designations.
       */
      aircraftMDS?: string;

      /**
       * Flag indicating the worksheet record is pending approval.
       */
      approvalPending?: boolean;

      /**
       * Flag indicating the worksheet record is approved.
       */
      approved?: boolean;

      /**
       * Collection of Aviation Risk Management worksheet record scores.
       */
      aviationRiskManagementWorksheetScore?: Array<AviationRiskManagementWorksheetRecord.AviationRiskManagementWorksheetScore>;

      /**
       * Comment(s) explaining why the worksheet record has been approved or disapproved.
       */
      dispositionComments?: string;

      /**
       * Optional identifier of the worksheet record provided by the data source. This
       * field has no meaning within UDL and is provided as a convenience for systems
       * that require tracking of an internal system generated ID.
       */
      extRecordId?: string;

      /**
       * Sequential order of itinerary locations associated for the mission.
       */
      itinerary?: string;

      /**
       * Timestamp the worksheet record was updated, in ISO 8601 UTC format with
       * millisecond precision.
       */
      lastUpdatedAt?: string;

      /**
       * Remarks and/or comments regarding the worksheet record.
       */
      remarks?: string;

      /**
       * Numeric assignment for the worksheet record severity. 0 - LOW; 1 - MODERATE; 2 -
       * HIGH; 3 - SEVERE.
       */
      severityLevel?: number;

      /**
       * Timestamp the worksheet record was submitted, in ISO 8601 UTC format with
       * millisecond precision.
       */
      submissionDate?: string;

      /**
       * Tier number which the mission is being scored as determined by the data source.
       * For example, Tier 1 may indicate mission planners, Tier 2 may indicate
       * operations personnel, Tier 3 may indicate squadron leadership, and Tier 4 may
       * indicate the aircrew.
       */
      tierNumber?: number;

      /**
       * Total score for the worksheet record as defined by the data source. Larger
       * values indicate a higher risk level. For example, values between 0-10 may
       * indicate a low risk level, where values greater then 40 indicate a severe risk
       * level.
       */
      totalScore?: number;

      /**
       * User identifier associated to the worksheet record.
       */
      userId?: string;
    }

    export namespace AviationRiskManagementWorksheetRecord {
      /**
       * Collection of Aviation Risk Management worksheet record scores.
       */
      export interface AviationRiskManagementWorksheetScore {
        /**
         * Timestamp the worksheet record score was approval or disapproval, in ISO 8601
         * UTC format with millisecond precision.
         */
        approvalDate?: string;

        /**
         * Name of the individual who approved or disapproved of the score.
         */
        approvedBy?: string;

        /**
         * Numeric assignment used to determine score approval. 0 - APPROVAL PENDING (used
         * when score value is 2 or 3); 1 - APPROVED (used when score value is 2 or 3); 2 -
         * DISAPPROVED.
         */
        approvedCode?: number;

        /**
         * Collection of aviation risk management worksheet record score aircraft sorties.
         */
        aviationRiskManagementSortie?: Array<AviationRiskManagementWorksheetScore.AviationRiskManagementSortie>;

        /**
         * Optional identifier of the worksheet record score provided by the data source.
         * This field has no meaning within UDL and is provided as a convenience for
         * systems that require tracking of an internal system generated ID.
         */
        extScoreId?: string;

        /**
         * The category of the risk factor.
         */
        riskCategory?: string;

        /**
         * Description of the risk factor.
         */
        riskDescription?: string;

        /**
         * Code or identifier of the risk factor category as defined by the data source.
         */
        riskKey?: string;

        /**
         * Name of the risk factor.
         */
        riskName?: string;

        /**
         * Score of the worksheet record risk factor. Value ranges from 0 to 3, where a
         * value of 0 indicates a low and a value of 3 indicates severe. A value of -1
         * indicates no score.
         */
        score?: number;

        /**
         * Remarks and/or comments regarding the worksheet score.
         */
        scoreRemark?: string;
      }

      export namespace AviationRiskManagementWorksheetScore {
        /**
         * Collection of aviation risk management worksheet record score aircraft sorties.
         */
        export interface AviationRiskManagementSortie {
          /**
           * Optional aircraft sortie ID from external systems. This field has no meaning
           * within UDL and is provided as a convenience for systems that require tracking of
           * an internal system generated ID.
           */
          extSortieId?: string;

          /**
           * Unique identifier of an associated Aircraft Sortie that is assigned to this risk
           * management record.
           */
          idSortie?: string;

          /**
           * The leg number of the sortie.
           */
          legNum?: number;

          /**
           * The score of the associated aircraft sortie as defined by the data source. Value
           * ranges from 0 to 3, where a value of 0 indicates a low and a value of 3
           * indicates severe. A value of -1 indicates no score.
           */
          sortieScore?: number;
        }
      }
    }
  }
}

export declare namespace AviationRiskManagement {
  export {
    type AviationRiskManagementRetrieveResponse as AviationRiskManagementRetrieveResponse,
    type AviationRiskManagementCountResponse as AviationRiskManagementCountResponse,
    type AviationRiskManagementQueryResponse as AviationRiskManagementQueryResponse,
    type AviationRiskManagementQueryHelpResponse as AviationRiskManagementQueryHelpResponse,
    type AviationRiskManagementTupleResponse as AviationRiskManagementTupleResponse,
    type AviationRiskManagementCreateParams as AviationRiskManagementCreateParams,
    type AviationRiskManagementRetrieveParams as AviationRiskManagementRetrieveParams,
    type AviationRiskManagementUpdateParams as AviationRiskManagementUpdateParams,
    type AviationRiskManagementCountParams as AviationRiskManagementCountParams,
    type AviationRiskManagementCreateBulkParams as AviationRiskManagementCreateBulkParams,
    type AviationRiskManagementQueryParams as AviationRiskManagementQueryParams,
    type AviationRiskManagementTupleParams as AviationRiskManagementTupleParams,
    type AviationRiskManagementUnvalidatedPublishParams as AviationRiskManagementUnvalidatedPublishParams,
  };
}
