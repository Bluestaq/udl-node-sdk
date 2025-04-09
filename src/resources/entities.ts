// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as LocationAPI from './location';
import * as OrganizationAPI from './organization';
import * as Shared from './shared';
import * as OnorbitAPI from './onorbit/onorbit';

export class Entities extends APIResource {
  /**
   * Service operation to take a single Entity as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  create(body: EntityCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/entity', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single Entity record by its unique ID passed as a
   * path parameter.
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<EntityFull> {
    return this._client.get(`/udl/entity/${id}`, options);
  }

  /**
   * Service operation to update a single Entity. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   */
  update(id: string, body: EntityUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.put(`/udl/entity/${id}`, {
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
  list(options?: Core.RequestOptions): Core.APIPromise<EntityListResponse> {
    return this._client.get('/udl/entity', options);
  }

  /**
   * Service operation to delete an Entity object specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/entity/${id}`, {
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
    return this._client.get('/udl/entity/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Retrieves all distinct entity types.
   */
  getAllTypes(options?: Core.RequestOptions): Core.APIPromise<EntityGetAllTypesResponse> {
    return this._client.get('/udl/entity/getAllTypes', options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryHelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/entity/queryhelp', {
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
  tuple(query: EntityTupleParams, options?: Core.RequestOptions): Core.APIPromise<EntityTupleResponse> {
    return this._client.get('/udl/entity/tuple', { query, ...options });
  }
}

/**
 * An entity is a generic representation of any object within a space/SSA system
 * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
 * entity can have an operating unit, a location (if terrestrial), and statuses.
 */
export interface EntityAbridged {
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
   * Unique entity name.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type of entity represented by this record (AIRCRAFT, BUS, COMM, IR,
   * NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
   */
  type:
    | 'AIRCRAFT'
    | 'BUS'
    | 'COMM'
    | 'IR'
    | 'NAVIGATION'
    | 'ONORBIT'
    | 'RFEMITTER'
    | 'SCIENTIFIC'
    | 'SENSOR'
    | 'SITE'
    | 'VESSEL';

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
   * Unique identifier of the record.
   */
  idEntity?: string;

  /**
   * Unique identifier of the entity location, if terrestrial/fixed.
   */
  idLocation?: string;

  /**
   * Onorbit identifier if this entity is part of an on-orbit object. For the public
   * catalog, the idOnOrbit is typically the satellite number as a string, but may be
   * a UUID for analyst or other unknown or untracked satellites.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the associated operating unit object.
   */
  idOperatingUnit?: string;

  /**
   * Model representation of a location, which is a specific fixed point on the earth
   * and is used to denote the locations of fixed sensors, operating units, etc.
   */
  location?: EntityAbridged.Location;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: EntityAbridged.OnOrbit;

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
   * Type of organization which owns this entity (e.g. Commercial, Government,
   * Academic, Consortium, etc).
   */
  ownerType?: 'Commercial' | 'Government' | 'Academic' | 'Consortium' | 'Other';

  /**
   * Boolean indicating if this entity is taskable.
   */
  taskable?: boolean;
}

export namespace EntityAbridged {
  /**
   * Model representation of a location, which is a specific fixed point on the earth
   * and is used to denote the locations of fixed sensors, operating units, etc.
   */
  export interface Location {
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

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  export interface OnOrbit {
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
     * Satellite/Catalog number of the target on-orbit object.
     */
    satNo: number;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * Alternate name of the on-orbit object.
     */
    altName?: string;

    /**
     * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
     * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
     * Heliocentric, Interplanetary, Lagrangian, Docked).
     */
    category?:
      | 'Unknown'
      | 'On-Orbit'
      | 'Decayed'
      | 'Cataloged Without State'
      | 'Launch Nominal'
      | 'Analyst Satellite'
      | 'Cislunar'
      | 'Lunar'
      | 'Hyperbolic'
      | 'Heliocentric'
      | 'Interplanetary'
      | 'Lagrangian'
      | 'Docked';

    /**
     * Common name of the on-orbit object.
     */
    commonName?: string;

    /**
     * Constellation to which this satellite belongs.
     */
    constellation?: string;

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
     * Date of decay.
     */
    decayDate?: string;

    /**
     * For the public catalog, the idOnOrbit is typically the satellite number as a
     * string, but may be a UUID for analyst or other unknown or untracked satellites,
     * auto-generated by the system.
     */
    idOnOrbit?: string;

    /**
     * International Designator, typically of the format YYYYLLLAAA, where YYYY is the
     * launch year, LLL is the sequential launch number of that year, and AAA is an
     * optional launch piece designator for the launch.
     */
    intlDes?: string;

    /**
     * Date of launch.
     */
    launchDate?: string;

    /**
     * Id of the associated launchSite entity.
     */
    launchSiteId?: string;

    /**
     * Estimated lifetime of the on-orbit payload, if known.
     */
    lifetimeYears?: number;

    /**
     * Mission number of the on-orbit object.
     */
    missionNumber?: string;

    /**
     * Type of on-orbit object: ROCKET BODY, DEBRIS, PAYLOAD, PLATFORM, MANNED,
     * UNKNOWN.
     */
    objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

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

/**
 * An entity is a generic representation of any object within a space/SSA system
 * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
 * entity can have an operating unit, a location (if terrestrial), and statuses.
 */
export interface EntityFull {
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
   * Unique entity name.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type of entity represented by this record (AIRCRAFT, BUS, COMM, IR,
   * NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
   */
  type:
    | 'AIRCRAFT'
    | 'BUS'
    | 'COMM'
    | 'IR'
    | 'NAVIGATION'
    | 'ONORBIT'
    | 'RFEMITTER'
    | 'SCIENTIFIC'
    | 'SENSOR'
    | 'SITE'
    | 'VESSEL';

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
   * Unique identifier of the record.
   */
  idEntity?: string;

  /**
   * Unique identifier of the entity location, if terrestrial/fixed.
   */
  idLocation?: string;

  /**
   * Onorbit identifier if this entity is part of an on-orbit object. For the public
   * catalog, the idOnOrbit is typically the satellite number as a string, but may be
   * a UUID for analyst or other unknown or untracked satellites.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the associated operating unit object.
   */
  idOperatingUnit?: string;

  /**
   * Model representation of a location, which is a specific fixed point on the earth
   * and is used to denote the locations of fixed sensors, operating units, etc.
   */
  location?: LocationAPI.LocationFull;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: Shared.Onorbit;

  /**
   * Model representation of a unit or organization which operates or controls an
   * space-related Entity such as an on-orbit payload, a sensor, etc. A contact may
   * belong to an organization.
   */
  operatingUnit?: EntityFull.OperatingUnit;

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
   * Type of organization which owns this entity (e.g. Commercial, Government,
   * Academic, Consortium, etc).
   */
  ownerType?: 'Commercial' | 'Government' | 'Academic' | 'Consortium' | 'Other';

  /**
   * Read-only collection of RF bands utilized by this entity for communication
   * and/or operation.
   */
  rfBands?: Array<EntityFull.RfBand>;

  /**
   * Read-only collection of statuses which can be collected by multiple sources.
   */
  statusCollection?: Array<EntityFull.StatusCollection>;

  /**
   * Boolean indicating if this entity is taskable.
   */
  taskable?: boolean;

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
   * List of URLs to additional details/documents for this entity.
   */
  urls?: Array<string>;
}

export namespace EntityFull {
  /**
   * Model representation of a unit or organization which operates or controls an
   * space-related Entity such as an on-orbit payload, a sensor, etc. A contact may
   * belong to an organization.
   */
  export interface OperatingUnit {
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
     * "Indicates any of the magnitudes that serve to define the position of a point by
     * reference to a fixed figure, system of lines, etc. Pos. 1-2. Latitude Degrees
     * [00-90] Pos. 3-4. Latitude Minutes [00-59] Pos. 5-6. Latitude Seconds [00-59]
     * Pos. 7-9. Latitude Thousandths Of Seconds [000-999]
     * Pos. 10. Latitude Hemisphere [NS] Pos. 11-13. Longitude Degrees [00-180] Pos.
     * 14-15. Longitude Minutes [00-59] Pos. 16-17. Longitude Seconds [00-59] Pos.
     * 18-20. Longitude Thousandths Of Seconds [000-999] Pos. 21. Longitude Hemisphere
     * [EW] Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U]]".
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
     * "Indicates the grid system used in the development of the milGrid coordinates.
     * Values are: UPS - Universal Polar System UTM - Universal Transverse Mercator".
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
    operatingUnitRemarks?: Array<OperatingUnit.OperatingUnitRemark>;

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

  export namespace OperatingUnit {
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

  /**
   * Details on a particular Radio Frequency (RF) band, also known as a carrier,
   * which may be in use by any type of Entity for communications or operations.
   */
  export interface RfBand {
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
     * Unique identifier of the parent Entity which uses this band.
     */
    idEntity: string;

    /**
     * RF Band name.
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
     * Name of the band of this RF range (e.g.
     * X,K,Ku,Ka,L,S,C,UHF,VHF,EHF,SHF,UNK,VLF,HF,E,Q,V,W). See RFBandType for more
     * details and descriptions of each band name.
     */
    band?: string;

    /**
     * RF Band frequency range bandwidth in Mhz.
     */
    bandwidth?: number;

    /**
     * Angle between the half-power (-3 dB) points of the main lobe of the antenna, in
     * degrees.
     */
    beamwidth?: number;

    /**
     * Center frequency of RF frequency range, if applicable, in Mhz.
     */
    centerFreq?: number;

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
     * RF Range edge gain, in dBi.
     */
    edgeGain?: number;

    /**
     * EIRP is defined as the RMS power input in decibel watts required to a lossless
     * half-wave dipole antenna to give the same maximum power density far from the
     * antenna as the actual transmitter. It is equal to the power input to the
     * transmitter's antenna multiplied by the antenna gain relative to a half-wave
     * dipole. Effective radiated power and effective isotropic radiated power both
     * measure the amount of power a radio transmitter and antenna (or other source of
     * electromagnetic waves) radiates in a specific direction: in the direction of
     * maximum signal strength (the "main lobe") of its radiation pattern.
     */
    eirp?: number;

    /**
     * Effective Radiated Power (ERP) is the total power in decibel watts radiated by
     * an actual antenna relative to a half-wave dipole rather than a theoretical
     * isotropic antenna. A half-wave dipole has a gain of 2.15 dB compared to an
     * isotropic antenna. EIRP(dB) = ERP (dB)+2.15 dB or EIRP (W) = 1.64\*ERP(W).
     * Effective radiated power and effective isotropic radiated power both measure the
     * amount of power a radio transmitter and antenna (or other source of
     * electromagnetic waves) radiates in a specific direction: in the direction of
     * maximum signal strength (the "main lobe") of its radiation pattern.
     */
    erp?: number;

    /**
     * End/maximum of transmit RF frequency range, if applicable, in Mhz.
     */
    freqMax?: number;

    /**
     * Start/minimum of transmit RF frequency range, if applicable, in Mhz.
     */
    freqMin?: number;

    /**
     * RF Band mode (e.g. TX, RX).
     */
    mode?: 'TX' | 'RX';

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
     * RF Range maximum gain, in dBi.
     */
    peakGain?: number;

    /**
     * Transponder polarization e.g. H - (Horizontally Polarized) Perpendicular to
     * Earth's surface, V - (Vertically Polarized) Parallel to Earth's surface, L -
     * (Left Hand Circularly Polarized) Rotating left relative to the Earth's surface,
     * R - (Right Hand Circularly Polarized) Rotating right relative to the Earth's
     * surface.
     */
    polarization?: 'H' | 'V' | 'R' | 'L';

    /**
     * Purpose or use of the RF Band -- COMM = communications, TTC =
     * Telemetry/Tracking/Control, OPS = Operations, OTHER = Other).
     */
    purpose?: 'COMM' | 'TTC' | 'OPS' | 'OTHER';

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
   * Status for a particular Entity. An entity may have multiple status records
   * collected by various sources.
   */
  export interface StatusCollection {
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
     * Unique identifier of the parent entity.
     */
    idEntity: string;

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
     * The declassification date of this data, in ISO 8601 UTC format.
     */
    declassificationDate?: string;

    /**
     * Declassification string of this data.
     */
    declassificationString?: string;

    /**
     * The sources or SCG references from which the classification of this data is
     * derived.
     */
    derivedFrom?: string;

    /**
     * Comments describing the status creation and or updates to an entity.
     */
    notes?: string;

    /**
     * Operation capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
     */
    opsCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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
     * Overall state of the entity, if applicable (e.g. UNKNOWN, DEAD, ACTIVE, RF
     * ACTIVE, STANDBY).
     */
    state?: 'UNKNOWN' | 'DEAD' | 'ACTIVE' | 'RF ACTIVE' | 'STANDBY';

    subStatusCollection?: Array<StatusCollection.SubStatusCollection>;

    /**
     * System capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
     */
    sysCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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

  export namespace StatusCollection {
    /**
     * Additional sub-system or capability status for the parent entity.
     */
    export interface SubStatusCollection {
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
       * Descriptions and/or comments associated with the sub-status.
       */
      notes: string;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Status of the sub-system/capability, e.g. FMC, NMC, PMC, UNK.
       */
      status: 'FMC' | 'NMC' | 'PMC' | 'UNK';

      /**
       * Id of the parent status.
       */
      statusId: string;

      /**
       * Parent entity's sub-system or capability status: mwCap, mdCap, ssCap, etc.
       */
      type: 'mwCap' | 'ssCap' | 'mdCap';

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
       * Time the row was updated in the database, auto-populated by the system.
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

/**
 * An entity is a generic representation of any object within a space/SSA system
 * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
 * entity can have an operating unit, a location (if terrestrial), and statuses.
 */
export interface EntityIngest {
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
   * Unique entity name.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type of entity represented by this record (AIRCRAFT, BUS, COMM, IR,
   * NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
   */
  type:
    | 'AIRCRAFT'
    | 'BUS'
    | 'COMM'
    | 'IR'
    | 'NAVIGATION'
    | 'ONORBIT'
    | 'RFEMITTER'
    | 'SCIENTIFIC'
    | 'SENSOR'
    | 'SITE'
    | 'VESSEL';

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
   * Unique identifier of the record.
   */
  idEntity?: string;

  /**
   * Unique identifier of the entity location, if terrestrial/fixed.
   */
  idLocation?: string;

  /**
   * Onorbit identifier if this entity is part of an on-orbit object. For the public
   * catalog, the idOnOrbit is typically the satellite number as a string, but may be
   * a UUID for analyst or other unknown or untracked satellites.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the associated operating unit object.
   */
  idOperatingUnit?: string;

  /**
   * Model representation of a location, which is a specific fixed point on the earth
   * and is used to denote the locations of fixed sensors, operating units, etc.
   */
  location?: LocationAPI.LocationIngest;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: OnorbitAPI.OnorbitIngest;

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
   * Type of organization which owns this entity (e.g. Commercial, Government,
   * Academic, Consortium, etc).
   */
  ownerType?: 'Commercial' | 'Government' | 'Academic' | 'Consortium' | 'Other';

  /**
   * Boolean indicating if this entity is taskable.
   */
  taskable?: boolean;

  /**
   * List of URLs to additional details/documents for this entity.
   */
  urls?: Array<string>;
}

export type EntityListResponse = Array<EntityAbridged>;

export type EntityCountResponse = string;

export type EntityGetAllTypesResponse = Array<EntityGetAllTypesResponse.EntityGetAllTypesResponseItem>;

export namespace EntityGetAllTypesResponse {
  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  export interface EntityGetAllTypesResponseItem {
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
     * Unique entity name.
     */
    name: string;

    /**
     * Source of the data.
     */
    source: string;

    /**
     * The type of entity represented by this record (AIRCRAFT, BUS, COMM, IR,
     * NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
     */
    type:
      | 'AIRCRAFT'
      | 'BUS'
      | 'COMM'
      | 'IR'
      | 'NAVIGATION'
      | 'ONORBIT'
      | 'RFEMITTER'
      | 'SCIENTIFIC'
      | 'SENSOR'
      | 'SITE'
      | 'VESSEL';

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
     * Unique identifier of the record.
     */
    idEntity?: string;

    /**
     * Unique identifier of the entity location, if terrestrial/fixed.
     */
    idLocation?: string;

    /**
     * Onorbit identifier if this entity is part of an on-orbit object. For the public
     * catalog, the idOnOrbit is typically the satellite number as a string, but may be
     * a UUID for analyst or other unknown or untracked satellites.
     */
    idOnOrbit?: string;

    /**
     * Unique identifier of the associated operating unit object.
     */
    idOperatingUnit?: string;

    /**
     * Model representation of a location, which is a specific fixed point on the earth
     * and is used to denote the locations of fixed sensors, operating units, etc.
     */
    location?: EntityGetAllTypesResponseItem.Location;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: EntityGetAllTypesResponseItem.OnOrbit;

    /**
     * Model representation of a unit or organization which operates or controls an
     * space-related Entity such as an on-orbit payload, a sensor, etc. A contact may
     * belong to an organization.
     */
    operatingUnit?: EntityGetAllTypesResponseItem.OperatingUnit;

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
     * Type of organization which owns this entity (e.g. Commercial, Government,
     * Academic, Consortium, etc).
     */
    ownerType?: 'Commercial' | 'Government' | 'Academic' | 'Consortium' | 'Other';

    /**
     * Read-only collection of RF bands utilized by this entity for communication
     * and/or operation.
     */
    rfBands?: Array<EntityGetAllTypesResponseItem.RfBand>;

    /**
     * Read-only collection of statuses which can be collected by multiple sources.
     */
    statusCollection?: Array<EntityGetAllTypesResponseItem.StatusCollection>;

    /**
     * Boolean indicating if this entity is taskable.
     */
    taskable?: boolean;

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
     * List of URLs to additional details/documents for this entity.
     */
    urls?: Array<string>;
  }

  export namespace EntityGetAllTypesResponseItem {
    /**
     * Model representation of a location, which is a specific fixed point on the earth
     * and is used to denote the locations of fixed sensors, operating units, etc.
     */
    export interface Location {
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
     * Model object representing on-orbit objects or satellites in the system.
     */
    export interface OnOrbit {
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
       * Satellite/Catalog number of the target on-orbit object.
       */
      satNo: number;

      /**
       * Source of the data.
       */
      source: string;

      /**
       * Alternate name of the on-orbit object.
       */
      altName?: string;

      /**
       * Read-only collection of antennas on this on-orbit object.
       */
      antennas?: Array<OnOrbit.Antenna>;

      /**
       * Read-only collection of batteries on this on-orbit object.
       */
      batteries?: Array<OnOrbit.Battery>;

      /**
       * Category of the on-orbit object. (Unknown, On-Orbit, Decayed, Cataloged Without
       * State, Launch Nominal, Analyst Satellite, Cislunar, Lunar, Hyperbolic,
       * Heliocentric, Interplanetary, Lagrangian, Docked).
       */
      category?:
        | 'Unknown'
        | 'On-Orbit'
        | 'Decayed'
        | 'Cataloged Without State'
        | 'Launch Nominal'
        | 'Analyst Satellite'
        | 'Cislunar'
        | 'Lunar'
        | 'Hyperbolic'
        | 'Heliocentric'
        | 'Interplanetary'
        | 'Lagrangian'
        | 'Docked';

      /**
       * Common name of the on-orbit object.
       */
      commonName?: string;

      /**
       * Constellation to which this satellite belongs.
       */
      constellation?: string;

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
       * Date of decay.
       */
      decayDate?: string;

      /**
       * For the public catalog, the idOnOrbit is typically the satellite number as a
       * string, but may be a UUID for analyst or other unknown or untracked satellites,
       * auto-generated by the system.
       */
      idOnOrbit?: string;

      /**
       * International Designator, typically of the format YYYYLLLAAA, where YYYY is the
       * launch year, LLL is the sequential launch number of that year, and AAA is an
       * optional launch piece designator for the launch.
       */
      intlDes?: string;

      /**
       * Date of launch.
       */
      launchDate?: string;

      /**
       * Id of the associated launchSite entity.
       */
      launchSiteId?: string;

      /**
       * Estimated lifetime of the on-orbit payload, if known.
       */
      lifetimeYears?: number;

      /**
       * Mission number of the on-orbit object.
       */
      missionNumber?: string;

      /**
       * Type of on-orbit object: ROCKET BODY, DEBRIS, PAYLOAD, PLATFORM, MANNED,
       * UNKNOWN.
       */
      objectType?: 'ROCKET BODY' | 'DEBRIS' | 'PAYLOAD' | 'PLATFORM' | 'MANNED' | 'UNKNOWN';

      /**
       * Read-only collection of details for this on-orbit object.
       */
      onorbitDetails?: Array<OnOrbit.OnorbitDetail>;

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
       * Read-only collection of solar arrays on this on-orbit object.
       */
      solarArrays?: Array<OnOrbit.SolarArray>;

      /**
       * Read-only collection of thrusters (engines) on this on-orbit object.
       */
      thrusters?: Array<OnOrbit.Thruster>;

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

    export namespace OnOrbit {
      /**
       * Read-only collection of antennas on this on-orbit object.
       */
      export interface Antenna {
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
         * ID of the antenna.
         */
        idAntenna: string;

        /**
         * ID of the on-orbit object.
         */
        idOnOrbit: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Unique identifier of the record, auto-generated by the system.
         */
        id?: string;

        /**
         * Model representation of information on on-orbit/spacecraft communication
         * antennas. A spacecraft may have multiple antennas and each antenna can have
         * multiple 'details' records compiled by different sources.
         */
        antenna?: Antenna.Antenna;

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

      export namespace Antenna {
        /**
         * Model representation of information on on-orbit/spacecraft communication
         * antennas. A spacecraft may have multiple antennas and each antenna can have
         * multiple 'details' records compiled by different sources.
         */
        export interface Antenna {
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
           * Antenna name.
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
           * Read-only collection of additional AntennaDetails by various sources for this
           * organization, ignored on create/update. These details must be created separately
           * via the /udl/antennadetails operations.
           */
          antennaDetails?: Array<Antenna.AntennaDetail>;

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

        export namespace Antenna {
          /**
           * Detailed information for a spacecraft communication antenna. One antenna may
           * have multiple AntennaDetails records, compiled by various sources.
           */
          export interface AntennaDetail {
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
             * Unique identifier of the parent Antenna.
             */
            idAntenna: string;

            /**
             * Source of the data.
             */
            source: string;

            /**
             * Unique identifier of the record, auto-generated by the system.
             */
            id?: string;

            /**
             * Boolean indicating if this is a beam forming antenna.
             */
            beamForming?: boolean;

            /**
             * Array of angles between the half-power (-3 dB) points of the main lobe of the
             * antenna, in degrees.
             */
            beamwidth?: number;

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
             * Antenna description.
             */
            description?: string;

            /**
             * Antenna diameter in meters.
             */
            diameter?: number;

            /**
             * Antenna end of frequency range in Mhz.
             */
            endFrequency?: number;

            /**
             * Antenna maximum gain in dBi.
             */
            gain?: number;

            /**
             * Antenna gain tolerance in dB.
             */
            gainTolerance?: number;

            /**
             * An organization such as a corporation, manufacturer, consortium, government,
             * etc. An organization may have parent and child organizations as well as link to
             * a former organization if this org previously existed as another organization.
             */
            manufacturerOrg?: AntennaDetail.ManufacturerOrg;

            /**
             * ID of the organization that manufactures the antenna.
             */
            manufacturerOrgId?: string;

            /**
             * Antenna mode (e.g. TX,RX).
             */
            mode?: 'TX' | 'RX';

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
             * Antenna polarization in degrees.
             */
            polarization?: number;

            /**
             * Antenna position (e.g. Top, Nadir, Side).
             */
            position?: string;

            /**
             * Array with 1-2 values specifying the length and width (for rectangular) and just
             * length for dipole antennas in meters.
             */
            size?: Array<number>;

            /**
             * Antenna start of frequency range in Mhz.
             */
            startFrequency?: number;

            /**
             * Boolean indicating if this antenna is steerable.
             */
            steerable?: boolean;

            /**
             * Optional array of provider/source specific tags for this data, where each
             * element is no longer than 32 characters, used for implementing data owner
             * conditional access controls to restrict access to the data. Should be left null
             * by data providers unless conditional access controls are coordinated with the
             * UDL team.
             */
            tags?: Array<string>;

            /**
             * Type of antenna (e.g. Reflector, Double Reflector, Shaped Reflector, Horn,
             * Parabolic, etc.).
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

          export namespace AntennaDetail {
            /**
             * An organization such as a corporation, manufacturer, consortium, government,
             * etc. An organization may have parent and child organizations as well as link to
             * a former organization if this org previously existed as another organization.
             */
            export interface ManufacturerOrg {
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
               * Organization name.
               */
              name: string;

              /**
               * Source of the data.
               */
              source: string;

              /**
               * Type of organization (e.g. GOVERNMENT, CORPORATION, CONSORTIUM, ACADEMIC).
               */
              type: string;

              /**
               * Unique identifier of the record, auto-generated by the system.
               */
              id?: string;

              /**
               * Boolean indicating if this organization is currently active.
               */
              active?: boolean;

              /**
               * Subtype or category of the organization (e.g. Private company, stock market
               * quoted company, subsidiary, goverment department/agency, etc).
               */
              category?: string;

              /**
               * Country of the physical location of the organization. This value is typically
               * the ISO 3166 Alpha-2 two-character country code. However, it can also represent
               * various consortiums that do not appear in the ISO document. The code must
               * correspond to an existing country in the UDL’s country API. Call
               * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
               * alternate code values that exist for the specified country code.
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
               * Organization description.
               */
              description?: string;

              /**
               * Optional externally provided identifier for this row.
               */
              externalId?: string;

              /**
               * Country of registration or ownership of the organization. This value is
               * typically the ISO 3166 Alpha-2 two-character country code, however it can also
               * represent various consortiums that do not appear in the ISO document. The code
               * must correspond to an existing country in the UDL’s country API. Call
               * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
               * alternate code values that exist for the specified country code.
               */
              nationality?: string;

              /**
               * Read-only collection of additional OrganizationDetails by various sources for
               * this organization, ignored on create/update. These details must be created
               * separately via the /udl/organizationdetails operations.
               */
              organizationDetails?: Array<ManufacturerOrg.OrganizationDetail>;

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

            export namespace ManufacturerOrg {
              /**
               * Model representation of additional detailed organization data as collected by a
               * particular source.
               */
              export interface OrganizationDetail {
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
                 * Unique identifier of the parent organization.
                 */
                idOrganization: string;

                /**
                 * Organization details name.
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
                 * Street number of the organization.
                 */
                address1?: string;

                /**
                 * Field for additional organization address information such as PO Box and unit
                 * number.
                 */
                address2?: string;

                /**
                 * Contains the third line of address information for an organization.
                 */
                address3?: string;

                /**
                 * Designated broker for this organization.
                 */
                broker?: string;

                /**
                 * For organizations of type CORPORATION, the name of the Chief Executive Officer.
                 */
                ceo?: string;

                /**
                 * For organizations of type CORPORATION, the name of the Chief Financial Officer.
                 */
                cfo?: string;

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
                 * For organizations of type CORPORATION, the name of the Chief Technology Officer.
                 */
                cto?: string;

                /**
                 * Organization description.
                 */
                description?: string;

                /**
                 * For organizations of type CORPORATION, the company EBITDA value as of
                 * financialYearEndDate in US Dollars.
                 */
                ebitda?: number;

                /**
                 * Listed contact email address for the organization.
                 */
                email?: string;

                /**
                 * For organizations of type CORPORATION, notes on company financials.
                 */
                financialNotes?: string;

                /**
                 * For organizations of type CORPORATION, the effective financial year end date for
                 * revenue, EBITDA, and profit values.
                 */
                financialYearEndDate?: string;

                /**
                 * Satellite fleet planning notes for this organization.
                 */
                fleetPlanNotes?: string;

                /**
                 * Former organization ID (if this organization previously existed as another
                 * organization).
                 */
                formerOrgId?: string;

                /**
                 * Total number of FTEs in this organization.
                 */
                ftes?: number;

                /**
                 * Administrative boundaries of the first sub-national level. Level 1 is simply the
                 * largest demarcation under whatever demarcation criteria has been determined by
                 * the governing body. For example, this may be a state or province.
                 */
                geoAdminLevel1?: string;

                /**
                 * Administrative boundaries of the second sub-national level. Level 2 is simply
                 * the second largest demarcation under whatever demarcation criteria has been
                 * determined by the governing body. For example, this may be a county or district.
                 */
                geoAdminLevel2?: string;

                /**
                 * Administrative boundaries of the third sub-national level. Level 3 is simply the
                 * third largest demarcation under whatever demarcation criteria has been
                 * determined by the governing body. For example, this may be a city or township.
                 */
                geoAdminLevel3?: string;

                /**
                 * Mass ranking for this organization.
                 */
                massRanking?: number;

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
                 * Parent organization ID of this organization if it is a child organization.
                 */
                parentOrgId?: string;

                /**
                 * A postal code, such as PIN or ZIP Code, is a series of letters or digits or both
                 * included in the postal address of the organization.
                 */
                postalCode?: string;

                /**
                 * For organizations of type CORPORATION, total annual profit as of
                 * financialYearEndDate in US Dollars.
                 */
                profit?: number;

                /**
                 * For organizations of type CORPORATION, total annual revenue as of
                 * financialYearEndDate in US Dollars.
                 */
                revenue?: number;

                /**
                 * Revenue ranking for this organization.
                 */
                revenueRanking?: number;

                /**
                 * The name of the risk manager for the organization.
                 */
                riskManager?: string;

                /**
                 * Notes on the services provided by the organization.
                 */
                servicesNotes?: string;

                /**
                 * Optional array of provider/source specific tags for this data, where each
                 * element is no longer than 32 characters, used for implementing data owner
                 * conditional access controls to restrict access to the data. Should be left null
                 * by data providers unless conditional access controls are coordinated with the
                 * UDL team.
                 */
                tags?: Array<string>;

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
        }
      }

      /**
       * Read-only collection of batteries on this on-orbit object.
       */
      export interface Battery {
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
         * ID of the battery.
         */
        idBattery: string;

        /**
         * ID of the on-orbit object.
         */
        idOnOrbit: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Unique identifier of the record, auto-generated by the system.
         */
        id?: string;

        /**
         * Model representation of specific spacecraft battery types.
         */
        battery?: Battery.Battery;

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
         * The number of batteries on the spacecraft of the type identified by idBattery.
         */
        quantity?: number;

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

      export namespace Battery {
        /**
         * Model representation of specific spacecraft battery types.
         */
        export interface Battery {
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
           * Battery name.
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
           * Read-only collection of additional BatteryDetails by various sources for this
           * organization, ignored on create/update. These details must be created separately
           * via the /udl/batterydetails operations.
           */
          batteryDetails?: Array<Battery.BatteryDetail>;

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

        export namespace Battery {
          /**
           * Detailed information on a spacecraft battery type compiled by a particular
           * source. A Battery record may have multiple details records from several sources.
           */
          export interface BatteryDetail {
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
             * Identifier of the parent battery type record.
             */
            idBattery: string;

            /**
             * Source of the data.
             */
            source: string;

            /**
             * Unique identifier of the record, auto-generated by the system.
             */
            id?: string;

            /**
             * Battery capacity in Ah.
             */
            capacity?: number;

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
             * Battery description/notes.
             */
            description?: string;

            /**
             * Depth of discharge as a percentage/fraction.
             */
            dischargeDepth?: number;

            /**
             * An organization such as a corporation, manufacturer, consortium, government,
             * etc. An organization may have parent and child organizations as well as link to
             * a former organization if this org previously existed as another organization.
             */
            manufacturerOrg?: BatteryDetail.ManufacturerOrg;

            /**
             * ID of the organization that manufactures the battery.
             */
            manufacturerOrgId?: string;

            /**
             * Battery model number or name.
             */
            model?: string;

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
             * Optional array of provider/source specific tags for this data, where each
             * element is no longer than 32 characters, used for implementing data owner
             * conditional access controls to restrict access to the data. Should be left null
             * by data providers unless conditional access controls are coordinated with the
             * UDL team.
             */
            tags?: Array<string>;

            /**
             * Type of battery technology (e.g. Ni-Cd, Ni-H2, Li-ion, etc.).
             */
            technology?: string;

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

          export namespace BatteryDetail {
            /**
             * An organization such as a corporation, manufacturer, consortium, government,
             * etc. An organization may have parent and child organizations as well as link to
             * a former organization if this org previously existed as another organization.
             */
            export interface ManufacturerOrg {
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
               * Organization name.
               */
              name: string;

              /**
               * Source of the data.
               */
              source: string;

              /**
               * Type of organization (e.g. GOVERNMENT, CORPORATION, CONSORTIUM, ACADEMIC).
               */
              type: string;

              /**
               * Unique identifier of the record, auto-generated by the system.
               */
              id?: string;

              /**
               * Boolean indicating if this organization is currently active.
               */
              active?: boolean;

              /**
               * Subtype or category of the organization (e.g. Private company, stock market
               * quoted company, subsidiary, goverment department/agency, etc).
               */
              category?: string;

              /**
               * Country of the physical location of the organization. This value is typically
               * the ISO 3166 Alpha-2 two-character country code. However, it can also represent
               * various consortiums that do not appear in the ISO document. The code must
               * correspond to an existing country in the UDL’s country API. Call
               * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
               * alternate code values that exist for the specified country code.
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
               * Organization description.
               */
              description?: string;

              /**
               * Optional externally provided identifier for this row.
               */
              externalId?: string;

              /**
               * Country of registration or ownership of the organization. This value is
               * typically the ISO 3166 Alpha-2 two-character country code, however it can also
               * represent various consortiums that do not appear in the ISO document. The code
               * must correspond to an existing country in the UDL’s country API. Call
               * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
               * alternate code values that exist for the specified country code.
               */
              nationality?: string;

              /**
               * Read-only collection of additional OrganizationDetails by various sources for
               * this organization, ignored on create/update. These details must be created
               * separately via the /udl/organizationdetails operations.
               */
              organizationDetails?: Array<ManufacturerOrg.OrganizationDetail>;

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

            export namespace ManufacturerOrg {
              /**
               * Model representation of additional detailed organization data as collected by a
               * particular source.
               */
              export interface OrganizationDetail {
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
                 * Unique identifier of the parent organization.
                 */
                idOrganization: string;

                /**
                 * Organization details name.
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
                 * Street number of the organization.
                 */
                address1?: string;

                /**
                 * Field for additional organization address information such as PO Box and unit
                 * number.
                 */
                address2?: string;

                /**
                 * Contains the third line of address information for an organization.
                 */
                address3?: string;

                /**
                 * Designated broker for this organization.
                 */
                broker?: string;

                /**
                 * For organizations of type CORPORATION, the name of the Chief Executive Officer.
                 */
                ceo?: string;

                /**
                 * For organizations of type CORPORATION, the name of the Chief Financial Officer.
                 */
                cfo?: string;

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
                 * For organizations of type CORPORATION, the name of the Chief Technology Officer.
                 */
                cto?: string;

                /**
                 * Organization description.
                 */
                description?: string;

                /**
                 * For organizations of type CORPORATION, the company EBITDA value as of
                 * financialYearEndDate in US Dollars.
                 */
                ebitda?: number;

                /**
                 * Listed contact email address for the organization.
                 */
                email?: string;

                /**
                 * For organizations of type CORPORATION, notes on company financials.
                 */
                financialNotes?: string;

                /**
                 * For organizations of type CORPORATION, the effective financial year end date for
                 * revenue, EBITDA, and profit values.
                 */
                financialYearEndDate?: string;

                /**
                 * Satellite fleet planning notes for this organization.
                 */
                fleetPlanNotes?: string;

                /**
                 * Former organization ID (if this organization previously existed as another
                 * organization).
                 */
                formerOrgId?: string;

                /**
                 * Total number of FTEs in this organization.
                 */
                ftes?: number;

                /**
                 * Administrative boundaries of the first sub-national level. Level 1 is simply the
                 * largest demarcation under whatever demarcation criteria has been determined by
                 * the governing body. For example, this may be a state or province.
                 */
                geoAdminLevel1?: string;

                /**
                 * Administrative boundaries of the second sub-national level. Level 2 is simply
                 * the second largest demarcation under whatever demarcation criteria has been
                 * determined by the governing body. For example, this may be a county or district.
                 */
                geoAdminLevel2?: string;

                /**
                 * Administrative boundaries of the third sub-national level. Level 3 is simply the
                 * third largest demarcation under whatever demarcation criteria has been
                 * determined by the governing body. For example, this may be a city or township.
                 */
                geoAdminLevel3?: string;

                /**
                 * Mass ranking for this organization.
                 */
                massRanking?: number;

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
                 * Parent organization ID of this organization if it is a child organization.
                 */
                parentOrgId?: string;

                /**
                 * A postal code, such as PIN or ZIP Code, is a series of letters or digits or both
                 * included in the postal address of the organization.
                 */
                postalCode?: string;

                /**
                 * For organizations of type CORPORATION, total annual profit as of
                 * financialYearEndDate in US Dollars.
                 */
                profit?: number;

                /**
                 * For organizations of type CORPORATION, total annual revenue as of
                 * financialYearEndDate in US Dollars.
                 */
                revenue?: number;

                /**
                 * Revenue ranking for this organization.
                 */
                revenueRanking?: number;

                /**
                 * The name of the risk manager for the organization.
                 */
                riskManager?: string;

                /**
                 * Notes on the services provided by the organization.
                 */
                servicesNotes?: string;

                /**
                 * Optional array of provider/source specific tags for this data, where each
                 * element is no longer than 32 characters, used for implementing data owner
                 * conditional access controls to restrict access to the data. Should be left null
                 * by data providers unless conditional access controls are coordinated with the
                 * UDL team.
                 */
                tags?: Array<string>;

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
        }
      }

      /**
       * Contains details of the OnOrbit object.
       */
      export interface OnorbitDetail {
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
         * UUID of the parent Onorbit record.
         */
        idOnOrbit: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Unique identifier of the record, auto-generated by the system.
         */
        id?: string;

        /**
         * Mass of fuel and disposables at launch time in kilograms.
         */
        additionalMass?: number;

        /**
         * The radius used for long-term debris environment projection analyses that is not
         * as conservative as COLA Radius, in meters.
         */
        adeptRadius?: number;

        /**
         * The total beginning of life delta V of the spacecraft, in meters per second.
         */
        bolDeltaV?: number;

        /**
         * Spacecraft beginning of life fuel mass, in orbit, in kilograms.
         */
        bolFuelMass?: number;

        /**
         * Average cross sectional area of the bus in meters squared.
         */
        busCrossSection?: number;

        /**
         * Type of the bus on the spacecraft.
         */
        busType?: string;

        /**
         * Maximum dimension of the box circumscribing the spacecraft (d = sqrt(a*a + b*b +
         * c\*c) where a is the tip-to-tip dimension, b and c are perpendicular to that.)
         * in meters.
         */
        colaRadius?: number;

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
         * Average cross sectional area in meters squared.
         */
        crossSection?: number;

        /**
         * The estimated total current mass of the spacecraft, in kilograms.
         */
        currentMass?: number;

        /**
         * The 1-sigma uncertainty of the total spacecraft delta V, in meters per second.
         */
        deltaVUnc?: number;

        /**
         * Array of the estimated mass of each deployable object, in kilograms. Must
         * contain the same number of elements as the value of numDeployable.
         */
        depEstMasses?: Array<number>;

        /**
         * Array of the 1-sigma uncertainty of the mass for each deployable object, in
         * kilograms. Must contain the same number of elements as the value of
         * numDeployable.
         */
        depMassUncs?: Array<number>;

        /**
         * Array of satellite deployable objects. Must contain the same number of elements
         * as the value of numDeployable.
         */
        depNames?: Array<string>;

        /**
         * GEO drift rate, if applicable in degrees per day.
         */
        driftRate?: number;

        /**
         * Spacecraft dry mass (without fuel or disposables) in kilograms.
         */
        dryMass?: number;

        /**
         * Estimated maximum burn duration for the object, in seconds.
         */
        estDeltaVDuration?: number;

        /**
         * Estimated remaining fuel for the object in kilograms.
         */
        fuelRemaining?: number;

        /**
         * GEO slot if applicable, in degrees. -180 (West of Prime Meridian) to 180 degrees
         * (East of Prime Meridian). Prime Meridian is 0.
         */
        geoSlot?: number;

        /**
         * The name of the source who last provided an observation for this idOnOrbit.
         */
        lastObSource?: string;

        /**
         * Time of last reported observation for this object in ISO 8601 UTC with
         * microsecond precision.
         */
        lastObTime?: string;

        /**
         * Nominal mass of spacecraft and fuel at launch time, in kilograms.
         */
        launchMass?: number;

        /**
         * Maximum (estimated) mass of spacecraft and fuel at launch time, in kilograms.
         */
        launchMassMax?: number;

        /**
         * Minimum (estimated) mass of spacecraft and fuel at launch time, in kilograms.
         */
        launchMassMin?: number;

        /**
         * Boolean indicating whether a spacecraft is maneuverable. Note that a spacecraft
         * may have propulsion capability but may not be maneuverable due to lack of fuel,
         * anomalous condition, or other operational constraints.
         */
        maneuverable?: boolean;

        /**
         * Maximum delta V available for this on-orbit spacecraft, in meters per second.
         */
        maxDeltaV?: number;

        /**
         * Maximum dimension across the spacecraft (e.g., tip-to-tip across the solar panel
         * arrays) in meters.
         */
        maxRadius?: number;

        /**
         * Array of the type of missions the spacecraft performs. Must contain the same
         * number of elements as the value of numMission.
         */
        missionTypes?: Array<string>;

        /**
         * The number of sub-satellites or deployable objects on the spacecraft.
         */
        numDeployable?: number;

        /**
         * The number of distinct missions the spacecraft performs.
         */
        numMission?: number;

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
         * Current/latest radar cross section in meters squared.
         */
        rcs?: number;

        /**
         * Maximum radar cross section in meters squared.
         */
        rcsMax?: number;

        /**
         * Mean radar cross section in meters squared.
         */
        rcsMean?: number;

        /**
         * Minimum radar cross section in meters squared.
         */
        rcsMin?: number;

        /**
         * The reference source, sources, or URL from which the data in this record was
         * obtained.
         */
        refSource?: string;

        /**
         * Spacecraft deployed area of solar array in meters squared.
         */
        solarArrayArea?: number;

        /**
         * The 1-sigma uncertainty of the total spacecraft mass, in kilograms.
         */
        totalMassUnc?: number;

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
         * Current/latest visual magnitude in M.
         */
        vismag?: number;

        /**
         * Maximum visual magnitude in M.
         */
        vismagMax?: number;

        /**
         * Mean visual magnitude in M.
         */
        vismagMean?: number;

        /**
         * Minimum visual magnitude in M.
         */
        vismagMin?: number;
      }

      /**
       * Read-only collection of solar arrays on this on-orbit object.
       */
      export interface SolarArray {
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
         * ID of the on-orbit object.
         */
        idOnOrbit: string;

        /**
         * ID of the SolarArray.
         */
        idSolarArray: string;

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
         * The number of solar arrays on the spacecraft of the type identified by
         * idSolarArray.
         */
        quantity?: number;

        /**
         * Model representation of information on on-orbit/spacecraft solar arrays. A
         * spacecraft may have multiple solar arrays and each solar array can have multiple
         * 'details' records compiled by different sources.
         */
        solarArray?: SolarArray.SolarArray;

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

      export namespace SolarArray {
        /**
         * Model representation of information on on-orbit/spacecraft solar arrays. A
         * spacecraft may have multiple solar arrays and each solar array can have multiple
         * 'details' records compiled by different sources.
         */
        export interface SolarArray {
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
           * Solar Array name.
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
           * Time the row was created in the database, auto-populated by the system.
           */
          createdAt?: string;

          /**
           * Application user who created the row in the database, auto-populated by the
           * system.
           */
          createdBy?: string;

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
           * Read-only collection of additional SolarArrayDetails by various sources for this
           * organization, ignored on create/update. These details must be created separately
           * via the /udl/solararraydetails operations.
           */
          solarArrayDetails?: Array<SolarArray.SolarArrayDetail>;

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

        export namespace SolarArray {
          /**
           * Model representation of Information on spacecraft SolarArrayDetails. A
           * SolarArray may have multiple details records compiled by various sources.
           */
          export interface SolarArrayDetail {
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
             * Unique identifier of the parent SolarArray.
             */
            idSolarArray: string;

            /**
             * Source of the data.
             */
            source: string;

            /**
             * Unique identifier of the record, auto-generated by the system.
             */
            id?: string;

            /**
             * Solar Array area in square meters.
             */
            area?: number;

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
             * Solar array description/notes.
             */
            description?: string;

            /**
             * Solar array junction technology (e.g. Triple).
             */
            junctionTechnology?: string;

            /**
             * An organization such as a corporation, manufacturer, consortium, government,
             * etc. An organization may have parent and child organizations as well as link to
             * a former organization if this org previously existed as another organization.
             */
            manufacturerOrg?: SolarArrayDetail.ManufacturerOrg;

            /**
             * Unique identifier of the organization that manufactures the solar array.
             */
            manufacturerOrgId?: string;

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
             * Solar Array span in meters.
             */
            span?: number;

            /**
             * Optional array of provider/source specific tags for this data, where each
             * element is no longer than 32 characters, used for implementing data owner
             * conditional access controls to restrict access to the data. Should be left null
             * by data providers unless conditional access controls are coordinated with the
             * UDL team.
             */
            tags?: Array<string>;

            /**
             * Solar array technology (e.g. Ga-As).
             */
            technology?: string;

            /**
             * Type of solar array (e.g. U Shaped).
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

          export namespace SolarArrayDetail {
            /**
             * An organization such as a corporation, manufacturer, consortium, government,
             * etc. An organization may have parent and child organizations as well as link to
             * a former organization if this org previously existed as another organization.
             */
            export interface ManufacturerOrg {
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
               * Organization name.
               */
              name: string;

              /**
               * Source of the data.
               */
              source: string;

              /**
               * Type of organization (e.g. GOVERNMENT, CORPORATION, CONSORTIUM, ACADEMIC).
               */
              type: string;

              /**
               * Unique identifier of the record, auto-generated by the system.
               */
              id?: string;

              /**
               * Boolean indicating if this organization is currently active.
               */
              active?: boolean;

              /**
               * Subtype or category of the organization (e.g. Private company, stock market
               * quoted company, subsidiary, goverment department/agency, etc).
               */
              category?: string;

              /**
               * Country of the physical location of the organization. This value is typically
               * the ISO 3166 Alpha-2 two-character country code. However, it can also represent
               * various consortiums that do not appear in the ISO document. The code must
               * correspond to an existing country in the UDL’s country API. Call
               * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
               * alternate code values that exist for the specified country code.
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
               * Organization description.
               */
              description?: string;

              /**
               * Optional externally provided identifier for this row.
               */
              externalId?: string;

              /**
               * Country of registration or ownership of the organization. This value is
               * typically the ISO 3166 Alpha-2 two-character country code, however it can also
               * represent various consortiums that do not appear in the ISO document. The code
               * must correspond to an existing country in the UDL’s country API. Call
               * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
               * alternate code values that exist for the specified country code.
               */
              nationality?: string;

              /**
               * Read-only collection of additional OrganizationDetails by various sources for
               * this organization, ignored on create/update. These details must be created
               * separately via the /udl/organizationdetails operations.
               */
              organizationDetails?: Array<ManufacturerOrg.OrganizationDetail>;

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

            export namespace ManufacturerOrg {
              /**
               * Model representation of additional detailed organization data as collected by a
               * particular source.
               */
              export interface OrganizationDetail {
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
                 * Unique identifier of the parent organization.
                 */
                idOrganization: string;

                /**
                 * Organization details name.
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
                 * Street number of the organization.
                 */
                address1?: string;

                /**
                 * Field for additional organization address information such as PO Box and unit
                 * number.
                 */
                address2?: string;

                /**
                 * Contains the third line of address information for an organization.
                 */
                address3?: string;

                /**
                 * Designated broker for this organization.
                 */
                broker?: string;

                /**
                 * For organizations of type CORPORATION, the name of the Chief Executive Officer.
                 */
                ceo?: string;

                /**
                 * For organizations of type CORPORATION, the name of the Chief Financial Officer.
                 */
                cfo?: string;

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
                 * For organizations of type CORPORATION, the name of the Chief Technology Officer.
                 */
                cto?: string;

                /**
                 * Organization description.
                 */
                description?: string;

                /**
                 * For organizations of type CORPORATION, the company EBITDA value as of
                 * financialYearEndDate in US Dollars.
                 */
                ebitda?: number;

                /**
                 * Listed contact email address for the organization.
                 */
                email?: string;

                /**
                 * For organizations of type CORPORATION, notes on company financials.
                 */
                financialNotes?: string;

                /**
                 * For organizations of type CORPORATION, the effective financial year end date for
                 * revenue, EBITDA, and profit values.
                 */
                financialYearEndDate?: string;

                /**
                 * Satellite fleet planning notes for this organization.
                 */
                fleetPlanNotes?: string;

                /**
                 * Former organization ID (if this organization previously existed as another
                 * organization).
                 */
                formerOrgId?: string;

                /**
                 * Total number of FTEs in this organization.
                 */
                ftes?: number;

                /**
                 * Administrative boundaries of the first sub-national level. Level 1 is simply the
                 * largest demarcation under whatever demarcation criteria has been determined by
                 * the governing body. For example, this may be a state or province.
                 */
                geoAdminLevel1?: string;

                /**
                 * Administrative boundaries of the second sub-national level. Level 2 is simply
                 * the second largest demarcation under whatever demarcation criteria has been
                 * determined by the governing body. For example, this may be a county or district.
                 */
                geoAdminLevel2?: string;

                /**
                 * Administrative boundaries of the third sub-national level. Level 3 is simply the
                 * third largest demarcation under whatever demarcation criteria has been
                 * determined by the governing body. For example, this may be a city or township.
                 */
                geoAdminLevel3?: string;

                /**
                 * Mass ranking for this organization.
                 */
                massRanking?: number;

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
                 * Parent organization ID of this organization if it is a child organization.
                 */
                parentOrgId?: string;

                /**
                 * A postal code, such as PIN or ZIP Code, is a series of letters or digits or both
                 * included in the postal address of the organization.
                 */
                postalCode?: string;

                /**
                 * For organizations of type CORPORATION, total annual profit as of
                 * financialYearEndDate in US Dollars.
                 */
                profit?: number;

                /**
                 * For organizations of type CORPORATION, total annual revenue as of
                 * financialYearEndDate in US Dollars.
                 */
                revenue?: number;

                /**
                 * Revenue ranking for this organization.
                 */
                revenueRanking?: number;

                /**
                 * The name of the risk manager for the organization.
                 */
                riskManager?: string;

                /**
                 * Notes on the services provided by the organization.
                 */
                servicesNotes?: string;

                /**
                 * Optional array of provider/source specific tags for this data, where each
                 * element is no longer than 32 characters, used for implementing data owner
                 * conditional access controls to restrict access to the data. Should be left null
                 * by data providers unless conditional access controls are coordinated with the
                 * UDL team.
                 */
                tags?: Array<string>;

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
        }
      }

      /**
       * Read-only collection of thrusters (engines) on this on-orbit object.
       */
      export interface Thruster {
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
         * ID of the Engine.
         */
        idEngine: string;

        /**
         * ID of the on-orbit object.
         */
        idOnOrbit: string;

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
         * Known launch vehicle engines and their performance characteristics and limits. A
         * launch vehicle has 1 to many engines per stage.
         */
        engine?: Thruster.Engine;

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
         * The number of engines/thrusters on the spacecraft of the type identified by
         * idEngine.
         */
        quantity?: number;

        /**
         * The type of thruster associated with this record (e.g. LAE, Hydrazine REA,
         * etc.).
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

      export namespace Thruster {
        /**
         * Known launch vehicle engines and their performance characteristics and limits. A
         * launch vehicle has 1 to many engines per stage.
         */
        export interface Engine {
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
           * Engine name/variant.
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
           * Time the row was created in the database, auto-populated by the system.
           */
          createdAt?: string;

          /**
           * Application user who created the row in the database, auto-populated by the
           * system.
           */
          createdBy?: string;

          /**
           * Read-only collection of additional EngineDetails by various sources for this
           * engine, ignored on create/update. These details must be created separately via
           * the /udl/enginedetails operations.
           */
          engineDetails?: Array<Engine.EngineDetail>;

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

        export namespace Engine {
          /**
           * Known launch vehicle engine details and performance characteristics and limits
           * compiled by a particular source. A launch vehicle engine may have several
           * details records from multiple sources.
           */
          export interface EngineDetail {
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
             * Identifier of the parent engine record.
             */
            idEngine: string;

            /**
             * Source of the data.
             */
            source: string;

            /**
             * Unique identifier of the record, auto-generated by the system.
             */
            id?: string;

            /**
             * Launch engine maximum burn time in seconds.
             */
            burnTime?: number;

            /**
             * Engine chamber pressure in bars.
             */
            chamberPressure?: number;

            /**
             * Engine characteristic type (e.g. Electric, Mono-propellant, Bi-propellant,
             * etc.).
             */
            characteristicType?: string;

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
             * Engine cycle type (e.g. Electrostatic Ion, Pressure Fed, Hall, Catalytic
             * Decomposition, etc.).
             */
            cycleType?: string;

            /**
             * Engine type or family.
             */
            family?: string;

            /**
             * Organization ID of the engine manufacturer.
             */
            manufacturerOrgId?: string;

            /**
             * Engine maximum number of firings.
             */
            maxFirings?: number;

            /**
             * Notes/Description of the engine.
             */
            notes?: string;

            /**
             * Engine nozzle expansion ratio.
             */
            nozzleExpansionRatio?: number;

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
             * Oxidizer type (e.g. Nitrogen Tetroxide, Liquid Oxygen, etc).
             */
            oxidizer?: string;

            /**
             * Propellant/fuel type of the engine (e.g. Liquid Hydrogen, Kerosene, Aerozine,
             * etc).
             */
            propellant?: string;

            /**
             * Engine maximum thrust at sea level in Kilo-Newtons.
             */
            seaLevelThrust?: number;

            /**
             * Launch engine specific impulse in seconds.
             */
            specificImpulse?: number;

            /**
             * Optional array of provider/source specific tags for this data, where each
             * element is no longer than 32 characters, used for implementing data owner
             * conditional access controls to restrict access to the data. Should be left null
             * by data providers unless conditional access controls are coordinated with the
             * UDL team.
             */
            tags?: Array<string>;

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
             * Engine maximum thrust in a vacuum in Kilo-Newtons.
             */
            vacuumThrust?: number;
          }
        }
      }
    }

    /**
     * Model representation of a unit or organization which operates or controls an
     * space-related Entity such as an on-orbit payload, a sensor, etc. A contact may
     * belong to an organization.
     */
    export interface OperatingUnit {
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
       * "Indicates any of the magnitudes that serve to define the position of a point by
       * reference to a fixed figure, system of lines, etc. Pos. 1-2. Latitude Degrees
       * [00-90] Pos. 3-4. Latitude Minutes [00-59] Pos. 5-6. Latitude Seconds [00-59]
       * Pos. 7-9. Latitude Thousandths Of Seconds [000-999]
       * Pos. 10. Latitude Hemisphere [NS] Pos. 11-13. Longitude Degrees [00-180] Pos.
       * 14-15. Longitude Minutes [00-59] Pos. 16-17. Longitude Seconds [00-59] Pos.
       * 18-20. Longitude Thousandths Of Seconds [000-999] Pos. 21. Longitude Hemisphere
       * [EW] Pos. 1-21. Unknown Latitude and Unknown Longitude [000000000U000000000U]]".
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
      location?: OperatingUnit.Location;

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
       * "Indicates the grid system used in the development of the milGrid coordinates.
       * Values are: UPS - Universal Polar System UTM - Universal Transverse Mercator".
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
      operatingUnitRemarks?: Array<OperatingUnit.OperatingUnitRemark>;

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
      organization?: OperatingUnit.Organization;

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

    export namespace OperatingUnit {
      /**
       * Model representation of a location, which is a specific fixed point on the earth
       * and is used to denote the locations of fixed sensors, operating units, etc.
       */
      export interface Location {
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

      /**
       * An organization such as a corporation, manufacturer, consortium, government,
       * etc. An organization may have parent and child organizations as well as link to
       * a former organization if this org previously existed as another organization.
       */
      export interface Organization {
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
         * Organization name.
         */
        name: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Type of organization (e.g. GOVERNMENT, CORPORATION, CONSORTIUM, ACADEMIC).
         */
        type: string;

        /**
         * Unique identifier of the record, auto-generated by the system.
         */
        id?: string;

        /**
         * Boolean indicating if this organization is currently active.
         */
        active?: boolean;

        /**
         * Subtype or category of the organization (e.g. Private company, stock market
         * quoted company, subsidiary, goverment department/agency, etc).
         */
        category?: string;

        /**
         * Country of the physical location of the organization. This value is typically
         * the ISO 3166 Alpha-2 two-character country code. However, it can also represent
         * various consortiums that do not appear in the ISO document. The code must
         * correspond to an existing country in the UDL’s country API. Call
         * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
         * alternate code values that exist for the specified country code.
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
         * Organization description.
         */
        description?: string;

        /**
         * Optional externally provided identifier for this row.
         */
        externalId?: string;

        /**
         * Country of registration or ownership of the organization. This value is
         * typically the ISO 3166 Alpha-2 two-character country code, however it can also
         * represent various consortiums that do not appear in the ISO document. The code
         * must correspond to an existing country in the UDL’s country API. Call
         * udl/country/{code} to get any associated FIPS code, ISO Alpha-3 code, or
         * alternate code values that exist for the specified country code.
         */
        nationality?: string;

        /**
         * Read-only collection of additional OrganizationDetails by various sources for
         * this organization, ignored on create/update. These details must be created
         * separately via the /udl/organizationdetails operations.
         */
        organizationDetails?: Array<Organization.OrganizationDetail>;

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

      export namespace Organization {
        /**
         * Model representation of additional detailed organization data as collected by a
         * particular source.
         */
        export interface OrganizationDetail {
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
           * Unique identifier of the parent organization.
           */
          idOrganization: string;

          /**
           * Organization details name.
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
           * Street number of the organization.
           */
          address1?: string;

          /**
           * Field for additional organization address information such as PO Box and unit
           * number.
           */
          address2?: string;

          /**
           * Contains the third line of address information for an organization.
           */
          address3?: string;

          /**
           * Designated broker for this organization.
           */
          broker?: string;

          /**
           * For organizations of type CORPORATION, the name of the Chief Executive Officer.
           */
          ceo?: string;

          /**
           * For organizations of type CORPORATION, the name of the Chief Financial Officer.
           */
          cfo?: string;

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
           * For organizations of type CORPORATION, the name of the Chief Technology Officer.
           */
          cto?: string;

          /**
           * Organization description.
           */
          description?: string;

          /**
           * For organizations of type CORPORATION, the company EBITDA value as of
           * financialYearEndDate in US Dollars.
           */
          ebitda?: number;

          /**
           * Listed contact email address for the organization.
           */
          email?: string;

          /**
           * For organizations of type CORPORATION, notes on company financials.
           */
          financialNotes?: string;

          /**
           * For organizations of type CORPORATION, the effective financial year end date for
           * revenue, EBITDA, and profit values.
           */
          financialYearEndDate?: string;

          /**
           * Satellite fleet planning notes for this organization.
           */
          fleetPlanNotes?: string;

          /**
           * Former organization ID (if this organization previously existed as another
           * organization).
           */
          formerOrgId?: string;

          /**
           * Total number of FTEs in this organization.
           */
          ftes?: number;

          /**
           * Administrative boundaries of the first sub-national level. Level 1 is simply the
           * largest demarcation under whatever demarcation criteria has been determined by
           * the governing body. For example, this may be a state or province.
           */
          geoAdminLevel1?: string;

          /**
           * Administrative boundaries of the second sub-national level. Level 2 is simply
           * the second largest demarcation under whatever demarcation criteria has been
           * determined by the governing body. For example, this may be a county or district.
           */
          geoAdminLevel2?: string;

          /**
           * Administrative boundaries of the third sub-national level. Level 3 is simply the
           * third largest demarcation under whatever demarcation criteria has been
           * determined by the governing body. For example, this may be a city or township.
           */
          geoAdminLevel3?: string;

          /**
           * Mass ranking for this organization.
           */
          massRanking?: number;

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
           * Parent organization ID of this organization if it is a child organization.
           */
          parentOrgId?: string;

          /**
           * A postal code, such as PIN or ZIP Code, is a series of letters or digits or both
           * included in the postal address of the organization.
           */
          postalCode?: string;

          /**
           * For organizations of type CORPORATION, total annual profit as of
           * financialYearEndDate in US Dollars.
           */
          profit?: number;

          /**
           * For organizations of type CORPORATION, total annual revenue as of
           * financialYearEndDate in US Dollars.
           */
          revenue?: number;

          /**
           * Revenue ranking for this organization.
           */
          revenueRanking?: number;

          /**
           * The name of the risk manager for the organization.
           */
          riskManager?: string;

          /**
           * Notes on the services provided by the organization.
           */
          servicesNotes?: string;

          /**
           * Optional array of provider/source specific tags for this data, where each
           * element is no longer than 32 characters, used for implementing data owner
           * conditional access controls to restrict access to the data. Should be left null
           * by data providers unless conditional access controls are coordinated with the
           * UDL team.
           */
          tags?: Array<string>;

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

    /**
     * Details on a particular Radio Frequency (RF) band, also known as a carrier,
     * which may be in use by any type of Entity for communications or operations.
     */
    export interface RfBand {
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
       * Unique identifier of the parent Entity which uses this band.
       */
      idEntity: string;

      /**
       * RF Band name.
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
       * Name of the band of this RF range (e.g.
       * X,K,Ku,Ka,L,S,C,UHF,VHF,EHF,SHF,UNK,VLF,HF,E,Q,V,W). See RFBandType for more
       * details and descriptions of each band name.
       */
      band?: string;

      /**
       * RF Band frequency range bandwidth in Mhz.
       */
      bandwidth?: number;

      /**
       * Angle between the half-power (-3 dB) points of the main lobe of the antenna, in
       * degrees.
       */
      beamwidth?: number;

      /**
       * Center frequency of RF frequency range, if applicable, in Mhz.
       */
      centerFreq?: number;

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
       * RF Range edge gain, in dBi.
       */
      edgeGain?: number;

      /**
       * EIRP is defined as the RMS power input in decibel watts required to a lossless
       * half-wave dipole antenna to give the same maximum power density far from the
       * antenna as the actual transmitter. It is equal to the power input to the
       * transmitter's antenna multiplied by the antenna gain relative to a half-wave
       * dipole. Effective radiated power and effective isotropic radiated power both
       * measure the amount of power a radio transmitter and antenna (or other source of
       * electromagnetic waves) radiates in a specific direction: in the direction of
       * maximum signal strength (the "main lobe") of its radiation pattern.
       */
      eirp?: number;

      /**
       * Effective Radiated Power (ERP) is the total power in decibel watts radiated by
       * an actual antenna relative to a half-wave dipole rather than a theoretical
       * isotropic antenna. A half-wave dipole has a gain of 2.15 dB compared to an
       * isotropic antenna. EIRP(dB) = ERP (dB)+2.15 dB or EIRP (W) = 1.64\*ERP(W).
       * Effective radiated power and effective isotropic radiated power both measure the
       * amount of power a radio transmitter and antenna (or other source of
       * electromagnetic waves) radiates in a specific direction: in the direction of
       * maximum signal strength (the "main lobe") of its radiation pattern.
       */
      erp?: number;

      /**
       * End/maximum of transmit RF frequency range, if applicable, in Mhz.
       */
      freqMax?: number;

      /**
       * Start/minimum of transmit RF frequency range, if applicable, in Mhz.
       */
      freqMin?: number;

      /**
       * RF Band mode (e.g. TX, RX).
       */
      mode?: 'TX' | 'RX';

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
       * RF Range maximum gain, in dBi.
       */
      peakGain?: number;

      /**
       * Transponder polarization e.g. H - (Horizontally Polarized) Perpendicular to
       * Earth's surface, V - (Vertically Polarized) Parallel to Earth's surface, L -
       * (Left Hand Circularly Polarized) Rotating left relative to the Earth's surface,
       * R - (Right Hand Circularly Polarized) Rotating right relative to the Earth's
       * surface.
       */
      polarization?: 'H' | 'V' | 'R' | 'L';

      /**
       * Purpose or use of the RF Band -- COMM = communications, TTC =
       * Telemetry/Tracking/Control, OPS = Operations, OTHER = Other).
       */
      purpose?: 'COMM' | 'TTC' | 'OPS' | 'OTHER';

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
     * Status for a particular Entity. An entity may have multiple status records
     * collected by various sources.
     */
    export interface StatusCollection {
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
       * Unique identifier of the parent entity.
       */
      idEntity: string;

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
       * The declassification date of this data, in ISO 8601 UTC format.
       */
      declassificationDate?: string;

      /**
       * Declassification string of this data.
       */
      declassificationString?: string;

      /**
       * The sources or SCG references from which the classification of this data is
       * derived.
       */
      derivedFrom?: string;

      /**
       * Comments describing the status creation and or updates to an entity.
       */
      notes?: string;

      /**
       * Operation capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
       */
      opsCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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
       * Overall state of the entity, if applicable (e.g. UNKNOWN, DEAD, ACTIVE, RF
       * ACTIVE, STANDBY).
       */
      state?: 'UNKNOWN' | 'DEAD' | 'ACTIVE' | 'RF ACTIVE' | 'STANDBY';

      subStatusCollection?: Array<StatusCollection.SubStatusCollection>;

      /**
       * System capability of the entity, if applicable (e.g. FMC, NMC, PMC, UNK).
       */
      sysCap?: 'FMC' | 'NMC' | 'PMC' | 'UNK';

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

    export namespace StatusCollection {
      /**
       * Additional sub-system or capability status for the parent entity.
       */
      export interface SubStatusCollection {
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
         * Descriptions and/or comments associated with the sub-status.
         */
        notes: string;

        /**
         * Source of the data.
         */
        source: string;

        /**
         * Status of the sub-system/capability, e.g. FMC, NMC, PMC, UNK.
         */
        status: 'FMC' | 'NMC' | 'PMC' | 'UNK';

        /**
         * Id of the parent status.
         */
        statusId: string;

        /**
         * Parent entity's sub-system or capability status: mwCap, mdCap, ssCap, etc.
         */
        type: 'mwCap' | 'ssCap' | 'mdCap';

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
         * Time the row was updated in the database, auto-populated by the system.
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
}

export type EntityTupleResponse = Array<EntityFull>;

export interface EntityCreateParams {
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
   * Unique entity name.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type of entity represented by this record (AIRCRAFT, BUS, COMM, IR,
   * NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
   */
  type:
    | 'AIRCRAFT'
    | 'BUS'
    | 'COMM'
    | 'IR'
    | 'NAVIGATION'
    | 'ONORBIT'
    | 'RFEMITTER'
    | 'SCIENTIFIC'
    | 'SENSOR'
    | 'SITE'
    | 'VESSEL';

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
   * Unique identifier of the record.
   */
  idEntity?: string;

  /**
   * Unique identifier of the entity location, if terrestrial/fixed.
   */
  idLocation?: string;

  /**
   * Onorbit identifier if this entity is part of an on-orbit object. For the public
   * catalog, the idOnOrbit is typically the satellite number as a string, but may be
   * a UUID for analyst or other unknown or untracked satellites.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the associated operating unit object.
   */
  idOperatingUnit?: string;

  /**
   * Model representation of a location, which is a specific fixed point on the earth
   * and is used to denote the locations of fixed sensors, operating units, etc.
   */
  location?: LocationAPI.LocationIngest;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: OnorbitAPI.OnorbitIngest;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Type of organization which owns this entity (e.g. Commercial, Government,
   * Academic, Consortium, etc).
   */
  ownerType?: 'Commercial' | 'Government' | 'Academic' | 'Consortium' | 'Other';

  /**
   * Boolean indicating if this entity is taskable.
   */
  taskable?: boolean;

  /**
   * List of URLs to additional details/documents for this entity.
   */
  urls?: Array<string>;
}

export interface EntityUpdateParams {
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
   * Unique entity name.
   */
  name: string;

  /**
   * Source of the data.
   */
  source: string;

  /**
   * The type of entity represented by this record (AIRCRAFT, BUS, COMM, IR,
   * NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
   */
  type:
    | 'AIRCRAFT'
    | 'BUS'
    | 'COMM'
    | 'IR'
    | 'NAVIGATION'
    | 'ONORBIT'
    | 'RFEMITTER'
    | 'SCIENTIFIC'
    | 'SENSOR'
    | 'SITE'
    | 'VESSEL';

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
   * Unique identifier of the record.
   */
  idEntity?: string;

  /**
   * Unique identifier of the entity location, if terrestrial/fixed.
   */
  idLocation?: string;

  /**
   * Onorbit identifier if this entity is part of an on-orbit object. For the public
   * catalog, the idOnOrbit is typically the satellite number as a string, but may be
   * a UUID for analyst or other unknown or untracked satellites.
   */
  idOnOrbit?: string;

  /**
   * Unique identifier of the associated operating unit object.
   */
  idOperatingUnit?: string;

  /**
   * Model representation of a location, which is a specific fixed point on the earth
   * and is used to denote the locations of fixed sensors, operating units, etc.
   */
  location?: LocationAPI.LocationIngest;

  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  onOrbit?: OnorbitAPI.OnorbitIngest;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;

  /**
   * Type of organization which owns this entity (e.g. Commercial, Government,
   * Academic, Consortium, etc).
   */
  ownerType?: 'Commercial' | 'Government' | 'Academic' | 'Consortium' | 'Other';

  /**
   * Boolean indicating if this entity is taskable.
   */
  taskable?: boolean;

  /**
   * List of URLs to additional details/documents for this entity.
   */
  urls?: Array<string>;
}

export interface EntityTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

export declare namespace Entities {
  export {
    type EntityAbridged as EntityAbridged,
    type EntityFull as EntityFull,
    type EntityIngest as EntityIngest,
    type EntityListResponse as EntityListResponse,
    type EntityCountResponse as EntityCountResponse,
    type EntityGetAllTypesResponse as EntityGetAllTypesResponse,
    type EntityTupleResponse as EntityTupleResponse,
    type EntityCreateParams as EntityCreateParams,
    type EntityUpdateParams as EntityUpdateParams,
    type EntityTupleParams as EntityTupleParams,
  };
}
