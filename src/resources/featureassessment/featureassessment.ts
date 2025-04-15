// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as HistoryAPI from './history';
import {
  History,
  HistoryCountParams,
  HistoryCountResponse,
  HistoryQueryParams,
  HistoryQueryResponse,
  HistoryWriteAodrParams,
} from './history';

export class Featureassessment extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);

  /**
   * Service operation to take a single FeatureAssessment record as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: FeatureassessmentCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/featureassessment', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single FeatureAssessment record by its unique ID
   * passed as a path parameter.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<FeatureassessmentRetrieveResponse> {
    return this._client.get(`/udl/featureassessment/${id}`, options);
  }

  /**
   * Service operation to return the count of records satisfying the specified query
   * parameters. This operation is useful to determine how many records pass a
   * particular query criteria without retrieving large amounts of data. See the
   * queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on
   * valid/required query parameter information.
   */
  count(query: FeatureassessmentCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/featureassessment/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * FeatureAssessment records as a POST body and ingest into the database. This
   * operation is not intended to be used for automated feeds into UDL. Data
   * providers should contact the UDL team for specific role assignments and for
   * instructions on setting up a permanent feed through an alternate mechanism.
   */
  createBulk(body: FeatureassessmentCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/featureassessment/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to take multiple FeatureAssessment records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  createBulkV2(
    body: FeatureassessmentCreateBulkV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post('/filedrop/udl-featureassessment', {
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
  query(
    query: FeatureassessmentQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FeatureassessmentQueryResponse> {
    return this._client.get('/udl/featureassessment', { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryHelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/featureassessment/queryhelp', {
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
    query: FeatureassessmentTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FeatureassessmentTupleResponse> {
    return this._client.get('/udl/featureassessment/tuple', { query, ...options });
  }
}

/**
 * Feature assessments obtained from imagery analysis or other data analytics.
 * Feature assessments are georeferenced terrestrial features such as marine
 * vessels, vehicles, buildings, etc., or contain other types of non terrestrial
 * assessments such as spacecraft structures. Geospatial queries are supported
 * through either the regionText (WKT) or regionGeoJSON fields.
 */
export interface FeatureassessmentRetrieveResponse {
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
   * Datetime type value associated with this record, in ISO 8601 UTC format with
   * millisecond precision.
   */
  featureTs: string;

  /**
   * The Unit of Measure associated with this feature. If there are no physical units
   * associated with the feature a value of NONE should be specified.
   */
  featureUoM: string;

  /**
   * Unique identifier of the Analytic Imagery associated with this Feature
   * Assessment record.
   */
  idAnalyticImagery: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the feature assessment as projected
   * on the ground. GeoJSON Reference: https://geojson.org/. Ignored if included with
   * a POST or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  agjson?: string;

  /**
   * Number of dimensions of the geometry depicted by region.
   */
  andims?: number;

  /**
   * Polygonal annotation limits, specified in pixels, as an array of arrays N x M.
   * Allows the image provider to highlight one or more polygonal area(s) of
   * interest. The array must contain NxM two-element arrays, where N is the number
   * of polygons of interest. The associated annotation(s) should be included in the
   * annText array.
   */
  annLims?: Array<Array<number>>;

  /**
   * Annotation text, a string array of annotation(s) corresponding to the
   * rectangular areas specified in annLims. This array contains the annotation text
   * associated with the areas of interest indicated in annLims, in order. This array
   * should contain one annotation per four values of the area (annLims) array.
   */
  annText?: Array<string>;

  /**
   * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
   * the feature assessment as projected on the ground.
   */
  area?: string;

  /**
   * Geographical spatial_ref_sys for region.
   */
  asrid?: number;

  /**
   * Descriptive or additional information associated with this feature/assessment.
   */
  assessment?: string;

  /**
   * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
   * Text representation of the geometry/geography, of the feature assessment as
   * projected on the ground. WKT reference:
   * https://www.opengeospatial.org/standards/wkt-crs. Ignored if included with a
   * POST or PUT request that also specifies a valid 'area' field.
   */
  atext?: string;

  /**
   * Type of region as projected on the ground (POLYGON, POINT, LINE).
   */
  atype?: string;

  /**
   * Analytic confidence of feature accuracy (0 to 1).
   */
  confidence?: number;

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
   * Feature Assessment ID from external systems. This field has no meaning within
   * UDL and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  externalId?: string;

  /**
   * An array of numeric feature/assessment values expressed in the specified unit of
   * measure (obUoM). Because of the variability of the Feature Assessment data
   * types, each record may employ a numeric observation value (featureValue), a
   * string observation value (featureString), a Boolean observation value
   * (featureBool), an array of numeric observation values (featureArray), or any
   * combination of these.
   */
  featureArray?: Array<number>;

  /**
   * A boolean feature/assessment. Because of the variability of the Feature
   * Assessment data types, each record may employ a numeric observation value
   * (featureValue), a string observation value (featureString), a Boolean
   * observation value (featureBool), an array of numeric observation values
   * (featureArray), or any combination of these.
   */
  featureBool?: boolean;

  /**
   * A single feature/assessment string expressed in the specified unit of measure
   * (obUoM). Because of the variability of the Feature Assessment data types, each
   * record may employ a numeric observation value (featureValue), a string
   * observation value (featureString), a Boolean observation value (featureBool), an
   * array of numeric observation values (featureArray), or any combination of these.
   */
  featureString?: string;

  /**
   * An array of string feature/assessment expressions. Because of the variability of
   * the Feature Assessment data types, each record may employ a numeric observation
   * value (featureValue), a string observation value (featureString), a Boolean
   * observation value (featureBool), an array of numeric observation values
   * (featureArray), or any combination of these.
   */
  featureStringArray?: Array<string>;

  /**
   * A single feature/assessment value expressed in the specified unit of measure
   * (obUoM). Because of the variability of the Feature Assessment data types, each
   * record may employ a numeric observation value (featureValue), a string
   * observation value (featureString), a Boolean observation value (featureBool), an
   * array of numeric observation values (featureArray), or any combination of these.
   */
  featureValue?: number;

  /**
   * The feature object heading, in degrees clockwise from true North at the object
   * location.
   */
  heading?: number;

  /**
   * Estimated physical height of the feature, in meters.
   */
  height?: number;

  /**
   * Estimated physical length of the feature, in meters.
   */
  length?: number;

  /**
   * Source defined name of the feature associated with this record. If an annotation
   * for this feature element exists on the parent image it can be referenced here.
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
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Feature's speed of travel, in meters per second.
   */
  speed?: number;

  /**
   * Array of UUIDs of the UDL data records that are related to the determination of
   * this activity or event. See the associated 'srcTyps' array for the specific
   * types of data, positionally corresponding to the UUIDs in this array. The
   * 'srcTyps', 'srcIds', and 'srcTs' arrays must contain the same number of
   * elements. See the corresponding srcTyps array element for the data type of the
   * UUID and use the appropriate API operation to retrieve that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of the primary timestamps, in ISO 8601 UTC format, with appropriate
   * precision for the datatype of each correspondng srcTyp/srcId record. See the
   * associated 'srcTyps' and 'srcIds' arrays for the record type and UUID,
   * respectively, positionally corresponding to the record types in this array. The
   * 'srcTyps', 'srcIds', and 'srcTs' arrays must contain the same number of
   * elements. These timestamps are included to support services which do not include
   * a GET by {id} operation. If referencing a datatype which does not include a
   * primary timestamp, the corresponding srcTs array element should be included as
   * null.
   */
  srcTs?: Array<string>;

  /**
   * Array of UDL record types (AIS, GROUNDIMAGE, MTI, ONORBIT, POI, SAR, SKYIMAGE,
   * SOI, TRACK) related to this feature assessment. See the associated 'srcIds' and
   * 'srcTs' arrays for the record UUIDs and timetsmps. respectively, positionally
   * corresponding to the record types in this array. The 'srcTyps', 'srcIds', and
   * 'srcTs' arrays must contain the same number of elements.
   */
  srcTyps?: Array<string>;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * The type of feature (e.g. AIRCRAFT, ANTENNA, SOLAR ARRAY, SITE, STRUCTURE,
   * VESSEL, VEHICLE, UNKNOWN, etc.) detailed in this feature assessment record. This
   * type may be a primary feature within an image, for example a VESSEL, or may be a
   * component or characteristic of a primary feature, for example an ANTENNA mounted
   * on a vessel.
   */
  type?: string;

  /**
   * Estimated physical width of the feature, in meters.
   */
  width?: number;
}

export type FeatureassessmentCountResponse = string;

export type FeatureassessmentQueryResponse =
  Array<FeatureassessmentQueryResponse.FeatureassessmentQueryResponseItem>;

export namespace FeatureassessmentQueryResponse {
  /**
   * Feature assessments obtained from imagery analysis or other data analytics.
   * Feature assessments are georeferenced terrestrial features such as marine
   * vessels, vehicles, buildings, etc., or contain other types of non terrestrial
   * assessments such as spacecraft structures. Geospatial queries are supported
   * through either the regionText (WKT) or regionGeoJSON fields.
   */
  export interface FeatureassessmentQueryResponseItem {
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
     * Datetime type value associated with this record, in ISO 8601 UTC format with
     * millisecond precision.
     */
    featureTs: string;

    /**
     * The Unit of Measure associated with this feature. If there are no physical units
     * associated with the feature a value of NONE should be specified.
     */
    featureUoM: string;

    /**
     * Unique identifier of the Analytic Imagery associated with this Feature
     * Assessment record.
     */
    idAnalyticImagery: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the feature assessment as projected
     * on the ground. GeoJSON Reference: https://geojson.org/. Ignored if included with
     * a POST or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    agjson?: string;

    /**
     * Number of dimensions of the geometry depicted by region.
     */
    andims?: number;

    /**
     * Polygonal annotation limits, specified in pixels, as an array of arrays N x M.
     * Allows the image provider to highlight one or more polygonal area(s) of
     * interest. The array must contain NxM two-element arrays, where N is the number
     * of polygons of interest. The associated annotation(s) should be included in the
     * annText array.
     */
    annLims?: Array<Array<number>>;

    /**
     * Annotation text, a string array of annotation(s) corresponding to the
     * rectangular areas specified in annLims. This array contains the annotation text
     * associated with the areas of interest indicated in annLims, in order. This array
     * should contain one annotation per four values of the area (annLims) array.
     */
    annText?: Array<string>;

    /**
     * Geographical spatial_ref_sys for region.
     */
    asrid?: number;

    /**
     * Descriptive or additional information associated with this feature/assessment.
     */
    assessment?: string;

    /**
     * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
     * Text representation of the geometry/geography, of the feature assessment as
     * projected on the ground. WKT reference:
     * https://www.opengeospatial.org/standards/wkt-crs. Ignored if included with a
     * POST or PUT request that also specifies a valid 'area' field.
     */
    atext?: string;

    /**
     * Type of region as projected on the ground (POLYGON, POINT, LINE).
     */
    atype?: string;

    /**
     * Analytic confidence of feature accuracy (0 to 1).
     */
    confidence?: number;

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
     * Feature Assessment ID from external systems. This field has no meaning within
     * UDL and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalId?: string;

    /**
     * An array of numeric feature/assessment values expressed in the specified unit of
     * measure (obUoM). Because of the variability of the Feature Assessment data
     * types, each record may employ a numeric observation value (featureValue), a
     * string observation value (featureString), a Boolean observation value
     * (featureBool), an array of numeric observation values (featureArray), or any
     * combination of these.
     */
    featureArray?: Array<number>;

    /**
     * A boolean feature/assessment. Because of the variability of the Feature
     * Assessment data types, each record may employ a numeric observation value
     * (featureValue), a string observation value (featureString), a Boolean
     * observation value (featureBool), an array of numeric observation values
     * (featureArray), or any combination of these.
     */
    featureBool?: boolean;

    /**
     * A single feature/assessment string expressed in the specified unit of measure
     * (obUoM). Because of the variability of the Feature Assessment data types, each
     * record may employ a numeric observation value (featureValue), a string
     * observation value (featureString), a Boolean observation value (featureBool), an
     * array of numeric observation values (featureArray), or any combination of these.
     */
    featureString?: string;

    /**
     * An array of string feature/assessment expressions. Because of the variability of
     * the Feature Assessment data types, each record may employ a numeric observation
     * value (featureValue), a string observation value (featureString), a Boolean
     * observation value (featureBool), an array of numeric observation values
     * (featureArray), or any combination of these.
     */
    featureStringArray?: Array<string>;

    /**
     * A single feature/assessment value expressed in the specified unit of measure
     * (obUoM). Because of the variability of the Feature Assessment data types, each
     * record may employ a numeric observation value (featureValue), a string
     * observation value (featureString), a Boolean observation value (featureBool), an
     * array of numeric observation values (featureArray), or any combination of these.
     */
    featureValue?: number;

    /**
     * The feature object heading, in degrees clockwise from true North at the object
     * location.
     */
    heading?: number;

    /**
     * Estimated physical height of the feature, in meters.
     */
    height?: number;

    /**
     * Estimated physical length of the feature, in meters.
     */
    length?: number;

    /**
     * Source defined name of the feature associated with this record. If an annotation
     * for this feature element exists on the parent image it can be referenced here.
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
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Feature's speed of travel, in meters per second.
     */
    speed?: number;

    /**
     * Array of UUIDs of the UDL data records that are related to the determination of
     * this activity or event. See the associated 'srcTyps' array for the specific
     * types of data, positionally corresponding to the UUIDs in this array. The
     * 'srcTyps', 'srcIds', and 'srcTs' arrays must contain the same number of
     * elements. See the corresponding srcTyps array element for the data type of the
     * UUID and use the appropriate API operation to retrieve that object.
     */
    srcIds?: Array<string>;

    /**
     * Array of the primary timestamps, in ISO 8601 UTC format, with appropriate
     * precision for the datatype of each correspondng srcTyp/srcId record. See the
     * associated 'srcTyps' and 'srcIds' arrays for the record type and UUID,
     * respectively, positionally corresponding to the record types in this array. The
     * 'srcTyps', 'srcIds', and 'srcTs' arrays must contain the same number of
     * elements. These timestamps are included to support services which do not include
     * a GET by {id} operation. If referencing a datatype which does not include a
     * primary timestamp, the corresponding srcTs array element should be included as
     * null.
     */
    srcTs?: Array<string>;

    /**
     * Array of UDL record types (AIS, GROUNDIMAGE, MTI, ONORBIT, POI, SAR, SKYIMAGE,
     * SOI, TRACK) related to this feature assessment. See the associated 'srcIds' and
     * 'srcTs' arrays for the record UUIDs and timetsmps. respectively, positionally
     * corresponding to the record types in this array. The 'srcTyps', 'srcIds', and
     * 'srcTs' arrays must contain the same number of elements.
     */
    srcTyps?: Array<string>;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * The type of feature (e.g. AIRCRAFT, ANTENNA, SOLAR ARRAY, SITE, STRUCTURE,
     * VESSEL, VEHICLE, UNKNOWN, etc.) detailed in this feature assessment record. This
     * type may be a primary feature within an image, for example a VESSEL, or may be a
     * component or characteristic of a primary feature, for example an ANTENNA mounted
     * on a vessel.
     */
    type?: string;

    /**
     * Estimated physical width of the feature, in meters.
     */
    width?: number;
  }
}

export type FeatureassessmentTupleResponse =
  Array<FeatureassessmentTupleResponse.FeatureassessmentTupleResponseItem>;

export namespace FeatureassessmentTupleResponse {
  /**
   * Feature assessments obtained from imagery analysis or other data analytics.
   * Feature assessments are georeferenced terrestrial features such as marine
   * vessels, vehicles, buildings, etc., or contain other types of non terrestrial
   * assessments such as spacecraft structures. Geospatial queries are supported
   * through either the regionText (WKT) or regionGeoJSON fields.
   */
  export interface FeatureassessmentTupleResponseItem {
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
     * Datetime type value associated with this record, in ISO 8601 UTC format with
     * millisecond precision.
     */
    featureTs: string;

    /**
     * The Unit of Measure associated with this feature. If there are no physical units
     * associated with the feature a value of NONE should be specified.
     */
    featureUoM: string;

    /**
     * Unique identifier of the Analytic Imagery associated with this Feature
     * Assessment record.
     */
    idAnalyticImagery: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the feature assessment as projected
     * on the ground. GeoJSON Reference: https://geojson.org/. Ignored if included with
     * a POST or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    agjson?: string;

    /**
     * Number of dimensions of the geometry depicted by region.
     */
    andims?: number;

    /**
     * Polygonal annotation limits, specified in pixels, as an array of arrays N x M.
     * Allows the image provider to highlight one or more polygonal area(s) of
     * interest. The array must contain NxM two-element arrays, where N is the number
     * of polygons of interest. The associated annotation(s) should be included in the
     * annText array.
     */
    annLims?: Array<Array<number>>;

    /**
     * Annotation text, a string array of annotation(s) corresponding to the
     * rectangular areas specified in annLims. This array contains the annotation text
     * associated with the areas of interest indicated in annLims, in order. This array
     * should contain one annotation per four values of the area (annLims) array.
     */
    annText?: Array<string>;

    /**
     * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
     * the feature assessment as projected on the ground.
     */
    area?: string;

    /**
     * Geographical spatial_ref_sys for region.
     */
    asrid?: number;

    /**
     * Descriptive or additional information associated with this feature/assessment.
     */
    assessment?: string;

    /**
     * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
     * Text representation of the geometry/geography, of the feature assessment as
     * projected on the ground. WKT reference:
     * https://www.opengeospatial.org/standards/wkt-crs. Ignored if included with a
     * POST or PUT request that also specifies a valid 'area' field.
     */
    atext?: string;

    /**
     * Type of region as projected on the ground (POLYGON, POINT, LINE).
     */
    atype?: string;

    /**
     * Analytic confidence of feature accuracy (0 to 1).
     */
    confidence?: number;

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
     * Feature Assessment ID from external systems. This field has no meaning within
     * UDL and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalId?: string;

    /**
     * An array of numeric feature/assessment values expressed in the specified unit of
     * measure (obUoM). Because of the variability of the Feature Assessment data
     * types, each record may employ a numeric observation value (featureValue), a
     * string observation value (featureString), a Boolean observation value
     * (featureBool), an array of numeric observation values (featureArray), or any
     * combination of these.
     */
    featureArray?: Array<number>;

    /**
     * A boolean feature/assessment. Because of the variability of the Feature
     * Assessment data types, each record may employ a numeric observation value
     * (featureValue), a string observation value (featureString), a Boolean
     * observation value (featureBool), an array of numeric observation values
     * (featureArray), or any combination of these.
     */
    featureBool?: boolean;

    /**
     * A single feature/assessment string expressed in the specified unit of measure
     * (obUoM). Because of the variability of the Feature Assessment data types, each
     * record may employ a numeric observation value (featureValue), a string
     * observation value (featureString), a Boolean observation value (featureBool), an
     * array of numeric observation values (featureArray), or any combination of these.
     */
    featureString?: string;

    /**
     * An array of string feature/assessment expressions. Because of the variability of
     * the Feature Assessment data types, each record may employ a numeric observation
     * value (featureValue), a string observation value (featureString), a Boolean
     * observation value (featureBool), an array of numeric observation values
     * (featureArray), or any combination of these.
     */
    featureStringArray?: Array<string>;

    /**
     * A single feature/assessment value expressed in the specified unit of measure
     * (obUoM). Because of the variability of the Feature Assessment data types, each
     * record may employ a numeric observation value (featureValue), a string
     * observation value (featureString), a Boolean observation value (featureBool), an
     * array of numeric observation values (featureArray), or any combination of these.
     */
    featureValue?: number;

    /**
     * The feature object heading, in degrees clockwise from true North at the object
     * location.
     */
    heading?: number;

    /**
     * Estimated physical height of the feature, in meters.
     */
    height?: number;

    /**
     * Estimated physical length of the feature, in meters.
     */
    length?: number;

    /**
     * Source defined name of the feature associated with this record. If an annotation
     * for this feature element exists on the parent image it can be referenced here.
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
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Feature's speed of travel, in meters per second.
     */
    speed?: number;

    /**
     * Array of UUIDs of the UDL data records that are related to the determination of
     * this activity or event. See the associated 'srcTyps' array for the specific
     * types of data, positionally corresponding to the UUIDs in this array. The
     * 'srcTyps', 'srcIds', and 'srcTs' arrays must contain the same number of
     * elements. See the corresponding srcTyps array element for the data type of the
     * UUID and use the appropriate API operation to retrieve that object.
     */
    srcIds?: Array<string>;

    /**
     * Array of the primary timestamps, in ISO 8601 UTC format, with appropriate
     * precision for the datatype of each correspondng srcTyp/srcId record. See the
     * associated 'srcTyps' and 'srcIds' arrays for the record type and UUID,
     * respectively, positionally corresponding to the record types in this array. The
     * 'srcTyps', 'srcIds', and 'srcTs' arrays must contain the same number of
     * elements. These timestamps are included to support services which do not include
     * a GET by {id} operation. If referencing a datatype which does not include a
     * primary timestamp, the corresponding srcTs array element should be included as
     * null.
     */
    srcTs?: Array<string>;

    /**
     * Array of UDL record types (AIS, GROUNDIMAGE, MTI, ONORBIT, POI, SAR, SKYIMAGE,
     * SOI, TRACK) related to this feature assessment. See the associated 'srcIds' and
     * 'srcTs' arrays for the record UUIDs and timetsmps. respectively, positionally
     * corresponding to the record types in this array. The 'srcTyps', 'srcIds', and
     * 'srcTs' arrays must contain the same number of elements.
     */
    srcTyps?: Array<string>;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * The type of feature (e.g. AIRCRAFT, ANTENNA, SOLAR ARRAY, SITE, STRUCTURE,
     * VESSEL, VEHICLE, UNKNOWN, etc.) detailed in this feature assessment record. This
     * type may be a primary feature within an image, for example a VESSEL, or may be a
     * component or characteristic of a primary feature, for example an ANTENNA mounted
     * on a vessel.
     */
    type?: string;

    /**
     * Estimated physical width of the feature, in meters.
     */
    width?: number;
  }
}

export interface FeatureassessmentCreateParams {
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
   * Datetime type value associated with this record, in ISO 8601 UTC format with
   * millisecond precision.
   */
  featureTs: string;

  /**
   * The Unit of Measure associated with this feature. If there are no physical units
   * associated with the feature a value of NONE should be specified.
   */
  featureUoM: string;

  /**
   * Unique identifier of the Analytic Imagery associated with this Feature
   * Assessment record.
   */
  idAnalyticImagery: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the feature assessment as projected
   * on the ground. GeoJSON Reference: https://geojson.org/. Ignored if included with
   * a POST or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  agjson?: string;

  /**
   * Number of dimensions of the geometry depicted by region.
   */
  andims?: number;

  /**
   * Polygonal annotation limits, specified in pixels, as an array of arrays N x M.
   * Allows the image provider to highlight one or more polygonal area(s) of
   * interest. The array must contain NxM two-element arrays, where N is the number
   * of polygons of interest. The associated annotation(s) should be included in the
   * annText array.
   */
  annLims?: Array<Array<number>>;

  /**
   * Annotation text, a string array of annotation(s) corresponding to the
   * rectangular areas specified in annLims. This array contains the annotation text
   * associated with the areas of interest indicated in annLims, in order. This array
   * should contain one annotation per four values of the area (annLims) array.
   */
  annText?: Array<string>;

  /**
   * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
   * the feature assessment as projected on the ground.
   */
  area?: string;

  /**
   * Geographical spatial_ref_sys for region.
   */
  asrid?: number;

  /**
   * Descriptive or additional information associated with this feature/assessment.
   */
  assessment?: string;

  /**
   * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
   * Text representation of the geometry/geography, of the feature assessment as
   * projected on the ground. WKT reference:
   * https://www.opengeospatial.org/standards/wkt-crs. Ignored if included with a
   * POST or PUT request that also specifies a valid 'area' field.
   */
  atext?: string;

  /**
   * Type of region as projected on the ground (POLYGON, POINT, LINE).
   */
  atype?: string;

  /**
   * Analytic confidence of feature accuracy (0 to 1).
   */
  confidence?: number;

  /**
   * Feature Assessment ID from external systems. This field has no meaning within
   * UDL and is provided as a convenience for systems that require tracking of an
   * internal system generated ID.
   */
  externalId?: string;

  /**
   * An array of numeric feature/assessment values expressed in the specified unit of
   * measure (obUoM). Because of the variability of the Feature Assessment data
   * types, each record may employ a numeric observation value (featureValue), a
   * string observation value (featureString), a Boolean observation value
   * (featureBool), an array of numeric observation values (featureArray), or any
   * combination of these.
   */
  featureArray?: Array<number>;

  /**
   * A boolean feature/assessment. Because of the variability of the Feature
   * Assessment data types, each record may employ a numeric observation value
   * (featureValue), a string observation value (featureString), a Boolean
   * observation value (featureBool), an array of numeric observation values
   * (featureArray), or any combination of these.
   */
  featureBool?: boolean;

  /**
   * A single feature/assessment string expressed in the specified unit of measure
   * (obUoM). Because of the variability of the Feature Assessment data types, each
   * record may employ a numeric observation value (featureValue), a string
   * observation value (featureString), a Boolean observation value (featureBool), an
   * array of numeric observation values (featureArray), or any combination of these.
   */
  featureString?: string;

  /**
   * An array of string feature/assessment expressions. Because of the variability of
   * the Feature Assessment data types, each record may employ a numeric observation
   * value (featureValue), a string observation value (featureString), a Boolean
   * observation value (featureBool), an array of numeric observation values
   * (featureArray), or any combination of these.
   */
  featureStringArray?: Array<string>;

  /**
   * A single feature/assessment value expressed in the specified unit of measure
   * (obUoM). Because of the variability of the Feature Assessment data types, each
   * record may employ a numeric observation value (featureValue), a string
   * observation value (featureString), a Boolean observation value (featureBool), an
   * array of numeric observation values (featureArray), or any combination of these.
   */
  featureValue?: number;

  /**
   * The feature object heading, in degrees clockwise from true North at the object
   * location.
   */
  heading?: number;

  /**
   * Estimated physical height of the feature, in meters.
   */
  height?: number;

  /**
   * Estimated physical length of the feature, in meters.
   */
  length?: number;

  /**
   * Source defined name of the feature associated with this record. If an annotation
   * for this feature element exists on the parent image it can be referenced here.
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
   * Feature's speed of travel, in meters per second.
   */
  speed?: number;

  /**
   * Array of UUIDs of the UDL data records that are related to the determination of
   * this activity or event. See the associated 'srcTyps' array for the specific
   * types of data, positionally corresponding to the UUIDs in this array. The
   * 'srcTyps', 'srcIds', and 'srcTs' arrays must contain the same number of
   * elements. See the corresponding srcTyps array element for the data type of the
   * UUID and use the appropriate API operation to retrieve that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of the primary timestamps, in ISO 8601 UTC format, with appropriate
   * precision for the datatype of each correspondng srcTyp/srcId record. See the
   * associated 'srcTyps' and 'srcIds' arrays for the record type and UUID,
   * respectively, positionally corresponding to the record types in this array. The
   * 'srcTyps', 'srcIds', and 'srcTs' arrays must contain the same number of
   * elements. These timestamps are included to support services which do not include
   * a GET by {id} operation. If referencing a datatype which does not include a
   * primary timestamp, the corresponding srcTs array element should be included as
   * null.
   */
  srcTs?: Array<string>;

  /**
   * Array of UDL record types (AIS, GROUNDIMAGE, MTI, ONORBIT, POI, SAR, SKYIMAGE,
   * SOI, TRACK) related to this feature assessment. See the associated 'srcIds' and
   * 'srcTs' arrays for the record UUIDs and timetsmps. respectively, positionally
   * corresponding to the record types in this array. The 'srcTyps', 'srcIds', and
   * 'srcTs' arrays must contain the same number of elements.
   */
  srcTyps?: Array<string>;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;

  /**
   * Optional identifier to track a commercial or marketplace transaction executed to
   * produce this data.
   */
  transactionId?: string;

  /**
   * The type of feature (e.g. AIRCRAFT, ANTENNA, SOLAR ARRAY, SITE, STRUCTURE,
   * VESSEL, VEHICLE, UNKNOWN, etc.) detailed in this feature assessment record. This
   * type may be a primary feature within an image, for example a VESSEL, or may be a
   * component or characteristic of a primary feature, for example an ANTENNA mounted
   * on a vessel.
   */
  type?: string;

  /**
   * Estimated physical width of the feature, in meters.
   */
  width?: number;
}

export interface FeatureassessmentCountParams {
  /**
   * Unique identifier of the Analytic Imagery associated with this Feature
   * Assessment record.
   */
  idAnalyticImagery: string;
}

export type FeatureassessmentCreateBulkParams = Array<FeatureassessmentCreateBulkParams.Body>;

export namespace FeatureassessmentCreateBulkParams {
  /**
   * Feature assessments obtained from imagery analysis or other data analytics.
   * Feature assessments are georeferenced terrestrial features such as marine
   * vessels, vehicles, buildings, etc., or contain other types of non terrestrial
   * assessments such as spacecraft structures. Geospatial queries are supported
   * through either the regionText (WKT) or regionGeoJSON fields.
   */
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
     * Datetime type value associated with this record, in ISO 8601 UTC format with
     * millisecond precision.
     */
    featureTs: string;

    /**
     * The Unit of Measure associated with this feature. If there are no physical units
     * associated with the feature a value of NONE should be specified.
     */
    featureUoM: string;

    /**
     * Unique identifier of the Analytic Imagery associated with this Feature
     * Assessment record.
     */
    idAnalyticImagery: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the feature assessment as projected
     * on the ground. GeoJSON Reference: https://geojson.org/. Ignored if included with
     * a POST or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    agjson?: string;

    /**
     * Number of dimensions of the geometry depicted by region.
     */
    andims?: number;

    /**
     * Polygonal annotation limits, specified in pixels, as an array of arrays N x M.
     * Allows the image provider to highlight one or more polygonal area(s) of
     * interest. The array must contain NxM two-element arrays, where N is the number
     * of polygons of interest. The associated annotation(s) should be included in the
     * annText array.
     */
    annLims?: Array<Array<number>>;

    /**
     * Annotation text, a string array of annotation(s) corresponding to the
     * rectangular areas specified in annLims. This array contains the annotation text
     * associated with the areas of interest indicated in annLims, in order. This array
     * should contain one annotation per four values of the area (annLims) array.
     */
    annText?: Array<string>;

    /**
     * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
     * the feature assessment as projected on the ground.
     */
    area?: string;

    /**
     * Geographical spatial_ref_sys for region.
     */
    asrid?: number;

    /**
     * Descriptive or additional information associated with this feature/assessment.
     */
    assessment?: string;

    /**
     * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
     * Text representation of the geometry/geography, of the feature assessment as
     * projected on the ground. WKT reference:
     * https://www.opengeospatial.org/standards/wkt-crs. Ignored if included with a
     * POST or PUT request that also specifies a valid 'area' field.
     */
    atext?: string;

    /**
     * Type of region as projected on the ground (POLYGON, POINT, LINE).
     */
    atype?: string;

    /**
     * Analytic confidence of feature accuracy (0 to 1).
     */
    confidence?: number;

    /**
     * Feature Assessment ID from external systems. This field has no meaning within
     * UDL and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalId?: string;

    /**
     * An array of numeric feature/assessment values expressed in the specified unit of
     * measure (obUoM). Because of the variability of the Feature Assessment data
     * types, each record may employ a numeric observation value (featureValue), a
     * string observation value (featureString), a Boolean observation value
     * (featureBool), an array of numeric observation values (featureArray), or any
     * combination of these.
     */
    featureArray?: Array<number>;

    /**
     * A boolean feature/assessment. Because of the variability of the Feature
     * Assessment data types, each record may employ a numeric observation value
     * (featureValue), a string observation value (featureString), a Boolean
     * observation value (featureBool), an array of numeric observation values
     * (featureArray), or any combination of these.
     */
    featureBool?: boolean;

    /**
     * A single feature/assessment string expressed in the specified unit of measure
     * (obUoM). Because of the variability of the Feature Assessment data types, each
     * record may employ a numeric observation value (featureValue), a string
     * observation value (featureString), a Boolean observation value (featureBool), an
     * array of numeric observation values (featureArray), or any combination of these.
     */
    featureString?: string;

    /**
     * An array of string feature/assessment expressions. Because of the variability of
     * the Feature Assessment data types, each record may employ a numeric observation
     * value (featureValue), a string observation value (featureString), a Boolean
     * observation value (featureBool), an array of numeric observation values
     * (featureArray), or any combination of these.
     */
    featureStringArray?: Array<string>;

    /**
     * A single feature/assessment value expressed in the specified unit of measure
     * (obUoM). Because of the variability of the Feature Assessment data types, each
     * record may employ a numeric observation value (featureValue), a string
     * observation value (featureString), a Boolean observation value (featureBool), an
     * array of numeric observation values (featureArray), or any combination of these.
     */
    featureValue?: number;

    /**
     * The feature object heading, in degrees clockwise from true North at the object
     * location.
     */
    heading?: number;

    /**
     * Estimated physical height of the feature, in meters.
     */
    height?: number;

    /**
     * Estimated physical length of the feature, in meters.
     */
    length?: number;

    /**
     * Source defined name of the feature associated with this record. If an annotation
     * for this feature element exists on the parent image it can be referenced here.
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
     * Feature's speed of travel, in meters per second.
     */
    speed?: number;

    /**
     * Array of UUIDs of the UDL data records that are related to the determination of
     * this activity or event. See the associated 'srcTyps' array for the specific
     * types of data, positionally corresponding to the UUIDs in this array. The
     * 'srcTyps', 'srcIds', and 'srcTs' arrays must contain the same number of
     * elements. See the corresponding srcTyps array element for the data type of the
     * UUID and use the appropriate API operation to retrieve that object.
     */
    srcIds?: Array<string>;

    /**
     * Array of the primary timestamps, in ISO 8601 UTC format, with appropriate
     * precision for the datatype of each correspondng srcTyp/srcId record. See the
     * associated 'srcTyps' and 'srcIds' arrays for the record type and UUID,
     * respectively, positionally corresponding to the record types in this array. The
     * 'srcTyps', 'srcIds', and 'srcTs' arrays must contain the same number of
     * elements. These timestamps are included to support services which do not include
     * a GET by {id} operation. If referencing a datatype which does not include a
     * primary timestamp, the corresponding srcTs array element should be included as
     * null.
     */
    srcTs?: Array<string>;

    /**
     * Array of UDL record types (AIS, GROUNDIMAGE, MTI, ONORBIT, POI, SAR, SKYIMAGE,
     * SOI, TRACK) related to this feature assessment. See the associated 'srcIds' and
     * 'srcTs' arrays for the record UUIDs and timetsmps. respectively, positionally
     * corresponding to the record types in this array. The 'srcTyps', 'srcIds', and
     * 'srcTs' arrays must contain the same number of elements.
     */
    srcTyps?: Array<string>;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * The type of feature (e.g. AIRCRAFT, ANTENNA, SOLAR ARRAY, SITE, STRUCTURE,
     * VESSEL, VEHICLE, UNKNOWN, etc.) detailed in this feature assessment record. This
     * type may be a primary feature within an image, for example a VESSEL, or may be a
     * component or characteristic of a primary feature, for example an ANTENNA mounted
     * on a vessel.
     */
    type?: string;

    /**
     * Estimated physical width of the feature, in meters.
     */
    width?: number;
  }
}

export type FeatureassessmentCreateBulkV2Params = Array<FeatureassessmentCreateBulkV2Params.Body>;

export namespace FeatureassessmentCreateBulkV2Params {
  /**
   * Feature assessments obtained from imagery analysis or other data analytics.
   * Feature assessments are georeferenced terrestrial features such as marine
   * vessels, vehicles, buildings, etc., or contain other types of non terrestrial
   * assessments such as spacecraft structures. Geospatial queries are supported
   * through either the regionText (WKT) or regionGeoJSON fields.
   */
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
     * Datetime type value associated with this record, in ISO 8601 UTC format with
     * millisecond precision.
     */
    featureTs: string;

    /**
     * The Unit of Measure associated with this feature. If there are no physical units
     * associated with the feature a value of NONE should be specified.
     */
    featureUoM: string;

    /**
     * Unique identifier of the Analytic Imagery associated with this Feature
     * Assessment record.
     */
    idAnalyticImagery: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the feature assessment as projected
     * on the ground. GeoJSON Reference: https://geojson.org/. Ignored if included with
     * a POST or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    agjson?: string;

    /**
     * Number of dimensions of the geometry depicted by region.
     */
    andims?: number;

    /**
     * Polygonal annotation limits, specified in pixels, as an array of arrays N x M.
     * Allows the image provider to highlight one or more polygonal area(s) of
     * interest. The array must contain NxM two-element arrays, where N is the number
     * of polygons of interest. The associated annotation(s) should be included in the
     * annText array.
     */
    annLims?: Array<Array<number>>;

    /**
     * Annotation text, a string array of annotation(s) corresponding to the
     * rectangular areas specified in annLims. This array contains the annotation text
     * associated with the areas of interest indicated in annLims, in order. This array
     * should contain one annotation per four values of the area (annLims) array.
     */
    annText?: Array<string>;

    /**
     * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
     * the feature assessment as projected on the ground.
     */
    area?: string;

    /**
     * Geographical spatial_ref_sys for region.
     */
    asrid?: number;

    /**
     * Descriptive or additional information associated with this feature/assessment.
     */
    assessment?: string;

    /**
     * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
     * Text representation of the geometry/geography, of the feature assessment as
     * projected on the ground. WKT reference:
     * https://www.opengeospatial.org/standards/wkt-crs. Ignored if included with a
     * POST or PUT request that also specifies a valid 'area' field.
     */
    atext?: string;

    /**
     * Type of region as projected on the ground (POLYGON, POINT, LINE).
     */
    atype?: string;

    /**
     * Analytic confidence of feature accuracy (0 to 1).
     */
    confidence?: number;

    /**
     * Feature Assessment ID from external systems. This field has no meaning within
     * UDL and is provided as a convenience for systems that require tracking of an
     * internal system generated ID.
     */
    externalId?: string;

    /**
     * An array of numeric feature/assessment values expressed in the specified unit of
     * measure (obUoM). Because of the variability of the Feature Assessment data
     * types, each record may employ a numeric observation value (featureValue), a
     * string observation value (featureString), a Boolean observation value
     * (featureBool), an array of numeric observation values (featureArray), or any
     * combination of these.
     */
    featureArray?: Array<number>;

    /**
     * A boolean feature/assessment. Because of the variability of the Feature
     * Assessment data types, each record may employ a numeric observation value
     * (featureValue), a string observation value (featureString), a Boolean
     * observation value (featureBool), an array of numeric observation values
     * (featureArray), or any combination of these.
     */
    featureBool?: boolean;

    /**
     * A single feature/assessment string expressed in the specified unit of measure
     * (obUoM). Because of the variability of the Feature Assessment data types, each
     * record may employ a numeric observation value (featureValue), a string
     * observation value (featureString), a Boolean observation value (featureBool), an
     * array of numeric observation values (featureArray), or any combination of these.
     */
    featureString?: string;

    /**
     * An array of string feature/assessment expressions. Because of the variability of
     * the Feature Assessment data types, each record may employ a numeric observation
     * value (featureValue), a string observation value (featureString), a Boolean
     * observation value (featureBool), an array of numeric observation values
     * (featureArray), or any combination of these.
     */
    featureStringArray?: Array<string>;

    /**
     * A single feature/assessment value expressed in the specified unit of measure
     * (obUoM). Because of the variability of the Feature Assessment data types, each
     * record may employ a numeric observation value (featureValue), a string
     * observation value (featureString), a Boolean observation value (featureBool), an
     * array of numeric observation values (featureArray), or any combination of these.
     */
    featureValue?: number;

    /**
     * The feature object heading, in degrees clockwise from true North at the object
     * location.
     */
    heading?: number;

    /**
     * Estimated physical height of the feature, in meters.
     */
    height?: number;

    /**
     * Estimated physical length of the feature, in meters.
     */
    length?: number;

    /**
     * Source defined name of the feature associated with this record. If an annotation
     * for this feature element exists on the parent image it can be referenced here.
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
     * Feature's speed of travel, in meters per second.
     */
    speed?: number;

    /**
     * Array of UUIDs of the UDL data records that are related to the determination of
     * this activity or event. See the associated 'srcTyps' array for the specific
     * types of data, positionally corresponding to the UUIDs in this array. The
     * 'srcTyps', 'srcIds', and 'srcTs' arrays must contain the same number of
     * elements. See the corresponding srcTyps array element for the data type of the
     * UUID and use the appropriate API operation to retrieve that object.
     */
    srcIds?: Array<string>;

    /**
     * Array of the primary timestamps, in ISO 8601 UTC format, with appropriate
     * precision for the datatype of each correspondng srcTyp/srcId record. See the
     * associated 'srcTyps' and 'srcIds' arrays for the record type and UUID,
     * respectively, positionally corresponding to the record types in this array. The
     * 'srcTyps', 'srcIds', and 'srcTs' arrays must contain the same number of
     * elements. These timestamps are included to support services which do not include
     * a GET by {id} operation. If referencing a datatype which does not include a
     * primary timestamp, the corresponding srcTs array element should be included as
     * null.
     */
    srcTs?: Array<string>;

    /**
     * Array of UDL record types (AIS, GROUNDIMAGE, MTI, ONORBIT, POI, SAR, SKYIMAGE,
     * SOI, TRACK) related to this feature assessment. See the associated 'srcIds' and
     * 'srcTs' arrays for the record UUIDs and timetsmps. respectively, positionally
     * corresponding to the record types in this array. The 'srcTyps', 'srcIds', and
     * 'srcTs' arrays must contain the same number of elements.
     */
    srcTyps?: Array<string>;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;

    /**
     * Optional identifier to track a commercial or marketplace transaction executed to
     * produce this data.
     */
    transactionId?: string;

    /**
     * The type of feature (e.g. AIRCRAFT, ANTENNA, SOLAR ARRAY, SITE, STRUCTURE,
     * VESSEL, VEHICLE, UNKNOWN, etc.) detailed in this feature assessment record. This
     * type may be a primary feature within an image, for example a VESSEL, or may be a
     * component or characteristic of a primary feature, for example an ANTENNA mounted
     * on a vessel.
     */
    type?: string;

    /**
     * Estimated physical width of the feature, in meters.
     */
    width?: number;
  }
}

export interface FeatureassessmentQueryParams {
  /**
   * Unique identifier of the Analytic Imagery associated with this Feature
   * Assessment record.
   */
  idAnalyticImagery: string;
}

export interface FeatureassessmentTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * Unique identifier of the Analytic Imagery associated with this Feature
   * Assessment record.
   */
  idAnalyticImagery: string;
}

Featureassessment.History = History;

export declare namespace Featureassessment {
  export {
    type FeatureassessmentRetrieveResponse as FeatureassessmentRetrieveResponse,
    type FeatureassessmentCountResponse as FeatureassessmentCountResponse,
    type FeatureassessmentQueryResponse as FeatureassessmentQueryResponse,
    type FeatureassessmentTupleResponse as FeatureassessmentTupleResponse,
    type FeatureassessmentCreateParams as FeatureassessmentCreateParams,
    type FeatureassessmentCountParams as FeatureassessmentCountParams,
    type FeatureassessmentCreateBulkParams as FeatureassessmentCreateBulkParams,
    type FeatureassessmentCreateBulkV2Params as FeatureassessmentCreateBulkV2Params,
    type FeatureassessmentQueryParams as FeatureassessmentQueryParams,
    type FeatureassessmentTupleParams as FeatureassessmentTupleParams,
  };

  export {
    History as History,
    type HistoryCountResponse as HistoryCountResponse,
    type HistoryQueryResponse as HistoryQueryResponse,
    type HistoryCountParams as HistoryCountParams,
    type HistoryQueryParams as HistoryQueryParams,
    type HistoryWriteAodrParams as HistoryWriteAodrParams,
  };
}
