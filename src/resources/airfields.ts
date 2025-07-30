// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class Airfields extends APIResource {
  /**
   * Service operation to take a single Airfield as a POST body and ingest into the
   * database. This operation is not intended to be used for automated feeds into
   * UDL. Data providers should contact the UDL team for specific role assignments
   * and for instructions on setting up a permanent feed through an alternate
   * mechanism.
   *
   * @example
   * ```ts
   * await client.airfields.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'Hickam Air Force Base',
   *   source: 'Bluestaq',
   *   type: 'Commercial',
   * });
   * ```
   */
  create(body: AirfieldCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/airfield', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Airfield by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const airfieldFull = await client.airfields.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: AirfieldRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AirfieldFull> {
    return this._client.get(path`/udl/airfield/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single Airfield. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.airfields.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'Hickam Air Force Base',
   *   source: 'Bluestaq',
   *   type: 'Commercial',
   * });
   * ```
   */
  update(pathID: string, body: AirfieldUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/airfield/${pathID}`, {
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
   * for await (const airfieldAbridged of client.airfields.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AirfieldListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AirfieldAbridgedsOffsetPage, AirfieldAbridged> {
    return this._client.getAPIList('/udl/airfield', OffsetPage<AirfieldAbridged>, { query, ...options });
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
   * const response = await client.airfields.count();
   * ```
   */
  count(query: AirfieldCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/airfield/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.airfields.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<AirfieldQueryhelpResponse> {
    return this._client.get('/udl/airfield/queryhelp', options);
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
   * const airfieldFulls = await client.airfields.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: AirfieldTupleParams, options?: RequestOptions): APIPromise<AirfieldTupleResponse> {
    return this._client.get('/udl/airfield/tuple', { query, ...options });
  }
}

export type AirfieldAbridgedsOffsetPage = OffsetPage<AirfieldAbridged>;

/**
 * Properties and characteristics of an airfield, which includes location, airfield
 * codes, suitability codes, and remarks.
 */
export interface AirfieldAbridged {
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
   * The name of the airfield.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The airfield activity use type (e.g. Commercial, Airport, Heliport, Gliderport,
   * etc.).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Alternate Airfield identifier provided by source.
   */
  altAirfieldId?: string;

  /**
   * Alternative names for this airfield.
   */
  alternativeNames?: Array<string>;

  /**
   * The closest city to the location of this airfield.
   */
  city?: string;

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
   * The country name where this airfield is located.
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
   * Information regarding daylight saving time as is relevant to the location and
   * operation of this airfield.
   */
  dstInfo?: string;

  /**
   * Elevation of the airfield above mean sea level, in feet. Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  elevFt?: number;

  /**
   * Elevation of the airfield above mean sea level, in meters. Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  elevM?: number;

  /**
   * The Federal Aviation Administration (FAA) location identifier of this airfield.
   */
  faa?: string;

  /**
   * Air Force geographic location code of the airfield.
   */
  geoloc?: string;

  /**
   * Time difference between the location of the airfield and the Greenwich Mean Time
   * (GMT), expressed as +/-HH:MM. Time zones east of Greenwich have positive offsets
   * and time zones west of Greenwich are negative.
   */
  gmtOffset?: string;

  /**
   * The host nation code of this airfield, used for non-DoD/FAA locations.
   */
  hostNatCode?: string;

  /**
   * The International Aviation Transport Association (IATA) code of the airfield.
   */
  iata?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of the airfield.
   */
  icao?: string;

  /**
   * The ID of the parent site.
   */
  idSite?: string;

  /**
   * The URL link to information about airfield.
   */
  infoURL?: string;

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
   * The magnetic declination/variation of the airfield's location from true north,
   * in degrees. Positive values east of true north and negative values west of true
   * north.
   */
  magDec?: number;

  /**
   * The length of the longest runway at this airfield in feet.
   */
  maxRunwayLength?: number;

  /**
   * Applicable miscellaneous codes according to the Airfield Suitability and
   * Restrictions Report (ASRR) for this airfield.
   */
  miscCodes?: string;

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
   * The regional authority of the airfield.
   */
  regionalAuthority?: string;

  /**
   * Region where the airfield resides.
   */
  regionName?: string;

  /**
   * The number of runways at the site.
   */
  runways?: number;

  /**
   * The secondary ICAO code for this airfield. Some airfields have two associated
   * ICAO codes, this can occur in cases when a single airfield supports both
   * military and civilian operations.
   */
  secondaryICAO?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * State or province of the airfield's location.
   */
  state?: string;

  /**
   * The code for the state or province in which this airfield is located. Intended
   * as, but not constrained to, FIPS 10-4 region code designations.
   */
  stateProvinceCode?: string;

  /**
   * Array of descriptions for given suitability codes. The index of the description
   * corresponds to the position of the letter code in the string provided in the
   * suitabilityCodes field.
   */
  suitabilityCodeDescs?: Array<string>;

  /**
   * Associated suitability codes according to the Airfield Suitability and
   * Restrictions Report (ASRR) for this airfield.
   */
  suitabilityCodes?: string;

  /**
   * The airfield's World Area Code installation number (WAC-INNR).
   */
  wacINNR?: string;

  /**
   * Air Mobility Command (AMC) Zone availability Report identifier.
   */
  zarId?: string;
}

/**
 * Properties and characteristics of an airfield, which includes location, airfield
 * codes, suitability codes, and remarks.
 */
export interface AirfieldFull {
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
   * The name of the airfield.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The airfield activity use type (e.g. Commercial, Airport, Heliport, Gliderport,
   * etc.).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Alternate Airfield identifier provided by source.
   */
  altAirfieldId?: string;

  /**
   * Alternative names for this airfield.
   */
  alternativeNames?: Array<string>;

  /**
   * The closest city to the location of this airfield.
   */
  city?: string;

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
   * The country name where this airfield is located.
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
   * Information regarding daylight saving time as is relevant to the location and
   * operation of this airfield.
   */
  dstInfo?: string;

  /**
   * Elevation of the airfield above mean sea level, in feet. Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  elevFt?: number;

  /**
   * Elevation of the airfield above mean sea level, in meters. Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  elevM?: number;

  /**
   * The Federal Aviation Administration (FAA) location identifier of this airfield.
   */
  faa?: string;

  /**
   * Air Force geographic location code of the airfield.
   */
  geoloc?: string;

  /**
   * Time difference between the location of the airfield and the Greenwich Mean Time
   * (GMT), expressed as +/-HH:MM. Time zones east of Greenwich have positive offsets
   * and time zones west of Greenwich are negative.
   */
  gmtOffset?: string;

  /**
   * The host nation code of this airfield, used for non-DoD/FAA locations.
   */
  hostNatCode?: string;

  /**
   * The International Aviation Transport Association (IATA) code of the airfield.
   */
  iata?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of the airfield.
   */
  icao?: string;

  /**
   * The ID of the parent site.
   */
  idSite?: string;

  /**
   * The URL link to information about airfield.
   */
  infoURL?: string;

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
   * The magnetic declination/variation of the airfield's location from true north,
   * in degrees. Positive values east of true north and negative values west of true
   * north.
   */
  magDec?: number;

  /**
   * The length of the longest runway at this airfield in feet.
   */
  maxRunwayLength?: number;

  /**
   * Applicable miscellaneous codes according to the Airfield Suitability and
   * Restrictions Report (ASRR) for this airfield.
   */
  miscCodes?: string;

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
   * The regional authority of the airfield.
   */
  regionalAuthority?: string;

  /**
   * Region where the airfield resides.
   */
  regionName?: string;

  /**
   * The number of runways at the site.
   */
  runways?: number;

  /**
   * The secondary ICAO code for this airfield. Some airfields have two associated
   * ICAO codes, this can occur in cases when a single airfield supports both
   * military and civilian operations.
   */
  secondaryICAO?: string;

  /**
   * The source data library from which this record was received. This could be a
   * remote or tactical UDL or another data library. If null, the record should be
   * assumed to have originated from the primary Enterprise UDL.
   */
  sourceDL?: string;

  /**
   * State or province of the airfield's location.
   */
  state?: string;

  /**
   * The code for the state or province in which this airfield is located. Intended
   * as, but not constrained to, FIPS 10-4 region code designations.
   */
  stateProvinceCode?: string;

  /**
   * Array of descriptions for given suitability codes. The index of the description
   * corresponds to the position of the letter code in the string provided in the
   * suitabilityCodes field.
   */
  suitabilityCodeDescs?: Array<string>;

  /**
   * Associated suitability codes according to the Airfield Suitability and
   * Restrictions Report (ASRR) for this airfield.
   */
  suitabilityCodes?: string;

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
   * The airfield's World Area Code installation number (WAC-INNR).
   */
  wacINNR?: string;

  /**
   * Air Mobility Command (AMC) Zone availability Report identifier.
   */
  zarId?: string;
}

export type AirfieldCountResponse = string;

export interface AirfieldQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<AirfieldQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace AirfieldQueryhelpResponse {
  export interface Parameter {
    classificationMarking?: string;

    derived?: boolean;

    description?: string;

    elemMatch?: boolean;

    format?: string;

    histQuerySupported?: boolean;

    histTupleSupported?: boolean;

    name?: string;

    required?: boolean;

    restQuerySupported?: boolean;

    restTupleSupported?: boolean;

    type?: string;

    unitOfMeasure?: string;

    utcDate?: boolean;
  }
}

export type AirfieldTupleResponse = Array<AirfieldFull>;

export interface AirfieldCreateParams {
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
   * The name of the airfield.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The airfield activity use type (e.g. Commercial, Airport, Heliport, Gliderport,
   * etc.).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Alternate Airfield identifier provided by source.
   */
  altAirfieldId?: string;

  /**
   * Alternative names for this airfield.
   */
  alternativeNames?: Array<string>;

  /**
   * The closest city to the location of this airfield.
   */
  city?: string;

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
   * The country name where this airfield is located.
   */
  countryName?: string;

  /**
   * Information regarding daylight saving time as is relevant to the location and
   * operation of this airfield.
   */
  dstInfo?: string;

  /**
   * Elevation of the airfield above mean sea level, in feet. Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  elevFt?: number;

  /**
   * Elevation of the airfield above mean sea level, in meters. Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  elevM?: number;

  /**
   * The Federal Aviation Administration (FAA) location identifier of this airfield.
   */
  faa?: string;

  /**
   * Air Force geographic location code of the airfield.
   */
  geoloc?: string;

  /**
   * Time difference between the location of the airfield and the Greenwich Mean Time
   * (GMT), expressed as +/-HH:MM. Time zones east of Greenwich have positive offsets
   * and time zones west of Greenwich are negative.
   */
  gmtOffset?: string;

  /**
   * The host nation code of this airfield, used for non-DoD/FAA locations.
   */
  hostNatCode?: string;

  /**
   * The International Aviation Transport Association (IATA) code of the airfield.
   */
  iata?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of the airfield.
   */
  icao?: string;

  /**
   * The ID of the parent site.
   */
  idSite?: string;

  /**
   * The URL link to information about airfield.
   */
  infoURL?: string;

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
   * The magnetic declination/variation of the airfield's location from true north,
   * in degrees. Positive values east of true north and negative values west of true
   * north.
   */
  magDec?: number;

  /**
   * The length of the longest runway at this airfield in feet.
   */
  maxRunwayLength?: number;

  /**
   * Applicable miscellaneous codes according to the Airfield Suitability and
   * Restrictions Report (ASRR) for this airfield.
   */
  miscCodes?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The regional authority of the airfield.
   */
  regionalAuthority?: string;

  /**
   * Region where the airfield resides.
   */
  regionName?: string;

  /**
   * The number of runways at the site.
   */
  runways?: number;

  /**
   * The secondary ICAO code for this airfield. Some airfields have two associated
   * ICAO codes, this can occur in cases when a single airfield supports both
   * military and civilian operations.
   */
  secondaryICAO?: string;

  /**
   * State or province of the airfield's location.
   */
  state?: string;

  /**
   * The code for the state or province in which this airfield is located. Intended
   * as, but not constrained to, FIPS 10-4 region code designations.
   */
  stateProvinceCode?: string;

  /**
   * Array of descriptions for given suitability codes. The index of the description
   * corresponds to the position of the letter code in the string provided in the
   * suitabilityCodes field.
   */
  suitabilityCodeDescs?: Array<string>;

  /**
   * Associated suitability codes according to the Airfield Suitability and
   * Restrictions Report (ASRR) for this airfield.
   */
  suitabilityCodes?: string;

  /**
   * The airfield's World Area Code installation number (WAC-INNR).
   */
  wacINNR?: string;

  /**
   * Air Mobility Command (AMC) Zone availability Report identifier.
   */
  zarId?: string;
}

export interface AirfieldRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AirfieldUpdateParams {
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
   * The name of the airfield.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The airfield activity use type (e.g. Commercial, Airport, Heliport, Gliderport,
   * etc.).
   */
  type: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Alternate Airfield identifier provided by source.
   */
  altAirfieldId?: string;

  /**
   * Alternative names for this airfield.
   */
  alternativeNames?: Array<string>;

  /**
   * The closest city to the location of this airfield.
   */
  city?: string;

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
   * The country name where this airfield is located.
   */
  countryName?: string;

  /**
   * Information regarding daylight saving time as is relevant to the location and
   * operation of this airfield.
   */
  dstInfo?: string;

  /**
   * Elevation of the airfield above mean sea level, in feet. Note: The corresponding
   * equivalent field is not converted by the UDL and may or may not be supplied by
   * the provider. The provider/consumer is responsible for all unit conversions.
   */
  elevFt?: number;

  /**
   * Elevation of the airfield above mean sea level, in meters. Note: The
   * corresponding equivalent field is not converted by the UDL and may or may not be
   * supplied by the provider. The provider/consumer is responsible for all unit
   * conversions.
   */
  elevM?: number;

  /**
   * The Federal Aviation Administration (FAA) location identifier of this airfield.
   */
  faa?: string;

  /**
   * Air Force geographic location code of the airfield.
   */
  geoloc?: string;

  /**
   * Time difference between the location of the airfield and the Greenwich Mean Time
   * (GMT), expressed as +/-HH:MM. Time zones east of Greenwich have positive offsets
   * and time zones west of Greenwich are negative.
   */
  gmtOffset?: string;

  /**
   * The host nation code of this airfield, used for non-DoD/FAA locations.
   */
  hostNatCode?: string;

  /**
   * The International Aviation Transport Association (IATA) code of the airfield.
   */
  iata?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of the airfield.
   */
  icao?: string;

  /**
   * The ID of the parent site.
   */
  idSite?: string;

  /**
   * The URL link to information about airfield.
   */
  infoURL?: string;

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
   * The magnetic declination/variation of the airfield's location from true north,
   * in degrees. Positive values east of true north and negative values west of true
   * north.
   */
  magDec?: number;

  /**
   * The length of the longest runway at this airfield in feet.
   */
  maxRunwayLength?: number;

  /**
   * Applicable miscellaneous codes according to the Airfield Suitability and
   * Restrictions Report (ASRR) for this airfield.
   */
  miscCodes?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * The regional authority of the airfield.
   */
  regionalAuthority?: string;

  /**
   * Region where the airfield resides.
   */
  regionName?: string;

  /**
   * The number of runways at the site.
   */
  runways?: number;

  /**
   * The secondary ICAO code for this airfield. Some airfields have two associated
   * ICAO codes, this can occur in cases when a single airfield supports both
   * military and civilian operations.
   */
  secondaryICAO?: string;

  /**
   * State or province of the airfield's location.
   */
  state?: string;

  /**
   * The code for the state or province in which this airfield is located. Intended
   * as, but not constrained to, FIPS 10-4 region code designations.
   */
  stateProvinceCode?: string;

  /**
   * Array of descriptions for given suitability codes. The index of the description
   * corresponds to the position of the letter code in the string provided in the
   * suitabilityCodes field.
   */
  suitabilityCodeDescs?: Array<string>;

  /**
   * Associated suitability codes according to the Airfield Suitability and
   * Restrictions Report (ASRR) for this airfield.
   */
  suitabilityCodes?: string;

  /**
   * The airfield's World Area Code installation number (WAC-INNR).
   */
  wacINNR?: string;

  /**
   * Air Mobility Command (AMC) Zone availability Report identifier.
   */
  zarId?: string;
}

export interface AirfieldListParams extends OffsetPageParams {}

export interface AirfieldCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface AirfieldTupleParams {
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

export declare namespace Airfields {
  export {
    type AirfieldAbridged as AirfieldAbridged,
    type AirfieldFull as AirfieldFull,
    type AirfieldCountResponse as AirfieldCountResponse,
    type AirfieldQueryhelpResponse as AirfieldQueryhelpResponse,
    type AirfieldTupleResponse as AirfieldTupleResponse,
    type AirfieldAbridgedsOffsetPage as AirfieldAbridgedsOffsetPage,
    type AirfieldCreateParams as AirfieldCreateParams,
    type AirfieldRetrieveParams as AirfieldRetrieveParams,
    type AirfieldUpdateParams as AirfieldUpdateParams,
    type AirfieldListParams as AirfieldListParams,
    type AirfieldCountParams as AirfieldCountParams,
    type AirfieldTupleParams as AirfieldTupleParams,
  };
}
