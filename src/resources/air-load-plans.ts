// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as Shared from 'bluestaq@unified-data-library/resources/shared';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class AirLoadPlans extends APIResource {
  /**
   * Service operation to take a single airloadplan record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.airLoadPlans.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   estDepTime: '2024-01-01T01:00:00.123Z',
   *   source: 'source',
   * });
   * ```
   */
  create(body: AirLoadPlanCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/airloadplan', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single airloadplan record by its unique ID passed as
   * a path parameter.
   *
   * @example
   * ```ts
   * const airloadplanFull = await client.airLoadPlans.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: AirLoadPlanRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.AirloadplanFull> {
    return this._client.get(path`/udl/airloadplan/${id}`, { query, ...options });
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
   * for await (const airloadplanAbridged of client.airLoadPlans.list(
   *   { estDepTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AirLoadPlanListParams,
    options?: RequestOptions,
  ): PagePromise<AirloadplanAbridgedsOffsetPage, AirloadplanAbridged> {
    return this._client.getAPIList('/udl/airloadplan', OffsetPage<AirloadplanAbridged>, {
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
   * const response = await client.airLoadPlans.count({
   *   estDepTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: AirLoadPlanCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/airloadplan/count', {
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
   * const response = await client.airLoadPlans.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<AirLoadPlanQueryhelpResponse> {
    return this._client.get('/udl/airloadplan/queryhelp', options);
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
   * const airloadplanFulls = await client.airLoadPlans.tuple({
   *   columns: 'columns',
   *   estDepTime: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: AirLoadPlanTupleParams, options?: RequestOptions): APIPromise<AirLoadPlanTupleResponse> {
    return this._client.get('/udl/airloadplan/tuple', { query, ...options });
  }
}

export type AirloadplanAbridgedsOffsetPage = OffsetPage<AirloadplanAbridged>;

/**
 * Information related to how an aircraft is loaded with cargo, equipment, and
 * passengers.
 */
export interface AirloadplanAbridged {
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
   * The current estimated time that the aircraft is planned to depart, in ISO 8601
   * UTC format with millisecond precision.
   */
  estDepTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Allowable Cabin Load (ACL) onboard the aircraft. The maximum weight of
   * passengers, baggage, and cargo that can be safely transported in the aircraft
   * cabin, in kilograms.
   */
  aclOnboard?: number;

  /**
   * Allowable Cabin Load (ACL) released this leg. The weight of passengers, baggage,
   * and cargo released from the aircraft cabin, in kilograms.
   */
  aclReleased?: number;

  /**
   * The Model Design Series designation of the aircraft supporting this load plan.
   */
  aircraftMDS?: string;

  /**
   * Collection of hazmat actuals associated with this load plan.
   */
  airLoadPlanHazmatActuals?: Array<AirloadplanAbridged.AirLoadPlanHazmatActual>;

  /**
   * Collection of human remains transport information associated with this load
   * plan.
   */
  airLoadPlanHR?: Array<AirloadplanAbridged.AirLoadPlanHr>;

  /**
   * Collection of cargo information located at the pallet positions associated with
   * this load plan.
   */
  airLoadPlanPalletDetails?: Array<AirloadplanAbridged.AirLoadPlanPalletDetail>;

  /**
   * Collection of passenger and cargo details associated with this load plan for
   * this leg of the mission.
   */
  airLoadPlanPaxCargo?: Array<AirloadplanAbridged.AirLoadPlanPaxCargo>;

  /**
   * Collection of unit line number actuals associated with this load plan.
   */
  airLoadPlanULNActuals?: Array<AirloadplanAbridged.AirLoadPlanUlnActual>;

  /**
   * Optional identifier of arrival airfield with no International Civil Organization
   * (ICAO) code.
   */
  arrAirfield?: string;

  /**
   * The arrival International Civil Organization (ICAO) code of the landing
   * airfield.
   */
  arrICAO?: string;

  /**
   * Time the loadmaster or boom operator is available for cargo loading/unloading,
   * in ISO 8601 UTC format with millisecond precision.
   */
  availableTime?: string;

  /**
   * The basic weight of the aircraft multiplied by the distance between the
   * reference datum and the aircraft's center of gravity, in Newton-meters.
   */
  basicMoment?: number;

  /**
   * The weight of the aircraft without passengers, cargo, equipment, or usable fuel,
   * in kilograms.
   */
  basicWeight?: number;

  /**
   * Time the cargo briefing was given to the loadmaster or boom operator, in ISO
   * 8601 UTC format with millisecond precision.
   */
  briefTime?: string;

  /**
   * The call sign of the mission supporting this load plan.
   */
  callSign?: string;

  /**
   * Maximum fuselage station (FS) where cargo can be stored. FS is the distance from
   * the reference datum, in meters.
   */
  cargoBayFSMax?: number;

  /**
   * Minimum fuselage station (FS) where cargo can be stored. FS is the distance from
   * the reference datum, in meters.
   */
  cargoBayFSMin?: number;

  /**
   * Width of the cargo bay, in meters.
   */
  cargoBayWidth?: number;

  /**
   * The cargo configuration required for this leg (e.g. C-1, C-2, C-3, DV-1, DV-2,
   * AE-1, etc.). Configuration meanings are determined by the data source.
   */
  cargoConfig?: string;

  /**
   * The sum of cargo moments of all cargo on board the aircraft, in Newton-meters.
   * Each individual cargo moment is the weight of the cargo multiplied by the
   * distance between the reference datum and the cargo's center of gravity.
   */
  cargoMoment?: number;

  /**
   * Volume of cargo space in the aircraft, in cubic meters.
   */
  cargoVolume?: number;

  /**
   * The weight of the cargo on board the aircraft, in kilograms.
   */
  cargoWeight?: number;

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
   * The number of crew members on the aircraft.
   */
  crewSize?: number;

  /**
   * Optional identifier of departure airfield with no International Civil
   * Organization (ICAO) code.
   */
  depAirfield?: string;

  /**
   * The departure International Civil Organization (ICAO) code of the departure
   * airfield.
   */
  depICAO?: string;

  /**
   * Description of the equipment configuration (e.g. Standard, Ferry, JBLM, CHS,
   * Combat, etc.). Configuration meanings are determined by the data source.
   */
  equipConfig?: string;

  /**
   * The current estimated time that the aircraft is planned to arrive, in ISO 8601
   * UTC format with millisecond precision.
   */
  estArrTime?: string;

  /**
   * The estimated weight of usable fuel upon landing multiplied by the distance
   * between the reference datum and the fuel's center of gravity, in Newton-meters.
   */
  estLandingFuelMoment?: number;

  /**
   * The estimated weight of usable fuel upon landing, in kilograms.
   */
  estLandingFuelWeight?: number;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * The fuel weight on board the aircraft multiplied by the distance between the
   * reference datum and the fuel's center of gravity, in Newton-meters.
   */
  fuelMoment?: number;

  /**
   * The weight of usable fuel on board the aircraft, in kilograms.
   */
  fuelWeight?: number;

  /**
   * The center of gravity of the aircraft using the gross weight and gross moment,
   * as a percentage of the mean aerodynamic chord (%MAC).
   */
  grossCG?: number;

  /**
   * The sum of moments of all items making up the gross weight of the aircraft, in
   * Newton-meters.
   */
  grossMoment?: number;

  /**
   * The total weight of the aircraft at takeoff including passengers, cargo,
   * equipment, and usable fuel, in kilograms.
   */
  grossWeight?: number;

  /**
   * The UDL ID of the mission this record is associated with.
   */
  idMission?: string;

  /**
   * The UDL ID of the aircraft sortie this record is associated with.
   */
  idSortie?: string;

  /**
   * The center of gravity of the aircraft using the landing weight and landing
   * moment, as a percentage of the mean aerodynamic chord (%MAC).
   */
  landingCG?: number;

  /**
   * The sum of moments of all items making up the gross weight of the aircraft upon
   * landing, in Newton-meters.
   */
  landingMoment?: number;

  /**
   * The gross weight of the aircraft upon landing, in kilograms.
   */
  landingWeight?: number;

  /**
   * The leg number of the mission supporting this load plan.
   */
  legNum?: number;

  /**
   * Name of the loadmaster or boom operator who received the cargo briefing.
   */
  loadmasterName?: string;

  /**
   * Rank of the loadmaster or boom operator overseeing cargo loading/unloading.
   */
  loadmasterRank?: string;

  /**
   * Remarks concerning this load plan.
   */
  loadRemarks?: string;

  /**
   * The mission number of the mission supporting this load plan.
   */
  missionNumber?: string;

  /**
   * The operating weight of the aircraft multiplied by the distance between the
   * reference datum and the aircraft's center of gravity, in Newton-meters.
   */
  operatingMoment?: number;

  /**
   * The basic weight of the aircraft including passengers and equipment, in
   * kilograms.
   */
  operatingWeight?: number;

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
   * Number of pallet positions on the aircraft.
   */
  ppOnboard?: number;

  /**
   * Number of pallet positions released this leg.
   */
  ppReleased?: number;

  /**
   * Time the loadmaster or boom operator is scheduled to begin overseeing cargo
   * loading/unloading, in ISO 8601 UTC format with millisecond precision.
   */
  schedTime?: string;

  /**
   * Number of passenger seats on the aircraft.
   */
  seatsOnboard?: number;

  /**
   * Number of passenger seats released this leg.
   */
  seatsReleased?: number;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The tail number of the aircraft supporting this load plan.
   */
  tailNumber?: string;

  /**
   * Description of the fuel tank(s) configuration (e.g. ER, NON-ER, etc.).
   * Configuration meanings are determined by the data source.
   */
  tankConfig?: string;

  /**
   * Time the row was updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;

  /**
   * Alphanumeric code that describes general cargo-related utilization and
   * characteristics for an itinerary point.
   */
  utilCode?: string;

  /**
   * The center of gravity of the aircraft using the zero fuel weight and zero fuel
   * total moment, as a percentage of the mean aerodynamic chord (%MAC).
   */
  zeroFuelCG?: number;

  /**
   * The zero fuel weight of the aircraft multiplied by the distance between the
   * reference datum and the aircraft's center of gravity, in Newton-meters.
   */
  zeroFuelMoment?: number;

  /**
   * The operating weight of the aircraft including cargo, mail, baggage, and
   * passengers, but without usable fuel, in kilograms.
   */
  zeroFuelWeight?: number;
}

export namespace AirloadplanAbridged {
  /**
   * Collection of hazmat actuals associated with this load plan.
   */
  export interface AirLoadPlanHazmatActual {
    /**
     * The Air Special Handling Code (ASHC) indicates the type of special handling
     * required for hazardous cargo.
     */
    ashc?: string;

    /**
     * Compatibility group code used to specify the controls for the transportation and
     * storage of hazardous materials according to the Hazardous Materials Regulations
     * issued by the U.S. Department of Transportation.
     */
    cgc?: string;

    /**
     * Class and division of the hazardous material according to the Hazardous
     * Materials Regulations issued by the U.S. Department of Transportation.
     */
    classDiv?: string;

    /**
     * Description of the hazardous item.
     */
    hazDescription?: string;

    /**
     * Remarks concerning this hazardous material.
     */
    hazmatRemarks?: string;

    /**
     * United Nations number or North American number that identifies hazardous
     * materials according to the Hazardous Materials Regulations issued by the U.S.
     * Department of Transportation.
     */
    hazNum?: string;

    /**
     * Designates the type of hazmat number for the item (UN for United Nations or NA
     * for North American).
     */
    hazNumType?: string;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * hazardous material is unloaded.
     */
    hazOffICAO?: string;

    /**
     * Itinerary number that identifies where the hazardous material is unloaded.
     */
    hazOffItin?: number;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * hazardous material is loaded.
     */
    hazOnICAO?: string;

    /**
     * Itinerary number that identifies where the hazardous material is loaded.
     */
    hazOnItin?: number;

    /**
     * Number of pieces of hazardous cargo.
     */
    hazPieces?: number;

    /**
     * Transportation Control Number (TCN) of the hazardous item.
     */
    hazTcn?: string;

    /**
     * Total weight of hazardous cargo, including non-explosive parts, in kilograms.
     */
    hazWeight?: number;

    /**
     * United Nations proper shipping name of the hazardous material according to the
     * Hazardous Materials Regulations issued by the U.S. Department of Transportation.
     */
    itemName?: string;

    /**
     * Manufacturer's lot number for identification of the hazardous material.
     */
    lotNum?: string;

    /**
     * Net explosive weight of the hazardous material, in kilograms.
     */
    netExpWt?: number;
  }

  /**
   * Collection of human remains transport information associated with this load
   * plan.
   */
  export interface AirLoadPlanHr {
    /**
     * Type of transfer case used.
     */
    container?: string;

    /**
     * Name of the escort for the remains.
     */
    escort?: string;

    /**
     * The current estimated time of arrival for the remains in ISO 8601 UTC format
     * with millisecond precision.
     */
    hrEstArrTime?: string;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * remains are unloaded.
     */
    hrOffICAO?: string;

    /**
     * Itinerary number that identifies where the remains are unloaded.
     */
    hrOffItin?: number;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * remains are loaded.
     */
    hrOnICAO?: string;

    /**
     * Itinerary number that identifies where the remains are loaded.
     */
    hrOnItin?: number;

    /**
     * Remarks concerning the remains.
     */
    hrRemarks?: string;

    /**
     * Name of the deceased.
     */
    name?: string;

    /**
     * Rank of the deceased.
     */
    rank?: string;

    /**
     * Name of the receiving agency or funeral home to which the remains are being
     * delivered.
     */
    recAgency?: string;

    /**
     * Branch of service of the deceased.
     */
    service?: string;

    /**
     * Flag indicating if the remains are viewable.
     */
    viewable?: boolean;
  }

  /**
   * Collection of cargo information located at the pallet positions associated with
   * this load plan.
   */
  export interface AirLoadPlanPalletDetail {
    /**
     * Category of special interest cargo.
     */
    category?: string;

    /**
     * Pallet position of the cargo.
     */
    pp?: string;

    /**
     * Description of the cargo.
     */
    ppDescription?: string;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * cargo is unloaded.
     */
    ppOffICAO?: string;

    /**
     * Number of pieces included in the Transportation Control Number (TCN).
     */
    ppPieces?: number;

    /**
     * Remarks concerning the cargo at this pallet position.
     */
    ppRemarks?: string;

    /**
     * Transportation Control Number (TCN) of the cargo.
     */
    ppTcn?: string;

    /**
     * Total weight of the cargo at this pallet position in kilograms.
     */
    ppWeight?: number;

    /**
     * Flag indicating if this cargo is considered special interest.
     */
    specialInterest?: boolean;
  }

  /**
   * Collection of passenger and cargo details associated with this load plan for
   * this leg of the mission.
   */
  export interface AirLoadPlanPaxCargo {
    /**
     * Number of ambulatory medical passengers in this group.
     */
    ambPax?: number;

    /**
     * Number of patient attendant passengers in this group.
     */
    attPax?: number;

    /**
     * Number of space available passengers in this group.
     */
    availablePax?: number;

    /**
     * Weight of baggage in this group in kilograms.
     */
    bagWeight?: number;

    /**
     * Number of civilian passengers in this group.
     */
    civPax?: number;

    /**
     * Number of distinguished visitor passengers in this group.
     */
    dvPax?: number;

    /**
     * Number of foreign national passengers in this group.
     */
    fnPax?: number;

    /**
     * Weight of cargo in this group in kilograms.
     */
    groupCargoWeight?: number;

    /**
     * Describes the status or action needed for this group of passenger and cargo data
     * (e.g. ARRONBD, OFFTHIS, THROUGH, ONTHIS, DEPONBD, OFFNEXT).
     */
    groupType?: string;

    /**
     * Number of litter-bound passengers in this group.
     */
    litPax?: number;

    /**
     * Weight of mail in this group in kilograms.
     */
    mailWeight?: number;

    /**
     * Number of cargo pallets in this group.
     */
    numPallet?: number;

    /**
     * Weight of pallets, chains, and devices in this group in kilograms.
     */
    palletWeight?: number;

    /**
     * Weight of passengers in this group in kilograms.
     */
    paxWeight?: number;

    /**
     * Number of space required passengers in this group.
     */
    requiredPax?: number;
  }

  /**
   * Collection of unit line number actuals associated with this load plan.
   */
  export interface AirLoadPlanUlnActual {
    /**
     * Number of ambulatory patients associated with this load plan.
     */
    numAmbulatory?: number;

    /**
     * Number of attendants associated with this load plan.
     */
    numAttendant?: number;

    /**
     * Number of litter patients associated with this load plan.
     */
    numLitter?: number;

    /**
     * Number of passengers associated with this load plan.
     */
    numPax?: number;

    /**
     * Identifier of the offload itinerary location.
     */
    offloadId?: number;

    /**
     * Offload location code.
     */
    offloadLOCode?: string;

    /**
     * Identifier of the onload itinerary location.
     */
    onloadId?: number;

    /**
     * Onload location code.
     */
    onloadLOCode?: string;

    /**
     * Identification number of the Operation Plan (OPLAN) associated with this load
     * plan.
     */
    oplan?: string;

    /**
     * Project name.
     */
    projName?: string;

    /**
     * Unit line number.
     */
    uln?: string;

    /**
     * Total weight of all cargo items for this unit line number in kilograms.
     */
    ulnCargoWeight?: number;

    /**
     * Remarks concerning these unit line number actuals.
     */
    ulnRemarks?: string;
  }
}

export type AirLoadPlanCountResponse = string;

export interface AirLoadPlanQueryhelpResponse {
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

export type AirLoadPlanTupleResponse = Array<Shared.AirloadplanFull>;

export interface AirLoadPlanCreateParams {
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
   * The current estimated time that the aircraft is planned to depart, in ISO 8601
   * UTC format with millisecond precision.
   */
  estDepTime: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Allowable Cabin Load (ACL) onboard the aircraft. The maximum weight of
   * passengers, baggage, and cargo that can be safely transported in the aircraft
   * cabin, in kilograms.
   */
  aclOnboard?: number;

  /**
   * Allowable Cabin Load (ACL) released this leg. The weight of passengers, baggage,
   * and cargo released from the aircraft cabin, in kilograms.
   */
  aclReleased?: number;

  /**
   * The Model Design Series designation of the aircraft supporting this load plan.
   */
  aircraftMDS?: string;

  /**
   * Collection of hazmat actuals associated with this load plan.
   */
  airLoadPlanHazmatActuals?: Array<AirLoadPlanCreateParams.AirLoadPlanHazmatActual>;

  /**
   * Collection of human remains transport information associated with this load
   * plan.
   */
  airLoadPlanHR?: Array<AirLoadPlanCreateParams.AirLoadPlanHr>;

  /**
   * Collection of cargo information located at the pallet positions associated with
   * this load plan.
   */
  airLoadPlanPalletDetails?: Array<AirLoadPlanCreateParams.AirLoadPlanPalletDetail>;

  /**
   * Collection of passenger and cargo details associated with this load plan for
   * this leg of the mission.
   */
  airLoadPlanPaxCargo?: Array<AirLoadPlanCreateParams.AirLoadPlanPaxCargo>;

  /**
   * Collection of unit line number actuals associated with this load plan.
   */
  airLoadPlanULNActuals?: Array<AirLoadPlanCreateParams.AirLoadPlanUlnActual>;

  /**
   * Optional identifier of arrival airfield with no International Civil Organization
   * (ICAO) code.
   */
  arrAirfield?: string;

  /**
   * The arrival International Civil Organization (ICAO) code of the landing
   * airfield.
   */
  arrICAO?: string;

  /**
   * Time the loadmaster or boom operator is available for cargo loading/unloading,
   * in ISO 8601 UTC format with millisecond precision.
   */
  availableTime?: string;

  /**
   * The basic weight of the aircraft multiplied by the distance between the
   * reference datum and the aircraft's center of gravity, in Newton-meters.
   */
  basicMoment?: number;

  /**
   * The weight of the aircraft without passengers, cargo, equipment, or usable fuel,
   * in kilograms.
   */
  basicWeight?: number;

  /**
   * Time the cargo briefing was given to the loadmaster or boom operator, in ISO
   * 8601 UTC format with millisecond precision.
   */
  briefTime?: string;

  /**
   * The call sign of the mission supporting this load plan.
   */
  callSign?: string;

  /**
   * Maximum fuselage station (FS) where cargo can be stored. FS is the distance from
   * the reference datum, in meters.
   */
  cargoBayFSMax?: number;

  /**
   * Minimum fuselage station (FS) where cargo can be stored. FS is the distance from
   * the reference datum, in meters.
   */
  cargoBayFSMin?: number;

  /**
   * Width of the cargo bay, in meters.
   */
  cargoBayWidth?: number;

  /**
   * The cargo configuration required for this leg (e.g. C-1, C-2, C-3, DV-1, DV-2,
   * AE-1, etc.). Configuration meanings are determined by the data source.
   */
  cargoConfig?: string;

  /**
   * The sum of cargo moments of all cargo on board the aircraft, in Newton-meters.
   * Each individual cargo moment is the weight of the cargo multiplied by the
   * distance between the reference datum and the cargo's center of gravity.
   */
  cargoMoment?: number;

  /**
   * Volume of cargo space in the aircraft, in cubic meters.
   */
  cargoVolume?: number;

  /**
   * The weight of the cargo on board the aircraft, in kilograms.
   */
  cargoWeight?: number;

  /**
   * The number of crew members on the aircraft.
   */
  crewSize?: number;

  /**
   * Optional identifier of departure airfield with no International Civil
   * Organization (ICAO) code.
   */
  depAirfield?: string;

  /**
   * The departure International Civil Organization (ICAO) code of the departure
   * airfield.
   */
  depICAO?: string;

  /**
   * Description of the equipment configuration (e.g. Standard, Ferry, JBLM, CHS,
   * Combat, etc.). Configuration meanings are determined by the data source.
   */
  equipConfig?: string;

  /**
   * The current estimated time that the aircraft is planned to arrive, in ISO 8601
   * UTC format with millisecond precision.
   */
  estArrTime?: string;

  /**
   * The estimated weight of usable fuel upon landing multiplied by the distance
   * between the reference datum and the fuel's center of gravity, in Newton-meters.
   */
  estLandingFuelMoment?: number;

  /**
   * The estimated weight of usable fuel upon landing, in kilograms.
   */
  estLandingFuelWeight?: number;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * The fuel weight on board the aircraft multiplied by the distance between the
   * reference datum and the fuel's center of gravity, in Newton-meters.
   */
  fuelMoment?: number;

  /**
   * The weight of usable fuel on board the aircraft, in kilograms.
   */
  fuelWeight?: number;

  /**
   * The center of gravity of the aircraft using the gross weight and gross moment,
   * as a percentage of the mean aerodynamic chord (%MAC).
   */
  grossCG?: number;

  /**
   * The sum of moments of all items making up the gross weight of the aircraft, in
   * Newton-meters.
   */
  grossMoment?: number;

  /**
   * The total weight of the aircraft at takeoff including passengers, cargo,
   * equipment, and usable fuel, in kilograms.
   */
  grossWeight?: number;

  /**
   * The UDL ID of the mission this record is associated with.
   */
  idMission?: string;

  /**
   * The UDL ID of the aircraft sortie this record is associated with.
   */
  idSortie?: string;

  /**
   * The center of gravity of the aircraft using the landing weight and landing
   * moment, as a percentage of the mean aerodynamic chord (%MAC).
   */
  landingCG?: number;

  /**
   * The sum of moments of all items making up the gross weight of the aircraft upon
   * landing, in Newton-meters.
   */
  landingMoment?: number;

  /**
   * The gross weight of the aircraft upon landing, in kilograms.
   */
  landingWeight?: number;

  /**
   * The leg number of the mission supporting this load plan.
   */
  legNum?: number;

  /**
   * Name of the loadmaster or boom operator who received the cargo briefing.
   */
  loadmasterName?: string;

  /**
   * Rank of the loadmaster or boom operator overseeing cargo loading/unloading.
   */
  loadmasterRank?: string;

  /**
   * Remarks concerning this load plan.
   */
  loadRemarks?: string;

  /**
   * The mission number of the mission supporting this load plan.
   */
  missionNumber?: string;

  /**
   * The operating weight of the aircraft multiplied by the distance between the
   * reference datum and the aircraft's center of gravity, in Newton-meters.
   */
  operatingMoment?: number;

  /**
   * The basic weight of the aircraft including passengers and equipment, in
   * kilograms.
   */
  operatingWeight?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Number of pallet positions on the aircraft.
   */
  ppOnboard?: number;

  /**
   * Number of pallet positions released this leg.
   */
  ppReleased?: number;

  /**
   * Time the loadmaster or boom operator is scheduled to begin overseeing cargo
   * loading/unloading, in ISO 8601 UTC format with millisecond precision.
   */
  schedTime?: string;

  /**
   * Number of passenger seats on the aircraft.
   */
  seatsOnboard?: number;

  /**
   * Number of passenger seats released this leg.
   */
  seatsReleased?: number;

  /**
   * The tail number of the aircraft supporting this load plan.
   */
  tailNumber?: string;

  /**
   * Description of the fuel tank(s) configuration (e.g. ER, NON-ER, etc.).
   * Configuration meanings are determined by the data source.
   */
  tankConfig?: string;

  /**
   * Alphanumeric code that describes general cargo-related utilization and
   * characteristics for an itinerary point.
   */
  utilCode?: string;

  /**
   * The center of gravity of the aircraft using the zero fuel weight and zero fuel
   * total moment, as a percentage of the mean aerodynamic chord (%MAC).
   */
  zeroFuelCG?: number;

  /**
   * The zero fuel weight of the aircraft multiplied by the distance between the
   * reference datum and the aircraft's center of gravity, in Newton-meters.
   */
  zeroFuelMoment?: number;

  /**
   * The operating weight of the aircraft including cargo, mail, baggage, and
   * passengers, but without usable fuel, in kilograms.
   */
  zeroFuelWeight?: number;
}

export namespace AirLoadPlanCreateParams {
  /**
   * Collection of hazmat actuals associated with this load plan.
   */
  export interface AirLoadPlanHazmatActual {
    /**
     * The Air Special Handling Code (ASHC) indicates the type of special handling
     * required for hazardous cargo.
     */
    ashc?: string;

    /**
     * Compatibility group code used to specify the controls for the transportation and
     * storage of hazardous materials according to the Hazardous Materials Regulations
     * issued by the U.S. Department of Transportation.
     */
    cgc?: string;

    /**
     * Class and division of the hazardous material according to the Hazardous
     * Materials Regulations issued by the U.S. Department of Transportation.
     */
    classDiv?: string;

    /**
     * Description of the hazardous item.
     */
    hazDescription?: string;

    /**
     * Remarks concerning this hazardous material.
     */
    hazmatRemarks?: string;

    /**
     * United Nations number or North American number that identifies hazardous
     * materials according to the Hazardous Materials Regulations issued by the U.S.
     * Department of Transportation.
     */
    hazNum?: string;

    /**
     * Designates the type of hazmat number for the item (UN for United Nations or NA
     * for North American).
     */
    hazNumType?: string;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * hazardous material is unloaded.
     */
    hazOffICAO?: string;

    /**
     * Itinerary number that identifies where the hazardous material is unloaded.
     */
    hazOffItin?: number;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * hazardous material is loaded.
     */
    hazOnICAO?: string;

    /**
     * Itinerary number that identifies where the hazardous material is loaded.
     */
    hazOnItin?: number;

    /**
     * Number of pieces of hazardous cargo.
     */
    hazPieces?: number;

    /**
     * Transportation Control Number (TCN) of the hazardous item.
     */
    hazTcn?: string;

    /**
     * Total weight of hazardous cargo, including non-explosive parts, in kilograms.
     */
    hazWeight?: number;

    /**
     * United Nations proper shipping name of the hazardous material according to the
     * Hazardous Materials Regulations issued by the U.S. Department of Transportation.
     */
    itemName?: string;

    /**
     * Manufacturer's lot number for identification of the hazardous material.
     */
    lotNum?: string;

    /**
     * Net explosive weight of the hazardous material, in kilograms.
     */
    netExpWt?: number;
  }

  /**
   * Collection of human remains transport information associated with this load
   * plan.
   */
  export interface AirLoadPlanHr {
    /**
     * Type of transfer case used.
     */
    container?: string;

    /**
     * Name of the escort for the remains.
     */
    escort?: string;

    /**
     * The current estimated time of arrival for the remains in ISO 8601 UTC format
     * with millisecond precision.
     */
    hrEstArrTime?: string;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * remains are unloaded.
     */
    hrOffICAO?: string;

    /**
     * Itinerary number that identifies where the remains are unloaded.
     */
    hrOffItin?: number;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * remains are loaded.
     */
    hrOnICAO?: string;

    /**
     * Itinerary number that identifies where the remains are loaded.
     */
    hrOnItin?: number;

    /**
     * Remarks concerning the remains.
     */
    hrRemarks?: string;

    /**
     * Name of the deceased.
     */
    name?: string;

    /**
     * Rank of the deceased.
     */
    rank?: string;

    /**
     * Name of the receiving agency or funeral home to which the remains are being
     * delivered.
     */
    recAgency?: string;

    /**
     * Branch of service of the deceased.
     */
    service?: string;

    /**
     * Flag indicating if the remains are viewable.
     */
    viewable?: boolean;
  }

  /**
   * Collection of cargo information located at the pallet positions associated with
   * this load plan.
   */
  export interface AirLoadPlanPalletDetail {
    /**
     * Category of special interest cargo.
     */
    category?: string;

    /**
     * Pallet position of the cargo.
     */
    pp?: string;

    /**
     * Description of the cargo.
     */
    ppDescription?: string;

    /**
     * The International Civil Aviation Organization (ICAO) code of the site where the
     * cargo is unloaded.
     */
    ppOffICAO?: string;

    /**
     * Number of pieces included in the Transportation Control Number (TCN).
     */
    ppPieces?: number;

    /**
     * Remarks concerning the cargo at this pallet position.
     */
    ppRemarks?: string;

    /**
     * Transportation Control Number (TCN) of the cargo.
     */
    ppTcn?: string;

    /**
     * Total weight of the cargo at this pallet position in kilograms.
     */
    ppWeight?: number;

    /**
     * Flag indicating if this cargo is considered special interest.
     */
    specialInterest?: boolean;
  }

  /**
   * Collection of passenger and cargo details associated with this load plan for
   * this leg of the mission.
   */
  export interface AirLoadPlanPaxCargo {
    /**
     * Number of ambulatory medical passengers in this group.
     */
    ambPax?: number;

    /**
     * Number of patient attendant passengers in this group.
     */
    attPax?: number;

    /**
     * Number of space available passengers in this group.
     */
    availablePax?: number;

    /**
     * Weight of baggage in this group in kilograms.
     */
    bagWeight?: number;

    /**
     * Number of civilian passengers in this group.
     */
    civPax?: number;

    /**
     * Number of distinguished visitor passengers in this group.
     */
    dvPax?: number;

    /**
     * Number of foreign national passengers in this group.
     */
    fnPax?: number;

    /**
     * Weight of cargo in this group in kilograms.
     */
    groupCargoWeight?: number;

    /**
     * Describes the status or action needed for this group of passenger and cargo data
     * (e.g. ARRONBD, OFFTHIS, THROUGH, ONTHIS, DEPONBD, OFFNEXT).
     */
    groupType?: string;

    /**
     * Number of litter-bound passengers in this group.
     */
    litPax?: number;

    /**
     * Weight of mail in this group in kilograms.
     */
    mailWeight?: number;

    /**
     * Number of cargo pallets in this group.
     */
    numPallet?: number;

    /**
     * Weight of pallets, chains, and devices in this group in kilograms.
     */
    palletWeight?: number;

    /**
     * Weight of passengers in this group in kilograms.
     */
    paxWeight?: number;

    /**
     * Number of space required passengers in this group.
     */
    requiredPax?: number;
  }

  /**
   * Collection of unit line number actuals associated with this load plan.
   */
  export interface AirLoadPlanUlnActual {
    /**
     * Number of ambulatory patients associated with this load plan.
     */
    numAmbulatory?: number;

    /**
     * Number of attendants associated with this load plan.
     */
    numAttendant?: number;

    /**
     * Number of litter patients associated with this load plan.
     */
    numLitter?: number;

    /**
     * Number of passengers associated with this load plan.
     */
    numPax?: number;

    /**
     * Identifier of the offload itinerary location.
     */
    offloadId?: number;

    /**
     * Offload location code.
     */
    offloadLOCode?: string;

    /**
     * Identifier of the onload itinerary location.
     */
    onloadId?: number;

    /**
     * Onload location code.
     */
    onloadLOCode?: string;

    /**
     * Identification number of the Operation Plan (OPLAN) associated with this load
     * plan.
     */
    oplan?: string;

    /**
     * Project name.
     */
    projName?: string;

    /**
     * Unit line number.
     */
    uln?: string;

    /**
     * Total weight of all cargo items for this unit line number in kilograms.
     */
    ulnCargoWeight?: number;

    /**
     * Remarks concerning these unit line number actuals.
     */
    ulnRemarks?: string;
  }
}

export interface AirLoadPlanRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AirLoadPlanListParams extends OffsetPageParams {
  /**
   * The current estimated time that the aircraft is planned to depart, in ISO 8601
   * UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  estDepTime: string;
}

export interface AirLoadPlanCountParams {
  /**
   * The current estimated time that the aircraft is planned to depart, in ISO 8601
   * UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  estDepTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface AirLoadPlanTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The current estimated time that the aircraft is planned to depart, in ISO 8601
   * UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  estDepTime: string;

  firstResult?: number;

  maxResults?: number;
}

export declare namespace AirLoadPlans {
  export {
    type AirloadplanAbridged as AirloadplanAbridged,
    type AirLoadPlanCountResponse as AirLoadPlanCountResponse,
    type AirLoadPlanQueryhelpResponse as AirLoadPlanQueryhelpResponse,
    type AirLoadPlanTupleResponse as AirLoadPlanTupleResponse,
    type AirloadplanAbridgedsOffsetPage as AirloadplanAbridgedsOffsetPage,
    type AirLoadPlanCreateParams as AirLoadPlanCreateParams,
    type AirLoadPlanRetrieveParams as AirLoadPlanRetrieveParams,
    type AirLoadPlanListParams as AirLoadPlanListParams,
    type AirLoadPlanCountParams as AirLoadPlanCountParams,
    type AirLoadPlanTupleParams as AirLoadPlanTupleParams,
  };
}
