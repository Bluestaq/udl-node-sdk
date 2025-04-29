// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as OrganizationdetailsAPI from './organizationdetails';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Organization extends APIResource {
  /**
   * Service operation to take a single Organization as a POST body and ingest into
   * the database. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   */
  create(body: OrganizationCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/organization', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update an Organization. A specific role is required to
   * perform this service operation. Please contact the UDL team for assistance.
   */
  update(pathID: string, body: OrganizationUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/organization/${pathID}`, {
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
    query: OrganizationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationListResponse> {
    return this._client.get('/udl/organization', { query, ...options });
  }

  /**
   * Service operation to delete an Organization specified by the passed ID path
   * parameter. A specific role is required to perform this service operation. Please
   * contact the UDL team for assistance.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/organization/${id}`, {
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
    query: OrganizationCountParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/udl/organization/count', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single Organization by its unique ID passed as a path
   * parameter.
   */
  get(
    id: string,
    query: OrganizationGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationFull> {
    return this._client.get(path`/udl/organization/${id}`, { query, ...options });
  }

  /**
   * Retrieves all distinct organization categories.
   */
  getOrganizationCategories(
    query: OrganizationGetOrganizationCategoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationGetOrganizationCategoriesResponse> {
    return this._client.get('/udl/organization/getOrganizationCategories', { query, ...options });
  }

  /**
   * Retrieves all distinct organization types.
   */
  getOrganizationTypes(
    query: OrganizationGetOrganizationTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OrganizationGetOrganizationTypesResponse> {
    return this._client.get('/udl/organization/getOrganizationTypes', { query, ...options });
  }

  /**
   * Service operation to provide detailed information on available dynamic query
   * parameters for a particular data type.
   */
  queryhelp(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/udl/organization/queryhelp', {
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
  tuple(query: OrganizationTupleParams, options?: RequestOptions): APIPromise<OrganizationTupleResponse> {
    return this._client.get('/udl/organization/tuple', { query, ...options });
  }
}

/**
 * An organization such as a corporation, manufacturer, consortium, government,
 * etc. An organization may have parent and child organizations as well as link to
 * a former organization if this org previously existed as another organization.
 */
export interface OrganizationFull {
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
  organizationDetails?: Array<OrganizationdetailsAPI.OrganizationDetailsFull>;

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

export type OrganizationListResponse = Array<OrganizationListResponse.OrganizationListResponseItem>;

export namespace OrganizationListResponse {
  /**
   * An organization such as a corporation, manufacturer, consortium, government,
   * etc. An organization may have parent and child organizations as well as link to
   * a former organization if this org previously existed as another organization.
   */
  export interface OrganizationListResponseItem {
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

export type OrganizationCountResponse = string;

export type OrganizationGetOrganizationCategoriesResponse = Array<string>;

export type OrganizationGetOrganizationTypesResponse = Array<string>;

export type OrganizationTupleResponse = Array<OrganizationFull>;

export interface OrganizationCreateParams {
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
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface OrganizationUpdateParams {
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
  body_id?: string;

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
   * Originating system or organization which produced the data, if different from
   * the source. The origin may be different than the source if the source was a
   * mediating system which forwarded the data on behalf of the origin system. If
   * null, the source may be assumed to be the origin.
   */
  origin?: string;
}

export interface OrganizationListParams {
  firstResult?: number;

  maxResults?: number;
}

export interface OrganizationCountParams {
  firstResult?: number;

  maxResults?: number;
}

export interface OrganizationGetParams {
  firstResult?: number;

  maxResults?: number;
}

export interface OrganizationGetOrganizationCategoriesParams {
  firstResult?: number;

  maxResults?: number;
}

export interface OrganizationGetOrganizationTypesParams {
  firstResult?: number;

  maxResults?: number;
}

export interface OrganizationTupleParams {
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

export declare namespace Organization {
  export {
    type OrganizationFull as OrganizationFull,
    type OrganizationListResponse as OrganizationListResponse,
    type OrganizationCountResponse as OrganizationCountResponse,
    type OrganizationGetOrganizationCategoriesResponse as OrganizationGetOrganizationCategoriesResponse,
    type OrganizationGetOrganizationTypesResponse as OrganizationGetOrganizationTypesResponse,
    type OrganizationTupleResponse as OrganizationTupleResponse,
    type OrganizationCreateParams as OrganizationCreateParams,
    type OrganizationUpdateParams as OrganizationUpdateParams,
    type OrganizationListParams as OrganizationListParams,
    type OrganizationCountParams as OrganizationCountParams,
    type OrganizationGetParams as OrganizationGetParams,
    type OrganizationGetOrganizationCategoriesParams as OrganizationGetOrganizationCategoriesParams,
    type OrganizationGetOrganizationTypesParams as OrganizationGetOrganizationTypesParams,
    type OrganizationTupleParams as OrganizationTupleParams,
  };
}
