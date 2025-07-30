// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as HistoryAPI from 'bluestaq@unified-data-library/resources/airfield-status/history';
import {
  History,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
} from 'bluestaq@unified-data-library/resources/airfield-status/history';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class AirfieldStatus extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single airfield status record as a POST body and
   * ingest into the database. This operation is not intended to be used for
   * automated feeds into UDL. Data providers should contact the UDL team for
   * specific role assignments and for instructions on setting up a permanent feed
   * through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.airfieldStatus.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idAirfield: '3136498f-2969-3535-1432-e984b2e2e686',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: AirfieldStatusCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/airfieldstatus', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single airfield status record by its unique ID passed
   * as a path parameter.
   *
   * @example
   * ```ts
   * const airfieldstatusFull =
   *   await client.airfieldStatus.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: AirfieldStatusRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AirfieldstatusFull> {
    return this._client.get(path`/udl/airfieldstatus/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single airfield status record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.airfieldStatus.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idAirfield: '3136498f-2969-3535-1432-e984b2e2e686',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: AirfieldStatusUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/airfieldstatus/${pathID}`, {
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
   * for await (const airfieldstatusAbridged of client.airfieldStatus.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AirfieldStatusListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AirfieldstatusAbridgedsOffsetPage, AirfieldstatusAbridged> {
    return this._client.getAPIList('/udl/airfieldstatus', OffsetPage<AirfieldstatusAbridged>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a Status object specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.airfieldStatus.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/airfieldstatus/${id}`, {
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
   * const response = await client.airfieldStatus.count();
   * ```
   */
  count(
    query: AirfieldStatusCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/airfieldstatus/count', {
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
   * const response = await client.airfieldStatus.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<AirfieldStatusQueryhelpResponse> {
    return this._client.get('/udl/airfieldstatus/queryhelp', options);
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
   * const airfieldstatusFulls =
   *   await client.airfieldStatus.tuple({ columns: 'columns' });
   * ```
   */
  tuple(query: AirfieldStatusTupleParams, options?: RequestOptions): APIPromise<AirfieldStatusTupleResponse> {
    return this._client.get('/udl/airfieldstatus/tuple', { query, ...options });
  }
}

export type AirfieldstatusAbridgedsOffsetPage = OffsetPage<AirfieldstatusAbridged>;

export type AirfieldstatusFullsOffsetPage = OffsetPage<AirfieldstatusFull>;

/**
 * The airfield status contains dynamic data of an airfield's capabilities.
 */
export interface AirfieldstatusAbridged {
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
   * Unique identifier of the Airfield for which this status is referencing.
   */
  idAirfield: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Alternate airfield identifier provided by the source.
   */
  altAirfieldId?: string;

  /**
   * The name of the person who approved the airfield survey review.
   */
  approvedBy?: string;

  /**
   * The date that survey review changes were approved for this airfield, in ISO 8601
   * UTC format with millisecond precision.
   */
  approvedDate?: string;

  /**
   * The category of aircraft rescue and fire fighting (ARFF) services that are
   * currently available at the airfield. Entries should include the code (FAA or
   * ICAO) and the category.
   */
  arffCat?: string;

  /**
   * Maximum on ground (MOG) number of high-reach/wide-body cargo aircraft that can
   * be serviced simultaneously based on spacing and manpower at the time of status.
   */
  cargoMOG?: number;

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
   * Maximum on ground (MOG) number of fleet aircraft that can be serviced
   * simultaneously based on spacing and manpower at the time of status.
   */
  fleetServiceMOG?: number;

  /**
   * Maximum on ground (MOG) number of aircraft that can be simultaneously refueled
   * based on spacing and manpower at the time of status.
   */
  fuelMOG?: number;

  /**
   * Array of quantities for each fuel type at the airfield, in kilograms. The values
   * in this array must correspond to the position index in fuelTypes. This array
   * must be the same length as fuelTypes.
   */
  fuelQtys?: Array<number>;

  /**
   * Array of fuel types available at the airfield. This array must be the same
   * length as fuelQtys.
   */
  fuelTypes?: Array<string>;

  /**
   * The expected time to receive ground support equipment (e.g. power units, air
   * units, cables, hoses, etc.), in minutes.
   */
  gseTime?: number;

