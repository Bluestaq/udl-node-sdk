// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HistoryAPI from './history';
import {
  History,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryListParams,
  HistoryListResponse,
} from './history';
import * as ItemtrackingHistoryAPI from '../udl/itemtracking/history';

export class ItemTrackings extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single itemtracking record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: ItemTrackingCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/itemtracking', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to dynamically query data by a variety of query parameters not
   * specified in this API documentation. See the queryhelp operation
   * (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query
   * parameter information.
   */
  list(
    query: ItemTrackingListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemTrackingListResponse> {
    return this._client.get('/udl/itemtracking', { query, ...options });
  }

  /**
   * Service operation to delete an item tracking object specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/itemtracking/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: ItemTrackingCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/itemtracking/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to take multiple itemtracking records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  fileCreate(body: ItemTrackingFileCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/filedrop/udl-itemtracking', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single item tracking record by its unique ID passed
   * as a path parameter.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<ItemtrackingHistoryAPI.ItemTrackingFull> {
    return this._client.get(`/udl/itemtracking/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/itemtracking/queryhelp', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
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
    query: ItemTrackingTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemTrackingTupleResponse> {
    return this._client.get('/udl/itemtracking/tuple', { query, ...options });
  }
}

export type ItemTrackingListResponse = Array<ItemTrackingListResponse.ItemTrackingListResponseItem>;

export namespace ItemTrackingListResponse {
  export interface ItemTrackingListResponseItem {
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

export type ItemTrackingCountResponse = string;

export type ItemTrackingTupleResponse = Array<ItemtrackingHistoryAPI.ItemTrackingFull>;

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

export interface ItemTrackingListParams {
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
}

export type ItemTrackingFileCreateParams = Array<ItemTrackingFileCreateParams.Body>;

export namespace ItemTrackingFileCreateParams {
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
}

ItemTrackings.History = History;

export declare namespace ItemTrackings {
  export {
    type ItemTrackingListResponse as ItemTrackingListResponse,
    type ItemTrackingCountResponse as ItemTrackingCountResponse,
    type ItemTrackingTupleResponse as ItemTrackingTupleResponse,
    type ItemTrackingCreateParams as ItemTrackingCreateParams,
    type ItemTrackingListParams as ItemTrackingListParams,
    type ItemTrackingCountParams as ItemTrackingCountParams,
    type ItemTrackingFileCreateParams as ItemTrackingFileCreateParams,
    type ItemTrackingTupleParams as ItemTrackingTupleParams,
  };

  export {
    History as History,
    type HistoryListResponse as HistoryListResponse,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryListParams as HistoryListParams,
    type HistoryCountParams as HistoryCountParams,
  };
}
