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

export class NavigationalObstruction extends APIResource {
  /**
   * Service operation to take a single navigational obstruction record as a POST
   * body and ingest into the database. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.navigationalObstruction.create({
   *   classificationMarking: 'U',
   *   cycleDate: '2024-06-13',
   *   dataMode: 'TEST',
   *   obstacleId: '359655',
   *   obstacleType: 'V',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: NavigationalObstructionCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/navigationalobstruction', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single navigational obstruction record. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   *
   * @example
   * ```ts
   * await client.navigationalObstruction.update('id', {
   *   classificationMarking: 'U',
   *   cycleDate: '2024-06-13',
   *   dataMode: 'TEST',
   *   obstacleId: '359655',
   *   obstacleType: 'V',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(
    pathID: string,
    body: NavigationalObstructionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(path`/udl/navigationalobstruction/${pathID}`, {
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
   * for await (const navigationalObstructionListResponse of client.navigationalObstruction.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: NavigationalObstructionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NavigationalObstructionListResponsesOffsetPage, NavigationalObstructionListResponse> {
    return this._client.getAPIList(
      '/udl/navigationalobstruction',
      OffsetPage<NavigationalObstructionListResponse>,
      { query, ...options },
    );
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
   *   await client.navigationalObstruction.count();
   * ```
   */
  count(
    query: NavigationalObstructionCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/navigationalobstruction/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * navigational obstruction records as a POST body and ingest into the database.
   * This operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   *
   * @example
   * ```ts
   * await client.navigationalObstruction.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       cycleDate: '2024-06-13',
   *       dataMode: 'TEST',
   *       obstacleId: '359655',
   *       obstacleType: 'V',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: NavigationalObstructionCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/navigationalobstruction/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single navigational obstruction record by its unique
   * ID passed as a path parameter.
   *
   * @example
   * ```ts
   * const navigationalObstruction =
   *   await client.navigationalObstruction.get('id');
   * ```
   */
  get(
    id: string,
    query: NavigationalObstructionGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NavigationalObstructionGetResponse> {
    return this._client.get(path`/udl/navigationalobstruction/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.navigationalObstruction.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<NavigationalObstructionQueryhelpResponse> {
    return this._client.get('/udl/navigationalobstruction/queryhelp', options);
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
   * const response = await client.navigationalObstruction.tuple(
   *   { columns: 'columns' },
   * );
   * ```
   */
  tuple(
    query: NavigationalObstructionTupleParams,
    options?: RequestOptions,
  ): APIPromise<NavigationalObstructionTupleResponse> {
    return this._client.get('/udl/navigationalobstruction/tuple', { query, ...options });
  }
}

export type NavigationalObstructionListResponsesOffsetPage = OffsetPage<NavigationalObstructionListResponse>;

/**
 * Beta Version Navigational Obstruction: Information describing navigational
 * obstructions, such as applicable boundaries, locations, heights, data ownership,
 * and currency.
 */
export interface NavigationalObstructionListResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Start date of this obstruction data set's currency, in ISO 8601 date-only
   * format.
   */
  cycleDate: string;

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
   * The ID of this obstacle.
   */
  obstacleId: string;

  /**
   * Type of obstacle (e.g. P for point, V for vector, L for line).
   */
  obstacleType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Indicates if this obstacle record is Active (A) or Deleted (D).
   */
  actDelCode?: string;

  /**
   * The Aeronautical Information Regulation and Control (AIRAC) cycle of this
   * obstruction data set. The format is YYNN where YY is the last two digits of the
   * year and NN is the cycle number.
   */
  airacCycle?: number;

  /**
   * The baseline Aeronautical Information Regulation and Control (AIRAC) cycle for
   * change sets only. The format is YYNN where YY is the last two digits of the year
   * and NN is the cycle number.
   */
  baseAiracCycle?: number;

  /**
   * Earliest record date possible in this obstruction data set (not the earliest
   * data item), in ISO 8601 date-only format (e.g. YYYY-MM-DD). If null, this data
   * set is assumed to be a full data pull of holdings until the cutoffDate. If this
   * field is populated, this data set only contains updates since the last baseline
   * data set.
   */
  baselineCutoffDate?: string;

  /**
   * WGS-84 latitude of the northeastern boundary for obstructions contained in this
   * data set, in degrees. -90 to 90 degrees (negative values south of equator).
   */
  boundNELat?: number;

  /**
   * WGS-84 longitude of the northeastern boundary for obstructions contained in this
   * data set, in degrees. -180 to 180 degrees (negative values west of Prime
   * Meridian).
   */
  boundNELon?: number;

  /**
   * WGS-84 latitude of the southwestern boundary for obstructions contained in this
   * data set, in degrees. -90 to 90 degrees (negative values south of equator).
   */
  boundSWLat?: number;

  /**
   * WGS-84 longitude of the southwestern boundary for obstructions contained in this
   * data set, in degrees. -180 to 180 degrees (negative values west of Prime
   * Meridian).
   */
  boundSWLon?: number;

  /**
   * The DoD Standard Country Code designator for the country issuing the diplomatic
   * clearance. This field will be set to "OTHR" if the source value does not match a
   * UDL Country code value (ISO-3166-ALPHA-2).
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
   * Latest record date possible in this obstruction data set (not the most recent
   * data item), in ISO 8601 date-only format (e.g. YYYY-MM-DD).
   */
  cutoffDate?: string;

  /**
   * Remarks concerning this obstruction's data set.
   */
  dataSetRemarks?: string;

  /**
   * The organization that deleted this obstacle record.
   */
  deletingOrg?: string;

  /**
   * The organization that entered obstacle data other than the producer.
   */
  derivingOrg?: string;

  /**
   * The side or sides of this obstruction feature which produces the greatest
   * reflectivity potential.
   */
  directivityCode?: number;

  /**
   * The elevation at the point obstacle's location in feet.
   */
  elevation?: number;

  /**
   * The difference between the assigned elevation of this point and its true
   * elevation, in feet.
   */
  elevationAcc?: number;

  /**
   * Optional obstacle ID from external systems. This field has no meaning within UDL
   * and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  externalId?: string;

  /**
   * FACC (Feature and Attribute Coding Catalog) is a five-character code for
   * encoding real-world entities and objects. The first letter of the code is an
   * alphabetic value from "A" to "Z" which will map to a feature category. The
   * second character will map to a subcategory. Characters three to five are numeric
   * and range from 000 to 999. This value will provide a unit feature type
   * identification within the categories.
   */
  facc?: string;

  /**
   * Identifying code for the type of this point obstacle.
   */
  featureCode?: string;

  /**
   * Description of this obstacle, corresponding to the FACC (Feature and Attribute
   * Coding Catalog) value.
   */
  featureDescription?: string;

  /**
   * Type name of point obstacle.
   */
  featureName?: string;

  /**
   * Identifying code for the type of this point obstacle.
   */
  featureType?: string;

  /**
   * The height Above Ground Level (AGL) of the point obstacle in feet.
   */
  heightAGL?: number;

  /**
   * The accuracy of the height Above Ground Level (AGL) value for this point
   * obstacle, in feet.
   */
  heightAGLAcc?: number;

  /**
   * The height Above Mean Sea Level (AMSL) of the point obstacle in feet.
   */
  heightMSL?: number;

  /**
   * The accuracy of the height Above Mean Sea Level (AMSL) value for this point
   * obstacle in feet.
   */
  heightMSLAcc?: number;

  /**
   * The difference between the recorded horizontal coordinates of this point
   * obstacle and its true position, in feet.
   */
  horizAcc?: number;

  /**
   * Code representing the mathematical model of Earth used to calculate coordinates
   * for this obstacle (e.g. WGS-84, U for undetermined, etc.). US Forces use the
   * World Geodetic System 1984 (WGS-84), but also use maps by allied countries with
   * local datums.
   */
  horizDatumCode?: string;

  /**
   * Date this obstacle was initially added to the data set, in ISO 8601 date-only
   * format (ex. YYYY-MM-DD).
   */
  initRecordDate?: string;

  /**
   * This field provides an array of keys that can be added to any obstruction
   * feature to provide information that is not already supported. The entries in
   * this array must correspond to the position index in the values array. This array
   * must be the same length as values.
   */
  keys?: Array<string>;

  /**
   * Code specifying if this obstacle is lit (e.g. Y = Yes, N = No, U = Unknown).
   */
  lightingCode?: string;

  /**
   * WGS-84 latitude of the northeastern point of the line, in degrees. -90 to 90
   * degrees (negative values south of equator).
   */
  lineNELat?: number;

  /**
   * WGS-84 longitude of the northeastern point of the line, in degrees. -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  lineNELon?: number;

  /**
   * The name of the line file associated with this obstruction data set.
   */
  linesFilename?: string;

  /**
   * WGS-84 latitude of the southwestern point of the line, in degrees. -90 to 90
   * degrees (negative values south of equator).
   */
  lineSWLat?: number;

  /**
   * WGS-84 longitude of the southwestern point of the line, in degrees. -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  lineSWLon?: number;

  /**
   * The minimum height Above Ground Level (AGL) of the shortest obstruction
   * contained in this data set, in feet.
   */
  minHeightAGL?: number;

  /**
   * Indicates if the feature has multiple obstructions (e.g. S = Single, M =
   * Multiple, U = Undetermined).
   */
  multObs?: string;

  /**
   * The date after which this obstruction data set’s currency is stale and should be
   * refreshed, in ISO 8601 date-only format (e.g. YYYY-MM-DD).
   */
  nextCycleDate?: string;

  /**
   * The number of line features associated with this obstruction data set.
   */
  numLines?: number;

  /**
   * Indicates the number of obstructions associated with a feature.
   */
  numObs?: number;

  /**
   * The number of point features associated with this obstruction data set.
   */
  numPoints?: number;

  /**
   * Remarks regarding this obstacle.
   */
  obstacleRemarks?: string;

  /**
   * The original ID for this obstacle.
   */
  origId?: string;

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
   * The DoD Standard Country Code designator for the country or political entity
   * that owns the data set associated with this obstruction. This field will be set
   * to "OTHR" if the source value does not match a UDL Country code value
   * (ISO-3166-ALPHA-2).
   */
  ownerCountryCode?: string;

  /**
   * WGS-84 latitude of this point obstacle, in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  pointLat?: number;

  /**
   * WGS-84 longitude of this point obstacle, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  pointLon?: number;

  /**
   * The name of the point file associated with this obstruction data set.
   */
  pointsFilename?: string;

  /**
   * Code denoting the action, review, or process that updated this obstacle.
   */
  processCode?: string;

  /**
   * Name of the agency that produced this obstruction data set.
   */
  producer?: string;

  /**
   * The Federal Information Processing Standards (FIPS) state/province numeric code
   * of this obstacle's location.
   */
  provinceCode?: string;

  /**
   * When horizontal and/or vertical accuracy requirements cannot be met because of
   * inadequate source material, this code indicates the quality of the data.
   */
  quality?: string;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * Date this obstacle data was revised, in ISO 8601 date-only format (ex.
   * YYYY-MM-DD).
   */
  revDate?: string;

  /**
   * ID of the end point of a line segment.
   */
  segEndPoint?: number;

  /**
   * Identifies the sequence number of a line segment.
   */
  segNum?: number;

  /**
   * ID of the starting point of a line segment.
   */
  segStartPoint?: number;

  /**
   * Source date of this obstacle data, in ISO 8601 date-only format (ex.
   * YYYY-MM-DD).
   */
  sourceDate?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The surface material composition code of this point obstacle.
   */
  surfaceMatCode?: string;

  /**
   * The transaction type/code for this obstacle (e.g. "D", "N", "R", "S", "V", "X").
   */
  transactionCode?: string;

  /**
   * Method used to confirm the existence of this obstacle.
   */
  validationCode?: number;

  /**
   * This field provides an array of values that can be added to any obstruction
   * feature to provide information that is not already supported. The entries in
   * this array must correspond to the position index in the keys array. This array
   * must be the same length as keys.
   */
  values?: Array<string>;

  /**
   * The name of the vector file associated with this obstruction data set.
   */
  vectorsFilename?: string;

  /**
   * The World Aeronautical Chart (WAC) identifier for the area in which this
   * obstacle is located.
   */
  wac?: string;

  /**
   * This obstacle's World Area Code installation number (WAC-INNR).
   */
  wacINNR?: string;
}

export type NavigationalObstructionCountResponse = string;

/**
 * Beta Version Navigational Obstruction: Information describing navigational
 * obstructions, such as applicable boundaries, locations, heights, data ownership,
 * and currency.
 */
export interface NavigationalObstructionGetResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Start date of this obstruction data set's currency, in ISO 8601 date-only
   * format.
   */
  cycleDate: string;

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
   * The ID of this obstacle.
   */
  obstacleId: string;

  /**
   * Type of obstacle (e.g. P for point, V for vector, L for line).
   */
  obstacleType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Indicates if this obstacle record is Active (A) or Deleted (D).
   */
  actDelCode?: string;

  /**
   * The Aeronautical Information Regulation and Control (AIRAC) cycle of this
   * obstruction data set. The format is YYNN where YY is the last two digits of the
   * year and NN is the cycle number.
   */
  airacCycle?: number;

  /**
   * The baseline Aeronautical Information Regulation and Control (AIRAC) cycle for
   * change sets only. The format is YYNN where YY is the last two digits of the year
   * and NN is the cycle number.
   */
  baseAiracCycle?: number;

  /**
   * Earliest record date possible in this obstruction data set (not the earliest
   * data item), in ISO 8601 date-only format (e.g. YYYY-MM-DD). If null, this data
   * set is assumed to be a full data pull of holdings until the cutoffDate. If this
   * field is populated, this data set only contains updates since the last baseline
   * data set.
   */
  baselineCutoffDate?: string;

  /**
   * WGS-84 latitude of the northeastern boundary for obstructions contained in this
   * data set, in degrees. -90 to 90 degrees (negative values south of equator).
   */
  boundNELat?: number;

  /**
   * WGS-84 longitude of the northeastern boundary for obstructions contained in this
   * data set, in degrees. -180 to 180 degrees (negative values west of Prime
   * Meridian).
   */
  boundNELon?: number;

  /**
   * WGS-84 latitude of the southwestern boundary for obstructions contained in this
   * data set, in degrees. -90 to 90 degrees (negative values south of equator).
   */
  boundSWLat?: number;

  /**
   * WGS-84 longitude of the southwestern boundary for obstructions contained in this
   * data set, in degrees. -180 to 180 degrees (negative values west of Prime
   * Meridian).
   */
  boundSWLon?: number;

  /**
   * The DoD Standard Country Code designator for the country issuing the diplomatic
   * clearance. This field will be set to "OTHR" if the source value does not match a
   * UDL Country code value (ISO-3166-ALPHA-2).
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
   * Latest record date possible in this obstruction data set (not the most recent
   * data item), in ISO 8601 date-only format (e.g. YYYY-MM-DD).
   */
  cutoffDate?: string;

  /**
   * Remarks concerning this obstruction's data set.
   */
  dataSetRemarks?: string;

  /**
   * The organization that deleted this obstacle record.
   */
  deletingOrg?: string;

  /**
   * The organization that entered obstacle data other than the producer.
   */
  derivingOrg?: string;

  /**
   * The side or sides of this obstruction feature which produces the greatest
   * reflectivity potential.
   */
  directivityCode?: number;

  /**
   * The elevation at the point obstacle's location in feet.
   */
  elevation?: number;

  /**
   * The difference between the assigned elevation of this point and its true
   * elevation, in feet.
   */
  elevationAcc?: number;

  /**
   * Optional obstacle ID from external systems. This field has no meaning within UDL
   * and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  externalId?: string;

  /**
   * FACC (Feature and Attribute Coding Catalog) is a five-character code for
   * encoding real-world entities and objects. The first letter of the code is an
   * alphabetic value from "A" to "Z" which will map to a feature category. The
   * second character will map to a subcategory. Characters three to five are numeric
   * and range from 000 to 999. This value will provide a unit feature type
   * identification within the categories.
   */
  facc?: string;

  /**
   * Identifying code for the type of this point obstacle.
   */
  featureCode?: string;

  /**
   * Description of this obstacle, corresponding to the FACC (Feature and Attribute
   * Coding Catalog) value.
   */
  featureDescription?: string;

  /**
   * Type name of point obstacle.
   */
  featureName?: string;

  /**
   * Identifying code for the type of this point obstacle.
   */
  featureType?: string;

  /**
   * The height Above Ground Level (AGL) of the point obstacle in feet.
   */
  heightAGL?: number;

  /**
   * The accuracy of the height Above Ground Level (AGL) value for this point
   * obstacle, in feet.
   */
  heightAGLAcc?: number;

  /**
   * The height Above Mean Sea Level (AMSL) of the point obstacle in feet.
   */
  heightMSL?: number;

  /**
   * The accuracy of the height Above Mean Sea Level (AMSL) value for this point
   * obstacle in feet.
   */
  heightMSLAcc?: number;

  /**
   * The difference between the recorded horizontal coordinates of this point
   * obstacle and its true position, in feet.
   */
  horizAcc?: number;

  /**
   * Code representing the mathematical model of Earth used to calculate coordinates
   * for this obstacle (e.g. WGS-84, U for undetermined, etc.). US Forces use the
   * World Geodetic System 1984 (WGS-84), but also use maps by allied countries with
   * local datums.
   */
  horizDatumCode?: string;

  /**
   * Date this obstacle was initially added to the data set, in ISO 8601 date-only
   * format (ex. YYYY-MM-DD).
   */
  initRecordDate?: string;

  /**
   * This field provides an array of keys that can be added to any obstruction
   * feature to provide information that is not already supported. The entries in
   * this array must correspond to the position index in the values array. This array
   * must be the same length as values.
   */
  keys?: Array<string>;

  /**
   * Code specifying if this obstacle is lit (e.g. Y = Yes, N = No, U = Unknown).
   */
  lightingCode?: string;

  /**
   * WGS-84 latitude of the northeastern point of the line, in degrees. -90 to 90
   * degrees (negative values south of equator).
   */
  lineNELat?: number;

  /**
   * WGS-84 longitude of the northeastern point of the line, in degrees. -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  lineNELon?: number;

  /**
   * The name of the line file associated with this obstruction data set.
   */
  linesFilename?: string;

  /**
   * WGS-84 latitude of the southwestern point of the line, in degrees. -90 to 90
   * degrees (negative values south of equator).
   */
  lineSWLat?: number;

  /**
   * WGS-84 longitude of the southwestern point of the line, in degrees. -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  lineSWLon?: number;

  /**
   * The minimum height Above Ground Level (AGL) of the shortest obstruction
   * contained in this data set, in feet.
   */
  minHeightAGL?: number;

  /**
   * Indicates if the feature has multiple obstructions (e.g. S = Single, M =
   * Multiple, U = Undetermined).
   */
  multObs?: string;

  /**
   * The date after which this obstruction data set’s currency is stale and should be
   * refreshed, in ISO 8601 date-only format (e.g. YYYY-MM-DD).
   */
  nextCycleDate?: string;

  /**
   * The number of line features associated with this obstruction data set.
   */
  numLines?: number;

  /**
   * Indicates the number of obstructions associated with a feature.
   */
  numObs?: number;

  /**
   * The number of point features associated with this obstruction data set.
   */
  numPoints?: number;

  /**
   * Remarks regarding this obstacle.
   */
  obstacleRemarks?: string;

  /**
   * The original ID for this obstacle.
   */
  origId?: string;

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
   * The DoD Standard Country Code designator for the country or political entity
   * that owns the data set associated with this obstruction. This field will be set
   * to "OTHR" if the source value does not match a UDL Country code value
   * (ISO-3166-ALPHA-2).
   */
  ownerCountryCode?: string;

  /**
   * WGS-84 latitude of this point obstacle, in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  pointLat?: number;

  /**
   * WGS-84 longitude of this point obstacle, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  pointLon?: number;

  /**
   * The name of the point file associated with this obstruction data set.
   */
  pointsFilename?: string;

  /**
   * Code denoting the action, review, or process that updated this obstacle.
   */
  processCode?: string;

  /**
   * Name of the agency that produced this obstruction data set.
   */
  producer?: string;

  /**
   * The Federal Information Processing Standards (FIPS) state/province numeric code
   * of this obstacle's location.
   */
  provinceCode?: string;

  /**
   * When horizontal and/or vertical accuracy requirements cannot be met because of
   * inadequate source material, this code indicates the quality of the data.
   */
  quality?: string;

  /**
   * Optional URI location in the document repository of the raw file parsed by the
   * system to produce this record. To download the raw file, prepend
   * https://udl-hostname/scs/download?id= to this value.
   */
  rawFileURI?: string;

  /**
   * Date this obstacle data was revised, in ISO 8601 date-only format (ex.
   * YYYY-MM-DD).
   */
  revDate?: string;

  /**
   * ID of the end point of a line segment.
   */
  segEndPoint?: number;

  /**
   * Identifies the sequence number of a line segment.
   */
  segNum?: number;

  /**
   * ID of the starting point of a line segment.
   */
  segStartPoint?: number;

  /**
   * Source date of this obstacle data, in ISO 8601 date-only format (ex.
   * YYYY-MM-DD).
   */
  sourceDate?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The surface material composition code of this point obstacle.
   */
  surfaceMatCode?: string;

  /**
   * The transaction type/code for this obstacle (e.g. "D", "N", "R", "S", "V", "X").
   */
  transactionCode?: string;

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
   * Method used to confirm the existence of this obstacle.
   */
  validationCode?: number;

  /**
   * This field provides an array of values that can be added to any obstruction
   * feature to provide information that is not already supported. The entries in
   * this array must correspond to the position index in the keys array. This array
   * must be the same length as keys.
   */
  values?: Array<string>;

  /**
   * The name of the vector file associated with this obstruction data set.
   */
  vectorsFilename?: string;

  /**
   * The World Aeronautical Chart (WAC) identifier for the area in which this
   * obstacle is located.
   */
  wac?: string;

  /**
   * This obstacle's World Area Code installation number (WAC-INNR).
   */
  wacINNR?: string;
}

export interface NavigationalObstructionQueryhelpResponse {
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

export type NavigationalObstructionTupleResponse =
  Array<NavigationalObstructionTupleResponse.NavigationalObstructionTupleResponseItem>;

export namespace NavigationalObstructionTupleResponse {
  /**
   * Beta Version Navigational Obstruction: Information describing navigational
   * obstructions, such as applicable boundaries, locations, heights, data ownership,
   * and currency.
   */
  export interface NavigationalObstructionTupleResponseItem {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Start date of this obstruction data set's currency, in ISO 8601 date-only
     * format.
     */
    cycleDate: string;

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
     * The ID of this obstacle.
     */
    obstacleId: string;

    /**
     * Type of obstacle (e.g. P for point, V for vector, L for line).
     */
    obstacleType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Indicates if this obstacle record is Active (A) or Deleted (D).
     */
    actDelCode?: string;

    /**
     * The Aeronautical Information Regulation and Control (AIRAC) cycle of this
     * obstruction data set. The format is YYNN where YY is the last two digits of the
     * year and NN is the cycle number.
     */
    airacCycle?: number;

    /**
     * The baseline Aeronautical Information Regulation and Control (AIRAC) cycle for
     * change sets only. The format is YYNN where YY is the last two digits of the year
     * and NN is the cycle number.
     */
    baseAiracCycle?: number;

    /**
     * Earliest record date possible in this obstruction data set (not the earliest
     * data item), in ISO 8601 date-only format (e.g. YYYY-MM-DD). If null, this data
     * set is assumed to be a full data pull of holdings until the cutoffDate. If this
     * field is populated, this data set only contains updates since the last baseline
     * data set.
     */
    baselineCutoffDate?: string;

    /**
     * WGS-84 latitude of the northeastern boundary for obstructions contained in this
     * data set, in degrees. -90 to 90 degrees (negative values south of equator).
     */
    boundNELat?: number;

    /**
     * WGS-84 longitude of the northeastern boundary for obstructions contained in this
     * data set, in degrees. -180 to 180 degrees (negative values west of Prime
     * Meridian).
     */
    boundNELon?: number;

    /**
     * WGS-84 latitude of the southwestern boundary for obstructions contained in this
     * data set, in degrees. -90 to 90 degrees (negative values south of equator).
     */
    boundSWLat?: number;

    /**
     * WGS-84 longitude of the southwestern boundary for obstructions contained in this
     * data set, in degrees. -180 to 180 degrees (negative values west of Prime
     * Meridian).
     */
    boundSWLon?: number;

    /**
     * The DoD Standard Country Code designator for the country issuing the diplomatic
     * clearance. This field will be set to "OTHR" if the source value does not match a
     * UDL Country code value (ISO-3166-ALPHA-2).
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
     * Latest record date possible in this obstruction data set (not the most recent
     * data item), in ISO 8601 date-only format (e.g. YYYY-MM-DD).
     */
    cutoffDate?: string;

    /**
     * Remarks concerning this obstruction's data set.
     */
    dataSetRemarks?: string;

    /**
     * The organization that deleted this obstacle record.
     */
    deletingOrg?: string;

    /**
     * The organization that entered obstacle data other than the producer.
     */
    derivingOrg?: string;

    /**
     * The side or sides of this obstruction feature which produces the greatest
     * reflectivity potential.
     */
    directivityCode?: number;

    /**
     * The elevation at the point obstacle's location in feet.
     */
    elevation?: number;

    /**
     * The difference between the assigned elevation of this point and its true
     * elevation, in feet.
     */
    elevationAcc?: number;

    /**
     * Optional obstacle ID from external systems. This field has no meaning within UDL
     * and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalId?: string;

    /**
     * FACC (Feature and Attribute Coding Catalog) is a five-character code for
     * encoding real-world entities and objects. The first letter of the code is an
     * alphabetic value from "A" to "Z" which will map to a feature category. The
     * second character will map to a subcategory. Characters three to five are numeric
     * and range from 000 to 999. This value will provide a unit feature type
     * identification within the categories.
     */
    facc?: string;

    /**
     * Identifying code for the type of this point obstacle.
     */
    featureCode?: string;

    /**
     * Description of this obstacle, corresponding to the FACC (Feature and Attribute
     * Coding Catalog) value.
     */
    featureDescription?: string;

    /**
     * Type name of point obstacle.
     */
    featureName?: string;

    /**
     * Identifying code for the type of this point obstacle.
     */
    featureType?: string;

    /**
     * The height Above Ground Level (AGL) of the point obstacle in feet.
     */
    heightAGL?: number;

    /**
     * The accuracy of the height Above Ground Level (AGL) value for this point
     * obstacle, in feet.
     */
    heightAGLAcc?: number;

    /**
     * The height Above Mean Sea Level (AMSL) of the point obstacle in feet.
     */
    heightMSL?: number;

    /**
     * The accuracy of the height Above Mean Sea Level (AMSL) value for this point
     * obstacle in feet.
     */
    heightMSLAcc?: number;

    /**
     * The difference between the recorded horizontal coordinates of this point
     * obstacle and its true position, in feet.
     */
    horizAcc?: number;

    /**
     * Code representing the mathematical model of Earth used to calculate coordinates
     * for this obstacle (e.g. WGS-84, U for undetermined, etc.). US Forces use the
     * World Geodetic System 1984 (WGS-84), but also use maps by allied countries with
     * local datums.
     */
    horizDatumCode?: string;

    /**
     * Date this obstacle was initially added to the data set, in ISO 8601 date-only
     * format (ex. YYYY-MM-DD).
     */
    initRecordDate?: string;

    /**
     * This field provides an array of keys that can be added to any obstruction
     * feature to provide information that is not already supported. The entries in
     * this array must correspond to the position index in the values array. This array
     * must be the same length as values.
     */
    keys?: Array<string>;

    /**
     * Code specifying if this obstacle is lit (e.g. Y = Yes, N = No, U = Unknown).
     */
    lightingCode?: string;

    /**
     * WGS-84 latitude of the northeastern point of the line, in degrees. -90 to 90
     * degrees (negative values south of equator).
     */
    lineNELat?: number;

    /**
     * WGS-84 longitude of the northeastern point of the line, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian).
     */
    lineNELon?: number;

    /**
     * The name of the line file associated with this obstruction data set.
     */
    linesFilename?: string;

    /**
     * WGS-84 latitude of the southwestern point of the line, in degrees. -90 to 90
     * degrees (negative values south of equator).
     */
    lineSWLat?: number;

    /**
     * WGS-84 longitude of the southwestern point of the line, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian).
     */
    lineSWLon?: number;

    /**
     * The minimum height Above Ground Level (AGL) of the shortest obstruction
     * contained in this data set, in feet.
     */
    minHeightAGL?: number;

    /**
     * Indicates if the feature has multiple obstructions (e.g. S = Single, M =
     * Multiple, U = Undetermined).
     */
    multObs?: string;

    /**
     * The date after which this obstruction data set’s currency is stale and should be
     * refreshed, in ISO 8601 date-only format (e.g. YYYY-MM-DD).
     */
    nextCycleDate?: string;

    /**
     * The number of line features associated with this obstruction data set.
     */
    numLines?: number;

    /**
     * Indicates the number of obstructions associated with a feature.
     */
    numObs?: number;

    /**
     * The number of point features associated with this obstruction data set.
     */
    numPoints?: number;

    /**
     * Remarks regarding this obstacle.
     */
    obstacleRemarks?: string;

    /**
     * The original ID for this obstacle.
     */
    origId?: string;

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
     * The DoD Standard Country Code designator for the country or political entity
     * that owns the data set associated with this obstruction. This field will be set
     * to "OTHR" if the source value does not match a UDL Country code value
     * (ISO-3166-ALPHA-2).
     */
    ownerCountryCode?: string;

    /**
     * WGS-84 latitude of this point obstacle, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    pointLat?: number;

    /**
     * WGS-84 longitude of this point obstacle, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    pointLon?: number;

    /**
     * The name of the point file associated with this obstruction data set.
     */
    pointsFilename?: string;

    /**
     * Code denoting the action, review, or process that updated this obstacle.
     */
    processCode?: string;

    /**
     * Name of the agency that produced this obstruction data set.
     */
    producer?: string;

    /**
     * The Federal Information Processing Standards (FIPS) state/province numeric code
     * of this obstacle's location.
     */
    provinceCode?: string;

    /**
     * When horizontal and/or vertical accuracy requirements cannot be met because of
     * inadequate source material, this code indicates the quality of the data.
     */
    quality?: string;

    /**
     * Optional URI location in the document repository of the raw file parsed by the
     * system to produce this record. To download the raw file, prepend
     * https://udl-hostname/scs/download?id= to this value.
     */
    rawFileURI?: string;

    /**
     * Date this obstacle data was revised, in ISO 8601 date-only format (ex.
     * YYYY-MM-DD).
     */
    revDate?: string;

    /**
     * ID of the end point of a line segment.
     */
    segEndPoint?: number;

    /**
     * Identifies the sequence number of a line segment.
     */
    segNum?: number;

    /**
     * ID of the starting point of a line segment.
     */
    segStartPoint?: number;

    /**
     * Source date of this obstacle data, in ISO 8601 date-only format (ex.
     * YYYY-MM-DD).
     */
    sourceDate?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * The surface material composition code of this point obstacle.
     */
    surfaceMatCode?: string;

    /**
     * The transaction type/code for this obstacle (e.g. "D", "N", "R", "S", "V", "X").
     */
    transactionCode?: string;

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
     * Method used to confirm the existence of this obstacle.
     */
    validationCode?: number;

    /**
     * This field provides an array of values that can be added to any obstruction
     * feature to provide information that is not already supported. The entries in
     * this array must correspond to the position index in the keys array. This array
     * must be the same length as keys.
     */
    values?: Array<string>;

    /**
     * The name of the vector file associated with this obstruction data set.
     */
    vectorsFilename?: string;

    /**
     * The World Aeronautical Chart (WAC) identifier for the area in which this
     * obstacle is located.
     */
    wac?: string;

    /**
     * This obstacle's World Area Code installation number (WAC-INNR).
     */
    wacINNR?: string;
  }
}

export interface NavigationalObstructionCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Start date of this obstruction data set's currency, in ISO 8601 date-only
   * format.
   */
  cycleDate: string;

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
   * The ID of this obstacle.
   */
  obstacleId: string;

  /**
   * Type of obstacle (e.g. P for point, V for vector, L for line).
   */
  obstacleType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Indicates if this obstacle record is Active (A) or Deleted (D).
   */
  actDelCode?: string;

  /**
   * The Aeronautical Information Regulation and Control (AIRAC) cycle of this
   * obstruction data set. The format is YYNN where YY is the last two digits of the
   * year and NN is the cycle number.
   */
  airacCycle?: number;

  /**
   * The baseline Aeronautical Information Regulation and Control (AIRAC) cycle for
   * change sets only. The format is YYNN where YY is the last two digits of the year
   * and NN is the cycle number.
   */
  baseAiracCycle?: number;

  /**
   * Earliest record date possible in this obstruction data set (not the earliest
   * data item), in ISO 8601 date-only format (e.g. YYYY-MM-DD). If null, this data
   * set is assumed to be a full data pull of holdings until the cutoffDate. If this
   * field is populated, this data set only contains updates since the last baseline
   * data set.
   */
  baselineCutoffDate?: string;

  /**
   * WGS-84 latitude of the northeastern boundary for obstructions contained in this
   * data set, in degrees. -90 to 90 degrees (negative values south of equator).
   */
  boundNELat?: number;

  /**
   * WGS-84 longitude of the northeastern boundary for obstructions contained in this
   * data set, in degrees. -180 to 180 degrees (negative values west of Prime
   * Meridian).
   */
  boundNELon?: number;

  /**
   * WGS-84 latitude of the southwestern boundary for obstructions contained in this
   * data set, in degrees. -90 to 90 degrees (negative values south of equator).
   */
  boundSWLat?: number;

  /**
   * WGS-84 longitude of the southwestern boundary for obstructions contained in this
   * data set, in degrees. -180 to 180 degrees (negative values west of Prime
   * Meridian).
   */
  boundSWLon?: number;

  /**
   * The DoD Standard Country Code designator for the country issuing the diplomatic
   * clearance. This field will be set to "OTHR" if the source value does not match a
   * UDL Country code value (ISO-3166-ALPHA-2).
   */
  countryCode?: string;

  /**
   * Latest record date possible in this obstruction data set (not the most recent
   * data item), in ISO 8601 date-only format (e.g. YYYY-MM-DD).
   */
  cutoffDate?: string;

  /**
   * Remarks concerning this obstruction's data set.
   */
  dataSetRemarks?: string;

  /**
   * The organization that deleted this obstacle record.
   */
  deletingOrg?: string;

  /**
   * The organization that entered obstacle data other than the producer.
   */
  derivingOrg?: string;

  /**
   * The side or sides of this obstruction feature which produces the greatest
   * reflectivity potential.
   */
  directivityCode?: number;

  /**
   * The elevation at the point obstacle's location in feet.
   */
  elevation?: number;

  /**
   * The difference between the assigned elevation of this point and its true
   * elevation, in feet.
   */
  elevationAcc?: number;

  /**
   * Optional obstacle ID from external systems. This field has no meaning within UDL
   * and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  externalId?: string;

  /**
   * FACC (Feature and Attribute Coding Catalog) is a five-character code for
   * encoding real-world entities and objects. The first letter of the code is an
   * alphabetic value from "A" to "Z" which will map to a feature category. The
   * second character will map to a subcategory. Characters three to five are numeric
   * and range from 000 to 999. This value will provide a unit feature type
   * identification within the categories.
   */
  facc?: string;

  /**
   * Identifying code for the type of this point obstacle.
   */
  featureCode?: string;

  /**
   * Description of this obstacle, corresponding to the FACC (Feature and Attribute
   * Coding Catalog) value.
   */
  featureDescription?: string;

  /**
   * Type name of point obstacle.
   */
  featureName?: string;

  /**
   * Identifying code for the type of this point obstacle.
   */
  featureType?: string;

  /**
   * The height Above Ground Level (AGL) of the point obstacle in feet.
   */
  heightAGL?: number;

  /**
   * The accuracy of the height Above Ground Level (AGL) value for this point
   * obstacle, in feet.
   */
  heightAGLAcc?: number;

  /**
   * The height Above Mean Sea Level (AMSL) of the point obstacle in feet.
   */
  heightMSL?: number;

  /**
   * The accuracy of the height Above Mean Sea Level (AMSL) value for this point
   * obstacle in feet.
   */
  heightMSLAcc?: number;

  /**
   * The difference between the recorded horizontal coordinates of this point
   * obstacle and its true position, in feet.
   */
  horizAcc?: number;

  /**
   * Code representing the mathematical model of Earth used to calculate coordinates
   * for this obstacle (e.g. WGS-84, U for undetermined, etc.). US Forces use the
   * World Geodetic System 1984 (WGS-84), but also use maps by allied countries with
   * local datums.
   */
  horizDatumCode?: string;

  /**
   * Date this obstacle was initially added to the data set, in ISO 8601 date-only
   * format (ex. YYYY-MM-DD).
   */
  initRecordDate?: string;

  /**
   * This field provides an array of keys that can be added to any obstruction
   * feature to provide information that is not already supported. The entries in
   * this array must correspond to the position index in the values array. This array
   * must be the same length as values.
   */
  keys?: Array<string>;

  /**
   * Code specifying if this obstacle is lit (e.g. Y = Yes, N = No, U = Unknown).
   */
  lightingCode?: string;

  /**
   * WGS-84 latitude of the northeastern point of the line, in degrees. -90 to 90
   * degrees (negative values south of equator).
   */
  lineNELat?: number;

  /**
   * WGS-84 longitude of the northeastern point of the line, in degrees. -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  lineNELon?: number;

  /**
   * The name of the line file associated with this obstruction data set.
   */
  linesFilename?: string;

  /**
   * WGS-84 latitude of the southwestern point of the line, in degrees. -90 to 90
   * degrees (negative values south of equator).
   */
  lineSWLat?: number;

  /**
   * WGS-84 longitude of the southwestern point of the line, in degrees. -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  lineSWLon?: number;

  /**
   * The minimum height Above Ground Level (AGL) of the shortest obstruction
   * contained in this data set, in feet.
   */
  minHeightAGL?: number;

  /**
   * Indicates if the feature has multiple obstructions (e.g. S = Single, M =
   * Multiple, U = Undetermined).
   */
  multObs?: string;

  /**
   * The date after which this obstruction data set’s currency is stale and should be
   * refreshed, in ISO 8601 date-only format (e.g. YYYY-MM-DD).
   */
  nextCycleDate?: string;

  /**
   * The number of line features associated with this obstruction data set.
   */
  numLines?: number;

  /**
   * Indicates the number of obstructions associated with a feature.
   */
  numObs?: number;

  /**
   * The number of point features associated with this obstruction data set.
   */
  numPoints?: number;

  /**
   * Remarks regarding this obstacle.
   */
  obstacleRemarks?: string;

  /**
   * The original ID for this obstacle.
   */
  origId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The DoD Standard Country Code designator for the country or political entity
   * that owns the data set associated with this obstruction. This field will be set
   * to "OTHR" if the source value does not match a UDL Country code value
   * (ISO-3166-ALPHA-2).
   */
  ownerCountryCode?: string;

  /**
   * WGS-84 latitude of this point obstacle, in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  pointLat?: number;

  /**
   * WGS-84 longitude of this point obstacle, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  pointLon?: number;

  /**
   * The name of the point file associated with this obstruction data set.
   */
  pointsFilename?: string;

  /**
   * Code denoting the action, review, or process that updated this obstacle.
   */
  processCode?: string;

  /**
   * Name of the agency that produced this obstruction data set.
   */
  producer?: string;

  /**
   * The Federal Information Processing Standards (FIPS) state/province numeric code
   * of this obstacle's location.
   */
  provinceCode?: string;

  /**
   * When horizontal and/or vertical accuracy requirements cannot be met because of
   * inadequate source material, this code indicates the quality of the data.
   */
  quality?: string;

  /**
   * Date this obstacle data was revised, in ISO 8601 date-only format (ex.
   * YYYY-MM-DD).
   */
  revDate?: string;

  /**
   * ID of the end point of a line segment.
   */
  segEndPoint?: number;

  /**
   * Identifies the sequence number of a line segment.
   */
  segNum?: number;

  /**
   * ID of the starting point of a line segment.
   */
  segStartPoint?: number;

  /**
   * Source date of this obstacle data, in ISO 8601 date-only format (ex.
   * YYYY-MM-DD).
   */
  sourceDate?: string;

  /**
   * The surface material composition code of this point obstacle.
   */
  surfaceMatCode?: string;

  /**
   * The transaction type/code for this obstacle (e.g. "D", "N", "R", "S", "V", "X").
   */
  transactionCode?: string;

  /**
   * Method used to confirm the existence of this obstacle.
   */
  validationCode?: number;

  /**
   * This field provides an array of values that can be added to any obstruction
   * feature to provide information that is not already supported. The entries in
   * this array must correspond to the position index in the keys array. This array
   * must be the same length as keys.
   */
  values?: Array<string>;

  /**
   * The name of the vector file associated with this obstruction data set.
   */
  vectorsFilename?: string;

  /**
   * The World Aeronautical Chart (WAC) identifier for the area in which this
   * obstacle is located.
   */
  wac?: string;

  /**
   * This obstacle's World Area Code installation number (WAC-INNR).
   */
  wacINNR?: string;
}

export interface NavigationalObstructionUpdateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Start date of this obstruction data set's currency, in ISO 8601 date-only
   * format.
   */
  cycleDate: string;

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
   * The ID of this obstacle.
   */
  obstacleId: string;

  /**
   * Type of obstacle (e.g. P for point, V for vector, L for line).
   */
  obstacleType: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Indicates if this obstacle record is Active (A) or Deleted (D).
   */
  actDelCode?: string;

  /**
   * The Aeronautical Information Regulation and Control (AIRAC) cycle of this
   * obstruction data set. The format is YYNN where YY is the last two digits of the
   * year and NN is the cycle number.
   */
  airacCycle?: number;

  /**
   * The baseline Aeronautical Information Regulation and Control (AIRAC) cycle for
   * change sets only. The format is YYNN where YY is the last two digits of the year
   * and NN is the cycle number.
   */
  baseAiracCycle?: number;

  /**
   * Earliest record date possible in this obstruction data set (not the earliest
   * data item), in ISO 8601 date-only format (e.g. YYYY-MM-DD). If null, this data
   * set is assumed to be a full data pull of holdings until the cutoffDate. If this
   * field is populated, this data set only contains updates since the last baseline
   * data set.
   */
  baselineCutoffDate?: string;

  /**
   * WGS-84 latitude of the northeastern boundary for obstructions contained in this
   * data set, in degrees. -90 to 90 degrees (negative values south of equator).
   */
  boundNELat?: number;

  /**
   * WGS-84 longitude of the northeastern boundary for obstructions contained in this
   * data set, in degrees. -180 to 180 degrees (negative values west of Prime
   * Meridian).
   */
  boundNELon?: number;

  /**
   * WGS-84 latitude of the southwestern boundary for obstructions contained in this
   * data set, in degrees. -90 to 90 degrees (negative values south of equator).
   */
  boundSWLat?: number;

  /**
   * WGS-84 longitude of the southwestern boundary for obstructions contained in this
   * data set, in degrees. -180 to 180 degrees (negative values west of Prime
   * Meridian).
   */
  boundSWLon?: number;

  /**
   * The DoD Standard Country Code designator for the country issuing the diplomatic
   * clearance. This field will be set to "OTHR" if the source value does not match a
   * UDL Country code value (ISO-3166-ALPHA-2).
   */
  countryCode?: string;

  /**
   * Latest record date possible in this obstruction data set (not the most recent
   * data item), in ISO 8601 date-only format (e.g. YYYY-MM-DD).
   */
  cutoffDate?: string;

  /**
   * Remarks concerning this obstruction's data set.
   */
  dataSetRemarks?: string;

  /**
   * The organization that deleted this obstacle record.
   */
  deletingOrg?: string;

  /**
   * The organization that entered obstacle data other than the producer.
   */
  derivingOrg?: string;

  /**
   * The side or sides of this obstruction feature which produces the greatest
   * reflectivity potential.
   */
  directivityCode?: number;

  /**
   * The elevation at the point obstacle's location in feet.
   */
  elevation?: number;

  /**
   * The difference between the assigned elevation of this point and its true
   * elevation, in feet.
   */
  elevationAcc?: number;

  /**
   * Optional obstacle ID from external systems. This field has no meaning within UDL
   * and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  externalId?: string;

  /**
   * FACC (Feature and Attribute Coding Catalog) is a five-character code for
   * encoding real-world entities and objects. The first letter of the code is an
   * alphabetic value from "A" to "Z" which will map to a feature category. The
   * second character will map to a subcategory. Characters three to five are numeric
   * and range from 000 to 999. This value will provide a unit feature type
   * identification within the categories.
   */
  facc?: string;

  /**
   * Identifying code for the type of this point obstacle.
   */
  featureCode?: string;

  /**
   * Description of this obstacle, corresponding to the FACC (Feature and Attribute
   * Coding Catalog) value.
   */
  featureDescription?: string;

  /**
   * Type name of point obstacle.
   */
  featureName?: string;

  /**
   * Identifying code for the type of this point obstacle.
   */
  featureType?: string;

  /**
   * The height Above Ground Level (AGL) of the point obstacle in feet.
   */
  heightAGL?: number;

  /**
   * The accuracy of the height Above Ground Level (AGL) value for this point
   * obstacle, in feet.
   */
  heightAGLAcc?: number;

  /**
   * The height Above Mean Sea Level (AMSL) of the point obstacle in feet.
   */
  heightMSL?: number;

  /**
   * The accuracy of the height Above Mean Sea Level (AMSL) value for this point
   * obstacle in feet.
   */
  heightMSLAcc?: number;

  /**
   * The difference between the recorded horizontal coordinates of this point
   * obstacle and its true position, in feet.
   */
  horizAcc?: number;

  /**
   * Code representing the mathematical model of Earth used to calculate coordinates
   * for this obstacle (e.g. WGS-84, U for undetermined, etc.). US Forces use the
   * World Geodetic System 1984 (WGS-84), but also use maps by allied countries with
   * local datums.
   */
  horizDatumCode?: string;

  /**
   * Date this obstacle was initially added to the data set, in ISO 8601 date-only
   * format (ex. YYYY-MM-DD).
   */
  initRecordDate?: string;

  /**
   * This field provides an array of keys that can be added to any obstruction
   * feature to provide information that is not already supported. The entries in
   * this array must correspond to the position index in the values array. This array
   * must be the same length as values.
   */
  keys?: Array<string>;

  /**
   * Code specifying if this obstacle is lit (e.g. Y = Yes, N = No, U = Unknown).
   */
  lightingCode?: string;

  /**
   * WGS-84 latitude of the northeastern point of the line, in degrees. -90 to 90
   * degrees (negative values south of equator).
   */
  lineNELat?: number;

  /**
   * WGS-84 longitude of the northeastern point of the line, in degrees. -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  lineNELon?: number;

  /**
   * The name of the line file associated with this obstruction data set.
   */
  linesFilename?: string;

  /**
   * WGS-84 latitude of the southwestern point of the line, in degrees. -90 to 90
   * degrees (negative values south of equator).
   */
  lineSWLat?: number;

  /**
   * WGS-84 longitude of the southwestern point of the line, in degrees. -180 to 180
   * degrees (negative values west of Prime Meridian).
   */
  lineSWLon?: number;

  /**
   * The minimum height Above Ground Level (AGL) of the shortest obstruction
   * contained in this data set, in feet.
   */
  minHeightAGL?: number;

  /**
   * Indicates if the feature has multiple obstructions (e.g. S = Single, M =
   * Multiple, U = Undetermined).
   */
  multObs?: string;

  /**
   * The date after which this obstruction data set’s currency is stale and should be
   * refreshed, in ISO 8601 date-only format (e.g. YYYY-MM-DD).
   */
  nextCycleDate?: string;

  /**
   * The number of line features associated with this obstruction data set.
   */
  numLines?: number;

  /**
   * Indicates the number of obstructions associated with a feature.
   */
  numObs?: number;

  /**
   * The number of point features associated with this obstruction data set.
   */
  numPoints?: number;

  /**
   * Remarks regarding this obstacle.
   */
  obstacleRemarks?: string;

  /**
   * The original ID for this obstacle.
   */
  origId?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The DoD Standard Country Code designator for the country or political entity
   * that owns the data set associated with this obstruction. This field will be set
   * to "OTHR" if the source value does not match a UDL Country code value
   * (ISO-3166-ALPHA-2).
   */
  ownerCountryCode?: string;

  /**
   * WGS-84 latitude of this point obstacle, in degrees. -90 to 90 degrees (negative
   * values south of equator).
   */
  pointLat?: number;

  /**
   * WGS-84 longitude of this point obstacle, in degrees. -180 to 180 degrees
   * (negative values west of Prime Meridian).
   */
  pointLon?: number;

  /**
   * The name of the point file associated with this obstruction data set.
   */
  pointsFilename?: string;

  /**
   * Code denoting the action, review, or process that updated this obstacle.
   */
  processCode?: string;

  /**
   * Name of the agency that produced this obstruction data set.
   */
  producer?: string;

  /**
   * The Federal Information Processing Standards (FIPS) state/province numeric code
   * of this obstacle's location.
   */
  provinceCode?: string;

  /**
   * When horizontal and/or vertical accuracy requirements cannot be met because of
   * inadequate source material, this code indicates the quality of the data.
   */
  quality?: string;

  /**
   * Date this obstacle data was revised, in ISO 8601 date-only format (ex.
   * YYYY-MM-DD).
   */
  revDate?: string;

  /**
   * ID of the end point of a line segment.
   */
  segEndPoint?: number;

  /**
   * Identifies the sequence number of a line segment.
   */
  segNum?: number;

  /**
   * ID of the starting point of a line segment.
   */
  segStartPoint?: number;

  /**
   * Source date of this obstacle data, in ISO 8601 date-only format (ex.
   * YYYY-MM-DD).
   */
  sourceDate?: string;

  /**
   * The surface material composition code of this point obstacle.
   */
  surfaceMatCode?: string;

  /**
   * The transaction type/code for this obstacle (e.g. "D", "N", "R", "S", "V", "X").
   */
  transactionCode?: string;

  /**
   * Method used to confirm the existence of this obstacle.
   */
  validationCode?: number;

  /**
   * This field provides an array of values that can be added to any obstruction
   * feature to provide information that is not already supported. The entries in
   * this array must correspond to the position index in the keys array. This array
   * must be the same length as keys.
   */
  values?: Array<string>;

  /**
   * The name of the vector file associated with this obstruction data set.
   */
  vectorsFilename?: string;

  /**
   * The World Aeronautical Chart (WAC) identifier for the area in which this
   * obstacle is located.
   */
  wac?: string;

  /**
   * This obstacle's World Area Code installation number (WAC-INNR).
   */
  wacINNR?: string;
}

export interface NavigationalObstructionListParams extends OffsetPageParams {
  /**
   * (One or more of fields 'cycleDate, obstacleId' are required.) Start date of this
   * obstruction data set's currency, in ISO 8601 date-only format. (YYYY-MM-DD)
   */
  cycleDate?: string;

  /**
   * (One or more of fields 'cycleDate, obstacleId' are required.) The ID of this
   * obstacle.
   */
  obstacleId?: string;
}

export interface NavigationalObstructionCountParams {
  /**
   * (One or more of fields 'cycleDate, obstacleId' are required.) Start date of this
   * obstruction data set's currency, in ISO 8601 date-only format. (YYYY-MM-DD)
   */
  cycleDate?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * (One or more of fields 'cycleDate, obstacleId' are required.) The ID of this
   * obstacle.
   */
  obstacleId?: string;
}

export interface NavigationalObstructionCreateBulkParams {
  body: Array<NavigationalObstructionCreateBulkParams.Body>;
}

export namespace NavigationalObstructionCreateBulkParams {
  /**
   * Beta Version Navigational Obstruction: Information describing navigational
   * obstructions, such as applicable boundaries, locations, heights, data ownership,
   * and currency.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Start date of this obstruction data set's currency, in ISO 8601 date-only
     * format.
     */
    cycleDate: string;

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
     * The ID of this obstacle.
     */
    obstacleId: string;

    /**
     * Type of obstacle (e.g. P for point, V for vector, L for line).
     */
    obstacleType: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Indicates if this obstacle record is Active (A) or Deleted (D).
     */
    actDelCode?: string;

    /**
     * The Aeronautical Information Regulation and Control (AIRAC) cycle of this
     * obstruction data set. The format is YYNN where YY is the last two digits of the
     * year and NN is the cycle number.
     */
    airacCycle?: number;

    /**
     * The baseline Aeronautical Information Regulation and Control (AIRAC) cycle for
     * change sets only. The format is YYNN where YY is the last two digits of the year
     * and NN is the cycle number.
     */
    baseAiracCycle?: number;

    /**
     * Earliest record date possible in this obstruction data set (not the earliest
     * data item), in ISO 8601 date-only format (e.g. YYYY-MM-DD). If null, this data
     * set is assumed to be a full data pull of holdings until the cutoffDate. If this
     * field is populated, this data set only contains updates since the last baseline
     * data set.
     */
    baselineCutoffDate?: string;

    /**
     * WGS-84 latitude of the northeastern boundary for obstructions contained in this
     * data set, in degrees. -90 to 90 degrees (negative values south of equator).
     */
    boundNELat?: number;

    /**
     * WGS-84 longitude of the northeastern boundary for obstructions contained in this
     * data set, in degrees. -180 to 180 degrees (negative values west of Prime
     * Meridian).
     */
    boundNELon?: number;

    /**
     * WGS-84 latitude of the southwestern boundary for obstructions contained in this
     * data set, in degrees. -90 to 90 degrees (negative values south of equator).
     */
    boundSWLat?: number;

    /**
     * WGS-84 longitude of the southwestern boundary for obstructions contained in this
     * data set, in degrees. -180 to 180 degrees (negative values west of Prime
     * Meridian).
     */
    boundSWLon?: number;

    /**
     * The DoD Standard Country Code designator for the country issuing the diplomatic
     * clearance. This field will be set to "OTHR" if the source value does not match a
     * UDL Country code value (ISO-3166-ALPHA-2).
     */
    countryCode?: string;

    /**
     * Latest record date possible in this obstruction data set (not the most recent
     * data item), in ISO 8601 date-only format (e.g. YYYY-MM-DD).
     */
    cutoffDate?: string;

    /**
     * Remarks concerning this obstruction's data set.
     */
    dataSetRemarks?: string;

    /**
     * The organization that deleted this obstacle record.
     */
    deletingOrg?: string;

    /**
     * The organization that entered obstacle data other than the producer.
     */
    derivingOrg?: string;

    /**
     * The side or sides of this obstruction feature which produces the greatest
     * reflectivity potential.
     */
    directivityCode?: number;

    /**
     * The elevation at the point obstacle's location in feet.
     */
    elevation?: number;

    /**
     * The difference between the assigned elevation of this point and its true
     * elevation, in feet.
     */
    elevationAcc?: number;

    /**
     * Optional obstacle ID from external systems. This field has no meaning within UDL
     * and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalId?: string;

    /**
     * FACC (Feature and Attribute Coding Catalog) is a five-character code for
     * encoding real-world entities and objects. The first letter of the code is an
     * alphabetic value from "A" to "Z" which will map to a feature category. The
     * second character will map to a subcategory. Characters three to five are numeric
     * and range from 000 to 999. This value will provide a unit feature type
     * identification within the categories.
     */
    facc?: string;

    /**
     * Identifying code for the type of this point obstacle.
     */
    featureCode?: string;

    /**
     * Description of this obstacle, corresponding to the FACC (Feature and Attribute
     * Coding Catalog) value.
     */
    featureDescription?: string;

    /**
     * Type name of point obstacle.
     */
    featureName?: string;

    /**
     * Identifying code for the type of this point obstacle.
     */
    featureType?: string;

    /**
     * The height Above Ground Level (AGL) of the point obstacle in feet.
     */
    heightAGL?: number;

    /**
     * The accuracy of the height Above Ground Level (AGL) value for this point
     * obstacle, in feet.
     */
    heightAGLAcc?: number;

    /**
     * The height Above Mean Sea Level (AMSL) of the point obstacle in feet.
     */
    heightMSL?: number;

    /**
     * The accuracy of the height Above Mean Sea Level (AMSL) value for this point
     * obstacle in feet.
     */
    heightMSLAcc?: number;

    /**
     * The difference between the recorded horizontal coordinates of this point
     * obstacle and its true position, in feet.
     */
    horizAcc?: number;

    /**
     * Code representing the mathematical model of Earth used to calculate coordinates
     * for this obstacle (e.g. WGS-84, U for undetermined, etc.). US Forces use the
     * World Geodetic System 1984 (WGS-84), but also use maps by allied countries with
     * local datums.
     */
    horizDatumCode?: string;

    /**
     * Date this obstacle was initially added to the data set, in ISO 8601 date-only
     * format (ex. YYYY-MM-DD).
     */
    initRecordDate?: string;

    /**
     * This field provides an array of keys that can be added to any obstruction
     * feature to provide information that is not already supported. The entries in
     * this array must correspond to the position index in the values array. This array
     * must be the same length as values.
     */
    keys?: Array<string>;

    /**
     * Code specifying if this obstacle is lit (e.g. Y = Yes, N = No, U = Unknown).
     */
    lightingCode?: string;

    /**
     * WGS-84 latitude of the northeastern point of the line, in degrees. -90 to 90
     * degrees (negative values south of equator).
     */
    lineNELat?: number;

    /**
     * WGS-84 longitude of the northeastern point of the line, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian).
     */
    lineNELon?: number;

    /**
     * The name of the line file associated with this obstruction data set.
     */
    linesFilename?: string;

    /**
     * WGS-84 latitude of the southwestern point of the line, in degrees. -90 to 90
     * degrees (negative values south of equator).
     */
    lineSWLat?: number;

    /**
     * WGS-84 longitude of the southwestern point of the line, in degrees. -180 to 180
     * degrees (negative values west of Prime Meridian).
     */
    lineSWLon?: number;

    /**
     * The minimum height Above Ground Level (AGL) of the shortest obstruction
     * contained in this data set, in feet.
     */
    minHeightAGL?: number;

    /**
     * Indicates if the feature has multiple obstructions (e.g. S = Single, M =
     * Multiple, U = Undetermined).
     */
    multObs?: string;

    /**
     * The date after which this obstruction data set’s currency is stale and should be
     * refreshed, in ISO 8601 date-only format (e.g. YYYY-MM-DD).
     */
    nextCycleDate?: string;

    /**
     * The number of line features associated with this obstruction data set.
     */
    numLines?: number;

    /**
     * Indicates the number of obstructions associated with a feature.
     */
    numObs?: number;

    /**
     * The number of point features associated with this obstruction data set.
     */
    numPoints?: number;

    /**
     * Remarks regarding this obstacle.
     */
    obstacleRemarks?: string;

    /**
     * The original ID for this obstacle.
     */
    origId?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The DoD Standard Country Code designator for the country or political entity
     * that owns the data set associated with this obstruction. This field will be set
     * to "OTHR" if the source value does not match a UDL Country code value
     * (ISO-3166-ALPHA-2).
     */
    ownerCountryCode?: string;

    /**
     * WGS-84 latitude of this point obstacle, in degrees. -90 to 90 degrees (negative
     * values south of equator).
     */
    pointLat?: number;

    /**
     * WGS-84 longitude of this point obstacle, in degrees. -180 to 180 degrees
     * (negative values west of Prime Meridian).
     */
    pointLon?: number;

    /**
     * The name of the point file associated with this obstruction data set.
     */
    pointsFilename?: string;

    /**
     * Code denoting the action, review, or process that updated this obstacle.
     */
    processCode?: string;

    /**
     * Name of the agency that produced this obstruction data set.
     */
    producer?: string;

    /**
     * The Federal Information Processing Standards (FIPS) state/province numeric code
     * of this obstacle's location.
     */
    provinceCode?: string;

    /**
     * When horizontal and/or vertical accuracy requirements cannot be met because of
     * inadequate source material, this code indicates the quality of the data.
     */
    quality?: string;

    /**
     * Date this obstacle data was revised, in ISO 8601 date-only format (ex.
     * YYYY-MM-DD).
     */
    revDate?: string;

    /**
     * ID of the end point of a line segment.
     */
    segEndPoint?: number;

    /**
     * Identifies the sequence number of a line segment.
     */
    segNum?: number;

    /**
     * ID of the starting point of a line segment.
     */
    segStartPoint?: number;

    /**
     * Source date of this obstacle data, in ISO 8601 date-only format (ex.
     * YYYY-MM-DD).
     */
    sourceDate?: string;

    /**
     * The surface material composition code of this point obstacle.
     */
    surfaceMatCode?: string;

    /**
     * The transaction type/code for this obstacle (e.g. "D", "N", "R", "S", "V", "X").
     */
    transactionCode?: string;

    /**
     * Method used to confirm the existence of this obstacle.
     */
    validationCode?: number;

    /**
     * This field provides an array of values that can be added to any obstruction
     * feature to provide information that is not already supported. The entries in
     * this array must correspond to the position index in the keys array. This array
     * must be the same length as keys.
     */
    values?: Array<string>;

    /**
     * The name of the vector file associated with this obstruction data set.
     */
    vectorsFilename?: string;

    /**
     * The World Aeronautical Chart (WAC) identifier for the area in which this
     * obstacle is located.
     */
    wac?: string;

    /**
     * This obstacle's World Area Code installation number (WAC-INNR).
     */
    wacINNR?: string;
  }
}

export interface NavigationalObstructionGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface NavigationalObstructionTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * (One or more of fields 'cycleDate, obstacleId' are required.) Start date of this
   * obstruction data set's currency, in ISO 8601 date-only format. (YYYY-MM-DD)
   */
  cycleDate?: string;

  firstResult?: number;

  maxResults?: number;

  /**
   * (One or more of fields 'cycleDate, obstacleId' are required.) The ID of this
   * obstacle.
   */
  obstacleId?: string;
}

export declare namespace NavigationalObstruction {
  export {
    type NavigationalObstructionListResponse as NavigationalObstructionListResponse,
    type NavigationalObstructionCountResponse as NavigationalObstructionCountResponse,
    type NavigationalObstructionGetResponse as NavigationalObstructionGetResponse,
    type NavigationalObstructionQueryhelpResponse as NavigationalObstructionQueryhelpResponse,
    type NavigationalObstructionTupleResponse as NavigationalObstructionTupleResponse,
    type NavigationalObstructionListResponsesOffsetPage as NavigationalObstructionListResponsesOffsetPage,
    type NavigationalObstructionCreateParams as NavigationalObstructionCreateParams,
    type NavigationalObstructionUpdateParams as NavigationalObstructionUpdateParams,
    type NavigationalObstructionListParams as NavigationalObstructionListParams,
    type NavigationalObstructionCountParams as NavigationalObstructionCountParams,
    type NavigationalObstructionCreateBulkParams as NavigationalObstructionCreateBulkParams,
    type NavigationalObstructionGetParams as NavigationalObstructionGetParams,
    type NavigationalObstructionTupleParams as NavigationalObstructionTupleParams,
  };
}
