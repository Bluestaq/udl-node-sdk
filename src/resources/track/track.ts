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
  TrackFull,
  TrackFullsOffsetPage,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Track extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: TrackListParams,
    options?: RequestOptions,
  ): PagePromise<TrackListResponsesOffsetPage, TrackListResponse> {
    return this._client.getAPIList('/udl/track', OffsetPage<TrackListResponse>, { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: TrackCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/track/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of Track
   * records as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   */
  createBulk(params: TrackCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/track/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<TrackQueryhelpResponse> {
    return this._client.get('/udl/track/queryhelp', options);
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
  tuple(query: TrackTupleParams, options?: RequestOptions): APIPromise<TrackTupleResponse> {
    return this._client.get('/udl/track/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple tracks as a POST body and ingest into the
   * database. This operation is intended to be used for automated feeds into UDL. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   */
  unvalidatedPublish(params: TrackUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-tracks', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type TrackListResponsesOffsetPage = OffsetPage<TrackListResponse>;

/**
 * A track is a position and optionally a heading/velocity of an object such as an
 * aircraft at a particular timestamp. It also includes optional information
 * regarding the identity/type of the target object, if known.
 */
export interface TrackListResponse {
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
   * Track timestamp in ISO8601 UTC format.
   */
  ts: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Track point altitude relative to WGS-84 ellipsoid, in meters. Positive values
   * indicate a track object height above ellipsoid, and negative values indicate a
   * track object below ellipsoid, applicable to the depth estimate for a subsurface
   * track.
   */
  alt?: number;

  /**
   * Id/name of the platform providing the track data (i.e., tail number for air
   * platform, tower ID for tower based sensor, site id for fixed radar).
   */
  asset?: string;

  /**
   * Nationality or organization of the tracking/reporting system or platform (e.g.
   * FR, NATO, US, etc.).
   */
  assetNat?: string;

  /**
   * The attitude (Yaw, Pitch, and Roll), in degrees, of the track object. When
   * provided, the array must always contain 3 values. These values represent the
   * vehicle's rotation about the vertical, lateral, and longitudinal axes,
   * respectively, in a locally level, East, North, Up "right handed" coordinate
   * system centered on the vehicle. Yaw is measured in degrees and ranges from -180
   * to 180. Pitch is measured in degrees and ranges from -90 to 90. Roll is measured
   * in degrees and ranges from -180 to 180.
   */
  attitude?: Array<number>;

  /**
   * The attitude rate (Yaw Rate, Pitch Rate, and Roll Rate), in degrees per second,
   * of the track object. When provided, the array must always contain 3 values.
   * These values represent the rate of change of the vehicle's rotation about the
   * vertical, lateral, and longitudinal axes, respectively, in a locally level,
   * East, North, Up "right handed" coordinate system centered on the vehicle.
   */
  attitudeRate?: Array<number>;

  /**
   * The call sign currently assigned to this track object.
   */
  callSign?: string;

  /**
   * Contact information for assets reporting PPLI (Precise Participant Location and
   * Identification). PPLI is a Link 16 message that is used by units to transmit
   * complete location, identification, and limited status information.
   */
  cntct?: string;

  /**
   * The track object course-over-ground, in degrees clockwise from true North at the
   * object location (0-360 degrees).
   */
  course?: number;

  /**
   * Covariance matrix, in meter and second based units, for the defined cartesian
   * system.
   *
   * The array values represent the lower triangular half of the position-velocity
   * covariance matrix. The size of the covariance matrix is dynamic. The values are
   * output as an array of values corresponding to the position-velocity covariance
   * element positions, ordered as follows:
   *
   * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;y&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;y'&nbsp;z'&nbsp;&nbsp;
   *
   * x&nbsp;&nbsp;&nbsp;&nbsp;1
   *
   * y&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;3
   *
   * z&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;6
   *
   * x'&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;10
   *
   * y'&nbsp;&nbsp;11&nbsp;&nbsp;12&nbsp;&nbsp;13&nbsp;&nbsp;14&nbsp;&nbsp;15
   *
   * z'&nbsp;&nbsp;16&nbsp;&nbsp;17&nbsp;&nbsp;18&nbsp;&nbsp;19&nbsp;&nbsp;20&nbsp;&nbsp;
   * 21
   *
   * The covariance matrix will be as large as the last element needed, and with
   * unused values zero-filled to maintain proper element positioning in the array.
   * For example, for a 2D (x, y) position-only covariance, the covariance matrix
   * will be 2x2 and the array would contain the 3 elements corresponding to the x,
   * and y position. Another example, now for a 2D (x, y) position-velocity
   * covariance, the covariance matrix will be 5x5 and the array would contain the 15
   * elements corresponding to the relevant x, y, x', and y' values (with the z-row
   * and z-column being all zeros). The cov array should contain only the lower left
   * triangle values from top left down to bottom right, in order.
   */
  cov?: Array<number>;

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
   * Track object acceleration in ECEF [x'', y'', z''], meters/sec^2. When provided,
   * array must always contain 3 values.
   */
  ecefAcc?: Array<number>;

  /**
   * Track object location in ECEF [x, y, z], meters. When provided, array must
   * always contain 3 values.
   */
  ecefPos?: Array<number>;

  /**
   * Track object velocity in ECEF [x', y', z'], meters/sec. When provided, array
   * must always contain 3 values.
   */
  ecefVel?: Array<number>;

  /**
   * East, North, Up acceleration components, in meters per second squared. When
   * provided, array must always contain 3 values.
   */
  eNUAcc?: Array<number>;

  /**
   * East, North, Up position components, in meters. When provided, array must always
   * contain 3 values.
   */
  eNUPos?: Array<number>;

  /**
   * East, North, Up velocity components, in meters/sec. When provided, array must
   * always contain 3 values.
   */
  eNUVel?: Array<number>;

  /**
   * The track environment type (AIR, LAND, SPACE, SUBSURFACE, SURFACE, UNKNOWN):
   *
   * AIR: Between sea level and the Kármán line, which has an altitude of 100
   * kilometers (62 miles).
   *
   * LAND: On the surface of dry land.
   *
   * SPACE: Above the Kármán line, which has an altitude of 100 kilometers (62
   * miles).
   *
   * SURFACE: On the surface of a body of water.
   *
   * SUBSURFACE: Below the surface of a body of water.
   *
   * UNKNOWN: Environment is not known.
   */
  env?: string;

  /**
   * Track environment confidence estimate (not standardized).
   */
  envConf?: number;

  /**
   * Uncertainty ellipsoid [semi-major axis (m), semi-minor axis (m), orientation
   * (deg)].
   */
  errEllp?: Array<number>;

  /**
   * The track object heading, in degrees clockwise from true North at the object
   * location.
   */
  hdng?: number;

  /**
   * Additional track object identity/status information, typically used for EXERCISE
   * identity amplification (FAKER, JOKER, KILO, TRAVELLER, ZOMBIE):
   *
   * FAKER: Friendly track, object, or entity acting as an exercise hostile.
   *
   * JOKER: Friendly track, object, or entity acting as an exercise suspect.
   *
   * KILO: Friendly high-value object.
   *
   * TRAVELLER: Suspect land or surface track following a recognized traffic route.
   *
   * ZOMBIE: Suspect track, object, or entity of special interest.
   */
  identAmp?: string;

  /**
   * Track object identity credibility.
   */
  identCred?: number;

  /**
   * Track object identity reliability.
   */
  identRel?: number;

  /**
   * The J-series message type, if this track is derived from a J-series message.
   */
  jSeries?: string;

  /**
   * WGS-84 latitude of the track object, in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  lat?: number;

  /**
   * Estimate of the acceleration, [x'', y'', z''], of the track object in the
   * defined cartesian system, in meters/sec^2. When provided, array must always
   * contain 3 values.
   */
  lcAcc?: Array<number>;

  /**
   * Origin of a local coordinate system [lat, lon, altitude]. When provided, array
   * must always contain 3 values.
   */
  lco?: Array<number>;

  /**
   * Estimate of the position, [x, y, z], of the track object in the defined
   * cartesian system, in meters. When provided, array must always contain 3 values.
   */
  lcPos?: Array<number>;

  /**
   * x, y, and z-axis rotations about ECEF that define a local cartesian system. When
   * provided, array must always contain 3 values.
   */
  lcs?: Array<number>;

  /**
   * Estimate of the velocity, [x', y', z'], of the track object in the defined
   * cartesian system, in meters/sec. When provided, array must always contain 3
   * values.
   */
  lcVel?: Array<number>;

  /**
   * WGS-84 longitude of the track object, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

  /**
   * Mode-1 interrogation response (mission code), indicating mission or aircraft
   * type.
   */
  m1?: number;

  /**
   * Mode-1 validity status.
   */
  m1v?: number;

  /**
   * Mode-2 interrogation response (military identification code).
   */
  m2?: number;

  /**
   * Mode-2 validity status.
   */
  m2v?: number;

  /**
   * Mode-3/A interrogation response (aircraft identification), provides a 4-digit
   * octal identification code for the aircraft, assigned by the air traffic
   * controller. Mode-3/A is shared military/civilian use.
   */
  m3a?: number;

  /**
   * Mode-3/A validity status.
   */
  m3av?: number;

  /**
   * The type of source information from which the track was derived. Intended as,
   * but not constrained to, NATO STANAG 4676 modality types (AIS, BFT, BIOMETRIC,
   * COMINT, DOPPLER, ELINT, HRR, HUMINT, IMAGE, MASINT, MIXED, OSINT, OTHER):
   *
   * AIS: Derived from an automated identification system source.
   *
   * BFT: Derived from a blue force tracking source.
   *
   * BIOMETRICS: Derived from a biometrics source.
   *
   * COMINT: Derived from a communications intelligence source.
   *
   * DOPPLER: Derived from a radar doppler source.
   *
   * ELINT: Derived from an electronics intelligence source.
   *
   * HRR: Derived from a radar high range resolution source.
   *
   * HUMINT: Derived from a human intelligence source.
   *
   * IMAGE: Derived from a still or motion imagery source.
   *
   * MASINT: Derived from a measurement and signals intelligence source.
   *
   * MIXED: Derived from a combination of two or more sources.
   *
   * OSINT: Derived from an open source intelligence source.
   *
   * OTHER: Derived from other types of unspecified sources.
   */
  modType?: string;

  /**
   * Message Timestamp.
   */
  msgTs?: string;

  /**
   * Mission ID related to the track.
   */
  msnId?: string;

  /**
   * Flag indicating that this track is fused from multiple sensor sources.
   */
  multiSource?: boolean;

  /**
   * The activity in which the track object is engaged. Intended as, but not
   * constrained to, MIL-STD-6016 environment dependent activity designations. The
   * activity can be reported as either a combination of the code and environment
   * (e.g. 65/AIR) or as the descriptive enumeration (e.g. DIVERTING), which are
   * equivalent.
   */
  objAct?: string;

  /**
   * The UID or designation of the tracked object.
   */
  objId?: string;

  /**
   * The estimated identity of the track object (ASSUMED FRIEND, FRIEND, HOSTILE,
   * NEUTRAL, PENDING, SUSPECT, UNKNOWN):
   *
   * ASSUMED FRIEND: Track assumed to be a friend due to the object characteristics,
   * behavior, and/or origin.
   *
   * FRIEND: Track object supporting friendly forces and belonging to a declared
   * friendly nation or entity.
   *
   * HOSTILE: Track object belonging to an opposing nation, party, group, or entity
   * deemed to contribute to a threat to friendly forces or their mission due to its
   * behavior, characteristics, nationality, or origin.
   *
   * NEUTRAL: Track object whose characteristics, behavior, nationality, and/or
   * origin indicate that it is neither supporting nor opposing friendly forces or
   * their mission.
   *
   * PENDING: Track object which has not been evaluated.
   *
   * SUSPECT: Track object deemed potentially hostile due to the object
   * characteristics, behavior, nationality, and/or origin.
   *
   * UNKNOWN: Track object which has been evaluated and does not meet criteria for
   * any standard identity.
   */
  objIdent?: string;

  /**
   * Nationality or organization of the track object (e.g. FR, NATO, US, etc.).
   */
  objNat?: string;

  /**
   * The object platform type. Intended as, but not constrained to, MIL-STD-6016
   * environment dependent platform type designations. The platform type can be
   * reported as either a combination of the code and environment (e.g. 14/LAND) or
   * as the descriptive representations (e.g. COMBAT VEHICLE), which are equivalent.
   */
  objPlat?: string;

  /**
   * The object specific type. Intended as, but not constrained to, MIL-STD-6016
   * environment dependent specific type designations. The specific type can be
   * reported as either a combination of the code and environment (e.g. 155/SURFACE)
   * or as the descriptive representation (e.g. AUDACE DDG), which are equivalent.
   */
  objSpec?: string;

  /**
   * The generic classification of the track object/group (e.g., HELICOPTER, TRACKED,
   * WATERCRAFT, WHEELED, etc.). Referenced, but not constrained to, NATO STANAG 4676
   * object type classifications.
   */
  objType?: string;

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
   * Id/name of sensor providing the track data.
   */
  sen?: string;

  /**
   * Sensor quality.
   */
  senQual?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Track object spd, in meters/sec.
   */
  spd?: number;

  /**
   * Array of UUIDs of the UDL data records that contributed to the generation of
   * this fused track. See the associated 'srcTyps' array for the specific types of
   * data, positionally corresponding to the UUIDs in this array, used in the track
   * fusion. The 'srcTyps' and 'srcIds' arrays must match in size. See the
   * corresponding srcTyps array element for the data type of the UUID and use the
   * appropriate API operation to retrieve that object (e.g. /udl/poi/{uuid}).
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types (POI, MTI, TRACK, GROUNDIMAGE) that contributed to the
   * generation of this fused track. See the associated 'srcIds' array for the record
   * UUIDs, positionally corresponding to the record types in this array, used in the
   * track fusion. The 'srcTyps' and 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * The number of objects or units moving as a group and represented as a single
   * entity in this track message. If null, the track is assumed to represent a
   * single object. Note that if this track derives from a J-series message then
   * special definitions apply for the following values: 13 indicates an estimated
   * 2-7 units, 14 indicates an estimated more than 7 units, and 15 indicates an
   * estimated more than 12 units.
   */
  strength?: number;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Overall track confidence estimate (not standardized, but typically a value
   * between 0 and 1, with 0 indicating lowest confidence).
   */
  trkConf?: number;

  /**
   * UUID identifying the track, which should remain the same on subsequent tracks of
   * the same object.
   */
  trkId?: string;

  /**
   * UUID of the track item object, applies to STANAG-4676 messages.
   */
  trkItmId?: string;

  /**
   * The track number (TN) of a surveillance entity. Intended as, but not constrained
   * to, the J-series track number encoded as five character alpha-numeric
   * characters. Users should refer to J-series documentation for specific TN
   * definitions.
   */
  trkNum?: string;

  /**
   * Means by which the track data was created (e.g., MEASURED, AUTOMATIC PREDICTED,
   * etc.).
   */
  trkPtType?: string;

  /**
   * Value indicating track quality (not standardized).
   */
  trkQual?: number;

  /**
   * Status of the track (e.g., INITIATING, MAINTAINING, DROPPING, TERMINATED, etc.).
   */
  trkStat?: string;
}

export type TrackCountResponse = string;

export interface TrackQueryhelpResponse {
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

export type TrackTupleResponse = Array<HistoryAPI.TrackFull>;

export interface TrackListParams extends OffsetPageParams {
  /**
   * Track timestamp in ISO8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;
}

export interface TrackCountParams {
  /**
   * Track timestamp in ISO8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface TrackCreateBulkParams {
  body: Array<TrackCreateBulkParams.Body>;
}

export namespace TrackCreateBulkParams {
  /**
   * A track is a position and optionally a heading/velocity of an object such as an
   * aircraft at a particular timestamp. It also includes optional information
   * regarding the identity/type of the target object, if known.
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
     * Track timestamp in ISO8601 UTC format.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Track point altitude relative to WGS-84 ellipsoid, in meters. Positive values
     * indicate a track object height above ellipsoid, and negative values indicate a
     * track object below ellipsoid, applicable to the depth estimate for a subsurface
     * track.
     */
    alt?: number;

    /**
     * Id/name of the platform providing the track data (i.e., tail number for air
     * platform, tower ID for tower based sensor, site id for fixed radar).
     */
    asset?: string;

    /**
     * Nationality or organization of the tracking/reporting system or platform (e.g.
     * FR, NATO, US, etc.).
     */
    assetNat?: string;

    /**
     * The attitude (Yaw, Pitch, and Roll), in degrees, of the track object. When
     * provided, the array must always contain 3 values. These values represent the
     * vehicle's rotation about the vertical, lateral, and longitudinal axes,
     * respectively, in a locally level, East, North, Up "right handed" coordinate
     * system centered on the vehicle. Yaw is measured in degrees and ranges from -180
     * to 180. Pitch is measured in degrees and ranges from -90 to 90. Roll is measured
     * in degrees and ranges from -180 to 180.
     */
    attitude?: Array<number>;

    /**
     * The attitude rate (Yaw Rate, Pitch Rate, and Roll Rate), in degrees per second,
     * of the track object. When provided, the array must always contain 3 values.
     * These values represent the rate of change of the vehicle's rotation about the
     * vertical, lateral, and longitudinal axes, respectively, in a locally level,
     * East, North, Up "right handed" coordinate system centered on the vehicle.
     */
    attitudeRate?: Array<number>;

    /**
     * The call sign currently assigned to this track object.
     */
    callSign?: string;

    /**
     * Contact information for assets reporting PPLI (Precise Participant Location and
     * Identification). PPLI is a Link 16 message that is used by units to transmit
     * complete location, identification, and limited status information.
     */
    cntct?: string;

    /**
     * The track object course-over-ground, in degrees clockwise from true North at the
     * object location (0-360 degrees).
     */
    course?: number;

    /**
     * Covariance matrix, in meter and second based units, for the defined cartesian
     * system.
     *
     * The array values represent the lower triangular half of the position-velocity
     * covariance matrix. The size of the covariance matrix is dynamic. The values are
     * output as an array of values corresponding to the position-velocity covariance
     * element positions, ordered as follows:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;y&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;y'&nbsp;z'&nbsp;&nbsp;
     *
     * x&nbsp;&nbsp;&nbsp;&nbsp;1
     *
     * y&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;3
     *
     * z&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;6
     *
     * x'&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;10
     *
     * y'&nbsp;&nbsp;11&nbsp;&nbsp;12&nbsp;&nbsp;13&nbsp;&nbsp;14&nbsp;&nbsp;15
     *
     * z'&nbsp;&nbsp;16&nbsp;&nbsp;17&nbsp;&nbsp;18&nbsp;&nbsp;19&nbsp;&nbsp;20&nbsp;&nbsp;
     * 21
     *
     * The covariance matrix will be as large as the last element needed, and with
     * unused values zero-filled to maintain proper element positioning in the array.
     * For example, for a 2D (x, y) position-only covariance, the covariance matrix
     * will be 2x2 and the array would contain the 3 elements corresponding to the x,
     * and y position. Another example, now for a 2D (x, y) position-velocity
     * covariance, the covariance matrix will be 5x5 and the array would contain the 15
     * elements corresponding to the relevant x, y, x', and y' values (with the z-row
     * and z-column being all zeros). The cov array should contain only the lower left
     * triangle values from top left down to bottom right, in order.
     */
    cov?: Array<number>;

    /**
     * Track object acceleration in ECEF [x'', y'', z''], meters/sec^2. When provided,
     * array must always contain 3 values.
     */
    ecefAcc?: Array<number>;

    /**
     * Track object location in ECEF [x, y, z], meters. When provided, array must
     * always contain 3 values.
     */
    ecefPos?: Array<number>;

    /**
     * Track object velocity in ECEF [x', y', z'], meters/sec. When provided, array
     * must always contain 3 values.
     */
    ecefVel?: Array<number>;

    /**
     * East, North, Up acceleration components, in meters per second squared. When
     * provided, array must always contain 3 values.
     */
    eNUAcc?: Array<number>;

    /**
     * East, North, Up position components, in meters. When provided, array must always
     * contain 3 values.
     */
    eNUPos?: Array<number>;

    /**
     * East, North, Up velocity components, in meters/sec. When provided, array must
     * always contain 3 values.
     */
    eNUVel?: Array<number>;

    /**
     * The track environment type (AIR, LAND, SPACE, SUBSURFACE, SURFACE, UNKNOWN):
     *
     * AIR: Between sea level and the Kármán line, which has an altitude of 100
     * kilometers (62 miles).
     *
     * LAND: On the surface of dry land.
     *
     * SPACE: Above the Kármán line, which has an altitude of 100 kilometers (62
     * miles).
     *
     * SURFACE: On the surface of a body of water.
     *
     * SUBSURFACE: Below the surface of a body of water.
     *
     * UNKNOWN: Environment is not known.
     */
    env?: string;

    /**
     * Track environment confidence estimate (not standardized).
     */
    envConf?: number;

    /**
     * Uncertainty ellipsoid [semi-major axis (m), semi-minor axis (m), orientation
     * (deg)].
     */
    errEllp?: Array<number>;

    /**
     * The track object heading, in degrees clockwise from true North at the object
     * location.
     */
    hdng?: number;

    /**
     * Additional track object identity/status information, typically used for EXERCISE
     * identity amplification (FAKER, JOKER, KILO, TRAVELLER, ZOMBIE):
     *
     * FAKER: Friendly track, object, or entity acting as an exercise hostile.
     *
     * JOKER: Friendly track, object, or entity acting as an exercise suspect.
     *
     * KILO: Friendly high-value object.
     *
     * TRAVELLER: Suspect land or surface track following a recognized traffic route.
     *
     * ZOMBIE: Suspect track, object, or entity of special interest.
     */
    identAmp?: string;

    /**
     * Track object identity credibility.
     */
    identCred?: number;

    /**
     * Track object identity reliability.
     */
    identRel?: number;

    /**
     * The J-series message type, if this track is derived from a J-series message.
     */
    jSeries?: string;

    /**
     * WGS-84 latitude of the track object, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    lat?: number;

    /**
     * Estimate of the acceleration, [x'', y'', z''], of the track object in the
     * defined cartesian system, in meters/sec^2. When provided, array must always
     * contain 3 values.
     */
    lcAcc?: Array<number>;

    /**
     * Origin of a local coordinate system [lat, lon, altitude]. When provided, array
     * must always contain 3 values.
     */
    lco?: Array<number>;

    /**
     * Estimate of the position, [x, y, z], of the track object in the defined
     * cartesian system, in meters. When provided, array must always contain 3 values.
     */
    lcPos?: Array<number>;

    /**
     * x, y, and z-axis rotations about ECEF that define a local cartesian system. When
     * provided, array must always contain 3 values.
     */
    lcs?: Array<number>;

    /**
     * Estimate of the velocity, [x', y', z'], of the track object in the defined
     * cartesian system, in meters/sec. When provided, array must always contain 3
     * values.
     */
    lcVel?: Array<number>;

    /**
     * WGS-84 longitude of the track object, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon?: number;

    /**
     * Mode-1 interrogation response (mission code), indicating mission or aircraft
     * type.
     */
    m1?: number;

    /**
     * Mode-1 validity status.
     */
    m1v?: number;

    /**
     * Mode-2 interrogation response (military identification code).
     */
    m2?: number;

    /**
     * Mode-2 validity status.
     */
    m2v?: number;

    /**
     * Mode-3/A interrogation response (aircraft identification), provides a 4-digit
     * octal identification code for the aircraft, assigned by the air traffic
     * controller. Mode-3/A is shared military/civilian use.
     */
    m3a?: number;

    /**
     * Mode-3/A validity status.
     */
    m3av?: number;

    /**
     * The type of source information from which the track was derived. Intended as,
     * but not constrained to, NATO STANAG 4676 modality types (AIS, BFT, BIOMETRIC,
     * COMINT, DOPPLER, ELINT, HRR, HUMINT, IMAGE, MASINT, MIXED, OSINT, OTHER):
     *
     * AIS: Derived from an automated identification system source.
     *
     * BFT: Derived from a blue force tracking source.
     *
     * BIOMETRICS: Derived from a biometrics source.
     *
     * COMINT: Derived from a communications intelligence source.
     *
     * DOPPLER: Derived from a radar doppler source.
     *
     * ELINT: Derived from an electronics intelligence source.
     *
     * HRR: Derived from a radar high range resolution source.
     *
     * HUMINT: Derived from a human intelligence source.
     *
     * IMAGE: Derived from a still or motion imagery source.
     *
     * MASINT: Derived from a measurement and signals intelligence source.
     *
     * MIXED: Derived from a combination of two or more sources.
     *
     * OSINT: Derived from an open source intelligence source.
     *
     * OTHER: Derived from other types of unspecified sources.
     */
    modType?: string;

    /**
     * Message Timestamp.
     */
    msgTs?: string;

    /**
     * Mission ID related to the track.
     */
    msnId?: string;

    /**
     * Flag indicating that this track is fused from multiple sensor sources.
     */
    multiSource?: boolean;

    /**
     * The activity in which the track object is engaged. Intended as, but not
     * constrained to, MIL-STD-6016 environment dependent activity designations. The
     * activity can be reported as either a combination of the code and environment
     * (e.g. 65/AIR) or as the descriptive enumeration (e.g. DIVERTING), which are
     * equivalent.
     */
    objAct?: string;

    /**
     * The UID or designation of the tracked object.
     */
    objId?: string;

    /**
     * The estimated identity of the track object (ASSUMED FRIEND, FRIEND, HOSTILE,
     * NEUTRAL, PENDING, SUSPECT, UNKNOWN):
     *
     * ASSUMED FRIEND: Track assumed to be a friend due to the object characteristics,
     * behavior, and/or origin.
     *
     * FRIEND: Track object supporting friendly forces and belonging to a declared
     * friendly nation or entity.
     *
     * HOSTILE: Track object belonging to an opposing nation, party, group, or entity
     * deemed to contribute to a threat to friendly forces or their mission due to its
     * behavior, characteristics, nationality, or origin.
     *
     * NEUTRAL: Track object whose characteristics, behavior, nationality, and/or
     * origin indicate that it is neither supporting nor opposing friendly forces or
     * their mission.
     *
     * PENDING: Track object which has not been evaluated.
     *
     * SUSPECT: Track object deemed potentially hostile due to the object
     * characteristics, behavior, nationality, and/or origin.
     *
     * UNKNOWN: Track object which has been evaluated and does not meet criteria for
     * any standard identity.
     */
    objIdent?: string;

    /**
     * Nationality or organization of the track object (e.g. FR, NATO, US, etc.).
     */
    objNat?: string;

    /**
     * The object platform type. Intended as, but not constrained to, MIL-STD-6016
     * environment dependent platform type designations. The platform type can be
     * reported as either a combination of the code and environment (e.g. 14/LAND) or
     * as the descriptive representations (e.g. COMBAT VEHICLE), which are equivalent.
     */
    objPlat?: string;

    /**
     * The object specific type. Intended as, but not constrained to, MIL-STD-6016
     * environment dependent specific type designations. The specific type can be
     * reported as either a combination of the code and environment (e.g. 155/SURFACE)
     * or as the descriptive representation (e.g. AUDACE DDG), which are equivalent.
     */
    objSpec?: string;

    /**
     * The generic classification of the track object/group (e.g., HELICOPTER, TRACKED,
     * WATERCRAFT, WHEELED, etc.). Referenced, but not constrained to, NATO STANAG 4676
     * object type classifications.
     */
    objType?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Id/name of sensor providing the track data.
     */
    sen?: string;

    /**
     * Sensor quality.
     */
    senQual?: string;

    /**
     * Track object spd, in meters/sec.
     */
    spd?: number;

    /**
     * Array of UUIDs of the UDL data records that contributed to the generation of
     * this fused track. See the associated 'srcTyps' array for the specific types of
     * data, positionally corresponding to the UUIDs in this array, used in the track
     * fusion. The 'srcTyps' and 'srcIds' arrays must match in size. See the
     * corresponding srcTyps array element for the data type of the UUID and use the
     * appropriate API operation to retrieve that object (e.g. /udl/poi/{uuid}).
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (POI, MTI, TRACK, GROUNDIMAGE) that contributed to the
     * generation of this fused track. See the associated 'srcIds' array for the record
     * UUIDs, positionally corresponding to the record types in this array, used in the
     * track fusion. The 'srcTyps' and 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * The number of objects or units moving as a group and represented as a single
     * entity in this track message. If null, the track is assumed to represent a
     * single object. Note that if this track derives from a J-series message then
     * special definitions apply for the following values: 13 indicates an estimated
     * 2-7 units, 14 indicates an estimated more than 7 units, and 15 indicates an
     * estimated more than 12 units.
     */
    strength?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Overall track confidence estimate (not standardized, but typically a value
     * between 0 and 1, with 0 indicating lowest confidence).
     */
    trkConf?: number;

    /**
     * UUID identifying the track, which should remain the same on subsequent tracks of
     * the same object.
     */
    trkId?: string;

    /**
     * UUID of the track item object, applies to STANAG-4676 messages.
     */
    trkItmId?: string;

    /**
     * The track number (TN) of a surveillance entity. Intended as, but not constrained
     * to, the J-series track number encoded as five character alpha-numeric
     * characters. Users should refer to J-series documentation for specific TN
     * definitions.
     */
    trkNum?: string;

    /**
     * Means by which the track data was created (e.g., MEASURED, AUTOMATIC PREDICTED,
     * etc.).
     */
    trkPtType?: string;

    /**
     * Value indicating track quality (not standardized).
     */
    trkQual?: number;

    /**
     * Status of the track (e.g., INITIATING, MAINTAINING, DROPPING, TERMINATED, etc.).
     */
    trkStat?: string;
  }
}

export interface TrackTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Track timestamp in ISO8601 UTC format with microsecond precision.
   * (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface TrackUnvalidatedPublishParams {
  body: Array<TrackUnvalidatedPublishParams.Body>;
}

export namespace TrackUnvalidatedPublishParams {
  /**
   * A track is a position and optionally a heading/velocity of an object such as an
   * aircraft at a particular timestamp. It also includes optional information
   * regarding the identity/type of the target object, if known.
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
     * Track timestamp in ISO8601 UTC format.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Track point altitude relative to WGS-84 ellipsoid, in meters. Positive values
     * indicate a track object height above ellipsoid, and negative values indicate a
     * track object below ellipsoid, applicable to the depth estimate for a subsurface
     * track.
     */
    alt?: number;

    /**
     * Id/name of the platform providing the track data (i.e., tail number for air
     * platform, tower ID for tower based sensor, site id for fixed radar).
     */
    asset?: string;

    /**
     * Nationality or organization of the tracking/reporting system or platform (e.g.
     * FR, NATO, US, etc.).
     */
    assetNat?: string;

    /**
     * The attitude (Yaw, Pitch, and Roll), in degrees, of the track object. When
     * provided, the array must always contain 3 values. These values represent the
     * vehicle's rotation about the vertical, lateral, and longitudinal axes,
     * respectively, in a locally level, East, North, Up "right handed" coordinate
     * system centered on the vehicle. Yaw is measured in degrees and ranges from -180
     * to 180. Pitch is measured in degrees and ranges from -90 to 90. Roll is measured
     * in degrees and ranges from -180 to 180.
     */
    attitude?: Array<number>;

    /**
     * The attitude rate (Yaw Rate, Pitch Rate, and Roll Rate), in degrees per second,
     * of the track object. When provided, the array must always contain 3 values.
     * These values represent the rate of change of the vehicle's rotation about the
     * vertical, lateral, and longitudinal axes, respectively, in a locally level,
     * East, North, Up "right handed" coordinate system centered on the vehicle.
     */
    attitudeRate?: Array<number>;

    /**
     * The call sign currently assigned to this track object.
     */
    callSign?: string;

    /**
     * Contact information for assets reporting PPLI (Precise Participant Location and
     * Identification). PPLI is a Link 16 message that is used by units to transmit
     * complete location, identification, and limited status information.
     */
    cntct?: string;

    /**
     * The track object course-over-ground, in degrees clockwise from true North at the
     * object location (0-360 degrees).
     */
    course?: number;

    /**
     * Covariance matrix, in meter and second based units, for the defined cartesian
     * system.
     *
     * The array values represent the lower triangular half of the position-velocity
     * covariance matrix. The size of the covariance matrix is dynamic. The values are
     * output as an array of values corresponding to the position-velocity covariance
     * element positions, ordered as follows:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;y&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;y'&nbsp;z'&nbsp;&nbsp;
     *
     * x&nbsp;&nbsp;&nbsp;&nbsp;1
     *
     * y&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;3
     *
     * z&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;6
     *
     * x'&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;9&nbsp;&nbsp;10
     *
     * y'&nbsp;&nbsp;11&nbsp;&nbsp;12&nbsp;&nbsp;13&nbsp;&nbsp;14&nbsp;&nbsp;15
     *
     * z'&nbsp;&nbsp;16&nbsp;&nbsp;17&nbsp;&nbsp;18&nbsp;&nbsp;19&nbsp;&nbsp;20&nbsp;&nbsp;
     * 21
     *
     * The covariance matrix will be as large as the last element needed, and with
     * unused values zero-filled to maintain proper element positioning in the array.
     * For example, for a 2D (x, y) position-only covariance, the covariance matrix
     * will be 2x2 and the array would contain the 3 elements corresponding to the x,
     * and y position. Another example, now for a 2D (x, y) position-velocity
     * covariance, the covariance matrix will be 5x5 and the array would contain the 15
     * elements corresponding to the relevant x, y, x', and y' values (with the z-row
     * and z-column being all zeros). The cov array should contain only the lower left
     * triangle values from top left down to bottom right, in order.
     */
    cov?: Array<number>;

    /**
     * Track object acceleration in ECEF [x'', y'', z''], meters/sec^2. When provided,
     * array must always contain 3 values.
     */
    ecefAcc?: Array<number>;

    /**
     * Track object location in ECEF [x, y, z], meters. When provided, array must
     * always contain 3 values.
     */
    ecefPos?: Array<number>;

    /**
     * Track object velocity in ECEF [x', y', z'], meters/sec. When provided, array
     * must always contain 3 values.
     */
    ecefVel?: Array<number>;

    /**
     * East, North, Up acceleration components, in meters per second squared. When
     * provided, array must always contain 3 values.
     */
    eNUAcc?: Array<number>;

    /**
     * East, North, Up position components, in meters. When provided, array must always
     * contain 3 values.
     */
    eNUPos?: Array<number>;

    /**
     * East, North, Up velocity components, in meters/sec. When provided, array must
     * always contain 3 values.
     */
    eNUVel?: Array<number>;

    /**
     * The track environment type (AIR, LAND, SPACE, SUBSURFACE, SURFACE, UNKNOWN):
     *
     * AIR: Between sea level and the Kármán line, which has an altitude of 100
     * kilometers (62 miles).
     *
     * LAND: On the surface of dry land.
     *
     * SPACE: Above the Kármán line, which has an altitude of 100 kilometers (62
     * miles).
     *
     * SURFACE: On the surface of a body of water.
     *
     * SUBSURFACE: Below the surface of a body of water.
     *
     * UNKNOWN: Environment is not known.
     */
    env?: string;

    /**
     * Track environment confidence estimate (not standardized).
     */
    envConf?: number;

    /**
     * Uncertainty ellipsoid [semi-major axis (m), semi-minor axis (m), orientation
     * (deg)].
     */
    errEllp?: Array<number>;

    /**
     * The track object heading, in degrees clockwise from true North at the object
     * location.
     */
    hdng?: number;

    /**
     * Additional track object identity/status information, typically used for EXERCISE
     * identity amplification (FAKER, JOKER, KILO, TRAVELLER, ZOMBIE):
     *
     * FAKER: Friendly track, object, or entity acting as an exercise hostile.
     *
     * JOKER: Friendly track, object, or entity acting as an exercise suspect.
     *
     * KILO: Friendly high-value object.
     *
     * TRAVELLER: Suspect land or surface track following a recognized traffic route.
     *
     * ZOMBIE: Suspect track, object, or entity of special interest.
     */
    identAmp?: string;

    /**
     * Track object identity credibility.
     */
    identCred?: number;

    /**
     * Track object identity reliability.
     */
    identRel?: number;

    /**
     * The J-series message type, if this track is derived from a J-series message.
     */
    jSeries?: string;

    /**
     * WGS-84 latitude of the track object, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    lat?: number;

    /**
     * Estimate of the acceleration, [x'', y'', z''], of the track object in the
     * defined cartesian system, in meters/sec^2. When provided, array must always
     * contain 3 values.
     */
    lcAcc?: Array<number>;

    /**
     * Origin of a local coordinate system [lat, lon, altitude]. When provided, array
     * must always contain 3 values.
     */
    lco?: Array<number>;

    /**
     * Estimate of the position, [x, y, z], of the track object in the defined
     * cartesian system, in meters. When provided, array must always contain 3 values.
     */
    lcPos?: Array<number>;

    /**
     * x, y, and z-axis rotations about ECEF that define a local cartesian system. When
     * provided, array must always contain 3 values.
     */
    lcs?: Array<number>;

    /**
     * Estimate of the velocity, [x', y', z'], of the track object in the defined
     * cartesian system, in meters/sec. When provided, array must always contain 3
     * values.
     */
    lcVel?: Array<number>;

    /**
     * WGS-84 longitude of the track object, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon?: number;

    /**
     * Mode-1 interrogation response (mission code), indicating mission or aircraft
     * type.
     */
    m1?: number;

    /**
     * Mode-1 validity status.
     */
    m1v?: number;

    /**
     * Mode-2 interrogation response (military identification code).
     */
    m2?: number;

    /**
     * Mode-2 validity status.
     */
    m2v?: number;

    /**
     * Mode-3/A interrogation response (aircraft identification), provides a 4-digit
     * octal identification code for the aircraft, assigned by the air traffic
     * controller. Mode-3/A is shared military/civilian use.
     */
    m3a?: number;

    /**
     * Mode-3/A validity status.
     */
    m3av?: number;

    /**
     * The type of source information from which the track was derived. Intended as,
     * but not constrained to, NATO STANAG 4676 modality types (AIS, BFT, BIOMETRIC,
     * COMINT, DOPPLER, ELINT, HRR, HUMINT, IMAGE, MASINT, MIXED, OSINT, OTHER):
     *
     * AIS: Derived from an automated identification system source.
     *
     * BFT: Derived from a blue force tracking source.
     *
     * BIOMETRICS: Derived from a biometrics source.
     *
     * COMINT: Derived from a communications intelligence source.
     *
     * DOPPLER: Derived from a radar doppler source.
     *
     * ELINT: Derived from an electronics intelligence source.
     *
     * HRR: Derived from a radar high range resolution source.
     *
     * HUMINT: Derived from a human intelligence source.
     *
     * IMAGE: Derived from a still or motion imagery source.
     *
     * MASINT: Derived from a measurement and signals intelligence source.
     *
     * MIXED: Derived from a combination of two or more sources.
     *
     * OSINT: Derived from an open source intelligence source.
     *
     * OTHER: Derived from other types of unspecified sources.
     */
    modType?: string;

    /**
     * Message Timestamp.
     */
    msgTs?: string;

    /**
     * Mission ID related to the track.
     */
    msnId?: string;

    /**
     * Flag indicating that this track is fused from multiple sensor sources.
     */
    multiSource?: boolean;

    /**
     * The activity in which the track object is engaged. Intended as, but not
     * constrained to, MIL-STD-6016 environment dependent activity designations. The
     * activity can be reported as either a combination of the code and environment
     * (e.g. 65/AIR) or as the descriptive enumeration (e.g. DIVERTING), which are
     * equivalent.
     */
    objAct?: string;

    /**
     * The UID or designation of the tracked object.
     */
    objId?: string;

    /**
     * The estimated identity of the track object (ASSUMED FRIEND, FRIEND, HOSTILE,
     * NEUTRAL, PENDING, SUSPECT, UNKNOWN):
     *
     * ASSUMED FRIEND: Track assumed to be a friend due to the object characteristics,
     * behavior, and/or origin.
     *
     * FRIEND: Track object supporting friendly forces and belonging to a declared
     * friendly nation or entity.
     *
     * HOSTILE: Track object belonging to an opposing nation, party, group, or entity
     * deemed to contribute to a threat to friendly forces or their mission due to its
     * behavior, characteristics, nationality, or origin.
     *
     * NEUTRAL: Track object whose characteristics, behavior, nationality, and/or
     * origin indicate that it is neither supporting nor opposing friendly forces or
     * their mission.
     *
     * PENDING: Track object which has not been evaluated.
     *
     * SUSPECT: Track object deemed potentially hostile due to the object
     * characteristics, behavior, nationality, and/or origin.
     *
     * UNKNOWN: Track object which has been evaluated and does not meet criteria for
     * any standard identity.
     */
    objIdent?: string;

    /**
     * Nationality or organization of the track object (e.g. FR, NATO, US, etc.).
     */
    objNat?: string;

    /**
     * The object platform type. Intended as, but not constrained to, MIL-STD-6016
     * environment dependent platform type designations. The platform type can be
     * reported as either a combination of the code and environment (e.g. 14/LAND) or
     * as the descriptive representations (e.g. COMBAT VEHICLE), which are equivalent.
     */
    objPlat?: string;

    /**
     * The object specific type. Intended as, but not constrained to, MIL-STD-6016
     * environment dependent specific type designations. The specific type can be
     * reported as either a combination of the code and environment (e.g. 155/SURFACE)
     * or as the descriptive representation (e.g. AUDACE DDG), which are equivalent.
     */
    objSpec?: string;

    /**
     * The generic classification of the track object/group (e.g., HELICOPTER, TRACKED,
     * WATERCRAFT, WHEELED, etc.). Referenced, but not constrained to, NATO STANAG 4676
     * object type classifications.
     */
    objType?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Id/name of sensor providing the track data.
     */
    sen?: string;

    /**
     * Sensor quality.
     */
    senQual?: string;

    /**
     * Track object spd, in meters/sec.
     */
    spd?: number;

    /**
     * Array of UUIDs of the UDL data records that contributed to the generation of
     * this fused track. See the associated 'srcTyps' array for the specific types of
     * data, positionally corresponding to the UUIDs in this array, used in the track
     * fusion. The 'srcTyps' and 'srcIds' arrays must match in size. See the
     * corresponding srcTyps array element for the data type of the UUID and use the
     * appropriate API operation to retrieve that object (e.g. /udl/poi/{uuid}).
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types (POI, MTI, TRACK, GROUNDIMAGE) that contributed to the
     * generation of this fused track. See the associated 'srcIds' array for the record
     * UUIDs, positionally corresponding to the record types in this array, used in the
     * track fusion. The 'srcTyps' and 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * The number of objects or units moving as a group and represented as a single
     * entity in this track message. If null, the track is assumed to represent a
     * single object. Note that if this track derives from a J-series message then
     * special definitions apply for the following values: 13 indicates an estimated
     * 2-7 units, 14 indicates an estimated more than 7 units, and 15 indicates an
     * estimated more than 12 units.
     */
    strength?: number;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Overall track confidence estimate (not standardized, but typically a value
     * between 0 and 1, with 0 indicating lowest confidence).
     */
    trkConf?: number;

    /**
     * UUID identifying the track, which should remain the same on subsequent tracks of
     * the same object.
     */
    trkId?: string;

    /**
     * UUID of the track item object, applies to STANAG-4676 messages.
     */
    trkItmId?: string;

    /**
     * The track number (TN) of a surveillance entity. Intended as, but not constrained
     * to, the J-series track number encoded as five character alpha-numeric
     * characters. Users should refer to J-series documentation for specific TN
     * definitions.
     */
    trkNum?: string;

    /**
     * Means by which the track data was created (e.g., MEASURED, AUTOMATIC PREDICTED,
     * etc.).
     */
    trkPtType?: string;

    /**
     * Value indicating track quality (not standardized).
     */
    trkQual?: number;

    /**
     * Status of the track (e.g., INITIATING, MAINTAINING, DROPPING, TERMINATED, etc.).
     */
    trkStat?: string;
  }
}

Track.History = History;

export declare namespace Track {
  export {
    type TrackListResponse as TrackListResponse,
    type TrackCountResponse as TrackCountResponse,
    type TrackQueryhelpResponse as TrackQueryhelpResponse,
    type TrackTupleResponse as TrackTupleResponse,
    type TrackListResponsesOffsetPage as TrackListResponsesOffsetPage,
    type TrackListParams as TrackListParams,
    type TrackCountParams as TrackCountParams,
    type TrackCreateBulkParams as TrackCreateBulkParams,
    type TrackTupleParams as TrackTupleParams,
    type TrackUnvalidatedPublishParams as TrackUnvalidatedPublishParams,
  };

  export {
    History as History,
    type TrackFull as TrackFull,
    type HistoryCountResponse as HistoryCountResponse,
    type TrackFullsOffsetPage as TrackFullsOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
