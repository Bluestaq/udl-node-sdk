// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SensorStating extends APIResource {
  /**
   * Service operation to take a single SensorStaging record as a POST body and
   * ingest into the staging database. This API allows users to create, manage, and
   * review SensorStaging records in a staging environment before their incorporation
   * into the production UDL. It supports workflows involving validation, review, and
   * approval of sensor data to ensure consistency, compliance, and data quality. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sensorStating.create({
   *   classificationMarking: 'U',
   *   sensorName: 'SENSOR_NAME',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: SensorStatingCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/sensorstaging', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single SensorStaging record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.sensorStating.update('id', {
   *   classificationMarking: 'U',
   *   sensorName: 'SENSOR_NAME',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: SensorStatingUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/sensorstaging/${pathID}`, {
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
   * for await (const sensorStatingListResponse of client.sensorStating.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SensorStatingListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SensorStatingListResponsesOffsetPage, SensorStatingListResponse> {
    return this._client.getAPIList('/udl/sensorstaging', OffsetPage<SensorStatingListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a SensorStaging record specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sensorStating.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/sensorstaging/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to take multiple SensorStaging records as a POST body and
   * ingest into the staging database. This API allows users to create, manage, and
   * review SensorStaging records in a staging environment before their incorporation
   * into the production UDL. It supports workflows involving validation, review, and
   * approval of sensor data to ensure consistency, compliance, and data quality. A
   * specific role is required to perform this service operation. Please contact the
   * UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.sensorStating.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       sensorName: 'SENSOR_NAME',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: SensorStatingCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/sensorstaging/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single SensorStaging record by its unique ID passed
   * as a path parameter.
   *
   * @example
   * ```ts
   * const sensorStating = await client.sensorStating.get('id');
   * ```
   */
  get(
    id: string,
    query: SensorStatingGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SensorStatingGetResponse> {
    return this._client.get(path`/udl/sensorstaging/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.sensorStating.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<SensorStatingQueryhelpResponse> {
    return this._client.get('/udl/sensorstaging/queryhelp', options);
  }
}

export type SensorStatingListResponsesOffsetPage = OffsetPage<SensorStatingListResponse>;

/**
 * Model representation of a nominal sensor. This entity contains minimal
 * information used to stage sensor entities.
 */
export interface SensorStatingListResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Unique name of this sensor.
   */
  sensorName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Sensor altitude relative to WGS-84 ellipsoid, in meters. Positive values
   * indicate a sensor height above ellipsoid, and negative values indicate a sensor
   * height below ellipsoid.
   */
  altitude?: number;

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
   * WGS-84 latitude of the sensor, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the sensor equipment geographic coordinates reside. This value is
   * typically the ISO 3166 Alpha-2 two-character country code, however it can also
   * represent various consortiums that do not appear in the ISO document. The code
   * must correspond to an existing country in the UDL’s country API. Call
   * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
   * alternate code values that exist for the specified country code.
   */
  locationCountry?: string;

  /**
   * WGS-84 longitude of the sensor, in degrees. -180 to 180 degrees (negative values
   * west of Prime Meridian).
   */
  lon?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity
   * owning the sensor. This value is typically the ISO 3166 Alpha-2 two-character
   * country code, however it can also represent various consortiums that do not
   * appear in the ISO document. The code must correspond to an existing country in
   * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
   * ISO Alpha-3 code, or alternate code values that exist for the specified country
   * code.
   */
  ownerCountry?: string;

  /**
   * Number assigned to this sensor. Since there is no authoritative numbering
   * scheme, these numbers sometimes collide across sensors (especially commercial
   * sensors). It is therefore not a unique identifier.
   */
  sensorNumber?: number;

  /**
   * The observation measurement type produced by this sensor.
   */
  sensorObservationType?: string;

  /**
   * The specific sensor type and/or surveillance capability of this sensor.
   */
  sensorType?: string;

  /**
   * Optional short or abbreviated name of this sensor.
   */
  shortName?: string;
}

/**
 * Model representation of a nominal sensor. This entity contains minimal
 * information used to stage sensor entities.
 */
export interface SensorStatingGetResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Unique name of this sensor.
   */
  sensorName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Sensor altitude relative to WGS-84 ellipsoid, in meters. Positive values
   * indicate a sensor height above ellipsoid, and negative values indicate a sensor
   * height below ellipsoid.
   */
  altitude?: number;

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
   * WGS-84 latitude of the sensor, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the sensor equipment geographic coordinates reside. This value is
   * typically the ISO 3166 Alpha-2 two-character country code, however it can also
   * represent various consortiums that do not appear in the ISO document. The code
   * must correspond to an existing country in the UDL’s country API. Call
   * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
   * alternate code values that exist for the specified country code.
   */
  locationCountry?: string;

  /**
   * WGS-84 longitude of the sensor, in degrees. -180 to 180 degrees (negative values
   * west of Prime Meridian).
   */
  lon?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity
   * owning the sensor. This value is typically the ISO 3166 Alpha-2 two-character
   * country code, however it can also represent various consortiums that do not
   * appear in the ISO document. The code must correspond to an existing country in
   * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
   * ISO Alpha-3 code, or alternate code values that exist for the specified country
   * code.
   */
  ownerCountry?: string;

  /**
   * Number assigned to this sensor. Since there is no authoritative numbering
   * scheme, these numbers sometimes collide across sensors (especially commercial
   * sensors). It is therefore not a unique identifier.
   */
  sensorNumber?: number;

  /**
   * The observation measurement type produced by this sensor.
   */
  sensorObservationType?: string;

  /**
   * The specific sensor type and/or surveillance capability of this sensor.
   */
  sensorType?: string;

  /**
   * Optional short or abbreviated name of this sensor.
   */
  shortName?: string;
}

export interface SensorStatingQueryhelpResponse {
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

export interface SensorStatingCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Unique name of this sensor.
   */
  sensorName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Sensor altitude relative to WGS-84 ellipsoid, in meters. Positive values
   * indicate a sensor height above ellipsoid, and negative values indicate a sensor
   * height below ellipsoid.
   */
  altitude?: number;

  /**
   * WGS-84 latitude of the sensor, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the sensor equipment geographic coordinates reside. This value is
   * typically the ISO 3166 Alpha-2 two-character country code, however it can also
   * represent various consortiums that do not appear in the ISO document. The code
   * must correspond to an existing country in the UDL’s country API. Call
   * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
   * alternate code values that exist for the specified country code.
   */
  locationCountry?: string;

  /**
   * WGS-84 longitude of the sensor, in degrees. -180 to 180 degrees (negative values
   * west of Prime Meridian).
   */
  lon?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity
   * owning the sensor. This value is typically the ISO 3166 Alpha-2 two-character
   * country code, however it can also represent various consortiums that do not
   * appear in the ISO document. The code must correspond to an existing country in
   * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
   * ISO Alpha-3 code, or alternate code values that exist for the specified country
   * code.
   */
  ownerCountry?: string;

  /**
   * Number assigned to this sensor. Since there is no authoritative numbering
   * scheme, these numbers sometimes collide across sensors (especially commercial
   * sensors). It is therefore not a unique identifier.
   */
  sensorNumber?: number;

  /**
   * The observation measurement type produced by this sensor.
   */
  sensorObservationType?: string;

  /**
   * The specific sensor type and/or surveillance capability of this sensor.
   */
  sensorType?: string;

  /**
   * Optional short or abbreviated name of this sensor.
   */
  shortName?: string;
}

export interface SensorStatingUpdateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Unique name of this sensor.
   */
  sensorName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Sensor altitude relative to WGS-84 ellipsoid, in meters. Positive values
   * indicate a sensor height above ellipsoid, and negative values indicate a sensor
   * height below ellipsoid.
   */
  altitude?: number;

  /**
   * WGS-84 latitude of the sensor, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the sensor equipment geographic coordinates reside. This value is
   * typically the ISO 3166 Alpha-2 two-character country code, however it can also
   * represent various consortiums that do not appear in the ISO document. The code
   * must correspond to an existing country in the UDL’s country API. Call
   * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
   * alternate code values that exist for the specified country code.
   */
  locationCountry?: string;

  /**
   * WGS-84 longitude of the sensor, in degrees. -180 to 180 degrees (negative values
   * west of Prime Meridian).
   */
  lon?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity
   * owning the sensor. This value is typically the ISO 3166 Alpha-2 two-character
   * country code, however it can also represent various consortiums that do not
   * appear in the ISO document. The code must correspond to an existing country in
   * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
   * ISO Alpha-3 code, or alternate code values that exist for the specified country
   * code.
   */
  ownerCountry?: string;

  /**
   * Number assigned to this sensor. Since there is no authoritative numbering
   * scheme, these numbers sometimes collide across sensors (especially commercial
   * sensors). It is therefore not a unique identifier.
   */
  sensorNumber?: number;

  /**
   * The observation measurement type produced by this sensor.
   */
  sensorObservationType?: string;

  /**
   * The specific sensor type and/or surveillance capability of this sensor.
   */
  sensorType?: string;

  /**
   * Optional short or abbreviated name of this sensor.
   */
  shortName?: string;
}

export interface SensorStatingListParams extends OffsetPageParams {}

export interface SensorStatingCreateBulkParams {
  body: Array<SensorStatingCreateBulkParams.Body>;
}

export namespace SensorStatingCreateBulkParams {
  /**
   * Model representation of a nominal sensor. This entity contains minimal
   * information used to stage sensor entities.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Unique name of this sensor.
     */
    sensorName: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Sensor altitude relative to WGS-84 ellipsoid, in meters. Positive values
     * indicate a sensor height above ellipsoid, and negative values indicate a sensor
     * height below ellipsoid.
     */
    altitude?: number;

    /**
     * WGS-84 latitude of the sensor, in degrees. -90 to 90 degrees (negative values
     * south of equator).
     */
    lat?: number;

    /**
     * The DoD Standard Country Code designator for the country or political entity to
     * which the sensor equipment geographic coordinates reside. This value is
     * typically the ISO 3166 Alpha-2 two-character country code, however it can also
     * represent various consortiums that do not appear in the ISO document. The code
     * must correspond to an existing country in the UDL’s country API. Call
     * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
     * alternate code values that exist for the specified country code.
     */
    locationCountry?: string;

    /**
     * WGS-84 longitude of the sensor, in degrees. -180 to 180 degrees (negative values
     * west of Prime Meridian).
     */
    lon?: number;

    /**
     * The DoD Standard Country Code designator for the country or political entity
     * owning the sensor. This value is typically the ISO 3166 Alpha-2 two-character
     * country code, however it can also represent various consortiums that do not
     * appear in the ISO document. The code must correspond to an existing country in
     * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
     * ISO Alpha-3 code, or alternate code values that exist for the specified country
     * code.
     */
    ownerCountry?: string;

    /**
     * Number assigned to this sensor. Since there is no authoritative numbering
     * scheme, these numbers sometimes collide across sensors (especially commercial
     * sensors). It is therefore not a unique identifier.
     */
    sensorNumber?: number;

    /**
     * The observation measurement type produced by this sensor.
     */
    sensorObservationType?: string;

    /**
     * The specific sensor type and/or surveillance capability of this sensor.
     */
    sensorType?: string;

    /**
     * Optional short or abbreviated name of this sensor.
     */
    shortName?: string;
  }
}

export interface SensorStatingGetParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace SensorStating {
  export {
    type SensorStatingListResponse as SensorStatingListResponse,
    type SensorStatingGetResponse as SensorStatingGetResponse,
    type SensorStatingQueryhelpResponse as SensorStatingQueryhelpResponse,
    type SensorStatingListResponsesOffsetPage as SensorStatingListResponsesOffsetPage,
    type SensorStatingCreateParams as SensorStatingCreateParams,
    type SensorStatingUpdateParams as SensorStatingUpdateParams,
    type SensorStatingListParams as SensorStatingListParams,
    type SensorStatingCreateBulkParams as SensorStatingCreateBulkParams,
    type SensorStatingGetParams as SensorStatingGetParams,
  };
}
