// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Flightplan extends APIResource {
  /**
   * Service operation to take a single FlightPlan object as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.flightplan.create({
   *   arrAirfield: 'KCHS',
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   depAirfield: 'KSLV',
   *   genTS: '2023-05-01T01:01:01.123Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: FlightplanCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/flightplan', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single FlightPlan record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const flightPlanFull = await client.flightplan.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: FlightplanRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.FlightPlanFull> {
    return this._client.get(path`/udl/flightplan/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single flightplan record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.flightplan.update('id', {
   *   arrAirfield: 'KCHS',
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   depAirfield: 'KSLV',
   *   genTS: '2023-05-01T01:01:01.123Z',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: FlightplanUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/flightplan/${pathID}`, {
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
   * for await (const flightPlanAbridged of client.flightplan.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: FlightplanListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FlightPlanAbridgedsOffsetPage, FlightPlanAbridged> {
    return this._client.getAPIList('/udl/flightplan', OffsetPage<FlightPlanAbridged>, { query, ...options });
  }

  /**
   * Service operation to delete a flight plan record specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.flightplan.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/flightplan/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
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
   * const response = await client.flightplan.count();
   * ```
   */
  count(query: FlightplanCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/flightplan/count', {
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
   * const response = await client.flightplan.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<FlightplanQueryhelpResponse> {
    return this._client.get('/udl/flightplan/queryhelp', options);
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
   * const flightPlanFulls = await client.flightplan.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: FlightplanTupleParams, options?: RequestOptions): APIPromise<FlightplanTupleResponse> {
    return this._client.get('/udl/flightplan/tuple', { query, ...options });
  }

  /**
   * Service operation to take one or many flight plan records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.flightplan.unvalidatedPublish({
   *   body: [
   *     {
   *       arrAirfield: 'KCHS',
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       depAirfield: 'KSLV',
   *       genTS: '2023-05-01T01:01:01.123Z',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(params: FlightplanUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-flightplan', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type FlightPlanAbridgedsOffsetPage = OffsetPage<FlightPlanAbridged>;

/**
 * Flight Plan contains data specifying the details of an intended flight including
 * schedule and expected route.
 */
export interface FlightPlanAbridged {
  /**
   * The airfield identifier of the arrival location, International Civil Aviation
   * Organization (ICAO) code preferred.
   */
  arrAirfield: string;

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
   * The airfield identifier of the departure location, International Civil Aviation
   * Organization (ICAO) code preferred.
   */
  depAirfield: string;

  /**
   * The generation time of this flight plan in ISO 8601 UTC format, with millisecond
   * precision.
   */
  genTS: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
   * EAGLE, KC-130 HERCULES, etc.) of the aircraft associated with this flight plan.
   * Intended as, but not constrained to, MIL-STD-6016 environment dependent specific
   * type designations.
   */
  aircraftMDS?: string;

  /**
   * Collection of air refueling events occurring on this flight.
   */
  airRefuelEvents?: Array<FlightPlanAbridged.AirRefuelEvent>;

  /**
   * Air Mobility Command (AMC) mission identifier according to Mobility Air Forces
   * (MAF) encode/decode procedures.
   */
  amcMissionId?: string;

  /**
   * Fuel burned from the initial approach point to landing in pounds.
   */
  appLandingFuel?: number;

  /**
   * The first designated alternate arrival airfield, International Civil Aviation
   * Organization (ICAO) code preferred.
   */
  arrAlternate1?: string;

  /**
   * Fuel required to fly to alternate landing site 1 and land in pounds.
   */
  arrAlternate1Fuel?: number;

  /**
   * The second designated alternate arrival airfield, International Civil Aviation
   * Organization (ICAO) code preferred.
   */
  arrAlternate2?: string;

  /**
   * Fuel required to fly to alternate landing site 2 and land in pounds.
   */
  arrAlternate2Fuel?: number;

  /**
   * Additional fuel burned at landing/missed approach for icing during arrival in
   * pounds.
   */
  arrIceFuel?: number;

  /**
   * The arrival runway for this flight.
   */
  arrRunway?: string;

  /**
   * Array of Air Traffic Control (ATC) addresses.
   */
  atcAddresses?: Array<string>;

  /**
   * Average temperature deviation of the primary, divert, and alternate path for the
   * route between first Top of Climb and last Top of Descent in degrees Celsius.
   */
  avgTempDev?: number;

  /**
   * Fuel planned to be burned during the flight in pounds.
   */
  burnedFuel?: number;

  /**
   * The call sign assigned to the aircraft for this flight plan.
   */
  callSign?: string;

  /**
   * Remarks about the planned cargo associated with this flight plan.
   */
  cargoRemark?: string;

  /**
   * Fuel required from brake release to Top of Climb in pounds.
   */
  climbFuel?: number;

  /**
   * Time required from brake release to Top of Climb expressed as HH:MM.
   */
  climbTime?: string;

  /**
   * The amount of contingency fuel in pounds.
   */
  contingencyFuel?: number;

  /**
   * Array of country codes for the countries overflown during this flight in ISO
   * 3166-1 Alpha-2 format.
   */
  countryCodes?: Array<string>;

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
   * The designated alternate departure airfield, International Civil Aviation
   * Organization (ICAO) code preferred.
   */
  depAlternate?: string;

  /**
   * The depressurization fuel required to fly from the Equal Time Point to the Last
   * Suitable/First Suitable airfield at depressurization altitude in pounds.
   */
  depressFuel?: number;

  /**
   * The departure runway for this flight.
   */
  depRunway?: string;

  /**
   * The percent degrade due to drag for this aircraft.
   */
  dragIndex?: number;

  /**
   * Additional fuel burned at landing/missed approach for an early descent in
   * pounds.
   */
  earlyDescentFuel?: number;

  /**
   * Total endurance time based on the fuel on board expressed as HH:MM.
   */
  enduranceTime?: string;

  /**
   * Fuel required to fly from Top of Climb to Top of Descent in pounds.
   */
  enrouteFuel?: number;

  /**
   * Time required to fly from Top of Climb to Top of Descent expressed as HH:MM.
   */
  enrouteTime?: string;

  /**
   * The list of equipment on the aircraft as defined in the Flight Information
   * Publications (FLIP) General Planning (GP) manual.
   */
  equipment?: string;

  /**
   * The estimated time of departure for the aircraft, in ISO 8601 UTC format, with
   * millisecond precision.
   */
  estDepTime?: string;

  /**
   * Array of Extended Operations (ETOPS) adequate landing airfields that are within
   * the mission region.
   */
  etopsAirfields?: Array<string>;

  /**
   * Array of Extended Operations (ETOPS) alternate suitable landing airfields that
   * are within the mission region.
   */
  etopsAltAirfields?: Array<string>;

  /**
   * The Extended Operations (ETOPS) rating used to calculate this flight plan.
   */
  etopsRating?: string;

  /**
   * The Extended Operations (ETOPS) validity window for the alternate airfield.
   */
  etopsValWindow?: string;

  /**
   * The source ID of the flight plan from the generating system.
   */
  externalId?: string;

  /**
   * Collection of messages associated with this flight plan indicating the severity,
   * the point where the message was generated, the path (Primary, Alternate, etc.),
   * and the text of the message.
   */
  flightPlanMessages?: Array<FlightPlanAbridged.FlightPlanMessage>;

  /**
   * Collection of point groups generated for this flight plan. Groups include point
   * sets for Extended Operations (ETOPS), Critical Fuel Point, and Equal Time Point
   * (ETP).
   */
  flightPlanPointGroups?: Array<FlightPlanAbridged.FlightPlanPointGroup>;

  /**
   * Collection of waypoints associated with this flight plan.
   */
  flightPlanWaypoints?: Array<FlightPlanAbridged.FlightPlanWaypoint>;

  /**
   * The flight rules this flight plan is being filed under.
   */
  flightRules?: string;

  /**
   * The type of flight (MILITARY, CIVILIAN, etc).
   */
  flightType?: string;

  /**
   * The fuel degrade percentage used for this mission.
   */
  fuelDegrade?: number;

  /**
   * The GPS Receiver Autonomous Integrity Monitoring (RAIM) message. A RAIM system
   * assesses the integrity of the GPS signals. This system predicts outages for a
   * specified geographical area. These predictions are based on the location, path,
   * and scheduled GPS satellite outages.
   */
  gpsRAIM?: string;

  /**
   * Additional fuel burned at Top of Climb in pounds.
   */
  holdDownFuel?: number;

  /**
   * Additional fuel burned at the destination for holding in pounds.
   */
  holdFuel?: number;

  /**
   * Additional time for holding at the destination expressed as HH:MM.
   */
  holdTime?: string;

  /**
   * The UDL unique identifier of the aircraft associated with this flight plan.
   */
  idAircraft?: string;

  /**
   * The UDL unique identifier of the arrival airfield associated with this flight
   * plan.
   */
  idArrAirfield?: string;

  /**
   * The UDL unique identifier of the departure airfield associated with this flight
   * plan.
   */
  idDepAirfield?: string;

  /**
   * The amount of identified extra fuel carried and not available in the burn plan
   * in pounds.
   */
  identExtraFuel?: number;

  /**
   * The UDL unique identifier of the aircraft sortie associated with this flight
   * plan.
   */
  idSortie?: string;

  /**
   * A character string representation of the initial filed cruise speed for this
   * flight (prepended values of K, N, and M represent kilometers per hour, knots,
   * and Mach, respectively).
   */
  initialCruiseSpeed?: string;

  /**
   * A character string representation of the initial filed altitude level for this
   * flight (prepended values of F, S, A, and M represent flight level in hundreds of
   * feet, standard metric level in tens of meters, altitude in hundreds of feet, and
   * altitude in tens of meters, respectively).
   */
  initialFlightLevel?: string;

  /**
   * Fuel planned to be remaining on the airplane at landing in pounds.
   */
  landingFuel?: number;

  /**
   * The leg number of this flight plan.
   */
  legNum?: number;

  /**
   * The minimum fuel on board required to divert in pounds.
   */
  minDivertFuel?: number;

  /**
   * The mission index value for this mission. The mission index is the ratio of
   * time-related cost of aircraft operation to the cost of fuel.
   */
  msnIndex?: number;

  /**
   * Additional remarks for air traffic control for this flight.
   */
  notes?: string;

  /**
   * The number of aircraft flying this flight plan.
   */
  numAircraft?: number;

  /**
   * Additional fuel burned at Top of Descent for the operational condition in
   * pounds.
   */
  opConditionFuel?: number;

  /**
   * Operating weight of the aircraft in pounds.
   */
  opWeight?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Air Traffic Control address filing the flight plan.
   */
  originator?: string;

  /**
   * The originating source network on which this record was created, auto-populated
   * by the system.
   */
  origNetwork?: string;

  /**
   * Remarks from the planners concerning this flight plan.
   */
  plannerRemark?: string;

  /**
   * Total of all fuel required to complete the flight in pounds, including fuel to
   * be dispensed on a refueling mission.
   */
  rampFuel?: number;

  /**
   * Total fuel remaining at alternate landing site 1 in pounds.
   */
  remAlternate1Fuel?: number;

  /**
   * Total fuel remaining at alternate landing site 2 in pounds.
   */
  remAlternate2Fuel?: number;

  /**
   * The amount of reserve fuel in pounds.
   */
  reserveFuel?: number;

  /**
   * The 1801 fileable route of flight string for this flight. The route of flight
   * string contains route designators, significant points, change of speed/altitude,
   * change of flight rules, and cruise climbs.
   */
  routeString?: string;

  /**
   * Name of the planned Standard Instrument Departure (SID) procedure.
   */
  sid?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Name of the planned Standard Terminal Arrival (STAR) procedure.
   */
  star?: string;

  /**
   * Status of this flight plan (e.g., ACTIVE, APPROVED, PLANNED, etc.).
   */
  status?: string;

  /**
   * The tail number of the aircraft associated with this flight plan.
   */
  tailNumber?: string;

  /**
   * Fuel at takeoff, which is calculated as the ramp fuel minus the taxi fuel in
   * pounds.
   */
  takeoffFuel?: number;

  /**
   * Fuel required to start engines and taxi to the end of the runway in pounds.
   */
  taxiFuel?: number;

  /**
   * Additional fuel burned at Top of Descent for thunderstorm avoidance in pounds.
   */
  thunderAvoidFuel?: number;

  /**
   * Fuel remaining at Top of Climb in pounds.
   */
  tocFuel?: number;

  /**
   * Additional fuel burned at Top of Climb for icing in pounds.
   */
  tocIceFuel?: number;

  /**
   * Fuel remaining at Top of Descent in pounds.
   */
  todFuel?: number;

  /**
   * Additional fuel burned at Top of Descent for icing in pounds.
   */
  todIceFuel?: number;

  /**
   * The amount of unidentified extra fuel required to get to min landing in pounds.
   */
  unidentExtraFuel?: number;

  /**
   * The amount of unusable fuel in pounds.
   */
  unusableFuel?: number;

  /**
   * Time the row was last updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;

  /**
   * The wake turbulence category for this flight. The categories are assigned by the
   * International Civil Aviation Organization (ICAO) and are based on maximum
   * certified takeoff mass for the purpose of separating aircraft in flight due to
   * wake turbulence. Valid values include LIGHT, MEDIUM, LARGE, HEAVY, and SUPER.
   */
  wakeTurbCat?: string;

  /**
   * Wind factor for the first half of the route. This is the average wind factor
   * from first Top of Climb to the mid-time of the entire route in knots. A positive
   * value indicates a headwind, while a negative value indicates a tailwind.
   */
  windFac1?: number;

  /**
   * Wind factor for the second half of the route. This is the average wind factor
   * from the mid-time of the entire route to last Top of Descent in knots. A
   * positive value indicates a headwind, while a negative value indicates a
   * tailwind.
   */
  windFac2?: number;

  /**
   * Average wind factor from Top of Climb to Top of Descent in knots. A positive
   * value indicates a headwind, while a negative value indicates a tailwind.
   */
  windFacAvg?: number;

  /**
   * The date and time the weather valid period ends in ISO 8601 UTC format, with
   * millisecond precision.
   */
  wxValidEnd?: string;

  /**
   * The date and time the weather valid period begins in ISO 8601 UTC format, with
   * millisecond precision.
   */
  wxValidStart?: string;
}

