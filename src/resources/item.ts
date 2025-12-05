// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Item extends APIResource {
  /**
   * Service operation to take a single item record as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.item.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   scanCode: '12345ABCD',
   *   source: 'Bluestaq',
   *   type: 'CARGO',
   * });
   * ```
   */
  create(body: ItemCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/item', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single Item. An Item can be cargo, equipment, or a
   * passenger. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.item.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   scanCode: '12345ABCD',
   *   source: 'Bluestaq',
   *   type: 'CARGO',
   * });
   * ```
   */
  update(pathID: string, body: ItemUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/item/${pathID}`, {
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
   * for await (const itemListResponse of client.item.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ItemListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ItemListResponsesOffsetPage, ItemListResponse> {
    return this._client.getAPIList('/udl/item', OffsetPage<ItemListResponse>, { query, ...options });
  }

  /**
   * Service operation to delete a item record specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.item.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/item/${id}`, {
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
   * const response = await client.item.count();
   * ```
   */
  count(query: ItemCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/item/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single item record by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const item = await client.item.get('id');
   * ```
   */
  get(
    id: string,
    query: ItemGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ItemGetResponse> {
    return this._client.get(path`/udl/item/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.item.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<ItemQueryhelpResponse> {
    return this._client.get('/udl/item/queryhelp', options);
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
   * const response = await client.item.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: ItemTupleParams, options?: RequestOptions): APIPromise<ItemTupleResponse> {
    return this._client.get('/udl/item/tuple', { query, ...options });
  }

  /**
   * Service operation to take multiple item records as a POST body and ingest into
   * the database. This operation is intended to be used for automated feeds into
   * UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.item.unvalidatedPublish({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       dataMode: 'TEST',
   *       scanCode: '12345ABCD',
   *       source: 'Bluestaq',
   *       type: 'CARGO',
   *     },
   *   ],
   * });
   * ```
   */
  unvalidatedPublish(params: ItemUnvalidatedPublishParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/filedrop/udl-item', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ItemListResponsesOffsetPage = OffsetPage<ItemListResponse>;

export interface ItemListResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The tracking identifier of an item or person. May be similar in representation
   * of a barcode or UPC. If no scanCode or tracking number equivalent is available,
   * 'NONE' should be used.
   */
  scanCode: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The item type of this record (e.g. EQUIPMENT, CARGO, PASSENGER).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Array of keys that may be associated to the accepting system data. The entries
   * in this array must correspond to the position index in accSysValues array. This
   * array must be the same length as accSysValues.
   */
  accSysKeys?: Array<string>;

  /**
   * Additional data required to find this item in the accepting system.
   */
  accSysNotes?: string;

  /**
   * Name of the system that accepted this item from a customer. Where a user or
   * application could go look for additional information.
   */
  accSystem?: string;

  /**
   * Array of values for the keys that may be associated to the accepting system
   * data. The entries in this array must correspond to the position index in
   * accSysKeys array. This array must be the same length as accSysKeys.
   */
  accSysValues?: Array<string>;

  /**
   * Flag indicating this item is planned to be airdropped. Applicable for cargo and
   * passenger item types only.
   */
  airdrop?: boolean;

  /**
   * Name of the additional data format so downstream consuming applications can know
   * how to parse it. Typically includes the source system name and the format name.
   */
  altDataFormat?: string;

  /**
   * The type of cargo (e.g. PALLET, ROLLING STOCK, LOOSE, OTHER). Applicable for
   * cargo item types only.
   */
  cargoType?: string;

  /**
   * How far left or right of centerline is the item in meters. Applicable for cargo
   * and passenger item types only.
   */
  centerlineOffset?: number;

  /**
   * Center of gravity position of the item, measured from the item's front datum, in
   * centimeters.
   */
  cg?: number;

  /**
   * The classification code of the commodity or group of commodities.
   */
  commodityCode?: string;

  /**
   * The classification system denoting the commodity code, commodityCode (e.g. AIR,
   * WATER, NMFC, UFC, STCC, DODUNQ, etc.).
   */
  commoditySys?: string;

  /**
   * Flag indicating this item acts as a container and contains additional items.
   */
  container?: boolean;

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
   * The departure code or location where this item has left or is leaving.
   */
  departure?: string;

  /**
   * The destination of the item, typically an ICAO or port code. Applicable for
   * cargo and passenger item types only.
   */
  destination?: string;

  /**
   * United States Distinguished Visitor Code, only applicable to people.
   */
  dvCode?: string;

  /**
   * The fuselage station of the item measured from the reference datum, in
   * centimeters. Applicable for cargo and passenger item types only.
   */
  fs?: number;

  /**
   * Array of UN hazard classes or division codes that apply to this item.
   */
  hazCodes?: Array<number>;

  /**
   * Height of the cargo in meters. Applicable for cargo item types only.
   */
  height?: number;

  /**
   * The UDL ID of the air load plan this item is associated with.
   */
  idAirLoadPlan?: string;

  /**
   * Array of tracking identifiers that are contained within this item.
   */
  itemContains?: Array<string>;

  /**
   * Array of keys that may be associated to this item. The entries in this array
   * must correspond to the position index in the values array. This array must be
   * the same length as values..
   */
  keys?: Array<string>;

  /**
   * The latest acceptable arrival date of the item at the destination, in ISO 8601
   * date-only format (e.g. YYYY-MM-DD).
   */
  lastArrDate?: string;

  /**
   * Length of the cargo in meters. Applicable for cargo item types only.
   */
  length?: number;

  /**
   * Moment of the item in Newton-meters. Applicable for equipment and cargo item
   * types only.
   */
  moment?: number;

  /**
   * Name of the item. Applicable for equipment and cargo item types only.
   */
  name?: string;

  /**
   * Net explosive weight of the item, in kilograms.
   */
  netExpWt?: number;

  /**
   * Optional notes or comments about this item.
   */
  notes?: string;

  /**
   * Number of pallet positions or equivalent on the aircraft, ship, or conveyance
   * equipment that this item occupies.
   */
  numPalletPos?: number;

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
   * The code denoting the type of material item.
   */
  productCode?: string;

  /**
   * The assigning system that denotes the type of material item, productCode (e.g.
   * NSN-national stock number, NDC-national drug code, MPN-manufacturer part number,
   * etc.).
   */
  productSys?: string;

  /**
   * The military branch receiving this item.
   */
  receivingBranch?: string;

  /**
   * The name of the unit receiving this item.
   */
  receivingUnit?: string;

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
   * Transportation Control Number of the cargo. Applicable for cargo item types
   * only.
   */
  tcn?: string;

  /**
   * The unit line number of this item.
   */
  uln?: string;

  /**
   * Array of values for the keys that may be associated to this tracked item. The
   * entries in this array must correspond to the position index in the keys array.
   * This array must be the same length as keys.
   */
  values?: Array<string>;

  /**
   * The volume of the item, in cubic meters. Applicable for cargo item types only.
   */
  volume?: number;

  /**
   * Weight of the item in kilograms (if item is a passenger, include on-person
   * bags).
   */
  weight?: number;

  /**
   * Timestamp when the weight was taken, in ISO 8601 UTC format with millisecond
   * precision.
   */
  weightTS?: string;

  /**
   * Width of the cargo in meters. Applicable for cargo item types only.
   */
  width?: number;
}

export type ItemCountResponse = string;

export interface ItemGetResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The tracking identifier of an item or person. May be similar in representation
   * of a barcode or UPC. If no scanCode or tracking number equivalent is available,
   * 'NONE' should be used.
   */
  scanCode: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The item type of this record (e.g. EQUIPMENT, CARGO, PASSENGER).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Array of keys that may be associated to the accepting system data. The entries
   * in this array must correspond to the position index in accSysValues array. This
   * array must be the same length as accSysValues.
   */
  accSysKeys?: Array<string>;

  /**
   * Additional data required to find this item in the accepting system.
   */
  accSysNotes?: string;

  /**
   * Name of the system that accepted this item from a customer. Where a user or
   * application could go look for additional information.
   */
  accSystem?: string;

  /**
   * Array of values for the keys that may be associated to the accepting system
   * data. The entries in this array must correspond to the position index in
   * accSysKeys array. This array must be the same length as accSysKeys.
   */
  accSysValues?: Array<string>;

  /**
   * Flag indicating this item is planned to be airdropped. Applicable for cargo and
   * passenger item types only.
   */
  airdrop?: boolean;

  /**
   * Name of the additional data format so downstream consuming applications can know
   * how to parse it. Typically includes the source system name and the format name.
   */
  altDataFormat?: string;

  /**
   * The type of cargo (e.g. PALLET, ROLLING STOCK, LOOSE, OTHER). Applicable for
   * cargo item types only.
   */
  cargoType?: string;

  /**
   * How far left or right of centerline is the item in meters. Applicable for cargo
   * and passenger item types only.
   */
  centerlineOffset?: number;

  /**
   * Center of gravity position of the item, measured from the item's front datum, in
   * centimeters.
   */
  cg?: number;

  /**
   * The classification code of the commodity or group of commodities.
   */
  commodityCode?: string;

  /**
   * The classification system denoting the commodity code, commodityCode (e.g. AIR,
   * WATER, NMFC, UFC, STCC, DODUNQ, etc.).
   */
  commoditySys?: string;

  /**
   * Flag indicating this item acts as a container and contains additional items.
   */
  container?: boolean;

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
   * The departure code or location where this item has left or is leaving.
   */
  departure?: string;

  /**
   * The destination of the item, typically an ICAO or port code. Applicable for
   * cargo and passenger item types only.
   */
  destination?: string;

  /**
   * United States Distinguished Visitor Code, only applicable to people.
   */
  dvCode?: string;

  /**
   * The fuselage station of the item measured from the reference datum, in
   * centimeters. Applicable for cargo and passenger item types only.
   */
  fs?: number;

  /**
   * Array of UN hazard classes or division codes that apply to this item.
   */
  hazCodes?: Array<number>;

  /**
   * Height of the cargo in meters. Applicable for cargo item types only.
   */
  height?: number;

  /**
   * The UDL ID of the air load plan this item is associated with.
   */
  idAirLoadPlan?: string;

  /**
   * Array of tracking identifiers that are contained within this item.
   */
  itemContains?: Array<string>;

  /**
   * Array of keys that may be associated to this item. The entries in this array
   * must correspond to the position index in the values array. This array must be
   * the same length as values..
   */
  keys?: Array<string>;

  /**
   * The latest acceptable arrival date of the item at the destination, in ISO 8601
   * date-only format (e.g. YYYY-MM-DD).
   */
  lastArrDate?: string;

  /**
   * Length of the cargo in meters. Applicable for cargo item types only.
   */
  length?: number;

  /**
   * Moment of the item in Newton-meters. Applicable for equipment and cargo item
   * types only.
   */
  moment?: number;

  /**
   * Name of the item. Applicable for equipment and cargo item types only.
   */
  name?: string;

  /**
   * Net explosive weight of the item, in kilograms.
   */
  netExpWt?: number;

  /**
   * Optional notes or comments about this item.
   */
  notes?: string;

  /**
   * Number of pallet positions or equivalent on the aircraft, ship, or conveyance
   * equipment that this item occupies.
   */
  numPalletPos?: number;

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
   * The code denoting the type of material item.
   */
  productCode?: string;

  /**
   * The assigning system that denotes the type of material item, productCode (e.g.
   * NSN-national stock number, NDC-national drug code, MPN-manufacturer part number,
   * etc.).
   */
  productSys?: string;

  /**
   * The military branch receiving this item.
   */
  receivingBranch?: string;

  /**
   * The name of the unit receiving this item.
   */
  receivingUnit?: string;

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
   * Transportation Control Number of the cargo. Applicable for cargo item types
   * only.
   */
  tcn?: string;

  /**
   * The unit line number of this item.
   */
  uln?: string;

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
   * Array of values for the keys that may be associated to this tracked item. The
   * entries in this array must correspond to the position index in the keys array.
   * This array must be the same length as keys.
   */
  values?: Array<string>;

  /**
   * The volume of the item, in cubic meters. Applicable for cargo item types only.
   */
  volume?: number;

  /**
   * Weight of the item in kilograms (if item is a passenger, include on-person
   * bags).
   */
  weight?: number;

  /**
   * Timestamp when the weight was taken, in ISO 8601 UTC format with millisecond
   * precision.
   */
  weightTS?: string;

  /**
   * Width of the cargo in meters. Applicable for cargo item types only.
   */
  width?: number;
}

export interface ItemQueryhelpResponse {
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

export type ItemTupleResponse = Array<ItemTupleResponse.ItemTupleResponseItem>;

export namespace ItemTupleResponse {
  export interface ItemTupleResponseItem {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * The tracking identifier of an item or person. May be similar in representation
     * of a barcode or UPC. If no scanCode or tracking number equivalent is available,
     * 'NONE' should be used.
     */
    scanCode: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The item type of this record (e.g. EQUIPMENT, CARGO, PASSENGER).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Array of keys that may be associated to the accepting system data. The entries
     * in this array must correspond to the position index in accSysValues array. This
     * array must be the same length as accSysValues.
     */
    accSysKeys?: Array<string>;

    /**
     * Additional data required to find this item in the accepting system.
     */
    accSysNotes?: string;

    /**
     * Name of the system that accepted this item from a customer. Where a user or
     * application could go look for additional information.
     */
    accSystem?: string;

    /**
     * Array of values for the keys that may be associated to the accepting system
     * data. The entries in this array must correspond to the position index in
     * accSysKeys array. This array must be the same length as accSysKeys.
     */
    accSysValues?: Array<string>;

    /**
     * Flag indicating this item is planned to be airdropped. Applicable for cargo and
     * passenger item types only.
     */
    airdrop?: boolean;

    /**
     * Name of the additional data format so downstream consuming applications can know
     * how to parse it. Typically includes the source system name and the format name.
     */
    altDataFormat?: string;

    /**
     * The type of cargo (e.g. PALLET, ROLLING STOCK, LOOSE, OTHER). Applicable for
     * cargo item types only.
     */
    cargoType?: string;

    /**
     * How far left or right of centerline is the item in meters. Applicable for cargo
     * and passenger item types only.
     */
    centerlineOffset?: number;

    /**
     * Center of gravity position of the item, measured from the item's front datum, in
     * centimeters.
     */
    cg?: number;

    /**
     * The classification code of the commodity or group of commodities.
     */
    commodityCode?: string;

    /**
     * The classification system denoting the commodity code, commodityCode (e.g. AIR,
     * WATER, NMFC, UFC, STCC, DODUNQ, etc.).
     */
    commoditySys?: string;

    /**
     * Flag indicating this item acts as a container and contains additional items.
     */
    container?: boolean;

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
     * The departure code or location where this item has left or is leaving.
     */
    departure?: string;

    /**
     * The destination of the item, typically an ICAO or port code. Applicable for
     * cargo and passenger item types only.
     */
    destination?: string;

    /**
     * United States Distinguished Visitor Code, only applicable to people.
     */
    dvCode?: string;

    /**
     * The fuselage station of the item measured from the reference datum, in
     * centimeters. Applicable for cargo and passenger item types only.
     */
    fs?: number;

    /**
     * Array of UN hazard classes or division codes that apply to this item.
     */
    hazCodes?: Array<number>;

    /**
     * Height of the cargo in meters. Applicable for cargo item types only.
     */
    height?: number;

    /**
     * The UDL ID of the air load plan this item is associated with.
     */
    idAirLoadPlan?: string;

    /**
     * Array of tracking identifiers that are contained within this item.
     */
    itemContains?: Array<string>;

    /**
     * Array of keys that may be associated to this item. The entries in this array
     * must correspond to the position index in the values array. This array must be
     * the same length as values..
     */
    keys?: Array<string>;

    /**
     * The latest acceptable arrival date of the item at the destination, in ISO 8601
     * date-only format (e.g. YYYY-MM-DD).
     */
    lastArrDate?: string;

    /**
     * Length of the cargo in meters. Applicable for cargo item types only.
     */
    length?: number;

    /**
     * Moment of the item in Newton-meters. Applicable for equipment and cargo item
     * types only.
     */
    moment?: number;

    /**
     * Name of the item. Applicable for equipment and cargo item types only.
     */
    name?: string;

    /**
     * Net explosive weight of the item, in kilograms.
     */
    netExpWt?: number;

    /**
     * Optional notes or comments about this item.
     */
    notes?: string;

    /**
     * Number of pallet positions or equivalent on the aircraft, ship, or conveyance
     * equipment that this item occupies.
     */
    numPalletPos?: number;

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
     * The code denoting the type of material item.
     */
    productCode?: string;

    /**
     * The assigning system that denotes the type of material item, productCode (e.g.
     * NSN-national stock number, NDC-national drug code, MPN-manufacturer part number,
     * etc.).
     */
    productSys?: string;

    /**
     * The military branch receiving this item.
     */
    receivingBranch?: string;

    /**
     * The name of the unit receiving this item.
     */
    receivingUnit?: string;

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
     * Transportation Control Number of the cargo. Applicable for cargo item types
     * only.
     */
    tcn?: string;

    /**
     * The unit line number of this item.
     */
    uln?: string;

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
     * Array of values for the keys that may be associated to this tracked item. The
     * entries in this array must correspond to the position index in the keys array.
     * This array must be the same length as keys.
     */
    values?: Array<string>;

    /**
     * The volume of the item, in cubic meters. Applicable for cargo item types only.
     */
    volume?: number;

    /**
     * Weight of the item in kilograms (if item is a passenger, include on-person
     * bags).
     */
    weight?: number;

    /**
     * Timestamp when the weight was taken, in ISO 8601 UTC format with millisecond
     * precision.
     */
    weightTS?: string;

    /**
     * Width of the cargo in meters. Applicable for cargo item types only.
     */
    width?: number;
  }
}

export interface ItemCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The tracking identifier of an item or person. May be similar in representation
   * of a barcode or UPC. If no scanCode or tracking number equivalent is available,
   * 'NONE' should be used.
   */
  scanCode: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The item type of this record (e.g. EQUIPMENT, CARGO, PASSENGER).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  id?: string;

  /**
   * Array of keys that may be associated to the accepting system data. The entries
   * in this array must correspond to the position index in accSysValues array. This
   * array must be the same length as accSysValues.
   */
  accSysKeys?: Array<string>;

  /**
   * Additional data required to find this item in the accepting system.
   */
  accSysNotes?: string;

  /**
   * Name of the system that accepted this item from a customer. Where a user or
   * application could go look for additional information.
   */
  accSystem?: string;

  /**
   * Array of values for the keys that may be associated to the accepting system
   * data. The entries in this array must correspond to the position index in
   * accSysKeys array. This array must be the same length as accSysKeys.
   */
  accSysValues?: Array<string>;

  /**
   * Flag indicating this item is planned to be airdropped. Applicable for cargo and
   * passenger item types only.
   */
  airdrop?: boolean;

  /**
   * Name of the additional data format so downstream consuming applications can know
   * how to parse it. Typically includes the source system name and the format name.
   */
  altDataFormat?: string;

  /**
   * The type of cargo (e.g. PALLET, ROLLING STOCK, LOOSE, OTHER). Applicable for
   * cargo item types only.
   */
  cargoType?: string;

  /**
   * How far left or right of centerline is the item in meters. Applicable for cargo
   * and passenger item types only.
   */
  centerlineOffset?: number;

  /**
   * Center of gravity position of the item, measured from the item's front datum, in
   * centimeters.
   */
  cg?: number;

  /**
   * The classification code of the commodity or group of commodities.
   */
  commodityCode?: string;

  /**
   * The classification system denoting the commodity code, commodityCode (e.g. AIR,
   * WATER, NMFC, UFC, STCC, DODUNQ, etc.).
   */
  commoditySys?: string;

  /**
   * Flag indicating this item acts as a container and contains additional items.
   */
  container?: boolean;

  /**
   * The departure code or location where this item has left or is leaving.
   */
  departure?: string;

  /**
   * The destination of the item, typically an ICAO or port code. Applicable for
   * cargo and passenger item types only.
   */
  destination?: string;

  /**
   * United States Distinguished Visitor Code, only applicable to people.
   */
  dvCode?: string;

  /**
   * The fuselage station of the item measured from the reference datum, in
   * centimeters. Applicable for cargo and passenger item types only.
   */
  fs?: number;

  /**
   * Array of UN hazard classes or division codes that apply to this item.
   */
  hazCodes?: Array<number>;

  /**
   * Height of the cargo in meters. Applicable for cargo item types only.
   */
  height?: number;

  /**
   * The UDL ID of the air load plan this item is associated with.
   */
  idAirLoadPlan?: string;

  /**
   * Array of tracking identifiers that are contained within this item.
   */
  itemContains?: Array<string>;

  /**
   * Array of keys that may be associated to this item. The entries in this array
   * must correspond to the position index in the values array. This array must be
   * the same length as values..
   */
  keys?: Array<string>;

  /**
   * The latest acceptable arrival date of the item at the destination, in ISO 8601
   * date-only format (e.g. YYYY-MM-DD).
   */
  lastArrDate?: string;

  /**
   * Length of the cargo in meters. Applicable for cargo item types only.
   */
  length?: number;

  /**
   * Moment of the item in Newton-meters. Applicable for equipment and cargo item
   * types only.
   */
  moment?: number;

  /**
   * Name of the item. Applicable for equipment and cargo item types only.
   */
  name?: string;

  /**
   * Net explosive weight of the item, in kilograms.
   */
  netExpWt?: number;

  /**
   * Optional notes or comments about this item.
   */
  notes?: string;

  /**
   * Number of pallet positions or equivalent on the aircraft, ship, or conveyance
   * equipment that this item occupies.
   */
  numPalletPos?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The code denoting the type of material item.
   */
  productCode?: string;

  /**
   * The assigning system that denotes the type of material item, productCode (e.g.
   * NSN-national stock number, NDC-national drug code, MPN-manufacturer part number,
   * etc.).
   */
  productSys?: string;

  /**
   * The military branch receiving this item.
   */
  receivingBranch?: string;

  /**
   * The name of the unit receiving this item.
   */
  receivingUnit?: string;

  /**
   * The algorithm name or standard that generated the scanCode (e.g. UPC-A, EAN-13,
   * GTIN, SSCC, bID, JAN, etc.).
   */
  scGenTool?: string;

  /**
   * Transportation Control Number of the cargo. Applicable for cargo item types
   * only.
   */
  tcn?: string;

  /**
   * The unit line number of this item.
   */
  uln?: string;

  /**
   * Array of values for the keys that may be associated to this tracked item. The
   * entries in this array must correspond to the position index in the keys array.
   * This array must be the same length as keys.
   */
  values?: Array<string>;

  /**
   * The volume of the item, in cubic meters. Applicable for cargo item types only.
   */
  volume?: number;

  /**
   * Weight of the item in kilograms (if item is a passenger, include on-person
   * bags).
   */
  weight?: number;

  /**
   * Timestamp when the weight was taken, in ISO 8601 UTC format with millisecond
   * precision.
   */
  weightTS?: string;

  /**
   * Width of the cargo in meters. Applicable for cargo item types only.
   */
  width?: number;
}

export interface ItemUpdateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
   */
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * The tracking identifier of an item or person. May be similar in representation
   * of a barcode or UPC. If no scanCode or tracking number equivalent is available,
   * 'NONE' should be used.
   */
  scanCode: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The item type of this record (e.g. EQUIPMENT, CARGO, PASSENGER).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system if not provided on
   * create operations.
   */
  body_id?: string;

  /**
   * Array of keys that may be associated to the accepting system data. The entries
   * in this array must correspond to the position index in accSysValues array. This
   * array must be the same length as accSysValues.
   */
  accSysKeys?: Array<string>;

  /**
   * Additional data required to find this item in the accepting system.
   */
  accSysNotes?: string;

  /**
   * Name of the system that accepted this item from a customer. Where a user or
   * application could go look for additional information.
   */
  accSystem?: string;

  /**
   * Array of values for the keys that may be associated to the accepting system
   * data. The entries in this array must correspond to the position index in
   * accSysKeys array. This array must be the same length as accSysKeys.
   */
  accSysValues?: Array<string>;

  /**
   * Flag indicating this item is planned to be airdropped. Applicable for cargo and
   * passenger item types only.
   */
  airdrop?: boolean;

  /**
   * Name of the additional data format so downstream consuming applications can know
   * how to parse it. Typically includes the source system name and the format name.
   */
  altDataFormat?: string;

  /**
   * The type of cargo (e.g. PALLET, ROLLING STOCK, LOOSE, OTHER). Applicable for
   * cargo item types only.
   */
  cargoType?: string;

  /**
   * How far left or right of centerline is the item in meters. Applicable for cargo
   * and passenger item types only.
   */
  centerlineOffset?: number;

  /**
   * Center of gravity position of the item, measured from the item's front datum, in
   * centimeters.
   */
  cg?: number;

  /**
   * The classification code of the commodity or group of commodities.
   */
  commodityCode?: string;

  /**
   * The classification system denoting the commodity code, commodityCode (e.g. AIR,
   * WATER, NMFC, UFC, STCC, DODUNQ, etc.).
   */
  commoditySys?: string;

  /**
   * Flag indicating this item acts as a container and contains additional items.
   */
  container?: boolean;

  /**
   * The departure code or location where this item has left or is leaving.
   */
  departure?: string;

  /**
   * The destination of the item, typically an ICAO or port code. Applicable for
   * cargo and passenger item types only.
   */
  destination?: string;

  /**
   * United States Distinguished Visitor Code, only applicable to people.
   */
  dvCode?: string;

  /**
   * The fuselage station of the item measured from the reference datum, in
   * centimeters. Applicable for cargo and passenger item types only.
   */
  fs?: number;

  /**
   * Array of UN hazard classes or division codes that apply to this item.
   */
  hazCodes?: Array<number>;

  /**
   * Height of the cargo in meters. Applicable for cargo item types only.
   */
  height?: number;

  /**
   * The UDL ID of the air load plan this item is associated with.
   */
  idAirLoadPlan?: string;

  /**
   * Array of tracking identifiers that are contained within this item.
   */
  itemContains?: Array<string>;

  /**
   * Array of keys that may be associated to this item. The entries in this array
   * must correspond to the position index in the values array. This array must be
   * the same length as values..
   */
  keys?: Array<string>;

  /**
   * The latest acceptable arrival date of the item at the destination, in ISO 8601
   * date-only format (e.g. YYYY-MM-DD).
   */
  lastArrDate?: string;

  /**
   * Length of the cargo in meters. Applicable for cargo item types only.
   */
  length?: number;

  /**
   * Moment of the item in Newton-meters. Applicable for equipment and cargo item
   * types only.
   */
  moment?: number;

  /**
   * Name of the item. Applicable for equipment and cargo item types only.
   */
  name?: string;

  /**
   * Net explosive weight of the item, in kilograms.
   */
  netExpWt?: number;

  /**
   * Optional notes or comments about this item.
   */
  notes?: string;

  /**
   * Number of pallet positions or equivalent on the aircraft, ship, or conveyance
   * equipment that this item occupies.
   */
  numPalletPos?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The code denoting the type of material item.
   */
  productCode?: string;

  /**
   * The assigning system that denotes the type of material item, productCode (e.g.
   * NSN-national stock number, NDC-national drug code, MPN-manufacturer part number,
   * etc.).
   */
  productSys?: string;

  /**
   * The military branch receiving this item.
   */
  receivingBranch?: string;

  /**
   * The name of the unit receiving this item.
   */
  receivingUnit?: string;

  /**
   * The algorithm name or standard that generated the scanCode (e.g. UPC-A, EAN-13,
   * GTIN, SSCC, bID, JAN, etc.).
   */
  scGenTool?: string;

  /**
   * Transportation Control Number of the cargo. Applicable for cargo item types
   * only.
   */
  tcn?: string;

  /**
   * The unit line number of this item.
   */
  uln?: string;

  /**
   * Array of values for the keys that may be associated to this tracked item. The
   * entries in this array must correspond to the position index in the keys array.
   * This array must be the same length as keys.
   */
  values?: Array<string>;

  /**
   * The volume of the item, in cubic meters. Applicable for cargo item types only.
   */
  volume?: number;

  /**
   * Weight of the item in kilograms (if item is a passenger, include on-person
   * bags).
   */
  weight?: number;

  /**
   * Timestamp when the weight was taken, in ISO 8601 UTC format with millisecond
   * precision.
   */
  weightTS?: string;

  /**
   * Width of the cargo in meters. Applicable for cargo item types only.
   */
  width?: number;
}

export interface ItemListParams extends OffsetPageParams {}

export interface ItemCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface ItemGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface ItemTupleParams {
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

export interface ItemUnvalidatedPublishParams {
  body: Array<ItemUnvalidatedPublishParams.Body>;
}

export namespace ItemUnvalidatedPublishParams {
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
     */
    dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

    /**
     * The tracking identifier of an item or person. May be similar in representation
     * of a barcode or UPC. If no scanCode or tracking number equivalent is available,
     * 'NONE' should be used.
     */
    scanCode: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The item type of this record (e.g. EQUIPMENT, CARGO, PASSENGER).
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system if not provided on
     * create operations.
     */
    id?: string;

    /**
     * Array of keys that may be associated to the accepting system data. The entries
     * in this array must correspond to the position index in accSysValues array. This
     * array must be the same length as accSysValues.
     */
    accSysKeys?: Array<string>;

    /**
     * Additional data required to find this item in the accepting system.
     */
    accSysNotes?: string;

    /**
     * Name of the system that accepted this item from a customer. Where a user or
     * application could go look for additional information.
     */
    accSystem?: string;

    /**
     * Array of values for the keys that may be associated to the accepting system
     * data. The entries in this array must correspond to the position index in
     * accSysKeys array. This array must be the same length as accSysKeys.
     */
    accSysValues?: Array<string>;

    /**
     * Flag indicating this item is planned to be airdropped. Applicable for cargo and
     * passenger item types only.
     */
    airdrop?: boolean;

    /**
     * Name of the additional data format so downstream consuming applications can know
     * how to parse it. Typically includes the source system name and the format name.
     */
    altDataFormat?: string;

    /**
     * The type of cargo (e.g. PALLET, ROLLING STOCK, LOOSE, OTHER). Applicable for
     * cargo item types only.
     */
    cargoType?: string;

    /**
     * How far left or right of centerline is the item in meters. Applicable for cargo
     * and passenger item types only.
     */
    centerlineOffset?: number;

    /**
     * Center of gravity position of the item, measured from the item's front datum, in
     * centimeters.
     */
    cg?: number;

    /**
     * The classification code of the commodity or group of commodities.
     */
    commodityCode?: string;

    /**
     * The classification system denoting the commodity code, commodityCode (e.g. AIR,
     * WATER, NMFC, UFC, STCC, DODUNQ, etc.).
     */
    commoditySys?: string;

    /**
     * Flag indicating this item acts as a container and contains additional items.
     */
    container?: boolean;

    /**
     * The departure code or location where this item has left or is leaving.
     */
    departure?: string;

    /**
     * The destination of the item, typically an ICAO or port code. Applicable for
     * cargo and passenger item types only.
     */
    destination?: string;

    /**
     * United States Distinguished Visitor Code, only applicable to people.
     */
    dvCode?: string;

    /**
     * The fuselage station of the item measured from the reference datum, in
     * centimeters. Applicable for cargo and passenger item types only.
     */
    fs?: number;

    /**
     * Array of UN hazard classes or division codes that apply to this item.
     */
    hazCodes?: Array<number>;

    /**
     * Height of the cargo in meters. Applicable for cargo item types only.
     */
    height?: number;

    /**
     * The UDL ID of the air load plan this item is associated with.
     */
    idAirLoadPlan?: string;

    /**
     * Array of tracking identifiers that are contained within this item.
     */
    itemContains?: Array<string>;

    /**
     * Array of keys that may be associated to this item. The entries in this array
     * must correspond to the position index in the values array. This array must be
     * the same length as values..
     */
    keys?: Array<string>;

    /**
     * The latest acceptable arrival date of the item at the destination, in ISO 8601
     * date-only format (e.g. YYYY-MM-DD).
     */
    lastArrDate?: string;

    /**
     * Length of the cargo in meters. Applicable for cargo item types only.
     */
    length?: number;

    /**
     * Moment of the item in Newton-meters. Applicable for equipment and cargo item
     * types only.
     */
    moment?: number;

    /**
     * Name of the item. Applicable for equipment and cargo item types only.
     */
    name?: string;

    /**
     * Net explosive weight of the item, in kilograms.
     */
    netExpWt?: number;

    /**
     * Optional notes or comments about this item.
     */
    notes?: string;

    /**
     * Number of pallet positions or equivalent on the aircraft, ship, or conveyance
     * equipment that this item occupies.
     */
    numPalletPos?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The code denoting the type of material item.
     */
    productCode?: string;

    /**
     * The assigning system that denotes the type of material item, productCode (e.g.
     * NSN-national stock number, NDC-national drug code, MPN-manufacturer part number,
     * etc.).
     */
    productSys?: string;

    /**
     * The military branch receiving this item.
     */
    receivingBranch?: string;

    /**
     * The name of the unit receiving this item.
     */
    receivingUnit?: string;

    /**
     * The algorithm name or standard that generated the scanCode (e.g. UPC-A, EAN-13,
     * GTIN, SSCC, bID, JAN, etc.).
     */
    scGenTool?: string;

    /**
     * Transportation Control Number of the cargo. Applicable for cargo item types
     * only.
     */
    tcn?: string;

    /**
     * The unit line number of this item.
     */
    uln?: string;

    /**
     * Array of values for the keys that may be associated to this tracked item. The
     * entries in this array must correspond to the position index in the keys array.
     * This array must be the same length as keys.
     */
    values?: Array<string>;

    /**
     * The volume of the item, in cubic meters. Applicable for cargo item types only.
     */
    volume?: number;

    /**
     * Weight of the item in kilograms (if item is a passenger, include on-person
     * bags).
     */
    weight?: number;

    /**
     * Timestamp when the weight was taken, in ISO 8601 UTC format with millisecond
     * precision.
     */
    weightTS?: string;

    /**
     * Width of the cargo in meters. Applicable for cargo item types only.
     */
    width?: number;
  }
}

export declare namespace Item {
  export {
    type ItemListResponse as ItemListResponse,
    type ItemCountResponse as ItemCountResponse,
    type ItemGetResponse as ItemGetResponse,
    type ItemQueryhelpResponse as ItemQueryhelpResponse,
    type ItemTupleResponse as ItemTupleResponse,
    type ItemListResponsesOffsetPage as ItemListResponsesOffsetPage,
    type ItemCreateParams as ItemCreateParams,
    type ItemUpdateParams as ItemUpdateParams,
    type ItemListParams as ItemListParams,
    type ItemCountParams as ItemCountParams,
    type ItemGetParams as ItemGetParams,
    type ItemTupleParams as ItemTupleParams,
    type ItemUnvalidatedPublishParams as ItemUnvalidatedPublishParams,
  };
}
