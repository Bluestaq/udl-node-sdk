// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EquipmentremarksAPI from './equipmentremarks';

export class Equipment extends APIResource {
  /**
   * Service operation to take a single equipment record as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: EquipmentCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/equipment', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single equipment record by its unique ID passed as a
   * path parameter.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<EquipmentFull> {
    return this._client.get(`/udl/equipment/${id}`, options);
  }

  /**
   * Service operation to update a single equipment record. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  update(pathId: string, body: EquipmentUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/udl/equipment/${pathId}`, {
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
  list(options?: Core.RequestOptions): Core.APIPromise<EquipmentListResponse> {
    return this._client.get('/udl/equipment', options);
  }

  /**
   * Service operation to delete a equipment record specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/equipment/${id}`, {
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
    return this._client.get('/udl/equipment/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to take multiple Equipment records as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  createBulk(body: EquipmentCreateBulkParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/equipment/createBulk', {
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
    return this._client.get('/udl/equipment/queryhelp', {
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
  tuple(query: EquipmentTupleParams, options?: Core.RequestOptions): Core.APIPromise<EquipmentTupleResponse> {
    return this._client.get('/udl/equipment/tuple', { query, ...options });
  }
}

/**
 * Properties and characteristics of equipment that can be associated with a site
 * or other entity.
 */
export interface EquipmentAbridged {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the equipment geographic coordinates reside. This field will be set to
   * "OTHR" if the source value does not match a UDL Country code value
   * (ISO-3166-ALPHA-2).
   */
  countryCode: string;

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
   * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat: number;

  /**
   * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
   * coordinates reside.
   */
  airDefArea?: string;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the equipment owes its allegiance. This field will be set to "OTHR" if the
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
   * Specifies an alternate country code if the data provider code is not part of an
   * official Country Code standard such as ISO-3166 or FIPS. This field will be set
   * to the value provided by the source and should be used for all Queries
   * specifying a Country Code.
   */
  altCountryCode?: string;

  /**
   * Unique identifier of the Equipment record from the originating system.
   */
  altEqpId?: string;

  /**
   * Indicates the importance of the equipment. Referenced, but not constrained to,
   * the following class ratings type classifications.
   *
   * 0 - Not of significant importance of the system
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
   * reference to a fixed figure, system of lines, etc. specified in degrees, minute,
   * and seconds.
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
   * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U]].
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
   * Ground elevation, in meters, of the geographic coordinates referenced to (above
   * or below) Mean Sea Level (MSL) vertical datum.
   */
  elevMsl?: number;

  /**
   * Indicates the confidence level expressed as a percent that a specific geometric
   * spatial element, ELEVATION_MSL linear accuracy, has been vertically positioned
   * to within a specified vertical accuracy. Confidence level has a range of values
   * from 0 to 100, with 100 being highest level of confidence.
   */
  elevMslConfLvl?: number;

  /**
   * Indicates the plus or minus error assessed against the method used to derive the
   * elevation, measured in meters.
   */
  elevMslDerivAcc?: number;

  /**
   * Designated equipment code assigned to the item of equipment or an abbreviation
   * record type unique identifier. Users should consult the data provider for
   * information on the equipment code structure.
   */
  eqpCode?: string;

  /**
   * Uniquely identifies each item or group of equipment associated with a unit,
   * facility or site.
   */
  eqpIdNum?: string;

  /**
   * Eval represents the Intelligence Confidence Level or the Reliability/degree of
   * confidence that the analyst has assigned to the data within this record. The
   * numerical range is from 1 to 9 with 1 representing the highest confidence level.
   */
  eval?: number;

  /**
   * Functional Production Area (FPA) under the Shared Production Program (SPP).
   * Producers are defined per country per FPA. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  fpa?: string;

  /**
   * Indicates the function or mission of this equipment, which may or may not be
   * engaged in at any particular time. Typically refers to a unit, organization, or
   * installation/facility performing a specific function or mission such as a
   * redistribution center or naval shipyard. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  function?: string;

  /**
   * Principal operational function being performed. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  functPrimary?: string;

  /**
   * The distance between Mean Sea Level and a referenced ellipsoid, measured in
   * meters.
   */
  geoidalMslSep?: number;

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
   * Unique identifier of the operating unit associated with the equipment record.
   */
  idOperatingUnit?: string;