export namespace FlightPlanAbridged {
  /**
   * Collection of air refueling events occurring on this flight.
   */
  export interface AirRefuelEvent {
    /**
     * Additional degrade for air refueling, cumulative with fuelDegrade field percent.
     */
    arDegrade?: number;

    /**
     * Fuel onloaded (use positive numbers) or fuel offloaded (use negative numbers) in
     * pounds.
     */
    arExchangedFuel?: number;

    /**
     * The number of this air refueling event within the flight plan.
     */
    arNum?: number;

    /**
     * Fuel required to fly from air refueling exit point to air refueling divert
     * alternate airfield in pounds.
     */
    divertFuel?: number;

    /**
     * Fuel remaining at the air refueling exit in pounds.
     */
    exitFuel?: number;
  }

  /**
   * Collection of messages associated with this flight plan indicating the severity,
   * the point where the message was generated, the path (Primary, Alternate, etc.),
   * and the text of the message.
   */
  export interface FlightPlanMessage {
    /**
     * The text of the message.
     */
    msgText?: string;

    /**
     * The flight path that generated the message (PRIMARY, ALTERNATE, etc.).
     */
    routePath?: string;

    /**
     * The severity of the message.
     */
    severity?: string;

    /**
     * The waypoint number for which the message was generated, or enter "PLAN" for a
     * message impacting the entire route.
     */
    wpNum?: string;
  }

  /**
   * Collection of point groups generated for this flight plan. Groups include point
   * sets for Extended Operations (ETOPS), Critical Fuel Point, and Equal Time Point
   * (ETP).
   */
  export interface FlightPlanPointGroup {
    /**
     * Average fuel flow at which the fuel was calculated in pounds per hour.
     */
    avgFuelFlow?: number;

    /**
     * Average wind factor from the Extended Operations (ETOPS) point to the recovery
     * airfield in knots.
     */
    etopsAvgWindFactor?: number;

    /**
     * Distance from the Extended Operations (ETOPS) point to the recovery airfield in
     * nautical miles.
     */
    etopsDistance?: number;

    /**
     * Fuel required to fly from the Extended Operations (ETOPS) point to the recovery
     * airfield in pounds.
     */
    etopsReqFuel?: number;

    /**
     * Temperature deviation from the Extended Operations (ETOPS) point to the recovery
     * airfield in degrees Celsius.
     */
    etopsTempDev?: number;

    /**
     * Time to fly from the Extended Operations (ETOPS) point to the recovery airfield
     * expressed in HH:MM format.
     */
    etopsTime?: string;

    /**
     * Array of point data for this Point Group.
     */
    flightPlanPoints?: Array<FlightPlanPointGroup.FlightPlanPoint>;

    /**
     * Total time from takeoff when the point is reached expressed in HH:MM format.
     */
    fromTakeoffTime?: string;

    /**
     * Average wind factor from the Equal Time Point (ETP) to the first suitable
     * airfield in knots.
     */
    fsafAvgWindFactor?: number;

    /**
     * Distance from the Equal Time Point (ETP) to the first suitable airfield in
     * nautical miles.
     */
    fsafDistance?: number;

    /**
     * Fuel required to fly from the Equal Time Point (ETP) to the first suitable
     * airfield in pounds.
     */
    fsafReqFuel?: number;

    /**
     * Temperature deviation from the Equal Time Point (ETP) to the first suitable
     * airfield in degrees Celsius.
     */
    fsafTempDev?: number;

    /**
     * Time to fly from the Equal Time Point (ETP) to the first suitable airfield
     * expressed in HH:MM format.
     */
    fsafTime?: string;

    /**
     * Flight level of the point at which the fuel was calculated in feet.
     */
    fuelCalcAlt?: number;

    /**
     * True airspeed at which the fuel was calculated in knots.
     */
    fuelCalcSpd?: number;

    /**
     * Average wind factor from the Equal Time Point (ETP) to the last suitable
     * airfield in knots.
     */
    lsafAvgWindFactor?: number;

    /**
     * Distance from the Equal Time Point (ETP) to the last suitable airfield in
     * nautical miles.
     */
    lsafDistance?: number;

    /**
     * Name of the last suitable airfield, International Civil Aviation Organization
     * (ICAO) code preferred.
     */
    lsafName?: string;

    /**
     * Fuel required to fly from the Equal Time Point (ETP) to the last suitable
     * airfield in pounds.
     */
    lsafReqFuel?: number;

    /**
     * Temperature deviation from the Equal Time Point (ETP) to the last suitable
     * airfield in degrees Celsius.
     */
    lsafTempDev?: number;

    /**
     * Time to fly from the Equal Time Point (ETP) to the last suitable airfield
     * expressed in HH:MM format.
     */
    lsafTime?: string;

    /**
     * Amount of planned fuel on board when the point is reached in pounds.
     */
    plannedFuel?: number;

    /**
     * Name of the point group, usually Extended Operations (ETOPS), Critical Fuel
     * Point, and Equal Time Point (ETP) sections.
     */
    pointGroupName?: string;

    /**
     * Specifies which Point Group case requires the most fuel.
     */
    worstFuelCase?: string;
  }

  export namespace FlightPlanPointGroup {
    /**
     * Array of point data for this Point Group.
     */
    export interface FlightPlanPoint {
      /**
       * Estimated Time of Arrival (ETA) at this point in ISO 8601 UTC format, with
       * millisecond precision.
       */
      fppEta?: string;

      /**
       * WGS84 latitude of the point location, in degrees. -90 to 90 degrees (negative
       * values south of equator).
       */
      fppLat?: number;

      /**
       * WGS84 longitude of the point location, in degrees. -180 to 180 degrees (negative
       * values west of Prime Meridian).
       */
      fppLon?: number;

      /**
       * Fuel required at this point to execute an Equal Time Point (ETP) or Extended
       * Operations (ETOPS) plan in pounds.
       */
      fppReqFuel?: number;

      /**
       * Name of this point.
       */
      pointName?: string;
    }
  }

  /**
   * Collection of waypoints associated with this flight plan.
   */
  export interface FlightPlanWaypoint {
    /**
     * Points are designated by type as either a comment point or a waypoint. A comment
     * point conveys important information about the point for pilots but is not
     * entered into a flight management system. A waypoint is a point that is entered
     * into a flight management system and/or filed with Air Traffic Control.
     */
    type: string;

    /**
     * Name of the point. The name of a comment point identifies important information
     * about that point, e.g. Top of Climb. The name of a waypoint identifies the
     * location of that point.
     */
    waypointName: string;

    /**
     * The air-to-air Tactical Air Navigation (TACAN) channels used by the
     * receiver/tanker during air refueling.
     */
    aaTacanChannel?: string;

    /**
     * The air distance of this leg in nautical miles.
     */
    airDistance?: number;

    /**
     * The flight path flown for this leg.
     */
    airway?: string;

    /**
     * Altitude of a level, point, or object measured in feet above mean sea level.
     */
    alt?: number;

    /**
     * The ID of the air refueling track/anchor or fixed track.
     */
    arId?: string;

    /**
     * Point identifying an air refueling track/anchor or fixed track.
     */
    arpt?: string;

    /**
     * Actual Time of Arrival (ATA) at this waypoint in ISO 8601 UTC format, with
     * millisecond precision.
     */
    ata?: string;

    /**
     * The average calibrated airspeed (CAS) for this leg in knots.
     */
    avgCalAirspeed?: number;

    /**
     * The average drift angle for this leg in degrees from true north.
     */
    avgDriftAng?: number;

    /**
     * The average ground speed for this leg in knots.
     */
    avgGroundSpeed?: number;

    /**
     * The average true airspeed (TAS) for this leg in knots.
     */
    avgTrueAirspeed?: number;

    /**
     * The average wind direction for this leg in degrees from true north.
     */
    avgWindDir?: number;

    /**
     * The average wind speed for this leg in knots.
     */
    avgWindSpeed?: number;

    /**
     * The day low level altitude in feet above sea level for the leg ending at this
     * waypoint.
     */
    dayLowAlt?: number;

    /**
     * Estimated Time of Arrival (ETA) at this waypoint in ISO 8601 UTC format, with
     * millisecond precision.
     */
    eta?: string;

    /**
     * The amount of fuel onloaded or offloaded at this waypoint in pounds (negative
     * value for offload).
     */
    exchangedFuel?: number;

    /**
     * The leg fuel flow in pounds per hour.
     */
    fuelFlow?: number;

    /**
     * The icing intensity classification for this flight (LIGHT, MODERATE, etc).
     */
    iceCat?: string;

    /**
     * WGS84 latitude of the point location, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    lat?: number;

    /**
     * The planned alternate leg based on user-defined constraints, International Civil
     * Aviation Organization (ICAO) code preferred.
     */
    legAlternate?: string;

    /**
     * The percent degrade due to drag for this aircraft for this leg.
     */
    legDragIndex?: number;

    /**
     * The fuel degrade percentage used for this leg.
     */
    legFuelDegrade?: number;

    /**
     * The average Mach speed for this leg.
     */
    legMach?: number;

    /**
     * The mission index value for this leg. The mission index is the ratio of
     * time-related cost of aircraft operation to the cost of fuel.
     */
    legMsnIndex?: number;

    /**
     * The wind factor for this leg in knots. A positive value indicates a headwind,
     * while a negative value indicates a tailwind.
     */
    legWindFac?: number;

    /**
     * WGS84 longitude of the point location, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon?: number;

    /**
     * The magnetic course at leg midpoint in degrees from true north.
     */
    magCourse?: number;

    /**
     * The magnetic heading at leg midpoint in degrees from true north.
     */
    magHeading?: number;

    /**
     * The magnetic variation for this leg in degrees.
     */
    magVar?: number;

    /**
     * Navigational Aid (NAVAID) identification code.
     */
    navaid?: string;

    /**
     * The night low level altitude in feet above sea level for the leg ending at this
     * waypoint.
     */
    nightLowAlt?: number;

    /**
     * The night vision goggle low level altitude in feet above sea level for the leg
     * ending at this waypoint.
     */
    nvgLowAlt?: number;

    /**
     * The wind direction at this specific point in degrees from true north.
     */
    pointWindDir?: number;

    /**
     * The wind velocity at this specific point in knots.
     */
    pointWindSpeed?: number;

    /**
     * The primary UHF radio frequency used for the air refueling track or anchor in
     * megahertz.
     */
    priFreq?: number;

    /**
     * The secondary UHF radio frequency used for the air refueling track or anchor in
     * megahertz.
     */
    secFreq?: number;

    /**
     * Tactical Air Navigation (TACAN) channel for the Navigational Aid (NAVAID).
     */
    tacanChannel?: string;

    /**
     * Average temperature deviation from standard day profile for this leg in degrees
     * Celsius.
     */
    tempDev?: number;

    /**
     * The thunderstorm intensity classification for this flight (LIGHT, MODERATE,
     * etc).
     */
    thunderCat?: string;

    /**
     * The total air distance to this waypoint in nautical miles.
     */
    totalAirDistance?: number;

    /**
     * The total distance flown to this waypoint calculated from point of departure in
     * nautical miles.
     */
    totalFlownDistance?: number;

    /**
     * The total distance remaining from this waypoint to the point of arrival in
     * nautical miles.
     */
    totalRemDistance?: number;

    /**
     * The total fuel remaining at this waypoint in pounds.
     */
    totalRemFuel?: number;

