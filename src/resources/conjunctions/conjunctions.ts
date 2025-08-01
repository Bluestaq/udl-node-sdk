// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import { History, HistoryAodrParams, HistoryCountParams, HistoryCountResponse } from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Conjunctions extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to get a single conjunction by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const conjunctionFull = await client.conjunctions.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: ConjunctionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.ConjunctionFull> {
    return this._client.get(path`/udl/conjunction/${id}`, { query, ...options });
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
   * for await (const conjunctionAbridged of client.conjunctions.list(
   *   { tca: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ConjunctionListParams,
    options?: RequestOptions,
  ): PagePromise<ConjunctionAbridgedsOffsetPage, ConjunctionAbridged> {
    return this._client.getAPIList('/udl/conjunction', OffsetPage<ConjunctionAbridged>, {
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
   * const response = await client.conjunctions.count({
   *   tca: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: ConjunctionCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/conjunction/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to take a single Conjunction as a POST body and ingest into
   * the database. A Conjunction is analysis of probability of collision; the data
   * can include state vectors for primary and secondary satellites. A specific role
   * is required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.conjunctions.createUdl({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   source: 'Bluestaq',
   *   tca: '2021-01-01T01:01:01.123456Z',
   * });
   * ```
   */
  createUdl(params: ConjunctionCreateUdlParams, options?: RequestOptions): APIPromise<void> {
    const { convertPosVel, ...body } = params;
    return this._client.post('/udl/conjunction', {
      query: { convertPosVel },
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * Conjunctions as a POST body and ingest into the database. A Conjunction is
   * analysis of probability of collision; the data can include state vectors for
   * primary and secondary satellites. This operation is not intended to be used for
   * automated feeds into UDL. Data providers should contact the UDL team for
   * specific role assignments and for instructions on setting up a permanent feed
   * through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.conjunctions.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       source: 'Bluestaq',
   *       tca: '2021-01-01T01:01:01.123456Z',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: ConjunctionCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/conjunction/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   *
   * @example
   * ```ts
   * const conjunctionFulls =
   *   await client.conjunctions.getHistory({
   *     tca: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  getHistory(
    query: ConjunctionGetHistoryParams,
    options?: RequestOptions,
  ): APIPromise<ConjunctionGetHistoryResponse> {
    return this._client.get('/udl/conjunction/history', { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.conjunctions.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<ConjunctionQueryhelpResponse> {
    return this._client.get('/udl/conjunction/queryhelp', options);
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
   * const conjunctionFulls = await client.conjunctions.tuple({
   *   columns: 'columns',
   *   tca: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: ConjunctionTupleParams, options?: RequestOptions): APIPromise<ConjunctionTupleResponse> {
    return this._client.get('/udl/conjunction/tuple', { query, ...options });
  }

  /**
   * Service operation to take a list of Conjunctions as a POST body and ingest into
   * the database. A Conjunction is analysis of probability of collision; the data
   * can include state vectors for primary and secondary satellites. This operation
   * is intended to be used for automated feeds into UDL. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.conjunctions.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       source: 'Bluestaq',
   *       tca: '2021-01-01T01:01:01.123456Z',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(
    params: ConjunctionUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-conjunction', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service to accept multiple CDMs in as zip file or a single CDM as payload. The
   * service converts key-value pair formatted CDMs to UDL formats and stores them.
   * The CDM format is as described in https://ccsds.org document CCSDS 508.0-B-1. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * **Example:**
   * /filedrop/cdms?filename=conj.zip&classification=U&dataMode=TEST&source=Bluestaq&tags=tag1,tag2
   *
   * @example
   * ```ts
   * await client.conjunctions.uploadConjunctionDataMessage(
   *   fs.createReadStream('path/to/file'),
   *   {
   *     classification: 'classification',
   *     dataMode: 'REAL',
   *     filename: 'filename',
   *     source: 'source',
   *   },
   * );
   * ```
   */
  uploadConjunctionDataMessage(aprams: Uploadable, options?: RequestOptions): APIPromise<void> {
    const { classification, dataMode, filename, source, tags } = params;
    return this._client.post('/filedrop/cdms', {
      body: aprams,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/zip', Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ConjunctionAbridgedsOffsetPage = OffsetPage<ConjunctionAbridged>;

/**
 * Stores the results of a particular Conjunction Assessment (CA) run.
 */
export interface ConjunctionAbridged {
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
   * Source of the data.
   */
  source: string;

  /**
   * Time of closest approach (TCA) in UTC.
   */
  tca: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Commander's critical information requirements notes.
   */
  ccir?: string;

  /**
   * The value of the primary (object1) Area times the drag coefficient over the
   * object Mass, expressed in m^2/kg, used for propagation of the primary state
   * vector and covariance to TCA.
   */
  cdAoM1?: number;

  /**
   * The value of the secondary (object2) Area times the drag coefficient over the
   * object Mass, expressed in m^2/kg, used for propagation of the primary state
   * vector and covariance to TCA.
   */
  cdAoM2?: number;

  /**
   * Probability of Collision is the probability (denoted p, where 0.0<=p<=1.0), that
   * Object1 and Object2 will collide.
   */
  collisionProb?: number;

  /**
   * The method that was used to calculate the collision probability, ex.
   * FOSTER-1992.
   */
  collisionProbMethod?: string;

  /**
   * Additional notes from data providers.
   */
  comments?: string;

  /**
   * Emergency comments.
   */
  concernNotes?: string;

  /**
   * The value of the primary (object1) Area times the solar radiation pressure
   * coefficient over the object Mass, expressed in m^2/kg, used for propagation of
   * the primary state vector and covariance to TCA. This parameter is sometimes
   * referred to as AGOM.
   */
  crAoM1?: number;

  /**
   * The value of the secondary (object2) Area times the solar radiation pressure
   * coefficient over the object Mass, expressed in m^2/kg, used for propagation of
   * the primary state vector and covariance to TCA. This parameter is sometimes
   * referred to as AGOM.
   */
  crAoM2?: number;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * The filename of the primary (object1) ephemeris used in the screening, if
   * applicable.
   */
  ephemName1?: string;

  /**
   * The filename of the secondary (object2) ephemeris used in the screening, if
   * applicable.
   */
  ephemName2?: string;

  /**
   * Unique identifier of the parent Ephemeris Set of the primary (object1) ephemeris
   * used in the screening, if applicable.
   */
  esId1?: string;

  /**
   * Unique identifier of the parent Ephemeris Set of the secondary (object2)
   * ephemeris used in the screening, if applicable.
   */
  esId2?: string;

  /**
   * Optional source-provided identifier for this conjunction event. In the case
   * where multiple conjunction records are submitted for the same event, this field
   * can be used to tie them together to the same event.
   */
  eventId?: string;

  /**
   * Unique identifier of the primary satellite on-orbit object, if correlated.
   */
  idOnOrbit1?: string;

  /**
   * Unique identifier of the secondary satellite on-orbit object, if correlated.
   */
  idOnOrbit2?: string;

  /**
   * Optional ID of the UDL State Vector at TCA of the primary object. When
   * performing a create, this id will be ignored in favor of the UDL generated id of
   * the stateVector1.
   */
  idStateVector1?: string;

  /**
   * Optional ID of the UDL State Vector at TCA of the secondary object. When
   * performing a create, this id will be ignored in favor of the UDL generated id of
   * the stateVector2.
   */
  idStateVector2?: string;

  /**
   * Used for probability of collision calculation, not Warning/Alert Threshold
   * notifications.
   */
  largeCovWarning?: boolean;

  /**
   * Used for probability of collision calculation, not Warning/Alert Threshold
   * notifications.
   */
  largeRelPosWarning?: boolean;

  /**
   * Time of last positive metric observation of the primary satellite.
   */
  lastObTime1?: string;

  /**
   * Time of last positive metric observation of the secondary satellite.
   */
  lastObTime2?: string;

  /**
   * Spacecraft name(s) for which the Collision message is provided.
   */
  messageFor?: string;

  /**
   * JMS provided message ID link.
   */
  messageId?: string;

  /**
   * Distance between objects at Time of Closest Approach (TCA) in meters.
   */
  missDistance?: number;

  /**
   * Optional place holder for an OnOrbit ID that does not exist in UDL.
   */
  origIdOnOrbit1?: string;

  /**
   * Optional place holder for an OnOrbit ID that does not exist in UDL.
   */
  origIdOnOrbit2?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Creating agency or owner/operator (may be different than provider who submitted
   * the conjunction message).
   */
  originator?: string;

  /**
   * The originating source network on which this record was created, auto-populated
   * by the system.
   */
  origNetwork?: string;

  /**
   * Flag indicating if owner was contacted.
   */
  ownerContacted?: boolean;

  /**
   * Penetration Level Sigma.
   */
  penetrationLevelSigma?: number;

  /**
   * Link to filename associated with JMS record.
   */
  rawFileURI?: string;

  /**
   * Distance between objects along Normal vector in meters.
   */
  relPosN?: number;

  /**
   * Distance between objects along Radial Vector at Time of Closest Approach in
   * meters.
   */
  relPosR?: number;

  /**
   * Distance between objects along Tangential Vector in meters.
   */
  relPosT?: number;

  /**
   * Closing velocity magnitude (relative speed) at Time of Closest Approach in
   * meters/sec.
   */
  relVelMag?: number;

  /**
   * Closing velocity between objects along Normal Vector in meters/sec.
   */
  relVelN?: number;

  /**
   * Closing velocity between objects along Radial Vector at Time of Closest Approach
   * in meters/sec.
   */
  relVelR?: number;

  /**
   * Closing velocity between objects along Tangential Vector in meters/sec.
   */
  relVelT?: number;

  /**
   * Satellite/catalog number of the target on-orbit primary object.
   */
  satNo1?: number;

  /**
   * Satellite/catalog number of the target on-orbit secondary object.
   */
  satNo2?: number;

  /**
   * The start time in UTC of the screening period for the conjunction assessment.
   */
  screenEntryTime?: string;

  /**
   * The stop time in UTC of the screening period for the conjunction assessment.
   */
  screenExitTime?: string;

  /**
   * Component size of screen in X component of RTN (Radial, Transverse and Normal)
   * frame in meters.
   */
  screenVolumeX?: number;

  /**
   * Component size of screen in Y component of RTN (Radial, Transverse and Normal)
   * frame in meters.
   */
  screenVolumeY?: number;

  /**
   * Component size of screen in Z component of RTN (Radial, Transverse and Normal)
   * frame in meters.
   */
  screenVolumeZ?: number;

  /**
   * Used for probability of collision calculation, not Warning/Alert Threshold
   * notifications.
   */
  smallCovWarning?: boolean;

  /**
   * Used for probability of collision calculation, not Warning/Alert Threshold
   * notifications.
   */
  smallRelVelWarning?: boolean;

  /**
   * Flag indicating if State department was notified.
   */
  stateDeptNotified?: boolean;

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
  stateVector1?: ConjunctionAbridged.StateVector1;

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
  stateVector2?: ConjunctionAbridged.StateVector2;

  /**
   * The primary (object1) acceleration, expressed in m/s^2, due to in-track thrust
   * used to propagate the primary state vector and covariance to TCA.
   */
  thrustAccel1?: number;

  /**
   * The secondary (object2) acceleration, expressed in m/s^2, due to in-track thrust
   * used to propagate the primary state vector and covariance to TCA.
   */
  thrustAccel2?: number;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * The type of data represented in this conjunction record (e.g. CONJUNCTION,
   * CARA-WORKLIST, etc.). If type is null the record is assumed to be a Conjunction.
   */
  type?: string;

  /**
   * Used for probability of collision calculation, not Warning/Alert Threshold
   * notifications.
   */
  uvwWarn?: boolean;

  /**
   * The time at which the secondary (object2) enters the screening volume, in ISO
   * 8601 UTC format with microsecond precision.
   */
  volEntryTime?: string;

  /**
   * The time at which the secondary (object2) exits the screening volume, in ISO
   * 8601 UTC format with microsecond precision.
   */
  volExitTime?: string;

  /**
   * The shape (BOX, ELLIPSOID) of the screening volume.
   */
  volShape?: string;
}

export namespace ConjunctionAbridged {
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
  export interface StateVector1 {
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
     * Time of validity for state vector in ISO 8601 UTC datetime format, with
     * microsecond precision.
     */
    epoch: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The actual time span used for the OD of the object, expressed in days.
     */
    actualODSpan?: number;

    /**
     * Optional algorithm used to produce this record.
     */
    algorithm?: string;

    /**
     * The reference frame of the alternate1 (Alt1) cartesian orbital state.
     */
    alt1ReferenceFrame?: string;

    /**
     * The reference frame of the alternate2 (Alt2) cartesian orbital state.
     */
    alt2ReferenceFrame?: string;

    /**
     * The actual area of the object at it's largest cross-section, expressed in
     * meters^2.
     */
    area?: number;

    /**
     * First derivative of drag/ballistic coefficient (m2/kg-s).
     */
    bDot?: number;

    /**
     * Model parameter value for center of mass offset (m).
     */
    cmOffset?: number;

    /**
     * Covariance matrix, in kilometer and second based units, in the specified
     * covReferenceFrame. If the covReferenceFrame is null it is assumed to be J2000.
     * The array values (1-21) represent the lower triangular half of the
     * position-velocity covariance matrix. The size of the covariance matrix is
     * dynamic, depending on whether the covariance for position only or position &
     * velocity. The covariance elements are position dependent within the array with
     * values ordered as follows:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR&nbsp;&nbsp;
     *
     * x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
     *
     * y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3
     *
     * z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;6
     *
     * x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;&nbsp;10
     *
     * y'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11&nbsp;&nbsp;12&nbsp;&nbsp;13&nbsp;&nbsp;14&nbsp;&nbsp;15
     *
     * z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;17&nbsp;&nbsp;18&nbsp;&nbsp;19&nbsp;&nbsp;20&nbsp;&nbsp;&nbsp;21&nbsp;
     *
     * The cov array should contain only the lower left triangle values from top left
     * down to bottom right, in order.
     *
     * If additional covariance terms are included for DRAG, SRP, and/or THRUST, the
     * matrix can be extended with the following order of elements:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR
     *
     * DRG&nbsp;&nbsp;&nbsp;22&nbsp;&nbsp;23&nbsp;&nbsp;24&nbsp;&nbsp;25&nbsp;&nbsp;26&nbsp;&nbsp;&nbsp;27&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28&nbsp;&nbsp;
     *
     * SRP&nbsp;&nbsp;&nbsp;29&nbsp;&nbsp;30&nbsp;&nbsp;31&nbsp;&nbsp;32&nbsp;&nbsp;33&nbsp;&nbsp;&nbsp;34&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36&nbsp;&nbsp;
     *
     * THR&nbsp;&nbsp;&nbsp;37&nbsp;&nbsp;38&nbsp;&nbsp;39&nbsp;&nbsp;40&nbsp;&nbsp;41&nbsp;&nbsp;&nbsp;42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45&nbsp;
     */
    cov?: Array<number>;

    /**
     * The method used to generate the covariance during the orbit determination (OD)
     * that produced the state vector, or whether an arbitrary, non-calculated default
     * value was used (CALCULATED, DEFAULT).
     */
    covMethod?: string;

    /**
     * The reference frame of the covariance matrix elements. If the covReferenceFrame
     * is null it is assumed to be J2000.
     */
    covReferenceFrame?: 'J2000' | 'UVW' | 'EFG/TDR' | 'TEME' | 'GCRF';

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
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * The effective area of the object exposed to atmospheric drag, expressed in
     * meters^2.
     */
    dragArea?: number;

    /**
     * Area-to-mass ratio coefficient for atmospheric ballistic drag (m2/kg).
     */
    dragCoeff?: number;

    /**
     * The Drag Model used for this vector (e.g. HARRIS-PRIESTER, JAC70, JBH09, MSIS90,
     * NONE, etc.).
     */
    dragModel?: string;

    /**
     * Model parameter value for energy dissipation rate (EDR) (w/kg).
     */
    edr?: number;

    /**
     * The covariance matrix values represent the lower triangular half of the
     * covariance matrix in terms of equinoctial elements.&nbsp; The size of the
     * covariance matrix is dynamic.&nbsp; The values are outputted in order across
     * each row, i.e.:
     *
     * 1&nbsp;&nbsp; 2&nbsp;&nbsp; 3&nbsp;&nbsp; 4&nbsp;&nbsp; 5
     *
     * 6&nbsp;&nbsp; 7&nbsp;&nbsp; 8&nbsp;&nbsp; 9&nbsp; 10
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * 51&nbsp; 52&nbsp; 53&nbsp; 54&nbsp; 55
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * The ordering of values is as follows:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Af&nbsp;&nbsp;
     * Ag&nbsp;&nbsp; L&nbsp;&nbsp;&nbsp; N&nbsp;&nbsp; Chi&nbsp; Psi&nbsp;&nbsp;
     * B&nbsp;&nbsp; BDOT AGOM&nbsp; T&nbsp;&nbsp; C1&nbsp;&nbsp; C2&nbsp; ...
     *
     * Af&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1
     *
     * Ag&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp; 3
     *
     * L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     * 4&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp;&nbsp; 6
     *
     * N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     * 7&nbsp;&nbsp;&nbsp; 8&nbsp;&nbsp;&nbsp; 9&nbsp;&nbsp; 10
     *
     * Chi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11&nbsp;&nbsp; 12&nbsp;&nbsp;
     * 13&nbsp;&nbsp; 14&nbsp;&nbsp; 15
     *
     * Psi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16&nbsp;&nbsp; 17&nbsp;&nbsp;
     * 18&nbsp;&nbsp; 19&nbsp;&nbsp; 20&nbsp;&nbsp; 21
     *
     * B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22&nbsp;&nbsp;
     * 23&nbsp;&nbsp; 24 &nbsp;&nbsp;25&nbsp;&nbsp; 26&nbsp;&nbsp; 27&nbsp;&nbsp; 28
     *
     * BDOT&nbsp;&nbsp; 29&nbsp;&nbsp; 30&nbsp;&nbsp; 31&nbsp;&nbsp; 32&nbsp;&nbsp;
     * 33&nbsp;&nbsp; 34&nbsp;&nbsp; 35&nbsp;&nbsp; 36
     *
     * AGOM&nbsp; 37&nbsp;&nbsp; 38&nbsp;&nbsp; 39&nbsp;&nbsp; 40&nbsp;&nbsp;
     * 41&nbsp;&nbsp; 42&nbsp;&nbsp; 43&nbsp;&nbsp; 44&nbsp;&nbsp; 45
     *
     * T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 46&nbsp;&nbsp;
     * 47&nbsp;&nbsp; 48&nbsp;&nbsp; 49&nbsp;&nbsp; 50&nbsp;&nbsp; 51&nbsp;&nbsp;
     * 52&nbsp;&nbsp; 53&nbsp;&nbsp; 54&nbsp;&nbsp; 55
     *
     * C1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 56&nbsp;&nbsp; 57&nbsp;&nbsp;
     * 58&nbsp;&nbsp; 59&nbsp;&nbsp; 60&nbsp;&nbsp; 61&nbsp;&nbsp; 62&nbsp;&nbsp;
     * 63&nbsp;&nbsp; 64&nbsp;&nbsp; 65&nbsp;&nbsp; 66
     *
     * C2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 67&nbsp;&nbsp; 68&nbsp;&nbsp;
     * 69&nbsp;&nbsp; 70&nbsp;&nbsp; 71&nbsp; &nbsp;72&nbsp;&nbsp; 73&nbsp;&nbsp;
     * 74&nbsp;&nbsp; 75&nbsp;&nbsp; 76&nbsp;&nbsp; 77&nbsp;&nbsp; 78
     *
     * :
     *
     * :
     *
     * where C1, C2, etc, are the "consider parameters" that may be added to the
     * covariance matrix.&nbsp; The covariance matrix will be as large as the last
     * element/model parameter needed.&nbsp; In other words, if the DC solved for all 6
     * elements plus AGOM, the covariance matrix will be 9x9 (and the rows for B and
     * BDOT will be all zeros).&nbsp; If the covariance matrix is unavailable, the size
     * will be set to 0x0, and no data will follow.&nbsp; The cov field should contain
     * only the lower left triangle values from top left down to bottom right, in
     * order.
     */
    eqCov?: Array<number>;

    /**
     * Integrator error control.
     */
    errorControl?: number;

    /**
     * Boolean indicating use of fixed step size for this vector.
     */
    fixedStep?: boolean;

    /**
     * Geopotential model used for this vector (e.g. EGM-96, WGS-84, WGS-72, JGM-2, or
     * GEM-T3), including mm degree zonals, nn degree/order tesserals. E.g. EGM-96
     * 24Z,24T.
     */
    geopotentialModel?: string;

    /**
     * Number of terms used in the IAU 1980 nutation model (4, 50, or 106).
     */
    iau1980Terms?: number;

    /**
     * Unique identifier of the satellite on-orbit object, if correlated. For the
     * public catalog, the idOnOrbit is typically the satellite number as a string, but
     * may be a UUID for analyst or other unknown or untracked satellites.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the OD solution record that produced this state vector.
     * This ID can be used to obtain additional information on an OrbitDetermination
     * object using the 'get by ID' operation (e.g. /udl/orbitdetermination/{id}). For
     * example, the OrbitDetermination with idOrbitDetermination = abc would be queries
     * as /udl/orbitdetermination/abc.
     */
    idOrbitDetermination?: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    idStateVector?: string;

    /**
     * Integrator Mode.
     */
    integratorMode?: string;

    /**
     * Boolean indicating use of in-track thrust perturbations for this vector.
     */
    inTrackThrust?: boolean;

    /**
     * The end of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC format with microsecond precision. For an exact
     * observation time, the firstObTime and lastObTime are the same.
     */
    lastObEnd?: string;

    /**
     * The start of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC format with microsecond precision. For an exact
     * observation time, the firstObTime and lastObTime are the same.
     */
    lastObStart?: string;

    /**
     * Time of the next leap second after epoch in ISO 8601 UTC time. If the next leap
     * second is not known, the time of the previous leap second is used.
     */
    leapSecondTime?: string;

    /**
     * Boolean indicating use of lunar/solar perturbations for this vector.
     */
    lunarSolar?: boolean;

    /**
     * The mass of the object, in kilograms.
     */
    mass?: number;

    /**
     * The number of observations available for the OD of the object.
     */
    obsAvailable?: number;

    /**
     * The number of observations accepted for the OD of the object.
     */
    obsUsed?: number;

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
     * Optional identifier provided by state vector source to indicate the target
     * onorbit object of this state vector. This may be an internal identifier and not
     * necessarily map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Type of partial derivatives used (ANALYTIC, FULL NUM, or FAST NUM).
     */
    partials?: string;

    /**
     * The pedigree of state vector, or methods used for its generation to include
     * state update/orbit determination, propagation from another state, or a state
     * from a calibration satellite (e.g. ORBIT_UPDATE, PROPAGATION, CALIBRATION,
     * CONJUNCTION, FLIGHT_PLAN).
     */
    pedigree?: string;

    /**
     * Polar Wander Motion X (arc seconds).
     */
    polarMotionX?: number;

    /**
     * Polar Wander Motion Y (arc seconds).
     */
    polarMotionY?: number;

    /**
     * One sigma position uncertainty, in kilometers.
     */
    posUnc?: number;

    /**
     * The recommended OD time span calculated for the object, expressed in days.
     */
    recODSpan?: number;

    /**
     * The reference frame of the cartesian orbital states. If the referenceFrame is
     * null it is assumed to be J2000.
     */
    referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * The percentage of residuals accepted in the OD of the object.
     */
    residualsAcc?: number;

    /**
     * Epoch revolution number.
     */
    revNo?: number;

    /**
     * The Weighted Root Mean Squared (RMS) of the differential correction on the
     * target object that produced this vector. WRMS is a quality indicator of the
     * state vector update, with a value of 1.00 being optimal. WRMS applies to Batch
     * Least Squares (BLS) processes.
     */
    rms?: number;

    /**
     * Satellite/Catalog number of the target OnOrbit object.
     */
    satNo?: number;

    /**
     * Array containing the standard deviation of error in target object position, U, V
     * and W direction respectively (km).
     */
    sigmaPosUVW?: Array<number>;

    /**
     * Array containing the standard deviation of error in target object velocity, U, V
     * and W direction respectively (km/sec).
     */
    sigmaVelUVW?: Array<number>;

    /**
     * Average solar flux geomagnetic index.
     */
    solarFluxAPAvg?: number;

    /**
     * F10 (10.7 cm) solar flux value.
     */
    solarFluxF10?: number;

    /**
     * F10 (10.7 cm) solar flux 81-day average value.
     */
    solarFluxF10Avg?: number;

    /**
     * Boolean indicating use of solar radiation pressure perturbations for this
     * vector.
     */
    solarRadPress?: boolean;

    /**
     * Area-to-mass ratio coefficient for solar radiation pressure.
     */
    solarRadPressCoeff?: number;

    /**
     * Boolean indicating use of solid earth tide perturbations for this vector.
     */
    solidEarthTides?: boolean;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * The effective area of the object exposed to solar radiation pressure, expressed
     * in meters^2.
     */
    srpArea?: number;

    /**
     * Integrator step mode (AUTO, TIME, or S).
     */
    stepMode?: string;

    /**
     * Initial integration step size (seconds).
     */
    stepSize?: number;

    /**
     * Initial step size selection (AUTO or MANUAL).
     */
    stepSizeSelection?: string;

    /**
     * TAI (Temps Atomique International) minus UTC (Universal Time Coordinates) offset
     * in seconds.
     */
    taiUtc?: number;

    /**
     * Model parameter value for thrust acceleration (m/s2).
     */
    thrustAccel?: number;

    /**
     * The number of sensor tracks available for the OD of the object.
     */
    tracksAvail?: number;

    /**
     * The number of sensor tracks accepted for the OD of the object.
     */
    tracksUsed?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Boolean indicating this state vector was unable to be correlated to a known
     * object. This flag should only be set to true by data providers after an attempt
     * to correlate to an OnOrbit object was made and failed. If unable to correlate,
     * the 'origObjectId' field may be populated with an internal data provider
     * specific identifier.
     */
    uct?: boolean;

    /**
     * Rate of change of UT1 (milliseconds/day) - first derivative of ut1Utc.
     */
    ut1Rate?: number;

    /**
     * Universal Time-1 (UT1) minus UTC offset, in seconds.
     */
    ut1Utc?: number;

    /**
     * One sigma velocity uncertainty, in kilometers/second.
     */
    velUnc?: number;

    /**
     * Cartesian X acceleration of target, in kilometers/second^2, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xaccel?: number;

    /**
     * Cartesian X position of the target, in kilometers, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xpos?: number;

    /**
     * Cartesian X position of the target, in kilometers, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xposAlt1?: number;

    /**
     * Cartesian X position of the target, in kilometers, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xposAlt2?: number;

    /**
     * Cartesian X velocity of target, in kilometers/second, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xvel?: number;

    /**
     * Cartesian X velocity of the target, in kilometers/second, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xvelAlt1?: number;

    /**
     * Cartesian X velocity of the target, in kilometers/second, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xvelAlt2?: number;

    /**
     * Cartesian Y acceleration of target, in kilometers/second^2, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    yaccel?: number;

    /**
     * Cartesian Y position of the target, in kilometers, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    ypos?: number;

    /**
     * Cartesian Y position of the target, in kilometers, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yposAlt1?: number;

    /**
     * Cartesian Y position of the target, in kilometers, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yposAlt2?: number;

    /**
     * Cartesian Y velocity of target, in kilometers/second, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    yvel?: number;

    /**
     * Cartesian Y velocity of the target, in kilometers/second, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yvelAlt1?: number;

    /**
     * Cartesian Y velocity of the target, in kilometers/second, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yvelAlt2?: number;

    /**
     * Cartesian Z acceleration of target, in kilometers/second^2, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zaccel?: number;

    /**
     * Cartesian Z position of the target, in kilometers, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zpos?: number;

    /**
     * Cartesian Z position of the target, in kilometers, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zposAlt1?: number;

    /**
     * Cartesian Z position of the target, in kilometers, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zposAlt2?: number;

    /**
     * Cartesian Z velocity of target, in kilometers/second, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zvel?: number;

    /**
     * Cartesian Z velocity of the target, in kilometers/second, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zvelAlt1?: number;

    /**
     * Cartesian Z velocity of the target, in kilometers/second, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zvelAlt2?: number;
  }

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
  export interface StateVector2 {
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
     * Time of validity for state vector in ISO 8601 UTC datetime format, with
     * microsecond precision.
     */
    epoch: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The actual time span used for the OD of the object, expressed in days.
     */
    actualODSpan?: number;

    /**
     * Optional algorithm used to produce this record.
     */
    algorithm?: string;

    /**
     * The reference frame of the alternate1 (Alt1) cartesian orbital state.
     */
    alt1ReferenceFrame?: string;

    /**
     * The reference frame of the alternate2 (Alt2) cartesian orbital state.
     */
    alt2ReferenceFrame?: string;

    /**
     * The actual area of the object at it's largest cross-section, expressed in
     * meters^2.
     */
    area?: number;

    /**
     * First derivative of drag/ballistic coefficient (m2/kg-s).
     */
    bDot?: number;

    /**
     * Model parameter value for center of mass offset (m).
     */
    cmOffset?: number;

    /**
     * Covariance matrix, in kilometer and second based units, in the specified
     * covReferenceFrame. If the covReferenceFrame is null it is assumed to be J2000.
     * The array values (1-21) represent the lower triangular half of the
     * position-velocity covariance matrix. The size of the covariance matrix is
     * dynamic, depending on whether the covariance for position only or position &
     * velocity. The covariance elements are position dependent within the array with
     * values ordered as follows:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR&nbsp;&nbsp;
     *
     * x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
     *
     * y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3
     *
     * z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;6
     *
     * x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;&nbsp;10
     *
     * y'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11&nbsp;&nbsp;12&nbsp;&nbsp;13&nbsp;&nbsp;14&nbsp;&nbsp;15
     *
     * z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;17&nbsp;&nbsp;18&nbsp;&nbsp;19&nbsp;&nbsp;20&nbsp;&nbsp;&nbsp;21&nbsp;
     *
     * The cov array should contain only the lower left triangle values from top left
     * down to bottom right, in order.
     *
     * If additional covariance terms are included for DRAG, SRP, and/or THRUST, the
     * matrix can be extended with the following order of elements:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR
     *
     * DRG&nbsp;&nbsp;&nbsp;22&nbsp;&nbsp;23&nbsp;&nbsp;24&nbsp;&nbsp;25&nbsp;&nbsp;26&nbsp;&nbsp;&nbsp;27&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28&nbsp;&nbsp;
     *
     * SRP&nbsp;&nbsp;&nbsp;29&nbsp;&nbsp;30&nbsp;&nbsp;31&nbsp;&nbsp;32&nbsp;&nbsp;33&nbsp;&nbsp;&nbsp;34&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36&nbsp;&nbsp;
     *
     * THR&nbsp;&nbsp;&nbsp;37&nbsp;&nbsp;38&nbsp;&nbsp;39&nbsp;&nbsp;40&nbsp;&nbsp;41&nbsp;&nbsp;&nbsp;42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45&nbsp;
     */
    cov?: Array<number>;

    /**
     * The method used to generate the covariance during the orbit determination (OD)
     * that produced the state vector, or whether an arbitrary, non-calculated default
     * value was used (CALCULATED, DEFAULT).
     */
    covMethod?: string;

    /**
     * The reference frame of the covariance matrix elements. If the covReferenceFrame
     * is null it is assumed to be J2000.
     */
    covReferenceFrame?: 'J2000' | 'UVW' | 'EFG/TDR' | 'TEME' | 'GCRF';

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
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * The effective area of the object exposed to atmospheric drag, expressed in
     * meters^2.
     */
    dragArea?: number;

    /**
     * Area-to-mass ratio coefficient for atmospheric ballistic drag (m2/kg).
     */
    dragCoeff?: number;

    /**
     * The Drag Model used for this vector (e.g. HARRIS-PRIESTER, JAC70, JBH09, MSIS90,
     * NONE, etc.).
     */
    dragModel?: string;

    /**
     * Model parameter value for energy dissipation rate (EDR) (w/kg).
     */
    edr?: number;

    /**
     * The covariance matrix values represent the lower triangular half of the
     * covariance matrix in terms of equinoctial elements.&nbsp; The size of the
     * covariance matrix is dynamic.&nbsp; The values are outputted in order across
     * each row, i.e.:
     *
     * 1&nbsp;&nbsp; 2&nbsp;&nbsp; 3&nbsp;&nbsp; 4&nbsp;&nbsp; 5
     *
     * 6&nbsp;&nbsp; 7&nbsp;&nbsp; 8&nbsp;&nbsp; 9&nbsp; 10
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * 51&nbsp; 52&nbsp; 53&nbsp; 54&nbsp; 55
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * The ordering of values is as follows:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Af&nbsp;&nbsp;
     * Ag&nbsp;&nbsp; L&nbsp;&nbsp;&nbsp; N&nbsp;&nbsp; Chi&nbsp; Psi&nbsp;&nbsp;
     * B&nbsp;&nbsp; BDOT AGOM&nbsp; T&nbsp;&nbsp; C1&nbsp;&nbsp; C2&nbsp; ...
     *
     * Af&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1
     *
     * Ag&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp; 3
     *
     * L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     * 4&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp;&nbsp; 6
     *
     * N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     * 7&nbsp;&nbsp;&nbsp; 8&nbsp;&nbsp;&nbsp; 9&nbsp;&nbsp; 10
     *
     * Chi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11&nbsp;&nbsp; 12&nbsp;&nbsp;
     * 13&nbsp;&nbsp; 14&nbsp;&nbsp; 15
     *
     * Psi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16&nbsp;&nbsp; 17&nbsp;&nbsp;
     * 18&nbsp;&nbsp; 19&nbsp;&nbsp; 20&nbsp;&nbsp; 21
     *
     * B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22&nbsp;&nbsp;
     * 23&nbsp;&nbsp; 24 &nbsp;&nbsp;25&nbsp;&nbsp; 26&nbsp;&nbsp; 27&nbsp;&nbsp; 28
     *
     * BDOT&nbsp;&nbsp; 29&nbsp;&nbsp; 30&nbsp;&nbsp; 31&nbsp;&nbsp; 32&nbsp;&nbsp;
     * 33&nbsp;&nbsp; 34&nbsp;&nbsp; 35&nbsp;&nbsp; 36
     *
     * AGOM&nbsp; 37&nbsp;&nbsp; 38&nbsp;&nbsp; 39&nbsp;&nbsp; 40&nbsp;&nbsp;
     * 41&nbsp;&nbsp; 42&nbsp;&nbsp; 43&nbsp;&nbsp; 44&nbsp;&nbsp; 45
     *
     * T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 46&nbsp;&nbsp;
     * 47&nbsp;&nbsp; 48&nbsp;&nbsp; 49&nbsp;&nbsp; 50&nbsp;&nbsp; 51&nbsp;&nbsp;
     * 52&nbsp;&nbsp; 53&nbsp;&nbsp; 54&nbsp;&nbsp; 55
     *
     * C1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 56&nbsp;&nbsp; 57&nbsp;&nbsp;
     * 58&nbsp;&nbsp; 59&nbsp;&nbsp; 60&nbsp;&nbsp; 61&nbsp;&nbsp; 62&nbsp;&nbsp;
     * 63&nbsp;&nbsp; 64&nbsp;&nbsp; 65&nbsp;&nbsp; 66
     *
     * C2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 67&nbsp;&nbsp; 68&nbsp;&nbsp;
     * 69&nbsp;&nbsp; 70&nbsp;&nbsp; 71&nbsp; &nbsp;72&nbsp;&nbsp; 73&nbsp;&nbsp;
     * 74&nbsp;&nbsp; 75&nbsp;&nbsp; 76&nbsp;&nbsp; 77&nbsp;&nbsp; 78
     *
     * :
     *
     * :
     *
     * where C1, C2, etc, are the "consider parameters" that may be added to the
     * covariance matrix.&nbsp; The covariance matrix will be as large as the last
     * element/model parameter needed.&nbsp; In other words, if the DC solved for all 6
     * elements plus AGOM, the covariance matrix will be 9x9 (and the rows for B and
     * BDOT will be all zeros).&nbsp; If the covariance matrix is unavailable, the size
     * will be set to 0x0, and no data will follow.&nbsp; The cov field should contain
     * only the lower left triangle values from top left down to bottom right, in
     * order.
     */
    eqCov?: Array<number>;

    /**
     * Integrator error control.
     */
    errorControl?: number;

    /**
     * Boolean indicating use of fixed step size for this vector.
     */
    fixedStep?: boolean;

    /**
     * Geopotential model used for this vector (e.g. EGM-96, WGS-84, WGS-72, JGM-2, or
     * GEM-T3), including mm degree zonals, nn degree/order tesserals. E.g. EGM-96
     * 24Z,24T.
     */
    geopotentialModel?: string;

    /**
     * Number of terms used in the IAU 1980 nutation model (4, 50, or 106).
     */
    iau1980Terms?: number;

    /**
     * Unique identifier of the satellite on-orbit object, if correlated. For the
     * public catalog, the idOnOrbit is typically the satellite number as a string, but
     * may be a UUID for analyst or other unknown or untracked satellites.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the OD solution record that produced this state vector.
     * This ID can be used to obtain additional information on an OrbitDetermination
     * object using the 'get by ID' operation (e.g. /udl/orbitdetermination/{id}). For
     * example, the OrbitDetermination with idOrbitDetermination = abc would be queries
     * as /udl/orbitdetermination/abc.
     */
    idOrbitDetermination?: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    idStateVector?: string;

    /**
     * Integrator Mode.
     */
    integratorMode?: string;

    /**
     * Boolean indicating use of in-track thrust perturbations for this vector.
     */
    inTrackThrust?: boolean;

    /**
     * The end of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC format with microsecond precision. For an exact
     * observation time, the firstObTime and lastObTime are the same.
     */
    lastObEnd?: string;

    /**
     * The start of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC format with microsecond precision. For an exact
     * observation time, the firstObTime and lastObTime are the same.
     */
    lastObStart?: string;

    /**
     * Time of the next leap second after epoch in ISO 8601 UTC time. If the next leap
     * second is not known, the time of the previous leap second is used.
     */
    leapSecondTime?: string;

    /**
     * Boolean indicating use of lunar/solar perturbations for this vector.
     */
    lunarSolar?: boolean;

    /**
     * The mass of the object, in kilograms.
     */
    mass?: number;

    /**
     * The number of observations available for the OD of the object.
     */
    obsAvailable?: number;

    /**
     * The number of observations accepted for the OD of the object.
     */
    obsUsed?: number;

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
     * Optional identifier provided by state vector source to indicate the target
     * onorbit object of this state vector. This may be an internal identifier and not
     * necessarily map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Type of partial derivatives used (ANALYTIC, FULL NUM, or FAST NUM).
     */
    partials?: string;

    /**
     * The pedigree of state vector, or methods used for its generation to include
     * state update/orbit determination, propagation from another state, or a state
     * from a calibration satellite (e.g. ORBIT_UPDATE, PROPAGATION, CALIBRATION,
     * CONJUNCTION, FLIGHT_PLAN).
     */
    pedigree?: string;

    /**
     * Polar Wander Motion X (arc seconds).
     */
    polarMotionX?: number;

    /**
     * Polar Wander Motion Y (arc seconds).
     */
    polarMotionY?: number;

    /**
     * One sigma position uncertainty, in kilometers.
     */
    posUnc?: number;

    /**
     * The recommended OD time span calculated for the object, expressed in days.
     */
    recODSpan?: number;

    /**
     * The reference frame of the cartesian orbital states. If the referenceFrame is
     * null it is assumed to be J2000.
     */
    referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * The percentage of residuals accepted in the OD of the object.
     */
    residualsAcc?: number;

    /**
     * Epoch revolution number.
     */
    revNo?: number;

    /**
     * The Weighted Root Mean Squared (RMS) of the differential correction on the
     * target object that produced this vector. WRMS is a quality indicator of the
     * state vector update, with a value of 1.00 being optimal. WRMS applies to Batch
     * Least Squares (BLS) processes.
     */
    rms?: number;

    /**
     * Satellite/Catalog number of the target OnOrbit object.
     */
    satNo?: number;

    /**
     * Array containing the standard deviation of error in target object position, U, V
     * and W direction respectively (km).
     */
    sigmaPosUVW?: Array<number>;

    /**
     * Array containing the standard deviation of error in target object velocity, U, V
     * and W direction respectively (km/sec).
     */
    sigmaVelUVW?: Array<number>;

    /**
     * Average solar flux geomagnetic index.
     */
    solarFluxAPAvg?: number;

    /**
     * F10 (10.7 cm) solar flux value.
     */
    solarFluxF10?: number;

    /**
     * F10 (10.7 cm) solar flux 81-day average value.
     */
    solarFluxF10Avg?: number;

    /**
     * Boolean indicating use of solar radiation pressure perturbations for this
     * vector.
     */
    solarRadPress?: boolean;

    /**
     * Area-to-mass ratio coefficient for solar radiation pressure.
     */
    solarRadPressCoeff?: number;

    /**
     * Boolean indicating use of solid earth tide perturbations for this vector.
     */
    solidEarthTides?: boolean;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * The effective area of the object exposed to solar radiation pressure, expressed
     * in meters^2.
     */
    srpArea?: number;

    /**
     * Integrator step mode (AUTO, TIME, or S).
     */
    stepMode?: string;

    /**
     * Initial integration step size (seconds).
     */
    stepSize?: number;

    /**
     * Initial step size selection (AUTO or MANUAL).
     */
    stepSizeSelection?: string;

    /**
     * TAI (Temps Atomique International) minus UTC (Universal Time Coordinates) offset
     * in seconds.
     */
    taiUtc?: number;

    /**
     * Model parameter value for thrust acceleration (m/s2).
     */
    thrustAccel?: number;

    /**
     * The number of sensor tracks available for the OD of the object.
     */
    tracksAvail?: number;

    /**
     * The number of sensor tracks accepted for the OD of the object.
     */
    tracksUsed?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Boolean indicating this state vector was unable to be correlated to a known
     * object. This flag should only be set to true by data providers after an attempt
     * to correlate to an OnOrbit object was made and failed. If unable to correlate,
     * the 'origObjectId' field may be populated with an internal data provider
     * specific identifier.
     */
    uct?: boolean;

    /**
     * Rate of change of UT1 (milliseconds/day) - first derivative of ut1Utc.
     */
    ut1Rate?: number;

    /**
     * Universal Time-1 (UT1) minus UTC offset, in seconds.
     */
    ut1Utc?: number;

    /**
     * One sigma velocity uncertainty, in kilometers/second.
     */
    velUnc?: number;

    /**
     * Cartesian X acceleration of target, in kilometers/second^2, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xaccel?: number;

    /**
     * Cartesian X position of the target, in kilometers, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xpos?: number;

    /**
     * Cartesian X position of the target, in kilometers, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xposAlt1?: number;

    /**
     * Cartesian X position of the target, in kilometers, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xposAlt2?: number;

    /**
     * Cartesian X velocity of target, in kilometers/second, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xvel?: number;

    /**
     * Cartesian X velocity of the target, in kilometers/second, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xvelAlt1?: number;

    /**
     * Cartesian X velocity of the target, in kilometers/second, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xvelAlt2?: number;

    /**
     * Cartesian Y acceleration of target, in kilometers/second^2, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    yaccel?: number;

    /**
     * Cartesian Y position of the target, in kilometers, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    ypos?: number;

    /**
     * Cartesian Y position of the target, in kilometers, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yposAlt1?: number;

    /**
     * Cartesian Y position of the target, in kilometers, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yposAlt2?: number;

    /**
     * Cartesian Y velocity of target, in kilometers/second, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    yvel?: number;

    /**
     * Cartesian Y velocity of the target, in kilometers/second, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yvelAlt1?: number;

    /**
     * Cartesian Y velocity of the target, in kilometers/second, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yvelAlt2?: number;

    /**
     * Cartesian Z acceleration of target, in kilometers/second^2, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zaccel?: number;

    /**
     * Cartesian Z position of the target, in kilometers, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zpos?: number;

    /**
     * Cartesian Z position of the target, in kilometers, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zposAlt1?: number;

    /**
     * Cartesian Z position of the target, in kilometers, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zposAlt2?: number;

    /**
     * Cartesian Z velocity of target, in kilometers/second, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zvel?: number;

    /**
     * Cartesian Z velocity of the target, in kilometers/second, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zvelAlt1?: number;

    /**
     * Cartesian Z velocity of the target, in kilometers/second, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zvelAlt2?: number;
  }
}

export type ConjunctionCountResponse = string;

export type ConjunctionGetHistoryResponse = Array<Shared.ConjunctionFull>;

export interface ConjunctionQueryhelpResponse {
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

export type ConjunctionTupleResponse = Array<Shared.ConjunctionFull>;

export interface ConjunctionRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface ConjunctionListParams extends OffsetPageParams {
  /**
   * Time of closest approach (TCA) in UTC. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  tca: string;
}

export interface ConjunctionCountParams {
  /**
   * Time of closest approach (TCA) in UTC. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  tca: string;

  firstResult?: number;

  maxResults?: number;
}

export interface ConjunctionCreateUdlParams {
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
   * Body param: Source of the data.
   */
  source: string;

  /**
   * Body param: Time of closest approach (TCA) in UTC.
   */
  tca: string;

  /**
   * Query param: Flag to convert Conjunction PosVels into J2000 reference frame.
   */
  convertPosVel?: boolean;

  /**
   * Body param: Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Body param: Commander's critical information requirements notes.
   */
  ccir?: string;

  /**
   * Body param: The value of the primary (object1) Area times the drag coefficient
   * over the object Mass, expressed in m^2/kg, used for propagation of the primary
   * state vector and covariance to TCA.
   */
  cdAoM1?: number;

  /**
   * Body param: The value of the secondary (object2) Area times the drag coefficient
   * over the object Mass, expressed in m^2/kg, used for propagation of the primary
   * state vector and covariance to TCA.
   */
  cdAoM2?: number;

  /**
   * Body param: Probability of Collision is the probability (denoted p, where
   * 0.0<=p<=1.0), that Object1 and Object2 will collide.
   */
  collisionProb?: number;

  /**
   * Body param: The method that was used to calculate the collision probability, ex.
   * FOSTER-1992.
   */
  collisionProbMethod?: string;

  /**
   * Body param: Additional notes from data providers.
   */
  comments?: string;

  /**
   * Body param: Emergency comments.
   */
  concernNotes?: string;

  /**
   * Body param: The value of the primary (object1) Area times the solar radiation
   * pressure coefficient over the object Mass, expressed in m^2/kg, used for
   * propagation of the primary state vector and covariance to TCA. This parameter is
   * sometimes referred to as AGOM.
   */
  crAoM1?: number;

  /**
   * Body param: The value of the secondary (object2) Area times the solar radiation
   * pressure coefficient over the object Mass, expressed in m^2/kg, used for
   * propagation of the primary state vector and covariance to TCA. This parameter is
   * sometimes referred to as AGOM.
   */
  crAoM2?: number;

  /**
   * Body param: Optional source-provided and searchable metadata or descriptor of
   * the data.
   */
  descriptor?: string;

  /**
   * Body param: The filename of the primary (object1) ephemeris used in the
   * screening, if applicable.
   */
  ephemName1?: string;

  /**
   * Body param: The filename of the secondary (object2) ephemeris used in the
   * screening, if applicable.
   */
  ephemName2?: string;

  /**
   * Body param: Unique identifier of the parent Ephemeris Set of the primary
   * (object1) ephemeris used in the screening, if applicable.
   */
  esId1?: string;

  /**
   * Body param: Unique identifier of the parent Ephemeris Set of the secondary
   * (object2) ephemeris used in the screening, if applicable.
   */
  esId2?: string;

  /**
   * Body param: Optional source-provided identifier for this conjunction event. In
   * the case where multiple conjunction records are submitted for the same event,
   * this field can be used to tie them together to the same event.
   */
  eventId?: string;

  /**
   * Body param: Optional ID of the UDL State Vector at TCA of the primary object.
   * When performing a create, this id will be ignored in favor of the UDL generated
   * id of the stateVector1.
   */
  idStateVector1?: string;

  /**
   * Body param: Optional ID of the UDL State Vector at TCA of the secondary object.
   * When performing a create, this id will be ignored in favor of the UDL generated
   * id of the stateVector2.
   */
  idStateVector2?: string;

  /**
   * Body param: Used for probability of collision calculation, not Warning/Alert
   * Threshold notifications.
   */
  largeCovWarning?: boolean;

  /**
   * Body param: Used for probability of collision calculation, not Warning/Alert
   * Threshold notifications.
   */
  largeRelPosWarning?: boolean;

  /**
   * Body param: Time of last positive metric observation of the primary satellite.
   */
  lastObTime1?: string;

  /**
   * Body param: Time of last positive metric observation of the secondary satellite.
   */
  lastObTime2?: string;

  /**
   * Body param: Spacecraft name(s) for which the Collision message is provided.
   */
  messageFor?: string;

  /**
   * Body param: JMS provided message ID link.
   */
  messageId?: string;

  /**
   * Body param: Distance between objects at Time of Closest Approach (TCA) in
   * meters.
   */
  missDistance?: number;

  /**
   * Body param: Optional place holder for an OnOrbit ID that does not exist in UDL.
   */
  origIdOnOrbit1?: string;

  /**
   * Body param: Optional place holder for an OnOrbit ID that does not exist in UDL.
   */
  origIdOnOrbit2?: string;

  /**
   * Body param: Originating system or organization which produced the data, if
   * different from the source. The origin may be different than the source if the
   * source was a mediating system which forwarded the data on behalf of the origin
   * system. If null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Body param: Creating agency or owner/operator (may be different than provider
   * who submitted the conjunction message).
   */
  originator?: string;

  /**
   * Body param: Flag indicating if owner was contacted.
   */
  ownerContacted?: boolean;

  /**
   * Body param: Penetration Level Sigma.
   */
  penetrationLevelSigma?: number;

  /**
   * Body param: Link to filename associated with JMS record.
   */
  rawFileURI?: string;

  /**
   * Body param: Distance between objects along Normal vector in meters.
   */
  relPosN?: number;

  /**
   * Body param: Distance between objects along Radial Vector at Time of Closest
   * Approach in meters.
   */
  relPosR?: number;

  /**
   * Body param: Distance between objects along Tangential Vector in meters.
   */
  relPosT?: number;

  /**
   * Body param: Closing velocity magnitude (relative speed) at Time of Closest
   * Approach in meters/sec.
   */
  relVelMag?: number;

  /**
   * Body param: Closing velocity between objects along Normal Vector in meters/sec.
   */
  relVelN?: number;

  /**
   * Body param: Closing velocity between objects along Radial Vector at Time of
   * Closest Approach in meters/sec.
   */
  relVelR?: number;

  /**
   * Body param: Closing velocity between objects along Tangential Vector in
   * meters/sec.
   */
  relVelT?: number;

  /**
   * Body param: Satellite/catalog number of the target on-orbit primary object.
   */
  satNo1?: number;

  /**
   * Body param: Satellite/catalog number of the target on-orbit secondary object.
   */
  satNo2?: number;

  /**
   * Body param: The start time in UTC of the screening period for the conjunction
   * assessment.
   */
  screenEntryTime?: string;

  /**
   * Body param: The stop time in UTC of the screening period for the conjunction
   * assessment.
   */
  screenExitTime?: string;

  /**
   * Body param: Component size of screen in X component of RTN (Radial, Transverse
   * and Normal) frame in meters.
   */
  screenVolumeX?: number;

  /**
   * Body param: Component size of screen in Y component of RTN (Radial, Transverse
   * and Normal) frame in meters.
   */
  screenVolumeY?: number;

  /**
   * Body param: Component size of screen in Z component of RTN (Radial, Transverse
   * and Normal) frame in meters.
   */
  screenVolumeZ?: number;

  /**
   * Body param: Used for probability of collision calculation, not Warning/Alert
   * Threshold notifications.
   */
  smallCovWarning?: boolean;

  /**
   * Body param: Used for probability of collision calculation, not Warning/Alert
   * Threshold notifications.
   */
  smallRelVelWarning?: boolean;

  /**
   * Body param: Flag indicating if State department was notified.
   */
  stateDeptNotified?: boolean;

  /**
   * Body param: This service provides operations for querying and manipulation of
   * state vectors for OnOrbit objects. State vectors are cartesian vectors of
   * position (r) and velocity (v) that, together with their time (epoch) (t),
   * uniquely determine the trajectory of the orbiting body in space. J2000 is the
   * preferred coordinate frame for all state vector positions/velocities in UDL, but
   * in some cases data may be in another frame depending on the provider and/or
   * datatype. Please see the 'Discover' tab in the storefront to confirm coordinate
   * frames by data provider.
   */
  stateVector1?: ConjunctionCreateUdlParams.StateVector1;

  /**
   * Body param: This service provides operations for querying and manipulation of
   * state vectors for OnOrbit objects. State vectors are cartesian vectors of
   * position (r) and velocity (v) that, together with their time (epoch) (t),
   * uniquely determine the trajectory of the orbiting body in space. J2000 is the
   * preferred coordinate frame for all state vector positions/velocities in UDL, but
   * in some cases data may be in another frame depending on the provider and/or
   * datatype. Please see the 'Discover' tab in the storefront to confirm coordinate
   * frames by data provider.
   */
  stateVector2?: ConjunctionCreateUdlParams.StateVector2;

  /**
   * Body param: Optional array of provider/source specific tags for this data, where
   * each element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Body param: The primary (object1) acceleration, expressed in m/s^2, due to
   * in-track thrust used to propagate the primary state vector and covariance to
   * TCA.
   */
  thrustAccel1?: number;

  /**
   * Body param: The secondary (object2) acceleration, expressed in m/s^2, due to
   * in-track thrust used to propagate the primary state vector and covariance to
   * TCA.
   */
  thrustAccel2?: number;

  /**
   * Body param: Optional identifier to track a commercial or marketplace transaction
   * executed to produce this data.
   */
  transactionId?: string;

  /**
   * Body param: The type of data represented in this conjunction record (e.g.
   * CONJUNCTION, CARA-WORKLIST, etc.). If type is null the record is assumed to be a
   * Conjunction.
   */
  type?: string;

  /**
   * Body param: Used for probability of collision calculation, not Warning/Alert
   * Threshold notifications.
   */
  uvwWarn?: boolean;

  /**
   * Body param: The time at which the secondary (object2) enters the screening
   * volume, in ISO 8601 UTC format with microsecond precision.
   */
  volEntryTime?: string;

  /**
   * Body param: The time at which the secondary (object2) exits the screening
   * volume, in ISO 8601 UTC format with microsecond precision.
   */
  volExitTime?: string;

  /**
   * Body param: The shape (BOX, ELLIPSOID) of the screening volume.
   */
  volShape?: string;
}

export namespace ConjunctionCreateUdlParams {
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
  export interface StateVector1 {
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
     * Time of validity for state vector in ISO 8601 UTC datetime format, with
     * microsecond precision.
     */
    epoch: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The actual time span used for the OD of the object, expressed in days.
     */
    actualODSpan?: number;

    /**
     * Optional algorithm used to produce this record.
     */
    algorithm?: string;

    /**
     * The reference frame of the alternate1 (Alt1) cartesian orbital state.
     */
    alt1ReferenceFrame?: string;

    /**
     * The reference frame of the alternate2 (Alt2) cartesian orbital state.
     */
    alt2ReferenceFrame?: string;

    /**
     * The actual area of the object at it's largest cross-section, expressed in
     * meters^2.
     */
    area?: number;

    /**
     * First derivative of drag/ballistic coefficient (m2/kg-s).
     */
    bDot?: number;

    /**
     * Model parameter value for center of mass offset (m).
     */
    cmOffset?: number;

    /**
     * Covariance matrix, in kilometer and second based units, in the specified
     * covReferenceFrame. If the covReferenceFrame is null it is assumed to be J2000.
     * The array values (1-21) represent the lower triangular half of the
     * position-velocity covariance matrix. The size of the covariance matrix is
     * dynamic, depending on whether the covariance for position only or position &
     * velocity. The covariance elements are position dependent within the array with
     * values ordered as follows:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR&nbsp;&nbsp;
     *
     * x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
     *
     * y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3
     *
     * z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;6
     *
     * x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;&nbsp;10
     *
     * y'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11&nbsp;&nbsp;12&nbsp;&nbsp;13&nbsp;&nbsp;14&nbsp;&nbsp;15
     *
     * z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;17&nbsp;&nbsp;18&nbsp;&nbsp;19&nbsp;&nbsp;20&nbsp;&nbsp;&nbsp;21&nbsp;
     *
     * The cov array should contain only the lower left triangle values from top left
     * down to bottom right, in order.
     *
     * If additional covariance terms are included for DRAG, SRP, and/or THRUST, the
     * matrix can be extended with the following order of elements:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR
     *
     * DRG&nbsp;&nbsp;&nbsp;22&nbsp;&nbsp;23&nbsp;&nbsp;24&nbsp;&nbsp;25&nbsp;&nbsp;26&nbsp;&nbsp;&nbsp;27&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28&nbsp;&nbsp;
     *
     * SRP&nbsp;&nbsp;&nbsp;29&nbsp;&nbsp;30&nbsp;&nbsp;31&nbsp;&nbsp;32&nbsp;&nbsp;33&nbsp;&nbsp;&nbsp;34&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36&nbsp;&nbsp;
     *
     * THR&nbsp;&nbsp;&nbsp;37&nbsp;&nbsp;38&nbsp;&nbsp;39&nbsp;&nbsp;40&nbsp;&nbsp;41&nbsp;&nbsp;&nbsp;42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45&nbsp;
     */
    cov?: Array<number>;

    /**
     * The method used to generate the covariance during the orbit determination (OD)
     * that produced the state vector, or whether an arbitrary, non-calculated default
     * value was used (CALCULATED, DEFAULT).
     */
    covMethod?: string;

    /**
     * The reference frame of the covariance matrix elements. If the covReferenceFrame
     * is null it is assumed to be J2000.
     */
    covReferenceFrame?: 'J2000' | 'UVW' | 'EFG/TDR' | 'TEME' | 'GCRF';

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * The effective area of the object exposed to atmospheric drag, expressed in
     * meters^2.
     */
    dragArea?: number;

    /**
     * Area-to-mass ratio coefficient for atmospheric ballistic drag (m2/kg).
     */
    dragCoeff?: number;

    /**
     * The Drag Model used for this vector (e.g. HARRIS-PRIESTER, JAC70, JBH09, MSIS90,
     * NONE, etc.).
     */
    dragModel?: string;

    /**
     * Model parameter value for energy dissipation rate (EDR) (w/kg).
     */
    edr?: number;

    /**
     * The covariance matrix values represent the lower triangular half of the
     * covariance matrix in terms of equinoctial elements.&nbsp; The size of the
     * covariance matrix is dynamic.&nbsp; The values are outputted in order across
     * each row, i.e.:
     *
     * 1&nbsp;&nbsp; 2&nbsp;&nbsp; 3&nbsp;&nbsp; 4&nbsp;&nbsp; 5
     *
     * 6&nbsp;&nbsp; 7&nbsp;&nbsp; 8&nbsp;&nbsp; 9&nbsp; 10
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * 51&nbsp; 52&nbsp; 53&nbsp; 54&nbsp; 55
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * The ordering of values is as follows:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Af&nbsp;&nbsp;
     * Ag&nbsp;&nbsp; L&nbsp;&nbsp;&nbsp; N&nbsp;&nbsp; Chi&nbsp; Psi&nbsp;&nbsp;
     * B&nbsp;&nbsp; BDOT AGOM&nbsp; T&nbsp;&nbsp; C1&nbsp;&nbsp; C2&nbsp; ...
     *
     * Af&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1
     *
     * Ag&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp; 3
     *
     * L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     * 4&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp;&nbsp; 6
     *
     * N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     * 7&nbsp;&nbsp;&nbsp; 8&nbsp;&nbsp;&nbsp; 9&nbsp;&nbsp; 10
     *
     * Chi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11&nbsp;&nbsp; 12&nbsp;&nbsp;
     * 13&nbsp;&nbsp; 14&nbsp;&nbsp; 15
     *
     * Psi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16&nbsp;&nbsp; 17&nbsp;&nbsp;
     * 18&nbsp;&nbsp; 19&nbsp;&nbsp; 20&nbsp;&nbsp; 21
     *
     * B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22&nbsp;&nbsp;
     * 23&nbsp;&nbsp; 24 &nbsp;&nbsp;25&nbsp;&nbsp; 26&nbsp;&nbsp; 27&nbsp;&nbsp; 28
     *
     * BDOT&nbsp;&nbsp; 29&nbsp;&nbsp; 30&nbsp;&nbsp; 31&nbsp;&nbsp; 32&nbsp;&nbsp;
     * 33&nbsp;&nbsp; 34&nbsp;&nbsp; 35&nbsp;&nbsp; 36
     *
     * AGOM&nbsp; 37&nbsp;&nbsp; 38&nbsp;&nbsp; 39&nbsp;&nbsp; 40&nbsp;&nbsp;
     * 41&nbsp;&nbsp; 42&nbsp;&nbsp; 43&nbsp;&nbsp; 44&nbsp;&nbsp; 45
     *
     * T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 46&nbsp;&nbsp;
     * 47&nbsp;&nbsp; 48&nbsp;&nbsp; 49&nbsp;&nbsp; 50&nbsp;&nbsp; 51&nbsp;&nbsp;
     * 52&nbsp;&nbsp; 53&nbsp;&nbsp; 54&nbsp;&nbsp; 55
     *
     * C1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 56&nbsp;&nbsp; 57&nbsp;&nbsp;
     * 58&nbsp;&nbsp; 59&nbsp;&nbsp; 60&nbsp;&nbsp; 61&nbsp;&nbsp; 62&nbsp;&nbsp;
     * 63&nbsp;&nbsp; 64&nbsp;&nbsp; 65&nbsp;&nbsp; 66
     *
     * C2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 67&nbsp;&nbsp; 68&nbsp;&nbsp;
     * 69&nbsp;&nbsp; 70&nbsp;&nbsp; 71&nbsp; &nbsp;72&nbsp;&nbsp; 73&nbsp;&nbsp;
     * 74&nbsp;&nbsp; 75&nbsp;&nbsp; 76&nbsp;&nbsp; 77&nbsp;&nbsp; 78
     *
     * :
     *
     * :
     *
     * where C1, C2, etc, are the "consider parameters" that may be added to the
     * covariance matrix.&nbsp; The covariance matrix will be as large as the last
     * element/model parameter needed.&nbsp; In other words, if the DC solved for all 6
     * elements plus AGOM, the covariance matrix will be 9x9 (and the rows for B and
     * BDOT will be all zeros).&nbsp; If the covariance matrix is unavailable, the size
     * will be set to 0x0, and no data will follow.&nbsp; The cov field should contain
     * only the lower left triangle values from top left down to bottom right, in
     * order.
     */
    eqCov?: Array<number>;

    /**
     * Integrator error control.
     */
    errorControl?: number;

    /**
     * Boolean indicating use of fixed step size for this vector.
     */
    fixedStep?: boolean;

    /**
     * Geopotential model used for this vector (e.g. EGM-96, WGS-84, WGS-72, JGM-2, or
     * GEM-T3), including mm degree zonals, nn degree/order tesserals. E.g. EGM-96
     * 24Z,24T.
     */
    geopotentialModel?: string;

    /**
     * Number of terms used in the IAU 1980 nutation model (4, 50, or 106).
     */
    iau1980Terms?: number;

    /**
     * Unique identifier of the OD solution record that produced this state vector.
     * This ID can be used to obtain additional information on an OrbitDetermination
     * object using the 'get by ID' operation (e.g. /udl/orbitdetermination/{id}). For
     * example, the OrbitDetermination with idOrbitDetermination = abc would be queries
     * as /udl/orbitdetermination/abc.
     */
    idOrbitDetermination?: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    idStateVector?: string;

    /**
     * Integrator Mode.
     */
    integratorMode?: string;

    /**
     * Boolean indicating use of in-track thrust perturbations for this vector.
     */
    inTrackThrust?: boolean;

    /**
     * The end of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC format with microsecond precision. For an exact
     * observation time, the firstObTime and lastObTime are the same.
     */
    lastObEnd?: string;

    /**
     * The start of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC format with microsecond precision. For an exact
     * observation time, the firstObTime and lastObTime are the same.
     */
    lastObStart?: string;

    /**
     * Time of the next leap second after epoch in ISO 8601 UTC time. If the next leap
     * second is not known, the time of the previous leap second is used.
     */
    leapSecondTime?: string;

    /**
     * Boolean indicating use of lunar/solar perturbations for this vector.
     */
    lunarSolar?: boolean;

    /**
     * The mass of the object, in kilograms.
     */
    mass?: number;

    /**
     * The number of observations available for the OD of the object.
     */
    obsAvailable?: number;

    /**
     * The number of observations accepted for the OD of the object.
     */
    obsUsed?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by state vector source to indicate the target
     * onorbit object of this state vector. This may be an internal identifier and not
     * necessarily map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Type of partial derivatives used (ANALYTIC, FULL NUM, or FAST NUM).
     */
    partials?: string;

    /**
     * The pedigree of state vector, or methods used for its generation to include
     * state update/orbit determination, propagation from another state, or a state
     * from a calibration satellite (e.g. ORBIT_UPDATE, PROPAGATION, CALIBRATION,
     * CONJUNCTION, FLIGHT_PLAN).
     */
    pedigree?: string;

    /**
     * Polar Wander Motion X (arc seconds).
     */
    polarMotionX?: number;

    /**
     * Polar Wander Motion Y (arc seconds).
     */
    polarMotionY?: number;

    /**
     * One sigma position uncertainty, in kilometers.
     */
    posUnc?: number;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * The recommended OD time span calculated for the object, expressed in days.
     */
    recODSpan?: number;

    /**
     * The reference frame of the cartesian orbital states. If the referenceFrame is
     * null it is assumed to be J2000.
     */
    referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * The percentage of residuals accepted in the OD of the object.
     */
    residualsAcc?: number;

    /**
     * Epoch revolution number.
     */
    revNo?: number;

    /**
     * The Weighted Root Mean Squared (RMS) of the differential correction on the
     * target object that produced this vector. WRMS is a quality indicator of the
     * state vector update, with a value of 1.00 being optimal. WRMS applies to Batch
     * Least Squares (BLS) processes.
     */
    rms?: number;

    /**
     * Satellite/Catalog number of the target OnOrbit object.
     */
    satNo?: number;

    /**
     * Array containing the standard deviation of error in target object position, U, V
     * and W direction respectively (km).
     */
    sigmaPosUVW?: Array<number>;

    /**
     * Array containing the standard deviation of error in target object velocity, U, V
     * and W direction respectively (km/sec).
     */
    sigmaVelUVW?: Array<number>;

    /**
     * Average solar flux geomagnetic index.
     */
    solarFluxAPAvg?: number;

    /**
     * F10 (10.7 cm) solar flux value.
     */
    solarFluxF10?: number;

    /**
     * F10 (10.7 cm) solar flux 81-day average value.
     */
    solarFluxF10Avg?: number;

    /**
     * Boolean indicating use of solar radiation pressure perturbations for this
     * vector.
     */
    solarRadPress?: boolean;

    /**
     * Area-to-mass ratio coefficient for solar radiation pressure.
     */
    solarRadPressCoeff?: number;

    /**
     * Boolean indicating use of solid earth tide perturbations for this vector.
     */
    solidEarthTides?: boolean;

    /**
     * Optional array of UDL data (observation) UUIDs used to build this state vector.
     * See the associated sourcedDataTypes array for the specific types of observations
     * for the positionally corresponding UUIDs in this array (the two arrays must
     * match in size).
     */
    sourcedData?: Array<string>;

    /**
     * Optional array of UDL observation data types used to build this state vector
     * (e.g. EO, RADAR, RF, DOA). See the associated sourcedData array for the specific
     * UUIDs of observations for the positionally corresponding data types in this
     * array (the two arrays must match in size).
     */
    sourcedDataTypes?: Array<'EO' | 'RADAR' | 'RF' | 'DOA' | 'ELSET' | 'SV'>;

    /**
     * The effective area of the object exposed to solar radiation pressure, expressed
     * in meters^2.
     */
    srpArea?: number;

    /**
     * Integrator step mode (AUTO, TIME, or S).
     */
    stepMode?: string;

    /**
     * Initial integration step size (seconds).
     */
    stepSize?: number;

    /**
     * Initial step size selection (AUTO or MANUAL).
     */
    stepSizeSelection?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * TAI (Temps Atomique International) minus UTC (Universal Time Coordinates) offset
     * in seconds.
     */
    taiUtc?: number;

    /**
     * Model parameter value for thrust acceleration (m/s2).
     */
    thrustAccel?: number;

    /**
     * The number of sensor tracks available for the OD of the object.
     */
    tracksAvail?: number;

    /**
     * The number of sensor tracks accepted for the OD of the object.
     */
    tracksUsed?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Boolean indicating this state vector was unable to be correlated to a known
     * object. This flag should only be set to true by data providers after an attempt
     * to correlate to an OnOrbit object was made and failed. If unable to correlate,
     * the 'origObjectId' field may be populated with an internal data provider
     * specific identifier.
     */
    uct?: boolean;

    /**
     * Rate of change of UT1 (milliseconds/day) - first derivative of ut1Utc.
     */
    ut1Rate?: number;

    /**
     * Universal Time-1 (UT1) minus UTC offset, in seconds.
     */
    ut1Utc?: number;

    /**
     * One sigma velocity uncertainty, in kilometers/second.
     */
    velUnc?: number;

    /**
     * Cartesian X acceleration of target, in kilometers/second^2, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xaccel?: number;

    /**
     * Cartesian X position of the target, in kilometers, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xpos?: number;

    /**
     * Cartesian X position of the target, in kilometers, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xposAlt1?: number;

    /**
     * Cartesian X position of the target, in kilometers, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xposAlt2?: number;

    /**
     * Cartesian X velocity of target, in kilometers/second, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xvel?: number;

    /**
     * Cartesian X velocity of the target, in kilometers/second, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xvelAlt1?: number;

    /**
     * Cartesian X velocity of the target, in kilometers/second, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xvelAlt2?: number;

    /**
     * Cartesian Y acceleration of target, in kilometers/second^2, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    yaccel?: number;

    /**
     * Cartesian Y position of the target, in kilometers, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    ypos?: number;

    /**
     * Cartesian Y position of the target, in kilometers, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yposAlt1?: number;

    /**
     * Cartesian Y position of the target, in kilometers, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yposAlt2?: number;

    /**
     * Cartesian Y velocity of target, in kilometers/second, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    yvel?: number;

    /**
     * Cartesian Y velocity of the target, in kilometers/second, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yvelAlt1?: number;

    /**
     * Cartesian Y velocity of the target, in kilometers/second, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yvelAlt2?: number;

    /**
     * Cartesian Z acceleration of target, in kilometers/second^2, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zaccel?: number;

    /**
     * Cartesian Z position of the target, in kilometers, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zpos?: number;

    /**
     * Cartesian Z position of the target, in kilometers, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zposAlt1?: number;

    /**
     * Cartesian Z position of the target, in kilometers, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zposAlt2?: number;

    /**
     * Cartesian Z velocity of target, in kilometers/second, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zvel?: number;

    /**
     * Cartesian Z velocity of the target, in kilometers/second, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zvelAlt1?: number;

    /**
     * Cartesian Z velocity of the target, in kilometers/second, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zvelAlt2?: number;
  }

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
  export interface StateVector2 {
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
     * Time of validity for state vector in ISO 8601 UTC datetime format, with
     * microsecond precision.
     */
    epoch: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The actual time span used for the OD of the object, expressed in days.
     */
    actualODSpan?: number;

    /**
     * Optional algorithm used to produce this record.
     */
    algorithm?: string;

    /**
     * The reference frame of the alternate1 (Alt1) cartesian orbital state.
     */
    alt1ReferenceFrame?: string;

    /**
     * The reference frame of the alternate2 (Alt2) cartesian orbital state.
     */
    alt2ReferenceFrame?: string;

    /**
     * The actual area of the object at it's largest cross-section, expressed in
     * meters^2.
     */
    area?: number;

    /**
     * First derivative of drag/ballistic coefficient (m2/kg-s).
     */
    bDot?: number;

    /**
     * Model parameter value for center of mass offset (m).
     */
    cmOffset?: number;

    /**
     * Covariance matrix, in kilometer and second based units, in the specified
     * covReferenceFrame. If the covReferenceFrame is null it is assumed to be J2000.
     * The array values (1-21) represent the lower triangular half of the
     * position-velocity covariance matrix. The size of the covariance matrix is
     * dynamic, depending on whether the covariance for position only or position &
     * velocity. The covariance elements are position dependent within the array with
     * values ordered as follows:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR&nbsp;&nbsp;
     *
     * x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
     *
     * y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3
     *
     * z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;6
     *
     * x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;&nbsp;10
     *
     * y'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11&nbsp;&nbsp;12&nbsp;&nbsp;13&nbsp;&nbsp;14&nbsp;&nbsp;15
     *
     * z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;17&nbsp;&nbsp;18&nbsp;&nbsp;19&nbsp;&nbsp;20&nbsp;&nbsp;&nbsp;21&nbsp;
     *
     * The cov array should contain only the lower left triangle values from top left
     * down to bottom right, in order.
     *
     * If additional covariance terms are included for DRAG, SRP, and/or THRUST, the
     * matrix can be extended with the following order of elements:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR
     *
     * DRG&nbsp;&nbsp;&nbsp;22&nbsp;&nbsp;23&nbsp;&nbsp;24&nbsp;&nbsp;25&nbsp;&nbsp;26&nbsp;&nbsp;&nbsp;27&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28&nbsp;&nbsp;
     *
     * SRP&nbsp;&nbsp;&nbsp;29&nbsp;&nbsp;30&nbsp;&nbsp;31&nbsp;&nbsp;32&nbsp;&nbsp;33&nbsp;&nbsp;&nbsp;34&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36&nbsp;&nbsp;
     *
     * THR&nbsp;&nbsp;&nbsp;37&nbsp;&nbsp;38&nbsp;&nbsp;39&nbsp;&nbsp;40&nbsp;&nbsp;41&nbsp;&nbsp;&nbsp;42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45&nbsp;
     */
    cov?: Array<number>;

    /**
     * The method used to generate the covariance during the orbit determination (OD)
     * that produced the state vector, or whether an arbitrary, non-calculated default
     * value was used (CALCULATED, DEFAULT).
     */
    covMethod?: string;

    /**
     * The reference frame of the covariance matrix elements. If the covReferenceFrame
     * is null it is assumed to be J2000.
     */
    covReferenceFrame?: 'J2000' | 'UVW' | 'EFG/TDR' | 'TEME' | 'GCRF';

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * The effective area of the object exposed to atmospheric drag, expressed in
     * meters^2.
     */
    dragArea?: number;

    /**
     * Area-to-mass ratio coefficient for atmospheric ballistic drag (m2/kg).
     */
    dragCoeff?: number;

    /**
     * The Drag Model used for this vector (e.g. HARRIS-PRIESTER, JAC70, JBH09, MSIS90,
     * NONE, etc.).
     */
    dragModel?: string;

    /**
     * Model parameter value for energy dissipation rate (EDR) (w/kg).
     */
    edr?: number;

    /**
     * The covariance matrix values represent the lower triangular half of the
     * covariance matrix in terms of equinoctial elements.&nbsp; The size of the
     * covariance matrix is dynamic.&nbsp; The values are outputted in order across
     * each row, i.e.:
     *
     * 1&nbsp;&nbsp; 2&nbsp;&nbsp; 3&nbsp;&nbsp; 4&nbsp;&nbsp; 5
     *
     * 6&nbsp;&nbsp; 7&nbsp;&nbsp; 8&nbsp;&nbsp; 9&nbsp; 10
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * 51&nbsp; 52&nbsp; 53&nbsp; 54&nbsp; 55
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
     *
     * The ordering of values is as follows:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Af&nbsp;&nbsp;
     * Ag&nbsp;&nbsp; L&nbsp;&nbsp;&nbsp; N&nbsp;&nbsp; Chi&nbsp; Psi&nbsp;&nbsp;
     * B&nbsp;&nbsp; BDOT AGOM&nbsp; T&nbsp;&nbsp; C1&nbsp;&nbsp; C2&nbsp; ...
     *
     * Af&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1
     *
     * Ag&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp; 3
     *
     * L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     * 4&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp;&nbsp; 6
     *
     * N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     * 7&nbsp;&nbsp;&nbsp; 8&nbsp;&nbsp;&nbsp; 9&nbsp;&nbsp; 10
     *
     * Chi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11&nbsp;&nbsp; 12&nbsp;&nbsp;
     * 13&nbsp;&nbsp; 14&nbsp;&nbsp; 15
     *
     * Psi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16&nbsp;&nbsp; 17&nbsp;&nbsp;
     * 18&nbsp;&nbsp; 19&nbsp;&nbsp; 20&nbsp;&nbsp; 21
     *
     * B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22&nbsp;&nbsp;
     * 23&nbsp;&nbsp; 24 &nbsp;&nbsp;25&nbsp;&nbsp; 26&nbsp;&nbsp; 27&nbsp;&nbsp; 28
     *
     * BDOT&nbsp;&nbsp; 29&nbsp;&nbsp; 30&nbsp;&nbsp; 31&nbsp;&nbsp; 32&nbsp;&nbsp;
     * 33&nbsp;&nbsp; 34&nbsp;&nbsp; 35&nbsp;&nbsp; 36
     *
     * AGOM&nbsp; 37&nbsp;&nbsp; 38&nbsp;&nbsp; 39&nbsp;&nbsp; 40&nbsp;&nbsp;
     * 41&nbsp;&nbsp; 42&nbsp;&nbsp; 43&nbsp;&nbsp; 44&nbsp;&nbsp; 45
     *
     * T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 46&nbsp;&nbsp;
     * 47&nbsp;&nbsp; 48&nbsp;&nbsp; 49&nbsp;&nbsp; 50&nbsp;&nbsp; 51&nbsp;&nbsp;
     * 52&nbsp;&nbsp; 53&nbsp;&nbsp; 54&nbsp;&nbsp; 55
     *
     * C1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 56&nbsp;&nbsp; 57&nbsp;&nbsp;
     * 58&nbsp;&nbsp; 59&nbsp;&nbsp; 60&nbsp;&nbsp; 61&nbsp;&nbsp; 62&nbsp;&nbsp;
     * 63&nbsp;&nbsp; 64&nbsp;&nbsp; 65&nbsp;&nbsp; 66
     *
     * C2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 67&nbsp;&nbsp; 68&nbsp;&nbsp;
     * 69&nbsp;&nbsp; 70&nbsp;&nbsp; 71&nbsp; &nbsp;72&nbsp;&nbsp; 73&nbsp;&nbsp;
     * 74&nbsp;&nbsp; 75&nbsp;&nbsp; 76&nbsp;&nbsp; 77&nbsp;&nbsp; 78
     *
     * :
     *
     * :
     *
     * where C1, C2, etc, are the "consider parameters" that may be added to the
     * covariance matrix.&nbsp; The covariance matrix will be as large as the last
     * element/model parameter needed.&nbsp; In other words, if the DC solved for all 6
     * elements plus AGOM, the covariance matrix will be 9x9 (and the rows for B and
     * BDOT will be all zeros).&nbsp; If the covariance matrix is unavailable, the size
     * will be set to 0x0, and no data will follow.&nbsp; The cov field should contain
     * only the lower left triangle values from top left down to bottom right, in
     * order.
     */
    eqCov?: Array<number>;

    /**
     * Integrator error control.
     */
    errorControl?: number;

    /**
     * Boolean indicating use of fixed step size for this vector.
     */
    fixedStep?: boolean;

    /**
     * Geopotential model used for this vector (e.g. EGM-96, WGS-84, WGS-72, JGM-2, or
     * GEM-T3), including mm degree zonals, nn degree/order tesserals. E.g. EGM-96
     * 24Z,24T.
     */
    geopotentialModel?: string;

    /**
     * Number of terms used in the IAU 1980 nutation model (4, 50, or 106).
     */
    iau1980Terms?: number;

    /**
     * Unique identifier of the OD solution record that produced this state vector.
     * This ID can be used to obtain additional information on an OrbitDetermination
     * object using the 'get by ID' operation (e.g. /udl/orbitdetermination/{id}). For
     * example, the OrbitDetermination with idOrbitDetermination = abc would be queries
     * as /udl/orbitdetermination/abc.
     */
    idOrbitDetermination?: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    idStateVector?: string;

    /**
     * Integrator Mode.
     */
    integratorMode?: string;

    /**
     * Boolean indicating use of in-track thrust perturbations for this vector.
     */
    inTrackThrust?: boolean;

    /**
     * The end of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC format with microsecond precision. For an exact
     * observation time, the firstObTime and lastObTime are the same.
     */
    lastObEnd?: string;

    /**
     * The start of the time interval containing the time of the last accepted
     * observation, in ISO 8601 UTC format with microsecond precision. For an exact
     * observation time, the firstObTime and lastObTime are the same.
     */
    lastObStart?: string;

    /**
     * Time of the next leap second after epoch in ISO 8601 UTC time. If the next leap
     * second is not known, the time of the previous leap second is used.
     */
    leapSecondTime?: string;

    /**
     * Boolean indicating use of lunar/solar perturbations for this vector.
     */
    lunarSolar?: boolean;

    /**
     * The mass of the object, in kilograms.
     */
    mass?: number;

    /**
     * The number of observations available for the OD of the object.
     */
    obsAvailable?: number;

    /**
     * The number of observations accepted for the OD of the object.
     */
    obsUsed?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by state vector source to indicate the target
     * onorbit object of this state vector. This may be an internal identifier and not
     * necessarily map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Type of partial derivatives used (ANALYTIC, FULL NUM, or FAST NUM).
     */
    partials?: string;

    /**
     * The pedigree of state vector, or methods used for its generation to include
     * state update/orbit determination, propagation from another state, or a state
     * from a calibration satellite (e.g. ORBIT_UPDATE, PROPAGATION, CALIBRATION,
     * CONJUNCTION, FLIGHT_PLAN).
     */
    pedigree?: string;

    /**
     * Polar Wander Motion X (arc seconds).
     */
    polarMotionX?: number;

    /**
     * Polar Wander Motion Y (arc seconds).
     */
    polarMotionY?: number;

    /**
     * One sigma position uncertainty, in kilometers.
     */
    posUnc?: number;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * The recommended OD time span calculated for the object, expressed in days.
     */
    recODSpan?: number;

    /**
     * The reference frame of the cartesian orbital states. If the referenceFrame is
     * null it is assumed to be J2000.
     */
    referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

    /**
     * The percentage of residuals accepted in the OD of the object.
     */
    residualsAcc?: number;

    /**
     * Epoch revolution number.
     */
    revNo?: number;

    /**
     * The Weighted Root Mean Squared (RMS) of the differential correction on the
     * target object that produced this vector. WRMS is a quality indicator of the
     * state vector update, with a value of 1.00 being optimal. WRMS applies to Batch
     * Least Squares (BLS) processes.
     */
    rms?: number;

    /**
     * Satellite/Catalog number of the target OnOrbit object.
     */
    satNo?: number;

    /**
     * Array containing the standard deviation of error in target object position, U, V
     * and W direction respectively (km).
     */
    sigmaPosUVW?: Array<number>;

    /**
     * Array containing the standard deviation of error in target object velocity, U, V
     * and W direction respectively (km/sec).
     */
    sigmaVelUVW?: Array<number>;

    /**
     * Average solar flux geomagnetic index.
     */
    solarFluxAPAvg?: number;

    /**
     * F10 (10.7 cm) solar flux value.
     */
    solarFluxF10?: number;

    /**
     * F10 (10.7 cm) solar flux 81-day average value.
     */
    solarFluxF10Avg?: number;

    /**
     * Boolean indicating use of solar radiation pressure perturbations for this
     * vector.
     */
    solarRadPress?: boolean;

    /**
     * Area-to-mass ratio coefficient for solar radiation pressure.
     */
    solarRadPressCoeff?: number;

    /**
     * Boolean indicating use of solid earth tide perturbations for this vector.
     */
    solidEarthTides?: boolean;

    /**
     * Optional array of UDL data (observation) UUIDs used to build this state vector.
     * See the associated sourcedDataTypes array for the specific types of observations
     * for the positionally corresponding UUIDs in this array (the two arrays must
     * match in size).
     */
    sourcedData?: Array<string>;

    /**
     * Optional array of UDL observation data types used to build this state vector
     * (e.g. EO, RADAR, RF, DOA). See the associated sourcedData array for the specific
     * UUIDs of observations for the positionally corresponding data types in this
     * array (the two arrays must match in size).
     */
    sourcedDataTypes?: Array<'EO' | 'RADAR' | 'RF' | 'DOA' | 'ELSET' | 'SV'>;

    /**
     * The effective area of the object exposed to solar radiation pressure, expressed
     * in meters^2.
     */
    srpArea?: number;

    /**
     * Integrator step mode (AUTO, TIME, or S).
     */
    stepMode?: string;

    /**
     * Initial integration step size (seconds).
     */
    stepSize?: number;

    /**
     * Initial step size selection (AUTO or MANUAL).
     */
    stepSizeSelection?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * TAI (Temps Atomique International) minus UTC (Universal Time Coordinates) offset
     * in seconds.
     */
    taiUtc?: number;

    /**
     * Model parameter value for thrust acceleration (m/s2).
     */
    thrustAccel?: number;

    /**
     * The number of sensor tracks available for the OD of the object.
     */
    tracksAvail?: number;

    /**
     * The number of sensor tracks accepted for the OD of the object.
     */
    tracksUsed?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * Boolean indicating this state vector was unable to be correlated to a known
     * object. This flag should only be set to true by data providers after an attempt
     * to correlate to an OnOrbit object was made and failed. If unable to correlate,
     * the 'origObjectId' field may be populated with an internal data provider
     * specific identifier.
     */
    uct?: boolean;

    /**
     * Rate of change of UT1 (milliseconds/day) - first derivative of ut1Utc.
     */
    ut1Rate?: number;

    /**
     * Universal Time-1 (UT1) minus UTC offset, in seconds.
     */
    ut1Utc?: number;

    /**
     * One sigma velocity uncertainty, in kilometers/second.
     */
    velUnc?: number;

    /**
     * Cartesian X acceleration of target, in kilometers/second^2, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xaccel?: number;

    /**
     * Cartesian X position of the target, in kilometers, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xpos?: number;

    /**
     * Cartesian X position of the target, in kilometers, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xposAlt1?: number;

    /**
     * Cartesian X position of the target, in kilometers, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xposAlt2?: number;

    /**
     * Cartesian X velocity of target, in kilometers/second, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xvel?: number;

    /**
     * Cartesian X velocity of the target, in kilometers/second, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xvelAlt1?: number;

    /**
     * Cartesian X velocity of the target, in kilometers/second, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    xvelAlt2?: number;

    /**
     * Cartesian Y acceleration of target, in kilometers/second^2, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    yaccel?: number;

    /**
     * Cartesian Y position of the target, in kilometers, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    ypos?: number;

    /**
     * Cartesian Y position of the target, in kilometers, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yposAlt1?: number;

    /**
     * Cartesian Y position of the target, in kilometers, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yposAlt2?: number;

    /**
     * Cartesian Y velocity of target, in kilometers/second, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    yvel?: number;

    /**
     * Cartesian Y velocity of the target, in kilometers/second, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yvelAlt1?: number;

    /**
     * Cartesian Y velocity of the target, in kilometers/second, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    yvelAlt2?: number;

    /**
     * Cartesian Z acceleration of target, in kilometers/second^2, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zaccel?: number;

    /**
     * Cartesian Z position of the target, in kilometers, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zpos?: number;

    /**
     * Cartesian Z position of the target, in kilometers, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zposAlt1?: number;

    /**
     * Cartesian Z position of the target, in kilometers, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zposAlt2?: number;

    /**
     * Cartesian Z velocity of target, in kilometers/second, in the specified
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zvel?: number;

    /**
     * Cartesian Z velocity of the target, in kilometers/second, in the specified
     * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zvelAlt1?: number;

    /**
     * Cartesian Z velocity of the target, in kilometers/second, in the specified
     * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
     * allow a data source to provide an equivalent vector in a different cartesian
     * frame than the primary vector.
     */
    zvelAlt2?: number;
  }
}

export interface ConjunctionCreateBulkParams {
  body: Array<ConjunctionCreateBulkParams.Body>;
}

export namespace ConjunctionCreateBulkParams {
  /**
   * Stores the results of a particular Conjunction Assessment (CA) run.
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
     * Source of the data.
     */
    source: string;

    /**
     * Time of closest approach (TCA) in UTC.
     */
    tca: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Commander's critical information requirements notes.
     */
    ccir?: string;

    /**
     * The value of the primary (object1) Area times the drag coefficient over the
     * object Mass, expressed in m^2/kg, used for propagation of the primary state
     * vector and covariance to TCA.
     */
    cdAoM1?: number;

    /**
     * The value of the secondary (object2) Area times the drag coefficient over the
     * object Mass, expressed in m^2/kg, used for propagation of the primary state
     * vector and covariance to TCA.
     */
    cdAoM2?: number;

    /**
     * Probability of Collision is the probability (denoted p, where 0.0<=p<=1.0), that
     * Object1 and Object2 will collide.
     */
    collisionProb?: number;

    /**
     * The method that was used to calculate the collision probability, ex.
     * FOSTER-1992.
     */
    collisionProbMethod?: string;

    /**
     * Additional notes from data providers.
     */
    comments?: string;

    /**
     * Emergency comments.
     */
    concernNotes?: string;

    /**
     * The value of the primary (object1) Area times the solar radiation pressure
     * coefficient over the object Mass, expressed in m^2/kg, used for propagation of
     * the primary state vector and covariance to TCA. This parameter is sometimes
     * referred to as AGOM.
     */
    crAoM1?: number;

    /**
     * The value of the secondary (object2) Area times the solar radiation pressure
     * coefficient over the object Mass, expressed in m^2/kg, used for propagation of
     * the primary state vector and covariance to TCA. This parameter is sometimes
     * referred to as AGOM.
     */
    crAoM2?: number;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * The filename of the primary (object1) ephemeris used in the screening, if
     * applicable.
     */
    ephemName1?: string;

    /**
     * The filename of the secondary (object2) ephemeris used in the screening, if
     * applicable.
     */
    ephemName2?: string;

    /**
     * Unique identifier of the parent Ephemeris Set of the primary (object1) ephemeris
     * used in the screening, if applicable.
     */
    esId1?: string;

    /**
     * Unique identifier of the parent Ephemeris Set of the secondary (object2)
     * ephemeris used in the screening, if applicable.
     */
    esId2?: string;

    /**
     * Optional source-provided identifier for this conjunction event. In the case
     * where multiple conjunction records are submitted for the same event, this field
     * can be used to tie them together to the same event.
     */
    eventId?: string;

    /**
     * Optional ID of the UDL State Vector at TCA of the primary object. When
     * performing a create, this id will be ignored in favor of the UDL generated id of
     * the stateVector1.
     */
    idStateVector1?: string;

    /**
     * Optional ID of the UDL State Vector at TCA of the secondary object. When
     * performing a create, this id will be ignored in favor of the UDL generated id of
     * the stateVector2.
     */
    idStateVector2?: string;

    /**
     * Used for probability of collision calculation, not Warning/Alert Threshold
     * notifications.
     */
    largeCovWarning?: boolean;

    /**
     * Used for probability of collision calculation, not Warning/Alert Threshold
     * notifications.
     */
    largeRelPosWarning?: boolean;

    /**
     * Time of last positive metric observation of the primary satellite.
     */
    lastObTime1?: string;

    /**
     * Time of last positive metric observation of the secondary satellite.
     */
    lastObTime2?: string;

    /**
     * Spacecraft name(s) for which the Collision message is provided.
     */
    messageFor?: string;

    /**
     * JMS provided message ID link.
     */
    messageId?: string;

    /**
     * Distance between objects at Time of Closest Approach (TCA) in meters.
     */
    missDistance?: number;

    /**
     * Optional place holder for an OnOrbit ID that does not exist in UDL.
     */
    origIdOnOrbit1?: string;

    /**
     * Optional place holder for an OnOrbit ID that does not exist in UDL.
     */
    origIdOnOrbit2?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Creating agency or owner/operator (may be different than provider who submitted
     * the conjunction message).
     */
    originator?: string;

    /**
     * Flag indicating if owner was contacted.
     */
    ownerContacted?: boolean;

    /**
     * Penetration Level Sigma.
     */
    penetrationLevelSigma?: number;

    /**
     * Link to filename associated with JMS record.
     */
    rawFileURI?: string;

    /**
     * Distance between objects along Normal vector in meters.
     */
    relPosN?: number;

    /**
     * Distance between objects along Radial Vector at Time of Closest Approach in
     * meters.
     */
    relPosR?: number;

    /**
     * Distance between objects along Tangential Vector in meters.
     */
    relPosT?: number;

    /**
     * Closing velocity magnitude (relative speed) at Time of Closest Approach in
     * meters/sec.
     */
    relVelMag?: number;

    /**
     * Closing velocity between objects along Normal Vector in meters/sec.
     */
    relVelN?: number;

    /**
     * Closing velocity between objects along Radial Vector at Time of Closest Approach
     * in meters/sec.
     */
    relVelR?: number;

    /**
     * Closing velocity between objects along Tangential Vector in meters/sec.
     */
    relVelT?: number;

    /**
     * Satellite/catalog number of the target on-orbit primary object.
     */
    satNo1?: number;

    /**
     * Satellite/catalog number of the target on-orbit secondary object.
     */
    satNo2?: number;

    /**
     * The start time in UTC of the screening period for the conjunction assessment.
     */
    screenEntryTime?: string;

    /**
     * The stop time in UTC of the screening period for the conjunction assessment.
     */
    screenExitTime?: string;

    /**
     * Component size of screen in X component of RTN (Radial, Transverse and Normal)
     * frame in meters.
     */
    screenVolumeX?: number;

    /**
     * Component size of screen in Y component of RTN (Radial, Transverse and Normal)
     * frame in meters.
     */
    screenVolumeY?: number;

    /**
     * Component size of screen in Z component of RTN (Radial, Transverse and Normal)
     * frame in meters.
     */
    screenVolumeZ?: number;

    /**
     * Used for probability of collision calculation, not Warning/Alert Threshold
     * notifications.
     */
    smallCovWarning?: boolean;

    /**
     * Used for probability of collision calculation, not Warning/Alert Threshold
     * notifications.
     */
    smallRelVelWarning?: boolean;

    /**
     * Flag indicating if State department was notified.
     */
    stateDeptNotified?: boolean;

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
    stateVector1?: Body.StateVector1;

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
    stateVector2?: Body.StateVector2;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * The primary (object1) acceleration, expressed in m/s^2, due to in-track thrust
     * used to propagate the primary state vector and covariance to TCA.
     */
    thrustAccel1?: number;

    /**
     * The secondary (object2) acceleration, expressed in m/s^2, due to in-track thrust
     * used to propagate the primary state vector and covariance to TCA.
     */
    thrustAccel2?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * The type of data represented in this conjunction record (e.g. CONJUNCTION,
     * CARA-WORKLIST, etc.). If type is null the record is assumed to be a Conjunction.
     */
    type?: string;

    /**
     * Used for probability of collision calculation, not Warning/Alert Threshold
     * notifications.
     */
    uvwWarn?: boolean;

    /**
     * The time at which the secondary (object2) enters the screening volume, in ISO
     * 8601 UTC format with microsecond precision.
     */
    volEntryTime?: string;

    /**
     * The time at which the secondary (object2) exits the screening volume, in ISO
     * 8601 UTC format with microsecond precision.
     */
    volExitTime?: string;

    /**
     * The shape (BOX, ELLIPSOID) of the screening volume.
     */
    volShape?: string;
  }

  export namespace Body {
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
    export interface StateVector1 {
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
       * Time of validity for state vector in ISO 8601 UTC datetime format, with
       * microsecond precision.
       */
      epoch: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * The actual time span used for the OD of the object, expressed in days.
       */
      actualODSpan?: number;

      /**
       * Optional algorithm used to produce this record.
       */
      algorithm?: string;

      /**
       * The reference frame of the alternate1 (Alt1) cartesian orbital state.
       */
      alt1ReferenceFrame?: string;

      /**
       * The reference frame of the alternate2 (Alt2) cartesian orbital state.
       */
      alt2ReferenceFrame?: string;

      /**
       * The actual area of the object at it's largest cross-section, expressed in
       * meters^2.
       */
      area?: number;

      /**
       * First derivative of drag/ballistic coefficient (m2/kg-s).
       */
      bDot?: number;

      /**
       * Model parameter value for center of mass offset (m).
       */
      cmOffset?: number;

      /**
       * Covariance matrix, in kilometer and second based units, in the specified
       * covReferenceFrame. If the covReferenceFrame is null it is assumed to be J2000.
       * The array values (1-21) represent the lower triangular half of the
       * position-velocity covariance matrix. The size of the covariance matrix is
       * dynamic, depending on whether the covariance for position only or position &
       * velocity. The covariance elements are position dependent within the array with
       * values ordered as follows:
       *
       * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR&nbsp;&nbsp;
       *
       * x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
       *
       * y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3
       *
       * z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;6
       *
       * x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;&nbsp;10
       *
       * y'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11&nbsp;&nbsp;12&nbsp;&nbsp;13&nbsp;&nbsp;14&nbsp;&nbsp;15
       *
       * z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;17&nbsp;&nbsp;18&nbsp;&nbsp;19&nbsp;&nbsp;20&nbsp;&nbsp;&nbsp;21&nbsp;
       *
       * The cov array should contain only the lower left triangle values from top left
       * down to bottom right, in order.
       *
       * If additional covariance terms are included for DRAG, SRP, and/or THRUST, the
       * matrix can be extended with the following order of elements:
       *
       * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR
       *
       * DRG&nbsp;&nbsp;&nbsp;22&nbsp;&nbsp;23&nbsp;&nbsp;24&nbsp;&nbsp;25&nbsp;&nbsp;26&nbsp;&nbsp;&nbsp;27&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28&nbsp;&nbsp;
       *
       * SRP&nbsp;&nbsp;&nbsp;29&nbsp;&nbsp;30&nbsp;&nbsp;31&nbsp;&nbsp;32&nbsp;&nbsp;33&nbsp;&nbsp;&nbsp;34&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36&nbsp;&nbsp;
       *
       * THR&nbsp;&nbsp;&nbsp;37&nbsp;&nbsp;38&nbsp;&nbsp;39&nbsp;&nbsp;40&nbsp;&nbsp;41&nbsp;&nbsp;&nbsp;42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45&nbsp;
       */
      cov?: Array<number>;

      /**
       * The method used to generate the covariance during the orbit determination (OD)
       * that produced the state vector, or whether an arbitrary, non-calculated default
       * value was used (CALCULATED, DEFAULT).
       */
      covMethod?: string;

      /**
       * The reference frame of the covariance matrix elements. If the covReferenceFrame
       * is null it is assumed to be J2000.
       */
      covReferenceFrame?: 'J2000' | 'UVW' | 'EFG/TDR' | 'TEME' | 'GCRF';

      /**
       * Optional source-provided and searchable metadata or descriptor of the data.
       */
      descriptor?: string;

      /**
       * The effective area of the object exposed to atmospheric drag, expressed in
       * meters^2.
       */
      dragArea?: number;

      /**
       * Area-to-mass ratio coefficient for atmospheric ballistic drag (m2/kg).
       */
      dragCoeff?: number;

      /**
       * The Drag Model used for this vector (e.g. HARRIS-PRIESTER, JAC70, JBH09, MSIS90,
       * NONE, etc.).
       */
      dragModel?: string;

      /**
       * Model parameter value for energy dissipation rate (EDR) (w/kg).
       */
      edr?: number;

      /**
       * The covariance matrix values represent the lower triangular half of the
       * covariance matrix in terms of equinoctial elements.&nbsp; The size of the
       * covariance matrix is dynamic.&nbsp; The values are outputted in order across
       * each row, i.e.:
       *
       * 1&nbsp;&nbsp; 2&nbsp;&nbsp; 3&nbsp;&nbsp; 4&nbsp;&nbsp; 5
       *
       * 6&nbsp;&nbsp; 7&nbsp;&nbsp; 8&nbsp;&nbsp; 9&nbsp; 10
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * 51&nbsp; 52&nbsp; 53&nbsp; 54&nbsp; 55
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * The ordering of values is as follows:
       *
       * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Af&nbsp;&nbsp;
       * Ag&nbsp;&nbsp; L&nbsp;&nbsp;&nbsp; N&nbsp;&nbsp; Chi&nbsp; Psi&nbsp;&nbsp;
       * B&nbsp;&nbsp; BDOT AGOM&nbsp; T&nbsp;&nbsp; C1&nbsp;&nbsp; C2&nbsp; ...
       *
       * Af&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1
       *
       * Ag&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp; 3
       *
       * L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       * 4&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp;&nbsp; 6
       *
       * N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       * 7&nbsp;&nbsp;&nbsp; 8&nbsp;&nbsp;&nbsp; 9&nbsp;&nbsp; 10
       *
       * Chi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11&nbsp;&nbsp; 12&nbsp;&nbsp;
       * 13&nbsp;&nbsp; 14&nbsp;&nbsp; 15
       *
       * Psi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16&nbsp;&nbsp; 17&nbsp;&nbsp;
       * 18&nbsp;&nbsp; 19&nbsp;&nbsp; 20&nbsp;&nbsp; 21
       *
       * B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22&nbsp;&nbsp;
       * 23&nbsp;&nbsp; 24 &nbsp;&nbsp;25&nbsp;&nbsp; 26&nbsp;&nbsp; 27&nbsp;&nbsp; 28
       *
       * BDOT&nbsp;&nbsp; 29&nbsp;&nbsp; 30&nbsp;&nbsp; 31&nbsp;&nbsp; 32&nbsp;&nbsp;
       * 33&nbsp;&nbsp; 34&nbsp;&nbsp; 35&nbsp;&nbsp; 36
       *
       * AGOM&nbsp; 37&nbsp;&nbsp; 38&nbsp;&nbsp; 39&nbsp;&nbsp; 40&nbsp;&nbsp;
       * 41&nbsp;&nbsp; 42&nbsp;&nbsp; 43&nbsp;&nbsp; 44&nbsp;&nbsp; 45
       *
       * T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 46&nbsp;&nbsp;
       * 47&nbsp;&nbsp; 48&nbsp;&nbsp; 49&nbsp;&nbsp; 50&nbsp;&nbsp; 51&nbsp;&nbsp;
       * 52&nbsp;&nbsp; 53&nbsp;&nbsp; 54&nbsp;&nbsp; 55
       *
       * C1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 56&nbsp;&nbsp; 57&nbsp;&nbsp;
       * 58&nbsp;&nbsp; 59&nbsp;&nbsp; 60&nbsp;&nbsp; 61&nbsp;&nbsp; 62&nbsp;&nbsp;
       * 63&nbsp;&nbsp; 64&nbsp;&nbsp; 65&nbsp;&nbsp; 66
       *
       * C2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 67&nbsp;&nbsp; 68&nbsp;&nbsp;
       * 69&nbsp;&nbsp; 70&nbsp;&nbsp; 71&nbsp; &nbsp;72&nbsp;&nbsp; 73&nbsp;&nbsp;
       * 74&nbsp;&nbsp; 75&nbsp;&nbsp; 76&nbsp;&nbsp; 77&nbsp;&nbsp; 78
       *
       * :
       *
       * :
       *
       * where C1, C2, etc, are the "consider parameters" that may be added to the
       * covariance matrix.&nbsp; The covariance matrix will be as large as the last
       * element/model parameter needed.&nbsp; In other words, if the DC solved for all 6
       * elements plus AGOM, the covariance matrix will be 9x9 (and the rows for B and
       * BDOT will be all zeros).&nbsp; If the covariance matrix is unavailable, the size
       * will be set to 0x0, and no data will follow.&nbsp; The cov field should contain
       * only the lower left triangle values from top left down to bottom right, in
       * order.
       */
      eqCov?: Array<number>;

      /**
       * Integrator error control.
       */
      errorControl?: number;

      /**
       * Boolean indicating use of fixed step size for this vector.
       */
      fixedStep?: boolean;

      /**
       * Geopotential model used for this vector (e.g. EGM-96, WGS-84, WGS-72, JGM-2, or
       * GEM-T3), including mm degree zonals, nn degree/order tesserals. E.g. EGM-96
       * 24Z,24T.
       */
      geopotentialModel?: string;

      /**
       * Number of terms used in the IAU 1980 nutation model (4, 50, or 106).
       */
      iau1980Terms?: number;

      /**
       * Unique identifier of the OD solution record that produced this state vector.
       * This ID can be used to obtain additional information on an OrbitDetermination
       * object using the 'get by ID' operation (e.g. /udl/orbitdetermination/{id}). For
       * example, the OrbitDetermination with idOrbitDetermination = abc would be queries
       * as /udl/orbitdetermination/abc.
       */
      idOrbitDetermination?: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      idStateVector?: string;

      /**
       * Integrator Mode.
       */
      integratorMode?: string;

      /**
       * Boolean indicating use of in-track thrust perturbations for this vector.
       */
      inTrackThrust?: boolean;

      /**
       * The end of the time interval containing the time of the last accepted
       * observation, in ISO 8601 UTC format with microsecond precision. For an exact
       * observation time, the firstObTime and lastObTime are the same.
       */
      lastObEnd?: string;

      /**
       * The start of the time interval containing the time of the last accepted
       * observation, in ISO 8601 UTC format with microsecond precision. For an exact
       * observation time, the firstObTime and lastObTime are the same.
       */
      lastObStart?: string;

      /**
       * Time of the next leap second after epoch in ISO 8601 UTC time. If the next leap
       * second is not known, the time of the previous leap second is used.
       */
      leapSecondTime?: string;

      /**
       * Boolean indicating use of lunar/solar perturbations for this vector.
       */
      lunarSolar?: boolean;

      /**
       * The mass of the object, in kilograms.
       */
      mass?: number;

      /**
       * The number of observations available for the OD of the object.
       */
      obsAvailable?: number;

      /**
       * The number of observations accepted for the OD of the object.
       */
      obsUsed?: number;

      /**
       * Originating system or organization which produced the data, if different from
       * the source. The origin may be different than the source if the source was a
       * mediating system which forwarded the data on behalf of the origin system. If
       * null, the source may be assumed to be the origin.
       */
      origin?: string;

      /**
       * Optional identifier provided by state vector source to indicate the target
       * onorbit object of this state vector. This may be an internal identifier and not
       * necessarily map to a valid satellite number.
       */
      origObjectId?: string;

      /**
       * Type of partial derivatives used (ANALYTIC, FULL NUM, or FAST NUM).
       */
      partials?: string;

      /**
       * The pedigree of state vector, or methods used for its generation to include
       * state update/orbit determination, propagation from another state, or a state
       * from a calibration satellite (e.g. ORBIT_UPDATE, PROPAGATION, CALIBRATION,
       * CONJUNCTION, FLIGHT_PLAN).
       */
      pedigree?: string;

      /**
       * Polar Wander Motion X (arc seconds).
       */
      polarMotionX?: number;

      /**
       * Polar Wander Motion Y (arc seconds).
       */
      polarMotionY?: number;

      /**
       * One sigma position uncertainty, in kilometers.
       */
      posUnc?: number;

      /**
       * Optional URI location in the document repository of the raw file parsed by the
       * system to produce this record. To download the raw file, prepend
       * https://udl-hostname/scs/download?id= to this value.
       */
      rawFileURI?: string;

      /**
       * The recommended OD time span calculated for the object, expressed in days.
       */
      recODSpan?: number;

      /**
       * The reference frame of the cartesian orbital states. If the referenceFrame is
       * null it is assumed to be J2000.
       */
      referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

      /**
       * The percentage of residuals accepted in the OD of the object.
       */
      residualsAcc?: number;

      /**
       * Epoch revolution number.
       */
      revNo?: number;

      /**
       * The Weighted Root Mean Squared (RMS) of the differential correction on the
       * target object that produced this vector. WRMS is a quality indicator of the
       * state vector update, with a value of 1.00 being optimal. WRMS applies to Batch
       * Least Squares (BLS) processes.
       */
      rms?: number;

      /**
       * Satellite/Catalog number of the target OnOrbit object.
       */
      satNo?: number;

      /**
       * Array containing the standard deviation of error in target object position, U, V
       * and W direction respectively (km).
       */
      sigmaPosUVW?: Array<number>;

      /**
       * Array containing the standard deviation of error in target object velocity, U, V
       * and W direction respectively (km/sec).
       */
      sigmaVelUVW?: Array<number>;

      /**
       * Average solar flux geomagnetic index.
       */
      solarFluxAPAvg?: number;

      /**
       * F10 (10.7 cm) solar flux value.
       */
      solarFluxF10?: number;

      /**
       * F10 (10.7 cm) solar flux 81-day average value.
       */
      solarFluxF10Avg?: number;

      /**
       * Boolean indicating use of solar radiation pressure perturbations for this
       * vector.
       */
      solarRadPress?: boolean;

      /**
       * Area-to-mass ratio coefficient for solar radiation pressure.
       */
      solarRadPressCoeff?: number;

      /**
       * Boolean indicating use of solid earth tide perturbations for this vector.
       */
      solidEarthTides?: boolean;

      /**
       * Optional array of UDL data (observation) UUIDs used to build this state vector.
       * See the associated sourcedDataTypes array for the specific types of observations
       * for the positionally corresponding UUIDs in this array (the two arrays must
       * match in size).
       */
      sourcedData?: Array<string>;

      /**
       * Optional array of UDL observation data types used to build this state vector
       * (e.g. EO, RADAR, RF, DOA). See the associated sourcedData array for the specific
       * UUIDs of observations for the positionally corresponding data types in this
       * array (the two arrays must match in size).
       */
      sourcedDataTypes?: Array<'EO' | 'RADAR' | 'RF' | 'DOA' | 'ELSET' | 'SV'>;

      /**
       * The effective area of the object exposed to solar radiation pressure, expressed
       * in meters^2.
       */
      srpArea?: number;

      /**
       * Integrator step mode (AUTO, TIME, or S).
       */
      stepMode?: string;

      /**
       * Initial integration step size (seconds).
       */
      stepSize?: number;

      /**
       * Initial step size selection (AUTO or MANUAL).
       */
      stepSizeSelection?: string;

      /**
       * Optional array of provider/source specific tags for this data, where each
       * element is no longer than 32 characters, used for implementing data owner
       * conditional access controls to restrict access to the data. Should be left null
       * by data providers unless conditional access controls are coordinated with the
       * UDL team.
       */
      tags?: Array<string>;

      /**
       * TAI (Temps Atomique International) minus UTC (Universal Time Coordinates) offset
       * in seconds.
       */
      taiUtc?: number;

      /**
       * Model parameter value for thrust acceleration (m/s2).
       */
      thrustAccel?: number;

      /**
       * The number of sensor tracks available for the OD of the object.
       */
      tracksAvail?: number;

      /**
       * The number of sensor tracks accepted for the OD of the object.
       */
      tracksUsed?: number;

      /**
       * Optional identifier to track a commercial or marketplace transaction executed to
       * produce this data.
       */
      transactionId?: string;

      /**
       * Boolean indicating this state vector was unable to be correlated to a known
       * object. This flag should only be set to true by data providers after an attempt
       * to correlate to an OnOrbit object was made and failed. If unable to correlate,
       * the 'origObjectId' field may be populated with an internal data provider
       * specific identifier.
       */
      uct?: boolean;

      /**
       * Rate of change of UT1 (milliseconds/day) - first derivative of ut1Utc.
       */
      ut1Rate?: number;

      /**
       * Universal Time-1 (UT1) minus UTC offset, in seconds.
       */
      ut1Utc?: number;

      /**
       * One sigma velocity uncertainty, in kilometers/second.
       */
      velUnc?: number;

      /**
       * Cartesian X acceleration of target, in kilometers/second^2, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      xaccel?: number;

      /**
       * Cartesian X position of the target, in kilometers, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      xpos?: number;

      /**
       * Cartesian X position of the target, in kilometers, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xposAlt1?: number;

      /**
       * Cartesian X position of the target, in kilometers, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xposAlt2?: number;

      /**
       * Cartesian X velocity of target, in kilometers/second, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      xvel?: number;

      /**
       * Cartesian X velocity of the target, in kilometers/second, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xvelAlt1?: number;

      /**
       * Cartesian X velocity of the target, in kilometers/second, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xvelAlt2?: number;

      /**
       * Cartesian Y acceleration of target, in kilometers/second^2, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      yaccel?: number;

      /**
       * Cartesian Y position of the target, in kilometers, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      ypos?: number;

      /**
       * Cartesian Y position of the target, in kilometers, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yposAlt1?: number;

      /**
       * Cartesian Y position of the target, in kilometers, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yposAlt2?: number;

      /**
       * Cartesian Y velocity of target, in kilometers/second, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      yvel?: number;

      /**
       * Cartesian Y velocity of the target, in kilometers/second, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yvelAlt1?: number;

      /**
       * Cartesian Y velocity of the target, in kilometers/second, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yvelAlt2?: number;

      /**
       * Cartesian Z acceleration of target, in kilometers/second^2, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      zaccel?: number;

      /**
       * Cartesian Z position of the target, in kilometers, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      zpos?: number;

      /**
       * Cartesian Z position of the target, in kilometers, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zposAlt1?: number;

      /**
       * Cartesian Z position of the target, in kilometers, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zposAlt2?: number;

      /**
       * Cartesian Z velocity of target, in kilometers/second, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      zvel?: number;

      /**
       * Cartesian Z velocity of the target, in kilometers/second, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zvelAlt1?: number;

      /**
       * Cartesian Z velocity of the target, in kilometers/second, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zvelAlt2?: number;
    }

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
    export interface StateVector2 {
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
       * Time of validity for state vector in ISO 8601 UTC datetime format, with
       * microsecond precision.
       */
      epoch: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * The actual time span used for the OD of the object, expressed in days.
       */
      actualODSpan?: number;

      /**
       * Optional algorithm used to produce this record.
       */
      algorithm?: string;

      /**
       * The reference frame of the alternate1 (Alt1) cartesian orbital state.
       */
      alt1ReferenceFrame?: string;

      /**
       * The reference frame of the alternate2 (Alt2) cartesian orbital state.
       */
      alt2ReferenceFrame?: string;

      /**
       * The actual area of the object at it's largest cross-section, expressed in
       * meters^2.
       */
      area?: number;

      /**
       * First derivative of drag/ballistic coefficient (m2/kg-s).
       */
      bDot?: number;

      /**
       * Model parameter value for center of mass offset (m).
       */
      cmOffset?: number;

      /**
       * Covariance matrix, in kilometer and second based units, in the specified
       * covReferenceFrame. If the covReferenceFrame is null it is assumed to be J2000.
       * The array values (1-21) represent the lower triangular half of the
       * position-velocity covariance matrix. The size of the covariance matrix is
       * dynamic, depending on whether the covariance for position only or position &
       * velocity. The covariance elements are position dependent within the array with
       * values ordered as follows:
       *
       * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR&nbsp;&nbsp;
       *
       * x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
       *
       * y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3
       *
       * z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;6
       *
       * x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;&nbsp;10
       *
       * y'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11&nbsp;&nbsp;12&nbsp;&nbsp;13&nbsp;&nbsp;14&nbsp;&nbsp;15
       *
       * z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;17&nbsp;&nbsp;18&nbsp;&nbsp;19&nbsp;&nbsp;20&nbsp;&nbsp;&nbsp;21&nbsp;
       *
       * The cov array should contain only the lower left triangle values from top left
       * down to bottom right, in order.
       *
       * If additional covariance terms are included for DRAG, SRP, and/or THRUST, the
       * matrix can be extended with the following order of elements:
       *
       * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR
       *
       * DRG&nbsp;&nbsp;&nbsp;22&nbsp;&nbsp;23&nbsp;&nbsp;24&nbsp;&nbsp;25&nbsp;&nbsp;26&nbsp;&nbsp;&nbsp;27&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28&nbsp;&nbsp;
       *
       * SRP&nbsp;&nbsp;&nbsp;29&nbsp;&nbsp;30&nbsp;&nbsp;31&nbsp;&nbsp;32&nbsp;&nbsp;33&nbsp;&nbsp;&nbsp;34&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36&nbsp;&nbsp;
       *
       * THR&nbsp;&nbsp;&nbsp;37&nbsp;&nbsp;38&nbsp;&nbsp;39&nbsp;&nbsp;40&nbsp;&nbsp;41&nbsp;&nbsp;&nbsp;42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45&nbsp;
       */
      cov?: Array<number>;

      /**
       * The method used to generate the covariance during the orbit determination (OD)
       * that produced the state vector, or whether an arbitrary, non-calculated default
       * value was used (CALCULATED, DEFAULT).
       */
      covMethod?: string;

      /**
       * The reference frame of the covariance matrix elements. If the covReferenceFrame
       * is null it is assumed to be J2000.
       */
      covReferenceFrame?: 'J2000' | 'UVW' | 'EFG/TDR' | 'TEME' | 'GCRF';

      /**
       * Optional source-provided and searchable metadata or descriptor of the data.
       */
      descriptor?: string;

      /**
       * The effective area of the object exposed to atmospheric drag, expressed in
       * meters^2.
       */
      dragArea?: number;

      /**
       * Area-to-mass ratio coefficient for atmospheric ballistic drag (m2/kg).
       */
      dragCoeff?: number;

      /**
       * The Drag Model used for this vector (e.g. HARRIS-PRIESTER, JAC70, JBH09, MSIS90,
       * NONE, etc.).
       */
      dragModel?: string;

      /**
       * Model parameter value for energy dissipation rate (EDR) (w/kg).
       */
      edr?: number;

      /**
       * The covariance matrix values represent the lower triangular half of the
       * covariance matrix in terms of equinoctial elements.&nbsp; The size of the
       * covariance matrix is dynamic.&nbsp; The values are outputted in order across
       * each row, i.e.:
       *
       * 1&nbsp;&nbsp; 2&nbsp;&nbsp; 3&nbsp;&nbsp; 4&nbsp;&nbsp; 5
       *
       * 6&nbsp;&nbsp; 7&nbsp;&nbsp; 8&nbsp;&nbsp; 9&nbsp; 10
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * 51&nbsp; 52&nbsp; 53&nbsp; 54&nbsp; 55
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * The ordering of values is as follows:
       *
       * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Af&nbsp;&nbsp;
       * Ag&nbsp;&nbsp; L&nbsp;&nbsp;&nbsp; N&nbsp;&nbsp; Chi&nbsp; Psi&nbsp;&nbsp;
       * B&nbsp;&nbsp; BDOT AGOM&nbsp; T&nbsp;&nbsp; C1&nbsp;&nbsp; C2&nbsp; ...
       *
       * Af&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1
       *
       * Ag&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp; 3
       *
       * L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       * 4&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp;&nbsp; 6
       *
       * N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       * 7&nbsp;&nbsp;&nbsp; 8&nbsp;&nbsp;&nbsp; 9&nbsp;&nbsp; 10
       *
       * Chi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11&nbsp;&nbsp; 12&nbsp;&nbsp;
       * 13&nbsp;&nbsp; 14&nbsp;&nbsp; 15
       *
       * Psi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16&nbsp;&nbsp; 17&nbsp;&nbsp;
       * 18&nbsp;&nbsp; 19&nbsp;&nbsp; 20&nbsp;&nbsp; 21
       *
       * B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22&nbsp;&nbsp;
       * 23&nbsp;&nbsp; 24 &nbsp;&nbsp;25&nbsp;&nbsp; 26&nbsp;&nbsp; 27&nbsp;&nbsp; 28
       *
       * BDOT&nbsp;&nbsp; 29&nbsp;&nbsp; 30&nbsp;&nbsp; 31&nbsp;&nbsp; 32&nbsp;&nbsp;
       * 33&nbsp;&nbsp; 34&nbsp;&nbsp; 35&nbsp;&nbsp; 36
       *
       * AGOM&nbsp; 37&nbsp;&nbsp; 38&nbsp;&nbsp; 39&nbsp;&nbsp; 40&nbsp;&nbsp;
       * 41&nbsp;&nbsp; 42&nbsp;&nbsp; 43&nbsp;&nbsp; 44&nbsp;&nbsp; 45
       *
       * T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 46&nbsp;&nbsp;
       * 47&nbsp;&nbsp; 48&nbsp;&nbsp; 49&nbsp;&nbsp; 50&nbsp;&nbsp; 51&nbsp;&nbsp;
       * 52&nbsp;&nbsp; 53&nbsp;&nbsp; 54&nbsp;&nbsp; 55
       *
       * C1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 56&nbsp;&nbsp; 57&nbsp;&nbsp;
       * 58&nbsp;&nbsp; 59&nbsp;&nbsp; 60&nbsp;&nbsp; 61&nbsp;&nbsp; 62&nbsp;&nbsp;
       * 63&nbsp;&nbsp; 64&nbsp;&nbsp; 65&nbsp;&nbsp; 66
       *
       * C2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 67&nbsp;&nbsp; 68&nbsp;&nbsp;
       * 69&nbsp;&nbsp; 70&nbsp;&nbsp; 71&nbsp; &nbsp;72&nbsp;&nbsp; 73&nbsp;&nbsp;
       * 74&nbsp;&nbsp; 75&nbsp;&nbsp; 76&nbsp;&nbsp; 77&nbsp;&nbsp; 78
       *
       * :
       *
       * :
       *
       * where C1, C2, etc, are the "consider parameters" that may be added to the
       * covariance matrix.&nbsp; The covariance matrix will be as large as the last
       * element/model parameter needed.&nbsp; In other words, if the DC solved for all 6
       * elements plus AGOM, the covariance matrix will be 9x9 (and the rows for B and
       * BDOT will be all zeros).&nbsp; If the covariance matrix is unavailable, the size
       * will be set to 0x0, and no data will follow.&nbsp; The cov field should contain
       * only the lower left triangle values from top left down to bottom right, in
       * order.
       */
      eqCov?: Array<number>;

      /**
       * Integrator error control.
       */
      errorControl?: number;

      /**
       * Boolean indicating use of fixed step size for this vector.
       */
      fixedStep?: boolean;

      /**
       * Geopotential model used for this vector (e.g. EGM-96, WGS-84, WGS-72, JGM-2, or
       * GEM-T3), including mm degree zonals, nn degree/order tesserals. E.g. EGM-96
       * 24Z,24T.
       */
      geopotentialModel?: string;

      /**
       * Number of terms used in the IAU 1980 nutation model (4, 50, or 106).
       */
      iau1980Terms?: number;

      /**
       * Unique identifier of the OD solution record that produced this state vector.
       * This ID can be used to obtain additional information on an OrbitDetermination
       * object using the 'get by ID' operation (e.g. /udl/orbitdetermination/{id}). For
       * example, the OrbitDetermination with idOrbitDetermination = abc would be queries
       * as /udl/orbitdetermination/abc.
       */
      idOrbitDetermination?: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      idStateVector?: string;

      /**
       * Integrator Mode.
       */
      integratorMode?: string;

      /**
       * Boolean indicating use of in-track thrust perturbations for this vector.
       */
      inTrackThrust?: boolean;

      /**
       * The end of the time interval containing the time of the last accepted
       * observation, in ISO 8601 UTC format with microsecond precision. For an exact
       * observation time, the firstObTime and lastObTime are the same.
       */
      lastObEnd?: string;

      /**
       * The start of the time interval containing the time of the last accepted
       * observation, in ISO 8601 UTC format with microsecond precision. For an exact
       * observation time, the firstObTime and lastObTime are the same.
       */
      lastObStart?: string;

      /**
       * Time of the next leap second after epoch in ISO 8601 UTC time. If the next leap
       * second is not known, the time of the previous leap second is used.
       */
      leapSecondTime?: string;

      /**
       * Boolean indicating use of lunar/solar perturbations for this vector.
       */
      lunarSolar?: boolean;

      /**
       * The mass of the object, in kilograms.
       */
      mass?: number;

      /**
       * The number of observations available for the OD of the object.
       */
      obsAvailable?: number;

      /**
       * The number of observations accepted for the OD of the object.
       */
      obsUsed?: number;

      /**
       * Originating system or organization which produced the data, if different from
       * the source. The origin may be different than the source if the source was a
       * mediating system which forwarded the data on behalf of the origin system. If
       * null, the source may be assumed to be the origin.
       */
      origin?: string;

      /**
       * Optional identifier provided by state vector source to indicate the target
       * onorbit object of this state vector. This may be an internal identifier and not
       * necessarily map to a valid satellite number.
       */
      origObjectId?: string;

      /**
       * Type of partial derivatives used (ANALYTIC, FULL NUM, or FAST NUM).
       */
      partials?: string;

      /**
       * The pedigree of state vector, or methods used for its generation to include
       * state update/orbit determination, propagation from another state, or a state
       * from a calibration satellite (e.g. ORBIT_UPDATE, PROPAGATION, CALIBRATION,
       * CONJUNCTION, FLIGHT_PLAN).
       */
      pedigree?: string;

      /**
       * Polar Wander Motion X (arc seconds).
       */
      polarMotionX?: number;

      /**
       * Polar Wander Motion Y (arc seconds).
       */
      polarMotionY?: number;

      /**
       * One sigma position uncertainty, in kilometers.
       */
      posUnc?: number;

      /**
       * Optional URI location in the document repository of the raw file parsed by the
       * system to produce this record. To download the raw file, prepend
       * https://udl-hostname/scs/download?id= to this value.
       */
      rawFileURI?: string;

      /**
       * The recommended OD time span calculated for the object, expressed in days.
       */
      recODSpan?: number;

      /**
       * The reference frame of the cartesian orbital states. If the referenceFrame is
       * null it is assumed to be J2000.
       */
      referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

      /**
       * The percentage of residuals accepted in the OD of the object.
       */
      residualsAcc?: number;

      /**
       * Epoch revolution number.
       */
      revNo?: number;

      /**
       * The Weighted Root Mean Squared (RMS) of the differential correction on the
       * target object that produced this vector. WRMS is a quality indicator of the
       * state vector update, with a value of 1.00 being optimal. WRMS applies to Batch
       * Least Squares (BLS) processes.
       */
      rms?: number;

      /**
       * Satellite/Catalog number of the target OnOrbit object.
       */
      satNo?: number;

      /**
       * Array containing the standard deviation of error in target object position, U, V
       * and W direction respectively (km).
       */
      sigmaPosUVW?: Array<number>;

      /**
       * Array containing the standard deviation of error in target object velocity, U, V
       * and W direction respectively (km/sec).
       */
      sigmaVelUVW?: Array<number>;

      /**
       * Average solar flux geomagnetic index.
       */
      solarFluxAPAvg?: number;

      /**
       * F10 (10.7 cm) solar flux value.
       */
      solarFluxF10?: number;

      /**
       * F10 (10.7 cm) solar flux 81-day average value.
       */
      solarFluxF10Avg?: number;

      /**
       * Boolean indicating use of solar radiation pressure perturbations for this
       * vector.
       */
      solarRadPress?: boolean;

      /**
       * Area-to-mass ratio coefficient for solar radiation pressure.
       */
      solarRadPressCoeff?: number;

      /**
       * Boolean indicating use of solid earth tide perturbations for this vector.
       */
      solidEarthTides?: boolean;

      /**
       * Optional array of UDL data (observation) UUIDs used to build this state vector.
       * See the associated sourcedDataTypes array for the specific types of observations
       * for the positionally corresponding UUIDs in this array (the two arrays must
       * match in size).
       */
      sourcedData?: Array<string>;

      /**
       * Optional array of UDL observation data types used to build this state vector
       * (e.g. EO, RADAR, RF, DOA). See the associated sourcedData array for the specific
       * UUIDs of observations for the positionally corresponding data types in this
       * array (the two arrays must match in size).
       */
      sourcedDataTypes?: Array<'EO' | 'RADAR' | 'RF' | 'DOA' | 'ELSET' | 'SV'>;

      /**
       * The effective area of the object exposed to solar radiation pressure, expressed
       * in meters^2.
       */
      srpArea?: number;

      /**
       * Integrator step mode (AUTO, TIME, or S).
       */
      stepMode?: string;

      /**
       * Initial integration step size (seconds).
       */
      stepSize?: number;

      /**
       * Initial step size selection (AUTO or MANUAL).
       */
      stepSizeSelection?: string;

      /**
       * Optional array of provider/source specific tags for this data, where each
       * element is no longer than 32 characters, used for implementing data owner
       * conditional access controls to restrict access to the data. Should be left null
       * by data providers unless conditional access controls are coordinated with the
       * UDL team.
       */
      tags?: Array<string>;

      /**
       * TAI (Temps Atomique International) minus UTC (Universal Time Coordinates) offset
       * in seconds.
       */
      taiUtc?: number;

      /**
       * Model parameter value for thrust acceleration (m/s2).
       */
      thrustAccel?: number;

      /**
       * The number of sensor tracks available for the OD of the object.
       */
      tracksAvail?: number;

      /**
       * The number of sensor tracks accepted for the OD of the object.
       */
      tracksUsed?: number;

      /**
       * Optional identifier to track a commercial or marketplace transaction executed to
       * produce this data.
       */
      transactionId?: string;

      /**
       * Boolean indicating this state vector was unable to be correlated to a known
       * object. This flag should only be set to true by data providers after an attempt
       * to correlate to an OnOrbit object was made and failed. If unable to correlate,
       * the 'origObjectId' field may be populated with an internal data provider
       * specific identifier.
       */
      uct?: boolean;

      /**
       * Rate of change of UT1 (milliseconds/day) - first derivative of ut1Utc.
       */
      ut1Rate?: number;

      /**
       * Universal Time-1 (UT1) minus UTC offset, in seconds.
       */
      ut1Utc?: number;

      /**
       * One sigma velocity uncertainty, in kilometers/second.
       */
      velUnc?: number;

      /**
       * Cartesian X acceleration of target, in kilometers/second^2, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      xaccel?: number;

      /**
       * Cartesian X position of the target, in kilometers, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      xpos?: number;

      /**
       * Cartesian X position of the target, in kilometers, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xposAlt1?: number;

      /**
       * Cartesian X position of the target, in kilometers, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xposAlt2?: number;

      /**
       * Cartesian X velocity of target, in kilometers/second, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      xvel?: number;

      /**
       * Cartesian X velocity of the target, in kilometers/second, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xvelAlt1?: number;

      /**
       * Cartesian X velocity of the target, in kilometers/second, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xvelAlt2?: number;

      /**
       * Cartesian Y acceleration of target, in kilometers/second^2, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      yaccel?: number;

      /**
       * Cartesian Y position of the target, in kilometers, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      ypos?: number;

      /**
       * Cartesian Y position of the target, in kilometers, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yposAlt1?: number;

      /**
       * Cartesian Y position of the target, in kilometers, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yposAlt2?: number;

      /**
       * Cartesian Y velocity of target, in kilometers/second, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      yvel?: number;

      /**
       * Cartesian Y velocity of the target, in kilometers/second, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yvelAlt1?: number;

      /**
       * Cartesian Y velocity of the target, in kilometers/second, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yvelAlt2?: number;

      /**
       * Cartesian Z acceleration of target, in kilometers/second^2, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      zaccel?: number;

      /**
       * Cartesian Z position of the target, in kilometers, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      zpos?: number;

      /**
       * Cartesian Z position of the target, in kilometers, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zposAlt1?: number;

      /**
       * Cartesian Z position of the target, in kilometers, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zposAlt2?: number;

      /**
       * Cartesian Z velocity of target, in kilometers/second, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      zvel?: number;

      /**
       * Cartesian Z velocity of the target, in kilometers/second, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zvelAlt1?: number;

      /**
       * Cartesian Z velocity of the target, in kilometers/second, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zvelAlt2?: number;
    }
  }
}

export interface ConjunctionGetHistoryParams {
  /**
   * Time of closest approach (TCA) in UTC. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  tca: string;

  /**
   * optional, fields for retrieval. When omitted, ALL fields are assumed. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid
   * query fields that can be selected.
   */
  columns?: string;

  firstResult?: number;

  maxResults?: number;
}

export interface ConjunctionTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Time of closest approach (TCA) in UTC. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  tca: string;

  firstResult?: number;

  maxResults?: number;
}

export interface ConjunctionUnvalidatedPublishParams {
  body: Array<ConjunctionUnvalidatedPublishParams.Body>;
}

export namespace ConjunctionUnvalidatedPublishParams {
  /**
   * Stores the results of a particular Conjunction Assessment (CA) run.
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
     * Source of the data.
     */
    source: string;

    /**
     * Time of closest approach (TCA) in UTC.
     */
    tca: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Commander's critical information requirements notes.
     */
    ccir?: string;

    /**
     * The value of the primary (object1) Area times the drag coefficient over the
     * object Mass, expressed in m^2/kg, used for propagation of the primary state
     * vector and covariance to TCA.
     */
    cdAoM1?: number;

    /**
     * The value of the secondary (object2) Area times the drag coefficient over the
     * object Mass, expressed in m^2/kg, used for propagation of the primary state
     * vector and covariance to TCA.
     */
    cdAoM2?: number;

    /**
     * Probability of Collision is the probability (denoted p, where 0.0<=p<=1.0), that
     * Object1 and Object2 will collide.
     */
    collisionProb?: number;

    /**
     * The method that was used to calculate the collision probability, ex.
     * FOSTER-1992.
     */
    collisionProbMethod?: string;

    /**
     * Additional notes from data providers.
     */
    comments?: string;

    /**
     * Emergency comments.
     */
    concernNotes?: string;

    /**
     * The value of the primary (object1) Area times the solar radiation pressure
     * coefficient over the object Mass, expressed in m^2/kg, used for propagation of
     * the primary state vector and covariance to TCA. This parameter is sometimes
     * referred to as AGOM.
     */
    crAoM1?: number;

    /**
     * The value of the secondary (object2) Area times the solar radiation pressure
     * coefficient over the object Mass, expressed in m^2/kg, used for propagation of
     * the primary state vector and covariance to TCA. This parameter is sometimes
     * referred to as AGOM.
     */
    crAoM2?: number;

    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    descriptor?: string;

    /**
     * The filename of the primary (object1) ephemeris used in the screening, if
     * applicable.
     */
    ephemName1?: string;

    /**
     * The filename of the secondary (object2) ephemeris used in the screening, if
     * applicable.
     */
    ephemName2?: string;

    /**
     * Unique identifier of the parent Ephemeris Set of the primary (object1) ephemeris
     * used in the screening, if applicable.
     */
    esId1?: string;

    /**
     * Unique identifier of the parent Ephemeris Set of the secondary (object2)
     * ephemeris used in the screening, if applicable.
     */
    esId2?: string;

    /**
     * Optional source-provided identifier for this conjunction event. In the case
     * where multiple conjunction records are submitted for the same event, this field
     * can be used to tie them together to the same event.
     */
    eventId?: string;

    /**
     * Optional ID of the UDL State Vector at TCA of the primary object. When
     * performing a create, this id will be ignored in favor of the UDL generated id of
     * the stateVector1.
     */
    idStateVector1?: string;

    /**
     * Optional ID of the UDL State Vector at TCA of the secondary object. When
     * performing a create, this id will be ignored in favor of the UDL generated id of
     * the stateVector2.
     */
    idStateVector2?: string;

    /**
     * Used for probability of collision calculation, not Warning/Alert Threshold
     * notifications.
     */
    largeCovWarning?: boolean;

    /**
     * Used for probability of collision calculation, not Warning/Alert Threshold
     * notifications.
     */
    largeRelPosWarning?: boolean;

    /**
     * Time of last positive metric observation of the primary satellite.
     */
    lastObTime1?: string;

    /**
     * Time of last positive metric observation of the secondary satellite.
     */
    lastObTime2?: string;

    /**
     * Spacecraft name(s) for which the Collision message is provided.
     */
    messageFor?: string;

    /**
     * JMS provided message ID link.
     */
    messageId?: string;

    /**
     * Distance between objects at Time of Closest Approach (TCA) in meters.
     */
    missDistance?: number;

    /**
     * Optional place holder for an OnOrbit ID that does not exist in UDL.
     */
    origIdOnOrbit1?: string;

    /**
     * Optional place holder for an OnOrbit ID that does not exist in UDL.
     */
    origIdOnOrbit2?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Creating agency or owner/operator (may be different than provider who submitted
     * the conjunction message).
     */
    originator?: string;

    /**
     * Flag indicating if owner was contacted.
     */
    ownerContacted?: boolean;

    /**
     * Penetration Level Sigma.
     */
    penetrationLevelSigma?: number;

    /**
     * Link to filename associated with JMS record.
     */
    rawFileURI?: string;

    /**
     * Distance between objects along Normal vector in meters.
     */
    relPosN?: number;

    /**
     * Distance between objects along Radial Vector at Time of Closest Approach in
     * meters.
     */
    relPosR?: number;

    /**
     * Distance between objects along Tangential Vector in meters.
     */
    relPosT?: number;

    /**
     * Closing velocity magnitude (relative speed) at Time of Closest Approach in
     * meters/sec.
     */
    relVelMag?: number;

    /**
     * Closing velocity between objects along Normal Vector in meters/sec.
     */
    relVelN?: number;

    /**
     * Closing velocity between objects along Radial Vector at Time of Closest Approach
     * in meters/sec.
     */
    relVelR?: number;

    /**
     * Closing velocity between objects along Tangential Vector in meters/sec.
     */
    relVelT?: number;

    /**
     * Satellite/catalog number of the target on-orbit primary object.
     */
    satNo1?: number;

    /**
     * Satellite/catalog number of the target on-orbit secondary object.
     */
    satNo2?: number;

    /**
     * The start time in UTC of the screening period for the conjunction assessment.
     */
    screenEntryTime?: string;

    /**
     * The stop time in UTC of the screening period for the conjunction assessment.
     */
    screenExitTime?: string;

    /**
     * Component size of screen in X component of RTN (Radial, Transverse and Normal)
     * frame in meters.
     */
    screenVolumeX?: number;

    /**
     * Component size of screen in Y component of RTN (Radial, Transverse and Normal)
     * frame in meters.
     */
    screenVolumeY?: number;

    /**
     * Component size of screen in Z component of RTN (Radial, Transverse and Normal)
     * frame in meters.
     */
    screenVolumeZ?: number;

    /**
     * Used for probability of collision calculation, not Warning/Alert Threshold
     * notifications.
     */
    smallCovWarning?: boolean;

    /**
     * Used for probability of collision calculation, not Warning/Alert Threshold
     * notifications.
     */
    smallRelVelWarning?: boolean;

    /**
     * Flag indicating if State department was notified.
     */
    stateDeptNotified?: boolean;

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
    stateVector1?: Body.StateVector1;

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
    stateVector2?: Body.StateVector2;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * The primary (object1) acceleration, expressed in m/s^2, due to in-track thrust
     * used to propagate the primary state vector and covariance to TCA.
     */
    thrustAccel1?: number;

    /**
     * The secondary (object2) acceleration, expressed in m/s^2, due to in-track thrust
     * used to propagate the primary state vector and covariance to TCA.
     */
    thrustAccel2?: number;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * The type of data represented in this conjunction record (e.g. CONJUNCTION,
     * CARA-WORKLIST, etc.). If type is null the record is assumed to be a Conjunction.
     */
    type?: string;

    /**
     * Used for probability of collision calculation, not Warning/Alert Threshold
     * notifications.
     */
    uvwWarn?: boolean;

    /**
     * The time at which the secondary (object2) enters the screening volume, in ISO
     * 8601 UTC format with microsecond precision.
     */
    volEntryTime?: string;

    /**
     * The time at which the secondary (object2) exits the screening volume, in ISO
     * 8601 UTC format with microsecond precision.
     */
    volExitTime?: string;

    /**
     * The shape (BOX, ELLIPSOID) of the screening volume.
     */
    volShape?: string;
  }

  export namespace Body {
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
    export interface StateVector1 {
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
       * Time of validity for state vector in ISO 8601 UTC datetime format, with
       * microsecond precision.
       */
      epoch: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * The actual time span used for the OD of the object, expressed in days.
       */
      actualODSpan?: number;

      /**
       * Optional algorithm used to produce this record.
       */
      algorithm?: string;

      /**
       * The reference frame of the alternate1 (Alt1) cartesian orbital state.
       */
      alt1ReferenceFrame?: string;

      /**
       * The reference frame of the alternate2 (Alt2) cartesian orbital state.
       */
      alt2ReferenceFrame?: string;

      /**
       * The actual area of the object at it's largest cross-section, expressed in
       * meters^2.
       */
      area?: number;

      /**
       * First derivative of drag/ballistic coefficient (m2/kg-s).
       */
      bDot?: number;

      /**
       * Model parameter value for center of mass offset (m).
       */
      cmOffset?: number;

      /**
       * Covariance matrix, in kilometer and second based units, in the specified
       * covReferenceFrame. If the covReferenceFrame is null it is assumed to be J2000.
       * The array values (1-21) represent the lower triangular half of the
       * position-velocity covariance matrix. The size of the covariance matrix is
       * dynamic, depending on whether the covariance for position only or position &
       * velocity. The covariance elements are position dependent within the array with
       * values ordered as follows:
       *
       * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR&nbsp;&nbsp;
       *
       * x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
       *
       * y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3
       *
       * z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;6
       *
       * x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;&nbsp;10
       *
       * y'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11&nbsp;&nbsp;12&nbsp;&nbsp;13&nbsp;&nbsp;14&nbsp;&nbsp;15
       *
       * z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;17&nbsp;&nbsp;18&nbsp;&nbsp;19&nbsp;&nbsp;20&nbsp;&nbsp;&nbsp;21&nbsp;
       *
       * The cov array should contain only the lower left triangle values from top left
       * down to bottom right, in order.
       *
       * If additional covariance terms are included for DRAG, SRP, and/or THRUST, the
       * matrix can be extended with the following order of elements:
       *
       * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR
       *
       * DRG&nbsp;&nbsp;&nbsp;22&nbsp;&nbsp;23&nbsp;&nbsp;24&nbsp;&nbsp;25&nbsp;&nbsp;26&nbsp;&nbsp;&nbsp;27&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28&nbsp;&nbsp;
       *
       * SRP&nbsp;&nbsp;&nbsp;29&nbsp;&nbsp;30&nbsp;&nbsp;31&nbsp;&nbsp;32&nbsp;&nbsp;33&nbsp;&nbsp;&nbsp;34&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36&nbsp;&nbsp;
       *
       * THR&nbsp;&nbsp;&nbsp;37&nbsp;&nbsp;38&nbsp;&nbsp;39&nbsp;&nbsp;40&nbsp;&nbsp;41&nbsp;&nbsp;&nbsp;42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45&nbsp;
       */
      cov?: Array<number>;

      /**
       * The method used to generate the covariance during the orbit determination (OD)
       * that produced the state vector, or whether an arbitrary, non-calculated default
       * value was used (CALCULATED, DEFAULT).
       */
      covMethod?: string;

      /**
       * The reference frame of the covariance matrix elements. If the covReferenceFrame
       * is null it is assumed to be J2000.
       */
      covReferenceFrame?: 'J2000' | 'UVW' | 'EFG/TDR' | 'TEME' | 'GCRF';

      /**
       * Optional source-provided and searchable metadata or descriptor of the data.
       */
      descriptor?: string;

      /**
       * The effective area of the object exposed to atmospheric drag, expressed in
       * meters^2.
       */
      dragArea?: number;

      /**
       * Area-to-mass ratio coefficient for atmospheric ballistic drag (m2/kg).
       */
      dragCoeff?: number;

      /**
       * The Drag Model used for this vector (e.g. HARRIS-PRIESTER, JAC70, JBH09, MSIS90,
       * NONE, etc.).
       */
      dragModel?: string;

      /**
       * Model parameter value for energy dissipation rate (EDR) (w/kg).
       */
      edr?: number;

      /**
       * The covariance matrix values represent the lower triangular half of the
       * covariance matrix in terms of equinoctial elements.&nbsp; The size of the
       * covariance matrix is dynamic.&nbsp; The values are outputted in order across
       * each row, i.e.:
       *
       * 1&nbsp;&nbsp; 2&nbsp;&nbsp; 3&nbsp;&nbsp; 4&nbsp;&nbsp; 5
       *
       * 6&nbsp;&nbsp; 7&nbsp;&nbsp; 8&nbsp;&nbsp; 9&nbsp; 10
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * 51&nbsp; 52&nbsp; 53&nbsp; 54&nbsp; 55
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * The ordering of values is as follows:
       *
       * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Af&nbsp;&nbsp;
       * Ag&nbsp;&nbsp; L&nbsp;&nbsp;&nbsp; N&nbsp;&nbsp; Chi&nbsp; Psi&nbsp;&nbsp;
       * B&nbsp;&nbsp; BDOT AGOM&nbsp; T&nbsp;&nbsp; C1&nbsp;&nbsp; C2&nbsp; ...
       *
       * Af&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1
       *
       * Ag&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp; 3
       *
       * L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       * 4&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp;&nbsp; 6
       *
       * N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       * 7&nbsp;&nbsp;&nbsp; 8&nbsp;&nbsp;&nbsp; 9&nbsp;&nbsp; 10
       *
       * Chi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11&nbsp;&nbsp; 12&nbsp;&nbsp;
       * 13&nbsp;&nbsp; 14&nbsp;&nbsp; 15
       *
       * Psi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16&nbsp;&nbsp; 17&nbsp;&nbsp;
       * 18&nbsp;&nbsp; 19&nbsp;&nbsp; 20&nbsp;&nbsp; 21
       *
       * B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22&nbsp;&nbsp;
       * 23&nbsp;&nbsp; 24 &nbsp;&nbsp;25&nbsp;&nbsp; 26&nbsp;&nbsp; 27&nbsp;&nbsp; 28
       *
       * BDOT&nbsp;&nbsp; 29&nbsp;&nbsp; 30&nbsp;&nbsp; 31&nbsp;&nbsp; 32&nbsp;&nbsp;
       * 33&nbsp;&nbsp; 34&nbsp;&nbsp; 35&nbsp;&nbsp; 36
       *
       * AGOM&nbsp; 37&nbsp;&nbsp; 38&nbsp;&nbsp; 39&nbsp;&nbsp; 40&nbsp;&nbsp;
       * 41&nbsp;&nbsp; 42&nbsp;&nbsp; 43&nbsp;&nbsp; 44&nbsp;&nbsp; 45
       *
       * T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 46&nbsp;&nbsp;
       * 47&nbsp;&nbsp; 48&nbsp;&nbsp; 49&nbsp;&nbsp; 50&nbsp;&nbsp; 51&nbsp;&nbsp;
       * 52&nbsp;&nbsp; 53&nbsp;&nbsp; 54&nbsp;&nbsp; 55
       *
       * C1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 56&nbsp;&nbsp; 57&nbsp;&nbsp;
       * 58&nbsp;&nbsp; 59&nbsp;&nbsp; 60&nbsp;&nbsp; 61&nbsp;&nbsp; 62&nbsp;&nbsp;
       * 63&nbsp;&nbsp; 64&nbsp;&nbsp; 65&nbsp;&nbsp; 66
       *
       * C2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 67&nbsp;&nbsp; 68&nbsp;&nbsp;
       * 69&nbsp;&nbsp; 70&nbsp;&nbsp; 71&nbsp; &nbsp;72&nbsp;&nbsp; 73&nbsp;&nbsp;
       * 74&nbsp;&nbsp; 75&nbsp;&nbsp; 76&nbsp;&nbsp; 77&nbsp;&nbsp; 78
       *
       * :
       *
       * :
       *
       * where C1, C2, etc, are the "consider parameters" that may be added to the
       * covariance matrix.&nbsp; The covariance matrix will be as large as the last
       * element/model parameter needed.&nbsp; In other words, if the DC solved for all 6
       * elements plus AGOM, the covariance matrix will be 9x9 (and the rows for B and
       * BDOT will be all zeros).&nbsp; If the covariance matrix is unavailable, the size
       * will be set to 0x0, and no data will follow.&nbsp; The cov field should contain
       * only the lower left triangle values from top left down to bottom right, in
       * order.
       */
      eqCov?: Array<number>;

      /**
       * Integrator error control.
       */
      errorControl?: number;

      /**
       * Boolean indicating use of fixed step size for this vector.
       */
      fixedStep?: boolean;

      /**
       * Geopotential model used for this vector (e.g. EGM-96, WGS-84, WGS-72, JGM-2, or
       * GEM-T3), including mm degree zonals, nn degree/order tesserals. E.g. EGM-96
       * 24Z,24T.
       */
      geopotentialModel?: string;

      /**
       * Number of terms used in the IAU 1980 nutation model (4, 50, or 106).
       */
      iau1980Terms?: number;

      /**
       * Unique identifier of the OD solution record that produced this state vector.
       * This ID can be used to obtain additional information on an OrbitDetermination
       * object using the 'get by ID' operation (e.g. /udl/orbitdetermination/{id}). For
       * example, the OrbitDetermination with idOrbitDetermination = abc would be queries
       * as /udl/orbitdetermination/abc.
       */
      idOrbitDetermination?: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      idStateVector?: string;

      /**
       * Integrator Mode.
       */
      integratorMode?: string;

      /**
       * Boolean indicating use of in-track thrust perturbations for this vector.
       */
      inTrackThrust?: boolean;

      /**
       * The end of the time interval containing the time of the last accepted
       * observation, in ISO 8601 UTC format with microsecond precision. For an exact
       * observation time, the firstObTime and lastObTime are the same.
       */
      lastObEnd?: string;

      /**
       * The start of the time interval containing the time of the last accepted
       * observation, in ISO 8601 UTC format with microsecond precision. For an exact
       * observation time, the firstObTime and lastObTime are the same.
       */
      lastObStart?: string;

      /**
       * Time of the next leap second after epoch in ISO 8601 UTC time. If the next leap
       * second is not known, the time of the previous leap second is used.
       */
      leapSecondTime?: string;

      /**
       * Boolean indicating use of lunar/solar perturbations for this vector.
       */
      lunarSolar?: boolean;

      /**
       * The mass of the object, in kilograms.
       */
      mass?: number;

      /**
       * The number of observations available for the OD of the object.
       */
      obsAvailable?: number;

      /**
       * The number of observations accepted for the OD of the object.
       */
      obsUsed?: number;

      /**
       * Originating system or organization which produced the data, if different from
       * the source. The origin may be different than the source if the source was a
       * mediating system which forwarded the data on behalf of the origin system. If
       * null, the source may be assumed to be the origin.
       */
      origin?: string;

      /**
       * Optional identifier provided by state vector source to indicate the target
       * onorbit object of this state vector. This may be an internal identifier and not
       * necessarily map to a valid satellite number.
       */
      origObjectId?: string;

      /**
       * Type of partial derivatives used (ANALYTIC, FULL NUM, or FAST NUM).
       */
      partials?: string;

      /**
       * The pedigree of state vector, or methods used for its generation to include
       * state update/orbit determination, propagation from another state, or a state
       * from a calibration satellite (e.g. ORBIT_UPDATE, PROPAGATION, CALIBRATION,
       * CONJUNCTION, FLIGHT_PLAN).
       */
      pedigree?: string;

      /**
       * Polar Wander Motion X (arc seconds).
       */
      polarMotionX?: number;

      /**
       * Polar Wander Motion Y (arc seconds).
       */
      polarMotionY?: number;

      /**
       * One sigma position uncertainty, in kilometers.
       */
      posUnc?: number;

      /**
       * Optional URI location in the document repository of the raw file parsed by the
       * system to produce this record. To download the raw file, prepend
       * https://udl-hostname/scs/download?id= to this value.
       */
      rawFileURI?: string;

      /**
       * The recommended OD time span calculated for the object, expressed in days.
       */
      recODSpan?: number;

      /**
       * The reference frame of the cartesian orbital states. If the referenceFrame is
       * null it is assumed to be J2000.
       */
      referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

      /**
       * The percentage of residuals accepted in the OD of the object.
       */
      residualsAcc?: number;

      /**
       * Epoch revolution number.
       */
      revNo?: number;

      /**
       * The Weighted Root Mean Squared (RMS) of the differential correction on the
       * target object that produced this vector. WRMS is a quality indicator of the
       * state vector update, with a value of 1.00 being optimal. WRMS applies to Batch
       * Least Squares (BLS) processes.
       */
      rms?: number;

      /**
       * Satellite/Catalog number of the target OnOrbit object.
       */
      satNo?: number;

      /**
       * Array containing the standard deviation of error in target object position, U, V
       * and W direction respectively (km).
       */
      sigmaPosUVW?: Array<number>;

      /**
       * Array containing the standard deviation of error in target object velocity, U, V
       * and W direction respectively (km/sec).
       */
      sigmaVelUVW?: Array<number>;

      /**
       * Average solar flux geomagnetic index.
       */
      solarFluxAPAvg?: number;

      /**
       * F10 (10.7 cm) solar flux value.
       */
      solarFluxF10?: number;

      /**
       * F10 (10.7 cm) solar flux 81-day average value.
       */
      solarFluxF10Avg?: number;

      /**
       * Boolean indicating use of solar radiation pressure perturbations for this
       * vector.
       */
      solarRadPress?: boolean;

      /**
       * Area-to-mass ratio coefficient for solar radiation pressure.
       */
      solarRadPressCoeff?: number;

      /**
       * Boolean indicating use of solid earth tide perturbations for this vector.
       */
      solidEarthTides?: boolean;

      /**
       * Optional array of UDL data (observation) UUIDs used to build this state vector.
       * See the associated sourcedDataTypes array for the specific types of observations
       * for the positionally corresponding UUIDs in this array (the two arrays must
       * match in size).
       */
      sourcedData?: Array<string>;

      /**
       * Optional array of UDL observation data types used to build this state vector
       * (e.g. EO, RADAR, RF, DOA). See the associated sourcedData array for the specific
       * UUIDs of observations for the positionally corresponding data types in this
       * array (the two arrays must match in size).
       */
      sourcedDataTypes?: Array<'EO' | 'RADAR' | 'RF' | 'DOA' | 'ELSET' | 'SV'>;

      /**
       * The effective area of the object exposed to solar radiation pressure, expressed
       * in meters^2.
       */
      srpArea?: number;

      /**
       * Integrator step mode (AUTO, TIME, or S).
       */
      stepMode?: string;

      /**
       * Initial integration step size (seconds).
       */
      stepSize?: number;

      /**
       * Initial step size selection (AUTO or MANUAL).
       */
      stepSizeSelection?: string;

      /**
       * Optional array of provider/source specific tags for this data, where each
       * element is no longer than 32 characters, used for implementing data owner
       * conditional access controls to restrict access to the data. Should be left null
       * by data providers unless conditional access controls are coordinated with the
       * UDL team.
       */
      tags?: Array<string>;

      /**
       * TAI (Temps Atomique International) minus UTC (Universal Time Coordinates) offset
       * in seconds.
       */
      taiUtc?: number;

      /**
       * Model parameter value for thrust acceleration (m/s2).
       */
      thrustAccel?: number;

      /**
       * The number of sensor tracks available for the OD of the object.
       */
      tracksAvail?: number;

      /**
       * The number of sensor tracks accepted for the OD of the object.
       */
      tracksUsed?: number;

      /**
       * Optional identifier to track a commercial or marketplace transaction executed to
       * produce this data.
       */
      transactionId?: string;

      /**
       * Boolean indicating this state vector was unable to be correlated to a known
       * object. This flag should only be set to true by data providers after an attempt
       * to correlate to an OnOrbit object was made and failed. If unable to correlate,
       * the 'origObjectId' field may be populated with an internal data provider
       * specific identifier.
       */
      uct?: boolean;

      /**
       * Rate of change of UT1 (milliseconds/day) - first derivative of ut1Utc.
       */
      ut1Rate?: number;

      /**
       * Universal Time-1 (UT1) minus UTC offset, in seconds.
       */
      ut1Utc?: number;

      /**
       * One sigma velocity uncertainty, in kilometers/second.
       */
      velUnc?: number;

      /**
       * Cartesian X acceleration of target, in kilometers/second^2, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      xaccel?: number;

      /**
       * Cartesian X position of the target, in kilometers, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      xpos?: number;

      /**
       * Cartesian X position of the target, in kilometers, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xposAlt1?: number;

      /**
       * Cartesian X position of the target, in kilometers, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xposAlt2?: number;

      /**
       * Cartesian X velocity of target, in kilometers/second, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      xvel?: number;

      /**
       * Cartesian X velocity of the target, in kilometers/second, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xvelAlt1?: number;

      /**
       * Cartesian X velocity of the target, in kilometers/second, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xvelAlt2?: number;

      /**
       * Cartesian Y acceleration of target, in kilometers/second^2, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      yaccel?: number;

      /**
       * Cartesian Y position of the target, in kilometers, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      ypos?: number;

      /**
       * Cartesian Y position of the target, in kilometers, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yposAlt1?: number;

      /**
       * Cartesian Y position of the target, in kilometers, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yposAlt2?: number;

      /**
       * Cartesian Y velocity of target, in kilometers/second, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      yvel?: number;

      /**
       * Cartesian Y velocity of the target, in kilometers/second, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yvelAlt1?: number;

      /**
       * Cartesian Y velocity of the target, in kilometers/second, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yvelAlt2?: number;

      /**
       * Cartesian Z acceleration of target, in kilometers/second^2, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      zaccel?: number;

      /**
       * Cartesian Z position of the target, in kilometers, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      zpos?: number;

      /**
       * Cartesian Z position of the target, in kilometers, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zposAlt1?: number;

      /**
       * Cartesian Z position of the target, in kilometers, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zposAlt2?: number;

      /**
       * Cartesian Z velocity of target, in kilometers/second, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      zvel?: number;

      /**
       * Cartesian Z velocity of the target, in kilometers/second, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zvelAlt1?: number;

      /**
       * Cartesian Z velocity of the target, in kilometers/second, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zvelAlt2?: number;
    }

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
    export interface StateVector2 {
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
       * Time of validity for state vector in ISO 8601 UTC datetime format, with
       * microsecond precision.
       */
      epoch: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * The actual time span used for the OD of the object, expressed in days.
       */
      actualODSpan?: number;

      /**
       * Optional algorithm used to produce this record.
       */
      algorithm?: string;

      /**
       * The reference frame of the alternate1 (Alt1) cartesian orbital state.
       */
      alt1ReferenceFrame?: string;

      /**
       * The reference frame of the alternate2 (Alt2) cartesian orbital state.
       */
      alt2ReferenceFrame?: string;

      /**
       * The actual area of the object at it's largest cross-section, expressed in
       * meters^2.
       */
      area?: number;

      /**
       * First derivative of drag/ballistic coefficient (m2/kg-s).
       */
      bDot?: number;

      /**
       * Model parameter value for center of mass offset (m).
       */
      cmOffset?: number;

      /**
       * Covariance matrix, in kilometer and second based units, in the specified
       * covReferenceFrame. If the covReferenceFrame is null it is assumed to be J2000.
       * The array values (1-21) represent the lower triangular half of the
       * position-velocity covariance matrix. The size of the covariance matrix is
       * dynamic, depending on whether the covariance for position only or position &
       * velocity. The covariance elements are position dependent within the array with
       * values ordered as follows:
       *
       * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR&nbsp;&nbsp;
       *
       * x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1
       *
       * y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3
       *
       * z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;6
       *
       * x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;&nbsp;10
       *
       * y'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11&nbsp;&nbsp;12&nbsp;&nbsp;13&nbsp;&nbsp;14&nbsp;&nbsp;15
       *
       * z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;17&nbsp;&nbsp;18&nbsp;&nbsp;19&nbsp;&nbsp;20&nbsp;&nbsp;&nbsp;21&nbsp;
       *
       * The cov array should contain only the lower left triangle values from top left
       * down to bottom right, in order.
       *
       * If additional covariance terms are included for DRAG, SRP, and/or THRUST, the
       * matrix can be extended with the following order of elements:
       *
       * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;DRG&nbsp;&nbsp;&nbsp;&nbsp;SRP&nbsp;&nbsp;&nbsp;&nbsp;THR
       *
       * DRG&nbsp;&nbsp;&nbsp;22&nbsp;&nbsp;23&nbsp;&nbsp;24&nbsp;&nbsp;25&nbsp;&nbsp;26&nbsp;&nbsp;&nbsp;27&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28&nbsp;&nbsp;
       *
       * SRP&nbsp;&nbsp;&nbsp;29&nbsp;&nbsp;30&nbsp;&nbsp;31&nbsp;&nbsp;32&nbsp;&nbsp;33&nbsp;&nbsp;&nbsp;34&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;35&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36&nbsp;&nbsp;
       *
       * THR&nbsp;&nbsp;&nbsp;37&nbsp;&nbsp;38&nbsp;&nbsp;39&nbsp;&nbsp;40&nbsp;&nbsp;41&nbsp;&nbsp;&nbsp;42&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;44&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45&nbsp;
       */
      cov?: Array<number>;

      /**
       * The method used to generate the covariance during the orbit determination (OD)
       * that produced the state vector, or whether an arbitrary, non-calculated default
       * value was used (CALCULATED, DEFAULT).
       */
      covMethod?: string;

      /**
       * The reference frame of the covariance matrix elements. If the covReferenceFrame
       * is null it is assumed to be J2000.
       */
      covReferenceFrame?: 'J2000' | 'UVW' | 'EFG/TDR' | 'TEME' | 'GCRF';

      /**
       * Optional source-provided and searchable metadata or descriptor of the data.
       */
      descriptor?: string;

      /**
       * The effective area of the object exposed to atmospheric drag, expressed in
       * meters^2.
       */
      dragArea?: number;

      /**
       * Area-to-mass ratio coefficient for atmospheric ballistic drag (m2/kg).
       */
      dragCoeff?: number;

      /**
       * The Drag Model used for this vector (e.g. HARRIS-PRIESTER, JAC70, JBH09, MSIS90,
       * NONE, etc.).
       */
      dragModel?: string;

      /**
       * Model parameter value for energy dissipation rate (EDR) (w/kg).
       */
      edr?: number;

      /**
       * The covariance matrix values represent the lower triangular half of the
       * covariance matrix in terms of equinoctial elements.&nbsp; The size of the
       * covariance matrix is dynamic.&nbsp; The values are outputted in order across
       * each row, i.e.:
       *
       * 1&nbsp;&nbsp; 2&nbsp;&nbsp; 3&nbsp;&nbsp; 4&nbsp;&nbsp; 5
       *
       * 6&nbsp;&nbsp; 7&nbsp;&nbsp; 8&nbsp;&nbsp; 9&nbsp; 10
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * 51&nbsp; 52&nbsp; 53&nbsp; 54&nbsp; 55
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :&nbsp;&nbsp; :
       *
       * The ordering of values is as follows:
       *
       * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Af&nbsp;&nbsp;
       * Ag&nbsp;&nbsp; L&nbsp;&nbsp;&nbsp; N&nbsp;&nbsp; Chi&nbsp; Psi&nbsp;&nbsp;
       * B&nbsp;&nbsp; BDOT AGOM&nbsp; T&nbsp;&nbsp; C1&nbsp;&nbsp; C2&nbsp; ...
       *
       * Af&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1
       *
       * Ag&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp;&nbsp; 3
       *
       * L&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       * 4&nbsp;&nbsp;&nbsp; 5&nbsp;&nbsp;&nbsp; 6
       *
       * N&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       * 7&nbsp;&nbsp;&nbsp; 8&nbsp;&nbsp;&nbsp; 9&nbsp;&nbsp; 10
       *
       * Chi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11&nbsp;&nbsp; 12&nbsp;&nbsp;
       * 13&nbsp;&nbsp; 14&nbsp;&nbsp; 15
       *
       * Psi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 16&nbsp;&nbsp; 17&nbsp;&nbsp;
       * 18&nbsp;&nbsp; 19&nbsp;&nbsp; 20&nbsp;&nbsp; 21
       *
       * B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 22&nbsp;&nbsp;
       * 23&nbsp;&nbsp; 24 &nbsp;&nbsp;25&nbsp;&nbsp; 26&nbsp;&nbsp; 27&nbsp;&nbsp; 28
       *
       * BDOT&nbsp;&nbsp; 29&nbsp;&nbsp; 30&nbsp;&nbsp; 31&nbsp;&nbsp; 32&nbsp;&nbsp;
       * 33&nbsp;&nbsp; 34&nbsp;&nbsp; 35&nbsp;&nbsp; 36
       *
       * AGOM&nbsp; 37&nbsp;&nbsp; 38&nbsp;&nbsp; 39&nbsp;&nbsp; 40&nbsp;&nbsp;
       * 41&nbsp;&nbsp; 42&nbsp;&nbsp; 43&nbsp;&nbsp; 44&nbsp;&nbsp; 45
       *
       * T&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 46&nbsp;&nbsp;
       * 47&nbsp;&nbsp; 48&nbsp;&nbsp; 49&nbsp;&nbsp; 50&nbsp;&nbsp; 51&nbsp;&nbsp;
       * 52&nbsp;&nbsp; 53&nbsp;&nbsp; 54&nbsp;&nbsp; 55
       *
       * C1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 56&nbsp;&nbsp; 57&nbsp;&nbsp;
       * 58&nbsp;&nbsp; 59&nbsp;&nbsp; 60&nbsp;&nbsp; 61&nbsp;&nbsp; 62&nbsp;&nbsp;
       * 63&nbsp;&nbsp; 64&nbsp;&nbsp; 65&nbsp;&nbsp; 66
       *
       * C2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 67&nbsp;&nbsp; 68&nbsp;&nbsp;
       * 69&nbsp;&nbsp; 70&nbsp;&nbsp; 71&nbsp; &nbsp;72&nbsp;&nbsp; 73&nbsp;&nbsp;
       * 74&nbsp;&nbsp; 75&nbsp;&nbsp; 76&nbsp;&nbsp; 77&nbsp;&nbsp; 78
       *
       * :
       *
       * :
       *
       * where C1, C2, etc, are the "consider parameters" that may be added to the
       * covariance matrix.&nbsp; The covariance matrix will be as large as the last
       * element/model parameter needed.&nbsp; In other words, if the DC solved for all 6
       * elements plus AGOM, the covariance matrix will be 9x9 (and the rows for B and
       * BDOT will be all zeros).&nbsp; If the covariance matrix is unavailable, the size
       * will be set to 0x0, and no data will follow.&nbsp; The cov field should contain
       * only the lower left triangle values from top left down to bottom right, in
       * order.
       */
      eqCov?: Array<number>;

      /**
       * Integrator error control.
       */
      errorControl?: number;

      /**
       * Boolean indicating use of fixed step size for this vector.
       */
      fixedStep?: boolean;

      /**
       * Geopotential model used for this vector (e.g. EGM-96, WGS-84, WGS-72, JGM-2, or
       * GEM-T3), including mm degree zonals, nn degree/order tesserals. E.g. EGM-96
       * 24Z,24T.
       */
      geopotentialModel?: string;

      /**
       * Number of terms used in the IAU 1980 nutation model (4, 50, or 106).
       */
      iau1980Terms?: number;

      /**
       * Unique identifier of the OD solution record that produced this state vector.
       * This ID can be used to obtain additional information on an OrbitDetermination
       * object using the 'get by ID' operation (e.g. /udl/orbitdetermination/{id}). For
       * example, the OrbitDetermination with idOrbitDetermination = abc would be queries
       * as /udl/orbitdetermination/abc.
       */
      idOrbitDetermination?: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      idStateVector?: string;

      /**
       * Integrator Mode.
       */
      integratorMode?: string;

      /**
       * Boolean indicating use of in-track thrust perturbations for this vector.
       */
      inTrackThrust?: boolean;

      /**
       * The end of the time interval containing the time of the last accepted
       * observation, in ISO 8601 UTC format with microsecond precision. For an exact
       * observation time, the firstObTime and lastObTime are the same.
       */
      lastObEnd?: string;

      /**
       * The start of the time interval containing the time of the last accepted
       * observation, in ISO 8601 UTC format with microsecond precision. For an exact
       * observation time, the firstObTime and lastObTime are the same.
       */
      lastObStart?: string;

      /**
       * Time of the next leap second after epoch in ISO 8601 UTC time. If the next leap
       * second is not known, the time of the previous leap second is used.
       */
      leapSecondTime?: string;

      /**
       * Boolean indicating use of lunar/solar perturbations for this vector.
       */
      lunarSolar?: boolean;

      /**
       * The mass of the object, in kilograms.
       */
      mass?: number;

      /**
       * The number of observations available for the OD of the object.
       */
      obsAvailable?: number;

      /**
       * The number of observations accepted for the OD of the object.
       */
      obsUsed?: number;

      /**
       * Originating system or organization which produced the data, if different from
       * the source. The origin may be different than the source if the source was a
       * mediating system which forwarded the data on behalf of the origin system. If
       * null, the source may be assumed to be the origin.
       */
      origin?: string;

      /**
       * Optional identifier provided by state vector source to indicate the target
       * onorbit object of this state vector. This may be an internal identifier and not
       * necessarily map to a valid satellite number.
       */
      origObjectId?: string;

      /**
       * Type of partial derivatives used (ANALYTIC, FULL NUM, or FAST NUM).
       */
      partials?: string;

      /**
       * The pedigree of state vector, or methods used for its generation to include
       * state update/orbit determination, propagation from another state, or a state
       * from a calibration satellite (e.g. ORBIT_UPDATE, PROPAGATION, CALIBRATION,
       * CONJUNCTION, FLIGHT_PLAN).
       */
      pedigree?: string;

      /**
       * Polar Wander Motion X (arc seconds).
       */
      polarMotionX?: number;

      /**
       * Polar Wander Motion Y (arc seconds).
       */
      polarMotionY?: number;

      /**
       * One sigma position uncertainty, in kilometers.
       */
      posUnc?: number;

      /**
       * Optional URI location in the document repository of the raw file parsed by the
       * system to produce this record. To download the raw file, prepend
       * https://udl-hostname/scs/download?id= to this value.
       */
      rawFileURI?: string;

      /**
       * The recommended OD time span calculated for the object, expressed in days.
       */
      recODSpan?: number;

      /**
       * The reference frame of the cartesian orbital states. If the referenceFrame is
       * null it is assumed to be J2000.
       */
      referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

      /**
       * The percentage of residuals accepted in the OD of the object.
       */
      residualsAcc?: number;

      /**
       * Epoch revolution number.
       */
      revNo?: number;

      /**
       * The Weighted Root Mean Squared (RMS) of the differential correction on the
       * target object that produced this vector. WRMS is a quality indicator of the
       * state vector update, with a value of 1.00 being optimal. WRMS applies to Batch
       * Least Squares (BLS) processes.
       */
      rms?: number;

      /**
       * Satellite/Catalog number of the target OnOrbit object.
       */
      satNo?: number;

      /**
       * Array containing the standard deviation of error in target object position, U, V
       * and W direction respectively (km).
       */
      sigmaPosUVW?: Array<number>;

      /**
       * Array containing the standard deviation of error in target object velocity, U, V
       * and W direction respectively (km/sec).
       */
      sigmaVelUVW?: Array<number>;

      /**
       * Average solar flux geomagnetic index.
       */
      solarFluxAPAvg?: number;

      /**
       * F10 (10.7 cm) solar flux value.
       */
      solarFluxF10?: number;

      /**
       * F10 (10.7 cm) solar flux 81-day average value.
       */
      solarFluxF10Avg?: number;

      /**
       * Boolean indicating use of solar radiation pressure perturbations for this
       * vector.
       */
      solarRadPress?: boolean;

      /**
       * Area-to-mass ratio coefficient for solar radiation pressure.
       */
      solarRadPressCoeff?: number;

      /**
       * Boolean indicating use of solid earth tide perturbations for this vector.
       */
      solidEarthTides?: boolean;

      /**
       * Optional array of UDL data (observation) UUIDs used to build this state vector.
       * See the associated sourcedDataTypes array for the specific types of observations
       * for the positionally corresponding UUIDs in this array (the two arrays must
       * match in size).
       */
      sourcedData?: Array<string>;

      /**
       * Optional array of UDL observation data types used to build this state vector
       * (e.g. EO, RADAR, RF, DOA). See the associated sourcedData array for the specific
       * UUIDs of observations for the positionally corresponding data types in this
       * array (the two arrays must match in size).
       */
      sourcedDataTypes?: Array<'EO' | 'RADAR' | 'RF' | 'DOA' | 'ELSET' | 'SV'>;

      /**
       * The effective area of the object exposed to solar radiation pressure, expressed
       * in meters^2.
       */
      srpArea?: number;

      /**
       * Integrator step mode (AUTO, TIME, or S).
       */
      stepMode?: string;

      /**
       * Initial integration step size (seconds).
       */
      stepSize?: number;

      /**
       * Initial step size selection (AUTO or MANUAL).
       */
      stepSizeSelection?: string;

      /**
       * Optional array of provider/source specific tags for this data, where each
       * element is no longer than 32 characters, used for implementing data owner
       * conditional access controls to restrict access to the data. Should be left null
       * by data providers unless conditional access controls are coordinated with the
       * UDL team.
       */
      tags?: Array<string>;

      /**
       * TAI (Temps Atomique International) minus UTC (Universal Time Coordinates) offset
       * in seconds.
       */
      taiUtc?: number;

      /**
       * Model parameter value for thrust acceleration (m/s2).
       */
      thrustAccel?: number;

      /**
       * The number of sensor tracks available for the OD of the object.
       */
      tracksAvail?: number;

      /**
       * The number of sensor tracks accepted for the OD of the object.
       */
      tracksUsed?: number;

      /**
       * Optional identifier to track a commercial or marketplace transaction executed to
       * produce this data.
       */
      transactionId?: string;

      /**
       * Boolean indicating this state vector was unable to be correlated to a known
       * object. This flag should only be set to true by data providers after an attempt
       * to correlate to an OnOrbit object was made and failed. If unable to correlate,
       * the 'origObjectId' field may be populated with an internal data provider
       * specific identifier.
       */
      uct?: boolean;

      /**
       * Rate of change of UT1 (milliseconds/day) - first derivative of ut1Utc.
       */
      ut1Rate?: number;

      /**
       * Universal Time-1 (UT1) minus UTC offset, in seconds.
       */
      ut1Utc?: number;

      /**
       * One sigma velocity uncertainty, in kilometers/second.
       */
      velUnc?: number;

      /**
       * Cartesian X acceleration of target, in kilometers/second^2, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      xaccel?: number;

      /**
       * Cartesian X position of the target, in kilometers, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      xpos?: number;

      /**
       * Cartesian X position of the target, in kilometers, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xposAlt1?: number;

      /**
       * Cartesian X position of the target, in kilometers, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xposAlt2?: number;

      /**
       * Cartesian X velocity of target, in kilometers/second, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      xvel?: number;

      /**
       * Cartesian X velocity of the target, in kilometers/second, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xvelAlt1?: number;

      /**
       * Cartesian X velocity of the target, in kilometers/second, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      xvelAlt2?: number;

      /**
       * Cartesian Y acceleration of target, in kilometers/second^2, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      yaccel?: number;

      /**
       * Cartesian Y position of the target, in kilometers, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      ypos?: number;

      /**
       * Cartesian Y position of the target, in kilometers, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yposAlt1?: number;

      /**
       * Cartesian Y position of the target, in kilometers, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yposAlt2?: number;

      /**
       * Cartesian Y velocity of target, in kilometers/second, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      yvel?: number;

      /**
       * Cartesian Y velocity of the target, in kilometers/second, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yvelAlt1?: number;

      /**
       * Cartesian Y velocity of the target, in kilometers/second, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      yvelAlt2?: number;

      /**
       * Cartesian Z acceleration of target, in kilometers/second^2, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      zaccel?: number;

      /**
       * Cartesian Z position of the target, in kilometers, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      zpos?: number;

      /**
       * Cartesian Z position of the target, in kilometers, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zposAlt1?: number;

      /**
       * Cartesian Z position of the target, in kilometers, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zposAlt2?: number;

      /**
       * Cartesian Z velocity of target, in kilometers/second, in the specified
       * referenceFrame. If referenceFrame is null then J2K should be assumed.
       */
      zvel?: number;

      /**
       * Cartesian Z velocity of the target, in kilometers/second, in the specified
       * alt1ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zvelAlt1?: number;

      /**
       * Cartesian Z velocity of the target, in kilometers/second, in the specified
       * alt2ReferenceFrame. Alternate reference frames are optional and are intended to
       * allow a data source to provide an equivalent vector in a different cartesian
       * frame than the primary vector.
       */
      zvelAlt2?: number;
    }
  }
}

Conjunctions.History = History;

export declare namespace Conjunctions {
  export {
    type ConjunctionAbridged as ConjunctionAbridged,
    type ConjunctionCountResponse as ConjunctionCountResponse,
    type ConjunctionGetHistoryResponse as ConjunctionGetHistoryResponse,
    type ConjunctionQueryhelpResponse as ConjunctionQueryhelpResponse,
    type ConjunctionTupleResponse as ConjunctionTupleResponse,
    type ConjunctionAbridgedsOffsetPage as ConjunctionAbridgedsOffsetPage,
    type ConjunctionRetrieveParams as ConjunctionRetrieveParams,
    type ConjunctionListParams as ConjunctionListParams,
    type ConjunctionCountParams as ConjunctionCountParams,
    type ConjunctionCreateUdlParams as ConjunctionCreateUdlParams,
    type ConjunctionCreateBulkParams as ConjunctionCreateBulkParams,
    type ConjunctionGetHistoryParams as ConjunctionGetHistoryParams,
    type ConjunctionTupleParams as ConjunctionTupleParams,
    type ConjunctionUnvalidatedPublishParams as ConjunctionUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
