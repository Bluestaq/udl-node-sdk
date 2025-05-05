// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SeraDataNavigation extends APIResource {
  /**
   * Service operation to take a single SeradataNavigation as a POST body and ingest
   * into the database. A specific role is required to perform this service
   * operation. Please contact the UDL team for assistance.
   */
  create(body: SeraDataNavigationCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/seradatanavigation', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update an SeradataNavigation. A specific role is required
   * to perform this service operation. Please contact the UDL team for assistance.
   */
  update(pathID: string, body: SeraDataNavigationUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/seradatanavigation/${pathID}`, {
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
    query: SeraDataNavigationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SeraDataNavigationListResponsesOffsetPage, SeraDataNavigationListResponse> {
    return this._client.getAPIList('/udl/seradatanavigation', OffsetPage<SeraDataNavigationListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete an SeradataNavigation specified by the passed ID
   * path parameter. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/seradatanavigation/${id}`, {
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
    query: SeraDataNavigationCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/seradatanavigation/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single SeradataNavigation by its unique ID passed as
   * a path parameter.
   */
  get(
    id: string,
    query: SeraDataNavigationGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SeraDataNavigationGetResponse> {
    return this._client.get(path`/udl/seradatanavigation/${id}`, { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/seradatanavigation/queryhelp', {
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
    query: SeraDataNavigationTupleParams,
    options?: RequestOptions,
  ): APIPromise<SeraDataNavigationTupleResponse> {
    return this._client.get('/udl/seradatanavigation/tuple', { query, ...options });
  }
}

export type SeraDataNavigationListResponsesOffsetPage = OffsetPage<SeraDataNavigationListResponse>;

/**
 * Details for a navigation payload from Seradata.
 */
export interface SeraDataNavigationListResponse {
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
   * Area of coverage, e.g. Worldwide, India, etc.
   */
  areaCoverage?: string;

  /**
   * Type of clock, e.g. Rubidium, Hydrogen Maser, etc.
   */
  clockType?: string;

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
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the parent Navigation record.
   */
  idNavigation?: string;

  /**
   * Location accuracy in meters.
   */
  locationAccuracy?: number;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Frequency for this payload.
   */
  modeFrequency?: string;

  /**
   * Modes of operation.
   */
  modes?: string;

  /**
   * Sensor name from Seradata, e.g. WAAS GEO-5, etc.
   */
  name?: string;

  /**
   * Payload notes.
   */
  notes?: string;

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
   * Navigation payload type, e.g. WAAS, GAGAN, etc.
   */
  payloadType?: string;
}

export type SeraDataNavigationCountResponse = string;

/**
 * Details for a navigation payload from Seradata.
 */
export interface SeraDataNavigationGetResponse {
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
   * Area of coverage, e.g. Worldwide, India, etc.
   */
  areaCoverage?: string;

  /**
   * Type of clock, e.g. Rubidium, Hydrogen Maser, etc.
   */
  clockType?: string;

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
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the parent Navigation record.
   */
  idNavigation?: string;

  /**
   * Location accuracy in meters.
   */
  locationAccuracy?: number;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Frequency for this payload.
   */
  modeFrequency?: string;

  /**
   * Modes of operation.
   */
  modes?: string;

  /**
   * Sensor name from Seradata, e.g. WAAS GEO-5, etc.
   */
  name?: string;

  /**
   * Payload notes.
   */
  notes?: string;

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
   * Navigation payload type, e.g. WAAS, GAGAN, etc.
   */
  payloadType?: string;

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

export type SeraDataNavigationTupleResponse =
  Array<SeraDataNavigationTupleResponse.SeraDataNavigationTupleResponseItem>;

export namespace SeraDataNavigationTupleResponse {
  /**
   * Details for a navigation payload from Seradata.
   */
  export interface SeraDataNavigationTupleResponseItem {
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
     * Area of coverage, e.g. Worldwide, India, etc.
     */
    areaCoverage?: string;

    /**
     * Type of clock, e.g. Rubidium, Hydrogen Maser, etc.
     */
    clockType?: string;

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
     * Hosted for company/Organization Id.
     */
    hostedForCompanyOrgId?: string;

    /**
     * UUID of the parent Navigation record.
     */
    idNavigation?: string;

    /**
     * Location accuracy in meters.
     */
    locationAccuracy?: number;

    /**
     * Manufacturer Organization Id.
     */
    manufacturerOrgId?: string;

    /**
     * Frequency for this payload.
     */
    modeFrequency?: string;

    /**
     * Modes of operation.
     */
    modes?: string;

    /**
     * Sensor name from Seradata, e.g. WAAS GEO-5, etc.
     */
    name?: string;

    /**
     * Payload notes.
     */
    notes?: string;

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
     * Navigation payload type, e.g. WAAS, GAGAN, etc.
     */
    payloadType?: string;

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

export interface SeraDataNavigationCreateParams {
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
   * Area of coverage, e.g. Worldwide, India, etc.
   */
  areaCoverage?: string;

  /**
   * Type of clock, e.g. Rubidium, Hydrogen Maser, etc.
   */
  clockType?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the parent Navigation record.
   */
  idNavigation?: string;

  /**
   * Location accuracy in meters.
   */
  locationAccuracy?: number;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Frequency for this payload.
   */
  modeFrequency?: string;

  /**
   * Modes of operation.
   */
  modes?: string;

  /**
   * Sensor name from Seradata, e.g. WAAS GEO-5, etc.
   */
  name?: string;

  /**
   * Payload notes.
   */
  notes?: string;

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
   * Navigation payload type, e.g. WAAS, GAGAN, etc.
   */
  payloadType?: string;
}

export interface SeraDataNavigationUpdateParams {
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
   * Area of coverage, e.g. Worldwide, India, etc.
   */
  areaCoverage?: string;

  /**
   * Type of clock, e.g. Rubidium, Hydrogen Maser, etc.
   */
  clockType?: string;

  /**
   * Hosted for company/Organization Id.
   */
  hostedForCompanyOrgId?: string;

  /**
   * UUID of the parent Navigation record.
   */
  idNavigation?: string;

  /**
   * Location accuracy in meters.
   */
  locationAccuracy?: number;

  /**
   * Manufacturer Organization Id.
   */
  manufacturerOrgId?: string;

  /**
   * Frequency for this payload.
   */
  modeFrequency?: string;

  /**
   * Modes of operation.
   */
  modes?: string;

  /**
   * Sensor name from Seradata, e.g. WAAS GEO-5, etc.
   */
  name?: string;

  /**
   * Payload notes.
   */
  notes?: string;

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
   * Navigation payload type, e.g. WAAS, GAGAN, etc.
   */
  payloadType?: string;
}

export interface SeraDataNavigationListParams extends OffsetPageParams {}

export interface SeraDataNavigationCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeraDataNavigationGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface SeraDataNavigationTupleParams {
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

export declare namespace SeraDataNavigation {
  export {
    type SeraDataNavigationListResponse as SeraDataNavigationListResponse,
    type SeraDataNavigationCountResponse as SeraDataNavigationCountResponse,
    type SeraDataNavigationGetResponse as SeraDataNavigationGetResponse,
    type SeraDataNavigationTupleResponse as SeraDataNavigationTupleResponse,
    type SeraDataNavigationListResponsesOffsetPage as SeraDataNavigationListResponsesOffsetPage,
    type SeraDataNavigationCreateParams as SeraDataNavigationCreateParams,
    type SeraDataNavigationUpdateParams as SeraDataNavigationUpdateParams,
    type SeraDataNavigationListParams as SeraDataNavigationListParams,
    type SeraDataNavigationCountParams as SeraDataNavigationCountParams,
    type SeraDataNavigationGetParams as SeraDataNavigationGetParams,
    type SeraDataNavigationTupleParams as SeraDataNavigationTupleParams,
  };
}
