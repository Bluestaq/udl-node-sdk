// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class BeamContours extends APIResource {
  /**
   * Service operation to take a single BeamContour as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  create(body: BeamContourCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/beamcontour', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single BeamContour by its unique ID passed as a path
   * parameter.
   */
  retrieve(
    params: BeamContourRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BeamcontourFull> {
    const { path_id, body_id } = params;
    return this._client.get(`/udl/beamcontour/${path_id}`, options);
  }

  /**
   * Service operation to update a single BeamContour. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   */
  update(params: BeamContourUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path_id, body_id, body_id, ...body } = params;
    return this._client.put(`/udl/beamcontour/${path_id}`, {
      body: { id: body_id, id: body_id, ...body },
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
    params: BeamContourListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BeamContourListResponse> {
    const { idBeam } = params;
    return this._client.get('/udl/beamcontour', options);
  }

  /**
   * Service operation to delete a BeamContour object specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  delete(params: BeamContourDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path_id, body_id } = params;
    return this._client.delete(`/udl/beamcontour/${path_id}`, {
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
  count(params: BeamContourCountParams, options?: Core.RequestOptions): Core.APIPromise<string> {
    const { idBeam } = params;
    return this._client.get('/udl/beamcontour/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to take a list of BeamContours as a POST body and ingest into
   * the database. This operation is not intended to be used for automated feeds into
   * UDL. Data providers should contact the UDL team for specific role assignments
   * and for instructions on setting up a permanent feed through an alternate
   * mechanism.
   */
  createBulk(body: BeamContourCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/beamcontour/createBulk', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryHelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/beamcontour/queryhelp', {
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
    params: BeamContourTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BeamContourTupleResponse> {
    const { columns, idBeam } = params;
    return this._client.get('/udl/beamcontour/tuple', options);
  }
}

/**
 * Describes the beam contour associated with a beam entity. Beam contours are the
 * geographic representation of the relative gain levels of beam power off of the
 * maximum gain boresight points.
 */
export interface BeamcontourAbridged {
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
  dataMode: string;

  /**
   * ID of the beam.
   */
  idBeam: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type of object represented in this record (BORESIGHT, CONTOUR, SVC AREA).
   * Boresight refers to the point of maximum/peak gain, and should not be confused
   * with the 'aim point' of the related beam. Gain contours are regions of coverage
   * referenced to the relative gain of the related beam. Service Areas are composed
   * of one or more service regions, with each region being either discrete point(s)
   * or a continuous contour.
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The index number of this contour. The value is required if type = CONTOUR.
   */
  contourIdx?: number;

  /**
   * Time the row was created in the database, auto-populated by the system, example
   * = 2018-01-01T16:00:00.123Z.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  /**
   * The relative gain level in dB associated with this boresight or contour. Gain
   * does not apply to service area records. The value is required if type =
   * BORESIGHT or CONTOUR.
   */
  gain?: number;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the image as projected on the
   * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
   * or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  geographyJson?: string;

  /**
   * Number of dimensions of the geometry depicted by region.
   */
  geographyNdims?: number;

  /**
   * Geographical spatial_ref_sys for region.
   */
  geographySrid?: number;

  /**
   * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
   * Text representation of the geometry/geography, of the image as projected on the
   * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
   * if included with a POST or PUT request that also specifies a valid 'area' field.
   */
  geographyText?: string;

  /**
   * Type of region as projected.
   */
  geographyType?: string;

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
   * The region name within the service area.
   */
  regionName?: string;
}

/**
 * Describes the beam contour associated with a beam entity. Beam contours are the
 * geographic representation of the relative gain levels of beam power off of the
 * maximum gain boresight points.
 */
export interface BeamcontourFull {
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
  dataMode: string;

  /**
   * ID of the beam.
   */
  idBeam: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type of object represented in this record (BORESIGHT, CONTOUR, SVC AREA).
   * Boresight refers to the point of maximum/peak gain, and should not be confused
   * with the 'aim point' of the related beam. Gain contours are regions of coverage
   * referenced to the relative gain of the related beam. Service Areas are composed
   * of one or more service regions, with each region being either discrete point(s)
   * or a continuous contour.
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The index number of this contour. The value is required if type = CONTOUR.
   */
  contourIdx?: number;

  /**
   * Time the row was created in the database, auto-populated by the system, example
   * = 2018-01-01T16:00:00.123Z.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  /**
   * The relative gain level in dB associated with this boresight or contour. Gain
   * does not apply to service area records. The value is required if type =
   * BORESIGHT or CONTOUR.
   */
  gain?: number;

  /**
   * GeoJSON or Well Known Text expression of the boresight point, service area point
   * or region, or the gain contour region in geographic longitude, latitude pairs.
   * Boresight and service area point(s) are represented as a 'Point' or
   * 'MultiPoint', service areas and closed gain contours as 'Polygon', and open
   * contours as 'LineString'. This is an optional convenience field only used for
   * create operations. The system will auto-detect the format (Well Known Text or
   * GeoJSON) and populate both geographyText and geographyJson fields appropriately.
   * A create request must contain one of the geography, geographyText, or
   * geographyJson.
   */
  geography?: string;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the image as projected on the
   * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
   * or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  geographyJson?: string;

  /**
   * Number of dimensions of the geometry depicted by region.
   */
  geographyNdims?: number;

  /**
   * Geographical spatial_ref_sys for region.
   */
  geographySrid?: number;

  /**
   * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
   * Text representation of the geometry/geography, of the image as projected on the
   * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
   * if included with a POST or PUT request that also specifies a valid 'area' field.
   */
  geographyText?: string;

  /**
   * Type of region as projected.
   */
  geographyType?: string;

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
   * The region name within the service area.
   */
  regionName?: string;

  /**
   * Time the row was updated in the database, auto-populated by the system, example
   * = 2018-01-01T16:00:00.123Z.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

export type BeamContourListResponse = Array<BeamcontourAbridged>;

export type BeamContourCountResponse = string;

export type BeamContourTupleResponse = Array<BeamcontourFull>;

export interface BeamContourCreateParams {
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
  dataMode: string;

  /**
   * ID of the beam.
   */
  idBeam: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type of object represented in this record (BORESIGHT, CONTOUR, SVC AREA).
   * Boresight refers to the point of maximum/peak gain, and should not be confused
   * with the 'aim point' of the related beam. Gain contours are regions of coverage
   * referenced to the relative gain of the related beam. Service Areas are composed
   * of one or more service regions, with each region being either discrete point(s)
   * or a continuous contour.
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * The index number of this contour. The value is required if type = CONTOUR.
   */
  contourIdx?: number;

  /**
   * Time the row was created in the database, auto-populated by the system, example
   * = 2018-01-01T16:00:00.123Z.
   */
  createdAt?: string;

  /**
   * Application user who created the row in the database, auto-populated by the
   * system.
   */
  createdBy?: string;

  /**
   * The relative gain level in dB associated with this boresight or contour. Gain
   * does not apply to service area records. The value is required if type =
   * BORESIGHT or CONTOUR.
   */
  gain?: number;

  /**
   * GeoJSON or Well Known Text expression of the boresight point, service area point
   * or region, or the gain contour region in geographic longitude, latitude pairs.
   * Boresight and service area point(s) are represented as a 'Point' or
   * 'MultiPoint', service areas and closed gain contours as 'Polygon', and open
   * contours as 'LineString'. This is an optional convenience field only used for
   * create operations. The system will auto-detect the format (Well Known Text or
   * GeoJSON) and populate both geographyText and geographyJson fields appropriately.
   * A create request must contain one of the geography, geographyText, or
   * geographyJson.
   */
  geography?: string;

  /**
   * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
   * representation of the geometry/geography, of the image as projected on the
   * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
   * or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  geographyJson?: string;

  /**
   * Number of dimensions of the geometry depicted by region.
   */
  geographyNdims?: number;

  /**
   * Geographical spatial_ref_sys for region.
   */
  geographySrid?: number;

  /**
   * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
   * Text representation of the geometry/geography, of the image as projected on the
   * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
   * if included with a POST or PUT request that also specifies a valid 'area' field.
   */
  geographyText?: string;

  /**
   * Type of region as projected.
   */
  geographyType?: string;

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
   * The region name within the service area.
   */
  regionName?: string;
}

export interface BeamContourRetrieveParams {
  /**
   * Path param:
   */
  path_id: string;

  /**
   * Body param: The ID of the BeamContour to retrieve.
   */
  body_id: string;
}

export interface BeamContourUpdateParams {
  /**
   * Path param:
   */
  path_id: string;

  /**
   * Body param: The ID of the BeamContour to update.
   */
  body_id: string;

  /**
   * Body param: Classification marking of the data in IC/CAPCO Portion-marked
   * format.
   */
  classificationMarking: string;

  /**
   * Body param: Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST
   * data:
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
  dataMode: string;

  /**
   * Body param: ID of the beam.
   */
  idBeam: string;

  /**
   * Body param: Source of the data.
   */
  source: string;

  /**
   * Body param: The type of object represented in this record (BORESIGHT, CONTOUR,
   * SVC AREA). Boresight refers to the point of maximum/peak gain, and should not be
   * confused with the 'aim point' of the related beam. Gain contours are regions of
   * coverage referenced to the relative gain of the related beam. Service Areas are
   * composed of one or more service regions, with each region being either discrete
   * point(s) or a continuous contour.
   */
  type: string;

  /**
   * Body param: Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Body param: The index number of this contour. The value is required if type =
   * CONTOUR.
   */
  contourIdx?: number;

  /**
   * Body param: Time the row was created in the database, auto-populated by the
   * system, example = 2018-01-01T16:00:00.123Z.
   */
  createdAt?: string;

  /**
   * Body param: Application user who created the row in the database, auto-populated
   * by the system.
   */
  createdBy?: string;

  /**
   * Body param: The relative gain level in dB associated with this boresight or
   * contour. Gain does not apply to service area records. The value is required if
   * type = BORESIGHT or CONTOUR.
   */
  gain?: number;

  /**
   * Body param: GeoJSON or Well Known Text expression of the boresight point,
   * service area point or region, or the gain contour region in geographic
   * longitude, latitude pairs. Boresight and service area point(s) are represented
   * as a 'Point' or 'MultiPoint', service areas and closed gain contours as
   * 'Polygon', and open contours as 'LineString'. This is an optional convenience
   * field only used for create operations. The system will auto-detect the format
   * (Well Known Text or GeoJSON) and populate both geographyText and geographyJson
   * fields appropriately. A create request must contain one of the geography,
   * geographyText, or geographyJson.
   */
  geography?: string;

  /**
   * Body param: Geographical region or polygon (lat/lon pairs), as depicted by the
   * GeoJSON representation of the geometry/geography, of the image as projected on
   * the ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a
   * POST or PUT request that also specifies a valid 'area' or 'atext' field.
   */
  geographyJson?: string;

  /**
   * Body param: Number of dimensions of the geometry depicted by region.
   */
  geographyNdims?: number;

  /**
   * Body param: Geographical spatial_ref_sys for region.
   */
  geographySrid?: number;

  /**
   * Body param: Geographical region or polygon (lon/lat pairs), as depicted by the
   * Well-Known Text representation of the geometry/geography, of the image as
   * projected on the ground. WKT reference:
   * https://www.opengeospatial.org/standards/wkt-crs. Ignored if included with a
   * POST or PUT request that also specifies a valid 'area' field.
   */
  geographyText?: string;

  /**
   * Body param: Type of region as projected.
   */
  geographyType?: string;

  /**
   * Body param: Originating system or organization which produced the data, if
   * different from the source. The origin may be different than the source if the
   * source was a mediating system which forwarded the data on behalf of the origin
   * system. If null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Body param: The originating source network on which this record was created,
   * auto-populated by the system.
   */
  origNetwork?: string;

  /**
   * Body param: The region name within the service area.
   */
  regionName?: string;
}

export interface BeamContourListParams {
  /**
   * ID of the beam.
   */
  idBeam: string;
}

export interface BeamContourDeleteParams {
  /**
   * Path param:
   */
  path_id: string;

  /**
   * Body param: The ID of the BeamContours to delete.
   */
  body_id: string;
}

export interface BeamContourCountParams {
  /**
   * ID of the beam.
   */
  idBeam: string;
}

export type BeamContourCreateBulkParams = Array<BeamContourCreateBulkParams.Body>;

export namespace BeamContourCreateBulkParams {
  /**
   * Describes the beam contour associated with a beam entity. Beam contours are the
   * geographic representation of the relative gain levels of beam power off of the
   * maximum gain boresight points.
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
    dataMode: string;

    /**
     * ID of the beam.
     */
    idBeam: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The type of object represented in this record (BORESIGHT, CONTOUR, SVC AREA).
     * Boresight refers to the point of maximum/peak gain, and should not be confused
     * with the 'aim point' of the related beam. Gain contours are regions of coverage
     * referenced to the relative gain of the related beam. Service Areas are composed
     * of one or more service regions, with each region being either discrete point(s)
     * or a continuous contour.
     */
    type: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The index number of this contour. The value is required if type = CONTOUR.
     */
    contourIdx?: number;

    /**
     * Time the row was created in the database, auto-populated by the system, example
     * = 2018-01-01T16:00:00.123Z.
     */
    createdAt?: string;

    /**
     * Application user who created the row in the database, auto-populated by the
     * system.
     */
    createdBy?: string;

    /**
     * The relative gain level in dB associated with this boresight or contour. Gain
     * does not apply to service area records. The value is required if type =
     * BORESIGHT or CONTOUR.
     */
    gain?: number;

    /**
     * GeoJSON or Well Known Text expression of the boresight point, service area point
     * or region, or the gain contour region in geographic longitude, latitude pairs.
     * Boresight and service area point(s) are represented as a 'Point' or
     * 'MultiPoint', service areas and closed gain contours as 'Polygon', and open
     * contours as 'LineString'. This is an optional convenience field only used for
     * create operations. The system will auto-detect the format (Well Known Text or
     * GeoJSON) and populate both geographyText and geographyJson fields appropriately.
     * A create request must contain one of the geography, geographyText, or
     * geographyJson.
     */
    geography?: string;

    /**
     * Geographical region or polygon (lat/lon pairs), as depicted by the GeoJSON
     * representation of the geometry/geography, of the image as projected on the
     * ground. GeoJSON Reference: https://geojson.org/. Ignored if included with a POST
     * or PUT request that also specifies a valid 'area' or 'atext' field.
     */
    geographyJson?: string;

    /**
     * Number of dimensions of the geometry depicted by region.
     */
    geographyNdims?: number;

    /**
     * Geographical spatial_ref_sys for region.
     */
    geographySrid?: number;

    /**
     * Geographical region or polygon (lon/lat pairs), as depicted by the Well-Known
     * Text representation of the geometry/geography, of the image as projected on the
     * ground. WKT reference: https://www.opengeospatial.org/standards/wkt-crs. Ignored
     * if included with a POST or PUT request that also specifies a valid 'area' field.
     */
    geographyText?: string;

    /**
     * Type of region as projected.
     */
    geographyType?: string;

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
     * The region name within the service area.
     */
    regionName?: string;
  }
}

export interface BeamContourTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the �queryhelp� operation
   * for a complete list of possible fields.
   */
  columns: string;

  /**
   * ID of the beam.
   */
  idBeam: string;
}

export declare namespace BeamContours {
  export {
    type BeamcontourAbridged as BeamcontourAbridged,
    type BeamcontourFull as BeamcontourFull,
    type BeamContourListResponse as BeamContourListResponse,
    type BeamContourCountResponse as BeamContourCountResponse,
    type BeamContourTupleResponse as BeamContourTupleResponse,
    type BeamContourCreateParams as BeamContourCreateParams,
    type BeamContourRetrieveParams as BeamContourRetrieveParams,
    type BeamContourUpdateParams as BeamContourUpdateParams,
    type BeamContourListParams as BeamContourListParams,
    type BeamContourDeleteParams as BeamContourDeleteParams,
    type BeamContourCountParams as BeamContourCountParams,
    type BeamContourCreateBulkParams as BeamContourCreateBulkParams,
    type BeamContourTupleParams as BeamContourTupleParams,
  };
}