  /**
   * Unique identifier of the Parent equipment record associated with this equipment
   * record.
   */
  idParentEquipment?: string;

  /**
   * Unique identifier of the Site Entity associated with the equipment record.
   */
  idSite?: string;

  /**
   * Indicates the reason that the equipment is at that location. The specific usage
   * and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  locReason?: string;

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
   * Generic type this specific piece of equipment belongs to, and the identifying
   * nomenclature which describes the equipment.
   */
  nomen?: string;

  /**
   * Internationally recognized water area in which the vessel is most likely to be
   * deployed or in which it normally operates most frequently.
   */
  operAreaPrimary?: string;

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
   * Political subdivision in which the geographic coordinates reside. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  polSubdiv?: string;

  /**
   * Relative to the parent entity, the total number of military personnel or
   * equipment assessed to be on-hand (OH).
   */
  qtyOH?: number;

  /**
   * Validity and currency of the data in the record to be used in conjunction with
   * the other elements in the record as defined by SOPs. Referenced, but not
   * constrained to, the following record status type classifications.
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
   * Provider specific sequential number assigned to the equipment.
   */
  seqNum?: number;

  /**
   * Array of UUID(s) of the UDL data record(s) that are related to this equipment
   * record. See the associated 'srcTyps' array for the specific types of data,
   * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size. See the corresponding srcTyps array element
   * for the data type of the UUID and use the appropriate API operation to retrieve
   * that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types such as AIRCRAFT, VESSEL, EO, MTI that are related to
   * this equipment record. See the associated 'srcIds' array for the record UUIDs,
   * positionally corresponding to the record types in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * A standard scheme for symbol coding enabling the transfer, display and use of
   * symbols and graphics among information systems, as per MIL-STD 2525B, and
   * supported by the element AFFILIATION.
   */
  symCode?: string;

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
   * World Aeronautical Chart identifier for the area in which a designated place is
   * located.
   */
  wac?: string;
}

/**
 * Properties and characteristics of equipment that can be associated with a site
 * or other entity.
 */
export interface EquipmentFull {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the equipment geographic coordinates reside. This field will be set to
   * "OTHR" if the source value does not match a UDL Country code value
   * (ISO-3166-ALPHA-2).
   */
  countryCode: string;

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
   * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat: number;

  /**
   * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
   * coordinates reside.
   */
  airDefArea?: string;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the equipment owes its allegiance. This field will be set to "OTHR" if the
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
   * Specifies an alternate country code if the data provider code is not part of an
   * official Country Code standard such as ISO-3166 or FIPS. This field will be set
   * to the value provided by the source and should be used for all Queries
   * specifying a Country Code.
   */
  altCountryCode?: string;

  /**
   * Unique identifier of the Equipment record from the originating system.
   */
  altEqpId?: string;

  /**
   * Indicates the importance of the equipment. Referenced, but not constrained to,
   * the following class ratings type classifications.
   *
   * 0 - Not of significant importance of the system
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
   * reference to a fixed figure, system of lines, etc. specified in degrees, minute,
   * and seconds.
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
   * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U]].
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
   * Ground elevation, in meters, of the geographic coordinates referenced to (above
   * or below) Mean Sea Level (MSL) vertical datum.
   */
  elevMsl?: number;

  /**
   * Indicates the confidence level expressed as a percent that a specific geometric
   * spatial element, ELEVATION_MSL linear accuracy, has been vertically positioned
   * to within a specified vertical accuracy. Confidence level has a range of values
   * from 0 to 100, with 100 being highest level of confidence.
   */
  elevMslConfLvl?: number;

  /**
   * Indicates the plus or minus error assessed against the method used to derive the
   * elevation, measured in meters.
   */
  elevMslDerivAcc?: number;

  /**
   * Designated equipment code assigned to the item of equipment or an abbreviation
   * record type unique identifier. Users should consult the data provider for
   * information on the equipment code structure.
   */
  eqpCode?: string;

  /**
   * Uniquely identifies each item or group of equipment associated with a unit,
   * facility or site.
   */
  eqpIdNum?: string;

  /**
   * Remarks contain amplifying information for a specific service. The information
   * may contain context and interpretations for consumer use.
   */
  equipmentRemarks?: Array<EquipmentremarksAPI.EquipmentRemarkFull>;