    /**
     * The total time accumulated from takeoff to this waypoint expressed as HH:MM.
     */
    totalTime?: string;

    /**
     * The total time remaining from this waypoint to the point of arrival expressed as
     * HH:MM.
     */
    totalTimeRem?: string;

    /**
     * The total fuel used to this waypoint from point of departure in pounds.
     */
    totalUsedFuel?: number;

    /**
     * The total weight of the aircraft at this waypoint in pounds.
     */
    totalWeight?: number;

    /**
     * The true course at leg midpoint in degrees from true north.
     */
    trueCourse?: number;

    /**
     * The turbulence intensity classification for this flight (LIGHT, MODERATE, etc).
     */
    turbCat?: string;

    /**
     * VHF Omni-directional Range (VOR) frequency for the Navigational Aid (NAVAID) in
     * megahertz.
     */
    vorFreq?: number;

    /**
     * The waypoint number on the route. Comment points do not get a waypoint number.
     */
    waypointNum?: number;

    /**
     * The zone/leg distance flown in nautical miles.
     */
    zoneDistance?: number;

    /**
     * The amount of fuel used on this zone/leg in pounds.
     */
    zoneFuel?: number;

    /**
     * The time to fly this zone/leg in minutes.
     */
    zoneTime?: number;
  }
}

export type FlightplanCountResponse = string;

export interface FlightplanQueryhelpResponse {
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

export type FlightplanTupleResponse = Array<Shared.FlightPlanFull>;

export interface FlightplanCreateParams {
  /**
   * The airfield identifier of the arrival location, International Civil Aviation
   * Organization (ICAO) code preferred.
   */
  arrAirfield: string;

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
   * The airfield identifier of the departure location, International Civil Aviation
   * Organization (ICAO) code preferred.
   */
  depAirfield: string;

  /**
   * The generation time of this flight plan in ISO 8601 UTC format, with millisecond
   * precision.
   */
  genTS: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
   * EAGLE, KC-130 HERCULES, etc.) of the aircraft associated with this flight plan.
   * Intended as, but not constrained to, MIL-STD-6016 environment dependent specific
   * type designations.
   */
  aircraftMDS?: string;

  /**
   * Collection of air refueling events occurring on this flight.
   */
  airRefuelEvents?: Array<FlightplanCreateParams.AirRefuelEvent>;

  /**
   * Air Mobility Command (AMC) mission identifier according to Mobility Air Forces
   * (MAF) encode/decode procedures.
   */
  amcMissionId?: string;

  /**
   * Fuel burned from the initial approach point to landing in pounds.
   */
  appLandingFuel?: number;

  /**
   * The first designated alternate arrival airfield, International Civil Aviation
   * Organization (ICAO) code preferred.
   */
  arrAlternate1?: string;

  /**
   * Fuel required to fly to alternate landing site 1 and land in pounds.
   */
  arrAlternate1Fuel?: number;

  /**
   * The second designated alternate arrival airfield, International Civil Aviation
   * Organization (ICAO) code preferred.
   */
  arrAlternate2?: string;

  /**
   * Fuel required to fly to alternate landing site 2 and land in pounds.
   */
  arrAlternate2Fuel?: number;

  /**
   * Additional fuel burned at landing/missed approach for icing during arrival in
   * pounds.
   */
  arrIceFuel?: number;

  /**
   * The arrival runway for this flight.
   */
  arrRunway?: string;

  /**
   * Array of Air Traffic Control (ATC) addresses.
   */
  atcAddresses?: Array<string>;

  /**
   * Average temperature deviation of the primary, divert, and alternate path for the
   * route between first Top of Climb and last Top of Descent in degrees Celsius.
   */
  avgTempDev?: number;

  /**
   * Fuel planned to be burned during the flight in pounds.
   */
  burnedFuel?: number;

  /**
   * The call sign assigned to the aircraft for this flight plan.
   */
  callSign?: string;

  /**
   * Remarks about the planned cargo associated with this flight plan.
   */
  cargoRemark?: string;

  /**
   * Fuel required from brake release to Top of Climb in pounds.
   */
  climbFuel?: number;

  /**
   * Time required from brake release to Top of Climb expressed as HH:MM.
   */
  climbTime?: string;

  /**
   * The amount of contingency fuel in pounds.
   */
  contingencyFuel?: number;

  /**
   * Array of country codes for the countries overflown during this flight in ISO
   * 3166-1 Alpha-2 format.
   */
  countryCodes?: Array<string>;

  /**
   * The designated alternate departure airfield, International Civil Aviation
   * Organization (ICAO) code preferred.
   */
  depAlternate?: string;

  /**
   * The depressurization fuel required to fly from the Equal Time Point to the Last
   * Suitable/First Suitable airfield at depressurization altitude in pounds.
   */
  depressFuel?: number;

  /**
   * The departure runway for this flight.
   */
  depRunway?: string;

  /**
   * The percent degrade due to drag for this aircraft.
   */
  dragIndex?: number;

  /**
   * Additional fuel burned at landing/missed approach for an early descent in
   * pounds.
   */
  earlyDescentFuel?: number;

  /**
   * Total endurance time based on the fuel on board expressed as HH:MM.
   */
  enduranceTime?: string;

  /**
   * Fuel required to fly from Top of Climb to Top of Descent in pounds.
   */
  enrouteFuel?: number;

  /**
   * Time required to fly from Top of Climb to Top of Descent expressed as HH:MM.
   */
  enrouteTime?: string;

  /**
   * The list of equipment on the aircraft as defined in the Flight Information
   * Publications (FLIP) General Planning (GP) manual.
   */
  equipment?: string;

  /**
   * The estimated time of departure for the aircraft, in ISO 8601 UTC format, with
   * millisecond precision.
   */
  estDepTime?: string;

  /**
   * Array of Extended Operations (ETOPS) adequate landing airfields that are within
   * the mission region.
   */
  etopsAirfields?: Array<string>;

  /**
   * Array of Extended Operations (ETOPS) alternate suitable landing airfields that
   * are within the mission region.
   */
  etopsAltAirfields?: Array<string>;

  /**
   * The Extended Operations (ETOPS) rating used to calculate this flight plan.
   */
  etopsRating?: string;

  /**
   * The Extended Operations (ETOPS) validity window for the alternate airfield.
   */
  etopsValWindow?: string;

  /**
   * The source ID of the flight plan from the generating system.
   */
  externalId?: string;

  /**
   * Collection of messages associated with this flight plan indicating the severity,
   * the point where the message was generated, the path (Primary, Alternate, etc.),
   * and the text of the message.
   */
  flightPlanMessages?: Array<FlightplanCreateParams.FlightPlanMessage>;

  /**
   * Collection of point groups generated for this flight plan. Groups include point
   * sets for Extended Operations (ETOPS), Critical Fuel Point, and Equal Time Point
   * (ETP).
   */
  flightPlanPointGroups?: Array<FlightplanCreateParams.FlightPlanPointGroup>;

  /**
   * Collection of waypoints associated with this flight plan.
   */
  flightPlanWaypoints?: Array<FlightplanCreateParams.FlightPlanWaypoint>;

  /**
   * The flight rules this flight plan is being filed under.
   */
  flightRules?: string;

  /**
   * The type of flight (MILITARY, CIVILIAN, etc).
   */
  flightType?: string;

  /**
   * The fuel degrade percentage used for this mission.
   */
  fuelDegrade?: number;

  /**
   * The GPS Receiver Autonomous Integrity Monitoring (RAIM) message. A RAIM system
   * assesses the integrity of the GPS signals. This system predicts outages for a
   * specified geographical area. These predictions are based on the location, path,
   * and scheduled GPS satellite outages.
   */
  gpsRAIM?: string;

  /**
   * Additional fuel burned at Top of Climb in pounds.
   */
  holdDownFuel?: number;

  /**
   * Additional fuel burned at the destination for holding in pounds.
   */
  holdFuel?: number;

  /**
   * Additional time for holding at the destination expressed as HH:MM.
   */
  holdTime?: string;

  /**
   * The UDL unique identifier of the aircraft associated with this flight plan.
   */
  idAircraft?: string;

  /**
   * The UDL unique identifier of the arrival airfield associated with this flight
   * plan.
   */
  idArrAirfield?: string;

  /**
   * The UDL unique identifier of the departure airfield associated with this flight
   * plan.
   */
  idDepAirfield?: string;

  /**
   * The amount of identified extra fuel carried and not available in the burn plan
   * in pounds.
   */
  identExtraFuel?: number;

  /**
   * The UDL unique identifier of the aircraft sortie associated with this flight
   * plan.
   */
  idSortie?: string;

  /**
   * A character string representation of the initial filed cruise speed for this
   * flight (prepended values of K, N, and M represent kilometers per hour, knots,
   * and Mach, respectively).
   */
  initialCruiseSpeed?: string;

  /**
   * A character string representation of the initial filed altitude level for this
   * flight (prepended values of F, S, A, and M represent flight level in hundreds of
   * feet, standard metric level in tens of meters, altitude in hundreds of feet, and
   * altitude in tens of meters, respectively).
   */
  initialFlightLevel?: string;

  /**
   * Fuel planned to be remaining on the airplane at landing in pounds.
   */
  landingFuel?: number;

  /**
   * The leg number of this flight plan.
   */
  legNum?: number;

  /**
   * The minimum fuel on board required to divert in pounds.
   */
  minDivertFuel?: number;

  /**
   * The mission index value for this mission. The mission index is the ratio of
   * time-related cost of aircraft operation to the cost of fuel.
   */
  msnIndex?: number;

  /**
   * Additional remarks for air traffic control for this flight.
   */
  notes?: string;

  /**
   * The number of aircraft flying this flight plan.
   */
  numAircraft?: number;

  /**
   * Additional fuel burned at Top of Descent for the operational condition in
   * pounds.
   */
  opConditionFuel?: number;

  /**
   * Operating weight of the aircraft in pounds.
   */
  opWeight?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Air Traffic Control address filing the flight plan.
   */
  originator?: string;

  /**
   * Remarks from the planners concerning this flight plan.
   */
  plannerRemark?: string;

  /**
   * Total of all fuel required to complete the flight in pounds, including fuel to
   * be dispensed on a refueling mission.
   */
  rampFuel?: number;

  /**
   * Total fuel remaining at alternate landing site 1 in pounds.
   */
  remAlternate1Fuel?: number;

  /**
   * Total fuel remaining at alternate landing site 2 in pounds.
   */
  remAlternate2Fuel?: number;

  /**
   * The amount of reserve fuel in pounds.
   */
  reserveFuel?: number;

  /**
   * The 1801 fileable route of flight string for this flight. The route of flight
   * string contains route designators, significant points, change of speed/altitude,
   * change of flight rules, and cruise climbs.
   */
  routeString?: string;

  /**
   * Name of the planned Standard Instrument Departure (SID) procedure.
   */
  sid?: string;

  /**
   * Name of the planned Standard Terminal Arrival (STAR) procedure.
   */
  star?: string;

  /**
   * Status of this flight plan (e.g., ACTIVE, APPROVED, PLANNED, etc.).
   */
  status?: string;

  /**
   * The tail number of the aircraft associated with this flight plan.
   */
  tailNumber?: string;

  /**
   * Fuel at takeoff, which is calculated as the ramp fuel minus the taxi fuel in
   * pounds.
   */
  takeoffFuel?: number;

  /**
   * Fuel required to start engines and taxi to the end of the runway in pounds.
   */
  taxiFuel?: number;

  /**
   * Additional fuel burned at Top of Descent for thunderstorm avoidance in pounds.
   */
  thunderAvoidFuel?: number;

  /**
   * Fuel remaining at Top of Climb in pounds.
   */
  tocFuel?: number;

  /**
   * Additional fuel burned at Top of Climb for icing in pounds.
   */
  tocIceFuel?: number;

  /**
   * Fuel remaining at Top of Descent in pounds.
   */
  todFuel?: number;

  /**
   * Additional fuel burned at Top of Descent for icing in pounds.
   */
  todIceFuel?: number;

  /**
   * The amount of unidentified extra fuel required to get to min landing in pounds.
   */
  unidentExtraFuel?: number;

  /**
   * The amount of unusable fuel in pounds.
   */
  unusableFuel?: number;

  /**
   * The wake turbulence category for this flight. The categories are assigned by the
   * International Civil Aviation Organization (ICAO) and are based on maximum
   * certified takeoff mass for the purpose of separating aircraft in flight due to
   * wake turbulence. Valid values include LIGHT, MEDIUM, LARGE, HEAVY, and SUPER.
   */
  wakeTurbCat?: string;

  /**
   * Wind factor for the first half of the route. This is the average wind factor
   * from first Top of Climb to the mid-time of the entire route in knots. A positive
   * value indicates a headwind, while a negative value indicates a tailwind.
   */
  windFac1?: number;