  /**
   * The level of medical support and capabilities available at the airfield.
   */
  medCap?: string;

  /**
   * Description of the current status of the airfield.
   */
  message?: string;

  /**
   * Array of quantities for each material handling equipment types at the airfield.
   * The values in this array must correspond to the position index in mheTypes. This
   * array must be the same length as mheTypes.
   */
  mheQtys?: Array<number>;

  /**
   * Array of material handling equipment types at the airfield. This array must be
   * the same length as mheQtys.
   */
  mheTypes?: Array<string>;

  /**
   * Maximum on ground (MOG) number of aircraft that can be simultaneously ground
   * handled for standard maintenance based on spacing and manpower at the time of
   * status.
   */
  mxMOG?: number;

  /**
   * Maximum on ground (MOG) number of parking narrow-body aircraft based on spacing
   * and manpower at the time of status.
   */
  narrowParkingMOG?: number;

  /**
   * Maximum on ground (MOG) number of working narrow-body aircraft based on spacing
   * and manpower at the time of status.
   */
  narrowWorkingMOG?: number;

  /**
   * The number of aircraft that are currently on ground (COG) at the airfield.
   */
  numCOG?: number;

  /**
   * Maximum on ground (MOG) number of aircraft due to items not directly related to
   * the airfield infrastructure or aircraft servicing capability based on spacing
   * and manpower at the time of status.
   */
  operatingMOG?: number;

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
   * Maximum on ground (MOG) number of high-reach/wide-body passenger aircraft that
   * can be serviced simultaneously based on spacing and manpower at the time of
   * status.
   */
  passengerServiceMOG?: number;

  /**
   * The primary frequency which the airfield is currently operating, in megahertz.
   */
  priFreq?: number;

  /**
   * The number or ID of primary runway at the airfield.
   */
  priRwyNum?: string;

  /**
   * The name of the person who reviewed the airfield survey.
   */
  reviewedBy?: string;

  /**
   * The date the airfield survey was reviewed, in ISO 8601 UTC format with
   * millisecond precision.
   */
  reviewedDate?: string;

  /**
   * The primary runway condition reading value used for determining runway braking
   * action, from 0 to 26. A value of 0 indicates braking action is poor or
   * non-existent, where a value of 26 indicates braking action is good.
   */
  rwyCondReading?: number;

  /**
   * The primary runway friction factor which is dependent on the surface friction
   * between the tires of the aircraft and the runway surface, from 0 to 100. A lower
   * number indicates less friction and less braking response.
   */
  rwyFrictionFactor?: number;

  /**
   * Array of markings currently on the primary runway.
   */
  rwyMarkings?: Array<string>;

  /**
   * Array of slot types that an airfield requires a particular aircraft provide in
   * order to consume a slot at this location.
   */
  slotTypesReq?: Array<string>;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The date the airfield survey was performed, in ISO 8601 UTC format with
   * millisecond precision.
   */
  surveyDate?: string;

  /**
   * Maximum on ground (MOG) number of parking wide-body aircraft based on spacing
   * and manpower at the time of status. Additional information about this field as
   * it pertains to specific aircraft type may be available in an associated
   * SiteOperations record.
   */
  wideParkingMOG?: number;

  /**
   * Maximum on ground (MOG) number of working wide-body aircraft based on spacing
   * and manpower at the time of status. Additional information about this field as
   * it pertains to specific aircraft type may be available in an associated
   * SiteOperations record.
   */
  wideWorkingMOG?: number;
}

/**
 * The airfield status contains dynamic data of an airfield's capabilities.
 */
export interface AirfieldstatusFull {
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
   * Unique identifier of the Airfield for which this status is referencing.
   */
  idAirfield: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Alternate airfield identifier provided by the source.
   */
  altAirfieldId?: string;

  /**
   * The name of the person who approved the airfield survey review.
   */
  approvedBy?: string;

  /**
   * The date that survey review changes were approved for this airfield, in ISO 8601
   * UTC format with millisecond precision.
   */
  approvedDate?: string;

  /**
   * The category of aircraft rescue and fire fighting (ARFF) services that are
   * currently available at the airfield. Entries should include the code (FAA or
   * ICAO) and the category.
   */
  arffCat?: string;

