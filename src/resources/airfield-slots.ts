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

export class AirfieldSlots extends APIResource {
  /**
   * Service operation to take a single airfieldslot record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.airfieldSlots.create({
   *   airfieldName: 'USAF Academy AFLD',
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'Apron 5',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: AirfieldSlotCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/airfieldslot', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single airfieldslot record by its unique ID passed as
   * a path parameter.
   *
   * @example
   * ```ts
   * const airfieldslotFull =
   *   await client.airfieldSlots.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: AirfieldSlotRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.AirfieldslotFull> {
    return this._client.get(path`/udl/airfieldslot/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single airfieldslot record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.airfieldSlots.update('id', {
   *   airfieldName: 'USAF Academy AFLD',
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'Apron 5',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: AirfieldSlotUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/airfieldslot/${pathID}`, {
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
   * for await (const airfieldslotAbridged of client.airfieldSlots.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AirfieldSlotListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AirfieldslotAbridgedsOffsetPage, AirfieldslotAbridged> {
    return this._client.getAPIList('/udl/airfieldslot', OffsetPage<AirfieldslotAbridged>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete an airfieldslot record specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.airfieldSlots.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/airfieldslot/${id}`, {
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
   * const response = await client.airfieldSlots.count();
   * ```
   */
  count(
    query: AirfieldSlotCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/airfieldslot/count', {
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
   * const response = await client.airfieldSlots.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<AirfieldSlotQueryhelpResponse> {
    return this._client.get('/udl/airfieldslot/queryhelp', options);
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
   * const airfieldslotFulls = await client.airfieldSlots.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: AirfieldSlotTupleParams, options?: RequestOptions): APIPromise<AirfieldSlotTupleResponse> {
    return this._client.get('/udl/airfieldslot/tuple', { query, ...options });
  }
}

export type AirfieldslotAbridgedsOffsetPage = OffsetPage<AirfieldslotAbridged>;

/**
 * Airfield capacity data. Contains data associated with the airfieldslots
 * available for parking, working, takeoff, and landing at the airfield, as well as
 * the types of aircraft that can be accommodated.
 */
export interface AirfieldslotAbridged {
  /**
   * The name of the airfield where this slot is located.
   */
  airfieldName: string;

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
   * Name of this slot.
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
   * Largest category of aircraft supported in this slot (WIDE, NARROW, HELO, ALL,
   * OTHER).
   */
  acSlotCat?: 'WIDE' | 'NARROW' | 'HELO' | 'ALL' | 'OTHER';

  /**
   * Alternate airfield identifier provided by the source.
   */
  altAirfieldId?: string;

  /**
   * Number of aircraft that can fit in this slot at the same time.
   */
  capacity?: number;

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
   * Latest zulu time this slot is available based on daily standard hours. Not
   * applicable to slots with type PARKING. Abnormal hours, such as holidays, should
   * be marked via the AirfieldSlotConsumption schema.
   */
  endTime?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of the airfield.
   */
  icao?: string;

  /**
   * Unique identifier of the Airfield for which this slot information applies.
   */
  idAirfield?: string;

  /**
   * Minimum time that must elapse between different aircraft leaving and entering
   * this slot, in minutes.
   */
  minSeparation?: number;

  /**
   * Optional notes/comments for this airfield slot.
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
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Zulu time this slot is first available based on daily standard hours. Not
   * applicable to slots with type PARKING. Abnormal hours, such as holidays, should
   * be marked via the AirfieldSlotConsumption schema.
   */
  startTime?: string;

  /**
   * Designates how this slot can be used (WORKING, PARKING, TAKEOFF, LANDING,
   * OTHER).
   */
  type?: 'WORKING' | 'PARKING' | 'TAKEOFF' | 'LANDING' | 'OTHER';
}

export type AirfieldSlotCountResponse = string;

export interface AirfieldSlotQueryhelpResponse {
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

export type AirfieldSlotTupleResponse = Array<Shared.AirfieldslotFull>;

export interface AirfieldSlotCreateParams {
  /**
   * The name of the airfield where this slot is located.
   */
  airfieldName: string;

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
   * Name of this slot.
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
   * Largest category of aircraft supported in this slot (WIDE, NARROW, HELO, ALL,
   * OTHER).
   */
  acSlotCat?: 'WIDE' | 'NARROW' | 'HELO' | 'ALL' | 'OTHER';