  /**
   * Wind factor for the second half of the route. This is the average wind factor
   * from the mid-time of the entire route to last Top of Descent in knots. A
   * positive value indicates a headwind, while a negative value indicates a
   * tailwind.
   */
  windFac2?: number;

  /**
   * Average wind factor from Top of Climb to Top of Descent in knots. A positive
   * value indicates a headwind, while a negative value indicates a tailwind.
   */
  windFacAvg?: number;

  /**
   * The date and time the weather valid period ends in ISO 8601 UTC format, with
   * millisecond precision.
   */
  wxValidEnd?: string;

  /**
   * The date and time the weather valid period begins in ISO 8601 UTC format, with
   * millisecond precision.
   */
  wxValidStart?: string;
}

export namespace FlightplanCreateParams {
  /**
   * Collection of air refueling events occurring on this flight.
   */
  export interface AirRefuelEvent {
    /**
     * Additional degrade for air refueling, cumulative with fuelDegrade field percent.
     */
    arDegrade?: number;

    /**
     * Fuel onloaded (use positive numbers) or fuel offloaded (use negative numbers) in
     * pounds.
     */
    arExchangedFuel?: number;

    /**
     * The number of this air refueling event within the flight plan.
     */
    arNum?: number;

    /**
     * Fuel required to fly from air refueling exit point to air refueling divert
     * alternate airfield in pounds.
     */
    divertFuel?: number;

    /**
     * Fuel remaining at the air refueling exit in pounds.
     */
    exitFuel?: number;
  }

  /**
   * Collection of messages associated with this flight plan indicating the severity,
   * the point where the message was generated, the path (Primary, Alternate, etc.),
   * and the text of the message.
   */
  export interface FlightPlanMessage {
    /**
     * The text of the message.
     */
    msgText?: string;

    /**
     * The flight path that generated the message (PRIMARY, ALTERNATE, etc.).
     */
    routePath?: string;

    /**
     * The severity of the message.
     */
    severity?: string;

    /**
     * The waypoint number for which the message was generated, or enter "PLAN" for a
     * message impacting the entire route.
     */
    wpNum?: string;
  }

  /**
   * Collection of point groups generated for this flight plan. Groups include point
   * sets for Extended Operations (ETOPS), Critical Fuel Point, and Equal Time Point
   * (ETP).
   */
  export interface FlightPlanPointGroup {
    /**
     * Average fuel flow at which the fuel was calculated in pounds per hour.
     */
    avgFuelFlow?: number;

    /**
     * Average wind factor from the Extended Operations (ETOPS) point to the recovery
     * airfield in knots.
     */
    etopsAvgWindFactor?: number;

    /**
     * Distance from the Extended Operations (ETOPS) point to the recovery airfield in
     * nautical miles.
     */
    etopsDistance?: number;

    /**
     * Fuel required to fly from the Extended Operations (ETOPS) point to the recovery
     * airfield in pounds.
     */
    etopsReqFuel?: number;

    /**
     * Temperature deviation from the Extended Operations (ETOPS) point to the recovery
     * airfield in degrees Celsius.
     */
    etopsTempDev?: number;

    /**
     * Time to fly from the Extended Operations (ETOPS) point to the recovery airfield
     * expressed in HH:MM format.
     */
    etopsTime?: string;

    /**
     * Array of point data for this Point Group.
     */
    flightPlanPoints?: Array<FlightPlanPointGroup.FlightPlanPoint>;

    /**
     * Total time from takeoff when the point is reached expressed in HH:MM format.
     */
    fromTakeoffTime?: string;

    /**
     * Average wind factor from the Equal Time Point (ETP) to the first suitable
     * airfield in knots.
     */
    fsafAvgWindFactor?: number;

    /**
     * Distance from the Equal Time Point (ETP) to the first suitable airfield in
     * nautical miles.
     */
    fsafDistance?: number;

    /**
     * Fuel required to fly from the Equal Time Point (ETP) to the first suitable
     * airfield in pounds.
     */
    fsafReqFuel?: number;

    /**
     * Temperature deviation from the Equal Time Point (ETP) to the first suitable
     * airfield in degrees Celsius.
     */
    fsafTempDev?: number;

    /**
     * Time to fly from the Equal Time Point (ETP) to the first suitable airfield
     * expressed in HH:MM format.
     */
    fsafTime?: string;

    /**
     * Flight level of the point at which the fuel was calculated in feet.
     */
    fuelCalcAlt?: number;

    /**
     * True airspeed at which the fuel was calculated in knots.
     */
    fuelCalcSpd?: number;

    /**
     * Average wind factor from the Equal Time Point (ETP) to the last suitable
     * airfield in knots.
     */
    lsafAvgWindFactor?: number;

    /**
     * Distance from the Equal Time Point (ETP) to the last suitable airfield in
     * nautical miles.
     */
    lsafDistance?: number;

    /**
     * Name of the last suitable airfield, International Civil Aviation Organization
     * (ICAO) code preferred.
     */
    lsafName?: string;

    /**
     * Fuel required to fly from the Equal Time Point (ETP) to the last suitable
     * airfield in pounds.
     */
    lsafReqFuel?: number;

    /**
     * Temperature deviation from the Equal Time Point (ETP) to the last suitable
     * airfield in degrees Celsius.
     */
    lsafTempDev?: number;

    /**
     * Time to fly from the Equal Time Point (ETP) to the last suitable airfield
     * expressed in HH:MM format.
     */
    lsafTime?: string;

    /**
     * Amount of planned fuel on board when the point is reached in pounds.
     */
    plannedFuel?: number;

    /**
     * Name of the point group, usually Extended Operations (ETOPS), Critical Fuel
     * Point, and Equal Time Point (ETP) sections.
     */
    pointGroupName?: string;

    /**
     * Specifies which Point Group case requires the most fuel.
     */
    worstFuelCase?: string;
  }

  export namespace FlightPlanPointGroup {
    /**
     * Array of point data for this Point Group.
     */
    export interface FlightPlanPoint {
      /**
       * Estimated Time of Arrival (ETA) at this point in ISO 8601 UTC format, with
       * millisecond precision.
       */
      fppEta?: string;

      /**
       * WGS84 latitude of the point location, in degrees. -90 to 90 degrees (negative
       * values south of equator).
       */
      fppLat?: number;

      /**
       * WGS84 longitude of the point location, in degrees. -180 to 180 degrees (negative
       * values west of Prime Meridian).
       */
      fppLon?: number;

      /**
       * Fuel required at this point to execute an Equal Time Point (ETP) or Extended
       * Operations (ETOPS) plan in pounds.
       */
      fppReqFuel?: number;

      /**
       * Name of this point.
       */
      pointName?: string;
    }
  }

  /**
   * Collection of waypoints associated with this flight plan.
   */
  export interface FlightPlanWaypoint {
    /**
     * Points are designated by type as either a comment point or a waypoint. A comment
     * point conveys important information about the point for pilots but is not
     * entered into a flight management system. A waypoint is a point that is entered
     * into a flight management system and/or filed with Air Traffic Control.
     */
    type: string;

    /**
     * Name of the point. The name of a comment point identifies important information
     * about that point, e.g. Top of Climb. The name of a waypoint identifies the
     * location of that point.
     */
    waypointName: string;

    /**
     * The air-to-air Tactical Air Navigation (TACAN) channels used by the
     * receiver/tanker during air refueling.
     */
    aaTacanChannel?: string;

    /**
     * The air distance of this leg in nautical miles.
     */
    airDistance?: number;

    /**
     * The flight path flown for this leg.
     */
    airway?: string;

    /**
     * Altitude of a level, point, or object measured in feet above mean sea level.
     */
    alt?: number;

    /**
     * The ID of the air refueling track/anchor or fixed track.
     */
    arId?: string;

    /**
     * Point identifying an air refueling track/anchor or fixed track.
     */
    arpt?: string;

    /**
     * Actual Time of Arrival (ATA) at this waypoint in ISO 8601 UTC format, with
     * millisecond precision.
     */
    ata?: string;

    /**
     * The average calibrated airspeed (CAS) for this leg in knots.
     */
    avgCalAirspeed?: number;

    /**
     * The average drift angle for this leg in degrees from true north.
     */
    avgDriftAng?: number;

    /**
     * The average ground speed for this leg in knots.
     */
    avgGroundSpeed?: number;

    /**
     * The average true airspeed (TAS) for this leg in knots.
     */
    avgTrueAirspeed?: number;

    /**
     * The average wind direction for this leg in degrees from true north.
     */
    avgWindDir?: number;

    /**
     * The average wind speed for this leg in knots.
     */
    avgWindSpeed?: number;

    /**
     * The day low level altitude in feet above sea level for the leg ending at this
     * waypoint.
     */
    dayLowAlt?: number;

    /**
     * Estimated Time of Arrival (ETA) at this waypoint in ISO 8601 UTC format, with
     * millisecond precision.
     */
    eta?: string;

    /**
     * The amount of fuel onloaded or offloaded at this waypoint in pounds (negative
     * value for offload).
     */
    exchangedFuel?: number;

    /**
     * The leg fuel flow in pounds per hour.
     */
    fuelFlow?: number;

    /**
     * The icing intensity classification for this flight (LIGHT, MODERATE, etc).
     */
    iceCat?: string;

    /**
     * WGS84 latitude of the point location, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    lat?: number;

    /**
     * The planned alternate leg based on user-defined constraints, International Civil
     * Aviation Organization (ICAO) code preferred.
     */
    legAlternate?: string;

    /**
     * The percent degrade due to drag for this aircraft for this leg.
     */
    legDragIndex?: number;

    /**
     * The fuel degrade percentage used for this leg.
     */
    legFuelDegrade?: number;

    /**
     * The average Mach speed for this leg.
     */
    legMach?: number;

    /**
     * The mission index value for this leg. The mission index is the ratio of
     * time-related cost of aircraft operation to the cost of fuel.
     */
    legMsnIndex?: number;

    /**
     * The wind factor for this leg in knots. A positive value indicates a headwind,
     * while a negative value indicates a tailwind.
     */
    legWindFac?: number;

    /**
     * WGS84 longitude of the point location, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon?: number;

    /**
     * The magnetic course at leg midpoint in degrees from true north.
     */
    magCourse?: number;

    /**
     * The magnetic heading at leg midpoint in degrees from true north.
     */
    magHeading?: number;

    /**
     * The magnetic variation for this leg in degrees.
     */
    magVar?: number;

    /**
     * Navigational Aid (NAVAID) identification code.
     */
    navaid?: string;

    /**
     * The night low level altitude in feet above sea level for the leg ending at this
     * waypoint.
     */
    nightLowAlt?: number;

    /**
     * The night vision goggle low level altitude in feet above sea level for the leg
     * ending at this waypoint.
     */
    nvgLowAlt?: number;

    /**
     * The wind direction at this specific point in degrees from true north.
     */
    pointWindDir?: number;

    /**
     * The wind velocity at this specific point in knots.
     */
    pointWindSpeed?: number;

    /**
     * The primary UHF radio frequency used for the air refueling track or anchor in
     * megahertz.
     */
    priFreq?: number;

    /**
     * The secondary UHF radio frequency used for the air refueling track or anchor in
     * megahertz.
     */
    secFreq?: number;

    /**
     * Tactical Air Navigation (TACAN) channel for the Navigational Aid (NAVAID).
     */
    tacanChannel?: string;

    /**
     * Average temperature deviation from standard day profile for this leg in degrees
     * Celsius.
     */
    tempDev?: number;

    /**
     * The thunderstorm intensity classification for this flight (LIGHT, MODERATE,
     * etc).
     */
    thunderCat?: string;

    /**
     * The total air distance to this waypoint in nautical miles.
     */
    totalAirDistance?: number;

    /**
     * The total distance flown to this waypoint calculated from point of departure in
     * nautical miles.
     */
    totalFlownDistance?: number;

    /**
     * The total distance remaining from this waypoint to the point of arrival in
     * nautical miles.
     */
    totalRemDistance?: number;

    /**
     * The total fuel remaining at this waypoint in pounds.
     */
    totalRemFuel?: number;

    /**
     * The total time accumulated from takeoff to this waypoint expressed as HH:MM.
     */
    totalTime?: string;

    /**
     * The total time remaining from this waypoint to the point of arrival expressed as
     * HH:MM.
     */
    totalTimeRem?: string;

    /**
     * The total fuel used to this waypoint from point of departure in pounds.
     */
    totalUsedFuel?: number;

    /**
     * The total weight of the aircraft at this waypoint in pounds.
     */
    totalWeight?: number;

    /**
     * The true course at leg midpoint in degrees from true north.
     */
    trueCourse?: number;

    /**
     * The turbulence intensity classification for this flight (LIGHT, MODERATE, etc).
     */
    turbCat?: string;

    /**
     * VHF Omni-directional Range (VOR) frequency for the Navigational Aid (NAVAID) in
     * megahertz.
     */
    vorFreq?: number;