  /**
   * Eval represents the Intelligence Confidence Level or the Reliability/degree of
   * confidence that the analyst has assigned to the data within this record. The
   * numerical range is from 1 to 9 with 1 representing the highest confidence level.
   */
  eval?: number;

  /**
   * Functional Production Area (FPA) under the Shared Production Program (SPP).
   * Producers are defined per country per FPA. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  fpa?: string;

  /**
   * Indicates the function or mission of this equipment, which may or may not be
   * engaged in at any particular time. Typically refers to a unit, organization, or
   * installation/facility performing a specific function or mission such as a
   * redistribution center or naval shipyard. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  function?: string;

  /**
   * Principal operational function being performed. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  functPrimary?: string;

  /**
   * The distance between Mean Sea Level and a referenced ellipsoid, measured in
   * meters.
   */
  geoidalMslSep?: number;

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
   * Unique identifier of the operating unit associated with the equipment record.
   */
  idOperatingUnit?: string;

  /**
   * Unique identifier of the Parent equipment record associated with this equipment
   * record.
   */
  idParentEquipment?: string;

  /**
   * Unique identifier of the Site Entity associated with the equipment record.
   */
  idSite?: string;

  /**
   * Indicates the reason that the equipment is at that location. The specific usage
   * and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  locReason?: string;

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
   * Generic type this specific piece of equipment belongs to, and the identifying
   * nomenclature which describes the equipment.
   */
  nomen?: string;

  /**
   * Internationally recognized water area in which the vessel is most likely to be
   * deployed or in which it normally operates most frequently.
   */
  operAreaPrimary?: string;

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
   * Political subdivision in which the geographic coordinates reside. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  polSubdiv?: string;

  /**
   * Relative to the parent entity, the total number of military personnel or
   * equipment assessed to be on-hand (OH).
   */
  qtyOH?: number;

  /**
   * Validity and currency of the data in the record to be used in conjunction with
   * the other elements in the record as defined by SOPs. Referenced, but not
   * constrained to, the following record status type classifications.
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
   * Provider specific sequential number assigned to the equipment.
   */
  seqNum?: number;

  /**
   * Array of UUID(s) of the UDL data record(s) that are related to this equipment
   * record. See the associated 'srcTyps' array for the specific types of data,
   * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size. See the corresponding srcTyps array element
   * for the data type of the UUID and use the appropriate API operation to retrieve
   * that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types such as AIRCRAFT, VESSEL, EO, MTI that are related to
   * this equipment record. See the associated 'srcIds' array for the record UUIDs,
   * positionally corresponding to the record types in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * A standard scheme for symbol coding enabling the transfer, display and use of
   * symbols and graphics among information systems, as per MIL-STD 2525B, and
   * supported by the element AFFILIATION.
   */
  symCode?: string;

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
   * World Aeronautical Chart identifier for the area in which a designated place is
   * located.
   */
  wac?: string;
}

export type EquipmentListResponse = Array<EquipmentAbridged>;

export type EquipmentCountResponse = string;

export type EquipmentTupleResponse = Array<EquipmentFull>;

export interface EquipmentCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the equipment geographic coordinates reside. This field will be set to
   * "OTHR" if the source value does not match a UDL Country code value
   * (ISO-3166-ALPHA-2).
   */
  countryCode: string;

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
   * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat: number;

  /**
   * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
   * coordinates reside.
   */
  airDefArea?: string;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the equipment owes its allegiance. This field will be set to "OTHR" if the
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
   * Specifies an alternate country code if the data provider code is not part of an
   * official Country Code standard such as ISO-3166 or FIPS. This field will be set
   * to the value provided by the source and should be used for all Queries
   * specifying a Country Code.
   */
  altCountryCode?: string;

  /**
   * Unique identifier of the Equipment record from the originating system.
   */
  altEqpId?: string;

  /**
   * Indicates the importance of the equipment. Referenced, but not constrained to,
   * the following class ratings type classifications.
   *
   * 0 - Not of significant importance of the system
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
   * reference to a fixed figure, system of lines, etc. specified in degrees, minute,
   * and seconds.
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
   * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U]].
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
   * Ground elevation, in meters, of the geographic coordinates referenced to (above
   * or below) Mean Sea Level (MSL) vertical datum.
   */
  elevMsl?: number;

