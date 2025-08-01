// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as HistoryAPI from './history';
import { History, HistoryCountParams, HistoryCountResponse, HistoryListParams } from './history';
import * as TupleAPI from './tuple';
import { Tuple, TupleListParams } from './tuple';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Evac extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  tuple: TupleAPI.Tuple = new TupleAPI.Tuple(this._client);

  /**
   * Service operation to take a single evac as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.evac.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   pickupLat: 75.1234,
   *   pickupLon: 175.1234,
   *   reqTime: '2021-10-15T16:00:00.123Z',
   *   source: 'Bluestaq',
   *   type: 'REQUEST',
   * });
   * ```
   */
  create(body: EvacCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/evac', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Evac by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const evacFull = await client.evac.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: EvacRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.EvacFull> {
    return this._client.get(path`/udl/evac/${id}`, { query, ...options });
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
   * for await (const evacAbridged of client.evac.list({
   *   reqTime: '2019-12-27T18:11:19.117Z',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(query: EvacListParams, options?: RequestOptions): PagePromise<EvacAbridgedsOffsetPage, EvacAbridged> {
    return this._client.getAPIList('/udl/evac', OffsetPage<EvacAbridged>, { query, ...options });
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
   * const response = await client.evac.count({
   *   reqTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: EvacCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/evac/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of Evac
   * records as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.evac.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       pickupLat: 75.1234,
   *       pickupLon: 175.1234,
   *       reqTime: '2021-10-15T16:00:00.123Z',
   *       source: 'Bluestaq',
   *       type: 'REQUEST',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: EvacCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/evac/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.evac.queryHelp();
   * ```
   */
  queryHelp(options?: RequestOptions): APIPromise<EvacQueryHelpResponse> {
    return this._client.get('/udl/evac/queryhelp', options);
  }

  /**
   * Service operation to take a list of Evac events as a POST body and ingest into
   * the database. Requires a specific role, please contact the UDL team to gain
   * access. This operation is intended to be used for automated feeds into UDL.
   *
   * @example
   * ```ts
   * await client.evac.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       pickupLat: 75.1234,
   *       pickupLon: 175.1234,
   *       reqTime: '2021-10-15T16:00:00.123Z',
   *       source: 'Bluestaq',
   *       type: 'REQUEST',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(params: EvacUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-evac', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type EvacAbridgedsOffsetPage = OffsetPage<EvacAbridged>;

/**
 * Casualty report and evacuation request. Used to report and request support to
 * evacuate friendly and enemy casualties.
 */
export interface EvacAbridged {
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
   * The request time, in ISO 8601 UTC format.
   */
  reqTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type of this medevac record (REQUEST, RESPONSE).
   */
  type: 'REQUEST' | 'RESPONSE';

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Identity and medical information on the patient to be evacuated.
   */
  casualtyInfo?: Array<EvacAbridged.CasualtyInfo>;

  /**
   * Radius of circular area about lat/lon point, in meters (1-sigma, if representing
   * error).
   */
  ce?: number;

  /**
   * The contact frequency, in Hz, of the agency or zone controller.
   */
  cntctFreq?: number;

  /**
   * Additional comments for the medevac mission.
   */
  comments?: string;

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
   * Data defining any enemy intelligence reported by the requestor.
   */
  enemyData?: Array<EvacAbridged.EnemyData>;

  /**
   * Unique identifier of a weather report associated with this evacuation.
   */
  idWeatherReport?: string;

  /**
   * Height above lat/lon point, in meters (1-sigma, if representing linear error).
   */
  le?: number;

  /**
   * UUID identifying the medevac mission, which should remain the same on subsequent
   * posts related to the same medevac mission.
   */
  medevacId?: string;

  /**
   * Flag indicating whether the mission requires medical personnel.
   */
  medicReq?: boolean;

  /**
   * The operation type of the evacuation. (NOT SPECIFIED, AIR, GROUND, SURFACE).
   */
  missionType?: string;

  /**
   * Number of ambulatory personnel requiring evacuation.
   */
  numAmbulatory?: number;

  /**
   * The count of people requiring medevac.
   */
  numCasualties?: number;

  /**
   * Number of people Killed In Action.
   */
  numKIA?: number;

  /**
   * Number of littered personnel requiring evacuation.
   */
  numLitter?: number;

  /**
   * Number of people Wounded In Action.
   */
  numWIA?: number;

  /**
   * Amplifying data for the terrain describing important obstacles in or around the
   * zone.
   */
  obstaclesRemarks?: string;

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
   * point height above ellipsoid, and negative values indicate a point height below
   * ellipsoid.
   */
  pickupAlt?: number;

  /**
   * The expected pickup time, in ISO 8601 UTC format.
   */
  pickupTime?: string;

  /**
   * The call sign of this medevac requestor.
   */
  reqCallSign?: string;

  /**
   * Externally provided Medevac request number (e.g. MED.1.223908).
   */
  reqNum?: string;

  /**
   * Short description of the terrain features of the pickup location (WOODS, TREES,
   * PLOWED FIELDS, FLAT, STANDING WATER, MARSH, URBAN BUILT-UP AREA, MOUNTAIN, HILL,
   * SAND TD, ROCKY, VALLEY, METAMORPHIC ICE, UNKNOWN TD, SEA, NO STATEMENT).
   */
  terrain?: string;

  /**
   * Amplifying data for the terrain describing any notable additional terrain
   * features.
   */
  terrainRemarks?: string;

  /**
   * The call sign of the zone controller.
   */
  zoneContrCallSign?: string;

  /**
   * Flag indicating that the pickup site is hot and hostiles are in the area.
   */
  zoneHot?: boolean;

  /**
   * The expected marker identifying the pickup site (SMOKE ZONE MARKING, FLARES,
   * MIRROR, GLIDE ANGLE INDICATOR LIGHT, LIGHT ZONE MARKING, PANELS, FIRE, LASER
   * DESIGNATOR, STROBE LIGHTS, VEHICLE LIGHTS, COLORED SMOKE, WHITE PHOSPHERUS,
   * INFRARED, ILLUMINATION, FRATRICIDE FENCE).
   */
  zoneMarking?: string;

  /**
   * Color used for the pickup site marking (RED, WHITE, BLUE, YELLOW, GREEN, ORANGE,
   * BLACK, PURPLE, BROWN, TAN, GRAY, SILVER, CAMOUFLAGE, OTHER COLOR).
   */
  zoneMarkingColor?: string;

  /**
   * The name of the zone.
   */
  zoneName?: string;

  /**
   * The pickup site security (UNKNOWN ZONESECURITY, NO ENEMY, POSSIBLE ENEMY, ENEMY
   * IN AREA USE CAUTION, ENEMY IN AREA ARMED ESCORT REQUIRED).
   */
  zoneSecurity?: string;
}

export namespace EvacAbridged {
  export interface CasualtyInfo {
    /**
     * The patient age, in years.
     */
    age?: number;

    /**
     * Allergy information.
     */
    allergy?: Array<CasualtyInfo.Allergy>;

    /**
     * The patient blood type (A POS, B POS, AB POS, O POS, A NEG, B NEG, AB NEG, O
     * NEG).
     */
    bloodType?: string;

    /**
     * The body part involved for the patient (HEAD, NECK, ABDOMEN, UPPER EXTREMITIES,
     * BACK, FACE, LOWER EXTREMITIES, FRONT, OBSTETRICAL GYNECOLOGICAL, OTHER BODY
     * PART).
     */
    bodyPart?: string;

    /**
     * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
     * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
     * degrees, and altitude, in meters, of the burial location. This array must
     * contain a minimum of 2 elements (latitude and longitude), and may contain an
     * optional 3rd element (altitude).
     */
    burialLocation?: Array<number>;

    /**
     * The call sign of this patient.
     */
    callSign?: string;

    /**
     * Unique identifier for the patient care provider.
     */
    careProviderUrn?: string;

    /**
     * Optional casualty key.
     */
    casualtyKey?: string;

    /**
     * The type of medical issue resulting in the need to evacuate the patient (NON
     * BATTLE, CUT, BURN, SICK, FRACTURE, AMPUTATION, PERFORATION, NUCLEAR, EXHAUSTION,
     * BIOLOGICAL, CHEMICAL, SHOCK, PUNCTURE WOUND, OTHER CUT, WOUNDED IN ACTION,
     * DENIAL, COMBAT STRESS).
     */
    casualtyType?: string;

    /**
     * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
     * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
     * degrees, and altitude, in meters, of the collection point. This array must
     * contain a minimum of 2 elements (latitude and longitude), and may contain an
     * optional 3rd element (altitude).
     */
    collectionPoint?: Array<number>;

    /**
     * Additional comments on the patient's casualty information.
     */
    comments?: string;

    /**
     * Health condition information.
     */
    condition?: Array<CasualtyInfo.Condition>;

    /**
     * The contamination specified for the patient (NONE, RADIATION, BIOLOGICAL,
     * CHEMICAL).
     */
    contamType?: string;

    /**
     * The patient's general medical state (SICK IN QUARTERS, RETURN TO DUTY, EVACUATE
     * WOUNDED, EVACUATE DECEASED, INTERRED).
     */
    disposition?: string;

    /**
     * The expected disposition of this patient (R T D, EVACUATE, EVACUATE TO FORWARD
     * SURGICAL TEAM, EVACUATE TO COMBAT SUPPORT HOSPITAL, EVACUATE TO AERO MEDICAL
     * STAGING FACILITY, EVACUATE TO SUSTAINING BASE MEDICAL TREATMENT FACILITY).
     */
    dispositionType?: string;

    /**
     * Medical condition causation information.
     */
    etiology?: Array<CasualtyInfo.Etiology>;

    /**
     * The required evacuation method for this patient (AIR, GROUND, NOT EVACUATED).
     */
    evacType?: string;

    /**
     * The patient sex (MALE, FEMALE).
     */
    gender?: string;

    /**
     * Health state information.
     */
    healthState?: Array<CasualtyInfo.HealthState>;

    /**
     * Injury specifics.
     */
    injury?: Array<CasualtyInfo.Injury>;

    /**
     * Last 4 characters of the patient social security code, or equivalent.
     */
    last4SSN?: string;

    /**
     * Medication specifics.
     */
    medication?: Array<CasualtyInfo.Medication>;

    /**
     * The patient common or legal name.
     */
    name?: string;

    /**
     * The country code indicating the citizenship of the patient.
     */
    nationality?: string;

    /**
     * The career field of this patient.
     */
    occSpeciality?: string;

    /**
     * The patient service identity (UNKNOWN MILITARY, UNKNOWN CIVILIAN, FRIEND
     * MILITARY, FRIEND CIVILIAN, NEUTRAL MILITARY, NEUTRAL CIVILIAN, HOSTILE MILITARY,
     * HOSTILE CIVILIAN).
     */
    patientIdentity?: string;

    /**
     * The patient service status (US MILITARY, US CIVILIAN, NON US MILITARY, NON US
     * CIVILIAN, ENEMY POW).
     */
    patientStatus?: string;

    /**
     * The patient pay grade or rank designation (O-10, O-9, O-8, O-7, O-6, O-5, O-4,
     * O-3, O-2, O-1, CWO-5, CWO-4, CWO-2, CWO-1, E -9, E-8, E-7, E-6, E-5, E-4, E-3,
     * E-2, E-1, NONE, CIVILIAN).
     */
    payGrade?: string;

    /**
     * The priority of the medevac mission for this patient (URGENT, PRIORITY, ROUTINE,
     * URGENT SURGERY, CONVENIENCE).
     */
    priority?: string;

    /**
     * The method used to generate this medevac report (DEVICE, GROUND COMBAT
     * PERSONNEL, EVACUATION PERSONNEL, ECHELON1 PERSONNEL, ECHELON2 PERSONNEL).
     */
    reportGen?: string;

    /**
     * Datetime of the compiling of the patients casualty report, in ISO 8601 UTC
     * format.
     */
    reportTime?: string;

    /**
     * The patient branch of service (AIR FORCE, ARMY, NAVY, MARINES, CIV, CONTR,
     * UNKNOWN SERVICE).
     */
    service?: string;

    /**
     * Array specifying if any special equipment is need for each of the evacuation of
     * this patient (EXTRACTION EQUIPMENT, SEMI RIGID LITTER, BACKBOARD, CERVICAL
     * COLLAR ,JUNGLE PENETRATOR, OXYGEN, WHOLE BLOOD, VENTILATOR, HOIST, NONE).
     */
    specMedEquip?: Array<string>;

    /**
     * Treatment information.
     */
    treatment?: Array<CasualtyInfo.Treatment>;

    /**
     * Information obtained for vital signs.
     */
    vitalSignData?: Array<CasualtyInfo.VitalSignData>;
  }

  export namespace CasualtyInfo {
    export interface Allergy {
      /**
       * Additional comments on the patient's allergy information.
       */
      comments?: string;

      /**
       * Type of patient allergy (e.g. PENICILLIN, SULFA, OTHER).
       */
      type?: string;
    }

    export interface Condition {
      /**
       * Body part location or body part referenced in condition. Intended as, but not
       * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
       * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
       * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
       */
      bodyPart?: string;

      /**
       * Additional comments on the patient's condition.
       */
      comments?: string;

      /**
       * Datetime of the condition diagnosis in ISO 8601 UTC datetime format.
       */
      time?: string;

      /**
       * Health condition assessment. Intended as, but not constrained to, K07.1
       * Condition Type Enumeration (e.g. ACTIVITY HIGH, ACTIVITY LOW, ACTIVITY MEDIUM,
       * ACTIVITY NONE, AVPU ALERT, AVPU ALTERED MENTAL STATE, AVPU PAIN, AVPU
       * UNRESPONSIVE, etc.).
       */
      type?: string;
    }

    export interface Etiology {
      /**
       * The body part or location affected from the etiology. Intended as, but not
       * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
       * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
       * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
       */
      bodyPart?: string;

      /**
       * Additional comments on the patient's etiology information.
       */
      comments?: string;

      /**
       * Datetime of the discovery of the etiology state in ISO 8601 UTC format.
       */
      time?: string;

      /**
       * The cause or manner of causation of the medical condition. Intended as, but not
       * constrained to, K07.1 EtiologyType Enumeration (e.g. ASSAULT, BUILDING COLLAPSE,
       * BURN CHEMICAL, BURN ELECTRICAL, BURN, BURN HOT LIQUID, BURN RADIATION, BURN
       * THERMAL, etc.).
       */
      type?: string;
    }

    export interface HealthState {
      /**
       * Medical color code used to quickly identify various medical state (e.g. AMBER,
       * BLACK, BLUE, GRAY, NORMAL, RED).
       */
      healthStateCode?: string;

      /**
       * Medical confidence factor.
       */
      medConfFactor?: number;

      /**
       * Datetime of the health state diagnosis in ISO 8601 UTC datetime format.
       */
      time?: string;

      /**
       * Generalized state of health type (BIOLOGICAL, CHEMICAL, COGNITIVE, HYDRATION,
       * LIFE SIGN, RADIATION, SHOCK, THERMAL).
       */
      type?: string;
    }

    export interface Injury {
      /**
       * Body part location of the injury. Intended as, but not constrained to, K07.1
       * Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE LEFT FRONT, ANKLE RIGHT
       * BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW BACK, ARM LEFT ELBOW
       * FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
       */
      bodyPart?: string;

      /**
       * Additional comments on the patient's injury information.
       */
      comments?: string;

      /**
       * The time of the injury, in ISO 8601 UTC format.
       */
      time?: string;

      /**
       * Classification of the injury type (ABRASION, AMPUTATION IT, AVULATION,
       * BALLISTIC, BLAST WAVE, BURN 1ST DEGREE, BURN 2ND DEGREE, BURN 3RD DEGREE, BURN
       * INHALATION, BURN LOWER AIRWAY, CHEST FLAIL, CHEST OPEN, DEGLOVING, ECCHYMOSIS,
       * FRACTURE CLOSED, FRACTURE CREPITUS, FRACTURE IT, FRACTURE OPEN, HEMATOMA,
       * IRREGULAR CONSISTENCY, IRREGULAR CONSISTENCY RIDGED, IRREGULAR CONSISTENCY
       * SWOLLEN, IRREGULAR CONSISTENCY SWOLLEN DISTENDED, IRREGULAR CONSISTENCY TENDER,
       * IRREGULAR POSITION, IRREGULAR SHAPE, IRREGULAR SHAPE MISSHAPED, IRREGULAR SHAPE
       * NON SYMMETRICAL, LACERATION, NEUROVASCULAR COMPROMISE, NEUROVASCULAR INTACT,
       * PUNCTURE, SEAT BELT SIGN, STAB, TIC TIM).
       */
      type?: string;
    }

    export interface Medication {
      /**
       * Route of medication delivery (e.g. INJECTION, ORAL, etc.).
       */
      adminRoute?: string;

      /**
       * Body part location or body part referenced for medication. Intended as, but not
       * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
       * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
       * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
       */
      bodyPart?: string;

      /**
       * Additional comments on the patient's medication information.
       */
      comments?: string;

      /**
       * Quantity of medicine or drug administered or recommended to be taken at a
       * particular time.
       */
      dose?: string;

      /**
       * The time that the medication was administered in ISO 8601 UTC format.
       */
      time?: string;

      /**
       * The type of medication administered. Intended as, but not constrained to, K07.1
       * Medication Enumeration (CEFOTETAN, ABRASION, ABX, AMOXILOXACIN, ANALGESIC,
       * COLLOID, CRYOPECIPITATES, CRYSTALLOID, EPINEPHRINE, ERTAPENEM, FENTANYL,
       * HEXTEND, LACTATED RINGERS, MOBIC, MORPHINE, NARCOTIC, NS, PENICILLIN, PLASMA,
       * PLATELETS, PRBC, TYLENOL, WHOLE BLOOD MT).
       */
      type?: string;
    }

    export interface Treatment {
      /**
       * Body part location or body part treated or to be treated. Intended as, but not
       * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
       * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
       * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
       */
      bodyPart?: string;

      /**
       * Additional comments on the patient's treatment information.
       */
      comments?: string;

      /**
       * Datetime of the treatment in ISO 8601 UTC format.
       */
      time?: string;

      /**
       * Type of treatment administered or to be administered. Intended as, but not
       * constrained to, K07.1 Treatment Type Enumeration (e.g. AIRWAY ADJUNCT, AIRWAY
       * ASSISTED VENTILATION, AIRWAY COMBI TUBE USED, AIRWAY ET NT, AIRWAY INTUBATED,
       * AIRWAY NPA OPA APPLIED, AIRWAY PATIENT, AIRWAY POSITIONAL, AIRWAY SURGICAL CRIC,
       * BREATHING CHEST SEAL, BREATHING CHEST TUBE, etc.).
       */
      type?: string;
    }

    export interface VitalSignData {
      /**
       * Medical confidence factor.
       */
      medConfFactor?: number;

      /**
       * Datetime of the vital sign measurement in ISO 8601 UTC datetime format.
       */
      time?: string;

      /**
       * Patient vital sign measured (e.g. HEART RATE, PULSE RATE, RESPIRATION RATE,
       * TEMPERATURE CORE, etc.).
       */
      vitalSign?: string;

      /**
       * Vital sign value 1. The content of this field is dependent on the type of vital
       * sign being measured (see the vitalSign field).
       */
      vitalSign1?: number;

      /**
       * Vital sign value 2. The content of this field is dependent on the type of vital
       * sign being measured (see the vitalSign field).
       */
      vitalSign2?: number;
    }
  }

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

export type EvacCountResponse = string;

export interface EvacQueryHelpResponse {
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

export interface EvacCreateParams {
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
   * The request time, in ISO 8601 UTC format.
   */
  reqTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type of this medevac record (REQUEST, RESPONSE).
   */
  type: 'REQUEST' | 'RESPONSE';

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Identity and medical information on the patient to be evacuated.
   */
  casualtyInfo?: Array<EvacCreateParams.CasualtyInfo>;

  /**
   * Radius of circular area about lat/lon point, in meters (1-sigma, if representing
   * error).
   */
  ce?: number;

  /**
   * The contact frequency, in Hz, of the agency or zone controller.
   */
  cntctFreq?: number;

  /**
   * Additional comments for the medevac mission.
   */
  comments?: string;

  /**
   * Data defining any enemy intelligence reported by the requestor.
   */
  enemyData?: Array<EvacCreateParams.EnemyData>;

  /**
   * Unique identifier of a weather report associated with this evacuation.
   */
  idWeatherReport?: string;

  /**
   * Height above lat/lon point, in meters (1-sigma, if representing linear error).
   */
  le?: number;

  /**
   * UUID identifying the medevac mission, which should remain the same on subsequent
   * posts related to the same medevac mission.
   */
  medevacId?: string;

  /**
   * Flag indicating whether the mission requires medical personnel.
   */
  medicReq?: boolean;

  /**
   * The operation type of the evacuation. (NOT SPECIFIED, AIR, GROUND, SURFACE).
   */
  missionType?: string;

  /**
   * Number of ambulatory personnel requiring evacuation.
   */
  numAmbulatory?: number;

  /**
   * The count of people requiring medevac.
   */
  numCasualties?: number;

  /**
   * Number of people Killed In Action.
   */
  numKIA?: number;

  /**
   * Number of littered personnel requiring evacuation.
   */
  numLitter?: number;

  /**
   * Number of people Wounded In Action.
   */
  numWIA?: number;

  /**
   * Amplifying data for the terrain describing important obstacles in or around the
   * zone.
   */
  obstaclesRemarks?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Altitude relative to WGS-84 ellipsoid, in meters. Positive values indicate a
   * point height above ellipsoid, and negative values indicate a point height below
   * ellipsoid.
   */
  pickupAlt?: number;

  /**
   * The expected pickup time, in ISO 8601 UTC format.
   */
  pickupTime?: string;

  /**
   * The call sign of this medevac requestor.
   */
  reqCallSign?: string;

  /**
   * Externally provided Medevac request number (e.g. MED.1.223908).
   */
  reqNum?: string;

  /**
   * Short description of the terrain features of the pickup location (WOODS, TREES,
   * PLOWED FIELDS, FLAT, STANDING WATER, MARSH, URBAN BUILT-UP AREA, MOUNTAIN, HILL,
   * SAND TD, ROCKY, VALLEY, METAMORPHIC ICE, UNKNOWN TD, SEA, NO STATEMENT).
   */
  terrain?: string;

  /**
   * Amplifying data for the terrain describing any notable additional terrain
   * features.
   */
  terrainRemarks?: string;

  /**
   * The call sign of the zone controller.
   */
  zoneContrCallSign?: string;

  /**
   * Flag indicating that the pickup site is hot and hostiles are in the area.
   */
  zoneHot?: boolean;

  /**
   * The expected marker identifying the pickup site (SMOKE ZONE MARKING, FLARES,
   * MIRROR, GLIDE ANGLE INDICATOR LIGHT, LIGHT ZONE MARKING, PANELS, FIRE, LASER
   * DESIGNATOR, STROBE LIGHTS, VEHICLE LIGHTS, COLORED SMOKE, WHITE PHOSPHERUS,
   * INFRARED, ILLUMINATION, FRATRICIDE FENCE).
   */
  zoneMarking?: string;

  /**
   * Color used for the pickup site marking (RED, WHITE, BLUE, YELLOW, GREEN, ORANGE,
   * BLACK, PURPLE, BROWN, TAN, GRAY, SILVER, CAMOUFLAGE, OTHER COLOR).
   */
  zoneMarkingColor?: string;

  /**
   * The name of the zone.
   */
  zoneName?: string;

  /**
   * The pickup site security (UNKNOWN ZONESECURITY, NO ENEMY, POSSIBLE ENEMY, ENEMY
   * IN AREA USE CAUTION, ENEMY IN AREA ARMED ESCORT REQUIRED).
   */
  zoneSecurity?: string;
}

export namespace EvacCreateParams {
  export interface CasualtyInfo {
    /**
     * The patient age, in years.
     */
    age?: number;

    /**
     * Allergy information.
     */
    allergy?: Array<CasualtyInfo.Allergy>;

    /**
     * The patient blood type (A POS, B POS, AB POS, O POS, A NEG, B NEG, AB NEG, O
     * NEG).
     */
    bloodType?: string;

    /**
     * The body part involved for the patient (HEAD, NECK, ABDOMEN, UPPER EXTREMITIES,
     * BACK, FACE, LOWER EXTREMITIES, FRONT, OBSTETRICAL GYNECOLOGICAL, OTHER BODY
     * PART).
     */
    bodyPart?: string;

    /**
     * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
     * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
     * degrees, and altitude, in meters, of the burial location. This array must
     * contain a minimum of 2 elements (latitude and longitude), and may contain an
     * optional 3rd element (altitude).
     */
    burialLocation?: Array<number>;

    /**
     * The call sign of this patient.
     */
    callSign?: string;

    /**
     * Unique identifier for the patient care provider.
     */
    careProviderUrn?: string;

    /**
     * Optional casualty key.
     */
    casualtyKey?: string;

    /**
     * The type of medical issue resulting in the need to evacuate the patient (NON
     * BATTLE, CUT, BURN, SICK, FRACTURE, AMPUTATION, PERFORATION, NUCLEAR, EXHAUSTION,
     * BIOLOGICAL, CHEMICAL, SHOCK, PUNCTURE WOUND, OTHER CUT, WOUNDED IN ACTION,
     * DENIAL, COMBAT STRESS).
     */
    casualtyType?: string;

    /**
     * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
     * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
     * degrees, and altitude, in meters, of the collection point. This array must
     * contain a minimum of 2 elements (latitude and longitude), and may contain an
     * optional 3rd element (altitude).
     */
    collectionPoint?: Array<number>;

    /**
     * Additional comments on the patient's casualty information.
     */
    comments?: string;

    /**
     * Health condition information.
     */
    condition?: Array<CasualtyInfo.Condition>;

    /**
     * The contamination specified for the patient (NONE, RADIATION, BIOLOGICAL,
     * CHEMICAL).
     */
    contamType?: string;

    /**
     * The patient's general medical state (SICK IN QUARTERS, RETURN TO DUTY, EVACUATE
     * WOUNDED, EVACUATE DECEASED, INTERRED).
     */
    disposition?: string;

    /**
     * The expected disposition of this patient (R T D, EVACUATE, EVACUATE TO FORWARD
     * SURGICAL TEAM, EVACUATE TO COMBAT SUPPORT HOSPITAL, EVACUATE TO AERO MEDICAL
     * STAGING FACILITY, EVACUATE TO SUSTAINING BASE MEDICAL TREATMENT FACILITY).
     */
    dispositionType?: string;

    /**
     * Medical condition causation information.
     */
    etiology?: Array<CasualtyInfo.Etiology>;

    /**
     * The required evacuation method for this patient (AIR, GROUND, NOT EVACUATED).
     */
    evacType?: string;

    /**
     * The patient sex (MALE, FEMALE).
     */
    gender?: string;

    /**
     * Health state information.
     */
    healthState?: Array<CasualtyInfo.HealthState>;

    /**
     * Injury specifics.
     */
    injury?: Array<CasualtyInfo.Injury>;

    /**
     * Last 4 characters of the patient social security code, or equivalent.
     */
    last4SSN?: string;

    /**
     * Medication specifics.
     */
    medication?: Array<CasualtyInfo.Medication>;

    /**
     * The patient common or legal name.
     */
    name?: string;

    /**
     * The country code indicating the citizenship of the patient.
     */
    nationality?: string;

    /**
     * The career field of this patient.
     */
    occSpeciality?: string;

    /**
     * The patient service identity (UNKNOWN MILITARY, UNKNOWN CIVILIAN, FRIEND
     * MILITARY, FRIEND CIVILIAN, NEUTRAL MILITARY, NEUTRAL CIVILIAN, HOSTILE MILITARY,
     * HOSTILE CIVILIAN).
     */
    patientIdentity?: string;

    /**
     * The patient service status (US MILITARY, US CIVILIAN, NON US MILITARY, NON US
     * CIVILIAN, ENEMY POW).
     */
    patientStatus?: string;

    /**
     * The patient pay grade or rank designation (O-10, O-9, O-8, O-7, O-6, O-5, O-4,
     * O-3, O-2, O-1, CWO-5, CWO-4, CWO-2, CWO-1, E -9, E-8, E-7, E-6, E-5, E-4, E-3,
     * E-2, E-1, NONE, CIVILIAN).
     */
    payGrade?: string;

    /**
     * The priority of the medevac mission for this patient (URGENT, PRIORITY, ROUTINE,
     * URGENT SURGERY, CONVENIENCE).
     */
    priority?: string;

    /**
     * The method used to generate this medevac report (DEVICE, GROUND COMBAT
     * PERSONNEL, EVACUATION PERSONNEL, ECHELON1 PERSONNEL, ECHELON2 PERSONNEL).
     */
    reportGen?: string;

    /**
     * Datetime of the compiling of the patients casualty report, in ISO 8601 UTC
     * format.
     */
    reportTime?: string;

    /**
     * The patient branch of service (AIR FORCE, ARMY, NAVY, MARINES, CIV, CONTR,
     * UNKNOWN SERVICE).
     */
    service?: string;

    /**
     * Array specifying if any special equipment is need for each of the evacuation of
     * this patient (EXTRACTION EQUIPMENT, SEMI RIGID LITTER, BACKBOARD, CERVICAL
     * COLLAR ,JUNGLE PENETRATOR, OXYGEN, WHOLE BLOOD, VENTILATOR, HOIST, NONE).
     */
    specMedEquip?: Array<string>;

    /**
     * Treatment information.
     */
    treatment?: Array<CasualtyInfo.Treatment>;

    /**
     * Information obtained for vital signs.
     */
    vitalSignData?: Array<CasualtyInfo.VitalSignData>;
  }

  export namespace CasualtyInfo {
    export interface Allergy {
      /**
       * Additional comments on the patient's allergy information.
       */
      comments?: string;

      /**
       * Type of patient allergy (e.g. PENICILLIN, SULFA, OTHER).
       */
      type?: string;
    }

    export interface Condition {
      /**
       * Body part location or body part referenced in condition. Intended as, but not
       * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
       * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
       * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
       */
      bodyPart?: string;

      /**
       * Additional comments on the patient's condition.
       */
      comments?: string;

      /**
       * Datetime of the condition diagnosis in ISO 8601 UTC datetime format.
       */
      time?: string;

      /**
       * Health condition assessment. Intended as, but not constrained to, K07.1
       * Condition Type Enumeration (e.g. ACTIVITY HIGH, ACTIVITY LOW, ACTIVITY MEDIUM,
       * ACTIVITY NONE, AVPU ALERT, AVPU ALTERED MENTAL STATE, AVPU PAIN, AVPU
       * UNRESPONSIVE, etc.).
       */
      type?: string;
    }

    export interface Etiology {
      /**
       * The body part or location affected from the etiology. Intended as, but not
       * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
       * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
       * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
       */
      bodyPart?: string;

      /**
       * Additional comments on the patient's etiology information.
       */
      comments?: string;

      /**
       * Datetime of the discovery of the etiology state in ISO 8601 UTC format.
       */
      time?: string;

      /**
       * The cause or manner of causation of the medical condition. Intended as, but not
       * constrained to, K07.1 EtiologyType Enumeration (e.g. ASSAULT, BUILDING COLLAPSE,
       * BURN CHEMICAL, BURN ELECTRICAL, BURN, BURN HOT LIQUID, BURN RADIATION, BURN
       * THERMAL, etc.).
       */
      type?: string;
    }

    export interface HealthState {
      /**
       * Medical color code used to quickly identify various medical state (e.g. AMBER,
       * BLACK, BLUE, GRAY, NORMAL, RED).
       */
      healthStateCode?: string;

      /**
       * Medical confidence factor.
       */
      medConfFactor?: number;

      /**
       * Datetime of the health state diagnosis in ISO 8601 UTC datetime format.
       */
      time?: string;

      /**
       * Generalized state of health type (BIOLOGICAL, CHEMICAL, COGNITIVE, HYDRATION,
       * LIFE SIGN, RADIATION, SHOCK, THERMAL).
       */
      type?: string;
    }

    export interface Injury {
      /**
       * Body part location of the injury. Intended as, but not constrained to, K07.1
       * Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE LEFT FRONT, ANKLE RIGHT
       * BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW BACK, ARM LEFT ELBOW
       * FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
       */
      bodyPart?: string;

      /**
       * Additional comments on the patient's injury information.
       */
      comments?: string;

      /**
       * The time of the injury, in ISO 8601 UTC format.
       */
      time?: string;

      /**
       * Classification of the injury type (ABRASION, AMPUTATION IT, AVULATION,
       * BALLISTIC, BLAST WAVE, BURN 1ST DEGREE, BURN 2ND DEGREE, BURN 3RD DEGREE, BURN
       * INHALATION, BURN LOWER AIRWAY, CHEST FLAIL, CHEST OPEN, DEGLOVING, ECCHYMOSIS,
       * FRACTURE CLOSED, FRACTURE CREPITUS, FRACTURE IT, FRACTURE OPEN, HEMATOMA,
       * IRREGULAR CONSISTENCY, IRREGULAR CONSISTENCY RIDGED, IRREGULAR CONSISTENCY
       * SWOLLEN, IRREGULAR CONSISTENCY SWOLLEN DISTENDED, IRREGULAR CONSISTENCY TENDER,
       * IRREGULAR POSITION, IRREGULAR SHAPE, IRREGULAR SHAPE MISSHAPED, IRREGULAR SHAPE
       * NON SYMMETRICAL, LACERATION, NEUROVASCULAR COMPROMISE, NEUROVASCULAR INTACT,
       * PUNCTURE, SEAT BELT SIGN, STAB, TIC TIM).
       */
      type?: string;
    }

    export interface Medication {
      /**
       * Route of medication delivery (e.g. INJECTION, ORAL, etc.).
       */
      adminRoute?: string;

      /**
       * Body part location or body part referenced for medication. Intended as, but not
       * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
       * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
       * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
       */
      bodyPart?: string;

      /**
       * Additional comments on the patient's medication information.
       */
      comments?: string;

      /**
       * Quantity of medicine or drug administered or recommended to be taken at a
       * particular time.
       */
      dose?: string;

      /**
       * The time that the medication was administered in ISO 8601 UTC format.
       */
      time?: string;

      /**
       * The type of medication administered. Intended as, but not constrained to, K07.1
       * Medication Enumeration (CEFOTETAN, ABRASION, ABX, AMOXILOXACIN, ANALGESIC,
       * COLLOID, CRYOPECIPITATES, CRYSTALLOID, EPINEPHRINE, ERTAPENEM, FENTANYL,
       * HEXTEND, LACTATED RINGERS, MOBIC, MORPHINE, NARCOTIC, NS, PENICILLIN, PLASMA,
       * PLATELETS, PRBC, TYLENOL, WHOLE BLOOD MT).
       */
      type?: string;
    }

    export interface Treatment {
      /**
       * Body part location or body part treated or to be treated. Intended as, but not
       * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
       * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
       * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
       */
      bodyPart?: string;

      /**
       * Additional comments on the patient's treatment information.
       */
      comments?: string;

      /**
       * Datetime of the treatment in ISO 8601 UTC format.
       */
      time?: string;

      /**
       * Type of treatment administered or to be administered. Intended as, but not
       * constrained to, K07.1 Treatment Type Enumeration (e.g. AIRWAY ADJUNCT, AIRWAY
       * ASSISTED VENTILATION, AIRWAY COMBI TUBE USED, AIRWAY ET NT, AIRWAY INTUBATED,
       * AIRWAY NPA OPA APPLIED, AIRWAY PATIENT, AIRWAY POSITIONAL, AIRWAY SURGICAL CRIC,
       * BREATHING CHEST SEAL, BREATHING CHEST TUBE, etc.).
       */
      type?: string;
    }

    export interface VitalSignData {
      /**
       * Medical confidence factor.
       */
      medConfFactor?: number;

      /**
       * Datetime of the vital sign measurement in ISO 8601 UTC datetime format.
       */
      time?: string;

      /**
       * Patient vital sign measured (e.g. HEART RATE, PULSE RATE, RESPIRATION RATE,
       * TEMPERATURE CORE, etc.).
       */
      vitalSign?: string;

      /**
       * Vital sign value 1. The content of this field is dependent on the type of vital
       * sign being measured (see the vitalSign field).
       */
      vitalSign1?: number;

      /**
       * Vital sign value 2. The content of this field is dependent on the type of vital
       * sign being measured (see the vitalSign field).
       */
      vitalSign2?: number;
    }
  }

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

export interface EvacRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface EvacListParams extends OffsetPageParams {
  /**
   * The request time, in ISO 8601 UTC format. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reqTime: string;
}

export interface EvacCountParams {
  /**
   * The request time, in ISO 8601 UTC format. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  reqTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface EvacCreateBulkParams {
  body: Array<EvacCreateBulkParams.Body>;
}

export namespace EvacCreateBulkParams {
  /**
   * Casualty report and evacuation request. Used to report and request support to
   * evacuate friendly and enemy casualties.
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
     * The request time, in ISO 8601 UTC format.
     */
    reqTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The type of this medevac record (REQUEST, RESPONSE).
     */
    type: 'REQUEST' | 'RESPONSE';

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Identity and medical information on the patient to be evacuated.
     */
    casualtyInfo?: Array<Body.CasualtyInfo>;

    /**
     * Radius of circular area about lat/lon point, in meters (1-sigma, if representing
     * error).
     */
    ce?: number;

    /**
     * The contact frequency, in Hz, of the agency or zone controller.
     */
    cntctFreq?: number;

    /**
     * Additional comments for the medevac mission.
     */
    comments?: string;

    /**
     * Data defining any enemy intelligence reported by the requestor.
     */
    enemyData?: Array<Body.EnemyData>;

    /**
     * Unique identifier of a weather report associated with this evacuation.
     */
    idWeatherReport?: string;

    /**
     * Height above lat/lon point, in meters (1-sigma, if representing linear error).
     */
    le?: number;

    /**
     * UUID identifying the medevac mission, which should remain the same on subsequent
     * posts related to the same medevac mission.
     */
    medevacId?: string;

    /**
     * Flag indicating whether the mission requires medical personnel.
     */
    medicReq?: boolean;

    /**
     * The operation type of the evacuation. (NOT SPECIFIED, AIR, GROUND, SURFACE).
     */
    missionType?: string;

    /**
     * Number of ambulatory personnel requiring evacuation.
     */
    numAmbulatory?: number;

    /**
     * The count of people requiring medevac.
     */
    numCasualties?: number;

    /**
     * Number of people Killed In Action.
     */
    numKIA?: number;

    /**
     * Number of littered personnel requiring evacuation.
     */
    numLitter?: number;

    /**
     * Number of people Wounded In Action.
     */
    numWIA?: number;

    /**
     * Amplifying data for the terrain describing important obstacles in or around the
     * zone.
     */
    obstaclesRemarks?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Altitude relative to WGS-84 ellipsoid, in meters. Positive values indicate a
     * point height above ellipsoid, and negative values indicate a point height below
     * ellipsoid.
     */
    pickupAlt?: number;

    /**
     * The expected pickup time, in ISO 8601 UTC format.
     */
    pickupTime?: string;

    /**
     * The call sign of this medevac requestor.
     */
    reqCallSign?: string;

    /**
     * Externally provided Medevac request number (e.g. MED.1.223908).
     */
    reqNum?: string;

    /**
     * Short description of the terrain features of the pickup location (WOODS, TREES,
     * PLOWED FIELDS, FLAT, STANDING WATER, MARSH, URBAN BUILT-UP AREA, MOUNTAIN, HILL,
     * SAND TD, ROCKY, VALLEY, METAMORPHIC ICE, UNKNOWN TD, SEA, NO STATEMENT).
     */
    terrain?: string;

    /**
     * Amplifying data for the terrain describing any notable additional terrain
     * features.
     */
    terrainRemarks?: string;

    /**
     * The call sign of the zone controller.
     */
    zoneContrCallSign?: string;

    /**
     * Flag indicating that the pickup site is hot and hostiles are in the area.
     */
    zoneHot?: boolean;

    /**
     * The expected marker identifying the pickup site (SMOKE ZONE MARKING, FLARES,
     * MIRROR, GLIDE ANGLE INDICATOR LIGHT, LIGHT ZONE MARKING, PANELS, FIRE, LASER
     * DESIGNATOR, STROBE LIGHTS, VEHICLE LIGHTS, COLORED SMOKE, WHITE PHOSPHERUS,
     * INFRARED, ILLUMINATION, FRATRICIDE FENCE).
     */
    zoneMarking?: string;

    /**
     * Color used for the pickup site marking (RED, WHITE, BLUE, YELLOW, GREEN, ORANGE,
     * BLACK, PURPLE, BROWN, TAN, GRAY, SILVER, CAMOUFLAGE, OTHER COLOR).
     */
    zoneMarkingColor?: string;

    /**
     * The name of the zone.
     */
    zoneName?: string;

    /**
     * The pickup site security (UNKNOWN ZONESECURITY, NO ENEMY, POSSIBLE ENEMY, ENEMY
     * IN AREA USE CAUTION, ENEMY IN AREA ARMED ESCORT REQUIRED).
     */
    zoneSecurity?: string;
  }

  export namespace Body {
    export interface CasualtyInfo {
      /**
       * The patient age, in years.
       */
      age?: number;

      /**
       * Allergy information.
       */
      allergy?: Array<CasualtyInfo.Allergy>;

      /**
       * The patient blood type (A POS, B POS, AB POS, O POS, A NEG, B NEG, AB NEG, O
       * NEG).
       */
      bloodType?: string;

      /**
       * The body part involved for the patient (HEAD, NECK, ABDOMEN, UPPER EXTREMITIES,
       * BACK, FACE, LOWER EXTREMITIES, FRONT, OBSTETRICAL GYNECOLOGICAL, OTHER BODY
       * PART).
       */
      bodyPart?: string;

      /**
       * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
       * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
       * degrees, and altitude, in meters, of the burial location. This array must
       * contain a minimum of 2 elements (latitude and longitude), and may contain an
       * optional 3rd element (altitude).
       */
      burialLocation?: Array<number>;

      /**
       * The call sign of this patient.
       */
      callSign?: string;

      /**
       * Unique identifier for the patient care provider.
       */
      careProviderUrn?: string;

      /**
       * Optional casualty key.
       */
      casualtyKey?: string;

      /**
       * The type of medical issue resulting in the need to evacuate the patient (NON
       * BATTLE, CUT, BURN, SICK, FRACTURE, AMPUTATION, PERFORATION, NUCLEAR, EXHAUSTION,
       * BIOLOGICAL, CHEMICAL, SHOCK, PUNCTURE WOUND, OTHER CUT, WOUNDED IN ACTION,
       * DENIAL, COMBAT STRESS).
       */
      casualtyType?: string;

      /**
       * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
       * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
       * degrees, and altitude, in meters, of the collection point. This array must
       * contain a minimum of 2 elements (latitude and longitude), and may contain an
       * optional 3rd element (altitude).
       */
      collectionPoint?: Array<number>;

      /**
       * Additional comments on the patient's casualty information.
       */
      comments?: string;

      /**
       * Health condition information.
       */
      condition?: Array<CasualtyInfo.Condition>;

      /**
       * The contamination specified for the patient (NONE, RADIATION, BIOLOGICAL,
       * CHEMICAL).
       */
      contamType?: string;

      /**
       * The patient's general medical state (SICK IN QUARTERS, RETURN TO DUTY, EVACUATE
       * WOUNDED, EVACUATE DECEASED, INTERRED).
       */
      disposition?: string;

      /**
       * The expected disposition of this patient (R T D, EVACUATE, EVACUATE TO FORWARD
       * SURGICAL TEAM, EVACUATE TO COMBAT SUPPORT HOSPITAL, EVACUATE TO AERO MEDICAL
       * STAGING FACILITY, EVACUATE TO SUSTAINING BASE MEDICAL TREATMENT FACILITY).
       */
      dispositionType?: string;

      /**
       * Medical condition causation information.
       */
      etiology?: Array<CasualtyInfo.Etiology>;

      /**
       * The required evacuation method for this patient (AIR, GROUND, NOT EVACUATED).
       */
      evacType?: string;

      /**
       * The patient sex (MALE, FEMALE).
       */
      gender?: string;

      /**
       * Health state information.
       */
      healthState?: Array<CasualtyInfo.HealthState>;

      /**
       * Injury specifics.
       */
      injury?: Array<CasualtyInfo.Injury>;

      /**
       * Last 4 characters of the patient social security code, or equivalent.
       */
      last4SSN?: string;

      /**
       * Medication specifics.
       */
      medication?: Array<CasualtyInfo.Medication>;

      /**
       * The patient common or legal name.
       */
      name?: string;

      /**
       * The country code indicating the citizenship of the patient.
       */
      nationality?: string;

      /**
       * The career field of this patient.
       */
      occSpeciality?: string;

      /**
       * The patient service identity (UNKNOWN MILITARY, UNKNOWN CIVILIAN, FRIEND
       * MILITARY, FRIEND CIVILIAN, NEUTRAL MILITARY, NEUTRAL CIVILIAN, HOSTILE MILITARY,
       * HOSTILE CIVILIAN).
       */
      patientIdentity?: string;

      /**
       * The patient service status (US MILITARY, US CIVILIAN, NON US MILITARY, NON US
       * CIVILIAN, ENEMY POW).
       */
      patientStatus?: string;

      /**
       * The patient pay grade or rank designation (O-10, O-9, O-8, O-7, O-6, O-5, O-4,
       * O-3, O-2, O-1, CWO-5, CWO-4, CWO-2, CWO-1, E -9, E-8, E-7, E-6, E-5, E-4, E-3,
       * E-2, E-1, NONE, CIVILIAN).
       */
      payGrade?: string;

      /**
       * The priority of the medevac mission for this patient (URGENT, PRIORITY, ROUTINE,
       * URGENT SURGERY, CONVENIENCE).
       */
      priority?: string;

      /**
       * The method used to generate this medevac report (DEVICE, GROUND COMBAT
       * PERSONNEL, EVACUATION PERSONNEL, ECHELON1 PERSONNEL, ECHELON2 PERSONNEL).
       */
      reportGen?: string;

      /**
       * Datetime of the compiling of the patients casualty report, in ISO 8601 UTC
       * format.
       */
      reportTime?: string;

      /**
       * The patient branch of service (AIR FORCE, ARMY, NAVY, MARINES, CIV, CONTR,
       * UNKNOWN SERVICE).
       */
      service?: string;

      /**
       * Array specifying if any special equipment is need for each of the evacuation of
       * this patient (EXTRACTION EQUIPMENT, SEMI RIGID LITTER, BACKBOARD, CERVICAL
       * COLLAR ,JUNGLE PENETRATOR, OXYGEN, WHOLE BLOOD, VENTILATOR, HOIST, NONE).
       */
      specMedEquip?: Array<string>;

      /**
       * Treatment information.
       */
      treatment?: Array<CasualtyInfo.Treatment>;

      /**
       * Information obtained for vital signs.
       */
      vitalSignData?: Array<CasualtyInfo.VitalSignData>;
    }

    export namespace CasualtyInfo {
      export interface Allergy {
        /**
         * Additional comments on the patient's allergy information.
         */
        comments?: string;

        /**
         * Type of patient allergy (e.g. PENICILLIN, SULFA, OTHER).
         */
        type?: string;
      }

      export interface Condition {
        /**
         * Body part location or body part referenced in condition. Intended as, but not
         * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
         * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
         * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
         */
        bodyPart?: string;

        /**
         * Additional comments on the patient's condition.
         */
        comments?: string;

        /**
         * Datetime of the condition diagnosis in ISO 8601 UTC datetime format.
         */
        time?: string;

        /**
         * Health condition assessment. Intended as, but not constrained to, K07.1
         * Condition Type Enumeration (e.g. ACTIVITY HIGH, ACTIVITY LOW, ACTIVITY MEDIUM,
         * ACTIVITY NONE, AVPU ALERT, AVPU ALTERED MENTAL STATE, AVPU PAIN, AVPU
         * UNRESPONSIVE, etc.).
         */
        type?: string;
      }

      export interface Etiology {
        /**
         * The body part or location affected from the etiology. Intended as, but not
         * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
         * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
         * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
         */
        bodyPart?: string;

        /**
         * Additional comments on the patient's etiology information.
         */
        comments?: string;

        /**
         * Datetime of the discovery of the etiology state in ISO 8601 UTC format.
         */
        time?: string;

        /**
         * The cause or manner of causation of the medical condition. Intended as, but not
         * constrained to, K07.1 EtiologyType Enumeration (e.g. ASSAULT, BUILDING COLLAPSE,
         * BURN CHEMICAL, BURN ELECTRICAL, BURN, BURN HOT LIQUID, BURN RADIATION, BURN
         * THERMAL, etc.).
         */
        type?: string;
      }

      export interface HealthState {
        /**
         * Medical color code used to quickly identify various medical state (e.g. AMBER,
         * BLACK, BLUE, GRAY, NORMAL, RED).
         */
        healthStateCode?: string;

        /**
         * Medical confidence factor.
         */
        medConfFactor?: number;

        /**
         * Datetime of the health state diagnosis in ISO 8601 UTC datetime format.
         */
        time?: string;

        /**
         * Generalized state of health type (BIOLOGICAL, CHEMICAL, COGNITIVE, HYDRATION,
         * LIFE SIGN, RADIATION, SHOCK, THERMAL).
         */
        type?: string;
      }

      export interface Injury {
        /**
         * Body part location of the injury. Intended as, but not constrained to, K07.1
         * Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE LEFT FRONT, ANKLE RIGHT
         * BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW BACK, ARM LEFT ELBOW
         * FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
         */
        bodyPart?: string;

        /**
         * Additional comments on the patient's injury information.
         */
        comments?: string;

        /**
         * The time of the injury, in ISO 8601 UTC format.
         */
        time?: string;

        /**
         * Classification of the injury type (ABRASION, AMPUTATION IT, AVULATION,
         * BALLISTIC, BLAST WAVE, BURN 1ST DEGREE, BURN 2ND DEGREE, BURN 3RD DEGREE, BURN
         * INHALATION, BURN LOWER AIRWAY, CHEST FLAIL, CHEST OPEN, DEGLOVING, ECCHYMOSIS,
         * FRACTURE CLOSED, FRACTURE CREPITUS, FRACTURE IT, FRACTURE OPEN, HEMATOMA,
         * IRREGULAR CONSISTENCY, IRREGULAR CONSISTENCY RIDGED, IRREGULAR CONSISTENCY
         * SWOLLEN, IRREGULAR CONSISTENCY SWOLLEN DISTENDED, IRREGULAR CONSISTENCY TENDER,
         * IRREGULAR POSITION, IRREGULAR SHAPE, IRREGULAR SHAPE MISSHAPED, IRREGULAR SHAPE
         * NON SYMMETRICAL, LACERATION, NEUROVASCULAR COMPROMISE, NEUROVASCULAR INTACT,
         * PUNCTURE, SEAT BELT SIGN, STAB, TIC TIM).
         */
        type?: string;
      }

      export interface Medication {
        /**
         * Route of medication delivery (e.g. INJECTION, ORAL, etc.).
         */
        adminRoute?: string;

        /**
         * Body part location or body part referenced for medication. Intended as, but not
         * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
         * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
         * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
         */
        bodyPart?: string;

        /**
         * Additional comments on the patient's medication information.
         */
        comments?: string;

        /**
         * Quantity of medicine or drug administered or recommended to be taken at a
         * particular time.
         */
        dose?: string;

        /**
         * The time that the medication was administered in ISO 8601 UTC format.
         */
        time?: string;

        /**
         * The type of medication administered. Intended as, but not constrained to, K07.1
         * Medication Enumeration (CEFOTETAN, ABRASION, ABX, AMOXILOXACIN, ANALGESIC,
         * COLLOID, CRYOPECIPITATES, CRYSTALLOID, EPINEPHRINE, ERTAPENEM, FENTANYL,
         * HEXTEND, LACTATED RINGERS, MOBIC, MORPHINE, NARCOTIC, NS, PENICILLIN, PLASMA,
         * PLATELETS, PRBC, TYLENOL, WHOLE BLOOD MT).
         */
        type?: string;
      }

      export interface Treatment {
        /**
         * Body part location or body part treated or to be treated. Intended as, but not
         * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
         * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
         * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
         */
        bodyPart?: string;

        /**
         * Additional comments on the patient's treatment information.
         */
        comments?: string;

        /**
         * Datetime of the treatment in ISO 8601 UTC format.
         */
        time?: string;

        /**
         * Type of treatment administered or to be administered. Intended as, but not
         * constrained to, K07.1 Treatment Type Enumeration (e.g. AIRWAY ADJUNCT, AIRWAY
         * ASSISTED VENTILATION, AIRWAY COMBI TUBE USED, AIRWAY ET NT, AIRWAY INTUBATED,
         * AIRWAY NPA OPA APPLIED, AIRWAY PATIENT, AIRWAY POSITIONAL, AIRWAY SURGICAL CRIC,
         * BREATHING CHEST SEAL, BREATHING CHEST TUBE, etc.).
         */
        type?: string;
      }

      export interface VitalSignData {
        /**
         * Medical confidence factor.
         */
        medConfFactor?: number;

        /**
         * Datetime of the vital sign measurement in ISO 8601 UTC datetime format.
         */
        time?: string;

        /**
         * Patient vital sign measured (e.g. HEART RATE, PULSE RATE, RESPIRATION RATE,
         * TEMPERATURE CORE, etc.).
         */
        vitalSign?: string;

        /**
         * Vital sign value 1. The content of this field is dependent on the type of vital
         * sign being measured (see the vitalSign field).
         */
        vitalSign1?: number;

        /**
         * Vital sign value 2. The content of this field is dependent on the type of vital
         * sign being measured (see the vitalSign field).
         */
        vitalSign2?: number;
      }
    }

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

export interface EvacUnvalidatedPublishParams {
  body: Array<EvacUnvalidatedPublishParams.Body>;
}

export namespace EvacUnvalidatedPublishParams {
  /**
   * Casualty report and evacuation request. Used to report and request support to
   * evacuate friendly and enemy casualties.
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
     * The request time, in ISO 8601 UTC format.
     */
    reqTime: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The type of this medevac record (REQUEST, RESPONSE).
     */
    type: 'REQUEST' | 'RESPONSE';

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Identity and medical information on the patient to be evacuated.
     */
    casualtyInfo?: Array<Body.CasualtyInfo>;

    /**
     * Radius of circular area about lat/lon point, in meters (1-sigma, if representing
     * error).
     */
    ce?: number;

    /**
     * The contact frequency, in Hz, of the agency or zone controller.
     */
    cntctFreq?: number;

    /**
     * Additional comments for the medevac mission.
     */
    comments?: string;

    /**
     * Data defining any enemy intelligence reported by the requestor.
     */
    enemyData?: Array<Body.EnemyData>;

    /**
     * Unique identifier of a weather report associated with this evacuation.
     */
    idWeatherReport?: string;

    /**
     * Height above lat/lon point, in meters (1-sigma, if representing linear error).
     */
    le?: number;

    /**
     * UUID identifying the medevac mission, which should remain the same on subsequent
     * posts related to the same medevac mission.
     */
    medevacId?: string;

    /**
     * Flag indicating whether the mission requires medical personnel.
     */
    medicReq?: boolean;

    /**
     * The operation type of the evacuation. (NOT SPECIFIED, AIR, GROUND, SURFACE).
     */
    missionType?: string;

    /**
     * Number of ambulatory personnel requiring evacuation.
     */
    numAmbulatory?: number;

    /**
     * The count of people requiring medevac.
     */
    numCasualties?: number;

    /**
     * Number of people Killed In Action.
     */
    numKIA?: number;

    /**
     * Number of littered personnel requiring evacuation.
     */
    numLitter?: number;

    /**
     * Number of people Wounded In Action.
     */
    numWIA?: number;

    /**
     * Amplifying data for the terrain describing important obstacles in or around the
     * zone.
     */
    obstaclesRemarks?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Altitude relative to WGS-84 ellipsoid, in meters. Positive values indicate a
     * point height above ellipsoid, and negative values indicate a point height below
     * ellipsoid.
     */
    pickupAlt?: number;

    /**
     * The expected pickup time, in ISO 8601 UTC format.
     */
    pickupTime?: string;

    /**
     * The call sign of this medevac requestor.
     */
    reqCallSign?: string;

    /**
     * Externally provided Medevac request number (e.g. MED.1.223908).
     */
    reqNum?: string;

    /**
     * Short description of the terrain features of the pickup location (WOODS, TREES,
     * PLOWED FIELDS, FLAT, STANDING WATER, MARSH, URBAN BUILT-UP AREA, MOUNTAIN, HILL,
     * SAND TD, ROCKY, VALLEY, METAMORPHIC ICE, UNKNOWN TD, SEA, NO STATEMENT).
     */
    terrain?: string;

    /**
     * Amplifying data for the terrain describing any notable additional terrain
     * features.
     */
    terrainRemarks?: string;

    /**
     * The call sign of the zone controller.
     */
    zoneContrCallSign?: string;

    /**
     * Flag indicating that the pickup site is hot and hostiles are in the area.
     */
    zoneHot?: boolean;

    /**
     * The expected marker identifying the pickup site (SMOKE ZONE MARKING, FLARES,
     * MIRROR, GLIDE ANGLE INDICATOR LIGHT, LIGHT ZONE MARKING, PANELS, FIRE, LASER
     * DESIGNATOR, STROBE LIGHTS, VEHICLE LIGHTS, COLORED SMOKE, WHITE PHOSPHERUS,
     * INFRARED, ILLUMINATION, FRATRICIDE FENCE).
     */
    zoneMarking?: string;

    /**
     * Color used for the pickup site marking (RED, WHITE, BLUE, YELLOW, GREEN, ORANGE,
     * BLACK, PURPLE, BROWN, TAN, GRAY, SILVER, CAMOUFLAGE, OTHER COLOR).
     */
    zoneMarkingColor?: string;

    /**
     * The name of the zone.
     */
    zoneName?: string;

    /**
     * The pickup site security (UNKNOWN ZONESECURITY, NO ENEMY, POSSIBLE ENEMY, ENEMY
     * IN AREA USE CAUTION, ENEMY IN AREA ARMED ESCORT REQUIRED).
     */
    zoneSecurity?: string;
  }

  export namespace Body {
    export interface CasualtyInfo {
      /**
       * The patient age, in years.
       */
      age?: number;

      /**
       * Allergy information.
       */
      allergy?: Array<CasualtyInfo.Allergy>;

      /**
       * The patient blood type (A POS, B POS, AB POS, O POS, A NEG, B NEG, AB NEG, O
       * NEG).
       */
      bloodType?: string;

      /**
       * The body part involved for the patient (HEAD, NECK, ABDOMEN, UPPER EXTREMITIES,
       * BACK, FACE, LOWER EXTREMITIES, FRONT, OBSTETRICAL GYNECOLOGICAL, OTHER BODY
       * PART).
       */
      bodyPart?: string;

      /**
       * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
       * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
       * degrees, and altitude, in meters, of the burial location. This array must
       * contain a minimum of 2 elements (latitude and longitude), and may contain an
       * optional 3rd element (altitude).
       */
      burialLocation?: Array<number>;

      /**
       * The call sign of this patient.
       */
      callSign?: string;

      /**
       * Unique identifier for the patient care provider.
       */
      careProviderUrn?: string;

      /**
       * Optional casualty key.
       */
      casualtyKey?: string;

      /**
       * The type of medical issue resulting in the need to evacuate the patient (NON
       * BATTLE, CUT, BURN, SICK, FRACTURE, AMPUTATION, PERFORATION, NUCLEAR, EXHAUSTION,
       * BIOLOGICAL, CHEMICAL, SHOCK, PUNCTURE WOUND, OTHER CUT, WOUNDED IN ACTION,
       * DENIAL, COMBAT STRESS).
       */
      casualtyType?: string;

      /**
       * Array of the WGS-84 latitude (-90 to 90, negative values south of the equator)
       * in degrees, longitude (-180 to 180, negative values west of Prime Meridian) in
       * degrees, and altitude, in meters, of the collection point. This array must
       * contain a minimum of 2 elements (latitude and longitude), and may contain an
       * optional 3rd element (altitude).
       */
      collectionPoint?: Array<number>;

      /**
       * Additional comments on the patient's casualty information.
       */
      comments?: string;

      /**
       * Health condition information.
       */
      condition?: Array<CasualtyInfo.Condition>;

      /**
       * The contamination specified for the patient (NONE, RADIATION, BIOLOGICAL,
       * CHEMICAL).
       */
      contamType?: string;

      /**
       * The patient's general medical state (SICK IN QUARTERS, RETURN TO DUTY, EVACUATE
       * WOUNDED, EVACUATE DECEASED, INTERRED).
       */
      disposition?: string;

      /**
       * The expected disposition of this patient (R T D, EVACUATE, EVACUATE TO FORWARD
       * SURGICAL TEAM, EVACUATE TO COMBAT SUPPORT HOSPITAL, EVACUATE TO AERO MEDICAL
       * STAGING FACILITY, EVACUATE TO SUSTAINING BASE MEDICAL TREATMENT FACILITY).
       */
      dispositionType?: string;

      /**
       * Medical condition causation information.
       */
      etiology?: Array<CasualtyInfo.Etiology>;

      /**
       * The required evacuation method for this patient (AIR, GROUND, NOT EVACUATED).
       */
      evacType?: string;

      /**
       * The patient sex (MALE, FEMALE).
       */
      gender?: string;

      /**
       * Health state information.
       */
      healthState?: Array<CasualtyInfo.HealthState>;

      /**
       * Injury specifics.
       */
      injury?: Array<CasualtyInfo.Injury>;

      /**
       * Last 4 characters of the patient social security code, or equivalent.
       */
      last4SSN?: string;

      /**
       * Medication specifics.
       */
      medication?: Array<CasualtyInfo.Medication>;

      /**
       * The patient common or legal name.
       */
      name?: string;

      /**
       * The country code indicating the citizenship of the patient.
       */
      nationality?: string;

      /**
       * The career field of this patient.
       */
      occSpeciality?: string;

      /**
       * The patient service identity (UNKNOWN MILITARY, UNKNOWN CIVILIAN, FRIEND
       * MILITARY, FRIEND CIVILIAN, NEUTRAL MILITARY, NEUTRAL CIVILIAN, HOSTILE MILITARY,
       * HOSTILE CIVILIAN).
       */
      patientIdentity?: string;

      /**
       * The patient service status (US MILITARY, US CIVILIAN, NON US MILITARY, NON US
       * CIVILIAN, ENEMY POW).
       */
      patientStatus?: string;

      /**
       * The patient pay grade or rank designation (O-10, O-9, O-8, O-7, O-6, O-5, O-4,
       * O-3, O-2, O-1, CWO-5, CWO-4, CWO-2, CWO-1, E -9, E-8, E-7, E-6, E-5, E-4, E-3,
       * E-2, E-1, NONE, CIVILIAN).
       */
      payGrade?: string;

      /**
       * The priority of the medevac mission for this patient (URGENT, PRIORITY, ROUTINE,
       * URGENT SURGERY, CONVENIENCE).
       */
      priority?: string;

      /**
       * The method used to generate this medevac report (DEVICE, GROUND COMBAT
       * PERSONNEL, EVACUATION PERSONNEL, ECHELON1 PERSONNEL, ECHELON2 PERSONNEL).
       */
      reportGen?: string;

      /**
       * Datetime of the compiling of the patients casualty report, in ISO 8601 UTC
       * format.
       */
      reportTime?: string;

      /**
       * The patient branch of service (AIR FORCE, ARMY, NAVY, MARINES, CIV, CONTR,
       * UNKNOWN SERVICE).
       */
      service?: string;

      /**
       * Array specifying if any special equipment is need for each of the evacuation of
       * this patient (EXTRACTION EQUIPMENT, SEMI RIGID LITTER, BACKBOARD, CERVICAL
       * COLLAR ,JUNGLE PENETRATOR, OXYGEN, WHOLE BLOOD, VENTILATOR, HOIST, NONE).
       */
      specMedEquip?: Array<string>;

      /**
       * Treatment information.
       */
      treatment?: Array<CasualtyInfo.Treatment>;

      /**
       * Information obtained for vital signs.
       */
      vitalSignData?: Array<CasualtyInfo.VitalSignData>;
    }

    export namespace CasualtyInfo {
      export interface Allergy {
        /**
         * Additional comments on the patient's allergy information.
         */
        comments?: string;

        /**
         * Type of patient allergy (e.g. PENICILLIN, SULFA, OTHER).
         */
        type?: string;
      }

      export interface Condition {
        /**
         * Body part location or body part referenced in condition. Intended as, but not
         * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
         * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
         * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
         */
        bodyPart?: string;

        /**
         * Additional comments on the patient's condition.
         */
        comments?: string;

        /**
         * Datetime of the condition diagnosis in ISO 8601 UTC datetime format.
         */
        time?: string;

        /**
         * Health condition assessment. Intended as, but not constrained to, K07.1
         * Condition Type Enumeration (e.g. ACTIVITY HIGH, ACTIVITY LOW, ACTIVITY MEDIUM,
         * ACTIVITY NONE, AVPU ALERT, AVPU ALTERED MENTAL STATE, AVPU PAIN, AVPU
         * UNRESPONSIVE, etc.).
         */
        type?: string;
      }

      export interface Etiology {
        /**
         * The body part or location affected from the etiology. Intended as, but not
         * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
         * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
         * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
         */
        bodyPart?: string;

        /**
         * Additional comments on the patient's etiology information.
         */
        comments?: string;

        /**
         * Datetime of the discovery of the etiology state in ISO 8601 UTC format.
         */
        time?: string;

        /**
         * The cause or manner of causation of the medical condition. Intended as, but not
         * constrained to, K07.1 EtiologyType Enumeration (e.g. ASSAULT, BUILDING COLLAPSE,
         * BURN CHEMICAL, BURN ELECTRICAL, BURN, BURN HOT LIQUID, BURN RADIATION, BURN
         * THERMAL, etc.).
         */
        type?: string;
      }

      export interface HealthState {
        /**
         * Medical color code used to quickly identify various medical state (e.g. AMBER,
         * BLACK, BLUE, GRAY, NORMAL, RED).
         */
        healthStateCode?: string;

        /**
         * Medical confidence factor.
         */
        medConfFactor?: number;

        /**
         * Datetime of the health state diagnosis in ISO 8601 UTC datetime format.
         */
        time?: string;

        /**
         * Generalized state of health type (BIOLOGICAL, CHEMICAL, COGNITIVE, HYDRATION,
         * LIFE SIGN, RADIATION, SHOCK, THERMAL).
         */
        type?: string;
      }

      export interface Injury {
        /**
         * Body part location of the injury. Intended as, but not constrained to, K07.1
         * Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE LEFT FRONT, ANKLE RIGHT
         * BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW BACK, ARM LEFT ELBOW
         * FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
         */
        bodyPart?: string;

        /**
         * Additional comments on the patient's injury information.
         */
        comments?: string;

        /**
         * The time of the injury, in ISO 8601 UTC format.
         */
        time?: string;

        /**
         * Classification of the injury type (ABRASION, AMPUTATION IT, AVULATION,
         * BALLISTIC, BLAST WAVE, BURN 1ST DEGREE, BURN 2ND DEGREE, BURN 3RD DEGREE, BURN
         * INHALATION, BURN LOWER AIRWAY, CHEST FLAIL, CHEST OPEN, DEGLOVING, ECCHYMOSIS,
         * FRACTURE CLOSED, FRACTURE CREPITUS, FRACTURE IT, FRACTURE OPEN, HEMATOMA,
         * IRREGULAR CONSISTENCY, IRREGULAR CONSISTENCY RIDGED, IRREGULAR CONSISTENCY
         * SWOLLEN, IRREGULAR CONSISTENCY SWOLLEN DISTENDED, IRREGULAR CONSISTENCY TENDER,
         * IRREGULAR POSITION, IRREGULAR SHAPE, IRREGULAR SHAPE MISSHAPED, IRREGULAR SHAPE
         * NON SYMMETRICAL, LACERATION, NEUROVASCULAR COMPROMISE, NEUROVASCULAR INTACT,
         * PUNCTURE, SEAT BELT SIGN, STAB, TIC TIM).
         */
        type?: string;
      }

      export interface Medication {
        /**
         * Route of medication delivery (e.g. INJECTION, ORAL, etc.).
         */
        adminRoute?: string;

        /**
         * Body part location or body part referenced for medication. Intended as, but not
         * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
         * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
         * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
         */
        bodyPart?: string;

        /**
         * Additional comments on the patient's medication information.
         */
        comments?: string;

        /**
         * Quantity of medicine or drug administered or recommended to be taken at a
         * particular time.
         */
        dose?: string;

        /**
         * The time that the medication was administered in ISO 8601 UTC format.
         */
        time?: string;

        /**
         * The type of medication administered. Intended as, but not constrained to, K07.1
         * Medication Enumeration (CEFOTETAN, ABRASION, ABX, AMOXILOXACIN, ANALGESIC,
         * COLLOID, CRYOPECIPITATES, CRYSTALLOID, EPINEPHRINE, ERTAPENEM, FENTANYL,
         * HEXTEND, LACTATED RINGERS, MOBIC, MORPHINE, NARCOTIC, NS, PENICILLIN, PLASMA,
         * PLATELETS, PRBC, TYLENOL, WHOLE BLOOD MT).
         */
        type?: string;
      }

      export interface Treatment {
        /**
         * Body part location or body part treated or to be treated. Intended as, but not
         * constrained to, K07.1 Body Location Enumeration (e.g. ANKLE LEFT BACK, ANKLE
         * LEFT FRONT, ANKLE RIGHT BACK, ANKLE RIGHT FRONT, ARM LEFT BACK, ARM LEFT ELBOW
         * BACK, ARM LEFT ELBOW FRONT, ARM LEFT FRONT, ARM LEFT LOWER BACK, etc.).
         */
        bodyPart?: string;

        /**
         * Additional comments on the patient's treatment information.
         */
        comments?: string;

        /**
         * Datetime of the treatment in ISO 8601 UTC format.
         */
        time?: string;

        /**
         * Type of treatment administered or to be administered. Intended as, but not
         * constrained to, K07.1 Treatment Type Enumeration (e.g. AIRWAY ADJUNCT, AIRWAY
         * ASSISTED VENTILATION, AIRWAY COMBI TUBE USED, AIRWAY ET NT, AIRWAY INTUBATED,
         * AIRWAY NPA OPA APPLIED, AIRWAY PATIENT, AIRWAY POSITIONAL, AIRWAY SURGICAL CRIC,
         * BREATHING CHEST SEAL, BREATHING CHEST TUBE, etc.).
         */
        type?: string;
      }

      export interface VitalSignData {
        /**
         * Medical confidence factor.
         */
        medConfFactor?: number;

        /**
         * Datetime of the vital sign measurement in ISO 8601 UTC datetime format.
         */
        time?: string;

        /**
         * Patient vital sign measured (e.g. HEART RATE, PULSE RATE, RESPIRATION RATE,
         * TEMPERATURE CORE, etc.).
         */
        vitalSign?: string;

        /**
         * Vital sign value 1. The content of this field is dependent on the type of vital
         * sign being measured (see the vitalSign field).
         */
        vitalSign1?: number;

        /**
         * Vital sign value 2. The content of this field is dependent on the type of vital
         * sign being measured (see the vitalSign field).
         */
        vitalSign2?: number;
      }
    }

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

Evac.History = History;
Evac.Tuple = Tuple;

export declare namespace Evac {
  export {
    type EvacAbridged as EvacAbridged,
    type EvacCountResponse as EvacCountResponse,
    type EvacQueryHelpResponse as EvacQueryHelpResponse,
    type EvacAbridgedsOffsetPage as EvacAbridgedsOffsetPage,
    type EvacCreateParams as EvacCreateParams,
    type EvacRetrieveParams as EvacRetrieveParams,
    type EvacListParams as EvacListParams,
    type EvacCountParams as EvacCountParams,
    type EvacCreateBulkParams as EvacCreateBulkParams,
    type EvacUnvalidatedPublishParams as EvacUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };

  export { Tuple as Tuple, type TupleListParams as TupleListParams };
}