    /**
     * The waypoint number on the route. Comment points do not get a waypoint number.
     */
    waypointNum?: number;

    /**
     * The zone/leg distance flown in nautical miles.
     */
    zoneDistance?: number;

    /**
     * The amount of fuel used on this zone/leg in pounds.
     */
    zoneFuel?: number;

    /**
     * The time to fly this zone/leg in minutes.
     */
    zoneTime?: number;
  }
}

export interface FlightplanRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface FlightplanUpdateParams {
  /**
   * The airfield identifier of the arrival location, International Civil Aviation
   * Organization (ICAO) code preferred.
   */
  arrAirfield: string;

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
   * The airfield identifier of the departure location, International Civil Aviation
   * Organization (ICAO) code preferred.
   */
  depAirfield: string;

  /**
   * The generation time of this flight plan in ISO 8601 UTC format, with millisecond
   * precision.
   */
  genTS: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  body_id?: string;

  /**
   * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
   * EAGLE, KC-130 HERCULES, etc.) of the aircraft associated with this flight plan.
   * Intended as, but not constrained to, MIL-STD-6016 environment dependent specific
   * type designations.
   */
  aircraftMDS?: string;

  /**
   * Collection of air refueling events occurring on this flight.
   */
  airRefuelEvents?: Array<FlightplanUpdateParams.AirRefuelEvent>;

  /**
   * Air Mobility Command (AMC) mission identifier according to Mobility Air Forces
   * (MAF) encode/decode procedures.
   */
  amcMissionId?: string;

  /**
   * Fuel burned from the initial approach point to landing in pounds.
   */
  appLandingFuel?: number;

  /**
   * The first designated alternate arrival airfield, International Civil Aviation
   * Organization (ICAO) code preferred.
   */
  arrAlternate1?: string;

  /**
   * Fuel required to fly to alternate landing site 1 and land in pounds.
   */
  arrAlternate1Fuel?: number;

  /**
   * The second designated alternate arrival airfield, International Civil Aviation
   * Organization (ICAO) code preferred.
   */
  arrAlternate2?: string;

  /**
   * Fuel required to fly to alternate landing site 2 and land in pounds.
   */
  arrAlternate2Fuel?: number;

  /**
   * Additional fuel burned at landing/missed approach for icing during arrival in
   * pounds.
   */
  arrIceFuel?: number;

  /**
   * The arrival runway for this flight.
   */
  arrRunway?: string;

  /**
   * Array of Air Traffic Control (ATC) addresses.
   */
  atcAddresses?: Array<string>;

  /**
   * Average temperature deviation of the primary, divert, and alternate path for the
   * route between first Top of Climb and last Top of Descent in degrees Celsius.
   */
  avgTempDev?: number;

  /**
   * Fuel planned to be burned during the flight in pounds.
   */
  burnedFuel?: number;

  /**
   * The call sign assigned to the aircraft for this flight plan.
   */
  callSign?: string;

  /**
   * Remarks about the planned cargo associated with this flight plan.
   */
  cargoRemark?: string;

  /**
   * Fuel required from brake release to Top of Climb in pounds.
   */
  climbFuel?: number;

  /**
   * Time required from brake release to Top of Climb expressed as HH:MM.
   */
  climbTime?: string;

  /**
   * The amount of contingency fuel in pounds.
   */
  contingencyFuel?: number;

  /**
   * Array of country codes for the countries overflown during this flight in ISO
   * 3166-1 Alpha-2 format.
   */
  countryCodes?: Array<string>;

  /**
   * The designated alternate departure airfield, International Civil Aviation
   * Organization (ICAO) code preferred.
   */
  depAlternate?: string;

  /**
   * The depressurization fuel required to fly from the Equal Time Point to the Last
   * Suitable/First Suitable airfield at depressurization altitude in pounds.
   */
  depressFuel?: number;

  /**
   * The departure runway for this flight.
   */
  depRunway?: string;

  /**
   * The percent degrade due to drag for this aircraft.
   */
  dragIndex?: number;

  /**
   * Additional fuel burned at landing/missed approach for an early descent in
   * pounds.
   */
  earlyDescentFuel?: number;

  /**
   * Total endurance time based on the fuel on board expressed as HH:MM.
   */
  enduranceTime?: string;

  /**
   * Fuel required to fly from Top of Climb to Top of Descent in pounds.
   */
  enrouteFuel?: number;

  /**
   * Time required to fly from Top of Climb to Top of Descent expressed as HH:MM.
   */
  enrouteTime?: string;

  /**
   * The list of equipment on the aircraft as defined in the Flight Information
   * Publications (FLIP) General Planning (GP) manual.
   */
  equipment?: string;

  /**
   * The estimated time of departure for the aircraft, in ISO 8601 UTC format, with
   * millisecond precision.
   */
  estDepTime?: string;

  /**
   * Array of Extended Operations (ETOPS) adequate landing airfields that are within
   * the mission region.
   */
  etopsAirfields?: Array<string>;

  /**
   * Array of Extended Operations (ETOPS) alternate suitable landing airfields that
   * are within the mission region.
   */
  etopsAltAirfields?: Array<string>;

  /**
   * The Extended Operations (ETOPS) rating used to calculate this flight plan.
   */
  etopsRating?: string;

  /**
   * The Extended Operations (ETOPS) validity window for the alternate airfield.
   */
  etopsValWindow?: string;

  /**
   * The source ID of the flight plan from the generating system.
   */
  externalId?: string;

  /**
   * Collection of messages associated with this flight plan indicating the severity,
   * the point where the message was generated, the path (Primary, Alternate, etc.),
   * and the text of the message.
   */
  flightPlanMessages?: Array<FlightplanUpdateParams.FlightPlanMessage>;

  /**
   * Collection of point groups generated for this flight plan. Groups include point
   * sets for Extended Operations (ETOPS), Critical Fuel Point, and Equal Time Point
   * (ETP).
   */
  flightPlanPointGroups?: Array<FlightplanUpdateParams.FlightPlanPointGroup>;

  /**
   * Collection of waypoints associated with this flight plan.
   */
  flightPlanWaypoints?: Array<FlightplanUpdateParams.FlightPlanWaypoint>;

  /**
   * The flight rules this flight plan is being filed under.
   */
  flightRules?: string;

  /**
   * The type of flight (MILITARY, CIVILIAN, etc).
   */
  flightType?: string;

  /**
   * The fuel degrade percentage used for this mission.
   */
  fuelDegrade?: number;

  /**
   * The GPS Receiver Autonomous Integrity Monitoring (RAIM) message. A RAIM system
   * assesses the integrity of the GPS signals. This system predicts outages for a
   * specified geographical area. These predictions are based on the location, path,
   * and scheduled GPS satellite outages.
   */
  gpsRAIM?: string;

  /**
   * Additional fuel burned at Top of Climb in pounds.
   */
  holdDownFuel?: number;

  /**
   * Additional fuel burned at the destination for holding in pounds.
   */
  holdFuel?: number;

  /**
   * Additional time for holding at the destination expressed as HH:MM.
   */
  holdTime?: string;

  /**
   * The UDL unique identifier of the aircraft associated with this flight plan.
   */
  idAircraft?: string;

  /**
   * The UDL unique identifier of the arrival airfield associated with this flight
   * plan.
   */
  idArrAirfield?: string;

  /**
   * The UDL unique identifier of the departure airfield associated with this flight
   * plan.
   */
  idDepAirfield?: string;

  /**
   * The amount of identified extra fuel carried and not available in the burn plan
   * in pounds.
   */
  identExtraFuel?: number;

  /**
   * The UDL unique identifier of the aircraft sortie associated with this flight
   * plan.
   */
  idSortie?: string;

  /**
   * A character string representation of the initial filed cruise speed for this
   * flight (prepended values of K, N, and M represent kilometers per hour, knots,
   * and Mach, respectively).
   */
  initialCruiseSpeed?: string;

  /**
   * A character string representation of the initial filed altitude level for this
   * flight (prepended values of F, S, A, and M represent flight level in hundreds of
   * feet, standard metric level in tens of meters, altitude in hundreds of feet, and
   * altitude in tens of meters, respectively).
   */
  initialFlightLevel?: string;

  /**
   * Fuel planned to be remaining on the airplane at landing in pounds.
   */
  landingFuel?: number;

  /**
   * The leg number of this flight plan.
   */
  legNum?: number;

  /**
   * The minimum fuel on board required to divert in pounds.
   */
  minDivertFuel?: number;

  /**
   * The mission index value for this mission. The mission index is the ratio of
   * time-related cost of aircraft operation to the cost of fuel.
   */
  msnIndex?: number;

  /**
   * Additional remarks for air traffic control for this flight.
   */
  notes?: string;

  /**
   * The number of aircraft flying this flight plan.
   */
  numAircraft?: number;

  /**
   * Additional fuel burned at Top of Descent for the operational condition in
   * pounds.
   */
  opConditionFuel?: number;

  /**
   * Operating weight of the aircraft in pounds.
   */
  opWeight?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Air Traffic Control address filing the flight plan.
   */
  originator?: string;

  /**
   * Remarks from the planners concerning this flight plan.
   */
  plannerRemark?: string;

  /**
   * Total of all fuel required to complete the flight in pounds, including fuel to
   * be dispensed on a refueling mission.
   */
  rampFuel?: number;

  /**
   * Total fuel remaining at alternate landing site 1 in pounds.
   */
  remAlternate1Fuel?: number;

  /**
   * Total fuel remaining at alternate landing site 2 in pounds.
   */
  remAlternate2Fuel?: number;

  /**
   * The amount of reserve fuel in pounds.
   */
  reserveFuel?: number;

  /**
   * The 1801 fileable route of flight string for this flight. The route of flight
   * string contains route designators, significant points, change of speed/altitude,
   * change of flight rules, and cruise climbs.
   */
  routeString?: string;

  /**
   * Name of the planned Standard Instrument Departure (SID) procedure.
   */
  sid?: string;

  /**
   * Name of the planned Standard Terminal Arrival (STAR) procedure.
   */
  star?: string;

  /**
   * Status of this flight plan (e.g., ACTIVE, APPROVED, PLANNED, etc.).
   */
  status?: string;

  /**
   * The tail number of the aircraft associated with this flight plan.
   */
  tailNumber?: string;

  /**
   * Fuel at takeoff, which is calculated as the ramp fuel minus the taxi fuel in
   * pounds.
   */
  takeoffFuel?: number;

  /**
   * Fuel required to start engines and taxi to the end of the runway in pounds.
   */
  taxiFuel?: number;

  /**
   * Additional fuel burned at Top of Descent for thunderstorm avoidance in pounds.
   */
  thunderAvoidFuel?: number;

  /**
   * Fuel remaining at Top of Climb in pounds.
   */
  tocFuel?: number;

  /**
   * Additional fuel burned at Top of Climb for icing in pounds.
   */
  tocIceFuel?: number;

  /**
   * Fuel remaining at Top of Descent in pounds.
   */
  todFuel?: number;

  /**
   * Additional fuel burned at Top of Descent for icing in pounds.
   */
  todIceFuel?: number;

  /**
   * The amount of unidentified extra fuel required to get to min landing in pounds.
   */
  unidentExtraFuel?: number;

  /**
   * The amount of unusable fuel in pounds.
   */
  unusableFuel?: number;

  /**
   * The wake turbulence category for this flight. The categories are assigned by the
   * International Civil Aviation Organization (ICAO) and are based on maximum
   * certified takeoff mass for the purpose of separating aircraft in flight due to
   * wake turbulence. Valid values include LIGHT, MEDIUM, LARGE, HEAVY, and SUPER.
   */
  wakeTurbCat?: string;

  /**
   * Wind factor for the first half of the route. This is the average wind factor
   * from first Top of Climb to the mid-time of the entire route in knots. A positive
   * value indicates a headwind, while a negative value indicates a tailwind.
   */
  windFac1?: number;

  /**
   * Wind factor for the second half of the route. This is the average wind factor
   * from the mid-time of the entire route to last Top of Descent in knots. A
   * positive value indicates a headwind, while a negative value indicates a
   * tailwind.
   */
  windFac2?: number;

  /**
   * Average wind factor from Top of Climb to Top of Descent in knots. A positive
   * value indicates a headwind, while a negative value indicates a tailwind.
   */
  windFacAvg?: number;

  /**
   * The date and time the weather valid period ends in ISO 8601 UTC format, with
   * millisecond precision.
   */
  wxValidEnd?: string;

  /**
   * The date and time the weather valid period begins in ISO 8601 UTC format, with
   * millisecond precision.
   */
  wxValidStart?: string;
}

export namespace FlightplanUpdateParams {
  /**
   * Collection of air refueling events occurring on this flight.
   */
  export interface AirRefuelEvent {
    /**
     * Additional degrade for air refueling, cumulative with fuelDegrade field percent.
     */
    arDegrade?: number;

