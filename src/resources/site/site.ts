// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'bluestaq@unified-data-library/core/resource';
import * as EntitiesAPI from 'bluestaq@unified-data-library/resources/entities';
import * as OperationsAPI from 'bluestaq@unified-data-library/resources/site/operations';
import {
  OperationCountParams,
  OperationCountResponse,
  OperationCreateBulkParams,
  OperationCreateParams,
  OperationListParams,
  OperationListResponse,
  OperationListResponsesOffsetPage,
  OperationQueryHelpResponse,
  OperationRetrieveParams,
  OperationRetrieveResponse,
  OperationTupleParams,
  OperationTupleResponse,
  OperationUnvalidatedPublishParams,
  OperationUpdateParams,
  Operations,
} from 'bluestaq@unified-data-library/resources/site/operations';
import { APIPromise } from 'bluestaq@unified-data-library/core/api-promise';
import {
  OffsetPage,
  type OffsetPageParams,
  PagePromise,
} from 'bluestaq@unified-data-library/core/pagination';
import { buildHeaders } from 'bluestaq@unified-data-library/internal/headers';
import { RequestOptions } from 'bluestaq@unified-data-library/internal/request-options';
import { path } from 'bluestaq@unified-data-library/internal/utils/path';

export class Site extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);

  /**
   * Service operation to take a single Site as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.site.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'Site Name',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  create(body: SiteCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/site', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single Site. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.site.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'Site Name',
   *   source: 'Bluestaq',
   * });
   * ```
   */
  update(pathID: string, body: SiteUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/site/${pathID}`, {
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
   * for await (const siteListResponse of client.site.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SiteListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SiteListResponsesOffsetPage, SiteListResponse> {
    return this._client.getAPIList('/udl/site', OffsetPage<SiteListResponse>, { query, ...options });
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
   * const response = await client.site.count();
   * ```
   */
  count(query: SiteCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/site/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Site record by its unique ID passed as a path
   * parameter.
   *
   * @example
   * ```ts
   * const site = await client.site.get('id');
   * ```
   */
  get(
    id: string,
    query: SiteGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SiteGetResponse> {
    return this._client.get(path`/udl/site/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.site.queryhelp();
   * ```
   */
  queryhelp(options?: RequestOptions): APIPromise<SiteQueryhelpResponse> {
    return this._client.get('/udl/site/queryhelp', options);
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
   * const response = await client.site.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: SiteTupleParams, options?: RequestOptions): APIPromise<SiteTupleResponse> {
    return this._client.get('/udl/site/tuple', { query, ...options });
  }
}

export type SiteListResponsesOffsetPage = OffsetPage<SiteListResponse>;

/**
 * Properties and characteristics of a site entity, such as an airbase, airfield,
 * naval station, etc.
 */
export interface SiteListResponse {
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
   * The name of this site.
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
   * Indicates the function or mission of an entity, which that entity may or may not
   * be engaged in at any particular time. Typically refers to a unit, organization,
   * or installation/site performing a specific function or mission such as a
   * redistribution center or naval shipyard. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  activity?: string;

  /**
   * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
   * coordinates reside.
   */
  airDefArea?: string;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the site owes its allegiance. This field will be set to "OTHR" if the
   * source value does not match a UDL Country code value (ISO-3166-ALPHA-2).
   */
  allegiance?: string;

  /**
   * Specifies an alternate allegiance code if the data provider code is not part of
   * an official Country Code standard such as ISO-3166 or FIPS. This field will be
   * set to the value provided by the source and should be used for all Queries
   * specifying allegiance.
   */
  altAllegiance?: string;

  /**
   * The Basic Encyclopedia Number associated with the Site. Uniquely identifies the
   * installation of a site. The beNumber is generated based on the value input for
   * the COORD to determine the appropriate World Aeronautical Chart (WAC) location
   * identifier, the system assigned record originator and a one-up-number.
   */
  beNumber?: string;

  /**
   * The category code that represents the associated site purpose within the target
   * system.
   */
  catCode?: string;

  /**
   * Textual Description of Site catCode.
   */
  catText?: string;

  /**
   * Indicates the importance of the entity to the OES or MIR system. This data
   * element is restricted to update by DIA (DB-4). Valid values are:
   *
   * 0 - Does not meet criteria above
   *
   * 1 - Primary importance to system
   *
   * 2 - Secondary importance to system
   *
   * 3 - Tertiary importance to system
   *
   * O - Other. Explain in Remarks.
   */
  classRating?: string;

  /**
   * The physical manner of being or state of existence of the entity. A physical
   * condition that must be considered in the determining of a course of action. The
   * specific usage and enumerations contained in this field may be found in the
   * documentation provided in the referenceDoc field. If referenceDoc not provided,
   * users may consult the data provider.
   */
  condition?: string;

  /**
   * Availability of the entity relative to its condition. Indicates the reason the
   * entity is not fully operational. The specific usage and enumerations contained
   * in this field may be found in the documentation provided in the referenceDoc
   * field. If referenceDoc not provided, users may consult the data provider.
   */
  conditionAvail?: string;

  /**
   * Indicates any of the magnitudes that serve to define the position of a point by
   * reference to a fixed figure, system of lines, etc.
   *
   * Pos. 1-2. Latitude Degrees [00-90]
   *
   * Pos. 3-4. Latitude Minutes [00-59]
   *
   * Pos. 5-6. Latitude Seconds [00-59]
   *
   * Pos. 7-9. Latitude Thousandths Of Seconds [000-999]
   *
   * Pos. 10. Latitude Hemisphere [NS]
   *
   * Pos. 11-13. Longitude Degrees [00-180]
   *
   * Pos. 14-15. Longitude Minutes [00-59]
   *
   * Pos. 16-17. Longitude Seconds [00-59]
   *
   * Pos. 18-20. Longitude Thousandths Of Seconds [000-999]
   *
   * Pos. 21. Longitude Hemisphere [EW]
   *
   * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U].
   */
  coord?: string;

  /**
   * A mathematical model of the earth used to calculate coordinates on a map. US
   * Forces use the World Geodetic System 1984 (WGS 84), but also use maps by allied
   * countries with local datums. The datum must be specified to ensure accuracy of
   * coordinates. The specific usage and enumerations contained in this field may be
   * found in the documentation provided in the referenceDoc field. If referenceDoc
   * not provided, users may consult the data provider.
   */
  coordDatum?: string;

  /**
   * Indicates the plus or minus error assessed against the method used to derive the
   * coordinate.
   */
  coordDerivAcc?: number;

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
   * Ground elevation of the geographic coordinates referenced to (above or below)
   * Mean Sea Level (MSL) vertical datum, in meters.
   */
  elevMsl?: number;

  /**
   * Indicates the confidence level expressed as a percent that a specific geometric
   * spatial element, ELEVATION_MSL linear accuracy, has been vertically positioned
   * to within a specified vertical accuracy.
   */
  elevMslConfLvl?: number;

  /**
   * Indicates the plus or minus error assessed against the method used to derive the
   * elevation.
   */
  elevMslDerivAcc?: number;

  /**
   * Eval represents the Intelligence Confidence Level or the Reliability/degree of
   * confidence that the analyst has assigned to the data within this record. The
   * numerical range is from 1 to 9 with 1 representing the highest confidence level.
   */
  eval?: number;

  /**
   * The Federal Aviation Administration (FAA) Location ID of this site, if
   * applicable.
   */
  faa?: string;

  /**
   * Functional Production Area (FPA) under the Shared Production Program (SPP).
   * Producers are defined per country per FPA. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  fpa?: string;

  /**
   * Principal operational function being performed. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  functPrimary?: string;

  /**
   * Geographical region code used by the Requirements Management System (RMS) as
   * specified by National Geospatial Agency (NGA) in Flight Information Publications
   * (FIPS) 10-4, Appendix 3 - Country Code and Geographic Region Codes. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  geoArea?: string;

  /**
   * The distance between Mean Sea Level and a referenced ellipsoid, in meters.
   */
  geoidalMslSep?: number;

  /**
   * Indicates the amount or degree of deviation from the horizontal represented as a
   * percent. Grade is determined by the formula: vertical distance (VD) divided by
   * horizontal distance (HD) times 100. VD is the difference between the highest and
   * lowest elevation within the entity. HD is the linear distance between the
   * highest and lowest elevation.
   */
  grade?: number;

  /**
   * The International Air Transport Association (IATA) code of this site, if
   * applicable.
   */
  iata?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of this site, if
   * applicable.
   */
  icao?: string;

  /**
   * Estimated identity of the Site (ASSUMED FRIEND, FRIEND, HOSTILE, FAKER, JOKER,
   * NEUTRAL, PENDING, SUSPECT, UNKNOWN):
   *
   * ASSUMED FRIEND: Track assumed to be a friend due to the object characteristics,
   * behavior, and/or origin.
   *
   * FRIEND: Track object supporting friendly forces and belonging to a declared
   * friendly nation or entity.
   *
   * HOSTILE: Track object belonging to an opposing nation, party, group, or entity
   * deemed to contribute to a threat to friendly forces or their mission due to its
   * behavior, characteristics, nationality, or origin.
   *
   * FAKER: Friendly track, object, or entity acting as an exercise hostile.
   *
   * JOKER: Friendly track, object, or entity acting as an exercise suspect.
   *
   * NEUTRAL: Track object whose characteristics, behavior, nationality, and/or
   * origin indicate that it is neither supporting nor opposing friendly forces or
   * their mission.
   *
   * PENDING: Track object which has not been evaluated.
   *
   * SUSPECT: Track object deemed potentially hostile due to the object
   * characteristics, behavior, nationality, and/or origin.
   *
   * UNKNOWN: Track object which has been evaluated and does not meet criteria for
   * any standard identity.
   */
  ident?: string;

  /**
   * Unique identifier of the parent entity. idEntity is required for Put.
   */
  idEntity?: string;

  /**
   * Unique identifier of the Parent Site record associated with this Site record.
   */
  idParentSite?: string;

  /**
   * Indicates the normal usage of the Landing Zone (LZ). Intended as, but not
   * constrained to MIDB Helocopter Landing Area usage value definitions:
   *
   * AF - Airfield
   *
   * FD - Field
   *
   * HC - High Crop. 1 meter and over.
   *
   * HY - Highway
   *
   * LB - Lake Bed
   *
   * LC - Low Crop. 0-1 meters
   *
   * O - Other. Explain In Remarks.
   *
   * PD - Paddy
   *
   * PK - Park
   *
   * PS - Pasture
   *
   * RB - Riverbed
   *
   * SP - Sport Field
   *
   * U - Unknown
   *
   * Z - Inconclusive Analysis.
   */
  lzUsage?: string;

  /**
   * The length of the longest runway at this site, if applicable, in meters.
   */
  maxRunwayLength?: number;

  /**
   * The Military Grid Reference System is the geocoordinate standard used by NATO
   * militaries for locating points on Earth. The MGRS is derived from the Universal
   * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
   * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
   * geocode for the entire Earth. Example of an milgrid coordinate, or grid
   * reference, would be 4QFJ12345678, which consists of three parts:
   *
   * 4Q (grid zone designator, GZD)
   *
   * FJ (the 100,000-meter square identifier)
   *
   * 12345678 (numerical location; easting is 1234 and northing is 5678, in this case
   * specifying a location with 10 m resolution).
   */
  milGrid?: string;

  /**
   * Indicates the grid system used in the development of the milGrid coordinates.
   * Values are:
   *
   * UPS - Universal Polar System
   *
   * UTM - Universal Transverse Mercator.
   */
  milGridSys?: string;

  /**
   * Indicates the principal type of mission that an entity is organized and equipped
   * to perform. The specific usage and enumerations contained in this field may be
   * found in the documentation provided in the referenceDoc field. If referenceDoc
   * not provided, users may consult the data provider.
   */
  msnPrimary?: string;

  /**
   * Indicates the principal specialty type of mission that an entity is organized
   * and equipped to perform. The specific usage and enumerations contained in this
   * field may be found in the documentation provided in the referenceDoc field. If
   * referenceDoc not provided, users may consult the data provider.
   */
  msnPrimarySpec?: string;

  /**
   * Optional notes/comments for the site.
   */
  notes?: string;

  /**
   * A sites ability to conduct nuclear warfare. Valid Values are:
   *
   * A - Nuclear Ammo Or Warheads Available
   *
   * N - No Nuclear Offense
   *
   * O - Other. Explain in Remarks
   *
   * U - Unknown
   *
   * W - Nuclear Weapons Available
   *
   * Y - Nuclear Warfare Offensive Capability
   *
   * Z - Inconclusive Analysis.
   */
  nucCap?: string;

  /**
   * The Degree to which an entity is ready to perform the overall operational
   * mission(s) for which it was organized and equipped. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  operStatus?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Unique identifier of the LZ record from the originating system.
   */
  origLzId?: string;

  /**
   * The originating source network on which this record was created, auto-populated
   * by the system.
   */
  origNetwork?: string;

  /**
   * Unique identifier of the Site record from the originating system.
   */
  origSiteID?: string;

  /**
   * The O-suffix associated with this site. The O-suffix is a five-character
   * alpha/numeric system used to identify a site, or demographic area, within an
   * installation. The Installation Basic Encyclopedia (beNumber), in conjunction
   * with the O-suffix, uniquely identifies the Site. The Installation beNumber and
   * oSuffix are also used in conjunction with the catCode to classify the function
   * or purpose of the facility.
   */
  osuffix?: string;

  /**
   * Site number of a specific electronic site or its associated equipment.
   */
  pin?: string;

  /**
   * Political subdivision in which the geographic coordinates reside. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  polSubdiv?: string;

  /**
   * Indicates whether the facility is in or outside of a populated area. True, the
   * facility is in or within 5 NM of a populated area. False, the facility is
   * outside a populated area.
   */
  popArea?: boolean;

  /**
   * Indicates the distance to nearest populated area (over 1,000 people) in nautical
   * miles.
   */
  popAreaProx?: number;

  /**
   * Validity and currency of the data in the record to be used in conjunction with
   * the other elements in the record as defined by SOPs.
   *
   * A - Active
   *
   * I - Inactive
   *
   * K - Acknowledged
   *
   * L - Local
   *
   * Q - A nominated (NOM) or Data Change Request (DCR) record
   *
   * R - Production reduced by CMD decision
   *
   * W - Working Record.
   */
  recStatus?: string;

  /**
   * The reference documentation that specifies the usage and enumerations contained
   * in this record. If referenceDoc not provided, users may consult the data
   * provider.
   */
  referenceDoc?: string;

  /**
   * Responsible Producer - Organization that is responsible for the maintenance of
   * the record.
   */
  resProd?: string;

  /**
   * Date on which the data in the record was last reviewed by the responsible
   * analyst for accuracy and currency, in ISO8601 UTC format. This date cannot be
   * greater than the current date.
   */
  reviewDate?: string;

  /**
   * The number of runways at the site, if applicable.
   */
  runways?: number;

  /**
   * A standard scheme for symbol coding enabling the transfer, display and use of
   * symbols and graphics among information systems, as per MIL-STD 2525B, and
   * supported by the element ident.
   */
  symCode?: string;

  /**
   * The type of this site (AIRBASE, AIRFIELD, AIRPORT, NAVAL STATION, etc.).
   */
  type?: string;

  /**
   * The use authorization type of this site (e.g MILITARY, CIVIL, JOINT-USE, etc.).
   */
  usage?: string;

  /**
   * Universal Transverse Mercator (UTM) grid coordinates.
   *
   * Pos. 1-2, UTM Zone Column [01-60
   *
   * Pos. 3, UTM Zone Row [C-HJ-NP-X]
   *
   * Pos. 4, UTM False Easting [0-9]
   *
   * Pos. 5-9, UTM Meter Easting [0-9][0-9][0-9][0-9][0-9]
   *
   * Pos. 10-11, UTM False Northing [0-9][0-9]
   *
   * Pos. 12-16, UTM Meter Northing [0-9][0-9][0-9][0-9][0-9].
   */
  utm?: string;

  /**
   * Maximum expected height of the vegetation in the Landing Zone (LZ), in meters.
   */
  vegHt?: number;

  /**
   * The predominant vegetation found in the Landing Zone (LZ). The specific usage
   * and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  vegType?: string;

  /**
   * World Aeronautical Chart identifier for the area in which a designated place is
   * located.
   */
  wac?: string;
}

export type SiteCountResponse = string;

/**
 * Properties and characteristics of a site entity, such as an airbase, airfield,
 * naval station, etc.
 */
export interface SiteGetResponse {
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
   * The name of this site.
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
   * Indicates the function or mission of an entity, which that entity may or may not
   * be engaged in at any particular time. Typically refers to a unit, organization,
   * or installation/site performing a specific function or mission such as a
   * redistribution center or naval shipyard. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  activity?: string;

  /**
   * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
   * coordinates reside.
   */
  airDefArea?: string;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the site owes its allegiance. This field will be set to "OTHR" if the
   * source value does not match a UDL Country code value (ISO-3166-ALPHA-2).
   */
  allegiance?: string;

  /**
   * Specifies an alternate allegiance code if the data provider code is not part of
   * an official Country Code standard such as ISO-3166 or FIPS. This field will be
   * set to the value provided by the source and should be used for all Queries
   * specifying allegiance.
   */
  altAllegiance?: string;

  /**
   * The Basic Encyclopedia Number associated with the Site. Uniquely identifies the
   * installation of a site. The beNumber is generated based on the value input for
   * the COORD to determine the appropriate World Aeronautical Chart (WAC) location
   * identifier, the system assigned record originator and a one-up-number.
   */
  beNumber?: string;

  /**
   * The category code that represents the associated site purpose within the target
   * system.
   */
  catCode?: string;

  /**
   * Textual Description of Site catCode.
   */
  catText?: string;

  /**
   * Indicates the importance of the entity to the OES or MIR system. This data
   * element is restricted to update by DIA (DB-4). Valid values are:
   *
   * 0 - Does not meet criteria above
   *
   * 1 - Primary importance to system
   *
   * 2 - Secondary importance to system
   *
   * 3 - Tertiary importance to system
   *
   * O - Other. Explain in Remarks.
   */
  classRating?: string;

  /**
   * The physical manner of being or state of existence of the entity. A physical
   * condition that must be considered in the determining of a course of action. The
   * specific usage and enumerations contained in this field may be found in the
   * documentation provided in the referenceDoc field. If referenceDoc not provided,
   * users may consult the data provider.
   */
  condition?: string;

  /**
   * Availability of the entity relative to its condition. Indicates the reason the
   * entity is not fully operational. The specific usage and enumerations contained
   * in this field may be found in the documentation provided in the referenceDoc
   * field. If referenceDoc not provided, users may consult the data provider.
   */
  conditionAvail?: string;

  /**
   * Indicates any of the magnitudes that serve to define the position of a point by
   * reference to a fixed figure, system of lines, etc.
   *
   * Pos. 1-2. Latitude Degrees [00-90]
   *
   * Pos. 3-4. Latitude Minutes [00-59]
   *
   * Pos. 5-6. Latitude Seconds [00-59]
   *
   * Pos. 7-9. Latitude Thousandths Of Seconds [000-999]
   *
   * Pos. 10. Latitude Hemisphere [NS]
   *
   * Pos. 11-13. Longitude Degrees [00-180]
   *
   * Pos. 14-15. Longitude Minutes [00-59]
   *
   * Pos. 16-17. Longitude Seconds [00-59]
   *
   * Pos. 18-20. Longitude Thousandths Of Seconds [000-999]
   *
   * Pos. 21. Longitude Hemisphere [EW]
   *
   * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U].
   */
  coord?: string;

  /**
   * A mathematical model of the earth used to calculate coordinates on a map. US
   * Forces use the World Geodetic System 1984 (WGS 84), but also use maps by allied
   * countries with local datums. The datum must be specified to ensure accuracy of
   * coordinates. The specific usage and enumerations contained in this field may be
   * found in the documentation provided in the referenceDoc field. If referenceDoc
   * not provided, users may consult the data provider.
   */
  coordDatum?: string;

  /**
   * Indicates the plus or minus error assessed against the method used to derive the
   * coordinate.
   */
  coordDerivAcc?: number;

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
   * Ground elevation of the geographic coordinates referenced to (above or below)
   * Mean Sea Level (MSL) vertical datum, in meters.
   */
  elevMsl?: number;

  /**
   * Indicates the confidence level expressed as a percent that a specific geometric
   * spatial element, ELEVATION_MSL linear accuracy, has been vertically positioned
   * to within a specified vertical accuracy.
   */
  elevMslConfLvl?: number;

  /**
   * Indicates the plus or minus error assessed against the method used to derive the
   * elevation.
   */
  elevMslDerivAcc?: number;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityFull;

  /**
   * Eval represents the Intelligence Confidence Level or the Reliability/degree of
   * confidence that the analyst has assigned to the data within this record. The
   * numerical range is from 1 to 9 with 1 representing the highest confidence level.
   */
  eval?: number;

  /**
   * The Federal Aviation Administration (FAA) Location ID of this site, if
   * applicable.
   */
  faa?: string;

  /**
   * Functional Production Area (FPA) under the Shared Production Program (SPP).
   * Producers are defined per country per FPA. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  fpa?: string;

  /**
   * Principal operational function being performed. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  functPrimary?: string;

  /**
   * Geographical region code used by the Requirements Management System (RMS) as
   * specified by National Geospatial Agency (NGA) in Flight Information Publications
   * (FIPS) 10-4, Appendix 3 - Country Code and Geographic Region Codes. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  geoArea?: string;

  /**
   * The distance between Mean Sea Level and a referenced ellipsoid, in meters.
   */
  geoidalMslSep?: number;

  /**
   * Indicates the amount or degree of deviation from the horizontal represented as a
   * percent. Grade is determined by the formula: vertical distance (VD) divided by
   * horizontal distance (HD) times 100. VD is the difference between the highest and
   * lowest elevation within the entity. HD is the linear distance between the
   * highest and lowest elevation.
   */
  grade?: number;

  /**
   * The International Air Transport Association (IATA) code of this site, if
   * applicable.
   */
  iata?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of this site, if
   * applicable.
   */
  icao?: string;

  /**
   * Estimated identity of the Site (ASSUMED FRIEND, FRIEND, HOSTILE, FAKER, JOKER,
   * NEUTRAL, PENDING, SUSPECT, UNKNOWN):
   *
   * ASSUMED FRIEND: Track assumed to be a friend due to the object characteristics,
   * behavior, and/or origin.
   *
   * FRIEND: Track object supporting friendly forces and belonging to a declared
   * friendly nation or entity.
   *
   * HOSTILE: Track object belonging to an opposing nation, party, group, or entity
   * deemed to contribute to a threat to friendly forces or their mission due to its
   * behavior, characteristics, nationality, or origin.
   *
   * FAKER: Friendly track, object, or entity acting as an exercise hostile.
   *
   * JOKER: Friendly track, object, or entity acting as an exercise suspect.
   *
   * NEUTRAL: Track object whose characteristics, behavior, nationality, and/or
   * origin indicate that it is neither supporting nor opposing friendly forces or
   * their mission.
   *
   * PENDING: Track object which has not been evaluated.
   *
   * SUSPECT: Track object deemed potentially hostile due to the object
   * characteristics, behavior, nationality, and/or origin.
   *
   * UNKNOWN: Track object which has been evaluated and does not meet criteria for
   * any standard identity.
   */
  ident?: string;

  /**
   * Unique identifier of the parent entity. idEntity is required for Put.
   */
  idEntity?: string;

  /**
   * Unique identifier of the Parent Site record associated with this Site record.
   */
  idParentSite?: string;

  /**
   * Indicates the normal usage of the Landing Zone (LZ). Intended as, but not
   * constrained to MIDB Helocopter Landing Area usage value definitions:
   *
   * AF - Airfield
   *
   * FD - Field
   *
   * HC - High Crop. 1 meter and over.
   *
   * HY - Highway
   *
   * LB - Lake Bed
   *
   * LC - Low Crop. 0-1 meters
   *
   * O - Other. Explain In Remarks.
   *
   * PD - Paddy
   *
   * PK - Park
   *
   * PS - Pasture
   *
   * RB - Riverbed
   *
   * SP - Sport Field
   *
   * U - Unknown
   *
   * Z - Inconclusive Analysis.
   */
  lzUsage?: string;

  /**
   * The length of the longest runway at this site, if applicable, in meters.
   */
  maxRunwayLength?: number;

  /**
   * The Military Grid Reference System is the geocoordinate standard used by NATO
   * militaries for locating points on Earth. The MGRS is derived from the Universal
   * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
   * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
   * geocode for the entire Earth. Example of an milgrid coordinate, or grid
   * reference, would be 4QFJ12345678, which consists of three parts:
   *
   * 4Q (grid zone designator, GZD)
   *
   * FJ (the 100,000-meter square identifier)
   *
   * 12345678 (numerical location; easting is 1234 and northing is 5678, in this case
   * specifying a location with 10 m resolution).
   */
  milGrid?: string;

  /**
   * Indicates the grid system used in the development of the milGrid coordinates.
   * Values are:
   *
   * UPS - Universal Polar System
   *
   * UTM - Universal Transverse Mercator.
   */
  milGridSys?: string;

  /**
   * Indicates the principal type of mission that an entity is organized and equipped
   * to perform. The specific usage and enumerations contained in this field may be
   * found in the documentation provided in the referenceDoc field. If referenceDoc
   * not provided, users may consult the data provider.
   */
  msnPrimary?: string;

  /**
   * Indicates the principal specialty type of mission that an entity is organized
   * and equipped to perform. The specific usage and enumerations contained in this
   * field may be found in the documentation provided in the referenceDoc field. If
   * referenceDoc not provided, users may consult the data provider.
   */
  msnPrimarySpec?: string;

  /**
   * Optional notes/comments for the site.
   */
  notes?: string;

  /**
   * A sites ability to conduct nuclear warfare. Valid Values are:
   *
   * A - Nuclear Ammo Or Warheads Available
   *
   * N - No Nuclear Offense
   *
   * O - Other. Explain in Remarks
   *
   * U - Unknown
   *
   * W - Nuclear Weapons Available
   *
   * Y - Nuclear Warfare Offensive Capability
   *
   * Z - Inconclusive Analysis.
   */
  nucCap?: string;

  /**
   * The Degree to which an entity is ready to perform the overall operational
   * mission(s) for which it was organized and equipped. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  operStatus?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Unique identifier of the LZ record from the originating system.
   */
  origLzId?: string;

  /**
   * The originating source network on which this record was created, auto-populated
   * by the system.
   */
  origNetwork?: string;

  /**
   * Unique identifier of the Site record from the originating system.
   */
  origSiteID?: string;

  /**
   * The O-suffix associated with this site. The O-suffix is a five-character
   * alpha/numeric system used to identify a site, or demographic area, within an
   * installation. The Installation Basic Encyclopedia (beNumber), in conjunction
   * with the O-suffix, uniquely identifies the Site. The Installation beNumber and
   * oSuffix are also used in conjunction with the catCode to classify the function
   * or purpose of the facility.
   */
  osuffix?: string;

  /**
   * Site number of a specific electronic site or its associated equipment.
   */
  pin?: string;

  /**
   * Political subdivision in which the geographic coordinates reside. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  polSubdiv?: string;

  /**
   * Indicates whether the facility is in or outside of a populated area. True, the
   * facility is in or within 5 NM of a populated area. False, the facility is
   * outside a populated area.
   */
  popArea?: boolean;

  /**
   * Indicates the distance to nearest populated area (over 1,000 people) in nautical
   * miles.
   */
  popAreaProx?: number;

  /**
   * Validity and currency of the data in the record to be used in conjunction with
   * the other elements in the record as defined by SOPs.
   *
   * A - Active
   *
   * I - Inactive
   *
   * K - Acknowledged
   *
   * L - Local
   *
   * Q - A nominated (NOM) or Data Change Request (DCR) record
   *
   * R - Production reduced by CMD decision
   *
   * W - Working Record.
   */
  recStatus?: string;

  /**
   * The reference documentation that specifies the usage and enumerations contained
   * in this record. If referenceDoc not provided, users may consult the data
   * provider.
   */
  referenceDoc?: string;

  /**
   * Responsible Producer - Organization that is responsible for the maintenance of
   * the record.
   */
  resProd?: string;

  /**
   * Date on which the data in the record was last reviewed by the responsible
   * analyst for accuracy and currency, in ISO8601 UTC format. This date cannot be
   * greater than the current date.
   */
  reviewDate?: string;

  /**
   * The number of runways at the site, if applicable.
   */
  runways?: number;

  siteOperations?: Array<SiteGetResponse.SiteOperation>;

  /**
   * Remarks contain amplifying information for a specific service. The information
   * may contain context and interpretations for consumer use.
   */
  siteRemarks?: Array<SiteGetResponse.SiteRemark>;

  /**
   * A standard scheme for symbol coding enabling the transfer, display and use of
   * symbols and graphics among information systems, as per MIL-STD 2525B, and
   * supported by the element ident.
   */
  symCode?: string;

  /**
   * The type of this site (AIRBASE, AIRFIELD, AIRPORT, NAVAL STATION, etc.).
   */
  type?: string;

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
   * The use authorization type of this site (e.g MILITARY, CIVIL, JOINT-USE, etc.).
   */
  usage?: string;

  /**
   * Universal Transverse Mercator (UTM) grid coordinates.
   *
   * Pos. 1-2, UTM Zone Column [01-60
   *
   * Pos. 3, UTM Zone Row [C-HJ-NP-X]
   *
   * Pos. 4, UTM False Easting [0-9]
   *
   * Pos. 5-9, UTM Meter Easting [0-9][0-9][0-9][0-9][0-9]
   *
   * Pos. 10-11, UTM False Northing [0-9][0-9]
   *
   * Pos. 12-16, UTM Meter Northing [0-9][0-9][0-9][0-9][0-9].
   */
  utm?: string;

  /**
   * Maximum expected height of the vegetation in the Landing Zone (LZ), in meters.
   */
  vegHt?: number;

  /**
   * The predominant vegetation found in the Landing Zone (LZ). The specific usage
   * and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  vegType?: string;

  /**
   * World Aeronautical Chart identifier for the area in which a designated place is
   * located.
   */
  wac?: string;
}

export namespace SiteGetResponse {
  /**
   * Site operating details concerning the hours of operation, operational
   * limitations, site navigation, and waivers associated with the Site.
   */
  export interface SiteOperation {
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
     * The ID of the parent site.
     */
    idSite: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

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
     * Collection providing hours of operation and other information specific to a day
     * of the week.
     */
    dailyOperations?: Array<SiteOperation.DailyOperation>;

    /**
     * The name of the person who made the most recent change to data in the
     * DailyOperations collection.
     */
    dopsLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to data in the DailyOperations
     * collection, in ISO 8601 UTC format with millisecond precision.
     */
    dopsLastChangedDate?: string;

    /**
     * The reason for the most recent change to data in the dailyOperations collection.
     */
    dopsLastChangedReason?: string;

    /**
     * Id of the associated launchSite entity.
     */
    idLaunchSite?: string;

    /**
     * Collection providing maximum on ground (MOG) information for specific aircraft
     * at the site associated with this SiteOperations record.
     */
    maximumOnGrounds?: Array<SiteOperation.MaximumOnGround>;

    /**
     * The name of the person who made the most recent change to data in the
     * MaximumOnGrounds collection.
     */
    mogsLastChangedBy?: string;

    /**
     * The datetime of the most recent change made to data in the MaximumOnGrounds
     * collection, in ISO 8601 UTC format with millisecond precision.
     */
    mogsLastChangedDate?: string;

    /**
     * The reason for the most recent change to data in the MaximumOnGrounds
     * collection.
     */
    mogsLastChangedReason?: string;

    /**
     * Collection providing relevant information in the event of deviations/exceptions
     * to normal operations.
     */
    operationalDeviations?: Array<SiteOperation.OperationalDeviation>;

    /**
     * Collection of planning information associated with this SiteOperations record.
     */
    operationalPlannings?: Array<SiteOperation.OperationalPlanning>;

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
     * Collection detailing operational pathways at the Site associated with this
     * SiteOperations record.
     */
    pathways?: Array<SiteOperation.Pathway>;

    /**
     * The source data library from which this record was received. This could be a
     * remote or tactical UDL or another data library. If null, the record should be
     * assumed to have originated from the primary Enterprise UDL.
     */
    sourceDL?: string;

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
     * Collection documenting operational waivers that have been issued for the Site
     * associated with this record.
     */
    waivers?: Array<SiteOperation.Waiver>;
  }

  export namespace SiteOperation {
    /**
     * Collection providing hours of operation and other information specific to a day
     * of the week.
     */
    export interface DailyOperation {
      /**
       * The day of the week to which this operational information pertains.
       */
      dayOfWeek?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

      /**
       * A collection containing the operational start and stop times scheduled for the
       * day of the week specified.
       */
      operatingHours?: Array<DailyOperation.OperatingHour>;

      /**
       * The name or type of operation to which this information pertains.
       */
      operationName?: string;

      /**
       * The name of the person who made the most recent change to this DailyOperation
       * data.
       */
      ophrsLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this DailyOperation data, in ISO
       * 8601 UTC format with millisecond precision.
       */
      ophrsLastChangedDate?: string;
    }

    export namespace DailyOperation {
      /**
       * A collection containing the operational start and stop times scheduled for the
       * day of the week specified.
       */
      export interface OperatingHour {
        /**
         * The Zulu (UTC) operational start time, expressed in ISO 8601 format as HH:MM.
         */
        opStartTime?: string;

        /**
         * The Zulu (UTC) operational stop time, expressed in ISO 8601 format as HH:MM.
         */
        opStopTime?: string;
      }
    }

    /**
     * Collection providing maximum on ground (MOG) information for specific aircraft
     * at the site associated with this SiteOperations record.
     */
    export interface MaximumOnGround {
      /**
       * The Model Design Series (MDS) designation of the aircraft to which this maximum
       * on ground (MOG) data pertains.
       */
      aircraftMDS?: string;

      /**
       * Maximum on ground (MOG) number of contingent aircraft based on spacing and
       * manpower, for the aircraft type specified.
       */
      contingencyMOG?: number;

      /**
       * The name of the person who made the most recent change to this maximum on ground
       * data.
       */
      mogLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this maximum on ground data, in
       * ISO 8601 UTC format with millisecond precision.
       */
      mogLastChangedDate?: string;

      /**
       * Maximum on ground (MOG) number of parking wide-body aircraft based on spacing
       * and manpower, for the aircraft type specified.
       */
      wideParkingMOG?: number;

      /**
       * Maximum on ground (MOG) number of working wide-body aircraft based on spacing
       * and manpower, for the aircraft type specified.
       */
      wideWorkingMOG?: number;
    }

    /**
     * Collection providing relevant information in the event of deviations/exceptions
     * to normal operations.
     */
    export interface OperationalDeviation {
      /**
       * The Model Design Series (MDS) designation of the aircraft affected by this
       * operational deviation.
       */
      affectedAircraftMDS?: string;

      /**
       * The maximum on ground (MOG) number for aircraft affected by this operational
       * deviation.
       */
      affectedMOG?: number;

      /**
       * On ground time for aircraft affected by this operational deviation.
       */
      aircraftOnGroundTime?: string;

      /**
       * Rest time for crew affected by this operational deviation.
       */
      crewRestTime?: string;

      /**
       * The name of the person who made the most recent change to this
       * OperationalDeviation data.
       */
      odLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this OperationalDeviation data,
       * in ISO 8601 UTC format with millisecond precision.
       */
      odLastChangedDate?: string;

      /**
       * Text remark regarding this operational deviation.
       */
      odRemark?: string;
    }

    /**
     * Collection of planning information associated with this SiteOperations record.
     */
    export interface OperationalPlanning {
      /**
       * The end date of this operational planning, in ISO8601 UTC format with
       * millisecond precision.
       */
      opEndDate?: string;

      /**
       * The name of the person who made the most recent change made to this
       * OperationalPlanning data.
       */
      opLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this OperationalPlanning data, in
       * ISO8601 UTC format with millisecond precision.
       */
      opLastChangedDate?: string;

      /**
       * Remark text regarding this operation planning.
       */
      opRemark?: string;

      /**
       * The person, unit, organization, etc. responsible for this operation planning.
       */
      opSource?: string;

      /**
       * The start date of this operational planning, in ISO8601 UTC format with
       * millisecond precision.
       */
      opStartDate?: string;

      /**
       * The status of this operational planning.
       */
      opStatus?: string;
    }

    /**
     * Collection detailing operational pathways at the Site associated with this
     * SiteOperations record.
     */
    export interface Pathway {
      /**
       * Text defining this pathway from its constituent parts.
       */
      pwDefinition?: string;

      /**
       * The name of the person who made the most recent change to this Pathway data.
       */
      pwLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this Pathway data, in ISO 8601
       * UTC format with millisecond precision.
       */
      pwLastChangedDate?: string;

      /**
       * The type of paths that constitute this pathway.
       */
      pwType?: string;

      /**
       * The intended use of this pathway.
       */
      pwUsage?: string;
    }

    /**
     * Collection documenting operational waivers that have been issued for the Site
     * associated with this record.
     */
    export interface Waiver {
      /**
       * The expiration date of this waiver, in ISO8601 UTC format with millisecond
       * precision.
       */
      expirationDate?: string;

      /**
       * Boolean indicating whether or not this waiver has expired.
       */
      hasExpired?: boolean;

      /**
       * The issue date of this waiver, in ISO8601 UTC format with millisecond precision.
       */
      issueDate?: string;

      /**
       * The name of the person who issued this waiver.
       */
      issuerName?: string;

      /**
       * The name of the person requesting this waiver.
       */
      requesterName?: string;

      /**
       * The phone number of the person requesting this waiver.
       */
      requesterPhoneNumber?: string;

      /**
       * The unit requesting this waiver.
       */
      requestingUnit?: string;

      /**
       * Description of the entities to which this waiver applies.
       */
      waiverAppliesTo?: string;

      /**
       * The description of this waiver.
       */
      waiverDescription?: string;

      /**
       * The name of the person who made the most recent change to this Waiver data.
       */
      waiverLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to this waiver data, in ISO8601 UTC
       * format with millisecond precision.
       */
      waiverLastChangedDate?: string;
    }
  }

  /**
   * Remarks contain amplifying information for a specific service. The information
   * may contain context and interpretations for consumer use.
   */
  export interface SiteRemark {
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
     * The ID of the site to which this remark applies.
     */
    idSite: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The text of the remark.
     */
    text: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * The remark type identifier. For example, the Mobility Air Forces (MAF) remark
     * code, defined in the Airfield Suitability and Restriction Report (ASRR).
     */
    code?: string;

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
     * The name of the remark.
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
     * Unique identifier of the Site Remark record from the originating system.
     */
    origRmkId?: string;

    /**
     * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
     */
    type?: string;
  }
}

export interface SiteQueryhelpResponse {
  aodrSupported?: boolean;

  classificationMarking?: string;

  description?: string;

  historySupported?: boolean;

  name?: string;

  parameters?: Array<SiteQueryhelpResponse.Parameter>;

  requiredRoles?: Array<string>;

  restSupported?: boolean;

  sortSupported?: boolean;

  typeName?: string;

  uri?: string;
}

export namespace SiteQueryhelpResponse {
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

export type SiteTupleResponse = Array<SiteTupleResponse.SiteTupleResponseItem>;

export namespace SiteTupleResponse {
  /**
   * Properties and characteristics of a site entity, such as an airbase, airfield,
   * naval station, etc.
   */
  export interface SiteTupleResponseItem {
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
     * The name of this site.
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
     * Indicates the function or mission of an entity, which that entity may or may not
     * be engaged in at any particular time. Typically refers to a unit, organization,
     * or installation/site performing a specific function or mission such as a
     * redistribution center or naval shipyard. The specific usage and enumerations
     * contained in this field may be found in the documentation provided in the
     * referenceDoc field. If referenceDoc not provided, users may consult the data
     * provider.
     */
    activity?: string;

    /**
     * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
     * coordinates reside.
     */
    airDefArea?: string;

    /**
     * The DoD Standard Country Code designator for the country or political entity to
     * which the site owes its allegiance. This field will be set to "OTHR" if the
     * source value does not match a UDL Country code value (ISO-3166-ALPHA-2).
     */
    allegiance?: string;

    /**
     * Specifies an alternate allegiance code if the data provider code is not part of
     * an official Country Code standard such as ISO-3166 or FIPS. This field will be
     * set to the value provided by the source and should be used for all Queries
     * specifying allegiance.
     */
    altAllegiance?: string;

    /**
     * The Basic Encyclopedia Number associated with the Site. Uniquely identifies the
     * installation of a site. The beNumber is generated based on the value input for
     * the COORD to determine the appropriate World Aeronautical Chart (WAC) location
     * identifier, the system assigned record originator and a one-up-number.
     */
    beNumber?: string;

    /**
     * The category code that represents the associated site purpose within the target
     * system.
     */
    catCode?: string;

    /**
     * Textual Description of Site catCode.
     */
    catText?: string;

    /**
     * Indicates the importance of the entity to the OES or MIR system. This data
     * element is restricted to update by DIA (DB-4). Valid values are:
     *
     * 0 - Does not meet criteria above
     *
     * 1 - Primary importance to system
     *
     * 2 - Secondary importance to system
     *
     * 3 - Tertiary importance to system
     *
     * O - Other. Explain in Remarks.
     */
    classRating?: string;

    /**
     * The physical manner of being or state of existence of the entity. A physical
     * condition that must be considered in the determining of a course of action. The
     * specific usage and enumerations contained in this field may be found in the
     * documentation provided in the referenceDoc field. If referenceDoc not provided,
     * users may consult the data provider.
     */
    condition?: string;

    /**
     * Availability of the entity relative to its condition. Indicates the reason the
     * entity is not fully operational. The specific usage and enumerations contained
     * in this field may be found in the documentation provided in the referenceDoc
     * field. If referenceDoc not provided, users may consult the data provider.
     */
    conditionAvail?: string;

    /**
     * Indicates any of the magnitudes that serve to define the position of a point by
     * reference to a fixed figure, system of lines, etc.
     *
     * Pos. 1-2. Latitude Degrees [00-90]
     *
     * Pos. 3-4. Latitude Minutes [00-59]
     *
     * Pos. 5-6. Latitude Seconds [00-59]
     *
     * Pos. 7-9. Latitude Thousandths Of Seconds [000-999]
     *
     * Pos. 10. Latitude Hemisphere [NS]
     *
     * Pos. 11-13. Longitude Degrees [00-180]
     *
     * Pos. 14-15. Longitude Minutes [00-59]
     *
     * Pos. 16-17. Longitude Seconds [00-59]
     *
     * Pos. 18-20. Longitude Thousandths Of Seconds [000-999]
     *
     * Pos. 21. Longitude Hemisphere [EW]
     *
     * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U].
     */
    coord?: string;

    /**
     * A mathematical model of the earth used to calculate coordinates on a map. US
     * Forces use the World Geodetic System 1984 (WGS 84), but also use maps by allied
     * countries with local datums. The datum must be specified to ensure accuracy of
     * coordinates. The specific usage and enumerations contained in this field may be
     * found in the documentation provided in the referenceDoc field. If referenceDoc
     * not provided, users may consult the data provider.
     */
    coordDatum?: string;

    /**
     * Indicates the plus or minus error assessed against the method used to derive the
     * coordinate.
     */
    coordDerivAcc?: number;

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
     * Ground elevation of the geographic coordinates referenced to (above or below)
     * Mean Sea Level (MSL) vertical datum, in meters.
     */
    elevMsl?: number;

    /**
     * Indicates the confidence level expressed as a percent that a specific geometric
     * spatial element, ELEVATION_MSL linear accuracy, has been vertically positioned
     * to within a specified vertical accuracy.
     */
    elevMslConfLvl?: number;

    /**
     * Indicates the plus or minus error assessed against the method used to derive the
     * elevation.
     */
    elevMslDerivAcc?: number;

    /**
     * An entity is a generic representation of any object within a space/SSA system
     * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
     * entity can have an operating unit, a location (if terrestrial), and statuses.
     */
    entity?: EntitiesAPI.EntityFull;

    /**
     * Eval represents the Intelligence Confidence Level or the Reliability/degree of
     * confidence that the analyst has assigned to the data within this record. The
     * numerical range is from 1 to 9 with 1 representing the highest confidence level.
     */
    eval?: number;

    /**
     * The Federal Aviation Administration (FAA) Location ID of this site, if
     * applicable.
     */
    faa?: string;

    /**
     * Functional Production Area (FPA) under the Shared Production Program (SPP).
     * Producers are defined per country per FPA. The specific usage and enumerations
     * contained in this field may be found in the documentation provided in the
     * referenceDoc field. If referenceDoc not provided, users may consult the data
     * provider.
     */
    fpa?: string;

    /**
     * Principal operational function being performed. The specific usage and
     * enumerations contained in this field may be found in the documentation provided
     * in the referenceDoc field. If referenceDoc not provided, users may consult the
     * data provider.
     */
    functPrimary?: string;

    /**
     * Geographical region code used by the Requirements Management System (RMS) as
     * specified by National Geospatial Agency (NGA) in Flight Information Publications
     * (FIPS) 10-4, Appendix 3 - Country Code and Geographic Region Codes. The specific
     * usage and enumerations contained in this field may be found in the documentation
     * provided in the referenceDoc field. If referenceDoc not provided, users may
     * consult the data provider.
     */
    geoArea?: string;

    /**
     * The distance between Mean Sea Level and a referenced ellipsoid, in meters.
     */
    geoidalMslSep?: number;

    /**
     * Indicates the amount or degree of deviation from the horizontal represented as a
     * percent. Grade is determined by the formula: vertical distance (VD) divided by
     * horizontal distance (HD) times 100. VD is the difference between the highest and
     * lowest elevation within the entity. HD is the linear distance between the
     * highest and lowest elevation.
     */
    grade?: number;

    /**
     * The International Air Transport Association (IATA) code of this site, if
     * applicable.
     */
    iata?: string;

    /**
     * The International Civil Aviation Organization (ICAO) code of this site, if
     * applicable.
     */
    icao?: string;

    /**
     * Estimated identity of the Site (ASSUMED FRIEND, FRIEND, HOSTILE, FAKER, JOKER,
     * NEUTRAL, PENDING, SUSPECT, UNKNOWN):
     *
     * ASSUMED FRIEND: Track assumed to be a friend due to the object characteristics,
     * behavior, and/or origin.
     *
     * FRIEND: Track object supporting friendly forces and belonging to a declared
     * friendly nation or entity.
     *
     * HOSTILE: Track object belonging to an opposing nation, party, group, or entity
     * deemed to contribute to a threat to friendly forces or their mission due to its
     * behavior, characteristics, nationality, or origin.
     *
     * FAKER: Friendly track, object, or entity acting as an exercise hostile.
     *
     * JOKER: Friendly track, object, or entity acting as an exercise suspect.
     *
     * NEUTRAL: Track object whose characteristics, behavior, nationality, and/or
     * origin indicate that it is neither supporting nor opposing friendly forces or
     * their mission.
     *
     * PENDING: Track object which has not been evaluated.
     *
     * SUSPECT: Track object deemed potentially hostile due to the object
     * characteristics, behavior, nationality, and/or origin.
     *
     * UNKNOWN: Track object which has been evaluated and does not meet criteria for
     * any standard identity.
     */
    ident?: string;

    /**
     * Unique identifier of the parent entity. idEntity is required for Put.
     */
    idEntity?: string;

    /**
     * Unique identifier of the Parent Site record associated with this Site record.
     */
    idParentSite?: string;

    /**
     * Indicates the normal usage of the Landing Zone (LZ). Intended as, but not
     * constrained to MIDB Helocopter Landing Area usage value definitions:
     *
     * AF - Airfield
     *
     * FD - Field
     *
     * HC - High Crop. 1 meter and over.
     *
     * HY - Highway
     *
     * LB - Lake Bed
     *
     * LC - Low Crop. 0-1 meters
     *
     * O - Other. Explain In Remarks.
     *
     * PD - Paddy
     *
     * PK - Park
     *
     * PS - Pasture
     *
     * RB - Riverbed
     *
     * SP - Sport Field
     *
     * U - Unknown
     *
     * Z - Inconclusive Analysis.
     */
    lzUsage?: string;

    /**
     * The length of the longest runway at this site, if applicable, in meters.
     */
    maxRunwayLength?: number;

    /**
     * The Military Grid Reference System is the geocoordinate standard used by NATO
     * militaries for locating points on Earth. The MGRS is derived from the Universal
     * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
     * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
     * geocode for the entire Earth. Example of an milgrid coordinate, or grid
     * reference, would be 4QFJ12345678, which consists of three parts:
     *
     * 4Q (grid zone designator, GZD)
     *
     * FJ (the 100,000-meter square identifier)
     *
     * 12345678 (numerical location; easting is 1234 and northing is 5678, in this case
     * specifying a location with 10 m resolution).
     */
    milGrid?: string;

    /**
     * Indicates the grid system used in the development of the milGrid coordinates.
     * Values are:
     *
     * UPS - Universal Polar System
     *
     * UTM - Universal Transverse Mercator.
     */
    milGridSys?: string;

    /**
     * Indicates the principal type of mission that an entity is organized and equipped
     * to perform. The specific usage and enumerations contained in this field may be
     * found in the documentation provided in the referenceDoc field. If referenceDoc
     * not provided, users may consult the data provider.
     */
    msnPrimary?: string;

    /**
     * Indicates the principal specialty type of mission that an entity is organized
     * and equipped to perform. The specific usage and enumerations contained in this
     * field may be found in the documentation provided in the referenceDoc field. If
     * referenceDoc not provided, users may consult the data provider.
     */
    msnPrimarySpec?: string;

    /**
     * Optional notes/comments for the site.
     */
    notes?: string;

    /**
     * A sites ability to conduct nuclear warfare. Valid Values are:
     *
     * A - Nuclear Ammo Or Warheads Available
     *
     * N - No Nuclear Offense
     *
     * O - Other. Explain in Remarks
     *
     * U - Unknown
     *
     * W - Nuclear Weapons Available
     *
     * Y - Nuclear Warfare Offensive Capability
     *
     * Z - Inconclusive Analysis.
     */
    nucCap?: string;

    /**
     * The Degree to which an entity is ready to perform the overall operational
     * mission(s) for which it was organized and equipped. The specific usage and
     * enumerations contained in this field may be found in the documentation provided
     * in the referenceDoc field. If referenceDoc not provided, users may consult the
     * data provider.
     */
    operStatus?: string;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Unique identifier of the LZ record from the originating system.
     */
    origLzId?: string;

    /**
     * The originating source network on which this record was created, auto-populated
     * by the system.
     */
    origNetwork?: string;

    /**
     * Unique identifier of the Site record from the originating system.
     */
    origSiteID?: string;

    /**
     * The O-suffix associated with this site. The O-suffix is a five-character
     * alpha/numeric system used to identify a site, or demographic area, within an
     * installation. The Installation Basic Encyclopedia (beNumber), in conjunction
     * with the O-suffix, uniquely identifies the Site. The Installation beNumber and
     * oSuffix are also used in conjunction with the catCode to classify the function
     * or purpose of the facility.
     */
    osuffix?: string;

    /**
     * Site number of a specific electronic site or its associated equipment.
     */
    pin?: string;

    /**
     * Political subdivision in which the geographic coordinates reside. The specific
     * usage and enumerations contained in this field may be found in the documentation
     * provided in the referenceDoc field. If referenceDoc not provided, users may
     * consult the data provider.
     */
    polSubdiv?: string;

    /**
     * Indicates whether the facility is in or outside of a populated area. True, the
     * facility is in or within 5 NM of a populated area. False, the facility is
     * outside a populated area.
     */
    popArea?: boolean;

    /**
     * Indicates the distance to nearest populated area (over 1,000 people) in nautical
     * miles.
     */
    popAreaProx?: number;

    /**
     * Validity and currency of the data in the record to be used in conjunction with
     * the other elements in the record as defined by SOPs.
     *
     * A - Active
     *
     * I - Inactive
     *
     * K - Acknowledged
     *
     * L - Local
     *
     * Q - A nominated (NOM) or Data Change Request (DCR) record
     *
     * R - Production reduced by CMD decision
     *
     * W - Working Record.
     */
    recStatus?: string;

    /**
     * The reference documentation that specifies the usage and enumerations contained
     * in this record. If referenceDoc not provided, users may consult the data
     * provider.
     */
    referenceDoc?: string;

    /**
     * Responsible Producer - Organization that is responsible for the maintenance of
     * the record.
     */
    resProd?: string;

    /**
     * Date on which the data in the record was last reviewed by the responsible
     * analyst for accuracy and currency, in ISO8601 UTC format. This date cannot be
     * greater than the current date.
     */
    reviewDate?: string;

    /**
     * The number of runways at the site, if applicable.
     */
    runways?: number;

    siteOperations?: Array<SiteTupleResponseItem.SiteOperation>;

    /**
     * Remarks contain amplifying information for a specific service. The information
     * may contain context and interpretations for consumer use.
     */
    siteRemarks?: Array<SiteTupleResponseItem.SiteRemark>;

    /**
     * A standard scheme for symbol coding enabling the transfer, display and use of
     * symbols and graphics among information systems, as per MIL-STD 2525B, and
     * supported by the element ident.
     */
    symCode?: string;

    /**
     * The type of this site (AIRBASE, AIRFIELD, AIRPORT, NAVAL STATION, etc.).
     */
    type?: string;

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
     * The use authorization type of this site (e.g MILITARY, CIVIL, JOINT-USE, etc.).
     */
    usage?: string;

    /**
     * Universal Transverse Mercator (UTM) grid coordinates.
     *
     * Pos. 1-2, UTM Zone Column [01-60
     *
     * Pos. 3, UTM Zone Row [C-HJ-NP-X]
     *
     * Pos. 4, UTM False Easting [0-9]
     *
     * Pos. 5-9, UTM Meter Easting [0-9][0-9][0-9][0-9][0-9]
     *
     * Pos. 10-11, UTM False Northing [0-9][0-9]
     *
     * Pos. 12-16, UTM Meter Northing [0-9][0-9][0-9][0-9][0-9].
     */
    utm?: string;

    /**
     * Maximum expected height of the vegetation in the Landing Zone (LZ), in meters.
     */
    vegHt?: number;

    /**
     * The predominant vegetation found in the Landing Zone (LZ). The specific usage
     * and enumerations contained in this field may be found in the documentation
     * provided in the referenceDoc field. If referenceDoc not provided, users may
     * consult the data provider.
     */
    vegType?: string;

    /**
     * World Aeronautical Chart identifier for the area in which a designated place is
     * located.
     */
    wac?: string;
  }

  export namespace SiteTupleResponseItem {
    /**
     * Site operating details concerning the hours of operation, operational
     * limitations, site navigation, and waivers associated with the Site.
     */
    export interface SiteOperation {
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
       * The ID of the parent site.
       */
      idSite: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

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
       * Collection providing hours of operation and other information specific to a day
       * of the week.
       */
      dailyOperations?: Array<SiteOperation.DailyOperation>;

      /**
       * The name of the person who made the most recent change to data in the
       * DailyOperations collection.
       */
      dopsLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to data in the DailyOperations
       * collection, in ISO 8601 UTC format with millisecond precision.
       */
      dopsLastChangedDate?: string;

      /**
       * The reason for the most recent change to data in the dailyOperations collection.
       */
      dopsLastChangedReason?: string;

      /**
       * Id of the associated launchSite entity.
       */
      idLaunchSite?: string;

      /**
       * Collection providing maximum on ground (MOG) information for specific aircraft
       * at the site associated with this SiteOperations record.
       */
      maximumOnGrounds?: Array<SiteOperation.MaximumOnGround>;

      /**
       * The name of the person who made the most recent change to data in the
       * MaximumOnGrounds collection.
       */
      mogsLastChangedBy?: string;

      /**
       * The datetime of the most recent change made to data in the MaximumOnGrounds
       * collection, in ISO 8601 UTC format with millisecond precision.
       */
      mogsLastChangedDate?: string;

      /**
       * The reason for the most recent change to data in the MaximumOnGrounds
       * collection.
       */
      mogsLastChangedReason?: string;

      /**
       * Collection providing relevant information in the event of deviations/exceptions
       * to normal operations.
       */
      operationalDeviations?: Array<SiteOperation.OperationalDeviation>;

      /**
       * Collection of planning information associated with this SiteOperations record.
       */
      operationalPlannings?: Array<SiteOperation.OperationalPlanning>;

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
       * Collection detailing operational pathways at the Site associated with this
       * SiteOperations record.
       */
      pathways?: Array<SiteOperation.Pathway>;

      /**
       * The source data library from which this record was received. This could be a
       * remote or tactical UDL or another data library. If null, the record should be
       * assumed to have originated from the primary Enterprise UDL.
       */
      sourceDL?: string;

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
       * Collection documenting operational waivers that have been issued for the Site
       * associated with this record.
       */
      waivers?: Array<SiteOperation.Waiver>;
    }

    export namespace SiteOperation {
      /**
       * Collection providing hours of operation and other information specific to a day
       * of the week.
       */
      export interface DailyOperation {
        /**
         * The day of the week to which this operational information pertains.
         */
        dayOfWeek?: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

        /**
         * A collection containing the operational start and stop times scheduled for the
         * day of the week specified.
         */
        operatingHours?: Array<DailyOperation.OperatingHour>;

        /**
         * The name or type of operation to which this information pertains.
         */
        operationName?: string;

        /**
         * The name of the person who made the most recent change to this DailyOperation
         * data.
         */
        ophrsLastChangedBy?: string;

        /**
         * The datetime of the most recent change made to this DailyOperation data, in ISO
         * 8601 UTC format with millisecond precision.
         */
        ophrsLastChangedDate?: string;
      }

      export namespace DailyOperation {
        /**
         * A collection containing the operational start and stop times scheduled for the
         * day of the week specified.
         */
        export interface OperatingHour {
          /**
           * The Zulu (UTC) operational start time, expressed in ISO 8601 format as HH:MM.
           */
          opStartTime?: string;

          /**
           * The Zulu (UTC) operational stop time, expressed in ISO 8601 format as HH:MM.
           */
          opStopTime?: string;
        }
      }

      /**
       * Collection providing maximum on ground (MOG) information for specific aircraft
       * at the site associated with this SiteOperations record.
       */
      export interface MaximumOnGround {
        /**
         * The Model Design Series (MDS) designation of the aircraft to which this maximum
         * on ground (MOG) data pertains.
         */
        aircraftMDS?: string;

        /**
         * Maximum on ground (MOG) number of contingent aircraft based on spacing and
         * manpower, for the aircraft type specified.
         */
        contingencyMOG?: number;

        /**
         * The name of the person who made the most recent change to this maximum on ground
         * data.
         */
        mogLastChangedBy?: string;

        /**
         * The datetime of the most recent change made to this maximum on ground data, in
         * ISO 8601 UTC format with millisecond precision.
         */
        mogLastChangedDate?: string;

        /**
         * Maximum on ground (MOG) number of parking wide-body aircraft based on spacing
         * and manpower, for the aircraft type specified.
         */
        wideParkingMOG?: number;

        /**
         * Maximum on ground (MOG) number of working wide-body aircraft based on spacing
         * and manpower, for the aircraft type specified.
         */
        wideWorkingMOG?: number;
      }

      /**
       * Collection providing relevant information in the event of deviations/exceptions
       * to normal operations.
       */
      export interface OperationalDeviation {
        /**
         * The Model Design Series (MDS) designation of the aircraft affected by this
         * operational deviation.
         */
        affectedAircraftMDS?: string;

        /**
         * The maximum on ground (MOG) number for aircraft affected by this operational
         * deviation.
         */
        affectedMOG?: number;

        /**
         * On ground time for aircraft affected by this operational deviation.
         */
        aircraftOnGroundTime?: string;

        /**
         * Rest time for crew affected by this operational deviation.
         */
        crewRestTime?: string;

        /**
         * The name of the person who made the most recent change to this
         * OperationalDeviation data.
         */
        odLastChangedBy?: string;

        /**
         * The datetime of the most recent change made to this OperationalDeviation data,
         * in ISO 8601 UTC format with millisecond precision.
         */
        odLastChangedDate?: string;

        /**
         * Text remark regarding this operational deviation.
         */
        odRemark?: string;
      }

      /**
       * Collection of planning information associated with this SiteOperations record.
       */
      export interface OperationalPlanning {
        /**
         * The end date of this operational planning, in ISO8601 UTC format with
         * millisecond precision.
         */
        opEndDate?: string;

        /**
         * The name of the person who made the most recent change made to this
         * OperationalPlanning data.
         */
        opLastChangedBy?: string;

        /**
         * The datetime of the most recent change made to this OperationalPlanning data, in
         * ISO8601 UTC format with millisecond precision.
         */
        opLastChangedDate?: string;

        /**
         * Remark text regarding this operation planning.
         */
        opRemark?: string;

        /**
         * The person, unit, organization, etc. responsible for this operation planning.
         */
        opSource?: string;

        /**
         * The start date of this operational planning, in ISO8601 UTC format with
         * millisecond precision.
         */
        opStartDate?: string;

        /**
         * The status of this operational planning.
         */
        opStatus?: string;
      }

      /**
       * Collection detailing operational pathways at the Site associated with this
       * SiteOperations record.
       */
      export interface Pathway {
        /**
         * Text defining this pathway from its constituent parts.
         */
        pwDefinition?: string;

        /**
         * The name of the person who made the most recent change to this Pathway data.
         */
        pwLastChangedBy?: string;

        /**
         * The datetime of the most recent change made to this Pathway data, in ISO 8601
         * UTC format with millisecond precision.
         */
        pwLastChangedDate?: string;

        /**
         * The type of paths that constitute this pathway.
         */
        pwType?: string;

        /**
         * The intended use of this pathway.
         */
        pwUsage?: string;
      }

      /**
       * Collection documenting operational waivers that have been issued for the Site
       * associated with this record.
       */
      export interface Waiver {
        /**
         * The expiration date of this waiver, in ISO8601 UTC format with millisecond
         * precision.
         */
        expirationDate?: string;

        /**
         * Boolean indicating whether or not this waiver has expired.
         */
        hasExpired?: boolean;

        /**
         * The issue date of this waiver, in ISO8601 UTC format with millisecond precision.
         */
        issueDate?: string;

        /**
         * The name of the person who issued this waiver.
         */
        issuerName?: string;

        /**
         * The name of the person requesting this waiver.
         */
        requesterName?: string;

        /**
         * The phone number of the person requesting this waiver.
         */
        requesterPhoneNumber?: string;

        /**
         * The unit requesting this waiver.
         */
        requestingUnit?: string;

        /**
         * Description of the entities to which this waiver applies.
         */
        waiverAppliesTo?: string;

        /**
         * The description of this waiver.
         */
        waiverDescription?: string;

        /**
         * The name of the person who made the most recent change to this Waiver data.
         */
        waiverLastChangedBy?: string;

        /**
         * The datetime of the most recent change made to this waiver data, in ISO8601 UTC
         * format with millisecond precision.
         */
        waiverLastChangedDate?: string;
      }
    }

    /**
     * Remarks contain amplifying information for a specific service. The information
     * may contain context and interpretations for consumer use.
     */
    export interface SiteRemark {
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
       * The ID of the site to which this remark applies.
       */
      idSite: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * The text of the remark.
       */
      text: string;

      /**
       * Unique identifier of the record, auto-generated by the system.
       */
      id?: string;

      /**
       * The remark type identifier. For example, the Mobility Air Forces (MAF) remark
       * code, defined in the Airfield Suitability and Restriction Report (ASRR).
       */
      code?: string;

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
       * The name of the remark.
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
       * Unique identifier of the Site Remark record from the originating system.
       */
      origRmkId?: string;

      /**
       * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
       */
      type?: string;
    }
  }
}

export interface SiteCreateParams {
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
   * The name of this site.
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
   * Indicates the function or mission of an entity, which that entity may or may not
   * be engaged in at any particular time. Typically refers to a unit, organization,
   * or installation/site performing a specific function or mission such as a
   * redistribution center or naval shipyard. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  activity?: string;

  /**
   * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
   * coordinates reside.
   */
  airDefArea?: string;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the site owes its allegiance. This field will be set to "OTHR" if the
   * source value does not match a UDL Country code value (ISO-3166-ALPHA-2).
   */
  allegiance?: string;

  /**
   * Specifies an alternate allegiance code if the data provider code is not part of
   * an official Country Code standard such as ISO-3166 or FIPS. This field will be
   * set to the value provided by the source and should be used for all Queries
   * specifying allegiance.
   */
  altAllegiance?: string;

  /**
   * The Basic Encyclopedia Number associated with the Site. Uniquely identifies the
   * installation of a site. The beNumber is generated based on the value input for
   * the COORD to determine the appropriate World Aeronautical Chart (WAC) location
   * identifier, the system assigned record originator and a one-up-number.
   */
  beNumber?: string;

  /**
   * The category code that represents the associated site purpose within the target
   * system.
   */
  catCode?: string;

  /**
   * Textual Description of Site catCode.
   */
  catText?: string;

  /**
   * Indicates the importance of the entity to the OES or MIR system. This data
   * element is restricted to update by DIA (DB-4). Valid values are:
   *
   * 0 - Does not meet criteria above
   *
   * 1 - Primary importance to system
   *
   * 2 - Secondary importance to system
   *
   * 3 - Tertiary importance to system
   *
   * O - Other. Explain in Remarks.
   */
  classRating?: string;

  /**
   * The physical manner of being or state of existence of the entity. A physical
   * condition that must be considered in the determining of a course of action. The
   * specific usage and enumerations contained in this field may be found in the
   * documentation provided in the referenceDoc field. If referenceDoc not provided,
   * users may consult the data provider.
   */
  condition?: string;

  /**
   * Availability of the entity relative to its condition. Indicates the reason the
   * entity is not fully operational. The specific usage and enumerations contained
   * in this field may be found in the documentation provided in the referenceDoc
   * field. If referenceDoc not provided, users may consult the data provider.
   */
  conditionAvail?: string;

  /**
   * Indicates any of the magnitudes that serve to define the position of a point by
   * reference to a fixed figure, system of lines, etc.
   *
   * Pos. 1-2. Latitude Degrees [00-90]
   *
   * Pos. 3-4. Latitude Minutes [00-59]
   *
   * Pos. 5-6. Latitude Seconds [00-59]
   *
   * Pos. 7-9. Latitude Thousandths Of Seconds [000-999]
   *
   * Pos. 10. Latitude Hemisphere [NS]
   *
   * Pos. 11-13. Longitude Degrees [00-180]
   *
   * Pos. 14-15. Longitude Minutes [00-59]
   *
   * Pos. 16-17. Longitude Seconds [00-59]
   *
   * Pos. 18-20. Longitude Thousandths Of Seconds [000-999]
   *
   * Pos. 21. Longitude Hemisphere [EW]
   *
   * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U].
   */
  coord?: string;

  /**
   * A mathematical model of the earth used to calculate coordinates on a map. US
   * Forces use the World Geodetic System 1984 (WGS 84), but also use maps by allied
   * countries with local datums. The datum must be specified to ensure accuracy of
   * coordinates. The specific usage and enumerations contained in this field may be
   * found in the documentation provided in the referenceDoc field. If referenceDoc
   * not provided, users may consult the data provider.
   */
  coordDatum?: string;

  /**
   * Indicates the plus or minus error assessed against the method used to derive the
   * coordinate.
   */
  coordDerivAcc?: number;

  /**
   * Ground elevation of the geographic coordinates referenced to (above or below)
   * Mean Sea Level (MSL) vertical datum, in meters.
   */
  elevMsl?: number;

  /**
   * Indicates the confidence level expressed as a percent that a specific geometric
   * spatial element, ELEVATION_MSL linear accuracy, has been vertically positioned
   * to within a specified vertical accuracy.
   */
  elevMslConfLvl?: number;

  /**
   * Indicates the plus or minus error assessed against the method used to derive the
   * elevation.
   */
  elevMslDerivAcc?: number;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityIngest;

  /**
   * Eval represents the Intelligence Confidence Level or the Reliability/degree of
   * confidence that the analyst has assigned to the data within this record. The
   * numerical range is from 1 to 9 with 1 representing the highest confidence level.
   */
  eval?: number;

  /**
   * The Federal Aviation Administration (FAA) Location ID of this site, if
   * applicable.
   */
  faa?: string;

  /**
   * Functional Production Area (FPA) under the Shared Production Program (SPP).
   * Producers are defined per country per FPA. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  fpa?: string;

  /**
   * Principal operational function being performed. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  functPrimary?: string;

  /**
   * Geographical region code used by the Requirements Management System (RMS) as
   * specified by National Geospatial Agency (NGA) in Flight Information Publications
   * (FIPS) 10-4, Appendix 3 - Country Code and Geographic Region Codes. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  geoArea?: string;

  /**
   * The distance between Mean Sea Level and a referenced ellipsoid, in meters.
   */
  geoidalMslSep?: number;

  /**
   * Indicates the amount or degree of deviation from the horizontal represented as a
   * percent. Grade is determined by the formula: vertical distance (VD) divided by
   * horizontal distance (HD) times 100. VD is the difference between the highest and
   * lowest elevation within the entity. HD is the linear distance between the
   * highest and lowest elevation.
   */
  grade?: number;

  /**
   * The International Air Transport Association (IATA) code of this site, if
   * applicable.
   */
  iata?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of this site, if
   * applicable.
   */
  icao?: string;

  /**
   * Estimated identity of the Site (ASSUMED FRIEND, FRIEND, HOSTILE, FAKER, JOKER,
   * NEUTRAL, PENDING, SUSPECT, UNKNOWN):
   *
   * ASSUMED FRIEND: Track assumed to be a friend due to the object characteristics,
   * behavior, and/or origin.
   *
   * FRIEND: Track object supporting friendly forces and belonging to a declared
   * friendly nation or entity.
   *
   * HOSTILE: Track object belonging to an opposing nation, party, group, or entity
   * deemed to contribute to a threat to friendly forces or their mission due to its
   * behavior, characteristics, nationality, or origin.
   *
   * FAKER: Friendly track, object, or entity acting as an exercise hostile.
   *
   * JOKER: Friendly track, object, or entity acting as an exercise suspect.
   *
   * NEUTRAL: Track object whose characteristics, behavior, nationality, and/or
   * origin indicate that it is neither supporting nor opposing friendly forces or
   * their mission.
   *
   * PENDING: Track object which has not been evaluated.
   *
   * SUSPECT: Track object deemed potentially hostile due to the object
   * characteristics, behavior, nationality, and/or origin.
   *
   * UNKNOWN: Track object which has been evaluated and does not meet criteria for
   * any standard identity.
   */
  ident?: string;

  /**
   * Unique identifier of the parent entity. idEntity is required for Put.
   */
  idEntity?: string;

  /**
   * Unique identifier of the Parent Site record associated with this Site record.
   */
  idParentSite?: string;

  /**
   * Indicates the normal usage of the Landing Zone (LZ). Intended as, but not
   * constrained to MIDB Helocopter Landing Area usage value definitions:
   *
   * AF - Airfield
   *
   * FD - Field
   *
   * HC - High Crop. 1 meter and over.
   *
   * HY - Highway
   *
   * LB - Lake Bed
   *
   * LC - Low Crop. 0-1 meters
   *
   * O - Other. Explain In Remarks.
   *
   * PD - Paddy
   *
   * PK - Park
   *
   * PS - Pasture
   *
   * RB - Riverbed
   *
   * SP - Sport Field
   *
   * U - Unknown
   *
   * Z - Inconclusive Analysis.
   */
  lzUsage?: string;

  /**
   * The length of the longest runway at this site, if applicable, in meters.
   */
  maxRunwayLength?: number;

  /**
   * The Military Grid Reference System is the geocoordinate standard used by NATO
   * militaries for locating points on Earth. The MGRS is derived from the Universal
   * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
   * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
   * geocode for the entire Earth. Example of an milgrid coordinate, or grid
   * reference, would be 4QFJ12345678, which consists of three parts:
   *
   * 4Q (grid zone designator, GZD)
   *
   * FJ (the 100,000-meter square identifier)
   *
   * 12345678 (numerical location; easting is 1234 and northing is 5678, in this case
   * specifying a location with 10 m resolution).
   */
  milGrid?: string;

  /**
   * Indicates the grid system used in the development of the milGrid coordinates.
   * Values are:
   *
   * UPS - Universal Polar System
   *
   * UTM - Universal Transverse Mercator.
   */
  milGridSys?: string;

  /**
   * Indicates the principal type of mission that an entity is organized and equipped
   * to perform. The specific usage and enumerations contained in this field may be
   * found in the documentation provided in the referenceDoc field. If referenceDoc
   * not provided, users may consult the data provider.
   */
  msnPrimary?: string;

  /**
   * Indicates the principal specialty type of mission that an entity is organized
   * and equipped to perform. The specific usage and enumerations contained in this
   * field may be found in the documentation provided in the referenceDoc field. If
   * referenceDoc not provided, users may consult the data provider.
   */
  msnPrimarySpec?: string;

  /**
   * Optional notes/comments for the site.
   */
  notes?: string;

  /**
   * A sites ability to conduct nuclear warfare. Valid Values are:
   *
   * A - Nuclear Ammo Or Warheads Available
   *
   * N - No Nuclear Offense
   *
   * O - Other. Explain in Remarks
   *
   * U - Unknown
   *
   * W - Nuclear Weapons Available
   *
   * Y - Nuclear Warfare Offensive Capability
   *
   * Z - Inconclusive Analysis.
   */
  nucCap?: string;

  /**
   * The Degree to which an entity is ready to perform the overall operational
   * mission(s) for which it was organized and equipped. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  operStatus?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Unique identifier of the LZ record from the originating system.
   */
  origLzId?: string;

  /**
   * Unique identifier of the Site record from the originating system.
   */
  origSiteID?: string;

  /**
   * The O-suffix associated with this site. The O-suffix is a five-character
   * alpha/numeric system used to identify a site, or demographic area, within an
   * installation. The Installation Basic Encyclopedia (beNumber), in conjunction
   * with the O-suffix, uniquely identifies the Site. The Installation beNumber and
   * oSuffix are also used in conjunction with the catCode to classify the function
   * or purpose of the facility.
   */
  osuffix?: string;

  /**
   * Site number of a specific electronic site or its associated equipment.
   */
  pin?: string;

  /**
   * Political subdivision in which the geographic coordinates reside. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  polSubdiv?: string;

  /**
   * Indicates whether the facility is in or outside of a populated area. True, the
   * facility is in or within 5 NM of a populated area. False, the facility is
   * outside a populated area.
   */
  popArea?: boolean;

  /**
   * Indicates the distance to nearest populated area (over 1,000 people) in nautical
   * miles.
   */
  popAreaProx?: number;

  /**
   * Validity and currency of the data in the record to be used in conjunction with
   * the other elements in the record as defined by SOPs.
   *
   * A - Active
   *
   * I - Inactive
   *
   * K - Acknowledged
   *
   * L - Local
   *
   * Q - A nominated (NOM) or Data Change Request (DCR) record
   *
   * R - Production reduced by CMD decision
   *
   * W - Working Record.
   */
  recStatus?: string;

  /**
   * The reference documentation that specifies the usage and enumerations contained
   * in this record. If referenceDoc not provided, users may consult the data
   * provider.
   */
  referenceDoc?: string;

  /**
   * Responsible Producer - Organization that is responsible for the maintenance of
   * the record.
   */
  resProd?: string;

  /**
   * Date on which the data in the record was last reviewed by the responsible
   * analyst for accuracy and currency, in ISO8601 UTC format. This date cannot be
   * greater than the current date.
   */
  reviewDate?: string;

  /**
   * The number of runways at the site, if applicable.
   */
  runways?: number;

  /**
   * A standard scheme for symbol coding enabling the transfer, display and use of
   * symbols and graphics among information systems, as per MIL-STD 2525B, and
   * supported by the element ident.
   */
  symCode?: string;

  /**
   * The type of this site (AIRBASE, AIRFIELD, AIRPORT, NAVAL STATION, etc.).
   */
  type?: string;

  /**
   * The use authorization type of this site (e.g MILITARY, CIVIL, JOINT-USE, etc.).
   */
  usage?: string;

  /**
   * Universal Transverse Mercator (UTM) grid coordinates.
   *
   * Pos. 1-2, UTM Zone Column [01-60
   *
   * Pos. 3, UTM Zone Row [C-HJ-NP-X]
   *
   * Pos. 4, UTM False Easting [0-9]
   *
   * Pos. 5-9, UTM Meter Easting [0-9][0-9][0-9][0-9][0-9]
   *
   * Pos. 10-11, UTM False Northing [0-9][0-9]
   *
   * Pos. 12-16, UTM Meter Northing [0-9][0-9][0-9][0-9][0-9].
   */
  utm?: string;

  /**
   * Maximum expected height of the vegetation in the Landing Zone (LZ), in meters.
   */
  vegHt?: number;

  /**
   * The predominant vegetation found in the Landing Zone (LZ). The specific usage
   * and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  vegType?: string;

  /**
   * World Aeronautical Chart identifier for the area in which a designated place is
   * located.
   */
  wac?: string;
}

export interface SiteUpdateParams {
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
   * The name of this site.
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
   * Indicates the function or mission of an entity, which that entity may or may not
   * be engaged in at any particular time. Typically refers to a unit, organization,
   * or installation/site performing a specific function or mission such as a
   * redistribution center or naval shipyard. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  activity?: string;

  /**
   * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
   * coordinates reside.
   */
  airDefArea?: string;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the site owes its allegiance. This field will be set to "OTHR" if the
   * source value does not match a UDL Country code value (ISO-3166-ALPHA-2).
   */
  allegiance?: string;

  /**
   * Specifies an alternate allegiance code if the data provider code is not part of
   * an official Country Code standard such as ISO-3166 or FIPS. This field will be
   * set to the value provided by the source and should be used for all Queries
   * specifying allegiance.
   */
  altAllegiance?: string;

  /**
   * The Basic Encyclopedia Number associated with the Site. Uniquely identifies the
   * installation of a site. The beNumber is generated based on the value input for
   * the COORD to determine the appropriate World Aeronautical Chart (WAC) location
   * identifier, the system assigned record originator and a one-up-number.
   */
  beNumber?: string;

  /**
   * The category code that represents the associated site purpose within the target
   * system.
   */
  catCode?: string;

  /**
   * Textual Description of Site catCode.
   */
  catText?: string;

  /**
   * Indicates the importance of the entity to the OES or MIR system. This data
   * element is restricted to update by DIA (DB-4). Valid values are:
   *
   * 0 - Does not meet criteria above
   *
   * 1 - Primary importance to system
   *
   * 2 - Secondary importance to system
   *
   * 3 - Tertiary importance to system
   *
   * O - Other. Explain in Remarks.
   */
  classRating?: string;

  /**
   * The physical manner of being or state of existence of the entity. A physical
   * condition that must be considered in the determining of a course of action. The
   * specific usage and enumerations contained in this field may be found in the
   * documentation provided in the referenceDoc field. If referenceDoc not provided,
   * users may consult the data provider.
   */
  condition?: string;

  /**
   * Availability of the entity relative to its condition. Indicates the reason the
   * entity is not fully operational. The specific usage and enumerations contained
   * in this field may be found in the documentation provided in the referenceDoc
   * field. If referenceDoc not provided, users may consult the data provider.
   */
  conditionAvail?: string;

  /**
   * Indicates any of the magnitudes that serve to define the position of a point by
   * reference to a fixed figure, system of lines, etc.
   *
   * Pos. 1-2. Latitude Degrees [00-90]
   *
   * Pos. 3-4. Latitude Minutes [00-59]
   *
   * Pos. 5-6. Latitude Seconds [00-59]
   *
   * Pos. 7-9. Latitude Thousandths Of Seconds [000-999]
   *
   * Pos. 10. Latitude Hemisphere [NS]
   *
   * Pos. 11-13. Longitude Degrees [00-180]
   *
   * Pos. 14-15. Longitude Minutes [00-59]
   *
   * Pos. 16-17. Longitude Seconds [00-59]
   *
   * Pos. 18-20. Longitude Thousandths Of Seconds [000-999]
   *
   * Pos. 21. Longitude Hemisphere [EW]
   *
   * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U].
   */
  coord?: string;

  /**
   * A mathematical model of the earth used to calculate coordinates on a map. US
   * Forces use the World Geodetic System 1984 (WGS 84), but also use maps by allied
   * countries with local datums. The datum must be specified to ensure accuracy of
   * coordinates. The specific usage and enumerations contained in this field may be
   * found in the documentation provided in the referenceDoc field. If referenceDoc
   * not provided, users may consult the data provider.
   */
  coordDatum?: string;

  /**
   * Indicates the plus or minus error assessed against the method used to derive the
   * coordinate.
   */
  coordDerivAcc?: number;

  /**
   * Ground elevation of the geographic coordinates referenced to (above or below)
   * Mean Sea Level (MSL) vertical datum, in meters.
   */
  elevMsl?: number;

  /**
   * Indicates the confidence level expressed as a percent that a specific geometric
   * spatial element, ELEVATION_MSL linear accuracy, has been vertically positioned
   * to within a specified vertical accuracy.
   */
  elevMslConfLvl?: number;

  /**
   * Indicates the plus or minus error assessed against the method used to derive the
   * elevation.
   */
  elevMslDerivAcc?: number;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityIngest;

  /**
   * Eval represents the Intelligence Confidence Level or the Reliability/degree of
   * confidence that the analyst has assigned to the data within this record. The
   * numerical range is from 1 to 9 with 1 representing the highest confidence level.
   */
  eval?: number;

  /**
   * The Federal Aviation Administration (FAA) Location ID of this site, if
   * applicable.
   */
  faa?: string;

  /**
   * Functional Production Area (FPA) under the Shared Production Program (SPP).
   * Producers are defined per country per FPA. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  fpa?: string;

  /**
   * Principal operational function being performed. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  functPrimary?: string;

  /**
   * Geographical region code used by the Requirements Management System (RMS) as
   * specified by National Geospatial Agency (NGA) in Flight Information Publications
   * (FIPS) 10-4, Appendix 3 - Country Code and Geographic Region Codes. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  geoArea?: string;

  /**
   * The distance between Mean Sea Level and a referenced ellipsoid, in meters.
   */
  geoidalMslSep?: number;

  /**
   * Indicates the amount or degree of deviation from the horizontal represented as a
   * percent. Grade is determined by the formula: vertical distance (VD) divided by
   * horizontal distance (HD) times 100. VD is the difference between the highest and
   * lowest elevation within the entity. HD is the linear distance between the
   * highest and lowest elevation.
   */
  grade?: number;

  /**
   * The International Air Transport Association (IATA) code of this site, if
   * applicable.
   */
  iata?: string;

  /**
   * The International Civil Aviation Organization (ICAO) code of this site, if
   * applicable.
   */
  icao?: string;

  /**
   * Estimated identity of the Site (ASSUMED FRIEND, FRIEND, HOSTILE, FAKER, JOKER,
   * NEUTRAL, PENDING, SUSPECT, UNKNOWN):
   *
   * ASSUMED FRIEND: Track assumed to be a friend due to the object characteristics,
   * behavior, and/or origin.
   *
   * FRIEND: Track object supporting friendly forces and belonging to a declared
   * friendly nation or entity.
   *
   * HOSTILE: Track object belonging to an opposing nation, party, group, or entity
   * deemed to contribute to a threat to friendly forces or their mission due to its
   * behavior, characteristics, nationality, or origin.
   *
   * FAKER: Friendly track, object, or entity acting as an exercise hostile.
   *
   * JOKER: Friendly track, object, or entity acting as an exercise suspect.
   *
   * NEUTRAL: Track object whose characteristics, behavior, nationality, and/or
   * origin indicate that it is neither supporting nor opposing friendly forces or
   * their mission.
   *
   * PENDING: Track object which has not been evaluated.
   *
   * SUSPECT: Track object deemed potentially hostile due to the object
   * characteristics, behavior, nationality, and/or origin.
   *
   * UNKNOWN: Track object which has been evaluated and does not meet criteria for
   * any standard identity.
   */
  ident?: string;

  /**
   * Unique identifier of the parent entity. idEntity is required for Put.
   */
  idEntity?: string;

  /**
   * Unique identifier of the Parent Site record associated with this Site record.
   */
  idParentSite?: string;

  /**
   * Indicates the normal usage of the Landing Zone (LZ). Intended as, but not
   * constrained to MIDB Helocopter Landing Area usage value definitions:
   *
   * AF - Airfield
   *
   * FD - Field
   *
   * HC - High Crop. 1 meter and over.
   *
   * HY - Highway
   *
   * LB - Lake Bed
   *
   * LC - Low Crop. 0-1 meters
   *
   * O - Other. Explain In Remarks.
   *
   * PD - Paddy
   *
   * PK - Park
   *
   * PS - Pasture
   *
   * RB - Riverbed
   *
   * SP - Sport Field
   *
   * U - Unknown
   *
   * Z - Inconclusive Analysis.
   */
  lzUsage?: string;

  /**
   * The length of the longest runway at this site, if applicable, in meters.
   */
  maxRunwayLength?: number;

  /**
   * The Military Grid Reference System is the geocoordinate standard used by NATO
   * militaries for locating points on Earth. The MGRS is derived from the Universal
   * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
   * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
   * geocode for the entire Earth. Example of an milgrid coordinate, or grid
   * reference, would be 4QFJ12345678, which consists of three parts:
   *
   * 4Q (grid zone designator, GZD)
   *
   * FJ (the 100,000-meter square identifier)
   *
   * 12345678 (numerical location; easting is 1234 and northing is 5678, in this case
   * specifying a location with 10 m resolution).
   */
  milGrid?: string;

  /**
   * Indicates the grid system used in the development of the milGrid coordinates.
   * Values are:
   *
   * UPS - Universal Polar System
   *
   * UTM - Universal Transverse Mercator.
   */
  milGridSys?: string;

  /**
   * Indicates the principal type of mission that an entity is organized and equipped
   * to perform. The specific usage and enumerations contained in this field may be
   * found in the documentation provided in the referenceDoc field. If referenceDoc
   * not provided, users may consult the data provider.
   */
  msnPrimary?: string;

  /**
   * Indicates the principal specialty type of mission that an entity is organized
   * and equipped to perform. The specific usage and enumerations contained in this
   * field may be found in the documentation provided in the referenceDoc field. If
   * referenceDoc not provided, users may consult the data provider.
   */
  msnPrimarySpec?: string;

  /**
   * Optional notes/comments for the site.
   */
  notes?: string;

  /**
   * A sites ability to conduct nuclear warfare. Valid Values are:
   *
   * A - Nuclear Ammo Or Warheads Available
   *
   * N - No Nuclear Offense
   *
   * O - Other. Explain in Remarks
   *
   * U - Unknown
   *
   * W - Nuclear Weapons Available
   *
   * Y - Nuclear Warfare Offensive Capability
   *
   * Z - Inconclusive Analysis.
   */
  nucCap?: string;

  /**
   * The Degree to which an entity is ready to perform the overall operational
   * mission(s) for which it was organized and equipped. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  operStatus?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Unique identifier of the LZ record from the originating system.
   */
  origLzId?: string;

  /**
   * Unique identifier of the Site record from the originating system.
   */
  origSiteID?: string;

  /**
   * The O-suffix associated with this site. The O-suffix is a five-character
   * alpha/numeric system used to identify a site, or demographic area, within an
   * installation. The Installation Basic Encyclopedia (beNumber), in conjunction
   * with the O-suffix, uniquely identifies the Site. The Installation beNumber and
   * oSuffix are also used in conjunction with the catCode to classify the function
   * or purpose of the facility.
   */
  osuffix?: string;

  /**
   * Site number of a specific electronic site or its associated equipment.
   */
  pin?: string;

  /**
   * Political subdivision in which the geographic coordinates reside. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  polSubdiv?: string;

  /**
   * Indicates whether the facility is in or outside of a populated area. True, the
   * facility is in or within 5 NM of a populated area. False, the facility is
   * outside a populated area.
   */
  popArea?: boolean;

  /**
   * Indicates the distance to nearest populated area (over 1,000 people) in nautical
   * miles.
   */
  popAreaProx?: number;

  /**
   * Validity and currency of the data in the record to be used in conjunction with
   * the other elements in the record as defined by SOPs.
   *
   * A - Active
   *
   * I - Inactive
   *
   * K - Acknowledged
   *
   * L - Local
   *
   * Q - A nominated (NOM) or Data Change Request (DCR) record
   *
   * R - Production reduced by CMD decision
   *
   * W - Working Record.
   */
  recStatus?: string;

  /**
   * The reference documentation that specifies the usage and enumerations contained
   * in this record. If referenceDoc not provided, users may consult the data
   * provider.
   */
  referenceDoc?: string;

  /**
   * Responsible Producer - Organization that is responsible for the maintenance of
   * the record.
   */
  resProd?: string;

  /**
   * Date on which the data in the record was last reviewed by the responsible
   * analyst for accuracy and currency, in ISO8601 UTC format. This date cannot be
   * greater than the current date.
   */
  reviewDate?: string;

  /**
   * The number of runways at the site, if applicable.
   */
  runways?: number;

  /**
   * A standard scheme for symbol coding enabling the transfer, display and use of
   * symbols and graphics among information systems, as per MIL-STD 2525B, and
   * supported by the element ident.
   */
  symCode?: string;

  /**
   * The type of this site (AIRBASE, AIRFIELD, AIRPORT, NAVAL STATION, etc.).
   */
  type?: string;

  /**
   * The use authorization type of this site (e.g MILITARY, CIVIL, JOINT-USE, etc.).
   */
  usage?: string;

  /**
   * Universal Transverse Mercator (UTM) grid coordinates.
   *
   * Pos. 1-2, UTM Zone Column [01-60
   *
   * Pos. 3, UTM Zone Row [C-HJ-NP-X]
   *
   * Pos. 4, UTM False Easting [0-9]
   *
   * Pos. 5-9, UTM Meter Easting [0-9][0-9][0-9][0-9][0-9]
   *
   * Pos. 10-11, UTM False Northing [0-9][0-9]
   *
   * Pos. 12-16, UTM Meter Northing [0-9][0-9][0-9][0-9][0-9].
   */
  utm?: string;

  /**
   * Maximum expected height of the vegetation in the Landing Zone (LZ), in meters.
   */
  vegHt?: number;

  /**
   * The predominant vegetation found in the Landing Zone (LZ). The specific usage
   * and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  vegType?: string;

  /**
   * World Aeronautical Chart identifier for the area in which a designated place is
   * located.
   */
  wac?: string;
}

export interface SiteListParams extends OffsetPageParams {}

export interface SiteCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SiteGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SiteTupleParams {
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

Site.Operations = Operations;

export declare namespace Site {
  export {
    type SiteListResponse as SiteListResponse,
    type SiteCountResponse as SiteCountResponse,
    type SiteGetResponse as SiteGetResponse,
    type SiteQueryhelpResponse as SiteQueryhelpResponse,
    type SiteTupleResponse as SiteTupleResponse,
    type SiteListResponsesOffsetPage as SiteListResponsesOffsetPage,
    type SiteCreateParams as SiteCreateParams,
    type SiteUpdateParams as SiteUpdateParams,
    type SiteListParams as SiteListParams,
    type SiteCountParams as SiteCountParams,
    type SiteGetParams as SiteGetParams,
    type SiteTupleParams as SiteTupleParams,
  };

  export {
    Operations as Operations,
    type OperationRetrieveResponse as OperationRetrieveResponse,
    type OperationListResponse as OperationListResponse,
    type OperationCountResponse as OperationCountResponse,
    type OperationQueryHelpResponse as OperationQueryHelpResponse,
    type OperationTupleResponse as OperationTupleResponse,
    type OperationListResponsesOffsetPage as OperationListResponsesOffsetPage,
    type OperationCreateParams as OperationCreateParams,
    type OperationRetrieveParams as OperationRetrieveParams,
    type OperationUpdateParams as OperationUpdateParams,
    type OperationListParams as OperationListParams,
    type OperationCountParams as OperationCountParams,
    type OperationCreateBulkParams as OperationCreateBulkParams,
    type OperationTupleParams as OperationTupleParams,
    type OperationUnvalidatedPublishParams as OperationUnvalidatedPublishParams,
  };
}
