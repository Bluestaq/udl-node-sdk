// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import { History, HistoryAodrParams, HistoryCountParams, HistoryCountResponse } from './history';
import * as StatevectorAPI from '../statevector/statevector';

export class Conjunctions extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to get a single conjunction by its unique ID passed as a path
   * parameter.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ConjunctionFull> {
    return this._client.get(`/udl/conjunction/${id}`, options);
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: ConjunctionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConjunctionListResponse> {
    return this._client.get('/udl/conjunction', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: ConjunctionCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/conjunction/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to take a list of Conjunctions as a POST body and ingest into
   * the database. A Conjunction is analysis of probability of collision; the data
   * can include state vectors for primary and secondary satellites. This operation
   * is intended to be used for automated feeds into UDL. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   */
  createBulkV2(body: ConjunctionCreateBulkV2Params, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/filedrop/udl-conjunction', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to take a single Conjunction as a POST body and ingest into
   * the database. A Conjunction is analysis of probability of collision; the data
   * can include state vectors for primary and secondary satellites. A specific role
   * is required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  createUdl(params: ConjunctionCreateUdlParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { convertPosVel, ...body } = params;
    return this._client.post('/udl/conjunction', {
      query: { convertPosVel },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
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
   */
  createBulk(body: ConjunctionCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/conjunction/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to dynamically query historical data by a variety of query
   * parameters not specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  getHistory(
    query: ConjunctionGetHistoryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConjunctionGetHistoryResponse> {
    return this._client.get('/udl/conjunction/history', { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/conjunction/queryhelp', {
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
    query: ConjunctionTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConjunctionTupleResponse> {
    return this._client.get('/udl/conjunction/tuple', { query, ...options });
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
   */
  uploadConjunctionDataMessage(
    params: ConjunctionUploadConjunctionDataMessageParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { classification, dataMode, filename, source, body, tags } = params;
    return this._client.post('/filedrop/cdms', {
      query: { classification, dataMode, filename, source, tags },
      body: body,
      ...options,
      headers: { 'Content-Type': 'application/zip', Accept: '*/*', ...options?.headers },
      __binaryRequest: true,
    });
  }
}

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
  stateVector1?: StatevectorAPI.StateVectorAbridged;

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
  stateVector2?: StatevectorAPI.StateVectorAbridged;

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

/**
 * Stores the results of a particular Conjunction Assessment (CA) run.
 */
export interface ConjunctionFull {
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
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit1?: Shared.Onorbit;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit2?: Shared.Onorbit;

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
  stateVector1?: StatevectorAPI.StateVectorFull;

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
  stateVector2?: StatevectorAPI.StateVectorFull;

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

export type ConjunctionListResponse = Array<ConjunctionAbridged>;

export type ConjunctionCountResponse = string;

export type ConjunctionGetHistoryResponse = Array<ConjunctionFull>;

export type ConjunctionTupleResponse = Array<ConjunctionFull>;

export interface ConjunctionListParams {
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
}

export type ConjunctionCreateBulkV2Params = Array<ConjunctionCreateBulkV2Params.Body>;

export namespace ConjunctionCreateBulkV2Params {
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
    stateVector1?: StatevectorAPI.StateVectorIngest;

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
    stateVector2?: StatevectorAPI.StateVectorIngest;

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
  stateVector1?: StatevectorAPI.StateVectorIngest;

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
  stateVector2?: StatevectorAPI.StateVectorIngest;

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

export type ConjunctionCreateBulkParams = Array<ConjunctionCreateBulkParams.Body>;

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
    stateVector1?: StatevectorAPI.StateVectorIngest;

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
    stateVector2?: StatevectorAPI.StateVectorIngest;

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
}

export interface ConjunctionUploadConjunctionDataMessageParams {
  /**
   * Query param: Classification marking of the data in IC/CAPCO Portion-marked
   * format.
   */
  classification: string;

  /**
   * Query param: Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE
   * data.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Query param: Filename of the payload.
   */
  filename: string;

  /**
   * Query param: Source of the data.
   */
  source: string;

  /**
   * Body param:
   */
  body: Core.Uploadable;

  /**
   * Query param: Optional array of provider/source specific tags for this data,
   * where each element is no longer than 32 characters, used for implementing data
   * owner conditional access controls to restrict access to the data. Should be left
   * null by data providers unless conditional access controls are coordinated with
   * the UDL team.
   */
  tags?: string;
}

Conjunctions.History = History;

export declare namespace Conjunctions {
  export {
    type ConjunctionAbridged as ConjunctionAbridged,
    type ConjunctionFull as ConjunctionFull,
    type ConjunctionListResponse as ConjunctionListResponse,
    type ConjunctionCountResponse as ConjunctionCountResponse,
    type ConjunctionGetHistoryResponse as ConjunctionGetHistoryResponse,
    type ConjunctionTupleResponse as ConjunctionTupleResponse,
    type ConjunctionListParams as ConjunctionListParams,
    type ConjunctionCountParams as ConjunctionCountParams,
    type ConjunctionCreateBulkV2Params as ConjunctionCreateBulkV2Params,
    type ConjunctionCreateUdlParams as ConjunctionCreateUdlParams,
    type ConjunctionCreateBulkParams as ConjunctionCreateBulkParams,
    type ConjunctionGetHistoryParams as ConjunctionGetHistoryParams,
    type ConjunctionTupleParams as ConjunctionTupleParams,
    type ConjunctionUploadConjunctionDataMessageParams as ConjunctionUploadConjunctionDataMessageParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
