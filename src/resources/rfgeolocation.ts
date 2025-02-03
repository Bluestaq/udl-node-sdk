// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Rfgeolocation extends APIResource {
  /**
   * Service operation to take a single RF geolocation as a POST body and ingest into
   * the database. This operation is not intended to be used for automated feeds into
   * UDL. Data providers should contact the UDL team for specific role assignments
   * and for instructions on setting up a permanent feed through an alternate
   * mechanism.
   */
  create(body: RfgeolocationCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/rfgeolocation', {
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
    query: RfgeolocationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RfgeolocationListResponse> {
    return this._client.get('/udl/rfgeolocation', { query, ...options });
  }

  /**
   * Service operation to delete a RF geolocation specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance. Note, delete operations do not remove data
   * from historical or publish/subscribe stores.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/rfgeolocation/${id}`, {
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
  count(query: RfgeolocationCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/udl/rfgeolocation/count', {
      query,
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation intended for initial integration only, to take a list of RF
   * geolocations as a POST body and ingest into the database. This operation is not
   * intended to be used for automated feeds into UDL. Data providers should contact
   * the UDL team for specific role assignments and for instructions on setting up a
   * permanent feed through an alternate mechanism.
   */
  createBulk(body: RfgeolocationCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/rfgeolocation/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to take multiple rfgeolocation records as a POST body and
   * ingest into the database. This operation is intended to be used for automated
   * feeds into UDL. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  fileCreate(body: RfgeolocationFileCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/filedrop/udl-rfgeolocation', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single RF geolocation by its unique ID passed as a
   * path parameter.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<RfgeolocationGetResponse> {
    return this._client.get(`/udl/rfgeolocation/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/rfgeolocation/queryhelp', {
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
    query: RfgeolocationTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RfgeolocationTupleResponse> {
    return this._client.get('/udl/rfgeolocation/tuple', { query, ...options });
  }
}

export type RfgeolocationListResponse = Array<RfgeolocationListResponse.RfgeolocationListResponseItem>;

export namespace RfgeolocationListResponse {
  /**
   * Model representation of geolocation data for a radio frequency (RF) signal or
   * emitter.
   */
  export interface RfgeolocationListResponseItem {
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
     * The order identifier for this RF Geo Location data set.
     */
    orderId: string;

    /**
     * The time representing the mean of the constituent single-burst observations in
     * ISO 8601 UTC with microsecond precision.
     */
    receivedTs: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The order start time for this RF Geo Location data set in ISO 8601 UTC with
     * microsecond precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the image as projected on the
     * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
     * or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    agjson?: string;

    /**
     * The RFGeo algorithm type and version used in geolocation calculations.
     */
    algVersion?: string;

    /**
     * Number of dimensions of the geometry depicted by region.
     */
    andims?: number;

    /**
     * Geographical spatial_ref_sys for region.
     */
    asrid?: number;

    /**
     * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
     * Text representation of the geometry/geography, of the image as projected on the
     * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
     * if included with a POST or PUT request that also specifies a valid 'area' field.
     */
    atext?: string;

    /**
     * Type of region as projected on the ground.
     */
    atype?: string;

    /**
     * The detected signal frequency in megahertz.
     */
    centerFreq?: number;

    /**
     * The area of the confidence ellipse specified in meters squared to contain the
     * emitter with a 95% probability.
     */
    confArea?: number;

    /**
     * Confidence ellipse orientation of semi-major axis about the detection location
     * lat/lon point measured in degrees.
     */
    confOrientation?: number;

    /**
     * Confidence ellipse semi-major axis about the detection location lat/lon point
     * measured in meters.
     */
    confSemiMajor?: number;

    /**
     * Confidence ellipse semi-minor axis about the detection location lat/lon point
     * measured in meters.
     */
    confSemiMinor?: number;

    /**
     * The name of the satellite constellation.
     */
    constellation?: string;

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
     * Specifies the creation time associated with the order in ISO 8601 UTC with
     * microsecond precision.
     */
    createdTs?: string;

    /**
     * The altitude relative to WGS-84 ellipsoid, in meters.
     */
    detectAlt?: number;

    /**
     * WGS-84 latitude of the most likely emitter location coordinate point, in
     * degrees. -90 to 90 degrees (negative values south of equator).
     */
    detectLat?: number;

    /**
     * WGS-84 longitude of the most likely emitter location coordinate point, in
     * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
     */
    detectLon?: number;

    /**
     * The order end time for this RF Geo Location data set in ISO 8601 UTC with
     * microsecond precision.
     */
    endTime?: string;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * Unique identifier of the satellite used to identify and geolocate RF signals of
     * interest. This ID can be used to obtain additional information on an OnOrbit
     * object using the 'get by ID' operation (e.g. /udl/onorbit/{id}). For example,
     * the onorbit object with idOnOrbit = abc would be queried as /udl/onorbit/abc.
     */
    idOnOrbit?: string;

    /**
     * Optional identifier of the geolocated signal of interest RF Emitter for this
     * observation. This ID can be used to obtain additional information on an RF
     * Emitter object using the 'get by ID' operation (e.g. /udl/rfemitter/{id}). For
     * example, the rfemitter object with idRFEmitter = abc would be queried as
     * /udl/rfemitter/abc.
     */
    idRFEmitter?: string;

    /**
     * The maximum detected frequency in megahertz.
     */
    maxFreq?: number;

    /**
     * The minimum detected frequency in megahertz.
     */
    minFreq?: number;

    /**
     * The count of single-burst observations used for this geolocation observation.
     */
    numBursts?: number;

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
     * Optional identifier of the satellite used to identify and geolocate RF signals
     * of interest of this observation. This may be an internal identifier and not
     * necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier of the emitter of interest for this observation. This may be
     * an internal identifier and not necessarily a valid emitter Id.
     */
    origRFEmitterId?: string;

    /**
     * Optional external identifier referencing the entity used in the calculation of
     * the geolocation.
     */
    passGroupId?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * The name of the signal of interest.
     */
    signalOfInterest?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;
  }
}

export type RfgeolocationCountResponse = string;

/**
 * Model representation of geolocation data for a radio frequency (RF) signal or
 * emitter.
 */
export interface RfgeolocationGetResponse {
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
   * The order identifier for this RF Geo Location data set.
   */
  orderId: string;

  /**
   * The time representing the mean of the constituent single-burst observations in
   * ISO 8601 UTC with microsecond precision.
   */
  receivedTs: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The order start time for this RF Geo Location data set in ISO 8601 UTC with
   * microsecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the image as projected on the
   * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
   * or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  agjson?: string;

  /**
   * The RFGeo algorithm type and version used in geolocation calculations.
   */
  algVersion?: string;

  /**
   * Number of dimensions of the geometry depicted by region.
   */
  andims?: number;

  /**
   * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
   * the Point of Interest as projected on the ground.
   */
  area?: string;

  /**
   * Geographical spatial_ref_sys for region.
   */
  asrid?: number;

  /**
   * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
   * Text representation of the geometry/geography, of the image as projected on the
   * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
   * if included with a POST or PUT request that also specifies a valid 'area' field.
   */
  atext?: string;

  /**
   * Type of region as projected on the ground.
   */
  atype?: string;

  /**
   * The detected signal frequency in megahertz.
   */
  centerFreq?: number;

  /**
   * The area of the confidence ellipse specified in meters squared to contain the
   * emitter with a 95% probability.
   */
  confArea?: number;

  /**
   * Confidence ellipse orientation of semi-major axis about the detection location
   * lat/lon point measured in degrees.
   */
  confOrientation?: number;

  /**
   * Confidence ellipse semi-major axis about the detection location lat/lon point
   * measured in meters.
   */
  confSemiMajor?: number;

  /**
   * Confidence ellipse semi-minor axis about the detection location lat/lon point
   * measured in meters.
   */
  confSemiMinor?: number;

  /**
   * The name of the satellite constellation.
   */
  constellation?: string;

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
   * Specifies the creation time associated with the order in ISO 8601 UTC with
   * microsecond precision.
   */
  createdTs?: string;

  /**
   * The altitude relative to WGS-84 ellipsoid, in meters.
   */
  detectAlt?: number;

  /**
   * WGS-84 latitude of the most likely emitter location coordinate point, in
   * degrees. -90 to 90 degrees (negative values south of equator).
   */
  detectLat?: number;

  /**
   * WGS-84 longitude of the most likely emitter location coordinate point, in
   * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
   */
  detectLon?: number;

  /**
   * The order end time for this RF Geo Location data set in ISO 8601 UTC with
   * microsecond precision.
   */
  endTime?: string;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * Unique identifier of the satellite used to identify and geolocate RF signals of
   * interest. This ID can be used to obtain additional information on an OnOrbit
   * object using the 'get by ID' operation (e.g. /udl/onorbit/{id}). For example,
   * the onorbit object with idOnOrbit = abc would be queried as /udl/onorbit/abc.
   */
  idOnOrbit?: string;

  /**
   * Optional identifier of the geolocated signal of interest RF Emitter for this
   * observation. This ID can be used to obtain additional information on an RF
   * Emitter object using the 'get by ID' operation (e.g. /udl/rfemitter/{id}). For
   * example, the rfemitter object with idRFEmitter = abc would be queried as
   * /udl/rfemitter/abc.
   */
  idRFEmitter?: string;

  /**
   * The maximum detected frequency in megahertz.
   */
  maxFreq?: number;

  /**
   * The minimum detected frequency in megahertz.
   */
  minFreq?: number;

  /**
   * The count of single-burst observations used for this geolocation observation.
   */
  numBursts?: number;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: Shared.Onorbit;

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
   * Optional identifier of the satellite used to identify and geolocate RF signals
   * of interest of this observation. This may be an internal identifier and not
   * necessarily a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier of the emitter of interest for this observation. This may be
   * an internal identifier and not necessarily a valid emitter Id.
   */
  origRFEmitterId?: string;

  /**
   * Optional external identifier referencing the entity used in the calculation of
   * the geolocation.
   */
  passGroupId?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * The name of the signal of interest.
   */
  signalOfInterest?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;
}

export type RfgeolocationTupleResponse = Array<RfgeolocationTupleResponse.RfgeolocationTupleResponseItem>;

export namespace RfgeolocationTupleResponse {
  /**
   * Model representation of geolocation data for a radio frequency (RF) signal or
   * emitter.
   */
  export interface RfgeolocationTupleResponseItem {
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
     * The order identifier for this RF Geo Location data set.
     */
    orderId: string;

    /**
     * The time representing the mean of the constituent single-burst observations in
     * ISO 8601 UTC with microsecond precision.
     */
    receivedTs: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The order start time for this RF Geo Location data set in ISO 8601 UTC with
     * microsecond precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the image as projected on the
     * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
     * or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    agjson?: string;

    /**
     * The RFGeo algorithm type and version used in geolocation calculations.
     */
    algVersion?: string;

    /**
     * Number of dimensions of the geometry depicted by region.
     */
    andims?: number;

    /**
     * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
     * the Point of Interest as projected on the ground.
     */
    area?: string;

    /**
     * Geographical spatial_ref_sys for region.
     */
    asrid?: number;

    /**
     * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
     * Text representation of the geometry/geography, of the image as projected on the
     * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
     * if included with a POST or PUT request that also specifies a valid 'area' field.
     */
    atext?: string;

    /**
     * Type of region as projected on the ground.
     */
    atype?: string;

    /**
     * The detected signal frequency in megahertz.
     */
    centerFreq?: number;

    /**
     * The area of the confidence ellipse specified in meters squared to contain the
     * emitter with a 95% probability.
     */
    confArea?: number;

    /**
     * Confidence ellipse orientation of semi-major axis about the detection location
     * lat/lon point measured in degrees.
     */
    confOrientation?: number;

    /**
     * Confidence ellipse semi-major axis about the detection location lat/lon point
     * measured in meters.
     */
    confSemiMajor?: number;

    /**
     * Confidence ellipse semi-minor axis about the detection location lat/lon point
     * measured in meters.
     */
    confSemiMinor?: number;

    /**
     * The name of the satellite constellation.
     */
    constellation?: string;

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
     * Specifies the creation time associated with the order in ISO 8601 UTC with
     * microsecond precision.
     */
    createdTs?: string;

    /**
     * The altitude relative to WGS-84 ellipsoid, in meters.
     */
    detectAlt?: number;

    /**
     * WGS-84 latitude of the most likely emitter location coordinate point, in
     * degrees. -90 to 90 degrees (negative values south of equator).
     */
    detectLat?: number;

    /**
     * WGS-84 longitude of the most likely emitter location coordinate point, in
     * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
     */
    detectLon?: number;

    /**
     * The order end time for this RF Geo Location data set in ISO 8601 UTC with
     * microsecond precision.
     */
    endTime?: string;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * Unique identifier of the satellite used to identify and geolocate RF signals of
     * interest. This ID can be used to obtain additional information on an OnOrbit
     * object using the 'get by ID' operation (e.g. /udl/onorbit/{id}). For example,
     * the onorbit object with idOnOrbit = abc would be queried as /udl/onorbit/abc.
     */
    idOnOrbit?: string;

    /**
     * Optional identifier of the geolocated signal of interest RF Emitter for this
     * observation. This ID can be used to obtain additional information on an RF
     * Emitter object using the 'get by ID' operation (e.g. /udl/rfemitter/{id}). For
     * example, the rfemitter object with idRFEmitter = abc would be queried as
     * /udl/rfemitter/abc.
     */
    idRFEmitter?: string;

    /**
     * The maximum detected frequency in megahertz.
     */
    maxFreq?: number;

    /**
     * The minimum detected frequency in megahertz.
     */
    minFreq?: number;

    /**
     * The count of single-burst observations used for this geolocation observation.
     */
    numBursts?: number;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Shared.Onorbit;

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
     * Optional identifier of the satellite used to identify and geolocate RF signals
     * of interest of this observation. This may be an internal identifier and not
     * necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier of the emitter of interest for this observation. This may be
     * an internal identifier and not necessarily a valid emitter Id.
     */
    origRFEmitterId?: string;

    /**
     * Optional external identifier referencing the entity used in the calculation of
     * the geolocation.
     */
    passGroupId?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * The name of the signal of interest.
     */
    signalOfInterest?: string;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;
  }
}

export interface RfgeolocationCreateParams {
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
   * The order identifier for this RF Geo Location data set.
   */
  orderId: string;

  /**
   * The time representing the mean of the constituent single-burst observations in
   * ISO 8601 UTC with microsecond precision.
   */
  receivedTs: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The order start time for this RF Geo Location data set in ISO 8601 UTC with
   * microsecond precision.
   */
  startTime: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the image as projected on the
   * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
   * or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  agjson?: string;

  /**
   * The RFGeo algorithm type and version used in geolocation calculations.
   */
  algVersion?: string;

  /**
   * Number of dimensions of the geometry depicted by region.
   */
  andims?: number;

  /**
   * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
   * the Point of Interest as projected on the ground.
   */
  area?: string;

  /**
   * Geographical spatial_ref_sys for region.
   */
  asrid?: number;

  /**
   * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
   * Text representation of the geometry/geography, of the image as projected on the
   * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
   * if included with a POST or PUT request that also specifies a valid 'area' field.
   */
  atext?: string;

  /**
   * Type of region as projected on the ground.
   */
  atype?: string;

  /**
   * The detected signal frequency in megahertz.
   */
  centerFreq?: number;

  /**
   * The area of the confidence ellipse specified in meters squared to contain the
   * emitter with a 95% probability.
   */
  confArea?: number;

  /**
   * Confidence ellipse orientation of semi-major axis about the detection location
   * lat/lon point measured in degrees.
   */
  confOrientation?: number;

  /**
   * Confidence ellipse semi-major axis about the detection location lat/lon point
   * measured in meters.
   */
  confSemiMajor?: number;

  /**
   * Confidence ellipse semi-minor axis about the detection location lat/lon point
   * measured in meters.
   */
  confSemiMinor?: number;

  /**
   * The name of the satellite constellation.
   */
  constellation?: string;

  /**
   * Specifies the creation time associated with the order in ISO 8601 UTC with
   * microsecond precision.
   */
  createdTs?: string;

  /**
   * The altitude relative to WGS-84 ellipsoid, in meters.
   */
  detectAlt?: number;

  /**
   * WGS-84 latitude of the most likely emitter location coordinate point, in
   * degrees. -90 to 90 degrees (negative values south of equator).
   */
  detectLat?: number;

  /**
   * WGS-84 longitude of the most likely emitter location coordinate point, in
   * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
   */
  detectLon?: number;

  /**
   * The order end time for this RF Geo Location data set in ISO 8601 UTC with
   * microsecond precision.
   */
  endTime?: string;

  /**
   * Optional ID from external systems. This field has no meaning within UDL and is
   * provided as a convenience for systems that require tracking of an internal
   * system generated ID.
   */
  externalId?: string;

  /**
   * Optional identifier of the geolocated signal of interest RF Emitter for this
   * observation. This ID can be used to obtain additional information on an RF
   * Emitter object using the 'get by ID' operation (e.g. /udl/rfemitter/{id}). For
   * example, the rfemitter object with idRFEmitter = abc would be queried as
   * /udl/rfemitter/abc.
   */
  idRFEmitter?: string;

  /**
   * The maximum detected frequency in megahertz.
   */
  maxFreq?: number;

  /**
   * The minimum detected frequency in megahertz.
   */
  minFreq?: number;

  /**
   * The count of single-burst observations used for this geolocation observation.
   */
  numBursts?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Optional identifier of the satellite used to identify and geolocate RF signals
   * of interest of this observation. This may be an internal identifier and not
   * necessarily a valid satellite number.
   */
  origObjectId?: string;

  /**
   * Optional identifier of the emitter of interest for this observation. This may be
   * an internal identifier and not necessarily a valid emitter Id.
   */
  origRFEmitterId?: string;

  /**
   * Optional external identifier referencing the entity used in the calculation of
   * the geolocation.
   */
  passGroupId?: string;

  /**
   * Satellite/catalog number of the target on-orbit object.
   */
  satNo?: number;

  /**
   * The name of the signal of interest.
   */
  signalOfInterest?: string;

  /**
   * Optional array of provider/source specific tags for this data, where each
   * element is no longer than 32 characters, used for implementing data owner
   * conditional access controls to restrict access to the data. Should be left null
   * by data providers unless conditional access controls are coordinated with the
   * UDL team.
   */
  tags?: Array<string>;
}

export interface RfgeolocationListParams {
  /**
   * The order start time for this RF Geo Location data set in ISO 8601 UTC with
   * microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;
}

export interface RfgeolocationCountParams {
  /**
   * The order start time for this RF Geo Location data set in ISO 8601 UTC with
   * microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;
}

export type RfgeolocationCreateBulkParams = Array<RfgeolocationCreateBulkParams.Body>;

export namespace RfgeolocationCreateBulkParams {
  /**
   * Model representation of geolocation data for a radio frequency (RF) signal or
   * emitter.
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
     * The order identifier for this RF Geo Location data set.
     */
    orderId: string;

    /**
     * The time representing the mean of the constituent single-burst observations in
     * ISO 8601 UTC with microsecond precision.
     */
    receivedTs: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The order start time for this RF Geo Location data set in ISO 8601 UTC with
     * microsecond precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the image as projected on the
     * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
     * or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    agjson?: string;

    /**
     * The RFGeo algorithm type and version used in geolocation calculations.
     */
    algVersion?: string;

    /**
     * Number of dimensions of the geometry depicted by region.
     */
    andims?: number;

    /**
     * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
     * the Point of Interest as projected on the ground.
     */
    area?: string;

    /**
     * Geographical spatial_ref_sys for region.
     */
    asrid?: number;

    /**
     * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
     * Text representation of the geometry/geography, of the image as projected on the
     * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
     * if included with a POST or PUT request that also specifies a valid 'area' field.
     */
    atext?: string;

    /**
     * Type of region as projected on the ground.
     */
    atype?: string;

    /**
     * The detected signal frequency in megahertz.
     */
    centerFreq?: number;

    /**
     * The area of the confidence ellipse specified in meters squared to contain the
     * emitter with a 95% probability.
     */
    confArea?: number;

    /**
     * Confidence ellipse orientation of semi-major axis about the detection location
     * lat/lon point measured in degrees.
     */
    confOrientation?: number;

    /**
     * Confidence ellipse semi-major axis about the detection location lat/lon point
     * measured in meters.
     */
    confSemiMajor?: number;

    /**
     * Confidence ellipse semi-minor axis about the detection location lat/lon point
     * measured in meters.
     */
    confSemiMinor?: number;

    /**
     * The name of the satellite constellation.
     */
    constellation?: string;

    /**
     * Specifies the creation time associated with the order in ISO 8601 UTC with
     * microsecond precision.
     */
    createdTs?: string;

    /**
     * The altitude relative to WGS-84 ellipsoid, in meters.
     */
    detectAlt?: number;

    /**
     * WGS-84 latitude of the most likely emitter location coordinate point, in
     * degrees. -90 to 90 degrees (negative values south of equator).
     */
    detectLat?: number;

    /**
     * WGS-84 longitude of the most likely emitter location coordinate point, in
     * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
     */
    detectLon?: number;

    /**
     * The order end time for this RF Geo Location data set in ISO 8601 UTC with
     * microsecond precision.
     */
    endTime?: string;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * Optional identifier of the geolocated signal of interest RF Emitter for this
     * observation. This ID can be used to obtain additional information on an RF
     * Emitter object using the 'get by ID' operation (e.g. /udl/rfemitter/{id}). For
     * example, the rfemitter object with idRFEmitter = abc would be queried as
     * /udl/rfemitter/abc.
     */
    idRFEmitter?: string;

    /**
     * The maximum detected frequency in megahertz.
     */
    maxFreq?: number;

    /**
     * The minimum detected frequency in megahertz.
     */
    minFreq?: number;

    /**
     * The count of single-burst observations used for this geolocation observation.
     */
    numBursts?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier of the satellite used to identify and geolocate RF signals
     * of interest of this observation. This may be an internal identifier and not
     * necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier of the emitter of interest for this observation. This may be
     * an internal identifier and not necessarily a valid emitter Id.
     */
    origRFEmitterId?: string;

    /**
     * Optional external identifier referencing the entity used in the calculation of
     * the geolocation.
     */
    passGroupId?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * The name of the signal of interest.
     */
    signalOfInterest?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;
  }
}

export type RfgeolocationFileCreateParams = Array<RfgeolocationFileCreateParams.Body>;

export namespace RfgeolocationFileCreateParams {
  /**
   * Model representation of geolocation data for a radio frequency (RF) signal or
   * emitter.
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
     * The order identifier for this RF Geo Location data set.
     */
    orderId: string;

    /**
     * The time representing the mean of the constituent single-burst observations in
     * ISO 8601 UTC with microsecond precision.
     */
    receivedTs: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The order start time for this RF Geo Location data set in ISO 8601 UTC with
     * microsecond precision.
     */
    startTime: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the image as projected on the
     * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
     * or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    agjson?: string;

    /**
     * The RFGeo algorithm type and version used in geolocation calculations.
     */
    algVersion?: string;

    /**
     * Number of dimensions of the geometry depicted by region.
     */
    andims?: number;

    /**
     * Optional geographical region or polygon (lat/lon pairs) of the area surrounding
     * the Point of Interest as projected on the ground.
     */
    area?: string;

    /**
     * Geographical spatial_ref_sys for region.
     */
    asrid?: number;

    /**
     * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
     * Text representation of the geometry/geography, of the image as projected on the
     * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
     * if included with a POST or PUT request that also specifies a valid 'area' field.
     */
    atext?: string;

    /**
     * Type of region as projected on the ground.
     */
    atype?: string;

    /**
     * The detected signal frequency in megahertz.
     */
    centerFreq?: number;

    /**
     * The area of the confidence ellipse specified in meters squared to contain the
     * emitter with a 95% probability.
     */
    confArea?: number;

    /**
     * Confidence ellipse orientation of semi-major axis about the detection location
     * lat/lon point measured in degrees.
     */
    confOrientation?: number;

    /**
     * Confidence ellipse semi-major axis about the detection location lat/lon point
     * measured in meters.
     */
    confSemiMajor?: number;

    /**
     * Confidence ellipse semi-minor axis about the detection location lat/lon point
     * measured in meters.
     */
    confSemiMinor?: number;

    /**
     * The name of the satellite constellation.
     */
    constellation?: string;

    /**
     * Specifies the creation time associated with the order in ISO 8601 UTC with
     * microsecond precision.
     */
    createdTs?: string;

    /**
     * The altitude relative to WGS-84 ellipsoid, in meters.
     */
    detectAlt?: number;

    /**
     * WGS-84 latitude of the most likely emitter location coordinate point, in
     * degrees. -90 to 90 degrees (negative values south of equator).
     */
    detectLat?: number;

    /**
     * WGS-84 longitude of the most likely emitter location coordinate point, in
     * degrees. -180 to 180 degrees (negative values west of Prime Meridian).
     */
    detectLon?: number;

    /**
     * The order end time for this RF Geo Location data set in ISO 8601 UTC with
     * microsecond precision.
     */
    endTime?: string;

    /**
     * Optional ID from external systems. This field has no meaning within UDL and is
     * provided as a convenience for systems that require tracking of an internal
     * system generated ID.
     */
    externalId?: string;

    /**
     * Optional identifier of the geolocated signal of interest RF Emitter for this
     * observation. This ID can be used to obtain additional information on an RF
     * Emitter object using the 'get by ID' operation (e.g. /udl/rfemitter/{id}). For
     * example, the rfemitter object with idRFEmitter = abc would be queried as
     * /udl/rfemitter/abc.
     */
    idRFEmitter?: string;

    /**
     * The maximum detected frequency in megahertz.
     */
    maxFreq?: number;

    /**
     * The minimum detected frequency in megahertz.
     */
    minFreq?: number;

    /**
     * The count of single-burst observations used for this geolocation observation.
     */
    numBursts?: number;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Optional identifier of the satellite used to identify and geolocate RF signals
     * of interest of this observation. This may be an internal identifier and not
     * necessarily a valid satellite number.
     */
    origObjectId?: string;

    /**
     * Optional identifier of the emitter of interest for this observation. This may be
     * an internal identifier and not necessarily a valid emitter Id.
     */
    origRFEmitterId?: string;

    /**
     * Optional external identifier referencing the entity used in the calculation of
     * the geolocation.
     */
    passGroupId?: string;

    /**
     * Satellite/catalog number of the target on-orbit object.
     */
    satNo?: number;

    /**
     * The name of the signal of interest.
     */
    signalOfInterest?: string;

    /**
     * Optional array of provider/source specific tags for this data, where each
     * element is no longer than 32 characters, used for implementing data owner
     * conditional access controls to restrict access to the data. Should be left null
     * by data providers unless conditional access controls are coordinated with the
     * UDL team.
     */
    tags?: Array<string>;
  }
}

export interface RfgeolocationTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * The order start time for this RF Geo Location data set in ISO 8601 UTC with
   * microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)
   */
  startTime: string;
}

export declare namespace Rfgeolocation {
  export {
    type RfgeolocationListResponse as RfgeolocationListResponse,
    type RfgeolocationCountResponse as RfgeolocationCountResponse,
    type RfgeolocationGetResponse as RfgeolocationGetResponse,
    type RfgeolocationTupleResponse as RfgeolocationTupleResponse,
    type RfgeolocationCreateParams as RfgeolocationCreateParams,
    type RfgeolocationListParams as RfgeolocationListParams,
    type RfgeolocationCountParams as RfgeolocationCountParams,
    type RfgeolocationCreateBulkParams as RfgeolocationCreateBulkParams,
    type RfgeolocationFileCreateParams as RfgeolocationFileCreateParams,
    type RfgeolocationTupleParams as RfgeolocationTupleParams,
  };
}
