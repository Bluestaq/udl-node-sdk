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
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class AttitudeSets extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation intended for initial integration only. Takes a single
   * AttitudeSet as a POST body and ingest into the database. This operation does not
   * persist any Onorbit Attitude points that may be present in the body of the
   * request. This operation is not intended to be used for automated feeds into UDL.
   * A specific role is required to perform this service operation. Please contact
   * the UDL team for assistance.
   *
   * The following rules apply to this operation:
   *
   * <h3>
   *  * Attitude Set numPoints value must correspond exactly to the number of Onorbit Attitude states associated with that Attitude Set.  The numPoints value is checked against the actual posted number of states and mismatch will result in the post being rejected.
   *  * Attitude Set startTime and endTime must correspond to the earliest and latest state times, respectively, of the associated Onorbit Attitude states.
   *  * Either satNo, idOnOrbit, or origObjectId must be provided.  The preferred option is to post with satNo for a cataloged object with (only) origObjectId for an unknown, uncatalogued, or internal/test object.  There are several cases for the logic associated with these fields:
   *    + If satNo is provided and correlates to a known UDL sat number then the idOnOrbit will be populated appropriately in addition to the satNo.
   *    + If satNo is provided and does not correlate to a known UDL sat number then the provided satNo value will be moved to the origObjectId field and satNo left null.
   *    + If origObjectId and a valid satNo or idOnOrbit are provided then both the satNo/idOnOrbit and origObjectId will maintain the provided values.
   *    + If only origObjectId is provided then origObjectId will be populated with the posted value.  In this case, no checks are made against existing UDL sat numbers.
   * </h3>
   *
   * @example
   * ```ts
   * await client.attitudeSets.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   endTime: '2022-07-07T18:00:00.654321Z',
   *   frame1: 'SCBODY',
   *   frame2: 'J2000',
   *   numPoints: 120,
   *   source: 'Bluestaq',
   *   startTime: '2022-07-07T16:00:00.123456Z',
   *   type: 'AEM',
   * });
   * ```
   */
  create(body: AttitudeSetCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/attitudeset', {
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
   * for await (const attitudesetAbridged of client.attitudeSets.list(
   *   { startTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AttitudeSetListParams,
    options?: RequestOptions,
  ): PagePromise<AttitudesetAbridgedsOffsetPage, AttitudesetAbridged> {
    return this._client.getAPIList('/udl/attitudeset', OffsetPage<AttitudesetAbridged>, {
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
   * const response = await client.attitudeSets.count({
   *   startTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: AttitudeSetCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/attitudeset/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.attitudeSets.queryHelp();
   * ```
   */
  queryHelp(options?: RequestOptions): APIPromise<AttitudeSetQueryHelpResponse> {
    return this._client.get('/udl/attitudeset/queryhelp', options);
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
   * const attitudesetFulls = await client.attitudeSets.tuple({
   *   columns: 'columns',
   *   startTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: AttitudeSetTupleParams, options?: RequestOptions): APIPromise<AttitudeSetTupleResponse> {
    return this._client.get('/udl/attitudeset/tuple', { query, ...options });
  }

  /**
   * Service operation to take a single Attitude Set and many associated Onorbit
   * Attitude records as a POST body for ingest into the database. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * The following rules apply to this operation:
   *
   * <h3>
   *   * Attitude Set numPoints value must correspond exactly to the number of Onorbit Attitude states associated with that Attitude Set. The numPoints value is checked against the actual posted number of states and mismatch will result in the post being rejected.
   *   * Attitude Set startTime and endTime must correspond to the earliest and latest state times, respectively, of the associated Onorbit Attitude states.
   *   * Either satNo, idOnOrbit, or origObjectId must be provided. The preferred option is to post with satNo for a cataloged object, and with (only) origObjectId for an unknown, uncatalogued, or internal/test object.  There are several cases for the logic associated with these fields:
   *     + If satNo is provided and correlates to a known UDL sat number then the idOnOrbit will be populated appropriately in addition to the satNo.
   *     + If satNo is provided and does not correlate to a known UDL sat number then the provided satNo value will be moved to the origObjectId field and satNo left null.
   *     + If origObjectId and a valid satNo or idOnOrbit are provided then both the satNo/idOnOrbit and origObjectId will maintain the provided values.
   *     + If only origObjectId is provided then origObjectId will be populated with the posted value.  In this case, no checks are made against existing UDL sat numbers.
   * </h3>
   *
   * @example
   * ```ts
   * await client.attitudeSets.unvalidatedPublish({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   endTime: '2022-07-07T18:00:00.654321Z',
   *   frame1: 'SCBODY',
   *   frame2: 'J2000',
   *   numPoints: 120,
   *   source: 'Bluestaq',
   *   startTime: '2022-07-07T16:00:00.123456Z',
   *   type: 'AEM',
   * });
   * ```
   */
  unvalidatedPublish(body: AttitudeSetUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/filedrop/udl-attitudeset', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type AttitudesetAbridgedsOffsetPage = OffsetPage<AttitudesetAbridged>;

/**
 * AttitudeSet represents a wrapper or collection of Onorbit Attitude 'points' and
 * meta data indicating the specifics of the orientation of an on-orbit object.
 * Attitude is typically distributed in a flat file containing details of the
 * attitude generation as well as a large collection of individual points at
 * varying time steps. AttitudeSet is analogous to this flat file.
 */
export interface AttitudesetAbridged {
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
   * The end time of the attitude ephemeris, in ISO 8601 UTC format, with microsecond
   * precision. If this set is constituted by a single epoch attitude message then
   * endTime should match the startTime.
   */
  endTime: string;

  /**
   * Reference frame 1 of the quaternion or Euler angle transformation utilized in
   * this attitude parameter or attitude ephemeris. The UDL convention is that
   * transformations occur FROM frame1 TO frame2. A specific spacecraft frame or
   * instrument name may be provided with the assumption the consumer understands the
   * location of these frames (ex. SC BODY, J2000, LVLH, ICRF, INSTRUMENTx,
   * THRUSTERx, etc.).
   */
  frame1: string;

  /**
   * Reference frame 2 of the quaternion or Euler angle transformation utilized in
   * this attitude parameter or attitude ephemeris. The UDL convention is that
   * transformations occur FROM frame1 TO frame2. A specific spacecraft frame or
   * instrument name may be provided with the assumption the consumer understands the
   * location of these frames (ex. SC BODY, J2000, LVLH, ICRF, INSTRUMENTx,
   * THRUSTERx, etc.).
   */
  frame2: string;

  /**
   * Number of attitude records contained in this set.
   */
  numPoints: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The epoch or start time of the attitude parameter or attitude ephemeris, in ISO
   * 8601 UTC format, with microsecond precision. If this set is constituted by a
   * single attitude parameter message then startTime is the epoch.
   */
  startTime: string;

  /**
   * The type of attitude message or messages associated with this set.
   *
   * AEM = Attitude Ephemeris Message, specifying the attitude state of a single
   * object at multiple epochs.
   *
   * APM = Attitude Parameters Message, specifying the attitude state of a single
   * object at a single epoch.
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
   * Unique identifier of the parent (positional) Ephemeris Set, if this data is
   * correlated with an Ephemeris.
   */
  esId?: string;

  /**
   * The rotation sequence of the Euler angles in which attitude reference frame
   * transformation occurs (from left to right). One, two, or three axis rotations
   * are supported and are represented by one, two, or three characters respectively.
   * Repeated axis rotations are also supported, however, these rotations should not
   * be sequential. The numeric sequence values correspond to the body angles/rates
   * as follows: 1 - xAngle/xRate, 2 - yAngle/yRate, and 3 - zAngle/zRate. Valid
   * sequences are: 123, 132, 213, 231, 312, 321, 121, 131, 212, 232, 313, 323, 12,
   * 13, 21, 23, 31, 32, 1, 2, and 3.
   *
   * The following represent examples of possible rotation sequences: A single
   * rotation about the Y-axis can be expressed as '2', a double rotation with X-Z
   * sequence can be expressed as '13', and a triple rotation with Z-X-Y sequence can
   * be expressed as '312'.
   */
  eulerRotSeq?: string;

  /**
   * Unique identifier of the on-orbit satellite to which this attitude set applies.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the sensor to which this attitude set applies IF this set
   * is reporting a single sensor orientation.
   */
  idSensor?: string;

  /**
   * Recommended interpolation method for estimating attitude ephemeris data.
   */
  interpolator?: string;

  /**
   * Recommended polynomial interpolation degree.
   */
  interpolatorDegree?: number;

  /**
   * Optional notes/comments for this attitude set.
   */
  notes?: string;

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
   * Optional identifier provided by the record source to indicate the target object
   * of this attitude set. This may be an internal identifier and not necessarily map
   * to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the record source to indicate the sensor
   * identifier to which this attitude set applies IF this set is reporting a single
   * sensor orientation. This may be an internal identifier and not necessarily a
   * valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Initial precession angle (ECI J2000 frame) in degrees.
   */
  precAngleInit?: number;

  /**
   * Satellite/catalog number of the on-orbit object to which this attitude set
   * applies.
   */
  satNo?: number;

  /**
   * Initial spin angle (ECI J2000 frame) in degrees.
   */
  spinAngleInit?: number;

  /**
   * Attitude ephemeris step size, in seconds. This applies to Attitude Ephemeris
   * Messages (AEM) that employ a fixed step size.
   */
  stepSize?: number;
}

export type AttitudeSetCountResponse = string;

export interface AttitudeSetQueryHelpResponse {
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

export type AttitudeSetTupleResponse = Array<Shared.AttitudesetFull>;

export interface AttitudeSetCreateParams {
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
   * The end time of the attitude ephemeris, in ISO 8601 UTC format, with microsecond
   * precision. If this set is constituted by a single epoch attitude message then
   * endTime should match the startTime.
   */
  endTime: string;

  /**
   * Reference frame 1 of the quaternion or Euler angle transformation utilized in
   * this attitude parameter or attitude ephemeris. The UDL convention is that
   * transformations occur FROM frame1 TO frame2. A specific spacecraft frame or
   * instrument name may be provided with the assumption the consumer understands the
   * location of these frames (ex. SC BODY, J2000, LVLH, ICRF, INSTRUMENTx,
   * THRUSTERx, etc.).
   */
  frame1: string;

  /**
   * Reference frame 2 of the quaternion or Euler angle transformation utilized in
   * this attitude parameter or attitude ephemeris. The UDL convention is that
   * transformations occur FROM frame1 TO frame2. A specific spacecraft frame or
   * instrument name may be provided with the assumption the consumer understands the
   * location of these frames (ex. SC BODY, J2000, LVLH, ICRF, INSTRUMENTx,
   * THRUSTERx, etc.).
   */
  frame2: string;

  /**
   * Number of attitude records contained in this set.
   */
  numPoints: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The epoch or start time of the attitude parameter or attitude ephemeris, in ISO
   * 8601 UTC format, with microsecond precision. If this set is constituted by a
   * single attitude parameter message then startTime is the epoch.
   */
  startTime: string;

  /**
   * The type of attitude message or messages associated with this set.
   *
   * AEM = Attitude Ephemeris Message, specifying the attitude state of a single
   * object at multiple epochs.
   *
   * APM = Attitude Parameters Message, specifying the attitude state of a single
   * object at a single epoch.
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Array of UDL UUIDs of one or more AttitudeSet records associated with this set.
   * For example, a spacecraft Attitude Ephemeris Set might include a reference to an
   * Attitude Parameter Message defining the sensor to body frame transformation for
   * a sensor onboard the spacecraft, which allows for calculation of the sensor
   * orientation in frame2 of the attitude ephemeris.
   */
  asRef?: Array<string>;

  /**
   * Collection of attitude data associated with this Attitude Set.
   */
  attitudeList?: Array<AttitudeSetCreateParams.AttitudeList>;

  /**
   * Unique identifier of the parent (positional) Ephemeris Set, if this data is
   * correlated with an Ephemeris.
   */
  esId?: string;

  /**
   * The rotation sequence of the Euler angles in which attitude reference frame
   * transformation occurs (from left to right). One, two, or three axis rotations
   * are supported and are represented by one, two, or three characters respectively.
   * Repeated axis rotations are also supported, however, these rotations should not
   * be sequential. The numeric sequence values correspond to the body angles/rates
   * as follows: 1 - xAngle/xRate, 2 - yAngle/yRate, and 3 - zAngle/zRate. Valid
   * sequences are: 123, 132, 213, 231, 312, 321, 121, 131, 212, 232, 313, 323, 12,
   * 13, 21, 23, 31, 32, 1, 2, and 3.
   *
   * The following represent examples of possible rotation sequences: A single
   * rotation about the Y-axis can be expressed as '2', a double rotation with X-Z
   * sequence can be expressed as '13', and a triple rotation with Z-X-Y sequence can
   * be expressed as '312'.
   */
  eulerRotSeq?: string;

  /**
   * Unique identifier of the sensor to which this attitude set applies IF this set
   * is reporting a single sensor orientation.
   */
  idSensor?: string;

  /**
   * Recommended interpolation method for estimating attitude ephemeris data.
   */
  interpolator?: string;

  /**
   * Recommended polynomial interpolation degree.
   */
  interpolatorDegree?: number;

  /**
   * Optional notes/comments for this attitude set.
   */
  notes?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by the record source to indicate the target object
   * of this attitude set. This may be an internal identifier and not necessarily map
   * to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the record source to indicate the sensor
   * identifier to which this attitude set applies IF this set is reporting a single
   * sensor orientation. This may be an internal identifier and not necessarily a
   * valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Initial precession angle (ECI J2000 frame) in degrees.
   */
  precAngleInit?: number;

  /**
   * Satellite/catalog number of the on-orbit object to which this attitude set
   * applies.
   */
  satNo?: number;

  /**
   * Initial spin angle (ECI J2000 frame) in degrees.
   */
  spinAngleInit?: number;

  /**
   * Attitude ephemeris step size, in seconds. This applies to Attitude Ephemeris
   * Messages (AEM) that employ a fixed step size.
   */
  stepSize?: number;
}

export namespace AttitudeSetCreateParams {
  /**
   * These services provide operations for posting and querying attitude of on-orbit
   * objects. Attitude describes the orientation of an object, which can be
   * represented by quaternions or euler angles. The AttitudeSet ID (asId) identifies
   * the 'AttitudeSet' record which contains details of the underlying data as well
   * as a collection of attitude points. Points must be retrieved by first
   * identifying a desired AttitudeSet and pulling its points by that AttitudeSet ID
   * 'asId'.
   */
  export interface AttitudeList {
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
     * Time associated with this attitude record, in ISO 8601 UTC format, with
     * microsecond precision.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Unique identifier of the parent AttitudeSet associated with this record.
     */
    asId?: string;

    /**
     * Coning angle in degrees.
     */
    coningAngle?: number;

    /**
     * Precession axis declination (ECI J2000 frame) in degrees.
     */
    declination?: number;

    /**
     * Label specifying type of rotational motion of target.
     */
    motionType?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the record source to indicate the target object
     * of this attitude record. This may be an internal identifier and not necessarily
     * map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Precession period in seconds.
     */
    precPeriod?: number;

    /**
     * Quaternion vector component 1.
     */
    q1?: number;

    /**
     * Derivative of quaternion vector component 1.
     */
    q1Dot?: number;

    /**
     * Quaternion vector component 2.
     */
    q2?: number;

    /**
     * Derivative of quaternion vector component 2.
     */
    q2Dot?: number;

    /**
     * Quaternion vector component 3.
     */
    q3?: number;

    /**
     * Derivative of quaternion vector component 3.
     */
    q3Dot?: number;

    /**
     * Quaternion scalar component.
     */
    qc?: number;

    /**
     * Derivative of quaternion scalar component.
     */
    qcDot?: number;

    /**
     * Precession axis right ascension (ECI J2000 frame) in degrees.
     */
    ra?: number;

    /**
     * Satellite/catalog number of the on-orbit object to which this attitude record
     * applies.
     */
    satNo?: number;

    /**
     * Spin period in seconds.
     */
    spinPeriod?: number;

    /**
     * Array of X body rotation Euler angle(s), in degrees (-180 to 180). For repeated
     * axis rotations, the array elements should be placed in the order that the angles
     * apply in the sequence.
     */
    xAngle?: Array<number>;

    /**
     * Array of X body rotation rate(s), in degrees per second. For repeated axis
     * rotations, the array elements should be placed in the order that the rates apply
     * in the sequence. Attitude rates are expressed in frame1 with respect to frame2.
     */
    xRate?: Array<number>;

    /**
     * Array of Y body rotation Euler angle(s), in degrees (-180 to 180). For repeated
     * axis rotations, the array elements should be placed in the order that the angles
     * apply in the sequence.
     */
    yAngle?: Array<number>;

    /**
     * Array of Y body rotation rate(s), in degrees per second. For repeated axis
     * rotations, the array elements should be placed in the order that the rates apply
     * in the sequence. Attitude rates are expressed in frame1 with respect to frame2.
     */
    yRate?: Array<number>;

    /**
     * Array of Z body rotation Euler angle(s), in degrees (-180 to 180). For repeated
     * axis rotations, the array elements should be placed in the order that the angles
     * apply in the sequence.
     */
    zAngle?: Array<number>;

    /**
     * Array of Z body rotation rate(s), in degrees per second. For repeated axis
     * rotations, the array elements should be placed in the order that the rates apply
     * in the sequence Attitude rates are expressed in frame1 with respect to frame2.
     */
    zRate?: Array<number>;
  }
}

export interface AttitudeSetListParams extends OffsetPageParams {
  /**
   * The epoch or start time of the attitude parameter or attitude ephemeris, in ISO
   * 8601 UTC format, with microsecond precision. If this set is constituted by a
   * single attitude parameter message then startTime is the epoch.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;
}

export interface AttitudeSetCountParams {
  /**
   * The epoch or start time of the attitude parameter or attitude ephemeris, in ISO
   * 8601 UTC format, with microsecond precision. If this set is constituted by a
   * single attitude parameter message then startTime is the epoch.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface AttitudeSetTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The epoch or start time of the attitude parameter or attitude ephemeris, in ISO
   * 8601 UTC format, with microsecond precision. If this set is constituted by a
   * single attitude parameter message then startTime is the epoch.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface AttitudeSetUnvalidatedPublishParams {
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
   * The end time of the attitude ephemeris, in ISO 8601 UTC format, with microsecond
   * precision. If this set is constituted by a single epoch attitude message then
   * endTime should match the startTime.
   */
  endTime: string;

  /**
   * Reference frame 1 of the quaternion or Euler angle transformation utilized in
   * this attitude parameter or attitude ephemeris. The UDL convention is that
   * transformations occur FROM frame1 TO frame2. A specific spacecraft frame or
   * instrument name may be provided with the assumption the consumer understands the
   * location of these frames (ex. SC BODY, J2000, LVLH, ICRF, INSTRUMENTx,
   * THRUSTERx, etc.).
   */
  frame1: string;

  /**
   * Reference frame 2 of the quaternion or Euler angle transformation utilized in
   * this attitude parameter or attitude ephemeris. The UDL convention is that
   * transformations occur FROM frame1 TO frame2. A specific spacecraft frame or
   * instrument name may be provided with the assumption the consumer understands the
   * location of these frames (ex. SC BODY, J2000, LVLH, ICRF, INSTRUMENTx,
   * THRUSTERx, etc.).
   */
  frame2: string;

  /**
   * Number of attitude records contained in this set.
   */
  numPoints: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The epoch or start time of the attitude parameter or attitude ephemeris, in ISO
   * 8601 UTC format, with microsecond precision. If this set is constituted by a
   * single attitude parameter message then startTime is the epoch.
   */
  startTime: string;

  /**
   * The type of attitude message or messages associated with this set.
   *
   * AEM = Attitude Ephemeris Message, specifying the attitude state of a single
   * object at multiple epochs.
   *
   * APM = Attitude Parameters Message, specifying the attitude state of a single
   * object at a single epoch.
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Array of UDL UUIDs of one or more AttitudeSet records associated with this set.
   * For example, a spacecraft Attitude Ephemeris Set might include a reference to an
   * Attitude Parameter Message defining the sensor to body frame transformation for
   * a sensor onboard the spacecraft, which allows for calculation of the sensor
   * orientation in frame2 of the attitude ephemeris.
   */
  asRef?: Array<string>;

  /**
   * Collection of attitude data associated with this Attitude Set.
   */
  attitudeList?: Array<AttitudeSetUnvalidatedPublishParams.AttitudeList>;

  /**
   * Unique identifier of the parent (positional) Ephemeris Set, if this data is
   * correlated with an Ephemeris.
   */
  esId?: string;

  /**
   * The rotation sequence of the Euler angles in which attitude reference frame
   * transformation occurs (from left to right). One, two, or three axis rotations
   * are supported and are represented by one, two, or three characters respectively.
   * Repeated axis rotations are also supported, however, these rotations should not
   * be sequential. The numeric sequence values correspond to the body angles/rates
   * as follows: 1 - xAngle/xRate, 2 - yAngle/yRate, and 3 - zAngle/zRate. Valid
   * sequences are: 123, 132, 213, 231, 312, 321, 121, 131, 212, 232, 313, 323, 12,
   * 13, 21, 23, 31, 32, 1, 2, and 3.
   *
   * The following represent examples of possible rotation sequences: A single
   * rotation about the Y-axis can be expressed as '2', a double rotation with X-Z
   * sequence can be expressed as '13', and a triple rotation with Z-X-Y sequence can
   * be expressed as '312'.
   */
  eulerRotSeq?: string;

  /**
   * Unique identifier of the sensor to which this attitude set applies IF this set
   * is reporting a single sensor orientation.
   */
  idSensor?: string;

  /**
   * Recommended interpolation method for estimating attitude ephemeris data.
   */
  interpolator?: string;

  /**
   * Recommended polynomial interpolation degree.
   */
  interpolatorDegree?: number;

  /**
   * Optional notes/comments for this attitude set.
   */
  notes?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by the record source to indicate the target object
   * of this attitude set. This may be an internal identifier and not necessarily map
   * to a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier provided by the record source to indicate the sensor
   * identifier to which this attitude set applies IF this set is reporting a single
   * sensor orientation. This may be an internal identifier and not necessarily a
   * valid sensor ID.
   */
  origSensorId?: string;

  /**
   * Initial precession angle (ECI J2000 frame) in degrees.
   */
  precAngleInit?: number;

  /**
   * Satellite/catalog number of the on-orbit object to which this attitude set
   * applies.
   */
  satNo?: number;

  /**
   * Initial spin angle (ECI J2000 frame) in degrees.
   */
  spinAngleInit?: number;

  /**
   * Attitude ephemeris step size, in seconds. This applies to Attitude Ephemeris
   * Messages (AEM) that employ a fixed step size.
   */
  stepSize?: number;
}

export namespace AttitudeSetUnvalidatedPublishParams {
  /**
   * These services provide operations for posting and querying attitude of on-orbit
   * objects. Attitude describes the orientation of an object, which can be
   * represented by quaternions or euler angles. The AttitudeSet ID (asId) identifies
   * the 'AttitudeSet' record which contains details of the underlying data as well
   * as a collection of attitude points. Points must be retrieved by first
   * identifying a desired AttitudeSet and pulling its points by that AttitudeSet ID
   * 'asId'.
   */
  export interface AttitudeList {
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
     * Time associated with this attitude record, in ISO 8601 UTC format, with
     * microsecond precision.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Unique identifier of the parent AttitudeSet associated with this record.
     */
    asId?: string;

    /**
     * Coning angle in degrees.
     */
    coningAngle?: number;

    /**
     * Precession axis declination (ECI J2000 frame) in degrees.
     */
    declination?: number;

    /**
     * Label specifying type of rotational motion of target.
     */
    motionType?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by the record source to indicate the target object
     * of this attitude record. This may be an internal identifier and not necessarily
     * map to a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Precession period in seconds.
     */
    precPeriod?: number;

    /**
     * Quaternion vector component 1.
     */
    q1?: number;

    /**
     * Derivative of quaternion vector component 1.
     */
    q1Dot?: number;

    /**
     * Quaternion vector component 2.
     */
    q2?: number;

    /**
     * Derivative of quaternion vector component 2.
     */
    q2Dot?: number;

    /**
     * Quaternion vector component 3.
     */
    q3?: number;

    /**
     * Derivative of quaternion vector component 3.
     */
    q3Dot?: number;

    /**
     * Quaternion scalar component.
     */
    qc?: number;

    /**
     * Derivative of quaternion scalar component.
     */
    qcDot?: number;

    /**
     * Precession axis right ascension (ECI J2000 frame) in degrees.
     */
    ra?: number;

    /**
     * Satellite/catalog number of the on-orbit object to which this attitude record
     * applies.
     */
    satNo?: number;

    /**
     * Spin period in seconds.
     */
    spinPeriod?: number;

    /**
     * Array of X body rotation Euler angle(s), in degrees (-180 to 180). For repeated
     * axis rotations, the array elements should be placed in the order that the angles
     * apply in the sequence.
     */
    xAngle?: Array<number>;

    /**
     * Array of X body rotation rate(s), in degrees per second. For repeated axis
     * rotations, the array elements should be placed in the order that the rates apply
     * in the sequence. Attitude rates are expressed in frame1 with respect to frame2.
     */
    xRate?: Array<number>;

    /**
     * Array of Y body rotation Euler angle(s), in degrees (-180 to 180). For repeated
     * axis rotations, the array elements should be placed in the order that the angles
     * apply in the sequence.
     */
    yAngle?: Array<number>;

    /**
     * Array of Y body rotation rate(s), in degrees per second. For repeated axis
     * rotations, the array elements should be placed in the order that the rates apply
     * in the sequence. Attitude rates are expressed in frame1 with respect to frame2.
     */
    yRate?: Array<number>;

    /**
     * Array of Z body rotation Euler angle(s), in degrees (-180 to 180). For repeated
     * axis rotations, the array elements should be placed in the order that the angles
     * apply in the sequence.
     */
    zAngle?: Array<number>;

    /**
     * Array of Z body rotation rate(s), in degrees per second. For repeated axis
     * rotations, the array elements should be placed in the order that the rates apply
     * in the sequence Attitude rates are expressed in frame1 with respect to frame2.
     */
    zRate?: Array<number>;
  }
}

AttitudeSets.History = History;

export declare namespace AttitudeSets {
  export {
    type AttitudesetAbridged as AttitudesetAbridged,
    type AttitudeSetCountResponse as AttitudeSetCountResponse,
    type AttitudeSetQueryHelpResponse as AttitudeSetQueryHelpResponse,
    type AttitudeSetTupleResponse as AttitudeSetTupleResponse,
    type AttitudesetAbridgedsOffsetPage as AttitudesetAbridgedsOffsetPage,
    type AttitudeSetCreateParams as AttitudeSetCreateParams,
    type AttitudeSetListParams as AttitudeSetListParams,
    type AttitudeSetCountParams as AttitudeSetCountParams,
    type AttitudeSetTupleParams as AttitudeSetTupleParams,
    type AttitudeSetUnvalidatedPublishParams as AttitudeSetUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