  /**
   * Maximum on ground (MOG) number of high-reach/wide-body cargo aircraft that can
   * be serviced simultaneously based on spacing and manpower at the time of status.
   */
  cargoMOG?: number;

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
   * Maximum on ground (MOG) number of fleet aircraft that can be serviced
   * simultaneously based on spacing and manpower at the time of status.
   */
  fleetServiceMOG?: number;

  /**
   * Maximum on ground (MOG) number of aircraft that can be simultaneously refueled
   * based on spacing and manpower at the time of status.
   */
  fuelMOG?: number;

  /**
   * Array of quantities for each fuel type at the airfield, in kilograms. The values
   * in this array must correspond to the position index in fuelTypes. This array
   * must be the same length as fuelTypes.
   */
  fuelQtys?: Array<number>;

  /**
   * Array of fuel types available at the airfield. This array must be the same
   * length as fuelQtys.
   */
  fuelTypes?: Array<string>;

  /**
   * The expected time to receive ground support equipment (e.g. power units, air
   * units, cables, hoses, etc.), in minutes.
   */
  gseTime?: number;

  /**
   * The level of medical support and capabilities available at the airfield.
   */
  medCap?: string;

  /**
   * Description of the current status of the airfield.
   */
  message?: string;

  /**
   * Array of quantities for each material handling equipment types at the airfield.
   * The values in this array must correspond to the position index in mheTypes. This
   * array must be the same length as mheTypes.
   */
  mheQtys?: Array<number>;

  /**
   * Array of material handling equipment types at the airfield. This array must be
   * the same length as mheQtys.
   */
  mheTypes?: Array<string>;

  /**
   * Maximum on ground (MOG) number of aircraft that can be simultaneously ground
   * handled for standard maintenance based on spacing and manpower at the time of
   * status.
   */
  mxMOG?: number;

  /**
   * Maximum on ground (MOG) number of parking narrow-body aircraft based on spacing
   * and manpower at the time of status.
   */
  narrowParkingMOG?: number;

  /**
   * Maximum on ground (MOG) number of working narrow-body aircraft based on spacing
   * and manpower at the time of status.
   */
  narrowWorkingMOG?: number;

  /**
   * The number of aircraft that are currently on ground (COG) at the airfield.
   */
  numCOG?: number;

  /**
   * Maximum on ground (MOG) number of aircraft due to items not directly related to
   * the airfield infrastructure or aircraft servicing capability based on spacing
   * and manpower at the time of status.
   */
  operatingMOG?: number;

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
   * Maximum on ground (MOG) number of high-reach/wide-body passenger aircraft that
   * can be serviced simultaneously based on spacing and manpower at the time of
   * status.
   */
  passengerServiceMOG?: number;

  /**
   * The primary frequency which the airfield is currently operating, in megahertz.
   */
  priFreq?: number;

  /**
   * The number or ID of primary runway at the airfield.
   */
  priRwyNum?: string;

  /**
   * The name of the person who reviewed the airfield survey.
   */
  reviewedBy?: string;

  /**
   * The date the airfield survey was reviewed, in ISO 8601 UTC format with
   * millisecond precision.
   */
  reviewedDate?: string;

  /**
   * The primary runway condition reading value used for determining runway braking
   * action, from 0 to 26. A value of 0 indicates braking action is poor or
   * non-existent, where a value of 26 indicates braking action is good.
   */
  rwyCondReading?: number;

  /**
   * The primary runway friction factor which is dependent on the surface friction
   * between the tires of the aircraft and the runway surface, from 0 to 100. A lower
   * number indicates less friction and less braking response.
   */
  rwyFrictionFactor?: number;

  /**
   * Array of markings currently on the primary runway.
   */
  rwyMarkings?: Array<string>;

  /**
   * Array of slot types that an airfield requires a particular aircraft provide in
   * order to consume a slot at this location.
   */
  slotTypesReq?: Array<string>;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The date the airfield survey was performed, in ISO 8601 UTC format with
   * millisecond precision.
   */
  surveyDate?: string;

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
   * Maximum on ground (MOG) number of parking wide-body aircraft based on spacing
   * and manpower at the time of status. Additional information about this field as
   * it pertains to specific aircraft type may be available in an associated
   * SiteOperations record.
   */
  wideParkingMOG?: number;

