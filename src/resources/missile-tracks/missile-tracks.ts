// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import {
  History,
  HistoryAodrParams,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryQueryParams,
  HistoryQueryResponse,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class MissileTracks extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: MissileTrackListParams,
    options?: RequestOptions,
  ): PagePromise<MissileTrackListResponsesOffsetPage, MissileTrackListResponse> {
    return this._client.getAPIList('/udl/missiletrack', OffsetPage<MissileTrackListResponse>, {
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
   */
  count(query: MissileTrackCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/missiletrack/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * MissileTrack records as a POST body and ingest into the database. This operation
   * is not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   */
  createBulk(params: MissileTrackCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/missiletrack/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<MissileTrackQueryhelpResponse> {
    return this._client.get('/udl/missiletrack/queryhelp', options);
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
  tuple(query: MissileTrackTupleParams, options?: RequestOptions): APIPromise<MissileTrackTupleResponse> {
    return this._client.get('/udl/missiletrack/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple missile track records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  unvalidatedPublish(
    params: MissileTrackUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-missiletrack', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type MissileTrackListResponsesOffsetPage = OffsetPage<MissileTrackListResponse>;

/**
 * These services provide operations for querying of all available missile track
 * details and amplifying missile data. A missile track is a position and
 * optionally a heading/velocity of an object across all environments at a
 * particular timestamp. It also includes optional information regarding the
 * identity/type of missile, impact location, launch location and other amplifying
 * object data, if known.
 */
export interface MissileTrackListResponse {
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
   * The receipt time of the data by the processing system, in ISO8601 UTC format
   * with microsecond precision.
   */
  ts: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Subtype is a finer grain categorization of missile types. Examples include but
   * are not limited to SRBM, MRBM, IRBM, LRBM, ICBM, SLBM.
   *
   * &nbsp;SRBM - Short-Range Ballistic Missile
   *
   * &nbsp;MRBM - Medium-Range Ballistic Missile
   *
   * &nbsp;IRBM - Intermediate-Range Ballistic Missile
   *
   * &nbsp;LRBM - Long-Range Ballistic Missile
   *
   * &nbsp;ICBM - Intercontinental Ballistic Missile
   *
   * &nbsp;SLBM - Submarine-Launched Ballistic Missile.
   */
  acftSubType?: string;

  /**
   * A track may be designated as a non-alert track or an alert track.
   *
   * Examples include but are not limited to:
   *
   * &nbsp;Non-alert tracks – choose None (Blank).
   *
   * &nbsp;Alert tracks – enter the proper alert classification:
   *
   * &nbsp;HIT - High Interest Track
   *
   * &nbsp;TGT - Target
   *
   * &nbsp;SUS - Suspect Carrier
   *
   * &nbsp;NSP - Cleared Suspect.
   */
  alert?: string;

  /**
   * Angle of elevation/depression between observer and missile in degrees.
   */
  angElev?: number;

  /**
   * Three element array representing an Area of Uncertainty (AoU). The array element
   * definitions and units are type specific depending on the aouType specified in
   * this record:
   *
   * &nbsp;ELLIPSE:
   *
   * &nbsp;&nbsp;brg - orientation in degrees of the ellipse
   *
   * &nbsp;&nbsp;a1 - semi-major axis in kilometers
   *
   * &nbsp;&nbsp;a2 - semi-minor axis in kilometers
   *
   * &nbsp;BEARING (BEARING BOX or MTST BEARING BOX):
   *
   * &nbsp;&nbsp;brg - orientation in degrees of the bearing box
   *
   * &nbsp;&nbsp;a1 - length of bearing box in kilometers
   *
   * &nbsp;&nbsp;a2 - half-width of bearing box in kilometers
   *
   * &nbsp;OTHER (All other type values):
   *
   * &nbsp;&nbsp;brg - line of bearing in degrees true
   *
   * &nbsp;&nbsp;a1 - bearing error in degrees
   *
   * &nbsp;&nbsp;a2 - estimated range in kilometers.
   */
  aouRptData?: Array<number>;

  /**
   * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
   * type defines the elements of the aouEllp array and is required if aouEllp is not
   * null. See the aouEllp field definition for specific information.
   */
  aouRptType?: string;

  /**
   * Missile azimuth corridor data.
   */
  azCorr?: number;

  /**
   * Indicates whether or not the missile is currently in a state of boosting.
   */
  boosting?: boolean;

  /**
   * Track point burnout altitude relative to WGS-84 ellipsoid, in kilometers.
   */
  burnoutAlt?: number;

  /**
   * The call sign currently assigned to the track object.
   */
  callSign?: string;

  /**
   * The percentage of time that the estimated AoU will "cover" the true position of
   * the track.
   */
  containment?: number;

  /**
   * Time the row was created in the database.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database.
   */
  createdBy?: string;

  /**
   * The drop-point indicator setting.
   */
  dropPtInd?: boolean;

  /**
   * Indicates whether or not a track has an emergency.
   */
  emgInd?: boolean;

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
  env?: 'AIR' | 'LAND' | 'SPACE' | 'SURFACE' | 'SUBSURFACE' | 'UNKNOWN';

  /**
   * Three element array representing an Area of Uncertainty (AoU). The array element
   * definitions and units are type specific depending on the aouType specified in
   * this record:
   *
   * &nbsp;ELLIPSE:
   *
   * &nbsp;&nbsp;brg - orientation in degrees of the ellipse
   *
   * &nbsp;&nbsp;a1 - semi-major axis in kilometers
   *
   * &nbsp;&nbsp;a2 - semi-minor axis in kilometers
   *
   * &nbsp;BEARING (BEARING BOX or MTST BEARING BOX):
   *
   * &nbsp;&nbsp;brg - orientation in degrees of the bearing box
   *
   * &nbsp;&nbsp;a1 - length of bearing box in kilometers
   *
   * &nbsp;&nbsp;a2 - half-width of bearing box in kilometers
   *
   * &nbsp;OTHER (All other type values):
   *
   * &nbsp;&nbsp;brg - line of bearing in degrees true
   *
   * &nbsp;&nbsp;a1 - bearing error in degrees
   *
   * &nbsp;&nbsp;a2 - estimated range in kilometers.
   */
  impactAouData?: Array<number>;

  /**
   * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
   * type defines the elements of the aouEllp array and is required if aouEllp is not
   * null. See the aouEllp field definition for specific information.
   */
  impactAouType?: string;

  /**
   * WGS-84 latitude of the missile object impact point, in degrees. -90 to 90
   * degrees (negative values south of equator).
   */
  impactLat?: number;

  /**
   * WGS-84 longitude of the missile object impact point, in degrees. -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  impactLon?: number;

  /**
   * Estimated time of impact timestamp in ISO8601 UTC format with microsecond
   * precision.
   */
  impactTime?: string;

  /**
   * Source code for source of information used to detect track.
   */
  infoSource?: string;

  /**
   * Three element array representing an Area of Uncertainty (AoU). The array element
   * definitions and units are type specific depending on the aouType specified in
   * this record:
   *
   * &nbsp;ELLIPSE:
   *
   * &nbsp;&nbsp;brg - orientation in degrees of the ellipse
   *
   * &nbsp;&nbsp;a1 - semi-major axis in kilometers
   *
   * &nbsp;&nbsp;a2 - semi-minor axis in kilometers
   *
   * &nbsp;BEARING (BEARING BOX or MTST BEARING BOX):
   *
   * &nbsp;&nbsp;brg - orientation in degrees of the bearing box
   *
   * &nbsp;&nbsp;a1 - length of bearing box in kilometers
   *
   * &nbsp;&nbsp;a2 - half-width of bearing box in kilometers
   *
   * &nbsp;OTHER (All other type values):
   *
   * &nbsp;&nbsp;brg - line of bearing in degrees true
   *
   * &nbsp;&nbsp;a1 - bearing error in degrees
   *
   * &nbsp;&nbsp;a2 - estimated range in kilometers.
   */
  launchAouData?: Array<number>;

  /**
   * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
   * type defines the elements of the aouEllp array and is required if aouEllp is not
   * null. See the aouEllp field definition for specific information.
   */
  launchAouType?: string;

  /**
   * WGS-84 latitude of the missile launch point, in degrees. -90 to 90 degrees
   * (negative values south of equator).
   */
  launchLat?: number;

  /**
   * WGS-84 longitude of the missile launch point, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  launchLon?: number;

  /**
   * Missile launch timestamp in ISO8601 UTC format with microsecond precision.
   */
  launchTime?: string;

  /**
   * Indicates whether or not the missile is considered lost.
   */
  lostTrkInd?: boolean;

  /**
   * The timestamp of the external message from which this request originated, if
   * applicable, in ISO8601 UTC format with millisecond precision.
   */
  msgCreateDate?: string;

  /**
   * The message subtype is a finer grain categorization of message types as many
   * messages can contain a variety of data content within the same structure.
   * Examples include but are not limited to Initial, Final, Launch, Update, etc.
   * Users should consult the appropriate documentation, based on the message type,
   * for the definitions of the subtypes that apply to that message.
   */
  msgSubType?: string;

  /**
   * The type of external message from which this request originated.
   */
  msgType?: string;

  /**
   * Missile status enumeration examples include but are not limited to:
   *
   * &nbsp;AT LAUNCH
   *
   * &nbsp;AT OBSERVATION
   *
   * &nbsp;FLYING
   *
   * &nbsp;IMPACTED
   *
   * &nbsp;LOST
   *
   * &nbsp;STALE
   *
   * &nbsp;DEBRIS.
   */
  mslStatus?: string;

  /**
   * Source of the missile-unique identifier (MUID).
   */
  muidSrc?: string;

  /**
   * Track ID for the source of the missile-unique identifier.
   */
  muidSrcTrk?: string;

  /**
   * Track name.
   */
  name?: string;

  /**
   * Space activity (examples: RECONNAISSANCE, ANTISPACE WARFARE, TELEVISION). The
   * activity in which the track object is engaged. Intended as, but not constrained
   * to, MIL-STD-6016 environment dependent activity designations. The activity can
   * be reported as either a combination of the code and environment (e.g. 65/AIR) or
   * as the descriptive enumeration (e.g. DIVERTING), which are equivalent.
   */
  objAct?: string;

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
  objIdent?: 'ASSUMED FRIEND' | 'FRIEND' | 'HOSTILE' | 'NEUTRAL' | 'PENDING' | 'SUSPECT' | 'UNKNOWN';

  /**
   * Space Platform field along with the Space Activity field further defines the
   * identity of a Space track (examples: SATELLITE, WEAPON, PATROL). The object
   * platform type. Intended as, but not constrained to, MIL-STD-6016 environment
   * dependent platform type designations. The platform type can be reported as
   * either a combination of the code and environment (e.g. 14/LAND) or as the
   * descriptive representations (e.g. COMBAT VEHICLE), which are equivalent.
   */
  objPlat?: string;

  /**
   * The type of object to which this record refers. The object type may be updated
   * in later records based on assessment of additional data.
   */
  objType?: string;

  /**
   * Confidence of the object type, 0-100.
   */
  objTypeConf?: number;

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
   * Track ID of the parent track, within the originating system, from which the
   * track was developed.
   */
  parentTrackId?: string;

  /**
   * Azimuth corridor reference point latitude.
   */
  polarSingLocLat?: number;

  /**
   * Azimuth corridor reference point longitude.
   */
  polarSingLocLon?: number;

  /**
   * Last report type received from the sensor (for example, OBSBO = observation
   * burnout).
   */
  senMode?: string;

  /**
   * Space amplification indicates additional information on the space environment
   * being reported (examples: NUCLEAR WARHEAD, FUEL-AIR EXPLOSIVE WARHEAD, DEBRIS).
   */
  spaceAmp?: string;

  /**
   * Confidence level of the amplifying characteristics. Values range from 0 to 6.
   */
  spaceAmpConf?: number;

  /**
   * Specific type of point or track with an environment of space.
   */
  spaceSpecType?: string;

  /**
   * Track ID within the originating system.
   */
  trackId?: string;

  /**
   * Overall track confidence estimate (not standardized, but typically a value
   * between 0 and 1, with 0 indicating lowest confidence).
   */
  trkConf?: number;

  /**
   * Track Quality is reported as an integer from 0-15. Track Quality specifies the
   * reliability of the positional information of a reported track, with higher
   * values indicating higher track quality; i.e., lower errors in reported position.
   */
  trkQual?: number;

  /**
   * Array of MissileTrackVector objects. Missile track vectors are cartesian vectors
   * of position, velocity, and acceleration that, together with their time, 'epoch',
   * uniquely determine the trajectory of the missile. ECEF is the preferred
   * coordinate frame but in some cases data may be in another frame as specified by
   * 'referenceFrame', depending on the provider.
   */
  vectors?: Array<MissileTrackListResponse.Vector>;
}

export namespace MissileTrackListResponse {
  /**
   * Schema for Missile Track Vector data.
   */
  export interface Vector {
    /**
     * Vector timestamp in ISO8601 UTC format, with microsecond precision.
     */
    epoch: string;

    /**
     * Three element array, expressing the cartesian acceleration vector of the target
     * object, in kilometers/second^2, in the specified referenceFrame. If
     * referenceFrame is null then ECEF should be assumed. The array element order is
     * [x'', y'', z''].
     */
    accel?: Array<number>;

    /**
     * Confidence of the vector, 0-100.
     */
    confidence?: number;

    /**
     * Track object course, in degrees clockwise from true north.
     */
    course?: number;

    /**
     * Covariance matrix, in kilometer and second based units, in the specified
     * covReferenceFrame.
     *
     * If the covReferenceFrame is null it is assumed to be UVW. The array values
     * (1-45) represent the upper triangular half of the position-velocity-acceleration
     * covariance matrix.
     *
     * The covariance elements are position dependent within the array with values
     * ordered as follows:
     *
     * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x"&nbsp;&nbsp;&nbsp;&nbsp;y"&nbsp;&nbsp;&nbsp;&nbsp;z"
     *
     * x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9
     *
     * y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;&nbsp;11&nbsp;&nbsp;&nbsp;12&nbsp;&nbsp;&nbsp;13&nbsp;&nbsp;&nbsp;14&nbsp;&nbsp;&nbsp;15&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;&nbsp;17
     *
     * z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18&nbsp;&nbsp;&nbsp;19&nbsp;&nbsp;&nbsp;20&nbsp;&nbsp;&nbsp;21&nbsp;&nbsp;&nbsp;22&nbsp;&nbsp;&nbsp;23&nbsp;&nbsp;&nbsp;24
     *
     * x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25&nbsp;&nbsp;&nbsp;26&nbsp;&nbsp;&nbsp;27&nbsp;&nbsp;&nbsp;28&nbsp;&nbsp;&nbsp;29&nbsp;&nbsp;&nbsp;30
     *
     * y'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31&nbsp;&nbsp;&nbsp;32&nbsp;&nbsp;&nbsp;33&nbsp;&nbsp;&nbsp;34&nbsp;&nbsp;&nbsp;35
     *
     * z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36&nbsp;&nbsp;&nbsp;37&nbsp;&nbsp;&nbsp;38&nbsp;&nbsp;&nbsp;39
     *
     * x"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40&nbsp;&nbsp;&nbsp;41&nbsp;&nbsp;&nbsp;42
     *
     * y"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43&nbsp;&nbsp;&nbsp;44
     *
     * z"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45
     *
     * The cov array should contain only the upper right triangle values from top left
     * down to bottom right, in order.
     */
    cov?: Array<number>;

    /**
     * The reference frame of the covariance elements (ECEF, J2000, UVW, EFG/TDR, TEME,
     * GCRF). If the referenceFrame is null it is assumed to be UVW.
     */
    covReferenceFrame?: 'ECEF' | 'J2000' | 'UVW' | 'EFG/TDR' | 'TEME' | 'GCRF';

    /**
     * The flight azimuth associated with the current state vector (0-360 degrees).
     */
    flightAz?: number;

    /**
     * Unique identifier of the reporting sensor of the object.
     */
    idSensor?: string;

    /**
     * Object to which this vector applies.
     */
    object?: string;

    /**
     * Optional identifier provided by the source to indicate the reporting sensor of
     * the object. This may be an internal identifier and not necessarily a valid
     * sensor ID.
     */
    origSensorId?: string;

    /**
     * Three element array, expressing the cartesian position vector of the target
     * object, in kilometers, in the specified referenceFrame. If referenceFrame is
     * null then ECEF should be assumed. The array element order is [x, y, z].
     */
    pos?: Array<number>;

    /**
     * The quaternion describing the attitude of the spacecraft with respect to the
     * reference frame listed in the 'referenceFrame' field. The array element order
     * convention is the three vector components, followed by the scalar component.
     */
    quat?: Array<number>;

    /**
     * The reference frame of the cartesian vector (ECEF, J2000). If the referenceFrame
     * is null it is assumed to be ECEF.
     */
    referenceFrame?: string;

    /**
     * Track object speed, in kilometers/sec.
     */
    spd?: number;

    /**
     * Status of the vector (e.g. INITIAL, UPDATE).
     */
    status?: string;

    /**
     * Source of the time value.
     */
    timeSource?: string;

    /**
     * Type of vector represented (e.g. LOS, PREDICTED, STATE).
     */
    type?: string;

    /**
     * Object altitude at epoch, expressed in kilometers above WGS-84 ellipsoid.
     */
    vectorAlt?: number;

    /**
     * WGS-84 object latitude subpoint at epoch, represented as -90 to 90 degrees
     * (negative values south of equator).
     */
    vectorLat?: number;

    /**
     * WGS-84 object longitude subpoint at epoch, represented as -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    vectorLon?: number;

    /**
     * Three element array, expressing the cartesian velocity vector of the target
     * object, in kilometers/second, in the specified referenceFrame. If referenceFrame
     * is null then ECEF should be assumed. The array element order is [x', y', z'].
     */
    vel?: Array<number>;
  }
}

export type MissileTrackCountResponse = string;

export interface MissileTrackQueryhelpResponse {
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

export type MissileTrackTupleResponse = Array<MissileTrackTupleResponse.MissileTrackTupleResponseItem>;

export namespace MissileTrackTupleResponse {
  /**
   * These services provide operations for querying of all available missile track
   * details and amplifying missile data. A missile track is a position and
   * optionally a heading/velocity of an object across all environments at a
   * particular timestamp. It also includes optional information regarding the
   * identity/type of missile, impact location, launch location and other amplifying
   * object data, if known.
   */
  export interface MissileTrackTupleResponseItem {
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
     * The receipt time of the data by the processing system, in ISO8601 UTC format
     * with microsecond precision.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Subtype is a finer grain categorization of missile types. Examples include but
     * are not limited to SRBM, MRBM, IRBM, LRBM, ICBM, SLBM.
     *
     * &nbsp;SRBM - Short-Range Ballistic Missile
     *
     * &nbsp;MRBM - Medium-Range Ballistic Missile
     *
     * &nbsp;IRBM - Intermediate-Range Ballistic Missile
     *
     * &nbsp;LRBM - Long-Range Ballistic Missile
     *
     * &nbsp;ICBM - Intercontinental Ballistic Missile
     *
     * &nbsp;SLBM - Submarine-Launched Ballistic Missile.
     */
    acftSubType?: string;

    /**
     * A track may be designated as a non-alert track or an alert track.
     *
     * Examples include but are not limited to:
     *
     * &nbsp;Non-alert tracks – choose None (Blank).
     *
     * &nbsp;Alert tracks – enter the proper alert classification:
     *
     * &nbsp;HIT - High Interest Track
     *
     * &nbsp;TGT - Target
     *
     * &nbsp;SUS - Suspect Carrier
     *
     * &nbsp;NSP - Cleared Suspect.
     */
    alert?: string;

    /**
     * Angle of elevation/depression between observer and missile in degrees.
     */
    angElev?: number;

    /**
     * Three element array representing an Area of Uncertainty (AoU). The array element
     * definitions and units are type specific depending on the aouType specified in
     * this record:
     *
     * &nbsp;ELLIPSE:
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the ellipse
     *
     * &nbsp;&nbsp;a1 - semi-major axis in kilometers
     *
     * &nbsp;&nbsp;a2 - semi-minor axis in kilometers
     *
     * &nbsp;BEARING (BEARING BOX or MTST BEARING BOX):
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the bearing box
     *
     * &nbsp;&nbsp;a1 - length of bearing box in kilometers
     *
     * &nbsp;&nbsp;a2 - half-width of bearing box in kilometers
     *
     * &nbsp;OTHER (All other type values):
     *
     * &nbsp;&nbsp;brg - line of bearing in degrees true
     *
     * &nbsp;&nbsp;a1 - bearing error in degrees
     *
     * &nbsp;&nbsp;a2 - estimated range in kilometers.
     */
    aouRptData?: Array<number>;

    /**
     * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
     * type defines the elements of the aouEllp array and is required if aouEllp is not
     * null. See the aouEllp field definition for specific information.
     */
    aouRptType?: string;

    /**
     * Missile azimuth corridor data.
     */
    azCorr?: number;

    /**
     * Indicates whether or not the missile is currently in a state of boosting.
     */
    boosting?: boolean;

    /**
     * Track point burnout altitude relative to WGS-84 ellipsoid, in kilometers.
     */
    burnoutAlt?: number;

    /**
     * The call sign currently assigned to the track object.
     */
    callSign?: string;

    /**
     * The percentage of time that the estimated AoU will "cover" the true position of
     * the track.
     */
    containment?: number;

    /**
     * Time the row was created in the database.
     */
    createdAt?: string;

    /**
     * Application user who created the row in the database.
     */
    createdBy?: string;

    /**
     * The drop-point indicator setting.
     */
    dropPtInd?: boolean;

    /**
     * Indicates whether or not a track has an emergency.
     */
    emgInd?: boolean;

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
    env?: 'AIR' | 'LAND' | 'SPACE' | 'SURFACE' | 'SUBSURFACE' | 'UNKNOWN';

    /**
     * Three element array representing an Area of Uncertainty (AoU). The array element
     * definitions and units are type specific depending on the aouType specified in
     * this record:
     *
     * &nbsp;ELLIPSE:
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the ellipse
     *
     * &nbsp;&nbsp;a1 - semi-major axis in kilometers
     *
     * &nbsp;&nbsp;a2 - semi-minor axis in kilometers
     *
     * &nbsp;BEARING (BEARING BOX or MTST BEARING BOX):
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the bearing box
     *
     * &nbsp;&nbsp;a1 - length of bearing box in kilometers
     *
     * &nbsp;&nbsp;a2 - half-width of bearing box in kilometers
     *
     * &nbsp;OTHER (All other type values):
     *
     * &nbsp;&nbsp;brg - line of bearing in degrees true
     *
     * &nbsp;&nbsp;a1 - bearing error in degrees
     *
     * &nbsp;&nbsp;a2 - estimated range in kilometers.
     */
    impactAouData?: Array<number>;

    /**
     * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
     * type defines the elements of the aouEllp array and is required if aouEllp is not
     * null. See the aouEllp field definition for specific information.
     */
    impactAouType?: string;

    /**
     * WGS-84 latitude of the missile object impact point, in degrees. -90 to 90
     * degrees (negative values south of equator).
     */
    impactLat?: number;

    /**
     * WGS-84 longitude of the missile object impact point, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian).
     */
    impactLon?: number;

    /**
     * Estimated time of impact timestamp in ISO8601 UTC format with microsecond
     * precision.
     */
    impactTime?: string;

    /**
     * Source code for source of information used to detect track.
     */
    infoSource?: string;

    /**
     * Three element array representing an Area of Uncertainty (AoU). The array element
     * definitions and units are type specific depending on the aouType specified in
     * this record:
     *
     * &nbsp;ELLIPSE:
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the ellipse
     *
     * &nbsp;&nbsp;a1 - semi-major axis in kilometers
     *
     * &nbsp;&nbsp;a2 - semi-minor axis in kilometers
     *
     * &nbsp;BEARING (BEARING BOX or MTST BEARING BOX):
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the bearing box
     *
     * &nbsp;&nbsp;a1 - length of bearing box in kilometers
     *
     * &nbsp;&nbsp;a2 - half-width of bearing box in kilometers
     *
     * &nbsp;OTHER (All other type values):
     *
     * &nbsp;&nbsp;brg - line of bearing in degrees true
     *
     * &nbsp;&nbsp;a1 - bearing error in degrees
     *
     * &nbsp;&nbsp;a2 - estimated range in kilometers.
     */
    launchAouData?: Array<number>;

    /**
     * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
     * type defines the elements of the aouEllp array and is required if aouEllp is not
     * null. See the aouEllp field definition for specific information.
     */
    launchAouType?: string;

    /**
     * WGS-84 latitude of the missile launch point, in degrees. -90 to 90 degrees
     * (negative values south of equator).
     */
    launchLat?: number;

    /**
     * WGS-84 longitude of the missile launch point, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    launchLon?: number;

    /**
     * Missile launch timestamp in ISO8601 UTC format with microsecond precision.
     */
    launchTime?: string;

    /**
     * Indicates whether or not the missile is considered lost.
     */
    lostTrkInd?: boolean;

    /**
     * The timestamp of the external message from which this request originated, if
     * applicable, in ISO8601 UTC format with millisecond precision.
     */
    msgCreateDate?: string;

    /**
     * The message subtype is a finer grain categorization of message types as many
     * messages can contain a variety of data content within the same structure.
     * Examples include but are not limited to Initial, Final, Launch, Update, etc.
     * Users should consult the appropriate documentation, based on the message type,
     * for the definitions of the subtypes that apply to that message.
     */
    msgSubType?: string;

    /**
     * The type of external message from which this request originated.
     */
    msgType?: string;

    /**
     * Missile status enumeration examples include but are not limited to:
     *
     * &nbsp;AT LAUNCH
     *
     * &nbsp;AT OBSERVATION
     *
     * &nbsp;FLYING
     *
     * &nbsp;IMPACTED
     *
     * &nbsp;LOST
     *
     * &nbsp;STALE
     *
     * &nbsp;DEBRIS.
     */
    mslStatus?: string;

    /**
     * Source of the missile-unique identifier (MUID).
     */
    muidSrc?: string;

    /**
     * Track ID for the source of the missile-unique identifier.
     */
    muidSrcTrk?: string;

    /**
     * Track name.
     */
    name?: string;

    /**
     * Space activity (examples: RECONNAISSANCE, ANTISPACE WARFARE, TELEVISION). The
     * activity in which the track object is engaged. Intended as, but not constrained
     * to, MIL-STD-6016 environment dependent activity designations. The activity can
     * be reported as either a combination of the code and environment (e.g. 65/AIR) or
     * as the descriptive enumeration (e.g. DIVERTING), which are equivalent.
     */
    objAct?: string;

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
    objIdent?: 'ASSUMED FRIEND' | 'FRIEND' | 'HOSTILE' | 'NEUTRAL' | 'PENDING' | 'SUSPECT' | 'UNKNOWN';

    /**
     * Space Platform field along with the Space Activity field further defines the
     * identity of a Space track (examples: SATELLITE, WEAPON, PATROL). The object
     * platform type. Intended as, but not constrained to, MIL-STD-6016 environment
     * dependent platform type designations. The platform type can be reported as
     * either a combination of the code and environment (e.g. 14/LAND) or as the
     * descriptive representations (e.g. COMBAT VEHICLE), which are equivalent.
     */
    objPlat?: string;

    /**
     * The type of object to which this record refers. The object type may be updated
     * in later records based on assessment of additional data.
     */
    objType?: string;

    /**
     * Confidence of the object type, 0-100.
     */
    objTypeConf?: number;

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
     * Track ID of the parent track, within the originating system, from which the
     * track was developed.
     */
    parentTrackId?: string;

    /**
     * Azimuth corridor reference point latitude.
     */
    polarSingLocLat?: number;

    /**
     * Azimuth corridor reference point longitude.
     */
    polarSingLocLon?: number;

    /**
     * Last report type received from the sensor (for example, OBSBO = observation
     * burnout).
     */
    senMode?: string;

    /**
     * Space amplification indicates additional information on the space environment
     * being reported (examples: NUCLEAR WARHEAD, FUEL-AIR EXPLOSIVE WARHEAD, DEBRIS).
     */
    spaceAmp?: string;

    /**
     * Confidence level of the amplifying characteristics. Values range from 0 to 6.
     */
    spaceAmpConf?: number;

    /**
     * Specific type of point or track with an environment of space.
     */
    spaceSpecType?: string;

    /**
     * Track ID within the originating system.
     */
    trackId?: string;

    /**
     * Overall track confidence estimate (not standardized, but typically a value
     * between 0 and 1, with 0 indicating lowest confidence).
     */
    trkConf?: number;

    /**
     * Track Quality is reported as an integer from 0-15. Track Quality specifies the
     * reliability of the positional information of a reported track, with higher
     * values indicating higher track quality; i.e., lower errors in reported position.
     */
    trkQual?: number;

    /**
     * Array of MissileTrackVector objects. Missile track vectors are cartesian vectors
     * of position, velocity, and acceleration that, together with their time, 'epoch',
     * uniquely determine the trajectory of the missile. ECEF is the preferred
     * coordinate frame but in some cases data may be in another frame as specified by
     * 'referenceFrame', depending on the provider.
     */
    vectors?: Array<MissileTrackTupleResponseItem.Vector>;
  }

  export namespace MissileTrackTupleResponseItem {
    /**
     * Schema for Missile Track Vector data.
     */
    export interface Vector {
      /**
       * Vector timestamp in ISO8601 UTC format, with microsecond precision.
       */
      epoch: string;

      /**
       * Three element array, expressing the cartesian acceleration vector of the target
       * object, in kilometers/second^2, in the specified referenceFrame. If
       * referenceFrame is null then ECEF should be assumed. The array element order is
       * [x'', y'', z''].
       */
      accel?: Array<number>;

      /**
       * Confidence of the vector, 0-100.
       */
      confidence?: number;

      /**
       * Track object course, in degrees clockwise from true north.
       */
      course?: number;

      /**
       * Covariance matrix, in kilometer and second based units, in the specified
       * covReferenceFrame.
       *
       * If the covReferenceFrame is null it is assumed to be UVW. The array values
       * (1-45) represent the upper triangular half of the position-velocity-acceleration
       * covariance matrix.
       *
       * The covariance elements are position dependent within the array with values
       * ordered as follows:
       *
       * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x"&nbsp;&nbsp;&nbsp;&nbsp;y"&nbsp;&nbsp;&nbsp;&nbsp;z"
       *
       * x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9
       *
       * y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;&nbsp;11&nbsp;&nbsp;&nbsp;12&nbsp;&nbsp;&nbsp;13&nbsp;&nbsp;&nbsp;14&nbsp;&nbsp;&nbsp;15&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;&nbsp;17
       *
       * z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18&nbsp;&nbsp;&nbsp;19&nbsp;&nbsp;&nbsp;20&nbsp;&nbsp;&nbsp;21&nbsp;&nbsp;&nbsp;22&nbsp;&nbsp;&nbsp;23&nbsp;&nbsp;&nbsp;24
       *
       * x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25&nbsp;&nbsp;&nbsp;26&nbsp;&nbsp;&nbsp;27&nbsp;&nbsp;&nbsp;28&nbsp;&nbsp;&nbsp;29&nbsp;&nbsp;&nbsp;30
       *
       * y'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31&nbsp;&nbsp;&nbsp;32&nbsp;&nbsp;&nbsp;33&nbsp;&nbsp;&nbsp;34&nbsp;&nbsp;&nbsp;35
       *
       * z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36&nbsp;&nbsp;&nbsp;37&nbsp;&nbsp;&nbsp;38&nbsp;&nbsp;&nbsp;39
       *
       * x"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40&nbsp;&nbsp;&nbsp;41&nbsp;&nbsp;&nbsp;42
       *
       * y"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43&nbsp;&nbsp;&nbsp;44
       *
       * z"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45
       *
       * The cov array should contain only the upper right triangle values from top left
       * down to bottom right, in order.
       */
      cov?: Array<number>;

      /**
       * The reference frame of the covariance elements (ECEF, J2000, UVW, EFG/TDR, TEME,
       * GCRF). If the referenceFrame is null it is assumed to be UVW.
       */
      covReferenceFrame?: 'ECEF' | 'J2000' | 'UVW' | 'EFG/TDR' | 'TEME' | 'GCRF';

      /**
       * The flight azimuth associated with the current state vector (0-360 degrees).
       */
      flightAz?: number;

      /**
       * Unique identifier of the reporting sensor of the object.
       */
      idSensor?: string;

      /**
       * Object to which this vector applies.
       */
      object?: string;

      /**
       * Optional identifier provided by the source to indicate the reporting sensor of
       * the object. This may be an internal identifier and not necessarily a valid
       * sensor ID.
       */
      origSensorId?: string;

      /**
       * Three element array, expressing the cartesian position vector of the target
       * object, in kilometers, in the specified referenceFrame. If referenceFrame is
       * null then ECEF should be assumed. The array element order is [x, y, z].
       */
      pos?: Array<number>;

      /**
       * The quaternion describing the attitude of the spacecraft with respect to the
       * reference frame listed in the 'referenceFrame' field. The array element order
       * convention is the three vector components, followed by the scalar component.
       */
      quat?: Array<number>;

      /**
       * The reference frame of the cartesian vector (ECEF, J2000). If the referenceFrame
       * is null it is assumed to be ECEF.
       */
      referenceFrame?: string;

      /**
       * Track object speed, in kilometers/sec.
       */
      spd?: number;

      /**
       * Status of the vector (e.g. INITIAL, UPDATE).
       */
      status?: string;

      /**
       * Source of the time value.
       */
      timeSource?: string;

      /**
       * Type of vector represented (e.g. LOS, PREDICTED, STATE).
       */
      type?: string;

      /**
       * Object altitude at epoch, expressed in kilometers above WGS-84 ellipsoid.
       */
      vectorAlt?: number;

      /**
       * WGS-84 object latitude subpoint at epoch, represented as -90 to 90 degrees
       * (negative values south of equator).
       */
      vectorLat?: number;

      /**
       * WGS-84 object longitude subpoint at epoch, represented as -180 to 180 degrees
       * (negative values west of Prime Meridian).
       */
      vectorLon?: number;

      /**
       * Three element array, expressing the cartesian velocity vector of the target
       * object, in kilometers/second, in the specified referenceFrame. If referenceFrame
       * is null then ECEF should be assumed. The array element order is [x', y', z'].
       */
      vel?: Array<number>;
    }
  }
}

export interface MissileTrackListParams extends OffsetPageParams {
  /**
   * The receipt time of the data by the processing system, in ISO8601 UTC format
   * with microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;
}

export interface MissileTrackCountParams {
  /**
   * The receipt time of the data by the processing system, in ISO8601 UTC format
   * with microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface MissileTrackCreateBulkParams {
  body: Array<MissileTrackCreateBulkParams.Body>;
}

export namespace MissileTrackCreateBulkParams {
  /**
   * These services provide operations for querying of all available missile track
   * details and amplifying missile data. A missile track is a position and
   * optionally a heading/velocity of an object across all environments at a
   * particular timestamp. It also includes optional information regarding the
   * identity/type of missile, impact location, launch location and other amplifying
   * object data, if known.
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
     * The receipt time of the data by the processing system, in ISO8601 UTC format
     * with microsecond precision.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Subtype is a finer grain categorization of missile types. Examples include but
     * are not limited to SRBM, MRBM, IRBM, LRBM, ICBM, SLBM.
     *
     * &nbsp;SRBM - Short-Range Ballistic Missile
     *
     * &nbsp;MRBM - Medium-Range Ballistic Missile
     *
     * &nbsp;IRBM - Intermediate-Range Ballistic Missile
     *
     * &nbsp;LRBM - Long-Range Ballistic Missile
     *
     * &nbsp;ICBM - Intercontinental Ballistic Missile
     *
     * &nbsp;SLBM - Submarine-Launched Ballistic Missile.
     */
    acftSubType?: string;

    /**
     * A track may be designated as a non-alert track or an alert track.
     *
     * Examples include but are not limited to:
     *
     * &nbsp;Non-alert tracks – choose None (Blank).
     *
     * &nbsp;Alert tracks – enter the proper alert classification:
     *
     * &nbsp;HIT - High Interest Track
     *
     * &nbsp;TGT - Target
     *
     * &nbsp;SUS - Suspect Carrier
     *
     * &nbsp;NSP - Cleared Suspect.
     */
    alert?: string;

    /**
     * Angle of elevation/depression between observer and missile in degrees.
     */
    angElev?: number;

    /**
     * Three element array representing an Area of Uncertainty (AoU). The array element
     * definitions and units are type specific depending on the aouType specified in
     * this record:
     *
     * &nbsp;ELLIPSE:
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the ellipse
     *
     * &nbsp;&nbsp;a1 - semi-major axis in kilometers
     *
     * &nbsp;&nbsp;a2 - semi-minor axis in kilometers
     *
     * &nbsp;BEARING (BEARING BOX or MTST BEARING BOX):
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the bearing box
     *
     * &nbsp;&nbsp;a1 - length of bearing box in kilometers
     *
     * &nbsp;&nbsp;a2 - half-width of bearing box in kilometers
     *
     * &nbsp;OTHER (All other type values):
     *
     * &nbsp;&nbsp;brg - line of bearing in degrees true
     *
     * &nbsp;&nbsp;a1 - bearing error in degrees
     *
     * &nbsp;&nbsp;a2 - estimated range in kilometers.
     */
    aouRptData?: Array<number>;

    /**
     * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
     * type defines the elements of the aouEllp array and is required if aouEllp is not
     * null. See the aouEllp field definition for specific information.
     */
    aouRptType?: string;

    /**
     * Missile azimuth corridor data.
     */
    azCorr?: number;

    /**
     * Indicates whether or not the missile is currently in a state of boosting.
     */
    boosting?: boolean;

    /**
     * Track point burnout altitude relative to WGS-84 ellipsoid, in kilometers.
     */
    burnoutAlt?: number;

    /**
     * The call sign currently assigned to the track object.
     */
    callSign?: string;

    /**
     * The percentage of time that the estimated AoU will "cover" the true position of
     * the track.
     */
    containment?: number;

    /**
     * The drop-point indicator setting.
     */
    dropPtInd?: boolean;

    /**
     * Indicates whether or not a track has an emergency.
     */
    emgInd?: boolean;

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
    env?: 'AIR' | 'LAND' | 'SPACE' | 'SURFACE' | 'SUBSURFACE' | 'UNKNOWN';

    /**
     * Three element array representing an Area of Uncertainty (AoU). The array element
     * definitions and units are type specific depending on the aouType specified in
     * this record:
     *
     * &nbsp;ELLIPSE:
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the ellipse
     *
     * &nbsp;&nbsp;a1 - semi-major axis in kilometers
     *
     * &nbsp;&nbsp;a2 - semi-minor axis in kilometers
     *
     * &nbsp;BEARING (BEARING BOX or MTST BEARING BOX):
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the bearing box
     *
     * &nbsp;&nbsp;a1 - length of bearing box in kilometers
     *
     * &nbsp;&nbsp;a2 - half-width of bearing box in kilometers
     *
     * &nbsp;OTHER (All other type values):
     *
     * &nbsp;&nbsp;brg - line of bearing in degrees true
     *
     * &nbsp;&nbsp;a1 - bearing error in degrees
     *
     * &nbsp;&nbsp;a2 - estimated range in kilometers.
     */
    impactAouData?: Array<number>;

    /**
     * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
     * type defines the elements of the aouEllp array and is required if aouEllp is not
     * null. See the aouEllp field definition for specific information.
     */
    impactAouType?: string;

    /**
     * WGS-84 latitude of the missile object impact point, in degrees. -90 to 90
     * degrees (negative values south of equator).
     */
    impactLat?: number;

    /**
     * WGS-84 longitude of the missile object impact point, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian).
     */
    impactLon?: number;

    /**
     * Estimated time of impact timestamp in ISO8601 UTC format with microsecond
     * precision.
     */
    impactTime?: string;

    /**
     * Source code for source of information used to detect track.
     */
    infoSource?: string;

    /**
     * Three element array representing an Area of Uncertainty (AoU). The array element
     * definitions and units are type specific depending on the aouType specified in
     * this record:
     *
     * &nbsp;ELLIPSE:
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the ellipse
     *
     * &nbsp;&nbsp;a1 - semi-major axis in kilometers
     *
     * &nbsp;&nbsp;a2 - semi-minor axis in kilometers
     *
     * &nbsp;BEARING (BEARING BOX or MTST BEARING BOX):
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the bearing box
     *
     * &nbsp;&nbsp;a1 - length of bearing box in kilometers
     *
     * &nbsp;&nbsp;a2 - half-width of bearing box in kilometers
     *
     * &nbsp;OTHER (All other type values):
     *
     * &nbsp;&nbsp;brg - line of bearing in degrees true
     *
     * &nbsp;&nbsp;a1 - bearing error in degrees
     *
     * &nbsp;&nbsp;a2 - estimated range in kilometers.
     */
    launchAouData?: Array<number>;

    /**
     * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
     * type defines the elements of the aouEllp array and is required if aouEllp is not
     * null. See the aouEllp field definition for specific information.
     */
    launchAouType?: string;

    /**
     * WGS-84 latitude of the missile launch point, in degrees. -90 to 90 degrees
     * (negative values south of equator).
     */
    launchLat?: number;

    /**
     * WGS-84 longitude of the missile launch point, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    launchLon?: number;

    /**
     * Missile launch timestamp in ISO8601 UTC format with microsecond precision.
     */
    launchTime?: string;

    /**
     * Indicates whether or not the missile is considered lost.
     */
    lostTrkInd?: boolean;

    /**
     * The timestamp of the external message from which this request originated, if
     * applicable, in ISO8601 UTC format with millisecond precision.
     */
    msgCreateDate?: string;

    /**
     * The message subtype is a finer grain categorization of message types as many
     * messages can contain a variety of data content within the same structure.
     * Examples include but are not limited to Initial, Final, Launch, Update, etc.
     * Users should consult the appropriate documentation, based on the message type,
     * for the definitions of the subtypes that apply to that message.
     */
    msgSubType?: string;

    /**
     * The type of external message from which this request originated.
     */
    msgType?: string;

    /**
     * Missile status enumeration examples include but are not limited to:
     *
     * &nbsp;AT LAUNCH
     *
     * &nbsp;AT OBSERVATION
     *
     * &nbsp;FLYING
     *
     * &nbsp;IMPACTED
     *
     * &nbsp;LOST
     *
     * &nbsp;STALE
     *
     * &nbsp;DEBRIS.
     */
    mslStatus?: string;

    /**
     * Source of the missile-unique identifier (MUID).
     */
    muidSrc?: string;

    /**
     * Track ID for the source of the missile-unique identifier.
     */
    muidSrcTrk?: string;

    /**
     * Track name.
     */
    name?: string;

    /**
     * Space activity (examples: RECONNAISSANCE, ANTISPACE WARFARE, TELEVISION). The
     * activity in which the track object is engaged. Intended as, but not constrained
     * to, MIL-STD-6016 environment dependent activity designations. The activity can
     * be reported as either a combination of the code and environment (e.g. 65/AIR) or
     * as the descriptive enumeration (e.g. DIVERTING), which are equivalent.
     */
    objAct?: string;

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
    objIdent?: 'ASSUMED FRIEND' | 'FRIEND' | 'HOSTILE' | 'NEUTRAL' | 'PENDING' | 'SUSPECT' | 'UNKNOWN';

    /**
     * Space Platform field along with the Space Activity field further defines the
     * identity of a Space track (examples: SATELLITE, WEAPON, PATROL). The object
     * platform type. Intended as, but not constrained to, MIL-STD-6016 environment
     * dependent platform type designations. The platform type can be reported as
     * either a combination of the code and environment (e.g. 14/LAND) or as the
     * descriptive representations (e.g. COMBAT VEHICLE), which are equivalent.
     */
    objPlat?: string;

    /**
     * The type of object to which this record refers. The object type may be updated
     * in later records based on assessment of additional data.
     */
    objType?: string;

    /**
     * Confidence of the object type, 0-100.
     */
    objTypeConf?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Track ID of the parent track, within the originating system, from which the
     * track was developed.
     */
    parentTrackId?: string;

    /**
     * Azimuth corridor reference point latitude.
     */
    polarSingLocLat?: number;

    /**
     * Azimuth corridor reference point longitude.
     */
    polarSingLocLon?: number;

    /**
     * Last report type received from the sensor (for example, OBSBO = observation
     * burnout).
     */
    senMode?: string;

    /**
     * Space amplification indicates additional information on the space environment
     * being reported (examples: NUCLEAR WARHEAD, FUEL-AIR EXPLOSIVE WARHEAD, DEBRIS).
     */
    spaceAmp?: string;

    /**
     * Confidence level of the amplifying characteristics. Values range from 0 to 6.
     */
    spaceAmpConf?: number;

    /**
     * Specific type of point or track with an environment of space.
     */
    spaceSpecType?: string;

    /**
     * Track ID within the originating system.
     */
    trackId?: string;

    /**
     * Overall track confidence estimate (not standardized, but typically a value
     * between 0 and 1, with 0 indicating lowest confidence).
     */
    trkConf?: number;

    /**
     * Track Quality is reported as an integer from 0-15. Track Quality specifies the
     * reliability of the positional information of a reported track, with higher
     * values indicating higher track quality; i.e., lower errors in reported position.
     */
    trkQual?: number;

    /**
     * Array of MissileTrackVector objects. Missile track vectors are cartesian vectors
     * of position, velocity, and acceleration that, together with their time, 'epoch',
     * uniquely determine the trajectory of the missile. ECEF is the preferred
     * coordinate frame but in some cases data may be in another frame as specified by
     * 'referenceFrame', depending on the provider.
     */
    vectors?: Array<Body.Vector>;
  }

  export namespace Body {
    /**
     * Schema for Missile Track Vector data.
     */
    export interface Vector {
      /**
       * Vector timestamp in ISO8601 UTC format, with microsecond precision.
       */
      epoch: string;

      /**
       * Three element array, expressing the cartesian acceleration vector of the target
       * object, in kilometers/second^2, in the specified referenceFrame. If
       * referenceFrame is null then ECEF should be assumed. The array element order is
       * [x'', y'', z''].
       */
      accel?: Array<number>;

      /**
       * Confidence of the vector, 0-100.
       */
      confidence?: number;

      /**
       * Track object course, in degrees clockwise from true north.
       */
      course?: number;

      /**
       * Covariance matrix, in kilometer and second based units, in the specified
       * covReferenceFrame.
       *
       * If the covReferenceFrame is null it is assumed to be UVW. The array values
       * (1-45) represent the upper triangular half of the position-velocity-acceleration
       * covariance matrix.
       *
       * The covariance elements are position dependent within the array with values
       * ordered as follows:
       *
       * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x"&nbsp;&nbsp;&nbsp;&nbsp;y"&nbsp;&nbsp;&nbsp;&nbsp;z"
       *
       * x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9
       *
       * y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;&nbsp;11&nbsp;&nbsp;&nbsp;12&nbsp;&nbsp;&nbsp;13&nbsp;&nbsp;&nbsp;14&nbsp;&nbsp;&nbsp;15&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;&nbsp;17
       *
       * z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18&nbsp;&nbsp;&nbsp;19&nbsp;&nbsp;&nbsp;20&nbsp;&nbsp;&nbsp;21&nbsp;&nbsp;&nbsp;22&nbsp;&nbsp;&nbsp;23&nbsp;&nbsp;&nbsp;24
       *
       * x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25&nbsp;&nbsp;&nbsp;26&nbsp;&nbsp;&nbsp;27&nbsp;&nbsp;&nbsp;28&nbsp;&nbsp;&nbsp;29&nbsp;&nbsp;&nbsp;30
       *
       * y'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31&nbsp;&nbsp;&nbsp;32&nbsp;&nbsp;&nbsp;33&nbsp;&nbsp;&nbsp;34&nbsp;&nbsp;&nbsp;35
       *
       * z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36&nbsp;&nbsp;&nbsp;37&nbsp;&nbsp;&nbsp;38&nbsp;&nbsp;&nbsp;39
       *
       * x"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40&nbsp;&nbsp;&nbsp;41&nbsp;&nbsp;&nbsp;42
       *
       * y"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43&nbsp;&nbsp;&nbsp;44
       *
       * z"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45
       *
       * The cov array should contain only the upper right triangle values from top left
       * down to bottom right, in order.
       */
      cov?: Array<number>;

      /**
       * The reference frame of the covariance elements (ECEF, J2000, UVW, EFG/TDR, TEME,
       * GCRF). If the referenceFrame is null it is assumed to be UVW.
       */
      covReferenceFrame?: 'ECEF' | 'J2000' | 'UVW' | 'EFG/TDR' | 'TEME' | 'GCRF';

      /**
       * The flight azimuth associated with the current state vector (0-360 degrees).
       */
      flightAz?: number;

      /**
       * Unique identifier of the reporting sensor of the object.
       */
      idSensor?: string;

      /**
       * Object to which this vector applies.
       */
      object?: string;

      /**
       * Optional identifier provided by the source to indicate the reporting sensor of
       * the object. This may be an internal identifier and not necessarily a valid
       * sensor ID.
       */
      origSensorId?: string;

      /**
       * Three element array, expressing the cartesian position vector of the target
       * object, in kilometers, in the specified referenceFrame. If referenceFrame is
       * null then ECEF should be assumed. The array element order is [x, y, z].
       */
      pos?: Array<number>;

      /**
       * The quaternion describing the attitude of the spacecraft with respect to the
       * reference frame listed in the 'referenceFrame' field. The array element order
       * convention is the three vector components, followed by the scalar component.
       */
      quat?: Array<number>;

      /**
       * The reference frame of the cartesian vector (ECEF, J2000). If the referenceFrame
       * is null it is assumed to be ECEF.
       */
      referenceFrame?: string;

      /**
       * Track object speed, in kilometers/sec.
       */
      spd?: number;

      /**
       * Status of the vector (e.g. INITIAL, UPDATE).
       */
      status?: string;

      /**
       * Source of the time value.
       */
      timeSource?: string;

      /**
       * Type of vector represented (e.g. LOS, PREDICTED, STATE).
       */
      type?: string;

      /**
       * Object altitude at epoch, expressed in kilometers above WGS-84 ellipsoid.
       */
      vectorAlt?: number;

      /**
       * WGS-84 object latitude subpoint at epoch, represented as -90 to 90 degrees
       * (negative values south of equator).
       */
      vectorLat?: number;

      /**
       * WGS-84 object longitude subpoint at epoch, represented as -180 to 180 degrees
       * (negative values west of Prime Meridian).
       */
      vectorLon?: number;

      /**
       * Three element array, expressing the cartesian velocity vector of the target
       * object, in kilometers/second, in the specified referenceFrame. If referenceFrame
       * is null then ECEF should be assumed. The array element order is [x', y', z'].
       */
      vel?: Array<number>;
    }
  }
}

export interface MissileTrackTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The receipt time of the data by the processing system, in ISO8601 UTC format
   * with microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface MissileTrackUnvalidatedPublishParams {
  body: Array<MissileTrackUnvalidatedPublishParams.Body>;
}

export namespace MissileTrackUnvalidatedPublishParams {
  /**
   * These services provide operations for querying of all available missile track
   * details and amplifying missile data. A missile track is a position and
   * optionally a heading/velocity of an object across all environments at a
   * particular timestamp. It also includes optional information regarding the
   * identity/type of missile, impact location, launch location and other amplifying
   * object data, if known.
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
     * The receipt time of the data by the processing system, in ISO8601 UTC format
     * with microsecond precision.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Subtype is a finer grain categorization of missile types. Examples include but
     * are not limited to SRBM, MRBM, IRBM, LRBM, ICBM, SLBM.
     *
     * &nbsp;SRBM - Short-Range Ballistic Missile
     *
     * &nbsp;MRBM - Medium-Range Ballistic Missile
     *
     * &nbsp;IRBM - Intermediate-Range Ballistic Missile
     *
     * &nbsp;LRBM - Long-Range Ballistic Missile
     *
     * &nbsp;ICBM - Intercontinental Ballistic Missile
     *
     * &nbsp;SLBM - Submarine-Launched Ballistic Missile.
     */
    acftSubType?: string;

    /**
     * A track may be designated as a non-alert track or an alert track.
     *
     * Examples include but are not limited to:
     *
     * &nbsp;Non-alert tracks – choose None (Blank).
     *
     * &nbsp;Alert tracks – enter the proper alert classification:
     *
     * &nbsp;HIT - High Interest Track
     *
     * &nbsp;TGT - Target
     *
     * &nbsp;SUS - Suspect Carrier
     *
     * &nbsp;NSP - Cleared Suspect.
     */
    alert?: string;

    /**
     * Angle of elevation/depression between observer and missile in degrees.
     */
    angElev?: number;

    /**
     * Three element array representing an Area of Uncertainty (AoU). The array element
     * definitions and units are type specific depending on the aouType specified in
     * this record:
     *
     * &nbsp;ELLIPSE:
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the ellipse
     *
     * &nbsp;&nbsp;a1 - semi-major axis in kilometers
     *
     * &nbsp;&nbsp;a2 - semi-minor axis in kilometers
     *
     * &nbsp;BEARING (BEARING BOX or MTST BEARING BOX):
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the bearing box
     *
     * &nbsp;&nbsp;a1 - length of bearing box in kilometers
     *
     * &nbsp;&nbsp;a2 - half-width of bearing box in kilometers
     *
     * &nbsp;OTHER (All other type values):
     *
     * &nbsp;&nbsp;brg - line of bearing in degrees true
     *
     * &nbsp;&nbsp;a1 - bearing error in degrees
     *
     * &nbsp;&nbsp;a2 - estimated range in kilometers.
     */
    aouRptData?: Array<number>;

    /**
     * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
     * type defines the elements of the aouEllp array and is required if aouEllp is not
     * null. See the aouEllp field definition for specific information.
     */
    aouRptType?: string;

    /**
     * Missile azimuth corridor data.
     */
    azCorr?: number;

    /**
     * Indicates whether or not the missile is currently in a state of boosting.
     */
    boosting?: boolean;

    /**
     * Track point burnout altitude relative to WGS-84 ellipsoid, in kilometers.
     */
    burnoutAlt?: number;

    /**
     * The call sign currently assigned to the track object.
     */
    callSign?: string;

    /**
     * The percentage of time that the estimated AoU will "cover" the true position of
     * the track.
     */
    containment?: number;

    /**
     * The drop-point indicator setting.
     */
    dropPtInd?: boolean;

    /**
     * Indicates whether or not a track has an emergency.
     */
    emgInd?: boolean;

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
    env?: 'AIR' | 'LAND' | 'SPACE' | 'SURFACE' | 'SUBSURFACE' | 'UNKNOWN';

    /**
     * Three element array representing an Area of Uncertainty (AoU). The array element
     * definitions and units are type specific depending on the aouType specified in
     * this record:
     *
     * &nbsp;ELLIPSE:
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the ellipse
     *
     * &nbsp;&nbsp;a1 - semi-major axis in kilometers
     *
     * &nbsp;&nbsp;a2 - semi-minor axis in kilometers
     *
     * &nbsp;BEARING (BEARING BOX or MTST BEARING BOX):
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the bearing box
     *
     * &nbsp;&nbsp;a1 - length of bearing box in kilometers
     *
     * &nbsp;&nbsp;a2 - half-width of bearing box in kilometers
     *
     * &nbsp;OTHER (All other type values):
     *
     * &nbsp;&nbsp;brg - line of bearing in degrees true
     *
     * &nbsp;&nbsp;a1 - bearing error in degrees
     *
     * &nbsp;&nbsp;a2 - estimated range in kilometers.
     */
    impactAouData?: Array<number>;

    /**
     * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
     * type defines the elements of the aouEllp array and is required if aouEllp is not
     * null. See the aouEllp field definition for specific information.
     */
    impactAouType?: string;

    /**
     * WGS-84 latitude of the missile object impact point, in degrees. -90 to 90
     * degrees (negative values south of equator).
     */
    impactLat?: number;

    /**
     * WGS-84 longitude of the missile object impact point, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian).
     */
    impactLon?: number;

    /**
     * Estimated time of impact timestamp in ISO8601 UTC format with microsecond
     * precision.
     */
    impactTime?: string;

    /**
     * Source code for source of information used to detect track.
     */
    infoSource?: string;

    /**
     * Three element array representing an Area of Uncertainty (AoU). The array element
     * definitions and units are type specific depending on the aouType specified in
     * this record:
     *
     * &nbsp;ELLIPSE:
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the ellipse
     *
     * &nbsp;&nbsp;a1 - semi-major axis in kilometers
     *
     * &nbsp;&nbsp;a2 - semi-minor axis in kilometers
     *
     * &nbsp;BEARING (BEARING BOX or MTST BEARING BOX):
     *
     * &nbsp;&nbsp;brg - orientation in degrees of the bearing box
     *
     * &nbsp;&nbsp;a1 - length of bearing box in kilometers
     *
     * &nbsp;&nbsp;a2 - half-width of bearing box in kilometers
     *
     * &nbsp;OTHER (All other type values):
     *
     * &nbsp;&nbsp;brg - line of bearing in degrees true
     *
     * &nbsp;&nbsp;a1 - bearing error in degrees
     *
     * &nbsp;&nbsp;a2 - estimated range in kilometers.
     */
    launchAouData?: Array<number>;

    /**
     * The Area of Uncertainty (AoU) type (BEARING, ELLIPSE, OTHER) definition. This
     * type defines the elements of the aouEllp array and is required if aouEllp is not
     * null. See the aouEllp field definition for specific information.
     */
    launchAouType?: string;

    /**
     * WGS-84 latitude of the missile launch point, in degrees. -90 to 90 degrees
     * (negative values south of equator).
     */
    launchLat?: number;

    /**
     * WGS-84 longitude of the missile launch point, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    launchLon?: number;

    /**
     * Missile launch timestamp in ISO8601 UTC format with microsecond precision.
     */
    launchTime?: string;

    /**
     * Indicates whether or not the missile is considered lost.
     */
    lostTrkInd?: boolean;

    /**
     * The timestamp of the external message from which this request originated, if
     * applicable, in ISO8601 UTC format with millisecond precision.
     */
    msgCreateDate?: string;

    /**
     * The message subtype is a finer grain categorization of message types as many
     * messages can contain a variety of data content within the same structure.
     * Examples include but are not limited to Initial, Final, Launch, Update, etc.
     * Users should consult the appropriate documentation, based on the message type,
     * for the definitions of the subtypes that apply to that message.
     */
    msgSubType?: string;

    /**
     * The type of external message from which this request originated.
     */
    msgType?: string;

    /**
     * Missile status enumeration examples include but are not limited to:
     *
     * &nbsp;AT LAUNCH
     *
     * &nbsp;AT OBSERVATION
     *
     * &nbsp;FLYING
     *
     * &nbsp;IMPACTED
     *
     * &nbsp;LOST
     *
     * &nbsp;STALE
     *
     * &nbsp;DEBRIS.
     */
    mslStatus?: string;

    /**
     * Source of the missile-unique identifier (MUID).
     */
    muidSrc?: string;

    /**
     * Track ID for the source of the missile-unique identifier.
     */
    muidSrcTrk?: string;

    /**
     * Track name.
     */
    name?: string;

    /**
     * Space activity (examples: RECONNAISSANCE, ANTISPACE WARFARE, TELEVISION). The
     * activity in which the track object is engaged. Intended as, but not constrained
     * to, MIL-STD-6016 environment dependent activity designations. The activity can
     * be reported as either a combination of the code and environment (e.g. 65/AIR) or
     * as the descriptive enumeration (e.g. DIVERTING), which are equivalent.
     */
    objAct?: string;

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
    objIdent?: 'ASSUMED FRIEND' | 'FRIEND' | 'HOSTILE' | 'NEUTRAL' | 'PENDING' | 'SUSPECT' | 'UNKNOWN';

    /**
     * Space Platform field along with the Space Activity field further defines the
     * identity of a Space track (examples: SATELLITE, WEAPON, PATROL). The object
     * platform type. Intended as, but not constrained to, MIL-STD-6016 environment
     * dependent platform type designations. The platform type can be reported as
     * either a combination of the code and environment (e.g. 14/LAND) or as the
     * descriptive representations (e.g. COMBAT VEHICLE), which are equivalent.
     */
    objPlat?: string;

    /**
     * The type of object to which this record refers. The object type may be updated
     * in later records based on assessment of additional data.
     */
    objType?: string;

    /**
     * Confidence of the object type, 0-100.
     */
    objTypeConf?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Track ID of the parent track, within the originating system, from which the
     * track was developed.
     */
    parentTrackId?: string;

    /**
     * Azimuth corridor reference point latitude.
     */
    polarSingLocLat?: number;

    /**
     * Azimuth corridor reference point longitude.
     */
    polarSingLocLon?: number;

    /**
     * Last report type received from the sensor (for example, OBSBO = observation
     * burnout).
     */
    senMode?: string;

    /**
     * Space amplification indicates additional information on the space environment
     * being reported (examples: NUCLEAR WARHEAD, FUEL-AIR EXPLOSIVE WARHEAD, DEBRIS).
     */
    spaceAmp?: string;

    /**
     * Confidence level of the amplifying characteristics. Values range from 0 to 6.
     */
    spaceAmpConf?: number;

    /**
     * Specific type of point or track with an environment of space.
     */
    spaceSpecType?: string;

    /**
     * Track ID within the originating system.
     */
    trackId?: string;

    /**
     * Overall track confidence estimate (not standardized, but typically a value
     * between 0 and 1, with 0 indicating lowest confidence).
     */
    trkConf?: number;

    /**
     * Track Quality is reported as an integer from 0-15. Track Quality specifies the
     * reliability of the positional information of a reported track, with higher
     * values indicating higher track quality; i.e., lower errors in reported position.
     */
    trkQual?: number;

    /**
     * Array of MissileTrackVector objects. Missile track vectors are cartesian vectors
     * of position, velocity, and acceleration that, together with their time, 'epoch',
     * uniquely determine the trajectory of the missile. ECEF is the preferred
     * coordinate frame but in some cases data may be in another frame as specified by
     * 'referenceFrame', depending on the provider.
     */
    vectors?: Array<Body.Vector>;
  }

  export namespace Body {
    /**
     * Schema for Missile Track Vector data.
     */
    export interface Vector {
      /**
       * Vector timestamp in ISO8601 UTC format, with microsecond precision.
       */
      epoch: string;

      /**
       * Three element array, expressing the cartesian acceleration vector of the target
       * object, in kilometers/second^2, in the specified referenceFrame. If
       * referenceFrame is null then ECEF should be assumed. The array element order is
       * [x'', y'', z''].
       */
      accel?: Array<number>;

      /**
       * Confidence of the vector, 0-100.
       */
      confidence?: number;

      /**
       * Track object course, in degrees clockwise from true north.
       */
      course?: number;

      /**
       * Covariance matrix, in kilometer and second based units, in the specified
       * covReferenceFrame.
       *
       * If the covReferenceFrame is null it is assumed to be UVW. The array values
       * (1-45) represent the upper triangular half of the position-velocity-acceleration
       * covariance matrix.
       *
       * The covariance elements are position dependent within the array with values
       * ordered as follows:
       *
       * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;&nbsp;y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y'&nbsp;&nbsp;&nbsp;&nbsp;z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x"&nbsp;&nbsp;&nbsp;&nbsp;y"&nbsp;&nbsp;&nbsp;&nbsp;z"
       *
       * x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9
       *
       * y&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;&nbsp;11&nbsp;&nbsp;&nbsp;12&nbsp;&nbsp;&nbsp;13&nbsp;&nbsp;&nbsp;14&nbsp;&nbsp;&nbsp;15&nbsp;&nbsp;&nbsp;16&nbsp;&nbsp;&nbsp;17
       *
       * z&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;18&nbsp;&nbsp;&nbsp;19&nbsp;&nbsp;&nbsp;20&nbsp;&nbsp;&nbsp;21&nbsp;&nbsp;&nbsp;22&nbsp;&nbsp;&nbsp;23&nbsp;&nbsp;&nbsp;24
       *
       * x'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;25&nbsp;&nbsp;&nbsp;26&nbsp;&nbsp;&nbsp;27&nbsp;&nbsp;&nbsp;28&nbsp;&nbsp;&nbsp;29&nbsp;&nbsp;&nbsp;30
       *
       * y'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;31&nbsp;&nbsp;&nbsp;32&nbsp;&nbsp;&nbsp;33&nbsp;&nbsp;&nbsp;34&nbsp;&nbsp;&nbsp;35
       *
       * z'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;36&nbsp;&nbsp;&nbsp;37&nbsp;&nbsp;&nbsp;38&nbsp;&nbsp;&nbsp;39
       *
       * x"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40&nbsp;&nbsp;&nbsp;41&nbsp;&nbsp;&nbsp;42
       *
       * y"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43&nbsp;&nbsp;&nbsp;44
       *
       * z"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;45
       *
       * The cov array should contain only the upper right triangle values from top left
       * down to bottom right, in order.
       */
      cov?: Array<number>;

      /**
       * The reference frame of the covariance elements (ECEF, J2000, UVW, EFG/TDR, TEME,
       * GCRF). If the referenceFrame is null it is assumed to be UVW.
       */
      covReferenceFrame?: 'ECEF' | 'J2000' | 'UVW' | 'EFG/TDR' | 'TEME' | 'GCRF';

      /**
       * The flight azimuth associated with the current state vector (0-360 degrees).
       */
      flightAz?: number;

      /**
       * Unique identifier of the reporting sensor of the object.
       */
      idSensor?: string;

      /**
       * Object to which this vector applies.
       */
      object?: string;

      /**
       * Optional identifier provided by the source to indicate the reporting sensor of
       * the object. This may be an internal identifier and not necessarily a valid
       * sensor ID.
       */
      origSensorId?: string;

      /**
       * Three element array, expressing the cartesian position vector of the target
       * object, in kilometers, in the specified referenceFrame. If referenceFrame is
       * null then ECEF should be assumed. The array element order is [x, y, z].
       */
      pos?: Array<number>;

      /**
       * The quaternion describing the attitude of the spacecraft with respect to the
       * reference frame listed in the 'referenceFrame' field. The array element order
       * convention is the three vector components, followed by the scalar component.
       */
      quat?: Array<number>;

      /**
       * The reference frame of the cartesian vector (ECEF, J2000). If the referenceFrame
       * is null it is assumed to be ECEF.
       */
      referenceFrame?: string;

      /**
       * Track object speed, in kilometers/sec.
       */
      spd?: number;

      /**
       * Status of the vector (e.g. INITIAL, UPDATE).
       */
      status?: string;

      /**
       * Source of the time value.
       */
      timeSource?: string;

      /**
       * Type of vector represented (e.g. LOS, PREDICTED, STATE).
       */
      type?: string;

      /**
       * Object altitude at epoch, expressed in kilometers above WGS-84 ellipsoid.
       */
      vectorAlt?: number;

      /**
       * WGS-84 object latitude subpoint at epoch, represented as -90 to 90 degrees
       * (negative values south of equator).
       */
      vectorLat?: number;

      /**
       * WGS-84 object longitude subpoint at epoch, represented as -180 to 180 degrees
       * (negative values west of Prime Meridian).
       */
      vectorLon?: number;

      /**
       * Three element array, expressing the cartesian velocity vector of the target
       * object, in kilometers/second, in the specified referenceFrame. If referenceFrame
       * is null then ECEF should be assumed. The array element order is [x', y', z'].
       */
      vel?: Array<number>;
    }
  }
}

MissileTracks.History = History;

export declare namespace MissileTracks {
  export {
    type MissileTrackListResponse as MissileTrackListResponse,
    type MissileTrackCountResponse as MissileTrackCountResponse,
    type MissileTrackQueryhelpResponse as MissileTrackQueryhelpResponse,
    type MissileTrackTupleResponse as MissileTrackTupleResponse,
    type MissileTrackListResponsesOffsetPage as MissileTrackListResponsesOffsetPage,
    type MissileTrackListParams as MissileTrackListParams,
    type MissileTrackCountParams as MissileTrackCountParams,
    type MissileTrackCreateBulkParams as MissileTrackCreateBulkParams,
    type MissileTrackTupleParams as MissileTrackTupleParams,
    type MissileTrackUnvalidatedPublishParams as MissileTrackUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryQueryResponse as HistoryQueryResponse,
    type HistoryAodrParams as HistoryAodrParams,
    type HistoryCountParams as HistoryCountParams,
    type HistoryQueryParams as HistoryQueryParams,
  };
}
