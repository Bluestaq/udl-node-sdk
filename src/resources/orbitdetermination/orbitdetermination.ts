// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ElsetsAPI from '../elsets/elsets';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
} from './history';
import * as StatevectorAPI from '../statevector/statevector';
import * as OrbitdeterminationHistoryAPI from '../udl/orbitdetermination/history';

export class Orbitdetermination extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single OrbitDetermination record as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: OrbitdeterminationCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/orbitdetermination', {
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
  list(
    query?: OrbitdeterminationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrbitdeterminationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<OrbitdeterminationListResponse>;
  list(
    query: OrbitdeterminationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrbitdeterminationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/udl/orbitdetermination', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query?: OrbitdeterminationCountParams, options?: Core.RequestOptions): Core.APIPromise<string>;
  count(options?: Core.RequestOptions): Core.APIPromise<string>;
  count(
    query: OrbitdeterminationCountParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    if (isRequestOptions(query)) {
      return this.count({}, query);
    }
    return this._client.get('/udl/orbitdetermination/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * OrbitDetermination records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into the UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   */
  createBulk(body?: OrbitdeterminationCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  createBulk(options?: Core.RequestOptions): Core.APIPromise<void>;
  createBulk(
    body?: OrbitdeterminationCreateBulkParams | Core.RequestOptions,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(body)) {
      return this.createBulk(undefined, body);
    }
    return this._client.post('/udl/orbitdetermination/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to take multiple OrbitDetermination records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  createBulkV2(
    body: OrbitdeterminationCreateBulkV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/filedrop/udl-orbitdetermination', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single OrbitDetermination record by its unique ID
   * passed as a path parameter.
   */
  get(
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrbitdeterminationHistoryAPI.OrbitdeterminationFull> {
    return this._client.get(`/udl/orbitdetermination/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/orbitdetermination/queryhelp', {
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
  tuple(
    query: OrbitdeterminationTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrbitdeterminationTupleResponse> {
    return this._client.get('/udl/orbitdetermination/tuple', { query, ...options });
  }
}

export type OrbitdeterminationListResponse =
  Array<OrbitdeterminationListResponse.OrbitdeterminationListResponseItem>;

export namespace OrbitdeterminationListResponse {
  /**
   * Model representation of orbit determination algorithm results describing General
   * Perturbations or Special Perturbations orbital updates.
   */
  export interface OrbitdeterminationListResponseItem {
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
     * End time for OD solution in ISO 8601 UTC datetime format, with microsecond
     * precision.
     */
    endTime: string;

    /**
     * Flag indicating whether this is an initial orbit determination.
     */
    initialOD: boolean;

    /**
     * Orbit determination method used to produce this record (e.g. BLS, KF, UKF,
     * etc.).
     */
    method: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Start time for OD solution in ISO 8601 UTC datetime format, with microsecond
     * precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Array of UDL data (observation) UUIDs that were accepted in this OD solution.
     * See the associated acceptedObTyps array for the specific types of observations
     * for the positionally corresponding UUIDs in this array (the two arrays must
     * match in size).
     */
    acceptedObIds?: Array<string>;

    /**
     * Array of UDL observation types (e.g. DOA, EO, RADAR, RF) of the observations
     * that were accepted in this OD solution. See the associated acceptedObIds array
     * for the records UUID(s), positionally corresponding to the record types in this
     * array. The acceptedObTyps and acceptedObIds arrays must match in size.
     */
    acceptedObTyps?: Array<string>;

    /**
     * Flag indicating whether the AGOM was estimated during this OD solution.
     */
    agomEst?: boolean;

    /**
     * Model used to estimate the AGOM.
     */
    agomModel?: string;

    /**
     * An element set is a collection of Keplerian orbital elements describing an orbit
     * of a particular satellite. The data is used along with an orbit propagator in
     * order to predict the motion of a satellite. The element set, or elset for short,
     * consists of identification data, the classical elements and drag parameters.
     */
    aprioriElset?: ElsetsAPI.ElsetAbridged;

    /**
     * Identifier of the element set used to seed this OD solution. This ID can be used
     * to obtain additional information on an Elset object using the 'get by ID'
     * operation (e.g. /udl/elset/{id}). For example, the Elset with idElset = abc
     * would be queried as /udl/elset/abc.
     */
    aprioriIdElset?: string;

    /**
     * Identifier of the state vector used to seed this OD solution. This ID can be
     * used to obtain additional information on a StateVector object using the 'get by
     * ID' operation (e.g. /udl/statevector/{id}). For example, the StateVector with
     * idStateVector = abc would be queried as /udl/statevector/abc.
     */
    aprioriIdStateVector?: string;

    /**
     * This service provides operations for querying and manipulation of state vectors
     * for OnOrbit objects. State vectors are cartesian vectors of position (r) and
     * velocity (v) that, together with their time (epoch) (t), uniquely determine the
     * trajectory of the orbiting body in space. J2000 is the preferred coordinate
     * frame for all state vector positions/velocities in UDL, but in some cases data
     * may be in another frame depending on the provider and/or datatype. Please see
     * the 'Discover' tab in the storefront to confirm coordinate frames by data
     * provider.
     */
    aprioriStateVector?: StatevectorAPI.StateVectorAbridged;

    /**
     * Flag indicating whether the ballistic coefficient was estimated during this OD
     * solution.
     */
    ballisticCoeffEst?: boolean;

    /**
     * Model used to estimate the ballistic coefficient.
     */
    ballisticCoeffModel?: string;

    /**
     * Lowest Weighted Root Mean Squared (RMS) value achieved for any single satellite
     * pass during the observation span, indicating the pass with the highest quality
     * OD solution.
     */
    bestPassWrms?: number;

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
     * Model parameter value for energy dissipation rate (EDR) in watts per kilogram.
     */
    edr?: number;

    /**
     * Optional start time at which this OD solution is accurate, in ISO 8601 UTC
     * datetime format with microsecond precision.
     */
    effectiveFrom?: string;

    /**
     * Optional end time at which this OD solution may no longer be accurate, in ISO
     * 8601 UTC datetime format with microsecond precision.
     */
    effectiveUntil?: string;

    /**
     * Error growth rate of the OD solution in kilometers per day.
     */
    errorGrowthRate?: number;

    /**
     * The Weighted Root Mean Squared (RMS) calculated for the first satellite pass in
     * the observation span. Serves as the initial quality metric for the beginning of
     * the observation period.
     */
    firstPassWrms?: number;

    /**
     * The fit span, in days, used in a Batch Least Squares (BLS) OD.
     */
    fitSpan?: number;

    /**
     * Unique identifier of the target satellite on-orbit object. This ID can be used
     * to obtain additional information on an OnOrbit object using the 'get by ID'
     * operation (e.g. /udl/onorbit/{id}). For example, the OnOrbit with idOnOrbit =
     * 25544 would be queried as /udl/onorbit/25544.
     */
    idOnOrbit?: string;

    /**
     * The end of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC datetime format with microsecond precision. For an
     * exact observation time, the lastObStart and lastObEnd are the same.
     */
    lastObEnd?: string;

    /**
     * The start of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC datetime format with microsecond precision. For an
     * exact observation time, the lastObStart and lastObEnd are the same.
     */
    lastObStart?: string;

    /**
     * Source of orbit determination method used to produce this record (e.g. ASW,
     * ACTRAC, FreeFlyer, GEODYNE, GDTS, etc.).
     */
    methodSource?: string;

    /**
     * The number of iterations taken for the algorithm to converge on an OD solution.
     */
    numIterations?: number;

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
     * Optional identifier provided by the OD source to indicate the target on-orbit
     * object of this OD solution. This may be an internal identifier and not
     * necessarily map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * The Weighted Root Mean Squared (RMS) of the differential correction from the
     * previous overhead pass of the satellite. Provides a point of comparison for
     * assessing changes in the quality of the OD solution between consecutive passes.
     */
    previousWrms?: number;

    /**
     * Array of UDL data (observation) UUIDs that were rejected in this OD solution.
     * See the associated rejectedObTyps array for the specific types of observations
     * for the positionally corresponding UUIDs in this array (the two arrays must
     * match in size).
     */
    rejectedObIds?: Array<string>;

    /**
     * Array of UDL observation types (e.g. DOA, EO, RADAR, RF) of the observations
     * that were rejected in this OD solution. See the associated rejectedObIds array
     * for the records UUID(s), positionally corresponding to the record types in this
     * array. The rejectedObTyps and rejectedObIds arrays must match in size.
     */
    rejectedObTyps?: Array<string>;

    /**
     * OD parameter value for the Root Mean Square (RMS) convergence criteria to
     * successfully close the OD solution.
     */
    rmsConvergenceCriteria?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Array of UDL UUIDs (idSensor) of the sensors that contributed observations in
     * this OD solution.
     */
    sensorIds?: Array<string>;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * The time span used for the OD of the object, in days.
     */
    timeSpan?: number;

    /**
     * The Weighted Root Mean Squared (RMS) of the differential correction of the
     * target object that produced this OD state. WRMS is a quality indicator of the OD
     * update, with a value of 1.00 being optimal. WRMS applies to batch least squares
     * (BLS) processes.
     */
    wrms?: number;
  }
}

export type OrbitdeterminationCountResponse = string;

export type OrbitdeterminationTupleResponse = Array<OrbitdeterminationHistoryAPI.OrbitdeterminationFull>;

export interface OrbitdeterminationCreateParams {
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
   * End time for OD solution in ISO 8601 UTC datetime format, with microsecond
   * precision.
   */
  endTime: string;

  /**
   * Flag indicating whether this is an initial orbit determination.
   */
  initialOD: boolean;

  /**
   * Orbit determination method used to produce this record (e.g. BLS, KF, UKF,
   * etc.).
   */
  method: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Start time for OD solution in ISO 8601 UTC datetime format, with microsecond
   * precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Array of UDL data (observation) UUIDs that were accepted in this OD solution.
   * See the associated acceptedObTyps array for the specific types of observations
   * for the positionally corresponding UUIDs in this array (the two arrays must
   * match in size).
   */
  acceptedObIds?: Array<string>;

  /**
   * Array of UDL observation types (e.g. DOA, EO, RADAR, RF) of the observations
   * that were accepted in this OD solution. See the associated acceptedObIds array
   * for the records UUID(s), positionally corresponding to the record types in this
   * array. The acceptedObTyps and acceptedObIds arrays must match in size.
   */
  acceptedObTyps?: Array<string>;

  /**
   * Flag indicating whether the AGOM was estimated during this OD solution.
   */
  agomEst?: boolean;

  /**
   * Model used to estimate the AGOM.
   */
  agomModel?: string;

  /**
   * An element set is a collection of Keplerian orbital elements describing an orbit
   * of a particular satellite. The data is used along with an orbit propagator in
   * order to predict the motion of a satellite. The element set, or elset for short,
   * consists of identification data, the classical elements and drag parameters.
   */
  aprioriElset?: ElsetsAPI.ElsetIngest;

  /**
   * Identifier of the element set used to seed this OD solution. This ID can be used
   * to obtain additional information on an Elset object using the 'get by ID'
   * operation (e.g. /udl/elset/{id}). For example, the Elset with idElset = abc
   * would be queried as /udl/elset/abc.
   */
  aprioriIdElset?: string;

  /**
   * Identifier of the state vector used to seed this OD solution. This ID can be
   * used to obtain additional information on a StateVector object using the 'get by
   * ID' operation (e.g. /udl/statevector/{id}). For example, the StateVector with
   * idStateVector = abc would be queried as /udl/statevector/abc.
   */
  aprioriIdStateVector?: string;

  /**
   * This service provides operations for querying and manipulation of state vectors
   * for OnOrbit objects. State vectors are cartesian vectors of position (r) and
   * velocity (v) that, together with their time (epoch) (t), uniquely determine the
   * trajectory of the orbiting body in space. J2000 is the preferred coordinate
   * frame for all state vector positions/velocities in UDL, but in some cases data
   * may be in another frame depending on the provider and/or datatype. Please see
   * the 'Discover' tab in the storefront to confirm coordinate frames by data
   * provider.
   */
  aprioriStateVector?: StatevectorAPI.StateVectorIngest;

  /**
   * Flag indicating whether the ballistic coefficient was estimated during this OD
   * solution.
   */
  ballisticCoeffEst?: boolean;

  /**
   * Model used to estimate the ballistic coefficient.
   */
  ballisticCoeffModel?: string;

  /**
   * Lowest Weighted Root Mean Squared (RMS) value achieved for any single satellite
   * pass during the observation span, indicating the pass with the highest quality
   * OD solution.
   */
  bestPassWrms?: number;

  /**
   * Model parameter value for energy dissipation rate (EDR) in watts per kilogram.
   */
  edr?: number;

  /**
   * Optional start time at which this OD solution is accurate, in ISO 8601 UTC
   * datetime format with microsecond precision.
   */
  effectiveFrom?: string;

  /**
   * Optional end time at which this OD solution may no longer be accurate, in ISO
   * 8601 UTC datetime format with microsecond precision.
   */
  effectiveUntil?: string;

  /**
   * Error growth rate of the OD solution in kilometers per day.
   */
  errorGrowthRate?: number;

  /**
   * The Weighted Root Mean Squared (RMS) calculated for the first satellite pass in
   * the observation span. Serves as the initial quality metric for the beginning of
   * the observation period.
   */
  firstPassWrms?: number;

  /**
   * The fit span, in days, used in a Batch Least Squares (BLS) OD.
   */
  fitSpan?: number;

  /**
   * The end of the time interval containing the time of the last accepted
   * observation, in ISO 8601 UTC datetime format with microsecond precision. For an
   * exact observation time, the lastObStart and lastObEnd are the same.
   */
  lastObEnd?: string;

  /**
   * The start of the time interval containing the time of the last accepted
   * observation, in ISO 8601 UTC datetime format with microsecond precision. For an
   * exact observation time, the lastObStart and lastObEnd are the same.
   */
  lastObStart?: string;

  /**
   * Source of orbit determination method used to produce this record (e.g. ASW,
   * ACTRAC, FreeFlyer, GEODYNE, GDTS, etc.).
   */
  methodSource?: string;

  /**
   * The number of iterations taken for the algorithm to converge on an OD solution.
   */
  numIterations?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by the OD source to indicate the target on-orbit
   * object of this OD solution. This may be an internal identifier and not
   * necessarily map to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * The Weighted Root Mean Squared (RMS) of the differential correction from the
   * previous overhead pass of the satellite. Provides a point of comparison for
   * assessing changes in the quality of the OD solution between consecutive passes.
   */
  previousWrms?: number;

  /**
   * Array of UDL data (observation) UUIDs that were rejected in this OD solution.
   * See the associated rejectedObTyps array for the specific types of observations
   * for the positionally corresponding UUIDs in this array (the two arrays must
   * match in size).
   */
  rejectedObIds?: Array<string>;

  /**
   * Array of UDL observation types (e.g. DOA, EO, RADAR, RF) of the observations
   * that were rejected in this OD solution. See the associated rejectedObIds array
   * for the records UUID(s), positionally corresponding to the record types in this
   * array. The rejectedObTyps and rejectedObIds arrays must match in size.
   */
  rejectedObTyps?: Array<string>;

  /**
   * OD parameter value for the Root Mean Square (RMS) convergence criteria to
   * successfully close the OD solution.
   */
  rmsConvergenceCriteria?: number;

  /**
   * Satellite/Catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Array of UDL UUIDs (idSensor) of the sensors that contributed observations in
   * this OD solution.
   */
  sensorIds?: Array<string>;

  /**
   * The time span used for the OD of the object, in days.
   */
  timeSpan?: number;

  /**
   * The Weighted Root Mean Squared (RMS) of the differential correction of the
   * target object that produced this OD state. WRMS is a quality indicator of the OD
   * update, with a value of 1.00 being optimal. WRMS applies to batch least squares
   * (BLS) processes.
   */
  wrms?: number;
}

export interface OrbitdeterminationListParams {
  /**
   * (One or more of fields 'idOnOrbit, startTime' are required.) Unique identifier
   * of the target satellite on-orbit object. This ID can be used to obtain
   * additional information on an OnOrbit object using the 'get by ID' operation
   * (e.g. /udl/onorbit/{id}). For example, the OnOrbit with idOnOrbit = 25544 would
   * be queried as /udl/onorbit/25544.
   */
  idOnOrbit?: string;

  /**
   * (One or more of fields 'idOnOrbit, startTime' are required.) Start time for OD
   * solution in ISO 8601 UTC datetime format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime?: string;
}

export interface OrbitdeterminationCountParams {
  /**
   * (One or more of fields 'idOnOrbit, startTime' are required.) Unique identifier
   * of the target satellite on-orbit object. This ID can be used to obtain
   * additional information on an OnOrbit object using the 'get by ID' operation
   * (e.g. /udl/onorbit/{id}). For example, the OnOrbit with idOnOrbit = 25544 would
   * be queried as /udl/onorbit/25544.
   */
  idOnOrbit?: string;

  /**
   * (One or more of fields 'idOnOrbit, startTime' are required.) Start time for OD
   * solution in ISO 8601 UTC datetime format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime?: string;
}

export type OrbitdeterminationCreateBulkParams = Array<OrbitdeterminationCreateBulkParams.Body>;

export namespace OrbitdeterminationCreateBulkParams {
  /**
   * Model representation of orbit determination algorithm results describing General
   * Perturbations or Special Perturbations orbital updates.
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
     * End time for OD solution in ISO 8601 UTC datetime format, with microsecond
     * precision.
     */
    endTime: string;

    /**
     * Flag indicating whether this is an initial orbit determination.
     */
    initialOD: boolean;

    /**
     * Orbit determination method used to produce this record (e.g. BLS, KF, UKF,
     * etc.).
     */
    method: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Start time for OD solution in ISO 8601 UTC datetime format, with microsecond
     * precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Array of UDL data (observation) UUIDs that were accepted in this OD solution.
     * See the associated acceptedObTyps array for the specific types of observations
     * for the positionally corresponding UUIDs in this array (the two arrays must
     * match in size).
     */
    acceptedObIds?: Array<string>;

    /**
     * Array of UDL observation types (e.g. DOA, EO, RADAR, RF) of the observations
     * that were accepted in this OD solution. See the associated acceptedObIds array
     * for the records UUID(s), positionally corresponding to the record types in this
     * array. The acceptedObTyps and acceptedObIds arrays must match in size.
     */
    acceptedObTyps?: Array<string>;

    /**
     * Flag indicating whether the AGOM was estimated during this OD solution.
     */
    agomEst?: boolean;

    /**
     * Model used to estimate the AGOM.
     */
    agomModel?: string;

    /**
     * An element set is a collection of Keplerian orbital elements describing an orbit
     * of a particular satellite. The data is used along with an orbit propagator in
     * order to predict the motion of a satellite. The element set, or elset for short,
     * consists of identification data, the classical elements and drag parameters.
     */
    aprioriElset?: ElsetsAPI.ElsetIngest;

    /**
     * Identifier of the element set used to seed this OD solution. This ID can be used
     * to obtain additional information on an Elset object using the 'get by ID'
     * operation (e.g. /udl/elset/{id}). For example, the Elset with idElset = abc
     * would be queried as /udl/elset/abc.
     */
    aprioriIdElset?: string;

    /**
     * Identifier of the state vector used to seed this OD solution. This ID can be
     * used to obtain additional information on a StateVector object using the 'get by
     * ID' operation (e.g. /udl/statevector/{id}). For example, the StateVector with
     * idStateVector = abc would be queried as /udl/statevector/abc.
     */
    aprioriIdStateVector?: string;

    /**
     * This service provides operations for querying and manipulation of state vectors
     * for OnOrbit objects. State vectors are cartesian vectors of position (r) and
     * velocity (v) that, together with their time (epoch) (t), uniquely determine the
     * trajectory of the orbiting body in space. J2000 is the preferred coordinate
     * frame for all state vector positions/velocities in UDL, but in some cases data
     * may be in another frame depending on the provider and/or datatype. Please see
     * the 'Discover' tab in the storefront to confirm coordinate frames by data
     * provider.
     */
    aprioriStateVector?: StatevectorAPI.StateVectorIngest;

    /**
     * Flag indicating whether the ballistic coefficient was estimated during this OD
     * solution.
     */
    ballisticCoeffEst?: boolean;

    /**
     * Model used to estimate the ballistic coefficient.
     */
    ballisticCoeffModel?: string;

    /**
     * Lowest Weighted Root Mean Squared (RMS) value achieved for any single satellite
     * pass during the observation span, indicating the pass with the highest quality
     * OD solution.
     */
    bestPassWrms?: number;

    /**
     * Model parameter value for energy dissipation rate (EDR) in watts per kilogram.
     */
    edr?: number;

    /**
     * Optional start time at which this OD solution is accurate, in ISO 8601 UTC
     * datetime format with microsecond precision.
     */
    effectiveFrom?: string;

    /**
     * Optional end time at which this OD solution may no longer be accurate, in ISO
     * 8601 UTC datetime format with microsecond precision.
     */
    effectiveUntil?: string;

    /**
     * Error growth rate of the OD solution in kilometers per day.
     */
    errorGrowthRate?: number;

    /**
     * The Weighted Root Mean Squared (RMS) calculated for the first satellite pass in
     * the observation span. Serves as the initial quality metric for the beginning of
     * the observation period.
     */
    firstPassWrms?: number;

    /**
     * The fit span, in days, used in a Batch Least Squares (BLS) OD.
     */
    fitSpan?: number;

    /**
     * The end of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC datetime format with microsecond precision. For an
     * exact observation time, the lastObStart and lastObEnd are the same.
     */
    lastObEnd?: string;

    /**
     * The start of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC datetime format with microsecond precision. For an
     * exact observation time, the lastObStart and lastObEnd are the same.
     */
    lastObStart?: string;

    /**
     * Source of orbit determination method used to produce this record (e.g. ASW,
     * ACTRAC, FreeFlyer, GEODYNE, GDTS, etc.).
     */
    methodSource?: string;

    /**
     * The number of iterations taken for the algorithm to converge on an OD solution.
     */
    numIterations?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the OD source to indicate the target on-orbit
     * object of this OD solution. This may be an internal identifier and not
     * necessarily map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * The Weighted Root Mean Squared (RMS) of the differential correction from the
     * previous overhead pass of the satellite. Provides a point of comparison for
     * assessing changes in the quality of the OD solution between consecutive passes.
     */
    previousWrms?: number;

    /**
     * Array of UDL data (observation) UUIDs that were rejected in this OD solution.
     * See the associated rejectedObTyps array for the specific types of observations
     * for the positionally corresponding UUIDs in this array (the two arrays must
     * match in size).
     */
    rejectedObIds?: Array<string>;

    /**
     * Array of UDL observation types (e.g. DOA, EO, RADAR, RF) of the observations
     * that were rejected in this OD solution. See the associated rejectedObIds array
     * for the records UUID(s), positionally corresponding to the record types in this
     * array. The rejectedObTyps and rejectedObIds arrays must match in size.
     */
    rejectedObTyps?: Array<string>;

    /**
     * OD parameter value for the Root Mean Square (RMS) convergence criteria to
     * successfully close the OD solution.
     */
    rmsConvergenceCriteria?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Array of UDL UUIDs (idSensor) of the sensors that contributed observations in
     * this OD solution.
     */
    sensorIds?: Array<string>;

    /**
     * The time span used for the OD of the object, in days.
     */
    timeSpan?: number;

    /**
     * The Weighted Root Mean Squared (RMS) of the differential correction of the
     * target object that produced this OD state. WRMS is a quality indicator of the OD
     * update, with a value of 1.00 being optimal. WRMS applies to batch least squares
     * (BLS) processes.
     */
    wrms?: number;
  }
}

export type OrbitdeterminationCreateBulkV2Params = Array<OrbitdeterminationCreateBulkV2Params.Body>;

export namespace OrbitdeterminationCreateBulkV2Params {
  /**
   * Model representation of orbit determination algorithm results describing General
   * Perturbations or Special Perturbations orbital updates.
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
     * End time for OD solution in ISO 8601 UTC datetime format, with microsecond
     * precision.
     */
    endTime: string;

    /**
     * Flag indicating whether this is an initial orbit determination.
     */
    initialOD: boolean;

    /**
     * Orbit determination method used to produce this record (e.g. BLS, KF, UKF,
     * etc.).
     */
    method: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Start time for OD solution in ISO 8601 UTC datetime format, with microsecond
     * precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Array of UDL data (observation) UUIDs that were accepted in this OD solution.
     * See the associated acceptedObTyps array for the specific types of observations
     * for the positionally corresponding UUIDs in this array (the two arrays must
     * match in size).
     */
    acceptedObIds?: Array<string>;

    /**
     * Array of UDL observation types (e.g. DOA, EO, RADAR, RF) of the observations
     * that were accepted in this OD solution. See the associated acceptedObIds array
     * for the records UUID(s), positionally corresponding to the record types in this
     * array. The acceptedObTyps and acceptedObIds arrays must match in size.
     */
    acceptedObTyps?: Array<string>;

    /**
     * Flag indicating whether the AGOM was estimated during this OD solution.
     */
    agomEst?: boolean;

    /**
     * Model used to estimate the AGOM.
     */
    agomModel?: string;

    /**
     * An element set is a collection of Keplerian orbital elements describing an orbit
     * of a particular satellite. The data is used along with an orbit propagator in
     * order to predict the motion of a satellite. The element set, or elset for short,
     * consists of identification data, the classical elements and drag parameters.
     */
    aprioriElset?: ElsetsAPI.ElsetIngest;

    /**
     * Identifier of the element set used to seed this OD solution. This ID can be used
     * to obtain additional information on an Elset object using the 'get by ID'
     * operation (e.g. /udl/elset/{id}). For example, the Elset with idElset = abc
     * would be queried as /udl/elset/abc.
     */
    aprioriIdElset?: string;

    /**
     * Identifier of the state vector used to seed this OD solution. This ID can be
     * used to obtain additional information on a StateVector object using the 'get by
     * ID' operation (e.g. /udl/statevector/{id}). For example, the StateVector with
     * idStateVector = abc would be queried as /udl/statevector/abc.
     */
    aprioriIdStateVector?: string;

    /**
     * This service provides operations for querying and manipulation of state vectors
     * for OnOrbit objects. State vectors are cartesian vectors of position (r) and
     * velocity (v) that, together with their time (epoch) (t), uniquely determine the
     * trajectory of the orbiting body in space. J2000 is the preferred coordinate
     * frame for all state vector positions/velocities in UDL, but in some cases data
     * may be in another frame depending on the provider and/or datatype. Please see
     * the 'Discover' tab in the storefront to confirm coordinate frames by data
     * provider.
     */
    aprioriStateVector?: StatevectorAPI.StateVectorIngest;

    /**
     * Flag indicating whether the ballistic coefficient was estimated during this OD
     * solution.
     */
    ballisticCoeffEst?: boolean;

    /**
     * Model used to estimate the ballistic coefficient.
     */
    ballisticCoeffModel?: string;

    /**
     * Lowest Weighted Root Mean Squared (RMS) value achieved for any single satellite
     * pass during the observation span, indicating the pass with the highest quality
     * OD solution.
     */
    bestPassWrms?: number;

    /**
     * Model parameter value for energy dissipation rate (EDR) in watts per kilogram.
     */
    edr?: number;

    /**
     * Optional start time at which this OD solution is accurate, in ISO 8601 UTC
     * datetime format with microsecond precision.
     */
    effectiveFrom?: string;

    /**
     * Optional end time at which this OD solution may no longer be accurate, in ISO
     * 8601 UTC datetime format with microsecond precision.
     */
    effectiveUntil?: string;

    /**
     * Error growth rate of the OD solution in kilometers per day.
     */
    errorGrowthRate?: number;

    /**
     * The Weighted Root Mean Squared (RMS) calculated for the first satellite pass in
     * the observation span. Serves as the initial quality metric for the beginning of
     * the observation period.
     */
    firstPassWrms?: number;

    /**
     * The fit span, in days, used in a Batch Least Squares (BLS) OD.
     */
    fitSpan?: number;

    /**
     * The end of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC datetime format with microsecond precision. For an
     * exact observation time, the lastObStart and lastObEnd are the same.
     */
    lastObEnd?: string;

    /**
     * The start of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC datetime format with microsecond precision. For an
     * exact observation time, the lastObStart and lastObEnd are the same.
     */
    lastObStart?: string;

    /**
     * Source of orbit determination method used to produce this record (e.g. ASW,
     * ACTRAC, FreeFlyer, GEODYNE, GDTS, etc.).
     */
    methodSource?: string;

    /**
     * The number of iterations taken for the algorithm to converge on an OD solution.
     */
    numIterations?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the OD source to indicate the target on-orbit
     * object of this OD solution. This may be an internal identifier and not
     * necessarily map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * The Weighted Root Mean Squared (RMS) of the differential correction from the
     * previous overhead pass of the satellite. Provides a point of comparison for
     * assessing changes in the quality of the OD solution between consecutive passes.
     */
    previousWrms?: number;

    /**
     * Array of UDL data (observation) UUIDs that were rejected in this OD solution.
     * See the associated rejectedObTyps array for the specific types of observations
     * for the positionally corresponding UUIDs in this array (the two arrays must
     * match in size).
     */
    rejectedObIds?: Array<string>;

    /**
     * Array of UDL observation types (e.g. DOA, EO, RADAR, RF) of the observations
     * that were rejected in this OD solution. See the associated rejectedObIds array
     * for the records UUID(s), positionally corresponding to the record types in this
     * array. The rejectedObTyps and rejectedObIds arrays must match in size.
     */
    rejectedObTyps?: Array<string>;

    /**
     * OD parameter value for the Root Mean Square (RMS) convergence criteria to
     * successfully close the OD solution.
     */
    rmsConvergenceCriteria?: number;

    /**
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * Array of UDL UUIDs (idSensor) of the sensors that contributed observations in
     * this OD solution.
     */
    sensorIds?: Array<string>;

    /**
     * The time span used for the OD of the object, in days.
     */
    timeSpan?: number;

    /**
     * The Weighted Root Mean Squared (RMS) of the differential correction of the
     * target object that produced this OD state. WRMS is a quality indicator of the OD
     * update, with a value of 1.00 being optimal. WRMS applies to batch least squares
     * (BLS) processes.
     */
    wrms?: number;
  }
}

export interface OrbitdeterminationTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * (One or more of fields 'idOnOrbit, startTime' are required.) Unique identifier
   * of the target satellite on-orbit object. This ID can be used to obtain
   * additional information on an OnOrbit object using the 'get by ID' operation
   * (e.g. /udl/onorbit/{id}). For example, the OnOrbit with idOnOrbit = 25544 would
   * be queried as /udl/onorbit/25544.
   */
  idOnOrbit?: string;

  /**
   * (One or more of fields 'idOnOrbit, startTime' are required.) Start time for OD
   * solution in ISO 8601 UTC datetime format, with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime?: string;
}

Orbitdetermination.History = History;

export declare namespace Orbitdetermination {
  export {
    type OrbitdeterminationListResponse as OrbitdeterminationListResponse,
    type OrbitdeterminationCountResponse as OrbitdeterminationCountResponse,
    type OrbitdeterminationTupleResponse as OrbitdeterminationTupleResponse,
    type OrbitdeterminationCreateParams as OrbitdeterminationCreateParams,
    type OrbitdeterminationListParams as OrbitdeterminationListParams,
    type OrbitdeterminationCountParams as OrbitdeterminationCountParams,
    type OrbitdeterminationCreateBulkParams as OrbitdeterminationCreateBulkParams,
    type OrbitdeterminationCreateBulkV2Params as OrbitdeterminationCreateBulkV2Params,
    type OrbitdeterminationTupleParams as OrbitdeterminationTupleParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
