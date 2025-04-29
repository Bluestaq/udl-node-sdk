// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Personnelrecovery extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single Personnel Recovery object as a POST body and
   * ingest into the database. Requires a specific role, please contact the UDL team
   * to gain access.
   */
  create(body: PersonnelrecoveryCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/personnelrecovery', {
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
   */
  list(
    query: PersonnelrecoveryListParams,
    options?: RequestOptions,
  ): APIPromise<PersonnelrecoveryListResponse> {
    return this._client.get('/udl/personnelrecovery', { query, ...options });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: PersonnelrecoveryCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/personnelrecovery/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * Personnel Recovery records as a POST body and ingest into the database. Requires
   * specific roles, please contact the UDL team to gain access. This operation is
   * not intended to be used for automated feeds into UDL...data providers should
   * contact the UDL team for instructions on setting up a permanent feed through an
   * alternate mechanism.
   */
  createBulk(params: PersonnelrecoveryCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/personnelrecovery/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to take a list of Personnel Recovery records as a POST body
   * and ingest into the database. Requires a specific role, please contact the UDL
   * team to gain access. This operation is intended to be used for automated feeds
   * into UDL.
   */
  fileCreate(params: PersonnelrecoveryFileCreateParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-personnelrecovery', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single PersonnelRecovery by its unique ID passed as a
   * path parameter.
   */
  get(
    id: string,
    query: PersonnelrecoveryGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PersonnelRecoveryFullL> {
    return this._client.get(path`/udl/personnelrecovery/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/personnelrecovery/queryhelp', {
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
  tuple(
    query: PersonnelrecoveryTupleParams,
    options?: RequestOptions,
  ): APIPromise<PersonnelrecoveryTupleResponse> {
    return this._client.get('/udl/personnelrecovery/tuple', { query, ...options });
  }
}

/**
 * Provides information concerning search and rescue operations and other
 * situations involving personnel recovery.
 */
export interface PersonnelRecoveryFullL {
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
   * Time stamp of the original personnel recovery message, in ISO 8601 UTC format.
   */
  msgTime: string;

  /**
   * WGS-84 latitude of the pickup location, in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  pickupLat: number;

  /**
   * WGS-84 longitude of the pickup location, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  pickupLon: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Specifies the type of incident resulting in a recovery or evacuation mission.
   * Intended as, but not constrained to, MIL-STD-6016 J6.1 Emergency Type (e.g. NO
   * STATEMENT, DOWN AIRCRAFT, MAN IN WATER, DITCHING, BAILOUT, DISTRESSED VEHICLE,
   * GROUND INCIDENT, MEDICAL, ISOLATED PERSONS, etc.).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Mechanism used to verify the survivors identity.
   */
  authMethod?: string;

  /**
   * The confirmation status of the isolated personnel identity. Intended as, but not
   * constrained to, MIL-STD-6016 J6.1 Authentication Status, Isolated Personnel (NO
   * STATEMENT, AUTHENTICATED, NOT AUTHENTICATED, AUTHENTICATED UNDER DURESS, NOT
   * APPLICABLE):
   *
   * AUTHENTICATED: Confirmed Friend
   *
   * NOT AUTHENTICATED: Unconfirmed status
   *
   * AUTHENTICATED UNDER DURESS: Authentication comprised by hostiles.
   *
   * NOT APPLICABLE: Authentication not required.
   */
  authStatus?: string;

  /**
   * Flag indicating whether a radio identifier is reported.
   */
  beaconInd?: boolean;

  /**
   * The call sign of the personnel to be recovered.
   */
  callSign?: string;

  /**
   * Survivor communications equipment. Intended as, but not constrained to,
   * MIL-STD-6016 J6.1 Communications Equipment, Isolated Personnel (NO STATEMENT,
   * SURVIVAL RADIO, RADIO BEACON, EPLRS, SIGNAL MIRROR, SMOKE FLARE, IR SIGNALLING
   * DEVICE, SIGNALLING PANEL, FRIENDLY FORCE TRACKER, GPS BEACON, LL PHONE, TACTICAL
   * RADIO LOS, TACTICAL RADIO BLOS).
   */
  commEq1?: string;

  /**
   * Survivor communications equipment. Intended as, but not constrained to,
   * MIL-STD-6016 J6.1 Communications Equipment, Isolated Personnel (NO STATEMENT,
   * SURVIVAL RADIO, RADIO BEACON, EPLRS, SIGNAL MIRROR, SMOKE FLARE, IR SIGNALLING
   * DEVICE, SIGNALLING PANEL, FRIENDLY FORCE TRACKER, GPS BEACON, LL PHONE, TACTICAL
   * RADIO LOS, TACTICAL RADIO BLOS).
   */
  commEq2?: string;

  /**
   * Survivor communications equipment. Intended as, but not constrained to,
   * MIL-STD-6016 J6.1 Communications Equipment, Isolated Personnel (NO STATEMENT,
   * SURVIVAL RADIO, RADIO BEACON, EPLRS, SIGNAL MIRROR, SMOKE FLARE, IR SIGNALLING
   * DEVICE, SIGNALLING PANEL, FRIENDLY FORCE TRACKER, GPS BEACON, LL PHONE, TACTICAL
   * RADIO LOS, TACTICAL RADIO BLOS).
   */
  commEq3?: string;

  /**
   * Time the row was created in the database, auto-populated by the system.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  executionInfo?: PersonnelRecoveryFullL.ExecutionInfo;

  /**
   * The survivor service identity (UNKNOWN MILITARY, UNKNOWN CIVILIAN, FRIEND
   * MILITARY, FRIEND CIVIILIAN, NEUTRAL MILITARY, NEUTRAL CIVILIAN, HOSTILE
   * MILITARY, HOSTILE CIVILIAN).
   */
  identity?: string;

  /**
   * Unique identifier of a weather report associated with this recovery.
   */
  idWeatherReport?: string;

  /**
   * The military classification of the personnel to be recovered. Intended as, but
   * not constrained to, MIL-STD-6016 J6.1 Isolated Personnel Classification (NO
   * STATEMENT, MILITARY, GOVERNMENT CIVILIAN, GOVERNMENT CONTRACTOR, CIVILIAN,
   * MULTIPLE CLASSIFICATIONS).
   */
  milClass?: string;

  /**
   * The country of origin or political entity of an isolated person subject to
   * rescue or evacuation. If natAlliance is set to 126, then natAlliance1 must be
   * non 0. If natAlliance is any number other than 126, then natAlliance1 will be
   * set to 0 regardless. Defined in MIL-STD-6016 J6.1 Nationality/Alliance isolated
   * person(s).
   */
  natAlliance?: number;

  /**
   * Extended country of origin or political entity of an isolated person subject to
   * rescue or evacuation. Specify an entry here only if natAlliance is 126. Defined
   * in MIL-STD-6016 J6.1 Nationality/Alliance isolated person(s), 1.
   */
  natAlliance1?: number;

  /**
   * Number of ambulatory personnel requiring recovery.
   */
  numAmbulatory?: number;

  /**
   * Number of injured, but ambulatory, personnel requiring recovery.
   */
  numAmbulatoryInjured?: number;

  /**
   * Number of littered personnel requiring recovery.
   */
  numNonAmbulatory?: number;

  /**
   * The count of persons requiring recovery.
   */
  numPersons?: number;

  objectiveAreaInfo?: PersonnelRecoveryFullL.ObjectiveAreaInfo;

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
   * Altitude relative to WGS-84 ellipsoid, in meters. Positive values indicate a
   * point height above ellipsoid, and negative values indicate a point eight below
   * ellipsoid.
   */
  pickupAlt?: number;

  /**
   * UUID identifying the Personnel Recovery mission, which should remain the same on
   * subsequent posts related to the same recovery mission.
   */
  recovId?: string;

  /**
   * Receive voice frequency in 5Hz increments. This field will auto populate with
   * the txFreq value if the post element is null.
   */
  rxFreq?: number;

  /**
   * Preloaded message conveying the situation confronting the isolated person(s).
   * Intended as, but not constrained to, MIL-STD-6016 J6.1 Survivor Radio Messages
   * (e.g. INJURED CANT MOVE NO KNOWN HOSTILES, INJURED CANT MOVE HOSTILES NEARBY,
   * UNINJURED CANT MOVE HOSTILES NEARBY, UNINJURED NO KNOWN HOSTILES, INJURED
   * LIMITED MOBILITY).
   */
  survivorMessages?: string;

  /**
   * Survivor radio equipment. Intended as, but not constrained to, MIL-STD-6016 J6.1
   * Survivor Radio Type (NO STATEMENT, PRQ7SEL, PRC90, PRC112, PRC112B B1, PRC112C,
   * PRC112D, PRC148 MBITR, PRC148 JEM, PRC149, PRC152, ACRPLB, OTHER).
   */
  survivorRadio?: string;

  /**
   * Flag indicating the cancellation of this recovery.
   */
  termInd?: boolean;

  /**
   * Additional specific messages received from survivor.
   */
  textMsg?: string;

  /**
   * Transmit voice frequency in 5Hz increments.
   */
  txFreq?: number;
}

export namespace PersonnelRecoveryFullL {
  export interface ExecutionInfo {
    /**
     * The heading, in degrees, of leaving the recovery zone.
     */
    egress?: number;

    /**
     * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
     * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
     * degrees, and altitude, in meters, of the egress location. This array must
     * contain a minimum of 2 elements (latitude and longitude), and may contain an
     * optional 3rd element (altitude).
     */
    egressPoint?: Array<number>;

    escortVehicle?: ExecutionInfo.EscortVehicle;

    /**
     * The heading, in degrees clockwise from North, of entering the recovery zone.
     */
    ingress?: number;

    /**
     * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
     * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
     * degrees, and altitude, in meters, of the initial location. This array must
     * contain a minimum of 2 elements (latitude and longitude), and may contain an
     * optional 3rd element (altitude).
     */
    initialPoint?: Array<number>;

    /**
     * Description of the objective strategy plan.
     */
    objStrategy?: string;

    recoveryVehicle?: ExecutionInfo.RecoveryVehicle;
  }

  export namespace ExecutionInfo {
    export interface EscortVehicle {
      /**
       * The call sign of the recovery vehicle.
       */
      callSign?: string;

      /**
       * Primary contact frequency of the recovery vehicle.
       */
      primaryFreq?: number;

      /**
       * The number of objects or units moving as a group and represented as a single
       * entity in this recovery vehicle message. If null, the strength is assumed to
       * represent a single object. Note that if this recovery derives from a J-series
       * message then special definitions apply for the following values: 13 indicates an
       * estimated 2-7 units, 14 indicates an estimated more than 7 units, and 15
       * indicates an estimated more than 12 units.
       */
      strength?: number;

      /**
       * The particular type of recovery vehicle to be used.
       */
      type?: string;
    }

    export interface RecoveryVehicle {
      /**
       * The call sign of the recovery vehicle.
       */
      callSign?: string;

      /**
       * Primary contact frequency of the recovery vehicle.
       */
      primaryFreq?: number;

      /**
       * The number of objects or units moving as a group and represented as a single
       * entity in this recovery vehicle message. If null, the strength is assumed to
       * represent a single object. Note that if this recovery derives from a J-series
       * message then special definitions apply for the following values: 13 indicates an
       * estimated 2-7 units, 14 indicates an estimated more than 7 units, and 15
       * indicates an estimated more than 12 units.
       */
      strength?: number;

      /**
       * The particular type of recovery vehicle to be used.
       */
      type?: string;
    }
  }

  export interface ObjectiveAreaInfo {
    /**
     * Information detailing knowledge of enemies in the area.
     */
    enemyData?: Array<ObjectiveAreaInfo.EnemyData>;

    /**
     * The call sign of the on-scene commander.
     */
    oscCallSign?: string;

    /**
     * The radio frequency of the on-scene commander.
     */
    oscFreq?: number;

    /**
     * Description of the pickup zone location.
     */
    pzDesc?: string;

    /**
     * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
     * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
     * degrees, and altitude, in meters, of the pz location. This array must contain a
     * minimum of 2 elements (latitude and longitude), and may contain an optional 3rd
     * element (altitude).
     */
    pzLocation?: Array<number>;
  }

  export namespace ObjectiveAreaInfo {
    export interface EnemyData {
      /**
       * Directions to known enemies in the operation area (NORTH, NORTHEAST, EAST,
       * SOUTHEAST, SOUTH, SOUTHWEST, WEST, NORTHWEST, SURROUNDED).
       */
      dirToEnemy?: string;

      /**
       * Comments provided by friendlies about the evac zone.
       */
      friendliesRemarks?: string;

      /**
       * Hot Landing Zone remarks.
       */
      hlzRemarks?: string;

      /**
       * The type of hostile fire received (SMALL ARMS, MORTAR, ARTILLERY, ROCKETS).
       */
      hostileFireType?: string;
    }
  }
}

export type PersonnelrecoveryListResponse =
  Array<PersonnelrecoveryListResponse.PersonnelrecoveryListResponseItem>;

export namespace PersonnelrecoveryListResponse {
  /**
   * Provides information concerning search and rescue operations and other
   * situations involving personnel recovery.
   */
  export interface PersonnelrecoveryListResponseItem {
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
     * Time stamp of the original personnel recovery message, in ISO 8601 UTC format.
     */
    msgTime: string;

    /**
     * WGS-84 latitude of the pickup location, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    pickupLat: number;

    /**
     * WGS-84 longitude of the pickup location, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    pickupLon: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Specifies the type of incident resulting in a recovery or evacuation mission.
     * Intended as, but not constrained to, MIL-STD-6016 J6.1 Emergency Type (e.g. NO
     * STATEMENT, DOWN AIRCRAFT, MAN IN WATER, DITCHING, BAILOUT, DISTRESSED VEHICLE,
     * GROUND INCIDENT, MEDICAL, ISOLATED PERSONS, etc.).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Mechanism used to verify the survivors identity.
     */
    authMethod?: string;

    /**
     * The confirmation status of the isolated personnel identity. Intended as, but not
     * constrained to, MIL-STD-6016 J6.1 Authentication Status, Isolated Personnel (NO
     * STATEMENT, AUTHENTICATED, NOT AUTHENTICATED, AUTHENTICATED UNDER DURESS, NOT
     * APPLICABLE):
     *
     * AUTHENTICATED: Confirmed Friend
     *
     * NOT AUTHENTICATED: Unconfirmed status
     *
     * AUTHENTICATED UNDER DURESS: Authentication comprised by hostiles.
     *
     * NOT APPLICABLE: Authentication not required.
     */
    authStatus?: string;

    /**
     * Flag indicating whether a radio identifier is reported.
     */
    beaconInd?: boolean;

    /**
     * The call sign of the personnel to be recovered.
     */
    callSign?: string;

    /**
     * Survivor communications equipment. Intended as, but not constrained to,
     * MIL-STD-6016 J6.1 Communications Equipment, Isolated Personnel (NO STATEMENT,
     * SURVIVAL RADIO, RADIO BEACON, EPLRS, SIGNAL MIRROR, SMOKE FLARE, IR SIGNALLING
     * DEVICE, SIGNALLING PANEL, FRIENDLY FORCE TRACKER, GPS BEACON, LL PHONE, TACTICAL
     * RADIO LOS, TACTICAL RADIO BLOS).
     */
    commEq1?: string;

    /**
     * Survivor communications equipment. Intended as, but not constrained to,
     * MIL-STD-6016 J6.1 Communications Equipment, Isolated Personnel (NO STATEMENT,
     * SURVIVAL RADIO, RADIO BEACON, EPLRS, SIGNAL MIRROR, SMOKE FLARE, IR SIGNALLING
     * DEVICE, SIGNALLING PANEL, FRIENDLY FORCE TRACKER, GPS BEACON, LL PHONE, TACTICAL
     * RADIO LOS, TACTICAL RADIO BLOS).
     */
    commEq2?: string;

    /**
     * Survivor communications equipment. Intended as, but not constrained to,
     * MIL-STD-6016 J6.1 Communications Equipment, Isolated Personnel (NO STATEMENT,
     * SURVIVAL RADIO, RADIO BEACON, EPLRS, SIGNAL MIRROR, SMOKE FLARE, IR SIGNALLING
     * DEVICE, SIGNALLING PANEL, FRIENDLY FORCE TRACKER, GPS BEACON, LL PHONE, TACTICAL
     * RADIO LOS, TACTICAL RADIO BLOS).
     */
    commEq3?: string;

    /**
     * Time the row was created in the database, auto-populated by the system.
     */
    createdAt?: string;

    /**
     * Application user who created the row in the database, auto-populated by the
     * system.
     */
    createdBy?: string;

    executionInfo?: PersonnelrecoveryListResponseItem.ExecutionInfo;

    /**
     * The survivor service identity (UNKNOWN MILITARY, UNKNOWN CIVILIAN, FRIEND
     * MILITARY, FRIEND CIVIILIAN, NEUTRAL MILITARY, NEUTRAL CIVILIAN, HOSTILE
     * MILITARY, HOSTILE CIVILIAN).
     */
    identity?: string;

    /**
     * Unique identifier of a weather report associated with this recovery.
     */
    idWeatherReport?: string;

    /**
     * The military classification of the personnel to be recovered. Intended as, but
     * not constrained to, MIL-STD-6016 J6.1 Isolated Personnel Classification (NO
     * STATEMENT, MILITARY, GOVERNMENT CIVILIAN, GOVERNMENT CONTRACTOR, CIVILIAN,
     * MULTIPLE CLASSIFICATIONS).
     */
    milClass?: string;

    /**
     * The country of origin or political entity of an isolated person subject to
     * rescue or evacuation. If natAlliance is set to 126, then natAlliance1 must be
     * non 0. If natAlliance is any number other than 126, then natAlliance1 will be
     * set to 0 regardless. Defined in MIL-STD-6016 J6.1 Nationality/Alliance isolated
     * person(s).
     */
    natAlliance?: number;

    /**
     * Extended country of origin or political entity of an isolated person subject to
     * rescue or evacuation. Specify an entry here only if natAlliance is 126. Defined
     * in MIL-STD-6016 J6.1 Nationality/Alliance isolated person(s), 1.
     */
    natAlliance1?: number;

    /**
     * Number of ambulatory personnel requiring recovery.
     */
    numAmbulatory?: number;

    /**
     * Number of injured, but ambulatory, personnel requiring recovery.
     */
    numAmbulatoryInjured?: number;

    /**
     * Number of littered personnel requiring recovery.
     */
    numNonAmbulatory?: number;

    /**
     * The count of persons requiring recovery.
     */
    numPersons?: number;

    objectiveAreaInfo?: PersonnelrecoveryListResponseItem.ObjectiveAreaInfo;

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
     * Altitude relative to WGS-84 ellipsoid, in meters. Positive values indicate a
     * point height above ellipsoid, and negative values indicate a point eight below
     * ellipsoid.
     */
    pickupAlt?: number;

    /**
     * UUID identifying the Personnel Recovery mission, which should remain the same on
     * subsequent posts related to the same recovery mission.
     */
    recovId?: string;

    /**
     * Receive voice frequency in 5Hz increments. This field will auto populate with
     * the txFreq value if the post element is null.
     */
    rxFreq?: number;

    /**
     * Preloaded message conveying the situation confronting the isolated person(s).
     * Intended as, but not constrained to, MIL-STD-6016 J6.1 Survivor Radio Messages
     * (e.g. INJURED CANT MOVE NO KNOWN HOSTILES, INJURED CANT MOVE HOSTILES NEARBY,
     * UNINJURED CANT MOVE HOSTILES NEARBY, UNINJURED NO KNOWN HOSTILES, INJURED
     * LIMITED MOBILITY).
     */
    survivorMessages?: string;

    /**
     * Survivor radio equipment. Intended as, but not constrained to, MIL-STD-6016 J6.1
     * Survivor Radio Type (NO STATEMENT, PRQ7SEL, PRC90, PRC112, PRC112B B1, PRC112C,
     * PRC112D, PRC148 MBITR, PRC148 JEM, PRC149, PRC152, ACRPLB, OTHER).
     */
    survivorRadio?: string;

    /**
     * Flag indicating the cancellation of this recovery.
     */
    termInd?: boolean;

    /**
     * Additional specific messages received from survivor.
     */
    textMsg?: string;

    /**
     * Transmit voice frequency in 5Hz increments.
     */
    txFreq?: number;
  }

  export namespace PersonnelrecoveryListResponseItem {
    export interface ExecutionInfo {
      /**
       * The heading, in degrees, of leaving the recovery zone.
       */
      egress?: number;

      /**
       * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
       * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
       * degrees, and altitude, in meters, of the egress location. This array must
       * contain a minimum of 2 elements (latitude and longitude), and may contain an
       * optional 3rd element (altitude).
       */
      egressPoint?: Array<number>;

      escortVehicle?: ExecutionInfo.EscortVehicle;

      /**
       * The heading, in degrees clockwise from North, of entering the recovery zone.
       */
      ingress?: number;

      /**
       * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
       * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
       * degrees, and altitude, in meters, of the initial location. This array must
       * contain a minimum of 2 elements (latitude and longitude), and may contain an
       * optional 3rd element (altitude).
       */
      initialPoint?: Array<number>;

      /**
       * Description of the objective strategy plan.
       */
      objStrategy?: string;

      recoveryVehicle?: ExecutionInfo.RecoveryVehicle;
    }

    export namespace ExecutionInfo {
      export interface EscortVehicle {
        /**
         * The call sign of the recovery vehicle.
         */
        callSign?: string;

        /**
         * Primary contact frequency of the recovery vehicle.
         */
        primaryFreq?: number;

        /**
         * The number of objects or units moving as a group and represented as a single
         * entity in this recovery vehicle message. If null, the strength is assumed to
         * represent a single object. Note that if this recovery derives from a J-series
         * message then special definitions apply for the following values: 13 indicates an
         * estimated 2-7 units, 14 indicates an estimated more than 7 units, and 15
         * indicates an estimated more than 12 units.
         */
        strength?: number;

        /**
         * The particular type of recovery vehicle to be used.
         */
        type?: string;
      }

      export interface RecoveryVehicle {
        /**
         * The call sign of the recovery vehicle.
         */
        callSign?: string;

        /**
         * Primary contact frequency of the recovery vehicle.
         */
        primaryFreq?: number;

        /**
         * The number of objects or units moving as a group and represented as a single
         * entity in this recovery vehicle message. If null, the strength is assumed to
         * represent a single object. Note that if this recovery derives from a J-series
         * message then special definitions apply for the following values: 13 indicates an
         * estimated 2-7 units, 14 indicates an estimated more than 7 units, and 15
         * indicates an estimated more than 12 units.
         */
        strength?: number;

        /**
         * The particular type of recovery vehicle to be used.
         */
        type?: string;
      }
    }

    export interface ObjectiveAreaInfo {
      /**
       * Information detailing knowledge of enemies in the area.
       */
      enemyData?: Array<ObjectiveAreaInfo.EnemyData>;

      /**
       * The call sign of the on-scene commander.
       */
      oscCallSign?: string;

      /**
       * The radio frequency of the on-scene commander.
       */
      oscFreq?: number;

      /**
       * Description of the pickup zone location.
       */
      pzDesc?: string;

      /**
       * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
       * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
       * degrees, and altitude, in meters, of the pz location. This array must contain a
       * minimum of 2 elements (latitude and longitude), and may contain an optional 3rd
       * element (altitude).
       */
      pzLocation?: Array<number>;
    }

    export namespace ObjectiveAreaInfo {
      export interface EnemyData {
        /**
         * Directions to known enemies in the operation area (NORTH, NORTHEAST, EAST,
         * SOUTHEAST, SOUTH, SOUTHWEST, WEST, NORTHWEST, SURROUNDED).
         */
        dirToEnemy?: string;

        /**
         * Comments provided by friendlies about the evac zone.
         */
        friendliesRemarks?: string;

        /**
         * Hot Landing Zone remarks.
         */
        hlzRemarks?: string;

        /**
         * The type of hostile fire received (SMALL ARMS, MORTAR, ARTILLERY, ROCKETS).
         */
        hostileFireType?: string;
      }
    }
  }
}

export type PersonnelrecoveryCountResponse = string;

export type PersonnelrecoveryTupleResponse = Array<PersonnelRecoveryFullL>;

export interface PersonnelrecoveryCreateParams {
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
   * Time stamp of the original personnel recovery message, in ISO 8601 UTC format.
   */
  msgTime: string;

  /**
   * WGS-84 latitude of the pickup location, in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  pickupLat: number;

  /**
   * WGS-84 longitude of the pickup location, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  pickupLon: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Specifies the type of incident resulting in a recovery or evacuation mission.
   * Intended as, but not constrained to, MIL-STD-6016 J6.1 Emergency Type (e.g. NO
   * STATEMENT, DOWN AIRCRAFT, MAN IN WATER, DITCHING, BAILOUT, DISTRESSED VEHICLE,
   * GROUND INCIDENT, MEDICAL, ISOLATED PERSONS, etc.).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Mechanism used to verify the survivors identity.
   */
  authMethod?: string;

  /**
   * The confirmation status of the isolated personnel identity. Intended as, but not
   * constrained to, MIL-STD-6016 J6.1 Authentication Status, Isolated Personnel (NO
   * STATEMENT, AUTHENTICATED, NOT AUTHENTICATED, AUTHENTICATED UNDER DURESS, NOT
   * APPLICABLE):
   *
   * AUTHENTICATED: Confirmed Friend
   *
   * NOT AUTHENTICATED: Unconfirmed status
   *
   * AUTHENTICATED UNDER DURESS: Authentication comprised by hostiles.
   *
   * NOT APPLICABLE: Authentication not required.
   */
  authStatus?: string;

  /**
   * Flag indicating whether a radio identifier is reported.
   */
  beaconInd?: boolean;

  /**
   * The call sign of the personnel to be recovered.
   */
  callSign?: string;

  /**
   * Survivor communications equipment. Intended as, but not constrained to,
   * MIL-STD-6016 J6.1 Communications Equipment, Isolated Personnel (NO STATEMENT,
   * SURVIVAL RADIO, RADIO BEACON, EPLRS, SIGNAL MIRROR, SMOKE FLARE, IR SIGNALLING
   * DEVICE, SIGNALLING PANEL, FRIENDLY FORCE TRACKER, GPS BEACON, LL PHONE, TACTICAL
   * RADIO LOS, TACTICAL RADIO BLOS).
   */
  commEq1?: string;

  /**
   * Survivor communications equipment. Intended as, but not constrained to,
   * MIL-STD-6016 J6.1 Communications Equipment, Isolated Personnel (NO STATEMENT,
   * SURVIVAL RADIO, RADIO BEACON, EPLRS, SIGNAL MIRROR, SMOKE FLARE, IR SIGNALLING
   * DEVICE, SIGNALLING PANEL, FRIENDLY FORCE TRACKER, GPS BEACON, LL PHONE, TACTICAL
   * RADIO LOS, TACTICAL RADIO BLOS).
   */
  commEq2?: string;

  /**
   * Survivor communications equipment. Intended as, but not constrained to,
   * MIL-STD-6016 J6.1 Communications Equipment, Isolated Personnel (NO STATEMENT,
   * SURVIVAL RADIO, RADIO BEACON, EPLRS, SIGNAL MIRROR, SMOKE FLARE, IR SIGNALLING
   * DEVICE, SIGNALLING PANEL, FRIENDLY FORCE TRACKER, GPS BEACON, LL PHONE, TACTICAL
   * RADIO LOS, TACTICAL RADIO BLOS).
   */
  commEq3?: string;

  executionInfo?: PersonnelrecoveryCreateParams.ExecutionInfo;

  /**
   * The survivor service identity (UNKNOWN MILITARY, UNKNOWN CIVILIAN, FRIEND
   * MILITARY, FRIEND CIVIILIAN, NEUTRAL MILITARY, NEUTRAL CIVILIAN, HOSTILE
   * MILITARY, HOSTILE CIVILIAN).
   */
  identity?: string;

  /**
   * Unique identifier of a weather report associated with this recovery.
   */
  idWeatherReport?: string;

  /**
   * The military classification of the personnel to be recovered. Intended as, but
   * not constrained to, MIL-STD-6016 J6.1 Isolated Personnel Classification (NO
   * STATEMENT, MILITARY, GOVERNMENT CIVILIAN, GOVERNMENT CONTRACTOR, CIVILIAN,
   * MULTIPLE CLASSIFICATIONS).
   */
  milClass?: string;

  /**
   * The country of origin or political entity of an isolated person subject to
   * rescue or evacuation. If natAlliance is set to 126, then natAlliance1 must be
   * non 0. If natAlliance is any number other than 126, then natAlliance1 will be
   * set to 0 regardless. Defined in MIL-STD-6016 J6.1 Nationality/Alliance isolated
   * person(s).
   */
  natAlliance?: number;

  /**
   * Extended country of origin or political entity of an isolated person subject to
   * rescue or evacuation. Specify an entry here only if natAlliance is 126. Defined
   * in MIL-STD-6016 J6.1 Nationality/Alliance isolated person(s), 1.
   */
  natAlliance1?: number;

  /**
   * Number of ambulatory personnel requiring recovery.
   */
  numAmbulatory?: number;

  /**
   * Number of injured, but ambulatory, personnel requiring recovery.
   */
  numAmbulatoryInjured?: number;

  /**
   * Number of littered personnel requiring recovery.
   */
  numNonAmbulatory?: number;

  /**
   * The count of persons requiring recovery.
   */
  numPersons?: number;

  objectiveAreaInfo?: PersonnelrecoveryCreateParams.ObjectiveAreaInfo;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Altitude relative to WGS-84 ellipsoid, in meters. Positive values indicate a
   * point height above ellipsoid, and negative values indicate a point eight below
   * ellipsoid.
   */
  pickupAlt?: number;

  /**
   * UUID identifying the Personnel Recovery mission, which should remain the same on
   * subsequent posts related to the same recovery mission.
   */
  recovId?: string;

  /**
   * Receive voice frequency in 5Hz increments. This field will auto populate with
   * the txFreq value if the post element is null.
   */
  rxFreq?: number;

  /**
   * Preloaded message conveying the situation confronting the isolated person(s).
   * Intended as, but not constrained to, MIL-STD-6016 J6.1 Survivor Radio Messages
   * (e.g. INJURED CANT MOVE NO KNOWN HOSTILES, INJURED CANT MOVE HOSTILES NEARBY,
   * UNINJURED CANT MOVE HOSTILES NEARBY, UNINJURED NO KNOWN HOSTILES, INJURED
   * LIMITED MOBILITY).
   */
  survivorMessages?: string;

  /**
   * Survivor radio equipment. Intended as, but not constrained to, MIL-STD-6016 J6.1
   * Survivor Radio Type (NO STATEMENT, PRQ7SEL, PRC90, PRC112, PRC112B B1, PRC112C,
   * PRC112D, PRC148 MBITR, PRC148 JEM, PRC149, PRC152, ACRPLB, OTHER).
   */
  survivorRadio?: string;

  /**
   * Flag indicating the cancellation of this recovery.
   */
  termInd?: boolean;

  /**
   * Additional specific messages received from survivor.
   */
  textMsg?: string;

  /**
   * Transmit voice frequency in 5Hz increments.
   */
  txFreq?: number;
}

export namespace PersonnelrecoveryCreateParams {
  export interface ExecutionInfo {
    /**
     * The heading, in degrees, of leaving the recovery zone.
     */
    egress?: number;

    /**
     * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
     * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
     * degrees, and altitude, in meters, of the egress location. This array must
     * contain a minimum of 2 elements (latitude and longitude), and may contain an
     * optional 3rd element (altitude).
     */
    egressPoint?: Array<number>;

    escortVehicle?: ExecutionInfo.EscortVehicle;

    /**
     * The heading, in degrees clockwise from North, of entering the recovery zone.
     */
    ingress?: number;

    /**
     * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
     * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
     * degrees, and altitude, in meters, of the initial location. This array must
     * contain a minimum of 2 elements (latitude and longitude), and may contain an
     * optional 3rd element (altitude).
     */
    initialPoint?: Array<number>;

    /**
     * Description of the objective strategy plan.
     */
    objStrategy?: string;

    recoveryVehicle?: ExecutionInfo.RecoveryVehicle;
  }

  export namespace ExecutionInfo {
    export interface EscortVehicle {
      /**
       * The call sign of the recovery vehicle.
       */
      callSign?: string;

      /**
       * Primary contact frequency of the recovery vehicle.
       */
      primaryFreq?: number;

      /**
       * The number of objects or units moving as a group and represented as a single
       * entity in this recovery vehicle message. If null, the strength is assumed to
       * represent a single object. Note that if this recovery derives from a J-series
       * message then special definitions apply for the following values: 13 indicates an
       * estimated 2-7 units, 14 indicates an estimated more than 7 units, and 15
       * indicates an estimated more than 12 units.
       */
      strength?: number;

      /**
       * The particular type of recovery vehicle to be used.
       */
      type?: string;
    }

    export interface RecoveryVehicle {
      /**
       * The call sign of the recovery vehicle.
       */
      callSign?: string;

      /**
       * Primary contact frequency of the recovery vehicle.
       */
      primaryFreq?: number;

      /**
       * The number of objects or units moving as a group and represented as a single
       * entity in this recovery vehicle message. If null, the strength is assumed to
       * represent a single object. Note that if this recovery derives from a J-series
       * message then special definitions apply for the following values: 13 indicates an
       * estimated 2-7 units, 14 indicates an estimated more than 7 units, and 15
       * indicates an estimated more than 12 units.
       */
      strength?: number;

      /**
       * The particular type of recovery vehicle to be used.
       */
      type?: string;
    }
  }

  export interface ObjectiveAreaInfo {
    /**
     * Information detailing knowledge of enemies in the area.
     */
    enemyData?: Array<ObjectiveAreaInfo.EnemyData>;

    /**
     * The call sign of the on-scene commander.
     */
    oscCallSign?: string;

    /**
     * The radio frequency of the on-scene commander.
     */
    oscFreq?: number;

    /**
     * Description of the pickup zone location.
     */
    pzDesc?: string;

    /**
     * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
     * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
     * degrees, and altitude, in meters, of the pz location. This array must contain a
     * minimum of 2 elements (latitude and longitude), and may contain an optional 3rd
     * element (altitude).
     */
    pzLocation?: Array<number>;
  }

  export namespace ObjectiveAreaInfo {
    export interface EnemyData {
      /**
       * Directions to known enemies in the operation area (NORTH, NORTHEAST, EAST,
       * SOUTHEAST, SOUTH, SOUTHWEST, WEST, NORTHWEST, SURROUNDED).
       */
      dirToEnemy?: string;

      /**
       * Comments provided by friendlies about the evac zone.
       */
      friendliesRemarks?: string;

      /**
       * Hot Landing Zone remarks.
       */
      hlzRemarks?: string;

      /**
       * The type of hostile fire received (SMALL ARMS, MORTAR, ARTILLERY, ROCKETS).
       */
      hostileFireType?: string;
    }
  }
}

export interface PersonnelrecoveryListParams {
  /**
   * Time stamp of the original personnel recovery message, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface PersonnelrecoveryCountParams {
  /**
   * Time stamp of the original personnel recovery message, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface PersonnelrecoveryCreateBulkParams {
  body: Array<PersonnelrecoveryCreateBulkParams.Body>;
}

export namespace PersonnelrecoveryCreateBulkParams {
  /**
   * Provides information concerning search and rescue operations and other
   * situations involving personnel recovery.
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
     * Time stamp of the original personnel recovery message, in ISO 8601 UTC format.
     */
    msgTime: string;

    /**
     * WGS-84 latitude of the pickup location, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    pickupLat: number;

    /**
     * WGS-84 longitude of the pickup location, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    pickupLon: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Specifies the type of incident resulting in a recovery or evacuation mission.
     * Intended as, but not constrained to, MIL-STD-6016 J6.1 Emergency Type (e.g. NO
     * STATEMENT, DOWN AIRCRAFT, MAN IN WATER, DITCHING, BAILOUT, DISTRESSED VEHICLE,
     * GROUND INCIDENT, MEDICAL, ISOLATED PERSONS, etc.).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Mechanism used to verify the survivors identity.
     */
    authMethod?: string;

    /**
     * The confirmation status of the isolated personnel identity. Intended as, but not
     * constrained to, MIL-STD-6016 J6.1 Authentication Status, Isolated Personnel (NO
     * STATEMENT, AUTHENTICATED, NOT AUTHENTICATED, AUTHENTICATED UNDER DURESS, NOT
     * APPLICABLE):
     *
     * AUTHENTICATED: Confirmed Friend
     *
     * NOT AUTHENTICATED: Unconfirmed status
     *
     * AUTHENTICATED UNDER DURESS: Authentication comprised by hostiles.
     *
     * NOT APPLICABLE: Authentication not required.
     */
    authStatus?: string;

    /**
     * Flag indicating whether a radio identifier is reported.
     */
    beaconInd?: boolean;

    /**
     * The call sign of the personnel to be recovered.
     */
    callSign?: string;

    /**
     * Survivor communications equipment. Intended as, but not constrained to,
     * MIL-STD-6016 J6.1 Communications Equipment, Isolated Personnel (NO STATEMENT,
     * SURVIVAL RADIO, RADIO BEACON, EPLRS, SIGNAL MIRROR, SMOKE FLARE, IR SIGNALLING
     * DEVICE, SIGNALLING PANEL, FRIENDLY FORCE TRACKER, GPS BEACON, LL PHONE, TACTICAL
     * RADIO LOS, TACTICAL RADIO BLOS).
     */
    commEq1?: string;

    /**
     * Survivor communications equipment. Intended as, but not constrained to,
     * MIL-STD-6016 J6.1 Communications Equipment, Isolated Personnel (NO STATEMENT,
     * SURVIVAL RADIO, RADIO BEACON, EPLRS, SIGNAL MIRROR, SMOKE FLARE, IR SIGNALLING
     * DEVICE, SIGNALLING PANEL, FRIENDLY FORCE TRACKER, GPS BEACON, LL PHONE, TACTICAL
     * RADIO LOS, TACTICAL RADIO BLOS).
     */
    commEq2?: string;

    /**
     * Survivor communications equipment. Intended as, but not constrained to,
     * MIL-STD-6016 J6.1 Communications Equipment, Isolated Personnel (NO STATEMENT,
     * SURVIVAL RADIO, RADIO BEACON, EPLRS, SIGNAL MIRROR, SMOKE FLARE, IR SIGNALLING
     * DEVICE, SIGNALLING PANEL, FRIENDLY FORCE TRACKER, GPS BEACON, LL PHONE, TACTICAL
     * RADIO LOS, TACTICAL RADIO BLOS).
     */
    commEq3?: string;

    executionInfo?: Body.ExecutionInfo;

    /**
     * The survivor service identity (UNKNOWN MILITARY, UNKNOWN CIVILIAN, FRIEND
     * MILITARY, FRIEND CIVIILIAN, NEUTRAL MILITARY, NEUTRAL CIVILIAN, HOSTILE
     * MILITARY, HOSTILE CIVILIAN).
     */
    identity?: string;

    /**
     * Unique identifier of a weather report associated with this recovery.
     */
    idWeatherReport?: string;

    /**
     * The military classification of the personnel to be recovered. Intended as, but
     * not constrained to, MIL-STD-6016 J6.1 Isolated Personnel Classification (NO
     * STATEMENT, MILITARY, GOVERNMENT CIVILIAN, GOVERNMENT CONTRACTOR, CIVILIAN,
     * MULTIPLE CLASSIFICATIONS).
     */
    milClass?: string;

    /**
     * The country of origin or political entity of an isolated person subject to
     * rescue or evacuation. If natAlliance is set to 126, then natAlliance1 must be
     * non 0. If natAlliance is any number other than 126, then natAlliance1 will be
     * set to 0 regardless. Defined in MIL-STD-6016 J6.1 Nationality/Alliance isolated
     * person(s).
     */
    natAlliance?: number;

    /**
     * Extended country of origin or political entity of an isolated person subject to
     * rescue or evacuation. Specify an entry here only if natAlliance is 126. Defined
     * in MIL-STD-6016 J6.1 Nationality/Alliance isolated person(s), 1.
     */
    natAlliance1?: number;

    /**
     * Number of ambulatory personnel requiring recovery.
     */
    numAmbulatory?: number;

    /**
     * Number of injured, but ambulatory, personnel requiring recovery.
     */
    numAmbulatoryInjured?: number;

    /**
     * Number of littered personnel requiring recovery.
     */
    numNonAmbulatory?: number;

    /**
     * The count of persons requiring recovery.
     */
    numPersons?: number;

    objectiveAreaInfo?: Body.ObjectiveAreaInfo;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Altitude relative to WGS-84 ellipsoid, in meters. Positive values indicate a
     * point height above ellipsoid, and negative values indicate a point eight below
     * ellipsoid.
     */
    pickupAlt?: number;

    /**
     * UUID identifying the Personnel Recovery mission, which should remain the same on
     * subsequent posts related to the same recovery mission.
     */
    recovId?: string;

    /**
     * Receive voice frequency in 5Hz increments. This field will auto populate with
     * the txFreq value if the post element is null.
     */
    rxFreq?: number;

    /**
     * Preloaded message conveying the situation confronting the isolated person(s).
     * Intended as, but not constrained to, MIL-STD-6016 J6.1 Survivor Radio Messages
     * (e.g. INJURED CANT MOVE NO KNOWN HOSTILES, INJURED CANT MOVE HOSTILES NEARBY,
     * UNINJURED CANT MOVE HOSTILES NEARBY, UNINJURED NO KNOWN HOSTILES, INJURED
     * LIMITED MOBILITY).
     */
    survivorMessages?: string;

    /**
     * Survivor radio equipment. Intended as, but not constrained to, MIL-STD-6016 J6.1
     * Survivor Radio Type (NO STATEMENT, PRQ7SEL, PRC90, PRC112, PRC112B B1, PRC112C,
     * PRC112D, PRC148 MBITR, PRC148 JEM, PRC149, PRC152, ACRPLB, OTHER).
     */
    survivorRadio?: string;

    /**
     * Flag indicating the cancellation of this recovery.
     */
    termInd?: boolean;

    /**
     * Additional specific messages received from survivor.
     */
    textMsg?: string;

    /**
     * Transmit voice frequency in 5Hz increments.
     */
    txFreq?: number;
  }

  export namespace Body {
    export interface ExecutionInfo {
      /**
       * The heading, in degrees, of leaving the recovery zone.
       */
      egress?: number;

      /**
       * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
       * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
       * degrees, and altitude, in meters, of the egress location. This array must
       * contain a minimum of 2 elements (latitude and longitude), and may contain an
       * optional 3rd element (altitude).
       */
      egressPoint?: Array<number>;

      escortVehicle?: ExecutionInfo.EscortVehicle;

      /**
       * The heading, in degrees clockwise from North, of entering the recovery zone.
       */
      ingress?: number;

      /**
       * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
       * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
       * degrees, and altitude, in meters, of the initial location. This array must
       * contain a minimum of 2 elements (latitude and longitude), and may contain an
       * optional 3rd element (altitude).
       */
      initialPoint?: Array<number>;

      /**
       * Description of the objective strategy plan.
       */
      objStrategy?: string;

      recoveryVehicle?: ExecutionInfo.RecoveryVehicle;
    }

    export namespace ExecutionInfo {
      export interface EscortVehicle {
        /**
         * The call sign of the recovery vehicle.
         */
        callSign?: string;

        /**
         * Primary contact frequency of the recovery vehicle.
         */
        primaryFreq?: number;

        /**
         * The number of objects or units moving as a group and represented as a single
         * entity in this recovery vehicle message. If null, the strength is assumed to
         * represent a single object. Note that if this recovery derives from a J-series
         * message then special definitions apply for the following values: 13 indicates an
         * estimated 2-7 units, 14 indicates an estimated more than 7 units, and 15
         * indicates an estimated more than 12 units.
         */
        strength?: number;

        /**
         * The particular type of recovery vehicle to be used.
         */
        type?: string;
      }

      export interface RecoveryVehicle {
        /**
         * The call sign of the recovery vehicle.
         */
        callSign?: string;

        /**
         * Primary contact frequency of the recovery vehicle.
         */
        primaryFreq?: number;

        /**
         * The number of objects or units moving as a group and represented as a single
         * entity in this recovery vehicle message. If null, the strength is assumed to
         * represent a single object. Note that if this recovery derives from a J-series
         * message then special definitions apply for the following values: 13 indicates an
         * estimated 2-7 units, 14 indicates an estimated more than 7 units, and 15
         * indicates an estimated more than 12 units.
         */
        strength?: number;

        /**
         * The particular type of recovery vehicle to be used.
         */
        type?: string;
      }
    }

    export interface ObjectiveAreaInfo {
      /**
       * Information detailing knowledge of enemies in the area.
       */
      enemyData?: Array<ObjectiveAreaInfo.EnemyData>;

      /**
       * The call sign of the on-scene commander.
       */
      oscCallSign?: string;

      /**
       * The radio frequency of the on-scene commander.
       */
      oscFreq?: number;

      /**
       * Description of the pickup zone location.
       */
      pzDesc?: string;

      /**
       * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
       * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
       * degrees, and altitude, in meters, of the pz location. This array must contain a
       * minimum of 2 elements (latitude and longitude), and may contain an optional 3rd
       * element (altitude).
       */
      pzLocation?: Array<number>;
    }

    export namespace ObjectiveAreaInfo {
      export interface EnemyData {
        /**
         * Directions to known enemies in the operation area (NORTH, NORTHEAST, EAST,
         * SOUTHEAST, SOUTH, SOUTHWEST, WEST, NORTHWEST, SURROUNDED).
         */
        dirToEnemy?: string;

        /**
         * Comments provided by friendlies about the evac zone.
         */
        friendliesRemarks?: string;

        /**
         * Hot Landing Zone remarks.
         */
        hlzRemarks?: string;

        /**
         * The type of hostile fire received (SMALL ARMS, MORTAR, ARTILLERY, ROCKETS).
         */
        hostileFireType?: string;
      }
    }
  }
}

export interface PersonnelrecoveryFileCreateParams {
  body: Array<PersonnelrecoveryFileCreateParams.Body>;
}

export namespace PersonnelrecoveryFileCreateParams {
  /**
   * Provides information concerning search and rescue operations and other
   * situations involving personnel recovery.
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
     * Time stamp of the original personnel recovery message, in ISO 8601 UTC format.
     */
    msgTime: string;

    /**
     * WGS-84 latitude of the pickup location, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    pickupLat: number;

    /**
     * WGS-84 longitude of the pickup location, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    pickupLon: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Specifies the type of incident resulting in a recovery or evacuation mission.
     * Intended as, but not constrained to, MIL-STD-6016 J6.1 Emergency Type (e.g. NO
     * STATEMENT, DOWN AIRCRAFT, MAN IN WATER, DITCHING, BAILOUT, DISTRESSED VEHICLE,
     * GROUND INCIDENT, MEDICAL, ISOLATED PERSONS, etc.).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Mechanism used to verify the survivors identity.
     */
    authMethod?: string;

    /**
     * The confirmation status of the isolated personnel identity. Intended as, but not
     * constrained to, MIL-STD-6016 J6.1 Authentication Status, Isolated Personnel (NO
     * STATEMENT, AUTHENTICATED, NOT AUTHENTICATED, AUTHENTICATED UNDER DURESS, NOT
     * APPLICABLE):
     *
     * AUTHENTICATED: Confirmed Friend
     *
     * NOT AUTHENTICATED: Unconfirmed status
     *
     * AUTHENTICATED UNDER DURESS: Authentication comprised by hostiles.
     *
     * NOT APPLICABLE: Authentication not required.
     */
    authStatus?: string;

    /**
     * Flag indicating whether a radio identifier is reported.
     */
    beaconInd?: boolean;

    /**
     * The call sign of the personnel to be recovered.
     */
    callSign?: string;

    /**
     * Survivor communications equipment. Intended as, but not constrained to,
     * MIL-STD-6016 J6.1 Communications Equipment, Isolated Personnel (NO STATEMENT,
     * SURVIVAL RADIO, RADIO BEACON, EPLRS, SIGNAL MIRROR, SMOKE FLARE, IR SIGNALLING
     * DEVICE, SIGNALLING PANEL, FRIENDLY FORCE TRACKER, GPS BEACON, LL PHONE, TACTICAL
     * RADIO LOS, TACTICAL RADIO BLOS).
     */
    commEq1?: string;

    /**
     * Survivor communications equipment. Intended as, but not constrained to,
     * MIL-STD-6016 J6.1 Communications Equipment, Isolated Personnel (NO STATEMENT,
     * SURVIVAL RADIO, RADIO BEACON, EPLRS, SIGNAL MIRROR, SMOKE FLARE, IR SIGNALLING
     * DEVICE, SIGNALLING PANEL, FRIENDLY FORCE TRACKER, GPS BEACON, LL PHONE, TACTICAL
     * RADIO LOS, TACTICAL RADIO BLOS).
     */
    commEq2?: string;

    /**
     * Survivor communications equipment. Intended as, but not constrained to,
     * MIL-STD-6016 J6.1 Communications Equipment, Isolated Personnel (NO STATEMENT,
     * SURVIVAL RADIO, RADIO BEACON, EPLRS, SIGNAL MIRROR, SMOKE FLARE, IR SIGNALLING
     * DEVICE, SIGNALLING PANEL, FRIENDLY FORCE TRACKER, GPS BEACON, LL PHONE, TACTICAL
     * RADIO LOS, TACTICAL RADIO BLOS).
     */
    commEq3?: string;

    executionInfo?: Body.ExecutionInfo;

    /**
     * The survivor service identity (UNKNOWN MILITARY, UNKNOWN CIVILIAN, FRIEND
     * MILITARY, FRIEND CIVIILIAN, NEUTRAL MILITARY, NEUTRAL CIVILIAN, HOSTILE
     * MILITARY, HOSTILE CIVILIAN).
     */
    identity?: string;

    /**
     * Unique identifier of a weather report associated with this recovery.
     */
    idWeatherReport?: string;

    /**
     * The military classification of the personnel to be recovered. Intended as, but
     * not constrained to, MIL-STD-6016 J6.1 Isolated Personnel Classification (NO
     * STATEMENT, MILITARY, GOVERNMENT CIVILIAN, GOVERNMENT CONTRACTOR, CIVILIAN,
     * MULTIPLE CLASSIFICATIONS).
     */
    milClass?: string;

    /**
     * The country of origin or political entity of an isolated person subject to
     * rescue or evacuation. If natAlliance is set to 126, then natAlliance1 must be
     * non 0. If natAlliance is any number other than 126, then natAlliance1 will be
     * set to 0 regardless. Defined in MIL-STD-6016 J6.1 Nationality/Alliance isolated
     * person(s).
     */
    natAlliance?: number;

    /**
     * Extended country of origin or political entity of an isolated person subject to
     * rescue or evacuation. Specify an entry here only if natAlliance is 126. Defined
     * in MIL-STD-6016 J6.1 Nationality/Alliance isolated person(s), 1.
     */
    natAlliance1?: number;

    /**
     * Number of ambulatory personnel requiring recovery.
     */
    numAmbulatory?: number;

    /**
     * Number of injured, but ambulatory, personnel requiring recovery.
     */
    numAmbulatoryInjured?: number;

    /**
     * Number of littered personnel requiring recovery.
     */
    numNonAmbulatory?: number;

    /**
     * The count of persons requiring recovery.
     */
    numPersons?: number;

    objectiveAreaInfo?: Body.ObjectiveAreaInfo;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Altitude relative to WGS-84 ellipsoid, in meters. Positive values indicate a
     * point height above ellipsoid, and negative values indicate a point eight below
     * ellipsoid.
     */
    pickupAlt?: number;

    /**
     * UUID identifying the Personnel Recovery mission, which should remain the same on
     * subsequent posts related to the same recovery mission.
     */
    recovId?: string;

    /**
     * Receive voice frequency in 5Hz increments. This field will auto populate with
     * the txFreq value if the post element is null.
     */
    rxFreq?: number;

    /**
     * Preloaded message conveying the situation confronting the isolated person(s).
     * Intended as, but not constrained to, MIL-STD-6016 J6.1 Survivor Radio Messages
     * (e.g. INJURED CANT MOVE NO KNOWN HOSTILES, INJURED CANT MOVE HOSTILES NEARBY,
     * UNINJURED CANT MOVE HOSTILES NEARBY, UNINJURED NO KNOWN HOSTILES, INJURED
     * LIMITED MOBILITY).
     */
    survivorMessages?: string;

    /**
     * Survivor radio equipment. Intended as, but not constrained to, MIL-STD-6016 J6.1
     * Survivor Radio Type (NO STATEMENT, PRQ7SEL, PRC90, PRC112, PRC112B B1, PRC112C,
     * PRC112D, PRC148 MBITR, PRC148 JEM, PRC149, PRC152, ACRPLB, OTHER).
     */
    survivorRadio?: string;

    /**
     * Flag indicating the cancellation of this recovery.
     */
    termInd?: boolean;

    /**
     * Additional specific messages received from survivor.
     */
    textMsg?: string;

    /**
     * Transmit voice frequency in 5Hz increments.
     */
    txFreq?: number;
  }

  export namespace Body {
    export interface ExecutionInfo {
      /**
       * The heading, in degrees, of leaving the recovery zone.
       */
      egress?: number;

      /**
       * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
       * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
       * degrees, and altitude, in meters, of the egress location. This array must
       * contain a minimum of 2 elements (latitude and longitude), and may contain an
       * optional 3rd element (altitude).
       */
      egressPoint?: Array<number>;

      escortVehicle?: ExecutionInfo.EscortVehicle;

      /**
       * The heading, in degrees clockwise from North, of entering the recovery zone.
       */
      ingress?: number;

      /**
       * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
       * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
       * degrees, and altitude, in meters, of the initial location. This array must
       * contain a minimum of 2 elements (latitude and longitude), and may contain an
       * optional 3rd element (altitude).
       */
      initialPoint?: Array<number>;

      /**
       * Description of the objective strategy plan.
       */
      objStrategy?: string;

      recoveryVehicle?: ExecutionInfo.RecoveryVehicle;
    }

    export namespace ExecutionInfo {
      export interface EscortVehicle {
        /**
         * The call sign of the recovery vehicle.
         */
        callSign?: string;

        /**
         * Primary contact frequency of the recovery vehicle.
         */
        primaryFreq?: number;

        /**
         * The number of objects or units moving as a group and represented as a single
         * entity in this recovery vehicle message. If null, the strength is assumed to
         * represent a single object. Note that if this recovery derives from a J-series
         * message then special definitions apply for the following values: 13 indicates an
         * estimated 2-7 units, 14 indicates an estimated more than 7 units, and 15
         * indicates an estimated more than 12 units.
         */
        strength?: number;

        /**
         * The particular type of recovery vehicle to be used.
         */
        type?: string;
      }

      export interface RecoveryVehicle {
        /**
         * The call sign of the recovery vehicle.
         */
        callSign?: string;

        /**
         * Primary contact frequency of the recovery vehicle.
         */
        primaryFreq?: number;

        /**
         * The number of objects or units moving as a group and represented as a single
         * entity in this recovery vehicle message. If null, the strength is assumed to
         * represent a single object. Note that if this recovery derives from a J-series
         * message then special definitions apply for the following values: 13 indicates an
         * estimated 2-7 units, 14 indicates an estimated more than 7 units, and 15
         * indicates an estimated more than 12 units.
         */
        strength?: number;

        /**
         * The particular type of recovery vehicle to be used.
         */
        type?: string;
      }
    }

    export interface ObjectiveAreaInfo {
      /**
       * Information detailing knowledge of enemies in the area.
       */
      enemyData?: Array<ObjectiveAreaInfo.EnemyData>;

      /**
       * The call sign of the on-scene commander.
       */
      oscCallSign?: string;

      /**
       * The radio frequency of the on-scene commander.
       */
      oscFreq?: number;

      /**
       * Description of the pickup zone location.
       */
      pzDesc?: string;

      /**
       * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
       * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
       * degrees, and altitude, in meters, of the pz location. This array must contain a
       * minimum of 2 elements (latitude and longitude), and may contain an optional 3rd
       * element (altitude).
       */
      pzLocation?: Array<number>;
    }

    export namespace ObjectiveAreaInfo {
      export interface EnemyData {
        /**
         * Directions to known enemies in the operation area (NORTH, NORTHEAST, EAST,
         * SOUTHEAST, SOUTH, SOUTHWEST, WEST, NORTHWEST, SURROUNDED).
         */
        dirToEnemy?: string;

        /**
         * Comments provided by friendlies about the evac zone.
         */
        friendliesRemarks?: string;

        /**
         * Hot Landing Zone remarks.
         */
        hlzRemarks?: string;

        /**
         * The type of hostile fire received (SMALL ARMS, MORTAR, ARTILLERY, ROCKETS).
         */
        hostileFireType?: string;
      }
    }
  }
}

export interface PersonnelrecoveryGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface PersonnelrecoveryTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Time stamp of the original personnel recovery message, in ISO 8601 UTC format.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  msgTime: string;

  firstResult?: number;

  maxResults?: number;
}

Personnelrecovery.History = History;

export declare namespace Personnelrecovery {
  export {
    type PersonnelRecoveryFullL as PersonnelRecoveryFullL,
    type PersonnelrecoveryListResponse as PersonnelrecoveryListResponse,
    type PersonnelrecoveryCountResponse as PersonnelrecoveryCountResponse,
    type PersonnelrecoveryTupleResponse as PersonnelrecoveryTupleResponse,
    type PersonnelrecoveryCreateParams as PersonnelrecoveryCreateParams,
    type PersonnelrecoveryListParams as PersonnelrecoveryListParams,
    type PersonnelrecoveryCountParams as PersonnelrecoveryCountParams,
    type PersonnelrecoveryCreateBulkParams as PersonnelrecoveryCreateBulkParams,
    type PersonnelrecoveryFileCreateParams as PersonnelrecoveryFileCreateParams,
    type PersonnelrecoveryGetParams as PersonnelrecoveryGetParams,
    type PersonnelrecoveryTupleParams as PersonnelrecoveryTupleParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