  /**
   * Maximum on ground (MOG) number of working wide-body aircraft based on spacing
   * and manpower at the time of status. Additional information about this field as
   * it pertains to specific aircraft type may be available in an associated
   * SiteOperations record.
   */
  wideWorkingMOG?: number;
}

export type AirfieldStatusCountResponse = string;

export interface AirfieldStatusQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<AirfieldStatusQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace AirfieldStatusQueryhelpResponse {
  export interface Parameter {
    classificationMarking?: string;

    derived?: boolean;

    description?: string;

    elemMatch?: boolean;

    format?: string;

    histQuerySupported?: boolean;

    histTupleSupported?: boolean;

    name?: string;

    required?: boolean;

    restQuerySupported?: boolean;

    restTupleSupported?: boolean;

    type?: string;

    unitOfMeasure?: string;

    utcDate?: boolean;
  }
}

export type AirfieldStatusTupleResponse = Array<AirfieldstatusFull>;

export interface AirfieldStatusCreateParams {
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
   * Unique identifier of the Airfield for which this status is referencing.
   */
  idAirfield: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Alternate airfield identifier provided by the source.
   */
  altAirfieldId?: string;

  /**
   * The name of the person who approved the airfield survey review.
   */
  approvedBy?: string;

  /**
   * The date that survey review changes were approved for this airfield, in ISO 8601
   * UTC format with millisecond precision.
   */
  approvedDate?: string;

  /**
   * The category of aircraft rescue and fire fighting (ARFF) services that are
   * currently available at the airfield. Entries should include the code (FAA or
   * ICAO) and the category.
   */
  arffCat?: string;

  /**
   * Maximum on ground (MOG) number of high-reach/wide-body cargo aircraft that can
   * be serviced simultaneously based on spacing and manpower at the time of status.
   */
  cargoMOG?: number;

  /**
   * Maximum on ground (MOG) number of fleet aircraft that can be serviced
   * simultaneously based on spacing and manpower at the time of status.
   */
  fleetServiceMOG?: number;

  /**
   * Maximum on ground (MOG) number of aircraft that can be simultaneously refueled
   * based on spacing and manpower at the time of status.
   */
  fuelMOG?: number;

  /**
   * Array of quantities for each fuel type at the airfield, in kilograms. The values
   * in this array must correspond to the position index in fuelTypes. This array
   * must be the same length as fuelTypes.
   */
  fuelQtys?: Array<number>;

  /**
   * Array of fuel types available at the airfield. This array must be the same
   * length as fuelQtys.
   */
  fuelTypes?: Array<string>;

  /**
   * The expected time to receive ground support equipment (e.g. power units, air
   * units, cables, hoses, etc.), in minutes.
   */
  gseTime?: number;

  /**
   * The level of medical support and capabilities available at the airfield.
   */
  medCap?: string;

  /**
   * Description of the current status of the airfield.
   */
  message?: string;

  /**
   * Array of quantities for each material handling equipment types at the airfield.
   * The values in this array must correspond to the position index in mheTypes. This
   * array must be the same length as mheTypes.
   */
  mheQtys?: Array<number>;

  /**
   * Array of material handling equipment types at the airfield. This array must be
   * the same length as mheQtys.
   */
  mheTypes?: Array<string>;

  /**
   * Maximum on ground (MOG) number of aircraft that can be simultaneously ground
   * handled for standard maintenance based on spacing and manpower at the time of
   * status.
   */
  mxMOG?: number;

  /**
   * Maximum on ground (MOG) number of parking narrow-body aircraft based on spacing
   * and manpower at the time of status.
   */
  narrowParkingMOG?: number;

  /**
   * Maximum on ground (MOG) number of working narrow-body aircraft based on spacing
   * and manpower at the time of status.
   */
  narrowWorkingMOG?: number;

  /**
   * The number of aircraft that are currently on ground (COG) at the airfield.
   */
  numCOG?: number;

  /**
   * Maximum on ground (MOG) number of aircraft due to items not directly related to
   * the airfield infrastructure or aircraft servicing capability based on spacing
   * and manpower at the time of status.
   */
  operatingMOG?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Maximum on ground (MOG) number of high-reach/wide-body passenger aircraft that
   * can be serviced simultaneously based on spacing and manpower at the time of
   * status.
   */
  passengerServiceMOG?: number;

