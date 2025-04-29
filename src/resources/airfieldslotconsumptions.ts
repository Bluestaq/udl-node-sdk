// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Airfieldslotconsumptions extends APIResource {
  /**
   * Service operation to take a single airfieldslotconsumption record as a POST body
   * and ingest into the database. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   */
  create(body: AirfieldslotconsumptionCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/airfieldslotconsumption', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single airfieldslotconsumption record by its unique
   * ID passed as a path parameter.
   */
  retrieve(
    id: string,
    query: AirfieldslotconsumptionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AirfieldslotconsumptionFull> {
    return this._client.get(path`/udl/airfieldslotconsumption/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single AirfieldSlotConsumption. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  update(
    pathID: string,
    body: AirfieldslotconsumptionUpdateParams,
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
   */
  list(
    query: AirfieldslotconsumptionListParams,
    options?: RequestOptions,
  ): APIPromise<AirfieldslotconsumptionListResponse> {
    return this._client.get('/udl/airfieldslotconsumption', { query, ...options });
  }

  /**
   * Service operation to delete an airfieldslotconsumption record specified by the
   * passed ID path parameter. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
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
   */
  count(query: AirfieldslotconsumptionCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/airfieldslotconsumption/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/airfieldslotconsumption/queryhelp', {
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
    query: AirfieldslotconsumptionTupleParams,
    options?: RequestOptions,
  ): APIPromise<AirfieldslotconsumptionTupleResponse> {
    return this._client.get('/udl/airfieldslotconsumption/tuple', { query, ...options });
  }
}

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

/**
 * Airfield slot use data. Contains the dynamic data associated with the status and
 * use of specific airfield slots.
 */
export interface AirfieldslotconsumptionFull {
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

export type AirfieldslotconsumptionListResponse = Array<AirfieldslotconsumptionAbridged>;

export type AirfieldslotconsumptionCountResponse = string;

export type AirfieldslotconsumptionTupleResponse = Array<AirfieldslotconsumptionFull>;

export interface AirfieldslotconsumptionCreateParams {
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

export interface AirfieldslotconsumptionRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AirfieldslotconsumptionUpdateParams {
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

export interface AirfieldslotconsumptionListParams {
  /**
   * The start of the slot window, in ISO 8601 UTC format. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface AirfieldslotconsumptionCountParams {
  /**
   * The start of the slot window, in ISO 8601 UTC format. (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  startTime: string;

  firstResult?: number;

  maxResults?: number;
}

export interface AirfieldslotconsumptionTupleParams {
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

export declare namespace Airfieldslotconsumptions {
  export {
    type AirfieldslotconsumptionAbridged as AirfieldslotconsumptionAbridged,
    type AirfieldslotconsumptionFull as AirfieldslotconsumptionFull,
    type AirfieldslotconsumptionListResponse as AirfieldslotconsumptionListResponse,
    type AirfieldslotconsumptionCountResponse as AirfieldslotconsumptionCountResponse,
    type AirfieldslotconsumptionTupleResponse as AirfieldslotconsumptionTupleResponse,
    type AirfieldslotconsumptionCreateParams as AirfieldslotconsumptionCreateParams,
    type AirfieldslotconsumptionRetrieveParams as AirfieldslotconsumptionRetrieveParams,
    type AirfieldslotconsumptionUpdateParams as AirfieldslotconsumptionUpdateParams,
    type AirfieldslotconsumptionListParams as AirfieldslotconsumptionListParams,
    type AirfieldslotconsumptionCountParams as AirfieldslotconsumptionCountParams,
    type AirfieldslotconsumptionTupleParams as AirfieldslotconsumptionTupleParams,
  };
}
