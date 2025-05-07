// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AntennasAPI from './antennas';
import * as BatteriesAPI from './batteries';
import * as EnginesAPI from './engines';
import * as EntitiesAPI from './entities';
import * as SolarArrayDetailsAPI from './solar-array-details';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SeradataSpacecraftDetails extends APIResource {
  /**
   * Service operation to take a single SeradataSpacecraftDetails as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.seradataSpacecraftDetails.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'name',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: SeradataSpacecraftDetailCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/seradataspacecraftdetails', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update an SeradataSpacecraftDetails. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.seradataSpacecraftDetails.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'name',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(
    pathID: string,
    body: SeradataSpacecraftDetailUpdateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/udl/seradataspacecraftdetails/${pathID}`, {
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
   * for await (const seradataSpacecraftDetailListResponse of client.seradataSpacecraftDetails.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SeradataSpacecraftDetailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SeradataSpacecraftDetailListResponsesOffsetPage, SeradataSpacecraftDetailListResponse> {
    return this._client.getAPIList(
      '/udl/seradataspacecraftdetails',
      OffsetPage<SeradataSpacecraftDetailListResponse>,
      { query, ...options },
    );
  }

  /**
   * Service operation to delete an SeradataSpacecraftDetails specified by the passed
   * ID path parameter. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.seradataSpacecraftDetails.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/seradataspacecraftdetails/${id}`, {
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
   * const response =
   *   await client.seradataSpacecraftDetails.count();
   * ```
   */
  count(
    query: SeradataSpacecraftDetailCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/seradataspacecraftdetails/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single SeradataSpacecraftDetails by its unique ID
   * passed as a path parameter.
   *
   * @example
   * ```ts
   * const seradataSpacecraftDetail =
   *   await client.seradataSpacecraftDetails.get('id');
   * ```
   */
  get(
    id: string,
    query: SeradataSpacecraftDetailGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeradataSpacecraftDetailGetResponse> {
    return this._client.get(path`/udl/seradataspacecraftdetails/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * await client.seradataSpacecraftDetails.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/seradataspacecraftdetails/queryhelp', {
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
   *
   * @example
   * ```ts
   * const response =
   *   await client.seradataSpacecraftDetails.tuple({
   *     columns: 'columns',
   *   });
   * ```
   */
  tuple(
    query: SeradataSpacecraftDetailTupleParams,
    options?: RequestOptions,
  ): APIPromise<SeradataSpacecraftDetailTupleResponse> {
    return this._client.get('/udl/seradataspacecraftdetails/tuple', { query, ...options });
  }
}

export type SeradataSpacecraftDetailListResponsesOffsetPage =
  OffsetPage<SeradataSpacecraftDetailListResponse>;

/**
 * On-orbit spacecraft details compiled by Seradata for a particular satellite.
 */
export interface SeradataSpacecraftDetailListResponse {
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
   * Spacecraft name.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Spacecraft additional missions and groups.
   */
  additionalMissionsGroups?: string;

  /**
   * Spacecraft latest altitude in km.
   */
  altitude?: number;

  /**
   * Annual insured depreciaion factor as a percent fraction.
   */
  annualInsuredDepreciationFactor?: number;

  /**
   * Boolean indicating if the spacecraft annualInsuredDepreciationFactor is
   * estimated.
   */
  annualInsuredDepreciationFactorEstimated?: boolean;

  /**
   * Apogee in km.
   */
  apogee?: number;

  /**
   * Spacecraft Bus ID.
   */
  busId?: string;

  /**
   * Total capability lost as a percent fraction.
   */
  capabilityLost?: number;

  /**
   * Total capacity lost as a percent fraction.
   */
  capacityLost?: number;

  /**
   * NORAD satellite number if available.
   */
  catalogNumber?: number;

  /**
   * Spacecraft collision risk 1cm sqm latest.
   */
  collisionRiskCM?: number;

  /**
   * Spacecraft collision risk 1mm sqm latest.
   */
  collisionRiskMM?: number;

  /**
   * Boolean indicating if the spacecraft combined new cost is estimated.
   */
  combinedCostEstimated?: boolean;

  /**
   * Combined cost of spacecraft at new in M USD.
   */
  combinedNewCost?: number;

  /**
   * Boolean indicating if the launch was commercial.
   */
  commercialLaunch?: boolean;

  /**
   * Spacecraft constellation.
   */
  constellation?: string;

  /**
   * Boolean indicating if the spacecraft cost is estimated.
   */
  costEstimated?: boolean;

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
   * Cubesat dispenser type.
   */
  cubesatDispenserType?: string;

  /**
   * Current age in years.
   */
  currentAge?: number;

  /**
   * Spacecraft date of observation.
   */
  dateOfObservation?: string;

  /**
   * Description associated with the spacecraft.
   */
  description?: string;

  /**
   * Spacecraft design life in days.
   */
  designLife?: number;

  /**
   * Mass dry in kg.
   */
  dryMass?: number;

  /**
   * Spacecraft expected life in days.
   */
  expectedLife?: number;

  /**
   * WGS84 longitude of the spacecraft’s latest GEO position, in degrees. -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  geoPosition?: number;

  /**
   * UUID of the parent Onorbit record, if available.
   */
  idOnOrbit?: string;

  /**
   * Seradata provided inclination in degrees.
   */
  inclination?: number;

  /**
   * Spacecraft total insurance losses as a fraction.
   */
  insuranceLossesTotal?: number;

  /**
   * Insurance notes for the spacecraft.
   */
  insuranceNotes?: string;

  /**
   * Insurance premium at launch in M USD.
   */
  insurancePremiumAtLaunch?: number;

  /**
   * Boolean indicating if the spacecraft insurancePremiumAtLaunch is estimated.
   */
  insurancePremiumAtLaunchEstimated?: boolean;

  /**
   * Boolean indicating if the spacecraft was insured at launch.
   */
  insuredAtLaunch?: boolean;

  /**
   * Insured value of spacecraft at launch in M USD.
   */
  insuredValueAtLaunch?: number;

  /**
   * Boolean indicating if the spacecraft insured value at launch is estimated.
   */
  insuredValueLaunchEstimated?: boolean;

  /**
   * Seradata international number.
   */
  intlNumber?: string;

  /**
   * Spacecraft latest latitude in degrees.
   */
  lat?: number;

  /**
   * Spacecraft launch arranger.
   */
  launchArranger?: string;

  /**
   * Spacecraft launch arranger country.
   */
  launchArrangerCountry?: string;

  /**
   * Seradata launch characteristic (e.g. Expendable, Reusable (New), etc).
   */
  launchCharacteristic?: string;

  /**
   * Cost of launch in M USD.
   */
  launchCost?: number;

  /**
   * Boolean indicating if the spacecraft launch cost is estimated.
   */
  launchCostEstimated?: boolean;

  /**
   * Seradata launch country.
   */
  launchCountry?: string;

  /**
   * Launch date.
   */
  launchDate?: string;

  /**
   * Seradata remarks on launch date.
   */
  launchDateRemarks?: string;

  /**
   * Seradata launch ID.
   */
  launchId?: string;

  /**
   * Mass at launch in kg.
   */
  launchMass?: number;

  /**
   * Insurance notes for the spacecraft.
   */
  launchNotes?: string;

  /**
   * Seradata launch number.
   */
  launchNumber?: string;

  /**
   * Seradata launch provider.
   */
  launchProvider?: string;

  /**
   * Seradata launch provider country.
   */
  launchProviderCountry?: string;

  /**
   * Seradata launch vehicle family.
   */
  launchProviderFlightNumber?: string;

  /**
   * Seradata Launch Site ID.
   */
  launchSiteId?: string;

  /**
   * Launch Site Name.
   */
  launchSiteName?: string;

  /**
   * Seradata launch type (e.g. Launched, Future, etc).
   */
  launchType?: string;

  /**
   * Seradata launch ID.
   */
  launchVehicleId?: string;

  /**
   * Boolean indicating if the spacecraft was leased.
   */
  leased?: boolean;

  /**
   * Spacecraft life lost as a percent fraction.
   */
  lifeLost?: number;

  /**
   * Spacecraft latest longitude in degrees.
   */
  lon?: number;

  /**
   * Mass category (e.g. 2500 - 3500kg - Large Satellite, 10 - 100 kg -
   * Microsatellite, etc).
   */
  massCategory?: string;

  /**
   * Spacecraft name at launch.
   */
  nameAtLaunch?: string;

  /**
   * Cost of spacecraft at new in M USD.
   */
  newCost?: number;

  /**
   * Notes on the spacecraft.
   */
  notes?: string;

  /**
   * Number of humans carried on spacecraft.
   */
  numHumans?: number;

  /**
   * Spacecraft operator name.
   */
  operator?: string;

  /**
   * Spacecraft operator country.
   */
  operatorCountry?: string;

  /**
   * Spacecraft orbit category (e.g GEO, LEO, etc).
   */
  orbitCategory?: string;

  /**
   * Spacecraft sub orbit category (e.g LEO - Sun-synchronous, Geostationary, etc).
   */
  orbitSubCategory?: string;

  /**
   * Spacecraft order date.
   */
  orderDate?: string;

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
   * Spacecraft owner name.
   */
  owner?: string;

  /**
   * Spacecraft owner country.
   */
  ownerCountry?: string;

  /**
   * Perigee in km.
   */
  perigee?: number;

  /**
   * Spacecraft period in minutes.
   */
  period?: number;

  /**
   * Spacecraft primary mission and group.
   */
  primaryMissionGroup?: string;

  /**
   * UUID of the prime manufacturer organization, if available.
   */
  primeManufacturerOrgId?: string;

  /**
   * Spacecraft program name.
   */
  programName?: string;

  /**
   * Spacecraft quantity.
   */
  quantity?: number;

  /**
   * Spacecraft reusable flights.
   */
  reusableFlights?: string;

  /**
   * Spacecraft reused hull name.
   */
  reusedHullName?: string;

  /**
   * Seradata sector (e.g. Commercial, Military, Civil/Other).
   */
  sector?: string;

  /**
   * Spacecraft serial number.
   */
  serialNumber?: string;

  /**
   * Spacecraft stabilizer (e.g. 3-Axis, Gravity Gradiant, etc).
   */
  stabilizer?: string;

  /**
   * Spacecraft status (e.g. Inactive - Retired, Inactive - Re-entered, Active, etc).
   */
  status?: string;

  /**
   * Number of insurance claims for this spacecraft.
   */
  totalClaims?: number;

  /**
   * Number of fatalities related to this spacecraft.
   */
  totalFatalities?: number;

  /**
   * Number of injuries related to this spacecraft.
   */
  totalInjuries?: number;

  /**
   * Mass dry in kg.
   */
  totalPayloadPower?: number;

  /**
   * Youtube link of launch.
   */
  youtubeLaunchLink?: string;
}

export type SeradataSpacecraftDetailCountResponse = string;

/**
 * On-orbit spacecraft details compiled by Seradata for a particular satellite.
 */
export interface SeradataSpacecraftDetailGetResponse {
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
   * Spacecraft name.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Spacecraft additional missions and groups.
   */
  additionalMissionsGroups?: string;

  /**
   * Spacecraft latest altitude in km.
   */
  altitude?: number;

  /**
   * Annual insured depreciaion factor as a percent fraction.
   */
  annualInsuredDepreciationFactor?: number;

  /**
   * Boolean indicating if the spacecraft annualInsuredDepreciationFactor is
   * estimated.
   */
  annualInsuredDepreciationFactorEstimated?: boolean;

  /**
   * Apogee in km.
   */
  apogee?: number;

  /**
   * Spacecraft Bus ID.
   */
  busId?: string;

  /**
   * Total capability lost as a percent fraction.
   */
  capabilityLost?: number;

  /**
   * Total capacity lost as a percent fraction.
   */
  capacityLost?: number;

  /**
   * NORAD satellite number if available.
   */
  catalogNumber?: number;

  /**
   * Spacecraft collision risk 1cm sqm latest.
   */
  collisionRiskCM?: number;

  /**
   * Spacecraft collision risk 1mm sqm latest.
   */
  collisionRiskMM?: number;

  /**
   * Boolean indicating if the spacecraft combined new cost is estimated.
   */
  combinedCostEstimated?: boolean;

  /**
   * Combined cost of spacecraft at new in M USD.
   */
  combinedNewCost?: number;

  /**
   * Boolean indicating if the launch was commercial.
   */
  commercialLaunch?: boolean;

  /**
   * Spacecraft constellation.
   */
  constellation?: string;

  /**
   * Boolean indicating if the spacecraft cost is estimated.
   */
  costEstimated?: boolean;

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
   * Cubesat dispenser type.
   */
  cubesatDispenserType?: string;

  /**
   * Current age in years.
   */
  currentAge?: number;

  /**
   * Spacecraft date of observation.
   */
  dateOfObservation?: string;

  /**
   * Description associated with the spacecraft.
   */
  description?: string;

  /**
   * Spacecraft design life in days.
   */
  designLife?: number;

  /**
   * Mass dry in kg.
   */
  dryMass?: number;

  /**
   * Spacecraft expected life in days.
   */
  expectedLife?: number;

  /**
   * WGS84 longitude of the spacecraft’s latest GEO position, in degrees. -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  geoPosition?: number;

  /**
   * UUID of the parent Onorbit record, if available.
   */
  idOnOrbit?: string;

  /**
   * Seradata provided inclination in degrees.
   */
  inclination?: number;

  /**
   * Spacecraft total insurance losses as a fraction.
   */
  insuranceLossesTotal?: number;

  /**
   * Insurance notes for the spacecraft.
   */
  insuranceNotes?: string;

  /**
   * Insurance premium at launch in M USD.
   */
  insurancePremiumAtLaunch?: number;

  /**
   * Boolean indicating if the spacecraft insurancePremiumAtLaunch is estimated.
   */
  insurancePremiumAtLaunchEstimated?: boolean;

  /**
   * Boolean indicating if the spacecraft was insured at launch.
   */
  insuredAtLaunch?: boolean;

  /**
   * Insured value of spacecraft at launch in M USD.
   */
  insuredValueAtLaunch?: number;

  /**
   * Boolean indicating if the spacecraft insured value at launch is estimated.
   */
  insuredValueLaunchEstimated?: boolean;

  /**
   * Seradata international number.
   */
  intlNumber?: string;

  /**
   * Spacecraft latest latitude in degrees.
   */
  lat?: number;

  /**
   * Spacecraft launch arranger.
   */
  launchArranger?: string;

  /**
   * Spacecraft launch arranger country.
   */
  launchArrangerCountry?: string;

  /**
   * Seradata launch characteristic (e.g. Expendable, Reusable (New), etc).
   */
  launchCharacteristic?: string;

  /**
   * Cost of launch in M USD.
   */
  launchCost?: number;

  /**
   * Boolean indicating if the spacecraft launch cost is estimated.
   */
  launchCostEstimated?: boolean;

  /**
   * Seradata launch country.
   */
  launchCountry?: string;

  /**
   * Launch date.
   */
  launchDate?: string;

  /**
   * Seradata remarks on launch date.
   */
  launchDateRemarks?: string;

  /**
   * Seradata launch ID.
   */
  launchId?: string;

  /**
   * Mass at launch in kg.
   */
  launchMass?: number;

  /**
   * Insurance notes for the spacecraft.
   */
  launchNotes?: string;

  /**
   * Seradata launch number.
   */
  launchNumber?: string;

  /**
   * Seradata launch provider.
   */
  launchProvider?: string;

  /**
   * Seradata launch provider country.
   */
  launchProviderCountry?: string;

  /**
   * Seradata launch vehicle family.
   */
  launchProviderFlightNumber?: string;

  /**
   * Seradata Launch Site ID.
   */
  launchSiteId?: string;

  /**
   * Launch Site Name.
   */
  launchSiteName?: string;

  /**
   * Seradata launch type (e.g. Launched, Future, etc).
   */
  launchType?: string;

  /**
   * Seradata launch ID.
   */
  launchVehicleId?: string;

  /**
   * Boolean indicating if the spacecraft was leased.
   */
  leased?: boolean;

  /**
   * Spacecraft life lost as a percent fraction.
   */
  lifeLost?: number;

  /**
   * Spacecraft latest longitude in degrees.
   */
  lon?: number;

  /**
   * Mass category (e.g. 2500 - 3500kg - Large Satellite, 10 - 100 kg -
   * Microsatellite, etc).
   */
  massCategory?: string;

  /**
   * Spacecraft name at launch.
   */
  nameAtLaunch?: string;

  /**
   * Cost of spacecraft at new in M USD.
   */
  newCost?: number;

  /**
   * Notes on the spacecraft.
   */
  notes?: string;

  /**
   * Number of humans carried on spacecraft.
   */
  numHumans?: number;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: SeradataSpacecraftDetailGetResponse.OnOrbit;

  /**
   * Spacecraft operator name.
   */
  operator?: string;

  /**
   * Spacecraft operator country.
   */
  operatorCountry?: string;

  /**
   * Spacecraft orbit category (e.g GEO, LEO, etc).
   */
  orbitCategory?: string;

  /**
   * Spacecraft sub orbit category (e.g LEO - Sun-synchronous, Geostationary, etc).
   */
  orbitSubCategory?: string;

  /**
   * Spacecraft order date.
   */
  orderDate?: string;

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
   * Spacecraft owner name.
   */
  owner?: string;

  /**
   * Spacecraft owner country.
   */
  ownerCountry?: string;

  /**
   * Perigee in km.
   */
  perigee?: number;

  /**
   * Spacecraft period in minutes.
   */
  period?: number;

  /**
   * Spacecraft primary mission and group.
   */
  primaryMissionGroup?: string;

  /**
   * UUID of the prime manufacturer organization, if available.
   */
  primeManufacturerOrgId?: string;

  /**
   * Spacecraft program name.
   */
  programName?: string;

  /**
   * Spacecraft quantity.
   */
  quantity?: number;

  /**
   * Spacecraft reusable flights.
   */
  reusableFlights?: string;

  /**
   * Spacecraft reused hull name.
   */
  reusedHullName?: string;

  /**
   * Read-only details of the Scientific object, only used during detail queries (not
   * to be provided on create/update operations).
   */
  scientific?: Array<SeradataSpacecraftDetailGetResponse.Scientific>;

  /**
   * Seradata sector (e.g. Commercial, Military, Civil/Other).
   */
  sector?: string;

  /**
   * Read-only details of the SeradataCommDetails object, only used during detail
   * queries (not to be provided on create/update operations).
   */
  seradataCommDetails?: Array<SeradataSpacecraftDetailGetResponse.SeradataCommDetail>;

  /**
   * Read-only details of the SeradataEarlyWarning object, only used during detail
   * queries (not to be provided on create/update operations).
   */
  seradataEarlyWarning?: Array<SeradataSpacecraftDetailGetResponse.SeradataEarlyWarning>;

  /**
   * Read-only details of the SeradataNavigation object, only used during detail
   * queries (not to be provided on create/update operations).
   */
  seradataNavigation?: Array<SeradataSpacecraftDetailGetResponse.SeradataNavigation>;

  /**
   * Read-only details of the SeradataOpticalPayload object, only used during detail
   * queries (not to be provided on create/update operations).
   */
  seradataOpticalPayload?: Array<SeradataSpacecraftDetailGetResponse.SeradataOpticalPayload>;

  /**
   * Read-only details of the SeradataRadarPayload object, only used during detail
   * queries (not to be provided on create/update operations).
   */
  seradataRadarPayload?: Array<SeradataSpacecraftDetailGetResponse.SeradataRadarPayload>;

  /**
   * Read-only details of the SeradataSigIntPayload object, only used during detail
   * queries (not to be provided on create/update operations).
   */
  seradataSigIntPayload?: Array<SeradataSpacecraftDetailGetResponse.SeradataSigIntPayload>;

  /**
   * Spacecraft serial number.
   */
  serialNumber?: string;

  /**
   * Spacecraft stabilizer (e.g. 3-Axis, Gravity Gradiant, etc).
   */
  stabilizer?: string;

  /**
   * Spacecraft status (e.g. Inactive - Retired, Inactive - Re-entered, Active, etc).
   */
  status?: string;

  /**
   * Number of insurance claims for this spacecraft.
   */
  totalClaims?: number;

  /**
   * Number of fatalities related to this spacecraft.
   */
  totalFatalities?: number;

  /**
   * Number of injuries related to this spacecraft.
   */
  totalInjuries?: number;

  /**
   * Mass dry in kg.
   */
  totalPayloadPower?: number;

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
   * Youtube link of launch.
   */
  youtubeLaunchLink?: string;
}

export namespace SeradataSpacecraftDetailGetResponse {
  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  export interface OnOrbit {
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
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Alternate name of the on-orbit object.
     */
    altName?: string;

    /**
     * Read-only collection of antennas on this on-orbit object.
     */
    antennas?: Array<OnOrbit.Antenna>;

    /**
     * Read-only collection of batteries on this on-orbit object.
     */
    batteries?: Array<OnOrbit.Battery>;

    /**
     * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
     * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
     * Heliocentric, Interplanetary, Lagrangian, Docked).
     */
    category?:
      | 'Unknown'
      | 'On-Orbit'
      | 'Decayed'
      | 'Cataloged Without State'
      | 'Launch Nominal'
      | 'Analyst Satellite'
      | 'Cislunar'
      | 'Lunar'
      | 'Hyperbolic'
      | 'Heliocentric'
      | 'Interplanetary'
      | 'Lagrangian'
      | 'Docked';

    /**
     * Common name of the on-orbit object.
     */
    commonName?: string;

    /**
     * Constellation to which this satellite belongs.
     */
    constellation?: string;

    /**
     * The country code. This value is typically the ISO 3166 Alpha-2 two-character
     * country code, however it can also represent various consortiums that do not
     * appear in the ISO document. The code must correspond to an existing country in
     * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
     * ISO Alpha-3 code, or alternate code values that exist for the specified country
     * code.
     */
    countryCode?: string;

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
     * Date of decay.
     */
    decayDate?: string;

    /**
     * For the public catalog, the idOnOrbit is typically the satellite number as a
     * string, but may be a UUID for analyst or other unknown or untracked satellites,
     * auto-generated by the system.
     */
    idOnOrbit?: string;

    /**
     * International Designator, typically of the format YYYYLLLAAA, where YYYY is the
     * launch year, LLL is the sequential launch number of that year, and AAA is an
     * optional launch piece designator for the launch.
     */
    intlDes?: string;

    /**
     * Date of launch.
     */
    launchDate?: string;

    /**
     * Id of the associated launchSite entity.
     */
    launchSiteId?: string;

    /**
     * Estimated lifetime of the on-orbit payload, if known.
     */
    lifetimeYears?: number;

    /**
     * Mission number of the on-orbit object.
     */
    missionNumber?: string;

    /**
     * Type of on-orbit object: ROCKET BODY, DEBRIS, PAYLOAD, PLATFORM, MANNED,
     * UNKNOWN.
     */
    objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

    /**
     * Read-only collection of details for this on-orbit object.
     */
    onorbitDetails?: Array<OnOrbit.OnorbitDetail>;

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
     * Read-only collection of solar arrays on this on-orbit object.
     */
    solarArrays?: Array<OnOrbit.SolarArray>;

    /**
     * Read-only collection of thrusters (engines) on this on-orbit object.
     */
    thrusters?: Array<OnOrbit.Thruster>;

    /**
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }

  export namespace OnOrbit {
    export interface Antenna {
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
       * ID of the antenna.
       */
      idAntenna: string;

      /**
       * ID of the on-orbit object.
       */
      idOnOrbit: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Model representation of information on on-orbit/spacecraft communication
       * antennas. A spacecraft may have multiple antennas and each antenna can have
       * multiple 'details' records compiled by different sources.
       */
      antenna?: AntennasAPI.AntennaFull;

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
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }

    export interface Battery {
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
       * ID of the battery.
       */
      idBattery: string;

      /**
       * ID of the on-orbit object.
       */
      idOnOrbit: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Model representation of specific spacecraft battery types.
       */
      battery?: BatteriesAPI.BatteryFull;

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
       * The number of batteries on the spacecraft of the type identified by idBattery.
       */
      quantity?: number;

      /**
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }

    /**
     * Contains details of the OnOrbit object.
     */
    export interface OnorbitDetail {
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
       * UUID of the parent Onorbit record.
       */
      idOnOrbit: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Mass of fuel and disposables at launch time in kilograms.
       */
      additionalMass?: number;

      /**
       * The radius used for long-term debris environment projection analyses that is not
       * as conservative as COLA Radius, in meters.
       */
      adeptRadius?: number;

      /**
       * The total beginning of life delta V of the spacecraft, in meters per second.
       */
      bolDeltaV?: number;

      /**
       * Spacecraft beginning of life fuel mass, in orbit, in kilograms.
       */
      bolFuelMass?: number;

      /**
       * Average cross sectional area of the bus in meters squared.
       */
      busCrossSection?: number;

      /**
       * Type of the bus on the spacecraft.
       */
      busType?: string;

      /**
       * Maximum dimension of the box circumscribing the spacecraft (d = sqrt(a*a + b*b +
       * c\*c) where a is the tip-to-tip dimension, b and c are perpendicular to that.)
       * in meters.
       */
      colaRadius?: number;

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
       * Average cross sectional area in meters squared.
       */
      crossSection?: number;

      /**
       * The estimated total current mass of the spacecraft, in kilograms.
       */
      currentMass?: number;

      /**
       * The 1-sigma uncertainty of the total spacecraft delta V, in meters per second.
       */
      deltaVUnc?: number;

      /**
       * Array of the estimated mass of each deployable object, in kilograms. Must
       * contain the same number of elements as the value of numDeployable.
       */
      depEstMasses?: Array<number>;

      /**
       * Array of the 1-sigma uncertainty of the mass for each deployable object, in
       * kilograms. Must contain the same number of elements as the value of
       * numDeployable.
       */
      depMassUncs?: Array<number>;

      /**
       * Array of satellite deployable objects. Must contain the same number of elements
       * as the value of numDeployable.
       */
      depNames?: Array<string>;

      /**
       * GEO drift rate, if applicable in degrees per day.
       */
      driftRate?: number;

      /**
       * Spacecraft dry mass (without fuel or disposables) in kilograms.
       */
      dryMass?: number;

      /**
       * Estimated maximum burn duration for the object, in seconds.
       */
      estDeltaVDuration?: number;

      /**
       * Estimated remaining fuel for the object in kilograms.
       */
      fuelRemaining?: number;

      /**
       * GEO slot if applicable, in degrees. -180 (West of Prime Meridian) to 180 degrees
       * (East of Prime Meridian). Prime Meridian is 0.
       */
      geoSlot?: number;

      /**
       * The name of the source who last provided an observation for this idOnOrbit.
       */
      lastObSource?: string;

      /**
       * Time of last reported observation for this object in ISO 8601 UTC with
       * microsecond precision.
       */
      lastObTime?: string;

      /**
       * Nominal mass of spacecraft and fuel at launch time, in kilograms.
       */
      launchMass?: number;

      /**
       * Maximum (estimated) mass of spacecraft and fuel at launch time, in kilograms.
       */
      launchMassMax?: number;

      /**
       * Minimum (estimated) mass of spacecraft and fuel at launch time, in kilograms.
       */
      launchMassMin?: number;

      /**
       * Boolean indicating whether a spacecraft is maneuverable. Note that a spacecraft
       * may have propulsion capability but may not be maneuverable due to lack of fuel,
       * anomalous condition, or other operational constraints.
       */
      maneuverable?: boolean;

      /**
       * Maximum delta V available for this on-orbit spacecraft, in meters per second.
       */
      maxDeltaV?: number;

      /**
       * Maximum dimension across the spacecraft (e.g., tip-to-tip across the solar panel
       * arrays) in meters.
       */
      maxRadius?: number;

      /**
       * Array of the type of missions the spacecraft performs. Must contain the same
       * number of elements as the value of numMission.
       */
      missionTypes?: Array<string>;

      /**
       * The number of sub-satellites or deployable objects on the spacecraft.
       */
      numDeployable?: number;

      /**
       * The number of distinct missions the spacecraft performs.
       */
      numMission?: number;

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
       * Current/latest radar cross section in meters squared.
       */
      rcs?: number;

      /**
       * Maximum radar cross section in meters squared.
       */
      rcsMax?: number;

      /**
       * Mean radar cross section in meters squared.
       */
      rcsMean?: number;

      /**
       * Minimum radar cross section in meters squared.
       */
      rcsMin?: number;

      /**
       * The reference source, sources, or URL from which the data in this record was
       * obtained.
       */
      refSource?: string;

      /**
       * Spacecraft deployed area of solar array in meters squared.
       */
      solarArrayArea?: number;

      /**
       * The 1-sigma uncertainty of the total spacecraft mass, in kilograms.
       */
      totalMassUnc?: number;

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
       * Current/latest visual magnitude in M.
       */
      vismag?: number;

      /**
       * Maximum visual magnitude in M.
       */
      vismagMax?: number;

      /**
       * Mean visual magnitude in M.
       */
      vismagMean?: number;

      /**
       * Minimum visual magnitude in M.
       */
      vismagMin?: number;
    }

    export interface SolarArray {
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
       * ID of the on-orbit object.
       */
      idOnOrbit: string;

      /**
       * ID of the SolarArray.
       */
      idSolarArray: string;

      /**
       * Source of the data.
       */
      source: string;

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
       * The number of solar arrays on the spacecraft of the type identified by
       * idSolarArray.
       */
      quantity?: number;

      /**
       * Model representation of information on on-orbit/spacecraft solar arrays. A
       * spacecraft may have multiple solar arrays and each solar array can have multiple
       * 'details' records compiled by different sources.
       */
      solarArray?: SolarArray.SolarArray;

      /**
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }

    export namespace SolarArray {
      /**
       * Model representation of information on on-orbit/spacecraft solar arrays. A
       * spacecraft may have multiple solar arrays and each solar array can have multiple
       * 'details' records compiled by different sources.
       */
      export interface SolarArray {
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
         * Solar Array name.
         */
        name: string;

        /**
         * Source of the data.
         */
        source: string;

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
         * Read-only collection of additional SolarArrayDetails by various sources for this
         * organization, ignored on create/update. These details must be created separately
         * via the /udl/solararraydetails operations.
         */
        solarArrayDetails?: Array<SolarArrayDetailsAPI.SolarArrayDetailsFull>;

        /**
         * Time the row was last updated in the database, auto-populated by the system.
         */
        updatedAt?: string;

        /**
         * Application user who updated the row in the database, auto-populated by the
         * system.
         */
        updatedBy?: string;
      }
    }

    export interface Thruster {
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
       * ID of the Engine.
       */
      idEngine: string;

      /**
       * ID of the on-orbit object.
       */
      idOnOrbit: string;

      /**
       * Source of the data.
       */
      source: string;

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
       * Known launch vehicle engines and their performance characteristics and limits. A
       * launch vehicle has 1 to many engines per stage.
       */
      engine?: EnginesAPI.Engine;

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
       * The number of engines/thrusters on the spacecraft of the type identified by
       * idEngine.
       */
      quantity?: number;

      /**
       * The type of thruster associated with this record (e.g. LAE, Hydrazine REA,
       * etc.).
       */
      type?: string;

      /**
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }
  }

  /**
   * Scientific or other data from Seradata.
   */
  export interface Scientific {
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
     * Sensor name from sera data, e.g. SEM/MAG (SEM / Magnetometer).
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    spacecraftId: string;

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
     * An entity is a generic representation of any object within a space/SSA system
     * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
     * entity can have an operating unit, a location (if terrestrial), and statuses.
     */
    entity?: EntitiesAPI.EntityFull;

    /**
     * Frequency band, e.g. Gamma.
     */
    frequencyBand?: string;

    /**
     * Hosted for company/Organization Id.
     */
    hostedForCompanyOrgId?: string;

    /**
     * ID of the parent entity for this Scientific.
     */
    idEntity?: string;

    /**
     * Unique identifier of the organization which manufactures this bus.
     */
    manufacturerOrgId?: string;

    /**
     * Notes associated with the payload.
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
     * Payload category, e.g. Magnetometer, Radiometer, Sensor, etc.
     */
    payloadCategory?: string;

    /**
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }

  /**
   * Seradata-compiled information on communications payloads.
   */
  export interface SeradataCommDetail {
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
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Name of the band of this RF range (e.g.
     * X,K,Ku,Ka,L,S,C,UHF,VHF,EHF,SHF,UNK,VLF,HF,E,Q,V,W). See RFBandType for more
     * details and descriptions of each band name.
     */
    band?: string;

    /**
     * Comm bandwidth in Mhz.
     */
    bandwidth?: number;

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
     * Effective isotropic radiated power in dB.
     */
    eirp?: number;

    /**
     * Comm estimated HtsTotalCapacity in Gbps.
     */
    estHtsTotalCapacity?: number;

    /**
     * Comm estimated HtsTotalUserDownlinkBandwidthPerBeam in Mhz.
     */
    estHtsTotalUserDownlinkBandwidthPerBeam?: number;

    /**
     * Comm estimated HtsTotalUserUplinkBandwidthPerBeam in Mhz.
     */
    estHtsTotalUserUplinkBandwidthPerBeam?: number;

    /**
     * Comm gatewayDownlinkFrom in Ghz.
     */
    gatewayDownlinkFrom?: number;

    /**
     * Comm gatewayDownlinkTo in Ghz.
     */
    gatewayDownlinkTo?: number;

    /**
     * Comm gatewayUplinkFrom in Ghz.
     */
    gatewayUplinkFrom?: number;

    /**
     * Comm gatewayUplinkTo in Ghz.
     */
    gatewayUplinkTo?: number;

    /**
     * Comm hostedForCompanyOrgId.
     */
    hostedForCompanyOrgId?: string;

    /**
     * Comm htsNumUserSpotBeams.
     */
    htsNumUserSpotBeams?: number;

    /**
     * Comm htsUserDownlinkBandwidthPerBeam in Mhz.
     */
    htsUserDownlinkBandwidthPerBeam?: number;

    /**
     * Comm htsUserUplinkBandwidthPerBeam in Mhz.
     */
    htsUserUplinkBandwidthPerBeam?: number;

    /**
     * UUID of the parent Comm record.
     */
    idComm?: string;

    /**
     * Comm manufacturerOrgId.
     */
    manufacturerOrgId?: string;

    /**
     * Comm num36MhzEquivalentTransponders.
     */
    num36MhzEquivalentTransponders?: number;

    /**
     * Comm numOperationalTransponders.
     */
    numOperationalTransponders?: number;

    /**
     * Comm numSpareTransponders.
     */
    numSpareTransponders?: number;

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
     * Payload notes.
     */
    payloadNotes?: string;

    /**
     * Comm polarization.
     */
    polarization?: string;

    /**
     * Solid state power amplifier, in Watts.
     */
    solidStatePowerAmp?: number;

    /**
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    spacecraftId?: string;

    /**
     * Comm tradeLeaseOrgId.
     */
    tradeLeaseOrgId?: string;

    /**
     * Comm travelingWaveTubeAmplifier in Watts.
     */
    travelingWaveTubeAmplifier?: number;

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
     * Comm userDownlinkFrom in Ghz.
     */
    userDownlinkFrom?: number;

    /**
     * Comm userDownlinkTo in Ghz.
     */
    userDownlinkTo?: number;

    /**
     * Comm userUplinkFrom in Ghz.
     */
    userUplinkFrom?: number;

    /**
     * Comm userUplinkTo in Ghz.
     */
    userUplinkTo?: number;
  }

  /**
   * Details for an early warning payload from Seradata.
   */
  export interface SeradataEarlyWarning {
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
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    spacecraftId: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Best resolution for this IR in meters.
     */
    bestResolution?: number;

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
     * Is the sensor Earth Pointing.
     */
    earthPointing?: boolean;

    /**
     * Frequency Limits for this IR.
     */
    frequencyLimits?: string;

    /**
     * Ground Station Locations for this IR.
     */
    groundStationLocations?: string;

    /**
     * Ground Station info for this IR.
     */
    groundStations?: string;

    /**
     * Hosted for company/Organization Id.
     */
    hostedForCompanyOrgId?: string;

    /**
     * UUID of the parent IR record.
     */
    idIR?: string;

    /**
     * Manufacturer Organization Id.
     */
    manufacturerOrgId?: string;

    /**
     * Missile Launch Phase Detection Ability.
     */
    missileLaunchPhaseDetectionAbility?: string;

    /**
     * Sensor name from Seradata, e.g. Infra red telescope, Schmidt Telescope, etc.
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
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    partnerSpacecraftId?: string;

    /**
     * Payload notes.
     */
    payloadNotes?: string;

    /**
     * Spectral Bands, e.g. Infra-Red.
     */
    spectralBands?: string;

    /**
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }

  /**
   * Details for a navigation payload from Seradata.
   */
  export interface SeradataNavigation {
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
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    spacecraftId: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Area of coverage, e.g. Worldwide, India, etc.
     */
    areaCoverage?: string;

    /**
     * Type of clock, e.g. Rubidium, Hydrogen Maser, etc.
     */
    clockType?: string;

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
     * Hosted for company/Organization Id.
     */
    hostedForCompanyOrgId?: string;

    /**
     * UUID of the parent Navigation record.
     */
    idNavigation?: string;

    /**
     * Location accuracy in meters.
     */
    locationAccuracy?: number;

    /**
     * Manufacturer Organization Id.
     */
    manufacturerOrgId?: string;

    /**
     * Frequency for this payload.
     */
    modeFrequency?: string;

    /**
     * Modes of operation.
     */
    modes?: string;

    /**
     * Sensor name from Seradata, e.g. WAAS GEO-5, etc.
     */
    name?: string;

    /**
     * Payload notes.
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
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    partnerSpacecraftId?: string;

    /**
     * Navigation payload type, e.g. WAAS, GAGAN, etc.
     */
    payloadType?: string;

    /**
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }

  /**
   * Details for an optical payload from Seradata.
   */
  export interface SeradataOpticalPayload {
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
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    spacecraftId: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Best resolution.
     */
    bestResolution?: number;

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
     * Field of regard of this radar in degrees.
     */
    fieldOfRegard?: number;

    /**
     * Field of view of this radar in kilometers.
     */
    fieldOfView?: number;

    /**
     * Ground Station Locations for this payload.
     */
    groundStationLocations?: string;

    /**
     * Ground Station info for this payload.
     */
    groundStations?: string;

    /**
     * Hosted for company/Organization Id.
     */
    hostedForCompanyOrgId?: string;

    /**
     * UUID of the Sensor record.
     */
    idSensor?: string;

    /**
     * Imaging category for this payload, e.g. Multispectral, Infrared, Panchromatic.
     */
    imagingPayloadCategory?: string;

    /**
     * Manufacturer Organization Id.
     */
    manufacturerOrgId?: string;

    /**
     * Sensor name from Seradata, e.g. TOURNESOL, MESSR (Multispectral Self-Scanning
     * Radiometer), AWFI, etc.
     */
    name?: string;

    /**
     * Payload notes.
     */
    notes?: string;

    /**
     * Number of film return canisters.
     */
    numberOfFilmReturnCanisters?: number;

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
     * Point method for this radar, e.g. Spacecraft.
     */
    pointingMethod?: string;

    /**
     * Recorder size.
     */
    recorderSize?: string;

    /**
     * Spectral Band supported by this payload, e.g. Green, Red, Mid-wave infrared,
     * etc.
     */
    spectralBand?: string;

    /**
     * Frequency limit for this payload, e.g. 0.51 - 0.59.
     */
    spectralFrequencyLimits?: string;

    /**
     * Swath width in kilometers.
     */
    swathWidth?: number;

    /**
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }

  /**
   * Details for an radar payload from Seradata.
   */
  export interface SeradataRadarPayload {
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
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    spacecraftId: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Radar bandwidth in mega hertz.
     */
    bandwidth?: number;

    /**
     * Best resolution in meters.
     */
    bestResolution?: number;

    /**
     * Radar category, e.g. SAR, Surface Search, etc.
     */
    category?: string;

    /**
     * Constellation interferometric capability.
     */
    constellationInterferometricCapability?: string;

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
     * Duty cycle.
     */
    dutyCycle?: string;

    /**
     * Field of regard of this radar in degrees.
     */
    fieldOfRegard?: number;

    /**
     * Field of view of this radar in kilometers.
     */
    fieldOfView?: number;

    /**
     * Frequency in giga hertz.
     */
    frequency?: number;

    /**
     * Name of the band of this RF range (e.g.
     * X,K,Ku,Ka,L,S,C,UHF,VHF,EHF,SHF,UNK,VLF,HF,E,Q,V,W). See RFBandType for more
     * details and descriptions of each band name.
     */
    frequencyBand?: string;

    /**
     * Ground Station Locations for this payload.
     */
    groundStationLocations?: string;

    /**
     * Ground Station info for this payload.
     */
    groundStations?: string;

    /**
     * Hosted for company/Organization Id.
     */
    hostedForCompanyOrgId?: string;

    /**
     * UUID of the Sensor record.
     */
    idSensor?: string;

    /**
     * Manufacturer Organization Id.
     */
    manufacturerOrgId?: string;

    /**
     * Sensor name from Seradata, e.g. ALT (Radar Altimeter), COSI (Corea SAR
     * Instrument), etc.
     */
    name?: string;

    /**
     * Payload notes.
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
     * Partner seradata-spacecraft.
     */
    partnerSpacecraft?: string;

    /**
     * Point method for this radar, e.g. Spacecraft.
     */
    pointingMethod?: string;

    /**
     * Receive polarization, e.g. Lin Dual, Lin vert, etc.
     */
    receivePolarization?: string;

    /**
     * Recorder size, e.g. 256.
     */
    recorderSize?: string;

    /**
     * Swath width in kilometers.
     */
    swathWidth?: number;

    /**
     * Transmit polarization, e.g. Lin Dual, Lin vert, etc.
     */
    transmitPolarization?: string;

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
     * Wave length in meters.
     */
    waveLength?: number;
  }

  /**
   * Details for an sigint payload from Seradata.
   */
  export interface SeradataSigIntPayload {
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
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    spacecraftId: string;

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
     * Frequency coverage for this payload.
     */
    frequencyCoverage?: string;

    /**
     * Ground Station Locations for this payload.
     */
    groundStationLocations?: string;

    /**
     * Ground Station info for this payload.
     */
    groundStations?: string;

    /**
     * Hosted for company/Organization Id.
     */
    hostedForCompanyOrgId?: string;

    /**
     * UUID of the Sensor record.
     */
    idSensor?: string;

    /**
     * Intercept parameters.
     */
    interceptParameters?: string;

    /**
     * Manufacturer Organization Id.
     */
    manufacturerOrgId?: string;

    /**
     * Sensor name from Seradata.
     */
    name?: string;

    /**
     * Payload notes.
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
     * Positional Accuracy for this payload.
     */
    positionalAccuracy?: string;

    /**
     * Swath Width in kilometers.
     */
    swathWidth?: number;

    /**
     * SIGINT Payload type, e.g. Comint, Elint, etc.
     */
    type?: string;

    /**
     * Time the row was last updated in the database, auto-populated by the system.
     */
    updatedAt?: string;

    /**
     * Application user who updated the row in the database, auto-populated by the
     * system.
     */
    updatedBy?: string;
  }
}

export type SeradataSpacecraftDetailTupleResponse =
  Array<SeradataSpacecraftDetailTupleResponse.SeradataSpacecraftDetailTupleResponseItem>;

export namespace SeradataSpacecraftDetailTupleResponse {
  /**
   * On-orbit spacecraft details compiled by Seradata for a particular satellite.
   */
  export interface SeradataSpacecraftDetailTupleResponseItem {
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
     * Spacecraft name.
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Spacecraft additional missions and groups.
     */
    additionalMissionsGroups?: string;

    /**
     * Spacecraft latest altitude in km.
     */
    altitude?: number;

    /**
     * Annual insured depreciaion factor as a percent fraction.
     */
    annualInsuredDepreciationFactor?: number;

    /**
     * Boolean indicating if the spacecraft annualInsuredDepreciationFactor is
     * estimated.
     */
    annualInsuredDepreciationFactorEstimated?: boolean;

    /**
     * Apogee in km.
     */
    apogee?: number;

    /**
     * Spacecraft Bus ID.
     */
    busId?: string;

    /**
     * Total capability lost as a percent fraction.
     */
    capabilityLost?: number;

    /**
     * Total capacity lost as a percent fraction.
     */
    capacityLost?: number;

    /**
     * NORAD satellite number if available.
     */
    catalogNumber?: number;

    /**
     * Spacecraft collision risk 1cm sqm latest.
     */
    collisionRiskCM?: number;

    /**
     * Spacecraft collision risk 1mm sqm latest.
     */
    collisionRiskMM?: number;

    /**
     * Boolean indicating if the spacecraft combined new cost is estimated.
     */
    combinedCostEstimated?: boolean;

    /**
     * Combined cost of spacecraft at new in M USD.
     */
    combinedNewCost?: number;

    /**
     * Boolean indicating if the launch was commercial.
     */
    commercialLaunch?: boolean;

    /**
     * Spacecraft constellation.
     */
    constellation?: string;

    /**
     * Boolean indicating if the spacecraft cost is estimated.
     */
    costEstimated?: boolean;

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
     * Cubesat dispenser type.
     */
    cubesatDispenserType?: string;

    /**
     * Current age in years.
     */
    currentAge?: number;

    /**
     * Spacecraft date of observation.
     */
    dateOfObservation?: string;

    /**
     * Description associated with the spacecraft.
     */
    description?: string;

    /**
     * Spacecraft design life in days.
     */
    designLife?: number;

    /**
     * Mass dry in kg.
     */
    dryMass?: number;

    /**
     * Spacecraft expected life in days.
     */
    expectedLife?: number;

    /**
     * WGS84 longitude of the spacecraft’s latest GEO position, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian).
     */
    geoPosition?: number;

    /**
     * UUID of the parent Onorbit record, if available.
     */
    idOnOrbit?: string;

    /**
     * Seradata provided inclination in degrees.
     */
    inclination?: number;

    /**
     * Spacecraft total insurance losses as a fraction.
     */
    insuranceLossesTotal?: number;

    /**
     * Insurance notes for the spacecraft.
     */
    insuranceNotes?: string;

    /**
     * Insurance premium at launch in M USD.
     */
    insurancePremiumAtLaunch?: number;

    /**
     * Boolean indicating if the spacecraft insurancePremiumAtLaunch is estimated.
     */
    insurancePremiumAtLaunchEstimated?: boolean;

    /**
     * Boolean indicating if the spacecraft was insured at launch.
     */
    insuredAtLaunch?: boolean;

    /**
     * Insured value of spacecraft at launch in M USD.
     */
    insuredValueAtLaunch?: number;

    /**
     * Boolean indicating if the spacecraft insured value at launch is estimated.
     */
    insuredValueLaunchEstimated?: boolean;

    /**
     * Seradata international number.
     */
    intlNumber?: string;

    /**
     * Spacecraft latest latitude in degrees.
     */
    lat?: number;

    /**
     * Spacecraft launch arranger.
     */
    launchArranger?: string;

    /**
     * Spacecraft launch arranger country.
     */
    launchArrangerCountry?: string;

    /**
     * Seradata launch characteristic (e.g. Expendable, Reusable (New), etc).
     */
    launchCharacteristic?: string;

    /**
     * Cost of launch in M USD.
     */
    launchCost?: number;

    /**
     * Boolean indicating if the spacecraft launch cost is estimated.
     */
    launchCostEstimated?: boolean;

    /**
     * Seradata launch country.
     */
    launchCountry?: string;

    /**
     * Launch date.
     */
    launchDate?: string;

    /**
     * Seradata remarks on launch date.
     */
    launchDateRemarks?: string;

    /**
     * Seradata launch ID.
     */
    launchId?: string;

    /**
     * Mass at launch in kg.
     */
    launchMass?: number;

    /**
     * Insurance notes for the spacecraft.
     */
    launchNotes?: string;

    /**
     * Seradata launch number.
     */
    launchNumber?: string;

    /**
     * Seradata launch provider.
     */
    launchProvider?: string;

    /**
     * Seradata launch provider country.
     */
    launchProviderCountry?: string;

    /**
     * Seradata launch vehicle family.
     */
    launchProviderFlightNumber?: string;

    /**
     * Seradata Launch Site ID.
     */
    launchSiteId?: string;

    /**
     * Launch Site Name.
     */
    launchSiteName?: string;

    /**
     * Seradata launch type (e.g. Launched, Future, etc).
     */
    launchType?: string;

    /**
     * Seradata launch ID.
     */
    launchVehicleId?: string;

    /**
     * Boolean indicating if the spacecraft was leased.
     */
    leased?: boolean;

    /**
     * Spacecraft life lost as a percent fraction.
     */
    lifeLost?: number;

    /**
     * Spacecraft latest longitude in degrees.
     */
    lon?: number;

    /**
     * Mass category (e.g. 2500 - 3500kg - Large Satellite, 10 - 100 kg -
     * Microsatellite, etc).
     */
    massCategory?: string;

    /**
     * Spacecraft name at launch.
     */
    nameAtLaunch?: string;

    /**
     * Cost of spacecraft at new in M USD.
     */
    newCost?: number;

    /**
     * Notes on the spacecraft.
     */
    notes?: string;

    /**
     * Number of humans carried on spacecraft.
     */
    numHumans?: number;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: SeradataSpacecraftDetailTupleResponseItem.OnOrbit;

    /**
     * Spacecraft operator name.
     */
    operator?: string;

    /**
     * Spacecraft operator country.
     */
    operatorCountry?: string;

    /**
     * Spacecraft orbit category (e.g GEO, LEO, etc).
     */
    orbitCategory?: string;

    /**
     * Spacecraft sub orbit category (e.g LEO - Sun-synchronous, Geostationary, etc).
     */
    orbitSubCategory?: string;

    /**
     * Spacecraft order date.
     */
    orderDate?: string;

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
     * Spacecraft owner name.
     */
    owner?: string;

    /**
     * Spacecraft owner country.
     */
    ownerCountry?: string;

    /**
     * Perigee in km.
     */
    perigee?: number;

    /**
     * Spacecraft period in minutes.
     */
    period?: number;

    /**
     * Spacecraft primary mission and group.
     */
    primaryMissionGroup?: string;

    /**
     * UUID of the prime manufacturer organization, if available.
     */
    primeManufacturerOrgId?: string;

    /**
     * Spacecraft program name.
     */
    programName?: string;

    /**
     * Spacecraft quantity.
     */
    quantity?: number;

    /**
     * Spacecraft reusable flights.
     */
    reusableFlights?: string;

    /**
     * Spacecraft reused hull name.
     */
    reusedHullName?: string;

    /**
     * Read-only details of the Scientific object, only used during detail queries (not
     * to be provided on create/update operations).
     */
    scientific?: Array<SeradataSpacecraftDetailTupleResponseItem.Scientific>;

    /**
     * Seradata sector (e.g. Commercial, Military, Civil/Other).
     */
    sector?: string;

    /**
     * Read-only details of the SeradataCommDetails object, only used during detail
     * queries (not to be provided on create/update operations).
     */
    seradataCommDetails?: Array<SeradataSpacecraftDetailTupleResponseItem.SeradataCommDetail>;

    /**
     * Read-only details of the SeradataEarlyWarning object, only used during detail
     * queries (not to be provided on create/update operations).
     */
    seradataEarlyWarning?: Array<SeradataSpacecraftDetailTupleResponseItem.SeradataEarlyWarning>;

    /**
     * Read-only details of the SeradataNavigation object, only used during detail
     * queries (not to be provided on create/update operations).
     */
    seradataNavigation?: Array<SeradataSpacecraftDetailTupleResponseItem.SeradataNavigation>;

    /**
     * Read-only details of the SeradataOpticalPayload object, only used during detail
     * queries (not to be provided on create/update operations).
     */
    seradataOpticalPayload?: Array<SeradataSpacecraftDetailTupleResponseItem.SeradataOpticalPayload>;

    /**
     * Read-only details of the SeradataRadarPayload object, only used during detail
     * queries (not to be provided on create/update operations).
     */
    seradataRadarPayload?: Array<SeradataSpacecraftDetailTupleResponseItem.SeradataRadarPayload>;

    /**
     * Read-only details of the SeradataSigIntPayload object, only used during detail
     * queries (not to be provided on create/update operations).
     */
    seradataSigIntPayload?: Array<SeradataSpacecraftDetailTupleResponseItem.SeradataSigIntPayload>;

    /**
     * Spacecraft serial number.
     */
    serialNumber?: string;

    /**
     * Spacecraft stabilizer (e.g. 3-Axis, Gravity Gradiant, etc).
     */
    stabilizer?: string;

    /**
     * Spacecraft status (e.g. Inactive - Retired, Inactive - Re-entered, Active, etc).
     */
    status?: string;

    /**
     * Number of insurance claims for this spacecraft.
     */
    totalClaims?: number;

    /**
     * Number of fatalities related to this spacecraft.
     */
    totalFatalities?: number;

    /**
     * Number of injuries related to this spacecraft.
     */
    totalInjuries?: number;

    /**
     * Mass dry in kg.
     */
    totalPayloadPower?: number;

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
     * Youtube link of launch.
     */
    youtubeLaunchLink?: string;
  }

  export namespace SeradataSpacecraftDetailTupleResponseItem {
    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    export interface OnOrbit {
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
       * Satellite/Catalog number of the target on-orbit object.
       */
      satNo: number;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Alternate name of the on-orbit object.
       */
      altName?: string;

      /**
       * Read-only collection of antennas on this on-orbit object.
       */
      antennas?: Array<OnOrbit.Antenna>;

      /**
       * Read-only collection of batteries on this on-orbit object.
       */
      batteries?: Array<OnOrbit.Battery>;

      /**
       * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
       * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
       * Heliocentric, Interplanetary, Lagrangian, Docked).
       */
      category?:
        | 'Unknown'
        | 'On-Orbit'
        | 'Decayed'
        | 'Cataloged Without State'
        | 'Launch Nominal'
        | 'Analyst Satellite'
        | 'Cislunar'
        | 'Lunar'
        | 'Hyperbolic'
        | 'Heliocentric'
        | 'Interplanetary'
        | 'Lagrangian'
        | 'Docked';

      /**
       * Common name of the on-orbit object.
       */
      commonName?: string;

      /**
       * Constellation to which this satellite belongs.
       */
      constellation?: string;

      /**
       * The country code. This value is typically the ISO 3166 Alpha-2 two-character
       * country code, however it can also represent various consortiums that do not
       * appear in the ISO document. The code must correspond to an existing country in
       * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
       * ISO Alpha-3 code, or alternate code values that exist for the specified country
       * code.
       */
      countryCode?: string;

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
       * Date of decay.
       */
      decayDate?: string;

      /**
       * For the public catalog, the idOnOrbit is typically the satellite number as a
       * string, but may be a UUID for analyst or other unknown or untracked satellites,
       * auto-generated by the system.
       */
      idOnOrbit?: string;

      /**
       * International Designator, typically of the format YYYYLLLAAA, where YYYY is the
       * launch year, LLL is the sequential launch number of that year, and AAA is an
       * optional launch piece designator for the launch.
       */
      intlDes?: string;

      /**
       * Date of launch.
       */
      launchDate?: string;

      /**
       * Id of the associated launchSite entity.
       */
      launchSiteId?: string;

      /**
       * Estimated lifetime of the on-orbit payload, if known.
       */
      lifetimeYears?: number;

      /**
       * Mission number of the on-orbit object.
       */
      missionNumber?: string;

      /**
       * Type of on-orbit object: ROCKET BODY, DEBRIS, PAYLOAD, PLATFORM, MANNED,
       * UNKNOWN.
       */
      objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

      /**
       * Read-only collection of details for this on-orbit object.
       */
      onorbitDetails?: Array<OnOrbit.OnorbitDetail>;

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
       * Read-only collection of solar arrays on this on-orbit object.
       */
      solarArrays?: Array<OnOrbit.SolarArray>;

      /**
       * Read-only collection of thrusters (engines) on this on-orbit object.
       */
      thrusters?: Array<OnOrbit.Thruster>;

      /**
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }

    export namespace OnOrbit {
      export interface Antenna {
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
         * ID of the antenna.
         */
        idAntenna: string;

        /**
         * ID of the on-orbit object.
         */
        idOnOrbit: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Unique identifier of the record, auto-generated by the system.
         */
        id?: string;

        /**
         * Model representation of information on on-orbit/spacecraft communication
         * antennas. A spacecraft may have multiple antennas and each antenna can have
         * multiple 'details' records compiled by different sources.
         */
        antenna?: AntennasAPI.AntennaFull;

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
         * Time the row was last updated in the database, auto-populated by the system.
         */
        updatedAt?: string;

        /**
         * Application user who updated the row in the database, auto-populated by the
         * system.
         */
        updatedBy?: string;
      }

      export interface Battery {
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
         * ID of the battery.
         */
        idBattery: string;

        /**
         * ID of the on-orbit object.
         */
        idOnOrbit: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Unique identifier of the record, auto-generated by the system.
         */
        id?: string;

        /**
         * Model representation of specific spacecraft battery types.
         */
        battery?: BatteriesAPI.BatteryFull;

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
         * The number of batteries on the spacecraft of the type identified by idBattery.
         */
        quantity?: number;

        /**
         * Time the row was last updated in the database, auto-populated by the system.
         */
        updatedAt?: string;

        /**
         * Application user who updated the row in the database, auto-populated by the
         * system.
         */
        updatedBy?: string;
      }

      /**
       * Contains details of the OnOrbit object.
       */
      export interface OnorbitDetail {
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
         * UUID of the parent Onorbit record.
         */
        idOnOrbit: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Unique identifier of the record, auto-generated by the system.
         */
        id?: string;

        /**
         * Mass of fuel and disposables at launch time in kilograms.
         */
        additionalMass?: number;

        /**
         * The radius used for long-term debris environment projection analyses that is not
         * as conservative as COLA Radius, in meters.
         */
        adeptRadius?: number;

        /**
         * The total beginning of life delta V of the spacecraft, in meters per second.
         */
        bolDeltaV?: number;

        /**
         * Spacecraft beginning of life fuel mass, in orbit, in kilograms.
         */
        bolFuelMass?: number;

        /**
         * Average cross sectional area of the bus in meters squared.
         */
        busCrossSection?: number;

        /**
         * Type of the bus on the spacecraft.
         */
        busType?: string;

        /**
         * Maximum dimension of the box circumscribing the spacecraft (d = sqrt(a*a + b*b +
         * c\*c) where a is the tip-to-tip dimension, b and c are perpendicular to that.)
         * in meters.
         */
        colaRadius?: number;

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
         * Average cross sectional area in meters squared.
         */
        crossSection?: number;

        /**
         * The estimated total current mass of the spacecraft, in kilograms.
         */
        currentMass?: number;

        /**
         * The 1-sigma uncertainty of the total spacecraft delta V, in meters per second.
         */
        deltaVUnc?: number;

        /**
         * Array of the estimated mass of each deployable object, in kilograms. Must
         * contain the same number of elements as the value of numDeployable.
         */
        depEstMasses?: Array<number>;

        /**
         * Array of the 1-sigma uncertainty of the mass for each deployable object, in
         * kilograms. Must contain the same number of elements as the value of
         * numDeployable.
         */
        depMassUncs?: Array<number>;

        /**
         * Array of satellite deployable objects. Must contain the same number of elements
         * as the value of numDeployable.
         */
        depNames?: Array<string>;

        /**
         * GEO drift rate, if applicable in degrees per day.
         */
        driftRate?: number;

        /**
         * Spacecraft dry mass (without fuel or disposables) in kilograms.
         */
        dryMass?: number;

        /**
         * Estimated maximum burn duration for the object, in seconds.
         */
        estDeltaVDuration?: number;

        /**
         * Estimated remaining fuel for the object in kilograms.
         */
        fuelRemaining?: number;

        /**
         * GEO slot if applicable, in degrees. -180 (West of Prime Meridian) to 180 degrees
         * (East of Prime Meridian). Prime Meridian is 0.
         */
        geoSlot?: number;

        /**
         * The name of the source who last provided an observation for this idOnOrbit.
         */
        lastObSource?: string;

        /**
         * Time of last reported observation for this object in ISO 8601 UTC with
         * microsecond precision.
         */
        lastObTime?: string;

        /**
         * Nominal mass of spacecraft and fuel at launch time, in kilograms.
         */
        launchMass?: number;

        /**
         * Maximum (estimated) mass of spacecraft and fuel at launch time, in kilograms.
         */
        launchMassMax?: number;

        /**
         * Minimum (estimated) mass of spacecraft and fuel at launch time, in kilograms.
         */
        launchMassMin?: number;

        /**
         * Boolean indicating whether a spacecraft is maneuverable. Note that a spacecraft
         * may have propulsion capability but may not be maneuverable due to lack of fuel,
         * anomalous condition, or other operational constraints.
         */
        maneuverable?: boolean;

        /**
         * Maximum delta V available for this on-orbit spacecraft, in meters per second.
         */
        maxDeltaV?: number;

        /**
         * Maximum dimension across the spacecraft (e.g., tip-to-tip across the solar panel
         * arrays) in meters.
         */
        maxRadius?: number;

        /**
         * Array of the type of missions the spacecraft performs. Must contain the same
         * number of elements as the value of numMission.
         */
        missionTypes?: Array<string>;

        /**
         * The number of sub-satellites or deployable objects on the spacecraft.
         */
        numDeployable?: number;

        /**
         * The number of distinct missions the spacecraft performs.
         */
        numMission?: number;

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
         * Current/latest radar cross section in meters squared.
         */
        rcs?: number;

        /**
         * Maximum radar cross section in meters squared.
         */
        rcsMax?: number;

        /**
         * Mean radar cross section in meters squared.
         */
        rcsMean?: number;

        /**
         * Minimum radar cross section in meters squared.
         */
        rcsMin?: number;

        /**
         * The reference source, sources, or URL from which the data in this record was
         * obtained.
         */
        refSource?: string;

        /**
         * Spacecraft deployed area of solar array in meters squared.
         */
        solarArrayArea?: number;

        /**
         * The 1-sigma uncertainty of the total spacecraft mass, in kilograms.
         */
        totalMassUnc?: number;

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
         * Current/latest visual magnitude in M.
         */
        vismag?: number;

        /**
         * Maximum visual magnitude in M.
         */
        vismagMax?: number;

        /**
         * Mean visual magnitude in M.
         */
        vismagMean?: number;

        /**
         * Minimum visual magnitude in M.
         */
        vismagMin?: number;
      }

      export interface SolarArray {
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
         * ID of the on-orbit object.
         */
        idOnOrbit: string;

        /**
         * ID of the SolarArray.
         */
        idSolarArray: string;

        /**
         * Source of the data.
         */
        source: string;

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
         * The number of solar arrays on the spacecraft of the type identified by
         * idSolarArray.
         */
        quantity?: number;

        /**
         * Model representation of information on on-orbit/spacecraft solar arrays. A
         * spacecraft may have multiple solar arrays and each solar array can have multiple
         * 'details' records compiled by different sources.
         */
        solarArray?: SolarArray.SolarArray;

        /**
         * Time the row was last updated in the database, auto-populated by the system.
         */
        updatedAt?: string;

        /**
         * Application user who updated the row in the database, auto-populated by the
         * system.
         */
        updatedBy?: string;
      }

      export namespace SolarArray {
        /**
         * Model representation of information on on-orbit/spacecraft solar arrays. A
         * spacecraft may have multiple solar arrays and each solar array can have multiple
         * 'details' records compiled by different sources.
         */
        export interface SolarArray {
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
           * Solar Array name.
           */
          name: string;

          /**
           * Source of the data.
           */
          source: string;

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
           * Read-only collection of additional SolarArrayDetails by various sources for this
           * organization, ignored on create/update. These details must be created separately
           * via the /udl/solararraydetails operations.
           */
          solarArrayDetails?: Array<SolarArrayDetailsAPI.SolarArrayDetailsFull>;

          /**
           * Time the row was last updated in the database, auto-populated by the system.
           */
          updatedAt?: string;

          /**
           * Application user who updated the row in the database, auto-populated by the
           * system.
           */
          updatedBy?: string;
        }
      }

      export interface Thruster {
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
         * ID of the Engine.
         */
        idEngine: string;

        /**
         * ID of the on-orbit object.
         */
        idOnOrbit: string;

        /**
         * Source of the data.
         */
        source: string;

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
         * Known launch vehicle engines and their performance characteristics and limits. A
         * launch vehicle has 1 to many engines per stage.
         */
        engine?: EnginesAPI.Engine;

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
         * The number of engines/thrusters on the spacecraft of the type identified by
         * idEngine.
         */
        quantity?: number;

        /**
         * The type of thruster associated with this record (e.g. LAE, Hydrazine REA,
         * etc.).
         */
        type?: string;

        /**
         * Time the row was last updated in the database, auto-populated by the system.
         */
        updatedAt?: string;

        /**
         * Application user who updated the row in the database, auto-populated by the
         * system.
         */
        updatedBy?: string;
      }
    }

    /**
     * Scientific or other data from Seradata.
     */
    export interface Scientific {
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
       * Sensor name from sera data, e.g. SEM/MAG (SEM / Magnetometer).
       */
      name: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
       */
      spacecraftId: string;

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
       * An entity is a generic representation of any object within a space/SSA system
       * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
       * entity can have an operating unit, a location (if terrestrial), and statuses.
       */
      entity?: EntitiesAPI.EntityFull;

      /**
       * Frequency band, e.g. Gamma.
       */
      frequencyBand?: string;

      /**
       * Hosted for company/Organization Id.
       */
      hostedForCompanyOrgId?: string;

      /**
       * ID of the parent entity for this Scientific.
       */
      idEntity?: string;

      /**
       * Unique identifier of the organization which manufactures this bus.
       */
      manufacturerOrgId?: string;

      /**
       * Notes associated with the payload.
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
       * Payload category, e.g. Magnetometer, Radiometer, Sensor, etc.
       */
      payloadCategory?: string;

      /**
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }

    /**
     * Seradata-compiled information on communications payloads.
     */
    export interface SeradataCommDetail {
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
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Name of the band of this RF range (e.g.
       * X,K,Ku,Ka,L,S,C,UHF,VHF,EHF,SHF,UNK,VLF,HF,E,Q,V,W). See RFBandType for more
       * details and descriptions of each band name.
       */
      band?: string;

      /**
       * Comm bandwidth in Mhz.
       */
      bandwidth?: number;

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
       * Effective isotropic radiated power in dB.
       */
      eirp?: number;

      /**
       * Comm estimated HtsTotalCapacity in Gbps.
       */
      estHtsTotalCapacity?: number;

      /**
       * Comm estimated HtsTotalUserDownlinkBandwidthPerBeam in Mhz.
       */
      estHtsTotalUserDownlinkBandwidthPerBeam?: number;

      /**
       * Comm estimated HtsTotalUserUplinkBandwidthPerBeam in Mhz.
       */
      estHtsTotalUserUplinkBandwidthPerBeam?: number;

      /**
       * Comm gatewayDownlinkFrom in Ghz.
       */
      gatewayDownlinkFrom?: number;

      /**
       * Comm gatewayDownlinkTo in Ghz.
       */
      gatewayDownlinkTo?: number;

      /**
       * Comm gatewayUplinkFrom in Ghz.
       */
      gatewayUplinkFrom?: number;

      /**
       * Comm gatewayUplinkTo in Ghz.
       */
      gatewayUplinkTo?: number;

      /**
       * Comm hostedForCompanyOrgId.
       */
      hostedForCompanyOrgId?: string;

      /**
       * Comm htsNumUserSpotBeams.
       */
      htsNumUserSpotBeams?: number;

      /**
       * Comm htsUserDownlinkBandwidthPerBeam in Mhz.
       */
      htsUserDownlinkBandwidthPerBeam?: number;

      /**
       * Comm htsUserUplinkBandwidthPerBeam in Mhz.
       */
      htsUserUplinkBandwidthPerBeam?: number;

      /**
       * UUID of the parent Comm record.
       */
      idComm?: string;

      /**
       * Comm manufacturerOrgId.
       */
      manufacturerOrgId?: string;

      /**
       * Comm num36MhzEquivalentTransponders.
       */
      num36MhzEquivalentTransponders?: number;

      /**
       * Comm numOperationalTransponders.
       */
      numOperationalTransponders?: number;

      /**
       * Comm numSpareTransponders.
       */
      numSpareTransponders?: number;

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
       * Payload notes.
       */
      payloadNotes?: string;

      /**
       * Comm polarization.
       */
      polarization?: string;

      /**
       * Solid state power amplifier, in Watts.
       */
      solidStatePowerAmp?: number;

      /**
       * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
       */
      spacecraftId?: string;

      /**
       * Comm tradeLeaseOrgId.
       */
      tradeLeaseOrgId?: string;

      /**
       * Comm travelingWaveTubeAmplifier in Watts.
       */
      travelingWaveTubeAmplifier?: number;

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
       * Comm userDownlinkFrom in Ghz.
       */
      userDownlinkFrom?: number;

      /**
       * Comm userDownlinkTo in Ghz.
       */
      userDownlinkTo?: number;

      /**
       * Comm userUplinkFrom in Ghz.
       */
      userUplinkFrom?: number;

      /**
       * Comm userUplinkTo in Ghz.
       */
      userUplinkTo?: number;
    }

    /**
     * Details for an early warning payload from Seradata.
     */
    export interface SeradataEarlyWarning {
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
       * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
       */
      spacecraftId: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Best resolution for this IR in meters.
       */
      bestResolution?: number;

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
       * Is the sensor Earth Pointing.
       */
      earthPointing?: boolean;

      /**
       * Frequency Limits for this IR.
       */
      frequencyLimits?: string;

      /**
       * Ground Station Locations for this IR.
       */
      groundStationLocations?: string;

      /**
       * Ground Station info for this IR.
       */
      groundStations?: string;

      /**
       * Hosted for company/Organization Id.
       */
      hostedForCompanyOrgId?: string;

      /**
       * UUID of the parent IR record.
       */
      idIR?: string;

      /**
       * Manufacturer Organization Id.
       */
      manufacturerOrgId?: string;

      /**
       * Missile Launch Phase Detection Ability.
       */
      missileLaunchPhaseDetectionAbility?: string;

      /**
       * Sensor name from Seradata, e.g. Infra red telescope, Schmidt Telescope, etc.
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
       * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
       */
      partnerSpacecraftId?: string;

      /**
       * Payload notes.
       */
      payloadNotes?: string;

      /**
       * Spectral Bands, e.g. Infra-Red.
       */
      spectralBands?: string;

      /**
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }

    /**
     * Details for a navigation payload from Seradata.
     */
    export interface SeradataNavigation {
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
       * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
       */
      spacecraftId: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Area of coverage, e.g. Worldwide, India, etc.
       */
      areaCoverage?: string;

      /**
       * Type of clock, e.g. Rubidium, Hydrogen Maser, etc.
       */
      clockType?: string;

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
       * Hosted for company/Organization Id.
       */
      hostedForCompanyOrgId?: string;

      /**
       * UUID of the parent Navigation record.
       */
      idNavigation?: string;

      /**
       * Location accuracy in meters.
       */
      locationAccuracy?: number;

      /**
       * Manufacturer Organization Id.
       */
      manufacturerOrgId?: string;

      /**
       * Frequency for this payload.
       */
      modeFrequency?: string;

      /**
       * Modes of operation.
       */
      modes?: string;

      /**
       * Sensor name from Seradata, e.g. WAAS GEO-5, etc.
       */
      name?: string;

      /**
       * Payload notes.
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
       * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
       */
      partnerSpacecraftId?: string;

      /**
       * Navigation payload type, e.g. WAAS, GAGAN, etc.
       */
      payloadType?: string;

      /**
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }

    /**
     * Details for an optical payload from Seradata.
     */
    export interface SeradataOpticalPayload {
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
       * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
       */
      spacecraftId: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Best resolution.
       */
      bestResolution?: number;

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
       * Field of regard of this radar in degrees.
       */
      fieldOfRegard?: number;

      /**
       * Field of view of this radar in kilometers.
       */
      fieldOfView?: number;

      /**
       * Ground Station Locations for this payload.
       */
      groundStationLocations?: string;

      /**
       * Ground Station info for this payload.
       */
      groundStations?: string;

      /**
       * Hosted for company/Organization Id.
       */
      hostedForCompanyOrgId?: string;

      /**
       * UUID of the Sensor record.
       */
      idSensor?: string;

      /**
       * Imaging category for this payload, e.g. Multispectral, Infrared, Panchromatic.
       */
      imagingPayloadCategory?: string;

      /**
       * Manufacturer Organization Id.
       */
      manufacturerOrgId?: string;

      /**
       * Sensor name from Seradata, e.g. TOURNESOL, MESSR (Multispectral Self-Scanning
       * Radiometer), AWFI, etc.
       */
      name?: string;

      /**
       * Payload notes.
       */
      notes?: string;

      /**
       * Number of film return canisters.
       */
      numberOfFilmReturnCanisters?: number;

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
       * Point method for this radar, e.g. Spacecraft.
       */
      pointingMethod?: string;

      /**
       * Recorder size.
       */
      recorderSize?: string;

      /**
       * Spectral Band supported by this payload, e.g. Green, Red, Mid-wave infrared,
       * etc.
       */
      spectralBand?: string;

      /**
       * Frequency limit for this payload, e.g. 0.51 - 0.59.
       */
      spectralFrequencyLimits?: string;

      /**
       * Swath width in kilometers.
       */
      swathWidth?: number;

      /**
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }

    /**
     * Details for an radar payload from Seradata.
     */
    export interface SeradataRadarPayload {
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
       * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
       */
      spacecraftId: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * Radar bandwidth in mega hertz.
       */
      bandwidth?: number;

      /**
       * Best resolution in meters.
       */
      bestResolution?: number;

      /**
       * Radar category, e.g. SAR, Surface Search, etc.
       */
      category?: string;

      /**
       * Constellation interferometric capability.
       */
      constellationInterferometricCapability?: string;

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
       * Duty cycle.
       */
      dutyCycle?: string;

      /**
       * Field of regard of this radar in degrees.
       */
      fieldOfRegard?: number;

      /**
       * Field of view of this radar in kilometers.
       */
      fieldOfView?: number;

      /**
       * Frequency in giga hertz.
       */
      frequency?: number;

      /**
       * Name of the band of this RF range (e.g.
       * X,K,Ku,Ka,L,S,C,UHF,VHF,EHF,SHF,UNK,VLF,HF,E,Q,V,W). See RFBandType for more
       * details and descriptions of each band name.
       */
      frequencyBand?: string;

      /**
       * Ground Station Locations for this payload.
       */
      groundStationLocations?: string;

      /**
       * Ground Station info for this payload.
       */
      groundStations?: string;

      /**
       * Hosted for company/Organization Id.
       */
      hostedForCompanyOrgId?: string;

      /**
       * UUID of the Sensor record.
       */
      idSensor?: string;

      /**
       * Manufacturer Organization Id.
       */
      manufacturerOrgId?: string;

      /**
       * Sensor name from Seradata, e.g. ALT (Radar Altimeter), COSI (Corea SAR
       * Instrument), etc.
       */
      name?: string;

      /**
       * Payload notes.
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
       * Partner seradata-spacecraft.
       */
      partnerSpacecraft?: string;

      /**
       * Point method for this radar, e.g. Spacecraft.
       */
      pointingMethod?: string;

      /**
       * Receive polarization, e.g. Lin Dual, Lin vert, etc.
       */
      receivePolarization?: string;

      /**
       * Recorder size, e.g. 256.
       */
      recorderSize?: string;

      /**
       * Swath width in kilometers.
       */
      swathWidth?: number;

      /**
       * Transmit polarization, e.g. Lin Dual, Lin vert, etc.
       */
      transmitPolarization?: string;

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
       * Wave length in meters.
       */
      waveLength?: number;
    }

    /**
     * Details for an sigint payload from Seradata.
     */
    export interface SeradataSigIntPayload {
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
       * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
       */
      spacecraftId: string;

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
       * Frequency coverage for this payload.
       */
      frequencyCoverage?: string;

      /**
       * Ground Station Locations for this payload.
       */
      groundStationLocations?: string;

      /**
       * Ground Station info for this payload.
       */
      groundStations?: string;

      /**
       * Hosted for company/Organization Id.
       */
      hostedForCompanyOrgId?: string;

      /**
       * UUID of the Sensor record.
       */
      idSensor?: string;

      /**
       * Intercept parameters.
       */
      interceptParameters?: string;

      /**
       * Manufacturer Organization Id.
       */
      manufacturerOrgId?: string;

      /**
       * Sensor name from Seradata.
       */
      name?: string;

      /**
       * Payload notes.
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
       * Positional Accuracy for this payload.
       */
      positionalAccuracy?: string;

      /**
       * Swath Width in kilometers.
       */
      swathWidth?: number;

      /**
       * SIGINT Payload type, e.g. Comint, Elint, etc.
       */
      type?: string;

      /**
       * Time the row was last updated in the database, auto-populated by the system.
       */
      updatedAt?: string;

      /**
       * Application user who updated the row in the database, auto-populated by the
       * system.
       */
      updatedBy?: string;
    }
  }
}

export interface SeradataSpacecraftDetailCreateParams {
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
   * Spacecraft name.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Spacecraft additional missions and groups.
   */
  additionalMissionsGroups?: string;

  /**
   * Spacecraft latest altitude in km.
   */
  altitude?: number;

  /**
   * Annual insured depreciaion factor as a percent fraction.
   */
  annualInsuredDepreciationFactor?: number;

  /**
   * Boolean indicating if the spacecraft annualInsuredDepreciationFactor is
   * estimated.
   */
  annualInsuredDepreciationFactorEstimated?: boolean;

  /**
   * Apogee in km.
   */
  apogee?: number;

  /**
   * Spacecraft Bus ID.
   */
  busId?: string;

  /**
   * Total capability lost as a percent fraction.
   */
  capabilityLost?: number;

  /**
   * Total capacity lost as a percent fraction.
   */
  capacityLost?: number;

  /**
   * NORAD satellite number if available.
   */
  catalogNumber?: number;

  /**
   * Spacecraft collision risk 1cm sqm latest.
   */
  collisionRiskCM?: number;

  /**
   * Spacecraft collision risk 1mm sqm latest.
   */
  collisionRiskMM?: number;

  /**
   * Boolean indicating if the spacecraft combined new cost is estimated.
   */
  combinedCostEstimated?: boolean;

  /**
   * Combined cost of spacecraft at new in M USD.
   */
  combinedNewCost?: number;

  /**
   * Boolean indicating if the launch was commercial.
   */
  commercialLaunch?: boolean;

  /**
   * Spacecraft constellation.
   */
  constellation?: string;

  /**
   * Boolean indicating if the spacecraft cost is estimated.
   */
  costEstimated?: boolean;

  /**
   * Cubesat dispenser type.
   */
  cubesatDispenserType?: string;

  /**
   * Current age in years.
   */
  currentAge?: number;

  /**
   * Spacecraft date of observation.
   */
  dateOfObservation?: string;

  /**
   * Description associated with the spacecraft.
   */
  description?: string;

  /**
   * Spacecraft design life in days.
   */
  designLife?: number;

  /**
   * Mass dry in kg.
   */
  dryMass?: number;

  /**
   * Spacecraft expected life in days.
   */
  expectedLife?: number;

  /**
   * WGS84 longitude of the spacecraft’s latest GEO position, in degrees. -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  geoPosition?: number;

  /**
   * UUID of the parent Onorbit record, if available.
   */
  idOnOrbit?: string;

  /**
   * Seradata provided inclination in degrees.
   */
  inclination?: number;

  /**
   * Spacecraft total insurance losses as a fraction.
   */
  insuranceLossesTotal?: number;

  /**
   * Insurance notes for the spacecraft.
   */
  insuranceNotes?: string;

  /**
   * Insurance premium at launch in M USD.
   */
  insurancePremiumAtLaunch?: number;

  /**
   * Boolean indicating if the spacecraft insurancePremiumAtLaunch is estimated.
   */
  insurancePremiumAtLaunchEstimated?: boolean;

  /**
   * Boolean indicating if the spacecraft was insured at launch.
   */
  insuredAtLaunch?: boolean;

  /**
   * Insured value of spacecraft at launch in M USD.
   */
  insuredValueAtLaunch?: number;

  /**
   * Boolean indicating if the spacecraft insured value at launch is estimated.
   */
  insuredValueLaunchEstimated?: boolean;

  /**
   * Seradata international number.
   */
  intlNumber?: string;

  /**
   * Spacecraft latest latitude in degrees.
   */
  lat?: number;

  /**
   * Spacecraft launch arranger.
   */
  launchArranger?: string;

  /**
   * Spacecraft launch arranger country.
   */
  launchArrangerCountry?: string;

  /**
   * Seradata launch characteristic (e.g. Expendable, Reusable (New), etc).
   */
  launchCharacteristic?: string;

  /**
   * Cost of launch in M USD.
   */
  launchCost?: number;

  /**
   * Boolean indicating if the spacecraft launch cost is estimated.
   */
  launchCostEstimated?: boolean;

  /**
   * Seradata launch country.
   */
  launchCountry?: string;

  /**
   * Launch date.
   */
  launchDate?: string;

  /**
   * Seradata remarks on launch date.
   */
  launchDateRemarks?: string;

  /**
   * Seradata launch ID.
   */
  launchId?: string;

  /**
   * Mass at launch in kg.
   */
  launchMass?: number;

  /**
   * Insurance notes for the spacecraft.
   */
  launchNotes?: string;

  /**
   * Seradata launch number.
   */
  launchNumber?: string;

  /**
   * Seradata launch provider.
   */
  launchProvider?: string;

  /**
   * Seradata launch provider country.
   */
  launchProviderCountry?: string;

  /**
   * Seradata launch vehicle family.
   */
  launchProviderFlightNumber?: string;

  /**
   * Seradata Launch Site ID.
   */
  launchSiteId?: string;

  /**
   * Launch Site Name.
   */
  launchSiteName?: string;

  /**
   * Seradata launch type (e.g. Launched, Future, etc).
   */
  launchType?: string;

  /**
   * Seradata launch ID.
   */
  launchVehicleId?: string;

  /**
   * Boolean indicating if the spacecraft was leased.
   */
  leased?: boolean;

  /**
   * Spacecraft life lost as a percent fraction.
   */
  lifeLost?: number;

  /**
   * Spacecraft latest longitude in degrees.
   */
  lon?: number;

  /**
   * Mass category (e.g. 2500 - 3500kg - Large Satellite, 10 - 100 kg -
   * Microsatellite, etc).
   */
  massCategory?: string;

  /**
   * Spacecraft name at launch.
   */
  nameAtLaunch?: string;

  /**
   * Cost of spacecraft at new in M USD.
   */
  newCost?: number;

  /**
   * Notes on the spacecraft.
   */
  notes?: string;

  /**
   * Number of humans carried on spacecraft.
   */
  numHumans?: number;

  /**
   * Spacecraft operator name.
   */
  operator?: string;

  /**
   * Spacecraft operator country.
   */
  operatorCountry?: string;

  /**
   * Spacecraft orbit category (e.g GEO, LEO, etc).
   */
  orbitCategory?: string;

  /**
   * Spacecraft sub orbit category (e.g LEO - Sun-synchronous, Geostationary, etc).
   */
  orbitSubCategory?: string;

  /**
   * Spacecraft order date.
   */
  orderDate?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Spacecraft owner name.
   */
  owner?: string;

  /**
   * Spacecraft owner country.
   */
  ownerCountry?: string;

  /**
   * Perigee in km.
   */
  perigee?: number;

  /**
   * Spacecraft period in minutes.
   */
  period?: number;

  /**
   * Spacecraft primary mission and group.
   */
  primaryMissionGroup?: string;

  /**
   * UUID of the prime manufacturer organization, if available.
   */
  primeManufacturerOrgId?: string;

  /**
   * Spacecraft program name.
   */
  programName?: string;

  /**
   * Spacecraft quantity.
   */
  quantity?: number;

  /**
   * Spacecraft reusable flights.
   */
  reusableFlights?: string;

  /**
   * Spacecraft reused hull name.
   */
  reusedHullName?: string;

  /**
   * Seradata sector (e.g. Commercial, Military, Civil/Other).
   */
  sector?: string;

  /**
   * Spacecraft serial number.
   */
  serialNumber?: string;

  /**
   * Spacecraft stabilizer (e.g. 3-Axis, Gravity Gradiant, etc).
   */
  stabilizer?: string;

  /**
   * Spacecraft status (e.g. Inactive - Retired, Inactive - Re-entered, Active, etc).
   */
  status?: string;

  /**
   * Number of insurance claims for this spacecraft.
   */
  totalClaims?: number;

  /**
   * Number of fatalities related to this spacecraft.
   */
  totalFatalities?: number;

  /**
   * Number of injuries related to this spacecraft.
   */
  totalInjuries?: number;

  /**
   * Mass dry in kg.
   */
  totalPayloadPower?: number;

  /**
   * Youtube link of launch.
   */
  youtubeLaunchLink?: string;
}

export interface SeradataSpacecraftDetailUpdateParams {
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
   * Spacecraft name.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Spacecraft additional missions and groups.
   */
  additionalMissionsGroups?: string;

  /**
   * Spacecraft latest altitude in km.
   */
  altitude?: number;

  /**
   * Annual insured depreciaion factor as a percent fraction.
   */
  annualInsuredDepreciationFactor?: number;

  /**
   * Boolean indicating if the spacecraft annualInsuredDepreciationFactor is
   * estimated.
   */
  annualInsuredDepreciationFactorEstimated?: boolean;

  /**
   * Apogee in km.
   */
  apogee?: number;

  /**
   * Spacecraft Bus ID.
   */
  busId?: string;

  /**
   * Total capability lost as a percent fraction.
   */
  capabilityLost?: number;

  /**
   * Total capacity lost as a percent fraction.
   */
  capacityLost?: number;

  /**
   * NORAD satellite number if available.
   */
  catalogNumber?: number;

  /**
   * Spacecraft collision risk 1cm sqm latest.
   */
  collisionRiskCM?: number;

  /**
   * Spacecraft collision risk 1mm sqm latest.
   */
  collisionRiskMM?: number;

  /**
   * Boolean indicating if the spacecraft combined new cost is estimated.
   */
  combinedCostEstimated?: boolean;

  /**
   * Combined cost of spacecraft at new in M USD.
   */
  combinedNewCost?: number;

  /**
   * Boolean indicating if the launch was commercial.
   */
  commercialLaunch?: boolean;

  /**
   * Spacecraft constellation.
   */
  constellation?: string;

  /**
   * Boolean indicating if the spacecraft cost is estimated.
   */
  costEstimated?: boolean;

  /**
   * Cubesat dispenser type.
   */
  cubesatDispenserType?: string;

  /**
   * Current age in years.
   */
  currentAge?: number;

  /**
   * Spacecraft date of observation.
   */
  dateOfObservation?: string;

  /**
   * Description associated with the spacecraft.
   */
  description?: string;

  /**
   * Spacecraft design life in days.
   */
  designLife?: number;

  /**
   * Mass dry in kg.
   */
  dryMass?: number;

  /**
   * Spacecraft expected life in days.
   */
  expectedLife?: number;

  /**
   * WGS84 longitude of the spacecraft’s latest GEO position, in degrees. -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  geoPosition?: number;

  /**
   * UUID of the parent Onorbit record, if available.
   */
  idOnOrbit?: string;

  /**
   * Seradata provided inclination in degrees.
   */
  inclination?: number;

  /**
   * Spacecraft total insurance losses as a fraction.
   */
  insuranceLossesTotal?: number;

  /**
   * Insurance notes for the spacecraft.
   */
  insuranceNotes?: string;

  /**
   * Insurance premium at launch in M USD.
   */
  insurancePremiumAtLaunch?: number;

  /**
   * Boolean indicating if the spacecraft insurancePremiumAtLaunch is estimated.
   */
  insurancePremiumAtLaunchEstimated?: boolean;

  /**
   * Boolean indicating if the spacecraft was insured at launch.
   */
  insuredAtLaunch?: boolean;

  /**
   * Insured value of spacecraft at launch in M USD.
   */
  insuredValueAtLaunch?: number;

  /**
   * Boolean indicating if the spacecraft insured value at launch is estimated.
   */
  insuredValueLaunchEstimated?: boolean;

  /**
   * Seradata international number.
   */
  intlNumber?: string;

  /**
   * Spacecraft latest latitude in degrees.
   */
  lat?: number;

  /**
   * Spacecraft launch arranger.
   */
  launchArranger?: string;

  /**
   * Spacecraft launch arranger country.
   */
  launchArrangerCountry?: string;

  /**
   * Seradata launch characteristic (e.g. Expendable, Reusable (New), etc).
   */
  launchCharacteristic?: string;

  /**
   * Cost of launch in M USD.
   */
  launchCost?: number;

  /**
   * Boolean indicating if the spacecraft launch cost is estimated.
   */
  launchCostEstimated?: boolean;

  /**
   * Seradata launch country.
   */
  launchCountry?: string;

  /**
   * Launch date.
   */
  launchDate?: string;

  /**
   * Seradata remarks on launch date.
   */
  launchDateRemarks?: string;

  /**
   * Seradata launch ID.
   */
  launchId?: string;

  /**
   * Mass at launch in kg.
   */
  launchMass?: number;

  /**
   * Insurance notes for the spacecraft.
   */
  launchNotes?: string;

  /**
   * Seradata launch number.
   */
  launchNumber?: string;

  /**
   * Seradata launch provider.
   */
  launchProvider?: string;

  /**
   * Seradata launch provider country.
   */
  launchProviderCountry?: string;

  /**
   * Seradata launch vehicle family.
   */
  launchProviderFlightNumber?: string;

  /**
   * Seradata Launch Site ID.
   */
  launchSiteId?: string;

  /**
   * Launch Site Name.
   */
  launchSiteName?: string;

  /**
   * Seradata launch type (e.g. Launched, Future, etc).
   */
  launchType?: string;

  /**
   * Seradata launch ID.
   */
  launchVehicleId?: string;

  /**
   * Boolean indicating if the spacecraft was leased.
   */
  leased?: boolean;

  /**
   * Spacecraft life lost as a percent fraction.
   */
  lifeLost?: number;

  /**
   * Spacecraft latest longitude in degrees.
   */
  lon?: number;

  /**
   * Mass category (e.g. 2500 - 3500kg - Large Satellite, 10 - 100 kg -
   * Microsatellite, etc).
   */
  massCategory?: string;

  /**
   * Spacecraft name at launch.
   */
  nameAtLaunch?: string;

  /**
   * Cost of spacecraft at new in M USD.
   */
  newCost?: number;

  /**
   * Notes on the spacecraft.
   */
  notes?: string;

  /**
   * Number of humans carried on spacecraft.
   */
  numHumans?: number;

  /**
   * Spacecraft operator name.
   */
  operator?: string;

  /**
   * Spacecraft operator country.
   */
  operatorCountry?: string;

  /**
   * Spacecraft orbit category (e.g GEO, LEO, etc).
   */
  orbitCategory?: string;

  /**
   * Spacecraft sub orbit category (e.g LEO - Sun-synchronous, Geostationary, etc).
   */
  orbitSubCategory?: string;

  /**
   * Spacecraft order date.
   */
  orderDate?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Spacecraft owner name.
   */
  owner?: string;

  /**
   * Spacecraft owner country.
   */
  ownerCountry?: string;

  /**
   * Perigee in km.
   */
  perigee?: number;

  /**
   * Spacecraft period in minutes.
   */
  period?: number;

  /**
   * Spacecraft primary mission and group.
   */
  primaryMissionGroup?: string;

  /**
   * UUID of the prime manufacturer organization, if available.
   */
  primeManufacturerOrgId?: string;

  /**
   * Spacecraft program name.
   */
  programName?: string;

  /**
   * Spacecraft quantity.
   */
  quantity?: number;

  /**
   * Spacecraft reusable flights.
   */
  reusableFlights?: string;

  /**
   * Spacecraft reused hull name.
   */
  reusedHullName?: string;

  /**
   * Seradata sector (e.g. Commercial, Military, Civil/Other).
   */
  sector?: string;

  /**
   * Spacecraft serial number.
   */
  serialNumber?: string;

  /**
   * Spacecraft stabilizer (e.g. 3-Axis, Gravity Gradiant, etc).
   */
  stabilizer?: string;

  /**
   * Spacecraft status (e.g. Inactive - Retired, Inactive - Re-entered, Active, etc).
   */
  status?: string;

  /**
   * Number of insurance claims for this spacecraft.
   */
  totalClaims?: number;

  /**
   * Number of fatalities related to this spacecraft.
   */
  totalFatalities?: number;

  /**
   * Number of injuries related to this spacecraft.
   */
  totalInjuries?: number;

  /**
   * Mass dry in kg.
   */
  totalPayloadPower?: number;

  /**
   * Youtube link of launch.
   */
  youtubeLaunchLink?: string;
}

export interface SeradataSpacecraftDetailListParams extends OffsetPageParams {}

export interface SeradataSpacecraftDetailCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeradataSpacecraftDetailGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeradataSpacecraftDetailTupleParams {
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

export declare namespace SeradataSpacecraftDetails {
  export {
    type SeradataSpacecraftDetailListResponse as SeradataSpacecraftDetailListResponse,
    type SeradataSpacecraftDetailCountResponse as SeradataSpacecraftDetailCountResponse,
    type SeradataSpacecraftDetailGetResponse as SeradataSpacecraftDetailGetResponse,
    type SeradataSpacecraftDetailTupleResponse as SeradataSpacecraftDetailTupleResponse,
    type SeradataSpacecraftDetailListResponsesOffsetPage as SeradataSpacecraftDetailListResponsesOffsetPage,
    type SeradataSpacecraftDetailCreateParams as SeradataSpacecraftDetailCreateParams,
    type SeradataSpacecraftDetailUpdateParams as SeradataSpacecraftDetailUpdateParams,
    type SeradataSpacecraftDetailListParams as SeradataSpacecraftDetailListParams,
    type SeradataSpacecraftDetailCountParams as SeradataSpacecraftDetailCountParams,
    type SeradataSpacecraftDetailGetParams as SeradataSpacecraftDetailGetParams,
    type SeradataSpacecraftDetailTupleParams as SeradataSpacecraftDetailTupleParams,
  };
}
