// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
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
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Onorbitassessment extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single OnorbitAssessment as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitassessment.create({
   *   assmtTime: '2025-08-10T02:44:02.000Z',
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: OnorbitassessmentCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/onorbitassessment', {
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
   * for await (const onorbitassessmentListResponse of client.onorbitassessment.list(
   *   { assmtTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OnorbitassessmentListParams,
    options?: RequestOptions,
  ): PagePromise<OnorbitassessmentListResponsesOffsetPage, OnorbitassessmentListResponse> {
    return this._client.getAPIList('/udl/onorbitassessment', OffsetPage<OnorbitassessmentListResponse>, {
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
   * const response = await client.onorbitassessment.count({
   *   assmtTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: OnorbitassessmentCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/onorbitassessment/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * OnorbitAssessment records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.onorbitassessment.createBulk({
   *   body: [
   *     {
   *       assmtTime: '2025-08-10T02:44:02.000Z',
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: OnorbitassessmentCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/onorbitassessment/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single OnorbitAssessment record by its unique ID
   * passed as a path parameter.
   *
   * @example
   * ```ts
   * const onorbitassessment =
   *   await client.onorbitassessment.get('id');
   * ```
   */
  get(
    id: string,
    query: OnorbitassessmentGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OnorbitassessmentGetResponse> {
    return this._client.get(path`/udl/onorbitassessment/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.onorbitassessment.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<OnorbitassessmentQueryhelpResponse> {
    return this._client.get('/udl/onorbitassessment/queryhelp', options);
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
   * const response = await client.onorbitassessment.tuple({
   *   assmtTime: '2019-12-27T18:11:19.117Z',
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(
    query: OnorbitassessmentTupleParams,
    options?: RequestOptions,
  ): APIPromise<OnorbitassessmentTupleResponse> {
    return this._client.get('/udl/onorbitassessment/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple OnorbitAssessment records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitassessment.unvalidatedPublish({
   *   body: [
   *     {
   *       assmtTime: '2025-08-10T02:44:02.000Z',
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(
    params: OnorbitassessmentUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-onorbitassessment', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type OnorbitassessmentListResponsesOffsetPage = OffsetPage<OnorbitassessmentListResponse>;

/**
 * Spacecraft characterization results from analysis of MASINT data. Supports
 * results of both the overall assessment of a particular spacecraft as well as of
 * individual signature packages.
 */
export interface OnorbitassessmentListResponse {
  /**
   * The time of the assessment, in ISO 8601 UTC format with millisecond precision.
   */
  assmtTime: string;

  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

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
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The overall assessment of the on-orbit object. The assessment will vary
   * depending on the assessment level. If assmtLevel = SATELLITE, then expected
   * values include HEALTHY, NO DATA, UNHEALTHY, and UNKNOWN. If assmtLevel =
   * SIGNATURE, then expected values include ANOMALOUS, BAD, NOMINAL, and UNKNOWN.
   */
  assessment?: string;

  /**
   * Comments and details concerning this assessment.
   */
  assmtDetails?: string;

  /**
   * The level (SATELLITE, SIGNATURE) of this assessment.
   */
  assmtLevel?: string;

  /**
   * The rotational period, in seconds, determined in the assessment of the on-orbit
   * object.
   */
  assmtRotPeriod?: number;

  /**
   * The sub-type for this assessment. The sub-type provides an additional level of
   * specification when the assessment level = SIGNATURE, and will vary based on the
   * overall assessment. If assessment = ANOMALOUS, then expected values include
   * ACTIVITY OBSERVED, BAD CONFIGURATION, MANEUVERING, OTHER, POSSIBLE SAFE MODE,
   * UNSTABLE, and WRONG ATTITUDE. If assessment = BAD, then expected values include
   * BAD-MISSING STATE VECTOR, CORRUPT-NOISY, CROSS-TAG, DROPOUTS, INSUFFICIENT DATA,
   * INSUFFICIENT LOOK ANGLE, NO CROSSOVER, and SHORT. If assessment = NOMINAL, then
   * expected values include ACTIVITY OBSERVED, GRAVITY GRADIENT, HORIZON STABLE,
   * INERTIAL, MANEUVERING, SPIN STABLE, and STABLE. If assessment = UNKNOWN, then
   * expected values include NO COHORT, and OTHER.
   */
  assmtSubType?: string;

  /**
   * URL to an external location containing additional assessment information.
   */
  assmtURL?: string;

  /**
   * Flag indicating whether this assessment was auto-generated (true) or produced by
   * an analyst.
   */
  autoAssmt?: boolean;

  /**
   * URL to an external location containing the data that was used to make this
   * assessment.
   */
  collectionURL?: string;

  /**
   * Array of the affected spacecraft component(s) relevant to this assessment, if
   * non-nominal.
   */
  components?: Array<string>;

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
   * Unique identifier of the target satellite on-orbit object to which this
   * assessment applies. This ID can be used to obtain additional information on an
   * OnOrbit object using the 'get by ID' operation (e.g. /udl/onorbit/{id}). For
   * example, the OnOrbit with idOnOrbit = 25544 would be queried as
   * /udl/onorbit/25544.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the sensor from which the signature data applied in this
   * assessment was collected. This ID can be used to obtain additional information
   * on a sensor using the 'get by ID' operation (e.g. /udl/sensor/{id}). For
   * example, the sensor with idSensor = abc would be queried as /udl/sensor/abc.
   */
  idSensor?: string;

  /**
   * The total duration, in hours, of the signature or set of signatures used to
   * create this assessment.
   */
  obDuration?: number;

  /**
   * The observation time, in ISO 8601 UTC format with millisecond precision. For
   * non-instantaneous collections, the observation time will correspond to the
   * earliest timestamp in the signature or signature set data.
   */
  obTime?: string;

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
   * Optional identifier provided by the source to indicate the target on-orbit
   * object to which this assessment applies. This may be an internal identifier and
   * not necessarily map to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the observation source to indicate the sensor
   * which produced this observation. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Satellite/Catalog number of the target on-orbit object to which this assessment
   * applies.
   */
  satNo?: number;

  /**
   * The observation data type (LONG DWELL, NARROWBAND, PHOTOMETRIC POL, PHOTOMETRY,
   * RANGE PROFILER, WIDEBAND, etc.) contained in the signature. Applies when
   * assmtLevel = SIGNATURE.
   */
  sigDataType?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Array of UUIDs of the UDL data records that are related to this assessment. See
   * the associated 'srcTyps' array for the specific types of data, positionally
   * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
   * match in size. See the corresponding srcTyps array element for the data type of
   * the UUID and use the appropriate API operation to retrieve that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (DOA, ELSET, EO, ESID, GROUNDIMAGE, POI, MANEUVER,
   * MTI, RADAR, RF, SIGACT, SKYIMAGE, SV, TRACK, etc.) that are related to this
   * assessment. See the associated 'srcIds' array for the record UUIDs, positionally
   * corresponding to the record types in this array. The 'srcTyps' and 'srcIds'
   * arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;
}

export type OnorbitassessmentCountResponse = string;

/**
 * Spacecraft characterization results from analysis of MASINT data. Supports
 * results of both the overall assessment of a particular spacecraft as well as of
 * individual signature packages.
 */
export interface OnorbitassessmentGetResponse {
  /**
   * The time of the assessment, in ISO 8601 UTC format with millisecond precision.
   */
  assmtTime: string;

  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

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
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The overall assessment of the on-orbit object. The assessment will vary
   * depending on the assessment level. If assmtLevel = SATELLITE, then expected
   * values include HEALTHY, NO DATA, UNHEALTHY, and UNKNOWN. If assmtLevel =
   * SIGNATURE, then expected values include ANOMALOUS, BAD, NOMINAL, and UNKNOWN.
   */
  assessment?: string;

  /**
   * Comments and details concerning this assessment.
   */
  assmtDetails?: string;

  /**
   * The level (SATELLITE, SIGNATURE) of this assessment.
   */
  assmtLevel?: string;

  /**
   * The rotational period, in seconds, determined in the assessment of the on-orbit
   * object.
   */
  assmtRotPeriod?: number;

  /**
   * The sub-type for this assessment. The sub-type provides an additional level of
   * specification when the assessment level = SIGNATURE, and will vary based on the
   * overall assessment. If assessment = ANOMALOUS, then expected values include
   * ACTIVITY OBSERVED, BAD CONFIGURATION, MANEUVERING, OTHER, POSSIBLE SAFE MODE,
   * UNSTABLE, and WRONG ATTITUDE. If assessment = BAD, then expected values include
   * BAD-MISSING STATE VECTOR, CORRUPT-NOISY, CROSS-TAG, DROPOUTS, INSUFFICIENT DATA,
   * INSUFFICIENT LOOK ANGLE, NO CROSSOVER, and SHORT. If assessment = NOMINAL, then
   * expected values include ACTIVITY OBSERVED, GRAVITY GRADIENT, HORIZON STABLE,
   * INERTIAL, MANEUVERING, SPIN STABLE, and STABLE. If assessment = UNKNOWN, then
   * expected values include NO COHORT, and OTHER.
   */
  assmtSubType?: string;

  /**
   * URL to an external location containing additional assessment information.
   */
  assmtURL?: string;

  /**
   * Flag indicating whether this assessment was auto-generated (true) or produced by
   * an analyst.
   */
  autoAssmt?: boolean;

  /**
   * URL to an external location containing the data that was used to make this
   * assessment.
   */
  collectionURL?: string;

  /**
   * Array of the affected spacecraft component(s) relevant to this assessment, if
   * non-nominal.
   */
  components?: Array<string>;

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
   * Unique identifier of the target satellite on-orbit object to which this
   * assessment applies. This ID can be used to obtain additional information on an
   * OnOrbit object using the 'get by ID' operation (e.g. /udl/onorbit/{id}). For
   * example, the OnOrbit with idOnOrbit = 25544 would be queried as
   * /udl/onorbit/25544.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the sensor from which the signature data applied in this
   * assessment was collected. This ID can be used to obtain additional information
   * on a sensor using the 'get by ID' operation (e.g. /udl/sensor/{id}). For
   * example, the sensor with idSensor = abc would be queried as /udl/sensor/abc.
   */
  idSensor?: string;

  /**
   * The total duration, in hours, of the signature or set of signatures used to
   * create this assessment.
   */
  obDuration?: number;

  /**
   * The observation time, in ISO 8601 UTC format with millisecond precision. For
   * non-instantaneous collections, the observation time will correspond to the
   * earliest timestamp in the signature or signature set data.
   */
  obTime?: string;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: Shared.OnorbitFull;

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
   * Optional identifier provided by the source to indicate the target on-orbit
   * object to which this assessment applies. This may be an internal identifier and
   * not necessarily map to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the observation source to indicate the sensor
   * which produced this observation. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Satellite/Catalog number of the target on-orbit object to which this assessment
   * applies.
   */
  satNo?: number;

  /**
   * The observation data type (LONG DWELL, NARROWBAND, PHOTOMETRIC POL, PHOTOMETRY,
   * RANGE PROFILER, WIDEBAND, etc.) contained in the signature. Applies when
   * assmtLevel = SIGNATURE.
   */
  sigDataType?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Array of UUIDs of the UDL data records that are related to this assessment. See
   * the associated 'srcTyps' array for the specific types of data, positionally
   * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
   * match in size. See the corresponding srcTyps array element for the data type of
   * the UUID and use the appropriate API operation to retrieve that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (DOA, ELSET, EO, ESID, GROUNDIMAGE, POI, MANEUVER,
   * MTI, RADAR, RF, SIGACT, SKYIMAGE, SV, TRACK, etc.) that are related to this
   * assessment. See the associated 'srcIds' array for the record UUIDs, positionally
   * corresponding to the record types in this array. The 'srcTyps' and 'srcIds'
   * arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;
}

export interface OnorbitassessmentQueryhelpResponse {
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

export type OnorbitassessmentTupleResponse =
  Array<OnorbitassessmentTupleResponse.OnorbitassessmentTupleResponseItem>;

export namespace OnorbitassessmentTupleResponse {
  /**
   * Spacecraft characterization results from analysis of MASINT data. Supports
   * results of both the overall assessment of a particular spacecraft as well as of
   * individual signature packages.
   */
  export interface OnorbitassessmentTupleResponseItem {
    /**
     * The time of the assessment, in ISO 8601 UTC format with millisecond precision.
     */
    assmtTime: string;

    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

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
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The overall assessment of the on-orbit object. The assessment will vary
     * depending on the assessment level. If assmtLevel = SATELLITE, then expected
     * values include HEALTHY, NO DATA, UNHEALTHY, and UNKNOWN. If assmtLevel =
     * SIGNATURE, then expected values include ANOMALOUS, BAD, NOMINAL, and UNKNOWN.
     */
    assessment?: string;

    /**
     * Comments and details concerning this assessment.
     */
    assmtDetails?: string;

    /**
     * The level (SATELLITE, SIGNATURE) of this assessment.
     */
    assmtLevel?: string;

    /**
     * The rotational period, in seconds, determined in the assessment of the on-orbit
     * object.
     */
    assmtRotPeriod?: number;

    /**
     * The sub-type for this assessment. The sub-type provides an additional level of
     * specification when the assessment level = SIGNATURE, and will vary based on the
     * overall assessment. If assessment = ANOMALOUS, then expected values include
     * ACTIVITY OBSERVED, BAD CONFIGURATION, MANEUVERING, OTHER, POSSIBLE SAFE MODE,
     * UNSTABLE, and WRONG ATTITUDE. If assessment = BAD, then expected values include
     * BAD-MISSING STATE VECTOR, CORRUPT-NOISY, CROSS-TAG, DROPOUTS, INSUFFICIENT DATA,
     * INSUFFICIENT LOOK ANGLE, NO CROSSOVER, and SHORT. If assessment = NOMINAL, then
     * expected values include ACTIVITY OBSERVED, GRAVITY GRADIENT, HORIZON STABLE,
     * INERTIAL, MANEUVERING, SPIN STABLE, and STABLE. If assessment = UNKNOWN, then
     * expected values include NO COHORT, and OTHER.
     */
    assmtSubType?: string;

    /**
     * URL to an external location containing additional assessment information.
     */
    assmtURL?: string;

    /**
     * Flag indicating whether this assessment was auto-generated (true) or produced by
     * an analyst.
     */
    autoAssmt?: boolean;

    /**
     * URL to an external location containing the data that was used to make this
     * assessment.
     */
    collectionURL?: string;

    /**
     * Array of the affected spacecraft component(s) relevant to this assessment, if
     * non-nominal.
     */
    components?: Array<string>;

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
     * Unique identifier of the target satellite on-orbit object to which this
     * assessment applies. This ID can be used to obtain additional information on an
     * OnOrbit object using the 'get by ID' operation (e.g. /udl/onorbit/{id}). For
     * example, the OnOrbit with idOnOrbit = 25544 would be queried as
     * /udl/onorbit/25544.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the sensor from which the signature data applied in this
     * assessment was collected. This ID can be used to obtain additional information
     * on a sensor using the 'get by ID' operation (e.g. /udl/sensor/{id}). For
     * example, the sensor with idSensor = abc would be queried as /udl/sensor/abc.
     */
    idSensor?: string;

    /**
     * The total duration, in hours, of the signature or set of signatures used to
     * create this assessment.
     */
    obDuration?: number;

    /**
     * The observation time, in ISO 8601 UTC format with millisecond precision. For
     * non-instantaneous collections, the observation time will correspond to the
     * earliest timestamp in the signature or signature set data.
     */
    obTime?: string;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Shared.OnorbitFull;

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
     * Optional identifier provided by the source to indicate the target on-orbit
     * object to which this assessment applies. This may be an internal identifier and
     * not necessarily map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by the observation source to indicate the sensor
     * which produced this observation. This may be an internal identifier and not
     * necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Satellite/Catalog number of the target on-orbit object to which this assessment
     * applies.
     */
    satNo?: number;

    /**
     * The observation data type (LONG DWELL, NARROWBAND, PHOTOMETRIC POL, PHOTOMETRY,
     * RANGE PROFILER, WIDEBAND, etc.) contained in the signature. Applies when
     * assmtLevel = SIGNATURE.
     */
    sigDataType?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Array of UUIDs of the UDL data records that are related to this assessment. See
     * the associated 'srcTyps' array for the specific types of data, positionally
     * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
     * match in size. See the corresponding srcTyps array element for the data type of
     * the UUID and use the appropriate API operation to retrieve that object.
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (DOA, ELSET, EO, ESID, GROUNDIMAGE, POI, MANEUVER,
     * MTI, RADAR, RF, SIGACT, SKYIMAGE, SV, TRACK, etc.) that are related to this
     * assessment. See the associated 'srcIds' array for the record UUIDs, positionally
     * corresponding to the record types in this array. The 'srcTyps' and 'srcIds'
     * arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;
  }
}

export interface OnorbitassessmentCreateParams {
  /**
   * The time of the assessment, in ISO 8601 UTC format with millisecond precision.
   */
  assmtTime: string;

  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

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
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The overall assessment of the on-orbit object. The assessment will vary
   * depending on the assessment level. If assmtLevel = SATELLITE, then expected
   * values include HEALTHY, NO DATA, UNHEALTHY, and UNKNOWN. If assmtLevel =
   * SIGNATURE, then expected values include ANOMALOUS, BAD, NOMINAL, and UNKNOWN.
   */
  assessment?: string;

  /**
   * Comments and details concerning this assessment.
   */
  assmtDetails?: string;

  /**
   * The level (SATELLITE, SIGNATURE) of this assessment.
   */
  assmtLevel?: string;

  /**
   * The rotational period, in seconds, determined in the assessment of the on-orbit
   * object.
   */
  assmtRotPeriod?: number;

  /**
   * The sub-type for this assessment. The sub-type provides an additional level of
   * specification when the assessment level = SIGNATURE, and will vary based on the
   * overall assessment. If assessment = ANOMALOUS, then expected values include
   * ACTIVITY OBSERVED, BAD CONFIGURATION, MANEUVERING, OTHER, POSSIBLE SAFE MODE,
   * UNSTABLE, and WRONG ATTITUDE. If assessment = BAD, then expected values include
   * BAD-MISSING STATE VECTOR, CORRUPT-NOISY, CROSS-TAG, DROPOUTS, INSUFFICIENT DATA,
   * INSUFFICIENT LOOK ANGLE, NO CROSSOVER, and SHORT. If assessment = NOMINAL, then
   * expected values include ACTIVITY OBSERVED, GRAVITY GRADIENT, HORIZON STABLE,
   * INERTIAL, MANEUVERING, SPIN STABLE, and STABLE. If assessment = UNKNOWN, then
   * expected values include NO COHORT, and OTHER.
   */
  assmtSubType?: string;

  /**
   * URL to an external location containing additional assessment information.
   */
  assmtURL?: string;

  /**
   * Flag indicating whether this assessment was auto-generated (true) or produced by
   * an analyst.
   */
  autoAssmt?: boolean;

  /**
   * URL to an external location containing the data that was used to make this
   * assessment.
   */
  collectionURL?: string;

  /**
   * Array of the affected spacecraft component(s) relevant to this assessment, if
   * non-nominal.
   */
  components?: Array<string>;

  /**
   * Unique identifier of the target satellite on-orbit object to which this
   * assessment applies. This ID can be used to obtain additional information on an
   * OnOrbit object using the 'get by ID' operation (e.g. /udl/onorbit/{id}). For
   * example, the OnOrbit with idOnOrbit = 25544 would be queried as
   * /udl/onorbit/25544.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the sensor from which the signature data applied in this
   * assessment was collected. This ID can be used to obtain additional information
   * on a sensor using the 'get by ID' operation (e.g. /udl/sensor/{id}). For
   * example, the sensor with idSensor = abc would be queried as /udl/sensor/abc.
   */
  idSensor?: string;

  /**
   * The total duration, in hours, of the signature or set of signatures used to
   * create this assessment.
   */
  obDuration?: number;

  /**
   * The observation time, in ISO 8601 UTC format with millisecond precision. For
   * non-instantaneous collections, the observation time will correspond to the
   * earliest timestamp in the signature or signature set data.
   */
  obTime?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by the source to indicate the target on-orbit
   * object to which this assessment applies. This may be an internal identifier and
   * not necessarily map to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the observation source to indicate the sensor
   * which produced this observation. This may be an internal identifier and not
   * necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Satellite/Catalog number of the target on-orbit object to which this assessment
   * applies.
   */
  satNo?: number;

  /**
   * The observation data type (LONG DWELL, NARROWBAND, PHOTOMETRIC POL, PHOTOMETRY,
   * RANGE PROFILER, WIDEBAND, etc.) contained in the signature. Applies when
   * assmtLevel = SIGNATURE.
   */
  sigDataType?: string;

  /**
   * Array of UUIDs of the UDL data records that are related to this assessment. See
   * the associated 'srcTyps' array for the specific types of data, positionally
   * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
   * match in size. See the corresponding srcTyps array element for the data type of
   * the UUID and use the appropriate API operation to retrieve that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (DOA, ELSET, EO, ESID, GROUNDIMAGE, POI, MANEUVER,
   * MTI, RADAR, RF, SIGACT, SKYIMAGE, SV, TRACK, etc.) that are related to this
   * assessment. See the associated 'srcIds' array for the record UUIDs, positionally
   * corresponding to the record types in this array. The 'srcTyps' and 'srcIds'
   * arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;
}

export interface OnorbitassessmentListParams extends OffsetPageParams {
  /**
   * The time of the assessment, in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  assmtTime: string;
}

export interface OnorbitassessmentCountParams {
  /**
   * The time of the assessment, in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  assmtTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface OnorbitassessmentCreateBulkParams {
  body: Array<OnorbitassessmentCreateBulkParams.Body>;
}

export namespace OnorbitassessmentCreateBulkParams {
  /**
   * Spacecraft characterization results from analysis of MASINT data. Supports
   * results of both the overall assessment of a particular spacecraft as well as of
   * individual signature packages.
   */
  export interface Body {
    /**
     * The time of the assessment, in ISO 8601 UTC format with millisecond precision.
     */
    assmtTime: string;

    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

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
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The overall assessment of the on-orbit object. The assessment will vary
     * depending on the assessment level. If assmtLevel = SATELLITE, then expected
     * values include HEALTHY, NO DATA, UNHEALTHY, and UNKNOWN. If assmtLevel =
     * SIGNATURE, then expected values include ANOMALOUS, BAD, NOMINAL, and UNKNOWN.
     */
    assessment?: string;

    /**
     * Comments and details concerning this assessment.
     */
    assmtDetails?: string;

    /**
     * The level (SATELLITE, SIGNATURE) of this assessment.
     */
    assmtLevel?: string;

    /**
     * The rotational period, in seconds, determined in the assessment of the on-orbit
     * object.
     */
    assmtRotPeriod?: number;

    /**
     * The sub-type for this assessment. The sub-type provides an additional level of
     * specification when the assessment level = SIGNATURE, and will vary based on the
     * overall assessment. If assessment = ANOMALOUS, then expected values include
     * ACTIVITY OBSERVED, BAD CONFIGURATION, MANEUVERING, OTHER, POSSIBLE SAFE MODE,
     * UNSTABLE, and WRONG ATTITUDE. If assessment = BAD, then expected values include
     * BAD-MISSING STATE VECTOR, CORRUPT-NOISY, CROSS-TAG, DROPOUTS, INSUFFICIENT DATA,
     * INSUFFICIENT LOOK ANGLE, NO CROSSOVER, and SHORT. If assessment = NOMINAL, then
     * expected values include ACTIVITY OBSERVED, GRAVITY GRADIENT, HORIZON STABLE,
     * INERTIAL, MANEUVERING, SPIN STABLE, and STABLE. If assessment = UNKNOWN, then
     * expected values include NO COHORT, and OTHER.
     */
    assmtSubType?: string;

    /**
     * URL to an external location containing additional assessment information.
     */
    assmtURL?: string;

    /**
     * Flag indicating whether this assessment was auto-generated (true) or produced by
     * an analyst.
     */
    autoAssmt?: boolean;

    /**
     * URL to an external location containing the data that was used to make this
     * assessment.
     */
    collectionURL?: string;

    /**
     * Array of the affected spacecraft component(s) relevant to this assessment, if
     * non-nominal.
     */
    components?: Array<string>;

    /**
     * Unique identifier of the target satellite on-orbit object to which this
     * assessment applies. This ID can be used to obtain additional information on an
     * OnOrbit object using the 'get by ID' operation (e.g. /udl/onorbit/{id}). For
     * example, the OnOrbit with idOnOrbit = 25544 would be queried as
     * /udl/onorbit/25544.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the sensor from which the signature data applied in this
     * assessment was collected. This ID can be used to obtain additional information
     * on a sensor using the 'get by ID' operation (e.g. /udl/sensor/{id}). For
     * example, the sensor with idSensor = abc would be queried as /udl/sensor/abc.
     */
    idSensor?: string;

    /**
     * The total duration, in hours, of the signature or set of signatures used to
     * create this assessment.
     */
    obDuration?: number;

    /**
     * The observation time, in ISO 8601 UTC format with millisecond precision. For
     * non-instantaneous collections, the observation time will correspond to the
     * earliest timestamp in the signature or signature set data.
     */
    obTime?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the source to indicate the target on-orbit
     * object to which this assessment applies. This may be an internal identifier and
     * not necessarily map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by the observation source to indicate the sensor
     * which produced this observation. This may be an internal identifier and not
     * necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Satellite/Catalog number of the target on-orbit object to which this assessment
     * applies.
     */
    satNo?: number;

    /**
     * The observation data type (LONG DWELL, NARROWBAND, PHOTOMETRIC POL, PHOTOMETRY,
     * RANGE PROFILER, WIDEBAND, etc.) contained in the signature. Applies when
     * assmtLevel = SIGNATURE.
     */
    sigDataType?: string;

    /**
     * Array of UUIDs of the UDL data records that are related to this assessment. See
     * the associated 'srcTyps' array for the specific types of data, positionally
     * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
     * match in size. See the corresponding srcTyps array element for the data type of
     * the UUID and use the appropriate API operation to retrieve that object.
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (DOA, ELSET, EO, ESID, GROUNDIMAGE, POI, MANEUVER,
     * MTI, RADAR, RF, SIGACT, SKYIMAGE, SV, TRACK, etc.) that are related to this
     * assessment. See the associated 'srcIds' array for the record UUIDs, positionally
     * corresponding to the record types in this array. The 'srcTyps' and 'srcIds'
     * arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;
  }
}

export interface OnorbitassessmentGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface OnorbitassessmentTupleParams {
  /**
   * The time of the assessment, in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  assmtTime: string;

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

export interface OnorbitassessmentUnvalidatedPublishParams {
  body: Array<OnorbitassessmentUnvalidatedPublishParams.Body>;
}

export namespace OnorbitassessmentUnvalidatedPublishParams {
  /**
   * Spacecraft characterization results from analysis of MASINT data. Supports
   * results of both the overall assessment of a particular spacecraft as well as of
   * individual signature packages.
   */
  export interface Body {
    /**
     * The time of the assessment, in ISO 8601 UTC format with millisecond precision.
     */
    assmtTime: string;

    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

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
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The overall assessment of the on-orbit object. The assessment will vary
     * depending on the assessment level. If assmtLevel = SATELLITE, then expected
     * values include HEALTHY, NO DATA, UNHEALTHY, and UNKNOWN. If assmtLevel =
     * SIGNATURE, then expected values include ANOMALOUS, BAD, NOMINAL, and UNKNOWN.
     */
    assessment?: string;

    /**
     * Comments and details concerning this assessment.
     */
    assmtDetails?: string;

    /**
     * The level (SATELLITE, SIGNATURE) of this assessment.
     */
    assmtLevel?: string;

    /**
     * The rotational period, in seconds, determined in the assessment of the on-orbit
     * object.
     */
    assmtRotPeriod?: number;

    /**
     * The sub-type for this assessment. The sub-type provides an additional level of
     * specification when the assessment level = SIGNATURE, and will vary based on the
     * overall assessment. If assessment = ANOMALOUS, then expected values include
     * ACTIVITY OBSERVED, BAD CONFIGURATION, MANEUVERING, OTHER, POSSIBLE SAFE MODE,
     * UNSTABLE, and WRONG ATTITUDE. If assessment = BAD, then expected values include
     * BAD-MISSING STATE VECTOR, CORRUPT-NOISY, CROSS-TAG, DROPOUTS, INSUFFICIENT DATA,
     * INSUFFICIENT LOOK ANGLE, NO CROSSOVER, and SHORT. If assessment = NOMINAL, then
     * expected values include ACTIVITY OBSERVED, GRAVITY GRADIENT, HORIZON STABLE,
     * INERTIAL, MANEUVERING, SPIN STABLE, and STABLE. If assessment = UNKNOWN, then
     * expected values include NO COHORT, and OTHER.
     */
    assmtSubType?: string;

    /**
     * URL to an external location containing additional assessment information.
     */
    assmtURL?: string;

    /**
     * Flag indicating whether this assessment was auto-generated (true) or produced by
     * an analyst.
     */
    autoAssmt?: boolean;

    /**
     * URL to an external location containing the data that was used to make this
     * assessment.
     */
    collectionURL?: string;

    /**
     * Array of the affected spacecraft component(s) relevant to this assessment, if
     * non-nominal.
     */
    components?: Array<string>;

    /**
     * Unique identifier of the target satellite on-orbit object to which this
     * assessment applies. This ID can be used to obtain additional information on an
     * OnOrbit object using the 'get by ID' operation (e.g. /udl/onorbit/{id}). For
     * example, the OnOrbit with idOnOrbit = 25544 would be queried as
     * /udl/onorbit/25544.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the sensor from which the signature data applied in this
     * assessment was collected. This ID can be used to obtain additional information
     * on a sensor using the 'get by ID' operation (e.g. /udl/sensor/{id}). For
     * example, the sensor with idSensor = abc would be queried as /udl/sensor/abc.
     */
    idSensor?: string;

    /**
     * The total duration, in hours, of the signature or set of signatures used to
     * create this assessment.
     */
    obDuration?: number;

    /**
     * The observation time, in ISO 8601 UTC format with millisecond precision. For
     * non-instantaneous collections, the observation time will correspond to the
     * earliest timestamp in the signature or signature set data.
     */
    obTime?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the source to indicate the target on-orbit
     * object to which this assessment applies. This may be an internal identifier and
     * not necessarily map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by the observation source to indicate the sensor
     * which produced this observation. This may be an internal identifier and not
     * necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * Satellite/Catalog number of the target on-orbit object to which this assessment
     * applies.
     */
    satNo?: number;

    /**
     * The observation data type (LONG DWELL, NARROWBAND, PHOTOMETRIC POL, PHOTOMETRY,
     * RANGE PROFILER, WIDEBAND, etc.) contained in the signature. Applies when
     * assmtLevel = SIGNATURE.
     */
    sigDataType?: string;

    /**
     * Array of UUIDs of the UDL data records that are related to this assessment. See
     * the associated 'srcTyps' array for the specific types of data, positionally
     * corresponding to the UUIDs in this array. The 'srcTyps' and 'srcIds' arrays must
     * match in size. See the corresponding srcTyps array element for the data type of
     * the UUID and use the appropriate API operation to retrieve that object.
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (DOA, ELSET, EO, ESID, GROUNDIMAGE, POI, MANEUVER,
     * MTI, RADAR, RF, SIGACT, SKYIMAGE, SV, TRACK, etc.) that are related to this
     * assessment. See the associated 'srcIds' array for the record UUIDs, positionally
     * corresponding to the record types in this array. The 'srcTyps' and 'srcIds'
     * arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;
  }
}

Onorbitassessment.History = History;

export declare namespace Onorbitassessment {
  export {
    type OnorbitassessmentListResponse as OnorbitassessmentListResponse,
    type OnorbitassessmentCountResponse as OnorbitassessmentCountResponse,
    type OnorbitassessmentGetResponse as OnorbitassessmentGetResponse,
    type OnorbitassessmentQueryhelpResponse as OnorbitassessmentQueryhelpResponse,
    type OnorbitassessmentTupleResponse as OnorbitassessmentTupleResponse,
    type OnorbitassessmentListResponsesOffsetPage as OnorbitassessmentListResponsesOffsetPage,
    type OnorbitassessmentCreateParams as OnorbitassessmentCreateParams,
    type OnorbitassessmentListParams as OnorbitassessmentListParams,
    type OnorbitassessmentCountParams as OnorbitassessmentCountParams,
    type OnorbitassessmentCreateBulkParams as OnorbitassessmentCreateBulkParams,
    type OnorbitassessmentGetParams as OnorbitassessmentGetParams,
    type OnorbitassessmentTupleParams as OnorbitassessmentTupleParams,
    type OnorbitassessmentUnvalidatedPublishParams as OnorbitassessmentUnvalidatedPublishParams,
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