  /**
   * Indicates the confidence level expressed as a percent that a specific geometric
   * spatial element, ELEVATION_MSL linear accuracy, has been vertically positioned
   * to within a specified vertical accuracy. Confidence level has a range of values
   * from 0 to 100, with 100 being highest level of confidence.
   */
  elevMslConfLvl?: number;

  /**
   * Indicates the plus or minus error assessed against the method used to derive the
   * elevation, measured in meters.
   */
  elevMslDerivAcc?: number;

  /**
   * Designated equipment code assigned to the item of equipment or an abbreviation
   * record type unique identifier. Users should consult the data provider for
   * information on the equipment code structure.
   */
  eqpCode?: string;

  /**
   * Uniquely identifies each item or group of equipment associated with a unit,
   * facility or site.
   */
  eqpIdNum?: string;

  /**
   * Eval represents the Intelligence Confidence Level or the Reliability/degree of
   * confidence that the analyst has assigned to the data within this record. The
   * numerical range is from 1 to 9 with 1 representing the highest confidence level.
   */
  eval?: number;

  /**
   * Functional Production Area (FPA) under the Shared Production Program (SPP).
   * Producers are defined per country per FPA. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  fpa?: string;

  /**
   * Indicates the function or mission of this equipment, which may or may not be
   * engaged in at any particular time. Typically refers to a unit, organization, or
   * installation/facility performing a specific function or mission such as a
   * redistribution center or naval shipyard. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  function?: string;

  /**
   * Principal operational function being performed. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  functPrimary?: string;

  /**
   * The distance between Mean Sea Level and a referenced ellipsoid, measured in
   * meters.
   */
  geoidalMslSep?: number;

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
   * Unique identifier of the operating unit associated with the equipment record.
   */
  idOperatingUnit?: string;

  /**
   * Unique identifier of the Parent equipment record associated with this equipment
   * record.
   */
  idParentEquipment?: string;

  /**
   * Unique identifier of the Site Entity associated with the equipment record.
   */
  idSite?: string;

  /**
   * Indicates the reason that the equipment is at that location. The specific usage
   * and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  locReason?: string;

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
   * Generic type this specific piece of equipment belongs to, and the identifying
   * nomenclature which describes the equipment.
   */
  nomen?: string;

  /**
   * Internationally recognized water area in which the vessel is most likely to be
   * deployed or in which it normally operates most frequently.
   */
  operAreaPrimary?: string;

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
   * Political subdivision in which the geographic coordinates reside. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  polSubdiv?: string;

  /**
   * Relative to the parent entity, the total number of military personnel or
   * equipment assessed to be on-hand (OH).
   */
  qtyOH?: number;

  /**
   * Validity and currency of the data in the record to be used in conjunction with
   * the other elements in the record as defined by SOPs. Referenced, but not
   * constrained to, the following record status type classifications.
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
   * Provider specific sequential number assigned to the equipment.
   */
  seqNum?: number;

  /**
   * Array of UUID(s) of the UDL data record(s) that are related to this equipment
   * record. See the associated 'srcTyps' array for the specific types of data,
   * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size. See the corresponding srcTyps array element
   * for the data type of the UUID and use the appropriate API operation to retrieve
   * that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types such as AIRCRAFT, VESSEL, EO, MTI that are related to
   * this equipment record. See the associated 'srcIds' array for the record UUIDs,
   * positionally corresponding to the record types in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * A standard scheme for symbol coding enabling the transfer, display and use of
   * symbols and graphics among information systems, as per MIL-STD 2525B, and
   * supported by the element AFFILIATION.
   */
  symCode?: string;

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
   * World Aeronautical Chart identifier for the area in which a designated place is
   * located.
   */
  wac?: string;
}

