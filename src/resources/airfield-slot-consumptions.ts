// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AirfieldSlotConsumptions extends APIResource {
  /**
   * Service operation to take a single airfieldslotconsumption record as a POST body
   * and ingest into the database. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.airfieldSlotConsumptions.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idAirfieldSlot: '3136498f-2969-3535-1432-e984b2e2e686',
   *   numAircraft: 1,
   *   source: 'Bluestaq',
   *   startTime: '2023-01-01T01:01:01.123Z',
   * });
   * ```
   */
  create(body: AirfieldSlotConsumptionCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/airfieldslotconsumption', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single airfieldslotconsumption record by its unique
   * ID passed as a path parameter.
   *
   * @example
   * ```ts
   * const airfieldslotconsumptionFull =
   *   await client.airfieldSlotConsumptions.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: AirfieldSlotConsumptionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.AirfieldslotconsumptionFull> {
    return this._client.get(path`/udl/airfieldslotconsumption/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single AirfieldSlotConsumption. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.airfieldSlotConsumptions.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idAirfieldSlot: '3136498f-2969-3535-1432-e984b2e2e686',
   *   numAircraft: 1,
   *   source: 'Bluestaq',
   *   startTime: '2023-01-01T01:01:01.123Z',
   * });
   * ```
   */
  update(
    pathID: string,
    body: AirfieldSlotConsumptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/udl/airfieldslotconsumption/${pathID}`, {
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
   * for await (const airfieldslotconsumptionAbridged of client.airfieldSlotConsumptions.list(
   *   { startTime: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AirfieldSlotConsumptionListParams,
    options?: RequestOptions,
  ): PagePromise<AirfieldslotconsumptionAbridgedsOffsetPage, AirfieldslotconsumptionAbridged> {
    return this._client.getAPIList(
      '/udl/airfieldslotconsumption',
      OffsetPage<AirfieldslotconsumptionAbridged>,
      { query, ...options },
    );
  }

  /**
   * Service operation to delete an airfieldslotconsumption record specified by the
   * passed ID path parameter. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.airfieldSlotConsumptions.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/airfieldslotconsumption/${id}`, {
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
   *   await client.airfieldSlotConsumptions.count({
   *     startTime: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  count(query: AirfieldSlotConsumptionCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/airfieldslotconsumption/count', {
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
   * const response =
   *   await client.airfieldSlotConsumptions.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<AirfieldSlotConsumptionQueryhelpResponse> {
    return this._client.get('/udl/airfieldslotconsumption/queryhelp', options);
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
   * const airfieldslotconsumptionFulls =
   *   await client.airfieldSlotConsumptions.tuple({
   *     columns: 'columns',
   *     startTime: '2019-12-27T18:11:19.117Z',
   *   });
   * ```
   */
  tuple(
    query: AirfieldSlotConsumptionTupleParams,
    options?: RequestOptions,
  ): APIPromise<AirfieldSlotConsumptionTupleResponse> {
    return this._client.get('/udl/airfieldslotconsumption/tuple', { query, ...options });
  }
}

export type AirfieldslotconsumptionAbridgedsOffsetPage = OffsetPage<AirfieldslotconsumptionAbridged>;

/**
 * Airfield slot use data. Contains the dynamic data associated with the status and
 * use of specific airfield slots.
 */
export interface AirfieldslotconsumptionAbridged {
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
   * Unique identifier of the airfield slot for which this slot consumption record is
   * referencing.
   */
  idAirfieldSlot: string;

  /**
   * Number of aircraft using this slot for this time.
   */
  numAircraft: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The start of the slot window, in ISO 8601 UTC format.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Alternate identifier of the sortie arriving at the slot start time provided by
   * the source.
   */
  altArrSortieId?: string;

  /**
   * Alternate identifier of the sortie departing at the slot end time provided by
   * the source.
   */
  altDepSortieId?: string;

  /**
   * Comments from the approver.
   */
  appComment?: string;

  /**
   * Initials of the person approving the use of this slot. Use SYSTEM if
   * auto-approved without human involvement.
   */
  appInitials?: string;

  /**
   * Short name of the organization approving the use of this slot.
   */
  appOrg?: string;

  /**
   * Array of call signs of the aircraft using this slot.
   */
  callSigns?: Array<string>;

  /**
   * Identifying name of the aircraft using this slot. Names are often Prior
   * Permission Required (PPR) numbers or other similar human-readable identifiers.
   */
  consumer?: string;

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
   * The end of the slot window, in ISO 8601 UTC format.
   */
  endTime?: string;

  /**
   * Unique identifier of the sortie arriving at the slot start time.
   */
  idArrSortie?: string;

  /**
   * Unique identifier of the sortie departing at the slot end time.
   */
  idDepSortie?: string;

  /**
   * Mission identifier using this slot according to Mobility Air Forces (MAF)
   * Encode/Decode procedures.
   */
  missionId?: string;

  /**
   * The aircraft Model Design Series designation of the aircraft occupying this
   * slot.
   */
  occAircraftMDS?: string;

  /**
   * Time the aircraft began occupying this slot, in ISO 8601 UTC format with
   * millisecond precision.
   */
  occStartTime?: string;

  /**
   * The tail number of the aircraft occupying this slot.
   */
  occTailNumber?: string;

  /**
   * Flag indicating if the slot is occupied.
   */
  occupied?: boolean;

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
   * Comments from the requester.
   */
  reqComment?: string;

  /**
   * Initials of the person requesting the use of this slot. Use SYSTEM if this
   * request is auto-generated by an auto-planning system.
   */
  reqInitials?: string;

  /**
   * Short name of the organization requesting use of this slot.
   */
  reqOrg?: string;

  /**
   * The aircraft Model Design Series designation of the aircraft this slot is
   * reserved for.
   */
  resAircraftMDS?: string;

  /**
   * Mission identifier reserving this slot according to Mobility Air Forces (MAF)
   * Encode/Decode procedures.
   */
  resMissionId?: string;

  /**
   * The reason the slot reservation was made.
   */
  resReason?: string;

  /**
   * The tail number of the aircraft this slot is reserved for.
   */
  resTailNumber?: string;

  /**
   * Indicates the type of reservation (e.g. M for Mission, A for Aircraft, O for
   * Other).
   */
  resType?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Current status of this slot (REQUESTED / APPROVED / DENIED / BLOCKED / OTHER).
   */
  status?: 'REQUESTED' | 'APPROVED' | 'DENIED' | 'BLOCKED' | 'OTHER';

  /**
   * The desired time for aircraft action such as landing, take off, parking, etc.,
   * in ISO 8601 UTC format.
   */
  targetTime?: string;
}

export type AirfieldSlotConsumptionCountResponse = string;

export interface AirfieldSlotConsumptionQueryhelpResponse {
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

export type AirfieldSlotConsumptionTupleResponse = Array<Shared.AirfieldslotconsumptionFull>;

export interface AirfieldSlotConsumptionCreateParams {
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
   * Unique identifier of the airfield slot for which this slot consumption record is
   * referencing.
   */
  idAirfieldSlot: string;

  /**
   * Number of aircraft using this slot for this time.
   */
  numAircraft: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The start of the slot window, in ISO 8601 UTC format.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Alternate identifier of the sortie arriving at the slot start time provided by
   * the source.
   */
  altArrSortieId?: string;

  /**
   * Alternate identifier of the sortie departing at the slot end time provided by
   * the source.
   */
  altDepSortieId?: string;

  /**
   * Comments from the approver.
   */
  appComment?: string;

  /**
   * Initials of the person approving the use of this slot. Use SYSTEM if
   * auto-approved without human involvement.
   */
  appInitials?: string;

  /**
   * Short name of the organization approving the use of this slot.
   */
  appOrg?: string;

  /**
   * Array of call signs of the aircraft using this slot.
   */
  callSigns?: Array<string>;

  /**
   * Identifying name of the aircraft using this slot. Names are often Prior
   * Permission Required (PPR) numbers or other similar human-readable identifiers.
   */
  consumer?: string;

  /**
   * The end of the slot window, in ISO 8601 UTC format.
   */
  endTime?: string;

  /**
   * Unique identifier of the sortie arriving at the slot start time.
   */
  idArrSortie?: string;

  /**
   * Unique identifier of the sortie departing at the slot end time.
   */
  idDepSortie?: string;

  /**
   * Mission identifier using this slot according to Mobility Air Forces (MAF)
   * Encode/Decode procedures.
   */
  missionId?: string;

  /**
   * The aircraft Model Design Series designation of the aircraft occupying this
   * slot.
   */
  occAircraftMDS?: string;

  /**
   * Time the aircraft began occupying this slot, in ISO 8601 UTC format with
   * millisecond precision.
   */
  occStartTime?: string;

  /**
   * The tail number of the aircraft occupying this slot.
   */
  occTailNumber?: string;

  /**
   * Flag indicating if the slot is occupied.
   */
  occupied?: boolean;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Comments from the requester.
   */
  reqComment?: string;

  /**
   * Initials of the person requesting the use of this slot. Use SYSTEM if this
   * request is auto-generated by an auto-planning system.
   */
  reqInitials?: string;

  /**
   * Short name of the organization requesting use of this slot.
   */
  reqOrg?: string;

  /**
   * The aircraft Model Design Series designation of the aircraft this slot is
   * reserved for.
   */
  resAircraftMDS?: string;

  /**
   * Mission identifier reserving this slot according to Mobility Air Forces (MAF)
   * Encode/Decode procedures.
   */
  resMissionId?: string;

  /**
   * The reason the slot reservation was made.
   */
  resReason?: string;

  /**
   * The tail number of the aircraft this slot is reserved for.
   */
  resTailNumber?: string;

  /**
   * Indicates the type of reservation (e.g. M for Mission, A for Aircraft, O for
   * Other).
   */
  resType?: string;

  /**
   * Current status of this slot (REQUESTED / APPROVED / DENIED / BLOCKED / OTHER).
   */
  status?: 'REQUESTED' | 'APPROVED' | 'DENIED' | 'BLOCKED' | 'OTHER';

  /**
   * The desired time for aircraft action such as landing, take off, parking, etc.,
   * in ISO 8601 UTC format.
   */
  targetTime?: string;
}

export interface AirfieldSlotConsumptionRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AirfieldSlotConsumptionUpdateParams {
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
   * Unique identifier of the airfield slot for which this slot consumption record is
   * referencing.
   */
  idAirfieldSlot: string;

  /**
   * Number of aircraft using this slot for this time.
   */
  numAircraft: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The start of the slot window, in ISO 8601 UTC format.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Alternate identifier of the sortie arriving at the slot start time provided by
   * the source.
   */
  altArrSortieId?: string;

  /**
   * Alternate identifier of the sortie departing at the slot end time provided by
   * the source.
   */
  altDepSortieId?: string;

  /**
   * Comments from the approver.
   */
  appComment?: string;

  /**
   * Initials of the person approving the use of this slot. Use SYSTEM if
   * auto-approved without human involvement.
   */
  appInitials?: string;

  /**
   * Short name of the organization approving the use of this slot.
   */
  appOrg?: string;

  /**
   * Array of call signs of the aircraft using this slot.
   */
  callSigns?: Array<string>;

  /**
   * Identifying name of the aircraft using this slot. Names are often Prior
   * Permission Required (PPR) numbers or other similar human-readable identifiers.
   */
  consumer?: string;

  /**
   * The end of the slot window, in ISO 8601 UTC format.
   */
  endTime?: string;

  /**
   * Unique identifier of the sortie arriving at the slot start time.
   */
  idArrSortie?: string;

  /**
   * Unique identifier of the sortie departing at the slot end time.
   */
  idDepSortie?: string;

  /**
   * Mission identifier using this slot according to Mobility Air Forces (MAF)
   * Encode/Decode procedures.
   */
  missionId?: string;

  /**
   * The aircraft Model Design Series designation of the aircraft occupying this
   * slot.
   */
  occAircraftMDS?: string;

  /**
   * Time the aircraft began occupying this slot, in ISO 8601 UTC format with
   * millisecond precision.
   */
  occStartTime?: string;

  /**
   * The tail number of the aircraft occupying this slot.
   */
  occTailNumber?: string;

  /**
   * Flag indicating if the slot is occupied.
   */
  occupied?: boolean;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Comments from the requester.
   */
  reqComment?: string;

  /**
   * Initials of the person requesting the use of this slot. Use SYSTEM if this
   * request is auto-generated by an auto-planning system.
   */
  reqInitials?: string;

  /**
   * Short name of the organization requesting use of this slot.
   */
  reqOrg?: string;

  /**
   * The aircraft Model Design Series designation of the aircraft this slot is
   * reserved for.
   */
  resAircraftMDS?: string;

  /**
   * Mission identifier reserving this slot according to Mobility Air Forces (MAF)
   * Encode/Decode procedures.
   */
  resMissionId?: string;

  /**
   * The reason the slot reservation was made.
   */
  resReason?: string;

  /**
   * The tail number of the aircraft this slot is reserved for.
   */
  resTailNumber?: string;

  /**
   * Indicates the type of reservation (e.g. M for Mission, A for Aircraft, O for
   * Other).
   */
  resType?: string;

  /**
   * Current status of this slot (REQUESTED / APPROVED / DENIED / BLOCKED / OTHER).
   */
  status?: 'REQUESTED' | 'APPROVED' | 'DENIED' | 'BLOCKED' | 'OTHER';

  /**
   * The desired time for aircraft action such as landing, take off, parking, etc.,
   * in ISO 8601 UTC format.
   */
  targetTime?: string;
}

export interface AirfieldSlotConsumptionListParams extends OffsetPageParams {
  /**
   * The start of the slot window, in ISO 8601 UTC format. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime: string;
}

export interface AirfieldSlotConsumptionCountParams {
  /**
   * The start of the slot window, in ISO 8601 UTC format. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface AirfieldSlotConsumptionTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The start of the slot window, in ISO 8601 UTC format. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export declare namespace AirfieldSlotConsumptions {
  export {
    type AirfieldslotconsumptionAbridged as AirfieldslotconsumptionAbridged,
    type AirfieldSlotConsumptionCountResponse as AirfieldSlotConsumptionCountResponse,
    type AirfieldSlotConsumptionQueryhelpResponse as AirfieldSlotConsumptionQueryhelpResponse,
    type AirfieldSlotConsumptionTupleResponse as AirfieldSlotConsumptionTupleResponse,
    type AirfieldslotconsumptionAbridgedsOffsetPage as AirfieldslotconsumptionAbridgedsOffsetPage,
    type AirfieldSlotConsumptionCreateParams as AirfieldSlotConsumptionCreateParams,
    type AirfieldSlotConsumptionRetrieveParams as AirfieldSlotConsumptionRetrieveParams,
    type AirfieldSlotConsumptionUpdateParams as AirfieldSlotConsumptionUpdateParams,
    type AirfieldSlotConsumptionListParams as AirfieldSlotConsumptionListParams,
    type AirfieldSlotConsumptionCountParams as AirfieldSlotConsumptionCountParams,
    type AirfieldSlotConsumptionTupleParams as AirfieldSlotConsumptionTupleParams,
  };
}