    /**
     * Fuel onloaded (use positive numbers) or fuel offloaded (use negative numbers) in
     * pounds.
     */
    arExchangedFuel?: number;

    /**
     * The number of this air refueling event within the flight plan.
     */
    arNum?: number;

    /**
     * Fuel required to fly from air refueling exit point to air refueling divert
     * alternate airfield in pounds.
     */
    divertFuel?: number;

    /**
     * Fuel remaining at the air refueling exit in pounds.
     */
    exitFuel?: number;
  }

  /**
   * Collection of messages associated with this flight plan indicating the severity,
   * the point where the message was generated, the path (Primary, Alternate, etc.),
   * and the text of the message.
   */
  export interface FlightPlanMessage {
    /**
     * The text of the message.
     */
    msgText?: string;

    /**
     * The flight path that generated the message (PRIMARY, ALTERNATE, etc.).
     */
    routePath?: string;

    /**
     * The severity of the message.
     */
    severity?: string;

    /**
     * The waypoint number for which the message was generated, or enter "PLAN" for a
     * message impacting the entire route.
     */
    wpNum?: string;
  }

  /**
   * Collection of point groups generated for this flight plan. Groups include point
   * sets for Extended Operations (ETOPS), Critical Fuel Point, and Equal Time Point
   * (ETP).
   */
  export interface FlightPlanPointGroup {
    /**
     * Average fuel flow at which the fuel was calculated in pounds per hour.
     */
    avgFuelFlow?: number;

    /**
     * Average wind factor from the Extended Operations (ETOPS) point to the recovery
     * airfield in knots.
     */
    etopsAvgWindFactor?: number;

    /**
     * Distance from the Extended Operations (ETOPS) point to the recovery airfield in
     * nautical miles.
     */
    etopsDistance?: number;

    /**
     * Fuel required to fly from the Extended Operations (ETOPS) point to the recovery
     * airfield in pounds.
     */
    etopsReqFuel?: number;

    /**
     * Temperature deviation from the Extended Operations (ETOPS) point to the recovery
     * airfield in degrees Celsius.
     */
    etopsTempDev?: number;

    /**
     * Time to fly from the Extended Operations (ETOPS) point to the recovery airfield
     * expressed in HH:MM format.
     */
    etopsTime?: string;

    /**
     * Array of point data for this Point Group.
     */
    flightPlanPoints?: Array<FlightPlanPointGroup.FlightPlanPoint>;

    /**
     * Total time from takeoff when the point is reached expressed in HH:MM format.
     */
    fromTakeoffTime?: string;

    /**
     * Average wind factor from the Equal Time Point (ETP) to the first suitable
     * airfield in knots.
     */
    fsafAvgWindFactor?: number;

    /**
     * Distance from the Equal Time Point (ETP) to the first suitable airfield in
     * nautical miles.
     */
    fsafDistance?: number;

    /**
     * Fuel required to fly from the Equal Time Point (ETP) to the first suitable
     * airfield in pounds.
     */
    fsafReqFuel?: number;

    /**
     * Temperature deviation from the Equal Time Point (ETP) to the first suitable
     * airfield in degrees Celsius.
     */
    fsafTempDev?: number;

    /**
     * Time to fly from the Equal Time Point (ETP) to the first suitable airfield
     * expressed in HH:MM format.
     */
    fsafTime?: string;

    /**
     * Flight level of the point at which the fuel was calculated in feet.
     */
    fuelCalcAlt?: number;

    /**
     * True airspeed at which the fuel was calculated in knots.
     */
    fuelCalcSpd?: number;

    /**
     * Average wind factor from the Equal Time Point (ETP) to the last suitable
     * airfield in knots.
     */
    lsafAvgWindFactor?: number;

    /**
     * Distance from the Equal Time Point (ETP) to the last suitable airfield in
     * nautical miles.
     */
    lsafDistance?: number;

    /**
     * Name of the last suitable airfield, International Civil Aviation Organization
     * (ICAO) code preferred.
     */
    lsafName?: string;

    /**
     * Fuel required to fly from the Equal Time Point (ETP) to the last suitable
     * airfield in pounds.
     */
    lsafReqFuel?: number;

    /**
     * Temperature deviation from the Equal Time Point (ETP) to the last suitable
     * airfield in degrees Celsius.
     */
    lsafTempDev?: number;

    /**
     * Time to fly from the Equal Time Point (ETP) to the last suitable airfield
     * expressed in HH:MM format.
     */
    lsafTime?: string;

    /**
     * Amount of planned fuel on board when the point is reached in pounds.
     */
    plannedFuel?: number;

    /**
     * Name of the point group, usually Extended Operations (ETOPS), Critical Fuel
     * Point, and Equal Time Point (ETP) sections.
     */
    pointGroupName?: string;

    /**
     * Specifies which Point Group case requires the most fuel.
     */
    worstFuelCase?: string;
  }

  export namespace FlightPlanPointGroup {
    /**
     * Array of point data for this Point Group.
     */
    export interface FlightPlanPoint {
      /**
       * Estimated Time of Arrival (ETA) at this point in ISO 8601 UTC format, with
       * millisecond precision.
       */
      fppEta?: string;

      /**
       * WGS84 latitude of the point location, in degrees. -90 to 90 degrees (negative
       * values south of equator).
       */
      fppLat?: number;

      /**
       * WGS84 longitude of the point location, in degrees. -180 to 180 degrees (negative
       * values west of Prime Meridian).
       */
      fppLon?: number;

      /**
       * Fuel required at this point to execute an Equal Time Point (ETP) or Extended
       * Operations (ETOPS) plan in pounds.
       */
      fppReqFuel?: number;

      /**
       * Name of this point.
       */
      pointName?: string;
    }
  }

  /**
   * Collection of waypoints associated with this flight plan.
   */
  export interface FlightPlanWaypoint {
    /**
     * Points are designated by type as either a comment point or a waypoint. A comment
     * point conveys important information about the point for pilots but is not
     * entered into a flight management system. A waypoint is a point that is entered
     * into a flight management system and/or filed with Air Traffic Control.
     */
    type: string;

    /**
     * Name of the point. The name of a comment point identifies important information
     * about that point, e.g. Top of Climb. The name of a waypoint identifies the
     * location of that point.
     */
    waypointName: string;

    /**
     * The air-to-air Tactical Air Navigation (TACAN) channels used by the
     * receiver/tanker during air refueling.
     */
    aaTacanChannel?: string;

    /**
     * The air distance of this leg in nautical miles.
     */
    airDistance?: number;

    /**
     * The flight path flown for this leg.
     */
    airway?: string;

    /**
     * Altitude of a level, point, or object measured in feet above mean sea level.
     */
    alt?: number;

    /**
     * The ID of the air refueling track/anchor or fixed track.
     */
    arId?: string;

    /**
     * Point identifying an air refueling track/anchor or fixed track.
     */
    arpt?: string;

    /**
     * Actual Time of Arrival (ATA) at this waypoint in ISO 8601 UTC format, with
     * millisecond precision.
     */
    ata?: string;

    /**
     * The average calibrated airspeed (CAS) for this leg in knots.
     */
    avgCalAirspeed?: number;

    /**
     * The average drift angle for this leg in degrees from true north.
     */
    avgDriftAng?: number;

    /**
     * The average ground speed for this leg in knots.
     */
    avgGroundSpeed?: number;

    /**
     * The average true airspeed (TAS) for this leg in knots.
     */
    avgTrueAirspeed?: number;

    /**
     * The average wind direction for this leg in degrees from true north.
     */
    avgWindDir?: number;

    /**
     * The average wind speed for this leg in knots.
     */
    avgWindSpeed?: number;

    /**
     * The day low level altitude in feet above sea level for the leg ending at this
     * waypoint.
     */
    dayLowAlt?: number;

    /**
     * Estimated Time of Arrival (ETA) at this waypoint in ISO 8601 UTC format, with
     * millisecond precision.
     */
    eta?: string;

    /**
     * The amount of fuel onloaded or offloaded at this waypoint in pounds (negative
     * value for offload).
     */
    exchangedFuel?: number;

    /**
     * The leg fuel flow in pounds per hour.
     */
    fuelFlow?: number;

    /**
     * The icing intensity classification for this flight (LIGHT, MODERATE, etc).
     */
    iceCat?: string;

    /**
     * WGS84 latitude of the point location, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    lat?: number;

    /**
     * The planned alternate leg based on user-defined constraints, International Civil
     * Aviation Organization (ICAO) code preferred.
     */
    legAlternate?: string;

    /**
     * The percent degrade due to drag for this aircraft for this leg.
     */
    legDragIndex?: number;

    /**
     * The fuel degrade percentage used for this leg.
     */
    legFuelDegrade?: number;

    /**
     * The average Mach speed for this leg.
     */
    legMach?: number;

    /**
     * The mission index value for this leg. The mission index is the ratio of
     * time-related cost of aircraft operation to the cost of fuel.
     */
    legMsnIndex?: number;

    /**
     * The wind factor for this leg in knots. A positive value indicates a headwind,
     * while a negative value indicates a tailwind.
     */
    legWindFac?: number;

    /**
     * WGS84 longitude of the point location, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon?: number;

    /**
     * The magnetic course at leg midpoint in degrees from true north.
     */
    magCourse?: number;

    /**
     * The magnetic heading at leg midpoint in degrees from true north.
     */
    magHeading?: number;

    /**
     * The magnetic variation for this leg in degrees.
     */
    magVar?: number;

    /**
     * Navigational Aid (NAVAID) identification code.
     */
    navaid?: string;

    /**
     * The night low level altitude in feet above sea level for the leg ending at this
     * waypoint.
     */
    nightLowAlt?: number;

    /**
     * The night vision goggle low level altitude in feet above sea level for the leg
     * ending at this waypoint.
     */
    nvgLowAlt?: number;

    /**
     * The wind direction at this specific point in degrees from true north.
     */
    pointWindDir?: number;

    /**
     * The wind velocity at this specific point in knots.
     */
    pointWindSpeed?: number;

    /**
     * The primary UHF radio frequency used for the air refueling track or anchor in
     * megahertz.
     */
    priFreq?: number;

    /**
     * The secondary UHF radio frequency used for the air refueling track or anchor in
     * megahertz.
     */
    secFreq?: number;

    /**
     * Tactical Air Navigation (TACAN) channel for the Navigational Aid (NAVAID).
     */
    tacanChannel?: string;

    /**
     * Average temperature deviation from standard day profile for this leg in degrees
     * Celsius.
     */
    tempDev?: number;

    /**
     * The thunderstorm intensity classification for this flight (LIGHT, MODERATE,
     * etc).
     */
    thunderCat?: string;

    /**
     * The total air distance to this waypoint in nautical miles.
     */
    totalAirDistance?: number;

    /**
     * The total distance flown to this waypoint calculated from point of departure in
     * nautical miles.
     */
    totalFlownDistance?: number;

    /**
     * The total distance remaining from this waypoint to the point of arrival in
     * nautical miles.
     */
    totalRemDistance?: number;

    /**
     * The total fuel remaining at this waypoint in pounds.
     */
    totalRemFuel?: number;

    /**
     * The total time accumulated from takeoff to this waypoint expressed as HH:MM.
     */
    totalTime?: string;

    /**
     * The total time remaining from this waypoint to the point of arrival expressed as
     * HH:MM.
     */
    totalTimeRem?: string;

    /**
     * The total fuel used to this waypoint from point of departure in pounds.
     */
    totalUsedFuel?: number;

    /**
     * The total weight of the aircraft at this waypoint in pounds.
     */
    totalWeight?: number;

    /**
     * The true course at leg midpoint in degrees from true north.
     */
    trueCourse?: number;

    /**
     * The turbulence intensity classification for this flight (LIGHT, MODERATE, etc).
     */
    turbCat?: string;

    /**
     * VHF Omni-directional Range (VOR) frequency for the Navigational Aid (NAVAID) in
     * megahertz.
     */
    vorFreq?: number;

    /**
     * The waypoint number on the route. Comment points do not get a waypoint number.
     */
    waypointNum?: number;

    /**
     * The zone/leg distance flown in nautical miles.
     */
    zoneDistance?: number;

    /**
     * The amount of fuel used on this zone/leg in pounds.
     */
    zoneFuel?: number;

    /**
     * The time to fly this zone/leg in minutes.
     */
    zoneTime?: number;
  }
}

export interface FlightplanListParams extends OffsetPageParams {}

export interface FlightplanCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface FlightplanTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  firstResult?: number;

  maxResults?: number;
}

export interface FlightplanUnvalidatedPublishParams {
  body: Array<FlightplanUnvalidatedPublishParams.Body>;
}

