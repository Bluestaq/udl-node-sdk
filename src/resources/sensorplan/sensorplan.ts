// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ElsetsAPI from '../elsets/elsets';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryRetrieveParams,
  HistoryRetrieveResponse,
} from './history';
import * as StatevectorAPI from '../statevector/statevector';
import * as SensorplanHistoryAPI from '../udl/sensorplan/history';

export class Sensorplan extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single sensor plan as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  create(body: SensorplanCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/sensorplan', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to update a single SensorPlan. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   */
  update(pathId: string, body: SensorplanUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/udl/sensorplan/${pathId}`, {
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
  list(query: SensorplanListParams, options?: Core.RequestOptions): Core.APIPromise<SensorplanListResponse> {
    return this._client.get('/udl/sensorplan', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: SensorplanCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/sensorplan/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to take one sensorplan record as a POST body and ingest into
   * the database. This operation is intended to be used for automated feeds into
   * UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  createBulkV2(body: SensorplanCreateBulkV2Params, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/filedrop/udl-sensorplan', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single SensorPlan by its unique ID passed as a path
   * parameter.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<SensorplanHistoryAPI.SensorplanFull> {
    return this._client.get(`/udl/sensorplan/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/sensorplan/queryhelp', {
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
    query: SensorplanTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SensorplanTupleResponse> {
    return this._client.get('/udl/sensorplan/tuple', { query, ...options });
  }
}

export type SensorplanListResponse = Array<SensorplanListResponse.SensorplanListResponseItem>;

export namespace SensorplanListResponse {
  /**
   * A Plan is used to aggregate two or more of the same type of record to a parent
   * entity, with the planId (UUID) being included in all of the subordinate records,
   * enabling resolution back to the parent.
   */
  export interface SensorplanListResponseItem {
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
     * The type of records that comprise this parent set (COLLECT, CONTACT).
     */
    recType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The start time of the plan or schedule, in ISO 8601 UTC format.
     */
    startTime: string;

    /**
     * The type of this sensor plan/schedule (PLAN, REQUEST, SCHEDULE).
     */
    type: string;

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
     * The customer for this plan or schedule.
     */
    customer?: string;

    /**
     * The end time of the plan or schedule, in ISO 8601 UTC format.
     */
    endTime?: string;

    /**
     * Unique identifier of the requested/schedule/planned sensor associated with this
     * request.
     */
    idSensor?: string;

    /**
     * Name associated with this plan or schedule.
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
     * The originating source network on which this record was created, auto-populated
     * by the system.
     */
    origNetwork?: string;

    /**
     * Optional identifier provided by the source to indicate the sensor identifier
     * requested/scheduled/planned for this request. This may be an internal identifier
     * and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * The purpose/description of this plan or schedule.
     */
    purpose?: string;

    /**
     * The total number of requests contained in this plan or schedule. Value of this
     * field must match the size of collectRequest list if the list is provided and can
     * be null or any value otherwise.
     */
    reqTotal?: number;

    /**
     * The sensor or ground network associated with this plan or schedule.
     */
    senNetwork?: string;

    /**
     * The status of this plan or schedule (ACCEPTED, APPROVED, COMPLETED, PROPOSED,
     * REJECTED, REQUESTED, SCHEDULED).
     */
    status?: string;
  }
}

export type SensorplanCountResponse = string;

export type SensorplanTupleResponse = Array<SensorplanHistoryAPI.SensorplanFull>;

export interface SensorplanCreateParams {
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
   * The type of records that comprise this parent set (COLLECT, CONTACT).
   */
  recType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The start time of the plan or schedule, in ISO 8601 UTC format.
   */
  startTime: string;

  /**
   * The type of this sensor plan/schedule (PLAN, REQUEST, SCHEDULE).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The list of collect requests belonging to the SensorPlan. Each collect request
   * is associated with a parent SensorPlan via the IdPlan. If provided, the list
   * must have the same size as reqTotal.
   */
  collectRequests?: Array<SensorplanCreateParams.CollectRequest>;

  /**
   * The customer for this plan or schedule.
   */
  customer?: string;

  /**
   * The end time of the plan or schedule, in ISO 8601 UTC format.
   */
  endTime?: string;

  /**
   * Unique identifier of the requested/schedule/planned sensor associated with this
   * request.
   */
  idSensor?: string;

  /**
   * Name associated with this plan or schedule.
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
   * Optional identifier provided by the source to indicate the sensor identifier
   * requested/scheduled/planned for this request. This may be an internal identifier
   * and not necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * The purpose/description of this plan or schedule.
   */
  purpose?: string;

  /**
   * The total number of requests contained in this plan or schedule. Value of this
   * field must match the size of collectRequest list if the list is provided and can
   * be null or any value otherwise.
   */
  reqTotal?: number;

  /**
   * The sensor or ground network associated with this plan or schedule.
   */
  senNetwork?: string;

  /**
   * The status of this plan or schedule (ACCEPTED, APPROVED, COMPLETED, PROPOSED,
   * REJECTED, REQUESTED, SCHEDULED).
   */
  status?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;
}

export namespace SensorplanCreateParams {
  /**
   * Collect Requests support several types of individual requests, or
   * planned/scheduled tasks on sensors and/or orbital objects. Options are provided
   * to accomodate most common sensor contact and collection applications, including
   * single sensor-object tasking, search operations, and TT&C support. Multiple
   * requests originating from a plan or schedule may be associated to a sensor plan
   * if desired.
   */
  export interface CollectRequest {
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
     * The start time or earliest time of the collect or contact request window, in ISO
     * 8601 UTC format.
     */
    startTime: string;

    /**
     * The type of this collect or contact request (DIRECTED SEARCH, DWELL, OBJECT,
     * POL, RATE TRACK, SEARCH, SOI, STARE, TTC, VOLUME SEARCH, etc.).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Height above WGS-84 ellipsoid (HAE), in kilometers. If an accompanying stopAlt
     * is provided, then alt value can be assumed to be the starting altitude of a
     * volume definition.
     */
    alt?: number;

    /**
     * The argument of perigee is the angle, in degrees, formed between the perigee and
     * the ascending node.
     */
    argOfPerigee?: number;

    /**
     * The expected or directed azimuth angle, in degrees, for search or target
     * acquisition.
     */
    az?: number;

    /**
     * The customer for this request.
     */
    customer?: string;

    /**
     * The expected or directed declination angle, in degrees, for search or target
     * acquisition.
     */
    dec?: number;

    /**
     * The duration of the collect request, in seconds. If both duration and endTime
     * are provided, the endTime is assumed to take precedence.
     */
    duration?: number;

    /**
     * The dwell ID associated with this request. A dwell ID is dwell point specific
     * and a DWELL request consist of many dwell point requests.
     */
    dwellId?: string;

    /**
     * The orbital eccentricity of an astronomical object is a parameter that
     * determines the amount by which its orbit around another body deviates from a
     * perfect circle.
     */
    eccentricity?: number;

    /**
     * The expected or directed elevation angle, in degrees, for search or target
     * acquisition.
     */
    el?: number;

    /**
     * An element set is a collection of Keplerian orbital elements describing an orbit
     * of a particular satellite. The data is used along with an orbit propagator in
     * order to predict the motion of a satellite. The element set, or elset for short,
     * consists of identification data, the classical elements and drag parameters.
     */
    elset?: ElsetsAPI.ElsetIngest;

    /**
     * The end time of the collect or contact request window, in ISO 8601 UTC format.
     * If no endTime or duration is provided it is assumed the request is either
     * ongoing or that the request is for a specified number of tracks (numTracks). If
     * both duration and endTime are provided, the endTime is assumed to take
     * precedence.
     */
    endTime?: string;

    /**
     * Epoch time, in ISO 8601 UTC format, of the orbital elements.
     */
    epoch?: string;

    /**
     * ID of the UDL Ephemeris Set of the object associated with this request.
     */
    esId?: string;

    /**
     * The extent of the azimuth angle, in degrees, from center azimuth to define a
     * spatial volume.
     */
    extentAz?: number;

    /**
     * The extent of the elevation angle, in degrees, from center elevation to define a
     * spatial volume.
     */
    extentEl?: number;

    /**
     * The extent of the range, in km, from center range to define a spatial volume.
     */
    extentRange?: number;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * For optical sensors, the frame rate of the camera, in Hz.
     */
    frameRate?: number;

    /**
     * The estimated or expected emission frequency of the target, in MHz.
     */
    freq?: number;

    /**
     * The maximum frequency of interest, in MHz.
     */
    freqMax?: number;

    /**
     * The minimum frequency of interest, in MHz. If only minimum frequency is provided
     * it is assumed to be minimum reportable frequency.
     */
    freqMin?: number;

    /**
     * ID of the UDL Elset of the object associated with this request.
     */
    idElset?: string;

    /**
     * ID of the UDL Manifold Elset of the object associated with this request. A
     * Manifold Elset provides theoretical Keplerian orbital elements belonging to an
     * object of interest's manifold describing a possible/theoretical orbit for an
     * object of interest for tasking purposes.
     */
    idManifold?: string;

    /**
     * The unique ID of the collect request record from which this request originated.
     * This may be used for cases of sensor-to-sensor tasking, such as tip/cue
     * operations.
     */
    idParentReq?: string;

    /**
     * Unique identifier of the parent plan or schedule associated with this request.
     * If null, this request is assumed not associated with a plan or schedule.
     */
    idPlan?: string;

    /**
     * Unique identifier of the requested/scheduled/planned sensor associated with this
     * request. If both idSensor and origSensorId are null then the request is assumed
     * to be a general request for observations or contact on an object, if specified,
     * or an area/volume. In this case, the requester may specify a desired obType.
     */
    idSensor?: string;

    /**
     * ID of the UDL State Vector of the object or central vector associated with this
     * request.
     */
    idStateVector?: string;

    /**
     * The angle, in degrees, between the equator and the orbit plane when looking from
     * the center of the Earth. Inclination ranges from 0-180 degrees, with 0-90
     * representing posigrade orbits and 90-180 representing retrograde orbits.
     */
    inclination?: number;

    /**
     * For optical sensors, the integration time per camera frame, in milliseconds.
     */
    integrationTime?: number;

    /**
     * Inter-Range Operations Number. Four-digit identifier used to schedule and
     * identify AFSCN contact support for booster, launch, and on-orbit operations.
     */
    iron?: number;

    /**
     * The target object irradiance value.
     */
    irradiance?: number;

    /**
     * WGS-84 latitude, in degrees. -90 to 90 degrees (negative values south of
     * equator). If an accompanying stopLat is provided, then the lat value can be
     * assumed to be the starting latitude of a volume definition.
     */
    lat?: number;

    /**
     * WGS-84 longitude, in degrees. -180 to 180 degrees (negative values west of Prime
     * Meridian). If an accompanying stopLon is provided, then lon value can be assumed
     * to be the starting longitude of a volume definition.
     */
    lon?: number;

    /**
     * The timestamp of the external message from which this request originated, if
     * applicable, in ISO8601 UTC format with millisecond precision.
     */
    msgCreateDate?: string;

    /**
     * The type of external message from which this request originated.
     */
    msgType?: string;

    /**
     * Notes or comments associated with this request.
     */
    notes?: string;

    /**
     * For optical sensors, the requested number of frames to capture at each sensor
     * step.
     */
    numFrames?: number;

    /**
     * The number of requested observations on the target.
     */
    numObs?: number;

    /**
     * The number of requested tracks on the target. If numTracks is not provided it is
     * assumed to indicate all possible observations every pass over the request
     * duration or within the request start/end window.
     */
    numTracks?: number;

    /**
     * Optional type of observation (EO, IR, RADAR, RF-ACTIVE, RF-PASSIVE, OTHER)
     * requested. This field may correspond to a request of a specific sensor, or to a
     * general non sensor specific request.
     */
    obType?: string;

    /**
     * The orbit regime of the target (GEO, HEO, LAUNCH, LEO, MEO, OTHER).
     */
    orbitRegime?: string;

    /**
     * The magnitude of rotation, in degrees, between the xAngle direction and locally
     * defined equinoctial plane. A positive value indicates clockwise rotation about
     * the sensor boresight vector.
     */
    orientAngle?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the data source to indicate the target object of
     * this request. This may be an internal identifier and not necessarily map to a
     * valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by the source to indicate the sensor identifier
     * requested/scheduled/planned for this request. This may be an internal identifier
     * and not necessarily a valid sensor ID. If both idSensor and origSensorId are
     * null then the request is assumed to be a general request for observations or
     * contact on an object, if specified, or an area/volume. In this case, the
     * requester may specify a desired obType.
     */
    origSensorId?: string;

    /**
     * Index number (integer) for records within a collection plan or schedule.
     */
    planIndex?: number;

    /**
     * The RF polarization (H, LHC, RHC, V).
     */
    polarization?: string;

    /**
     * The priority of the collect request (EMERGENCY, FLASH, IMMEDIATE, PRIORITY,
     * ROUTINE).
     */
    priority?: string;

    /**
     * The expected or directed right ascension angle, in degrees, for search or target
     * acquisition.
     */
    ra?: number;

    /**
     * Right ascension of the ascending node, or RAAN is the angle as measured in
     * degrees eastwards (or, as seen from the north, counterclockwise) from the First
     * Point of Aries to the ascending node.
     */
    raan?: number;

    /**
     * The expected acquisition range or defined center range, in km.
     */
    range?: number;

    /**
     * The Radar Cross-Section of the target, in m^2.
     */
    rcs?: number;

    /**
     * The maximum Radar Cross-Section of the target, in m^2.
     */
    rcsMax?: number;

    /**
     * The minimum Radar Cross-Section of the target, in m^2. If only minimum RCS is
     * provided it is assumed to be minimum reportable RCS.
     */
    rcsMin?: number;

    /**
     * The fraction of solar energy reflected from target.
     */
    reflectance?: number;

    /**
     * Satellite/catalog number of the target on-orbit object for this request.
     */
    satNo?: number;

    /**
     * Pre-coordinated code, direction, or configuration to be executed by the sensor
     * or site for this collect or contact.
     */
    scenario?: string;

    /**
     * The average of the periapsis and apoapsis distances, in kilometers. For circular
     * orbits, the semimajor axis is the distance between the centers of the bodies.
     */
    semiMajorAxis?: number;

    /**
     * The spectral model used for the irradiance calculation.
     */
    spectralModel?: string;

    /**
     * The maximum inclination, in degrees, to be used in search operations.
     */
    srchInc?: number;

    /**
     * The search pattern to be executed for this request (e.g. PICKET-FENCE, SCAN,
     * etc.).
     */
    srchPattern?: string;

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
    stateVector?: StatevectorAPI.StateVectorIngest;

    /**
     * The stopping HAE WGS-84 height above ellipsoid (HAE), of a volume definition, in
     * kilometers. The stopAlt value is only meaningful if a (starting) alt value is
     * provided.
     */
    stopAlt?: number;

    /**
     * The stopping WGS-84 latitude of a volume definition, in degrees. -90 to 90
     * degrees (negative values south of equator). The stopLat value is only meaningful
     * if a (starting) lat value is provided.
     */
    stopLat?: number;

    /**
     * The stopping WGS-84 longitude of a volume definition, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian). The stopLon value is only
     * meaningful if a (starting) lon value is provided.
     */
    stopLon?: number;

    /**
     * The (SSN) tasking suffix (A-Z) associated with this request. The suffix defines
     * the amount of observational data and the frequency of collection. Note that
     * suffix definitions are sensor type specific.
     */
    suffix?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * The minimum object (diameter) size, in meters, to be reported.
     */
    targetSize?: number;

    /**
     * The (SSN) tasking category (1-5) associated with this request. The tasking
     * category defines the priority of gathering and transmitting the requested
     * observational data. Note that category definitions are sensor type specific.
     */
    taskCategory?: number;

    /**
     * The tasking group to which the target object is assigned.
     */
    taskGroup?: string;

    /**
     * Task ID associated with this request. A task ID may be associated with a single
     * collect request or may be used to tie together the sub-requests of a full
     * collect, for example a DWELL consisting of many dwell points.
     */
    taskId?: string;

    /**
     * The true anomaly defines the angular position, in degrees, of the object on it's
     * orbital path as measured from the orbit focal point at epoch. The true anomaly
     * is referenced from perigee.
     */
    trueAnomoly?: number;

    /**
     * Boolean indicating that this collect request is UCT follow-up.
     */
    uctFollowUp?: boolean;

    /**
     * The estimated or expected visual magnitude of the target, in Magnitudes (M).
     */
    visMag?: number;

    /**
     * The maximum estimated or expected visual magnitude of the target, in Magnitudes
     * (M).
     */
    visMagMax?: number;

    /**
     * The minimum estimated or expected visual magnitude of the target, in Magnitudes
     * (M). If only minimum vismag is provided it is assumed to be minimum reportable
     * vismag.
     */
    visMagMin?: number;

    /**
     * The angular distance, in degrees, in the sensor-x direction from scan center
     * defined by the central vector. The specification of xAngle and yAngle defines a
     * rectangle of width 2*xAngle and height 2*yAngle centered about the central
     * vector.
     */
    xAngle?: number;

    /**
     * The angular distance, in degrees, in the sensor-y direction from scan center
     * defined by the central vector. The specification of xAngle and yAngle defines a
     * rectangle of width 2*xAngle and height 2*yAngle centered about the central
     * vector.
     */
    yAngle?: number;
  }
}

export interface SensorplanUpdateParams {
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
   * The type of records that comprise this parent set (COLLECT, CONTACT).
   */
  recType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The start time of the plan or schedule, in ISO 8601 UTC format.
   */
  startTime: string;

  /**
   * The type of this sensor plan/schedule (PLAN, REQUEST, SCHEDULE).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * The list of collect requests belonging to the SensorPlan. Each collect request
   * is associated with a parent SensorPlan via the IdPlan. If provided, the list
   * must have the same size as reqTotal.
   */
  collectRequests?: Array<SensorplanUpdateParams.CollectRequest>;

  /**
   * The customer for this plan or schedule.
   */
  customer?: string;

  /**
   * The end time of the plan or schedule, in ISO 8601 UTC format.
   */
  endTime?: string;

  /**
   * Unique identifier of the requested/schedule/planned sensor associated with this
   * request.
   */
  idSensor?: string;

  /**
   * Name associated with this plan or schedule.
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
   * Optional identifier provided by the source to indicate the sensor identifier
   * requested/scheduled/planned for this request. This may be an internal identifier
   * and not necessarily a valid sensor ID.
   */
  origSensorId?: string;

  /**
   * The purpose/description of this plan or schedule.
   */
  purpose?: string;

  /**
   * The total number of requests contained in this plan or schedule. Value of this
   * field must match the size of collectRequest list if the list is provided and can
   * be null or any value otherwise.
   */
  reqTotal?: number;

  /**
   * The sensor or ground network associated with this plan or schedule.
   */
  senNetwork?: string;

  /**
   * The status of this plan or schedule (ACCEPTED, APPROVED, COMPLETED, PROPOSED,
   * REJECTED, REQUESTED, SCHEDULED).
   */
  status?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;
}

export namespace SensorplanUpdateParams {
  /**
   * Collect Requests support several types of individual requests, or
   * planned/scheduled tasks on sensors and/or orbital objects. Options are provided
   * to accomodate most common sensor contact and collection applications, including
   * single sensor-object tasking, search operations, and TT&C support. Multiple
   * requests originating from a plan or schedule may be associated to a sensor plan
   * if desired.
   */
  export interface CollectRequest {
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
     * The start time or earliest time of the collect or contact request window, in ISO
     * 8601 UTC format.
     */
    startTime: string;

    /**
     * The type of this collect or contact request (DIRECTED SEARCH, DWELL, OBJECT,
     * POL, RATE TRACK, SEARCH, SOI, STARE, TTC, VOLUME SEARCH, etc.).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Height above WGS-84 ellipsoid (HAE), in kilometers. If an accompanying stopAlt
     * is provided, then alt value can be assumed to be the starting altitude of a
     * volume definition.
     */
    alt?: number;

    /**
     * The argument of perigee is the angle, in degrees, formed between the perigee and
     * the ascending node.
     */
    argOfPerigee?: number;

    /**
     * The expected or directed azimuth angle, in degrees, for search or target
     * acquisition.
     */
    az?: number;

    /**
     * The customer for this request.
     */
    customer?: string;

    /**
     * The expected or directed declination angle, in degrees, for search or target
     * acquisition.
     */
    dec?: number;

    /**
     * The duration of the collect request, in seconds. If both duration and endTime
     * are provided, the endTime is assumed to take precedence.
     */
    duration?: number;

    /**
     * The dwell ID associated with this request. A dwell ID is dwell point specific
     * and a DWELL request consist of many dwell point requests.
     */
    dwellId?: string;

    /**
     * The orbital eccentricity of an astronomical object is a parameter that
     * determines the amount by which its orbit around another body deviates from a
     * perfect circle.
     */
    eccentricity?: number;

    /**
     * The expected or directed elevation angle, in degrees, for search or target
     * acquisition.
     */
    el?: number;

    /**
     * An element set is a collection of Keplerian orbital elements describing an orbit
     * of a particular satellite. The data is used along with an orbit propagator in
     * order to predict the motion of a satellite. The element set, or elset for short,
     * consists of identification data, the classical elements and drag parameters.
     */
    elset?: ElsetsAPI.ElsetIngest;

    /**
     * The end time of the collect or contact request window, in ISO 8601 UTC format.
     * If no endTime or duration is provided it is assumed the request is either
     * ongoing or that the request is for a specified number of tracks (numTracks). If
     * both duration and endTime are provided, the endTime is assumed to take
     * precedence.
     */
    endTime?: string;

    /**
     * Epoch time, in ISO 8601 UTC format, of the orbital elements.
     */
    epoch?: string;

    /**
     * ID of the UDL Ephemeris Set of the object associated with this request.
     */
    esId?: string;

    /**
     * The extent of the azimuth angle, in degrees, from center azimuth to define a
     * spatial volume.
     */
    extentAz?: number;

    /**
     * The extent of the elevation angle, in degrees, from center elevation to define a
     * spatial volume.
     */
    extentEl?: number;

    /**
     * The extent of the range, in km, from center range to define a spatial volume.
     */
    extentRange?: number;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * For optical sensors, the frame rate of the camera, in Hz.
     */
    frameRate?: number;

    /**
     * The estimated or expected emission frequency of the target, in MHz.
     */
    freq?: number;

    /**
     * The maximum frequency of interest, in MHz.
     */
    freqMax?: number;

    /**
     * The minimum frequency of interest, in MHz. If only minimum frequency is provided
     * it is assumed to be minimum reportable frequency.
     */
    freqMin?: number;

    /**
     * ID of the UDL Elset of the object associated with this request.
     */
    idElset?: string;

    /**
     * ID of the UDL Manifold Elset of the object associated with this request. A
     * Manifold Elset provides theoretical Keplerian orbital elements belonging to an
     * object of interest's manifold describing a possible/theoretical orbit for an
     * object of interest for tasking purposes.
     */
    idManifold?: string;

    /**
     * The unique ID of the collect request record from which this request originated.
     * This may be used for cases of sensor-to-sensor tasking, such as tip/cue
     * operations.
     */
    idParentReq?: string;

    /**
     * Unique identifier of the parent plan or schedule associated with this request.
     * If null, this request is assumed not associated with a plan or schedule.
     */
    idPlan?: string;

    /**
     * Unique identifier of the requested/scheduled/planned sensor associated with this
     * request. If both idSensor and origSensorId are null then the request is assumed
     * to be a general request for observations or contact on an object, if specified,
     * or an area/volume. In this case, the requester may specify a desired obType.
     */
    idSensor?: string;

    /**
     * ID of the UDL State Vector of the object or central vector associated with this
     * request.
     */
    idStateVector?: string;

    /**
     * The angle, in degrees, between the equator and the orbit plane when looking from
     * the center of the Earth. Inclination ranges from 0-180 degrees, with 0-90
     * representing posigrade orbits and 90-180 representing retrograde orbits.
     */
    inclination?: number;

    /**
     * For optical sensors, the integration time per camera frame, in milliseconds.
     */
    integrationTime?: number;

    /**
     * Inter-Range Operations Number. Four-digit identifier used to schedule and
     * identify AFSCN contact support for booster, launch, and on-orbit operations.
     */
    iron?: number;

    /**
     * The target object irradiance value.
     */
    irradiance?: number;

    /**
     * WGS-84 latitude, in degrees. -90 to 90 degrees (negative values south of
     * equator). If an accompanying stopLat is provided, then the lat value can be
     * assumed to be the starting latitude of a volume definition.
     */
    lat?: number;

    /**
     * WGS-84 longitude, in degrees. -180 to 180 degrees (negative values west of Prime
     * Meridian). If an accompanying stopLon is provided, then lon value can be assumed
     * to be the starting longitude of a volume definition.
     */
    lon?: number;

    /**
     * The timestamp of the external message from which this request originated, if
     * applicable, in ISO8601 UTC format with millisecond precision.
     */
    msgCreateDate?: string;

    /**
     * The type of external message from which this request originated.
     */
    msgType?: string;

    /**
     * Notes or comments associated with this request.
     */
    notes?: string;

    /**
     * For optical sensors, the requested number of frames to capture at each sensor
     * step.
     */
    numFrames?: number;

    /**
     * The number of requested observations on the target.
     */
    numObs?: number;

    /**
     * The number of requested tracks on the target. If numTracks is not provided it is
     * assumed to indicate all possible observations every pass over the request
     * duration or within the request start/end window.
     */
    numTracks?: number;

    /**
     * Optional type of observation (EO, IR, RADAR, RF-ACTIVE, RF-PASSIVE, OTHER)
     * requested. This field may correspond to a request of a specific sensor, or to a
     * general non sensor specific request.
     */
    obType?: string;

    /**
     * The orbit regime of the target (GEO, HEO, LAUNCH, LEO, MEO, OTHER).
     */
    orbitRegime?: string;

    /**
     * The magnitude of rotation, in degrees, between the xAngle direction and locally
     * defined equinoctial plane. A positive value indicates clockwise rotation about
     * the sensor boresight vector.
     */
    orientAngle?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the data source to indicate the target object of
     * this request. This may be an internal identifier and not necessarily map to a
     * valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier provided by the source to indicate the sensor identifier
     * requested/scheduled/planned for this request. This may be an internal identifier
     * and not necessarily a valid sensor ID. If both idSensor and origSensorId are
     * null then the request is assumed to be a general request for observations or
     * contact on an object, if specified, or an area/volume. In this case, the
     * requester may specify a desired obType.
     */
    origSensorId?: string;

    /**
     * Index number (integer) for records within a collection plan or schedule.
     */
    planIndex?: number;

    /**
     * The RF polarization (H, LHC, RHC, V).
     */
    polarization?: string;

    /**
     * The priority of the collect request (EMERGENCY, FLASH, IMMEDIATE, PRIORITY,
     * ROUTINE).
     */
    priority?: string;

    /**
     * The expected or directed right ascension angle, in degrees, for search or target
     * acquisition.
     */
    ra?: number;

    /**
     * Right ascension of the ascending node, or RAAN is the angle as measured in
     * degrees eastwards (or, as seen from the north, counterclockwise) from the First
     * Point of Aries to the ascending node.
     */
    raan?: number;

    /**
     * The expected acquisition range or defined center range, in km.
     */
    range?: number;

    /**
     * The Radar Cross-Section of the target, in m^2.
     */
    rcs?: number;

    /**
     * The maximum Radar Cross-Section of the target, in m^2.
     */
    rcsMax?: number;

    /**
     * The minimum Radar Cross-Section of the target, in m^2. If only minimum RCS is
     * provided it is assumed to be minimum reportable RCS.
     */
    rcsMin?: number;

    /**
     * The fraction of solar energy reflected from target.
     */
    reflectance?: number;

    /**
     * Satellite/catalog number of the target on-orbit object for this request.
     */
    satNo?: number;

    /**
     * Pre-coordinated code, direction, or configuration to be executed by the sensor
     * or site for this collect or contact.
     */
    scenario?: string;

    /**
     * The average of the periapsis and apoapsis distances, in kilometers. For circular
     * orbits, the semimajor axis is the distance between the centers of the bodies.
     */
    semiMajorAxis?: number;

    /**
     * The spectral model used for the irradiance calculation.
     */
    spectralModel?: string;

    /**
     * The maximum inclination, in degrees, to be used in search operations.
     */
    srchInc?: number;

    /**
     * The search pattern to be executed for this request (e.g. PICKET-FENCE, SCAN,
     * etc.).
     */
    srchPattern?: string;

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
    stateVector?: StatevectorAPI.StateVectorIngest;

    /**
     * The stopping HAE WGS-84 height above ellipsoid (HAE), of a volume definition, in
     * kilometers. The stopAlt value is only meaningful if a (starting) alt value is
     * provided.
     */
    stopAlt?: number;

    /**
     * The stopping WGS-84 latitude of a volume definition, in degrees. -90 to 90
     * degrees (negative values south of equator). The stopLat value is only meaningful
     * if a (starting) lat value is provided.
     */
    stopLat?: number;

    /**
     * The stopping WGS-84 longitude of a volume definition, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian). The stopLon value is only
     * meaningful if a (starting) lon value is provided.
     */
    stopLon?: number;

    /**
     * The (SSN) tasking suffix (A-Z) associated with this request. The suffix defines
     * the amount of observational data and the frequency of collection. Note that
     * suffix definitions are sensor type specific.
     */
    suffix?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * The minimum object (diameter) size, in meters, to be reported.
     */
    targetSize?: number;

    /**
     * The (SSN) tasking category (1-5) associated with this request. The tasking
     * category defines the priority of gathering and transmitting the requested
     * observational data. Note that category definitions are sensor type specific.
     */
    taskCategory?: number;

    /**
     * The tasking group to which the target object is assigned.
     */
    taskGroup?: string;

    /**
     * Task ID associated with this request. A task ID may be associated with a single
     * collect request or may be used to tie together the sub-requests of a full
     * collect, for example a DWELL consisting of many dwell points.
     */
    taskId?: string;

    /**
     * The true anomaly defines the angular position, in degrees, of the object on it's
     * orbital path as measured from the orbit focal point at epoch. The true anomaly
     * is referenced from perigee.
     */
    trueAnomoly?: number;

    /**
     * Boolean indicating that this collect request is UCT follow-up.
     */
    uctFollowUp?: boolean;

    /**
     * The estimated or expected visual magnitude of the target, in Magnitudes (M).
     */
    visMag?: number;

    /**
     * The maximum estimated or expected visual magnitude of the target, in Magnitudes
     * (M).
     */
    visMagMax?: number;

    /**
     * The minimum estimated or expected visual magnitude of the target, in Magnitudes
     * (M). If only minimum vismag is provided it is assumed to be minimum reportable
     * vismag.
     */
    visMagMin?: number;

    /**
     * The angular distance, in degrees, in the sensor-x direction from scan center
     * defined by the central vector. The specification of xAngle and yAngle defines a
     * rectangle of width 2*xAngle and height 2*yAngle centered about the central
     * vector.
     */
    xAngle?: number;

    /**
     * The angular distance, in degrees, in the sensor-y direction from scan center
     * defined by the central vector. The specification of xAngle and yAngle defines a
     * rectangle of width 2*xAngle and height 2*yAngle centered about the central
     * vector.
     */
    yAngle?: number;
  }
}

export interface SensorplanListParams {
  /**
   * The start time of the plan or schedule, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;
}

export interface SensorplanCountParams {
  /**
   * The start time of the plan or schedule, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;
}

export type SensorplanCreateBulkV2Params = Array<SensorplanCreateBulkV2Params.Body>;

export namespace SensorplanCreateBulkV2Params {
  /**
   * A Plan is used to aggregate two or more of the same type of record to a parent
   * entity, with the planId (UUID) being included in all of the subordinate records,
   * enabling resolution back to the parent.
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
     * The type of records that comprise this parent set (COLLECT, CONTACT).
     */
    recType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The start time of the plan or schedule, in ISO 8601 UTC format.
     */
    startTime: string;

    /**
     * The type of this sensor plan/schedule (PLAN, REQUEST, SCHEDULE).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The list of collect requests belonging to the SensorPlan. Each collect request
     * is associated with a parent SensorPlan via the IdPlan. If provided, the list
     * must have the same size as reqTotal.
     */
    collectRequests?: Array<Body.CollectRequest>;

    /**
     * The customer for this plan or schedule.
     */
    customer?: string;

    /**
     * The end time of the plan or schedule, in ISO 8601 UTC format.
     */
    endTime?: string;

    /**
     * Unique identifier of the requested/schedule/planned sensor associated with this
     * request.
     */
    idSensor?: string;

    /**
     * Name associated with this plan or schedule.
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
     * Optional identifier provided by the source to indicate the sensor identifier
     * requested/scheduled/planned for this request. This may be an internal identifier
     * and not necessarily a valid sensor ID.
     */
    origSensorId?: string;

    /**
     * The purpose/description of this plan or schedule.
     */
    purpose?: string;

    /**
     * The total number of requests contained in this plan or schedule. Value of this
     * field must match the size of collectRequest list if the list is provided and can
     * be null or any value otherwise.
     */
    reqTotal?: number;

    /**
     * The sensor or ground network associated with this plan or schedule.
     */
    senNetwork?: string;

    /**
     * The status of this plan or schedule (ACCEPTED, APPROVED, COMPLETED, PROPOSED,
     * REJECTED, REQUESTED, SCHEDULED).
     */
    status?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;
  }

  export namespace Body {
    /**
     * Collect Requests support several types of individual requests, or
     * planned/scheduled tasks on sensors and/or orbital objects. Options are provided
     * to accomodate most common sensor contact and collection applications, including
     * single sensor-object tasking, search operations, and TT&C support. Multiple
     * requests originating from a plan or schedule may be associated to a sensor plan
     * if desired.
     */
    export interface CollectRequest {
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
       * The start time or earliest time of the collect or contact request window, in ISO
       * 8601 UTC format.
       */
      startTime: string;

      /**
       * The type of this collect or contact request (DIRECTED SEARCH, DWELL, OBJECT,
       * POL, RATE TRACK, SEARCH, SOI, STARE, TTC, VOLUME SEARCH, etc.).
       */
      type: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Height above WGS-84 ellipsoid (HAE), in kilometers. If an accompanying stopAlt
       * is provided, then alt value can be assumed to be the starting altitude of a
       * volume definition.
       */
      alt?: number;

      /**
       * The argument of perigee is the angle, in degrees, formed between the perigee and
       * the ascending node.
       */
      argOfPerigee?: number;

      /**
       * The expected or directed azimuth angle, in degrees, for search or target
       * acquisition.
       */
      az?: number;

      /**
       * The customer for this request.
       */
      customer?: string;

      /**
       * The expected or directed declination angle, in degrees, for search or target
       * acquisition.
       */
      dec?: number;

      /**
       * The duration of the collect request, in seconds. If both duration and endTime
       * are provided, the endTime is assumed to take precedence.
       */
      duration?: number;

      /**
       * The dwell ID associated with this request. A dwell ID is dwell point specific
       * and a DWELL request consist of many dwell point requests.
       */
      dwellId?: string;

      /**
       * The orbital eccentricity of an astronomical object is a parameter that
       * determines the amount by which its orbit around another body deviates from a
       * perfect circle.
       */
      eccentricity?: number;

      /**
       * The expected or directed elevation angle, in degrees, for search or target
       * acquisition.
       */
      el?: number;

      /**
       * An element set is a collection of Keplerian orbital elements describing an orbit
       * of a particular satellite. The data is used along with an orbit propagator in
       * order to predict the motion of a satellite. The element set, or elset for short,
       * consists of identification data, the classical elements and drag parameters.
       */
      elset?: ElsetsAPI.ElsetIngest;

      /**
       * The end time of the collect or contact request window, in ISO 8601 UTC format.
       * If no endTime or duration is provided it is assumed the request is either
       * ongoing or that the request is for a specified number of tracks (numTracks). If
       * both duration and endTime are provided, the endTime is assumed to take
       * precedence.
       */
      endTime?: string;

      /**
       * Epoch time, in ISO 8601 UTC format, of the orbital elements.
       */
      epoch?: string;

      /**
       * ID of the UDL Ephemeris Set of the object associated with this request.
       */
      esId?: string;

      /**
       * The extent of the azimuth angle, in degrees, from center azimuth to define a
       * spatial volume.
       */
      extentAz?: number;

      /**
       * The extent of the elevation angle, in degrees, from center elevation to define a
       * spatial volume.
       */
      extentEl?: number;

      /**
       * The extent of the range, in km, from center range to define a spatial volume.
       */
      extentRange?: number;

      /**
       * Optional ID from external systems. This field has no meaning within UDL and is
       * provided as a convenience for systems that require tracking of an internal
       * system generated ID.
       */
      externalId?: string;

      /**
       * For optical sensors, the frame rate of the camera, in Hz.
       */
      frameRate?: number;

      /**
       * The estimated or expected emission frequency of the target, in MHz.
       */
      freq?: number;

      /**
       * The maximum frequency of interest, in MHz.
       */
      freqMax?: number;

      /**
       * The minimum frequency of interest, in MHz. If only minimum frequency is provided
       * it is assumed to be minimum reportable frequency.
       */
      freqMin?: number;

      /**
       * ID of the UDL Elset of the object associated with this request.
       */
      idElset?: string;

      /**
       * ID of the UDL Manifold Elset of the object associated with this request. A
       * Manifold Elset provides theoretical Keplerian orbital elements belonging to an
       * object of interest's manifold describing a possible/theoretical orbit for an
       * object of interest for tasking purposes.
       */
      idManifold?: string;

      /**
       * The unique ID of the collect request record from which this request originated.
       * This may be used for cases of sensor-to-sensor tasking, such as tip/cue
       * operations.
       */
      idParentReq?: string;

      /**
       * Unique identifier of the parent plan or schedule associated with this request.
       * If null, this request is assumed not associated with a plan or schedule.
       */
      idPlan?: string;

      /**
       * Unique identifier of the requested/scheduled/planned sensor associated with this
       * request. If both idSensor and origSensorId are null then the request is assumed
       * to be a general request for observations or contact on an object, if specified,
       * or an area/volume. In this case, the requester may specify a desired obType.
       */
      idSensor?: string;

      /**
       * ID of the UDL State Vector of the object or central vector associated with this
       * request.
       */
      idStateVector?: string;

      /**
       * The angle, in degrees, between the equator and the orbit plane when looking from
       * the center of the Earth. Inclination ranges from 0-180 degrees, with 0-90
       * representing posigrade orbits and 90-180 representing retrograde orbits.
       */
      inclination?: number;

      /**
       * For optical sensors, the integration time per camera frame, in milliseconds.
       */
      integrationTime?: number;

      /**
       * Inter-Range Operations Number. Four-digit identifier used to schedule and
       * identify AFSCN contact support for booster, launch, and on-orbit operations.
       */
      iron?: number;

      /**
       * The target object irradiance value.
       */
      irradiance?: number;

      /**
       * WGS-84 latitude, in degrees. -90 to 90 degrees (negative values south of
       * equator). If an accompanying stopLat is provided, then the lat value can be
       * assumed to be the starting latitude of a volume definition.
       */
      lat?: number;

      /**
       * WGS-84 longitude, in degrees. -180 to 180 degrees (negative values west of Prime
       * Meridian). If an accompanying stopLon is provided, then lon value can be assumed
       * to be the starting longitude of a volume definition.
       */
      lon?: number;

      /**
       * The timestamp of the external message from which this request originated, if
       * applicable, in ISO8601 UTC format with millisecond precision.
       */
      msgCreateDate?: string;

      /**
       * The type of external message from which this request originated.
       */
      msgType?: string;

      /**
       * Notes or comments associated with this request.
       */
      notes?: string;

      /**
       * For optical sensors, the requested number of frames to capture at each sensor
       * step.
       */
      numFrames?: number;

      /**
       * The number of requested observations on the target.
       */
      numObs?: number;

      /**
       * The number of requested tracks on the target. If numTracks is not provided it is
       * assumed to indicate all possible observations every pass over the request
       * duration or within the request start/end window.
       */
      numTracks?: number;

      /**
       * Optional type of observation (EO, IR, RADAR, RF-ACTIVE, RF-PASSIVE, OTHER)
       * requested. This field may correspond to a request of a specific sensor, or to a
       * general non sensor specific request.
       */
      obType?: string;

      /**
       * The orbit regime of the target (GEO, HEO, LAUNCH, LEO, MEO, OTHER).
       */
      orbitRegime?: string;

      /**
       * The magnitude of rotation, in degrees, between the xAngle direction and locally
       * defined equinoctial plane. A positive value indicates clockwise rotation about
       * the sensor boresight vector.
       */
      orientAngle?: number;

      /**
       * Originating system or organization which produced the data, if different from
       * the source. The origin may be different than the source if the source was a
       * mediating system which forwarded the data on behalf of the origin system. If
       * null, the source may be assumed to be the origin.
       */
      origin?: string;

      /**
       * Optional identifier provided by the data source to indicate the target object of
       * this request. This may be an internal identifier and not necessarily map to a
       * valid satellite number.
       */
      origObjectId?: string;

      /**
       * Optional identifier provided by the source to indicate the sensor identifier
       * requested/scheduled/planned for this request. This may be an internal identifier
       * and not necessarily a valid sensor ID. If both idSensor and origSensorId are
       * null then the request is assumed to be a general request for observations or
       * contact on an object, if specified, or an area/volume. In this case, the
       * requester may specify a desired obType.
       */
      origSensorId?: string;

      /**
       * Index number (integer) for records within a collection plan or schedule.
       */
      planIndex?: number;

      /**
       * The RF polarization (H, LHC, RHC, V).
       */
      polarization?: string;

      /**
       * The priority of the collect request (EMERGENCY, FLASH, IMMEDIATE, PRIORITY,
       * ROUTINE).
       */
      priority?: string;

      /**
       * The expected or directed right ascension angle, in degrees, for search or target
       * acquisition.
       */
      ra?: number;

      /**
       * Right ascension of the ascending node, or RAAN is the angle as measured in
       * degrees eastwards (or, as seen from the north, counterclockwise) from the First
       * Point of Aries to the ascending node.
       */
      raan?: number;

      /**
       * The expected acquisition range or defined center range, in km.
       */
      range?: number;

      /**
       * The Radar Cross-Section of the target, in m^2.
       */
      rcs?: number;

      /**
       * The maximum Radar Cross-Section of the target, in m^2.
       */
      rcsMax?: number;

      /**
       * The minimum Radar Cross-Section of the target, in m^2. If only minimum RCS is
       * provided it is assumed to be minimum reportable RCS.
       */
      rcsMin?: number;

      /**
       * The fraction of solar energy reflected from target.
       */
      reflectance?: number;

      /**
       * Satellite/catalog number of the target on-orbit object for this request.
       */
      satNo?: number;

      /**
       * Pre-coordinated code, direction, or configuration to be executed by the sensor
       * or site for this collect or contact.
       */
      scenario?: string;

      /**
       * The average of the periapsis and apoapsis distances, in kilometers. For circular
       * orbits, the semimajor axis is the distance between the centers of the bodies.
       */
      semiMajorAxis?: number;

      /**
       * The spectral model used for the irradiance calculation.
       */
      spectralModel?: string;

      /**
       * The maximum inclination, in degrees, to be used in search operations.
       */
      srchInc?: number;

      /**
       * The search pattern to be executed for this request (e.g. PICKET-FENCE, SCAN,
       * etc.).
       */
      srchPattern?: string;

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
      stateVector?: StatevectorAPI.StateVectorIngest;

      /**
       * The stopping HAE WGS-84 height above ellipsoid (HAE), of a volume definition, in
       * kilometers. The stopAlt value is only meaningful if a (starting) alt value is
       * provided.
       */
      stopAlt?: number;

      /**
       * The stopping WGS-84 latitude of a volume definition, in degrees. -90 to 90
       * degrees (negative values south of equator). The stopLat value is only meaningful
       * if a (starting) lat value is provided.
       */
      stopLat?: number;

      /**
       * The stopping WGS-84 longitude of a volume definition, in degrees. -180 to 180
       * degrees (negative values west of Prime Meridian). The stopLon value is only
       * meaningful if a (starting) lon value is provided.
       */
      stopLon?: number;

      /**
       * The (SSN) tasking suffix (A-Z) associated with this request. The suffix defines
       * the amount of observational data and the frequency of collection. Note that
       * suffix definitions are sensor type specific.
       */
      suffix?: string;

      /**
       * Optional array of provider/source specific tags for this data, where each
       * element is no longer than 32 characters, used for implementing data owner
       * conditional access controls to restrict access to the data. Should be left null
       * by data providers unless conditional access controls are coordinated with the
       * UDL team.
       */
      tags?: Array<string>;

      /**
       * The minimum object (diameter) size, in meters, to be reported.
       */
      targetSize?: number;

      /**
       * The (SSN) tasking category (1-5) associated with this request. The tasking
       * category defines the priority of gathering and transmitting the requested
       * observational data. Note that category definitions are sensor type specific.
       */
      taskCategory?: number;

      /**
       * The tasking group to which the target object is assigned.
       */
      taskGroup?: string;

      /**
       * Task ID associated with this request. A task ID may be associated with a single
       * collect request or may be used to tie together the sub-requests of a full
       * collect, for example a DWELL consisting of many dwell points.
       */
      taskId?: string;

      /**
       * The true anomaly defines the angular position, in degrees, of the object on it's
       * orbital path as measured from the orbit focal point at epoch. The true anomaly
       * is referenced from perigee.
       */
      trueAnomoly?: number;

      /**
       * Boolean indicating that this collect request is UCT follow-up.
       */
      uctFollowUp?: boolean;

      /**
       * The estimated or expected visual magnitude of the target, in Magnitudes (M).
       */
      visMag?: number;

      /**
       * The maximum estimated or expected visual magnitude of the target, in Magnitudes
       * (M).
       */
      visMagMax?: number;

      /**
       * The minimum estimated or expected visual magnitude of the target, in Magnitudes
       * (M). If only minimum vismag is provided it is assumed to be minimum reportable
       * vismag.
       */
      visMagMin?: number;

      /**
       * The angular distance, in degrees, in the sensor-x direction from scan center
       * defined by the central vector. The specification of xAngle and yAngle defines a
       * rectangle of width 2*xAngle and height 2*yAngle centered about the central
       * vector.
       */
      xAngle?: number;

      /**
       * The angular distance, in degrees, in the sensor-y direction from scan center
       * defined by the central vector. The specification of xAngle and yAngle defines a
       * rectangle of width 2*xAngle and height 2*yAngle centered about the central
       * vector.
       */
      yAngle?: number;
    }
  }
}

export interface SensorplanTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The start time of the plan or schedule, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;
}

Sensorplan.History = History;

export declare namespace Sensorplan {
  export {
    type SensorplanListResponse as SensorplanListResponse,
    type SensorplanCountResponse as SensorplanCountResponse,
    type SensorplanTupleResponse as SensorplanTupleResponse,
    type SensorplanCreateParams as SensorplanCreateParams,
    type SensorplanUpdateParams as SensorplanUpdateParams,
    type SensorplanListParams as SensorplanListParams,
    type SensorplanCountParams as SensorplanCountParams,
    type SensorplanCreateBulkV2Params as SensorplanCreateBulkV2Params,
    type SensorplanTupleParams as SensorplanTupleParams,
  };

  export {
    History as History,
    type HistoryRetrieveResponse as HistoryRetrieveResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryRetrieveParams as HistoryRetrieveParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
