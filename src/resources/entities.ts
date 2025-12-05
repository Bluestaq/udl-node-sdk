// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LocationAPI from './location';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Entities extends APIResource {
  /**
   * Service operation to take a single Entity as a POST body and ingest into the
   * database. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.entities.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'Example name',
   *   source: 'Bluestaq',
   *   type: 'ONORBIT',
   * });
   * ```
   */
  create(body: EntityCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/entity', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Entity record by its unique ID passed as a
   * path parameter.
   *
   * @example
   * ```ts
   * const entityFull = await client.entities.retrieve('id');
   * ```
   */
  retrieve(
    id: string,
    query: EntityRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.EntityFull> {
    return this._client.get(path`/udl/entity/${id}`, { query, ...options });
  }

  /**
   * Service operation to update a single Entity. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.entities.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   name: 'Example name',
   *   source: 'Bluestaq',
   *   type: 'ONORBIT',
   * });
   * ```
   */
  update(id: string, body: EntityUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/entity/${id}`, {
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
   * for await (const entityAbridged of client.entities.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EntityListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EntityAbridgedsOffsetPage, EntityAbridged> {
    return this._client.getAPIList('/udl/entity', OffsetPage<EntityAbridged>, { query, ...options });
  }

  /**
   * Service operation to delete an Entity object specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.entities.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/entity/${id}`, {
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
   *
   * @example
   * ```ts
   * const response = await client.entities.count();
   * ```
   */
  count(query: EntityCountParams | null | undefined = {}, options?: RequestOptions): APIPromise<string> {
    return this._client.get('/udl/entity/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Retrieves all distinct entity types.
   *
   * @example
   * ```ts
   * const response = await client.entities.getAllTypes();
   * ```
   */
  getAllTypes(
    query: EntityGetAllTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntityGetAllTypesResponse> {
    return this._client.get('/udl/entity/getAllTypes', { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   *
   * @example
   * ```ts
   * const response = await client.entities.queryHelp();
   * ```
   */
  queryHelp(options?: RequestOptions): APIPromise<EntityQueryHelpResponse> {
    return this._client.get('/udl/entity/queryhelp', options);
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
   * const entityFulls = await client.entities.tuple({
   *   columns: 'columns',
   * });
   * ```
   */
  tuple(query: EntityTupleParams, options?: RequestOptions): APIPromise<EntityTupleResponse> {
    return this._client.get('/udl/entity/tuple', { query, ...options });
  }
}

export type EntityAbridgedsOffsetPage = OffsetPage<EntityAbridged>;

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
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
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
   * LASEREMITTER, NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
   */
  type:
    | 'AIRCRAFT'
    | 'BUS'
    | 'COMM'
    | 'IR'
    | 'LASEREMITTER'
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
  location?: Shared.LocationAbridged;

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
   * Model object representing on-orbit objects or satellites in the system.
   */
  export interface OnOrbit {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
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
export interface EntityIngest {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
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
   * LASEREMITTER, NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
   */
  type:
    | 'AIRCRAFT'
    | 'BUS'
    | 'COMM'
    | 'IR'
    | 'LASEREMITTER'
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
  onOrbit?: EntityIngest.OnOrbit;

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

export namespace EntityIngest {
  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  export interface OnOrbit {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
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

export type EntityCountResponse = string;

export type EntityGetAllTypesResponse = Array<string>;

export interface EntityQueryHelpResponse {
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

export type EntityTupleResponse = Array<Shared.EntityFull>;

export interface EntityCreateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
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
   * LASEREMITTER, NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
   */
  type:
    | 'AIRCRAFT'
    | 'BUS'
    | 'COMM'
    | 'IR'
    | 'LASEREMITTER'
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
  onOrbit?: EntityCreateParams.OnOrbit;

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

export namespace EntityCreateParams {
  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  export interface OnOrbit {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
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
  }
}

export interface EntityRetrieveParams {
  firstResult?: number;

  maxResults?: number;
}

export interface EntityUpdateParams {
  /**
   * Classification marking of the data in IC/CAPCO Portion-marked format.
   */
  classificationMarking: string;

  /**
   * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
   *
   * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
   * events, and analysis.
   *
   * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
   * requirements, and for validating technical, functional, and performance
   * characteristics.
   *
   * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
   * may include both real and simulated data.
   *
   * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
   * datasets.
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
   * LASEREMITTER, NAVIGATION, ONORBIT, RFEMITTER, SCIENTIFIC, SENSOR, SITE, VESSEL).
   */
  type:
    | 'AIRCRAFT'
    | 'BUS'
    | 'COMM'
    | 'IR'
    | 'LASEREMITTER'
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
  onOrbit?: EntityUpdateParams.OnOrbit;

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

export namespace EntityUpdateParams {
  /**
   * Model object representing on-orbit objects or satellites in the system.
   */
  export interface OnOrbit {
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    classificationMarking: string;

    /**
     * Indicator of whether the data is REAL, TEST, EXERCISE, or SIMULATED data:
     *
     * REAL:&nbsp;Data collected or produced that pertains to real-world objects,
     * events, and analysis.
     *
     * TEST:&nbsp;Specific datasets used to evaluate compliance with specifications and
     * requirements, and for validating technical, functional, and performance
     * characteristics.
     *
     * EXERCISE:&nbsp;Data pertaining to a government or military exercise. The data
     * may include both real and simulated data.
     *
     * SIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world
     * datasets.
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
  }
}

export interface EntityListParams extends OffsetPageParams {}

export interface EntityCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface EntityGetAllTypesParams {
  firstResult?: number;

  maxResults?: number;
}

export interface EntityTupleParams {
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

export declare namespace Entities {
  export {
    type EntityAbridged as EntityAbridged,
    type EntityIngest as EntityIngest,
    type EntityCountResponse as EntityCountResponse,
    type EntityGetAllTypesResponse as EntityGetAllTypesResponse,
    type EntityQueryHelpResponse as EntityQueryHelpResponse,
    type EntityTupleResponse as EntityTupleResponse,
    type EntityAbridgedsOffsetPage as EntityAbridgedsOffsetPage,
    type EntityCreateParams as EntityCreateParams,
    type EntityRetrieveParams as EntityRetrieveParams,
    type EntityUpdateParams as EntityUpdateParams,
    type EntityListParams as EntityListParams,
    type EntityCountParams as EntityCountParams,
    type EntityGetAllTypesParams as EntityGetAllTypesParams,
    type EntityTupleParams as EntityTupleParams,
  };
}