export interface EquipmentUpdateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the equipment geographic coordinates reside. This field will be set to
   * "OTHR" if the source value does not match a UDL Country code value
   * (ISO-3166-ALPHA-2).
   */
  countryCode: string;

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
   * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
   * south of equator).
   */
  lat: number;

  /**
   * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
   * values west of Prime Meridian).
   */
  lon: number;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
   * coordinates reside.
   */
  airDefArea?: string;

  /**
   * The DoD Standard Country Code designator for the country or political entity to
   * which the equipment owes its allegiance. This field will be set to "OTHR" if the
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
   * Specifies an alternate country code if the data provider code is not part of an
   * official Country Code standard such as ISO-3166 or FIPS. This field will be set
   * to the value provided by the source and should be used for all Queries
   * specifying a Country Code.
   */
  altCountryCode?: string;

  /**
   * Unique identifier of the Equipment record from the originating system.
   */
  altEqpId?: string;

  /**
   * Indicates the importance of the equipment. Referenced, but not constrained to,
   * the following class ratings type classifications.
   *
   * 0 - Not of significant importance of the system
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
   * reference to a fixed figure, system of lines, etc. specified in degrees, minute,
   * and seconds.
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
   * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U]].
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
   * Ground elevation, in meters, of the geographic coordinates referenced to (above
   * or below) Mean Sea Level (MSL) vertical datum.
   */
  elevMsl?: number;

  /**
   * Indicates the confidence level expressed as a percent that a specific geometric
   * spatial element, ELEVATION_MSL linear accuracy, has been vertically positioned
   * to within a specified vertical accuracy. Confidence level has a range of values
   * from 0 to 100, with 100 being highest level of confidence.
   */
  elevMslConfLvl?: number;

  /**
   * Indicates the plus or minus error assessed against the method used to derive the
   * elevation, measured in meters.
   */
  elevMslDerivAcc?: number;

  /**
   * Designated equipment code assigned to the item of equipment or an abbreviation
   * record type unique identifier. Users should consult the data provider for
   * information on the equipment code structure.
   */
  eqpCode?: string;

  /**
   * Uniquely identifies each item or group of equipment associated with a unit,
   * facility or site.
   */
  eqpIdNum?: string;

  /**
   * Eval represents the Intelligence Confidence Level or the Reliability/degree of
   * confidence that the analyst has assigned to the data within this record. The
   * numerical range is from 1 to 9 with 1 representing the highest confidence level.
   */
  eval?: number;

  /**
   * Functional Production Area (FPA) under the Shared Production Program (SPP).
   * Producers are defined per country per FPA. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  fpa?: string;

  /**
   * Indicates the function or mission of this equipment, which may or may not be
   * engaged in at any particular time. Typically refers to a unit, organization, or
   * installation/facility performing a specific function or mission such as a
   * redistribution center or naval shipyard. The specific usage and enumerations
   * contained in this field may be found in the documentation provided in the
   * referenceDoc field. If referenceDoc not provided, users may consult the data
   * provider.
   */
  function?: string;

  /**
   * Principal operational function being performed. The specific usage and
   * enumerations contained in this field may be found in the documentation provided
   * in the referenceDoc field. If referenceDoc not provided, users may consult the
   * data provider.
   */
  functPrimary?: string;

  /**
   * The distance between Mean Sea Level and a referenced ellipsoid, measured in
   * meters.
   */
  geoidalMslSep?: number;

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
   * Unique identifier of the operating unit associated with the equipment record.
   */
  idOperatingUnit?: string;

  /**
   * Unique identifier of the Parent equipment record associated with this equipment
   * record.
   */
  idParentEquipment?: string;

  /**
   * Unique identifier of the Site Entity associated with the equipment record.
   */
  idSite?: string;

  /**
   * Indicates the reason that the equipment is at that location. The specific usage
   * and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  locReason?: string;

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
   * Generic type this specific piece of equipment belongs to, and the identifying
   * nomenclature which describes the equipment.
   */
  nomen?: string;

  /**
   * Internationally recognized water area in which the vessel is most likely to be
   * deployed or in which it normally operates most frequently.
   */
  operAreaPrimary?: string;

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
   * Political subdivision in which the geographic coordinates reside. The specific
   * usage and enumerations contained in this field may be found in the documentation
   * provided in the referenceDoc field. If referenceDoc not provided, users may
   * consult the data provider.
   */
  polSubdiv?: string;

  /**
   * Relative to the parent entity, the total number of military personnel or
   * equipment assessed to be on-hand (OH).
   */
  qtyOH?: number;

  /**
   * Validity and currency of the data in the record to be used in conjunction with
   * the other elements in the record as defined by SOPs. Referenced, but not
   * constrained to, the following record status type classifications.
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
   * Provider specific sequential number assigned to the equipment.
   */
  seqNum?: number;

  /**
   * Array of UUID(s) of the UDL data record(s) that are related to this equipment
   * record. See the associated 'srcTyps' array for the specific types of data,
   * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size. See the corresponding srcTyps array element
   * for the data type of the UUID and use the appropriate API operation to retrieve
   * that object.
   */
  srcIds?: Array<string>;

  /**
   * Array of UDL record types such as AIRCRAFT, VESSEL, EO, MTI that are related to
   * this equipment record. See the associated 'srcIds' array for the record UUIDs,
   * positionally corresponding to the record types in this array. The 'srcTyps' and
   * 'srcIds' arrays must match in size.
   */
  srcTyps?: Array<string>;

  /**
   * A standard scheme for symbol coding enabling the transfer, display and use of
   * symbols and graphics among information systems, as per MIL-STD 2525B, and
   * supported by the element AFFILIATION.
   */
  symCode?: string;

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
   * World Aeronautical Chart identifier for the area in which a designated place is
   * located.
   */
  wac?: string;
}

