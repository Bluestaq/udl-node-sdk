// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Dropzone extends APIResource {
  /**
   * Service operation to take a single dropzone record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: DropzoneCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/dropzone', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single dropzone record by its unique ID passed as a
   * path parameter.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<DropzoneRetrieveResponse> {
    return this._client.get(`/udl/dropzone/${id}`, options);
  }

  /**
   * Service operation to update a single dropzone record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  update(pathId: string, body: DropzoneUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/udl/dropzone/${pathId}`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to delete a dropzone record specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/dropzone/${id}`, {
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
  count(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/dropzone/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of
   * dropzone records as a POST body and ingest into the database. This operation is
   * not intended to be used for automated feeds into UDL. Data providers should
   * contact the UDL team for specific role assignments and for instructions on
   * setting up a permanent feed through an alternate mechanism.
   */
  createBulk(body: DropzoneCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/dropzone/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to take multiple dropzone records as a POST body and ingest
   * into the database. This operation is intended to be used for automated feeds
   * into UDL. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  createBulkV2(body: DropzoneCreateBulkV2Params, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/filedrop/udl-dropzone', {
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
  query(options?: Core.RequestOptions): Core.APIPromise<DropzoneQueryResponse> {
    return this._client.get('/udl/dropzone', options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryHelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/dropzone/queryhelp', {
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
  tuple(query: DropzoneTupleParams, options?: Core.RequestOptions): Core.APIPromise<DropzoneTupleResponse> {
    return this._client.get('/udl/dropzone/tuple', { query, ...options });
  }
}

/**
 * Properties and characteristics of a Drop Zone, including name, location, shape,
 * type code, survey date, and remarks.
 */
export interface DropzoneRetrieveResponse {
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
   * WGS84 latitude of the drop zone, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat: number;

  /**
   * WGS84 longitude of the drop zone, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon: number;

  /**
   * The name of the drop zone.
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
   * Specifies an alternate country code for the drop zone if the data provider code
   * is not part of an official Country Code standard such as ISO-3166 or FIPS. This
   * field will be set to the value provided by the source and should be used for all
   * Queries specifying a Country Code.
   */
  altCountryCode?: string;

  /**
   * Specifies the country name associated with the source provided alternate country
   * code.
   */
  altCountryName?: string;

  /**
   * The date the drop zone survey was approved, in ISO 8601 UTC format with
   * millisecond precision.
   */
  approvalDate?: string;

  /**
   * The type code for the drop zone.
   */
  code?: string;

  /**
   * The Country Code where the drop zone is located. This value is typically the ISO
   * 3166 Alpha-2 two-character country code, however it can also represent various
   * consortiums that do not appear in the ISO document. The code must correspond to
   * an existing country in the UDL’s country API. Call udl/country/{code} to get any
   * associated FIPS code, ISO Alpha-3 code, or alternate code values that exist for
   * the specified country code.
   */
  countryCode?: string;

  /**
   * The country name of the location for the drop zone.
   */
  countryName?: string;

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
   * The survey expiration date of the drop zone, in ISO 8601 UTC format with
   * millisecond precision.
   */
  expirationDate?: string;

  /**
   * The external identifier assigned to the drop zone.
   */
  extIdentifier?: string;

  /**
   * The ID of the site associated with the drop zone.
   */
  idSite?: string;

  /**
   * Last time the drop zone information was updated, in ISO 8601 UTC format with
   * millisecond precision.
   */
  lastUpdate?: string;

  /**
   * The length dimension of the drop zone in meters for non-circular drop zones.
   */
  length?: number;

  /**
   * The Major Command (MAJCOM) responsible for management of the drop zone.
   */
  majcom?: string;

  /**
   * The nearest reference location to the drop zone.
   */
  nearestLoc?: string;

  /**
   * The approval date for the drop zone by an air drop authority certifying
   * operational usage, in ISO 8601 UTC format with millisecond precision.
   */
  operationalApprovalDate?: string;

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
   * The name assigned to the drop zone point.
   */
  pointName?: string;

  /**
   * The radius dimension of the drop zone in meters for circular drop zones.
   */
  radius?: number;

  /**
   * The date the drop zone was recertified, in ISO 8601 UTC format with millisecond
   * precision.
   */
  recertDate?: string;

  /**
   * Remarks concerning the drop zone.
   */
  remark?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * The US alphabetical code for the state where the drop zone is located.
   */
  stateAbbr?: string;

  /**
   * The name of the state where the drop zone is located.
   */
  stateName?: string;

  /**
   * The date the drop zone survey was performed, in ISO 8601 UTC format with
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
   * The width dimension of the drop zone in meters for non-circular drop zones.
   */
  width?: number;

  /**
   * The identifier of the Zone Availability Report (ZAR) for the drop zone.
   */
  zarId?: string;
}

export type DropzoneCountResponse = string;

export type DropzoneQueryResponse = Array<DropzoneQueryResponse.DropzoneQueryResponseItem>;

export namespace DropzoneQueryResponse {
  /**
   * Properties and characteristics of a Drop Zone, including name, location, shape,
   * type code, survey date, and remarks.
   */
  export interface DropzoneQueryResponseItem {
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
     * WGS84 latitude of the drop zone, in degrees. -90 to 90 degrees (negative values
     * south of equator).
     */
    lat: number;

    /**
     * WGS84 longitude of the drop zone, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon: number;

    /**
     * The name of the drop zone.
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
     * Specifies an alternate country code for the drop zone if the data provider code
     * is not part of an official Country Code standard such as ISO-3166 or FIPS. This
     * field will be set to the value provided by the source and should be used for all
     * Queries specifying a Country Code.
     */
    altCountryCode?: string;

    /**
     * Specifies the country name associated with the source provided alternate country
     * code.
     */
    altCountryName?: string;

    /**
     * The date the drop zone survey was approved, in ISO 8601 UTC format with
     * millisecond precision.
     */
    approvalDate?: string;

    /**
     * The type code for the drop zone.
     */
    code?: string;

    /**
     * The Country Code where the drop zone is located. This value is typically the ISO
     * 3166 Alpha-2 two-character country code, however it can also represent various
     * consortiums that do not appear in the ISO document. The code must correspond to
     * an existing country in the UDL’s country API. Call udl/country/{code} to get any
     * associated FIPS code, ISO Alpha-3 code, or alternate code values that exist for
     * the specified country code.
     */
    countryCode?: string;

    /**
     * The country name of the location for the drop zone.
     */
    countryName?: string;

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
     * The survey expiration date of the drop zone, in ISO 8601 UTC format with
     * millisecond precision.
     */
    expirationDate?: string;

    /**
     * The external identifier assigned to the drop zone.
     */
    extIdentifier?: string;

    /**
     * The ID of the site associated with the drop zone.
     */
    idSite?: string;

    /**
     * Last time the drop zone information was updated, in ISO 8601 UTC format with
     * millisecond precision.
     */
    lastUpdate?: string;

    /**
     * The length dimension of the drop zone in meters for non-circular drop zones.
     */
    length?: number;

    /**
     * The Major Command (MAJCOM) responsible for management of the drop zone.
     */
    majcom?: string;

    /**
     * The nearest reference location to the drop zone.
     */
    nearestLoc?: string;

    /**
     * The approval date for the drop zone by an air drop authority certifying
     * operational usage, in ISO 8601 UTC format with millisecond precision.
     */
    operationalApprovalDate?: string;

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
     * The name assigned to the drop zone point.
     */
    pointName?: string;

    /**
     * The radius dimension of the drop zone in meters for circular drop zones.
     */
    radius?: number;

    /**
     * The date the drop zone was recertified, in ISO 8601 UTC format with millisecond
     * precision.
     */
    recertDate?: string;

    /**
     * Remarks concerning the drop zone.
     */
    remark?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * The US alphabetical code for the state where the drop zone is located.
     */
    stateAbbr?: string;

    /**
     * The name of the state where the drop zone is located.
     */
    stateName?: string;

    /**
     * The date the drop zone survey was performed, in ISO 8601 UTC format with
     * millisecond precision.
     */
    surveyDate?: string;

    /**
     * The width dimension of the drop zone in meters for non-circular drop zones.
     */
    width?: number;

    /**
     * The identifier of the Zone Availability Report (ZAR) for the drop zone.
     */
    zarId?: string;
  }
}

export type DropzoneTupleResponse = Array<DropzoneTupleResponse.DropzoneTupleResponseItem>;

export namespace DropzoneTupleResponse {
  /**
   * Properties and characteristics of a Drop Zone, including name, location, shape,
   * type code, survey date, and remarks.
   */
  export interface DropzoneTupleResponseItem {
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
     * WGS84 latitude of the drop zone, in degrees. -90 to 90 degrees (negative values
     * south of equator).
     */
    lat: number;

    /**
     * WGS84 longitude of the drop zone, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon: number;

    /**
     * The name of the drop zone.
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
     * Specifies an alternate country code for the drop zone if the data provider code
     * is not part of an official Country Code standard such as ISO-3166 or FIPS. This
     * field will be set to the value provided by the source and should be used for all
     * Queries specifying a Country Code.
     */
    altCountryCode?: string;

    /**
     * Specifies the country name associated with the source provided alternate country
     * code.
     */
    altCountryName?: string;

    /**
     * The date the drop zone survey was approved, in ISO 8601 UTC format with
     * millisecond precision.
     */
    approvalDate?: string;

    /**
     * The type code for the drop zone.
     */
    code?: string;

    /**
     * The Country Code where the drop zone is located. This value is typically the ISO
     * 3166 Alpha-2 two-character country code, however it can also represent various
     * consortiums that do not appear in the ISO document. The code must correspond to
     * an existing country in the UDL’s country API. Call udl/country/{code} to get any
     * associated FIPS code, ISO Alpha-3 code, or alternate code values that exist for
     * the specified country code.
     */
    countryCode?: string;

    /**
     * The country name of the location for the drop zone.
     */
    countryName?: string;

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
     * The survey expiration date of the drop zone, in ISO 8601 UTC format with
     * millisecond precision.
     */
    expirationDate?: string;

    /**
     * The external identifier assigned to the drop zone.
     */
    extIdentifier?: string;

    /**
     * The ID of the site associated with the drop zone.
     */
    idSite?: string;

    /**
     * Last time the drop zone information was updated, in ISO 8601 UTC format with
     * millisecond precision.
     */
    lastUpdate?: string;

    /**
     * The length dimension of the drop zone in meters for non-circular drop zones.
     */
    length?: number;

    /**
     * The Major Command (MAJCOM) responsible for management of the drop zone.
     */
    majcom?: string;

    /**
     * The nearest reference location to the drop zone.
     */
    nearestLoc?: string;

    /**
     * The approval date for the drop zone by an air drop authority certifying
     * operational usage, in ISO 8601 UTC format with millisecond precision.
     */
    operationalApprovalDate?: string;

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
     * The name assigned to the drop zone point.
     */
    pointName?: string;

    /**
     * The radius dimension of the drop zone in meters for circular drop zones.
     */
    radius?: number;

    /**
     * The date the drop zone was recertified, in ISO 8601 UTC format with millisecond
     * precision.
     */
    recertDate?: string;

    /**
     * Remarks concerning the drop zone.
     */
    remark?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * The US alphabetical code for the state where the drop zone is located.
     */
    stateAbbr?: string;

    /**
     * The name of the state where the drop zone is located.
     */
    stateName?: string;

    /**
     * The date the drop zone survey was performed, in ISO 8601 UTC format with
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
     * The width dimension of the drop zone in meters for non-circular drop zones.
     */
    width?: number;

    /**
     * The identifier of the Zone Availability Report (ZAR) for the drop zone.
     */
    zarId?: string;
  }
}

export interface DropzoneCreateParams {
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
   * WGS84 latitude of the drop zone, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat: number;

  /**
   * WGS84 longitude of the drop zone, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon: number;

  /**
   * The name of the drop zone.
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
   * Specifies an alternate country code for the drop zone if the data provider code
   * is not part of an official Country Code standard such as ISO-3166 or FIPS. This
   * field will be set to the value provided by the source and should be used for all
   * Queries specifying a Country Code.
   */
  altCountryCode?: string;

  /**
   * Specifies the country name associated with the source provided alternate country
   * code.
   */
  altCountryName?: string;

  /**
   * The date the drop zone survey was approved, in ISO 8601 UTC format with
   * millisecond precision.
   */
  approvalDate?: string;

  /**
   * The type code for the drop zone.
   */
  code?: string;

  /**
   * The Country Code where the drop zone is located. This value is typically the ISO
   * 3166 Alpha-2 two-character country code, however it can also represent various
   * consortiums that do not appear in the ISO document. The code must correspond to
   * an existing country in the UDL’s country API. Call udl/country/{code} to get any
   * associated FIPS code, ISO Alpha-3 code, or alternate code values that exist for
   * the specified country code.
   */
  countryCode?: string;

  /**
   * The country name of the location for the drop zone.
   */
  countryName?: string;

  /**
   * The survey expiration date of the drop zone, in ISO 8601 UTC format with
   * millisecond precision.
   */
  expirationDate?: string;

  /**
   * The external identifier assigned to the drop zone.
   */
  extIdentifier?: string;

  /**
   * The ID of the site associated with the drop zone.
   */
  idSite?: string;

  /**
   * Last time the drop zone information was updated, in ISO 8601 UTC format with
   * millisecond precision.
   */
  lastUpdate?: string;

  /**
   * The length dimension of the drop zone in meters for non-circular drop zones.
   */
  length?: number;

  /**
   * The Major Command (MAJCOM) responsible for management of the drop zone.
   */
  majcom?: string;

  /**
   * The nearest reference location to the drop zone.
   */
  nearestLoc?: string;

  /**
   * The approval date for the drop zone by an air drop authority certifying
   * operational usage, in ISO 8601 UTC format with millisecond precision.
   */
  operationalApprovalDate?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The name assigned to the drop zone point.
   */
  pointName?: string;

  /**
   * The radius dimension of the drop zone in meters for circular drop zones.
   */
  radius?: number;

  /**
   * The date the drop zone was recertified, in ISO 8601 UTC format with millisecond
   * precision.
   */
  recertDate?: string;

  /**
   * Remarks concerning the drop zone.
   */
  remark?: string;

  /**
   * The US alphabetical code for the state where the drop zone is located.
   */
  stateAbbr?: string;

  /**
   * The name of the state where the drop zone is located.
   */
  stateName?: string;

  /**
   * The date the drop zone survey was performed, in ISO 8601 UTC format with
   * millisecond precision.
   */
  surveyDate?: string;

  /**
   * The width dimension of the drop zone in meters for non-circular drop zones.
   */
  width?: number;

  /**
   * The identifier of the Zone Availability Report (ZAR) for the drop zone.
   */
  zarId?: string;
}

export interface DropzoneUpdateParams {
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
   * WGS84 latitude of the drop zone, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat: number;

  /**
   * WGS84 longitude of the drop zone, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon: number;

  /**
   * The name of the drop zone.
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
   * Specifies an alternate country code for the drop zone if the data provider code
   * is not part of an official Country Code standard such as ISO-3166 or FIPS. This
   * field will be set to the value provided by the source and should be used for all
   * Queries specifying a Country Code.
   */
  altCountryCode?: string;

  /**
   * Specifies the country name associated with the source provided alternate country
   * code.
   */
  altCountryName?: string;

  /**
   * The date the drop zone survey was approved, in ISO 8601 UTC format with
   * millisecond precision.
   */
  approvalDate?: string;

  /**
   * The type code for the drop zone.
   */
  code?: string;

  /**
   * The Country Code where the drop zone is located. This value is typically the ISO
   * 3166 Alpha-2 two-character country code, however it can also represent various
   * consortiums that do not appear in the ISO document. The code must correspond to
   * an existing country in the UDL’s country API. Call udl/country/{code} to get any
   * associated FIPS code, ISO Alpha-3 code, or alternate code values that exist for
   * the specified country code.
   */
  countryCode?: string;

  /**
   * The country name of the location for the drop zone.
   */
  countryName?: string;

  /**
   * The survey expiration date of the drop zone, in ISO 8601 UTC format with
   * millisecond precision.
   */
  expirationDate?: string;

  /**
   * The external identifier assigned to the drop zone.
   */
  extIdentifier?: string;

  /**
   * The ID of the site associated with the drop zone.
   */
  idSite?: string;

  /**
   * Last time the drop zone information was updated, in ISO 8601 UTC format with
   * millisecond precision.
   */
  lastUpdate?: string;

  /**
   * The length dimension of the drop zone in meters for non-circular drop zones.
   */
  length?: number;

  /**
   * The Major Command (MAJCOM) responsible for management of the drop zone.
   */
  majcom?: string;

  /**
   * The nearest reference location to the drop zone.
   */
  nearestLoc?: string;

  /**
   * The approval date for the drop zone by an air drop authority certifying
   * operational usage, in ISO 8601 UTC format with millisecond precision.
   */
  operationalApprovalDate?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The name assigned to the drop zone point.
   */
  pointName?: string;

  /**
   * The radius dimension of the drop zone in meters for circular drop zones.
   */
  radius?: number;

  /**
   * The date the drop zone was recertified, in ISO 8601 UTC format with millisecond
   * precision.
   */
  recertDate?: string;

  /**
   * Remarks concerning the drop zone.
   */
  remark?: string;

  /**
   * The US alphabetical code for the state where the drop zone is located.
   */
  stateAbbr?: string;

  /**
   * The name of the state where the drop zone is located.
   */
  stateName?: string;

  /**
   * The date the drop zone survey was performed, in ISO 8601 UTC format with
   * millisecond precision.
   */
  surveyDate?: string;

  /**
   * The width dimension of the drop zone in meters for non-circular drop zones.
   */
  width?: number;

  /**
   * The identifier of the Zone Availability Report (ZAR) for the drop zone.
   */
  zarId?: string;
}

export type DropzoneCreateBulkParams = Array<DropzoneCreateBulkParams.Body>;

export namespace DropzoneCreateBulkParams {
  /**
   * Properties and characteristics of a Drop Zone, including name, location, shape,
   * type code, survey date, and remarks.
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
     * WGS84 latitude of the drop zone, in degrees. -90 to 90 degrees (negative values
     * south of equator).
     */
    lat: number;

    /**
     * WGS84 longitude of the drop zone, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon: number;

    /**
     * The name of the drop zone.
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
     * Specifies an alternate country code for the drop zone if the data provider code
     * is not part of an official Country Code standard such as ISO-3166 or FIPS. This
     * field will be set to the value provided by the source and should be used for all
     * Queries specifying a Country Code.
     */
    altCountryCode?: string;

    /**
     * Specifies the country name associated with the source provided alternate country
     * code.
     */
    altCountryName?: string;

    /**
     * The date the drop zone survey was approved, in ISO 8601 UTC format with
     * millisecond precision.
     */
    approvalDate?: string;

    /**
     * The type code for the drop zone.
     */
    code?: string;

    /**
     * The Country Code where the drop zone is located. This value is typically the ISO
     * 3166 Alpha-2 two-character country code, however it can also represent various
     * consortiums that do not appear in the ISO document. The code must correspond to
     * an existing country in the UDL’s country API. Call udl/country/{code} to get any
     * associated FIPS code, ISO Alpha-3 code, or alternate code values that exist for
     * the specified country code.
     */
    countryCode?: string;

    /**
     * The country name of the location for the drop zone.
     */
    countryName?: string;

    /**
     * The survey expiration date of the drop zone, in ISO 8601 UTC format with
     * millisecond precision.
     */
    expirationDate?: string;

    /**
     * The external identifier assigned to the drop zone.
     */
    extIdentifier?: string;

    /**
     * The ID of the site associated with the drop zone.
     */
    idSite?: string;

    /**
     * Last time the drop zone information was updated, in ISO 8601 UTC format with
     * millisecond precision.
     */
    lastUpdate?: string;

    /**
     * The length dimension of the drop zone in meters for non-circular drop zones.
     */
    length?: number;

    /**
     * The Major Command (MAJCOM) responsible for management of the drop zone.
     */
    majcom?: string;

    /**
     * The nearest reference location to the drop zone.
     */
    nearestLoc?: string;

    /**
     * The approval date for the drop zone by an air drop authority certifying
     * operational usage, in ISO 8601 UTC format with millisecond precision.
     */
    operationalApprovalDate?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The name assigned to the drop zone point.
     */
    pointName?: string;

    /**
     * The radius dimension of the drop zone in meters for circular drop zones.
     */
    radius?: number;

    /**
     * The date the drop zone was recertified, in ISO 8601 UTC format with millisecond
     * precision.
     */
    recertDate?: string;

    /**
     * Remarks concerning the drop zone.
     */
    remark?: string;

    /**
     * The US alphabetical code for the state where the drop zone is located.
     */
    stateAbbr?: string;

    /**
     * The name of the state where the drop zone is located.
     */
    stateName?: string;

    /**
     * The date the drop zone survey was performed, in ISO 8601 UTC format with
     * millisecond precision.
     */
    surveyDate?: string;

    /**
     * The width dimension of the drop zone in meters for non-circular drop zones.
     */
    width?: number;

    /**
     * The identifier of the Zone Availability Report (ZAR) for the drop zone.
     */
    zarId?: string;
  }
}

export type DropzoneCreateBulkV2Params = Array<DropzoneCreateBulkV2Params.Body>;

export namespace DropzoneCreateBulkV2Params {
  /**
   * Properties and characteristics of a Drop Zone, including name, location, shape,
   * type code, survey date, and remarks.
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
     * WGS84 latitude of the drop zone, in degrees. -90 to 90 degrees (negative values
     * south of equator).
     */
    lat: number;

    /**
     * WGS84 longitude of the drop zone, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon: number;

    /**
     * The name of the drop zone.
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
     * Specifies an alternate country code for the drop zone if the data provider code
     * is not part of an official Country Code standard such as ISO-3166 or FIPS. This
     * field will be set to the value provided by the source and should be used for all
     * Queries specifying a Country Code.
     */
    altCountryCode?: string;

    /**
     * Specifies the country name associated with the source provided alternate country
     * code.
     */
    altCountryName?: string;

    /**
     * The date the drop zone survey was approved, in ISO 8601 UTC format with
     * millisecond precision.
     */
    approvalDate?: string;

    /**
     * The type code for the drop zone.
     */
    code?: string;

    /**
     * The Country Code where the drop zone is located. This value is typically the ISO
     * 3166 Alpha-2 two-character country code, however it can also represent various
     * consortiums that do not appear in the ISO document. The code must correspond to
     * an existing country in the UDL’s country API. Call udl/country/{code} to get any
     * associated FIPS code, ISO Alpha-3 code, or alternate code values that exist for
     * the specified country code.
     */
    countryCode?: string;

    /**
     * The country name of the location for the drop zone.
     */
    countryName?: string;

    /**
     * The survey expiration date of the drop zone, in ISO 8601 UTC format with
     * millisecond precision.
     */
    expirationDate?: string;

    /**
     * The external identifier assigned to the drop zone.
     */
    extIdentifier?: string;

    /**
     * The ID of the site associated with the drop zone.
     */
    idSite?: string;

    /**
     * Last time the drop zone information was updated, in ISO 8601 UTC format with
     * millisecond precision.
     */
    lastUpdate?: string;

    /**
     * The length dimension of the drop zone in meters for non-circular drop zones.
     */
    length?: number;

    /**
     * The Major Command (MAJCOM) responsible for management of the drop zone.
     */
    majcom?: string;

    /**
     * The nearest reference location to the drop zone.
     */
    nearestLoc?: string;

    /**
     * The approval date for the drop zone by an air drop authority certifying
     * operational usage, in ISO 8601 UTC format with millisecond precision.
     */
    operationalApprovalDate?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * The name assigned to the drop zone point.
     */
    pointName?: string;

    /**
     * The radius dimension of the drop zone in meters for circular drop zones.
     */
    radius?: number;

    /**
     * The date the drop zone was recertified, in ISO 8601 UTC format with millisecond
     * precision.
     */
    recertDate?: string;

    /**
     * Remarks concerning the drop zone.
     */
    remark?: string;

    /**
     * The US alphabetical code for the state where the drop zone is located.
     */
    stateAbbr?: string;

    /**
     * The name of the state where the drop zone is located.
     */
    stateName?: string;

    /**
     * The date the drop zone survey was performed, in ISO 8601 UTC format with
     * millisecond precision.
     */
    surveyDate?: string;

    /**
     * The width dimension of the drop zone in meters for non-circular drop zones.
     */
    width?: number;

    /**
     * The identifier of the Zone Availability Report (ZAR) for the drop zone.
     */
    zarId?: string;
  }
}

export interface DropzoneTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

export declare namespace Dropzone {
  export {
    type DropzoneRetrieveResponse as DropzoneRetrieveResponse,
    type DropzoneCountResponse as DropzoneCountResponse,
    type DropzoneQueryResponse as DropzoneQueryResponse,
    type DropzoneTupleResponse as DropzoneTupleResponse,
    type DropzoneCreateParams as DropzoneCreateParams,
    type DropzoneUpdateParams as DropzoneUpdateParams,
    type DropzoneCreateBulkParams as DropzoneCreateBulkParams,
    type DropzoneCreateBulkV2Params as DropzoneCreateBulkV2Params,
    type DropzoneTupleParams as DropzoneTupleParams,
  };
}