export namespace FlightplanUnvalidatedPublishParams {
  /**
   * Flight Plan contains data specifying the details of an intended flight including
   * schedule and expected route.
   */
  export interface Body {
    /**
     * The airfield identifier of the arrival location, International Civil Aviation
     * Organization (ICAO) code preferred.
     */
    arrAirfield: string;

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
     * The airfield identifier of the departure location, International Civil Aviation
     * Organization (ICAO) code preferred.
     */
    depAirfield: string;

    /**
     * The generation time of this flight plan in ISO 8601 UTC format, with millisecond
     * precision.
     */
    genTS: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * The aircraft Model Design Series (MDS) designation (e.g. E-2C HAWKEYE, F-15
     * EAGLE, KC-130 HERCULES, etc.) of the aircraft associated with this flight plan.
     * Intended as, but not constrained to, MIL-STD-6016 environment dependent specific
     * type designations.
     */
    aircraftMDS?: string;

    /**
     * Collection of air refueling events occurring on this flight.
     */
    airRefuelEvents?: Array<Body.AirRefuelEvent>;

    /**
     * Air Mobility Command (AMC) mission identifier according to Mobility Air Forces
     * (MAF) encode/decode procedures.
     */
    amcMissionId?: string;

    /**
     * Fuel burned from the initial approach point to landing in pounds.
     */
    appLandingFuel?: number;

    /**
     * The first designated alternate arrival airfield, International Civil Aviation
     * Organization (ICAO) code preferred.
     */
    arrAlternate1?: string;

    /**
     * Fuel required to fly to alternate landing site 1 and land in pounds.
     */
    arrAlternate1Fuel?: number;

    /**
     * The second designated alternate arrival airfield, International Civil Aviation
     * Organization (ICAO) code preferred.
     */
    arrAlternate2?: string;

    /**
     * Fuel required to fly to alternate landing site 2 and land in pounds.
     */
    arrAlternate2Fuel?: number;

    /**
     * Additional fuel burned at landing/missed approach for icing during arrival in
     * pounds.
     */
    arrIceFuel?: number;

    /**
     * The arrival runway for this flight.
     */
    arrRunway?: string;

    /**
     * Array of Air Traffic Control (ATC) addresses.
     */
    atcAddresses?: Array<string>;

    /**
     * Average temperature deviation of the primary, divert, and alternate path for the
     * route between first Top of Climb and last Top of Descent in degrees Celsius.
     */
    avgTempDev?: number;

    /**
     * Fuel planned to be burned during the flight in pounds.
     */
    burnedFuel?: number;

    /**
     * The call sign assigned to the aircraft for this flight plan.
     */
    callSign?: string;

    /**
     * Remarks about the planned cargo associated with this flight plan.
     */
    cargoRemark?: string;

    /**
     * Fuel required from brake release to Top of Climb in pounds.
     */
    climbFuel?: number;

    /**
     * Time required from brake release to Top of Climb expressed as HH:MM.
     */
    climbTime?: string;

    /**
     * The amount of contingency fuel in pounds.
     */
    contingencyFuel?: number;

    /**
     * Array of country codes for the countries overflown during this flight in ISO
     * 3166-1 Alpha-2 format.
     */
    countryCodes?: Array<string>;

    /**
     * The designated alternate departure airfield, International Civil Aviation
     * Organization (ICAO) code preferred.
     */
    depAlternate?: string;

    /**
     * The depressurization fuel required to fly from the Equal Time Point to the Last
     * Suitable/First Suitable airfield at depressurization altitude in pounds.
     */
    depressFuel?: number;

    /**
     * The departure runway for this flight.
     */
    depRunway?: string;

    /**
     * The percent degrade due to drag for this aircraft.
     */
    dragIndex?: number;

    /**
     * Additional fuel burned at landing/missed approach for an early descent in
     * pounds.
     */
    earlyDescentFuel?: number;

    /**
     * Total endurance time based on the fuel on board expressed as HH:MM.
     */
    enduranceTime?: string;

    /**
     * Fuel required to fly from Top of Climb to Top of Descent in pounds.
     */
    enrouteFuel?: number;

    /**
     * Time required to fly from Top of Climb to Top of Descent expressed as HH:MM.
     */
    enrouteTime?: string;

    /**
     * The list of equipment on the aircraft as defined in the Flight Information
     * Publications (FLIP) General Planning (GP) manual.
     */
    equipment?: string;

    /**
     * The estimated time of departure for the aircraft, in ISO 8601 UTC format, with
     * millisecond precision.
     */
    estDepTime?: string;

    /**
     * Array of Extended Operations (ETOPS) adequate landing airfields that are within
     * the mission region.
     */
    etopsAirfields?: Array<string>;

    /**
     * Array of Extended Operations (ETOPS) alternate suitable landing airfields that
     * are within the mission region.
     */
    etopsAltAirfields?: Array<string>;

    /**
     * The Extended Operations (ETOPS) rating used to calculate this flight plan.
     */
    etopsRating?: string;

    /**
     * The Extended Operations (ETOPS) validity window for the alternate airfield.
     */
    etopsValWindow?: string;

    /**
     * The source ID of the flight plan from the generating system.
     */
    externalId?: string;

    /**
     * Collection of messages associated with this flight plan indicating the severity,
     * the point where the message was generated, the path (Primary, Alternate, etc.),
     * and the text of the message.
     */
    flightPlanMessages?: Array<Body.FlightPlanMessage>;

    /**
     * Collection of point groups generated for this flight plan. Groups include point
     * sets for Extended Operations (ETOPS), Critical Fuel Point, and Equal Time Point
     * (ETP).
     */
    flightPlanPointGroups?: Array<Body.FlightPlanPointGroup>;

    /**
     * Collection of waypoints associated with this flight plan.
     */
    flightPlanWaypoints?: Array<Body.FlightPlanWaypoint>;

    /**
     * The flight rules this flight plan is being filed under.
     */
    flightRules?: string;

    /**
     * The type of flight (MILITARY, CIVILIAN, etc).
     */
    flightType?: string;

    /**
     * The fuel degrade percentage used for this mission.
     */
    fuelDegrade?: number;

    /**
     * The GPS Receiver Autonomous Integrity Monitoring (RAIM) message. A RAIM system
     * assesses the integrity of the GPS signals. This system predicts outages for a
     * specified geographical area. These predictions are based on the location, path,
     * and scheduled GPS satellite outages.
     */
    gpsRAIM?: string;

    /**
     * Additional fuel burned at Top of Climb in pounds.
     */
    holdDownFuel?: number;

    /**
     * Additional fuel burned at the destination for holding in pounds.
     */
    holdFuel?: number;

    /**
     * Additional time for holding at the destination expressed as HH:MM.
     */
    holdTime?: string;

    /**
     * The UDL unique identifier of the aircraft associated with this flight plan.
     */
    idAircraft?: string;

    /**
     * The UDL unique identifier of the arrival airfield associated with this flight
     * plan.
     */
    idArrAirfield?: string;

    /**
     * The UDL unique identifier of the departure airfield associated with this flight
     * plan.
     */
    idDepAirfield?: string;

    /**
     * The amount of identified extra fuel carried and not available in the burn plan
     * in pounds.
     */
    identExtraFuel?: number;

    /**
     * The UDL unique identifier of the aircraft sortie associated with this flight
     * plan.
     */
    idSortie?: string;

    /**
     * A character string representation of the initial filed cruise speed for this
     * flight (prepended values of K, N, and M represent kilometers per hour, knots,
     * and Mach, respectively).
     */
    initialCruiseSpeed?: string;

    /**
     * A character string representation of the initial filed altitude level for this
     * flight (prepended values of F, S, A, and M represent flight level in hundreds of
     * feet, standard metric level in tens of meters, altitude in hundreds of feet, and
     * altitude in tens of meters, respectively).
     */
    initialFlightLevel?: string;

    /**
     * Fuel planned to be remaining on the airplane at landing in pounds.
     */
    landingFuel?: number;

    /**
     * The leg number of this flight plan.
     */
    legNum?: number;

    /**
     * The minimum fuel on board required to divert in pounds.
     */
    minDivertFuel?: number;

    /**
     * The mission index value for this mission. The mission index is the ratio of
     * time-related cost of aircraft operation to the cost of fuel.
     */
    msnIndex?: number;

    /**
     * Additional remarks for air traffic control for this flight.
     */
    notes?: string;

    /**
     * The number of aircraft flying this flight plan.
     */
    numAircraft?: number;

    /**
     * Additional fuel burned at Top of Descent for the operational condition in
     * pounds.
     */
    opConditionFuel?: number;

    /**
     * Operating weight of the aircraft in pounds.
     */
    opWeight?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Air Traffic Control address filing the flight plan.
     */
    originator?: string;

    /**
     * Remarks from the planners concerning this flight plan.
     */
    plannerRemark?: string;

    /**
     * Total of all fuel required to complete the flight in pounds, including fuel to
     * be dispensed on a refueling mission.
     */
    rampFuel?: number;

    /**
     * Total fuel remaining at alternate landing site 1 in pounds.
     */
    remAlternate1Fuel?: number;

    /**
     * Total fuel remaining at alternate landing site 2 in pounds.
     */
    remAlternate2Fuel?: number;

    /**
     * The amount of reserve fuel in pounds.
     */
    reserveFuel?: number;

    /**
     * The 1801 fileable route of flight string for this flight. The route of flight
     * string contains route designators, significant points, change of speed/altitude,
     * change of flight rules, and cruise climbs.
     */
    routeString?: string;

    /**
     * Name of the planned Standard Instrument Departure (SID) procedure.
     */
    sid?: string;

    /**
     * Name of the planned Standard Terminal Arrival (STAR) procedure.
     */
    star?: string;

    /**
     * Status of this flight plan (e.g., ACTIVE, APPROVED, PLANNED, etc.).
     */
    status?: string;

    /**
     * The tail number of the aircraft associated with this flight plan.
     */
    tailNumber?: string;

    /**
     * Fuel at takeoff, which is calculated as the ramp fuel minus the taxi fuel in
     * pounds.
     */
    takeoffFuel?: number;

    /**
     * Fuel required to start engines and taxi to the end of the runway in pounds.
     */
    taxiFuel?: number;

    /**
     * Additional fuel burned at Top of Descent for thunderstorm avoidance in pounds.
     */
    thunderAvoidFuel?: number;

    /**
     * Fuel remaining at Top of Climb in pounds.
     */
    tocFuel?: number;

    /**
     * Additional fuel burned at Top of Climb for icing in pounds.
     */
    tocIceFuel?: number;

    /**
     * Fuel remaining at Top of Descent in pounds.
     */
    todFuel?: number;

    /**
     * Additional fuel burned at Top of Descent for icing in pounds.
     */
    todIceFuel?: number;

    /**
     * The amount of unidentified extra fuel required to get to min landing in pounds.
     */
    unidentExtraFuel?: number;

    /**
     * The amount of unusable fuel in pounds.
     */
    unusableFuel?: number;

    /**
     * The wake turbulence category for this flight. The categories are assigned by the
     * International Civil Aviation Organization (ICAO) and are based on maximum
     * certified takeoff mass for the purpose of separating aircraft in flight due to
     * wake turbulence. Valid values include LIGHT, MEDIUM, LARGE, HEAVY, and SUPER.
     */
    wakeTurbCat?: string;

    /**
     * Wind factor for the first half of the route. This is the average wind factor
     * from first Top of Climb to the mid-time of the entire route in knots. A positive
     * value indicates a headwind, while a negative value indicates a tailwind.
     */
    windFac1?: number;

    /**
     * Wind factor for the second half of the route. This is the average wind factor
     * from the mid-time of the entire route to last Top of Descent in knots. A
     * positive value indicates a headwind, while a negative value indicates a
     * tailwind.
     */
    windFac2?: number;

    /**
     * Average wind factor from Top of Climb to Top of Descent in knots. A positive
     * value indicates a headwind, while a negative value indicates a tailwind.
     */
    windFacAvg?: number;

    /**
     * The date and time the weather valid period ends in ISO 8601 UTC format, with
     * millisecond precision.
     */
    wxValidEnd?: string;

    /**
     * The date and time the weather valid period begins in ISO 8601 UTC format, with
     * millisecond precision.
     */
    wxValidStart?: string;
  }

  export namespace Body {
    /**
     * Collection of air refueling events occurring on this flight.
     */
    export interface AirRefuelEvent {
      /**
       * Additional degrade for air refueling, cumulative with fuelDegrade field percent.
       */
      arDegrade?: number;

      /**
       * Fuel onloaded (use positive numbers) or fuel offloaded (use negative numbers) in
       * pounds.
       */
      arExchangedFuel?: number;

      /**
       * The number of this air refueling event within the flight plan.
       */
      arNum?: number;

      /**
       * Fuel required to fly from air refueling exit point to air refueling divert
       * alternate airfield in pounds.
       */
      divertFuel?: number;

      /**
       * Fuel remaining at the air refueling exit in pounds.
       */
      exitFuel?: number;
    }