export type EquipmentCreateBulkParams = Array<EquipmentCreateBulkParams.Body>;

export namespace EquipmentCreateBulkParams {
  /**
   * Properties and characteristics of equipment that can be associated with a site
   * or other entity.
   */
  export interface Body {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * The DoD Standard Country Code designator for the country or political entity to
     * which the equipment geographic coordinates reside. This field will be set to
     * "OTHR" if the source value does not match a UDL Country code value
     * (ISO-3166-ALPHA-2).
     */
    countryCode: string;

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
     * WGS84 latitude of the location, in degrees. -90 to 90 degrees (negative values
     * south of equator).
     */
    lat: number;

    /**
     * WGS84 longitude of the location, in degrees. -180 to 180 degrees (negative
     * values west of Prime Meridian).
     */
    lon: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Air Defense District (ADD) or Air Defense Area (ADA) in which the geographic
     * coordinates reside.
     */
    airDefArea?: string;

    /**
     * The DoD Standard Country Code designator for the country or political entity to
     * which the equipment owes its allegiance. This field will be set to "OTHR" if the
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
     * Specifies an alternate country code if the data provider code is not part of an
     * official Country Code standard such as ISO-3166 or FIPS. This field will be set
     * to the value provided by the source and should be used for all Queries
     * specifying a Country Code.
     */
    altCountryCode?: string;

    /**
     * Unique identifier of the Equipment record from the originating system.
     */
    altEqpId?: string;

    /**
     * Indicates the importance of the equipment. Referenced, but not constrained to,
     * the following class ratings type classifications.
     *
     * 0 - Not of significant importance of the system
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
     * reference to a fixed figure, system of lines, etc. specified in degrees, minute,
     * and seconds.
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
     * Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U]].
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
     * Ground elevation, in meters, of the geographic coordinates referenced to (above
     * or below) Mean Sea Level (MSL) vertical datum.
     */
    elevMsl?: number;

    /**
     * Indicates the confidence level expressed as a percent that a specific geometric
     * spatial element, ELEVATION_MSL linear accuracy, has been vertically positioned
     * to within a specified vertical accuracy. Confidence level has a range of values
     * from 0 to 100, with 100 being highest level of confidence.
     */
    elevMslConfLvl?: number;

    /**
     * Indicates the plus or minus error assessed against the method used to derive the
     * elevation, measured in meters.
     */
    elevMslDerivAcc?: number;

    /**
     * Designated equipment code assigned to the item of equipment or an abbreviation
     * record type unique identifier. Users should consult the data provider for
     * information on the equipment code structure.
     */
    eqpCode?: string;

    /**
     * Uniquely identifies each item or group of equipment associated with a unit,
     * facility or site.
     */
    eqpIdNum?: string;

    /**
     * Eval represents the Intelligence Confidence Level or the Reliability/degree of
     * confidence that the analyst has assigned to the data within this record. The
     * numerical range is from 1 to 9 with 1 representing the highest confidence level.
     */
    eval?: number;

    /**
     * Functional Production Area (FPA) under the Shared Production Program (SPP).
     * Producers are defined per country per FPA. The specific usage and enumerations
     * contained in this field may be found in the documentation provided in the
     * referenceDoc field. If referenceDoc not provided, users may consult the data
     * provider.
     */
    fpa?: string;

