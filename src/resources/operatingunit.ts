// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LocationAPI from './location';
import * as OrganizationAPI from './organization';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Operatingunit extends APIResource {
  /**
   * Service operation to take a single Operatingunit as a POST body and ingest into
   * the database. Operatingunit defines a unit or organization which operates or
   * controls a space-related Entity. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   */
  create(body: OperatingunitCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/operatingunit', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update a single Operatingunit. Operatingunit defines a unit
   * or organization which operates or controls a space-related Entity. A specific
   * role is required to perform this service operation. Please contact the UDL team
   * for assistance.
   */
  update(id: string, body: OperatingunitUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/operatingunit/${id}`, {
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
    query: OperatingunitListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OperatingunitListResponse> {
    return this._client.get('/udl/operatingunit', { query, ...options });
  }

  /**
   * Service operation to delete an Operatingunit object specified by the passed ID
   * path parameter. Operatingunit defines a unit or organization which operates or
   * controls a space-related Entity. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/operatingunit/${id}`, {
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
  count(
    query: OperatingunitCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/operatingunit/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Operatingunit record by its unique ID passed
   * as a path parameter. Operatingunit defines a unit or organization which operates
   * or controls a space-related Entity.
   */
  get(
    id: string,
    query: OperatingunitGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OperatingunitGetResponse> {
    return this._client.get(path`/udl/operatingunit/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/operatingunit/queryhelp', {
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
  tuple(query: OperatingunitTupleParams, options?: RequestOptions): APIPromise<OperatingunitTupleResponse> {
    return this._client.get('/udl/operatingunit/tuple', { query, ...options });
  }
}

export type OperatingunitListResponse = Array<OperatingunitListResponse.OperatingunitListResponseItem>;

export namespace OperatingunitListResponse {
  /**
   * Model representation of a unit or organization which operates or controls a
   * space-related Entity such as an on-orbit payload, a sensor, etc. A contact may
   * belong to an organization.
   */
  export interface OperatingunitListResponseItem {
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
     * Name of the operating unit.
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
     * coordinates reside.
     */
    airDefArea?: string;

    /**
     * The DoD Standard country code designator for the country or political entity to
     * which the operating unit owes its allegiance. This field will be set to "OTHR"
     * if the source value does not match a UDL country code value (ISO-3166-ALPHA-2).
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
     * Specifies an alternate country code if the data provider code is not part of an
     * official Country Code standard such as ISO-3166 or FIPS. This field will be set
     * to the value provided by the source and should be used for all Queries
     * specifying a Country Code.
     */
    altCountryCode?: string;

    /**
     * Unique identifier of the operating unit record from the originating system.
     */
    altOperatingUnitId?: string;

    /**
     * Indicates the importance of the operating unit to the OES or MIR system. This
     * data element is restricted to update by DIA (DB-4). Valid values are: 0 - Does
     * not meet criteria above 1 - Primary importance to system 2 - Secondary
     * importance to system 3 - Tertiary importance to system O - Other. Explain in
     * Remarks.
     */
    classRating?: string;

    /**
     * The physical manner of being or state of existence of the operating unit. A
     * physical condition that must be considered in the determining of a course of
     * action. The specific usage and enumerations contained in this field may be found
     * in the documentation provided in the referenceDoc field. If referenceDoc not
     * provided, users may consult the data provider.
     */
    condition?: string;

    /**
     * Availability of the operating unit relative to its condition. Indicates the
     * reason the operating unit is not fully operational. The specific usage and
     * enumerations contained in this field may be found in the documentation provided
     * in the referenceDoc field. If referenceDoc not provided, users may consult the
     * data provider.
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
     * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U]
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
     * The DoD Standard country code designator for the country or political entity to
     * which the operating unit geographic coordinates reside . This field will be set
     * to "OTHR" if the source value does not match a UDL country code value
     * (ISO-3166-ALPHA-2).
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
     * A code describing the amount of operating unit participation in a deployment.
     * The specific usage and enumerations contained in this field may be found in the
     * documentation provided in the referenceDoc field. If referenceDoc not provided,
     * users may consult the data provider.
     */
    deployStatus?: string;

    /**
     * Description of the operating unit.
     */
    description?: string;

    /**
     * Combat status of a divisional or equivalent operating unit. Currently, this data
     * element applies only to operating units of the Former Soviet Union. The specific
     * usage and enumerations contained in this field may be found in the documentation
     * provided in the referenceDoc field. If referenceDoc not provided, users may
     * consult the data provider.
     */
    divCat?: string;

    /**
     * Organizational level of the operating unit. The specific usage and enumerations
     * contained in this field may be found in the documentation provided in the
     * referenceDoc field. If referenceDoc not provided, users may consult the data
     * provider.
     */
    echelon?: string;

    /**
     * Indicates the major group or level to which an echelon belongs. The specific
     * usage and enumerations contained in this field may be found in the documentation
     * provided in the referenceDoc field. If referenceDoc not provided, users may
     * consult the data provider.
     */
    echelonTier?: string;

    /**
     * Ground elevation of the geographic coordinates referenced to (above or below)
     * Mean Sea Level (MSL) vertical datum.
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
     * The Intelligence Confidence Level or the Reliability/degree of confidence that
     * the analyst has assigned to the data within this record. The numerical range is
     * from 1 to 9 with 1 representing the highest confidence level.
     */
    eval?: number;

    /**
     * The country code of the observed flag flown.
     */
    flagFlown?: string;

    /**
     * Naval fleet to which an operating unit is assigned. The specific usage and
     * enumerations contained in this field may be found in the documentation provided
     * in the referenceDoc field. If referenceDoc not provided, users may consult the
     * data provider.
     */
    fleetId?: string;

    /**
     * An aggregation of military units within a single service (i.e., ARMY, AIR FORCE,
     * etc.) which operates under a single authority to accomplish a common mission.
     * The specific usage and enumerations contained in this field may be found in the
     * documentation provided in the referenceDoc field. If referenceDoc not provided,
     * users may consult the data provider.
     */
    force?: string;

    /**
     * The specific name for a given force. For example, Force = ADF (Air Defense
     * Force) and Force Name = Army Air Defense Force.
     */
    forceName?: string;

    /**
     * Functional Production Area (FPA) under the Shared Production Program (SPP).
     * Producers are defined per country per FPA. The specific usage and enumerations
     * contained in this field may be found in the documentation provided in the
     * referenceDoc field. If referenceDoc not provided, users may consult the data
     * provider.
     */
    fpa?: string;

    /**
     * Principal combat-related role that an operating unit is organized, structured
     * and equipped to perform. Or, the specialized military or paramilitary branch in
     * which an individual serves, their specialization. The specific usage and
     * enumerations contained in this field may be found in the documentation provided
     * in the referenceDoc field. If referenceDoc not provided, users may consult the
     * data provider.
     */
    functRole?: string;

    /**
     * The distance between Mean Sea Level and a referenced ellipsoid.
     */
    geoidalMslSep?: number;

    /**
     * Unique identifier of the contact for this operating unit.
     */
    idContact?: string;

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
     * Unique identifier of the location record for this operating unit.
     */
    idLocation?: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    idOperatingUnit?: string;

    /**
     * Unique identifier of the organization record for this operating unit.
     */
    idOrganization?: string;

    /**
     * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
     * south of equator).
     */
    lat?: number;

    /**
     * Location name for the coordinates.
     */
    locName?: string;

    /**
     * Indicates the reason that the operating unit is at that location. The specific
     * usage and enumerations contained in this field may be found in the documentation
     * provided in the referenceDoc field. If referenceDoc not provided, users may
     * consult the data provider.
     */
    locReason?: string;

    /**
     * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon?: number;

    /**
     * This field contains a value indicating whether the record is a master unit
     * record (True) or a detail record (False). Master records contain basic
     * information that does not change over time for each unit that has been selected
     * to be projected.
     */
    masterUnit?: boolean;

    /**
     * The Military Grid Reference System is the geocoordinate standard used by NATO
     * militaries for locating points on Earth. The MGRS is derived from the Universal
     * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
     * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
     * geocode for the entire Earth. Example of an milgrid coordinate, or grid
     * reference, would be 4QFJ12345678, which consists of three parts: 4Q (grid zone
     * designator, GZD) FJ (the 100,000-meter square identifier) 12345678 (numerical
     * location; easting is 1234 and northing is 5678, in this case specifying a
     * location with 10 m resolution).
     */
    milGrid?: string;

    /**
     * Indicates the grid system used in the development of the milGrid coordinates.
     * Values are:
     *
     * UPS - Universal Polar System
     *
     * UTM - Universal Transverse Mercator
     */
    milGridSys?: string;

    /**
     * Indicates the principal type of mission that an operating unit is organized and
     * equipped to perform. The specific usage and enumerations contained in this field
     * may be found in the documentation provided in the referenceDoc field. If
     * referenceDoc not provided, users may consult the data provider.
     */
    msnPrimary?: string;

    /**
     * Indicates the principal specialty type of mission that an operating unit is
     * organized and equipped to perform. The specific usage and enumerations contained
     * in this field may be found in the documentation provided in the referenceDoc
     * field. If referenceDoc not provided, users may consult the data provider.
     */
    msnPrimarySpecialty?: string;

    /**
     * The Degree to which an operating unit is ready to perform the overall
     * operational mission(s) for which it was organized and equipped. The specific
     * usage and enumerations contained in this field may be found in the documentation
     * provided in the referenceDoc field. If referenceDoc not provided, users may
     * consult the data provider.
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
     * Political subdivision in which the geographic coordinates reside. The specific
     * usage and enumerations contained in this field may be found in the documentation
     * provided in the referenceDoc field. If referenceDoc not provided, users may
     * consult the data provider.
     */
    polSubdiv?: string;

    /**
     * Validity and currency of the data in the record to be used in conjunction with
     * the other elements in the record as defined by SOPs. Values are: A - Active I -
     * Inactive K - Acknowledged L - Local Q - A nominated (NOM) or Data Change Request
     * (DCR) record R - Production reduced by CMD decision W - Working Record.
     */
    recStatus?: string;

    /**
     * The reference documentiation that specifies the usage and enumerations contained
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
     * analyst for accuracy and currency. This date cannot be greater than the current
     * date.
     */
    reviewDate?: string;

    /**
     * This field contains a value indicating whether the record is a stylized
     * operating unit record (True) or a regular operating unit record (False). A
     * stylized operating unit is a type of operating unit with one set of equipment
     * that can be assigned to one or more superiors. A stylized operating unit is
     * generally useful for lower echelon operating units where the number of operating
     * units and types of equipment are equal for multiple organizations. In lieu of
     * creating unique operating unit records for each operating unit, a template is
     * created for the operating unit and its equipment. This template enables the user
     * to assign the operating unit to multiple organizations.
     */
    stylizedUnit?: boolean;

    /**
     * A standard scheme for symbol coding enabling the transfer, display and use of
     * symbols and graphics among information systems, as per MIL-STD 2525B, and
     * supported by the element AFFILIATION.
     */
    symCode?: string;

    /**
     * An optional identifier for this operating unit that may be composed from items
     * such as the originating organization, allegiance, one-up number, etc.
     */
    unitIdentifier?: string;

    /**
     * Universal Transverse Mercator (UTM) grid coordinates. Pos. 1-2, UTM Zone Column
     * [01-60 Pos. 3, UTM Zone Row [C-HJ-NP-X] Pos. 4, UTM False Easting [0-9] Pos.
     * 5-9, UTM Meter Easting [0-9][0-9][0-9][0-9][0-9] Pos. 10-11, UTM False Northing
     * [0-9][0-9] Pos. 12-16, UTM Meter Northing [0-9][0-9][0-9][0-9][0-9].
     */
    utm?: string;

    /**
     * World Aeronautical Chart identifier for the area in which a designated operating
     * unit is located.
     */
    wac?: string;
  }
}

export type OperatingunitCountResponse = string;

/**
 * Model representation of a unit or organization which operates or controls a
 * space-related Entity such as an on-orbit payload, a sensor, etc. A contact may
 * belong to an organization.
 */
export interface OperatingunitGetResponse {
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
   * Name of the operating unit.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
   * coordinates reside.
   */
  airDefArea?: string;

  /**
   * The DoD Standard country code designator for the country or political entity to
   * which the operating unit owes its allegiance. This field will be set to "OTHR"
   * if the source value does not match a UDL country code value (ISO-3166-ALPHA-2).
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
   * Specifies an alternate country code if the data provider code is not part of an
   * official Country Code standard such as ISO-3166 or FIPS. This field will be set
   * to the value provided by the source and should be used for all Queries
   * specifying a Country Code.
   */
  altCountryCode?: string;

  /**
   * Unique identifier of the operating unit record from the originating system.
   */
  altOperatingUnitId?: string;

  /**
   * Indicates the importance of the operating unit to the OES or MIR system. This
   * data element is restricted to update by DIA (DB-4). Valid values are: 0 - Does
   * not meet criteria above 1 - Primary importance to system 2 - Secondary
   * importance to system 3 - Tertiary importance to system O - Other. Explain in
   * Remarks.
   */
  classRating?: string;

  /**
   * The physical manner of being or state of existence of the operating unit. A
   * physical condition that must be considered in the determining of a course of
   * action. The specific usage and enumerations contained in this field may be found
   * in the documentation provided in the referenceDoc field. If referenceDoc not
   * provided, users may consult the data provider.
   */
  condition?: string;

  /**
   * Availability of the operating unit relative to its condition. Indicates the
   * reason the operating unit is not fully operational. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
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
   * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U]
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
   * The DoD Standard country code designator for the country or political entity to
   * which the operating unit geographic coordinates reside . This field will be set
   * to "OTHR" if the source value does not match a UDL country code value
   * (ISO-3166-ALPHA-2).
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
   * A code describing the amount of operating unit participation in a deployment.
   * The specific usage and enumerations contained in this field may be found in the
   * documentation provided in the referenceDoc field. If referenceDoc not provided,
   * users may consult the data provider.
   */
  deployStatus?: string;

  /**
   * Description of the operating unit.
   */
  description?: string;

  /**
   * Combat status of a divisional or equivalent operating unit. Currently, this data
   * element applies only to operating units of the Former Soviet Union. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  divCat?: string;

  /**
   * Organizational level of the operating unit. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  echelon?: string;

  /**
   * Indicates the major group or level to which an echelon belongs. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  echelonTier?: string;

  /**
   * Ground elevation of the geographic coordinates referenced to (above or below)
   * Mean Sea Level (MSL) vertical datum.
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
   * The Intelligence Confidence Level or the Reliability/degree of confidence that
   * the analyst has assigned to the data within this record. The numerical range is
   * from 1 to 9 with 1 representing the highest confidence level.
   */
  eval?: number;

  /**
   * The country code of the observed flag flown.
   */
  flagFlown?: string;

  /**
   * Naval fleet to which an operating unit is assigned. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  fleetId?: string;

  /**
   * An aggregation of military units within a single service (i.e., ARMY, AIR FORCE,
   * etc.) which operates under a single authority to accomplish a common mission.
   * The specific usage and enumerations contained in this field may be found in the
   * documentation provided in the referenceDoc field. If referenceDoc not provided,
   * users may consult the data provider.
   */
  force?: string;

  /**
   * The specific name for a given force. For example, Force = ADF (Air Defense
   * Force) and Force Name = Army Air Defense Force.
   */
  forceName?: string;

  /**
   * Functional Production Area (FPA) under the Shared Production Program (SPP).
   * Producers are defined per country per FPA. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  fpa?: string;

  /**
   * Principal combat-related role that an operating unit is organized, structured
   * and equipped to perform. Or, the specialized military or paramilitary branch in
   * which an individual serves, their specialization. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  functRole?: string;

  /**
   * The distance between Mean Sea Level and a referenced ellipsoid.
   */
  geoidalMslSep?: number;

  /**
   * Unique identifier of the contact for this operating unit.
   */
  idContact?: string;

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
   * Unique identifier of the location record for this operating unit.
   */
  idLocation?: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  idOperatingUnit?: string;

  /**
   * Unique identifier of the organization record for this operating unit.
   */
  idOrganization?: string;

  /**
   * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * Model representation of a location, which is a specific fixed point on the earth
   * and is used to denote the locations of fixed sensors, operating units, etc.
   */
  location?: LocationAPI.LocationFull;

  /**
   * Location name for the coordinates.
   */
  locName?: string;

  /**
   * Indicates the reason that the operating unit is at that location. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  locReason?: string;

  /**
   * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

  /**
   * This field contains a value indicating whether the record is a master unit
   * record (True) or a detail record (False). Master records contain basic
   * information that does not change over time for each unit that has been selected
   * to be projected.
   */
  masterUnit?: boolean;

  /**
   * The Military Grid Reference System is the geocoordinate standard used by NATO
   * militaries for locating points on Earth. The MGRS is derived from the Universal
   * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
   * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
   * geocode for the entire Earth. Example of an milgrid coordinate, or grid
   * reference, would be 4QFJ12345678, which consists of three parts: 4Q (grid zone
   * designator, GZD) FJ (the 100,000-meter square identifier) 12345678 (numerical
   * location; easting is 1234 and northing is 5678, in this case specifying a
   * location with 10 m resolution).
   */
  milGrid?: string;

  /**
   * Indicates the grid system used in the development of the milGrid coordinates.
   * Values are:
   *
   * UPS - Universal Polar System
   *
   * UTM - Universal Transverse Mercator
   */
  milGridSys?: string;

  /**
   * Indicates the principal type of mission that an operating unit is organized and
   * equipped to perform. The specific usage and enumerations contained in this field
   * may be found in the documentation provided in the referenceDoc field. If
   * referenceDoc not provided, users may consult the data provider.
   */
  msnPrimary?: string;

  /**
   * Indicates the principal specialty type of mission that an operating unit is
   * organized and equipped to perform. The specific usage and enumerations contained
   * in this field may be found in the documentation provided in the referenceDoc
   * field. If referenceDoc not provided, users may consult the data provider.
   */
  msnPrimarySpecialty?: string;

  /**
   * Remarks contain amplifying information for a specific service. The information
   * may contain context and interpretations for consumer use.
   */
  operatingUnitRemarks?: Array<OperatingunitGetResponse.OperatingUnitRemark>;

  /**
   * The Degree to which an operating unit is ready to perform the overall
   * operational mission(s) for which it was organized and equipped. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  operStatus?: string;

  /**
   * An organization such as a corporation, manufacturer, consortium, government,
   * etc. An organization may have parent and child organizations as well as link to
   * a former organization if this org previously existed as another organization.
   */
  organization?: OrganizationAPI.OrganizationFull;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Political subdivision in which the geographic coordinates reside. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  polSubdiv?: string;

  /**
   * Validity and currency of the data in the record to be used in conjunction with
   * the other elements in the record as defined by SOPs. Values are: A - Active I -
   * Inactive K - Acknowledged L - Local Q - A nominated (NOM) or Data Change Request
   * (DCR) record R - Production reduced by CMD decision W - Working Record.
   */
  recStatus?: string;

  /**
   * The reference documentiation that specifies the usage and enumerations contained
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
   * analyst for accuracy and currency. This date cannot be greater than the current
   * date.
   */
  reviewDate?: string;

  /**
   * This field contains a value indicating whether the record is a stylized
   * operating unit record (True) or a regular operating unit record (False). A
   * stylized operating unit is a type of operating unit with one set of equipment
   * that can be assigned to one or more superiors. A stylized operating unit is
   * generally useful for lower echelon operating units where the number of operating
   * units and types of equipment are equal for multiple organizations. In lieu of
   * creating unique operating unit records for each operating unit, a template is
   * created for the operating unit and its equipment. This template enables the user
   * to assign the operating unit to multiple organizations.
   */
  stylizedUnit?: boolean;

  /**
   * A standard scheme for symbol coding enabling the transfer, display and use of
   * symbols and graphics among information systems, as per MIL-STD 2525B, and
   * supported by the element AFFILIATION.
   */
  symCode?: string;

  /**
   * An optional identifier for this operating unit that may be composed from items
   * such as the originating organization, allegiance, one-up number, etc.
   */
  unitIdentifier?: string;

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
   * Universal Transverse Mercator (UTM) grid coordinates. Pos. 1-2, UTM Zone Column
   * [01-60 Pos. 3, UTM Zone Row [C-HJ-NP-X] Pos. 4, UTM False Easting [0-9] Pos.
   * 5-9, UTM Meter Easting [0-9][0-9][0-9][0-9][0-9] Pos. 10-11, UTM False Northing
   * [0-9][0-9] Pos. 12-16, UTM Meter Northing [0-9][0-9][0-9][0-9][0-9].
   */
  utm?: string;

  /**
   * World Aeronautical Chart identifier for the area in which a designated operating
   * unit is located.
   */
  wac?: string;
}

export namespace OperatingunitGetResponse {
  /**
   * Remarks contain amplifying information for a specific service. The information
   * may contain context and interpretations for consumer use.
   */
  export interface OperatingUnitRemark {
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
     * The ID of the operating unit to which this remark applies.
     */
    idOperatingUnit: string;

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
     * Unique identifier of the unit remark record from the originating system.
     */
    altRmkId?: string;

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
     * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
     */
    type?: string;

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
}

export type OperatingunitTupleResponse = Array<OperatingunitTupleResponse.OperatingunitTupleResponseItem>;

export namespace OperatingunitTupleResponse {
  /**
   * Model representation of a unit or organization which operates or controls a
   * space-related Entity such as an on-orbit payload, a sensor, etc. A contact may
   * belong to an organization.
   */
  export interface OperatingunitTupleResponseItem {
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
     * Name of the operating unit.
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
     * coordinates reside.
     */
    airDefArea?: string;

    /**
     * The DoD Standard country code designator for the country or political entity to
     * which the operating unit owes its allegiance. This field will be set to "OTHR"
     * if the source value does not match a UDL country code value (ISO-3166-ALPHA-2).
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
     * Specifies an alternate country code if the data provider code is not part of an
     * official Country Code standard such as ISO-3166 or FIPS. This field will be set
     * to the value provided by the source and should be used for all Queries
     * specifying a Country Code.
     */
    altCountryCode?: string;

    /**
     * Unique identifier of the operating unit record from the originating system.
     */
    altOperatingUnitId?: string;

    /**
     * Indicates the importance of the operating unit to the OES or MIR system. This
     * data element is restricted to update by DIA (DB-4). Valid values are: 0 - Does
     * not meet criteria above 1 - Primary importance to system 2 - Secondary
     * importance to system 3 - Tertiary importance to system O - Other. Explain in
     * Remarks.
     */
    classRating?: string;

    /**
     * The physical manner of being or state of existence of the operating unit. A
     * physical condition that must be considered in the determining of a course of
     * action. The specific usage and enumerations contained in this field may be found
     * in the documentation provided in the referenceDoc field. If referenceDoc not
     * provided, users may consult the data provider.
     */
    condition?: string;

    /**
     * Availability of the operating unit relative to its condition. Indicates the
     * reason the operating unit is not fully operational. The specific usage and
     * enumerations contained in this field may be found in the documentation provided
     * in the referenceDoc field. If referenceDoc not provided, users may consult the
     * data provider.
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
     * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U]
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
     * The DoD Standard country code designator for the country or political entity to
     * which the operating unit geographic coordinates reside . This field will be set
     * to "OTHR" if the source value does not match a UDL country code value
     * (ISO-3166-ALPHA-2).
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
     * A code describing the amount of operating unit participation in a deployment.
     * The specific usage and enumerations contained in this field may be found in the
     * documentation provided in the referenceDoc field. If referenceDoc not provided,
     * users may consult the data provider.
     */
    deployStatus?: string;

    /**
     * Description of the operating unit.
     */
    description?: string;

    /**
     * Combat status of a divisional or equivalent operating unit. Currently, this data
     * element applies only to operating units of the Former Soviet Union. The specific
     * usage and enumerations contained in this field may be found in the documentation
     * provided in the referenceDoc field. If referenceDoc not provided, users may
     * consult the data provider.
     */
    divCat?: string;

    /**
     * Organizational level of the operating unit. The specific usage and enumerations
     * contained in this field may be found in the documentation provided in the
     * referenceDoc field. If referenceDoc not provided, users may consult the data
     * provider.
     */
    echelon?: string;

    /**
     * Indicates the major group or level to which an echelon belongs. The specific
     * usage and enumerations contained in this field may be found in the documentation
     * provided in the referenceDoc field. If referenceDoc not provided, users may
     * consult the data provider.
     */
    echelonTier?: string;

    /**
     * Ground elevation of the geographic coordinates referenced to (above or below)
     * Mean Sea Level (MSL) vertical datum.
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
     * The Intelligence Confidence Level or the Reliability/degree of confidence that
     * the analyst has assigned to the data within this record. The numerical range is
     * from 1 to 9 with 1 representing the highest confidence level.
     */
    eval?: number;

    /**
     * The country code of the observed flag flown.
     */
    flagFlown?: string;

    /**
     * Naval fleet to which an operating unit is assigned. The specific usage and
     * enumerations contained in this field may be found in the documentation provided
     * in the referenceDoc field. If referenceDoc not provided, users may consult the
     * data provider.
     */
    fleetId?: string;

    /**
     * An aggregation of military units within a single service (i.e., ARMY, AIR FORCE,
     * etc.) which operates under a single authority to accomplish a common mission.
     * The specific usage and enumerations contained in this field may be found in the
     * documentation provided in the referenceDoc field. If referenceDoc not provided,
     * users may consult the data provider.
     */
    force?: string;

    /**
     * The specific name for a given force. For example, Force = ADF (Air Defense
     * Force) and Force Name = Army Air Defense Force.
     */
    forceName?: string;

    /**
     * Functional Production Area (FPA) under the Shared Production Program (SPP).
     * Producers are defined per country per FPA. The specific usage and enumerations
     * contained in this field may be found in the documentation provided in the
     * referenceDoc field. If referenceDoc not provided, users may consult the data
     * provider.
     */
    fpa?: string;

    /**
     * Principal combat-related role that an operating unit is organized, structured
     * and equipped to perform. Or, the specialized military or paramilitary branch in
     * which an individual serves, their specialization. The specific usage and
     * enumerations contained in this field may be found in the documentation provided
     * in the referenceDoc field. If referenceDoc not provided, users may consult the
     * data provider.
     */
    functRole?: string;

    /**
     * The distance between Mean Sea Level and a referenced ellipsoid.
     */
    geoidalMslSep?: number;

    /**
     * Unique identifier of the contact for this operating unit.
     */
    idContact?: string;

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
     * Unique identifier of the location record for this operating unit.
     */
    idLocation?: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    idOperatingUnit?: string;

    /**
     * Unique identifier of the organization record for this operating unit.
     */
    idOrganization?: string;

    /**
     * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
     * south of equator).
     */
    lat?: number;

    /**
     * Model representation of a location, which is a specific fixed point on the earth
     * and is used to denote the locations of fixed sensors, operating units, etc.
     */
    location?: LocationAPI.LocationFull;

    /**
     * Location name for the coordinates.
     */
    locName?: string;

    /**
     * Indicates the reason that the operating unit is at that location. The specific
     * usage and enumerations contained in this field may be found in the documentation
     * provided in the referenceDoc field. If referenceDoc not provided, users may
     * consult the data provider.
     */
    locReason?: string;

    /**
     * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon?: number;

    /**
     * This field contains a value indicating whether the record is a master unit
     * record (True) or a detail record (False). Master records contain basic
     * information that does not change over time for each unit that has been selected
     * to be projected.
     */
    masterUnit?: boolean;

    /**
     * The Military Grid Reference System is the geocoordinate standard used by NATO
     * militaries for locating points on Earth. The MGRS is derived from the Universal
     * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
     * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
     * geocode for the entire Earth. Example of an milgrid coordinate, or grid
     * reference, would be 4QFJ12345678, which consists of three parts: 4Q (grid zone
     * designator, GZD) FJ (the 100,000-meter square identifier) 12345678 (numerical
     * location; easting is 1234 and northing is 5678, in this case specifying a
     * location with 10 m resolution).
     */
    milGrid?: string;

    /**
     * Indicates the grid system used in the development of the milGrid coordinates.
     * Values are:
     *
     * UPS - Universal Polar System
     *
     * UTM - Universal Transverse Mercator
     */
    milGridSys?: string;

    /**
     * Indicates the principal type of mission that an operating unit is organized and
     * equipped to perform. The specific usage and enumerations contained in this field
     * may be found in the documentation provided in the referenceDoc field. If
     * referenceDoc not provided, users may consult the data provider.
     */
    msnPrimary?: string;

    /**
     * Indicates the principal specialty type of mission that an operating unit is
     * organized and equipped to perform. The specific usage and enumerations contained
     * in this field may be found in the documentation provided in the referenceDoc
     * field. If referenceDoc not provided, users may consult the data provider.
     */
    msnPrimarySpecialty?: string;

    /**
     * Remarks contain amplifying information for a specific service. The information
     * may contain context and interpretations for consumer use.
     */
    operatingUnitRemarks?: Array<OperatingunitTupleResponseItem.OperatingUnitRemark>;

    /**
     * The Degree to which an operating unit is ready to perform the overall
     * operational mission(s) for which it was organized and equipped. The specific
     * usage and enumerations contained in this field may be found in the documentation
     * provided in the referenceDoc field. If referenceDoc not provided, users may
     * consult the data provider.
     */
    operStatus?: string;

    /**
     * An organization such as a corporation, manufacturer, consortium, government,
     * etc. An organization may have parent and child organizations as well as link to
     * a former organization if this org previously existed as another organization.
     */
    organization?: OrganizationAPI.OrganizationFull;

    /**
     * Originating system or organization which produced the data, if different from
     * the source. The origin may be different than the source if the source was a
     * mediating system which forwarded the data on behalf of the origin system. If
     * null, the source may be assumed to be the origin.
     */
    origin?: string;

    /**
     * Political subdivision in which the geographic coordinates reside. The specific
     * usage and enumerations contained in this field may be found in the documentation
     * provided in the referenceDoc field. If referenceDoc not provided, users may
     * consult the data provider.
     */
    polSubdiv?: string;

    /**
     * Validity and currency of the data in the record to be used in conjunction with
     * the other elements in the record as defined by SOPs. Values are: A - Active I -
     * Inactive K - Acknowledged L - Local Q - A nominated (NOM) or Data Change Request
     * (DCR) record R - Production reduced by CMD decision W - Working Record.
     */
    recStatus?: string;

    /**
     * The reference documentiation that specifies the usage and enumerations contained
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
     * analyst for accuracy and currency. This date cannot be greater than the current
     * date.
     */
    reviewDate?: string;

    /**
     * This field contains a value indicating whether the record is a stylized
     * operating unit record (True) or a regular operating unit record (False). A
     * stylized operating unit is a type of operating unit with one set of equipment
     * that can be assigned to one or more superiors. A stylized operating unit is
     * generally useful for lower echelon operating units where the number of operating
     * units and types of equipment are equal for multiple organizations. In lieu of
     * creating unique operating unit records for each operating unit, a template is
     * created for the operating unit and its equipment. This template enables the user
     * to assign the operating unit to multiple organizations.
     */
    stylizedUnit?: boolean;

    /**
     * A standard scheme for symbol coding enabling the transfer, display and use of
     * symbols and graphics among information systems, as per MIL-STD 2525B, and
     * supported by the element AFFILIATION.
     */
    symCode?: string;

    /**
     * An optional identifier for this operating unit that may be composed from items
     * such as the originating organization, allegiance, one-up number, etc.
     */
    unitIdentifier?: string;

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
     * Universal Transverse Mercator (UTM) grid coordinates. Pos. 1-2, UTM Zone Column
     * [01-60 Pos. 3, UTM Zone Row [C-HJ-NP-X] Pos. 4, UTM False Easting [0-9] Pos.
     * 5-9, UTM Meter Easting [0-9][0-9][0-9][0-9][0-9] Pos. 10-11, UTM False Northing
     * [0-9][0-9] Pos. 12-16, UTM Meter Northing [0-9][0-9][0-9][0-9][0-9].
     */
    utm?: string;

    /**
     * World Aeronautical Chart identifier for the area in which a designated operating
     * unit is located.
     */
    wac?: string;
  }

  export namespace OperatingunitTupleResponseItem {
    /**
     * Remarks contain amplifying information for a specific service. The information
     * may contain context and interpretations for consumer use.
     */
    export interface OperatingUnitRemark {
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
       * The ID of the operating unit to which this remark applies.
       */
      idOperatingUnit: string;

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
       * Unique identifier of the unit remark record from the originating system.
       */
      altRmkId?: string;

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
       * The remark type (e.g. Caution, Information, Misc, Restriction, etc.).
       */
      type?: string;

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
  }
}

export interface OperatingunitCreateParams {
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
   * Name of the operating unit.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
   * coordinates reside.
   */
  airDefArea?: string;

  /**
   * The DoD Standard country code designator for the country or political entity to
   * which the operating unit owes its allegiance. This field will be set to "OTHR"
   * if the source value does not match a UDL country code value (ISO-3166-ALPHA-2).
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
   * Specifies an alternate country code if the data provider code is not part of an
   * official Country Code standard such as ISO-3166 or FIPS. This field will be set
   * to the value provided by the source and should be used for all Queries
   * specifying a Country Code.
   */
  altCountryCode?: string;

  /**
   * Unique identifier of the operating unit record from the originating system.
   */
  altOperatingUnitId?: string;

  /**
   * Indicates the importance of the operating unit to the OES or MIR system. This
   * data element is restricted to update by DIA (DB-4). Valid values are: 0 - Does
   * not meet criteria above 1 - Primary importance to system 2 - Secondary
   * importance to system 3 - Tertiary importance to system O - Other. Explain in
   * Remarks.
   */
  classRating?: string;

  /**
   * The physical manner of being or state of existence of the operating unit. A
   * physical condition that must be considered in the determining of a course of
   * action. The specific usage and enumerations contained in this field may be found
   * in the documentation provided in the referenceDoc field. If referenceDoc not
   * provided, users may consult the data provider.
   */
  condition?: string;

  /**
   * Availability of the operating unit relative to its condition. Indicates the
   * reason the operating unit is not fully operational. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
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
   * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U]
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
   * The DoD Standard country code designator for the country or political entity to
   * which the operating unit geographic coordinates reside . This field will be set
   * to "OTHR" if the source value does not match a UDL country code value
   * (ISO-3166-ALPHA-2).
   */
  countryCode?: string;

  /**
   * A code describing the amount of operating unit participation in a deployment.
   * The specific usage and enumerations contained in this field may be found in the
   * documentation provided in the referenceDoc field. If referenceDoc not provided,
   * users may consult the data provider.
   */
  deployStatus?: string;

  /**
   * Description of the operating unit.
   */
  description?: string;

  /**
   * Combat status of a divisional or equivalent operating unit. Currently, this data
   * element applies only to operating units of the Former Soviet Union. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  divCat?: string;

  /**
   * Organizational level of the operating unit. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  echelon?: string;

  /**
   * Indicates the major group or level to which an echelon belongs. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  echelonTier?: string;

  /**
   * Ground elevation of the geographic coordinates referenced to (above or below)
   * Mean Sea Level (MSL) vertical datum.
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
   * The Intelligence Confidence Level or the Reliability/degree of confidence that
   * the analyst has assigned to the data within this record. The numerical range is
   * from 1 to 9 with 1 representing the highest confidence level.
   */
  eval?: number;

  /**
   * The country code of the observed flag flown.
   */
  flagFlown?: string;

  /**
   * Naval fleet to which an operating unit is assigned. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  fleetId?: string;

  /**
   * An aggregation of military units within a single service (i.e., ARMY, AIR FORCE,
   * etc.) which operates under a single authority to accomplish a common mission.
   * The specific usage and enumerations contained in this field may be found in the
   * documentation provided in the referenceDoc field. If referenceDoc not provided,
   * users may consult the data provider.
   */
  force?: string;

  /**
   * The specific name for a given force. For example, Force = ADF (Air Defense
   * Force) and Force Name = Army Air Defense Force.
   */
  forceName?: string;

  /**
   * Functional Production Area (FPA) under the Shared Production Program (SPP).
   * Producers are defined per country per FPA. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  fpa?: string;

  /**
   * Principal combat-related role that an operating unit is organized, structured
   * and equipped to perform. Or, the specialized military or paramilitary branch in
   * which an individual serves, their specialization. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  functRole?: string;

  /**
   * The distance between Mean Sea Level and a referenced ellipsoid.
   */
  geoidalMslSep?: number;

  /**
   * Unique identifier of the contact for this operating unit.
   */
  idContact?: string;

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
   * Unique identifier of the location record for this operating unit.
   */
  idLocation?: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  idOperatingUnit?: string;

  /**
   * Unique identifier of the organization record for this operating unit.
   */
  idOrganization?: string;

  /**
   * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * Location name for the coordinates.
   */
  locName?: string;

  /**
   * Indicates the reason that the operating unit is at that location. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  locReason?: string;

  /**
   * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

  /**
   * This field contains a value indicating whether the record is a master unit
   * record (True) or a detail record (False). Master records contain basic
   * information that does not change over time for each unit that has been selected
   * to be projected.
   */
  masterUnit?: boolean;

  /**
   * The Military Grid Reference System is the geocoordinate standard used by NATO
   * militaries for locating points on Earth. The MGRS is derived from the Universal
   * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
   * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
   * geocode for the entire Earth. Example of an milgrid coordinate, or grid
   * reference, would be 4QFJ12345678, which consists of three parts: 4Q (grid zone
   * designator, GZD) FJ (the 100,000-meter square identifier) 12345678 (numerical
   * location; easting is 1234 and northing is 5678, in this case specifying a
   * location with 10 m resolution).
   */
  milGrid?: string;

  /**
   * Indicates the grid system used in the development of the milGrid coordinates.
   * Values are:
   *
   * UPS - Universal Polar System
   *
   * UTM - Universal Transverse Mercator
   */
  milGridSys?: string;

  /**
   * Indicates the principal type of mission that an operating unit is organized and
   * equipped to perform. The specific usage and enumerations contained in this field
   * may be found in the documentation provided in the referenceDoc field. If
   * referenceDoc not provided, users may consult the data provider.
   */
  msnPrimary?: string;

  /**
   * Indicates the principal specialty type of mission that an operating unit is
   * organized and equipped to perform. The specific usage and enumerations contained
   * in this field may be found in the documentation provided in the referenceDoc
   * field. If referenceDoc not provided, users may consult the data provider.
   */
  msnPrimarySpecialty?: string;

  /**
   * The Degree to which an operating unit is ready to perform the overall
   * operational mission(s) for which it was organized and equipped. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
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
   * Political subdivision in which the geographic coordinates reside. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  polSubdiv?: string;

  /**
   * Validity and currency of the data in the record to be used in conjunction with
   * the other elements in the record as defined by SOPs. Values are: A - Active I -
   * Inactive K - Acknowledged L - Local Q - A nominated (NOM) or Data Change Request
   * (DCR) record R - Production reduced by CMD decision W - Working Record.
   */
  recStatus?: string;

  /**
   * The reference documentiation that specifies the usage and enumerations contained
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
   * analyst for accuracy and currency. This date cannot be greater than the current
   * date.
   */
  reviewDate?: string;

  /**
   * This field contains a value indicating whether the record is a stylized
   * operating unit record (True) or a regular operating unit record (False). A
   * stylized operating unit is a type of operating unit with one set of equipment
   * that can be assigned to one or more superiors. A stylized operating unit is
   * generally useful for lower echelon operating units where the number of operating
   * units and types of equipment are equal for multiple organizations. In lieu of
   * creating unique operating unit records for each operating unit, a template is
   * created for the operating unit and its equipment. This template enables the user
   * to assign the operating unit to multiple organizations.
   */
  stylizedUnit?: boolean;

  /**
   * A standard scheme for symbol coding enabling the transfer, display and use of
   * symbols and graphics among information systems, as per MIL-STD 2525B, and
   * supported by the element AFFILIATION.
   */
  symCode?: string;

  /**
   * An optional identifier for this operating unit that may be composed from items
   * such as the originating organization, allegiance, one-up number, etc.
   */
  unitIdentifier?: string;

  /**
   * Universal Transverse Mercator (UTM) grid coordinates. Pos. 1-2, UTM Zone Column
   * [01-60 Pos. 3, UTM Zone Row [C-HJ-NP-X] Pos. 4, UTM False Easting [0-9] Pos.
   * 5-9, UTM Meter Easting [0-9][0-9][0-9][0-9][0-9] Pos. 10-11, UTM False Northing
   * [0-9][0-9] Pos. 12-16, UTM Meter Northing [0-9][0-9][0-9][0-9][0-9].
   */
  utm?: string;

  /**
   * World Aeronautical Chart identifier for the area in which a designated operating
   * unit is located.
   */
  wac?: string;
}

export interface OperatingunitUpdateParams {
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
   * Name of the operating unit.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
   * coordinates reside.
   */
  airDefArea?: string;

  /**
   * The DoD Standard country code designator for the country or political entity to
   * which the operating unit owes its allegiance. This field will be set to "OTHR"
   * if the source value does not match a UDL country code value (ISO-3166-ALPHA-2).
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
   * Specifies an alternate country code if the data provider code is not part of an
   * official Country Code standard such as ISO-3166 or FIPS. This field will be set
   * to the value provided by the source and should be used for all Queries
   * specifying a Country Code.
   */
  altCountryCode?: string;

  /**
   * Unique identifier of the operating unit record from the originating system.
   */
  altOperatingUnitId?: string;

  /**
   * Indicates the importance of the operating unit to the OES or MIR system. This
   * data element is restricted to update by DIA (DB-4). Valid values are: 0 - Does
   * not meet criteria above 1 - Primary importance to system 2 - Secondary
   * importance to system 3 - Tertiary importance to system O - Other. Explain in
   * Remarks.
   */
  classRating?: string;

  /**
   * The physical manner of being or state of existence of the operating unit. A
   * physical condition that must be considered in the determining of a course of
   * action. The specific usage and enumerations contained in this field may be found
   * in the documentation provided in the referenceDoc field. If referenceDoc not
   * provided, users may consult the data provider.
   */
  condition?: string;

  /**
   * Availability of the operating unit relative to its condition. Indicates the
   * reason the operating unit is not fully operational. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
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
   * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U]
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
   * The DoD Standard country code designator for the country or political entity to
   * which the operating unit geographic coordinates reside . This field will be set
   * to "OTHR" if the source value does not match a UDL country code value
   * (ISO-3166-ALPHA-2).
   */
  countryCode?: string;

  /**
   * A code describing the amount of operating unit participation in a deployment.
   * The specific usage and enumerations contained in this field may be found in the
   * documentation provided in the referenceDoc field. If referenceDoc not provided,
   * users may consult the data provider.
   */
  deployStatus?: string;

  /**
   * Description of the operating unit.
   */
  description?: string;

  /**
   * Combat status of a divisional or equivalent operating unit. Currently, this data
   * element applies only to operating units of the Former Soviet Union. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  divCat?: string;

  /**
   * Organizational level of the operating unit. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  echelon?: string;

  /**
   * Indicates the major group or level to which an echelon belongs. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  echelonTier?: string;

  /**
   * Ground elevation of the geographic coordinates referenced to (above or below)
   * Mean Sea Level (MSL) vertical datum.
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
   * The Intelligence Confidence Level or the Reliability/degree of confidence that
   * the analyst has assigned to the data within this record. The numerical range is
   * from 1 to 9 with 1 representing the highest confidence level.
   */
  eval?: number;

  /**
   * The country code of the observed flag flown.
   */
  flagFlown?: string;

  /**
   * Naval fleet to which an operating unit is assigned. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  fleetId?: string;

  /**
   * An aggregation of military units within a single service (i.e., ARMY, AIR FORCE,
   * etc.) which operates under a single authority to accomplish a common mission.
   * The specific usage and enumerations contained in this field may be found in the
   * documentation provided in the referenceDoc field. If referenceDoc not provided,
   * users may consult the data provider.
   */
  force?: string;

  /**
   * The specific name for a given force. For example, Force = ADF (Air Defense
   * Force) and Force Name = Army Air Defense Force.
   */
  forceName?: string;

  /**
   * Functional Production Area (FPA) under the Shared Production Program (SPP).
   * Producers are defined per country per FPA. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  fpa?: string;

  /**
   * Principal combat-related role that an operating unit is organized, structured
   * and equipped to perform. Or, the specialized military or paramilitary branch in
   * which an individual serves, their specialization. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  functRole?: string;

  /**
   * The distance between Mean Sea Level and a referenced ellipsoid.
   */
  geoidalMslSep?: number;

  /**
   * Unique identifier of the contact for this operating unit.
   */
  idContact?: string;

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
   * Unique identifier of the location record for this operating unit.
   */
  idLocation?: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  idOperatingUnit?: string;

  /**
   * Unique identifier of the organization record for this operating unit.
   */
  idOrganization?: string;

  /**
   * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat?: number;

  /**
   * Location name for the coordinates.
   */
  locName?: string;

  /**
   * Indicates the reason that the operating unit is at that location. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  locReason?: string;

  /**
   * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon?: number;

  /**
   * This field contains a value indicating whether the record is a master unit
   * record (True) or a detail record (False). Master records contain basic
   * information that does not change over time for each unit that has been selected
   * to be projected.
   */
  masterUnit?: boolean;

  /**
   * The Military Grid Reference System is the geocoordinate standard used by NATO
   * militaries for locating points on Earth. The MGRS is derived from the Universal
   * Transverse Mercator (UTM) grid system and the Universal Polar Stereographic
   * (UPS) grid system, but uses a different labeling convention. The MGRS is used as
   * geocode for the entire Earth. Example of an milgrid coordinate, or grid
   * reference, would be 4QFJ12345678, which consists of three parts: 4Q (grid zone
   * designator, GZD) FJ (the 100,000-meter square identifier) 12345678 (numerical
   * location; easting is 1234 and northing is 5678, in this case specifying a
   * location with 10 m resolution).
   */
  milGrid?: string;

  /**
   * Indicates the grid system used in the development of the milGrid coordinates.
   * Values are:
   *
   * UPS - Universal Polar System
   *
   * UTM - Universal Transverse Mercator
   */
  milGridSys?: string;

  /**
   * Indicates the principal type of mission that an operating unit is organized and
   * equipped to perform. The specific usage and enumerations contained in this field
   * may be found in the documentation provided in the referenceDoc field. If
   * referenceDoc not provided, users may consult the data provider.
   */
  msnPrimary?: string;

  /**
   * Indicates the principal specialty type of mission that an operating unit is
   * organized and equipped to perform. The specific usage and enumerations contained
   * in this field may be found in the documentation provided in the referenceDoc
   * field. If referenceDoc not provided, users may consult the data provider.
   */
  msnPrimarySpecialty?: string;

  /**
   * The Degree to which an operating unit is ready to perform the overall
   * operational mission(s) for which it was organized and equipped. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
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
   * Political subdivision in which the geographic coordinates reside. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  polSubdiv?: string;

  /**
   * Validity and currency of the data in the record to be used in conjunction with
   * the other elements in the record as defined by SOPs. Values are: A - Active I -
   * Inactive K - Acknowledged L - Local Q - A nominated (NOM) or Data Change Request
   * (DCR) record R - Production reduced by CMD decision W - Working Record.
   */
  recStatus?: string;

  /**
   * The reference documentiation that specifies the usage and enumerations contained
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
   * analyst for accuracy and currency. This date cannot be greater than the current
   * date.
   */
  reviewDate?: string;

  /**
   * This field contains a value indicating whether the record is a stylized
   * operating unit record (True) or a regular operating unit record (False). A
   * stylized operating unit is a type of operating unit with one set of equipment
   * that can be assigned to one or more superiors. A stylized operating unit is
   * generally useful for lower echelon operating units where the number of operating
   * units and types of equipment are equal for multiple organizations. In lieu of
   * creating unique operating unit records for each operating unit, a template is
   * created for the operating unit and its equipment. This template enables the user
   * to assign the operating unit to multiple organizations.
   */
  stylizedUnit?: boolean;

  /**
   * A standard scheme for symbol coding enabling the transfer, display and use of
   * symbols and graphics among information systems, as per MIL-STD 2525B, and
   * supported by the element AFFILIATION.
   */
  symCode?: string;

  /**
   * An optional identifier for this operating unit that may be composed from items
   * such as the originating organization, allegiance, one-up number, etc.
   */
  unitIdentifier?: string;

  /**
   * Universal Transverse Mercator (UTM) grid coordinates. Pos. 1-2, UTM Zone Column
   * [01-60 Pos. 3, UTM Zone Row [C-HJ-NP-X] Pos. 4, UTM False Easting [0-9] Pos.
   * 5-9, UTM Meter Easting [0-9][0-9][0-9][0-9][0-9] Pos. 10-11, UTM False Northing
   * [0-9][0-9] Pos. 12-16, UTM Meter Northing [0-9][0-9][0-9][0-9][0-9].
   */
  utm?: string;

  /**
   * World Aeronautical Chart identifier for the area in which a designated operating
   * unit is located.
   */
  wac?: string;
}

export interface OperatingunitListParams {
  firstResult?: number;

  maxResult?: number;
}

export interface OperatingunitCountParams {
  firstResult?: number;

  maxResult?: number;
}

export interface OperatingunitGetParams {
  firstResult?: number;

  maxResult?: number;
}

export interface OperatingunitTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;

  firstResult?: number;

  maxResult?: number;
}

export declare namespace Operatingunit {
  export {
    type OperatingunitListResponse as OperatingunitListResponse,
    type OperatingunitCountResponse as OperatingunitCountResponse,
    type OperatingunitGetResponse as OperatingunitGetResponse,
    type OperatingunitTupleResponse as OperatingunitTupleResponse,
    type OperatingunitCreateParams as OperatingunitCreateParams,
    type OperatingunitUpdateParams as OperatingunitUpdateParams,
    type OperatingunitListParams as OperatingunitListParams,
    type OperatingunitCountParams as OperatingunitCountParams,
    type OperatingunitGetParams as OperatingunitGetParams,
    type OperatingunitTupleParams as OperatingunitTupleParams,
  };
}
