// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Location extends APIResource {
  /**
   * Service operation to take a single location as a POST body and ingest into the
   * database. Locations are specific fixed points on the earth and are used to
   * denote the locations of fixed sensors, operating units, etc. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  create(body: LocationCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/location', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single location. Locations are specific fixed
   * points on the earth and are used to denote the locations of fixed sensors,
   * operating units, etc. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  update(id: string, body: LocationUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/location/${id}`, {
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
   */
  list(
    query: LocationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocationListResponse> {
    return this._client.get('/udl/location', { query, ...options });
  }

  /**
   * Service operation to delete a location object specified by the passed ID path
   * parameter. Locations are specific fixed points on the earth and are used to
   * denote the locations of fixed sensors, operating units, etc. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/location/${id}`, {
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
   */
  count(query: LocationCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/location/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single location record by its unique ID passed as a
   * path parameter. Locations are specific fixed points on the earth and are used to
   * denote the locations of fixed sensors, operating units, etc.
   */
  get(
    id: string,
    query: LocationGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocationFull> {
    return this._client.get(path`/udl/location/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/location/queryhelp', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
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
  tuple(query: LocationTupleParams, options?: RequestOptions): APIPromise<LocationTupleResponse> {
    return this._client.get('/udl/location/tuple', { query, ...options });
  }
}

/**
 * Model representation of a location, which is a specific fixed point on the earth
 * and is used to denote the locations of fixed sensors, operating units, etc.
 */
export interface LocationFull {
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
   * Location name.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Altitude of the location, in kilometers.
   */
  altitude?: number;

  /**
   * The country code. This value is typically the ISO 3166 Alpha-2 two-character
   * country code, however it can also represent various consortiums that do not
   * appear in the ISO document. The code must correspond to an existing country in
   * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
   * ISO Alpha-3 code, or alternate code values that exist for the specified country
   * code.
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
   * Unique identifier of the location, auto-generated by the system.
   */
  idLocation?: string;

  /**
   * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

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
   * Time the row was last updated in the database, auto-populated by the system.
   */
  updatedAt?: string;

  /**
   * Application user who updated the row in the database, auto-populated by the
   * system.
   */
  updatedBy?: string;
}

/**
 * Model representation of a location, which is a specific fixed point on the earth
 * and is used to denote the locations of fixed sensors, operating units, etc.
 */
export interface LocationIngest {
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
   * Location name.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Altitude of the location, in kilometers.
   */
  altitude?: number;

  /**
   * The country code. This value is typically the ISO 3166 Alpha-2 two-character
   * country code, however it can also represent various consortiums that do not
   * appear in the ISO document. The code must correspond to an existing country in
   * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
   * ISO Alpha-3 code, or alternate code values that exist for the specified country
   * code.
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
   * Unique identifier of the location, auto-generated by the system.
   */
  idLocation?: string;

  /**
   * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

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
}

export type LocationListResponse = Array<LocationListResponse.LocationListResponseItem>;

export namespace LocationListResponse {
  /**
   * Model representation of a location, which is a specific fixed point on the earth
   * and is used to denote the locations of fixed sensors, operating units, etc.
   */
  export interface LocationListResponseItem {
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
     * Location name.
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Altitude of the location, in kilometers.
     */
    altitude?: number;

    /**
     * The country code. This value is typically the ISO 3166 Alpha-2 two-character
     * country code, however it can also represent various consortiums that do not
     * appear in the ISO document. The code must correspond to an existing country in
     * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
     * ISO Alpha-3 code, or alternate code values that exist for the specified country
     * code.
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
     * Unique identifier of the location, auto-generated by the system.
     */
    idLocation?: string;

    /**
     * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
     * south of equator).
     */
    lat?: number;

    /**
     * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon?: number;

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
  }
}

export type LocationCountResponse = string;

export type LocationTupleResponse = Array<LocationFull>;

export interface LocationCreateParams {
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
   * Location name.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Altitude of the location, in kilometers.
   */
  altitude?: number;

  /**
   * The country code. This value is typically the ISO 3166 Alpha-2 two-character
   * country code, however it can also represent various consortiums that do not
   * appear in the ISO document. The code must correspond to an existing country in
   * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
   * ISO Alpha-3 code, or alternate code values that exist for the specified country
   * code.
   */
  countryCode?: string;

  /**
   * Unique identifier of the location, auto-generated by the system.
   */
  idLocation?: string;

  /**
   * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface LocationUpdateParams {
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
   * Location name.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Altitude of the location, in kilometers.
   */
  altitude?: number;

  /**
   * The country code. This value is typically the ISO 3166 Alpha-2 two-character
   * country code, however it can also represent various consortiums that do not
   * appear in the ISO document. The code must correspond to an existing country in
   * the UDL’s country API. Call udl/country/{code} to get any associated FIPS code,
   * ISO Alpha-3 code, or alternate code values that exist for the specified country
   * code.
   */
  countryCode?: string;

  /**
   * Unique identifier of the location, auto-generated by the system.
   */
  idLocation?: string;

  /**
   * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface LocationListParams {
  firstResult?: number;

  maxResults?: number;
}

export interface LocationCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface LocationGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface LocationTupleParams {
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

export declare namespace Location {
  export {
    type LocationFull as LocationFull,
    type LocationIngest as LocationIngest,
    type LocationListResponse as LocationListResponse,
    type LocationCountResponse as LocationCountResponse,
    type LocationTupleResponse as LocationTupleResponse,
    type LocationCreateParams as LocationCreateParams,
    type LocationUpdateParams as LocationUpdateParams,
    type LocationListParams as LocationListParams,
    type LocationCountParams as LocationCountParams,
    type LocationGetParams as LocationGetParams,
    type LocationTupleParams as LocationTupleParams,
  };
}