  /**
   * The primary frequency which the airfield is currently operating, in megahertz.
   */
  priFreq?: number;

  /**
   * The number or ID of primary runway at the airfield.
   */
  priRwyNum?: string;

  /**
   * The name of the person who reviewed the airfield survey.
   */
  reviewedBy?: string;

  /**
   * The date the airfield survey was reviewed, in ISO 8601 UTC format with
   * millisecond precision.
   */
  reviewedDate?: string;

  /**
   * The primary runway condition reading value used for determining runway braking
   * action, from 0 to 26. A value of 0 indicates braking action is poor or
   * non-existent, where a value of 26 indicates braking action is good.
   */
  rwyCondReading?: number;

  /**
   * The primary runway friction factor which is dependent on the surface friction
   * between the tires of the aircraft and the runway surface, from 0 to 100. A lower
   * number indicates less friction and less braking response.
   */
  rwyFrictionFactor?: number;

  /**
   * Array of markings currently on the primary runway.
   */
  rwyMarkings?: Array<string>;

  /**
   * Array of slot types that an airfield requires a particular aircraft provide in
   * order to consume a slot at this location.
   */
  slotTypesReq?: Array<string>;

  /**
   * The date the airfield survey was performed, in ISO 8601 UTC format with
   * millisecond precision.
   */
  surveyDate?: string;

  /**
   * Maximum on ground (MOG) number of parking wide-body aircraft based on spacing
   * and manpower at the time of status. Additional information about this field as
   * it pertains to specific aircraft type may be available in an associated
   * SiteOperations record.
   */
  wideParkingMOG?: number;

  /**
   * Maximum on ground (MOG) number of working wide-body aircraft based on spacing
   * and manpower at the time of status. Additional information about this field as
   * it pertains to specific aircraft type may be available in an associated
   * SiteOperations record.
   */
  wideWorkingMOG?: number;
}

export interface AirfieldStatusRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AirfieldStatusUpdateParams {
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
   * Unique identifier of the Airfield for which this status is referencing.
   */
  idAirfield: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Alternate airfield identifier provided by the source.
   */
  altAirfieldId?: string;

  /**
   * The name of the person who approved the airfield survey review.
   */
  approvedBy?: string;

  /**
   * The date that survey review changes were approved for this airfield, in ISO 8601
   * UTC format with millisecond precision.
   */
  approvedDate?: string;

  /**
   * The category of aircraft rescue and fire fighting (ARFF) services that are
   * currently available at the airfield. Entries should include the code (FAA or
   * ICAO) and the category.
   */
  arffCat?: string;

  /**
   * Maximum on ground (MOG) number of high-reach/wide-body cargo aircraft that can
   * be serviced simultaneously based on spacing and manpower at the time of status.
   */
  cargoMOG?: number;

  /**
   * Maximum on ground (MOG) number of fleet aircraft that can be serviced
   * simultaneously based on spacing and manpower at the time of status.
   */
  fleetServiceMOG?: number;

  /**
   * Maximum on ground (MOG) number of aircraft that can be simultaneously refueled
   * based on spacing and manpower at the time of status.
   */
  fuelMOG?: number;

  /**
   * Array of quantities for each fuel type at the airfield, in kilograms. The values
   * in this array must correspond to the position index in fuelTypes. This array
   * must be the same length as fuelTypes.
   */
  fuelQtys?: Array<number>;

  /**
   * Array of fuel types available at the airfield. This array must be the same
   * length as fuelQtys.
   */
  fuelTypes?: Array<string>;

  /**
   * The expected time to receive ground support equipment (e.g. power units, air
   * units, cables, hoses, etc.), in minutes.
   */
  gseTime?: number;

  /**
   * The level of medical support and capabilities available at the airfield.
   */
  medCap?: string;

  /**
   * Description of the current status of the airfield.
   */
  message?: string;

  /**
   * Array of quantities for each material handling equipment types at the airfield.
   * The values in this array must correspond to the position index in mheTypes. This
   * array must be the same length as mheTypes.
   */
  mheQtys?: Array<number>;

