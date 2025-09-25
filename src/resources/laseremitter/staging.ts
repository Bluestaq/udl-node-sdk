// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Staging extends APIResource {
  /**
   * Service operation to take a single LaserEmitterStaging record as a POST body and
   * ingest into the staging database. This API allows users to create, manage, and
   * review LaserEmitterStaging records in a staging environment before their
   * incorporation into the production UDL. It supports workflows involving
   * validation, review, and approval of emitter data to ensure consistency,
   * compliance, and data quality. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.laseremitter.staging.create({
   *   classificationMarking: 'U',
   *   laserName: 'LASER_NAME',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: StagingCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/laseremitterstaging', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single LaserEmitterStaging record by its unique ID
   * passed as a path parameter.
   *
   * @example
   * ```ts
   * const staging = await client.laseremitter.staging.retrieve(
   *   'id',
   * );
   * ```
   */
  retrieve(
    id: string,
    query: StagingRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StagingRetrieveResponse> {
    return this._client.get(path`/udl/laseremitterstaging/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single LaserEmitterStaging record. A specific role
   * is required to perform this service operation. Please contact the UDL team for
   * assistance.
   *
   * @example
   * ```ts
   * await client.laseremitter.staging.update('id', {
   *   classificationMarking: 'U',
   *   laserName: 'LASER_NAME',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: StagingUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/laseremitterstaging/${pathID}`, {
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
   * for await (const stagingListResponse of client.laseremitter.staging.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: StagingListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<StagingListResponsesOffsetPage, StagingListResponse> {
    return this._client.getAPIList('/udl/laseremitterstaging', OffsetPage<StagingListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete a LaserEmitterStaging record specified by the passed
   * ID path parameter. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.laseremitter.staging.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/laseremitterstaging/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to take multiple LaserEmitterStaging records as a POST body
   * and ingest into the staging database. This API allows users to create, manage,
   * and review LaserEmitterStaging records in a staging environment before their
   * incorporation into the production UDL. It supports workflows involving
   * validation, review, and approval of emitter data to ensure consistency,
   * compliance, and data quality. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.laseremitter.staging.createBulk({
   *   body: [
   *     {
   *       classificationMarking: 'U',
   *       laserName: 'LASER_NAME',
   *       source: 'Bluestaq',
   *     },
   *   ],
   * });
   * ```
   */
  createBulk(params: StagingCreateBulkParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post('/udl/laseremitterstaging/createBulk', {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.laseremitter.staging.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<StagingQueryhelpResponse> {
    return this._client.get('/udl/laseremitterstaging/queryhelp', options);
  }
}

export type StagingListResponsesOffsetPage = OffsetPage<StagingListResponse>;

/**
 * Model representation of a nominal laser emitter. This entity contains minimal
 * information used to stage laser emitter entities.
 */
export interface StagingRetrieveResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Unique name of this Laser Emitter.
   */
  laserName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Emitter altitude relative to WGS-84 ellipsoid, in kilometers. Positive values
   * indicate an emitter height above ellipsoid, and negative values indicate an
   * emitter height below ellipsoid.
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
   * The type of laser (e.g. CONTINUOUS WAVE, PULSED, etc.).
   */
  laserType?: string;

  /**
   * WGS-84 latitude of the emitter, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the Laser Emitter equipment geographic coordinates reside. This value is
   * typically the ISO 3166 Alpha-2 two-character country code, however it can also
   * represent various consortiums that do not appear in the ISO document. The code
   * must correspond to an existing country in the UDL’s country API. Call
   * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
   * alternate code values that exist for the specified country code.
   */
  locationCountry?: string;

  /**
   * WGS-84 longitude of the emitter, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity
   * owning the Laser Emitter. This value is typically the ISO 3166 Alpha-2
   * two-character country code, however it can also represent various consortiums
   * that do not appear in the ISO document. The code must correspond to an existing
   * country in the UDL’s country API. Call udl/country/{code} to get any associated
   * FIPS code, ISO Alpha-3 code, or alternate code values that exist for the
   * specified country code.
   */
  ownerCountry?: string;
}

/**
 * Model representation of a nominal laser emitter. This entity contains minimal
 * information used to stage laser emitter entities.
 */
export interface StagingListResponse {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Unique name of this Laser Emitter.
   */
  laserName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Emitter altitude relative to WGS-84 ellipsoid, in kilometers. Positive values
   * indicate an emitter height above ellipsoid, and negative values indicate an
   * emitter height below ellipsoid.
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
   * The type of laser (e.g. CONTINUOUS WAVE, PULSED, etc.).
   */
  laserType?: string;

  /**
   * WGS-84 latitude of the emitter, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the Laser Emitter equipment geographic coordinates reside. This value is
   * typically the ISO 3166 Alpha-2 two-character country code, however it can also
   * represent various consortiums that do not appear in the ISO document. The code
   * must correspond to an existing country in the UDL’s country API. Call
   * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
   * alternate code values that exist for the specified country code.
   */
  locationCountry?: string;

  /**
   * WGS-84 longitude of the emitter, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity
   * owning the Laser Emitter. This value is typically the ISO 3166 Alpha-2
   * two-character country code, however it can also represent various consortiums
   * that do not appear in the ISO document. The code must correspond to an existing
   * country in the UDL’s country API. Call udl/country/{code} to get any associated
   * FIPS code, ISO Alpha-3 code, or alternate code values that exist for the
   * specified country code.
   */
  ownerCountry?: string;
}

export interface StagingQueryhelpResponse {
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

export interface StagingCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Unique name of this Laser Emitter.
   */
  laserName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Emitter altitude relative to WGS-84 ellipsoid, in kilometers. Positive values
   * indicate an emitter height above ellipsoid, and negative values indicate an
   * emitter height below ellipsoid.
   */
  altitude?: number;

  /**
   * The type of laser (e.g. CONTINUOUS WAVE, PULSED, etc.).
   */
  laserType?: string;

  /**
   * WGS-84 latitude of the emitter, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the Laser Emitter equipment geographic coordinates reside. This value is
   * typically the ISO 3166 Alpha-2 two-character country code, however it can also
   * represent various consortiums that do not appear in the ISO document. The code
   * must correspond to an existing country in the UDL’s country API. Call
   * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
   * alternate code values that exist for the specified country code.
   */
  locationCountry?: string;

  /**
   * WGS-84 longitude of the emitter, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity
   * owning the Laser Emitter. This value is typically the ISO 3166 Alpha-2
   * two-character country code, however it can also represent various consortiums
   * that do not appear in the ISO document. The code must correspond to an existing
   * country in the UDL’s country API. Call udl/country/{code} to get any associated
   * FIPS code, ISO Alpha-3 code, or alternate code values that exist for the
   * specified country code.
   */
  ownerCountry?: string;
}

export interface StagingRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface StagingUpdateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Unique name of this Laser Emitter.
   */
  laserName: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Emitter altitude relative to WGS-84 ellipsoid, in kilometers. Positive values
   * indicate an emitter height above ellipsoid, and negative values indicate an
   * emitter height below ellipsoid.
   */
  altitude?: number;

  /**
   * The type of laser (e.g. CONTINUOUS WAVE, PULSED, etc.).
   */
  laserType?: string;

  /**
   * WGS-84 latitude of the emitter, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the Laser Emitter equipment geographic coordinates reside. This value is
   * typically the ISO 3166 Alpha-2 two-character country code, however it can also
   * represent various consortiums that do not appear in the ISO document. The code
   * must correspond to an existing country in the UDL’s country API. Call
   * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
   * alternate code values that exist for the specified country code.
   */
  locationCountry?: string;

  /**
   * WGS-84 longitude of the emitter, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

  /**
   * The DoD Standard Country Code designator for the country or political entity
   * owning the Laser Emitter. This value is typically the ISO 3166 Alpha-2
   * two-character country code, however it can also represent various consortiums
   * that do not appear in the ISO document. The code must correspond to an existing
   * country in the UDL’s country API. Call udl/country/{code} to get any associated
   * FIPS code, ISO Alpha-3 code, or alternate code values that exist for the
   * specified country code.
   */
  ownerCountry?: string;
}

export interface StagingListParams extends OffsetPageParams {}

export interface StagingCreateBulkParams {
  body: Array<StagingCreateBulkParams.Body>;
}

export namespace StagingCreateBulkParams {
  /**
   * Model representation of a nominal laser emitter. This entity contains minimal
   * information used to stage laser emitter entities.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Unique name of this Laser Emitter.
     */
    laserName: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Emitter altitude relative to WGS-84 ellipsoid, in kilometers. Positive values
     * indicate an emitter height above ellipsoid, and negative values indicate an
     * emitter height below ellipsoid.
     */
    altitude?: number;

    /**
     * The type of laser (e.g. CONTINUOUS WAVE, PULSED, etc.).
     */
    laserType?: string;

    /**
     * WGS-84 latitude of the emitter, in degrees. -90 to 90 degrees (negative values
     * south of equator).
     */
    lat?: number;

    /**
     * The DoD Standard Country Code designator for the country or political entity to
     * which the Laser Emitter equipment geographic coordinates reside. This value is
     * typically the ISO 3166 Alpha-2 two-character country code, however it can also
     * represent various consortiums that do not appear in the ISO document. The code
     * must correspond to an existing country in the UDL’s country API. Call
     * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
     * alternate code values that exist for the specified country code.
     */
    locationCountry?: string;

    /**
     * WGS-84 longitude of the emitter, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon?: number;

    /**
     * The DoD Standard Country Code designator for the country or political entity
     * owning the Laser Emitter. This value is typically the ISO 3166 Alpha-2
     * two-character country code, however it can also represent various consortiums
     * that do not appear in the ISO document. The code must correspond to an existing
     * country in the UDL’s country API. Call udl/country/{code} to get any associated
     * FIPS code, ISO Alpha-3 code, or alternate code values that exist for the
     * specified country code.
     */
    ownerCountry?: string;
  }
}

export declare namespace Staging {
  export {
    type StagingRetrieveResponse as StagingRetrieveResponse,
    type StagingListResponse as StagingListResponse,
    type StagingQueryhelpResponse as StagingQueryhelpResponse,
    type StagingListResponsesOffsetPage as StagingListResponsesOffsetPage,
    type StagingCreateParams as StagingCreateParams,
    type StagingRetrieveParams as StagingRetrieveParams,
    type StagingUpdateParams as StagingUpdateParams,
    type StagingListParams as StagingListParams,
    type StagingCreateBulkParams as StagingCreateBulkParams,
  };
}