    /**
     * Collection of messages associated with this flight plan indicating the severity,
     * the point where the message was generated, the path (Primary, Alternate, etc.),
     * and the text of the message.
     */
    export interface FlightPlanMessage {
      /**
       * The text of the message.
       */
      msgText?: string;

      /**
       * The flight path that generated the message (PRIMARY, ALTERNATE, etc.).
       */
      routePath?: string;

      /**
       * The severity of the message.
       */
      severity?: string;

      /**
       * The waypoint number for which the message was generated, or enter "PLAN" for a
       * message impacting the entire route.
       */
      wpNum?: string;
    }

    /**
     * Collection of point groups generated for this flight plan. Groups include point
     * sets for Extended Operations (ETOPS), Critical Fuel Point, and Equal Time Point
     * (ETP).
     */
    export interface FlightPlanPointGroup {
      /**
       * Average fuel flow at which the fuel was calculated in pounds per hour.
       */
      avgFuelFlow?: number;

      /**
       * Average wind factor from the Extended Operations (ETOPS) point to the recovery
       * airfield in knots.
       */
      etopsAvgWindFactor?: number;

      /**
       * Distance from the Extended Operations (ETOPS) point to the recovery airfield in
       * nautical miles.
       */
      etopsDistance?: number;

      /**
       * Fuel required to fly from the Extended Operations (ETOPS) point to the recovery
       * airfield in pounds.
       */
      etopsReqFuel?: number;

      /**
       * Temperature deviation from the Extended Operations (ETOPS) point to the recovery
       * airfield in degrees Celsius.
       */
      etopsTempDev?: number;

      /**
       * Time to fly from the Extended Operations (ETOPS) point to the recovery airfield
       * expressed in HH:MM format.
       */
      etopsTime?: string;

      /**
       * Array of point data for this Point Group.
       */
      flightPlanPoints?: Array<FlightPlanPointGroup.FlightPlanPoint>;

      /**
       * Total time from takeoff when the point is reached expressed in HH:MM format.
       */
      fromTakeoffTime?: string;

      /**
       * Average wind factor from the Equal Time Point (ETP) to the first suitable
       * airfield in knots.
       */
      fsafAvgWindFactor?: number;

      /**
       * Distance from the Equal Time Point (ETP) to the first suitable airfield in
       * nautical miles.
       */
      fsafDistance?: number;

      /**
       * Fuel required to fly from the Equal Time Point (ETP) to the first suitable
       * airfield in pounds.
       */
      fsafReqFuel?: number;

      /**
       * Temperature deviation from the Equal Time Point (ETP) to the first suitable
       * airfield in degrees Celsius.
       */
      fsafTempDev?: number;

      /**
       * Time to fly from the Equal Time Point (ETP) to the first suitable airfield
       * expressed in HH:MM format.
       */
      fsafTime?: string;

      /**
       * Flight level of the point at which the fuel was calculated in feet.
       */
      fuelCalcAlt?: number;

      /**
       * True airspeed at which the fuel was calculated in knots.
       */
      fuelCalcSpd?: number;

      /**
       * Average wind factor from the Equal Time Point (ETP) to the last suitable
       * airfield in knots.
       */
      lsafAvgWindFactor?: number;

      /**
       * Distance from the Equal Time Point (ETP) to the last suitable airfield in
       * nautical miles.
       */
      lsafDistance?: number;

      /**
       * Name of the last suitable airfield, International Civil Aviation Organization
       * (ICAO) code preferred.
       */
      lsafName?: string;

      /**
       * Fuel required to fly from the Equal Time Point (ETP) to the last suitable
       * airfield in pounds.
       */
      lsafReqFuel?: number;

      /**
       * Temperature deviation from the Equal Time Point (ETP) to the last suitable
       * airfield in degrees Celsius.
       */
      lsafTempDev?: number;

      /**
       * Time to fly from the Equal Time Point (ETP) to the last suitable airfield
       * expressed in HH:MM format.
       */
      lsafTime?: string;

      /**
       * Amount of planned fuel on board when the point is reached in pounds.
       */
      plannedFuel?: number;

      /**
       * Name of the point group, usually Extended Operations (ETOPS), Critical Fuel
       * Point, and Equal Time Point (ETP) sections.
       */
      pointGroupName?: string;

      /**
       * Specifies which Point Group case requires the most fuel.
       */
      worstFuelCase?: string;
    }

    export namespace FlightPlanPointGroup {
      /**
       * Array of point data for this Point Group.
       */
      export interface FlightPlanPoint {
        /**
         * Estimated Time of Arrival (ETA) at this point in ISO 8601 UTC format, with
         * millisecond precision.
         */
        fppEta?: string;

        /**
         * WGS84 latitude of the point location, in degrees. -90 to 90 degrees (negative
         * values south of equator).
         */
        fppLat?: number;

        /**
         * WGS84 longitude of the point location, in degrees. -180 to 180 degrees (negative
         * values west of Prime Meridian).
         */
        fppLon?: number;

        /**
         * Fuel required at this point to execute an Equal Time Point (ETP) or Extended
         * Operations (ETOPS) plan in pounds.
         */
        fppReqFuel?: number;

        /**
         * Name of this point.
         */
        pointName?: string;
      }
    }

    /**
     * Collection of waypoints associated with this flight plan.
     */
    export interface FlightPlanWaypoint {
      /**
       * Points are designated by type as either a comment point or a waypoint. A comment
       * point conveys important information about the point for pilots but is not
       * entered into a flight management system. A waypoint is a point that is entered
       * into a flight management system and/or filed with Air Traffic Control.
       */
      type: string;

      /**
       * Name of the point. The name of a comment point identifies important information
       * about that point, e.g. Top of Climb. The name of a waypoint identifies the
       * location of that point.
       */
      waypointName: string;

      /**
       * The air-to-air Tactical Air Navigation (TACAN) channels used by the
       * receiver/tanker during air refueling.
       */
      aaTacanChannel?: string;

      /**
       * The air distance of this leg in nautical miles.
       */
      airDistance?: number;

      /**
       * The flight path flown for this leg.
       */
      airway?: string;

      /**
       * Altitude of a level, point, or object measured in feet above mean sea level.
       */
      alt?: number;

      /**
       * The ID of the air refueling track/anchor or fixed track.
       */
      arId?: string;

      /**
       * Point identifying an air refueling track/anchor or fixed track.
       */
      arpt?: string;

      /**
       * Actual Time of Arrival (ATA) at this waypoint in ISO 8601 UTC format, with
       * millisecond precision.
       */
      ata?: string;

      /**
       * The average calibrated airspeed (CAS) for this leg in knots.
       */
      avgCalAirspeed?: number;

      /**
       * The average drift angle for this leg in degrees from true north.
       */
      avgDriftAng?: number;

      /**
       * The average ground speed for this leg in knots.
       */
      avgGroundSpeed?: number;

      /**
       * The average true airspeed (TAS) for this leg in knots.
       */
      avgTrueAirspeed?: number;

      /**
       * The average wind direction for this leg in degrees from true north.
       */
      avgWindDir?: number;

      /**
       * The average wind speed for this leg in knots.
       */
      avgWindSpeed?: number;

      /**
       * The day low level altitude in feet above sea level for the leg ending at this
       * waypoint.
       */
      dayLowAlt?: number;

      /**
       * Estimated Time of Arrival (ETA) at this waypoint in ISO 8601 UTC format, with
       * millisecond precision.
       */
      eta?: string;

      /**
       * The amount of fuel onloaded or offloaded at this waypoint in pounds (negative
       * value for offload).
       */
      exchangedFuel?: number;

      /**
       * The leg fuel flow in pounds per hour.
       */
      fuelFlow?: number;

      /**
       * The icing intensity classification for this flight (LIGHT, MODERATE, etc).
       */
      iceCat?: string;

      /**
       * WGS84 latitude of the point location, in degrees. -90 to 90 degrees (negative
       * values south of equator).
       */
      lat?: number;

      /**
       * The planned alternate leg based on user-defined constraints, International Civil
       * Aviation Organization (ICAO) code preferred.
       */
      legAlternate?: string;

      /**
       * The percent degrade due to drag for this aircraft for this leg.
       */
      legDragIndex?: number;

      /**
       * The fuel degrade percentage used for this leg.
       */
      legFuelDegrade?: number;

      /**
       * The average Mach speed for this leg.
       */
      legMach?: number;

      /**
       * The mission index value for this leg. The mission index is the ratio of
       * time-related cost of aircraft operation to the cost of fuel.
       */
      legMsnIndex?: number;

      /**
       * The wind factor for this leg in knots. A positive value indicates a headwind,
       * while a negative value indicates a tailwind.
       */
      legWindFac?: number;

      /**
       * WGS84 longitude of the point location, in degrees. -180 to 180 degrees (negative
       * values west of Prime Meridian).
       */
      lon?: number;

      /**
       * The magnetic course at leg midpoint in degrees from true north.
       */
      magCourse?: number;

      /**
       * The magnetic heading at leg midpoint in degrees from true north.
       */
      magHeading?: number;

      /**
       * The magnetic variation for this leg in degrees.
       */
      magVar?: number;

      /**
       * Navigational Aid (NAVAID) identification code.
       */
      navaid?: string;

      /**
       * The night low level altitude in feet above sea level for the leg ending at this
       * waypoint.
       */
      nightLowAlt?: number;

      /**
       * The night vision goggle low level altitude in feet above sea level for the leg
       * ending at this waypoint.
       */
      nvgLowAlt?: number;

      /**
       * The wind direction at this specific point in degrees from true north.
       */
      pointWindDir?: number;

      /**
       * The wind velocity at this specific point in knots.
       */
      pointWindSpeed?: number;

      /**
       * The primary UHF radio frequency used for the air refueling track or anchor in
       * megahertz.
       */
      priFreq?: number;

      /**
       * The secondary UHF radio frequency used for the air refueling track or anchor in
       * megahertz.
       */
      secFreq?: number;

      /**
       * Tactical Air Navigation (TACAN) channel for the Navigational Aid (NAVAID).
       */
      tacanChannel?: string;

      /**
       * Average temperature deviation from standard day profile for this leg in degrees
       * Celsius.
       */
      tempDev?: number;

      /**
       * The thunderstorm intensity classification for this flight (LIGHT, MODERATE,
       * etc).
       */
      thunderCat?: string;

      /**
       * The total air distance to this waypoint in nautical miles.
       */
      totalAirDistance?: number;

      /**
       * The total distance flown to this waypoint calculated from point of departure in
       * nautical miles.
       */
      totalFlownDistance?: number;

      /**
       * The total distance remaining from this waypoint to the point of arrival in
       * nautical miles.
       */
      totalRemDistance?: number;

      /**
       * The total fuel remaining at this waypoint in pounds.
       */
      totalRemFuel?: number;

      /**
       * The total time accumulated from takeoff to this waypoint expressed as HH:MM.
       */
      totalTime?: string;

      /**
       * The total time remaining from this waypoint to the point of arrival expressed as
       * HH:MM.
       */
      totalTimeRem?: string;

      /**
       * The total fuel used to this waypoint from point of departure in pounds.
       */
      totalUsedFuel?: number;

      /**
       * The total weight of the aircraft at this waypoint in pounds.
       */
      totalWeight?: number;

      /**
       * The true course at leg midpoint in degrees from true north.
       */
      trueCourse?: number;

      /**
       * The turbulence intensity classification for this flight (LIGHT, MODERATE, etc).
       */
      turbCat?: string;

      /**
       * VHF Omni-directional Range (VOR) frequency for the Navigational Aid (NAVAID) in
       * megahertz.
       */
      vorFreq?: number;

      /**
       * The waypoint number on the route. Comment points do not get a waypoint number.
       */
      waypointNum?: number;

      /**
       * The zone/leg distance flown in nautical miles.
       */
      zoneDistance?: number;

      /**
       * The amount of fuel used on this zone/leg in pounds.
       */
      zoneFuel?: number;

      /**
       * The time to fly this zone/leg in minutes.
       */
      zoneTime?: number;
    }
  }
}

export declare namespace Flightplan {
  export {
    type FlightPlanAbridged as FlightPlanAbridged,
    type FlightplanCountResponse as FlightplanCountResponse,
    type FlightplanQueryhelpResponse as FlightplanQueryhelpResponse,
    type FlightplanTupleResponse as FlightplanTupleResponse,
    type FlightPlanAbridgedsOffsetPage as FlightPlanAbridgedsOffsetPage,
    type FlightplanCreateParams as FlightplanCreateParams,
    type FlightplanRetrieveParams as FlightplanRetrieveParams,
    type FlightplanUpdateParams as FlightplanUpdateParams,
    type FlightplanListParams as FlightplanListParams,
    type FlightplanCountParams as FlightplanCountParams,
    type FlightplanTupleParams as FlightplanTupleParams,
    type FlightplanUnvalidatedPublishParams as FlightplanUnvalidatedPublishParams,
  };
}
