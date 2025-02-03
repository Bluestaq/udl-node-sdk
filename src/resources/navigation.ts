// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as EntitiesAPI from './entities';

export class Navigation extends APIResource {
  /**
   * Service operation to take a single Navigation as a POST body and ingest into the
   * database. A Navigation is an on-orbit navigation payload. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  create(body: NavigationCreateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/udl/navigation', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Service operation to update a single Navigation. An Navigation is an on-orbit
   * navigation payload. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  update(params: NavigationUpdateParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/udl/navigation/${path_id}`, {
      body: { id: body_id, ...body },
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
  list(options?: Core.RequestOptions): Core.APIPromise<NavigationListResponse> {
    return this._client.get('/udl/navigation', options);
  }

  /**
   * Service operation to delete a Navigation object specified by the passed ID path
   * parameter. An Navigation is an on-orbit navigation payload. A specific role is
   * required to perform this service operation. Please contact the UDL team for
   * assistance.
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/udl/navigation/${id}`, {
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
    return this._client.get('/udl/navigation/count', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }

  /**
   * Service operation to get a single Navigation record by its unique ID passed as a
   * path parameter. An Navigation is an on-orbit navigation payload.
   */
  get(id: string, options?: Core.RequestOptions): Core.APIPromise<NavigationGetResponse> {
    return this._client.get(`/udl/navigation/${id}`, options);
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/udl/navigation/queryhelp', {
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
    query: NavigationTupleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NavigationTupleResponse> {
    return this._client.get('/udl/navigation/tuple', { query, ...options });
  }
}

export type NavigationListResponse = Array<NavigationListResponse.NavigationListResponseItem>;

export namespace NavigationListResponse {
  /**
   * Navigation payload entities within the SSA environment.
   */
  export interface NavigationListResponseItem {
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
     * Name of the Navigation entity.
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
     * Description of the Navigation entity.
     */
    description?: string;

    /**
     * ID of the parent entity for this navigation.
     */
    idEntity?: string;

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

export type NavigationCountResponse = string;

/**
 * Navigation payload entities within the SSA environment.
 */
export interface NavigationGetResponse {
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
   * Name of the Navigation entity.
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
   * Description of the Navigation entity.
   */
  description?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: EntitiesAPI.EntityFull;

  /**
   * ID of the parent entity for this navigation.
   */
  idEntity?: string;

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

export type NavigationTupleResponse = Array<NavigationTupleResponse.NavigationTupleResponseItem>;

export namespace NavigationTupleResponse {
  /**
   * Navigation payload entities within the SSA environment.
   */
  export interface NavigationTupleResponseItem {
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
     * Name of the Navigation entity.
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
     * Description of the Navigation entity.
     */
    description?: string;

    /**
     * An entity is a generic representation of any object within a space/SSA system
     * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
     * entity can have an operating unit, a location (if terrestrial), and statuses.
     */
    entity?: EntitiesAPI.EntityFull;

    /**
     * ID of the parent entity for this navigation.
     */
    idEntity?: string;

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
}

export interface NavigationCreateParams {
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
   * Name of the Navigation entity.
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
   * Description of the Navigation entity.
   */
  description?: string;

  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  entity?: NavigationCreateParams.Entity;

  /**
   * ID of the parent entity for this navigation.
   */
  idEntity?: string;

  /**
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export namespace NavigationCreateParams {
  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  export interface Entity {
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
    location?: Entity.Location;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Entity.OnOrbit;

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

  export namespace Entity {
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
}

export interface NavigationUpdateParams {
  /**
   * Path param: The ID of the Navigation to update.
   */
  path_id: string;

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
  dataMode: 'REAL' | 'TEST' | 'SIMULATED' | 'EXERCISE';

  /**
   * Body param: Name of the Navigation entity.
   */
  name: string;

  /**
   * Body param: Source of the data.
   */
  source: string;

  /**
   * Body param: Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Body param: Description of the Navigation entity.
   */
  description?: string;

  /**
   * Body param: An entity is a generic representation of any object within a
   * space/SSA system such as sensors, on-orbit objects, RF Emitters, space craft
   * buses, etc. An entity can have an operating unit, a location (if terrestrial),
   * and statuses.
   */
  entity?: NavigationUpdateParams.Entity;

  /**
   * Body param: ID of the parent entity for this navigation.
   */
  idEntity?: string;

  /**
   * Body param: Originating system or organization which produced the data, if
   * different from the source. The origin may be different than the source if the
   * source was a mediating system which forwarded the data on behalf of the origin
   * system. If null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export namespace NavigationUpdateParams {
  /**
   * An entity is a generic representation of any object within a space/SSA system
   * such as sensors, on-orbit objects, RF Emitters, space craft buses, etc. An
   * entity can have an operating unit, a location (if terrestrial), and statuses.
   */
  export interface Entity {
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
    location?: Entity.Location;

    /**
     * Model object representing on-orbit objects or satellites in the system.
     */
    onOrbit?: Entity.OnOrbit;

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

  export namespace Entity {
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
}

export interface NavigationTupleParams {
  /**
   * Comma-separated list of valid field names for this data type to be returned in
   * the response. Only the fields specified will be returned as well as the
   * classification marking of the data, if applicable. See the ‘queryhelp’ operation
   * for a complete list of possible fields.
   */
  columns: string;
}

export declare namespace Navigation {
  export {
    type NavigationListResponse as NavigationListResponse,
    type NavigationCountResponse as NavigationCountResponse,
    type NavigationGetResponse as NavigationGetResponse,
    type NavigationTupleResponse as NavigationTupleResponse,
    type NavigationCreateParams as NavigationCreateParams,
    type NavigationUpdateParams as NavigationUpdateParams,
    type NavigationTupleParams as NavigationTupleParams,
  };
}