    /**
     * Indicates the function or mission of this equipment, which may or may not be
     * engaged in at any particular time. Typically refers to a unit, organization, or
     * installation/facility performing a specific function or mission such as a
     * redistribution center or naval shipyard. The specific usage and enumerations
     * contained in this field may be found in the documentation provided in the
     * referenceDoc field. If referenceDoc not provided, users may consult the data
     * provider.
     */
    function?: string;

    /**
     * Principal operational function being performed. The specific usage and
     * enumerations contained in this field may be found in the documentation provided
     * in the referenceDoc field. If referenceDoc not provided, users may consult the
     * data provider.
     */
    functPrimary?: string;

    /**
     * The distance between Mean Sea Level and a referenced ellipsoid, measured in
     * meters.
     */
    geoidalMslSep?: number;

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
     * Unique identifier of the operating unit associated with the equipment record.
     */
    idOperatingUnit?: string;

    /**
     * Unique identifier of the Parent equipment record associated with this equipment
     * record.
     */
    idParentEquipment?: string;

    /**
     * Unique identifier of the Site Entity associated with the equipment record.
     */
    idSite?: string;

    /**
     * Indicates the reason that the equipment is at that location. The specific usage
     * and enumerations contained in this field may be found in the documentation
     * provided in the referenceDoc field. If referenceDoc not provided, users may
     * consult the data provider.
     */
    locReason?: string;

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
     * Generic type this specific piece of equipment belongs to, and the identifying
     * nomenclature which describes the equipment.
     */
    nomen?: string;

    /**
     * Internationally recognized water area in which the vessel is most likely to be
     * deployed or in which it normally operates most frequently.
     */
    operAreaPrimary?: string;

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
     * Political subdivision in which the geographic coordinates reside. The specific
     * usage and enumerations contained in this field may be found in the documentation
     * provided in the referenceDoc field. If referenceDoc not provided, users may
     * consult the data provider.
     */
    polSubdiv?: string;

    /**
     * Relative to the parent entity, the total number of military personnel or
     * equipment assessed to be on-hand (OH).
     */
    qtyOH?: number;

    /**
     * Validity and currency of the data in the record to be used in conjunction with
     * the other elements in the record as defined by SOPs. Referenced, but not
     * constrained to, the following record status type classifications.
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
     * Provider specific sequential number assigned to the equipment.
     */
    seqNum?: number;

    /**
     * Array of UUID(s) of the UDL data record(s) that are related to this equipment
     * record. See the associated 'srcTyps' array for the specific types of data,
     * positionally corresponding to the UUIDs in this array. The 'srcTyps' and
     * 'srcIds' arrays must match in size. See the corresponding srcTyps array element
     * for the data type of the UUID and use the appropriate API operation to retrieve
     * that object.
     */
    srcIds?: Array<string>;

    /**
     * Array of UDL record types such as AIRCRAFT, VESSEL, EO, MTI that are related to
     * this equipment record. See the associated 'srcIds' array for the record UUIDs,
     * positionally corresponding to the record types in this array. The 'srcTyps' and
     * 'srcIds' arrays must match in size.
     */
    srcTyps?: Array<string>;

    /**
     * A standard scheme for symbol coding enabling the transfer, display and use of
     * symbols and graphics among information systems, as per MIL-STD 2525B, and
     * supported by the element AFFILIATION.
     */
    symCode?: string;

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
     * World Aeronautical Chart identifier for the area in which a designated place is
     * located.
     */
    wac?: string;
  }
}

export interface EquipmentTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

export declare namespace Equipment {
  export {
    type EquipmentAbridged as EquipmentAbridged,
    type EquipmentFull as EquipmentFull,
    type EquipmentListResponse as EquipmentListResponse,
    type EquipmentCountResponse as EquipmentCountResponse,
    type EquipmentTupleResponse as EquipmentTupleResponse,
    type EquipmentCreateParams as EquipmentCreateParams,
    type EquipmentUpdateParams as EquipmentUpdateParams,
    type EquipmentCreateBulkParams as EquipmentCreateBulkParams,
    type EquipmentTupleParams as EquipmentTupleParams,
  };
}
