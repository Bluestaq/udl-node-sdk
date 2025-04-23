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
} from './history';
import * as AttitudeDataAPI from './attitude-data/attitude-data';
import {
  AttitudeData,
  AttitudeDataAbridged,
  AttitudeDataCountParams,
  AttitudeDataCountResponse,
  AttitudeDataListParams,
  AttitudeDataListResponse,
} from './attitude-data/attitude-data';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Ephemeris extends APIResource {
  attitudeData: AttitudeDataAPI.AttitudeData = new AttitudeDataAPI.AttitudeData(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(query: EphemerisListParams, options?: RequestOptions): APIPromise<EphemerisListResponse> {
    return this._client.get('/udl/ephemeris', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: EphemerisCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/ephemeris/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to post/store Ephemeris data. This operation is intended to be
   * used for automated feeds into UDL. The payload is in Ephemeris format as
   * described by the "Flight Safety Handbook" published by 18th Space Command. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * **Example:**
   * /filedrop/ephem?classification=U&dataMode=TEST&source=Bluestaq&satNo=25544&ephemFormatType=NASA&hasMnvr=false&type=ROUTINE&category=EXTERNAL&origin=NASA&tags=tag1,tag2
   */
  fileUpload(params: EphemerisFileUploadParams, options?: RequestOptions): APIPromise<void> {
    const {
      category,
      classification,
      dataMode,
      ephemFormatType,
      hasMnvr,
      satNo,
      source,
      type,
      body,
      origin,
      tags,
    } = params;
    return this._client.post('/filedrop/ephem', {
      query: {
        category,
        classification,
        dataMode,
        ephemFormatType,
        hasMnvr,
        satNo,
        source,
        type,
        origin,
        tags,
      },
      body: body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'text/plain', Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/ephemeris/queryhelp', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
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
  tuple(query: EphemerisTupleParams, options?: RequestOptions): APIPromise<EphemerisTupleResponse> {
    return this._client.get('/udl/ephemeris/tuple', { query, ...options });
  }

  /**
   * Service operation to take a single EphemerisSet and many associated Ephemeris
   * records as a POST body for ingest into the database. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   *
   * The following rules apply to this operation:
   *
   * <h3>
   *   * Ephemeris Set numPoints value must correspond exactly to the number of Ephemeris states associated with that Ephemeris Set.  The numPoints value is checked against the actual posted number of states and mismatch will result in the post being rejected.
   *   * Ephemeris Set pointStartTime and pointEndTime must correspond to the earliest and latest state times, respectively, of the associated Ephemeris states.
   *   * Either satNo, idOnOrbit, or origObjectId must be provided.  The preferred option is to post with satNo for a cataloged object, and with (only) origObjectId for an unknown, uncatalogued, or internal/test object.  There are several cases for the logic associated with these fields:
   *     + If satNo is provided and correlates to a known UDL sat number then the idOnOrbit will be populated appropriately in addition to the satNo.
   *     + If satNo is provided and does not correlate to a known UDL sat number then the provided satNo value will be moved to the origObjectId field and satNo left null.
   *     + If origObjectId and a valid satNo or idOnOrbit are provided then both the satNo/idOnOrbit and origObjectId will maintain the provided values.
   *     + If only origObjectId is provided then origObjectId will be populated with the posted value.  In this case, no checks are made against existing UDL sat numbers.
   * </h3>
   */
  unvalidatedPublish(body: EphemerisUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/filedrop/udl-ephset', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * An ephemeris record is a position and velocity vector identifying the location
 * and trajectory of an on-orbit object at a specified time. Ephemeris points,
 * including covariance, are in kilometer and second based units in a user
 * specified reference frame, with ECI J2K being preferred. The EphemerisSet ID
 * (esId) links all points associated with an ephemeris set. The 'EphemerisSet'
 * record contains details of the underlying data and propagation models used in
 * the generation of the ephemeris. Ephemeris points must be retrieved by
 * specifying the parent EphemerisSet ID (esId).
 */
export interface EphemerisAbridged {
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
   * Time associated with the Ephemeris Point, in ISO8601 UTC format.
   */
  ts: string;

  /**
   * Cartesian X position of target, in km, in the specified EphemerisSet
   * referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  xpos: number;

  /**
   * Cartesian X velocity of target, in km/sec, in the specified EphemerisSet
   * referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  xvel: number;

  /**
   * Cartesian Y position of target, in km, in the specified EphemerisSet
   * referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  ypos: number;

  /**
   * Cartesian Y velocity of target, in km/sec, in the specified EphemerisSet
   * referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  yvel: number;

  /**
   * Cartesian Z position of target, in km, in the specified EphemerisSet
   * referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  zpos: number;

  /**
   * Cartesian Z velocity of target, in km/sec, in the specified EphemerisSet
   * referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  zvel: number;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Covariance matrix, in kilometer and second based units, in the specified
   * Ephemeris Set covReferenceFrame. If the covReferenceFrame from the EphemerisSet
   * table is null it is assumed to be J2000. The array values represent the lower
   * triangular half of the position-velocity covariance matrix. The size of the
   * covariance matrix is dynamic, depending on whether the covariance for position
   * only or position & velocity. The covariance elements are position dependent
   * within the array with values ordered as follows:
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
   * The array containing the covariance matrix elements will be of length 6 for
   * position only covariance, or length 21 for position-velocity covariance. The cov
   * array should contain only the lower left triangle values from top left down to
   * bottom right, in order.
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
   * Unique identifier of the parent EphemerisSet, auto-generated by the system. The
   * esId (ephemerisSet id) is used to identify all individual ephemeris states
   * associated with a parent ephemerisSet.
   */
  esId?: string;

  /**
   * Unique identifier of the on-orbit satellite object.
   */
  idOnOrbit?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by ephemeris source to indicate the target object
   * of this ephemeris. This may be an internal identifier and not necessarily map to
   * a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Cartesian X acceleration of target, in km/sec^2, in the specified EphemerisSet
   * referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  xaccel?: number;

  /**
   * Cartesian Y acceleration of target, in km/sec^2, in the specified EphemerisSet
   * referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  yaccel?: number;

  /**
   * Cartesian Z acceleration of target, in km/sec^2, in the specified EphemerisSet
   * referenceFrame. If referenceFrame is null then J2K should be assumed.
   */
  zaccel?: number;
}

export type EphemerisListResponse = Array<EphemerisAbridged>;

export type EphemerisCountResponse = string;

export type EphemerisTupleResponse = Array<Shared.EphemerisFull>;

export interface EphemerisListParams {
  /**
   * Unique identifier of the parent EphemerisSet, auto-generated by the system. The
   * esId (ephemerisSet id) is used to identify all individual ephemeris states
   * associated with a parent ephemerisSet. (uuid)
   */
  esId: string;
}

export interface EphemerisCountParams {
  /**
   * Unique identifier of the parent EphemerisSet, auto-generated by the system. The
   * esId (ephemerisSet id) is used to identify all individual ephemeris states
   * associated with a parent ephemerisSet. (uuid)
   */
  esId: string;
}

export interface EphemerisFileUploadParams {
  /**
   * Query param: Ephemeris category.
   */
  category: string;

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
   * Query param: Ephemeris format as documented in Flight Safety Handbook.
   */
  ephemFormatType: 'ModITC' | 'GOO' | 'NASA' | 'OEM' | 'OASYS';

  /**
   * Query param: Boolean indicating whether maneuver(s) are incorporated into the
   * ephemeris.
   */
  hasMnvr: boolean;

  /**
   * Query param: Satellite/Catalog number of the target on-orbit object.
   */
  satNo: number;

  /**
   * Query param: Source of the Ephemeris data.
   */
  source: string;

  /**
   * Query param: Ephemeris type.
   */
  type: string;

  /**
   * Body param:
   */
  body: string;

  /**
   * Query param: Optional origin of the Ephemeris.
   */
  origin?: string;

  /**
   * Query param: Optional array of provider/source specific tags for this data,
   * where each element is no longer than 32 characters, used for implementing data
   * owner conditional access controls to restrict access to the data. Should be left
   * null by data providers unless conditional access controls are coordinated with
   * the UDL team.
   */
  tags?: string;
}

export interface EphemerisTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Unique identifier of the parent EphemerisSet, auto-generated by the system. The
   * esId (ephemerisSet id) is used to identify all individual ephemeris states
   * associated with a parent ephemerisSet. (uuid)
   */
  esId: string;
}

export interface EphemerisUnvalidatedPublishParams {
  /**
   * The source category of the ephemeris (e.g. OWNER_OPERATOR, ANALYST, EXTERNAL).
   */
  category: string;

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
   * Number of points contained in the ephemeris.
   */
  numPoints: number;

  /**
   * End time/last time point of the ephemeris, in ISO 8601 UTC format.
   */
  pointEndTime: string;

  /**
   * Start time/first time point of the ephemeris, in ISO 8601 UTC format.
   */
  pointStartTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type/purpose of the ephemeris (e.g., CALIBRATION, LAUNCH, MNVR_PLAN,
   * ROUTINE, SCREENING).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * First derivative of ballistic coefficient (m^2/kg-s).
   */
  bDot?: number;

  /**
   * The Central Body of the ephemeris. Assumed to be Earth, unless otherwise
   * indicated.
   */
  centBody?: string;

  /**
   * Additional source provided comments associated with the ephemeris.
   */
  comments?: string;

  /**
   * The reference frame of the covariance matrix elements. If the covReferenceFrame
   * is null it is assumed to be J2000.
   */
  covReferenceFrame?: 'J2000' | 'UVW';

  /**
   * Notes/description of the provided ephemeris. A value of DSTOP signifies the
   * ephemeris were generated using the last observation available.
   */
  description?: string;

  /**
   * Optional source-provided and searchable metadata or descriptor of the data.
   */
  descriptor?: string;

  /**
   * Drag model used in ephemeris generation (e.g. JAC70, MSIS90, NONE, etc.).
   */
  dragModel?: string;

  /**
   * Model parameter value for energy dissipation rate (EDR), expressed in w/kg.
   */
  edr?: number;

  /**
   * The list of ephemeris states belonging to the EphemerisSet. Each ephemeris point
   * is associated with a parent Ephemeris Set via the EphemerisSet ID (esId).
   */
  ephemerisList?: Array<EphemerisUnvalidatedPublishParams.EphemerisList>;

  /**
   * Filename of the raw file used to provide the ephemeris data including filetype
   * extension, if applicable. This file may be retrieved using the 'getFile'
   * operation as specified in the 'EphemerisSet' OpenAPI docs.
   */
  filename?: string;

  /**
   * Geopotential model used in ephemeris generation (e.g. EGM-96, WGS-84, WGS-72,
   * JGM-2, GEM-T3), including mm degree zonals, nn degree/order tesserals (e.g.
   * EGM-96 24Z,24T).
   */
  geopotentialModel?: string;

  /**
   * Boolean indicating whether acceleration data is provided with the ephemeris.
   */
  hasAccel?: boolean;

  /**
   * Boolean indicating whether covariance data is provided with the ephemeris.
   */
  hasCov?: boolean;

  /**
   * Boolean indicating whether maneuver(s) are incorporated into the ephemeris.
   */
  hasMnvr?: boolean;

  /**
   * Array of the maneuver IDs of all maneuvers incorporated in the ephemeris.
   */
  idManeuvers?: Array<string>;

  /**
   * Unique identifier of the primary satellite on-orbit object.
   */
  idOnOrbit?: string;

  /**
   * ID of the State Vector used to generate the ephemeris.
   */
  idStateVector?: string;

  /**
   * Integrator used in ephemeris generation (e.g. RK7(8), RK8(9), COWELL, TWO-BODY).
   */
  integrator?: string;

  /**
   * The recommended interpolation method for the ephemeris data.
   */
  interpolation?: string;

  /**
   * The recommended interpolation degree for the ephemeris data.
   */
  interpolationDegree?: number;

  /**
   * Boolean indicating use of lunar/solar data in ephemeris generation.
   */
  lunarSolar?: boolean;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier provided by ephemeris source to indicate the target object
   * of this ephemeris. This may be an internal identifier and not necessarily map to
   * a valid satellite number.
   */
  origObjectId?: string;

  /**
   * The pedigree of the ephemeris or source data used for ephemeris generation (e.g.
   * DOPPLER, GPS, HYBRID, PROPAGATED, RANGING, SLR).
   */
  pedigree?: string;

  /**
   * The reference frame of the cartesian orbital states. If the referenceFrame is
   * null it is assumed to be J2000.
   */
  referenceFrame?: 'J2000' | 'EFG/TDR' | 'ECR/ECEF' | 'TEME' | 'ITRF' | 'GCRF';

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * Boolean indicating use of solid earth tide data in ephemeris generation.
   */
  solidEarthTides?: boolean;

  /**
   * Ephemeris step size, in seconds.
   */
  stepSize?: number;

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

  /**
   * Optional end time of the usable time span for the ephemeris data, in ISO 8601
   * UTC format with microsecond precision.
   */
  usableEndTime?: string;

  /**
   * Optional start time of the usable time span for the ephemeris data, in ISO 8601
   * UTC format with microsecond precision.
   */
  usableStartTime?: string;
}

export namespace EphemerisUnvalidatedPublishParams {
  /**
   * An ephemeris record is a position and velocity vector identifying the location
   * and trajectory of an on-orbit object at a specified time. Ephemeris points,
   * including covariance, are in kilometer and second based units in a user
   * specified reference frame, with ECI J2K being preferred. The EphemerisSet ID
   * (esId) links all points associated with an ephemeris set. The 'EphemerisSet'
   * record contains details of the underlying data and propagation models used in
   * the generation of the ephemeris. Ephemeris points must be retrieved by
   * specifying the parent EphemerisSet ID (esId).
   */
  export interface EphemerisList {
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
     * Time associated with the Ephemeris Point, in ISO8601 UTC format.
     */
    ts: string;

    /**
     * Cartesian X position of target, in km, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xpos: number;

    /**
     * Cartesian X velocity of target, in km/sec, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xvel: number;

    /**
     * Cartesian Y position of target, in km, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    ypos: number;

    /**
     * Cartesian Y velocity of target, in km/sec, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    yvel: number;

    /**
     * Cartesian Z position of target, in km, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zpos: number;

    /**
     * Cartesian Z velocity of target, in km/sec, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zvel: number;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Covariance matrix, in kilometer and second based units, in the specified
     * Ephemeris Set covReferenceFrame. If the covReferenceFrame from the EphemerisSet
     * table is null it is assumed to be J2000. The array values represent the lower
     * triangular half of the position-velocity covariance matrix. The size of the
     * covariance matrix is dynamic, depending on whether the covariance for position
     * only or position & velocity. The covariance elements are position dependent
     * within the array with values ordered as follows:
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
     * The array containing the covariance matrix elements will be of length 6 for
     * position only covariance, or length 21 for position-velocity covariance. The cov
     * array should contain only the lower left triangle values from top left down to
     * bottom right, in order.
     */
    cov?: Array<number>;

    /**
     * Unique identifier of the parent EphemerisSet, auto-generated by the system. The
     * esId (ephemerisSet id) is used to identify all individual ephemeris states
     * associated with a parent ephemerisSet.
     */
    esId?: string;

    /**
     * Unique identifier of the on-orbit satellite object.
     */
    idOnOrbit?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier provided by ephemeris source to indicate the target object
     * of this ephemeris. This may be an internal identifier and not necessarily map to
     * a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Cartesian X acceleration of target, in km/sec^2, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    xaccel?: number;

    /**
     * Cartesian Y acceleration of target, in km/sec^2, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    yaccel?: number;

    /**
     * Cartesian Z acceleration of target, in km/sec^2, in the specified EphemerisSet
     * referenceFrame. If referenceFrame is null then J2K should be assumed.
     */
    zaccel?: number;
  }
}

Ephemeris.AttitudeData = AttitudeData;
Ephemeris.History = History;

export declare namespace Ephemeris {
  export {
    type EphemerisAbridged as EphemerisAbridged,
    type EphemerisListResponse as EphemerisListResponse,
    type EphemerisCountResponse as EphemerisCountResponse,
    type EphemerisTupleResponse as EphemerisTupleResponse,
    type EphemerisListParams as EphemerisListParams,
    type EphemerisCountParams as EphemerisCountParams,
    type EphemerisFileUploadParams as EphemerisFileUploadParams,
    type EphemerisTupleParams as EphemerisTupleParams,
    type EphemerisUnvalidatedPublishParams as EphemerisUnvalidatedPublishParams,
  };

  export {
    AttitudeData as AttitudeData,
    type AttitudeDataAbridged as AttitudeDataAbridged,
    type AttitudeDataListResponse as AttitudeDataListResponse,
    type AttitudeDataCountResponse as AttitudeDataCountResponse,
    type AttitudeDataListParams as AttitudeDataListParams,
    type AttitudeDataCountParams as AttitudeDataCountParams,
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
