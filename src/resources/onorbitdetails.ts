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

export class Onorbitdetails extends APIResource {
  /**
   * Service operation to take a single OnorbitDetails as a POST body and ingest into
   * the database. An OnorbitDetails is a collection of additional characteristics on
   * an on-orbit object. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitdetails.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idOnOrbit: 'REF-ONORBIT-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: OnorbitdetailCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/onorbitdetails', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single OnorbitDetails. An OnorbitDetails is a
   * collection of additional characteristics on an on-orbit object. A specific role
   * is required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.onorbitdetails.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idOnOrbit: 'REF-ONORBIT-ID',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: OnorbitdetailUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/onorbitdetails/${pathID}`, {
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
   * for await (const onorbitdetailListResponse of client.onorbitdetails.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OnorbitdetailListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OnorbitdetailListResponsesOffsetPage, OnorbitdetailListResponse> {
    return this._client.getAPIList('/udl/onorbitdetails', OffsetPage<OnorbitdetailListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a OnorbitDetails object specified by the passed ID
   * path parameter. An OnorbitDetails is a collection of additional characteristics
   * on an on-orbit object. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.onorbitdetails.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/onorbitdetails/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single OnorbitDetails record by its unique ID passed
   * as a path parameter. An OnorbitDetails is a collection of additional
   * characteristics on an on-orbit object.
   *
   * @example
   * ```ts
   * const onorbitDetailsFull = await client.onorbitdetails.get(
   *   'id',
   * );
   * ```
   */
  get(
    id: string,
    query: OnorbitdetailGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.OnorbitDetailsFull> {
    return this._client.get(path`/udl/onorbitdetails/${id}`, { query, ...options });
  }
}

export type OnorbitdetailListResponsesOffsetPage = OffsetPage<OnorbitdetailListResponse>;

/**
 * Contains details of the OnOrbit object.
 */
export interface OnorbitdetailListResponse {
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

export interface OnorbitdetailCreateParams {
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

export interface OnorbitdetailUpdateParams {
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
  body_id?: string;

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

export interface OnorbitdetailListParams extends OffsetPageParams {}

export interface OnorbitdetailGetParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace Onorbitdetails {
  export {
    type OnorbitdetailListResponse as OnorbitdetailListResponse,
    type OnorbitdetailListResponsesOffsetPage as OnorbitdetailListResponsesOffsetPage,
    type OnorbitdetailCreateParams as OnorbitdetailCreateParams,
    type OnorbitdetailUpdateParams as OnorbitdetailUpdateParams,
    type OnorbitdetailListParams as OnorbitdetailListParams,
    type OnorbitdetailGetParams as OnorbitdetailGetParams,
  };
}
