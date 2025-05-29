// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as HistoryAPI from './history';
import {
  History,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
  HistoryListResponsesOffsetPage,
} from './history';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ItemTrackings extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single itemtracking record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.itemTrackings.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   scanCode: 'ABC1234',
   *   scannerId: '2051M',
   *   source: 'Bluestaq',
   *   ts: '2023-03-21T14:22:00.123Z',
   * });
   * ```
   */
  create(body: ItemTrackingCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/itemtracking', {
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
   * for await (const itemTrackingListResponse of client.itemTrackings.list(
   *   { ts: '2019-12-27T18:11:19.117Z' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ItemTrackingListParams,
    options?: RequestOptions,
  ): PagePromise<ItemTrackingListResponsesOffsetPage, ItemTrackingListResponse> {
    return this._client.getAPIList('/udl/itemtracking', OffsetPage<ItemTrackingListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete an item tracking object specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.itemTrackings.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/itemtracking/${id}`, {
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
   * const response = await client.itemTrackings.count({
   *   ts: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  count(query: ItemTrackingCountParams, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/itemtracking/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single item tracking record by its unique ID passed
   * as a path parameter.
   *
   * @example
   * ```ts
   * const itemTracking = await client.itemTrackings.get('id');
   * ```
   */
  get(
    id: string,
    query: ItemTrackingGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemTrackingGetResponse> {
    return this._client.get(path`/udl/itemtracking/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.itemTrackings.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<ItemTrackingQueryhelpResponse> {
    return this._client.get('/udl/itemtracking/queryhelp', options);
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
   * const response = await client.itemTrackings.tuple({
   *   columns: 'columns',
   *   ts: '2019-12-27T18:11:19.117Z',
   * });
   * ```
   */
  tuple(query: ItemTrackingTupleParams, options?: RequestOptions): APIPromise<ItemTrackingTupleResponse> {
    return this._client.get('/udl/itemtracking/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple itemtracking records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.itemTrackings.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       scanCode: 'ABC1234',
   *       scannerId: '2051M',
   *       source: 'Bluestaq',
   *       ts: '2023-03-21T14:22:00.123Z',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(
    params: ItemTrackingUnvalidatedPublishParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-itemtracking', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ItemTrackingListResponsesOffsetPage = OffsetPage<ItemTrackingListResponse>;

export interface ItemTrackingListResponse {
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
   * The tracking identifier of an item or person. May be similar in representation
   * of a barcode or UPC.
   */
  scanCode: string;

  /**
   * The ID of the scanner or input device.
   */
  scannerId: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The timestamp of the scan, in ISO 8601 UTC format with millisecond precision.
   */
  ts: string;

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
   * The United States distinguished visitor code of the person scanned, only
   * applicable to people.
   */
  dvCode?: string;

  /**
   * The UDL ID of the item this record is associated with.
   */
  idItem?: string;

  /**
   * Array of keys that may be associated with this tracked item.
   */
  keys?: Array<string>;

  /**
   * WGS84 latitude where the item was scanned, in degrees.
   */
  lat?: number;

  /**
   * WGS84 longitude where the item was scanned, in degrees.
   */
  lon?: number;

  /**
   * Optional notes or comments about the tracking data.
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
   * The type of scan for tracking the item within it's journey (e.g. IN, OUT,
   * RECEIVED, DELIVERED, TRANSIT, ABANDONDED, REFUSED, UNABLE, RETURNED, HELD,
   * OTHER). For example, received and delivered are for when an item is received
   * from or delivered to the end customer. In and out are for stops in between such
   * as being loaded on an airplane or received at a warehouse.
   */
  scanType?: string;

  /**
   * The algorithm name or standard that generated the scanCode (e.g. UPC-A, EAN-13,
   * GTIN, SSCC, bID, JAN, etc.).
   */
  scGenTool?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The type of item that is being scanned (e.g. CARGO, PERSON, MAIL, MICAP, OTHER).
   */
  type?: string;

  /**
   * Array of values for the keys that may be associated to this tracked item. The
   * entries in this array must correspond to the position index in the keys array.
   * This array must be the same length as keys.
   */
  values?: Array<string>;
}

export type ItemTrackingCountResponse = string;

export interface ItemTrackingGetResponse {
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
   * The tracking identifier of an item or person. May be similar in representation
   * of a barcode or UPC.
   */
  scanCode: string;

  /**
   * The ID of the scanner or input device.
   */
  scannerId: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The timestamp of the scan, in ISO 8601 UTC format with millisecond precision.
   */
  ts: string;

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
   * The United States distinguished visitor code of the person scanned, only
   * applicable to people.
   */
  dvCode?: string;

  /**
   * The UDL ID of the item this record is associated with.
   */
  idItem?: string;

  /**
   * Array of keys that may be associated with this tracked item.
   */
  keys?: Array<string>;

  /**
   * WGS84 latitude where the item was scanned, in degrees.
   */
  lat?: number;

  /**
   * WGS84 longitude where the item was scanned, in degrees.
   */
  lon?: number;

  /**
   * Optional notes or comments about the tracking data.
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
   * The type of scan for tracking the item within it's journey (e.g. IN, OUT,
   * RECEIVED, DELIVERED, TRANSIT, ABANDONDED, REFUSED, UNABLE, RETURNED, HELD,
   * OTHER). For example, received and delivered are for when an item is received
   * from or delivered to the end customer. In and out are for stops in between such
   * as being loaded on an airplane or received at a warehouse.
   */
  scanType?: string;

  /**
   * The algorithm name or standard that generated the scanCode (e.g. UPC-A, EAN-13,
   * GTIN, SSCC, bID, JAN, etc.).
   */
  scGenTool?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The type of item that is being scanned (e.g. CARGO, PERSON, MAIL, MICAP, OTHER).
   */
  type?: string;

  /**
   * Array of values for the keys that may be associated to this tracked item. The
   * entries in this array must correspond to the position index in the keys array.
   * This array must be the same length as keys.
   */
  values?: Array<string>;
}

export interface ItemTrackingQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<ItemTrackingQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace ItemTrackingQueryhelpResponse {
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

export type ItemTrackingTupleResponse = Array<ItemTrackingTupleResponse.ItemTrackingTupleResponseItem>;

export namespace ItemTrackingTupleResponse {
  export interface ItemTrackingTupleResponseItem {
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
     * The tracking identifier of an item or person. May be similar in representation
     * of a barcode or UPC.
     */
    scanCode: string;

    /**
     * The ID of the scanner or input device.
     */
    scannerId: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The timestamp of the scan, in ISO 8601 UTC format with millisecond precision.
     */
    ts: string;

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
     * The United States distinguished visitor code of the person scanned, only
     * applicable to people.
     */
    dvCode?: string;

    /**
     * The UDL ID of the item this record is associated with.
     */
    idItem?: string;

    /**
     * Array of keys that may be associated with this tracked item.
     */
    keys?: Array<string>;

    /**
     * WGS84 latitude where the item was scanned, in degrees.
     */
    lat?: number;

    /**
     * WGS84 longitude where the item was scanned, in degrees.
     */
    lon?: number;

    /**
     * Optional notes or comments about the tracking data.
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
     * The type of scan for tracking the item within it's journey (e.g. IN, OUT,
     * RECEIVED, DELIVERED, TRANSIT, ABANDONDED, REFUSED, UNABLE, RETURNED, HELD,
     * OTHER). For example, received and delivered are for when an item is received
     * from or delivered to the end customer. In and out are for stops in between such
     * as being loaded on an airplane or received at a warehouse.
     */
    scanType?: string;

    /**
     * The algorithm name or standard that generated the scanCode (e.g. UPC-A, EAN-13,
     * GTIN, SSCC, bID, JAN, etc.).
     */
    scGenTool?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * The type of item that is being scanned (e.g. CARGO, PERSON, MAIL, MICAP, OTHER).
     */
    type?: string;

    /**
     * Array of values for the keys that may be associated to this tracked item. The
     * entries in this array must correspond to the position index in the keys array.
     * This array must be the same length as keys.
     */
    values?: Array<string>;
  }
}

export interface ItemTrackingCreateParams {
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
   * The tracking identifier of an item or person. May be similar in representation
   * of a barcode or UPC.
   */
  scanCode: string;

  /**
   * The ID of the scanner or input device.
   */
  scannerId: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The timestamp of the scan, in ISO 8601 UTC format with millisecond precision.
   */
  ts: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The United States distinguished visitor code of the person scanned, only
   * applicable to people.
   */
  dvCode?: string;

  /**
   * The UDL ID of the item this record is associated with.
   */
  idItem?: string;

  /**
   * Array of keys that may be associated with this tracked item.
   */
  keys?: Array<string>;

  /**
   * WGS84 latitude where the item was scanned, in degrees.
   */
  lat?: number;

  /**
   * WGS84 longitude where the item was scanned, in degrees.
   */
  lon?: number;

  /**
   * Optional notes or comments about the tracking data.
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
   * The type of scan for tracking the item within it's journey (e.g. IN, OUT,
   * RECEIVED, DELIVERED, TRANSIT, ABANDONDED, REFUSED, UNABLE, RETURNED, HELD,
   * OTHER). For example, received and delivered are for when an item is received
   * from or delivered to the end customer. In and out are for stops in between such
   * as being loaded on an airplane or received at a warehouse.
   */
  scanType?: string;

  /**
   * The algorithm name or standard that generated the scanCode (e.g. UPC-A, EAN-13,
   * GTIN, SSCC, bID, JAN, etc.).
   */
  scGenTool?: string;

  /**
   * The type of item that is being scanned (e.g. CARGO, PERSON, MAIL, MICAP, OTHER).
   */
  type?: string;

  /**
   * Array of values for the keys that may be associated to this tracked item. The
   * entries in this array must correspond to the position index in the keys array.
   * This array must be the same length as keys.
   */
  values?: Array<string>;
}

export interface ItemTrackingListParams extends OffsetPageParams {
  /**
   * The timestamp of the scan, in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  ts: string;
}

export interface ItemTrackingCountParams {
  /**
   * The timestamp of the scan, in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface ItemTrackingGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface ItemTrackingTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The timestamp of the scan, in ISO 8601 UTC format with millisecond precision.
   * (YYYY-MM-DDTHH:MM:SS.sssZ)
   */
  ts: string;

  firstResult?: number;

  maxResults?: number;
}

export interface ItemTrackingUnvalidatedPublishParams {
  body: Array<ItemTrackingUnvalidatedPublishParams.Body>;
}

export namespace ItemTrackingUnvalidatedPublishParams {
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
     * The tracking identifier of an item or person. May be similar in representation
     * of a barcode or UPC.
     */
    scanCode: string;

    /**
     * The ID of the scanner or input device.
     */
    scannerId: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The timestamp of the scan, in ISO 8601 UTC format with millisecond precision.
     */
    ts: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The United States distinguished visitor code of the person scanned, only
     * applicable to people.
     */
    dvCode?: string;

    /**
     * The UDL ID of the item this record is associated with.
     */
    idItem?: string;

    /**
     * Array of keys that may be associated with this tracked item.
     */
    keys?: Array<string>;

    /**
     * WGS84 latitude where the item was scanned, in degrees.
     */
    lat?: number;

    /**
     * WGS84 longitude where the item was scanned, in degrees.
     */
    lon?: number;

    /**
     * Optional notes or comments about the tracking data.
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
     * The type of scan for tracking the item within it's journey (e.g. IN, OUT,
     * RECEIVED, DELIVERED, TRANSIT, ABANDONDED, REFUSED, UNABLE, RETURNED, HELD,
     * OTHER). For example, received and delivered are for when an item is received
     * from or delivered to the end customer. In and out are for stops in between such
     * as being loaded on an airplane or received at a warehouse.
     */
    scanType?: string;

    /**
     * The algorithm name or standard that generated the scanCode (e.g. UPC-A, EAN-13,
     * GTIN, SSCC, bID, JAN, etc.).
     */
    scGenTool?: string;

    /**
     * The type of item that is being scanned (e.g. CARGO, PERSON, MAIL, MICAP, OTHER).
     */
    type?: string;

    /**
     * Array of values for the keys that may be associated to this tracked item. The
     * entries in this array must correspond to the position index in the keys array.
     * This array must be the same length as keys.
     */
    values?: Array<string>;
  }
}

ItemTrackings.History = History;

export declare namespace ItemTrackings {
  export {
    type ItemTrackingListResponse as ItemTrackingListResponse,
    type ItemTrackingCountResponse as ItemTrackingCountResponse,
    type ItemTrackingGetResponse as ItemTrackingGetResponse,
    type ItemTrackingQueryhelpResponse as ItemTrackingQueryhelpResponse,
    type ItemTrackingTupleResponse as ItemTrackingTupleResponse,
    type ItemTrackingListResponsesOffsetPage as ItemTrackingListResponsesOffsetPage,
    type ItemTrackingCreateParams as ItemTrackingCreateParams,
    type ItemTrackingListParams as ItemTrackingListParams,
    type ItemTrackingCountParams as ItemTrackingCountParams,
    type ItemTrackingGetParams as ItemTrackingGetParams,
    type ItemTrackingTupleParams as ItemTrackingTupleParams,
    type ItemTrackingUnvalidatedPublishParams as ItemTrackingUnvalidatedPublishParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListResponsesOffsetPage as HistoryListResponsesOffsetPage,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
