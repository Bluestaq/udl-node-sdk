// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
  HistoryListResponsesOffsetPage,
} from './history';
import { APIPromise } from '../../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Obscorrelation extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single ObsCorrelation record as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.observations.obscorrelation.create({
   *   classificationMarking: 'U',
   *   corrType: 'OBSERVATION',
   *   dataMode: 'TEST',
   *   msgTs: '2021-01-01T01:01:01.123Z',
   *   obId: 'e69c6734-30a1-4c4f-8fe2-7187e7012e8c',
   *   obType: 'EO',
   *   referenceOrbitId: '21826de2-5639-4c2a-b68f-30b67753b983',
   *   referenceOrbitType: 'ELSET',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: ObscorrelationCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/obscorrelation', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Correlation record by its unique ID passed as
   * a path parameter.
   *
   * @example
   * ```ts
   * const obscorrelation =
   *   await client.observations.obscorrelation.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: ObscorrelationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObscorrelationRetrieveResponse> {
    return this._client.get(path`/udl/obscorrelation/${id}`, { query, ...options });
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
   * for await (const obscorrelationListResponse of client.observations.obscorrelation.list(
   *   { msgTs: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ObscorrelationListParams,
    options?: RequestOptions,
  ): PagePromise<ObscorrelationListResponsesOffsetPage, ObscorrelationListResponse> {
    return this._client.getAPIList('/udl/obscorrelation', OffsetPage<ObscorrelationListResponse>, {
      query,
      ...options,
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
   * const response =
   *   await client.observations.obscorrelation.count({
   *     msgTs: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  count(query: ObscorrelationCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/obscorrelation/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * ObsCorrelation records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.observations.obscorrelation.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       corrType: 'OBSERVATION',
   *       dataMode: 'TEST',
   *       msgTs: '2021-01-01T01:01:01.123Z',
   *       obId: 'e69c6734-30a1-4c4f-8fe2-7187e7012e8c',
   *       obType: 'EO',
   *       referenceOrbitId:
   *         '21826de2-5639-4c2a-b68f-30b67753b983',
   *       referenceOrbitType: 'ELSET',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: ObscorrelationCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/obscorrelation/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.observations.obscorrelation.queryHelp();
   * ```
   */
  queryHelp(options?: RequestOptions): APIPromise<ObscorrelationQueryHelpResponse> {
    return this._client.get('/udl/obscorrelation/queryhelp', options);
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
   * const response =
   *   await client.observations.obscorrelation.tuple({
   *     columns: 'columns',
   *     msgTs: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  tuple(query: ObscorrelationTupleParams, options?: RequestOptions): APIPromise<ObscorrelationTupleResponse> {
    return this._client.get('/udl/obscorrelation/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple ObsCorrelation records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.observations.obscorrelation.unvalidatedPublish(
   *   {
   *     body: [
   *       {
   *         classificationMarking: 'U',
   *         corrType: 'OBSERVATION',
   *         dataMode: 'TEST',
   *         msgTs: '2021-01-01T01:01:01.123Z',
   *         obId: 'e69c6734-30a1-4c4f-8fe2-7187e7012e8c',
   *         obType: 'EO',
   *         referenceOrbitId:
   *           '21826de2-5639-4c2a-b68f-30b67753b983',
   *         referenceOrbitType: 'ELSET',
   *         source: 'Bluestaq',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  unvalidatedPublish(
    params: ObscorrelationUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-obscorrelation', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ObscorrelationListResponsesOffsetPage = OffsetPage<ObscorrelationListResponse>;

/**
 * Model representation supporting post-pass correlation of UCTs and re-correlation
 * of mis-tagged electro-optical (EO), radar, RF, and DOA track/observations.
 */
export interface ObscorrelationRetrieveResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the type of correlation is OBSERVATION or TRACK:
   * OBSERVATION: Identifies an observation is being correlated. TRACK: Identifies
   * the entire track of observations is being correlated.
   */
  corrType: 'OBSERVATION' | 'TRACK';

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Correlation message generation time, in ISO 8601 UTC format with millisecond
   * precision.
   */
  msgTs: string;

  /**
   * Identifier of the Observation associated with this Correlation. If
   * corrType=TRACK then this field should reference the first Observation in the
   * track. Note: To retrieve all remaining Observations in the track, the GET query
   * should include this Observation's source and origin field values, along with the
   * trackId.
   */
  obId: string;

  /**
   * Indicator of whether the type of Observation(s) being correlated is DOA, EO,
   * PASSIVE_RADAR, RADAR, RF, SAR, or SOISET: DOA: The observation type being
   * correlated is Difference of Arrival. EO: The observation type being correlated
   * is Electro-Optical. PASSIVE_RADAR: The observation type being correlated is
   * Passive Radar. RADAR: The observation type being correlated is Radar. RF: The
   * observation type being correlated is Radio Frequency. SAR: The observation type
   * being correlated is Synthetic Aperture Radar. SOISET: The observation type being
   * correlated is Space Object Identification Observation Set.
   */
  obType: 'DOA' | 'EO' | 'PASSIVE_RADAR' | 'RADAR' | 'RF' | 'SAR' | 'SOISET';

  /**
   * Identifier of the orbit state used for correlation.
   */
  referenceOrbitId: string;

  /**
   * Indicator of whether the reference orbit type used for correlation is an ELSET,
   * ESID, or SV: ELSET: The reference orbit type is an Element Set. ESID: The
   * reference orbit type is an Ephemeris Set. SV: The reference orbit type is a
   * State Vector.
   */
  referenceOrbitType: 'ELSET' | 'ESID' | 'SV';

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Type of algorithm used for this correlation (e.g. ROTAS, GEOMETRIC, STATISTICAL,
   * MAHALANOBIS, AI/ML, OTHER).
   */
  algorithmCorrType?: string;

  /**
   * Name of the alternate catalog.
   */
  altCatalog?: string;

  /**
   * Associates one or more alternate catalogs with a source provider or system.
   * Namespaces may be defined by their respective data providers or systems (e.g.
   * JCO, 18SDS, EOSSS, EXO, KBR, KRTL, LeoLabs, NorthStar, SAFRAN, Slingshot).
   */
  altNamespace?: string;

  /**
   * Alternate unique object ID within the namespace.
   */
  altObjectId?: string;

  /**
   * Boolean indicating whether the observation or track can be correlated to the
   * alternate object specified under altObjectId. This flag should only be set to
   * true by data providers after an attempt to correlate to an on-orbit object was
   * made and failed. If unable to correlate, the 'origObjectId' field may be
   * populated with an internal data provider specific identifier.
   */
  altUct?: boolean;

  /**
   * Astrostandard ROTAS correlation result (0 - 4), if applicable. Refer to ROTAS
   * documentation for an explanation of ASTAT values.
   */
  astat?: number;

  /**
   * Correlation score ranging from 0.0 to 1.0. A score of 1.0 represents perfect
   * correlation to the orbit of the corresponding satellite, such as when all
   * observation residuals equal 0.
   */
  corrQuality?: number;

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
   * Identifier of the correlated target on-orbit object, if associated with a valid
   * satNo.
   */
  idOnOrbit?: string;

  /**
   * Identifier of the ObsCorrelation record from which this ObsCorrelation record
   * originated. This behavior allows for different source providers/systems to make
   * changes to a given correlation and maintain traceability back to the original
   * correlation.
   */
  idParentCorrelation?: string;

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
   * Optional identifier indicates the target on-orbit object being correlated. This
   * may be an internal identifier and not necessarily a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Current 18th SDS satellite/catalog number of the target on-orbit object. Useful
   * to know in the case where an observation is correlated to another
   * satellite/catalog number.
   */
  satNo?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Identifier of the Track associated with this ObsCorrelation.
   */
  trackId?: string;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;
}

/**
 * Model representation supporting post-pass correlation of UCTs and re-correlation
 * of mis-tagged electro-optical (EO), radar, RF, and DOA track/observations.
 */
export interface ObscorrelationListResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the type of correlation is OBSERVATION or TRACK:
   * OBSERVATION: Identifies an observation is being correlated. TRACK: Identifies
   * the entire track of observations is being correlated.
   */
  corrType: 'OBSERVATION' | 'TRACK';

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Correlation message generation time, in ISO 8601 UTC format with millisecond
   * precision.
   */
  msgTs: string;

  /**
   * Identifier of the Observation associated with this Correlation. If
   * corrType=TRACK then this field should reference the first Observation in the
   * track. Note: To retrieve all remaining Observations in the track, the GET query
   * should include this Observation's source and origin field values, along with the
   * trackId.
   */
  obId: string;

  /**
   * Indicator of whether the type of Observation(s) being correlated is DOA, EO,
   * PASSIVE_RADAR, RADAR, RF, SAR, or SOISET: DOA: The observation type being
   * correlated is Difference of Arrival. EO: The observation type being correlated
   * is Electro-Optical. PASSIVE_RADAR: The observation type being correlated is
   * Passive Radar. RADAR: The observation type being correlated is Radar. RF: The
   * observation type being correlated is Radio Frequency. SAR: The observation type
   * being correlated is Synthetic Aperture Radar. SOISET: The observation type being
   * correlated is Space Object Identification Observation Set.
   */
  obType: 'DOA' | 'EO' | 'PASSIVE_RADAR' | 'RADAR' | 'RF' | 'SAR' | 'SOISET';

  /**
   * Identifier of the orbit state used for correlation.
   */
  referenceOrbitId: string;

  /**
   * Indicator of whether the reference orbit type used for correlation is an ELSET,
   * ESID, or SV: ELSET: The reference orbit type is an Element Set. ESID: The
   * reference orbit type is an Ephemeris Set. SV: The reference orbit type is a
   * State Vector.
   */
  referenceOrbitType: 'ELSET' | 'ESID' | 'SV';

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Type of algorithm used for this correlation (e.g. ROTAS, GEOMETRIC, STATISTICAL,
   * MAHALANOBIS, AI/ML, OTHER).
   */
  algorithmCorrType?: string;

  /**
   * Name of the alternate catalog.
   */
  altCatalog?: string;

  /**
   * Associates one or more alternate catalogs with a source provider or system.
   * Namespaces may be defined by their respective data providers or systems (e.g.
   * JCO, 18SDS, EOSSS, EXO, KBR, KRTL, LeoLabs, NorthStar, SAFRAN, Slingshot).
   */
  altNamespace?: string;

  /**
   * Alternate unique object ID within the namespace.
   */
  altObjectId?: string;

  /**
   * Boolean indicating whether the observation or track can be correlated to the
   * alternate object specified under altObjectId. This flag should only be set to
   * true by data providers after an attempt to correlate to an on-orbit object was
   * made and failed. If unable to correlate, the 'origObjectId' field may be
   * populated with an internal data provider specific identifier.
   */
  altUct?: boolean;

  /**
   * Astrostandard ROTAS correlation result (0 - 4), if applicable. Refer to ROTAS
   * documentation for an explanation of ASTAT values.
   */
  astat?: number;

  /**
   * Correlation score ranging from 0.0 to 1.0. A score of 1.0 represents perfect
   * correlation to the orbit of the corresponding satellite, such as when all
   * observation residuals equal 0.
   */
  corrQuality?: number;

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
   * Identifier of the correlated target on-orbit object, if associated with a valid
   * satNo.
   */
  idOnOrbit?: string;

  /**
   * Identifier of the ObsCorrelation record from which this ObsCorrelation record
   * originated. This behavior allows for different source providers/systems to make
   * changes to a given correlation and maintain traceability back to the original
   * correlation.
   */
  idParentCorrelation?: string;

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
   * Optional identifier indicates the target on-orbit object being correlated. This
   * may be an internal identifier and not necessarily a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Current 18th SDS satellite/catalog number of the target on-orbit object. Useful
   * to know in the case where an observation is correlated to another
   * satellite/catalog number.
   */
  satNo?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Identifier of the Track associated with this ObsCorrelation.
   */
  trackId?: string;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;
}

export type ObscorrelationCountResponse = string;

export interface ObscorrelationQueryHelpResponse {
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

export type ObscorrelationTupleResponse = Array<ObscorrelationTupleResponse.ObscorrelationTupleResponseItem>;

export namespace ObscorrelationTupleResponse {
  /**
   * Model representation supporting post-pass correlation of UCTs and re-correlation
   * of mis-tagged electro-optical (EO), radar, RF, and DOA track/observations.
   */
  export interface ObscorrelationTupleResponseItem {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the type of correlation is OBSERVATION or TRACK:
     * OBSERVATION: Identifies an observation is being correlated. TRACK: Identifies
     * the entire track of observations is being correlated.
     */
    corrType: 'OBSERVATION' | 'TRACK';

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * Correlation message generation time, in ISO 8601 UTC format with millisecond
     * precision.
     */
    msgTs: string;

    /**
     * Identifier of the Observation associated with this Correlation. If
     * corrType=TRACK then this field should reference the first Observation in the
     * track. Note: To retrieve all remaining Observations in the track, the GET query
     * should include this Observation's source and origin field values, along with the
     * trackId.
     */
    obId: string;

    /**
     * Indicator of whether the type of Observation(s) being correlated is DOA, EO,
     * PASSIVE_RADAR, RADAR, RF, SAR, or SOISET: DOA: The observation type being
     * correlated is Difference of Arrival. EO: The observation type being correlated
     * is Electro-Optical. PASSIVE_RADAR: The observation type being correlated is
     * Passive Radar. RADAR: The observation type being correlated is Radar. RF: The
     * observation type being correlated is Radio Frequency. SAR: The observation type
     * being correlated is Synthetic Aperture Radar. SOISET: The observation type being
     * correlated is Space Object Identification Observation Set.
     */
    obType: 'DOA' | 'EO' | 'PASSIVE_RADAR' | 'RADAR' | 'RF' | 'SAR' | 'SOISET';

    /**
     * Identifier of the orbit state used for correlation.
     */
    referenceOrbitId: string;

    /**
     * Indicator of whether the reference orbit type used for correlation is an ELSET,
     * ESID, or SV: ELSET: The reference orbit type is an Element Set. ESID: The
     * reference orbit type is an Ephemeris Set. SV: The reference orbit type is a
     * State Vector.
     */
    referenceOrbitType: 'ELSET' | 'ESID' | 'SV';

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Type of algorithm used for this correlation (e.g. ROTAS, GEOMETRIC, STATISTICAL,
     * MAHALANOBIS, AI/ML, OTHER).
     */
    algorithmCorrType?: string;

    /**
     * Name of the alternate catalog.
     */
    altCatalog?: string;

    /**
     * Associates one or more alternate catalogs with a source provider or system.
     * Namespaces may be defined by their respective data providers or systems (e.g.
     * JCO, 18SDS, EOSSS, EXO, KBR, KRTL, LeoLabs, NorthStar, SAFRAN, Slingshot).
     */
    altNamespace?: string;

    /**
     * Alternate unique object ID within the namespace.
     */
    altObjectId?: string;

    /**
     * Boolean indicating whether the observation or track can be correlated to the
     * alternate object specified under altObjectId. This flag should only be set to
     * true by data providers after an attempt to correlate to an on-orbit object was
     * made and failed. If unable to correlate, the 'origObjectId' field may be
     * populated with an internal data provider specific identifier.
     */
    altUct?: boolean;

    /**
     * Astrostandard ROTAS correlation result (0 - 4), if applicable. Refer to ROTAS
     * documentation for an explanation of ASTAT values.
     */
    astat?: number;

    /**
     * Correlation score ranging from 0.0 to 1.0. A score of 1.0 represents perfect
     * correlation to the orbit of the corresponding satellite, such as when all
     * observation residuals equal 0.
     */
    corrQuality?: number;

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
     * Identifier of the correlated target on-orbit object, if associated with a valid
     * satNo.
     */
    idOnOrbit?: string;

    /**
     * Identifier of the ObsCorrelation record from which this ObsCorrelation record
     * originated. This behavior allows for different source providers/systems to make
     * changes to a given correlation and maintain traceability back to the original
     * correlation.
     */
    idParentCorrelation?: string;

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
     * Optional identifier indicates the target on-orbit object being correlated. This
     * may be an internal identifier and not necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Current 18th SDS satellite/catalog number of the target on-orbit object. Useful
     * to know in the case where an observation is correlated to another
     * satellite/catalog number.
     */
    satNo?: number;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Identifier of the Track associated with this ObsCorrelation.
     */
    trackId?: string;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;
  }
}

export interface ObscorrelationCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the type of correlation is OBSERVATION or TRACK:
   * OBSERVATION: Identifies an observation is being correlated. TRACK: Identifies
   * the entire track of observations is being correlated.
   */
  corrType: 'OBSERVATION' | 'TRACK';

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Correlation message generation time, in ISO 8601 UTC format with millisecond
   * precision.
   */
  msgTs: string;

  /**
   * Identifier of the Observation associated with this Correlation. If
   * corrType=TRACK then this field should reference the first Observation in the
   * track. Note: To retrieve all remaining Observations in the track, the GET query
   * should include this Observation's source and origin field values, along with the
   * trackId.
   */
  obId: string;

  /**
   * Indicator of whether the type of Observation(s) being correlated is DOA, EO,
   * PASSIVE_RADAR, RADAR, RF, SAR, or SOISET: DOA: The observation type being
   * correlated is Difference of Arrival. EO: The observation type being correlated
   * is Electro-Optical. PASSIVE_RADAR: The observation type being correlated is
   * Passive Radar. RADAR: The observation type being correlated is Radar. RF: The
   * observation type being correlated is Radio Frequency. SAR: The observation type
   * being correlated is Synthetic Aperture Radar. SOISET: The observation type being
   * correlated is Space Object Identification Observation Set.
   */
  obType: 'DOA' | 'EO' | 'PASSIVE_RADAR' | 'RADAR' | 'RF' | 'SAR' | 'SOISET';

  /**
   * Identifier of the orbit state used for correlation.
   */
  referenceOrbitId: string;

  /**
   * Indicator of whether the reference orbit type used for correlation is an ELSET,
   * ESID, or SV: ELSET: The reference orbit type is an Element Set. ESID: The
   * reference orbit type is an Ephemeris Set. SV: The reference orbit type is a
   * State Vector.
   */
  referenceOrbitType: 'ELSET' | 'ESID' | 'SV';

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Type of algorithm used for this correlation (e.g. ROTAS, GEOMETRIC, STATISTICAL,
   * MAHALANOBIS, AI/ML, OTHER).
   */
  algorithmCorrType?: string;

  /**
   * Name of the alternate catalog.
   */
  altCatalog?: string;

  /**
   * Associates one or more alternate catalogs with a source provider or system.
   * Namespaces may be defined by their respective data providers or systems (e.g.
   * JCO, 18SDS, EOSSS, EXO, KBR, KRTL, LeoLabs, NorthStar, SAFRAN, Slingshot).
   */
  altNamespace?: string;

  /**
   * Alternate unique object ID within the namespace.
   */
  altObjectId?: string;

  /**
   * Boolean indicating whether the observation or track can be correlated to the
   * alternate object specified under altObjectId. This flag should only be set to
   * true by data providers after an attempt to correlate to an on-orbit object was
   * made and failed. If unable to correlate, the 'origObjectId' field may be
   * populated with an internal data provider specific identifier.
   */
  altUct?: boolean;

  /**
   * Astrostandard ROTAS correlation result (0 - 4), if applicable. Refer to ROTAS
   * documentation for an explanation of ASTAT values.
   */
  astat?: number;

  /**
   * Correlation score ranging from 0.0 to 1.0. A score of 1.0 represents perfect
   * correlation to the orbit of the corresponding satellite, such as when all
   * observation residuals equal 0.
   */
  corrQuality?: number;

  /**
   * Identifier of the ObsCorrelation record from which this ObsCorrelation record
   * originated. This behavior allows for different source providers/systems to make
   * changes to a given correlation and maintain traceability back to the original
   * correlation.
   */
  idParentCorrelation?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier indicates the target on-orbit object being correlated. This
   * may be an internal identifier and not necessarily a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Current 18th SDS satellite/catalog number of the target on-orbit object. Useful
   * to know in the case where an observation is correlated to another
   * satellite/catalog number.
   */
  satNo?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Identifier of the Track associated with this ObsCorrelation.
   */
  trackId?: string;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;
}

export interface ObscorrelationRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface ObscorrelationListParams extends OffsetPageParams {
  /**
   * Correlation message generation time, in ISO 8601 UTC format with millisecond
   * precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgTs: string;
}

export interface ObscorrelationCountParams {
  /**
   * Correlation message generation time, in ISO 8601 UTC format with millisecond
   * precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgTs: string;

  firstResult?: number;

  maxResults?: number;
}

export interface ObscorrelationCreateBulkParams {
  body: Array<ObscorrelationCreateBulkParams.Body>;
}

export namespace ObscorrelationCreateBulkParams {
  /**
   * Model representation supporting post-pass correlation of UCTs and re-correlation
   * of mis-tagged electro-optical (EO), radar, RF, and DOA track/observations.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the type of correlation is OBSERVATION or TRACK:
     * OBSERVATION: Identifies an observation is being correlated. TRACK: Identifies
     * the entire track of observations is being correlated.
     */
    corrType: 'OBSERVATION' | 'TRACK';

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * Correlation message generation time, in ISO 8601 UTC format with millisecond
     * precision.
     */
    msgTs: string;

    /**
     * Identifier of the Observation associated with this Correlation. If
     * corrType=TRACK then this field should reference the first Observation in the
     * track. Note: To retrieve all remaining Observations in the track, the GET query
     * should include this Observation's source and origin field values, along with the
     * trackId.
     */
    obId: string;

    /**
     * Indicator of whether the type of Observation(s) being correlated is DOA, EO,
     * PASSIVE_RADAR, RADAR, RF, SAR, or SOISET: DOA: The observation type being
     * correlated is Difference of Arrival. EO: The observation type being correlated
     * is Electro-Optical. PASSIVE_RADAR: The observation type being correlated is
     * Passive Radar. RADAR: The observation type being correlated is Radar. RF: The
     * observation type being correlated is Radio Frequency. SAR: The observation type
     * being correlated is Synthetic Aperture Radar. SOISET: The observation type being
     * correlated is Space Object Identification Observation Set.
     */
    obType: 'DOA' | 'EO' | 'PASSIVE_RADAR' | 'RADAR' | 'RF' | 'SAR' | 'SOISET';

    /**
     * Identifier of the orbit state used for correlation.
     */
    referenceOrbitId: string;

    /**
     * Indicator of whether the reference orbit type used for correlation is an ELSET,
     * ESID, or SV: ELSET: The reference orbit type is an Element Set. ESID: The
     * reference orbit type is an Ephemeris Set. SV: The reference orbit type is a
     * State Vector.
     */
    referenceOrbitType: 'ELSET' | 'ESID' | 'SV';

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Type of algorithm used for this correlation (e.g. ROTAS, GEOMETRIC, STATISTICAL,
     * MAHALANOBIS, AI/ML, OTHER).
     */
    algorithmCorrType?: string;

    /**
     * Name of the alternate catalog.
     */
    altCatalog?: string;

    /**
     * Associates one or more alternate catalogs with a source provider or system.
     * Namespaces may be defined by their respective data providers or systems (e.g.
     * JCO, 18SDS, EOSSS, EXO, KBR, KRTL, LeoLabs, NorthStar, SAFRAN, Slingshot).
     */
    altNamespace?: string;

    /**
     * Alternate unique object ID within the namespace.
     */
    altObjectId?: string;

    /**
     * Boolean indicating whether the observation or track can be correlated to the
     * alternate object specified under altObjectId. This flag should only be set to
     * true by data providers after an attempt to correlate to an on-orbit object was
     * made and failed. If unable to correlate, the 'origObjectId' field may be
     * populated with an internal data provider specific identifier.
     */
    altUct?: boolean;

    /**
     * Astrostandard ROTAS correlation result (0 - 4), if applicable. Refer to ROTAS
     * documentation for an explanation of ASTAT values.
     */
    astat?: number;

    /**
     * Correlation score ranging from 0.0 to 1.0. A score of 1.0 represents perfect
     * correlation to the orbit of the corresponding satellite, such as when all
     * observation residuals equal 0.
     */
    corrQuality?: number;

    /**
     * Identifier of the ObsCorrelation record from which this ObsCorrelation record
     * originated. This behavior allows for different source providers/systems to make
     * changes to a given correlation and maintain traceability back to the original
     * correlation.
     */
    idParentCorrelation?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier indicates the target on-orbit object being correlated. This
     * may be an internal identifier and not necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Current 18th SDS satellite/catalog number of the target on-orbit object. Useful
     * to know in the case where an observation is correlated to another
     * satellite/catalog number.
     */
    satNo?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Identifier of the Track associated with this ObsCorrelation.
     */
    trackId?: string;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;
  }
}

export interface ObscorrelationTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Correlation message generation time, in ISO 8601 UTC format with millisecond
   * precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgTs: string;

  firstResult?: number;

  maxResults?: number;
}

export interface ObscorrelationUnvalidatedPublishParams {
  body: Array<ObscorrelationUnvalidatedPublishParams.Body>;
}

export namespace ObscorrelationUnvalidatedPublishParams {
  /**
   * Model representation supporting post-pass correlation of UCTs and re-correlation
   * of mis-tagged electro-optical (EO), radar, RF, and DOA track/observations.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the type of correlation is OBSERVATION or TRACK:
     * OBSERVATION: Identifies an observation is being correlated. TRACK: Identifies
     * the entire track of observations is being correlated.
     */
    corrType: 'OBSERVATION' | 'TRACK';

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * Correlation message generation time, in ISO 8601 UTC format with millisecond
     * precision.
     */
    msgTs: string;

    /**
     * Identifier of the Observation associated with this Correlation. If
     * corrType=TRACK then this field should reference the first Observation in the
     * track. Note: To retrieve all remaining Observations in the track, the GET query
     * should include this Observation's source and origin field values, along with the
     * trackId.
     */
    obId: string;

    /**
     * Indicator of whether the type of Observation(s) being correlated is DOA, EO,
     * PASSIVE_RADAR, RADAR, RF, SAR, or SOISET: DOA: The observation type being
     * correlated is Difference of Arrival. EO: The observation type being correlated
     * is Electro-Optical. PASSIVE_RADAR: The observation type being correlated is
     * Passive Radar. RADAR: The observation type being correlated is Radar. RF: The
     * observation type being correlated is Radio Frequency. SAR: The observation type
     * being correlated is Synthetic Aperture Radar. SOISET: The observation type being
     * correlated is Space Object Identification Observation Set.
     */
    obType: 'DOA' | 'EO' | 'PASSIVE_RADAR' | 'RADAR' | 'RF' | 'SAR' | 'SOISET';

    /**
     * Identifier of the orbit state used for correlation.
     */
    referenceOrbitId: string;

    /**
     * Indicator of whether the reference orbit type used for correlation is an ELSET,
     * ESID, or SV: ELSET: The reference orbit type is an Element Set. ESID: The
     * reference orbit type is an Ephemeris Set. SV: The reference orbit type is a
     * State Vector.
     */
    referenceOrbitType: 'ELSET' | 'ESID' | 'SV';

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Type of algorithm used for this correlation (e.g. ROTAS, GEOMETRIC, STATISTICAL,
     * MAHALANOBIS, AI/ML, OTHER).
     */
    algorithmCorrType?: string;

    /**
     * Name of the alternate catalog.
     */
    altCatalog?: string;

    /**
     * Associates one or more alternate catalogs with a source provider or system.
     * Namespaces may be defined by their respective data providers or systems (e.g.
     * JCO, 18SDS, EOSSS, EXO, KBR, KRTL, LeoLabs, NorthStar, SAFRAN, Slingshot).
     */
    altNamespace?: string;

    /**
     * Alternate unique object ID within the namespace.
     */
    altObjectId?: string;

    /**
     * Boolean indicating whether the observation or track can be correlated to the
     * alternate object specified under altObjectId. This flag should only be set to
     * true by data providers after an attempt to correlate to an on-orbit object was
     * made and failed. If unable to correlate, the 'origObjectId' field may be
     * populated with an internal data provider specific identifier.
     */
    altUct?: boolean;

    /**
     * Astrostandard ROTAS correlation result (0 - 4), if applicable. Refer to ROTAS
     * documentation for an explanation of ASTAT values.
     */
    astat?: number;

    /**
     * Correlation score ranging from 0.0 to 1.0. A score of 1.0 represents perfect
     * correlation to the orbit of the corresponding satellite, such as when all
     * observation residuals equal 0.
     */
    corrQuality?: number;

    /**
     * Identifier of the ObsCorrelation record from which this ObsCorrelation record
     * originated. This behavior allows for different source providers/systems to make
     * changes to a given correlation and maintain traceability back to the original
     * correlation.
     */
    idParentCorrelation?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier indicates the target on-orbit object being correlated. This
     * may be an internal identifier and not necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Current 18th SDS satellite/catalog number of the target on-orbit object. Useful
     * to know in the case where an observation is correlated to another
     * satellite/catalog number.
     */
    satNo?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Identifier of the Track associated with this ObsCorrelation.
     */
    trackId?: string;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;
  }
}

Obscorrelation.History = History;

export declare namespace Obscorrelation {
  export {
    type ObscorrelationRetrieveResponse as ObscorrelationRetrieveResponse,
    type ObscorrelationListResponse as ObscorrelationListResponse,
    type ObscorrelationCountResponse as ObscorrelationCountResponse,
    type ObscorrelationQueryHelpResponse as ObscorrelationQueryHelpResponse,
    type ObscorrelationTupleResponse as ObscorrelationTupleResponse,
    type ObscorrelationListResponsesOffsetPage as ObscorrelationListResponsesOffsetPage,
    type ObscorrelationCreateParams as ObscorrelationCreateParams,
    type ObscorrelationRetrieveParams as ObscorrelationRetrieveParams,
    type ObscorrelationListParams as ObscorrelationListParams,
    type ObscorrelationCountParams as ObscorrelationCountParams,
    type ObscorrelationCreateBulkParams as ObscorrelationCreateBulkParams,
    type ObscorrelationTupleParams as ObscorrelationTupleParams,
    type ObscorrelationUnvalidatedPublishParams as ObscorrelationUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListResponsesOffsetPage as HistoryListResponsesOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
