// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { OffsetPage, type OffsetPageParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Organizationdetails extends APIResource {
  /**
   * Service operation to take a single OrganizationDetails as a POST body and ingest
   * into the database. OrganizationDetails represent details of organizations such
   * as a corporation, manufacturer, consortium, government, etc. An organization can
   * have detail records from several sources. A specific role is required to perform
   * this service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.organizationdetails.create({
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idOrganization: 'ORGANIZATION-ID',
   *   name: 'some.user',
   *   source: 'some.user',
   * });
   * ```
   */
  create(body: OrganizationdetailCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/udl/organizationdetails', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to update an OrganizationDetails object. OrganizationDetails
   * represent details of organizations such as a corporation, manufacturer,
   * consortium, government, etc. An organization can have detail records from
   * several sources. A specific role is required to perform this service operation.
   * Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.organizationdetails.update('id', {
   *   classificationMarking: 'U',
   *   dataMode: 'TEST',
   *   idOrganization: 'ORGANIZATION-ID',
   *   name: 'some.user',
   *   source: 'some.user',
   * });
   * ```
   */
  update(pathID: string, body: OrganizationdetailUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(path`/udl/organizationdetails/${pathID}`, {
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
   * for await (const organizationdetailListResponse of client.organizationdetails.list(
   *   { name: 'name' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OrganizationdetailListParams,
    options?: RequestOptions,
  ): PagePromise<OrganizationdetailListResponsesOffsetPage, OrganizationdetailListResponse> {
    return this._client.getAPIList('/udl/organizationdetails', OffsetPage<OrganizationdetailListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Service operation to delete an OrganizationDetails specified by the passed ID
   * path parameter. OrganizationDetails represent details of organizations such as a
   * corporation, manufacturer, consortium, government, etc. An organization can have
   * detail records from several sources. A specific role is required to perform this
   * service operation. Please contact the UDL team for assistance.
   *
   * @example
   * ```ts
   * await client.organizationdetails.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/udl/organizationdetails/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Service operation to get a single OrganizationDetails by a source passed as a
   * query parameter. OrganizationDetails represent details of organizations such as
   * a corporation, manufacturer, consortium, government, etc. An organization can
   * have detail records from several sources.
   *
   * @example
   * ```ts
   * const response =
   *   await client.organizationdetails.findBySource({
   *     name: 'name',
   *     source: 'source',
   *   });
   * ```
   */
  findBySource(
    query: OrganizationdetailFindBySourceParams,
    options?: RequestOptions,
  ): APIPromise<OrganizationdetailFindBySourceResponse> {
    return this._client.get('/udl/organizationdetails/findBySource', { query, ...options });
  }

  /**
   * Service operation to get a single OrganizationDetails by its unique ID passed as
   * a path parameter. OrganizationDetails represent details of organizations such as
   * a corporation, manufacturer, consortium, government, etc. An organization can
   * have detail records from several sources.
   *
   * @example
   * ```ts
   * const organizationDetailsFull =
   *   await client.organizationdetails.get('id');
   * ```
   */
  get(
    id: string,
    query: OrganizationdetailGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Shared.OrganizationDetailsFull> {
    return this._client.get(path`/udl/organizationdetails/${id}`, { query, ...options });
  }
}

export type OrganizationdetailListResponsesOffsetPage = OffsetPage<OrganizationdetailListResponse>;

/**
 * Model representation of additional detailed organization data as collected by a
 * particular source.
 */
export interface OrganizationdetailListResponse {
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
}

export type OrganizationdetailFindBySourceResponse =
  Array<OrganizationdetailFindBySourceResponse.OrganizationdetailFindBySourceResponseItem>;

export namespace OrganizationdetailFindBySourceResponse {
  /**
   * Model representation of additional detailed organization data as collected by a
   * particular source.
   */
  export interface OrganizationdetailFindBySourceResponseItem {
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
  }
}

export interface OrganizationdetailCreateParams {
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
}

export interface OrganizationdetailUpdateParams {
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
  body_id?: string;

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
}

export interface OrganizationdetailListParams extends OffsetPageParams {
  /**
   * Organization details name.
   */
  name: string;
}

export interface OrganizationdetailFindBySourceParams {
  /**
   * Organization details name.
   */
  name: string;

  /**
   * The source of the OrganizationDetails records to find.
   */
  source: string;

  firstResult?: number;

  maxResults?: number;
}

export interface OrganizationdetailGetParams {
  firstResult?: number;

  maxResults?: number;
}

export declare namespace Organizationdetails {
  export {
    type OrganizationdetailListResponse as OrganizationdetailListResponse,
    type OrganizationdetailFindBySourceResponse as OrganizationdetailFindBySourceResponse,
    type OrganizationdetailListResponsesOffsetPage as OrganizationdetailListResponsesOffsetPage,
    type OrganizationdetailCreateParams as OrganizationdetailCreateParams,
    type OrganizationdetailUpdateParams as OrganizationdetailUpdateParams,
    type OrganizationdetailListParams as OrganizationdetailListParams,
    type OrganizationdetailFindBySourceParams as OrganizationdetailFindBySourceParams,
    type OrganizationdetailGetParams as OrganizationdetailGetParams,
  };
}