  /**
   * Array of material handling equipment types at the airfield. This array must be
   * the same length as mheQtys.
   */
  mheTypes?: Array<string>;

  /**
   * Maximum on ground (MOG) number of aircraft that can be simultaneously ground
   * handled for standard maintenance based on spacing and manpower at the time of
   * status.
   */
  mxMOG?: number;

  /**
   * Maximum on ground (MOG) number of parking narrow-body aircraft based on spacing
   * and manpower at the time of status.
   */
  narrowParkingMOG?: number;

  /**
   * Maximum on ground (MOG) number of working narrow-body aircraft based on spacing
   * and manpower at the time of status.
   */
  narrowWorkingMOG?: number;

  /**
   * The number of aircraft that are currently on ground (COG) at the airfield.
   */
  numCOG?: number;

  /**
   * Maximum on ground (MOG) number of aircraft due to items not directly related to
   * the airfield infrastructure or aircraft servicing capability based on spacing
   * and manpower at the time of status.
   */
  operatingMOG?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Maximum on ground (MOG) number of high-reach/wide-body passenger aircraft that
   * can be serviced simultaneously based on spacing and manpower at the time of
   * status.
   */
  passengerServiceMOG?: number;

  /**
   * The primary frequency which the airfield is currently operating, in megahertz.
   */
  priFreq?: number;

  /**
   * The number or ID of primary runway at the airfield.
   */
  priRwyNum?: string;

  /**
   * The name of the person who reviewed the airfield survey.
   */
  reviewedBy?: string;

  /**
   * The date the airfield survey was reviewed, in ISO 8601 UTC format with
   * millisecond precision.
   */
  reviewedDate?: string;

  /**
   * The primary runway condition reading value used for determining runway braking
   * action, from 0 to 26. A value of 0 indicates braking action is poor or
   * non-existent, where a value of 26 indicates braking action is good.
   */
  rwyCondReading?: number;

  /**
   * The primary runway friction factor which is dependent on the surface friction
   * between the tires of the aircraft and the runway surface, from 0 to 100. A lower
   * number indicates less friction and less braking response.
   */
  rwyFrictionFactor?: number;

  /**
   * Array of markings currently on the primary runway.
   */
  rwyMarkings?: Array<string>;

  /**
   * Array of slot types that an airfield requires a particular aircraft provide in
   * order to consume a slot at this location.
   */
  slotTypesReq?: Array<string>;

  /**
   * The date the airfield survey was performed, in ISO 8601 UTC format with
   * millisecond precision.
   */
  surveyDate?: string;

  /**
   * Maximum on ground (MOG) number of parking wide-body aircraft based on spacing
   * and manpower at the time of status. Additional information about this field as
   * it pertains to specific aircraft type may be available in an associated
   * SiteOperations record.
   */
  wideParkingMOG?: number;

  /**
   * Maximum on ground (MOG) number of working wide-body aircraft based on spacing
   * and manpower at the time of status. Additional information about this field as
   * it pertains to specific aircraft type may be available in an associated
   * SiteOperations record.
   */
  wideWorkingMOG?: number;
}

export interface AirfieldStatusListParams extends OffsetPageParams {}

export interface AirfieldStatusCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AirfieldStatusTupleParams {
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

AirfieldStatus.History = History;

export declare namespace AirfieldStatus {
  export {
    type AirfieldstatusAbridged as AirfieldstatusAbridged,
    type AirfieldstatusFull as AirfieldstatusFull,
    type AirfieldStatusCountResponse as AirfieldStatusCountResponse,
    type AirfieldStatusQueryhelpResponse as AirfieldStatusQueryhelpResponse,
    type AirfieldStatusTupleResponse as AirfieldStatusTupleResponse,
    type AirfieldstatusAbridgedsOffsetPage as AirfieldstatusAbridgedsOffsetPage,
    type AirfieldStatusCreateParams as AirfieldStatusCreateParams,
    type AirfieldStatusRetrieveParams as AirfieldStatusRetrieveParams,
    type AirfieldStatusUpdateParams as AirfieldStatusUpdateParams,
    type AirfieldStatusListParams as AirfieldStatusListParams,
    type AirfieldStatusCountParams as AirfieldStatusCountParams,
    type AirfieldStatusTupleParams as AirfieldStatusTupleParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
