// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Seradataearlywarning extends APIResource {
  /**
   * Service operation to take a single SeradataEarlyWarning as a POST body and
   * ingest into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: SeradataearlywarningCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/seradataearlywarning', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update an SeradataEarlyWarning. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   */
  update(pathID: string, body: SeradataearlywarningUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/seradataearlywarning/${pathID}`, {
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
    query: SeradataearlywarningListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeradataearlywarningListResponse> {
    return this._client.get('/udl/seradataearlywarning', { query, ...options });
  }

  /**
   * Service operation to delete an SeradataEarlyWarning specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/seradataearlywarning/${id}`, {
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
    query: SeradataearlywarningCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/seradataearlywarning/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single SeradataEarlyWarning by its unique ID passed
   * as a path parameter.
   */
  get(
    id: string,
    query: SeradataearlywarningGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeradataearlywarningGetResponse> {
    return this._client.get(path`/udl/seradataearlywarning/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/seradataearlywarning/queryhelp', {
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
  tuple(
    query: SeradataearlywarningTupleParams,
    options?: RequestOptions,
  ): APIPromise<SeradataearlywarningTupleResponse> {
    return this._client.get('/udl/seradataearlywarning/tuple', { query, ...options });
  }
}

export type SeradataearlywarningListResponse =
  Array<SeradataearlywarningListResponse.SeradataearlywarningListResponseItem>;

export namespace SeradataearlywarningListResponse {
  /**
   * Details for an early warning payload from Seradata.
   */
  export interface SeradataearlywarningListResponseItem {
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
     * Source of the data.
     */
    source: string;

    /**
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    spacecraftId: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Best resolution for this IR in meters.
     */
    bestResolution?: number;

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
     * Is the sensor Earth Pointing.
     */
    earthPointing?: boolean;

    /**
     * Frequency Limits for this IR.
     */
    frequencyLimits?: string;

    /**
     * Ground Station Locations for this IR.
     */
    groundStationLocations?: string;

    /**
     * Ground Station info for this IR.
     */
    groundStations?: string;

    /**
     * Hosted for company/Organization Id.
     */
    hostedForCompanyOrgId?: string;

    /**
     * UUID of the parent IR record.
     */
    idIR?: string;

    /**
     * Manufacturer Organization Id.
     */
    manufacturerOrgId?: string;

    /**
     * Missile Launch Phase Detection Ability.
     */
    missileLaunchPhaseDetectionAbility?: string;

    /**
     * Sensor name from Seradata, e.g. Infra red telescope, Schmidt Telescope, etc.
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
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    partnerSpacecraftId?: string;

    /**
     * Payload notes.
     */
    payloadNotes?: string;

    /**
     * Spectral Bands, e.g. Infra-Red.
     */
    spectralBands?: string;
  }
}

export type SeradataearlywarningCountResponse = string;

/**
 * Details for an early warning payload from Seradata.
 */
export interface SeradataearlywarningGetResponse {
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
   * Source of the data.
   */
  source: string;

  /**
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Best resolution for this IR in meters.
   */
  bestResolution?: number;

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
   * Is the sensor Earth Pointing.
   */
  earthPointing?: boolean;

  /**
   * Frequency Limits for this IR.
   */
  frequencyLimits?: string;

  /**
   * Ground Station Locations for this IR.
   */
  groundStationLocations?: string;

  /**
   * Ground Station info for this IR.
   */
  groundStations?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the parent IR record.
   */
  idIR?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Missile Launch Phase Detection Ability.
   */
  missileLaunchPhaseDetectionAbility?: string;

  /**
   * Sensor name from Seradata, e.g. Infra red telescope, Schmidt Telescope, etc.
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
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  partnerSpacecraftId?: string;

  /**
   * Payload notes.
   */
  payloadNotes?: string;

  /**
   * Spectral Bands, e.g. Infra-Red.
   */
  spectralBands?: string;

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

export type SeradataearlywarningTupleResponse =
  Array<SeradataearlywarningTupleResponse.SeradataearlywarningTupleResponseItem>;

export namespace SeradataearlywarningTupleResponse {
  /**
   * Details for an early warning payload from Seradata.
   */
  export interface SeradataearlywarningTupleResponseItem {
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
     * Source of the data.
     */
    source: string;

    /**
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    spacecraftId: string;

    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    id?: string;

    /**
     * Best resolution for this IR in meters.
     */
    bestResolution?: number;

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
     * Is the sensor Earth Pointing.
     */
    earthPointing?: boolean;

    /**
     * Frequency Limits for this IR.
     */
    frequencyLimits?: string;

    /**
     * Ground Station Locations for this IR.
     */
    groundStationLocations?: string;

    /**
     * Ground Station info for this IR.
     */
    groundStations?: string;

    /**
     * Hosted for company/Organization Id.
     */
    hostedForCompanyOrgId?: string;

    /**
     * UUID of the parent IR record.
     */
    idIR?: string;

    /**
     * Manufacturer Organization Id.
     */
    manufacturerOrgId?: string;

    /**
     * Missile Launch Phase Detection Ability.
     */
    missileLaunchPhaseDetectionAbility?: string;

    /**
     * Sensor name from Seradata, e.g. Infra red telescope, Schmidt Telescope, etc.
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
     * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
     */
    partnerSpacecraftId?: string;

    /**
     * Payload notes.
     */
    payloadNotes?: string;

    /**
     * Spectral Bands, e.g. Infra-Red.
     */
    spectralBands?: string;

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

export interface SeradataearlywarningCreateParams {
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
   * Source of the data.
   */
  source: string;

  /**
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  id?: string;

  /**
   * Best resolution for this IR in meters.
   */
  bestResolution?: number;

  /**
   * Is the sensor Earth Pointing.
   */
  earthPointing?: boolean;

  /**
   * Frequency Limits for this IR.
   */
  frequencyLimits?: string;

  /**
   * Ground Station Locations for this IR.
   */
  groundStationLocations?: string;

  /**
   * Ground Station info for this IR.
   */
  groundStations?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the parent IR record.
   */
  idIR?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Missile Launch Phase Detection Ability.
   */
  missileLaunchPhaseDetectionAbility?: string;

  /**
   * Sensor name from Seradata, e.g. Infra red telescope, Schmidt Telescope, etc.
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
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  partnerSpacecraftId?: string;

  /**
   * Payload notes.
   */
  payloadNotes?: string;

  /**
   * Spectral Bands, e.g. Infra-Red.
   */
  spectralBands?: string;
}

export interface SeradataearlywarningUpdateParams {
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
   * Source of the data.
   */
  source: string;

  /**
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  spacecraftId: string;

  /**
   * Unique identifier of the record, auto-generated by the system.
   */
  body_id?: string;

  /**
   * Best resolution for this IR in meters.
   */
  bestResolution?: number;

  /**
   * Is the sensor Earth Pointing.
   */
  earthPointing?: boolean;

  /**
   * Frequency Limits for this IR.
   */
  frequencyLimits?: string;

  /**
   * Ground Station Locations for this IR.
   */
  groundStationLocations?: string;

  /**
   * Ground Station info for this IR.
   */
  groundStations?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the parent IR record.
   */
  idIR?: string;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Missile Launch Phase Detection Ability.
   */
  missileLaunchPhaseDetectionAbility?: string;

  /**
   * Sensor name from Seradata, e.g. Infra red telescope, Schmidt Telescope, etc.
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
   * Seradata ID of the spacecraft (SeradataSpacecraftDetails ID).
   */
  partnerSpacecraftId?: string;

  /**
   * Payload notes.
   */
  payloadNotes?: string;

  /**
   * Spectral Bands, e.g. Infra-Red.
   */
  spectralBands?: string;
}

export interface SeradataearlywarningListParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeradataearlywarningCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeradataearlywarningGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeradataearlywarningTupleParams {
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

export declare namespace Seradataearlywarning {
  export {
    type SeradataearlywarningListResponse as SeradataearlywarningListResponse,
    type SeradataearlywarningCountResponse as SeradataearlywarningCountResponse,
    type SeradataearlywarningGetResponse as SeradataearlywarningGetResponse,
    type SeradataearlywarningTupleResponse as SeradataearlywarningTupleResponse,
    type SeradataearlywarningCreateParams as SeradataearlywarningCreateParams,
    type SeradataearlywarningUpdateParams as SeradataearlywarningUpdateParams,
    type SeradataearlywarningListParams as SeradataearlywarningListParams,
    type SeradataearlywarningCountParams as SeradataearlywarningCountParams,
    type SeradataearlywarningGetParams as SeradataearlywarningGetParams,
    type SeradataearlywarningTupleParams as SeradataearlywarningTupleParams,
  };
}