  /**
   * Alternate airfield identifier provided by the source.
   */
  altAirfieldId?: string;

  /**
   * Number of aircraft that can fit in this slot at the same time.
   */
  capacity?: number;

  /**
   * Latest zulu time this slot is available based on daily standard hours. Not
   * applicable to slots with type PARKING. Abnormal hours, such as holidays, should
   * be marked via the AirfieldSlotConsumption schema.
   */
  endTime?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of the airfield.
   */
  icao?: string;

  /**
   * Unique identifier of the Airfield for which this slot information applies.
   */
  idAirfield?: string;

  /**
   * Minimum time that must elapse between different aircraft leaving and entering
   * this slot, in minutes.
   */
  minSeparation?: number;

  /**
   * Optional notes/comments for this airfield slot.
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
   * Zulu time this slot is first available based on daily standard hours. Not
   * applicable to slots with type PARKING. Abnormal hours, such as holidays, should
   * be marked via the AirfieldSlotConsumption schema.
   */
  startTime?: string;

  /**
   * Designates how this slot can be used (WORKING, PARKING, TAKEOFF, LANDING,
   * OTHER).
   */
  type?: 'WORKING' | 'PARKING' | 'TAKEOFF' | 'LANDING' | 'OTHER';
}

export interface AirfieldSlotRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AirfieldSlotUpdateParams {
  /**
   * The name of the airfield where this slot is located.
   */
  airfieldName: string;

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
   * Name of this slot.
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
   * Largest category of aircraft supported in this slot (WIDE, NARROW, HELO, ALL,
   * OTHER).
   */
  acSlotCat?: 'WIDE' | 'NARROW' | 'HELO' | 'ALL' | 'OTHER';

  /**
   * Alternate airfield identifier provided by the source.
   */
  altAirfieldId?: string;

  /**
   * Number of aircraft that can fit in this slot at the same time.
   */
  capacity?: number;

  /**
   * Latest zulu time this slot is available based on daily standard hours. Not
   * applicable to slots with type PARKING. Abnormal hours, such as holidays, should
   * be marked via the AirfieldSlotConsumption schema.
   */
  endTime?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of the airfield.
   */
  icao?: string;

  /**
   * Unique identifier of the Airfield for which this slot information applies.
   */
  idAirfield?: string;

  /**
   * Minimum time that must elapse between different aircraft leaving and entering
   * this slot, in minutes.
   */
  minSeparation?: number;

  /**
   * Optional notes/comments for this airfield slot.
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
   * Zulu time this slot is first available based on daily standard hours. Not
   * applicable to slots with type PARKING. Abnormal hours, such as holidays, should
   * be marked via the AirfieldSlotConsumption schema.
   */
  startTime?: string;

  /**
   * Designates how this slot can be used (WORKING, PARKING, TAKEOFF, LANDING,
   * OTHER).
   */
  type?: 'WORKING' | 'PARKING' | 'TAKEOFF' | 'LANDING' | 'OTHER';
}

export interface AirfieldSlotListParams extends OffsetPageParams {}

export interface AirfieldSlotCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AirfieldSlotTupleParams {
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

export declare namespace AirfieldSlots {
  export {
    type AirfieldslotAbridged as AirfieldslotAbridged,
    type AirfieldSlotCountResponse as AirfieldSlotCountResponse,
    type AirfieldSlotQueryhelpResponse as AirfieldSlotQueryhelpResponse,
    type AirfieldSlotTupleResponse as AirfieldSlotTupleResponse,
    type AirfieldslotAbridgedsOffsetPage as AirfieldslotAbridgedsOffsetPage,
    type AirfieldSlotCreateParams as AirfieldSlotCreateParams,
    type AirfieldSlotRetrieveParams as AirfieldSlotRetrieveParams,
    type AirfieldSlotUpdateParams as AirfieldSlotUpdateParams,
    type AirfieldSlotListParams as AirfieldSlotListParams,
    type AirfieldSlotCountParams as AirfieldSlotCountParams,
    type AirfieldSlotTupleParams as AirfieldSlotTupleParams,
  };
}
